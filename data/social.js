/* Özgün TYT mikro dersleri. Sayfa bilgileri yerel kaynak dizinine yöneliktir. */
window.LESSONS = (window.LESSONS || []).concat([
  {
    id: 'tar-01', subject: 'tarih', title: 'Tarihçi nasıl düşünür?', unit: 'Tarih bilimi', minutes: 5,
    tags: ['kaynak', 'nesnellik', 'neden-sonuç'],
    summary: 'Tarih; insan topluluklarının geçmişteki faaliyetlerini yer ve zaman göstererek, kanıtlara ve neden-sonuç ilişkilerine dayanarak inceler.',
    visual: { type: 'flow', nodes: [
      { label: 'Soru', detail: 'Kim, nerede, ne zaman, hangi koşullarda? Önce araştırma problemi belirlenir.' },
      { label: 'Kanıt', detail: 'Kitabe, arşiv belgesi, para, yapı ve sözlü tanıklık gibi kaynaklar toplanır.' },
      { label: 'Eleştiri', detail: 'Kaynağın gerçekliği, oluştuğu ortam ve yazarın bakış açısı sorgulanır.' },
      { label: 'İlişki', detail: 'Olaylar yalnız sıralanmaz; nedenler ve sonuçlar kanıtlarla ilişkilendirilir.' },
      { label: 'Yorum', detail: 'Yeni belgeler mevcut açıklamaları değiştirebilir. Bir yorumun değeri dayandığı kanıttır.' }
    ] },
    sections: [
      { title: 'Olay ve olgu', text: 'Malazgirt Savaşı bir olaydır: belirli bir zamanda gerçekleşir. Anadolu’nun Türkleşmesi ise uzun süreye yayılan bir olgudur. Bir olgu, birden fazla olayın etkisiyle oluşabilir.' },
      { title: 'Soru çözerken', text: 'Geçmişi kendi döneminin koşullarıyla değerlendir. Döneme ait bir belge birinci el kaynaktır; o belgeden yararlanan sonraki bir araştırma ikinci eldir. Kaynak türü, kaynağın mutlaka tarafsız olduğu anlamına gelmez.' }
    ],
    memory: 'Kanıt → eleştiri → bağlam → gerekçeli yorum.',
    question: { stem: 'Bir tarihçinin yeni bulunan bir belge üzerine önceki görüşünü değiştirmesi en doğrudan neyi gösterir?', options: ['Tarihte yer bilgisinin önemsizliğini', 'Tarih bilgisinin yeni kanıtlarla gelişebildiğini', 'Bütün kaynakların aynı görüşü taşıdığını', 'Tarihsel olayların deneyle tekrarlandığını'], answer: 1, explanation: 'Yeni kanıt mevcut yorumu değiştirebilir. Bu, tarih araştırmasının kanıta dayandığını gösterir; tarihsel olaylar laboratuvarda tekrarlanamaz.' },
    cards: [{ front: 'Olay ile olgunun farkı?', back: 'Olay belirli yer ve zamanda gerçekleşir; olgu uzun sürede oluşan genel değişimdir.' }, { front: 'Birinci el kaynak ne demek?', back: 'İncelenen döneme ait doğrudan belge, kalıntı veya tanıklık.' }],
    source: { book: 'TYT-tar', page: 9 }
  },
  {
    id: 'tar-02', subject: 'tarih', title: 'Zamanı ve takvimleri yerleştir', unit: 'Zamanın taksimi', minutes: 4,
    tags: ['yüzyıl', 'takvim', 'kronoloji'],
    summary: 'Kronoloji olayların zaman sırasını kurar. Takvimler başlangıç kabul edilen olaya ve kullanılan gök hareketine göre değişir.',
    visual: { type: 'timeline', nodes: [
      { label: 'MÖ', detail: 'Milattan önce sıfıra yaklaşıldıkça tarihler günümüze yaklaşır: MÖ 200, MÖ 500’den sonradır.' },
      { label: 'Milat', detail: 'MÖ 1’i MS 1 izler. Tarih hesabında sıfır yılı bulunmaz.' },
      { label: 'MS', detail: 'Milattan sonra yıl sayısı büyüdükçe günümüze yaklaşılır.' },
      { label: 'Yüzyıl', detail: '1–100 birinci, 101–200 ikinci yüzyıldır. 1453, 15. yüzyıldadır; 1900, 19. yüzyıldadır.' }
    ] },
    sections: [
      { title: 'Güneş ve ay yılı', text: 'Güneş yılı Dünya’nın Güneş çevresindeki dolanımına, ay yılı Ay’ın evrelerinin döngüsüne dayanır. Hicri takvim ay yılı; Miladi takvim güneş yılı esaslıdır. Hicri takvimin başlangıç olayı hicrettir.' },
      { title: 'Çağlara ayırma', text: 'Yazının kullanımı tarih öncesi ile tarihî çağların ayrımında ölçüt alınır. Ancak yazı her toplumda aynı anda başlamamıştır. Çağ sınırları bütün toplumların aynı gelişim çizgisini izlediğini göstermez.' }
    ],
    memory: 'Yüzyıl hesabı: tam yüzleri ayrı düşün; 1900 XIX, 1901 XX.',
    question: { stem: 'Aşağıdaki tarihlerden hangisi diğerlerinden daha eskidir?', options: ['MÖ 120', 'MS 80', 'MÖ 450', 'MS 450'], answer: 2, explanation: 'Milattan önce yıl sayısı büyüdükçe geçmişe gidilir. Bu nedenle MÖ 450 en eski tarihtir.' },
    cards: [{ front: '1900 ve 1901 hangi yüzyıllar?', back: '1900: 19. yüzyıl. 1901: 20. yüzyıl.' }, { front: 'Hicri takvimin yılı ve başlangıcı?', back: 'Ay yılı esaslıdır; başlangıç hicrettir.' }],
    source: { book: 'TYT-tar', page: 12 }
  },
  {
    id: 'tar-03', subject: 'tarih', title: 'Bozkırdan devlete: ilk Türkler', unit: 'İlk Türk devletleri', minutes: 6,
    tags: ['kut', 'töre', 'kurultay', 'göç'],
    summary: 'Bozkırın yaşam koşulları, konargöçer hayvancılık ve askerî hareketlilikle; Türk devlet geleneği ise kut, töre ve kurultayla birlikte düşünülür.',
    visual: { type: 'flow', nodes: [
      { label: 'Coğrafya', detail: 'Geniş otlaklar ve sert karasal iklim, hayvan sürülerine bağlı mevsimlik hareketleri destekledi.' },
      { label: 'Toplum', detail: 'Oguş → urug → boy → budun → il. Boyların bir araya gelmesi siyasi teşkilatlanmayı güçlendirdi.' },
      { label: 'Yönetim', detail: 'Kut, yönetme yetkisinin Gök Tanrı’dan geldiği inancıdır. Kurultay devlet meselelerinin görüşüldüğü meclistir.' },
      { label: 'Hukuk', detail: 'Töre, toplumsal ve siyasi yaşamı düzenleyen kurallardır; hükümdar da töreye uymakla yükümlüdür.' },
      { label: 'Kültür', detail: 'Kök Türkler yazıtlarıyla; Uygurlar yerleşik yaşamın, mimarinin ve yazılı kültürün gelişmesiyle hatırlanır.' }
    ] },
    sections: [
      { title: 'Karıştırılan iki sonuç', text: 'Kut anlayışı hükümdarlığı meşrulaştırır. Ülkenin hanedan üyelerinin ortak malı sayılması ise taht mücadelelerine zemin hazırlayabilir. Bu iki kavram birbirine bağlıdır ama aynı şey değildir.' },
      { title: 'Göçlerin etkisi', text: 'Göçler kültürel etkileşim, siyasi dengelerin değişmesi ve Türk tarihinin farklı coğrafyalarda incelenmesi gibi sonuçlar doğurmuştur. Kavimler Göçü Avrupa’daki siyasi ve toplumsal değişimleri hızlandıran süreçlerden biridir.' }
    ],
    memory: 'Kut = yetkinin kaynağı; töre = kurallar; kurultay = görüşme ortamı.',
    question: { stem: 'Eski Türklerde hükümdarın da töreye uymak zorunda olması hangi yargıyı destekler?', options: ['Yönetimin tamamen sınırsız olduğunu', 'Toplumsal kuralların yönetici için de bağlayıcı olduğunu', 'Sınıf ayrımının hukukla kesinleştiğini', 'Devlet işlerinin yalnız din adamlarınca yürütüldüğünü'], answer: 1, explanation: 'Törenin hükümdarı da bağlaması yöneticinin kuralların dışında olmadığını gösterir. Bu bilgi, tek başına modern hukuk devleti bulunduğu anlamına gelmez.' },
    cards: [{ front: 'Kut neyi açıklar?', back: 'Hükümdarın yönetme yetkisinin ilahî kaynağa dayandırılmasını.' }, { front: 'Uygurların yerleşik yaşamı hangi alanları geliştirdi?', back: 'Mimari, şehir yaşamı, sanat ve yazılı kültürü.' }],
    source: { book: 'TYT-tar', page: 14 }
  },
  {
    id: 'tar-04', subject: 'tarih', title: 'İslam tarihinin ana durakları', unit: 'İslam tarihi', minutes: 6,
    tags: ['hicret', 'Dört Halife', 'Emevi', 'Abbasi'],
    summary: 'İlk İslam tarihini tarihlerden önce toplumsal ve siyasi dönüşümleriyle öğren: topluluk, devletleşme, yönetim değişimi ve bilimsel etkileşim.',
    visual: { type: 'timeline', nodes: [
      { label: '622 · Hicret', detail: 'Mekke’den Medine’ye hicret, Müslümanların siyasi ve toplumsal teşkilatlanmasında önemli bir dönüm noktasıdır.' },
      { label: '632–661', detail: 'Dört Halife döneminde halifeler farklı seçim yöntemleriyle belirlendi; fetihler ve kurumsallaşma ilerledi.' },
      { label: '661–750', detail: 'Emevilerde halifelik hanedan içinde sürdü. Arap milliyetçiliği ve mevali uygulamaları toplumsal tepkiler doğurdu.' },
      { label: '750 sonrası', detail: 'Abbasiler döneminde Arap olmayan Müslümanların yönetimdeki rolü ve çeviri-bilim faaliyetleri gelişti.' }
    ] },
    sections: [
      { title: 'Siyasi ayrımı yakala', text: 'Emevilerle birlikte halifeliğin babadan oğula geçmesi, yönetimin saltanat niteliği kazanmasını gösterir. Fetih yapılması ise tek başına yönetimin hangi yolla el değiştirdiğini açıklamaz.' },
      { title: 'Bilim ve etkileşim', text: 'Abbasiler döneminde Bağdat önemli bir bilim ve kültür merkezi oldu. Farklı uygarlıkların eserlerinin çevrilmesi, bilimsel birikimin aktarılmasına ve yeni çalışmaların gelişmesine katkı sağladı.' }
    ],
    memory: 'Hicret → teşkilatlanma; Emevi → hanedan; Abbasi → bilim ve etkileşim.',
    question: { stem: 'Emevilerde halifeliğin hanedan üyeleri arasında babadan oğula geçmesi hangi değişimin kanıtıdır?', options: ['Yönetimin saltanata dönüşmesinin', 'Siyasi birliğin tamamen ortadan kalkmasının', 'Seçim sisteminin yaygınlaşmasının', 'Bütün toplumsal ayrımların bitmesinin'], answer: 0, explanation: 'Yönetim yetkisinin bir hanedan içinde miras yoluyla aktarılması saltanatın temel göstergesidir.' },
    cards: [{ front: '622’deki dönüm noktası?', back: 'Hicret: Mekke’den Medine’ye göç.' }, { front: 'Abbasilerde çeviri faaliyetlerinin önemi?', back: 'Farklı uygarlıkların bilimsel birikiminin aktarılması ve geliştirilmesi.' }],
    source: { book: 'TYT-tar', page: 28 }
  },
  {
    id: 'tar-05', subject: 'tarih', title: 'Türk-İslam sentezini çöz', unit: 'Türk-İslam devletleri', minutes: 5,
    tags: ['Talas', 'Karahanlı', 'Selçuklu', 'ikta'],
    summary: 'Türklerin İslamiyet’i kabulü tek bir savaşla tamamlanan olay değil, ticaret, siyasi ilişkiler ve kültürel yakınlaşmayla gelişen uzun bir süreçtir.',
    visual: { type: 'flow', nodes: [
      { label: '751 · Talas', detail: 'Türkler ile Abbasiler arasındaki yakınlaşmayı güçlendirdi; toplu kabulün tek veya anlık nedeni değildir.' },
      { label: 'Karahanlılar', detail: 'İslamiyet’i kabul eden ilk Türk devletlerinden biridir. Türkçe ve Türk kültür geleneği güçlü biçimde korundu.' },
      { label: 'Gazneliler', detail: 'Hindistan’a yapılan seferler, İslamiyet’in bu bölgede yayılmasına katkı sağladı.' },
      { label: 'Büyük Selçuklu', detail: '1040 Dandanakan siyasi güçlenmenin; 1071 Malazgirt Anadolu’ya yönelişin önemli eşiklerindendir.' },
      { label: 'Kurumlar', detail: 'Medrese eğitimde; ikta askerî ve ekonomik düzende; kervansaray ticarette işlev üstlendi.' }
    ] },
    sections: [
      { title: 'Süreklilik ve değişim', text: 'Türk-İslam devletlerinde eski Türk yönetim gelenekleri İslami kurumlarla birlikte yaşadı. Kut anlayışı devam ederken sultan, medrese ve vezirlik gibi kavram ve kurumlar da belirginleşti.' },
      { title: 'İkta mantığı', text: 'Belirli arazilerin vergi gelirinin hizmet karşılığında görevlilere bırakılması, asker yetiştirilmesi ve üretimin devamı için kullanıldı. Bu uygulama toprağın özel mülk olarak bütünüyle devredilmesi demek değildir.' }
    ],
    memory: 'İkta: toprak geliri → hizmet ve asker; medrese: eğitim.',
    question: { stem: 'İkta sahiplerinin vergi gelirleri karşılığında asker yetiştirmesi hangi iki alan arasında doğrudan ilişki kurar?', options: ['Sanat ve diplomasi', 'Ekonomi ve askerî teşkilat', 'Edebiyat ve hukuk', 'Din ve denizcilik'], answer: 1, explanation: 'Vergi geliri ekonomik kaynaktır; bu gelirle asker yetiştirilmesi askerî teşkilatın finansmanıyla ilgilidir.' },
    cards: [{ front: 'Talas’ın İslamlaşmadaki yeri?', back: 'Yakınlaşmayı hızlandıran bir etken; bütün Türklerin aniden Müslüman olması değildir.' }, { front: '1040 Dandanakan hangi devlet için dönüm noktası?', back: 'Büyük Selçuklu Devleti.' }],
    source: { book: 'TYT-tar', page: 38 }
  },
  {
    id: 'tar-06', subject: 'tarih', title: 'Anadolu’nun Türkleşme yolu', unit: 'Türkiye tarihi', minutes: 5,
    tags: ['Malazgirt', 'Miryokefalon', 'Kösedağ', 'ticaret'],
    summary: 'Anadolu’nun Türkleşmesi askerî başarıların yanında yerleşme, üretim, ticaret ve kültürel faaliyetlerle kalıcı hâle geldi.',
    visual: { type: 'timeline', nodes: [
      { label: '1071', detail: 'Malazgirt zaferi, Anadolu’ya yönelik Türk göçlerini ve fetihlerini hızlandırdı.' },
      { label: 'İlk beylikler', detail: 'Saltuklu, Mengücekli, Danişmentli ve Artuklu gibi beylikler Anadolu’da Türk-İslam kültürünü geliştirdi.' },
      { label: '1176', detail: 'Miryokefalon, Bizans’ın Türkleri Anadolu’dan çıkarma umutlarını büyük ölçüde zayıflattı.' },
      { label: 'Ticaret ağı', detail: 'Türkiye Selçukluları kervansaraylar, limanlar ve güvenlik tedbirleriyle ticareti destekledi.' },
      { label: '1243', detail: 'Kösedağ yenilgisi Moğol baskısını artırdı; merkezî güç zayıflarken yeni beylikler ortaya çıktı.' }
    ] },
    sections: [
      { title: 'Savaş ve yerleşme', text: 'Bir bölgenin fethedilmesi ile kültürel yapısının zamanla değişmesi aynı aşama değildir. Cami, medrese, köprü, kervansaray ve yerleşmeler kalıcılığı destekleyen göstergelerdir.' },
      { title: 'Ticaretten çıkarım', text: 'Kervansaray inşası ve tüccarların güvenliğinin sağlanması, ticari hayatı canlandırma amacıyla ilgilidir. Bunlar devletin yalnız askerî fetihlere önem vermediğini gösterir.' }
    ],
    memory: '1071 giriş hızlanır → 1176 kalıcılık güçlenir → 1243 merkez zayıflar.',
    question: { stem: 'Türkiye Selçuklularının kervansaray yaptırması ve liman şehirlerini ele geçirmesi öncelikle hangi amacı gösterir?', options: ['Göçebe hayatı yaygınlaştırmayı', 'Ticaretin gelişmesini sağlamayı', 'Hanedan üyelerini bağımsızlaştırmayı', 'Tarımsal üretimi sona erdirmeyi'], answer: 1, explanation: 'Kervansaraylar yol güvenliği ve konaklama sağlar; limanlar deniz ticaretine açılır. Ortak amaç ticaretin geliştirilmesidir.' },
    cards: [{ front: 'Miryokefalon hangi yılda?', back: '1176; Türklerin Anadolu’daki kalıcılığını güçlendirdi.' }, { front: '1243 Kösedağ’ın temel siyasi sonucu?', back: 'Moğol etkisinin artması ve Türkiye Selçuklu merkezî gücünün zayıflaması.' }],
    source: { book: 'TYT-tar', page: 47 }
  },
  {
    id: 'tar-07', subject: 'tarih', title: 'Osmanlı nasıl büyüdü?', unit: 'Osmanlı kuruluşu', minutes: 5,
    tags: ['iskân', 'istimâlet', 'merkezîleşme', 'Rumeli'],
    summary: 'Osmanlı’nın kuruluş ve büyümesini konum, siyasi koşullar, yönetim politikaları ve toplumsal destek birlikte açıklar.',
    visual: { type: 'flow', nodes: [
      { label: 'Uç konumu', detail: 'Bizans sınırındaki konum, batıya yönelen fetihler için elverişli bir ortam sağladı.' },
      { label: 'Siyasi ortam', detail: 'Bizans’taki iç sorunlar ve Balkanlardaki parçalı yapı genişlemeyi kolaylaştırdı.' },
      { label: 'İskân', detail: 'Fethedilen yerlere nüfus yerleştirmek güvenliği, üretimi ve kalıcı hâkimiyeti destekledi.' },
      { label: 'İstimâlet', detail: 'Yerel halka karşı uzlaştırıcı ve hoşgörülü tutum, yeni yönetime bağlılığı artırmayı hedefledi.' },
      { label: 'Teşkilatlanma', detail: 'Düzenli ordu, maliye ve idari kurumların gelişmesi büyüyen ülkenin yönetimini kolaylaştırdı.' }
    ] },
    sections: [
      { title: 'İki politikayı ayır', text: 'İskân nüfusun yerleştirilmesiyle, istimâlet yerel halkın yönetime kazanılmasıyla ilgilidir. Aynı bölgede uygulanabilirler; ikisi de fetihlerin kalıcılaşmasına hizmet eder.' },
      { title: 'Merkezî otorite', text: 'Anadolu Türk siyasi birliğini sağlama çabaları, farklı beyliklerin yönetimlerini bir merkezde toplama amacı taşır. Taht mücadeleleri ise bu otoriteyi zayıflatabilir.' }
    ],
    memory: 'İskân = yerleştir; istimâlet = benimset; teşkilat = yönet.',
    question: { stem: 'Rumeli’ye Türk ailelerinin yerleştirilerek boş arazilerin üretime açılması hangi politika ile doğrudan ilgilidir?', options: ['İskân', 'Kapitülasyon', 'Müsadere', 'Veraset'], answer: 0, explanation: 'Nüfus yerleştirme ve bölgede kalıcı yaşam kurma iskân politikasının temelidir.' },
    cards: [{ front: 'İstimâlet neyi amaçlar?', back: 'Fethedilen bölgelerde yerel halkı uzlaştırıcı tutumla yönetime kazanmayı.' }, { front: 'Anadolu Türk siyasi birliği ne demek?', back: 'Anadolu’daki Türk beyliklerinin siyasi olarak aynı yönetim altında toplanması.' }],
    source: { book: 'TYT-tar', page: 58 }
  },
  {
    id: 'tar-08', subject: 'tarih', title: 'Fetihlerden dünya siyasetine', unit: 'Osmanlı yükselişi', minutes: 5,
    tags: ['1453', '1517', 'denizcilik', 'egemenlik'],
    summary: 'Fetihleri yalnız yer adı olarak ezberleme: her genişleme, stratejik konum, ticaret, güvenlik veya siyasi otorite üzerinde etki oluşturur.',
    visual: { type: 'timeline', nodes: [
      { label: '1453 · İstanbul', detail: 'Bizans sona erdi; Osmanlı topraklarının Anadolu-Rumeli bağlantısı güçlendi ve başkent İstanbul oldu.' },
      { label: 'Karadeniz', detail: 'Kıyı bölgelerine ve Kırım’a yönelik gelişmeler Karadeniz ticaret yollarındaki Osmanlı etkisini artırdı.' },
      { label: '1517 · Mısır', detail: 'Memlûk Devleti sona erdi; Osmanlı’nın Doğu Akdeniz ve İslam dünyasındaki siyasi ağırlığı arttı.' },
      { label: 'Akdeniz', detail: 'Donanmanın güçlenmesi ticaret yolları, kıyı güvenliği ve deniz üstünlüğü için önem taşıdı.' }
    ] },
    sections: [
      { title: 'Fethin sonuçlarını sınıflandır', text: 'Bir devletin sona ermesi siyasi; bir ticaret yolunun denetimi ekonomik; kültürel merkezlerin el değiştirmesi kültürel sonuçtur. Aynı fetih birden fazla alana etki edebilir.' },
      { title: 'Kapitülasyon mantığı', text: 'Yabancı tüccarlara verilen ticari ve hukuki ayrıcalıklar, ilk dönemlerde ticareti ve diplomatik ilişkileri desteklemek için kullanıldı. Güç dengeleri değiştikçe bu ayrıcalıkların etkileri de değişti.' }
    ],
    memory: 'Fetih sorusunda yer → strateji → sonuç bağlantısını kur.',
    question: { stem: 'İstanbul’un fethiyle Osmanlı’nın Anadolu ve Rumeli toprakları arasındaki bağlantının güçlenmesi öncelikle hangi sonuçla ilişkilidir?', options: ['Ülke bütünlüğünün güçlenmesi', 'Saltanatın kaldırılması', 'Sanayi üretiminin başlaması', 'Tüm deniz ticaretinin sona ermesi'], answer: 0, explanation: 'İki ana bölge arasındaki bağlantının güçlenmesi, ulaşım ve savunmayı da kolaylaştıran siyasi-stratejik bir bütünlük sağlar.' },
    cards: [{ front: '1453’te sona eren devlet?', back: 'Bizans İmparatorluğu.' }, { front: 'Deniz hâkimiyeti neden önemlidir?', back: 'Ticaret yolları, kıyı güvenliği ve stratejik ulaşım üzerinde etki kurmayı sağlar.' }],
    source: { book: 'TYT-tar', page: 73 }
  },
  {
    id: 'tar-09', subject: 'tarih', title: 'Osmanlı kurumlarının iş bölümü', unit: 'Osmanlı kültür ve ekonomi', minutes: 5,
    tags: ['tımar', 'lonca', 'vakıf', 'millet sistemi'],
    summary: 'Kurumları, çözdükleri ihtiyaçla eşleştir: tarım-askerlik, üretim, sosyal hizmet ve toplumun yönetimi.',
    visual: { type: 'compare', nodes: [
      { label: 'Tımar', detail: 'Belirli toprakların vergi geliri hizmet karşılığında bırakılır; üretim ve asker yetiştirme desteklenir.' },
      { label: 'Lonca', detail: 'Esnaf ve zanaatkârları örgütler; mesleki eğitim, üretim niteliği ve dayanışmada rol alır.' },
      { label: 'Vakıf', detail: 'Ayrılan gelirlerle eğitim, sağlık, ibadet ve sosyal yardım gibi hizmetlerin sürmesini sağlar.' },
      { label: 'Millet sistemi', detail: 'Gayrimüslim toplulukların din ve mezhep esaslı örgütlenmesidir; modern ulus kavramıyla aynı değildir.' }
    ] },
    sections: [
      { title: 'Mülkiyet ve gelir ayrımı', text: 'Tımar sisteminde bırakılan şey temelde vergi toplama hakkıdır. Tımar sahibi toprağın mutlak özel mülkiyetini edinmiş sayılmaz. Köylünün üretiminin devamı hem maliye hem ordu açısından önemlidir.' },
      { title: 'Kurumdan sonuca', text: 'Darüşşifa yaptıran vakıf sosyal ve sağlık hizmeti sunar. Usta-çırak yetiştiren lonca mesleki eğitim sağlar. Sorudaki faaliyet hangi ihtiyaca cevap veriyorsa kurumun işlevini oradan bul.' }
    ],
    memory: 'Tımar → asker; lonca → meslek; vakıf → hizmet; millet → dinî cemaat.',
    question: { stem: 'Bir esnaf teşkilatının çırak yetiştirmesi ve üretimde kaliteyi gözetmesi hangi kurumun işlevine örnektir?', options: ['Divanıhümayun', 'Lonca', 'Enderun', 'Tımar'], answer: 1, explanation: 'Loncalar zanaat ve esnaf örgütleridir; mesleki eğitim ve üretim düzeniyle ilgilenir.' },
    cards: [{ front: 'Tımarın ekonomi-ordu bağı?', back: 'Tarımsal vergi geliri hizmet ve asker yetiştirme için kullanılır.' }, { front: 'Vakıf hangi ihtiyaçlara cevap verir?', back: 'Eğitim, sağlık, altyapı ve sosyal yardım gibi toplumsal hizmetlere.' }],
    source: { book: 'TYT-tar', page: 91 }
  },
  {
    id: 'tar-10', subject: 'tarih', title: 'Avrupa’daki değişim alanları', unit: 'Yeni Çağ ve Yakın Çağ', minutes: 6,
    tags: ['keşif', 'Rönesans', 'Reform', 'sanayi', 'milliyetçilik'],
    summary: 'Avrupa’daki büyük değişimler farklı alanlarda doğdu ve birbirini etkiledi. Hepsini tek bir neden-sonuç çizgisine indirgemeden ortak bağlantıları gör.',
    visual: { type: 'compare', nodes: [
      { label: 'Rönesans', detail: 'Sanat, bilim ve düşüncede Antik Çağ birikimine ilgi ve insan merkezli yaklaşımlar gelişti.' },
      { label: 'Coğrafi Keşifler', detail: 'Yeni ticaret yolları ve sömürgecilik, ekonomik ve siyasi güç dengelerini değiştirdi.' },
      { label: 'Reform', detail: 'Katolik Kilisesi’ne yönelik eleştiriler Batı Hristiyanlığında yeni mezheplerin ortaya çıkmasına yol açtı.' },
      { label: 'Sanayi Devrimi', detail: 'Makineleşme üretimi artırdı; ham madde ve pazar arayışı, kentleşme ve işçi sınıfı belirginleşti.' },
      { label: 'Fransız İhtilali', detail: 'Ulusal egemenlik, eşitlik ve milliyetçilik fikirleri yaygınlaştı; çok uluslu devletler etkilendi.' }
    ] },
    sections: [
      { title: 'Osmanlı’ya ekonomik etki', text: 'Yeni deniz yolları eski ticaret güzergâhlarının göreli önemini azalttı. Sanayi üretimi karşısında el emeğine dayanan üretim zorlandı; dış rekabet ekonomik yapıyı etkiledi.' },
      { title: 'Osmanlı’ya siyasi etki', text: 'Milliyetçilik, farklı etnik toplulukları barındıran imparatorluklarda bağımsızlık hareketlerini besledi. Bu etkiyi sanayileşmenin üretim tekniğiyle ilgili sonuçlarından ayır.' }
    ],
    memory: 'Keşif = yol; Rönesans = düşünce/sanat; Reform = din; Sanayi = üretim; İhtilal = siyasi fikir.',
    question: { stem: 'Çok uluslu imparatorluklarda etnik grupların bağımsızlık taleplerinin güçlenmesi en doğrudan hangi düşüncenin yayılmasıyla ilgilidir?', options: ['Merkantilizm', 'Milliyetçilik', 'Skolastik düşünce', 'Mutlak monarşi'], answer: 1, explanation: 'Milliyetçilik, ulusların kendi siyasi yapılarını kurma taleplerini güçlendirdi. Ham madde ve pazar arayışı ise Sanayi Devrimi’nin ekonomik boyutudur.' },
    cards: [{ front: 'Reform ile Rönesans ayrımı?', back: 'Reform dinî; Rönesans sanat, bilim ve düşünce alanlarında dönüşümdür.' }, { front: 'Sanayi Devrimi’nin dış ekonomik ihtiyacı?', back: 'Üretim için ham madde ve üretilen mallar için pazar.' }],
    source: { book: 'TYT-tar', page: 103 }
  },
  {
    id: 'tar-11', subject: 'tarih', title: 'Osmanlı’da haklar ve anayasa', unit: 'Demokratikleşme', minutes: 6,
    tags: ['Tanzimat', 'Islahat', 'Kanun-i Esasi', 'meşrutiyet'],
    summary: 'Yenileşme hareketlerini yönetimin yetkisi, kişi hakları, hukuki eşitlik ve temsil boyutlarıyla birbirinden ayır.',
    visual: { type: 'timeline', nodes: [
      { label: '1808', detail: 'Sened-i İttifak: merkez ile ayanlar arasındaki uzlaşma, padişahın yetkileri bakımından bir sınırlanma göstergesidir.' },
      { label: '1839', detail: 'Tanzimat Fermanı: can, mal ve namus güvenliği; vergi ve askerlikte düzenleme, hukuka bağlılık.' },
      { label: '1856', detail: 'Islahat Fermanı: özellikle gayrimüslimlerin haklarını ve hukuki eşitliği geliştirmeye yönelik düzenlemeler.' },
      { label: '1876', detail: 'Kanun-i Esasi ve I. Meşrutiyet: anayasa ve meclis; halk temsilcilerinin yönetime katılması.' },
      { label: '1908', detail: 'II. Meşrutiyet: anayasal yönetimin yeniden yürürlüğe girmesi; 1909 değişiklikleriyle meclisin güçlenmesi.' }
    ] },
    sections: [
      { title: 'Her yenilik demokrasi değildir', text: 'Yeni bir askerî okul açılması çağdaşlaşmadır; halkın yönetime katılması ise temsil ve demokratikleşme boyutudur. Soruda meclis, seçim veya anayasa aranıyorsa siyasi katılım üzerinde dur.' },
      { title: 'Hakların güvencesi', text: 'Tanzimat padişahın ilan ettiği bir fermandır. Kanun-i Esasi ise anayasadır. Meşrutiyette hükümdar devam eder; meclisin açılması tek başına saltanatın kaldırıldığı anlamına gelmez.' }
    ],
    memory: '1839 güvence → 1856 eşitlik → 1876 anayasa ve meclis.',
    question: { stem: 'Osmanlı’da halkın seçtiği temsilcilerin mecliste yer alması hangi gelişmenin doğrudan göstergesidir?', options: ['Yönetimin halk katılımına açılmasının', 'Saltanatın tamamen kaldırılmasının', 'Bütün ekonomik ayrıcalıkların bitmesinin', 'Ülkenin federal yönetime geçmesinin'], answer: 0, explanation: 'Seçilmiş temsilciler yönetime katılımı gösterir. Meşrutiyet döneminde saltanat sürmüştür.' },
    cards: [{ front: 'İlk Osmanlı anayasası?', back: '1876 Kanun-i Esasi.' }, { front: 'Tanzimat ve Islahat’ın tarihleri?', back: 'Tanzimat 1839; Islahat 1856.' }],
    source: { book: 'TYT-tar', page: 126 }
  },
  {
    id: 'tar-12', subject: 'tarih', title: 'I. Dünya Savaşı: cepheden ateşkese', unit: 'XX. yüzyıl başları', minutes: 6,
    tags: ['cepheler', 'Mondros', 'Wilson', 'işgal'],
    summary: 'Savaşın nedenlerini, Osmanlı’nın cephelerini ve Mondros sonrasında oluşan ortamı ayrı katmanlar olarak öğren.',
    visual: { type: 'layers', nodes: [
      { label: 'Küresel nedenler', detail: 'Sömürge ve pazar rekabeti, silahlanma, bloklaşma ve milliyetçilik savaş ortamını hazırladı.' },
      { label: 'Taarruz cepheleri', detail: 'Kafkas ve Kanal cepheleri, Osmanlı’nın ilerleme hedefiyle harekete geçtiği cephelerdir.' },
      { label: 'Savunma cepheleri', detail: 'Çanakkale, Irak, Hicaz-Yemen ve Suriye-Filistin cepheleri savunma mücadelesiyle öne çıkar.' },
      { label: 'Mondros · 1918', detail: 'Ordunun terhisi, ulaşım ve haberleşme üzerindeki denetim ve işgale açık maddeler direniş ihtiyacını artırdı.' },
      { label: 'Millî tepki', detail: 'İşgaller karşısında yerel direniş, müdafaa-i hukuk cemiyetleri ve Kuvayımilliye oluştu.' }
    ] },
    sections: [
      { title: 'Neden ile tetikleyici', text: 'Saraybosna suikastı savaşın başlamasını tetikledi. Ancak bloklaşma ve ekonomik rekabet gibi uzun vadeli nedenlerle aynı şey değildir. Sorudaki olay ile ortamı ayır.' },
      { title: 'Çanakkale’den çıkarım', text: 'İtilaf Devletleri İstanbul’a ulaşarak Osmanlı’yı savaş dışına çıkarma ve Rusya’ya yardım götürme hedeflerine ulaşamadı. Bu başarı savaşın tamamının Osmanlı lehine bittiği anlamına gelmez.' }
    ],
    memory: 'Nedenler ≠ kıvılcım; cephe başarısı ≠ savaşın genel sonucu.',
    question: { stem: 'Mondros Ateşkesi’nde ordunun büyük bölümünün terhis edilmesi, işgaller karşısında hangi sonucu doğrudan kolaylaştırmıştır?', options: ['Osmanlı’nın savunma gücünün zayıflamasını', 'Siyasi bağımsızlığın güçlenmesini', 'Savaş üretiminin artmasını', 'Bütün sınırların güvenceye alınmasını'], answer: 0, explanation: 'Askerlerin dağıtılması ve silahlı gücün azaltılması savunma imkânını zayıflatır; işgallere karşı düzenli direnişi güçleştirir.' },
    cards: [{ front: 'Mondros hangi yılda?', back: '1918.' }, { front: 'Taarruz cephelerine iki örnek?', back: 'Kafkas ve Kanal.' }],
    source: { book: 'TYT-tar', page: 149 }
  },
  {
    id: 'tar-13', subject: 'tarih', title: 'Millî Mücadele’nin karar zinciri', unit: 'Millî Mücadele', minutes: 7,
    tags: ['Amasya', 'kongreler', 'TBMM', 'Lozan'],
    summary: 'Millî Mücadele, yerel direnişin ortak program ve merkezî yönetim altında birleşerek bağımsızlık mücadelesine dönüşmesidir.',
    visual: { type: 'timeline', nodes: [
      { label: '1919 · Amasya', detail: 'Milletin bağımsızlığını yine milletin azim ve kararı kurtaracaktır: mücadelede millî iradenin esas alınması.' },
      { label: '1919 · Kongreler', detail: 'Erzurum’da bütünlük ve millî irade vurgulandı; Sivas’ta millî cemiyetler tek çatı altında birleştirildi.' },
      { label: '23 Nisan 1920', detail: 'TBMM açıldı. Mücadelenin meşru ve merkezî karar organı oluştu.' },
      { label: '1921', detail: 'İnönü savaşları, Kütahya-Eskişehir ve Sakarya; düzenli ordunun kurulması ve savunmanın güçlenmesi.' },
      { label: '1922', detail: 'Büyük Taarruz askerî sonucu; Mudanya Ateşkesi diplomatik sürece geçişi temsil eder.' },
      { label: '1923 · Lozan', detail: 'Yeni Türk devletinin bağımsızlığı uluslararası düzeyde kabul edildi; kapitülasyonlar kaldırıldı.' }
    ] },
    sections: [
      { title: 'Bağımsızlık ve egemenlik', text: 'Bağımsızlık dış müdahaleye karşı özgür karar verebilmektir. Millî egemenlik ise yönetme yetkisinin millete ait olmasıdır. İşgale direnmek ilkine, TBMM’nin açılması ikincisine doğrudan örnektir.' },
      { title: 'Sevr ve Lozan', text: 'TBMM Sevr’i kabul etmedi. Askerî mücadele ve diplomasi sonunda Lozan imzalandı. Lozan’da çözülemeyen meselelerin bulunması bütün sorunların aynı anda sonuçlandığı iddiasını geçersiz kılar.' }
    ],
    memory: '1919 örgütlen → 1920 meclis → 1921 savun → 1922 taarruz → 1923 barış.',
    question: { stem: '“Milletin bağımsızlığını yine milletin azim ve kararı kurtaracaktır.” ifadesi mücadelede öncelikle hangi gücün esas alındığını gösterir?', options: ['Hanedan iradesinin', 'Yabancı devlet desteğinin', 'Millî iradenin', 'Bölgesel ayrıcalıkların'], answer: 2, explanation: 'Kurtuluşun kaynağı milletin karar ve iradesi olarak belirtilmiştir; bu ifade millî iradeyi esas alır.' },
    cards: [{ front: 'Sivas Kongresi’nin örgütsel sonucu?', back: 'Millî cemiyetlerin Anadolu ve Rumeli Müdafaa-i Hukuk Cemiyeti çatısında birleşmesi.' }, { front: 'Egemenlik ve bağımsızlık farkı?', back: 'Egemenlik: yönetme yetkisinin sahibi. Bağımsızlık: dış baskı altında olmadan karar verebilme.' }],
    source: { book: 'TYT-tar', page: 157 }
  },
  {
    id: 'tar-14', subject: 'tarih', title: 'İlkeleri somut inkılaplarla eşleştir', unit: 'Atatürk ilkeleri ve inkılapları', minutes: 6,
    tags: ['cumhuriyetçilik', 'laiklik', 'halkçılık', 'devletçilik'],
    summary: 'Bir inkılap birden çok ilkeyle ilişkili olabilir. Sorudaki uygulamanın hangi yönünün vurgulandığını bularak eşleştir.',
    visual: { type: 'compare', nodes: [
      { label: 'Cumhuriyetçilik', detail: 'Yönetimde millî egemenlik ve temsil. Cumhuriyetin ilanı temel örnektir.' },
      { label: 'Milliyetçilik', detail: 'Ortak aidiyet, bağımsızlık ve millî birlik. Dil ve tarih çalışmalarını bu çerçevede değerlendir.' },
      { label: 'Halkçılık', detail: 'Kanun önünde eşitlik; ayrıcalıkların reddi. Kadınlara siyasi haklar verilmesiyle ilişkilidir.' },
      { label: 'Laiklik', detail: 'Din ve devlet işlerinin ayrılması, akıl ve bilim temelli kurumlar. Halifeliğin kaldırılması önemli örnektir.' },
      { label: 'Devletçilik', detail: 'Ekonomik kalkınmada özel girişimle birlikte devletin yatırım ve düzenleme rolü üstlenmesi.' },
      { label: 'İnkılapçılık', detail: 'Çağın gerektirdiği yeniliklere açık olma; dönüşümleri sürdürme ve geliştirme.' }
    ] },
    sections: [
      { title: 'Kurumları hatırla', text: '1924 Tevhid-i Tedrisat Kanunu eğitimde birliği hedefledi. 1926 Türk Medeni Kanunu medeni hukukta ve toplumsal yaşamda önemli değişiklikler getirdi. 1928 yeni Türk harflerinin kabulü okuryazarlık çalışmalarını destekledi.' },
      { title: 'Tek etikete sıkıştırma', text: 'Kadınlara seçme ve seçilme hakkı verilmesi eşitlik açısından halkçılıkla, yönetime katılım açısından cumhuriyetçilikle ilişkilidir. Sorudaki anahtar ifade hangi boyutun sorulduğunu belirler.' }
    ],
    memory: 'Kim yönetir? Cumhuriyetçilik. Eşitlik? Halkçılık. Ekonomide kamu yatırımı? Devletçilik.',
    question: { stem: 'Özel girişimin yetersiz kaldığı alanlarda devletin fabrikalar kurarak kalkınmayı desteklemesi hangi ilkeyle en doğrudan ilişkilidir?', options: ['Devletçilik', 'Milliyetçilik', 'Cumhuriyetçilik', 'Laiklik'], answer: 0, explanation: 'Ekonomide devletin yatırım yapması ve kalkınmada etkin rol üstlenmesi devletçilik ilkesinin somut bir uygulamasıdır.' },
    cards: [{ front: 'Tevhid-i Tedrisat’ın hedefi?', back: 'Eğitim ve öğretimde birlik.' }, { front: 'Bir inkılap birden çok ilkeyle ilişkili olabilir mi?', back: 'Evet. Soruda vurgulanan işlev ve sonuç esas alınır.' }],
    source: { book: 'TYT-tar', page: 177 }
  },
  {
    id: 'cog-01', subject: 'cografya', title: 'Coğrafyanın bakış açısını kur', unit: 'Doğa ve insan', minutes: 4,
    tags: ['dağılış', 'etkileşim', 'bölge'],
    summary: 'Coğrafya bir şeyin adını bilmekle yetinmez: nerede bulunduğunu, neden orada olduğunu ve insanla ilişkisini araştırır.',
    visual: { type: 'flow', nodes: [
      { label: 'Nerede?', detail: 'Dağılış: nüfus, yağış veya sanayi yeryüzünde nasıl yayılmıştır?' },
      { label: 'Neden orada?', detail: 'Nedensellik: yer şekilleri, iklim, ulaşım ve ekonomik koşulların etkisini sorgula.' },
      { label: 'Neyi etkiler?', detail: 'Karşılıklı etkileşim: doğa insanı etkiler; insan da baraj, yol ve tarımla çevreyi değiştirir.' },
      { label: 'Hangi bölge?', detail: 'Benzer özellikler doğal veya beşerî bölge oluşturabilir. Bölge sınırları kullanılan ölçüte göre değişir.' }
    ] },
    sections: [
      { title: 'Fiziki ve beşerî', text: 'İklim, yer şekilleri, sular ve toprak fiziki coğrafyanın; nüfus, yerleşme ve ekonomik faaliyetler beşerî coğrafyanın inceleme alanındadır. Bu alanlar birbirini etkiler.' },
      { title: 'Bölge sınıflaması', text: 'Bir yağış bölgesi doğal, sanayi bölgesi beşerî, bir hastanenin hizmet alanı işlevsel bölge örneğidir. Aynı yer, farklı ölçütlerle oluşturulmuş birden fazla bölgede bulunabilir.' }
    ],
    memory: 'Yer → neden → etkileşim. Haritada “nerede?” sorusunu unutma.',
    question: { stem: 'Bir fabrikanın çevresinde yeni yerleşmelerin gelişmesi coğrafyada öncelikle hangi ilişkiye örnektir?', options: ['Dünya’nın şeklinin etkisine', 'Ekonomik faaliyet ile yerleşme arasındaki etkileşime', 'Enlem ile gece süresi arasındaki ilişkiye', 'İklimlerin tamamen değişmez olmasına'], answer: 1, explanation: 'İş olanakları nüfusu çekebilir ve yerleşmeyi büyütebilir. Örnek beşerî unsurlar arasındaki etkileşimi anlatır.' },
    cards: [{ front: 'Fiziki coğrafyaya üç örnek?', back: 'İklim, yer şekilleri, su kaynakları.' }, { front: 'Bölge sınırı her ölçütte aynı mıdır?', back: 'Hayır; doğal, beşerî ve işlevsel ölçütlere göre değişir.' }],
    source: { book: 'TYT-cog', page: 9 }
  },
  {
    id: 'cog-02', subject: 'cografya', title: 'Dünya’nın hareketlerini ayır', unit: 'Dünya ve Güneş', minutes: 6,
    tags: ['günlük hareket', 'eksen eğikliği', 'mevsimler'],
    summary: 'Günlük hareket gece-gündüzü; yıllık hareket ile eksen eğikliği ise mevsimleri ve yıl içindeki gündüz süresi değişimini açıklar.',
    visual: { type: 'cycle', nodes: [
      { label: '21 Mart', detail: 'Ekinoks: Güneş ışınları Ekvator’a dik gelir; gece ve gündüz süreleri yaklaşık eşittir.' },
      { label: '21 Haziran', detail: 'Kuzey Yarım Küre’de en uzun gündüz; ışınlar Yengeç Dönencesi’ne dik gelir.' },
      { label: '23 Eylül', detail: 'Ekinoks: ışınlar yeniden Ekvator’a dik gelir; Kuzey Yarım Küre’de sonbahar başlar.' },
      { label: '21 Aralık', detail: 'Kuzey Yarım Küre’de en uzun gece; ışınlar Oğlak Dönencesi’ne dik gelir.' }
    ] },
    sections: [
      { title: 'İki hareket, iki sonuç', text: 'Dünya’nın kendi ekseni çevresinde dönmesi gün içinde gölge yönünün ve uzunluğunun değişmesine, yerel saat farklarına yol açar. Güneş çevresindeki dolanım eksen eğikliğiyle birlikte yıl içindeki değişimleri oluşturur.' },
      { title: 'Mevsimin nedeni', text: 'Mevsimler Güneş’e uzaklığın değişmesiyle açıklanmaz. Temel etken Güneş ışınlarının düşme açısı ve gündüz süresindeki değişimdir. İki yarım kürede aynı anda farklı mevsimler yaşanır.' }
    ],
    memory: 'Gün içinde değişim → dönüş. Yıl içinde değişim → eğiklik + dolanım.',
    question: { stem: 'Türkiye’de haziran ayında gündüzlerin aralık ayına göre daha uzun olmasının temel açıklaması hangisidir?', options: ['Dünya’nın günlük hareketinin yavaşlaması', 'Eksen eğikliği ve yıllık hareket', 'Türkiye’nin denizlere yakın olması', 'Güneş’in yalnız yazın doğması'], answer: 1, explanation: 'Eksen eğikliği ve yıllık hareket, yarım kürelerin yıl boyunca aydınlanma süresini değiştirir.' },
    cards: [{ front: 'Mevsimler Güneş’e uzaklıktan mı oluşur?', back: 'Hayır; eksen eğikliği ve yıllık hareketin düşme açısı ile gündüz süresini değiştirmesinden.' }, { front: 'Türkiye’de en uzun gündüz hangi tarihte?', back: 'Yaklaşık 21 Haziran.' }],
    source: { book: 'TYT-cog', page: 14 }
  },
  {
    id: 'cog-03', subject: 'cografya', title: 'Koordinat, saat ve Türkiye', unit: 'Konum', minutes: 6,
    tags: ['enlem', 'boylam', 'yerel saat', 'mutlak konum'],
    summary: 'Enlem kuzey-güney konumunu, boylam doğu-batı konumunu gösterir. Türkiye’nin mutlak ve göreceli konum sonuçlarını birbirinden ayır.',
    visual: { type: 'compare', nodes: [
      { label: 'Paralel → enlem', detail: 'Ekvator’a açısal uzaklık. Güneş’in düşme açısı, genel sıcaklık dağılışı ve gece-gündüz farkı üzerinde etkilidir.' },
      { label: 'Meridyen → boylam', detail: 'Başlangıç meridyenine açısal uzaklık. Yerel saat farklarıyla doğrudan ilişkilidir.' },
      { label: '1° → 4 dakika', detail: 'Dünya 24 saatte 360° döner. Doğuda Güneş daha erken doğar; doğunun yerel saati ileridir.' },
      { label: 'Türkiye', detail: 'Yaklaşık 36°–42° kuzey, 26°–45° doğu. Orta kuşakta bulunur; dört mevsim belirgindir.' },
      { label: 'Göreceli konum', detail: 'Denizlere, boğazlara, komşulara, ulaşım yollarına ve yükseltiye göre konumdur.' }
    ] },
    sections: [
      { title: 'Saat hesabı', text: 'Aralarında 10° boylam bulunan iki yerin yerel saat farkı 40 dakikadır. Ulusal saat ise ortak kullanılan hukuki saattir; her şehrin yerel saatiyle aynı olmak zorunda değildir.' },
      { title: 'Türkiye’de öğle gölgesi', text: 'Türkiye dönencelerin kuzeyindedir; yatay zemindeki dik bir çubuğa Güneş ışınları yıl içinde dik gelmez. Yerel öğle vaktinde gölge genel olarak kuzeye yönelir.' }
    ],
    memory: 'Enlem → açı ve kuşak; boylam → yerel saat. Doğu ileride.',
    question: { stem: '30° doğudaki bir merkezde yerel saat 12.00 iken 35° doğudaki merkezde yerel saat kaçtır?', options: ['11.40', '12.05', '12.20', '13.00'], answer: 2, explanation: 'Boylam farkı 5° × 4 dakika = 20 dakikadır. İkinci merkez doğuda olduğundan yerel saati ileridir: 12.20.' },
    cards: [{ front: '1° boylam farkı kaç dakika?', back: '4 dakika yerel saat farkı.' }, { front: 'Boğazların stratejik önemi hangi konumla ilgilidir?', back: 'Göreceli konumla.' }],
    source: { book: 'TYT-cog', page: 19 }
  },
  {
    id: 'cog-04', subject: 'cografya', title: 'Haritayı bir model olarak oku', unit: 'Harita bilgisi', minutes: 6,
    tags: ['ölçek', 'izohips', 'eğim', 'lejant'],
    summary: 'Harita gerçek alanın küçültülmüş ve sembollerle anlatılmış modelidir. Ölçek, lejant ve yükselti çizgileri bu modeli okumayı sağlar.',
    visual: { type: 'layers', nodes: [
      { label: 'Başlık ve lejant', detail: 'Başlık konuyu; lejant kullanılan renk ve sembollerin anlamını açıklar.' },
      { label: 'Büyük ölçek', detail: 'Payda küçük, ayrıntı fazla, gösterilen alan küçüktür. 1/25.000, 1/500.000’den büyük ölçeklidir.' },
      { label: 'Küçük ölçek', detail: 'Payda büyük, ayrıntı az, gösterilen alan geniştir. Aynı kâğıtta daha geniş bölge görünür.' },
      { label: 'İzohips', detail: 'Eş yükselti noktalarını birleştirir. Aynı haritada ardışık eğriler arasındaki yükselti farkı sabittir.' },
      { label: 'Çizgi aralığı', detail: 'İzohipslerin sık olduğu yamaç daha dik, seyrek olduğu yamaç daha az eğimlidir.' }
    ] },
    sections: [
      { title: 'Uzunluk hesabı', text: '1/100.000 ölçekli haritada 1 cm, gerçekte 100.000 cm yani 1 km’dir. Harita uzunluğunu payda ile çarparken birimleri aynı tut; sonuçta kilometreye dönüştür.' },
      { title: 'Renk ne anlatır?', text: 'Fiziki haritalarda renk basamakları yükseltiyi gösterir. Yeşil, tek başına ormanlık alan anlamına gelmez. Bir rengi yorumlamadan önce haritanın türüne ve lejantına bak.' }
    ],
    memory: 'Ölçek paydası küçülür → ayrıntı büyür. İzohips sıklaşır → eğim artar.',
    question: { stem: '1/200.000 ölçekli bir haritada iki nokta arası 3 cm ise gerçek kuş uçuşu uzaklık kaç kilometredir?', options: ['0,6', '3', '6', '60'], answer: 2, explanation: '3 × 200.000 = 600.000 cm. 100.000 cm = 1 km olduğuna göre uzaklık 6 km’dir.' },
    cards: [{ front: 'Büyük ölçekli harita daha çok mu ayrıntı verir?', back: 'Evet; daha dar alanı daha ayrıntılı gösterir.' }, { front: 'İzohipslerin sıklaşması ne gösterir?', back: 'Yamacın eğiminin artmasını.' }],
    source: { book: 'TYT-cog', page: 24 }
  },
  {
    id: 'cog-05', subject: 'cografya', title: 'Sıcaklığı değiştiren etkenler', unit: 'Atmosfer ve sıcaklık', minutes: 5,
    tags: ['iklim', 'hava durumu', 'yükselti', 'karasallık'],
    summary: 'Bir yerin sıcaklığını yalnız enlem açıklamaz. Yükselti, denize uzaklık, bakı, rüzgâr ve akıntılar dağılışı değiştirir.',
    visual: { type: 'compare', nodes: [
      { label: 'Enlem', detail: 'Güneş ışınlarının düşme açısı genel olarak Ekvator’dan kutuplara doğru küçülür.' },
      { label: 'Yükselti', detail: 'Troposferde yükseldikçe sıcaklık genel olarak azalır; aynı enlemdeki yüksek yer daha serin olabilir.' },
      { label: 'Denizellik', detail: 'Denizler geç ısınıp geç soğur; kıyılarda sıcaklık farkı genellikle iç kesimlerden azdır.' },
      { label: 'Bakı', detail: 'Yamacın Güneş’e dönüklüğüdür. Türkiye’de güney yamaçlar genel olarak daha fazla enerji alır.' },
      { label: 'Taşınan ısı', detail: 'Rüzgârlar ve okyanus akıntıları geldikleri yerin sıcaklık özelliklerini taşıyabilir.' }
    ] },
    sections: [
      { title: 'Hava ve iklim', text: '“Bugün yağmurlu” hava durumudur. “Yazları sıcak ve kurak” uzun yılların ortalama özelliklerini anlatan bir iklim ifadesidir. Tek bir aşırı sıcak gün iklimi tek başına tanımlamaz.' },
      { title: 'İki şehir karşılaştırması', text: 'Aynı enlemde bulunan kıyı ve iç kesim şehirlerinin sıcaklık farkını enlemle açıklayamazsın. Önce yükselti ve denize uzaklığı kontrol et. Sorunun verdiği ortak özellikleri ele.' }
    ],
    memory: 'Sıcaklık farkında önce ortak etkeni ele; sonra yükselti ve denizelliği ara.',
    question: { stem: 'Aynı enlemde ve benzer yükseltideki iki yerden kıyıda olanın yıllık sıcaklık farkının daha az olması hangi etkenle açıklanır?', options: ['Boylam', 'Denizellik', 'Eksen eğikliği', 'Günlük hareket'], answer: 1, explanation: 'Denizlerin geç ısınıp geç soğuması kıyılarda sıcaklığın daha dengeli değişmesini sağlar.' },
    cards: [{ front: 'Hava durumu ile iklim farkı?', back: 'Hava durumu kısa süreli; iklim uzun yılların genel atmosfer koşullarıdır.' }, { front: 'Bakı nedir?', back: 'Yamacın Güneş’e göre yönelimi ve enerji alma durumudur.' }],
    source: { book: 'TYT-cog', page: 32 }
  },
  {
    id: 'cog-06', subject: 'cografya', title: 'Hava yükselirse ne olur?', unit: 'Basınç, rüzgâr ve yağış', minutes: 6,
    tags: ['basınç', 'nem', 'yoğuşma', 'yağış'],
    summary: 'Yağış sorularının kilidi havanın neden yükseldiğidir. Yükselen hava genellikle soğur; yeterince nemliyse yoğuşma ve yağış oluşabilir.',
    visual: { type: 'flow', nodes: [
      { label: 'Isınma / yükselme', detail: 'Yüzeyden ısınan hava yükselerek termik alçak basınç oluşumuna katkı sağlar.' },
      { label: 'Soğuma', detail: 'Yükselen hava daha düşük basınç altında genişler ve soğur.' },
      { label: 'Bağıl nem artışı', detail: 'Nem miktarı değişmese bile sıcaklık azalınca bağıl nem artabilir.' },
      { label: 'Yoğuşma', detail: 'Doygunluğa ulaşan havada uygun koşullarda su buharı damlacık veya buz kristallerine dönüşür.' },
      { label: 'Yağış türü', detail: 'Dağ yamacı: orografik; güçlü yüzey ısınması: konveksiyonel; hava kütlelerinin karşılaşması: cephe yağışı.' }
    ] },
    sections: [
      { title: 'Rüzgârın yönü', text: 'Rüzgâr genel olarak yüksek basınçtan alçak basınca doğru oluşur. Basınç farkının artması rüzgâr hızını artırabilir. Yön üzerinde Dünya’nın dönüşü ve yer şekilleri de etkilidir.' },
      { title: 'Nem tuzağı', text: 'Mutlak nem havadaki su buharı miktarıdır. Bağıl nem ise havanın mevcut sıcaklığında doygunluğa ne kadar yakın olduğunu anlatır. Sıcak bir yerde mutlak nem fazla olsa da bağıl nem düşük olabilir.' }
    ],
    memory: 'Yüksel → soğu → doygunluğa yaklaş → uygun koşulda yağış.',
    question: { stem: 'Nemli havanın kıyıya paralel bir dağın yamacı boyunca yükselerek yağış bırakması hangi yağış türüdür?', options: ['Orografik', 'Konveksiyonel', 'Cephe', 'Çiy'], answer: 0, explanation: 'Havanın dağ engeli nedeniyle yükselmesi orografik yani yamaç yağışını oluşturur. Çiy ise su buharının soğuk yüzeyler üzerinde yoğuşmasıyla oluşur; dağ yamacında yükselerek oluşan yağış değildir.' },
    cards: [{ front: 'Rüzgârın genel basınç yönü?', back: 'Yüksek basınçtan alçak basınca.' }, { front: 'Hava soğuduğunda, nem miktarı sabitse bağıl nem?', back: 'Artar; hava doygunluğa yaklaşır.' }],
    source: { book: 'TYT-cog', page: 36 }
  },
  {
    id: 'cog-07', subject: 'cografya', title: 'İklim grafiğinden bitkiye', unit: 'İklimler', minutes: 6,
    tags: ['Akdeniz', 'Karadeniz', 'karasal', 'bitki örtüsü'],
    summary: 'İklimi, sıcaklığın yıllık gidişi ve yağışın mevsimlere dağılışıyla tanı. Bitki örtüsü bu koşulların sonucudur.',
    visual: { type: 'compare', nodes: [
      { label: 'Akdeniz', detail: 'Yazlar sıcak-kurak, kışlar ılık-yağışlı. Kızılçam ormanları ve tahrip sonrası maki yaygındır.' },
      { label: 'Karadeniz', detail: 'Her mevsim yağışlı, sıcaklık farkı görece az. Orman gelişimine uygun nemli koşullar vardır.' },
      { label: 'Karasal', detail: 'İç kesimlerde yıllık sıcaklık farkı büyür. Yağış ve sıcaklığa göre bozkır, çayır veya orman görülebilir.' },
      { label: 'Ekvatoral', detail: 'Yıl boyunca yüksek sıcaklık ve bol yağış. Geniş yapraklı yağmur ormanları.' },
      { label: 'Çöl', detail: 'Yağış çok az ve düzensiz; bitki örtüsü seyrektir. Günlük sıcaklık farkı çoğu yerde büyüktür.' }
    ] },
    sections: [
      { title: 'Grafik okuma sırası', text: 'Önce sıcaklığın en yüksek olduğu aylardan yarım küreyi düşün. Sonra yıllık sıcaklık farkını ve yağışın hangi mevsimde yoğunlaştığını oku. Yaz kuraklığı Akdeniz iklimini ayırt eden önemli ipucudur.' },
      { title: 'Türkiye’de çeşitlilik', text: 'Denize uzaklık, yükselti ve dağların uzanışı aynı enlemlerde farklı iklim koşulları oluşturur. Karadeniz’de dağların kıyıya paralel uzanması deniz etkisinin içeriye ulaşmasını sınırlar.' }
    ],
    memory: 'Yaz kurak, kış yağışlı → Akdeniz. Her mevsim yağış → Karadeniz.',
    question: { stem: 'Bir merkezde yaz aylarında yağış çok az, kışlar ılık ve yağışlıdır. Doğal bitki örtüsüyle birlikte en uygun eşleştirme hangisidir?', options: ['Ekvatoral – tundra', 'Akdeniz – maki', 'Çöl – yağmur ormanı', 'Kutup – bozkır'], answer: 1, explanation: 'Yaz kuraklığı ve ılık-yağışlı kış Akdeniz ikliminin temel özelliğidir; maki bu iklim koşullarına uyumlu bitki topluluğudur.' },
    cards: [{ front: 'Akdeniz ikliminde kurak mevsim?', back: 'Yaz.' }, { front: 'Türkiye’de kıyı ile iç kesimi ayıran önemli etken?', back: 'Dağların uzanışı, denize uzaklık ve yükselti.' }],
    source: { book: 'TYT-cog', page: 42 }
  },
  {
    id: 'cog-08', subject: 'cografya', title: 'İç kuvvetler ve kayaç döngüsü', unit: 'Yer şekilleri', minutes: 6,
    tags: ['tektonik', 'orojenez', 'volkanizma', 'kayaç'],
    summary: 'İç kuvvetler enerjisini yerin içinden alır. Levha hareketleri dağ oluşumu, deprem ve volkanizmayla; kayaçlar ise oluşum koşullarıyla ilişkilidir.',
    visual: { type: 'cycle', nodes: [
      { label: 'Magma', detail: 'Erimiş malzeme soğuyup katılaşırsa püskürük kayaçlar oluşur: granit, bazalt gibi.' },
      { label: 'Aşınma ve taşıma', detail: 'Yüzeydeki kayaçlar parçalanır; akarsu, rüzgâr ve buzullar malzemeyi taşır.' },
      { label: 'Birikme', detail: 'Tortullar sıkışıp çimentolanabilir. Kum taşı; kimyasal süreçle oluşan kalker gibi tortul kayaçlar vardır.' },
      { label: 'Başkalaşım', detail: 'Sıcaklık ve basınç etkisiyle yapı değişebilir. Kalker mermer, kömür grafit hâline dönüşebilir.' },
      { label: 'Erime', detail: 'Uygun derinlik ve sıcaklık koşullarında kayaçların erimesi magma oluşumuna katkı sağlar.' }
    ] },
    sections: [
      { title: 'İç kuvvetleri ayır', text: 'Orojenez dağ oluşumu, epirojenez geniş alanların yavaş yükselip alçalmasıdır. Volkanizma magma hareketleriyle; deprem biriken enerjinin ani boşalmasıyla ilişkilidir. Her dağ volkanik değildir.' },
      { title: 'Döngüyü doğru oku', text: 'Her kayaç bu aşamaların tümünü aynı sırayla geçmek zorunda değildir; kayaçlar farklı yollardan dönüşebilir. Türkiye’nin aktif levha kuşağında olması deprem tehlikesi ve genç yer şekilleriyle ilişkilidir. Fay hattının varlığı depremin tam zamanının bilindiği anlamına gelmez.' }
    ],
    memory: 'Püskürük → soğuma; tortul → birikme; başkalaşım → sıcaklık/basınç.',
    question: { stem: 'Kalkerin yüksek sıcaklık ve basınç altında mermere dönüşmesi hangi kayaç grubunun oluşumuna örnektir?', options: ['Dış püskürük', 'Başkalaşım', 'Kırıntılı tortul', 'İç püskürük'], answer: 1, explanation: 'Var olan kayaçların sıcaklık ve basınç etkisiyle yapı değiştirmesi başkalaşımdır.' },
    cards: [{ front: 'Orojenez nedir?', back: 'Dağ oluşumu.' }, { front: 'Granit, kalker, mermer sırasıyla hangi grup?', back: 'Püskürük, tortul, başkalaşım.' }],
    source: { book: 'TYT-cog', page: 60 }
  },
  {
    id: 'cog-09', subject: 'cografya', title: 'Dış kuvvet: hangi şekli kim yaptı?', unit: 'Yer şekilleri', minutes: 6,
    tags: ['akarsu', 'karst', 'buzul', 'rüzgâr', 'dalga'],
    summary: 'Bir yer şeklini tanımak için etkili kuvveti ve gerekli ortamı birlikte düşün. Dış kuvvetler aşındırır, taşır ve biriktirir.',
    visual: { type: 'compare', nodes: [
      { label: 'Akarsu', detail: 'Vadiler ve dev kazanı aşındırma; delta ve birikinti konisi biriktirme şekilleridir.' },
      { label: 'Karst', detail: 'Kolay çözünebilen kayaçlarda lapya, dolin, mağara; çözünmüş maddelerin çökelmesiyle traverten oluşabilir.' },
      { label: 'Buzul', detail: 'Kalıcı buz hareketi sirk ve tekne vadisi oluşturur; taşınan malzemenin birikimi morendir.' },
      { label: 'Rüzgâr', detail: 'Kurak, bitkisiz ve gevşek malzemeli alanlarda etkilidir. Mantar kaya aşındırma; kumul biriktirmedir.' },
      { label: 'Dalga ve akıntı', detail: 'Falez aşındırma; kıyı oku, kordonu ve tombolo biriktirmeyle gelişir.' }
    ] },
    sections: [
      { title: 'Ortamı kanıt yap', text: 'Buzul şekli için kalıcı buz, karst için çözünebilen kayaç gerekir. Bir yerde rüzgâr esmesi, orada rüzgârın en etkili şekillendirici olduğunu tek başına göstermez.' },
      { title: 'Delta koşulları', text: 'Akarsuyun taşıdığı alüvyonu kıyıda biriktirebilmesi gerekir. Güçlü dalga ve akıntılar birikimi uzaklaştırırsa delta gelişimi zorlaşır. Bu nedenle her akarsu ağzında delta bulunmaz.' }
    ],
    memory: 'Şekil → kuvvet → gerekli ortam. Mağara: çözünme; delta: birikme.',
    question: { stem: 'Kurak bir alandaki kumullar ile kıyıdaki falezin oluşumunda sırasıyla hangi kuvvetler etkilidir?', options: ['Buzul – akarsu', 'Rüzgâr – dalga', 'Akarsu – rüzgâr', 'Volkanizma – buzul'], answer: 1, explanation: 'Kumul rüzgârın taşıdığı malzemeyi biriktirmesiyle; falez dalgaların kıyıyı aşındırmasıyla gelişir.' },
    cards: [{ front: 'Tombolo nasıl oluşur?', back: 'Kıyı birikimiyle bir adanın karaya bağlanmasıyla.' }, { front: 'Karstın temel koşulu?', back: 'Kalker gibi çözünebilen kayaçların ve çözünmeyi sağlayan suyun varlığı.' }],
    source: { book: 'TYT-cog', page: 65 }
  },
  {
    id: 'cog-10', subject: 'cografya', title: 'Su, toprak ve bitki birbirine bağlı', unit: 'Doğal sistemler', minutes: 6,
    tags: ['su döngüsü', 'toprak', 'humus', 'bitki'],
    summary: 'Su döngüsü, toprak oluşumu ve bitki örtüsü aynı doğal sistemin parçalarıdır. İklim ve yer şekilleri üçünü de etkiler.',
    visual: { type: 'cycle', nodes: [
      { label: 'Buharlaşma', detail: 'Deniz, göl, akarsu ve toprak yüzeyinden su buharı atmosfere geçer; bitkiler de terlemeyle katkı verir.' },
      { label: 'Yoğuşma ve yağış', detail: 'Su buharı yoğunlaşır, uygun koşullarda yağışla yeryüzüne döner.' },
      { label: 'Akış ve sızma', detail: 'Suyun bir bölümü yüzeyden akar, bir bölümü zemine sızarak yer altı suyunu besler.' },
      { label: 'Toprak', detail: 'Ana kaya, iklim, canlılar, yer şekilleri ve zamanın etkisiyle oluşur. Her toprak aynı sürede gelişmez.' },
      { label: 'Bitki ve humus', detail: 'Bitki örtüsü toprağı korur; organik artıklar humus birikimine katkı sağlar. Toprak da bitkiye su ve mineral sunar.' }
    ] },
    sections: [
      { title: 'Toprak türlerini bağla', text: 'Zonal topraklar iklim ve bitki örtüsüyle, intrazonal topraklar ana kaya veya drenaj gibi yerel koşullarla öne çıkar. Azonal topraklar taşınmış malzeme üzerinde gelişir; alüvyal topraklar örnektir.' },
      { title: 'Su kaynağını değerlendir', text: 'Bir akarsuyun debisi kesitten geçen su miktarı, rejimi yıl içindeki akım düzenidir. Yağış ve kar erimeleri rejimi etkiler. Bir akarsuyun debisinin yüksek olması yıl boyunca düzenli aktığını tek başına göstermez.' }
    ],
    memory: 'Debi = miktar; rejim = yıl içindeki düzen. Bitki korur, toprak besler.',
    question: { stem: 'Akarsu tarafından taşınıp biriktirilen malzeme üzerinde oluşan alüvyal topraklar hangi grupta değerlendirilir?', options: ['Zonal', 'Azonal', 'Yalnız tundra', 'Yalnız laterit'], answer: 1, explanation: 'Taşınmış malzemeler üzerinde gelişen topraklar azonal gruptadır. Alüvyal topraklar akarsu birikimiyle ilişkilidir.' },
    cards: [{ front: 'Debi ile rejim farkı?', back: 'Debi su miktarı; rejim akımın yıl içindeki değişim düzenidir.' }, { front: 'Toprak oluşumunun beş etkeni?', back: 'Ana kaya, iklim, canlılar, yer şekilleri ve zaman.' }],
    source: { book: 'TYT-cog', page: 77 }
  },
  {
    id: 'cog-11', subject: 'cografya', title: 'Nüfus piramidini yorumla', unit: 'Nüfus ve yerleşme', minutes: 6,
    tags: ['yaş yapısı', 'nüfus yoğunluğu', 'yerleşme'],
    summary: 'Nüfus miktarı, dağılışı ve yaş yapısı farklı bilgilerdir. Piramitler bir toplumun yaş-cinsiyet yapısını; haritalar mekânsal dağılışını gösterir.',
    visual: { type: 'layers', nodes: [
      { label: 'Geniş taban', detail: 'Çocuk nüfus oranının yüksekliğini gösterir; genellikle yüksek doğum oranıyla ilişkilidir.' },
      { label: 'Daralan taban', detail: 'Son yıllarda doğumların azalmasına işaret edebilir. Tek başına toplam nüfusun hemen azaldığını göstermez.' },
      { label: 'Geniş üst kesim', detail: 'Yaşlı nüfus payının artmasını ve yaşam süresinin uzamasını düşündürür.' },
      { label: 'Orta yaş şişkinliği', detail: 'Geçmiş doğum dalgaları veya çalışma çağındaki göçlerle ilişkili olabilir; veriye göre değerlendirilir.' },
      { label: 'Dağılış', detail: 'İklim, su, yer şekilleri, tarım, sanayi ve ulaşım nüfusun nerede yoğunlaştığını etkiler.' }
    ] },
    sections: [
      { title: 'Yoğunluk çeşitleri', text: 'Aritmetik yoğunluk toplam nüfusun toplam yüz ölçümüne oranıdır. Bu ortalama, nüfusun ülke içinde her yere eşit dağıldığını göstermez. Dağlık ve kurak alanlarla kıyı ve sanayi merkezleri farklılaşabilir.' },
      { title: 'Yerleşme dokusu', text: 'Su kaynaklarının yaygın, arazinin engebeli olduğu koşullarda dağınık kırsal yerleşme gelişebilir. Suyun az ve arazinin uygun olduğu yerlerde toplu doku yaygınlaşabilir. Yerel ekonomik ve kültürel koşullar da etkilidir.' }
    ],
    memory: 'Taban = çocuk; orta = çalışma çağı; üst = yaşlı. Piramit yer haritası değildir.',
    question: { stem: 'Bir nüfus piramidinin tabanının önceki yıllara göre daralması öncelikle hangi gelişmeye işaret eder?', options: ['Doğumların azalmasına', 'Ülke yüz ölçümünün büyümesine', 'Bütün göçlerin durmasına', 'Yaşlı nüfusun sıfırlanmasına'], answer: 0, explanation: 'Piramidin tabanı küçük yaş gruplarını gösterir. Daralma, yeni doğan ve çocuk yaş gruplarının önceki gruplara göre küçüldüğünü gösterir.' },
    cards: [{ front: 'Aritmetik nüfus yoğunluğu formülü?', back: 'Toplam nüfus / toplam yüz ölçümü.' }, { front: 'Dar taban toplam nüfusun kesin azaldığını gösterir mi?', back: 'Hayır; yaş yapısı, ölüm ve göç birlikte değerlendirilmelidir.' }],
    source: { book: 'TYT-cog', page: 92 }
  },
  {
    id: 'cog-12', subject: 'cografya', title: 'Göçün itici ve çekici yönleri', unit: 'Göçler', minutes: 5,
    tags: ['iç göç', 'dış göç', 'doğal artış', 'kentleşme'],
    summary: 'Göçü çıkılan yerdeki itici koşullar ve gidilen yerdeki çekici koşullar birlikte açıklar. Göç, toplam nüfustan önce dağılışı ve yapıyı değiştirir.',
    visual: { type: 'flow', nodes: [
      { label: 'İtici neden', detail: 'İşsizlik, geçim sıkıntısı, afet, savaş veya hizmet yetersizliği göç kararını etkileyebilir.' },
      { label: 'Hareket', detail: 'Ülke içinde: iç göç. Ülkeler arasında: dış göç. Mevsimlik veya sürekli olabilir.' },
      { label: 'Çekici neden', detail: 'İş, eğitim, sağlık, güvenlik ve sosyal olanaklar hedef bölgeyi çekici kılabilir.' },
      { label: 'Sonuç', detail: 'Yaş-cinsiyet yapısı, iş gücü, konut ihtiyacı ve kent hizmetleri değişir.' },
      { label: 'Nüfus hesabı', detail: 'Gerçek nüfus değişimi = doğumlar − ölümler + gelen göç − giden göç.' }
    ] },
    sections: [
      { title: 'Ülke toplamı tuzağı', text: 'İç göç ülkenin toplam nüfusunu doğrudan değiştirmez; ülke içindeki dağılışı değiştirir. Dış göç ise diğer koşullar sabitken ülke toplamını artırabilir veya azaltabilir.' },
      { title: 'Doğal ve gerçek artış', text: 'Doğal artış yalnız doğum ve ölüm farkıdır. Gerçek artışta net göç de hesaba katılır. Doğal artışı pozitif olan bir yer, göç kaybı daha fazlaysa nüfus kaybedebilir.' }
    ],
    memory: 'İç göç → dağılış. Dış göç → ülke toplamı. Gerçek artış = doğal artış + net göç.',
    question: { stem: 'Bir ülkede bir yıl içinde doğumlar 100 bin, ölümler 60 bin, gelen göç 10 bin ve giden göç 70 bindir. Nüfus değişimi nedir?', options: ['20 bin artış', '40 bin artış', '20 bin azalış', '60 bin artış'], answer: 2, explanation: 'Doğal artış 40 bindir. Net göç 10 − 70 = −60 bindir. Gerçek değişim 40 − 60 = −20 bin; nüfus 20 bin azalır.' },
    cards: [{ front: 'Doğal nüfus artışı?', back: 'Doğumlar eksi ölümler.' }, { front: 'İç göç ülkenin toplam nüfusunu değiştirir mi?', back: 'Doğrudan değiştirmez; nüfusun ülke içindeki dağılışını değiştirir.' }],
    source: { book: 'TYT-cog', page: 102 }
  },
  {
    id: 'cog-13', subject: 'cografya', title: 'Ekonomik faaliyet ve ulaşım ağı', unit: 'Ekonomik coğrafya', minutes: 5,
    tags: ['sektörler', 'üretim', 'ulaşım', 'ticaret'],
    summary: 'Ekonomik faaliyetleri ürün adına göre değil, yapılan işin niteliğine göre sınıflandır. Ulaşım, üretim ile tüketim arasındaki bağlantıyı kurar.',
    visual: { type: 'flow', nodes: [
      { label: 'Birincil', detail: 'Doğadan doğrudan ürün elde etme: tarım, hayvancılık, balıkçılık, ormancılık ve madencilik.' },
      { label: 'İkincil', detail: 'Ham maddeyi işleme ve üretim: sanayi ile inşaat faaliyetleri.' },
      { label: 'Üçüncül', detail: 'Hizmet sunma: ulaşım, ticaret, turizm, sağlık ve eğitim.' },
      { label: 'Bilgi ve yönetim', detail: 'Bilgi üretimi dördüncül; üst düzey karar ve yönetim beşincil faaliyetler olarak da sınıflandırılır.' },
      { label: 'Ulaşım ağı', detail: 'Üretici ile pazarı bağlar. Boğaz, kanal, geçit ve limanlar stratejik düğüm noktalarıdır.' }
    ] },
    sections: [
      { title: 'Aynı ürün, farklı sektör', text: 'Buğday yetiştirmek birincil; buğdaydan un üretmek ikincil; unu markette satmak üçüncül faaliyettir. Ürün aynı zincirde olsa da yapılan iş değişmiştir.' },
      { title: 'Ulaşımın etkisi', text: 'Ulaşım imkânları pazar erişimini ve maliyeti etkiler. Dağlık alanlarda yol yapımı zorlaşabilir. Süveyş ve Panama kanalları bazı deniz yollarını kısaltarak uluslararası ticarette önem taşır.' }
    ],
    memory: 'Çıkar/yetiştir → birincil. İşle → ikincil. Hizmet sun → üçüncül.',
    question: { stem: 'Balık avlama, balık konservesi üretme ve konserveyi satma faaliyetleri sırasıyla hangi sektörlerdedir?', options: ['İkincil – birincil – üçüncül', 'Birincil – ikincil – üçüncül', 'Üçüncül – ikincil – birincil', 'Birincil – üçüncül – ikincil'], answer: 1, explanation: 'Doğadan balık elde etmek birincil; işleyerek konserve üretmek ikincil; ticaret hizmeti sunmak üçüncül faaliyettir.' },
    cards: [{ front: 'Madencilik hangi sektör?', back: 'Birincil: doğadan doğrudan kaynak elde etme.' }, { front: 'Turizm ve ulaşım hangi sektör?', back: 'Üçüncül: hizmet sektörü.' }],
    source: { book: 'TYT-cog', page: 106 }
  },
  {
    id: 'cog-14', subject: 'cografya', title: 'Tehlikeyi afete dönüştüren ne?', unit: 'Afetler ve çevre', minutes: 6,
    tags: ['deprem', 'sel', 'heyelan', 'erozyon', 'risk'],
    summary: 'Doğa olayı, toplumda ciddi can ve mal kaybına yol açtığında afet niteliği kazanır. Kayıplarda tehlikenin yanı sıra maruziyet ve kırılganlık da etkilidir.',
    visual: { type: 'flow', nodes: [
      { label: 'Tehlike', detail: 'Deprem, şiddetli yağış veya heyelan oluşturabilecek doğal süreç.' },
      { label: 'Maruziyet', detail: 'İnsanların, yapıların ve ekonomik faaliyetlerin tehlike alanında bulunması.' },
      { label: 'Kırılganlık', detail: 'Dayanıksız yapı, yetersiz altyapı ve hazırlıksızlık kayıpları artırabilir.' },
      { label: 'Önlem', detail: 'Uygun yer seçimi, dayanıklı yapı, erken uyarı, eğitim ve çevreyi koruma risk azaltma araçlarıdır.' },
      { label: 'Daha az kayıp', detail: 'Doğa olayını tamamen durdurmak mümkün olmasa da zararlarını azaltmak çoğu durumda mümkündür.' }
    ] },
    sections: [
      { title: 'Heyelan ve erozyon', text: 'Heyelan, zeminin veya kaya kütlesinin yamaç boyunca hareketidir; eğim, suya doygunluk ve zemin yapısı önemlidir. Erozyon, toprağın su veya rüzgârla aşınıp taşınmasıdır. Bitki örtüsünün kaybı erozyonu artırabilir.' },
      { title: 'Sel ve deprem', text: 'Dere yatağına yapılaşma sel kayıplarını büyütebilir. Depremde uygun zemin seçimi ve mühendislik hizmeti belirleyicidir. Aynı büyüklükteki deprem her yerde aynı kaybı oluşturmaz; hazırlık ve yapı niteliği farklıdır.' }
    ],
    memory: 'Kayıp yalnız olayın gücü değildir: nerede, kim ve ne kadar hazırlıklı?',
    question: { stem: 'Benzer büyüklükteki iki depremin farklı bölgelerde çok farklı kayıplara yol açması öncelikle hangi yargıyı destekler?', options: ['Depremlerin yalnız iklime bağlı olduğunu', 'Riskte yapı kalitesi ve hazırlığın da etkili olduğunu', 'Bütün fayların aynı anda kırıldığını', 'Nüfus ve yerleşmenin etkisiz olduğunu'], answer: 1, explanation: 'Maruziyet, zemin, yapı dayanıklılığı ve hazırlık düzeyi değiştikçe aynı büyüklükteki olayın yol açtığı kayıplar farklılaşabilir.' },
    cards: [{ front: 'Erozyon ile heyelan ayrımı?', back: 'Erozyon yüzey toprağının aşınıp taşınması; heyelan zemin veya kaya kütlesinin yamaçta hareketidir.' }, { front: 'Afet kaybını azaltan üç araç?', back: 'Uygun yer seçimi, dayanıklı yapı ve eğitim/hazırlık.' }],
    source: { book: 'TYT-cog', page: 111 }
  }
]);

