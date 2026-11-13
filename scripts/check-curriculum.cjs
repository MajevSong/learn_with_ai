'use strict';
const fs=require('node:fs'),path=require('node:path'),assert=require('node:assert/strict');
const {load,root}=require('./content-context.cjs'),w=load().window,partial=process.argv.includes('--partial');
const ids=new Set(w.LESSONS.map(l=>l.id)),dossiers=w.TOPIC_DOSSIERS||{},profiles=w.TOPIC_DISTRIBUTIONS,official=w.OFFICIAL_STUDY_SOURCES;
const meaningful=(s,label)=>assert(typeof s==='string'&&s.trim().length>0,label);
assert.equal(w.LESSONS.length,197,'Keep the original185 courses and add12 genuine missing-topic courses');
assert.equal(ids.size,197,'Course IDs must be unique');
let chapters=0,workedExamples=0,reasoningChecks=0,words=0;const missing=[];
for(const l of w.LESSONS){
 const d=dossiers[l.id];if(!d){missing.push(l.id);continue;}
 meaningful(d.title,l.id+': title');assert(d.prerequisites?.length&&d.goals?.length,l.id+': prerequisites/goals');assert(d.chapters?.length>=2,l.id+': needs distinct teaching chapters');
 const authored=[];
 for(const p of d.prerequisites){meaningful(p.concept,l.id+': prerequisite');meaningful(p.why,l.id+': prerequisite reason');authored.push(p.concept,p.why);}
 d.goals.forEach(x=>meaningful(x,l.id+': learning goal'));authored.push(...d.goals);
 for(const [i,c]of d.chapters.entries()){
  const label=l.id+'/'+i;meaningful(c.title,label+': chapter');assert(c.explanation?.length>=2,label+': needs developed explanation');c.explanation.forEach(x=>meaningful(x,label+': explanation'));authored.push(c.title,...c.explanation);
  const resource=w.SOURCE_RESOURCES[c.source?.book];assert(resource&&c.source.pages?.length,label+': source missing');
  const guide=w.BOOK_GUIDES[l.id],scope=new Set(Object.values(w.BOOK_GUIDES).filter(g=>g.book===c.source.book).flatMap(g=>g.sections.flatMap(s=>s.pages)));
  for(const p of c.source.pages){assert(Number.isInteger(p)&&p>0&&p+resource.pageOffset<=resource.pages,label+': source page');assert(scope.has(p),label+': cited page is not among the studied source pages '+p);}
  for(const f of c.formulas||[]){for(const key of ['expression','meaning','conditions'])meaningful(f[key],label+': formula '+key);authored.push(f.expression,f.meaning,f.conditions);}
  const ex=c.example;assert(ex&&ex.steps?.length>=2,label+': worked reasoning missing');for(const key of ['question','answer','check'])meaningful(ex[key],label+': example '+key);ex.steps.forEach(x=>meaningful(x,label+': reasoning step'));authored.push(ex.question,...ex.steps,ex.answer,ex.check);workedExamples++;
  assert(c.misconceptions?.length&&c.reasoningChecks?.length,label+': counterexample/transfer check missing');
  for(const m of c.misconceptions){for(const key of ['wrong','correct','why'])meaningful(m[key],label+': misconception '+key);authored.push(m.wrong,m.correct,m.why);}
  for(const q of c.reasoningChecks){for(const key of ['question','answer','why'])meaningful(q[key],label+': reasoning check '+key);authored.push(q.question,q.answer,q.why);reasoningChecks++;}
  chapters++;
 }
 for(const c of d.connections||[]){meaningful(c.concept,l.id+': connection');meaningful(c.why,l.id+': connection reason');for(const id of c.lessonIds||[])assert(ids.has(id),l.id+': unknown connected course '+id);authored.push(c.concept,c.why);}
 assert(!/\bTODO\b|lorem ipsum|placeholder|hazırlanacak|yakında eklenecek/i.test(authored.join(' ')),l.id+': unfinished teaching');
 words+=authored.join(' ').trim().split(/\s+/u).length;
 assert(w.Curriculum.sourcePicks(l).length,l.id+': no relevant official source');
}
const extra=Object.keys(dossiers).filter(id=>!ids.has(id));assert.equal(extra.length,0,'Unknown dossier IDs: '+extra);
const emptyBook=Object.entries(w.BOOK_GUIDES).flatMap(([id,g])=>g.sections.map((s,i)=>({id,i,s}))).filter(({s})=>!(s.explanation||[]).some(x=>String(x).trim())&&!(s.notes||[]).some(n=>String(n.text||'').trim()));
if(!partial){assert.equal(missing.length,0,'Missing detailed studies: '+missing.join(', '));assert.equal(emptyBook.length,0,'Original-book-only sections still lack teacher explanation: '+emptyBook.map(x=>x.id+'/'+x.i).join(', '));}
assert.equal(profiles.targetExamYear,2027);assert.equal(profiles.tables.length,15);assert.equal(profiles.tables.reduce((n,t)=>n+t.rows.length,0),228);
const rowIds=new Set();let nullCells=0;
for(const t of profiles.tables){assert(['TYT','AYT'].includes(t.exam));assert(t.exam!=='AYT'||['matematik','fizik','kimya','biyoloji'].includes(t.subject),'AYT verbal content is out of scope');assert(profiles.sources[t.sourceId]&&t.pages.every(p=>p>0&&p<=profiles.sources[t.sourceId].pageCount));
 for(const r of t.rows){assert(!rowIds.has(r.id),r.id+': duplicate distribution row');rowIds.add(r.id);meaningful(r.title,r.id);assert(r.counts.length===8&&r.rawCounts.length===8,r.id+': eight historical years');for(const [i,c]of r.counts.entries()){assert(c===null||Number.isInteger(c)&&c>=0,r.id+': invalid count');if(c===null)nullCells++;if(r.rawCounts[i]==='')assert(c===null,r.id+': blank must not become invented0');if(r.rawCounts[i]==='-')assert.equal(c,0,r.id+': dash conversion must follow the documented policy');}
  if(t.exam==='AYT'&&['fizik','kimya','biyoloji'].includes(t.subject))assert.equal(r.counts[0],null,r.id+':2018 science is absent from this source');
  assert(r.lessonIds.length,r.id+': no course mapping');for(const id of r.lessonIds)assert(ids.has(id),r.id+': unknown course '+id);
  for(const ref of r.bookSections){const g=w.BOOK_GUIDES[ref.lessonId];assert(g&&ref.book===g.book,r.id+': book mismatch');assert(g.sections.some(s=>ref.pages.every(p=>s.pages.includes(p))),r.id+': source section moved/unknown '+ref.title);}
 }
}
assert.equal(nullCells,95,'Preserve absent/blank cells instead of fabricating historical counts');
for(const [name,s]of Object.entries(profiles.sources)){assert.equal(s.officialExamBlueprint,false);assert(/^[a-f0-9]{64}$/.test(s.sha256));for(let p=1;p<=s.pageCount;p++)assert(fs.existsSync(path.join(root,'assets/distributions',name+'-'+p+'.webp')),'Missing original distribution image');}
assert.equal(official.targetYear,2027);assert.equal(official.checkedAt,'2026-11-13');assert.equal(official.sources.length,44);assert.equal(official.examStatus.latestVerifiedScopeYear,2026);assert.equal(official.examStatus.guideStatus,'not-verified-in-this-check');assert.equal(official.examStatus.dates.TYT,'2027-06-19');assert.equal(official.examStatus.dates.AYT,'2027-06-20');
const sourceIds=new Set();for(const s of official.sources){assert(!sourceIds.has(s.id));sourceIds.add(s.id);const url=new URL(s.url);assert(['http:','https:'].includes(url.protocol)&&['meb.gov.tr','eba.gov.tr','osym.gov.tr'].some(host=>url.hostname===host||url.hostname.endsWith('.'+host)),s.id+': official URL required');assert(['public','login','catalog'].includes(s.access),s.id+': access classification');meaningful(s.verification,s.id+': verification boundary');for(const subject of s.examSubjects?.AYT||[])assert(['matematik','fizik','kimya','biyoloji'].includes(subject),s.id+': AYT verbal source leaked into primary scope');}
assert.equal(w.SourceReader.displayPage('TYT-fel',9),11);assert.equal(w.SourceReader.physicalPage('TYT-fel',9),11);assert.equal(w.SourceReader.displayPage('TYT-mat',9),9);
assert(w.TOPIC_LINKS_REPORT.philosophyLinks>0,'New philosophy history needs actual question links');
console.log(JSON.stringify({courses:w.LESSONS.length,dossiers:Object.keys(dossiers).length,chapters,workedExamples,reasoningChecks,newTeachingWords:words,missingDossiers:missing,emptyBookSections:emptyBook.length,historicalTopics:rowIds.size,nullHistoryCells:nullCells,officialSources:sourceIds.size,partial},null,2));
console.log(partial?'Available detailed content and source/data semantics checked; pending authoring reported.':'All topics have developed, source-linked teaching, worked examples and official references.');
