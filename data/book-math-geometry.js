/* MEBİ matematik kitaplarındaki özgün şekillere eşlik eden açıklamalar. */
window.BOOK_GUIDES = window.BOOK_GUIDES || {};
Object.assign(window.BOOK_GUIDES, {
  "mat-tyt-geo-01": {
    "title": "Açıları işaretlerden oku",
    "book": "TYT-mat",
    "intro": "Açının köşesini, kollarını ve verilen ilişkileri belirleyerek başla; paralellik işareti aynı ölçüyü farklı köşelere taşımayı sağlar.",
    "sections": [
      {
        "title": "Açı kavramı ve çeşitleri",
        "pages": [
          111,
          112
        ],
        "look": "O köşeli ışınları, dik açı kutucuğunu ve 112. sayfadaki ters açıların a-a, b-b eşlemesini izle.",
        "explanation": [
          "Kitap önce iki ışının ortak başlangıcını köşe olarak tanımlar. AOB yazımında O ortada bulunur; kolların üzerindeki A ve B noktaları köşe değildir. Ölçü, çizilen kolların uzunluğundan bağımsızdır. Dar açı 0° ile 90°, geniş açı 90° ile 180° arasındadır; sınır değerler sırasıyla dik ve doğru açıyı verir. Tam açı 360°dir. Şekildeki küçük kare bir diklik bilgisidir; çizimin göze dik görünmesi aynı bilgiyi sağlamaz.",
          "112. sayfadaki ilişkileri ayrı ayrı kullan: tümler iki açının toplamı 90°, bütünler iki açının toplamı 180° olur; yan yana olmaları şart değildir. Ters açılar kesişen doğrularda eşittir. Örneğin kesişen iki doğru bir 38° açı oluşturuyorsa karşısındaki açı 38°, komşu açılar 180−38=142°dir. Bir açıortay ise bulunduğu açıyı eş iki parçaya ayırır; 142°lik açının açıortayı her parçayı 71° yapar. Ters açı ile komşu açıyı karıştırmamak için ortak kolu kontrol et."
        ],
        "check": {
          "question": "38°lik açının bütünleri ve tümleri kaç derecedir?",
          "answer": "Bütünleri 180−38=142°, tümleri 90−38=52°dir. İki hesapta kullanılan toplam farklıdır; komşuluk verilmesi gerekmez."
        }
      },
      {
        "title": "Paralel iki doğrunun bir kesenle yaptığı açılar",
        "pages": [
          113
        ],
        "look": "d1 // d2 bilgisini ve A1–A4 ile B1–B4 açı konumlarını; alttaki kırık çizgi örneklerini karşılaştır.",
        "explanation": [
          "Sayfadaki eşitliklerin dayanağı d1 ve d2 doğrularının paralel olmasıdır. Kesen, her doğruyla birer dört açı grubu oluşturur. Aynı konumdaki yöndeş açılar eşittir; iç bölgede kesenin karşı tarafında kalan iç ters açılar da eşittir. Önce hangi açıların iki paralel arasında kaldığını, sonra kesenin hangi tarafında olduklarını belirlemek, şeklin çevrilmiş olmasından kaynaklanan hataları önler. Paralellik yoksa yalnız kesişme, iki ayrı köşedeki bu açıları eşitlemez.",
          "Örneğin iki paralel doğruyu kesen bir doğru üzerinde bir dar açı 67° ise ona yöndeş açı da 67°dir. Aynı taraftaki iç açının ölçüsü ise 180−67=113° bulunur. Kitaptaki x+y=180° ilişkisi bu bütünlerlikten gelir. Kırık çizgili örnekte gerektiğinde kırılma noktasından verilen doğrulara paralel yardımcı doğru geçir; parçaların yaptığı açıları bu doğruya taşı. Eşitliği yalnız harflerin yakınlığına göre kurma. Büyük açının parçaları mı toplandığını, yoksa doğru açıdan mı çıkarıldığını kollar üzerinde izle."
        ],
        "check": {
          "question": "Paralel doğruların aynı taraftaki iç açılarından biri 72° ise diğeri kaç derecedir?",
          "answer": "Aynı taraftaki iç açılar bütünlerdir: 180−72=108°. 72° cevabı ancak yöndeş veya iç ters eşlemesi için uygun olur."
        }
      }
    ]
  },
  "mat-tyt-geo-02": {
    "title": "Üçgende açı ve kenar koşulları",
    "book": "TYT-mat",
    "intro": "İç açı toplamı, ikizkenar işaretleri ve üçgen eşitsizliği birlikte, çizilebilen üçgenlerle yalnız kâğıtta kalan uzunlukları ayırır.",
    "sections": [
      {
        "title": "Üçgende açılar; ikizkenar ve eşkenar üçgende açı özellikleri",
        "pages": [
          114,
          115
        ],
        "look": "114. sayfada dış açının hangi iki uzak iç açıyla eşleştiğine, 115. sayfada eş kenar ve eş açı işaretlerine bak.",
        "explanation": [
          "Üçgenin üç köşesi doğrusal değildir; iç açıların toplamı 180°dir. Bir kenarı uzatınca oluşan dış açı, yanındaki iç açının bütünleridir. Bu yüzden dış açı komşu olmayan iki iç açının toplamına eşittir. Her köşeden aynı yönde seçilen birer dış açının toplamı da 360°dir. 114. sayfadaki yükseklik–açıortay örneğinde hem diklik hem açı eşitliği verilmiştir; yalnız iki doğru parçasının aynı köşeden çıkması bu bağıntıyı kurmaya yetmez.",
          "115. sayfada AB=AC olan ikizkenar üçgende taban açıları B ve C eşittir. Tepe açısı A=40° ise geriye kalan 140° ikiye bölünür: B=C=70°. Tepe noktasından tabana indirilen yükseklik aynı zamanda kenarortay ve açıortay olur. Bu üç görevin birleşmesi ikizkenarlıkla ilgilidir; genel bir üçgende her yükseklik kenarı ortalamaz. Eşkenar üçgende ise üç kenar ve üç açı eşit olduğundan her iç açı 60°dir. Eşitlik işaretinin hangi iki kenarda olduğunu önce belirle; her verilen açı tepe açısı değildir."
        ],
        "check": {
          "question": "AB=AC ve B açısı 48° olan ABC üçgeninde A kaç derecedir?",
          "answer": "AB ve AC eşit olduğundan karşılarındaki C ve B açıları eşittir: C=48°. A=180−48−48=84°dir."
        }
      },
      {
        "title": "Üçgende açı-kenar bağıntıları; üçgen eşitsizliği",
        "pages": [
          116,
          117
        ],
        "look": "a, b, c kenarlarının karşı köşelerini takip et; 117. sayfadaki sıkı eşitsizliklerde uç değerlerin dışarıda kaldığını gözle.",
        "explanation": [
          "Aynı üçgende en büyük açının karşısındaki kenar en uzundur. A>B>C ise karşılarındaki a>b>c olur. İki ayrı üçgenin açıları eşit olsa bile kenarları farklı ölçeklerde olabilir; bu yüzden açı eşitliğinden farklı üçgenlerde doğrudan uzunluk eşitliği çıkarılmaz. Bir açının dar, dik ya da geniş olduğunu o açının karşısındaki kenarın karesini diğer iki kenarın kareleri toplamıyla karşılaştırarak da anlayabilirsin. Karşılaştırılan kenarın hangi açıya karşılık geldiğini dikkatle seç.",
          "117. sayfanın temel koşulu |a−b|<c<a+b biçimindedir. Örneğin iki kenar 4 ve 7 ise üçüncü kenar 3<c<11 aralığındadır. c tam sayıysa 4,5,6,7,8,9,10 değerleri alınabilir. c=3 veya c=11 durumunda noktalar doğrusal olur; üçgen oluşmaz. Kenarlar 4,5,7 için 7²=49, 4²+5²=41 olduğundan 7 karşısındaki açı geniştir; önce 4+5>7 ile üçgenin varlığını denetledik. Eşitsizlik ve açı türü koşullarını ayrı yazıp ortak aralığı almak soruyu güvenli çözer."
        ],
        "check": {
          "question": "İki kenarı 5 ve 9 olan üçgende üçüncü kenar tam sayı olarak en az kaçtır?",
          "answer": "|9−5|<c<9+5, yani 4<c<14. Alt sınır alınamaz; en küçük tam sayı 5 olur."
        }
      }
    ]
  },
  "mat-tyt-geo-03": {
    "title": "Eşlikten benzerlik oranına",
    "book": "TYT-mat",
    "intro": "Önce karşılıklı köşeleri eşleştir; eşlikte boyutlar aynı, benzerlikte bütün karşılıklı uzunlukların oranı aynıdır.",
    "sections": [
      {
        "title": "Üçgenlerde eşlik",
        "pages": [
          118,
          119
        ],
        "look": "Renkli A↔D, B↔E, C↔F köşe eşleşmesini ve KAK örneğindeki açının iki eş kenarın arasında olduğunu incele.",
        "explanation": [
          "Eş üçgenlerde karşılıklı bütün kenarlar ve açılar eşittir. ABC≅DEF yazımı A ile D, B ile E, C ile F noktalarını eşleştirir; dolayısıyla AB, DE ile; BC, EF ile eşleşir. Kitap eşliği belirlemek için KAK, AKA ve KKK ölçütlerini gösterir. KAKta eşit açı, verilen iki kenarın arasındaki açıdır. Üç verinin rastgele eşit olması her zaman yeterli değildir; özellikle iki kenar ve bunların arasında olmayan bir açıyı otomatik bir eşlik kuralı sayma.",
          "Örneğin AB=DE=5, AC=DF=8 ve BAC=EDF=40° ise üçgenler KAK ile eştir. O hâlde BC=EF; B ve E açıları da eşittir. 119. sayfa karşılıklı yükseklik, kenarortay ve açıortayların da eş olduğunu ekler. Bu sonuçlar ilk köşe eşlemesine bağlıdır; bir üçgendeki herhangi bir yüksekliği ötekinin herhangi bir yüksekliğine eşitlemek doğru olmaz. Yalnız üç açı eşitliği eşlik sağlamaz: kenarları 3-4-5 ve 6-8-10 olan üçgenlerin açıları aynı, boyutları farklıdır. Burada kullanacağımız kavram benzerliktir."
        ],
        "check": {
          "question": "İkişer kenarı eşit iki üçgende eşit açı hangi konumdaysa KAK uygulanır?",
          "answer": "Eşit açı verilen iki kenarın arasında bulunmalıdır. O zaman iki kenar ve aradaki açı üçgeni aynı boyutta belirler."
        }
      },
      {
        "title": "Üçgenlerde benzerlik",
        "pages": [
          120,
          121
        ],
        "look": "ABC ve DEF kenarlarının aynı sırayla oranlandığını; 121. sayfadaki ak, bk, ck ile büyütülen modeli izle.",
        "explanation": [
          "Benzer üçgenlerde karşılıklı açı ölçüleri eşit, karşılıklı kenarlar orantılıdır. İki açı eşitse üçüncü açılar da 180° toplamından eşit olur; AA benzerliği bunun için yeterlidir. KKK benzerliğinde üç karşılıklı kenarın oranı aynıdır. KAK benzerliğinde iki kenarın oranları eşit ve bu kenarların arasındaki açılar eşit olmalıdır. Benzerliğin varlığını göstermeden, çizimde aynı eğimde görünen kenarları oranlamak çözüm gerekçesi değildir. Köşe sırasını yazmak hangi uzunluğun hangisiyle eşleştiğini sabitler.",
          "ABC∼DEF ve AB/DE=2/3 ise aynı yönde AC/DF=BC/EF=2/3 yazılır. AC=10 olduğunda DF=15 bulunur. Aynı oran yükseklikler, açıortaylar, kenarortaylar ve çevreler için de geçerlidir; örneğin küçük üçgenin çevresi 24 ise büyük üçgeninki 36dır. Benzerlikte k yalnız bir sayfa üzerinde büyütme miktarı değil, iki üçgeni karşılaştırma yönünü de taşır. Bir oranı küçük/büyük, diğerini büyük/küçük yazmak ters sonuç verir. k=1 olduğunda benzer üçgenler aynı zamanda eş olur."
        ],
        "check": {
          "question": "ABC∼DEF ve AB/DE=3/5 iken küçük üçgenin karşılıklı yüksekliği 9 ise büyük yükseklik kaçtır?",
          "answer": "Yüksekliklerin oranı da 3/5tir. 9/h=3/5 olduğundan 3h=45 ve h=15 bulunur."
        }
      },
      {
        "title": "Üçgenlerde temel benzerlik ve benzerlik uygulamaları",
        "pages": [
          122,
          123
        ],
        "look": "DE // BC çizgisini, orta nokta işaretlerini ve merdiven örneğindeki 2x ile 5x yükseklik farklarını karşılaştır.",
        "explanation": [
          "122. sayfada D, AB üzerinde; E, AC üzerinde ve DE, BCye paraleldir. Bu paralellik ADE ile ABC üçgenlerinin açılarını eşitler. AD/AB=AE/AC=DE/BC oranının yanında AD/DB=AE/EC de yazılabilir; ikinci eşitlik parça/parça, birincisi parça/bütün oranıdır. Farklı türde iki oranı karıştırma. D ve E iki kenarın orta noktalarıysa DE orta tabandır; BCye paralel ve BCnin yarısı uzunluğundadır. Thales teoremi aynı düşünceyi en az üç paralel doğrunun iki kesen üzerindeki parçalarına uygular.",
          "123. sayfanın tuğla–merdiven örneğinde özdeş tuğlaların sayısı, karşılaştırılan yükseklik farklarını 2x ve 5x yapar. Yatay aralıklar 40 ve 40+a olduğundan 40/(40+a)=2/5 yazılır; 200=80+2a ile a=60 cm bulunur. Burada 3 tuğla ile 6 tuğlanın toplam yüksekliklerini doğrudan oranlamak yerine merdivenin temasları arasındaki farklar kullanılır. Benzer uygulamada dik duran 1,5 m kişinin gölgesi 2 m, aynı anda dik direğin gölgesi 8 m ise paralel ışınlar altında direk boyu 1,5·8/2=6 mdir."
        ],
        "check": {
          "question": "DE // BC, AD=4, DB=6 ve AE=5 ise EC kaçtır?",
          "answer": "Temel orantıyla AD/DB=AE/EC yazılır: 4/6=5/EC. Çapraz çarpımdan 4EC=30 ve EC=7,5 bulunur."
        }
      }
    ]
  },
  "mat-tyt-geo-04": {
    "title": "Açıortay, uzaklık ve katlama",
    "book": "TYT-mat",
    "intro": "Açıortay açıları eşitler; onun üzerindeki noktanın kollara dik uzaklıkları eşittir. İç ve dış açıortayda oran kurulurken noktaların sırası önemlidir.",
    "sections": [
      {
        "title": "Açıortay ve özellikleri; üçgende dış açıortay",
        "pages": [
          124,
          125
        ],
        "look": "124. sayfadaki AB ve BC dikmelerinin kare işaretlerini; 125. sayfada iç ve dış açıortayları gösteren yayları ayırt et.",
        "explanation": [
          "Açıortay, bir açıyı eş ölçülü iki açıya ayırır. Üzerindeki bir noktanın açının iki koluna uzaklığı eşittir; uzaklık, kollara çizilen dikmelerle ölçülür. 124. sayfadaki eşit AB ve BC parçalarının yanında diklik işaretleri de bu yüzden vardır. Genel bir eğik bağlantıyı diğer kola çizilmiş dikmeyle eşitleme. Üçgenin iç açıortayları iç teğet çemberin merkezinde kesişir. Bu nokta üç kenara eşit dik uzaklıktadır; üç köşeye eşit uzaklık başka bir merkezin özelliğidir.",
          "125. sayfada iki iç açıortayın oluşturduğu açı 90°+A/2, B ve C dış açıortaylarının uygun kolları arasındaki küçük açı 90°−A/2 olarak gösterilir. Örneğin A=50° ise iç merkezde BIC=115°dir. Sonucu hatırlamak yerine IBC=B/2, ICB=C/2 yazarak BIC=180−(B+C)/2=90+A/2 elde edebilirsin. Dış açıortaylarda ışınların yönü ve seçilen açı önemlidir; aynı iki doğru kesişince bütünler iki ölçü de oluşur. Kaynaktaki işaretlenen açıyı okumadan bütün kesişim açılarını aynı formülle adlandırma."
        ],
        "check": {
          "question": "ABC üçgeninde A=60°, I iç açıortayların kesişimi ise BIC kaç derecedir?",
          "answer": "IBC=B/2 ve ICB=C/2dir. B+C=120° olduğundan BIC=180−60=120°; aynı sonuç 90+60/2 ile bulunur."
        }
      },
      {
        "title": "İç ve dış açıortay teoremi; katlama uygulaması",
        "pages": [
          126,
          127
        ],
        "look": "İç açıortayın Dyi BC arasında, dış açıortayın Dyi uzantıda bıraktığını; katlamada Cnin B ile çakışmasını izle.",
        "explanation": [
          "126. sayfadaki iç açıortay teoreminde D, BC üzerindeyken BD/DC=AB/AC olur. Açıortay karşı kenarı her zaman ortalamaz; ortalaması AB=AC durumuna özgüdür. AB=6, AC=9 ve BC=10 ise BD:DC=2:3 olduğundan BD=4, DC=6dır. Dış açıortayda kesişim karşı kenarın uzantısındadır; uzun parçanın kısa parçadan farkı BCyi verir. Bu nedenle içte kullanılan parça toplamı dış bölmeye aynen taşınmaz. Eş yan kenarlı durumda dış açıortay tabana paralel olabileceğinden sonlu bir kesişim noktası varsayma.",
          "127. sayfada C noktası B üzerine katlandığı için katlama doğrusu BCnin orta dikmesidir. Katlama üzerindeki D ve F için DB=DC, FB=FC ve DF⊥BC elde edilir; BDC ikizkenar üçgeninde DF aynı zamanda açıortaydır. Bu açıortay ABC üçgeninin rastgele bir köşesine ait değildir: hangi açıya ait olduğunu seç. Sayfanın altındaki iç merkez modelinde ise üç küçük üçgenin kenarlara ait yükseklikleri aynı rdir. Dolayısıyla alanları a·r/2, b·r/2, c·r/2 ve oranları a:b:c olur; uzunluk oranını alan oranına dönüştüren ortak dik uzaklıktır."
        ],
        "check": {
          "question": "AD iç açıortay, AB=8, AC=12 ve BC=15 ise BD ve DC kaçtır?",
          "answer": "BD/DC=8/12=2/3. BC beş eş oransal parçadır; bir parça 15/5=3. BD=6, DC=9 olur."
        }
      }
    ]
  },
  "mat-tyt-geo-05": {
    "title": "Üçgende dört yardımcı doğru",
    "book": "TYT-mat",
    "intro": "Kenarortay orta noktayı, yükseklik dikliği, açıortay açı eşitliğini, kenar orta dikme ise orta nokta ile dikliği birlikte gerektirir.",
    "sections": [
      {
        "title": "Üçgende kenarortay",
        "pages": [
          128
        ],
        "look": "Gden köşeye uzanan 2x, orta noktaya uzanan x parçalarını ve hipotenüs ortasındaki üç eş uzunluk işaretini incele.",
        "explanation": [
          "Kenarortay bir köşeden karşı kenarın orta noktasına çizilir. Üç kenarortay ağırlık merkezinde kesişir ve bu nokta her zaman üçgenin içindedir. Sayfadaki G için AG:GD=2:1dir; burada D, BCnin orta noktasıdır. Büyük parça köşe tarafındadır. Kenarortayın kenarı iki eş parçaya bölmesi, tepe açısını da ikiye bölmesi anlamına gelmez. Ağırlık merkezinin oranını, BC üzerindeki eşit parçalarla karıştırma: bunlar farklı doğru parçaları üzerindeki iki ayrı orta nokta bilgisidir.",
          "AD=15 ise AG=10, GD=5 olur. GD=4 verilse AD=12, AG=8 bulunur; bütünü her zaman üç oransal parçadır. Kitabın orta tabanlı ek çiziminde 3:1:2 parçaları da aynı 2:1 kuralı ve orta tabanın yarı yükseklikte olmasıyla oluşur; harfleri ezberlemek yerine noktaların sırasını izle. Alttaki dik üçgende hipotenüsün orta noktası üç köşeye eşit uzaklıktadır. Hipotenüs 10 ise ona ait kenarortay 5tir. Bu yarıya eşitlik yalnız hipotenüse ait kenarortay içindir; her üçgendeki her kenarortay için geçerli değildir."
        ],
        "check": {
          "question": "D, BCnin orta noktası; G ağırlık merkezi ve AG=12 ise GD kaçtır?",
          "answer": "AG:GD=2:1 olduğundan GD=12/2=6dır. Tüm AD uzunluğu 12+6=18 olur."
        }
      },
      {
        "title": "Üçgende yükseklik; ikizkenar ve eşkenar üçgende yükseklik",
        "pages": [
          129,
          130
        ],
        "look": "129. sayfadaki dar, dik ve geniş üçgenlerde K noktasının konumunu; 130. sayfadaki eş kenar ve orta nokta işaretlerini karşılaştır.",
        "explanation": [
          "Yükseklik bir köşeden karşı kenara ya da karşı kenarın uzantısına çizilen dik doğru parçasıdır. Bu nedenle geniş açılı üçgende dikme ayağı kenarın dışında kalabilir; yükseklik eksik veya geçersiz olmaz. Üç yüksekliğin doğruları diklik merkezinde kesişir. Dar açılı üçgende merkez içeride, dik üçgende dik açının köşesinde, geniş açılı üçgende dışarıdadır. Dik üçgende dik kenarların kendisi iki yüksekliktir. Üçgenin dışında kesişme görülmesi diklik merkezi tanımını değiştirmez.",
          "130. sayfada AB=AC ikizkenarlığı tepe yüksekliği AHye ek görevler kazandırır: BH=HC ve BAH=HAC. AB=AC=13, BC=10 ise BH=HC=5 olur; ABH dik üçgeninde AH²=13²−5²=144, yani AH=12dir. Eşkenar üçgende aynı işlem her köşede geçerlidir. Bir kenarı a olan eşkenar üçgenin yüksekliği a√3/2dir; a=8 için 4√3 bulunur. Bu sonuçta a/2 ve a, bir 30°–60°–90° üçgeninin dik kenar–hipotenüs çiftidir. Genel çeşitkenar üçgende yüksekliğin tabanı ortaladığı varsayımı bu hesabı bozar."
        ],
        "check": {
          "question": "Eş yan kenarları 10, tabanı 12 olan ikizkenar üçgenin tepe yüksekliği kaçtır?",
          "answer": "Tepe yüksekliği tabanı 6 ve 6ya böler. Pisagor: h²+6²=10², h²=64 ve h=8."
        }
      },
      {
        "title": "Üçgende kenar orta dikme",
        "pages": [
          131
        ],
        "look": "Kenarların orta noktalarındaki eşlik çizgilerini ve dik açıları; en altta eşkenar üçgende tek G noktasında birleşen merkezleri gözle.",
        "explanation": [
          "Bir kenarın orta dikmesi o kenarın orta noktasından geçen dik doğrudur. Kenarortaydan farklı olarak mutlaka karşı köşeden geçmez. Üzerindeki her nokta kenarın iki ucuna eşit uzaklıktadır; bunun nedeni oluşan iki dik üçgenin eşliğidir. Üç kenar orta dikmenin kesişimi bu yüzden üç köşeye eşit uzaklıktadır ve çevrel çemberin merkezidir. İç merkez kenarlara eşit dik uzaklık, çevrel merkez köşelere eşit uzaklık verir. İsimleri benzer olsa da aranan uzaklıklar farklıdır.",
          "Sayfadaki üç konumda çevrel merkez dar açılı üçgende içeride, dik üçgende hipotenüsün orta noktasında, geniş açılı üçgende dışarıdadır. Hipotenüsü 14 olan dik üçgende çevrel yarıçap 7dir. Buna karşılık diklik merkezi dik köşededir; iki merkezi aynı nokta sanma. Eşkenar üçgende simetri nedeniyle kenarortay, açıortay, yükseklik ve kenar orta dikme doğruları çakışır. Bu özel durumda ağırlık, iç, çevrel ve diklik merkezleri tek noktadır. İkizkenar üçgende yalnız simetri ekseni üzerindeki ilgili yardımcı doğrular çakışır; tüm yardımcı doğrular aynı doğru olmaz."
        ],
        "check": {
          "question": "Bir üçgenin üç köşesine eşit uzaklıkta olan nokta hangi yardımcı doğruların kesişimidir?",
          "answer": "Kenar orta dikmelerin kesişimidir. Her orta dikme, ait olduğu kenarın uçlarına eşit uzaklığı sağlar; ortak nokta üç köşeye eşit uzaklıktadır."
        }
      }
    ]
  },
  "mat-tyt-geo-06": {
    "title": "Dik üçgenden birim çembere",
    "book": "TYT-mat",
    "intro": "Dik açı işaretini belirle, hipotenüsü seç ve uygun uzunluk oranını kur; birim çember bu oranların koordinat anlamını gösterir.",
    "sections": [
      {
        "title": "Dik üçgende Pisagor teoremi",
        "pages": [
          132
        ],
        "look": "B köşesindeki diklik işaretini; 3k–4k–5k ve 30°–60°–90° modellerindeki karşı kenarları izle.",
        "explanation": [
          "Pisagor teoremi dik üçgende geçerlidir. Dik kenarlar a ve b, hipotenüs c ise a²+b²=c²dir. Hipotenüs, çizimde en eğik görünen kenar değil dik açının karşısındaki kenardır. Kitabın 3–4–5, 5–12–13, 7–24–25 ve 8–15–17 modellerinde bütün kenarları aynı katsayıyla çarpmak dikliği korur. Örneğin dik kenarlar 9 ve 12 ise 3–4–5in üç katından hipotenüs 15tir. 9²+12²=225 hesabı da aynı sonucu verir.",
          "Özel açılı modeller kenarların konumunu da öğretir. 30°nin karşısı a ise 60°nin karşısı a√3, hipotenüs 2adır. 45°–45°–90° üçgeninde dik kenarlar eşit ve hipotenüs a√2dir. Hipotenüsü 10 olan 30°–60°–90° üçgeninde kısa dik kenar 5, uzun dik kenar 5√3tür. 15°–75°–90° modelinde gösterilen iç dikme ile hipotenüs arasındaki ilişkiyi, herhangi bir dik kenara aitmiş gibi okuma. Sayfanın ortasındaki ek şekillerde de kare toplamlarının kurulmasını sağlayan özel diklikler işaretlidir; aynı eşitlikleri diklik verilmemiş dörtgene aktaramazsın."
        ],
        "check": {
          "question": "Dik kenarları 8 ve 15 birim olan dik üçgende hipotenüs kaçtır?",
          "answer": "c²=8²+15²=64+225=289. Uzunluk pozitif olduğundan c=17dir."
        }
      },
      {
        "title": "Öklidin çalışmaları; üçgende Öklid teoremi",
        "pages": [
          133
        ],
        "look": "AB⊥AC ve AH⊥BC koşullarının ikisini; hipotenüsün H ile ayrılan p ve k parçalarını takip et.",
        "explanation": [
          "Kitabın Öklid bağıntılarında ABC üçgeni A köşesinde diktir ve AH hipotenüs BCye diktir. BH=p, HC=k, BC=a=p+k olsun. Benzer dik üçgenler h²=p·k, AB²=p·a ve AC²=k·a sonuçlarını verir. Her kenarın karesi kendi hipotenüs izdüşümü ile tüm hipotenüsün çarpımıdır. p ile kyi rastgele yer değiştirme; ABnin izdüşümü BHdir. Bir üçgende yalnız bir yükseklik çizilmiş olması Öklid bağıntısını kullanmaya yetmez; başlangıç üçgeninin dikliği de gereklidir.",
          "Örneğin BH=4 ve HC=9 ise BC=13 olur. AH²=4·9=36dan AH=6; AB²=4·13=52den AB=2√13, AC²=9·13=117den AC=3√13 bulunur. Kontrol için AB²+AC²=52+117=169=13² yazılır. Sayfanın altındaki alan eşitliği de (AB·AC)/2=(BC·AH)/2 verir; yükseklik h=AB·AC/BCdir. Bu ikinci yol dik kenarlar bilindiğinde işe yarar. Sonuçların hepsi uzunluk olduğundan karekök alınırken negatif değer seçilmez. Sayfanın tarihsel aksiyom bölümü ise teorem ile başlangıç kabulünü ayırmak için okunabilir."
        ],
        "check": {
          "question": "Dik köşeden hipotenüse indirilen yüksekliğin ayırdığı parçalar 2 ve 8 ise yükseklik kaçtır?",
          "answer": "Öklid bağıntısı h²=2·8=16 verir. Uzunluk pozitif olduğu için h=4tür."
        }
      },
      {
        "title": "Trigonometrik oranlar; 30°, 45°, 60°nin oranları",
        "pages": [
          134,
          135
        ],
        "look": "134. sayfada α açısına göre karşı ve komşu kenarı; 135. sayfanın altındaki değer tablosunu özel üçgenlerle eşleştir.",
        "explanation": [
          "Dik üçgende bir dar açıya göre sinüs karşı dik kenarın hipotenüse, kosinüs komşu dik kenarın hipotenüse oranıdır. Tanjant karşı/komşu, kotanjant komşu/karşı biçimindedir. Aynı üçgende öteki dar açıya geçince karşı ve komşu yer değiştirir. Bu nedenle tümler α ve β için sin α=cos β, tan α=cot β olur. Oranlar benzer üçgenlerde değişmediğinden yalnız şeklin büyüklüğüne bağlı değildir. α açısını bulmadan karşı kenarı seçmek yanlış oran kurmanın başlıca nedenidir.",
          "134. sayfanın örneğinde AB=AC=13, BD=3 ve DC=7dir. Tepe yüksekliği tabanı 5 ve 5e böler; D ile dikme ayağı H arası 2, yükseklik 12 olur. ADC açısı için tan α=12/2=6dır; ADyi hipotenüs yapan doğru dik üçgen ADHdir. 135. sayfanın tablosu özel üçgenlerden doğrulanır: sin30°=1/2, cos30°=√3/2, tan30°=1/√3=√3/3; sin45°=cos45°=√2/2 ve tan45°=1dir. Değerleri karıştırırsan kısa kenarı 1, hipotenüsü 2 olan 30°–60°–90° üçgenini yeniden kur. Payda rasyonelleştirmek değeri değiştirmez."
        ],
        "check": {
          "question": "Bir dar açı için karşı dik kenar 6, komşu dik kenar 8 ise sinüs ve tanjant kaçtır?",
          "answer": "Hipotenüs √(36+64)=10dur. sin=6/10=3/5, tan=6/8=3/4 olur."
        }
      },
      {
        "title": "Birim çember",
        "pages": [
          136
        ],
        "look": "Yarıçapı 1 olan çemberde K(x,y) noktasından eksene indirilen dikmeyi ve x=1, y=1 teğet doğrularını incele.",
        "explanation": [
          "Birim çemberin merkezi orijin, yarıçapı 1dir. Çember üzerindeki K(x,y) noktası için x²+y²=1 yazılır; bu, koordinat eksenlerine indirilen dikmelerin oluşturduğu üçgende Pisagor sonucudur. Pozitif x yönünden ölçülen α açısına karşılık K=(cos α,sin α) olur. Dolayısıyla cos²α+sin²α=1dir. Koordinatlar yönlü değerlerdir; ikinci bölgede x negatif ve y pozitiftir. Bir üçgenin kenar uzunluğunu negatif seçmek yerine koordinat işaretiyle uzunluk mutlak değerini ayır.",
          "Örneğin K ikinci bölgede ve x=−3/5 ise y²=1−9/25=16/25 bulunur. Bölge y>0 gerektirdiği için y=4/5tir; bu durumda cos α=−3/5, sin α=4/5 olur. Yalnız karekök alarak ±4/5 yazmak bölge bilgisini henüz kullanmadığını gösterir. Sayfanın altındaki x=1 doğrusu tanjant, y=1 doğrusu kotanjant için yardımcı eksenlerdir. tan α=sin α/cos α, cos α≠0 olduğunda tanımlıdır; α=90° için tanjant yoktur. Çember denklemi ise bu açıda da geçerlidir. Tanım koşulunu formülü uygulamadan önce kontrol et."
        ],
        "check": {
          "question": "Birim çemberde üçüncü bölgedeki bir noktanın x değeri −√3/2 ise y kaçtır?",
          "answer": "y²=1−3/4=1/4. Üçüncü bölgede y<0 olduğundan y=−1/2 seçilir."
        }
      }
    ]
  },
  "mat-tyt-geo-07": {
    "title": "Üçgenin alanını oranlarla bul",
    "book": "TYT-mat",
    "intro": "Alan hesabında tabanla ona ait dik yüksekliği eşleştir; ortak taban, ortak yükseklik ve benzerlik farklı alan oranları oluşturur.",
    "sections": [
      {
        "title": "Üçgende alan",
        "pages": [
          137
        ],
        "look": "Dar, dik ve geniş açılı üçgenlerin üç ayrı yüksekliğini; geniş açılı modelde kenar uzantısındaki dikme ayağını izle.",
        "explanation": [
          "Bir üçgenin alanı seçilen taban uzunluğu ile o tabana ait yüksekliğin çarpımının yarısıdır. Aynı üçgen için a·ha/2=b·hb/2=c·hc/2 eşitliği vardır. Burada her kenar kendi yüksekliğiyle eşleşir; a ile hb rastgele çarpılmaz. Dar, dik ve geniş açılı üçgenlerde kural aynıdır. Geniş açılı üçgende yükseklik dışarıda çizildiğinde de dik uzaklığı ölçer. Eğik bir kenarın uzunluğu yüksekliğin yerine ancak seçilen tabana dik olduğu açıkça biliniyorsa kullanılabilir.",
          "Tabanı 12, bu tabana ait yüksekliği 5 olan üçgenin alanı 12·5/2=30 birimkaredir. Aynı üçgenin başka bir kenarı 10 ise ona ait yükseklik 10·h/2=30dan 6 olur; yüksekliklerin eşit olması gerekmez. Dik üçgende birbirine dik iki kenarı taban ve yükseklik seçmek işlemi kısaltır: dik kenarları 6 ve 8 olan üçgenin alanı 24tür. Hipotenüsü taban seçersen yüksekliği ayrıca bulmalısın. Alan birimi uzunluk biriminin karesidir; santimetre verilen soruda sonuç cm² olur, cm olmaz."
        ],
        "check": {
          "question": "Alanı 42 cm², tabanı 12 cm olan üçgenin bu tabana ait yüksekliği kaç cm?",
          "answer": "42=12·h/2=6h olduğundan h=7 cm. Alanın içindeki 1/2 çarpanı unutulmamalıdır."
        }
      },
      {
        "title": "Üçgende alan uygulamaları",
        "pages": [
          138
        ],
        "look": "Aynı tabanlı modelleri, Dnin BCyi ayırdığı modeli, k ile büyüyen üçgeni ve G çevresindeki altı S bölgesini karşılaştır.",
        "explanation": [
          "138. sayfa alan oranını hangi ortaklığın sağladığını gösterir. Aynı tabana sahip iki üçgende alanlar yüksekliklerle orantılıdır. Aynı yükseklikte ise alanlar tabanlarla orantılıdır. D, BC üzerinde olduğunda ABD ve ADC üçgenleri A köşesinden aynı doğruya aynı yüksekliği kullanır; alan oranı BD/DCdir. İki kenar ile aralarındaki açı verilirse A=bc·sin α/2 kullanılabilir. α açısının b ve c arasındaki açı olması gerekir; üçgendeki başka bir açıyı yerine koyamazsın.",
          "Örneğin BD=3, DC=5 ve ABC alanı 40 ise ABD:ADC=3:5tir; küçük alan 40·3/8=15, diğeri 25 olur. Benzer üçgenlerde ise hem taban hem yükseklik aynı k oranıyla değişir; alan oranı k²dir. Kenar oranı 2/3 olan benzer üçgenlerin alanları 4/9 oranındadır; alanı 20 olan küçük üçgene karşı büyük alan 45tir. Sayfanın son modelinde üç kenarortay altı eş alanlı bölge oluşturur. ABC alanı 36 ise her S=6dır. Bu eşitlik yalnız tek bir kenarortayın çizilmesinden altı parça oluştuğunu söylemez; üç kenarortayın tamamı kullanılır."
        ],
        "check": {
          "question": "Benzer iki üçgende küçük/büyük kenar oranı 3/4, büyük alan 80 ise küçük alan kaçtır?",
          "answer": "Alan oranı (3/4)²=9/16dır. Küçük alan 80·9/16=45 olur; 80·3/4 kullanmak uzunluk oranını alana yanlış taşır."
        }
      }
    ]
  },
  "mat-tyt-geo-08": {
    "title": "Çokgen ve yamuğun koşullarını kur",
    "book": "TYT-mat",
    "intro": "Çokgen formüllerini kenar sayısından, yamuk hesaplarını paralel tabanlardan kur; özel dörtgenlerde ek sonuçlar ek koşullar ister.",
    "sections": [
      {
        "title": "Çokgenler; dörtgenler ve özellikleri",
        "pages": [
          139,
          140
        ],
        "look": "Bir köşeden çizilen köşegenlerin oluşturduğu üçgenleri, düzgün çokgenlerdeki eş işaretleri ve orta noktaları birleştiren EFGHyi incele.",
        "explanation": [
          "n kenarlı dışbükey çokgen bir köşeden n−2 üçgene ayrılır; iç açı toplamı (n−2)·180° olur. Bir köşeden kendisine ve iki komşusuna köşegen çizilemediği için n−3 köşegen çıkar. Her köşegen iki uçtan sayıldığından toplam sayı n(n−3)/2dir. Düzgün çokgende hem bütün kenarlar hem bütün açılar eşittir; yalnız eş kenar bilgisi yeterli değildir. Dışbükey çokgende birer dış açının toplamı 360° olduğundan düzgün çokgenin bir dış açısı 360°/n, iç açısı 180°−360°/ndir.",
          "Örneğin düzgün sekizgende dış açı 45°, iç açı 135°, köşegen sayısı 8·5/2=20dir. 140. sayfada dörtgenin iç açı toplamı 360° olarak özelleşir; içbükey örnekte bir iç açı 180°den büyüktür. Köşegenleri dik bir dörtgende AB²+CD²=BC²+AD² bağıntısı, kesişimde oluşan dört dik üçgenden gelir. Diklik şartını kaldırınca bu eşitliği kullanma. Kenar orta noktaları E,F,G,Hyi birleştirince her parça uygun köşegenin yarısıdır; böylece EFGH çevresi AC+BD olur. Açıortaylı küçük çizimlerde ise eş açı yaylarını ve açı toplamını kullanarak sonucu kur."
        ],
        "check": {
          "question": "Düzgün bir çokgenin bir dış açısı 24° ise kenar sayısı kaçtır?",
          "answer": "n·24=360 olduğundan n=15tir. Bu hesabın tek bir açıdan yapılabilmesi düzgünlük koşuluna dayanır."
        }
      },
      {
        "title": "Özel dörtgenler; yamuk ve özellikleri",
        "pages": [
          141
        ],
        "look": "Hiyerarşi şemasını ve paralel AB, DC tabanlarını; yan kenarların orta noktaları E ve Fyi takip et.",
        "explanation": [
          "Kitap yamuğu en az bir çift karşı kenarı paralel dörtgen olarak kullanır; bu tanıma göre paralelkenar da yamuktur. Dikdörtgen paralelkenarın, kare hem dikdörtgenin hem eşkenar dörtgenin özelliklerini taşır. Bir özelliği genel sınıftan özel sınıfa taşıyabilirsin; karedeki bütün özellikleri her yamuğa taşıyamazsın. AB // DC olan yamuğun aynı yan kenarı üzerindeki iç açıları bütünlerdir. Paralel iki tabanı ve tabanlara ait yükseklik yönünü belirlemek, çizim döndürülse de bu ilişkileri korur.",
          "Yan kenarların orta noktalarını birleştiren EF orta tabanı, tabanlara paraleldir ve EF=(AB+DC)/2 olur. AB=14, DC=6 ise EF=10 bulunur; 14−6 kullanmak orta tabanı değil başka bir parçayı hesaplar. Sayfanın alttaki modelinde köşegenler orta tabanı K ve Lde keser. Büyük taban a, küçük taban c ise dış parçalar c/2, orta parça (a−c)/2dir. Aynı örnekte 3+4+3=10 kontrolü yapılabilir. Bu parçalama için K ve Lnin köşegenlerle kesişim noktaları, E ve Fnin gerçek orta noktalar olması gerekir; yaklaşık ortada görünmeleri yeterli değildir."
        ],
        "check": {
          "question": "Bir yamuğun tabanları 8 ve 18 ise orta tabanı kaçtır?",
          "answer": "Orta taban taban uzunluklarının aritmetik ortalamasıdır: (8+18)/2=13. Paralel yan kenar seçilmez; verilen paralel tabanlar kullanılır."
        }
      },
      {
        "title": "Yamuğun alanı; ikizkenar ve dik yamuk",
        "pages": [
          142,
          143
        ],
        "look": "142. sayfada tabanlara dik h yüksekliğini ve O çevresindeki S1–S4 alanlarını; 143. sayfada eş yan kenar ve dik köşegen koşullarını ayır.",
        "explanation": [
          "Yamuğun alanı tabanların toplamının yarısı ile aralarındaki dik uzaklığın çarpımıdır: A=(a+c)h/2. Orta taban uzunluğuyla hnin çarpımı da aynı sonucu verir. 142. sayfadaki yan kenarın orta noktası E için EBC üçgeni yamuk alanının yarısıdır. Köşegenler Oda kesiştiğinde karşı tabanlar yanındaki küçük üçgenler benzerdir; yanlarda kalan iki üçgenin alanları eşit olur ve S2·S4=S1·S3 sağlanır. Bu eşitlikleri rastgele dört üçgen alanına değil, gösterilen köşegen düzenine uygula.",
          "143. sayfada gerçek bir ikizkenar yamukta eş yan kenarlar eş taban açıları ve eş köşegenler getirir. Köşegenler ayrıca dikse h=(a+c)/2 ve alan h² olur; diklik olmadan bu sonuçlar çıkmaz. Dik yamukta bir yan kenar tabanlara diktir ve doğrudan yüksekliktir. Bu yamuğun köşegenleri de birbirine dikse h²=a·c kullanılabilir. Örneğin dik yamukta tabanlar 4 ve 9, köşegenler dik ise h=√36=6, alan=(4+9)·6/2=39dur. Yalnız tabanları bilerek h=6 demek mümkün değildir; ek dik köşegen koşulu hesabı belirler."
        ],
        "check": {
          "question": "Tabanları 6 ve 14, yüksekliği 5 olan yamuğun alanı kaçtır?",
          "answer": "Alan=(6+14)·5/2=50 birimkaredir. Yükseklik tabanlar arasındaki dik uzaklık olmalıdır."
        }
      }
    ]
  },
  "mat-tyt-geo-09": {
    "title": "Paralelkenar ve eşkenar dörtgen",
    "book": "TYT-mat",
    "intro": "Paralelkenarda karşı kenarlar eşit ve köşegenler birbirini ortalar; eşkenar dörtgende bunlara dik köşegen ve açıortay özellikleri eklenir.",
    "sections": [
      {
        "title": "Paralelkenarda açı ve uzunluk",
        "pages": [
          144
        ],
        "look": "AB // DC ile AD // BC bilgisini; köşegen kesişimindeki AE=EC ve DE=EB çizgilerini takip et.",
        "explanation": [
          "Paralelkenarın karşılıklı iki kenar çifti paraleldir. Bu yapıdan karşı kenarların uzunlukları ve karşı açıların ölçüleri eşit, komşu açıların toplamı 180° çıkar. Bir iç açı 70° ise komşuları 110°, karşısı 70°dir. Köşegenler birbirini ortalar: AC ile BD, Ede kesişiyorsa AE=EC ve BE=ED olur. Ancak bu iki farklı köşegenin eş uzunlukta olması gerekmez; AEyi BEye eşitlemek ek bir özellik ister. Çizimdeki bütün eşlik çizgilerinin aynı desende olup olmadığını oku.",
          "Örneğin AC=18 ve BD=14 ise AE=9, BE=7dir. Paralelkenarda komşu açıların açıortayları arasındaki açı, 70°/2+110°/2=90° olduğundan diktir. Bu sonuç açıortaylara aittir; komşu kenarların kendisi genel durumda dik değildir. Sayfanın Dikkat çizimindeki iki dik üçgeni eşleştirirken ortak köşegen doğrusu, paralel kenarlar ve diklik işaretlerini birlikte kullan. Eş üçgenlerin karşılıklı yükseklikleri ve izdüşümleri de eş olur. Şekilde aynı harfle gösterilmeyen farklı kesişim noktalarını tek nokta sanmak, kenar yarısı ile köşegen yarısını karıştırır."
        ],
        "check": {
          "question": "Paralelkenarın komşu açılarından biri 124° ise diğeri ve karşı açısı kaçtır?",
          "answer": "Komşusu 180−124=56°; karşısı 124°dir. Karşı açılar eşit, komşu açılar bütünlerdir."
        }
      },
      {
        "title": "Paralelkenarda alan",
        "pages": [
          145,
          146
        ],
        "look": "ha ve hbnin farklı kenarlara dik oluşunu; iç K noktalı alan toplamlarını ve 146. sayfadaki S, 2S, 3S, 4S bölümlerini incele.",
        "explanation": [
          "Paralelkenarın alanı a·ha=b·hbdir. Eğik yan kenar h yerine kullanılamaz; iki komşu kenar ve aralarındaki α açısı verilirse a·b·sin α biçimi kullanılabilir. Bir köşegen paralelkenarı iki eş alanlı üçgene böler. E karşı kenarın üzerindeyse AEB üçgeninin tabanı AB, yüksekliği paralelkenarın yüksekliğidir; alanı toplamın yarısıdır. 145. sayfadaki iç K noktası için karşı kenarlara dayanan iki üçgenin alan toplamı yine paralelkenarın yarısını verir; Knin tam ortada olması gerekmez.",
          "Örneğin tabanı 12 ve yüksekliği 5 olan paralelkenarın alanı 60tır. İçteki K için ADK+ BCK alanları toplamı 30, AKB+DKC toplamı da 30dur; her tek üçgenin 15 olması gerekmez. 146. sayfadaki α=30°, kenarlar 8 ve 10 örneğine aynı kuralı uygularsan alan 8·10·1/2=40 bulunur. Sayfanın orta noktalı şekillerindeki S katsayıları ortak yükseklik ve yarı tabanlarla adım adım kurulabilir. Bütün bölgelere aynı alanı atamak yerine her renkli parçanın hangi üçgenin yarısı olduğunu göster. Katsayıların toplamı, parçaladığın bütünün alanını vermelidir."
        ],
        "check": {
          "question": "Komşu kenarları 6 ve 10, aralarındaki açı 30° olan paralelkenarın alanı kaçtır?",
          "answer": "Alan=6·10·sin30°=60·1/2=30 birimkaredir. Kenar çarpımı ancak aradaki açı 90° olduğunda doğrudan alan olur."
        }
      },
      {
        "title": "Eşkenar dörtgen",
        "pages": [
          147
        ],
        "look": "Dört kenarın a ile gösterilmesini; köşegen kesişimindeki kareyi ve köşelerde iki eş açı yayını izle.",
        "explanation": [
          "Eşkenar dörtgen, bütün kenarları eşit bir paralelkenardır; paralelkenarın bütün özelliklerini taşır. Ek olarak köşegenleri birbirine diktir ve köşe açılarını ikiye böler. Köşegenler yine birbirini ortalar; kesişimden köşelere giden dört parça iki ayrı yarı köşegen uzunluğudur. Köşegenlerin kendileri genel olarak eşit değildir; eşitlik kareye özgü ek bir durumdur. Kitaptaki diklik kutucuğu ve açıortay yayları birbirinden farklı iki sonuç gösterir. Dörtgeni eğik çizmek bu koşulların yerine geçmez.",
          "Köşegenler 12 ve 16 ise alan 12·16/2=96dır. Yarı köşegenler 6 ve 8 olduğundan bir kenar √(6²+8²)=10; çevre 40 olur. Alanı taban·yükseklik olarak da yazarsan 10·h=96dan h=9,6 bulunur. Bu yükseklik yan kenar uzunluğu 10dan farklıdır. Sayfadaki eş yükseklikler, eş taban uzunluklarına ait aynı alanın sonucudur. 60°lik açı varsa köşegenin ayırdığı parçalar 30°–30° olur; köşegenin açıortaylığı tüm paralelkenarlara ait bir özellik değildir. Önce eşkenar dörtgen koşulunu doğrula, sonra bu ek özellikleri kullan."
        ],
        "check": {
          "question": "Köşegenleri 10 ve 24 olan eşkenar dörtgenin kenarı kaçtır?",
          "answer": "Köşegenler birbirini dik ortalar. Yarıları 5 ve 12dir; kenar bu dik üçgenin hipotenüsüdür: √(25+144)=13."
        }
      }
    ]
  },
  "mat-tyt-geo-10": {
    "title": "Dikdörtgen, kare ve deltoidi ayır",
    "book": "TYT-mat",
    "intro": "Dikdörtgende eş köşegen, karede eş ve dik köşegen, deltoidde ise bir köşegenin ötekini dik ortalaması farklı bilgileri anlatır.",
    "sections": [
      {
        "title": "Dikdörtgende açı, uzunluk ve alan",
        "pages": [
          148,
          149
        ],
        "look": "148. sayfadaki BE⊥AC koşulunu; 149. sayfada köşegen kesişimindeki dört S bölgesiyle üst kenardaki E modelini ayırt et.",
        "explanation": [
          "Dikdörtgen, bir açısı dik olan paralelkenardır; böylece bütün açıları 90° olur. Karşı kenarları eşit, köşegenleri eş uzunluktadır ve köşegenler birbirini ortalar. Kesişim O ise OA=OB=OC=ODdir. Alan iki komşu kenarın çarpımı, çevre 2(a+b)dir. Bir köşegen, dik kenarları a ve b olan dik üçgenin hipotenüsü olduğundan uzunluğu √(a²+b²) olur. Köşegenlerin eş olması birbirine dik oldukları anlamına gelmez; diklik ancak kare gibi ek koşulla ortaya çıkar.",
          "148. sayfadaki örnekte AC üzerinde AE=8, EC=2 ve BE⊥ACdir. B dik köşesinden inen yükseklik için BE²=8·2=16; karşı köşeden indirilen DK de 4 olur. Yardımcı eş üçgenler AK=2, KE=6 verdiğinden DE²=4²+6²=52 ve DE=2√13tür. 149. sayfada üst kenardaki E için AEB alanı dikdörtgenin yarısıdır. Köşegenlerin kesişiminde ise dört küçük üçgenin alanları eşittir; 8×6 dikdörtgende her biri 48/4=12 olur. E harfi her modelde farklı görevdedir; bir çizimin koşulunu ötekine taşımadan yeniden oku."
        ],
        "check": {
          "question": "Kenarları 5 ve 12 olan dikdörtgenin köşegeni ve alanı kaçtır?",
          "answer": "Köşegen √(25+144)=13; alan 5·12=60tır. Köşegen uzunluk birimi, alan kare birimle ifade edilir."
        }
      },
      {
        "title": "Kare",
        "pages": [
          150
        ],
        "look": "Köşelerdeki 90° işaretlerini, eş kenarları ve köşegenlerin oluşturduğu 45°lik parçaları incele.",
        "explanation": [
          "Kare dört kenarı eşit bir dikdörtgendir; hem dikdörtgenin hem eşkenar dörtgenin özelliklerini taşır. Bu nedenle köşegenleri eşit uzunlukta, birbirine dik ve birbirini ortalayan doğru parçalarıdır. Her köşegen, geçtiği 90°lik köşe açısını iki 45°lik açıya böler. Sayfadaki bütün bu işaretler birlikte kareye aittir; yalnız köşegenlerin dik olması kareyi kanıtlamaz. Örneğin köşegenleri farklı uzunluktaki bir eşkenar dörtgen de dik köşegenlidir. Hangi özelliklerin hangi sınıftan geldiğini ayırmak özel dörtgen sorularını kısaltır.",
          "Bir kenarı a olan karenin alanı a², çevresi 4a ve köşegeni a√2dir. Köşegen d verilirse a=d/√2 ve alan d²/2 olur. Örneğin köşegeni 8 olan karenin alanı 64/2=32, kenarı 4√2dir. Alanı 50 olan karenin kenarı 5√2, köşegeni 10dur. Kitaptaki yardımcı üçgenlerde eşlik aranırken kare kenarlarının eşliği ve 90°−α tamamlamaları kullanılabilir; E ve Fnin nerede olduğu ayrıca okunmalıdır. Kare dışındaki bir dış noktayı, yalnız çizimde kenarın devamına yakın diye doğrusal kabul etme. Verilen doğrusalık veya şekil üzerindeki bağlanmayı açıkça izle."
        ],
        "check": {
          "question": "Bir karenin köşegeni 6√2 ise alanı kaçtır?",
          "answer": "Köşegen a√2 olduğundan a=6. Alan a²=36dır; eşdeğer olarak d²/2=72/2=36 bulunur."
        }
      },
      {
        "title": "Deltoid",
        "pages": [
          151
        ],
        "look": "DC=BC ve AD=AB eşlik çizgilerini; ACnin BDyi Kda dik ortalamasını ve alttaki yamukla birleşen örneği gözle.",
        "explanation": [
          "AB=AD ve CB=CD olan deltoidde A ile C noktaları B ve Dye eşit uzaklıktadır. Bu nedenle AC doğrusu BDnin orta dikmesidir; BDyi dik keser ve iki eş parçaya böler. AC aynı zamanda A ve C köşelerindeki açıları ikiye böler; B ve D açıları da eşittir. Ancak BDnin ACyi ortalaması genel bir zorunluluk değildir. İki köşegenin birbirini karşılıklı ortalamasını deltoide otomatik taşımak, onu gereksiz yere paralelkenar saymak olur. Sayfadaki K işaretleri yalnız BDnin iki parçasını eşitler.",
          "Köşegenler dik olduğundan dışbükey deltoidin alanı AC·BD/2dir. AC=18, BD=10 ise alan 90 olur; ACnin iki parçaya nasıl bölündüğünü ayrıca bilmek gerekmez. Sayfanın örneğinde ABCD yamuk, E noktası AD üzerinde ve DEBC deltoiddir. DC=DE=6 ve AE=4 olduğundan AD=10dur. Deltoidin açıortayı ile AB // DC paralelliği birlikte ABDyi ikizkenar yapar; AB=AD=10 bulunur. Burada AB=AD sonucu yalnız herhangi bir deltoidin özelliği değildir; E konumu ve yamuktaki paralellik de kullanılır. Birleşik şekillerde her adımın hangi alt şekle ait olduğunu belirt."
        ],
        "check": {
          "question": "AB=AD ve CB=CD olan dışbükey deltoidde AC=14, BD=8 ise alan kaçtır?",
          "answer": "AC ve BD dik köşegenlerdir; alan 14·8/2=56. ACnin BDyi ortalaması geçerlidir; ters orta nokta koşulu gerekli değildir."
        }
      }
    ]
  },
  "mat-tyt-geo-11": {
    "title": "Prizma, küp ve piramitte ölçü",
    "book": "TYT-mat",
    "intro": "Açınım yüzey alanını, taban ile dik yükseklik hacmi belirler; yüz köşegeni, cisim köşegeni ve yan yüz yüksekliği farklı uzunluklardır.",
    "sections": [
      {
        "title": "Dik prizmalar; ayrıt ve yüzey sayıları",
        "pages": [
          152,
          153
        ],
        "look": "Alt ve üst tabanları, yanal ayrıtı ve yükseklik okunu; 153. sayfadaki kare, üçgen, altıgen prizma tablosu ile açınımları karşılaştır.",
        "explanation": [
          "Dik prizmanın iki tabanı eş ve paralel çokgensel bölgelerdir. Karşılıklı köşeleri birleştiren yanal ayrıtlar tabanlara diktir ve yükseklik uzunluğunu verir. Yanal yüzler dikdörtgendir; tabanın düzgün çokgen olması ek olarak düzgün prizma adını getirir. n kenarlı taban için iki tabanda 2n ayrıt ve arada n yanal ayrıt bulunur: toplam 3n. Yüz sayısı n yan yüz ile iki tabandan n+2dir. 153. sayfadaki üçgen prizmada 9 ayrıt, 5 yüz; altıgen prizmada 18 ayrıt, 8 yüz görülür.",
          "Açınımda yan dikdörtgenlerin yükseklikleri aynı h, tabanları çokgenin kenarlarıdır. Bu yüzden yanal alan taban çevresi·h; toplam alan iki taban alanı ile yanal alanın toplamıdır. Örneğin tabanı kenarları 3,4,5 olan dik üçgen ve yüksekliği 10 olan dik prizmada taban alanı 6, çevre 12dir. Yanal alan 120, toplam alan 120+12=132 olur. Aynı taban alanı ve dik yükseklikle hacim 6·10=60tır. Açınımdaki yüzlerin alanını toplarken ortak ayrıtları yüz sanma; ayrıt uzunluğu, yüzey alanı ve hacim farklı boyutlu ölçülerdir."
        ],
        "check": {
          "question": "Beşgen tabanlı prizmanın kaç ayrıtı ve yüzü vardır?",
          "answer": "Her tabanda 5er ayrıt ve 5 yanal ayrıt vardır: 15 ayrıt. İki taban ile 5 yan yüz toplam 7 yüz oluşturur."
        }
      },
      {
        "title": "Küp ve küpün açınımları",
        "pages": [
          154
        ],
        "look": "a√2 yazılı yüz köşegeniyle a√3 yazılı iç cisim köşegenini; alttaki farklı altı kareli açınımları ayırt et.",
        "explanation": [
          "Küp bütün ayrıtları eşit bir dikdörtgenler prizmasıdır. Bir ayrıt a ise altı kare yüzün toplam alanı 6a², hacim a³tür. Bir yüzün iki karşı köşesini birleştiren yüz köşegeni kare içindedir ve a√2 uzunluğundadır. Cisim köşegeni ise bir köşeden aynı yüz üzerinde olmayan karşı köşeye uzanır; tabandaki a√2 ile düşey adan oluşan dik üçgenle uzunluğu a√3 bulunur. Yüzün üzerinde görülen çizgiyle iç hacimden geçen çizginin uç noktalarını okuyarak hangisinin istendiğini seç.",
          "Örneğin a=4 ise alan 96, hacim 64, yüz köşegeni 4√2 ve cisim köşegeni 4√3tür. Cisim köşegeni 6√3 verilirse ayrıt 6, hacim 216dır. Alanın 216 olması gerektiğini sanmak ölçü türlerini karıştırmaktır; bu örnekte alan da 216 çıkabilir ama eşitlik yalnız sayısal rastlantıdır. Açınım sorularında altı karenin bağlantıları hangi yüzlerin komşu veya karşı olduğunu belirler. Düzlemde yan yana olmayan iki kare katlanınca komşu olabilir. Bir yüzü sabit tutup çevresindekileri zihinde 90° döndürerek takip et; açınımın düzlemdeki uzaklığını küp üzerindeki uzaklık sanma."
        ],
        "check": {
          "question": "Ayrıtı 3 olan küpün cisim köşegeni kaçtır?",
          "answer": "Önce yüz köşegeni 3√2. Cisim köşegeninin karesi (3√2)²+3²=18+9=27; uzunluk 3√3tür."
        }
      },
      {
        "title": "Dik piramit; düzgün dört yüzlü ve hacim",
        "pages": [
          155,
          156
        ],
        "look": "155. sayfadaki TG dik yüksekliğiyle yan yüz yüksekliği hyyi; 156. sayfada prizmanın üç eş hacimli piramide ayrılmasını izle.",
        "explanation": [
          "Piramitte bir taban ve ortak tepeye bağlanan üçgensel yan yüzler vardır. Taban düzlemine dik yükseklik, yan ayrıt veya yan yüzün yüksekliğiyle aynı değildir. Düzgün dik piramitte yan yüzler eş ikizkenar üçgenlerdir; yanal alan taban çevresi·yan yüz yüksekliği/2, toplam yüzey alanı buna taban alanı eklenerek bulunur. Örneğin kare taban kenarı 6, dik yükseklik 4 ise yan yüz yüksekliği √(4²+3²)=5tir. Yanal alan 24·5/2=60, toplam alan 60+36=96 olur.",
          "156. sayfanın parçalama modeli piramit hacmindeki 1/3 çarpanını açıklar: aynı taban alanı ve aynı dik yükseklikte prizmanın hacminin üçte biri alınır. Önceki kare piramidin hacmi 36·4/3=48dir. Tüm yüzleri eşkenar üçgen olan düzgün dört yüzlüde ayrıt a, yan yüz yüksekliği a√3/2, cisim yüksekliği a√6/3 ve yüzey alanı a²√3tür. Kaynaktaki a=6 örneğinde taban alanı 9√3, dik yükseklik 2√6; hacim (9√3·2√6)/3=18√2 bulunur. Yanal yüz yüksekliğini hacimde kullanmak farklı bir sonuç verir; iki yükseklik türünü ayrı işaretle."
        ],
        "check": {
          "question": "Taban alanı 24 ve taban düzlemine dik yüksekliği 9 olan piramidin hacmi kaçtır?",
          "answer": "V=24·9/3=72 birimküptür. 1/3 katsayısı piramidi aynı taban ve yükseklikteki prizmadan ayırır."
        }
      }
    ]
  },
  "mat-ayt-geo-01": {
    "title": "Noktadan doğruya analitik geometri",
    "book": "AYT-mat",
    "intro": "Koordinatlar geometriyi denkleme dönüştürür: uzaklık, bölme oranı ve eğimle doğruyu kur; uzaklık hesabında dik yönü ve mutlak değeri koru.",
    "sections": [
      {
        "title": "Analitik düzlem; iki nokta arası uzaklık",
        "pages": [
          99,
          100
        ],
        "look": "A(a,b) noktasının eksen izdüşümlerini ve 100. sayfadaki yatay-düşey farklardan oluşan dik üçgeni izle.",
        "explanation": [
          "Dik koordinat sisteminde ilk koordinat apsis x, ikinci koordinat ordinat ydir. Eksenler üzerindeki noktalarda sırasıyla y=0 veya x=0 olur; eksenler bir bölgeye ait sayılmaz. Noktanın x eksenine uzaklığı |y|, y eksenine uzaklığı |x|tir; hangi koordinatın sıfıra indirildiğini düşün. İkinci bölgede x<0, y>0; dördüncü bölgede x>0, y<0dır. Koordinatın işaretli olması uzaklığın negatif olması demek değildir. Kitaptaki kesik izdüşüm çizgileri hangi eksene ne kadar dik gidildiğini gösterir.",
          "100. sayfada A(x1,y1) ile B(x2,y2) arasında yatay fark x2−x1, düşey fark y2−y1 alınır. Pisagorla AB=√[(x2−x1)²+(y2−y1)²] bulunur. Örneğin A(−2,1), B(4,9) için farklar 6 ve 8; uzaklık 10dur. Apsisler eşitse yalnız ordinat farkının mutlak değeri kalır: (3,−4) ve (3,5) arası 9dur. Noktaları ters sırada çıkarınca farkların işareti değişir, kareleri değişmez. Uzaklık formülü düzlemde iki nokta arasındaki doğru parçasını ölçer; yatay ve düşey yol uzunluklarının toplamını değil."
        ],
        "check": {
          "question": "A(−3,4) noktasının x ve y eksenlerine uzaklıkları kaçtır?",
          "answer": "x eksenine |4|=4, y eksenine |−3|=3tür. Koordinat sırasıyla uzaklık sırasını doğrudan aynı yazma."
        }
      },
      {
        "title": "İçten ve dıştan bölme; orta nokta ve ağırlık merkezi",
        "pages": [
          101,
          102
        ],
        "look": "101. sayfada Cnin iç bölmede A-B arasında, dış bölmede Bnin ötesinde yer aldığını; 102de ortak köşegen orta noktasını incele.",
        "explanation": [
          "Bir doğru parçasını içten bölen C için AC:CB=m:n ise C=(nA+mB)/(m+n) koordinat koordinat hesaplanır. Katsayının karşı uçla eşleştiğini fark et: A tarafındaki parça küçükse C, Aya daha yakındır ve A koordinatının ağırlığı daha büyüktür. Kitabın k=AC/BC gösteriminde C=((x1+kx2)/(1+k),(y1+ky2)/(1+k)) olur. Dıştan bölmede C, doğru üzerinde fakat parça dışındadır; payda toplama yerine fark içerir. k=1 için sonlu dış bölme noktası yoktur; sıfır paydası görmezden gelinemez.",
          "Örneğin A(0,2), B(6,8) ve AC:CB=1:2 ise C=((2·0+6)/3,(2·2+8)/3)=(2,4)tür. Orta noktada oran 1:1, koordinatlar aritmetik ortalamadır: M((x1+x2)/2,(y1+y2)/2). Paralelkenarda köşegen orta noktaları aynı olduğundan A+C=B+D koordinat eşitliği yazılır. A(0,0), B(4,1), C(6,5) ardışık köşeler ise D=A+C−B=(2,4)tür. Üçgenin ağırlık merkezi ise üç köşe koordinatının ortalamasıdır. (0,0),(6,0),(0,9) üçgeninde G=(2,3) bulunur; bu formül yalnız köşelerin koordinatlarını kullanır."
        ],
        "check": {
          "question": "A(1,2), B(7,8) parçasını AC:CB=1:2 oranında içten bölen C nedir?",
          "answer": "C=(2A+B)/3=((2+7)/3,(4+8)/3)=(3,4). C, A ile B arasında ve Aya daha yakındır."
        }
      },
      {
        "title": "Doğrunun eğimi; özel doğru denklemleri",
        "pages": [
          103,
          104,
          105
        ],
        "look": "Eğim üçgeninde düşey/yatay oranını, nokta–eğim doğrusunu ve eksen kesişimleri (a,0),(0,b) olan modeli karşılaştır.",
        "explanation": [
          "Düşey olmayan doğru için m=(y2−y1)/(x2−x1)=tan αdır. Aynı çıkarma sırasını pay ve paydada koru. y=mx+n biçiminde m eğimdir; ax+by+c=0 biçiminde b≠0 ise m=−a/b olur. Düşey doğru x=a için eğim tanımsız, yatay doğru y=b için sıfırdır. A(x1,y1) noktasından geçen eğimi m olan doğru y−y1=m(x−x1)dir. İki nokta verilirse önce eğimi hesapla; apsisler eşitse bölmek yerine doğrudan x=x1 yaz.",
          "Örneğin (1,3) ve (4,9) noktaları için m=6/3=2, denklem y−3=2(x−1), yani y=2x+1 olur. Her iki nokta da denklemi sağlar; bu son kontrol yanlış işareti yakalar. Eksenleri (6,0) ve (0,3) noktalarında kesen doğru x/6+y/3=1, yani x+2y=6 biçimindedir. Kesişim formunda a ve b sıfır olmamalıdır. Orijinden geçen doğru için y=mx daha uygundur; iki eksen kesişimi de orijine denk gelirse iki ayrı nokta elde edilmez. Bir çizimde dik görünen doğruyu, denkleminin eğimini veya eksenlere paralelliğini okumadan tanımlama."
        ],
        "check": {
          "question": "(2,−1) noktasından geçen eğimi 3 olan doğrunun denklemi nedir?",
          "answer": "y+1=3(x−2), buradan y=3x−7. x=2 konunca y=−1 çıktığı için verilen nokta doğrulanır."
        }
      },
      {
        "title": "Doğrunun grafiği, doğruların durumları ve uzaklık",
        "pages": [
          106,
          107,
          108
        ],
        "look": "Paralel, çakışık ve kesişen grafiklerin farkını; 108. sayfada hnin doğruya dik çizilişini incele.",
        "explanation": [
          "Bir doğrunun grafiği iki farklı noktadan çizilir. İki doğruyu karşılaştırırken denklemleri ortak çözüp tek nokta, çözüm yok veya sonsuz çözüm sonuçlarını ayır. Eğimleri eşit doğrular paralel ya da çakışık olabilir; sabit terim de eşse çakışıktırlar. Sonlu eğimleri olan iki dik doğru için m1·m2=−1dir; yatay–düşey çiftinde eğim çarpımı yerine doğrudan diklik kullanılır. Katsayı oranlarında sıfıra bölme riski varsa denklem sistemini veya çapraz çarpımı tercih et.",
          "A(x0,y0) noktasının ax+by+c=0 doğrusuna dik uzaklığı |ax0+by0+c|/√(a²+b²)dir; a ve b aynı anda sıfır olamaz. A(1,2), 3x+4y−6=0 için uzaklık |3+8−6|/5=1dir. Paralel doğruların a,b katsayıları aynı yapıldıktan sonra uzaklık |c1−c2|/√(a²+b²) olur. 3x+4y−6=0 ile 6x+8y+8=0 arasında önce ikinciyi ikiye böl: 3x+4y+4=0. Uzaklık |−6−4|/5=2 bulunur. Sabit terimleri ilk hâlleriyle çıkarmak eşdeğer ölçekleri karıştırır. Mutlak değer geometrik uzaklığın negatif çıkmasını önler."
        ],
        "check": {
          "question": "(0,0) noktasının 5x−12y+26=0 doğrusuna uzaklığı kaçtır?",
          "answer": "|26|/√(25+144)=26/13=2dir. Formül doğruya dik en kısa uzaklığı verir."
        }
      }
    ]
  },
  "mat-ayt-geo-02": {
    "title": "Dönüşümlerde noktayı adım adım taşı",
    "book": "AYT-mat",
    "intro": "Öteleme, dönme ve simetride yönü ve merkezi açıkça seç; bileşkede her dönüşüm önceki adımın görüntüsüne uygulanır.",
    "sections": [
      {
        "title": "Öteleme dönüşümü",
        "pages": [
          109,
          110
        ],
        "look": "109. sayfada sağa-sola yatay okları, 110. sayfada yukarı-aşağı düşey okları ve değişmeden kalan koordinatı izle.",
        "explanation": [
          "Öteleme bütün noktaları aynı doğrultu, yön ve miktarda taşır. Sağa a birim öteleme x koordinatına a ekler; sola a birim öteleme a çıkarır. Yukarı b birim yye b ekler, aşağı b birim b çıkarır. Genel kural (x,y)→(x+a,y+b)dir; a ve b yönü belirten işaretli bileşenler olarak da kullanılabilir. Yalnız yatay ötelemede y, yalnız düşey ötelemede x değişmez. Eksenin negatif tarafında olmak taşımanın yönünü tersine çevirmez.",
          "Örneğin A(−2,5) noktasını 4 birim sağa ve 7 birim aşağı taşırsan A′=(−2+4,5−7)=(2,−2) bulunur. Başlangıç ile görüntü farkı (4,−7)dir. Şeklin her köşesine aynı fark uygulandığı için kenar uzunlukları, açı ölçüleri, alan ve çevre korunur. Bir doğruyu taşırken üzerinde iki nokta seçip ikisini de aynı vektörle taşıyabilirsin. y=2x doğrusunu 3 birim sağa ötelersen yeni denklem y=2(x−3) olur; noktanın xine +3 eklemekle denklemde x yerine x−3 yazmak farklı roller taşır. Görüntü noktasıyla başlangıç noktasını ayırarak bunu denetle."
        ],
        "check": {
          "question": "(3,−4) noktası 5 birim sola, 2 birim yukarı taşınırsa görüntüsü nedir?",
          "answer": "x=3−5=−2, y=−4+2=−2; görüntü (−2,−2)dir."
        }
      },
      {
        "title": "Dönme dönüşümü",
        "pages": [
          111
        ],
        "look": "OP yarıçapının r uzunluğunu koruyup θ açısına α eklenmesini; sayfanın altındaki 90°,180°,270° dönüşümlerini incele.",
        "explanation": [
          "Dönme merkezi orijin, açı α ve pozitif yön saat yönünün tersi olduğunda (x,y) noktası (x cos α−y sin α, x sin α+y cos α)ya gider. Bu formül noktanın orijine uzaklığını korur. Özel açılarda pozitif 90° dönüşüm (−y,x), 180° dönüşüm (−x,−y), 270° dönüşüm (y,−x) verir. Saat yönünde 90° ise pozitif 270° ile aynı sonuçtur. Merkez başka bir nokta olduğunda bu kuralları koordinatlara doğrudan uygulamak merkezi yanlış seçmek olur.",
          "Örneğin P(2,−3), orijin etrafında pozitif 90° dönünce (3,2) olur; her iki noktanın uzaklık karesi 13tür. Merkez C(1,1) ise önce P−C=(1,−4), sonra pozitif 90° ile (4,1), son olarak merkezi ekleyip P′=(5,2) bulursun. Dönme, uzunluk ve açı büyüklüklerini korur; her noktanın yeri sabit kalmaz. 360°nin tam katı olmayan bir düzlem dönmesinde yalnız merkez sabittir. 360° dönüşüm ise bütün noktaları başlangıcına döndürür; sayfadaki sabit merkez ifadesini bu özdeş dönüşüm istisnasıyla birlikte oku."
        ],
        "check": {
          "question": "(−4,2) noktası orijin etrafında saat yönünün tersine 90° döndürülürse nereye gider?",
          "answer": "Pozitif 90° kuralı (x,y)→(−y,x) olduğundan (−2,−4)e gider. Merkez orijindir ve yön açıkça belirtilmiştir."
        }
      },
      {
        "title": "Simetri dönüşümü",
        "pages": [
          112,
          113
        ],
        "look": "112. sayfada Bnin AA′nın orta noktası olmasını; 113. sayfada simetri doğrusu üzerinde K dikme ayağını izle.",
        "explanation": [
          "Noktaya göre simetride merkez B(a,b), A ile A′nın orta noktasıdır; bu yüzden A′=(2a−x,2b−y) olur. Orijine göre simetri (−x,−y)dir. Doğruya göre simetride ise doğru AA′ parçasının orta dikmesidir. x eksenine yansımada (x,−y), y eksenine yansımada (−x,y), y=x doğrusuna yansımada (y,x) elde edilir. Eksen simetrisinde eksen üzerinde kalan koordinat sabittir. İki koordinatı birden değiştirmek eksen yansıması yerine orijine göre simetri yapar.",
          "113. sayfada genel doğruya yansıma için önce Adan doğruya dik çizilir, dikme ayağı K bulunur, ardından A′=2K−A yazılır. A(3,1)in x+y=0a yansımasında dik doğru y=x−2dir; ortak çözüm K(1,−1), görüntü (−1,−3) olur. K gerçekten orta nokta, AA′ da simetri doğrusuna diktir. Yatay veya düşey simetri doğrusunda eğim oranları sıfıra bölme yaratabilir; doğrudan aynı apsis/ordinatla dikme ayağını seç. Bir doğrunun noktaya göre görüntüsünü bulurken üzerindeki iki noktayı yansıtabilir veya denklemde ters dönüşüm yerleştirebilirsin; merkez doğru üzerindeyse görüntü doğrusu kendisiyle çakışır."
        ],
        "check": {
          "question": "A(4,−1) noktasının B(1,2)ye göre simetriği nedir?",
          "answer": "A′=(2·1−4,2·2−(−1))=(−2,5). A ve A′nın orta noktası ((4−2)/2,(−1+5)/2)=(1,2) olduğundan kontrol sağlanır."
        }
      },
      {
        "title": "Temel dönüşümlerin bileşkesi; doğada ve mimaride dönüşümler",
        "pages": [
          114
        ],
        "look": "Ötelemeli dönme ve ötelemeli simetri açıklamalarını; yaprak, tüy ve mimari süsleme görsellerindeki tekrarları karşılaştır.",
        "explanation": [
          "Bileşke dönüşümde birden fazla işlem sırayla uygulanır. Öteleme ile dönme veya öteleme ile doğruya göre simetri birlikte kullanılabilir. Her bir temel dönüşüm uzaklığı koruduğu için bileşke de uzunlukları, çevreyi ve alanı korur. Doğruya göre yansıma yönelimi tersine çevirir; bu, açıların büyüklüğünün değiştiği anlamına gelmez. Mimari süslemede aynı motifin art arda taşınması ötelemeyi, merkez çevresinde yinelenmesi dönmeyi, ayna eşleri ise doğruya göre simetriyi düşündürür. Görsel benzerlikte önce hangi eşleşmenin tek bir kuralla yapılabildiğini araştır.",
          "İşlem sırası genellikle sonucu değiştirir. P(1,2) önce 3 birim sağa taşınırsa (4,2), sonra orijin çevresinde pozitif 90° dönünce (−2,4) olur. Önce döndürürsen (−2,1), sonra 3 sağa taşıyınca (1,1) elde edilir. İki sonuç eşit değildir. Bu yüzden sorudaki “önce” ve “sonra” sözcüklerini koordinat zinciri olarak yaz. Dönüşümleri birden zihinden uygulamak yerine her görüntüyü P′, P″ diye adlandırmak işaret hatasını azaltır. Noktanın orijine uzaklığı ötelemede değişebilir; korunan, aynı şeklin iki noktası arasındaki uzaklıktır. Dönmede ayrıca merkeze uzaklık da korunur."
        ],
        "check": {
          "question": "P(2,1) önce x eksenine yansıtılıp sonra 4 birim yukarı taşınırsa son görüntüsü nedir?",
          "answer": "İlk görüntü (2,−1), ikinci görüntü (2,−1+4)=(2,3). Ters sırada yapılsaydı (2,−5) çıkardı."
        }
      }
    ]
  },
  "mat-ayt-geo-03": {
    "title": "Çemberde kiriş, yay ve açı",
    "book": "AYT-mat",
    "intro": "Önce açının köşesini bul: merkezde, çemberde, içeride veya dışarıda olması yaylarla kurulacak ilişkiyi değiştirir.",
    "sections": [
      {
        "title": "Çember ve daire; çemberin temel elemanları",
        "pages": [
          115,
          116,
          117
        ],
        "look": "115. sayfadaki merkezden geçen AB çapıyla KL kirişini; 116da yay işaretlerini, 117de h ile r karşılaştırmasını izle.",
        "explanation": [
          "Çember sabit O merkezinden r uzaklıktaki noktaların kümesidir; iç bölge de eklenince daire elde edilir. İki çember noktasını birleştiren doğru parçası kiriştir. Merkezden geçen kiriş çaptır ve uzunluğu 2rdir. Bir yay için derece cinsinden ölçü ile uzunluk farklı kavramlardır. 116. sayfanın 360° ifadesi tam yayın açısal ölçüsüdür; çevre uzunluğu dereceyle ölçülmez. Aynı açısal ölçüye sahip iki yayın uzunlukları yarıçaplar farklıysa farklı olabilir. Üç harfli yay gösterimindeki orta nokta hangi yayın seçildiğini belirtir.",
          "117. sayfada merkezden doğruya indirilen dikmenin uzunluğu h ile yarıçap r karşılaştırılır. h<r ise doğru iki noktada keser; h=r ise tek noktada teğettir; h>r ise ortak nokta yoktur. Teğet noktasına çizilen yarıçap doğruya diktir. Örneğin yarıçap 5, merkez–doğru uzaklığı 3 ise iki kesişim vardır; uzaklık 5 olursa teğetlik, 6 olursa kesişmeme oluşur. Teğeti çizimde çembere değiyor gibi görünmesinden değil verilen teğetlik veya h=r koşulundan tanı. Diklik işareti, uzaklık ile rastgele merkeze bağlanan eğik parçayı ayırır."
        ],
        "check": {
          "question": "Yarıçapı 4 olan çemberin merkezine uzaklığı 4 olan doğruyla kaç ortak noktası vardır?",
          "answer": "Merkez–doğru dik uzaklığı yarıçapa eşit olduğundan doğru teğettir; tam bir ortak nokta vardır."
        }
      },
      {
        "title": "Çemberde kiriş özellikleri; merkez açı ve çevre açı",
        "pages": [
          118,
          119
        ],
        "look": "118. sayfada merkezden kirişe inen dikmenin iki eş parçayı ayırmasını; 119da açının köşesinin Oda mı Cde mi olduğunu izle.",
        "explanation": [
          "Merkezden kirişe indirilen dikme kirişi ortalar. Merkez, yarı kiriş ve dik uzaklık bir dik üçgen oluşturur: yarı kiriş uzunluğu √(r²−h²)dir. Aynı çemberde eş kirişler merkeze eşit uzaklıkta; daha uzun kiriş daha yakındır. Örneğin r=13 ve h=5 ise yarı kiriş √(169−25)=12, tüm kiriş 24tür. Uzaklığı 12 olan başka kiriş ise 2√(169−144)=10 olur. Bu karşılaştırmada çemberin yarıçapı sabittir; farklı yarıçaplı çemberlerin kirişlerini yalnız hye bakarak sıralayamazsın.",
          "119. sayfada merkez açı gördüğü yayın ölçüsüne, çevre açı ise köşesini içermeyen gördüğü yayın yarısına eşittir. A ve B uçlarını gören C çevre açısı için Cnin üzerinde bulunduğu yay değil karşı taraftaki AB yayı seçilir. Bu yay 140° ise ACB=70°dir; aynı yayı gören AOB merkez açısı 140°dir. AB çap olduğunda Cnin görmediği yarım çember 180° olduğundan çevre açı 90° olur. Tersine her çizimde AB çap kabul edilmez; Onun AB üzerinde olduğu veya ABnin çap olduğu bilinmelidir. Aynı yayı gören çevre açıların eşitliği farklı köşelerdeki açıları eşleştirir."
        ],
        "check": {
          "question": "Yarıçapı 10 olan çemberde merkeze dik uzaklığı 6 olan kirişin uzunluğu kaçtır?",
          "answer": "Dikme kirişi ortalar. Yarı kiriş √(10²−6²)=√64=8, tüm kiriş 16dır."
        }
      },
      {
        "title": "Çemberde teğet-kiriş açı ve iç-dış açı",
        "pages": [
          120,
          121
        ],
        "look": "Teğet-kiriş açıda T köşesini; iç açıda E çevresindeki karşı yayları ve dış açıda yakın-uzak kesişimleri ayırt et.",
        "explanation": [
          "Teğet-kiriş açının bir kolu teğet, diğeri kiriştir; ölçüsü seçilen açının gördüğü yayın yarısıdır. Aynı yayı gören çevre açıyla eşittir. İçeride kesişen iki kirişin oluşturduğu açı için ise o açının ve ters açısının gördüğü iki yayın ölçüleri toplanıp ikiye bölünür. 120. sayfadaki AEC açısı için AC ve BD yayları kullanılır. Karşılıklı açılar kesişen doğruların ters açılarıdır; bu eşitlik, kaynaktaki parantezdeki adlandırmadan bağımsız olarak doğru kesişim kuralından gelir.",
          "Örneğin içteki açı ile ters açının gördüğü yaylar 80° ve 120° ise açı (80+120)/2=100° olur. Dışarıdaki bir noktadan çıkan iki kesen için dış açı, uzak kesişimler arasındaki büyük yay ile yakın kesişimler arasındaki küçük yayın farkının yarısıdır. Bu yaylar 150° ve 50° ise açı 50°dir. Teğet–kesen ve iki teğet modellerinde de aynı fark mantığı işler. İki teğetin değme noktaları arasındaki küçük yay 110° ise dış açı 180−110=70° olur. Hangi yayın görüldüğünü açı kollarını çembere kadar izleyerek belirle; “içte topla, dışta çıkar” ezberi tek başına doğru yay çiftini seçmez."
        ],
        "check": {
          "question": "Çember içinde kesişen iki kirişin bir açısı ve ters açısının gördüğü yaylar 70° ve 110° ise bu açı kaçtır?",
          "answer": "İç açı, karşı iki yayın toplamının yarısıdır: (70+110)/2=90°. Bu sonuç açık yay verilerinden gelir, şeklin görünüşünden değil."
        }
      }
    ]
  },
  "mat-ayt-geo-04": {
    "title": "Teğetlerden daire dilimine",
    "book": "AYT-mat",
    "intro": "Teğet parçalarının eşitliğini yarıçapın dikliğiyle birlikte kullan; daire diliminde yayın uzunluğu ile kapalı bölgenin çevresini ayır.",
    "sections": [
      {
        "title": "Çemberde teğet; çevrel, iç teğet ve dış teğet çember",
        "pages": [
          122,
          123
        ],
        "look": "122. sayfada kenar orta dikmeleri ve dış noktadan iki teğeti; 123de eş renkli açıortayları ve OD=OE=OF yarıçaplarını incele.",
        "explanation": [
          "Çevrel çember üçgenin köşelerinden geçer; merkezi kenar orta dikmelerin kesişimidir. Sinüs teoremi a/sin A=b/sin B=c/sin C=2R biçimindedir. Örneğin A=30° karşısındaki kenar 6 ise 6/(1/2)=2R, dolayısıyla R=6 bulunur. İç teğet çember ise üç kenara teğettir ve merkezi iç açıortayların kesişimidir. Merkezden teğet noktalarına çizilen yarıçaplar kenarlara diktir. Çevrel yarıçap R ile iç teğet yarıçap r farklı büyüklüklerdir; hangi çemberin verildiğini belirlemeden oran kurma.",
          "Bir dış P noktasından çizilen PT ve PS teğet parçaları eşittir. OP=13 ve r=5 ise OTP dik üçgeninde PT=√(169−25)=12dir; PS de 12 olur. İç teğet çemberli üçgende her köşeden çıkan iki teğet parçası eşittir; kenar uzunlukları bu parçaların toplamlarıdır. Kenarları 13,14,15 olan üçgende yarı çevre 21; karşılık gelen teğet parçaları 21−13=8, 21−14=7, 21−15=6 olarak düzenlenebilir. Dış teğet çember bir kenara ve öteki iki kenarın uzantılarına teğettir; merkezi bir iç ve iki dış açıortayın kesişimidir. Uzantıdaki parçalarda toplam ile farkı noktaların sırasına göre kur."
        ],
        "check": {
          "question": "OP=10, r=6 ve PT çembere Tde teğet ise PT kaçtır?",
          "answer": "OT⊥PT olduğundan OPT dik üçgendir. PT²=OP²−OT²=100−36=64; PT=8dir."
        }
      },
      {
        "title": "Dairenin ve daire diliminin çevresi ve alanı",
        "pages": [
          124,
          125
        ],
        "look": "124. sayfada iki yarıçap ile AB yayının dilimi sınırlamasını; 125te çok sayıda dilimin dikdörtgene yaklaşan dizilimini izle.",
        "explanation": [
          "Yarıçapı r olan çemberin çevre uzunluğu 2πr, dairenin alanı πr²dir. α derece merkez açılı yayın uzunluğu 2πr·α/360, daire diliminin alanı πr²·α/360 olur. İkisinde de tam dairenin aynı açısal payı alınır; fakat biri uzunluk, diğeri alandır. 125. sayfada dilimler yan yana dizildikçe yaklaşık tabanı πr ve yüksekliği r olan dikdörtgen oluşur; bu model πr² alanının nedenini açıklar. Dilim sayısını artırmak kıvrımları azaltır, dairenin alanını değiştirmez.",
          "Örneğin r=6, α=60° ise yayın uzunluğu 12π·1/6=2π, dilim alanı 36π·1/6=6πdir. Daire diliminin çevresi yalnız yay değildir; sınırdaki iki yarıçap da eklenir: 12+2π. Aynı açıda yarıçap iki katına çıkarsa yay ve çevre iki, alan dört katına çıkar. “Daire dilimi” ile bir kirişin kestiği daire parçasını ayır: dilimi iki yarıçap sınırlar, daire parçasını kiriş ile yay sınırlar. Kiriş sınırı olan alanda gerektiğinde merkez üçgeninin alanı dilimden çıkarılır; dilim formülü doğrudan her taralı bölgeyi vermez."
        ],
        "check": {
          "question": "r=8 ve α=90° olan daire diliminin yay uzunluğu, çevresi ve alanı nedir?",
          "answer": "Yay=2π·8·1/4=4π. Çevre=16+4π. Alan=π·64·1/4=16π. Çevrede iki yarıçapın toplamı unutulmaz."
        }
      }
    ]
  },
  "mat-ayt-geo-05": {
    "title": "Çemberi denklemle incele",
    "book": "AYT-mat",
    "intro": "Standart denklemden merkez ve yarıçapı oku; genel denklemde tam kareye tamamla ve doğruyla konumu dik uzaklık üzerinden karşılaştır.",
    "sections": [
      {
        "title": "Çemberin standart denklemi; özel çember denklemleri",
        "pages": [
          126,
          127,
          128
        ],
        "look": "M(a,b) ile P(x,y) arasındaki ryi; 128. sayfada merkezden eksenlere çizilen |a| ve |b| uzaklıklarını incele.",
        "explanation": [
          "Çemberin her P noktası merkez M(a,b)ye r uzaklıktadır. İki nokta arası uzaklığın karesinden (x−a)²+(y−b)²=r² elde edilir. (x+2)²+(y−3)²=25 denkleminde merkez (−2,3), yarıçap 5tir; sağ taraftaki 25 yarıçapın karesidir. Orijin merkezli çember x²+y²=r², merkezi x ekseni üzerinde olan çember (x−a)²+y²=r² biçimindedir. Merkezinin eksen üzerinde olması, çemberin o eksene teğet olduğu anlamına gelmez; merkez ile çember üzerindeki noktayı ayır.",
          "Eksenlere teğetlikte yarıçap merkezden eksene dik uzaklıktır. y eksenine teğetse r=|a|, x eksenine teğetse r=|b| olur. Merkez (−4,3) ve y eksenine teğetlik verilirse denklem (x+4)²+(y−3)²=16dır. Aynı merkezle x eksenine teğet çemberde sağ taraf 9 olur; bunlar farklı çemberlerdir. Her iki eksene teğetlik |a|=|b|=r gerektirir. Merkez ikinci bölgede ve r=2 ise M=(−2,2), denklem (x+2)²+(y−2)²=4tür. Bölge bilgisi merkez işaretlerini seçer. Kaynağın bölge gösterimindeki son örneği dördüncü bölge, yani (r,−r) olarak oku."
        ],
        "check": {
          "question": "Merkezi (3,−5) olan ve x eksenine teğet çemberin denklemi nedir?",
          "answer": "x eksenine uzaklık |−5|=5 olduğundan r=5. Denklem (x−3)²+(y+5)²=25tir."
        }
      },
      {
        "title": "Çemberin genel denklemi; çember ile doğrunun durumları",
        "pages": [
          129,
          130
        ],
        "look": "129. sayfada genel denklemin x² ve y² katsayılarını; 130da MH dik uzaklığının rden küçük, eşit ve büyük oluşunu izle.",
        "explanation": [
          "x²+y²+Dx+Ey+F=0 tam kareye tamamlanınca merkez (−D/2,−E/2), yarıçap karesi (D²+E²−4F)/4 bulunur. Bu sayı pozitifse gerçek çember, sıfırsa tek nokta, negatifse gerçek düzlemde boş kümedir. Genel ikinci derece denklemde çember için xy terimi bulunmamalı ve x²,y² katsayıları eşit, sıfırdan farklı olmalıdır; önce bu ortak katsayıya böl. Örneğin x²+y²−6x+4y−12=0, (x−3)²+(y+2)²=25 olur; merkez (3,−2), yarıçap 5tir.",
          "Doğrunun merkeze dik uzaklığı h ise h<r iki kesişim, h=r teğetlik, h>r kesişmeme verir. Yukarıdaki çember için y=3 doğrusunun merkeze uzaklığı |−2−3|=5 olduğundan teğet noktası (3,3)tür. Diğer yöntem doğru denklemini çemberde yerine koyup oluşan ikinci derece denklemin diskriminantına bakmaktır: Δ>0 iki, Δ=0 tek, Δ<0 sıfır kesişim. y=mx+n yazımı düşey doğruları içermez; x=k için doğrudan x yerine k yaz. Kökler kesişim noktasının bir koordinatını verir; diğerini doğru denkleminden tamamla. Çemberin kendi yarıçap koşuluyla kesişim denkleminin diskriminantını iki ayrı denetim olarak ele al."
        ],
        "check": {
          "question": "x²+y²=25 çemberi ile y=4 doğrusu nerelerde kesişir?",
          "answer": "x²+16=25ten x²=9, x=±3. Noktalar (3,4) ve (−3,4)tür. Merkez uzaklığı 4<5 olduğu için iki kesişim beklenir."
        }
      }
    ]
  },
  "mat-ayt-geo-06": {
    "title": "Silindir, koni ve kürede ölçü",
    "book": "AYT-mat",
    "intro": "Açınımın uzunluklarını doğru eşleştir: silindirde dikdörtgenin tabanı 2πr, konide sektör yayı 2πrdir. Hacimde dik yüksekliği kullan.",
    "sections": [
      {
        "title": "Dik dairesel silindirde uzunluk ve alan",
        "pages": [
          131,
          132,
          133
        ],
        "look": "Silindir eksenini, tabana paralel ve dik düzlem kesitlerini; 133. sayfada iki daire ve tek dikdörtgenli açınımı izle.",
        "explanation": [
          "Dik dairesel silindirin iki eş daire tabanı paralel düzlemlerdedir; ekseni taban merkezlerini birleştirir ve tabanlara diktir. Bu özel silindirde ana doğru uzunluğu ile yükseklik h aynıdır. Tabanlara paralel kesit daire, tabanlara dik kesit dikdörtgendir; eksenden geçen dik kesitte dikdörtgenin genişliği çaptır. Eksenden geçmeyen dik kesitte genişlik bir kiriş uzunluğudur ve genellikle 2rden küçüktür. Çizimdeki perspektif tabanı elips gibi gösterse de gerçek taban dairedir; ölçüleri perspektifte cetvelle çıkarma.",
          "Açınımın yan yüzü, bir kenarı h ve diğer kenarı taban çevresi 2πr olan dikdörtgendir. Yanal alan 2πrh, iki taban alanı 2πr², kapalı silindirin toplam alanı 2πrh+2πr²dir. Örneğin r=3, h=5 için yanal alan 30π, toplam alan 48π olur. Üstü açık kapta yalnız bir taban ekleneceği için alan 39πdir; “kapalı” koşulu hangi yüzlerin sayılacağını belirler. Açınımdaki uzun kenarı çap 2r sanmak π katsayısını kaybettirir. Bir dönel silindir modellenirken hangi dikdörtgen kenarının dönme ekseni olduğunu oku: o kenar yükseklik, eksene dik kenar yarıçap olur."
        ],
        "check": {
          "question": "r=2, h=7 olan kapalı dik dairesel silindirin toplam yüzey alanı kaçtır?",
          "answer": "Yanal alan 2π·2·7=28π; iki taban 2π·2²=8π. Toplam 36π birimkaredir."
        }
      },
      {
        "title": "Silindirin hacmi; dik dairesel konide uzunluk ve alan",
        "pages": [
          134,
          135
        ],
        "look": "134. sayfadaki dilimlerin hacmi koruyan dizilişini; 135te T–O–B dik üçgenini ve koninin daire dilimi açınımını incele.",
        "explanation": [
          "Dik dairesel silindirin hacmi taban alanı ile dik yüksekliğin çarpımıdır: V=πr²h. 134. sayfada silindirin dilimlenip yeniden dizilmesi bu hacmi korur ve prizma hesabına bağlar. r=4, h=6 ise hacim 96πdir. Konide ise tepe noktası ile taban merkezini bağlayan parça dik yükseklik h, tepe ile taban çemberindeki nokta arasındaki yan parça ana doğru ldir. Dik dairesel konide l²=h²+r² olur. Eğik görünen lyi doğrudan h yerine koymak hem alanı hem hacmi karıştırır.",
          "135. sayfada koninin yanal açınımı yarıçapı l olan daire dilimidir; sektör yayı koninin taban çevresi 2πrye eşittir. Böylece α/360=r/l, yanal alan πrl; tabanla toplam alan πrl+πr² elde edilir. r=3, h=4 ise l=5; yanal alan 15π, toplam alan 24πdir. Açınım açısı 360·3/5=216° olur. Sektörün yarıçapını r almak yanlış olur; r koninin tabanına, l açılan yan yüzün dairesine aittir. Silindirde yan yüz dikdörtgenken konide daire dilimi olmasının sebebi, koninin çevresel uzunluğunun tepeye doğru azalmasıdır."
        ],
        "check": {
          "question": "Taban yarıçapı 5, dik yüksekliği 12 olan dik dairesel koninin ana doğrusu ve yanal alanı nedir?",
          "answer": "l=√(5²+12²)=13. Yanal alan πrl=π·5·13=65πdir. Dik yükseklik 12, yanal alan formülündeki l değildir."
        }
      },
      {
        "title": "Dik dairesel konide hacim; kürede uzunluk, alan ve hacim",
        "pages": [
          136,
          137
        ],
        "look": "136. sayfada koni–silindir 1/3 ilişkisini; 137de merkezden geçen büyük çemberle üstteki daha küçük düzlem kesitini karşılaştır.",
        "explanation": [
          "Koninin hacmi V=πr²h/3tür. Aynı taban yarıçapı ve aynı dik yükseklikle silindirin hacminin üçte biridir; ana doğruların eşit olması bu karşılaştırmanın şartı değildir. r=3, h=4 konisi 12π; aynı r ve hli silindir 36π hacmindedir. Hacimde r², h ise birinci kuvvetle yer alır. Yalnız yarıçap iki katına çıkarsa hacim dört katına, bütün uzunluklar iki katına çıkarsa sekiz katına çıkar. Böylece benzer cisimlerde alanın k², hacmin k³ ile değiştiği görülür.",
          "Küre, merkezden r uzaklıktaki yüzeyle sınırlanan katı bölgedir. Yüzey alanı 4πr², hacmi 4πr³/3tür. r=3 için alan 36π, hacim de sayısal olarak 36πdir; birimleri farklı olduğundan bunlar aynı ölçü değildir. Merkezden geçen düzlemin kesiti yarıçapı r olan büyük çemberdir. Merkezden uzaklığı d<r olan başka bir kesitte yarıçap ρ için ρ²+d²=r² yazılır; r=5, d=3 ise ρ=4tür. Küre yüzeyiyle düzlemin kesişimi çember, katı kürenin kesiti dairesel bölgedir. Bir yarım dairenin çapı etrafında tam döndürülmesi, sayfanın belirttiği küre modelini oluşturur."
        ],
        "check": {
          "question": "Yarıçapı 6 olan kürenin yüzey alanı ve hacmi kaçtır?",
          "answer": "Alan 4π·36=144π; hacim (4/3)π·216=288πdir. Alan kare, hacim küp birimle yazılır."
        }
      }
    ]
  }
});
