// tiny static server for the repo root (used by meta.js, prerender.js, og.js)
const http=require('http'), fs=require('fs'), path=require('path');
const ROOT=path.resolve(__dirname,'..');
const T={'.html':'text/html; charset=utf-8','.js':'text/javascript','.css':'text/css','.webp':'image/webp','.png':'image/png','.svg':'image/svg+xml','.json':'application/json','.xml':'application/xml','.txt':'text/plain'};
module.exports=()=>new Promise(res=>{
  const s=http.createServer((q,r)=>{
    let p=decodeURIComponent(new URL(q.url,'http://x').pathname); if(p.endsWith('/')) p+='index.html';
    const f=path.join(ROOT,p);
    fs.readFile(f,(e,d)=>{ if(e){ r.writeHead(404); return r.end('nf'); } const ty=T[path.extname(f)]||'application/octet-stream'; if(/gzip/.test(q.headers['accept-encoding']||'')&&/text|javascript|json|xml|svg/.test(ty)){ r.writeHead(200,{'content-type':ty,'content-encoding':'gzip'}); return r.end(require('zlib').gzipSync(d)); } r.writeHead(200,{'content-type':ty}); r.end(d); });
  }).listen(0,()=>res({server:s,base:'http://127.0.0.1:'+s.address().port}));
});
