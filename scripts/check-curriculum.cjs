'use strict';
const fs=require('node:fs'),path=require('node:path'),assert=require('node:assert/strict');
const {load,root}=require('./content-context.cjs'),w=load().window,partial=process.argv.includes('--partial');
const ids=new Set(w.LESSONS.map(l=>l.id)),profiles=w.TOPIC_DISTRIBUTIONS,official=w.OFFICIAL_STUDY_SOURCES;
const meaningful=(s,label)=>assert(typeof s==='string'&&s.trim().length>0,label);
assert.equal(w.LESSONS.length,197);assert.equal(ids.size,197);
for(const l of w.LESSONS){assert(w.BOOK_GUIDES[l.id]?.sections.length,l.id+': source index');assert(w.Curriculum.sourcePicks(l).length,l.id+': official source');}
assert.equal(w.TOPIC_DOSSIERS,undefined,'Verbose studies must not be loaded into the page-summary interface');
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
console.log(JSON.stringify({courses:w.LESSONS.length,historicalTopics:rowIds.size,nullHistoryCells:nullCells,officialSources:sourceIds.size,pageSummaries:Object.values(w.BOOK_PAGE_NOTES).reduce((n,p)=>n+Object.keys(p).length,0)},null,2));
console.log('Source links, historical records and official references verified.');
