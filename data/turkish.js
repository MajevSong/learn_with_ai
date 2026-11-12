/* Özgün TYT Türkçe mikro dersleri. Kaynak sayfaları yerel MEBİ konu özeti PDF'sine aittir. */
window.LESSONS = (window.LESSONS || []).concat([
  {
    id: 'tur-01', subject: 'turkce', title: 'Bir sözcük, üç anlam kapısı', unit: 'Sözcükte anlam', minutes: 5,
    tags: ['gerçek anlam', 'mecaz', 'terim'],
    summary: 'Bir sözcüğün anlamını tek başına ezberlemek yerine içinde bulunduğu cümlede neyi karşıladığını belirle.',
    visual: { type: 'compare', nodes: [
      { label: 'Gerçek', detail: '“Masanın ayağı gevşedi.” Ayağın nesnenin destek bölümünü karşılaması gerçek anlam alanındadır.' },
      { label: 'Mecaz', detail: '“Bu haber içimi ısıttı.” Isıtmak burada sıcaklığı artırmayı değil, sevinç vermeyi anlatır.' },
      { label: 'Terim', detail: '“Üçgenin iç açılarını topladık.” Açı, matematiğe özgü bir kavramı karşılar.' },
      { label: 'Bağlam', detail: '“Perdeyi kapattı.” ile “Oyunun ilk perdesi bitti.” cümlelerinde perde farklı anlamlara gelir.' }
    ] },
    sections: [
      { title: 'Anlamı cümlenin içinde yakala', text: 'Gerçek anlam, sözcüğün temel anlamını ve ona bağlı yan anlamları kapsar. “Keskin bıçak” gerçek; “keskin bir eleştiri” mecaz kullanımdır. Bir sözcüğün bütün cümlelerde aynı anlam türünü taşıdığını düşünme.' },
      { title: 'Terim bir kullanım görevidir', text: 'Gündelik bir sözcük belirli bir alanda terim olabilir. “Kökler su çekiyor.” cümlesinde bitki bölümü; “Sözcüğün kökünü bul.” cümlesinde dil bilgisi terimi söz konusudur. Soruda altı çizilen sözcüğün kullanıldığı alana bak.' }
    ],
    memory: 'Önce cümle → sonra karşılanan kavram → en son anlam türü.',
    question: { stem: 'Hangi cümlede “ağır” sözcüğü mecaz anlamda kullanılmıştır?', options: ['Ağır çantayı kapının yanına bıraktı.', 'Bu ağır sözler arkadaşını üzdü.', 'Tartı, paketin beklenenden ağır olduğunu gösterdi.', 'İki işçi ağır sandığı birlikte taşıdı.'], answer: 1, explanation: '“Ağır söz” incitici söz demektir; fiziksel ağırlık bildirmez. Diğer cümlelerde nesnelerin ağırlığı anlatılır.' },
    cards: [{ front: 'Mecaz anlam nasıl bulunur?', back: 'Sözcüğün temel anlamından uzaklaşıp cümlede başka bir kavramı karşılayıp karşılamadığına bakılır.' }, { front: 'Bir sözcük her zaman terim midir?', back: 'Hayır. Terim anlam, sözcüğün belirli bilim, sanat veya meslek bağlamındaki kullanımına bağlıdır.' }],
    source: { book: 'TYT-tur', page: 9 }
  },
  {
    id: 'tur-02', subject: 'turkce', title: 'Sözcükler arasında köprü kur', unit: 'Anlam ilişkileri', minutes: 5,
    tags: ['eş anlam', 'karşıt anlam', 'somut', 'genel-özel'],
    summary: 'Sözcükler anlam yakınlığına, karşıtlığa, kapsamlarına ve karşıladıkları kavramın niteliğine göre ilişki kurar.',
    visual: { type: 'layers', nodes: [
      { label: 'Eş / yakın', detail: '“Yanıt–cevap” eş anlamlıdır. “Kırılmak–gücenmek” bağlama göre yakın anlam taşır.' },
      { label: 'Karşıt / olumsuz', detail: '“Gelmek–gitmek” karşıt; “gelmek–gelmemek” olumlu-olumsuz ilişkisidir.' },
      { label: 'Somut / soyut', detail: 'Ses duyuyla algılandığı için somuttur. Özlem ise soyut bir kavramdır.' },
      { label: 'Genel → özel', detail: 'Varlık → canlı → bitki → ağaç → çam: kapsam daralır, belirginlik artar.' },
      { label: 'Sesteş', detail: '“Yüzünü yıkadı.” ve “Yüz sayfa okudu.” cümlelerindeki yüzler farklı anlamlı ayrı sözcüklerdir.' }
    ] },
    sections: [
      { title: 'Sözcük çiftini aynı bağlamda dene', text: 'Yakın anlamlı sözcükler her cümlede birbirinin yerine geçmez. “İnce bir düşünce” ile “ince bir tel” aynı anlam alanına ait değildir. Karşıtlık ararken sözcüğün hangi anlamda kullanıldığını kontrol et.' },
      { title: 'Kapsam ile sayılabilirlik farklıdır', text: 'Genellik, bir sözcüğün kaç varlığı kapsadığıyla ilgilidir. Nitel anlam özellik; nicel anlam ölçü veya miktar bildirir. “Güzel ev” nitel, “üç katlı ev” nicel özellik taşır. “Geniş bakış açısı” ise fiziksel bir ölçü bildirmez.' }
    ],
    memory: 'Olumsuzluk ≠ karşıtlık. Duyuyla algılanabilen ses ve koku da somuttur.',
    question: { stem: 'Hangi seçenek genel anlamdan özel anlama doğru sıralanmıştır?', options: ['Gül → çiçek → bitki', 'Serçe → kuş → canlı', 'Çam → ağaç → orman', 'Varlık → hayvan → kedi'], answer: 3, explanation: 'Varlık en geniş, hayvan daha dar, kedi ise hayvanlar içindeki daha özel bir gruptur. Diğer seçeneklerde kapsam düzenli olarak daralmaz.' },
    cards: [{ front: '“Sevmek–sevmemek” karşıt anlam mıdır?', back: 'Hayır; aynı eylemin olumlu ve olumsuz biçimleridir. “Sevmek–nefret etmek” karşıt anlam ilişkisi kurar.' }, { front: '“Müzik sesi” somut mu?', back: 'Somut. Görülmese de işitme duyusuyla algılanır.' }],
    source: { book: 'TYT-tur', page: 10 }
  },
  {
    id: 'tur-03', subject: 'turkce', title: 'Neden, amaç ve koşulu ayır', unit: 'Cümlede anlam', minutes: 5,
    tags: ['neden-sonuç', 'amaç', 'koşul', 'öznel-nesnel'],
    summary: 'Aynı bağlaç farklı anlam ilişkileri kurabilir. İpucunu yalnız ekte değil, olaylar arasındaki ilişkide ara.',
    visual: { type: 'compare', nodes: [
      { label: 'Neden', detail: '“Yağmur yağdığı için maç ertelendi.” Ertelemenin gerçekleşmiş gerekçesi verilir.' },
      { label: 'Amaç', detail: '“Maçı izlemek için erken geldim.” Erken gelmenin hedefi maçı izlemektir.' },
      { label: 'Koşul', detail: '“Bilet bulursak maça gideriz.” Gitmek, bilet bulma şartına bağlanır.' },
      { label: 'Öznel', detail: '“Stadın en güzel yeri bu tribün.” Kişisel beğeni içerir.' },
      { label: 'Nesnel', detail: '“Stadın dört tribünü var.” Kişisel değerlendirme içermez; doğrulanabilir.' }
    ] },
    sections: [
      { title: '“İçin” tek başına karar verdirmez', text: '“Yorulduğu için oturdu.” neden; “Dinlenmek için oturdu.” amaç bildirir. İlkinde oturmaya yol açan durum, ikincisinde oturmayla ulaşılmak istenen hedef anlatılır. Amaç cümlesi hedefe gerçekten ulaşıldığını kanıtlamaz.' },
      { title: 'Yorum ile kanıtı ayır', text: 'Nesnel cümle doğru olmak zorunda değildir; doğru veya yanlış oluşu kanıtlanabilir bir yargı taşır. Öznel yargı ise kişinin değerlendirmesine bağlıdır. Bir cümlenin sayı içermesi, içindeki bütün yargıları kendiliğinden nesnel yapmaz.' }
    ],
    memory: 'Gerekçe: neden oldu? Hedef: ne amaçla? Koşul: hangi şartla?',
    question: { stem: 'Hangi cümlede amaç-sonuç ilişkisi vardır?', options: ['Otobüs geciktiği için toplantıya yetişemedim.', 'Toplantıya yetişmek için erkenden yola çıktım.', 'Erkenden çıkarsan toplantıya yetişirsin.', 'Toplantı, beklediğimden uzun sürdü.'], answer: 1, explanation: 'Erken yola çıkmanın amacı toplantıya yetişmektir. A neden, C koşul bildirir; D ise bir karşılaştırma içerir.' },
    cards: [{ front: 'Nesnel yargı mutlaka doğru mudur?', back: 'Hayır. Doğruluğu ya da yanlışlığı kanıtlanabilir; kişisel beğeniye dayanmaz.' }, { front: 'Amaç bildiren cümle hedefin gerçekleştiğini kanıtlar mı?', back: 'Hayır. Yalnız eylemin hangi hedefle yapıldığını bildirir.' }],
    source: { book: 'TYT-tur', page: 15 }
  },
  {
    id: 'tur-04', subject: 'turkce', title: 'Paragrafın merkezini bul', unit: 'Paragrafta anlam', minutes: 5,
    tags: ['konu', 'ana düşünce', 'yardımcı düşünce', 'başlık'],
    summary: 'Konu “Neyden söz ediliyor?”, ana düşünce “Bu konuda hangi mesaj savunuluyor?” sorusunun karşılığıdır.',
    visual: { type: 'layers', nodes: [
      { label: 'Konu', detail: 'Metnin üzerinde durduğu kavram veya durum: örneğin düzenli okuma alışkanlığı.' },
      { label: 'Ana düşünce', detail: 'Yazarın konuya ilişkin temel yargısı: düzenli okuma, farklı bakış açıları kazandırır.' },
      { label: 'Destekler', detail: 'Örnekler ve yardımcı düşünceler ana yargının açıklanmasına hizmet eder.' },
      { label: 'Sınır', detail: 'Yanıt metnin tamamını kapsamalı; metnin söylemediği kesinlikleri eklememelidir.' }
    ] },
    sections: [
      { title: 'Yargıyı konu etiketinden ayır', text: '“Kitap okuma” bir konu adıdır; “Okumak, düşüncelerimizi başka görüşlerle sınamamızı sağlar.” ise yargıdır. Ana düşünce sorusunda yalnız bir kavramı işaretlemek yeterli olmaz. Yazarın o kavram hakkında ne söylediğini tamamla.' },
      { title: 'Çeldiricinin kapsamını kontrol et', text: 'Bir seçeneğin paragraftaki tek bir örneğe uyması, ana düşünce olduğu anlamına gelmez. “Her zaman, yalnızca, tümüyle” gibi ifadelerin metinde karşılığı olup olmadığını ara. Kendi genel bilgini değil, paragrafın çizdiği sınırı esas al.' }
    ],
    memory: 'Konu = hakkında konuşulan. Ana düşünce = söylenmek istenen temel yargı.',
    question: { stem: '“Bir metni hızla bitirmek her zaman onu anlamak değildir. Bazen bir cümlede durup önceki bilgilerimizle bağ kurmamız gerekir. Okumanın değeri, sayfa sayısından çok düşüncede açtığı alandadır.” Bu parçanın ana düşüncesi hangisidir?', options: ['Nitelikli okuma, hızdan çok düşünme ve anlamlandırmayla ilgilidir.', 'Hızlı okuyan herkes metni yanlış anlar.', 'Uzun kitaplar kısa kitaplardan daha yararlıdır.', 'Bir metin yalnız bir kez okunmalıdır.'], answer: 0, explanation: 'Parçanın bütün cümleleri okumanın niceliğinden çok zihinsel katkısını vurgular. Diğer seçenekler metinde bulunmayan genellemeler ekler.' },
    cards: [{ front: 'Ana düşünceyi ararken sorulacak soru?', back: 'Yazar bu konuda bana hangi temel yargıyı benimsetmek istiyor?' }, { front: 'Başlık nasıl olmalı?', back: 'Paragrafın konusunu ve odağını kapsamalı; yalnız bir örneğe veya ayrıntıya dayanmamalı.' }],
    source: { book: 'TYT-tur', page: 22 }
  },
  {
    id: 'tur-05', subject: 'turkce', title: 'Paragrafı bir zincir gibi kur', unit: 'Paragrafın yapısı', minutes: 5,
    tags: ['giriş', 'gelişme', 'sonuç', 'akış'],
    summary: 'Cümle sırası; konu birliği, anlam bağlantısı ve önceki cümleye gönderme yapan sözlerle kurulur.',
    visual: { type: 'flow', nodes: [
      { label: 'Giriş', detail: 'Konuyu başlatır. Açıklanmamış bir önceki cümleye bağımlı olmaması beklenir.' },
      { label: 'Gelişme', detail: 'Örnek, açıklama, karşılaştırma ve gerekçelerle düşünceyi açar.' },
      { label: 'Bağlantı', detail: '“Bu nedenle, oysa, ayrıca, söz konusu yaklaşım” gibi ifadelerin neye bağlandığını izle.' },
      { label: 'Sonuç', detail: 'Önceki düşünceleri tamamlar, çıkarım yapar veya temel mesajı belirginleştirir.' }
    ] },
    sections: [
      { title: 'Zamir ve bağlaçları iz sürücü yap', text: '“Bu durum” sözünün hangi duruma gönderme yaptığını bul. “Oysa” karşıtlık, “bu nedenle” sonuç, “örneğin” somutlaştırma beklentisi yaratır. Cümle sıralamada yalnız aynı sözcüğün tekrarlanmasına değil, düşüncenin ilerleyişine bak.' },
      { title: 'Akışı bozan cümleyi kontrol et', text: 'Önce paragrafın ortak konusunu ve bakış açısını belirle. Şüpheli cümleyi çıkardığında iki komşu cümle anlamlı bağ kuruyorsa güçlü bir ipucu elde edersin. Konuyla ilgili her cümle, paragrafın belirli anlatım çizgisine uygun olmayabilir.' }
    ],
    memory: 'Önce konu birliği, sonra gönderme, en son mantıksal sıra.',
    question: { stem: 'I. Bu küçük adımlar, zamanla kalıcı bir alışkanlığa dönüşebilir. II. Düzenli okumaya başlamak için her gün kısa bir zaman ayırmak yeterlidir. III. Örneğin yatmadan önce on dakika okumak sürdürülebilir bir başlangıçtır. Anlamlı sıralama hangisidir?', options: ['I–II–III', 'II–III–I', 'III–I–II', 'II–I–III'], answer: 1, explanation: 'II konuyu tanıtır; III bu öneriyi örnekler. I’deki “bu küçük adımlar” önceki önerilere gönderme yaparak sonucu bildirir.' },
    cards: [{ front: '“Bu nedenle” ne bekletir?', back: 'Önceki bir yargıdan çıkarılan sonucu; öncesinde gerekçe aranır.' }, { front: 'Akışı bozan cümlede ilk ölçüt?', back: 'Paragrafın ortak konusuna ve düşüncenin ilerleyişine uyup uymaması.' }],
    source: { book: 'TYT-tur', page: 33 }
  },
  {
    id: 'tur-06', subject: 'turkce', title: 'Anlatımın kamerasını seç', unit: 'Anlatım biçimleri ve teknikleri', minutes: 5,
    tags: ['öyküleme', 'betimleme', 'açıklama', 'tartışma'],
    summary: 'Anlatım biçimi metnin temel amacını; düşünceyi geliştirme yolu ise bu amacı destekleyen yöntemi gösterir.',
    visual: { type: 'compare', nodes: [
      { label: 'Öyküleme', detail: 'Olaylar zaman içinde ilerler: “Kapıyı açtı, merdivenleri koşarak indi.”' },
      { label: 'Betimleme', detail: 'Varlıkların özellikleri canlandırılır: “Dar sokak, sarı ışıklı pencerelerle çevriliydi.”' },
      { label: 'Açıklama', detail: 'Amaç bilgi vermek ve bir konuyu anlaşılır kılmaktır.' },
      { label: 'Tartışma', detail: 'Bir görüş sorgulanır; okuyucu başka bir düşünceye yöneltilir.' },
      { label: 'Destek araçları', detail: 'Tanımlama, örneklendirme, karşılaştırma, tanık gösterme ve sayısal veriler düşünceyi geliştirir.' }
    ] },
    sections: [
      { title: 'Hareket mi, görünüş mü?', text: 'Öykülemede olay akışı; betimlemede özellikler öne çıkar. Tek bir paragrafta ikisi birlikte kullanılabilir. “Ağaçların arasından yürüdü.” olayın ilerlemesine, “Ağaçların uzun gövdeleri yosunluydu.” görünüşün canlandırılmasına hizmet eder.' },
      { title: 'Yöntem ile amacı karıştırma', text: 'Bir paragraf açıklayıcı anlatımla kurulup örneklendirmeden yararlanabilir. Tanımlama “Bu nedir?” sorusuna karşılık verir. Tanık göstermede ise düşünce, konuya ilişkin bir kişinin sözü veya görüşüyle desteklenir; yalnız bir kişinin adını anmak yeterli değildir.' }
    ],
    memory: 'Olay = öyküleme; görüntü = betimleme; bilgi = açıklama; görüş mücadelesi = tartışma.',
    question: { stem: '“Arşiv, belgelerin düzenli biçimde saklandığı bütündür. Örneğin eski mektuplar ve belediye kayıtları bir kent arşivinde korunabilir.” Bu parçada hangi düşünceyi geliştirme yolları kullanılmıştır?', options: ['Tanımlama ve örneklendirme', 'Tanık gösterme ve benzetme', 'Sayısal veri ve karşılaştırma', 'Benzetme ve tanık gösterme'], answer: 0, explanation: 'İlk cümle arşivin ne olduğunu tanımlar; ikinci cümle arşivde korunabilecek belgelere örnek verir.' },
    cards: [{ front: 'Öyküleme ile betimleme arasındaki temel fark?', back: 'Öykülemede zaman içinde olay ilerler; betimlemede varlıkların özellikleri canlandırılır.' }, { front: 'Tanık göstermenin koşulu?', back: 'Bir kişinin sözü veya görüşü, düşünceyi desteklemek için kullanılmalıdır.' }],
    source: { book: 'TYT-tur', page: 26 }
  },
  {
    id: 'tur-07', subject: 'turkce', title: 'Seslerin dönüşümünü gör', unit: 'Ses bilgisi', minutes: 5,
    tags: ['ünsüz yumuşaması', 'sertleşme', 'ünlü düşmesi', 'daralma'],
    summary: 'Ses olayı sorusunda sözcüğün kök veya gövdesini, ek aldıktan sonraki biçimiyle karşılaştır.',
    visual: { type: 'flow', nodes: [
      { label: 'Yumuşama', detail: 'kitap + ı → kitabı: sözcük sonundaki p, ünlüyle başlayan ek önünde b olur.' },
      { label: 'Sertleşme', detail: 'ağaç + da → ağaçta: sert ünsüzden sonra ekin d sesi t olur.' },
      { label: 'Ünlü düşmesi', detail: 'burun + u → burnu: ikinci hecedeki dar ünlü düşer.' },
      { label: 'Ünlü daralması', detail: 'başla + yor → başlıyor: a sesi, -yor önünde ı olur.' }
    ] },
    sections: [
      { title: 'Değişen sesin yerini belirle', text: 'Yumuşamada çoğunlukla sözcüğün son ünsüzü; sertleşmede ise ekin başındaki ünsüz değişir. Bütün sözcükler yumuşamaz: “hukuk + u → hukuku”. Önce gerçek yazılı biçimi incele, sonra kuralı uygula.' },
      { title: 'Harf eksilmesi ile biçim değişmesi', text: '“Ağız → ağzı” örneğinde ses sayısı azalır; “bekle → bekliyor” örneğinde ünlü daralır. “Akıl → aklı” sözcüğünü yanlışlıkla daralma diye adlandırma. Ses olayının adını, gözlediğin değişimden çıkar.' }
    ],
    memory: 'kitabı: son ses yumuşar. ağaçta: ek sertleşir. burnu: ünlü düşer. başlıyor: ünlü daralır.',
    question: { stem: 'Hangi sözcükte ünlü düşmesi vardır?', options: ['Ağaçta', 'Kitabı', 'Başlıyor', 'Burnu'], answer: 3, explanation: 'Burun sözcüğü “-u” ekini aldığında ikinci hecedeki u düşer: burun → burnu. Diğer seçenekler sırasıyla sertleşme, yumuşama ve daralma örnekleridir.' },
    cards: [{ front: '“Sokak + da → sokakta” hangi ses olayı?', back: 'Ünsüz sertleşmesi: ekin d sesi, sert ünsüzden sonra t olur.' }, { front: '“Bekle + yor → bekliyor” hangi ses olayı?', back: 'Ünlü daralması: e, -yor önünde i olur.' }],
    source: { book: 'TYT-tur', page: 36 }
  },
  {
    id: 'tur-08', subject: 'turkce', title: 'De, ki ve mi için karar ağacı', unit: 'Yazım kuralları', minutes: 5,
    tags: ['de', 'ki', 'soru eki', 'büyük harf'],
    summary: 'Aynı sesin bağlaç mı ek mi olduğunu görevinden belirle. Yazım kararı, sözcüğün cümlede yaptığı işe bağlıdır.',
    visual: { type: 'compare', nodes: [
      { label: 'Bağlaç de', detail: '“Ben de geliyorum.” Ayrı yazılır; “te/ta” biçimine dönüşmez.' },
      { label: 'Bulunma -de', detail: '“Kitap çantada.” Bitişik yazılır; “sokakta” örneğinde sertleşebilir.' },
      { label: 'Bağlaç ki', detail: '“Biliyorum ki çalışıyorsun.” Ayrı yazılır. “Çünkü, sanki, belki” gibi kalıplaşmış biçimler istisnadır.' },
      { label: 'Ek -ki', detail: '“Evdeki hesap” ve “benimki” örneklerinde bitişiktir.' },
      { label: 'Soru mi', detail: '“Gelecek misin?” Soru eki ayrı; ardından gelen ekler ona bitişik yazılır.' }
    ] },
    sections: [
      { title: 'Silme denemesini anlamla birlikte kullan', text: 'Bağlaç olan de çıkarıldığında cümle çoğunlukla dil bilgisel yapısını korur, “dahi” anlamı eksilir: “Sen de oku.” Bulunma eki ise yer veya durum ilişkisi kurar: “Evde çalışıyor.” Bir denemeyi tek başına ezberlemek yerine görevi doğrula.' },
      { title: 'Büyük harf ve kesme', text: '“Ankara’ya” örneğinde özel ada gelen çekim eki kesmeyle ayrılır. Kurum adlarına gelen ekler kesmeyle ayrılmaz: “Türk Dil Kurumuna”. Tarih bildiren “29 Ekim” büyük; “ekim ayında” genel kullanım olduğu için küçük harfle yazılır.' }
    ],
    memory: 'Bağlaç de ayrı ve daima d ile. Soru mi ayrı; ekleri ona bağlı.',
    question: { stem: 'Hangi cümlede yazım yanlışı vardır?', options: ['Seninde önerini dinleyelim.', 'Anahtar masada kalmış.', 'Ben de seninle gelmek istiyorum.', 'Yarın bize uğrar mısın?'], answer: 0, explanation: '“Senin de” sözünde de, “dahi” anlamlı bağlaçtır ve ayrı yazılmalıdır. Diğer seçeneklerde de ve mi doğru yazılmıştır.' },
    cards: [{ front: '“Gelecek misiniz?” nasıl yazılır?', back: 'Mi soru eki önceki sözcükten ayrı, kendisinden sonraki eklerle bitişik: gelecek misiniz?' }, { front: '“Ben de / bende” farkı?', back: 'Ben de: ben dahi. Bende: benim üzerimde, benim yanımda; bulunma eki.' }],
    source: { book: 'TYT-tur', page: 39 }
  },
  {
    id: 'tur-09', subject: 'turkce', title: 'Noktalama ile anlamı düzenle', unit: 'Noktalama işaretleri', minutes: 5,
    tags: ['virgül', 'noktalı virgül', 'iki nokta', 'kesme'],
    summary: 'Noktalama, yalnız durakları değil cümledeki sıralama, açıklama ve alıntı ilişkilerini gösterir.',
    visual: { type: 'compare', nodes: [
      { label: 'Virgül ,', detail: 'Eş görevli sözleri ayırır: “Çantasına defter, kalem, silgi koydu.”' },
      { label: 'Noktalı virgül ;', detail: 'İçinde virgül bulunan grupları ayırabilir: “Rafa roman, öykü; masaya defter, kalem koydu.”' },
      { label: 'İki nokta :', detail: 'Ardından açıklama veya örnek gelecek tamamlanmış ifadeden sonra kullanılır.' },
      { label: 'Tırnak “ ”', detail: 'Doğrudan aktarılan sözleri ve bazı özel vurguları sınırlar.' },
      { label: 'Kesme ’', detail: 'Kişi ve yer adlarına gelen çekim eklerini ayırır: “Elif’in, İzmir’e”.' }
    ] },
    sections: [
      { title: 'Her durak virgül değildir', text: 'Özne ile yüklem arasına yalnız konuşurken durduğun için virgül koyma. “Ve, veya, yahut” bağlaçlarının hemen önüne ve arkasına sırf bağlaç bulunduğu için virgül konmaz. Virgülün işlevini cümlenin yapısına göre gerekçelendir.' },
      { title: 'Açıklama mı, sıralama mı?', text: '“İhtiyacımız olanlar şunlar: kalem, kâğıt ve cetvel.” cümlesinde iki nokta, duyurulan örnek listesini başlatır. Noktalı virgül ise grupların sınırını görünür kılabilir. İşaretin yalnız şekline değil iki yanındaki yapıların ilişkisine bak.' }
    ],
    memory: 'Virgül sıralar; iki nokta açıklamayı açar; noktalı virgül grupları ayırabilir.',
    question: { stem: '“Yanıma üç şey aldım (…) defter, kalem ve cetvel.” cümlesinde boşluğa hangi işaret gelmelidir?', options: ['Noktalı virgül', 'Kesme', 'Soru işareti', 'İki nokta'], answer: 3, explanation: 'İlk bölümden sonra sözü edilen üç şey açıklanıp örneklendiği için iki nokta kullanılır.' },
    cards: [{ front: 'Açıklama veya örnek listesinden önce hangi işaret?', back: 'Önceki ifade açıklanacak şeyi duyuruyorsa iki nokta kullanılır.' }, { front: '“Ankara’ya”daki kesmenin görevi?', back: 'Özel ada gelen çekim ekini ayırmak.' }],
    source: { book: 'TYT-tur', page: 55 }
  },
  {
    id: 'tur-10', subject: 'turkce', title: 'Kökten sözcüğün yapısını çıkar', unit: 'Kök, gövde ve ekler', minutes: 5,
    tags: ['kök', 'yapım eki', 'çekim eki', 'basit-türemiş'],
    summary: 'Kök, sözcüğün anlamlı en küçük temelidir. Yapım eki yeni sözcük, çekim eki cümlede ilişki kurar.',
    visual: { type: 'layers', nodes: [
      { label: 'Kök', detail: 'göz: “gözlükçüler” sözcüğünün anlamlı ve bölünemeyen tabanı.' },
      { label: 'Yapım eki', detail: 'göz + lük → gözlük: yeni bir kavram karşılayan sözcük oluşur.' },
      { label: 'Gövde', detail: 'gözlük + çü → gözlükçü: yapım eki almış tabana gövde denir.' },
      { label: 'Çekim eki', detail: 'gözlükçü + ler: çoğul eki ilişki kurar; yeni sözlük anlamı oluşturmaz.' }
    ] },
    sections: [
      { title: 'En küçük parçayı değil, anlamlı kökü ara', text: '“Balık” sözcüğünü “bal + ık” diye ayırmak doğru değildir; bal ile balık arasında bu tür bir türetme ilişkisi yoktur. Kökü belirlerken hem sesleri hem anlam bağını koru. Fiil kökleri “gel-, yaz-”; isim kökleri “taş, su” gibi gösterilebilir.' },
      { title: 'Basit, türemiş ve birleşik', text: 'Yapım eki almamış “evlerimizden” çekim ekleri taşısa da yapı bakımından basittir. “Evli” yapım eki aldığı için türemiştir. “Hanımeli” birden fazla sözcüğün birleşmesiyle oluşur. Ek sayısı tek başına yapı türünü belirlemez.' }
    ],
    memory: 'Yeni kavram → yapım. Cümlede görev/ilişki → çekim. Çekim eki sözcüğü türemiş yapmaz.',
    question: { stem: 'Hangi sözcük yapı bakımından türemiştir?', options: ['Gözlük', 'Kitapta', 'Evlerimizden', 'Yolları'], answer: 0, explanation: 'Göz + lük biçiminde yeni bir sözcük oluşturulmuştur. Diğer seçeneklerdeki ekler çekim ekidir; bunlar sözcüğü türemiş yapmaz.' },
    cards: [{ front: 'Gövde nedir?', back: 'En az bir yapım eki almış kök; yeni ekler alabilen türetilmiş taban.' }, { front: '“Evlerden” basit mi türemiş mi?', back: 'Basit. -ler ve -den çekim ekidir; yapım eki yoktur.' }],
    source: { book: 'TYT-tur', page: 67 }
  },
  {
    id: 'tur-11', subject: 'turkce', title: 'İsim ve sıfatı yan yana gör', unit: 'Sözcük türleri: isim ve sıfat', minutes: 5,
    tags: ['isim', 'niteleme', 'belirtme', 'adlaşmış sıfat'],
    summary: 'İsim varlık veya kavramı karşılar; sıfat bir ismi niteler ya da sayı, işaret, belirsizlik ve soru yönünden belirtir.',
    visual: { type: 'layers', nodes: [
      { label: 'İsim', detail: '“Kitap, umut, çocuk” varlık ve kavram adlarıdır.' },
      { label: 'Niteleme', detail: '“Eski kitap”: isme “Nasıl?” sorusu sorulduğunda eski yanıtı gelir.' },
      { label: 'Belirtme', detail: '“Bu kitap, üç kitap, bazı kitaplar, hangi kitap?”: işaret, sayı, belirsizlik, soru.' },
      { label: 'Adlaşma', detail: '“Yaşlı insanlar oturdu.” → “Yaşlılar oturdu.” Nitelik bildiren sözcük ismin yerini alır.' }
    ] },
    sections: [
      { title: 'Sıfatın bağlandığı ismi bul', text: '“Hızlı tren geldi.” cümlesinde hızlı, tren ismini niteler. “Tren hızlı geldi.” cümlesinde ise hızlı, gelme eyleminin nasıl gerçekleştiğini belirtir; zarf olur. Sözcük türü, cümledeki görev değiştiğinde değişebilir.' },
      { title: 'Belirsizlik miktarı kesinleştirmez', text: '“Birkaç öğrenci, bazı günler, her insan” sözlerinde ismi kesin sayı vermeden belirten sözcükler belgisiz sıfattır. “Üç öğrenci” sayı; “üçüncü öğrenci” sıra sayısı bildirir. Tür belirlerken sözcüğün önünde bulunduğu ismi tespit et.' }
    ],
    memory: 'Sıfatın yanında nitelediği veya belirttiği bir isim ara.',
    question: { stem: 'Hangi cümlede “güzel” sözcüğü sıfattır?', options: ['Bu parçayı güzel söyledi.', 'Bahçede güzel çiçekler açmış.', 'Bugün çok güzel konuştu.', 'Notlarını güzel düzenlemiş.'], answer: 1, explanation: '“Güzel çiçekler” sözünde güzel, çiçekler ismini niteler. Diğerlerinde eylemin nasıl yapıldığını belirttiği için zarftır.' },
    cards: [{ front: 'Niteleme sıfatını bulmak için hangi soru?', back: 'İsme sorulan “Nasıl?” sorusu. Örnek: nasıl ev? Eski ev.' }, { front: '“Bu kalem”de bu hangi tür?', back: 'İsmi işaret ederek belirten işaret sıfatı.' }],
    source: { book: 'TYT-tur', page: 76 }
  },
  {
    id: 'tur-12', subject: 'turkce', title: 'Yerine geçenle niteleyeni ayır', unit: 'Sözcük türleri: zamir ve zarf', minutes: 5,
    tags: ['zamir', 'zarf', 'işaret', 'miktar'],
    summary: 'Zamir ismin yerini tutar. Zarf; fiili, fiilimsiyi, sıfatı veya başka bir zarfı çeşitli yönlerden belirtir.',
    visual: { type: 'compare', nodes: [
      { label: 'Zamir', detail: '“Onu gördüm.” Sözcük, adı söylenmeyen bir varlığın yerini tutar.' },
      { label: 'Sıfatla sınır', detail: '“Bu kitap benim.” → bu: sıfat. “Bu benim.” → bu: zamir.' },
      { label: 'Durum / zaman', detail: '“Sessizce yürüdü.” nasıl? “Dün geldi.” ne zaman? Eylemi belirtirler.' },
      { label: 'Miktar', detail: '“Çok hızlı koştu.” Çok, hızlı zarfını derecelendirir. “Çok güzel ev”de güzeli derecelendirir.' },
      { label: 'Yer-yön', detail: '“İçeri girdi.” İçeri, ek almamış yer-yön zarfıdır. “İçeriye girdi.” cümlesinde ise yönelme eki almış isimdir.' }
    ] },
    sections: [
      { title: 'Aynı sözcüğe sabit etiket yapıştırma', text: '“Bazı öğrenciler geldi.” cümlesinde bazı sıfattır. “Bazıları geldi.” cümlesinde bazıları ismin yerini tutan belgisiz zamirdir. “Hangi kitabı aldın?” ile “Hangisini aldın?” arasında da aynı görev ayrımı vardır.' },
      { title: 'Zarfın neyi etkilediğini göster', text: '“Çok dikkatli dinledi.” cümlesinde dikkatli, dinleme işinin durumunu; çok, dikkatli olmanın derecesini belirtir. “Çok insan geldi.” cümlesinde ise çok, insan ismini belirsiz miktarla belirten sıfattır. Bağlandığı sözcüğe bakmadan tür seçme.' }
    ],
    memory: 'İsmin yerine → zamir. İsmin önünde onu belirtiyor → sıfat. Eylemi/dereceyi belirtiyor → zarf.',
    question: { stem: 'Hangi cümlede “bu” işaret zamiridir?', options: ['Bu soruyu birlikte çözelim.', 'Bu sokakta yeni bir kafe açıldı.', 'Bu sabah erkenden uyandım.', 'Bu, beklediğim haberdi.'], answer: 3, explanation: 'D’de bu, bir ismin önüne gelerek onu belirtmez; adı söylenmeyen şeyin yerini tutar. Diğer seçeneklerde bir ismi belirterek sıfat görevi yapar.' },
    cards: [{ front: '“Dün geldi.” cümlesinde dün?', back: 'Gelme eyleminin zamanını bildiren zaman zarfı.' }, { front: '“Hangisi?” ve “hangi kitap?” ayrımı?', back: 'Hangisi soru zamiri; hangi, kitap ismini belirttiği için soru sıfatıdır.' }],
    source: { book: 'TYT-tur', page: 83 }
  },
  {
    id: 'tur-13', subject: 'turkce', title: 'Bağ kuran küçük sözcükler', unit: 'Edat, bağlaç ve ünlem', minutes: 5,
    tags: ['edat', 'bağlaç', 'ile', 'ünlem'],
    summary: 'Edat başka sözcüklerle anlam ilişkisi kurar; bağlaç eş görevli sözleri veya cümleleri bağlar; ünlem duygu ve seslenme bildirir.',
    visual: { type: 'compare', nodes: [
      { label: 'Edat', detail: '“Senin gibi düşünüyorum.” Gibi, benzerlik ilişkisi kurar.' },
      { label: 'Bağlaç', detail: '“Ece ve Bora geldi.” Ve, eş görevli iki ismi bağlar.' },
      { label: 'İle: bağlaç', detail: '“Ece ile Bora geldi.” İle yerine ve getirilebilir; iki özneyi bağlar.' },
      { label: 'İle: edat', detail: '“Kalem ile yazdı.” Araç bildirir; ve getirildiğinde aynı ilişki korunmaz.' },
      { label: 'Ünlem', detail: '“Eyvah, anahtar içeride kaldı!” Eyvah, kaygı ve telaş bildirir.' }
    ] },
    sections: [
      { title: 'Görevden karar ver', text: '“Gibi, kadar, göre, için” sözcükleri birlikte kullanıldıkları sözlerle benzerlik, ölçü, görelik ve amaç gibi ilişkiler kurabilir. Bağlaçlar ise sözleri veya yargıları birbirine bağlar: “Okudum ama not almadım.” Burada ama karşıtlık ilgisi kurar.' },
      { title: '“İle”yi cümlede sınayarak ayır', text: 'İle, “ve” anlamıyla iki eş görevli ögeyi bağlıyorsa bağlaçtır. Araç veya birliktelik ilişkisi kurduğu “Otobüsle geldim.”, “Arkadaşımla yürüdüm.” örneklerinde edattır. Yalnız ayrı ya da bitişik yazılışına göre türünü belirleme.' }
    ],
    memory: 'İle → ve denemesi: iki eş görevli sözü bağlıyorsa bağlaç; araç/birliktelik kuruyorsa edat.',
    question: { stem: 'Hangi cümlede “ile” bağlaç göreviyle kullanılmıştır?', options: ['Kapıyı anahtar ile açtı.', 'Notlarını kurşun kalem ile yazdı.', 'Şehre tren ile gittik.', 'Ece ile Duru sunumu hazırladı.'], answer: 3, explanation: 'Ece ile Duru sözünde ile, iki özneyi ve anlamıyla bağlar. Diğer cümlelerde anahtar, kalem ve tren araç bildirir.' },
    cards: [{ front: 'Bağlaç neyi bağlar?', back: 'Eş görevli sözcük veya söz gruplarını ya da cümleleri.' }, { front: '“Senin gibi” sözünde gibi?', back: 'Benzerlik ilişkisi kuran edat.' }],
    source: { book: 'TYT-tur', page: 95 }
  },
  {
    id: 'tur-14', subject: 'turkce', title: 'Fiilin zaman ve kip paneli', unit: 'Fiilde kip ve ek-fiil', minutes: 5,
    tags: ['haber kipi', 'dilek kipi', 'ek-fiil', 'birleşik zaman'],
    summary: 'Kip ekleri fiili zaman veya tasarlama anlamıyla çekimler. Ek-fiil isimleri yüklem yapar ve fiillere birleşik zaman kazandırabilir.',
    visual: { type: 'layers', nodes: [
      { label: 'Haber kipleri', detail: 'Geldi, gelmiş, geliyor, gelecek, gelir: zaman bildiren çekimler.' },
      { label: 'Dilek kipleri', detail: 'Gelmeli, gelse, gelelim, gel: gereklilik, şart, istek ve emir.' },
      { label: 'İsim yüklemi', detail: '“Dün hastaydım.” Hasta ismine ek-fiil getirilerek yüklem kurulmuştur.' },
      { label: 'Birleşik zaman', detail: '“Geliyordu.” → geliyor idi. Çekimli fiile ek-fiil eklenmiştir.' },
      { label: 'Kip kayması', detail: '“Yarın yola çıkıyorum.” Şimdiki zaman biçimi, gelecek zaman anlamıyla kullanılır.' }
    ] },
    sections: [
      { title: 'Ek ile anlamı ayrı kontrol et', text: '“Her yaz köye gidiyoruz.” cümlesindeki şimdiki zaman biçimi alışkanlık anlamı taşıyabilir. Kip sorusu eki, zaman anlamı sorusu bağlamı öne çıkarır. Şart kipi bir tasarlama bildirir; her dilek kipini doğrudan zaman adıyla etiketleme.' },
      { title: 'Ek-fiilin iki temel işi', text: '“Öğrenciydi.” cümlesinde ek-fiil isim soylu sözcüğü yüklem yapar. “Okumuştu.” biçiminde ise çekimli fiile gelerek birleşik zaman kurar. “Okudu” basit zamanlı; “okuyordu” birleşik zamanlıdır. Birleşik zaman ile birleşik yapılı fiil aynı sınıflandırma değildir.' }
    ],
    memory: 'Ek-fiil: isme yüklem görevi, çekimli fiile birleşik zaman.',
    question: { stem: 'Hangi cümlede ek-fiil isim soylu bir sözcüğü yüklem yapmıştır?', options: ['Akşam erkenden uyuyordu.', 'Çocukken bu sokakta oturmuştuk.', 'Sınavdan önce oldukça sakindim.', 'Yarın konuyu yeniden okuyacak.'], answer: 2, explanation: 'Sakin sözcüğü isim soyludur; “sakin idim → sakindim” biçiminde ek-fiille yüklem olmuştur. A ve B’de ek-fiil çekimli fiillere gelerek birleşik zaman kurar.' },
    cards: [{ front: '“Okuyordu” nasıl çözümlenir?', back: 'Oku-yor idi: şimdiki zamanın hikâyesi, birleşik zamanlı çekim.' }, { front: 'Gereklilik kipi hangi ekle kurulur?', back: '-malı/-meli. Örnek: çalışmalıyım.' }],
    source: { book: 'TYT-tur', page: 99 }
  },
  {
    id: 'tur-15', subject: 'turkce', title: 'Fiilimsiyle yan yapı kur', unit: 'Fiilde yapı ve fiilimsiler', minutes: 5,
    tags: ['isim-fiil', 'sıfat-fiil', 'zarf-fiil', 'birleşik fiil'],
    summary: 'Fiilimsiler fiilden türer, cümlede isim, sıfat veya zarf görevi üstlenir. Kendi başlarına kip ve kişiyle çekimlenmiş fiil değildir.',
    visual: { type: 'compare', nodes: [
      { label: 'İsim-fiil', detail: '“Yüzmek dinlendirir.” Yüzmek, eylemin adıdır; -mak/-mek eki alır.' },
      { label: 'Sıfat-fiil', detail: '“Gelen öğrenci kapıyı çaldı.” Gelen, öğrenci ismini niteler.' },
      { label: 'Zarf-fiil', detail: '“Gülerek konuştu.” Gülerek, konuşma eyleminin nasıl yapıldığını belirtir.' },
      { label: 'Yapı ayrımı', detail: 'Gelmek basit; başlamak türemiş; yardım etmek birleşik yapılı fiil örneğidir.' },
      { label: 'Kalıcı isim', detail: '“Dondurma eridi.” Sözcük burada eylem adı değil, bir yiyeceğin kalıcı adıdır.' }
    ] },
    sections: [
      { title: 'Eki gördükten sonra görevi doğrula', text: 'İsim-fiil ekleri -ma/-me, -mak/-mek, -ış/-iş/-uş/-üş biçimlerindedir. Sıfat-fiil isim niteler; zarf-fiil eylemin durumunu veya zamanını belirtebilir. “Yazma!” cümlesindeki -ma olumsuzluk ekidir; yalnız ekin görünüşünden fiilimsi kararı verme.' },
      { title: 'Birleşik yapı ve birleşik zaman', text: '“Yardım etti.” yardımcı fiille kurulan birleşik fiildir. “Okuyabildi.” yeterlik anlamlı kurallı birleşik fiildir. “Okuyordu.” ise birleşik zamanlı çekimdir; bu, yapı bakımından birleşik fiil olduğunu göstermez. İki ayrı soruya iki ayrı ölçütle cevap ver.' }
    ],
    memory: 'Eylemin adı → isim-fiil. İsmi niteleyen → sıfat-fiil. Eylemi belirten → zarf-fiil.',
    question: { stem: 'Hangi cümlede zarf-fiil kullanılmıştır?', options: ['Kitap okumak zihnimi dinlendiriyor.', 'Gelen yolcular salona geçti.', 'Gülerek sorumu yanıtladı.', 'Bu dondurma çabuk eriyor.'], answer: 2, explanation: 'Gülerek, yanıt verme eyleminin nasıl gerçekleştiğini belirtir; -erek ekiyle kurulmuş zarf-fiildir. A’da isim-fiil, B’de sıfat-fiil vardır; D’de dondurma kalıcı isimdir.' },
    cards: [{ front: '“Okunacak kitap”ta okunacak hangi tür?', back: 'Kitap ismini niteleyen sıfat-fiil.' }, { front: '“Yazma!” ile “Yazma becerisi” farkı?', back: 'İlkinde -ma olumsuzluk eki; ikincisinde eylem adı kuran isim-fiil ekidir.' }],
    source: { book: 'TYT-tur', page: 103 }
  },
  {
    id: 'tur-16', subject: 'turkce', title: 'Fiilin özne ve nesne ilişkisi', unit: 'Fiilde çatı', minutes: 5,
    tags: ['etken', 'edilgen', 'geçişli', 'geçişsiz'],
    summary: 'Çatı; fiilin özneyle ve nesneyle kurduğu ilişkidir. Özneye göre ve nesneye göre sınıflandırmayı ayrı yap.',
    visual: { type: 'compare', nodes: [
      { label: 'Etken', detail: '“Öğrenci camı açtı.” Özne işi yapar.' },
      { label: 'Edilgen', detail: '“Cam açıldı.” İşi yapan söylenmez; işten etkilenen cam sözde öznedir.' },
      { label: 'Dönüşlü / işteş', detail: '“Çocuk yıkandı.” İş özneye döner. “İki arkadaş selamlaştı.” Eylem karşılıklıdır.' },
      { label: 'Geçişli', detail: '“Romanı okudu.” Okumak nesne alabilir; neyi sorusu karşılık bulur.' },
      { label: 'Geçişsiz', detail: '“Bebek uyudu.” Uyumak doğrudan nesne almaz.' }
    ] },
    sections: [
      { title: 'Önce yüklemin türünü kontrol et', text: 'Çatı fiil yüklemlerde aranır; “Hava güzeldi.” isim cümlesinde çatı aranmaz. -l/-n ekini görmek tek başına edilgenlik için yeterli değildir. “Ali yıkandı.” dönüşlü; “Çamaşırlar yıkandı.” edilgendir. Öznenin işi yapıp yapmadığını ve işten etkilenmesini değerlendir.' },
      { title: 'Nesnenin yokluğu ile alamamayı ayır', text: '“Bütün akşam okudu.” cümlesinde nesne yazılı değildir ama okumak nesne alabilen geçişli bir fiildir. “Çocuk güldü.” fiili ise doğrudan nesne almaz. Geçişlilik için cümlede mutlaka görünür bir nesne bulunmasını şart koşma.' }
    ],
    memory: 'Özneye göre: işi kim yapıyor? Nesneye göre: fiil doğrudan nesne alabiliyor mu?',
    question: { stem: 'Hangi cümlenin yüklemi hem etken hem geçişlidir?', options: ['Bebek erkenden uyudu.', 'Mektup dikkatle okundu.', 'Ece mektubu okudu.', 'Kapı yavaşça açıldı.'], answer: 2, explanation: 'Ece işi yapan gerçek öznedir; mektubu ise nesnedir. A etken-geçişsiz, B ve D edilgen cümlelerdir.' },
    cards: [{ front: '“Masa temizlendi.” cümlesinde masa?', back: 'İşi yapan değil, işten etkilenen sözde özne.' }, { front: 'Cümlede nesne yoksa fiil geçişsiz midir?', back: 'Her zaman değil. “Okudu.” cümlesindeki okumak nesne alabilen geçişli bir fiildir.' }],
    source: { book: 'TYT-tur', page: 108 }
  },
  {
    id: 'tur-17', subject: 'turkce', title: 'Cümleyi yüklemden çöz', unit: 'Cümlenin ögeleri', minutes: 5,
    tags: ['yüklem', 'özne', 'nesne', 'tümleç'],
    summary: 'Ögeleri bulurken önce yüklemi belirle, sonra soruları doğrudan yükleme yönelt. Söz gruplarını parçalama.',
    visual: { type: 'flow', nodes: [
      { label: '1. Yüklem', detail: '“Ece dün kitabı okulda okudu.” Temel yargı: okudu.' },
      { label: '2. Özne', detail: 'Okuyan kim? Ece.' },
      { label: '3. Nesne', detail: 'Neyi okudu? Kitabı. Belirtme eki aldığı için belirtili nesne.' },
      { label: '4. Yer tamlayıcısı', detail: 'Nerede okudu? Okulda. Yönelme, bulunma veya ayrılma ilişkisi kurabilir.' },
      { label: '5. Zarf tümleci', detail: 'Ne zaman okudu? Dün. Zaman, durum, neden ve miktar gibi ilişkiler kurar.' }
    ] },
    sections: [
      { title: 'Soruyu doğru yere sor', text: '“Kim?” ve “ne?” sorularını özne için yükleme yönelt; nesne ararken özneyi bulduktan sonra neyi, kimi veya ne sorularını kullan. “Cam kırıldı.” cümlesindeki cam nesne değil öznedir. Her “ne?” cevabını otomatik nesne sayma.' },
      { title: 'Grupları bölmeden taşı', text: '“Küçük kızın kırmızı çantası kayboldu.” cümlesinde tamlama bütünü öznedir. “Sabaha kadar çalıştı.” cümlesinde sabaha kadar, bütün hâlinde zarf tümlecidir. Bir sözcüğün ekine bakarak söz grubunu parçalara ayırmak yanlış öge sayısına götürür.' }
    ],
    memory: 'Yüklem → özne → nesne → diğer tümleçler. Tamlamalar ve kalıplaşmış gruplar bütün kalır.',
    question: { stem: '“Duru, sabah defterini kütüphanede unuttu.” cümlesinde “defterini” hangi ögedir?', options: ['Özne', 'Belirtili nesne', 'Yer tamlayıcısı', 'Zarf tümleci'], answer: 1, explanation: '“Neyi unuttu?” sorusunun cevabı defterini sözüdür. Unutma işinden etkilenen ve belirtme eki alan bu öge belirtili nesnedir.' },
    cards: [{ front: 'Öge çözümlemesinde ilk adım?', back: 'Cümlenin temel yargısını taşıyan yüklemi bulmak.' }, { front: '“Eski evin bahçesi” özneyse parçalanır mı?', back: 'Hayır. İsim tamlaması bir söz grubu olarak bütünüyle aynı ögedir.' }],
    source: { book: 'TYT-tur', page: 112 }
  },
  {
    id: 'tur-18', subject: 'turkce', title: 'Tamlamanın iki parçasını eşleştir', unit: 'İsim ve sıfat tamlamaları', minutes: 5,
    tags: ['tamlayan', 'tamlanan', 'belirtili', 'belirtisiz'],
    summary: 'İsim tamlaması iki isim arasında ilişki kurar. Sıfat tamlamasında sıfat, ardından gelen ismi niteler veya belirtir.',
    visual: { type: 'compare', nodes: [
      { label: 'Belirtili isim', detail: '“Okulun kapısı”: okul-un tamlayan; kapı-sı tamlanan eki alır.' },
      { label: 'Belirtisiz isim', detail: '“Okul kapısı”: ilk isim tamlayan eki almaz; ikinci isim tamlanan eki alır.' },
      { label: 'Zincirleme', detail: '“Okul kapısının kolu”: bir isim tamlaması başka bir tamlamanın parçası olur.' },
      { label: 'Sıfat tamlaması', detail: '“Mavi kapı”, “iki kapı”, “bu kapı”: ilk sözcük ismi niteler veya belirtir.' }
    ] },
    sections: [
      { title: 'Sıralamaya değil ilişkiye bak', text: '“Bahçenin geniş kapısı” belirtili isim tamlamasıdır; araya sıfat girmiş olması ilişkiyi bozmaz. Bu yapı içinde geniş kapı ayrıca sıfat tamlaması kurar. Bir söz grubunun içinde birden fazla tamlama ilişkisi bulunabilir.' },
      { title: 'Yalnız ek görmek yetmez', text: '“Okul kapısı” tür ve ilişki bildirir; “okulun kapısı” belirli bir okulla ilişki kurar. “Eski okul” ise sıfat tamlamasıdır; eski, okulun niteliğini bildirir. Soruda önce kelimelerin türünü, sonra tamlayan ve tamlanan eklerini kontrol et.' }
    ],
    memory: 'Okul-un kapı-sı: ikisinde ek → belirtili. Okul kapı-sı: yalnız ikincide → belirtisiz.',
    question: { stem: 'Hangi söz grubu belirtisiz isim tamlamasıdır?', options: ['Geniş bahçe', 'Bahçenin kapısı', 'Bahçe kapısı', 'Bu bahçe'], answer: 2, explanation: 'Bahçe kapısı sözünde ilk isim tamlayan eki almamış, kapı sözcüğü tamlanan eki -sı almıştır. B belirtili isim; A ve D sıfat tamlamasıdır.' },
    cards: [{ front: '“Evin penceresi” hangi tamlama?', back: 'Belirtili isim tamlaması: ev-in + pencere-si.' }, { front: '“Üç pencere” hangi tamlama?', back: 'Sıfat tamlaması. Üç, pencere ismini sayı yönünden belirtir.' }],
    source: { book: 'TYT-tur', page: 88 }
  },
  {
    id: 'tur-19', subject: 'turkce', title: 'Cümleyi dört ayrı ölçütle incele', unit: 'Cümle türleri', minutes: 5,
    tags: ['isim-fiil cümlesi', 'kurallı', 'olumlu', 'yapı'],
    summary: 'Bir cümle yüklemin türü, yüklemin yeri, anlamı ve yapısı bakımından ayrı ayrı adlandırılabilir.',
    visual: { type: 'layers', nodes: [
      { label: 'Yüklemin türü', detail: '“Çocuk okudu.” fiil; “Çocuk sakindi.” isim cümlesidir.' },
      { label: 'Yüklemin yeri', detail: '“Bugün erken geldim.” kurallı; “Erken geldim bugün.” devriktir.' },
      { label: 'Anlam', detail: '“Gelmedi.” olumsuz; “Gelecek mi?” soru. Biçim ile anlam her zaman örtüşmeyebilir.' },
      { label: 'Yapı', detail: 'Tek yargılı basit; fiilimsi içeren birleşik; birden çok yüklemli sıralı veya bağlı cümleler ayrı yapılardır.' }
    ] },
    sections: [
      { title: 'Ölçütleri birbirine karıştırma', text: 'Bir cümle aynı anda fiil cümlesi, devrik ve olumsuz olabilir. “Gitmedi dün okula.” örneğinde yüklem gitmedi, tür fiil, yer sondan önce, anlam olumsuzdur. Bir sınıflandırmanın yanıtı diğer sınıflandırmayı kendiliğinden belirlemez.' },
      { title: 'Ek-fiil isim cümlesini fiil yapmaz', text: '“Hava soğuktu.” yüklemi soğuk sözcüğüne ek-fiil gelmesiyle kurulmuştur ve isim cümlesidir. Yapı incelerken yüklemleri ve fiilimsiyle kurulan yan yapıları belirle. “Geldi ve oturdu.” iki yargıyı bağlaçla birleştiren bağlı cümledir.' }
    ],
    memory: 'Tür – yer – anlam – yapı: dört soruyu ayrı cevapla.',
    question: { stem: '“Bugün hava oldukça sakindi.” cümlesi yüklemin türü ve yeri bakımından nasıldır?', options: ['Fiil cümlesi ve devrik', 'İsim cümlesi ve devrik', 'İsim cümlesi ve kurallı', 'Fiil cümlesi ve kurallı'], answer: 2, explanation: 'Yüklem sakindi, sakin sözcüğünün ek-fiille çekimlenmiş biçimidir; isim cümlesidir. Yüklem sonda bulunduğu için kurallıdır.' },
    cards: [{ front: 'Devrik cümle nedir?', back: 'Yüklemi sonda bulunmayan cümle.' }, { front: '“Öğrenciydim.” isim mi fiil cümlesi mi?', back: 'İsim cümlesi. Öğrenci ismine ek-fiil getirilmiştir.' }],
    source: { book: 'TYT-tur', page: 116 }
  },
  {
    id: 'tur-20', subject: 'turkce', title: 'Anlatımdaki kopukluğu onar', unit: 'Anlatım bozuklukları', minutes: 5,
    tags: ['gereksiz sözcük', 'anlam çelişkisi', 'öge eksikliği', 'uyum'],
    summary: 'Anlatım bozukluğunu bulurken önce anlamı, sonra sözcüklerin ve cümle ögelerinin dil bilgisel uyumunu denetle.',
    visual: { type: 'flow', nodes: [
      { label: 'Fazlalık', detail: '“Toplantı yaklaşık iki saat kadar sürdü.” Yaklaşık ve kadar aynı sınırlama görevini yineler.' },
      { label: 'Çelişki', detail: '“Kesinlikle gelmiş olabilir.” Kesinlik ile olasılık çelişir.' },
      { label: 'Yanlış seçim', detail: 'Sözcüğün yalnız yakın anlamına değil cümlede amaçlanan anlamına uygun olup olmadığını denetle.' },
      { label: 'Eksik öge', detail: '“Sana güveniyorum ve seviyorum.” İkinci yükleme uygun nesne gerekir: “seni seviyorum”.' },
      { label: 'Uyum', detail: 'Özne-yüklem, tamlama ve ek uyumunu kontrol et; her çoğul özneye çoğul yüklem dayatma.' }
    ] },
    sections: [
      { title: 'Anlamı kaybetmeden düzelt', text: 'Düzeltme, anlatılmak istenen yargıyı korumalıdır. “Geri iade etti.” sözünde iade zaten geri vermeyi içerir. “Yaklaşık yüz kişi kadar” sözünde yaklaşık ya da kadar çıkarılabilir. Gereksizliği, yalnız uzunlukla değil anlam tekrarıyla kanıtla.' },
      { title: 'Ortak sözcük iki yükleme de uyuyor mu?', text: '“Seni dinliyorum ve güveniyorum.” cümlesinde dinlemek seni nesnesini, güvenmek sana yer tamlayıcısını ister. Doğrusu “Seni dinliyorum ve sana güveniyorum.” olur. Ortak kullanılan ögenin her yüklemin istediği eki ve anlamı karşılayıp karşılamadığını sınayarak ilerle.' }
    ],
    memory: 'Anlam: fazla, çelişkili, yanlış mı? Yapı: eksik öge veya uyumsuz ek var mı?',
    question: { stem: 'Hangi cümlede gereksiz sözcük kullanımından kaynaklanan anlatım bozukluğu vardır?', options: ['Yaklaşık iki saat kadar bekledik.', 'Yarın iki saat çalışacağız.', 'Soruyu dikkatle yeniden okudum.', 'Kütüphanede sessizce oturdu.'], answer: 0, explanation: 'Yaklaşık ve kadar, süreyi aşağı yukarı belirtme görevini birlikte yinelemektedir. Bunlardan biri çıkarılmalıdır. Diğer seçeneklerde aynı anlamı gereksiz yere yineleyen sözcük yoktur.' },
    cards: [{ front: '“Kesinlikle gelmiş olabilir.” neden bozuk?', back: 'Kesinlikle kesinlik, olabilir olasılık bildirir; anlamlar çelişir.' }, { front: '“Sana güveniyorum ve seviyorum.” nasıl düzelir?', back: '“Sana güveniyorum ve seni seviyorum.” İkinci yüklemin istediği nesne eklenir.' }],
    source: { book: 'TYT-tur', page: 119 }
  }
]);
