/* TYT/AYT fizik çalışma notları ve kontrol soruları. */
window.LESSONS = (window.LESSONS || []).concat([
  {
    id: 'fiz-tyt-01', exam: 'TYT', subject: 'fizik', title: 'Ölçmek, birim seçmek, yön belirtmek', unit: 'Fizik bilimine giriş', minutes: 5,
    tags: ['ölçme', 'SI', 'skaler', 'vektörel'],
    summary: 'Bir büyüklüğü tanımak için neyin ölçüldüğünü, birimini ve yön bilgisinin gerekip gerekmediğini birlikte düşün.',
    visual: { type: 'compare', nodes: [
      { label: 'Ölçüm', detail: 'Ölçülen değer sayı ve birimle ifade edilir. Ölçüm aracının duyarlılığı sonucun hassasiyetini sınırlar.' },
      { label: 'Temel büyüklük', detail: 'Uzunluk, kütle ve zaman gibi büyüklükler SI sisteminin temel büyüklükleridir.' },
      { label: 'Türetilmiş büyüklük', detail: 'Hızın birimi m/s, kuvvetin birimi kg·m/s² yani newtondur; temel birimlerden türetilir.' },
      { label: 'Skaler', detail: 'Kütle, enerji, sürat ve sıcaklık için büyüklük yeterlidir; uzayda bir yön tanımlanmaz.' },
      { label: 'Vektörel', detail: 'Yer değiştirme, hız, ivme ve kuvvette büyüklüğün yanında doğrultu ve yön gerekir.' }
    ] },
    sections: [
      { title: 'Fiziğin alt dalları', text: 'Mekanik hareket ve kuvveti, termodinamik ısıl olayları, optik ışığı inceler. Atom fiziğinde atomun yapısı ve elektronları, nükleer fizikte çekirdek olayları öne çıkar. Bir teknolojik uygulama birden fazla alt dalın bilgisini kullanabilir.' },
      { title: 'Birim kontrolü', text: 'Bir denklemde toplanan terimlerin birimleri uyumlu olmalıdır. Kütlenin SI birimi kilogram, sıcaklığın kelvindir. Ağırlık ise kütle değil bir kuvvettir; birimi newtondur.' }
    ],
    memory: 'Skaler: ne kadar? Vektör: ne kadar ve hangi yönde?',
    question: { stem: 'SI sistemindeki büyüklük ve birim eşleştirmelerinden hangisi doğrudur?', options: ['Kütle — kilogram; kuvvet — newton', 'Kütle — newton; kuvvet — kilogram', 'Sıcaklık — joule; enerji — kelvin', 'Zaman — metre; uzunluk — saniye'], answer: 0, explanation: 'Kütle temel büyüklüktür ve SI birimi kilogramdır. Kuvvet türetilmiş büyüklüktür; birimi newton, temel birimlerle kg·m/s² olur. Sıcaklık kelvin, enerji joule, zaman saniye, uzunluk metreyle ölçülür.' },
    cards: [{ front: 'Ağırlık skaler mi, vektörel mi?', back: 'Kuvvet olduğu için vektöreldir; SI birimi newtondur.' }, { front: 'SI sisteminin yedi temel büyüklüğü ve birimleri?', back: 'Uzunluk–metre, kütle–kilogram, zaman–saniye, sıcaklık–kelvin, elektrik akımı–amper, madde miktarı–mol, ışık şiddeti–kandela.' }],
    source: { book: 'TYT-fiz', page: 9 }
  },
  {
    id: 'fiz-tyt-02', exam: 'TYT', subject: 'fizik', title: 'Maddeyi parçaladığında ne değişir?', unit: 'Madde ve özellikleri', minutes: 5,
    tags: ['özkütle', 'dayanıklılık', 'kohezyon', 'kılcallık'],
    summary: 'Madde miktarına bağlı büyüklüklerle maddenin cinsine ve koşullarına bağlı özellikleri ayır. Aynı maddenin küçük parçası farklı bir madde olmaz.',
    visual: { type: 'compare', nodes: [
      { label: 'Kütle ve hacim', detail: 'Madde miktarı arttıkça homojen örneğin kütlesi ve hacmi birlikte artar.' },
      { label: 'Özkütle', detail: 'Kütlenin hacme oranıdır. Aynı sıcaklık ve basınçtaki homojen maddenin örnek miktarına bağlı değildir.' },
      { label: 'Dayanıklılık', detail: 'Aynı maddeden geometrik olarak benzer cisimler büyütüldüğünde kesit/hacim oranı azalır.' },
      { label: 'Kohezyon / adezyon', detail: 'Aynı madde taneciklerinin çekimi kohezyon; farklı maddeler arasındaki çekim adezyondur.' },
      { label: 'Yüzey ve kılcallık', detail: 'Yüzey gerilimi sıvı yüzeyinin davranışını etkiler. İnce borudaki yükselme veya alçalma sıvı ve boru etkileşimine bağlıdır.' }
    ] },
    sections: [
      { title: 'Koşulları sabit tut', text: 'Bir katıyı iki eş parçaya ayırmak özkütlesini değiştirmez. Ancak sıcaklıkla hacim değişirse özkütle de değişebilir. “Özkütle hiç değişmez” yerine koşulların aynı olup olmadığını kontrol et.' },
      { title: 'Günlük gözlem', text: 'Su damlasının bir yüzeyde yayılması ile başka bir yüzeyde boncuk gibi kalması, yüzeyle etkileşimin farklılığını gösterir. Her sıvının her ince boruda yükselmesi gerekmez.' }
    ],
    memory: 'Özkütle = oran; miktar azalınca kütle ve hacim birlikte azalabilir.',
    question: { stem: 'Homojen bir metal blok, sıcaklığı değişmeden iki eş parçaya ayrılıyor. Her parçanın ilk bloğa göre özkütlesi nasıldır?', options: ['Yarıya iner.', 'Aynı kalır.', 'İki katına çıkar.', 'Sıfır olur.'], answer: 1, explanation: 'Kütle ve hacim aynı oranda yarıya iner. Özkütle kütle/hacim oranı olduğundan değişmez.' },
    cards: [{ front: 'Kohezyon ve adezyon ayrımı?', back: 'Kohezyon aynı; adezyon farklı maddelerin tanecikleri arasındaki çekimdir.' }, { front: 'Özkütle miktara bağlı mı?', back: 'Homojen madde için aynı sıcaklık ve basınçta örnek miktarına bağlı değildir.' }],
    source: { book: 'TYT-fiz', page: 15 }
  },
  {
    id: 'fiz-tyt-03', exam: 'TYT', subject: 'fizik', title: 'Isı, sıcaklık ve hâl değişimi', unit: 'Isı ve sıcaklık', minutes: 6,
    tags: ['ısıl denge', 'öz ısı', 'hâl değişimi', 'ısı iletimi'],
    summary: 'Sıcaklık bir durum bilgisidir; ısı sıcaklık farkı nedeniyle aktarılan enerjidir. Bir cisim ısı alırken sıcaklığı her zaman artmaz.',
    visual: { type: 'flow', nodes: [
      { label: 'Sıcaklık farkı', detail: 'Temas eden iki cisim arasında enerji, kendiliğinden sıcak olandan soğuk olana aktarılır.' },
      { label: 'Isı aktarımı', detail: 'Aktarılan enerji ısı olarak adlandırılır. “Cismin içinde depolanan ısı” yerine iç enerji denir.' },
      { label: 'Sıcaklık değişimi', detail: 'Hâl değişimi yoksa alınan enerji; kütle, öz ısı ve sıcaklık değişimiyle ilişkilidir.' },
      { label: 'Hâl değişimi', detail: 'Saf madde sabit basınçta erirken veya kaynarken enerji alabilir; sıcaklık sabit kalabilir.' },
      { label: 'Isıl denge', detail: 'Sıcaklıklar eşitlendiğinde iki cisim arasında net ısı aktarımı durur; iç enerjileri eşit olmak zorunda değildir.' }
    ] },
    sections: [
      { title: 'Grafikte yatay bölüm', text: 'Saf bir maddenin sabit basınçtaki ısıtılma grafiğinde yatay bölüm hâl değişimine karşılık gelebilir. Bu bölümde enerji aktarımı sürer; sıcaklığın sabit olması enerji alınmadığı anlamına gelmez.' },
      { title: 'Enerji nasıl taşınır?', text: 'İletimde komşu tanecikler arasında; konveksiyonda akışkanın hareketiyle enerji taşınır. Işınımın madde ortamına ihtiyacı yoktur. Aynı sıcaklıktaki metalin tahtadan soğuk hissedilmesi, farklı iletim hızıyla açıklanabilir.' }
    ],
    memory: 'Isı aktarımdır; sıcaklık ölçümdür. Hâl değişiminde enerji değişirken sıcaklık sabit kalabilir.',
    question: { stem: 'Saf bir madde sabit basınçta erirken ısı almaya devam ediyor. Bu sırada hangisi mümkün ve beklenen bir durumdur?', options: ['İç enerjisinin hiç değişmemesi', 'Sıcaklığının zorunlu olarak sürekli artması', 'Sıcaklığı sabitken iç enerjisinin artması', 'Maddeye hiç enerji aktarılmaması'], answer: 2, explanation: 'Erime sırasında alınan enerji taneciklerin düzenini ve aralarındaki etkileşim enerjisini değiştirir. Sabit basınçta saf maddenin erime sıcaklığı sabit kalabilir.' },
    cards: [{ front: 'Isıl dengede neler eşittir?', back: 'Sıcaklıklar eşittir; kütle ve iç enerji eşit olmak zorunda değildir.' }, { front: 'Boşlukta hangi enerji aktarım yolu gerçekleşebilir?', back: 'Işınım.' }],
    source: { book: 'TYT-fiz', page: 59 }
  },
  {
    id: 'fiz-tyt-04', exam: 'TYT', subject: 'fizik', title: 'Hareket grafiği kuvveti anlatır', unit: 'Hareket ve kuvvet', minutes: 6,
    tags: ['konum-zaman', 'hız-zaman', 'ivme', 'Newton'],
    summary: 'Grafikte eğim ile alanın ne anlama geldiğini ayır. Kuvvetin hareketi sürdürmekten çok hız vektörünü değiştirmedeki rolünü gör.',
    visual: { type: 'flow', nodes: [
      { label: 'Konum–zaman', detail: 'Grafiğin eğimi hızı verir. Yatay çizgi konumun değişmediğini gösterir.' },
      { label: 'Hız–zaman', detail: 'Eğim ivmeyi; zaman ekseniyle arasındaki işaretli alan yer değiştirmeyi verir.' },
      { label: 'İvme', detail: 'Hızın büyüklüğü veya yönü değişiyorsa ivme olabilir. Negatif ivme her durumda yavaşlama demek değildir.' },
      { label: 'Net kuvvet', detail: 'Sabit kütleli bir cisimde net kuvvet ivmeyle aynı yöndedir. Tek bir kuvvet yerine kuvvetlerin bileşkesini düşün.' },
      { label: 'Net kuvvet sıfır', detail: 'İvme sıfırdır; cisim durabilir veya sabit hızla doğrusal hareketini sürdürebilir.' }
    ] },
    sections: [
      { title: 'İşaret tuzağı', text: 'Hız ve ivme aynı yöndeyse sürat artar; zıt yöndeyse azalır. Hem hız hem ivme negatif olduğunda cisim negatif yönde hızlanabilir.' },
      { title: 'Etki ve tepki', text: 'Etki-tepki kuvvetleri eşit büyüklükte ve zıt yönlüdür; farklı cisimlere etki ettikleri için aynı cismin kuvvet bilançosunda birbirini yok etmezler. Sürtünme de temas yüzeyindeki göreli harekete veya kayma eğilimine karşı etki eder.' }
    ],
    memory: 'x–t eğimi hız; v–t eğimi ivme; v–t işaretli alanı yer değiştirme.',
    question: { stem: 'Bir cismin hız–zaman grafiği zaman ekseninin üstünde yatay bir doğruysa net kuvveti için ne söylenir?', options: ['Hareket yönünde sıfırdan büyüktür.', 'Zamana bağlı sürekli artar.', 'Hızına eşittir.', 'Sabit kütle için sıfırdır.'], answer: 3, explanation: 'Hız sabit olduğu için ivme sıfırdır. Sabit kütleli cisimde net kuvvet de sıfırdır; hareket etmek tek başına net kuvvet gerektirmez.' },
    cards: [{ front: 'Negatif ivme her zaman yavaşlatır mı?', back: 'Hayır. Sürat değişimi için ivmenin hızla aynı mı zıt mı yönde olduğuna bakılır.' }, { front: 'Etki ve tepki neden aynı cismin üzerinde dengelenmez?', back: 'Farklı cisimlere etki ederler.' }],
    source: { book: 'TYT-fiz', page: 26 }
  },
  {
    id: 'fiz-tyt-05', exam: 'TYT', subject: 'fizik', title: 'İş yapan kuvveti, dönüşen enerjiyi bul', unit: 'İş, enerji ve güç', minutes: 5,
    tags: ['iş', 'kinetik enerji', 'mekanik enerji', 'güç'],
    summary: 'Fiziksel iş için kuvvetin yer değiştirme doğrultusundaki bileşeni gerekir. Enerji kaybolmaz; farklı biçimlere ve çevreye aktarılabilir.',
    visual: { type: 'flow', nodes: [
      { label: 'Kuvvet ve yol', detail: 'Kuvvet yer değiştirmeye dikse o kuvvetin yaptığı iş sıfırdır; aynı yöndeyse iş pozitiftir.' },
      { label: 'Net iş', detail: 'Cisme etki eden kuvvetlerin toplam işi, cismin kinetik enerjisindeki değişime eşittir.' },
      { label: 'Mekanik enerji', detail: 'Kinetik enerji ile potansiyel enerjilerin toplamıdır. Uygun koşullarda bu biçimler birbirine dönüşür.' },
      { label: 'Sürtünme', detail: 'Mekanik enerjinin bir bölümü iç enerjiye dönüşebilir; toplam enerjinin yok olduğu söylenmez.' },
      { label: 'Güç', detail: 'Enerji aktarımının veya işin yapılma hızıdır. Aynı işi daha kısa sürede yapanın ortalama gücü daha büyüktür.' }
    ] },
    sections: [
      { title: 'Kuvveti tek tek incele', text: 'Yatay yönde sabit yükseklikte taşınan bir cisme yer çekimi kuvveti düşey etki eder. Bu kuvvetin mekanik işi sıfırdır; bu sonuç, insanın hiç enerji harcamadığı anlamına gelmez.' },
      { title: 'Korunumun koşulu', text: 'Sistemde yalnız korunumlu kuvvetler iş yapıyorsa mekanik enerji korunur. Sürtünmeyle duran bir cisimde kinetik enerjinin azalması, sistem ve çevre toplamında enerji korunumuna aykırı değildir.' }
    ],
    memory: 'Net iş → kinetik enerji değişimi. Güç → aynı işi ne kadar hızlı yaptın?',
    question: { stem: 'Bir çanta yatay doğrultuda, yüksekliği değişmeden taşınıyor. Çantaya etki eden yer çekimi kuvvetinin yaptığı iş nedir?', options: ['Sıfırdır.', 'Her durumda pozitiftir.', 'Çantanın ağırlığına eşittir.', 'Taşınma süresiyle aynı birimdedir.'], answer: 0, explanation: 'Yer çekimi düşey, yer değiştirme yataydır. İki doğrultu dik olduğu için yer çekiminin yaptığı mekanik iş sıfırdır.' },
    cards: [{ front: 'Net iş neye eşittir?', back: 'Kinetik enerjideki değişime.' }, { front: 'Sürtünme toplam enerjiyi yok eder mi?', back: 'Hayır; mekanik enerjinin iç enerji gibi başka biçimlere dönüşmesine yol açabilir.' }],
    source: { book: 'TYT-fiz', page: 45 }
  },
  {
    id: 'fiz-tyt-06', exam: 'TYT', subject: 'fizik', title: 'Basınç ve kaldırma: derinlik mi, hacim mi?', unit: 'Basınç ve kaldırma kuvveti', minutes: 6,
    tags: ['sıvı basıncı', 'Pascal', 'kaldırma kuvveti', 'yüzme'],
    summary: 'Durgun sıvının bir noktadaki basıncı ile cisme uyguladığı toplam kaldırma kuvveti farklı büyüklüklerdir.',
    visual: { type: 'layers', demo: 'pressure', nodes: [
      { label: 'Katıda basınç', detail: 'Dik kuvvetin temas alanına oranıdır. Aynı kuvvet daha küçük alanda daha büyük basınç oluşturur.' },
      { label: 'Sıvıda basınç', detail: 'Sıvının oluşturduğu basınç derinlik, sıvı özkütlesi ve yer çekimi ivmesine bağlıdır; kabın şekline bağlı değildir.' },
      { label: 'Açık hava', detail: 'Açık kaptaki toplam basınçta yüzeydeki atmosfer basıncı da bulunur. Sıvı basıncıyla toplam basıncı ayır.' },
      { label: 'Pascal ilkesi', detail: 'Kapalı sıvıya uygulanan basınç değişimi sıvının her noktasına iletilir. Hidrolik düzenek kuvvet kazancı sağlayabilir.' },
      { label: 'Kaldırma kuvveti', detail: 'Yer değiştirilen sıvının ağırlığına eşittir. Sıvının özkütlesine ve cismin sıvı içindeki hacmine bağlıdır.' }
    ] },
    sections: [
      { title: 'Basınç ile kuvvet', text: 'Aynı derinlikte basınç eşit olabilir; farklı alanlara etkiyen basınç kuvvetleri farklı olabilir. Basınç birimi pascal, kuvvet birimi newtondur.' },
      { title: 'Yüzen cisim', text: 'Başka düşey kuvvet yokken dengede yüzen cismin kaldırma kuvveti ağırlığına eşittir. Aynı cisim daha yoğun sıvıda daha az hacmi batarak yüzebilir; kaldırma kuvvetinin mutlaka arttığı söylenmez.' }
    ],
    memory: 'Basınç: noktadaki etki. Kaldırma: yer değiştiren sıvının ağırlığı.',
    question: { stem: 'Aynı sıvı, farklı biçimli açık kaplarda duruyor. Sıvı yüzeyinden aynı derinlikteki noktalarda, sıvının oluşturduğu basınçlar nasıldır?', options: ['Geniş kapta daima daha büyüktür.', 'Birbirine eşittir.', 'Sıvı hacmiyle zorunlu olarak doğru orantılıdır.', 'Kabın rengine bağlıdır.'], answer: 1, explanation: 'Durgun sıvıda basınç h·özkütle·g ile belirlenir. Sıvı ve derinlik aynıysa kabın şekli sonucu değiştirmez.' },
    cards: [{ front: 'Kaldırma kuvveti neyin ağırlığına eşittir?', back: 'Cismin yer değiştirdiği sıvının ağırlığına.' }, { front: 'Aynı kuvvette temas alanı azalırsa katı basıncı?', back: 'Artar.' }],
    source: { book: 'TYT-fiz', page: 133 }
  },
  {
    id: 'fiz-tyt-07', exam: 'TYT', subject: 'fizik', title: 'Elektriklenme: yük oluşmaz, aktarılır', unit: 'Elektrostatik', minutes: 5,
    tags: ['yük korunumu', 'etki', 'dokunma', 'iletken'],
    summary: 'Elektriklenmede yükler yoktan üretilmez. Elektron alışverişi veya yüklerin yeniden dağılımı, cisimlerin elektriksel davranışını değiştirir.',
    visual: { type: 'flow', nodes: [
      { label: 'Yük türleri', detail: 'Aynı işaretli yükler iter, zıt işaretli yükler çeker. Pozitif yüklenme genellikle elektron eksilmesiyle oluşur.' },
      { label: 'Sürtünme', detail: 'Uygun iki madde arasında elektron aktarımı olabilir; toplam yük korunur.' },
      { label: 'Dokunma', detail: 'İletkenler temas ettiğinde koşullara göre yük aktarımı gerçekleşir. Yük paylaşımı her durumda eşit değildir.' },
      { label: 'Etki', detail: 'Yaklaştırılan yüklü cisim, iletkendeki yükleri ayırabilir. Dokunma ve topraklama olmadan net yük değişmek zorunda değildir.' },
      { label: 'Alan', detail: 'Elektrik alanın yönü pozitif deneme yüküne etki eden kuvvet yönü olarak tanımlanır.' }
    ] },
    sections: [
      { title: 'Çekim tek başına işareti belirlemez', text: 'Yüklü bir cisim nötr bir cismi kutuplanma veya etkiyle de çekebilir. Bu nedenle iki cismin birbirini çekmesi, ikisinin kesinlikle zıt yüklü olduğunu kanıtlamaz.' },
      { title: 'İletken ile yalıtkan', text: 'İletkenlerde serbest yükler kolay hareket eder; yalıtkanda hareketleri sınırlıdır. Elektrostatik dengede fazla yük iletkenin dış yüzeyinde dağılır. Dağılım, cismin geometrisine bağlı olabilir.' }
    ],
    memory: 'Etkiyle yük ayrışması, net yük kazanmakla aynı şey değildir.',
    question: { stem: 'Yalıtkan ayak üzerindeki nötr metal küreye yüklü çubuk yaklaştırılıyor; temas ve topraklama yok. Hangisi doğrudur?', options: ['Kürenin toplam yükü kesin pozitif olur.', 'Kürede yeni protonlar oluşur.', 'Yükler yeniden dağılabilir, toplam yük sıfır kalır.', 'Kürenin tüm elektronları yok olur.'], answer: 2, explanation: 'Çubuğun alanı yüklerin konumunu değiştirebilir. Yük giriş çıkışı olmadığından başlangıçta nötr kürenin toplam yükü sıfır kalır.' },
    cards: [{ front: 'Pozitif yüklenme çoğu katıda nasıl oluşur?', back: 'Elektron kaybıyla; protonların yer değiştirmesiyle değil.' }, { front: 'Çekim, kesin zıt yük demek mi?', back: 'Hayır. Nötr cisim de yüklü cisme çekilebilir.' }],
    source: { book: 'TYT-fiz', page: 87 }
  },
  {
    id: 'fiz-tyt-08', exam: 'TYT', subject: 'fizik', title: 'Devrede akım ve gerilim nerede aynı?', unit: 'Elektrik devreleri', minutes: 6,
    tags: ['seri', 'paralel', 'Ohm', 'parlaklık'],
    summary: 'Seri-paralel ayrımını devrenin çizimine değil bağlantı noktalarına göre yap. Pil gerilim sağlar; devredeki akım toplam dirence göre belirlenir.',
    visual: { type: 'compare', demo: 'circuit', nodes: [
      { label: 'Akım', detail: 'Birim zamanda geçen yük miktarıdır. Geleneksel akım yönü, elektronların iletkendeki sürüklenme yönüne terstir.' },
      { label: 'Direnç', detail: 'Ohmik iletkende koşullar sabitken gerilim/akım oranıdır. Telin uzunluğu, kesiti ve cinsi direnci etkiler.' },
      { label: 'Seri', detail: 'Tek akım yolundaki dirençlerden aynı akım geçer. Gerilim paylaşılır; eşdeğer direnç artar.' },
      { label: 'Paralel', detail: 'Aynı iki noktaya bağlı kolların gerilimi aynıdır. Toplam akım kollara ayrılır; yeni kol eşdeğer direnci azaltabilir.' },
      { label: 'Parlaklık', detail: 'Lambanın elektriksel gücüyle ilişkilidir. Akım veya gerilimi tek başına karşılaştırmadan dirençleri de değerlendir.' }
    ] },
    sections: [
      { title: 'Pil sabit akım kaynağı değildir', text: 'İdeal pilin gerilimi sabit kabul edilir. Devrenin eşdeğer direnci azalırsa pilden çekilen toplam akım artar. Gerçek pilin iç direnci varsa uç gerilimi de etkilenebilir.' },
      { title: 'Paralelde yeni lamba', text: 'İdeal pile paralel bağlı, dirençleri sabit lambalardan birinin yanına yeni paralel lamba eklemek eskisinin gerilimini değiştirmez. Toplam akım artarken eski lambanın gücü aynı kalabilir.' }
    ],
    memory: 'Seri: akım aynı. Paralel: gerilim aynı. Pilin akımı devreye göre değişir.',
    question: { stem: 'İdeal pile bağlı bir lambaya, aynı dirence sahip ikinci lamba paralel ekleniyor. İlk lambanın gücü nasıl değişir? Lamba dirençleri sabittir.', options: ['Sıfır olur.', 'Yarıya iner.', 'İki katına çıkar.', 'Aynı kalır.'], answer: 3, explanation: 'İlk lambanın uçlarındaki gerilim ve direnci değişmez. Gücü V²/R aynı kalır; pilin sağladığı toplam akım artar.' },
    cards: [{ front: 'Paralel kollarda aynı olan büyüklük?', back: 'Gerilim.' }, { front: 'Seri dirençlerde aynı olan büyüklük?', back: 'Akım.' }],
    source: { book: 'TYT-fiz', page: 108 }
  },
  {
    id: 'fiz-tyt-09', exam: 'TYT', subject: 'fizik', title: 'Mıknatıs ve akımın ortak dili', unit: 'Manyetizma', minutes: 5,
    tags: ['manyetik alan', 'kutuplar', 'elektromıknatıs'],
    summary: 'Mıknatıslar ve elektrik akımları çevrelerinde manyetik alan oluşturur. Alan çizgileri, alanın yönünü ve dağılışını temsil eden bir modeldir.',
    visual: { type: 'compare', nodes: [
      { label: 'Kutuplar', detail: 'Aynı kutuplar iter, zıt kutuplar çeker. Bir çubuk mıknatıs bölününce tek başına kuzey veya güney kutbu elde edilmez.' },
      { label: 'Alan çizgileri', detail: 'Mıknatısın dışında kuzeyden güneye yönelir. Çizgilerin yoğunluğu alanın daha güçlü olduğu bölgeleri temsil eder.' },
      { label: 'Pusula', detail: 'Pusula iğnesi bulunduğu yerdeki bileşke manyetik alan doğrultusunda yönelir.' },
      { label: 'Akım taşıyan tel', detail: 'Tel çevresinde manyetik alan oluşur. Akım yönünü ters çevirmek alan yönünü de ters çevirir.' },
      { label: 'Elektromıknatıs', detail: 'Bobin, akım ve uygun çekirdek kullanılarak kontrol edilebilir manyetik etki elde edilir.' }
    ] },
    sections: [
      { title: 'Alan çizgisi madde değildir', text: 'Çizgiler gözle görülür fiziksel ipler değildir. Bir noktadaki manyetik alanın yönünü ve göreli şiddetini anlatırlar. Manyetik alan vektörel bir büyüklüktür.' },
      { title: 'Yön ve şiddeti ayır', text: 'Akımın yalnız yönünü ters çevirmek alan yönünü değiştirir; büyüklüğünü tek başına artırmak zorunda değildir. Akım şiddeti, tele uzaklık ve düzenek geometrisi alan büyüklüğünü etkiler.' }
    ],
    memory: 'Mıknatısı böl → yine iki kutuplu parçalar. Akımı ters çevir → alan yönü ters döner.',
    question: { stem: 'Bir çubuk mıknatıs ortadan ikiye ayrıldığında parçalar için hangi ifade doğrudur?', options: ['Her parçada kuzey ve güney kutbu oluşur.', 'Bir parça yalnız kuzey kutbudur.', 'Bir parça yalnız güney kutbudur.', 'Her parça zorunlu olarak elektrikçe pozitif olur.'], answer: 0, explanation: 'Mıknatısın bölünmesi tek kutup ayırmaz. Her parça yeniden kuzey ve güney kutupları bulunan bir mıknatıs olarak davranır.' },
    cards: [{ front: 'Akım taşıyan tel çevresinde ne oluşur?', back: 'Manyetik alan.' }, { front: 'Pusula neye göre yönelir?', back: 'Bulunduğu noktadaki bileşke manyetik alana göre.' }],
    source: { book: 'TYT-fiz', page: 122 }
  },
  {
    id: 'fiz-tyt-10', exam: 'TYT', subject: 'fizik', title: 'Dalgadan ışığa: ne değişir, ne korunur?', unit: 'Dalgalar ve optik', minutes: 7,
    tags: ['frekans', 'dalga boyu', 'kırılma', 'mercek'],
    summary: 'Dalganın enerjiyi taşıması, ortam maddesinin dalgayla birlikte yolculuk ettiği anlamına gelmez. Ortam geçişinde frekans ile hızı ayır.',
    visual: { type: 'compare', demo: 'lens', nodes: [
      { label: 'Frekans', detail: 'Saniyedeki titreşim sayısıdır; kaynağın özelliğidir. Sabit kaynakta ortam değişince frekans değişmez.' },
      { label: 'Dalga boyu', detail: 'Ardışık eş fazlı noktalar arası uzaklıktır. Hız = frekans × dalga boyu bağlantısı geçerlidir.' },
      { label: 'Ses', detail: 'Mekanik dalgadır; boşlukta yayılmaz. Sesin yüksekliği frekansla, şiddeti genlikle ilişkilidir.' },
      { label: 'Yansıma', detail: 'Işıkta gelme ve yansıma açıları normale göre ölçülür ve birbirine eşittir.' },
      { label: 'Kırılma', detail: 'Işığın ortam değiştirirken hızı değişebilir. Daha büyük kırılma indisli ortama eğik girişte ışın normale yaklaşır.' },
      { label: 'İnce kenarlı mercek', detail: 'Havada yakınsak davranır. Gerçek cismin odak dışında ters-gerçek, odak içinde düz-sanal görüntüsü oluşabilir.' }
    ] },
    sections: [
      { title: 'Hızın kaynağını ayır', text: 'Dalga hızı ortam özelliklerine bağlıdır. Kaynağın frekansını değiştirmek, koşulları sabit ideal ortamda dalga hızını zorunlu olarak değiştirmez; dalga boyu değişebilir.' },
      { title: 'Optikte görüntü tuzağı', text: 'Düzlem ayna düz ve sanal görüntü oluşturur. İnce kenarlı merceğin ise her durumda büyüttüğünü söyleyemezsin; görüntünün niteliği cismin odağa göre konumuna bağlıdır. Odakta sonlu uzaklıkta bir görüntü oluşmaz.' }
    ],
    memory: 'Ortam geçişi: frekans aynı, hız değişirse dalga boyu da değişir.',
    question: { stem: 'Frekansı değişmeyen bir dalga, daha yavaş yayıldığı başka ortama geçiyor. Dalga boyu nasıl değişir?', options: ['Artar.', 'Azalır.', 'Her durumda aynı kalır.', 'Frekansın karesine dönüşür.'], answer: 1, explanation: 'v = f·dalga boyu. Frekans sabitken hız azaldığı için dalga boyu da azalır.' },
    cards: [{ front: 'Ses boşlukta yayılır mı?', back: 'Hayır; mekanik dalga olduğundan madde ortamı gerekir.' }, { front: 'İnce kenarlı mercek her zaman büyütür mü?', back: 'Hayır. Görüntü cismin odağa göre konumuna bağlıdır.' }],
    source: { book: 'TYT-fiz', page: 147 }
  },
  {
    id: 'fiz-ayt-01', exam: 'AYT', subject: 'fizik', title: 'Vektörden dengeye: iki ayrı bilanço', unit: 'Kuvvet, hareket ve denge', minutes: 7,
    tags: ['vektör', 'bağıl hareket', 'Newton', 'tork'],
    summary: 'Öteleme için net kuvveti, dönme için net torku incele. Birinin sıfır olması diğerinin de sıfır olduğunu garanti etmez.',
    visual: { type: 'flow', nodes: [
      { label: 'Vektör bileşenleri', detail: 'Kuvvetleri seçtiğin eksenlerde bileşenlerine ayır; aynı eksendeki işaretli bileşenleri topla.' },
      { label: 'Bağıl hız', detail: 'Gözlenen cismin hızı eksi gözlemcinin hızı alınır. Hızların aynı referans sisteminde verilmesi gerekir.' },
      { label: 'Net kuvvet', detail: 'Sabit kütlede kütle merkezinin ivmesini belirler. Kuvvetleri yalnız büyüklük olarak toplama.' },
      { label: 'Tork', detail: 'Seçilen dönme noktasına göre kuvvetin döndürme etkisidir. Kuvvetin etki çizgisine dik uzaklık önemlidir.' },
      { label: 'Statik denge', detail: 'Durağan cismin dengede kalması için net kuvvet ve net tork birlikte sıfır olmalıdır.' }
    ] },
    sections: [
      { title: 'Kuvvet çifti', text: 'Farklı doğrular boyunca etki eden eşit ve zıt iki kuvvetin toplamı sıfır olabilirken toplam tork sıfır olmayabilir. Direksiyon çevirmek bu ayrımı düşünmek için uygun bir örnektir.' },
      { title: 'Destek kuvvetini ezberleme', text: 'Normal kuvvet her durumda ağırlığa eşit değildir; eğim, başka kuvvetler ve ivme sonucu değiştirir. Torkta uzaklık, cismin boyu değil seçilen noktadan etki çizgisine dik uzaklıktır.' }
    ],
    memory: 'Öteleme: toplam kuvvet. Dönme: toplam tork. Denge için ikisini de kontrol et.',
    question: { stem: 'Bir cisme etki eden net kuvvet sıfır, net tork sıfırdan farklıdır. Hangisi mümkündür?', options: ['Bütün kuvvetlerin sıfır olması', 'Cismin her koşulda statik dengede kalması', 'Kütle merkezinin ivmesi sıfırken açısal hızının değişmesi', 'Kütle merkezinin zorunlu olarak hızlanması'], answer: 2, explanation: 'Net kuvvetin sıfır olması kütle merkezinin ivmesini sıfırlar. Net tork ise dönme hareketini değiştirebilir; statik denge sağlanmış değildir.' },
    cards: [{ front: 'Torkta hangi uzaklık kullanılır?', back: 'Dönme noktasından kuvvetin etki çizgisine dik uzaklık.' }, { front: 'Statik dengenin iki koşulu?', back: 'Net kuvvet sıfır ve net tork sıfır.' }],
    source: { book: 'AYT-fiz', page: 85 }
  },
  {
    id: 'fiz-ayt-02', exam: 'AYT', subject: 'fizik', title: 'Enerji mi momentum mu korunuyor?', unit: 'İş, enerji ve momentum', minutes: 6,
    tags: ['itme', 'momentum', 'çarpışma', 'korunum'],
    summary: 'Momentum korunumu ile kinetik enerji korunumunun koşulları farklıdır. Çarpışma sorusunda önce sistemi ve dış etkileri belirle.',
    visual: { type: 'compare', nodes: [
      { label: 'İş', detail: 'Kuvvet–konum grafiğinin işaretli alanı iştir. Net iş, kinetik enerji değişimini verir.' },
      { label: 'İtme', detail: 'Net kuvvet–zaman grafiğinin işaretli alanıdır; momentum değişimine eşittir.' },
      { label: 'Momentum', detail: 'Kütle ile hız vektörünün çarpımıdır. Korunumda yönleri ve işaretleri mutlaka hesaba kat.' },
      { label: 'Dış itme sıfır', detail: 'Sisteme etki eden net dış itme sıfırsa sistemin toplam çizgisel momentumu korunur.' },
      { label: 'Çarpışma türü', detail: 'Esnek çarpışmada kinetik enerji de korunur. Yapışmalı çarpışmada kinetik enerjinin bir kısmı başka biçimlere dönüşür.' }
    ] },
    sections: [
      { title: 'Sistem seçimi', text: 'İki cismin birbirine uyguladığı kuvvetler, ikisini birlikte sistem seçtiğinde iç kuvvetlerdir. Tek cismi incelersen aynı etkileşim onun momentumunu değiştirebilir.' },
      { title: 'Kayıp diye görünen enerji', text: 'Yapışmalı çarpışmada toplam enerji yok olmaz; şekil değiştirme, ısınma ve ses gibi biçimlere aktarılabilir. “Momentum korunur” ifadesi kinetik enerjinin de korunduğunu tek başına göstermez.' }
    ],
    memory: 'Dış itme sıfır → momentum korunur. Esnek çarpışma → kinetik enerji de korunur.',
    question: { stem: 'Net dış itmenin ihmal edildiği iki cisim çarpışıp yapışıyor. Sistem için hangisi doğrudur?', options: ['Toplam momentum mutlaka sıfır olur.', 'Toplam kinetik enerji mutlaka korunur.', 'Toplam enerji yok olur.', 'Toplam momentum korunur; kinetik enerji azalabilir.'], answer: 3, explanation: 'Dış itme olmadığında toplam momentum korunur. Yapışma sırasında kinetik enerji başka enerji biçimlerine dönüşebildiğinden kinetik enerji azalabilir.' },
    cards: [{ front: 'Kuvvet–zaman alanı neyi verir?', back: 'İtmeyi, yani momentum değişimini.' }, { front: 'Momentum korunurken kinetik enerji azalabilir mi?', back: 'Evet; esnek olmayan çarpışmalarda olabilir.' }],
    source: { book: 'AYT-fiz', page: 70 }
  },
  {
    id: 'fiz-ayt-03', exam: 'AYT', subject: 'fizik', title: 'Atış ve çembersel hareket: hızın yönü', unit: 'İki boyutlu hareket', minutes: 7,
    tags: ['atış', 'bileşen', 'merkezcil ivme', 'çembersel hareket'],
    summary: 'Hızın büyüklüğü ile hız vektörünün değişimini ayır. Atışta yatay-düşey bileşenler; çembersel harekette teğetsel hız ve merkezcil ivme birlikte düşünülür.',
    visual: { type: 'compare', nodes: [
      { label: 'Yatay bileşen', detail: 'Hava direnci yokken yatay atışta yatay ivme sıfırdır; yatay hız sabit kalır.' },
      { label: 'Düşey bileşen', detail: 'Yer yüzeyine yakın atışlarda yer çekimi ivmesi aşağı yönlüdür; düşey hız zamanla değişir.' },
      { label: 'Tepe noktası', detail: 'Eğik atışta tepe noktasında düşey hız sıfırdır; yatay hız ve yer çekimi ivmesi sıfır olmak zorunda değildir.' },
      { label: 'Çembersel hız', detail: 'Düzgün çembersel harekette sürat sabittir fakat hızın yönü sürekli değişir; dolayısıyla ivme vardır.' },
      { label: 'Merkezcil etki', detail: 'İvme merkeze yönelir. Merkezcil kuvvet yeni bir kuvvet türü değil, merkez yönündeki net kuvvetin adıdır.' }
    ] },
    sections: [
      { title: 'Ortak zaman', text: 'Atışta yatay ve düşey hareket aynı zaman boyunca gerçekleşir. Hava direnci yoksa aynı yükseklikten biri serbest bırakılıp diğeri yatay atılan cisimlerin düşme süreleri eşittir; yatay hız düşey süreyi değiştirmez.' },
      { title: 'Dönme kavramları', text: 'Aynı yarıçapta sürat iki katına çıkarsa merkezcil ivme dört katına çıkar. Dönmede kütlenin eksene dağılımı eylemsizlik momentini etkiler. Net dış tork sıfırken açısal momentum korunabilir.' }
    ],
    memory: 'Tepe: düşey hız sıfır, ivme değil. Çember: sürat sabit, hız vektörü değil.',
    question: { stem: 'Hava direnci olmayan ortamda eğik atılan cismin en yüksek noktasındaki ivmesi nasıldır?', options: ['Aşağı yönlü yer çekimi ivmesidir.', 'Sıfırdır.', 'Yatay ve hareket yönündedir.', 'Yukarı yönlüdür.'], answer: 0, explanation: 'Tepe noktasında yalnız düşey hız bileşeni sıfır olur. Yer çekimi etkisi sürdüğü için ivme aşağı yönlü g’dir.' },
    cards: [{ front: 'Merkezcil kuvvet ayrı bir kuvvet türü mü?', back: 'Hayır; merkeze yönelen net kuvvetin adıdır.' }, { front: 'Düzgün çembersel harekette ivme var mı?', back: 'Evet. Sürat sabit olsa da hızın yönü değişir.' }],
    source: { book: 'AYT-fiz', page: 137 }
  },
  {
    id: 'fiz-ayt-04', exam: 'AYT', subject: 'fizik', title: 'Basit harmonik harekette dört durak', unit: 'Basit harmonik hareket', minutes: 6,
    tags: ['denge konumu', 'genlik', 'periyot', 'enerji'],
    summary: 'İdeal basit harmonik harekette geri çağırıcı kuvvet denge konumuna yönelir ve uzanımla orantılıdır. Hız ile ivme aynı noktada en büyük değildir.',
    visual: { type: 'cycle', nodes: [
      { label: 'Sağ uç', detail: 'Uzanım +A, hız sıfır; ivme ve geri çağırıcı kuvvet sola doğru en büyük büyüklüktedir.' },
      { label: 'Dengeden sola', detail: 'Uzanım sıfır; sürat en büyük, geri çağırıcı kuvvet ve ivme sıfırdır.' },
      { label: 'Sol uç', detail: 'Uzanım −A, hız sıfır; ivme ve geri çağırıcı kuvvet sağa doğru en büyük büyüklüktedir.' },
      { label: 'Dengeden sağa', detail: 'Yeniden en büyük süratle geçer; hızın yönü önceki denge geçişine terstir.' }
    ] },
    sections: [
      { title: 'Enerjinin yeri', text: 'İdeal yay düzeneğinde uçlarda yay potansiyel enerjisi, denge konumunda kinetik enerji en büyüktür. Sürtünme yoksa toplam mekanik enerji korunur; hareket duraklasa bile uç noktada enerji sıfırlanmaz.' },
      { title: 'Periyot neye bağlı?', text: 'İdeal yay sarkacında kütle arttıkça periyot artar; yay sabiti arttıkça azalır. Küçük açılı basit sarkaçta periyot uzunluğa ve yer çekimi ivmesine bağlıdır; sarkaç kütlesine bağlı değildir.' }
    ],
    memory: 'Uçta hız sıfır, ivme maksimum. Dengede hız maksimum, ivme sıfır.',
    question: { stem: 'İdeal yay sarkacı denge konumundan geçerken hangi eşleştirme doğrudur?', options: ['Sürat sıfır – ivme maksimum', 'Sürat maksimum – ivme sıfır', 'Sürat ve ivme birlikte maksimum', 'Toplam mekanik enerji sıfır'], answer: 1, explanation: 'Denge konumunda uzanım sıfır olduğundan geri çağırıcı kuvvet ve ivme sıfırdır. Enerjinin kinetik kısmı en büyük olduğu için sürat maksimumdur.' },
    cards: [{ front: 'BHH’de ivmenin yönü?', back: 'Her zaman denge konumuna doğrudur.' }, { front: 'Küçük açılı basit sarkaçta kütle periyodu değiştirir mi?', back: 'İdeal modelde değiştirmez.' }],
    source: { book: 'AYT-fiz', page: 175 }
  },
  {
    id: 'fiz-ayt-05', exam: 'AYT', subject: 'fizik', title: 'Yörüngede olmak sürekli düşmektir', unit: 'Kütle çekimi ve Kepler', minutes: 6,
    tags: ['uydu', 'kütle çekimi', 'yörünge', 'Kepler'],
    summary: 'Uydu yer çekiminden kurtulduğu için değil, uygun yatay hızla sürekli serbest düşüş yaptığı için yörüngede kalır.',
    visual: { type: 'flow', nodes: [
      { label: 'Çekim kuvveti', detail: 'İki kütle birbirini çeker. Uzaklık, küresel cisimlerin merkezleri arasında ölçülür; kuvvet uzaklığın karesiyle ters orantılıdır.' },
      { label: 'Çembersel yörünge', detail: 'Çekim kuvveti merkezcil etkiyi sağlar. Yörünge hızı ve yarıçap bağımsız rastgele seçilemez.' },
      { label: 'Daha uzak uydu', detail: 'Aynı merkezî kütle etrafındaki daha geniş çembersel yörüngede hız daha küçük, dolanım süresi daha büyüktür.' },
      { label: 'Ağırlıksızlık', detail: 'Uydu içindeki serbest düşüş durumunda destek kuvveti olmayabilir; çekim kuvveti sıfır olmak zorunda değildir.' },
      { label: 'Kepler', detail: 'Eliptik yörüngede merkezî cisim bir odaktadır. Eşit zamanlarda eşit alanlar taranır; yaklaşırken hız artar.' }
    ] },
    sections: [
      { title: 'Yükseklik ile yarıçap', text: 'Çekim hesabında yeryüzünden yükseklik değil, Dünya merkezine uzaklık kullanılır. Yükseklik arttıkça yer çekimi ivmesi azalır; “uzayda çekim yoktur” genellemesi doğru değildir.' },
      { title: 'Periyot karşılaştırması', text: 'Aynı merkezî kütle çevresindeki yörüngelerde dolanım süresinin karesi, elipsin büyük yarı ekseninin küpüyle orantılıdır. Çembersel yörüngede bu uzunluk yarıçaptır.' }
    ],
    memory: 'Uydu: yatay hareket + sürekli düşüş. Ağırlıksızlık, çekimsizlik değildir.',
    question: { stem: 'İki noktasal kütle arasındaki uzaklık iki katına çıkarılırsa, kütleler sabitken çekim kuvveti nasıl değişir?', options: ['İki katına çıkar.', 'Yarıya iner.', 'Dörtte birine iner.', 'Aynı kalır.'], answer: 2, explanation: 'Çekim kuvveti uzaklığın karesiyle ters orantılıdır. Uzaklık 2 kat olursa kuvvet 1/2² = 1/4 olur.' },
    cards: [{ front: 'Çekim bağıntısındaki uzaklık nereden ölçülür?', back: 'Küresel cisimlerin merkezleri arasından.' }, { front: 'Astronotun ağırlıksız olması çekimin sıfır olduğunu gösterir mi?', back: 'Hayır. Yörüngede serbest düşüş ve destek kuvvetinin yokluğu ile ilişkilidir.' }],
    source: { book: 'AYT-fiz', page: 166 }
  },
  {
    id: 'fiz-ayt-06', exam: 'AYT', subject: 'fizik', title: 'Elektrik alan ile potansiyeli ayır', unit: 'Elektrik alan ve potansiyel', minutes: 6,
    tags: ['alan', 'potansiyel', 'eş potansiyel', 'elektriksel iş'],
    summary: 'Elektrik alan vektörel, elektriksel potansiyel skalerdir. Alanların yönlü toplamı sıfırken potansiyellerin toplamı sıfır olmayabilir.',
    visual: { type: 'compare', nodes: [
      { label: 'Alan', detail: 'Pozitif birim yüke düşen kuvvettir. Pozitif kaynaktan dışa, negatif kaynağa doğru yönelir.' },
      { label: 'Potansiyel', detail: 'Birim yüke düşen elektriksel potansiyel enerjidir. Seçilen sıfır düzeyine göre işaret alır.' },
      { label: 'Kuvvet', detail: 'Pozitif yük alan yönünde, negatif yük alanın ters yönünde kuvvet görür.' },
      { label: 'Enerji değişimi', detail: 'Potansiyel enerji değişimi q·potansiyel farkıdır. Negatif yükte işaretin sonucu ters çevirebileceğini unutma.' },
      { label: 'Eş potansiyel', detail: 'İki nokta aynı potansiyeldeyse aralarındaki elektriksel iş sıfırdır. Elektrostatik alan eş potansiyel yüzeylere diktir.' }
    ] },
    sections: [
      { title: 'İşaretli toplama', text: 'Noktasal kaynakların potansiyellerini cebirsel, alanlarını vektörel toplarsın. Alanın sıfır olduğu her noktada potansiyelin de sıfır olduğunu söyleyemezsin.' },
      { title: 'Alan yönünde ne azalır?', text: 'Elektrostatik alan yönünde elektriksel potansiyel azalır. Ancak bir yükün potansiyel enerjisinin nasıl değiştiğini bulmak için yükün işaretini de kullanmak gerekir.' }
    ],
    memory: 'Alan = yönlü kuvvet bilgisi. Potansiyel = işaretli enerji/yük bilgisi.',
    question: { stem: 'Eşit iki pozitif noktasal yükün tam orta noktasında alan ve potansiyel nasıldır? Potansiyelin sıfırı sonsuzdadır.', options: ['Alan ve potansiyel sıfırdır.', 'Alan sıfırdan farklı, potansiyel sıfırdır.', 'Alan sıfır, potansiyel negatiftir.', 'Alan sıfır, potansiyel pozitiftir.'], answer: 3, explanation: 'Eşit ve zıt yönlü alanlar birbirini götürür. İki pozitif yükün skaler potansiyelleri ise pozitif olarak toplanır.' },
    cards: [{ front: 'Alan ve potansiyelden hangisi vektöreldir?', back: 'Elektrik alan vektörel; potansiyel skalerdir.' }, { front: 'Eş potansiyel iki nokta arasında elektriksel iş?', back: 'Sıfırdır.' }],
    source: { book: 'AYT-fiz', page: 103 }
  },
  {
    id: 'fiz-ayt-07', exam: 'AYT', subject: 'fizik', title: 'Sığa, manyetik etki ve indüksiyon', unit: 'Elektrik ve manyetizma', minutes: 7,
    tags: ['sığaç', 'manyetik kuvvet', 'akı', 'Lenz'],
    summary: 'Sığaç alanında enerji depolar; manyetik indüksiyon değişen akıyla ilişkilidir. Her soruda neyin sabit tutulduğunu ve neyin değiştiğini belirle.',
    visual: { type: 'compare', nodes: [
      { label: 'Sığa', detail: 'İdeal paralel levhalı sığacın sığası levha alanı, aralık ve yalıtkan ortama bağlıdır; C = Q/V ilişkisi geçerlidir.' },
      { label: 'Pile bağlı', detail: 'İdeal pile bağlı sığaçta gerilim sabittir; sığa değişirse depolanan yük değişebilir.' },
      { label: 'Pilden ayrılmış', detail: 'Yalıtılmış ve kaçaksız sığaçta yük sabittir; sığa değişirse gerilim değişebilir.' },
      { label: 'Manyetik kuvvet', detail: 'Hareketli yüke uygulanan manyetik kuvvet hıza diktir; tek başına parçacığın süratini değiştirmez.' },
      { label: 'Manyetik akı', detail: 'Alan büyüklüğü, yüzey alanı ve alanın yüzey normaline göre yönelimiyle belirlenir.' },
      { label: 'İndüksiyon', detail: 'Akı değişimi elektromotor kuvvet oluşturabilir. Lenz yasasında tepki, akının kendisine değil değişimine karşıdır.' }
    ] },
    sections: [
      { title: 'Sabit koşulu seç', text: 'Bir sığaç değişiminde önce pilin bağlı olup olmadığına bak. Gerilim sabitliği ile yük sabitliğini aynı anda varsaymak çoğu değişim sorusunda hatalı sonuç verir.' },
      { title: 'Alan varlığı yeterli değildir', text: 'Duran kapalı bir tel halkanın içinden geçen düzgün ve sabit manyetik akı, kendi başına sürekli indüksiyon akımı oluşturmaz. Akının zamanla değişmesi gerekir; akım için devrenin kapalı ve iletken olması da önemlidir.' }
    ],
    memory: 'Sığaçta bağlı pil → V sabit; yalıtılmış → Q sabit. İndüksiyonda kilit: akı değişimi.',
    question: { stem: 'Duran kapalı tel halkadan geçen manyetik akı zamanla değişmiyor. Yalnız bu manyetik etki nedeniyle indüksiyon akımı için ne söylenir?', options: ['Oluşmaz.', 'Sürekli artar.', 'Alan var olduğu için mutlaka oluşur.', 'Halkanın rengini izler.'], answer: 0, explanation: 'İndüksiyon elektromotor kuvveti manyetik akının değişimine bağlıdır. Akı sabitse bu nedenle indüksiyon akımı oluşmaz.' },
    cards: [{ front: 'Sığaç ideal pile bağlıyken sabit kalan?', back: 'Pilin belirlediği gerilim.' }, { front: 'Lenz yasası neye karşı tepkiyi anlatır?', back: 'Manyetik akının değişimine karşı oluşan manyetik etkiyi.' }],
    source: { book: 'AYT-fiz', page: 113 }
  },
  {
    id: 'fiz-ayt-08', exam: 'AYT', subject: 'fizik', title: 'Alternatif akım ve transformatör', unit: 'Alternatif akım', minutes: 6,
    tags: ['etkin değer', 'transformatör', 'indüksiyon', 'enerji iletimi'],
    summary: 'Alternatif akımın yönü ve değeri zamanla değişir. Transformatör, değişen manyetik akı aracılığıyla alternatif gerilimi dönüştürür.',
    visual: { type: 'flow', nodes: [
      { label: 'Değişen akım', detail: 'Alternatif akım, bobinde zamanla değişen manyetik alan oluşturabilir.' },
      { label: 'Ortak akı', detail: 'Çekirdek aracılığıyla diğer bobine bağlanan değişken manyetik akı indüksiyon sağlar.' },
      { label: 'Sarım oranı', detail: 'İdeal transformatörde gerilim oranı sarım sayıları oranına eşittir; çok sarımlı tarafta gerilim daha büyüktür.' },
      { label: 'Güç dengesi', detail: 'İdeal düzende giriş ve çıkış güçleri eşittir. Gerilim yükseltilirken aynı güçte akım azalır.' },
      { label: 'İletim kaybı', detail: 'Aynı gücü daha yüksek gerilim ve daha düşük akımla taşımak, hat direncindeki I²R kaybını azaltır.' }
    ] },
    sections: [
      { title: 'Etkin değer', text: 'Alternatif akımın etkin değeri, aynı dirençte aynı ortalama ısı etkisini oluşturan doğru akım değeriyle ilişkilidir. Sinüzoidal akımın anlık sıfır olması, bir periyottaki ortalama gücün sıfır olduğu anlamına gelmez.' },
      { title: 'Doğru akım sınırı', text: 'Kararlı doğru akım ideal transformatörde sürekli değişen akı üretmez; sürekli gerilim dönüşümü sağlamaz. Gerçek transformatörlerde kayıplar vardır; verim yüzde yüz kabulü ideal modele aittir.' }
    ],
    memory: 'İdeal trafo enerji üretmez: gerilim artarsa aynı güçte akım azalır.',
    question: { stem: 'İdeal transformatör gerilimi 5 katına yükseltiyor. Giriş ve çıkış güçleri eşitse çıkış akımı giriş akımına göre nasıldır?', options: ['5 katıdır.', 'Beşte biridir.', '25 katıdır.', 'Her durumda aynıdır.'], answer: 1, explanation: 'Güç P = V·I ile ilişkilidir. Güç aynı kalırken gerilim 5 katına çıkarsa akım 1/5’e iner.' },
    cards: [{ front: 'İdeal trafoda gerilimi artırmak gücü artırır mı?', back: 'Hayır; ideal güç korunur, akım ters yönde değişir.' }, { front: 'Yüksek gerilimle iletimin temel yararı?', back: 'Aynı güç için akımı azaltarak hat üzerindeki I²R kayıplarını düşürmesi.' }],
    source: { book: 'AYT-fiz', page: 130 }
  },
  {
    id: 'fiz-ayt-09', exam: 'AYT', subject: 'fizik', title: 'Girişim, kırınım ve Doppler', unit: 'Dalga mekaniği', minutes: 7,
    tags: ['girişim', 'çift yarık', 'kırınım', 'Doppler'],
    summary: 'Dalga desenleri üst üste binmenin sonucudur. Bir noktadaki söndürme, enerjinin her yerde yok olması anlamına gelmez; enerji dağılımı değişir.',
    visual: { type: 'compare', demo: 'wave', nodes: [
      { label: 'Yapıcı girişim', detail: 'Uygun fazdaki dalgalar buluştuğunda genlik büyüyebilir; çift yarıkta aydınlık bölgeler oluşur.' },
      { label: 'Yıkıcı girişim', detail: 'Zıt fazdaki katkılar belirli noktada birbirini azaltabilir veya söndürebilir; başka noktalarda güçlenme vardır.' },
      { label: 'Çift yarık', detail: 'Küçük açı yaklaşımında saçak aralığı dalga boyu ve ekran uzaklığıyla artar; yarıklar arası uzaklıkla azalır.' },
      { label: 'Kırınım', detail: 'Dalga dar açıklık veya engel çevresinde yayılır. Açıklık dalga boyuna yaklaştığında etki belirginleşir.' },
      { label: 'Doppler', detail: 'Kaynak ile gözlemcinin göreli hareketi, gözlenen frekansı değiştirebilir. Yaklaşmada frekans genellikle artar.' },
      { label: 'Elektromanyetik dalga', detail: 'Boşlukta yayılabilir. Farklı frekanstaki elektromanyetik dalgaların boşluktaki yayılma hızları aynıdır.' }
    ] },
    sections: [
      { title: 'Deneyde tek değişken', text: 'Çift yarıkta dalga boyunu artırmak, diğer koşullar sabitken saçakları açar. Yarıklar arası uzaklığı artırmak saçakları sıklaştırır. Deseni yorumlarken ekran uzaklığı ve ortamı sabit tut.' },
      { title: 'Kaynak frekansı ve gözlenen frekans', text: 'Ses kaynağı yaklaşırken gözlemci daha yüksek frekans duyabilir; kaynağın kendi titreşim frekansı değişmek zorunda değildir. Sesin durgun ortamdaki yayılma hızını, gözlenen frekans değişimiyle karıştırma.' }
    ],
    memory: 'Çift yarık: dalga boyu artarsa açılır; yarık uzaklığı artarsa sıklaşır.',
    question: { stem: 'Çift yarık deneyinde dalga boyu ve ekran uzaklığı sabitken yarıklar arası uzaklık iki katına çıkarılıyor. Saçak aralığı nasıl değişir?', options: ['İki katına çıkar.', 'Dört katına çıkar.', 'Yarıya iner.', 'Değişmez.'], answer: 2, explanation: 'Küçük açı yaklaşımında saçak aralığı yarıklar arası uzaklıkla ters orantılıdır. Uzaklık 2 katına çıkarsa aralık yarıya iner.' },
    cards: [{ front: 'Dar açıklık dalga boyuna yaklaştıkça ne belirginleşir?', back: 'Kırınım.' }, { front: 'Doppler’de kaynak frekansı mutlaka değişir mi?', back: 'Hayır; gözlenen frekans göreli hareket nedeniyle değişebilir.' }],
    source: { book: 'AYT-fiz', page: 185 }
  },
  {
    id: 'fiz-ayt-10', exam: 'AYT', subject: 'fizik', title: 'Modern fizikte enerji paketleri', unit: 'Atom ve modern fizik', minutes: 7,
    tags: ['foton', 'fotoelektrik', 'Bohr', 'de Broglie', 'görelilik'],
    summary: 'Atomik olaylarda enerji alışverişi sürekli her değeri alamayabilir. Foton enerjisini, ışığın toplam şiddetiyle karıştırmadan tek etkileşimi izle.',
    visual: { type: 'compare', nodes: [
      { label: 'Atom çizgileri', detail: 'Bohr modelinde izinli enerji düzeyleri vardır. Düzey geçişinde soğurulan veya yayılan fotonun enerjisi fark kadardır.' },
      { label: 'Fotoelektrik', detail: 'Tek fotonlu modelde metalden elektron koparmak için foton enerjisinin eşik enerjisini karşılaması gerekir.' },
      { label: 'Compton', detail: 'Foton, elektronla etkileşiminde enerji ve momentum aktarabilir. Saçılan fotonun dalga boyu büyüyebilir.' },
      { label: 'Madde dalgası', detail: 'de Broglie yaklaşımında parçacığın dalga boyu momentumuyla ters orantılıdır; momentum arttıkça dalga boyu azalır.' },
      { label: 'Radyoaktivite', detail: 'Tek çekirdeğin ne zaman bozunacağı kesin öngörülemez; çok sayıda çekirdeğin davranışı yarı ömürle modellenir.' },
      { label: 'Özel görelilik', detail: 'Boşluktaki ışık hızı eylemsiz gözlemciler için aynıdır. Zaman ve uzunluk ölçümleri referans sistemine bağlı olabilir.' }
    ] },
    sections: [
      { title: 'Şiddet ile frekans', text: 'Frekans bir fotonun enerjisini belirler. Aynı frekansta ışık şiddetini artırmak birim zamanda gelen foton sayısını artırır. Eşik altında yalnız şiddeti artırmak, ideal tek fotonlu fotoelektrik modelinde elektron koparmaz.' },
      { title: 'Modelin sınırını bil', text: 'Fotoelektrik ve Compton olayları ışığın parçacık özelliğini, girişim dalga özelliğini gösterir. Bohr modeli özellikle hidrojen ve tek elektronlu iyonlar için kullanılır; bütün atomları aynı başarıyla açıklayan genel model değildir.' }
    ],
    memory: 'Frekans → tek fotonun enerjisi. Şiddet → aynı frekansta gelen foton sayısı.',
    question: { stem: 'Bir metalde eşik frekansının altındaki tek renkli ışık elektron koparmıyor. İdeal tek fotonlu modelde yalnız ışık şiddeti artırılırsa ne olur?', options: ['Kesinlikle elektron kopar.', 'Her fotonun enerjisi artar.', 'Işığın frekansı zorunlu olarak artar.', 'Elektron kopması yine gerçekleşmez.'], answer: 3, explanation: 'Bir fotonun enerjisi frekansına bağlıdır. Eşik altındaki fotonların sayısını artırmak tek fotonun enerjisini artırmaz; koparma eşiği karşılanmaz.' },
    cards: [{ front: 'Aynı frekansta ışık şiddetini artırmak neyi artırır?', back: 'Birim zamanda gelen foton sayısını; her fotonun enerjisini değil.' }, { front: 'de Broglie dalga boyu momentum artınca?', back: 'Azalır.' }],
    source: { book: 'AYT-fiz', page: 249 }
  }
]);
