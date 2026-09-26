/* Exclusive Essence storefront.
   Everything a shopper can buy goes through the native Shopify cart
   (/cart/add.js, /cart/change.js, /cart.js) and Shopify checkout. This file
   only adds drawers, the wishlist, layaway requests and homepage widgets. */
(function(){
'use strict';

const $=(s,r=document)=>r.querySelector(s), $$=(s,r=document)=>[...r.querySelectorAll(s)];
const esc=s=>String(s??'').replace(/[&<>'"]/g,m=>({'&':'&amp;','<':'&lt;','>':'&gt;',"'":'&#39;','"':'&quot;'}[m]));
const R=window.EE_ROUTES||{};
const ROOT=(R.root||'/').replace(/\/?$/,'/');
const ROUTES={
  cart:R.cart||'/cart',
  cartJs:(R.cart||'/cart')+'.js',
  add:(R.cartAdd||'/cart/add')+'.js',
  change:(R.cartChange||'/cart/change')+'.js',
  product:h=>ROOT+'products/'+encodeURIComponent(h),
  all:R.collections||'/collections/all',
  search:R.search||'/search'
};
const JSON_HEADERS={'Content-Type':'application/json','Accept':'application/json','X-Requested-With':'XMLHttpRequest'};
const store={get(k,f){try{const v=localStorage.getItem(k);return v==null?f:JSON.parse(v)}catch(e){return f}},set(k,v){try{localStorage.setItem(k,JSON.stringify(v))}catch(e){}},del(k){try{localStorage.removeItem(k)}catch(e){}}};

/* ---------- Money ---------- */
function formatMoney(cents,format){
  const fmt=format||window.EE_MONEY_FORMAT||'${{amount}}';
  cents=Number(cents)||0;
  const group=(n,dec,th,ds)=>{const [i,d]=(n/100).toFixed(dec).split('.');return i.replace(/\B(?=(\d{3})+(?!\d))/g,th)+(d?ds+d:'')};
  return fmt.replace(/\{\{\s*(\w+)\s*\}\}/,(_,key)=>{
    switch(key){
      case 'amount_no_decimals':return group(cents,0,',','.');
      case 'amount_with_comma_separator':return group(cents,2,'.',',');
      case 'amount_no_decimals_with_comma_separator':return group(cents,0,'.',',');
      case 'amount_with_apostrophe_separator':return group(cents,2,"'",'.');
      case 'amount_with_space_separator':return group(cents,2,' ',',');
      default:return group(cents,2,',','.');
    }
  });
}
window.eeFormatMoney=formatMoney;

/* ---------- Analytics hook (GA4 optional) ---------- */
const EE_GA_ID='G-XXXXXXXXXX';
const gaLive=/^G-[A-Z0-9]{6,}$/.test(EE_GA_ID)&&!EE_GA_ID.includes('XXXX');
if(gaLive){
  window.dataLayer=window.dataLayer||[];window.gtag=function(){dataLayer.push(arguments)};
  const s=document.createElement('script');s.async=true;s.src='https://www.googletagmanager.com/gtag/js?id='+EE_GA_ID;document.head.appendChild(s);
  gtag('js',new Date());gtag('config',EE_GA_ID);
}
window.eeTrack=function(name,params){try{if(gaLive)gtag('event',name,params||{})}catch(e){}};

/* ---------- Toast ---------- */
function toast(msg,ms){const t=$('#toast');if(!t)return;t.textContent=msg;t.classList.add('show');clearTimeout(toast.t);toast.t=setTimeout(()=>t.classList.remove('show'),ms||2600)}
window.eeToast=toast;

/* ---------- Drawers & modals ---------- */
const focusStack=[];
function openLayer(el){
  if(!el)return;
  const isModal=el.classList.contains('modal');
  /* A modal (e.g. the layaway agreement) stacks on top of an open drawer; drawers replace each other */
  $$('.drawer.open,.modal.open').forEach(x=>{if(x!==el&&(!isModal||x.classList.contains('modal'))){x.classList.remove('open');x.setAttribute('aria-hidden','true')}});
  if(!el.classList.contains('open'))focusStack.push({el,from:document.activeElement});
  $('#overlay')?.classList.add('open');
  el.classList.add('open');el.setAttribute('aria-hidden','false');
  document.body.style.overflow='hidden';
  setMega(false,true);
  requestAnimationFrame(()=>{(el.querySelector('[data-close]')||el).focus({preventScroll:true})});
}
function closeLayer(el){
  if(!el||!el.classList.contains('open'))return;
  el.classList.remove('open');el.setAttribute('aria-hidden','true');
  const i=focusStack.findIndex(f=>f.el===el);
  const entry=i>-1?focusStack.splice(i,1)[0]:null;
  if(!$('.drawer.open,.modal.open')){$('#overlay')?.classList.remove('open');document.body.style.overflow='';focusStack.length=0}
  if(entry&&entry.from&&document.contains(entry.from)&&entry.from.offsetParent!==null)try{entry.from.focus({preventScroll:true})}catch(e){}
}
function closeLayers(){$$('.modal.open').forEach(closeLayer);$$('.drawer.open').forEach(closeLayer)}
function topLayer(){return $('.modal.open')||$('.drawer.open')}
/* Keep keyboard focus inside an open drawer/modal */
document.addEventListener('keydown',e=>{
  if(e.key==='Escape'){const t=topLayer();t?closeLayer(t):setMega(false,true);return}
  if(e.key!=='Tab')return;
  const layer=topLayer();if(!layer)return;
  const f=$$('a[href],button:not([disabled]),input:not([disabled]):not([type=hidden]),select,textarea,[tabindex]:not([tabindex="-1"])',layer).filter(x=>x.offsetParent!==null);
  if(!f.length)return;
  const first=f[0],last=f[f.length-1];
  if(e.shiftKey&&document.activeElement===first){e.preventDefault();last.focus()}
  else if(!e.shiftKey&&document.activeElement===last){e.preventDefault();first.focus()}
});
$('#overlay')?.addEventListener('click',closeLayers);

/* ---------- Mega menu ---------- */
const siteHeader=$('#siteHeader'),departmentsBtn=$('#departmentsBtn'),megaMenu=$('#megaMenu');
let megaCloseTimer,megaPinned=false;
const megaUsable=()=>!!megaMenu&&getComputedStyle(megaMenu).display!=='none';
function setMega(open,unpin){
  if(unpin)megaPinned=false;
  if(!siteHeader)return;
  siteHeader.classList.toggle('mega-open',open);
  departmentsBtn?.setAttribute('aria-expanded',String(open));
  megaMenu?.setAttribute('aria-hidden',String(!open));
}
departmentsBtn?.addEventListener('click',e=>{
  e.stopPropagation();
  if(!megaUsable()){openLayer($('#mobileDrawer'));return}
  megaPinned=!megaPinned;setMega(megaPinned);
  if(megaPinned)megaMenu.querySelector('a')?.focus({preventScroll:true});
});
departmentsBtn?.addEventListener('mouseenter',()=>{clearTimeout(megaCloseTimer);if(!megaPinned&&megaUsable())setMega(true)});
megaMenu?.addEventListener('mouseenter',()=>clearTimeout(megaCloseTimer));
siteHeader?.addEventListener('mouseleave',()=>{if(!megaPinned)megaCloseTimer=setTimeout(()=>setMega(false),160)});
siteHeader?.addEventListener('focusout',e=>{if(!siteHeader.contains(e.relatedTarget))setMega(false,true)});
document.addEventListener('click',e=>{if(!e.target.closest('#siteHeader'))setMega(false,true)});

/* ---------- Header buttons ---------- */
$('#menuBtn')?.addEventListener('click',()=>openLayer($('#mobileDrawer')));
$('#mobileSearchBtn')?.addEventListener('click',()=>{const i=$('#mobileSearchInput');if(i){i.scrollIntoView({block:'center'});i.focus()}});
['#cartBtn','#mobileCartBtn'].forEach(sel=>$(sel)?.addEventListener('click',e=>{
  if(!$('#cartDrawer'))return;
  e.preventDefault();openLayer($('#cartDrawer'));refreshCart();
}));
/* Close the mobile menu when a link inside it is used (same-page anchors included) */
$('#mobileDrawer')?.addEventListener('click',e=>{if(e.target.closest('a[href]'))closeLayers()});

/* Department select + search: an empty query with a department opens that department */
function wireSearch(form,input){
  form?.addEventListener('submit',e=>{
    const dept=form.querySelector('select[name=department]');
    const q=(input?.value||'').trim();
    if(dept)dept.disabled=true; /* keep the department out of the search URL */
    if(!q){
      e.preventDefault();
      if(dept)dept.disabled=false;
      const opt=dept&&dept.selectedOptions[0];
      if(opt&&opt.dataset.url){window.location.href=opt.dataset.url;return}
      input?.focus();
    }
    setTimeout(()=>{if(dept)dept.disabled=false},0);
  });
}
wireSearch($('#desktopSearchForm'),$('#desktopSearchInput'));
wireSearch($('#mobileSearchForm'),$('#mobileSearchInput'));

/* ---------- Native Shopify cart ---------- */
let lastCart=null;
const cartDrawer=$('#cartDrawer'),cartItemsEl=$('#cartItems');
function setCount(n){['#cartCount','#mobileCartCount'].forEach(s=>{const el=$(s);if(el){el.textContent=n;el.hidden=!n}})}
function lineImage(item){
  if(!item.image)return window.EE_FALLBACK_IMAGE||'';
  return item.image+(item.image.includes('?')?'&':'?')+'width=200';
}
function paintCart(cart){
  if(!cart)return;
  lastCart=cart;
  setCount(cart.item_count||0);
  if(!cartItemsEl)return;
  if(!cart.items||!cart.items.length){
    cartItemsEl.innerHTML=`<p class="drawer-empty">Your cart is empty.<br><br><a class="btn btn-secondary" href="${esc(ROUTES.all)}">Start Shopping</a></p>`;
  }else{
    cartItemsEl.innerHTML=cart.items.map(item=>{
      const variant=item.product_has_only_default_variant?'':(item.variant_title||'');
      const unit=item.original_line_price!==item.final_line_price?`<s>${formatMoney(item.original_line_price)}</s> `:'';
      return `<div class="cart-item" data-line-key="${esc(item.key)}">
        <a href="${esc(item.url)}"><img src="${esc(lineImage(item))}" alt="${esc(item.product_title)}" width="76" height="90" loading="lazy"></a>
        <div><strong><a href="${esc(item.url)}">${esc(item.product_title)}</a></strong>${variant?`<small>${esc(variant)}</small>`:''}
          <div class="qty" role="group" aria-label="Quantity for ${esc(item.product_title)}">
            <button type="button" data-line-qty="${esc(item.key)}" data-qty-value="${item.quantity-1}" aria-label="Decrease quantity">−</button>
            <span aria-live="polite">${item.quantity}</span>
            <button type="button" data-line-qty="${esc(item.key)}" data-qty-value="${item.quantity+1}" aria-label="Increase quantity">+</button>
          </div>
          <button type="button" class="remove" data-line-qty="${esc(item.key)}" data-qty-value="0">Remove</button>
        </div>
        <b>${unit}${formatMoney(item.final_line_price)}</b>
      </div>`;
    }).join('');
  }
  const total=$('#cartTotal');if(total)total.textContent=formatMoney(cart.total_price);
  const btn=$('#checkoutBtn');if(btn)btn.disabled=!cart.item_count;
  updateLayawayCalc(cart.total_price||0);
}
async function refreshCart(){
  try{
    const r=await fetch(ROUTES.cartJs,{headers:{Accept:'application/json'},cache:'no-store'});
    if(!r.ok)return null;
    const cart=await r.json();paintCart(cart);return cart;
  }catch(e){return null}
}
window.eeRefreshShopifyCart=refreshCart;
async function errorMessage(r,fallback){
  try{const j=await r.json();return j.description||j.message||fallback}catch(e){return fallback}
}
async function changeLine(key,quantity){
  cartItemsEl?.classList.add('is-busy');
  try{
    const r=await fetch(ROUTES.change,{method:'POST',headers:JSON_HEADERS,body:JSON.stringify({id:key,quantity:Math.max(0,quantity)})});
    if(!r.ok){toast(await errorMessage(r,'We could not update your cart. Please try again.'));await refreshCart();return}
    paintCart(await r.json());
  }catch(e){toast('We could not update your cart. Please check your connection.')}
  finally{cartItemsEl?.classList.remove('is-busy')}
}
cartItemsEl?.addEventListener('click',e=>{
  const b=e.target.closest('[data-line-qty]');if(!b||cartItemsEl.classList.contains('is-busy'))return;
  e.preventDefault();changeLine(b.dataset.lineQty,Number(b.dataset.qtyValue));
});

/* Add to cart from any product form (cards + product page) */
document.addEventListener('submit',async e=>{
  const form=e.target.closest('form[action*="/cart/add"]');
  if(!form||!window.fetch)return;
  e.preventDefault();
  const btn=form.querySelector('[type=submit]');
  const label=btn?btn.innerHTML:'';
  if(btn){if(btn.disabled)return;btn.disabled=true;btn.textContent='Adding…'}
  try{
    const r=await fetch(ROUTES.add,{method:'POST',body:new FormData(form),headers:{'Accept':'application/json','X-Requested-With':'XMLHttpRequest'}});
    if(r.status===422||r.status===400){toast(await errorMessage(r,'This item is not available in that quantity.'),4200);return}
    if(!r.ok)throw new Error('add '+r.status);
    const item=await r.json().catch(()=>null);
    await refreshCart();
    if(cartDrawer)openLayer(cartDrawer);else toast('Added to cart');
    if(item)eeTrack('add_to_cart',{currency:(lastCart&&lastCart.currency)||'USD',value:(item.final_line_price||item.price||0)/100,items:[{item_id:String(item.variant_id),item_name:item.product_title,item_brand:item.vendor,price:(item.price||0)/100,quantity:item.quantity}]});
  }catch(err){
    form.submit(); /* network or unexpected error: let Shopify handle it natively */
  }finally{
    if(btn){btn.disabled=false;btn.innerHTML=label}
  }
});

/* Checkout / layaway from the drawer */
const drawerForm=$('#cartDrawerForm');
let purchaseOption='full';
drawerForm?.addEventListener('change',e=>{
  if(e.target.name!=='ee_purchase_option')return;
  purchaseOption=e.target.value;
  $$('.purchase-toggle label',drawerForm).forEach(l=>l.classList.toggle('active',l.dataset.purchase===purchaseOption));
  $('#layawayPanel')?.classList.toggle('open',purchaseOption==='layaway');
  const btn=$('#checkoutBtn');if(btn)btn.textContent=purchaseOption==='layaway'?'Send Layaway Request':'Checkout Securely';
  eeTrack('select_payment_option',{method:purchaseOption});
});
drawerForm?.addEventListener('submit',e=>{
  if(lastCart&&!lastCart.item_count){e.preventDefault();toast('Your cart is empty.');return}
  if(purchaseOption==='layaway'){e.preventDefault();submitLayaway();return}
  eeTrack('begin_checkout',{currency:(lastCart&&lastCart.currency)||'USD',value:lastCart?lastCart.total_price/100:0});
  const btn=$('#checkoutBtn');if(btn){setTimeout(()=>{btn.disabled=true;btn.textContent='Opening secure checkout…'},0)}
});

/* ---------- Layaway ---------- */
function layawayNumbers(totalCents){
  const deposit=Math.round(totalCents*0.25),due=new Date();due.setDate(due.getDate()+45);
  return {total:totalCents,deposit,remaining:totalCents-deposit,due:due.toLocaleDateString('en-US',{month:'long',day:'numeric',year:'numeric'})};
}
function updateLayawayCalc(totalCents){
  const n=layawayNumbers(totalCents);
  const set=(id,v)=>{const el=$(id);if(el)el.textContent=v};
  set('#lpTotal',formatMoney(n.total));set('#lpDeposit',formatMoney(n.deposit));set('#lpRemaining',formatMoney(n.remaining));set('#lpDueDate',n.due);
}
async function submitLayaway(){
  const errBox=$('#layawayErrors');
  const fail=msg=>{if(errBox){errBox.textContent=msg;errBox.hidden=false}toast(msg,4200)};
  if(errBox)errBox.hidden=true;
  const cart=lastCart||await refreshCart();
  if(!cart||!cart.item_count){fail('Your cart is empty.');return}
  const name=$('#lpName').value.trim(),phone=$('#lpPhone').value.trim(),email=$('#lpEmail').value.trim(),method=$('#lpMethod').value;
  if(!name){fail('Please enter your full name.');$('#lpName').focus();return}
  if(phone.replace(/\D/g,'').length<7){fail('Please enter a phone number we can reach you at.');$('#lpPhone').focus();return}
  if(!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)){fail('Please enter a valid email address.');$('#lpEmail').focus();return}
  if(!$('#lpAgree').checked){fail('Please agree to the Layaway Agreement to continue.');$('#lpAgree').focus();return}
  const form=$('#layawayContactForm');
  if(!form){fail('Layaway requests are unavailable right now. Please call or visit the store.');return}
  const n=layawayNumbers(cart.total_price);
  const lines=cart.items.map(i=>`- ${i.quantity} x ${i.product_title}${i.product_has_only_default_variant?'':' ('+i.variant_title+')'}${i.sku?' [SKU '+i.sku+']':''} — ${formatMoney(i.final_line_price)}`);
  const body=['LAYAWAY REQUEST','',`Name: ${name}`,`Phone: ${phone}`,`Email: ${email}`,`Preferred payment method: ${method}`,'Agreed to Layaway Agreement: Yes','','Items:',...lines,'',`Total: ${formatMoney(n.total)}`,`Deposit (25%): ${formatMoney(n.deposit)}`,`Remaining balance: ${formatMoney(n.remaining)}`,`Final payment due: ${n.due}`,`Cart token: ${cart.token||''}`].join('\n');
  form.querySelector('[name="contact[name]"]').value=name;
  form.querySelector('[name="contact[email]"]').value=email;
  form.querySelector('[name="contact[phone]"]').value=phone;
  form.querySelector('[name="contact[body]"]').value=body;
  store.set('ee-layaway-draft',{name,phone,email,method});
  const btn=$('#checkoutBtn');if(btn){btn.disabled=true;btn.textContent='Sending request…'}
  eeTrack('layaway_request',{value:n.total/100,deposit:n.deposit/100,currency:cart.currency||'USD',payment_method:method});
  HTMLFormElement.prototype.submit.call(form);
}
(function layawayResult(){
  const draft=store.get('ee-layaway-draft',null);
  if(draft){['Name','Phone','Email'].forEach(k=>{const el=$('#lp'+k);if(el&&!el.value)el.value=draft[k.toLowerCase()]||''});if(draft.method&&$('#lpMethod'))$('#lpMethod').value=draft.method}
  if($('#layawaySent')){
    store.del('ee-layaway-draft');
    toast('Layaway request sent! Our team will contact you to collect your 25% deposit and confirm your schedule.',7000);
  }else if($('#layawayFailed')){
    const r=$('input[name=ee_purchase_option][value=layaway]');
    if(r){r.checked=true;r.dispatchEvent(new Event('change',{bubbles:true}))}
    const box=$('#layawayErrors');if(box){box.textContent='We could not send your layaway request: '+$('#layawayFailed').textContent.trim();box.hidden=false}
    openLayer(cartDrawer);refreshCart();
  }
})();
document.addEventListener('click',e=>{
  if(e.target.closest('[data-start-layaway]')){
    e.preventDefault();
    const r=$('input[name=ee_purchase_option][value=layaway]');
    if(r&&!r.checked){r.checked=true;r.dispatchEvent(new Event('change',{bubbles:true}))}
    openLayer(cartDrawer);refreshCart();
    return;
  }
  const lw=e.target.closest('[data-open-layaway]');
  if(lw){e.preventDefault();openLayer($('#layawayModal'));eeTrack('view_layaway_agreement',{})}
  const c=e.target.closest('[data-close]');if(c)closeLayer(c.closest('.drawer,.modal'));
});

/* Carry over anything left in the old browser-only cart (pre-Shopify-cart theme) */
(async function migrateLegacyCart(){
  const legacy=store.get('ee-store-cart',null);
  if(!Array.isArray(legacy)){return}
  store.del('ee-store-cart');
  if(!legacy.length)return;
  const items=[];
  for(const line of legacy){
    const handle=String(line.id||'').replace(/^catalog-/,'');if(!handle)continue;
    try{const r=await fetch(ROUTES.product(handle)+'.js');if(!r.ok)continue;const p=await r.json();const v=(p.variants||[]).find(x=>x.available);if(v&&p.price>0)items.push({id:v.id,quantity:Math.max(1,Number(line.qty)||1)})}catch(e){}
  }
  if(!items.length)return;
  try{const r=await fetch(ROUTES.add,{method:'POST',headers:JSON_HEADERS,body:JSON.stringify({items})});if(r.ok){await refreshCart();toast('We moved the items you saved earlier into your cart.',4200)}}catch(e){}
})();
store.del('eeLeadQueue');

/* ---------- Wishlist (handles, saved on this device) ---------- */
const WISH_KEY='ee-wishlist';
let wishlist=new Set(store.get(WISH_KEY,[]));
(function migrateLegacyWishlist(){
  const legacy=store.get('ee-store-wishlist',null);if(!Array.isArray(legacy))return;
  legacy.forEach(id=>{const h=String(id).replace(/^catalog-/,'');if(h)wishlist.add(h)});
  store.del('ee-store-wishlist');store.set(WISH_KEY,[...wishlist]);
})();
function paintWishButtons(){
  $$('[data-wish-handle]').forEach(b=>{
    const on=wishlist.has(b.dataset.wishHandle);
    b.classList.toggle('active',on);b.setAttribute('aria-pressed',String(on));
    const label=b.dataset.wishTitle||'this product';
    b.setAttribute('aria-label',(on?'Remove ':'Save ')+label+(on?' from':' to')+' wishlist');
    const text=b.querySelector('[data-wish-text]');if(text)text.textContent=on?'Saved to Wishlist':'Save to Wishlist';
  });
  const c=$('#wishlistCount');if(c){c.textContent=wishlist.size;c.hidden=!wishlist.size}
}
function toggleWish(handle){
  const on=!wishlist.has(handle);
  on?wishlist.add(handle):wishlist.delete(handle);
  store.set(WISH_KEY,[...wishlist]);paintWishButtons();
  toast(on?'Saved to your wishlist':'Removed from your wishlist');
  if(on)eeTrack('add_to_wishlist',{items:[{item_id:handle}]});
  if($('#wishlistDrawer')?.classList.contains('open'))renderWishlist();
}
async function renderWishlist(){
  const el=$('#wishlistItems');if(!el)return;
  if(!wishlist.size){el.innerHTML='<p class="drawer-empty">Your wishlist is empty.<br>Tap the heart on any product to save it here.</p>';return}
  el.innerHTML='<p class="drawer-empty">Loading your wishlist…</p>';
  const handles=[...wishlist];
  const products=await Promise.all(handles.map(h=>fetch(ROUTES.product(h)+'.js').then(r=>r.ok?r.json():(r.status===404?false:null)).catch(()=>null)));
  let changed=false;
  const rows=products.map((p,i)=>{
    if(p===false){wishlist.delete(handles[i]);changed=true;return ''}
    if(!p)return '';
    const img=p.featured_image?(p.featured_image.startsWith('//')?'https:'+p.featured_image:p.featured_image):'';
    const url=ROUTES.product(p.handle);
    const price=p.price>0?(p.price_varies?'From ':'')+formatMoney(p.price):'In Store';
    const variant=(p.variants||[]).find(v=>v.available);
    const canAdd=variant&&p.price>0&&p.variants.length===1;
    return `<div class="cart-item">
      <a href="${esc(url)}">${img?`<img src="${esc(img+(img.includes('?')?'&':'?')+'width=200')}" alt="${esc(p.title)}" width="76" height="90" loading="lazy">`:''}</a>
      <div><strong><a href="${esc(url)}">${esc(p.title)}</a></strong><small>${esc(p.vendor||'')}</small>
        <div class="wish-actions">${canAdd?`<form action="${esc(ROUTES.cart)}/add" method="post"><input type="hidden" name="id" value="${variant.id}"><input type="hidden" name="quantity" value="1"><button class="add-btn" type="submit">Add to Cart</button></form>`:`<a class="add-btn" href="${esc(url)}">${p.available?(p.price>0?'Choose Options':'View Details'):'Sold Out'}</a>`}
        <button type="button" class="remove" data-wish-remove="${esc(p.handle)}">Remove</button></div>
      </div>
      <b>${esc(price)}</b>
    </div>`;
  }).join('');
  if(changed){store.set(WISH_KEY,[...wishlist]);paintWishButtons()}
  el.innerHTML=rows||'<p class="drawer-empty">We could not load your wishlist. Please try again.</p>';
}
document.addEventListener('click',e=>{if(e.target.closest('#wishlistBtn,[data-open-wishlist]')){e.preventDefault();openLayer($('#wishlistDrawer'));renderWishlist()}});
document.addEventListener('click',e=>{
  const w=e.target.closest('[data-wish-handle]');
  if(w){e.preventDefault();e.stopPropagation();toggleWish(w.dataset.wishHandle);return}
  const rm=e.target.closest('[data-wish-remove]');
  if(rm){e.preventDefault();toggleWish(rm.dataset.wishRemove)}
});
paintWishButtons();

/* ---------- Product cards: whole card opens the product ---------- */
document.addEventListener('click',e=>{
  const card=e.target.closest('.product-card[data-handle]');
  if(!card||e.defaultPrevented)return;
  if(e.target.closest('a[href],button,form,input,select,label'))return;
  const href=card.querySelector('a.product-media-link, .product-title a')?.getAttribute('href');
  if(href)window.location.href=href;
});

/* ---------- Homepage widgets ---------- */
/* Brand marquee: duplicate the logos once so the CSS loop is seamless */
(function(){
  const grid=$('#brandGrid');if(!grid||grid.dataset.looped)return;
  [...grid.children].forEach(n=>{const c=n.cloneNode(true);c.setAttribute('aria-hidden','true');c.tabIndex=-1;grid.appendChild(c)});
  grid.dataset.looped='1';
})();

/* Homepage sort -> full catalog sorted by Shopify */
$('#sortSelect')?.addEventListener('change',e=>{
  const map={'price-asc':'price-ascending','price-desc':'price-descending',title:'title-ascending'};
  const v=map[e.target.value];
  window.location.href=ROUTES.all+(v?(ROUTES.all.includes('?')?'&':'?')+'sort_by='+v:'');
});

/* Store & city slideshows */
const prefix=window.EE_ASSET_PREFIX||'';
const STORE_PHOTOS=['6fa228d19941.jpg','e12a5f5ce9ef.jpg','4105305e5ef8.jpg','37b7455319f3.jpg','b36602ddd5a0.jpg','7885c33d2b38.jpg'].map((f,i)=>({src:prefix+f,alt:'Inside Exclusive Essence Hair & Beauty Emporium',name:`store photo ${i+1}`}));
const CITY_PHOTOS=[
  {name:'Columbus, Ohio',alt:'The Columbus, Ohio skyline at dusk — home of our flagship store, open now',src:prefix+'dbcbfcdad132.jpg'},
  {name:'Dallas, Texas',alt:'The Dallas, Texas skyline at dusk, marked coming soon',src:prefix+'53e0f9e30153.jpg'},
  {name:'Miami, Florida',alt:'The Miami, Florida skyline at dusk, marked coming soon',src:prefix+'79f6a69707e4.jpg'},
  {name:'New York, New York',alt:'The New York City skyline at dusk, marked coming soon',src:prefix+'38858f6e0dcd.jpg'},
  {name:'San Francisco, California',alt:'The San Francisco, California skyline at dusk, marked coming soon',src:prefix+'3256941a04b3.jpg'}
];
const reducedMotion=window.matchMedia('(prefers-reduced-motion: reduce)').matches;
$$('[data-store-slideshow]').forEach(root=>{
  const photos=root.dataset.photoSet==='cities'?CITY_PHOTOS:STORE_PHOTOS;
  const noun=root.dataset.photoSet==='cities'?'city':'store photo';
  let current=(Number(root.dataset.start)||0)%photos.length,timer=null,touchX=0;
  root.innerHTML=`<div class="store-slideshow-track">${photos.map((p,i)=>`<img class="store-slide${i===current?' is-active':''}" src="${esc(p.src)}" alt="${i===current?esc(p.alt):''}" ${i===current?'':'aria-hidden="true"'} decoding="async" loading="${i===current?'eager':'lazy'}">`).join('')}</div><div class="store-slideshow-ui"><div class="store-slideshow-dots" role="group" aria-label="Choose ${noun}">${photos.map((p,i)=>`<button class="store-slide-dot${i===current?' is-active':''}" type="button" data-store-dot="${i}" aria-label="Show ${esc(p.name)}" aria-pressed="${i===current}"></button>`).join('')}</div><div class="store-slideshow-nav"><button class="store-slide-arrow" type="button" data-store-prev aria-label="Previous ${noun}">&#8592;</button><button class="store-slide-arrow" type="button" data-store-next aria-label="Next ${noun}">&#8594;</button></div></div>`;
  const slides=$$('.store-slide',root),dots=$$('.store-slide-dot',root);
  const show=i=>{current=(i+slides.length)%slides.length;slides.forEach((s,k)=>{const a=k===current;s.classList.toggle('is-active',a);s.setAttribute('aria-hidden',String(!a));s.alt=a?photos[k].alt:''});dots.forEach((d,k)=>{const a=k===current;d.classList.toggle('is-active',a);d.setAttribute('aria-pressed',String(a))})};
  const stop=()=>{if(timer){clearInterval(timer);timer=null}};
  const play=()=>{if(!reducedMotion&&!timer)timer=setInterval(()=>show(current+1),4600)};
  root.addEventListener('click',e=>{const d=e.target.closest('[data-store-dot]');if(d)show(Number(d.dataset.storeDot));if(e.target.closest('[data-store-prev]'))show(current-1);if(e.target.closest('[data-store-next]'))show(current+1)});
  root.addEventListener('mouseenter',stop);root.addEventListener('mouseleave',play);root.addEventListener('focusin',stop);root.addEventListener('focusout',play);
  root.addEventListener('touchstart',e=>{touchX=e.changedTouches[0].clientX},{passive:true});
  root.addEventListener('touchend',e=>{const d=e.changedTouches[0].clientX-touchX;if(Math.abs(d)>45)show(current+(d<0?1:-1))},{passive:true});
  document.addEventListener('visibilitychange',()=>document.hidden?stop():play());
  show(current);play();
});

/* Shop Our Feed banner slider */
(function(){
  const track=$('#feedTrack'),slider=$('#feedSlider'),dots=$('#feedDots');if(!track||!slider||!dots)return;
  const count=track.children.length;if(!count)return;
  let idx=0,timer=null,sx=null,moved=false;
  for(let i=0;i<count;i++){const b=document.createElement('button');b.type='button';b.setAttribute('aria-label','Show banner '+(i+1));b.addEventListener('click',()=>{go(i);restart()});dots.appendChild(b)}
  function go(i){idx=(i+count)%count;track.style.transform='translateX(-'+(idx*100)+'%)';[...dots.children].forEach((d,k)=>{d.classList.toggle('active',k===idx);d.setAttribute('aria-current',k===idx?'true':'false')});[...track.children].forEach((s,k)=>{s.setAttribute('aria-hidden',String(k!==idx));s.tabIndex=k===idx?0:-1})}
  const stop=()=>{if(timer)clearInterval(timer);timer=null};
  const start=()=>{stop();if(!reducedMotion)timer=setInterval(()=>go(idx+1),4500)};
  const restart=()=>{stop();start()};
  $('#feedNext')?.addEventListener('click',()=>{go(idx+1);restart()});
  $('#feedPrev')?.addEventListener('click',()=>{go(idx-1);restart()});
  slider.addEventListener('mouseenter',stop);slider.addEventListener('mouseleave',start);
  slider.addEventListener('focusin',stop);slider.addEventListener('focusout',start);
  slider.addEventListener('pointerdown',e=>{sx=e.clientX;moved=false;stop()});
  slider.addEventListener('pointerup',e=>{if(sx!==null){const dx=e.clientX-sx;if(Math.abs(dx)>40){moved=true;(dx<0?go(idx+1):go(idx-1))}sx=null}start()});
  /* a swipe should not also follow the banner link */
  track.addEventListener('click',e=>{if(moved){e.preventDefault();moved=false}});
  document.addEventListener('visibilitychange',()=>document.hidden?stop():start());
  go(0);start();
})();

/* ---------- Our Stores view (homepage) ---------- */
function openStoresView(){
  const s=$('#stores');if(!s)return false;
  s.classList.add('is-open');document.body.classList.add('stores-view-open');
  closeLayers();setMega(false,true);
  requestAnimationFrame(()=>s.scrollIntoView({behavior:reducedMotion?'auto':'smooth',block:'start'}));
  eeTrack('view_store_locations',{});
  return true;
}
document.addEventListener('click',e=>{
  const t=e.target.closest('[data-open-stores], a[href="#stores"], a[href$="/#stores"]');
  if(t&&$('#stores')){e.preventDefault();if(location.hash!=='#stores')history.pushState(null,'','#stores');openStoresView()}
});
if(location.hash==='#stores')openStoresView();
window.addEventListener('hashchange',()=>{if(location.hash==='#stores')openStoresView()});
$('#storesBackBtn')?.addEventListener('click',e=>{
  const s=$('#stores');if(!s)return;
  e.preventDefault();
  s.classList.remove('is-open');document.body.classList.remove('stores-view-open');
  history.pushState(null,'','#visit');
  $('#visit')?.scrollIntoView({behavior:reducedMotion?'auto':'smooth',block:'start'});
});

/* ---------- Entry gate ---------- */
(function(){
  const gate=$('#entryGate');if(!gate)return;
  const success=!!gate.querySelector('.gate-success');
  document.body.classList.add('gate-locked');
  function closeGate(){
    gate.classList.add('gate-hidden');document.body.classList.remove('gate-locked');
    setTimeout(()=>gate.remove(),450);
  }
  const first=gate.querySelector('input:not([type=hidden]):not(.ee-hp),button,a[href]');
  if(first&&!success)first.focus({preventScroll:true});
  const form=$('#entryGateForm');
  form?.addEventListener('submit',e=>{
    const hp=form.querySelector('.ee-hp');
    if(hp&&hp.value){e.preventDefault();return}
    const btn=form.querySelector('[type=submit]');if(btn){btn.disabled=true;btn.textContent='Joining…'}
    eeTrack('generate_lead',{method:'entry_gate'});
  });
  $('#gateShareBtn')?.addEventListener('click',async()=>{
    const code=($('#gateRewardCode')?.textContent||'').trim();
    const msg='Exclusive Essence Hair & Beauty Emporium — join the Essence List'+(code?` and get 10% off your first in-store purchase with code ${code}`:'')+'.';
    const url=location.origin+ROOT;
    if(navigator.share){try{await navigator.share({title:'Exclusive Essence',text:msg,url})}catch(e){}}
    else{try{await navigator.clipboard.writeText(msg+' '+url);toast('Invite copied — send it to a friend.')}catch(e){toast(code?`Code ${code} — share it with a friend.`:'Share exclusiveessence.store with a friend!')}}
    eeTrack('share',{method:'reward_invite'});
  });
  $('#gateEnterBtn')?.addEventListener('click',e=>{
    e.preventDefault();
    try{localStorage.setItem('eeGateDone','1')}catch(err){}
    closeGate();
    if(/[?&]customer_posted=/.test(location.search))history.replaceState(null,'',location.pathname+location.hash);
  });
  $('#entryGateSkip')?.addEventListener('click',e=>{
    try{sessionStorage.setItem('eeGateSkip','1')}catch(err){}
    e.preventDefault();closeGate();eeTrack('gate_skipped',{});
  });
  gate.addEventListener('keydown',e=>{if(e.key!=='Escape')return;const skip=$('#entryGateSkip');skip?skip.click():closeGate()});
})();

/* ---------- Footer newsletter ---------- */
$('#newsletterForm')?.addEventListener('submit',e=>{
  const f=e.target;
  const hp=f.querySelector('.ee-hp');if(hp&&hp.value){e.preventDefault();return}
  const btn=f.querySelector('[type=submit]');if(btn){btn.disabled=true;btn.textContent='Joining…'}
  eeTrack('generate_lead',{method:'footer_newsletter'});
});

/* ---------- Initial cart paint ---------- */
setCount(Number(window.EE_CART_COUNT)||0);
if(Number(window.EE_CART_COUNT)>0)refreshCart();
else updateLayawayCalc(0);
/* bfcache: when a shopper comes back from checkout with the back button, resync */
window.addEventListener('pageshow',e=>{if(e.persisted){refreshCart();const b=$('#checkoutBtn');if(b){b.disabled=!(lastCart&&lastCart.item_count);b.textContent=purchaseOption==='layaway'?'Send Layaway Request':'Checkout Securely'}}});
})();
