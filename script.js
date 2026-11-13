if('scrollRestoration' in history)history.scrollRestoration='manual';
(function(){const top=()=>{if(!location.hash){window.scrollTo(0,0);document.documentElement.scrollTop=0;document.body.scrollTop=0;}};top();window.addEventListener('load',top);window.addEventListener('pageshow',top);})();
const menuButton=document.querySelector('.menu-toggle');const nav=document.querySelector('#site-nav');
if(menuButton&&nav){menuButton.addEventListener('click',()=>{const o=menuButton.getAttribute('aria-expanded')==='true';menuButton.setAttribute('aria-expanded',String(!o));menuButton.setAttribute('aria-label',o?'メニューを開く':'メニューを閉じる');nav.classList.toggle('open',!o);});}
const y=document.querySelector('#year');if(y)y.textContent=new Date().getFullYear();
const form=document.querySelector('#contact-form');const st=document.querySelector('#form-status');
if(form&&st){form.addEventListener('submit',async(e)=>{e.preventDefault();if(!form.reportValidity())return;
const btn=form.querySelector('button[type=submit]');btn.disabled=true;st.className='form-status';st.textContent='送信しています…';
try{const r=await fetch(form.action.replace('formsubmit.co/','formsubmit.co/ajax/'),{method:'POST',headers:{'Accept':'application/json'},body:new FormData(form)});
if(!r.ok)throw new Error();form.reset();st.classList.add('ok');st.textContent='送信が完了しました。2営業日以内にメールでお返事いたします。';}
catch(err){st.classList.add('ng');st.textContent='送信できませんでした。お手数ですが umemura@raisecolor.net まで直接メールでお問い合わせください。';}
finally{btn.disabled=false;}});}
