'use strict';
const fs=require('node:fs'),path=require('node:path'),vm=require('node:vm'),assert=require('node:assert/strict');
const {load,root}=require('./content-context.cjs'),ctx=load();
const w=ctx.window,lessons=w.LESSONS,guides=w.BOOK_GUIDES;
assert.equal(Object.keys(guides).length,lessons.length,'Every lesson must start from its book');
let sections=0,scienceSections=0,mathSections=0,words=0;const sourcePages=new Set();
for(const l of lessons){
 const g=guides[l.id],book=w.SOURCE_RESOURCES[g?.book];
 assert(g&&book&&g.title&&g.intro,`${l.id}: missing book guide`);
 assert(g.sections.length,`${l.id}: no book sections`);
 let previous=0;
 for(const [i,s]of g.sections.entries()){
  assert(s.title&&s.pages.length,`${l.id}/${i}: no source heading/pages`);
  assert(s.pages[0]>=previous,`${l.id}/${i}: sections out of book order`);previous=s.pages[0];
  assert.equal(new Set(s.pages).size,s.pages.length,`${l.id}/${i}: repeated source page`);
  for(const [n,p]of s.pages.entries()){assert(Number.isInteger(p)&&p>0&&p+book.pageOffset<=book.pages,`${l.id}/${i}: invalid printed page ${p}`);if(n)assert(p>s.pages[n-1],`${l.id}/${i}: unsorted source pages`);sourcePages.add(g.book+':'+p);}
  assert(!('explanation' in s)&&!('notes' in s),'Only source metadata belongs in the active page index');sections++;
 }
 const first=Math.min(...g.sections.flatMap(s=>s.pages)),ref=w.SourceReader.lessonRef(l);
 assert.equal(ref.book,g.book,`${l.id}: source reader opens different book`);assert.equal(ref.physicalPage,first+book.pageOffset,`${l.id}: printed/file page conversion`);
 const html=w.BookStudy.render(l);assert(html.includes('class="book-study reading-room"'),`${l.id}: original book not primary`);assert(!html.includes('data-reading-mode'),`${l.id}: book hidden behind tab`);
 assert(html.includes('original-source-page')&&html.includes('book-explanation'),`${l.id}: book and explanation must be together`);
}
const printed=id=>[...new Set(guides[id].sections.flatMap(s=>s.pages))].sort((a,b)=>a-b);
// Last printed content pages verified against the eight supplied PDFs. These
// ranges exclude the blank sheets and back covers, not examinable chapters.
const contentEnds={'TYT-fiz':199,'AYT-fiz':278,'TYT-bio':171,'AYT-bio':241,'TYT-kim':92,'AYT-kim':154,'TYT-mat':156,'AYT-mat':137};
for(const [book,end]of Object.entries(contentEnds))for(let p=9;p<=end;p++)assert(sourcePages.has(book+':'+p),`${book}: omitted content page ${p}`);
assert.deepEqual(Array.from(printed('fiz-tyt-01')),[9,10,11,12,13,14],'First physics chapter must cover the actual six pages, without a motion-unit jump');
assert.deepEqual(Array.from(printed('bio-tyt-03')),[31,32,33,34,35],'Enzyme section must include activators/inhibitors on page35');
assert(lessons.find(l=>l.id==='fiz-tyt-01').question.stem.includes('SI'),'First physics chapter quiz must match its book scope');
const html=fs.readFileSync(path.join(root,'index.html'),'utf8');
for(const name of ['book-study.js','book-study.css','data/book-page-index.js','data/page-notes-verbal.js','data/page-notes-biology.js','data/page-notes-physics.js','data/page-notes-math-chemistry.js','math-visuals.js','math-exam-links.js','math.css'])assert(html.includes('./'+name+'?'),`Missing page dependency: ${name}`);
const workflow=fs.readFileSync(path.join(root,'.github/workflows/pages.yml'),'utf8');assert(workflow.includes('book-study.js book-study.css'),'New book module must be published');
console.log(JSON.stringify({bookGuides:lessons.length,sections,distinctPrintedPages:sourcePages.size},null,2));
console.log('Source page order, mapping and concise reader verified.');
