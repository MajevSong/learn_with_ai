/* 2027 YKS: özgün matematik öğretimi; basılı MEBİ sayfaları dayanak olarak belirtilmiştir. */
window.TOPIC_DOSSIERS=window.TOPIC_DOSSIERS||{};
Object.assign(window.TOPIC_DOSSIERS,{
  "mat-tyt-01": {
    "title": "Sayı kümelerini işlem koşullarıyla kullan",
    "prerequisites": [
      {
        "concept": "Kesir",
        "why": "Tam sayının da paydası 1 olan bir kesirle gösterilebildiğini anlamak için."
      }
    ],
    "goals": [
      "Kümeye üyelik ile işlemin sonucunu ayır.",
      "İşaret ve tek-çift koşullarından kesin sonuç çıkar."
    ],
    "chapters": [
      {
        "title": "Bir kümede kapalı olmak ne demektir?",
        "source": {
          "book": "TYT-mat",
          "pages": [
            9,
            10,
            11
          ]
        },
        "explanation": [
          "Bir işlemi iki küme elemanına uyguladığında sonucun yine o kümede olması kapalılıktır. Doğal sayılar toplamada kapalıdır; çıkarmada değildir: 2−5 doğal değildir. Tam sayılarda aynı çıkarma yapılabilir fakat 2: 5 tam sayı değildir. Bu örnekler sayı kümelerinin neden genişletildiğini gösterir. Bölmenin yasak olduğu nokta sayı kümesinden bağımsız olarak sıfır paydadır.",
          "Rasyonel sayı iki tam sayının oranıdır; payda sıfır olamaz. İki rasyonelin toplamını ortak paydaya getirince yine tam sayıların oranı elde edilir. İrrasyonellerde benzer kapalılık yoktur: √2+√2 irrasyonel, √2+(−√2) rasyoneldir. Bu yüzden yalnız sayı türüne bakarak her işlemin sonucunu aynı türde sayamazsın."
        ],
        "formulas": [
          {
            "expression": "a/b+c/d=(ad+bc)/(bd)",
            "meaning": "Rasyonel toplamanın ortak paydalı yazımı.",
            "conditions": "a, b, c, d tam sayı; b ve d sıfırdan farklı."
          }
        ],
        "example": {
          "question": "a=√3+2 ve b=√3−2 için a+b ile ab hangi sayı kümelerindedir?",
          "steps": [
            "Toplamda irrasyonel kısımlar birleşir: a+b=2√3.",
            "Çarpımı iki kare farkı olarak yaz: ab=(√3)²−2²=−1.",
            "2√3 irrasyoneldir; −1 tam sayı ve dolayısıyla rasyoneldir."
          ],
          "answer": "Toplam irrasyonel, çarpım tam sayıdır.",
          "check": "Yaklaşık √3=1,732 alınırsa çarpımın negatif ve −1 civarında olduğu görülür."
        },
        "misconceptions": [
          {
            "wrong": "İki irrasyonelin çarpımı daima irrasyoneldir.",
            "correct": "Sonuç kullanılan sayılara bağlıdır.",
            "why": "√3·√3=3 karşı örneği evrensel iddiayı çürütür."
          }
        ],
        "reasoningChecks": [
          {
            "question": "Sıfırın çarpma tersi neden yoktur?",
            "answer": "0·x=1 eşitliğini sağlayan gerçek x yoktur.",
            "why": "Çarpmanın yutan elemanı 0 olduğundan bütün çarpımlar 0 kalır."
          }
        ]
      },
      {
        "title": "Pariteyi ve ardışıklığı cebirle kanıtla",
        "source": {
          "book": "TYT-mat",
          "pages": [
            12,
            13,
            14,
            15
          ]
        },
        "explanation": [
          "Tek ve çift, son rakamdan daha genel bir yapıdır: 2 k ve 2 k+1 gösterimi negatif tam sayıları da kapsar. İki tek sayının çarpımı (2 m+1)(2 n+1)=2(2 mn+m+n)+1 olduğundan tektir. Buna karşılık toplam 2(m+n+1) biçiminde çifttir. Böylece bir örnek gözlemlemek yerine bütün tam sayılar için kanıt kurulur.",
          "Ardışık eşit aralıklı sayıların toplamında ilk ve sonu eşleştir. Her çift aynı toplamı verir; tek sayıda terim varsa ortadaki sayı da aynı ortalamadır. Terim sayısını bulurken farkların sayısına 1 eklemek, iki uç sayının da listede bulunmasından gelir. Alt sınırın dahil olup olmadığını ayrıca kontrol et."
        ],
        "formulas": [
          {
            "expression": "n=(son−ilk)/d+1",
            "meaning": "Ortak farkı d olan sonlu dizinin terim sayısı.",
            "conditions": "d>0; son−ilk, d’nin tam katı; iki uç dahil."
          },
          {
            "expression": "S=n(ilk+son)/2",
            "meaning": "Eş aralıklı terimlerin toplamı.",
            "conditions": "Terimler aynı ortak farkla ilerlemeli."
          }
        ],
        "example": {
          "question": "Beş ardışık çift tam sayının toplamı 70 ise en büyüğü kaçtır?",
          "steps": [
            "Ortadaki sayıya x de: x−4, x−2, x, x+2, x+4.",
            "Toplam 5 x=70 olduğundan x=14.",
            "En büyük 18; diğerleri 10,12,14,16 olur."
          ],
          "answer": "18.",
          "check": "10+12+14+16+18=70; bütün terimler çift ve farkları 2."
        },
        "misconceptions": [
          {
            "wrong": "Ardışık beş sayıda başlangıç her zaman x olmalıdır.",
            "correct": "Ortadakini değişken seçmek de mümkündür ve toplamı sadeleştirir.",
            "why": "Değişken sayının adı değil, seçilen temsilin anlamıdır."
          }
        ],
        "reasoningChecks": [
          {
            "question": "a ve b tekse a²+b² çift midir?",
            "answer": "Evet.",
            "why": "Tek sayının karesi tek, iki tekin toplamı çifttir."
          }
        ]
      }
    ],
    "connections": [
      {
        "concept": "Denklem kurma",
        "why": "Sayısal koşulu değişkene çevirme problemleri kolaylaştırır.",
        "lessonIds": [
          "mat-tyt-11"
        ]
      }
    ]
  },
  "mat-tyt-02": {
    "title": "Basamak çözümlemesi ve aralarında asallık",
    "prerequisites": [
      {
        "concept": "Tam sayı çarpanları",
        "why": "Asal olmayı ortak bölen ilişkisinden ayırmak için."
      }
    ],
    "goals": [
      "Basamak koşullarını denkleme taşı.",
      "Sade oran ile gerçek sayıları ayır."
    ],
    "chapters": [
      {
        "title": "Rakamın yeri, sayı değerinden farklı bilgi taşır",
        "source": {
          "book": "TYT-mat",
          "pages": [
            16
          ]
        },
        "explanation": [
          "Onluk sistemde her basamak sağındakinin on katı ağırlıktadır. İki basamaklı AB sayısı 10 A+B’dir; AB simgesi A·B çarpımı değildir. Baştaki rakamın 1–9 arasında olması sayının iki basamaklı olma koşuludur. Son rakam 0 olabilir, fakat BA da iki basamaklı denirse bu kez B sıfır olamaz.",
          "Rakam değişiminde sayısal farkı doğrudan çözümle. Yüzler ile birlerin yer değiştirmesinde fark 99(A−C) olur; onlar basamağı değişmediği için yok olur. Eşitlik kadar rakam aralığı da gereklidir: bir denklemi sağlayan A=12 değeri rakam koşulunu sağlamaz. Sonuçları bulduktan sonra başlangıçta istenen basamak sayısını yeniden denetle."
        ],
        "formulas": [
          {
            "expression": "ABC=100A+10B+C",
            "meaning": "Üç basamaklı sayının çözümlemesi.",
            "conditions": "A∈{1,…,9}; B, C∈{0,…,9}."
          }
        ],
        "example": {
          "question": "Üç basamaklı ABC sayısında A+C=10, B=4 ve ABC−CBA=396 ise sayı kaçtır?",
          "steps": [
            "Farkı aç: 99(A−C)=396; A−C=4.",
            "A+C=10 ile birleştir: A=7, C=3.",
            "B=4 verildiğine göre sayı 743 olur."
          ],
          "answer": "743.",
          "check": "743−347=396 ve 7+3=10."
        },
        "misconceptions": [
          {
            "wrong": "Rakamlarla kurulan her denklem çözümü geçerlidir.",
            "correct": "Çözümün 0–9 aralığını ve baştaki rakamın sıfır olmamasını sağlaması gerekir.",
            "why": "Basamak gösterimi bu ek sınırlamaları içerir."
          }
        ],
        "reasoningChecks": [
          {
            "question": "AB sayısının 10 ile kalanını neden B belirler?",
            "answer": "10 A, 10’un katı olduğundan kalan yalnız B’dir.",
            "why": "Basamak çözümlemesi bölünebilme kurallarının da temelidir."
          }
        ]
      },
      {
        "title": "Sadeleştirilmiş oran hangi koşulda sayıları belirler?",
        "source": {
          "book": "TYT-mat",
          "pages": [
            17
          ]
        },
        "explanation": [
          "Asallık tek sayının bölenleriyle, aralarında asallık iki sayının ortak bölenleriyle ilgilidir. 14 ve 25 asal değildir; ortak asal çarpanları bulunmadığı için aralarında asaldır. Pozitif x/y oranı 5/7’ye sadeleşirse x=5 k, y=7 k yazılır. Pozitif tam sayı k ortak ölçeği temsil eder. EBOB(x, y)=1 koşulu eklenince k=1 olur.",
          "Ardışık tam sayıların ortak böleni farkları olan 1’i de böler. Bu yüzden ardışık tam sayılar aralarında asaldır. Farkı 2 olan iki tek sayı da aynı nedenle aralarında asaldır; ortak bölen 2 olamayacağı için 1 kalır. Ancak farkı 2 olan iki çift sayı ortak 2 taşır. Farkın bilgisi tek başına değil sayılarla birlikte değerlendirilir."
        ],
        "formulas": [
          {
            "expression": "x/y=p/q ⇒ x=pk, y=qk",
            "meaning": "Sade oranın bütün pozitif tam sayı çözümleri.",
            "conditions": "p, q aralarında asal; x, y pozitif tam sayı; k pozitif tam sayı."
          }
        ],
        "example": {
          "question": "x/y=6/15 ve EBOB(x, y)=4 ise x+y kaçtır?",
          "steps": [
            "Oranı 2/5 olarak sadeleştir.",
            "x=2 k, y=5 k yazıldığında EBOB(x, y)=k olur.",
            "k=4: x=8, y=20; toplam 28."
          ],
          "answer": "28.",
          "check": "8/20=2/5=6/15 ve EBOB(8,20)=4."
        },
        "misconceptions": [
          {
            "wrong": "Aralarında asal iki sayı mutlaka asaldır.",
            "correct": "Ortak pozitif bölenlerinin yalnız 1 olması yeterlidir.",
            "why": "8 ile 15 bileşik oldukları hâlde aralarında asaldır."
          }
        ],
        "reasoningChecks": [
          {
            "question": "0 ile 7 aralarında asal mıdır?",
            "answer": "Hayır; EBOB(0,7)=7.",
            "why": "7, her iki sayıyı da böler; 0 bütün sıfırdan farklı tam sayıların katıdır."
          }
        ]
      }
    ],
    "connections": [
      {
        "concept": "Bölünebilme",
        "why": "Basamak çözümlemesi kalan kurallarının nedenini açıklar.",
        "lessonIds": [
          "mat-tyt-03"
        ]
      }
    ]
  },
  "mat-tyt-03": {
    "title": "Kalan hesabını ve asal çarpan seçimini gerekçelendir",
    "prerequisites": [
      {
        "concept": "Basamak çözümlemesi",
        "why": "10’un kuvvetlerinin kalana katkısını izlemek için."
      }
    ],
    "goals": [
      "Kalan aralığını koru.",
      "Pozitif bölenleri üs seçimiyle say."
    ],
    "chapters": [
      {
        "title": "Kalan bir eşitlik ve bir aralık koşuludur",
        "source": {
          "book": "TYT-mat",
          "pages": [
            18,
            19,
            20,
            21
          ]
        },
        "explanation": [
          "A=bq+r yazmak tek başına bölme işlemini tanımlamaz; b pozitif tam sayı iken 0≤r<b olmalıdır. İki sayı aynı kalanı veriyorsa farkları b’nin katıdır. Bu özellik toplamda, farkta ve çarpımda büyük sayıları kalanlarıyla değiştirmeyi sağlar. Negatif ara sonuçta da aynı aralığa dönülür: 7’ye göre −2 ile 5 aynı kalan sınıfındadır.",
          "Bölünebilme kuralları sihirli ezberler değildir. 10≡1 mod 9 olduğu için her 10 kuvveti 1 kalanı verir; rakamlar toplamı kullanılabilir. 10≡−1 mod 11 olduğundan basamakların işaretleri dönüşümlü olur. 100,4’ün katı olduğu için 4’e bölünmede son iki basamak yeterlidir. Farklı kuralların hangi basamakları neden sildiğini bu düşünce açıklar."
        ],
        "formulas": [
          {
            "expression": "A=bq+r, 0≤r<b",
            "meaning": "Pozitif bölenle kalanlı bölme.",
            "conditions": "A, q tam sayı; b pozitif tam sayı."
          }
        ],
        "example": {
          "question": "N sayısının 7 ile kalanı 4 ise N²−3 N+8’in 7 ile kalanı kaçtır?",
          "steps": [
            "N=7 k+4 yaz; 7’nin katı içeren terimler kalana katkı yapmaz.",
            "4²−3·4+8=12 bulunur.",
            "12=7+5 olduğundan kalan 5’tir."
          ],
          "answer": "5.",
          "check": "N=4 seçilince ifade 12; N=11 seçilince 96; ikisinin de 7 kalanı 5."
        },
        "misconceptions": [
          {
            "wrong": "Kalanlarla işlem sonunda çıkan sayı doğrudan kalandır.",
            "correct": "Sonuç yeniden 0 ile bölen−1 arasına indirilir.",
            "why": "12,7’ye göre kalan olamaz; en az bir bölen daha çıkarılır."
          }
        ],
        "reasoningChecks": [
          {
            "question": "A ve B’nin 6’ya bölünmesi AB’nin 36’ya bölünmesini sağlar mı?",
            "answer": "Evet.",
            "why": "A=6 k, B=6 m olduğundan AB=36 km; toplam için aynı sonuç geçerli değildir."
          }
        ]
      },
      {
        "title": "Bölen sayısı bağımsız üs seçimidir",
        "source": {
          "book": "TYT-mat",
          "pages": [
            22
          ]
        },
        "explanation": [
          "n=2³·3²·5 gibi asal çarpan ayrışımında her pozitif bölen bu asal çarpanların daha küçük veya eşit üslerini taşır. 2’nin üssü dört, 3’ün üssü üç, 5’in üssü iki biçimde seçilir. Çarpma ilkesi toplam bölen sayısını verir. Üs sıfırın seçilmesi asalın hiç kullanılmaması demektir; 1 böleninin sayılmasını da bu seçim sağlar.",
          "Tam kare bir bölenin bütün asal üsleri çift olmalıdır. Tek bölenlerde ise 2’nin üssü zorunlu olarak sıfırdır. Böylece tek, çift, kare veya belirli sayıya bölünen bölenleri aynı temel sayma düzeniyle bulursun. Sayının negatif bölenleri pozitiflerle birebir eşleşir; “pozitif bölen” ile “tam sayı bölen” ifadeleri farklı sayımlar ister."
        ],
        "formulas": [
          {
            "expression": "d(n)=(a₁+1)…(aₖ+1)",
            "meaning": "Pozitif bölen sayısı.",
            "conditions": "n>1; farklı asalların üsleri aᵢ; n=1 için d(1)=1."
          }
        ],
        "example": {
          "question": "360’ın kaç pozitif böleni tektir ve kaçı tam karedir?",
          "steps": [
            "360=2³·3²·5.",
            "Tek bölen için 2 üssü 0; 3 üssü 0,1,2 ve 5 üssü 0,1 seçilir: 3·2=6.",
            "Kare bölen için 2 üssü 0 veya 2; 3 üssü 0 veya 2; 5 üssü 0 seçilir: 2·2·1=4."
          ],
          "answer": "6 tek bölen; 4 tam kare bölen.",
          "check": "Kare bölenler 1,4,9,36; liste 4 elemandır."
        },
        "misconceptions": [
          {
            "wrong": "Asal bölen sayısı ile pozitif bölen sayısı aynıdır.",
            "correct": "Asal bölen yalnız farklı asal tabanları sayar; bütün bölenler üs seçimlerini sayar.",
            "why": "360’ın 3 asal böleni ama 24 pozitif böleni vardır."
          }
        ],
        "reasoningChecks": [
          {
            "question": "Pozitif bölen sayısı tek olan bir sayı neden tam karedir?",
            "answer": "Bütün aᵢ+1 çarpanları tek olmalı; bütün aᵢ üsleri çifttir.",
            "why": "Bir çarpımın tek olması her çarpanın tek olmasını gerektirir."
          }
        ]
      }
    ],
    "connections": [
      {
        "concept": "Modüler aritmetik",
        "why": "Kalan hesabı döngüleri küçük sayılarla izlemeyi sağlar.",
        "lessonIds": [
          "mat-tyt-25"
        ]
      }
    ]
  },
  "mat-tyt-04": {
    "title": "Ortak bölen, ortak kat ve takvim döngüleri",
    "prerequisites": [
      {
        "concept": "Asal çarpanlar",
        "why": "Ortak çarpanlarda minimum ve maksimum üs seçmek için."
      }
    ],
    "goals": [
      "Paylaştırma ve buluşma durumlarını ayır.",
      "Döngü başlangıcını doğru say."
    ],
    "chapters": [
      {
        "title": "EBOB ile EKOK neden farklı üsler seçer?",
        "source": {
          "book": "TYT-mat",
          "pages": [
            23,
            24
          ]
        },
        "explanation": [
          "Ortak bölen bir asalın her iki sayıda da bulunan kısmını kullanabilir; bu nedenle küçük üs seçilir. Ortak kat her iki sayıyı da kapsamak zorundadır; büyük üs seçilir. Örneğin 12=2²·3 ve 18=2·3² için EBOB 6, EKOK 36’dır. Her asalın üsleri ayrı değerlendirilir. İki pozitif tam sayının EBOB’u ile EKOK’unun çarpımı sayıların çarpımına eşittir; üç sayıya bu eşitliği aynı biçimde taşıyamazsın.",
          "Kesmeden eşit uzunlukta parçalara ayırma ortak bölen; düzenli aralıkların aynı noktada buluşması ortak kat problemidir. “En büyük” veya “en küçük” sözcüğü tek başına yöntem seçtirmez. Önce aranan uzunluğun verilenleri mi böldüğünü, verilenlerin mi katı olduğunu kur. Birimlerin aynı olması da gerekir; dakika ve saniye karıştırılırsa doğru işlem yanlış modele uygulanır."
        ],
        "formulas": [
          {
            "expression": "EBOB(a,b)·EKOK(a,b)=ab",
            "meaning": "İki sayıda asal üslerin min+max toplamı.",
            "conditions": "a, b pozitif tam sayı."
          }
        ],
        "example": {
          "question": "84 cm ve 126 cm uzunluğundaki iki ip artmadan eşit ve mümkün olan en uzun parçalara ayrılıyor. Kaç parça elde edilir?",
          "steps": [
            "Parça boyu iki uzunluğu da bölmelidir; en büyüğü EBOB(84,126)=42 cm.",
            "İlk ip 84/42=2; ikinci 126/42=3 parça verir.",
            "Toplam 2+3=5 parçadır."
          ],
          "answer": "5 parça.",
          "check": "2·42=84; 3·42=126; toplam uzunluk 210=5·42."
        },
        "misconceptions": [
          {
            "wrong": "En az parça isteniyorsa EKOK kullanılır.",
            "correct": "Parça boyunu büyüten ortak bölen aranır.",
            "why": "Parça boyu 126 veya 252 olursa 84 cmip kesilemez."
          }
        ],
        "reasoningChecks": [
          {
            "question": "EBOB(a, b)=a ise hangi ilişki kesindir?",
            "answer": "a, b’yi böler.",
            "why": "En büyük ortak bölenin a olması a’nın her iki sayının böleni olduğunu söyler."
          }
        ]
      },
      {
        "title": "Periyotta ilk olay ile tekrar aralığını ayır",
        "source": {
          "book": "TYT-mat",
          "pages": [
            25
          ]
        },
        "explanation": [
          "Bir olay her p birimde tekrarlanıyorsa t=0’da başlayan ortak olaylar p,2 p,… anlarında gelir. İki periyodun ortak tekrarı EKOK(p, q)’dur. Ancak başlangıçlar farklıysa doğrudan EKOK almak yeterli değildir; olası zamanları bir başlangıca göre yazıp diğer koşulu sınamalısın. İlk olayın sayılıp sayılmaması toplam olay sayısında bir fark oluşturur.",
          "Hafta günleri yedi günlük döngüdür. N gün sonra için N’nin 7 ile kalanı kadar ilerlersin. “Bugün birinci gün” denilen sıralı sayımda ise N’inci gün N−1 gün sonradır. Saat 12 veya 24 döngüsü de aynı mantıktadır; görünen saat ile geçen gerçek süre farklı bilgiler taşır."
        ],
        "formulas": [
          {
            "expression": "Ortak tekrar=EKOK(p,q)",
            "meaning": "Aynı anda başlayan iki tam sayılı periyodun ilk pozitif ortak zamanı.",
            "conditions": "Başlangıç anları aynı; periyotlar sabit."
          }
        ],
        "example": {
          "question": "İki zil 09.00’da birlikte, sonra 18 ve 24 dakikada bir çalıyor.12.00 dahil kaç kez birlikte çalar?",
          "steps": [
            "Ortak tekrar EKOK(18,24)=72 dakika.",
            "09.00,10.12,11.24 ortak anlardır; sonraki 12.36 sınırı aşar.",
            "Başlangıç da sayıldığından toplam 3 tane."
          ],
          "answer": "3 kez.",
          "check": "180 dakikalık aralıkta⌊180/72⌋+1=3."
        },
        "misconceptions": [
          {
            "wrong": "180/72 sonucunu yuvarlamak yeterlidir.",
            "correct": "Tam aralıkları sayıp başlangıcı ayrıca dahil et.",
            "why": "Yuvarlama olayların gerçekten gerçekleşip gerçekleşmediğini korumaz."
          }
        ],
        "reasoningChecks": [
          {
            "question": "Pazartesiden 100 gün sonrası hangi gündür?",
            "answer": "Çarşamba.",
            "why": "100=14·7+2; Pazartesiden iki gün ilerle."
          }
        ]
      }
    ],
    "connections": [
      {
        "concept": "İşçi problemleri",
        "why": "Süre ve tekrar aralıklarında birimle denklem kurma ortak beceridir.",
        "lessonIds": [
          "mat-tyt-12"
        ]
      }
    ]
  },
  "mat-tyt-05": {
    "title": "Kesrin büyüklüğü ve devirli açılımın nedeni",
    "prerequisites": [
      {
        "concept": "Tam sayılarda işlem",
        "why": "Payda ve işaret koşullarını izlemek için."
      }
    ],
    "goals": [
      "Kesirleri ortak ölçekte karşılaştır.",
      "Devirli ondalığı denklemle kesre dönüştür."
    ],
    "chapters": [
      {
        "title": "Ortak payda neden gerekir?",
        "source": {
          "book": "TYT-mat",
          "pages": [
            26
          ]
        },
        "explanation": [
          "Kesir bir bütünün kaç eş parçaya ayrıldığını ve bu parçalardan kaçının alındığını birlikte söyler. Paydaları farklı iki kesrin payları farklı büyüklükte parçaları sayar. Bu nedenle toplamada önce parçaların büyüklüğünü eşitlersin. Çarpmada ise bir miktarın belirli oranını aldığından pay ve payda çarpımları doğal olarak oluşur.",
          "Sadeleştirme toplamın içindeki tek terime uygulanmaz; payın ve paydanın tamamındaki ortak çarpan silinir. (x+2)/x ifadesinde x’ler yok edilemez. (2 x+4)/(x+2)=2 eşitliği ise x≠−2 için geçerlidir. Sade ifade eski tanım kümesini geri getirmez; paydanın yasak değerini saklamak gerekir."
        ],
        "formulas": [
          {
            "expression": "(a/b)/(c/d)=ad/(bc)",
            "meaning": "Bölüneni bölenin çarpma tersiyle çarpma.",
            "conditions": "b, c, d sıfırdan farklı."
          }
        ],
        "example": {
          "question": "1/2+1/3 toplamının 5/6 olduğu biliniyor. Bu toplamın 3/5’ine bölümü kaçtır?",
          "steps": [
            "Önce ortak payda: 1/2+1/3=5/6.",
            "Bölme: (5/6)/(3/5)=(5/6)·(5/3)=25/18.",
            "Sonuç 1’den büyüktür çünkü 5/6, miktar olarak 3/5’ten büyüktür."
          ],
          "answer": "25/18.",
          "check": "(25/18)·(3/5)=5/6 başlangıçtaki bölüneni verir."
        },
        "misconceptions": [
          {
            "wrong": "Kesirler toplanırken pay ve payda ayrı ayrı toplanır.",
            "correct": "Aynı büyüklükte parçalar elde edildikten sonra paylar toplanır.",
            "why": "1/2+1/2=1; pay payda toplamı 2/4 ise 1/2 verir."
          }
        ],
        "reasoningChecks": [
          {
            "question": "0/a ifadesi hangi a değerlerinde 0’dır?",
            "answer": "a≠0 olan bütün gerçek a değerlerinde.",
            "why": "0/0 tanımsızdır; payın 0 olması payda yasaklığını kaldırmaz."
          }
        ]
      },
      {
        "title": "Devirli basamakları çıkararak yok et",
        "source": {
          "book": "TYT-mat",
          "pages": [
            27,
            28
          ]
        },
        "explanation": [
          "Sonlu ondalıklar 10’un bir kuvveti paydalı yazılabilir. Sadeleştirilmiş bir kesrin paydasında yalnız 2 ve 5 asalları varsa uygun kuvvetle 10’un bir kuvveti tamamlanır ve açılım sonlanır. Başka asal varsa uzun bölmedeki kalanların sayısı sınırlıdır; kalan tekrar edince rakam dizisi de tekrar eder. Bu, rasyonel açılımların neden sonlu veya devirli olduğunu açıklar.",
          "Devirli sayıyı kesre çevirirken eşitlikleri aynı tekrar kuyruğu hizalanacak biçimde çıkar. Devir öncesindeki basamak sayısı ile devrin uzunluğu farklı roller üstlenir. Ondalıkta görünen rakam sayısını rastgele 9 sayısı yapmak yerine önce çarpılacak 10 kuvvetlerini belirle. Devir çizgisinin hangi rakamların üzerinde olduğu sonucu değiştirir."
        ],
        "formulas": [
          {
            "expression": "x=(tam bölüm ve devir−tam bölüm)/(10ʳ(10ᵏ−1))",
            "meaning": "r devirsiz, k devirli basamak için kuyrukları çıkarma.",
            "conditions": "İşaret ayrı korunur; devir yerleri kesin belirlenir."
          }
        ],
        "example": {
          "question": "x=0,1(36), yani 0,1363636… sayısını kesir olarak yaz.",
          "steps": [
            "10 x=1,363636…; 1000 x=136,363636… yaz.",
            "Çıkarınca 990 x=135 bulunur.",
            "x=135/990=3/22."
          ],
          "answer": "3/22.",
          "check": "3/22 yaklaşık 0,13636; payda 22=2·11 olduğu için sonlu olmaması beklenir."
        },
        "misconceptions": [
          {
            "wrong": "Her ondalık sayı rasyoneldir.",
            "correct": "Sonlu veya devirli ondalıklar rasyoneldir; düzensiz sonsuz açılımlar irrasyonel olabilir.",
            "why": "Rasyonellik için sonlu basamak görünmesi değil sonsuz açılımın yapısı belirleyicidir."
          }
        ],
        "reasoningChecks": [
          {
            "question": "7/40 sonlu ondalık mıdır?",
            "answer": "E vet,0,175.",
            "why": "40=2³·5; başka asal çarpan yoktur."
          }
        ]
      }
    ],
    "connections": [
      {
        "concept": "Rasyonel fonksiyonlar",
        "why": "Sadeleştirme tanım kümesini koruma şartıyla yapılır.",
        "lessonIds": [
          "mat-tyt-21",
          "mat-ayt-13"
        ]
      }
    ]
  },
  "mat-tyt-06": {
    "title": "Denklem, eşitsizlik ve aralıkların mantığı",
    "prerequisites": [
      {
        "concept": "İşlem özellikleri",
        "why": "Eşdeğer dönüşümlerde iki tarafa aynı işlemi uygulamak için."
      }
    ],
    "goals": [
      "Çözüm kümesini aralıkla göster.",
      "Eşitsizlik yönünü koşula göre değiştir."
    ],
    "chapters": [
      {
        "title": "Eşdeğer dönüşüm çözümü korumalıdır",
        "source": {
          "book": "TYT-mat",
          "pages": [
            29,
            30,
            31,
            32
          ]
        },
        "explanation": [
          "Denklem çözerken iki tarafa aynı sayıyı eklemek veya sıfırdan farklı aynı sayıyla çarpmak eşitliği korur ve geri alınabilir. Bilinmeyenli bir ifadeye bölmek ise o ifadenin sıfır olabileceği durumları kaybettirebilir. x(x−2)=0 denkleminde x’e bölünürse x=0 çözümü silinir. Önce çarpımı sıfır yapan durumları ayrı incele.",
          "Eşitsizlikte negatifle çarpma sayı doğrusunu yansıtır; bu yüzden yön değişir. x<yiken−x>−y olmasının görsel anlamı budur. Sıfırla çarpma ise bütün ayrımı yok eder; eşdeğer çözüm adımı sayılmaz. Aralık gösteriminde açık uç eşitliğin dışarıda, kapalı uç içeride olduğunu belirtir. Sonsuzluk bir gerçek sayı olmadığı için hiçbir zaman kapalı uç yapılmaz."
        ],
        "formulas": [
          {
            "expression": "a<b, c<0 ⇒ ac>bc",
            "meaning": "Negatif ölçekleme sıralamayı ters çevirir.",
            "conditions": "c kesin negatif; işareti bilinmeyen çarpanda durum ayrımı gerekir."
          }
        ],
        "example": {
          "question": "−3<2−x≤5 eşitsizliğinin çözümünü bul.",
          "steps": [
            "Üç taraftan 2 çıkar: −5<−x≤3.",
            "−1 ile çarparken iki yönü ters çevir: 5>x≥−3.",
            "Artan sırayla−3≤x<5 yaz."
          ],
          "answer": "[−3,5).",
          "check": "x=−3 üst sınırda 5 verir ve uygundur; x=5 alt ifadeyi−3 yapar ama eşitlik yasaktır."
        },
        "misconceptions": [
          {
            "wrong": "İşareti bilinmeyen x ile eşitsizliğin iki tarafını çarpmak daima güvenlidir.",
            "correct": "x>0, x<0, x=0 durumları ayrı ele alınır.",
            "why": "Çarpanın işareti yönü ve sıfırda bilgi kaybını belirler."
          }
        ],
        "reasoningChecks": [
          {
            "question": "x²=x denkleminde x’e bölmek neden eksik sonuç verir?",
            "answer": "x=0 çözümünü kaybettirir.",
            "why": "Bölme ancak x≠0 koşulunda eşdeğerdir."
          }
        ]
      },
      {
        "title": "İki koşulu aynı anda sağlamak kesişimdir",
        "source": {
          "book": "TYT-mat",
          "pages": [
            33,
            34,
            35
          ]
        },
        "explanation": [
          "Bir denklem sistemi iki ayrı doğrunun ortak noktalarını arar. Doğrular kesişirse bir, paralelse sıfır, çakışıksa sonsuz çözüm bulunabilir. Yok etme yönteminde amaç bir bilinmeyenin katsayılarını zıt yapıp toplamaktır. Ortaya 0=0 çıkarsa bu tek başına her (x, y)’nin çözüm olduğunu söylemez; önceki eşitliklerden biri hâlâ gereklidir.",
          "Eşitsizlik sistemi ise düzlemde yarı bölgelerin ortak alanını verir. Doğru üzerinde sınırın dahil olması≤ve≥işaretleriyle belirlenir. Bir deneme noktası bölgenin hangi tarafta olduğunu gösterir; seçilen nokta sınır üzerinde olmamalıdır. “Ve” ile birleşen koşulların kesişimi,“veya” ile birleşenlerin birleşimi alınır."
        ],
        "example": {
          "question": "2 x+y=11 ve x−y=1 sistemini çöz; ayrıca x+y>5 koşulunu denetle.",
          "steps": [
            "Eşitlikleri topla: 3 x=12, x=4.",
            "x−y=1 için 4−y=1, y=3.",
            "x+y=7>5; ek koşul sağlanır."
          ],
          "answer": "(4,3).",
          "check": "2·4+3=11 ve 4−3=1; iki başlangıç eşitliği de doğru."
        },
        "misconceptions": [
          {
            "wrong": "Denklem sisteminde her eşitliğin ayrı çözüm kümeleri birleştirilir.",
            "correct": "Aynı ikilinin bütün eşitlikleri sağlaması gerekir.",
            "why": "Sistem “ve” ilişkisi kurar; ortak çözüm kesişimdir."
          }
        ],
        "reasoningChecks": [
          {
            "question": "x+y=2 ve 2 x+2 y=4 kaç çözüm verir?",
            "answer": "Sonsuz; x+y=2 doğrusundaki bütün noktalar.",
            "why": "İkinci eşitlik ilkinin iki katıdır ve yeni bağımsız koşul eklemez."
          }
        ]
      }
    ],
    "connections": [
      {
        "concept": "İşaret tablosu",
        "why": "Çarpanların işaretini aralıklarda incelemek yüksek dereceli eşitsizlikleri çözer.",
        "lessonIds": [
          "mat-ayt-04"
        ]
      }
    ]
  },
  "mat-tyt-07": {
    "title": "Mutlak değeri uzaklık ve parçalarla çöz",
    "prerequisites": [
      {
        "concept": "Sayı doğrusu",
        "why": "Uzaklığı yönlü farktan ayırmak için."
      }
    ],
    "goals": [
      "Uzaklık denklemini iki olasılığa ayır.",
      "Kritik noktalarda doğru parçalı ifadeyi seç."
    ],
    "chapters": [
      {
        "title": "Merkez ve yarıçap ile çözüm kümesi",
        "source": {
          "book": "TYT-mat",
          "pages": [
            36,
            37
          ]
        },
        "explanation": [
          "|x−a|sayısı x ile a arasındaki uzaklıktır. Uzaklık negatif olamayacağı için |x−a|=r denkleminde r<0 çözüm vermez. r=0 tek nokta, r>0 merkezin iki yanında iki nokta verir. |x−a|<r merkeze r’den yakın; |x−a|>r isedaha uzak noktaları seçer. İç aralık ile dış iki aralığın farkı bu geometriden gelir.",
          "Katsayılı ifadede önce uzaklık ölçeğini ayır: |3 x−6|=3|x−2|. Eşitsizliği 3’e bölmek merkez 2 ve gerçek yarıçapı ortaya çıkarır. Kare alma da kullanılabilir; iki tarafın negatif olmaması denetlenmelidir. |x−2|<−1 gibi bir eşitsizliği karesini alıp çözmek var olmayan bir küme üretir."
        ],
        "formulas": [
          {
            "expression": "|x−a|≤r ⇔ a−r≤x≤a+r",
            "meaning": "Kapalı uzaklık aralığı.",
            "conditions": "r≥0."
          }
        ],
        "example": {
          "question": "|2 x−6|≤8 ve x>0 ise çözüm kümesi nedir?",
          "steps": [
            "2|x−3|≤8; |x−3|≤4.",
            "−1≤x≤7 bulunur.",
            "x>0 ile kesiştir: 0<x≤7."
          ],
          "answer": "(0,7].",
          "check": "7 için mutlak değer 8 olur; sınır dahil.0 ek koşulu sağlamaz."
        },
        "misconceptions": [
          {
            "wrong": "Mutlak değerin dışına eksi gelirse ifade yine pozitiftir.",
            "correct": "−|u|≤0 olur; mutlak değer yalnız iç ifadeye uygulanır.",
            "why": "|u|≥0 olması önündeki çarpanın yönünü değiştirmez."
          }
        ],
        "reasoningChecks": [
          {
            "question": "|x+4|=0 kaç çözümlüdür?",
            "answer": "Tek çözüm x=−4.",
            "why": "İki olasılık aynı merkezde birleşir."
          }
        ]
      },
      {
        "title": "İşaret kırılmalarını kullan",
        "source": {
          "book": "TYT-mat",
          "pages": [
            38
          ]
        },
        "explanation": [
          "Birden fazla mutlak değerde bütün ifadeleri tek işaretle açamazsın. Her iç ifadenin sıfır olduğu noktayı bulup sayı doğrusunu aralıklara ayır. Her aralıkta iç ifadelerin işaretleri sabit olduğundan doğrusal denklem elde edilir. Bulduğun aday yalnız çözüm üretilen aralıkta bulunuyorsa geçerlidir.",
          "|x−a|+|x−b|ifadesi x’ina ve b’ye toplam uzaklığıdır. a≤biken aradaki noktalarda toplam b−aolarak sabittir. Dışarı çıkınca iki uzaklık aynı anda büyür. Bu geometrik gözlem bazen birçok parçalı işlem yerine doğrudan minimumu ve çözüm sayısını söyler."
        ],
        "formulas": [
          {
            "expression": "|x−a|+|x−b|≥|b−a|",
            "meaning": "İki sabit noktaya toplam uzaklığın alt sınırı.",
            "conditions": "a, b, xgerçek; eşitlik x, iki nokta arasındayken."
          }
        ],
        "example": {
          "question": "|x−1|+|x−5|=8 denklemini çöz.",
          "steps": [
            "Kritik noktalar 1 ve 5; [1,5] içinde toplam 4 olduğundan 8 olamaz.",
            "x<1 için 1−x+5−x=8; x=−1 geçerli.",
            "x>5 içinx−1+x−5=8; x=7 geçerli."
          ],
          "answer": "{−1,7}.",
          "check": "−1 için 2+6=8; 7 için 6+2=8."
        },
        "misconceptions": [
          {
            "wrong": "İki mutlak değerin toplamı, içlerinin toplamının mutlak değeridir.",
            "correct": "Genel olarak yalnız üçgen eşitsizliği vardır.",
            "why": "x=3 için|2|+|−2|=4 ama|0|=0."
          }
        ],
        "reasoningChecks": [
          {
            "question": "|x−1|+|x−5|=4 kaç çözüm verir?",
            "answer": "Sonsuz; [1,5] aralığının tamamı.",
            "why": "Aradaki bütün noktalarda iki uzaklığın toplamı uçların uzaklığıdır."
          }
        ]
      }
    ],
    "connections": [
      {
        "concept": "Parçalı fonksiyon",
        "why": "Mutlak değer grafiği işaret aralıklarında doğrulara dönüşür.",
        "lessonIds": [
          "mat-tyt-19",
          "mat-ayt-14"
        ]
      }
    ]
  },
  "mat-tyt-08": {
    "title": "Üs kurallarını tanım ve tabanla ilişkilendir",
    "prerequisites": [
      {
        "concept": "Çarpma ve çarpma tersi",
        "why": "Negatif ve sıfır üslerin nedenini anlamak için."
      }
    ],
    "goals": [
      "Taban koşullarını koru.",
      "Üstel eşitsizlikte tabanın etkisini açıkla."
    ],
    "chapters": [
      {
        "title": "Sıfır ve negatif üs neden böyle tanımlanır?",
        "source": {
          "book": "TYT-mat",
          "pages": [
            39,
            40
          ]
        },
        "explanation": [
          "Pozitif tam sayı üssü tekrarlı çarpmadır. Aynı tabanlı kuvvetlerde bölme kuralını tutarlı sürdürmek için a⁰=1 ve a⁻ⁿ=1/aⁿtanımlanır; burada a≠0 olmalıdır. Negatif üs sonucun negatif olduğunu değil çarpma tersini söyler. Tabanın önündeki eksi ile tabanın kendisindeki eksi parantezle ayrılır: −3²=−9 ama(−3)²=9.",
          "Üslerin toplanması yalnız aynı tabanlı çarpmada uygulanır. 2³+2⁴=2³(1+2)=24 olur; toplamda üsler eklenmez. Rasyonel üslerde gerçek sayı tanımı ayrıca kökün derecesine bağlıdır; temel üstel fonksiyon modelinde taban pozitif alınarak bütün gerçek üsler için tek bir düzen sağlanır. Negatif tabanla her gerçek üs tanımlı değildir."
        ],
        "formulas": [
          {
            "expression": "aᵐ/aⁿ=aᵐ⁻ⁿ",
            "meaning": "Ortak çarpanların sadeleştirilmesi.",
            "conditions": "a≠0; tam sayı üslerde."
          }
        ],
        "example": {
          "question": "(2⁻²+2⁻³)/(2⁻¹) ifadesini hesapla.",
          "steps": [
            "Negatif üsleri kesre çevir: 1/4+1/8=3/8.",
            "Paydaya bölmek 2 ile çarpmaktır.",
            "(3/8)·2=3/4."
          ],
          "answer": "3/4.",
          "check": "Ondalık olarak(0,25+0,125)/0,5=0,75."
        },
        "misconceptions": [
          {
            "wrong": "a⁻ⁿ=−aⁿ.",
            "correct": "a⁻ⁿ=1/aⁿ.",
            "why": "Üsteki eksi çarpma tersini, tabanın önündeki eksi toplama tersini belirtir."
          }
        ],
        "reasoningChecks": [
          {
            "question": "0⁻² neden tanımsızdır?",
            "answer": "1/0²=1/0 olacağı için.",
            "why": "Sıfırın çarpma tersi yoktur."
          }
        ]
      },
      {
        "title": "Eş tabana geçmek ve sıralamayı korumak",
        "source": {
          "book": "TYT-mat",
          "pages": [
            41
          ]
        },
        "explanation": [
          "a>1 iken aˣfonksiyonu üs büyüdükçe büyür.0<a<1 iken her artış birden küçük bir çarpan getirdiği için değer küçülür. Bu nedenle eş tabanlı eşitsizlikte yön tabana bağlıdır. Taban 1 ise bütün kuvvetler 1 olur ve üsleri karşılaştırmak bilgi vermez.",
          "Tabanı kuvvet biçiminde yazmak üsleri çarpmaya dönüştürür: 8ˣ=(2³)ˣ=2³ˣ. Toplamlı ifadelerde önce ortak kuvvet al; iki farklı üstel terimi tek kuvvetmiş gibi birleştirme. Bulunan değerin asıl denklemde tanımlı olmasını ve gerekiyorsa tam sayı koşulunu denetle."
        ],
        "formulas": [
          {
            "expression": "aᵘ<aᵛ ⇔ u<v",
            "meaning": "Artan tabanda üs karşılaştırması.",
            "conditions": "a>1; 0<a<1 iken yön ters."
          }
        ],
        "example": {
          "question": "(1/3)²ˣ⁻¹≥27 eşitsizliğini çöz.",
          "steps": [
            "27=3³=(1/3)⁻³ yaz.",
            "Taban 1/3 azalan olduğundan 2 x−1≤−3.",
            "2 x≤−2; x≤−1."
          ],
          "answer": "(−∞,−1].",
          "check": "x=−1 içinüs−3 ve sonuç 27; x=0 için 3 olur ve sağlamaz."
        },
        "misconceptions": [
          {
            "wrong": "Eş tabanda üs karşılaştırmasında yön daima korunur.",
            "correct": "Taban 1’den küçükse yön ters döner.",
            "why": "1/2’nin ikinci kuvveti, dördüncü kuvvetinden büyüktür."
          }
        ],
        "reasoningChecks": [
          {
            "question": "2ˣ+2ˣ⁺¹=24 ise xkaçtır?",
            "answer": "3.",
            "why": "2ˣ(1+2)=24; 2ˣ=8."
          }
        ]
      }
    ],
    "connections": [
      {
        "concept": "Üstel ve logaritmik fonksiyon",
        "why": "Üs karşılaştırması ve terslik AYT’de aynı koşullarla sürer.",
        "lessonIds": [
          "mat-ayt-11"
        ]
      }
    ]
  },
  "mat-tyt-09": {
    "title": "Köklerde tanım, eşlenik ve çözüm kontrolü",
    "prerequisites": [
      {
        "concept": "Üsler ve işaret",
        "why": "Çift kökte pozitif ana değeri korumak için."
      }
    ],
    "goals": [
      "Köklü denklemi tanım kümesiyle çöz.",
      "Eşlenik işlemini çarpanlara ayırmayla açıkla."
    ],
    "chapters": [
      {
        "title": "Karekök bir sayının tek seçilmiş değeridir",
        "source": {
          "book": "TYT-mat",
          "pages": [
            42,
            43
          ]
        },
        "explanation": [
          "√a, a≥0 için karesi a olan negatif olmayan sayıyı belirtir. Bu yüzden√(x²)=|x|olur; x’in negatif olup olmadığı bilinmeden x yazılamaz. x²=a denkleminin iki çözümünün olması,√a simgesinin iki değerli olması demek değildir. Denklem ve fonksiyon değerini ayırmak yanlış işaretlerin çoğunu önler.",
          "Eşlenikle çarpmanın amacı köklü ifadeleri iki kare farkına dönüştürmektir.1/(√5−2) ifadesinde(√5+2) ile çarpmak paydayı 5−4=1 yapar. Çarpma sırasında aslında 1 olan bir oran kullanılır; payda zaten sıfırsa bu işlem tanımsızlığı onaramaz. Kök içleri negatif olduğunda gerçek sayı kuralları kullanılamaz."
        ],
        "formulas": [
          {
            "expression": "√(x²)=|x|",
            "meaning": "Karekökün negatif olmayan ana değeri.",
            "conditions": "xgerçek."
          },
          {
            "expression": "(√a−√b)(√a+√b)=a−b",
            "meaning": "Eşlenik çarpımı.",
            "conditions": "a, b≥0."
          }
        ],
        "example": {
          "question": "x<2 ise√((x−2)²)+1/(√5−2) ifadesini sadeleştir.",
          "steps": [
            "x−2<0 olduğundan√((x−2)²)=2−x.",
            "Paydanın eşleniği√5+2: 1/(√5−2)=√5+2.",
            "Toplam 4−x+√5."
          ],
          "answer": "4−x+√5.",
          "check": "x=1 için ilk kısım 1, ikinci kısım√5+2; toplam 3+√5 bulunur."
        },
        "misconceptions": [
          {
            "wrong": "√a+√b=√(a+b).",
            "correct": "Toplama kökün içine bu şekilde taşınmaz.",
            "why": "a=b=1 için sol 2, sağ√2; eşit değildir."
          }
        ],
        "reasoningChecks": [
          {
            "question": "√9 ilex²=9 denklemindeki xaynı bilgi midir?",
            "answer": "Hayır; √9=3, denklemin çözümleri±3.",
            "why": "Karekök simgesi ana değeri, denklem bütün uygun değerleri ister."
          }
        ]
      },
      {
        "title": "Kare alma neden yabancı kök üretebilir?",
        "source": {
          "book": "TYT-mat",
          "pages": [
            44
          ]
        },
        "explanation": [
          "u=vden u²=v² çıkar; ancak ters yönde yalnız|u|=|v|elde edilir. Kare alma işaret farkını siler. Köklü denklemde önce kökün yalnız bırakılması ve karşı tarafın negatif olmaması bu yüzden önemlidir. Tanım kümesini yazmak bütün kontrol işini bitirmez; karesi alınan iki tarafın işareti de korunmalıdır.",
          "Birden fazla kökte her kare alma yeni adaylar doğurabilir. Denklemi çözdükten sonra adayları orijinal ifadede denetle. Kök içinin sıfır olduğu uç noktalar geçerli olabilir; gerekçesiz olarak sıkı eşitsizlik koyma. Çözüm sayısına grafikten de bakılabilir: kök fonksiyonu ile doğru aynı yerde kesişmelidir."
        ],
        "example": {
          "question": "√(x+6)=x denklemini çöz.",
          "steps": [
            "Tanımx≥−6; sağ taraf kareköke eşit olduğu içinx≥0.",
            "Kareal: x+6=x²; x²−x−6=0; (x−3)(x+2)=0.",
            "Adaylar 3 ve−2; −2 işaret koşulunu sağlamaz; 3 kontrolden geçer."
          ],
          "answer": "{3}.",
          "check": "√9=3; x=−2 için√4=2≠−2."
        },
        "misconceptions": [
          {
            "wrong": "Karesi alınmış denklemin bütün kökleri asıl denklemin köküdür.",
            "correct": "Her aday başlangıçta kontrol edilir.",
            "why": "Kare alma negatif ile pozitifi ayıramaz."
          }
        ],
        "reasoningChecks": [
          {
            "question": "√(x−1)=−2 neden çözümsüzdür?",
            "answer": "Karekök gerçek değerlerde negatif olamaz.",
            "why": "İşaret koşulu kare almadan çözüm kümesini boş yapar."
          }
        ]
      }
    ],
    "connections": [
      {
        "concept": "Limitte eşlenik",
        "why": "Köklü farkları çarpanlara dönüştürmek belirsizlikleri çözer.",
        "lessonIds": [
          "mat-ayt-13"
        ]
      }
    ]
  },
  "mat-tyt-10": {
    "title": "Oran ve orantıda değişmeyeni bul",
    "prerequisites": [
      {
        "concept": "Kesir ve denklem",
        "why": "Aynı niceliği ortak ölçekle ifade etmek için."
      }
    ],
    "goals": [
      "Doğru ve ters orantıyı modelden ayır.",
      "Paylaştırmada ortak değişken kur."
    ],
    "chapters": [
      {
        "title": "Oran boyutsuz olabilir, birim de taşıyabilir",
        "source": {
          "book": "TYT-mat",
          "pages": [
            45
          ]
        },
        "explanation": [
          "Oran iki büyüklüğün bölümüdür. Aynı tür miktarlar aynı birime çevrilirse oran boyutsuzdur; yol/zaman oranı ise hız birimi taşır. a/b=3/5 ifadesinde a=3 k, b=5 kyazmak ortak ölçeği gösterir. k’nın birimi varsa onu da koru. Farklı oranlardaki ortak niceliğin katsayılarını eşitlemeden zincir kurmak yanıltır.",
          "Doğru orantıda y/x, ters orantıda xy sabittir. Yalnız “birisi artarken diğeri azalıyor” gözlemi ters orantıyı kanıtlamaz; örneğin y=10−x azalır ama çarpım sabit değildir. Değişmez miktarı kurmak gerekir: sabit yol için hız·zaman; birim alım ücreti sabitse adet·fiyat toplamı. Sabit başlangıç ücreti eklenen taksi ücreti doğru orantılı olmaz."
        ],
        "formulas": [
          {
            "expression": "y=kx; y=k/x",
            "meaning": "Doğru ve ters orantının temel modelleri.",
            "conditions": "Ters orantıda x≠0; k, aynı durumlarda sabit."
          }
        ],
        "example": {
          "question": "a: b=2: 3 veb: c=4: 5 isea: b: c nedir?",
          "steps": [
            "Ortakb katını 12 seç: ilk oran 8: 12 olur.",
            "İkinci oranda 3 ile çarp: 12: 15.",
            "Üçlü oran 8: 12: 15."
          ],
          "answer": "8: 12: 15.",
          "check": "8/12=2/3 ve 12/15=4/5."
        },
        "misconceptions": [
          {
            "wrong": "İki oranı yazıldığı gibi 2: 3: 5 biçiminde birleştirebilirim.",
            "correct": "Ortak büyüklüğün katsayıları eşitlenir.",
            "why": "b’nin birinde katsayısı 3, öteki nde 4; sayısal değer aynı olmalıdır."
          }
        ],
        "reasoningChecks": [
          {
            "question": "y=2 x+5 doğru orantılı mıdır?",
            "answer": "Hayır.",
            "why": "y/x=2+5/x sabit değildir; grafik orijinden geçmez."
          }
        ]
      },
      {
        "title": "Orantılı paylaştırmada önce toplam modeli kur",
        "source": {
          "book": "TYT-mat",
          "pages": [
            46
          ]
        },
        "explanation": [
          "Bir miktarı 2 ve 3 ile doğru orantılı paylaştırmak 2 k ve 3 k paylarını kurmaktır. Ters orantılı paylaştırma 1/2 ve 1/3 oranlarını kullanır; paydalar ortak eşitlenince 3: 2 oranı elde edilir. Kimin daha çok aldığını bulmadan önce “orantılı” sözcüğünün türünü belirle. Payların toplamı mutlaka dağıtılan miktara eşit olmalıdır.",
          "Yüzde, oranın 100 paydasındaki yazımıdır; paylaşımın tabanını değiştirdiğinde aynı yüzde farklı miktar verir. Bir grubun içindeki oranı bütün sınıfın oranı sanmamak için kesrin payının hangi evreni saydığını sözle belirt. Denklemde bütün, alt küme ve birim aynı satırda görünmelidir."
        ],
        "example": {
          "question": "180 TL,2 ve 3 ile ters orantılı paylaştırılıyor. Büyük pay kaç TL’dir?",
          "steps": [
            "Paylar 1/2: 1/3=3: 2 oranındadır.",
            "3 k+2 k=180; k=36.",
            "Büyük pay 3·36=108 TL."
          ],
          "answer": "108 TL.",
          "check": "Diğer pay 72 TL; 2·108=3·72=216; ters orantı ürünleri eşit."
        },
        "misconceptions": [
          {
            "wrong": "Ters orantıda küçük sayıya küçük pay verilir.",
            "correct": "Küçük katsayı daha büyük pay alır.",
            "why": "Aynı sabit çarpım için katsayı küçüldüğünde pay büyür."
          }
        ],
        "reasoningChecks": [
          {
            "question": "Bir miktarın 1/3’ünün 1/4’ü bütünün kaçıdır?",
            "answer": "1/12.",
            "why": "İkinci kesrin bütünü ilk seçilen 1/3’lük miktardır; oranlar çarpılır."
          }
        ]
      }
    ],
    "connections": [
      {
        "concept": "Karışım ve işçi",
        "why": "Sabit oranı bulmak denklem türünü belirler.",
        "lessonIds": [
          "mat-tyt-12",
          "mat-tyt-13"
        ]
      }
    ]
  },
  "mat-tyt-11": {
    "title": "Sözel bilgiyi nicelik denklemine dönüştür",
    "prerequisites": [
      {
        "concept": "Denklem",
        "why": "Aynı bilinmeyeni bütün cümlelerde aynı anlamda kullanmak için."
      }
    ],
    "goals": [
      "Değişkenin birimini ve zamanını belirt.",
      "Sayı, kesir ve yaş koşullarını birlikte denetle."
    ],
    "chapters": [
      {
        "title": "Bütünün kesri ile kalanın kesri farklıdır",
        "source": {
          "book": "TYT-mat",
          "pages": [
            47,
            48
          ]
        },
        "explanation": [
          "Bir problemde bilinmeyeni seçerken neyi saydığını açıkça tanımla: öğrenci sayısı, para miktarı veya yol uzunluğu aynı x ile gelişigüzel temsil edilmez. “Bir sayının üç fazlasının iki katı” 2(x+3), “bir sayının iki katının üç fazlası” 2 x+3 olur. İşlem sırası cümlenin gruplamasını taşır.",
          "Ardışık tüketimlerde ikinci oran çoğunlukla kalana uygulanır. İlk gün bütünün üçte biri kullanıldıysa kalan 2 x/3’tür. Ertesi gün kalanın yarısı kullanılırsa ikinci kullanım x/3 olur; kalan yine x/3’tür. Oranların paydasını aynı görüp bütün üzerinden toplamak bu zaman sırasını kaybettirir. Bulunan miktarın tam sayı olması isteniyorsa bunu son aşamada denetle."
        ],
        "example": {
          "question": "Bir depodaki suyun önce 1/4’ü, sonra kalanın 2/3’ü kullanılıyor. Sonunda 30 litre kaldığına göre başlangıçta kaç litre vardı?",
          "steps": [
            "Başlangıca x litre de. İlk kullanımdan sonra 3 x/4 kalır.",
            "İkinci aşamada bu miktarın 1/3’ü kalır: (3 x/4)·(1/3)=x/4.",
            "x/4=30, x=120."
          ],
          "answer": "120 litre.",
          "check": "İlk kullanım 30, kalan 90; ikinci kullanım 60, son kalan 30 litre."
        },
        "misconceptions": [
          {
            "wrong": "1/4+2/3 başlangıçta kullanılan toplam orandır.",
            "correct": "İkinci oran ilk aşamadan kalan miktarın oranıdır.",
            "why": "Oranların bütünleri farklı olduğundan doğrudan toplanamaz."
          }
        ],
        "reasoningChecks": [
          {
            "question": "Bir miktar önce yarıya, sonra üçte bire inerse son miktar ilk miktarın kaçı olur?",
            "answer": "1/6’sı.",
            "why": "Ardışık kalan oranları çarpılır."
          }
        ]
      },
      {
        "title": "Yaşta fark sabit, oran değişkendir",
        "source": {
          "book": "TYT-mat",
          "pages": [
            49
          ]
        },
        "explanation": [
          "Yaşlar aynı takvim anında karşılaştırılmalıdır. Bugün A ve B yaşındaki iki kişi t yıl sonra A+t ve B+t yaşındadır. Aralarındaki fark değişmez; oran ise genellikle değişir. “İki yıl önce yaşları toplamı” iki kişide toplamdan 4 çıkarır. Yaş farkını zamana göre iki kez değiştirmek aynı süreyi yanlış sayar.",
          "Geçmişe gidilen sorularda bulunan yaşların negatif olmaması gerekir. Kişi sayısı n olduğunda yaş toplamı her yıl n artar; toplam yaştan geçen süreye ulaşmak için bu artış hızını kullanabilirsin. Bir kişinin yaşını diğerinin bugünkü yaşına eşitleyen koşulda ise iki farklı zaman vardır: eşitliğin hangi kişiye ve hangi ana ait olduğunu ayrı sembollerle yaz."
        ],
        "example": {
          "question": "Anne bugün çocuğunun 4 katı yaşındadır. 6 yıl sonra annenin yaşı çocuğun yaşının 3 katı olacak. Bugünkü yaşlar nedir?",
          "steps": [
            "Çocuk x, anne 4 x olsun.",
            "6 yıl sonra 4 x+6=3(x+6).",
            "4 x+6=3 x+18, x=12; anne 48."
          ],
          "answer": "Çocuk 12, anne 48 yaşında.",
          "check": "6 yıl sonra 18 ve 54; oran 3. Yaş farkı her iki zamanda 36."
        },
        "misconceptions": [
          {
            "wrong": "Yaş oranı zaman boyunca sabit kalır.",
            "correct": "Yaş farkı sabit kalır; oran değişebilir.",
            "why": "Her iki yaşa aynı sayı eklemek oranı koruyan çarpma değildir."
          }
        ],
        "reasoningChecks": [
          {
            "question": "Üç kişinin toplam yaşı 5 yılda kaç artar?",
            "answer": "15.",
            "why": "Her biri aynı 5 yılı yaşar; toplam artış 3·5’tir."
          }
        ]
      }
    ],
    "connections": [
      {
        "concept": "İşçi ve hareket",
        "why": "Cümleden denklem kurarken birim ve zaman tutarlılığı gerekir.",
        "lessonIds": [
          "mat-tyt-12",
          "mat-tyt-13"
        ]
      }
    ]
  },
  "mat-tyt-12": {
    "title": "İş hızı ve yüzde tabanını doğru kur",
    "prerequisites": [
      {
        "concept": "Kesir ve oran",
        "why": "Bir saatte yapılan iş ile toplam işi ayırmak için."
      }
    ],
    "goals": [
      "Birlikte çalışmada hızları topla.",
      "Yüzde artış ve indirimin tabanını izle."
    ],
    "chapters": [
      {
        "title": "Süreleri değil birim zamandaki işleri topla",
        "source": {
          "book": "TYT-mat",
          "pages": [
            50
          ]
        },
        "explanation": [
          "Bir işin tamamını 1 birim kabul etmek farklı çalışanları ortak ölçekte karşılaştırır. Bir kişi işi a saatte bitiriyorsa sabit hızla saatte 1/a iş yapar. Birlikte çalışanların katkıları aynı zaman aralığında toplanır. Birlikte bitirme süresi a+b veya aritmetik ortalama değildir. Daha hızlı çalışan 1/a bakımından daha büyük katkı verir.",
          "Çalışmaya geç başlayan, erken ayrılan veya ters yönde çalışan bir düzenekte süreleri dönemlere ayır. Her dönemde etkin olan hızları belirle; yapılan iş hız·zaman çarpımıdır. Havuz boşaltan musluk negatif katkı yapar. Net hız sıfır veya negatifse boş havuzun bu koşullarda dolması beklenmez; cebirsel negatif süre fiziksel bitirme süresi olarak kabul edilmez."
        ],
        "formulas": [
          {
            "expression": "1/T=1/a+1/b",
            "meaning": "İki sabit iş hızının toplamı.",
            "conditions": "Aynı iş, eşzamanlı çalışma, a, b>0; hızlar değişmiyor."
          }
        ],
        "example": {
          "question": "Bir iş A ile 6, B ile 12 saatte biter. İkisi 2 saat çalıştıktan sonra A ayrılırsa B kaç saat daha çalışır?",
          "steps": [
            "Ortak hız 1/6+1/12=1/4 iş/saat.",
            "2 saatte işin 1/2’si yapılır; 1/2 kalır.",
            "B’nin tek başına süresi (1/2)/(1/12)=6 saat."
          ],
          "answer": "6 saat daha; toplam 8 saat.",
          "check": "A 2/6, B 8/12 iş yapar; toplam 1."
        },
        "misconceptions": [
          {
            "wrong": "Birlikte süre iki sürenin ortalamasıdır.",
            "correct": "Birlikte süre hızların toplamının tersidir.",
            "why": "Her iki katkı aynı anda işe eklenir; 6 ile 12’nin ortalaması 9, tek hızlı çalışandan bile yavaştır."
          }
        ],
        "reasoningChecks": [
          {
            "question": "Aynı hızdaki üç kişi bir işi 9 saatte yapıyorsa biri kaç saatte yapar?",
            "answer": "27 saatte.",
            "why": "Toplam hız tek kişinin hızının üç katıdır."
          }
        ]
      },
      {
        "title": "Yüzdede referans miktarı satır satır izle",
        "source": {
          "book": "TYT-mat",
          "pages": [
            51,
            52
          ]
        },
        "explanation": [
          "Yüzde p artış miktarı 1+p/100 ile, yüzde p azalış 1−p/100 ile çarpar. Ardışık değişimler çarpanların çarpımıdır. Eşit yüzdeli artış ve indirim birbirini geri almaz; ikinci yüzde daha farklı bir tabana uygulanır. Başlangıca dönmek için ters çarpan gerekir.",
          "Kâr oranı aksi söylenmedikçe maliyete göre kurulur. Satışa göre kâr yüzdesi farklı kesirdir: 20 TL kâr, 100 TL maliyette %20; 120 TL satışta %16⅔ eder. “Etiket fiyatından indirim” ile “maliyetten zarar” başka referanslardır. Bütün fiyatları bir değişkenle kurup son satışın maliyete oranını bulmak belirsizliği ortadan kaldırır."
        ],
        "formulas": [
          {
            "expression": "Son=İlk·(1+p/100)·(1−q/100)",
            "meaning": "Ardışık artış ve azalışın bileşik etkisi.",
            "conditions": "Her yüzde o aşamanın miktarına uygulanır."
          }
        ],
        "example": {
          "question": "Maliyeti 200 TL olan ürün %50 kârla etiketlenip etiketten %20 indirimle satılıyor. Gerçek kâr oranı nedir?",
          "steps": [
            "Etiket 200·1,50=300 TL.",
            "Satış 300·0,80=240 TL; kâr 40 TL.",
            "Kâra esas maliyet 200 olduğundan 40/200=%20."
          ],
          "answer": "%20.",
          "check": "Çarpan 1,50·0,80=1,20; maliyetin 1,20 katına satılmıştır."
        },
        "misconceptions": [
          {
            "wrong": "%50 kârdan %20 indirim sonucu %30 kâr kalır.",
            "correct": "Yüzdelerin tabanları farklıdır; çarpanlar kullanılır.",
            "why": "İndirim 200’den değil 300’den hesaplanır."
          }
        ],
        "reasoningChecks": [
          {
            "question": "Bir fiyat %25 artırıldıktan sonra kaç yüzde indirimle eski değerine döner?",
            "answer": "%20.",
            "why": "1,25·0,80=1; ters yüzde aynı sayı değildir."
          }
        ]
      }
    ],
    "connections": [
      {
        "concept": "Üstel büyüme",
        "why": "Ardışık yüzdeler tekrarlı çarpım ve üstel model oluşturur.",
        "lessonIds": [
          "mat-ayt-11"
        ]
      }
    ]
  },
  "mat-tyt-13": {
    "title": "Korunan miktarla karışım ve hareket çöz",
    "prerequisites": [
      {
        "concept": "Oran ve birim",
        "why": "Yüzde, hız ve toplam miktarı aynı denklemde tutmak için."
      }
    ],
    "goals": [
      "Karışımda saf maddeyi koru.",
      "Hareketi yol ve zaman parçalarına ayır."
    ],
    "chapters": [
      {
        "title": "Karışımın yüzdesi ağırlıklı ortalamadır",
        "source": {
          "book": "TYT-mat",
          "pages": [
            53
          ]
        },
        "explanation": [
          "Karışım problemlerinde korunması gereken toplamdan önce saf madde miktarını düşün. %20’lik 50 gram tuzlu suda 10 gram tuz vardır. Başka çözelti eklendiğinde tuz miktarları ve çözelti kütleleri ayrı ayrı toplanır. Son yüzdeler toplamı değildir; toplam tuzun toplam karışıma oranıdır. Eşit kütlelerde yüzdelerin ortalaması alınabilir; kütleler farklıysa ağırlıklar gerekir.",
          "Buharlaşmada hangi maddenin uzaklaştığını bilmek gerekir. Yalnız su uçuyorsa tuz sabit kalırken toplam azalır ve yüzde artar. Karışımdan bir miktar çözelti çekilirse homojenlik varsayımıyla tuz ve su aynı oranda azalır; kalan karışımın yüzdesi değişmez. Bu iki durum aynı “miktar azaldı” ifadesiyle tek modele indirgenemez."
        ],
        "formulas": [
          {
            "expression": "c=(m₁c₁+m₂c₂)/(m₁+m₂)",
            "meaning": "Kütlece derişimin korunumu.",
            "conditions": "Aynı çözünen; derişimler aynı ölçekte; tepkime veya kayıp yok."
          }
        ],
        "example": {
          "question": "80 gram %25 tuzlu sudan yalnız su buharlaştırılarak %40 karışım elde ediliyor. Kaç gram su uçmuştur?",
          "steps": [
            "Başlangıç tuzu 80·0,25=20 gram; tuz uçmadığı için sabit.",
            "Son kütle M için 0,40 M=20; M=50 gram.",
            "Uçan su 80−50=30 gram."
          ],
          "answer": "30 gram.",
          "check": "Başlangıçta 60 gram su vardı; 30 gram kalır. 20/(20+30)=0,40."
        },
        "misconceptions": [
          {
            "wrong": "Buharlaşan miktar yüzde farkıyla toplamın çarpımıdır.",
            "correct": "Önce korunan tuzu, sonra son toplamı bul.",
            "why": "Derişimde payda değişir; yüzde farkı doğrudan kütle farkı değildir."
          }
        ],
        "reasoningChecks": [
          {
            "question": "Bir çözeltinin yarısı çekilirse kalan derişim yarıya iner mi?",
            "answer": "Hayır; homojense aynı kalır.",
            "why": "Çözünen ve toplam aynı yarım çarpanla azalır."
          }
        ]
      },
      {
        "title": "Hız ortalaması hangi ağırlıkla alınır?",
        "source": {
          "book": "TYT-mat",
          "pages": [
            54,
            55
          ]
        },
        "explanation": [
          "Ortalama hız toplam yolun toplam zamana bölümüdür. Gidiş ve dönüşte eşit zaman harcanırsa aritmetik ortalama kullanılabilir; eşit yol harcanıyorsa yavaş bölüm daha uzun zaman ağırlığı alır. Bu nedenle eşit yoldaki hızların aritmetik ortalaması genellikle yanlıştır. Her parçanın süresini yol/hız olarak bulmak güvenli bir başlangıçtır.",
          "Karşılaşmada iki kişinin aralarındaki mesafeyi kapatma hızı zıt yönlerde hızlar toplamı, aynı yönde yakalamada hızlar farkıdır. Ancak farklı başlangıç anları veya duraklamalar varsa önce o aralıktaki konumları güncelle. Rutin olmayan sorularda tablo, küçük örnek veya korunan toplam kullanmak; bütün olasılıkları tek büyük denkleme sıkıştırmaktan daha anlamlı olabilir."
        ],
        "formulas": [
          {
            "expression": "vort=toplam yol/toplam zaman",
            "meaning": "Bir hareketin bütününe ait ortalama sürat.",
            "conditions": "Bekleme süreleri toplam zamana dahildir."
          }
        ],
        "example": {
          "question": "Bir araç aynı yolu giderken 60, dönerken 40 km/sa hızla alıyor. Ortalama sürati nedir?",
          "steps": [
            "Her yön için yolu 120 km seç; toplam 240 km.",
            "Süreler 120/60=2 ve 120/40=3 saat; toplam 5 saat.",
            "Ortalama 240/5=48 km/sa."
          ],
          "answer": "48 km/sa.",
          "check": "Yavaş bölüm daha uzun sürdüğünden sonuç 50’den küçük, 40 ile 60 arasında."
        },
        "misconceptions": [
          {
            "wrong": "Eşit yollarda hızlar toplanıp ikiye bölünür.",
            "correct": "Eşit yol için süre ağırlıkları farklıdır.",
            "why": "Yavaş hızda geçirilen zaman daha fazladır."
          }
        ],
        "reasoningChecks": [
          {
            "question": "Araç 90 km/sa ile 20 dakika giderse kaç km yol alır?",
            "answer": "30 km.",
            "why": "20 dakika=1/3 saat; 90·1/3=30."
          }
        ]
      }
    ],
    "connections": [
      {
        "concept": "Denklem kurma",
        "why": "Birim, başlangıç ve korunum koşulları modelin doğruluğunu belirler.",
        "lessonIds": [
          "mat-tyt-11"
        ]
      }
    ]
  },
  "mat-tyt-14": {
    "title": "Önermeyi karşı örnek ve mantıksal eşdeğerlikle çöz",
    "prerequisites": [
      {
        "concept": "Küme ve sayı koşulları",
        "why": "Bir iddianın hangi evrende değerlendirildiğini bilmek için."
      }
    ],
    "goals": [
      "Koşullu önermeyi karşıt tersiyle ayır.",
      "Niceleyicinin değillemesini doğru kur."
    ],
    "chapters": [
      {
        "title": "Koşulun yönü bilgi kaybını belirler",
        "source": {
          "book": "TYT-mat",
          "pages": [
            56,
            57,
            58,
            59,
            60,
            61
          ]
        },
        "explanation": [
          "Bir önerme doğruluk değeri taşıyan yargıdır. p⇒q, p doğruyken q’nun yanlış olmasını yasaklar; p yanlışken koşullu önerme doğru kabul edilir. Bu mantıksal tanım gündelik “neden olma” anlamıyla aynı şey değildir. “4’e bölünüyorsa çifttir” doğrudur; çift olma 4’e bölünmeyi garanti etmez. Gerekli koşul ile yeterli koşul bu yönden ayrılır.",
          "p⇒q ile ¬q⇒¬p eşdeğerdir; buna karşıt ters denir. q⇒p ise önermenin ters yönüdür ve ayrıca kanıt ister. Bir çıkarımda yalnız sonucu görmek başlangıç koşulunu geri getirmez. Ve/veya bağlaçları değişirken değillemenin De Morgan ile dağılması gerekir; “A ve B değil” ifadesindeki parantez anlamı değiştirebilir."
        ],
        "formulas": [
          {
            "expression": "¬(p∧q)≡¬p∨¬q",
            "meaning": "Birlikte doğru olmanın değillemesi.",
            "conditions": "p, q önerme."
          },
          {
            "expression": "p⇒q ≡ ¬q⇒¬p",
            "meaning": "Koşullunun karşıt tersi.",
            "conditions": "Yalnız mantıksal eşdeğerlik; ters yönle karıştırılmaz."
          }
        ],
        "example": {
          "question": "“n,6’ya bölünüyorsa n çifttir.” önermesinin karşıt tersini ve ters yönünü yaz; hangisi eşdeğerdir?",
          "steps": [
            "p: 6’ya bölünme; q: çift olma.",
            "Karşıt ters: n çift değilse 6’ya bölünmez.",
            "Ters yön: n çiftse 6’ya bölünür; n=2 bunu çürütür."
          ],
          "answer": "Karşıt ters eşdeğerdir; ters yön yanlıştır.",
          "check": "6’nın her katı 2’nin katıdır, fakat 2’nin her katı 6’nın katı değildir."
        },
        "misconceptions": [
          {
            "wrong": "Doğru önermenin tersi de doğrudur.",
            "correct": "Yön değiştirmek yeni bir iddia oluşturur.",
            "why": "Bir kümenin diğerinin içinde olması iki kümenin eşit olması değildir."
          }
        ],
        "reasoningChecks": [
          {
            "question": "p⇒q yalnız hangi durumda yanlıştır?",
            "answer": "p doğru ve q yanlışken.",
            "why": "Koşulun gerçekleşip sonucun gerçekleşmemesi iddiayı bozar."
          }
        ]
      },
      {
        "title": "Her ile en az birin kanıt yükü farklıdır",
        "source": {
          "book": "TYT-mat",
          "pages": [
            62,
            63
          ]
        },
        "explanation": [
          "“Her x için P(x)” bütün evreni kapsar; tek bir karşı örnek değillemek için yeterlidir. “En az bir x için P(x)” ise bir uygun örnekle kanıtlanır; birkaç başarısız deneme değillemeye yetmez. Değillemede hem niceleyici hem içerideki yargı değişir. “Her öğrencinin kitabı var” ın değili “hiçbirinin kitabı yok” değil, “kitabı olmayan en az bir öğrenci var” dır.",
          "Tanım kavramın anlamını kurar; teorem ispat isteyen sonuçtur. Eşitlikte birkaç sayısal kontrol genel ispat sayılmaz. Doğrudan ispatta varsayımdan sonuca, karşıt ters ispatta sonucun yokluğundan varsayımın yokluğuna gidersin. Çelişki yönteminde iddianın değili geçici kabul edilip tutarsızlık gösterilir; başlangıç varsayımı ile sonuç varsayımını açık ayır."
        ],
        "example": {
          "question": "“Her tam sayı n için n²+n çifttir.” iddiasını kanıtla.",
          "steps": [
            "n²+n=n(n+1) biçiminde çarpanlara ayır.",
            "Ardışık iki tam sayıdan biri çifttir.",
            "Çarpımda bir çift çarpan bulunduğundan sonuç çifttir; bütün n’ler kapsanır."
          ],
          "answer": "İddia bütün tam sayılar için doğrudur.",
          "check": "Negatif n’lerde de ardışık olma ve çift çarpan gerekçesi aynen geçerlidir."
        },
        "misconceptions": [
          {
            "wrong": "İlk beş sayıda doğruysa bütün sayılarda doğrudur.",
            "correct": "Örnekler destek olur; genel gerekçe bütün evreni kapsamalıdır.",
            "why": "Altıncı veya daha sonraki bir değer ilk örneklerden mantıksal olarak çıkmaz."
          }
        ],
        "reasoningChecks": [
          {
            "question": "“Her x için x²>0” önermesinin değili nedir?",
            "answer": "En az bir x için x²≤0.",
            "why": "x=0 gerçek sayılarda bu değillemeyi doğrular."
          }
        ]
      }
    ],
    "connections": [
      {
        "concept": "Fonksiyon özellikleri",
        "why": "Birebirlik gibi evrensel iddialar genel gerekçe veya karşı örnekle sınanır.",
        "lessonIds": [
          "mat-tyt-19"
        ]
      }
    ]
  },
  "mat-tyt-15": {
    "title": "Küme işlemlerini bölge ve üyelikle açıkla",
    "prerequisites": [
      {
        "concept": "Mantık bağlaçları",
        "why": "Kesişimi ve birleşimi üyelik koşullarıyla okumak için."
      }
    ],
    "goals": [
      "Çakışan grupları iki kez sayma.",
      "Alt kümeyi elemanla ve sıralı ikiliyle karıştırma."
    ],
    "chapters": [
      {
        "title": "Alt kümeler bağımsız seçimlerden oluşur",
        "source": {
          "book": "TYT-mat",
          "pages": [
            64,
            65,
            66,
            67
          ]
        },
        "explanation": [
          "A⊆B demek A’nın her elemanının B’de bulunmasıdır. Bir elemanın A’ya ait olması ile bir kümenin A’nın alt kümesi olması farklı ilişkilerdir. Boş küme bütün kümelerin alt kümesidir: boş kümeden alınan ve üyelik koşulunu bozacak hiçbir eleman yoktur. A’nın kendisi de alt kümesidir; öz alt kümede yalnız bu son seçim çıkarılır.",
          "n elemanlı kümede her eleman için dahil et/etme şeklinde iki bağımsız karar vardır; toplam 2ⁿ alt küme buradan gelir. Belirli k elemanın bulunması zorunluysa yalnız kalan n−k eleman serbesttir. Tümleyen evrensel kümeye bağlıdır; evren belirtilmeden “A’da olmayan her şey” sayısal bir küme vermez."
        ],
        "formulas": [
          {
            "expression": "Alt küme sayısı=2ⁿ",
            "meaning": "Her eleman için iki üyelik seçimi.",
            "conditions": "n farklı elemanlı sonlu küme."
          }
        ],
        "example": {
          "question": "A={1,2,3,4,5} kümesinin 1’i içerip 2’yi içermeyen kaç alt kümesi vardır?",
          "steps": [
            "1’in dahil, 2’nin dışarıda olması sabit iki karardır.",
            "3,4,5 için iki seçenek sürer.",
            "2³=8 alt küme vardır."
          ],
          "answer": "8.",
          "check": "Boş serbest seçim {1}, bütün serbest seçim {1,3,4,5}; aradaki altı seçimle toplam 8."
        },
        "misconceptions": [
          {
            "wrong": "5 eleman varsa her ek koşuldan sonra da 2⁵ alt küme vardır.",
            "correct": "Zorunlu kararlar serbest eleman sayısını azaltır.",
            "why": "2⁵ sayımı beşinin de bağımsız olduğu duruma aittir."
          }
        ],
        "reasoningChecks": [
          {
            "question": "Boş küme A’nın elemanı olmak zorunda mıdır?",
            "answer": "Hayır.",
            "why": "Alt küme olmak eleman olmakla aynı ilişki değildir."
          }
        ]
      },
      {
        "title": "Çift saymayı çıkar, sonra sıralamayı koru",
        "source": {
          "book": "TYT-mat",
          "pages": [
            68,
            69
          ]
        },
        "explanation": [
          "Birleşimde A ve B ayrı ayrı sayılınca ortak elemanlar iki kez sayılır; kesişim bir kez çıkarılarak düzeltilir. “Yalnız A” bölgesi A’dan kesişimin çıkarılmasıdır. “Hiçbiri” evrensel toplamdan birleşimin çıkarılmasıyla bulunur. En az bir, yalnız bir ve ikisi birden ifadeleri farklı bölgeleri seçer.",
          "Kartezyen çarpımda (a, b) sıralı bir ikilidir; ilk bileşen A’dan, ikincisi B’den gelir. A×B ile B×A genellikle aynı küme değildir; eleman sayıları eşit olabilir. Çarpımın eleman sayısı her ilk bileşen için bütün ikinci bileşenlerin seçilebilmesinden gelir. Bağımlı bir koşul eklenirse bütün ikililer geçerli olmayabilir."
        ],
        "formulas": [
          {
            "expression": "|A∪B|=|A|+|B|−|A∩B|",
            "meaning": "İki kez sayılan ortak bölgeyi düzeltir.",
            "conditions": "Sonlu kümeler."
          }
        ],
        "example": {
          "question": "40 kişiden 24’ü çay,18’i kahve içiyor; 8’i ikisini de içmiyor. İkisini içen ve yalnız çay içen kaç kişi vardır?",
          "steps": [
            "En az birini içen 40−8=32.",
            "Kesişim 24+18−32=10.",
            "Yalnız çay 24−10=14."
          ],
          "answer": "İkisini 10, yalnız çay 14 kişi.",
          "check": "Yalnız kahve 8; 14+10+8+8=40."
        },
        "misconceptions": [
          {
            "wrong": "Kesişim sayısı iki grubun toplamından bağımsızdır.",
            "correct": "Toplam kişi ve hiçbiri bilgisi ortak bölgeyi sınırlar.",
            "why": "Aynı kişi birleşimde yalnız bir kez sayılmalıdır."
          }
        ],
        "reasoningChecks": [
          {
            "question": "|A|=3,|B|=4 ise kaç sıralı ikili vardır?",
            "answer": "12.",
            "why": "Her üç ilk bileşene dört ikinci bileşen eşlenir."
          }
        ]
      }
    ],
    "connections": [
      {
        "concept": "Sayma ve olasılık",
        "why": "Kümeler olayları, birleşim ve kesişim ise olasılık koşullarını temsil eder.",
        "lessonIds": [
          "mat-tyt-18",
          "mat-ayt-05"
        ]
      }
    ]
  },
  "mat-tyt-16": {
    "title": "Saymada nesne, yer ve tekrar koşullarını ayır",
    "prerequisites": [
      {
        "concept": "Çarpma ilkesi",
        "why": "Her aşamada kaç seçimin kaldığını izlemek için."
      }
    ],
    "goals": [
      "Toplama ve çarpma durumlarını ayır.",
      "Aynı nesnelerin aşırı sayımını düzelt."
    ],
    "chapters": [
      {
        "title": "Alternatif yollar toplanır, ardışık seçimler çarpılır",
        "source": {
          "book": "TYT-mat",
          "pages": [
            70,
            71
          ]
        },
        "explanation": [
          "Bir iş ya A yoluyla ya B yoluyla yapılıyorsa ayrık seçenekler toplanır. Aynı sonuç iki yolun içinde de varsa önce çakışmayı ayırmak gerekir. Bir işin tamamlanması için önce A, sonra B seçiliyorsa ve her ilk seçimde aynı sayıda ikinci seçenek varsa çarpma ilkesi uygulanır. Seçenek sayıları değişiyorsa durumlara bölüp her grubun çarpımını topla.",
          "Rakam sorularında ilk basamağın sıfır olamaması ile rakam tekrarı yasağı farklı koşullardır. İlk seçimden sonra kullanılabilecek rakamların sayısını güncelle. n! farklı n nesneyi sıralama sayısıdır; 0!=1 tanımı boş sıralamanın tek biçimde yapılabilmesi ve formüllerin uç durumlarda tutarlı kalmasıyla uyumludur."
        ],
        "formulas": [
          {
            "expression": "n!=n(n−1)…1; 0!=1",
            "meaning": "Farklı nesnelerin bütün sıralanışları.",
            "conditions": "n negatif olmayan tam sayı."
          }
        ],
        "example": {
          "question": "0,1,2,3,4 rakamlarıyla rakamları farklı üç basamaklı kaç çift sayı yazılır?",
          "steps": [
            "Son rakam 0 ise ilk için 4, orta için 3 seçenek: 12.",
            "Son rakam 2 veya 4 ise 2 seçim; ilk sıfır ve seçilen son rakam dışında 3; orta 3: 18.",
            "Toplam 12+18=30."
          ],
          "answer": "30.",
          "check": "Son rakamın 0 olması ilk basamağın seçenek sayısını değiştirdiği için ayrı sayıldı."
        },
        "misconceptions": [
          {
            "wrong": "Her basamak için 5 seçenek vardır.",
            "correct": "Başta sıfır ve tekrar yasağı seçimleri değiştirir.",
            "why": "Seçimler bağımsız ve eşit sayıda değildir."
          }
        ],
        "reasoningChecks": [
          {
            "question": "İki farklı ulaşım yolunun ortak bir güzergâhı varsa sayıları doğrudan toplar mıyız?",
            "answer": "Hayır; ortak seçenek iki kez sayılır.",
            "why": "Toplama ilkesi ayrık durumlar ister."
          }
        ]
      },
      {
        "title": "Permütasyon sırayı, tekrarlı permütasyon ayırt edilebilirliği sayar",
        "source": {
          "book": "TYT-mat",
          "pages": [
            72,
            73
          ]
        },
        "explanation": [
          "n nesneden r tanesini sıra önemli olacak şekilde seçince ilk yere n, ikinciye n−1, son yere n−r+1 seçenek kalır. Aynı seçilmiş nesnelerin farklı sıraları farklı sonuçtur. Yarışta ilk üç, görev dağıtımı ve parola gibi sorularda yerlerin anlamı farklıdır.",
          "Özdeş harfleri önce farklı etiketlenmiş gibi sayarsan aynı görünür sonuç birden fazla üretilir. Örneğin iki A kendi arasında 2! biçimde yer değiştirir ama sözcük değişmez. Her özdeş grubun faktöriyeline bölerek bu aşırı sayım düzeltilir. Tekrar edilen nesnelerin sayısını değil, onların ayırt edilemeyen yer değiştirmelerinin sayısını bölmen gerekir."
        ],
        "formulas": [
          {
            "expression": "P(n,r)=n!/(n−r)!",
            "meaning": "Sıralı seçim.",
            "conditions": "0≤r≤n; nesneler farklı."
          },
          {
            "expression": "n!/(k₁!…kₛ!)",
            "meaning": "Özdeş grupların görünür sıralanışları.",
            "conditions": "k₁+…+kₛ=n."
          }
        ],
        "example": {
          "question": "ANANAS harfleriyle kaç farklı altı harfli diziliş yapılır?",
          "steps": [
            "6 harf var; Aüç, Niki, Sbirkez geçiyor.",
            "Hepsini farklı saymak 6! sonuç üretir.",
            "Özdeş A’ların 3!, N’lerin 2! yer değiştirmesini böl: 720/(6·2)=60."
          ],
          "answer": "60.",
          "check": "S’nin 6 konumu; diğer 5 yerde N’lerin 2 konumu C(5,2)=10; 6·10=60."
        },
        "misconceptions": [
          {
            "wrong": "Özdeş harf sayısı kadar bölmek yeterlidir.",
            "correct": "Her özdeş grubun faktöriyeline bölünür.",
            "why": "Üç A’nın kendi etiketleri 3 değil 6 biçimde yer değiştirebilir."
          }
        ],
        "reasoningChecks": [
          {
            "question": "Beş öğrenciden başkan ve yardımcısı kaç biçimde seçilir?",
            "answer": "20.",
            "why": "Görevler farklı: 5·4; aynı ikilinin ters görevleri farklıdır."
          }
        ]
      }
    ],
    "connections": [
      {
        "concept": "Kombinasyon",
        "why": "Sıralı sayımın r! ile bölünmesi sırasız seçimi oluşturur.",
        "lessonIds": [
          "mat-tyt-17"
        ]
      }
    ]
  },
  "mat-tyt-17": {
    "title": "Kombinasyon ve binomu aynı seçim mantığıyla kur",
    "prerequisites": [
      {
        "concept": "Faktöriyel ve permütasyon",
        "why": "Aynı grubun bütün sıralarını ayıklamak için."
      }
    ],
    "goals": [
      "Seçimde sıranın önemini belirle.",
      "Binom katsayısını çarpan seçimiyle açıkla."
    ],
    "chapters": [
      {
        "title": "Gruplarda sıra yoksa r! aşırı sayımı düzeltir",
        "source": {
          "book": "TYT-mat",
          "pages": [
            74,
            75,
            76
          ]
        },
        "explanation": [
          "Bir kurulda kişiler aynı görevi taşıyorsa seçili grubun sırası sonucu değiştirmez. Permütasyon her r kişilik grubu r! kez saydığı için buna bölünür. C(n, r)=C(n, n−r) eşitliği seçilen grup ile dışarıda kalan grubun birbirini tek biçimde belirlemesinden gelir. Formül kullanmadan da bu birebir eşlemeyi görebilirsin.",
          "Kısıtlı seçimde önce koşulu sınıflandır: en az bir isteniyorsa bütün durumlardan hiç olmayanı çıkarmak kısa olabilir. Tam iki isteniyorsa her gruptan alınacak kişi sayısını açıkça yaz. Geometride noktalar arasından üçlü seçmek her zaman üçgen saymak değildir; doğrusal üçlüler çıkarılmalıdır. Aynı doğru üzerindeki noktalar sınırlaması şekli sayımdan önce etkiler."
        ],
        "formulas": [
          {
            "expression": "C(n,r)=n!/[r!(n−r)!]",
            "meaning": "Sırasız r elemanlı gruplar.",
            "conditions": "n, r tam sayı; 0≤r≤n."
          }
        ],
        "example": {
          "question": "5 kız ve 4 erkek arasından en az bir kız içeren 3 kişilik kaç kurul seçilir?",
          "steps": [
            "Bütün kurullar C(9,3)=84.",
            "Hiç kız olmayanlar C(4,3)=4.",
            "İstenen 84−4=80."
          ],
          "answer": "80.",
          "check": "Tam 1 kız: 5·6=30; tam 2 kız: 10·4=40; 3 kız: 10; toplam 80."
        },
        "misconceptions": [
          {
            "wrong": "“En az bir” ile “tam bir” aynı sayımı verir.",
            "correct": "En az bir,1 ve 2 ve 3 gibi bütün uygun sayıları kapsar.",
            "why": "Yalnız 1 kişiyi saymak diğer uygun grupları dışarıda bırakır."
          }
        ],
        "reasoningChecks": [
          {
            "question": "Aynı doğru üzerindeki 4 noktadan kaç üçgen oluşur?",
            "answer": "0.",
            "why": "Üç farklı nokta seçmek yeterli değildir; doğrusal olmama koşulu gerekir."
          }
        ]
      },
      {
        "title": "Binom katsayısı hangi çarpandan hangi terim seçildiğini sayar",
        "source": {
          "book": "TYT-mat",
          "pages": [
            77,
            78
          ]
        },
        "explanation": [
          "(a+b)ⁿ, n tane aynı parantezin çarpımıdır. Bir terimde b’nin üssü k ise k parantezden b, kalanlardan a seçilmiştir. Hangi k parantez olduğu C(n, k) biçimde seçilir. Katsayı buradan gelir; formül ezberinden önce çarpımın seçim yapısını anlamak işaret ve üs hatalarını azaltır.",
          "Genel terimde a’nın üssü n−k, b’nin üssü k olur. İfadeler x’in kuvvetlerini içeriyorsa toplam üs bu iki katkının toplamıdır. Sabit terim için x üssü 0 olmalıdır; bulunan k’nin 0 ile n arasında tam sayı olması şarttır. Böyle bir k yoksa sabit terim de yoktur. Açılımın katsayıları toplamı için x=1 koymak, bütün x kuvvetlerini 1 yapar."
        ],
        "formulas": [
          {
            "expression": "(a+b)ⁿ=Σ C(n,k) aⁿ⁻ᵏbᵏ",
            "meaning": "n çarpandaki k tane b seçimi.",
            "conditions": "n negatif olmayan tam sayı; k=0,…, n."
          }
        ],
        "example": {
          "question": "(2 x−1)⁵ açılımında x³ katsayısını bul.",
          "steps": [
            "x³ için beş parantezin üçü nden 2 x, ikisinden−1 seçilir.",
            "Seçim sayısı C(5,3)=10.",
            "Katsayı 10·2³·(−1)²=80."
          ],
          "answer": "80.",
          "check": "x³ teriminde iki negatif seçildiği için katsayı pozitif olmalıdır."
        },
        "misconceptions": [
          {
            "wrong": "Binomdaki sıra numarası her zaman x’in üssüne eşittir.",
            "correct": "x’in üssü seçilen ifadelerin kuvvetlerinden hesaplanır.",
            "why": "Örneğin( x²+1/x )ⁿiçinüs 2(n−k)−k olur."
          }
        ],
        "reasoningChecks": [
          {
            "question": "(x−1)⁶ katsayıları toplamı kaçtır?",
            "answer": "0.",
            "why": "x=1 yazınca(1−1)⁶=0."
          }
        ]
      }
    ],
    "connections": [
      {
        "concept": "Olasılık",
        "why": "Eş olasılıklı sırasız seçimlerde pay ve payda kombinasyonla sayılabilir.",
        "lessonIds": [
          "mat-tyt-18",
          "mat-ayt-05"
        ]
      }
    ]
  },
  "mat-tyt-18": {
    "title": "Olasılıkta önce eş olasılıklı örnek uzayı kur",
    "prerequisites": [
      {
        "concept": "Küme ve sayma",
        "why": "Olay ile bütün olası sonuçları aynı ölçekte saymak için."
      }
    ],
    "goals": [
      "Örnek uzayın elemanlarını eş olasılıklı seç.",
      "Birleşim, kesişim ve tümleyeni kullan."
    ],
    "chapters": [
      {
        "title": "İstenen/bütün oranı ne zaman çalışır?",
        "source": {
          "book": "TYT-mat",
          "pages": [
            79,
            80
          ]
        },
        "explanation": [
          "P(A)=|A|/|E| formülü sonlu ve eş olasılıklı temel sonuçlarda kullanılabilir. İki zar toplamlarını 2 ile 12 arasında 11 eş sonuç saymak doğru değildir; toplam 7 altı farklı sıralı ikiliden, toplam 2 yalnız birinden oluşur. Eş olasılıklı temel sonuçlar iki zarın 36 sıralı ikili sidir.",
          "Bir örnek uzayda sonucun nasıl üretildiğini belirtmek gerekir. Torbadan aynı anda iki top çekmek ile sırayla çekmek farklı listeler verir; tutarlı sayımla aynı olay olasılığı elde edilebilir. Ancak payda sıralı, pay sırasız sayılırsa sonuç bozulur. Ayrıca sonuçların sayılması, fiziksel olarak eş olasılıklı olma varsayımının yerine geçmez."
        ],
        "formulas": [
          {
            "expression": "P(A)=|A|/|E|",
            "meaning": "Sonlu eş olasılıklı sonuçların oranı.",
            "conditions": "|E|>0; temel sonuçlar eş olasılıklı."
          }
        ],
        "example": {
          "question": "İki adil zar atılıyor. Toplamın 8 olma olasılığı nedir?",
          "steps": [
            "Eş olasılıklı sonuçları(ilk zar, ikinci zar) olarak seç: 36 tane.",
            "Toplam 8 verenler(2,6),(3,5),(4,4),(5,3),(6,2): 5 tane.",
            "Olasılık 5/36."
          ],
          "answer": "5/36.",
          "check": "Toplam 8,7 kadar sık değildir; 7 için 6 durum vardır."
        },
        "misconceptions": [
          {
            "wrong": "Toplamlar 2–12 arasında olduğundan her toplamın olasılığı 1/11’dir.",
            "correct": "Toplamları üreten temel durum sayıları farklıdır.",
            "why": "Adil zarlar toplamların değil sıralı yüz çiftlerinin eş olasılıklı olmasını sağlar."
          }
        ],
        "reasoningChecks": [
          {
            "question": "İmkânsız olayın olasılığı neden 0’dır?",
            "answer": "Uygun temel sonuç sayısı 0 olduğu için.",
            "why": "Pay 0, payda pozitif olduğundan oran 0 çıkar."
          }
        ]
      },
      {
        "title": "Tümleyen zor sayımı kolaylaştırır",
        "source": {
          "book": "TYT-mat",
          "pages": [
            79,
            80
          ]
        },
        "explanation": [
          "Bir olay ile tümleyeni ayrık olup birlikte bütün örnek uzayı oluşturur; bu yüzden olasılıkları 1’e tamamlar. “En az bir” gibiçok alt durumlu olaylarda “hiç yok” olayını saymak daha kısa olabilir. İki olayın birleşiminde ortak bölgeyi çıkarmak gerekir. Ayrık olayda kesişim 0 olur; ayrıklık bağımsızlıkla aynı şey değildir.",
          "İki zar olayında “birinci zar çift” ve“ikinci zar çift” bağımsızdır; aynı zar üzerinde “çift” ve“tek” ayrıktır. İkinci olay birincinin oluşmasını engelliyorsa pozitif olasılıklı olaylar bağımsız olamaz. TYT’de çoğu soru bu ilişkiyi örnek uzaydan sayarak çözer; AYT’de koşullu olasılık ile daha genel ifade edilir."
        ],
        "formulas": [
          {
            "expression": "P(A∪B)=P(A)+P(B)−P(A∩B)",
            "meaning": "Birleşimde ortak olasılığın iki kez sayılmasını düzeltir.",
            "conditions": "A, B aynı örnek uzayda."
          }
        ],
        "example": {
          "question": "Bir adil zar iki kez atılıyor. En az bir kez 6 gelme olasılığı nedir?",
          "steps": [
            "Tümleyen iki atışta da 6 gelmeme sidir.",
            "Her atış için 5 uygun yüz, iki atış için 25 temel durum vardır; 36 durumun 25’i.",
            "İstenen 1−25/36=11/36."
          ],
          "answer": "11/36.",
          "check": "Tam bir 6 için 10, iki 6 için 1 durum; toplam 11."
        },
        "misconceptions": [
          {
            "wrong": "En az bir 6 olasılığı 1/6+1/6=1/3’tür.",
            "correct": "İki 6 gelen ortak durum bir kez çıkarılmalıdır.",
            "why": "Aynı sonuç iki ayrı “6 geldi” olayında sayılır."
          }
        ],
        "reasoningChecks": [
          {
            "question": "P(A)=0,3 ise P(A’nın tümleyeni) kaçtır?",
            "answer": "0,7.",
            "why": "İki olay bütün örnek uzayı ayrık biçimde paylaşır."
          }
        ]
      }
    ],
    "connections": [
      {
        "concept": "Koşullu olasılık",
        "why": "Yeni bilgi örnek uzayı daraltır ve oranı değiştirir.",
        "lessonIds": [
          "mat-ayt-05"
        ]
      }
    ]
  },
  "mat-tyt-19": {
    "title": "Fonksiyonu eşleme kuralı ve tanım kümesiyle incele",
    "prerequisites": [
      {
        "concept": "Küme ve sıralı ikili",
        "why": "Girdi ve çıktının görevlerini ayırmak için."
      }
    ],
    "goals": [
      "Her girdinin tek görüntüsü olmasını denetle.",
      "Birebirlik ve örtenliği küme bilgisiyle belirle."
    ],
    "chapters": [
      {
        "title": "Bir formül tek başına fonksiyonu bütünüyle belirlemez",
        "source": {
          "book": "TYT-mat",
          "pages": [
            81,
            82,
            83,
            84
          ]
        },
        "explanation": [
          "f: A→B gösterimi kuralın yanında tanım ve değer kümelerini de bildirir. A’daki her elemanın B’de tam bir görüntüsü bulunmalıdır. Aynı çıktıya birden çok girdi gidebilir; bu durum fonksiyon olmayı bozmaz, birebirliği bozar. Hiç kullanılmayan B elemanları ise örtenliği etkiler. Görüntü kümesi gerçekten elde edilen çıktılardan oluşur.",
          "f(x)=x² kuralı gerçek sayılardan gerçek sayılara birebir veya örten değildir. Tanım kümesi[0,∞), değer kümesi[0,∞) seçilirse ikisini de sağlar. Kural değişmeden özelliklerin değişmesi kümelerin önemini gösterir. Payda sıfır olamaz, çift kök içi negatif olamaz; formülün doğal tanım kümesini bu kısıtlardan bulursun."
        ],
        "formulas": [
          {
            "expression": "f birebir ⇔ f(u)=f(v)⇒u=v",
            "meaning": "Aynı çıktının girdiyi tek belirlemesi.",
            "conditions": "u, v tanım kümesinde."
          }
        ],
        "example": {
          "question": "f: [0,∞)→[0,∞), f(x)=x²+1 fonksiyonu birebir ve örten midir?",
          "steps": [
            "x≥0 üzerinde kare artar; farklı girdiler farklı çıktılar üretir: birebirdir.",
            "En küçük çıktı 1’dir; görüntü[1,∞).",
            "Değer kümesindeki 0 gibi sayılar elde edilmez; örten değildir."
          ],
          "answer": "Birebir, fakat örten değil.",
          "check": "f(0)=1; f(x)=0 denklemi x≥0 içinde çözümsüz."
        },
        "misconceptions": [
          {
            "wrong": "Görüntü kümesi ile değer kümesi daima aynıdır.",
            "correct": "Görüntü, değer kümesinin alt kümesidir; eşitse örtenlik vardır.",
            "why": "Fonksiyonun bütün olası hedefleri kullanması zorunlu değildir."
          }
        ],
        "reasoningChecks": [
          {
            "question": "Bir girdinin iki farklı çıktısı varsa fonksiyon mudur?",
            "answer": "Hayır.",
            "why": "Tek değerlilik fonksiyon tanımının temel koşuludur."
          }
        ]
      },
      {
        "title": "Parçalı kuralda doğru dalı seç, işlemde ortak alanı koru",
        "source": {
          "book": "TYT-mat",
          "pages": [
            85,
            86,
            87,
            88
          ]
        },
        "explanation": [
          "Parçalı fonksiyonda kuralı girdinin bulunduğu aralık belirler. Sınır noktasındaki≤ve<işaretleri hangi dalın kullanılacağını söyler. İki farklı dalın aynı x için iki farklı değer üretmesi veya hiçbir dalın o x’i kapsamaması tanımda ayrıca ele alınır. Çiftlik ve teklik için tanım kümesinin 0’a göre simetrik olması gerekir.",
          "f+g, f·g gibi işlemler her iki fonksiyonun tanımlı olduğu ortak girdilerde yapılır. Bölümde buna g(x)≠0 koşulu eklenir. İfadeleri sadeleştirmek yasak girdileri ortadan kaldırmaz. Grafik yorumunda düşey doğru testi aynı girdiye iki çıktı düşmesini, yatay doğru testi ise bir çıktının birden çok girdiden gelmesini ayırır."
        ],
        "example": {
          "question": "f(x)=x+2, x<1; f(x)=x², x≥1 olsun. f(−1)+f(1) ve f(2) hesapla.",
          "steps": [
            "−1<1 olduğundan f(−1)=−1+2=1.",
            "1 ikinci dala aittir; f(1)=1²=1.",
            "2 de ikinci dalda; f(2)=4. İlk toplam 2."
          ],
          "answer": "Toplam 2; f(2)=4.",
          "check": "Sınırda ilk dal kullanılsaydı f(1)=3 çıkarak tanıma aykırı olurdu."
        },
        "misconceptions": [
          {
            "wrong": "Parçalı fonksiyonun her değerini iki kuralla da hesaplarım.",
            "correct": "Her girdi yalnız kendi koşulundaki dal ile hesaplanır.",
            "why": "Koşullar kuralın ayrılmaz parçasıdır."
          }
        ],
        "reasoningChecks": [
          {
            "question": "f(x)=1/xçift mi, tek mi?",
            "answer": "Tektir.",
            "why": "Tanım kümesi simetrik ve f(−x)=−1/x=−f(x)."
          }
        ]
      }
    ],
    "connections": [
      {
        "concept": "Bileşke ve ters",
        "why": "Çıktının sonraki fonksiyona uygun girdi olması gerekir.",
        "lessonIds": [
          "mat-tyt-20"
        ]
      }
    ]
  },
  "mat-tyt-20": {
    "title": "Bileşkede yolu, terste geri dönüşü izle",
    "prerequisites": [
      {
        "concept": "Fonksiyonun tanım ve görüntüsü",
        "why": "Ara çıktının sonraki tanım kümesine girmesini denetlemek için."
      }
    ],
    "goals": [
      "Bileşke sırasını koru.",
      "Tersin varlığını birebirlik ve örtenlikle ilişkilendir."
    ],
    "chapters": [
      {
        "title": "Bileşkede önce sağdaki fonksiyon çalışır",
        "source": {
          "book": "TYT-mat",
          "pages": [
            89,
            90
          ]
        },
        "explanation": [
          "(f∘g)(x)=f(g(x)) ifadesinde önce g’ye x girer, çıkan değer f’nin girdisi olur. Sıra genellikle değişmez; f∘g ile g∘f farklı süreçlerdir. Tanım kümesinde x’in g’de tanımlı olması yetmez; g(x)’in f’nin tanım kümesine de girmesi gerekir. Bileşkede payda ve kök kısıtlarını ara aşamada koru.",
          "Bir girdi-çıktı tablosunda g(x) değerini bulup f tablosunda bu değeri yeniden ara. Çıktı tablodaki uygun bir girdi değilse o noktada bileşke tanımlı değildir. Formülle çalışırken g(x)’in tamamını f’nin değişkeninin yerine parantezle yerleştir. f(x+1) ile f(x)+1 aynı işlem değildir."
        ],
        "formulas": [
          {
            "expression": "(f∘g)(x)=f(g(x))",
            "meaning": "İki eşleme kuralının ardışık uygulanması.",
            "conditions": "x∈Dg ve g(x)∈Df."
          }
        ],
        "example": {
          "question": "f(x)=√(x−1), g(x)=2 x+3 ise(f∘g)(x) ve tanım kümesini bul.",
          "steps": [
            "g(x)’i f’ye koy: √((2 x+3)−1)=√(2 x+2).",
            "Kök içi 2 x+2≥0 olmalı.",
            "x≥−1 bulunur."
          ],
          "answer": "√(2 x+2); [−1,∞).",
          "check": "x=−1 için girdi g(−1)=1, f(1)=0; tüm aşamalar tanımlı."
        },
        "misconceptions": [
          {
            "wrong": "Bileşkenin tanım kümesi her zaman iki tanım kümesinin kesişimidir.",
            "correct": "Ara görüntünün uygunluğu da incelenir.",
            "why": "g’nin x’e uyguladığı dönüşüm f’nin girdisini değiştirir."
          }
        ],
        "reasoningChecks": [
          {
            "question": "f(x)=x+1, g(x)=2 x ise bileşkeler eşit midir?",
            "answer": "Hayır; f∘g=2 x+1, g∘f=2 x+2.",
            "why": "İşlem sırası çıktıyı değiştirir."
          }
        ]
      },
      {
        "title": "Ters fonksiyon karşılıkları geri çevirir",
        "source": {
          "book": "TYT-mat",
          "pages": [
            91,
            92
          ]
        },
        "explanation": [
          "f’nin tersi bir çıktının hangi girdiden geldiğini geri bulur. Aynı çıktı iki girdiden geliyorsa tek bir geri dönüş yoktur; birebirlik gerekir. Hedef kümedeki her sayıya geri dönüş isteniyorsa örtenlik de gerekir. Uygun kümeler arasında birebir ve örten f’nin tersi, tanım ile görüntü kümelerinin görevlerini değiştirir.",
          "Ters bulurken y=f(x) eşitliğinde x’i y cinsinden çöz; sonra değişken adlarını değiştirebilirsin. f⁻¹(x),1/f(x) değildir. Grafikler y=x doğrusuna göre yansır çünkü her(x, y) noktası(y, x)’e dönüşür. x² kuralında tanım kümesini kısıtlamadan√x’i ters ilan etmek negatif girdilerin geri dönüşünü kaybeder."
        ],
        "formulas": [
          {
            "expression": "f⁻¹(f(x))=x",
            "meaning": "İleri eşlemenin geri alınması.",
            "conditions": "f ilgili kümeler arasında terslenebilir; x∈Df."
          }
        ],
        "example": {
          "question": "f(x)=3 x−5 ise f⁻¹(7) kaçtır? Ters kuralı da bul.",
          "steps": [
            "y=3 x−5 eşitliğinde x=(y+5)/3.",
            "f⁻¹(x)=(x+5)/3.",
            "f⁻¹(7)=12/3=4."
          ],
          "answer": "4; ters kural(x+5)/3.",
          "check": "f(4)=12−5=7; geri dönüş doğrulanır."
        },
        "misconceptions": [
          {
            "wrong": "f⁻¹(x), f(x)’in çarpma tersidir.",
            "correct": "Fonksiyon tersi eşlemeyi geri alır.",
            "why": "f(x)=3 x−5 için 1/(3 x−5) başka bir fonksiyondur."
          }
        ],
        "reasoningChecks": [
          {
            "question": "f(x)=x², x∈R için ters neden tek değerli değildir?",
            "answer": "4 çıktısı hem 2 hem−2 girdisinden gelir.",
            "why": "Tek bir çıktı hangi girdiye dönüleceğini belirleyemez."
          }
        ]
      }
    ],
    "connections": [
      {
        "concept": "Üstel-logaritmik terslik",
        "why": "Ters fonksiyonun tanım ve görüntü değişimi logaritmayı açıklar.",
        "lessonIds": [
          "mat-ayt-11"
        ]
      }
    ]
  },
  "mat-tyt-21": {
    "title": "Polinomda eşitlik, kalan ve çarpan mantığı",
    "prerequisites": [
      {
        "concept": "Üslü ifadeler",
        "why": "Değişken üslerinin negatif olmayan tam sayı olmasını denetlemek için."
      }
    ],
    "goals": [
      "Polinom özdeşliğinde katsayıları eşitle.",
      "Kalan teoremini bölme eşitliğinden çıkar."
    ],
    "chapters": [
      {
        "title": "Kalan teoremi bir yerine koyma sonucudur",
        "source": {
          "book": "TYT-mat",
          "pages": [
            93,
            94,
            95,
            96
          ]
        },
        "explanation": [
          "Polinom, değişkenin negatif olmayan tam sayı kuvvetlerinin sonlu toplamıdır. Katsayılar kesir veya irrasyonel olabilir; sorun katsayının türü değil değişkenin üssü ve paydada bulunmasıdır. Sıfır polinomunun derecesi okul düzeyindeki tanımda belirlenmez. Baş katsayı 0 olursa derece düşer; parametreli ifadelerde bunu ayrıca kontrol et.",
          "P(x)=(x−a) Q(x)+r bölme eşitliğinde kalan doğrusal bölenden daha düşük dereceli, yani sabittir. x=a yazınca bölüm terimi yok olur ve r=P(a) kalır. P(a)=0 ise x−a bir çarpandır. Daha yüksek dereceli bölenlerde kalan sabit olmak zorunda değildir; derece koşulu önce kurulmalıdır."
        ],
        "formulas": [
          {
            "expression": "P(x)=(x−a) Q(x)+P(a)",
            "meaning": "Doğrusal bölende kalan teoremi.",
            "conditions": "P polinom; bölme x−a ile."
          }
        ],
        "example": {
          "question": "P(x)=x³−2 x²+kx+6 polinomu x−2 ile tam bölünüyor. kkaçtır ve x+1 ile kalan nedir?",
          "steps": [
            "P(2)=8−8+2 k+6=0; k=−3.",
            "x+1=x−(−1) olduğundan kalan P(−1).",
            "−1−2+3+6=6."
          ],
          "answer": "k=−3; kalan 6.",
          "check": "k yerine konunca P(2)=0; çarpan koşulu sağlanır."
        },
        "misconceptions": [
          {
            "wrong": "Her polinom bölmesinde kalan P(a) dır.",
            "correct": "Bu yöntem x−a biçimindeki doğrusal bölen içindir.",
            "why": "İkinci dereceli bölende kalan ax+b olabilir."
          }
        ],
        "reasoningChecks": [
          {
            "question": "P(1)=0 ne anlama gelir?",
            "answer": "x−1, P’nin çarpanıdır.",
            "why": "Bölme eşitliğinde sabit kalan 0 olur."
          }
        ]
      },
      {
        "title": "Çarpanlara ayırma, toplamı çarpım olarak yeniden yazmaktır",
        "source": {
          "book": "TYT-mat",
          "pages": [
            97,
            98,
            99,
            100,
            101
          ]
        },
        "explanation": [
          "Çarpanlara ayırmada amaç ortak yapı bulmaktır: ortak çarpan, gruplama, iki kare farkı veya tam kare. Her dönüşüm açılarak doğrulanabilir. a²+b² gerçek katsayılarla iki kare farkı gibi(a+b)(a−b) olmaz; bu çarpım a²−b² verir. İşaretleri kaynakta gördüğün benzer şekle göre değil açılımın sonucuna göre seç.",
          "Rasyonel ifadede sadeleşen şey bir çarpandır; toplamın içindeki tek terim silinmez. (x²−1)/(x−1)=x+1 yalnız x≠1 için geçerlidir. Yeni ifade x=1’de tanımlı olsa bile eski oran değildir. Bu ayrım limitte komşu değerlerle noktadaki değer arasındaki farkı kurar."
        ],
        "formulas": [
          {
            "expression": "a³−b³=(a−b)(a²+ab+b²)",
            "meaning": "Küp farkının çarpanları.",
            "conditions": "Gerçek a, b; açılımla doğrulanabilir."
          }
        ],
        "example": {
          "question": "(x²−5 x+6)/(x²−4) ifadesini sadeleştir ve yasak değerleri yaz.",
          "steps": [
            "Pay(x−2)(x−3), payda(x−2)(x+2).",
            "Başlangıç paydası için x≠2,−2.",
            "Ortak çarpan sadeleşir: (x−3)/(x+2), ama iki yasak değer de korunur."
          ],
          "answer": "(x−3)/(x+2); x≠±2.",
          "check": "x=3 için her iki ifade 0; x=2 başlangıçta 0/0 olduğundan kullanılamaz."
        },
        "misconceptions": [
          {
            "wrong": "Sadeleştirme yasak değeri otomatik olarak geçerli yapar.",
            "correct": "Eşdeğerlik başlangıç tanım kümesinde kurulur.",
            "why": "Bir çarpanı bölmek onun sıfır olmadığı varsayımını içerir."
          }
        ],
        "reasoningChecks": [
          {
            "question": "x²+6 x+9 neden tam karedir?",
            "answer": "(x+3)² çünkü orta terim 2·x·3’tür.",
            "why": "Yalnız ilk ve son terimin kare olması yetmez; orta terim de uyuşmalıdır."
          }
        ]
      }
    ],
    "connections": [
      {
        "concept": "Limit ve süreklilik",
        "why": "Sadeleşen çarpan komşu davranışı gösterir ama noktadaki boşluğu doldurmaz.",
        "lessonIds": [
          "mat-ayt-13"
        ]
      }
    ]
  },
  "mat-tyt-22": {
    "title": "İkinci derecede kök, diskriminant ve karmaşık çözüm",
    "prerequisites": [
      {
        "concept": "Çarpanlara ayırma",
        "why": "Çarpımı sıfır yapan durumları bulmak için."
      }
    ],
    "goals": [
      "Kök sayısını sayı kümesine göre belirle.",
      "Kök toplam ve çarpımını katsayılarla ilişkilendir."
    ],
    "chapters": [
      {
        "title": "Kareye tamamlama diskriminantı ortaya çıkarır",
        "source": {
          "book": "TYT-mat",
          "pages": [
            102,
            103,
            104,
            105
          ]
        },
        "explanation": [
          "ax²+bx+c=0 denkleminde a≠0 olmalıdır. Kareye tamamlama (2 ax+b)²=b²−4 ac eşitliğini verir. Sağ taraf negatifse gerçek sayıda kare olamaz; 0 ise tek çift katlı kök; pozitifse iki farklı gerçek kök vardır. Diskriminantın rolü bu kare yapısından gelir. Kök formülündeki±işareti iki karekök olasılığını temsil eder.",
          "Karmaşık sayılarda i²=−1 tanımıyla negatif diskriminant da çözülebilir. i’nin kuvvetleri 1, i,−1,−i döngüsündedir. Gerçek katsayılı ikinci derece denklemde gerçek olmayan kökler eşlenik çifttir. “Gerçek kök yok” ifadesi bütün sayı sistemlerinde kök olmadığı anlamına gelmez."
        ],
        "formulas": [
          {
            "expression": "x=(−b±√Δ)/(2a), Δ=b²−4ac",
            "meaning": "Kareye tamamlamadan gelen kök formülü.",
            "conditions": "a≠0; gerçek kök içinΔ≥0."
          }
        ],
        "example": {
          "question": "x²−4 x+8=0 denklemini gerçek ve karmaşık sayılarda çöz.",
          "steps": [
            "Δ=16−32=−16; gerçek kök yok.",
            "Karmaşıkta√(−16)=4 i.",
            "x=(4±4 i)/2=2±2 i."
          ],
          "answer": "Gerçekte çözümsüz; karmaşık kökler 2±2 i.",
          "check": "(2+2 i)²−4(2+2 i)+8=0; eşlenik kök de aynı şekilde sağlar."
        },
        "misconceptions": [
          {
            "wrong": "Δ<0 ise denklem her sayı kümesinde çözümsüzdür.",
            "correct": "Gerçek kök yoktur; karmaşıkta iki kök vardır.",
            "why": "Negatif sayıların karekökü gerçek değil karmaşık alanda ele alınır."
          }
        ],
        "reasoningChecks": [
          {
            "question": "a=0 olursa ikinci derece formülü uygulanır mı?",
            "answer": "Hayır.",
            "why": "Payda 2 aolamaz; denklem doğrusal veya sabit duruma düşer."
          }
        ]
      },
      {
        "title": "Köklerden denklem kurarken ortak ölçek serbesttir",
        "source": {
          "book": "TYT-mat",
          "pages": [
            106
          ]
        },
        "explanation": [
          "Kökler r ve s ise polinom a(x−r)(x−s) biçimindedir. Açılım ax²−a(r+s) x+ars verir; kök toplamı−b/a, çarpımı c/aolur. Bu ilişkiler kökleri tek tek bulmadan simetrik ifadeleri hesaplatır. r²+s²=(r+s)²−2 rs kullanımı bunun tipik örneğidir.",
          "Aynı köklere sahip denklemler sıfırdan farklı sabit katlarla değişebilir. Köklerden yazılan x²−Sx+P=0 baş katsayısı 1 olan temsilidir; tek mümkün polinom değildir. Köklerin toplamının işaretini unutmak, denklemle kökleri ters ilişkilendirir. Ayrıca eşit köklerde çarpan iki kez yazılır; kök sayısı ile kat sayısı ayrılır."
        ],
        "formulas": [
          {
            "expression": "r+s=−b/a, rs=c/a",
            "meaning": "İkinci derecede kök-katsayı ilişkileri.",
            "conditions": "a≠0; kökler karmaşık da olabilir."
          }
        ],
        "example": {
          "question": "2 x²−6 x+1=0 kökleri r, s olsun. r²+s² kaçtır?",
          "steps": [
            "r+s=6/2=3; rs=1/2.",
            "r²+s²=(r+s)²−2 rs.",
            "9−1=8."
          ],
          "answer": "8.",
          "check": "Kökler yaklaşık 2,823 ve 0,177; kareler toplamı yaklaşık 8."
        },
        "misconceptions": [
          {
            "wrong": "Kök toplamı b/a’dır.",
            "correct": "Kök toplamı−b/a’dır.",
            "why": "Açılımda orta katsayı−a(r+s) olarak oluşur."
          }
        ],
        "reasoningChecks": [
          {
            "question": "Kökleri−2 ve 5 olan baş katsayısı 1 denklem nedir?",
            "answer": "x²−3 x−10=0.",
            "why": "Toplam 3, çarpım−10; veya(x+2)(x−5)=0."
          }
        ]
      }
    ],
    "connections": [
      {
        "concept": "Parabol",
        "why": "Kökler ve diskriminant grafiğin eksenle ilişkisini belirler.",
        "lessonIds": [
          "mat-ayt-02"
        ]
      }
    ]
  },
  "mat-tyt-23": {
    "title": "Veriyi merkez, yayılım ve grafik ölçeğiyle değerlendir",
    "prerequisites": [
      {
        "concept": "Oran ve sıralama",
        "why": "Merkezî ölçülerin farklı veri özelliklerini kullandığını görmek için."
      }
    ],
    "goals": [
      "Ortalama, ortanca ve modu ayır.",
      "Gruplanmış verinin kaybettiği bilgiyi belirle."
    ],
    "chapters": [
      {
        "title": "Aynı ortalama aynı dağılım demek değildir",
        "source": {
          "book": "TYT-mat",
          "pages": [
            107,
            108
          ]
        },
        "explanation": [
          "Aritmetik ortalama toplamın bütün gözlemlere eşit paylaştırılmış değeridir; uç değerlerden etkilenir. Ortanca sıralı listenin ortasını kullanır ve büyük uç değer değişimine daha dayanıklıdır. Mod en sık görülen değerdir; birden çok mod olabilir veya bütün sıklıklar eşitken tek bir baskın değer olmayabilir. Ölçünün seçimi sorulan özelliğe bağlıdır.",
          "Açıklık yalnız en büyük ile en küçük farkını kullanır. Standart sapma bütün gözlemlerin ortalamadan uzaklaşmasını karelerle birleştirir. Kaynaktaki örneklem tanımı n−1 paydasını kullanır; anakütle tanımı n’dir. Hangi formülün istendiği belirtilmelidir. Bütün verilere aynı sabit eklenirse merkezler kayar, uzaklıklar değişmez; pozitif katsayıyla çarpılırsa yayılım da aynı katsayıyla ölçeklenir."
        ],
        "formulas": [
          {
            "expression": "s=√[Σ(xᵢ−x̄)²/(n−1)]",
            "meaning": "Örneklem standart sapması; kitapta kullanılan tanım.",
            "conditions": "n≥2; verilerin aynı ölçekte olması gerekir."
          }
        ],
        "example": {
          "question": "2,4,4,6 verilerinin ortalaması, ortancası, açıklığı ve örneklem standart sapması nedir?",
          "steps": [
            "Toplam 16, n=4; ortalama 4. Ortadaki değerler 4 ve 4; ortanca 4.",
            "Açıklık 6−2=4. Kare sapmalar 4,0,0,4; toplam 8.",
            "s=√(8/3)."
          ],
          "answer": "Ortalama 4, ortanca 4, açıklık 4, s=√(8/3).",
          "check": "Ortalama etrafındaki sapmalar−2,0,0,2 olup toplamları 0."
        },
        "misconceptions": [
          {
            "wrong": "Standart sapma büyükse ortalama da büyüktür.",
            "correct": "Standart sapma yayılımı, ortalama merkezi ölçer.",
            "why": "1,3 ile 101,103 aynı yayılıma, farklı ortalamalara sahiptir."
          }
        ],
        "reasoningChecks": [
          {
            "question": "Bütün verilere 10 eklenirse açıklık ne olur?",
            "answer": "Değişmez.",
            "why": "En büyük ve en küçüğe aynı sayı eklendiğinde fark korunur."
          }
        ]
      },
      {
        "title": "Grafik biçimi kadar eksen ölçeği de veridir",
        "source": {
          "book": "TYT-mat",
          "pages": [
            109,
            110
          ]
        },
        "explanation": [
          "Sütun grafiği kategorilerin büyüklüğünü, çizgi grafiği ardışık değişimi, daire grafiği bütünün paylarını gösterir. Daire diliminin açısı toplamın 360 derecelik payıdır; mutlak sayı için toplam ayrıca gerekir. Aynı açı farklı toplamlı gruplarda farklı kişi sayısını temsil edebilir.",
          "Histogramda aralıklar tek tek değerleri gruplar; özellikle geniş aralıklar kullanıldığında tam veriler geri getirilemez. Sıklıkların toplamı gözlem sayısına eşit olmalıdır. Düşey eksenin sıfırdan başlamaması farkları gözde büyütebilir; grafikteki iki sütunun görünür boy oranı gerçek miktar oranı olmayabilir. Önce birim, başlangıç ve aralık genişliğini oku."
        ],
        "example": {
          "question": "240 öğrencinin tercihleri daire grafiğinde A 72°, B 108°, C 180°ile veriliyor. B ile A arasındaki kişi farkı kaçtır?",
          "steps": [
            "A’nın payı 72/360=1/5; kişi sayısı 48.",
            "B’nin payı 108/360=3/10; kişi sayısı 72.",
            "Fark 72−48=24."
          ],
          "answer": "24 öğrenci.",
          "check": "C 120 kişi; 48+72+120=240."
        },
        "misconceptions": [
          {
            "wrong": "Açı farkı 36°ise kişi farkı 36’dır.",
            "correct": "Açı, toplamın 360 dereceye bölünmüş oranıdır.",
            "why": "Kişi başına düşen açı toplam öğrenci sayısına bağlıdır."
          }
        ],
        "reasoningChecks": [
          {
            "question": "Bir histogramdan bütün bireysel değerler bulunabilir mi?",
            "answer": "Genellikle hayır.",
            "why": "Aynı aralıkta bulunan farklı veri listeleri aynı sıklığı verebilir."
          }
        ]
      }
    ],
    "connections": [
      {
        "concept": "Olasılık ve deneysel sonuç",
        "why": "Frekanslar gözlenen dağılımı gösterir; teorik olasılıkla aynı bilgi değildir.",
        "lessonIds": [
          "mat-ayt-05"
        ]
      }
    ]
  },
  "mat-tyt-24": {
    "title": "İşlem: tanımdan özellik ve ters çıkar",
    "prerequisites": [
      {
        "concept": "Dört işlem ve fonksiyon",
        "why": "Yeni sembole otomatik özellik yüklememek için."
      }
    ],
    "goals": [
      "Tanımlanan işlemi iç içe hesapla.",
      "Etkisiz ve ters elemanı genel eşitlikten bul."
    ],
    "chapters": [
      {
        "title": "Kural bir girdi çiftini sonuca eşler",
        "source": {
          "book": "TYT-mat",
          "pages": [
            10,
            11
          ]
        },
        "explanation": [
          "İşlem sembolü kendiliğinden toplama veya çarpma anlamına gelmez. Tanım a★b=2 a−b ise her kullanımda ilk girdi 2 ile çarpılır, ikinci çıkarılır. (a★b)★cile a★(b★c) ayrı işlem sıralarıdır. Önce genel ifadeleri açmak birleşme özelliğinin bütün elemanlarda sağlanıp sağlanmadığını gösterir.",
          "Kapalılık da işlemin tanımlı olduğu kümeye bağlıdır. a★b=(a+b)/2 gerçek sayılarda kapalıdır; tam sayılarda 1★2=3/2 olduğu için kapalı değildir. Değişme özelliğinde a★bile b★aher uygun çift için eşit olmalıdır. Tek bir eşit örnek kanıt olmaz; tek bir farklı örnek ise iddiayı çürütür. Kaynak sayfaları temel özellikleri verir; ★ örnekleri öğretmen genişletmesidir."
        ],
        "example": {
          "question": "a★b=2 a−b için birleşme özelliği var mı? Genel ifadeyle ve bir örnekle göster.",
          "steps": [
            "(a★b)★c=2(2 a−b)−c=4 a−2 b−c.",
            "a★(b★c)=2 a−(2 b−c)=2 a−2 b+c.",
            "a=1, b=0, c=0 için sonuçlar 4 ve 2; eşit değildir."
          ],
          "answer": "Birleşme özelliği yoktur.",
          "check": "Aynı üçlüde yalnız parantez değişti; farkın nedeni işlem sırasıdır."
        },
        "misconceptions": [
          {
            "wrong": "İşlem formülü kısa olduğunda birleşmelidir.",
            "correct": "Birleşme cebirsel olarak sınanması gereken ayrı özelliktir.",
            "why": "Formülün görünümü bütün girdilerde eşitlik sağlamaz."
          }
        ],
        "reasoningChecks": [
          {
            "question": "a★b=a−b değişmeli midir?",
            "answer": "Hayır.",
            "why": "1★2=−1 ama 2★1=1."
          }
        ]
      },
      {
        "title": "Etkisiz eleman bütün girdilerde çalışmalıdır",
        "source": {
          "book": "TYT-mat",
          "pages": [
            10,
            11
          ]
        },
        "explanation": [
          "İki taraflı etkisiz e için a★e=a ve e★a=a birlikte gerekir. Birinci denklemi çözerek bulunan değer a’ya bağlıysa bütün kümede geçerli tek bir e yoktur. Yalnız sağdan etkisiz bulmak soldan da aynı koşulu sağladığını göstermez. Ters eleman ancak etkisize göre tanımlanır; alışılmış çarpma tersi olduğu varsayılmaz.",
          "a★b=a+b+ab kuralında(a+1)(b+1)−1 yapısı görülür. Bu yapı 0’ın etkisizliğini ve−1’in tersi olmamasını açıklar: −1★b=−1 her b için sabittir. Tersin ait olduğu küme de önemlidir; gerçekte bulunan kesirli bir ters, tam sayılar kümesinde bulunmayabilir. Öğretmen örnekleri işlem özelliklerini tanımdan çıkarma becerisini hedefler."
        ],
        "example": {
          "question": "Gerçek sayılarda a★b=a+b+ab için etkisizi ve 2’nin tersini bul. −1’in tersi var mı?",
          "steps": [
            "a★e=a⇒e(1+a)=0; her a için e=0. Soldan koşul da sağlanır.",
            "2★x=0⇒2+3 x=0; x=−2/3.",
            "−1★x=−1 olduğundan 0 olamaz; −1’in tersi yoktur."
          ],
          "answer": "Etkisiz 0; 2’nin tersi−2/3; −1’in tersi yok.",
          "check": "2−2/3−4/3=0; ters eşitliği doğrulanır."
        },
        "misconceptions": [
          {
            "wrong": "Her elemanın tersi bulunmak zorundadır.",
            "correct": "Tersin varlığı işlem ve kümeye göre ayrıca incelenir.",
            "why": "Sabit çıktı üreten bir eleman etkisize dönemeyebilir."
          }
        ],
        "reasoningChecks": [
          {
            "question": "a★b=a+b+ab değişmeli midir?",
            "answer": "Evet.",
            "why": "a+b+ab=b+a+ba; bütün gerçek çiftlerde eşitlik vardır."
          }
        ]
      }
    ],
    "connections": [
      {
        "concept": "Fonksiyon bileşkesi",
        "why": "İşlem sırası ve geri alma fikri fonksiyonlarda da önemlidir.",
        "lessonIds": [
          "mat-tyt-20"
        ]
      }
    ]
  },
  "mat-tyt-25": {
    "title": "Modüler aritmetik: kalan sınıfı ve basit döngü",
    "prerequisites": [
      {
        "concept": "Kalanlı bölme",
        "why": "Standart kalanı eşdeğer negatif temsilden ayırmak için."
      }
    ],
    "goals": [
      "Toplama ve çarpım kalanlarını hesapla.",
      "Saat, gün ve kuvvet döngüsünde başlangıcı izle."
    ],
    "chapters": [
      {
        "title": "Kalan sınıfında hangi işlemler korunur?",
        "source": {
          "book": "TYT-mat",
          "pages": [
            18
          ]
        },
        "explanation": [
          "a≡b(mod m), m’nin a−b farkını böldüğünü söyler; a=b demek değildir. Toplam ve çarpımda fark yine m’nin katı olacağı için kalanlar kullanılabilir. Standart kalan 0 ile m−1 arasındadır; −2 gibi negatif temsilci aynı sınıfta olsa da “kalan kaçtır” sorusunda aralığa dönülür.",
          "Bölmede ortak çarpanı silmek her zaman güvenli değildir. 2·1≡2·4(mod 6) doğrudur; ama 1≡4(mod 6) yanlıştır. İki tarafı bölerken modülün ortak çarpanı bilgi kaybettirebilir. Bu düzeyde genel bölme teoremleri yerine küçük kalan listesi ve doğrudan bölme eşitliği kullanılır. Kaynaktaki 18. sayfa kalan temelidir; modüler gösterim öğretmen ekidir."
        ],
        "formulas": [
          {
            "expression": "a≡b(mod m) ⇔ m|(a−b)",
            "meaning": "Aynı kalan sınıfının tanımı.",
            "conditions": "a, b tam sayı; m pozitif tam sayı."
          }
        ],
        "example": {
          "question": "A’nın 9 ile kalanı 7, B’nin 9 ile kalanı 5 ise 2 A²−AB+B’nin kalanı nedir?",
          "steps": [
            "Kalanları yerleştir: 2·7²−7·5+5=98−35+5=68.",
            "68=9·7+5.",
            "Standart kalan 5."
          ],
          "answer": "5.",
          "check": "A=7, B=5 seçilince 68; A’ya 9 eklenmesi kalan sınıfını değiştirmez."
        },
        "misconceptions": [
          {
            "wrong": "Kongrüansta her ortak çarpan doğrudan silinir.",
            "correct": "Toplama ve çarpım güvenlidir; bölme ayrıca koşul gerektirir.",
            "why": "2·1 ve 2·4,6’ya göre aynı; 1 ve 4 farklıdır."
          }
        ],
        "reasoningChecks": [
          {
            "question": "−23’ün 7 ile standart kalanı kaçtır?",
            "answer": "5.",
            "why": "−23=7·(−4)+5 ve 0≤5<7."
          }
        ]
      },
      {
        "title": "Döngü uzunluğunu üs veya gün sayısından ayır",
        "source": {
          "book": "TYT-mat",
          "pages": [
            25
          ]
        },
        "explanation": [
          "Hafta 7 gün, saat gösterimi 12 veya 24 adımda tekrar eder; kuvvet kalanında dönem ise hesaplanan sıraya bağlıdır. 2’nin 7’ye göre kuvvetleri 2,4,1,2,…biçimindedir; dönem 3’tür. Üs 3’ün katıysa son konumdaki 1 seçilir. “Kalan 0” listenin sıfırıncı elemanı değildir.",
          "Birinci olay başlangıç anında veriliyorsa n’inci olaydan önce n−1 aralık geçer. “n gün sonra” n aralık,“bugün 1. gün olmak üzere n. gün” n−1 aralıktır. Bu fark güç döngülerindeki 1’den başlayan üslerle de benzer indeks sorunu oluşturur. Döngüyü birkaç terimle doğrulamak başlangıç kaymasını önler; gelişmiş olimpiyat teoremleri gerekmez."
        ],
        "example": {
          "question": "2¹⁰⁰ sayısının 7 ile kalanı ve Pazartesiden 100 gün sonrası hangi gündür?",
          "steps": [
            "2 kuvvetlerinin 7 kalanı 2,4,1; 100=3·33+1 olduğundan ilk konum 2.",
            "Günlerin dönemi 7; 100=7·14+2.",
            "Pazartesiden iki gün ilerle: Çarşamba."
          ],
          "answer": "Kalan 2; Çarşamba.",
          "check": "2⁹⁹=(2³)³³ her döngüde 1 kalanı verir; bir 2 çarpanı ile kalan 2 olur."
        },
        "misconceptions": [
          {
            "wrong": "Bölen 7 ise kuvvet döngüsünün uzunluğu da 7’dir.",
            "correct": "Dönem gerçek tekrar dizisinden bulunur.",
            "why": "2’nin 7’ye göre dönemi 3 tür; taban ve modül birlikte belirler."
          }
        ],
        "reasoningChecks": [
          {
            "question": "3’ün 5’e göre kuvvet döngüsü 3,4,2,1 ise 3²⁰ kalanı nedir?",
            "answer": "1.",
            "why": "20 dönemin 4. konumuna karşılık gelir; son terim seçilir."
          }
        ]
      }
    ],
    "connections": [
      {
        "concept": "Periyodik problemler",
        "why": "Başlangıç ve tekrar süresi ayrımı aynı döngü mantığını kullanır.",
        "lessonIds": [
          "mat-tyt-04"
        ]
      }
    ]
  },
  "mat-ayt-01": {
    "title": "Grafikten sıfır, işaret ve değişim çıkar",
    "prerequisites": [
      {
        "concept": "Fonksiyon grafiği",
        "why": "Yatay koordinatın girdi, düşey koordinatın çıktı olduğunu ayırmak için."
      }
    ],
    "goals": [
      "Grafik yüksekliğini eğimle karıştırma.",
      "Ortalama değişimi iki uçtan hesapla."
    ],
    "chapters": [
      {
        "title": "Sıfırlar ve işaret aralıkları aynı bilgi değildir",
        "source": {
          "book": "AYT-mat",
          "pages": [
            9,
            10
          ]
        },
        "explanation": [
          "f(x)=0 noktaları grafiğin x ekseniyle kesiştiği veya ona değdiği girdilerdir. f(x)>0 grafiğin eksenin üstünde kaldığı yerleri seçer; bu noktada grafiğin yükseliyor olması gerekmez. Negatif bölgede de artış olabilir. Bu yüzden bir işaret sorusu ile artanlık sorusunu farklı grafik okumaları olarak ele al.",
          "Kökten geçerken işaretin değişip değişmediği temas biçimine bağlıdır. (x−2)² grafiği x=2’de sıfırdır fakat iki yanda pozitiftir. Paydada tanımsız bir nokta ise grafik üzerinde kök sayılmaz. Görüntü kümesini okurken açık noktanın başka bir x tarafından aynı y düzeyinde doldurulup doldurulmadığına bak; tek bir boş nokta bütün y değerini otomatik dışlamaz."
        ],
        "example": {
          "question": "f(x)=(x−1)(x+2) için kökleri ve f(x)<0 çözümünü bul.",
          "steps": [
            "Kökler−2 ve 1’dir.",
            "x<−2’de iki çarpan negatif: çarpım pozitif.",
            "−2<x<1’de işaretler farklı; x>1’de ikisi pozitif."
          ],
          "answer": "Kökler−2,1; negatiflik aralığı(−2,1).",
          "check": "x=0 için f(0)=−2; ara bölgede negatif olduğu doğrulanır."
        },
        "misconceptions": [
          {
            "wrong": "f(x)<0 ise f azalandır.",
            "correct": "İşaret çıktının konumunu, artanlık çıktının değişimini söyler.",
            "why": "f(x)=x−10, x<10 üzerinde negatif olduğu halde artandır."
          }
        ],
        "reasoningChecks": [
          {
            "question": "f(x)=(x−3)² kökünde işaret değişir mi?",
            "answer": "Hayır.",
            "why": "Kare çarpan iki tarafta da negatif olmayan değer verir."
          }
        ]
      },
      {
        "title": "Ortalama değişim sekant eğimidir",
        "source": {
          "book": "AYT-mat",
          "pages": [
            11,
            12
          ]
        },
        "explanation": [
          "Bir aralıkta ortalama değişim, çıktı farkının girdi farkına bölümüdür; iki grafik noktasını birleştiren doğrunun eğimidir. Tek bir noktadaki anlık değişimi zorunlu olarak vermez. Uç noktalar aynı yükseklikteyse ortalama 0 olabilir; fonksiyon arada yükselip sonra düşmüş olabilir.",
          "Artanlık tanımında x₁<x₂ olduğunda f(x₁)<f(x₂) istenir. Yerel maksimum yalnız yakın çevreye, mutlak maksimum bütün tanım kümesine göre belirlenir. Açık aralık uçlarında bir üst sınıra yaklaşmak o değere ulaşmak değildir. Grafik yüksekliği en büyük değeri; teğet eğimi ise değişim hızını gösterir."
        ],
        "formulas": [
          {
            "expression": "Ortalama değişim=[f(b)−f(a)]/(b−a)",
            "meaning": "İki nokta arasındaki sekant eğimi.",
            "conditions": "a≠b; iki uçta f tanımlı."
          }
        ],
        "example": {
          "question": "f(x)=x²−4 x için[0,4] aralığında ortalama değişim ve en küçük değer nedir?",
          "steps": [
            "f(0)=0, f(4)=0; ortalama değişim 0.",
            "Kare tamamla: f(x)=(x−2)²−4.",
            "x=2 aralıkta; en küçük değer−4."
          ],
          "answer": "Ortalama 0; minimum−4.",
          "check": "Uçların eşitliği aradaki negatif değerleri yok saymaz; parabol önce düşer sonra yükselir."
        },
        "misconceptions": [
          {
            "wrong": "Ortalama değişim 0 ise fonksiyon sabittir.",
            "correct": "Yalnız uç değerleri eşittir; ara davranış değişebilir.",
            "why": "x²−4 x örneğinde değerler 0,−3,−4,−3,0 olur."
          }
        ],
        "reasoningChecks": [
          {
            "question": "Açık(0,1) aralığında f(x)=x en büyük değerini alır mı?",
            "answer": "Hayır.",
            "why": "1’e yaklaşır ama 1 tanım kümesinde değildir."
          }
        ]
      }
    ],
    "connections": [
      {
        "concept": "Türev",
        "why": "Sekant eğiminin yerel limiti anlık değişimdir.",
        "lessonIds": [
          "mat-ayt-14"
        ]
      }
    ]
  },
  "mat-ayt-02": {
    "title": "Parabolü kök, tepe ve kesişim koşullarıyla kur",
    "prerequisites": [
      {
        "concept": "İkinci derece denklemler",
        "why": "Kökleri grafik kesişimiyle ilişkilendirmek için."
      }
    ],
    "goals": [
      "Uygun denklem biçimini seç.",
      "Modelde matematiksel ve fiziksel aralığı ayır."
    ],
    "chapters": [
      {
        "title": "Üç denklem biçimi üç farklı bilgiyi görünür yapar",
        "source": {
          "book": "AYT-mat",
          "pages": [
            13,
            14,
            15,
            16
          ]
        },
        "explanation": [
          "y=ax²+bx+c biçiminde c, düşey eksen kesişimidir. y=a(x−r)(x−s) biçimi kökleri; y=a(x−h)²+k biçimi tepeyi gösterir. Üçü aynı eğriyi farklı bilgiyi öne çıkararak ifade eder. a’nın işareti kolların yönünü, a’nın mutlak değeri yatay ölçek sabitken açıklığın darlığını belirler.",
          "Tepe biçimi kare tamamlanarak bulunur; simetri ekseni x=−b/(2 a)’dır. a>0 ise tepe en küçük, a<0 ise en büyük değerdir. Ancak tanım kümesi kısıtlıysa tepe içeride bulunmayabilir; aralığın uç değerleri de incelenir. Verilen bir nokta eksik a katsayısını belirler; üç noktadan biri kökse çarpan biçimi hesapları kısaltır."
        ],
        "formulas": [
          {
            "expression": "h=−b/(2a), k=f(h)",
            "meaning": "Parabolün tepe noktası(h, k).",
            "conditions": "a≠0."
          }
        ],
        "example": {
          "question": "Kökleri 1 ve 5 olan parabol(0,10) noktasından geçiyor. Tepe noktası nedir?",
          "steps": [
            "f(x)=a(x−1)(x−5). f(0)=5 a=10; a=2.",
            "Simetri ekseni x=(1+5)/2=3.",
            "f(3)=2·2·(−2)=−8."
          ],
          "answer": "(3,−8).",
          "check": "f(x)=2(x−3)²−8 açılımı 2 x²−12 x+10 verir; kökleri 1 ve 5 tir."
        },
        "misconceptions": [
          {
            "wrong": "Tepe x koordinatı köklerin çarpımıdır.",
            "correct": "Gerçek iki kök varsa tepe x’i köklerin ortalamasıdır.",
            "why": "Simetri iki kökün eksene eşit uzaklıkta olmasını gerektirir."
          }
        ],
        "reasoningChecks": [
          {
            "question": "a<0 ise görüntü kümesi hangi yönde sınırlanır?",
            "answer": "Tepe değeri k ile yukarıdan sınırlanır: (−∞, k].",
            "why": "Kare terim negatif katsayıyla en çok 0 olur."
          }
        ]
      },
      {
        "title": "Doğruyla kesişim bir ikinci derece denklem üretir",
        "source": {
          "book": "AYT-mat",
          "pages": [
            17,
            18
          ]
        },
        "explanation": [
          "Parabol ile doğrunun ortak noktalarında iki y ifadesi eşittir. Elde edilen denklemin diskriminantı iki kesişim, teğetlik veya hiç kesişmeme durumunu belirler. Doğrunun y ekseniyle kesişimi tek başına teğetlik göstermez. Bir ortak noktada çizgilerin görsel yakınlığından karar vermek yerine eşitliği kullan.",
          "Gerçek hayat modelinde x çoğunlukla uzunluk, zaman veya adet olur. Negatif kök cebirsel olarak geçerli olsa bile modelin izin verdiği alanın dışında kalabilir. En büyük alan sorusunda alan fonksiyonunu kurmadan yalnız şeklin görünüşünden kare kararı verme; çevre ve sınır koşulları modeli belirler."
        ],
        "example": {
          "question": "y=x²−2 x+3 parabolüne y=2 x+k doğrusunun teğet olması için kkaçtır?",
          "steps": [
            "Eşitle: x²−2 x+3=2 x+k; x²−4 x+3−k=0.",
            "TeğetlikteΔ=16−4(3−k)=0.",
            "4+4 k=0; k=−1. Çift kök x=2, y=3."
          ],
          "answer": "k=−1; teğet noktası(2,3).",
          "check": "Parabol=(x−1)²+2; f(2)=3 ve doğru 2·2−1=3."
        },
        "misconceptions": [
          {
            "wrong": "Teğet doğru parabolle iki farklı noktada kesişir.",
            "correct": "Teğetlikte kesişim denklemi çift köklüdür.",
            "why": "Bir ortak x iki kez sayılır; iki farklı nokta oluşmaz."
          }
        ],
        "reasoningChecks": [
          {
            "question": "Parabolün Δ<0 olması grafiğin bütün değerlerinin negatif olduğunu gösterir mi?",
            "answer": "Hayır.",
            "why": "İşaret a’ya bağlıdır; a>0 ise tamamı pozitif olabilir."
          }
        ]
      }
    ],
    "connections": [
      {
        "concept": "Optimizasyon",
        "why": "Tepe veya türev ile maksimum-minimum aynı model üzerinde bulunabilir.",
        "lessonIds": [
          "mat-ayt-15"
        ]
      }
    ]
  },
  "mat-ayt-03": {
    "title": "Grafik dönüşümünü noktaların hareketiyle izle",
    "prerequisites": [
      {
        "concept": "Fonksiyon değeri",
        "why": "İç dönüşümün girdiyi, dış dönüşümün çıktıyı etkilediğini görmek için."
      }
    ],
    "goals": [
      "Yatay ve düşey kaymayı ayır.",
      "Ölçeklemede ters yönlü girdi etkisini açıkla."
    ],
    "chapters": [
      {
        "title": "Dışarıdaki değişim y’yi, içerideki değişim x’i etkiler",
        "source": {
          "book": "AYT-mat",
          "pages": [
            19,
            20
          ]
        },
        "explanation": [
          "f grafiğinde(u, v) noktası varsa f(x)+k grafiğinde(u, v+k) bulunur. −f(x) çıktıyı yansıtır ve(u,−v) verir. f(−x) ise aynı v çıktısını−u girdisinde üretir; düşey eksene göre yansımadır. Çift fonksiyon bu ikinci yansımada, tek fonksiyon orijine göre yansımada değişmez.",
          "Simetri tanım kümesinin de uygun olmasını gerektirir. Bir eğrinin yalnız sağ yarısı verilmişse kuralın cebirsel olarak x² olması tek başına tanımlı fonksiyonu çift yapmaz; −x girdilerinin de bulunması gerekir. Dönüşümden sonra açık/kapalı noktaların türü korunur ve dönüştürülmüş koordinata taşınır."
        ],
        "example": {
          "question": "f grafiği(2,−3) noktasından geçiyor. g(x)=−f(−x)+4 grafiğinde buna karşılık gelen nokta nedir?",
          "steps": [
            "İçeride−x olduğundan eski girdi 2 için yeni x=−2.",
            "f(2)=−3 çıktısı dışarıdaki eksiyle 3 olur.",
            "4 eklenince 7. Yeni nokta(−2,7)."
          ],
          "answer": "(−2,7).",
          "check": "g(−2)=−f(2)+4=3+4=7."
        },
        "misconceptions": [
          {
            "wrong": "−f(x) ile f(−x) aynı yansımadır.",
            "correct": "Birincisi x eksenine, ikincisi y eksenine göre yansımadır.",
            "why": "İlkinde çıktı, ikincisinde girdi işaret değiştirir."
          }
        ],
        "reasoningChecks": [
          {
            "question": "Tek fonksiyon 0’da tanımlıysa f(0) kaçtır?",
            "answer": "0.",
            "why": "f(0)=−f(0) eşitliği 2 f(0)=0 verir."
          }
        ]
      },
      {
        "title": "Yatay kaymanın işareti neden ters görünür?",
        "source": {
          "book": "AYT-mat",
          "pages": [
            21
          ]
        },
        "explanation": [
          "g(x)=f(x−h) içinde eski u girdisini elde etmek için yeni x−h=u olmalı; yani x=u+h olur. Bu yüzden x−h sağa h kadar kaydırır. f(cx) içinde yeni x=u/c olduğundan yatay uzunluklar 1/|c| ile ölçeklenir. İçteki katsayıyı doğrudan dıştaki gibi yorumlamak grafiği ters yönde esnetir.",
          "g(x)=a f(b(x−h))+k için nokta dönüşümü(u, v)→(h+u/b, av+k) olur; b≠0. a<0 düşey, b<0 yatay yansıma da ekler. Kaynaktaki dikey ölçekleme satırındaki baskı karışıklığını gerçek nokta dönüşümüyle denetle: |a|>1 ise y uzaklıkları büyür,0<|a|<1 ise küçülür."
        ],
        "formulas": [
          {
            "expression": "(u,v)→(h+u/b,av+k)",
            "meaning": "g(x)=a f(b(x−h))+k için nokta taşıma.",
            "conditions": "b≠0; a, b, h, k gerçek."
          }
        ],
        "example": {
          "question": "f’nin tepe noktası(4,6). g(x)=2 f(2(x−3))−1 ise karşılık gelen tepe nerede?",
          "steps": [
            "Girdi eşitliği 2(x−3)=4; x=5.",
            "Çıktı 2·6−1=11.",
            "Nokta(5,11); pozitif ölçek yönü korur."
          ],
          "answer": "(5,11).",
          "check": "g(5)=2 f(4)−1=11."
        },
        "misconceptions": [
          {
            "wrong": "f(2 x) grafiği yatayda iki kat genişler.",
            "correct": "Yatay uzaklıklar yarıya iner.",
            "why": "Eski 4 girdisi yeni 2 girdisinde elde edilir."
          }
        ],
        "reasoningChecks": [
          {
            "question": "f(x+5) hangi yöne kayar?",
            "answer": "Sola 5.",
            "why": "Eskiu için yeni x=u−5 olmalıdır."
          }
        ]
      }
    ],
    "connections": [
      {
        "concept": "Ters grafik",
        "why": "Koordinat taşıma dönüşümün cebirsel anlamını görünür yapar.",
        "lessonIds": [
          "mat-tyt-20"
        ]
      }
    ]
  },
  "mat-ayt-04": {
    "title": "İşaret tablosunda sıfır ve yasak noktaları ayır",
    "prerequisites": [
      {
        "concept": "Çarpanlara ayırma",
        "why": "İşaret değişiminin hangi çarpandan geldiğini izlemek için."
      }
    ],
    "goals": [
      "Çarpım ve bölüm eşitsizliklerini aralıklarda çöz.",
      "Birden çok koşulun kesişimini bul."
    ],
    "chapters": [
      {
        "title": "Kritik noktalar sayı doğrusunu sabit işaretli bölgelere böler",
        "source": {
          "book": "AYT-mat",
          "pages": [
            22,
            23
          ]
        },
        "explanation": [
          "Bir çarpımın işareti çarpanların işaretlerinin çarpımıdır. Doğrusal bir çarpan kökünün iki yanında işaret değiştirir; çift kuvvetli çarpan değiştirmez. Bu nedenle “her kökte işareti çevir” kuralı yalnız tek katlı köklerde geçerlidir. Baş katsayının işareti en sağ aralıktaki işareti belirler.",
          "İkinci dereceli ifade gerçek köksüzse işareti her yerde baş katsayının işaretidir. Bütün gerçek x’lerde kesin negatiflik için a<0 veΔ<0 gerekir. Δ=0 olursa kökte 0 olacağından“kesin negatif” sağlanmaz. Grafik ve tablo aynı bilgiyi farklı biçimde verir; tek noktalık eşitlikleri tabloya ayrıca dahil et."
        ],
        "example": {
          "question": "(x−1)²(x+2)<0 eşitsizliğini çöz.",
          "steps": [
            "Kritik noktalar−2 ve 1.",
            "(x−1)², x≠1 için pozitif; bu yüzden işareti x+2 belirler.",
            "Negatiflik x<−2’de; −2 sıfır olduğu için dışarıda."
          ],
          "answer": "(−∞,−2).",
          "check": "x=0 için 2 pozitif; x=−3 için 16·(−1) negatif."
        },
        "misconceptions": [
          {
            "wrong": "Kök 1’den geçince işaret mutlaka değişir.",
            "correct": "Çift katlı kökte işaret değişmez.",
            "why": "Kare çarpan iki tarafta da pozitiftir."
          }
        ],
        "reasoningChecks": [
          {
            "question": "−x²−1 her yerde negatif midir?",
            "answer": "Evet.",
            "why": "x²≥0 olduğu için−x²−1≤−1<0."
          }
        ]
      },
      {
        "title": "Paydanın kökü hiçbir zaman eşitlik noktası değildir",
        "source": {
          "book": "AYT-mat",
          "pages": [
            24,
            25
          ]
        },
        "explanation": [
          "Rasyonel eşitsizlikte payın kökü 0 çıktısı verebilir; paydanın kökü ise tanımsızdır. ≤ve≥işaretleri yalnız tanımlı sıfırları dahil eder. Ortak çarpan sadeleşse bile başlangıçtaki payda yasakları korunur. Bilinmeyenli payda ile eşitsizliğin iki tarafını doğrudan çarpmak işaret bilinmediği için güvenli değildir.",
          "Bir sistemde her eşitsizlik kendi kümesini üretir; istenen ortak çözümdür. “Veya” ile verilen koşullarda ise birleşim alınır. Uç noktaları test etmek açık/kapalı kararını doğrular. Sonuç aralıklarını yazdıktan sonra her aralıktan bir örnek başlangıç ifadesinde denemek özellikle eşitlik ve yasak nokta hatalarını yakalar."
        ],
        "example": {
          "question": "(x−2)/(x+1)≥0 ve x<4 koşullarını birlikte çöz.",
          "steps": [
            "Kritik−1 yasak,2 sıfır.",
            "Bölüm x<−1 ve x≥2 için negatif değil; −1 dışarıda,2 içeride.",
            "x<4 ile kesişim: (−∞,−1)∪[2,4)."
          ],
          "answer": "(−∞,−1)∪[2,4).",
          "check": "x=−2 için 4 pozitif; x=0 için−2 olumsuz; x=2 için 0 uygun."
        },
        "misconceptions": [
          {
            "wrong": "≥olduğu için paydanın kökü de dahil edilir.",
            "correct": "Tanımsız nokta hiçbir eşitsizliği sağlamaz.",
            "why": "Sıfıra bölme sayısal bir değer üretmez."
          }
        ],
        "reasoningChecks": [
          {
            "question": "(x−1)/(x−1)>0 çözümü nedir?",
            "answer": "R{1}.",
            "why": "Oran tanımlı olduğu her yerde 1; ama x=1 yasak kalır."
          }
        ]
      }
    ],
    "connections": [
      {
        "concept": "Türev işaret tablosu",
        "why": "Artanlık tablosu da aynı işaret mantığıyla türev üzerinde kurulur.",
        "lessonIds": [
          "mat-ayt-15"
        ]
      }
    ]
  },
  "mat-ayt-05": {
    "title": "Koşullu olasılıkta bilgiyi örnek uzaya işle",
    "prerequisites": [
      {
        "concept": "Temel olasılık ve kombinasyon",
        "why": "Yeni bilginin hangi sonuçları dışladığını saymak için."
      }
    ],
    "goals": [
      "Koşullu paydanın neden değiştiğini açıkla.",
      "Bağımsızlığı ayrıklıktan ayır."
    ],
    "chapters": [
      {
        "title": "Koşul gerçekleşmişken bütün evren küçülür",
        "source": {
          "book": "AYT-mat",
          "pages": [
            26
          ]
        },
        "explanation": [
          "P(A|B), B’nin olduğu bilinirken A’nın olasılığıdır; artık olası sonuçların bütünü B’dir. A’dan gelen uygun sonuçlar da B’nin içinde olmalı, yani A∩B sayılır. Başlangıç toplamını paydada tutmak verilen bilgiyi kullanmamak olur. B’nin olasılığı 0 ise bu oranla koşullu olasılık tanımlanmaz.",
          "Tablolu sorularda önce satır ve sütun toplamlarını tamamla; koşulun hangi satırı/sütunu seçtiğini işaretle. “A olanların B’si” ile“B olanların A’sı” farklı paydalar kullanır. İki ifadenin ortak payı aynı olsa bile sonuçları eşit olmak zorunda değildir. Olay ağacında ikinci dalın olasılığı ilk seçimin durumuna göre güncellenir."
        ],
        "formulas": [
          {
            "expression": "P(A|B)=P(A∩B)/P(B)",
            "meaning": "B evreni içindeki A payı.",
            "conditions": "P(B)>0."
          }
        ],
        "example": {
          "question": "30 kişiden 18’i matematik,12’si fizik kulübünde; 6’sı ikisinde. Matematik kulübündeki biri seçildiğinde fizik kulübünde de olma olasılığı nedir?",
          "steps": [
            "Koşul matematik kulübü olduğundan yeni evren 18 kişi.",
            "Bu evrende fiziktekiler ortak 6 kişidir.",
            "Olasılık 6/18=1/3."
          ],
          "answer": "1/3.",
          "check": "Ters koşul olsaydı 6/12=1/2 olurdu; payda gerçekten değişir."
        },
        "misconceptions": [
          {
            "wrong": "Her olasılıkta payda başlangıçtaki 30’dur.",
            "correct": "Verilen koşula göre evren 18’e daralır.",
            "why": "Koşulu sağlamayan 12 kişi artık olası seçim değildir."
          }
        ],
        "reasoningChecks": [
          {
            "question": "P(B)=0 ise standart koşullu oran kullanılabilir mi?",
            "answer": "Hayır.",
            "why": "Payda 0 olur; verilen formül tanımlanmaz."
          }
        ]
      },
      {
        "title": "Bağımsızlık bilginin olasılığı değiştirmemesidir",
        "source": {
          "book": "AYT-mat",
          "pages": [
            27,
            28,
            29
          ]
        },
        "explanation": [
          "A ile B bağımsızsa B’yi öğrenmek A’nın olasılığını değiştirmez; P(A∩B)=P(A) P(B). Ayrık pozitif olasılıklı olaylarda ise biri olunca diğeri imkânsızlaşır; bu bağımsızlık değildir. Yerine koymadan çekişler torbanın içeriğini değiştirdiği için çoğunlukla bağımlıdır.",
          "Deneysel olasılık göreli sıklıktır; sonlu denemelerde teorik olasılığa tam eşit olmak zorunda değildir. Adil bir zarın 100 atışta 37 kez 3 gelmesi tek başına teorik 3 olasılığını 37/100 yapmaz; bu gözlenen sıklıktır. Gelecek denemeler geçmişteki açığı kapatmak zorunda değildir. Model varsayımı ile gözlem verisini ayrı yorumla."
        ],
        "example": {
          "question": "Torbada 3 kırmızı 2 mavi top var. Yerine koymadan iki çekişte ikisinin de kırmızı olma olasılığı nedir?",
          "steps": [
            "İlk kırmızı 3/5.",
            "İlk kırmızıdan sonra 2 kırmızı, toplam 4 kalır; ikinci koşullu olasılık 2/4.",
            "Çarpım(3/5)(2/4)=3/10."
          ],
          "answer": "3/10.",
          "check": "Sırasız sayım C(3,2)/C(5,2)=3/10 ile aynı."
        },
        "misconceptions": [
          {
            "wrong": "İkinci kırmızı olasılığı yine 3/5’tir.",
            "correct": "Yerine koyulmadığı için 2/4 olur.",
            "why": "İlk çekiş hem kırmızı sayısını hem toplamı değiştirdi."
          }
        ],
        "reasoningChecks": [
          {
            "question": "Adil para 5 kez tura geldiyse sonraki yazı olasılığı artar mı?",
            "answer": "Bağımsız atış modelinde hayır; 1/2 kalır.",
            "why": "Geçmiş dizi sonraki atışın fiziksel olasılığını değiştirmez."
          }
        ]
      }
    ],
    "connections": [
      {
        "concept": "Veri yorumu",
        "why": "Deneysel frekans ile teorik modeli ayırmak istatistik okuryazarlığıdır.",
        "lessonIds": [
          "mat-tyt-23"
        ]
      }
    ]
  },
  "mat-ayt-06": {
    "title": "Trigonometrik oranları yönlü çemberle tanımla",
    "prerequisites": [
      {
        "concept": "Dik üçgen ve koordinat",
        "why": "Oranları dar açı dışına genişletmek için."
      }
    ],
    "goals": [
      "Derece-radyan dönüşümünü yay uzunluğundan çıkar.",
      "Trigonometrik tanım ve yasak açıları belirle."
    ],
    "chapters": [
      {
        "title": "Radyan çemberde doğal bir oran ölçüsüdür",
        "source": {
          "book": "AYT-mat",
          "pages": [
            30,
            31,
            32,
            33
          ]
        },
        "explanation": [
          "Bir açının radyan ölçüsü gördüğü yayın uzunluğunun yarıçapa oranıdır. Tam çemberde 2π r/r=2π olduğundan 360°=2π radyan. Radyan yalnız başka bir sayı etiketi değildir; yay uzunluğu ve açıyı doğrudan l=rθbağıntısında birleştirir. Bu formülde derece kullanılacaksa önce radyana çevrilir.",
          "Yönlü açıda saat yönünün tersi pozitif alınır. Bir veya çok tam tur eklemek çemberde son noktayı değiştirmez. Esas ölçü[0,2π) aralığındaki temsilcidir; negatif açıya yeterli 2π katı eklenir. Birim çemberde uç noktanın x koordinatı cosθ, y koordinatı sinθolarak tanımlanır; negatif değerler eksen konumundan doğar."
        ],
        "formulas": [
          {
            "expression": "θradyan=θderece·π/180",
            "meaning": "360 derece ile 2π radyanın eşitliği.",
            "conditions": "Açı birimleri belirtilir."
          }
        ],
        "example": {
          "question": "−750°açısının esas ölçüsü ve radyan karşılığı nedir?",
          "steps": [
            "−750+3·360=330°; [0,360) aralığında.",
            "330·π/180=11π/6.",
            "Uç nokta dördüncü bölgede; cos pozitif, sin negatif."
          ],
          "answer": "330°=11π/6.",
          "check": "−750 ile 330 arasında 1080°=3 tam tur vardır."
        },
        "misconceptions": [
          {
            "wrong": "Esas ölçü mutlak değerdir.",
            "correct": "Tam tur ekleyip belirtilen aralığa getirilir.",
            "why": "|−750|=750 esas aralıkta değildir ve aynı yönlü noktayı da göstermez."
          }
        ],
        "reasoningChecks": [
          {
            "question": "Yarıçapı 3 olan çemberdeπ/2 açısının yayı kaçtır?",
            "answer": "3π/2.",
            "why": "l=rθ; θradyan olduğunda doğrudan çarpılır."
          }
        ]
      },
      {
        "title": "Oranların tanım koşulları koordinattan gelir",
        "source": {
          "book": "AYT-mat",
          "pages": [
            34,
            35
          ]
        },
        "explanation": [
          "tanθ=sinθ/cosθolduğu için cosθ=0 noktalarında tanjant tanımsızdır. cotθ=cosθ/sinθiçin sinθ≠0 gerekir. sec ve csc de bu koordinatların çarpma tersleridir. sin²θ+cos²θ=1 bağıntısı birim çemberin x²+y²=1 denklemidir; özdeşliğin geometrik kaynağı Pisagor’dur.",
          "Bir trigonometrik değer ile açı bölgesi birlikte verilince diğer değerin işareti seçilir. Karekök alırken±olasılığını bölge bilgisi çözer. Tanjantın pozitif olması birinci veya üçüncü bölge demektir; tek başına sinüsün pozitif olduğunu göstermez. Eksen açıları bölge içi kurallardan ayrıca tanım üzerinden hesaplanır."
        ],
        "formulas": [
          {
            "expression": "sin²θ+cos²θ=1",
            "meaning": "Birim çemberde koordinatların kare toplamı.",
            "conditions": "Her gerçekθ."
          },
          {
            "expression": "tanθ=sinθ/cosθ",
            "meaning": "Uç noktanın y/x oranı.",
            "conditions": "cosθ≠0."
          }
        ],
        "example": {
          "question": "θikinci bölgede ve sinθ=3/5 ise cosθ, tanθnedir?",
          "steps": [
            "cos²θ=1−9/25=16/25.",
            "İkinci bölgede x koordinatı negatif: cosθ=−4/5.",
            "tanθ=(3/5)/(−4/5)=−3/4."
          ],
          "answer": "cosθ=−4/5; tanθ=−3/4.",
          "check": "9/25+16/25=1; ikinci bölge işaretleri(+sin,−cos) uygundur."
        },
        "misconceptions": [
          {
            "wrong": "cosθ=√(1−sin²θ) her zaman pozitiftir.",
            "correct": "Karekök büyüklüğü verir; cos işareti bölgeden seçilir.",
            "why": "İkinci ve üçüncü bölgede cos negatiftir."
          }
        ],
        "reasoningChecks": [
          {
            "question": "tan 90°neden tanımsızdır?",
            "answer": "cos 90°=0 olduğu için.",
            "why": "tan=sin/cos oranında payda sıfırdır."
          }
        ]
      }
    ],
    "connections": [
      {
        "concept": "Trigonometri teoremleri",
        "why": "Çember işaretleri ve oranlar üçgen bağıntılarının temelidir.",
        "lessonIds": [
          "mat-ayt-07"
        ]
      }
    ]
  },
  "mat-ayt-07": {
    "title": "İndirgemede işareti, üçgende veriye uygun teoremi seç",
    "prerequisites": [
      {
        "concept": "Birim çember",
        "why": "Referans açı ile gerçek açı bölgesini birlikte kullanmak için."
      }
    ],
    "goals": [
      "İndirgemeyi simetriden çıkar.",
      "Sinüs ve kosinüs teoremlerinin kullanım alanlarını ayır."
    ],
    "chapters": [
      {
        "title": "Referans açı büyüklüğü, bölge ise işareti belirler",
        "source": {
          "book": "AYT-mat",
          "pages": [
            36,
            37,
            38
          ]
        },
        "explanation": [
          "π−αaçısının uç noktasıα’nın y eksenine göre yansımasıdır; sinüs korunur, kosinüs işaret değiştirir. π+αorijine göre yansır; iki koordinat da işaret değiştirir. π/2−αiçin koordinatlar yer değiştirir; bu yüzden sinüs ile kosinüs birbirine dönüşür. İndirgeme formüllerini çember noktası olarak görmek hangi fonksiyonun korunacağını açıklar.",
          "Sıralamada fonksiyonun bütün gerçek açılarda artan olduğunu varsayma. Sinüs birinci bölgede artar, ikinci bölgede azalır; kosinüs 0 ileπ arasında azalır. Önce açıları aynı uygun aralığa indir, sonra o aralıktaki değişim yönünü kullan. Farklı bölgelerde işaret farkı bazen büyüklük karşılaştırmasını doğrudan bitirir."
        ],
        "formulas": [
          {
            "expression": "sin(π−α)=sinα; cos(π−α)=−cosα",
            "meaning": "Y eksenine göre yansıma.",
            "conditions": "αgerçek; açı birimleri tutarlı."
          }
        ],
        "example": {
          "question": "sin 150°, cos 210°ve tan 135°değerlerini hesapla.",
          "steps": [
            "150°=180°−30°; sin 150°=sin 30°=1/2.",
            "210°=180°+30°; cos 210°=−cos 30°=−√3/2.",
            "135°=180°−45°; tan ikinci bölgede negatif: −1."
          ],
          "answer": "1/2,−√3/2,−1.",
          "check": "İkinci bölgede sin pozitif, tan negatif; üçüncüde cos negatif."
        },
        "misconceptions": [
          {
            "wrong": "180°eklenen bütün trigonometrik değerlerin işareti değişir.",
            "correct": "Sinüs ve kosinüs değişir; tanjant aynı kalır.",
            "why": "İki koordinatın aynı anda eksi olması y/x oranını korur."
          }
        ],
        "reasoningChecks": [
          {
            "question": "sin 20°ile sin 70°hangisi büyüktür?",
            "answer": "sin 70°.",
            "why": "İki açı birinci bölgede; sinüs burada artandır."
          }
        ]
      },
      {
        "title": "İki kenar-aradaki açı kosinüs; karşılıklı çift sinüs teoremi",
        "source": {
          "book": "AYT-mat",
          "pages": [
            39,
            40
          ]
        },
        "explanation": [
          "Kosinüs teoremi Pisagor’un dik olmayan üçgenlere uzantısıdır. Karşı kenarın karesinde aradaki açının kosinüsü düzeltme yapar; 90°için cos 0 olur ve Pisagor kalır. Üç kenar biliniyorsa açıyı; iki kenar ile aradaki açı biliniyorsa üçüncü kenarı bulur. Açının dar veya geniş olmasına göre kosinüsün işareti sonucu değiştirir.",
          "Sinüs teoremi her kenarı karşısındaki açının sinüsüyle eşler; yanlış eşleştirme doğru sayılarla yanlış sonuç üretir. İki kenar ve arada olmayan açı bilgisi bazen iki üçgene izin verebilir; sinüsün aynı değeri iki bütünler açıda almasını üçgenin açı toplamıyla denetle. Elde edilen açıların toplamı 180°’yi aşamaz."
        ],
        "formulas": [
          {
            "expression": "a²=b²+c²−2bc cosA",
            "meaning": "A’nın karşısındaki a kenarının bağıntısı.",
            "conditions": "b, c, üçgende A’yı oluşturan kenarlar."
          },
          {
            "expression": "a/sinA=b/sinB=c/sinC",
            "meaning": "Kenar-karşı açı oranı.",
            "conditions": "Geçerli, dejenere olmayan üçgen."
          }
        ],
        "example": {
          "question": "İki kenarı 5 ve 7, aradaki açısı 60°olan üçgenin üçüncü kenarı kaçtır?",
          "steps": [
            "Karşı kenara a de.",
            "a²=25+49−2·5·7·(1/2)=39.",
            "Kenar pozitif olduğundan a=√39."
          ],
          "answer": "√39.",
          "check": "|7−5|<√39<7+5; üçgen eşitsizliği sağlanır."
        },
        "misconceptions": [
          {
            "wrong": "Kosinüs teoreminde hangi açı kullanıldığı önemli değildir.",
            "correct": "Açı, diğer iki kenarın arasında ve aranan kenarın karşısında olmalıdır.",
            "why": "Teoremin eşleştirmesi üçgenin geometrisine bağlıdır."
          }
        ],
        "reasoningChecks": [
          {
            "question": "Kosinüs teoreminde A=90°olursa ne elde edilir?",
            "answer": "a²=b²+c².",
            "why": "cos 90°=0 düzeltme terimini yok eder."
          }
        ]
      }
    ],
    "connections": [
      {
        "concept": "Üçgen alanı",
        "why": "İki kenar ve aradaki açı aynı verilerle sinüslü alanı belirler.",
        "lessonIds": [
          "mat-tyt-geo-07"
        ]
      }
    ]
  },
  "mat-ayt-08": {
    "title": "Periyot, grafik ve ters trigonometrik esas değer",
    "prerequisites": [
      {
        "concept": "Birim çember ve fonksiyon",
        "why": "Tekrarlanan çıktının ters için kısıtlama gerektirdiğini görmek için."
      }
    ],
    "goals": [
      "Frekans ve periyodu ayır.",
      "Ters trigonometrik değeri esas aralıkta seç."
    ],
    "chapters": [
      {
        "title": "Periyot grafiğin tamamını aynı biçimde tekrar ettirir",
        "source": {
          "book": "AYT-mat",
          "pages": [
            41,
            42,
            43
          ]
        },
        "explanation": [
          "T>0 için her uygun x’tef(x+T)=f(x) ise Tbir periyottur; en küçük pozitif olan temel periyottur. Sinüs ve kosinüste 2π, tanjant ve kotanjanttaπ olur. sin(bx+c) ifadesinde girdinin 2π artması için x’in 2π/|b|artması yeterlidir. Genlik dış katsayının mutlak değeridir; periyodu değiştirmez.",
          "Düşey öteleme orta çizgiyi, yatay öteleme fazı değiştirir. Sinüs/kosinüste çıktı sınırları orta çizgi±genliktir. Tanjantta sınırsız çıktı bulunduğu için genlik kavramı aynı biçimde kullanılmaz. Paydaya dönüşen kosinüsün sıfırları tanjantın tanımsız düşey doğrularını belirler; bu noktalarda grafik noktası çizilmez."
        ],
        "formulas": [
          {
            "expression": "Tsin=2π/|b|; Ttan=π/|b|",
            "meaning": "bx+cile değişen açı için temel tekrar süresi.",
            "conditions": "b≠0; sabit fonksiyonların en küçük pozitif periyodu yoktur."
          }
        ],
        "example": {
          "question": "y=3 sin(2 x−π)+1 fonksiyonunun periyodu, görüntü kümesi ve yatay kayması nedir?",
          "steps": [
            "2 x−π=2(x−π/2); sağaπ/2 kayma.",
            "Periyot 2π/2=π.",
            "Genlik 3, orta çizgi 1; çıktılar[−2,4]."
          ],
          "answer": "T=π; görüntü[−2,4]; sağaπ/2.",
          "check": "sin 2 x−π ifadesineπ eklenen x, açıyı 2π artırır ve aynı değeri verir."
        },
        "misconceptions": [
          {
            "wrong": "Dıştaki 3 periyodu da 3 ile çarpar.",
            "correct": "Dış katsayı yalnız düşey ölçeği değiştirir.",
            "why": "Açıya uygulanan artış ve tekrar şartı aynı kalır."
          }
        ],
        "reasoningChecks": [
          {
            "question": "tanxile tan(x+π) eşit midir?",
            "answer": "Tanımlı oldukları her noktada evet.",
            "why": "Birim çemberde y/xoranı yarım turda korunur."
          }
        ]
      },
      {
        "title": "Ters değer tek bir temsilci seçer",
        "source": {
          "book": "AYT-mat",
          "pages": [
            44
          ]
        },
        "explanation": [
          "Sinüs bütün gerçek sayılarda birebir değildir. Tersini fonksiyon yapmak için[−π/2,π/2] aralığında sınırlandırılır. arcsin çıktısı bu aralıktadır; arccos çıktısı[0,π], arctan çıktısı(−π/2,π/2) aralığındadır. Bu aralıklar doğru açıyı seçmenin parçasıdır.",
          "arcsin(sinx)=x ancak x esas aralıktaysa geçerlidir. Başka açılarda önce aynı sinüsü veren esas açı bulunur. Ters trigonometrik gösterimde−1 üstü çarpma tersi değildir; sin⁻¹ x ile 1/sinx ayrılmalıdır. Bir denklemde bütün kökleri istemek ile ters fonksiyonun tek esas değerini istemek farklı görevlerdir."
        ],
        "example": {
          "question": "arcsin(sin(5π/6)) ve arccos(cos(5π/3)) kaçtır?",
          "steps": [
            "sin(5π/6)=1/2; arcsin çıktısı[−π/2,π/2] içindeπ/6.",
            "cos(5π/3)=1/2; arccos çıktısı[0,π] içindeπ/3.",
            "Her birinde başlangıç açısı değil esas temsilci seçildi."
          ],
          "answer": "π/6 veπ/3.",
          "check": "Seçilen açıların ilgili trigonometrik değerleri 1/2 veesas aralıkları uygundur."
        },
        "misconceptions": [
          {
            "wrong": "Ters fonksiyon iç fonksiyonu her gerçek açıda siler.",
            "correct": "Yalnız kısıtlanan birebir aralıkta doğrudan geri döner.",
            "why": "Periyodik fonksiyon aynı çıktıyı çok farklı açılarda verir."
          }
        ],
        "reasoningChecks": [
          {
            "question": "arcsin 2 gerçek sayıda tanımlı mıdır?",
            "answer": "Hayır.",
            "why": "Sinüsün görüntüsü[−1,1] olduğundan 2 geri çevrilemez."
          }
        ]
      }
    ],
    "connections": [
      {
        "concept": "Trigonometrik denklemler",
        "why": "Esas değer çözüm ailesinin tek bir temsilcisidir.",
        "lessonIds": [
          "mat-ayt-10"
        ]
      }
    ]
  },
  "mat-ayt-09": {
    "title": "Toplam ve iki kat açıyı geometrik yapıyla kullan",
    "prerequisites": [
      {
        "concept": "Trigonometrik özdeşlikler",
        "why": "Bir ifadeyi farklı ama eşdeğer biçimlerde yazmak için."
      }
    ],
    "goals": [
      "Toplam formülünün doğrusal olmadığını göster.",
      "İki kat açıda uygun biçimi seç."
    ],
    "chapters": [
      {
        "title": "Açılar toplanınca değerler doğrudan toplanmaz",
        "source": {
          "book": "AYT-mat",
          "pages": [
            45,
            46
          ]
        },
        "explanation": [
          "Sinüs ve kosinüs bir açının koordinatlarını verir. İki dönmenin bileşkesinde yeni koordinat iki eski koordinatın çarpımlarından oluşur; bu yüzden sin(a+b), sina+sin b değildir. cos(a+b) ifadesinde iki kosinüs çarpımından iki sinüs çarpımı çıkar; sinüste çapraz çarpımlar toplanır. Eksi açı koymak fark formüllerini üretir.",
          "Özel olmayan bir açının değerini 15°=45°−30°ve 75°=45°+30°gibi bilinen açılara ayırabilirsin. Tanjant toplamı formülünde paydanın sıfır olmaması gerekir; eşitlik tanjantların ve sonucun tanımlı olduğu yerde kullanılır. Her sadeleştirme baştaki tanım koşullarını korumalıdır."
        ],
        "formulas": [
          {
            "expression": "sin(a+b)=sina cosb+cosa sinb",
            "meaning": "Toplam açının düşey koordinatı.",
            "conditions": "a, bgerçek."
          },
          {
            "expression": "cos(a+b)=cosa cosb−sina sinb",
            "meaning": "Toplam açının yatay koordinatı.",
            "conditions": "a, bgerçek."
          }
        ],
        "example": {
          "question": "sin 75°değerini tam olarak bul.",
          "steps": [
            "75°=45°+30°.",
            "sin 75°=(√2/2)(√3/2)+(√2/2)(1/2).",
            "Ortak paydayla(√6+√2)/4."
          ],
          "answer": "(√6+√2)/4.",
          "check": "Yaklaşık 0,966; 0 ile 1 arasında ve sin 60°’den büyük."
        },
        "misconceptions": [
          {
            "wrong": "sin(a+b)=sina+sinb.",
            "correct": "Toplam açıda çapraz çarpımlar gerekir.",
            "why": "a=b=90°için sol 0, yanlış önerilen sağ 2 olur."
          }
        ],
        "reasoningChecks": [
          {
            "question": "cos(a−b) formülünde sinüs çarpımının işareti nedir?",
            "answer": "Pozitif.",
            "why": "b yerine−b yazılınca sinüs tek, kosinüs çift olduğu için eksi işaret artıya döner."
          }
        ]
      },
      {
        "title": "İki kat açı bir bilinmeyeni ortadan kaldırabilir",
        "source": {
          "book": "AYT-mat",
          "pages": [
            47,
            48
          ]
        },
        "explanation": [
          "Toplam formülünde b=ayazmak sin 2 a=2 sina cosave cos 2 a=cos² a−sin² a verir. Birim çember özdeşliğiyle cos 2 a=1−2 sin² a=2 cos² a−1 biçimleri çıkar. Hangi trigonometrik değer biliniyorsa uygun biçimi seçmek gereksiz kök ve işaret hesabını azaltır.",
          "sin 2 a verildiğinde sina veya cosatek başına belirlenmeyebilir; iki çarpanın aynı ürünü veren birçok değer vardır. Kareli ifadeden kareköke geçişte bölge işareti yeniden gerekir. İki kat açının bölgesi, a’nın bölgesiyle aynı olmak zorunda değildir; örneğin ikinci bölgedeki açı iki katında üçüncü veya dördüncü bölgeye geçebilir."
        ],
        "formulas": [
          {
            "expression": "sin2a=2sina cosa; cos2a=1−2sin²a",
            "meaning": "Toplam formüllerinin eş açı durumu.",
            "conditions": "Her gerçeka."
          }
        ],
        "example": {
          "question": "aikinci bölgede ve sina=3/5 ise sin 2 a ve cos 2 a nedir?",
          "steps": [
            "cosa=−4/5; bölge işareti negatif.",
            "sin 2 a=2·(3/5)·(−4/5)=−24/25.",
            "cos 2 a=1−2·9/25=7/25."
          ],
          "answer": "−24/25; 7/25.",
          "check": "Kareler toplamı 576/625+49/625=1."
        },
        "misconceptions": [
          {
            "wrong": "aikinci bölgede ise 2 ada ikinci bölgededir.",
            "correct": "Açının katı yeni bir bölgeye geçebilir.",
            "why": "İşareti sonuçtan veya 2 a’nın gerçek aralığından belirle."
          }
        ],
        "reasoningChecks": [
          {
            "question": "cos 2 a=1 ise sin a kaçtır?",
            "answer": "0.",
            "why": "1−2 sin² a=1 eşitliği sin² a=0 verir."
          }
        ]
      }
    ],
    "connections": [
      {
        "concept": "Trigonometrik denklem",
        "why": "Aynı tür fonksiyonlara dönüştürmek çok farklı görünen terimleri birleştirir.",
        "lessonIds": [
          "mat-ayt-10"
        ]
      }
    ]
  },
  "mat-ayt-10": {
    "title": "Trigonometrik denklemlerde bütün kök ailelerini koru",
    "prerequisites": [
      {
        "concept": "Periyot ve esas açı",
        "why": "Tek çözümün tekrar eden bütün karşılıklarını bulmak için."
      }
    ],
    "goals": [
      "Sinüs ve kosinüsün iki temel ailesini yaz.",
      "Bölme yaparken kaybolan kökleri denetle."
    ],
    "chapters": [
      {
        "title": "Bir esas değer bütün çözüm değildir",
        "source": {
          "book": "AYT-mat",
          "pages": [
            49
          ]
        },
        "explanation": [
          "sinx=sina eşitliği bir turda genellikle iki açı verir: a ileπ−a. Bunlara 2 kπ eklenir. Kosinüste±a+2 kπ, tanjantta a+kπ a ilesi oluşur. Özel uç değerlerde iki aile çakışabilir; aynı kökü iki kez sayma. İstenen sonlu aralık verildiyse genel aileden uygun k tam sayılarını seç.",
          "Açı yerine 2 x−αgibi ifade varsa önce bu ifadeye ait bütün aileleri yaz, sonra x’i çöz. Yalnız esas ters trigonometrik değeri kullanmak ikinci aileyi ve dönemleri kaybettirir. Aralık uçlarının dahil olup olmadığı kök sayısını değiştirebilir; 0 ile 2π sinüs için aynı çıktı verse de iki ayrı girdi olabilir."
        ],
        "formulas": [
          {
            "expression": "sinx=sina ⇒ x=a+2kπ veya x=π−a+2kπ",
            "meaning": "Sinüsün iki simetrik çözüm ailesi.",
            "conditions": "k tam sayı."
          }
        ],
        "example": {
          "question": "0≤x<2π aralığında sin(2 x)=1/2 denklemini çöz.",
          "steps": [
            "2 x=π/6+2 kπ veya 5π/6+2 kπ.",
            "x=π/12+kπ veya 5π/12+kπ.",
            "Aralıktaπ/12,5π/12,13π/12,17π/12."
          ],
          "answer": "Dört kök: π/12,5π/12,13π/12,17π/12.",
          "check": "2 x aralığı[0,4π); iki tam turda her turiki kök beklenir."
        },
        "misconceptions": [
          {
            "wrong": "arcsin(1/2)=π/6 bulmak bütün çözümü verir.",
            "correct": "Bu yalnız bir esas açıdır; simetri ve periyot aileleri eklenir.",
            "why": "Sinüs aynı değeri her turda iki açıdan alabilir."
          }
        ],
        "reasoningChecks": [
          {
            "question": "cosx=1 için 0≤x≤2π kaç kök var?",
            "answer": "2: 0 ve 2π.",
            "why": "İki uç da dahil ve iki farklı girdidir."
          }
        ]
      },
      {
        "title": "Ortak çarpanı bölmeden önce sıfır durumunu ayır",
        "source": {
          "book": "AYT-mat",
          "pages": [
            50
          ]
        },
        "explanation": [
          "Trigonometrik denklemlerde özdeşlik kullanarak ortak çarpana ulaşmak çözümleri sınıflandırır. sinx cosx=sinx denkleminde sinx’ebölmek sinx=0 a ile sini siler. Bunun yerine sinx(cosx−1)=0 yazıp her çarpanı ayrı incele. Bir aile diğerinin alt kümesi olabilir; birleşimde tekrarları ayıkla.",
          "Homojen sinüs-kosinüs ifadelerinde cosx’ebölüp tanjant kullanmak yararlı olabilir; ancak önce cosx=0 durumunun başlangıç denklemini sağlayıp sağlamadığı kontrol edilir. Karesi alınan denklemlerde de yabancı kökler oluşabilir. Sonuçların yalnız dönüştürülmüş denklemde değil asıl eşitlikte geçerli olduğundan emin ol."
        ],
        "example": {
          "question": "0≤x<2π için 2 sin² x−sinx=0 denklemini çöz.",
          "steps": [
            "sinx(2 sinx−1)=0.",
            "sinx=0 için 0 veπ; 2π dışarıda.",
            "sinx=1/2 içinπ/6 ve 5π/6.",
            "Birleşim dört farklı kök."
          ],
          "answer": "0,π/6,5π/6,π.",
          "check": "Her kökte sinxya 0 ya 1/2 olur; her ikisi de 2 u²−u=0 sağlar."
        },
        "misconceptions": [
          {
            "wrong": "Her iki tarafta sin x varsa doğrudan bölebilirim.",
            "correct": "sinx=0 durumunu ayrı saklamalısın.",
            "why": "Bölme yalnız sıfır olmayan değerlerde eşdeğerdir."
          }
        ],
        "reasoningChecks": [
          {
            "question": "tan x denklemine geçmeden hangi değerleri denetlersin?",
            "answer": "cosx=0 olanları.",
            "why": "Tanjanta geçiş cosx’ebölme içerir."
          }
        ]
      }
    ],
    "connections": [
      {
        "concept": "Denklemde eşdeğerlik",
        "why": "Kök kaybetmeme ilkesi cebir ve trigonometrinin ortak temelidir.",
        "lessonIds": [
          "mat-tyt-06"
        ]
      }
    ]
  },
  "mat-ayt-11": {
    "title": "Üstel ve logaritmik modelde terslik, koşul ve büyüme",
    "prerequisites": [
      {
        "concept": "Üsler ve ters fonksiyon",
        "why": "Logaritmayı üs bulma sorusu olarak okumak için."
      }
    ],
    "goals": [
      "Logaritmanın tanım koşullarını yaz.",
      "Denklem ve eşitsizlikte tabanın yön etkisini koru."
    ],
    "chapters": [
      {
        "title": "Logaritma üs sorusunun cevabıdır",
        "source": {
          "book": "AYT-mat",
          "pages": [
            51,
            52,
            53,
            54,
            55
          ]
        },
        "explanation": [
          "aˣ=y ile logₐy=xaynı eşlemenin ileri ve geri yönleridir. Bütün gerçek x’lerde sürekli tek bir üstel fonksiyon için a>0, a≠1 alınır. Çıktılar pozitiftir; bu yüzden logaritmanın girdisi de pozitif olmalıdır. a=1 bütün girdileri 1’e götürdüğü için terslenemez.",
          "a>1 iken üstel ve logaritma artan; 0<a<1 iken azalandır. Üstel grafiğin yatay sınırı 0’dır; 0’a yaklaşmak 0 değerini almak değildir. Logaritma grafiğinde buna karşılık x=0 tanım sınırı oluşur. İki grafik y=x doğrusuna göre yansır; tanım ve görüntü kümeleri yer değiştirir."
        ],
        "formulas": [
          {
            "expression": "logₐy=x ⇔ aˣ=y",
            "meaning": "Üs ile logaritmanın ters tanımı.",
            "conditions": "a>0, a≠1, y>0."
          }
        ],
        "example": {
          "question": "log₂(x−1)=3 denklemini çöz ve tanımını kontrol et.",
          "steps": [
            "Önce x−1>0: x>1.",
            "Ters tanım: x−1=2³=8.",
            "x=9."
          ],
          "answer": "9.",
          "check": "log₂8=3 ve 9>1; başlangıç tanımı sağlanır."
        },
        "misconceptions": [
          {
            "wrong": "Logaritmanın içi 0 olabilir.",
            "correct": "Logaritma girdisi kesin pozitif olmalıdır.",
            "why": "Pozitif tabanın hiçbir gerçek kuvveti 0 üretmez."
          }
        ],
        "reasoningChecks": [
          {
            "question": "logₐ1 kaçtır?",
            "answer": "0.",
            "why": "a⁰=1; taban koşulları sağlanıyorsa ters değer 0 dır."
          }
        ]
      },
      {
        "title": "Kurallar çarpımı toplama dönüştürür, toplamı değil",
        "source": {
          "book": "AYT-mat",
          "pages": [
            56,
            57,
            58,
            59,
            60
          ]
        },
        "explanation": [
          "logₐ(uv)=logₐu+logₐvçünkü u=aʳ, v=aˢiseuv=aʳ⁺ˢolur. Buna karşılık log(u+v) için aynı toplama kuralı yoktur. Bölümde fark, kuvvette katsayı gelir; her logaritmanın girdisi için pozitiflik ayrıca korunur. log(x²)=2 logx ifadesi gerçek sayılarda sağ taraf nedeniyle x>0 ister; sol taraf ise x≠0 için tanımlıdır.",
          "Denklem çözerken logaritmaları birleştirmeden önce her başlangıç içini pozitif yap. Son çarpım pozitif olsa bile iki negatif çarpanın başlangıç logaritmaları tanımsızdır. Eşitsizlikte aynı taban 1’den küçükse yön döner; yalnız girdileri karşılaştırıp yönü korumak hata üretir."
        ],
        "formulas": [
          {
            "expression": "logₐu+logₐv=logₐ(uv)",
            "meaning": "Çarpımın üssü üslerin toplamıdır.",
            "conditions": "u, v>0; a>0, a≠1."
          }
        ],
        "example": {
          "question": "log₂(x−1)+log₂(x−3)=3 denklemini çöz.",
          "steps": [
            "Tanım x>3.",
            "Birleştir: (x−1)(x−3)=8; x²−4 x−5=0.",
            "Kökler 5 ve−1; tanımda yalnız 5."
          ],
          "answer": "5.",
          "check": "log₂4+log₂2=2+1=3; −1 başlangıç içlerini negatif yapar."
        },
        "misconceptions": [
          {
            "wrong": "Çarpım pozitifse bütün başlangıç logaritmaları tanımlıdır.",
            "correct": "Her logaritmanın içi ayrı ayrı pozitif olmalıdır.",
            "why": "İki negatif iç çarpımı pozitif yapsa da logaritmalar gerçek değildir."
          }
        ],
        "reasoningChecks": [
          {
            "question": "log₁/₂x>2 hangi aralığı verir?",
            "answer": "0<x<1/4.",
            "why": "Azalan tabanda karşılaştırma yönü döner; pozitiflik korunur."
          }
        ]
      },
      {
        "title": "Sabit yüzde artışı eşit fark değil eşit çarpan üretir",
        "source": {
          "book": "AYT-mat",
          "pages": [
            61
          ]
        },
        "explanation": [
          "Her dönem aynı p oranında büyüme Mₙ=M₀(1+p)ⁿmodelidir. Dönem sayısını bulmak için kuvvetteki bilinmeyen logaritmayla aşağı alınır. p’nin yüzde yerine ondalık oran olarak yazılması gerekir; %5 için 1,05 çarpanı kullanılır. Azalışta 1−p çarpanı 0 ile 1 arasındadır.",
          "Üstel model sabit oran varsayımı taşır. Bir sistem her yıl aynı miktarda artıyorsa doğrusal model uygundur. Yarı ömür ve ikiye katlanma süreleri aynı çarpım düşüncesidir; birim dönemler değişirse tabanla üs birlikte yeniden düzenlenir. Süre tam dönem isteniyorsa cebirsel sonuç yukarı veya aşağı sınır koşuluna göre yuvarlanır."
        ],
        "example": {
          "question": "1000 bakteri her saatte %20 artıyor. Sayı ilk kez hangi tam saatte 2000’i aşar?",
          "steps": [
            "1000·1,2ⁿ>2000; 1,2ⁿ>2.",
            "n>log 2/log 1,2≈3,80.",
            "İlk tam saat 4; 3 saatte 1728,4 saatte 2073,6."
          ],
          "answer": "4. saat.",
          "check": "İki komşu tam saatin değerleri eşik aşımını doğrudan doğrular."
        },
        "misconceptions": [
          {
            "wrong": "Her saat %20 artış başlangıç sayıya her defasında 200 ekler.",
            "correct": "Her yeni yüzde o andaki miktara uygulanır.",
            "why": "İkinci saatte artış 240 olur; fark sabit değildir."
          }
        ],
        "reasoningChecks": [
          {
            "question": "Yarı ömrü 3 saat olan miktar 9 saatte kaçta bir kalır?",
            "answer": "1/8.",
            "why": "Üç yarı ömür geçti; (1/2)³."
          }
        ]
      }
    ],
    "connections": [
      {
        "concept": "Diziler",
        "why": "Dönemli üstel büyüme geometrik dizidir.",
        "lessonIds": [
          "mat-ayt-12"
        ]
      }
    ]
  },
  "mat-ayt-12": {
    "title": "Dizide indeks, örüntü ve toplamı ayır",
    "prerequisites": [
      {
        "concept": "Fonksiyon ve üs",
        "why": "Diziyi doğal sayı girdili bir eşleme olarak görmek için."
      }
    ],
    "goals": [
      "Aritmetik ve geometrik yapıyı test et.",
      "Toplam formüllerinin gerekçesini kur."
    ],
    "chapters": [
      {
        "title": "İndeks bir sıra numarasıdır, değer değildir",
        "source": {
          "book": "AYT-mat",
          "pages": [
            62,
            63,
            64,
            65
          ]
        },
        "explanation": [
          "aₙifadesinde n terimin sırasını, aₙdeğerini belirtir. aₙ=2 n+1 dizisinde beşinci terim 11’dir; 11’inci terim farklıdır. Başlangıç indeks inin 0 mı 1 mi olduğu ilk değerleri değiştirir. Özyinelemeli tanımda yalnız aₙ₊₁=2 aₙkuralı yeterli değildir; başlangıç değeri de gerekir.",
          "Aritmetik dizide ardışık fark, geometrik dizide uygun koşullarda ardışık oran sabittir. Genel terimler ilk terimden n−1 adım ilerlediği için a₁+(n−1) d ve a₁rⁿ⁻¹ olur. Birkaç terimin örüntüsünü fark etmek tek başına sonsuz diziyi benzersiz tanımlamaz; verilen kural veya dizinin türü esastır."
        ],
        "formulas": [
          {
            "expression": "aₙ=a₁+(n−1) d; bₙ=b₁rⁿ⁻¹",
            "meaning": "Aritmetik ve geometrik genel terimler.",
            "conditions": "n≥1; d, r sabit; oranla tanıma geçerken sıfır terimler ayrıca incelenir."
          }
        ],
        "example": {
          "question": "Aritmetik dizide a₃=8, a₈=23 isea₁vea₁₀kaçtır?",
          "steps": [
            "İndeks farkı 5 olduğundan 5 d=23−8=15; d=3.",
            "a₃=a₁+2 d; 8=a₁+6; a₁=2.",
            "a₁₀=2+9·3=29."
          ],
          "answer": "a₁=2; a₁₀=29.",
          "check": "Üçüncü 2+6=8; sekizinci 2+21=23."
        },
        "misconceptions": [
          {
            "wrong": "a₈−a₃arasında 8−3+1 adet fark vardır.",
            "correct": "İki indeks arasındaki adım sayısı 8−3=5 tir.",
            "why": "Terim sayısı ile geçiş sayısı farklıdır."
          }
        ],
        "reasoningChecks": [
          {
            "question": "aₙ₊₁=2 aₙ, a₁=3 içina₄kaçtır?",
            "answer": "24.",
            "why": "3→6→12→24; ilkten dördüncüye üç çarpma."
          }
        ]
      },
      {
        "title": "Toplam formülleri eşleştirme ve kaydırmayla çıkar",
        "source": {
          "book": "AYT-mat",
          "pages": [
            66,
            67
          ]
        },
        "explanation": [
          "Aritmetik toplamı bir kez ileri, bir kez geri yazınca her sütun a₁+aₙolur; n sütunun toplamı 2 Sₙverir. Geometrik toplamda Sile r S çıkarılınca ara terimler silinir; r≠1 için formül buradan çıkar. r=1 durumunda bütün terimler a₁olduğundan toplam na₁dir; paydası 0 olan formül kullanılmaz.",
          "Sₙilk n terimin toplamıysa tek terim aₙ=Sₙ−Sₙ₋₁ile bulunur; n≥2 için bu fark doğrudan geçerlidir, a₁=S₁ayrıca yazılır. Fibonacci gibi özyinelemelerde aritmetik veya geometrik formüller varsayılamaz; ardışık terimler verilen bağıntıdan üretilir. Negatif ortak oran işaretleri dönüşümlü yapabilir; toplamda bu işaretleri koru."
        ],
        "formulas": [
          {
            "expression": "Sₙ=n(a₁+aₙ)/2",
            "meaning": "Aritmetik toplamda dıştan içe eşleştirme.",
            "conditions": "Aritmetik dizi."
          },
          {
            "expression": "Sₙ=a₁(1−rⁿ)/(1−r)",
            "meaning": "Geometrik toplamda S−r S sadeleşmesi.",
            "conditions": "r≠1; n pozitif tam sayı."
          }
        ],
        "example": {
          "question": "3,6,12,…geometrik dizisinin ilk 6 teriminin toplamı nedir?",
          "steps": [
            "a₁=3, r=2, n=6.",
            "S₆=3(1−2⁶)/(1−2)=3·63.",
            "Toplam 189."
          ],
          "answer": "189.",
          "check": "3+6+12+24+48+96=189; sonraki terim 192 den 3 eksik."
        },
        "misconceptions": [
          {
            "wrong": "Geometrik toplamda r=1 de aynı kesir formülü doğrudan kullanılır.",
            "correct": "r=1 için Sₙ=na₁ayrı yazılır.",
            "why": "Genel formülün paydası 1−r, bu durumda 0 olur."
          }
        ],
        "reasoningChecks": [
          {
            "question": "Sₙ=n² ise a₄kaçtır?",
            "answer": "7.",
            "why": "a₄=S₄−S₃=16−9."
          }
        ]
      }
    ],
    "connections": [
      {
        "concept": "Üstel model",
        "why": "Geometrik dizide sabit çarpan sürekli üstel modelin ayrık karşılığıdır.",
        "lessonIds": [
          "mat-ayt-11"
        ]
      }
    ]
  },
  "mat-ayt-13": {
    "title": "Limitte yaklaşma, nokta değeri ve sürekliliği ayır",
    "prerequisites": [
      {
        "concept": "Fonksiyon ve çarpanlara ayırma",
        "why": "Komşu noktalardaki eşdeğerliği tanım noktasından ayırmak için."
      }
    ],
    "goals": [
      "Sağ ve sol limitleri ayrı incele.",
      "Belirsizliği sonuç değil dönüşüm gereği olarak yorumla."
    ],
    "chapters": [
      {
        "title": "Limit bir noktadaki etiket değil yakın çevredeki davranıştır",
        "source": {
          "book": "AYT-mat",
          "pages": [
            68,
            69,
            70,
            71
          ]
        },
        "explanation": [
          "x→a ifadesi x’in a’ya yaklaştığını fakat a’ya eşit olmasının gerekmediğini söyler. Bu yüzden f(a) tanımsızken limit bulunabilir veya f(a) ile limit farklı olabilir. İki yönlü sonlu limitin varlığı için sağdan ve soldan yaklaşımların aynı sonlu sayıya gitmesi gerekir. Yalnız bir taraftaki grafiği görmek yeterli değildir.",
          "Parçalı fonksiyonda x=a’nın hangi dala ait olduğu f(a)’yı belirler; sol ve sağ limit ise yakın çevrede kullanılan dallardan bulunur. Açık/kapalı grafik işaretleri bu ayrımı gösterir. Limitin bulunduğu noktaya yeni bir değer yazmak komşu davranışı değiştirmez. Bir sıçramayı tek nokta değeriyle onaramazsın; iki yanın uyuşması gerekir."
        ],
        "example": {
          "question": "f(x)=2 x+1, x<1; f(1)=7; f(x)=x+2, x>1 olsun. x→1 limiti ve f(1) nedir?",
          "steps": [
            "Soldan 2·1+1=3.",
            "Sağdan 1+2=3; eşit oldukları için iki yönlü limit 3.",
            "Nokta değeri ayrı verilmiş: f(1)=7."
          ],
          "answer": "Limit 3, f(1)=7.",
          "check": "Her iki komşu dal 3’e yaklaşırken tek nokta 7’de durur; limit bunu değiştirmez."
        },
        "misconceptions": [
          {
            "wrong": "Limit her zaman f(a)’ya eşittir.",
            "correct": "Bu eşitlik süreklilik koşuludur; her fonksiyonda sağlanmaz.",
            "why": "Tek noktada değeri değiştirmek yaklaşımı değiştirmez."
          }
        ],
        "reasoningChecks": [
          {
            "question": "Sol limit 2, sağ limit 5 ise iki yönlü limit var mıdır?",
            "answer": "Yoktur.",
            "why": "İki yan aynı değere yaklaşmıyor."
          }
        ]
      },
      {
        "title": "0/0 bir sayı değil, ifadenin yeniden incelenmesi gerektiğidir",
        "source": {
          "book": "AYT-mat",
          "pages": [
            72,
            73
          ]
        },
        "explanation": [
          "Pay ve payda aynı anda 0’a gidiyorsa oran için doğrudan 0 veya 1 kararı verilemez. Farklı oranlar farklı limitler verebilir. Çarpanlara ayırma ortak sıfırlanan yapıyı açığa çıkarır; eşlenik köklü farkları çarpıma dönüştürür. Sadeleştirme x≠aolan komşu noktalarda yapılır; limit bu komşuları kullandığı için işlem geçerlidir.",
          "Sadeleştirme sonrasında a’yı yerine koyabilmek yeni ifadenin orada sürekli olmasına dayanır. Aynı yöntem noktadaki eski tanımsızlığı otomatik doldurmaz. Kaynaktaki ileri yöntem notlarını zorunlu çözüm yolu saymadan, faktör ve eşlenikle çözülebilen temel limitlere odaklan. Sonsuzluğa yaklaşma ve 0 payda durumlarında işaret ile yön ayrı incelenir."
        ],
        "example": {
          "question": "x→3 için(x²−9)/(x−3) ve x→0 için(√(x+4)−2)/x limitlerini bul.",
          "steps": [
            "İlk oran x≠3 için(x−3)(x+3)/(x−3)=x+3; limit 6.",
            "İkinci oranı eşlenikle çarp: 1/(√(x+4)+2), x≠0.",
            "x→0 için limit 1/(2+2)=1/4."
          ],
          "answer": "6 ve 1/4.",
          "check": "İlk oranınx=3 değeri hâlâ tanımsız; ikinci dönüşümde kök içi 0 çevresinde pozitiftir."
        },
        "misconceptions": [
          {
            "wrong": "0/0 belirsizliği 0 sonucunu verir.",
            "correct": "Belirsizlik tek bir sonuç belirlemez; cebirsel yapı incelenir.",
            "why": "x/xlimiti 1, x²/xlimiti 0 olabilir."
          }
        ],
        "reasoningChecks": [
          {
            "question": "(x−2)/(x−2) ifadesinin 2’de limiti ve değeri aynı mıdır?",
            "answer": "Limit 1, değeri tanımsız.",
            "why": "Sadeleşmiş eşdeğerlik yalnız x≠2 için geçerlidir."
          }
        ]
      },
      {
        "title": "Süreklilik üç koşulun birlikte sağlanmasıdır",
        "source": {
          "book": "AYT-mat",
          "pages": [
            74,
            75
          ]
        },
        "explanation": [
          "a’da süreklilik için f(a) tanımlı, iki yönlü limit mevcut ve limit f(a)’ya eşit olmalıdır. Kapalı aralığın uçlarında tanım kümesinin içinden tek yönlü yaklaşım kullanılır. Açık bir uçta fonksiyon değeri yoksa orada süreklilik istenip istenmediği tanım alanına göre açıklanmalıdır.",
          "Parametreli parçalı fonksiyonda önce iki yan limitleri eşitle, sonra ortak değeri nokta değerine bağla. Bu bağımsız koşullar tek bir eşitliğe yanlışlıkla indirgenmemelidir. Süreklilik kesintisiz yaklaşım demektir; teğet veya türev garantisi değildir. |x|0’da süreklidir ama sivri uç nedeniyle iki yan eğimleri farklıdır."
        ],
        "example": {
          "question": "f(x)=ax+1, x<2; f(x)=x²+b, x≥2 ve f(2)=5 olacak biçimde sürekli olsun. a, bnedir?",
          "steps": [
            "İkinci dal f(2)=4+b=5; b=1.",
            "Sağ limit 5; sol limit 2 a+1.",
            "Süreklilik için 2 a+1=5; a=2."
          ],
          "answer": "a=2, b=1.",
          "check": "Sol dal 2 x+1 ile sağ dalx²+1,2’de 5’e gelir ve nokta değeri 5 tir."
        },
        "misconceptions": [
          {
            "wrong": "Sürekli her fonksiyon türevlenebilirdir.",
            "correct": "Türevlenebilirlik daha güçlüdür; süreklilik tek başına yetmez.",
            "why": "|x|grafiği 0’da kopmaz ama köşe oluşturur."
          }
        ],
        "reasoningChecks": [
          {
            "question": "Bir deliği nokta değeriyle doldurmak ne zaman mümkündür?",
            "answer": "İki yan aynı sonlu limite geliyorsa.",
            "why": "Nokta değeri bu ortak limite eşit seçilerek giderilebilir kesinti kapanır."
          }
        ]
      }
    ],
    "connections": [
      {
        "concept": "Türev",
        "why": "Türev tanımı bir fark oranının limitidir ve süreklilikle yakından ilişkilidir.",
        "lessonIds": [
          "mat-ayt-14"
        ]
      }
    ]
  },
  "mat-ayt-14": {
    "title": "Türevi yerel doğrusal değişim olarak kur",
    "prerequisites": [
      {
        "concept": "Limit ve fonksiyon",
        "why": "Sekant eğiminin tek noktaya yaklaşmasını izlemek için."
      }
    ],
    "goals": [
      "Türev tanımını hesapla.",
      "Çarpım, bölüm ve bileşkede değişim nedenlerini ayır."
    ],
    "chapters": [
      {
        "title": "Fark oranından teğet eğimine",
        "source": {
          "book": "AYT-mat",
          "pages": [
            76,
            77
          ]
        },
        "explanation": [
          "(f(a+h)−f(a))/h oranı iki farklı noktayı birleştiren sekantın eğimidir. h→0 iken oran bir sonlu değere yaklaşırsa f’(a) elde edilir. Bu, çıktının çok küçük girdi değişimlerine yerel duyarlılığını ve teğetin eğimini verir. h=0 doğrudan yazılmaz; limit alınır. Birim açısından türev çıktı birimi/girdi birimidir.",
          "Türev pozitifse yakın çevrede sağa doğru yükselme, negatifse düşme beklenir; fonksiyonun kendi pozitifliği başka bilgidir. Bir noktada türev 0 olması yatay teğeti gösterir fakat maksimum veya minimumu tek başına kanıtlamaz. x³0’da yatay teğetli ama iki yönde artan bir örnektir."
        ],
        "formulas": [
          {
            "expression": "f’(a)=lim[h→0](f(a+h)−f(a))/h",
            "meaning": "Anlık değişim ve teğet eğiminin tanımı.",
            "conditions": "Limit sonlu ve iki yan uyumlu olmalı."
          }
        ],
        "example": {
          "question": "f(x)=x² fonksiyonunun x=3’te türevini tanımdan bul.",
          "steps": [
            "f(3+h)−f(3)=(3+h)²−9=6 h+h².",
            "h≠0 için oran 6+h.",
            "h→0 limiti 6; teğet eğimi 6."
          ],
          "answer": "f’(3)=6.",
          "check": "Kuvvet kuralıf’(x)=2 x ile aynı sonuç; tanım kuralın nedenini gösterir."
        },
        "misconceptions": [
          {
            "wrong": "Türev, f(a+h)−f(a) farkının kendisidir.",
            "correct": "Fark girdi değişimine bölünüp limit alınır.",
            "why": "Aynı çıktı değişimi farklı h’de farklı duyarlılık ifade eder."
          }
        ],
        "reasoningChecks": [
          {
            "question": "Sabit fonksiyonun türevi neden 0’dır?",
            "answer": "Her h için çıktı farkı 0 olduğu için.",
            "why": "Sekantların hepsi yataydır."
          }
        ]
      },
      {
        "title": "Çarpımda iki etken, bileşkede iki değişim ölçeği vardır",
        "source": {
          "book": "AYT-mat",
          "pages": [
            78,
            79,
            80
          ]
        },
        "explanation": [
          "Çarpım türevinde yalnız iki türevi çarpmak doğru değildir; hem ilk etkenin hem ikincinin değişimi katkı yapar. (fg)’=f’g+fg’kuralı bu iki katkıyı toplar. Bölüm kuralında payda değişimi eksi işaretiyle gelir; paydanın sıfır olmadığı alan korunur. Türevlenebilirlik fonksiyonun o noktada sürekli olmasını gerektirir.",
          "Bileşkede dış fonksiyonun girdisi u=g(x)’tir. x’in küçük değişimi önce u’yu, sonra çıktıyı etkiler; yerel oranlar çarpılır. Bu nedenle(g(x))ⁿtürevinde yalnız n(g(x))ⁿ⁻¹ değil, g’(x) çarpanı da gerekir. İç fonksiyon doğrusal değilse bu etki sayısal olarak belirgindir. İşlemden sonra tanım kümesini yeniden gözden geçir."
        ],
        "formulas": [
          {
            "expression": "(fg)’=f’g+fg’; (f/g)’=(f’g−fg’)/g²",
            "meaning": "Çarpım ve bölümde iki değişen etkenin katkısı.",
            "conditions": "f, g türevlenebilir; bölümde g≠0."
          },
          {
            "expression": "[F(g(x))]’=F’(g(x)) g’(x)",
            "meaning": "Bileşkede yerel değişimlerin çarpımı.",
            "conditions": "İlgili iç ve dış fonksiyonlar türevlenebilir."
          }
        ],
        "example": {
          "question": "y=(x²+1)³ içiny’(1) kaçtır?",
          "steps": [
            "Dış kuvvet türevi 3(x²+1)².",
            "İç türev 2 x ile çarp: y’=6 x(x²+1)².",
            "x=1 için 6·1·4=24."
          ],
          "answer": "24.",
          "check": "İç değişim x=1’de 2 olur; dış değişim oranı 12, çarpımları 24."
        },
        "misconceptions": [
          {
            "wrong": "Bileşke türevinde iç türev alınmaz.",
            "correct": "İç değişimin etkisi g’çarpanıyla eklenir.",
            "why": "Dış fonksiyonun girdisi xdeğil, g(x)’tir."
          }
        ],
        "reasoningChecks": [
          {
            "question": "(x·x)’neden 1 değil 2 x’tir?",
            "answer": "Çarpım kuralı 1·x+x·1=2 x verir.",
            "why": "Her iki xetkeni de değişir."
          }
        ]
      },
      {
        "title": "Köşe noktası iki farklı eğim üretebilir",
        "source": {
          "book": "AYT-mat",
          "pages": [
            78
          ]
        },
        "explanation": [
          "Parçalı fonksiyonda noktadaki türev için önce süreklilik denetlenir. Sonra sol ve sağ fark oranlarının aynı sonlu değere gidip gitmediğine bakılır. Yalnız iki dalın formel türevlerini eşitlemek, nokta değerinin komşu değerlerle uyuştuğu gösterilmeden yeterli değildir. Süreksizlik zaten türevi engeller.",
          "Mutlak değerde iç ifadenin işaretine göre dallar açılır. |x|içinsol dal−x, sağ dal x olur; 0’da değerler uyuşur ama eğimler−1 ve 1’dir. |x²|ise x² olduğundan 0’da türev vardır; mutlak değer işaretinin görünmesi otomatik türevsizlik demek değildir. Yapı ve işaret değişimi belirleyicidir."
        ],
        "example": {
          "question": "f(x)=ax+1, x<1; f(x)=x²+b, x≥1 fonksiyonu 1’de türevlenebilir olsun. a, bnedir?",
          "steps": [
            "Süreklilik: a+1=1+b; yani a=b.",
            "Sol türev a, sağ türev 2 x’in 1 değeri 2.",
            "a=2; dolayısıyla b=2."
          ],
          "answer": "a=b=2.",
          "check": "İki dal 1’de 3, eğimler 2; iki bağımsız koşul da sağlanır."
        },
        "misconceptions": [
          {
            "wrong": "Süreklilik sağlandıysa türev de vardır.",
            "correct": "İki yan eğimlerin eşitliği ayrıca gerekir.",
            "why": "|x|süreklilik ile türevlenebilirliğin farklı olduğunu gösterir."
          }
        ],
        "reasoningChecks": [
          {
            "question": "|x−2|fonksiyonu 2’de neden türevsizdir?",
            "answer": "Sol eğim−1, sağ eğim 1.",
            "why": "Tek bir teğet eğimi oluşmaz."
          }
        ]
      }
    ],
    "connections": [
      {
        "concept": "Teğet ve optimizasyon",
        "why": "Türev kuralları daha sonra işaret ve model çözümünde kullanılır.",
        "lessonIds": [
          "mat-ayt-15"
        ]
      }
    ]
  },
  "mat-ayt-15": {
    "title": "Türev işaretinden değişim, teğet ve optimum çıkar",
    "prerequisites": [
      {
        "concept": "Türev ve işaret tablosu",
        "why": "Yerel eğim bilgisini aralık davranışına dönüştürmek için."
      }
    ],
    "goals": [
      "Kritik noktayı ekstremumla eşitleme.",
      "Kapalı model aralığında uçları denetle."
    ],
    "chapters": [
      {
        "title": "Türev sıfırı adaydır, işaret değişimi karardır",
        "source": {
          "book": "AYT-mat",
          "pages": [
            81,
            82,
            83,
            84,
            85
          ]
        },
        "explanation": [
          "f’>0 olan bir aralıkta f artar, f’<0 olan aralıkta azalır. Türevin sıfır veya tanımsız olduğu tanımlı noktalar kritik adaylardır. +’dan−’ye geçiş yerel maksimum,−’den+’ya geçiş yerel minimum üretir. İşaret değişmiyorsa yatay teğet olsa da ekstremum olmayabilir. f(x)=x³ bunun basit örneğidir.",
          "Mutlak ekstremum bütün tanım alanı veya verilen aralıkta en büyük/en küçük değerdir. Kapalı aralıkta iç kritik noktaların yanında uç noktalar da hesaplanır. Türevlenmeyen ama tanımlı bir köşe de ekstremum olabilir. Yalnız f’=0 çözümlerini listelemek kapsamlı bir maksimum-minimum incelemesi değildir."
        ],
        "example": {
          "question": "f(x)=x³−3 x fonksiyonunun yerel ekstremumlarını bul.",
          "steps": [
            "f’(x)=3 x²−3=3(x−1)(x+1).",
            "İşaretler(−∞,−1)’de+,(−1,1)’de−,(1,∞)’de+.",
            "−1’de+→−: maksimum f(−1)=2; 1’de−→+: minimum f(1)=−2."
          ],
          "answer": "Yerel maksimum(−1,2), minimum(1,−2).",
          "check": "Fonksiyon kübik ve tüm gerçeklerde yukarı/aşağı sınırsız; bu yerel değerler mutlak değildir."
        },
        "misconceptions": [
          {
            "wrong": "f’=0 olan her noktada ekstremum vardır.",
            "correct": "İşaret değişimi veya uygun karşılaştırma gerekir.",
            "why": "x³ için f’(0)=0 ama fonksiyon artmaya devam eder."
          }
        ],
        "reasoningChecks": [
          {
            "question": "f’(x)=(x−2)² ise 2’de ekstremum var mı?",
            "answer": "Bu türev işaretine göre yoktur.",
            "why": "Türev iki yanda da pozitif; artanlık yönü değişmez."
          }
        ]
      },
      {
        "title": "Teğet doğrusu nokta ile eğimi birlikte kullanır",
        "source": {
          "book": "AYT-mat",
          "pages": [
            86
          ]
        },
        "explanation": [
          "Bir eğriye x=a’da teğetin eğimi f’(a), üzerindeki nokta(a, f(a))’dır. Doğru denklemi bu iki bilgiden kurulur. Normal doğru sorulursa sıfır olmayan eğimde diklikten−1/f’(a) elde edilir; yatay teğetin normali düşeydir ve eğim formuna sığmaz. Teğet ile eğri genel olarak yalnız yerel yakınlık taşır; başka noktalarda tekrar kesişebilir.",
          "f’grafiği verilirse f’nin artanlığını türevin yüksekliğinin işaretinden; f’nin değişiminin hızlanmasını türevin artışından okursun. f’grafiğinin x ekseniyle kesişmesi f’nin kökü demek değildir. Fonksiyon değeri ve türev değeri ayrı veri katmanlarıdır."
        ],
        "formulas": [
          {
            "expression": "y−f(a)=f’(a)(x−a)",
            "meaning": "Noktası ve eğimi bilinen teğet doğrusu.",
            "conditions": "f, a’da türevlenebilir."
          }
        ],
        "example": {
          "question": "f(x)=x²−x grafiğine x=2’de teğetin denklemi nedir?",
          "steps": [
            "Nokta(2, f(2))=(2,2).",
            "Türev 2 x−1; f’(2)=3.",
            "y−2=3(x−2); y=3 x−4."
          ],
          "answer": "y=3 x−4.",
          "check": "Teğet x=2’dey=2 verir; kesişim denklemi x²−4 x+4=(x−2)² çift köklüdür."
        },
        "misconceptions": [
          {
            "wrong": "Teğetin eğimi f(a)’dır.",
            "correct": "Eğim f’(a), nokta yüksekliği f(a)’dır.",
            "why": "İki nicelik farklı soruları cevaplar."
          }
        ],
        "reasoningChecks": [
          {
            "question": "Yatay teğetin eğimi kaçtır?",
            "answer": "0.",
            "why": "Yatay doğruda y değişmez."
          }
        ]
      },
      {
        "title": "Optimizasyonda değişkenin izinli aralığı modelin parçasıdır",
        "source": {
          "book": "AYT-mat",
          "pages": [
            87,
            88
          ]
        },
        "explanation": [
          "Bir maksimum-minimum probleminde önce değişkeni ve birimini tanımla; geometrik veya fiziksel koşullardan aralığı kur. Kısıt eşitliğiyle ikinci değişkeni yok edip hedefi tek değişkenli fonksiyona dönüştür. Türev kritik adayları verir; adayın izinli bölgede olması ve gerçekten istenen uç değeri sağlaması kontrol edilir.",
          "Dikdörtgen alanında kenarların pozitifliği, kutuda kesilen karenin boyutu, maliyet hesabında üretim sayısının tam sayı olması sonucu sınırlayabilir. Sürekli modelde bulunan optimum iki tam sayı arasında kalırsa uygun komşu tam sayılar karşılaştırılır. Matematiksel maksimumun fiziksel modelde ulaşılabilir olup olmadığı açıkça belirtilir."
        ],
        "example": {
          "question": "Çevresi 40 cmolan dikdörtgenin en büyük alanı kaçtır?",
          "steps": [
            "Kenarlar x ve 20−x; 0<x<20.",
            "A(x)=x(20−x); A’=20−2 x; kritik x=10.",
            "A’önce+, sonra−; alan maksimum 100 cm²."
          ],
          "answer": "100 cm²; kenarlar 10 ve 10.",
          "check": "A=100−(x−10)² biçimi aynı üst sınırı türevsiz doğrular."
        },
        "misconceptions": [
          {
            "wrong": "Türevden çıkan her aday fiziksel olarak kabul edilir.",
            "correct": "İzinli aralık ve birimler ayrıca sınanır.",
            "why": "Negatif bir uzunluk cebirsel aday olsa da dikdörtgen oluşturmaz."
          }
        ],
        "reasoningChecks": [
          {
            "question": "Kapalı[1,5] aralığında maksimum ararken yalnız türev kökleri yeterli mi?",
            "answer": "Hayır; 1 ve 5 uçları da kontrol edilir.",
            "why": "Mutlak ekstremum sınırda olabilir."
          }
        ]
      }
    ],
    "connections": [
      {
        "concept": "Parabol",
        "why": "İkinci dereceli hedeflerde kare tamamlama türev sonucunu bağımsız doğrular.",
        "lessonIds": [
          "mat-ayt-02"
        ]
      }
    ]
  },
  "mat-ayt-16": {
    "title": "Belirsiz integrali türevin ailesi olarak kur",
    "prerequisites": [
      {
        "concept": "Türev ve kuvvet kuralı",
        "why": "Bulunan ilkel fonksiyonu türevle denetlemek için."
      }
    ],
    "goals": [
      "İntegral sabitinin nedenini açıkla.",
      "Değişken değiştirmede bütün ifadeyi dönüştür."
    ],
    "chapters": [
      {
        "title": "Aynı türeve sahip fonksiyonlar sabitle ayrılır",
        "source": {
          "book": "AYT-mat",
          "pages": [
            89
          ]
        },
        "explanation": [
          "F’(x)=f(x) ise F, f’ninbir ilkel fonksiyonudur. Sabitin türevi 0 olduğundan F+C ailesinin bütün üyeleri aynı türeve sahiptir. Belirsiz integral tek bir sayısal alan değil bu ailedir. Başlangıç koşulu verilirse C belirlenir. İntegral sonucu türev alınarak denetlenebilir; bu işlem katsayı ve üs hatalarını doğrudan yakalar.",
          "Kuvvet kuralında üs bir artırılıp yeni üssüne bölünür; çünkü türevde yeni üs katsayı olarak öne gelecektir. n=−1 durumunda payda 0 olur; bu kural uygulanmaz. Kesirli veya negatif üslerde gerçek tanım aralığı korunur. Kaynak düzeyindeki kuvvet ve basit bileşke örneklerinde gerekçesiz ileri yöntem kullanmak gerekmez."
        ],
        "formulas": [
          {
            "expression": "∫xⁿdx=xⁿ⁺¹/(n+1)+C",
            "meaning": "Türevdeki kuvvet kuralının geri alınması.",
            "conditions": "n≠−1; gerçek fonksiyonun tanımlı olduğu aralıkta."
          }
        ],
        "example": {
          "question": "F’(x)=6 x²−4 x ve F(1)=5 ise F(x) nedir?",
          "steps": [
            "Terim terim integral: 2 x³−2 x²+C.",
            "F(1)=2−2+C=5; C=5.",
            "F(x)=2 x³−2 x²+5."
          ],
          "answer": "2 x³−2 x²+5.",
          "check": "Türevi 6 x²−4 x; 1 değeri 5; iki koşul da sağlanır."
        },
        "misconceptions": [
          {
            "wrong": "İntegralde+Cyalnız biçimsel süstür.",
            "correct": "Aynı türevli bütün fonksiyonları temsil eder.",
            "why": "Başlangıç bilgisi olmadan sabit tek bir değere indirgenemez."
          }
        ],
        "reasoningChecks": [
          {
            "question": "∫3 dxneden 3 x+C’dir?",
            "answer": "3 x’in türevi 3 olur.",
            "why": "Sabit integrali sabit kalmaz; girdi boyunca birikir."
          }
        ]
      },
      {
        "title": "Değişken değiştirme zincir kuralını geri çevirir",
        "source": {
          "book": "AYT-mat",
          "pages": [
            90,
            91
          ]
        },
        "explanation": [
          "∫g’(x)[g(x)]ⁿdx ifadesinde u=g(x) seçilirse du=g’(x) dxolur; integral u’nun kuvvetine dönüşür. İzin verilen dönüşüm yalnız parantezin adını değiştirmek değildir; diferansiyel ve geriye kalan bütün x’ler de dönüştürülmelidir. Eksik sabit katsayı varsa dengeleyerek ekleyip çıkarabilirsin.",
          "Bulunan sonucu yeniden x cinsinden yaz ve türev al. Zincir kuralında iç türev yeniden çıkmalı, böylece başlangıç integrandı tam olarak oluşmalıdır. Belirsiz integralde kaynak sayfalarının basit dönüşümlerini kullan; tanım aralığı ve sabit aileyi koru. Aynı aile farklı cebirsel biçimde yazılabilir; aradaki sabit+C’ye dahil olur."
        ],
        "example": {
          "question": "∫x(x²+1)⁴ dx hesapla.",
          "steps": [
            "u=x²+1; du=2 x dx; x dx=du/2.",
            "İntegral(1/2)∫u⁴ du=u⁵/10+C.",
            "Geri dön: (x²+1)⁵/10+C."
          ],
          "answer": "(x²+1)⁵/10+C.",
          "check": "Türev(1/10)·5(x²+1)⁴·2 x=x(x²+1)⁴."
        },
        "misconceptions": [
          {
            "wrong": "u=x²+1 yazınca dx değişmeden kalır.",
            "correct": "du=2 x dx ilişkisi de kullanılmalıdır.",
            "why": "Değişken değişiminde yerel ölçek iç türevi taşır."
          }
        ],
        "reasoningChecks": [
          {
            "question": "∫(2 x+3)⁵ dx sonucunda hangi sabit bölen gerekir?",
            "answer": "12.",
            "why": "Yeni kuvvet 6 ve iç türev 2 geri dengelemesi: (2 x+3)⁶/12+C."
          }
        ]
      }
    ],
    "connections": [
      {
        "concept": "Belirli integral",
        "why": "Bir ilkel fonksiyonun iki uç farkı sabiti yok eder.",
        "lessonIds": [
          "mat-ayt-17"
        ]
      }
    ]
  },
  "mat-ayt-17": {
    "title": "Belirli integralde işaretli birikim ile alanı ayır",
    "prerequisites": [
      {
        "concept": "İlkel fonksiyon ve grafik işareti",
        "why": "Uç farkını geometrik pozitif alanla karıştırmamak için."
      }
    ],
    "goals": [
      "Riemann yaklaşımını birikim olarak yorumla.",
      "Eksen altında ve eğriler arasında aralık böl."
    ],
    "chapters": [
      {
        "title": "Küçük dikdörtgenler toplamı ve uç farkı",
        "source": {
          "book": "AYT-mat",
          "pages": [
            92,
            93,
            94,
            95,
            96
          ]
        },
        "explanation": [
          "Bir aralık küçük parçalara ayrıldığında her parçada yaklaşık katkı f(xᵢ)Δxᵢolur. Parçalar inceldikçe uygun koşullarda toplam belirli integrale yaklaşır. İşaretli yükseklik kullanıldığı için eksen altındaki katkılar negatiftir. Alan yorumu yanında hızdan yer değiştirme gibi birikim modelleri de aynı yapıyı kullanır.",
          "F’=f ise belirli integral F(b)−F(a) olarak hesaplanır. Belirsiz integral sabiti iki uçta birbirini götürür. Sınırları ters çevirmek birikimin yönünü ters çevirir; sonucu eksi yapar. Bitişik aralıkların integralleri toplanabilir; aynı sınırda integral 0 olur. İşaret korunmadan yalnız boyut düşünmek bu temel özellikleri açıklayamaz."
        ],
        "formulas": [
          {
            "expression": "∫ₐᵇ f(x) dx=F(b)−F(a)",
            "meaning": "Birikimin ilkel fonksiyonun uç farkıyla hesabı.",
            "conditions": "f ilgili aralıkta sürekli; F’=f."
          }
        ],
        "example": {
          "question": "∫₀²(3 x²−2 x) dx hesapla.",
          "steps": [
            "İlkel fonksiyon F=x³−x².",
            "F(2)−F(0)=(8−4)−0.",
            "Sonuç 4."
          ],
          "answer": "4.",
          "check": "İntegrand 0 ile 2/3 arasında negatif olduğundan 4 net birikimdir; doğrudan tüm geometrik alan demek değildir."
        },
        "misconceptions": [
          {
            "wrong": "Belirli integralin sonucu her zaman pozitiftir.",
            "correct": "Eksen altındaki katkılar negatif olabilir.",
            "why": "İntegral yönlü birikimi ölçer; mutlak geometrik alan farklıdır."
          }
        ],
        "reasoningChecks": [
          {
            "question": "∫₃¹ f=−∫₁³ f neden?",
            "answer": "Yön ters çevrilir.",
            "why": "Her küçük aralık katkısının yönü de ters olur."
          }
        ]
      },
      {
        "title": "Geometrik alan için işaret değişen yerde böl",
        "source": {
          "book": "AYT-mat",
          "pages": [
            97
          ]
        },
        "explanation": [
          "Grafikle x ekseni arasındaki geometrik alan negatif olamaz; f pozitif bölgelerde f, negatif bölgelerde−f integrali alınır. Bu,∫|f|ifadesinin parçalı hesabıdır. Önce kökleri bulup hangi aralıkta hangi işaretin bulunduğunu belirle. Bütün integralin mutlak değerini almak genellikle yeterli değildir; pozitif ve negatif bölgeler birbirini daha önce silebilir.",
          "Özellikle simetrik aralıkta tek fonksiyonun integrali 0 olması alanın 0 olduğunu göstermez. Simetri hesaplamayı azaltabilir: fçiftse iki kat yarım aralık; |f|çiftse geometrik alan aynı biçimde hesaplanabilir. Sonucun birimi girdinin ve çıktının birimlerinin çarpımıdır; koordinatlar uzunluksa alan birimi kare olur."
        ],
        "formulas": [
          {
            "expression": "Alan=∫ₐᵇ|f(x)|dx",
            "meaning": "Grafik ile eksen arasındaki pozitif alan.",
            "conditions": "f sürekli; işaret değişimlerinde parçalı hesap yapılabilir."
          }
        ],
        "example": {
          "question": "y=x grafiği ile x ekseni arasında[−2,2] aralığındaki alan ve integral nedir?",
          "steps": [
            "İntegral[x²/2]₋₂²=2−2=0.",
            "Alaniki dik üçgendir; her birinin tabanı 2, yüksekliği 2, alanı 2.",
            "Toplam alan 4."
          ],
          "answer": "İntegral 0; geometrik alan 4.",
          "check": "Alanlar negatif ve pozitif katkılar olarak integralde silinir; geometride toplanır."
        },
        "misconceptions": [
          {
            "wrong": "Alan=|∫f|her zaman doğrudur.",
            "correct": "Önce her işaret bölgesinin alanı pozitif alınmalıdır.",
            "why": "Bu örnekte|0|=0 ama gerçek alan 4 tür."
          }
        ],
        "reasoningChecks": [
          {
            "question": "f<0 olan aralıkta alan hangi integral ile bulunur?",
            "answer": "−∫fveya∫(−f).",
            "why": "Negatif yükseklik pozitif uzaklığa çevrilir."
          }
        ]
      },
      {
        "title": "İki eğri arasında üst-alt sırası değişebilir",
        "source": {
          "book": "AYT-mat",
          "pages": [
            98
          ]
        },
        "explanation": [
          "İki fonksiyonun arasındaki alan dikey şeritlerde üstteki eksi alttaki yükseklikten oluşur. Kesişimler doğal sınırları ve olası sıra değişimlerini belirler. “Birinci verilen fonksiyon eksi ikinci” kuralı yoktur; hangi grafiğin üstte olduğu aralığa bağlıdır. Gerekirse aralık kesişim noktalarında bölünür.",
          "Kesişim denklemi f=g çözülünce bulunan her kök alan sınırı olmayabilir; istenen bölgeyi şekil veya işaret tablosuyla belirle. Sınırlı bölge oluşmuyorsa sonsuz aralık integrali gibi bu dersin dışında bir yöntem varsayılmaz. Modelde ek düşey sınırlar verilmişse onları da kullan. Son alan pozitif çıkmalı; negatif sonuç üst-alt sırasının ters olduğuna işaret eder."
        ],
        "example": {
          "question": "y=2 x ve y=x² eğr ileri arasındaki sınırlı alanı bul.",
          "steps": [
            "Kesişim x²=2 x⇒x=0,2.",
            "0<x<2 için 2 x>x²; üst doğru, alt parabol.",
            "A=∫₀²(2 x−x²) dx=[x²−x³/3]₀²=4−8/3=4/3."
          ],
          "answer": "4/3 birimkare.",
          "check": "x=1’de fark 1 pozitif; iki uçta 0; sonuç pozitif ve kabaca 2’lik dikdörtgenden küçük."
        },
        "misconceptions": [
          {
            "wrong": "Alan için her zaman parabol eksi doğru alınır.",
            "correct": "Her aralıkta üstte olan fonksiyon belirlenir.",
            "why": "Grafik türü üst-alt sırasını tek başına belirlemez."
          }
        ],
        "reasoningChecks": [
          {
            "question": "İki grafik aralık ortasında kesişip yer değiştirirse ne yapılır?",
            "answer": "İntegral o noktada bölünüp üst-alt yeniden seçilir.",
            "why": "Şerit yüksekliği her parçada negatif olmamalıdır."
          }
        ]
      }
    ],
    "connections": [
      {
        "concept": "Fizikte birikim",
        "why": "Hız-zaman grafiği altında işaretli alan yer değiştirmeyi; mutlak hız alanı yolu verir."
      }
    ]
  },
  "mat-tyt-geo-01": {
    "title": "Açıları çizimin görünüşünden değil koşullardan çıkar",
    "prerequisites": [
      {
        "concept": "Doğru, açı ve eşitlik",
        "why": "Komşuluk ile bütünlerliği ayırmak için."
      }
    ],
    "goals": [
      "Açı ilişkilerinde hangi doğruların doğrusal/paralel olduğunu belirt.",
      "Aynı şekle ait farklı açı ölçülerini tutarlı bir sistemle çöz."
    ],
    "chapters": [
      {
        "title": "Komşu olmak toplamın 180°olmasını garanti etmez",
        "source": {
          "book": "TYT-mat",
          "pages": [
            111,
            112
          ]
        },
        "explanation": [
          "Açı iki ışının ortak başlangıcından oluşur; çizilen yay ölçüyü değil hangi bölgenin kastedildiğini gösterir. Komşu açılar bir kenarı paylaşır; doğrusal açı oluşturuyorlarsa 180°toplanır. Tümler 90°, bütünler 180°toplamını belirtir; mutlaka komşu olmaları gerekmez. Bir noktadaki tam dönüş 360°’dir.",
          "Kesişen iki doğru üzerinde ters açıların eşitliği, her birinin aynı komşu açıyla 180°tamamlama sından çıkar. Eşitlik bir görsel tahmin değil doğrusal toplam sonucudur. Açıortay bir açıyı iki eşit ölçüye böler; ışının şeklin ortasında görünmesi tek başına açıortay olduğunu göstermez. Şekilde verilen işaret ve metin koşullarını önce kaydet."
        ],
        "example": {
          "question": "Kesişen iki doğru üzerindeki komşu iki açı 3 x+10°ve 2 x+20°ise küçük açı kaçtır?",
          "steps": [
            "Komşu ve doğrusal olduklarından toplam 180°.",
            "5 x+30=180; x=30.",
            "Açılar 100°ve 80°; küçük 80°."
          ],
          "answer": "80°.",
          "check": "100+80=180; ters taraftaki açılar da aynı iki değeri alır."
        },
        "misconceptions": [
          {
            "wrong": "Şekilde yan yana duran bütün açılar bütünlerdir.",
            "correct": "Dış kenarların zıt ışın olması gerekir.",
            "why": "Komşu iki açı 70°toplam da oluşturabilir."
          }
        ],
        "reasoningChecks": [
          {
            "question": "Bir açının tümleri 20°ise kendisi kaçtır?",
            "answer": "70°.",
            "why": "Tümler toplam 90°’dir."
          }
        ]
      },
      {
        "title": "Paralellik açı eşitliğinin gerekçesidir",
        "source": {
          "book": "TYT-mat",
          "pages": [
            113
          ]
        },
        "explanation": [
          "Paralel iki doğruyu kesen üçüncü doğru yöndeş ve iç ters açıları eşit yapar; aynı taraftaki iç açıları 180°tamamlar. Paralellik verilmemişse benzer görünüş bu özellikleri kullanmaya yetmez. Ters yönde, uygun iç ters veya yöndeş eşitlik gösterilirse iki doğrunun paralelliği kanıtlanabilir.",
          "Kırık çizgi sorularında uygun noktadan verilenlere paralel bir yardımcı doğru çizmek büyük açıyı bilinen parçalara ayırır. Yardımcı doğrunun neden paralel olduğunu açıkça kur; onu keyfi bir çizgiden özellik taşıyan doğruya bu koşul dönüştürür. Açıları hep küçük açı seçerek değil işaretli bölgenin iç/dış olmasına göre yorumla."
        ],
        "example": {
          "question": "Paralel iki doğrunun aynı taraftaki iç açıları 4 x−10°ve 2 x+40°ise xkaçtır?",
          "steps": [
            "Paralellik nedeniyle bu iki iç açı bütünlerdir.",
            "6 x+30=180; x=25.",
            "Açılar 90°ve 90°; kesen her ikisine diktir."
          ],
          "answer": "25.",
          "check": "4·25−10=90,2·25+40=90; toplam 180."
        },
        "misconceptions": [
          {
            "wrong": "İç açılar paraleller arasında kaldığı için daima eşittir.",
            "correct": "İç ters eşit, aynı taraftaki iç açılar bütünlerdir.",
            "why": "Konum türü hangi ilişkiyi kullanacağını belirler."
          }
        ],
        "reasoningChecks": [
          {
            "question": "Bir kesen paralellerden birine dikse diğerine de dik midir?",
            "answer": "Evet.",
            "why": "Yöndeş açılar aynı 90°ölçüsünü taşır."
          }
        ]
      }
    ],
    "connections": [
      {
        "concept": "Üçgen açıları",
        "why": "Paralel yardımcı doğru üçgenin iç açı toplamını gerekçelendirir.",
        "lessonIds": [
          "mat-tyt-geo-02"
        ]
      }
    ]
  },
  "mat-tyt-geo-02": {
    "title": "Üçgende açı ve kenarın karşılıklılığını kullan",
    "prerequisites": [
      {
        "concept": "Paralel doğru açıları",
        "why": "İç ve dış açı ilişkilerinin nedenini görmek için."
      }
    ],
    "goals": [
      "Açı toplamını dış açıyla ilişkilendir.",
      "Uzunluk adaylarını üçgen eşitsizliğiyle sınırla."
    ],
    "chapters": [
      {
        "title": "Dış açı komşu olmayan iki iç açının toplamıdır",
        "source": {
          "book": "TYT-mat",
          "pages": [
            114,
            115
          ]
        },
        "explanation": [
          "Üçgenin bir köşesinden karşı kenara paralel çizildiğinde iç ters açılar diğer iki köşeyi aynı doğru üzerine taşır; toplam 180°olur. Bir dış açı kendi iç açısıyla 180°tamamlandığı için öteki iki iç açının toplamına eşittir. Bu ispat yalnız görünüşe değil paralellik ilişkilerine dayanır.",
          "İkizkenarda eşit kenarların karşısındaki açılar eşittir; tersi de geçerlidir. Eşkenarda üç açı 60°olur. Tepe noktasından tabana çizilen doğru ikizkenarda aynı anda kenarortay, açıortay ve yükseklik olabilir; genel üçgende bu çakışma yoktur. Özel üçgen koşulu verilmeden özel çizgi özelliklerini kullanma."
        ],
        "example": {
          "question": "AB=AC olan ABC üçgeninde A’daki dış açı 140°ise iç açıları bul.",
          "steps": [
            "A’nın iç açısı 180−140=40°.",
            "B ve C taban açıları eşit; toplamları 140°.",
            "Her biri 70°."
          ],
          "answer": "A 40°, B 70°, C 70°.",
          "check": "Dış açı 140=B+C; üçgen toplamı 180."
        },
        "misconceptions": [
          {
            "wrong": "İkizkenarda tepe açısı taban açısına eşittir.",
            "correct": "Eşit kenarların karşısındaki iki taban açısı eşittir.",
            "why": "Hangi kenarların eşit olduğu eşit açıların konumunu belirler."
          }
        ],
        "reasoningChecks": [
          {
            "question": "Bir üçgende iki dış açı eşitse ne çıkar?",
            "answer": "Bunların komşu iç açıları ve karşı kenarları eşittir.",
            "why": "180’den eşit miktar çıkarma eşit iç açılar verir."
          }
        ]
      },
      {
        "title": "Üçgen eşitsizliği var olma koşuludur",
        "source": {
          "book": "TYT-mat",
          "pages": [
            116,
            117
          ]
        },
        "explanation": [
          "Bir kenar diğer iki kenarın toplamından küçük, farkının mutlak değerinden büyük olmalıdır. Eşitlik halinde üç nokta doğrusal olur ve gerçek bir üçgen alanı oluşmaz. Bu nedenle sınırlar sıkıdır. Bilinmeyen kenar tam sayıysa önce açık aralığı kur, sonra içerideki tam sayıları say.",
          "Büyük açının karşısında büyük kenar bulunur; aynı üçgen içinde yapılmış bir karşılaştırmadır. İki farklı üçgenin açı ve kenarlarını ek benzerlik veya eşlik olmadan aynı kuralla çapraz sıralayamazsın. Geniş açılılıkta en uzun kenarın karesi diğer ikisinin kare toplamından büyüktür; bu bilgi kosinüs teoreminin işaretinden de çıkar."
        ],
        "formulas": [
          {
            "expression": "|b−c|<a<b+c",
            "meaning": "Üç kenarın dejenere olmayan üçgen oluşturması.",
            "conditions": "a, b, c pozitif."
          }
        ],
        "example": {
          "question": "İki kenarı 7 ve 11 olan üçgende üçüncü kenar xçift tam sayıysa kaç farklı değer alır?",
          "steps": [
            "Fark ve toplam koşulu 4<x<18.",
            "Çift adaylar 6,8,10,12,14,16.",
            "Toplam 6 değer."
          ],
          "answer": "6.",
          "check": "x=4 ve 18 doğrusallık verir; dahil edilmez."
        },
        "misconceptions": [
          {
            "wrong": "İki kenarın toplamı üçüncüye eşitse de üçgen vardır.",
            "correct": "Eşitlikte şekil dejenere olur.",
            "why": "Üç nokta aynı doğrultuda kapanır; pozitif alan oluşmaz."
          }
        ],
        "reasoningChecks": [
          {
            "question": "Kenarları 4,7,9 olan üçgende en büyük açı hangi kenarın karşısındadır?",
            "answer": "9 kenarının karşısında.",
            "why": "Açı-kenar sıralaması aynı üçgende korunur."
          }
        ]
      }
    ],
    "connections": [
      {
        "concept": "Kosinüs teoremi",
        "why": "Kenar-açı sıralaması ve dar/geniş açı ayrımı nicel bağıntıya dönüşür.",
        "lessonIds": [
          "mat-ayt-07"
        ]
      }
    ]
  },
  "mat-tyt-geo-03": {
    "title": "Eşlik ve benzerlikte doğru karşılıkları kur",
    "prerequisites": [
      {
        "concept": "Üçgende açı ve kenar",
        "why": "Hangi köşenin hangi köşeye eşlendiğini belirlemek için."
      }
    ],
    "goals": [
      "Eşliği ölçekli benzerlikten ayır.",
      "Uzunluk, çevre ve alan ölçeklerini doğru kullan."
    ],
    "chapters": [
      {
        "title": "Eşlikte ölçek 1 dir; yalnız açı bilgisi yetmez",
        "source": {
          "book": "TYT-mat",
          "pages": [
            118,
            119
          ]
        },
        "explanation": [
          "Eş üçgenler döndürülüp yansıtılıp taşındığında çakışır; karşılıklı bütün kenar ve açılar aynıdır. KKK, KAK ve AKA verileri uygun eşlemeyle eşliği belirler. Üç açının eşitliği ise boyutu belirlemez; sadece benzerlik sağlar. Bir şeklin ters çevrilmesi eşliği bozmaz; dönüş yönü ile ölçü aynı kavram değildir.",
          "Kenar-açı-kenarda verilen açının iki bilinen kenarın arasında olması önemlidir. Arada olmayan açı bilgisi bazı durumlarda iki farklı üçgene izin verebilir. Eşlik adlandırmasında ABC≅DEF yazılırsa A↔D, B↔E, C↔Fsırası korunur. Sonuç çıkarmadan önce karşılıklı elemanları bu sıraya göre eşleştir."
        ],
        "example": {
          "question": "ABC≅DEF ve AB=5, BC=7, AC=8 ise DF ve EF kaçtır? Neden yalnız açı eşitlikleriyle aynı sonuç çıkmaz?",
          "steps": [
            "Adlandırmada A↔D, C↔F; AC↔DF olduğundan DF=8.",
            "B↔E, C↔F; BC↔EF olduğundan EF=7.",
            "Yalnız açılar eşit olsaydı bütün kenarlar ortak bir katsayıyla farklı olabilirdi."
          ],
          "answer": "DF 8, EF 7.",
          "check": "İki üçgenin çevresi aynı 20 olur; ölçek 1 dir."
        },
        "misconceptions": [
          {
            "wrong": "Açıları aynı iki üçgen mutlaka eştir.",
            "correct": "Açı eşitliği benzerlik verir; ölçeği ayrıca bilmek gerekir.",
            "why": "3-4-5 ve 6-8-10 aynı açılı ama farklı büyüklüktedir."
          }
        ],
        "reasoningChecks": [
          {
            "question": "Yansıyan üçgen eşliğini kaybeder mi?",
            "answer": "Hayır.",
            "why": "Yansıma bütün uzunluk ve açı ölçülerini korur."
          }
        ]
      },
      {
        "title": "Benzerlikte önce oranı tek yönde yaz",
        "source": {
          "book": "TYT-mat",
          "pages": [
            120,
            121,
            122,
            123
          ]
        },
        "explanation": [
          "Benzer üçgenlerde karşılıklı kenarlar ortak k oranındadır. Aynı soruda bir oranı büyük/küçük, diğerini küçük/büyük yazmak denklemi ters kurar. Köşeleri eşleştirip bütün oranları aynı sırayla kur. Paralel bir doğru üçgenin iki kenarını kestiğinde yöndeş açılar benzerliği sağlar; oranların nedeni çizginin şekle yakınlığı değil paralelliktir.",
          "Uzunluk ve çevre k, alan k², hacim benzer katılarda k³ ile değişir. Alanın kare ölçeği taban ve yüksekliğin birlikte k katına çıkmasından gelir. Alan oranından uzunluk oranına geçerken pozitif karekök alınır. Aynı yükseklikli ama benzer olmayan üçgenlerde alan oranı yalnız taban oranı olabilir; iki durumu karıştırma."
        ],
        "formulas": [
          {
            "expression": "L₂/L₁=k; A₂/A₁=k²",
            "meaning": "Benzer şekillerin doğrusal ve alansal ölçeği.",
            "conditions": "Karşılıklı uzunluklar; pozitif k."
          }
        ],
        "example": {
          "question": "ABC üçgeninde DE∥BC, D∈AB, E∈AC, AD/AB=2/3 ve BC=12 ise DE ve ADE alanının ABC’ye oranı nedir?",
          "steps": [
            "Paralellikten ADE~ABC.",
            "Uzunluk oranı 2/3; DE=(2/3)·12=8.",
            "Alan oranı(2/3)²=4/9."
          ],
          "answer": "DE 8; alan oranı 4/9.",
          "check": "Kesilen küçük üçgen daha küçük; alan payı 4/9, uzunluk payı 2/3 ten küçüktür."
        },
        "misconceptions": [
          {
            "wrong": "Benzerlik oranı 2/3 isealan oranı da 2/3.",
            "correct": "Alan oranı 4/9 dur.",
            "why": "Taban ve yükseklik ayrı ayrı 2/3 ile ölçeklenir."
          }
        ],
        "reasoningChecks": [
          {
            "question": "Alan oranı 25/49 ise kenar oranı nedir?",
            "answer": "5/7.",
            "why": "Pozitif uzunluk oranı alan oranının kareköküdür."
          }
        ]
      }
    ],
    "connections": [
      {
        "concept": "Alan ve katılar",
        "why": "Benzerliğin kare ve küp ölçeği alan-hacim sorularına taşınır.",
        "lessonIds": [
          "mat-tyt-geo-07",
          "mat-tyt-geo-11"
        ]
      }
    ]
  },
  "mat-tyt-geo-04": {
    "title": "Açıortayı uzaklık ve alan oranıyla kanıtla",
    "prerequisites": [
      {
        "concept": "Üçgende alan",
        "why": "Aynı yüksekliğe ait taban oranını kullanmak için."
      }
    ],
    "goals": [
      "Açıortay üzerindeki noktanın kenarlara uzaklığını yorumla.",
      "İç ve dış açıortayda bölme yönünü ayır."
    ],
    "chapters": [
      {
        "title": "Açıortay eşit dik uzaklıkların yeridir",
        "source": {
          "book": "TYT-mat",
          "pages": [
            124,
            125
          ]
        },
        "explanation": [
          "Bir açının iç açıortayı üzerindeki noktadan iki kenara indirilen dikmeler eşit uzunluktadır. Oluşan dik üçgenlerde ortak hipotenüs ve eşit açı bulunduğundan eşlik kurulabilir. Buradaki uzaklık noktanın köşeye uzaklığı değil kenar doğrularına dik uzaklığıdır. Kenar üzerindeki keyfi bir eğik parça aynı uzaklığı vermez.",
          "Tersi de uygun açı bölgesinde çalışır: iki kenara eşit uzaklıktaki iç nokta açıortay üzerindedir. İç ve dış açıortaylar komşu bütünler açıları yarıladıkları için birbirine diktir. Katlama iki kenarı üst üste getiriyorsa kat izi ilgili açıortaydır; yalnız bir noktanın başka noktaya katlanması ise genellikle kenar orta dikmesini üretir."
        ],
        "example": {
          "question": "Bir açının açıortayındaki P noktasının bir kenara dik uzaklığı 5 cm. Diğer kenara uzaklık ve bu uzaklıklardan oluşan iki dik üçgenin alan ilişkisi nedir?",
          "steps": [
            "İç açıortay özelliği ikinci dik uzaklığı da 5 yapar.",
            "İki dik üçgenin hipotenüsü köşe-Portak, köşedeki açılar eşittir.",
            "Üçgenler eş; alanları eşittir."
          ],
          "answer": "Diğer uzaklık 5 cm; alanlar eşit.",
          "check": "Eşlik yalnız uzaklıkları değil karşılıklı kenar ve alanları da eşler."
        },
        "misconceptions": [
          {
            "wrong": "Açıortay kenarı her zaman iki eşit parçaya böler.",
            "correct": "Açıortay açıyı iki eşit açıya böler; karşı kenarı yan kenar oranında böler.",
            "why": "Kenarortay ile açıortay yalnız özel koşullarda çakışır."
          }
        ],
        "reasoningChecks": [
          {
            "question": "İç ve dış açıortay arasındaki açı kaçtır?",
            "answer": "90°.",
            "why": "Bütünler iki açının yarılarının toplamı 90°olur."
          }
        ]
      },
      {
        "title": "İç açıortay teoremi iki alan oranının eşitlenmesidir",
        "source": {
          "book": "TYT-mat",
          "pages": [
            126,
            127
          ]
        },
        "explanation": [
          "AD iç açıortayı BC’yi D’de kessin. ABD ve ACD üçgenleri AD kenarını paylaşır ve A’daki eşit açıları görür; sinüslü alan oranı AB/AC olur. Aynı iki üçgen BC alt yapısında aynı yüksekliğe sahip olduğu için alan oranı BD/DC dir. İki oranı eşitleyince açıortay teoremi çıkar.",
          "Dış açıortay karşı kenarın uzantısını böler; parça toplamı yerine fark ilişkisi kullanılır. İç bölme formülünü aynı şekille dış bölmeye taşımak uzunlukları yanlış kurar. Yan kenarlar eşitse iç açıortay ortayı bulur; bu, genel teoremin özel durumudur. Dış açıortayın sonlu kesişimi eşit yan kenarlı özel durumda ayrıca değerlendirilir."
        ],
        "formulas": [
          {
            "expression": "BD/DC=AB/AC",
            "meaning": "A’daki iç açıortayın karşı kenarı bölme oranı.",
            "conditions": "D, BC içinde; AD iç açıortay."
          }
        ],
        "example": {
          "question": "AB=6, AC=9, BC=10 ve AD iç açıortaysa BD ve DC kaçtır?",
          "steps": [
            "BD/DC=6/9=2/3.",
            "BD=2 k, DC=3 k; 5 k=10; k=2.",
            "BD=4, DC=6."
          ],
          "answer": "4 ve 6.",
          "check": "Parçalar 10 toplar; 4/6=6/9."
        },
        "misconceptions": [
          {
            "wrong": "Açıortay uzunluğu yan kenarların ortalamasıdır.",
            "correct": "Teorem karşı kenardaki parçaların oranını verir.",
            "why": "Açıortayın kendi uzunluğu için ek bağıntı gerekir."
          }
        ],
        "reasoningChecks": [
          {
            "question": "AB=AC ise BD/DC kaçtır?",
            "answer": "1.",
            "why": "Eşit yan kenarlar karşı kenarı eşit böler."
          }
        ]
      }
    ],
    "connections": [
      {
        "concept": "Çemberin iç merkezi",
        "why": "Üç iç açıortayın kesişimi kenarlara eşit uzaklıktadır.",
        "lessonIds": [
          "mat-ayt-geo-04"
        ]
      }
    ]
  },
  "mat-tyt-geo-05": {
    "title": "Kenarortay, yükseklik ve orta dikmenin farklı görevleri",
    "prerequisites": [
      {
        "concept": "Eşlik ve alan",
        "why": "Özel doğruların neyi eşitlediğini ayırmak için."
      }
    ],
    "goals": [
      "Ağırlık merkezinde 2: 1 oranını kullan.",
      "Merkezlerin konumunu üçgen türüyle yorumla."
    ],
    "chapters": [
      {
        "title": "Kenarortay bir kenarı, alanı ve merkezi nasıl böler?",
        "source": {
          "book": "TYT-mat",
          "pages": [
            128
          ]
        },
        "explanation": [
          "Kenarortay köşeyi karşı kenarın orta noktasına bağlar. Aynı yüksekliği paylaşan iki yarım tabanlı üçgenin alanları eşit olur. Kenarortay açıları veya uzunlukları genel olarak eşitlemez. Üç kenarortay ağırlık merkezinde kesişir; bu nokta her birini köşeden itibaren 2: 1 oranında böler.",
          "Ağırlık merkezinin koordinatları üç köşe koordinatının ortalamasıdır. Orta nokta ile benzerlik kullanılarak da 2: 1 oranı kurulabilir. Üç kenarortay altı eş alanlı küçük üçgen oluşturur. Çizimde merkezin şeklin ortasında görünmesi ölçü kanıtı değildir; ilgili kenarların orta noktaları ve oranlar kullanılmalıdır."
        ],
        "formulas": [
          {
            "expression": "AG=2GM",
            "meaning": "Ağırlık merkezi G, kenarortay AM üzerinde.",
            "conditions": "M, BC ninorta noktası."
          }
        ],
        "example": {
          "question": "ABC üçgeninde AM kenarortayı 18 cm, G ağırlık merkezi. AG, GM ve ABG alanının ABC’ye oranı nedir?",
          "steps": [
            "AG=2·18/3=12, GM=6.",
            "ABM alanı ABC’nin 1/2’sidir.",
            "ABG ve ABM, A’dan AM doğrultusunda taban oranı AG/AM=2/3 ile ilişkilidir; ABG alanı(2/3)(1/2)=1/3."
          ],
          "answer": "AG 12, GM 6; alan oranı 1/3.",
          "check": "G, üç kenarın her birine göre üç eş büyük alan oluşturur; oranlar 1 toplar."
        },
        "misconceptions": [
          {
            "wrong": "Ağırlık merkezi kenarortayı yarıya böler.",
            "correct": "Köşeden uzaklığı toplamın 2/3’üdür.",
            "why": "Merkez kenarın orta noktası değil, üç kütlenin denge noktasıdır."
          }
        ],
        "reasoningChecks": [
          {
            "question": "Genel üçgende kenarortay aynı zamanda yükseklik midir?",
            "answer": "Hayır.",
            "why": "Bu çakışma ilgili köşede ikizkenarlık gibi ek koşul ister."
          }
        ]
      },
      {
        "title": "Yükseklik diklik, orta dikme eş uzaklık üretir",
        "source": {
          "book": "TYT-mat",
          "pages": [
            129,
            130,
            131
          ]
        },
        "explanation": [
          "Yükseklik köşeden karşı kenar doğrusuna dik iner. Geniş açılı üçgende bazı yükseklik ayakları kenar uzantısına düşer; yükseklik tanımı kenar parçasıyla sınırlı değildir. Üç yükseklik diklik merkezinde; üç kenar orta dikme çevrel merkezde kesişir. Bunlar genel olarak ağırlık merkeziyle aynı nokta değildir.",
          "Bir doğru parçasının orta dikmesi üzerindeki noktalar iki uca eşit uzaklıktadır. Çevrel merkez üç köşeye eşit uzaklıktan çember kurar. Dik üçgende hipotenüsün orta noktası bu merkezdir; hipotenüse ait kenarortay hipotenüsün yarısıdır. Eşkenar üçgende bütün merkezlerin çakışması özel simetri sonucudur; genel kurala dönüştürülmez."
        ],
        "example": {
          "question": "Dik kenarları 6 ve 8 olan dik üçgende hipotenüse ait kenarortay ve yükseklik kaçtır?",
          "steps": [
            "Hipotenüs √(36+64)=10.",
            "Hipotenüs kenarortayı 10/2=5.",
            "Alaniki şekilde: 6·8/2=10 h/2; h=48/10=24/5."
          ],
          "answer": "Kenarortay 5; yükseklik 24/5.",
          "check": "Farklı uzunluklar iki yardımcı doğrunun aynı olmadığını gösterir; her ikisi de hipotenüsten küçüktür."
        },
        "misconceptions": [
          {
            "wrong": "Üçgenin bütün merkezleri daima içeridedir.",
            "correct": "Geniş açılıda çevrel ve diklik merkezleri dışarıda olabilir.",
            "why": "Merkezlerin tanımları farklı geometrik yerler kullanır."
          }
        ],
        "reasoningChecks": [
          {
            "question": "Hipotenüs 10 ise çevrel yarıçap kaçtır?",
            "answer": "5.",
            "why": "Dik üçgende çevrel merkez hipotenüsün orta noktasıdır."
          }
        ]
      }
    ],
    "connections": [
      {
        "concept": "Analitik geometri",
        "why": "Orta nokta ve ağırlık merkezi koordinat ortalamalarıyla yeniden bulunabilir.",
        "lessonIds": [
          "mat-ayt-geo-01"
        ]
      }
    ]
  },
  "mat-tyt-geo-06": {
    "title": "Dik üçgende kare, izdüşüm ve oran bağıntıları",
    "prerequisites": [
      {
        "concept": "Benzerlik",
        "why": "Öklid bağıntılarının iki küçük üçgenden geldiğini görmek için."
      }
    ],
    "goals": [
      "Pisagor ile Öklid bağıntılarını doğru parçalara uygula.",
      "Dar açı oranlarını birim çemberle bağla."
    ],
    "chapters": [
      {
        "title": "Hipotenüse yükseklik üç benzer üçgen oluşturur",
        "source": {
          "book": "TYT-mat",
          "pages": [
            132,
            133
          ]
        },
        "explanation": [
          "Dik üçgende iki dik kenarın kare toplamı hipotenüs karesidir. Hipotenüse indirilen yükseklik küçük üçgenlerle büyük üçgen arasında açı-açı benzerliği kurar. Bu benzerlikten yükseklik karesi iki hipotenüs parçasının çarpımı; her dik kenarın karesi hipotenüsle o kenarın izdüşümünün çarpımı olur.",
          "Hangi kenarın hangi izdüşüme karşılık geldiğini aynı köşeye komşulukla belirle. p ve q hipotenüsün parçalarıysa hipotenüs p+q’dur. h²=pq formülünü herhangi bir üçgen yüksekliğine uygulayamazsın; dik açıdan hipotenüse inen yükseklik koşulu gereklidir. Sonuçlar Pisagor ve alan eşitliğiyle bağımsız denetlenebilir."
        ],
        "formulas": [
          {
            "expression": "h²=pq; a²=c·p; b²=c·q",
            "meaning": "Dik üçgende hipotenüs izdüşüm bağıntıları.",
            "conditions": "c=p+q; h, dik köşeden hipotenüse yükseklik; eşleme doğru yapılmalı."
          }
        ],
        "example": {
          "question": "Hipotenüs parçaları 4 ve 9 olan dik üçgende yükseklik ve dik kenarlar nedir?",
          "steps": [
            "c=13; h=√(4·9)=6.",
            "Bir dik kenar√(13·4)=2√13.",
            "Diğeri√(13·9)=3√13."
          ],
          "answer": "h 6; kenarlar 2√13 ve 3√13.",
          "check": "Kare toplamı 52+117=169=13²; alanh·c/2=39."
        },
        "misconceptions": [
          {
            "wrong": "Yükseklik, hipotenüs parçalarının toplamının yarısıdır.",
            "correct": "Yükseklik geometrik ortalama√(pq) dır.",
            "why": "Benzerlik çarpım bağıntısı verir; aritmetik ortalama değil."
          }
        ],
        "reasoningChecks": [
          {
            "question": "3-4-5 üçgeninde 5 hangi kenardır?",
            "answer": "Hipotenüs.",
            "why": "En büyük kenar dik açının karşısındadır."
          }
        ]
      },
      {
        "title": "Oran benzer üçgenlerde değişmez",
        "source": {
          "book": "TYT-mat",
          "pages": [
            134,
            135,
            136
          ]
        },
        "explanation": [
          "Bir dar açı sabit tutulduğunda bütün dik üçgenler benzerdir; karşı/hipotenüs, komşu/hipotenüs ve karşı/komşu oranları bu yüzden yalnız açıya bağlıdır. sin, cos, tan tanımları böyle doğar. Hipotenüs 1 seçilince ilk iki oran doğrudan çember noktasının koordinatları olur; oran fikri yönlü açılara genişler.",
          "30-60-90 üçgeni eşkenar üçgenin yüksekliğiyle; 45-45-90 üçgeni kare köşegeniyle kurulabilir. Özel oranlar bu şekillerden türetilir. Bir kenar komşu diye adlandırılırken hangi açıya göre konuşulduğunu belirt. Aynı kenar bir dar açıya karşı, ötekine komşudur; etiketlerin değişmesi oranları değiştirir."
        ],
        "formulas": [
          {
            "expression": "sinα=karşı/hipotenüs; cosα=komşu/hipotenüs",
            "meaning": "Dar açı için benzerlikle sabit oran.",
            "conditions": "αdar; üçgen dik."
          }
        ],
        "example": {
          "question": "Hipotenüsü 10, dar açısı 30°olan dik üçgende dik kenarlar ve alan nedir?",
          "steps": [
            "30°karşısı 10 sin 30°=5.",
            "Komşu 10 cos 30°=5√3.",
            "Alan(5·5√3)/2=25√3/2."
          ],
          "answer": "5,5√3; alan 25√3/2.",
          "check": "25+75=100; Pisagor hipotenüsün 10 olduğunu doğrular."
        },
        "misconceptions": [
          {
            "wrong": "30°karşısı hipotenüsün√3/2 katıdır.",
            "correct": "30°karşısı 1/2,60°karşısı√3/2 katıdır.",
            "why": "Daha büyük açı karşısındaki kenar daha büyüktür."
          }
        ],
        "reasoningChecks": [
          {
            "question": "45°dik üçgende dik kenarların oranı nedir?",
            "answer": "1.",
            "why": "Diğer dar açı da 45°olduğundan ikizkenardır."
          }
        ]
      }
    ],
    "connections": [
      {
        "concept": "AYT trigonometri",
        "why": "Birim çember dar açı tanımlarını bütün yönlü açılara genişletir.",
        "lessonIds": [
          "mat-ayt-06"
        ]
      }
    ]
  },
  "mat-tyt-geo-07": {
    "title": "Üçgen alanını taban, yükseklik ve oranla çöz",
    "prerequisites": [
      {
        "concept": "Üçgende yükseklik ve benzerlik",
        "why": "Alan oranında hangi uzunluğun sabit kaldığını belirlemek için."
      }
    ],
    "goals": [
      "Aynı yükseklik ve aynı tabanı ayrı kullan.",
      "Benzer alanın kare ölçeğini gerekçelendir."
    ],
    "chapters": [
      {
        "title": "Aynı yükseklikte alan oranı taban oranıdır",
        "source": {
          "book": "TYT-mat",
          "pages": [
            137
          ]
        },
        "explanation": [
          "A=taban·yükseklik/2 bağıntısı üçgenin bir paralelkenarın yarısı olarak kurulmasından gelir. Yükseklik seçilen tabana dik uzaklıktır; şekilde eğik görünen bir kenar otomatik yükseklik değildir. Geniş açılı üçgende dik uzaklık taban uzantısına inebilir; alan hesabı yine aynı kalır.",
          "Aynı doğru üzerindeki iki tabanı aynı köşeye bağlayan üçgenler aynı yüksekliği paylaşır. Alan oranı böylece tabanların oranına iner. Aynı tabanlı üçgenlerde ise oran yüksekliklerin oranıdır. Bu iki güçlü durum için benzerlik gerekmez. Açı biliniyorsa yükseklik yerine kenar·sin(açı) açılımı kullanılabilir; iki kenarın arasındaki açı şarttır."
        ],
        "formulas": [
          {
            "expression": "A=bh/2; A=ab sinC/2",
            "meaning": "Dik yükseklik veya iki kenar-aradaki açı ile alan.",
            "conditions": "h seçilen b tabanına dik; C, a ve b arasında."
          }
        ],
        "example": {
          "question": "ABC üçgeninde D, BC üzerinde; BD=3, DC=5 ve ABC’nin alanı 40 ise ABD alanı kaçtır?",
          "steps": [
            "İki üçgenin A’dan BC doğrusuna yüksekliği aynıdır.",
            "ABD/ABC=BD/BC=3/8.",
            "Alan 40·3/8=15."
          ],
          "answer": "15 birimkare.",
          "check": "ACD alanı 25; 15+25=40 ve 15/25=3/5."
        },
        "misconceptions": [
          {
            "wrong": "Bir kenarı ikiye bölmek her durumda alanı dörtte bire indirir.",
            "correct": "Yükseklik aynı kalıyorsa alan tabanla aynı oranda değişir.",
            "why": "Kare oran yalnız bütün uzunluklar benzerlikle ölçeklendiğinde çıkar."
          }
        ],
        "reasoningChecks": [
          {
            "question": "Taban sabitken yükseklik 3 katına çıkarsa alan ne olur?",
            "answer": "3 katına çıkar.",
            "why": "Alan formülünde yalnız h değişmiştir."
          }
        ]
      },
      {
        "title": "Benzer üçgende alan oranı iki uzunluğun çarpımıdır",
        "source": {
          "book": "TYT-mat",
          "pages": [
            138
          ]
        },
        "explanation": [
          "Benzerlikte taban da ona ait yükseklik de kkatına çıkar; alan k² katına çıkar. Bir çizgi kenarlara paralelse küçük üçgenin büyükle benzerliğini önce açı eşitliğiyle kur. Kenar üzerindeki parça oranı, köşeden toplam uzaklık oranı olmayabilir; AD/DB verildiğinde AD/AB’ye çevirmek gerekir.",
          "Bir şekli alanlara ayırırken aynı bölgeyi iki kez saymamak ve boşluk bırakmamak esastır. Kenarortay aynı yüksekliğin eşit tabanlarıyla iki eş alan oluşturur; açıortay ise yan kenar oranında alanlar oluşturur. Yardımcı doğrunun türü alan eşitliğinin gerekçesini değiştirir. Gerekçeyi bir kısa oran olarak yazmak işlemin denetlenmesini sağlar."
        ],
        "example": {
          "question": "DE∥BC, AD: DB=1: 2 ve ABC alanı 72 ise DECB dört geninin alanı nedir?",
          "steps": [
            "AD/AB=1/(1+2)=1/3.",
            "ADE~ABC; alan oranı 1/9; küçük alan 8.",
            "Kalan dörtgen 72−8=64."
          ],
          "answer": "64 birimkare.",
          "check": "Küçük üçgen 1/9, geri kalan 8/9; 72·8/9=64."
        },
        "misconceptions": [
          {
            "wrong": "AD: DB=1: 2 ise benzerlik oranı 1/2 dir.",
            "correct": "Benzerlik AD/AB=1/3 ile kurulur.",
            "why": "AB iki parçanın toplamıdır; karşılık toplam kenarladır."
          }
        ],
        "reasoningChecks": [
          {
            "question": "Alan oranı 9 ise uzunluk oranı da 9 mudur?",
            "answer": "Hayır; 3 tür.",
            "why": "Alan uzunluk oranının karesidir."
          }
        ]
      }
    ],
    "connections": [
      {
        "concept": "İntegralle alan",
        "why": "Pozitif şeritlerin toplanması alan düşüncesinin fonksiyonlara uzantısıdır.",
        "lessonIds": [
          "mat-ayt-17"
        ]
      }
    ]
  },
  "mat-tyt-geo-08": {
    "title": "Çokgen ve yamukta paralel tabanları kullan",
    "prerequisites": [
      {
        "concept": "Üçgen açı ve alan",
        "why": "Çokgeni üçgenlere bölerek bağıntıları türetmek için."
      }
    ],
    "goals": [
      "İç/dış açı toplamlarını gerekçelendir.",
      "Yamukta yüksekliği yan kenardan ayır."
    ],
    "chapters": [
      {
        "title": "Çokgeni üçgenlere bölmek açı toplamını verir",
        "source": {
          "book": "TYT-mat",
          "pages": [
            139,
            140
          ]
        },
        "explanation": [
          "Basit dışbükey n kenarlı çokgende bir köşeden çizilen köşegenler n−2 üçgen oluşturur; bu yüzden iç açı toplamı(n−2)180°’dir. Düzgün çokgende bütün iç açılar eşit olduğundan toplam n’ye bölünür. Dış açılar aynı yönde yürüyüşte bir tam turu tamamlar; toplam 360°olur. Düzgün olmayan çokgende her dış açı 360/nolmaz.",
          "Köşegen sayımında bir köşeden kendisine ve iki komşusuna köşegen çizilmez; n−3 seçenek kalır. Bütün köşelerden sayınca her köşegen iki kez sayıldığı için n(n−3)/2 elde edilir. Dörtgende iç açı toplamı 360°olması tek başına paralellik, eşit kenar veya dik köşegen vermez. Özel dörtgen özellikleri kendi koşullarıyla kullanılmalıdır."
        ],
        "formulas": [
          {
            "expression": "İç toplam=(n−2)180°;köşegen=n(n−3)/2",
            "meaning": "Üçgenlere ayırma ve çift saymayı düzeltme.",
            "conditions": "Basit dışbükey çokgen; n≥3."
          }
        ],
        "example": {
          "question": "Düzgün çokgenin bir dış açısı 24°ise kenar ve köşegen sayısı nedir?",
          "steps": [
            "Dış toplam 360°; n=360/24=15.",
            "Köşegen 15·12/2=90.",
            "İç açı 180−24=156°."
          ],
          "answer": "15 kenar,90 köşegen.",
          "check": "15·156=2340=(15−2)180."
        },
        "misconceptions": [
          {
            "wrong": "Her çokgende bütün iç açılar eşittir.",
            "correct": "Bu ek özellik düzgün çokgende bulunur.",
            "why": "Genel çokgende yalnız toplam sabittir."
          }
        ],
        "reasoningChecks": [
          {
            "question": "Altıgen bir köşeden kaç köşegen alır?",
            "answer": "3.",
            "why": "Kendisi ve iki komşusu dışarıda; 6−3=3."
          }
        ]
      },
      {
        "title": "Yamuğun alanı ortalama tabanla yüksekliğin çarpımıdır",
        "source": {
          "book": "TYT-mat",
          "pages": [
            141,
            142,
            143
          ]
        },
        "explanation": [
          "Yamuk iki paralel taban arasında sabit dik uzaklık taşır. İki eş yamuk ters çevrilip birleştirilince tabanı a+b, yüksekliği h olan paralelkenar oluşur; bir yamuğun alanı bunun yarısıdır. Yan kenarın eğik uzunluğu dik uzaklığın yerine geçmez. Orta taban(a+b)/2 uzunluğundadır; alanı orta taban·yükseklik olarak da okuyabilirsin.",
          "İkizkenar yamukta taban açıları eşit, köşegenler eşittir. Üst tabanın uçlarından dikme indirilince taban farkı iki eş parçaya ayrılır ve dik üçgen oluşur. Dik yamukta yalnız dik yan kenar yüksekliği doğrudan verir. Her yamukta köşegenlerin dik olduğunu veya birbirini ortaladığını varsayma."
        ],
        "formulas": [
          {
            "expression": "A=(a+b) h/2",
            "meaning": "İki paralel tabanın ortalama uzunluğuyla alan.",
            "conditions": "a, b paralel tabanlar; hdik uzaklık."
          }
        ],
        "example": {
          "question": "Tabanları 14 ve 6, yan kenarları 5 olan ikizkenar yamuğun alanı nedir?",
          "steps": [
            "Taban farkı 8; iki yandaki yatay parça 4 er.",
            "Dik üçgende h²+4²=5²; h=3.",
            "Alan(14+6)·3/2=30."
          ],
          "answer": "30 birimkare.",
          "check": "Orta taban 10; 10·3=30; yan kenar 5 doğrudan yükseklik alınmadı."
        },
        "misconceptions": [
          {
            "wrong": "İkizkenar yamuğun yüksekliği yan kenardır.",
            "correct": "Yan kenar ancak tabanlara dikse yükseklik olur.",
            "why": "Eğik kenarın taban yönünde de bileşeni vardır."
          }
        ],
        "reasoningChecks": [
          {
            "question": "Tabanlar 8 ve 12 iseorta taban kaçtır?",
            "answer": "10.",
            "why": "Paralel tabanların aritmetik ortalaması."
          }
        ]
      }
    ],
    "connections": [
      {
        "concept": "Paralelkenar",
        "why": "Yüksekliğin paralel doğrular arası uzaklık olması alan ilişkilerini birleştirir.",
        "lessonIds": [
          "mat-tyt-geo-09"
        ]
      }
    ]
  },
  "mat-tyt-geo-09": {
    "title": "Paralelkenarda taban, yükseklik ve köşegen",
    "prerequisites": [
      {
        "concept": "Paralel doğrular ve üçgen alanı",
        "why": "Eş alanların ve köşegen oranlarının gerekçesini görmek için."
      }
    ],
    "goals": [
      "Şeklin özel koşulunu ölçüden ayır.",
      "Eşkenar dörtgende dik köşegenlerle alan kur."
    ],
    "chapters": [
      {
        "title": "Karşılıklı paralellik eşlik ve ortalama üretir",
        "source": {
          "book": "TYT-mat",
          "pages": [
            144,
            145,
            146
          ]
        },
        "explanation": [
          "Paralelkenarda karşılıklı kenarlar paraleldir. Bir köşegen iki üçgen oluşturunca iç ters açılar ve ortak kenarla eşlik kurulur; karşılıklı kenar ve açıların eşitliği çıkar. Köşegenlerin kesiştiği küçük üçgenlerde de benzer/eş yapılar birbirini ortalama özelliğini verir. Bu, köşegenlerin eşit veya dik olduğu anlamına gelmez.",
          "Alan taban·yüksekliktir; yükseklik o tabana ait dik uzaklıktır. Eğik kenar verilirse aradaki açıyla h=b sinαkurulur. Köşegen paralelkenarı iki eş alana, iki köşegen dört eş alana ayırır. Aynı taban ve aynı paraleller arasındaki farklı eğiklikte paralelkenarlar aynı alana sahip olabilir; çevreleri aynı olmak zorunda değildir."
        ],
        "formulas": [
          {
            "expression": "A=ah=ab sinα",
            "meaning": "Paralelkenarın alanı.",
            "conditions": "α, komşu a ve b kenarları arasındaki açı."
          }
        ],
        "example": {
          "question": "Kenarları 8 ve 6, aradaki açısı 30°olan paralelkenarın alanı ve 8 tabanına ait yüksekliği nedir?",
          "steps": [
            "Yükseklik 6 sin 30°=3.",
            "Alan 8·3=24.",
            "Aynı sonuç 8·6·1/2=24."
          ],
          "answer": "Alan 24; yükseklik 3.",
          "check": "Yükseklik eğik 6 kenarından küçük; sin 30°ile tutarlı."
        },
        "misconceptions": [
          {
            "wrong": "Paralelkenarın alanı her zaman komşu kenarların çarpımıdır.",
            "correct": "Çarpımın yanına aradaki açının sinüsü gerekir.",
            "why": "Diklikte sin 90°=1 olduğu özel durumda kenar çarpımı yeterlidir."
          }
        ],
        "reasoningChecks": [
          {
            "question": "Köşegenler O’da kesişiyor ve AO=4 ise AC kaçtır?",
            "answer": "8.",
            "why": "Paralelkenar köşegenleri birbirini ortalar."
          }
        ]
      },
      {
        "title": "Eşkenar dörtgende ek koşul köşegenleri dikleştirir",
        "source": {
          "book": "TYT-mat",
          "pages": [
            147
          ]
        },
        "explanation": [
          "Dört kenarın eşit olduğu paralelkenar eşkenar dörtgendir. Köşegenler birbirini ortalar ve diktir; ayrıca köşe açılarını ortalar. Yarı köşegenler ile bir kenar dik üçgen oluşturur. Bu yüzden bir kenar, iki yarı köşegenin kare toplamının kareköküdür. Köşegenler genel olarak eşit değildir; eşit olmaları kare özel durumunu getirir.",
          "Dik köşegenlerle alan dört dik üçgenin toplamıdır ve d₁d₂/2 olur. Aynı formül dik köşegenli deltoidde de çalışır; ancak deltoidde iki köşegenin birbirini ortalaması zorunlu değildir. Ortak bir formül bütün şekil özelliklerinin ortak olduğunu göstermez."
        ],
        "formulas": [
          {
            "expression": "A=d₁d₂/2; a²=(d₁/2)²+(d₂/2)²",
            "meaning": "Eşkenar dörtgende dik ve ortalanan köşegenler.",
            "conditions": "d₁, d₂tam köşegen uzunlukları."
          }
        ],
        "example": {
          "question": "Köşegenleri 10 ve 24 olan eşkenar dörtgenin çevresi ve alanı nedir?",
          "steps": [
            "Yarı köşegenler 5 ve 12.",
            "Kenar√(25+144)=13; çevre 52.",
            "Alan 10·24/2=120."
          ],
          "answer": "Çevre 52; alan 120.",
          "check": "a·h=120 olduğundan h=120/13<13; uzunluk sınırı uygundur."
        },
        "misconceptions": [
          {
            "wrong": "Eşkenar dörtgenin köşegenleri eşittir.",
            "correct": "Genellikle dik ve birbirini ortalar; eşitlik kare koşuludur.",
            "why": "10 ve 24 köşe genli geçerli örnek eşitliği çürütür."
          }
        ],
        "reasoningChecks": [
          {
            "question": "Eşkenar dörtgenin bir açısı 90°ise hangi şekil olur?",
            "answer": "Kare.",
            "why": "Paralelkenarda diğer açılar da 90°; bütün kenarlar eşit kalır."
          }
        ]
      }
    ],
    "connections": [
      {
        "concept": "Dikdörtgen, kare, deltoid",
        "why": "Her özel dörtgenin hangi ek koşulla tanımlandığı ayrı tutulmalıdır.",
        "lessonIds": [
          "mat-tyt-geo-10"
        ]
      }
    ]
  },
  "mat-tyt-geo-10": {
    "title": "Dikdörtgen, kare ve deltoidin ortak ve ayrı özellikleri",
    "prerequisites": [
      {
        "concept": "Paralelkenar ve Pisagor",
        "why": "Dik köşeler ile dik köşegenleri ayırmak için."
      }
    ],
    "goals": [
      "Köşegen özelliklerini tanımdan çıkar.",
      "Kare ölçeği ile deltoid alanını doğru koşullarda kullan."
    ],
    "chapters": [
      {
        "title": "Dikdörtgenin eş köşegenleri dik olmak zorunda değildir",
        "source": {
          "book": "TYT-mat",
          "pages": [
            148,
            149,
            150
          ]
        },
        "explanation": [
          "Dikdörtgende komşu kenarlar diktir; bu nedenle köşegen, a ve b kenarlı dik üçgenin hipotenüsüdür. Karşılıklı köşegenler eşit ve paralelkenardan dolayı birbirini ortalar. Ortak orta noktadan köşelere uzaklık eşit olduğundan çevrel çember kurulabilir. Köşegenlerin dik olması ise kareye götüren ek koşuldur.",
          "Kare hem dikdörtgen hem eşkenar dörtgendir; bütün bu özellikleri taşır. Köşegen a√2, alan a² olur. Köşegen d verildiğinde a=d/√2 vealan d²/2 elde edilir. Bir kenarı yüzde p artırmak alanı aynı yüzde artırmaz; iki boyut aynı katsayıyla değiştiği için alan çarpanı k² dir."
        ],
        "formulas": [
          {
            "expression": "d²=a²+b²; Akare=d²/2",
            "meaning": "Dikdörtgende Pisagor, karede eş kenar özel durumu.",
            "conditions": "a, b pozitif; ikinci bağıntıda şekil kare."
          }
        ],
        "example": {
          "question": "Dikdörtgenin köşegeni 13, bir kenarı 5 ise alanı nedir? Aynı köşegenli karenin alanıyla karşılaştır.",
          "steps": [
            "Diğer kenar√(169−25)=12; alan 60.",
            "Aynı köşegenli karede alan 169/2=84,5.",
            "Kare bu iki şekilden daha büyük alanlıdır."
          ],
          "answer": "Dikdörtgen 60; kare 84,5.",
          "check": "5²+12²=13²; dikdörtgen boyutları doğrulanır."
        },
        "misconceptions": [
          {
            "wrong": "Aynı köşegene sahip bütün dikdörtgenlerin alanı aynıdır.",
            "correct": "Kenarların kare toplamı sabitken çarpımları farklı olabilir.",
            "why": "Alan a·b, köşegen ise a²+b² bilgisini taşır."
          }
        ],
        "reasoningChecks": [
          {
            "question": "Kare kenarı 2 katına çıkarsa köşegen ve alan kaç kat olur?",
            "answer": "Köşegen 2, alan 4 kat.",
            "why": "Uzunluk doğrusal, alan karesel ölçeklenir."
          }
        ]
      },
      {
        "title": "Deltoidde tek simetri köşegeni diğerini ortalar",
        "source": {
          "book": "TYT-mat",
          "pages": [
            151
          ]
        },
        "explanation": [
          "Deltoid iki komşu kenar çifti eşit olan dörtgendir. Eş kenar çiftlerinin birleştiği köşeleri birleştiren köşegen simetri eksenidir; diğer köşegeni dik ortalar ve bu iki köşedeki açıları böler. Diğer köşegenin simetri köşegenini de ortalaması genel olarak gerekmez. Dört eş kenar özel durumunda eşkenar dörtgen özellikleri eklenir.",
          "Dik köşegenlerin alanı d₁d₂/2 olarak bulunur; dört küçük dik üçgenin toplamı bunu verir. Çevreyi bulmak için eş kenarlardan ikisini bilmek gerekir; yalnız köşegen toplamı çevre değildir. Şekilde hangi köşegenin ortalandığını belirleyip doğru yarı uzunluklarla Pisagor uygula."
        ],
        "example": {
          "question": "Deltoidin simetri köşegeni, diğer köşegeni O’da dik ortalıyor. AO=3, OC=8, BD=8 ise çevre ve alan nedir?",
          "steps": [
            "BO=DO=4.",
            "AB=AD=√(3²+4²)=5; CB=CD=√(8²+4²)=4√5.",
            "Çevre 10+8√5; alan AC·BD/2=11·8/2=44."
          ],
          "answer": "Çevre 10+8√5; alan 44.",
          "check": "AO ve OC eşit verilmedi; ikisini ortalamak gerekmiyor. Dik üçgenlerle iki ayrı kenar bulundu."
        },
        "misconceptions": [
          {
            "wrong": "Deltoidde iki köşegen birbirini ortalar.",
            "correct": "Simetri köşegeni diğerini ortalar; tersi genel olarak doğru değildir.",
            "why": "AO=3, OC=8 olan örnek koşulları sağlar."
          }
        ],
        "reasoningChecks": [
          {
            "question": "Dik köşegenli bir dörtgende alan için hangi uzunluklar yeterlidir?",
            "answer": "İki tam köşegen.",
            "why": "Dört dik üçgenin toplamı d₁d₂/2 dir."
          }
        ]
      }
    ],
    "connections": [
      {
        "concept": "Çember",
        "why": "Eş uzaklık ve simetri dörtgenlerin çember ilişkilerini açıklar.",
        "lessonIds": [
          "mat-ayt-geo-03"
        ]
      }
    ]
  },
  "mat-tyt-geo-11": {
    "title": "Katılarda yüzey ile hacmi ve dik yüksekliği ayır",
    "prerequisites": [
      {
        "concept": "Düzlemsel alan ve Pisagor",
        "why": "Açınımdaki yüzleri ve uzaydaki köşegeni hesaplamak için."
      }
    ],
    "goals": [
      "Hacmi taban alanından kur.",
      "Açık/kapalı yüz koşullarını hesaba kat."
    ],
    "chapters": [
      {
        "title": "Prizma aynı kesit alanının yükseklik boyunca taşınmasıdır",
        "source": {
          "book": "TYT-mat",
          "pages": [
            152,
            153,
            154
          ]
        },
        "explanation": [
          "Dik prizmanın yan ayrıtları tabana diktir; hacim taban alanı·yükseklik olur. Yüzey alanı ise tabanlar ile yan yüzlerin ayrı toplamıdır. Hacim küp, yüzey kare birimlidir; aynı sayısal değerler eşit fiziksel büyüklük demek değildir. Üstü açık kapta eksik yüz ayrıca çıkarılır.",
          "Dikdörtgenler prizmasında uzay köşegeni önce bir taban köşegenini, sonra yükseklikle dik üçgeni kullanır; d²=a²+b²+c². Küpün yüz köşegeni a√2, uzay köşegeni a√3 olur. Bir açınımın altı karesi olması küpü garanti etmez; katlandığında yüzlerin çakışmaması gerekir. Çizimdeki gizli ayrıtlar uzunluk bağlantısını anlamak için izlenir."
        ],
        "formulas": [
          {
            "expression": "V=Taban alanı·h; d=√(a²+b²+c²)",
            "meaning": "Dik prizmanın hacmi ve dikdörtgenler prizmasının uzay köşegeni.",
            "conditions": "hiki paralel tabanın dik uzaklığı."
          }
        ],
        "example": {
          "question": "Kenarları 3,4,12 olan kapalı dikdörtgenler prizmasının hacmi, yüzeyi ve uzay köşegeni nedir?",
          "steps": [
            "Hacim 3·4·12=144.",
            "Yüzey 2(12+36+48)=192.",
            "Köşegen√(9+16+144)=13."
          ],
          "answer": "V 144, yüzey 192, d 13.",
          "check": "Taban köşegeni 5; 5-12-13 dik üçgeni uzay köşegenini doğrular."
        },
        "misconceptions": [
          {
            "wrong": "Uzay köşegeni ayrıtların toplamıdır.",
            "correct": "Dik uzaklıklar Pisagorla birleşir.",
            "why": "Kırık yol 3+4+12 ile düz uzay parçası farklı uzunluklardır."
          }
        ],
        "reasoningChecks": [
          {
            "question": "Küpün kenarı 3 katına çıkarsa hacim kaç kat?",
            "answer": "27.",
            "why": "Üç bağımsız uzunluk da 3 ile ölçeklenir."
          }
        ]
      },
      {
        "title": "Piramitte yan yüz yüksekliği hacimdeki yükseklik değildir",
        "source": {
          "book": "TYT-mat",
          "pages": [
            155,
            156
          ]
        },
        "explanation": [
          "Piramidin hacmi aynı taban ve aynı dik yüksekliğe sahip prizmanın üçte biridir. Düzgün piramitte tepe taban merkezinin üzerindedir; yan yüzün yüksekliği tepeyle bir taban kenarının orta noktasını bağlar. Bu eğik parça ile dik yükseklik ancak bir dik üçgen içinde ilişkilidir; hacimde doğrudan birbirinin yerine yazılmaz.",
          "Yüzey alanında yan üçgenlerin alanları toplanır; her üçgen kendi taban kenarı ve yan yüz yüksekliğiyle hesaplanır. Düzgün dört yüzlüde bütün yüzler eşkenardır ama yükseklik ayrıtla eşit değildir. Benzer piramitlerin hacimleri k³ oranındadır; aynı tabanlı iki piramitte yalnız yükseklik değişiyorsa oran doğrusal olur."
        ],
        "formulas": [
          {
            "expression": "V=Taban alanı·h/3",
            "meaning": "Piramidin hacmi.",
            "conditions": "h, tepeden taban düzlemine dik uzaklık."
          }
        ],
        "example": {
          "question": "Kare tabanı 6, yüksekliği 4 olan düzgün piramidin hacmi ve toplam yüzeyi nedir?",
          "steps": [
            "Taban 36; hacim 36·4/3=48.",
            "Yan yüz yüksekliği√(4²+3²)=5.",
            "Her yan yüz 6·5/2=15; dört yan 60; toplam yüzey 96."
          ],
          "answer": "Hacim 48; toplam yüzey 96.",
          "check": "Yan yüz yüksekliği 5, dik yükseklik 4 tür; iki ayrı hesapta doğru yerlerde kullanıldı."
        },
        "misconceptions": [
          {
            "wrong": "Yan ayrıt veya yan yüz yüksekliği hacimde h’dir.",
            "correct": "Hacimde yalnız tabana dik yükseklik kullanılır.",
            "why": "Eğik uzunluk tabana doğru dik ilerlemeyi aşar."
          }
        ],
        "reasoningChecks": [
          {
            "question": "Aynı taban ve yükseklikte prizma: piramit hacim oranı nedir?",
            "answer": "3: 1.",
            "why": "Piramidin hacmi ortak taban-yükseklik çarpımının üçte biridir."
          }
        ]
      }
    ],
    "connections": [
      {
        "concept": "Dönel katılar",
        "why": "Silindir ve koni aynı taban-yükseklik mantığının dairesel karşılıklarıdır.",
        "lessonIds": [
          "mat-ayt-geo-06"
        ]
      }
    ]
  },
  "mat-ayt-geo-01": {
    "title": "Analitik geometride koordinatı geometrik koşula çevir",
    "prerequisites": [
      {
        "concept": "Pisagor, oran ve doğrusal denklem",
        "why": "Uzaklığı ve eğimi aynı koordinat verisinden türetmek için."
      }
    ],
    "goals": [
      "İçten/dıştan bölmede yönü koru.",
      "Düşey doğruyu eğim formuna zorlamadan incele."
    ],
    "chapters": [
      {
        "title": "Uzaklık ve bölme koordinat farklarından oluşur",
        "source": {
          "book": "AYT-mat",
          "pages": [
            99,
            100,
            101,
            102
          ]
        },
        "explanation": [
          "İki noktanın yatay ve düşey koordinat farkları bir dik üçgenin dik kenarlarıdır; Pisagor uzaklık formülünü verir. Orta nokta iki koordinatın ayrı ortalamasıdır. Ağırlıklı bölmede noktanın hangi uca daha yakın olması gerektiğini düşünmek katsayıların yerini denetler; A’ya daha yakın nokta A’nın koordinatına daha fazla ağırlık verir.",
          "İçten bölme koordinatları iki uç arasında bulunur. Dıştan bölmede işaretler ve payda farkı değişir; formülü ezberlemek yerine P=A+t(B−A) parametrik temsilini kullanabilirsin.0<t<1 içer iyi, t<0 veya t>1 dışarıyı verir. Üçgenin ağırlık merkezi üç köşenin koordinat ortalamasıdır; bu, kenarortay daki 2: 1 oranıyla uyumludur."
        ],
        "formulas": [
          {
            "expression": "d(A,B)=√[(x₂−x₁)²+(y₂−y₁)²]",
            "meaning": "İki koordinat farkında Pisagor.",
            "conditions": "Kartezyen düzlem, aynı birim ölçeği."
          }
        ],
        "example": {
          "question": "A(−2,1), B(4,9) arasında AP: PB=1: 3 olan Pve AB uzunluğu nedir?",
          "steps": [
            "P, A’dan B’ye yolun 1/4’ün dedir.",
            "Fark(6,8); P=(−2,1)+(1/4)(6,8)=(−1/2,3).",
            "Uzaklık√(36+64)=10."
          ],
          "answer": "P(−1/2,3); AB 10.",
          "check": "AP 2,5; PB 7,5; oran 1: 3 ve Piki ucun arasında."
        },
        "misconceptions": [
          {
            "wrong": "Oran 1: 3 ise A’nın koordinatına 1, B’nin kine 3 ağırlık verilir.",
            "correct": "A’ya yakın nokta için A’ya daha çok ağırlık düşer.",
            "why": "İç bölmenin konumu katsayıların yerini denetler."
          }
        ],
        "reasoningChecks": [
          {
            "question": "A(0,0), B(6,0) orta noktası nedir?",
            "answer": "(3,0).",
            "why": "Her koordinatın aritmetik ortalaması alınır."
          }
        ]
      },
      {
        "title": "Eğim yön bilgisidir, düşey doğrunun eğimi tanımsızdır",
        "source": {
          "book": "AYT-mat",
          "pages": [
            103,
            104,
            105,
            106
          ]
        },
        "explanation": [
          "m=Δy/Δxoranı yatay birim ilerleyiş başına düşey değişimi verir. Δx=0 ise düşey doğru vardır; oran tanımlı değildir. Bir doğru için y−y₁=m(x−x₁) kullanılabilir; düşey doğru x=sabit olarak yazılır. İki farklı nokta doğruyu belirler; tek nokta tek başına belirlemez.",
          "Paralel ve düşey olmayan doğruların eğimleri eşittir. Dik ve iki eğimi de tanımlı doğrularda çarpım−1’dir; yatay-düşey diklikte bu çarpım formülü kullanılmaz. Genel Ax+By+C=0 gösteriminde B=0 düşey durumu doğrudan kapsar. Aynı doğruyu sabitle çarparak yazmak geometrik doğruyu değiştirmez."
        ],
        "formulas": [
          {
            "expression": "m=(y₂−y₁)/(x₂−x₁)",
            "meaning": "İki nokta arasındaki değişim oranı.",
            "conditions": "x₂≠x₁."
          }
        ],
        "example": {
          "question": "(1,2) ve(3,6) noktasından geçen doğru ve buna(0,1)’den çizilen dik doğru nedir?",
          "steps": [
            "Eğim(6−2)/(3−1)=2; ilk doğruy−2=2(x−1), y=2 x.",
            "Dik eğim−1/2.",
            "İkinci doğru y=−x/2+1."
          ],
          "answer": "y=2 x ve y=−x/2+1.",
          "check": "Eğim çarpımı 2·(−1/2)=−1; ikinci doğru(0,1)’den geçer."
        },
        "misconceptions": [
          {
            "wrong": "Her doğrunun sonlu bir eğimi vardır.",
            "correct": "Düşey doğrunun eğimi tanımsızdır.",
            "why": "Yatay koordinat farkı 0 olduğu için bölme yapılamaz."
          }
        ],
        "reasoningChecks": [
          {
            "question": "x=4 doğrusuna dik bir doğru hangi biçimdedir?",
            "answer": "y=sabit.",
            "why": "Düşey doğruya dik doğrular yataydır."
          }
        ]
      },
      {
        "title": "Noktadan doğruya uzaklık dik projeksiyondur",
        "source": {
          "book": "AYT-mat",
          "pages": [
            107,
            108
          ]
        },
        "explanation": [
          "Noktadan doğruya en kısa parça dik olandır. Ax+By+C=0 ifadesindeki(A, B), doğrunun normal yönünü belirler; paydadaki√(A²+B²) bu yönü birim uzunluğa getirir. Mutlak değer uzaklığın negatif olmamasını sağlar. Denklemi sabitle çarpmak payı ve paydayı aynı ölçekte değiştirdiği için uzaklık korunur.",
          "Paralel doğrular arası uzaklıkta A ve B katsayıları aynı hizaya getirilmelidir. İki denklemin yalnız sabitlerini çıkarıp farklı katsayıları görmezden gelmek aynı normal ölçeğini kullanmaz. Kesişen doğruların en kısa uzaklığı 0’dır; paralel doğru formülü kesişenlere uygulanmaz."
        ],
        "formulas": [
          {
            "expression": "d=|Ax₀+By₀+C|/√(A²+B²)",
            "meaning": "P(x₀, y₀) iledoğru arasındaki dik uzaklık.",
            "conditions": "A, Baynı anda 0 değil; denklem Ax+By+C=0."
          }
        ],
        "example": {
          "question": "P(1,2) noktasının 3 x+4 y−1=0 doğrusuna uzaklığı nedir?",
          "steps": [
            "Pay|3·1+4·2−1|=10.",
            "Normal uzunluğu√(9+16)=5.",
            "Uzaklık 10/5=2."
          ],
          "answer": "2.",
          "check": "Denklem 6 x+8 y−2 olarak yazılırsa 20/10 yine 2 olur."
        },
        "misconceptions": [
          {
            "wrong": "Doğru denklemini çarpmak uzaklığı değiştirir.",
            "correct": "Normalleştirme pay ve paydayı aynı ölçekle dengeler.",
            "why": "Geometrik doğru aynı olduğundan uzaklık da aynı kalmalıdır."
          }
        ],
        "reasoningChecks": [
          {
            "question": "Bir nokta doğru üstündeyse uzaklık formülünün payı nedir?",
            "answer": "0.",
            "why": "Nokta doğru denklemini sağlar."
          }
        ]
      }
    ],
    "connections": [
      {
        "concept": "Çember-doğru konumu",
        "why": "Merkezin doğruya uzaklığı yarıçapla karşılaştırılır.",
        "lessonIds": [
          "mat-ayt-geo-05"
        ]
      }
    ]
  },
  "mat-ayt-geo-02": {
    "title": "Öteleme, dönme ve simetriyi koordinatla takip et",
    "prerequisites": [
      {
        "concept": "Koordinat ve yönlü açı",
        "why": "Dönüşümün merkez ve yönünü açıkça belirtmek için."
      }
    ],
    "goals": [
      "Nokta ve şekil dönüşümünü aynı kuralla uygula.",
      "Dönüşüm sırasının neden önemli olduğunu göster."
    ],
    "chapters": [
      {
        "title": "Öteleme farkları korur, dönme merkeze uzaklığı korur",
        "source": {
          "book": "AYT-mat",
          "pages": [
            109,
            110,
            111
          ]
        },
        "explanation": [
          "Ötelemede her noktaya aynı(vₓ, vᵧ) vektörü eklenir; iki noktanın fark vektörü değişmez. Bu yüzden uzaklık, açı, paralellik ve alan korunur. Dönmede bir merkez ve yönlü açı gerekir; merkeze uzaklık değişmez. Orijin etrafında 90°pozitif dönme(x, y)→(−y, x),180°dönme(−x,−y),270°dönme(y,−x) verir.",
          "Merkez orijin değilse önce merkezi orijine taşı, standart dönmeyi uygula, sonra geri taşı. Sadece koordinatların işaretini değiştirmek merkezden bağımsız bir yöntem değildir. Şeklin tamamı için köşeleri dönüştürüp aynı kenar ilişkileriyle birleştir. Görsel yönü saat yönü ile karıştırmamak için pozitif yönü açıkça belirt."
        ],
        "example": {
          "question": "P(4,1) noktası M(1,1) etrafında saat yönünün tersine 90°döndürülüyor. Yeni nokta nedir?",
          "steps": [
            "Merkeze göre P−M=(3,0).",
            "90°pozitif dönme(3,0)→(0,3).",
            "Merkezi geri ekle: (1,1)+(0,3)=(1,4)."
          ],
          "answer": "(1,4).",
          "check": "Eski ve yeni noktanın M’ye uzaklığı 3; sağdan yukarıya dönüş pozitif 90°."
        },
        "misconceptions": [
          {
            "wrong": "Her merkez etrafındaki 90°dönmede doğrudan(−y, x) yazılır.",
            "correct": "Bu formül orijin merkezlidir; başka merkezde taşı-döndür-geri taşı gerekir.",
            "why": "Merkez sabit kalmalıdır; doğrudan formül M’yi de yerinden oynatır."
          }
        ],
        "reasoningChecks": [
          {
            "question": "Ötelemede alan değişir mi?",
            "answer": "Hayır.",
            "why": "Bütün farklar ve yükseklikler korunur."
          }
        ]
      },
      {
        "title": "Simetri ve bileşkede sırayı ayrı satırlarda uygula",
        "source": {
          "book": "AYT-mat",
          "pages": [
            112,
            113,
            114
          ]
        },
        "explanation": [
          "xekseni simetrisi(x,−y), yekseni simetrisi(−x, y), orijin simetrisi(−x,−y) üretir. y=x simetrisinde koordinatlar yer değiştirir. x=a ayna doğrusunda yatay koordinat 2 a−xolur; dik uzaklık iki tarafta eşittir. Bir nokta aynanın üzerindeyse sabit kalmalıdır; bu iyi bir denetimdir.",
          "İki dönüşümün bileşkesi genel olarak sıra değiştirmez. Ötelemeden sonra dönme ile dönmeden sonra öteleme farklı sonuçlar verebilir; vektör de dönmeye uğrar. Her aşamada yeni koordinatı bir sonraki kurala girdi yap. Bir işlemin tersiyle geri dönmek hata kontrolü sağlar; ötelemenin tersi karşıt vektör, dönmenin tersi karşıt açıdır."
        ],
        "example": {
          "question": "P(1,2) önce(3,0) ile öte len ip sonra yekseni simetrisi alınıyor. Sıra ters olursa ne değişir?",
          "steps": [
            "İlk sıra: (1,2)→(4,2)→(−4,2).",
            "Ters sıra: (1,2)→(−1,2)→(2,2).",
            "Sonuçlar farklıdır."
          ],
          "answer": "(−4,2) ve(2,2).",
          "check": "İki sonuç aynı y koordinatında ama farklı x konumunda; öteleme vektörü sıraya göre yansımış olur."
        },
        "misconceptions": [
          {
            "wrong": "Uzaklık koruyan bütün dönüşümler kendi aralarında yer değiştirir.",
            "correct": "Ölçü koruma bileşke sırasının önemsiz olduğu anlamına gelmez.",
            "why": "Örnek iki farklı son koordinat üretir."
          }
        ],
        "reasoningChecks": [
          {
            "question": "x=3 doğrusuna göre(5,1)’in simetriği nedir?",
            "answer": "(1,1).",
            "why": "Her iki nokta aynanın iki yanında 2 birim uzaktadır."
          }
        ]
      }
    ],
    "connections": [
      {
        "concept": "Fonksiyon grafiği dönüşümü",
        "why": "Girdi-çıktı dönüşümleri aynı koordinat taşıma mantığıyla okunur.",
        "lessonIds": [
          "mat-ayt-03"
        ]
      }
    ]
  },
  "mat-ayt-geo-03": {
    "title": "Çemberde yarıçap, kiriş, yay ve açıyı eşleştir",
    "prerequisites": [
      {
        "concept": "İkizkenar üçgen ve açı",
        "why": "Yarıçapların eşitliğinden çember açılarını türetmek için."
      }
    ],
    "goals": [
      "Açının gördüğü doğru yayı belirle.",
      "Merkez, çevre, iç ve dış açı formüllerini ayır."
    ],
    "chapters": [
      {
        "title": "Merkezden kirişe inen dikme neden kirişi ortalar?",
        "source": {
          "book": "AYT-mat",
          "pages": [
            115,
            116,
            117,
            118
          ]
        },
        "explanation": [
          "Çember üzerindeki bütün noktalar merkezden r uzaklıktadır; daire bunun iç bölgesiyle birlikte düşünülür. Bir kirişin uçlarına çizilen yarıçaplar ikizkenar üçgen oluşturur. Merkezden kirişe dikme bu ikizkenarda aynı zamanda kenarortaydır. Yarı kiriş, merkezin kirişe uzaklığı ve yarıçap bir dik üçgen kurar.",
          "Aynı çemberde merkeze yakın kiriş daha uzundur. Bu, Pisagor’da yarıçap sabitken dik uzaklık küçüldüğünde yarı kirişin büyümesinden çıkar. En büyük kiriş çaptır; merkez uzaklığı 0 olur. Bu karşılaştırma farklı yarıçaplı çemberler arasında doğrudan kullanılamaz. Eş kirişler eş merkez uzaklıklarına ve uygun küçük yaylara karşılık gelir."
        ],
        "formulas": [
          {
            "expression": "(kiriş/2)²+d²=r²",
            "meaning": "Merkezden kirişe dikme ile oluşan dik üçgen.",
            "conditions": "d, merkezin kiriş doğrusuna uzaklığı; 0≤d≤r."
          }
        ],
        "example": {
          "question": "Yarıçapı 13 olan çemberde merkeze 5 uzaklıkta kirişin boyu nedir?",
          "steps": [
            "Yarı kiriş√(13²−5²)=√144=12.",
            "Tam kiriş 24.",
            "Merkezden inen dikme iki eş 12 parça verir."
          ],
          "answer": "24.",
          "check": "Çap 26; kiriş 24<26; 5-12-13 dik üçgeni uygundur."
        },
        "misconceptions": [
          {
            "wrong": "Merkezden kirişe çizilen her doğru kirişi ortalar.",
            "correct": "Dik olan doğru kirişi ortalar.",
            "why": "Keyfi eğik bir kesen ortalama koşulunu taşımaz."
          }
        ],
        "reasoningChecks": [
          {
            "question": "Merkeze uzaklık 0 ise kiriş nedir?",
            "answer": "Çap.",
            "why": "Yarı kiriş r olur; tam uzunluk 2 r."
          }
        ]
      },
      {
        "title": "Çevre açı gördüğü yayın yarısıdır",
        "source": {
          "book": "AYT-mat",
          "pages": [
            119,
            120,
            121
          ]
        },
        "explanation": [
          "Merkez açı ölçüsü gördüğü yayın derece ölçüsüne eşittir. Çevre açı aynı yayı gördüğünde bunun yarısıdır; yarıçaplarla kurulan ikizkenar üçgenlerin dış açı ilişkileri bunu gerekçelendirir. Çapı gören çevre açı 90°olur. Aynı kirişi aynı taraftan gören çevre açılar eşit; karşı taraflardan görenler bütünlerdir.",
          "Teğet-kiriş açısı da gördüğü yayın yarısıdır. İçeride kesişen kirişlerin açısı karşılıklı iki yayın toplamının yarısı; dışarıda kesişen kesen/teğetlerin açısı büyük ve küçük yayın farkının yarısıdır. Toplam mı fark mı seçimi köşenin çemberin içinde veya dışında olmasına bağlıdır. Görülen yay, açının içindeki rastgele küçük yay değildir; ışınların çember kesişimlerini eşleştir."
        ],
        "example": {
          "question": "Bir çemberde çevre açı ABC, AC’nin B’yi içermeyen 120°yayını görüyor. Aynı yayı gören merkez açı ve ABC kaçtır?",
          "steps": [
            "Merkez açı yayın ölçüsü kadar 120°.",
            "Çevre açı 120/2=60°.",
            "Bdiğer yay üzerinde olmalıdır; görülen yayın seçimi tanımın parçasıdır."
          ],
          "answer": "Merkez 120°, çevre 60°.",
          "check": "Çevre açının iki katı aynı yayı gören merkez açıyı verir."
        },
        "misconceptions": [
          {
            "wrong": "Çevre açının gördüğü yay her zaman küçük yaydır.",
            "correct": "Köşeyi içermeyen uygun yay seçilir; büyük yay da olabilir.",
            "why": "Geniş çevre açının gördüğü yay 180°den büyüktür."
          }
        ],
        "reasoningChecks": [
          {
            "question": "Dış açı için yaylar 140°ve 60°ise açı kaçtır?",
            "answer": "40°.",
            "why": "Dışarıdaki köşede farkın yarısı: (140−60)/2."
          }
        ]
      }
    ],
    "connections": [
      {
        "concept": "Daire dilimi",
        "why": "Yayın derece payı çevre ve alan payına dönüştürülür.",
        "lessonIds": [
          "mat-ayt-geo-04"
        ]
      }
    ]
  },
  "mat-ayt-geo-04": {
    "title": "Teğet uzaklığı ve daire diliminde doğru sınırı say",
    "prerequisites": [
      {
        "concept": "Dik üçgen ve çember açıları",
        "why": "Teğetin yarıçapa dikliğini uzunluk hesabına taşımak için."
      }
    ],
    "goals": [
      "Dış noktadan teğet parçalarını eşle.",
      "Yay ile dilim çevresini ayır."
    ],
    "chapters": [
      {
        "title": "Teğet noktasında dik yarıçap bir Pisagor üçgeni kurar",
        "source": {
          "book": "AYT-mat",
          "pages": [
            122,
            123
          ]
        },
        "explanation": [
          "Çembere teğet doğru ile teğet noktasına çizilen yarıçap diktir. Dışarıdaki P noktasından iki teğet çizildiğinde merkez P doğrusu ortak hipotenüs, yarıçaplar eşit olduğundan iki dik üçgen eştir. Böylece iki teğet parçası eşit ve merkez P doğrusu teğetler arası açının açıortayı olur.",
          "Üçgende iç teğet çemberin merkezi iç açıortayların kesişimidir; kenarlara dik uzaklıkların eşitliği ortak yarıçapı verir. Alanı üç küçük üçgene ayırınca A=rs, syarı çevre, bağıntısı çıkar. Çevrel merkezin köşelere eşit uzaklığı ise farklı bir merkez koşuludur; iki merkezi genel olarak birleştirme."
        ],
        "formulas": [
          {
            "expression": "PT²=PO²−r²; A=r·s",
            "meaning": "Dış teğet uzunluğu ve üçgende iç yarıçap alan bağıntısı.",
            "conditions": "İlkinde P çember dışında, Tteğet noktası; ikincide s yarı çevre."
          }
        ],
        "example": {
          "question": "Merkezi O, yarıçapı 5 olan çemberin dışındaki P ile PO=13. Teğet uzunluğu ve iki teğetin toplamı nedir?",
          "steps": [
            "OT⊥PT; PO hipotenüstür.",
            "PT=√(169−25)=12.",
            "İki teğet eşit olduğundan toplam 24."
          ],
          "answer": "Bir teğet 12; toplam 24.",
          "check": "5-12-13 üçgeni; P’nin çember dışında olması 13>5 ile uygun."
        },
        "misconceptions": [
          {
            "wrong": "Dış noktadan teğet parçalarının toplamı çap kadardır.",
            "correct": "Her teğet√(PO²−r²) ile belirlenir.",
            "why": "Merkez uzaklığı değişince teğet uzunlukları da değişir."
          }
        ],
        "reasoningChecks": [
          {
            "question": "Üçgen alanı 30, yarı çevresi 10 iseiç yarıçap kaçtır?",
            "answer": "3.",
            "why": "A=rs; r=30/10."
          }
        ]
      },
      {
        "title": "Dilimde yay uzunluğu sınırın yalnız bir parçasıdır",
        "source": {
          "book": "AYT-mat",
          "pages": [
            124,
            125
          ]
        },
        "explanation": [
          "Merkez açının 360°’yepayı daire diliminin bütün daireye oranıdır. Yay uzunluğu bu payın 2π r ile; dilim alanıπ r² ile çarpımıdır. Radyan kullanılırsa l=rθve A=r²θ/2 elde edilir. Derece ile radyanı aynı bağıntıya dönüştürmeden yerleştirmek ölçek hatası yapar.",
          "Dilim çevresinde eğri yayla birlikte iki yarıçap da sınırdadır; çevre l+2 rdir. Bir daire parçası ise kiriş ve yayla sınırlıdır; dilimle aynı şekil değildir. Segment alanı uygun dilimden üçgen alanının çıkarılmasıyla bulunabilir. Halkada dış daireden iç daire alanı çıkarılır; yarıçap farkının karesini almak aynı sonucu vermez."
        ],
        "formulas": [
          {
            "expression": "l=(α/360)2π r; A=(α/360)π r²",
            "meaning": "Dereceli merkez açı için yay ve dilim alanı.",
            "conditions": "αilgili yayın merkez açısı; r>0."
          }
        ],
        "example": {
          "question": "r=6, merkez açı 120°olan dilimin alanı ve çevresi nedir?",
          "steps": [
            "Tamın 1/3’ü: alan(1/3)·36π=12π.",
            "Yay(1/3)·12π=4π.",
            "Çevre 4π+2·6=4π+12."
          ],
          "answer": "Alan 12π; çevre 4π+12.",
          "check": "Alan birimi kare, çevre birimi uzunluk; aynı formül değil."
        },
        "misconceptions": [
          {
            "wrong": "Dilim çevresi yalnız yay uzunluğudur.",
            "correct": "İki düz yarıçap da sınırın parçasıdır.",
            "why": "Şekli kapatan sınır yay ve iki yarıçaptan oluşur."
          }
        ],
        "reasoningChecks": [
          {
            "question": "Dış yarıçap 5, iç yarıçap 3 olan halkanın alanı nedir?",
            "answer": "16π.",
            "why": "π(25−9); π(5−3)² değildir."
          }
        ]
      }
    ],
    "connections": [
      {
        "concept": "Koninin açınımı",
        "why": "Daire diliminin yay uzunluğu koninin taban çevresine eşitlenir.",
        "lessonIds": [
          "mat-ayt-geo-06"
        ]
      }
    ]
  },
  "mat-ayt-geo-05": {
    "title": "Çember denklemini merkez ve yarıçapa dönüştür",
    "prerequisites": [
      {
        "concept": "Kare tamamlama ve uzaklık",
        "why": "Cebirsel katsayıların geometrik anlamını görmek için."
      }
    ],
    "goals": [
      "Genel denklemden gerçek çember koşulunu çıkar.",
      "Doğru konumunu merkez uzaklığıyla belirle."
    ],
    "chapters": [
      {
        "title": "Standart denklem bir uzaklık eşitliğidir",
        "source": {
          "book": "AYT-mat",
          "pages": [
            126,
            127,
            128,
            129
          ]
        },
        "explanation": [
          "Merkezi(a, b), yarıçapı r olan çemberde her(x, y) noktası merkeze r uzaklıktadır. Uzaklık formülünün karesi(x−a)²+(y−b)²=r² denklemini verir. Genel biçimde x² vey² katsayıları eşit, x y çarpım terimi yoktur. Kare tamamlama merkez ve yarıçapı görünür hale getirir.",
          "x²+y²+Dx+Ey+F=0 için merkez(−D/2,−E/2), r²=(D²+E²)/4−Folur. r²>0 gerçek çember, r²=0 tek nokta, r²<0 gerçek nokta yok durumu verir. Merkez koordinatlarının işaretini standart parantezden doğrudan okumak sık hatadır; parantezde x+3 varsa merkez−3 tür."
        ],
        "formulas": [
          {
            "expression": "(x−a)²+(y−b)²=r²",
            "meaning": "Merkeze uzaklığı sabit r olan noktalar.",
            "conditions": "r>0 gerçek çember; 0 ve negatif r² ayrı durum."
          }
        ],
        "example": {
          "question": "x²+y²−6 x+4 y−12=0 çember inin merkez ve yarıçapı nedir?",
          "steps": [
            "x²−6 x=(x−3)²−9; y²+4 y=(y+2)²−4.",
            "Denklem(x−3)²+(y+2)²=25.",
            "Merkez(3,−2), yarıçap 5."
          ],
          "answer": "(3,−2); r=5.",
          "check": "Merkezin sağındaki(8,−2) noktası başlangıç denkleminde 0 verir."
        },
        "misconceptions": [
          {
            "wrong": "Parantezde y+2 varsa merkez y koordinatı 2’dir.",
            "correct": "Merkez y=−2’dir.",
            "why": "Uzaklık farkı y−(−2)=y+2 olarak yazılır."
          }
        ],
        "reasoningChecks": [
          {
            "question": "x²+y²+1=0 gerçek çember midir?",
            "answer": "Hayır.",
            "why": "r²=−1; iki kare toplamı negatif olamaz."
          }
        ]
      },
      {
        "title": "Doğruyu merkeze göre karşılaştırmak kesişim sayısını verir",
        "source": {
          "book": "AYT-mat",
          "pages": [
            130
          ]
        },
        "explanation": [
          "Merkezin doğruya dik uzaklığı d, yarıçap r ise d<riki kesişim, d=rbir teğet, d>rhiç kesişim verir. Dik uzaklık en kısa mesafe olduğundan bu sınıflama geometrik olarak açıktır. Alternatif olarak doğru denklemini çemberde yerine koyup ikinci derece diskriminantı inceleyebilirsin; iki yöntem aynı durumu anlatır.",
          "Çemberin bir noktasındaki teğetin yönü o noktaya çizilen yarıçapa diktir. Merkezle nokta arasındaki eğim 0 ise teğet düşey, düşey yarıçapta teğet yatay olur. Bu özel durumlarda eğimlerin çarpımı−1 formülünü sayısal olarak zorlamak yerine doğrudan doğrultuları kullan."
        ],
        "example": {
          "question": "x²+y²=25 çemberi ile 3 x+4 y=c doğrusu hangi c değerlerinde teğettir?",
          "steps": [
            "Merkez(0,0); yarıçap 5.",
            "Merkez-doğru uzaklığı|c|/√(9+16)=|c|/5.",
            "Teğetlikte|c|/5=5; |c|=25."
          ],
          "answer": "c=25 veya c=−25.",
          "check": "Paralel iki teğet merkezden iki zıt yönde 5 uzaklıktadır."
        },
        "misconceptions": [
          {
            "wrong": "Teğetlik için c=yarıçap yazılır.",
            "correct": "Denklemin normal ölçeği√(A²+B²) ile bölünmelidir.",
            "why": "Aynı doğru farklı katsayılarla yazılabilir; c tek başına uzaklık değildir."
          }
        ],
        "reasoningChecks": [
          {
            "question": "Merkez-doğru uzaklığı 0 ise r>0 çemberde kaç kesişim vardır?",
            "answer": "2.",
            "why": "Doğru merkezden geçer; çapın iki ucunu keser."
          }
        ]
      }
    ],
    "connections": [
      {
        "concept": "Analitik doğru",
        "why": "Normalize uzaklık formülü geometrik konumu doğrudan belirler.",
        "lessonIds": [
          "mat-ayt-geo-01"
        ]
      }
    ]
  },
  "mat-ayt-geo-06": {
    "title": "Silindir, koni ve kürede ölçü koşullarını kur",
    "prerequisites": [
      {
        "concept": "Daire alanı, Pisagor ve benzerlik",
        "why": "Açınımı, kesiti ve dik yüksekliği ayrı hesaplamak için."
      }
    ],
    "goals": [
      "Yüzey ve hacimde doğru uzunluğu seç.",
      "Açınım yayını taban çevresiyle eşitle."
    ],
    "chapters": [
      {
        "title": "Silindirin açınımında dikdörtgenin genişliği çevredir",
        "source": {
          "book": "AYT-mat",
          "pages": [
            131,
            132,
            133,
            134
          ]
        },
        "explanation": [
          "Dik dairesel silindirin iki paralel daire tabanı vardır. Yanal yüz kesilip açılınca bir kenarı h, diğeri 2π r olan dikdörtgen oluşur; bu yüzden yanal alan 2π rh'dir. Kapalı silindire iki taban, üstü açık kaba bir taban eklenir. Perspektifte taban elips görünse de gerçek daire ölçülerini kullanırsın.",
          "Hacim taban alanı·yükseklik,π r² h'dir. Eksen kesiti 2 r ve h kenarlı dikdörtgen; eksenden geçmeyen tabana dik kesitin genişliği ise daha kısa kiriştir. “Kesit dikdörtgen” demek genişliğin mutlaka çap olduğu anlamına gelmez. Benzer ölçek k’da yüzey k², hacimk³ değişir; yalnız h değişirse ikisi de ilgili yanal/hacim katkısında doğrusal davranır."
        ],
        "formulas": [
          {
            "expression": "V=π r²h; Ayan=2π rh",
            "meaning": "Taban alanı boyunca hacim ve açınımdan yanal alan.",
            "conditions": "Dik dairesel silindir; r, h>0."
          }
        ],
        "example": {
          "question": "r=3, h=8 olan üstü açık silindirik kabın iç yüzey alanı ve hacmi nedir?",
          "steps": [
            "Yanal yüz 2π·3·8=48π.",
            "Yalnız bir taban 9π eklenir; toplam 57π.",
            "Hacim π·9·8=72π."
          ],
          "answer": "Yüzey 57π; hacim 72π.",
          "check": "Kapalı olsaydı 9π daha eklenip 66π olurdu; eksik üst taban koşulu sonucu değiştirir."
        },
        "misconceptions": [
          {
            "wrong": "Silindir açınımındaki dikdörtgenin genişliği 2 rdir.",
            "correct": "Genişlik taban çevresi 2π rdir.",
            "why": "Yanal yüz bir tam çevre boyunca sarılır."
          }
        ],
        "reasoningChecks": [
          {
            "question": "Eksen kesitinin alanı nedir?",
            "answer": "2 r·h.",
            "why": "Eksen üzerinden tabana dik kesit çap-yükseklik dikdörtgenidir."
          }
        ]
      },
      {
        "title": "Konide dik yükseklik, ana doğru ve sektör yarıçapı farklıdır",
        "source": {
          "book": "AYT-mat",
          "pages": [
            135,
            136
          ]
        },
        "explanation": [
          "Dik dairesel konide h tepe-taban düzlemi dik uzaklığı, l tepe-çember üzerindeki nokta uzunluğudur. Merkez, tepe ve çember noktası dik üçgeninde l²=h²+r² olur. Yanal açınım yarıçapı l olan daire dilimidir; dilimin yay uzunluğu taban çevresi 2π r'ye eşittir. Dolayısıyla sektörün açı payı r/l olur.",
          "Yanal alan π rl, kapalı toplam alan π rl+π r²; hacim π r² h/3 tür. Alanda l, hacimde h kullanılması yapısal bir farktır. Aynı r ve h ile silindir-koni hacim oranı 3: 1 dir; aynı ana doğru karşılaştırması bunu garanti etmez. Benzer konilerde küçük kesitin yarıçapı ile yüksekliği aynı oranda küçülür; hacim oranı küpleşir."
        ],
        "formulas": [
          {
            "expression": "l²=h²+r²; Ayan=π rl; V=π r²h/3",
            "meaning": "Koninin dik kesiti, açınımı ve hacmi.",
            "conditions": "Dik dairesel koni; r, h>0."
          }
        ],
        "example": {
          "question": "r=6, h=8 olan koninin ana doğrusu, yanal alanı, hacmi ve açınım açısı nedir?",
          "steps": [
            "l=√(36+64)=10.",
            "Yanal alan π·6·10=60π; hacim π·36·8/3=96π.",
            "Açınımdaα/360=r/l=6/10; α=216°."
          ],
          "answer": "l 10; yanal 60π; hacim 96π; açı 216°.",
          "check": "Sektör yayı(216/360)·2π·10=12π; taban çevresi 2π·6=12π."
        },
        "misconceptions": [
          {
            "wrong": "Koninin açınımındaki sektör yarıçapı taban yarıçapıdır.",
            "correct": "Sektör yarıçapı ana doğru l’dir.",
            "why": "Tepeye uzaklık yanal yüz boyunca l olarak sabittir."
          }
        ],
        "reasoningChecks": [
          {
            "question": "Aynı taban ve hile silindir hacmi 96π ise koni hacmi kaçtır?",
            "answer": "32π.",
            "why": "Koni ortak taban-yükseklikli silindirin üçte biridir."
          }
        ]
      },
      {
        "title": "Kürede kesit yarıçapı büyük çemberden küçük olabilir",
        "source": {
          "book": "AYT-mat",
          "pages": [
            137
          ]
        },
        "explanation": [
          "Küre yüzeyi merkezden rsabit uzaklıktaki noktalardır; katı küre iç bölgeyi de içerir. Merkezden geçen kesit büyük dairedir. Merkezden d uzaklıktaki düzlem kesitinin yarıçapı ρ için ρ²+d²=r² olur; uzaklık arttıkça kesit küçülür. Yüzeyin düzlemle kesişimi çember, katı bölgenin kesiti dairedir.",
          "Kürenin alanı 4π r², hacmi 4π r³/3 tür. Yarım kürede eğri yüz alanı 2π r² olur; kapalı yüzey istenirse taban dairesiπ r² eklenir. Sayısal alan ve hacmin aynı çıkması birimlerini eşitlemez. Çap verildiyse önce yarıçapa dönüştür; r² ve r³ nedeniyle sayısal etki büyür. Bütün uzunluklar k katına çıkarsa alan k², hacim k³ olur."
        ],
        "formulas": [
          {
            "expression": "Aküre=4π r²; Vküre=4π r³/3; ρ²+d²=r²",
            "meaning": "Yüzey, hacim ve düzlem kesiti.",
            "conditions": "r>0; kesit için 0≤d≤r."
          }
        ],
        "example": {
          "question": "Yarıçapı 5 olan kürede merkeze 3 uzaklıktaki kesitin alanı ve kürenin hacmi nedir?",
          "steps": [
            "ρ²=25−9=16; ρ=4.",
            "Kesit dairesinin alanı 16π.",
            "Küre hacmi 4π·125/3=500π/3."
          ],
          "answer": "Kesit 16π; küre hacmi 500π/3.",
          "check": "Büyük kesit 25π; merkezden uzak kesit 16π daha küçüktür."
        },
        "misconceptions": [
          {
            "wrong": "Kürenin her düzlem kesiti aynı çapı verir.",
            "correct": "Yalnız merkezden geçen kesitlerin çapı 2 rdir.",
            "why": "Kesit yarıçapı merkez-düzlem uzaklığıyla değişir."
          }
        ],
        "reasoningChecks": [
          {
            "question": "Yarıçapı 2 olan kapalı yarım kürenin toplam yüzeyi nedir?",
            "answer": "12π.",
            "why": "Eğri yüz 8π ve taban 4π toplanır."
          }
        ]
      }
    ],
    "connections": [
      {
        "concept": "Benzerlik ölçeği",
        "why": "Katılarda alan-hacim etkisi aynı k²/k³ ilkesiyle denetlenir.",
        "lessonIds": [
          "mat-tyt-geo-03",
          "mat-tyt-geo-11"
        ]
      }
    ]
  }
});
