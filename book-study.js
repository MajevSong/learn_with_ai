'use strict';
window.BookStudy=(()=>{
 const e=v=>String(v??'').replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
 const guide=l=>(window.BOOK_GUIDES||{})[l.id];
 const pages=g=>[...new Set(g.sections.flatMap(s=>s.pages))].sort((a,b)=>a-b);
 const positionKey='net-atlasi-book-study-v1';let positions={};
 try{const saved=JSON.parse(localStorage.getItem(positionKey)||'{}');if(saved&&typeof saved==='object'&&!Array.isArray(saved))positions=saved;}catch{}
 function position(l,g){const saved=positions[l.id];if(saved&&Number.isInteger(saved.page)){let index=Number.isInteger(saved.index)&&g.sections[saved.index]?.pages.includes(saved.page)?saved.index:g.sections.findIndex(s=>s.pages.includes(saved.page));if(index>=0)return {index,page:saved.page};}return {index:0,page:g.sections[0].pages[0]};}
 function remember(l,index,page){positions[l.id]={index,page};try{localStorage.setItem(positionKey,JSON.stringify(positions));}catch{}}
 function range(list){let out=[],start=list[0],last=start;for(let i=1;i<=list.length;i++){if(list[i]===last+1){last=list[i];continue;}out.push(start===last?String(start):start+'–'+last);start=last=list[i];}return out.join(', ');}
 function paragraph(p){return `<p>${e(p)}</p>`;}
 let questionRefs;
 function questions(g,s){
  if(!questionRefs){questionRefs=new Map();const byId=new Map((window.EXAM_QUESTIONS||[]).map(q=>[q.id,q]));for(const [id,a]of Object.entries(window.EXAM_ANALYSES||{})){const q=byId.get(id);if(!q)continue;for(const r of a.studyRefs||[]){const key=r.book+':'+r.page;if(!questionRefs.has(key))questionRefs.set(key,[]);questionRefs.get(key).push({id,title:a.title,year:q.year});}}}
  const list=[...new Map(s.pages.flatMap(p=>questionRefs.get(g.book+':'+p)||[]).map(q=>[q.id,q])).values()];
  return list.length?`<section class="book-page-questions"><h3>Bu sayfayla bağlantılı ÖSYM soruları</h3>${list.slice(0,4).map(q=>`<a href="#soru/${e(q.id)}"><span>${q.year}</span>${e(q.title)} ↗</a>`).join('')}</section>`:'';
 }
 function notes(g,s,i){
  const regular=(s.explanation||[]).map(paragraph).join('');
  return `<article class="book-explanation" id="kitap-adim-${i+1}" tabindex="-1"><p class="book-step-label">BÖLÜM ${i+1} / ${g.sections.length} · KİTAP S. ${range(s.pages)}</p><h2>${e(s.title)}</h2>${s.look?`<aside class="book-look"><b>Kitapta bakılacak yer</b><p>${e(s.look)}</p></aside>`:''}${regular?`<div class="book-teaching"><h3>Sayfanın açıklaması</h3>${regular}</div>`:''}${(s.notes||[]).map(n=>`<section class="book-linked-note"><p class="book-note-source">ÇALIŞMA NOTU · KİTAP S. ${n.page}</p><h3>${e(n.title)}</h3>${String(n.text).split(/\n\s*\n/).map(paragraph).join('')}</section>`).join('')}${s.note?`<aside class="book-source-correction"><b>Kaynağı okurken dikkat</b><p>${e(s.note)}</p>${s.reference&&/^https:\/\//.test(s.reference.url)?`<a href="${e(s.reference.url)}" target="_blank" rel="noopener noreferrer">${e(s.reference.title)} ↗</a>`:''}</aside>`:''}${s.check?`<details class="book-check"><summary>${e(s.check.question)}</summary><div>${paragraph(s.check.answer)}</div></details>`:''}${!regular&&!s.notes?.length?'<p class="book-native-reading">Bu bölümün konu anlatımı ve örnekleri özgün kitap sayfasında. Bölüme ait sayfalar arasında yukarıdaki sayfa düğmeleriyle ilerleyebilirsin.</p>':''}${questions(g,s)}<nav class="book-step-actions" aria-label="Kitap bölümleri arasında geçiş"><button type="button" data-book-step="${i-1}" ${i===0?'disabled':''}>← Önceki bölüm</button><span>${i+1} / ${g.sections.length}</span><button type="button" data-book-step="${i+1}" ${i===g.sections.length-1?'disabled':''}>Sonraki bölüm →</button></nav></article>`;
 }
 function render(l,{visual=''}={}){
  const g=guide(l);if(!g)return '';
  const all=pages(g),b=window.SourceReader.resources[g.book],start=position(l,g),first=g.sections[start.index],hasTOC=(window.SOURCE_BOOKS||[]).some(x=>x.id===g.book&&x.toc?.length);
  return `<section class="book-study reading-room" id="baglanti" data-book-guide="${e(l.id)}"><header class="book-study-head"><div><p class="eyebrow">KİTAP ÜZERİNDEN KONU ANLATIMI</p><h2>${e(b.label)}</h2><p>Basılı sayfa ${range(all)} · ${all.length} sayfa</p></div><a href="#kitap/${e(g.book)}/${window.SourceReader.physicalPage(g.book,start.page)}">${hasTOC?'Kitabın tamamı ve içindekiler':'Kaynak kitabı aç'} ↗</a></header><div class="book-study-controls"><label for="book-section">Kitaptaki bölüm</label><select id="book-section">${g.sections.map((s,i)=>`<option value="${i}" ${i===start.index?'selected':''}>${i+1}. ${e(s.title)} · s. ${range(s.pages)}</option>`).join('')}</select><div class="book-section-pages" role="group" aria-label="Bu bölümün kitap sayfaları"></div></div><div class="book-study-grid"><div class="book-study-source"><div class="book-current-page"><b>Kitap sayfası <span data-book-page>${start.page}</span></b><button type="button" data-book-expand aria-pressed="false">Sayfayı genişlet ↗</button></div>${window.SourceReader.render(g.book,window.SourceReader.physicalPage(g.book,start.page))}</div><div class="book-notes-host">${notes(g,first,start.index)}</div></div>${visual?`<details class="book-model supplementary-map" id="kitap-model"><summary>Kitaptaki bilgiyi model üzerinde dene</summary><div class="inline-special-visual">${visual}</div></details>`:''}<div class="book-after-links">${window.ExamStudy?.lessonCount(l.id)?'<a href="#osym-baglantilari" data-book-jump="osym-baglantilari">İlgili ÖSYM soruları ↓</a>':''}<a href="#soru" data-book-jump="soru">Konu kontrolü ↓</a></div></section>`;
 }
 function bind(root,l){
  const room=root.querySelector('.book-study'),g=guide(l);if(!room||!g)return;
  const start=position(l,g);let index=start.index,current=start.page;
  const reader=room.querySelector('.source-reader'),host=room.querySelector('.book-notes-host'),select=room.querySelector('#book-section'),chips=room.querySelector('.book-section-pages');
  function paintPages(){const s=g.sections[index];chips.innerHTML=s.pages.map(p=>`<button type="button" data-book-page-choice="${p}" class="${p===current?'active':''}" aria-pressed="${p===current}">s. ${p}</button>`).join('');chips.querySelectorAll('[data-book-page-choice]').forEach(b=>b.onclick=()=>reader.showSourcePage(window.SourceReader.physicalPage(g.book,+b.dataset.bookPageChoice)));room.querySelector('[data-book-page]').textContent=current;}
  function paintNotes(){host.innerHTML=notes(g,g.sections[index],index);select.value=String(index);host.querySelectorAll('[data-book-step]').forEach(b=>b.onclick=()=>choose(+b.dataset.bookStep,true));}
  function choose(next,scroll=false){if(next<0||next>=g.sections.length)return;index=next;current=g.sections[index].pages[0];paintNotes();reader.showSourcePage(window.SourceReader.physicalPage(g.book,current));paintPages();if(scroll){select.focus({preventScroll:true});room.querySelector('.book-study-controls').scrollIntoView({behavior:'smooth',block:'start'});}}
  window.SourceReader.bind(room,{pages:pages(g).map(p=>window.SourceReader.physicalPage(g.book,p)),onPageChange:physical=>{current=physical-(window.SourceReader.resources[g.book].pageOffset||0);if(!g.sections[index].pages.includes(current)){const found=g.sections.findIndex(s=>s.pages.includes(current));if(found>=0){index=found;paintNotes();}}remember(l,index,current);paintPages();}});
  paintNotes();paintPages();select.onchange=()=>choose(+select.value);
  room.querySelector('[data-book-expand]').onclick=ev=>{const wide=room.classList.toggle('book-source-wide');ev.currentTarget.setAttribute('aria-pressed',wide);ev.currentTarget.textContent=wide?'Açıklamayla yan yana oku ↙':'Sayfayı genişlet ↗';};
  root.querySelectorAll('[data-book-index]').forEach(a=>a.onclick=ev=>{ev.preventDefault();choose(+a.dataset.bookIndex,true);});
  root.querySelectorAll('[data-reading-anchor],[data-book-jump]').forEach(a=>a.onclick=ev=>{ev.preventDefault();document.getElementById(a.dataset.readingAnchor||a.dataset.bookJump)?.scrollIntoView({behavior:'smooth',block:'start'});});
 }
 function outline(l){const g=guide(l);return g?g.sections.map((s,i)=>`<a href="#kitap-adim-${i+1}" data-book-index="${i}"><span>${i+1}</span>${e(s.title)}</a>`).join(''):'';}
 function meta(l){const g=guide(l);return g?{title:g.title,intro:g.intro,pages:pages(g).length,first:pages(g)[0],book:g.book}:null;}
 return {render,bind,outline,meta,guide};
})();
