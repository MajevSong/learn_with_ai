/* Özgün TYT mikro dersleri. Kaynaklar doğrulama ve ileri okuma içindir. */
window.LESSONS = (window.LESSONS || []).concat([
  {
    id: 'fel-01', subject: 'felsefe', title: 'Felsefi düşünceyi tanı', unit: 'Felsefeye giriş', minutes: 5,
    tags: ['sorgulama', 'refleksif', 'tutarlılık'],
    summary: 'Bir düşüncenin ne söylediği kadar, hangi gerekçeyle savunulduğunu da araştır.',
    visual: { type: 'flow', nodes: [
      { label: 'Merak', detail: 'Alışılmış olanı yeniden fark et.' },
      { label: 'Soru', detail: 'Kavramın anlamını ve varsayımlarını sorgula.' },
      { label: 'Gerekçe', detail: 'İddiayı destekleyen nedenleri göster.' },
      { label: 'Eleştiri', detail: 'İtirazları ve çelişkileri incele.' },
      { label: 'Yeniden düşün', detail: 'Düşünmenin kendisini de sorgula: refleksif ol.' }
    ] },
    sections: [
      { title: 'Felsefi sorunun izi', text: '“Bu karar adil mi?” sorusu tek bir olayı tartışır; “Adalet nedir?” sorusu kavramın temelini araştırır. Felsefi sorular genel, gerekçelendirmeye açık ve kavramsaldır.' },
      { title: 'Soruda ayırt et', text: 'Eleştirel olmak bir görüşü otomatik reddetmek değildir. Tutarlılık, düşüncenin kendi içinde çelişmemesidir; bir görüşün tutarlı olması tek başına doğru olduğunu kanıtlamaz.' }
    ],
    memory: 'Refleksif: düşüncenin aynayı kendisine çevirmesi.',
    question: { stem: 'Bir öğrenci, “Kararlarıma güveniyorum ama güvenimin dayandığı ölçütü de sorgulamalıyım.” diyor. Hangi özellik öne çıkar?', options: ['Refleksif olma', 'Deneyle doğrulama', 'Otoriteye bağlılık', 'Kesin sonuç verme'], answer: 0, explanation: 'Öğrenci kendi düşünme ve değerlendirme biçimini konu ediniyor; bu refleksif düşünmedir.' },
    cards: [{ front: 'Refleksif düşünme?', back: 'Düşüncenin kendisini konu edinip sorgulaması.' }, { front: 'Tutarlı olan her düşünce doğru mudur?', back: 'Hayır. İç çelişki taşımamak, gerçeklikle uygunluğu tek başına sağlamaz.' }],
    source: { title: 'OGM: Felsefi düşüncenin özellikleri', url: 'https://ogmmateryal.eba.gov.tr/panel/upload/etkilesimli/kitap/beceri_temelli/10/felsefe/files/basic-html/page26.html' }
  },
  {
    id: 'fel-02', subject: 'felsefe', title: 'Bilginin kaynağı: akıl mı deney mi?', unit: 'Bilgi felsefesi', minutes: 6,
    tags: ['rasyonalizm', 'empirizm', 'kritisizm'], summary: 'Bilginin kaynağı, imkânı ve doğruluk ölçütü farklı sorulardır.',
    visual: { type: 'compare', nodes: [
      { label: 'Rasyonalizm', detail: 'Akıl ve aklın ilkeleri bilginin temelidir.' },
      { label: 'Empirizm', detail: 'Bilginin kaynağında deney ve duyum bulunur.' },
      { label: 'Kritisizm', detail: 'Deneyin verisi, zihnin düzenleyici yapılarıyla bilgiye dönüşür.' },
      { label: 'Septisizm', detail: 'Kesin bilgi iddialarına kuşkuyla yaklaşır.' }
    ] },
    sections: [
      { title: 'Önce soruyu bul', text: '“Bilgi nereden gelir?” kaynak; “Kesin bilgi mümkün mü?” imkân; “Doğruyu nasıl ayırırız?” ölçüt problemidir. Akımın adından önce paragrafın hangi problemi tartıştığını belirle.' },
      { title: 'Doğruluk ile gerçeklik', text: 'Gerçeklik, var olma durumuyla ilgilidir. Doğruluk ise bir yargının niteliğidir. Uygunluk ölçütü yargı ile olgunun örtüşmesini, tutarlılık ölçütü yargılar arasındaki uyumu arar.' }
    ], memory: 'Kaynak: nereden? İmkân: olabilir mi? Ölçüt: nasıl ayırırım?',
    question: { stem: '“Deney malzemeyi sağlar; ancak zihin bu malzemeyi düzenlemeden bilgi oluşmaz.” görüşü hangisine yakındır?', options: ['Septisizm', 'Kritisizm', 'Yalnız empirizm', 'Nihilizm'], answer: 1, explanation: 'Kritisizm, bilginin oluşumunda deney ile zihnin birlikte rolünü vurgular.' },
    cards: [{ front: 'Empirizmin anahtarı?', back: 'Deney ve duyum.' }, { front: 'Bilginin imkânı problemi neyi sorar?', back: 'Doğru ya da kesin bilgiye ulaşılıp ulaşılamayacağını.' }],
    source: { title: 'OGM: Bilgi felsefesi çözümlü sorular', url: 'https://ogmmateryal.eba.gov.tr/panel/upload/etkilesimli/kitap/konu-pekistirme/tyt/felsefe/files/basic-html/page62.html' }
  },
  {
    id: 'fel-03', subject: 'felsefe', title: 'Varlık neyin üzerine kurulur?', unit: 'Varlık felsefesi', minutes: 5,
    tags: ['ontoloji', 'idealizm', 'materyalizm'], summary: 'Varlığın temeline yerleştirilen unsuru bul; görünüş ile özü ayır.',
    visual: { type: 'compare', nodes: [
      { label: 'İdealizm', detail: 'Asıl gerçekliği düşünsel ya da tinsel temelle açıklar.' },
      { label: 'Materyalizm', detail: 'Varlığın temelini madde olarak görür.' },
      { label: 'Düalizm', detail: 'Varlığı iki temel ilkeyle; örneğin ruh ve maddeyle açıklar.' },
      { label: 'Oluş', detail: 'Değişimi varlığın temel özelliği kabul eder.' }
    ] },
    sections: [
      { title: 'Bilim ile ontolojinin sorusu', text: 'Bilim belirli varlık alanlarını yöntemleriyle inceler. Ontoloji, var olmanın ne demek olduğunu ve varlığın temel yapısını genel olarak sorgular.' },
      { title: 'Anahtar kavrama dikkat', text: 'Parçada madde sözcüğünün geçmesi materyalizm için yeterli değildir. Yazarın maddeyi temel gerçeklik sayması gerekir. Benzer biçimde düşünmekten söz etmek her zaman idealizm değildir.' }
    ], memory: 'Akımı sözcükten değil, temel kabulden yakala.',
    question: { stem: '“İnsan bedenini fiziksel süreçlerle, zihnini ise onlardan ayrı bir tözle açıklamalıyız.” görüşü hangisidir?', options: ['Materyalizm', 'Oluşçuluk', 'Düalizm', 'Septisizm'], answer: 2, explanation: 'İki ayrı temel varlık türü kabul edildiği için görüş düalisttir.' },
    cards: [{ front: 'Ontoloji?', back: 'Varlığı, var olması bakımından inceleyen felsefe alanı.' }, { front: 'Düalizmde kaç temel ilke vardır?', back: 'İki; ruh ve madde ayrımı yaygın örnektir.' }],
    source: { title: 'MEB: Varlık felsefesi teması', url: 'https://tymm.meb.gov.tr/felsefe-dersi/unite/35' }
  },
  {
    id: 'fel-04', subject: 'felsefe', title: 'Ahlaki eylemin pusulası', unit: 'Ahlak felsefesi', minutes: 6,
    tags: ['etik', 'özgürlük', 'ödev', 'fayda'], summary: 'Aynı davranış farklı gerekçelerle yapılabilir; etik yaklaşımı gerekçe belirler.',
    visual: { type: 'compare', nodes: [
      { label: 'Ödev', detail: 'Eylemi ilkeye ve iyi niyete göre değerlendir.' },
      { label: 'Fayda', detail: 'Eylemin doğurduğu yarar ve sonuçları tart.' },
      { label: 'Erdem', detail: 'Nasıl bir karakter geliştirdiğini sorgula.' },
      { label: 'Sorumluluk', detail: 'Özgür ve bilinçli seçimle ilişkilendir.' }
    ] },
    sections: [
      { title: 'Ahlak ve etik', text: 'Ahlak, hayatta benimsenen kurallar ve değerlerle ilgilidir. Etik, bu kuralların dayanaklarını sorgular: “İyiyi neye göre belirliyoruz?”' },
      { title: 'Sonuç mu ilke mi?', text: 'Kant’ın ödev ahlakında çıkar beklentisi belirleyici değildir. Faydacılık sonuçlara odaklanır. Özgürlük sorusunda determinizm nedensel belirlenimi, indeterminizm belirlenmemişliği, otodeterminizm kişinin kendisini belirlemesini öne çıkarır.' }
    ], memory: 'Davranış aynı olabilir; etik gerekçe değişir.',
    question: { stem: '“Kimse görmese ve bana kazanç sağlamasa da doğruyu söylemeliyim; çünkü doğruluk bir görevdir.” Hangi yaklaşım baskındır?', options: ['Hazcılık', 'Faydacılık', 'Bencillik', 'Ödev ahlakı'], answer: 3, explanation: 'Eylemin değeri beklenen sonuca değil görevi yerine getirme ilkesine bağlanmıştır.' },
    cards: [{ front: 'Etik neyi sorgular?', back: 'İyi ve kötüye ilişkin yargıların ilkelerini ve gerekçelerini.' }, { front: 'Ödev ile fayda ayrımı?', back: 'Ödev ilke ve niyete; fayda sonuçların yararına odaklanır.' }],
    source: { title: 'OGM: Ahlak felsefesinin kavramları', url: 'https://ogmmateryal.eba.gov.tr/panel/upload/etkilesimli/kitap/defterim/10/felsefe/files/basic-html/page177.html' }
  },
  {
    id: 'fel-05', subject: 'felsefe', title: 'Bilimsel bilgi nasıl ilerler?', unit: 'Bilim felsefesi', minutes: 5,
    tags: ['yanlışlanabilirlik', 'yöntem', 'bilim'], summary: 'Bilim bir bilgi üretme etkinliğidir; bilim felsefesi bu etkinliğin temellerini sorgular.',
    visual: { type: 'cycle', nodes: [
      { label: 'Problem', detail: 'Açıklanması gereken bir olgu belirle.' },
      { label: 'Hipotez', detail: 'Sınanabilir bir açıklama öner.' },
      { label: 'Sınama', detail: 'Gözlem ve deneyden kanıt topla.' },
      { label: 'Değerlendirme', detail: 'Kanıtla karşılaştır; gerektiğinde açıklamayı değiştir.' }
    ] },
    sections: [
      { title: 'İki farklı iş', text: 'Bilimsel çalışma olguları açıklarken bilim felsefesi “Bilimsel açıklama nedir?”, “Bilimin sınırları nelerdir?” sorularını tartışır. Birbirlerini beslerler; aynı yöntemle çalışmaları gerekmez.' },
      { title: 'Sınanabilir iddia', text: 'Popper için bir iddianın hangi olası gözlemle yanlışlanabileceği önemlidir. Her sonuca uyarlanarak kendisini koruyan bir iddia bu ölçüte uymaz. Bilimsel teori, gündelik dildeki dayanaksız tahminle aynı şey değildir.' }
    ], memory: 'Yanlışlanabilir olmak, zaten yanlış olmak demek değildir.',
    question: { stem: '“Bu açıklamanın bilimsel sayılması için onu geçersiz kılabilecek bir gözlemi de tarif edebilmeliyiz.” Hangi ölçüt vurgulanıyor?', options: ['Yanlışlanabilirlik', 'Gelenekle uyum', 'Estetik beğeni', 'Kişisel kesinlik'], answer: 0, explanation: 'İddianın olası bir bulguyla çürütülebilme koşulu aranıyor.' },
    cards: [{ front: 'Bilim felsefesi deney yapan bir bilim dalı mıdır?', back: 'Bilimin kavramlarını, yöntemini, sınırlarını ve değerini felsefi olarak sorgular.' }, { front: 'Yanlışlanabilirlik neyi ister?', back: 'İddiayı çürütebilecek olası bir durumun gösterilebilmesini.' }],
    source: { title: 'OGM: TYT Felsefe konu pekiştirme, Bilim felsefesi', url: 'https://ogmmateryal.eba.gov.tr/panel/upload/etkilesimli/kitap/konu-pekistirme/tyt/felsefe/felsefe.pdf' }
  },
  {
    id: 'fel-06', subject: 'felsefe', title: 'Güzel, hoş ve yararlı', unit: 'Sanat felsefesi', minutes: 5,
    tags: ['estetik', 'güzellik', 'sanat'], summary: 'Bir nesneyi yararlı bulmak, onu estetik açıdan güzel bulmakla aynı yargı değildir.',
    visual: { type: 'layers', nodes: [
      { label: 'Estetik', detail: 'Doğadaki ve sanattaki güzelliği araştırır.' },
      { label: 'Sanat felsefesi', detail: 'Sanatı, sanatçıyı ve sanat eserini sorgular.' },
      { label: 'Öznel yaklaşım', detail: 'Beğenide öznenin duygu ve deneyimini öne çıkarır.' },
      { label: 'Nesnel yaklaşım', detail: 'Güzelliğin dayanağını nesnenin özelliklerinde arar.' }
    ] },
    sections: [
      { title: 'Estetiğin alanı', text: 'Bir gün batımı estetik değerlendirmeye konu olabilir. İnsan tarafından üretilmediği için sanat eseri değildir. Sanat felsefesinin alanı, estetiğin alanından daha dardır.' },
      { title: 'Yaklaşımları ayır', text: 'Taklit görüşü sanatın gerçeklikle ilişkisini, yaratma görüşü sanatçının özgün üretimini, oyun görüşü özgür ve çıkar gözetmeyen etkinliği vurgular. Soruda hangi yönün öne çıktığını izle.' }
    ], memory: 'Her estetik nesne sanat eseri değildir.',
    question: { stem: 'Bir öğrenci dağ manzarasını güzel buluyor. Bu yargı için hangisi doğrudur?', options: ['Manzara zorunlu olarak sanat eseridir.', 'Estetik değerlendirmedir; nesnesinin sanat eseri olması gerekmez.', 'Yalnız ekonomik yararı ifade eder.', 'Bilimsel bir yasa bildirir.'], answer: 1, explanation: 'Estetik, doğal güzelliği de kapsar; sanat eseri ise insanın sanatsal üretimiyle ilişkilidir.' },
    cards: [{ front: 'Estetik mi daha geniştir, sanat felsefesi mi?', back: 'Estetik; doğadaki güzelliği de konu edinir.' }, { front: 'Yaratma olarak sanat neyi vurgular?', back: 'Sanatçının özgün biçimde yeni bir eser ortaya koymasını.' }],
    source: { title: 'OGM: Sanat felsefesinin konusu ve problemleri', url: 'https://ogmmateryal.eba.gov.tr/panel/upload/etkilesimli/kitap/defterim/10/felsefe/files/basic-html/page257.html' }
  },
  {
    id: 'fel-07', subject: 'felsefe', title: 'İktidarın meşruiyeti ve adalet', unit: 'Siyaset felsefesi', minutes: 5,
    tags: ['devlet', 'meşruiyet', 'hak'], summary: 'Yönetme gücünün varlığı ile o gücün haklı kabul edilmesi ayrı meselelerdir.',
    visual: { type: 'flow', nodes: [
      { label: 'Birey', detail: 'Hakları ve özgürlükleri olan kişi.' },
      { label: 'Toplum', detail: 'Birlikte yaşama ve ortak ihtiyaçlar.' },
      { label: 'Devlet', detail: 'Siyasi örgütlenme ve kamusal düzen.' },
      { label: 'Meşruiyet', detail: 'Yönetme yetkisinin haklı bir temele dayanması.' },
      { label: 'Adalet', detail: 'Hakların korunması ve hak edişin gözetilmesi.' }
    ] },
    sections: [
      { title: 'Olan ve olması gereken', text: 'Siyaset bilimi mevcut kurum ve süreçleri inceler. Siyaset felsefesi “İdeal yönetim nasıl olmalıdır?”, “Devletin sınırı nedir?” gibi normatif soruları da tartışır.' },
      { title: 'Kavramları karıştırma', text: 'İktidar yönetme gücüdür. Egemenlik, bir siyasi düzende en üstün karar verme yetkisini anlatır. Meşruiyet ise bu yetkinin hangi gerekçeyle haklı görüldüğüdür.' }
    ], memory: 'Güç: yönetebilir mi? Meşruiyet: yönetmesi hangi temelde haklı?',
    question: { stem: '“Bir yönetimin emir verebilmesi yeterli değildir; halkın bu yetkiyi hangi nedenle kabul ettiğini de sormalıyız.” Hangi problem ele alınır?', options: ['Sanatın kökeni', 'Bilginin kaynağı', 'İktidarın meşruiyeti', 'Varlığın özü'], answer: 2, explanation: 'Yönetim yetkisinin kabul edilmesini haklı kılan dayanak sorgulanıyor.' },
    cards: [{ front: 'Meşruiyet?', back: 'Yönetme yetkisinin haklı ve kabul edilebilir temellere dayanması.' }, { front: 'Ütopya?', back: 'Tasarlanan ideal toplum düzeni.' }],
    source: { title: 'OGM: Siyaset felsefesinin konusu ve problemleri', url: 'https://ogmmateryal.eba.gov.tr/panel/upload/etkilesimli/kitap/felsefe/10/unite3/files/basic-html/page46.html' }
  },
  {
    id: 'fel-08', subject: 'felsefe', title: 'Din felsefesinde görüşleri ayır', unit: 'Din felsefesi', minutes: 6,
    tags: ['teizm', 'deizm', 'agnostisizm'], summary: 'Din felsefesi inançla ilgili kavramları akla dayalı sorgular; belirli bir inancı öğretmekle sınırlı değildir.',
    visual: { type: 'compare', nodes: [
      { label: 'Teizm', detail: 'Tanrı’nın varlığını ve evrenle etkin ilişkisini kabul eder.' },
      { label: 'Deizm', detail: 'Yaratıcıyı kabul eder; vahiy ve müdahale anlayışını benimsemez.' },
      { label: 'Panteizm', detail: 'Tanrı ile evreni bir ve aynı görür.' },
      { label: 'Ateizm', detail: 'Tanrı’nın varlığını reddeder.' },
      { label: 'Agnostisizm', detail: 'Tanrı’nın var olup olmadığının bilinemeyeceğini savunur.' }
    ] },
    sections: [
      { title: 'Teoloji ve felsefe', text: 'Teoloji belirli bir dinin kabul ettiği esaslar çerçevesinde açıklama yapar. Din felsefesi din olgusuna daha genel, eleştirel ve akılcı biçimde yaklaşır.' },
      { title: 'İki ayrı tutum', text: 'Agnostisizm, bilgiye ilişkin sınır vurgusudur; ateizmle eş anlamlı değildir. Deizmde yaratıcı kabul edilir; bu nedenle ateizmle de karıştırılmamalıdır.' }
    ], memory: 'Deizm: yaratıcı var. Agnostisizm: bilginin sınırı var.',
    question: { stem: '“Evrenin bir yaratıcısı vardır; doğa düzeni kurulduktan sonra vahiy yoluyla yönlendirme gerçekleşmez.” Hangi görüş anlatılır?', options: ['Ateizm', 'Panteizm', 'Agnostisizm', 'Deizm'], answer: 3, explanation: 'Yaratıcı kabulü ile vahiy ve müdahalenin reddi birlikte deizmi işaret eder.' },
    cards: [{ front: 'Agnostisizm ateizm midir?', back: 'Hayır. Bilinemeyeceğini savunmak ile varlığını reddetmek farklıdır.' }, { front: 'Panteizm?', back: 'Tanrı ile evreni özdeş kabul eden görüş.' }],
    source: { title: 'OGM: Din felsefesi çalışma defteri', url: 'https://ogmmateryal.eba.gov.tr/panel/upload/etkilesimli/kitap/calisma_defteri/f6/10/felsefe/files/basic-html/page22.html' }
  },
  {
    id: 'din-01', subject: 'din', title: 'Bilgi ve inanç: üç kaynak', unit: 'Bilgi ve inanç', minutes: 5,
    tags: ['selim akıl', 'doğru haber', 'duyular'], summary: 'İslam düşüncesinde bilgi kaynaklarını tanı; her duyulan haberi güvenilir sayma.',
    visual: { type: 'layers', nodes: [
      { label: 'Salim duyular', detail: 'Sağlıklı duyularla gözlem ve algı.' },
      { label: 'Selim akıl', detail: 'Ön yargıdan uzak, doğru işleyen akıl yürütme.' },
      { label: 'Doğru haber', detail: 'Güvenilirliği belirlenmiş haber; vahiy bu kapsamda ele alınır.' },
      { label: 'Tahkik', detail: 'İnancı araştırma ve gerekçelendirmeyle bilinçli hâle getirme.' }
    ] },
    sections: [
      { title: 'Bilgi ile söylenti', text: 'Bir haberi paylaşmadan önce kaynağını ve doğruluğunu araştırmak gerekir. Rüya, ilham veya kişisel sezgi herkes için bağlayıcı, kesin bilgi kaynağı kabul edilmez.' },
      { title: 'Taklidî ve tahkikî iman', text: 'Taklidî imanda çevreden edinilen kabul; tahkikî imanda araştırma, anlama ve gerekçelendirme öne çıkar. Ayrım, kişinin inancını nasıl temellendirdiğiyle ilgilidir.' }
    ], memory: 'Duyu gözler, akıl değerlendirir, güvenilir haber bildirir.',
    question: { stem: 'Bir öğrencinin inandığı ilkeleri araştırarak ve delillerini değerlendirerek benimsemesi hangi kavramla açıklanır?', options: ['Tahkikî iman', 'Taklidî iman', 'Hurafe', 'Taassup'], answer: 0, explanation: 'Araştırma ve gerekçelendirmeyle oluşan bilinçli inanç tahkikî imandır.' },
    cards: [{ front: 'İslam düşüncesinde üç bilgi kaynağı?', back: 'Salim duyular, selim akıl ve doğru haber.' }, { front: 'Her yaygın haber doğru mudur?', back: 'Hayır. Yaygınlık tek başına doğruluk sağlamaz; kaynak araştırılmalıdır.' }],
    source: { title: 'MEB: Bilgi ve inanç', url: 'https://dogm.eba.gov.tr/panel/upload/etkilesimli/kitap/DKB9/unite1/files/basic-html/page5.html' }
  },
  {
    id: 'din-02', subject: 'din', title: 'İman esaslarını ilişkilendir', unit: 'İnanç esasları', minutes: 5,
    tags: ['tevhit', 'kader', 'sorumluluk'], summary: 'İman esaslarını yalnız sayma; insanın anlam, seçim ve sorumluluk anlayışıyla ilişkilendir.',
    visual: { type: 'layers', nodes: [
      { label: 'Allah ve melekler', detail: 'Allah’ın birliği; meleklerin varlığına iman.' },
      { label: 'Kitaplar ve peygamberler', detail: 'İlahi rehberlik ve bu rehberliği bildiren elçiler.' },
      { label: 'Ahiret', detail: 'Ölüm sonrası hayat ve hesap bilinci.' },
      { label: 'Kader', detail: 'Allah’ın bilgisi ve takdiri; insanın seçim sorumluluğunu kaldırmaz.' }
    ] },
    sections: [
      { title: 'Altı esas', text: 'Allah’a, meleklere, kitaplara, peygamberlere, ahirete, kadere iman temel esaslardır. Tevhit, Allah’ın birliği ilkesidir.' },
      { title: 'Kader ve irade', text: 'İslam öğretiminde insanın iradesiyle yaptığı tercihlerden sorumluluğu vurgulanır. Tevekkül, gerekli çabayı ve önlemi aldıktan sonra Allah’a güvenmektir; çalışmayı bırakmak değildir.' }
    ], memory: 'Tedbir + emek + güven: tevekkül.',
    question: { stem: 'Sınava düzenli çalışan, eksiklerini gideren ve sonucunu Allah’a güvenerek bekleyen öğrenci hangi anlayışı örneklendirir?', options: ['Sorumluluktan kaçınma', 'Tevekkül', 'Taassup', 'İsraf'], answer: 1, explanation: 'Öğrenci gerekli çabayı gösterip sonrasında güven duymaktadır; tevekkül çalışmayla birlikte düşünülür.' },
    cards: [{ front: 'Tevhit?', back: 'Allah’ın bir ve tek olması inancı.' }, { front: 'Tevekkül tedbiri kaldırır mı?', back: 'Hayır. Çaba ve tedbirden sonra Allah’a güvenmeyi ifade eder.' }],
    source: { title: 'Din İşleri Yüksek Kurulu: İslam’da iman esasları', url: 'https://kurul.diyanet.gov.tr/tr/duyuru/islamda-iman-esaslari/0193c03a-b203-709d-0c39-7dbf65fb2c37' }
  },
  {
    id: 'din-03', subject: 'din', title: 'İbadette niyet ve davranış', unit: 'İslam ve ibadet', minutes: 5,
    tags: ['ihlas', 'ibadet', 'zekât'], summary: 'İbadetin biçimi, niyeti ve davranışa yansıyan yönü birlikte değerlendirilir.',
    visual: { type: 'flow', nodes: [
      { label: 'Niyet', detail: 'Davranışın hangi amaçla yapıldığını belirler.' },
      { label: 'İhlas', detail: 'Gösterişten uzak, içten yöneliş.' },
      { label: 'İbadet', detail: 'Allah’a kulluk amacıyla yapılan davranışlar.' },
      { label: 'Ahlaki yansıma', detail: 'Öz denetim, paylaşma ve sorumluluk.' }
    ] },
    sections: [
      { title: 'Dar ve geniş anlam', text: 'Namaz, oruç, zekât ve hac belirli şartları olan ibadetlerdir. İbadet kavramı geniş anlamda iyi niyetle yapılan yararlı davranışları da kapsar.' },
      { title: 'Kavram ayrımı', text: 'Farz, yerine getirilmesi kesin olarak istenen yükümlülüktür. Sünnet, Hz. Muhammed’in örnek uygulamalarıyla ilişkilidir. Zekâtın belirli şartları vardır; sadaka daha geniş bir gönüllü yardımlaşma alanını da içerir.' }
    ], memory: 'İhlas: “Görsünler” yerine içtenlik.',
    question: { stem: 'Yardımını yalnız övgü toplamak için görünür kılmaya çalışan kişinin davranışında hangi ilke zedelenir?', options: ['Zamanlama', 'Mekân', 'İhlas', 'Miktar'], answer: 2, explanation: 'İhlas, ibadetin ve iyiliğin gösterişten uzak, samimi niyetle yapılmasıdır.' },
    cards: [{ front: 'İhlas?', back: 'Samimiyet; gösterişten uzak, içten yöneliş.' }, { front: 'Zekât ve sadaka aynı mı?', back: 'Zekât belirli şartlara bağlı bir yükümlülüktür; sadaka daha geniştir.' }],
    source: { title: 'MEB: İslam ve ibadet', url: 'https://dogm.eba.gov.tr/panel/upload/etkilesimli/kitap/DKB9/unite3/files/basic-html/page25.html' }
  },
  {
    id: 'din-04', subject: 'din', title: 'Ahlak: niyet, hak ve ölçü', unit: 'Ahlaki tutumlar', minutes: 5,
    tags: ['kul hakkı', 'gıybet', 'itidal'], summary: 'Din kültürü sorularında örnek davranışı doğru ahlaki kavrama bağla.',
    visual: { type: 'compare', nodes: [
      { label: 'Adalet', detail: 'Hakkı gözetmek; kişiye göre kayırmamak.' },
      { label: 'Emanet', detail: 'Üstlenilen sorumluluğu ve güveni korumak.' },
      { label: 'İtidal', detail: 'Aşırılıktan kaçınıp ölçülü davranmak.' },
      { label: 'Kul hakkı', detail: 'İnsanların maddi ve manevi haklarını gözetmek.' }
    ] },
    sections: [
      { title: 'Zararın biçimi', text: 'İftira, kişiye yapmadığı bir davranışı yüklemektir. Gıybet ise bir kişinin hoşlanmayacağı özelliğini arkasından konuşmaktır; söylenenin doğru olması bunu kendiliğinden uygun yapmaz.' },
      { title: 'Ölçülülük', text: 'İtidal, her durumda en azını yapmak değil, davranışta uygun ölçüyü korumaktır. İsraf kaynakları gereksiz tüketmek; cimrilik ise gerekli paylaşımı ve harcamayı esirgemektir.' }
    ], memory: 'İftira: asılsız isnat. Gıybet: hoşlanılmayanı arkadan söylemek.',
    question: { stem: '“Söylediğim doğru; o yüzden arkadaşımın hoşlanmayacağı bu özelliğini arkasından anlatabilirim.” diyen kişi hangi kavramı gözden kaçırır?', options: ['İstişare', 'Tevekkül', 'Sabır', 'Gıybet'], answer: 3, explanation: 'Gıybetin konusu doğru da olabilir. Belirleyici olan kişinin hoşlanmayacağı bir hususun arkasından konuşulmasıdır.' },
    cards: [{ front: 'İtidal?', back: 'Davranışlarda dengeli ve ölçülü olmak.' }, { front: 'İftira ve gıybet ayrımı?', back: 'İftirada asılsız isnat; gıybette kişinin hoşlanmayacağı şeyi arkasından konuşma vardır.' }],
    source: { title: 'MEB: İslamiyet’te ahlaki değerler', url: 'https://dogm.eba.gov.tr/panel/upload/etkilesimli/kitap/DinlerT/unite2/files/basic-html/page14.html' }
  },
  {
    id: 'din-05', subject: 'din', title: 'Hz. Muhammed’in örnekliği', unit: 'Peygamberlik ve örneklik', minutes: 5,
    tags: ['istişare', 'emanet', 'tebliğ'], summary: 'Örnek olayda güvenilirlik, danışma, merhamet ve sorumluluk arasındaki farkı yakala.',
    visual: { type: 'flow', nodes: [
      { label: 'Güvenilirlik', detail: 'Sözünde durma ve emaneti koruma.' },
      { label: 'İstişare', detail: 'Karardan önce ilgili kişilere danışma.' },
      { label: 'Merhamet', detail: 'İnsana ve canlılara duyarlı yaklaşma.' },
      { label: 'Tebliğ', detail: 'İlahi mesajı insanlara bildirme.' },
      { label: 'Tebyin', detail: 'İlahi mesajı açıklama.' }
    ] },
    sections: [
      { title: 'Beşer ve peygamber', text: 'Hz. Muhammed’in insan olması ile vahiy alması farklı özelliklerdir. Günlük hayatta danışması, insanî yönü ve ortak akla verdiği önemle ilişkilidir.' },
      { title: 'Örneği kavrama bağla', text: 'Karar öncesi görüş almak istişareyi; bırakılan eşyayı korumak emaneti; mesajı ulaştırmak tebliği gösterir. Soruda genel bir övgü yerine davranışla en doğrudan ilgili kavramı seç.' }
    ], memory: 'İstişare danışır; tebliğ bildirir; tebyin açıklar.',
    question: { stem: 'Hz. Muhammed’in bir toplumsal karar öncesinde arkadaşlarının görüşlerini alması hangi ilkeyi örneklendirir?', options: ['İstişare', 'İsraf', 'Taklit', 'Gıybet'], answer: 0, explanation: 'Karar verme sürecinde başkalarının bilgi ve görüşlerine başvurmak istişaredir.' },
    cards: [{ front: 'Tebliğ ile tebyin farkı?', back: 'Tebliğ bildirme; tebyin açıklamadır.' }, { front: 'İstişare?', back: 'Bir konuda karar vermeden önce danışıp görüş alma.' }],
    source: { title: 'MEB: Hz. Muhammed’in örnek davranışları', url: 'https://img.eba.gov.tr/307/0ee/869/099/7b3/0b4/3c6/941/b85/720/798/185/a9f/9a8/003/3070ee8690997b30b43c6941b85720798185a9f9a8003.pdf?name=HZ.+MUHAMMED%27%C4%B0N+HAYATINDAN+%C3%96RNEK+DAVRANI%C5%9ELAR+%C3%9CN%C4%B0TES%C4%B0+%C3%96ZET%C4%B0.pdf' }
  },
  {
    id: 'din-06', subject: 'din', title: 'Din ve hayat: sorumluluk alanları', unit: 'Din ve hayat', minutes: 5,
    tags: ['sosyal adalet', 'çevre', 'dayanışma'], summary: 'Din kültüründe sorumluluk, bireysel ibadetin yanında toplum ve çevreyle ilişkileri de kapsar.',
    visual: { type: 'layers', nodes: [
      { label: 'Birey ve aile', detail: 'Sevgi, saygı, bakım ve sorumluluk.' },
      { label: 'Toplum', detail: 'Dayanışma ve hakların korunması.' },
      { label: 'Ekonomi', detail: 'Dürüst kazanç, paylaşım ve adalet.' },
      { label: 'Çevre', detail: 'Kaynakları koruma ve israftan kaçınma.' }
    ] },
    sections: [
      { title: 'İbadetin toplumsal yönü', text: 'Zekât ve yardımlaşma, bireyler arası dayanışmayı güçlendirir. Soruda gelir paylaşımı ve ihtiyaç sahibinin gözetilmesi vurgulanıyorsa sosyal adalet kavramını düşün.' },
      { title: 'Emanet bilinci', text: 'Doğaya zarar vermemek, suyu ölçülü kullanmak ve başkasının hakkına saygı göstermek sorumluluk örnekleridir. Din ile kültür ilişkilidir; fakat her yerel gelenek doğrudan dinî hüküm sayılamaz.' }
    ], memory: 'İlişkiyi izle: kişi → aile → toplum → çevre.',
    question: { stem: 'Bir toplumda ihtiyaç sahiplerine düzenli destek verilmesi ve kaynakların adil paylaşılması öncelikle hangi kavramla ilişkilidir?', options: ['Taassup', 'Sosyal adalet', 'Gösteriş', 'Bireysel beğeni'], answer: 1, explanation: 'Hakların ve temel ihtiyaçların gözetildiği paylaşım sosyal adaletle ilgilidir.' },
    cards: [{ front: 'Yardımlaşmanın toplumsal etkisi?', back: 'Dayanışmayı ve sosyal adaleti güçlendirmesi.' }, { front: 'Her gelenek dinî hüküm müdür?', back: 'Hayır. Kültürel uygulama ile dinî ilke ayırt edilmelidir.' }],
    source: { title: 'MEB: Din ve hayat ünitesi', url: 'https://dogm.eba.gov.tr/panel/upload/etkilesimli/kitap/DKB10/unite3/files/basic-html/page3.html' }
  },
  {
    id: 'din-07', subject: 'din', title: 'Din ile dinî yorum ayrımı', unit: 'İslam düşüncesinde yorumlar', minutes: 6,
    tags: ['mezhep', 'fıkıh', 'itikad', 'tasavvuf'], summary: 'Dinî ilkeler ile insanların bu ilkeleri anlama ve uygulama biçimlerini ayır.',
    visual: { type: 'compare', nodes: [
      { label: 'İtikadî yorum', detail: 'İnanç konularını açıklama; Maturidilik ve Eşarilik örnektir.' },
      { label: 'Fıkhî yorum', detail: 'İbadet ve uygulamaya ilişkin yorum; Hanefilik ve Şafiilik örnektir.' },
      { label: 'Tasavvufî yorum', detail: 'Ahlak, içtenlik ve manevi olgunlaşma üzerinde yoğunlaşır.' },
      { label: 'Farklılığın nedenleri', detail: 'İnsan, dil, çevre ve tarihsel şartlar yorumları etkiler.' }
    ] },
    sections: [
      { title: 'Mezhep ne demektir?', text: 'Mezhep, dinin anlaşılması ve yorumlanmasında oluşmuş düşünce ekolüdür. Yorum farklılığı yeni bir din ortaya çıktığı anlamına gelmez.' },
      { title: 'Soruda konu alanı', text: 'Bir uygulamanın nasıl yapılacağı tartışılıyorsa fıkhî; bir inanç meselesi açıklanıyorsa itikadî boyut öne çıkar. Farklı yorumları değerlendirirken tek bir tarihsel veya toplumsal nedene indirgememek gerekir.' }
    ], memory: 'İtikad: inanç. Fıkıh: uygulama. Tasavvuf: manevi olgunlaşma.',
    question: { stem: 'Hanefilik ve Şafiilik, İslam düşüncesindeki yorumların hangi alanına örnek gösterilir?', options: ['Bilimsel teori', 'Sanat akımı', 'Fıkhî yorum', 'Ayrı dinler'], answer: 2, explanation: 'Bu ekoller ibadetler ve uygulamaya ilişkin hükümleri ele alan fıkhî yorumlardır.' },
    cards: [{ front: 'Mezhep ayrı bir din midir?', back: 'Hayır. Dinin anlaşılması ve yorumlanmasında oluşmuş bir ekoldür.' }, { front: 'Maturidilik ile Hanefilik aynı yorum alanında mı?', back: 'Maturidilik itikadî, Hanefilik fıkhî yorum örneğidir.' }],
    source: { title: 'MEB: İslam düşüncesinde yorumlar', url: 'https://dogm.eba.gov.tr/panel/upload/etkilesimli/kitap/DKB10/unite5/files/basic-html/page8.html' }
  }
]);
