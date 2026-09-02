# Exclusive Essence — Shopify Theme

Online Store 2.0 theme for **Exclusive Essence Hair & Beauty Emporium**.
Visual design, copy, departments, catalog, layaway, and imagery match
[exclusiveessence.store](https://exclusiveessence.store). Shopify owns cart,
checkout, accounts, collections, and product pages.

This branch is a full polish pass over the starter theme:

- **699 products** merchandised in the homepage catalog (Shopify storefront + original assortment)
- **High-resolution product shots** (Shopify CDN up to 2000px `srcset`, plus studio shots for SKUs that had no photo)
- **All products visible** on the homepage catalog — no hidden drawer of inventory
- **Navigation** uses real Shopify collection / search / cart / account URLs
- Product, collection, search, and cart templates match the porcelain / gold storefront

## Upload

1. Shopify admin → **Online Store → Themes**
2. **Add theme → Upload zip file**
3. Zip the theme root (this folder: `assets`, `config`, `layout`, `locales`, `sections`, `snippets`, `templates`)
4. Preview, then **Publish**

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

Replacing a photo in **Shopify Admin → Products** automatically upgrades Liquid templates. To refresh the homepage JS catalog, re-export `assets/ee-catalog.js`.

### 3. Navigation

Header, mega menu, mobile rail, and footer link to:

- `/collections/all` (full catalog — always works)
- Department collections when those handles exist
- `/search?q=` · `/cart` · `/account`

Homepage department chips still filter the on-page catalog instantly.

## Color lock

porcelain `#fffefd` · pearl `#f8f7f3` · ivory `#f3ede2` · cream `#ebe0cf` · gold `#c79b3b` · gold-2 `#e4c778` · antique `#8f6928` · bronze `#6c4d20` · ink `#171714` · charcoal `#34312c` · muted `#6f6a61` · line `#e4dac8` · success `#55704c`

## Flagship

2100 Cleveland Ave, Columbus, OH 43211  
Mon–Sat 10 AM–10 PM · Sun 12–6 PM  
Instagram [@shopexclusiveessence](https://www.instagram.com/shopexclusiveessence)
