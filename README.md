# Exclusive Essence — Shopify Theme

Online Store 2.0 theme for **Exclusive Essence Hair & Beauty Emporium**.
Visual design, copy, departments, catalog, layaway, and imagery match
[exclusiveessence.store](https://exclusiveessence.store). Shopify owns cart,
checkout, accounts, collections, and product pages.

This branch is a full polish pass over the starter theme:

- **One real Shopify cart everywhere** — every Add to Cart button uses `/cart/add.js`; the cart drawer reads `/cart.js`, changes quantities with `/cart/change.js`, and checks out through Shopify checkout
- **High-resolution product shots** (Shopify CDN up to 2000px `srcset`, plus studio shots for SKUs that had no photo)
- **Navigation** uses real Shopify collection / search / cart / account URLs on every page
- **Wishlist** saved per device (product handles in `localStorage`), available from the header and mobile menu
- **Layaway requests** are sent to the store inbox through Shopify's contact form (no app needed)
- Product, collection, search, cart, and account templates match the porcelain / gold storefront
- OS 2.0 **header-group** and **footer-group** so the theme editor can rearrange chrome

## Upload

1. Shopify admin → **Online Store → Themes**
2. **Add theme → Upload zip file**
3. Zip the theme root (this folder: `assets`, `config`, `layout`, `locales`, `sections`, `snippets`, `templates`)
4. Preview, then **Publish**

Do not zip a parent folder. The zip must contain `layout/theme.liquid` at the top level.

## After you publish

### 1. Create department collections

The live Shopify store currently only has `frontpage` and `enhancers`. Until
department collections exist, every department link falls back to
`/collections/all` (the full catalog). Create **smart collections** with these
handles so navigation and chips deep-link correctly:

| Handle | Title | Smart condition |
|---|---|---|
| human-hair | Human Hair | Product type is equal to `Human Hair` |
| hair-care | Hair Care | Product type is equal to `Hair care` **or** `Shampoo` **or** `Conditioner` |
| hair-color | Hair Color | Product type is equal to `hair dye` |
| styling-edge | Styling & Edge | Product type is equal to `Hair styling product` |
| tools-accessories | Tools & Accessories | Product type is equal to `COMBS - BRUSHES` |
| braids-wigs-crochet | Braids, Wigs & Crochet | Product type is equal to `Braiding Hair` **or** `Wigs` **or** `CROCHET` |
| skin-body | Skin & Body | Product type is equal to `Body Butter` **or** `skin care` |
| beauty-fashion | Beauty & Fashion | Product type is equal to `Eyelashes And Make up` **or** `Watches` |
| essentials | Essentials | Product tag is equal to `essentials` (or include leftover types) |

You can also build them as **manual** collections and add products in Admin.

### 2. Product photos

- Native product / collection / search cards request **400 / 800 / 1200 / 1600 / 2000px** via `image_url`
- Homepage JS catalog uses the same 2000px Shopify CDN transforms
- 11 SKUs with no Shopify media now ship studio product photography in `assets/product-*.jpg`

Replacing a photo in **Shopify Admin → Products** automatically updates every template.

### 3. Navigation

Header, mega menu, mobile rail, footer, and collection chips link to:

- `/collections/all` (full catalog — always works)
- Department collections when those handles exist
- `/search?q=` · `/cart` · `/account`

### 4. Pricing & layaway

- Products priced at **$0** show "In Store" and cannot be added to the cart, so nothing is ever sold for free by mistake.
- Products with more than one variant show **Choose Options** on cards and are added from the product page.
- **Layaway**: shoppers pick *Layaway Plan* in the cart drawer, enter name / phone / email and agree to the terms. The request (items, totals, 25% deposit, due date) arrives as a contact-form email in the store inbox (**Settings → Notifications → Contact form** sender). Staff then collect the deposit and confirm the schedule.

## Color lock

porcelain `#fffefd` · pearl `#f8f7f3` · ivory `#f3ede2` · cream `#ebe0cf` · gold `#c79b3b` · gold-2 `#e4c778` · antique `#8f6928` · bronze `#6c4d20` · ink `#171714` · charcoal `#34312c` · muted `#6f6a61` · line `#e4dac8` · success `#55704c`

## Flagship

2100 Cleveland Ave, Columbus, OH 43211  
Mon–Sat 10 AM–10 PM · Sun 12–6 PM  
Instagram [@shopexclusiveessence](https://www.instagram.com/shopexclusiveessence)
