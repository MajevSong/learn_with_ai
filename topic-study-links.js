'use strict';
// Attach the newly exposed philosophy-history lessons to the explicit topics
// in the original question catalogue. This adds navigation, not new solutions.
(()=>{
 const matches=[
  ['fel-09',['FELSEFE ILE DÜŞÜNME','Düşünme ve Akıl Yürütmeye İlişkin Kavramlar']],
  ['fel-10',['MÖ 6. YÜZYIL-MS 2. YÜZYIL','Sofistler ile Sokrates','Platon ve Aristoteles']],
  ['fel-11',['MS 2. YÜZYIL- MS 15. YÜZYIL']],
  ['fel-12',['15. YÜZYIL - 17. YÜZYIL']],
  ['fel-13',['18. YÜZYIL - 19. YÜZYIL']],
  ['fel-14',['20. YÜZYIL FELSEFESİ']]
 ];
 let links=0;
 for(const q of window.EXAM_QUESTIONS||[]){if(q.subject!=='felsefe')continue;const a=window.EXAM_ANALYSES?.[q.id];if(!a)continue;for(const [id,prefixes]of matches)if(window.BOOK_GUIDES?.[id]&&prefixes.some(p=>q.topic.startsWith(p))){if(!a.lessonIds.includes(id)){a.lessonIds.push(id);links++;}}}
 window.TOPIC_LINKS_REPORT={philosophyLinks:links};
})();
