(function(){
var b=document.querySelector('.menu-btn'),n=document.querySelector('#site-nav');
if(b&&n){b.addEventListener('click',function(){var o=b.getAttribute('aria-expanded')==='true';b.setAttribute('aria-expanded',String(!o));b.textContent=o?'メニュー':'閉じる';n.classList.toggle('open',!o);});}
var y=document.querySelector('#year');if(y)y.textContent=new Date().getFullYear();
var f=document.querySelector('#contact-form'),st=document.querySelector('#form-status');
if(f&&st){f.addEventListener('submit',async function(e){e.preventDefault();if(!f.reportValidity())return;
var btn=f.querySelector('button[type=submit]');btn.disabled=true;st.className='form-status';st.textContent='送信しています…';
try{var r=await fetch(f.action.replace('formsubmit.co/','formsubmit.co/ajax/'),{method:'POST',headers:{'Accept':'application/json'},body:new FormData(f)});
if(!r.ok)throw new Error();f.reset();st.classList.add('ok');st.textContent='送信が完了しました。2営業日以内にメールでお返事いたします。';}
catch(err){st.classList.add('ng');st.textContent='送信できませんでした。お手数ですが umemura@raisecolor.net まで直接メールでお問い合わせください。';}
finally{btn.disabled=false;}});}
})();

(function(){
document.documentElement.classList.add('js');
var rm=window.matchMedia('(prefers-reduced-motion: reduce)').matches;
var bar=document.createElement('div');bar.className='progress';document.body.appendChild(bar);
var hd=document.querySelector('header.shell');
function onScroll(){var h=document.documentElement.scrollHeight-innerHeight;bar.style.transform='scaleX('+(h>0?scrollY/h:0)+')';if(hd)hd.classList.toggle('scrolled',scrollY>8);}
addEventListener('scroll',onScroll,{passive:true});onScroll();
if(rm||!('IntersectionObserver' in window))return;
var EXP='.tz-grid,.pr-grid,.wk-grid,.timeline,.policy,.ct-list,.case-points,.dl-table,.rp-numbers,.faq,tbody,.sv-stats,.workflow-steps,.sv-toc';
var targets=[];
document.querySelectorAll('main > section:not(.hero):not(.sv-hero):not(.page-head)').forEach(function(sec){
  var kids=[].slice.call(sec.children);
  kids.forEach(function(k){
    if(k.matches(EXP))targets.push.apply(targets,[].slice.call(k.children));
    else if(k.matches('.wk-feature,.pf,.ct,.pr-support,.sv-head')){targets.push.apply(targets,[].slice.call(k.children));}
    else targets.push(k);
  });
  if(!sec.classList.contains('closing-contact'))sec.classList.add('blk');
});
var io=new IntersectionObserver(function(es){es.forEach(function(e){if(e.isIntersecting){e.target.classList.add('in');io.unobserve(e.target);if(e.target.__count)e.target.__count();}});},{threshold:.12,rootMargin:'0px 0px -6% 0px'});
var last=null,idx=0;
targets.forEach(function(t){
  var par=t.parentElement;if(par!==last){last=par;idx=0;}
  t.style.setProperty('--d',Math.min(idx,5)*.09+'s');idx++;
  var onlyImg=t.matches('figure,.tz-img,.sv-shot')||(t.querySelector('img')&&!t.textContent.trim());
  t.classList.add(onlyImg?'rv-img':'rv');io.observe(t);
});
['approach-title','hero-title'].forEach(function(id){var h=document.getElementById(id);if(!h)return;var n=0;
function split(node){[].slice.call(node.childNodes).forEach(function(c){
if(c.nodeType===3){var f=document.createDocumentFragment();c.textContent.split('').forEach(function(ch){var s=document.createElement('span');s.className='ch';s.textContent=ch;s.style.setProperty('--ci',n++);f.appendChild(s);});c.parentNode.replaceChild(f,c);}
else if(c.nodeType===1)split(c);});}
h.querySelectorAll('.title-column').forEach(split);h.classList.add('chars');if(id==='hero-title')setTimeout(function(){h.classList.add('in');},250);});
document.querySelectorAll('.block').forEach(function(b){io.observe(b);});
document.querySelectorAll('.block-title').forEach(function(b){io.observe(b);});
})();
