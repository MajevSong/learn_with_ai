'use strict';
(() => {
  const key='net-atlasi-ui-v1';let settings={large:false,focus:false};
  try{const saved=JSON.parse(localStorage.getItem(key)||'{}');settings.large=saved.large===true;settings.focus=saved.focus===true;}catch{}
  function paint(){
    document.body.classList.toggle('reading-large',settings.large);
    document.body.classList.toggle('focus-mode',settings.focus);
    document.getElementById('reading-size').setAttribute('aria-pressed',String(settings.large));
    const focus=document.getElementById('focus-mode');focus.setAttribute('aria-pressed',String(settings.focus));focus.title=settings.focus?'Odak görünümünden çık':'Odak görünümünü aç';
  }
  function save(){try{localStorage.setItem(key,JSON.stringify(settings));}catch{}paint();}
  document.getElementById('reading-size').onclick=()=>{settings.large=!settings.large;save();};
  document.getElementById('focus-mode').onclick=()=>{settings.focus=!settings.focus;save();};
  function route(){const name=location.hash.slice(1).split('/')[0]||'kesfet';document.body.dataset.route=name;for(const a of document.querySelectorAll('.mobile-study-nav>a')){const group=['ders','kitap'].includes(name)?'dersler':['soru','baglantilar'].includes(name)?'sorular':name;a.classList.toggle('active',a.dataset.mobileNav===group);}}
  window.addEventListener('hashchange',route);
  document.addEventListener('keydown',ev=>{if(ev.key==='Escape'&&settings.focus){settings.focus=false;save();}});
  paint();route();
})();
