'use strict';
const fs=require('node:fs'),path=require('node:path'),vm=require('node:vm'),assert=require('node:assert/strict');
const root=path.resolve(__dirname,'..'),context={window:{}};
for(const f of ['sources.js','turkish.js','social.js','thought.js'])vm.runInNewContext(fs.readFileSync(path.join(root,'data',f),'utf8'),context,{filename:f});
const lessons=context.window.LESSONS,books=context.window.SOURCE_BOOKS;
assert(lessons.length>=50,'Expected a usable lesson library');
assert.equal(new Set(lessons.map(l=>l.id)).size,lessons.length,'Duplicate lesson ID');
const counts={};
for(const l of lessons){
  assert(['turkce','tarih','cografya','felsefe','din'].includes(l.subject),`Out-of-scope subject: ${l.id}`);
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
  if(l.source.book){const b=books.find(b=>b.id===l.source.book);assert(b&&l.source.page>0&&l.source.page<=b.pages,`${l.id}: PDF page`);}
  else assert(/^https:\/\//.test(l.source.url),`${l.id}: official source URL`);
}
const html=fs.readFileSync(path.join(root,'index.html'),'utf8');
for(const [,file]of html.matchAll(/(?:src|href)="\.\/([^"#]+)"/g))assert(fs.existsSync(path.join(root,file)),`Missing asset: ${file}`);
new vm.Script(fs.readFileSync(path.join(root,'app.js'),'utf8'),{filename:'app.js'});
assert(!fs.existsSync(path.join(root,'node_modules')),'Static site should not require installed packages');
console.log(JSON.stringify({lessons:lessons.length,cards:lessons.reduce((n,l)=>n+l.cards.length,0),questions:lessons.length,subjects:counts,sourceTopics:books.reduce((n,b)=>n+b.toc.length,0)},null,2));
console.log('Content, scope, source references and static assets verified.');
