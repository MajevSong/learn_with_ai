'use strict';
const fs=require('node:fs'),path=require('node:path'),vm=require('node:vm'),assert=require('node:assert/strict');
const root=path.resolve(__dirname,'..'),context={window:{}};
for(const f of ['sources.js','turkish.js','social.js','thought.js','biology.js','chemistry.js','physics.js'])vm.runInNewContext(fs.readFileSync(path.join(root,'data',f),'utf8'),context,{filename:f});
for(const f of ['source-resources.js','exam-sources.js','biology-reading.js','core-reading.js','applied-reading.js'])vm.runInNewContext(fs.readFileSync(path.join(root,'data',f),'utf8'),context,{filename:f});
vm.runInNewContext(fs.readFileSync(path.join(root,'source-reader.js'),'utf8'),context,{filename:'source-reader.js'});
const lessons=context.window.LESSONS,books=context.window.SOURCE_BOOKS;
assert(lessons.length>=128,'Expected verbal and science lesson libraries');
assert.equal(new Set(lessons.map(l=>l.id)).size,lessons.length,'Duplicate lesson ID');
const counts={};
let readingBlocks=0,readingWords=0;
for(const l of lessons){
  assert(['turkce','tarih','cografya','felsefe','din','biyoloji','kimya','fizik'].includes(l.subject),`Out-of-scope subject: ${l.id}`);
  const exam=l.exam||'TYT';
  assert(['TYT','AYT'].includes(exam),`${l.id}: invalid exam`);
  assert(exam!=='AYT'||['biyoloji','kimya','fizik'].includes(l.subject),`${l.id}: AYT scope must be science`);
  if(['biyoloji','kimya','fizik'].includes(l.subject))assert(l.exam,`${l.id}: science must specify exam`);
  if(l.visual.demo)assert(['osmosis','enzyme','dna','particles','periodic','equilibrium','energy','wave','circuit','lens','pressure'].includes(l.visual.demo),`${l.id}: unknown demo`);
  counts[l.subject]=(counts[l.subject]||0)+1;
  for(const key of ['title','unit','summary','memory'])assert(typeof l[key]==='string'&&l[key].length>3,`${l.id}: ${key}`);
  assert(l.visual.nodes.length>=3&&l.visual.nodes.length<=6,`${l.id}: visual nodes`);
  assert(['flow','compare','cycle','layers','timeline'].includes(l.visual.type),`${l.id}: visual type`);
  l.visual.nodes.forEach(n=>assert(n.label&&n.detail,`${l.id}: empty visual node`));
  assert(l.sections.length>=2&&l.sections.every(s=>s.title&&s.text),`${l.id}: sections`);
  assert(l.cards.length>=2&&l.cards.every(c=>c.front&&c.back),`${l.id}: cards`);
  assert(l.question.options.length>=4&&Number.isInteger(l.question.answer)&&l.question.answer>=0&&l.question.answer<l.question.options.length,`${l.id}: answer index`);
  assert(l.question.stem&&l.question.explanation,`${l.id}: question`);
  assert.equal(new Set(l.question.options).size,l.question.options.length,`${l.id}: duplicate answer options`);
  if(l.source.book){const b=books.find(b=>b.id===l.source.book);assert(b&&l.source.page>0&&l.source.page<=b.pages,`${l.id}: PDF page`);assert(b.exam===exam&&b.subject===l.subject,`${l.id}: source exam/subject mismatch`);}
  else assert(/^https:\/\//.test(l.source.url),`${l.id}: official source URL`);
  const reading=context.window.READING[l.id];
  assert(reading&&reading.lead&&reading.blocks.length>=2,`${l.id}: missing source-based reading`);
  assert(reading.sources.length>=1,`${l.id}: reading sources`);
  for(const block of reading.blocks){
    const words=block.text.trim().split(/\s+/).length;
    assert(words>=60,`${l.id}: reading is too short (${words} words)`);
    assert(block.heading&&block.caption,`${l.id}: reading heading/caption`);
    assert(['process','compare','cycle','hierarchy','cause','timeline'].includes(block.figure.kind),`${l.id}: figure kind`);
    assert(block.figure.labels.length>=3&&block.figure.labels.length<=6&&block.figure.labels.every(x=>x.title&&x.text),`${l.id}: figure labels`);
    assert(block.source,`${l.id}: block source missing`);
    if(block.source.book){const resource=context.window.SOURCE_RESOURCES[block.source.book];assert(resource&&block.source.page>0&&block.source.page+resource.pageOffset<=resource.pages,`${l.id}: block source page`);}
    else assert(/^https:\/\//.test(block.source.url),`${l.id}: block external source`);
    readingBlocks++;readingWords+=words;
  }
}
assert.equal(Object.keys(context.window.READING).length,lessons.length,'Reading and lesson IDs must match');
assert.equal(books.length,13,'Expected thirteen main source books');
for(const l of lessons)assert(context.window.SourceReader.lessonRef(l),`${l.id}: no in-site source reader`);
const html=fs.readFileSync(path.join(root,'index.html'),'utf8');
for(const [,file]of html.matchAll(/(?:src|href)="\.\/([^"#]+)"/g))assert(fs.existsSync(path.join(root,file.split('?')[0])),`Missing asset: ${file}`);
new vm.Script(fs.readFileSync(path.join(root,'app.js'),'utf8'),{filename:'app.js'});
new vm.Script(fs.readFileSync(path.join(root,'science-visuals.js'),'utf8'),{filename:'science-visuals.js'});
new vm.Script(fs.readFileSync(path.join(root,'reading-room.js'),'utf8'),{filename:'reading-room.js'});
new vm.Script(fs.readFileSync(path.join(root,'lesson-figures.js'),'utf8'),{filename:'lesson-figures.js'});
assert(!/Sayısal yolculuğun|HEDEF: SAYISAL DERECE|Sayısal hedefin/.test(html),'Unwanted personal target labels');
assert(!fs.existsSync(path.join(root,'node_modules')),'Static site should not require installed packages');
console.log(JSON.stringify({lessons:lessons.length,readingBlocks,readingWords,inlineFigures:readingBlocks,sourceBooks:books.length,cards:lessons.reduce((n,l)=>n+l.cards.length,0),questions:lessons.length,subjects:counts,exams:{TYT:lessons.filter(l=>(l.exam||'TYT')==='TYT').length,AYT:lessons.filter(l=>l.exam==='AYT').length},interactiveModels:new Set(lessons.filter(l=>l.visual.demo).map(l=>l.visual.demo)).size,sourceTopics:books.reduce((n,b)=>n+b.toc.length,0)},null,2));
console.log('Content, scope, source references and static assets verified.');
