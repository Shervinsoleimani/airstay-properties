# Airstay Properties — Deployment Guide
## Complete setup from code → live website with Hostaway + Stripe

---

## STEP 1: Install & Run Locally

```bash
# Install dependencies
npm install

# Copy environment file
cp .env.example .env.local
# Edit .env.local with your real keys (see Step 3 + 4)

# Run development server
npm run dev
# Opens at http://localhost:5173
```

---

## STEP 2: Deploy to Vercel (Recommended)

### 2a. Push to GitHub
1. Create a free account at github.com
2. Create a new repo called `airstay-properties`
3. Push your code:
```bash
git init
git add .
git commit -m "Initial Airstay website"
git remote add origin https://github.com/YOUR_USERNAME/airstay-properties.git
git push -u origin main
```

### 2b. Connect to Vercel
1. Go to vercel.com → Sign up free
2. Click "New Project"
3. Import your GitHub repo `airstay-properties`
4. Framework: **Vite** (auto-detected)
5. Click **Deploy** — your site is live in ~60 seconds

Your site will be at: `https://airstay-properties.vercel.app`

---

## STEP 3: Connect GoDaddy Domain

### In Vercel:
1. Go to your project → **Settings** → **Domains**
2. Enter your domain: `airstayproperties.com`
3. Vercel gives you two DNS records:
   - `A record: @ → 76.76.21.21`
   - `CNAME record: www → cname.vercel-dns.com`

### In GoDaddy:
1. Log into GoDaddy → **My Products**
2. Click **DNS** next to your domain
3. **Delete** any existing A record for `@`
4. **Add** the two records from Vercel above
5. Wait 10–30 minutes for DNS to propagate
6. Your site is live at your real domain with HTTPS ✅

---

## STEP 4: Direct booking (Hostaway booking website)

Direct reservations run on our Hostaway booking website at
https://book.airstayproperties.com. The marketing site links to it
(`BOOKING_URL` in `src/lib/data.js`). **Do not** call the Hostaway API from
the browser and **never** store Hostaway or Stripe secrets in `VITE_`
variables: Vite publishes them in the public JavaScript bundle.

## STEP 5: Website forms → email

`/api/lead` emails every form (with attachments) to info@airstayproperties.com
through Resend. Install "Resend for Vercel" (vercel.com/marketplace/resend)
on this project; it adds `RESEND_API_KEY` automatically.

---

## STEP 6: Add Real Property Photos

Replace the gradient placeholders in `src/components/PropertyCard.jsx`:

```jsx
// Replace this:
<div className="property-img-placeholder" />

// With this:
<img 
  src="/images/properties/yaletown-1.jpg" 
  alt="The Yaletown Loft"
  className="w-full aspect-[3/4] object-cover"
/>
```

Put your photos in the `/public/images/properties/` folder.
**Recommended:** Compress images to <500KB each using squoosh.app

---

## STEP 7: Go Live Checklist

Before switching from test to live:

- [ ] All .env vars set in Vercel (not .env.local)
- [ ] Switch Stripe from `pk_test_` to `pk_live_` keys
- [ ] Test a real booking end-to-end with a $1 test charge
- [ ] Verify Hostaway reservations appear after test booking
- [ ] Add Google Analytics: `VITE_GA_ID=G-XXXXXXXXXX`
- [ ] Set up Stripe webhook for payment failure handling
- [ ] Add real property photos
- [ ] Update contact email addresses in Footer.jsx
- [ ] Register Google My Business for both cities

---

## TECH STACK SUMMARY

| Layer | Technology | Purpose |
|-------|-----------|---------|
| Frontend | React + Vite | Website |
| Styling | Tailwind CSS | Design system |
| Animations | Framer Motion | Scroll reveals, transitions |
| Routing | React Router | Pages |
| Hosting | Vercel | Deployment + CDN |
| Domain | GoDaddy | Your domain |
| PMS | Hostaway API | Listings + Bookings |
| Pricing | Pricelabs → Hostaway | Dynamic rates |
| Payments | Stripe | Card processing |
| Notifications | react-hot-toast | In-app toasts |

---

## ADDING NEW CITIES (US Expansion)

When you expand to new cities (e.g., Seattle, New York):

1. Add new listings in Hostaway (they sync automatically)
2. Update `src/lib/hostaway.js` DEMO_LISTINGS with new properties
3. Add city to the filter options in `src/pages/Properties.jsx`
4. Update city selectors in BookingModal and OwnerModal
5. Consider adding a `/cities` page

---

## SUPPORT

For Hostaway API issues: support@hostaway.com
For Stripe issues: stripe.com/docs
For Vercel issues: vercel.com/docs
For the website code: keep this guide and your .env.example
