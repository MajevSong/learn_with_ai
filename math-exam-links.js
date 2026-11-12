'use strict';
// Keep the original analyses intact on disk; derive course links from their
// explicit source-page references after all mathematics guides have loaded.
(()=>{
 const pageLessons=new Map();
 for(const l of window.LESSONS||[]){if(l.subject!=='matematik')continue;const g=window.BOOK_GUIDES?.[l.id];if(!g)continue;for(const page of new Set(g.sections.flatMap(s=>s.pages))){const key=g.book+':'+page;if(!pageLessons.has(key))pageLessons.set(key,[]);pageLessons.get(key).push(l.id);}}
 const questions=(window.EXAM_QUESTIONS||[]).filter(q=>q.subject==='matematik'),unmapped=[];
 for(const q of questions){const a=window.EXAM_ANALYSES?.[q.id];if(!a){unmapped.push(q.id);continue;}const ids=(a.studyRefs||[]).flatMap(r=>pageLessons.get(r.book+':'+r.page)||[]);a.lessonIds=[...new Set([...(a.lessonIds||[]),...ids])];if(!ids.length)unmapped.push(q.id);}
 // The original analyses explicitly use these concepts, even though their
 // representative source citation points to another prerequisite page.
 const conceptLinks={
  'mat-ayt-03':['q-ayt-matematik-071','q-ayt-matematik-075','q-ayt-matematik-079'], // translations/reflections
  'mat-tyt-geo-04':['q-tyt-matematik-280','q-tyt-matematik-292'] // folding/angle bisectors
 };
 for(const [lesson,ids]of Object.entries(conceptLinks))if(window.BOOK_GUIDES?.[lesson])for(const id of ids){const a=window.EXAM_ANALYSES?.[id];if(a&&!a.lessonIds.includes(lesson))a.lessonIds.push(lesson);}
 window.MATH_LINKS_REPORT={questions:questions.length,mapped:questions.length-unmapped.length,unmapped};
})();
