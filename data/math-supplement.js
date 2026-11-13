/* Dağılımda ayrı başlık olan iki TYT öğretmen eki. Kaynak sayfaları temel kavram dayanağıdır. */
window.LESSONS = (window.LESSONS || []).concat([
  {
    id: 'mat-tyt-24', subject: 'matematik', exam: 'TYT', title: 'İşlem: verilen kuralı bir fonksiyon gibi uygula', unit: 'İşlem', minutes: 35,
    tags: ['işlem', 'tanım kümesi', 'etkisiz eleman', 'ters eleman'],
    summary: 'Yeni bir işlem sembolünü alışılmış dört işlem gibi yorumlamadan, verilen tanıma ve parantez sırasına göre hesapla. Bu ders MEBİ temel işlemler sayfalarına dayanan öğretmen ekidir.',
    visual: { type: 'compare', nodes: [{ label: 'Kural', detail: 'a★b=2a−b ise sıranın önemi vardır.' }, { label: 'Küme', detail: 'İşlemin tanımlı olduğu kümede sonucun kalıp kalmadığını denetle.' }, { label: 'Etkisiz', detail: 'a★e=a ve e★a=a koşulları birlikte gerekir.' }, { label: 'Birleşme', detail: '(a★b)★c ile a★(b★c) ayrı hesaplanır.' }] },
    sections: [{ title: 'Sembolün anlamını tanım belirler', text: 'a★b=2a−b tanımı verildiğinde 3★5=6−5=1 olur. 5★3=10−3=7 olduğundan bu işlem değişmeli değildir. İç içe işlemlerde önce en içteki tanımı uygula; ★ sembolünün alışılmış çarpma özelliklerini taşıdığını varsayma.' }, { title: 'Özellik bütün elemanlarda sağlanmalıdır', text: 'Bir işlemin birleşmeli olduğunu bir sayısal örnekle kanıtlayamazsın. İki parantezlemenin genel cebirsel ifadelerini karşılaştır. Tek bir karşı örnek ise özelliğin her yerde geçerli olduğu iddiasını çürütmeye yeter.' }],
    memory: 'Tanım → işlem sırası → küme koşulu → özellik denetimi.',
    question: { stem: 'Gerçek sayılarda a★b=2a−b tanımlanıyor. (3★1)★2 kaçtır?', options: ['8', '4', '0', '10'], answer: 0, explanation: 'Önce 3★1=2·3−1=5. Sonra 5★2=2·5−2=8 bulunur.' },
    cards: [{ front: 'İki taraflı etkisiz eleman hangi iki koşulu sağlar?', back: 'Bütün a değerleri için a★e=a ve e★a=a. Yalnız birinin sağlanması yeterli değildir.' }, { front: 'İşlemin birleşmeli olmadığını göstermek için ne yeterlidir?', back: '(a★b)★c ile a★(b★c) sonuçları farklı olan tek bir uygun üçlü yeterlidir.' }], source: { book: 'TYT-mat', page: 10 }
  },
  {
    id: 'mat-tyt-25', subject: 'matematik', exam: 'TYT', title: 'Modüler aritmetik: kalan ve döngüleri birlikte izle', unit: 'Modüler Aritmetik', minutes: 40,
    tags: ['modüler aritmetik', 'kalan', 'saat', 'hafta', 'kuvvet döngüsü'],
    summary: 'Kalan eşitliğini saat, gün ve kuvvet döngülerinde kullan. Bu ders MEBİ kalanlı bölme ve periyodik problemler sayfalarını birleştiren öğretmen ekidir.',
    visual: { type: 'compare', nodes: [{ label: 'Kalan', detail: 'a=bq+r; 0≤r<b koşulu korunur.' }, { label: 'Aynı sınıf', detail: 'a≡c (mod b), a−c farkının b ile bölündüğünü söyler.' }, { label: 'Döngü', detail: 'Hafta günleri 7, saat gösterimi 12 veya 24 adımda tekrar eder.' }, { label: 'Üs', detail: 'Kuvvetlerin kalanları listelenerek tekrar uzunluğu bulunur.' }] },
    sections: [{ title: 'Aynı kalan, aynı sayı demek değildir', text: '17≡3 (mod 7) yazımı 17 ile 3 eşit demek değildir. Aralarındaki 14 farkı 7’nin katıdır. Toplam ve çarpımda sayıları kalanlarıyla değiştirebilirsin; sonuç yeniden 0–6 aralığına getirilir.' }, { title: 'Kuvvet döngüsünü gerçekten kur', text: '2’nin 7’ye göre kuvvet kalanları 2,4,1 biçiminde tekrar eder. Böylece 2¹⁰ için 10=3·3+1 kullanılır ve kalan 2 bulunur. Döngü uzunluğunun her soruda bölenle aynı olduğunu varsayma.' }],
    memory: 'Kalan sınıfını bul → döngüyü yaz → indeksin döngüye göre yerini seç → kalanı kontrol et.',
    question: { stem: '3⁷ sayısının 5 ile bölümünden kalan kaçtır?', options: ['1', '2', '3', '4'], answer: 1, explanation: '3’ün kuvvetlerinin 5’e göre kalanları 3,4,2,1 biçiminde dört adımda tekrar eder. 7=4+3 olduğundan üçüncü kalan 2 seçilir.' },
    cards: [{ front: 'a≡b (mod m) ne demektir?', back: 'a−b farkı m’nin tam katıdır; a ile b aynı kalan sınıfındadır. m pozitif tam sayıdır.' }, { front: 'Pazartesiden 100 gün sonrası?', back: '100=14·7+2 olduğundan Çarşamba. Bugün birinci gün diye sayılan 100. gün sorulursa 99 gün ilerlenir.' }], source: { book: 'TYT-mat', page: 18 }
  }
]);
