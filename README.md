# HOME KIT — Static Brand Website

A lightweight bilingual (English / Arabic) website for the Home Kit / هوم كيت brand, based on the supplied black, charcoal and gray logo.

## Included

- `index.html` — complete one-page website: hero, six product categories, about, and contact.
- `styles.css` — brand styling, mobile-responsive layout, and RTL support.
- `script.js` — English/Arabic switch, mobile navigation, and contact links.
- `assets/home-kit-original-logo.webp` — optimized copy of your supplied logo design.
- `assets/home-kit-icon.svg` — simplified roof icon based on the logo for favicon and navbar.

## Before you publish (important)

Edit `script.js`, at the very top, and enter your **real** contact information:

```js
const HOME_KIT_CONFIG = {
  email: "your-real-email@example.com",
  phone: "+20 10 1234 5678",
  whatsapp: "201012345678",
  locationEn: "Your actual business city, Egypt",
  locationAr: "محافظة نشاطك الفعلية، مصر"
};
```

The details above are **examples**, not the brand's verified information. Do not publish them unchanged. Leave channels blank to hide them. Blank details cause a launch reminder in the Contact area.

You can edit product category titles/descriptions in `script.js` (both language dictionaries), then edit category names in `index.html` if you want a functional no-JavaScript fallback.

Replace category icons and add your own authentic product photos later, if available. This is an informational brand showcase, **not a shopping cart or payment website**.

## Preview on your computer

Open `index.html` in a browser. It uses no frameworks, external libraries, or build process.

Or run a simple local server:

```bash
python -m http.server 8000
```

Then open `http://localhost:8000`.

## Publish for a business website URL

You can upload the *contents* of this folder to any static host such as Netlify, GitHub Pages, Vercel, or your hosting account's `public_html` folder. Connecting your own brand domain is recommended for a professional presence. Set real contact details and use genuine brand/product information first.

## Noon seller registration note

This website represents the brand, but does not replace Noon seller-verification requirements. Check the official onboarding requirements at https://sell.noon.com/egypt-en/getting-started and https://helpcenter.noon.partners/en/category/onboarding-and-registration/documents-required-to-sell-on-noon. A website alone does not guarantee seller or brand approval.
