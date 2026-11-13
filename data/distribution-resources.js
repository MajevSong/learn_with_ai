// Original pages of the two user-provided historical distribution documents.
for(const [id,exam,pages]of [['DIST-TYT','TYT',6],['DIST-AYT','AYT',5]]){
 window.SOURCE_RESOURCES[id]={label:exam+' · 2018–2025 soru dağılımı',subtitle:'Yüklenen geçmiş yıl tablosu · Özgün kaynak',baseUrl:'./assets/distributions/'+exam.toLowerCase()+'-',pages,pageOffset:0,credit:'Kaynak: Psikolojik Danışman N. Gizem TOKER · Kullanıcının sağladığı dosya',toc:(window.TOPIC_DISTRIBUTIONS?.tables||[]).filter(t=>t.exam===exam).map((t,i)=>[i+1,t.label,t.page])};
}
