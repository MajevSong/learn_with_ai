/* SAY hedefi için özgün TYT/AYT kimya mikro dersleri. */
window.LESSONS = (window.LESSONS || []).concat([
  {
    id: 'kim-tyt-01', exam: 'TYT', subject: 'kimya', title: 'Atomdan periyodik eğilimlere', unit: 'Atom ve periyodik sistem', minutes: 6,
    tags: ['proton', 'izotop', 'yarıçap', 'iyonlaşma enerjisi'],
    summary: 'Elementin kimliğini proton sayısı, tepkimelerdeki davranışını elektron düzeni belirler.',
    visual: { type: 'flow', demo: 'periodic', nodes: [
      { label: 'Çekirdek', detail: 'Atom numarası Z proton sayısıdır. Kütle numarası proton + nötron sayısıdır.' },
      { label: 'Elektron', detail: 'Nötr atomda elektron sayısı Z’ye eşittir. Elektron almak anyon, vermek katyon oluşturur.' },
      { label: 'Periyot ve grup', detail: 'Periyotlar yatay, gruplar düşeydir. Benzer değerlik elektron düzeni benzer özellikler doğurur.' },
      { label: 'Eğilim', detail: 'Yarıçap genellikle aşağı ve sola; iyonlaşma enerjisi yukarı ve sağa artar.' }
    ] },
    sections: [
      { title: 'Neyi değiştiriyorsun?', text: 'Proton sayısı değişirse element değişir. Nötron farkı aynı elementin izotoplarını, elektron farkı iyonlarını oluşturabilir. Kimyasal tepkimelerde çekirdeğin kimliği korunur.' },
      { title: 'Okların nedeni', text: 'Aşağı indikçe katman sayısı artar. Aynı periyotta sağa giderken artan çekirdek çekimi elektronları genellikle yaklaştırır. İyonlaşma enerjisi genel bir eğilimdir; 2A–3A ve 5A–6A geçişlerinde istisnalar bulunur.' }
    ], memory: 'Kimlik protonda; iyonlaşma elektron alışverişinde.',
    question: { stem: 'Nötr bir atom bir elektron aldığında hangisi kesinlikle değişmez?', options: ['Elektron sayısı', 'Elektriksel yükü', 'Atom numarası', 'Elektron/proton oranı'], answer: 2, explanation: 'Elektron alışverişi proton sayısını değiştirmez. Atom numarası proton sayısı olduğundan aynı kalır.' },
    cards: [{ front: 'İzotopları ayıran nedir?', back: 'Proton sayıları aynı, nötron sayıları farklıdır.' }, { front: 'Periyotta sağa doğru yarıçap niçin genellikle küçülür?', back: 'Katman sayısı değişmezken çekirdek çekimi artar.' }],
    source: { book: 'TYT-kim', page: 32 }
  },
  {
    id: 'kim-tyt-02', exam: 'TYT', subject: 'kimya', title: 'Bağ türü ile molekül polarlığını ayır', unit: 'Kimyasal türler ve bağlar', minutes: 6,
    tags: ['iyonik', 'kovalent', 'metalik', 'polar'],
    summary: 'Bir bağın polar olması, bütün molekülün polar olduğunu tek başına göstermez.',
    visual: { type: 'compare', nodes: [
      { label: 'İyonik bağ', detail: 'Zıt yüklü iyonlar arasındaki elektrostatik çekimdir; örgü yapısı oluşturur.' },
      { label: 'Kovalent bağ', detail: 'Atomların elektron çiftlerini ortaklaşa kullanmasıdır.' },
      { label: 'Metalik bağ', detail: 'Metal katyonları ile hareketli değerlik elektronları arasındaki çekimle açıklanır.' },
      { label: 'Molekül polarlığı', detail: 'Bağların kutupluluğu ve molekül geometrisi birlikte değerlendirilir.' }
    ] },
    sections: [
      { title: 'Yapıdan özellik çıkar', text: 'İyonik katılarda iyonlar yerlerinde tutulur; katı hâlde elektrik iletmezler. Erimiş hâlde hareketli iyonlar iletkenlik sağlar. Metallerde iletkenlik hareketli elektronlarla ilişkilidir.' },
      { title: 'CO₂ ve H₂O karşılaştırması', text: 'CO₂’de C–O bağları polar olsa da doğrusal yapıdaki bağ dipolleri birbirini götürür; molekül apolardır. H₂O açısal olduğundan O–H bağ dipolleri birbirini götürmez; molekül polardır.' }
    ], memory: 'Bağ için iki atomu, molekül için tüm geometriyi gör.',
    question: { stem: 'CO₂ molekülündeki C–O bağları polar olduğu hâlde molekülün apolar olmasının nedeni nedir?', options: ['Doğrusal yapıda bağ dipollerinin birbirini dengelemesi', 'Molekülde elektron bulunmaması', 'Bağların iyonik olması', 'Karbonun metal olması'], answer: 0, explanation: 'Molekül polarlığı bağların tek tek polarlığına ek olarak dipollerin uzaydaki bileşkesine bağlıdır.' },
    cards: [{ front: 'Kovalent bağın temel mekanizması?', back: 'Elektron çiftlerinin ortaklaşa kullanılması.' }, { front: 'Polar bağ her zaman polar molekül oluşturur mu?', back: 'Hayır. Simetrik geometride dipoller birbirini dengeleyebilir.' }],
    source: { book: 'TYT-kim', page: 36 }
  },
  {
    id: 'kim-tyt-03', exam: 'TYT', subject: 'kimya', title: 'Zayıf etkileşim, güçlü özellik farkı', unit: 'Türler arası etkileşimler', minutes: 5,
    tags: ['London', 'hidrojen bağı', 'kaynama', 'fiziksel değişim'],
    summary: 'Moleküller arası çekim, kaynama ve çözünme gibi makroskobik özellikleri etkiler.',
    visual: { type: 'compare', nodes: [
      { label: 'London', detail: 'Geçici dipollerle oluşur; bütün atom ve moleküllerde bulunur.' },
      { label: 'Dipol–dipol', detail: 'Polar moleküllerin kalıcı dipolleri arasındaki çekimdir.' },
      { label: 'Hidrojen bağı', detail: 'F, O veya N’ye bağlı H ile uygun F, O, N üzerindeki elektron çifti arasında oluşabilir.' },
      { label: 'Özellik', detail: 'Benzer koşullarda daha güçlü moleküller arası çekim, genellikle daha yüksek kaynama noktası getirir.' }
    ] },
    sections: [
      { title: 'Her bağ aynı yerde değil', text: 'Suyun buharlaşmasında H₂O molekülleri birbirinden uzaklaşır; molekül içindeki O–H kovalent bağları kopmaz. H₂O’nun kimyasal yapısı korunur.' },
      { title: 'Sıralama yaparken', text: 'Yalnız etkileşim adını ezberleyerek bütün maddeleri sıralama. Elektron sayısı, kutuplanabilirlik ve temas yüzeyi de çekimi etkiler. Büyük apolar bir molekülün kaynama noktası küçük polar bir molekülden yüksek olabilir.' }
    ], memory: 'Buharlaşma molekülleri ayırır; su molekülünü parçalamaz.',
    question: { stem: 'Saf su sıvı hâlden gaz hâline geçerken hangisi gerçekleşir?', options: ['O–H kovalent bağları tamamen kopar.', 'Su, H₂ ve O₂’ye ayrışır.', 'Su moleküllerinin atom sayısı artar.', 'Moleküller arası uzaklık artar; H₂O yapısı korunur.'], answer: 3, explanation: 'Hâl değişimi fiziksel bir olaydır. Moleküller arası düzen değişir; su molekülünün kimyasal kimliği korunur.' },
    cards: [{ front: 'London kuvvetleri yalnız apolarlarda mı vardır?', back: 'Hayır. Bütün atom ve moleküllerde bulunur; apolarlarda temel etkileşimdir.' }, { front: 'Hidrojen bağı kovalent O–H bağıyla aynı mı?', back: 'Hayır. Suyun molekül içindeki O–H bağı kovalenttir; moleküller arasındaki hidrojen bağı farklıdır.' }],
    source: { book: 'TYT-kim', page: 40 }
  },
  {
    id: 'kim-tyt-04', exam: 'TYT', subject: 'kimya', title: 'Hâl değişimini taneciklerle izle', unit: 'Maddenin hâlleri', minutes: 5,
    tags: ['katı', 'sıvı', 'gaz', 'ısıtma grafiği'],
    summary: 'Isı almak her zaman sıcaklığın yükselmesi anlamına gelmez.',
    visual: { type: 'flow', demo: 'particles', nodes: [
      { label: 'Katı', detail: 'Tanecikler belirli konumlar çevresinde titreşir; belirli şekil ve hacim vardır.' },
      { label: 'Sıvı', detail: 'Tanecikler yakın kalırken yer değiştirebilir; hacim belirli, şekil kabın biçimindedir.' },
      { label: 'Gaz', detail: 'Tanecikler arasındaki boşluk büyüktür; gaz kabı doldurur ve sıkıştırılabilir.' },
      { label: 'Hâl değişimi', detail: 'Saf maddede sabit basınçta alınan enerji tanecikler arası düzeni değiştirirken sıcaklık sabit kalabilir.' }
    ] },
    sections: [
      { title: 'Grafiğin eğimli bölümü', text: 'Tek fazlı bölgede ısı alışverişi sıcaklığı değiştirir. Sıcaklık, taneciklerin ortalama kinetik enerjisiyle ilişkilidir; toplam enerjiyle aynı kavram değildir.' },
      { title: 'Grafiğin yatay bölümü', text: 'Saf maddenin sabit basınçtaki erime veya kaynama sürecinde iki faz birlikte bulunur. Enerji alınmasına rağmen sıcaklık sabit kalabilir. Buharlaşma sıvı yüzeyinde her sıcaklıkta; kaynama sıvının her yerinde uygun koşulda gerçekleşir.' }
    ], memory: 'Isı enerji aktarımıdır; sıcaklık bir durum göstergesidir.',
    question: { stem: 'Saf bir sıvı sabit basınç altında kaynarken ısı almaya devam ediyor. Kaynama boyunca hangisi beklenir?', options: ['Taneciklerin kimliği değişir.', 'Sıcaklık sabit kalırken gaz fazındaki madde miktarı artar.', 'Sıcaklık zorunlu olarak sürekli yükselir.', 'Maddenin kütlesi kendiliğinden yok olur.'], answer: 1, explanation: 'Sabit basınçta saf madde kaynarken enerji hâl değişimine gider; sıvı bitene kadar sıcaklık sabit kalır.' },
    cards: [{ front: 'Gazlar neden kolay sıkıştırılır?', back: 'Tanecikleri arasındaki boşluk çok büyük olduğu için.' }, { front: 'Isıtma grafiğinde yatay bölüm her madde için koşulsuz mudur?', back: 'Hayır. Saflık ve sabit basınç gibi koşullar belirtilmelidir.' }],
    source: { book: 'TYT-kim', page: 43 }
  },
  {
    id: 'kim-tyt-05', exam: 'TYT', subject: 'kimya', title: 'Mol ve sınırlayıcı maddeyi resmet', unit: 'Temel kanunlar ve hesaplamalar', minutes: 6,
    tags: ['mol', 'katsayı', 'sınırlayıcı madde', 'kütlenin korunumu'],
    summary: 'Denklemdeki katsayıları kütle oranı gibi değil, tanecik ve mol oranı gibi oku.',
    visual: { type: 'flow', nodes: [
      { label: 'Denkleştir', detail: 'Her elementin atom sayısı iki tarafta eşit olmalıdır.' },
      { label: 'Mole çevir', detail: 'Kütle verilirse n = m/M kullan; aynı tür büyüklükleri karşılaştır.' },
      { label: 'Oranı kur', detail: 'Katsayılar mol oranını verir: 2H₂ + O₂ → 2H₂O.' },
      { label: 'Sınırı bul', detail: 'Başlangıç molünü katsayısına böl; en küçük değer sınırlayıcıyı belirler.' }
    ] },
    sections: [
      { title: 'Bir mol ne sayar?', text: 'Bir mol, Avogadro sayısı kadar belirtilen taneciği içerir. “Tanecik” atom, molekül veya iyon olabilir; soruda neyin sayıldığına dikkat et. Bir mol O₂ molekülü iki mol O atomu içerir.' },
      { title: 'Kütle kaybolmaz', text: 'Kimyasal tepkimede atomlar yeniden düzenlenir. Kapalı sistemde toplam kütle korunur. Açık kaptaki kütle azalması gazın ortamdan ayrılmasından kaynaklanabilir; kütlenin yok olduğu anlamına gelmez.' }
    ], memory: 'Mol ÷ katsayı → ilk tükenen madde.',
    question: { stem: '2H₂ + O₂ → 2H₂O tepkimesinde 4 mol H₂ ile 1 mol O₂ tamamen tepkimeye elverişli koşullarda bir araya getiriliyor. En fazla kaç mol H₂O oluşur?', options: ['1 mol', '4 mol', '2 mol', '6 mol'], answer: 2, explanation: '1 mol O₂ için 2 mol H₂ gerekir. O₂ sınırlayıcıdır; 2 mol H₂O oluşur ve 2 mol H₂ artar.' },
    cards: [{ front: 'Denklem katsayıları doğrudan ne oranını verir?', back: 'Mol ve tanecik sayısı oranını; doğrudan kütle oranını değil.' }, { front: '1 mol O₂ kaç mol O atomu içerir?', back: '2 mol O atomu.' }],
    source: { book: 'TYT-kim', page: 68 }
  },
  {
    id: 'kim-tyt-06', exam: 'TYT', subject: 'kimya', title: 'Karışımı tanecik düzeyinde sınıflandır', unit: 'Karışımlar', minutes: 5,
    tags: ['çözelti', 'homojen', 'heterojen', 'çözünme'],
    summary: 'Gözle tek faz görmek ile saf madde olmak farklı şeylerdir.',
    visual: { type: 'compare', nodes: [
      { label: 'Saf madde', detail: 'Belirli kimyasal tür ve sabit bileşim; element veya bileşik olabilir.' },
      { label: 'Homojen karışım', detail: 'Bileşenler tek faz oluşturacak biçimde dağılır; çözelti örnektir.' },
      { label: 'Heterojen karışım', detail: 'Bileşim her yerde aynı değildir; birden fazla faz bulunabilir.' },
      { label: 'Çözünme', detail: 'Çözünen ile çözücü tanecikleri arasında yeni etkileşimler oluşur.' }
    ] },
    sections: [
      { title: 'Çözünmek, erimek değildir', text: 'Şekerin suda çözünmesinde şeker molekülleri çözücü içinde dağılır. Erimede ise madde ısı alarak katıdan sıvıya geçer. İki olay aynı değildir.' },
      { title: 'İletkenliği ayrıca düşün', text: 'Her çözelti elektrik iletmez. Suda şeker moleküler çözünür; tuz ise hareketli iyonlar oluşturabilir. Karışımın derişimi değişebilir; homojen olması bileşiminin her örnekte aynı olmasını gerektirmez.' }
    ], memory: 'Tek faz ≠ tek kimyasal tür.',
    question: { stem: 'Şekerin tamamen çözündüğü şekerli su için hangisi doğrudur?', options: ['Homojen bir karışımdır.', 'Saf bir bileşiktir.', 'Şeker atomlarına parçalanmıştır.', 'Çözünme mutlaka erimedir.'], answer: 0, explanation: 'Şeker molekülleri su içinde homojen dağılır. Su ve şeker birlikte bulunduğundan sistem saf madde değildir.' },
    cards: [{ front: 'Homojen karışım saf madde midir?', back: 'Hayır. Birden fazla bileşen tek faz oluşturabilir.' }, { front: 'Her sulu çözelti elektriği iletir mi?', back: 'Hayır. Elektrik iletimi için yeterli hareketli iyon gerekir.' }],
    source: { book: 'TYT-kim', page: 71 }
  },
  {
    id: 'kim-tyt-07', exam: 'TYT', subject: 'kimya', title: 'Ayırma yönteminin dayanağını bul', unit: 'Ayırma ve saflaştırma', minutes: 5,
    tags: ['süzme', 'damıtma', 'özütleme', 'kristallendirme'],
    summary: 'Önce bileşenlerin farklı özelliğini, sonra elde etmek istediğin ürünü belirle.',
    visual: { type: 'compare', nodes: [
      { label: 'Süzme', detail: 'Çözünmemiş katıyı sıvıdan tanecik boyutu farkıyla ayırır.' },
      { label: 'Damıtma', detail: 'Uçuculuk ve kaynama farkından yararlanır; buhar yoğunlaştırılarak toplanır.' },
      { label: 'Özütleme', detail: 'Bir bileşenin farklı çözücülerdeki çözünürlük farkından yararlanır.' },
      { label: 'Kristallendirme', detail: 'Çözünürlük farkıyla çözünen katının kristallerini elde eder.' }
    ] },
    sections: [
      { title: 'Çözünmüş maddeyi filtre tutmaz', text: 'Tuzlu sudaki çözünmüş iyonlar sıradan süzgeçten suyla birlikte geçer. Kum–su karışımı ise süzme ile ayrılabilir. Aynı görünüşteki karışımlara aynı yöntemi otomatik seçme.' },
      { title: 'Hangi bileşen isteniyor?', text: 'Tuzlu sudan tuz elde etmek için buharlaştırma kullanılabilir. Suyu da toplamak isteniyorsa buharı yoğunlaştıran damıtma gerekir. Ayırma hunisi, birbiriyle karışmayan sıvıların yoğunluk farkından yararlanır.' }
    ], memory: 'Yöntem = farklı özellik + hedef ürün.',
    question: { stem: 'Tuzlu sudaki suyun toplanması amaçlanıyor. En uygun yöntem hangisidir?', options: ['Sıradan süzme', 'Mıknatısla ayırma', 'Ayırma hunisi', 'Basit damıtma'], answer: 3, explanation: 'Su buharlaştırılıp yoğunlaştırılarak toplanabilir. Yalnız buharlaştırmada çıkan su tutulmaz; süzme çözünmüş tuzu ayırmaz.' },
    cards: [{ front: 'Kum–su için hangi özellik?', back: 'Tanecik boyutu farkı; süzme.' }, { front: 'Ayırma hunisi hangi sıvılar için?', back: 'Birbiriyle karışmayan ve yoğunlukları farklı sıvılar.' }],
    source: { book: 'TYT-kim', page: 77 }
  },
  {
    id: 'kim-tyt-08', exam: 'TYT', subject: 'kimya', title: 'Asit–bazı günlük hayatla ilişkilendir', unit: 'Asit, baz, tuz ve günlük kimya', minutes: 6,
    tags: ['pH', 'nötralleşme', 'sabun', 'güvenlik'],
    summary: 'Asitlik, derişim ve kuvveti birbirinden ayır; günlük kimyasalları özellikleriyle tanı.',
    visual: { type: 'flow', nodes: [
      { label: 'Asit', detail: 'Sulu ortamda H₃O⁺ derişimini artırır; 25 °C’de asidik çözeltinin pH’ı 7’den küçüktür.' },
      { label: 'Baz', detail: 'Sulu ortamda OH⁻ derişimini artırır; 25 °C’de bazik çözeltinin pH’ı 7’den büyüktür.' },
      { label: 'Nötralleşme', detail: 'Asit ve bazın uygun miktarlarda tepkimesi; H₃O⁺ ile OH⁻ su oluşturabilir.' },
      { label: 'Günlük kullanım', detail: 'Sabun ve deterjan yüzey aktiftir; temizlik maddeleri bilinçsizce karıştırılmaz.' }
    ] },
    sections: [
      { title: 'Kuvvet ve miktar farklıdır', text: 'Kuvvetli asit, suda yüksek oranda iyonlaşır. Derişik çözelti, birim çözeltide çok çözünen içerir. Bu nedenle “kuvvetli” ile “derişik” eş anlamlı değildir. Her tuzun sulu çözeltisi de nötr değildir.' },
      { title: 'Hayattan soru okumak', text: 'Sabun sert sudaki Ca²⁺ ve Mg²⁺ iyonlarıyla çökelek oluşturabilir. Deterjanlar sert sudan genellikle daha az etkilenir. Çamaşır suyu asitlerle karıştırıldığında zehirli gaz çıkabilir; ürün etiketleri esas alınır.' }
    ], memory: 'Kuvvet iyonlaşmayı; derişim miktarı anlatır.',
    question: { stem: '25 °C’de pH’ı 2 olan bir asit çözeltisi saf suyla seyreltiliyor. Tepkimeye giren başka madde yoksa ne beklenir?', options: ['Çözelti zorunlu olarak bazik olur.', 'pH 7’ye doğru yükselir; çözelti asidik kalır.', 'Asit atomlarının proton sayısı azalır.', 'Asit kesinlikle tuza dönüşür.'], answer: 1, explanation: 'Seyreltme H₃O⁺ derişimini azaltır. pH nötr değere yaklaşır; yalnız su eklemek asidi baz hâline getirmez.' },
    cards: [{ front: 'Kuvvetli asit mutlaka derişik midir?', back: 'Hayır. Kuvvet iyonlaşma eğilimi, derişim çözeltideki miktarla ilgilidir.' }, { front: 'Sabunu sert suda etkileyen iyonlar?', back: 'Başlıca Ca²⁺ ve Mg²⁺; sabunla çökelek oluşturabilirler.' }],
    source: { book: 'TYT-kim', page: 80 }
  },
  {
    id: 'kim-ayt-01', exam: 'AYT', subject: 'kimya', title: 'Orbital düzeninden element davranışına', unit: 'Modern atom teorisi', minutes: 6,
    tags: ['orbital', 'Pauli', 'Hund', 'elektron dizilimi'],
    summary: 'Orbital bir yörünge çizgisi değil, elektronun bulunma olasılığıyla ilgili bölgedir.',
    visual: { type: 'layers', demo: 'periodic', nodes: [
      { label: 'Enerji düzeyi', detail: 'Baş kuantum sayısı n, ana enerji düzeyini belirtir.' },
      { label: 'Alt kabuk', detail: 's, p, d, f alt kabukları sırasıyla 1, 3, 5, 7 orbital içerir.' },
      { label: 'Pauli ilkesi', detail: 'Bir orbitalde en çok iki elektron bulunur; spinleri zıt olmalıdır.' },
      { label: 'Hund kuralı', detail: 'Eş enerjili orbitaller önce paralel spinli birer elektronla dolar.' },
      { label: 'Dizilim', detail: 'Temel hâlde düşük enerjili orbitaller önce dolar; elektron düzeni periyodik özelliklerle ilişkilidir.' }
    ] },
    sections: [
      { title: 'Kutu ve okları oku', text: 'Her orbital bir kutu, her elektron bir okla gösterilebilir. Aynı kutudaki iki okun yönü zıt olmalıdır. Üç p orbitali toplam altı elektron alabilir; tek bir p orbitali en çok iki elektron alır.' },
      { title: 'Genel eğilim ve istisna', text: 'Atom yarıçapı ve iyonlaşma enerjisi elektron düzenine bağlıdır. Yarı dolu veya tam dolu alt kabukların kararlılığı bazı sıralamalarda istisna oluşturur. Temel hâl ile elektronun daha yüksek enerjili orbitale geçtiği uyarılmış hâli ayır.' }
    ], memory: 'Orbital kutudur; alt kabuk kutuların grubudur.',
    question: { stem: 'Bir atomun aynı orbitalinde bulunan iki elektron için hangisi doğrudur?', options: ['Baş kuantum sayıları farklıdır.', 'Spinleri aynı olmak zorundadır.', 'İkisi de ayrı elementlere aittir.', 'Spin kuantum sayıları zıttır.'], answer: 3, explanation: 'Pauli ilkesine göre aynı orbitaldeki iki elektronun spinleri zıttır; diğer üç kuantum sayıları aynıdır.' },
    cards: [{ front: 'p alt kabuğunun kapasitesi?', back: '3 orbital × 2 elektron = 6 elektron.' }, { front: 'Hund kuralı neyi söyler?', back: 'Eş enerjili orbitaller önce paralel spinli tek elektronlarla dolar.' }],
    source: { book: 'AYT-kim', page: 9 }
  },
  {
    id: 'kim-ayt-02', exam: 'AYT', subject: 'kimya', title: 'Gaz değişkenlerini çarpışmalarla açıkla', unit: 'Gazlar', minutes: 6,
    tags: ['PV=nRT', 'basınç', 'Kelvin', 'kinetik teori'],
    summary: 'Gaz basıncı taneciklerin çarpışmalarından doğar; hangi değişkenin sabit olduğunu önce işaretle.',
    visual: { type: 'flow', demo: 'particles', nodes: [
      { label: 'Sıcaklık', detail: 'Kelvin sıcaklığı arttıkça ideal gazın ortalama kinetik enerjisi artar.' },
      { label: 'Hacim', detail: 'Sabit n ve T’de hacim küçülürse çeper çarpışmaları sıklaşır; basınç artar.' },
      { label: 'Mol sayısı', detail: 'Sabit V ve T’de daha çok tanecik daha yüksek basınç oluşturur.' },
      { label: 'İdeallik', detail: 'Düşük basınç ve yüksek sıcaklıkta gerçek gazlar ideal davranışa genellikle daha çok yaklaşır.' }
    ] },
    sections: [
      { title: 'Denklemi yorumla', text: 'PV = nRT bağıntısında mutlak sıcaklık kullanılır: T(K) = t(°C) + 273. Sabit miktardaki gazda P–V ters, V–T ve P–T uygun sabitler altında doğru orantılıdır. Celsius değerleriyle doğrudan oran kurma.' },
      { title: 'Hız ve enerji farklıdır', text: 'Aynı sıcaklıktaki farklı ideal gazların ortalama kinetik enerjileri eşittir. Mol kütlesi küçük olanın ortalama sürati daha büyüktür. “Aynı sıcaklıkta aynı sürat” genellemesi bu nedenle yanlıştır.' }
    ], memory: 'Önce sabitleri çerçevele; sonra Kelvin ile oranla.',
    question: { stem: 'Aynı sıcaklıktaki He ve O₂ ideal gazları için hangisi doğrudur? (MHe = 4, MO₂ = 32 g/mol)', options: ['O₂’nin ortalama kinetik enerjisi daha büyüktür.', 'Ortalama kinetik enerjileri eşit, He’nin ortalama sürati daha büyüktür.', 'Ortalama süratleri mutlaka eşittir.', 'He’nin ortalama kinetik enerjisi sekiz kat büyüktür.'], answer: 1, explanation: 'Ortalama kinetik enerji yalnız mutlak sıcaklığa bağlıdır. Aynı sıcaklıkta hafif gaz tanecikleri daha hızlı hareket eder.' },
    cards: [{ front: 'Gaz yasalarında hangi sıcaklık?', back: 'Kelvin cinsinden mutlak sıcaklık.' }, { front: 'Gerçek gaz ne zaman ideale yaklaşır?', back: 'Genellikle düşük basınç ve yüksek sıcaklıkta.' }],
    source: { book: 'AYT-kim', page: 36 }
  },
  {
    id: 'kim-ayt-03', exam: 'AYT', subject: 'kimya', title: 'Çözeltide tanecik sayısını takip et', unit: 'Sıvı çözeltiler', minutes: 6,
    tags: ['molarite', 'molalite', 'koligatif', 'çözünürlük'],
    summary: 'Koligatif özelliklerde, ideal ve seyreltik koşullarda çözünenin kimliğinden çok tanecik sayısı önemlidir.',
    visual: { type: 'flow', nodes: [
      { label: 'Etkileşim', detail: 'Çözücü–çözünen etkileşimleri çözünmeyi etkiler; benzer benzeri çözer yaklaşımı bir başlangıçtır.' },
      { label: 'Derişim', detail: 'Molarite: mol/L çözelti. Molalite: mol/kg çözücü.' },
      { label: 'Tanecik sayısı', detail: 'İyonlarına ayrışan çözünenler aynı molde daha çok çözünmüş tanecik sağlayabilir.' },
      { label: 'Koligatif sonuç', detail: 'Uçucu olmayan çözünen: buhar basıncı düşer, kaynama noktası yükselir, donma noktası düşer.' }
    ] },
    sections: [
      { title: 'Payda çok şey söyler', text: 'Molaritede çözeltinin hacmi, molalitede çözücünün kütlesi kullanılır. Sıcaklık hacmi değiştirebildiği için molarite değişebilir; yalnız sıcaklıkla kütle değişmediğinde molalite değişmez.' },
      { title: 'Çözünürlük ile derişim', text: 'Derişim mevcut çözeltinin bileşimini anlatır. Çözünürlük belirli koşullarda doymuş çözeltiye ilişkin sınırdır. Çoğu gazın sudaki çözünürlüğü basınçla artar, sıcaklıkla azalır; katılarda sıcaklık etkisi çözünmenin ısı alışverişine bağlıdır.' }
    ], memory: 'M: litre çözelti. m: kilogram çözücü.',
    question: { stem: 'İdeal, seyreltik koşullarda ve tam ayrışma varsayımıyla, eşit molaliteli hangi sulu çözeltinin donma noktası daha düşüktür?', options: ['NaCl; çözeltide daha fazla tanecik oluşturur.', 'Glikoz; iyonlaşmadığı için.', 'İkisinin donma noktası zorunlu olarak aynıdır.', 'Tanecik sayısının hiçbir etkisi yoktur.'], answer: 0, explanation: 'NaCl yaklaşık iki iyon, glikoz bir molekül hâlinde bulunur. Eşit molalitede NaCl daha büyük koligatif etki oluşturur.' },
    cards: [{ front: 'Uçucu olmayan çözünen buhar basıncını nasıl etkiler?', back: 'Aynı sıcaklıkta saf çözücüye göre düşürür.' }, { front: 'Molarite ve molalitenin paydası?', back: 'Molaritede litre çözelti; molalitede kilogram çözücü.' }],
    source: { book: 'AYT-kim', page: 49 }
  },
  {
    id: 'kim-ayt-04', exam: 'AYT', subject: 'kimya', title: 'Tepkime enerjisini başlangıç ve sondan oku', unit: 'Kimyasal tepkimelerde enerji', minutes: 6,
    tags: ['entalpi', 'ekzotermik', 'endotermik', 'Hess'],
    summary: 'Tepkimenin enerji farkı ile tepkimeyi başlatmak için gereken enerji farklı büyüklüklerdir.',
    visual: { type: 'flow', demo: 'energy', nodes: [
      { label: 'Girenler', detail: 'Enerji grafiğinin başlangıç düzeyi.' },
      { label: 'Enerji engeli', detail: 'Etkinleşmiş komplekse ulaşmak için gereken aktivasyon enerjisi.' },
      { label: 'Ürünler', detail: 'Son düzey daha düşükse ekzotermik, daha yüksekse endotermik tepkime.' },
      { label: 'Entalpi farkı', detail: 'ΔH = Hürünler − Hgirenler. İzlenen yoldan bağımsızdır.' }
    ] },
    sections: [
      { title: 'Bağ kırmak enerji ister', text: 'Bağ kırmak enerji alır; bağ oluşması enerji verir. Yaklaşık tepkime entalpisi, kırılan bağlar için alınan enerji eksi oluşan bağlarda verilen enerjidir. “Yanma enerji verir, öyleyse bağ kırmak enerji verir” çıkarımı yanlıştır.' },
      { title: 'Hess ve enerji kaynakları', text: 'Denklem ters çevrilirse ΔH’nin işareti değişir; katsayılar çarpılırsa ΔH de çarpılır. Alt tepkimeler toplanabilir. Fosil yakıtların yenilenmesi çok yavaştır; hidrojen ise üretim yöntemine bağlı çevresel etkileri olan bir enerji taşıyıcısıdır.' }
    ], memory: 'Tepe: başlatma engeli. Baş–son farkı: ΔH.',
    question: { stem: 'Bir tepkimede ürünlerin entalpisi girenlerden 80 kJ daha düşüktür. Hangisi doğrudur?', options: ['ΔH = +80 kJ, tepkime endotermiktir.', 'Aktivasyon enerjisi kesinlikle 80 kJ’dür.', 'ΔH = −80 kJ, tepkime ekzotermiktir.', 'Bağların hepsi enerji almadan kırılır.'], answer: 2, explanation: 'Son enerji başlangıçtan düşük olduğundan ΔH negatiftir. Bu fark aktivasyon enerjisini tek başına belirlemez.' },
    cards: [{ front: 'Bağ kırmak mı, bağ oluşturmak mı enerji ister?', back: 'Bağ kırmak enerji ister; bağ oluşması enerji verir.' }, { front: 'Katalizör ΔH’yi değiştirir mi?', back: 'Hayır. Giren ve ürün enerjilerini değiştirmeden daha düşük engelli bir yol sağlar.' }],
    source: { book: 'AYT-kim', page: 55 }
  },
  {
    id: 'kim-ayt-05', exam: 'AYT', subject: 'kimya', title: 'Tepkime hızını etkili çarpışmadan çıkar', unit: 'Kimyasal tepkimelerde hız', minutes: 6,
    tags: ['aktivasyon enerjisi', 'katalizör', 'hız yasası', 'grafik'],
    summary: 'Her çarpışma tepkime oluşturmaz; uygun enerji ve yönelim gerekir.',
    visual: { type: 'flow', demo: 'energy', nodes: [
      { label: 'Karşılaşma', detail: 'Taneciklerin çarpışma sıklığı; derişim ve temas yüzeyiyle değişebilir.' },
      { label: 'Enerji', detail: 'Aktivasyon enerjisini aşan çarpışmalar tepkime için elverişlidir.' },
      { label: 'Yönelim', detail: 'Taneciklerin uygun doğrultuda karşılaşması da gerekir.' },
      { label: 'Katalizör', detail: 'Daha düşük aktivasyon enerjili alternatif yol sağlar; toplam tepkimede tüketilmez.' }
    ] },
    sections: [
      { title: 'Sıcaklığın iki etkisi', text: 'Sıcaklık arttığında çarpışma sıklığı ve enerji engelini aşabilen taneciklerin payı genellikle artar. Katalizör ise taneciklerin sıcaklığını artırmadan enerji engelini düşürür. İkisi farklı mekanizmalardır.' },
      { title: 'Grafik ve bağıntı', text: 'Derişim–zaman grafiğinde teğet eğiminin büyüklüğü anlık değişim hızını gösterir. Genel tepkimenin katsayılarından hız yasası her zaman yazılamaz; deneysel veriler gerekir. Mekanizmanın en yavaş basamağı hızı sınırlayabilir.' }
    ], memory: 'Hız, yalnız çarpışma sayısı değil etkili çarpışma sayısıdır.',
    question: { stem: 'Aynı sıcaklıkta bir tepkimeye katalizör eklenmesi için hangisi doğrudur?', options: ['Tepkimenin ΔH’sini sıfıra indirir.', 'Daha düşük aktivasyon enerjili bir yol sağlayabilir.', 'Ürünleri mutlaka daha yüksek enerjili yapar.', 'Dengedeki ürün yüzdesini her zaman artırır.'], answer: 1, explanation: 'Katalizör hızın artmasını alternatif yolla sağlar; ΔH’yi ve aynı sıcaklıktaki denge bileşimini değiştirmez.' },
    cards: [{ front: 'Genel denklem katsayıları her zaman hız yasasının üsleri midir?', back: 'Hayır. Hız yasası deneysel olarak veya uygun mekanizma bilgisiyle belirlenir.' }, { front: 'Katalizörün temel etkisi?', back: 'Daha düşük aktivasyon enerjili yol sunmak.' }],
    source: { book: 'AYT-kim', page: 64 }
  },
  {
    id: 'kim-ayt-06', exam: 'AYT', subject: 'kimya', title: 'Denge durmaz; iki yönde çalışır', unit: 'Kimyasal denge', minutes: 7,
    tags: ['Le Chatelier', 'K', 'Q', 'dinamik denge'],
    summary: 'Dengede hızlar eşittir; derişimlerin birbirine eşit olması gerekmez.',
    visual: { type: 'cycle', demo: 'equilibrium', nodes: [
      { label: 'İleri tepkime', detail: 'Girenler ürünlere dönüşür.' },
      { label: 'Geri tepkime', detail: 'Ürünler de girenlere dönüşür.' },
      { label: 'Dinamik denge', detail: 'İleri ve geri hız eşittir; uygun sabit koşullarda derişimler sabit kalır.' },
      { label: 'Etkiye tepki', detail: 'Derişim, basınç veya sıcaklık değişimi sonrasında sistem yeni dengeye yönelir.' }
    ] },
    sections: [
      { title: 'K ile Q’nun işi', text: 'Denge sabiti K, belirli bir tepkime için sıcaklığa bağlıdır. Q aynı biçimde mevcut derişimlerden hesaplanır. Q < K ise ileri, Q > K ise geri yön baskın olur. Saf katı ve saf sıvılar denge bağıntısında yer almaz.' },
      { title: 'Sık gelen ayrımlar', text: 'Hacim küçülmesi gaz molü daha az olan yönü destekler; iki tarafta gaz molü eşitse bu etki yoktur. Sıcaklık artışı endotermik yönü destekler ve K’yi değiştirebilir. Katalizör iki yönü hızlandırır; denge bileşimini değiştirmez.' }
    ], memory: 'Hızlar eşit; miktarlar eşit olmak zorunda değil.',
    question: { stem: 'Sabit sıcaklıkta dengedeki gaz tepkimesine katalizör ekleniyor. Hangisi doğrudur?', options: ['K artar ve denge ürünlere kayar.', 'Geri tepkime durur.', 'Bütün derişimler birbirine eşit olur.', 'Denge sabiti ve denge bileşimi değişmez.'], answer: 3, explanation: 'Katalizör dengeye ulaşma süresini azaltabilir; sıcaklık değişmediğinde K’yi ve denge bileşimini değiştirmez.' },
    cards: [{ front: 'Dengede derişimler eşit midir?', back: 'Zorunlu değil. Sabit kalan derişimlerde ileri ve geri hızlar eşittir.' }, { front: 'K’yi değiştiren temel koşul?', back: 'Belirli tepkime için sıcaklık.' }],
    source: { book: 'AYT-kim', page: 68 }
  },
  {
    id: 'kim-ayt-07', exam: 'AYT', subject: 'kimya', title: 'Sulu dengelerde ortak iyonun izini sür', unit: 'Asit–baz ve çözünürlük dengeleri', minutes: 7,
    tags: ['Ka', 'tampon', 'Kçç', 'ortak iyon'],
    summary: 'Zayıf asit iyonlaşması ile az çözünen tuzun çözünmesi, aynı denge mantığıyla yorumlanabilir.',
    visual: { type: 'compare', nodes: [
      { label: 'Zayıf asit', detail: 'HA ⇌ H⁺ + A⁻; aynı sıcaklıkta daha büyük Ka genellikle daha güçlü asit demektir.' },
      { label: 'Tampon', detail: 'Zayıf asit/eşlenik baz veya zayıf baz/eşlenik asit çifti, küçük eklemelerde pH değişimine direnç gösterir.' },
      { label: 'Çözünürlük', detail: 'AgCl(k) ⇌ Ag⁺ + Cl⁻; Kçç = [Ag⁺][Cl⁻]. Katı bağıntıya yazılmaz.' },
      { label: 'Ortak iyon', detail: 'Dengede bulunan bir iyonun eklenmesi, uygun koşullarda iyonlaşmayı veya çözünmeyi azaltır.' }
    ] },
    sections: [
      { title: 'pH ve nötrlük', text: 'pH = −log[H₃O⁺]. 25 °C’de pH + pOH = 14; nötr çözeltide [H₃O⁺] = [OH⁻]. Nötr pH’ın her sıcaklıkta 7 olduğunu varsayma. Asit kuvveti ile asit derişimi farklı büyüklüklerdir.' },
      { title: 'Çökelek koşulu', text: 'İyon çarpımı Qçç, Kçç’den büyükse çökelme beklenir; küçükse doymamışlık söz konusudur. Farklı formüllü tuzların molar çözünürlüğünü yalnız Kçç sayılarını karşılaştırarak sıralama; iyon katsayılarını da kullan.' }
    ], memory: 'Ortak iyon ekle → denge o iyonu tüketen yöne yönelir.',
    question: { stem: 'Katısıyla dengede olan AgCl çözeltisine, hacim değişimi ihmal edilerek NaCl ekleniyor. Kompleksleşme yoksa AgCl’nin molar çözünürlüğü nasıl etkilenir?', options: ['Ortak Cl⁻ iyonu nedeniyle azalır.', 'Kçç aynı sıcaklıkta arttığı için artar.', 'Katının denge bağıntısına girmesiyle artar.', 'Çözünme dengesi zorunlu olarak yok olur.'], answer: 0, explanation: 'Eklenen Cl⁻ dengeyi AgCl katısı yönüne iter. Aynı sıcaklıkta Kçç değişmez; molar çözünürlük azalır.' },
    cards: [{ front: 'Tampon pH’ı hiçbir koşulda değişmez mi?', back: 'Hayır. Sınırlı kapasitesi vardır; küçük eklemelerin etkisini azaltır.' }, { front: 'Çökelme için iyon çarpımı ilişkisi?', back: 'Qçç > Kçç olduğunda çökelme beklenir.' }],
    source: { book: 'AYT-kim', page: 82 }
  },
  {
    id: 'kim-ayt-08', exam: 'AYT', subject: 'kimya', title: 'Elektron yolunu pil ve elektrolizde izle', unit: 'Kimya ve elektrik', minutes: 7,
    tags: ['anot', 'katot', 'yükseltgenme', 'elektroliz'],
    summary: 'İşaretler hücre türüne göre değişebilir; anot ve katottaki olayın adı değişmez.',
    visual: { type: 'flow', nodes: [
      { label: 'Anot', detail: 'Yükseltgenme gerçekleşir; tür elektron verir.' },
      { label: 'Dış devre', detail: 'Elektronlar dış iletkende anottan katoda gider.' },
      { label: 'Katot', detail: 'İndirgenme gerçekleşir; tür elektron alır.' },
      { label: 'Tuz köprüsü', detail: 'İyon hareketiyle yük birikimini sınırlar; elektron taşımaz.' },
      { label: 'Enerji yönü', detail: 'Galvanik pil kimyasal enerjiden elektrik üretir; elektroliz elektrikle kendiliğinden olmayan dönüşümü yürütür.' }
    ] },
    sections: [
      { title: 'İşaret tuzağı', text: 'Galvanik hücrede anot negatif, katot pozitiftir. Elektrolizde dış kaynağa bağlı anot pozitif, katot negatiftir. Her iki durumda da anotta yükseltgenme, katotta indirgenme gerçekleşir.' },
      { title: 'Miktar ve korozyon', text: 'Elektrolizde aktarılan yük Q = I·t; biriken miktar elektron stokiyometrisine bağlıdır. Aynı yük her metalden aynı kütleyi biriktirmez. Korozyondan korunmada kaplama veya daha kolay yükseltgenen kurban metal kullanılabilir.' }
    ], memory: 'Anot: elektron verir. Katot: elektron alır. Bu kural değişmez.',
    question: { stem: 'Galvanik pil ile elektroliz hücresi için ortak olan özellik hangisidir?', options: ['Anot her zaman negatiftir.', 'Her ikisi kendiliğinden elektrik üretir.', 'Katotta indirgenme gerçekleşir.', 'Tuz köprüsü elektron taşır.'], answer: 2, explanation: 'Katodun tanımı indirgenmenin gerçekleştiği elektrottur. Elektrot işareti hücre türüne göre değişse de bu olay değişmez.' },
    cards: [{ front: 'Tuz köprüsünden elektron geçer mi?', back: 'Hayır. Tuz köprüsünde iyonlar, dış iletkende elektronlar hareket eder.' }, { front: 'Anot ve katodun değişmeyen tanımı?', back: 'Anotta yükseltgenme, katotta indirgenme.' }],
    source: { book: 'AYT-kim', page: 84 }
  },
  {
    id: 'kim-ayt-09', exam: 'AYT', subject: 'kimya', title: 'Karbon iskeleti, izomerlik ve polimer', unit: 'Organik yapıya giriş', minutes: 7,
    tags: ['hidrokarbon', 'izomer', 'çift bağ', 'polimer'],
    summary: 'Aynı molekül formülü farklı bağlantılarla farklı özellikte maddeler oluşturabilir.',
    visual: { type: 'flow', nodes: [
      { label: 'Karbon iskeleti', detail: 'Karbon atomları zincir, dallanmış veya halkalı yapılar oluşturabilir.' },
      { label: 'Bağ türleri', detail: 'Alkanlar tek bağ; alkenler C=C; alkinler C≡C içerecek şekilde sınıflandırılır.' },
      { label: 'İzomerlik', detail: 'Aynı molekül formülü, farklı yapı veya uzaysal düzenle farklı bileşikler oluşturabilir.' },
      { label: 'Polimerleşme', detail: 'Çok sayıda monomer bağlanır; etenin katılma polimerleşmesi polietilen oluşturur.' }
    ] },
    sections: [
      { title: 'Formülün ne söylediğini sınırla', text: 'C₄H₁₀ hem düz zincirli bütanı hem dallanmış 2-metilpropanı temsil edebilir. Bunlar yapı izomeridir. Genel formül tek başına her zaman bileşik sınıfını belirlemez; halka ve çoklu bağ olasılıklarını düşün.' },
      { title: 'Çift bağdan uzun zincire', text: 'Alkenlerde π bağı katılma tepkimelerine elverişlidir. Uygun koşullarda çok sayıda eten birimi bağlanarak polietilen zinciri oluşturur. Her polimerleşme aynı mekanizmayla olmaz; bazıları küçük molekül ayrılmasıyla ilerler.' }
    ], memory: 'Molekül formülü sayar; yapı formülü bağlantıyı gösterir.',
    question: { stem: 'Bütan ile 2-metilpropan için hangi ilişki doğrudur?', options: ['Aynı bileşiğin iki yazımıdır.', 'Farklı elementlerden oluşurlar.', 'Molekül formülleri farklıdır.', 'Aynı molekül formüllü farklı yapı izomerleridir.'], answer: 3, explanation: 'Her ikisinin formülü C₄H₁₀’dur; karbon atomlarının bağlantı düzeni farklı olduğundan yapı izomeridirler.' },
    cards: [{ front: 'Yapı izomerleri neyi paylaşır?', back: 'Aynı molekül formülünü; atomların bağlantı düzenleri farklıdır.' }, { front: 'Etenin katılma polimeri?', back: 'Polietilen; çok sayıda eten biriminin uzun zincir oluşturmasıyla elde edilir.' }],
    source: { book: 'AYT-kim', page: 118 }
  },
  {
    id: 'kim-ayt-10', exam: 'AYT', subject: 'kimya', title: 'Fonksiyonel grubu gör, özelliği tahmin et', unit: 'Organik bileşik sınıfları', minutes: 7,
    tags: ['alkol', 'eter', 'karbonil', 'karboksilik asit', 'ester'],
    summary: 'Karbon iskeletine bağlı fonksiyonel grup, bileşiğin sınıfını ve birçok tepkimesini belirler.',
    visual: { type: 'compare', nodes: [
      { label: 'Alkol', detail: 'Doymuş karbona bağlı –OH; uygun küçük moleküllerde suyla güçlü etkileşim.' },
      { label: 'Eter', detail: 'R–O–R′; oksijen iki karbon grubuna bağlıdır.' },
      { label: 'Aldehit', detail: '–CHO; karbonil karbonuna en az bir H bağlıdır.' },
      { label: 'Keton', detail: 'R–CO–R′; karbonil karbonu iki karbon grubuna bağlıdır.' },
      { label: 'Karboksilik asit', detail: '–COOH grubu; zayıf asitlik davranışı.' },
      { label: 'Ester', detail: 'R–COO–R′; karboksilik asit ve alkolün esterleşmesiyle elde edilebilir.' }
    ] },
    sections: [
      { title: 'Benzer görünüş, farklı sınıf', text: 'Alkol ile eterde oksijen bulunur; fakat O–H bağı yalnız alkolde vardır. Aldehit ve keton karbonil grubu taşır; karbonile bağlı atomlar sınıfı belirler. –OH’nin aromatik halkaya doğrudan bağlandığı fenolü alkolden ayır.' },
      { title: 'Yapıdan sonuç çıkar', text: 'Benzer mol kütleli alkol ve eter karşılaştırmasında alkolün kendi molekülleri arasında hidrojen bağı kurabilmesi kaynamayı etkiler. Esterleşme tersinirdir; uygun koşullarda asit + alkol ⇌ ester + su biçiminde düşünülür.' }
    ], memory: 'Sadece O sayma; O’nun hangi atomlara bağlandığını izle.',
    question: { stem: 'CH₃–CO–CH₃ bileşiğinde karbonil karbonunun iki yanında da karbon grubu vardır. Bu bileşiğin sınıfı nedir?', options: ['Alkol', 'Keton', 'Aldehit', 'Eter'], answer: 1, explanation: 'Karbonil karbonunun iki karbon grubuna bağlı olması keton yapısını gösterir. Bu bileşik propanondur.' },
    cards: [{ front: 'Aldehit–keton ayrımı?', back: 'Aldehitte karbonil karbonuna H bağlıdır; ketonda iki karbon grubu bağlıdır.' }, { front: 'Esterleşmede temel girenler?', back: 'Karboksilik asit ve alkol; uygun koşullarda ester ve su oluşur.' }],
    source: { book: 'AYT-kim', page: 109 }
  }
]);
