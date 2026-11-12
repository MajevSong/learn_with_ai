'use strict';
const fs=require('node:fs'),path=require('node:path'),vm=require('node:vm'),assert=require('node:assert/strict');
const root=path.resolve(__dirname,'..'),context={window:{}},partial=process.argv.includes('--partial');
for(const file of ['sources','source-resources','exam-sources','turkish','social','thought','biology','chemistry','physics','exam-questions','exam-analyses','exam-synthesis'])vm.runInNewContext(fs.readFileSync(path.join(root,'data',file+'.js'),'utf8'),context,{filename:file});
const {EXAM_QUESTIONS:qs,EXAM_ANALYSES:analyses,EXAM_META:meta,LESSONS:lessons,SOURCE_RESOURCES:resources}=context.window;
assert.equal(qs.length,1780);assert.equal(new Set(qs.map(q=>q.id)).size,1780);assert.equal(meta.questionCount,1780);
const questionById=new Map(qs.map(q=>[q.id,q])),lessonIds=new Set(lessons.map(l=>l.id)),counts={},variants=new Map();let words=0;
assert.equal(qs.filter(q=>q.alternative).length,45,'The compendium marks 45 alternative philosophy questions');
for(const q of qs){
 assert.equal(q.id,`q-${q.exam.toLowerCase()}-${q.subject}-${String(q.number).padStart(3,'0')}`);
 assert(q.year>=2018&&q.year<=2026,q.id+': year');assert(q.text.length>25,q.id+': text');
 const resource=resources[q.fullPageBook];assert(resource&&q.source.pdfPage>=1&&q.source.pdfPage<=resource.pages,q.id+': source page');
 for(const img of [...q.images,...(q.contextImage?[q.contextImage]:[])])assert(img.startsWith('./assets/exams/')&&fs.existsSync(path.join(root,img)),q.id+': missing image '+img);
 assert(q.answer===null||/^[A-E]$/.test(q.answer),q.id+': answer');
 counts[q.exam+'-'+q.subject]=(counts[q.exam+'-'+q.subject]||0)+1;
}
assert.deepEqual(JSON.parse(JSON.stringify(meta.counts)),counts);
for(const [id,a]of Object.entries(analyses)){
 const q=questionById.get(id);assert(q,'Unknown question '+id);assert.equal(a.status,'reviewed',id+': status');
 for(const key of ['title','topic','tests','trap'])assert(typeof a[key]==='string'&&a[key].length>1,id+': '+key);
 for(const key of ['knowledge','reasoning'])assert(Array.isArray(a[key])&&a[key].length>=2&&a[key].every(x=>typeof x==='string'&&x.length>3)&&a[key].join(' ').length>25,id+': '+key);
 assert(a.connections?.length>=1&&a.connections.every(c=>c.concept&&c.why?.length>12),id+': connections');
 assert(Array.isArray(a.lessonIds),id+': lessonIds');for(const l of a.lessonIds)assert(lessonIds.has(l),id+': unknown lesson '+l);
 assert(a.lessonIds.length||a.studyRefs?.length,id+': no teaching link');
 for(const ref of a.studyRefs||[])assert(resources[ref.book]&&ref.page>0&&ref.page+(resources[ref.book].pageOffset||0)<=resources[ref.book].pages,id+': study ref');
 const v=a.variation;assert(v?.stem?.length>5&&v.explanation?.length>3,id+': variation');assert(v.options?.length===5&&new Set(v.options).size===5,id+': options');assert(Number.isInteger(v.answer)&&v.answer>=0&&v.answer<5,id+': variation answer');
 const signature=v.stem.toLocaleLowerCase('tr').replace(/\s+/g,' ').trim()+'|'+v.options.join('|');assert(!variants.has(signature),id+': duplicate exercise with '+variants.get(signature));variants.set(signature,id);
 assert(['matches','conflict','unresolved','verified_solution'].includes(a.keyCheck),id+': keyCheck');
 if(a.resolvedAnswer)assert(/^[A-E]$/.test(a.resolvedAnswer),id+': resolved answer');
 if(a.keyCheck==='matches'&&a.resolvedAnswer)assert.equal(a.resolvedAnswer,q.answer,id+': claimed match');
 if(a.keyCheck==='matches'&&!a.resolvedAnswer){const label=new RegExp('(?<![\\p{L}\\p{N}])'+q.answer+'(?![\\p{L}\\p{N}])','u');assert(label.test(a.reasoning.join(' ')),id+': solution must identify the source answer');}
 if(q.answer===null)assert(a.resolvedAnswer||a.keyCheck==='unresolved',id+': missing answer resolution');
 if(a.keyCheck!=='matches')assert(a.note?.length>15,id+': missing source issue note');
 words+=[a.tests,...a.knowledge,...a.reasoning,a.trap,...a.connections.map(c=>c.why),v.stem,v.explanation].join(' ').split(/\s+/).length;
}
const synthesis=context.window.EXAM_SYNTHESIS;assert.equal(synthesis.length,6);assert.equal(new Set(synthesis.map(x=>x.id)).size,6);
for(const row of synthesis){assert(row.questionIds.length>=2&&row.questionIds.every(id=>questionById.has(id)),row.id+': evidence');assert(row.figure.length===3&&row.options.length===5&&new Set(row.options).size===5,row.id+': model');assert(row.answer>=0&&row.answer<5&&row.explanation.length>=3&&row.boundary,row.id+': solution');}
assert(questionById.get('q-ayt-matematik-211').source.parts[0].clip[1]<65,'Piecewise formula top must be included');
assert(questionById.get('q-tyt-turkce-215').contextImage,'Second question must retain the shared passage');
assert.equal(new Set(qs.map(q=>q.source.contextId).filter(Boolean)).size,27);
assert.equal(questionById.get('q-tyt-matematik-263').topic,'Veri');
assert.equal(questionById.get('q-tyt-matematik-280').topic,'Üçgenler');
assert(questionById.get('q-tyt-felsefe-084').topic.startsWith('20. YÜZYIL'));
assert.equal(questionById.get('q-tyt-cografya-034').topic,'Bölgeler');
const missing=qs.filter(q=>!analyses[q.id]).map(q=>q.id);if(!partial)assert.equal(missing.length,0,'Unreviewed original questions: '+missing.length);
assert.equal(fs.readdirSync(path.join(root,'assets/exams/pages')).length,646);
assert(questionById.get('q-ayt-matematik-342').numberingNote,'Canonical source typo must stay visible');
for(const file of ['exam-study.js','app.js','source-reader.js'])new vm.Script(fs.readFileSync(path.join(root,file),'utf8'),{filename:file});
console.log(JSON.stringify({originalQuestions:qs.length,analyses:Object.keys(analyses).length,missing:missing.length,analysisWords:words,originalPages:646,alternativePhilosophy:45,answerNotes:Object.entries(analyses).filter(([,a])=>a.keyCheck!=='matches').map(([id,a])=>({id,state:a.keyCheck})),counts},null,2));
