
const ARTIFACTS_URL = (window.location.pathname.includes('/bo-suu-tap/') || window.location.pathname.includes('/co-vat/') || window.location.pathname.includes('/huong-dan/')) ? '../artifacts.json' : 'artifacts.json';
const ASSET_PREFIX = ARTIFACTS_URL.startsWith('../') ? '../assets/' : 'assets/';
const ROOT_PREFIX = ARTIFACTS_URL.startsWith('../') ? '../' : '';
const loadArtifacts = async () => {
  const response = await fetch(ARTIFACTS_URL);
  return response.json();
};
function header(active='') {
  const home = ROOT_PREFIX + 'index.html';
  const collection = ROOT_PREFIX + 'bo-suu-tap/index.html';
  const guide = ROOT_PREFIX + 'huong-dan/index.html';
  return `<header class="site-header"><div class="container nav"><a class="brand" href="${home}"><img src="${ASSET_PREFIX}brand/avatar.jpg" alt="Bạc Hôme"><span>Bạc Hôme</span></a><button class="menu-toggle" aria-label="Mở menu" aria-expanded="false">☰</button><nav class="nav-links"><a href="${home}#home">Trang chủ</a><a href="${home}#about">Về chúng tôi</a><a href="${home}#products">Sản phẩm</a><a class="${active==='collection'?'active':''}" href="${collection}">Bộ sưu tập</a><a class="${active==='guide'?'active':''}" href="${guide}">Hướng dẫn</a></nav></div></header>`;
}
function footer() {
 const home=ROOT_PREFIX+'index.html';
 return `<footer class="footer"><div class="container"><div class="footer-grid"><div><a class="brand" href="${home}"><img src="${ASSET_PREFIX}brand/avatar.jpg" alt=""><span>Bạc Hôme</span></a><p>Chạm vào di sản – Mở lối khám phá. Kết nối lịch sử Việt Nam với trải nghiệm thủ công và công nghệ.</p></div><div><h3>Khám phá</h3><p><a href="${home}#about">Về chúng tôi</a></p><p><a href="${home}#products">Sản phẩm</a></p><p><a href="${ROOT_PREFIX}bo-suu-tap/index.html">Bộ sưu tập cổ vật</a></p></div><div><h3>Trải nghiệm CHẠM Sử</h3><p><a href="${ROOT_PREFIX}huong-dan/index.html">Hướng dẫn NFC & AR</a></p><p><a href="${home}#contact">Liên hệ</a></p></div></div><div class="copyright">© <span id="year"></span> Bạc Hôme. Nội dung và hình ảnh thuộc dự án Bạc Hôme.</div></div></footer>`;
}
document.addEventListener('DOMContentLoaded', () => {
 const toggle=document.querySelector('.menu-toggle');
 if(toggle) toggle.addEventListener('click',()=>{const nav=document.querySelector('.nav-links');const open=nav.classList.toggle('open');toggle.setAttribute('aria-expanded',String(open));});
 const year=document.querySelector('#year'); if(year) year.textContent=new Date().getFullYear();
 const grid=document.querySelector('#artifact-grid');
 if(grid) renderCollection(grid);
 const detail=document.querySelector('#artifact-detail');
 if(detail) renderDetail(detail);
});
async function renderCollection(grid) {
 const items=await loadArtifacts();
 const search=document.querySelector('#artifact-search');
 const progress=document.querySelector('#progress');
 const unlockedKey='bh_unlocked_artifacts';
 let unlocked=[]; try{unlocked=JSON.parse(localStorage.getItem(unlockedKey)||'[]')}catch{}
 const draw=()=>{
   const q=(search?.value||'').toLocaleLowerCase('vi');
   const filtered=items.filter(a=>(a.artifact+' '+a.dynasty+' '+a.era).toLocaleLowerCase('vi').includes(q));
   grid.innerHTML=filtered.map(a=>`<article class="artifact-card"><img src="${ASSET_PREFIX+a.image.replace(/^assets\//,'')}" alt="${a.artifact}" loading="lazy"><div class="card-body"><div class="era">${a.dynasty}</div><h3>${a.artifact}</h3><p>${a.era}</p><p>${a.description.slice(0,118)}${a.description.length>118?'…':''}</p><a class="btn secondary" href="../co-vat/index.html?id=${encodeURIComponent(a.id)}">Khám phá cổ vật</a> <button class="btn unlock-btn" data-id="${a.id}">${unlocked.includes(a.id)?'Đã mở khóa ✓':'Mở khóa thử'}</button></div></article>`).join('')||'<p class="empty">Không tìm thấy cổ vật phù hợp.</p>';
   if(progress) progress.textContent=`Đã mở khóa ${unlocked.length} / ${items.length} cổ vật`;
   grid.querySelectorAll('.unlock-btn').forEach(btn=>btn.addEventListener('click',()=>{const id=btn.dataset.id;if(!unlocked.includes(id)){unlocked.push(id);localStorage.setItem(unlockedKey,JSON.stringify(unlocked));draw();}else{location.href='../co-vat/index.html?id='+encodeURIComponent(id)}}));
 };
 if(search) search.addEventListener('input',draw);
 draw();
}
async function renderDetail(root) {
 const items=await loadArtifacts();
 const id=new URLSearchParams(location.search).get('id');
 const a=items.find(x=>x.id===id)||items[0];
 const idx=items.findIndex(x=>x.id===a.id);
 root.innerHTML=`<div class="container section"><div class="detail-grid"><div class="detail-image"><img src="${ASSET_PREFIX+a.image.replace(/^assets\//,'')}" alt="${a.artifact}"></div><div class="detail-copy"><p class="eyebrow">${a.dynasty}</p><h1>${a.artifact}</h1><p><strong>Niên đại:</strong> ${a.era}</p><p>${a.description}</p><p class="small-note">Đây là trang giới thiệu cổ vật phiên bản HTML/CSS/JavaScript cơ bản. Các tính năng NFC thật và mô hình 3D/AR cần tích hợp riêng khi triển khai.</p><div class="actions"><button class="btn" id="unlock-detail">Mở khóa cổ vật</button><a class="btn secondary" href="../bo-suu-tap/index.html">Quay lại bộ sưu tập</a></div><p id="detail-message" class="small-note" aria-live="polite"></p><div class="actions"><a class="btn secondary" href="index.html?id=${encodeURIComponent(items[(idx+items.length-1)%items.length].id)}">← Cổ vật trước</a><a class="btn secondary" href="index.html?id=${encodeURIComponent(items[(idx+1)%items.length].id)}">Cổ vật tiếp →</a></div></div></div></div>`;
 const button=root.querySelector('#unlock-detail');
 button.addEventListener('click',()=>{let saved=[];try{saved=JSON.parse(localStorage.getItem('bh_unlocked_artifacts')||'[]')}catch{}if(!saved.includes(a.id))saved.push(a.id);localStorage.setItem('bh_unlocked_artifacts',JSON.stringify(saved));root.querySelector('#detail-message').textContent='Đã lưu cổ vật vào bộ sưu tập của bạn trên trình duyệt này.';button.textContent='Đã mở khóa ✓';});
}
