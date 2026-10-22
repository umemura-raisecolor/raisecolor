(function(){
  var h1=document.querySelector('.hero h1');
  if(h1){var parts=h1.innerHTML.split(/<br\s*\/?>/i);h1.innerHTML=parts.map(function(p){return '<span class="ln"><span>'+p.trim()+'</span></span>'}).join('');}
  var hd=document.querySelector('.site-header');
  function sc(){if(hd)hd.classList.toggle('rc-scrolled',window.scrollY>20);}
  window.addEventListener('scroll',sc,{passive:true});sc();
  var groups=[['.section-heading','',false],['.trust-intro','rv-l',false],['.trust-item','',true],['.service-card','',true],['.feature-copy','rv-r',false],['.feature-visual .stack','rv-l',false],['.check-list li','',true],['.work-card','',true],['.process-step','',true],['.price-box','',true],['.cta-inner','',false],['.about-grid,.profile,.page-hero .container,.content-block,.faq-item,.plan,.contact-grid > *,.info-table','',true]];
  var els=[];
  groups.forEach(function(g){var list=document.querySelectorAll(g[0]);list.forEach(function(el,i){if(el.closest('.hero'))return;el.classList.add('rv');if(g[1])el.classList.add(g[1]);if(g[2])el.style.setProperty('--n',i%5);els.push(el);});});
  if(!('IntersectionObserver' in window)){els.forEach(function(e){e.classList.add('in')});return;}
  var io=new IntersectionObserver(function(es){es.forEach(function(en){if(en.isIntersecting){en.target.classList.add('in');io.unobserve(en.target);}});},{threshold:.12,rootMargin:'0px 0px -40px 0px'});
  els.forEach(function(e){io.observe(e);});
})();
