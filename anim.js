(function(){
  var h1=document.querySelector('.hero h1');
  if(h1){var parts=h1.innerHTML.split(/<br\s*\/?>/i);h1.innerHTML=parts.map(function(p){return '<span class="ln"><span>'+p.trim()+'</span></span>'}).join('');}
  var hd=document.querySelector('.site-header');
  function sc(){if(hd)hd.classList.toggle('rc-scrolled',window.scrollY>20);}
  window.addEventListener('scroll',sc,{passive:true});sc();
  var groups=[['.section-heading','',false],['.trust-intro','rv-l',false],['.trust-item','',true],['.service-card','',true],['.feature-copy','rv-r',false],['.feature-visual .stack','rv-l',false],['.check-list li','',true],['.work-card','',true],['.work-feature','',false],['.process-step','',true],['.price-box','',true],['.cta-inner','',false],['.worry-photo','rv-l',false],['.worry-copy','rv-r',false],['.worry-list li','',true],['.message-copy','rv-l',false],['.message-photo','rv-r',false],['.process-photo','rv-r',false],['.about-grid,.profile,.page-hero .container,.content-block,.faq-item,.plan,.contact-grid > *,.info-table','',true],['.story > p','',false],['.fact','',true],['.policy-item','',true],['.personal','',false]];
  var els=[];
  groups.forEach(function(g){var list=document.querySelectorAll(g[0]);list.forEach(function(el,i){if(el.closest('.hero')||el.closest('.rep-hero'))return;el.classList.add('rv');if(g[1])el.classList.add(g[1]);if(g[2])el.style.setProperty('--n',i%5);els.push(el);});});
  if(!('IntersectionObserver' in window)){els.forEach(function(e){e.classList.add('in')});return;}
  var io=new IntersectionObserver(function(es){es.forEach(function(en){if(en.isIntersecting){en.target.classList.add('in');io.unobserve(en.target);}});},{threshold:.12,rootMargin:'0px 0px -40px 0px'});
  els.forEach(function(e){io.observe(e);});
})();
/* 数字のカウントアップ(料金には使わない) */
(function(){
  var els=document.querySelectorAll('.cnt');
  if(!els.length||matchMedia('(prefers-reduced-motion:reduce)').matches||!('IntersectionObserver' in window))return;
  function run(el){
    var to=+el.dataset.to,dur=to>=1000?2000:1600,t0=null;
    function f(t){if(!t0)t0=t;var k=Math.min((t-t0)/dur,1),e=1-Math.pow(1-k,3);
      el.textContent=Math.round(to*e).toLocaleString('ja-JP');if(k<1)requestAnimationFrame(f);}
    setTimeout(function(){requestAnimationFrame(f);},+(el.dataset.delay||0));
  }
  var io=new IntersectionObserver(function(es){es.forEach(function(e){if(e.isIntersecting){io.unobserve(e.target);run(e.target);}});},{threshold:.6});
  els.forEach(function(el){el.textContent='0';io.observe(el);});
})();

/* 経歴タイムライン:線が上から伸びて、項目が順番に流れて出る */
(function(){
  var tls=document.querySelectorAll('.timeline');
  if(!tls.length)return;
  var still=matchMedia('(prefers-reduced-motion:reduce)').matches||!('IntersectionObserver' in window);
  tls.forEach(function(tl){
    tl.classList.add('tl-flow');
    tl.querySelectorAll(':scope>li').forEach(function(li,i){li.style.setProperty('--i',i);});
    if(still)tl.classList.add('tl-in');
  });
  if(still)return;
  var io=new IntersectionObserver(function(es){es.forEach(function(e){if(e.isIntersecting){e.target.classList.add('tl-in');io.unobserve(e.target);}});},{threshold:.2,rootMargin:'0px 0px -60px 0px'});
  tls.forEach(function(tl){io.observe(tl);});
})();
