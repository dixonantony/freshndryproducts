# Fresh N Dry Products

Product website for Fresh N Dry Products, a freeze-dried food maker based in Muringoor, Chalakudy, Kerala.

## Run locally

Prerequisite: Node.js.

```bash
npm install
npm run dev
```

Vite serves the app at `http://localhost:3000`.

## Site pages

- `/` Home and featured products
- `/shop` Product catalogue and category filters
- `/products/:productId` Product details and email enquiry
- `/process` Freeze-drying overview and source
- `/our-story` Company information
- `/contact` Product, availability, and bulk enquiries

## Product and contact content

Product names, pack sizes, and prices are maintained in `src/constants.ts`. Confirm prices and availability before publishing changes. Use each product's current packaging as the source of truth for ingredients, allergens, nutrition claims, and storage information.

The contact form uses EmailJS. See [README_CONTACT_SETUP.md](README_CONTACT_SETUP.md) for dashboard and deployment checks.
