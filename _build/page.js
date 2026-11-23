/* App, book and blog pages: open Google Play in the Play Store app on Android; close the language menu on outside tap; count clicks */
(function(){
  function gc(path,title){ try{ if(window.goatcounter&&window.goatcounter.count) window.goatcounter.count({path:path,title:title,event:true}); }catch(e){} }
  window.nsGo=window.nsGo||function(u){ location.href=u; };
  document.addEventListener("click",function(e){
    var a=e.target.closest&&e.target.closest("a[href]"); if(!a) return;
    var u=a.href;
    if(/play\.google\.com\/store\/apps\/details/.test(u)){
      var m=u.match(/id=([\w.]+)/); gc("click/google-play/"+(m?m[1].replace(/^com\.(nikolay\.)?/,""):""),"Google Play · "+location.pathname);
      if(e.defaultPrevented||e.button>0||e.metaKey||e.ctrlKey) return;
      var ua=navigator.userAgent, isAndroid=/Android/i.test(ua)||(navigator.userAgentData&&navigator.userAgentData.platform==="Android")||(/Linux/i.test(ua)&&!/CrOS/i.test(ua)&&navigator.maxTouchPoints>0);
      if(!isAndroid||!m) return;
      e.preventDefault(); var left=false, onHide=function(){ if(document.hidden) left=true; };
      document.addEventListener("visibilitychange",onHide);
      var inApp=/FBAN|FBAV|FB_IAB|Instagram/i.test(ua);
      window.nsGo(inApp?"market://details?id="+m[1]:"intent://details?id="+m[1]+"#Intent;scheme=market;package=com.android.vending;S.browser_fallback_url="+encodeURIComponent(u)+";end");
      setTimeout(function(){ document.removeEventListener("visibilitychange",onHide); if(!left&&!document.hidden) window.nsGo(u); },1600);
    } else if(/litres\.ru|amazon\.|a\.co\//.test(u)){
      gc("click/"+(/litres/.test(u)?"litres":"amazon")+location.pathname.replace(/\/$/,"").replace(/^\/[a-z]{2}\/books/,""),"Store · "+location.pathname);
    }
  });
  document.addEventListener("click",function(e){ var d=document.querySelector(".lsw[open]"); if(d&&!d.contains(e.target)) d.removeAttribute("open"); });
  document.querySelectorAll(".lsw-list a").forEach(function(a){ a.addEventListener("click",function(){ try{ localStorage.setItem("ns-lang",a.getAttribute("lang")); }catch(e){} }); });
})();
