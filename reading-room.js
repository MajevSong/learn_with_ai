'use strict';
window.ReadingRoom=(()=>{
 const e=v=>String(v??'').replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
 const paths={
  cell:'<ellipse cx="32" cy="32" rx="25" ry="19"/><ellipse cx="32" cy="32" rx="9" ry="7"/><path d="m15 27 5 3-3 5m26-15 5 4-4 3m-3 15 4-4-4-3"/><circle cx="23" cy="22" r="2"/>',
  dna:'<path d="M21 7c0 24 22 26 22 50M43 7c0 24-22 26-22 50M23 13h18M27 23h10M27 41h10M23 51h18"/>',
  plant:'<path d="M32 56V24m0 16C15 40 9 30 9 21c15 0 23 6 23 19Zm0-9c0-17 9-22 23-22 0 13-8 22-23 22ZM20 58l12-7 12 7"/>',
  heart:'<path d="M32 54 13 35C-3 18 21 3 32 20 43 3 67 18 51 35Z"/><path d="M13 31h11l5-9 7 19 5-10h10"/>',
  neuron:'<circle cx="30" cy="29" r="12"/><path d="m19 22-9-9m9 9-11 1m13-7V6m16 12 8-11m-3 16 12-4M18 34 7 41m16-1-5 12m19-12 8 13m-5-19 14 9m-6-6 9-2"/>',
  molecule:'<path d="m18 35 17-17m-3 3 15 22M21 39l20 8"/><circle cx="35" cy="15" r="9"/><circle cx="15" cy="39" r="11"/><circle cx="48" cy="48" r="8"/>',
  flask:'<path d="M24 8h16m-12 0v17L13 50c-2 4 0 6 4 6h30c4 0 6-2 4-6L36 25V8M20 39h24"/><circle cx="28" cy="46" r="2"/><circle cx="38" cy="49" r="1"/>',
  wave:'<path d="M6 33c9-27 16-27 25 0s16 27 27 0M5 33h54"/><path d="m32 10 4 4-4 4m4-4H15"/>',
  force:'<rect x="14" y="30" width="31" height="23" rx="4"/><path d="M32 29V8m-7 8 7-8 7 8M45 41h15m-7-7 7 7-7 7M32 53v8"/>',
  circuit:'<path d="M11 28V13h16m10 0h16v40H11V39m-7-11h14m-11 9h8m12-24 3-6 4 12 3-6M28 53v-8h13v8"/>',
  optics:'<path d="M32 8Q16 32 32 56Q48 32 32 8ZM5 32h54M6 17h26l24 29M6 46l26-14 24-14"/>',
  map:'<path d="m8 14 16-5 16 5 16-5v41l-16 5-16-5-16 5Zm16-5v41m16-36v41"/><path d="m44 26 3-8 3 8m-7-3h8"/>',
  mountain:'<path d="m5 53 21-35 9 14 8-23 17 44ZM19 30l7 5 6-7m6-4 5 4 5-3M8 57h49"/>',
  globe:'<circle cx="32" cy="32" r="25"/><ellipse cx="32" cy="32" rx="11" ry="25"/><path d="M7 32h50M12 17h40M12 47h40"/>',
  time:'<circle cx="32" cy="32" r="24"/><path d="M32 15v18l13 8M21 5h22M5 32h8m38 0h8"/>',
  institution:'<path d="m7 24 25-15 25 15ZM12 27v23m13-23v23m14-23v23m13-23v23M7 54h50"/>',
  words:'<path d="M9 12h46v32H30L18 54V44H9ZM18 23h28M18 33h19"/>',
  balance:'<path d="M32 9v46m-20 0h40M8 20h48M16 20 5 39h22ZM48 20 37 39h22Z"/>',
  idea:'<path d="M24 47c0-9-12-12-12-24a20 20 0 0 1 40 0c0 12-12 15-12 24Zm0 0h16m-15 6h14m-11 5h8M27 22l5 7 5-7m-5 7v15"/>'
 };
 function symbol(label,subject){
 const t=label.toLocaleLowerCase('tr');let key='idea';
 if(subject==='turkce')key='words';
 else if(subject==='tarih')key=/devlet|meclis|kanun|kurum|yasa|yönetim/.test(t)?'institution':'time';
 else if(subject==='biyoloji')key=/\b(dna|rna|mrna|trna|rrna|gen)\b|genetik|genom|kalıt|kodon|kromozom/.test(t)?'dna':/bitki|kök|ksilem|fotosentez|yaprak/.test(t)?'plant':/kalp|kan|dolaşım|damar|bağışık/.test(t)?'heart':/sinir|nöron|uyarı|refleks/.test(t)?'neuron':/enzim|kataliz/.test(t)?'flask':'cell';
 else if(subject==='kimya')key=/atom|molekül|bağ|iyon|tanecik/.test(t)?'molecule':'flask';
 else if(subject==='fizik')key=/akım|devre|direnç|elektrik|potansiyel/.test(t)?'circuit':/dalga|frekans|ses|girişim|genlik/.test(t)?'wave':/mercek|ayna|ışın|optik/.test(t)?'optics':'force';
 else if(subject==='cografya')key=/dağ|eğim|akarsu|aşınma|rüzgâr|yağış/.test(t)?'mountain':/harita|konum|enlem|boylam/.test(t)?'map':'globe';
 else key=/adalet|ahlak|hak|sorumluluk/.test(t)?'balance':'idea';
 return `<svg viewBox="0 0 64 64" class="teaching-symbol" aria-hidden="true">${paths[key]}</svg>`;
}

 function figure(f,caption,subject,block){const drawing=block&&window.LessonFigures?.render(block,subject);if(drawing)return `<figure class="inline-figure concrete-figure"><div class="source-drawing-scroll">${drawing}</div><figcaption>${e(caption)}</figcaption></figure>`;const labels=f?.labels||[];if(!labels.length)return '';const kind=f.kind||'compare';const label=labels.map(x=>x.title).join(' → ');return `<figure class="inline-figure figure-${e(kind)}" aria-label="${e(label)}"><div class="figure-graphic ${e(kind)}">${labels.map((item,i)=>`<div class="figure-concept"><span class="concept-symbol">${symbol(item.title+' '+item.text,subject)}</span><b>${e(item.title)}</b><p>${e(item.text)}</p></div>${i<labels.length-1&&['process','cause','timeline'].includes(kind)?'<span class="concept-connector" aria-hidden="true">→</span>':''}`).join('')}</div>${kind==='cycle'?'<div class="cycle-return" aria-hidden="true">↶ Döngü yeniden başlar</div>':''}${caption?`<figcaption>${e(caption)}</figcaption>`:''}</figure>`;}
 function story(lesson){return (window.READING||{})[lesson.id]||{lead:lesson.summary,blocks:lesson.sections.map((s,i)=>({heading:s.title,text:s.text,figure:{kind:lesson.visual.type==='flow'?'process':lesson.visual.type,labels:lesson.visual.nodes.slice(i===0?0:2,i===0?3:6).map(n=>({title:n.label,text:n.detail}))},caption:''})),sources:[lesson.source]};}
 function modelPosition(lesson,blocks){const matchers={enzyme:/sıcaklık|optimum|denatürasyon/gi,osmosis:/osmoz|su geçiş|yarı geçirgen/gi,dna:/transkripsiyon|translasyon|mrna|kodon/gi,particles:/tanecik|gaz|hâl|katı|sıvı/gi,periodic:/periyodik|yarıçap|iyonlaşma|katman/gi,equilibrium:/denge|katalizör|hacim|le chatelier/gi,energy:/aktivasyon|ekzotermik|endotermik|entalpi/gi,wave:/dalga|frekans|boyu/gi,circuit:/direnç|akım|gerilim|devre/gi,lens:/mercek|görüntü|odak/gi,pressure:/sıvı basın|derinlik|yoğunluk/gi};const extra={"cog-04":/izohips|eğim|eş yükselti/gi,"cog-11":/piramit|yaş/gi,"cog-02":/mevsim|eksen|yıllık/gi,"cog-06":/yağış|yüksel|yoğuş/gi,"cog-07":/iklim|grafik|yaz/gi};const pattern=matchers[lesson.visual.demo]||extra[lesson.id];if(!pattern)return 0;let best=0,score=-1;blocks.forEach((b,i)=>{const count=((b.heading+' '+b.text).match(pattern)||[]).length+(b.heading.match(pattern)||[]).length*4;if(count>score){best=i;score=count;}});return best;}
 function sourceCitations(lesson,reading){return (reading.sources||[lesson.source]).map(s=>{if(s.book&&window.SourceReader.resources[s.book]){const b=window.SourceReader.resources[s.book];return `<a href="#kitap/${e(s.book)}/${window.SourceReader.physicalPage(s.book,s.page)}">${e(b.label)} · konu dizini s. ${e(s.page)}</a>`;}try{const u=new URL(s.url);if(u.protocol==='https:')return `<a href="${e(u.href)}" target="_blank" rel="noopener noreferrer">${e(s.title||'MEB kaynağı')} ↗</a>`;}catch{}return '';}).filter(Boolean).join('');}
 function blockRef(lesson,block){const s=block.source;if(s?.url){try{const url=new URL(s.url);if(url.protocol==="https:"&&url.hostname==="tymm.meb.gov.tr")return {url:url.href,title:s.title||"MEB kaynağı"};}catch{}}if(s?.book&&window.SourceReader.resources[s.book])return {book:s.book,physicalPage:window.SourceReader.physicalPage(s.book,s.page)};return window.SourceReader.lessonRef(lesson);}
function render(lesson,{visual=''}={}){
 if(window.BookStudy?.meta(lesson))return window.BookStudy.render(lesson,{visual});
 const reading=story(lesson),ref=window.SourceReader.lessonRef(lesson),index=modelPosition(lesson,reading.blocks);
 return `<section class="reading-room" id="baglanti"><div class="reading-mode-tabs" role="group" aria-label="Okuma görünümü"><button type="button" class="active" data-reading-mode="reading" aria-pressed="true">Anlatım ve görseller</button>${ref?'<button type="button" data-reading-mode="source" aria-pressed="false">Kaynak kitabı burada oku</button>':''}</div><div class="reading-pane" data-reading-pane="reading"><p class="reading-lead">${e(reading.lead||lesson.summary)}</p>${reading.blocks.map((block,i)=>{const source=blockRef(lesson,block);return `<article class="reading-block" id="okuma-${i+1}"><h2>${e(block.heading)}</h2>${String(block.text).split(/\n\s*\n/).map(p=>`<p>${e(p)}</p>`).join('')}${visual&&i===index?`<figure class="inline-figure model-figure"><div class="inline-special-visual">${visual}</div><figcaption>${e(block.caption)}</figcaption></figure>`:figure(block.figure,block.caption,lesson.subject,block)}${source?.url?`<button type="button" class="inline-source-link" data-open-external="${e(source.url)}" data-external-title="${e(source.title)}">Bu bölümün resmî kaynağını burada aç ↗</button>`:source?`<button type="button" class="inline-source-link" data-open-source="${source.physicalPage}" data-source-id="${e(source.book)}">Bu bölümün kaynak sayfasını burada aç ↗</button>`:''}</article>`;}).join('')}<aside class="reading-sources"><h3>Yararlanılan kaynak sayfaları</h3><div>${sourceCitations(lesson,reading)}</div></aside></div>${ref?`<div class="reading-pane hidden" data-reading-pane="source"><div class="source-reading-intro"><p>Kaynağın özgün sayfasını burada okuyabilir, sayfalar arasında ilerleyebilir ve büyütebilirsin.</p><button type="button" data-back-to-reading>← Görselleştirilmiş anlatıma dön</button></div><div class="source-reader-host">${window.SourceReader.render(ref.book,ref.physicalPage)}</div></div>`:''}</section>`;
}
function outline(lesson){if(window.BookStudy?.meta(lesson))return window.BookStudy.outline(lesson);return story(lesson).blocks.map((b,i)=>`<a href="#okuma-${i+1}" data-reading-anchor="okuma-${i+1}"><span>${i+1}</span>${e(b.heading)}</a>`).join('');}
function bind(root,lesson){
 if(window.BookStudy?.meta(lesson)){window.BookStudy.bind(root,lesson);return;}
 const room=root.querySelector('.reading-room');if(!room)return;window.SourceReader.bind(room,{active:false});
 function show(mode,page,book,url,title){room.querySelectorAll('[data-reading-pane]').forEach(p=>p.classList.toggle('hidden',p.dataset.readingPane!==mode));room.querySelectorAll('[data-reading-mode]').forEach(b=>{const active=b.dataset.readingMode===mode;b.classList.toggle('active',active);b.setAttribute('aria-pressed',active);});if(mode==='source'){const pane=room.querySelector('[data-reading-pane="source"]'),host=pane.querySelector('.source-reader-host'),reader=host.querySelector('.source-reader');if(url){host.innerHTML=`<div class="external-source-frame"><p>${e(title)}</p><iframe src="${e(url)}" title="${e(title)}" loading="lazy" referrerpolicy="strict-origin-when-cross-origin"></iframe><a href="${e(url)}" target="_blank" rel="noopener noreferrer">Resmî kaynak ↗</a></div>`;return;}if(book&&book!==reader?.dataset.sourceBook){host.innerHTML=window.SourceReader.render(book,page);window.SourceReader.bind(host);}else if(page)reader?.showSourcePage?.(page);else window.SourceReader.activate(pane);}}
 room.querySelectorAll('[data-reading-mode]').forEach(b=>b.onclick=()=>{if(b.dataset.readingMode==='source'){const ref=window.SourceReader.lessonRef(lesson);show('source',ref.physicalPage,ref.book);}else show('reading');});room.querySelectorAll('[data-open-external]').forEach(b=>b.onclick=()=>{show('source',null,null,b.dataset.openExternal,b.dataset.externalTitle);room.scrollIntoView({behavior:'smooth',block:'start'});});room.querySelectorAll('[data-open-source]').forEach(b=>b.onclick=()=>{show('source',+b.dataset.openSource,b.dataset.sourceId);room.scrollIntoView({behavior:'smooth',block:'start'});});room.querySelector('[data-back-to-reading]')?.addEventListener('click',()=>show('reading'));
 root.querySelectorAll('[data-reading-anchor]').forEach(a=>a.onclick=ev=>{ev.preventDefault();show('reading');document.getElementById(a.dataset.readingAnchor)?.scrollIntoView({behavior:'smooth',block:'start'});});
}

 return {render,bind,outline,story};
})();
