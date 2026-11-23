// read names, images and short texts from the site script for all languages -> _build/meta.json
const { chromium } = require('playwright'); const fs=require('fs'); const serve=require('./serve');
(async()=>{
  const {server,base}=await serve(); const b=await chromium.launch(); const p=await b.newPage();
  await p.route(/fonts\.g|gc\.zgo\.at|mailerlite|web3forms/, r=>r.abort());
  await p.goto(base+'/_build/tmp_meta.html?promo=none',{waitUntil:'load'});
  const m=await p.evaluate(()=>{
    const L=LP_LANGS.map(x=>x[0]); const out={LP_LANGS, apps:APPS.map(a=>({n:a.n,url:a.url,img:a.img})),
      books:BOOKS.map(b=>({t:{},img:b.img,imgRu:b.imgRu||"",url:b.url,store:b.store,urlRu:b.urlRu||"",storeRu:b.storeRu||""})),
      app_txt:{}, book_txt:{}, brand_sub:{}, copy:{}};
    const keep=lang;
    for(const l of L){ lang=l;
      out.brand_sub[l]=t("brand_sub"); out.copy[l]=t("copy");
      out.app_txt[l]=APPS.map((a,i)=>{ const x=(APP_TXT[l]||APP_TXT.en)[i]||{}; return {head:x.head||(a[l]||a.en)[0], desc:x.desc||(a[l]||a.en)[1]}; });
      out.book_txt[l]=BOOKS.map((b,i)=>{ const x=(BOOK_TXT[l]||BOOK_TXT.en)[i]||{}; return {head:x.head||"", desc:x.desc||""}; });
      BOOKS.forEach((b,i)=>{ out.books[i].t[l]=(b[l]&&b[l].t)||b.en.t; });
    }
    lang=keep; return out;
  });
  fs.writeFileSync(__dirname+'/meta.json', JSON.stringify(m,null,1));
  await b.close(); server.close(); console.log('meta ok');
})();
