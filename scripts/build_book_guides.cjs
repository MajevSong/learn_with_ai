'use strict';
// Build the verbal course's reading itinerary from the actual book contents.
// These are book sections, not a claim that a short note replaces their pages.
const fs=require('node:fs'),vm=require('node:vm'),path=require('node:path');
const root=path.resolve(__dirname,'..'),ctx={window:{}};
for(const name of ['sources','turkish','social','thought','biology','chemistry','physics','source-resources','exam-sources','biology-reading','core-reading','applied-reading'])vm.runInNewContext(fs.readFileSync(path.join(root,'data',name+'.js'),'utf8'),ctx);
vm.runInNewContext(fs.readFileSync(path.join(root,'source-reader.js'),'utf8'),ctx);
const w=ctx.window;
const scopes={
 tur:[[9,9],[10,14],[15,21],[22,32],[33,35],[22,30],[36,38],[39,54],[55,66],[67,75],[76,82],[[83,87],[91,94]],[95,98],[99,102],[103,107],[108,111],[112,115],[88,90],[116,118],[119,126]],
 tar:[[9,11],[12,13],[14,27],[28,37],[38,46],[47,57],[58,72],[73,87],[88,97],[98,125],[126,148],[149,156],[157,176],[177,186],[14,17],[18,20]],
 cog:[[9,13],[14,18],[19,23],[24,28],[32,35],[36,41],[42,48],[60,64],[65,76],[77,91],[92,101],[102,105],[106,110],[111,120],[36,38],[49,59],[26,31]],
 fel:[[11,18],[23,32],[19,22],[37,48],[33,36],[61,65],[54,60],[49,53]],
 din:[[10,16],[17,18],[19,26],[61,66],[47,51],[52,60],[67,75]]
};
const guides={};
for(const l of w.LESSONS){
 const prefix=l.id.split('-')[0],scope=scopes[prefix]?.[Number(l.id.split('-')[1])-1];if(!scope)continue;
 const ref=w.SourceReader.lessonRef(l),book=ref.book,resource=w.SourceReader.resources[book];
 const ranges=Array.isArray(scope[0])?scope:[scope];
 let toc=w.SOURCE_BOOKS.find(b=>b.id===book)?.toc||[];
 if(book==='AYT-tar')toc=[[1,'İnsanlığın İlk İzleri - Yazının İcadı',14],[2,'İlk Çağ’da Başlıca Medeniyet Havzaları',18],[3,'İlk Çağ',21]];
 toc=toc.filter((r,i)=>!i||r[2]!==toc[i-1][2]).sort((a,b)=>a[2]-b[2]);
 const sections=[];
 toc.forEach((row,i)=>{
  const end=toc[i+1]?.[2]-1||resource.pages-resource.pageOffset;
  const pages=[];for(const [a,b]of ranges)for(let p=Math.max(a,row[2]);p<=Math.min(b,end);p++)pages.push(p);
  if(!pages.length)return;
  // Only attach a note to the very source section its citation identifies.
  // External and differently paginated citations do not silently become book notes.
  const notes=(w.READING[l.id]?.blocks||[]).filter(b=>b.source?.book===book&&pages.includes(b.source.page)).map(b=>({title:b.heading,text:b.text,page:b.source.page}));
  sections.push({title:row[1],pages,explanation:[],notes});
 });
 if(!sections.length)throw Error('Missing book itinerary: '+l.id);
 guides[l.id]={title:l.unit,book,intro:`${resource.label} kitabındaki konu başlıklarını ve özgün sayfaları sırasıyla çalış.`,sections};
}
// These two TYT topics use the relevant opening pages of the supplied AYT book.
// Their former external notes are not evidence for those pages, so explain the
// actual book here rather than silently relabelling another source.
const step=(title,page,look,explanation,question,answer)=>({title,pages:[page],look,explanation,check:{question,answer}});
guides['tar-15']={title:'İnsanlığın İlk İzleri ve Yazının İcadı',book:'AYT-tar',intro:'TYT’deki ilk dönemler konusunu, elindeki AYT Tarih kitabının ilgili 14–17. sayfaları üzerinden çalış.',sections:[
 step('İnsanlığın İlk İzleri — Tarih Öncesi Çağlar',14,'Taş Çağı/Maden Çağı ayrımını ve Paleolitik, Mezolitik, Neolitik başlıklarını karşılaştır.',[
  'Kitabın ilk paragrafı bir yöntem sorusuyla başlıyor: Yazılı belge bulunmayan bir topluluğu nasıl tanırız? Yerleşim, mezar, alet, kap ve çevre kalıntılarından çıkarım yaparız. Bu yüzden bir buluntunun neyi doğrudan gösterdiğini, neyi yalnız düşündürdüğünü ayır. Örneğin taş alet, alet üretimini gösterir; tek başına yazılı hukukun veya tarımın varlığını göstermez. Yazı öncesi dönemleri araştırmada arkeolojinin öne çıkmasının nedeni bu kanıt türüdür.',
  'Üç Taş Çağı başlığını, geçim ve yerleşme biçimi üzerinden oku. Paleolitik maddelerinde avcılık-toplayıcılık ve yontulmuş araçlar; Mezolitik maddelerinde küçük taş aletler ve geçiş özellikleri; Neolitik maddelerinde tarım, evcilleştirme, yerleşik yaşam ve çanak çömlek öne çıkıyor. Tarımın başlaması üretimi artırabilir; depolama ve iş bölümü gereksinimini de büyütebilir. Ancak tek bir çömlekten bütün toplumsal düzeni kesin olarak çıkarma. Sayfanın “Tarih, yazıyla başlar” cümlesi insan geçmişinin yazıdan önce olmadığı anlamına gelmez; tarihî dönem/tarih öncesi dönem ayrımındaki ölçütü bildirir.'
 ],'Bir kazıda öğütme taşı, tahıl kalıntısı ve depolama alanının birlikte bulunması hangi yorumu güçlendirir?','Tarım ve ürün depolama yorumunu birlikte güçlendirir. Bunlar yazılı belge, para veya merkezî devlet bulunduğunu tek başına kanıtlamaz.'),
 step('Maden Çağı — En Eski Yerleşim Yerleri',15,'Bakır, tunç ve demir maddeleriyle Göbeklitepe, Çatalhöyük ve Çayönü kutularını ayrı ayrı oku.',[
  'Üst bölümdeki maden sırası araç yapımında kullanılan malzemeye dayanıyor. Bakırın işlenmesi, tunç üretimi, madencilik ve uzmanlaşma arasındaki bağlantıyı kur. Madencilikte uzmanlaşma, herkesin aynı işi yapmadığı bir toplumsal iş bölümüne işaret edebilir. Şehirleşme ile üretim, ticaret ve yönetim ihtiyaçları arasında ilişki vardır; bunları tek bir buluntudan zorunlu olarak gerçekleşmiş sonuçlar gibi sunma.',
  'Alt bölümde üç yerleşimin kanıt türü farklıdır. Göbeklitepe’deki anıtsal yapılar ortak emek ve inanç yaşamını; Çatalhöyük’te üst üste yenilenen evler ve höyük katmanları uzun süreli yerleşmeyi; Çayönü’ndeki farklı yapı planları mimari deneyimi tartışmaya açar. Yer adını yalnız şehirle eşleştirmek yerine hangi bulgunun hangi yorumu desteklediğini öğren. Sayfadaki dönem sonu cümlesini evrensel bir eşzamanlılık kuralı olarak alma: Yazının bir bölgede kullanılmaya başlaması başka bölgelerin de aynı anda yazılı döneme geçtiğini göstermez. Kitabın önceki sayfasındaki asıl ölçüt, o toplum için yazılı kaydın varlığıdır.'
 ],'Bir bölgede demir araç, başka bir bölgede yazılı tablet bulunması bu bölgelerin aynı çağda olduğunu kanıtlar mı?','Hayır. Malzeme teknolojisi ve yazılı kaydın başlaması her yerde aynı tarihte gerçekleşmez. Yerel bulgular ve tarihlendirme birlikte değerlendirilir.'),
 step('Yazının Gelişimi — Alfabenin Serüveni',16,'Ürünlerin kayda alınmasından kalıcı bilgiye uzanan bağlantıyı; yazı biçimi ile alfabe ayrımını izle.',[
  'Sayfa, yazının bir ihtiyaçtan doğuşunu ürünlerin kaydedilmesiyle ilişkilendiriyor. Ürün sayısı ve teslim bilgisi insan belleğinin dışında saklanınca kayıt, denetim ve sonraki kişilere aktarım kolaylaşır. Kitabın bilgi birikimiyle kurduğu bağlantı da budur: Yeni kişi her bilgiyi yeniden keşfetmek zorunda kalmadan önceki kayıt üzerinde çalışabilir. Yazıyı yalnız haberleşme aracı olarak düşünmek, yönetim ve bilimdeki bu etkisini eksik bırakır.',
  '“Alfabenin Serüveni” bölümünde iki soruyu ayır: Bir toplumun yazısı var mı ve bu yazı alfabetik mi? Her yazı sistemi bir alfabe değildir. Sayfadaki sembol, hece ve ses ayrımı bu yüzden önemlidir. Ayrıca alttaki kil tablet, papirüs, kâğıt ve parşömen örnekleri yazının üzerine işlendiği malzemelerdir; yazı sistemiyle aynı kategori değildir. Bir soruda “papirüs” geçmesi doğrudan alfabe kullandığı sonucunu vermez. Benzer biçimde alfabenin yayılması ile bir toplumda ilk defa yazılı kayıt tutulması farklı gelişmelerdir.'
 ],'Kil tablet ile alfabe niçin aynı türde iki kavram değildir?','Kil tablet yazının taşıyıcı malzemesidir; alfabe ise işaretlerle sesleri ilişkilendiren yazı düzenidir. Aynı taşıyıcı üzerinde farklı yazı sistemleri kullanılabilir.'),
 step('Yönetim ve Bilim Alanında Yazı',17,'Yönetim alanındaki kanun/yıllık örneklerini bilim alanındaki gözlem/takvim örnekleriyle karşılaştır.',[
  'Yönetim bölümünde Hammurabi kanunnamesi ile Hitit yıllıkları ve mektupları birlikte veriliyor. Bu örneklerde kayıtların kalıcı olması yönetim bilgisinin hükümdar veya kâtip değişince kaybolmamasını sağlar. Kanun metni bir kuralı, yıllık ise olay anlatısını kaydeder; ikisini de yazılı kaynak diye tanımlayabiliriz, fakat içerikleri ve yazılış amaçları aynıdır diyemeyiz. Bir metnin resmî kurumca yazılması onu kendiliğinden tarafsız yapmaz.',
  'Bilim bölümünde tarımın mevsimleri izleme ihtiyacı, gök gözlemi ve takvim arasında bağ kuruluyor. Burada sınavda aranabilecek düşünce, gündelik gereksinimlerin sistemli gözlemi teşvik etmesidir. Yazılı gözlem tabloları farklı yılların verilerini karşılaştırmayı kolaylaştırır. Sonuç olarak yazı hem devletin sürekliliğine hem bilgilerin birikmesine katkı verir; bu iki sonuç farklı alanlara aittir. Soru “hangisine ulaşılamaz?” diyorsa yalnız metnin desteklediği bağı kullan; yazının ortaya çıkmasından demokrasi veya herkesin okuryazarlığı gibi zorunlu sonuçlar çıkarma.'
 ],'Gök gözlemlerinin yıllarca yazılı tablolarda tutulması bilime hangi yönden katkı sağlar?','Verilerin korunmasını, farklı zamanların karşılaştırılmasını ve sonraki araştırmacıların önceki kayıtlardan yararlanmasını sağlar; tek başına bütün toplumun bilimsel eğitim gördüğünü göstermez.')
]};
guides['tar-16']={title:'İlk Çağ’da Başlıca Medeniyet Havzaları',book:'AYT-tar',intro:'TYT İlk Çağ tarihini, elindeki AYT Tarih kitabının 18–20. sayfalarındaki medeniyet başlıkları üzerinden çalış.',sections:[
 step('İran, Hint ve Çin Medeniyetleri',18,'Üç başlığı yönetim, toplumsal yapı ve bilgi/teknoloji katkısı sütunları varmış gibi karşılaştır.',[
  'İran bölümünde satraplık, posta ve Kral Yolu aynı yönetim sorununun farklı parçalarını gösterir: Geniş bir alanda haber, emir ve mal dolaşımını düzenlemek. Eyaletlere bölmek yönetimi örgütler; ulaşım ve haberleşme bu parçalarla merkez arasındaki bağı güçlendirebilir. Bu örneklerden doğrudan demokratik yönetim sonucu çıkmaz. Kral Yolu yalnız ticaret başlığında ezberlenirse yönetim ve haberleşmeyle ilişkisi gözden kaçar.',
  'Hint bölümünde toplumsal tabakalaşmayla inanç çeşitliliğini; Çin bölümünde İpek Yolu’yla teknik buluşları ayır. Kast örneği, toplumsal gruplar arasındaki ayrımın ortaklaşma üzerindeki etkisini sorgulamaya uygundur. Bir buluşun ortaya çıkışıyla başka bölgelere yayılması ise farklı süreçlerdir. Kitaptaki kısa maddeleri “medeniyet — tek katkı” ezberine dönüştürmek yerine her örneği alanına yerleştir: Satraplık idari, yol ulaşım ve ekonomi, kast toplumsal, kâğıt bilgi aktarımı ve teknoloji bağlantısıdır. Böylece aynı medeniyetin farklı alanlarda birden çok özelliği olabileceğini görürsün.'
 ],'Posta teşkilatı ve eyalet düzeni, yalnız ekonomik gelişmeyi mi gösterir?','Hayır. İkisi de merkezle farklı bölgeler arasındaki yönetim ve iletişim ihtiyacına bağlıdır; ticaretle ilişki kurulabilse de idari yön göz ardı edilemez.'),
 step('Mezopotamya, Yunan Medeniyeti ve Hititler',19,'Sümer/Babil/Asur maddelerini, Yunan polislerini ve Hitit yönetim unvanlarını birbirine karıştırmadan oku.',[
  'Mezopotamya kısmında Sümerlerin site düzeni ve yazı, Babillerin Hammurabi kanunları, Asurların ticaret merkezleri ile Anadolu’ya yazı aktarımı öne çıkar. “Yazıyı icat etmek” ile “yazıyı bir bölgeye taşımak” aynı katkı değildir. Ticaret yalnız malın taşınmasını içermez; kayıt, ölçü ve bilgi alışverişi gerektirdiği için kültür aktarımına da yol açabilir. Kitaptaki karum örneğini bu nedenle ticaret ile yazılı kültür arasında bir köprü olarak kullan.',
  'Yunan bölümünde dağlık coğrafya, polisler, deniz ticareti ve olimpiyatların farklı ilişkilerini ayır. Coğrafi bölünmüşlük siyasi parçalanmayı açıklayabilir; ortak oyunlar ise siyasi birlik olmadan kültürel ortaklık bulunduğunu gösterebilir. Hitit bölümünde kralın başrahipliği din ve yönetim arasındaki bağı, Tavananna kraliçeyi, Pankuş soylular meclisini adlandırır. Bir meclis bulunması tek başına halkın tümünün yönetime katıldığı anlamına gelmez. Anal/yıllıklar yazılı kaynak niteliğindedir; devletin amaç ve bakış açısını da sorgulamak gerekir.'
 ],'Ortak olimpiyatlar düzenleyen polislerin tek bir devlet oluşturmaması hangi ayrımı gösterir?','Kültürel birlik ile siyasi birlik farklıdır. Ortak etkinlik, dil veya inanç bulunması tek merkezî devletin varlığını zorunlu kılmaz.'),
 step('Anadolu, Mısır ve Doğu Akdeniz Uygarlıkları',20,'Frig, Lidya, Urartu; Mısır; Fenike ve İbrani başlıklarında ekonomi, inanç ve kültür etkisini ayır.',[
  'Frig maddelerinde tarımın önemiyle tarım araçlarına verilen zararın ağır cezalandırılması arasında bağ kuruluyor. Lidya bölümünde para ve ticaret birlikte, Urartu bölümünde coğrafya, üretim ve kaya mezarları birlikte ele alınıyor. Mezara eşya konulması veya gömü uygulamaları gibi bulgular inanç yaşamıyla ilgili yorumları destekleyebilir; aynı bulgudan yönetim biçimi ya da yazı sistemi doğrudan belirlenemez. Uygarlık adını görünce bütün özellikleri birden doğru saymak yerine sorudaki kanıtı kullan.',
  'Mısır bölümünde Nil çevresindeki yaşamı, ölçme ihtiyacını, takvimi, mimariyi ve mumyalamayı ayrı alanlarla ilişkilendir. Mumyalama inançla, bedenin korunmasına ilişkin bilgi ise tıp ve teknik uygulamayla bağlantılıdır. Fenike bölümündeki deniz ticareti ile alfabe aktarımı da ekonomi-kültür ilişkisini düşünmeye yardımcı olur. İbrani bölümünde dinî kimlik ve toplumsal süreklilik bağı üzerinde durulur. Bu sayfa bir karşılaştırma alanıdır: Aynı olay birden çok alana bağlanabilir; soru hangi yönü vurguluyorsa o bağı gerekçelendir. Özellikle “yalnızca”, “her zaman”, “bütün” gibi sözcükler kaynakta bulunmayan aşırı genellemeler doğurabilir.'
 ],'Friglerde tarım araçlarına zarar vermenin ağır cezalandırılması en doğrudan hangi bağı destekler?','Hukuki düzenlemelerin ekonomik yaşamın ihtiyaçlarından etkilenebildiğini destekler. Buradan tek başına para kullanımı veya demokratik yönetim sonucu çıkarılamaz.')
]};
fs.writeFileSync(path.join(root,'data/book-verbal.js'),'// Book contents determine the reading order. Generated by scripts/build_book_guides.cjs.\nwindow.BOOK_GUIDES=window.BOOK_GUIDES||{};\nObject.assign(window.BOOK_GUIDES,'+JSON.stringify(guides,null,2)+');\n');
console.log('Built '+Object.keys(guides).length+' book itineraries.');
