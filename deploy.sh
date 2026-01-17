#!/bin/bash

# Configuration
USER="dallasgiftcard"
HOST="dallasgiftcard.com"
REMOTE_DIR="public_html/giftcard"
SSH_KEY="$HOME/.ssh/community_gift_card_key"

echo "🚀 Starting Deployment to $HOST..."

# 1. Build React App
echo "📦 Building Frontend..."
npm run build

# 2. Deploy Frontend
echo "📤 Uploading Root Files (preserving unrelated server folders)..."
rsync -avz -e "ssh -i $SSH_KEY" dist/ $USER@$HOST:$REMOTE_DIR/ \
    --exclude 'assets/'

echo "📤 Uploading Assets (cleaning up old hashed files)..."
rsync -avz -e "ssh -i $SSH_KEY" --delete dist/assets/ $USER@$HOST:$REMOTE_DIR/assets/

echo "✅ Deployment Complete! Visit https://$HOST/giftcard"
