# Deployment Guide - Community Gift Card

This guide explains how to deploy the Community Gift Card application to the production server using SSH and rsync.

## Overview

The deployment uses a bash script (`deploy.sh`) that:
- Builds the React application
- Uses `rsync` over SSH to upload files to the server
- Only affects files within the `public_html/giftcard` directory
- Preserves existing files outside the deployment directory

## Prerequisites

- Access to cPanel for the server
- SSH access enabled on the server
- `rsync` installed locally (usually comes with macOS/Linux)
- Node.js and npm installed locally

## Step 1: Generate SSH Key

If you don't already have an SSH key for deployment, generate one:

```bash
ssh-keygen -t rsa -b 4096 -f ~/.ssh/community_gift_card_key -N "" -C "community-gift-card-deploy"
chmod 600 ~/.ssh/community_gift_card_key
chmod 644 ~/.ssh/community_gift_card_key.pub
```

This creates:
- **Private key:** `~/.ssh/community_gift_card_key` (stays on your local machine)
- **Public key:** `~/.ssh/community_gift_card_key.pub` (will be added to server)

**Important:** Never share or upload your private key. Only the public key goes on the server.

## Step 2: Add Public Key to cPanel

1. **View your public key:**
   ```bash
   cat ~/.ssh/community_gift_card_key.pub
   ```

2. **In cPanel:**
   - Navigate to **SSH Access** or **Manage SSH Keys**
   - Click **Import Key**
   - **Choose a name:** Enter `giftcard` (or any name you prefer)
   - **Private key field:** Leave empty (not needed)
   - **Passphrase:** Leave empty
   - **Public key field:** Paste the entire public key from step 1
   - Click **Import**

3. **Authorize the key:**
   - Find the imported key in the "Public Keys" list
   - Click **"Authorize"** next to it
   - The key status should change to "authorized"

## Step 3: Configure Deployment Script

Edit `deploy.sh` and update the configuration variables:

```bash
USER="dallasgiftcard"              # Your SSH username
HOST="dallasgiftcard.com"          # Your domain name
REMOTE_DIR="public_html/giftcard"  # Remote deployment directory
SSH_KEY="$HOME/.ssh/community_gift_card_key"  # Path to your private key
```

**Note:** The `SSH_KEY` path uses `$HOME` instead of `~` to ensure proper path expansion in bash scripts.

## Step 4: Test SSH Connection

Before deploying, test that SSH key authentication works:

```bash
ssh -i ~/.ssh/community_gift_card_key dallasgiftcard@dallasgiftcard.com
```

If this connects without asking for a password, your SSH key is properly set up. If it asks for a password, check:

1. The public key is authorized in cPanel
2. The private key permissions are correct (`chmod 600 ~/.ssh/community_gift_card_key`)
3. The key format is valid (regenerate if needed)

## Step 5: Deploy

Run the deployment script:

```bash
cd community-gift-card
./deploy.sh
```

The script will:
1. Build the React application (`npm run build`)
2. Upload root files (excluding assets) to `public_html/giftcard/`
3. Upload assets folder with cleanup of old hashed files

## Deployment Behavior

- **Only affects:** Files within `public_html/giftcard/` directory
- **Preserves:** All files outside the giftcard folder remain untouched
- **Updates:** Existing files are updated with new versions
- **Cleans up:** Old hashed asset files are removed from the assets folder

## Troubleshooting

### "Permissions 0644 for key are too open"

Fix key permissions:
```bash
chmod 600 ~/.ssh/community_gift_card_key
```

### "Load key: invalid format"

The key file may be corrupted. Regenerate it:
```bash
rm ~/.ssh/community_gift_card_key ~/.ssh/community_gift_card_key.pub
ssh-keygen -t rsa -b 4096 -f ~/.ssh/community_gift_card_key -N "" -C "community-gift-card-deploy"
chmod 600 ~/.ssh/community_gift_card_key
```

Then update the public key in cPanel (repeat Step 2).

### "Permission denied (publickey,password)"

The public key may not be properly authorized on the server. Check:
1. The key is "authorized" (not just imported) in cPanel
2. The public key in cPanel matches your local public key:
   ```bash
   cat ~/.ssh/community_gift_card_key.pub
   ```
3. On the server, verify `.ssh` directory and `authorized_keys` permissions:
   ```bash
   chmod 700 ~/.ssh
   chmod 600 ~/.ssh/authorized_keys
   ```

### SSH still asking for password

Even with an authorized key, you may need to:
1. Delete and re-import the public key in cPanel
2. Verify the key format matches (compare public keys)
3. Check server-side SSH configuration

## Security Notes

- **Private keys never leave your local machine**
- **Only public keys are added to the server**
- **SSH key permissions must be 600** (read/write for owner only)
- **The deployment only affects the specified directory** (`public_html/giftcard`)

## Manual Deployment (Alternative)

If SSH key setup isn't working, you can manually deploy:

1. **Build locally:**
   ```bash
   npm run build
   ```

2. **Upload via cPanel File Manager or FTP:**
   - Navigate to `public_html/giftcard`
   - Upload contents of the `dist` folder
   - Ensure `.htaccess` file is included (if using React Router)

## File Structure on Server

After deployment, the server structure should be:
```
public_html/
├── giftcard/           # Deployment directory
│   ├── index.html
│   ├── .htaccess      # (if needed for React Router)
│   └── assets/
│       └── index-[hash].js
└── [other folders untouched]
```

## Re-deployment

To deploy updates, simply run the deployment script again:

```bash
./deploy.sh
```

The script will automatically:
- Rebuild the application with latest changes
- Upload only changed files
- Clean up old asset files with different hashes

---

**Support:** If you encounter issues not covered here, check the server error logs in cPanel or contact your hosting provider.
