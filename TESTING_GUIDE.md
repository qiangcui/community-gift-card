# Community Gift Card Testing Guide

Simple step-by-step guide for testing gift card purchases, redemptions, and generating reports.

## Quick Overview

1. **Enable test mode** in GiftUp
2. **Buy** gift cards from the website
3. **Redeem** gift cards using three cashier accounts
4. **Generate** redemption reports for each store
5. **Send** payments to stores based on reports

---

## Step 0: Enable Test Mode in GiftUp

### Login to GiftUp

1. **Go to GiftUp Login Page:**
   - Navigate to: https://giftup.app/account/login
   - Or go to: https://giftup.app/ and click "Sign In" or "Log In"

2. **Login Credentials:**
   - Email: `support@tekmaxllc.com`
   - Password: `Tekmax123$`

3. **Navigate to Community Gift Card Account:**
   - After logging in, select or navigate to the **"Community Gift Card"** account
   - Program ID: `d50684a7-22af-4696-934b-08dab0fa3766`

### Enable Test Mode

1. **Go to Settings:**
   - Click on **Settings** or **Program Settings**
   - Look for **"Test Mode"** or **"Sandbox Mode"** option

2. **Enable Test Mode:**
   - Toggle **Test Mode** to **ON** or **Enabled**
   - This allows testing without processing real payments
   - Test transactions will be marked as test data

3. **Verify Test Mode is Active:**
   - You should see a "Test Mode" indicator in the dashboard
   - Test transactions will be clearly marked

### Switch to Desktop Mode

1. **Access Desktop Redemption Interface:**
   - Go to **Redemption** or **Point of Sale** section
   - Look for **"Desktop Mode"** or **"Web Redemption"** option
   - Click to enable/access desktop redemption interface

2. **Desktop Mode URL:**
   - Note the desktop redemption URL (if provided)
   - This will be used by cashiers for testing

3. **Test Desktop Interface:**
   - Verify the desktop redemption interface loads correctly
   - Check that cashiers can access it

---

## Step 1: Purchase Gift Cards

1. Go to: `https://dallasgiftcard.com/giftcard/`
2. Click **"Buy a Gift Card"**
3. Complete purchase and save gift card codes for testing

---

## Step 2: Cashier Accounts

Three cashier accounts are set up:

| Store | Email | PIN |
|-------|-------|-----|
| Kkoki Korean BBQ Denver | `kkoki-cashier1@gmail.com` | `4321` |
| Tofu House 1962 | `hotdog-cashier1@gmail.com` | `4321` |
| Waikiki POKE | `waikiki-cashier1@gmail.com` | `4321` |

**All cashiers use PIN: `4321`**

---

## Step 3: Test Redemptions (Desktop Mode)

### Access Desktop Redemption Interface

1. **Get Desktop Redemption URL:**
   - Logged in as `support@tekmaxllc.com`
   - Go to GiftUp dashboard → Redemption settings
   - Copy the desktop/web redemption URL
   - Or use the desktop mode interface from GiftUp dashboard

2. **Open Desktop Redemption:**
   - Open the desktop redemption URL in a browser
   - This is the interface cashiers will use for testing

### For Each Cashier:

1. **Log in to Desktop Redemption:**
   - Use cashier email and PIN: `4321`
   - Email: `kkoki-cashier1@gmail.com` / `hotdog-cashier1@gmail.com` / `waikiki-cashier1@gmail.com`
   - PIN: `4321`

2. **Redeem gift cards in desktop mode:**
   - Enter gift card code
   - Enter redemption amount
   - Verify store is correct (should auto-select based on cashier)
   - Confirm redemption

3. **Repeat 3-5 times per cashier:**
   - Use different gift card codes
   - Use various amounts ($10, $25, $50, $75, $100)
   - Test in desktop mode interface

**Track redemptions:**
- Gift Card Code
- Amount
- Date/Time
- Store
- Cashier Email

---

## Step 4: Generate Reports

1. **Log into GiftUp Dashboard:**
   - Go to: https://giftup.app/account/login
   - Login with: `support@tekmaxllc.com` / Password: `Tekmax123$`
   - Navigate to Community Gift Card account

