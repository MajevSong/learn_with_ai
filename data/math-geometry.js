/* Kaynak sayfalarına bağlı TYT ve AYT geometri dersleri. */
window.LESSONS = (window.LESSONS || []).concat([
  {
    "id": "mat-tyt-geo-01",
    "subject": "matematik",
    "exam": "TYT",
    "title": "Açıları işaretlerden oku",
    "unit": "Açı kavramı ve paralellik",
    "minutes": 10,
    "tags": [
      "açı",
      "tümler",
      "bütünler",
      "paralel doğrular"
    ],
    "summary": "Açının köşesini, kollarını ve verilen ilişkileri belirleyerek başla; paralellik işareti aynı ölçüyü farklı köşelere taşımayı sağlar.",
    "visual": {
      "type": "compare",
      "nodes": [
        {
          "label": "Köşe ve kollar",
          "detail": "AOB adında ortadaki O köşedir; OA ve OB ışınları açının kollarıdır."
        },
        {
          "label": "Yerel ilişkiler",
          "detail": "Ters açılar eşit; komşu bütünler açılar toplamı 180° olur."
        },
        {
          "label": "Paralel doğrular",
          "detail": "Yöndeş ve iç ters açı eşitliği için doğruların paralel olduğu bilinmelidir."
        }
      ]
    },
    "sections": [
      {
        "title": "Açı kavramı ve çeşitleri",
        "text": "Kitap önce iki ışının ortak başlangıcını köşe olarak tanımlar. AOB yazımında O ortada bulunur; kolların üzerindeki A ve B noktaları köşe değildir. Ölçü, çizilen kolların uzunluğundan bağımsızdır. Dar açı 0° ile 90°, geniş açı 90° ile 180° arasındadır; sınır değerler sırasıyla dik ve doğru açıyı verir. Tam açı 360°dir. Şekildeki küçük kare bir diklik bilgisidir; çizimin göze dik görünmesi aynı bilgiyi sağlamaz. 112. sayfadaki ilişkileri ayrı ayrı kullan: tümler iki açının toplamı 90°, bütünler iki açının toplamı 180° olur; yan yana olmaları şart değildir. Ters açılar kesişen doğrularda eşittir. Örneğin kesişen iki doğru bir 38° açı oluşturuyorsa karşısındaki açı 38°, komşu açılar 180−38=142°dir. Bir açıortay ise bulunduğu açıyı eş iki parçaya ayırır; 142°lik açının açıortayı her parçayı 71° yapar. Ters açı ile komşu açıyı karıştırmamak için ortak kolu kontrol et."
      },
      {
        "title": "Paralel iki doğrunun bir kesenle yaptığı açılar",
        "text": "Sayfadaki eşitliklerin dayanağı d1 ve d2 doğrularının paralel olmasıdır. Kesen, her doğruyla birer dört açı grubu oluşturur. Aynı konumdaki yöndeş açılar eşittir; iç bölgede kesenin karşı tarafında kalan iç ters açılar da eşittir. Önce hangi açıların iki paralel arasında kaldığını, sonra kesenin hangi tarafında olduklarını belirlemek, şeklin çevrilmiş olmasından kaynaklanan hataları önler. Paralellik yoksa yalnız kesişme, iki ayrı köşedeki bu açıları eşitlemez. Örneğin iki paralel doğruyu kesen bir doğru üzerinde bir dar açı 67° ise ona yöndeş açı da 67°dir. Aynı taraftaki iç açının ölçüsü ise 180−67=113° bulunur. Kitaptaki x+y=180° ilişkisi bu bütünlerlikten gelir. Kırık çizgili örnekte gerektiğinde kırılma noktasından verilen doğrulara paralel yardımcı doğru geçir; parçaların yaptığı açıları bu doğruya taşı. Eşitliği yalnız harflerin yakınlığına göre kurma. Büyük açının parçaları mı toplandığını, yoksa doğru açıdan mı çıkarıldığını kollar üzerinde izle."
      }
    ],
    "memory": "Tümler 90°, bütünler 180°. Paralellik verilirse yöndeş ve ters konumlardaki eşitlikleri kullan.",
    "question": {
      "stem": "Paralel iki doğruyu kesen bir doğrunun oluşturduğu aynı taraftaki iç açılardan biri 68°dir. Diğeri kaç derecedir?",
      "options": [
        "68°",
        "90°",
        "112°",
        "136°"
      ],
      "answer": 2,
      "explanation": "Paralellik koşulu verildiği için aynı taraftaki iç açılar toplamı 180°dir. Diğer açı 180−68=112° olur."
    },
    "cards": [
      {
        "front": "Ters açılar hangi koşulda eşittir?",
        "back": "Birbirini kesen iki doğrunun komşu olmayan karşılıklı açıları eşittir."
      },
      {
        "front": "Paralellik verilmeden yöndeş açıları eşitleyebilir miyiz?",
        "back": "Hayır. Yöndeş açıların eşitliği paralellik koşuluna dayanır."
      }
    ],
    "source": {
      "book": "TYT-mat",
      "page": 111
    }
  },
  {
    "id": "mat-tyt-geo-02",
    "subject": "matematik",
    "exam": "TYT",
    "title": "Üçgende açı ve kenar koşulları",
    "unit": "Üçgenlerde açılar ve eşitsizlik",
    "minutes": 12,
    "tags": [
      "üçgen",
      "ikizkenar",
      "eşkenar",
      "üçgen eşitsizliği"
    ],
    "summary": "İç açı toplamı, ikizkenar işaretleri ve üçgen eşitsizliği birlikte, çizilebilen üçgenlerle yalnız kâğıtta kalan uzunlukları ayırır.",
    "visual": {
      "type": "compare",
      "nodes": [
        {
          "label": "Açı toplamı",
          "detail": "Üç iç açı toplamı 180°; bir dış açı, komşu olmayan iki iç açının toplamıdır."
        },
        {
          "label": "Eş kenarlar",
          "detail": "Aynı üçgende eş kenarların karşısındaki açılar eşittir."
        },
        {
          "label": "Uzunluk aralığı",
          "detail": "Üçüncü kenar toplamdan küçük, farkın mutlak değerinden büyük olmalıdır."
        }
      ]
    },
    "sections": [
      {
        "title": "Üçgende açılar; ikizkenar ve eşkenar üçgende açı özellikleri",
        "text": "Üçgenin üç köşesi doğrusal değildir; iç açıların toplamı 180°dir. Bir kenarı uzatınca oluşan dış açı, yanındaki iç açının bütünleridir. Bu yüzden dış açı komşu olmayan iki iç açının toplamına eşittir. Her köşeden aynı yönde seçilen birer dış açının toplamı da 360°dir. 114. sayfadaki yükseklik–açıortay örneğinde hem diklik hem açı eşitliği verilmiştir; yalnız iki doğru parçasının aynı köşeden çıkması bu bağıntıyı kurmaya yetmez. 115. sayfada AB=AC olan ikizkenar üçgende taban açıları B ve C eşittir. Tepe açısı A=40° ise geriye kalan 140° ikiye bölünür: B=C=70°. Tepe noktasından tabana indirilen yükseklik aynı zamanda kenarortay ve açıortay olur. Bu üç görevin birleşmesi ikizkenarlıkla ilgilidir; genel bir üçgende her yükseklik kenarı ortalamaz. Eşkenar üçgende ise üç kenar ve üç açı eşit olduğundan her iç açı 60°dir. Eşitlik işaretinin hangi iki kenarda olduğunu önce belirle; her verilen açı tepe açısı değildir."
      },
      {
        "title": "Üçgende açı-kenar bağıntıları; üçgen eşitsizliği",
        "text": "Aynı üçgende en büyük açının karşısındaki kenar en uzundur. A>B>C ise karşılarındaki a>b>c olur. İki ayrı üçgenin açıları eşit olsa bile kenarları farklı ölçeklerde olabilir; bu yüzden açı eşitliğinden farklı üçgenlerde doğrudan uzunluk eşitliği çıkarılmaz. Bir açının dar, dik ya da geniş olduğunu o açının karşısındaki kenarın karesini diğer iki kenarın kareleri toplamıyla karşılaştırarak da anlayabilirsin. Karşılaştırılan kenarın hangi açıya karşılık geldiğini dikkatle seç. 117. sayfanın temel koşulu |a−b|<c<a+b biçimindedir. Örneğin iki kenar 4 ve 7 ise üçüncü kenar 3<c<11 aralığındadır. c tam sayıysa 4,5,6,7,8,9,10 değerleri alınabilir. c=3 veya c=11 durumunda noktalar doğrusal olur; üçgen oluşmaz. Kenarlar 4,5,7 için 7²=49, 4²+5²=41 olduğundan 7 karşısındaki açı geniştir; önce 4+5>7 ile üçgenin varlığını denetledik. Eşitsizlik ve açı türü koşullarını ayrı yazıp ortak aralığı almak soruyu güvenli çözer."
      }
    ],
    "memory": "Üçgen için |a−b| < c < a+b. Büyük açının karşısında büyük kenar bulunur.",
    "question": {
      "stem": "İki kenar uzunluğu 6 ve 10 birim olan bir üçgenin üçüncü kenarı tam sayıdır. Bu kenarın en küçük değeri nedir?",
      "options": [
        "4",
        "5",
        "6",
        "16"
      ],
      "answer": 1,
      "explanation": "Üçgen eşitsizliği 4<c<16 verir. 4, doğrusal duruma karşılık gelir ve alınamaz. En küçük tam sayı 5tir."
    },
    "cards": [
      {
        "front": "Dış açı hangi açılara eşittir?",
        "back": "Komşu olmayan iki iç açının toplamına."
      },
      {
        "front": "Açı-kenar sıralaması farklı üçgenlere taşınır mı?",
        "back": "Doğrudan taşınmaz; kural aynı üçgendeki açı ve karşı kenarlar içindir."
      }
    ],
    "source": {
      "book": "TYT-mat",
      "page": 114
    }
  },
  {
    "id": "mat-tyt-geo-03",
    "subject": "matematik",
    "exam": "TYT",
    "title": "Eşlikten benzerlik oranına",
    "unit": "Üçgenlerde eşlik ve benzerlik",
    "minutes": 15,
    "tags": [
      "eşlik",
      "benzerlik",
      "Thales",
      "orta taban"
    ],
    "summary": "Önce karşılıklı köşeleri eşleştir; eşlikte boyutlar aynı, benzerlikte bütün karşılıklı uzunlukların oranı aynıdır.",
    "visual": {
      "type": "compare",
      "nodes": [
        {
          "label": "Eşlik",
          "detail": "KAK, AKA ve KKK koşulları karşılıklı elemanları belirler."
        },
        {
          "label": "Benzerlik",
          "detail": "AA, orantılı KKK veya aradaki açı eşit olan KAK kullanılabilir."
        },
        {
          "label": "Paralellik",
          "detail": "Temel orantı, orta taban ve Thales eşitlikleri uzunlukları birbirine bağlar."
        }
      ]
    },
    "sections": [
      {
        "title": "Üçgenlerde eşlik",
        "text": "Eş üçgenlerde karşılıklı bütün kenarlar ve açılar eşittir. ABC≅DEF yazımı A ile D, B ile E, C ile F noktalarını eşleştirir; dolayısıyla AB, DE ile; BC, EF ile eşleşir. Kitap eşliği belirlemek için KAK, AKA ve KKK ölçütlerini gösterir. KAKta eşit açı, verilen iki kenarın arasındaki açıdır. Üç verinin rastgele eşit olması her zaman yeterli değildir; özellikle iki kenar ve bunların arasında olmayan bir açıyı otomatik bir eşlik kuralı sayma. Örneğin AB=DE=5, AC=DF=8 ve BAC=EDF=40° ise üçgenler KAK ile eştir. O hâlde BC=EF; B ve E açıları da eşittir. 119. sayfa karşılıklı yükseklik, kenarortay ve açıortayların da eş olduğunu ekler. Bu sonuçlar ilk köşe eşlemesine bağlıdır; bir üçgendeki herhangi bir yüksekliği ötekinin herhangi bir yüksekliğine eşitlemek doğru olmaz. Yalnız üç açı eşitliği eşlik sağlamaz: kenarları 3-4-5 ve 6-8-10 olan üçgenlerin açıları aynı, boyutları farklıdır. Burada kullanacağımız kavram benzerliktir."
      },
      {
        "title": "Üçgenlerde benzerlik",
        "text": "Benzer üçgenlerde karşılıklı açı ölçüleri eşit, karşılıklı kenarlar orantılıdır. İki açı eşitse üçüncü açılar da 180° toplamından eşit olur; AA benzerliği bunun için yeterlidir. KKK benzerliğinde üç karşılıklı kenarın oranı aynıdır. KAK benzerliğinde iki kenarın oranları eşit ve bu kenarların arasındaki açılar eşit olmalıdır. Benzerliğin varlığını göstermeden, çizimde aynı eğimde görünen kenarları oranlamak çözüm gerekçesi değildir. Köşe sırasını yazmak hangi uzunluğun hangisiyle eşleştiğini sabitler. ABC∼DEF ve AB/DE=2/3 ise aynı yönde AC/DF=BC/EF=2/3 yazılır. AC=10 olduğunda DF=15 bulunur. Aynı oran yükseklikler, açıortaylar, kenarortaylar ve çevreler için de geçerlidir; örneğin küçük üçgenin çevresi 24 ise büyük üçgeninki 36dır. Benzerlikte k yalnız bir sayfa üzerinde büyütme miktarı değil, iki üçgeni karşılaştırma yönünü de taşır. Bir oranı küçük/büyük, diğerini büyük/küçük yazmak ters sonuç verir. k=1 olduğunda benzer üçgenler aynı zamanda eş olur."
      },
      {
        "title": "Üçgenlerde temel benzerlik ve benzerlik uygulamaları",
        "text": "122. sayfada D, AB üzerinde; E, AC üzerinde ve DE, BCye paraleldir. Bu paralellik ADE ile ABC üçgenlerinin açılarını eşitler. AD/AB=AE/AC=DE/BC oranının yanında AD/DB=AE/EC de yazılabilir; ikinci eşitlik parça/parça, birincisi parça/bütün oranıdır. Farklı türde iki oranı karıştırma. D ve E iki kenarın orta noktalarıysa DE orta tabandır; BCye paralel ve BCnin yarısı uzunluğundadır. Thales teoremi aynı düşünceyi en az üç paralel doğrunun iki kesen üzerindeki parçalarına uygular. 123. sayfanın tuğla–merdiven örneğinde özdeş tuğlaların sayısı, karşılaştırılan yükseklik farklarını 2x ve 5x yapar. Yatay aralıklar 40 ve 40+a olduğundan 40/(40+a)=2/5 yazılır; 200=80+2a ile a=60 cm bulunur. Burada 3 tuğla ile 6 tuğlanın toplam yüksekliklerini doğrudan oranlamak yerine merdivenin temasları arasındaki farklar kullanılır. Benzer uygulamada dik duran 1,5 m kişinin gölgesi 2 m, aynı anda dik direğin gölgesi 8 m ise paralel ışınlar altında direk boyu 1,5·8/2=6 mdir."
      }
    ],
    "memory": "Benzerlik oranını aynı yönde yaz. Orta taban paraleldir ve üçüncü kenarın yarısıdır.",
    "question": {
      "stem": "ABC üçgeninde D, AB üzerinde; E, AC üzerindedir. DE // BC, AD=3, DB=6 ve BC=15 birimdir. DE kaç birimdir?",
      "options": [
        "3",
        "5",
        "7,5",
        "10"
      ],
      "answer": 1,
      "explanation": "AB=3+6=9. ADE∼ABC olduğundan DE/15=AD/AB=3/9=1/3; DE=5 olur."
    },
    "cards": [
      {
        "front": "AA benzerliği için kaç açı eşitliği yeterlidir?",
        "back": "Karşılıklı iki açı eşitliği yeterlidir; üçüncü açı 180° toplamından eşittir."
      },
      {
        "front": "Bir üçgenin orta tabanı?",
        "back": "İki kenarın orta noktalarını birleştirir; üçüncü kenara paralel ve onun yarısıdır."
      }
    ],
    "source": {
      "book": "TYT-mat",
      "page": 118
    }
  },
  {
    "id": "mat-tyt-geo-04",
    "subject": "matematik",
    "exam": "TYT",
    "title": "Açıortay, uzaklık ve katlama",
    "unit": "Üçgende açıortay",
    "minutes": 12,
    "tags": [
      "açıortay",
      "iç teğet merkez",
      "katlama",
      "oran"
    ],
    "summary": "Açıortay açıları eşitler; onun üzerindeki noktanın kollara dik uzaklıkları eşittir. İç ve dış açıortayda oran kurulurken noktaların sırası önemlidir.",
    "visual": {
      "type": "compare",
      "nodes": [
        {
          "label": "Eş uzaklık",
          "detail": "Açıortay üzerindeki noktanın açının kollarına dik uzaklıkları eşittir."
        },
        {
          "label": "İç ve dış",
          "detail": "İç açıortay karşı kenarı, dış açıortay karşı kenarın doğrusunu orantılı böler."
        },
        {
          "label": "Katlama",
          "detail": "Çakışan noktaların katlama doğrusuna uzaklıkları eşittir; doğru orta dikmedir."
        }
      ]
    },
    "sections": [
      {
        "title": "Açıortay ve özellikleri; üçgende dış açıortay",
        "text": "Açıortay, bir açıyı eş ölçülü iki açıya ayırır. Üzerindeki bir noktanın açının iki koluna uzaklığı eşittir; uzaklık, kollara çizilen dikmelerle ölçülür. 124. sayfadaki eşit AB ve BC parçalarının yanında diklik işaretleri de bu yüzden vardır. Genel bir eğik bağlantıyı diğer kola çizilmiş dikmeyle eşitleme. Üçgenin iç açıortayları iç teğet çemberin merkezinde kesişir. Bu nokta üç kenara eşit dik uzaklıktadır; üç köşeye eşit uzaklık başka bir merkezin özelliğidir. 125. sayfada iki iç açıortayın oluşturduğu açı 90°+A/2, B ve C dış açıortaylarının uygun kolları arasındaki küçük açı 90°−A/2 olarak gösterilir. Örneğin A=50° ise iç merkezde BIC=115°dir. Sonucu hatırlamak yerine IBC=B/2, ICB=C/2 yazarak BIC=180−(B+C)/2=90+A/2 elde edebilirsin. Dış açıortaylarda ışınların yönü ve seçilen açı önemlidir; aynı iki doğru kesişince bütünler iki ölçü de oluşur. Kaynaktaki işaretlenen açıyı okumadan bütün kesişim açılarını aynı formülle adlandırma."
      },
      {
        "title": "İç ve dış açıortay teoremi; katlama uygulaması",
        "text": "126. sayfadaki iç açıortay teoreminde D, BC üzerindeyken BD/DC=AB/AC olur. Açıortay karşı kenarı her zaman ortalamaz; ortalaması AB=AC durumuna özgüdür. AB=6, AC=9 ve BC=10 ise BD:DC=2:3 olduğundan BD=4, DC=6dır. Dış açıortayda kesişim karşı kenarın uzantısındadır; uzun parçanın kısa parçadan farkı BCyi verir. Bu nedenle içte kullanılan parça toplamı dış bölmeye aynen taşınmaz. Eş yan kenarlı durumda dış açıortay tabana paralel olabileceğinden sonlu bir kesişim noktası varsayma. 127. sayfada C noktası B üzerine katlandığı için katlama doğrusu BCnin orta dikmesidir. Katlama üzerindeki D ve F için DB=DC, FB=FC ve DF⊥BC elde edilir; BDC ikizkenar üçgeninde DF aynı zamanda açıortaydır. Bu açıortay ABC üçgeninin rastgele bir köşesine ait değildir: hangi açıya ait olduğunu seç. Sayfanın altındaki iç merkez modelinde ise üç küçük üçgenin kenarlara ait yükseklikleri aynı rdir. Dolayısıyla alanları a·r/2, b·r/2, c·r/2 ve oranları a:b:c olur; uzunluk oranını alan oranına dönüştüren ortak dik uzaklıktır."
      }
    ],
    "memory": "İç açıortayda BD/DC=AB/AC. Kollara uzaklık her zaman dikme uzunluğudur.",
    "question": {
      "stem": "ABC üçgeninde D, BC üzerindedir ve AD, BAC açısının iç açıortayıdır. AB=10, AC=15 ve BC=20 birimse BD kaçtır?",
      "options": [
        "5",
        "8",
        "10",
        "12"
      ],
      "answer": 1,
      "explanation": "İç açıortay teoremi BD/DC=10/15=2/3 verir. BD+DC=20 olduğundan BD=20·2/5=8 birimdir."
    },
    "cards": [
      {
        "front": "İç merkez hangi noktalara eşit uzaklıktadır?",
        "back": "Üç kenarın doğrularına; bu uzaklıklar dikme uzunluklarıdır."
      },
      {
        "front": "C noktası B üzerine katlanırsa katlama doğrusu nedir?",
        "back": "BCnin orta dikmesidir; üzerindeki her nokta B ve Cye eşit uzaklıktadır."
      }
    ],
    "source": {
      "book": "TYT-mat",
      "page": 124
    }
  },
  {
    "id": "mat-tyt-geo-05",
    "subject": "matematik",
    "exam": "TYT",
    "title": "Üçgende dört yardımcı doğru",
    "unit": "Kenarortay, yükseklik ve kenar orta dikme",
    "minutes": 15,
    "tags": [
      "ağırlık merkezi",
      "diklik merkezi",
      "çevrel merkez",
      "yükseklik"
    ],
    "summary": "Kenarortay orta noktayı, yükseklik dikliği, açıortay açı eşitliğini, kenar orta dikme ise orta nokta ile dikliği birlikte gerektirir.",
    "visual": {
      "type": "compare",
      "nodes": [
        {
          "label": "Kenarortay",
          "detail": "Köşeyi karşı kenarın orta noktasına bağlar; kesişim ağırlık merkezidir."
        },
        {
          "label": "Yükseklik",
          "detail": "Köşeden karşı kenarın doğrusuna diktir; kesişim diklik merkezidir."
        },
        {
          "label": "Kenar orta dikme",
          "detail": "Kenara orta noktasında diktir; üzerindeki noktalar kenarın uçlarına eşit uzaklıktadır."
        }
      ]
    },
    "sections": [
      {
        "title": "Üçgende kenarortay",
        "text": "Kenarortay bir köşeden karşı kenarın orta noktasına çizilir. Üç kenarortay ağırlık merkezinde kesişir ve bu nokta her zaman üçgenin içindedir. Sayfadaki G için AG:GD=2:1dir; burada D, BCnin orta noktasıdır. Büyük parça köşe tarafındadır. Kenarortayın kenarı iki eş parçaya bölmesi, tepe açısını da ikiye bölmesi anlamına gelmez. Ağırlık merkezinin oranını, BC üzerindeki eşit parçalarla karıştırma: bunlar farklı doğru parçaları üzerindeki iki ayrı orta nokta bilgisidir. AD=15 ise AG=10, GD=5 olur. GD=4 verilse AD=12, AG=8 bulunur; bütünü her zaman üç oransal parçadır. Kitabın orta tabanlı ek çiziminde 3:1:2 parçaları da aynı 2:1 kuralı ve orta tabanın yarı yükseklikte olmasıyla oluşur; harfleri ezberlemek yerine noktaların sırasını izle. Alttaki dik üçgende hipotenüsün orta noktası üç köşeye eşit uzaklıktadır. Hipotenüs 10 ise ona ait kenarortay 5tir. Bu yarıya eşitlik yalnız hipotenüse ait kenarortay içindir; her üçgendeki her kenarortay için geçerli değildir."
      },
      {
        "title": "Üçgende yükseklik; ikizkenar ve eşkenar üçgende yükseklik",
        "text": "Yükseklik bir köşeden karşı kenara ya da karşı kenarın uzantısına çizilen dik doğru parçasıdır. Bu nedenle geniş açılı üçgende dikme ayağı kenarın dışında kalabilir; yükseklik eksik veya geçersiz olmaz. Üç yüksekliğin doğruları diklik merkezinde kesişir. Dar açılı üçgende merkez içeride, dik üçgende dik açının köşesinde, geniş açılı üçgende dışarıdadır. Dik üçgende dik kenarların kendisi iki yüksekliktir. Üçgenin dışında kesişme görülmesi diklik merkezi tanımını değiştirmez. 130. sayfada AB=AC ikizkenarlığı tepe yüksekliği AHye ek görevler kazandırır: BH=HC ve BAH=HAC. AB=AC=13, BC=10 ise BH=HC=5 olur; ABH dik üçgeninde AH²=13²−5²=144, yani AH=12dir. Eşkenar üçgende aynı işlem her köşede geçerlidir. Bir kenarı a olan eşkenar üçgenin yüksekliği a√3/2dir; a=8 için 4√3 bulunur. Bu sonuçta a/2 ve a, bir 30°–60°–90° üçgeninin dik kenar–hipotenüs çiftidir. Genel çeşitkenar üçgende yüksekliğin tabanı ortaladığı varsayımı bu hesabı bozar."
      },
      {
        "title": "Üçgende kenar orta dikme",
        "text": "Bir kenarın orta dikmesi o kenarın orta noktasından geçen dik doğrudur. Kenarortaydan farklı olarak mutlaka karşı köşeden geçmez. Üzerindeki her nokta kenarın iki ucuna eşit uzaklıktadır; bunun nedeni oluşan iki dik üçgenin eşliğidir. Üç kenar orta dikmenin kesişimi bu yüzden üç köşeye eşit uzaklıktadır ve çevrel çemberin merkezidir. İç merkez kenarlara eşit dik uzaklık, çevrel merkez köşelere eşit uzaklık verir. İsimleri benzer olsa da aranan uzaklıklar farklıdır. Sayfadaki üç konumda çevrel merkez dar açılı üçgende içeride, dik üçgende hipotenüsün orta noktasında, geniş açılı üçgende dışarıdadır. Hipotenüsü 14 olan dik üçgende çevrel yarıçap 7dir. Buna karşılık diklik merkezi dik köşededir; iki merkezi aynı nokta sanma. Eşkenar üçgende simetri nedeniyle kenarortay, açıortay, yükseklik ve kenar orta dikme doğruları çakışır. Bu özel durumda ağırlık, iç, çevrel ve diklik merkezleri tek noktadır. İkizkenar üçgende yalnız simetri ekseni üzerindeki ilgili yardımcı doğrular çakışır; tüm yardımcı doğrular aynı doğru olmaz."
      }
    ],
    "memory": "Ağırlık merkezi kenarortayı köşeden başlayarak 2:1 böler. Diklik, orta nokta ve eş açı ayrı bilgilerdir.",
    "question": {
      "stem": "ABC üçgeninde D, BCnin orta noktası ve G ağırlık merkezidir. AD=18 birim olduğuna göre AG kaçtır?",
      "options": [
        "6",
        "9",
        "12",
        "15"
      ],
      "answer": 2,
      "explanation": "G kenarortayı köşeden başlayarak 2:1 böler. AG=2·18/3=12, GD=6 olur."
    },
    "cards": [
      {
        "front": "Kenarortay ile kenar orta dikmenin farkı?",
        "back": "Kenarortay köşeden orta noktaya gider; orta dikme kenara orta noktasında diktir ve köşeden geçmek zorunda değildir."
      },
      {
        "front": "Dik üçgende diklik ve çevrel merkez?",
        "back": "Diklik merkezi dik köşede; çevrel merkez hipotenüsün orta noktasındadır."
      }
    ],
    "source": {
      "book": "TYT-mat",
      "page": 128
    }
  },
  {
    "id": "mat-tyt-geo-06",
    "subject": "matematik",
    "exam": "TYT",
    "title": "Dik üçgenden birim çembere",
    "unit": "Pisagor, Öklid ve trigonometrik oranlar",
    "minutes": 18,
    "tags": [
      "Pisagor",
      "Öklid",
      "trigonometri",
      "birim çember"
    ],
    "summary": "Dik açı işaretini belirle, hipotenüsü seç ve uygun uzunluk oranını kur; birim çember bu oranların koordinat anlamını gösterir.",
    "visual": {
      "type": "compare",
      "nodes": [
        {
          "label": "Dik üçgen",
          "detail": "Hipotenüs dik açının karşısındaki en uzun kenardır."
        },
        {
          "label": "Dikme ve izdüşüm",
          "detail": "Hipotenüse indirilen yükseklikte h²=p·k bağıntısı benzerlikten gelir."
        },
        {
          "label": "Oran ve koordinat",
          "detail": "Birim çemberde nokta (cos α, sin α); kareler toplamı 1dir."
        }
      ]
    },
    "sections": [
      {
        "title": "Dik üçgende Pisagor teoremi",
        "text": "Pisagor teoremi dik üçgende geçerlidir. Dik kenarlar a ve b, hipotenüs c ise a²+b²=c²dir. Hipotenüs, çizimde en eğik görünen kenar değil dik açının karşısındaki kenardır. Kitabın 3–4–5, 5–12–13, 7–24–25 ve 8–15–17 modellerinde bütün kenarları aynı katsayıyla çarpmak dikliği korur. Örneğin dik kenarlar 9 ve 12 ise 3–4–5in üç katından hipotenüs 15tir. 9²+12²=225 hesabı da aynı sonucu verir. Özel açılı modeller kenarların konumunu da öğretir. 30°nin karşısı a ise 60°nin karşısı a√3, hipotenüs 2adır. 45°–45°–90° üçgeninde dik kenarlar eşit ve hipotenüs a√2dir. Hipotenüsü 10 olan 30°–60°–90° üçgeninde kısa dik kenar 5, uzun dik kenar 5√3tür. 15°–75°–90° modelinde gösterilen iç dikme ile hipotenüs arasındaki ilişkiyi, herhangi bir dik kenara aitmiş gibi okuma. Sayfanın ortasındaki ek şekillerde de kare toplamlarının kurulmasını sağlayan özel diklikler işaretlidir; aynı eşitlikleri diklik verilmemiş dörtgene aktaramazsın."
      },
      {
        "title": "Öklidin çalışmaları; üçgende Öklid teoremi",
        "text": "Kitabın Öklid bağıntılarında ABC üçgeni A köşesinde diktir ve AH hipotenüs BCye diktir. BH=p, HC=k, BC=a=p+k olsun. Benzer dik üçgenler h²=p·k, AB²=p·a ve AC²=k·a sonuçlarını verir. Her kenarın karesi kendi hipotenüs izdüşümü ile tüm hipotenüsün çarpımıdır. p ile kyi rastgele yer değiştirme; ABnin izdüşümü BHdir. Bir üçgende yalnız bir yükseklik çizilmiş olması Öklid bağıntısını kullanmaya yetmez; başlangıç üçgeninin dikliği de gereklidir. Örneğin BH=4 ve HC=9 ise BC=13 olur. AH²=4·9=36dan AH=6; AB²=4·13=52den AB=2√13, AC²=9·13=117den AC=3√13 bulunur. Kontrol için AB²+AC²=52+117=169=13² yazılır. Sayfanın altındaki alan eşitliği de (AB·AC)/2=(BC·AH)/2 verir; yükseklik h=AB·AC/BCdir. Bu ikinci yol dik kenarlar bilindiğinde işe yarar. Sonuçların hepsi uzunluk olduğundan karekök alınırken negatif değer seçilmez. Sayfanın tarihsel aksiyom bölümü ise teorem ile başlangıç kabulünü ayırmak için okunabilir."
      },
      {
        "title": "Trigonometrik oranlar; 30°, 45°, 60°nin oranları",
        "text": "Dik üçgende bir dar açıya göre sinüs karşı dik kenarın hipotenüse, kosinüs komşu dik kenarın hipotenüse oranıdır. Tanjant karşı/komşu, kotanjant komşu/karşı biçimindedir. Aynı üçgende öteki dar açıya geçince karşı ve komşu yer değiştirir. Bu nedenle tümler α ve β için sin α=cos β, tan α=cot β olur. Oranlar benzer üçgenlerde değişmediğinden yalnız şeklin büyüklüğüne bağlı değildir. α açısını bulmadan karşı kenarı seçmek yanlış oran kurmanın başlıca nedenidir. 134. sayfanın örneğinde AB=AC=13, BD=3 ve DC=7dir. Tepe yüksekliği tabanı 5 ve 5e böler; D ile dikme ayağı H arası 2, yükseklik 12 olur. ADC açısı için tan α=12/2=6dır; ADyi hipotenüs yapan doğru dik üçgen ADHdir. 135. sayfanın tablosu özel üçgenlerden doğrulanır: sin30°=1/2, cos30°=√3/2, tan30°=1/√3=√3/3; sin45°=cos45°=√2/2 ve tan45°=1dir. Değerleri karıştırırsan kısa kenarı 1, hipotenüsü 2 olan 30°–60°–90° üçgenini yeniden kur. Payda rasyonelleştirmek değeri değiştirmez."
      },
      {
        "title": "Birim çember",
        "text": "Birim çemberin merkezi orijin, yarıçapı 1dir. Çember üzerindeki K(x,y) noktası için x²+y²=1 yazılır; bu, koordinat eksenlerine indirilen dikmelerin oluşturduğu üçgende Pisagor sonucudur. Pozitif x yönünden ölçülen α açısına karşılık K=(cos α,sin α) olur. Dolayısıyla cos²α+sin²α=1dir. Koordinatlar yönlü değerlerdir; ikinci bölgede x negatif ve y pozitiftir. Bir üçgenin kenar uzunluğunu negatif seçmek yerine koordinat işaretiyle uzunluk mutlak değerini ayır. Örneğin K ikinci bölgede ve x=−3/5 ise y²=1−9/25=16/25 bulunur. Bölge y>0 gerektirdiği için y=4/5tir; bu durumda cos α=−3/5, sin α=4/5 olur. Yalnız karekök alarak ±4/5 yazmak bölge bilgisini henüz kullanmadığını gösterir. Sayfanın altındaki x=1 doğrusu tanjant, y=1 doğrusu kotanjant için yardımcı eksenlerdir. tan α=sin α/cos α, cos α≠0 olduğunda tanımlıdır; α=90° için tanjant yoktur. Çember denklemi ise bu açıda da geçerlidir. Tanım koşulunu formülü uygulamadan önce kontrol et."
      }
    ],
    "memory": "Pisagor: dik kenarların kareleri toplamı hipotenüsün karesi. sin=karşı/hipotenüs, cos=komşu/hipotenüs.",
    "question": {
      "stem": "ABC dik üçgeninde A açısı 90°dir. A köşesinden hipotenüs BCye indirilen AH dikmesinde BH=4 ve HC=9 birimdir. AH kaçtır?",
      "options": [
        "5",
        "6",
        "√13",
        "13"
      ],
      "answer": 1,
      "explanation": "Hem A dik açısı hem AH⊥BC verildiği için Öklid uygulanır: AH²=BH·HC=36. Pozitif uzunluk AH=6dır."
    },
    "cards": [
      {
        "front": "Dik üçgende tan α nasıl bulunur?",
        "back": "αya göre karşı dik kenar/komşu dik kenar."
      },
      {
        "front": "Birim çemberde x ve y neyi verir?",
        "back": "Pozitif x yönünden ölçülen α için x=cos α, y=sin α; x²+y²=1."
      }
    ],
    "source": {
      "book": "TYT-mat",
      "page": 132
    }
  },
  {
    "id": "mat-tyt-geo-07",
    "subject": "matematik",
    "exam": "TYT",
    "title": "Üçgenin alanını oranlarla bul",
    "unit": "Üçgende alan ve alan uygulamaları",
    "minutes": 12,
    "tags": [
      "üçgende alan",
      "ortak yükseklik",
      "benzerlik alanı"
    ],
    "summary": "Alan hesabında tabanla ona ait dik yüksekliği eşleştir; ortak taban, ortak yükseklik ve benzerlik farklı alan oranları oluşturur.",
    "visual": {
      "type": "compare",
      "nodes": [
        {
          "label": "Taban ve yükseklik",
          "detail": "Seçilen tabana ait yükseklik dik uzaklıktır; kenar uzantısında olabilir."
        },
        {
          "label": "Ortak yükseklik",
          "detail": "Aynı doğru üzerinde tabanları olan üçgenlerin alanları tabanlarıyla orantılıdır."
        },
        {
          "label": "Benzerlik",
          "detail": "Karşılıklı uzunluk oranı k ise alan oranı k²dir."
        }
      ]
    },
    "sections": [
      {
        "title": "Üçgende alan",
        "text": "Bir üçgenin alanı seçilen taban uzunluğu ile o tabana ait yüksekliğin çarpımının yarısıdır. Aynı üçgen için a·ha/2=b·hb/2=c·hc/2 eşitliği vardır. Burada her kenar kendi yüksekliğiyle eşleşir; a ile hb rastgele çarpılmaz. Dar, dik ve geniş açılı üçgenlerde kural aynıdır. Geniş açılı üçgende yükseklik dışarıda çizildiğinde de dik uzaklığı ölçer. Eğik bir kenarın uzunluğu yüksekliğin yerine ancak seçilen tabana dik olduğu açıkça biliniyorsa kullanılabilir. Tabanı 12, bu tabana ait yüksekliği 5 olan üçgenin alanı 12·5/2=30 birimkaredir. Aynı üçgenin başka bir kenarı 10 ise ona ait yükseklik 10·h/2=30dan 6 olur; yüksekliklerin eşit olması gerekmez. Dik üçgende birbirine dik iki kenarı taban ve yükseklik seçmek işlemi kısaltır: dik kenarları 6 ve 8 olan üçgenin alanı 24tür. Hipotenüsü taban seçersen yüksekliği ayrıca bulmalısın. Alan birimi uzunluk biriminin karesidir; santimetre verilen soruda sonuç cm² olur, cm olmaz."
      },
      {
        "title": "Üçgende alan uygulamaları",
        "text": "138. sayfa alan oranını hangi ortaklığın sağladığını gösterir. Aynı tabana sahip iki üçgende alanlar yüksekliklerle orantılıdır. Aynı yükseklikte ise alanlar tabanlarla orantılıdır. D, BC üzerinde olduğunda ABD ve ADC üçgenleri A köşesinden aynı doğruya aynı yüksekliği kullanır; alan oranı BD/DCdir. İki kenar ile aralarındaki açı verilirse A=bc·sin α/2 kullanılabilir. α açısının b ve c arasındaki açı olması gerekir; üçgendeki başka bir açıyı yerine koyamazsın. Örneğin BD=3, DC=5 ve ABC alanı 40 ise ABD:ADC=3:5tir; küçük alan 40·3/8=15, diğeri 25 olur. Benzer üçgenlerde ise hem taban hem yükseklik aynı k oranıyla değişir; alan oranı k²dir. Kenar oranı 2/3 olan benzer üçgenlerin alanları 4/9 oranındadır; alanı 20 olan küçük üçgene karşı büyük alan 45tir. Sayfanın son modelinde üç kenarortay altı eş alanlı bölge oluşturur. ABC alanı 36 ise her S=6dır. Bu eşitlik yalnız tek bir kenarortayın çizilmesinden altı parça oluştuğunu söylemez; üç kenarortayın tamamı kullanılır."
      }
    ],
    "memory": "A=taban·dik yükseklik/2. Uzunluklar k katına çıkarsa alan k² katına çıkar.",
    "question": {
      "stem": "ABC üçgeninde D, BC üzerindedir. BD=2, DC=3 ve ABCnin alanı 35 birimkaredir. ABDnin alanı kaçtır?",
      "options": [
        "10",
        "14",
        "21",
        "28"
      ],
      "answer": 1,
      "explanation": "ABD ve ADC, BC doğrusuna aynı yüksekliği kullanır. ABD alanı/ABC alanı=BD/BC=2/5; 35·2/5=14."
    },
    "cards": [
      {
        "front": "Taban sabitken alan neyle orantılıdır?",
        "back": "O tabana ait dik yükseklikle."
      },
      {
        "front": "Benzerlikte kenar oranı 2 ise alan oranı?",
        "back": "2²=4. Taban ve yükseklik ayrı ayrı iki katına çıkar."
      }
    ],
    "source": {
      "book": "TYT-mat",
      "page": 137
    }
  },
  {
    "id": "mat-tyt-geo-08",
    "subject": "matematik",
    "exam": "TYT",
    "title": "Çokgen ve yamuğun koşullarını kur",
    "unit": "Çokgenler, dörtgenler ve yamuk",
    "minutes": 15,
    "tags": [
      "çokgen",
      "dörtgen",
      "yamuk",
      "orta taban"
    ],
    "summary": "Çokgen formüllerini kenar sayısından, yamuk hesaplarını paralel tabanlardan kur; özel dörtgenlerde ek sonuçlar ek koşullar ister.",
    "visual": {
      "type": "compare",
      "nodes": [
        {
          "label": "Çokgen",
          "detail": "İç açı toplamı (n−2)·180°, köşegen sayısı n(n−3)/2dir."
        },
        {
          "label": "Yamuk",
          "detail": "Bu kaynakta en az bir çift karşı kenarı paralel dörtgen olarak kullanılır."
        },
        {
          "label": "Özel durum",
          "detail": "İkizkenarlık ve diklik ayrı ek bilgilerdir; her yamuğa aktarılamaz."
        }
      ]
    },
    "sections": [
      {
        "title": "Çokgenler; dörtgenler ve özellikleri",
        "text": "n kenarlı dışbükey çokgen bir köşeden n−2 üçgene ayrılır; iç açı toplamı (n−2)·180° olur. Bir köşeden kendisine ve iki komşusuna köşegen çizilemediği için n−3 köşegen çıkar. Her köşegen iki uçtan sayıldığından toplam sayı n(n−3)/2dir. Düzgün çokgende hem bütün kenarlar hem bütün açılar eşittir; yalnız eş kenar bilgisi yeterli değildir. Dışbükey çokgende birer dış açının toplamı 360° olduğundan düzgün çokgenin bir dış açısı 360°/n, iç açısı 180°−360°/ndir. Örneğin düzgün sekizgende dış açı 45°, iç açı 135°, köşegen sayısı 8·5/2=20dir. 140. sayfada dörtgenin iç açı toplamı 360° olarak özelleşir; içbükey örnekte bir iç açı 180°den büyüktür. Köşegenleri dik bir dörtgende AB²+CD²=BC²+AD² bağıntısı, kesişimde oluşan dört dik üçgenden gelir. Diklik şartını kaldırınca bu eşitliği kullanma. Kenar orta noktaları E,F,G,Hyi birleştirince her parça uygun köşegenin yarısıdır; böylece EFGH çevresi AC+BD olur. Açıortaylı küçük çizimlerde ise eş açı yaylarını ve açı toplamını kullanarak sonucu kur."
      },
      {
        "title": "Özel dörtgenler; yamuk ve özellikleri",
        "text": "Kitap yamuğu en az bir çift karşı kenarı paralel dörtgen olarak kullanır; bu tanıma göre paralelkenar da yamuktur. Dikdörtgen paralelkenarın, kare hem dikdörtgenin hem eşkenar dörtgenin özelliklerini taşır. Bir özelliği genel sınıftan özel sınıfa taşıyabilirsin; karedeki bütün özellikleri her yamuğa taşıyamazsın. AB // DC olan yamuğun aynı yan kenarı üzerindeki iç açıları bütünlerdir. Paralel iki tabanı ve tabanlara ait yükseklik yönünü belirlemek, çizim döndürülse de bu ilişkileri korur. Yan kenarların orta noktalarını birleştiren EF orta tabanı, tabanlara paraleldir ve EF=(AB+DC)/2 olur. AB=14, DC=6 ise EF=10 bulunur; 14−6 kullanmak orta tabanı değil başka bir parçayı hesaplar. Sayfanın alttaki modelinde köşegenler orta tabanı K ve Lde keser. Büyük taban a, küçük taban c ise dış parçalar c/2, orta parça (a−c)/2dir. Aynı örnekte 3+4+3=10 kontrolü yapılabilir. Bu parçalama için K ve Lnin köşegenlerle kesişim noktaları, E ve Fnin gerçek orta noktalar olması gerekir; yaklaşık ortada görünmeleri yeterli değildir."
      },
      {
        "title": "Yamuğun alanı; ikizkenar ve dik yamuk",
        "text": "Yamuğun alanı tabanların toplamının yarısı ile aralarındaki dik uzaklığın çarpımıdır: A=(a+c)h/2. Orta taban uzunluğuyla hnin çarpımı da aynı sonucu verir. 142. sayfadaki yan kenarın orta noktası E için EBC üçgeni yamuk alanının yarısıdır. Köşegenler Oda kesiştiğinde karşı tabanlar yanındaki küçük üçgenler benzerdir; yanlarda kalan iki üçgenin alanları eşit olur ve S2·S4=S1·S3 sağlanır. Bu eşitlikleri rastgele dört üçgen alanına değil, gösterilen köşegen düzenine uygula. 143. sayfada gerçek bir ikizkenar yamukta eş yan kenarlar eş taban açıları ve eş köşegenler getirir. Köşegenler ayrıca dikse h=(a+c)/2 ve alan h² olur; diklik olmadan bu sonuçlar çıkmaz. Dik yamukta bir yan kenar tabanlara diktir ve doğrudan yüksekliktir. Bu yamuğun köşegenleri de birbirine dikse h²=a·c kullanılabilir. Örneğin dik yamukta tabanlar 4 ve 9, köşegenler dik ise h=√36=6, alan=(4+9)·6/2=39dur. Yalnız tabanları bilerek h=6 demek mümkün değildir; ek dik köşegen koşulu hesabı belirler."
      }
    ],
    "memory": "Düzgün çokgende bir dış açı 360°/n. Yamuk alanı (alt taban+üst taban)·yükseklik/2.",
    "question": {
      "stem": "AB // DC olan bir ABCD yamuğunda AB=16, DC=8 ve tabanlar arasındaki dik uzaklık 5 birimdir. Alan kaçtır?",
      "options": [
        "40",
        "60",
        "80",
        "120"
      ],
      "answer": 1,
      "explanation": "Yamuk alanı (16+8)·5/2=60 birimkaredir. Yan kenar uzunluğu yerine dik uzaklık kullanılır."
    },
    "cards": [
      {
        "front": "Düzgün çokgende bir iç açı?",
        "back": "180°−360°/n; n kenar sayısıdır."
      },
      {
        "front": "Yamukta h²=a·c ne zaman kullanılabilir?",
        "back": "Dik yamukta köşegenlerin de birbirine dik olması koşuluyla; genel yamuk bağıntısı değildir."
      }
    ],
    "source": {
      "book": "TYT-mat",
      "page": 139
    }
  },
  {
    "id": "mat-tyt-geo-09",
    "subject": "matematik",
    "exam": "TYT",
    "title": "Paralelkenar ve eşkenar dörtgen",
    "unit": "Paralelkenarda açı, uzunluk ve alan",
    "minutes": 14,
    "tags": [
      "paralelkenar",
      "eşkenar dörtgen",
      "alan",
      "köşegen"
    ],
    "summary": "Paralelkenarda karşı kenarlar eşit ve köşegenler birbirini ortalar; eşkenar dörtgende bunlara dik köşegen ve açıortay özellikleri eklenir.",
    "visual": {
      "type": "compare",
      "nodes": [
        {
          "label": "Karşılıklı eşlik",
          "detail": "Paralelkenarda karşı kenar ve açılar eşit, komşu açılar bütünlerdir."
        },
        {
          "label": "Alan",
          "detail": "Aynı taban doğrularına uzaklıklar ve köşegenler eş alanlar üretir."
        },
        {
          "label": "Eşkenar dörtgen",
          "detail": "Dört kenar eşit; köşegenler birbirini dik ortalar ve açıları ikiye böler."
        }
      ]
    },
    "sections": [
      {
        "title": "Paralelkenarda açı ve uzunluk",
        "text": "Paralelkenarın karşılıklı iki kenar çifti paraleldir. Bu yapıdan karşı kenarların uzunlukları ve karşı açıların ölçüleri eşit, komşu açıların toplamı 180° çıkar. Bir iç açı 70° ise komşuları 110°, karşısı 70°dir. Köşegenler birbirini ortalar: AC ile BD, Ede kesişiyorsa AE=EC ve BE=ED olur. Ancak bu iki farklı köşegenin eş uzunlukta olması gerekmez; AEyi BEye eşitlemek ek bir özellik ister. Çizimdeki bütün eşlik çizgilerinin aynı desende olup olmadığını oku. Örneğin AC=18 ve BD=14 ise AE=9, BE=7dir. Paralelkenarda komşu açıların açıortayları arasındaki açı, 70°/2+110°/2=90° olduğundan diktir. Bu sonuç açıortaylara aittir; komşu kenarların kendisi genel durumda dik değildir. Sayfanın Dikkat çizimindeki iki dik üçgeni eşleştirirken ortak köşegen doğrusu, paralel kenarlar ve diklik işaretlerini birlikte kullan. Eş üçgenlerin karşılıklı yükseklikleri ve izdüşümleri de eş olur. Şekilde aynı harfle gösterilmeyen farklı kesişim noktalarını tek nokta sanmak, kenar yarısı ile köşegen yarısını karıştırır."
      },
      {
        "title": "Paralelkenarda alan",
        "text": "Paralelkenarın alanı a·ha=b·hbdir. Eğik yan kenar h yerine kullanılamaz; iki komşu kenar ve aralarındaki α açısı verilirse a·b·sin α biçimi kullanılabilir. Bir köşegen paralelkenarı iki eş alanlı üçgene böler. E karşı kenarın üzerindeyse AEB üçgeninin tabanı AB, yüksekliği paralelkenarın yüksekliğidir; alanı toplamın yarısıdır. 145. sayfadaki iç K noktası için karşı kenarlara dayanan iki üçgenin alan toplamı yine paralelkenarın yarısını verir; Knin tam ortada olması gerekmez. Örneğin tabanı 12 ve yüksekliği 5 olan paralelkenarın alanı 60tır. İçteki K için ADK+ BCK alanları toplamı 30, AKB+DKC toplamı da 30dur; her tek üçgenin 15 olması gerekmez. 146. sayfadaki α=30°, kenarlar 8 ve 10 örneğine aynı kuralı uygularsan alan 8·10·1/2=40 bulunur. Sayfanın orta noktalı şekillerindeki S katsayıları ortak yükseklik ve yarı tabanlarla adım adım kurulabilir. Bütün bölgelere aynı alanı atamak yerine her renkli parçanın hangi üçgenin yarısı olduğunu göster. Katsayıların toplamı, parçaladığın bütünün alanını vermelidir."
      },
      {
        "title": "Eşkenar dörtgen",
        "text": "Eşkenar dörtgen, bütün kenarları eşit bir paralelkenardır; paralelkenarın bütün özelliklerini taşır. Ek olarak köşegenleri birbirine diktir ve köşe açılarını ikiye böler. Köşegenler yine birbirini ortalar; kesişimden köşelere giden dört parça iki ayrı yarı köşegen uzunluğudur. Köşegenlerin kendileri genel olarak eşit değildir; eşitlik kareye özgü ek bir durumdur. Kitaptaki diklik kutucuğu ve açıortay yayları birbirinden farklı iki sonuç gösterir. Dörtgeni eğik çizmek bu koşulların yerine geçmez. Köşegenler 12 ve 16 ise alan 12·16/2=96dır. Yarı köşegenler 6 ve 8 olduğundan bir kenar √(6²+8²)=10; çevre 40 olur. Alanı taban·yükseklik olarak da yazarsan 10·h=96dan h=9,6 bulunur. Bu yükseklik yan kenar uzunluğu 10dan farklıdır. Sayfadaki eş yükseklikler, eş taban uzunluklarına ait aynı alanın sonucudur. 60°lik açı varsa köşegenin ayırdığı parçalar 30°–30° olur; köşegenin açıortaylığı tüm paralelkenarlara ait bir özellik değildir. Önce eşkenar dörtgen koşulunu doğrula, sonra bu ek özellikleri kullan."
      }
    ],
    "memory": "Paralelkenar alanı taban·dik yükseklik. Eşkenar dörtgen alanı köşegenlerin çarpımının yarısıdır.",
    "question": {
      "stem": "Köşegen uzunlukları 12 ve 16 birim olan eşkenar dörtgenin alanı kaç birimkaredir?",
      "options": [
        "48",
        "80",
        "96",
        "192"
      ],
      "answer": 2,
      "explanation": "Eşkenar dörtgenin köşegenleri diktir. Alan köşegen çarpımının yarısıdır: 12·16/2=96."
    },
    "cards": [
      {
        "front": "Paralelkenarın köşegenleri mutlaka eşit mi?",
        "back": "Hayır; birbirlerini ortalarlar. Eşit uzunluk dikdörtgen gibi ek koşullar ister."
      },
      {
        "front": "Eşkenar dörtgende köşegenler?",
        "back": "Birbirini dik ortalar ve ait oldukları köşe açılarını ikiye böler."
      }
    ],
    "source": {
      "book": "TYT-mat",
      "page": 144
    }
  },
  {
    "id": "mat-tyt-geo-10",
    "subject": "matematik",
    "exam": "TYT",
    "title": "Dikdörtgen, kare ve deltoidi ayır",
    "unit": "Özel dörtgenler",
    "minutes": 14,
    "tags": [
      "dikdörtgen",
      "kare",
      "deltoid",
      "köşegen"
    ],
    "summary": "Dikdörtgende eş köşegen, karede eş ve dik köşegen, deltoidde ise bir köşegenin ötekini dik ortalaması farklı bilgileri anlatır.",
    "visual": {
      "type": "compare",
      "nodes": [
        {
          "label": "Dikdörtgen",
          "detail": "Bütün açılar 90°; alan iki komşu kenarın çarpımıdır."
        },
        {
          "label": "Kare",
          "detail": "Dört eş kenar ve dört dik açı; köşegen a√2dir."
        },
        {
          "label": "Deltoid",
          "detail": "İki çift komşu kenar eşit; simetri köşegeni ve dik köşegen alanı kullanılır."
        }
      ]
    },
    "sections": [
      {
        "title": "Dikdörtgende açı, uzunluk ve alan",
        "text": "Dikdörtgen, bir açısı dik olan paralelkenardır; böylece bütün açıları 90° olur. Karşı kenarları eşit, köşegenleri eş uzunluktadır ve köşegenler birbirini ortalar. Kesişim O ise OA=OB=OC=ODdir. Alan iki komşu kenarın çarpımı, çevre 2(a+b)dir. Bir köşegen, dik kenarları a ve b olan dik üçgenin hipotenüsü olduğundan uzunluğu √(a²+b²) olur. Köşegenlerin eş olması birbirine dik oldukları anlamına gelmez; diklik ancak kare gibi ek koşulla ortaya çıkar. 148. sayfadaki örnekte AC üzerinde AE=8, EC=2 ve BE⊥ACdir. B dik köşesinden inen yükseklik için BE²=8·2=16; karşı köşeden indirilen DK de 4 olur. Yardımcı eş üçgenler AK=2, KE=6 verdiğinden DE²=4²+6²=52 ve DE=2√13tür. 149. sayfada üst kenardaki E için AEB alanı dikdörtgenin yarısıdır. Köşegenlerin kesişiminde ise dört küçük üçgenin alanları eşittir; 8×6 dikdörtgende her biri 48/4=12 olur. E harfi her modelde farklı görevdedir; bir çizimin koşulunu ötekine taşımadan yeniden oku."
      },
      {
        "title": "Kare",
        "text": "Kare dört kenarı eşit bir dikdörtgendir; hem dikdörtgenin hem eşkenar dörtgenin özelliklerini taşır. Bu nedenle köşegenleri eşit uzunlukta, birbirine dik ve birbirini ortalayan doğru parçalarıdır. Her köşegen, geçtiği 90°lik köşe açısını iki 45°lik açıya böler. Sayfadaki bütün bu işaretler birlikte kareye aittir; yalnız köşegenlerin dik olması kareyi kanıtlamaz. Örneğin köşegenleri farklı uzunluktaki bir eşkenar dörtgen de dik köşegenlidir. Hangi özelliklerin hangi sınıftan geldiğini ayırmak özel dörtgen sorularını kısaltır. Bir kenarı a olan karenin alanı a², çevresi 4a ve köşegeni a√2dir. Köşegen d verilirse a=d/√2 ve alan d²/2 olur. Örneğin köşegeni 8 olan karenin alanı 64/2=32, kenarı 4√2dir. Alanı 50 olan karenin kenarı 5√2, köşegeni 10dur. Kitaptaki yardımcı üçgenlerde eşlik aranırken kare kenarlarının eşliği ve 90°−α tamamlamaları kullanılabilir; E ve Fnin nerede olduğu ayrıca okunmalıdır. Kare dışındaki bir dış noktayı, yalnız çizimde kenarın devamına yakın diye doğrusal kabul etme. Verilen doğrusalık veya şekil üzerindeki bağlanmayı açıkça izle."
      },
      {
        "title": "Deltoid",
        "text": "AB=AD ve CB=CD olan deltoidde A ile C noktaları B ve Dye eşit uzaklıktadır. Bu nedenle AC doğrusu BDnin orta dikmesidir; BDyi dik keser ve iki eş parçaya böler. AC aynı zamanda A ve C köşelerindeki açıları ikiye böler; B ve D açıları da eşittir. Ancak BDnin ACyi ortalaması genel bir zorunluluk değildir. İki köşegenin birbirini karşılıklı ortalamasını deltoide otomatik taşımak, onu gereksiz yere paralelkenar saymak olur. Sayfadaki K işaretleri yalnız BDnin iki parçasını eşitler. Köşegenler dik olduğundan dışbükey deltoidin alanı AC·BD/2dir. AC=18, BD=10 ise alan 90 olur; ACnin iki parçaya nasıl bölündüğünü ayrıca bilmek gerekmez. Sayfanın örneğinde ABCD yamuk, E noktası AD üzerinde ve DEBC deltoiddir. DC=DE=6 ve AE=4 olduğundan AD=10dur. Deltoidin açıortayı ile AB // DC paralelliği birlikte ABDyi ikizkenar yapar; AB=AD=10 bulunur. Burada AB=AD sonucu yalnız herhangi bir deltoidin özelliği değildir; E konumu ve yamuktaki paralellik de kullanılır. Birleşik şekillerde her adımın hangi alt şekle ait olduğunu belirt."
      }
    ],
    "memory": "Dikdörtgende köşegenler eşit; karede ayrıca dik. Deltoidde simetri köşegeni ötekini dik ortalar.",
    "question": {
      "stem": "Bir karenin köşegen uzunluğu 10 birimdir. Alanı kaç birimkaredir?",
      "options": [
        "25",
        "50",
        "100",
        "200"
      ],
      "answer": 1,
      "explanation": "Karede köşegen a√2dir. Alan a²=d²/2=100/2=50dir."
    },
    "cards": [
      {
        "front": "Dikdörtgenin köşegenleri dik midir?",
        "back": "Genel olarak hayır; eşittir ve birbirlerini ortalar. Karede ek olarak diktir."
      },
      {
        "front": "Deltoidde hangi köşegen ötekini ortalar?",
        "back": "Eş komşu kenarların birleştiği iki köşeyi bağlayan simetri köşegeni, diğerini dik ortalar."
      }
    ],
    "source": {
      "book": "TYT-mat",
      "page": 148
    }
  },
  {
    "id": "mat-tyt-geo-11",
    "subject": "matematik",
    "exam": "TYT",
    "title": "Prizma, küp ve piramitte ölçü",
    "unit": "Katı cisimler",
    "minutes": 16,
    "tags": [
      "dik prizma",
      "küp",
      "piramit",
      "düzgün dört yüzlü"
    ],
    "summary": "Açınım yüzey alanını, taban ile dik yükseklik hacmi belirler; yüz köşegeni, cisim köşegeni ve yan yüz yüksekliği farklı uzunluklardır.",
    "visual": {
      "type": "compare",
      "nodes": [
        {
          "label": "Prizma",
          "detail": "Dik prizmada yan yüzler dikdörtgen; yan ayrıtlar yüksekliktir."
        },
        {
          "label": "Küp",
          "detail": "Alan 6a², hacim a³; yüz köşegeni a√2, cisim köşegeni a√3."
        },
        {
          "label": "Piramit",
          "detail": "Üçgensel yan yüzleri aç; hacimde taban düzlemine dik yüksekliği kullan."
        }
      ]
    },
    "sections": [
      {
        "title": "Dik prizmalar; ayrıt ve yüzey sayıları",
        "text": "Dik prizmanın iki tabanı eş ve paralel çokgensel bölgelerdir. Karşılıklı köşeleri birleştiren yanal ayrıtlar tabanlara diktir ve yükseklik uzunluğunu verir. Yanal yüzler dikdörtgendir; tabanın düzgün çokgen olması ek olarak düzgün prizma adını getirir. n kenarlı taban için iki tabanda 2n ayrıt ve arada n yanal ayrıt bulunur: toplam 3n. Yüz sayısı n yan yüz ile iki tabandan n+2dir. 153. sayfadaki üçgen prizmada 9 ayrıt, 5 yüz; altıgen prizmada 18 ayrıt, 8 yüz görülür. Açınımda yan dikdörtgenlerin yükseklikleri aynı h, tabanları çokgenin kenarlarıdır. Bu yüzden yanal alan taban çevresi·h; toplam alan iki taban alanı ile yanal alanın toplamıdır. Örneğin tabanı kenarları 3,4,5 olan dik üçgen ve yüksekliği 10 olan dik prizmada taban alanı 6, çevre 12dir. Yanal alan 120, toplam alan 120+12=132 olur. Aynı taban alanı ve dik yükseklikle hacim 6·10=60tır. Açınımdaki yüzlerin alanını toplarken ortak ayrıtları yüz sanma; ayrıt uzunluğu, yüzey alanı ve hacim farklı boyutlu ölçülerdir."
      },
      {
        "title": "Küp ve küpün açınımları",
        "text": "Küp bütün ayrıtları eşit bir dikdörtgenler prizmasıdır. Bir ayrıt a ise altı kare yüzün toplam alanı 6a², hacim a³tür. Bir yüzün iki karşı köşesini birleştiren yüz köşegeni kare içindedir ve a√2 uzunluğundadır. Cisim köşegeni ise bir köşeden aynı yüz üzerinde olmayan karşı köşeye uzanır; tabandaki a√2 ile düşey adan oluşan dik üçgenle uzunluğu a√3 bulunur. Yüzün üzerinde görülen çizgiyle iç hacimden geçen çizginin uç noktalarını okuyarak hangisinin istendiğini seç. Örneğin a=4 ise alan 96, hacim 64, yüz köşegeni 4√2 ve cisim köşegeni 4√3tür. Cisim köşegeni 6√3 verilirse ayrıt 6, hacim 216dır. Alanın 216 olması gerektiğini sanmak ölçü türlerini karıştırmaktır; bu örnekte alan da 216 çıkabilir ama eşitlik yalnız sayısal rastlantıdır. Açınım sorularında altı karenin bağlantıları hangi yüzlerin komşu veya karşı olduğunu belirler. Düzlemde yan yana olmayan iki kare katlanınca komşu olabilir. Bir yüzü sabit tutup çevresindekileri zihinde 90° döndürerek takip et; açınımın düzlemdeki uzaklığını küp üzerindeki uzaklık sanma."
      },
      {
        "title": "Dik piramit; düzgün dört yüzlü ve hacim",
        "text": "Piramitte bir taban ve ortak tepeye bağlanan üçgensel yan yüzler vardır. Taban düzlemine dik yükseklik, yan ayrıt veya yan yüzün yüksekliğiyle aynı değildir. Düzgün dik piramitte yan yüzler eş ikizkenar üçgenlerdir; yanal alan taban çevresi·yan yüz yüksekliği/2, toplam yüzey alanı buna taban alanı eklenerek bulunur. Örneğin kare taban kenarı 6, dik yükseklik 4 ise yan yüz yüksekliği √(4²+3²)=5tir. Yanal alan 24·5/2=60, toplam alan 60+36=96 olur. 156. sayfanın parçalama modeli piramit hacmindeki 1/3 çarpanını açıklar: aynı taban alanı ve aynı dik yükseklikte prizmanın hacminin üçte biri alınır. Önceki kare piramidin hacmi 36·4/3=48dir. Tüm yüzleri eşkenar üçgen olan düzgün dört yüzlüde ayrıt a, yan yüz yüksekliği a√3/2, cisim yüksekliği a√6/3 ve yüzey alanı a²√3tür. Kaynaktaki a=6 örneğinde taban alanı 9√3, dik yükseklik 2√6; hacim (9√3·2√6)/3=18√2 bulunur. Yanal yüz yüksekliğini hacimde kullanmak farklı bir sonuç verir; iki yükseklik türünü ayrı işaretle."
      }
    ],
    "memory": "Prizma V=taban alanı·h; piramit V=taban alanı·h/3. Dik yükseklik yan ayrıt değildir.",
    "question": {
      "stem": "Kare tabanlı bir dik piramidin taban kenarı 6 birim, taban düzlemine dik yüksekliği 4 birimdir. Hacmi kaç birimküptür?",
      "options": [
        "24",
        "48",
        "72",
        "144"
      ],
      "answer": 1,
      "explanation": "Taban alanı 6²=36. Hacim 36·4/3=48dir. Verilen 4, dik yükseklik olduğundan doğrudan kullanılır."
    },
    "cards": [
      {
        "front": "Küpün yüz ve cisim köşegenleri?",
        "back": "Ayrıt a için yüz köşegeni a√2, cisim köşegeni a√3."
      },
      {
        "front": "Piramit hacminde hangi yükseklik kullanılır?",
        "back": "Tepe noktasından taban düzlemine dik uzaklık; yan yüz yüksekliği değildir."
      }
    ],
    "source": {
      "book": "TYT-mat",
      "page": 152
    }
  },
  {
    "id": "mat-ayt-geo-01",
    "subject": "matematik",
    "exam": "AYT",
    "title": "Noktadan doğruya analitik geometri",
    "unit": "Analitik düzlem ve doğru",
    "minutes": 20,
    "tags": [
      "analitik geometri",
      "eğim",
      "doğru denklemi",
      "uzaklık"
    ],
    "summary": "Koordinatlar geometriyi denkleme dönüştürür: uzaklık, bölme oranı ve eğimle doğruyu kur; uzaklık hesabında dik yönü ve mutlak değeri koru.",
    "visual": {
      "type": "compare",
      "nodes": [
        {
          "label": "Nokta",
          "detail": "Koordinat farkları uzaklığı, ağırlıklı ortalamaları bölme noktasını verir."
        },
        {
          "label": "Doğru",
          "detail": "İki nokta veya nokta ile eğim, doğruyu belirler; düşey durumda x sabittir."
        },
        {
          "label": "Konum ve uzaklık",
          "detail": "Paralellik, diklik ve dik uzaklık cebirsel koşullarla denetlenir."
        }
      ]
    },
    "sections": [
      {
        "title": "Analitik düzlem; iki nokta arası uzaklık",
        "text": "Dik koordinat sisteminde ilk koordinat apsis x, ikinci koordinat ordinat ydir. Eksenler üzerindeki noktalarda sırasıyla y=0 veya x=0 olur; eksenler bir bölgeye ait sayılmaz. Noktanın x eksenine uzaklığı |y|, y eksenine uzaklığı |x|tir; hangi koordinatın sıfıra indirildiğini düşün. İkinci bölgede x<0, y>0; dördüncü bölgede x>0, y<0dır. Koordinatın işaretli olması uzaklığın negatif olması demek değildir. Kitaptaki kesik izdüşüm çizgileri hangi eksene ne kadar dik gidildiğini gösterir. 100. sayfada A(x1,y1) ile B(x2,y2) arasında yatay fark x2−x1, düşey fark y2−y1 alınır. Pisagorla AB=√[(x2−x1)²+(y2−y1)²] bulunur. Örneğin A(−2,1), B(4,9) için farklar 6 ve 8; uzaklık 10dur. Apsisler eşitse yalnız ordinat farkının mutlak değeri kalır: (3,−4) ve (3,5) arası 9dur. Noktaları ters sırada çıkarınca farkların işareti değişir, kareleri değişmez. Uzaklık formülü düzlemde iki nokta arasındaki doğru parçasını ölçer; yatay ve düşey yol uzunluklarının toplamını değil."
      },
      {
        "title": "İçten ve dıştan bölme; orta nokta ve ağırlık merkezi",
        "text": "Bir doğru parçasını içten bölen C için AC:CB=m:n ise C=(nA+mB)/(m+n) koordinat koordinat hesaplanır. Katsayının karşı uçla eşleştiğini fark et: A tarafındaki parça küçükse C, Aya daha yakındır ve A koordinatının ağırlığı daha büyüktür. Kitabın k=AC/BC gösteriminde C=((x1+kx2)/(1+k),(y1+ky2)/(1+k)) olur. Dıştan bölmede C, doğru üzerinde fakat parça dışındadır; payda toplama yerine fark içerir. k=1 için sonlu dış bölme noktası yoktur; sıfır paydası görmezden gelinemez. Örneğin A(0,2), B(6,8) ve AC:CB=1:2 ise C=((2·0+6)/3,(2·2+8)/3)=(2,4)tür. Orta noktada oran 1:1, koordinatlar aritmetik ortalamadır: M((x1+x2)/2,(y1+y2)/2). Paralelkenarda köşegen orta noktaları aynı olduğundan A+C=B+D koordinat eşitliği yazılır. A(0,0), B(4,1), C(6,5) ardışık köşeler ise D=A+C−B=(2,4)tür. Üçgenin ağırlık merkezi ise üç köşe koordinatının ortalamasıdır. (0,0),(6,0),(0,9) üçgeninde G=(2,3) bulunur; bu formül yalnız köşelerin koordinatlarını kullanır."
      },
      {
        "title": "Doğrunun eğimi; özel doğru denklemleri",
        "text": "Düşey olmayan doğru için m=(y2−y1)/(x2−x1)=tan αdır. Aynı çıkarma sırasını pay ve paydada koru. y=mx+n biçiminde m eğimdir; ax+by+c=0 biçiminde b≠0 ise m=−a/b olur. Düşey doğru x=a için eğim tanımsız, yatay doğru y=b için sıfırdır. A(x1,y1) noktasından geçen eğimi m olan doğru y−y1=m(x−x1)dir. İki nokta verilirse önce eğimi hesapla; apsisler eşitse bölmek yerine doğrudan x=x1 yaz. Örneğin (1,3) ve (4,9) noktaları için m=6/3=2, denklem y−3=2(x−1), yani y=2x+1 olur. Her iki nokta da denklemi sağlar; bu son kontrol yanlış işareti yakalar. Eksenleri (6,0) ve (0,3) noktalarında kesen doğru x/6+y/3=1, yani x+2y=6 biçimindedir. Kesişim formunda a ve b sıfır olmamalıdır. Orijinden geçen doğru için y=mx daha uygundur; iki eksen kesişimi de orijine denk gelirse iki ayrı nokta elde edilmez. Bir çizimde dik görünen doğruyu, denkleminin eğimini veya eksenlere paralelliğini okumadan tanımlama."
      },
      {
        "title": "Doğrunun grafiği, doğruların durumları ve uzaklık",
        "text": "Bir doğrunun grafiği iki farklı noktadan çizilir. İki doğruyu karşılaştırırken denklemleri ortak çözüp tek nokta, çözüm yok veya sonsuz çözüm sonuçlarını ayır. Eğimleri eşit doğrular paralel ya da çakışık olabilir; sabit terim de eşse çakışıktırlar. Sonlu eğimleri olan iki dik doğru için m1·m2=−1dir; yatay–düşey çiftinde eğim çarpımı yerine doğrudan diklik kullanılır. Katsayı oranlarında sıfıra bölme riski varsa denklem sistemini veya çapraz çarpımı tercih et. A(x0,y0) noktasının ax+by+c=0 doğrusuna dik uzaklığı |ax0+by0+c|/√(a²+b²)dir; a ve b aynı anda sıfır olamaz. A(1,2), 3x+4y−6=0 için uzaklık |3+8−6|/5=1dir. Paralel doğruların a,b katsayıları aynı yapıldıktan sonra uzaklık |c1−c2|/√(a²+b²) olur. 3x+4y−6=0 ile 6x+8y+8=0 arasında önce ikinciyi ikiye böl: 3x+4y+4=0. Uzaklık |−6−4|/5=2 bulunur. Sabit terimleri ilk hâlleriyle çıkarmak eşdeğer ölçekleri karıştırır. Mutlak değer geometrik uzaklığın negatif çıkmasını önler."
      }
    ],
    "memory": "m=Δy/Δx; düşey doğru için eğim tanımsız. Nokta–doğru uzaklığı |ax0+by0+c|/√(a²+b²).",
    "question": {
      "stem": "A(1,2) noktasının 3x+4y−6=0 doğrusuna uzaklığı kaç birimdir?",
      "options": [
        "1",
        "2",
        "3",
        "5"
      ],
      "answer": 0,
      "explanation": "Pay |3·1+4·2−6|=5, payda √(3²+4²)=5. Uzaklık 5/5=1 birimdir."
    },
    "cards": [
      {
        "front": "Düşey doğrunun eğimi?",
        "back": "Tanımsızdır; x sabit olduğu için Δx=0 olur."
      },
      {
        "front": "Paralel doğruların uzaklığında ilk adım?",
        "back": "x ve y katsayılarını aynı ölçeğe getir; sonra sabit terim farkının mutlak değerini √(a²+b²)ye böl."
      }
    ],
    "source": {
      "book": "AYT-mat",
      "page": 99
    }
  },
  {
    "id": "mat-ayt-geo-02",
    "subject": "matematik",
    "exam": "AYT",
    "title": "Dönüşümlerde noktayı adım adım taşı",
    "unit": "Dönüşümler",
    "minutes": 18,
    "tags": [
      "öteleme",
      "dönme",
      "simetri",
      "bileşke"
    ],
    "summary": "Öteleme, dönme ve simetride yönü ve merkezi açıkça seç; bileşkede her dönüşüm önceki adımın görüntüsüne uygulanır.",
    "visual": {
      "type": "compare",
      "nodes": [
        {
          "label": "Öteleme",
          "detail": "(a,b) vektörü bütün noktalara aynı koordinat farkını ekler."
        },
        {
          "label": "Dönme",
          "detail": "Merkez, açı ve yön gerekir; pozitif yön saat yönünün tersidir."
        },
        {
          "label": "Yansıma ve bileşke",
          "detail": "Simetri doğrusu iki görüntü arasındaki parçanın orta dikmesidir; işlem sırası korunur."
        }
      ]
    },
    "sections": [
      {
        "title": "Öteleme dönüşümü",
        "text": "Öteleme bütün noktaları aynı doğrultu, yön ve miktarda taşır. Sağa a birim öteleme x koordinatına a ekler; sola a birim öteleme a çıkarır. Yukarı b birim yye b ekler, aşağı b birim b çıkarır. Genel kural (x,y)→(x+a,y+b)dir; a ve b yönü belirten işaretli bileşenler olarak da kullanılabilir. Yalnız yatay ötelemede y, yalnız düşey ötelemede x değişmez. Eksenin negatif tarafında olmak taşımanın yönünü tersine çevirmez. Örneğin A(−2,5) noktasını 4 birim sağa ve 7 birim aşağı taşırsan A′=(−2+4,5−7)=(2,−2) bulunur. Başlangıç ile görüntü farkı (4,−7)dir. Şeklin her köşesine aynı fark uygulandığı için kenar uzunlukları, açı ölçüleri, alan ve çevre korunur. Bir doğruyu taşırken üzerinde iki nokta seçip ikisini de aynı vektörle taşıyabilirsin. y=2x doğrusunu 3 birim sağa ötelersen yeni denklem y=2(x−3) olur; noktanın xine +3 eklemekle denklemde x yerine x−3 yazmak farklı roller taşır. Görüntü noktasıyla başlangıç noktasını ayırarak bunu denetle."
      },
      {
        "title": "Dönme dönüşümü",
        "text": "Dönme merkezi orijin, açı α ve pozitif yön saat yönünün tersi olduğunda (x,y) noktası (x cos α−y sin α, x sin α+y cos α)ya gider. Bu formül noktanın orijine uzaklığını korur. Özel açılarda pozitif 90° dönüşüm (−y,x), 180° dönüşüm (−x,−y), 270° dönüşüm (y,−x) verir. Saat yönünde 90° ise pozitif 270° ile aynı sonuçtur. Merkez başka bir nokta olduğunda bu kuralları koordinatlara doğrudan uygulamak merkezi yanlış seçmek olur. Örneğin P(2,−3), orijin etrafında pozitif 90° dönünce (3,2) olur; her iki noktanın uzaklık karesi 13tür. Merkez C(1,1) ise önce P−C=(1,−4), sonra pozitif 90° ile (4,1), son olarak merkezi ekleyip P′=(5,2) bulursun. Dönme, uzunluk ve açı büyüklüklerini korur; her noktanın yeri sabit kalmaz. 360°nin tam katı olmayan bir düzlem dönmesinde yalnız merkez sabittir. 360° dönüşüm ise bütün noktaları başlangıcına döndürür; sayfadaki sabit merkez ifadesini bu özdeş dönüşüm istisnasıyla birlikte oku."
      },
      {
        "title": "Simetri dönüşümü",
        "text": "Noktaya göre simetride merkez B(a,b), A ile A′nın orta noktasıdır; bu yüzden A′=(2a−x,2b−y) olur. Orijine göre simetri (−x,−y)dir. Doğruya göre simetride ise doğru AA′ parçasının orta dikmesidir. x eksenine yansımada (x,−y), y eksenine yansımada (−x,y), y=x doğrusuna yansımada (y,x) elde edilir. Eksen simetrisinde eksen üzerinde kalan koordinat sabittir. İki koordinatı birden değiştirmek eksen yansıması yerine orijine göre simetri yapar. 113. sayfada genel doğruya yansıma için önce Adan doğruya dik çizilir, dikme ayağı K bulunur, ardından A′=2K−A yazılır. A(3,1)in x+y=0a yansımasında dik doğru y=x−2dir; ortak çözüm K(1,−1), görüntü (−1,−3) olur. K gerçekten orta nokta, AA′ da simetri doğrusuna diktir. Yatay veya düşey simetri doğrusunda eğim oranları sıfıra bölme yaratabilir; doğrudan aynı apsis/ordinatla dikme ayağını seç. Bir doğrunun noktaya göre görüntüsünü bulurken üzerindeki iki noktayı yansıtabilir veya denklemde ters dönüşüm yerleştirebilirsin; merkez doğru üzerindeyse görüntü doğrusu kendisiyle çakışır."
      },
      {
        "title": "Temel dönüşümlerin bileşkesi; doğada ve mimaride dönüşümler",
        "text": "Bileşke dönüşümde birden fazla işlem sırayla uygulanır. Öteleme ile dönme veya öteleme ile doğruya göre simetri birlikte kullanılabilir. Her bir temel dönüşüm uzaklığı koruduğu için bileşke de uzunlukları, çevreyi ve alanı korur. Doğruya göre yansıma yönelimi tersine çevirir; bu, açıların büyüklüğünün değiştiği anlamına gelmez. Mimari süslemede aynı motifin art arda taşınması ötelemeyi, merkez çevresinde yinelenmesi dönmeyi, ayna eşleri ise doğruya göre simetriyi düşündürür. Görsel benzerlikte önce hangi eşleşmenin tek bir kuralla yapılabildiğini araştır. İşlem sırası genellikle sonucu değiştirir. P(1,2) önce 3 birim sağa taşınırsa (4,2), sonra orijin çevresinde pozitif 90° dönünce (−2,4) olur. Önce döndürürsen (−2,1), sonra 3 sağa taşıyınca (1,1) elde edilir. İki sonuç eşit değildir. Bu yüzden sorudaki “önce” ve “sonra” sözcüklerini koordinat zinciri olarak yaz. Dönüşümleri birden zihinden uygulamak yerine her görüntüyü P′, P″ diye adlandırmak işaret hatasını azaltır. Noktanın orijine uzaklığı ötelemede değişebilir; korunan, aynı şeklin iki noktası arasındaki uzaklıktır. Dönmede ayrıca merkeze uzaklık da korunur."
      }
    ],
    "memory": "Orijin çevresinde pozitif 90°: (x,y)→(−y,x). Nokta simetrisinde merkez iki görüntünün orta noktasıdır.",
    "question": {
      "stem": "P(1,2) noktası önce 3 birim sağa öteleniyor, sonra orijin etrafında saat yönünün tersine 90° döndürülüyor. Son görüntüsü nedir?",
      "options": [
        "(−2,4)",
        "(2,−4)",
        "(1,1)",
        "(−4,2)"
      ],
      "answer": 0,
      "explanation": "Ötelemeden sonra (4,2) elde edilir. Pozitif 90° dönme (x,y)→(−y,x) olduğundan görüntü (−2,4)tür."
    },
    "cards": [
      {
        "front": "Bir noktaya göre simetrinin merkezini nasıl kontrol ederiz?",
        "back": "Başlangıç ile görüntünün orta noktasını alırız; verilen merkez çıkmalıdır."
      },
      {
        "front": "Bileşkede sıra değişebilir mi?",
        "back": "Genellikle hayır; her adımı önceki görüntüye ve verilen sırayla uygula."
      }
    ],
    "source": {
      "book": "AYT-mat",
      "page": 109
    }
  },
  {
    "id": "mat-ayt-geo-03",
    "subject": "matematik",
    "exam": "AYT",
    "title": "Çemberde kiriş, yay ve açı",
    "unit": "Çember ve dairede temel ilişkiler",
    "minutes": 17,
    "tags": [
      "çember",
      "kiriş",
      "merkez açı",
      "çevre açı"
    ],
    "summary": "Önce açının köşesini bul: merkezde, çemberde, içeride veya dışarıda olması yaylarla kurulacak ilişkiyi değiştirir.",
    "visual": {
      "type": "compare",
      "nodes": [
        {
          "label": "Kiriş ve uzaklık",
          "detail": "Merkezden kirişe dikme kirişi ortalar; uzun kiriş merkeze daha yakındır."
        },
        {
          "label": "Merkez ve çevre",
          "detail": "Aynı yayı gören merkez açı çevre açının iki katıdır."
        },
        {
          "label": "İç ve dış açı",
          "detail": "İçte karşı iki yayın toplamının yarısı, dışta büyük-küçük yay farkının yarısı kullanılır."
        }
      ]
    },
    "sections": [
      {
        "title": "Çember ve daire; çemberin temel elemanları",
        "text": "Çember sabit O merkezinden r uzaklıktaki noktaların kümesidir; iç bölge de eklenince daire elde edilir. İki çember noktasını birleştiren doğru parçası kiriştir. Merkezden geçen kiriş çaptır ve uzunluğu 2rdir. Bir yay için derece cinsinden ölçü ile uzunluk farklı kavramlardır. 116. sayfanın 360° ifadesi tam yayın açısal ölçüsüdür; çevre uzunluğu dereceyle ölçülmez. Aynı açısal ölçüye sahip iki yayın uzunlukları yarıçaplar farklıysa farklı olabilir. Üç harfli yay gösterimindeki orta nokta hangi yayın seçildiğini belirtir. 117. sayfada merkezden doğruya indirilen dikmenin uzunluğu h ile yarıçap r karşılaştırılır. h<r ise doğru iki noktada keser; h=r ise tek noktada teğettir; h>r ise ortak nokta yoktur. Teğet noktasına çizilen yarıçap doğruya diktir. Örneğin yarıçap 5, merkez–doğru uzaklığı 3 ise iki kesişim vardır; uzaklık 5 olursa teğetlik, 6 olursa kesişmeme oluşur. Teğeti çizimde çembere değiyor gibi görünmesinden değil verilen teğetlik veya h=r koşulundan tanı. Diklik işareti, uzaklık ile rastgele merkeze bağlanan eğik parçayı ayırır."
      },
      {
        "title": "Çemberde kiriş özellikleri; merkez açı ve çevre açı",
        "text": "Merkezden kirişe indirilen dikme kirişi ortalar. Merkez, yarı kiriş ve dik uzaklık bir dik üçgen oluşturur: yarı kiriş uzunluğu √(r²−h²)dir. Aynı çemberde eş kirişler merkeze eşit uzaklıkta; daha uzun kiriş daha yakındır. Örneğin r=13 ve h=5 ise yarı kiriş √(169−25)=12, tüm kiriş 24tür. Uzaklığı 12 olan başka kiriş ise 2√(169−144)=10 olur. Bu karşılaştırmada çemberin yarıçapı sabittir; farklı yarıçaplı çemberlerin kirişlerini yalnız hye bakarak sıralayamazsın. 119. sayfada merkez açı gördüğü yayın ölçüsüne, çevre açı ise köşesini içermeyen gördüğü yayın yarısına eşittir. A ve B uçlarını gören C çevre açısı için Cnin üzerinde bulunduğu yay değil karşı taraftaki AB yayı seçilir. Bu yay 140° ise ACB=70°dir; aynı yayı gören AOB merkez açısı 140°dir. AB çap olduğunda Cnin görmediği yarım çember 180° olduğundan çevre açı 90° olur. Tersine her çizimde AB çap kabul edilmez; Onun AB üzerinde olduğu veya ABnin çap olduğu bilinmelidir. Aynı yayı gören çevre açıların eşitliği farklı köşelerdeki açıları eşleştirir."
      },
      {
        "title": "Çemberde teğet-kiriş açı ve iç-dış açı",
        "text": "Teğet-kiriş açının bir kolu teğet, diğeri kiriştir; ölçüsü seçilen açının gördüğü yayın yarısıdır. Aynı yayı gören çevre açıyla eşittir. İçeride kesişen iki kirişin oluşturduğu açı için ise o açının ve ters açısının gördüğü iki yayın ölçüleri toplanıp ikiye bölünür. 120. sayfadaki AEC açısı için AC ve BD yayları kullanılır. Karşılıklı açılar kesişen doğruların ters açılarıdır; bu eşitlik, kaynaktaki parantezdeki adlandırmadan bağımsız olarak doğru kesişim kuralından gelir. Örneğin içteki açı ile ters açının gördüğü yaylar 80° ve 120° ise açı (80+120)/2=100° olur. Dışarıdaki bir noktadan çıkan iki kesen için dış açı, uzak kesişimler arasındaki büyük yay ile yakın kesişimler arasındaki küçük yayın farkının yarısıdır. Bu yaylar 150° ve 50° ise açı 50°dir. Teğet–kesen ve iki teğet modellerinde de aynı fark mantığı işler. İki teğetin değme noktaları arasındaki küçük yay 110° ise dış açı 180−110=70° olur. Hangi yayın görüldüğünü açı kollarını çembere kadar izleyerek belirle; “içte topla, dışta çıkar” ezberi tek başına doğru yay çiftini seçmez."
      }
    ],
    "memory": "Merkez açı gördüğü yay kadar; çevre açı yayın yarısı. İçte yayları topla, dışta büyükten küçüğü çıkar ve ikiye böl.",
    "question": {
      "stem": "O merkezli çemberde AB küçük yayının ölçüsü 130°dir. C, ABnin büyük yayı üzerinde A ve Bden farklı bir noktadır. ACB çevre açısı kaç derecedir?",
      "options": [
        "50°",
        "65°",
        "130°",
        "230°"
      ],
      "answer": 1,
      "explanation": "C büyük yay üzerinde olduğundan ACB, Cyi içermeyen 130°lik küçük AByi görür. Çevre açı 130/2=65°dir."
    },
    "cards": [
      {
        "front": "Merkezden kirişe çizilen dikme ne yapar?",
        "back": "Kirişi ortalar; yarı kiriş, dik uzaklık ve yarıçap dik üçgen oluşturur."
      },
      {
        "front": "Çemberde dış açı hangi yaylarla bulunur?",
        "back": "Açı kollarının belirlediği büyük yaydan küçük yay çıkarılır ve fark ikiye bölünür."
      }
    ],
    "source": {
      "book": "AYT-mat",
      "page": 115
    }
  },
  {
    "id": "mat-ayt-geo-04",
    "subject": "matematik",
    "exam": "AYT",
    "title": "Teğetlerden daire dilimine",
    "unit": "Çemberde teğet ve dairede ölçü",
    "minutes": 14,
    "tags": [
      "teğet",
      "iç teğet",
      "sinüs teoremi",
      "daire dilimi"
    ],
    "summary": "Teğet parçalarının eşitliğini yarıçapın dikliğiyle birlikte kullan; daire diliminde yayın uzunluğu ile kapalı bölgenin çevresini ayır.",
    "visual": {
      "type": "compare",
      "nodes": [
        {
          "label": "Teğet",
          "detail": "Değme noktasına çizilen yarıçap diktir; aynı dış noktadan parçalar eşittir."
        },
        {
          "label": "Üçgenin çemberleri",
          "detail": "Çevrel merkez köşelere, iç merkez kenarlara eşit uzaklıktadır."
        },
        {
          "label": "Daire dilimi",
          "detail": "Yay ve alan α/360 payıyla bulunur; dilim çevresine iki yarıçap eklenir."
        }
      ]
    },
    "sections": [
      {
        "title": "Çemberde teğet; çevrel, iç teğet ve dış teğet çember",
        "text": "Çevrel çember üçgenin köşelerinden geçer; merkezi kenar orta dikmelerin kesişimidir. Sinüs teoremi a/sin A=b/sin B=c/sin C=2R biçimindedir. Örneğin A=30° karşısındaki kenar 6 ise 6/(1/2)=2R, dolayısıyla R=6 bulunur. İç teğet çember ise üç kenara teğettir ve merkezi iç açıortayların kesişimidir. Merkezden teğet noktalarına çizilen yarıçaplar kenarlara diktir. Çevrel yarıçap R ile iç teğet yarıçap r farklı büyüklüklerdir; hangi çemberin verildiğini belirlemeden oran kurma. Bir dış P noktasından çizilen PT ve PS teğet parçaları eşittir. OP=13 ve r=5 ise OTP dik üçgeninde PT=√(169−25)=12dir; PS de 12 olur. İç teğet çemberli üçgende her köşeden çıkan iki teğet parçası eşittir; kenar uzunlukları bu parçaların toplamlarıdır. Kenarları 13,14,15 olan üçgende yarı çevre 21; karşılık gelen teğet parçaları 21−13=8, 21−14=7, 21−15=6 olarak düzenlenebilir. Dış teğet çember bir kenara ve öteki iki kenarın uzantılarına teğettir; merkezi bir iç ve iki dış açıortayın kesişimidir. Uzantıdaki parçalarda toplam ile farkı noktaların sırasına göre kur."
      },
      {
        "title": "Dairenin ve daire diliminin çevresi ve alanı",
        "text": "Yarıçapı r olan çemberin çevre uzunluğu 2πr, dairenin alanı πr²dir. α derece merkez açılı yayın uzunluğu 2πr·α/360, daire diliminin alanı πr²·α/360 olur. İkisinde de tam dairenin aynı açısal payı alınır; fakat biri uzunluk, diğeri alandır. 125. sayfada dilimler yan yana dizildikçe yaklaşık tabanı πr ve yüksekliği r olan dikdörtgen oluşur; bu model πr² alanının nedenini açıklar. Dilim sayısını artırmak kıvrımları azaltır, dairenin alanını değiştirmez. Örneğin r=6, α=60° ise yayın uzunluğu 12π·1/6=2π, dilim alanı 36π·1/6=6πdir. Daire diliminin çevresi yalnız yay değildir; sınırdaki iki yarıçap da eklenir: 12+2π. Aynı açıda yarıçap iki katına çıkarsa yay ve çevre iki, alan dört katına çıkar. “Daire dilimi” ile bir kirişin kestiği daire parçasını ayır: dilimi iki yarıçap sınırlar, daire parçasını kiriş ile yay sınırlar. Kiriş sınırı olan alanda gerektiğinde merkez üçgeninin alanı dilimden çıkarılır; dilim formülü doğrudan her taralı bölgeyi vermez."
      }
    ],
    "memory": "Aynı dış noktadan teğet parçaları eşittir. Daire dilimi çevresi 2r+yay; alanı πr²·α/360°.",
    "question": {
      "stem": "Yarıçapı 6 birim, merkez açısı 60° olan daire diliminin çevresi kaç birimdir?",
      "options": [
        "2π",
        "6π",
        "12+2π",
        "12+6π"
      ],
      "answer": 2,
      "explanation": "Yay uzunluğu 2π·6·60/360=2πdir. Dilimin kapalı sınırı iki yarıçap ve yaydan oluşur: 6+6+2π=12+2π."
    },
    "cards": [
      {
        "front": "Çevrel ve iç teğet merkezleri?",
        "back": "Çevrel merkez kenar orta dikmelerin; iç teğet merkez iç açıortayların kesişimidir."
      },
      {
        "front": "Daire diliminin çevresi yalnız yay mıdır?",
        "back": "Hayır. Sınırdaki iki yarıçap da eklenir: 2r+yay uzunluğu."
      }
    ],
    "source": {
      "book": "AYT-mat",
      "page": 122
    }
  },
  {
    "id": "mat-ayt-geo-05",
    "subject": "matematik",
    "exam": "AYT",
    "title": "Çemberi denklemle incele",
    "unit": "Çemberin analitik incelenmesi",
    "minutes": 16,
    "tags": [
      "çember denklemi",
      "tam kare",
      "teğetlik",
      "diskriminant"
    ],
    "summary": "Standart denklemden merkez ve yarıçapı oku; genel denklemde tam kareye tamamla ve doğruyla konumu dik uzaklık üzerinden karşılaştır.",
    "visual": {
      "type": "compare",
      "nodes": [
        {
          "label": "Standart biçim",
          "detail": "Merkez (a,b), yarıçap r; parantezlerdeki işaretler merkeze ters görünür."
        },
        {
          "label": "Genel biçim",
          "detail": "x²+y²+Dx+Ey+F=0 için merkez (−D/2,−E/2)."
        },
        {
          "label": "Doğru ve çember",
          "detail": "Merkez–doğru dik uzaklığı ile yarıçapı veya ortak çözüm diskriminantını karşılaştır."
        }
      ]
    },
    "sections": [
      {
        "title": "Çemberin standart denklemi; özel çember denklemleri",
        "text": "Çemberin her P noktası merkez M(a,b)ye r uzaklıktadır. İki nokta arası uzaklığın karesinden (x−a)²+(y−b)²=r² elde edilir. (x+2)²+(y−3)²=25 denkleminde merkez (−2,3), yarıçap 5tir; sağ taraftaki 25 yarıçapın karesidir. Orijin merkezli çember x²+y²=r², merkezi x ekseni üzerinde olan çember (x−a)²+y²=r² biçimindedir. Merkezinin eksen üzerinde olması, çemberin o eksene teğet olduğu anlamına gelmez; merkez ile çember üzerindeki noktayı ayır. Eksenlere teğetlikte yarıçap merkezden eksene dik uzaklıktır. y eksenine teğetse r=|a|, x eksenine teğetse r=|b| olur. Merkez (−4,3) ve y eksenine teğetlik verilirse denklem (x+4)²+(y−3)²=16dır. Aynı merkezle x eksenine teğet çemberde sağ taraf 9 olur; bunlar farklı çemberlerdir. Her iki eksene teğetlik |a|=|b|=r gerektirir. Merkez ikinci bölgede ve r=2 ise M=(−2,2), denklem (x+2)²+(y−2)²=4tür. Bölge bilgisi merkez işaretlerini seçer. Kaynağın bölge gösterimindeki son örneği dördüncü bölge, yani (r,−r) olarak oku."
      },
      {
        "title": "Çemberin genel denklemi; çember ile doğrunun durumları",
        "text": "x²+y²+Dx+Ey+F=0 tam kareye tamamlanınca merkez (−D/2,−E/2), yarıçap karesi (D²+E²−4F)/4 bulunur. Bu sayı pozitifse gerçek çember, sıfırsa tek nokta, negatifse gerçek düzlemde boş kümedir. Genel ikinci derece denklemde çember için xy terimi bulunmamalı ve x²,y² katsayıları eşit, sıfırdan farklı olmalıdır; önce bu ortak katsayıya böl. Örneğin x²+y²−6x+4y−12=0, (x−3)²+(y+2)²=25 olur; merkez (3,−2), yarıçap 5tir. Doğrunun merkeze dik uzaklığı h ise h<r iki kesişim, h=r teğetlik, h>r kesişmeme verir. Yukarıdaki çember için y=3 doğrusunun merkeze uzaklığı |−2−3|=5 olduğundan teğet noktası (3,3)tür. Diğer yöntem doğru denklemini çemberde yerine koyup oluşan ikinci derece denklemin diskriminantına bakmaktır: Δ>0 iki, Δ=0 tek, Δ<0 sıfır kesişim. y=mx+n yazımı düşey doğruları içermez; x=k için doğrudan x yerine k yaz. Kökler kesişim noktasının bir koordinatını verir; diğerini doğru denkleminden tamamla. Çemberin kendi yarıçap koşuluyla kesişim denkleminin diskriminantını iki ayrı denetim olarak ele al."
      }
    ],
    "memory": "(x−a)²+(y−b)²=r². Doğruya uzaklık rden küçükse iki kesişim, eşitse teğetlik vardır.",
    "question": {
      "stem": "(x−2)²+(y+1)²=9 çemberi ile y=2 doğrusunun durumu nedir?",
      "options": [
        "İki noktada kesişir.",
        "Teğettir.",
        "Ortak noktaları yoktur.",
        "Doğru çemberin merkezinden geçer."
      ],
      "answer": 1,
      "explanation": "Merkez (2,−1), yarıçap 3tür. Merkezin y=2 doğrusuna uzaklığı |−1−2|=3 olduğundan teğettir; teğet noktası (2,2)dir."
    },
    "cards": [
      {
        "front": "Genel çember denkleminin merkezi?",
        "back": "x²+y²+Dx+Ey+F=0 için (−D/2,−E/2)."
      },
      {
        "front": "Çember denkleminde r²=0 ne anlama gelir?",
        "back": "Tek nokta; pozitif yarıçaplı gerçek bir çember değildir."
      }
    ],
    "source": {
      "book": "AYT-mat",
      "page": 126
    }
  },
  {
    "id": "mat-ayt-geo-06",
    "subject": "matematik",
    "exam": "AYT",
    "title": "Silindir, koni ve kürede ölçü",
    "unit": "Dönel cisimlerde alan ve hacim",
    "minutes": 18,
    "tags": [
      "silindir",
      "koni",
      "küre",
      "açınım"
    ],
    "summary": "Açınımın uzunluklarını doğru eşleştir: silindirde dikdörtgenin tabanı 2πr, konide sektör yayı 2πrdir. Hacimde dik yüksekliği kullan.",
    "visual": {
      "type": "compare",
      "nodes": [
        {
          "label": "Silindir",
          "detail": "Yanal açınım 2πr ile h kenarlı dikdörtgendir; iki taban eklenir."
        },
        {
          "label": "Koni",
          "detail": "Ana doğru l, dik yükseklik h ve yarıçap r için l²=h²+r²."
        },
        {
          "label": "Küre",
          "detail": "Merkezden geçen kesit büyük çemberdir; yüzey alanı ile hacim farklı kuvvetlerle değişir."
        }
      ]
    },
    "sections": [
      {
        "title": "Dik dairesel silindirde uzunluk ve alan",
        "text": "Dik dairesel silindirin iki eş daire tabanı paralel düzlemlerdedir; ekseni taban merkezlerini birleştirir ve tabanlara diktir. Bu özel silindirde ana doğru uzunluğu ile yükseklik h aynıdır. Tabanlara paralel kesit daire, tabanlara dik kesit dikdörtgendir; eksenden geçen dik kesitte dikdörtgenin genişliği çaptır. Eksenden geçmeyen dik kesitte genişlik bir kiriş uzunluğudur ve genellikle 2rden küçüktür. Çizimdeki perspektif tabanı elips gibi gösterse de gerçek taban dairedir; ölçüleri perspektifte cetvelle çıkarma. Açınımın yan yüzü, bir kenarı h ve diğer kenarı taban çevresi 2πr olan dikdörtgendir. Yanal alan 2πrh, iki taban alanı 2πr², kapalı silindirin toplam alanı 2πrh+2πr²dir. Örneğin r=3, h=5 için yanal alan 30π, toplam alan 48π olur. Üstü açık kapta yalnız bir taban ekleneceği için alan 39πdir; “kapalı” koşulu hangi yüzlerin sayılacağını belirler. Açınımdaki uzun kenarı çap 2r sanmak π katsayısını kaybettirir. Bir dönel silindir modellenirken hangi dikdörtgen kenarının dönme ekseni olduğunu oku: o kenar yükseklik, eksene dik kenar yarıçap olur."
      },
      {
        "title": "Silindirin hacmi; dik dairesel konide uzunluk ve alan",
        "text": "Dik dairesel silindirin hacmi taban alanı ile dik yüksekliğin çarpımıdır: V=πr²h. 134. sayfada silindirin dilimlenip yeniden dizilmesi bu hacmi korur ve prizma hesabına bağlar. r=4, h=6 ise hacim 96πdir. Konide ise tepe noktası ile taban merkezini bağlayan parça dik yükseklik h, tepe ile taban çemberindeki nokta arasındaki yan parça ana doğru ldir. Dik dairesel konide l²=h²+r² olur. Eğik görünen lyi doğrudan h yerine koymak hem alanı hem hacmi karıştırır. 135. sayfada koninin yanal açınımı yarıçapı l olan daire dilimidir; sektör yayı koninin taban çevresi 2πrye eşittir. Böylece α/360=r/l, yanal alan πrl; tabanla toplam alan πrl+πr² elde edilir. r=3, h=4 ise l=5; yanal alan 15π, toplam alan 24πdir. Açınım açısı 360·3/5=216° olur. Sektörün yarıçapını r almak yanlış olur; r koninin tabanına, l açılan yan yüzün dairesine aittir. Silindirde yan yüz dikdörtgenken konide daire dilimi olmasının sebebi, koninin çevresel uzunluğunun tepeye doğru azalmasıdır."
      },
      {
        "title": "Dik dairesel konide hacim; kürede uzunluk, alan ve hacim",
        "text": "Koninin hacmi V=πr²h/3tür. Aynı taban yarıçapı ve aynı dik yükseklikle silindirin hacminin üçte biridir; ana doğruların eşit olması bu karşılaştırmanın şartı değildir. r=3, h=4 konisi 12π; aynı r ve hli silindir 36π hacmindedir. Hacimde r², h ise birinci kuvvetle yer alır. Yalnız yarıçap iki katına çıkarsa hacim dört katına, bütün uzunluklar iki katına çıkarsa sekiz katına çıkar. Böylece benzer cisimlerde alanın k², hacmin k³ ile değiştiği görülür. Küre, merkezden r uzaklıktaki yüzeyle sınırlanan katı bölgedir. Yüzey alanı 4πr², hacmi 4πr³/3tür. r=3 için alan 36π, hacim de sayısal olarak 36πdir; birimleri farklı olduğundan bunlar aynı ölçü değildir. Merkezden geçen düzlemin kesiti yarıçapı r olan büyük çemberdir. Merkezden uzaklığı d<r olan başka bir kesitte yarıçap ρ için ρ²+d²=r² yazılır; r=5, d=3 ise ρ=4tür. Küre yüzeyiyle düzlemin kesişimi çember, katı kürenin kesiti dairesel bölgedir. Bir yarım dairenin çapı etrafında tam döndürülmesi, sayfanın belirttiği küre modelini oluşturur."
      }
    ],
    "memory": "Silindir V=πr²h; koni V=πr²h/3. Küre alanı 4πr², hacmi 4πr³/3.",
    "question": {
      "stem": "Taban yarıçapı 3 birim, taban düzlemine dik yüksekliği 4 birim olan dik dairesel koninin hacmi kaç birimküptür?",
      "options": [
        "12π",
        "15π",
        "24π",
        "36π"
      ],
      "answer": 0,
      "explanation": "Koni hacmi πr²h/3=π·9·4/3=12πdir. 15π yanal alan, 36π aynı taban ve yükseklikteki silindirin hacmidir."
    },
    "cards": [
      {
        "front": "Koninin ana doğrusu ile yüksekliği nasıl bağlanır?",
        "back": "Dik dairesel konide l²=r²+h²; l taban çemberine giden yan uzunluk, h taban düzlemine dik uzaklıktır."
      },
      {
        "front": "Kürenin yarıçapı iki katına çıkarsa?",
        "back": "Yüzey alanı dört, hacim sekiz katına çıkar."
      }
    ],
    "source": {
      "book": "AYT-mat",
      "page": 131
    }
  }
]);
