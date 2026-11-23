// 1200x630 preview images for social networks -> /img/og/
const { chromium } = require('playwright'); const fs=require('fs'); const path=require('path'); const serve=require('./serve');
const M=JSON.parse(fs.readFileSync(__dirname+'/meta.json','utf8'));
const APP_SLUGS=["intuition-trainer","moment-now","breath-prana-moment","head-heart","phone-detox","perennial","affirmation","figure-out-why","free-again","pill-reminder","parent-lock","ferment-lab","fridge"];
const BOOK_SLUGS=["thoughts-in-circles","what-if-everything-turns-out-well","destiny-to-order","the-intuition-code","the-right-choice","minus-25-kg","open-up-to-your-dreams"];
const esc=s=>String(s).replace(/[&<>"]/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;'}[c]));
const page=(visual,kick,title,sub)=>`<!doctype html><meta charset=utf-8><style>
*{box-sizing:border-box}body{margin:0;width:1200px;height:630px;overflow:hidden;font-family:Inter,"DejaVu Sans",sans-serif;
background:radial-gradient(900px 500px at 85% -10%,#3B6FE0 0,transparent 60%),linear-gradient(135deg,#14205A,#1B2B6E 55%,#24388A);color:#fff;display:flex;align-items:center;gap:64px;padding:0 80px}
.v{flex:none;display:grid;place-items:center}.v img.icon{width:300px;height:300px;border-radius:64px;box-shadow:0 30px 60px -20px rgba(0,0,0,.6)}
.v img.cover{height:470px;border-radius:10px;box-shadow:0 30px 60px -20px rgba(0,0,0,.7)}
.v img.face{width:380px;height:380px;border-radius:50%;object-fit:cover;border:8px solid #FFC93C}
.t{min-width:0}.k{font-size:30px;font-weight:700;color:#FFC93C;letter-spacing:.06em;text-transform:uppercase}
h1{font-size:76px;line-height:1.02;margin:18px 0 22px;font-weight:800;letter-spacing:-.01em}p{font-size:34px;line-height:1.3;margin:0;color:#DCE5FF;font-weight:500}
.b{position:absolute;left:80px;bottom:44px;font-size:26px;color:#AFC0F0;font-weight:600}.b b{color:#fff}
.bar{position:absolute;left:0;right:0;top:0;height:10px;background:linear-gradient(90deg,#FFD04D,#F5A30B,#E8821E)}
</style><div class=bar></div><div class=v>${visual}</div><div class=t><div class=k>${esc(kick)}</div><h1>${esc(title)}</h1><p>${esc(sub)}</p></div><div class=b><b>Nikolay Shcherbakov</b> · nikolayshcherbakov.com</div>`;
(async()=>{
  const {server,base}=await serve(); const b=await chromium.launch(); const p=await b.newPage({viewport:{width:1200,height:630}});
  const out=path.resolve(__dirname,'..','img','og'); fs.mkdirSync(out,{recursive:true});
  const shot=async(html,name)=>{ fs.writeFileSync(path.resolve(__dirname,'tmp_og.html'),html); await p.goto(base+'/_build/tmp_og.html',{waitUntil:'load'}); await p.screenshot({path:path.join(out,name+'.jpg'),type:'jpeg',quality:82}); };
  await shot(page(`<img class=face src="${M.portrait||''}">`,"Books • Apps","Nikolay Shcherbakov","Calm, intuition, healthy habits and mindful living"),"home");
  for(let i=0;i<M.apps.length;i++){ const a=M.apps[i]; await shot(page(`<img class=icon src="${a.img}">`,"Android app",a.n,M.app_txt.en[i].head),"app-"+APP_SLUGS[i]); }
  for(let i=0;i<M.books.length;i++){ const bk=M.books[i];
    await shot(page(`<img class=cover src="${bk.img}">`,"Book",bk.t.en,M.book_txt.en[i].head),"book-"+BOOK_SLUGS[i]);
    await shot(page(`<img class=cover src="${bk.imgRu||bk.img}">`,"Книга",bk.t.ru,M.book_txt.ru[i].head),"book-"+BOOK_SLUGS[i]+"-ru");
  }
  await b.close(); server.close(); console.log('og ok');
})();
