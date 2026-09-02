
const ASSETS = {"logo":"assets/b277e37070df.png","hero":"assets/9ded22755dd9.webp","flat":"assets/b89da2c9d885.webp","vanity":"assets/f6bd3b960555.webp","portrait":"assets/265b3dce63db.webp"};
const BRAND_LOGOS = [{"name":"Mielle","src":"assets/bee1d56cdb39.png"},{"name":"SheaMoisture","src":"assets/3c18662832c1.png"},{"name":"Eco Style","src":"assets/72be934db907.png"},{"name":"EBIN New York","src":"assets/27cee9554fe3.png"},{"name":"Revlon","src":"assets/eebc7f0c2689.png"},{"name":"Outre","src":"assets/b62377066f36.png"},{"name":"KISS Colors & Care","src":"assets/385c29f43952.png"},{"name":"4 Seasons Skin Care","src":"assets/0d64a70b7ee9.png"},{"name":"Olaplex","src":"assets/f7f913427511.png"}];
const HERO_SLIDES = [{"eyebrow": "Beauty Supply Store Picks", "title": "Human Hair <em>Collection</em>", "text": "Shop everyday texture, length and color options from the current Exclusive Essence assortment with a retail-first layout inspired by the beauty supply shopping experience.", "points": ["Weaves, bundles & texture options", "Premium value and everyday picks", "Perfect for in-store browsing"], "primary": "Shop Human Hair", "secondary": "Browse Departments", "filter": "Human Hair", "products": [{"title": "SHAKE N GO Milkyway Pure 100% Human Hair Weave - YAKY WEAVE 12\" / #1", "image": "https://cdn.shopify.com/s/files/1/0716/1390/7027/files/Screenshot2026-07-11at10.46.28AM_b3a0c994-3945-4649-b8b7-804c42b64f7f.png?v=1783793519"}, {"title": "SHAKE N GO Milkyway Pure 100% Human Hair Weave 12\" - #1b YAKY WEAVE", "image": "https://cdn.shopify.com/s/files/1/0716/1390/7027/files/Screenshot2026-07-11at10.46.28AM_59d41d95-e852-492f-b04d-54b5fe0aedba.png?v=1783793879"}, {"title": "SHAKE N GO Milkyway Pure 100% Human Hair Weave 12\" - #2 YAKY WEAVE", "image": "https://cdn.shopify.com/s/files/1/0716/1390/7027/files/Screenshot2026-07-11at10.46.28AM_e126d72f-ec79-4b37-95c4-2ef4f2725436.png?v=1783794034"}, {"title": "SHAKE N GO Milkyway Pure 100% Human Hair Weave 12\" - #4 YAKY WEAVE", "image": "https://cdn.shopify.com/s/files/1/0716/1390/7027/files/Screenshot2026-07-11at10.46.28AM_df0e7bc7-84e9-47e6-8554-d16d6c4e0428.png?v=1783794149"}]}, {"eyebrow": "Store Shelves You Recognize", "title": "Hair Care <em>Essentials</em>", "text": "From curl care to treatments, sprays and wash-day staples, spotlight the catalog products your customers already know and trust.", "points": ["Conditioners, gels & leave-ins", "Hold, moisture & finishing support", "Retail shelf presentation"], "primary": "Shop Hair Care", "secondary": "See Featured Brands", "filter": "Hair Care", "products": [{"title": "African Pride Black Castor Miracle Braid, Loc & Twist Gel, Extra Hold, 8 OZ", "image": "https://cdn.shopify.com/s/files/1/0716/1390/7027/files/Screenshot2026-07-11at12.05.21PM.png?v=1783796758", "type": "Hair care"}, {"title": "Aunt Jackie's Quench Moisture Intensive Leave-In Conditioner", "image": "https://cdn.shopify.com/s/files/1/0716/1390/7027/files/Screenshot2026-07-11at2.12.27PM.png?v=1783804363", "type": "Hair care"}, {"title": "Got2b freeze spray 2oz", "image": "https://cdn.shopify.com/s/files/1/0716/1390/7027/files/Screenshot2026-07-11at1.58.53PM.png?v=1783803547", "type": "Hair care"}, {"title": "VO5 Extra Body Volumizing Shampoo", "image": "https://cdn.shopify.com/s/files/1/0716/1390/7027/files/Screenshot2026-07-11at2.48.20PM.png?v=1783806544", "type": "Shampoo"}]}, {"eyebrow": "Color & Styling Wall", "title": "Hair Color <em>& Finish</em>", "text": "Showcase vibrant semi-permanent color and styling options with a storefront banner that feels like a real beauty supply promotion instead of a salon ad.", "points": ["Temporary and semi-permanent color", "Easy browse-and-shop merchandising", "Clean retail presentation"], "primary": "Shop Hair Color", "secondary": "View All Products", "filter": "Hair Color", "products": [{"title": "High Beams Intense Temporary Spray-On Hair Color in #20 Black", "image": "https://cdn.shopify.com/s/files/1/0716/1390/7027/files/Screenshot2026-07-11at4.21.27PM.png?v=1783812129", "type": "hair dye"}, {"title": "Adore Semi-Permanent Hair Color #104 Sienna Brown  – 4 oz", "image": "https://cdn.shopify.com/s/files/1/0716/1390/7027/files/Screenshot2026-07-11at4.41.32PM.png?v=1783813322", "type": "hair dye"}, {"title": "Adore Semi-Permanent Hair Color #106 Mahogany  – 4 oz", "image": "https://cdn.shopify.com/s/files/1/0716/1390/7027/files/Screenshot2026-07-11at4.47.57PM.png?v=1783813697", "type": "hair dye"}, {"title": "Adore Semi-Permanent Hair Color #110 Darkest Brown  – 4 oz", "image": "https://cdn.shopify.com/s/files/1/0716/1390/7027/files/Screenshot2026-07-11at4.54.57PM.png?v=1783814162", "type": "hair dye"}]}];
const DEPARTMENTS = [{"name":"Human Hair","subtitle":"Bundles, weaves & extensions","filter":"Human Hair","image":"assets/60c7840dc522.webp"},{"name":"Hair Care","subtitle":"Shampoo, conditioner & treatments","filter":"Hair Care","image":"assets/648c8aa57a0c.webp"},{"name":"Hair Color","subtitle":"Color, developer & touch-ups","filter":"Hair Color","image":"assets/9d9f71cd7938.webp"},{"name":"Styling & Edge","subtitle":"Gels, edge control & finishing","filter":"Styling & Edge","image":"assets/7961b81abc6a.webp"},{"name":"Tools & Accessories","subtitle":"Brushes, combs, caps & essentials","filter":"Tools & Accessories","image":"assets/f15da26ea609.webp"},{"name":"Braids, Wigs & Crochet","subtitle":"Braiding hair, crochet styles & extensions","filter":"Braids, Wigs & Crochet","image":"assets/ebb91484c053.webp"},{"name":"Skin & Body","subtitle":"Skin care, body care & beauty basics","filter":"Skin & Body","image":"assets/44c44cf978f2.webp"},{"name":"Beauty & Fashion","subtitle":"Lashes, nails, cosmetics & fashion","filter":"Beauty & Fashion","image":"assets/e76907a047b4.webp"}];
const CATEGORY_FALLBACKS = {"Human Hair": "assets/60c7840dc522.webp", "Hair Care": "assets/648c8aa57a0c.webp", "Hair Color": "assets/9d9f71cd7938.webp", "Styling & Edge": "assets/7961b81abc6a.webp", "Tools & Accessories": "assets/f15da26ea609.webp", "Braids, Wigs & Crochet": "assets/ebb91484c053.webp", "Skin & Body": "assets/44c44cf978f2.webp", "Beauty & Fashion": "assets/e76907a047b4.webp", "All": "assets/e76907a047b4.webp"};
function categoryFallback(category){return CATEGORY_FALLBACKS[category]||CATEGORY_FALLBACKS.All;}

