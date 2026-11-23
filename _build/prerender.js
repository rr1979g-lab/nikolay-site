// put the rendered home page HTML into /<lang>/index.html so search engines see the content without running JS
const { chromium } = require('playwright'); const fs=require('fs'); const path=require('path'); const serve=require('./serve');
const LANGS=["en","ru","uk","ar","zh","fr","de","he","hi","id","it","ja","ko","pt","es","tr","bn","mr","te","ta"];
(async()=>{
  const {server,base}=await serve(); const b=await chromium.launch();
  const ctx=await b.newContext({viewport:{width:1280,height:900}});
  await ctx.route(/fonts\.g|gc\.zgo\.at|mailerlite|web3forms/, r=>r.abort());
  for(const l of LANGS){
    const f=path.resolve(__dirname,'..',l,'index.html'); let html=fs.readFileSync(f,'utf8');
    html=html.replace(/<!--pre-->[\s\S]*?<!--\/pre-->/,'');
    const p=await ctx.newPage(); await p.goto(base+'/'+l+'/',{waitUntil:'load'}); await p.waitForTimeout(300);
    const main=await p.evaluate(()=>{
      const c=document.body.cloneNode(true);
      c.querySelectorAll('script,#promo').forEach(x=>x.remove());
      c.querySelectorAll('dialog').forEach(d=>{ d.removeAttribute('open'); });
      c.querySelectorAll('img:not([loading])').forEach(i=>{ if(!/^bi-/.test(i.id)){ i.setAttribute('loading','lazy'); i.setAttribute('decoding','async'); } });
      return c.innerHTML;
    });
    await p.close();
    const a=html.indexOf('<body>')+6, z=html.lastIndexOf('<script src="/assets/site.');
    html=html.slice(0,a)+main.trim()+'\n'+html.slice(z);
    fs.writeFileSync(f,html);
  }
  await b.close(); server.close(); console.log('prerender ok');
})();