2. **Go to Reports section:**
   - Click on **Reports** or **Analytics** in the dashboard
   - Ensure you're viewing test mode transactions (if applicable)

3. **Generate report for each store:**
   - Filter by **Kkoki Korean BBQ Denver** → Export CSV/Excel
   - Filter by **Tofu House 1962** → Export CSV/Excel
   - Filter by **Waikiki POKE** → Export CSV/Excel

**Or filter by cashier email:**
- `kkoki-cashier1@gmail.com`
- `hotdog-cashier1@gmail.com`
- `waikiki-cashier1@gmail.com`

**Note:** In test mode, reports will show test transactions. Make sure to filter for the correct date range.

---

## Step 5: Calculate Payments

For each store report:

1. **Sum all redemption amounts**
2. **Calculate total per store:**
   - Kkoki Korean BBQ: Total from report
   - Tofu House 1962: Total from report
   - Waikiki POKE: Total from report

3. **Account for fees** (if applicable):
   - Subtract any GiftUp fees
   - Example: $150.00 × 0.97 = $145.50 (if 3% fee)

---

## Step 6: Send Payments to Stores

1. **Prepare payment summary for each store:**
   ```
   Store: [Store Name]
   Period: [Date Range]
   Total Redemptions: $[Amount]
   Payment Amount: $[Amount after fees]
   ```

2. **Process payments:**
   - Bank transfer, check, or PayPal
   - Include redemption report as attachment
   - Send confirmation email to store

3. **Keep records:**
   - Payment date
   - Amount
   - Transaction reference

---

## Quick Checklist

### Setup Phase
- [ ] Login to GiftUp with support@tekmaxllc.com
- [ ] Navigate to Community Gift Card account
- [ ] Enable Test Mode in GiftUp settings
- [ ] Access Desktop Mode redemption interface
- [ ] Verify desktop mode is working

### Purchase Phase
- [ ] Purchase gift cards from website
- [ ] Verify gift cards are in test mode
- [ ] Save gift card codes for testing

### Redemption Phase
- [ ] Redeem with Kkoki cashier in desktop mode (kkoki-cashier1@gmail.com / PIN: 4321)
- [ ] Redeem with Tofu House cashier in desktop mode (hotdog-cashier1@gmail.com / PIN: 4321)
- [ ] Redeem with Waikiki cashier in desktop mode (waikiki-cashier1@gmail.com / PIN: 4321)

### Reporting Phase
- [ ] Generate reports for all three stores
- [ ] Verify test mode transactions are marked correctly
- [ ] Calculate payment totals

### Payment Phase
- [ ] Send payments to stores (if needed in test mode)

---

## Test Data Template

```
Date: _______________

Kkoki Korean BBQ:
1. Code: ______ Amount: $_____
2. Code: ______ Amount: $_____
3. Code: ______ Amount: $_____
Total: $_____

Tofu House 1962:
1. Code: ______ Amount: $_____
2. Code: ______ Amount: $_____
3. Code: ______ Amount: $_____
Total: $_____

Waikiki POKE:
1. Code: ______ Amount: $_____
2. Code: ______ Amount: $_____
3. Code: ______ Amount: $_____
Total: $_____
```

---

## Troubleshooting

**Redemption fails?**
- Check gift card code is correct
- Verify gift card hasn't been fully redeemed
- Ensure cashier has permissions

**Can't generate reports?**
- Check date range includes redemption dates
- Verify report access permissions
- Try different export format (CSV/Excel)

**Report totals don't match?**
- Verify date range is correct
- Check filters (store/cashier) are correct
- Reconcile with transaction logs

---

## GiftUp Account Information

- **Login Page:** https://giftup.app/account/login
- **Dashboard:** https://giftup.app/
- **Admin Email:** support@tekmaxllc.com
- **Admin Password:** Tekmax123$
- **Program ID:** d50684a7-22af-4696-934b-08dab0fa3766
- **Account Name:** Community Gift Card

## Important Notes

- **Test Mode:** All testing should be done with Test Mode enabled
- **Desktop Mode:** Use desktop redemption interface for cashier testing
- **Test Transactions:** Test mode transactions are clearly marked and won't process real payments