/* Temel boşlukları tamamlayan beş ders. OGM bağlantıları doğrudan doğrulanmıştır. */
window.LESSONS = (window.LESSONS || []).concat([
  {
    id: 'tar-15', subject: 'tarih', title: 'Avcı-toplayıcıdan yerleşik üretime', unit: 'İnsanlığın ilk dönemleri', minutes: 5,
    tags: ['Paleolitik', 'Neolitik', 'tarım', 'yerleşik yaşam'],
    summary: 'Tarih öncesini yalnız araçların adıyla ezberleme. Geçim biçimi, üretim, yerleşme ve toplumsal iş bölümü arasındaki ilişkiyi kur.',
    visual: { type: 'flow', nodes: [
      { label: 'Avcı-toplayıcılık', detail: 'Paleolitik yaşamda doğada bulunan besinlerden yararlanma ve avcılık belirgindir; insan toplulukları besin kaynaklarına göre hareket eder.' },
      { label: 'Tarımsal üretim', detail: 'Neolitik dönemde tarım ve hayvanların evcilleştirilmesi yaygınlaştı; besin üretimi arttı.' },
      { label: 'Kalıcı yerleşmeler', detail: 'Üretim alanına bağlılık ve tahılın depolanması köy yaşamının gelişmesini destekledi.' },
      { label: 'Artı ürün', detail: 'İhtiyacın ötesindeki üretim depolanabilir ve değiş tokuş edilebilir; her bireyin aynı işi yapması zorunlu olmaktan çıkar.' },
      { label: 'İş bölümü', detail: 'Zanaat ve değiş tokuşun gelişmesi, toplumsal örgütlenmenin zamanla çeşitlenmesine katkı sağlar.' }
    ] },
    sections: [
      { title: 'Her yerde aynı takvim yok', text: 'Tarih öncesi dönemler farklı toplumlarda aynı anda başlamadı ve her toplumda bütün aşamalar aynı sırayla yaşanmadı. Göç ve ticaretle bir araç veya tekniğin öğrenilmesi değişimi hızlandırabilir.' },
      { title: 'Bulgudan çıkarım yap', text: 'Tahıl öğütme araçları ve ürün depolama alanları üretimle; kalıcı evler yerleşik yaşamla ilişkilidir. Tek bir bulgudan toplumun bütün özelliklerini kesin olarak çıkarma. Yazılı belge bulunmaması da kültürün bulunmadığı anlamına gelmez.' }
    ],
    memory: 'Üretim → yerleşme → depolama ve iş bölümü. Bu dönüşüm her yerde aynı anda yaşanmadı.',
    question: { stem: 'Bir tarih öncesi yerleşmesinde tahıl öğütme araçları, depolama kapları ve kalıcı konutlar bulunmuştur. En güçlü çıkarım hangisidir?', options: ['Alfabenin kullanıldığı', 'Sanayi üretiminin başladığı', 'Toplumun tamamen denizcilikle geçindiği', 'Besin üretimi ve yerleşik yaşamın geliştiği'], answer: 3, explanation: 'Öğütme ve depolama besin üretimini, kalıcı konutlar yerleşik yaşamı destekleyen bulgulardır. Yazı veya sanayi hakkında doğrudan kanıt verilmemiştir.' },
    cards: [{ front: 'Neolitik dönüşümün temel geçim yeniliği?', back: 'Tarım ve hayvanların evcilleştirilmesiyle besin üretiminin gelişmesi.' }, { front: 'Bütün toplumlar tarih öncesi dönemleri aynı anda mı yaşadı?', back: 'Hayır. Coğrafi koşullar ve topluluklar arasındaki etkileşim farklı gelişim yolları oluşturdu.' }],
    source: { title: 'OGM Materyal · Defterim Tarih 9 · Tarih öncesi dönemlendirme', url: 'https://ogmmateryal.eba.gov.tr/panel/upload/etkilesimli/kitap/defterim/9/tarih/files/basic-html/page36.html' }
  },
  {
    id: 'tar-16', subject: 'tarih', title: 'İlk Çağ medeniyetlerini katkılarıyla tanı', unit: 'İlk Çağ medeniyetleri', minutes: 6,
    tags: ['Sümer', 'Asur', 'Hitit', 'Lidya', 'Mısır', 'Fenike'],
    summary: 'Uygarlıkları yalnız bir icatla sınırlandırmadan, yazı, ticaret, devlet kayıtları ve bilimsel birikim gibi ayırt edici katkılarıyla eşleştir.',
    visual: { type: 'compare', nodes: [
      { label: 'Sümerler · yazı', detail: 'Mezopotamya’da çivi yazısı ve ay yılına dayanan takvimle öne çıkarlar; zigguratlar birden fazla işlev üstlenmiştir.' },
      { label: 'Asurlar · ticaret', detail: 'Anadolu’daki karum adı verilen ticaret merkezleri, yazının Anadolu’ya taşınmasına katkı sağlamıştır.' },
      { label: 'Hititler · yıllık', detail: 'Anal adı verilen yıllıklar yönetim faaliyetlerini kaydeder. Pankuş meclisi ve tavananna da ayırt edici kavramlardır.' },
      { label: 'Lidyalılar · para', detail: 'Batı Anadolu’da ticaret ve madenî para kullanımıyla öne çıkarlar. Para değiş tokuşu kolaylaştıran bir araçtır.' },
      { label: 'Mısır · takvim', detail: 'Nil çevresinde gelişen uygarlık; güneş takvimi, matematik, tıp ve anıtsal mimariyle ilişkilidir.' },
      { label: 'Fenikeliler · alfabe', detail: 'Deniz ticareti ve kolonicilikle öne çıkarlar. Geliştirdikleri alfabe sonraki alfabeleri etkilemiştir.' }
    ] },
    sections: [
      { title: 'Ticaret aynı zamanda kültür taşır', text: 'Asurlu tüccarların yazıyı Anadolu’ya taşıması, ekonomik ilişkilerin kültürel sonuç doğurabildiğini gösterir. Fenikelilerin deniz ticareti de farklı toplumların etkileşimini desteklemiştir.' },
      { title: 'Yer ve katkıyı birlikte hatırla', text: 'Mezopotamya: Sümer ve Asur. Anadolu: Hitit ve Lidya. Nil havzası: Mısır. Doğu Akdeniz: Fenike. Bir uygarlığın belirli alanda tanınması, diğer alanlarda hiçbir faaliyet göstermediği anlamına gelmez.' }
    ],
    memory: 'Sümer yazı; Asur Anadolu’ya yazı; Hitit anal; Lidya para; Mısır güneş takvimi; Fenike alfabe.',
    question: { stem: 'Asurlu tüccarların Anadolu’da ticaret yaparken yazının da yayılmasını sağlaması hangi yargıyı destekler?', options: ['Ticaretin yalnız askerî sonuçlar doğurduğunu', 'Kültürlerin birbirinden tamamen bağımsız olduğunu', 'Ekonomik ilişkilerin kültürel etkileşimi desteklediğini', 'Anadolu’daki bütün devletlerin aynı dönemde kurulduğunu'], answer: 2, explanation: 'Ticaret ekonomik bir faaliyet, yazının yayılması kültürel bir sonuçtur. Bu örnek iki alanın birbirini etkileyebildiğini gösterir.' },
    cards: [{ front: 'Karum ve anal hangi uygarlıklarla eşleşir?', back: 'Karum: Asur ticaret merkezleri. Anal: Hitit yıllıkları.' }, { front: 'Lidya, Mısır ve Fenike’nin ayırt edici katkıları?', back: 'Madenî para; güneş takvimi; alfabenin gelişimi.' }],
    source: { title: 'OGM Materyal · Defterim Tarih 9 · İlk Çağ medeniyet havzaları (devamı sonraki sayfada)', url: 'https://ogmmateryal.eba.gov.tr/panel/upload/etkilesimli/kitap/defterim/9/tarih/files/basic-html/page46.html' }
  },
  {
    id: 'cog-15', subject: 'cografya', title: 'Basınçtan rüzgâra: yön ve neden', unit: 'Basınç ve rüzgârlar', minutes: 6,
    tags: ['yüksek basınç', 'alçak basınç', 'meltem', 'muson'],
    summary: 'Rüzgârın başlangıç nedeni basınç farkıdır. Sıcaklık farkı ve atmosferin genel dolaşımı basıncı; Dünya’nın dönüşü ve yüzey koşulları rüzgârı etkiler.',
    visual: { type: 'compare', nodes: [
      { label: 'Yüksek basınç', detail: 'Yüzeye yakın hava çevreye doğru dağılır; alçalıcı hareket belirgindir. Yüksek basıncın her zaman soğuk olması gerekmez.' },
      { label: 'Alçak basınç', detail: 'Yüzeye yakın hava çevreden merkeze yönelir; yükselici hareket belirgindir. Yeterli nem varsa yağış oluşumu desteklenebilir.' },
      { label: 'Sürekli rüzgârlar', detail: 'Alizeler, batı rüzgârları ve kutup rüzgârları genel basınç kuşaklarıyla ilişkilidir.' },
      { label: 'Muson', detail: 'Kara ve denizlerin mevsimlik ısınma farklarıyla yön değiştirir. Yaz musonu genellikle denizden karaya nem taşır.' },
      { label: 'Meltem', detail: 'Günlük ısınma farkıyla gelişir. Kıyıda gündüz denizden karaya; gece karadan denize eser.' }
    ] },
    sections: [
      { title: 'Termik ve dinamik', text: 'Isınma ve soğumaya bağlı basınç termik, genel hava dolaşımındaki yükselme ve alçalmaya bağlı basınç dinamik kökenlidir. Bu nedenle yalnız basıncın yüksek veya alçak olmasından sıcaklık kesin çıkarılamaz.' },
      { title: 'Yön ile hızı ayır', text: 'Basınç farkı ve merkezler arası uzaklık rüzgârın hızını etkiler. Dünya’nın dönüşü, serbest hava hareketlerini Kuzey Yarım Küre’de sağa, Güney Yarım Küre’de sola saptırır. Yer şekilleri de yerel yönü değiştirebilir.' }
    ],
    memory: 'Rüzgâr yüksekten alçağa. Meltem günlük; muson mevsimlik yön değiştirir.',
    question: { stem: 'Güneşli bir yaz gününde kıyıda karanın denizden daha hızlı ısınmasıyla oluşan meltem hangi yönde eser?', options: ['Karadan denize', 'Yalnız kuzeyden güneye', 'Yalnız dağdan vadiye', 'Denizden karaya'], answer: 3, explanation: 'Gündüz kara daha hızlı ısınır; kara üzerinde göreli alçak, deniz üzerinde göreli yüksek basınç gelişir. Yüzeyde rüzgâr denizden karaya yönelir.' },
    cards: [{ front: 'Meltem ile musonun zaman ölçeği?', back: 'Meltem günlük; muson mevsimlik ısınma farklarıyla ilişkilidir.' }, { front: 'Yüksek basınç kesinlikle soğuk mu demektir?', back: 'Hayır. Basınç termik veya dinamik kökenli olabilir.' }],
    source: { book: 'TYT-cog', page: 36 }
  },
  {
    id: 'cog-16', subject: 'cografya', title: 'Yerleşme dokusu ve bölge sınırları', unit: 'Yerleşme ve bölgeler', minutes: 5,
    tags: ['toplu yerleşme', 'dağınık yerleşme', 'işlevsel bölge', 'şehir'],
    summary: 'Yerleşmelerin nerede kurulduğu, nasıl yayıldığı ve hangi işleve sahip olduğu farklı sorulardır. Bölgeler ise seçilen ortak özelliğe göre oluşturulur.',
    visual: { type: 'compare', nodes: [
      { label: 'Yer seçimi', detail: 'Su, iklim, arazi, ulaşım, güvenlik ve geçim imkânları yerleşmenin yerini etkiler.' },
      { label: 'Dağınık doku', detail: 'Evlerin birbirinden uzak olmasıdır. Engebeli arazi ve yaygın su kaynakları bu dokuyu destekleyebilir.' },
      { label: 'Toplu doku', detail: 'Evlerin bir arada bulunmasıdır. Sınırlı su kaynağı çevresinde veya uygun düz alanlarda gelişebilir.' },
      { label: 'Şehir işlevi', detail: 'Sanayi, liman, turizm, yönetim veya eğitim öne çıkabilir. Bir şehrin birden fazla işlevi bulunabilir.' },
      { label: 'Bölge ölçütü', detail: 'İklim bölgesi doğal; sanayi bölgesi beşerî; bir merkezin hizmet alanı işlevsel bölgedir.' }
    ] },
    sections: [
      { title: 'Koşul, tek başına kesin sonuç değildir', text: 'Doğu Karadeniz kırsalındaki engebeli arazi ve yaygın su kaynakları dağınık dokuyu destekler. Ancak mülkiyet, ekonomik faaliyet ve kültürel alışkanlıklar da etkilidir. Her engebeli yerin mutlaka dağınık olduğunu söyleme.' },
      { title: 'Sınırlar ölçüte bağlıdır', text: 'Bir ülkenin idari sınırlarıyla iklim veya tarım bölgelerinin sınırları aynı olmak zorunda değildir. Bölge sınırları kullanılan ölçüte ve zaman içindeki değişime göre farklılaşabilir. Hizmet ağı genişleyen bir merkez, işlevsel bölgesini de genişletebilir.' }
    ],
    memory: 'Doku: evler nasıl? İşlev: şehir ne yapıyor? Bölge: hangi ortak ölçüt?',
    question: { stem: 'Bir hastanenin hasta kabul ettiği çevre ilçe ve köyler esas alınarak belirlenen alan hangi bölgeye örnektir?', options: ['Yalnız doğal bölgeye', 'İşlevsel bölgeye', 'Yalnız iklim bölgesine', 'Kutup bölgesine'], answer: 1, explanation: 'Bölge bir merkezin sunduğu hizmetin etki alanına göre belirlenmiştir. Bu, işlevsel bölge yaklaşımıdır.' },
    cards: [{ front: 'Yerleşme dokusu neyi anlatır?', back: 'Evlerin birbirine göre toplu veya dağınık dağılışını.' }, { front: 'Bir şehir yalnız tek işleve mi sahiptir?', back: 'Hayır. Sanayi, ulaşım, eğitim ve turizm gibi birden fazla işlevi olabilir.' }],
    source: { book: 'TYT-cog', page: 49 }
  },
  {
    id: 'cog-17', subject: 'cografya', title: 'İzohipsten kesite, ölçekten eğime', unit: 'Harita uygulaması', minutes: 7,
    tags: ['izohips', 'profil', 'ölçek', 'eğim'],
    summary: 'Yükselti çizgilerini bir yürüyüş rotası gibi oku: önce yükseliyor musun, sonra alçalıyor musun? Eğim hesabında yükselti farkı ile yatay uzaklığı aynı birime getir.',
    visual: { type: 'flow', nodes: [
      { label: 'A · 100 m', detail: 'Kesit çizgisinin başlangıcı. Başlangıç noktasının yükseltisini haritadaki çizgiden oku.' },
      { label: '200 m · yükseliş', detail: 'Rota daha yüksek izohipsleri kesiyorsa kesitte çizgi yukarı yönelir.' },
      { label: '300 m · yüksek kesim', detail: 'Bu örnekte geçilen en yüksek çizgi 300 metredir. Tam zirve değeri, haritada ayrıca verilmediyse kesin bilinmeyebilir.' },
      { label: '200 m · alçalış', detail: 'Daha alçak izohipslere geçildiğinde kesit aşağı yönelir. Çizgilerin sıklaşması eğimin arttığını gösterir.' },
      { label: 'B · 100 m', detail: 'Başlangıçla aynı yükseltide bitmek, yol boyunca hiç yükselmediğin anlamına gelmez.' }
    ] },
    sections: [
      { title: 'Üç adımlı eğim hesabı', text: 'Önce yükselti farkını bul. Sonra ölçekle harita uzaklığını gerçek yatay uzaklığa çevir. Son olarak yüzde eğim = yükselti farkı / yatay uzaklık × 100. Metre ile kilometreyi doğrudan birbirine bölme; birimleri eşitle.' },
      { title: 'Kesin değer tuzağı', text: 'İzohips aralığı 100 metre olan bir haritada en içteki kapalı çizgi 300 metreyse, zirve mutlaka 300 metre değildir. Ayrıca alan hesabında ölçeğin karesi kullanılır: haritadaki uzunluk ile alan hesabının dönüşümleri aynı değildir.' }
    ],
    memory: 'Ölçek → yatay uzaklık. İzohips → yükselti farkı. Eğim → ikisinin oranı.',
    question: { stem: '1/100.000 ölçekli haritada yatay uzaklıkları 2 cm olan iki noktanın yükseltileri 100 m ve 500 m’dir. Aralarındaki ortalama yüzde eğim kaçtır?', options: ['2', '5', '20', '200'], answer: 2, explanation: '2 cm gerçekte 2 km = 2.000 metredir. Yükselti farkı 500 − 100 = 400 metredir. Eğim = 400 / 2.000 × 100 = %20.' },
    cards: [{ front: 'Yüzde eğim formülü?', back: 'Yükselti farkı / yatay uzaklık × 100; iki uzunluk aynı birimde olmalı.' }, { front: 'En iç izohips çizgisinin değeri kesin zirve yüksekliği midir?', back: 'Hayır. Zirve daha yüksek olabilir; kesin değer için ek bilgi gerekir.' }],
    source: { book: 'TYT-cog', page: 29 }
  }
]);
