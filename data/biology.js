/* Yerel MEBİ konu özetlerine dayalı özgün kavramsal biyoloji mikro dersleri. */
window.LESSONS = (window.LESSONS || []).concat([
  {
    id: 'bio-tyt-01', subject: 'biyoloji', exam: 'TYT', title: 'Canlılığın ortak işleyişi', unit: 'Canlıların ortak özellikleri', minutes: 5,
    tags: ['metabolizma', 'homeostazi', 'ATP', 'organizasyon'],
    summary: 'Canlılar hücresel bir düzen içinde madde ve enerji dönüşümü yapar, iç dengelerini korur ve çevreye tepki verir.',
    visual: { type: 'cycle', nodes: [
      { label: 'Madde alımı', detail: 'Beslenme; yapım, onarım ve enerji dönüşümleri için gerekli maddeleri sağlar. Her canlı besinini dışarıdan hazır almaz.' },
      { label: 'Metabolizma', detail: 'Anabolizma yapım; katabolizma yıkım tepkimeleridir. İkisinin bütünü metabolizmayı oluşturur.' },
      { label: 'ATP döngüsü', detail: 'ATP hücresel işlere enerji aktarır; üretimi ve tüketimi hücresel yaşamın sürmesine eşlik eder.' },
      { label: 'İç denge', detail: 'Su, sıcaklık ve pH gibi değişkenler düzenlenir. Homeostazi, hiçbir değişim olmaması değil dinamik dengedir.' },
      { label: 'Tepki ve devamlılık', detail: 'Uyarılara tepki, büyüme ve üreme canlılıkla ilişkilidir. Üreme bireyin değil türün devamını sağlar.' }
    ] },
    sections: [
      { title: 'Aynı işlev, farklı yol', text: 'Bitki ışık enerjisiyle organik besin üretebilir; hayvan organik besini dışarıdan alır. İkisinde de metabolizma ve ATP kullanımı vardır. Fotosentez, yer değiştirerek hareket veya oksijenli solunum bütün canlıların ortak özelliği değildir.' },
      { title: 'Birey ile türü ayır', text: 'Bir bireyin üreyememesi onun canlı olmadığını göstermez. Üreme, kalıtsal bilginin yeni nesillere aktarılmasını sağlar. Homeostazi sorusunda ise değişkenin dengede tutulmasına bak: terleme ile ısı kaybının artırılması buna örnektir.' }
    ],
    memory: 'Metabolizma = yapım + yıkım. Homeostazi = değişen koşullarda dinamik iç denge.',
    question: { stem: 'Aşağıdakilerden hangisi bütün canlılarda ortak olarak bulunmaz?', options: ['Fotosentez yapma', 'Hücresel organizasyon', 'Metabolik tepkimeler gerçekleştirme', 'ATP kullanma'], answer: 0, explanation: 'Fotosentez yalnız uygun pigment ve düzeneğe sahip canlılarda görülür. Hücresel organizasyon, metabolizma ve ATP kullanımı hücresel canlılığın ortak özellikleridir.' },
    cards: [{ front: 'Anabolizma ve katabolizma?', back: 'Anabolizma yapım, katabolizma yıkım tepkimeleridir; toplamları metabolizmadır.' }, { front: 'Homeostazi mutlak değişmezlik midir?', back: 'Hayır. Düzenleyici mekanizmalarla iç ortamın belirli sınırlar içinde tutulduğu dinamik dengedir.' }],
    source: { book: 'TYT-bio', page: 9 }
  },
  {
    id: 'bio-tyt-02', subject: 'biyoloji', exam: 'TYT', title: 'Temel bileşiklerin görev haritası', unit: 'Canlıların temel bileşikleri', minutes: 6,
    tags: ['su', 'karbonhidrat', 'lipit', 'protein', 'vitamin'],
    summary: 'Bir bileşiğin organik olması enerji verici olduğu anlamına gelmez. Yapı taşı, görev ve sindirim gereksinimini birlikte değerlendir.',
    visual: { type: 'compare', nodes: [
      { label: 'Su ve mineraller', detail: 'İnorganik bileşenlerdir; düzenleme ve yapıya katılma gibi görevleri vardır. Yıkılarak ATP elde edilen besinler değildir.' },
      { label: 'Karbonhidrat', detail: 'Monosakkaritler yapı birimleridir. Nişasta ve glikojen depo; selüloz bitki hücre çeperinde yapı maddesidir.' },
      { label: 'Lipit', detail: 'Enerji depolama, zar yapısı ve yalıtımda rol alır. Trigliserit, gliserol ile yağ asitlerinden oluşur.' },
      { label: 'Protein', detail: 'Amino asitler peptit bağlarıyla birleşir. Enzim, taşıma, savunma ve yapı görevleri üstlenebilir.' },
      { label: 'Vitamin', detail: 'Düzenleyici organik bileşiklerdir; enerji elde etmek için kullanılan besinler gibi değerlendirilmez.' },
      { label: 'Nükleik asit / ATP', detail: 'DNA ve RNA genetik bilgiyle; ATP hücre içi enerji aktarımıyla ilişkilidir.' }
    ] },
    sections: [
      { title: 'Yapı taşı ile büyük molekülü eşleştir', text: 'Proteinler amino asitlerden; polisakkaritler monosakkaritlerden oluşur. Nişasta, glikojen ve selülozun yapı taşı glikozdur; fakat bağlanma biçimleri ve görevleri farklıdır. İnsan selülozu sindirecek enzimi üretemez.' },
      { title: 'Sindirim ve enerji aynı soru değildir', text: 'Büyük besin molekülleri emilimden önce çoğunlukla hidrolizle daha küçük birimlere ayrılır. Su ve mineraller sindirilmez. Vitaminlerin düzenleyici olması onları protein veya yağ gibi enerji verici yapmaz; “organik” etiketi tek başına görevi belirlemez.' }
    ],
    memory: 'Protein → amino asit; polisakkarit → monosakkarit; vitamin → düzenleme; mineral → inorganik.',
    question: { stem: 'Temel bileşiklerle ilgili hangi eşleştirme doğrudur?', options: ['Vitamin — başlıca enerji deposu', 'Protein — amino asitlerden oluşma', 'Mineral — sindirilerek glikoza dönüşme', 'Selüloz — hayvanların depo polisakkariti'], answer: 1, explanation: 'Proteinlerin yapı birimleri amino asitlerdir. Vitaminler başlıca enerji deposu değildir; mineraller glikoza sindirilmez. Hayvanların depo polisakkariti glikojendir.' },
    cards: [{ front: 'Nişasta, glikojen ve selülozun ortak yapı taşı?', back: 'Glikoz. Farklı bağlanma ve düzenlenme biçimleri farklı görevler oluşturur.' }, { front: 'Bütün organik bileşikler enerji verici midir?', back: 'Hayır. Vitaminler gibi organik bileşikler düzenleyici görevleriyle değerlendirilir.' }],
    source: { book: 'TYT-bio', page: 20 }
  },
  {
    id: 'bio-tyt-03', subject: 'biyoloji', exam: 'TYT', title: 'Enzim grafiğinde değişkeni yakala', unit: 'Enzimler', minutes: 6,
    tags: ['aktivasyon enerjisi', 'sıcaklık', 'pH', 'substrat'],
    summary: 'Enzim aktivasyon enerjisini düşürerek tepkimeyi hızlandırır. Sıcaklık, pH ve substrat miktarının etkileri farklı grafikler oluşturur.',
    visual: { type: 'flow', demo: 'enzyme', nodes: [
      { label: 'Uygun substrat', detail: 'Substrat, enzimin aktif bölgesiyle etkileşir. Özgüllük nedeniyle her enzim her moleküle etki etmez.' },
      { label: 'Düşük enerji eşiği', detail: 'Enzim, tepkimenin aktivasyon enerjisini azaltır; tepkimenin ürününü veya toplam enerji farkını değiştirmez.' },
      { label: 'Ürün ve yeniden kullanım', detail: 'Ürün ayrılır; enzim tepkimede tüketilmediği için yeniden kullanılabilir.' },
      { label: 'Optimum koşullar', detail: 'Sıcaklık ve pH için uygun aralıklar vardır. Yüksek sıcaklık yapıyı bozabilir; düşük sıcaklık çoğunlukla etkinliği yavaşlatır.' },
      { label: 'Doygunluk', detail: 'Enzim miktarı sabitken substratı artırmak, aktif bölgeler dolunca hızı sürekli yükseltemez.' }
    ] },
    sections: [
      { title: 'Grafiğin sabitlerini oku', text: 'Sabit enzim miktarıyla çizilmiş substrat-hız grafiğinde önce artış, sonra plato beklenir. Platoda bütün aktif bölgeler doluysa daha fazla substrat eklemek tek başına hızı artırmaz. Yorumdan önce hangi değişkenlerin sabit tutulduğunu kontrol et.' },
      { title: 'Soğutma ile kaynatma aynı değildir', text: 'Düşük sıcaklık enzimin çalışmasını yavaşlatabilir; ortam yeniden uygun sıcaklığa getirildiğinde etkinlik artabilir. Yüksek sıcaklıkta üç boyutlu yapı bozulursa soğutmak işlevi geri getirmeyebilir. Her enzimin optimum pH ve sıcaklığı aynı değildir.' }
    ],
    memory: 'Enzim harcanmaz; aktivasyon enerjisini azaltır. Sabit enzim + fazla substrat → bir noktadan sonra plato.',
    question: { stem: 'Sabit miktarda enzim bulunan bir deneyde bütün aktif bölgeler dolmuştur. Sıcaklık ve pH değişmezken substrat miktarı artırılırsa ne beklenir?', options: ['Enzimlerin tamamı tüketilir.', 'Aktivasyon enerjisi artar.', 'Tepkime hızı yaklaşık aynı kalır.', 'Ürün oluşumu kesin olarak durur.'], answer: 2, explanation: 'Enzimler doygun olduğunda hız sınırlayıcı etmen enzim miktarıdır. Ek substrat hızı sınırsız artırmaz; ürün oluşumu sürer ve enzim tüketilmez.' },
    cards: [{ front: 'Enzim aktivasyon enerjisine ne yapar?', back: 'Düşürür. Böylece uygun koşullarda tepkime hızını artırır.' }, { front: 'Substrat-hız grafiğindeki plato neyi gösterebilir?', back: 'Enzim miktarı sabitken aktif bölgelerin doygunluğa ulaşmasını.' }],
    source: { book: 'TYT-bio', page: 31 }
  },
  {
    id: 'bio-tyt-04', subject: 'biyoloji', exam: 'TYT', title: 'Hücreyi bir görev ağı olarak oku', unit: 'Hücre ve organeller', minutes: 6,
    tags: ['prokaryot', 'ökaryot', 'ribozom', 'organel'],
    summary: 'Prokaryot-ökaryot ayrımı çekirdek zarı ve zarlı organellerle yapılır. Organelleri adlarından çok gerçekleştirdikleri işlerle eşleştir.',
    visual: { type: 'layers', nodes: [
      { label: 'Ortak temel', detail: 'Hücre zarı, sitoplazma, genetik materyal ve protein sentezleyen ribozom temel hücresel düzenin parçalarıdır.' },
      { label: 'Prokaryot', detail: 'Bakteri ve arkelerde zarla çevrili çekirdek ve zarlı organeller bulunmaz; ribozom bulunur.' },
      { label: 'Ökaryot', detail: 'Genetik materyal zarla çevrili çekirdekte düzenlenir; çeşitli zarlı organeller görev paylaşımı yapar.' },
      { label: 'Üretim ve sevkiyat', detail: 'Ribozom protein sentezler. Granüllü ER ve Golgi, salgılanacak bazı proteinlerin işlenmesi ve taşınmasında rol alır.' },
      { label: 'Enerji dönüşümü', detail: 'Mitokondri oksijenli solunum; kloroplast fotosentezle ilişkilidir. Her bitki hücresinde kloroplast bulunması gerekmez.' },
      { label: 'Sindirim ve depo', detail: 'Lizozom hücre içi sindirimde; kofullar depolama ve su dengesinde görev alabilir.' }
    ] },
    sections: [
      { title: 'Zarsız olmak işlevsiz olmak değildir', text: 'Prokaryot hücrede mitokondri bulunmaması ATP sentezlenmediği anlamına gelmez. Bu canlılar uygun enzim ve zar sistemleriyle enerji dönüşümü yapar. Ribozom zarsızdır ve prokaryotlarda da protein sentezi gerçekleştirir.' },
      { title: 'Salgı yolunu sırala', text: 'Salgı proteinleri granüllü endoplazmik retikuluma bağlı ribozomlarda sentezlenebilir; ER üzerinden Golgiye, ardından salgı keseciklerine ilerler. Bir hücrenin salgı etkinliğinin artması ER ve Golgi gelişmişliğiyle ilişkilendirilebilir. Protein sentezi ile protein paketleme görevlerini karıştırma.' }
    ],
    memory: 'Ribozom üretir; ER iletir ve işler; Golgi düzenler/paketler. Prokaryotta ribozom var, zarlı çekirdek yok.',
    question: { stem: 'Bir bakteri ile bir bitki hücresinde ortak olarak hangisi bulunur?', options: ['Kloroplast', 'Golgi aygıtı', 'Zarla çevrili çekirdek', 'Ribozom'], answer: 3, explanation: 'Her iki hücre tipi de protein sentezi için ribozom bulundurur. Bakteriler prokaryottur; zarlı çekirdek, Golgi ve kloroplast içermez.' },
    cards: [{ front: 'Prokaryot hücrede ribozom bulunur mu?', back: 'Evet. Ribozom zarsızdır ve protein sentezini gerçekleştirir.' }, { front: 'Golgi protein sentezler mi?', back: 'Hayır. Sentezi ribozom yapar; Golgi ürünlerin işlenmesi, düzenlenmesi ve paketlenmesinde rol alır.' }],
    source: { book: 'TYT-bio', page: 46 }
  },
  {
    id: 'bio-tyt-05', subject: 'biyoloji', exam: 'TYT', title: 'Zardan hangi yönde geçer?', unit: 'Hücre zarından madde geçişleri', minutes: 6,
    tags: ['difüzyon', 'osmoz', 'aktif taşıma', 'tonisite'],
    summary: 'Taşınan maddeyi, yoğunluk yönünü ve enerji gereksinimini birlikte belirle. Osmoz, seçici geçirgen zardan suyun net hareketidir.',
    visual: { type: 'flow', demo: 'osmosis', nodes: [
      { label: 'Basit difüzyon', detail: 'Uygun küçük moleküller yoğunluk farkı yönünde, doğrudan ATP harcanmadan geçer.' },
      { label: 'Kolaylaştırılmış difüzyon', detail: 'Kanal veya taşıyıcı protein kullanılır; yoğunluk farkı yönünde gerçekleşmesi onu pasif taşımada tutar.' },
      { label: 'Osmoz', detail: 'Basınç etkileri ihmal edilip çözünen madde zarı geçemiyorsa su, daha seyreltik ortamdan daha derişik ortama net geçer.' },
      { label: 'Aktif taşıma', detail: 'Taşıyıcı proteinlerle maddeler gradyana karşı taşınabilir; enerji gerekir.' },
      { label: 'Kesecikli taşıma', detail: 'Endositoz ve ekzositoz büyük maddelerin alınması veya dışarı verilmesinde kesecik ve enerji kullanır.' }
    ] },
    sections: [
      { title: 'Hayvan hücresinin hacmini tahmin et', text: 'Hücreyi, zarı geçemeyen çözünen madde bakımından daha derişik yani hipertonik ortama koyarsan net su kaybeder ve büzülür. Hipotonik ortamda su alır; hücre çeperi bulunmadığı için aşırı su alımında parçalanabilir. İzotonik ortamda net su geçişi yoktur; iki yönlü hareket sürer.' },
      { title: 'Protein kullanımı ATP kanıtı değildir', text: 'Kolaylaştırılmış difüzyon taşıma proteini kullandığı hâlde pasiftir. Aktif taşımayı ayıran temel özellik, enerji kullanılarak gradyana karşı taşımadır. Su aktif taşımayla pompalanmaz; suyun hareketini çözünmüş maddeler ve basınç koşulları etkiler.' }
    ],
    memory: 'Osmozda hareket eden sudur. Hipertonik dış ortam → hücreden net su çıkışı.',
    question: { stem: 'Zarı geçemeyen çözünen maddeler bakımından hücre içinden daha derişik bir ortama bırakılan hayvan hücresinde ilk olarak ne beklenir?', options: ['Net su kaybı ve hacimde küçülme', 'Net su alımı ve hacimde artış', 'Suyun ATP harcanarak içeri pompalanması', 'Hücre çeperinin oluşması'], answer: 0, explanation: 'Dış ortam hipertoniktir. Basınç etkileri ihmal edildiğinde su osmozla daha derişik dış ortama net geçer; hücre büzülür.' },
    cards: [{ front: 'Kolaylaştırılmış difüzyon ATP gerektirir mi?', back: 'Doğrudan ATP harcanmaz; madde gradyanı yönünde kanal veya taşıyıcı proteinle geçer.' }, { front: 'İzotonik ortamda su hiç hareket etmez mi?', back: 'Hareket eder. İki yönlü geçiş dengelidir; net geçiş ve kalıcı hacim değişimi beklenmez.' }],
    source: { book: 'TYT-bio', page: 64 }
  },
  {
    id: 'bio-tyt-06', subject: 'biyoloji', exam: 'TYT', title: 'Mitozda korunan bilgiyi izle', unit: 'Hücre döngüsü ve mitoz', minutes: 5,
    tags: ['interfaz', 'kromozom', 'kardeş kromatit', 'mitoz'],
    summary: 'DNA bölünmeden önce eşlenir; mitozda kardeş kromatitler ayrılır. Oluşan yavru hücrelerde kromozom sayısı korunur.',
    visual: { type: 'cycle', nodes: [
      { label: 'Hazırlık', detail: 'İnterfazın S evresinde DNA eşlenir. DNA miktarı artar; sentromerle sayılan kromozom sayısı hemen iki katına çıkmaz.' },
      { label: 'Düzenlenme', detail: 'Yoğunlaşan kromozomlar iğ iplikleriyle bağlantı kurar ve metafazda orta düzleme yerleşir.' },
      { label: 'Ayrılma', detail: 'Anafazda kardeş kromatitler ayrılarak zıt kutuplara ilerler.' },
      { label: 'Bölüşme', detail: 'Çekirdek bölünmesini sitokinez izlediğinde iki yavru hücre oluşur.' },
      { label: 'Korunma', detail: 'Mutasyon gibi bir değişim yoksa yavru hücreler başlangıç hücresinin genetik bilgisini ve kromozom sayısını korur.' }
    ] },
    sections: [
      { title: 'DNA miktarı ile kromozom sayısı', text: 'Bir kromozom DNA eşlenmesinden sonra iki kardeş kromatit taşıyabilir. Bu nedenle DNA miktarının iki katına çıkması, interfaz sonunda kromozom sayısının da iki katına çıktığını göstermez. Sorularda kromozom, kromatit ve DNA miktarı ayrı değişkenlerdir.' },
      { title: 'Mitozun işlevi canlıya bağlıdır', text: 'Mitoz tek hücreli ökaryotlarda eşeysiz üremeyi; çok hücrelilerde büyüme, onarım ve bazı eşeysiz üreme biçimlerini sağlar. Mitoz yalnız 2n hücrelerde görülmez; uygun n kromozomlu ökaryot hücreler de mitoz geçirebilir.' }
    ],
    memory: 'Önce bir DNA eşlenmesi; sonra kardeş kromatitlerin ayrılması; yavrularda kromozom sayısının korunması.',
    question: { stem: '2n = 8 kromozomlu bir hücre, DNA eşlenmesi ve normal bir mitoz-sitokinez geçiriyor. Sonuç hangisidir?', options: ['Dört hücre oluşur; her biri 4 kromozomludur.', 'İki hücre oluşur; her biri 8 kromozomludur.', 'İki hücre oluşur; her biri 16 kromozomludur.', 'Dört hücre oluşur; her biri 8 kromozomludur.'], answer: 1, explanation: 'Mitoz ve sitokinez sonunda iki yavru hücre oluşur. Her yavru, başlangıç hücresinin kromozom sayısını koruyarak 8 kromozom taşır.' },
    cards: [{ front: 'Mitoz anafazında ne ayrılır?', back: 'Kardeş kromatitler.' }, { front: 'DNA eşlenmesi interfaz sonunda kromozom sayısını artırır mı?', back: 'Hayır. DNA miktarı artar; her kromozom iki kardeş kromatit taşır.' }],
    source: { book: 'TYT-bio', page: 104 }
  },
  {
    id: 'bio-tyt-07', subject: 'biyoloji', exam: 'TYT', title: 'Mayozun iki ayrılma sahnesi', unit: 'Mayoz ve eşeyli üreme', minutes: 6,
    tags: ['homolog kromozom', 'krossing over', 'mayoz I', 'mayoz II'],
    summary: 'Mayoz I homolog kromozomları, mayoz II kardeş kromatitleri ayırır. Tek DNA eşlenmesini iki bölünme izler.',
    visual: { type: 'flow', nodes: [
      { label: 'Bir kez eşlenme', detail: 'Mayoz başlamadan önce DNA eşlenir. Mayoz I ile II arasında yeniden DNA eşlenmesi olmaz.' },
      { label: 'Çeşitlilik', detail: 'Profaz I’de homologların kardeş olmayan kromatitleri arasında parça değişimi gerçekleşebilir.' },
      { label: 'Mayoz I', detail: 'Homolog kromozomlar ayrılır; kromozom takımı sayısı 2n’den n’e iner.' },
      { label: 'Mayoz II', detail: 'Kardeş kromatitler ayrılır; n durumu korunur.' },
      { label: 'Döllenme', detail: 'n ve n gamet çekirdeklerinin birleşmesi 2n zigotu oluşturur; nesiller arasında takım sayısı dengelenir.' }
    ] },
    sections: [
      { title: 'Homolog, kardeş değildir', text: 'Homolog kromozomlardan biri anneden, biri babadan gelir; aynı özelliklerle ilgili genleri taşırlar ancak alelleri farklı olabilir. Kardeş kromatitler ise DNA eşlenmesiyle oluşur. Bu ayrımı bilmek, mayoz I ve II grafiklerini çözmenin temelidir.' },
      { title: 'Çeşitliliğin iki kaynağını ayır', text: 'Krossing over ve homolog kromozomların bağımsız dağılımı, mayozun genetik çeşitliliğe katkılarıdır. Krossing over gerçekleşmese de bağımsız dağılım farklı kombinasyonlar oluşturabilir. Mayozun görevi yalnız hücre sayısını artırmak değildir; takım sayısını azaltır.' }
    ],
    memory: 'I: homologlar ayrılır, takım azalır. II: kardeşler ayrılır, takım korunur.',
    question: { stem: '2n = 12 kromozomlu bir üreme ana hücresinin normal mayozu sonunda oluşan çekirdeklerin her biri kaç kromozom taşır?', options: ['2', '3', '6', '12'], answer: 2, explanation: 'Mayoz I’de homologlar ayrılarak takım sayısı yarıya iner. Mayoz II bu n durumunu korur; son çekirdeklerin her biri n = 6 kromozomludur.' },
    cards: [{ front: 'Mayoz I ile II arasında DNA eşlenir mi?', back: 'Hayır. Mayoz öncesi bir eşlenmeyi iki bölünme izler.' }, { front: 'Krossing over hangi yapılar arasında?', back: 'Profaz I’de homolog kromozomların kardeş olmayan kromatitleri arasında.' }],
    source: { book: 'TYT-bio', page: 114 }
  },
  {
    id: 'bio-tyt-08', subject: 'biyoloji', exam: 'TYT', title: 'Kalıtımda olasılık ağacı kur', unit: 'Mendel kalıtımı', minutes: 6,
    tags: ['alel', 'genotip', 'fenotip', 'çaprazlama'],
    summary: 'Genotip alel bileşimini; fenotip gözlenen özelliği anlatır. Gamet olasılıklarını kurduktan sonra döllenme seçeneklerini birleştir.',
    visual: { type: 'flow', nodes: [
      { label: 'Alel çifti', detail: 'Diploit birey bir gen için anneden ve babadan birer alel alır. AA homozigot, Aa heterozigottur.' },
      { label: 'Gametler', detail: 'Aa birey normal ayrılma varsayımıyla A ve a alelini taşıyan gametleri eşit olasılıkla oluşturur.' },
      { label: 'Birleşme', detail: 'Aa × Aa: AA, Aa, aA, aa. Ailede her yeni yavrunun olasılığı yeniden değerlendirilir.' },
      { label: 'Genotip oranı', detail: 'AA : Aa : aa = 1 : 2 : 1.' },
      { label: 'Fenotip oranı', detail: 'Tam baskınlıkta A taşıyanlar aynı baskın fenotipi gösterir; baskın : çekinik = 3 : 1.' }
    ] },
    sections: [
      { title: 'Baskın, yaygın demek değildir', text: 'Baskınlık, heterozigot bireyde hangi alelin fenotipte etkili olduğuyla ilgilidir. Bir alelin toplumda sık görülmesini veya daha yararlı olmasını zorunlu kılmaz. 3:1 fenotip oranı tam baskınlık varsayımına bağlıdır; bütün kalıtım biçimlerine uygulanmaz.' },
      { title: 'Olasılık, garanti sayı değildir', text: 'Aa × Aa çaprazlamasında çekinik fenotip olasılığı 1/4’tür. Bu, her dört yavrunun mutlaka birinin çekinik olacağını söylemez. İki bağımsız olayın birlikte gerçekleşme olasılıkları çarpılır; farklı seçeneklerden herhangi birinin olasılığında uygun durumlar toplanır.' }
    ],
    memory: 'Önce gamet, sonra birleşme, sonra baskınlık koşuluna göre fenotip.',
    question: { stem: 'A alelinin a’ya tam baskın olduğu tek genli bir özellikte Aa × Aa çaprazlaması yapılıyor. Çekinik fenotipli yavru olasılığı kaçtır?', options: ['1', '3/4', '1/2', '1/4'], answer: 3, explanation: 'Olası genotipler AA, Aa, Aa ve aa’dır. Çekinik fenotip yalnız aa’da görülür; olasılık 1/4’tür.' },
    cards: [{ front: 'Genotip ve fenotip farkı?', back: 'Genotip alel bileşimi; fenotip bu bileşim ile çevrenin etkisi altında gözlenen özelliktir.' }, { front: 'Baskın alel mutlaka yaygın mıdır?', back: 'Hayır. Baskınlık heterozigottaki etkiyle ilgilidir; toplumdaki sıklığı belirlemez.' }],
    source: { book: 'TYT-bio', page: 127 }
  },
  {
    id: 'bio-tyt-09', subject: 'biyoloji', exam: 'TYT', title: 'Sınıflandırmada kapsamı daralt', unit: 'Canlıların sınıflandırılması', minutes: 5,
    tags: ['tür', 'cins', 'akrabalık', 'ikili adlandırma'],
    summary: 'Sınıflandırmada türden âleme doğru kapsam genişler; ortak özelliklerin genel düzeyi azalır. Benzer görünüş tek başına yakın akrabalık kanıtı değildir.',
    visual: { type: 'layers', nodes: [
      { label: 'Tür', detail: 'Sınıflandırmanın temel birimidir. Aynı tür içindeki bireyler ortak özellikler bakımından yakın bir gruptur.' },
      { label: 'Cins ve aile', detail: 'Yakın türler cinslerde; yakın cinsler ailelerde toplanır.' },
      { label: 'Geniş kategoriler', detail: 'Tür → cins → aile → takım → sınıf → şube → âlem yönünde kapsam genişler.' },
      { label: 'Bilimsel ad', detail: 'İkili adlandırmada ilk sözcük cins adıdır; büyük harfle başlar. İkinci sözcük küçük yazılan tamamlayıcı addır.' },
      { label: 'Kanıt', detail: 'DNA ve protein benzerlikleri, hücresel yapı ve homolog yapılar akrabalık yorumuna katkı sağlar.' }
    ] },
    sections: [
      { title: 'Kapsam genişleyince ne değişir?', text: 'Türden âleme doğru gidildikçe kapsanan canlı çeşitliliği artar, bütün üyeler için ortak olan özelliklerin sayısı genellikle azalır. Aynı cinste bulunan iki tür, yalnız aynı âlemde olduğu bilinen iki canlıya göre daha dar bir ortak grupta yer alır.' },
      { title: 'Adı ve benzerliği doğru yorumla', text: 'İki canlının bilimsel adındaki ilk sözcük aynıysa cinsleri aynıdır. Yalnız ikinci sözcüğün aynı olması aynı cinsi göstermez. Kuş kanadı ile böcek kanadının ikisinin de uçuşa hizmet etmesi tek başına yakın akrabalık sonucuna götürmez.' }
    ],
    memory: 'Tür → âlem: kapsam ve çeşitlilik artar; ortak özelliklerin sayısı genel olarak azalır.',
    question: { stem: 'Bilimsel adları Panthera leo ve Panthera tigris olan iki canlı için hangisi kesinlikle doğrudur?', options: ['Aynı cinste yer alırlar.', 'Aynı türün bireyleridir.', 'Bütün genleri özdeştir.', 'Aralarında hiçbir genetik fark bulunmaz.'], answer: 0, explanation: 'İkili adlandırmanın ilk sözcüğü cins adıdır. Panthera ortak olduğundan cinsleri aynıdır; farklı ikinci adlar aynı tür sonucunu desteklemez.' },
    cards: [{ front: 'İkili adlandırmada ilk sözcük neyi gösterir?', back: 'Cins adını; büyük harfle başlar.' }, { front: 'Türden âleme gidilince ortak özellikler?', back: 'Kapsam genişlerken bütün üyelerde ortak olan özellikler genel olarak azalır.' }],
    source: { book: 'TYT-bio', page: 73 }
  },
  {
    id: 'bio-tyt-10', subject: 'biyoloji', exam: 'TYT', title: 'Ekosistemde madde döner, enerji akar', unit: 'Ekosistem ekolojisi', minutes: 6,
    tags: ['üretici', 'tüketici', 'ayrıştırıcı', 'enerji akışı'],
    summary: 'Besin ağları canlılar arasındaki beslenme ilişkilerini gösterir. Madde döngüye katılırken kullanılabilir enerji trofik basamaklar boyunca azalır.',
    visual: { type: 'flow', nodes: [
      { label: 'Üretici', detail: 'İnorganik maddelerden organik besin üretir. Güneş enerjisi pek çok ekosistemin başlıca enerji girdisidir.' },
      { label: 'Birincil tüketici', detail: 'Üreticiyle beslenir; örneğin otu yiyen çekirge.' },
      { label: 'Üst tüketici', detail: 'Diğer tüketicilerle beslenir. Besin zinciri okları besinden onu tüketene yönelir.' },
      { label: 'Ayrıştırıcı', detail: 'Organik kalıntıları parçalayarak inorganik maddelerin çevreye dönmesine katkı sağlar; bütün basamaklarla ilişkilidir.' },
      { label: 'Isı kaybı', detail: 'Enerjinin bir bölümü metabolizma sırasında ısıya dönüşür. Enerji madde gibi ekosistemde sürekli döngü yapmaz.' }
    ] },
    sections: [
      { title: 'Topluluk düzeylerini karıştırma', text: 'Aynı alandaki aynı tür bireyleri popülasyon; farklı türlere ait popülasyonların bütünü komünitedir. Komüniteye su, sıcaklık ve toprak gibi cansız etkenleri de kattığında ekosistem düzeyine geçersin. Habitat yaşam alanı, ekolojik niş canlının ilişkiler ve işlevler bütünüdür.' },
      { title: 'Piramidi yorumlarken ölçütü oku', text: 'Enerji piramidinde üst basamaklara aktarılan kullanılabilir enerji azalır. Bu durum her ekosistemde birey sayısının aynı biçimde azalacağı anlamına gelmez; tek bir ağaç çok sayıda böceği besleyebilir. Enerji, sayı ve biyokütle piramitlerini aynı grafik sanma.' }
    ],
    memory: 'Madde döngüye katılır; enerji tek yönlü akar ve ısıya dönüşerek sistemden dağılır.',
    question: { stem: 'Bir besin zincirinde üreticilerden üst tüketicilere doğru çıkıldıkça hangisinin azalması beklenir?', options: ['Her durumda bireylerin vücut büyüklüğü', 'Bir sonraki basamağa aktarılabilecek toplam enerji', 'Bütün canlıların gen çeşidi', 'Her durumda tek bir bireyin kütlesi'], answer: 1, explanation: 'Enerjinin tamamı bir üst basamağa aktarılmaz; metabolik kullanım ve ısı kaybı nedeniyle aktarılabilir toplam enerji azalır. Birey boyu veya kütlesi için aynı zorunlu yön yoktur.' },
    cards: [{ front: 'Komüniteye cansız çevre eklenince hangi düzey oluşur?', back: 'Ekosistem.' }, { front: 'Besin zincirindeki ok nereye yönelir?', back: 'Besin olan canlıdan onu tüketen canlıya; madde ve enerji aktarımını izler.' }],
    source: { book: 'TYT-bio', page: 145 }
  },
  {
    id: 'bio-ayt-01', subject: 'biyoloji', exam: 'AYT', title: 'Sinir iletiminde sinyalin dilini çöz', unit: 'Sinir sistemi', minutes: 6,
    tags: ['impuls', 'eşik', 'miyelin', 'sinaps'],
    summary: 'Tek bir nöronda aksiyon potansiyelinin büyüklüğü uyarı şiddetiyle sürekli artmaz. Bilgi, impuls sıklığı ve etkinleşen yollarla kodlanabilir.',
    visual: { type: 'flow', nodes: [
      { label: 'Uyarı ve eşik', detail: 'Zar potansiyeli eşik değere ulaşırsa aksiyon potansiyeli oluşur. Eşik altı değişim aynı tür yayılan impulsu oluşturmaz.' },
      { label: 'Aksonda iletim', detail: 'İyon kanallarının açılıp kapanması zar boyunca elektriksel değişimin ilerlemesini sağlar.' },
      { label: 'Ya hep ya hiç', detail: 'Aynı nöronda oluşan aksiyon potansiyellerinin genliği, eşik üstü uyarı arttıkça büyüyüp durmaz.' },
      { label: 'Hız ve sıklık', detail: 'Miyelin ve akson çapı iletim hızını etkiler. Uyarı şiddeti ise uygun aralıkta impuls sıklığını artırabilir.' },
      { label: 'Kimyasal sinaps', detail: 'Akson ucundan salınan nörotransmitter, sonraki hücredeki reseptöre bağlanır; uyarıcı veya engelleyici etki oluşturabilir.' }
    ] },
    sections: [
      { title: 'Genlik, sıklık ve hız üç ayrı değişken', text: 'Bir grafikte impulsların yüksekliği aynı, araları daha kısaysa sıklık artmıştır. Bu, tek bir impulsun daha hızlı ilerlediğini göstermez. Aynı nöronda eşik üstü uyarının artması genliği büyütmek yerine birim zamandaki impuls sayısını artırabilir.' },
      { title: 'Yol ve görev ayrımı', text: 'Duyu nöronu reseptörden merkezi sinir sistemine; motor nöron merkezden kas veya beze bilgi taşır. Ara nöronlar merkezde bağlantı kurar. Reflekste omurilik devresi hızlı yanıtı düzenleyebilir; bu, beynin olaydan hiç haberdar olmayacağı anlamına gelmez.' }
    ],
    memory: 'Uyarı şiddeti ≠ impuls genliği ≠ iletim hızı. Aynı nöronda sıklık artabilir.',
    question: { stem: 'Aynı nörona, uygun bir aralıkta giderek daha güçlü eşik üstü uyarılar veriliyor. Aşağıdakilerden hangisi artabilir?', options: ['Her impulsun genliği', 'Yalnız uyarı güçlendiği için akson çapı', 'Birim zamandaki impuls sayısı', 'Her impulsun içerdiği kromozom sayısı'], answer: 2, explanation: 'Eşik üstü uyarının şiddeti impuls sıklığıyla kodlanabilir. Aynı nöronda aksiyon potansiyelinin genliği ya hep ya hiç ilkesine uyar; akson çapı uyarıyla anlık büyümez.' },
    cards: [{ front: 'Miyelin hangi özelliği artırır?', back: 'Akson boyunca impuls iletim hızını; impulsun genliğini artırmasıyla açıklanmaz.' }, { front: 'Duyu ve motor nöronun yönü?', back: 'Duyu: reseptör → merkez. Motor: merkez → kas veya bez.' }],
    source: { book: 'AYT-bio', page: 11 }
  },
  {
    id: 'bio-ayt-02', subject: 'biyoloji', exam: 'AYT', title: 'Hormonlarda hedef ve geri bildirim', unit: 'Endokrin sistem', minutes: 6,
    tags: ['hormon', 'reseptör', 'negatif geri bildirim', 'insülin'],
    summary: 'Hormonlar kanla taşınsa da yalnız uygun reseptörü taşıyan hedef hücrelerde etki oluşturur. Negatif geri bildirim sapmayı azaltır.',
    visual: { type: 'cycle', nodes: [
      { label: 'Değişim', detail: 'Kandaki glikoz gibi bir değişken normal aralığından uzaklaşır.' },
      { label: 'Salgı', detail: 'İlgili endokrin hücreler değişime yanıt olarak hormon salgısını düzenler.' },
      { label: 'Hedef', detail: 'Hormon dolaşımla taşınır; uygun reseptörü olan hücreler yanıt verir.' },
      { label: 'Yanıt', detail: 'Kan glikozu yükseldiğinde insülin; belirli dokularda glikoz alımı ve depolanmasını destekleyerek düşüşe katkı sağlar.' },
      { label: 'Dengeye yaklaşma', detail: 'İlk sapmanın azalması, onu düzelten salgı uyarısını da azaltır. Bu negatif geri bildirimdir.' }
    ] },
    sections: [
      { title: 'İnsülin ve glukagonu karşılaştır', text: 'Pankreasın beta hücrelerinden salgılanan insülin kan glikozunu düşürücü; alfa hücrelerinden salgılanan glukagon karaciğer üzerinden yükseltici etki gösterir. Bu hormonlar zıt etkileriyle dengeye katkı sağlar. Zıt etki, aynı hücreden salgılandıkları anlamına gelmez.' },
      { title: 'Üretim yeri ile salınma yeri farklı olabilir', text: 'ADH ve oksitosin hipotalamusta üretilip hipofizin arka lobundan kana salınır. Bu nedenle bir hormon sorusunda “nerede üretilir?” ile “nereden salınır?” ifadelerini ayır. Endokrin bezler salgılarını kanala değil kana verir.' }
    ],
    memory: 'Kanda dolaşmak herkesi etkilemek değildir: hedef hücreyi uygun reseptör belirler.',
    question: { stem: 'Bir hormon kanla pek çok dokuya ulaştığı hâlde yalnız bazı hücreleri doğrudan etkilemektedir. Bunu en iyi hangi özellik açıklar?', options: ['Hormonun yalnız atardamarlarda bulunması', 'Bütün hücrelerin aynı hormonları üretmesi', 'Hormonun her ulaştığı hücreye dönüşmesi', 'Hedef hücrelerde uygun reseptörlerin bulunması'], answer: 3, explanation: 'Hedef hücrenin hormona yanıt verebilmesi uygun reseptöre bağlıdır. Hormonun dolaşımda bulunması, her hücrede aynı etkiyi oluşturması demek değildir.' },
    cards: [{ front: 'Negatif geri bildirim ne yapar?', back: 'Başlangıçtaki sapmayı azaltan yanıt oluşturur; dengeye yaklaşıldıkça uyarı zayıflar.' }, { front: 'ADH nerede üretilir, nereden salınır?', back: 'Hipotalamusta üretilir; hipofizin arka lobundan kana salınır.' }],
    source: { book: 'AYT-bio', page: 23 }
  },
  {
    id: 'bio-ayt-03', subject: 'biyoloji', exam: 'AYT', title: 'Duyudan algıya giden yol', unit: 'Duyu organları', minutes: 6,
    tags: ['reseptör', 'retina', 'kulak', 'adaptasyon'],
    summary: 'Duyu reseptörleri uygun uyarıyı sinirsel bilgiye dönüştürür. Duyunun türü, etkinleşen reseptör ve sinir yoluyla ilişkilidir.',
    visual: { type: 'flow', nodes: [
      { label: 'Özgül uyarı', detail: 'Işık, mekanik etki veya kimyasal madde farklı reseptörleri uyarır.' },
      { label: 'Dönüştürme', detail: 'Reseptör etkinliği, sinir sistemi tarafından taşınan bilgiye dönüştürülür.' },
      { label: 'Göz', detail: 'Kornea ve mercek ışığı kırar; retinadaki çubuk ve koni hücreleri ışığı algılar.' },
      { label: 'Kulak', detail: 'Salyangozdaki duyu hücreleri işitmeyle; yarım daire kanalları dönme hareketlerinin algılanmasıyla ilişkilidir.' },
      { label: 'Merkezi değerlendirme', detail: 'Duyu yollarıyla taşınan bilgiler merkezlerde işlenir; reseptör ile algı merkezi aynı yapı değildir.' }
    ] },
    sections: [
      { title: 'Odaklama ile algılamayı ayır', text: 'Göz merceği ışığın retinaya odaklanmasına yardım eder; ışığı sinirsel bilgiye dönüştüren yapı değildir. Yakına bakarken mercek kalınlaşır, uzağa bakarken incelir. Çubuklar düşük ışıkta görmeye; koniler renkli ve ayrıntılı görmeye katkı sağlar.' },
      { title: 'Denge ve işitme aynı organın farklı işleri', text: 'Kulakta hem işitme hem dengeye ilişkin reseptörler vardır ancak görevli bölümler farklıdır. İç kulaktaki salyangoz işitme, yarım daire kanalları başın dönme hareketleriyle ilişkilidir. Bazı reseptörlerde sabit uyarıya yanıtın zamanla azalması duyu adaptasyonudur.' }
    ],
    memory: 'Mercek odaklar; retina algılar. Salyangoz işitme; yarım daire kanalları dönme hareketi.',
    question: { stem: 'Gözde ışığın algılanıp sinirsel bilgiye dönüştürülmesinde doğrudan görev alan hücreler hangi yapıda bulunur?', options: ['Retina', 'Göz merceği', 'Kornea', 'Sert tabaka'], answer: 0, explanation: 'Fotoreseptör olan çubuk ve koni hücreleri retinada bulunur. Mercek ve kornea ışığı kırarak odaklanmaya katkı sağlar.' },
    cards: [{ front: 'Yakına bakarken göz merceği nasıl değişir?', back: 'Kalınlaşır; kırma gücü artar.' }, { front: 'Duyu adaptasyonu nedir?', back: 'Bazı reseptörlerin sürekli ve değişmeyen uyarıya yanıtının zamanla azalması.' }],
    source: { book: 'AYT-bio', page: 32 }
  },
  {
    id: 'bio-ayt-04', subject: 'biyoloji', exam: 'AYT', title: 'Kas kasılırken ne kısalır?', unit: 'Destek ve hareket sistemi', minutes: 6,
    tags: ['sarkomer', 'aktin', 'miyozin', 'ATP', 'kalsiyum'],
    summary: 'Çizgili kasın kasılmasında aktin ve miyozin filamentleri birbirinin üzerinden kayar. Filamentler değil, sarkomer kısalır.',
    visual: { type: 'flow', nodes: [
      { label: 'Uyarı', detail: 'Kas hücresine gelen sinyal, hücre içinde kalsiyumun serbestleşmesine yol açar.' },
      { label: 'Etkileşim', detail: 'Kalsiyum, aktin ve miyozin arasındaki etkileşimin kurulmasına olanak sağlayan düzenlemeyi başlatır.' },
      { label: 'Kayma', detail: 'ATP kullanılarak çapraz köprü döngüsü işler; aktin filamentleri miyozinlerin arasına doğru kayar.' },
      { label: 'Sarkomer', detail: 'Z çizgileri yaklaşır; I bandı ve H bölgesi daralır. A bandının ve filamentlerin boyu değişmez.' },
      { label: 'Gevşeme', detail: 'Kalsiyumun depoya geri taşınmasında da enerji gerekir; gevşeme ATP ile ilişkisiz bir süreç değildir.' }
    ] },
    sections: [
      { title: 'Şekilde sabit kalan yapıyı ara', text: 'Kasılma çiziminde aktin ve miyozini kısa çizmek yerine aralarındaki örtüşmeyi artır. Sarkomerin uçları yaklaşırken miyozin uzunluğunu temsil eden A bandı sabit kalır. Kasılmayı filamentlerin büzüşmesi diye yorumlamak mekanizmayı yanlış kurar.' },
      { title: 'Kas kemiği çeker', text: 'Tendon kası kemiğe, bağ ise kemikleri birbirine bağlar. Kaslar çekme kuvveti üretir; bir eklemi zıt yönlerde hareket ettiren kaslar antagonistik çalışabilir. Kemik de canlı bir dokudur; damarlar ve hücreler içerir, yalnız cansız bir destek çubuğu değildir.' }
    ],
    memory: 'Kayma modeli: filament boyu sabit, örtüşme artar, sarkomer kısalır; A bandı değişmez.',
    question: { stem: 'İskelet kasında sarkomer kısalırken hangisi değişmeden kalır?', options: ['Z çizgileri arasındaki uzaklık', 'Miyozin filamentinin boyu', 'I bandının genişliği', 'H bölgesinin genişliği'], answer: 1, explanation: 'Aktin ve miyozin filamentleri kısalmaz; birbirinin üzerinden kayar. Z çizgileri yaklaşır, I bandı ve H bölgesi daralırken miyozin filamentinin boyu sabit kalır.' },
    cards: [{ front: 'Kasılmada A bandı değişir mi?', back: 'Hayır. Miyozin filamentinin boyunu kapsayan A bandı sabit kalır.' }, { front: 'Tendon ve bağın farkı?', back: 'Tendon kası kemiğe; bağ kemikleri birbirine bağlar.' }],
    source: { book: 'AYT-bio', page: 55 }
  },
  {
    id: 'bio-ayt-05', subject: 'biyoloji', exam: 'AYT', title: 'Sindirim yolunda işlemi takip et', unit: 'Sindirim sistemi', minutes: 6,
    tags: ['hidroliz', 'safra', 'enzim', 'emilim'],
    summary: 'Mekanik sindirim yüzeyi artırır; kimyasal sindirim enzimlerle bağları parçalar. Emilim, küçük ürünlerin iç ortama alınmasıdır.',
    visual: { type: 'flow', nodes: [
      { label: 'Ağız', detail: 'Çiğneme mekanik etki yapar; tükürük amilazı nişastanın kimyasal sindirimini başlatır.' },
      { label: 'Mide', detail: 'Karıştırma mekaniktir; asidik ortamda pepsin protein sindiriminde görev alır.' },
      { label: 'İnce bağırsak', detail: 'Pankreas ve bağırsak enzimleriyle besinlerin kimyasal sindirimi tamamlanır; emilim yüzeyi villuslarla genişler.' },
      { label: 'Safra', detail: 'Karaciğerde üretilir, safra kesesinde depolanır. Yağı küçük damlacıklara ayırır; sindirim enzimi değildir.' },
      { label: 'Emilim', detail: 'Monosakkarit ve amino asitler kan yoluna; yağların önemli bir bölümü işlenerek lenf yoluna katılır.' },
      { label: 'Kalın bağırsak', detail: 'Su ve elektrolitlerin geri kazanılmasına katkı sağlar; protein sindiriminin başladığı yer değildir.' }
    ] },
    sections: [
      { title: 'Safrayı lipazdan ayır', text: 'Safra yağ damlacıklarını küçülterek lipazın etki edeceği yüzeyi artırır. Bu işlem yağ moleküllerinin kimyasal bağlarını enzimle parçalamak değildir. Lipaz ise trigliseritlerin kimyasal sindiriminde görevli enzimdir. Yardımcı olmak ile enzim olmak farklıdır.' },
      { title: 'Sindirim ile emilim aynı olay değildir', text: 'Proteinlerin amino asitlere parçalanması sindirim; ürünlerin bağırsak yüzeyinden kana alınması emilimdir. Su, mineral ve vitaminler yapı taşlarına sindirilmeden emilebilir. İnce bağırsak kıvrımları, villuslar ve mikrovilluslar emilim için geniş yüzey oluşturur.' }
    ],
    memory: 'Safra yüzeyi artırır; lipaz bağları parçalar. Sindirim küçültür, emilim iç ortama aktarır.',
    question: { stem: 'Safranın yağların sindirimine katkısı hangisidir?', options: ['Proteinleri amino asitlere parçalamak', 'Lipaz yerine enzim olarak çalışmak', 'Yağ damlacıklarını küçülterek etki yüzeyini artırmak', 'Yağların kimyasal sindirimini midede tamamlamak'], answer: 2, explanation: 'Safra, yağları küçük damlacıklara ayırıp lipazın etki yüzeyini artırır. Enzim içererek yağ bağlarını hidroliz eden yapı gibi değerlendirilmez.' },
    cards: [{ front: 'Proteinlerin kimyasal sindirimi nerede başlar?', back: 'Midede, pepsinin etkisiyle; ince bağırsakta sürüp tamamlanır.' }, { front: 'Villusların temel katkısı?', back: 'İnce bağırsakta emilim yüzeyini artırmak.' }],
    source: { book: 'AYT-bio', page: 62 }
  },
  {
    id: 'bio-ayt-06', subject: 'biyoloji', exam: 'AYT', title: 'Dolaşım ağı ve savunma belleği', unit: 'Dolaşım ve bağışıklık', minutes: 6,
    tags: ['küçük dolaşım', 'damarlar', 'antikor', 'bağışıklık'],
    summary: 'Damar adı kanın oksijen oranını değil kalbe göre yönünü gösterir. Bağışıklıkta doğal savunma ile özgül, bellekli yanıtı ayır.',
    visual: { type: 'cycle', nodes: [
      { label: 'Küçük dolaşım', detail: 'Sağ karıncık → akciğer atardamarı → akciğer → akciğer toplardamarı → sol kulakçık.' },
      { label: 'Büyük dolaşım', detail: 'Sol karıncık → aort → vücut dokuları → ana toplardamarlar → sağ kulakçık.' },
      { label: 'Damarın adı', detail: 'Atardamar kalpten uzaklaşır; toplardamar kalbe döner. Akciğer damarları oksijen genellemesinin önemli istisnasıdır.' },
      { label: 'Kılcal damar', detail: 'İnce duvar, geniş toplam kesit ve yavaş akış doku ile madde alışverişini destekler.' },
      { label: 'Doğal savunma', detail: 'Deri, mukus ve fagositoz gibi mekanizmalar özgül antijen belleği gerektirmeyen korumaya katkı sağlar.' },
      { label: 'Kazanılmış yanıt', detail: 'B ve T lenfositler özgül yanıtın parçalarıdır. Bellek hücreleri aynı antijene sonraki yanıtı hızlandırabilir.' }
    ] },
    sections: [
      { title: 'Akciğer damarlarını ezber yerine yönle kur', text: 'Akciğer atardamarı sağ karıncıktan akciğere oksijence fakir kan götürür. Akciğer toplardamarı akciğerden sol kulakçığa oksijence zengin kan getirir. Dolayısıyla “Bütün atardamarlar oksijence zengindir.” genellemesi yanlıştır.' },
      { title: 'Aktif ve pasif bağışıklık', text: 'Aktif bağışıklıkta bireyin kendi özgül yanıtı gelişir; aşı antijenle bu yanıtın ve belleğin oluşmasını hedefler. Pasif bağışıklıkta hazır antikor alınır; bu yolla alıcıda aynı tür uzun süreli bellek oluşması beklenmez. Antikorları etkinleşen B lenfositlerden gelişen plazma hücreleri üretir.' }
    ],
    memory: 'Atar = kalpten çıkar. Toplar = kalbe döner. Aktif = kendi yanıtı; pasif = hazır antikor.',
    question: { stem: 'Sağlıklı bir insanda akciğer toplardamarı için hangisi doğrudur?', options: ['Sağ karıncıktan akciğere gider.', 'Oksijence fakir kanı akciğere götürür.', 'Kalpten uzaklaştığı için toplardamardır.', 'Oksijence zengin kanı sol kulakçığa getirir.'], answer: 3, explanation: 'Akciğer toplardamarları akciğerde oksijenlenen kanı kalbin sol kulakçığına taşır. Toplardamar adı kanın kalbe dönüş yönünü belirtir.' },
    cards: [{ front: 'Antikoru hangi hücreler üretir?', back: 'Etkinleşen B lenfositlerden gelişen plazma hücreleri.' }, { front: 'Pasif bağışıklığın temel özelliği?', back: 'Hazır antikor alınır; alıcıda bu yolla uzun süreli özgül bellek oluşması beklenmez.' }],
    source: { book: 'AYT-bio', page: 79 }
  },
  {
    id: 'bio-ayt-07', subject: 'biyoloji', exam: 'AYT', title: 'Gaz değişimi ve böbrekte seçici geri kazanım', unit: 'Solunum ve boşaltım', minutes: 6,
    tags: ['diyafram', 'difüzyon', 'nefron', 'ADH'],
    summary: 'Akciğer havalanması basınç farkıyla, gaz değişimi kısmi basınç farkıyla gerçekleşir. Böbrek süzülen sıvıyı geri emilim ve salgılamayla düzenler.',
    visual: { type: 'flow', nodes: [
      { label: 'Soluk alma', detail: 'Diyafram kasılıp düzleşir; göğüs hacmi artar, akciğer içi basınç düşer ve hava içeri girer.' },
      { label: 'Gaz değişimi', detail: 'Oksijen ve karbondioksit alveol-kılcal yüzeyinde kısmi basınç farkları yönünde difüzyon yapar.' },
      { label: 'Süzülme', detail: 'Glomerulustan Bowman kapsülüne basınç etkisiyle sıvı geçer. Sağlıklı durumda kan hücreleri ve büyük proteinler tutulur.' },
      { label: 'Geri emilim', detail: 'Gerekli su ve maddeler nefron kanalından kana geri alınır; süzülmüş her madde idrarla atılmaz.' },
      { label: 'Salgılama', detail: 'Bazı maddeler kandan nefron kanalına aktarılır; bu yön geri emilimin tersidir.' },
      { label: 'ADH', detail: 'Toplama kanallarında su geçirgenliğini artırarak geri emilimi destekler; diğer koşullar aynıysa idrar hacmi azalır.' }
    ] },
    sections: [
      { title: 'Havalanma, gaz değişimi, hücresel solunum', text: 'Soluk almak havayı akciğere taşır; gaz değişimi oksijeni kana geçirir. Hücresel solunum ise hücrelerde ATP senteziyle ilişkili tepkimelerdir. Bu üç işlem aynı olay değildir. Akciğerlerde oksijenin kana geçişini doğrudan ATP ile pompalama olarak açıklama.' },
      { title: 'İdrarı bir işlem bilançosu olarak düşün', text: 'Bir maddenin idrarla atılan miktarı, süzülen ve salgılanan miktardan geri emilen kısmın çıkarılmasıyla ilişkilidir. Sağlıklı bireyde süzülen glikozun normal koşullarda geri emilmesi beklenir. ADH’nin artması suyun daha çok geri kazanılmasına ve daha az hacimli, daha yoğun idrara katkı sağlayabilir.' }
    ],
    memory: 'Geri emilim: kanal → kan. Salgılama: kan → kanal. ADH: suyu geri kazan.',
    question: { stem: 'Diğer koşullar değişmeden ADH etkinliği arttığında hangisi beklenir?', options: ['Suyun geri emiliminin artması ve idrar hacminin azalması', 'Suyun geri emiliminin durması', 'Kan hücrelerinin Bowman kapsülüne geçmesi', 'Diyaframın nefron içine hareket etmesi'], answer: 0, explanation: 'ADH toplama kanallarının su geçirgenliğini artırır. Daha fazla su kana geri alınabilir; idrar hacmi azalır ve yoğunluğu artabilir.' },
    cards: [{ front: 'Soluk alırken diyafram ne yapar?', back: 'Kasılır ve düzleşir; göğüs hacmi artarken akciğer içi basınç düşer.' }, { front: 'Süzülmek mutlaka idrarla atılmak mıdır?', back: 'Hayır. Süzülen bir madde geri emilip kana dönebilir.' }],
    source: { book: 'AYT-bio', page: 98 }
  },
  {
    id: 'bio-ayt-08', subject: 'biyoloji', exam: 'AYT', title: 'Üremeden gelişime: sayı ve görev değişimi', unit: 'Üreme ve embriyonik gelişim', minutes: 6,
    tags: ['FSH', 'LH', 'döllenme', 'segmentasyon', 'farklılaşma'],
    summary: 'Gametlerin birleşmesi kromozom takımını tamamlar. İlk bölünmeler hücre sayısını artırırken sonraki gelişimde farklı genlerin etkinliği görev farklılıkları oluşturur.',
    visual: { type: 'flow', nodes: [
      { label: 'Gamet oluşumu', detail: 'Mayoz, haploit üreme hücrelerinin oluşmasına katkı sağlar; hormonlar üreme organlarının işleyişini düzenler.' },
      { label: 'Döngü', detail: 'FSH folikül gelişimini; LH yükselişi ovulasyonu destekler. Döngü bir hormonun tek başına yönettiği düz bir sıra değildir.' },
      { label: 'Döllenme', detail: 'Yumurta ve sperm çekirdeklerinin birleşmesiyle diploit zigot oluşur; insanda normal olarak yumurta kanalında gerçekleşir.' },
      { label: 'Segmentasyon', detail: 'Ardışık mitozlarla blastomer sayısı artar. Başlangıçta embriyonun toplam hacmi belirgin artmadan hücreler küçülür.' },
      { label: 'Farklılaşma', detail: 'Hücrelerin farklı gen gruplarını kullanması, aynı temel genetik bilgiye sahip hücrelerin farklı görevler kazanmasını sağlar.' }
    ] },
    sections: [
      { title: 'Kromozom sayısını basamak basamak taşı', text: 'İnsanda gametler n, zigot 2n durumundadır. Zigotun normal mitozlarıyla oluşan embriyo hücreleri 2n durumunu korur. Döllenme ile mitozu aynı sayısal değişim gibi görme: biri iki gameti birleştirir, diğeri kopyalanan bilgiyi yavru hücrelere dağıtır.' },
      { title: 'Bölünme ile farklılaşmayı ayır', text: 'Erken segmentasyonda hücre sayısı artarken hücre başına hacim azalır. Daha sonraki gelişimde büyüme, hücre göçü ve farklılaşma birlikte işler. Bir kas hücresiyle bir sinir hücresinin farklı iş yapması, temel olarak farklı genlerin etkinleştirilmesiyle açıklanır; her birinin tamamen farklı DNA taşıması gerekmez.' }
    ],
    memory: 'Mayoz: n. Döllenme: 2n. Normal mitoz: 2n korunur. Farklılaşma: gen etkinliği değişir.',
    question: { stem: 'Embriyonun toplam hacminin belirgin artmadığı erken segmentasyonda hangi değişim beklenir?', options: ['Hücre sayısının azalması', 'Hücre sayısının artması, hücre başına hacmin azalması', 'Her bölünmede kromozom takımının yarıya inmesi', 'DNA eşlenmeden art arda mitoz yapılması'], answer: 1, explanation: 'Segmentasyon, zigotun hacimce büyümesiyle aynı hızda olmayan ardışık mitozlarıdır. Bu nedenle hücre sayısı artarken blastomerler küçülür; kromozom takım sayısı korunur.' },
    cards: [{ front: 'İnsanda döllenme normal olarak nerede gerçekleşir?', back: 'Yumurta kanalında; embriyonun rahme yerleşmesi daha sonra gerçekleşir.' }, { front: 'Farklılaşan hücreler neden farklı işler yapar?', back: 'Temel olarak farklı gen gruplarını etkinleştirdikleri için farklı proteinler üretirler.' }],
    source: { book: 'AYT-bio', page: 125 }
  },
  {
    id: 'bio-ayt-09', subject: 'biyoloji', exam: 'AYT', title: 'Popülasyondan komüniteye etkileşim', unit: 'Komünite ve popülasyon ekolojisi', minutes: 6,
    tags: ['rekabet', 'mutualizm', 'taşıma kapasitesi', 'büyüme'],
    summary: 'Popülasyon değişimini doğum, ölüm ve göçlerle; türler arası ilişkileri yarar-zarar etkileriyle yorumla. Taşıma kapasitesi çevre koşullarına bağlıdır.',
    visual: { type: 'compare', nodes: [
      { label: 'Popülasyon bilançosu', detail: 'Doğum + içe göç sayıyı artırır; ölüm + dışa göç azaltır.' },
      { label: 'Taşıma kapasitesi', detail: 'Çevrenin mevcut koşullarda sürdürebildiği popülasyon büyüklüğüyle ilişkilidir; değişmez bir tür özelliği değildir.' },
      { label: 'Rekabet − / −', detail: 'Sınırlı ortak kaynak için yarışma her iki taraf üzerinde olumsuz etki oluşturur; aynı veya farklı türler arasında olabilir.' },
      { label: 'Mutualizm + / +', detail: 'İki tür de ilişkiden yarar sağlar. Kommensalizmde ise biri yararlanır, diğerinde belirgin etki yoktur: + / 0.' },
      { label: 'Avcılık / parazitlik + / −', detail: 'Bir taraf yararlanırken diğeri zarar görür. İlişkilerin zaman içindeki etkileri popülasyon büyüklüklerini değiştirebilir.' },
      { label: 'Süksesyon', detail: 'Bir alandaki topluluk bileşiminin zamanla değişmesidir; tek bir bireyin büyümesiyle aynı değildir.' }
    ] },
    sections: [
      { title: 'S biçimli büyümenin sonunu doğru oku', text: 'Kaynak sınırlamaları arttığında popülasyonun net büyümesi yavaşlayabilir. Taşıma kapasitesi çevresinde toplam doğum ve içe göç, ölüm ve dışa göçle yaklaşık dengelenir. Grafik yataylaştığında doğumların ve ölümlerin tamamen durduğunu düşünme.' },
      { title: 'İşaretler birey sayısını değil etkiyi gösterir', text: 'Artı yarar, eksi zarar, sıfır belirgin etkisizlik anlamına gelir. +/+ iki bireyin mutlaka aynı sayıda çoğaldığını söylemez. Av-avcı grafiğinde av artışını avcı artışı izleyebilir; aradaki gecikmeyi ve besin dışındaki koşulları da dikkate al.' }
    ],
    memory: 'ΔN = doğum + içe göç − ölüm − dışa göç. Taşıma kapasitesi çevreye bağlıdır.',
    question: { stem: 'Bir popülasyonda bir yılda 30 doğum, 10 ölüm, 5 içe göç ve 8 dışa göç gerçekleşmiştir. Birey sayısındaki net değişim nedir?', options: ['13 azalma', '20 artış', '17 artış', '43 artış'], answer: 2, explanation: 'Net değişim 30 + 5 − 10 − 8 = 17’dir. Doğum ve içe göç eklenir; ölüm ve dışa göç çıkarılır.' },
    cards: [{ front: 'Mutualizm ve kommensalizm işaretleri?', back: 'Mutualizm +/+; kommensalizm +/0.' }, { front: 'Taşıma kapasitesinde doğum tamamen durur mu?', back: 'Hayır. Net değişim yaklaşık sıfır olabilir; doğum ve ölüm gibi süreçler devam eder.' }],
    source: { book: 'AYT-bio', page: 135 }
  },
  {
    id: 'bio-ayt-10', subject: 'biyoloji', exam: 'AYT', title: 'DNA’dan proteine bilgi akışı', unit: 'Genetik şifre ve protein sentezi', minutes: 6,
    tags: ['replikasyon', 'transkripsiyon', 'translasyon', 'kodon'],
    summary: 'DNA eşlenmesi bilgi kopyalar; transkripsiyon RNA üretir; translasyon mRNA bilgisini amino asit dizisine dönüştürür.',
    visual: { type: 'flow', demo: 'dna', nodes: [
      { label: 'DNA ve eşlenme', detail: 'Replikasyonda iki DNA zinciri kalıp olur; yeni çift sarmalların her birinde bir eski, bir yeni zincir bulunur.' },
      { label: 'Transkripsiyon', detail: 'Bir genin kalıp DNA zinciri kullanılarak RNA sentezlenir. RNA’da timin yerine urasil bulunur.' },
      { label: 'mRNA kodonu', detail: 'mRNA’daki üç nükleotit bir kodon oluşturur. Bazı kodonlar amino asit, bazıları durma sinyali belirtir.' },
      { label: 'tRNA ve ribozom', detail: 'tRNA amino asit taşır; antikodonuyla uygun kodona eşleşir. Ribozom polipeptit sentezini gerçekleştirir.' },
      { label: 'Protein', detail: 'Amino asit dizisi oluşur; katlanma ve işlenmeyle işlevsel yapı kazanır. Protein sentezinde DNA’nın tamamı her seferinde eşlenmez.' }
    ] },
    sections: [
      { title: 'Kalıp zinciri ile kodlayan zincir', text: 'RNA, kalıp DNA zincirine tamamlayıcıdır. Kalıp DNA 3′-TAC-5′ ise karşısına 5′-AUG-3′ mRNA yazılır. Kodlayan DNA zinciriyle mRNA aynı yönde karşılaştırıldığında sıra benzerdir; DNA’daki T yerine RNA’da U bulunur. Soruda zincirin adı ve yönü önemlidir.' },
      { title: 'Yer ve görev ayrımı', text: 'Ökaryotta çekirdek genlerinden transkripsiyon çekirdekte; bunların mRNA’larından translasyon sitoplazmadaki ribozomlarda gerçekleşir. Mitokondri ve kloroplast kendi sınırlı genetik sistemlerine de sahiptir. Bir amino asidin birden çok kodonu olabilir; bu durum her kodonun birden çok amino asit kodlaması demek değildir.' }
    ],
    memory: 'Replikasyon DNA → DNA; transkripsiyon DNA → RNA; translasyon mRNA → polipeptit.',
    question: { stem: 'Kalıp DNA zincirinin 3′-TAC-5′ bölümünden sentezlenen mRNA bölümü hangisidir?', options: ['3′-TAC-5′', '5′-UAC-3′', '5′-ATG-3′', '5′-AUG-3′'], answer: 3, explanation: 'RNA kalıp DNA’ya tamamlayıcı ve ters yönlü sentezlenir. T karşısına A, A karşısına U, C karşısına G gelir: 5′-AUG-3′.' },
    cards: [{ front: 'Yarı korunumlu DNA eşlenmesi?', back: 'Her yeni DNA molekülünde bir eski ve bir yeni sentezlenmiş zincir bulunması.' }, { front: 'Kodon ve antikodon nerede?', back: 'Kodon mRNA’da; ona eşleşen antikodon tRNA’dadır.' }],
    source: { book: 'AYT-bio', page: 161 }
  },
  {
    id: 'bio-ayt-11', subject: 'biyoloji', exam: 'AYT', title: 'Fotosentez ve solunumun enerji muhasebesi', unit: 'Fotosentez ve hücresel solunum', minutes: 6,
    tags: ['ışığa bağımlı', 'Calvin döngüsü', 'ETS', 'fermantasyon'],
    summary: 'Fotosentez ışık enerjisini organik yapılara aktarır; hücresel solunum organik maddelerdeki enerjiyi ATP sentezine bağlar. Bitkiler her ikisini de yapar.',
    visual: { type: 'compare', nodes: [
      { label: 'Işığa bağımlı evre', detail: 'Kloroplastın tilakoit zarlarında ışık kullanılır; ATP ve NADPH üretilir. Açığa çıkan oksijenin kaynağı sudur.' },
      { label: 'Calvin döngüsü', detail: 'Stromada CO₂ organik moleküllere katılır; ışığa bağımlı evreden gelen ATP ve NADPH kullanılır.' },
      { label: 'Glikoliz', detail: 'Sitoplazmada glikoz piruvata parçalanır; net ATP ve indirgenmiş elektron taşıyıcısı elde edilir.' },
      { label: 'Oksijenli solunum', detail: 'Ökaryotta mitokondri önemli rol alır. ETS’de oksijen son elektron alıcısıdır; enerjinin büyük bölümü ATP sentezine burada aktarılır.' },
      { label: 'Fermantasyon', detail: 'ETS kullanılmaz. NAD⁺ yenilenerek glikolizin sürmesi sağlanır; ATP glikolizde substrat düzeyinde üretilir.' },
      { label: 'Net gaz değişimi', detail: 'Bitkide ölçülen net CO₂ alışverişi fotosentez ve solunumun birlikte sonucudur; net sıfır, iki sürecin de durması değildir.' }
    ] },
    sections: [
      { title: '“Işıktan bağımsız” ifadesinin sınırı', text: 'Calvin döngüsü doğrudan ışığı kullanmasa da ışığa bağımlı evrenin ürünlerine gereksinim duyar. Bu nedenle yalnız gece çalışan bir evre diye adlandırılamaz. Fotosentezde salınan O₂ suyun parçalanmasından gelir; CO₂’nin oksijenlerinden doğrudan çıkarılıyor gibi düşünme.' },
      { title: 'Fermantasyon, oksijensiz solunumla aynı değildir', text: 'Her ikisinde de oksijen kullanılmayabilir; fakat oksijensiz solunumda ETS vardır, fermantasyonda yoktur. Bitkiler fotosentez yaparken de hücresel solunumu sürdürebilir. Işıkta net oksijen çıkışı görmek, hücrenin oksijen tüketmediğini kanıtlamaz.' }
    ],
    memory: 'Fotosentezde O₂ sudan gelir. Fermantasyonda ETS yoktur. Net gaz değişimi iki sürecin farkıdır.',
    question: { stem: 'Fotosentez yapan bir bitkide açığa çıkan oksijen gazının kaynağı hangi maddedir?', options: ['Su', 'Karbondioksit', 'Glikoz', 'ATP'], answer: 0, explanation: 'Işığa bağımlı tepkimelerde suyun parçalanmasıyla elektron ve proton sağlanır; oksijen gazı açığa çıkar. Salınan O₂’nin kaynağı sudur.' },
    cards: [{ front: 'Bitkiler yalnız karanlıkta mı solunum yapar?', back: 'Hayır. Canlı bitki hücreleri uygun koşullarda ışıkta da karanlıkta da hücresel solunumu sürdürür.' }, { front: 'Fermantasyon ile oksijensiz solunumun ayırıcı ölçütü?', back: 'ETS kullanımı: oksijensiz solunumda vardır, fermantasyonda yoktur.' }],
    source: { book: 'AYT-bio', page: 179 }
  },
  {
    id: 'bio-ayt-12', subject: 'biyoloji', exam: 'AYT', title: 'Bitkide taşıma ve üremenin yönleri', unit: 'Bitki biyolojisi', minutes: 6,
    tags: ['ksilem', 'floem', 'stoma', 'tozlaşma', 'döllenme'],
    summary: 'Ksilem su ve mineral, floem organik besin taşınmasıyla ilişkilidir. Tozlaşma polenin taşınması, döllenme gametlerin birleşmesidir.',
    visual: { type: 'flow', nodes: [
      { label: 'Kök', detail: 'Emici tüyler alım yüzeyini artırır. Su osmozla; mineraller koşullara göre pasif veya aktif yollarla alınabilir.' },
      { label: 'Ksilem', detail: 'Su ve mineralleri kökten sürgüne taşır. Terleme-kohezyon gerilimi su sütununun yükselmesine katkı sağlar.' },
      { label: 'Stoma', detail: 'Bekçi hücrelerinin turgor değişimi açıklığı düzenler; gaz alışverişi ve terleme arasında denge kurulur.' },
      { label: 'Floem', detail: 'Organik besin kaynak organdan kullanım veya depo yeri olan havuza taşınır. Kaynak ve havuz mevsime göre değişebilir.' },
      { label: 'Tozlaşma', detail: 'Çiçekli bitkide polenin dişi organın tepeciğine ulaşmasıdır; henüz gamet birleşmesi değildir.' },
      { label: 'Çift döllenme', detail: 'Bir sperm yumurtayla zigotu; diğeri kutup çekirdekleriyle endosperm dokusunun başlangıcını oluşturur.' }
    ] },
    sections: [
      { title: 'Floemi yalnız aşağı taşıyan boru sanma', text: 'Olgun yaprak kaynak, büyüyen kök veya meyve havuz olabilir. Depo organı, depolanan besin yeniden kullanılırken kaynak hâline gelebilir. Bitkinin farklı floem borularında farklı yönlerde taşınma olabilir; aynı boruda aynı anda iki zıt akış varmış gibi çizme.' },
      { title: 'Polen, tohum ve meyveyi sırala', text: 'Polen çimlenip tüp oluşturduktan sonra sperm hücreleri embriyo kesesine ulaşır. Çift döllenme sonucunda embriyo ve besleyici endosperm gelişimi başlar. Genel olarak tohum taslağı tohumu, yumurtalık meyveyi oluşturur. Tozlaşma tek başına döllenmenin kesin gerçekleştiği anlamına gelmez.' }
    ],
    memory: 'Ksilem: su-mineral. Floem: kaynak → havuz. Tozlaşma taşıma, döllenme birleşme.',
    question: { stem: 'Çiçekli bitkilerde tozlaşmayı doğru tanımlayan seçenek hangisidir?', options: ['Sperm ile yumurtanın çekirdeklerinin birleşmesi', 'Polenin dişi organın tepeciğine taşınması', 'Yumurtalığın meyveye dönüşmesi', 'Tohumun çimlenmeye başlaması'], answer: 1, explanation: 'Tozlaşma, polenin tepeciğe ulaşmasıdır. Gametlerin birleşmesi döllenmedir; meyve gelişimi ve çimlenme daha sonraki farklı süreçlerdir.' },
    cards: [{ front: 'Kaynak ve havuz organ ne demek?', back: 'Kaynak besini floeme veren; havuz besini kullanmak veya depolamak üzere alan organdır.' }, { front: 'Tohum ve meyve hangi yapılardan gelişir?', back: 'Genel olarak tohum taslağından tohum, yumurtalıktan meyve gelişir.' }],
    source: { book: 'AYT-bio', page: 204 }
  }
]);