/* ===== Shopify theme asset + native cart bridge (conversion layer) ===== */
(function(){
  const prefix = window.EE_ASSET_PREFIX || '';
  const fix = (s) => (typeof s === 'string' && s.indexOf('assets/') === 0) ? prefix + s.slice(7) : s;
  if (typeof ASSETS === 'object') Object.keys(ASSETS).forEach(k => { ASSETS[k] = fix(ASSETS[k]); });
  if (typeof BRAND_LOGOS !== 'undefined') BRAND_LOGOS.forEach(b => { b.src = fix(b.src); });
  if (typeof DEPARTMENTS !== 'undefined') DEPARTMENTS.forEach(d => { d.image = fix(d.image); });
  if (typeof CATEGORY_FALLBACKS !== 'undefined') Object.keys(CATEGORY_FALLBACKS).forEach(k => { CATEGORY_FALLBACKS[k] = fix(CATEGORY_FALLBACKS[k]); });
})();

const state = {category:'All',search:'',sort:'featured',visible:48,cart:[],wishlist:new Set(),brand:null,purchaseOption:'full'};
try{state.cart=JSON.parse(localStorage.getItem('ee-store-cart')||'[]');state.wishlist=new Set(JSON.parse(localStorage.getItem('ee-store-wishlist')||'[]'))}catch(e){}
const $=(s,r=document)=>r.querySelector(s), $$=(s,r=document)=>[...r.querySelectorAll(s)];
const money=n=>new Intl.NumberFormat('en-US',{style:'currency',currency:'USD'}).format(n);
const esc=s=>String(s??'').replace(/[&<>'"]/g,m=>({'&':'&amp;','<':'&lt;','>':'&gt;',"'":'&#39;','"':'&quot;'}[m]));
function persist(){try{localStorage.setItem('ee-store-cart',JSON.stringify(state.cart));localStorage.setItem('ee-store-wishlist',JSON.stringify([...state.wishlist]))}catch(e){}}
function assetUrl(s){if(!s)return s;if(typeof s==='string'&&s.indexOf('assets/')===0)return (window.EE_ASSET_PREFIX||'')+s.slice(7);return s;}
function withWidth(url,w){if(!url||typeof url!=='string')return url;if(url.indexOf('cdn.shopify.com')===-1)return assetUrl(url);return url.replace(/_\d+x(?=\.(?:png|jpe?g|webp|gif|avif))/i,'').replace(/(\.(?:png|jpe?g|webp|gif|avif))/i,'_'+w+'x$1');}
function srcset(url){if(!url||url.indexOf('cdn.shopify.com')===-1)return '';return [400,800,1200,1600,2000].map(w=>`${withWidth(url,w)} ${w}w`).join(', ');}
function toast(msg){const t=$('#toast');t.textContent=msg;t.classList.add('show');clearTimeout(toast.t);toast.t=setTimeout(()=>t.classList.remove('show'),2200)}
function openLayer(el){$('#overlay').classList.add('open');el.classList.add('open');document.body.style.overflow='hidden'}
function closeLayers(){$('#overlay').classList.remove('open');$$('.drawer.open,.modal.open').forEach(x=>x.classList.remove('open'));document.body.style.overflow=''}

function productCard(p){
  const wished=state.wishlist.has(p.id),priced=Number(p.price)>0;
  const image=assetUrl(p.image)||categoryFallback(p.category);
  const href='/products/'+encodeURIComponent(p.handle||'');
  const set=srcset(p.image);
  return `<article class="product-card" data-product-id="${esc(p.id)}" data-handle="${esc(p.handle||'')}">
    <div class="product-media">${p.available===false?'<span class="badge" style="background:#6b7280">Sold Out</span>':(p.badge?`<span class="badge">${esc(p.badge)}</span>`:'')}
      <button class="wish ${wished?'active':''}" data-wish="${esc(p.id)}" aria-label="Add to wishlist"><svg class="icon"><path d="M20.8 4.6a5.5 5.5 0 0 0-7.8 0L12 5.6l-1-1a5.5 5.5 0 0 0-7.8 7.8l1 1L12 21l7.8-7.6 1-1a5.5 5.5 0 0 0 0-7.8Z"></path></svg></button>
      <a class="product-media-link" href="${href}">
        <img loading="lazy" decoding="async" src="${esc(withWidth(image,1200))}" ${set?`srcset="${esc(set)}" sizes="(min-width:1200px) 22vw, (min-width:750px) 30vw, 48vw"`:''} alt="${esc(p.title)}" width="800" height="800" onerror="this.onerror=null;this.removeAttribute('srcset');this.src='${esc(categoryFallback(p.category))}'">
      </a>
    </div>
    <div class="product-body">
      <div class="product-brand">${esc(p.brand)}</div>
      <div class="product-title"><a href="${href}">${esc(p.title)}</a></div>
      <div class="product-meta"><span class="price">${priced?money(p.price):'In Store'}</span><span class="rating">★ ${Number(p.rating||4.8).toFixed(1)}</span></div>
      <div class="card-actions">
        <button class="add-btn" ${p.available===false?'data-sold-out disabled':(priced?`data-add="${esc(p.id)}"`:'data-store-only')}>${p.available===false?'Sold Out':(priced?'Add to Cart':'In Store Only')}</button>
        <a class="quick-btn" href="${href}" data-quick="${esc(p.id)}" aria-label="Quick view"><svg class="icon"><circle cx="11" cy="11" r="7"></circle><path d="m20 20-3.5-3.5"></path></svg></a>
      </div>
    </div>
  </article>`;
}


function renderHeroCarousel(){const track=$('#heroCarouselTrack');const dots=$('#heroCarouselDots');if(!track||!dots)return;track.innerHTML=HERO_SLIDES.map((slide,i)=>`<article class="hero-slide ${i===0?'active':''}" data-slide="${i}"><div class="hero-slide-copy"><p class="slide-eyebrow">${esc(slide.eyebrow)}</p><h1>${slide.title}</h1><p>${esc(slide.text)}</p><div class="hero-actions"><a class="btn btn-primary" href="#catalog" data-filter-link="${esc(slide.filter)}">${esc(slide.primary)}</a><a class="btn btn-secondary" href="${slide.secondary.includes('Brand')?'#brands':'#departments'}" ${slide.secondary.includes('All Products')?'data-filter-jump="All"':''}>${esc(slide.secondary)}</a></div><ul class="slide-points">${slide.points.map(point=>`<li>${esc(point)}</li>`).join('')}</ul></div><div class="hero-slide-products">${slide.products.map(product=>`<div class="hero-product"><img loading="eager" src="${esc(product.image)}" alt="${esc(product.title)}" onerror="this.onerror=null;this.src=ASSETS.flat"><div><span>${esc(slide.filter==='Hair Care' && /shampoo|conditioner|gel|spray/i.test(product.title) ? (product.title.split(' ')[0] || 'Product') : (product.title.split(' ').slice(0,2).join(' ') || 'Product'))}</span><small>${esc(product.title)}</small></div></div>`).join('')}</div></article>`).join('');dots.innerHTML=HERO_SLIDES.map((_,i)=>`<button class="hero-dot ${i===0?'active':''}" data-hero-dot="${i}" aria-label="Go to banner ${i+1}"></button>`).join('');let current=0;const slides=()=>$$('.hero-slide',track);const dotEls=()=>$$('[data-hero-dot]',dots);function show(index){const all=slides();const total=all.length;current=(index+total)%total;all.forEach((el,i)=>el.classList.toggle('active',i===current));dotEls().forEach((el,i)=>el.classList.toggle('active',i===current))}$('#heroPrev')?.addEventListener('click',()=>show(current-1));$('#heroNext')?.addEventListener('click',()=>show(current+1));dots.addEventListener('click',e=>{const b=e.target.closest('[data-hero-dot]');if(b)show(Number(b.dataset.heroDot))});let timer=setInterval(()=>show(current+1),5200);track.addEventListener('mouseenter',()=>clearInterval(timer));track.addEventListener('mouseleave',()=>timer=setInterval(()=>show(current+1),5200));show(0)}
function renderDepartments(){const el=$('#departmentGrid');el.innerHTML=DEPARTMENTS.map(d=>`<button class="department-card" data-department="${esc(d.filter)}"><div class="department-image"><img loading="lazy" src="${esc(d.image)}" alt="${esc(d.name)}" onerror="this.onerror=null;this.src='${esc(categoryFallback(d.filter))}'"></div><div class="department-copy"><strong>${esc(d.name)}</strong><span>${esc(d.subtitle)}</span></div></button>`).join('')}
function renderBrands(){const el=$('#brandGrid');const loop=[...BRAND_LOGOS,...BRAND_LOGOS];el.innerHTML=loop.map(b=>`<button class="brand-card" data-brand-logo="${esc(b.name)}" title="Shop ${esc(b.name)}"><img src="${b.src}" alt="${esc(b.name)} logo"></button>`).join('')}
function renderNew(){const hairCare=PRODUCTS.filter(p=>p.category==='Hair Care'&&p.image&&p.available!==false);const picks=[PRODUCTS.find(p=>p.category==='Human Hair'),hairCare[0],PRODUCTS.find(p=>p.category==='Hair Color'),hairCare.find((p,i)=>i>0&&/Got2b|Aunt Jackie|African Pride|VO5/i.test(p.title))||hairCare[1]].filter(Boolean).slice(0,4);$('#newShelf').innerHTML=picks.map(productCard).join('')}
function renderStoreAisles(){
  const config=[['#humanHairAisle','Human Hair'],['#hairCareAisle','Hair Care'],['#hairColorAisle','Hair Color']];
  config.forEach(([selector,category])=>{const el=$(selector);if(!el)return;const items=PRODUCTS.filter(p=>p.category===category).slice(0,6);el.innerHTML=items.map(productCard).join('')});
  const promo=PRODUCTS.find(p=>p.category==='Hair Care'&&p.image&&p.available!==false)||PRODUCTS.find(p=>p.image)||PRODUCTS[0];
  const promoImg=$('#megaPromoImage');if(promoImg&&promo){promoImg.src=promo.image;promoImg.alt=promo.title;promoImg.onerror=()=>{promoImg.src=ASSETS.flat}}
}
const CATEGORY_GROUPS={'Essentials':['Tools & Accessories','Skin & Body','Beauty & Fashion','Styling & Edge','Braids, Wigs & Crochet']};
function categoryMatches(p){if(state.category==='All')return true;const group=CATEGORY_GROUPS[state.category];return group?group.includes(p.category):p.category===state.category}
function filtered(){let list=PRODUCTS.filter(categoryMatches);if(state.brand)list=list.filter(p=>p.brand.toLowerCase().includes(state.brand.toLowerCase()));if(state.search){const q=state.search.toLowerCase();list=list.filter(p=>`${p.title} ${p.brand} ${p.category}`.toLowerCase().includes(q))}if(state.sort==='price-asc')list.sort((a,b)=>a.price-b.price);if(state.sort==='price-desc')list.sort((a,b)=>b.price-a.price);if(state.sort==='title')list.sort((a,b)=>a.title.localeCompare(b.title));return list}
function renderChips(){const order=['Human Hair','Braids, Wigs & Crochet','Hair Care','Hair Color','Styling & Edge','Tools & Accessories','Skin & Body','Beauty & Fashion'];const cats=['All','Essentials',...order.filter(c=>PRODUCTS.some(p=>p.category===c))];$('#categoryChips').innerHTML=cats.map(c=>`<button class="chip ${state.category===c?'active':''}" data-chip="${c}">${c}</button>`).join('')}

function openCatalogView(){const catalog=$('#catalog');if(!catalog)return;catalog.classList.add('is-open');document.body.classList.add('catalog-view-open');requestAnimationFrame(()=>catalog.scrollIntoView({behavior:'smooth',block:'start'}))}
function closeCatalogView(){const catalog=$('#catalog');if(!catalog)return;document.body.classList.remove('catalog-view-open');$('#siteHeader')?.scrollIntoView({behavior:'smooth',block:'start'})}
function renderCatalog(){const list=filtered();const total=list.length;$('#catalogCount').textContent=state.search?`${total} results for "${state.search}".`:(state.brand?`Showing ${total} ${state.brand} products.`:`${total} products in the Exclusive Essence catalog.`);$('#catalogGrid').innerHTML=list.slice(0,state.visible).map(productCard).join('');$('#catalogEmpty').style.display=list.length?'none':'block';const more=$('#loadMoreBtn');if(more) more.style.display=list.length>state.visible?'inline-flex':'none';const all=$('#showAllBtn');if(all) all.style.display=list.length>state.visible?'inline-flex':'none';renderChips()}
function setCategory(cat){state.category=cat;state.brand=null;state.search='';state.visible=48;$$('#desktopSearchInput,#mobileSearchInput').forEach(el=>{el.value=''});document.querySelectorAll('[data-nav-filter]').forEach(b=>b.classList.toggle('active',b.dataset.navFilter===cat));renderCatalog();openCatalogView();$('#siteHeader').classList.remove('mega-open');closeLayers()}
function setBrand(name){const actual=[...new Set(PRODUCTS.map(p=>p.brand))].find(b=>b.toLowerCase().includes(name.toLowerCase().split(' ')[0]));state.brand=actual||name;state.category='All';state.visible=48;renderCatalog();openCatalogView();toast(`Showing ${state.brand} products`)}

function toggleWish(id){state.wishlist.has(id)?state.wishlist.delete(id):state.wishlist.add(id);persist();renderNew();renderCatalog();toast(state.wishlist.has(id)?'Added to wishlist':'Removed from wishlist')}
function addToCart(id,qty=1){const p=PRODUCTS.find(x=>x.id===id);if(!p)return;if(!(Number(p.price)>0)){toast('Available in store—ask our team for current pricing.');return}const item=state.cart.find(x=>x.id===id);item?item.qty+=qty:state.cart.push({id,qty});persist();renderCart();toast(`${p.brand} added to cart`)}
function renderCart(){const count=state.cart.reduce((n,i)=>n+i.qty,0);$('#cartCount').textContent=count;$('#mobileCartCount').textContent=count;const items=$('#cartItems');if(!state.cart.length){items.innerHTML='<p style="text-align:center;color:var(--muted);padding:48px 12px">Your cart is empty.<br><br><a class="btn btn-secondary" href="#catalog" data-close>Start Shopping</a></p>'}else{items.innerHTML=state.cart.map(i=>{const p=PRODUCTS.find(x=>x.id===i.id);if(!p)return'';const image=assetUrl(p.image)||categoryFallback(p.category);return `<div class="cart-item"><img src="${esc(withWidth(image,400))}" alt="${esc(p.title)}" onerror="this.onerror=null;this.src=ASSETS.flat"><div><strong>${esc(p.title)}</strong><small>${esc(p.brand)}</small><div class="qty"><button data-qty="${p.id}" data-delta="-1">−</button><span>${i.qty}</span><button data-qty="${p.id}" data-delta="1">+</button></div><button class="remove" data-remove="${p.id}">Remove</button></div><b>${money(p.price*i.qty)}</b></div>`}).join('')}const cartTotalNum=state.cart.reduce((s,i)=>{const p=PRODUCTS.find(x=>x.id===i.id);return s+(p?p.price*i.qty:0)},0);$('#cartTotal').textContent=money(cartTotalNum);updateLayawayCalc(cartTotalNum)}
function updateLayawayCalc(total){const deposit=total*0.25,remaining=total-deposit;const due=new Date();due.setDate(due.getDate()+45);const dueStr=due.toLocaleDateString('en-US',{month:'long',day:'numeric',year:'numeric'});$('#lpTotal').textContent=money(total);$('#lpDeposit').textContent=money(deposit);$('#lpRemaining').textContent=money(remaining);$('#lpDueDate').textContent=dueStr}
function quickView(id){const p=PRODUCTS.find(x=>x.id===id);if(!p)return;const priced=Number(p.price)>0,image=assetUrl(p.image)||categoryFallback(p.category);$('#quickContent').innerHTML=`<div class="quick-grid"><div class="quick-media"><img src="${esc(withWidth(image,1600))}" ${srcset(p.image)?`srcset="${esc(srcset(p.image))}" sizes="(min-width:800px) 40vw, 90vw"`:''} alt="${esc(p.title)}" onerror="this.onerror=null;this.src=ASSETS.flat"></div><div class="quick-copy"><div class="product-brand">${esc(p.brand)} · ${esc(p.category)}</div><h2>${esc(p.title)}</h2><div class="rating">★★★★★ ${Number(p.rating||4.8).toFixed(1)}</div><div class="quick-price">${priced?money(p.price):'In Store'}</div><p>${esc(p.description||'A store-ready beauty essential selected for the Exclusive Essence catalog.')}</p><div class="hero-actions"><button class="btn btn-primary" ${p.available===false?'data-sold-out disabled':(priced?`data-add="${esc(p.id)}"`:'data-store-only')}>${p.available===false?'Sold Out':(priced?'Add to Cart':'Ask About In-Store Pricing')}</button><a class="btn btn-secondary" href="/products/${esc(p.handle||'')}">View full details</a></div></div></div>`;openLayer($('#quickModal'))}

const STORE_PHOTOS = ["assets/6fa228d19941.jpg","assets/e12a5f5ce9ef.jpg","assets/4105305e5ef8.jpg","assets/37b7455319f3.jpg","assets/b36602ddd5a0.jpg","assets/7885c33d2b38.jpg"];
const CITY_PHOTOS = [{name:"Columbus, Ohio",alt:"The Columbus, Ohio skyline at dusk \u2014 home of our flagship store, open now",src:"assets/dbcbfcdad132.jpg"},{name:"Dallas, Texas",alt:"The Dallas, Texas skyline at dusk, marked coming soon",src:"assets/53e0f9e30153.jpg"},{name:"Miami, Florida",alt:"The Miami, Florida skyline at dusk, marked coming soon",src:"assets/79f6a69707e4.jpg"},{name:"New York, New York",alt:"The New York City skyline at dusk, marked coming soon",src:"assets/38858f6e0dcd.jpg"},{name:"San Francisco, California",alt:"The San Francisco, California skyline at dusk, marked coming soon",src:"assets/3256941a04b3.jpg"}];
STORE_PHOTOS = STORE_PHOTOS.map(s => (typeof s === 'string' && s.indexOf('assets/')===0) ? (window.EE_ASSET_PREFIX||'')+s.slice(7) : s);
CITY_PHOTOS.forEach(p => { if (p.src && p.src.indexOf('assets/')===0) p.src = (window.EE_ASSET_PREFIX||'')+p.src.slice(7); });

function initStoreSlideshows(){
  const reduced=window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  $$('[data-store-slideshow]').forEach((root,instance)=>{
    const photoSets={cities:CITY_PHOTOS};
    const photos=(photoSets[root.dataset.photoSet]||STORE_PHOTOS).map((photo,i)=>typeof photo==='string'?{src:photo,alt:'Inside Exclusive Essence Hair & Beauty Emporium',name:`store photo ${i+1}`}:photo);
    const noun=root.dataset.photoSet==='cities'?'city':'store photo';
    let current=(Number(root.dataset.start)||0)%photos.length,timer=null,touchX=0;
    root.innerHTML=`<div class="store-slideshow-track">${photos.map((photo,i)=>`<img class="store-slide${i===current?' is-active':''}" src="${photo.src}" alt="${i===current?photo.alt:''}" ${i===current?'':'aria-hidden="true"'} decoding="async" loading="${i===current?'eager':'lazy'}">`).join('')}</div><div class="store-slideshow-ui"><div class="store-slideshow-dots" role="group" aria-label="Choose ${noun}">${photos.map((photo,i)=>`<button class="store-slide-dot${i===current?' is-active':''}" type="button" data-store-dot="${i}" aria-label="Show ${photo.name}" aria-pressed="${i===current}"></button>`).join('')}</div><div class="store-slideshow-nav"><button class="store-slide-arrow" type="button" data-store-prev aria-label="Previous ${noun}">&#8592;</button><button class="store-slide-arrow" type="button" data-store-next aria-label="Next ${noun}">&#8594;</button></div></div>`;
    const slides=$$('.store-slide',root),dots=$$('.store-slide-dot',root);
    const show=index=>{current=(index+slides.length)%slides.length;slides.forEach((slide,i)=>{const active=i===current;slide.classList.toggle('is-active',active);slide.setAttribute('aria-hidden',String(!active));slide.alt=active?photos[i].alt:''});dots.forEach((dot,i)=>{const active=i===current;dot.classList.toggle('is-active',active);dot.setAttribute('aria-pressed',String(active))})};
    const stop=()=>{if(timer){clearInterval(timer);timer=null}};
    const play=()=>{if(!reduced&&!timer)timer=setInterval(()=>show(current+1),4600)};
    root.addEventListener('click',event=>{const dot=event.target.closest('[data-store-dot]');if(dot)show(Number(dot.dataset.storeDot));if(event.target.closest('[data-store-prev]'))show(current-1);if(event.target.closest('[data-store-next]'))show(current+1)});
    root.addEventListener('mouseenter',stop);root.addEventListener('mouseleave',play);root.addEventListener('focusin',stop);root.addEventListener('focusout',play);
    root.addEventListener('touchstart',event=>{touchX=event.changedTouches[0].clientX},{passive:true});root.addEventListener('touchend',event=>{const delta=event.changedTouches[0].clientX-touchX;if(Math.abs(delta)>45)show(current+(delta<0?1:-1))},{passive:true});
    document.addEventListener('visibilitychange',()=>document.hidden?stop():play());show(current);play();
  });
}
$$('[data-asset]').forEach(el=>{const key=el.dataset.asset;if(ASSETS[key])el.src=ASSETS[key]});
[initStoreSlideshows,renderHeroCarousel,renderDepartments,renderBrands,renderNew,renderStoreAisles,renderCatalog,renderCart].forEach(fn=>{try{fn()}catch(err){console.error('[EE] '+fn.name+' failed:',err)}});
const siteHeader=$('#siteHeader'),departmentsBtn=$('#departmentsBtn'),megaMenu=$('#megaMenu');let megaCloseTimer,megaPinned=false;function setMega(open){siteHeader.classList.toggle('mega-open',open);departmentsBtn?.setAttribute('aria-expanded',String(open));megaMenu?.setAttribute('aria-hidden',String(!open))}departmentsBtn?.setAttribute('aria-expanded','false');departmentsBtn?.addEventListener('click',e=>{e.stopPropagation();megaPinned=!megaPinned;setMega(megaPinned)});departmentsBtn?.addEventListener('mouseenter',()=>{clearTimeout(megaCloseTimer);if(!megaPinned)setMega(true)});megaMenu?.addEventListener('mouseenter',()=>clearTimeout(megaCloseTimer));siteHeader?.addEventListener('mouseleave',()=>{if(!megaPinned)megaCloseTimer=setTimeout(()=>setMega(false),160)});siteHeader?.addEventListener('focusin',()=>clearTimeout(megaCloseTimer));siteHeader?.addEventListener('focusout',e=>{if(!megaPinned&&!siteHeader.contains(e.relatedTarget))setMega(false)});
document.addEventListener('click',e=>{if(!e.target.closest('#siteHeader')){megaPinned=false;setMega(false)};const a=e.target.closest('[data-add]');if(a)addToCart(a.dataset.add);const storeOnly=e.target.closest('[data-store-only]');if(storeOnly)toast('Available in store—ask our team for current pricing.');const q=e.target.closest('[data-quick]');if(q)quickView(q.dataset.quick);const w=e.target.closest('[data-wish]');if(w)toggleWish(w.dataset.wish);const c=e.target.closest('[data-chip]');if(c)setCategory(c.dataset.chip);const d=e.target.closest('[data-department]');if(d)setCategory(d.dataset.department);const f=e.target.closest('[data-filter-link],[data-filter-jump],[data-nav-filter],[data-mobile-filter]');if(f){e.preventDefault();setCategory(f.dataset.filterLink||f.dataset.filterJump||f.dataset.navFilter||f.dataset.mobileFilter);megaPinned=false;setMega(false)}const b=e.target.closest('[data-brand-logo],[data-brand-link]');if(b)setBrand(b.dataset.brandLogo||b.dataset.brandLink);const qty=e.target.closest('[data-qty]');if(qty){const item=state.cart.find(x=>x.id===qty.dataset.qty);if(item){item.qty+=Number(qty.dataset.delta);if(item.qty<=0)state.cart=state.cart.filter(x=>x.id!==item.id);persist();renderCart()}}const rm=e.target.closest('[data-remove]');if(rm){state.cart=state.cart.filter(x=>x.id!==rm.dataset.remove);persist();renderCart()}const lw=e.target.closest('[data-open-layaway]');if(lw){e.preventDefault();openLayer($('#layawayModal'));eeTrack('view_layaway_agreement',{})}const pt=e.target.closest('.purchase-toggle label');if(pt){$$('.purchase-toggle label').forEach(l=>l.classList.remove('active'));pt.classList.add('active');const opt=pt.dataset.purchase;state.purchaseOption=opt;$('#layawayPanel').classList.toggle('open',opt==='layaway');$('#checkoutBtn').textContent=opt==='layaway'?'Continue with Layaway':'Checkout Securely';eeTrack('select_payment_option',{method:opt})}if(e.target.closest('[data-close]'))closeLayers()});

$('#openCatalogBtn')?.addEventListener('click',()=>{state.category='All';state.search='';state.brand=null;state.visible=48;renderCatalog();openCatalogView()});
$('#catalogBackBtn')?.addEventListener('click',(e)=>{e.preventDefault();closeCatalogView()});
document.addEventListener('click',e=>{const link=e.target.closest('a[href="#catalog"]');if(link&&!link.matches('[data-filter-link],[data-filter-jump]')){e.preventDefault();state.category='All';state.search='';state.brand=null;state.visible=48;renderCatalog();openCatalogView()}});
$('#sortSelect')?.addEventListener('change',e=>{state.sort=e.target.value;renderCatalog()});
$('#loadMoreBtn')?.addEventListener('click',()=>{state.visible+=48;renderCatalog()});
$('#showAllBtn')?.addEventListener('click',()=>{state.visible=PRODUCTS.length;renderCatalog()});
function doSearch(value){state.search=value.trim();state.category='All';state.brand=null;state.visible=48;renderCatalog();openCatalogView()}
$('#desktopSearchForm')?.addEventListener('submit',e=>{e.preventDefault();doSearch($('#desktopSearchInput').value)});$('#mobileSearchForm')?.addEventListener('submit',e=>{e.preventDefault();doSearch($('#mobileSearchInput').value)});$('#mobileSearchBtn')?.addEventListener('click',()=>$('#mobileSearchInput').focus());
$('#cartBtn')?.addEventListener('click',(e)=>{e.preventDefault();openLayer($('#cartDrawer'))});$('#mobileCartBtn')?.addEventListener('click',()=>openLayer($('#cartDrawer')));$('#menuBtn')?.addEventListener('click',()=>openLayer($('#mobileDrawer')));$('#overlay')?.addEventListener('click',closeLayers);document.addEventListener('keydown',e=>{if(e.key==='Escape'){closeLayers();megaPinned=false;setMega(false)}});

$('#wishlistBtn').addEventListener('click',()=>{state.category='All';state.search='';state.brand=null;const ids=[...state.wishlist];const list=PRODUCTS.filter(p=>ids.includes(p.id));$('#catalogGrid').innerHTML=list.map(productCard).join('');$('#catalogCount').textContent='Your saved wishlist items.';$('#loadMoreBtn').style.display='none';openCatalogView()});
$('#accountBtn').addEventListener('click',()=>{window.location.href=(window.EE_ROUTES&&EE_ROUTES.account)||'/account';});
$('#checkoutBtn').addEventListener('click',()=>{if(state.purchaseOption==='layaway'){const name=$('#lpName').value.trim(),phone=$('#lpPhone').value.trim(),email=$('#lpEmail').value.trim(),agree=$('#lpAgree').checked;if(!state.cart.length){toast('Your cart is empty.');return}if(!name||!phone||!email){toast('Add your name, phone and email to start layaway.');return}if(!agree){toast('Please agree to the Layaway Agreement to continue.');return}const total=state.cart.reduce((s,i)=>{const p=PRODUCTS.find(x=>x.id===i.id);return s+(p?p.price*i.qty:0)},0),deposit=total*0.25;eeTrack('layaway_request',{value:total,deposit:Number(deposit.toFixed(2)),currency:'USD',payment_method:$('#lpMethod').value});toast(`Layaway request received — deposit due today: ${money(deposit)}. Our team will follow up to confirm your schedule.`)}else{eeStartShopifyCheckout()}});
$('#newsletterForm').addEventListener('submit',e=>{e.preventDefault();const f=e.target,emailEl=f.querySelector('input[type=email]'),email=(emailEl&&emailEl.value||'').trim();if(!email)return;
try{fetch(f.action||'/contact',{method:'POST',body:new FormData(f),credentials:'same-origin'});}catch(err){}
if(window.eeLeads)window.eeLeads.submit({email,company:(f.company&&f.company.value)||'',source:'footer_newsletter'});
if(typeof eeTrack==='function')eeTrack('generate_lead',{method:'footer_newsletter'});toast('Welcome to the Essence List.');f.reset()});

/* ===== Stores page view ===== */
function openStoresView(){const s=$('#stores');if(!s)return;$('#catalog')?.classList.remove('is-open');document.body.classList.remove('catalog-view-open');s.classList.add('is-open');document.body.classList.add('stores-view-open');$('#siteHeader')?.classList.remove('mega-open');closeLayers();requestAnimationFrame(()=>s.scrollIntoView({behavior:'smooth',block:'start'}))}
function closeStoresView(){const s=$('#stores');if(!s)return;s.classList.remove('is-open');document.body.classList.remove('stores-view-open');$('#siteHeader')?.scrollIntoView({behavior:'smooth',block:'start'})}
document.addEventListener('click',e=>{const t=e.target.closest('[data-open-stores]');if(t){e.preventDefault();openStoresView();return}
if(e.target.closest('a[href="#catalog"],[data-filter-link],[data-filter-jump],#openCatalogBtn,[data-nav-filter],[data-mobile-filter]')){const s=$('#stores');if(s&&s.classList.contains('is-open')){s.classList.remove('is-open');document.body.classList.remove('stores-view-open')}}});
$('#storesBackBtn')?.addEventListener('click',closeStoresView);

/* ===== Lead capture transport =====
   Posts to the /api/leads serverless function, which fans each lead out to
   whichever destinations are configured in Vercel env vars (Shopify customer
   record, Klaviyo profile + list). The UI never waits on this call: the gate
   paints its success state immediately and the request runs in the background.
   Anything that fails (offline, cold start, 5xx) parks in localStorage and is
   retried on the next page load, so a lead is never lost to a flaky network. */
window.eeLeads=(function(){
const ENDPOINT='/api/leads',QUEUE_KEY='eeLeadQueue',MAX_QUEUE=25;
function readQueue(){try{const raw=localStorage.getItem(QUEUE_KEY);const arr=raw?JSON.parse(raw):[];return Array.isArray(arr)?arr:[]}catch(err){return[]}}
function writeQueue(arr){try{localStorage.setItem(QUEUE_KEY,JSON.stringify(arr.slice(-MAX_QUEUE)))}catch(err){}}
function same(a,b){return a.email===b.email&&a.source===b.source}
function enqueue(lead){const q=readQueue();if(q.some(x=>same(x,lead)))return;q.push(lead);writeQueue(q)}
function dequeue(lead){writeQueue(readQueue().filter(x=>!same(x,lead)))}
async function post(lead){const res=await fetch(ENDPOINT,{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify(lead),keepalive:true});
if(!res.ok)throw new Error('leads '+res.status);
return res.json().catch(()=>({ok:true}))}
async function submit(lead){lead=Object.assign({capturedAt:new Date().toISOString()},lead);
try{const out=await post(lead);dequeue(lead);return out}
catch(err){enqueue(lead);console.debug('[EE leads] queued for retry —',err&&err.message);return null}}
async function flush(){const q=readQueue();if(!q.length)return;
for(const lead of q){try{await post(lead);dequeue(lead)}catch(err){break}}}
return{submit,flush,queued:()=>readQueue().length}})();
(function(){const kick=()=>setTimeout(()=>window.eeLeads.flush(),1200);
if(document.readyState==='loading')addEventListener('DOMContentLoaded',kick);else kick()})();

/* ===== Entry gate (lead capture) ===== */
(function(){const gate=$('#entryGate');if(!gate)return;let done=false;try{done=localStorage.getItem('eeGateDone')==='1'||sessionStorage.getItem('eeGateSkip')==='1'}catch(err){}
if(done){gate.remove();return}
document.body.classList.add('gate-locked');
function closeGate(){gate.classList.add('gate-hidden');document.body.classList.remove('gate-locked');setTimeout(()=>gate.remove(),450)}
$('#entryGateForm').addEventListener('submit',e=>{e.preventDefault();const fd=new FormData(e.target);try{fetch(e.target.action||'/contact',{method:'POST',body:fd,credentials:'same-origin'});}catch(err){}
const lead=Object.fromEntries(fd.entries());
const name=lead.name||lead['contact[first_name]']||'';
const email=lead.email||lead['contact[email]']||'';
const phone=lead.phone||lead['contact[phone]']||'';
if(window.eeLeads)window.eeLeads.submit({name,email,phone,company:lead.company||lead['contact[company]']||'',source:'entry_gate',reward:'ESSENCE10'});
try{localStorage.setItem('eeGateDone','1');localStorage.setItem('eeGateLead',JSON.stringify({...lead,capturedAt:new Date().toISOString(),reward:'ESSENCE10'}))}catch(err){}
$('#entryGateForm').hidden=true;$('#entryGateSkip').hidden=true;$('#entryGateTitle').hidden=true;gate.querySelector('.entry-gate-card>p:not(.gate-kicker)')?.setAttribute('hidden','');gate.querySelector('.gate-kicker').hidden=true;$('#gateSuccess').hidden=false});
$('#gateShareBtn')?.addEventListener('click',async()=>{const msg='Exclusive Essence Hair & Beauty Emporium — join the Essence List and get 10% off your first in-store purchase with code ESSENCE10.';
if(navigator.share){try{await navigator.share({title:'Exclusive Essence',text:msg,url:location.href})}catch(err){}}
else{try{await navigator.clipboard.writeText(msg+' '+location.href);toast('Invite copied — send it to a friend.')}catch(err){toast('Code ESSENCE10 — share it with a friend.')}}});
$('#gateEnterBtn')?.addEventListener('click',()=>{toast('Welcome to the Essence List.');closeGate()});
$('#entryGateSkip').addEventListener('click',()=>{try{sessionStorage.setItem('eeGateSkip','1')}catch(err){}closeGate()});
})();

/* ===== Shop Our Feed banner slider ===== */
(function(){const track=$('#feedTrack');if(!track)return;const slides=track.children.length;let idx=0,timer=null;
const dots=$('#feedDots');for(let i=0;i<slides;i++){const b=document.createElement('button');b.type='button';b.setAttribute('role','tab');b.setAttribute('aria-label','Banner '+(i+1));b.addEventListener('click',()=>{go(i);restart()});dots.appendChild(b)}
function paint(){[...dots.children].forEach((d,i)=>d.classList.toggle('active',i===idx))}
function go(i){idx=(i+slides)%slides;track.style.transform='translateX(-'+(idx*100)+'%)';paint()}
function next(){go(idx+1)}function prev(){go(idx-1)}
function start(){stop();timer=setInterval(next,4500)}function stop(){if(timer)clearInterval(timer);timer=null}
function restart(){stop();start()}
$('#feedNext').addEventListener('click',()=>{next();restart()});
$('#feedPrev').addEventListener('click',()=>{prev();restart()});
const slider=$('#feedSlider');
slider.addEventListener('mouseenter',stop);slider.addEventListener('mouseleave',start);
let sx=null;slider.addEventListener('pointerdown',e=>{sx=e.clientX;stop()});
slider.addEventListener('pointerup',e=>{if(sx!==null){const dx=e.clientX-sx;if(Math.abs(dx)>40)(dx<0?next:prev)();sx=null}start()});
document.addEventListener('visibilitychange',()=>document.hidden?stop():start());
go(0);start()})();

/* Whole product card opens details (mobile + desktop) */
document.addEventListener('click',e=>{const card=e.target.closest('.product-card');if(!card)return;
if(e.target.closest('[data-add],[data-wish],[data-store-only],[data-quick]'))return;
const q=card.querySelector('[data-quick]');if(q)quickView(q.dataset.quick)});


/* ================= Shopify Storefront API =================
   SETUP: two values are required.
     EE_SHOPIFY_DOMAIN - the store's *.myshopify.com domain
     EE_SHOPIFY_TOKEN  - Storefront API public access token (32 hex chars)
   Storefront tokens are read-only and meant to be readable by the browser.
   This is NOT the Admin API token, which must never appear in client code.
   Both values are overwritten at build time from the Vercel env vars
   SHOPIFY_STORE_DOMAIN / SHOPIFY_STOREFRONT_TOKEN (see build.sh), so they can
   be rotated without editing this file.
   Until the domain is set, Checkout keeps the local prototype behaviour. */
const EE_SHOPIFY_DOMAIN='cbrxt0-kk.myshopify.com';
const EE_SHOPIFY_TOKEN='4e33379424f2d49d568a3760cc77ed63';
const EE_SHOPIFY_API_VERSION='2026-01';

window.eeShopify=(function(){
const domainOk=/^[a-z0-9][a-z0-9-]*\.myshopify\.com$/i.test(EE_SHOPIFY_DOMAIN);
const tokenOk=/^[0-9a-f]{32}$/i.test(EE_SHOPIFY_TOKEN);
const endpoint='https://'+EE_SHOPIFY_DOMAIN+'/api/'+EE_SHOPIFY_API_VERSION+'/graphql.json';
async function query(q,variables){
  const res=await fetch(endpoint,{method:'POST',headers:{'Content-Type':'application/json','X-Shopify-Storefront-Access-Token':EE_SHOPIFY_TOKEN},body:JSON.stringify({query:q,variables:variables||{}})});
  if(!res.ok)throw new Error('Storefront API returned '+res.status);
  const json=await res.json();
  if(json.errors&&json.errors.length)throw new Error(json.errors.map(e=>e.message).join('; '));
  return json.data}
/* Catalog entries carry Shopify handles but no variant ids, so resolve every
   handle in one aliased request rather than one round trip per cart line. */
async function resolveVariants(handles){
  const fields='{variants(first:20){nodes{id availableForSale}}}';
  const q='query{'+handles.map((h,i)=>'h'+i+': product(handle:'+JSON.stringify(h)+')'+fields).join(' ')+'}';
  const data=await query(q),out={};
  handles.forEach((h,i)=>{const p=data['h'+i];if(!p||!p.variants||!p.variants.nodes.length)return;
    const v=p.variants.nodes.find(n=>n.availableForSale);if(!v)return;out[h]=v.id});
  return out}
async function createCart(lines){
  const q='mutation($lines:[CartLineInput!]!){cartCreate(input:{lines:$lines}){cart{checkoutUrl}userErrors{message}}}';
  const r=(await query(q,{lines})).cartCreate;
  if(r.userErrors&&r.userErrors.length)throw new Error(r.userErrors.map(e=>e.message).join('; '));
  if(!r.cart||!r.cart.checkoutUrl)throw new Error('Storefront API returned no checkout URL');
  return r.cart.checkoutUrl}
return {get configured(){return domainOk&&tokenOk},domainOk,tokenOk,endpoint,query,resolveVariants,createCart}})();

async function eeStartShopifyCheckout(){
  if(!state.cart.length){toast('Your cart is empty.');return}
  if(!eeShopify.configured){
    console.warn('[EE Shopify] not configured -'+(eeShopify.domainOk?'':' store domain missing;')+(eeShopify.tokenOk?'':' access token invalid;'));
    toast('Prototype checkout handoff ready for Shopify.');return}
  const btn=$('#checkoutBtn'),label=btn.textContent;
  btn.disabled=true;btn.textContent='Opening secure checkout...';
  try{
    const rows=state.cart.map(i=>({item:i,product:PRODUCTS.find(p=>p.id===i.id)})).filter(r=>r.product&&r.product.handle);
    if(!rows.length)throw new Error('No cart items carry a Shopify handle');
    const map=await eeShopify.resolveVariants([...new Set(rows.map(r=>r.product.handle))]);
    const lines=rows.filter(r=>map[r.product.handle]).map(r=>({merchandiseId:map[r.product.handle],quantity:r.item.qty}));
    const missing=rows.filter(r=>!map[r.product.handle]).map(r=>r.product.handle);
    if(missing.length){console.warn('[EE Shopify] unavailable handle(s):',missing);
      const names=rows.filter(r=>!map[r.product.handle]).map(r=>r.product.title);
      toast(names.length===1?`${names[0]} is sold out and was not added to checkout.`:`${names.length} sold-out items were not added to checkout.`);}
    if(!lines.length)throw new Error('None of the cart products are available in Shopify');
    const total=state.cart.reduce((s,i)=>{const p=PRODUCTS.find(x=>x.id===i.id);return s+(p?p.price*i.qty:0)},0);
    eeTrack('begin_checkout',{currency:'USD',value:Number(total.toFixed(2))});
    window.location.href=await eeShopify.createCart(lines);
  }catch(err){
    console.error('[EE Shopify] checkout failed:',err);
    toast('We could not open checkout just now. Please try again or call the store.');
    btn.disabled=false;btn.textContent=label}}

/* ================= Analytics (GA4) =================
   SETUP: create a GA4 property at analytics.google.com, copy its
   Measurement ID (starts with "G-") and paste it below, then redeploy.
   Until then, events log to the browser console (debug mode) and
   nothing is sent anywhere. */
const EE_GA_ID='G-XXXXXXXXXX';
(function(){const live=/^G-[A-Z0-9]{6,}$/.test(EE_GA_ID)&&!EE_GA_ID.includes('XXXX');
window.dataLayer=window.dataLayer||[];window.gtag=function(){dataLayer.push(arguments)};
if(live){const s=document.createElement('script');s.async=true;s.src='https://www.googletagmanager.com/gtag/js?id='+EE_GA_ID;document.head.appendChild(s);
gtag('js',new Date());gtag('config',EE_GA_ID,{send_page_view:true});}
window.eeTrack=function(name,params){params=params||{};if(live){gtag('event',name,params)}else{console.debug('[EE analytics]',name,params)}};
/* When Shopify customer accounts go live, identify the account here:
   gtag('set',{user_id: SHOPIFY_CUSTOMER_ID});  (never use email/phone as user_id) */

function itemParams(p){return {currency:'USD',value:Number(p.price)||0,items:[{item_id:p.id,item_name:p.title,item_brand:p.brand,item_category:p.category,price:Number(p.price)||0}]}}

/* Product view duration: timed from quick-view open to close */
let eeView=null;
const _quickView=quickView;
quickView=function(id){const p=PRODUCTS.find(x=>x.id===id);if(p){eeView={p:p,t0:Date.now()}}return _quickView(id)};
const qm=document.getElementById('quickModal');
if(qm){new MutationObserver(()=>{const open=qm.classList.contains('open');
if(!open&&eeView){const secs=Math.max(1,Math.round((Date.now()-eeView.t0)/1000));
const ev=itemParams(eeView.p);ev.view_duration_sec=secs;eeTrack('view_item',ev);eeView=null}}).observe(qm,{attributes:true,attributeFilter:['class']})}
window.addEventListener('pagehide',()=>{if(eeView){const secs=Math.max(1,Math.round((Date.now()-eeView.t0)/1000));const ev=itemParams(eeView.p);ev.view_duration_sec=secs;eeTrack('view_item',ev);eeView=null}});

/* Commerce + engagement events */
document.addEventListener('click',e=>{
const add=e.target.closest('[data-add]');if(add){const p=PRODUCTS.find(x=>x.id===add.dataset.add);if(p)eeTrack('add_to_cart',itemParams(p));return}
const wish=e.target.closest('[data-wish]');if(wish){const p=PRODUCTS.find(x=>x.id===wish.dataset.wish);if(p)eeTrack('add_to_wishlist',itemParams(p));return}
const st=e.target.closest('[data-open-stores]');if(st){eeTrack('view_store_locations',{});return}
const dot=e.target.closest('#feedDots button, .feed-arrow');if(dot){const img=document.querySelectorAll('.feed-slide img')[ (window.__feedIdx||0) ];eeTrack('select_promotion',{promotion_name:(img&&img.alt.split(' — ')[0])||'banner'});return}
});
/* Lead gate outcomes */
const gf=document.getElementById('entryGateForm');
if(gf)gf.addEventListener('submit',()=>eeTrack('generate_lead',{method:'entry_gate'}));
document.getElementById('gateShareBtn')?.addEventListener('click',()=>eeTrack('share',{method:'reward_invite'}));
document.getElementById('entryGateSkip')?.addEventListener('click',()=>eeTrack('gate_skipped',{}));
/* Catalog opens */
const _ocv=typeof openCatalogView==='function'?openCatalogView:null;
if(_ocv){openCatalogView=function(){eeTrack('view_item_list',{item_list_name:'full_catalog'});return _ocv.apply(this,arguments)}}
})();


/* Native Shopify cart checkout — used when this file runs as a published theme */
const eeStartShopifyCheckoutNative = eeStartShopifyCheckout;
eeStartShopifyCheckout = async function(){
  if(!state.cart.length){toast('Your cart is empty.');return}
  const btn=$('#checkoutBtn'),label=btn.textContent;
  btn.disabled=true;btn.textContent='Opening secure checkout...';
  try{
    const items=[];
    for(const line of state.cart){
      const p=PRODUCTS.find(x=>x.id===line.id);
      if(!p||!p.handle) continue;
      try{
        const r=await fetch('/products/'+encodeURIComponent(p.handle)+'.js');
        if(!r.ok) continue;
        const product=await r.json();
        const v=(product.variants||[]).find(x=>x.available)||(product.variants||[])[0];
        if(v) items.push({id:v.id,quantity:line.qty});
      }catch(err){}
    }
    if(items.length){
      try{await fetch('/cart/clear.js',{method:'POST',headers:{'X-Requested-With':'XMLHttpRequest'}});}catch(err){}
      const add=await fetch('/cart/add.js',{method:'POST',headers:{'Content-Type':'application/json','X-Requested-With':'XMLHttpRequest'},body:JSON.stringify({items})});
      if(add.ok){
        const total=state.cart.reduce((s,i)=>{const p=PRODUCTS.find(x=>x.id===i.id);return s+(p?p.price*i.qty:0)},0);
        if(typeof eeTrack==='function') eeTrack('begin_checkout',{currency:'USD',value:Number(total.toFixed(2))});
        window.location.href='/checkout';
        return;
      }
    }
  }catch(err){console.warn('[EE] native checkout, falling back',err)}
  btn.disabled=false;btn.textContent=label;
  return eeStartShopifyCheckoutNative();
};

/* If we are not on the SPA homepage, department filters go to Shopify collections */
const COLLECTION_MAP=Object.assign({
  'All':'/collections/all',
  'Essentials':'/collections/essentials',
  'Human Hair':'/collections/human-hair',
  'Hair Care':'/collections/hair-care',
  'Hair Color':'/collections/hair-color',
  'Styling & Edge':'/collections/styling-edge',
  'Tools & Accessories':'/collections/tools-accessories',
  'Braids, Wigs & Crochet':'/collections/braids-wigs-crochet',
  'Skin & Body':'/collections/skin-body',
  'Beauty & Fashion':'/collections/beauty-fashion'
}, window.EE_COLLECTION_MAP||{});
const _setCategory = setCategory;
setCategory = function(cat){
  if(document.getElementById('catalogGrid')) return _setCategory(cat);
  window.location.href = COLLECTION_MAP[cat] || '/collections/all';
};
const _setBrand = setBrand;
setBrand = function(name){
  if(document.getElementById('catalogGrid')) return _setBrand(name);
  window.location.href = '/search?q='+encodeURIComponent(name||'');
};
const _doSearch = doSearch;
doSearch = function(value){
  if(document.getElementById('catalogGrid')) return _doSearch(value);
  window.location.href = ((window.EE_ROUTES&&EE_ROUTES.search)||'/search')+'?q='+encodeURIComponent(value||'');
};

/* Sync cart badge from Shopify on load */
(function(){
  const n = window.EE_CART_COUNT;
  if(typeof n === 'number'){
    const a=document.getElementById('cartCount'), b=document.getElementById('mobileCartCount');
    if(a) a.textContent=n; if(b) b.textContent=n;
  }
})();
