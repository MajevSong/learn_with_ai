'use strict';
const assert=require('node:assert/strict'),fs=require('node:fs'),path=require('node:path');
const {load,root}=require('./content-context.cjs');
const {window:w}=load(),needed=new Set(),seen=new Map();let terms=0,maxWords=0;
for(const g of Object.values(w.BOOK_GUIDES))for(const s of g.sections)for(const p of s.pages)needed.add(`${g.book}:${p}`);
const all=Object.entries(w.BOOK_PAGE_NOTES).flatMap(([book,pages])=>Object.entries(pages).map(([page,note])=>({book,page,note})));
assert.equal(Object.keys(w.BOOK_PAGE_NOTES).length,14);
assert.equal(all.length,1959,'All instructional source pages must have one note');
assert.equal(needed.size,1959);
for(const {book,page,note:n}of all){
 const id=`${book}:${page}`;assert(needed.has(id),`${id}: orphan note`);needed.delete(id);
 assert(n.title?.trim(),`${id}: no source heading`);
 assert(Array.isArray(n.summary)&&n.summary.length>=1&&n.summary.length<=3,`${id}: concise summary required`);
 assert(n.summary.every(s=>typeof s==='string'&&s.trim()===s&&s.length>15&&!/[�\u00ad]/u.test(s)),`${id}: broken summary text`);
 const text=n.summary.join(' '),words=text.split(/\s+/).length;maxWords=Math.max(maxWords,words);
 assert(words<=90,`${id}: summary too long (${words})`);
 const canonical=text.toLocaleLowerCase('tr').replace(/\s+/g,' ');
 assert(!seen.has(canonical),`${id}: same summary as ${seen.get(canonical)}`);seen.set(canonical,id);
 assert(Array.isArray(n.terms)&&n.terms.length<=10,`${id}: invalid glossary`);
 const termNames=new Set();
 for(const t of n.terms){assert(t.term?.trim()&&t.meaning?.trim(),`${id}: missing term/definition`);assert(!termNames.has(t.term),`${id}: repeated term`);termNames.add(t.term);assert(t.meaning.split(/\s+/).length<=35,`${id}: definition too long`);terms++;}
}
assert.equal(needed.size,0,'Missing page summary');
const html=fs.readFileSync(path.join(root,'index.html'),'utf8');
for(const old of ['topic-dossiers.js','data/book-physics.js','data/book-biology.js','data/book-chemistry.js','data/book-verbal.js','data/core-reading.js'])assert(!html.includes(`src="./${old}?`),`${old}: old lecture still loaded`);
const js=fs.readFileSync(path.join(root,'book-study.js'),'utf8');
assert(js.includes('data-summary-page')&&js.includes('BOOK_PAGE_NOTES')&&js.includes('onPageChange:physical'));
assert(!/TOPIC_DOSSIERS|TEACHING_NOTES|\.look|\.checks|\.explanation/.test(js),'Reader must render page summary, not old lecture');
assert(!w.BOOK_PAGE_NOTES['TYT-tur'][126]&&!w.BOOK_PAGE_NOTES['TYT-tar'][186]&&!w.BOOK_PAGE_NOTES['TYT-cog'][120]&&!w.BOOK_PAGE_NOTES['TYT-din'][74],'Back covers are not lessons');
console.log(JSON.stringify({pageNotes:all.length,books:14,glossaryTerms:terms,maxSummaryWords:maxWords}));
console.log('Concise page coverage and active reader checks passed.');
