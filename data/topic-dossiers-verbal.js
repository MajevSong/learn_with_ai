/* Original TYT verbal teaching dossiers; source-linked cases and reasoning. */
window.TOPIC_DOSSIERS = window.TOPIC_DOSSIERS || {};
Object.assign(window.TOPIC_DOSSIERS, {
  "tur-01": {
    "title": "Sözcükte anlam",
    "prerequisites": [
      {
        "concept": "Bağlamın sözcüğe verdiği görev",
        "why": "Anlam türü her kullanımda bağlam yeniden okunarak bulunur."
      }
    ],
    "goals": [
      "Bağlamın sözcüğe verdiği görev: Anlam türü her kullanımda bağlam yeniden okunarak bulunur.",
      "Terim ve deyimlerde bütün anlam: Aynı ses dizisi günlük dilde genel, belirli alanda terim görevinde kullanılabilir."
    ],
    "chapters": [
      {
        "title": "Bağlamın sözcüğe verdiği görev",
        "source": {
          "book": "TYT-tur",
          "pages": [
            9,
            10,
            11,
            12,
            13,
            14
          ]
        },
        "explanation": [
          "Bir sözcüğün sözlükte birkaç anlamı bulunması, cümlede hepsini aynı anda taşıdığı anlamına gelmez. Önce sözcüğün yöneldiği nesneyi ve yaptığı işi belirle. Somut bir eylem duygu veya düşünceye taşındığında mecaz oluşabilir; fakat nesnenin biçim benzerliğiyle adlandırılan yerleşik yan anlamlarını otomatik olarak mecaz sayma. Terim olma da sözcüğün kendisine sürekli yapışık bir etiket değildir; kullanıldığı bilgi alanıyla kurduğu özel ilişkiye bağlıdır.",
          "Gerçek ve mecaz ayrımını bir yerine koyma deneyiyle sınayabilirsin: sözcüğü bağlamdaki açıklamasıyla değiştirince cümle anlamını koruyor mu? ‘İçimde bir ışık doğdu.’ cümlesinde ışık yerine umut yazmak değerlendirmeyi açar; odada yanan lamba anlamı ise bağlamı bozabilir. Ancak sözcüğün somut bir nesneye ait olması bütün kullanımını gerçek yapmaz: ‘Soğuk bir bakış’ fiziksel sıcaklık ölçümü değildir. Terimlerde alan sınırı ayrıca önemlidir. ‘Açı’ matematikte iki ışınla kurulan kavramken ‘Olayı farklı açıdan gördü.’ ifadesinde bakış yönünü anlatır. Soru kökünün anlam türünü mü, anlamı en yakın karşılığı mı istediğini de ayır; tür etiketi ile sözcüğün bu cümledeki karşılığı aynı işlem değildir.",
          "Gerçek anlam, sözcüğün temel anlamını ve ona bağlı yan anlamları kapsar. “Keskin bıçak” gerçek; “keskin bir eleştiri” mecaz kullanımdır. Bir sözcüğün bütün cümlelerde aynı anlam türünü taşıdığını düşünme."
        ],
        "example": {
          "question": "“Keskin bıçak kumaşı kesti.” ve “Keskin eleştirisi bizi düşündürdü.” cümlelerinde keskin nasıl değişti?",
          "steps": [
            "İlk cümlede keskinlik bıçağın fiziksel kesme özelliğidir.",
            "İkinci cümlede eleştiri fiziksel nesne kesmez; sertlik ve etkililik anlatılır.",
            "Somut özellik değerlendirmeye taşındığı için ikinci kullanım mecazdır."
          ],
          "answer": "İlk kullanım gerçek, ikinci kullanım mecazdır.",
          "check": "Anlam türü her kullanımda bağlam yeniden okunarak bulunur."
        },
        "misconceptions": [
          {
            "wrong": "Bir sözcük bir kez mecazsa her cümlede mecazdır.",
            "correct": "Anlam türü her kullanımda bağlam yeniden okunarak bulunur.",
            "why": "İlk cümlede keskinlik bıçağın fiziksel kesme özelliğidir. İkinci cümlede eleştiri fiziksel nesne kesmez; sertlik ve etkililik anlatılır. Somut özellik değerlendirmeye taşındığı için ikinci kullanım mecazdır."
          }
        ],
        "reasoningChecks": [
          {
            "question": "“Üçgenin kökünü hesapladık.” sözü anlamlı bir matematik terim kullanımı kurar mı?",
            "answer": "Hayır; kök, belirli matematik işlemlerine aittir, her matematik nesnesine rastgele bağlanamaz.",
            "why": "Anlam türü her kullanımda bağlam yeniden okunarak bulunur."
          }
        ]
      },
      {
        "title": "Terim ve deyimlerde bütün anlam",
        "source": {
          "book": "TYT-tur",
          "pages": [
            9,
            10,
            11,
            12,
            13,
            14
          ]
        },
        "explanation": [
          "Terim bir bilim, sanat veya meslek alanında sınırları belirlenmiş kavramı karşılar. Birden çok sözcüklü deyimde ise parçalardan hareketle kelimesi kelimesine çıkarım yanıltabilir: kulağına küpe olmak gerçek bir takı takmayı gerektirmez. Deyimin taşıdığı genel öğüdü bulduktan sonra olayla eşleştir. Bir söz grubunun kalıplaşması ile cümlenin tamamının mecaz olması aynı karar değildir; bazı parçalar gerçek görevini sürdürebilir.",
          "Gündelik bir sözcük belirli bir alanda terim olabilir. “Kökler su çekiyor.” cümlesinde bitki bölümü; “Sözcüğün kökünü bul.” cümlesinde dil bilgisi terimi söz konusudur. Soruda altı çizilen sözcüğün kullanıldığı alana bak."
        ],
        "example": {
          "question": "“Perdeyi kapattı.” ile “Oyunun ikinci perdesi başladı.” ifadelerindeki perdeyi karşılaştır.",
          "steps": [
            "İlkinde pencereyi örten eşya vardır.",
            "İkincide tiyatro eserinin bölümü adlandırılır.",
            "Tiyatro bağlamı ikinci kullanımı alan terimi yapar."
          ],
          "answer": "İkinci perde tiyatro terimidir.",
          "check": "Aynı ses dizisi günlük dilde genel, belirli alanda terim görevinde kullanılabilir."
        },
        "misconceptions": [
          {
            "wrong": "Günlük hayatta kullanılan sözcük terim olamaz.",
            "correct": "Aynı ses dizisi günlük dilde genel, belirli alanda terim görevinde kullanılabilir.",
            "why": "İlkinde pencereyi örten eşya vardır. İkincide tiyatro eserinin bölümü adlandırılır. Tiyatro bağlamı ikinci kullanımı alan terimi yapar."
          }
        ],
        "reasoningChecks": [
          {
            "question": "“Bu olay kulağına küpe olsun.” cümlesinde öğüt nedir?",
            "answer": "Olaydan ders çıkarıp unutmamaktır; gerçek bir küpe edinmek değildir.",
            "why": "Aynı ses dizisi günlük dilde genel, belirli alanda terim görevinde kullanılabilir."
          }
        ]
      }
    ],
    "connections": [
      {
        "concept": "Bağlamın sözcüğe verdiği görev",
        "why": "Anlam türü her kullanımda bağlam yeniden okunarak bulunur."
      },
      {
        "concept": "Terim ve deyimlerde bütün anlam",
        "why": "Aynı ses dizisi günlük dilde genel, belirli alanda terim görevinde kullanılabilir."
      }
    ],
    "authorship": "Özgün öğretmen anlatımı ve özgün çözümleme örnekleri; kaynak sayfaları MEBİ kitabına yöneliktir."
  },
  "tur-02": {
    "title": "Anlam ilişkileri",
    "prerequisites": [
      {
        "concept": "Anlam ilişkisini sözcükte değil kullanımda sınamak",
        "why": "Olumsuzluk gerçekleşmeme bildirir; karşıtlık aynı ölçütte ayrı uçları anlatır."
      }
    ],
    "goals": [
      "Anlam ilişkisini sözcükte değil kullanımda sınamak: Olumsuzluk gerçekleşmeme bildirir; karşıtlık aynı ölçütte ayrı uçları anlatır.",
      "Genellik ve niceliği ayrı okumak: Belirli bir grubu gösteren çoğul kullanım özel bir gönderime sahip olabilir."
    ],
    "chapters": [
      {
        "title": "Anlam ilişkisini sözcükte değil kullanımda sınamak",
        "source": {
          "book": "TYT-tur",
          "pages": [
            9,
            10,
            11,
            12,
            13,
            14
          ]
        },
        "explanation": [
          "Eş anlamlılık, iki sözcüğün bütün cümlelerde birbirinin yerini alacağı garantisi değildir. Anlam yakınlığına rağmen anlatım değeri, deyimleşme ve bağlam değişebilir. Zıtlık için sözcüklerin aynı anlam ekseninde karşıt uçları göstermesi gerekir; bir sözcüğün olumsuz ekiyle kurulmuş biçimi her zaman onun zıddı değildir. Gelmek-gelmemek karşıtlığı eylemin gerçekleşmesiyle ilgilidir; gelmek-gitmek ise yön bakımından karşıttır.",
          "Yakın anlamlı iki sözü karşılaştırırken ortak bölümü bulduktan sonra farklı vurguyu da belirt. ‘İnatçı’ ile ‘kararlı’ vazgeçmeme ortaklığı taşısa da ilkinde olumsuz, ikincide olumlu değerlendirme bulunabilir. Sözcüğün yalnız nesnel durumunu değil konuşanın tutumunu da aktarır. Genel-özel ilişkisinde ise kapsama yönünü ters çevirmemek gerekir: her serçe kuştur, fakat her kuş serçe değildir. ‘Bir kuş gördüm.’ cümlesi türü belirtmediği için geniş anlam kullanır; gözlenen varlığın tek olması sözcüğün kavramsal kapsamını daraltmaz. Somut ve soyut sınıflamasında da bir duygunun belirtilerini görmemiz duygunun kendisini fiziksel nesne yapmaz; sevinç davranışlarla anlaşılır ama masa gibi doğrudan bir nesne değildir.",
          "Yakın anlamlı sözcükler her cümlede birbirinin yerine geçmez. “İnce bir düşünce” ile “ince bir tel” aynı anlam alanına ait değildir. Karşıtlık ararken sözcüğün hangi anlamda kullanıldığını kontrol et."
        ],
        "example": {
          "question": "“Yaşlı adam kapıda bekledi.” cümlesinde yaşlı yerine ihtiyar konabilirken “yaşlı ağaç” için aynı seçim neden tartışmalıdır?",
          "steps": [
            "İki kullanımda da zaman geçirmiş olma ortaklığı vardır.",
            "İhtiyar insan için yerleşik bir nitelemedir; ağaçta kullanım kişileştirme etkisi yaratabilir.",
            "Yer değiştirme hem anlamı hem doğal kullanım koşulunu korumalıdır."
          ],
          "answer": "Eş anlamlılık bağlama bağlıdır.",
          "check": "Olumsuzluk gerçekleşmeme bildirir; karşıtlık aynı ölçütte ayrı uçları anlatır."
        },
        "misconceptions": [
          {
            "wrong": "Zıt anlam, yalnızca olumsuzluk eki getirerek bulunur.",
            "correct": "Olumsuzluk gerçekleşmeme bildirir; karşıtlık aynı ölçütte ayrı uçları anlatır.",
            "why": "İki kullanımda da zaman geçirmiş olma ortaklığı vardır. İhtiyar insan için yerleşik bir nitelemedir; ağaçta kullanım kişileştirme etkisi yaratabilir. Yer değiştirme hem anlamı hem doğal kullanım koşulunu korumalıdır."
          }
        ],
        "reasoningChecks": [
          {
            "question": "“Açık kapı” ile “açık anlatım”da açık sözcüğünün zıddı aynı mıdır?",
            "answer": "İlki kapalıdır; ikincisi kapalı/örtük anlatımdır ve fiziksel kapanma değil anlaşılırlık ekseni vardır.",
            "why": "Olumsuzluk gerçekleşmeme bildirir; karşıtlık aynı ölçütte ayrı uçları anlatır."
          }
        ]
      },
      {
        "title": "Genellik ve niceliği ayrı okumak",
        "source": {
          "book": "TYT-tur",
          "pages": [
            9,
            10,
            11,
            12,
            13,
            14
          ]
        },
        "explanation": [
          "Genel anlam çok sayıda varlığı kapsar, özel anlam bu kapsamı daraltır. Ağaç sözcüğü çamdan; canlı sözcüğü ağaçtan daha geniştir. Sözcüğün çoğul eki alması tek başına genel anlam kanıtı değildir: “Bahçedeki ağaçlar kesildi.” belirli bir kümeyi gösterir. Nicel niteleme ölçülebilir miktar, nitel niteleme özellik bildirir; uzun yol ile güzel yol bu bakımdan ayrılır. Aynı sıfatın fiziksel büyüklükten önem derecesine taşınması anlam eksenini de değiştirebilir.",
          "Genellik, bir sözcüğün kaç varlığı kapsadığıyla ilgilidir. Nitel anlam özellik; nicel anlam ölçü veya miktar bildirir. “Güzel ev” nitel, “üç katlı ev” nicel özellik taşır. “Geniş bakış açısı” ise fiziksel bir ölçü bildirmez."
        ],
        "example": {
          "question": "“Canlı–bitki–ağaç–çam” dizisini kapsam bakımından incele.",
          "steps": [
            "Her sonraki kavram öncekinin alt kümesidir.",
            "Çamların tümü ağaçtır ama her ağaç çam değildir.",
            "Dizi geniş kapsamdan dar kapsama ilerler."
          ],
          "answer": "Genelden özele sıralama vardır.",
          "check": "Belirli bir grubu gösteren çoğul kullanım özel bir gönderime sahip olabilir."
        },
        "misconceptions": [
          {
            "wrong": "Çoğul sözcük her zaman genel anlamlıdır.",
            "correct": "Belirli bir grubu gösteren çoğul kullanım özel bir gönderime sahip olabilir.",
            "why": "Her sonraki kavram öncekinin alt kümesidir. Çamların tümü ağaçtır ama her ağaç çam değildir. Dizi geniş kapsamdan dar kapsama ilerler."
          }
        ],
        "reasoningChecks": [
          {
            "question": "“Büyük çanta” ve “büyük başarı” ifadelerinde nicelik aynı mı?",
            "answer": "Çantada fiziksel büyüklük, başarıda önem ve değer vurgusu vardır.",
            "why": "Belirli bir grubu gösteren çoğul kullanım özel bir gönderime sahip olabilir."
          }
        ]
      }
    ],
    "connections": [
      {
        "concept": "Anlam ilişkisini sözcükte değil kullanımda sınamak",
        "why": "Olumsuzluk gerçekleşmeme bildirir; karşıtlık aynı ölçütte ayrı uçları anlatır."
      },
      {
        "concept": "Genellik ve niceliği ayrı okumak",
        "why": "Belirli bir grubu gösteren çoğul kullanım özel bir gönderime sahip olabilir."
      }
    ],
    "authorship": "Özgün öğretmen anlatımı ve özgün çözümleme örnekleri; kaynak sayfaları MEBİ kitabına yöneliktir."
  },
  "tur-03": {
    "title": "Cümlede anlam",
    "prerequisites": [
      {
        "concept": "Neden, amaç ve koşulun mantığı",
        "why": "Bağlanan eylemlerden biri gerçekleşmiş gerekçeyse neden; hedefse amaç ilişkisi vardır."
      }
    ],
    "goals": [
      "Neden, amaç ve koşulun mantığı: Bağlanan eylemlerden biri gerçekleşmiş gerekçeyse neden; hedefse amaç ilişkisi vardır.",
      "Yargının derecesi ve örtük bilgi: Nesnellik yargının denetlenme biçimidir; doğruluk denetimin sonucudur."
    ],
    "chapters": [
      {
        "title": "Neden, amaç ve koşulun mantığı",
        "source": {
          "book": "TYT-tur",
          "pages": [
            15,
            16,
            17,
            18,
            19,
            20,
            21
          ]
        },
        "explanation": [
          "Neden-sonuçta sonuç gerçekleşmiş bir gerekçeye bağlanır. Amaç-sonuçta öznenin ulaşmak istediği hedef vardır; hedef henüz gerçekleşmemiş olabilir. Koşulda ise bir önermenin geçerliliği başka bir duruma bağlanır. İçin sözcüğü tek başına neden veya amaç seçtirmez; yanındaki eylemin gerçekleşme durumuna ve niyete bakılır. Bir cümlenin koşul bildirmesi, koşulun kesinlikle gerçekleştiği anlamına gelmez; bu ayrım soru seçeneklerindeki aşırı çıkarımları engeller.",
          "Karşılaştırma cümlesinde ortak ölçüt açık olmalıdır. ‘Bu roman önceki romanından daha akıcı.’ ifadesi iki eseri akıcılık bakımından karşılaştırır; yeni romanın her bakımdan daha iyi olduğunu söylemez. ‘En’ sözcüğü bir kümede üstünlük iddiası taşır ama kümenin sınırı belirlenmelidir: sınıfın en hızlısı olmak okulun en hızlısı olmayı gerektirmez. Cümle bir eleştiri içeriyorsa eksikliğin ne olduğuna bak; saptama yalnız durumu bildirirken öneri yapılması isteneni gösterir. ‘Yollar dar.’ saptama, ‘Yollar genişletilmeli.’ öneridir. Öz eleştiride ise olumsuz değerlendirme konuşanın kendi davranışına yönelir. Bu ayrımlar aynı olay hakkında kurulmuş cümlelerin iletişim amaçlarını ayırmayı sağlar.",
          "“Yorulduğu için oturdu.” neden; “Dinlenmek için oturdu.” amaç bildirir. İlkinde oturmaya yol açan durum, ikincisinde oturmayla ulaşılmak istenen hedef anlatılır. Amaç cümlesi hedefe gerçekten ulaşıldığını kanıtlamaz."
        ],
        "example": {
          "question": "“Yağmur yağdığı için içeride kaldık.” ile “Islanmamak için içeride kaldık.” nasıl ayrılır?",
          "steps": [
            "İlk cümlede yağmur, kalma davranışının gerçekleşmiş gerekçesidir.",
            "İkinci cümlede ıslanmamak istenen hedeftir.",
            "İki cümlede de için bulunmasına rağmen ilişkiyi sözcük değil yüklemler kurar."
          ],
          "answer": "Birincisi neden, ikincisi amaçtır.",
          "check": "Bağlanan eylemlerden biri gerçekleşmiş gerekçeyse neden; hedefse amaç ilişkisi vardır."
        },
        "misconceptions": [
          {
            "wrong": "İçin geçen her cümle amaç bildirir.",
            "correct": "Bağlanan eylemlerden biri gerçekleşmiş gerekçeyse neden; hedefse amaç ilişkisi vardır.",
            "why": "İlk cümlede yağmur, kalma davranışının gerçekleşmiş gerekçesidir. İkinci cümlede ıslanmamak istenen hedeftir. İki cümlede de için bulunmasına rağmen ilişkiyi sözcük değil yüklemler kurar."
          }
        ],
        "reasoningChecks": [
          {
            "question": "“Düzenli çalışırsan başarı artabilir.” başarının kesin olduğunu söyler mi?",
            "answer": "Hayır; koşul ve olasılık vardır, kesin sonuç yoktur.",
            "why": "Bağlanan eylemlerden biri gerçekleşmiş gerekçeyse neden; hedefse amaç ilişkisi vardır."
          }
        ]
      },
      {
        "title": "Yargının derecesi ve örtük bilgi",
        "source": {
          "book": "TYT-tur",
          "pages": [
            15,
            16,
            17,
            18,
            19,
            20,
            21
          ]
        },
        "explanation": [
          "Öznel yargı kişisel değerlendirmeye, nesnel yargı doğrulanabilir bir duruma dayanır. Nesnel görünmek doğru olmakla aynı değildir; yanlış bir tarih bilgisi de denetlenebilir niteliktedir. Olasılık, tahmin, varsayım ve ön yargı birbirinden ayrılır: varsayım bir durumu geçici olarak olmuş kabul eder; tahmin belirtilerden beklenen sonucu çıkarır. “Yine” ve “artık” gibi sözler önceki bir durumu sezdirir; fakat sezdirilmeyen ayrıntıları metne eklemek geçersiz çıkarım üretir.",
          "Nesnel cümle doğru olmak zorunda değildir; doğru veya yanlış oluşu kanıtlanabilir bir yargı taşır. Öznel yargı ise kişinin değerlendirmesine bağlıdır. Bir cümlenin sayı içermesi, içindeki bütün yargıları kendiliğinden nesnel yapmaz."
        ],
        "example": {
          "question": "“Bu yıl da yarışmaya katıldım.” cümlesinden hangi önceki bilgi çıkar?",
          "steps": [
            "Da sözcüğü bu yılki katılımı önceki katılımla ilişkilendirir.",
            "En az bir önceki katılım vardır.",
            "Önceki yarışmanın kazanıldığına ilişkin bilgi yoktur."
          ],
          "answer": "Daha önce de yarışmaya katılmıştır.",
          "check": "Nesnellik yargının denetlenme biçimidir; doğruluk denetimin sonucudur."
        },
        "misconceptions": [
          {
            "wrong": "Doğrulanabilir her yargı mutlaka doğrudur.",
            "correct": "Nesnellik yargının denetlenme biçimidir; doğruluk denetimin sonucudur.",
            "why": "Da sözcüğü bu yılki katılımı önceki katılımla ilişkilendirir. En az bir önceki katılım vardır. Önceki yarışmanın kazanıldığına ilişkin bilgi yoktur."
          }
        ],
        "reasoningChecks": [
          {
            "question": "“Diyelim ki tren gecikti.” ne bildirir?",
            "answer": "Varsayım; trenin gerçekten geciktiğini kanıtlamaz.",
            "why": "Nesnellik yargının denetlenme biçimidir; doğruluk denetimin sonucudur."
          }
        ]
      }
    ],
    "connections": [
      {
        "concept": "Neden, amaç ve koşulun mantığı",
        "why": "Bağlanan eylemlerden biri gerçekleşmiş gerekçeyse neden; hedefse amaç ilişkisi vardır."
      },
      {
        "concept": "Yargının derecesi ve örtük bilgi",
        "why": "Nesnellik yargının denetlenme biçimidir; doğruluk denetimin sonucudur."
      }
    ],
    "authorship": "Özgün öğretmen anlatımı ve özgün çözümleme örnekleri; kaynak sayfaları MEBİ kitabına yöneliktir."
  },
  "tur-04": {
    "title": "Paragrafta anlam",
    "prerequisites": [
      {
        "concept": "Konu ile ana düşünce arasındaki fark",
        "why": "Konum ipucu olabilir; temel ölçüt bütün metni kapsama ve destek ilişkisini açıklamadır."
      }
    ],
    "goals": [
      "Konu ile ana düşünce arasındaki fark: Konum ipucu olabilir; temel ölçüt bütün metni kapsama ve destek ilişkisini açıklamadır.",
      "Çıkarımın sınırını korumak: Çıkarım için metinde dayanak bulunmalı; dışarıdan eklenen olasılık yeterli değildir."
    ],
    "chapters": [
      {
        "title": "Konu ile ana düşünce arasındaki fark",
        "source": {
          "book": "TYT-tur",
          "pages": [
            22,
            23,
            24,
            25,
            26,
            27,
            28,
            29,
            30,
            31,
            32
          ]
        },
        "explanation": [
          "Konu, metnin üzerinde durduğu alanı; ana düşünce bu alan hakkında okura kabul ettirilmek istenen temel yargıyı belirtir. “Kitap okumak” konu olabilir ama tek başına yargı içermediği için ana düşünce değildir. Yardımcı düşünceler örnek, açıklama ve karşılaştırmalarla ana yargıyı destekler. Metnin bir ayrıntısını çok etkileyici bulmak onu merkez yapmaz; ana düşünce bütün cümlelerin neden bir arada bulunduğunu açıklamalıdır.",
          "Paragrafın ana düşüncesini kendi cümlenle yazarken kapsamını koru. Metin dijital araçların bilinçli kullanımını savunuyorsa ‘Teknoloji zararlıdır.’ ve ‘Teknoloji her sorunu çözer.’ seçenekleri iki uçta da aşırıdır. Başlık da metnin yalnız bir örneğini değil ortak odağını karşılamalıdır. Bir yazar soruyu örnekle açıp son cümlede asıl savına dönebilir; bu nedenle ilk örneği doğrudan konu sanmak yanlıştır. Soruda yazarın tutumu isteniyorsa beğeni, eleştiri, kaygı ve temkin dilini gösteren ifadeler aranır. Yazarın bir görüşü aktarması onu benimsediğini kanıtlamaz; alıntıdan sonra gelen karşıt bağlaç ve değerlendirme cümleleri sözün kime ait olduğunu ve hangi amaçla verildiğini belirler.",
          "“Kitap okuma” bir konu adıdır; “Okumak, düşüncelerimizi başka görüşlerle sınamamızı sağlar.” ise yargıdır. Ana düşünce sorusunda yalnız bir kavramı işaretlemek yeterli olmaz. Yazarın o kavram hakkında ne söylediğini tamamla."
        ],
        "example": {
          "question": "“Bir kitabı bitirmek başarı sayılır. Oysa kitabın bıraktığı soruları düşünmeden yeni kitaba geçmek okumanın etkisini azaltır. Nitelikli okuma, sayfa sayısından çok düşünmeye ayrılan zamanla gelişir.” ana düşüncesini bul.",
          "steps": [
            "İlk cümle yaygın ölçütü sunar.",
            "Oysa ile bu ölçüt sınırlandırılır.",
            "Son cümle metnin bütününü kapsayan öneriyi verir."
          ],
          "answer": "Nitelikli okumada nicelikten çok düşünme önemlidir.",
          "check": "Konum ipucu olabilir; temel ölçüt bütün metni kapsama ve destek ilişkisini açıklamadır."
        },
        "misconceptions": [
          {
            "wrong": "En uzun veya son cümle her zaman ana düşüncedir.",
            "correct": "Konum ipucu olabilir; temel ölçüt bütün metni kapsama ve destek ilişkisini açıklamadır.",
            "why": "İlk cümle yaygın ölçütü sunar. Oysa ile bu ölçüt sınırlandırılır. Son cümle metnin bütününü kapsayan öneriyi verir."
          }
        ],
        "reasoningChecks": [
          {
            "question": "Metne “Her gün en az yüz sayfa okunmalıdır.” yargısı eklenebilir mi?",
            "answer": "Hayır; metnin nicelikten çok nitelik vurgusuyla uyuşmaz.",
            "why": "Konum ipucu olabilir; temel ölçüt bütün metni kapsama ve destek ilişkisini açıklamadır."
          }
        ]
      },
      {
        "title": "Çıkarımın sınırını korumak",
        "source": {
          "book": "TYT-tur",
          "pages": [
            22,
            23,
            24,
            25,
            26,
            27,
            28,
            29,
            30,
            31,
            32
          ]
        },
        "explanation": [
          "Paragraf sorusunda verilen bilgi ile okurun genel kültürü ayrılır. Bir çıkarım metindeki öncüllerden zorunlu veya güçlü biçimde desteklenmelidir. Bazı sözcüğünü tümüne, çoğu sözcüğünü her zamana dönüştürmek kapsamı haksız genişletir. Bir çözümün olumlu etkisinin anlatılması, bunun tek çözüm olduğuna kanıt değildir. Olumsuz soru kökünde seçenekleri metindeki desteklerine göre taramak, kulağa doğru gelen ama metinde bulunmayan yorumu yakalamayı sağlar.",
          "Bir seçeneğin paragraftaki tek bir örneğe uyması, ana düşünce olduğu anlamına gelmez. “Her zaman, yalnızca, tümüyle” gibi ifadelerin metinde karşılığı olup olmadığını ara. Kendi genel bilgini değil, paragrafın çizdiği sınırı esas al."
        ],
        "example": {
          "question": "“Kentteki bazı parklar yürüyüş yolları yenilendikten sonra daha çok ziyaretçi aldı.” ifadesini değerlendir.",
          "steps": [
            "Kapsam bazı parklardır, bütün parklar değildir.",
            "Yenileme ve artış birlikte bildirilir.",
            "Kent nüfusunun arttığı veya bütün ziyaretçilerin memnun olduğu söylenmez."
          ],
          "answer": "Yalnız belirtilen parklarda ziyaret artışı bilgisi çıkar.",
          "check": "Çıkarım için metinde dayanak bulunmalı; dışarıdan eklenen olasılık yeterli değildir."
        },
        "misconceptions": [
          {
            "wrong": "Makul görünen yorum metinden çıkarılmış sayılır.",
            "correct": "Çıkarım için metinde dayanak bulunmalı; dışarıdan eklenen olasılık yeterli değildir.",
            "why": "Kapsam bazı parklardır, bütün parklar değildir. Yenileme ve artış birlikte bildirilir. Kent nüfusunun arttığı veya bütün ziyaretçilerin memnun olduğu söylenmez."
          }
        ],
        "reasoningChecks": [
          {
            "question": "“Kentte hiç bakımsız park kalmadı.” çıkar mı?",
            "answer": "Hayır; kimi parkların yenilenmesi bütün parklar hakkında bilgi vermez.",
            "why": "Çıkarım için metinde dayanak bulunmalı; dışarıdan eklenen olasılık yeterli değildir."
          }
        ]
      }
    ],
    "connections": [
      {
        "concept": "Konu ile ana düşünce arasındaki fark",
        "why": "Konum ipucu olabilir; temel ölçüt bütün metni kapsama ve destek ilişkisini açıklamadır."
      },
      {
        "concept": "Çıkarımın sınırını korumak",
        "why": "Çıkarım için metinde dayanak bulunmalı; dışarıdan eklenen olasılık yeterli değildir."
      }
    ],
    "authorship": "Özgün öğretmen anlatımı ve özgün çözümleme örnekleri; kaynak sayfaları MEBİ kitabına yöneliktir."
  },
  "tur-05": {
    "title": "Paragrafın yapısı",
    "prerequisites": [
      {
        "concept": "Cümleler arasındaki bağları izlemek",
        "why": "Bağlaç cümlenin önceki veya sonraki yargıyla kurduğu ilişkiyi gösterir; konumu tek başına belirlemez."
      }
    ],
    "goals": [
      "Cümleler arasındaki bağları izlemek: Bağlaç cümlenin önceki veya sonraki yargıyla kurduğu ilişkiyi gösterir; konumu tek başına belirlemez.",
      "Akışı bozan cümleyi gerekçeyle seçmek: Sözcük ortaklığı yerine cümlenin açıklama zincirindeki işlevi aranır."
    ],
    "chapters": [
      {
        "title": "Cümleler arasındaki bağları izlemek",
        "source": {
          "book": "TYT-tur",
          "pages": [
            33,
            34,
            35
          ]
        },
        "explanation": [
          "Bir paragrafta anlam yalnız cümlelerin tek tek içeriğinden doğmaz; zamirler, bağlayıcılar ve konu akışı onları birbirine bağlar. Bu, böyle ve söz konusu ifadeleri daha önce kurulmuş bir gönderime ihtiyaç duyar. Giriş cümlesi bu yüzden çoğunlukla bağımsız bir çerçeve kurar. Gelişme ayrıntılandırır, sonuç değerlendirme veya toparlama getirir. Bununla birlikte her metin mekanik bir giriş-gelişme-sonuç kalıbına uymaz; cümlelerin işlevi anlam ilişkisinden belirlenir.",
          "Cümle sıralamada birden fazla bağ aynı anda kullanılmalıdır. Kronolojik sıra bir olay metninde güçlü ipucudur; düşünce paragrafında tanımdan örneğe, sorundan çözüme veya genelden ayrıntıya ilerleme daha belirleyici olabilir. ‘Öte yandan’ önceki düşünceye başka yön ekler; ‘oysa’ beklenenle gerçekleşeni karşılaştırır; ‘çünkü’ gerekçe sunar. Bunları yalnız yer belirten işaretler gibi değil ilişki türleri olarak oku. Bir sıralama zamiri doğru yere bağlasa bile düşünceyi sonuçtan gerekçeye anlamsız biçimde sıçratıyorsa yeniden değerlendirilmelidir. Paragraf tamamlama sorusunda son cümlenin hem son bölümün yönüne hem bütün metnin ana düşüncesine uyması gerekir; dışarıdan yepyeni konu açmak genellikle toparlama işleviyle uyuşmaz.",
          "“Bu durum” sözünün hangi duruma gönderme yaptığını bul. “Oysa” karşıtlık, “bu nedenle” sonuç, “örneğin” somutlaştırma beklentisi yaratır. Cümle sıralamada yalnız aynı sözcüğün tekrarlanmasına değil, düşüncenin ilerleyişine bak."
        ],
        "example": {
          "question": "A:“Bu nedenle toprak nemini korur.” B:“Malç, toprağın üstünü örten koruyucu tabakadır.” C:“Bu tabaka güneşin doğrudan etkisini azaltır.” sırasını kur.",
          "steps": [
            "A’daki bu nedenle önceden verilmiş bir neden ister.",
            "C’deki bu tabaka, B’de tanımlanan malça gönderir.",
            "Azalan doğrudan güneş, nemin korunmasına gerekçe olur."
          ],
          "answer": "B–C–A sırası tutarlıdır.",
          "check": "Bağlaç cümlenin önceki veya sonraki yargıyla kurduğu ilişkiyi gösterir; konumu tek başına belirlemez."
        },
        "misconceptions": [
          {
            "wrong": "Bağlaç bulunan cümle mutlaka paragrafın sonudur.",
            "correct": "Bağlaç cümlenin önceki veya sonraki yargıyla kurduğu ilişkiyi gösterir; konumu tek başına belirlemez.",
            "why": "A’daki bu nedenle önceden verilmiş bir neden ister. C’deki bu tabaka, B’de tanımlanan malça gönderir. Azalan doğrudan güneş, nemin korunmasına gerekçe olur."
          }
        ],
        "reasoningChecks": [
          {
            "question": "A cümlesi giriş olabilir mi?",
            "answer": "Verilen biçimiyle olamaz; neden ilişkisini taşıyacak önceki bilgi eksiktir.",
            "why": "Bağlaç cümlenin önceki veya sonraki yargıyla kurduğu ilişkiyi gösterir; konumu tek başına belirlemez."
          }
        ]
      },
      {
        "title": "Akışı bozan cümleyi gerekçeyle seçmek",
        "source": {
          "book": "TYT-tur",
          "pages": [
            33,
            34,
            35
          ]
        },
        "explanation": [
          "Akışı bozan cümle konuya tamamen yabancı olmak zorunda değildir; aynı genel alan içinde başka bir alt konuya geçebilir. Ölçüt, çevresindeki cümleler arasındaki açıklama ve gönderim zincirini kesmesidir. Paragrafı ikiye bölmede ise kopuk bir cümleyi atmak yerine yeni bir düşünce odağının başladığı yeri bulursun. Metne cümle eklerken eklenen cümlenin hem önceki sözcüğe hem sonraki yargıya bağlanabilmesi gerekir.",
          "Önce paragrafın ortak konusunu ve bakış açısını belirle. Şüpheli cümleyi çıkardığında iki komşu cümle anlamlı bağ kuruyorsa güçlü bir ipucu elde edersin. Konuyla ilgili her cümle, paragrafın belirli anlatım çizgisine uygun olmayabilir."
        ],
        "example": {
          "question": "Bir metin tohumların rüzgârla yayılmasını anlatırken araya “Bazı ağaçlar uzun yıllar yaşar.” cümlesi giriyor. Neden akışı bozabilir?",
          "steps": [
            "Bütün cümleler bitkilerle ilgilidir; bu ortaklık yeterli değildir.",
            "Metnin özel odağı yayılma mekanizmasıdır.",
            "Ömür bilgisi bu mekanizmayı açıklamıyorsa zinciri keser."
          ],
          "answer": "Genel konu aynı, alt konu farklıdır.",
          "check": "Sözcük ortaklığı yerine cümlenin açıklama zincirindeki işlevi aranır."
        },
        "misconceptions": [
          {
            "wrong": "Aynı sözcüğü içeren her cümle akışa uygundur.",
            "correct": "Sözcük ortaklığı yerine cümlenin açıklama zincirindeki işlevi aranır.",
            "why": "Bütün cümleler bitkilerle ilgilidir; bu ortaklık yeterli değildir. Metnin özel odağı yayılma mekanizmasıdır. Ömür bilgisi bu mekanizmayı açıklamıyorsa zinciri keser."
          }
        ],
        "reasoningChecks": [
          {
            "question": "Uzun ömür, tohum yayma sıklığını açıklamak için kullanılsaydı karar değişir miydi?",
            "answer": "Evet; yeni cümle ana ilişkiye gerekçe olarak bağlanabilirdi.",
            "why": "Sözcük ortaklığı yerine cümlenin açıklama zincirindeki işlevi aranır."
          }
        ]
      }
    ],
    "connections": [
      {
        "concept": "Cümleler arasındaki bağları izlemek",
        "why": "Bağlaç cümlenin önceki veya sonraki yargıyla kurduğu ilişkiyi gösterir; konumu tek başına belirlemez."
      },
      {
        "concept": "Akışı bozan cümleyi gerekçeyle seçmek",
        "why": "Sözcük ortaklığı yerine cümlenin açıklama zincirindeki işlevi aranır."
      }
    ],
    "authorship": "Özgün öğretmen anlatımı ve özgün çözümleme örnekleri; kaynak sayfaları MEBİ kitabına yöneliktir."
  },
  "tur-06": {
    "title": "Anlatım biçimleri ve teknikleri",
    "prerequisites": [
      {
        "concept": "Anlatımın amacını belirlemek",
        "why": "Zaman eki yanında değişen olay dizisi ve eylemler arası sıra aranır."
      }
    ],
    "goals": [
      "Anlatımın amacını belirlemek: Zaman eki yanında değişen olay dizisi ve eylemler arası sıra aranır.",
      "Düşünceyi destekleme araçları: Görüşe ilişkin sözü veya düşüncesi destek işleviyle aktarılmalıdır."
    ],
    "chapters": [
      {
        "title": "Anlatımın amacını belirlemek",
        "source": {
          "book": "TYT-tur",
          "pages": [
            22,
            23,
            24,
            25,
            26,
            27,
            28,
            29,
            30
          ]
        },
        "explanation": [
          "Açıklama bilgi vermeyi, tartışma bir görüşü savunup başka bir görüşü sorgulamayı, betimleme bir varlığı zihinde canlandırmayı, öyküleme zaman içinde gelişen olayı göstermeyi amaçlar. Bir metinde birden çok biçim bulunabilir; baskın biçim temel amaca göre seçilir. Sıfat çokluğu betimlemeye ipucudur ama tek başına yeterli değildir. Bir olayın geçmiş zamanda anlatılması da otomatik olarak öyküleme yaratmaz; olay örgüsü veya değişen durum aranır.",
          "Düşünceyi geliştirme yolunun varlığıyla başarısı da ayrı sorulardır. Bir yazar sayısal veri kullanabilir ama bu verinin örneklemi iddiasını desteklemek için yetersiz olabilir. Tanık gösterilen kişinin uzmanlığı savın alanıyla ilgili olmalıdır; ünlü olmak her konuda kanıt gücü sağlamaz. Benzetmede iki unsurun ortak niteliği ortaya konur; örneklemede ise savın bir üyesi somut durum olarak gösterilir. ‘Kitap bir pencere gibidir.’ benzetme, ‘Anı kitapları geçmişe farklı bakış kazandırır.’ genel savın tür örneği olabilir. Tartışmacı metinde yazar önce karşı görüşü adil biçimde kurup sonra sınırlayabilir; ilk paragraftaki görüşü otomatik yazarın kendi tezi saymamak gerekir.",
          "Öykülemede olay akışı; betimlemede özellikler öne çıkar. Tek bir paragrafta ikisi birlikte kullanılabilir. “Ağaçların arasından yürüdü.” olayın ilerlemesine, “Ağaçların uzun gövdeleri yosunluydu.” görünüşün canlandırılmasına hizmet eder."
        ],
        "example": {
          "question": "“Kıyıdaki evin mavi kapısı soyulmuştu. Pencere önünde solgun çiçekler duruyordu.” ile “Kapıyı açtı, çiçekleri sulayıp dışarı çıktı.” karşılaştır.",
          "steps": [
            "İlk metin aynı görünümün parçalarını gösterir.",
            "İkincide ardışık eylemler zaman akışı kurar.",
            "Birincide görsel sahne, ikincide olay gelişimi baskındır."
          ],
          "answer": "İlk metin betimleme, ikincisi öykülemedir.",
          "check": "Zaman eki yanında değişen olay dizisi ve eylemler arası sıra aranır."
        },
        "misconceptions": [
          {
            "wrong": "Geçmiş zaman eki bulunan metin mutlaka öyküler.",
            "correct": "Zaman eki yanında değişen olay dizisi ve eylemler arası sıra aranır.",
            "why": "İlk metin aynı görünümün parçalarını gösterir. İkincide ardışık eylemler zaman akışı kurar. Birincide görsel sahne, ikincide olay gelişimi baskındır."
          }
        ],
        "reasoningChecks": [
          {
            "question": "Betimleme bir öykünün içinde bulunabilir mi?",
            "answer": "Evet; sahneyi kuran betimleme daha geniş olay anlatımına hizmet edebilir.",
            "why": "Zaman eki yanında değişen olay dizisi ve eylemler arası sıra aranır."
          }
        ]
      },
      {
        "title": "Düşünceyi destekleme araçları",
        "source": {
          "book": "TYT-tur",
          "pages": [
            22,
            23,
            24,
            25,
            26,
            27,
            28,
            29,
            30
          ]
        },
        "explanation": [
          "Tanımlama kavramın ne olduğunu belirler; örnekleme genel düşünceyi somutlaştırır. Karşılaştırma iki nesneyi ortak bir ölçütte ilişkilendirir. Tanık gösterme, bir kişinin görüşüne atıfla destek sağlar; yalnız adını anmak yeterli değildir. Sayısal veri bir iddiayı güçlendirebilir ama verinin hangi gruba, hangi döneme ve hangi ölçüme ait olduğu önemlidir. Destek aracını ana düşünceyle bağını açıklayarak bulmak, yalnız tırnak işaretine veya sayıya bakmaktan daha güvenilirdir.",
          "Bir paragraf açıklayıcı anlatımla kurulup örneklendirmeden yararlanabilir. Tanımlama “Bu nedir?” sorusuna karşılık verir. Tanık göstermede ise düşünce, konuya ilişkin bir kişinin sözü veya görüşüyle desteklenir; yalnız bir kişinin adını anmak yeterli değildir."
        ],
        "example": {
          "question": "“İki okulda yapılan ankette öğrencilerin %60’ı sessiz alan istedi; bu yüzden okul bahçelerinde çalışma köşeleri öneriyoruz.” desteğini incele.",
          "steps": [
            "Yüzde anket sonucudur.",
            "Veri, önerinin ihtiyaç gerekçesi olarak kullanılır.",
            "İki okulun örneklemi bütün ülke öğrencileri adına kesin hüküm kurdurmaz."
          ],
          "answer": "Sayısal veriden yararlanılmıştır; genelleme sınırlıdır.",
          "check": "Görüşe ilişkin sözü veya düşüncesi destek işleviyle aktarılmalıdır."
        },
        "misconceptions": [
          {
            "wrong": "Bir yazarın adının geçmesi tanık göstermedir.",
            "correct": "Görüşe ilişkin sözü veya düşüncesi destek işleviyle aktarılmalıdır.",
            "why": "Yüzde anket sonucudur. Veri, önerinin ihtiyaç gerekçesi olarak kullanılır. İki okulun örneklemi bütün ülke öğrencileri adına kesin hüküm kurdurmaz."
          }
        ],
        "reasoningChecks": [
          {
            "question": "“Yahya Kemal İstanbul’da yaşamıştır.” cümlesi tanık gösterme mi?",
            "answer": "Tek başına değildir; savı destekleyen görüş aktarımı yoktur.",
            "why": "Görüşe ilişkin sözü veya düşüncesi destek işleviyle aktarılmalıdır."
          }
        ]
      }
    ],
    "connections": [
      {
        "concept": "Anlatımın amacını belirlemek",
        "why": "Zaman eki yanında değişen olay dizisi ve eylemler arası sıra aranır."
      },
      {
        "concept": "Düşünceyi destekleme araçları",
        "why": "Görüşe ilişkin sözü veya düşüncesi destek işleviyle aktarılmalıdır."
      }
    ],
    "authorship": "Özgün öğretmen anlatımı ve özgün çözümleme örnekleri; kaynak sayfaları MEBİ kitabına yöneliktir."
  },
  "tur-07": {
    "title": "Ses bilgisi",
    "prerequisites": [
      {
        "concept": "Ünsüz değişimini ek sınırında görmek",
        "why": "Değişen sesin kökte mi ekte mi bulunduğuna ve değişimin yönüne bakılır."
      }
    ],
    "goals": [
      "Ünsüz değişimini ek sınırında görmek: Değişen sesin kökte mi ekte mi bulunduğuna ve değişimin yönüne bakılır.",
      "Ünlü olayını kök biçimiyle karşılaştırmak: Bir sesin yok olması ile başka ünlüye dönüşmesi farklı olaylardır."
    ],
    "chapters": [
      {
        "title": "Ünsüz değişimini ek sınırında görmek",
        "source": {
          "book": "TYT-tur",
          "pages": [
            36,
            37,
            38
          ]
        },
        "explanation": [
          "Ünsüz benzeşmesinde sözcüğün sonundaki sert ünsüz, başlayan ekin ünsüzünü etkiler. Yumuşamada ise ekten önce sözcük sonundaki p, ç, t, k ünsüzünün değişmesi incelenir. Hangi harfin değiştiğini işaretlemek iki olayı ayırır. Her sözcük aynı kurala uymaz: tek heceli ve alıntı sözcüklerde istisnalar olabilir; sonuç yalnız ses benzerliğine dayanarak tahmin edilmez.",
          "Ses olayında yazılı biçimle söyleniş arasında rastgele tahmin yapmak yerine sözlüğe ve kurala uygun temel biçimden başla. ‘Affetmek’ sözünde af ve etmek birleşirken f türemesi vardır; ‘kaybolmak’ kayıp ile olmak ilişkisinde ünlü düşmesini gösterir. Her birleşik fiil aynı ses olayını taşımaz. Kaynaştırma harflerini incelerken ekin biçimini de doğru belirle: iki ünlü arasında beliren y, ünlü çatışmasını önleyen görev taşır; görülen her y sesi kaynaştırma değildir. Ünlü uyumu bir sözcüğün kökeni ve yerleşik yazımıyla ilgili istisnalar içerebilir. Soruda ses olayının hangi kelimede bulunduğu isteniyorsa önce değişimin iki biçimini göster, sonra adı koy; yalnız kulağa benzemesi kanıt değildir.",
          "Yumuşamada çoğunlukla sözcüğün son ünsüzü; sertleşmede ise ekin başındaki ünsüz değişir. Bütün sözcükler yumuşamaz: “hukuk + u → hukuku”. Önce gerçek yazılı biçimi incele, sonra kuralı uygula."
        ],
        "example": {
          "question": "“Kitapta” ve “kitabı” sözcüklerinde olan değişimi göster.",
          "steps": [
            "Kitap+da birleşiminde d, sert p’nin etkisiyle t olur.",
            "Kitap+ı birleşiminde ise kökün p’si b’ye dönüşür.",
            "İlkinde ek, ikincide kök ünsüzü değişir."
          ],
          "answer": "Kitapta benzeşme, kitabı yumuşamadır.",
          "check": "Değişen sesin kökte mi ekte mi bulunduğuna ve değişimin yönüne bakılır."
        },
        "misconceptions": [
          {
            "wrong": "Her sert ünsüz değişmesi benzeşmedir.",
            "correct": "Değişen sesin kökte mi ekte mi bulunduğuna ve değişimin yönüne bakılır.",
            "why": "Kitap+da birleşiminde d, sert p’nin etkisiyle t olur. Kitap+ı birleşiminde ise kökün p’si b’ye dönüşür. İlkinde ek, ikincide kök ünsüzü değişir."
          }
        ],
        "reasoningChecks": [
          {
            "question": "“Hukuku” örneğinde niçin yumuşama beklenmez?",
            "answer": "Yumuşama bütün sözcüklere zorunlu uygulanmaz; yerleşik yazım korunur.",
            "why": "Değişen sesin kökte mi ekte mi bulunduğuna ve değişimin yönüne bakılır."
          }
        ]
      },
      {
        "title": "Ünlü olayını kök biçimiyle karşılaştırmak",
        "source": {
          "book": "TYT-tur",
          "pages": [
            36,
            37,
            38
          ]
        },
        "explanation": [
          "Ünlü düşmesinde sözcüğün önceki biçiminde bulunan bir ünlü ek veya birleşme sırasında görünmez. Ünlü daralmasında özellikle -yor öncesindeki a/e ünlüsü ı/i/u/ü biçimine dönüşür. Yardımcı ünsüz türemesi ile kaynaştırma sesini ayırmak için sözcüğün yapı değişimini izle. Her bitişik yazılan iki sözcükte ses düşmesi bulunmaz; harfleri önceki ve sonraki biçimde tek tek karşılaştırmak gerekir.",
          "“Ağız → ağzı” örneğinde ses sayısı azalır; “bekle → bekliyor” örneğinde ünlü daralır. “Akıl → aklı” sözcüğünü yanlışlıkla daralma diye adlandırma. Ses olayının adını, gözlediğin değişimden çıkar."
        ],
        "example": {
          "question": "“Ağız+ı→ağzı” ve “bekle+yor→bekliyor” örneklerini çöz.",
          "steps": [
            "Ağızın ikinci hecesindeki ı kaybolur.",
            "Bekle sözcüğünün e’si kaybolmaz, i’ye daralır.",
            "Düşmede ses sayısı azalırken daralmada ilgili ünlünün niteliği değişir."
          ],
          "answer": "Ağzı ünlü düşmesi, bekliyor ünlü daralmasıdır.",
          "check": "Bir sesin yok olması ile başka ünlüye dönüşmesi farklı olaylardır."
        },
        "misconceptions": [
          {
            "wrong": "Ünlünün biçimi değişmişse ünlü düşmesi vardır.",
            "correct": "Bir sesin yok olması ile başka ünlüye dönüşmesi farklı olaylardır.",
            "why": "Ağızın ikinci hecesindeki ı kaybolur. Bekle sözcüğünün e’si kaybolmaz, i’ye daralır. Düşmede ses sayısı azalırken daralmada ilgili ünlünün niteliği değişir."
          }
        ],
        "reasoningChecks": [
          {
            "question": "“His+etmek→hissetmek”te hangi değişim var?",
            "answer": "Ünsüz türemesi; s sesi çiftleşerek belirir.",
            "why": "Bir sesin yok olması ile başka ünlüye dönüşmesi farklı olaylardır."
          }
        ]
      }
    ],
    "connections": [
      {
        "concept": "Ünsüz değişimini ek sınırında görmek",
        "why": "Değişen sesin kökte mi ekte mi bulunduğuna ve değişimin yönüne bakılır."
      },
      {
        "concept": "Ünlü olayını kök biçimiyle karşılaştırmak",
        "why": "Bir sesin yok olması ile başka ünlüye dönüşmesi farklı olaylardır."
      }
    ],
    "authorship": "Özgün öğretmen anlatımı ve özgün çözümleme örnekleri; kaynak sayfaları MEBİ kitabına yöneliktir."
  },
  "tur-08": {
    "title": "Yazım kuralları",
    "prerequisites": [
      {
        "concept": "De, ki ve mi için görev çözümlemesi",
        "why": "Çıkarma yardımcı bir denemedir; asıl karar sözcüğün cümledeki görevi ve kurduğu ilişkidir."
      }
    ],
    "goals": [
      "De, ki ve mi için görev çözümlemesi: Çıkarma yardımcı bir denemedir; asıl karar sözcüğün cümledeki görevi ve kurduğu ilişkidir.",
      "Özel ad, sayı ve birleşik sözcükler: Yapım ekiyle türeyen sözcüklerde sonraki çekimler de kesmeyle ayrılmaz."
    ],
    "chapters": [
      {
        "title": "De, ki ve mi için görev çözümlemesi",
        "source": {
          "book": "TYT-tur",
          "pages": [
            39,
            40,
            41,
            42,
            43,
            44,
            45,
            46,
            47,
            48,
            49,
            50,
            51,
            52,
            53,
            54
          ]
        },
        "explanation": [
          "Bağlaç olan de/da, önceki söze ek bir yargı veya ortaklık katar ve ayrı yazılır; bulunma durum eki ise yer, zaman ya da durum ilişkisi kurar ve bitişir. Bağlaç ki cümle bağlar; ilgi zamiri olan -ki bir adın yerini tutar, sıfat yapan -ki bir adı niteler. Soru eki mi ünlü uyumuna göre biçimlenir, ayrı yazılır ve ardından gelen kişi eki ona bağlanır.",
          "Kesme işaretinde özel ada eklenen her parça aynı işlemden geçmez. ‘Türkçe’, ‘Türkçenin’ gibi dil adı yapılarıyla ‘Türkiye’nin’ özel ad çekimi ayrı değerlendirilir. Kısaltmalara getirilen ekler kısaltmanın okunmasına göre yazılır; kelime gibi okunanlarla harf harf okunanlar aynı sesle bitmeyebilir. Birleşik sözcüklerde anlam kayması ve ses olayı ölçütleri kullanılırken bütün birleşikleri tek kurala zorlamak yanlıştır; yerleşik yazım ayrıca öğrenilir. Büyük harf kurallarında yön adıyla bölge adı ayrılır: ‘Şehrin kuzeyi’ yön belirtirken ‘Kuzey Anadolu’ belirli coğrafi adın parçasıdır. Nokta ve kesme işaretinin sayı ekleriyle ilişkisi de aynı işlevi iki kere göstermeden kurulmalıdır; sıra sayısı ve durum eki farklı görevlerdir.",
          "Bağlaç olan de çıkarıldığında cümle çoğunlukla dil bilgisel yapısını korur, “dahi” anlamı eksilir: “Sen de oku.” Bulunma eki ise yer veya durum ilişkisi kurar: “Evde çalışıyor.” Bir denemeyi tek başına ezberlemek yerine görevi doğrula."
        ],
        "example": {
          "question": "“Evde ben de çalışıyorum.” cümlesinde iki de neden farklı yazılır?",
          "steps": [
            "Evde sözcüğünde yer ilişkisi vardır; de sözcüğünü kaldırmak aynı yapıyı korumaz.",
            "Ben de sözünde benin başkalarına eklenmesi anlatılır.",
            "Ek görevinde bitişik, bağlaç görevinde ayrı yazılır."
          ],
          "answer": "Evde bitişik, ben de ayrı yazılır.",
          "check": "Çıkarma yardımcı bir denemedir; asıl karar sözcüğün cümledeki görevi ve kurduğu ilişkidir."
        },
        "misconceptions": [
          {
            "wrong": "De çıkarılınca anlam değişiyorsa daima ektir.",
            "correct": "Çıkarma yardımcı bir denemedir; asıl karar sözcüğün cümledeki görevi ve kurduğu ilişkidir.",
            "why": "Evde sözcüğünde yer ilişkisi vardır; de sözcüğünü kaldırmak aynı yapıyı korumaz. Ben de sözünde benin başkalarına eklenmesi anlatılır. Ek görevinde bitişik, bağlaç görevinde ayrı yazılır."
          }
        ],
        "reasoningChecks": [
          {
            "question": "“Seninki nerede?”de ki ayrı mı?",
            "answer": "Hayır; senin eşyanın yerine geçen ilgi zamiri -ki bitişiktir.",
            "why": "Çıkarma yardımcı bir denemedir; asıl karar sözcüğün cümledeki görevi ve kurduğu ilişkidir."
          }
        ]
      },
      {
        "title": "Özel ad, sayı ve birleşik sözcükler",
        "source": {
          "book": "TYT-tur",
          "pages": [
            39,
            40,
            41,
            42,
            43,
            44,
            45,
            46,
            47,
            48,
            49,
            50,
            51,
            52,
            53,
            54
          ]
        },
        "explanation": [
          "Özel adlara gelen çekim ekleri genel olarak kesmeyle ayrılır; yapım ekleri ve bunlardan sonraki ekler ayrılmaz. Kurum adlarına gelen eklerde de özel kurallar bulunur. Birleşik sözcüklerde ayrı-bitişik kararı yalnız iki sözcüğün yan yana gelmesine dayanmaz; ses olayı, anlam değişmesi ve yerleşmiş yazım dikkate alınır. Sayıların metindeki görevine göre rakamla veya yazıyla gösterilmesi mümkündür; ekin okunuşu son sesin niteliğine göre belirlenir.",
          "“Ankara’ya” örneğinde özel ada gelen çekim eki kesmeyle ayrılır. Kurum adlarına gelen ekler kesmeyle ayrılmaz: “Türk Dil Kurumuna”. Tarih bildiren “29 Ekim” büyük; “ekim ayında” genel kullanım olduğu için küçük harfle yazılır."
        ],
        "example": {
          "question": "“Ankara’da” ile “Ankaralıların” yazımını karşılaştır.",
          "steps": [
            "Ankara’da eki doğrudan özel ada eklenen bulunma çekimidir.",
            "Ankaralı sözcüğündeki -lı yapım ekidir.",
            "Yapım ekinden sonra çoğul ve tamlayan eki de kesmesiz yazılır."
          ],
          "answer": "Ankara’da kesmeli, Ankaralıların kesmesizdir.",
          "check": "Yapım ekiyle türeyen sözcüklerde sonraki çekimler de kesmeyle ayrılmaz."
        },
        "misconceptions": [
          {
            "wrong": "Özel ad kökenli her sözcük kesmeyle ayrılır.",
            "correct": "Yapım ekiyle türeyen sözcüklerde sonraki çekimler de kesmeyle ayrılmaz.",
            "why": "Ankara’da eki doğrudan özel ada eklenen bulunma çekimidir. Ankaralı sözcüğündeki -lı yapım ekidir. Yapım ekinden sonra çoğul ve tamlayan eki de kesmesiz yazılır."
          }
        ],
        "reasoningChecks": [
          {
            "question": "“2027’de” eki neden de?",
            "answer": "Sayının son bölümü yedi diye okunur; ek, yazılı rakama değil okunuşa uyar.",
            "why": "Yapım ekiyle türeyen sözcüklerde sonraki çekimler de kesmeyle ayrılmaz."
          }
        ]
      }
    ],
    "connections": [
      {
        "concept": "De, ki ve mi için görev çözümlemesi",
        "why": "Çıkarma yardımcı bir denemedir; asıl karar sözcüğün cümledeki görevi ve kurduğu ilişkidir."
      },
      {
        "concept": "Özel ad, sayı ve birleşik sözcükler",
        "why": "Yapım ekiyle türeyen sözcüklerde sonraki çekimler de kesmeyle ayrılmaz."
      }
    ],
    "authorship": "Özgün öğretmen anlatımı ve özgün çözümleme örnekleri; kaynak sayfaları MEBİ kitabına yöneliktir."
  },
  "tur-09": {
    "title": "Noktalama işaretleri",
    "prerequisites": [
      {
        "concept": "Virgülün anlam ve yapı görevi",
        "why": "Noktalama, cümlenin anlam ve söz dizimi ilişkilerine göre seçilir."
      }
    ],
    "goals": [
      "Virgülün anlam ve yapı görevi: Noktalama, cümlenin anlam ve söz dizimi ilişkilerine göre seçilir.",
      "Alıntı, açıklama ve üç nokta: Bütün cümlenin doğrudan soru bildirip bildirmediği denetlenir."
    ],
    "chapters": [
      {
        "title": "Virgülün anlam ve yapı görevi",
        "source": {
          "book": "TYT-tur",
          "pages": [
            55,
            56,
            57,
            58,
            59,
            60,
            61,
            62,
            63,
            64,
            65,
            66
          ]
        },
        "explanation": [
          "Virgül eş görevli sözcükleri, sıralı cümleleri ve ara sözleri ayırabilir. Soluk alınan her yere virgül koymak kural değildir. Özneyle yüklem arasına gereksiz virgül koymak, tamlamayı bölmek veya bağlaçtan önce keyfî durak oluşturmak yapıyı bozar. Noktalı virgül ise özellikle kendi içinde virgüllü grupları birbirinden ayırmada yararlıdır; işaretlerin görevi metnin anlam kümelerini görünür kılmaktır.",
          "Noktalama alternatiflerini değerlendirirken cümlenin hangi parçalarının birbirine ait olduğunu göster. Ara söz çıkarıldığında temel cümle anlamlı kalabilir; iki virgül veya iki kısa çizgi ara sözün sınırlarını belirler. İki nokta sonrasında bağımsız cümle gelirse büyük harfle, yalnız örnek dizisi gelirse uygun sözcükle başlanır; bu karar yalnız işaretin adına göre verilmez. Tırnak içindeki cümlenin noktalamasıyla dış cümlenin kuruluşu ayrı ele alınır. Noktalı virgülün bütün virgüllerden daha uzun bir nefes anlamına geldiğini düşünmek işlevini açıklamaz. Özellikle sıralı cümlelerde özne ve anlam gruplarını ayırma rolü vardır. Yanlış işaret bazen yalnız görünüşü değil, öznenin kim olduğu veya sözün alıntı mı açıklama mı olduğu yorumunu da değiştirir.",
          "Özne ile yüklem arasına yalnız konuşurken durduğun için virgül koyma. “Ve, veya, yahut” bağlaçlarının hemen önüne ve arkasına sırf bağlaç bulunduğu için virgül konmaz. Virgülün işlevini cümlenin yapısına göre gerekçelendir."
        ],
        "example": {
          "question": "“Ali, Ayşe ve Ece; roman, şiir ve deneme okudu.” cümlesinde noktalı virgülün işlevini değerlendir.",
          "steps": [
            "İlk küme kişileri, ikinci küme türleri sıralar.",
            "Her iki kümede kendi iç virgülleri vardır.",
            "Noktalı virgül büyük grupların sınırını belirginleştirir."
          ],
          "answer": "İçinde virgül bulunan iki grup ayrılmıştır.",
          "check": "Noktalama, cümlenin anlam ve söz dizimi ilişkilerine göre seçilir."
        },
        "misconceptions": [
          {
            "wrong": "Virgül yalnız nefes almak için konur.",
            "correct": "Noktalama, cümlenin anlam ve söz dizimi ilişkilerine göre seçilir.",
            "why": "İlk küme kişileri, ikinci küme türleri sıralar. Her iki kümede kendi iç virgülleri vardır. Noktalı virgül büyük grupların sınırını belirginleştirir."
          }
        ],
        "reasoningChecks": [
          {
            "question": "“Güzel, bir ev” yazımı neden uygun değil?",
            "answer": "Sıfatla nitelediği ad arasındaki tamlama ilişkisi gereksiz virgülle bölünmüştür.",
            "why": "Noktalama, cümlenin anlam ve söz dizimi ilişkilerine göre seçilir."
          }
        ]
      },
      {
        "title": "Alıntı, açıklama ve üç nokta",
        "source": {
          "book": "TYT-tur",
          "pages": [
            55,
            56,
            57,
            58,
            59,
            60,
            61,
            62,
            63,
            64,
            65,
            66
          ]
        },
        "explanation": [
          "İki nokta sonrasında açıklama veya örnek beklenir. Tırnak başkasına ait doğrudan sözü veya belirginleştirilen kullanımı sınırlar. Üç nokta eksik bırakılan anlatım, devam eden örnekler veya çıkarılmış bölüm gösterebilir; her duygulu cümleye eklenmez. Soru işareti yüklem biçiminden çok sorunun doğrudan kurulup kurulmadığına bağlıdır: dolaylı soruda bütün cümle soru olmayabilir.",
          "“İhtiyacımız olanlar şunlar: kalem, kâğıt ve cetvel.” cümlesinde iki nokta, duyurulan örnek listesini başlatır. Noktalı virgül ise grupların sınırını görünür kılabilir. İşaretin yalnız şekline değil iki yanındaki yapıların ilişkisine bak."
        ],
        "example": {
          "question": "“Neden gelmediğini bilmiyorum.” cümlesinin sonuna neden soru işareti konmaz?",
          "steps": [
            "Neden sözcüğü yan yapının içinde bir bilinmeyeni gösterir.",
            "Ana yüklem bilmiyorum bir bildirme yargısıdır.",
            "Okura yöneltilmiş doğrudan soru kurulmamıştır."
          ],
          "answer": "Cümle noktayla tamamlanır.",
          "check": "Bütün cümlenin doğrudan soru bildirip bildirmediği denetlenir."
        },
        "misconceptions": [
          {
            "wrong": "Soru sözcüğü geçen her cümle soru işareti alır.",
            "correct": "Bütün cümlenin doğrudan soru bildirip bildirmediği denetlenir.",
            "why": "Neden sözcüğü yan yapının içinde bir bilinmeyeni gösterir. Ana yüklem bilmiyorum bir bildirme yargısıdır. Okura yöneltilmiş doğrudan soru kurulmamıştır."
          }
        ],
        "reasoningChecks": [
          {
            "question": "“Yanında üç şey vardı: defter, kalem, kitap.” iki nokta neden uygundur?",
            "answer": "Önceki genel ifade sonraki örnek listesiyle açıklanır.",
            "why": "Bütün cümlenin doğrudan soru bildirip bildirmediği denetlenir."
          }
        ]
      }
    ],
    "connections": [
      {
        "concept": "Virgülün anlam ve yapı görevi",
        "why": "Noktalama, cümlenin anlam ve söz dizimi ilişkilerine göre seçilir."
      },
      {
        "concept": "Alıntı, açıklama ve üç nokta",
        "why": "Bütün cümlenin doğrudan soru bildirip bildirmediği denetlenir."
      }
    ],
    "authorship": "Özgün öğretmen anlatımı ve özgün çözümleme örnekleri; kaynak sayfaları MEBİ kitabına yöneliktir."
  },
  "tur-10": {
    "title": "Kök, gövde ve ekler",
    "prerequisites": [
      {
        "concept": "Kök ile gövdeyi anlam bağıyla ayırmak",
        "why": "Ayrılan kök, sözcüğün anlamıyla ilişki kurabilen gerçek bir birim olmalıdır."
      }
    ],
    "goals": [
      "Kök ile gövdeyi anlam bağıyla ayırmak: Ayrılan kök, sözcüğün anlamıyla ilişki kurabilen gerçek bir birim olmalıdır.",
      "Yapı sınıflamasında çekim ekinin sınırı: Türemişlik için ek sayısından bağımsız olarak yapım eki gerekir."
    ],
    "chapters": [
      {
        "title": "Kök ile gövdeyi anlam bağıyla ayırmak",
        "source": {
          "book": "TYT-tur",
          "pages": [
            67,
            68,
            69,
            70,
            71,
            72,
            73,
            74,
            75
          ]
        },
        "explanation": [
          "Kök, sözcüğün anlam ve yapı bakımından daha küçük parçalara ayrılamayan temelidir. Görünüşte ortak harfler aynı kökü kanıtlamaz; kökle bütün sözcük arasında anlam ilişkisi bulunmalıdır. Yapım eki yeni anlam veya türde sözcük oluşturarak gövde kurar. Çekim eki ise sözcüğün cümledeki ilişkisini belirler. Eklerin hece sayısı değil görev değişimi sınıflandırmayı belirler.",
          "Eklerin sırası sözcüğün oluşum hikâyesini görünür kılar. Önce kök, ardından yapım ekleriyle oluşan gövde, son olarak çekim ilişkileri incelenir. ‘Bilgisizliğimizden’ sözcüğünde bil- fiilinden bilgi, bilgisiz ve bilgisizlik aşamaları farklı kavramlar kurar; iyelik ve ayrılma ekleri son sözcüğü cümleye bağlar. Bir ekin bir örnekte yapım, başka örnekte farklı görev taşıyabilmesi biçim ezberini sınırlar. İsim ve fiil kökü ayrımında kökün sonuna -mak/-mek getirmenin anlamlı bir eylem kurup kurmadığı yardımcı olabilir; fakat sesteş köklerde anlam bağı yeniden aranmalıdır. Yaz sözcüğü mevsim ve yazma eylemi olarak ayrı anlam kökleriyle kullanılabilir; harf ortaklığı tek bir kök olduğu sonucunu gerektirmez.",
          "“Balık” sözcüğünü “bal + ık” diye ayırmak doğru değildir; bal ile balık arasında bu tür bir türetme ilişkisi yoktur. Kökü belirlerken hem sesleri hem anlam bağını koru. Fiil kökleri “gel-, yaz-”; isim kökleri “taş, su” gibi gösterilebilir."
        ],
        "example": {
          "question": "“Gözlükçüler” sözcüğünü çöz.",
          "steps": [
            "Göz anlam ilişkisi kuran köktür.",
            "Göz+lük araç adı, gözlük+çü meslek adı oluşturur; iki yapım eki vardır.",
            "Çoğul -ler yeni meslek veya nesne üretmez."
          ],
          "answer": "Göz kök; -lük, -çü yapım; -ler çekim ekidir.",
          "check": "Ayrılan kök, sözcüğün anlamıyla ilişki kurabilen gerçek bir birim olmalıdır."
        },
        "misconceptions": [
          {
            "wrong": "En kısa kalan harf dizisi mutlaka köktür.",
            "correct": "Ayrılan kök, sözcüğün anlamıyla ilişki kurabilen gerçek bir birim olmalıdır.",
            "why": "Göz anlam ilişkisi kuran köktür. Göz+lük araç adı, gözlük+çü meslek adı oluşturur; iki yapım eki vardır. Çoğul -ler yeni meslek veya nesne üretmez."
          }
        ],
        "reasoningChecks": [
          {
            "question": "“Balık” sözcüğünde bal kök müdür?",
            "answer": "Hayır; bal ile balık arasında bu türemeyi destekleyen anlam ilişkisi yoktur.",
            "why": "Ayrılan kök, sözcüğün anlamıyla ilişki kurabilen gerçek bir birim olmalıdır."
          }
        ]
      },
      {
        "title": "Yapı sınıflamasında çekim ekinin sınırı",
        "source": {
          "book": "TYT-tur",
          "pages": [
            67,
            68,
            69,
            70,
            71,
            72,
            73,
            74,
            75
          ]
        },
        "explanation": [
          "Basit sözcük yapım eki almamıştır; çekim ekleri onu türemiş yapmaz. Türemiş sözcük en az bir yapım eki taşır. Birleşik sözcük iki ya da daha çok sözcüğün belirli kuralla tek kavram oluşturmasıdır. Birleşme sırasında tür ve anlam değişebilir. Sözcüğün önce yapımını, ardından son çekimini incelemek, “uzun sözcük türemiştir” gibi görsel kestirmeleri engeller.",
          "Yapım eki almamış “evlerimizden” çekim ekleri taşısa da yapı bakımından basittir. “Evli” yapım eki aldığı için türemiştir. “Hanımeli” birden fazla sözcüğün birleşmesiyle oluşur. Ek sayısı tek başına yapı türünü belirlemez."
        ],
        "example": {
          "question": "“Evlerimizden” ile “evsiz” sözcüklerinin yapısını karşılaştır.",
          "steps": [
            "Evlerimizden sözcüğünde çoğul, iyelik ve ayrılma ekleri vardır.",
            "Bu ekler yeni kavram türetmez.",
            "Evsiz sözcüğünde -siz yoksunluk anlamıyla yeni sözcük oluşturur."
          ],
          "answer": "Evlerimizden basit; evsiz türemiştir.",
          "check": "Türemişlik için ek sayısından bağımsız olarak yapım eki gerekir."
        },
        "misconceptions": [
          {
            "wrong": "Çok ek alan sözcük mutlaka türemiştir.",
            "correct": "Türemişlik için ek sayısından bağımsız olarak yapım eki gerekir.",
            "why": "Evlerimizden sözcüğünde çoğul, iyelik ve ayrılma ekleri vardır. Bu ekler yeni kavram türetmez. Evsiz sözcüğünde -siz yoksunluk anlamıyla yeni sözcük oluşturur."
          }
        ],
        "reasoningChecks": [
          {
            "question": "Birleşik sözcük her zaman bitişik mi yazılır?",
            "answer": "Hayır; yazım ile yapı sınıflaması farklı ölçütlerdir.",
            "why": "Türemişlik için ek sayısından bağımsız olarak yapım eki gerekir."
          }
        ]
      }
    ],
    "connections": [
      {
        "concept": "Kök ile gövdeyi anlam bağıyla ayırmak",
        "why": "Ayrılan kök, sözcüğün anlamıyla ilişki kurabilen gerçek bir birim olmalıdır."
      },
      {
        "concept": "Yapı sınıflamasında çekim ekinin sınırı",
        "why": "Türemişlik için ek sayısından bağımsız olarak yapım eki gerekir."
      }
    ],
    "authorship": "Özgün öğretmen anlatımı ve özgün çözümleme örnekleri; kaynak sayfaları MEBİ kitabına yöneliktir."
  },
  "tur-11": {
    "title": "Sözcük türleri: isim ve sıfat",
    "prerequisites": [
      {
        "concept": "İsim ve sıfatı bağlamla ayırmak",
        "why": "Tür, cümlede kurduğu ilişkiye göre belirlenir."
      }
    ],
    "goals": [
      "İsim ve sıfatı bağlamla ayırmak: Tür, cümlede kurduğu ilişkiye göre belirlenir.",
      "Belirtme görevlerinin farkı: Sayı adı belirtiyorsa sıfat, adın yerine kullanılıyorsa zamirleşmiş görev düşünülebilir."
    ],
    "chapters": [
      {
        "title": "İsim ve sıfatı bağlamla ayırmak",
        "source": {
          "book": "TYT-tur",
          "pages": [
            76,
            77,
            78,
            79,
            80,
            81,
            82
          ]
        },
        "explanation": [
          "İsim varlığı veya kavramı karşılar; sıfat bir ismi niteleyip belirtir. Sözcüğün tek başına hangi türden göründüğüne bakmak yetmez. “Genç öğrenci”de genç sıfatken “Gençler salona girdi.” cümlesinde adlaşmış sıfat görevindedir. Soyut-somut ayrımı varlığın duyularla algılanmasına, özel-cins ayrımı adın tekil kimlik veya tür belirtmesine dayanır; bu ölçütler aynı sınıflama değildir.",
          "Sıfatın türünü belirlemek için adla ilişkisini bir soru üzerinden açabilirsin. ‘Nasıl ev?’ nitelemeyi, ‘Hangi ev?’ işareti, ‘Kaç ev?’ sayıyı, ‘Ne kadar ev?’ miktarı sorgular. Ancak soru sözcüğünün kendisi bir varlığın yerine kullanılmışsa artık soru zamiri olabilir. Belgisiz sıfat, belirsizliği her zaman aynı derecede kurmaz: bazı, birkaç ve bütün kapsamı farklı biçimde düzenler. Bir sıfat birden fazla adı ortak niteleyebilir; söz dizimi bu ilişkinin belirsizleşmesine yol açarsa anlamı açıklamak gerekir. Adlaşmış sıfatta düşen adın ne olduğunu bağlamdan bulmak önemlidir. ‘Yaralılar getirildi.’ cümlesinde yaralı insanlar anlaşılır; sözcüğün çekim alması görev değişimini görünür kılar ama tek başına her çekimli sıfat adlaşması değildir.",
          "“Hızlı tren geldi.” cümlesinde hızlı, tren ismini niteler. “Tren hızlı geldi.” cümlesinde ise hızlı, gelme eyleminin nasıl gerçekleştiğini belirtir; zarf olur. Sözcük türü, cümledeki görev değiştiğinde değişebilir."
        ],
        "example": {
          "question": "“Yaşlı kadın konuştu.” ve “Yaşlılar konuştu.” cümlelerinde yaşlıyı incele.",
          "steps": [
            "İlkinde yaşlı, kadın adını niteler.",
            "İkincide nitelenen insan adı düşmüş ve yaşlı sözcüğü onun yerini üstlenmiştir.",
            "Çoğul eki adlaşmış kullanıma eklenebilir."
          ],
          "answer": "İlk kullanım sıfat, ikinci kullanım adlaşmış sıfattır.",
          "check": "Tür, cümlede kurduğu ilişkiye göre belirlenir."
        },
        "misconceptions": [
          {
            "wrong": "Sözcük bir kez sıfatsa başka türde kullanılamaz.",
            "correct": "Tür, cümlede kurduğu ilişkiye göre belirlenir.",
            "why": "İlkinde yaşlı, kadın adını niteler. İkincide nitelenen insan adı düşmüş ve yaşlı sözcüğü onun yerini üstlenmiştir. Çoğul eki adlaşmış kullanıma eklenebilir."
          }
        ],
        "reasoningChecks": [
          {
            "question": "“Sevgi” soyut olduğu için özel ad mıdır?",
            "answer": "Hayır; soyutlukla özel ad olma farklı ölçütlerdir; kişi adı olarak kullanılırsa özel olabilir.",
            "why": "Tür, cümlede kurduğu ilişkiye göre belirlenir."
          }
        ]
      },
      {
        "title": "Belirtme görevlerinin farkı",
        "source": {
          "book": "TYT-tur",
          "pages": [
            76,
            77,
            78,
            79,
            80,
            81,
            82
          ]
        },
        "explanation": [
          "Niteleme sıfatı varlığın nasıl olduğunu; işaret, sayı, belgisiz ve soru sıfatları hangi veya ne kadar olduğunu belirtir. Bir sözcüğün sıfat sayılması için açık ya da bağlamda düşmüş bir adla nitelenme ilişkisi gerekir. Bu kitap ifadesindeki bu işaret sıfatı, “Bu benim.” cümlesinde işaret zamiridir. Sayıların sıra, asıl, üleştirme ve kesir görevlerini nesnelerle kurduğu miktar ilişkisine göre ayır.",
          "“Birkaç öğrenci, bazı günler, her insan” sözlerinde ismi kesin sayı vermeden belirten sözcükler belgisiz sıfattır. “Üç öğrenci” sayı; “üçüncü öğrenci” sıra sayısı bildirir. Tür belirlerken sözcüğün önünde bulunduğu ismi tespit et."
        ],
        "example": {
          "question": "“Üç öğrenciye ikişer kitap verildi.” sözündeki sayıları sınıflandır.",
          "steps": [
            "Üç öğrenci sayısını doğrudan bildirir.",
            "İkişer her bir alıcıya düşen miktarı dağıtır.",
            "Toplam kitap sayısı 3×2=6’dır; iki sayı farklı görev taşır."
          ],
          "answer": "Üç asıl sayı, ikişer üleştirme sıfatıdır.",
          "check": "Sayı adı belirtiyorsa sıfat, adın yerine kullanılıyorsa zamirleşmiş görev düşünülebilir."
        },
        "misconceptions": [
          {
            "wrong": "Önünde sayı bulunan her sözcük zamirdir.",
            "correct": "Sayı adı belirtiyorsa sıfat, adın yerine kullanılıyorsa zamirleşmiş görev düşünülebilir.",
            "why": "Üç öğrenci sayısını doğrudan bildirir. İkişer her bir alıcıya düşen miktarı dağıtır. Toplam kitap sayısı 3×2=6’dır; iki sayı farklı görev taşır."
          }
        ],
        "reasoningChecks": [
          {
            "question": "“Bazı insanlar” ile “bazıları” aynı görevde mi?",
            "answer": "İlki belgisiz sıfat, ikincisi belgisiz zamirdir.",
            "why": "Sayı adı belirtiyorsa sıfat, adın yerine kullanılıyorsa zamirleşmiş görev düşünülebilir."
          }
        ]
      }
    ],
    "connections": [
      {
        "concept": "İsim ve sıfatı bağlamla ayırmak",
        "why": "Tür, cümlede kurduğu ilişkiye göre belirlenir."
      },
      {
        "concept": "Belirtme görevlerinin farkı",
        "why": "Sayı adı belirtiyorsa sıfat, adın yerine kullanılıyorsa zamirleşmiş görev düşünülebilir."
      }
    ],
    "authorship": "Özgün öğretmen anlatımı ve özgün çözümleme örnekleri; kaynak sayfaları MEBİ kitabına yöneliktir."
  },
  "tur-12": {
    "title": "Sözcük türleri: zamir ve zarf",
    "prerequisites": [
      {
        "concept": "Zamirin gösterdiği varlığı bulmak",
        "why": "Gösterdiği varlığın insan olup olmamasına göre görev değişebilir."
      }
    ],
    "goals": [
      "Zamirin gösterdiği varlığı bulmak: Gösterdiği varlığın insan olup olmamasına göre görev değişebilir.",
      "Zarfın değiştirdiği ögeyi sormak: Çekim eki ve söz dizimi de dikkate alınmalıdır."
    ],
    "chapters": [
      {
        "title": "Zamirin gösterdiği varlığı bulmak",
        "source": {
          "book": "TYT-tur",
          "pages": [
            83,
            84,
            85,
            86,
            87,
            91,
            92,
            93,
            94
          ]
        },
        "explanation": [
          "Zamir bir adın yerini tutar; kişi, işaret, belgisizlik, soru veya dönüşlülük ilişkisiyle gönderim kurabilir. Zamirin neyi karşıladığını önceki cümleden bulmak paragrafın anlamını da açar. Onun sözcüğü insanı gösterdiğinde kişi, insan dışı varlığı gösterdiğinde işaret zamiri sayılır. Dönüşlülük zamiri kendi, özneyi pekiştirebilir veya eylemin yine özneye yöneldiğini gösterir.",
          "Belgisiz zamirle belgisiz sıfat arasında da gönderim ilkesi çalışır. ‘Birçoğu geldi.’ cümlesinde çoğu sözcüğü bir grubun üyelerini karşılar; ‘Birçok öğrenci geldi.’ ifadesinde ise öğrenciyi belirtir. İlgi zamiri -ki, daha önce söylenen bir adın tekrarlanmasını önleyebilir: ‘Benim kitabım yeni, seninki eski.’ Yer-yön sözlerinde ek alma durumuna dikkat etmek nesne ve zarfı karıştırmayı önler. ‘İleri git.’ ile ‘İleriyi göremedim.’ örneklerinde ileri ilkinde yön belirten zarf, ikincide belirtme eki alan addır. Miktar zarfının etkilediği birim fiil olmak zorunda değildir: ‘Oldukça sessiz konuştu.’ ifadesinde oldukça, sessiz zarfının derecesini artırır; sözcükler arasındaki etki zinciri ayrı gösterilmelidir.",
          "“Bazı öğrenciler geldi.” cümlesinde bazı sıfattır. “Bazıları geldi.” cümlesinde bazıları ismin yerini tutan belgisiz zamirdir. “Hangi kitabı aldın?” ile “Hangisini aldın?” arasında da aynı görev ayrımı vardır."
        ],
        "example": {
          "question": "“Kitabı Ece’ye verdim. O bunu akşam okuyacak.” cümlelerinde gönderimleri bul.",
          "steps": [
            "O, Ece adının yerine geçer.",
            "Bunu, kitap nesnesine gönderir.",
            "Aynı cümlede iki zamir farklı varlıkları karşılar."
          ],
          "answer": "O kişi, bunu işaret zamiridir.",
          "check": "Gösterdiği varlığın insan olup olmamasına göre görev değişebilir."
        },
        "misconceptions": [
          {
            "wrong": "O sözcüğü her zaman kişi zamiridir.",
            "correct": "Gösterdiği varlığın insan olup olmamasına göre görev değişebilir.",
            "why": "O, Ece adının yerine geçer. Bunu, kitap nesnesine gönderir. Aynı cümlede iki zamir farklı varlıkları karşılar."
          }
        ],
        "reasoningChecks": [
          {
            "question": "“Bu, geçen yıl diktiğimiz ağaç.” cümlesinde bu ne yapıyor?",
            "answer": "Ağacın adının yerine kullanılarak işaret zamiri oluyor.",
            "why": "Gösterdiği varlığın insan olup olmamasına göre görev değişebilir."
          }
        ]
      },
      {
        "title": "Zarfın değiştirdiği ögeyi sormak",
        "source": {
          "book": "TYT-tur",
          "pages": [
            83,
            84,
            85,
            86,
            87,
            91,
            92,
            93,
            94
          ]
        },
        "explanation": [
          "Zarf fiili, fiilimsiyi, sıfatı veya başka bir zarfı durum, zaman, miktar ve soru yönünden etkileyebilir. Bir ismi doğrudan niteleyen sözcük ise sıfattır. Güzel resim ile güzel konuştu örneklerinde aynı sözcük başka ögelere yönelir. Yer-yön sözcükleri yalın biçimde fiili etkiliyorsa zarf olabilir; çekim eki aldıklarında isimleşir ve tümleç görevi üstlenir. Sözcük türü ile cümlenin ögesi ayrı düzlemlerdir.",
          "“Çok dikkatli dinledi.” cümlesinde dikkatli, dinleme işinin durumunu; çok, dikkatli olmanın derecesini belirtir. “Çok insan geldi.” cümlesinde ise çok, insan ismini belirsiz miktarla belirten sıfattır. Bağlandığı sözcüğe bakmadan tür seçme."
        ],
        "example": {
          "question": "“Çocuk yukarı çıktı.” ile “Çocuk yukarıya çıktı.” arasındaki farkı açıkla.",
          "steps": [
            "İlkinde yukarı yalın yer-yön belirtecidir.",
            "İkincide yönelme eki alan yukarıya isim görevine geçer.",
            "İki cümlede de fiziksel yön benzerdir fakat dil bilgisi yapısı farklıdır."
          ],
          "answer": "Yukarı zarf; yukarıya isim görevindedir.",
          "check": "Çekim eki ve söz dizimi de dikkate alınmalıdır."
        },
        "misconceptions": [
          {
            "wrong": "Eyleme yön bildiren her sözcük zarftır.",
            "correct": "Çekim eki ve söz dizimi de dikkate alınmalıdır.",
            "why": "İlkinde yukarı yalın yer-yön belirtecidir. İkincide yönelme eki alan yukarıya isim görevine geçer. İki cümlede de fiziksel yön benzerdir fakat dil bilgisi yapısı farklıdır."
          }
        ],
        "reasoningChecks": [
          {
            "question": "“Çok güzel bir resim”de çok nereyi etkiler?",
            "answer": "Güzel sıfatının derecesini artırır; miktar zarfıdır.",
            "why": "Çekim eki ve söz dizimi de dikkate alınmalıdır."
          }
        ]
      }
    ],
    "connections": [
      {
        "concept": "Zamirin gösterdiği varlığı bulmak",
        "why": "Gösterdiği varlığın insan olup olmamasına göre görev değişebilir."
      },
      {
        "concept": "Zarfın değiştirdiği ögeyi sormak",
        "why": "Çekim eki ve söz dizimi de dikkate alınmalıdır."
      }
    ],
    "authorship": "Özgün öğretmen anlatımı ve özgün çözümleme örnekleri; kaynak sayfaları MEBİ kitabına yöneliktir."
  },
  "tur-13": {
    "title": "Edat, bağlaç ve ünlem",
    "prerequisites": [
      {
        "concept": "Edat ile bağlacın kurduğu ilişki",
        "why": "Araç ilişkisi kurduğunda edat; eş görevli sözleri bağladığında bağlaç olur."
      }
    ],
    "goals": [
      "Edat ile bağlacın kurduğu ilişki: Araç ilişkisi kurduğunda edat; eş görevli sözleri bağladığında bağlaç olur.",
      "Ünlemin duygu ve seslenme işlevi: Noktalama, ünlemin cümledeki şiddetine ve yerine göre seçilir."
    ],
    "chapters": [
      {
        "title": "Edat ile bağlacın kurduğu ilişki",
        "source": {
          "book": "TYT-tur",
          "pages": [
            95,
            96,
            97,
            98
          ]
        },
        "explanation": [
          "Edat tek başına tam bir kavram karşılamak yerine bağlı olduğu sözcükle anlam ilişkisi oluşturur. Bağlaç eş görevli sözcükleri veya yargıları birbirine bağlar. İle sözcüğü araç anlamında edat, ve yerine kullanılabildiğinde bağlaç olabilir. Bir sözcüğün türünü yalnız biçimine göre ezberlemek aynı biçimin görev değişimini kaçırır. Bağlacın cümleden çıkarılması anlam ilişkisini etkileyebilir; bu yüzden çıkarma deneyi tek başına kesin ölçüt değildir.",
          "Küçük görev sözcükleri metnin mantığını güçlü biçimde değiştirir. ‘Çalıştı ve kazandı.’ iki olayı bağlar; ‘Çalıştı ama kazanamadı.’ beklentiyle sonucu karşıtlaştırır. ‘Yalnız’ sözcüğü ‘tek başına’ anlamında kullanıldığında bağlaç değildir; ‘ancak’ da sınırlama veya karşıtlık görevine göre değişebilir. Edat öbekleri cümlenin içinde bir bütün olarak görev alır: ‘Senin için’ yarar/amaç ilişkisini, ‘Sabaha kadar’ zaman sınırını anlatır. Ünlemde seslenilen kişinin adı cümlenin öznesi olmak zorunda değildir; emir yüklemindeki kişiyle ilgili görünse bile seslenme bağımsız unsur sayılabilir. Bu nedenle sözcük türü sorusunda kavramın anlamını, öge sorusunda ise bütün öbeğin yüklemle ilişkisini ayrı çözmek gerekir.",
          "“Gibi, kadar, göre, için” sözcükleri birlikte kullanıldıkları sözlerle benzerlik, ölçü, görelik ve amaç gibi ilişkiler kurabilir. Bağlaçlar ise sözleri veya yargıları birbirine bağlar: “Okudum ama not almadım.” Burada ama karşıtlık ilgisi kurar."
        ],
        "example": {
          "question": "“Kalem ile yazdı.” ve “Kalem ile defteri aldı.” cümlelerini karşılaştır.",
          "steps": [
            "İlk cümlede ile yazma aracını belirtir.",
            "İkincide kalem ve defter eş görevli iki nesnedir.",
            "İkinci ile yerine ve konabilir."
          ],
          "answer": "İlk ile edat, ikinci ile bağlaçtır.",
          "check": "Araç ilişkisi kurduğunda edat; eş görevli sözleri bağladığında bağlaç olur."
        },
        "misconceptions": [
          {
            "wrong": "İle her zaman edattır.",
            "correct": "Araç ilişkisi kurduğunda edat; eş görevli sözleri bağladığında bağlaç olur.",
            "why": "İlk cümlede ile yazma aracını belirtir. İkincide kalem ve defter eş görevli iki nesnedir. İkinci ile yerine ve konabilir."
          }
        ],
        "reasoningChecks": [
          {
            "question": "“Sana göre kolay.” ifadesinde göre neden edat?",
            "answer": "Sana sözcüğüyle bakış açısı ilişkisi kuran bir öbek oluşturur.",
            "why": "Araç ilişkisi kurduğunda edat; eş görevli sözleri bağladığında bağlaç olur."
          }
        ]
      },
      {
        "title": "Ünlemin duygu ve seslenme işlevi",
        "source": {
          "book": "TYT-tur",
          "pages": [
            95,
            96,
            97,
            98
          ]
        },
        "explanation": [
          "Ünlem korku, şaşma, sevinç ve seslenme gibi tepkileri yansıtabilir. Ah, ey ve hey gibi yerleşmiş ünlemlerin yanında bir ad da uygun bağlamda seslenme görevi üstlenebilir. Sözcüğün türü ile noktalama işareti aynı şey değildir; bir ünlem bazen cümlenin içinde virgülle ayrılabilir. Bağlaçların ancak, yalnız, oysa gibi sınırlama veya karşıtlık görevleri de paragrafın sav yapısını değiştirebilir.",
          "İle, “ve” anlamıyla iki eş görevli ögeyi bağlıyorsa bağlaçtır. Araç veya birliktelik ilişkisi kurduğu “Otobüsle geldim.”, “Arkadaşımla yürüdüm.” örneklerinde edattır. Yalnız ayrı ya da bitişik yazılışına göre türünü belirleme."
        ],
        "example": {
          "question": "“Yalnız seni dinledim.” ile “Gelecektim, yalnız işim çıktı.” sözlerinde yalnız nasıl kullanılmış?",
          "steps": [
            "İlkinde yalnız, sadece anlamıyla dinlenen kişinin kapsamını sınırlar.",
            "İkincide fakat anlamıyla iki yargı arasında karşıtlık kurar.",
            "Görev seçimi cümle ilişkisine dayanır."
          ],
          "answer": "İkincide yalnız bağlaçtır.",
          "check": "Noktalama, ünlemin cümledeki şiddetine ve yerine göre seçilir."
        },
        "misconceptions": [
          {
            "wrong": "Ünlem olan her sözcük mutlaka ünlem işareti alır.",
            "correct": "Noktalama, ünlemin cümledeki şiddetine ve yerine göre seçilir.",
            "why": "İlkinde yalnız, sadece anlamıyla dinlenen kişinin kapsamını sınırlar. İkincide fakat anlamıyla iki yargı arasında karşıtlık kurar. Görev seçimi cümle ilişkisine dayanır."
          }
        ],
        "reasoningChecks": [
          {
            "question": "“Hey, buraya bak!” ifadesinde hey ne işe yarar?",
            "answer": "Muhatabın dikkatini çekerek seslenme görevi üstlenir.",
            "why": "Noktalama, ünlemin cümledeki şiddetine ve yerine göre seçilir."
          }
        ]
      }
    ],
    "connections": [
      {
        "concept": "Edat ile bağlacın kurduğu ilişki",
        "why": "Araç ilişkisi kurduğunda edat; eş görevli sözleri bağladığında bağlaç olur."
      },
      {
        "concept": "Ünlemin duygu ve seslenme işlevi",
        "why": "Noktalama, ünlemin cümledeki şiddetine ve yerine göre seçilir."
      }
    ],
    "authorship": "Özgün öğretmen anlatımı ve özgün çözümleme örnekleri; kaynak sayfaları MEBİ kitabına yöneliktir."
  },
  "tur-14": {
    "title": "Fiilde kip ve ek-fiil",
    "prerequisites": [
      {
        "concept": "Kip ile gerçek zamanı ayırmak",
        "why": "Zaman belirteçleri ve konuşma bağlamı ekin işlevini değiştirebilir."
      }
    ],
    "goals": [
      "Kip ile gerçek zamanı ayırmak: Zaman belirteçleri ve konuşma bağlamı ekin işlevini değiştirebilir.",
      "Ek-fiille ad yargısı ve birleşik çekim: Adları yüklem yapmanın yanında çekimli fiillere birleşik zaman da kurar."
    ],
    "chapters": [
      {
        "title": "Kip ile gerçek zamanı ayırmak",
        "source": {
          "book": "TYT-tur",
          "pages": [
            99,
            100,
            101,
            102
          ]
        },
        "explanation": [
          "Çekimli fiil yargıyı kip ve kişiyle kurar. Haber kipleri zaman bildirmeye, dilek kipleri tasarlanan eyleme yönelir. Bir ekin adıyla cümlenin gerçek zamanı her zaman örtüşmez: tarih anlatımında şimdiki zaman eki geçmiş olay için kullanılabilir. Kip kaymasını belirlerken yalnız eki değil zaman belirtecini ve bağlamı birlikte oku. İstek, gereklilik, şart ve emir farklı konuşma amaçları taşır.",
          "Fiilde kişi ekini belirlerken öznenin açık yazılması gerekmez. ‘Okuduk.’ biçimi birinci çoğul kişiyi yüklemde taşır; ancak konuşan grubun kimlerden oluştuğu bağlamdan gelir. Gereklilik kipindeki -malı/-meli de her bağlamda gerçek zorunluluk bildirmez: ‘Şimdi eve varmış olmalı.’ tahmin anlamı taşıyabilir. Dilek-şart eki bazen koşul kurarken bazen istek ifade eder; ‘Bir gelse!’ bir koşul-sonuç düzeninden çok dilektir. Birleşik çekimde zaman katmanlarını sırayla açmak yararlıdır: ‘Gelmişti’ geçmişte öğrenilmiş bir olayı başka geçmiş referansına bağlar. Kip kaymasını saptarken bir sözün hangi ekle kurulduğu ve konuşanın onu hangi zaman veya amaç için kullandığı iki ayrı satırda gösterilebilir.",
          "“Her yaz köye gidiyoruz.” cümlesindeki şimdiki zaman biçimi alışkanlık anlamı taşıyabilir. Kip sorusu eki, zaman anlamı sorusu bağlamı öne çıkarır. Şart kipi bir tasarlama bildirir; her dilek kipini doğrudan zaman adıyla etiketleme."
        ],
        "example": {
          "question": "“Yarın Ankara’ya gidiyorum.” cümlesinin ekini ve anlattığı zamanı belirle.",
          "steps": [
            "Gidiyorum biçiminde -yor şimdiki zaman ekidir.",
            "Yarın belirteci eylemi geleceğe yerleştirir.",
            "Ek ile bağlamın zamanı farklılaşmıştır."
          ],
          "answer": "Şimdiki zaman ekiyle gelecek zaman anlatılmıştır.",
          "check": "Zaman belirteçleri ve konuşma bağlamı ekin işlevini değiştirebilir."
        },
        "misconceptions": [
          {
            "wrong": "Fiilin eki cümlenin gerçek zamanını her zaman tek başına verir.",
            "correct": "Zaman belirteçleri ve konuşma bağlamı ekin işlevini değiştirebilir.",
            "why": "Gidiyorum biçiminde -yor şimdiki zaman ekidir. Yarın belirteci eylemi geleceğe yerleştirir. Ek ile bağlamın zamanı farklılaşmıştır."
          }
        ],
        "reasoningChecks": [
          {
            "question": "“Gelse de konuşsak.” bir gerçekleşmiş olayı mı bildirir?",
            "answer": "Hayır; dilek ve tasarı niteliğindedir.",
            "why": "Zaman belirteçleri ve konuşma bağlamı ekin işlevini değiştirebilir."
          }
        ]
      },
      {
        "title": "Ek-fiille ad yargısı ve birleşik çekim",
        "source": {
          "book": "TYT-tur",
          "pages": [
            99,
            100,
            101,
            102
          ]
        },
        "explanation": [
          "Ek-fiil ad soylu sözcükleri yüklem yapabilir; ayrıca çekimli fiile eklenerek birleşik zaman kurar. “Hastaydı.” bir ad yüklemini geçmişe taşır. “Geliyordu.” sözcüğünde ise gel- fiili, -yor ve ek-fiilin geçmiş biçimiyle birleşik çekimlidir. Ek-fiilin kişi ekiyle karıştırılması çözümlemeyi bozar; önce asıl yargının ad mı fiil mi olduğunu, sonra zaman katmanını belirle.",
          "“Öğrenciydi.” cümlesinde ek-fiil isim soylu sözcüğü yüklem yapar. “Okumuştu.” biçiminde ise çekimli fiile gelerek birleşik zaman kurar. “Okudu” basit zamanlı; “okuyordu” birleşik zamanlıdır. Birleşik zaman ile birleşik yapılı fiil aynı sınıflandırma değildir."
        ],
        "example": {
          "question": "“Öğrenciydim.” ve “Çalışıyordum.” örneklerini çöz.",
          "steps": [
            "Öğrenci adından ek-fiille yüklem kurulmuştur.",
            "Çalış- fiili -yor almış, ardından -du ile geçmişte sürme anlatmıştır.",
            "İki örneğin gövdesi farklı türdedir."
          ],
          "answer": "İlkinde ad yüklem, ikincide şimdiki zamanın hikâyesi vardır.",
          "check": "Adları yüklem yapmanın yanında çekimli fiillere birleşik zaman da kurar."
        },
        "misconceptions": [
          {
            "wrong": "Ek-fiil yalnız adlara gelir.",
            "correct": "Adları yüklem yapmanın yanında çekimli fiillere birleşik zaman da kurar.",
            "why": "Öğrenci adından ek-fiille yüklem kurulmuştur. Çalış- fiili -yor almış, ardından -du ile geçmişte sürme anlatmıştır. İki örneğin gövdesi farklı türdedir."
          }
        ],
        "reasoningChecks": [
          {
            "question": "“Güzelmiş.” fiil köklü müdür?",
            "answer": "Hayır; güzel adına ek-fiilin rivayet biçimi gelmiştir.",
            "why": "Adları yüklem yapmanın yanında çekimli fiillere birleşik zaman da kurar."
          }
        ]
      }
    ],
    "connections": [
      {
        "concept": "Kip ile gerçek zamanı ayırmak",
        "why": "Zaman belirteçleri ve konuşma bağlamı ekin işlevini değiştirebilir."
      },
      {
        "concept": "Ek-fiille ad yargısı ve birleşik çekim",
        "why": "Adları yüklem yapmanın yanında çekimli fiillere birleşik zaman da kurar."
      }
    ],
    "authorship": "Özgün öğretmen anlatımı ve özgün çözümleme örnekleri; kaynak sayfaları MEBİ kitabına yöneliktir."
  },
  "tur-15": {
    "title": "Fiilde yapı ve fiilimsiler",
    "prerequisites": [
      {
        "concept": "Fiilde türeme ile birleşme",
        "why": "-ma/-me olumsuzluk eki yeni sözlük birimi kuran yapım eki gibi değerlendirilmez."
      }
    ],
    "goals": [
      "Fiilde türeme ile birleşme: -ma/-me olumsuzluk eki yeni sözlük birimi kuran yapım eki gibi değerlendirilmez.",
      "Fiilimsiyi çekimli fiilden ayırmak: Nitelenen adla ilişki ve ana yargı kurma görevi denetlenir."
    ],
    "chapters": [
      {
        "title": "Fiilde türeme ile birleşme",
        "source": {
          "book": "TYT-tur",
          "pages": [
            103,
            104,
            105,
            106,
            107
          ]
        },
        "explanation": [
          "Basit fiil yapım eki almamış fiil köküne dayanır. Türemiş fiil ad veya fiil kökünden yapım ekiyle oluşur. Birleşik fiilde birden çok sözcük veya kurallı yapı tek eylem anlamı kurar. Yardımcı fiille kurulan birleşiklerde bitişik-ayrı yazım ses olayına bağlı değişebilir; dil bilgisi yapısı yazımdan bağımsız incelenir. Olumsuzluk eki fiili tek başına türemiş yapmaz.",
          "Fiilimsi ekini bulduktan sonra kurduğu grubun tamamını belirle. ‘Sabah erkenden yola çıkan çocuk’ sözünde çıkan tek başına bir niteleyici olsa da zaman ve yer unsurlarıyla birlikte sıfat-fiil grubunu kurar. Olumsuz fiilimsiye eklenen -ma/-me ile isim-fiil eki aynı görünüşte olabilir; görev ve ek sırası ayrılmalıdır. ‘Okumamak’ biçiminde olumsuzluk ve isim-fiil birlikte bulunur. Kalıcı adlaşmada eylem anlamı silikleşebilir: yiyecek veya dolma bir nesnenin yerleşmiş adı olabilir; fakat aynı biçim başka cümlede eylem niteliğini koruyabilir. Birleşik fiillerde yeterlik, tezlik, sürerlik ve yaklaşma gibi kurallı anlamlar yüklenir. ‘Düşeyazdı’ gerçekleşmiş düşme değil gerçekleşmeye yaklaşma bildirir; eklenen yapı anlamı gerçekten değiştirdiği için çözümde bu katkı açıklanmalıdır.",
          "İsim-fiil ekleri -ma/-me, -mak/-mek, -ış/-iş/-uş/-üş biçimlerindedir. Sıfat-fiil isim niteler; zarf-fiil eylemin durumunu veya zamanını belirtebilir. “Yazma!” cümlesindeki -ma olumsuzluk ekidir; yalnız ekin görünüşünden fiilimsi kararı verme."
        ],
        "example": {
          "question": "“Koştu, suladı, yardım etti.” fiillerini yapı bakımından çöz.",
          "steps": [
            "Koş- kökü yapım eki taşımıyor.",
            "Su adına -la yapım eki gelerek sula- fiili oluşuyor.",
            "Yardım adı ve et- yardımcı fiili tek eylem bildiriyor."
          ],
          "answer": "Sırasıyla basit, türemiş, birleşik fiildir.",
          "check": "-ma/-me olumsuzluk eki yeni sözlük birimi kuran yapım eki gibi değerlendirilmez."
        },
        "misconceptions": [
          {
            "wrong": "Olumsuzluk eki alan fiil türemiştir.",
            "correct": "-ma/-me olumsuzluk eki yeni sözlük birimi kuran yapım eki gibi değerlendirilmez.",
            "why": "Koş- kökü yapım eki taşımıyor. Su adına -la yapım eki gelerek sula- fiili oluşuyor. Yardım adı ve et- yardımcı fiili tek eylem bildiriyor."
          }
        ],
        "reasoningChecks": [
          {
            "question": "“Hissetti” niçin bitişik?",
            "answer": "His+etmek birleşmesinde s türemesi gerçekleşmiştir.",
            "why": "-ma/-me olumsuzluk eki yeni sözlük birimi kuran yapım eki gibi değerlendirilmez."
          }
        ]
      },
      {
        "title": "Fiilimsiyi çekimli fiilden ayırmak",
        "source": {
          "book": "TYT-tur",
          "pages": [
            103,
            104,
            105,
            106,
            107
          ]
        },
        "explanation": [
          "Fiilimsi eylem anlamını taşır ama tek başına kip ve kişiyle ana yargı kurmaz; ad, sıfat veya zarf görevi üstlenir. Aynı ek biçimi farklı görevlerde görülebilir: -acak gelecek zamanlı çekim de sıfat-fiil de yapabilir. Kalıcı adlaşmada ise ek tarihsel olarak fiilimsi kökenli olsa da sözcük artık varlığın yerleşmiş adını karşılar. Fiilimsinin kurduğu söz grubu cümlenin bir ögesi olarak birlikte incelenir.",
          "“Yardım etti.” yardımcı fiille kurulan birleşik fiildir. “Okuyabildi.” yeterlik anlamlı kurallı birleşik fiildir. “Okuyordu.” ise birleşik zamanlı çekimdir; bu, yapı bakımından birleşik fiil olduğunu göstermez. İki ayrı soruya iki ayrı ölçütle cevap ver."
        ],
        "example": {
          "question": "“Gelecek öğrenci kapıda bekliyor.” ile “Öğrenci yarın gelecek.” cümlelerini karşılaştır.",
          "steps": [
            "İlk gelecek öğrenci adını niteler, sıfat-fiildir.",
            "İkinci gelecek cümlenin yüklemi olup zaman ve kişiyle yargı kurar.",
            "Aynı ek görev değiştirmiştir."
          ],
          "answer": "İlk kullanım sıfat-fiil, ikinci çekimli fiildir.",
          "check": "Nitelenen adla ilişki ve ana yargı kurma görevi denetlenir."
        },
        "misconceptions": [
          {
            "wrong": "-acak eki görülen her sözcük sıfat-fiildir.",
            "correct": "Nitelenen adla ilişki ve ana yargı kurma görevi denetlenir.",
            "why": "İlk gelecek öğrenci adını niteler, sıfat-fiildir. İkinci gelecek cümlenin yüklemi olup zaman ve kişiyle yargı kurar. Aynı ek görev değiştirmiştir."
          }
        ],
        "reasoningChecks": [
          {
            "question": "“Koşarak geldi.”de koşarak ne yapar?",
            "answer": "Gelme eyleminin nasıl gerçekleştiğini anlatan zarf-fiildir.",
            "why": "Nitelenen adla ilişki ve ana yargı kurma görevi denetlenir."
          }
        ]
      }
    ],
    "connections": [
      {
        "concept": "Fiilde türeme ile birleşme",
        "why": "-ma/-me olumsuzluk eki yeni sözlük birimi kuran yapım eki gibi değerlendirilmez."
      },
      {
        "concept": "Fiilimsiyi çekimli fiilden ayırmak",
        "why": "Nitelenen adla ilişki ve ana yargı kurma görevi denetlenir."
      }
    ],
    "authorship": "Özgün öğretmen anlatımı ve özgün çözümleme örnekleri; kaynak sayfaları MEBİ kitabına yöneliktir."
  },
  "tur-16": {
    "title": "Fiilde çatı",
    "prerequisites": [
      {
        "concept": "Çatı için özne ve nesne ilişkisini izlemek",
        "why": "Dönüşlü fiillerde özne işi yapar ve etkilenir; ilişki mutlaka incelenmelidir."
      }
    ],
    "goals": [
      "Çatı için özne ve nesne ilişkisini izlemek: Dönüşlü fiillerde özne işi yapar ve etkilenir; ilişki mutlaka incelenmelidir.",
      "Geçişlilik ve ettirgenlik: Nesne alma potansiyeli ile nesnenin o cümlede söylenmiş olması farklıdır."
    ],
    "chapters": [
      {
        "title": "Çatı için özne ve nesne ilişkisini izlemek",
        "source": {
          "book": "TYT-tur",
          "pages": [
            108,
            109,
            110,
            111
          ]
        },
        "explanation": [
          "Çatı fiil yükleminde eylemi kimin yaptığı ve nesnenin etkilenme durumuyla ilgilidir. Etken cümlede özne eylemi yapar; edilgende işi yapan açıkça belirtilmeyebilir, etkilenen öge sözde özne olur. -l/-n eki tek başına edilgenliği kanıtlamaz; aynı ek dönüşlü yapıda da bulunabilir. Önce eylemi yapan ile etkilenenin aynı mı farklı mı olduğunu çözmek gerekir.",
          "İşteşlikte eylemin karşılıklı mı birlikte mi gerçekleştiğine dikkat edilir. ‘Çocuklar bakıştı.’ karşılıklı yöneliş, ‘Kuşlar uçuştu.’ birlikte veya dağınık hareket anlamı taşıyabilir. İşteş ek görünümlü her -ş unsurunu otomatik bu sınıfa almak doğru değildir; sözcüğün kök ve gövde ilişkisi incelenir. Dönüşlü ve edilgen ayrımında aynı biçimin bağlama göre iki yoruma açık olması mümkündür. Soru tek bir anlamı açıkça kuruyorsa o bağlam esas alınır; açık değilse biçim tek başına yeterli kanıt değildir. Geçişlilik denemesinde ‘onu’ sözcüğünü rastgele yerleştirmek yerine fiilin o anlamda gerçekten nesne alıp almadığına bakılır. ‘Koşmak’ bir işi yürütmek anlamında farklı nesne ilişkileri kurabilir; anlam değişmesi çatı değerlendirmesini de etkiler.",
          "Çatı fiil yüklemlerde aranır; “Hava güzeldi.” isim cümlesinde çatı aranmaz. -l/-n ekini görmek tek başına edilgenlik için yeterli değildir. “Ali yıkandı.” dönüşlü; “Çamaşırlar yıkandı.” edilgendir. Öznenin işi yapıp yapmadığını ve işten etkilenmesini değerlendir."
        ],
        "example": {
          "question": "“Ayşe kapıyı açtı.” ve “Kapı açıldı.” cümlelerini karşılaştır.",
          "steps": [
            "İlkinde Ayşe yapan özne, kapı etkilenen nesnedir.",
            "İkincide yapan belirtilmez; kapı sözde özne durumuna geçer.",
            "Yüklemdeki edilgenlik eki bu ilişkiye eşlik eder."
          ],
          "answer": "İlki etken, ikincisi edilgendir.",
          "check": "Dönüşlü fiillerde özne işi yapar ve etkilenir; ilişki mutlaka incelenmelidir."
        },
        "misconceptions": [
          {
            "wrong": "-n eki olan her fiil edilgendir.",
            "correct": "Dönüşlü fiillerde özne işi yapar ve etkilenir; ilişki mutlaka incelenmelidir.",
            "why": "İlkinde Ayşe yapan özne, kapı etkilenen nesnedir. İkincide yapan belirtilmez; kapı sözde özne durumuna geçer. Yüklemdeki edilgenlik eki bu ilişkiye eşlik eder."
          }
        ],
        "reasoningChecks": [
          {
            "question": "“Çocuk yıkandı.” her bağlamda edilgen mi?",
            "answer": "Hayır; kendini yıkadı anlamında dönüşlü, başkası yıkadı bağlamında edilgen yorumlanabilir.",
            "why": "Dönüşlü fiillerde özne işi yapar ve etkilenir; ilişki mutlaka incelenmelidir."
          }
        ]
      },
      {
        "title": "Geçişlilik ve ettirgenlik",
        "source": {
          "book": "TYT-tur",
          "pages": [
            108,
            109,
            110,
            111
          ]
        },
        "explanation": [
          "Geçişli fiil uygun bağlamda belirtili veya belirtisiz nesne alabilir; cümlede nesnenin açıkça yazılı olması şart değildir. Geçişsiz fiile getirilen bazı ekler onu nesne alır duruma getirebilir. Ettirgen yapıda ise özne işi kendisi yapmak yerine başkasına yaptırır veya yapılmasına neden olur. Fiilin kök anlamı, aldığı ek ve cümledeki rol dağılımı birlikte değerlendirilir.",
          "“Bütün akşam okudu.” cümlesinde nesne yazılı değildir ama okumak nesne alabilen geçişli bir fiildir. “Çocuk güldü.” fiili ise doğrudan nesne almaz. Geçişlilik için cümlede mutlaka görünür bir nesne bulunmasını şart koşma."
        ],
        "example": {
          "question": "“Çocuk güldü.”, “Hikâye çocuğu güldürdü.” ve “Evi temizletti.” örneklerini çöz.",
          "steps": [
            "Gül- fiili nesne almaz.",
            "Güldür- birinin gülmesine neden olur ve nesne alabilir.",
            "Temizletti biçiminde temizleme işi başka birine yaptırılır."
          ],
          "answer": "Güldürme oldurgan, temizletme ettirgen ilişki gösterir.",
          "check": "Nesne alma potansiyeli ile nesnenin o cümlede söylenmiş olması farklıdır."
        },
        "misconceptions": [
          {
            "wrong": "Cümlede nesne görünmüyorsa fiil geçişsizdir.",
            "correct": "Nesne alma potansiyeli ile nesnenin o cümlede söylenmiş olması farklıdır.",
            "why": "Gül- fiili nesne almaz. Güldür- birinin gülmesine neden olur ve nesne alabilir. Temizletti biçiminde temizleme işi başka birine yaptırılır."
          }
        ],
        "reasoningChecks": [
          {
            "question": "“Bugün uzun süre okudum.” fiili geçişsiz mi?",
            "answer": "Hayır; neyi okudum sorusuna uygun nesne eklenebilir.",
            "why": "Nesne alma potansiyeli ile nesnenin o cümlede söylenmiş olması farklıdır."
          }
        ]
      }
    ],
    "connections": [
      {
        "concept": "Çatı için özne ve nesne ilişkisini izlemek",
        "why": "Dönüşlü fiillerde özne işi yapar ve etkilenir; ilişki mutlaka incelenmelidir."
      },
      {
        "concept": "Geçişlilik ve ettirgenlik",
        "why": "Nesne alma potansiyeli ile nesnenin o cümlede söylenmiş olması farklıdır."
      }
    ],
    "authorship": "Özgün öğretmen anlatımı ve özgün çözümleme örnekleri; kaynak sayfaları MEBİ kitabına yöneliktir."
  },
  "tur-17": {
    "title": "Cümlenin ögeleri",
    "prerequisites": [
      {
        "concept": "Ögeleri yüklemden hareketle bulmak",
        "why": "Sözcük sırası değişebilir; ögeyi yüklemle kurduğu ilişki belirler."
      }
    ],
    "goals": [
      "Ögeleri yüklemden hareketle bulmak: Sözcük sırası değişebilir; ögeyi yüklemle kurduğu ilişki belirler.",
      "Söz gruplarını parçalamadan okumak: Fiilimsi grubu içinde bulunduğu ögenin bir bileşeni olabilir."
    ],
    "chapters": [
      {
        "title": "Ögeleri yüklemden hareketle bulmak",
        "source": {
          "book": "TYT-tur",
          "pages": [
            112,
            113,
            114,
            115
          ]
        },
        "explanation": [
          "Cümlede ögeleri belirlerken önce yüklemi bütün olarak saptamak gerekir. Birleşik fiili, ad tamlamasını veya deyimleşmiş yüklemi parçalamak diğer ögeleri de yanlış çıkarır. Özneyi yükleme kim/ne; nesneyi kimi/neyi/ne sorularıyla araştırırsın. Sorular ögelerin anlam ilişkisini bulma aracıdır; her kim/ne yanıtı özne olmaz. Edilgen yapı ve yüklemin geçişliliği özellikle denetlenmelidir.",
          "Vurgu ve öge sırası aynı şey değildir. Türkçede yüklemden hemen önceki öge birçok bağlamda vurguyu taşır; ancak bu, öznenin nesneye dönüştüğü anlamına gelmez. Gizli özne yüklemin kişi bilgisinden bulunabilir; edilgen cümlede işi yapanın belirtilmemesiyle gizli özne aynı olay değildir. ‘Kapı açıldı.’ yapısında kapı etkilenen sözde öznedir, açan kişi belirsizdir. Yer tamlayıcısındaki -e/-de/-den biçimleri her kullanımda yer bildirmez; zaman ve durum ilişkileri kurabilir. Öge adı, ekin harfinden değil yüklemle kurulan görevden belirlenir. Sorularda tamlamayı veya deyimi parçalamak en yaygın hatalardandır; ögeyi bir bütün olarak ayırdıktan sonra istenirse kendi iç sözcük türleri ayrıca çözümlenir.",
          "“Kim?” ve “ne?” sorularını özne için yükleme yönelt; nesne ararken özneyi bulduktan sonra neyi, kimi veya ne sorularını kullan. “Cam kırıldı.” cümlesindeki cam nesne değil öznedir. Her “ne?” cevabını otomatik nesne sayma."
        ],
        "example": {
          "question": "“Öğrenciler dün yeni kitabı kütüphanede okudu.” cümlesini çöz.",
          "steps": [
            "Okudu yüklemdir; okuyan öğrenciler öznedir.",
            "Neyi okudu sorusuna yeni kitabı yanıtı belirtili nesnedir.",
            "Dün zaman zarfı; kütüphanede bulunma ilişkili yer tamlayıcısıdır."
          ],
          "answer": "Özne: öğrenciler; nesne: yeni kitabı; zarf: dün; yer tamlayıcısı: kütüphanede.",
          "check": "Sözcük sırası değişebilir; ögeyi yüklemle kurduğu ilişki belirler."
        },
        "misconceptions": [
          {
            "wrong": "Özne her zaman cümlenin ilk sözcüğüdür.",
            "correct": "Sözcük sırası değişebilir; ögeyi yüklemle kurduğu ilişki belirler.",
            "why": "Okudu yüklemdir; okuyan öğrenciler öznedir. Neyi okudu sorusuna yeni kitabı yanıtı belirtili nesnedir. Dün zaman zarfı; kütüphanede bulunma ilişkili yer tamlayıcısıdır."
          }
        ],
        "reasoningChecks": [
          {
            "question": "“Yeni kitabı dün öğrenciler okudu.” cümlesinde özne değişir mi?",
            "answer": "Hayır; yalnız vurgulanan konum değişebilir.",
            "why": "Sözcük sırası değişebilir; ögeyi yüklemle kurduğu ilişki belirler."
          }
        ]
      },
      {
        "title": "Söz gruplarını parçalamadan okumak",
        "source": {
          "book": "TYT-tur",
          "pages": [
            112,
            113,
            114,
            115
          ]
        },
        "explanation": [
          "Bir sıfat tamlaması, isim tamlaması veya fiilimsi grubu tek bir ögenin içinde bütün olarak yer alabilir. “Bahçenin eski kapısını” bir nesne grubudur; bahçenin sözcüğünü bağımsız yer tamlayıcısı saymak yanlıştır. Öge çözümlemesiyle sözcük türü çözümlemesi farklı işlemlerdir. Cümle dışı unsurlar ise yükleme özne, nesne veya tümleç ilişkisiyle bağlanmayan seslenme ve ara sözler olabilir.",
          "“Küçük kızın kırmızı çantası kayboldu.” cümlesinde tamlama bütünü öznedir. “Sabaha kadar çalıştı.” cümlesinde sabaha kadar, bütün hâlinde zarf tümlecidir. Bir sözcüğün ekine bakarak söz grubunu parçalara ayırmak yanlış öge sayısına götürür."
        ],
        "example": {
          "question": "“Kitap okumayı seven çocuklar sessizce içeri girdi.” sözünü ögelere ayır.",
          "steps": [
            "Girdi yüklemdir.",
            "Kitap okumayı seven çocuklar bütünü girenleri belirttiği için öznedir.",
            "Sessizce durum, içeri yalın yer-yön ilişkisiyle zarf tümlecidir."
          ],
          "answer": "Özne grubu bölünmeden alınır.",
          "check": "Fiilimsi grubu içinde bulunduğu ögenin bir bileşeni olabilir."
        },
        "misconceptions": [
          {
            "wrong": "Fiilimsi bulunan her parça ayrı bir cümle ögesidir.",
            "correct": "Fiilimsi grubu içinde bulunduğu ögenin bir bileşeni olabilir.",
            "why": "Girdi yüklemdir. Kitap okumayı seven çocuklar bütünü girenleri belirttiği için öznedir. Sessizce durum, içeri yalın yer-yön ilişkisiyle zarf tümlecidir."
          }
        ],
        "reasoningChecks": [
          {
            "question": "“Ey arkadaşlar, beni dinleyin.”de ey arkadaşlar özne mi?",
            "answer": "Seslenme cümle dışı unsurdur; yüklemin öznesi gizli sizdir.",
            "why": "Fiilimsi grubu içinde bulunduğu ögenin bir bileşeni olabilir."
          }
        ]
      }
    ],
    "connections": [
      {
        "concept": "Ögeleri yüklemden hareketle bulmak",
        "why": "Sözcük sırası değişebilir; ögeyi yüklemle kurduğu ilişki belirler."
      },
      {
        "concept": "Söz gruplarını parçalamadan okumak",
        "why": "Fiilimsi grubu içinde bulunduğu ögenin bir bileşeni olabilir."
      }
    ],
    "authorship": "Özgün öğretmen anlatımı ve özgün çözümleme örnekleri; kaynak sayfaları MEBİ kitabına yöneliktir."
  },
  "tur-18": {
    "title": "İsim ve sıfat tamlamaları",
    "prerequisites": [
      {
        "concept": "İsim tamlamasında aitlik ve tür ilişkisi",
        "why": "İyelikle belirtme eki görev ve söz diziminden ayrılır."
      }
    ],
    "goals": [
      "İsim tamlamasında aitlik ve tür ilişkisi: İyelikle belirtme eki görev ve söz diziminden ayrılır.",
      "Sıfat tamlaması ve zincirleme yapı: Ölçüt sözcük sayısı değil bir isim tamlamasının başka tamlama içinde bulunmasıdır."
    ],
    "chapters": [
      {
        "title": "İsim tamlamasında aitlik ve tür ilişkisi",
        "source": {
          "book": "TYT-tur",
          "pages": [
            88,
            89,
            90
          ]
        },
        "explanation": [
          "Belirtili isim tamlamasında tamlayan ve tamlanan ekleri, iki ad arasındaki ilişkiyi kurar: okulun kapısı. Belirtisiz tamlamada ilk ad yalın, ikinci ad iyelik eki görünümündedir: okul kapısı. Bu yapılar yalnız fiziksel sahiplik değil tür, malzeme ve ilişki bildirebilir. Tamlanan iyelik ekini belirtme durum ekiyle karıştırmamak için sözcüğün başka bir adla bağını ve cümledeki görevini birlikte incele.",
          "Tamlamalarda araya giren sözcükler ilişkiyi koparmayabilir. ‘Öğrencinin dün aldığı kitabı’ sözünde öğrencinin ile kitabı arasında niteleyici grup bulunur; asıl aitlik bağı devam eder. İsim tamlamasında tamlayan bazen düşebilir: ‘Kitabım’ birinci kişiye aitliği ekle bildirir. Tamlayan ve tamlanan ekleri ile durum ekleri art arda gelebilir; ‘kitabını’ biçiminde iyelik ve belirtme görevleri aynı sözcükte bulunabilir. Hangi kişiye ait olduğu kimi cümlelerde bağlamla açıklanır. Tamlamanın türünü belirlerken görünen son harften hareket etmek yerine iki parçayı temel biçime açmak gerekir. Sıfat tamlamasında ise sıfatın kendisi ekli veya birden çok sözcükten oluşabilir; ‘çok iyi hazırlanmış rapor’ bir sıfat-fiil grubuyla adı niteler.",
          "“Bahçenin geniş kapısı” belirtili isim tamlamasıdır; araya sıfat girmiş olması ilişkiyi bozmaz. Bu yapı içinde geniş kapı ayrıca sıfat tamlaması kurar. Bir söz grubunun içinde birden fazla tamlama ilişkisi bulunabilir."
        ],
        "example": {
          "question": "“Çocuğun kitabı masadaydı.” ile “Kitabı masaya koydu.” örneklerinde kitabı sözcüğünü çöz.",
          "steps": [
            "İlk kitabı çocuğun tamlayanına bağlanır; -ı tamlanan ekidir.",
            "İkinci kitabı neyi koydu sorusuna nesne yanıtı verir; -ı belirtme durum ekidir.",
            "Aynı görünüş farklı ilişki kurar."
          ],
          "answer": "İlk -ı iyelik, ikinci -ı belirtme ekidir.",
          "check": "İyelikle belirtme eki görev ve söz diziminden ayrılır."
        },
        "misconceptions": [
          {
            "wrong": "-ı eki görülen her sözcük belirtili nesnedir.",
            "correct": "İyelikle belirtme eki görev ve söz diziminden ayrılır.",
            "why": "İlk kitabı çocuğun tamlayanına bağlanır; -ı tamlanan ekidir. İkinci kitabı neyi koydu sorusuna nesne yanıtı verir; -ı belirtme durum ekidir. Aynı görünüş farklı ilişki kurar."
          }
        ],
        "reasoningChecks": [
          {
            "question": "“Okul kapısı” belirtili mi?",
            "answer": "Hayır; tamlayan ek almadığı için belirtisiz isim tamlamasıdır.",
            "why": "İyelikle belirtme eki görev ve söz diziminden ayrılır."
          }
        ]
      },
      {
        "title": "Sıfat tamlaması ve zincirleme yapı",
        "source": {
          "book": "TYT-tur",
          "pages": [
            88,
            89,
            90
          ]
        },
        "explanation": [
          "Sıfat tamlamasında niteleyen veya belirten sözcük ile ad arasında tamlayan-tamlanan ekleri aranmaz. Zincirleme isim tamlaması ise bir isim tamlamasının başka bir tamlamanın parçası olmasıyla oluşur. Araya giren sıfatlar bütünün yapısını gizleyebilir; önce isimler arasındaki bağlantıyı çizmek, sonra niteleyicileri eklemek daha güvenlidir. Tamlamanın cümlede tek öge olabilmesiyle kendi içindeki sözcük türleri farklı konulardır.",
          "“Okul kapısı” tür ve ilişki bildirir; “okulun kapısı” belirli bir okulla ilişki kurar. “Eski okul” ise sıfat tamlamasıdır; eski, okulun niteliğini bildirir. Soruda önce kelimelerin türünü, sonra tamlayan ve tamlanan eklerini kontrol et."
        ],
        "example": {
          "question": "“Okulun bahçe kapısı” söz grubunun iç bağlantısını göster.",
          "steps": [
            "Bahçe kapısı belirtisiz isim tamlamasıdır.",
            "Bu grup okulun tamlayanına bağlanır.",
            "Bir tamlama başka tamlamanın içinde yer aldığı için zincirleme yapı oluşur."
          ],
          "answer": "Zincirleme isim tamlamasıdır.",
          "check": "Ölçüt sözcük sayısı değil bir isim tamlamasının başka tamlama içinde bulunmasıdır."
        },
        "misconceptions": [
          {
            "wrong": "Üç sözcüklü her grup zincirleme tamlamadır.",
            "correct": "Ölçüt sözcük sayısı değil bir isim tamlamasının başka tamlama içinde bulunmasıdır.",
            "why": "Bahçe kapısı belirtisiz isim tamlamasıdır. Bu grup okulun tamlayanına bağlanır. Bir tamlama başka tamlamanın içinde yer aldığı için zincirleme yapı oluşur."
          }
        ],
        "reasoningChecks": [
          {
            "question": "“Üç güzel kitap” zincirleme mi?",
            "answer": "Hayır; iki sıfat aynı adı belirterek sıfat tamlaması kurar.",
            "why": "Ölçüt sözcük sayısı değil bir isim tamlamasının başka tamlama içinde bulunmasıdır."
          }
        ]
      }
    ],
    "connections": [
      {
        "concept": "İsim tamlamasında aitlik ve tür ilişkisi",
        "why": "İyelikle belirtme eki görev ve söz diziminden ayrılır."
      },
      {
        "concept": "Sıfat tamlaması ve zincirleme yapı",
        "why": "Ölçüt sözcük sayısı değil bir isim tamlamasının başka tamlama içinde bulunmasıdır."
      }
    ],
    "authorship": "Özgün öğretmen anlatımı ve özgün çözümleme örnekleri; kaynak sayfaları MEBİ kitabına yöneliktir."
  },
  "tur-19": {
    "title": "Cümle türleri",
    "prerequisites": [
      {
        "concept": "Bir cümleyi ayrı ölçütlerle sınıflandırmak",
        "why": "Yüklem türünü asıl yargıyı kuran sözcük belirler."
      }
    ],
    "goals": [
      "Bir cümleyi ayrı ölçütlerle sınıflandırmak: Yüklem türünü asıl yargıyı kuran sözcük belirler.",
      "Biçimsel olumsuzlukla anlamı ayırmak: Sözün bağlamdaki iletişim amacı denetlenmelidir."
    ],
    "chapters": [
      {
        "title": "Bir cümleyi ayrı ölçütlerle sınıflandırmak",
        "source": {
          "book": "TYT-tur",
          "pages": [
            116,
            117,
            118
          ]
        },
        "explanation": [
          "Yüklemin türü, yüklemin yeri, anlam ve yapı birbirinden bağımsız sınıflandırmalardır. Bir cümle aynı anda fiil cümlesi, devrik ve olumsuz olabilir. Ad soylu yüklem ek-fiille yargı kurduğunda isim cümlesi oluşur; içinde fiilimsi bulunması onu fiil cümlesi yapmaz. Kurallı-devrik kararı yüklemin son konumda olup olmadığına dayanır; şiirdeki diziliş de aynı ölçütle incelenir.",
          "Anlam bakımından sınıflamada olumluluk, olayın konuşan tarafından onaylanması değildir; yüklemin bildirdiği işin gerçekleşip gerçekleşmemesidir. ‘Kaza oldu.’ olumsuz bir durum anlatsa da dil bilgisi bakımından olumlu yargıdır. Yapı incelemesinde kaç yüklem bulunduğu ile kaç fiilimsi bulunduğu ayrı sayılır. Sıralı cümlede bağımsız yüklemler virgül veya noktalı virgülle bağlanabilir; bağlı cümlede bağlaç ilişkisi öne çıkar. Eksiltili cümlede yüklem bağlamdan tamamlanır; bu, ifadenin hiçbir anlam taşımadığı demek değildir. Sorunun kullandığı sınıflandırma adlarını aynı ölçüt içinde tutmak önemlidir: kurallı-devrik yer, isim-fiil yüklem türü, olumlu-olumsuz anlam eksenindedir. Bir seçeneğin başka eksende doğru olması sorulan eksende doğru yanıt sayılmasını sağlamaz.",
          "Bir cümle aynı anda fiil cümlesi, devrik ve olumsuz olabilir. “Gitmedi dün okula.” örneğinde yüklem gitmedi, tür fiil, yer sondan önce, anlam olumsuzdur. Bir sınıflandırmanın yanıtı diğer sınıflandırmayı kendiliğinden belirlemez."
        ],
        "example": {
          "question": "“Bugün çok yorgundum.” ve “Gelmedi akşamki toplantıya.” cümlelerini sınıflandır.",
          "steps": [
            "Yorgundum ad soylu yüklem olduğu için ilk cümle isim cümlesidir.",
            "İlk yüklem sonda ve olumlu yargılıdır.",
            "İkinci yüklem fiildir, sonda değildir ve gelmeme bildirir."
          ],
          "answer": "İlk: kurallı olumlu isim; ikinci: devrik olumsuz fiil cümlesi.",
          "check": "Yüklem türünü asıl yargıyı kuran sözcük belirler."
        },
        "misconceptions": [
          {
            "wrong": "Fiilimsi içeren cümle mutlaka fiil cümlesidir.",
            "correct": "Yüklem türünü asıl yargıyı kuran sözcük belirler.",
            "why": "Yorgundum ad soylu yüklem olduğu için ilk cümle isim cümlesidir. İlk yüklem sonda ve olumlu yargılıdır. İkinci yüklem fiildir, sonda değildir ve gelmeme bildirir."
          }
        ],
        "reasoningChecks": [
          {
            "question": "“Amacım okumaktı.” niçin isim cümlesi sayılır?",
            "answer": "Fiilimsi ek-fiille ad yüklemi oluşturur.",
            "why": "Yüklem türünü asıl yargıyı kuran sözcük belirler."
          }
        ]
      },
      {
        "title": "Biçimsel olumsuzlukla anlamı ayırmak",
        "source": {
          "book": "TYT-tur",
          "pages": [
            116,
            117,
            118
          ]
        },
        "explanation": [
          "Olumsuzluk eki veya değil bulunması biçimsel bir ipucudur; cümlenin gerçek iletisi bağlamla denetlenir. “Seni anlamıyor değilim.” yapısı anladığını bildirir. Sözde soru da yanıt istemekten çok vurgu veya yadsıma taşıyabilir. Yapı incelemesinde bağlı, sıralı ve fiilimsiyle kurulmuş yan yapıları ayırmak için kaç bağımsız yargı bulunduğuna ve bunların hangi araçla ilişkilendirildiğine bakılır.",
          "“Hava soğuktu.” yüklemi soğuk sözcüğüne ek-fiil gelmesiyle kurulmuştur ve isim cümlesidir. Yapı incelerken yüklemleri ve fiilimsiyle kurulan yan yapıları belirle. “Geldi ve oturdu.” iki yargıyı bağlaçla birleştiren bağlı cümledir."
        ],
        "example": {
          "question": "“Bu iyiliği unutur muyum?” cümlesi bilgi almak mı istiyor?",
          "steps": [
            "Konuşan çoğunlukla unutmayacağını vurgular.",
            "Soru biçimi vardır ama beklenen bilgi yanıtı yoktur.",
            "Anlam, olumsuz bir güvenceye yönelir."
          ],
          "answer": "Biçimce soru, anlamca unutmama vurgusudur.",
          "check": "Sözün bağlamdaki iletişim amacı denetlenmelidir."
        },
        "misconceptions": [
          {
            "wrong": "Soru işareti bulunan her cümle gerçek soru sorar.",
            "correct": "Sözün bağlamdaki iletişim amacı denetlenmelidir.",
            "why": "Konuşan çoğunlukla unutmayacağını vurgular. Soru biçimi vardır ama beklenen bilgi yanıtı yoktur. Anlam, olumsuz bir güvenceye yönelir."
          }
        ],
        "reasoningChecks": [
          {
            "question": "“Ne aradı ne sordu.” olumlu mu?",
            "answer": "Yüklemler olumlu biçimde olsa da ne…ne bağlacı anlamı olumsuz yapar.",
            "why": "Sözün bağlamdaki iletişim amacı denetlenmelidir."
          }
        ]
      }
    ],
    "connections": [
      {
        "concept": "Bir cümleyi ayrı ölçütlerle sınıflandırmak",
        "why": "Yüklem türünü asıl yargıyı kuran sözcük belirler."
      },
      {
        "concept": "Biçimsel olumsuzlukla anlamı ayırmak",
        "why": "Sözün bağlamdaki iletişim amacı denetlenmelidir."
      }
    ],
    "authorship": "Özgün öğretmen anlatımı ve özgün çözümleme örnekleri; kaynak sayfaları MEBİ kitabına yöneliktir."
  },
  "tur-20": {
    "title": "Anlatım bozuklukları",
    "prerequisites": [
      {
        "concept": "Anlam bozukluğunu gerekçesiyle düzeltmek",
        "why": "Anlamı korumak için değiştirme, ekleme veya söz dizimini yeniden kurma gerekebilir."
      }
    ],
    "goals": [
      "Anlam bozukluğunu gerekçesiyle düzeltmek: Anlamı korumak için değiştirme, ekleme veya söz dizimini yeniden kurma gerekebilir.",
      "Özne, nesne ve ek uyumunu denetlemek: Anlamdaki kişi aynı olsa da fiillerin istediği durum ekleri farklı olabilir."
    ],
    "chapters": [
      {
        "title": "Anlam bozukluğunu gerekçesiyle düzeltmek",
        "source": {
          "book": "TYT-tur",
          "pages": [
            119,
            120,
            121,
            122,
            123,
            124,
            125,
            126
          ]
        },
        "explanation": [
          "Gereksiz sözcük, yanlış sözcük seçimi, anlamca çelişen belirteçler ve deyim yanlışlığı anlatımı bozabilir. Düzeltme yalnız daha kısa cümle yazmak değildir; amaçlanan anlam korunmalıdır. Kesinlikle ve galiba gibi farklı kesinlik derecelerinin aynı yargıya bağlanması çelişki doğurabilir. Sıralı bilgilerin mantıksal sırası veya karşılaştırmanın hangi öğeler arasında yapıldığı da açık olmalıdır.",
          "Düzeltme önerisini sınarken iki koşulu birlikte kontrol et: dil bilgisi sorunu giderilmiş mi ve amaçlanan yargı korunmuş mu? Bir sözcüğü silmek cümleyi akıcılaştırsa da önemli karşılaştırmayı ortadan kaldırabilir. Özne ortaklığında her yüklemin aynı özneye gerçekten yüklenip yüklenmediğine bakılır. ‘Herkes geldi, kimse konuşmadı.’ gibi yapılarda kişi ve olumsuzluk ilişkileri ayrı yüklemlerde farklı kurulabilir. Tamlama yanlışında ‘askerî ve devlet okulları’ gibi gruplar sıfat ve isim tamlamasını uygunsuz ortaklaştırabilir; her kol bağımsız açılarak sınanır. Mantık hatalarında en güçlü ölçüt sıralamanın kapsamıdır: ‘Bırakın yürümesini, ayağa bile kalkamıyor.’ ifadesinde zor ve kolay eylem sırası ile beklenti ilişkisinin doğru kurulup kurulmadığı incelenir. Düzeltme, yalnız kulağa iyi gelmeye değil gösterilebilir ilişkiye dayanmalıdır.",
          "Düzeltme, anlatılmak istenen yargıyı korumalıdır. “Geri iade etti.” sözünde iade zaten geri vermeyi içerir. “Yaklaşık yüz kişi kadar” sözünde yaklaşık ya da kadar çıkarılabilir. Gereksizliği, yalnız uzunlukla değil anlam tekrarıyla kanıtla."
        ],
        "example": {
          "question": "“Bu karar kesinlikle doğru olabilir.” cümlesindeki sorunu gider.",
          "steps": [
            "Kesinlikle tam kesinlik, olabilir ihtimal bildirir.",
            "İkisi aynı yargının derecesini uyumsuz kurar.",
            "Amaç kesinlikse olabilir kaldırılır; olasılıksa kesinlikle kaldırılır."
          ],
          "answer": "“Bu karar doğru olabilir.” ya da “Bu karar kesinlikle doğrudur.”",
          "check": "Anlamı korumak için değiştirme, ekleme veya söz dizimini yeniden kurma gerekebilir."
        },
        "misconceptions": [
          {
            "wrong": "Anlatım bozukluğu her zaman bir sözcüğü silerek giderilir.",
            "correct": "Anlamı korumak için değiştirme, ekleme veya söz dizimini yeniden kurma gerekebilir.",
            "why": "Kesinlikle tam kesinlik, olabilir ihtimal bildirir. İkisi aynı yargının derecesini uyumsuz kurar. Amaç kesinlikse olabilir kaldırılır; olasılıksa kesinlikle kaldırılır."
          }
        ],
        "reasoningChecks": [
          {
            "question": "“Geri iade etti.” neden gereksiz?",
            "answer": "İade zaten geri verme anlamını içerir; geri çoğu bağlamda gereksiz tekrardır.",
            "why": "Anlamı korumak için değiştirme, ekleme veya söz dizimini yeniden kurma gerekebilir."
          }
        ]
      },
      {
        "title": "Özne, nesne ve ek uyumunu denetlemek",
        "source": {
          "book": "TYT-tur",
          "pages": [
            119,
            120,
            121,
            122,
            123,
            124,
            125,
            126
          ]
        },
        "explanation": [
          "Yapı bozukluklarında ortak kullanılan ögenin her yükleme uyup uymadığı kontrol edilir. Bir fiil nesne, diğeri yönelme tümleci istiyorsa aynı biçim iki ilişkiyi karşılayamaz. Öznenin kişi ve tekillik-çoğulluk özellikleriyle yüklem uyumu da bağlama göre incelenir. Tamlama ortaklığında tamlananların istediği ekler farklıysa tek bir tamlayan yapıyı taşıyamaz. Önce her yüklemi bağımsız cümleye açmak eksik ögeyi görünür kılar.",
          "“Seni dinliyorum ve güveniyorum.” cümlesinde dinlemek seni nesnesini, güvenmek sana yer tamlayıcısını ister. Doğrusu “Seni dinliyorum ve sana güveniyorum.” olur. Ortak kullanılan ögenin her yüklemin istediği eki ve anlamı karşılayıp karşılamadığını sınayarak ilerle."
        ],
        "example": {
          "question": "“Arkadaşını seviyor ve güveniyordu.” cümlesini düzelt.",
          "steps": [
            "Sevmek kimi sorusuyla arkadaşını nesnesini ister.",
            "Güvenmek kime sorusuyla yönelme biçimini ister.",
            "İkinci yükleme ayrı bir ona ögesi eklenmelidir."
          ],
          "answer": "“Arkadaşını seviyor ve ona güveniyordu.”",
          "check": "Anlamdaki kişi aynı olsa da fiillerin istediği durum ekleri farklı olabilir."
        },
        "misconceptions": [
          {
            "wrong": "İki yüklem aynı kişiyle ilgiliyse aynı ögeyi paylaşabilir.",
            "correct": "Anlamdaki kişi aynı olsa da fiillerin istediği durum ekleri farklı olabilir.",
            "why": "Sevmek kimi sorusuyla arkadaşını nesnesini ister. Güvenmek kime sorusuyla yönelme biçimini ister. İkinci yükleme ayrı bir ona ögesi eklenmelidir."
          }
        ],
        "reasoningChecks": [
          {
            "question": "“Kitabı aldı ve çok beğendi.” ortak nesneli kullanım doğru mu?",
            "answer": "Evet; iki fiil de kitabı biçiminde nesne alabilir.",
            "why": "Anlamdaki kişi aynı olsa da fiillerin istediği durum ekleri farklı olabilir."
          }
        ]
      }
    ],
    "connections": [
      {
        "concept": "Anlam bozukluğunu gerekçesiyle düzeltmek",
        "why": "Anlamı korumak için değiştirme, ekleme veya söz dizimini yeniden kurma gerekebilir."
      },
      {
        "concept": "Özne, nesne ve ek uyumunu denetlemek",
        "why": "Anlamdaki kişi aynı olsa da fiillerin istediği durum ekleri farklı olabilir."
      }
    ],
    "authorship": "Özgün öğretmen anlatımı ve özgün çözümleme örnekleri; kaynak sayfaları MEBİ kitabına yöneliktir."
  },
  "tar-01": {
    "title": "Tarih bilimi",
    "prerequisites": [
      {
        "concept": "Tarih bilgisini kanıtla kurmak",
        "why": "Kaynağa yakınlık ile yazarın amacı ve güvenilirliği farklı ölçütlerdir."
      }
    ],
    "goals": [
      "Tarih bilgisini kanıtla kurmak: Kaynağa yakınlık ile yazarın amacı ve güvenilirliği farklı ölçütlerdir.",
      "Olay, olgu ve dönem koşulları: Zaman sırası nedensellik için yeterli değildir; mekanizma ve başka nedenler araştırılır."
    ],
    "chapters": [
      {
        "title": "Tarih bilgisini kanıtla kurmak",
        "source": {
          "book": "TYT-tar",
          "pages": [
            9,
            10,
            11
          ]
        },
        "explanation": [
          "Tarihçinin nesnesi geçmişteki insan faaliyetidir; fakat geçmişe doğrudan geri dönemez. Belgeler, maddi kalıntılar ve tanıklıklarla bir açıklama kurar. Kaynağın birinci el olması tek başına tarafsızlık sağlamaz: bir hükümdarın kitabesi çağının belgesidir ama hükümdarın meşruiyetini güçlendirmek için seçilmiş bir dil de taşıyabilir. Kaynağın üreticisi, amacı ve diğer belgelerle uyumu birlikte sınanır.",
          "Kanıtın ne söylediğiyle araştırmacının ondan çıkardığı yorumu ayrı cümlelerde yazmak yararlıdır. Bir kazıda yanmış tabaka bulunması yangın kanıtıdır; yangının savaşla mı kazayla mı çıktığı ek bulgu gerektirir. Aynı biçimde para üzerindeki hükümdar adı siyasi egemenlik hakkında ipucu verir ama paranın bulunduğu her yerde sürekli yönetim bulunduğunu tek başına ispatlamaz; ticaret yoluyla taşınmış olabilir. Tarihsel genellemede kanıtın kapsadığı yer ve zaman aşılmamalıdır. Kaynağın yazarı olayın tanığı olsa bile her ayrıntıya erişimi olmayabilir. Bu nedenle doğrulama yalnız iki metinde aynı cümleyi görmek değil, bu metinlerin bağımsız olup olmadığını da araştırmaktır; aynı kaynaktan kopyalanan iki anlatı iki ayrı tanıklık sayılmaz.",
          "Malazgirt Savaşı bir olaydır: belirli bir zamanda gerçekleşir. Anadolu’nun Türkleşmesi ise uzun süreye yayılan bir olgudur. Bir olgu, birden fazla olayın etkisiyle oluşabilir."
        ],
        "example": {
          "question": "Bir fetih kitabesi zaferi hükümdarın tek başarısı sayarken iki mektup müttefik desteği anlatıyor. Nasıl yorumlanır?",
          "steps": [
            "Kitabenin olay zamanına yakınlığı değerlidir.",
            "Meşruiyet amacı vurguyu tek kişiye yöneltmiş olabilir.",
            "Mektuplar karşılaştırılarak destek ilişkisi araştırılır."
          ],
          "answer": "Belgeleri eleştirme ve çapraz doğrulama gerekir.",
          "check": "Kaynağa yakınlık ile yazarın amacı ve güvenilirliği farklı ölçütlerdir."
        },
        "misconceptions": [
          {
            "wrong": "Birinci el kaynak tamamen tarafsızdır.",
            "correct": "Kaynağa yakınlık ile yazarın amacı ve güvenilirliği farklı ölçütlerdir.",
            "why": "Kitabenin olay zamanına yakınlığı değerlidir. Meşruiyet amacı vurguyu tek kişiye yöneltmiş olabilir. Mektuplar karşılaştırılarak destek ilişkisi araştırılır."
          }
        ],
        "reasoningChecks": [
          {
            "question": "Yeni bir arşiv belgesi önceki yorumu değiştirebilir mi?",
            "answer": "Evet; tarihsel açıklama yeni kanıtlarla yeniden kurulabilir.",
            "why": "Kaynağa yakınlık ile yazarın amacı ve güvenilirliği farklı ölçütlerdir."
          }
        ]
      },
      {
        "title": "Olay, olgu ve dönem koşulları",
        "source": {
          "book": "TYT-tar",
          "pages": [
            9,
            10,
            11
          ]
        },
        "explanation": [
          "Bir savaş belirli yer ve zamanda gerçekleşen olaydır; göçlerle bir bölgenin kültürel yapısının dönüşmesi uzun süren olgudur. Tarihsel neden tek bir etkene indirgenmez; ekonomik, siyasi ve kültürel koşullar birlikte etkilidir. Bir uygulamayı yalnız bugünkü kurumlarla yargılamak dönemin seçeneklerini görünmez yapar. Bağlamı kurmak uygulamayı onaylamak değil, neden ve sonuçlarını kendi kanıtlarıyla açıklamaktır.",
          "Geçmişi kendi döneminin koşullarıyla değerlendir. Döneme ait bir belge birinci el kaynaktır; o belgeden yararlanan sonraki bir araştırma ikinci eldir. Kaynak türü, kaynağın mutlaka tarafsız olduğu anlamına gelmez."
        ],
        "example": {
          "question": "Malazgirt Savaşı ile Anadolu’nun Türkleşmesini karşılaştır.",
          "steps": [
            "Savaşın belirli tarihi ve yeri vardır.",
            "Türkleşme çok sayıda göç, yerleşme ve kurumlaşmayla gelişir.",
            "Tek savaş bütün süreci anında tamamlamaz."
          ],
          "answer": "Savaş olay; Türkleşme olgudur.",
          "check": "Zaman sırası nedensellik için yeterli değildir; mekanizma ve başka nedenler araştırılır."
        },
        "misconceptions": [
          {
            "wrong": "Bir olaydan sonra gelen her gelişme yalnız o olayın sonucudur.",
            "correct": "Zaman sırası nedensellik için yeterli değildir; mekanizma ve başka nedenler araştırılır.",
            "why": "Savaşın belirli tarihi ve yeri vardır. Türkleşme çok sayıda göç, yerleşme ve kurumlaşmayla gelişir. Tek savaş bütün süreci anında tamamlamaz."
          }
        ],
        "reasoningChecks": [
          {
            "question": "Tarihte laboratuvar deneyi yapılır mı?",
            "answer": "Geçmiş aynı koşullarla tekrarlanamaz; kanıtlar karşılaştırılarak açıklama sınanır.",
            "why": "Zaman sırası nedensellik için yeterli değildir; mekanizma ve başka nedenler araştırılır."
          }
        ]
      }
    ],
    "connections": [
      {
        "concept": "Tarih bilgisini kanıtla kurmak",
        "why": "Kaynağa yakınlık ile yazarın amacı ve güvenilirliği farklı ölçütlerdir."
      },
      {
        "concept": "Olay, olgu ve dönem koşulları",
        "why": "Zaman sırası nedensellik için yeterli değildir; mekanizma ve başka nedenler araştırılır."
      }
    ],
    "authorship": "Özgün öğretmen anlatımı ve özgün çözümleme örnekleri; kaynak sayfaları MEBİ kitabına yöneliktir."
  },
  "tar-02": {
    "title": "Zamanın taksimi",
    "prerequisites": [
      {
        "concept": "Takvimde başlangıç ve yıl hesabı",
        "why": "Sıfır yılı bulunmadığı için iki yakadaki tarihler toplanıp bir çıkarılır."
      }
    ],
    "goals": [
      "Takvimde başlangıç ve yıl hesabı: Sıfır yılı bulunmadığı için iki yakadaki tarihler toplanıp bir çıkarılır.",
      "Çağ ve yüzyıl sınıflaması: Çağ ayrımları tarih yazımı ölçütlerine dayanır; değişimin bölgesel hızı farklıdır."
    ],
    "chapters": [
      {
        "title": "Takvimde başlangıç ve yıl hesabı",
        "source": {
          "book": "TYT-tar",
          "pages": [
            12,
            13
          ]
        },
        "explanation": [
          "Takvimler zamanı bölümlere ayırır; başlangıç olayı ve yılın astronomik dayanağı değişebilir. Güneş yılı ile ay yılı aynı uzunlukta olmadığı için iki takvimde aynı yıl numarası aynı süreyi göstermez. Milattan önce tarihler bugüne yaklaştıkça küçülür. Milattan önce ve sonraki bir tarih arasını hesaplarken sıfır yılı bulunmadığına dikkat edilir; sayıları mekanik toplamak bir yıl hata üretebilir.",
          "Tarih dönüştürmede başlangıç yılı kadar yılın uzunluğu ve ayların düzeni de önemlidir. Hicri yıl ay hareketlerine dayandığı için güneş yılına göre daha kısa sürer; aynı dinî ayın farklı mevsimlere gelmesi bu farkla ilişkilidir. Rumi takvimle Hicri takvimin başlangıç bağlantısı bulunması onların bütün hesap kurallarının aynı olduğu anlamına gelmez. Yüzyılın çeyrekleri de 25 yıllık aralıklarla kurulur; 1401–1425 birinci, 1426–1450 ikinci, 1451–1475 üçüncü, 1476–1500 dördüncü çeyrektir. MÖ tarihlerinde kronolojik yönü yeniden düşünmek gerekir. Bir zaman çizgisinde okla bugüne doğru ilerlemek, sayısal büyüklükle eskiliği karıştırmayı engeller. Çağların adlarını öğrenirken seçilen başlangıç olayının hangi toplumların tarih yazımında belirleyici olduğunu ayrıca belirtmek gerekir.",
          "Güneş yılı Dünya’nın Güneş çevresindeki dolanımına, ay yılı Ay’ın evrelerinin döngüsüne dayanır. Hicri takvim ay yılı; Miladi takvim güneş yılı esaslıdır. Hicri takvimin başlangıç olayı hicrettir."
        ],
        "example": {
          "question": "MÖ 200 ile MS 100 arasında kaç yıl vardır?",
          "steps": [
            "MÖ 200’den MÖ 1’e 199 yıl vardır.",
            "MÖ 1’den MS 1’e 1 yıl geçer.",
            "MS 1’den MS 100’e 99 yıl eklenir."
          ],
          "answer": "299 yıl vardır.",
          "check": "Sıfır yılı bulunmadığı için iki yakadaki tarihler toplanıp bir çıkarılır."
        },
        "misconceptions": [
          {
            "wrong": "MÖ ve MS tarihleri arasındaki fark her zaman sayıların toplamıdır.",
            "correct": "Sıfır yılı bulunmadığı için iki yakadaki tarihler toplanıp bir çıkarılır.",
            "why": "MÖ 200’den MÖ 1’e 199 yıl vardır. MÖ 1’den MS 1’e 1 yıl geçer. MS 1’den MS 100’e 99 yıl eklenir."
          }
        ],
        "reasoningChecks": [
          {
            "question": "MÖ 500 mü MÖ 300 mü daha eskidir?",
            "answer": "MÖ 500; milattan önce büyük sayı daha uzak geçmişi gösterir.",
            "why": "Sıfır yılı bulunmadığı için iki yakadaki tarihler toplanıp bir çıkarılır."
          }
        ]
      },
      {
        "title": "Çağ ve yüzyıl sınıflaması",
        "source": {
          "book": "TYT-tar",
          "pages": [
            12,
            13
          ]
        },
        "explanation": [
          "Yüzyıl olayları zaman dilimlerine yerleştirir, çağ ayrımı ise seçilen dönüşüm ölçütlerine dayanır. Çağları başlatan olaylar bütün bölgelerde aynı etkiyi aynı tarihte göstermemiştir. Yazının ortaya çıkışı araştırmacı için kaynak türlerini değiştirir; yazıyı daha geç kullanan bir toplumun bütün özellikleri bu yüzden geri veya ileri diye derecelendirilemez. Dönemleme açıklama aracıdır, geçmiş üzerindeki evrensel sınır çizgisi değildir.",
          "Yazının kullanımı tarih öncesi ile tarihî çağların ayrımında ölçüt alınır. Ancak yazı her toplumda aynı anda başlamamıştır. Çağ sınırları bütün toplumların aynı gelişim çizgisini izlediğini göstermez."
        ],
        "example": {
          "question": "1453 hangi yüzyılın hangi yarısındadır?",
          "steps": [
            "1401–1500 aralığı 15. yüzyıldır.",
            "1453, 1451–1500 aralığındadır.",
            "Bu aralık ikinci yarıdır."
          ],
          "answer": "15. yüzyılın ikinci yarısıdır.",
          "check": "Çağ ayrımları tarih yazımı ölçütlerine dayanır; değişimin bölgesel hızı farklıdır."
        },
        "misconceptions": [
          {
            "wrong": "1453 bütün toplumları aynı anda yeni çağa sokmuştur.",
            "correct": "Çağ ayrımları tarih yazımı ölçütlerine dayanır; değişimin bölgesel hızı farklıdır.",
            "why": "1401–1500 aralığı 15. yüzyıldır. 1453, 1451–1500 aralığındadır. Bu aralık ikinci yarıdır."
          }
        ],
        "reasoningChecks": [
          {
            "question": "1500 ile 1501 aynı yüzyılda mı?",
            "answer": "Hayır; 1500 15.,1501 16. yüzyıldadır.",
            "why": "Çağ ayrımları tarih yazımı ölçütlerine dayanır; değişimin bölgesel hızı farklıdır."
          }
        ]
      }
    ],
    "connections": [
      {
        "concept": "Takvimde başlangıç ve yıl hesabı",
        "why": "Sıfır yılı bulunmadığı için iki yakadaki tarihler toplanıp bir çıkarılır."
      },
      {
        "concept": "Çağ ve yüzyıl sınıflaması",
        "why": "Çağ ayrımları tarih yazımı ölçütlerine dayanır; değişimin bölgesel hızı farklıdır."
      }
    ],
    "authorship": "Özgün öğretmen anlatımı ve özgün çözümleme örnekleri; kaynak sayfaları MEBİ kitabına yöneliktir."
  },
  "tar-03": {
    "title": "İlk Türk devletleri",
    "prerequisites": [
      {
        "concept": "Bozkır yaşamından siyasi örgütlenmeye",
        "why": "Hareketli yaşam içinde örgütlenme ve töre gibi kurallar bulunabilir."
      }
    ],
    "goals": [
      "Bozkır yaşamından siyasi örgütlenmeye: Hareketli yaşam içinde örgütlenme ve töre gibi kurallar bulunabilir.",
      "Göçlerin çok katmanlı sonuçları: Dış baskıyla iç siyasi, askerî ve ekonomik koşullar birlikte değerlendirilir."
    ],
    "chapters": [
      {
        "title": "Bozkır yaşamından siyasi örgütlenmeye",
        "source": {
          "book": "TYT-tar",
          "pages": [
            14,
            15,
            16,
            17,
            18,
            19,
            20,
            21,
            22,
            23,
            24,
            25,
            26,
            27
          ]
        },
        "explanation": [
          "Bozkırın otlak ve su koşulları hayvancılığa ve mevsimlik hareketliliğe uygun yaşam oluşturdu. Bu, bütün Türk topluluklarının aynı ekonomik faaliyeti yaptığı anlamına gelmez; şehir ve tarım çevreleriyle ticaret de önemlidir. Aile, urug, boy ve bodun siyasi birliğin toplumsal tabanıdır. Töre düzeni, kurultay danışmayı, kut ise hükümdarlığın meşruiyetini açıklar; bu kavramlar eş anlamlı değildir.",
          "Bozkır toplumlarında atın ve hareketliliğin önemini yalnız savaş tekniğine indirgememek gerekir. Uzak alanlar arasında haberleşme, sürü yönetimi, ticaret ve siyasi kontrol de ulaşım kapasitesinden etkilenir. İpek Yolu üzerindeki hâkimiyet vergi ve gelir yanında başka kültürlerle teması artırabilir; yolun bir kesimini denetlemek bütün güzergâhın sürekli tek devlet elinde olduğu anlamına gelmez. Hanedan üyelerinin yönetimde rol alması geniş sahada denetimi kolaylaştırırken veraset anlaşmazlıklarına alan açabilir. Bir kurumun aynı anda güçlü ve zayıf sonuçlar taşıması tarihsel açıklamada çelişki değildir. Uygurları ele alırken yerleşik hayat, din değişikliği, yazı ve üretimi ilişkilendir; tek bir din değişiminin bütün ekonomik dönüşümü tek başına yarattığını varsayma.",
          "Kut anlayışı hükümdarlığı meşrulaştırır. Ülkenin hanedan üyelerinin ortak malı sayılması ise taht mücadelelerine zemin hazırlayabilir. Bu iki kavram birbirine bağlıdır ama aynı şey değildir."
        ],
        "example": {
          "question": "Kağanın töreye uyması, kurultayla görüşmesi ve kut sahibi sayılması hangi sorunlara karşılık verir?",
          "steps": [
            "Töre yönetimin kurallarını belirler.",
            "Kurultay danışma alanıdır.",
            "Kut hükmetme yetkisinin meşruiyetiyle ilgilidir."
          ],
          "answer": "Kural, danışma ve meşruiyet ayrı boyutlardır.",
          "check": "Hareketli yaşam içinde örgütlenme ve töre gibi kurallar bulunabilir."
        },
        "misconceptions": [
          {
            "wrong": "Konargöçer yaşam devlet ve hukuk düzeni olmadığını gösterir.",
            "correct": "Hareketli yaşam içinde örgütlenme ve töre gibi kurallar bulunabilir.",
            "why": "Töre yönetimin kurallarını belirler. Kurultay danışma alanıdır. Kut hükmetme yetkisinin meşruiyetiyle ilgilidir."
          }
        ],
        "reasoningChecks": [
          {
            "question": "İkili teşkilat birliği neden zorlayabilir?",
            "answer": "İş bölümü sağlarken hanedan üyelerinin ayrı güç alanları oluşturmasına zemin hazırlayabilir.",
            "why": "Hareketli yaşam içinde örgütlenme ve töre gibi kurallar bulunabilir."
          }
        ]
      },
      {
        "title": "Göçlerin çok katmanlı sonuçları",
        "source": {
          "book": "TYT-tar",
          "pages": [
            14,
            15,
            16,
            17,
            18,
            19,
            20,
            21,
            22,
            23,
            24,
            25,
            26,
            27
          ]
        },
        "explanation": [
          "Kavimler Göçü tek topluluğun yer değiştirmesi değil birbirini etkileyen hareketler ve siyasi dönüşümler sürecidir. Nüfus baskısı, otlak arayışı, siyasi mücadele ve güvenlik nedenleri birlikte incelenir. Roma dünyasının dönüşümüyle ilişki kurarken göçleri tek neden saymamak gerekir; iç siyasi ve ekonomik sorunlar da etkiliydi. Göçler askerî yöntem, dil ve kültür etkileşimini de hızlandırdı.",
          "Göçler kültürel etkileşim, siyasi dengelerin değişmesi ve Türk tarihinin farklı coğrafyalarda incelenmesi gibi sonuçlar doğurmuştur. Kavimler Göçü Avrupa’daki siyasi ve toplumsal değişimleri hızlandıran süreçlerden biridir."
        ],
        "example": {
          "question": "Bir grubun komşu grubu batıya itmesi nasıl zincirleme etki yaratır?",
          "steps": [
            "İlk hareket komşunun güvenlik koşullarını değiştirir.",
            "İkinci grup yeni alan aradığında başka sınırlar etkilenir.",
            "Sonuç ilk grubun ulaşmadığı alanlara yayılır."
          ],
          "answer": "Göç birbirine bağlı yer değiştirmeler doğurabilir.",
          "check": "Dış baskıyla iç siyasi, askerî ve ekonomik koşullar birlikte değerlendirilir."
        },
        "misconceptions": [
          {
            "wrong": "Bir devletin yıkılışı yalnız dış göçlerle açıklanır.",
            "correct": "Dış baskıyla iç siyasi, askerî ve ekonomik koşullar birlikte değerlendirilir.",
            "why": "İlk hareket komşunun güvenlik koşullarını değiştirir. İkinci grup yeni alan aradığında başka sınırlar etkilenir. Sonuç ilk grubun ulaşmadığı alanlara yayılır."
          }
        ],
        "reasoningChecks": [
          {
            "question": "Uygurlarda yerleşiklik neden sanatla ilişkilendirilir?",
            "answer": "Kentleşme üretim ve kurumların sürekliliğine yeni zeminler sağlamıştır.",
            "why": "Dış baskıyla iç siyasi, askerî ve ekonomik koşullar birlikte değerlendirilir."
          }
        ]
      }
    ],
    "connections": [
      {
        "concept": "Bozkır yaşamından siyasi örgütlenmeye",
        "why": "Hareketli yaşam içinde örgütlenme ve töre gibi kurallar bulunabilir."
      },
      {
        "concept": "Göçlerin çok katmanlı sonuçları",
        "why": "Dış baskıyla iç siyasi, askerî ve ekonomik koşullar birlikte değerlendirilir."
      }
    ],
    "authorship": "Özgün öğretmen anlatımı ve özgün çözümleme örnekleri; kaynak sayfaları MEBİ kitabına yöneliktir."
  },
  "tar-04": {
    "title": "İslam tarihi",
    "prerequisites": [
      {
        "concept": "İslam toplumunun kuruluşunu kurumlarla okumak",
        "why": "Siyasi egemenlik ve dinî-kültürel değişim farklı süreçlerdir."
      }
    ],
    "goals": [
      "İslam toplumunun kuruluşunu kurumlarla okumak: Siyasi egemenlik ve dinî-kültürel değişim farklı süreçlerdir.",
      "Emevi ve Abbasi siyasetini karşılaştırmak: Çeviri önceki birikimin aktarılması ve geliştirilmesini içerir."
    ],
    "chapters": [
      {
        "title": "İslam toplumunun kuruluşunu kurumlarla okumak",
        "source": {
          "book": "TYT-tar",
          "pages": [
            28,
            29,
            30,
            31,
            32,
            33,
            34,
            35,
            36,
            37
          ]
        },
        "explanation": [
          "İslam’ın ortaya çıktığı Arabistan’da kabile bağları, ticaret yolları ve farklı dinî topluluklar bulunuyordu. Hicret yalnız yer değiştirme değil Medine’de yeni siyasi ve toplumsal ilişkilerin kurulması bakımından dönüm noktasıdır. Kardeşlik uygulamaları toplumsal dayanışmaya yönelir. Fetihlerin dinin yayılmasıyla ilişkisi olsa da siyasi hâkimiyetin kurulmasıyla halkın inanç değiştirmesi aynı hızda ve mekanizmayla gerçekleşmez.",
          "Emevi ve Abbasi karşılaştırmasında önce sabit ölçüt seçilir: halifeliğin aktarımı, farklı toplulukların katılımı, bilim faaliyetleri veya siyasi merkez. Ölçüt değiştirerek bir dönemi yalnız başarısıyla diğerini yalnız sorunuyla karşılaştırmak adil açıklama üretmez. İslam dünyasındaki bilimsel faaliyetlerde kâğıt, çeviri, şehirleşme ve destek kurumları birlikte rol oynar. Bir eserin çevrilmesi içeriğinin eleştirilmeden benimsendiği anlamına gelmez; yeni hesaplar ve yorumlar önceki birikimi değiştirebilir. Türklerin Abbasi ordusundaki etkisi de bütün Türk topluluklarının aynı siyasi birime katıldığı demek değildir. Bir gruba dair kanıtı bütün topluluğa genişletmemek, hem savaş hem kültürel etkileşim sorularında temel ilkedir. İslamlaşma, Araplaşma ve siyasi itaat farklı kavramlardır; her biri ayrı kanıt ister.",
          "Emevilerle birlikte halifeliğin babadan oğula geçmesi, yönetimin saltanat niteliği kazanmasını gösterir. Fetih yapılması ise tek başına yönetimin hangi yolla el değiştirdiğini açıklamaz."
        ],
        "example": {
          "question": "Hicretin toplum düzeni bakımından önemini açıkla.",
          "steps": [
            "Göç güvenlik alanını değiştirir.",
            "Yeni toplulukta dayanışma ve yönetim ilişkileri kurulur.",
            "Yer değişikliğinin siyasi-toplumsal sonucu değerlendirilir."
          ],
          "answer": "Hicret yeni örgütlenmenin gelişmesini sağlamıştır.",
          "check": "Siyasi egemenlik ve dinî-kültürel değişim farklı süreçlerdir."
        },
        "misconceptions": [
          {
            "wrong": "Fethedilen yerde herkes hemen aynı dini benimser.",
            "correct": "Siyasi egemenlik ve dinî-kültürel değişim farklı süreçlerdir.",
            "why": "Göç güvenlik alanını değiştirir. Yeni toplulukta dayanışma ve yönetim ilişkileri kurulur. Yer değişikliğinin siyasi-toplumsal sonucu değerlendirilir."
          }
        ],
        "reasoningChecks": [
          {
            "question": "Dört Halife Dönemi’nde seçim neyi gösterir?",
            "answer": "Yönetimin aktarılmasında hanedan verasetinden farklı yöntemler kullanılmıştır.",
            "why": "Siyasi egemenlik ve dinî-kültürel değişim farklı süreçlerdir."
          }
        ]
      },
      {
        "title": "Emevi ve Abbasi siyasetini karşılaştırmak",
        "source": {
          "book": "TYT-tar",
          "pages": [
            28,
            29,
            30,
            31,
            32,
            33,
            34,
            35,
            36,
            37
          ]
        },
        "explanation": [
          "Emevilerde halifeliğin hanedan içinde aktarılması ve Arap üstünlüğünü öne çıkaran uygulamalar tepkiler doğurdu. Abbasilerde farklı toplulukların devlet ve bilim hayatına katılımı genişledi; Türklerin askerî ve idari etkisi arttı. İki dönemi iyi-kötü karşıtlığı yerine yönetim, katılım ve kültür alanlarında ayrı karşılaştırmak gerekir. Çeviri faaliyetleri farklı medeniyetlerin birikimini yeniden işleyerek bilimsel gelişmeye katkı sundu.",
          "Abbasiler döneminde Bağdat önemli bir bilim ve kültür merkezi oldu. Farklı uygarlıkların eserlerinin çevrilmesi, bilimsel birikimin aktarılmasına ve yeni çalışmaların gelişmesine katkı sağladı."
        ],
        "example": {
          "question": "Bir dönemde farklı topluluklar daha çok devlet görevi alıyorsa ne çıkar?",
          "steps": [
            "Katılım alanı genişlemektedir.",
            "Bu bilgi bütün alanlarda tam eşitliği kanıtlamaz.",
            "Kadrolaşmayla toplumsal yapının tümü ayrı değerlendirilir."
          ],
          "answer": "Yönetimde çok topluluklu katılım artmıştır.",
          "check": "Çeviri önceki birikimin aktarılması ve geliştirilmesini içerir."
        },
        "misconceptions": [
          {
            "wrong": "Bilim geliştiğine göre önceki uygarlıkların etkisi yoktur.",
            "correct": "Çeviri önceki birikimin aktarılması ve geliştirilmesini içerir.",
            "why": "Katılım alanı genişlemektedir. Bu bilgi bütün alanlarda tam eşitliği kanıtlamaz. Kadrolaşmayla toplumsal yapının tümü ayrı değerlendirilir."
          }
        ],
        "reasoningChecks": [
          {
            "question": "Talas bütün Türklerin aynı gün Müslüman olduğunu gösterir mi?",
            "answer": "Hayır; yakınlaşma uzun süren temasların bir etkenidir.",
            "why": "Çeviri önceki birikimin aktarılması ve geliştirilmesini içerir."
          }
        ]
      }
    ],
    "connections": [
      {
        "concept": "İslam toplumunun kuruluşunu kurumlarla okumak",
        "why": "Siyasi egemenlik ve dinî-kültürel değişim farklı süreçlerdir."
      },
      {
        "concept": "Emevi ve Abbasi siyasetini karşılaştırmak",
        "why": "Çeviri önceki birikimin aktarılması ve geliştirilmesini içerir."
      }
    ],
    "authorship": "Özgün öğretmen anlatımı ve özgün çözümleme örnekleri; kaynak sayfaları MEBİ kitabına yöneliktir."
  },
  "tar-05": {
    "title": "Türk-İslam devletleri",
    "prerequisites": [
      {
        "concept": "Kabul sürecinde süreklilik ve değişim",
        "why": "Yeni inanç, geleneklerle etkileşerek kademeli dönüşüm yaratabilir."
      }
    ],
    "goals": [
      "Kabul sürecinde süreklilik ve değişim: Yeni inanç, geleneklerle etkileşerek kademeli dönüşüm yaratabilir.",
      "Selçuklu kurumlarının iş bölümü: Gelirden yararlanma ve mülkiyet hakkı ayrılmalıdır."
    ],
    "chapters": [
      {
        "title": "Kabul sürecinde süreklilik ve değişim",
        "source": {
          "book": "TYT-tar",
          "pages": [
            38,
            39,
            40,
            41,
            42,
            43,
            44,
            45,
            46
          ]
        },
        "explanation": [
          "Türklerin İslamiyet’i kabulü askerî, ticari ve kültürel ilişkiler içinde yüzyıllara yayıldı. İnanç benzerlikleri yakınlaşmayı kolaylaştırmış olabilir; fakat ekonomik ve siyasi ilişkileri dışlamaz. Yeni din kabul edilirken devlet geleneğinin bütün unsurları bir anda ortadan kalkmadı. Kut, töre ve hükümdarlık gelenekleri yeni meşruiyet kavramlarıyla yeniden yorumlandı; sentez yeni kurumlaşmalar üretti.",
          "Türk-İslam devletlerinde dil ve kurum örnekleri sentezin nasıl işlediğini somutlaştırır. Yönetim ve bilim çevrelerinde farklı diller kullanılabilir; bu durum toplumun gündelik dilinin bütünüyle değiştiğini tek başına göstermez. Kutadgu Bilig gibi eserler siyaset, ahlak ve yönetim arasındaki ilişkiyi ortaya koyarken yalnız edebî biçimiyle değil ortaya çıktığı ihtiyaçla da okunabilir. İkta ile ücretli askerlik aynı finansman yöntemi değildir; birinde belirli gelir alanı hizmete bağlanır. Medresenin devlet desteği alması her düşünürün aynı görüşü savunduğunu kanıtlamaz; kurumla düşünce içeriği ayrıdır. Atabeylikte yetiştirme görevinin siyasi güce dönüşebilmesi, merkez-taşra ilişkilerinin değişimini gösterir. Bu nedenle kurum sorularında yalnız tanım değil kim, hangi kaynakla, hangi yetkiyi kullanıyor soruları cevaplanmalıdır.",
          "Türk-İslam devletlerinde eski Türk yönetim gelenekleri İslami kurumlarla birlikte yaşadı. Kut anlayışı devam ederken sultan, medrese ve vezirlik gibi kavram ve kurumlar da belirginleşti."
        ],
        "example": {
          "question": "Hükümdarın hem eski Türk hem İslami unvan kullanması ne gösterir?",
          "steps": [
            "İki meşruiyet kaynağı birlikte kullanılır.",
            "Eski gelenek bütünüyle silinmemiştir.",
            "Yeni çerçeveyle yönetim yeniden biçimlenir."
          ],
          "answer": "Süreklilik ve değişim birlikte görülür.",
          "check": "Yeni inanç, geleneklerle etkileşerek kademeli dönüşüm yaratabilir."
        },
        "misconceptions": [
          {
            "wrong": "Din değişince önceki bütün kurumlar yok olur.",
            "correct": "Yeni inanç, geleneklerle etkileşerek kademeli dönüşüm yaratabilir.",
            "why": "İki meşruiyet kaynağı birlikte kullanılır. Eski gelenek bütünüyle silinmemiştir. Yeni çerçeveyle yönetim yeniden biçimlenir."
          }
        ],
        "reasoningChecks": [
          {
            "question": "Karahanlıların Türkçeyi kullanması neyi gösterir?",
            "answer": "İslamlaşmanın Türk dilinin sonunu zorunlu kılmadığını.",
            "why": "Yeni inanç, geleneklerle etkileşerek kademeli dönüşüm yaratabilir."
          }
        ]
      },
      {
        "title": "Selçuklu kurumlarının iş bölümü",
        "source": {
          "book": "TYT-tar",
          "pages": [
            38,
            39,
            40,
            41,
            42,
            43,
            44,
            45,
            46
          ]
        },
        "explanation": [
          "Merkezî yönetim, taşra idaresi, askerî teşkilat ve eğitim farklı ihtiyaçlara karşılık verdi. İkta, toprağın gelirini hizmet karşılığında kullanma düzenidir; toprağın özel mülkiyet olarak verilmesiyle özdeş değildir. Medrese devletin ihtiyaç duyduğu yetişmiş insanla da ilişkilidir. Atabeylik meliklerin yetişmesine hizmet ederken taşrada güç odakları doğurabilir; kurumun amacıyla tüm sonuçları aynı değildir.",
          "Belirli arazilerin vergi gelirinin hizmet karşılığında görevlilere bırakılması, asker yetiştirilmesi ve üretimin devamı için kullanıldı. Bu uygulama toprağın özel mülk olarak bütünüyle devredilmesi demek değildir."
        ],
        "example": {
          "question": "Bir askere vergi gelirini hizmet karşılığında kullanma hakkı tanınması ne sağlar?",
          "steps": [
            "Hazineden doğrudan maaş yükü azalabilir.",
            "Askerî hizmet yerel gelirle karşılanır.",
            "Bu durum sınırsız özel mülkiyeti göstermez."
          ],
          "answer": "İkta askerî ve mali işlev taşır.",
          "check": "Gelirden yararlanma ve mülkiyet hakkı ayrılmalıdır."
        },
        "misconceptions": [
          {
            "wrong": "İkta alan toprağın özel sahibidir.",
            "correct": "Gelirden yararlanma ve mülkiyet hakkı ayrılmalıdır.",
            "why": "Hazineden doğrudan maaş yükü azalabilir. Askerî hizmet yerel gelirle karşılanır. Bu durum sınırsız özel mülkiyeti göstermez."
          }
        ],
        "reasoningChecks": [
          {
            "question": "Medrese yalnız dinî tartışma yeri midir?",
            "answer": "Dönemine göre çeşitli bilimler öğretilir ve görevliler yetişir.",
            "why": "Gelirden yararlanma ve mülkiyet hakkı ayrılmalıdır."
          }
        ]
      }
    ],
    "connections": [
      {
        "concept": "Kabul sürecinde süreklilik ve değişim",
        "why": "Yeni inanç, geleneklerle etkileşerek kademeli dönüşüm yaratabilir."
      },
      {
        "concept": "Selçuklu kurumlarının iş bölümü",
        "why": "Gelirden yararlanma ve mülkiyet hakkı ayrılmalıdır."
      }
    ],
    "authorship": "Özgün öğretmen anlatımı ve özgün çözümleme örnekleri; kaynak sayfaları MEBİ kitabına yöneliktir."
  },
  "tar-06": {
    "title": "Türkiye tarihi",
    "prerequisites": [
      {
        "concept": "Anadolu’ya yerleşmenin toplumsal zemini",
        "why": "Nüfus ve kurum dönüşümü uzun zaman içinde oluşur."
      }
    ],
    "goals": [
      "Anadolu’ya yerleşmenin toplumsal zemini: Nüfus ve kurum dönüşümü uzun zaman içinde oluşur.",
      "Haçlı seferleri ve Moğol baskısı: Siyasi denetim ve ekonomik-kültürel süreklilik ayrı incelenir."
    ],
    "chapters": [
      {
        "title": "Anadolu’ya yerleşmenin toplumsal zemini",
        "source": {
          "book": "TYT-tar",
          "pages": [
            47,
            48,
            49,
            50,
            51,
            52,
            53,
            54,
            55,
            56,
            57
          ]
        },
        "explanation": [
          "Malazgirt, Anadolu’daki siyasi ve yerleşim hareketlerini hızlandırdı; kalıcı yerleşme göç, güvenlik, üretim ve kurumlarla sürdü. Beylikler, zaviyeler, vakıflar ve şehirleşme siyasi hâkimiyeti günlük yaşama taşıdı. Fetih ve kültürel dönüşümü aynı tarih kabul etmek farklı hızları gizler. Ticaret yollarını güvenceye alan yapılar ekonomik hayatı ve yerleşmeyi destekledi.",
          "Anadolu’daki ilk beyliklerin eserlerini harita üzerinde şehirleriyle ilişkilendirmek yerleşme ve siyasi alan arasındaki bağı açar. Bir köprü ticaret ve ulaşımı, medrese eğitim hayatını, darüşşifa sağlık hizmetini destekler. Bu yapılar yalnız sanat tarihi ayrıntısı değildir; yönetimin toplumsal görünürlüğünü ve üretim ağlarını gösterir. Haçlı seferlerini incelerken dinî söylemle ekonomik ve siyasi beklentileri birlikte düşünmek gerekir. Bir tarafın gerekçesi ile olayın bütün nedenleri aynı şey değildir. Moğol baskısının yol açtığı siyasi parçalanma her beylikte aynı gelişmeyi üretmedi; konum, nüfus ve komşularla ilişkiler yeni fırsatları farklılaştırdı. Merkezî gücün azalmasıyla yerel kültürel canlılığın birlikte görülebilmesi, siyasi tarih ve toplumsal tarihi tek ölçütle derecelendirmemeyi öğretir.",
          "Bir bölgenin fethedilmesi ile kültürel yapısının zamanla değişmesi aynı aşama değildir. Cami, medrese, köprü, kervansaray ve yerleşmeler kalıcılığı destekleyen göstergelerdir."
        ],
        "example": {
          "question": "Kervansaray ve vakıflar yerleşmeyi nasıl etkiler?",
          "steps": [
            "Kervansaray güvenlik ve konaklamayla ticareti destekler.",
            "Vakıf eğitim ve yardımın sürekliliğine kaynak ayırır.",
            "Gündelik kurumlar kalıcılığı güçlendirir."
          ],
          "answer": "Hâkimiyet ekonomik ve sosyal kurumlarla pekişir.",
          "check": "Nüfus ve kurum dönüşümü uzun zaman içinde oluşur."
        },
        "misconceptions": [
          {
            "wrong": "Anadolu’nun Türkleşmesi bir savaşın aynı günkü sonucudur.",
            "correct": "Nüfus ve kurum dönüşümü uzun zaman içinde oluşur.",
            "why": "Kervansaray güvenlik ve konaklamayla ticareti destekler. Vakıf eğitim ve yardımın sürekliliğine kaynak ayırır. Gündelik kurumlar kalıcılığı güçlendirir."
          }
        ],
        "reasoningChecks": [
          {
            "question": "Bir medrese bütün nüfusun değiştiğini kanıtlar mı?",
            "answer": "Hayır; kurumsal izler başka nüfus kanıtlarıyla birlikte okunur.",
            "why": "Nüfus ve kurum dönüşümü uzun zaman içinde oluşur."
          }
        ]
      },
      {
        "title": "Haçlı seferleri ve Moğol baskısı",
        "source": {
          "book": "TYT-tar",
          "pages": [
            47,
            48,
            49,
            50,
            51,
            52,
            53,
            54,
            55,
            56,
            57
          ]
        },
        "explanation": [
          "Anadolu siyasi yapısı batıdan Haçlı seferleri, doğudan Moğol baskısından etkilendi. Kösedağ sonrasında merkezî otoritenin zayıflaması beyliklerin güçlenmesiyle ilişkilidir. Moğol baskısı yalnız yıkım değil yeni göçler ve güç dağılımı yarattı. Merkez zayıfladığında bütün yerel hayatın durduğunu düşünmek yanlıştır; yerel güç ve üretim ilişkileri farklı biçimde devam edebilir.",
          "Kervansaray inşası ve tüccarların güvenliğinin sağlanması, ticari hayatı canlandırma amacıyla ilgilidir. Bunlar devletin yalnız askerî fetihlere önem vermediğini gösterir."
        ],
        "example": {
          "question": "Selçuklu merkezi zayıflarken beyliklerin çoğalmasını açıkla.",
          "steps": [
            "Merkezin vergi ve askerî denetimi azalır.",
            "Yerel liderler bağımsızlaşabilir.",
            "Parçalanma kültürel üretimi her yerde sona erdirmez."
          ],
          "answer": "Merkez zayıflığı yerel güçleri artırmıştır.",
          "check": "Siyasi denetim ve ekonomik-kültürel süreklilik ayrı incelenir."
        },
        "misconceptions": [
          {
            "wrong": "Merkez zayıflarsa bütün toplumsal faaliyet durur.",
            "correct": "Siyasi denetim ve ekonomik-kültürel süreklilik ayrı incelenir.",
            "why": "Merkezin vergi ve askerî denetimi azalır. Yerel liderler bağımsızlaşabilir. Parçalanma kültürel üretimi her yerde sona erdirmez."
          }
        ],
        "reasoningChecks": [
          {
            "question": "Moğol baskısının göçleri artırması Anadolu’yu etkiler mi?",
            "answer": "Evet; yeni yerleşmeler ve siyasi oluşumlar doğurabilir.",
            "why": "Siyasi denetim ve ekonomik-kültürel süreklilik ayrı incelenir."
          }
        ]
      }
    ],
    "connections": [
      {
        "concept": "Anadolu’ya yerleşmenin toplumsal zemini",
        "why": "Nüfus ve kurum dönüşümü uzun zaman içinde oluşur."
      },
      {
        "concept": "Haçlı seferleri ve Moğol baskısı",
        "why": "Siyasi denetim ve ekonomik-kültürel süreklilik ayrı incelenir."
      }
    ],
    "authorship": "Özgün öğretmen anlatımı ve özgün çözümleme örnekleri; kaynak sayfaları MEBİ kitabına yöneliktir."
  },
  "tar-07": {
    "title": "Osmanlı kuruluşu",
    "prerequisites": [
      {
        "concept": "Kuruluşta çok nedenli açıklama",
        "why": "Motivasyon, coğrafya, kurumlar ve siyasi fırsatlarla birlikte değerlendirilir."
      }
    ],
    "goals": [
      "Kuruluşta çok nedenli açıklama: Motivasyon, coğrafya, kurumlar ve siyasi fırsatlarla birlikte değerlendirilir.",
      "Devletleşmede asker ve kurum ilişkisi: Evlilik, diplomasi ve başka hukuki-siyasi araçlar da etkili olabilir."
    ],
    "chapters": [
      {
        "title": "Kuruluşta çok nedenli açıklama",
        "source": {
          "book": "TYT-tar",
          "pages": [
            58,
            59,
            60,
            61,
            62,
            63,
            64,
            65,
            66,
            67,
            68,
            69,
            70,
            71,
            72
          ]
        },
        "explanation": [
          "Osmanlı’nın büyümesi yalnız konum veya tek liderle açıklanamaz. Uç ortamı, komşu güçlerin durumu, askerî örgütlenme, göçler ve topluluklarla ilişkiler birlikte etkilidir. İskân nüfusun yerleştirilmesini, istimâlet halkın yönetimle ilişkisini yumuşatan uygulamaları anlatır. Biri nüfus politikası, diğeri yönetim yaklaşımıdır; birlikte kalıcılığı destekleyebilir.",
          "Osmanlı kuruluşunda fethedilen alanları elde tutma sorunu, yalnız ilk askerî başarıdan farklı araçlar gerektirir. Yerleşme, vergi düzeni, yerel seçkinlerle ilişki ve hukuki güvence kalıcılığa katkı verir. İstimâlet bütün gerilimlerin ortadan kalktığı ideal bir tablo olarak değil belirli yönetim stratejileri olarak incelenmelidir. Devşirme, pençik, tımar ve kapıkulu kavramlarını aynı asker kaynağı gibi ezberlemek yanlıştır; insan kaynağı, gelir kaynağı ve askerî örgütlenme katmanları ayrılır. Bir düzenleme merkezî orduyu güçlendirirken yerel güçlere bağımlılığı azaltabilir. Anadolu birliğinde kullanılan farklı yollar da devletleşmenin yalnız genişleyen sınır çizgisi olmadığını, hukuki ve diplomatik bağların kurulmasını içerdiğini gösterir. Sorularda sürekli büyüme varsayımı yerine kesintiler ve yeniden toparlanma da izlenmelidir.",
          "İskân nüfusun yerleştirilmesiyle, istimâlet yerel halkın yönetime kazanılmasıyla ilgilidir. Aynı bölgede uygulanabilirler; ikisi de fetihlerin kalıcılaşmasına hizmet eder."
        ],
        "example": {
          "question": "Rumeli’ye nüfus yerleştirme ile halkın dinî hayatına müdahalenin sınırlanmasını ayır.",
          "steps": [
            "İlki nüfus ve yerleşme düzenini etkiler.",
            "İkincisi yönetimin kabulünü kolaylaştırır.",
            "İkisi fethin kalıcılığıyla ilişkilidir."
          ],
          "answer": "İskân ve istimâlet farklı araçlardır.",
          "check": "Motivasyon, coğrafya, kurumlar ve siyasi fırsatlarla birlikte değerlendirilir."
        },
        "misconceptions": [
          {
            "wrong": "Kuruluş yalnız gaza düşüncesiyle açıklanır.",
            "correct": "Motivasyon, coğrafya, kurumlar ve siyasi fırsatlarla birlikte değerlendirilir.",
            "why": "İlki nüfus ve yerleşme düzenini etkiler. İkincisi yönetimin kabulünü kolaylaştırır. İkisi fethin kalıcılığıyla ilişkilidir."
          }
        ],
        "reasoningChecks": [
          {
            "question": "Uçta olmak kesin büyüme sağlar mı?",
            "answer": "Hayır; örgütlenme ve siyasi ilişkiler farklı sonuçlar doğurur.",
            "why": "Motivasyon, coğrafya, kurumlar ve siyasi fırsatlarla birlikte değerlendirilir."
          }
        ]
      },
      {
        "title": "Devletleşmede asker ve kurum ilişkisi",
        "source": {
          "book": "TYT-tar",
          "pages": [
            58,
            59,
            60,
            61,
            62,
            63,
            64,
            65,
            66,
            67,
            68,
            69,
            70,
            71,
            72
          ]
        },
        "explanation": [
          "Fetih alanı büyüdükçe düzenli askerî ve idari örgütlenme ihtiyacı arttı. Tımar, kapıkulu, yönetici sınıflar ve vakıflar gelir, asker, yönetim ve hizmet sorunlarına farklı çözümler sundu. Anadolu birliğini sağlama savaş yanında evlilik ve diplomasiyle de ilerledi. Kurumlaşma tek tarihte tamamlanan tasarım değil değişen ihtiyaçlara verilen yanıtlardır.",
          "Anadolu Türk siyasi birliğini sağlama çabaları, farklı beyliklerin yönetimlerini bir merkezde toplama amacı taşır. Taht mücadeleleri ise bu otoriteyi zayıflatabilir."
        ],
        "example": {
          "question": "Toprak gelirinden asker yetiştirilmesi nasıl işlev görür?",
          "steps": [
            "Yerel gelir askerî hizmete bağlanır.",
            "Taşra denetimi ve sefer gücü desteklenir.",
            "Gelir, hizmet ve denetim ilişkilendirilir."
          ],
          "answer": "Mali kaynakla askerî örgütlenme bağlanmıştır.",
          "check": "Evlilik, diplomasi ve başka hukuki-siyasi araçlar da etkili olabilir."
        },
        "misconceptions": [
          {
            "wrong": "Siyasi birlik yalnız savaşla sağlanır.",
            "correct": "Evlilik, diplomasi ve başka hukuki-siyasi araçlar da etkili olabilir.",
            "why": "Yerel gelir askerî hizmete bağlanır. Taşra denetimi ve sefer gücü desteklenir. Gelir, hizmet ve denetim ilişkilendirilir."
          }
        ],
        "reasoningChecks": [
          {
            "question": "Kurumun değişmesi başlangıçta işlevsiz olduğunu gösterir mi?",
            "answer": "Hayır; koşullar ve ihtiyaçlar dönüşebilir.",
            "why": "Evlilik, diplomasi ve başka hukuki-siyasi araçlar da etkili olabilir."
          }
        ]
      }
    ],
    "connections": [
      {
        "concept": "Kuruluşta çok nedenli açıklama",
        "why": "Motivasyon, coğrafya, kurumlar ve siyasi fırsatlarla birlikte değerlendirilir."
      },
      {
        "concept": "Devletleşmede asker ve kurum ilişkisi",
        "why": "Evlilik, diplomasi ve başka hukuki-siyasi araçlar da etkili olabilir."
      }
    ],
    "authorship": "Özgün öğretmen anlatımı ve özgün çözümleme örnekleri; kaynak sayfaları MEBİ kitabına yöneliktir."
  },
  "tar-08": {
    "title": "Osmanlı yükselişi",
    "prerequisites": [
      {
        "concept": "İstanbul’un fethinde farklı ölçekler",
        "why": "Ticari arayış, denizcilik ve siyasi destek gibi çok etken vardır."
      }
    ],
    "goals": [
      "İstanbul’un fethinde farklı ölçekler: Ticari arayış, denizcilik ve siyasi destek gibi çok etken vardır.",
      "Kara, deniz ve diplomasi: Siyasi çıkarlar dönemsel iş birliği doğurabilir."
    ],
    "chapters": [
      {
        "title": "İstanbul’un fethinde farklı ölçekler",
        "source": {
          "book": "TYT-tar",
          "pages": [
            73,
            74,
            75,
            76,
            77,
            78,
            79,
            80,
            81,
            82,
            83,
            84,
            85,
            86,
            87
          ]
        },
        "explanation": [
          "Fetih Osmanlı toprakları arasındaki stratejik bağlantıyı güçlendirdi, başkentin oluşumunu etkiledi ve Bizans siyasi varlığını sona erdirdi. Avrupa siyaseti üzerindeki sonuçlarda tek olayın bütün dönüşümleri kendiliğinden yarattığı sanılmamalıdır. Coğrafi keşifler ekonomik, bilimsel ve siyasi etkenlere dayanır; fetihle ilişki kurmak keşiflerin tek nedeni olduğunu söylemek değildir.",
          "Osmanlı’nın yükselişini yalnız savaş listesiyle okumak, rakipleri ve amaçları görünmez kılar. Aynı dönemde batıda Avrupa güç dengesi, doğuda hanedan ve mezhep rekabeti, denizde ticaret ve liman denetimi farklı sorunlar oluşturur. Bir seferin sonucunu ölçerken alınan toprak kadar stratejik geçiş, gelir ve diplomatik itibar da değerlendirilir. Kapitülasyon gibi ticari ayrıcalıkların belirli dönemdeki amacıyla uzun vadeli sonuçları aynı olmayabilir. Aktörün o andaki siyasi çıkarını, sonradan oluşan bağımlılık ilişkileriyle karıştırmamak gerekir. İstanbul’un çok topluluklu başkent niteliği de fetih sonrasında nüfus ve kurumların yeniden düzenlenmesiyle gelişir. Bir kentin başkent olması, bütün diğer merkezlerin işlevini bir anda yitirmesine yol açmaz; imparatorluk farklı işlevli şehir ağlarıyla yönetilir.",
          "Bir devletin sona ermesi siyasi; bir ticaret yolunun denetimi ekonomik; kültürel merkezlerin el değiştirmesi kültürel sonuçtur. Aynı fetih birden fazla alana etki edebilir."
        ],
        "example": {
          "question": "Başkentin İstanbul’a taşınması neden yalnız sembolik değildir?",
          "steps": [
            "Şehir kara ve deniz yolları üzerindedir.",
            "Yönetim merkezi imparatorluk ölçeğine göre güçlenir.",
            "Meşruiyet ve ekonomik ağlar birlikte etkilenir."
          ],
          "answer": "Başkent yönetim ve strateji işlevi taşır.",
          "check": "Ticari arayış, denizcilik ve siyasi destek gibi çok etken vardır."
        },
        "misconceptions": [
          {
            "wrong": "Keşifleri tek başına İstanbul’un fethi başlatmıştır.",
            "correct": "Ticari arayış, denizcilik ve siyasi destek gibi çok etken vardır.",
            "why": "Şehir kara ve deniz yolları üzerindedir. Yönetim merkezi imparatorluk ölçeğine göre güçlenir. Meşruiyet ve ekonomik ağlar birlikte etkilenir."
          }
        ],
        "reasoningChecks": [
          {
            "question": "Fethin iç düzene etkisiyle Avrupa’ya etkisi aynı mı?",
            "answer": "Hayır; farklı coğrafi ve kurumsal ölçeklerdir.",
            "why": "Ticari arayış, denizcilik ve siyasi destek gibi çok etken vardır."
          }
        ]
      },
      {
        "title": "Kara, deniz ve diplomasi",
        "source": {
          "book": "TYT-tar",
          "pages": [
            73,
            74,
            75,
            76,
            77,
            78,
            79,
            80,
            81,
            82,
            83,
            84,
            85,
            86,
            87
          ]
        },
        "explanation": [
          "Genişleme Akdeniz, Orta Avrupa ve doğu sınırlarında farklı mücadele alanları yarattı. Donanma, ordu ve diplomasi birlikte kullanıldı. Halifelik ve kutsal bölgeler dinî meşruiyetle; ticaret yolları ekonomik kaynaklarla ilişkilidir. Başka güçlerle ittifak kurmak askerî kapasitenin yokluğunu değil çok taraflı güç dengesini kullanma arayışını gösterebilir.",
          "Yabancı tüccarlara verilen ticari ve hukuki ayrıcalıklar, ilk dönemlerde ticareti ve diplomatik ilişkileri desteklemek için kullanıldı. Güç dengeleri değiştikçe bu ayrıcalıkların etkileri de değişti."
        ],
        "example": {
          "question": "Bir Avrupa devletiyle ortak rakibe karşı yakınlaşma ne gösterir?",
          "steps": [
            "Din ortaklığı şart değildir.",
            "Ortak siyasi çıkar iş birliği doğurabilir.",
            "İttifak güç dengesinde araçtır."
          ],
          "answer": "Diplomasi çıkar temelli esnek ilişkiler kurabilir.",
          "check": "Siyasi çıkarlar dönemsel iş birliği doğurabilir."
        },
        "misconceptions": [
          {
            "wrong": "Farklı dindeki devletler ittifak kuramaz.",
            "correct": "Siyasi çıkarlar dönemsel iş birliği doğurabilir.",
            "why": "Din ortaklığı şart değildir. Ortak siyasi çıkar iş birliği doğurabilir. İttifak güç dengesinde araçtır."
          }
        ],
        "reasoningChecks": [
          {
            "question": "Deniz zaferi ticareti nasıl etkiler?",
            "answer": "Güvenlik ve denetim, mal akışının maliyet ve yönünü değiştirebilir.",
            "why": "Siyasi çıkarlar dönemsel iş birliği doğurabilir."
          }
        ]
      }
    ],
    "connections": [
      {
        "concept": "İstanbul’un fethinde farklı ölçekler",
        "why": "Ticari arayış, denizcilik ve siyasi destek gibi çok etken vardır."
      },
      {
        "concept": "Kara, deniz ve diplomasi",
        "why": "Siyasi çıkarlar dönemsel iş birliği doğurabilir."
      }
    ],
    "authorship": "Özgün öğretmen anlatımı ve özgün çözümleme örnekleri; kaynak sayfaları MEBİ kitabına yöneliktir."
  },
  "tar-09": {
    "title": "Osmanlı kültür ve ekonomi",
    "prerequisites": [
      {
        "concept": "Millet düzenini modern ulusla karıştırmamak",
        "why": "Kavramın dönem içindeki içeriği belirlenmelidir."
      }
    ],
    "goals": [
      "Millet düzenini modern ulusla karıştırmamak: Kavramın dönem içindeki içeriği belirlenmelidir.",
      "Toprak, lonca ve vakfın işlevleri: Üretim düzenleme, askerî gelir ve sosyal hizmet işlevleri ayrılır."
    ],
    "chapters": [
      {
        "title": "Millet düzenini modern ulusla karıştırmamak",
        "source": {
          "book": "TYT-tar",
          "pages": [
            88,
            89,
            90,
            91,
            92,
            93,
            94,
            95,
            96,
            97
          ]
        },
        "explanation": [
          "Osmanlı millet sistemi toplulukları modern ulusal vatandaşlık ölçütüyle değil dinî aidiyetler üzerinden düzenliyordu. Bazı iç işlerin topluluk kurumlarıyla yürütülmesi eşit yurttaşlıkla aynı hukuki düzen değildir. Saray, şehir, lonca ve vakıf üretim, eğitim ve sosyal yardımı farklı biçimde örgütler. Kurumun bugünkü ad benzerliğinden önce kimleri kapsadığı ve ne yetki kullandığı araştırılmalıdır.",
          "Vakıf, lonca ve tımar sorularında para veya toprağın kime ait olduğundan önce hakkın niteliğini belirle. Geliri kullanma, yönetme, devretme ve satma yetkileri aynı şey değildir. Loncanın kalite ve fiyat üzerindeki düzenlemesi üreticiler arasında denetim sağlarken rekabetin biçimini de etkiler; bunu bugünkü sendika veya şirketle doğrudan özdeşleştirmek anakronizm olur. Vakfın sosyal hizmet üretmesi, modern sosyal devletin bütün hukuki yapısının bulunduğunu göstermez. Millet sisteminde dinî aidiyetle kurulan topluluk sınırları da günümüz vatandaşlığıyla aynı değildir. Kurumları karşılaştırırken benzer işlevi belirtip farklı hukuki temeli de göstermek gerekir. Böylece tarihî kavram modern karşılığına indirgenmeden anlaşılır ve metinde bulunmayan eşitlik ya da özgürlük sonucu eklenmez.",
          "Tımar sisteminde bırakılan şey temelde vergi toplama hakkıdır. Tımar sahibi toprağın mutlak özel mülkiyetini edinmiş sayılmaz. Köylünün üretiminin devamı hem maliye hem ordu açısından önemlidir."
        ],
        "example": {
          "question": "Dinî topluluğun eğitim ve aile ilişkilerini kendi kurumlarıyla yürütmesi modern milliyetçilik mi?",
          "steps": [
            "Örgütlenme dinî kimliğe dayanır.",
            "Modern milliyetçilik ulus ve egemenlik kavramıyla farklı bağlamda gelişir.",
            "Topluluk sözcüğü aynı kurumsal anlamı garanti etmez."
          ],
          "answer": "Millet düzeni modern ulus-devletle özdeş değildir.",
          "check": "Kavramın dönem içindeki içeriği belirlenmelidir."
        },
        "misconceptions": [
          {
            "wrong": "Millet sözcüğü her çağda aynı anlamdadır.",
            "correct": "Kavramın dönem içindeki içeriği belirlenmelidir.",
            "why": "Örgütlenme dinî kimliğe dayanır. Modern milliyetçilik ulus ve egemenlik kavramıyla farklı bağlamda gelişir. Topluluk sözcüğü aynı kurumsal anlamı garanti etmez."
          }
        ],
        "reasoningChecks": [
          {
            "question": "Millet düzeni bütün alanlarda eşitlik kanıtlar mı?",
            "answer": "Hayır; iç özerklik ve hukuki statü eşitliği farklıdır.",
            "why": "Kavramın dönem içindeki içeriği belirlenmelidir."
          }
        ]
      },
      {
        "title": "Toprak, lonca ve vakfın işlevleri",
        "source": {
          "book": "TYT-tar",
          "pages": [
            88,
            89,
            90,
            91,
            92,
            93,
            94,
            95,
            96,
            97
          ]
        },
        "explanation": [
          "Tımar, toprak gelirini askerî ve idari hizmetle ilişkilendirir. Lonca üretim niteliği, meslek eğitimi ve piyasa ilişkilerini düzenler. Vakıf belirli geliri sosyal hizmete ayırır. Kurumları tek işleve indirgemek devlet-toplum ilişkisini gizler. Vakfın okul işletmesi hizmetin doğrudan merkez hazinesince yürütülmediğini gösterir; bu, devletin bütün ilgisinin kesildiği anlamına gelmez.",
          "Darüşşifa yaptıran vakıf sosyal ve sağlık hizmeti sunar. Usta-çırak yetiştiren lonca mesleki eğitim sağlar. Sorudaki faaliyet hangi ihtiyaca cevap veriyorsa kurumun işlevini oradan bul."
        ],
        "example": {
          "question": "Dükkân gelirinin okul masrafına sürekli ayrılması hangi işlevdir?",
          "steps": [
            "Gelir sosyal hizmete kaynak olur.",
            "Asker yetiştirme veya üretim standardı hedefi yoktur.",
            "Tahsis vakıf işlevine uyar."
          ],
          "answer": "Vakıf eğitim hizmetini finanse eder.",
          "check": "Üretim düzenleme, askerî gelir ve sosyal hizmet işlevleri ayrılır."
        },
        "misconceptions": [
          {
            "wrong": "Lonca, tımar ve vakıf aynı mali kurumdur.",
            "correct": "Üretim düzenleme, askerî gelir ve sosyal hizmet işlevleri ayrılır.",
            "why": "Gelir sosyal hizmete kaynak olur. Asker yetiştirme veya üretim standardı hedefi yoktur. Tahsis vakıf işlevine uyar."
          }
        ],
        "reasoningChecks": [
          {
            "question": "Çırak-kalfa-usta ilişkisi ne sağlar?",
            "answer": "Meslek bilgisinin aktarımı ve üretim niteliğinin düzenlenmesini.",
            "why": "Üretim düzenleme, askerî gelir ve sosyal hizmet işlevleri ayrılır."
          }
        ]
      }
    ],
    "connections": [
      {
        "concept": "Millet düzenini modern ulusla karıştırmamak",
        "why": "Kavramın dönem içindeki içeriği belirlenmelidir."
      },
      {
        "concept": "Toprak, lonca ve vakfın işlevleri",
        "why": "Üretim düzenleme, askerî gelir ve sosyal hizmet işlevleri ayrılır."
      }
    ],
    "authorship": "Özgün öğretmen anlatımı ve özgün çözümleme örnekleri; kaynak sayfaları MEBİ kitabına yöneliktir."
  },
  "tar-10": {
    "title": "Yeni Çağ ve Yakın Çağ",
    "prerequisites": [
      {
        "concept": "Avrupa’da değişimin nedenler ağı",
        "why": "İlişkili ekonomik, kültürel ve dinî dönüşümlerin alanları farklıdır."
      }
    ],
    "goals": [
      "Avrupa’da değişimin nedenler ağı: İlişkili ekonomik, kültürel ve dinî dönüşümlerin alanları farklıdır.",
      "Osmanlı’da dönüşümün iç dengeleri: Katılımcı, talep, dönem ve koşullar ayrı değerlendirilir."
    ],
    "chapters": [
      {
        "title": "Avrupa’da değişimin nedenler ağı",
        "source": {
          "book": "TYT-tar",
          "pages": [
            98,
            99,
            100,
            101,
            102,
            103,
            104,
            105,
            106,
            107,
            108,
            109,
            110,
            111,
            112,
            113,
            114,
            115,
            116,
            117,
            118,
            119,
            120,
            121,
            122,
            123,
            124,
            125
          ]
        },
        "explanation": [
          "Keşifler ticaret ağlarını, Rönesans sanat ve düşünceyi, Reform dinî kurumlarla siyaseti etkiledi. Süreçler birbirini beslese de aynı olay değildir. Bilimsel yöntemler, matbaa ve kaynakların değişmesi düşünce dolaşımını hızlandırdı. Yeni güzergâhlar Akdeniz’in göreli önemini etkileyebilir; önem kaybı bütün eski ticaretin anında durması anlamına gelmez.",
          "Dönüşüm sorularında amaçlanan sonuçla gerçekleşen sonucu ayırmak gerekir. Merkezî vergi toplama amacıyla yapılan bir uygulama taşra eşrafının gücünü artıran ara sonuçlar doğurabilir. Celali hareketleri, yeniçeri tepkileri ve hanedan içi mücadeleler katılımcıları ve talepleri bakımından aynı başlık altında açıklanamaz. Avrupa’daki mezhep farklılaşması siyasi parçalanmayı bazı bölgelerde artırırken merkezî monarşiler başka alanlarda güç kazanabilir. Aydınlanma ile Fransız İhtilali ilişkisi düşünce ve siyasi eylem arasındadır; bütün filozofların aynı siyasi programı savunduğu sonucu çıkmaz. Sanayi Devrimi üretim miktarı yanında emek, hammadde ve pazar ihtiyacını değiştirerek sömürgeciliğin araçlarını da dönüştürür. Bu ilişkiyi kurarken nedenlerin birbirini beslediği karşılıklı ağ modeli, tek yönlü ezber zincirinden daha açıklayıcıdır.",
          "Yeni deniz yolları eski ticaret güzergâhlarının göreli önemini azalttı. Sanayi üretimi karşısında el emeğine dayanan üretim zorlandı; dış rekabet ekonomik yapıyı etkiledi."
        ],
        "example": {
          "question": "Okyanus yolları Akdeniz limanlarını nasıl etkileyebilir?",
          "steps": [
            "Alternatif güzergâhlar açılır.",
            "Akışın bir bölümü yeni limanlara kayar.",
            "Eski ağlar tümüyle yok olmadan ağırlık değişebilir."
          ],
          "answer": "Ticari merkezlerin göreli konumu değişir.",
          "check": "İlişkili ekonomik, kültürel ve dinî dönüşümlerin alanları farklıdır."
        },
        "misconceptions": [
          {
            "wrong": "Rönesans, Reform ve keşifler aynı olaydır.",
            "correct": "İlişkili ekonomik, kültürel ve dinî dönüşümlerin alanları farklıdır.",
            "why": "Alternatif güzergâhlar açılır. Akışın bir bölümü yeni limanlara kayar. Eski ağlar tümüyle yok olmadan ağırlık değişebilir."
          }
        ],
        "reasoningChecks": [
          {
            "question": "Matbaa neden yalnız teknik değişim değildir?",
            "answer": "Bilginin daha geniş çevrelere daha hızlı ulaşmasını sağlar.",
            "why": "İlişkili ekonomik, kültürel ve dinî dönüşümlerin alanları farklıdır."
          }
        ]
      },
      {
        "title": "Osmanlı’da dönüşümün iç dengeleri",
        "source": {
          "book": "TYT-tar",
          "pages": [
            98,
            99,
            100,
            101,
            102,
            103,
            104,
            105,
            106,
            107,
            108,
            109,
            110,
            111,
            112,
            113,
            114,
            115,
            116,
            117,
            118,
            119,
            120,
            121,
            122,
            123,
            124,
            125
          ]
        },
        "explanation": [
          "Uzun savaş, mali ihtiyaç, askerî yapı ve taşra ilişkileri yeni çözümleri zorunlu kıldı. İsyanları tek bir öfkeye indirgemek ekonomik ve yerel siyasi etkenleri örter. Islahatları yalnız dışarıyı taklit diye okumak da iç ihtiyaçları gizler. Otoriteyi güçlendiren düzenleme bazı grupların gelir ve ayrıcalığını azaltabilir; tepki, değişimin yararı ve maliyetinin eşitsiz dağılımıyla ilişkilidir.",
          "Milliyetçilik, farklı etnik toplulukları barındıran imparatorluklarda bağımsızlık hareketlerini besledi. Bu etkiyi sanayileşmenin üretim tekniğiyle ilgili sonuçlarından ayır."
        ],
        "example": {
          "question": "Yeni vergiye karşı taşra direnişi nasıl araştırılır?",
          "steps": [
            "Yükün hangi gruba geldiği belirlenir.",
            "Yerel ayrıcalıklar incelenir.",
            "Hazine ve savaş ihtiyacıyla ilişki kurulur."
          ],
          "answer": "Ekonomik ve siyasi nedenler birlikte incelenir.",
          "check": "Katılımcı, talep, dönem ve koşullar ayrı değerlendirilir."
        },
        "misconceptions": [
          {
            "wrong": "Bütün isyanların nedeni aynıdır.",
            "correct": "Katılımcı, talep, dönem ve koşullar ayrı değerlendirilir.",
            "why": "Yükün hangi gruba geldiği belirlenir. Yerel ayrıcalıklar incelenir. Hazine ve savaş ihtiyacıyla ilişki kurulur."
          }
        ],
        "reasoningChecks": [
          {
            "question": "Tepki gören ıslahat hiçbir sorun çözmemiş midir?",
            "answer": "Böyle sonuç çıkmaz; farklı gruplar farklı etkilenebilir.",
            "why": "Katılımcı, talep, dönem ve koşullar ayrı değerlendirilir."
          }
        ]
      }
    ],
    "connections": [
      {
        "concept": "Avrupa’da değişimin nedenler ağı",
        "why": "İlişkili ekonomik, kültürel ve dinî dönüşümlerin alanları farklıdır."
      },
      {
        "concept": "Osmanlı’da dönüşümün iç dengeleri",
        "why": "Katılımcı, talep, dönem ve koşullar ayrı değerlendirilir."
      }
    ],
    "authorship": "Özgün öğretmen anlatımı ve özgün çözümleme örnekleri; kaynak sayfaları MEBİ kitabına yöneliktir."
  },
  "tar-11": {
    "title": "Demokratikleşme",
    "prerequisites": [
      {
        "concept": "Hak belgeleri ve yetki dağılımı",
        "why": "Hakların içeriği, temsil ve yürütme denetimi karşılaştırılır."
      }
    ],
    "goals": [
      "Hak belgeleri ve yetki dağılımı: Hakların içeriği, temsil ve yürütme denetimi karşılaştırılır.",
      "Sanayileşme, nüfus ve kamuoyu: Sermaye, pazar, teknoloji ve siyasi koşullar farklı yollar yaratır."
    ],
    "chapters": [
      {
        "title": "Hak belgeleri ve yetki dağılımı",
        "source": {
          "book": "TYT-tar",
          "pages": [
            126,
            127,
            128,
            129,
            130,
            131,
            132,
            133,
            134,
            135,
            136,
            137,
            138,
            139,
            140,
            141,
            142,
            143,
            144,
            145,
            146,
            147,
            148
          ]
        },
        "explanation": [
          "Sened-i İttifak, Tanzimat, Islahat ve Kanun-ı Esasi farklı koşullarda doğdu. Yönetimin kurala bağlanması, eşitlik ilkesi ve meclis kurulması farklı değişimlerdir. Bunları doğrudan tam demokrasiyle özdeş saymak yanlıştır. Merkezîleşme ve hak tanınması aynı düzenlemede birlikte yer alabilir. Kimlerin temsil edildiği ve karar yetkisinin kimde olduğu ayrıca sorgulanmalıdır.",
          "Anayasal metinlerde kimlerin imzası ve hangi yetki sınırı bulunduğu kanıt olarak önemlidir. Hükümdarın yetkisini sınırlayan bir belge halkın tamamının temsil edildiği bir meclisle aynı kurumu oluşturmaz. Tanzimat’taki can ve mal güvencesi, Islahat’taki statü eşitliği ve meşrutiyetteki temsil ayrı sorulara yanıt verir; süreçte hem süreklilik hem geri dönüşler bulunabilir. Dış borç, yabancı sermaye ve sanayileşme ilişkilerinde kaynak sağlama ile denetim kaybı birlikte değerlendirilebilir. Her dış kaynak otomatik kalkınma veya otomatik tam bağımlılık sonucu üretmez; koşullar ve anlaşmalar belirleyicidir. Nüfus, göç, salgın ve metropoller de siyasi kurumları etkiler; toplumsal değişimin yalnız kanun metninden ibaret olmadığı bu örneklerle görülür.",
          "Yeni bir askerî okul açılması çağdaşlaşmadır; halkın yönetime katılması ise temsil ve demokratikleşme boyutudur. Soruda meclis, seçim veya anayasa aranıyorsa siyasi katılım üzerinde dur."
        ],
        "example": {
          "question": "Anayasa ve meclis sınırsız halk egemenliğini kanıtlar mı?",
          "steps": [
            "Temsil yönünde değişim vardır.",
            "Padişahın ve meclisin yetkileri ayrıca okunur.",
            "Anayasal kurumla tam demokratik uygulama eş tutulmaz."
          ],
          "answer": "Meşrutiyet yönünde değişim vardır; yetki sınırları ayrıca incelenir.",
          "check": "Hakların içeriği, temsil ve yürütme denetimi karşılaştırılır."
        },
        "misconceptions": [
          {
            "wrong": "Anayasası olan her devlet aynı ölçüde demokratiktir.",
            "correct": "Hakların içeriği, temsil ve yürütme denetimi karşılaştırılır.",
            "why": "Temsil yönünde değişim vardır. Padişahın ve meclisin yetkileri ayrıca okunur. Anayasal kurumla tam demokratik uygulama eş tutulmaz."
          }
        ],
        "reasoningChecks": [
          {
            "question": "Eşitlik amacı ve dış baskı birlikte etkili olabilir mi?",
            "answer": "Evet; iç ve dış etkenler aynı düzenlemede birleşebilir.",
            "why": "Hakların içeriği, temsil ve yürütme denetimi karşılaştırılır."
          }
        ]
      },
      {
        "title": "Sanayileşme, nüfus ve kamuoyu",
        "source": {
          "book": "TYT-tar",
          "pages": [
            126,
            127,
            128,
            129,
            130,
            131,
            132,
            133,
            134,
            135,
            136,
            137,
            138,
            139,
            140,
            141,
            142,
            143,
            144,
            145,
            146,
            147,
            148
          ]
        },
        "explanation": [
          "Sanayileşme üretim biçimi, sermaye, emek ve pazar ilişkilerini değiştirir. Osmanlı girişimleri dış rekabet, sermaye ve altyapıyla birlikte değerlendirilir. Nüfus sayımı, şehirleşme, basın ve salgınla mücadele toplumu tanıma ve yönetme araçlarını genişletir. Bu süreçler hak tartışmalarını etkiler; herkesin eşit siyasi katılımını otomatik sağlamaz.",
          "Tanzimat padişahın ilan ettiği bir fermandır. Kanun-i Esasi ise anayasadır. Meşrutiyette hükümdar devam eder; meclisin açılması tek başına saltanatın kaldırıldığı anlamına gelmez."
        ],
        "example": {
          "question": "Gazetenin yayılması siyasi tartışmayı nasıl etkiler?",
          "steps": [
            "Haber ve fikir geniş kitleye ulaşır.",
            "Farklı çevrelerde ortak gündem oluşabilir.",
            "Sansür ve okuryazarlık bu etkiyi sınırlar."
          ],
          "answer": "Kamuoyunun oluşma imkânı artar.",
          "check": "Sermaye, pazar, teknoloji ve siyasi koşullar farklı yollar yaratır."
        },
        "misconceptions": [
          {
            "wrong": "Sanayileşme her toplumda aynı sırayla gelişir.",
            "correct": "Sermaye, pazar, teknoloji ve siyasi koşullar farklı yollar yaratır.",
            "why": "Haber ve fikir geniş kitleye ulaşır. Farklı çevrelerde ortak gündem oluşabilir. Sansür ve okuryazarlık bu etkiyi sınırlar."
          }
        ],
        "reasoningChecks": [
          {
            "question": "Nüfus sayımı yalnız toplam insan sayısı mıdır?",
            "answer": "Hayır; askerlik, vergi ve idari planlamayla da ilişkilidir.",
            "why": "Sermaye, pazar, teknoloji ve siyasi koşullar farklı yollar yaratır."
          }
        ]
      }
    ],
    "connections": [
      {
        "concept": "Hak belgeleri ve yetki dağılımı",
        "why": "Hakların içeriği, temsil ve yürütme denetimi karşılaştırılır."
      },
      {
        "concept": "Sanayileşme, nüfus ve kamuoyu",
        "why": "Sermaye, pazar, teknoloji ve siyasi koşullar farklı yollar yaratır."
      }
    ],
    "authorship": "Özgün öğretmen anlatımı ve özgün çözümleme örnekleri; kaynak sayfaları MEBİ kitabına yöneliktir."
  },
  "tar-12": {
    "title": "XX. yüzyıl başları",
    "prerequisites": [
      {
        "concept": "Tetikleyici olay ve yapısal neden",
        "why": "Zaman yakınlığı çok nedenli yapıyı ortadan kaldırmaz."
      }
    ],
    "goals": [
      "Tetikleyici olay ve yapısal neden: Zaman yakınlığı çok nedenli yapıyı ortadan kaldırmaz.",
      "Cephe, ateşkes ve işgal: Çatışmayı durdurma ile kalıcı düzenleme ayrılır."
    ],
    "chapters": [
      {
        "title": "Tetikleyici olay ve yapısal neden",
        "source": {
          "book": "TYT-tar",
          "pages": [
            149,
            150,
            151,
            152,
            153,
            154,
            155,
            156
          ]
        },
        "explanation": [
          "Sömürge rekabeti, silahlanma, ittifaklar ve milliyetçilik savaşın uzun süreli nedenleridir. Suikast tetikleyici olabilir; yapısal nedenlerin yerine geçmez. Osmanlı’nın savaşa girişi güvenlik, yalnızlık, ittifak arayışı ve toprak beklentileriyle birlikte incelenir. Aktörler sonraki sonuçları önceden kesin biliyormuş gibi yorumlanamaz; dönemin bilgi ve seçenekleri değerlendirilmelidir.",
          "Cepheleri haritada amaçlarıyla eşleştirmek ezberlenen adları anlamlı kılar. Kafkas ve Kanal gibi cephelerde taarruz beklentileri; Çanakkale’de boğazların savunulması; müttefike yardım cephelerinde koalisyon ilişkileri öne çıkar. Bu sınıflama her cephede bütün savaş boyunca yalnız tek tür faaliyet yapıldığı anlamına gelmez. Ateşkes sonrasında ordunun terhisi ve silahların denetimi savunma kapasitesini azaltır; ulaşım hatlarının kontrolü de yalnız yol meselesi değil asker ve malzeme hareketinin yönetimidir. Bir işgalin dayandırıldığı hükümle fiili uygulamanın genişliği karşılaştırılabilir. Savaşın küresel sonucu değerlendirilirken imparatorlukların dağılması, yeni sınırlar ve toplumsal kayıplar birlikte düşünülür; kazanan tarafın bütün sorunlarının çözüldüğü varsayılmaz.",
          "Saraybosna suikastı savaşın başlamasını tetikledi. Ancak bloklaşma ve ekonomik rekabet gibi uzun vadeli nedenlerle aynı şey değildir. Sorudaki olay ile ortamı ayır."
        ],
        "example": {
          "question": "Saraybosna suikastı ile sömürge rekabetini ayır.",
          "steps": [
            "Suikast belirli tarihli tetikleyicidir.",
            "Rekabet uzun süreli çıkar çatışmasıdır.",
            "İttifak ve gerilimler tetikleyicinin yayılmasını açıklar."
          ],
          "answer": "Yakın neden ve yapısal neden ayrıdır.",
          "check": "Zaman yakınlığı çok nedenli yapıyı ortadan kaldırmaz."
        },
        "misconceptions": [
          {
            "wrong": "En yakın olay savaşın tek nedenidir.",
            "correct": "Zaman yakınlığı çok nedenli yapıyı ortadan kaldırmaz.",
            "why": "Suikast belirli tarihli tetikleyicidir. Rekabet uzun süreli çıkar çatışmasıdır. İttifak ve gerilimler tetikleyicinin yayılmasını açıklar."
          }
        ],
        "reasoningChecks": [
          {
            "question": "İttifakın etkisi ne olabilir?",
            "answer": "Yerel çatışmayı daha geniş devletler grubuna yayabilir.",
            "why": "Zaman yakınlığı çok nedenli yapıyı ortadan kaldırmaz."
          }
        ]
      },
      {
        "title": "Cephe, ateşkes ve işgal",
        "source": {
          "book": "TYT-tar",
          "pages": [
            149,
            150,
            151,
            152,
            153,
            154,
            155,
            156
          ]
        },
        "explanation": [
          "Cepheler savunma, taarruz ve müttefike yardım amaçları bakımından ayrılır. Mondros barış antlaşması değil ateşkestir. Silahsızlandırma, ulaşım ve güvenlik hükümleri işgallere elverişli ortam oluşturdu. Bir maddenin yoruma açıklığı geniş yetki iddiasına zemin sağlayabilir; maddede yazanla uygulanış ayrı kanıtlarla incelenir. Cephe başarısı da savaşın bütün sonucuyla aynı şey değildir.",
          "İtilaf Devletleri İstanbul’a ulaşarak Osmanlı’yı savaş dışına çıkarma ve Rusya’ya yardım götürme hedeflerine ulaşamadı. Bu başarı savaşın tamamının Osmanlı lehine bittiği anlamına gelmez."
        ],
        "example": {
          "question": "Ateşkes imzalanınca bütün sınırlar kesinleşir mi?",
          "steps": [
            "Ateşkes çatışmayı durdurur.",
            "Kalıcı düzen sonraki antlaşmalarla kurulabilir.",
            "Osmanlı’da işgal ve direniş devam etmiştir."
          ],
          "answer": "Ateşkes nihai barışla aynı değildir.",
          "check": "Çatışmayı durdurma ile kalıcı düzenleme ayrılır."
        },
        "misconceptions": [
          {
            "wrong": "Mondros kesin barış antlaşmasıdır.",
            "correct": "Çatışmayı durdurma ile kalıcı düzenleme ayrılır.",
            "why": "Ateşkes çatışmayı durdurur. Kalıcı düzen sonraki antlaşmalarla kurulabilir. Osmanlı’da işgal ve direniş devam etmiştir."
          }
        ],
        "reasoningChecks": [
          {
            "question": "Çanakkale başarısı bütün savaşın kazanılması mıdır?",
            "answer": "Hayır; cephe ve genel savaş farklı ölçeklerdir.",
            "why": "Çatışmayı durdurma ile kalıcı düzenleme ayrılır."
          }
        ]
      }
    ],
    "connections": [
      {
        "concept": "Tetikleyici olay ve yapısal neden",
        "why": "Zaman yakınlığı çok nedenli yapıyı ortadan kaldırmaz."
      },
      {
        "concept": "Cephe, ateşkes ve işgal",
        "why": "Çatışmayı durdurma ile kalıcı düzenleme ayrılır."
      }
    ],
    "authorship": "Özgün öğretmen anlatımı ve özgün çözümleme örnekleri; kaynak sayfaları MEBİ kitabına yöneliktir."
  },
  "tar-13": {
    "title": "Millî Mücadele",
    "prerequisites": [
      {
        "concept": "Yerel direnişten millî örgütlenmeye",
        "why": "Her kararın kapsadığı alan ayrıca okunmalıdır."
      }
    ],
    "goals": [
      "Yerel direnişten millî örgütlenmeye: Her kararın kapsadığı alan ayrıca okunmalıdır.",
      "Meclis, cephe ve diplomasi: Musul gibi sonraya kalanlarla çözülenler ayrılır."
    ],
    "chapters": [
      {
        "title": "Yerel direnişten millî örgütlenmeye",
        "source": {
          "book": "TYT-tar",
          "pages": [
            157,
            158,
            159,
            160,
            161,
            162,
            163,
            164,
            165,
            166,
            167,
            168,
            169,
            170,
            171,
            172,
            173,
            174,
            175,
            176
          ]
        },
        "explanation": [
          "İşgallere karşı farklı yerel cemiyet ve kuvvetler doğdu. Sorun yalnız silahlı direnmek değil bölgeleri ortak karar ve meşruiyet altında birleştirmekti. Amasya bağımsızlıkla millet iradesini ilişkilendirirken kongreler temsil ve örgütlenmeyi geliştirdi. Erzurum’un toplanış bakımından bölgeselliği bütün kararlarının bölgesel sonuçlu olduğu anlamına gelmez.",
          "Millî Mücadele’de meşruiyet, temsil ve fiili güç birbirine bağlı ama farklı alanlardır. Cemiyetlerin birleştirilmesi örgütsel birliği, meclisin açılması temsil temelini, düzenli ordunun kurulması askerî kapasiteyi güçlendirir. Bir belgenin millî egemenlik vurgusu taşıması bütün kurumların o tarihte tamamlandığını göstermez; ilke ve uygulama aşamaları ayrılır. Cephelerde Doğu, Güney ve Batı’nın koşulları aynı değildir; yerel direniş, düzenli ordu ve diplomasi farklı ağırlıklar taşır. Antlaşmaları karşılaştırırken hangi tarafla imzalandığı, hangi cepheyi veya sorunu etkilediği ve sonraya ne bıraktığı sorulmalıdır. Mudanya ile Lozan arasındaki aşamalar bu ayrımla okununca ateşkes, barış ve tanınma kavramları karışmaz. Başarıyı yalnız tek kişi veya tek muharebeye indirgemek toplumsal kaynak ve kurum katkısını gizler.",
          "Bağımsızlık dış müdahaleye karşı özgür karar verebilmektir. Millî egemenlik ise yönetme yetkisinin millete ait olmasıdır. İşgale direnmek ilkine, TBMM’nin açılması ikincisine doğrudan örnektir."
        ],
        "example": {
          "question": "Bölgesel katılımla toplanan kongrenin vatanın bütünlüğü kararını sınıflandır.",
          "steps": [
            "Toplanış temsilcilerin geldiği alanla ilgilidir.",
            "Karar bütün vatanı kapsayabilir.",
            "Toplanma niteliği ve karar kapsamı ayrı ölçütlerdir."
          ],
          "answer": "Bölgesel toplanış millî karar üretebilir.",
          "check": "Her kararın kapsadığı alan ayrıca okunmalıdır."
        },
        "misconceptions": [
          {
            "wrong": "Bölgesel kongrenin bütün kararları bölgeseldir.",
            "correct": "Her kararın kapsadığı alan ayrıca okunmalıdır.",
            "why": "Toplanış temsilcilerin geldiği alanla ilgilidir. Karar bütün vatanı kapsayabilir. Toplanma niteliği ve karar kapsamı ayrı ölçütlerdir."
          }
        ],
        "reasoningChecks": [
          {
            "question": "Sivas’ta cemiyetlerin birleşmesi ne sağlar?",
            "answer": "Ortak temsil, koordinasyon ve karar birliği.",
            "why": "Her kararın kapsadığı alan ayrıca okunmalıdır."
          }
        ]
      },
      {
        "title": "Meclis, cephe ve diplomasi",
        "source": {
          "book": "TYT-tar",
          "pages": [
            157,
            158,
            159,
            160,
            161,
            162,
            163,
            164,
            165,
            166,
            167,
            168,
            169,
            170,
            171,
            172,
            173,
            174,
            175,
            176
          ]
        },
        "explanation": [
          "Meclisin yetkileri bir arada toplaması savaş koşullarında karar birliğini hedefledi. Düzenli ordu askerî kaynak ve emir-komutayı merkezîleştirdi. Cephe başarıları müzakere imkânını güçlendirdi; antlaşmaların içeriği taraf ve dönem koşullarıyla belirlendi. Mudanya çatışmayı durdurma, Lozan yeni düzeni uluslararası müzakereyle kurma aşamasıdır; sonraya kalan başlıklar ayrıca ayırt edilir.",
          "TBMM Sevr’i kabul etmedi. Askerî mücadele ve diplomasi sonunda Lozan imzalandı. Lozan’da çözülemeyen meselelerin bulunması bütün sorunların aynı anda sonuçlandığı iddiasını geçersiz kılar."
        ],
        "example": {
          "question": "Askerî başarı diplomasiye nasıl etki eder?",
          "steps": [
            "Güç dengesi değişir.",
            "Müzakere beklentileri ve maliyetler değişir.",
            "Başarı her sorunu aynı anda çözmez."
          ],
          "answer": "Pazarlık gücü artar.",
          "check": "Musul gibi sonraya kalanlarla çözülenler ayrılır."
        },
        "misconceptions": [
          {
            "wrong": "Lozan bütün dış sorunları çözmüştür.",
            "correct": "Musul gibi sonraya kalanlarla çözülenler ayrılır.",
            "why": "Güç dengesi değişir. Müzakere beklentileri ve maliyetler değişir. Başarı her sorunu aynı anda çözmez."
          }
        ],
        "reasoningChecks": [
          {
            "question": "Düzenli ordu kurulması yerel direnişin katkısını siler mi?",
            "answer": "Hayır; örgütlenmenin farklı aşamalarıdır.",
            "why": "Musul gibi sonraya kalanlarla çözülenler ayrılır."
          }
        ]
      }
    ],
    "connections": [
      {
        "concept": "Yerel direnişten millî örgütlenmeye",
        "why": "Her kararın kapsadığı alan ayrıca okunmalıdır."
      },
      {
        "concept": "Meclis, cephe ve diplomasi",
        "why": "Musul gibi sonraya kalanlarla çözülenler ayrılır."
      }
    ],
    "authorship": "Özgün öğretmen anlatımı ve özgün çözümleme örnekleri; kaynak sayfaları MEBİ kitabına yöneliktir."
  },
  "tar-14": {
    "title": "Atatürk ilkeleri ve inkılapları",
    "prerequisites": [
      {
        "concept": "İlkeyi kurum değişikliğiyle eşleştirmek",
        "why": "Doğrudan işlevle yan bağlantılar birlikte ama ayrı incelenir."
      }
    ],
    "goals": [
      "İlkeyi kurum değişikliğiyle eşleştirmek: Doğrudan işlevle yan bağlantılar birlikte ama ayrı incelenir.",
      "Hukuki değişimden toplumsal etkiye: Uygulama süre ve kurum gerektirir."
    ],
    "chapters": [
      {
        "title": "İlkeyi kurum değişikliğiyle eşleştirmek",
        "source": {
          "book": "TYT-tar",
          "pages": [
            177,
            178,
            179,
            180,
            181,
            182,
            183,
            184,
            185,
            186
          ]
        },
        "explanation": [
          "Cumhuriyetçilik egemenlik ve yönetim biçimiyle; halkçılık ayrıcalıksız yurttaşlıkla; laiklik din-devlet ilişkisi ve hukukla ilgilidir. Milliyetçilik aidiyet ve bağımsızlığı, devletçilik ekonomik gelişmede devlet rolünü, inkılapçılık dönüşümü açıklar. Bir düzenleme birden fazla ilkeyle ilişkilendirilebilir; en doğrudan değişen kurum ve ihtiyaç aranır.",
          "Bir inkılabın hangi ilkeyle ilişkili olduğunu cevaplarken önce değişen kuralı yaz. Eğitim kurumlarının tek çatıya alınması hukukî-idari birliği güçlendirirken çağdaş eğitim hedefiyle de ilişkilidir. Soyadı düzenlemesi gündelik kimlik işlemlerini, medeni hukuk ise aile ve özel hukuk ilişkilerini etkiler. Aynı dönemde ekonomik planlama, özel girişim ve devlet işletmeleri birlikte bulunabilir; devletçilik basit bir mülkiyet tekeline indirgenmez. Cumhuriyetçilikle millî egemenlik yakındır ama cumhuriyetin adının bulunması tek başına demokratik katılımın bütün ölçütlerinin sağlandığını kanıtlamaz. Seçme-seçilme hakları ve kurumların işleyişi ayrı incelenir. İnkılapçılık, yapılan her değişimin kendiliğinden doğru olduğunu değil çağın ihtiyaçlarına göre akılcı yenilenme anlayışını ifade eden ilke olarak okunmalıdır.",
          "1924 Tevhid-i Tedrisat Kanunu eğitimde birliği hedefledi. 1926 Türk Medeni Kanunu medeni hukukta ve toplumsal yaşamda önemli değişiklikler getirdi. 1928 yeni Türk harflerinin kabulü okuryazarlık çalışmalarını destekledi."
        ],
        "example": {
          "question": "Saltanatın kaldırılması ile Medeni Kanun’u karşılaştır.",
          "steps": [
            "İlkinde hanedan egemenliği sona erer.",
            "İkincide medeni ilişkilerin hukuk düzeni değişir.",
            "Dönüştürülen kurum ve doğrudan amaç farklıdır."
          ],
          "answer": "İlki millî egemenlik; ikincisi laik hukuk ve eşitlikle ilişkilidir.",
          "check": "Doğrudan işlevle yan bağlantılar birlikte ama ayrı incelenir."
        },
        "misconceptions": [
          {
            "wrong": "Her inkılap yalnız tek ilkeyle açıklanır.",
            "correct": "Doğrudan işlevle yan bağlantılar birlikte ama ayrı incelenir.",
            "why": "İlkinde hanedan egemenliği sona erer. İkincide medeni ilişkilerin hukuk düzeni değişir. Dönüştürülen kurum ve doğrudan amaç farklıdır."
          }
        ],
        "reasoningChecks": [
          {
            "question": "Harf İnkılabı yalnız yönetim biçimi mi?",
            "answer": "Hayır; eğitim ve kültür dönüşümüdür.",
            "why": "Doğrudan işlevle yan bağlantılar birlikte ama ayrı incelenir."
          }
        ]
      },
      {
        "title": "Hukuki değişimden toplumsal etkiye",
        "source": {
          "book": "TYT-tar",
          "pages": [
            177,
            178,
            179,
            180,
            181,
            182,
            183,
            184,
            185,
            186
          ]
        },
        "explanation": [
          "İnkılapları hangi soruna yanıt verdiğiyle öğrenmek tarih listesini anlamlı kılar. Öğretim birliği parçalı eğitim yapısını; hukuk düzenlemeleri farklı kuralları; ekonomik girişimler kalkınmayı hedefledi. Kanun tarihiyle etkilerin yayılması aynı zaman değildir. Hakların kullanımı eğitim, kurum ve ekonomik koşullarla ilişkilidir.",
          "Kadınlara seçme ve seçilme hakkı verilmesi eşitlik açısından halkçılıkla, yönetime katılım açısından cumhuriyetçilikle ilişkilidir. Sorudaki anahtar ifade hangi boyutun sorulduğunu belirler."
        ],
        "example": {
          "question": "Kadınlara siyasi hak verilmesi yalnız oy anıyla sınırlı mıdır?",
          "steps": [
            "Hukuki statü ve temsil imkânı değişir.",
            "Kullanım eğitim ve katılımla ilişkilidir.",
            "Yasa ve uygulamanın yayılması ayrı süreçtir."
          ],
          "answer": "Hak, kurum-toplum ilişkisi içinde değerlendirilir.",
          "check": "Uygulama süre ve kurum gerektirir."
        },
        "misconceptions": [
          {
            "wrong": "Kanun çıkınca dönüşüm aynı gün tamamlanır.",
            "correct": "Uygulama süre ve kurum gerektirir.",
            "why": "Hukuki statü ve temsil imkânı değişir. Kullanım eğitim ve katılımla ilişkilidir. Yasa ve uygulamanın yayılması ayrı süreçtir."
          }
        ],
        "reasoningChecks": [
          {
            "question": "Devletçilik bütün özel girişimi yasaklar mı?",
            "answer": "Hayır; devletin öncü rolü özel girişimi bütünüyle dışlamak zorunda değildir.",
            "why": "Uygulama süre ve kurum gerektirir."
          }
        ]
      }
    ],
    "connections": [
      {
        "concept": "İlkeyi kurum değişikliğiyle eşleştirmek",
        "why": "Doğrudan işlevle yan bağlantılar birlikte ama ayrı incelenir."
      },
      {
        "concept": "Hukuki değişimden toplumsal etkiye",
        "why": "Uygulama süre ve kurum gerektirir."
      }
    ],
    "authorship": "Özgün öğretmen anlatımı ve özgün çözümleme örnekleri; kaynak sayfaları MEBİ kitabına yöneliktir."
  },
  "cog-01": {
    "title": "Doğa ve insan",
    "prerequisites": [
      {
        "concept": "Doğa ve insan arasındaki iki yönlü ilişki",
        "why": "Doğal koşulların etkisi biçim ve maliyet değiştirerek devam eder."
      }
    ],
    "goals": [
      "Doğa ve insan arasındaki iki yönlü ilişki: Doğal koşulların etkisi biçim ve maliyet değiştirerek devam eder.",
      "Dağılış, bağlantı ve ölçek: Sabit kalan değişken neden olamaz; karşılaştırma ölçeği belirlenmelidir."
    ],
    "chapters": [
      {
        "title": "Doğa ve insan arasındaki iki yönlü ilişki",
        "source": {
          "book": "TYT-cog",
          "pages": [
            9,
            10,
            11,
            12,
            13
          ]
        },
        "explanation": [
          "İklim, yer şekli ve su kaynakları insan faaliyetlerini etkiler; insan da baraj, tarım, şehirleşme ve ulaşım yapılarıyla çevreyi dönüştürür. Doğal koşul tek başına sonucu belirlemez; teknoloji, sermaye ve toplumsal tercihler aynı çevrede farklı kullanım biçimleri yaratabilir. Bir bölgedeki zorluğu aşmak doğal etkilerin bittiği anlamına gelmez; maliyet ve risk yeni biçimde sürer.",
          "Mekânsal karşılaştırmada yalnız iki yerin farkını listelemek yetmez; farkın hangi mekanizmayla oluştuğunu açıklamak gerekir. İki ovadan biri tarımla, diğeri sanayiyle öne çıkıyorsa toprak verimliliği yanında ulaşım, tarihî yatırımlar ve pazar ilişkileri incelenir. Fiziki ve beşerî etkenler rakip açıklamalar olmak zorunda değildir. İnsan bir doğal tehlikeyi teknolojiyle azaltırken yeni bağımlılıklar oluşturabilir: sulama kuraklık etkisini hafifletir ama su kaynağı ve enerjiye gereksinimi artırır. Bir örnekte yarar görülmesi bütün alanlarda aynı uygulamanın uygun olacağını kanıtlamaz. Yer, ölçek ve koşul belirtilmeden kurulan ‘her yerde’ veya ‘yalnızca’ yargıları coğrafi ilişkilerin çeşitliliğini çoğu zaman aşırı basitleştirir.",
          "İklim, yer şekilleri, sular ve toprak fiziki coğrafyanın; nüfus, yerleşme ve ekonomik faaliyetler beşerî coğrafyanın inceleme alanındadır. Bu alanlar birbirini etkiler."
        ],
        "example": {
          "question": "Dağlık alanda tünel yapılması doğanın etkisini kaldırır mı?",
          "steps": [
            "Tünel ulaşım engelini azaltır.",
            "Yapım maliyeti ve jeolojik risk devam eder.",
            "Teknoloji doğal etkiyi değiştirir ama yok etmez."
          ],
          "answer": "İnsan-doğa etkileşimi yeni araçlarla sürer.",
          "check": "Doğal koşulların etkisi biçim ve maliyet değiştirerek devam eder."
        },
        "misconceptions": [
          {
            "wrong": "Teknoloji gelişince doğal koşullar önemsiz olur.",
            "correct": "Doğal koşulların etkisi biçim ve maliyet değiştirerek devam eder.",
            "why": "Tünel ulaşım engelini azaltır. Yapım maliyeti ve jeolojik risk devam eder. Teknoloji doğal etkiyi değiştirir ama yok etmez."
          }
        ],
        "reasoningChecks": [
          {
            "question": "Aynı kıyıda iki şehir neden farklı gelişir?",
            "answer": "Liman, altyapı, tarih ve ekonomi gibi beşerî koşullar da etkilidir.",
            "why": "Doğal koşulların etkisi biçim ve maliyet değiştirerek devam eder."
          }
        ]
      },
      {
        "title": "Dağılış, bağlantı ve ölçek",
        "source": {
          "book": "TYT-cog",
          "pages": [
            9,
            10,
            11,
            12,
            13
          ]
        },
        "explanation": [
          "Coğrafya yalnız yer adlarını bilmek değildir; bir olgunun nerede, neden orada ve başka olgularla nasıl ilişkili olduğunu araştırır. Fiziki coğrafya doğal, beşerî coğrafya insan faaliyetlerinin mekânsal örüntülerine odaklanır. Sorunun ölçeği değişince önemli görünen neden de değişebilir: dünya ölçeğinde enlem öne çıkarken aynı vadide bakı veya yükselti belirleyici olabilir.",
          "Bir yağış bölgesi doğal, sanayi bölgesi beşerî, bir hastanenin hizmet alanı işlevsel bölge örneğidir. Aynı yer, farklı ölçütlerle oluşturulmuş birden fazla bölgede bulunabilir."
        ],
        "example": {
          "question": "Aynı enlemdeki iki yamacın sıcaklığını karşılaştırırken hangi etken öne çıkar?",
          "steps": [
            "Enlem iki yamaç için aynıdır.",
            "Güneş ışınlarını alma durumu bakıyla değişir.",
            "Yükselti ve yerel rüzgâr da denetlenir."
          ],
          "answer": "Yerel ölçekte bakı ve yükselti incelenir.",
          "check": "Sabit kalan değişken neden olamaz; karşılaştırma ölçeği belirlenmelidir."
        },
        "misconceptions": [
          {
            "wrong": "Her sıcaklık farkı enlemden doğar.",
            "correct": "Sabit kalan değişken neden olamaz; karşılaştırma ölçeği belirlenmelidir.",
            "why": "Enlem iki yamaç için aynıdır. Güneş ışınlarını alma durumu bakıyla değişir. Yükselti ve yerel rüzgâr da denetlenir."
          }
        ],
        "reasoningChecks": [
          {
            "question": "Nüfusun nehir çevresinde yoğunlaşması fiziki mi beşerî mi?",
            "answer": "Nüfus beşerî olgudur; su ve arazi gibi fiziki koşullarla açıklanabilir.",
            "why": "Sabit kalan değişken neden olamaz; karşılaştırma ölçeği belirlenmelidir."
          }
        ]
      }
    ],
    "connections": [
      {
        "concept": "Doğa ve insan arasındaki iki yönlü ilişki",
        "why": "Doğal koşulların etkisi biçim ve maliyet değiştirerek devam eder."
      },
      {
        "concept": "Dağılış, bağlantı ve ölçek",
        "why": "Sabit kalan değişken neden olamaz; karşılaştırma ölçeği belirlenmelidir."
      }
    ],
    "authorship": "Özgün öğretmen anlatımı ve özgün çözümleme örnekleri; kaynak sayfaları MEBİ kitabına yöneliktir."
  },
  "cog-02": {
    "title": "Dünya ve Güneş",
    "prerequisites": [
      {
        "concept": "Günlük harekette yön ve saat",
        "why": "Yerel saat boylama; resmî saat devletin saat dilimi tercihine bağlıdır."
      }
    ],
    "goals": [
      "Günlük harekette yön ve saat: Yerel saat boylama; resmî saat devletin saat dilimi tercihine bağlıdır.",
      "Eksen eğikliği ve yıllık hareket: Uzaklık her iki yarımküre için ortaktır; zıt mevsimleri açıklayamaz."
    ],
    "chapters": [
      {
        "title": "Günlük harekette yön ve saat",
        "source": {
          "book": "TYT-cog",
          "pages": [
            14,
            15,
            16,
            17,
            18
          ]
        },
        "explanation": [
          "Dünya’nın batıdan doğuya dönmesi Güneş’in görünürde doğudan batıya hareketine, yerel saat farkına ve günlük aydınlanma döngüsüne zemin oluşturur. Aynı anda farklı meridyenler Güneş’e göre farklı konumdadır. Çizgisel hız enlemle değişirken açısal hız aynı dönüş için ortaktır. Şeklin kutuplara doğru daralmasıyla günlük hareketin sonuçları birbirine karıştırılmamalıdır.",
          "Dünya’nın şekliyle günlük hareketin sonuçlarını ayırmak neden sorularında önemlidir. Paralellerin kutuplara doğru kısalması şekille, aynı yüzeyin gün içinde aydınlık ve karanlığa dönmesi hareketle ilişkilidir. Ekinoks tarihlerinde gece-gündüz eşitliği öğretim modelinin temel sonucudur; gerçek gözlemde kırılma gibi ayrıntılar farklılık yaratabilir. Gölge uzunluğunu karşılaştırırken cismin boyu sabit tutulmalıdır; yalnız saat bilgisi yetmez, enlem ve tarih de önemlidir. Kuzey yarımkürede dönencenin kuzeyindeki yerlerde öğle Güneşi güney yönünde görülür. Gündüzün uzaması toplam enerji alımını etkiler ama anlık ışın açısıyla aynı büyüklük değildir; uzun gündüz ve düşük açı aynı yerde birlikte bulunabilir.",
          "Dünya’nın kendi ekseni çevresinde dönmesi gün içinde gölge yönünün ve uzunluğunun değişmesine, yerel saat farklarına yol açar. Güneş çevresindeki dolanım eksen eğikliğiyle birlikte yıl içindeki değişimleri oluşturur."
        ],
        "example": {
          "question": "30°D ile 45°D’deki iki yerde yerel saat nasıl değişir?",
          "steps": [
            "15° boylam farkı vardır.",
            "Her 1° dört dakikaya karşılık gelir.",
            "Doğudaki yer Güneş’e daha önce dönük olur."
          ],
          "answer": "45°D’nin yerel saati 60 dakika ileridir.",
          "check": "Yerel saat boylama; resmî saat devletin saat dilimi tercihine bağlıdır."
        },
        "misconceptions": [
          {
            "wrong": "Doğudaki yerin saati her koşulda resmî olarak ileridir.",
            "correct": "Yerel saat boylama; resmî saat devletin saat dilimi tercihine bağlıdır.",
            "why": "15° boylam farkı vardır. Her 1° dört dakikaya karşılık gelir. Doğudaki yer Güneş’e daha önce dönük olur."
          }
        ],
        "reasoningChecks": [
          {
            "question": "İki noktada açısal hız farklı mı?",
            "answer": "Dünya birlikte döndüğünden açısal hız aynıdır.",
            "why": "Yerel saat boylama; resmî saat devletin saat dilimi tercihine bağlıdır."
          }
        ]
      },
      {
        "title": "Eksen eğikliği ve yıllık hareket",
        "source": {
          "book": "TYT-cog",
          "pages": [
            14,
            15,
            16,
            17,
            18
          ]
        },
        "explanation": [
          "Mevsimler Güneş’e uzaklığın basit sonucu değildir. Eksen eğikliği ve yıllık hareket, ışınların geliş açısını ve gündüz süresini yıl içinde değiştirir. Kuzey ve Güney yarımkürelerde aynı tarihte farklı mevsimler yaşanması bu mekanizmayı destekler. Güneş ışığının dik geldiği alan dönenceler arasında hareket eder; kutup daireleri aydınlanma süresinin uç değerleriyle ilgilidir.",
          "Mevsimler Güneş’e uzaklığın değişmesiyle açıklanmaz. Temel etken Güneş ışınlarının düşme açısı ve gündüz süresindeki değişimdir. İki yarım kürede aynı anda farklı mevsimler yaşanır."
        ],
        "example": {
          "question": "Haziranda Kuzey yarımküre yaz yaşarken Güney neden kıştır?",
          "steps": [
            "Kuzey yarımküre Güneş’e daha dönüktür.",
            "Işın açısı ve gündüz süresi kuzeyde artar.",
            "Aynı Dünya-Güneş uzaklığı güney için kışa eşlik eder."
          ],
          "answer": "Temel neden eksen eğikliği ve yıllık harekettir.",
          "check": "Uzaklık her iki yarımküre için ortaktır; zıt mevsimleri açıklayamaz."
        },
        "misconceptions": [
          {
            "wrong": "Yaz, Dünya Güneş’e en yakınken olur.",
            "correct": "Uzaklık her iki yarımküre için ortaktır; zıt mevsimleri açıklayamaz.",
            "why": "Kuzey yarımküre Güneş’e daha dönüktür. Işın açısı ve gündüz süresi kuzeyde artar. Aynı Dünya-Güneş uzaklığı güney için kışa eşlik eder."
          }
        ],
        "reasoningChecks": [
          {
            "question": "Eksen eğikliği olmasaydı gündüz süreleri yıl içinde aynı biçimde değişir miydi?",
            "answer": "Mevsimlik aydınlanma farkı büyük ölçüde ortadan kalkardı.",
            "why": "Uzaklık her iki yarımküre için ortaktır; zıt mevsimleri açıklayamaz."
          }
        ]
      }
    ],
    "connections": [
      {
        "concept": "Günlük harekette yön ve saat",
        "why": "Yerel saat boylama; resmî saat devletin saat dilimi tercihine bağlıdır."
      },
      {
        "concept": "Eksen eğikliği ve yıllık hareket",
        "why": "Uzaklık her iki yarımküre için ortaktır; zıt mevsimleri açıklayamaz."
      }
    ],
    "authorship": "Özgün öğretmen anlatımı ve özgün çözümleme örnekleri; kaynak sayfaları MEBİ kitabına yöneliktir."
  },
  "cog-03": {
    "title": "Konum",
    "prerequisites": [
      {
        "concept": "Koordinattan konuma geçmek",
        "why": "Enlem dışında yükselti, akıntı ve denizellik de etkilidir."
      }
    ],
    "goals": [
      "Koordinattan konuma geçmek: Enlem dışında yükselti, akıntı ve denizellik de etkilidir.",
      "Saat hesabı ve Türkiye’nin konumu: Yerel saat farkı boylam farkından hesaplanır."
    ],
    "chapters": [
      {
        "title": "Koordinattan konuma geçmek",
        "source": {
          "book": "TYT-cog",
          "pages": [
            19,
            20,
            21,
            22,
            23
          ]
        },
        "explanation": [
          "Enlem ekvatora açısal uzaklığı, boylam başlangıç meridyenine açısal uzaklığı gösterir. Enlem ışın açısı, sıcaklık kuşakları ve gündüz süresinin değişimiyle; boylam yerel saatle doğrudan ilişkilidir. Aynı boylamda olmak aynı sıcaklığı gerektirmez. Bir yerin matematik konumu ile komşuları, ulaşım yolları ve yer şekillerinden doğan göreli konumu ayrı açıklama katmanlarıdır.",
          "Boylam hesabında önce doğu-batı konumunu bir sayı doğrusu gibi düzenlemek işaret hatasını azaltır. İki nokta başlangıç meridyeninin aynı tarafındaysa fark alınır, farklı tarafındaysa açısal uzaklıklar toplanır; sonuç doğuda saat ileride olacak biçimde yorumlanır. Tarih değiştirme çizgisi dünya çevresinde saatlerin birikmesiyle ilgili ayrı konudur. Koordinat sorusunda paralel aralığıyla meridyen aralığını aynı uzunluk sanmamak gerekir; meridyenler kutuplarda birleşir, bu yüzden aynı boylam farkının yüzey mesafesi enleme göre değişir. Türkiye’nin konum sonuçlarında boğazlar, komşular ve geçiş yolları göreli konuma; Güneş ışınları ve kuşak özellikleri matematik konuma bağlanır. Aynı cümlede iki tür neden birlikte bulunabilir.",
          "Aralarında 10° boylam bulunan iki yerin yerel saat farkı 40 dakikadır. Ulusal saat ise ortak kullanılan hukuki saattir; her şehrin yerel saatiyle aynı olmak zorunda değildir."
        ],
        "example": {
          "question": "40°K 30°D ile 40°K 45°D noktalarını karşılaştır.",
          "steps": [
            "Enlem aynı olduğundan bazı astronomik koşullar ortaktır.",
            "Boylam farkı yerel saati değiştirir.",
            "Sıcaklık, denizellik ve yükselti yüzünden farklı olabilir."
          ],
          "answer": "Aynı enlem aynı gerçek sıcaklık demek değildir.",
          "check": "Enlem dışında yükselti, akıntı ve denizellik de etkilidir."
        },
        "misconceptions": [
          {
            "wrong": "Aynı paraleldeki bütün yerler aynı iklimdedir.",
            "correct": "Enlem dışında yükselti, akıntı ve denizellik de etkilidir.",
            "why": "Enlem aynı olduğundan bazı astronomik koşullar ortaktır. Boylam farkı yerel saati değiştirir. Sıcaklık, denizellik ve yükselti yüzünden farklı olabilir."
          }
        ],
        "reasoningChecks": [
          {
            "question": "Aynı meridyendeki yerlerin yerel saati niçin aynıdır?",
            "answer": "Güneş’e göre açısal konumları aynıdır.",
            "why": "Enlem dışında yükselti, akıntı ve denizellik de etkilidir."
          }
        ]
      },
      {
        "title": "Saat hesabı ve Türkiye’nin konumu",
        "source": {
          "book": "TYT-cog",
          "pages": [
            19,
            20,
            21,
            22,
            23
          ]
        },
        "explanation": [
          "Yerel saatte 360° dönüş 24 saate, 15° bir saate, 1° dört dakikaya karşılık gelir. Önce boylam farkı bulunur; doğuya gidildikçe saat ileri alınır. Ulusal saat, ülkenin seçtiği referans ve uygulamaya bağlıdır. Türkiye’nin boğazlar, kıtalar ve denizlerle ilişkisi göreli konum; orta kuşakta bulunması matematik konumdur.",
          "Türkiye dönencelerin kuzeyindedir; yatay zemindeki dik bir çubuğa Güneş ışınları yıl içinde dik gelmez. Yerel öğle vaktinde gölge genel olarak kuzeye yönelir."
        ],
        "example": {
          "question": "20°D’de saat 10.00 iken 35°D’de yerel saat kaçtır?",
          "steps": [
            "Boylam farkı 15°dir.",
            "15×4=60 dakika bulunur.",
            "Doğudaki noktada saat ileri olur."
          ],
          "answer": "11.00’dır.",
          "check": "Yerel saat farkı boylam farkından hesaplanır."
        },
        "misconceptions": [
          {
            "wrong": "Saat hesabında enlem farkı kullanılır.",
            "correct": "Yerel saat farkı boylam farkından hesaplanır.",
            "why": "Boylam farkı 15°dir. 15×4=60 dakika bulunur. Doğudaki noktada saat ileri olur."
          }
        ],
        "reasoningChecks": [
          {
            "question": "Türkiye’de farklı meridyenlerde resmî saatin aynı olması çelişki mi?",
            "answer": "Hayır; ulusal saat yerel saatlerden farklı bir ortak uygulamadır.",
            "why": "Yerel saat farkı boylam farkından hesaplanır."
          }
        ]
      }
    ],
    "connections": [
      {
        "concept": "Koordinattan konuma geçmek",
        "why": "Enlem dışında yükselti, akıntı ve denizellik de etkilidir."
      },
      {
        "concept": "Saat hesabı ve Türkiye’nin konumu",
        "why": "Yerel saat farkı boylam farkından hesaplanır."
      }
    ],
    "authorship": "Özgün öğretmen anlatımı ve özgün çözümleme örnekleri; kaynak sayfaları MEBİ kitabına yöneliktir."
  },
  "cog-04": {
    "title": "Harita bilgisi",
    "prerequisites": [
      {
        "concept": "Ölçeği oran olarak okumak",
        "why": "Ölçek kesrinin değeri ve ayrıntı miktarı payda küçüldükçe artar."
      }
    ],
    "goals": [
      "Ölçeği oran olarak okumak: Ölçek kesrinin değeri ve ayrıntı miktarı payda küçüldükçe artar.",
      "Harita modeli ve iz düşüm: Harita seçilmiş özellikleri bir ölçek ve projeksiyonla modelleyen temsildir."
    ],
    "chapters": [
      {
        "title": "Ölçeği oran olarak okumak",
        "source": {
          "book": "TYT-cog",
          "pages": [
            24,
            25,
            26,
            27,
            28
          ]
        },
        "explanation": [
          "Ölçek harita uzunluğunun gerçek uzunluğa oranıdır. Payda büyüdükçe aynı gerçek alan daha küçük gösterilir ve ayrıntı azalır. Büyük ölçekli haritada sayısal kesir büyüktür; bu yüzden paydası küçüktür. Haritanın kâğıt üzerinde büyük görünmesi ölçeği tek başına belirlemez. Uzunlukta oran bir kez, alanda iki boyut nedeniyle karesiyle kullanılır.",
          "Alan hesabında ölçek iki kez etkili olur. 1/100.000 ölçekli haritada 1 cm gerçek uzunlukta 1 km ise 1 cm² gerçek alanda 1 km² karşılığıdır. Ölçek iki kat büyütüldüğünde aynı yerin haritadaki alanı dört katına çıkar; yalnız uzunluk iki katına çıkar. Haritada eğim veya yükselti farkı bulunması için lejant ve eş yükselti aralığı bilinmelidir. Renkli fiziki haritada yeşil her yerde orman demek değildir; kullanılan yükselti basamağına karşılık gelebilir. Haritanın amacı ve işaret sistemini okumadan renkten doğrudan bitki örtüsü sonucu çıkarmak temsilin dilini yanlış anlamaktır. Her hesapta önce harita birimi ve gerçek birim açıkça yazılır, dönüşüm en son tekrar denetlenir.",
          "1/100.000 ölçekli haritada 1 cm, gerçekte 100.000 cm yani 1 km’dir. Harita uzunluğunu payda ile çarparken birimleri aynı tut; sonuçta kilometreye dönüştür."
        ],
        "example": {
          "question": "1/200.000 ölçekli haritada 3 cm yol gerçekte kaç kilometredir?",
          "steps": [
            "1 cm=200.000 cm=2 km’dir.",
            "3 cm için 3×2 hesaplanır.",
            "Birim dönüşümü oranı kurduktan sonra kontrol edilir."
          ],
          "answer": "6 km’dir.",
          "check": "Ölçek kesrinin değeri ve ayrıntı miktarı payda küçüldükçe artar."
        },
        "misconceptions": [
          {
            "wrong": "Paydası büyük harita daha büyük ölçeklidir.",
            "correct": "Ölçek kesrinin değeri ve ayrıntı miktarı payda küçüldükçe artar.",
            "why": "1 cm=200.000 cm=2 km’dir. 3 cm için 3×2 hesaplanır. Birim dönüşümü oranı kurduktan sonra kontrol edilir."
          }
        ],
        "reasoningChecks": [
          {
            "question": "Harita iki kat büyütülürse payda ne olur?",
            "answer": "Yarıya iner; aynı gerçek uzunluk daha büyük çizilir.",
            "why": "Ölçek kesrinin değeri ve ayrıntı miktarı payda küçüldükçe artar."
          }
        ]
      },
      {
        "title": "Harita modeli ve iz düşüm",
        "source": {
          "book": "TYT-cog",
          "pages": [
            24,
            25,
            26,
            27,
            28
          ]
        },
        "explanation": [
          "Küresel yüzeyin düzleme aktarılması bütün özellikleri aynı anda koruyamaz. Projeksiyon, amaç ve bölgeye göre seçilir; alan, açı ve uzaklık bozulmaları değişebilir. Harita yön, ölçek, işaretler ve koordinatlarla okunur. Kuş uçuşu uzaklıkla yol uzunluğu aynı değildir; yol arazinin biçimine göre uzar. Eğim karşılaştırmasında yükselti farkı kadar yatay mesafe de gereklidir.",
          "Fiziki haritalarda renk basamakları yükseltiyi gösterir. Yeşil, tek başına ormanlık alan anlamına gelmez. Bir rengi yorumlamadan önce haritanın türüne ve lejantına bak."
        ],
        "example": {
          "question": "İki şehir haritada 5 cm uzaklıkta, kara yolu ise 80 km. Kuş uçuşu 50 km çıkması neden çelişmez?",
          "steps": [
            "Harita iki noktayı doğrusal bağlar.",
            "Yol vadi ve geçitleri izleyebilir.",
            "Yol uzunluğu doğrusal uzaklıktan büyük olabilir."
          ],
          "answer": "Fark güzergâhtan doğabilir.",
          "check": "Harita seçilmiş özellikleri bir ölçek ve projeksiyonla modelleyen temsildir."
        },
        "misconceptions": [
          {
            "wrong": "Harita hiçbir bozulma içermeyen fotoğraftır.",
            "correct": "Harita seçilmiş özellikleri bir ölçek ve projeksiyonla modelleyen temsildir.",
            "why": "Harita iki noktayı doğrusal bağlar. Yol vadi ve geçitleri izleyebilir. Yol uzunluğu doğrusal uzaklıktan büyük olabilir."
          }
        ],
        "reasoningChecks": [
          {
            "question": "Bütün kıtaları alan ve biçim bozulmadan göstermek mümkün mü?",
            "answer": "Düzlemde bütün özellikler aynı anda korunamaz.",
            "why": "Harita seçilmiş özellikleri bir ölçek ve projeksiyonla modelleyen temsildir."
          }
        ]
      }
    ],
    "connections": [
      {
        "concept": "Ölçeği oran olarak okumak",
        "why": "Ölçek kesrinin değeri ve ayrıntı miktarı payda küçüldükçe artar."
      },
      {
        "concept": "Harita modeli ve iz düşüm",
        "why": "Harita seçilmiş özellikleri bir ölçek ve projeksiyonla modelleyen temsildir."
      }
    ],
    "authorship": "Özgün öğretmen anlatımı ve özgün çözümleme örnekleri; kaynak sayfaları MEBİ kitabına yöneliktir."
  },
  "cog-05": {
    "title": "Atmosfer ve sıcaklık",
    "prerequisites": [
      {
        "concept": "Hava durumu ve iklimin zaman ölçeği",
        "why": "İklim eğilimleri geniş ve uzun süreli veriyle değerlendirilir."
      }
    ],
    "goals": [
      "Hava durumu ve iklimin zaman ölçeği: İklim eğilimleri geniş ve uzun süreli veriyle değerlendirilir.",
      "Sıcaklık etkenlerini denetlemek: Deniz etkisi ve yükselti gibi etkenler ayrıca incelenmelidir."
    ],
    "chapters": [
      {
        "title": "Hava durumu ve iklimin zaman ölçeği",
        "source": {
          "book": "TYT-cog",
          "pages": [
            32,
            33,
            34,
            35
          ]
        },
        "explanation": [
          "Hava durumu kısa süreli atmosfer koşuludur; iklim uzun yılların örüntü ve olasılıklarıyla tanımlanır. Bir kış gününün çok soğuk olması bölgenin iklimini tek başına değiştirmez veya uzun dönemli eğilimi çürütmez. Atmosfer katmanlarının işlevleri ayrıdır; günlük olayların çoğu su buharının yoğunlaştığı troposferde gerçekleşir. Veri serisinde süre ve gözlem alanı belirtilmeden genelleme yapılmaz.",
          "Denizellik, günlük ve yıllık sıcaklık genliğini sınırlayabilir; ancak kıyı olmak bütün yerlerde aynı sıcaklığı vermez. Sıcak-soğuk akıntı, hâkim rüzgâr ve kıyı gerisindeki dağlar etkiyi değiştirir. Yükseldikçe sıcaklığın genel azalışı ortalama öğretim ilişkisi olarak kullanılır; gerçek atmosferde terselme gibi durumlar bulunabilir. Soruda indirgeme katsayısı veriliyorsa verilen değer esas alınır, her olaya değişmez fizik yasası gibi uygulanmaz. Bakı, özellikle güneş ışınlarının geliş açısını değiştirir; yönün etkisi yarımküreye göre değerlendirilir. Sıcaklık haritasında izotermlerin enleme paralel gitmemesi diğer etkenlerin işlediğini gösterir. Bu sapmayı açıklamak için birden fazla olası neden içinden haritada kanıtı bulunan seçilir.",
          "“Bugün yağmurlu” hava durumudur. “Yazları sıcak ve kurak” uzun yılların ortalama özelliklerini anlatan bir iklim ifadesidir. Tek bir aşırı sıcak gün iklimi tek başına tanımlamaz."
        ],
        "example": {
          "question": "Bir kentte mart günü kar yağması “burası her zaman soğuktur” sonucunu verir mi?",
          "steps": [
            "Gözlem tek güne aittir.",
            "İklim için uzun yılların ortalamaları ve değişkenliği gerekir.",
            "Tek olay dağılımın içindeki istisnai değer olabilir."
          ],
          "answer": "Tek günlük olay iklimi tek başına tanımlamaz.",
          "check": "İklim eğilimleri geniş ve uzun süreli veriyle değerlendirilir."
        },
        "misconceptions": [
          {
            "wrong": "Bir sıcak gün küresel eğilimin kanıtı, bir soğuk gün çürütmesidir.",
            "correct": "İklim eğilimleri geniş ve uzun süreli veriyle değerlendirilir.",
            "why": "Gözlem tek güne aittir. İklim için uzun yılların ortalamaları ve değişkenliği gerekir. Tek olay dağılımın içindeki istisnai değer olabilir."
          }
        ],
        "reasoningChecks": [
          {
            "question": "İklim yalnız ortalama sıcaklık mıdır?",
            "answer": "Yağış, rüzgâr, mevsimsellik ve uç değerler de önemlidir.",
            "why": "İklim eğilimleri geniş ve uzun süreli veriyle değerlendirilir."
          }
        ]
      },
      {
        "title": "Sıcaklık etkenlerini denetlemek",
        "source": {
          "book": "TYT-cog",
          "pages": [
            32,
            33,
            34,
            35
          ]
        },
        "explanation": [
          "Enlem, yükselti, denizellik, bakı, rüzgâr ve akıntı sıcaklığı birlikte etkiler. İndirgenmiş sıcaklık yükselti etkisini ayırmaya dönük bir karşılaştırmadır; ölçülen gerçek sıcaklık değildir. Aynı enlemde deniz kıyısıyla iç kesimin yıllık sıcaklık farkı farklı olabilir; suyun ısıl davranışı değişimleri yavaşlatır. Bir karşılaştırmada aynı kalan değişkenleri ayırıp değişenleri değerlendirmek neden seçimini güçlendirir.",
          "Aynı enlemde bulunan kıyı ve iç kesim şehirlerinin sıcaklık farkını enlemle açıklayamazsın. Önce yükselti ve denize uzaklığı kontrol et. Sorunun verdiği ortak özellikleri ele."
        ],
        "example": {
          "question": "Aynı enlemde kıyı ve iç kesimin yaz-kış farkı neden farklıdır?",
          "steps": [
            "Enlem ortak olduğundan temel farkı açıklamaz.",
            "Deniz geç ısınıp geç soğuyarak kıyıyı ılımanlaştırır.",
            "İç kesimde karasallık farkı büyütebilir."
          ],
          "answer": "Denizellik yıllık sıcaklık farkını azaltabilir.",
          "check": "Deniz etkisi ve yükselti gibi etkenler ayrıca incelenmelidir."
        },
        "misconceptions": [
          {
            "wrong": "Aynı enlem aynı sıcaklık farkını zorunlu kılar.",
            "correct": "Deniz etkisi ve yükselti gibi etkenler ayrıca incelenmelidir.",
            "why": "Enlem ortak olduğundan temel farkı açıklamaz. Deniz geç ısınıp geç soğuyarak kıyıyı ılımanlaştırır. İç kesimde karasallık farkı büyütebilir."
          }
        ],
        "reasoningChecks": [
          {
            "question": "İndirgenmiş haritada da fark sürüyorsa yalnız yükselti yeterli neden mi?",
            "answer": "Hayır; diğer etkenler aranır.",
            "why": "Deniz etkisi ve yükselti gibi etkenler ayrıca incelenmelidir."
          }
        ]
      }
    ],
    "connections": [
      {
        "concept": "Hava durumu ve iklimin zaman ölçeği",
        "why": "İklim eğilimleri geniş ve uzun süreli veriyle değerlendirilir."
      },
      {
        "concept": "Sıcaklık etkenlerini denetlemek",
        "why": "Deniz etkisi ve yükselti gibi etkenler ayrıca incelenmelidir."
      }
    ],
    "authorship": "Özgün öğretmen anlatımı ve özgün çözümleme örnekleri; kaynak sayfaları MEBİ kitabına yöneliktir."
  },
  "cog-06": {
    "title": "Basınç, rüzgâr ve yağış",
    "prerequisites": [
      {
        "concept": "Yükselen havanın nem davranışı",
        "why": "Sıcaklık değişimi oranı, miktar değişmeden de artırabilir."
      }
    ],
    "goals": [
      "Yükselen havanın nem davranışı: Sıcaklık değişimi oranı, miktar değişmeden de artırabilir.",
      "Yağışı oluşturan yükselme: Rüzgâr yönü ve yükselme-alçalma farklı yağış koşulları yaratır."
    ],
    "chapters": [
      {
        "title": "Yükselen havanın nem davranışı",
        "source": {
          "book": "TYT-cog",
          "pages": [
            36,
            37,
            38,
            39,
            40,
            41
          ]
        },
        "explanation": [
          "Sıcaklık, havanın taşıyabileceği su buharı miktarını etkiler. Mutlak nem miktar, bağıl nem ise mevcut nemin o sıcaklıkta doygunluğa oranıdır. Hava yükselirken soğuduğunda bağıl nem artabilir; yoğuşma için yeterli soğuma ve uygun koşullar gerekir. Bağıl nem artışı her zaman dışarıdan su buharı eklendiğini göstermez; aynı nem miktarı daha düşük sıcaklıkta doygunluğa yaklaşır.",
          "Nem sorusunda mutlak nem, maksimum nem ve bağıl nemi ayrı sütunlarda tutmak işlem ve yorum hatasını önler. Örneğin mevcut miktar 8, doygunluk miktarı 20 birimse bağıl nem %40’tır; hava soğuyup doygunluk miktarı 10 olursa su eklenmeden oran %80’e çıkar. Yoğuşma eşiğine ulaşıldığında sıcaklığın değişmesi havadaki görünür su oluşumunu açıklayabilir. Sis yere yakın yoğuşmayla, bulut daha yüksekteki yoğuşmayla ilişkilidir; yağış için damlacık veya kristallerin düşebilecek büyüklüğe gelmesi de gerekir. Yükselen havanın her durumda yağmur bırakmaması bu koşullarla açıklanır. Cephe, yamaç ve konveksiyon ayrımında ortak yoğuşma mekanizması korunur, yalnız yükseltici neden değişir.",
          "Rüzgâr genel olarak yüksek basınçtan alçak basınca doğru oluşur. Basınç farkının artması rüzgâr hızını artırabilir. Yön üzerinde Dünya’nın dönüşü ve yer şekilleri de etkilidir."
        ],
        "example": {
          "question": "Su buharı eklenmeden hava soğursa bağıl nem nasıl değişir?",
          "steps": [
            "Mevcut nem sabit kalır.",
            "Doygunluk için gereken miktar azalır.",
            "Oran büyür ve yoğuşma koşuluna yaklaşabilir."
          ],
          "answer": "Bağıl nem artabilir.",
          "check": "Sıcaklık değişimi oranı, miktar değişmeden de artırabilir."
        },
        "misconceptions": [
          {
            "wrong": "Bağıl nem artışı mutlaka mutlak nem artışıdır.",
            "correct": "Sıcaklık değişimi oranı, miktar değişmeden de artırabilir.",
            "why": "Mevcut nem sabit kalır. Doygunluk için gereken miktar azalır. Oran büyür ve yoğuşma koşuluna yaklaşabilir."
          }
        ],
        "reasoningChecks": [
          {
            "question": "Bağıl nemi yüksek hava her zaman daha çok su buharı mı taşır?",
            "answer": "Hayır; soğuk hava daha az mutlak nemle yüksek orana ulaşabilir.",
            "why": "Sıcaklık değişimi oranı, miktar değişmeden de artırabilir."
          }
        ]
      },
      {
        "title": "Yağışı oluşturan yükselme",
        "source": {
          "book": "TYT-cog",
          "pages": [
            36,
            37,
            38,
            39,
            40,
            41
          ]
        },
        "explanation": [
          "Orografik yağışta hava dağ yamacı boyunca, cephede farklı hava kütlelerinin karşılaşmasıyla, konveksiyonda yüzey ısınmasının etkisiyle yükselir. Ortak mekanizma yükselme-soğuma-yoğuşma ilişkisidir; yağış türü yükselmenin nedenine göre ayrılır. Dağın rüzgâr altı yamacında alçalan hava ısınarak bağıl nemi düşürebilir. Fön bu nedenle yalnız sıcak rüzgâr adı değil belirli süreçle açıklanan olaydır.",
          "Mutlak nem havadaki su buharı miktarıdır. Bağıl nem ise havanın mevcut sıcaklığında doygunluğa ne kadar yakın olduğunu anlatır. Sıcak bir yerde mutlak nem fazla olsa da bağıl nem düşük olabilir."
        ],
        "example": {
          "question": "Nemli rüzgâr dağın denize bakan yamacında yağış bırakıp diğer yamaçta kuruyorsa neden?",
          "steps": [
            "Hava ilk yamaçta yükselip soğur.",
            "Nem bir bölümü yağışla azalır.",
            "Öteki yamaçta alçalan hava ısınır ve bağıl nem düşer."
          ],
          "answer": "Orografik yağış ve rüzgâr altı kuraklaşma oluşur.",
          "check": "Rüzgâr yönü ve yükselme-alçalma farklı yağış koşulları yaratır."
        },
        "misconceptions": [
          {
            "wrong": "Dağın iki yamacı aynı yağışı almak zorundadır.",
            "correct": "Rüzgâr yönü ve yükselme-alçalma farklı yağış koşulları yaratır.",
            "why": "Hava ilk yamaçta yükselip soğur. Nem bir bölümü yağışla azalır. Öteki yamaçta alçalan hava ısınır ve bağıl nem düşer."
          }
        ],
        "reasoningChecks": [
          {
            "question": "Konveksiyon yağışı için temel ilk adım nedir?",
            "answer": "Yüzey ısınmasıyla havanın yükselmesidir.",
            "why": "Rüzgâr yönü ve yükselme-alçalma farklı yağış koşulları yaratır."
          }
        ]
      }
    ],
    "connections": [
      {
        "concept": "Yükselen havanın nem davranışı",
        "why": "Sıcaklık değişimi oranı, miktar değişmeden de artırabilir."
      },
      {
        "concept": "Yağışı oluşturan yükselme",
        "why": "Rüzgâr yönü ve yükselme-alçalma farklı yağış koşulları yaratır."
      }
    ],
    "authorship": "Özgün öğretmen anlatımı ve özgün çözümleme örnekleri; kaynak sayfaları MEBİ kitabına yöneliktir."
  },
  "cog-07": {
    "title": "İklimler",
    "prerequisites": [
      {
        "concept": "İklim grafiğini iki veriyle okumak",
        "why": "Mevsimsel dağılış ve sıcaklık rejimi de karşılaştırılır."
      }
    ],
    "goals": [
      "İklim grafiğini iki veriyle okumak: Mevsimsel dağılış ve sıcaklık rejimi de karşılaştırılır.",
      "Türkiye’de iklim ve bitki bağı: Bölgesel iklim ve insan etkisi farklı örtüler yaratır."
    ],
    "chapters": [
      {
        "title": "İklim grafiğini iki veriyle okumak",
        "source": {
          "book": "TYT-cog",
          "pages": [
            42,
            43,
            44,
            45,
            46,
            47,
            48
          ]
        },
        "explanation": [
          "Bir iklim grafiğinde sıcaklık eğrisi ile yağış sütunları birlikte okunur. En sıcak ayların mevsimi yarımküre hakkında ipucu verir; yıllık fark denizellik ve karasallıkla ilişkilidir. Yağış toplamı kadar yıl içindeki dağılış önemlidir. Yazı kurak, kışı yağışlı örüntüyle her mevsim yağışlı örüntü bitki ve tarımı farklı etkiler. Tek bir ay veya tek bir tepe değeriyle iklim adı seçilmez.",
          "İklim grafiği okurken sıcaklık ekseniyle yağış ekseninin aynı sayı aralığında görünmesi iki büyüklüğün aynı birimde olduğu anlamına gelmez. Önce derece ve milimetre ölçekleri ayrı okunur. En sıcak ayın ocak olması Güney yarımküre için ipucu olabilir; fakat yalnız bir aylık yerel anomaliye değil bütün yıllık örüntüye bakılır. Yağışın yazın mı kışın mı yoğunlaştığı su açığını ve bitkinin uyumunu etkiler. Bitki örtüsüyle iklim arasında ilişki kurarken doğal örtü ile tarım bitkisi ayrılmalıdır; insan sulamayla doğal koşulların desteklemediği üretim yapabilir. Türkiye’de dağların kıyıya paralel veya dik uzanması deniz etkisinin içeri sokulmasını değiştirir; ülkenin yalnız enlem aralığı çeşitliliğin tamamını açıklamaz.",
          "Önce sıcaklığın en yüksek olduğu aylardan yarım küreyi düşün. Sonra yıllık sıcaklık farkını ve yağışın hangi mevsimde yoğunlaştığını oku. Yaz kuraklığı Akdeniz iklimini ayırt eden önemli ipucudur."
        ],
        "example": {
          "question": "Temmuz sıcak, temmuz-ağustos yağışsız; kış ayları yağışlı bir grafiği yorumla.",
          "steps": [
            "En sıcak aylar Kuzey yarımküre yazına karşılık gelir.",
            "Yaz kuraklığı belirgindir.",
            "Kış yağışı Akdeniz tipiyle uyumlu örüntüdür."
          ],
          "answer": "Akdeniz iklimi olasılığı güçlenir; diğer koşullar da incelenir.",
          "check": "Mevsimsel dağılış ve sıcaklık rejimi de karşılaştırılır."
        },
        "misconceptions": [
          {
            "wrong": "Yağış toplamı aynıysa iklimler aynıdır.",
            "correct": "Mevsimsel dağılış ve sıcaklık rejimi de karşılaştırılır.",
            "why": "En sıcak aylar Kuzey yarımküre yazına karşılık gelir. Yaz kuraklığı belirgindir. Kış yağışı Akdeniz tipiyle uyumlu örüntüdür."
          }
        ],
        "reasoningChecks": [
          {
            "question": "Her ay 100 mm ile yalnız kışın 1200 mm yağış aynı etki mi?",
            "answer": "Hayır; su açığı ve akış düzeni farklıdır.",
            "why": "Mevsimsel dağılış ve sıcaklık rejimi de karşılaştırılır."
          }
        ]
      },
      {
        "title": "Türkiye’de iklim ve bitki bağı",
        "source": {
          "book": "TYT-cog",
          "pages": [
            42,
            43,
            44,
            45,
            46,
            47,
            48
          ]
        },
        "explanation": [
          "Türkiye’de orta kuşak konumu yanında yükselti, dağların uzanışı ve deniz etkisi iklim çeşitliliği yaratır. Kıyıya paralel dağlar deniz etkisini içeri taşımayı sınırlayabilir. Doğal bitki örtüsü iklimle ilişkilidir ama insanın tarım, otlatma ve orman tahribi de örtüyü değiştirir. Günümüzde görülen bitkiyi yalnız doğal iklimin doğrudan ürünü saymak yanlış olabilir.",
          "Denize uzaklık, yükselti ve dağların uzanışı aynı enlemlerde farklı iklim koşulları oluşturur. Karadeniz’de dağların kıyıya paralel uzanması deniz etkisinin içeriye ulaşmasını sınırlar."
        ],
        "example": {
          "question": "Karadeniz kıyısı ile iç kesimde yağış ve bitki neden farklılaşabilir?",
          "steps": [
            "Nemli hava kıyı yamacında yükselir.",
            "Dağların uzanışı içeri nem taşınmasını sınırlar.",
            "Yükselti ve karasallık iç kesimin koşullarını değiştirir."
          ],
          "answer": "Yer şekilleri deniz etkisinin dağılışını değiştirir.",
          "check": "Bölgesel iklim ve insan etkisi farklı örtüler yaratır."
        },
        "misconceptions": [
          {
            "wrong": "Aynı ülkede aynı doğal bitki örtüsü olmalıdır.",
            "correct": "Bölgesel iklim ve insan etkisi farklı örtüler yaratır.",
            "why": "Nemli hava kıyı yamacında yükselir. Dağların uzanışı içeri nem taşınmasını sınırlar. Yükselti ve karasallık iç kesimin koşullarını değiştirir."
          }
        ],
        "reasoningChecks": [
          {
            "question": "Maki görmek her yerde tahrip kanıtı mı?",
            "answer": "Tek bitki gözlemi yetmez; doğal koşul ve arazi geçmişi birlikte incelenir.",
            "why": "Bölgesel iklim ve insan etkisi farklı örtüler yaratır."
          }
        ]
      }
    ],
    "connections": [
      {
        "concept": "İklim grafiğini iki veriyle okumak",
        "why": "Mevsimsel dağılış ve sıcaklık rejimi de karşılaştırılır."
      },
      {
        "concept": "Türkiye’de iklim ve bitki bağı",
        "why": "Bölgesel iklim ve insan etkisi farklı örtüler yaratır."
      }
    ],
    "authorship": "Özgün öğretmen anlatımı ve özgün çözümleme örnekleri; kaynak sayfaları MEBİ kitabına yöneliktir."
  },
  "cog-08": {
    "title": "Yer şekilleri",
    "prerequisites": [
      {
        "concept": "Levha hareketi ve iç kuvvetler",
        "why": "Tektonik depremler fay hareketiyle, volkanik olanlar farklı mekanizmayla ilişkilidir."
      }
    ],
    "goals": [
      "Levha hareketi ve iç kuvvetler: Tektonik depremler fay hareketiyle, volkanik olanlar farklı mekanizmayla ilişkilidir.",
      "Kayaç döngüsü ve jeolojik kanıt: Yüzey ve iç süreçler kayaçları farklı yollardan dönüştürebilir."
    ],
    "chapters": [
      {
        "title": "Levha hareketi ve iç kuvvetler",
        "source": {
          "book": "TYT-cog",
          "pages": [
            60,
            61,
            62,
            63,
            64
          ]
        },
        "explanation": [
          "Yerkabuğundaki levha hareketleri kıvrılma, kırılma, volkanizma ve deprem gibi süreçlerle ilişkilidir. Dağ oluşumu farklı kayaç ve gerilme koşullarında farklı biçim alır. İç kuvvetler yüzeyin ana iskeletini oluştururken dış kuvvetler onu aşındırıp biriktirir; bu iki grup sırayla başlayıp bitmez, birlikte çalışır. Türkiye’de aktif fay ve genç yer şekilleri tektonik hareketliliğin önemini gösterir.",
          "İç kuvvet ve kayaç sorularında süreçle sonucu birbirine karıştırmamak gerekir. Volkanizma bir süreç, volkanik dağ onun olası yer şekli sonucudur; püskürük kayaç ise soğuma koşuluyla oluşan malzemedir. Tortullaşma deniz veya gölde olmak zorunda değildir; kara ortamlarında da birikim oluşabilir. Başkalaşımda temel ayrım, kayacın tamamen eriyip yeniden katılaşması değil yüksek basınç-sıcaklık koşullarında yapısının değişmesidir. Levha sınırlarının her türünde aynı volkan ve deprem düzeni beklenmez; yakınlaşma, uzaklaşma ve yanal hareket farklı mekanizmalar üretir. Jeolojik zaman sınıflaması, tek bir yerdeki tabakaların yaşını doğrudan ezberden vermez; fosil, tabaka ilişkisi ve diğer kanıtlarla birlikte değerlendirilir.",
          "Orojenez dağ oluşumu, epirojenez geniş alanların yavaş yükselip alçalmasıdır. Volkanizma magma hareketleriyle; deprem biriken enerjinin ani boşalmasıyla ilişkilidir. Her dağ volkanik değildir."
        ],
        "example": {
          "question": "Deprem, volkan ve kıvrım dağlarının belirli kuşaklarda yoğunlaşması nasıl açıklanır?",
          "steps": [
            "Levha sınırlarında gerilme ve hareket yoğundur.",
            "Farklı hareketler farklı yapılar doğurur.",
            "Dağılış tamamen rastgele değildir."
          ],
          "answer": "Tektonik yapı mekânsal yoğunlaşmayı açıklar.",
          "check": "Tektonik depremler fay hareketiyle, volkanik olanlar farklı mekanizmayla ilişkilidir."
        },
        "misconceptions": [
          {
            "wrong": "Bütün depremler yalnız volkanlardan doğar.",
            "correct": "Tektonik depremler fay hareketiyle, volkanik olanlar farklı mekanizmayla ilişkilidir.",
            "why": "Levha sınırlarında gerilme ve hareket yoğundur. Farklı hareketler farklı yapılar doğurur. Dağılış tamamen rastgele değildir."
          }
        ],
        "reasoningChecks": [
          {
            "question": "İç kuvvet etkisi sürerken dış kuvvet çalışır mı?",
            "answer": "Evet; yükselen dağ aynı anda aşınabilir.",
            "why": "Tektonik depremler fay hareketiyle, volkanik olanlar farklı mekanizmayla ilişkilidir."
          }
        ]
      },
      {
        "title": "Kayaç döngüsü ve jeolojik kanıt",
        "source": {
          "book": "TYT-cog",
          "pages": [
            60,
            61,
            62,
            63,
            64
          ]
        },
        "explanation": [
          "Püskürük, tortul ve başkalaşım kayaçları oluşum süreçleriyle sınıflandırılır. Magmanın soğuması, malzemenin çökelip taşlaşması ve basınç-sıcaklık altında değişim farklı yollardır. Döngü her kayacın bütün aşamalardan aynı sırayla geçmesini gerektirmez. Fosiller özellikle uygun tortul ortamlarda geçmiş canlı ve çevre koşullarına kanıt sağlayabilir; bulunmaması o yerde hiç yaşam olmadığını tek başına kanıtlamaz.",
          "Her kayaç bu aşamaların tümünü aynı sırayla geçmek zorunda değildir; kayaçlar farklı yollardan dönüşebilir. Türkiye’nin aktif levha kuşağında olması deprem tehlikesi ve genç yer şekilleriyle ilişkilidir. Fay hattının varlığı depremin tam zamanının bilindiği anlamına gelmez."
        ],
        "example": {
          "question": "Kireçtaşının yüksek basınç ve sıcaklıkta mermere dönüşmesi neyi gösterir?",
          "steps": [
            "Başlangıç kayaç tortuldur.",
            "Erime olmadan yapı değişirse başkalaşım oluşur.",
            "Oluşum koşulu kayaç türünü belirler."
          ],
          "answer": "Mermer başkalaşım kayacıdır.",
          "check": "Yüzey ve iç süreçler kayaçları farklı yollardan dönüştürebilir."
        },
        "misconceptions": [
          {
            "wrong": "Kayaçlar oluşunca bir daha değişmez.",
            "correct": "Yüzey ve iç süreçler kayaçları farklı yollardan dönüştürebilir.",
            "why": "Başlangıç kayaç tortuldur. Erime olmadan yapı değişirse başkalaşım oluşur. Oluşum koşulu kayaç türünü belirler."
          }
        ],
        "reasoningChecks": [
          {
            "question": "Fosil biriktiren ortamın özelliği neden önemlidir?",
            "answer": "Kalıntının korunması ve gömülmesi ortam koşullarına bağlıdır.",
            "why": "Yüzey ve iç süreçler kayaçları farklı yollardan dönüştürebilir."
          }
        ]
      }
    ],
    "connections": [
      {
        "concept": "Levha hareketi ve iç kuvvetler",
        "why": "Tektonik depremler fay hareketiyle, volkanik olanlar farklı mekanizmayla ilişkilidir."
      },
      {
        "concept": "Kayaç döngüsü ve jeolojik kanıt",
        "why": "Yüzey ve iç süreçler kayaçları farklı yollardan dönüştürebilir."
      }
    ],
    "authorship": "Özgün öğretmen anlatımı ve özgün çözümleme örnekleri; kaynak sayfaları MEBİ kitabına yöneliktir."
  },
  "cog-09": {
    "title": "Yer şekilleri",
    "prerequisites": [
      {
        "concept": "Dış kuvveti ortam koşuluyla seçmek",
        "why": "İklim, malzeme ve örtü kuvvetlerin etkisini değiştirir."
      }
    ],
    "goals": [
      "Dış kuvveti ortam koşuluyla seçmek: İklim, malzeme ve örtü kuvvetlerin etkisini değiştirir.",
      "Aşındırma ve biriktirmede enerji: Malzeme ve kıyıdaki dağıtıcı etkiler birlikte denetlenir."
    ],
    "chapters": [
      {
        "title": "Dış kuvveti ortam koşuluyla seçmek",
        "source": {
          "book": "TYT-cog",
          "pages": [
            65,
            66,
            67,
            68,
            69,
            70,
            71,
            72,
            73,
            74,
            75,
            76
          ]
        },
        "explanation": [
          "Akarsu, rüzgâr, buzul, dalga ve yer altı suyu farklı koşullarda etkili olur. Şeklin adıyla kuvvet arasında bağ kurarken iklim, kayaç, eğim ve bitkiyi birlikte incele. Rüzgârın şekillendirmesi kuraklık, gevşek malzeme ve seyrek örtüde güçlenebilir; buzul için uzun süreli kar birikimi gerekir. Fiziksel ve kimyasal çözülme malzemeyi farklı yollardan parçalar ve taşınmaya hazırlar.",
          "Aşındırma ile biriktirme aynı akarsuyun farklı kesimlerinde eş zamanlı olabilir. Yukarı çığırdaki yüksek eğim aşındırmayı, daha düşük eğim ve hız birikmeyi destekleyebilir; fakat debi ve taşınan yük de önemlidir. Menderes her zaman deniz seviyesine çok yakın olmayı gerektirmez; yatağın eğim ve hareket koşulları incelenir. Kıyı şekillerinde dalga aşındırması falez, biriktirme kıyı oku veya kordonu gibi sonuçlar doğurabilir; şeklin oluşması için malzeme ve akıntı koşulu gereklidir. Karstta her çukur akarsu aşındırma vadisi değildir; çözünebilen kayaç, su ve yer altı boşlukları düşünülür. Kayaç yapısı aynı olsa bile suyun miktarı ve kimyası sürecin hızını değiştirir.",
          "Buzul şekli için kalıcı buz, karst için çözünebilen kayaç gerekir. Bir yerde rüzgâr esmesi, orada rüzgârın en etkili şekillendirici olduğunu tek başına göstermez."
        ],
        "example": {
          "question": "Kurak, bitkisiz ve gevşek malzemeli düzlükte hangi dış etki güçlenebilir?",
          "steps": [
            "Nemli orman örtüsünün koruması yoktur.",
            "Gevşek taneler rüzgârla taşınabilir.",
            "Rüzgâr aşındırma ve biriktirmesi için uygun koşullar oluşur."
          ],
          "answer": "Rüzgâr etkisi güçlenebilir.",
          "check": "İklim, malzeme ve örtü kuvvetlerin etkisini değiştirir."
        },
        "misconceptions": [
          {
            "wrong": "Her dış kuvvet her iklimde eşit etkilidir.",
            "correct": "İklim, malzeme ve örtü kuvvetlerin etkisini değiştirir.",
            "why": "Nemli orman örtüsünün koruması yoktur. Gevşek taneler rüzgârla taşınabilir. Rüzgâr aşındırma ve biriktirmesi için uygun koşullar oluşur."
          }
        ],
        "reasoningChecks": [
          {
            "question": "Buzul vadisini akarsu vadisinden ayırırken ne aranır?",
            "answer": "Kesit biçimi ve buzul aşındırma izleri birlikte değerlendirilir.",
            "why": "İklim, malzeme ve örtü kuvvetlerin etkisini değiştirir."
          }
        ]
      },
      {
        "title": "Aşındırma ve biriktirmede enerji",
        "source": {
          "book": "TYT-cog",
          "pages": [
            65,
            66,
            67,
            68,
            69,
            70,
            71,
            72,
            73,
            74,
            75,
            76
          ]
        },
        "explanation": [
          "Akarsu eğimi, debisi ve taşıdığı yükle farklı şekiller oluşturur. Hız ve taşıma gücü azalınca birikme artabilir; delta için yalnız akarsu varlığı yetmez, kıyıdaki dalga-akıntı ve derinlik koşulları da önemlidir. Karstlaşmada çözünebilen kayaç ve suyun kimyasal etkisi belirleyicidir. Aynı biçime benzeyen şekillerin oluşumunu görünüşten çok süreç ve malzemeyle ayırmak gerekir.",
          "Akarsuyun taşıdığı alüvyonu kıyıda biriktirebilmesi gerekir. Güçlü dalga ve akıntılar birikimi uzaklaştırırsa delta gelişimi zorlaşır. Bu nedenle her akarsu ağzında delta bulunmaz."
        ],
        "example": {
          "question": "Akarsu denize ulaştığında neden her kıyıda delta oluşmaz?",
          "steps": [
            "Taşınan malzeme yeterli olmalıdır.",
            "Kıyı akıntısı malzemeyi dağıtabilir.",
            "Derinlik ve çökelme koşulları birikimi etkiler."
          ],
          "answer": "Delta çok koşullu bir birikim şeklidir.",
          "check": "Malzeme ve kıyıdaki dağıtıcı etkiler birlikte denetlenir."
        },
        "misconceptions": [
          {
            "wrong": "Her nehir ağzında delta vardır.",
            "correct": "Malzeme ve kıyıdaki dağıtıcı etkiler birlikte denetlenir.",
            "why": "Taşınan malzeme yeterli olmalıdır. Kıyı akıntısı malzemeyi dağıtabilir. Derinlik ve çökelme koşulları birikimi etkiler."
          }
        ],
        "reasoningChecks": [
          {
            "question": "Kireçtaşında oyuklar hangi süreçle açıklanabilir?",
            "answer": "Uygun su koşullarında kimyasal çözünme ve karstlaşmayla.",
            "why": "Malzeme ve kıyıdaki dağıtıcı etkiler birlikte denetlenir."
          }
        ]
      }
    ],
    "connections": [
      {
        "concept": "Dış kuvveti ortam koşuluyla seçmek",
        "why": "İklim, malzeme ve örtü kuvvetlerin etkisini değiştirir."
      },
      {
        "concept": "Aşındırma ve biriktirmede enerji",
        "why": "Malzeme ve kıyıdaki dağıtıcı etkiler birlikte denetlenir."
      }
    ],
    "authorship": "Özgün öğretmen anlatımı ve özgün çözümleme örnekleri; kaynak sayfaları MEBİ kitabına yöneliktir."
  },
  "cog-10": {
    "title": "Doğal sistemler",
    "prerequisites": [
      {
        "concept": "Suyu havza ve beslenmeyle okumak",
        "why": "Beslenme, dışa akış ve buharlaşma birlikte incelenir."
      }
    ],
    "goals": [
      "Suyu havza ve beslenmeyle okumak: Beslenme, dışa akış ve buharlaşma birlikte incelenir.",
      "Toprak, bitki ve süreklilik: İklim, canlılar, zaman ve yer şekli de belirleyicidir."
    ],
    "chapters": [
      {
        "title": "Suyu havza ve beslenmeyle okumak",
        "source": {
          "book": "TYT-cog",
          "pages": [
            77,
            78,
            79,
            80,
            81,
            82,
            83,
            84,
            85,
            86,
            87,
            88,
            89,
            90,
            91
          ]
        },
        "explanation": [
          "Akarsu rejimi yıl içindeki akım değişimidir; yağış, kar erimesi ve yer altı suyu beslenmesiyle ilişkilidir. Havza suyun toplandığı alandır; denize ulaşamayan kapalı havzalar buharlaşma ve yer şekilleriyle birlikte değerlendirilir. Gölün suyunun tuzlu olması yalnız denize uzaklığıyla açıklanamaz; dışa akış ve buharlaşma dengesi önemlidir. Barajlar doğal rejimi değiştirerek suyun mevsimsel akışını düzenleyebilir.",
          "Bir akarsuyun suyunun bolluğu ile yıl içindeki düzenliliği farklıdır. Çok su taşıyan ama akımı mevsimlere göre aşırı değişen akarsu, düzenli akışlı daha küçük akarsudan farklı kullanım sorunları doğurur. Yer altı suyu beslenmesi veya göl çıkışı akımı dengeleyebilir. Toprak oluşumunda yıkanma ve birikme süreçleri yağışla ilişkilidir; bol yağış her toprağı sınırsız verimli yapmaz, bazı besinler uzaklaşabilir. Bitki örtüsünün bulunması yalnız sıcaklık değil su, toprak ve insan müdahalesiyle de ilgilidir. Havza, bitki ve toprak birimlerinin siyasi sınıra uyması gerekmez; su ve malzeme akışı sınırı aşabilir. Bu nedenle doğal kaynak yönetimi tek bir idari birimin kararından daha geniş iş birliği gerektirebilir.",
          "Zonal topraklar iklim ve bitki örtüsüyle, intrazonal topraklar ana kaya veya drenaj gibi yerel koşullarla öne çıkar. Azonal topraklar taşınmış malzeme üzerinde gelişir; alüvyal topraklar örnektir."
        ],
        "example": {
          "question": "Dışa akışı olmayan, buharlaşması yüksek gölde tuzluluk neden artabilir?",
          "steps": [
            "Suyla taşınan çözünmüş maddeler havzada birikir.",
            "Buharlaşma suyu azaltırken tuzların çoğunu geride bırakır.",
            "Dışa akış olmayınca uzaklaştırma sınırlıdır."
          ],
          "answer": "Çözünmüş maddelerin yoğunluğu artabilir.",
          "check": "Beslenme, dışa akış ve buharlaşma birlikte incelenir."
        },
        "misconceptions": [
          {
            "wrong": "Her iç göl tuzludur.",
            "correct": "Beslenme, dışa akış ve buharlaşma birlikte incelenir.",
            "why": "Suyla taşınan çözünmüş maddeler havzada birikir. Buharlaşma suyu azaltırken tuzların çoğunu geride bırakır. Dışa akış olmayınca uzaklaştırma sınırlıdır."
          }
        ],
        "reasoningChecks": [
          {
            "question": "Kar erimesiyle ilkbaharda debisi artan akarsuyun rejimi yağışa mı yalnızca?",
            "answer": "Hayır; kar birikimi ve erime zamanı da etkilidir.",
            "why": "Beslenme, dışa akış ve buharlaşma birlikte incelenir."
          }
        ]
      },
      {
        "title": "Toprak, bitki ve süreklilik",
        "source": {
          "book": "TYT-cog",
          "pages": [
            77,
            78,
            79,
            80,
            81,
            82,
            83,
            84,
            85,
            86,
            87,
            88,
            89,
            90,
            91
          ]
        },
        "explanation": [
          "Toprak ana kaya, iklim, organizmalar, yer şekli ve zamanın etkileşimiyle oluşur. Taşınmış toprakla yerinde oluşmuş toprağın ana materyal ilişkisi farklıdır. Bitki örtüsü toprağı koruyup organik madde sağlar; toprak da su ve besin sunar. Örtünün kaldırılması yalnız bitki kaybı değil erozyon ve su döngüsünde değişim yaratabilir. Aynı ana kaya farklı iklimde farklı toprak özellikleri geliştirebilir.",
          "Bir akarsuyun debisi kesitten geçen su miktarı, rejimi yıl içindeki akım düzenidir. Yağış ve kar erimeleri rejimi etkiler. Bir akarsuyun debisinin yüksek olması yıl boyunca düzenli aktığını tek başına göstermez."
        ],
        "example": {
          "question": "Yamaçtaki orman kaldırılınca yüzey akışı ve toprak kaybı neden artabilir?",
          "steps": [
            "Köklerin tutucu ve örtünün koruyucu etkisi azalır.",
            "Yağmur toprağa doğrudan çarpar.",
            "Akış gevşek malzemeyi taşır."
          ],
          "answer": "Bitki-toprak-su bağı bozulur.",
          "check": "İklim, canlılar, zaman ve yer şekli de belirleyicidir."
        },
        "misconceptions": [
          {
            "wrong": "Toprağın bütün özellikleri yalnız kayaçtan gelir.",
            "correct": "İklim, canlılar, zaman ve yer şekli de belirleyicidir.",
            "why": "Köklerin tutucu ve örtünün koruyucu etkisi azalır. Yağmur toprağa doğrudan çarpar. Akış gevşek malzemeyi taşır."
          }
        ],
        "reasoningChecks": [
          {
            "question": "Alüvyal toprak neden yerel ana kayayla bire bir örtüşmeyebilir?",
            "answer": "Malzeme başka alanlardan akarsuyla taşınmıştır.",
            "why": "İklim, canlılar, zaman ve yer şekli de belirleyicidir."
          }
        ]
      }
    ],
    "connections": [
      {
        "concept": "Suyu havza ve beslenmeyle okumak",
        "why": "Beslenme, dışa akış ve buharlaşma birlikte incelenir."
      },
      {
        "concept": "Toprak, bitki ve süreklilik",
        "why": "İklim, canlılar, zaman ve yer şekli de belirleyicidir."
      }
    ],
    "authorship": "Özgün öğretmen anlatımı ve özgün çözümleme örnekleri; kaynak sayfaları MEBİ kitabına yöneliktir."
  },
  "cog-11": {
    "title": "Nüfus ve yerleşme",
    "prerequisites": [
      {
        "concept": "Nüfus artışı ve bileşenleri",
        "why": "Net göç toplam değişimi artırabilir veya azaltabilir."
      }
    ],
    "goals": [
      "Nüfus artışı ve bileşenleri: Net göç toplam değişimi artırabilir veya azaltabilir.",
      "Piramitte yaş ve cinsiyet: Yaş yapısı istihdamın potansiyelini gösterir; işsizlik ve katılım ayrıca ölçülür."
    ],
    "chapters": [
      {
        "title": "Nüfus artışı ve bileşenleri",
        "source": {
          "book": "TYT-cog",
          "pages": [
            92,
            93,
            94,
            95,
            96,
            97,
            98,
            99,
            100,
            101
          ]
        },
        "explanation": [
          "Toplam nüfus değişimi doğum-ölüm farkıyla göç dengesini birlikte içerir. Doğal artış yüksek olsa bile dışa göç toplam büyümeyi azaltabilir. Nüfus yoğunluğu nüfusun alana oranıdır; ülke ortalaması iç dağılışın eşit olduğunu göstermez. Su, iklim ve arazi yanında sanayi, hizmet ve tarihî ağlar yoğunlaşmayı etkiler. Nüfus sayısı tek başına refah veya kalkınma ölçütü değildir.",
          "Nüfus piramidinde bir yaş grubunun daralması doğum düşüşü, savaş kaybı veya göç gibi farklı olaylardan kaynaklanabilir; tek biçimden tek neden çıkarılmaz. Aynı yaş grubunu farklı yıllarda izlemek bir kuşağın zaman içindeki hareketini göstermeye yardımcı olur. Nüfus artış hızı pozitif ama azalıyorsa nüfus hâlâ artar, yalnız artışın temposu düşer. Artış hızıyla nüfus miktarını aynı grafik değişkeni gibi okumak önemli hata üretir. Aritmetik yoğunluk bütün yüzölçümünü kullandığı için dağ ve çöl gibi yerleşmesi sınırlı alanlardan etkilenir. Tarımsal yoğunluk veya fizyolojik yoğunluk gibi ölçüler başka paydayla başka soruya yanıt verir; oran karşılaştırılırken tanım ve birim önce açıkça yazılmalıdır.",
          "Aritmetik yoğunluk toplam nüfusun toplam yüz ölçümüne oranıdır. Bu ortalama, nüfusun ülke içinde her yere eşit dağıldığını göstermez. Dağlık ve kurak alanlarla kıyı ve sanayi merkezleri farklılaşabilir."
        ],
        "example": {
          "question": "Doğum 20 bin, ölüm 8 bin, net göç -5 bin ise toplam değişim nedir?",
          "steps": [
            "Doğal artış 20−8=12 bindir.",
            "Göç dengesi -5 bindir.",
            "12−5 toplamı hesaplanır."
          ],
          "answer": "Toplam artış 7 bindir.",
          "check": "Net göç toplam değişimi artırabilir veya azaltabilir."
        },
        "misconceptions": [
          {
            "wrong": "Doğal artış toplam nüfus artışıyla daima aynıdır.",
            "correct": "Net göç toplam değişimi artırabilir veya azaltabilir.",
            "why": "Doğal artış 20−8=12 bindir. Göç dengesi -5 bindir. 12−5 toplamı hesaplanır."
          }
        ],
        "reasoningChecks": [
          {
            "question": "Yoğunluk aynıysa yerleşmelerin dağılışı aynı mı?",
            "answer": "Hayır; ortalama değer farklı mekânsal örüntüleri gizleyebilir.",
            "why": "Net göç toplam değişimi artırabilir veya azaltabilir."
          }
        ]
      },
      {
        "title": "Piramitte yaş ve cinsiyet",
        "source": {
          "book": "TYT-cog",
          "pages": [
            92,
            93,
            94,
            95,
            96,
            97,
            98,
            99,
            100,
            101
          ]
        },
        "explanation": [
          "Nüfus piramidi yaş grupları ve cinsiyet dağılımını gösterir; bir fotoğraftan geleceğe ilişkin kesin hüküm çıkmaz. Geniş taban yakın geçmişte doğumların yüksekliğine, daralan taban doğumlardaki azalmaya işaret edebilir. Çalışma çağındaki şişkinlik göçten de kaynaklanabilir. Bağımlılık oranı ekonomik yük hakkında ipucu verir fakat çalışma çağındaki herkesin fiilen çalıştığını garanti etmez.",
          "Su kaynaklarının yaygın, arazinin engebeli olduğu koşullarda dağınık kırsal yerleşme gelişebilir. Suyun az ve arazinin uygun olduğu yerlerde toplu doku yaygınlaşabilir. Yerel ekonomik ve kültürel koşullar da etkilidir."
        ],
        "example": {
          "question": "Bir sanayi kentinde 20–35 yaş grubunun belirgin genişlemesini yorumla.",
          "steps": [
            "İş imkânı çalışma çağında göç çekebilir.",
            "Yaş grubu doğumlarla değil seçici göçle büyümüş olabilir.",
            "Cinsiyet dengesine de bakılır."
          ],
          "answer": "Göç, piramit biçimini etkileyebilir.",
          "check": "Yaş yapısı istihdamın potansiyelini gösterir; işsizlik ve katılım ayrıca ölçülür."
        },
        "misconceptions": [
          {
            "wrong": "Çalışma çağındaki herkes istihdamdadır.",
            "correct": "Yaş yapısı istihdamın potansiyelini gösterir; işsizlik ve katılım ayrıca ölçülür.",
            "why": "İş imkânı çalışma çağında göç çekebilir. Yaş grubu doğumlarla değil seçici göçle büyümüş olabilir. Cinsiyet dengesine de bakılır."
          }
        ],
        "reasoningChecks": [
          {
            "question": "Dar taban hemen nüfus azaldığını kanıtlar mı?",
            "answer": "Hayır; yaş yapısı ve göç toplamı büyümeyi sürdürebilir.",
            "why": "Yaş yapısı istihdamın potansiyelini gösterir; işsizlik ve katılım ayrıca ölçülür."
          }
        ]
      }
    ],
    "connections": [
      {
        "concept": "Nüfus artışı ve bileşenleri",
        "why": "Net göç toplam değişimi artırabilir veya azaltabilir."
      },
      {
        "concept": "Piramitte yaş ve cinsiyet",
        "why": "Yaş yapısı istihdamın potansiyelini gösterir; işsizlik ve katılım ayrıca ölçülür."
      }
    ],
    "authorship": "Özgün öğretmen anlatımı ve özgün çözümleme örnekleri; kaynak sayfaları MEBİ kitabına yöneliktir."
  },
  "cog-12": {
    "title": "Göçler",
    "prerequisites": [
      {
        "concept": "Göçün itici ve çekici etkenleri",
        "why": "Belirli süreli eğitim ve çalışma hareketleri de göç sınıflamalarında incelenir."
      }
    ],
    "goals": [
      "Göçün itici ve çekici etkenleri: Belirli süreli eğitim ve çalışma hareketleri de göç sınıflamalarında incelenir.",
      "Göçün iki mekâna etkisi: Pay ve mutlak sayı farklıdır; payda değişimi de oranı artırır."
    ],
    "chapters": [
      {
        "title": "Göçün itici ve çekici etkenleri",
        "source": {
          "book": "TYT-cog",
          "pages": [
            102,
            103,
            104,
            105
          ]
        },
        "explanation": [
          "İşsizlik, güvenlik sorunu veya afet bulunduğu yerden itebilir; iş, eğitim ve hizmet olanakları varılacak yeri çekebilir. Aynı olay farklı bireylerde farklı etki yaratır; kaynak, ağ ve tercih önemlidir. İç-dış, sürekli-geçici ve gönüllü-zorunlu ayrımları ayrı ölçütlerdir; bir göç aynı anda birkaç kategoriye girer. Göç kararını yalnız ekonomik gelirle açıklamak aile ve güvenlik bağlarını dışlayabilir.",
          "Göçün toplamı ve neti aynı bilgi değildir. Bir kente 10 bin kişi gelirken 8 bin kişi ayrılıyorsa net göç 2 bindir, toplam hareket ise çok daha büyüktür. Net değer küçük diye hareketliliğin az olduğu sonucu çıkmaz. Göç oranı paydasındaki nüfus da karşılaştırmayı etkiler; aynı sayıda göç alan iki kentin büyüklüğü farklı olabilir. İç göç ülkenin toplam nüfusunu doğrudan artırmaz; nüfusun mekânsal dağılışını değiştirir. Uluslararası göç toplam nüfusa katkı yapabilir. Göçün gönüllü-zorunlu ayrımında ekonomik baskı ile açık güvenlik zorlaması arasında farklı dereceler bulunabilir; sorunun verdiği somut neden esas alınmalıdır. Bireylerin aynı güzergâhı izlemesi hepsinin aynı deneyimi yaşadığı anlamına gelmez.",
          "İç göç ülkenin toplam nüfusunu doğrudan değiştirmez; ülke içindeki dağılışı değiştirir. Dış göç ise diğer koşullar sabitken ülke toplamını artırabilir veya azaltabilir."
        ],
        "example": {
          "question": "Üniversite için başka şehre dört yıllığına giden öğrenci göçünü sınıflandır.",
          "steps": [
            "Ülke sınırı aşılmadığı için iç göçtür.",
            "Eğitim çekici etkendir.",
            "Süre ve geri dönüş planına göre geçicilik değerlendirilir."
          ],
          "answer": "Eğitim amaçlı iç göçtür.",
          "check": "Belirli süreli eğitim ve çalışma hareketleri de göç sınıflamalarında incelenir."
        },
        "misconceptions": [
          {
            "wrong": "Göç yalnız kalıcı yer değiştirmedir.",
            "correct": "Belirli süreli eğitim ve çalışma hareketleri de göç sınıflamalarında incelenir.",
            "why": "Ülke sınırı aşılmadığı için iç göçtür. Eğitim çekici etkendir. Süre ve geri dönüş planına göre geçicilik değerlendirilir."
          }
        ],
        "reasoningChecks": [
          {
            "question": "Savaş nedeniyle ülke değiştiren kişi hangi ölçütle zorunlu göçtedir?",
            "answer": "Güvenlik baskısı kararın serbestliğini ciddi biçimde sınırlar.",
            "why": "Belirli süreli eğitim ve çalışma hareketleri de göç sınıflamalarında incelenir."
          }
        ]
      },
      {
        "title": "Göçün iki mekâna etkisi",
        "source": {
          "book": "TYT-cog",
          "pages": [
            102,
            103,
            104,
            105
          ]
        },
        "explanation": [
          "Göç veren yerde yaş ve iş gücü yapısı değişebilir; göç alan yerde emek arzı, konut ve hizmet talebi artar. Sonuçlar yalnız olumlu veya olumsuz değildir. Uygun planlama ekonomik katkıyı güçlendirebilir; altyapı yetersizliği konut ve çevre sorunlarını büyütebilir. Aile ağları sonraki göçleri kolaylaştırdığı için süreç kendini besleyebilir; bu herkesin aynı nedenle hareket ettiği anlamına gelmez.",
          "Doğal artış yalnız doğum ve ölüm farkıdır. Gerçek artışta net göç de hesaba katılır. Doğal artışı pozitif olan bir yer, göç kaybı daha fazlaysa nüfus kaybedebilir."
        ],
        "example": {
          "question": "Gençlerin göç ettiği kırsal yerde yaşlı oranı neden yükselir?",
          "steps": [
            "Göç yaş gruplarını eşit etkilemez.",
            "Genç nüfusun payı azalır.",
            "Yaşlı sayısı artmasa bile toplam içindeki oran büyüyebilir."
          ],
          "answer": "Seçici göç yaş yapısını değiştirir.",
          "check": "Pay ve mutlak sayı farklıdır; payda değişimi de oranı artırır."
        },
        "misconceptions": [
          {
            "wrong": "Yaşlı oranının artması mutlaka yaşlı sayısının arttığı demektir.",
            "correct": "Pay ve mutlak sayı farklıdır; payda değişimi de oranı artırır.",
            "why": "Göç yaş gruplarını eşit etkilemez. Genç nüfusun payı azalır. Yaşlı sayısı artmasa bile toplam içindeki oran büyüyebilir."
          }
        ],
        "reasoningChecks": [
          {
            "question": "Göç alan kentte sorun kesin mi?",
            "answer": "Etki göç hacmi, ekonomik yapı ve altyapı kapasitesine bağlıdır.",
            "why": "Pay ve mutlak sayı farklıdır; payda değişimi de oranı artırır."
          }
        ]
      }
    ],
    "connections": [
      {
        "concept": "Göçün itici ve çekici etkenleri",
        "why": "Belirli süreli eğitim ve çalışma hareketleri de göç sınıflamalarında incelenir."
      },
      {
        "concept": "Göçün iki mekâna etkisi",
        "why": "Pay ve mutlak sayı farklıdır; payda değişimi de oranı artırır."
      }
    ],
    "authorship": "Özgün öğretmen anlatımı ve özgün çözümleme örnekleri; kaynak sayfaları MEBİ kitabına yöneliktir."
  },
  "cog-13": {
    "title": "Ekonomik coğrafya",
    "prerequisites": [
      {
        "concept": "Ekonomik faaliyetlerin zinciri",
        "why": "Ürün zinciri içinde farklı ekonomik işlemler bulunur."
      }
    ],
    "goals": [
      "Ekonomik faaliyetlerin zinciri: Ürün zinciri içinde farklı ekonomik işlemler bulunur.",
      "Ulaşım ağında boğaz ve kanal: Ücret, kapasite, risk ve taşıma türü de hesaba katılır."
    ],
    "chapters": [
      {
        "title": "Ekonomik faaliyetlerin zinciri",
        "source": {
          "book": "TYT-cog",
          "pages": [
            106,
            107,
            108,
            109,
            110
          ]
        },
        "explanation": [
          "Birincil faaliyet doğadan ürün elde etmeye, ikincil dönüştürmeye, üçüncül hizmete yönelir; bilgi ve karar yoğun faaliyetler daha ileri kategorilerle de sınıflandırılabilir. Bir ürün üreticiden tüketiciye geçerken birden fazla sektöre temas eder. Sektörlerin payı kalkınma hakkında ipucu verse de tek veri bütün refahı açıklamaz. Üretim yeri seçiminde ham madde yanında pazar, ulaşım, emek ve enerji birlikte etkilidir.",
          "Ulaşım maliyetinde birim malın değeri, bozulabilirliği ve zaman duyarlılığı önemlidir. Ağır ve düşük birim değerli yükte deniz veya demir yolu avantajlı olabilirken acil ve yüksek değerli üründe hava yolu seçilebilir. Bir limanın kıyıda bulunması tek başına gelişmiş olmasını açıklamaz; hinterlantla bağlantı, derinlik, kapasite ve ticaret ağı gerekir. Ekonomik faaliyet sınıflamasında fabrika içindeki her işçinin aynı işlevi görmesi de şart değildir; üretim, yönetim ve araştırma farklı görevlerdir. Bölgenin sektör payını incelerken istihdam ve gelir payının aynı olmayabileceğini unutma. Bir sektörde az kişi çalışıp yüksek değer üretebilir; kişi sayısı tek başına ekonomik katkının tamamını göstermez.",
          "Buğday yetiştirmek birincil; buğdaydan un üretmek ikincil; unu markette satmak üçüncül faaliyettir. Ürün aynı zincirde olsa da yapılan iş değişmiştir."
        ],
        "example": {
          "question": "Buğdayın tarladan ekmek olarak satışına kadar sektörleri ayır.",
          "steps": [
            "Buğday yetiştirme birincildir.",
            "Un ve ekmek üretimi ikincildir.",
            "Taşıma ve satış hizmet sektörüdür."
          ],
          "answer": "Tek ürün farklı faaliyet halkalarından geçer.",
          "check": "Ürün zinciri içinde farklı ekonomik işlemler bulunur."
        },
        "misconceptions": [
          {
            "wrong": "Bir ürün yalnız bir sektöre aittir.",
            "correct": "Ürün zinciri içinde farklı ekonomik işlemler bulunur.",
            "why": "Buğday yetiştirme birincildir. Un ve ekmek üretimi ikincildir. Taşıma ve satış hizmet sektörüdür."
          }
        ],
        "reasoningChecks": [
          {
            "question": "Fabrikanın ham maddeye yakınlığı her zaman tek neden mi?",
            "answer": "Hayır; pazar, enerji ve ulaşım da etkileyebilir.",
            "why": "Ürün zinciri içinde farklı ekonomik işlemler bulunur."
          }
        ]
      },
      {
        "title": "Ulaşım ağında boğaz ve kanal",
        "source": {
          "book": "TYT-cog",
          "pages": [
            106,
            107,
            108,
            109,
            110
          ]
        },
        "explanation": [
          "Uluslararası ulaşım hatları yalnız en kısa çizgiye göre seçilmez; kapasite, güvenlik, maliyet ve siyasi koşullar önemlidir. Boğaz doğal, kanal insan yapımı geçiştir; ikisi de güzergâhı kısaltarak stratejik değer taşıyabilir. Alternatif yolun uzunluğu bir geçişin önemini artırabilir. Kara ve deniz yolu rekabeti ürünün türü, zaman değeri ve taşınacak miktara göre değişir.",
          "Ulaşım imkânları pazar erişimini ve maliyeti etkiler. Dağlık alanlarda yol yapımı zorlaşabilir. Süveyş ve Panama kanalları bazı deniz yollarını kısaltarak uluslararası ticarette önem taşır."
        ],
        "example": {
          "question": "Kanal kapanınca gemilerin kıta çevresini dolaşması maliyeti nasıl etkiler?",
          "steps": [
            "Mesafe ve süre uzayabilir.",
            "Yakıt ve işletme maliyeti artabilir.",
            "Gecikme ürün ve tedarik planını da etkiler."
          ],
          "answer": "Dar geçişler küresel ağda yüksek stratejik önem taşır.",
          "check": "Ücret, kapasite, risk ve taşıma türü de hesaba katılır."
        },
        "misconceptions": [
          {
            "wrong": "En kısa güzergâh her koşulda en ucuzdur.",
            "correct": "Ücret, kapasite, risk ve taşıma türü de hesaba katılır.",
            "why": "Mesafe ve süre uzayabilir. Yakıt ve işletme maliyeti artabilir. Gecikme ürün ve tedarik planını da etkiler."
          }
        ],
        "reasoningChecks": [
          {
            "question": "Hava yolu neden her yük için seçilmez?",
            "answer": "Hız avantajı olsa da maliyet ve kapasite sınırlamaları vardır.",
            "why": "Ücret, kapasite, risk ve taşıma türü de hesaba katılır."
          }
        ]
      }
    ],
    "connections": [
      {
        "concept": "Ekonomik faaliyetlerin zinciri",
        "why": "Ürün zinciri içinde farklı ekonomik işlemler bulunur."
      },
      {
        "concept": "Ulaşım ağında boğaz ve kanal",
        "why": "Ücret, kapasite, risk ve taşıma türü de hesaba katılır."
      }
    ],
    "authorship": "Özgün öğretmen anlatımı ve özgün çözümleme örnekleri; kaynak sayfaları MEBİ kitabına yöneliktir."
  },
  "cog-14": {
    "title": "Afetler ve çevre",
    "prerequisites": [
      {
        "concept": "Tehlikeden afete geçiş",
        "why": "Maruz kalma ve kırılganlığı azaltmak kaybı sınırlayabilir."
      }
    ],
    "goals": [
      "Tehlikeden afete geçiş: Maruz kalma ve kırılganlığı azaltmak kaybı sınırlayabilir.",
      "Afet türüne uygun önlem: Toprağın taşınmasıyla kütlenin bütün olarak kayması farklı süreçlerdir."
    ],
    "chapters": [
      {
        "title": "Tehlikeden afete geçiş",
        "source": {
          "book": "TYT-cog",
          "pages": [
            111,
            112,
            113,
            114,
            115,
            116,
            117,
            118,
            119,
            120
          ]
        },
        "explanation": [
          "Deprem gibi fiziksel olay tehlikedir; afet, olayın insan ve çevre üzerinde büyük kayıp üretmesidir. Aynı büyüklükteki olay farklı yapı kalitesi, nüfus, hazırlık ve yerel zemin koşullarında farklı sonuçlar doğurur. Risk, tehlike yanında maruz kalma ve kırılganlıkla ilişkilidir. Önlem olayı durduramayabilir ama kaybı azaltabilir. Bu ayrım doğa olayı karşısında bütün sonuçların kaçınılmaz olmadığını gösterir.",
          "Afet riskinde büyüklük, sıklık ve kayıp olasılığı birbirinden ayrılır. Nadir ama çok yıkıcı olay ile sık ama küçük etkili olayın yönetim ihtiyacı farklıdır. Deprem büyüklüğü kaynakta açığa çıkan enerjiyle, belirli yerde hissedilen şiddet ise zemin ve yapılarla da ilişkilidir; bu iki kavram eş anlamlı değildir. Erozyonu azaltan bitki örtüsü her tür kütle hareketini kesin durdurmaz; kayan tabakanın derinliği ve jeolojik yapı önemlidir. Sel önleminde yalnız aşağı çığırda duvar yapmak yerine havzanın üst kesimindeki arazi kullanımı da değerlendirilir. Afet sonrası müdahale ile afet öncesi risk azaltma ayrı aşamalardır; ikisi birbirinin yerine geçmez. Hazırlık, kaçınılmaz doğa olayının toplumsal kayba dönüşmesini sınırlamayı hedefler.",
          "Heyelan, zeminin veya kaya kütlesinin yamaç boyunca hareketidir; eğim, suya doygunluk ve zemin yapısı önemlidir. Erozyon, toprağın su veya rüzgârla aşınıp taşınmasıdır. Bitki örtüsünün kaybı erozyonu artırabilir."
        ],
        "example": {
          "question": "Benzer deprem iki kentte niçin farklı kayıp oluşturabilir?",
          "steps": [
            "Yapı dayanımı ve zemin farklıdır.",
            "Nüfusun konumu ve hazırlık düzeyi değişir.",
            "Acil müdahale kapasitesi de sonucu etkiler."
          ],
          "answer": "Afet etkisi yalnız deprem büyüklüğüne bağlı değildir.",
          "check": "Maruz kalma ve kırılganlığı azaltmak kaybı sınırlayabilir."
        },
        "misconceptions": [
          {
            "wrong": "Doğal olayın bütün zararları kaçınılmazdır.",
            "correct": "Maruz kalma ve kırılganlığı azaltmak kaybı sınırlayabilir.",
            "why": "Yapı dayanımı ve zemin farklıdır. Nüfusun konumu ve hazırlık düzeyi değişir. Acil müdahale kapasitesi de sonucu etkiler."
          }
        ],
        "reasoningChecks": [
          {
            "question": "Riskli yere hiç bina yapmamak tehlikeyi mi azaltır?",
            "answer": "Fiziksel tehlikeyi değil maruz kalmayı azaltır.",
            "why": "Maruz kalma ve kırılganlığı azaltmak kaybı sınırlayabilir."
          }
        ]
      },
      {
        "title": "Afet türüne uygun önlem",
        "source": {
          "book": "TYT-cog",
          "pages": [
            111,
            112,
            113,
            114,
            115,
            116,
            117,
            118,
            119,
            120
          ]
        },
        "explanation": [
          "Heyelan eğim, su, kayaç ve insan müdahalesiyle; sel yağış ve akış yanında kanal kapasitesi ve geçirimsiz yüzeylerle ilişkilidir. Erozyon toprağın taşınması, heyelan ise kütlenin eğim boyunca hareketidir. Önlem türün mekanizmasına uymalıdır: bitki örtüsü bazı riskleri azaltır ama her heyelanı durduracağı varsayılmaz. Aynı uygulama yanlış koşulda yeni risk de yaratabilir.",
          "Dere yatağına yapılaşma sel kayıplarını büyütebilir. Depremde uygun zemin seçimi ve mühendislik hizmeti belirleyicidir. Aynı büyüklükteki deprem her yerde aynı kaybı oluşturmaz; hazırlık ve yapı niteliği farklıdır."
        ],
        "example": {
          "question": "Dere yatağında yapılaşma ve asfaltlaşma sel riskini nasıl artırır?",
          "steps": [
            "Yatak kapasitesi ve akış alanı daralır.",
            "Geçirimsiz yüzey sızmayı azaltır.",
            "Kısa sürede toplanan yüzey akışı artar."
          ],
          "answer": "İnsan müdahalesi selin afet etkisini büyütebilir.",
          "check": "Toprağın taşınmasıyla kütlenin bütün olarak kayması farklı süreçlerdir."
        },
        "misconceptions": [
          {
            "wrong": "Erozyon ve heyelan aynı olaydır.",
            "correct": "Toprağın taşınmasıyla kütlenin bütün olarak kayması farklı süreçlerdir.",
            "why": "Yatak kapasitesi ve akış alanı daralır. Geçirimsiz yüzey sızmayı azaltır. Kısa sürede toplanan yüzey akışı artar."
          }
        ],
        "reasoningChecks": [
          {
            "question": "Orman yangını sonrası sel etkisi neden artabilir?",
            "answer": "Örtü kaybı sızmayı ve yüzey korunmasını azaltabilir.",
            "why": "Toprağın taşınmasıyla kütlenin bütün olarak kayması farklı süreçlerdir."
          }
        ]
      }
    ],
    "connections": [
      {
        "concept": "Tehlikeden afete geçiş",
        "why": "Maruz kalma ve kırılganlığı azaltmak kaybı sınırlayabilir."
      },
      {
        "concept": "Afet türüne uygun önlem",
        "why": "Toprağın taşınmasıyla kütlenin bütün olarak kayması farklı süreçlerdir."
      }
    ],
    "authorship": "Özgün öğretmen anlatımı ve özgün çözümleme örnekleri; kaynak sayfaları MEBİ kitabına yöneliktir."
  },
  "tar-15": {
    "title": "İnsanlığın ilk dönemleri",
    "prerequisites": [
      {
        "concept": "Üretimin yerleşmeye etkisi",
        "why": "Çevre ve birikim farklı geçiş yolları oluşturur."
      }
    ],
    "goals": [
      "Üretimin yerleşmeye etkisi: Çevre ve birikim farklı geçiş yolları oluşturur.",
      "Yazı öncesi kanıt ve teknoloji: Teknik değişim kademeli ve işleve bağlı olabilir."
    ],
    "chapters": [
      {
        "title": "Üretimin yerleşmeye etkisi",
        "source": {
          "book": "AYT-tar",
          "pages": [
            14,
            15,
            16,
            17
          ]
        },
        "explanation": [
          "Avcı-toplayıcılıktan üretime geçiş bütün bölgelerde aynı zamanda olmadı. Tarım ve evcilleştirme, besin üretimi yanında depolama, iş bölümü ve kalıcı yerleşmeyi destekledi. İklim, su, arazi ve bilgi birikimi birlikte etkilidir. Yerleşiklik bütün topluluklarda aynı devlet biçimi veya eşitlik düzeyini doğurmaz.",
          "İnsanlığın ilk dönemleri için kullanılan araç sınıfları, toplumun bütün hayatını tek bir malzemeyle açıklamaz. Bir yerleşmede taş alet, kemik araç ve toprak kap birlikte bulunabilir; her biri farklı işleve hizmet eder. Artı ürünün ortaya çıkması herkesin eşit pay aldığı sonucu üretmez; dağıtım ve denetim kurumları ayrıca araştırılır. Mezarlık, ev planı ve üretim alanı gibi bulgular toplumsal ilişkiler hakkında ipucu verirken tek bir nesneden kesin sınıf düzeni çıkarılmaz. Göç ve alışveriş, buluntuların yer değiştirmesine yol açabilir; bu nedenle bulunduğu yerle üretildiği yer aynı olmayabilir. Arkeolog bir malzemenin tarihini belirlerken tabaka, çevre bulguları ve tarihleme yöntemlerini birlikte kullanır. Kanıtın izin verdiği sonuçla varsayımın sınırı bu şekilde korunur.",
          "Tarih öncesi dönemler farklı toplumlarda aynı anda başlamadı ve her toplumda bütün aşamalar aynı sırayla yaşanmadı. Göç ve ticaretle bir araç veya tekniğin öğrenilmesi değişimi hızlandırabilir."
        ],
        "example": {
          "question": "Tahıl deposu, öğütme taşı ve farklı zanaat ürünleri ne gösterir?",
          "steps": [
            "Depolama ürün saklamayı gösterir.",
            "Zanaat çeşitliliği iş bölümünü destekler.",
            "Bulgular belirli devlet biçimini tek başına kesinleştirmez."
          ],
          "answer": "Üretim ve uzmanlaşma kanıtı vardır.",
          "check": "Çevre ve birikim farklı geçiş yolları oluşturur."
        },
        "misconceptions": [
          {
            "wrong": "Tarım bütün dünyada eş zamanlı başlamıştır.",
            "correct": "Çevre ve birikim farklı geçiş yolları oluşturur.",
            "why": "Depolama ürün saklamayı gösterir. Zanaat çeşitliliği iş bölümünü destekler. Bulgular belirli devlet biçimini tek başına kesinleştirmez."
          }
        ],
        "reasoningChecks": [
          {
            "question": "Tek taş alet kesin tarım kanıtı mı?",
            "answer": "İşlevi ve diğer kalıntılar birlikte değerlendirilmelidir.",
            "why": "Çevre ve birikim farklı geçiş yolları oluşturur."
          }
        ]
      },
      {
        "title": "Yazı öncesi kanıt ve teknoloji",
        "source": {
          "book": "AYT-tar",
          "pages": [
            14,
            15,
            16,
            17
          ]
        },
        "explanation": [
          "Yazı öncesi dönem arkeolojik kalıntılarla araştırılır. Taş ve maden sınıflaması araştırmayı düzenler; aynı malzemenin farklı tarihlerde kullanılması dönemlemeyi bölgesel yapar. Artı ürün ve ticaret yönetim-kayıt ihtiyacını artırabilir; yeni kurumlar da üretimi etkiler. Değişim tek yönlü, zorunlu bir çizgi değildir.",
          "Tahıl öğütme araçları ve ürün depolama alanları üretimle; kalıcı evler yerleşik yaşamla ilişkilidir. Tek bir bulgudan toplumun bütün özelliklerini kesin olarak çıkarma. Yazılı belge bulunmaması da kültürün bulunmadığı anlamına gelmez."
        ],
        "example": {
          "question": "Tunç araçlarla taş araçların birlikte bulunması çelişki midir?",
          "steps": [
            "Yeni teknik eskisini anında yok etmez.",
            "İşlev ve maliyet farklıdır.",
            "Teknolojiler birlikte kullanılabilir."
          ],
          "answer": "Birliktelik geçiş ve çeşitliliği gösterebilir.",
          "check": "Teknik değişim kademeli ve işleve bağlı olabilir."
        },
        "misconceptions": [
          {
            "wrong": "Yeni malzeme eskisini tamamen ortadan kaldırır.",
            "correct": "Teknik değişim kademeli ve işleve bağlı olabilir.",
            "why": "Yeni teknik eskisini anında yok etmez. İşlev ve maliyet farklıdır. Teknolojiler birlikte kullanılabilir."
          }
        ],
        "reasoningChecks": [
          {
            "question": "Yazı yoksa geçmiş bilinemez mi?",
            "answer": "Maddi kalıntılar farklı yöntemlerle kanıt sağlar.",
            "why": "Teknik değişim kademeli ve işleve bağlı olabilir."
          }
        ]
      }
    ],
    "connections": [
      {
        "concept": "Üretimin yerleşmeye etkisi",
        "why": "Çevre ve birikim farklı geçiş yolları oluşturur."
      },
      {
        "concept": "Yazı öncesi kanıt ve teknoloji",
        "why": "Teknik değişim kademeli ve işleve bağlı olabilir."
      }
    ],
    "authorship": "Özgün öğretmen anlatımı ve özgün çözümleme örnekleri; kaynak sayfaları MEBİ kitabına yöneliktir."
  },
  "tar-16": {
    "title": "İlk Çağ medeniyetleri",
    "prerequisites": [
      {
        "concept": "Uygarlıkları ihtiyaç ve katkıyla karşılaştırmak",
        "why": "Ticaret, göç ve siyasi temas bilgi aktarır."
      }
    ],
    "goals": [
      "Uygarlıkları ihtiyaç ve katkıyla karşılaştırmak: Ticaret, göç ve siyasi temas bilgi aktarır.",
      "Yazılı hukuk, ticaret ve devlet: Kimin nasıl kapsandığı ayrıca incelenir."
    ],
    "chapters": [
      {
        "title": "Uygarlıkları ihtiyaç ve katkıyla karşılaştırmak",
        "source": {
          "book": "AYT-tar",
          "pages": [
            18,
            19,
            20
          ]
        },
        "explanation": [
          "İlk uygarlıkları yalnız icat listeleriyle öğrenmek coğrafya-kurum ilişkisini gizler. Sulama, ticaret, hukuk, kayıt ve savunma farklı gelişmeleri destekledi. Sümer yazısı kayıt ihtiyacıyla, Mısır ölçüm ve takvimi Nil çevresiyle ilişkilidir. Bir katkı bütün bilgiyi yalnız o toplumun ürettiğini göstermez; kültürler arası aktarım ve yeniden geliştirme vardır.",
          "İlk uygarlıkları karşılaştırmada hukuk, yazı, ekonomi ve yönetim ölçütlerini ayrı satırlarda kullan. Mezopotamya’da şehir devletleri, Mısır’da merkezî yapı veya Anadolu’da ticaret kolonileri yalnız harita bilgisi değil farklı çevre ve siyasi örgütlenme örnekleridir. Çivi yazısının ticaretle taşınması ekonomik ilişkinin kültürel sonucunu gösterir. Bir uygarlığın yazıyı kullanması bütün halkın okuryazar olduğu anlamına gelmez; yazının kimler tarafından ve ne amaçla kullanıldığı ayrıca sorulur. Kanunların yazılması keyfîliği sınırlayabilecek görünürlük sağlar ama cezanın statüye göre değişmesi eşitlik sınırını gösterir. Fenike alfabesinin etkisi gibi örneklerde aktarım, yeniden uyarlama ve yaygınlaşma süreçleri ayrılır; bilgiyi ilk kullananla onu geliştirip yaygınlaştıran her zaman aynı toplum olmayabilir.",
          "Asurlu tüccarların yazıyı Anadolu’ya taşıması, ekonomik ilişkilerin kültürel sonuç doğurabildiğini gösterir. Fenikelilerin deniz ticareti de farklı toplumların etkileşimini desteklemiştir."
        ],
        "example": {
          "question": "Taşkın sonrası arazi sınırı belirleme hangi bilgiyi destekler?",
          "steps": [
            "Ölçüm ve sınır hesabı gerekir.",
            "Taşkın zamanını bilme takvim ihtiyacını artırır.",
            "Çevre sorunu matematik ve astronomiyle ilişki kurar."
          ],
          "answer": "Geometri ve takvim pratik ihtiyaçlarla gelişebilir.",
          "check": "Ticaret, göç ve siyasi temas bilgi aktarır."
        },
        "misconceptions": [
          {
            "wrong": "Uygarlık katkıları tamamen bağımsızdır.",
            "correct": "Ticaret, göç ve siyasi temas bilgi aktarır.",
            "why": "Ölçüm ve sınır hesabı gerekir. Taşkın zamanını bilme takvim ihtiyacını artırır. Çevre sorunu matematik ve astronomiyle ilişki kurar."
          }
        ],
        "reasoningChecks": [
          {
            "question": "Yazı yönetimi nasıl etkiler?",
            "answer": "Vergi, ürün ve hukuk kayıtlarını kalıcılaştırır.",
            "why": "Ticaret, göç ve siyasi temas bilgi aktarır."
          }
        ]
      },
      {
        "title": "Yazılı hukuk, ticaret ve devlet",
        "source": {
          "book": "AYT-tar",
          "pages": [
            18,
            19,
            20
          ]
        },
        "explanation": [
          "Yazılı hukuk kuralları kalıcı kayda geçirir; bütün insanlara eşit ceza ve hak verdiği ayrıca kanıtlanmalıdır. Ticaret kolonileri mal yanında yazı ve kültür taşır. Şehir devleti ve merkezî krallık farklı örgütlenmelerdir; coğrafya, ulaşım ve güç ilişkileri etkiler. Para değişimi kolaylaştırır ama takası aynı anda bitirmez.",
          "Mezopotamya: Sümer ve Asur. Anadolu: Hitit ve Lidya. Nil havzası: Mısır. Doğu Akdeniz: Fenike. Bir uygarlığın belirli alanda tanınması, diğer alanlarda hiçbir faaliyet göstermediği anlamına gelmez."
        ],
        "example": {
          "question": "Kanunda toplumsal gruplara farklı ceza varsa ne çıkar?",
          "steps": [
            "Kurallar yazılıdır.",
            "Ceza statüye göre değişmektedir.",
            "Yazılılık eşitlikle özdeş değildir."
          ],
          "answer": "Yazılı hukuk var; eşitlik otomatik çıkmaz.",
          "check": "Kimin nasıl kapsandığı ayrıca incelenir."
        },
        "misconceptions": [
          {
            "wrong": "Yazılı kanun herkesi mutlaka eşit kılar.",
            "correct": "Kimin nasıl kapsandığı ayrıca incelenir.",
            "why": "Kurallar yazılıdır. Ceza statüye göre değişmektedir. Yazılılık eşitlikle özdeş değildir."
          }
        ],
        "reasoningChecks": [
          {
            "question": "Para hangi işlevi kolaylaştırır?",
            "answer": "Değer ölçme ve mübadele işlemlerini.",
            "why": "Kimin nasıl kapsandığı ayrıca incelenir."
          }
        ]
      }
    ],
    "connections": [
      {
        "concept": "Uygarlıkları ihtiyaç ve katkıyla karşılaştırmak",
        "why": "Ticaret, göç ve siyasi temas bilgi aktarır."
      },
      {
        "concept": "Yazılı hukuk, ticaret ve devlet",
        "why": "Kimin nasıl kapsandığı ayrıca incelenir."
      }
    ],
    "authorship": "Özgün öğretmen anlatımı ve özgün çözümleme örnekleri; kaynak sayfaları MEBİ kitabına yöneliktir."
  },
  "cog-15": {
    "title": "Basınç ve rüzgârlar",
    "prerequisites": [
      {
        "concept": "Basınç farkından rüzgâra",
        "why": "Temel yön basınç gradyanıyla belirlenir; yerel sapmalar ayrıca açıklanır."
      }
    ],
    "goals": [
      "Basınç farkından rüzgâra: Temel yön basınç gradyanıyla belirlenir; yerel sapmalar ayrıca açıklanır.",
      "Meltemin günlük yön değişimi: Günlük ısınma-soğuma farkı yönü değiştirebilir."
    ],
    "chapters": [
      {
        "title": "Basınç farkından rüzgâra",
        "source": {
          "book": "TYT-cog",
          "pages": [
            36,
            37,
            38
          ]
        },
        "explanation": [
          "Rüzgâr yatay basınç farkıyla oluşur; yüzeyde genel yön yüksek basınçtan alçak basınca doğrudur. Dünya’nın dönüşü ve sürtünme gerçek yön ve hızı değiştirir. Termik basınç sıcaklığın yoğunluk üzerindeki etkisiyle, dinamik basınç genel hava hareketleriyle ilişkilidir. Sıcak her yerde yüzey basıncının aynı olmasını gerektirmez; yükselti ve dinamik koşullar birlikte etkilidir.",
          "Basınç haritası yorumunda yüzey yükseltisi ve ölçümün indirgenip indirgenmediği önemlidir. Dağın tepesindeki düşük gerçek basınçla bir hava sisteminin deniz seviyesine indirgenmiş alçak basıncı aynı karşılaştırma değildir. İzobarların sık olduğu yerde basınç gradyanı güçlenir; rüzgârın gerçek hızı sürtünme ve engellerle değişebilir. Kuzey ve Güney yarımkürede sapma yönü farklıdır; yön bilgisini yarımküre belirtmeden ezberlemek hata doğurur. Fön, deniz meltemi ve muson sıcak veya serin esmesine göre değil oluşum mekanizmasına göre sınıflandırılır. Basınç merkezinde yükselen hava genel olarak bulutlanmaya elverişli olsa da nem yetersizse yağış zorunlu değildir. Mekanizma, gerekli ama tek başına yeterli olmayan koşullarla birlikte düşünülmelidir.",
          "Isınma ve soğumaya bağlı basınç termik, genel hava dolaşımındaki yükselme ve alçalmaya bağlı basınç dinamik kökenlidir. Bu nedenle yalnız basıncın yüksek veya alçak olmasından sıcaklık kesin çıkarılamaz."
        ],
        "example": {
          "question": "Komşu iki alandan birinde basınç daha yüksekse genel hava akışı nasıldır?",
          "steps": [
            "Basınç farkı hareket için itici etkidir.",
            "Yatay akış yüksekten alçağa yönelir.",
            "Dönüş ve yüzey sürtünmesi yönü değiştirebilir."
          ],
          "answer": "Genel akış yüksek basınçtan alçağa doğrudur.",
          "check": "Temel yön basınç gradyanıyla belirlenir; yerel sapmalar ayrıca açıklanır."
        },
        "misconceptions": [
          {
            "wrong": "Rüzgâr alçak basınçtan yüksek basınca eser.",
            "correct": "Temel yön basınç gradyanıyla belirlenir; yerel sapmalar ayrıca açıklanır.",
            "why": "Basınç farkı hareket için itici etkidir. Yatay akış yüksekten alçağa yönelir. Dönüş ve yüzey sürtünmesi yönü değiştirebilir."
          }
        ],
        "reasoningChecks": [
          {
            "question": "İzobarlar sıklaşırsa ne beklenir?",
            "answer": "Aynı mesafede daha büyük basınç farkı, genellikle daha hızlı rüzgâr.",
            "why": "Temel yön basınç gradyanıyla belirlenir; yerel sapmalar ayrıca açıklanır."
          }
        ]
      },
      {
        "title": "Meltemin günlük yön değişimi",
        "source": {
          "book": "TYT-cog",
          "pages": [
            36,
            37,
            38
          ]
        },
        "explanation": [
          "Kara denize göre daha hızlı ısınıp soğur. Gündüz kara daha sıcak ve göreli alçak basınçlı, deniz daha serin ve yüksek basınçlı olabilir; deniz meltemi kıyıya eser. Gece karşıtlık tersine dönebilir. Bu günlük dolaşım mevsimlik musonla aynı zaman ölçeğinde değildir. Gerçek rüzgâr, geniş ölçekli sistem güçlü olduğunda yerel meltemi örtebilir.",
          "Basınç farkı ve merkezler arası uzaklık rüzgârın hızını etkiler. Dünya’nın dönüşü, serbest hava hareketlerini Kuzey Yarım Küre’de sağa, Güney Yarım Küre’de sola saptırır. Yer şekilleri de yerel yönü değiştirebilir."
        ],
        "example": {
          "question": "Güneşli yaz gününde öğleden sonra denizden karaya esişi açıkla.",
          "steps": [
            "Kara hızlı ısınır.",
            "Isınan hava yükselip yüzeyde göreli alçak basınç oluşturur.",
            "Denizdeki daha serin hava kıyıya yönelir."
          ],
          "answer": "Deniz meltemi oluşur.",
          "check": "Günlük ısınma-soğuma farkı yönü değiştirebilir."
        },
        "misconceptions": [
          {
            "wrong": "Meltem yıl boyunca tek yönde eser.",
            "correct": "Günlük ısınma-soğuma farkı yönü değiştirebilir.",
            "why": "Kara hızlı ısınır. Isınan hava yükselip yüzeyde göreli alçak basınç oluşturur. Denizdeki daha serin hava kıyıya yönelir."
          }
        ],
        "reasoningChecks": [
          {
            "question": "Meltemle musonun ortak yanı nedir?",
            "answer": "Kara-deniz ısınma farkıyla ilişkilidirler; zaman ve alan ölçeği farklıdır.",
            "why": "Günlük ısınma-soğuma farkı yönü değiştirebilir."
          }
        ]
      }
    ],
    "connections": [
      {
        "concept": "Basınç farkından rüzgâra",
        "why": "Temel yön basınç gradyanıyla belirlenir; yerel sapmalar ayrıca açıklanır."
      },
      {
        "concept": "Meltemin günlük yön değişimi",
        "why": "Günlük ısınma-soğuma farkı yönü değiştirebilir."
      }
    ],
    "authorship": "Özgün öğretmen anlatımı ve özgün çözümleme örnekleri; kaynak sayfaları MEBİ kitabına yöneliktir."
  },
  "cog-16": {
    "title": "Yerleşme ve bölgeler",
    "prerequisites": [
      {
        "concept": "Yerleşme dokusunu koşullarla açıklamak",
        "why": "Yerleşme biçimi su ve arazi kullanımı gibi etkenlerle açıklanır."
      }
    ],
    "goals": [
      "Yerleşme dokusunu koşullarla açıklamak: Yerleşme biçimi su ve arazi kullanımı gibi etkenlerle açıklanır.",
      "Bölgeler ve sınırların amacı: Ölçüt, geçiş ve zamana göre sınırlar değişebilir."
    ],
    "chapters": [
      {
        "title": "Yerleşme dokusunu koşullarla açıklamak",
        "source": {
          "book": "TYT-cog",
          "pages": [
            49,
            50,
            51,
            52,
            53,
            54,
            55,
            56,
            57,
            58,
            59
          ]
        },
        "explanation": [
          "Toplu ve dağınık yerleşme su, arazi, üretim ve toplumsal örgütlenmeyle ilişkilidir. Bol su ve parçalı tarım alanları dağınık dokuyu kolaylaştırabilir; suyun sınırlı olması belirli kaynak çevresinde toplanmayı destekleyebilir. Bunlar tek nedenli zorunlu kurallar değildir. Kır-kent ayrımında nüfus yanında ekonomik faaliyet ve işlev dikkate alınır; tek eşik bütün ülkeler için evrensel kabul edilmez.",
          "Yerleşme ve bölge sorularında aynı ölçütün bütün örneklere tutarlı uygulanması gerekir. Bir bölgeyi tarım ürünüyle tanımlayıp başka alanı yalnız idari sınıra göre karşılaştırmak sonuçları bulanıklaştırır. İşlevsel bölgede merkez ve etkileşim alanı bulunabilir; bir hastanenin hizmet alanı veya limanın ticari hinterlandı buna örnektir. Bu sınır doğal özelliklerden çok ulaşım ve hizmet bağıyla değişir. Yerleşme tipinde dağınık doku düzensizlik veya geri kalmışlık etiketi değildir; arazi kullanımıyla ilişkili mekânsal biçimdir. Kentlerin konut, sanayi, ticaret ve yönetim işlevleri farklı ağırlıklar taşıyabilir. Bir şehir yalnız nüfus artınca değil ağ içindeki rolü değişince de çevresini farklı biçimde etkiler.",
          "Doğu Karadeniz kırsalındaki engebeli arazi ve yaygın su kaynakları dağınık dokuyu destekler. Ancak mülkiyet, ekonomik faaliyet ve kültürel alışkanlıklar da etkilidir. Her engebeli yerin mutlaka dağınık olduğunu söyleme."
        ],
        "example": {
          "question": "Dağlık, bol yağışlı ve küçük tarım parçalı yerde dağınık doku neden görülebilir?",
          "steps": [
            "Su her yerde erişilebilir olabilir.",
            "Tarlalar yamaçlarda parçalanmıştır.",
            "Evler üretim alanlarına yakın dağılabilir."
          ],
          "answer": "Doğa ve üretim koşulları dokuyu etkiler.",
          "check": "Yerleşme biçimi su ve arazi kullanımı gibi etkenlerle açıklanır."
        },
        "misconceptions": [
          {
            "wrong": "Dağınık yerleşme her zaman nüfusun çok azlığındandır.",
            "correct": "Yerleşme biçimi su ve arazi kullanımı gibi etkenlerle açıklanır.",
            "why": "Su her yerde erişilebilir olabilir. Tarlalar yamaçlarda parçalanmıştır. Evler üretim alanlarına yakın dağılabilir."
          }
        ],
        "reasoningChecks": [
          {
            "question": "Bir yerin kent olması yalnız kişi sayısı mı?",
            "answer": "Ekonomik ve işlevsel ölçütler de kullanılabilir.",
            "why": "Yerleşme biçimi su ve arazi kullanımı gibi etkenlerle açıklanır."
          }
        ]
      },
      {
        "title": "Bölgeler ve sınırların amacı",
        "source": {
          "book": "TYT-cog",
          "pages": [
            49,
            50,
            51,
            52,
            53,
            54,
            55,
            56,
            57,
            58,
            59
          ]
        },
        "explanation": [
          "Bölge belirli bir ölçüte göre benzerlik veya işlev ilişkisi gösteren alandır. İklim, tarım ve sanayi bölgeleri farklı sınırlara sahip olabilir. Bir yer aynı anda birçok bölge içinde bulunabilir; sınırlar her zaman siyasi sınır gibi kesin çizgi değildir. Bölge, hangi soruyu cevaplamak için ayrıldığıyla anlam kazanır. Doğal çevreyi kullanmada da ekonomik kazançla çevresel maliyet birlikte değerlendirilir.",
          "Bir ülkenin idari sınırlarıyla iklim veya tarım bölgelerinin sınırları aynı olmak zorunda değildir. Bölge sınırları kullanılan ölçüte ve zaman içindeki değişime göre farklılaşabilir. Hizmet ağı genişleyen bir merkez, işlevsel bölgesini de genişletebilir."
        ],
        "example": {
          "question": "Bir il hem fındık üretim hem turizm bölgesinde olabilir mi?",
          "steps": [
            "Bölgeler farklı ölçütlere göre oluşturulur.",
            "Aynı mekân farklı faaliyetler taşır.",
            "Üyelikler birbirini dışlamak zorunda değildir."
          ],
          "answer": "Bir alan farklı bölgelerde yer alabilir.",
          "check": "Ölçüt, geçiş ve zamana göre sınırlar değişebilir."
        },
        "misconceptions": [
          {
            "wrong": "Bölge sınırları daima ülke sınırı kadar kesindir.",
            "correct": "Ölçüt, geçiş ve zamana göre sınırlar değişebilir.",
            "why": "Bölgeler farklı ölçütlere göre oluşturulur. Aynı mekân farklı faaliyetler taşır. Üyelikler birbirini dışlamak zorunda değildir."
          }
        ],
        "reasoningChecks": [
          {
            "question": "Sanayi bölgesinin sınırı zamanla niçin değişir?",
            "answer": "Yatırım, ulaşım ve işlev ilişkileri yeni alanlara yayılabilir.",
            "why": "Ölçüt, geçiş ve zamana göre sınırlar değişebilir."
          }
        ]
      }
    ],
    "connections": [
      {
        "concept": "Yerleşme dokusunu koşullarla açıklamak",
        "why": "Yerleşme biçimi su ve arazi kullanımı gibi etkenlerle açıklanır."
      },
      {
        "concept": "Bölgeler ve sınırların amacı",
        "why": "Ölçüt, geçiş ve zamana göre sınırlar değişebilir."
      }
    ],
    "authorship": "Özgün öğretmen anlatımı ve özgün çözümleme örnekleri; kaynak sayfaları MEBİ kitabına yöneliktir."
  },
  "cog-17": {
    "title": "Harita uygulaması",
    "prerequisites": [
      {
        "concept": "İzohipsle yükselti ve eğim",
        "why": "Dikey aralık sabitken yatay uzaklık azalır; eğim artar."
      }
    ],
    "goals": [
      "İzohipsle yükselti ve eğim: Dikey aralık sabitken yatay uzaklık azalır; eğim artar.",
      "Kesit ve yüzde eğim: Önce birimler eşitlenmelidir."
    ],
    "chapters": [
      {
        "title": "İzohipsle yükselti ve eğim",
        "source": {
          "book": "TYT-cog",
          "pages": [
            26,
            27,
            28,
            29,
            30,
            31
          ]
        },
        "explanation": [
          "Eş yükselti eğrisi aynı yükseltideki noktaları birleştirir. Eğriler arasındaki yükselti farkı harita içinde sabittir; yatay aralık daraldığında aynı yükselti farkı daha kısa mesafede aşılır ve eğim artar. Kapalı eğriler tepeyi gösterebilir; çukur gösterimleri özel işaretle ayırt edilir. Akarsu vadisindeki V biçiminin ucu yukarı çığır yönünü gösterir. Şekil ezberi yanında yükselti sırasını okumak gerekir.",
          "Kesit çiziminde iki tepe arasındaki çukurun yüksekliğini yalnız görünüşten tahmin etme; kesit hattının geçtiği her eğrinin değerini sırayla işaretle. Hat bazen tepenin zirvesinden geçmez; haritadaki en yüksek nokta kesitte otomatik bulunmaz. İzohipsler normalde kesişmez; dik yamaç ve özel gösterimlerde çizim kuralları ayrıca ele alınır. Bir vadiyi gösteren V biçiminin hangi yöne baktığını anlamak için eğri değerlerinin yükselme yönüyle birlikte oku. Yatay ölçek haritadan gelirken kesitin dikey ölçeği ayrı seçilmiş olabilir; görsel diklik tek başına gerçek eğim karşılaştırması sağlamaz. Yüzde eğimle derece cinsinden eğim aynı sayı değildir; soru hangi büyüklüğü istiyorsa uygun oran veya açı kullanılır.",
          "Önce yükselti farkını bul. Sonra ölçekle harita uzaklığını gerçek yatay uzaklığa çevir. Son olarak yüzde eğim = yükselti farkı / yatay uzaklık × 100. Metre ile kilometreyi doğrudan birbirine bölme; birimleri eşitle."
        ],
        "example": {
          "question": "20 m aralıklı izohipsler A’da 1 cm, B’de 4 cm aralıklıysa hangisi diktir?",
          "steps": [
            "İki yerde yükselti farkı aynıdır.",
            "A’da bu fark daha kısa yatay mesafede aşılır.",
            "Eğim oranı A’da daha büyüktür."
          ],
          "answer": "A daha diktir.",
          "check": "Dikey aralık sabitken yatay uzaklık azalır; eğim artar."
        },
        "misconceptions": [
          {
            "wrong": "Eğriler sıklaştığında yükselti aralığı artar.",
            "correct": "Dikey aralık sabitken yatay uzaklık azalır; eğim artar.",
            "why": "İki yerde yükselti farkı aynıdır. A’da bu fark daha kısa yatay mesafede aşılır. Eğim oranı A’da daha büyüktür."
          }
        ],
        "reasoningChecks": [
          {
            "question": "V’nin ucu akarsuyun akış yönü mü?",
            "answer": "Genel olarak yüksek kaynağa doğruyu gösterir; akış tersine, aşağı çığıradır.",
            "why": "Dikey aralık sabitken yatay uzaklık azalır; eğim artar."
          }
        ]
      },
      {
        "title": "Kesit ve yüzde eğim",
        "source": {
          "book": "TYT-cog",
          "pages": [
            26,
            27,
            28,
            29,
            30,
            31
          ]
        },
        "explanation": [
          "Arazi kesiti, seçilen hat üzerindeki yükselti değişimini gösterir. Önce hat eğrileri kestiği sırayla yükseltiler kaydedilir, sonra yatay ölçek korunarak işaretlenir. Yüzde eğim yükselti farkının yatay uzaklığa oranının yüzle çarpımıdır; birimler eşitlenmelidir. Yol uzunluğunu yatay mesafe yerine kullanmak sonucu değiştirebilir. Dikey ölçek büyütülmüş kesit arazinin görünüşünü olduğundan dik gösterebilir.",
          "İzohips aralığı 100 metre olan bir haritada en içteki kapalı çizgi 300 metreyse, zirve mutlaka 300 metre değildir. Ayrıca alan hesabında ölçeğin karesi kullanılır: haritadaki uzunluk ile alan hesabının dönüşümleri aynı değildir."
        ],
        "example": {
          "question": "Yükselti farkı 200 m, yatay uzaklık 2 km ise yüzde eğim nedir?",
          "steps": [
            "2 km=2000 m yapılır.",
            "200/2000=0,1 bulunur.",
            "Yüzde için 100 ile çarpılır."
          ],
          "answer": "%10’dur.",
          "check": "Önce birimler eşitlenmelidir."
        },
        "misconceptions": [
          {
            "wrong": "200/2 işlemiyle %100 çıkar.",
            "correct": "Önce birimler eşitlenmelidir.",
            "why": "2 km=2000 m yapılır. 200/2000=0,1 bulunur. Yüzde için 100 ile çarpılır."
          }
        ],
        "reasoningChecks": [
          {
            "question": "Kesitte dağ çok dik görünüyorsa arazi kesin çok dik midir?",
            "answer": "Dikey ve yatay ölçek farklıysa görsel abartı olabilir.",
            "why": "Önce birimler eşitlenmelidir."
          }
        ]
      }
    ],
    "connections": [
      {
        "concept": "İzohipsle yükselti ve eğim",
        "why": "Dikey aralık sabitken yatay uzaklık azalır; eğim artar."
      },
      {
        "concept": "Kesit ve yüzde eğim",
        "why": "Önce birimler eşitlenmelidir."
      }
    ],
    "authorship": "Özgün öğretmen anlatımı ve özgün çözümleme örnekleri; kaynak sayfaları MEBİ kitabına yöneliktir."
  },
  "fel-01": {
    "title": "Felsefeye giriş",
    "prerequisites": [
      {
        "concept": "Felsefi sorunun kavramsal yapısı",
        "why": "Eleştiri gerekçe ve varsayımları sınayarak kabulü de reddi de temellendirir."
      }
    ],
    "goals": [
      "Felsefi sorunun kavramsal yapısı: Eleştiri gerekçe ve varsayımları sınayarak kabulü de reddi de temellendirir.",
      "Argümanda tutarlılık ve geçerlilik: İç ilişki doğru olsa bile öncüllerin içerik doğruluğu ayrıca sınanır."
    ],
    "chapters": [
      {
        "title": "Felsefi sorunun kavramsal yapısı",
        "source": {
          "book": "TYT-fel",
          "pages": [
            9,
            10,
            11,
            12,
            13,
            14
          ]
        },
        "explanation": [
          "Felsefi soru tek olayın bilgisini almaktan çok kavramın anlamını, bilginin dayanağını veya değerin ölçütünü sorgular. “Bu davranış adil mi?” sorusundan “Adalet nedir?” sorusuna geçiş, örneğin gerisindeki genel ölçütü araştırmaya açar. Felsefi düşüncenin eleştirelliği her şeyi reddetmek değildir; varsayımları ve gerekçeleri sınamaktır. Refleksif nitelik düşünmenin kendi yöntem ve sınırlarını konu edinmesidir. Bir görüşün tartışmaya açık olması gerekçesiz olduğu anlamına gelmez.",
          "Bir argümanın sonucunu bulmak için çünkü, öyleyse veya bu nedenle gibi bağlara bakılabilir; fakat bağlaç bulunması şart değildir. ‘Sınav ölçütü herkese aynı uygulanmalı. Bu öğrencinin ayrıcalığı olamaz.’ sözünde ilk yargı ikinciyi destekler. Bir görüşün eleştirisinde kişiyi küçük düşürmek yerine öncülün doğru olup olmadığı veya sonucun öncüllerden çıkıp çıkmadığı gösterilir. ‘Bu görüşü genç biri savunuyor, o yüzden yanlıştır.’ ifadesi iddianın içeriğini sınamaz. Tutarlılıkta aynı sözcüğün aynı anlamda kullanılması önemlidir; bir cümlede özgürlük siyasi hak, diğerinde nedensizlik anlamına geliyorsa görünen karşıtlık gerçek çelişki olmayabilir. Kavramı netleştirmek tartışmanın ilk adımıdır.",
          "“Bu karar adil mi?” sorusu tek bir olayı tartışır; “Adalet nedir?” sorusu kavramın temelini araştırır. Felsefi sorular genel, gerekçelendirmeye açık ve kavramsaldır."
        ],
        "example": {
          "question": "“Kararlarıma güveniyorum; ama güven ölçütümü de sorgulamalıyım.” sözü hangi özelliği gösterir?",
          "steps": [
            "Özne yalnız dış dünyayı incelemiyor.",
            "Kendi değerlendirmesinin dayandığı ölçüte dönüyor.",
            "Düşünme kendi üzerine yöneliyor."
          ],
          "answer": "Refleksif düşünme vardır.",
          "check": "Eleştiri gerekçe ve varsayımları sınayarak kabulü de reddi de temellendirir."
        },
        "misconceptions": [
          {
            "wrong": "Eleştirel olmak her görüşü reddetmektir.",
            "correct": "Eleştiri gerekçe ve varsayımları sınayarak kabulü de reddi de temellendirir.",
            "why": "Özne yalnız dış dünyayı incelemiyor. Kendi değerlendirmesinin dayandığı ölçüte dönüyor. Düşünme kendi üzerine yöneliyor."
          }
        ],
        "reasoningChecks": [
          {
            "question": "“Saat kaç?” neden tek başına felsefi soru değildir?",
            "answer": "Belirli bir bilginin yanıtını ister; zamanın ne olduğu ve ölçümün anlamı gibi kavramsal sorular farklıdır.",
            "why": "Eleştiri gerekçe ve varsayımları sınayarak kabulü de reddi de temellendirir."
          }
        ]
      },
      {
        "title": "Argümanda tutarlılık ve geçerlilik",
        "source": {
          "book": "TYT-fel",
          "pages": [
            15,
            16,
            17,
            18
          ]
        },
        "explanation": [
          "Argüman, bir sonucu desteklemek üzere öne sürülen gerekçelerin bağlantısıdır. Tutarlılık görüşlerin birbirini çürütmemesi; geçerlilik öncüllerden sonuca yapılan çıkarımın biçimiyle ilgilidir. Tümdengelimde doğru öncüller ve geçerli biçim sonucu güvenceye alabilir; tümevarım sınırlı gözlemlerden daha genel sonuca giderek olasılıklı destek sağlar. Analojide benzerliğin ilgili olması gerekir; yüzeysel benzerlik sonuç için yeterli değildir.",
          "Eleştirel olmak bir görüşü otomatik reddetmek değildir. Tutarlılık, düşüncenin kendi içinde çelişmemesidir; bir görüşün tutarlı olması tek başına doğru olduğunu kanıtlamaz."
        ],
        "example": {
          "question": "“Bütün kuşlar uçar. Penguen kuştur. Penguen uçar.” çıkarımını incele.",
          "steps": [
            "Biçim genel kuralı tekil örneğe uyguluyor.",
            "Birinci öncül gerçekte yanlıştır.",
            "Geçerli görünen biçim yanlış öncülden doğru içerik garantilemez."
          ],
          "answer": "Çıkarım biçimiyle öncül doğruluğu ayrı değerlendirilir.",
          "check": "İç ilişki doğru olsa bile öncüllerin içerik doğruluğu ayrıca sınanır."
        },
        "misconceptions": [
          {
            "wrong": "Tutarlı veya geçerli her sav mutlaka doğrudur.",
            "correct": "İç ilişki doğru olsa bile öncüllerin içerik doğruluğu ayrıca sınanır.",
            "why": "Biçim genel kuralı tekil örneğe uyguluyor. Birinci öncül gerçekte yanlıştır. Geçerli görünen biçim yanlış öncülden doğru içerik garantilemez."
          }
        ],
        "reasoningChecks": [
          {
            "question": "On beyaz kuğu görüp bütün kuğular beyaz demek kesin midir?",
            "answer": "Hayır; tümevarımın kapsamını aşan karşı örnek bulunabilir.",
            "why": "İç ilişki doğru olsa bile öncüllerin içerik doğruluğu ayrıca sınanır."
          }
        ]
      }
    ],
    "connections": [
      {
        "concept": "Felsefi sorunun kavramsal yapısı",
        "why": "Eleştiri gerekçe ve varsayımları sınayarak kabulü de reddi de temellendirir."
      },
      {
        "concept": "Argümanda tutarlılık ve geçerlilik",
        "why": "İç ilişki doğru olsa bile öncüllerin içerik doğruluğu ayrıca sınanır."
      }
    ],
    "authorship": "Özgün öğretmen anlatımı ve özgün çözümleme örnekleri; kaynak sayfaları MEBİ kitabına yöneliktir."
  },
  "fel-02": {
    "title": "Bilgi felsefesi",
    "prerequisites": [
      {
        "concept": "Bilginin kaynağı ve imkânı",
        "why": "Kuşkunun yöntem mi nihai tutum mu olduğu ve hangi bilgi türüne yöneldiği incelenir."
      }
    ],
    "goals": [
      "Bilginin kaynağı ve imkânı: Kuşkunun yöntem mi nihai tutum mu olduğu ve hangi bilgi türüne yöneldiği incelenir.",
      "Doğruluk ölçütlerini karşılaştırmak: Uzlaşma bir ölçüt olarak önerilebilir ama uygunluk için bağımsız kanıt yerine geçmez."
    ],
    "chapters": [
      {
        "title": "Bilginin kaynağı ve imkânı",
        "source": {
          "book": "TYT-fel",
          "pages": [
            27,
            28,
            29,
            30
          ]
        },
        "explanation": [
          "Epistemoloji yalnız ne bildiğimizi değil bilginin nasıl mümkün olduğunu, nereden geldiğini ve hangi ölçütle doğru sayıldığını araştırır. Rasyonalizm aklı, empirizm deneyimi, entüisyonizm sezgiyi öne çıkarır; bu özetler metindeki özel gerekçenin yerine geçmez. Şüphecilik bilginin güvenilirliğini sorgular; yöntem olarak şüphe kullanan her filozof kesin bilgiyi reddetmez. “Bilgi var mı?” ile “Doğrunun kaynağı ne?” farklı sorulardır.",
          "Doğruluk ile gerçeklik farklı düzlemlerde kullanılır. Gerçeklik var olanla, doğruluk bir yargının durumu doğru belirtmesiyle ilgilidir. ‘Bu masa gerçektir.’ ile ‘Masa kırmızıdır yargısı doğrudur.’ aynı yükleme değildir. Bilginin kaynağı ve ölçütü de ayrılır: deneyim kaynak olarak gösterilirken uygunluk doğruluk ölçütü olabilir. Bir filozofun duyuları önemsemesi bütün duyumların yanılmaz olduğunu kabul etmesini gerektirmez. Septik tutumun hangi alana yöneldiğini okumak gerekir; günlük işlerde olasılığa göre davranmakla mutlak kesinliği sorgulamak birlikte bulunabilir. Yeni bir örneği sınıflandırırken önce metnin sorduğu problem alanını bulmak, ardından görüş adını seçmek anahtar sözcük ezberinden daha güvenilirdir.",
          "“Bilgi nereden gelir?” kaynak; “Kesin bilgi mümkün mü?” imkân; “Doğruyu nasıl ayırırız?” ölçüt problemidir. Akımın adından önce paragrafın hangi problemi tartıştığını belirle."
        ],
        "example": {
          "question": "Bir kişi duyuların yanıltmasını gerekçe gösterip bütün kesin bilgiyi sorguluyor. Hangi problem öne çıkar?",
          "steps": [
            "Duyunun güvenilirliği öncül olarak kullanılıyor.",
            "Sorgu tek bir olaydan genel bilgi imkânına uzanıyor.",
            "Bilginin mümkün olup olmadığı tartışılıyor."
          ],
          "answer": "Bilginin imkânı problemi öne çıkar.",
          "check": "Kuşkunun yöntem mi nihai tutum mu olduğu ve hangi bilgi türüne yöneldiği incelenir."
        },
        "misconceptions": [
          {
            "wrong": "Duyulardan kuşkulanan herkes aynı görüştedir.",
            "correct": "Kuşkunun yöntem mi nihai tutum mu olduğu ve hangi bilgi türüne yöneldiği incelenir.",
            "why": "Duyunun güvenilirliği öncül olarak kullanılıyor. Sorgu tek bir olaydan genel bilgi imkânına uzanıyor. Bilginin mümkün olup olmadığı tartışılıyor."
          }
        ],
        "reasoningChecks": [
          {
            "question": "Matematikle deneysel gözlemin gerekçeleri aynı mıdır?",
            "answer": "Bilgi alanları farklı kanıt ve temellendirme biçimleri kullanabilir.",
            "why": "Kuşkunun yöntem mi nihai tutum mu olduğu ve hangi bilgi türüne yöneldiği incelenir."
          }
        ]
      },
      {
        "title": "Doğruluk ölçütlerini karşılaştırmak",
        "source": {
          "book": "TYT-fel",
          "pages": [
            31,
            32
          ]
        },
        "explanation": [
          "Uygunluk yargıyla gerçeklik ilişkisini, tutarlılık yargılar arası uyumu, yarar pratik işlevi öne çıkarabilir. Apaçıklık ve tümel uzlaşım da farklı ölçüt önerileridir. Bir inanca çok kişinin katılması onun gerçeklikle uygunluğunu otomatik kanıtlamaz. İşe yarayan modelin bütün ayrıntılarıyla hakikatin kopyası olduğu sonucu da çıkarılamaz. Soruda belirtilen ölçütün hangi ilişkiyi temel aldığı açıkça gösterilmelidir.",
          "Gerçeklik, var olma durumuyla ilgilidir. Doğruluk ise bir yargının niteliğidir. Uygunluk ölçütü yargı ile olgunun örtüşmesini, tutarlılık ölçütü yargılar arasındaki uyumu arar."
        ],
        "example": {
          "question": "“Bu düşünce mevcut bilgilerimizle çelişmediği için doğrudur.” savının ölçütü nedir?",
          "steps": [
            "Yargı doğrudan dış olayla karşılaştırılmıyor.",
            "Diğer bilgilerle çatışmama esas alınıyor.",
            "Bu, tutarlılık ölçütüne dayanıyor."
          ],
          "answer": "Tutarlılık ölçütü kullanılmıştır.",
          "check": "Uzlaşma bir ölçüt olarak önerilebilir ama uygunluk için bağımsız kanıt yerine geçmez."
        },
        "misconceptions": [
          {
            "wrong": "Herkesin inanması bir savı kesin doğru yapar.",
            "correct": "Uzlaşma bir ölçüt olarak önerilebilir ama uygunluk için bağımsız kanıt yerine geçmez.",
            "why": "Yargı doğrudan dış olayla karşılaştırılmıyor. Diğer bilgilerle çatışmama esas alınıyor. Bu, tutarlılık ölçütüne dayanıyor."
          }
        ],
        "reasoningChecks": [
          {
            "question": "Bir harita pratikte işe yararken bazı ayrıntıları basitleştirebilir mi?",
            "answer": "Evet; yararlılık ve eksiksiz temsil farklı ölçütlerdir.",
            "why": "Uzlaşma bir ölçüt olarak önerilebilir ama uygunluk için bağımsız kanıt yerine geçmez."
          }
        ]
      }
    ],
    "connections": [
      {
        "concept": "Bilginin kaynağı ve imkânı",
        "why": "Kuşkunun yöntem mi nihai tutum mu olduğu ve hangi bilgi türüne yöneldiği incelenir."
      },
      {
        "concept": "Doğruluk ölçütlerini karşılaştırmak",
        "why": "Uzlaşma bir ölçüt olarak önerilebilir ama uygunluk için bağımsız kanıt yerine geçmez."
      }
    ],
    "authorship": "Özgün öğretmen anlatımı ve özgün çözümleme örnekleri; kaynak sayfaları MEBİ kitabına yöneliktir."
  },
  "fel-03": {
    "title": "Varlık felsefesi",
    "prerequisites": [
      {
        "concept": "Varlığın ne olduğu sorusu",
        "why": "İdealist yaklaşımlar varlığın temelini farklı biçimde düşünsel olanla açıklar; metnin özel savı okunmalıdır."
      }
    ],
    "goals": [
      "Varlığın ne olduğu sorusu: İdealist yaklaşımlar varlığın temelini farklı biçimde düşünsel olanla açıklar; metnin özel savı okunmalıdır.",
      "Oluş, öz ve amaçlılık: Düzen ve amaç ilişkisinin ayrıca temellendirilmesi gerekir."
    ],
    "chapters": [
      {
        "title": "Varlığın ne olduğu sorusu",
        "source": {
          "book": "TYT-fel",
          "pages": [
            19,
            20,
            21,
            22,
            23,
            24,
            25,
            26
          ]
        },
        "explanation": [
          "Ontoloji tek tek nesnelerin özelliğinden çok var olmanın anlamını ve varlığın temelini araştırır. Materyalizm temel gerçekliği maddede; idealizm düşünsel olanda; düalizm iki temel tözde arar. Bunlar yalnız görünen nesne sayısına ilişkin değildir. Bir masa görmek materyalizmi tek başına kanıtlamaz; tartışma masanın ve bütün gerçekliğin nihai olarak hangi tür varlıkla açıklanacağı üzerinedir. Realizm-nihilizm karşıtlığı da varlığın kabulüyle ilişkilidir.",
          "Varlık sınıflamasında somut-soyut ile gerçek-ideal ayrımları aynı biçimde kullanılmayabilir; metindeki tanım esas alınmalıdır. Bir matematiksel nesnenin fiziksel yerde bulunmaması, o metnin ontolojisinde bütünüyle yok sayıldığı anlamına gelmez. Fenomenoloji bilincin nesneye yönelişini incelerken yeni ontoloji varlığı katmanlar ve ilişkilerle ele alabilir. Bu yaklaşımları yalnız idealizm-materyalizm kutusuna zorlamak açıklama ayrıntısını kaybettirir. Töz, değişmeler altında kendisi olarak var olan temel anlamında kullanıldığında özellikten ayrılır; bir cismin renginin değişmesiyle cismin varlığının sona ermesi aynı iddia değildir. Oluşu temel almakta da değişimin hangi birliğe veya yasaya göre düşünüldüğü ayrıca açıklanmalıdır.",
          "Bilim belirli varlık alanlarını yöntemleriyle inceler. Ontoloji, var olmanın ne demek olduğunu ve varlığın temel yapısını genel olarak sorgular."
        ],
        "example": {
          "question": "“Zihin ve beden birbirine indirgenemez iki temel gerçekliktir.” cümlesini sınıflandır.",
          "steps": [
            "İki temel varlık alanı kabul ediliyor.",
            "Biri diğerine bütünüyle indirgenmiyor.",
            "Töz sayısı bakımından ikici yaklaşım vardır."
          ],
          "answer": "Düalizmle uyumludur.",
          "check": "İdealist yaklaşımlar varlığın temelini farklı biçimde düşünsel olanla açıklar; metnin özel savı okunmalıdır."
        },
        "misconceptions": [
          {
            "wrong": "İdealizm görünen nesnelerin hiç bulunmadığını her biçimde savunur.",
            "correct": "İdealist yaklaşımlar varlığın temelini farklı biçimde düşünsel olanla açıklar; metnin özel savı okunmalıdır.",
            "why": "İki temel varlık alanı kabul ediliyor. Biri diğerine bütünüyle indirgenmiyor. Töz sayısı bakımından ikici yaklaşım vardır."
          }
        ],
        "reasoningChecks": [
          {
            "question": "Varlık felsefesiyle fizik aynı soruyu mu sorar?",
            "answer": "Fizik belirli olguların yasalarını, ontoloji temel varlık kabullerini araştırabilir.",
            "why": "İdealist yaklaşımlar varlığın temelini farklı biçimde düşünsel olanla açıklar; metnin özel savı okunmalıdır."
          }
        ]
      },
      {
        "title": "Oluş, öz ve amaçlılık",
        "source": {
          "book": "TYT-fel",
          "pages": [
            19,
            20,
            21,
            22,
            23,
            24,
            25,
            26
          ]
        },
        "explanation": [
          "Varlığın sabit özle mi değişimle mi açıklanacağı başka bir ontolojik problemdir. Oluşu temel alan görüşte gerçeklik durağan nesneler listesine indirgenmez. Evrende amaç bulunmasıyla neden-sonuç ilişkisi bulunması da aynı sav değildir: nedensel düzen bir hedef belirlemeyi zorunlu kılmaz. Çağdaş ontolojik yaklaşımları sınıflandırırken bilincin, dilin veya varlık katmanlarının metindeki rolü incelenir; yalnız anahtar sözcük ezberi yeterli değildir.",
          "Parçada madde sözcüğünün geçmesi materyalizm için yeterli değildir. Yazarın maddeyi temel gerçeklik sayması gerekir. Benzer biçimde düşünmekten söz etmek her zaman idealizm değildir."
        ],
        "example": {
          "question": "“Her olayın nedeni vardır; öyleyse evrenin belirlenmiş bir amacı vardır.” çıkarımı zorunlu mu?",
          "steps": [
            "Neden olayın nasıl meydana geldiğiyle ilgilidir.",
            "Amaç bir hedefe yöneliş iddiasıdır.",
            "İlkinden ikincisine geçiş için ek öncül gerekir."
          ],
          "answer": "Nedensellik tek başına amaçlılığı kanıtlamaz.",
          "check": "Düzen ve amaç ilişkisinin ayrıca temellendirilmesi gerekir."
        },
        "misconceptions": [
          {
            "wrong": "Düzen varsa mutlaka bilinçli hedef vardır.",
            "correct": "Düzen ve amaç ilişkisinin ayrıca temellendirilmesi gerekir.",
            "why": "Neden olayın nasıl meydana geldiğiyle ilgilidir. Amaç bir hedefe yöneliş iddiasıdır. İlkinden ikincisine geçiş için ek öncül gerekir."
          }
        ],
        "reasoningChecks": [
          {
            "question": "Değişimi kabul etmek bütün sürekliliği reddetmek midir?",
            "answer": "Hayır; değişim içinde hangi yapı veya ilkenin sürdüğü ayrıca tartışılabilir.",
            "why": "Düzen ve amaç ilişkisinin ayrıca temellendirilmesi gerekir."
          }
        ]
      }
    ],
    "connections": [
      {
        "concept": "Varlığın ne olduğu sorusu",
        "why": "İdealist yaklaşımlar varlığın temelini farklı biçimde düşünsel olanla açıklar; metnin özel savı okunmalıdır."
      },
      {
        "concept": "Oluş, öz ve amaçlılık",
        "why": "Düzen ve amaç ilişkisinin ayrıca temellendirilmesi gerekir."
      }
    ],
    "authorship": "Özgün öğretmen anlatımı ve özgün çözümleme örnekleri; kaynak sayfaları MEBİ kitabına yöneliktir."
  },
  "fel-04": {
    "title": "Ahlak felsefesi",
    "prerequisites": [
      {
        "concept": "Özgürlük ve sorumluluk",
        "why": "Nedensel etki ve yazgıcı kaçınılmazlık aynı sav değildir."
      }
    ],
    "goals": [
      "Özgürlük ve sorumluluk: Nedensel etki ve yazgıcı kaçınılmazlık aynı sav değildir.",
      "Evrensel yasa, ödev, fayda ve erdem: Ödev, fayda, haz, erdem ve sezgi farklı temeller olabilir."
    ],
    "chapters": [
      {
        "title": "Özgürlük ve sorumluluk",
        "source": {
          "book": "TYT-fel",
          "pages": [
            37,
            38,
            39,
            40,
            41
          ]
        },
        "explanation": [
          "Ahlak felsefesi yalnız toplumdaki kuralları saymaz; iyi eylemin ölçütünü, özgürlüğü ve sorumluluğu sorgular. Determinizm davranışın nedenlerle belirlendiğini, indeterminizm belirlenmemişliğe açıklığı, otodeterminizm bireyin kendini belirleme ve geliştirme gücünü vurgular. Fatalizm sonucu kaçınılmaz yazgıyla ilişkilendirir. Benzer görünseler de nedenleri açıklamakla her çabanın boş olduğunu söylemek aynı değildir; kavramlar metindeki gerekçeyle ayrılır.",
          "Ahlaki bir olayda failin niyeti, davranışın kendisi, koşullar ve etkilenen kişiler ayrı yazılabilir. Sonuç iyi olduğu için niyetin de iyi olduğunu varsaymak veya kötü sonuçtan otomatik kötü niyet çıkarmak yeterli gerekçe taşımaz. Ödev etiğiyle faydacılık arasındaki ayrım bu katmanları karşılaştırınca görünür olur. Hazcılıkta haz, erdem etiğinde iyi karakter, sezgicilikte doğrudan kavrayış farklı temellerdir; bütününü kişisel keyif olarak etiketlemek doğru değildir. Evrensel ahlak yasasını kabul eden görüşler bu yasayı öznel veya nesnel kaynakla temellendirebilir; kabulün kendisi temel üzerinde uzlaşma demek değildir. Sorumluluk sorusunda baskı, bilgi ve seçim imkânı belirtilmişse bunlar olayın ahlaki değerlendirmesini etkileyen koşullardır.",
          "Ahlak, hayatta benimsenen kurallar ve değerlerle ilgilidir. Etik, bu kuralların dayanaklarını sorgular: “İyiyi neye göre belirliyoruz?”"
        ],
        "example": {
          "question": "“Aile ve çevre seçimimi etkiler ama kendimi geliştirip karar ölçütlerimi değiştirebilirim.” sözü neyi vurgular?",
          "steps": [
            "Etkiler kabul ediliyor.",
            "Birey bütünüyle edilgen sayılmıyor.",
            "Özgürlük kendini geliştirme ve belirlemeyle ilişkilendiriliyor."
          ],
          "answer": "Otodeterminizmle bağlantılıdır.",
          "check": "Nedensel etki ve yazgıcı kaçınılmazlık aynı sav değildir."
        },
        "misconceptions": [
          {
            "wrong": "Davranışın nedeni varsa insanın hiçbir çabası anlamlı değildir.",
            "correct": "Nedensel etki ve yazgıcı kaçınılmazlık aynı sav değildir.",
            "why": "Etkiler kabul ediliyor. Birey bütünüyle edilgen sayılmıyor. Özgürlük kendini geliştirme ve belirlemeyle ilişkilendiriliyor."
          }
        ],
        "reasoningChecks": [
          {
            "question": "Sorumlulukta seçim imkânı niçin tartışılır?",
            "answer": "Eylemin kişiye hangi koşullarda yüklenebileceğini etkiler.",
            "why": "Nedensel etki ve yazgıcı kaçınılmazlık aynı sav değildir."
          }
        ]
      },
      {
        "title": "Evrensel yasa, ödev, fayda ve erdem",
        "source": {
          "book": "TYT-fel",
          "pages": [
            42,
            43,
            44,
            45,
            46,
            47,
            48
          ]
        },
        "explanation": [
          "Ahlak görüşleri farklı sorulara yanıt verir: sonucun yararı mı, niyet ve ilke mi, kişinin erdemli karakteri mi belirleyicidir? Kant ödevi, faydacılar sonuçların yararını, erdem etiği karakter ve iyi yaşamı öne çıkarır. Evrensel ahlak yasasını kabul etmek bütün filozofların aynı kurala ve aynı temele vardığı anlamına gelmez. Evrenselliği reddeden görüşler de ahlaki düşüncenin bütününün yokluğunu savunmak zorunda değildir.",
          "Kant’ın ödev ahlakında çıkar beklentisi belirleyici değildir. Faydacılık sonuçlara odaklanır. Özgürlük sorusunda determinizm nedensel belirlenimi, indeterminizm belirlenmemişliği, otodeterminizm kişinin kendisini belirlemesini öne çıkarır."
        ],
        "example": {
          "question": "Doğru söyleyen iki kişiden biri yalnız ödül, diğeri ödev gerekçesi taşıyorsa Kant açısından fark var mı?",
          "steps": [
            "Görünen eylem aynı olabilir.",
            "İlkenin ve niyetin kaynağı farklıdır.",
            "Ödevden davranışla ödeve uygun davranış ayrılır."
          ],
          "answer": "Ahlaki değer yalnız dış sonuca indirgenmez.",
          "check": "Ödev, fayda, haz, erdem ve sezgi farklı temeller olabilir."
        },
        "misconceptions": [
          {
            "wrong": "Bütün ahlak görüşleri aynı iyi ölçütünü kullanır.",
            "correct": "Ödev, fayda, haz, erdem ve sezgi farklı temeller olabilir.",
            "why": "Görünen eylem aynı olabilir. İlkenin ve niyetin kaynağı farklıdır. Ödevden davranışla ödeve uygun davranış ayrılır."
          }
        ],
        "reasoningChecks": [
          {
            "question": "Bir eylem yararlı bulununca Kant açısından otomatik ahlaki mi?",
            "answer": "Hayır; niyet ve ilke ayrıca incelenir.",
            "why": "Ödev, fayda, haz, erdem ve sezgi farklı temeller olabilir."
          }
        ]
      }
    ],
    "connections": [
      {
        "concept": "Özgürlük ve sorumluluk",
        "why": "Nedensel etki ve yazgıcı kaçınılmazlık aynı sav değildir."
      },
      {
        "concept": "Evrensel yasa, ödev, fayda ve erdem",
        "why": "Ödev, fayda, haz, erdem ve sezgi farklı temeller olabilir."
      }
    ],
    "authorship": "Özgün öğretmen anlatımı ve özgün çözümleme örnekleri; kaynak sayfaları MEBİ kitabına yöneliktir."
  },
  "fel-05": {
    "title": "Bilim felsefesi",
    "prerequisites": [
      {
        "concept": "Bilimsel açıklamanın niteliği",
        "why": "Kuram ve yasa farklı işlevler taşır; biri diğerinin olgunlaşmış adı değildir."
      }
    ],
    "goals": [
      "Bilimsel açıklamanın niteliği: Kuram ve yasa farklı işlevler taşır; biri diğerinin olgunlaşmış adı değildir.",
      "Bilimsel değişim ve değer: Yapılabilirlik, yapılmasının doğru olup olmadığına tek başına yanıt vermez."
    ],
    "chapters": [
      {
        "title": "Bilimsel açıklamanın niteliği",
        "source": {
          "book": "TYT-fel",
          "pages": [
            33,
            34
          ]
        },
        "explanation": [
          "Bilim gözlem ve akıl yürütmeyle olgular arasındaki ilişkileri araştırır; açıklamalar sınanabilir ve eleştiriye açıktır. Bilim felsefesi bilimin ne yaptığı, yönteminin sınırı ve kuramların nasıl değiştiğiyle ilgilenir. Bilimsel yasa betimlenen düzenlilik, kuram ise geniş açıklama çerçevesidir; kuramın çok kanıtlanınca yasaya dönüşeceği basit basamak modeli doğru değildir. Bir modelin ideal koşullar kullanması onun yararsızlığını değil geçerlilik sınırının tanımlanması gerektiğini gösterir.",
          "Bilimde doğrulayan örnek aramakla bir kuramı zorlu sınamaya açmak aynı tutum değildir. Bir iddia olası bütün gözlemleri sonradan kendine uyarlıyorsa hangi durumda başarısız olacağı belirsizleşir. Popper’ın yaklaşımı bu sınanma riskini önemser. Kuhn ise araştırmacıların ortak sorun ve örnek çözüm çerçevesi içinde çalışmasını, olağan bilimle devrimsel değişimi ayırarak inceler. Bu iki yaklaşımın her biri bilimin değişimini farklı boyuttan anlatır; biri diğerinin yalnız eş anlamlı adı değildir. Bilimsel etkinliğin toplumsal koşullardan etkilenmesi onun bütün sonuçlarının keyfî olduğu sonucunu doğurmaz. Veriler, yöntemler ve eleştiri kurumları ortak değerlendirme imkânı sağlar; tarihsel bağlamla gerekçe gücü birlikte düşünülebilir.",
          "Bilimsel çalışma olguları açıklarken bilim felsefesi “Bilimsel açıklama nedir?”, “Bilimin sınırları nelerdir?” sorularını tartışır. Birbirlerini beslerler; aynı yöntemle çalışmaları gerekmez."
        ],
        "example": {
          "question": "Sürtünmesiz ortam modeli gerçek hayatta sürtünme varken işe yarar mı?",
          "steps": [
            "Model belirli etkeni geçici dışarıda bırakır.",
            "Temel ilişkiyi ayırmayı sağlar.",
            "Gerçek uygulamada dışlanan etken ve sınır yeniden hesaba katılır."
          ],
          "answer": "İdeal model koşulları belirtilerek açıklayıcı olabilir.",
          "check": "Kuram ve yasa farklı işlevler taşır; biri diğerinin olgunlaşmış adı değildir."
        },
        "misconceptions": [
          {
            "wrong": "Kuram yeterince kanıtlanınca yasa olur.",
            "correct": "Kuram ve yasa farklı işlevler taşır; biri diğerinin olgunlaşmış adı değildir.",
            "why": "Model belirli etkeni geçici dışarıda bırakır. Temel ilişkiyi ayırmayı sağlar. Gerçek uygulamada dışlanan etken ve sınır yeniden hesaba katılır."
          }
        ],
        "reasoningChecks": [
          {
            "question": "Tek başarılı deney bütün olası durumları kanıtlar mı?",
            "answer": "Hayır; sınama kapsamı ve kuramın iddiası birlikte değerlendirilir.",
            "why": "Kuram ve yasa farklı işlevler taşır; biri diğerinin olgunlaşmış adı değildir."
          }
        ]
      },
      {
        "title": "Bilimsel değişim ve değer",
        "source": {
          "book": "TYT-fel",
          "pages": [
            35,
            36
          ]
        },
        "explanation": [
          "Bilimsel etkinlik kuramlar, araştırma toplulukları ve tarihsel koşullar içinde gelişir. Popper sınanabilirlikte yanlışlama imkânını, Kuhn paradigma ve devrim ilişkisini vurgular. Teknolojik uygulamanın yararlı veya zararlı olması bilimsel önermenin doğruluğuyla aynı değerlendirme değildir; etik ve toplumsal kararlar devreye girer. Bilimin değerini sorgulamak ona karşı çıkmak değil insan hayatındaki rolünü gerekçeleriyle değerlendirmektir.",
          "Popper için bir iddianın hangi olası gözlemle yanlışlanabileceği önemlidir. Her sonuca uyarlanarak kendisini koruyan bir iddia bu ölçüte uymaz. Bilimsel teori, gündelik dildeki dayanaksız tahminle aynı şey değildir."
        ],
        "example": {
          "question": "Bir teknoloji hem tedavi hem zarar için kullanılabiliyorsa ne ayrılır?",
          "steps": [
            "Teknik işleyiş hakkında bilimsel bilgi vardır.",
            "Kullanım amacı ahlaki ve siyasi seçim içerir.",
            "Doğrulukla kullanımın iyiliği aynı ölçüt değildir."
          ],
          "answer": "Bilimsel bilgi ve etik kullanım ayrı değerlendirilir.",
          "check": "Yapılabilirlik, yapılmasının doğru olup olmadığına tek başına yanıt vermez."
        },
        "misconceptions": [
          {
            "wrong": "Bilimsel olarak mümkün olan her uygulama ahlaken yapılmalıdır.",
            "correct": "Yapılabilirlik, yapılmasının doğru olup olmadığına tek başına yanıt vermez.",
            "why": "Teknik işleyiş hakkında bilimsel bilgi vardır. Kullanım amacı ahlaki ve siyasi seçim içerir. Doğrulukla kullanımın iyiliği aynı ölçüt değildir."
          }
        ],
        "reasoningChecks": [
          {
            "question": "Bilim insanı eleştirisi her zaman bilimin reddi mi?",
            "answer": "Hayır; yöntem ve uygulamanın geliştirilmesine yönelik olabilir.",
            "why": "Yapılabilirlik, yapılmasının doğru olup olmadığına tek başına yanıt vermez."
          }
        ]
      }
    ],
    "connections": [
      {
        "concept": "Bilimsel açıklamanın niteliği",
        "why": "Kuram ve yasa farklı işlevler taşır; biri diğerinin olgunlaşmış adı değildir."
      },
      {
        "concept": "Bilimsel değişim ve değer",
        "why": "Yapılabilirlik, yapılmasının doğru olup olmadığına tek başına yanıt vermez."
      }
    ],
    "authorship": "Özgün öğretmen anlatımı ve özgün çözümleme örnekleri; kaynak sayfaları MEBİ kitabına yöneliktir."
  },
  "fel-06": {
    "title": "Sanat felsefesi",
    "prerequisites": [
      {
        "concept": "Güzel, hoş ve yararlı ayrımı",
        "why": "İşlevsel ve estetik ölçütler farklı sonuç verebilir."
      }
    ],
    "goals": [
      "Güzel, hoş ve yararlı ayrımı: İşlevsel ve estetik ölçütler farklı sonuç verebilir.",
      "Sanat kuramları ve eser: Yaratıcılık malzemeyi seçme ve dönüştürme biçiminde de görülür."
    ],
    "chapters": [
      {
        "title": "Güzel, hoş ve yararlı ayrımı",
        "source": {
          "book": "TYT-fel",
          "pages": [
            61,
            62
          ]
        },
        "explanation": [
          "Estetik, güzel ve sanat deneyiminin ölçütlerini araştırır. Bir nesnenin yararlı olması estetik değerini tek başına belirlemez; hoşlanma da kişisel duyusal hazla güzellik yargısının tümünü aynı kılmaz. Güzelin nesnede mi öznenin değerlendirmesinde mi bulunduğu tartışılır. Farklı yargılar bulunması gerekçeli sanat eleştirisini gereksiz yapmaz; biçim, uyum, ifade ve bağlam gibi ölçütler üzerinde konuşulabilir.",
          "Sanat eserinin biricikliği, aynı malzemeyle yapılmış başka nesne bulunmaması kadar kurduğu ifade ve bağlamla da ilgilidir. Teknik kopyanın çoğaltılması eserin algılanmasını ve dolaşımını değiştirebilir; fakat kopya sayısı tek başına estetik değeri belirlemez. Sanatçı niyeti önemli bir veri olsa da alımlayıcının bütün yorumlarını otomatik kapatmaz; metin veya eserin biçimi yorum için sınır ve dayanak sağlar. Şehir estetiğinde de yalnız tek binanın güzelliği değil çevreyle uyum, oran, kamusal alan ve insan deneyimi düşünülür. Hoşlanma yargısı kişisel olduğunda dahi gerekçe sunulabilir. Felsefe burada sanatçıları beğeni sırasına dizmekten çok yargının hangi ölçüte dayandığını görünür kılar.",
          "Bir gün batımı estetik değerlendirmeye konu olabilir. İnsan tarafından üretilmediği için sanat eseri değildir. Sanat felsefesinin alanı, estetiğin alanından daha dardır."
        ],
        "example": {
          "question": "Rahat ama biçimini beğenmediğin bir sandalye neyi ayırır?",
          "steps": [
            "Oturma işlevi yararlılıkla ilgilidir.",
            "Biçime ilişkin değerlendirme estetik boyuttur.",
            "İşlev başarılıyken estetik yargı olumsuz olabilir."
          ],
          "answer": "Yararlılık güzellikle özdeş değildir.",
          "check": "İşlevsel ve estetik ölçütler farklı sonuç verebilir."
        },
        "misconceptions": [
          {
            "wrong": "İşe yarayan her nesne güzeldir.",
            "correct": "İşlevsel ve estetik ölçütler farklı sonuç verebilir.",
            "why": "Oturma işlevi yararlılıkla ilgilidir. Biçime ilişkin değerlendirme estetik boyuttur. İşlev başarılıyken estetik yargı olumsuz olabilir."
          }
        ],
        "reasoningChecks": [
          {
            "question": "Herkes aynı eseri beğenmiyorsa sanat eleştirisi anlamsız mı?",
            "answer": "Hayır; yargıların dayandığı gerekçeler tartışılabilir.",
            "why": "İşlevsel ve estetik ölçütler farklı sonuç verebilir."
          }
        ]
      },
      {
        "title": "Sanat kuramları ve eser",
        "source": {
          "book": "TYT-fel",
          "pages": [
            63,
            64,
            65
          ]
        },
        "explanation": [
          "Taklit kuramı sanatla gerçeklik ilişkisini, yaratma anlayışı sanatçının özgün etkinliğini, oyun yaklaşımı özgür üretim boyutunu vurgular. Bir eserin dünyadan malzeme alması onu sırf kopya yapmaz; seçme, düzenleme ve yorum önemlidir. Sanat eseri, sanatçı, alımlayıcı ve tarihsel çevre arasında ilişki kurar. Mimari gibi alanlarda kullanışlılık ve estetik birlikte bulunabilir; işlevin varlığı sanat niteliğini otomatik dışlamaz.",
          "Taklit görüşü sanatın gerçeklikle ilişkisini, yaratma görüşü sanatçının özgün üretimini, oyun görüşü özgür ve çıkar gözetmeyen etkinliği vurgular. Soruda hangi yönün öne çıktığını izle."
        ],
        "example": {
          "question": "Bir ressam gerçek bir ağacı alışılmadık renklerle resmediyorsa yalnız kopyalama mı yapar?",
          "steps": [
            "Nesne doğadan seçilmiştir.",
            "Renk ve düzen sanatçının yorumunu taşır.",
            "Gerçekliğe dayanma ile yaratıcı dönüşüm birlikte olabilir."
          ],
          "answer": "Eser hem gerçeklikle bağ hem özgün yorum taşıyabilir.",
          "check": "Yaratıcılık malzemeyi seçme ve dönüştürme biçiminde de görülür."
        },
        "misconceptions": [
          {
            "wrong": "Sanat gerçek bir nesneden yola çıkarsa yaratıcılık yoktur.",
            "correct": "Yaratıcılık malzemeyi seçme ve dönüştürme biçiminde de görülür.",
            "why": "Nesne doğadan seçilmiştir. Renk ve düzen sanatçının yorumunu taşır. Gerçekliğe dayanma ile yaratıcı dönüşüm birlikte olabilir."
          }
        ],
        "reasoningChecks": [
          {
            "question": "Bir bina işlev gördüğü için sanat olamaz mı?",
            "answer": "Hayır; mimaride işlev ve estetik nitelik birlikte değerlendirilebilir.",
            "why": "Yaratıcılık malzemeyi seçme ve dönüştürme biçiminde de görülür."
          }
        ]
      }
    ],
    "connections": [
      {
        "concept": "Güzel, hoş ve yararlı ayrımı",
        "why": "İşlevsel ve estetik ölçütler farklı sonuç verebilir."
      },
      {
        "concept": "Sanat kuramları ve eser",
        "why": "Yaratıcılık malzemeyi seçme ve dönüştürme biçiminde de görülür."
      }
    ],
    "authorship": "Özgün öğretmen anlatımı ve özgün çözümleme örnekleri; kaynak sayfaları MEBİ kitabına yöneliktir."
  },
  "fel-07": {
    "title": "Siyaset felsefesi",
    "prerequisites": [
      {
        "concept": "İktidar, egemenlik ve meşruiyet",
        "why": "Meşruiyet, yetkinin gerekçesi ve kabul ölçütleriyle ayrıca değerlendirilir."
      }
    ],
    "goals": [
      "İktidar, egemenlik ve meşruiyet: Meşruiyet, yetkinin gerekçesi ve kabul ölçütleriyle ayrıca değerlendirilir.",
      "İdeal düzen ve toplumsal sözleşme: Başlangıç kabulleri ve devredilen haklar farklıdır."
    ],
    "chapters": [
      {
        "title": "İktidar, egemenlik ve meşruiyet",
        "source": {
          "book": "TYT-fel",
          "pages": [
            54,
            55,
            56
          ]
        },
        "explanation": [
          "Siyaset felsefesi gücün kimde bulunduğu kadar niçin haklı kabul edildiğini de sorar. İktidar kararları uygulama gücü, meşruiyet bu yetkinin haklılığına ilişkin gerekçedir. Bir emrin fiilen uygulanması onun adil veya meşru olduğunu tek başına kanıtlamaz. Egemenlik, hukuk, hak ve özgürlük ilişkileri farklı rejim anlayışlarında başka dengelerle kurulur. Kavramların gündelik benzerlikleri felsefi görevlerini özdeşleştirmez.",
          "Hak ve adalet tartışmalarında eşitlik türünü belirtmek önemlidir. Herkese aynı miktarı vermek biçimsel eşitlik sağlayabilir; gereksinim ve fırsatlar farklıysa adil sonuç ayrıca tartışılır. Özgürlük de yalnız engel yokluğu değil bazı görüşlerde kişinin imkânlarını gerçekleştirmesi bakımından ele alınabilir. Bir rejimin adını bilmek fiili yetki dağılımını bütün ayrıntısıyla vermez; yasama, yürütme, hukuk denetimi ve katılım ölçütleri ayrı incelenir. Ütopya tasarıları mevcut düzene eleştiri veya farklı imkânları düşünme aracı olabilir; hiç gerçekleşmemiş olması bütün felsefi değerini yok etmez. Bir siyasi savı değerlendirirken düzen ve güvenlik gibi amaçlarla bu amaç için sınırlanan hakların hangileri olduğu birlikte gösterilmelidir.",
          "Siyaset bilimi mevcut kurum ve süreçleri inceler. Siyaset felsefesi “İdeal yönetim nasıl olmalıdır?”, “Devletin sınırı nedir?” gibi normatif soruları da tartışır."
        ],
        "example": {
          "question": "“İnsanlar korktuğu için kurala uyuyor; öyleyse kural haklıdır.” savını incele.",
          "steps": [
            "Uyma davranışı fiili gücü gösterir.",
            "Korku, haklılık için tek başına gerekçe değildir.",
            "Olgu ve norm ayrılır."
          ],
          "answer": "İktidarın varlığı meşruiyetini otomatik kanıtlamaz.",
          "check": "Meşruiyet, yetkinin gerekçesi ve kabul ölçütleriyle ayrıca değerlendirilir."
        },
        "misconceptions": [
          {
            "wrong": "Uygulanan her karar meşrudur.",
            "correct": "Meşruiyet, yetkinin gerekçesi ve kabul ölçütleriyle ayrıca değerlendirilir.",
            "why": "Uyma davranışı fiili gücü gösterir. Korku, haklılık için tek başına gerekçe değildir. Olgu ve norm ayrılır."
          }
        ],
        "reasoningChecks": [
          {
            "question": "Çoğunluğun istemesi her hakkı sınırsız kılar mı?",
            "answer": "Hak ve adalet ilkeleri ayrıca tartışılır.",
            "why": "Meşruiyet, yetkinin gerekçesi ve kabul ölçütleriyle ayrıca değerlendirilir."
          }
        ]
      },
      {
        "title": "İdeal düzen ve toplumsal sözleşme",
        "source": {
          "book": "TYT-fel",
          "pages": [
            57,
            58,
            59,
            60
          ]
        },
        "explanation": [
          "Toplum sözleşmesi yaklaşımları devletin meşruiyetini insanların birlikte yaşamı için kurulan anlaşma fikriyle açıklar; hepsi aynı yetki dağılımına varmaz. Hobbes güvenliği, Locke hakların korunmasını, Rousseau genel iradeyi farklı biçimde vurgular. Ütopya ideal düzen tasarısıdır; somut gözlem raporuyla karıştırılmaz. Özgürlük ve eşitlik arasında kurulan ilişki, hangi özgürlüğün ve hangi eşitliğin kastedildiği açıklanınca değerlendirilebilir.",
          "İktidar yönetme gücüdür. Egemenlik, bir siyasi düzende en üstün karar verme yetkisini anlatır. Meşruiyet ise bu yetkinin hangi gerekçeyle haklı görüldüğüdür."
        ],
        "example": {
          "question": "Güvenlik için bütün yetkinin ortak egemene devrini savunan metinde ne aranır?",
          "steps": [
            "Doğal durumun nasıl tanımlandığı okunur.",
            "Güvenlik sorununun otoriteyle nasıl çözüldüğü belirlenir.",
            "Yetkinin sınırı ayrıca tartışılır."
          ],
          "answer": "Hobbesçu sözleşme gerekçesiyle bağlantı kurulabilir.",
          "check": "Başlangıç kabulleri ve devredilen haklar farklıdır."
        },
        "misconceptions": [
          {
            "wrong": "Bütün sözleşme filozofları aynı devleti önerir.",
            "correct": "Başlangıç kabulleri ve devredilen haklar farklıdır.",
            "why": "Doğal durumun nasıl tanımlandığı okunur. Güvenlik sorununun otoriteyle nasıl çözüldüğü belirlenir. Yetkinin sınırı ayrıca tartışılır."
          }
        ],
        "reasoningChecks": [
          {
            "question": "İdeal düzen tasarlamak onun tarihte gerçekleştiğini kanıtlar mı?",
            "answer": "Hayır; tasarım ve olgusal gerçekleşme ayrı iddialardır.",
            "why": "Başlangıç kabulleri ve devredilen haklar farklıdır."
          }
        ]
      }
    ],
    "connections": [
      {
        "concept": "İktidar, egemenlik ve meşruiyet",
        "why": "Meşruiyet, yetkinin gerekçesi ve kabul ölçütleriyle ayrıca değerlendirilir."
      },
      {
        "concept": "İdeal düzen ve toplumsal sözleşme",
        "why": "Başlangıç kabulleri ve devredilen haklar farklıdır."
      }
    ],
    "authorship": "Özgün öğretmen anlatımı ve özgün çözümleme örnekleri; kaynak sayfaları MEBİ kitabına yöneliktir."
  },
  "fel-08": {
    "title": "Din felsefesi",
    "prerequisites": [
      {
        "concept": "Din felsefesinin yaklaşımı",
        "why": "Agnostisizm bilinebilirliği, ateizm varlık iddiasını farklı biçimde ele alır."
      }
    ],
    "goals": [
      "Din felsefesinin yaklaşımı: Agnostisizm bilinebilirliği, ateizm varlık iddiasını farklı biçimde ele alır.",
      "Tanrı kanıtları ve kötülük sorunu: Her kanıtın öncülleri ve çıkarımı gerekçeyle sınanır."
    ],
    "chapters": [
      {
        "title": "Din felsefesinin yaklaşımı",
        "source": {
          "book": "TYT-fel",
          "pages": [
            49,
            50,
            51
          ]
        },
        "explanation": [
          "Din felsefesi dinin doğrularını belirli inanç içinde savunan teolojiyle aynı yöntem değildir; Tanrı, inanç, akıl, kötülük ve dinî deneyim gibi kavramları eleştirel ve genel düzeyde sorgular. Teizm yaratıcı ve evrenle ilişkili Tanrı’yı, deizm yaratıcı fakat müdahalesiz Tanrı anlayışını, ateizm Tanrı’nın varlığını reddi, agnostisizm bilinebilirlik sorununu vurgular. Panteizm ve panenteizm de Tanrı-evren bağını farklı kurar; yalnız inanıyor-inanmıyor ikiliği yeterli değildir.",
          "Tanrı görüşlerini sınıflandırırken üç ayrı soruyu karıştırmamak gerekir: Tanrı var mı, varlığı bilinebilir mi, Tanrı evrenle nasıl ilişkilidir? Teizm ve ateizm ilk soruya, agnostisizm bilinebilirlik düzlemine, panteizm ve panenteizm ilişki biçimine odaklanır. Aynı metinde birden fazla düzleme yanıt bulunabilir. Dinî deneyimin kişisel olması onu yaşayan kişi için anlamını azaltmaz; ancak bu deneyimin başkaları için ne tür kanıt sayılacağı ayrı epistemolojik sorudur. Kötülük probleminde de fiziksel acı ve ahlaki kötülük ayrımı yapılabilir; doğal olayla insanın kasıtlı eylemi aynı açıklama gerektirmeyebilir. Bir kanıtı eleştirmek belirli sonucun bütün olası gerekçelerini çürütmek demek değildir.",
          "Teoloji belirli bir dinin kabul ettiği esaslar çerçevesinde açıklama yapar. Din felsefesi din olgusuna daha genel, eleştirel ve akılcı biçimde yaklaşır."
        ],
        "example": {
          "question": "“Yaratıcı vardır fakat evren kurulduktan sonra doğa yasalarıyla işler.” ifadesini sınıflandır.",
          "steps": [
            "Yaratıcı reddedilmiyor.",
            "Sürekli müdahale düşüncesi kabul edilmiyor.",
            "Evrenin işleyişi yaratma sonrasında bağımsız yasalarla açıklanıyor."
          ],
          "answer": "Deizmle uyumludur.",
          "check": "Agnostisizm bilinebilirliği, ateizm varlık iddiasını farklı biçimde ele alır."
        },
        "misconceptions": [
          {
            "wrong": "Tanrı’nın varlığının bilinemeyeceğini söylemek ateizmdir.",
            "correct": "Agnostisizm bilinebilirliği, ateizm varlık iddiasını farklı biçimde ele alır.",
            "why": "Yaratıcı reddedilmiyor. Sürekli müdahale düşüncesi kabul edilmiyor. Evrenin işleyişi yaratma sonrasında bağımsız yasalarla açıklanıyor."
          }
        ],
        "reasoningChecks": [
          {
            "question": "Din felsefesi zorunlu olarak tek bir inancı doğrular mı?",
            "answer": "Hayır; kavram ve gerekçeleri sorgulama alanıdır.",
            "why": "Agnostisizm bilinebilirliği, ateizm varlık iddiasını farklı biçimde ele alır."
          }
        ]
      },
      {
        "title": "Tanrı kanıtları ve kötülük sorunu",
        "source": {
          "book": "TYT-fel",
          "pages": [
            49,
            50,
            51,
            52,
            53
          ]
        },
        "explanation": [
          "Kozmolojik gerekçe evrenin varlığı veya nedeninden, teleolojik gerekçe düzen ve amaçlılıktan, ontolojik gerekçe Tanrı kavramının çözümlemesinden hareket eder. Bir gerekçenin adını bilmek geçerli olduğunu varsaymak değildir; öncüller ve sonuç ilişkisi incelenir. Kötülük problemi de acının gözlenmesiyle belirli Tanrı niteliklerinin nasıl bağdaştırılacağını sorar. Felsefi tartışma, görüşü destekleyen veya eleştiren kişinin kimliğinden önce akıl yürütmeye odaklanır.",
          "Agnostisizm, bilgiye ilişkin sınır vurgusudur; ateizmle eş anlamlı değildir. Deizmde yaratıcı kabul edilir; bu nedenle ateizmle de karıştırılmamalıdır."
        ],
        "example": {
          "question": "“Her düzenli yapının tasarımcısı vardır; evren düzenlidir; öyleyse tasarımcısı vardır.” savı hangi başlangıca dayanır?",
          "steps": [
            "İlk öncül düzenle tasarımcıyı ilişkilendirir.",
            "İkinci öncül evrene düzen yükler.",
            "Sonuç bu iki kabulden çıkarılır; ilk öncül ayrıca tartışılabilir."
          ],
          "answer": "Teleolojik gerekçe örneğidir.",
          "check": "Her kanıtın öncülleri ve çıkarımı gerekçeyle sınanır."
        },
        "misconceptions": [
          {
            "wrong": "Kanıt adının kullanılması sonucu tartışılmaz yapar.",
            "correct": "Her kanıtın öncülleri ve çıkarımı gerekçeyle sınanır.",
            "why": "İlk öncül düzenle tasarımcıyı ilişkilendirir. İkinci öncül evrene düzen yükler. Sonuç bu iki kabulden çıkarılır; ilk öncül ayrıca tartışılabilir."
          }
        ],
        "reasoningChecks": [
          {
            "question": "Kozmolojik ve teleolojik gerekçe aynı mı?",
            "answer": "Biri varlık/neden, diğeri düzen/amaç ilişkisini temel alır.",
            "why": "Her kanıtın öncülleri ve çıkarımı gerekçeyle sınanır."
          }
        ]
      }
    ],
    "connections": [
      {
        "concept": "Din felsefesinin yaklaşımı",
        "why": "Agnostisizm bilinebilirliği, ateizm varlık iddiasını farklı biçimde ele alır."
      },
      {
        "concept": "Tanrı kanıtları ve kötülük sorunu",
        "why": "Her kanıtın öncülleri ve çıkarımı gerekçeyle sınanır."
      }
    ],
    "authorship": "Özgün öğretmen anlatımı ve özgün çözümleme örnekleri; kaynak sayfaları MEBİ kitabına yöneliktir."
  },
  "din-01": {
    "title": "Bilgi ve inanç",
    "prerequisites": [
      {
        "concept": "Bilgi kaynaklarının görevini ayırmak",
        "why": "Yaygınlıkla güvenilirlik farklı ölçütlerdir."
      }
    ],
    "goals": [
      "Bilgi kaynaklarının görevini ayırmak: Yaygınlıkla güvenilirlik farklı ölçütlerdir.",
      "İman, bilgi ve sorumluluk: Sorgulama, kabulün dayanaklarını anlama ve güçlendirme amacı da taşıyabilir."
    ],
    "chapters": [
      {
        "title": "Bilgi kaynaklarının görevini ayırmak",
        "source": {
          "book": "TYT-din",
          "pages": [
            10,
            11,
            12,
            13,
            14,
            15,
            16
          ]
        },
        "explanation": [
          "Din kültürü öğretiminde doğru haber, akıl ve sağlıklı duyular bilgi edinme yolları olarak ele alınır. Duyular belirli gözlemleri sağlar; akıl karşılaştırma ve çıkarım yapar; haberin güvenilirliği ise kaynağı ve aktarımıyla değerlendirilir. Her duyulan söz doğru haber değildir. Vahiy dinî bilgi bağlamında özel konumdadır; aklın kullanımı da verilen haberin anlaşılması ve hayata uygulanmasında önem taşır. Kaynağı sınıflandırmak, tekil iddianın doğruluğunu ayrıca sınamayı gereksiz kılmaz.",
          "Bilgi sorumluluğu güncel bir örneğe uygulandığında kaynak, içerik ve çıkarım üç ayrı aşamada denetlenir. Bir sağlık veya eğitim iddiasını aktaran kişi uzman mı, söz bağlamından koparılmış mı, iddia bağımsız kaynakla destekleniyor mu soruları haberin güvenilirliğini araştırır. Bir bilgiden çıkarılan ahlaki veya dinî hüküm de ayrıca gerekçelendirilmelidir. Duyuların sağlıklı olması gözlemin anlamlandırılmasında hiç hata olmayacağı anlamına gelmez; dikkat, koşul ve önceki bilgi etkili olabilir. Din kültürü bağlamında akıl ve vahiy ilişkisi birbirini tek sözcükle dışlayan karşıtlar gibi kurulmaz; vahyin anlaşılması, deliller üzerinde düşünme ve davranış sorumluluğu aklın kullanımını gerektirir. Bilgi sahibi olmadan kesin hüküm vermekten kaçınma ilkesi bu yüzden yalnız ezber değil gündelik iletişim davranışıdır.",
          "Bir haberi paylaşmadan önce kaynağını ve doğruluğunu araştırmak gerekir. Rüya, ilham veya kişisel sezgi herkes için bağlayıcı, kesin bilgi kaynağı kabul edilmez."
        ],
        "example": {
          "question": "Bir öğrenci görmediği olay hakkında sosyal medyadaki iddiayı kesin kabul ediyor. Hangi adım eksik?",
          "steps": [
            "Bilgi dolaylı haber yoluyla gelmiştir.",
            "Kaynak ve aktarım zinciri doğrulanmamıştır.",
            "Tekrar sayısı güvenilirliğin yerine geçmez."
          ],
          "answer": "Haberin doğruluğu ve kaynağı araştırılmalıdır.",
          "check": "Yaygınlıkla güvenilirlik farklı ölçütlerdir."
        },
        "misconceptions": [
          {
            "wrong": "Çok paylaşılmış haber doğru haberdir.",
            "correct": "Yaygınlıkla güvenilirlik farklı ölçütlerdir.",
            "why": "Bilgi dolaylı haber yoluyla gelmiştir. Kaynak ve aktarım zinciri doğrulanmamıştır. Tekrar sayısı güvenilirliğin yerine geçmez."
          }
        ],
        "reasoningChecks": [
          {
            "question": "Duyular tek başına her sorunu çözer mi?",
            "answer": "Gözlemin anlamlandırılmasında akıl ve karşılaştırma da gerekir.",
            "why": "Yaygınlıkla güvenilirlik farklı ölçütlerdir."
          }
        ]
      },
      {
        "title": "İman, bilgi ve sorumluluk",
        "source": {
          "book": "TYT-din",
          "pages": [
            10,
            11,
            12,
            13,
            14,
            15,
            16
          ]
        },
        "explanation": [
          "İman yalnız bir sözcüğü söyleme düzeyine indirgenmez; tasdik, güven ve bağlılık boyutlarıyla ele alınır. Taklidî iman çevreden öğrenilen kabule, tahkikî iman araştırma ve gerekçelendirmeyle güçlenen bilince işaret eder. İsra 36 ve Mülk 23 mesajları öğretimde bilgi sahibi olunmayan yargıyı sorgulama ve duyular-akıl nimetiyle sorumluluk ilişkisine odaklanır. Ayeti yeni duruma uygularken metinde verilen bilgi ilkesini belirlemek, yalnız numara ezberinden daha işlevseldir.",
          "Taklidî imanda çevreden edinilen kabul; tahkikî imanda araştırma, anlama ve gerekçelendirme öne çıkar. Ayrım, kişinin inancını nasıl temellendirdiğiyle ilgilidir."
        ],
        "example": {
          "question": "Bir kişi “Ailem böyle söylediği için inanıyorum; nedenlerini de araştırmak istiyorum.” diyorsa hangi geçiş yönelimi vardır?",
          "steps": [
            "Başlangıçta çevreden öğrenilmiş kabul vardır.",
            "Araştırma isteği gerekçeyi anlama yönündedir.",
            "Bu tahkik bilincini geliştirme çabasıdır."
          ],
          "answer": "Taklidî kabulden araştırmayla güçlenen imana yöneliş vardır.",
          "check": "Sorgulama, kabulün dayanaklarını anlama ve güçlendirme amacı da taşıyabilir."
        },
        "misconceptions": [
          {
            "wrong": "Araştırma isteği inancın mutlaka reddedilmesidir.",
            "correct": "Sorgulama, kabulün dayanaklarını anlama ve güçlendirme amacı da taşıyabilir.",
            "why": "Başlangıçta çevreden öğrenilmiş kabul vardır. Araştırma isteği gerekçeyi anlama yönündedir. Bu tahkik bilincini geliştirme çabasıdır."
          }
        ],
        "reasoningChecks": [
          {
            "question": "Bir iddiayı bilmeden yaymak bilgi sorumluluğuyla uyuşur mu?",
            "answer": "Hayır; doğruluğunu araştırma yükümlülüğü göz ardı edilir.",
            "why": "Sorgulama, kabulün dayanaklarını anlama ve güçlendirme amacı da taşıyabilir."
          }
        ]
      }
    ],
    "connections": [
      {
        "concept": "Bilgi kaynaklarının görevini ayırmak",
        "why": "Yaygınlıkla güvenilirlik farklı ölçütlerdir."
      },
      {
        "concept": "İman, bilgi ve sorumluluk",
        "why": "Sorgulama, kabulün dayanaklarını anlama ve güçlendirme amacı da taşıyabilir."
      }
    ],
    "authorship": "Özgün öğretmen anlatımı ve özgün çözümleme örnekleri; kaynak sayfaları MEBİ kitabına yöneliktir."
  },
  "din-02": {
    "title": "İnanç esasları",
    "prerequisites": [
      {
        "concept": "İman esaslarının bütünlüğü",
        "why": "Mesaj, örneklik, sorumluluk ve hesap ilişkileri içinde birlikte değerlendirilir."
      }
    ],
    "goals": [
      "İman esaslarının bütünlüğü: Mesaj, örneklik, sorumluluk ve hesap ilişkileri içinde birlikte değerlendirilir.",
      "Kader, irade ve tedbir: Çaba, tedbir ve sonuç karşısındaki güven birlikte düşünülmelidir."
    ],
    "chapters": [
      {
        "title": "İman esaslarının bütünlüğü",
        "source": {
          "book": "TYT-din",
          "pages": [
            17,
            18
          ]
        },
        "explanation": [
          "Din kültürü dersinde Allah’a, meleklere, kitaplara, peygamberlere, ahirete ve kadere iman birbirinden kopuk sözcükler olarak değil bütünlük içinde ele alınır. Vahiy, kitap ve peygamber ilişkisi ilahi mesajın aktarımıyla; ahiret inancı sorumluluk ve hesapla bağlantılıdır. Bir kavramın anlamı diğerleriyle ilişkisinde açılır. İman esasının kabulüyle kişinin her davranışının otomatik doğru olduğu sonucu da karıştırılmamalıdır; davranış ayrıca ahlaki ölçütle değerlendirilir.",
          "İman esaslarını öğrenirken her başlığın hangi soruya yanıt verdiğini belirtmek bütünlüğü güçlendirir. Yaratıcı inancı varlığın kaynağıyla, peygamber ve kitap vahyin iletilmesiyle, ahiret hesap ve sorumlulukla ilişkilendirilir. Bu bağlantı, her kavramın yalnız tek toplumsal işleve indirgenmesi demek değildir; öğretimde kavramların birlikte anlaşılmasını sağlar. Kader konusunda insanın kontrol dışı koşullarıyla iradi davranışlarını ayırmak önemlidir. Çalışma, sağlık tedbiri veya güvenlik önlemi alınabilen alanlarda sorumluluk vardır. Beklenen sonucun gerçekleşmemesi kişinin hiç çaba göstermediğini de otomatik kanıtlamaz; sonuç birçok koşuldan etkilenebilir. İman ile davranış arasında ilişki kurmak, bir bireyin bütün niyetini dışarıdan kesin bildiğini iddia etmek değildir; somut davranış ve kavramsal ölçüt ayrı değerlendirilir.",
          "Allah’a, meleklere, kitaplara, peygamberlere, ahirete, kadere iman temel esaslardır. Tevhit, Allah’ın birliği ilkesidir."
        ],
        "example": {
          "question": "Kitap ve peygamber inancı arasında nasıl ilişki kurulur?",
          "steps": [
            "Kitap vahyedilen mesajla ilgilidir.",
            "Peygamber mesajı tebliğ ve örnekleme göreviyle ele alınır.",
            "İki esas farklı ama bağlantılıdır."
          ],
          "answer": "Vahyin içeriğiyle aktarılması arasında ilişki vardır.",
          "check": "Mesaj, örneklik, sorumluluk ve hesap ilişkileri içinde birlikte değerlendirilir."
        },
        "misconceptions": [
          {
            "wrong": "İman esasları birbirinden bağımsız ezber başlıklarıdır.",
            "correct": "Mesaj, örneklik, sorumluluk ve hesap ilişkileri içinde birlikte değerlendirilir.",
            "why": "Kitap vahyedilen mesajla ilgilidir. Peygamber mesajı tebliğ ve örnekleme göreviyle ele alınır. İki esas farklı ama bağlantılıdır."
          }
        ],
        "reasoningChecks": [
          {
            "question": "Ahirete iman davranışla neden ilişkilendirilir?",
            "answer": "Eylemlerin sonuçlarından sorumlu olma bilincini destekleyen bağlamda öğretilir.",
            "why": "Mesaj, örneklik, sorumluluk ve hesap ilişkileri içinde birlikte değerlendirilir."
          }
        ]
      },
      {
        "title": "Kader, irade ve tedbir",
        "source": {
          "book": "TYT-din",
          "pages": [
            17,
            18
          ]
        },
        "explanation": [
          "Kader inancı, insanın seçim ve sorumluluğunu ortadan kaldıracak biçimde yorumlanmamalıdır. İnsanın kontrol etmediği koşullarla kendi kararı ve çabası ayrılır. Tevekkül, yapılabilecek tedbir ve gayretin terk edilmesi değildir. Nisa 136 mesajı iman esaslarının bütünlüğüyle ilişkilendirilir; bir kavramı açıklarken kişisel gündelik kullanımın din kültürü tanımıyla aynı olup olmadığı denetlenir.",
          "İslam öğretiminde insanın iradesiyle yaptığı tercihlerden sorumluluğu vurgulanır. Tevekkül, gerekli çabayı ve önlemi aldıktan sonra Allah’a güvenmektir; çalışmayı bırakmak değildir."
        ],
        "example": {
          "question": "Bir sürücünün “Kaderimde ne varsa olur.” deyip emniyet kemeri takmamasını değerlendir.",
          "steps": [
            "Kemer kişinin alabileceği tedbirdir.",
            "Sonucun tümü kontrol edilemese de risk azaltılabilir.",
            "Kaderi sorumluluktan kaçma gerekçesi yapmak kavramı daraltır."
          ],
          "answer": "İnanç, tedbir ve kişisel sorumluluğu dışlamaz.",
          "check": "Çaba, tedbir ve sonuç karşısındaki güven birlikte düşünülmelidir."
        },
        "misconceptions": [
          {
            "wrong": "Tevekkül bütün çabayı bırakmaktır.",
            "correct": "Çaba, tedbir ve sonuç karşısındaki güven birlikte düşünülmelidir.",
            "why": "Kemer kişinin alabileceği tedbirdir. Sonucun tümü kontrol edilemese de risk azaltılabilir. Kaderi sorumluluktan kaçma gerekçesi yapmak kavramı daraltır."
          }
        ],
        "reasoningChecks": [
          {
            "question": "İnsanın doğduğu yeri seçmemesi bütün davranışlarının seçimsiz olduğu anlamına gelir mi?",
            "answer": "Hayır; kontrol dışı koşullar ve karar alanı ayrılır.",
            "why": "Çaba, tedbir ve sonuç karşısındaki güven birlikte düşünülmelidir."
          }
        ]
      }
    ],
    "connections": [
      {
        "concept": "İman esaslarının bütünlüğü",
        "why": "Mesaj, örneklik, sorumluluk ve hesap ilişkileri içinde birlikte değerlendirilir."
      },
      {
        "concept": "Kader, irade ve tedbir",
        "why": "Çaba, tedbir ve sonuç karşısındaki güven birlikte düşünülmelidir."
      }
    ],
    "authorship": "Özgün öğretmen anlatımı ve özgün çözümleme örnekleri; kaynak sayfaları MEBİ kitabına yöneliktir."
  },
  "din-03": {
    "title": "İslam ve ibadet",
    "prerequisites": [
      {
        "concept": "İbadette niyet, kapsam ve yükümlülük",
        "why": "Dış biçimle amaç aynı şey değildir; niyet ayrıca düşünülür."
      }
    ],
    "goals": [
      "İbadette niyet, kapsam ve yükümlülük: Dış biçimle amaç aynı şey değildir; niyet ayrıca düşünülür.",
      "İbadet ve ahlaki davranış bağı: Her davranış dürüstlük, hak ve sorumluluk ölçütleriyle ayrıca değerlendirilir."
    ],
    "chapters": [
      {
        "title": "İbadette niyet, kapsam ve yükümlülük",
        "source": {
          "book": "TYT-din",
          "pages": [
            19,
            20,
            21,
            22,
            23,
            24,
            25,
            26
          ]
        },
        "explanation": [
          "İbadet yalnız belirli ritüellerin biçiminden ibaret görülmez; Allah’a kulluk bilinciyle yapılan davranışların amacı ve niteliği ele alınır. Belirli ibadetlerin özel şartları vardır; iyi niyet tek başına bütün şartların yerine geçtiği anlamına gelmez. Akıl, ergenlik ve güç yetirme gibi yükümlülük koşulları, sorumluluğun kime hangi durumda yüklendiğini açıklar. Samimiyet, kolaylık ve süreklilik gibi ilkeler gösteriş veya mekanik tekrardan ayrılır.",
          "İbadet yükümlülüğünde şartları tanımak sorumluluğu mekanik tek kurala indirgemeyi önler. Güç yetirme ve mazeretler, ibadetin türüne göre farklı sonuçlar doğurabilir; bütün ibadetlerin aynı şartı ve aynı kolaylığı taşıdığı varsayılmaz. Samimiyet göstermekle topluluk içinde ibadet etmek de çelişmez; gösterişin ölçütü yalnız başkalarının görmesi değildir, niyetin yönelişidir. İbadet-ahlak bağında başkasının hakkını gözetme somut davranışla sınanabilir: sıraya uymak, sözünü tutmak, emeğe saygı göstermek bu ilişkinin örnekleridir. Bakara 177’nin geniş iyilik çerçevesi tek bir dış biçime kapanmayı engeller. Kavram sorusunda ibadetin amacı, yükümlülük şartı ve ahlaki sonucu farklı başlıklardır; hangi alanın sorulduğu belirlenerek örnek o ölçüte göre açıklanmalıdır.",
          "Namaz, oruç, zekât ve hac belirli şartları olan ibadetlerdir. İbadet kavramı geniş anlamda iyi niyetle yapılan yararlı davranışları da kapsar."
        ],
        "example": {
          "question": "Bir kişi yardımını yalnız övgü almak için yapıyorsa hangi boyut sorgulanır?",
          "steps": [
            "Dışarıdan yardım davranışı görülür.",
            "Niyetin odağı gösteriş ve takdir olabilir.",
            "İhlas davranışın samimiyet boyutuyla ilişkilidir."
          ],
          "answer": "İbadet değerlendirmesinde niyet önemlidir.",
          "check": "Dış biçimle amaç aynı şey değildir; niyet ayrıca düşünülür."
        },
        "misconceptions": [
          {
            "wrong": "İyi görünmek her davranışı samimi yapar.",
            "correct": "Dış biçimle amaç aynı şey değildir; niyet ayrıca düşünülür.",
            "why": "Dışarıdan yardım davranışı görülür. Niyetin odağı gösteriş ve takdir olabilir. İhlas davranışın samimiyet boyutuyla ilişkilidir."
          }
        ],
        "reasoningChecks": [
          {
            "question": "İyi niyet ibadetin bütün özel şartlarını kaldırır mı?",
            "answer": "Hayır; niyet ve ilgili ibadetin koşulları ayrı boyutlardır.",
            "why": "Dış biçimle amaç aynı şey değildir; niyet ayrıca düşünülür."
          }
        ]
      },
      {
        "title": "İbadet ve ahlaki davranış bağı",
        "source": {
          "book": "TYT-din",
          "pages": [
            19,
            20,
            21,
            22,
            23,
            24,
            25,
            26
          ]
        },
        "explanation": [
          "İbadetin ahlakla ilişkisi, kişinin başkasının hakkını gözetmesi, dürüstlük ve sorumluluk geliştirmesi üzerinden açıklanır. Bakara 177 öğretimde iman, ibadet, yardım ve sözünde durma gibi boyutları birlikte düşünmeye yöneltir. Bir ritüeli yerine getirmek başkalarına zarar verme izni sağlamaz. Değerlerin oluşumunda din, aile, kültür ve toplumsal örnekler etkileşir; dinî davranışla gündelik ahlak arasında kopukluk kuran yorumlar bu ilişkiyi kaçırır.",
          "Farz, yerine getirilmesi kesin olarak istenen yükümlülüktür. Sünnet, Hz. Muhammed’in örnek uygulamalarıyla ilişkilidir. Zekâtın belirli şartları vardır; sadaka daha geniş bir gönüllü yardımlaşma alanını da içerir."
        ],
        "example": {
          "question": "Namazını kılan ama alışverişte bilerek eksik tartan kişinin davranışı nasıl değerlendirilir?",
          "steps": [
            "Ritüelin yapılıyor olması ayrı bilgidir.",
            "Eksik tartı hak ihlalidir.",
            "İbadet ahlakın dışına çıkma ayrıcalığı vermez."
          ],
          "answer": "İbadet ve ahlak tutarlılığı aranmalıdır.",
          "check": "Her davranış dürüstlük, hak ve sorumluluk ölçütleriyle ayrıca değerlendirilir."
        },
        "misconceptions": [
          {
            "wrong": "İbadet eden kişinin bütün davranışları otomatik doğrudur.",
            "correct": "Her davranış dürüstlük, hak ve sorumluluk ölçütleriyle ayrıca değerlendirilir.",
            "why": "Ritüelin yapılıyor olması ayrı bilgidir. Eksik tartı hak ihlalidir. İbadet ahlakın dışına çıkma ayrıcalığı vermez."
          }
        ],
        "reasoningChecks": [
          {
            "question": "Birr kavramını yalnız tek ritüele indirgemek uygun mu?",
            "answer": "Hayır; iman, ibadet ve güzel davranış bütünlüğünü içerir.",
            "why": "Her davranış dürüstlük, hak ve sorumluluk ölçütleriyle ayrıca değerlendirilir."
          }
        ]
      }
    ],
    "connections": [
      {
        "concept": "İbadette niyet, kapsam ve yükümlülük",
        "why": "Dış biçimle amaç aynı şey değildir; niyet ayrıca düşünülür."
      },
      {
        "concept": "İbadet ve ahlaki davranış bağı",
        "why": "Her davranış dürüstlük, hak ve sorumluluk ölçütleriyle ayrıca değerlendirilir."
      }
    ],
    "authorship": "Özgün öğretmen anlatımı ve özgün çözümleme örnekleri; kaynak sayfaları MEBİ kitabına yöneliktir."
  },
  "din-04": {
    "title": "Ahlaki tutumlar",
    "prerequisites": [
      {
        "concept": "Ahlakın niyet ve hak boyutu",
        "why": "Niyet yanında yöntem, hak ve sonuç da değerlendirilmelidir."
      }
    ],
    "goals": [
      "Ahlakın niyet ve hak boyutu: Niyet yanında yöntem, hak ve sonuç da değerlendirilmelidir.",
      "Gıybet, iftira, haset ve ölçülülük: Gerçeklik yanında mahremiyet, amaç ve hak da gözetilir."
    ],
    "chapters": [
      {
        "title": "Ahlakın niyet ve hak boyutu",
        "source": {
          "book": "TYT-din",
          "pages": [
            61,
            62,
            63,
            64,
            65,
            66
          ]
        },
        "explanation": [
          "Ahlak, davranışın alışkanlık ve karaktere yansıyan yönlerini kapsar. Niyet önemlidir ama başkasının hakkını ihlal eden davranış yalnız iyi niyet iddiasıyla düzelmiş sayılmaz. Adalet, merhamet ve dürüstlük birbirini dışlayan etiketler değildir; bir durumda birden fazla değer birlikte gözetilir. Terbiye bu değerlerin öğrenilmesi ve davranışa aktarılmasıyla ilişkilidir. Sonuç ve niyet birlikte düşünüldüğünde öz değerlendirme daha somut hâle gelir.",
          "Ahlaki kavramları yakın örneklerle karşılaştırmak ince farkları görünür kılar. Bir arkadaşın başarısına sevinip benzer emek göstermeyi istemek gıpta, onun başarısını yitirmesini istemek haset yönelimidir. Birinin gerçekten yaptığı olumsuzluğu sırf küçültmek için yokluğunda yaymak gıybet; işlemediği kusuru yüklemek iftira sorunudur. Bununla birlikte bir tehlikeyi yetkili kişiye bildirme gibi amaç ve bağlamlar ayrı değerlendirilmelidir; bütün bilgi aktarımı tek biçimde sınıflandırılmaz. İtidal, her zaman en az tepki vermek değil uygun ölçüyü korumaktır. Haksızlık karşısında duyarsızlık adalet sayılmaz; aşırı saldırganlık da hakkı savunmanın zorunlu biçimi değildir. Niyet, sözün doğruluğu, muhatabın hakkı ve sonucun etkisi aynı olayda birlikte incelenir.",
          "İftira, kişiye yapmadığı bir davranışı yüklemektir. Gıybet ise bir kişinin hoşlanmayacağı özelliğini arkasından konuşmaktır; söylenenin doğru olması bunu kendiliğinden uygun yapmaz."
        ],
        "example": {
          "question": "“İyiliğin için sırrını herkese anlattım.” savını incele.",
          "steps": [
            "İyi niyet iddia edilmektedir.",
            "Mahremiyet ve güven ihlali ayrıca değerlendirilir.",
            "Amaç, yöntemin bütün sonuçlarını otomatik haklı kılmaz."
          ],
          "answer": "İyi niyet hak ihlalini kendiliğinden gidermez.",
          "check": "Niyet yanında yöntem, hak ve sonuç da değerlendirilmelidir."
        },
        "misconceptions": [
          {
            "wrong": "Niyet iyiyse her araç doğrudur.",
            "correct": "Niyet yanında yöntem, hak ve sonuç da değerlendirilmelidir.",
            "why": "İyi niyet iddia edilmektedir. Mahremiyet ve güven ihlali ayrıca değerlendirilir. Amaç, yöntemin bütün sonuçlarını otomatik haklı kılmaz."
          }
        ],
        "reasoningChecks": [
          {
            "question": "Merhamet adaleti dışlar mı?",
            "answer": "Hayır; yardım ve hak gözetme birlikte uygulanabilir.",
            "why": "Niyet yanında yöntem, hak ve sonuç da değerlendirilmelidir."
          }
        ]
      },
      {
        "title": "Gıybet, iftira, haset ve ölçülülük",
        "source": {
          "book": "TYT-din",
          "pages": [
            61,
            62,
            63,
            64,
            65,
            66
          ]
        },
        "explanation": [
          "Gıybet kişinin hoşlanmayacağı kusurunun yokluğunda konuşulması; iftira asılsız kusur yüklenmesiyle ayrılır. Gerçek olduğunu söylemek her aktarımı ahlaken uygun yapmaz. Haset başkasının imkânını yitirmesini istemeye, gıpta benzer iyiliğe özenmeye yönelir. Hucurat mesajları alay, kötü lakap, zan ve mahremiyet ihlali gibi davranışları ilişkilendirir. İtidal, ifrat ve tefrit arasında duyarsızlık değil uygun ölçü ve sorumluluktur.",
          "İtidal, her durumda en azını yapmak değil, davranışta uygun ölçüyü korumaktır. İsraf kaynakları gereksiz tüketmek; cimrilik ise gerekli paylaşımı ve harcamayı esirgemektir."
        ],
        "example": {
          "question": "“Başarılı arkadaşımın başarısı bitsin.” ile “Ben de onun gibi çalışacağım.” karşılaştır.",
          "steps": [
            "İlk söz diğerinin iyiliğini kaybetmesini ister.",
            "İkincisi kendini geliştirmeye yönelir.",
            "İlkinde haset, ikincide gıpta yönelimi vardır."
          ],
          "answer": "İsteklerin yönü ahlaki ayrımı belirler.",
          "check": "Gerçeklik yanında mahremiyet, amaç ve hak da gözetilir."
        },
        "misconceptions": [
          {
            "wrong": "Bir kusur gerçekse anlatmak hiçbir sorun taşımaz.",
            "correct": "Gerçeklik yanında mahremiyet, amaç ve hak da gözetilir.",
            "why": "İlk söz diğerinin iyiliğini kaybetmesini ister. İkincisi kendini geliştirmeye yönelir. İlkinde haset, ikincide gıpta yönelimi vardır."
          }
        ],
        "reasoningChecks": [
          {
            "question": "İtidal hiçbir konuda kararlı olmamak mıdır?",
            "answer": "Hayır; aşırılık ve ihmalden kaçınarak uygun tutumu göstermektir.",
            "why": "Gerçeklik yanında mahremiyet, amaç ve hak da gözetilir."
          }
        ]
      }
    ],
    "connections": [
      {
        "concept": "Ahlakın niyet ve hak boyutu",
        "why": "Niyet yanında yöntem, hak ve sonuç da değerlendirilmelidir."
      },
      {
        "concept": "Gıybet, iftira, haset ve ölçülülük",
        "why": "Gerçeklik yanında mahremiyet, amaç ve hak da gözetilir."
      }
    ],
    "authorship": "Özgün öğretmen anlatımı ve özgün çözümleme örnekleri; kaynak sayfaları MEBİ kitabına yöneliktir."
  },
  "din-05": {
    "title": "Peygamberlik ve örneklik",
    "prerequisites": [
      {
        "concept": "Peygamberliğin örneklik boyutu",
        "why": "Davranışın taşıdığı ilke ve tarihsel koşul birlikte anlaşılmalıdır."
      }
    ],
    "goals": [
      "Peygamberliğin örneklik boyutu: Davranışın taşıdığı ilke ve tarihsel koşul birlikte anlaşılmalıdır.",
      "Genç sahabiler ve istişare: Farklı görüşler dinlenir; karar gerekçeli biçimde verilebilir."
    ],
    "chapters": [
      {
        "title": "Peygamberliğin örneklik boyutu",
        "source": {
          "book": "TYT-din",
          "pages": [
            47,
            48,
            49,
            50,
            51
          ]
        },
        "explanation": [
          "Hz. Muhammed’in örnekliği yalnız olayların tarihini bilmekle anlaşılmaz; güvenilirlik, istişare, merhamet ve sorumluluğun somut davranışlarda nasıl göründüğü incelenir. Gençlerle ilişkilerde onlara görev verilmesi, güven ve yetiştirme arasında bağ kurar. Bir davranışı örnek almak, tarihsel şartların bütününü değişmeden kopyalamak değil davranışın ilkesini doğru belirleyip yeni duruma uygun uygulamaktır.",
          "Örneklik sorularında olayın ayrıntılarıyla temsil ettiği ilke arasında köprü kurulmalıdır. Bir gence görev verilmesi güvenin yanında görev için hazırlama ve sorumluluk verme boyutunu taşır. Bir görüşün dinlenmesi de bütün görüşlerin doğru sayıldığı anlamına gelmez; danışma kararın bilgi temelini güçlendirir. Merhametle adalet bir olayda birlikte gözetilebilir; hata yapan kişiyi bütünüyle damgalamadan davranışın sorumluluğunu konuşmak buna örnektir. Al-i İmran 159’daki danışma ve karar sonrası tutum ilişkisi yalnız yöneticiye özgü soyut ilke olarak bırakılmaz; okul, aile ve ekip çalışmasında farklı ölçeklerde uygulanabilir. Ancak tarihî olayın özel koşulları bilinmeden bütün ayrıntıları bugüne aynı biçimde taşımak yerine temel değer ve değişen koşul ayrı gösterilir.",
          "Hz. Muhammed’in insan olması ile vahiy alması farklı özelliklerdir. Günlük hayatta danışması, insanî yönü ve ortak akla verdiği önemle ilişkilidir."
        ],
        "example": {
          "question": "Bir yönetici genç ekip üyesinin görüşünü dinleyip ona sorumluluk veriyor. Hangi ilkeler görünür?",
          "steps": [
            "Dinleme istişareye alan açar.",
            "Görev verme güven ve sorumluluğu birlikte geliştirir.",
            "Yaş tek başına katkıyı dışlayan ölçüt yapılmaz."
          ],
          "answer": "İstişare ve gençlerin gelişimine güven vurgulanır.",
          "check": "Davranışın taşıdığı ilke ve tarihsel koşul birlikte anlaşılmalıdır."
        },
        "misconceptions": [
          {
            "wrong": "Örneklik yalnız aynı dış biçimi tekrarlamaktır.",
            "correct": "Davranışın taşıdığı ilke ve tarihsel koşul birlikte anlaşılmalıdır.",
            "why": "Dinleme istişareye alan açar. Görev verme güven ve sorumluluğu birlikte geliştirir. Yaş tek başına katkıyı dışlayan ölçüt yapılmaz."
          }
        ],
        "reasoningChecks": [
          {
            "question": "Güven vermek hiç denetlememek mi?",
            "answer": "Sorumlulukla rehberlik ve uygun takip birlikte olabilir.",
            "why": "Davranışın taşıdığı ilke ve tarihsel koşul birlikte anlaşılmalıdır."
          }
        ]
      },
      {
        "title": "Genç sahabiler ve istişare",
        "source": {
          "book": "TYT-din",
          "pages": [
            47,
            48,
            49,
            50,
            51
          ]
        },
        "explanation": [
          "Genç sahabilerin farklı görevleri gençliğin tek tip bir yetenekten oluşmadığını gösterir. Bilgi, cesaret, iletişim ve sorumluluk ayrı katkılar sağlayabilir. Al-i İmran 159 mesajı yumuşak davranış, danışma ve karar sonrası kararlılık ilişkisine yönelir. İstişare karar sorumluluğunun bütünüyle ortadan kalkması değildir; farklı bilgileri dikkate alarak kararın gerekçesini güçlendirir. Sınavda olayın hangi ilkeyi örneklediği davranış üzerinden belirlenir.",
          "Karar öncesi görüş almak istişareyi; bırakılan eşyayı korumak emaneti; mesajı ulaştırmak tebliği gösterir. Soruda genel bir övgü yerine davranışla en doğrudan ilgili kavramı seç."
        ],
        "example": {
          "question": "Bir lider danıştıktan sonra karar alıp uygulamayı takip ediyorsa istişareyle çelişir mi?",
          "steps": [
            "Danışma karar öncesi görüşleri toplar.",
            "Karar ve uygulama sorumluluğu devam eder.",
            "Dinleme ile kararsızlık aynı değildir."
          ],
          "answer": "İstişare sorumlu karar sürecini destekler.",
          "check": "Farklı görüşler dinlenir; karar gerekçeli biçimde verilebilir."
        },
        "misconceptions": [
          {
            "wrong": "İstişare herkesin her konuda aynı düşünmesini gerektirir.",
            "correct": "Farklı görüşler dinlenir; karar gerekçeli biçimde verilebilir.",
            "why": "Danışma karar öncesi görüşleri toplar. Karar ve uygulama sorumluluğu devam eder. Dinleme ile kararsızlık aynı değildir."
          }
        ],
        "reasoningChecks": [
          {
            "question": "Genç sahabi örneğini yalnız isim ezberiyle bilmek yeterli mi?",
            "answer": "Görev, davranış ve temsil ettiği değer ilişkilendirilmelidir.",
            "why": "Farklı görüşler dinlenir; karar gerekçeli biçimde verilebilir."
          }
        ]
      }
    ],
    "connections": [
      {
        "concept": "Peygamberliğin örneklik boyutu",
        "why": "Davranışın taşıdığı ilke ve tarihsel koşul birlikte anlaşılmalıdır."
      },
      {
        "concept": "Genç sahabiler ve istişare",
        "why": "Farklı görüşler dinlenir; karar gerekçeli biçimde verilebilir."
      }
    ],
    "authorship": "Özgün öğretmen anlatımı ve özgün çözümleme örnekleri; kaynak sayfaları MEBİ kitabına yöneliktir."
  },
  "din-06": {
    "title": "Din ve hayat",
    "prerequisites": [
      {
        "concept": "Din, aile, kültür ve çevre",
        "why": "İşlev, malzeme, çevre ve kültür ayrı etkenlerdir."
      }
    ],
    "goals": [
      "Din, aile, kültür ve çevre: İşlev, malzeme, çevre ve kültür ayrı etkenlerdir.",
      "Ekonomi, adalet ve toplumsal bağ: Amaç yanında hak, onur ve mahremiyet de gözetilir."
    ],
    "chapters": [
      {
        "title": "Din, aile, kültür ve çevre",
        "source": {
          "book": "TYT-din",
          "pages": [
            52,
            53,
            54,
            55,
            56,
            57,
            58,
            59,
            60
          ]
        },
        "explanation": [
          "Din-hayat ilişkisi yalnız bireysel inançla sınırlı değil aile, kültür, sanat ve çevre sorumluluğuyla ele alınır. Ailede dayanışma hak ve sorumlulukları; çevrede emanet ve kaynakların korunması ölçüsünü gündeme getirir. Sanat ve mimaride dinî motif bulunması eserin bütün teknik özelliklerinin yalnız dinden kaynaklandığını kanıtlamaz; malzeme ve yerel gelenek de etkilidir. Çok nedenli yorum aynı örnekte farklı katkıları ayırmayı sağlar.",
          "Sosyal adalet ve paylaşma bağında yalnız yardım miktarı değil yardımın sürekliliği, muhatabın ihtiyacı ve insan onuru önemlidir. Ekonomik faaliyette helal kazanç kavramı emek, dürüstlük ve hak ihlalinden kaçınma gibi ölçütlerle ele alınır; yüksek gelir tek başına ahlaki başarı veya başarısızlık göstergesi değildir. Din ve çevre ilişkisinde kaynakların sınırlılığıyla israfı önleme bir arada düşünülür. Suya erişimi olan kişinin aşırı tüketimi yalnız kişisel maliyet yaratmaz; başkalarının imkânını da etkileyebilir. Dinî kültür sanat ve mimariyi etkilerken yerel malzeme, teknik ve tarih de biçimi değiştirir. Bu nedenle aynı inanç çevresindeki farklı eserler çelişki değil kültürel yorum ve üretimin çeşitliliği olarak incelenebilir.",
          "Zekât ve yardımlaşma, bireyler arası dayanışmayı güçlendirir. Soruda gelir paylaşımı ve ihtiyaç sahibinin gözetilmesi vurgulanıyorsa sosyal adalet kavramını düşün."
        ],
        "example": {
          "question": "Bir ibadethanenin yerel taşla ve iklime uygun yapılması nasıl yorumlanır?",
          "steps": [
            "Dinî işlev yapının kullanımını etkiler.",
            "Taş ve iklim fiziksel tasarımı etkiler.",
            "Kültür ve çevre ortak biçim üretir."
          ],
          "answer": "Dinî ve yerel unsurlar birlikte etkili olabilir.",
          "check": "İşlev, malzeme, çevre ve kültür ayrı etkenlerdir."
        },
        "misconceptions": [
          {
            "wrong": "Dinî yapıların her özelliği yalnız dinle açıklanır.",
            "correct": "İşlev, malzeme, çevre ve kültür ayrı etkenlerdir.",
            "why": "Dinî işlev yapının kullanımını etkiler. Taş ve iklim fiziksel tasarımı etkiler. Kültür ve çevre ortak biçim üretir."
          }
        ],
        "reasoningChecks": [
          {
            "question": "Çevreyi korumak yalnız bireysel tercih mi?",
            "answer": "Ders çerçevesinde emanet ve toplumsal sorumlulukla da ilişkilidir.",
            "why": "İşlev, malzeme, çevre ve kültür ayrı etkenlerdir."
          }
        ]
      },
      {
        "title": "Ekonomi, adalet ve toplumsal bağ",
        "source": {
          "book": "TYT-din",
          "pages": [
            52,
            53,
            54,
            55,
            56,
            57,
            58,
            59,
            60
          ]
        },
        "explanation": [
          "Din ve ekonomi konusunda emek, dürüstlük, paylaşma ve hak gözetme ilkeleri öne çıkar. Sosyal adalet yalnız herkesin aynı miktara sahip olması değil hakların korunması ve ihtiyaç sahiplerinin gözetilmesiyle ilişkilidir. Yardımın gösterişe dönüşmesi veya muhatabın onurunu zedelemesi amaçla yöntem arasında gerilim yaratır. Al-i İmran 103–105 mesajları birlik ve ayrışma üzerinde düşünmeye yöneltir; birlik farklı insanların bütün görüşlerinin aynı olması değildir.",
          "Doğaya zarar vermemek, suyu ölçülü kullanmak ve başkasının hakkına saygı göstermek sorumluluk örnekleridir. Din ile kültür ilişkilidir; fakat her yerel gelenek doğrudan dinî hüküm sayılamaz."
        ],
        "example": {
          "question": "Yardımı alan kişinin kimliğini izinsiz yayımlamak hangi sorunu doğurur?",
          "steps": [
            "Maddi katkı yarar sağlayabilir.",
            "Mahremiyet ve onur zarar görebilir.",
            "Yardımın yöntemi ahlaki değerlendirmeye dâhildir."
          ],
          "answer": "Paylaşma insan onurunu gözeterek yapılmalıdır.",
          "check": "Amaç yanında hak, onur ve mahremiyet de gözetilir."
        },
        "misconceptions": [
          {
            "wrong": "Yardım varsa yöntemi sorgulanamaz.",
            "correct": "Amaç yanında hak, onur ve mahremiyet de gözetilir.",
            "why": "Maddi katkı yarar sağlayabilir. Mahremiyet ve onur zarar görebilir. Yardımın yöntemi ahlaki değerlendirmeye dâhildir."
          }
        ],
        "reasoningChecks": [
          {
            "question": "Toplumsal birlik hiç görüş farkı olmaması mı?",
            "answer": "Hayır; ortak hak ve sorumluluk içinde farklılıklar bulunabilir.",
            "why": "Amaç yanında hak, onur ve mahremiyet de gözetilir."
          }
        ]
      }
    ],
    "connections": [
      {
        "concept": "Din, aile, kültür ve çevre",
        "why": "İşlev, malzeme, çevre ve kültür ayrı etkenlerdir."
      },
      {
        "concept": "Ekonomi, adalet ve toplumsal bağ",
        "why": "Amaç yanında hak, onur ve mahremiyet de gözetilir."
      }
    ],
    "authorship": "Özgün öğretmen anlatımı ve özgün çözümleme örnekleri; kaynak sayfaları MEBİ kitabına yöneliktir."
  },
  "din-07": {
    "title": "İslam düşüncesinde yorumlar",
    "prerequisites": [
      {
        "concept": "Din ve dinî yorumu ayırmak",
        "why": "Yorum insanın anlama etkinliğidir; kaynak ve gerekçesi ayrıca incelenir."
      }
    ],
    "goals": [
      "Din ve dinî yorumu ayırmak: Yorum insanın anlama etkinliğidir; kaynak ve gerekçesi ayrıca incelenir.",
      "İtikadi, siyasi ve fıkhi yorum: İnanç, hukuk ve siyaset sorunları ayrı ama ilişkili alanlardır."
    ],
    "chapters": [
      {
        "title": "Din ve dinî yorumu ayırmak",
        "source": {
          "book": "TYT-din",
          "pages": [
            67,
            68,
            69,
            70,
            71,
            72,
            73,
            74
          ]
        },
        "explanation": [
          "Dinî metin ve ilkelerle insanların bunları anlama biçimleri aynı düzlemde değildir. Dil, tarih, coğrafya, yöntem ve karşılaşılan yeni sorunlar yorum farklılığına zemin hazırlar. Bir yorumun farklı olması onun gerekçesiz olduğu anlamına gelmez; hangi delil ve yöntemle kurulduğu incelenir. İnsan yorumunu dinin bütünüyle özdeşleştirmek başka yorumların imkânını ve tarihsel gelişimi görünmez yapar.",
          "Yorum farklılığını anlamada kaynak ile yöntemi ayırmak gerekir. İki yorumcu aynı metni esas alsa bile sözcüğün anlamı, delillerin birlikte değerlendirilmesi veya yeni olayın önceki örneğe benzerliği konusunda farklılaşabilir. Bu, bütün yorumların eşit doğrulukta olduğu iddiası değildir; gerekçeler karşılaştırılabilir. Fıkhi yorumda pratik hükmün nasıl üretildiği, itikadi yorumda inanç kavramlarının nasıl açıklandığı öne çıkar. Tarihsel siyasi anlaşmazlıklar da bu alanlarla etkileşebilir; fakat her hukuki ayrıntı siyasi rekabete indirgenmez. Kavramları kendi alanı içinde tanımlamak mezhep adlarını kutuplaştırıcı etiket yerine düşünce tarihi ve yöntem bağlamında öğrenmeyi sağlar. Ortak inanç unsurlarıyla farklı yorumların birlikte bulunabilmesi, birlik ile mutlak tekbiçimliliğin aynı şey olmadığını gösterir.",
          "Mezhep, dinin anlaşılması ve yorumlanmasında oluşmuş düşünce ekolüdür. Yorum farklılığı yeni bir din ortaya çıktığı anlamına gelmez."
        ],
        "example": {
          "question": "İki hukukçunun aynı yeni olay hakkında farklı sonuca varmasını nasıl araştırırsın?",
          "steps": [
            "Kullandıkları deliller belirlenir.",
            "Metni ve olayı yorumlama yöntemleri karşılaştırılır.",
            "Farklı sonuç otomatik olarak kötü niyet kanıtı sayılmaz."
          ],
          "answer": "Yorum farkı yöntem ve bağlamla açıklanabilir.",
          "check": "Yorum insanın anlama etkinliğidir; kaynak ve gerekçesi ayrıca incelenir."
        },
        "misconceptions": [
          {
            "wrong": "Bir yorum dinin kendisiyle tamamen aynıdır.",
            "correct": "Yorum insanın anlama etkinliğidir; kaynak ve gerekçesi ayrıca incelenir.",
            "why": "Kullandıkları deliller belirlenir. Metni ve olayı yorumlama yöntemleri karşılaştırılır. Farklı sonuç otomatik olarak kötü niyet kanıtı sayılmaz."
          }
        ],
        "reasoningChecks": [
          {
            "question": "Coğrafya yorum farkına nasıl etki edebilir?",
            "answer": "Yeni ihtiyaç ve örfler ele alınan soruların niteliğini değiştirebilir.",
            "why": "Yorum insanın anlama etkinliğidir; kaynak ve gerekçesi ayrıca incelenir."
          }
        ]
      },
      {
        "title": "İtikadi, siyasi ve fıkhi yorum",
        "source": {
          "book": "TYT-din",
          "pages": [
            67,
            68,
            69,
            70,
            71,
            72,
            73,
            74
          ]
        },
        "explanation": [
          "İtikadi yorum inanç problemleri, siyasi yorum yönetim ve yetki tartışmaları, fıkhi yorum ibadet ve davranışların hukuki hükümleriyle ilişkilidir. Bu alanlar tarih içinde etkileşir ama aynı soru değildir. Mezhepler yalnız ayrı adlar olarak ezberlenmez; hangi alanda hangi yöntemle yorum geliştirdiği anlaşılır. Nisa 59 mesajı itaat ve uyuşmazlığın çözümüyle ilgili kavramları ele alırken sınırsız kişisel otorite çıkarımı yapılmamalıdır.",
          "Bir uygulamanın nasıl yapılacağı tartışılıyorsa fıkhî; bir inanç meselesi açıklanıyorsa itikadî boyut öne çıkar. Farklı yorumları değerlendirirken tek bir tarihsel veya toplumsal nedene indirgememek gerekir."
        ],
        "example": {
          "question": "İbadetin uygulanışındaki hukuki bir ayrıntıyla insanın özgürlüğüne ilişkin inanç tartışması aynı alan mı?",
          "steps": [
            "İlkinde pratik hüküm ve uygulama sorusu vardır.",
            "İkincide inanç ve sorumluluğun temel açıklaması tartışılır.",
            "Alan ayrımı kavramsal açıklık sağlar."
          ],
          "answer": "İlk fıkhi, ikinci itikadi problem ağırlıklıdır.",
          "check": "İnanç, hukuk ve siyaset sorunları ayrı ama ilişkili alanlardır."
        },
        "misconceptions": [
          {
            "wrong": "Bütün mezhep farkları aynı konuyu tartışır.",
            "correct": "İnanç, hukuk ve siyaset sorunları ayrı ama ilişkili alanlardır.",
            "why": "İlkinde pratik hüküm ve uygulama sorusu vardır. İkincide inanç ve sorumluluğun temel açıklaması tartışılır. Alan ayrımı kavramsal açıklık sağlar."
          }
        ],
        "reasoningChecks": [
          {
            "question": "Yorum farklılığı ortak inanç unsurlarının hiç bulunmadığını gösterir mi?",
            "answer": "Hayır; ortak temeller üzerinde farklı açıklamalar gelişebilir.",
            "why": "İnanç, hukuk ve siyaset sorunları ayrı ama ilişkili alanlardır."
          }
        ]
      }
    ],
    "connections": [
      {
        "concept": "Din ve dinî yorumu ayırmak",
        "why": "Yorum insanın anlama etkinliğidir; kaynak ve gerekçesi ayrıca incelenir."
      },
      {
        "concept": "İtikadi, siyasi ve fıkhi yorum",
        "why": "İnanç, hukuk ve siyaset sorunları ayrı ama ilişkili alanlardır."
      }
    ],
    "authorship": "Özgün öğretmen anlatımı ve özgün çözümleme örnekleri; kaynak sayfaları MEBİ kitabına yöneliktir."
  },
  "fel-09": {
    "title": "Felsefi metni çözümle, deneme kur",
    "prerequisites": [
      {
        "concept": "Metnin problem, tez ve gerekçesini ayırmak",
        "why": "Analiz sonucun hangi öncüllerle kurulduğunu ve gizli kabulleri gösterir."
      }
    ],
    "goals": [
      "Metnin problem, tez ve gerekçesini ayırmak: Analiz sonucun hangi öncüllerle kurulduğunu ve gizli kabulleri gösterir.",
      "Felsefi denemede karşı örnek ve itiraz: Karşı örnek yalnız sınanan genel savın kapsamına yönelik sonuç verir."
    ],
    "chapters": [
      {
        "title": "Metnin problem, tez ve gerekçesini ayırmak",
        "source": {
          "book": "TYT-fel",
          "pages": [
            66,
            67
          ]
        },
        "explanation": [
          "Felsefi metin analizi, metnin ne hakkında olduğunu söylemekle bitmez. Önce problem sorusu belirlenir, sonra yazarın verdiği tez ve bu tezi destekleyen öncüller ayrılır. Bir kavram günlük dilden farklı tanımlanmışsa metin kendi tanımı içinde okunur. Argümanın geçerliliği, öncüller doğru kabul edildiğinde sonucun zorunlu çıkıp çıkmadığıyla; öncüllerin doğruluğu ise bilgi içeriğiyle ilgilidir. Birini sınamak diğerini otomatik sağlamaz.",
          "Metin çözümlemesinde önce yazarın görüşünü en güçlü ve makul biçimiyle yeniden kurmak gerekir. Eksik bir cümleyi yüzeysel yorumlayıp kolayca reddetmek gerçek eleştiri sağlamaz. Anahtar kavramlar tanımlandıktan sonra sonucun hangi öncül zinciriyle kurulduğu gösterilir; sonra güçlü itiraz ve olası yanıt düşünülür. Denemede kişisel ses bulunabilir ama yalnız ‘bence’ demek gerekçe üretmez. ‘Adalet eşitliktir.’ savı önce eşitliğin türünü belirtmelidir; fırsat, sonuç veya hukuk önünde eşitlik farklıdır. Son bölüm ilk savı aynen tekrarlamak yerine tartışmada elde edilen sınırlandırmayı açıklayabilir. Bir görüşün bazı koşullarda geçerli bulunması yenilgi değil, daha açık ve savunulabilir hâle gelmesi olabilir."
        ],
        "example": {
          "question": "“Bütün insanlar hata yapabilir. Hakimler insandır. O hâlde hakimlerin kararları da eleştirilebilir.” metnini çöz.",
          "steps": [
            "Problem kararların eleştiriye açıklığıdır.",
            "İlk iki cümle hakimlerin yanılabilirliğini destekler.",
            "Eleştirilebilirlik için yanılabilen kararın denetlenmesi gerektiği örtük öncülünü de görünür kılmak gerekir."
          ],
          "answer": "Metnin tezi gerekçeleri ve örtük kabulüyle birlikte yeniden kurulmalıdır.",
          "check": "Analiz sonucun hangi öncüllerle kurulduğunu ve gizli kabulleri gösterir."
        },
        "misconceptions": [
          {
            "wrong": "Yazarın sonucunu tekrar etmek metin analizidir.",
            "correct": "Analiz sonucun hangi öncüllerle kurulduğunu ve gizli kabulleri gösterir.",
            "why": "Problem kararların eleştiriye açıklığıdır. İlk iki cümle hakimlerin yanılabilirliğini destekler. Eleştirilebilirlik için yanılabilen kararın denetlenmesi gerektiği örtük öncülünü de görünür kılmak gerekir."
          }
        ],
        "reasoningChecks": [
          {
            "question": "Öncülleri kabul edip sonucu reddeden kişi ne göstermeli?",
            "answer": "Öncüllerden sonuca geçişte eksik veya geçersiz bağ bulunup bulunmadığını açıklamalı.",
            "why": "Analiz sonucun hangi öncüllerle kurulduğunu ve gizli kabulleri gösterir."
          }
        ]
      },
      {
        "title": "Felsefi denemede karşı örnek ve itiraz",
        "source": {
          "book": "TYT-fel",
          "pages": [
            68,
            69
          ]
        },
        "explanation": [
          "Felsefi deneme bir duygu sıralaması değil, belirli problem etrafında tutarlı akıl yürütmedir. Kavramın kapsamını belirlemek, savı açık kurmak ve olası itirazı dürüstçe ele almak gerekir. Karşı örnek genel iddiayı sınar; tek örneğin neyi çürüttüğü doğru belirlenmelidir. “Her doğru söz söylenmelidir.” savını sınamak, doğrulukla söylemenin ahlaki uygunluğunun aynı ölçüt olmadığını gösterebilir. Eleştiri kişiye değil iddia ve gerekçeye yönelmelidir.",
          "Denemede savın kapsamını açık tutmak karşı örneğin gerçekten neyi değiştirdiğini gösterir. “Bütün eşit dağıtımlar adildir.” savı tek bir uygun karşı örnekle sınanabilir; fakat bundan hiçbir eşit dağıtımın adil olamayacağı çıkmaz. Yeni sonuç, ilk savı belirli koşullarla sınırlamak olabilir. Örneğin gereksinimler farklıysa aynı miktar yardım farklı etki yaratır; buna karşılık eşit hakların korunması başka bir eşitlik alanıdır. Yazar, itirazı cevaplamak için kavramını açıklamalı ve hangi durumları kapsadığını belirtmelidir. Böyle bir deneme yalnız destekleyen örnekleri sıralamaz; savın zorlandığı durumu ele alıp gerekçeli düzeltme yapar. Kaynak metni anlamak, eleştirmek ve özgün sav kurmak birbirini izleyen ayrı düşünme aşamalarıdır."
        ],
        "example": {
          "question": "“Her eşit dağıtım adildir.” savına gereksinimleri farklı iki kişi örneğiyle itiraz geliştir.",
          "steps": [
            "İddia her durumu kapsar.",
            "İhtiyacı farklı kişilere aynı yardımın etkisi eşit olmayabilir.",
            "Bu durum eşit miktarla adalet arasındaki zorunlu özdeşliği sınar."
          ],
          "answer": "Adalet ölçütü yalnız miktar eşitliğine indirgenemez.",
          "check": "Karşı örnek yalnız sınanan genel savın kapsamına yönelik sonuç verir."
        },
        "misconceptions": [
          {
            "wrong": "Bir karşı örnek bütün eşitlik fikirlerini geçersiz kılar.",
            "correct": "Karşı örnek yalnız sınanan genel savın kapsamına yönelik sonuç verir.",
            "why": "İddia her durumu kapsar. İhtiyacı farklı kişilere aynı yardımın etkisi eşit olmayabilir. Bu durum eşit miktarla adalet arasındaki zorunlu özdeşliği sınar."
          }
        ],
        "reasoningChecks": [
          {
            "question": "Denemede kaynak kullanmak kendi gerekçemizin yerini alır mı?",
            "answer": "Hayır; kaynak savla ilişkilendirilmeli ve aktarımın nasıl destek verdiği açıklanmalı.",
            "why": "Karşı örnek yalnız sınanan genel savın kapsamına yönelik sonuç verir."
          }
        ]
      }
    ],
    "connections": [
      {
        "concept": "Metnin problem, tez ve gerekçesini ayırmak",
        "why": "Analiz sonucun hangi öncüllerle kurulduğunu ve gizli kabulleri gösterir."
      },
      {
        "concept": "Felsefi denemede karşı örnek ve itiraz",
        "why": "Karşı örnek yalnız sınanan genel savın kapsamına yönelik sonuç verir."
      }
    ],
    "authorship": "Özgün öğretmen anlatımı ve özgün çözümleme örnekleri; kaynak sayfaları MEBİ kitabına yöneliktir."
  },
  "fel-10": {
    "title": "İlk Çağ: arkheden erdemli yaşama",
    "prerequisites": [
      {
        "concept": "Arkhe ve değişim sorununu ayırmak",
        "why": "Logos, karşıtlık ve değişimin düzenini açıklayan ilkedir."
      }
    ],
    "goals": [
      "Arkhe ve değişim sorununu ayırmak: Logos, karşıtlık ve değişimin düzenini açıklayan ilkedir.",
      "Sokrates, Platon ve Aristoteles’te bilgi ve erdem: Orta davranışın koşullarına göre aklın belirlediği uygun tutumdur."
    ],
    "chapters": [
      {
        "title": "Arkhe ve değişim sorununu ayırmak",
        "source": {
          "book": "TYT-fel",
          "pages": [
            70,
            71,
            72,
            73
          ]
        },
        "explanation": [
          "İlk doğa filozofları evrenin temelini mitolojik öykü yerine açıklanabilir ilke ve nedenlerle düşünmeye yöneldi. Thales suyu, Anaksimenes havayı, Anaksimandros belirsiz-sınırsız apeironu temel saydı. Sorun hangi maddenin önce geldiğinden çok değişen çokluğun altında birliğin nasıl bulunduğudur. Herakleitos değişimi logosla düzenlenen akış olarak; Parmenides hakiki varlığı değişmez düşünerek açıklar. İki görüş yalnız gözlenen olay hakkında değil varlığın ne sayılacağı hakkında ayrılır.",
          "Antik düşünürlerin karşılaştırılmasında aynı problem üzerinden ilerlemek isim ezberini aşar. Bilginin kaynağında Sofistlerin görecelik vurgusuyla Sokrates’in ortak tanım arayışı ayrılır. Platon’da duyusal değişimle ideaların kararlılığı bilgi sorununa bağlanır; Aristoteles somut nesnede form-madde birliğini düşünür. Dört neden öğretisinde malzeme, biçim, yapan ve amaç aynı soruya yanıt değildir: bir heykelde taş, biçim, heykeltıraş ve yapılma amacı farklı açıklama katmanlarıdır. Etikte altın orta her davranışın orta miktarı demek değildir; adalet veya ölçülülük duruma uygun seçimle ilgilidir. Konfüçyüs’te ilişki ve erdem vurgusunu bu görüşlerle karşılaştırırken ortak ahlaki soruyla farklı kültürel gerekçeler birlikte görülebilir."
        ],
        "example": {
          "question": "“Duyular değişim gösteriyor ama akıl varlığın değişemeyeceğini söylüyor.” cümlesi hangi yaklaşımı çağrıştırır?",
          "steps": [
            "Duyuyla aklın güveni ayrılıyor.",
            "Değişim gerçek varlığın niteliği sayılmıyor.",
            "Bu yapı Parmenides’in değişmez varlık anlayışına yakındır."
          ],
          "answer": "Parmenidesçi varlık yaklaşımıdır.",
          "check": "Logos, karşıtlık ve değişimin düzenini açıklayan ilkedir."
        },
        "misconceptions": [
          {
            "wrong": "Herakleitos değişimin tamamen kuralsız olduğunu söyler.",
            "correct": "Logos, karşıtlık ve değişimin düzenini açıklayan ilkedir.",
            "why": "Duyuyla aklın güveni ayrılıyor. Değişim gerçek varlığın niteliği sayılmıyor. Bu yapı Parmenides’in değişmez varlık anlayışına yakındır."
          }
        ],
        "reasoningChecks": [
          {
            "question": "Arkhe sorusu yalnız tarih sırası mı?",
            "answer": "Hayır; çokluğun temelini ve açıklayıcı ilkesi arar.",
            "why": "Logos, karşıtlık ve değişimin düzenini açıklayan ilkedir."
          }
        ]
      },
      {
        "title": "Sokrates, Platon ve Aristoteles’te bilgi ve erdem",
        "source": {
          "book": "TYT-fel",
          "pages": [
            74,
            75,
            76,
            77,
            78,
            79,
            80,
            81
          ]
        },
        "explanation": [
          "Sokrates kavramları sorularla sınayarak erdem ve bilgiyi ilişkilendirir. Platon değişen duyusal şeylerle ideaları ayırır; sağlam bilginin değişmez olanla ilişkisini kurar. Aristoteles formu nesnelerin dışında ayrı dünyada aramak yerine somut varlık içinde madde-form bağıyla ele alır. Erdem görüşünde alışkanlık ve uygun orta önemlidir; orta matematik ortalama değil kişi ve durum açısından akla uygun dengedir.",
          "Sokrates’in soru yöntemi, konuşanın bildiğini sandığı kavramın sınırlarını görünür kılar: cesareti yalnız savaşa atılmak diye tanımlayan kişiye düşüncesizce atılmanın erdem olup olmadığı sorulabilir. Platon bu arayışı değişmeyen idealarla ilişkilendirirken Aristoteles somut varlıktaki form-madde ilişkisini ve erdemin alışkanlıkla gelişmesini vurgular. İki düşünürün de aklı önemsemesi açıklamalarının aynı olduğu anlamına gelmez. Aristoteles’in orta anlayışında davranışı değerlendiren şey yalnız miktar değil amaç, zaman, kişi ve koşuldur. Aynı korku düzeyi farklı durumda farklı davranışa yol açabilir. Bu yüzden cesaret, hiç korkmamak şeklinde değil uygun şeyi uygun gerekçeyle yapabilme olarak çözümlenir; erdem tanımının davranışa nasıl bağlandığı gösterilir."
        ],
        "example": {
          "question": "Cesaretin korkusuzlukla aynı olmadığını Aristoteles üzerinden açıkla.",
          "steps": [
            "Aşırı korku korkaklığa, düşüncesiz tehlike arayışı atılganlığa dönebilir.",
            "Erdem tehlikeyi doğru değerlendirip uygun davranmaktır.",
            "Her olayda aynı miktarda risk almak gerekmez."
          ],
          "answer": "Cesaret akla uygun dengedir, korkunun mutlak yokluğu değildir.",
          "check": "Orta davranışın koşullarına göre aklın belirlediği uygun tutumdur."
        },
        "misconceptions": [
          {
            "wrong": "Aristoteles’in orta anlayışı her durumda sayısal ortalamadır.",
            "correct": "Orta davranışın koşullarına göre aklın belirlediği uygun tutumdur.",
            "why": "Aşırı korku korkaklığa, düşüncesiz tehlike arayışı atılganlığa dönebilir. Erdem tehlikeyi doğru değerlendirip uygun davranmaktır. Her olayda aynı miktarda risk almak gerekmez."
          }
        ],
        "reasoningChecks": [
          {
            "question": "Platon’la Aristoteles’in ortaklaşa aklı önemsemesi aynı varlık görüşünde olduklarını kanıtlar mı?",
            "answer": "Hayır; formun/ideanın yeri ve nesneyle bağı farklıdır.",
            "why": "Orta davranışın koşullarına göre aklın belirlediği uygun tutumdur."
          }
        ]
      }
    ],
    "connections": [
      {
        "concept": "Arkhe ve değişim sorununu ayırmak",
        "why": "Logos, karşıtlık ve değişimin düzenini açıklayan ilkedir."
      },
      {
        "concept": "Sokrates, Platon ve Aristoteles’te bilgi ve erdem",
        "why": "Orta davranışın koşullarına göre aklın belirlediği uygun tutumdur."
      }
    ],
    "authorship": "Özgün öğretmen anlatımı ve özgün çözümleme örnekleri; kaynak sayfaları MEBİ kitabına yöneliktir."
  },
  "fel-11": {
    "title": "Orta Çağ: inanç, akıl ve çeviri",
    "prerequisites": [
      {
        "concept": "Orta Çağ’da inanç ve akıl sorusu",
        "why": "Akıl-inanç ilişkisine ilişkin farklı yorumlar ve gerekçelendirmeler vardır."
      }
    ],
    "goals": [
      "Orta Çağ’da inanç ve akıl sorusu: Akıl-inanç ilişkisine ilişkin farklı yorumlar ve gerekçelendirmeler vardır.",
      "İslam felsefesi, çeviri ve metin analizi: Çeviri, eleştiri ve yeni problemlerle birleştiğinde özgün tartışmaya zemin hazırlar."
    ],
    "chapters": [
      {
        "title": "Orta Çağ’da inanç ve akıl sorusu",
        "source": {
          "book": "TYT-fel",
          "pages": [
            82,
            83
          ]
        },
        "explanation": [
          "Orta Çağ düşüncesi tek biçimli bir görüş değildir. Hristiyan felsefesinde Tanrı, yaratılış, kötülük ve inanç-akıl ilişkisi; İslam felsefesinde bunlarla birlikte bilgi, özgür irade ve toplumsal düzen tartışılır. İnancı açıklamak için aklı kullanan yaklaşım aklı tümüyle reddetmiş sayılmaz. Aynı dinî gelenek içinde de farklı gerekçelendirme biçimleri bulunur; filozofun adını yalnız dönemiyle eşleştirmek görüşün içeriğini anlamaya yetmez.",
          "İnanç-akıl ilişkisinde çatışma, uyum veya farklı alanlara ayırma yaklaşımları birbirinden ayrılır. Bir düşünür aklın sınırını savunurken her türlü akıl yürütmeyi yasaklamış olmaz; neyi hangi yolla bildiğimizi sorgular. Hristiyan düşüncesinde patristik ve skolastik dönemlerin kurum ve sorunları aynı değildir. İslam felsefesinde çeviri merkezleri, bilimsel çalışmalar ve siyasi ortam tartışmaların gelişmesine katkı verir. Fârâbî’nin erdemli şehir savını yalnız yönetici listesi olarak değil ortak mutluluk amacına göre örgütlenme modeli olarak okumak gerekir. Tasavvuf metninde insanın iç dönüşümünü anlatan mecazı doğrudan fiziksel betimleme saymak anlamı bozar. Metnin kavram türü ve amacı, çıkarsanan sonucun sınırını belirler."
        ],
        "example": {
          "question": "Kötülüğün varlığıyla iyi ve kudretli Tanrı inancını bağdaştırmaya çalışan metnin sorunu nedir?",
          "steps": [
            "İki kabul arasında görünen gerilim kurulmuştur.",
            "Amaç fiziksel olayın teknik nedenini değil inancın felsefi tutarlılığını incelemektir.",
            "Kötülük problemi bu ilişkiyi sorgular."
          ],
          "answer": "Din felsefesiyle ilişkili kötülük problemi tartışılır.",
          "check": "Akıl-inanç ilişkisine ilişkin farklı yorumlar ve gerekçelendirmeler vardır."
        },
        "misconceptions": [
          {
            "wrong": "Orta Çağ’da bütün düşünürler aklı bütünüyle reddetmiştir.",
            "correct": "Akıl-inanç ilişkisine ilişkin farklı yorumlar ve gerekçelendirmeler vardır.",
            "why": "İki kabul arasında görünen gerilim kurulmuştur. Amaç fiziksel olayın teknik nedenini değil inancın felsefi tutarlılığını incelemektir. Kötülük problemi bu ilişkiyi sorgular."
          }
        ],
        "reasoningChecks": [
          {
            "question": "İnancı temellendirmeye çalışmak onun otomatik kanıtlandığı anlamına gelir mi?",
            "answer": "Hayır; sunulan akıl yürütme ayrıca incelenir.",
            "why": "Akıl-inanç ilişkisine ilişkin farklı yorumlar ve gerekçelendirmeler vardır."
          }
        ]
      },
      {
        "title": "İslam felsefesi, çeviri ve metin analizi",
        "source": {
          "book": "TYT-fel",
          "pages": [
            84,
            85,
            86,
            87,
            88,
            89,
            90,
            91,
            92,
            93
          ]
        },
        "explanation": [
          "Çeviri hareketleri Antik birikimi yalnız korumadı; farklı diller ve sorunlar içinde yeniden tartışmaya açtı. Fârâbî erdemli toplumu ortak mutluluk amacıyla; İbn Sînâ varlık ve zorunluluk ilişkisiyle; Gâzâlî bilginin güvenilirliği sorgusuyla; İbn Rüşd akıl ve din ilişkisini ele alış biçimiyle incelenir. Tasavvuf metinlerinde insanın ahlaki dönüşümü ve birlik temaları öne çıkabilir. Hepsini aynı tezin temsilcisi gibi okumak kavramsal ayrımları siler.",
          "Kaynağın görüş analizlerinde aynı sözcük farklı düşünürlerde farklı açıklama görevi taşıyabilir. Mutluluk Fârâbî’de toplumun ortak amacıyla ele alınırken bilgiye güven sorusu Gâzâlî’nin sorgulamasında farklı bir problem alanı oluşturur. Bir metni karşılaştırırken önce ortak soruyu, sonra sunulan cevabı ve cevabın gerekçesini yazmak gerekir. Çeviri faaliyetleri de yalnız metni bir dilden diğerine aktarma değil kavramların yeni tartışmalarda kullanılmasına zemin hazırlama bakımından önemlidir. Tasavvuf örneklerindeki gönül, yol ve birlik gibi ifadeleri yalnız fiziksel nesne veya siyasi örgüt adı gibi okumak metnin ahlaki ve manevi yönünü kaybettirir. Mecazın neyi açıkladığı, metnin insanın dönüşümüne ilişkin iddiasıyla birlikte belirlenmelidir."
        ],
        "example": {
          "question": "Bir şehirde insanların yalnız servet için değil ortak mutluluğa erişmek için yardımlaşması hangi ölçütü vurgular?",
          "steps": [
            "Toplumsal düzenin amacı soruluyor.",
            "Araç olan servetle nihai amaç ayrılıyor.",
            "Fârâbî’nin erdemli şehir yaklaşımında ortak iyi ve mutluluk belirleyicidir."
          ],
          "answer": "Toplum amaç ve erdem üzerinden değerlendirilir.",
          "check": "Çeviri, eleştiri ve yeni problemlerle birleştiğinde özgün tartışmaya zemin hazırlar."
        },
        "misconceptions": [
          {
            "wrong": "Çeviri yapmak yeni düşünce üretmemektir.",
            "correct": "Çeviri, eleştiri ve yeni problemlerle birleştiğinde özgün tartışmaya zemin hazırlar.",
            "why": "Toplumsal düzenin amacı soruluyor. Araç olan servetle nihai amaç ayrılıyor. Fârâbî’nin erdemli şehir yaklaşımında ortak iyi ve mutluluk belirleyicidir."
          }
        ],
        "reasoningChecks": [
          {
            "question": "Bir tasavvuf metnindeki birlik sözcüğü doğrudan siyasi devlet birliği midir?",
            "answer": "Bağlamı okunmadan böyle eşleştirme yapılamaz.",
            "why": "Çeviri, eleştiri ve yeni problemlerle birleştiğinde özgün tartışmaya zemin hazırlar."
          }
        ]
      }
    ],
    "connections": [
      {
        "concept": "Orta Çağ’da inanç ve akıl sorusu",
        "why": "Akıl-inanç ilişkisine ilişkin farklı yorumlar ve gerekçelendirmeler vardır."
      },
      {
        "concept": "İslam felsefesi, çeviri ve metin analizi",
        "why": "Çeviri, eleştiri ve yeni problemlerle birleştiğinde özgün tartışmaya zemin hazırlar."
      }
    ],
    "authorship": "Özgün öğretmen anlatımı ve özgün çözümleme örnekleri; kaynak sayfaları MEBİ kitabına yöneliktir."
  },
  "fel-12": {
    "title": "Rönesans ve yöntem arayışı",
    "prerequisites": [
      {
        "concept": "Rönesans ve bilimsel yöntemin etkisi",
        "why": "İnsanın değeri ve yetilerini vurgulamak keyfî davranışı onaylamak değildir."
      }
    ],
    "goals": [
      "Rönesans ve bilimsel yöntemin etkisi: İnsanın değeri ve yetilerini vurgulamak keyfî davranışı onaylamak değildir.",
      "Yöntemli kuşku ve toplumsal sözleşme: Yöntemli kuşku kesin bilgi arayışının aracıdır."
    ],
    "chapters": [
      {
        "title": "Rönesans ve bilimsel yöntemin etkisi",
        "source": {
          "book": "TYT-fel",
          "pages": [
            94,
            95,
            96,
            97,
            98,
            99,
            100,
            101
          ]
        },
        "explanation": [
          "Rönesans’ta Antik kültüre yöneliş, insanı ve doğayı araştırmanın yeni yollarıyla birleşti. Hümanizm insanın değer ve imkânını öne çıkarır; bu tek başına din karşıtlığıyla özdeş değildir. Kopernik, Galileo ve Newton çevresindeki bilimsel dönüşümler gözlem, matematik ve neden açıklamasının önemini güçlendirdi. Bilimsel bir modelin otoriteye aykırı olması onu otomatik doğru yapmaz; kanıt ve açıklama gücü temel ölçüttür.",
          "Rönesans’ın geçmişe yönelişi yalnız eski eserleri kopyalamak değildir; insan, doğa ve bilgiye yeni sorularla bakma sürecidir. Bacon’ın tümevarım ve deney vurgusuyla Descartes’ın açık-seçik bilgi ve yöntem arayışı farklı yollar önerir. İkisini yalnız bilimi desteklemek ortaklığıyla özdeş saymak yöntem ayrımını kaçırır. Descartes’ta zihin-beden ikiliği ile Spinoza’nın tek töz düşüncesi aynı dönemin birbirinden farklı ontolojik yanıtlarıdır. Hobbes’ta egemenliğin güçlenmesi güvenlik sorunuyla gerekçelendirilir; bir gerekçeyi açıklamak onu ahlaken kabul etmekle aynı değildir. Bilimsel keşiflerin felsefeyi etkilemesi de felsefenin yalnız fizik sonucunu tekrar ettiği anlamına gelmez; bilgiye güven ve yöntem üzerine yeni sorgular doğar."
        ],
        "example": {
          "question": "Dünya merkezli modeli sorgulayan araştırmacının yalnız eski otoriteye itirazı yeterli mi?",
          "steps": [
            "Otorite sorgulaması düşünce alanı açar.",
            "Yeni model gözlem ve hesapla desteklenmelidir.",
            "Eleştiri, kanıtın yerini tutmaz."
          ],
          "answer": "Bilimsel değişim yeni gerekçelendirme gerektirir.",
          "check": "İnsanın değeri ve yetilerini vurgulamak keyfî davranışı onaylamak değildir."
        },
        "misconceptions": [
          {
            "wrong": "Hümanizm insanın her davranışını doğru saymaktır.",
            "correct": "İnsanın değeri ve yetilerini vurgulamak keyfî davranışı onaylamak değildir.",
            "why": "Otorite sorgulaması düşünce alanı açar. Yeni model gözlem ve hesapla desteklenmelidir. Eleştiri, kanıtın yerini tutmaz."
          }
        ],
        "reasoningChecks": [
          {
            "question": "Deneyle matematiğin birlikte kullanımı ne sağlar?",
            "answer": "Gözlemin nicel ilişki ve sınanabilir modelle açıklanmasını.",
            "why": "İnsanın değeri ve yetilerini vurgulamak keyfî davranışı onaylamak değildir."
          }
        ]
      },
      {
        "title": "Yöntemli kuşku ve toplumsal sözleşme",
        "source": {
          "book": "TYT-fel",
          "pages": [
            97,
            98,
            99,
            100,
            101,
            102,
            103,
            104,
            105
          ]
        },
        "explanation": [
          "Descartes kesin bilgi arayışında kuşkuyu yöntem olarak kullanır; kuşku son amaç değil sağlam başlangıç bulma aracıdır. Düşünmenin gerçekleşmesi, kuşku duyan öznenin varlığına dayanak olur. Hobbes ise doğal durumdaki güvensizliği ortak egemen güçle aşmayı tartışır. Spinoza tek töz ve zorunluluk çerçevesiyle özgürlüğü nedenleri anlama ilişkisi içinde ele alır. Benzer çağda yaşamak aynı bilgi veya siyaset görüşünü paylaşmayı gerektirmez.",
          "Descartes’ın kuşku yöntemiyle Hobbes’un toplum sözleşmesini aynı sonuca giden iki araç gibi okumamak gerekir. İlkinde sorun bilginin kesin başlangıcı, ikincide insanların güvenli birlikte yaşamının siyasi dayanağıdır. Spinoza’nın tek töz ve zorunluluk vurgusu ise varlığın yapısını ve insanın nedenleri anlama biçimini başka bir çerçevede ele alır. Bir düşünürün dönemini bilmek görüşünü sınıflandırmaya yardımcı olur ama onun bütün tezlerini vermez. Metin çözümünde önce kullanılan kavramın hangi soruya cevap olduğu belirlenir. “Zorunluluk” matematiksel çıkarımda, doğa açıklamasında ve siyasi itaatte aynı işlevi taşımaz; kavramın bağlamını ayırmadan yalnız ortak sözcükten görüş eşleştirmek geçersiz olabilir."
        ],
        "example": {
          "question": "“Kuşku duyuyorsam düşünme etkinliği vardır.” akıl yürütmesinin rolü nedir?",
          "steps": [
            "Dış dünyanın doğruluğu henüz güvence altında değildir.",
            "Kuşkunun kendisi bir düşünme edimidir.",
            "Yöntem kesin başlangıç arar."
          ],
          "answer": "Kuşku düşünmenin ve öznenin varlığına başlangıç sağlar.",
          "check": "Yöntemli kuşku kesin bilgi arayışının aracıdır."
        },
        "misconceptions": [
          {
            "wrong": "Descartes hiçbir bilginin mümkün olmadığını savunur.",
            "correct": "Yöntemli kuşku kesin bilgi arayışının aracıdır.",
            "why": "Dış dünyanın doğruluğu henüz güvence altında değildir. Kuşkunun kendisi bir düşünme edimidir. Yöntem kesin başlangıç arar."
          }
        ],
        "reasoningChecks": [
          {
            "question": "Hobbes’un güvenlik vurgusu meşruiyeti hangi soruna bağlar?",
            "answer": "Doğal durumdaki çatışmanın ortak otoriteyle aşılmasına.",
            "why": "Yöntemli kuşku kesin bilgi arayışının aracıdır."
          }
        ]
      }
    ],
    "connections": [
      {
        "concept": "Rönesans ve bilimsel yöntemin etkisi",
        "why": "İnsanın değeri ve yetilerini vurgulamak keyfî davranışı onaylamak değildir."
      },
      {
        "concept": "Yöntemli kuşku ve toplumsal sözleşme",
        "why": "Yöntemli kuşku kesin bilgi arayışının aracıdır."
      }
    ],
    "authorship": "Özgün öğretmen anlatımı ve özgün çözümleme örnekleri; kaynak sayfaları MEBİ kitabına yöneliktir."
  },
  "fel-13": {
    "title": "Aydınlanma: bilgi, özgürlük ve ahlak",
    "prerequisites": [
      {
        "concept": "Deneyim, akıl ve bilginin koşulları",
        "why": "Bilginin mümkün olma koşullarını sorgulayarak farklı bir sentez kurar."
      }
    ],
    "goals": [
      "Deneyim, akıl ve bilginin koşulları: Bilginin mümkün olma koşullarını sorgulayarak farklı bir sentez kurar.",
      "Ahlak, özgürlük ve tarih: Bazı yaklaşımlar sonuç, bazıları ilke, ödev veya erdemi temel alır."
    ],
    "chapters": [
      {
        "title": "Deneyim, akıl ve bilginin koşulları",
        "source": {
          "book": "TYT-fel",
          "pages": [
            106,
            107,
            108,
            109
          ]
        },
        "explanation": [
          "Locke doğuştan fikirleri eleştirip deneyimin rolünü öne çıkarır. Rasyonalizm aklın sağladığı ilke ve yapılara ağırlık verir. Kant bilginin deneyimle başladığını ama deneyimden ibaret olmadığını savunarak öznenin bilme koşullarını inceler. Bu görüş “ikisini yarı yarıya karıştırmak” değildir; deneyimin nasıl bilgi biçimine girdiğini açıklayan farklı bir çerçevedir. Metinde duyumdan kavrama geçişin nasıl kurulduğu izlenmelidir.",
          "Aydınlanma düşüncesini bütün filozofların tek siyasi veya ahlaki programa katıldığı birlik gibi görmek yanıltır. Akla, eleştiriye ve ilerleme imkânına önem verilse de bilginin kaynağı ve toplumun örgütlenmesi konusunda ayrımlar vardır. Locke deneyimin rolünü, Hume nedensellik beklentisinin alışkanlıkla ilişkisini, Kant bilginin öznel koşullarını farklı biçimde ele alır. Hegel’de tarih ve tin, sıradan olay kronolojisinden daha kapsamlı bir gelişim çerçevesi içinde düşünülür. Ödev ahlakında evrenselleştirilebilir ilke ile faydacılıkta sonuç hesabı karşılaştırılırken aynı olay iki ölçüte göre ayrı ayrı çözülebilir. Bir ölçüte göre doğru bulunan eylemin diğerinde de aynı gerekçeyle doğru çıkması zorunlu değildir."
        ],
        "example": {
          "question": "“Duyular malzeme sağlar, zihin bu malzemeyi belirli biçimlerde düzenler.” görüşünü çöz.",
          "steps": [
            "Salt duyum yeterli görülmüyor.",
            "Özne bilgiyi kurmada etkin rol alıyor.",
            "Bu ayrım Kant’ın eleştirel yaklaşımıyla uyumludur."
          ],
          "answer": "Bilgi deneyim ve zihnin koşulları birlikte düşünülerek açıklanır.",
          "check": "Bilginin mümkün olma koşullarını sorgulayarak farklı bir sentez kurar."
        },
        "misconceptions": [
          {
            "wrong": "Kant akılcılık ve deneyciliği yalnız yan yana koyar.",
            "correct": "Bilginin mümkün olma koşullarını sorgulayarak farklı bir sentez kurar.",
            "why": "Salt duyum yeterli görülmüyor. Özne bilgiyi kurmada etkin rol alıyor. Bu ayrım Kant’ın eleştirel yaklaşımıyla uyumludur."
          }
        ],
        "reasoningChecks": [
          {
            "question": "Locke’un deneyim vurgusu her kişisel izlenimin kesin doğru olduğu demek mi?",
            "answer": "Hayır; bilginin kaynağıyla tekil yargının doğruluğu farklıdır.",
            "why": "Bilginin mümkün olma koşullarını sorgulayarak farklı bir sentez kurar."
          }
        ]
      },
      {
        "title": "Ahlak, özgürlük ve tarih",
        "source": {
          "book": "TYT-fel",
          "pages": [
            110,
            111,
            112,
            113,
            114
          ]
        },
        "explanation": [
          "Kant’ın ödev ahlakında eylemin yalnız sonucu değil hangi ilkeye dayanarak yapıldığı önemlidir. Fayda ahlakı sonuçların mutluluk ve yarar bakımından değerlendirilmesini öne çıkarır. Rousseau toplum sözleşmesinde ortak irade ve özgürlük sorununu tartışır. Hegel tarih ve düşünceyi durağan değil gelişen ilişkilerle ele alır. Farklı yaklaşımları “hepsi mutluluk ister” diye birleştirmek ölçüt farklarını gizler.",
          "Aynı davranışın farklı ahlak ölçütleriyle nasıl değerlendirildiği karşılaştırmalı örnekle görülebilir. Kaybolan cüzdanı sahibine veren kişi hem yararlı sonuç oluşturabilir hem ahlaki ilkeye uygun davranabilir; fakat bunlar iki ayrı gerekçedir. Kant açısından eylemin ödül beklentisiyle mi yoksa ödeve saygıyla mı yapıldığı sorgulanır. Faydacı yaklaşım ise etkilenenler üzerindeki sonuçların toplamına ağırlık verir. Bu karşılaştırmada birinin niyeti, diğerinin sonucu önemsemesi ikisinin hiçbir ortak sonuca ulaşamayacağı anlamına gelmez; bazen sonuç aynı, dayanak farklıdır. Tarih ve toplum görüşlerini incelerken de Hegel’in gelişim çerçevesi tek bir olayın tarihini bilmekten daha kapsamlı bir açıklama iddiasıdır; olay listesiyle felsefi tarih anlayışı ayrı tutulmalıdır."
        ],
        "example": {
          "question": "Bir kişi ödül almak için doğruyu söylüyorsa Kant açısından ne sorulur?",
          "steps": [
            "Davranış dışarıdan doğru görünebilir.",
            "Belirleyici olan yalnız ödül beklentisi mi, ödeve saygı mı olduğudur.",
            "Niyetin dayandığı ilke ahlaki değerde rol oynar."
          ],
          "answer": "Yalnız uygun sonuç, ödevden davranışı kanıtlamaz.",
          "check": "Bazı yaklaşımlar sonuç, bazıları ilke, ödev veya erdemi temel alır."
        },
        "misconceptions": [
          {
            "wrong": "İyi sonuç her ahlak görüşünde tek ölçüttür.",
            "correct": "Bazı yaklaşımlar sonuç, bazıları ilke, ödev veya erdemi temel alır.",
            "why": "Davranış dışarıdan doğru görünebilir. Belirleyici olan yalnız ödül beklentisi mi, ödeve saygı mı olduğudur. Niyetin dayandığı ilke ahlaki değerde rol oynar."
          }
        ],
        "reasoningChecks": [
          {
            "question": "Faydacı değerlendirmede kimi etkiler hesaba katılır?",
            "answer": "Eylemin etkilenenler üzerindeki yarar ve zarar sonuçları.",
            "why": "Bazı yaklaşımlar sonuç, bazıları ilke, ödev veya erdemi temel alır."
          }
        ]
      }
    ],
    "connections": [
      {
        "concept": "Deneyim, akıl ve bilginin koşulları",
        "why": "Bilginin mümkün olma koşullarını sorgulayarak farklı bir sentez kurar."
      },
      {
        "concept": "Ahlak, özgürlük ve tarih",
        "why": "Bazı yaklaşımlar sonuç, bazıları ilke, ödev veya erdemi temel alır."
      }
    ],
    "authorship": "Özgün öğretmen anlatımı ve özgün çözümleme örnekleri; kaynak sayfaları MEBİ kitabına yöneliktir."
  },
  "fel-14": {
    "title": "20. yüzyılda anlam, varlık ve bilim",
    "prerequisites": [
      {
        "concept": "Çağdaş yaklaşımların soru farkları",
        "why": "Yorum metnin dili ve bağlamından gerekçe göstermek zorundadır."
      }
    ],
    "goals": [
      "Çağdaş yaklaşımların soru farkları: Yorum metnin dili ve bağlamından gerekçe göstermek zorundadır.",
      "Özgürlük ve bilim anlayışındaki tartışmalar: Seçim, kişinin kendini ve eylemlerinin sorumluluğunu üstlenmesiyle ilişkilidir."
    ],
    "chapters": [
      {
        "title": "Çağdaş yaklaşımların soru farkları",
        "source": {
          "book": "TYT-fel",
          "pages": [
            115,
            116,
            117,
            118
          ]
        },
        "explanation": [
          "20. yüzyıl düşüncesinde fenomenoloji bilincin yöneldiği deneyimi, hermeneutik anlamayı ve yorum bağlamını, varoluşçuluk insanın seçimini ve sorumluluğunu öne çıkarır. Bu akımlar yalnız farklı isimler değildir; hangi problemi hangi yöntemle ele aldıkları ayrılır. Fenomenolojik paranteze alma dünyayı yok saymak değil önceden kabul edilen yargıları geçici askıya alarak deneyimin görünüşünü incelemektir. Yorumu önemsemek de her okumanın aynı derecede gerekçeli olduğunu söylemez.",
          "Çağdaş akımlarda yöntem kavramı ontolojik sonuçtan ayrılmalıdır. Fenomenolojik inceleme, deneyimi betimlemek için bazı kabulleri askıya alabilir; bu yöntem adımı bütün varlığın yalnız kişisel hayal olduğu sonucuna eşit değildir. Hermeneutikte bir cümlenin anlamı parçayla bütün arasında gidip gelerek anlaşılır; tarihsel bağlam yorumu besler. Varoluşçuluk insanın koşulları olmadığını değil bu koşullar içinde seçime ve anlam kurmaya ilişkin sorumluluğu vurgulayabilir. Mantıkçı pozitivizmde önermenin anlamını değerlendirme ölçütü ile gündelik sözün psikolojik etkisi farklıdır. Yeni ontolojide varlık katmanları, basitçe iki ayrı töz sayma modeliyle aynı değildir. Akım adı seçmeden önce metnin temel sorusunu ve kullandığı yöntemi açıkça yazmak gerekir."
        ],
        "example": {
          "question": "Bir metni yazarın dönemi, dili ve okurun ön kabulleriyle birlikte anlama girişimi hangi yaklaşımı çağrıştırır?",
          "steps": [
            "Sorun yalnız sözcük sözlüğü değildir.",
            "Anlam bağlam ve yorum ilişkisiyle kuruluyor.",
            "Bu, hermeneutik problem alanıyla uyumludur."
          ],
          "answer": "Hermeneutik anlamayı bağlam içinde inceler.",
          "check": "Yorum metnin dili ve bağlamından gerekçe göstermek zorundadır."
        },
        "misconceptions": [
          {
            "wrong": "Yorum varsa metnin bütün anlamları eşit derecede doğrudur.",
            "correct": "Yorum metnin dili ve bağlamından gerekçe göstermek zorundadır.",
            "why": "Sorun yalnız sözcük sözlüğü değildir. Anlam bağlam ve yorum ilişkisiyle kuruluyor. Bu, hermeneutik problem alanıyla uyumludur."
          }
        ],
        "reasoningChecks": [
          {
            "question": "Fenomenoloji parantezi bütün dünyanın yokluğunu mu savunur?",
            "answer": "Hayır; inceleme sırasında yargıları askıya alma yöntemidir.",
            "why": "Yorum metnin dili ve bağlamından gerekçe göstermek zorundadır."
          }
        ]
      },
      {
        "title": "Özgürlük ve bilim anlayışındaki tartışmalar",
        "source": {
          "book": "TYT-fel",
          "pages": [
            117,
            118,
            119,
            120
          ]
        },
        "explanation": [
          "Sartre insanın hazır bir özle bütünüyle belirlenmediğini, seçimleriyle kendini kurduğunu ve sorumluluktan kaçamayacağını vurgular. Mantıkçı pozitivizm anlam ve doğrulanabilirlik ilişkisini öne çıkarırken bilim anlayışları arasında yöntem ve tarih tartışmaları sürer. Diyalektik materyalizm değişimi maddi ilişkiler ve çelişkilerle ele alır. Aynı değişim sözcüğü bu görüşlerde farklı ontolojik kabuller taşır; metindeki özne, neden ve açıklama düzeyi belirlenmelidir.",
          "Özgürlük tartışmasında koşul ile tam belirlenme birbirinden ayrılır. Bir kişinin ekonomik veya tarihsel sınırlar içinde bulunması, onun bütün kararlarının hiçbir sorumluluk taşımadan dışarıya yüklenebileceği sonucunu tek başına vermez. Varoluşçu metin seçimden kaçınmanın bile belirli bir tutum olduğunu tartışabilir. Buna karşılık bilim ve anlam sorununu ele alan metin aynı kişisel karar sorusunu değil önermelerin nasıl anlamlı veya sınanabilir olduğunu araştırır. Diyalektik materyalizmde değişimin maddi ilişkilerle açıklanması da yalnız “her şey değişir” cümlesinden daha belirli bir iddiadır. Akımları karşılaştırırken temel soru, kabul edilen gerçeklik ve kullanılan yöntem ayrı gösterilmelidir; ortak bir sözcük üç alandaki farklı açıklamaları özdeşleştirmez."
        ],
        "example": {
          "question": "“Koşullarım vardır ama seçimlerimi yalnız koşulların arkasına saklayamam.” savı neyi öne çıkarır?",
          "steps": [
            "Koşullar yok sayılmıyor.",
            "Özne seçim ve sorumluluğunu bütünüyle devretmiyor.",
            "Varoluşçu sorumluluk anlayışıyla bağ kurulabilir."
          ],
          "answer": "Seçimle sorumluluk arasındaki ilişki vurgulanır.",
          "check": "Seçim, kişinin kendini ve eylemlerinin sorumluluğunu üstlenmesiyle ilişkilidir."
        },
        "misconceptions": [
          {
            "wrong": "Varoluşçulukta özgürlük sonuçlardan sorumsuz olmaktır.",
            "correct": "Seçim, kişinin kendini ve eylemlerinin sorumluluğunu üstlenmesiyle ilişkilidir.",
            "why": "Koşullar yok sayılmıyor. Özne seçim ve sorumluluğunu bütünüyle devretmiyor. Varoluşçu sorumluluk anlayışıyla bağ kurulabilir."
          }
        ],
        "reasoningChecks": [
          {
            "question": "Her değişim görüşü materyalist mi?",
            "answer": "Hayır; değişimin temeli olarak hangi varlık türünün kabul edildiği incelenir.",
            "why": "Seçim, kişinin kendini ve eylemlerinin sorumluluğunu üstlenmesiyle ilişkilidir."
          }
        ]
      }
    ],
    "connections": [
      {
        "concept": "Çağdaş yaklaşımların soru farkları",
        "why": "Yorum metnin dili ve bağlamından gerekçe göstermek zorundadır."
      },
      {
        "concept": "Özgürlük ve bilim anlayışındaki tartışmalar",
        "why": "Seçim, kişinin kendini ve eylemlerinin sorumluluğunu üstlenmesiyle ilişkilidir."
      }
    ],
    "authorship": "Özgün öğretmen anlatımı ve özgün çözümleme örnekleri; kaynak sayfaları MEBİ kitabına yöneliktir."
  },
  "fel-15": {
    "title": "Türkiye’de düşünce ve çağdaş metinler",
    "prerequisites": [
      {
        "concept": "Türkiye’de felsefi düşüncenin problem alanları",
        "why": "Ortak coğrafya, farklı problem ve yöntemleri ortadan kaldırmaz."
      }
    ],
    "goals": [
      "Türkiye’de felsefi düşüncenin problem alanları: Ortak coğrafya, farklı problem ve yöntemleri ortadan kaldırmaz.",
      "Nietzsche, Bergson, Sartre ve bilim tartışması: Yanlışlanabilirlik olası çürütücü sınama koşuludur; gerçek yanlışlık sonucu değildir."
    ],
    "chapters": [
      {
        "title": "Türkiye’de felsefi düşüncenin problem alanları",
        "source": {
          "book": "TYT-fel",
          "pages": [
            121,
            122,
            123
          ]
        },
        "explanation": [
          "Türkiye’de felsefi çalışmalar etik, insan, kültür, bilim tarihi ve düşüncenin toplumsal rolü gibi birçok alana uzanır. Nurettin Topçu’nun hareket ve sorumluluk vurgusu, Takiyettin Mengüşoğlu’nun insanı bütün varlık koşullarıyla ele alan yaklaşımı, İoanna Kuçuradi’nin değer ve insan hakları çalışmaları aynı başlık altında eritilemez. Bir düşünürü yalnız milliyetiyle sınıflamak yerine incelediği problemi, kavramlarını ve gerekçesini belirlemek gerekir.",
          "Felsefe tarihinde yerel düşünceyi yalnız dışarıdan alınmış adların listesi olarak okumak, özgün problem tercihlerini görünmez kılar. Türkiye’de insan, etik, bilim tarihi ve kültür alanındaki çalışmalar farklı yöntemlerle gelişmiştir. Mengüşoğlu insanı somut yapıp-etmeleriyle ele alırken insanın yalnız bilgi üreten yanına indirgenmesine karşı çıkar. Topçu’da isyan, keyfî kuralsızlık değil ahlaki sorumluluk ve iradenin daha iyiye yönelişi bağlamındadır. Popper’ın eleştiriye açıklığı da bütün savların eşit doğru olduğu anlamına gelmez; sınanan ve hatası gösterilen kuramlar ayıklanır. Kuhn’un paradigma değişimiyle bu eleştirel sınama anlayışını karşılaştırırken birinin tarihsel topluluk pratiğine, diğerinin sınanabilirliğe verdiği ağırlık ayrı gösterilebilir."
        ],
        "example": {
          "question": "“İnsanı yalnız düşünme yetisine indirgeyemeyiz; çalışan, değer veren, tarihsel bir varlık olarak ele almalıyız.” savını çöz.",
          "steps": [
            "Tek bir özelliğe indirgeme eleştiriliyor.",
            "İnsanın somut varlık koşulları birlikte ele alınıyor.",
            "Felsefi antropolojiyle bağlantı kurulabilir."
          ],
          "answer": "İnsan bütünsel varlık yapısıyla araştırılır.",
          "check": "Ortak coğrafya, farklı problem ve yöntemleri ortadan kaldırmaz."
        },
        "misconceptions": [
          {
            "wrong": "Aynı ülkedeki filozoflar aynı görüşü savunur.",
            "correct": "Ortak coğrafya, farklı problem ve yöntemleri ortadan kaldırmaz.",
            "why": "Tek bir özelliğe indirgeme eleştiriliyor. İnsanın somut varlık koşulları birlikte ele alınıyor. Felsefi antropolojiyle bağlantı kurulabilir."
          }
        ],
        "reasoningChecks": [
          {
            "question": "Bir düşünürün tarihini bilmek görüşünü anlamaya yeter mi?",
            "answer": "Hayır; problem ve akıl yürütme de yeniden kurulmalıdır.",
            "why": "Ortak coğrafya, farklı problem ve yöntemleri ortadan kaldırmaz."
          }
        ]
      },
      {
        "title": "Nietzsche, Bergson, Sartre ve bilim tartışması",
        "source": {
          "book": "TYT-fel",
          "pages": [
            124,
            125,
            126,
            127
          ]
        },
        "explanation": [
          "Nietzsche değerlerin kaynağını ve insanın kendini aşmasını; Bergson mekanik ölçüme indirgenemeyen süre ve sezgiyi; Sartre seçimle kendini kurmayı tartışır. Kuhn bilimde paradigma ve bilimsel dönüşüm ilişkisini, Popper yanlışlanabilirliği öne çıkarır. Bilim eleştirisi bilimsel bilginin değersizliğini değil onun nasıl geliştiği sorununu araştırabilir. Bir kuramın yanlışlanabilir olması yanlış olduğu anlamına gelmez; onu sınayabilecek olası durumların tarif edilebilmesidir.",
          "Kuhn ile Popper karşılaştırmasında kuramın yanlışlanabilirliğiyle bilimin tarihsel işleyişi farklı vurgu alanlarıdır. Bir kuramın hangi gözlemle çürütülebileceğini belirtmek, sınama riskini tanımlamaktır; kuramın gerçekten çürütüldüğü sonucunu vermez. Kuhn’da paradigma, araştırmacıların sorunları hangi örnek ve yöntemlerle ele aldığını da kapsar. Yeni bir gözlem ortaya çıkınca bütün bilimsel topluluk aynı anda görüş değiştirmek zorunda değildir; açıklama çerçevesinin dönüşümü araştırılır. Bergson’un sezgi ve süre anlayışıyla Sartre’ın seçim ve sorumluluk vurgusu ise bilim yöntemi sorusuna indirgenmez. Görüş analizi, düşünürün adını tahmin etmekten önce metnin hangi problem üzerine kurulduğunu ve kavramların nasıl bağlandığını göstermelidir."
        ],
        "example": {
          "question": "“Bu savı hangi gözlem yanlış çıkarabilir?” sorusu neyi araştırır?",
          "steps": [
            "Söz konusu gözlemin gerçekten gerçekleşmesi şart değildir.",
            "Savın sınanabilirlik koşulu aranır.",
            "Her sonuca uyarlanabilen sav testte risk üstlenmez."
          ],
          "answer": "Popper’ın yanlışlanabilirlik ölçütüyle bağlantılıdır.",
          "check": "Yanlışlanabilirlik olası çürütücü sınama koşuludur; gerçek yanlışlık sonucu değildir."
        },
        "misconceptions": [
          {
            "wrong": "Yanlışlanabilir kuram zaten yanlış kuramdır.",
            "correct": "Yanlışlanabilirlik olası çürütücü sınama koşuludur; gerçek yanlışlık sonucu değildir.",
            "why": "Söz konusu gözlemin gerçekten gerçekleşmesi şart değildir. Savın sınanabilirlik koşulu aranır. Her sonuca uyarlanabilen sav testte risk üstlenmez."
          }
        ],
        "reasoningChecks": [
          {
            "question": "Kuhn’da paradigma yalnız tek hipotez mi?",
            "answer": "Ortak problem, yöntem ve örnek çözüm çerçevesini de içerir.",
            "why": "Yanlışlanabilirlik olası çürütücü sınama koşuludur; gerçek yanlışlık sonucu değildir."
          }
        ]
      }
    ],
    "connections": [
      {
        "concept": "Türkiye’de felsefi düşüncenin problem alanları",
        "why": "Ortak coğrafya, farklı problem ve yöntemleri ortadan kaldırmaz."
      },
      {
        "concept": "Nietzsche, Bergson, Sartre ve bilim tartışması",
        "why": "Yanlışlanabilirlik olası çürütücü sınama koşuludur; gerçek yanlışlık sonucu değildir."
      }
    ],
    "authorship": "Özgün öğretmen anlatımı ve özgün çözümleme örnekleri; kaynak sayfaları MEBİ kitabına yöneliktir."
  },
  "din-08": {
    "title": "Gençlikte değer, karakter ve erdem",
    "prerequisites": [
      {
        "concept": "Değer, karakter ve temel erdem",
        "why": "Şecaat uygun amacı ve ölçüyü gözeten cesarettir."
      }
    ],
    "goals": [
      "Değer, karakter ve temel erdem: Şecaat uygun amacı ve ölçüyü gözeten cesarettir.",
      "İsra mesajlarını davranış ilişkisiyle okumak: Alışkanlıklar dinî ve ahlaki ölçütlerle ayrıca değerlendirilir."
    ],
    "chapters": [
      {
        "title": "Değer, karakter ve temel erdem",
        "source": {
          "book": "TYT-din",
          "pages": [
            27,
            28,
            29,
            30
          ]
        },
        "explanation": [
          "Din kültürü bağlamında değerler davranışın iyi-kötü, doğru-yanlış bakımından değerlendirilmesine yön verir. Mizaç eğilimleri, karakterde gelişen tutumlar ve kişiliğin bütünü aynı kavram değildir. Hikmet aklı yerinde kullanma, adalet hak gözetme, iffet istekleri ölçülü yönetme, şecaat uygun cesaretle ilişkilidir. Erdem yalnız bir tanımı ezberlemek değil benzer durumlarda tutarlı davranış göstermekle anlaşılır; aşırılık ve eksiklikten kaçınma her değerde ayrı görünür.",
          "Değerlerin davranışa aktarılması alışkanlık, örnek ve bilinçli değerlendirmeyle ilişkilidir. Kişinin mizacı daha çabuk öfkelenmeye yatkın olabilir; bu durum öfkeyle zarar vermesini kaçınılmaz ve sorumluluktan bağımsız yapmaz. Karakter gelişiminde öz denetim ve doğru alışkanlıkların payı bu ayrımda görünür olur. Temel erdemler birbirini tamamlayabilir: bilgi olmadan cesaret düşüncesiz riske, cesaret olmadan adalet ilkesi sessiz kabule dönüşebilir. İsra mesajlarındaki aileye saygı, ihtiyaç sahibini gözetme ve harcamada ölçü aynı hayat içinde farklı sorumlulukları dengeler. Savurganlıkla cimrilik iki uçtur; çözüm her zaman parayı tam ortadan bölmek değil somut ihtiyaç, imkân ve yükümlülükleri akılcı değerlendirmektir. Bir davranışın yaygın gelenek olması, onu ahlaki sorgulamanın dışında bırakmaz."
        ],
        "example": {
          "question": "Arkadaş baskısına rağmen haksız suçlamaya katılmayan öğrenci hangi erdemleri gösterir?",
          "steps": [
            "Haksızlığı reddetmek adaletle ilgilidir.",
            "Baskı altında doğruyu savunmak şecaat boyutu taşır.",
            "Örnekte ölçülü tepkiye ilişkin ayrı bilgi verilmediği için iffet hakkında kesin hüküm kurulmaz."
          ],
          "answer": "Adalet ve şecaat.",
          "check": "Şecaat uygun amacı ve ölçüyü gözeten cesarettir."
        },
        "misconceptions": [
          {
            "wrong": "Cesaret her tehlikeye düşünmeden atılmaktır.",
            "correct": "Şecaat uygun amacı ve ölçüyü gözeten cesarettir.",
            "why": "Haksızlığı reddetmek adaletle ilgilidir. Baskı altında doğruyu savunmak şecaat boyutu taşır. Örnekte ölçülü tepkiye ilişkin ayrı bilgi verilmediği için iffet hakkında kesin hüküm kurulmaz."
          }
        ],
        "reasoningChecks": [
          {
            "question": "Değerin öğrenilmesi yalnız tanımı bilmek mi?",
            "answer": "Davranışa ve seçim ölçütlerine aktarılması gerekir.",
            "why": "Şecaat uygun amacı ve ölçüyü gözeten cesarettir."
          }
        ]
      },
      {
        "title": "İsra mesajlarını davranış ilişkisiyle okumak",
        "source": {
          "book": "TYT-din",
          "pages": [
            31
          ]
        },
        "explanation": [
          "İsra suresinin ilgili ayetlerinde anne-babaya saygı, ihtiyaç sahibini gözetme ve harcamada ölçü gibi toplumsal sorumluluklar birlikte ele alınır. Dersin amacı yalnız ayet numarası eşleştirmek değil ilkeyi yeni durumla ilişkilendirmektir. Cömertlik sınırsız savurganlık, tutumluluk cimrilik değildir; ihtiyaç ve sorumluluk dengesi önemlidir. Örf ve âdetler değer aktarımında etkilidir ama her alışkanlığın ahlaken doğru olduğu sonucu çıkmaz.",
          "İsra 23–29 mesajlarının birlikte okunması aileye saygıyla ekonomik sorumluluğun hayatın ayrı ama ilişkili alanları olduğunu gösterir. Bir kişinin ihtiyaç sahibine yardım etmesi, ailesine karşı kırıcı davranışını kendiliğinden doğru yapmaz; bir iyilik bütün diğer yükümlülüklerin yerine geçmez. Harcamada ölçü de herkese her durumda aynı para miktarını ayırmak anlamına gelmez; kişinin imkânı, temel ihtiyacı ve sorumluluğu dikkate alınır. İsrafla cimrilik arasındaki denge bu somut ilişkiler içinde değerlendirilir. Ayet yorumunda amaç, metindeki ilkeleri görünür kılmaktır. Metnin vermediği bir kişi niyetini kesin bildiğini iddia etmek veya tek örnekten bütün hayatı hakkında hüküm vermek, yorumun dayanağını aşar."
        ],
        "example": {
          "question": "Bir öğrenci bütün parasını gösteriş için harcayıp temel ihtiyacını karşılayamıyorsa hangi ayrım önemlidir?",
          "steps": [
            "Harcamak tek başına cömertlik değildir.",
            "Amaç gösteriş ve sonuç sorumluluk kaybıdır.",
            "Ölçülülük, ihtiyaçlarla yardım imkânını dengelemeyi gerektirir."
          ],
          "answer": "Savurganlıkla cömertlik ayrılmalıdır.",
          "check": "Alışkanlıklar dinî ve ahlaki ölçütlerle ayrıca değerlendirilir."
        },
        "misconceptions": [
          {
            "wrong": "Toplumda yaygın olan her davranış doğrudur.",
            "correct": "Alışkanlıklar dinî ve ahlaki ölçütlerle ayrıca değerlendirilir.",
            "why": "Harcamak tek başına cömertlik değildir. Amaç gösteriş ve sonuç sorumluluk kaybıdır. Ölçülülük, ihtiyaçlarla yardım imkânını dengelemeyi gerektirir."
          }
        ],
        "reasoningChecks": [
          {
            "question": "Anne-babaya saygı yalnız maddi yardım mı?",
            "answer": "Söz, tutum ve ihtiyaçlarını gözetme gibi boyutlar da vardır.",
            "why": "Alışkanlıklar dinî ve ahlaki ölçütlerle ayrıca değerlendirilir."
          }
        ]
      }
    ],
    "connections": [
      {
        "concept": "Değer, karakter ve temel erdem",
        "why": "Şecaat uygun amacı ve ölçüyü gözeten cesarettir."
      },
      {
        "concept": "İsra mesajlarını davranış ilişkisiyle okumak",
        "why": "Alışkanlıklar dinî ve ahlaki ölçütlerle ayrıca değerlendirilir."
      }
    ],
    "authorship": "Özgün öğretmen anlatımı ve özgün çözümleme örnekleri; kaynak sayfaları MEBİ kitabına yöneliktir."
  },
  "din-09": {
    "title": "İslam medeniyeti ve ortak insanlık",
    "prerequisites": [
      {
        "concept": "Kültür, medeniyet ve çoğul katkı",
        "why": "Farklı toplumların etkileşimi ve üretimi ortak birikimi oluşturmuştur."
      }
    ],
    "goals": [
      "Kültür, medeniyet ve çoğul katkı: Farklı toplumların etkileşimi ve üretimi ortak birikimi oluşturmuştur.",
      "Hucurat 13 ve insan ilişkileri: Değer, metindeki ahlaki ölçüt ve kişinin tutumuyla ilişkilendirilir."
    ],
    "chapters": [
      {
        "title": "Kültür, medeniyet ve çoğul katkı",
        "source": {
          "book": "TYT-din",
          "pages": [
            32,
            33,
            34,
            35
          ]
        },
        "explanation": [
          "Kültür toplumun maddi-manevi üretim ve değerlerini; medeniyet daha geniş etkileşim alanında gelişen ortak birikimi anlamaya yarar. İslam medeniyeti yalnız tek dil veya etnik gruptan oluşmamıştır; farklı coğrafyalar bilim, sanat, mimari ve eğitim alanlarında katkı sunmuştur. Bir kubbe veya medreseyi incelemek yalnız biçimi tanımak değil hangi ihtiyaç, bilgi ve toplumsal kurumla ilişkili olduğunu anlamaktır. Aktarım ve yerel yorumlar aynı medeniyet içinde çeşitlilik yaratır.",
          "Medeniyet birikimini farklı coğrafyalardaki şehir ve kurum örnekleriyle karşılaştırmak tek merkezli anlatımı aşar. Endülüs, Bağdat, Maveraünnehir, Anadolu veya Balkanlar aynı biçimde değil farklı tarihî şartlarla katkı vermiştir. Bilim ve sanat üretiminde çeviri, eğitim, ticaret ve himaye ağları birlikte rol oynar; yalnız büyük düşünür adı öğrenmek bu altyapıyı gizleyebilir. Kültürün maddi unsurlarıyla manevi değerleri de tamamen kopuk değildir; bir yapı hem teknik ürün hem toplumsal anlam taşıyabilir. Hucurat 13’te farklılıkların tanışmayla ilişkilendirilmesi, kültürleri tek ölçüyle üstün-aşağı diye sıralamaya gerekçe yapılamaz. İnsanların ortak değerini gözetmek yerel dilleri ve sanatları yok saymayı gerektirmez; saygılı etkileşim çeşitliliğin korunmasıyla birlikte düşünülebilir."
        ],
        "example": {
          "question": "Bağdat’taki çeviri faaliyetiyle Anadolu’daki vakıf yapısı neden aynı örnek değildir?",
          "steps": [
            "Biri bilginin aktarılıp işlenmesine yönelir.",
            "Diğeri gelir ve toplumsal hizmeti örgütler.",
            "İkisi farklı araçlarla medeniyet birikimine katkı verir."
          ],
          "answer": "Bilimsel ve kurumsal katkı farklı alanlarda gelişir.",
          "check": "Farklı toplumların etkileşimi ve üretimi ortak birikimi oluşturmuştur."
        },
        "misconceptions": [
          {
            "wrong": "İslam medeniyeti yalnız tek milletin ürünüdür.",
            "correct": "Farklı toplumların etkileşimi ve üretimi ortak birikimi oluşturmuştur.",
            "why": "Biri bilginin aktarılıp işlenmesine yönelir. Diğeri gelir ve toplumsal hizmeti örgütler. İkisi farklı araçlarla medeniyet birikimine katkı verir."
          }
        ],
        "reasoningChecks": [
          {
            "question": "Aynı dinî gelenek bütün şehirlerde aynı mimariyi mi gerektirir?",
            "answer": "İklim, malzeme ve yerel kültür çeşitlilik yaratabilir.",
            "why": "Farklı toplumların etkileşimi ve üretimi ortak birikimi oluşturmuştur."
          }
        ]
      },
      {
        "title": "Hucurat 13 ve insan ilişkileri",
        "source": {
          "book": "TYT-din",
          "pages": [
            36
          ]
        },
        "explanation": [
          "Hucurat suresinin 13. ayeti din kültürü öğretiminde insanlığın ortak kökeni, farklı topluluklar ve tanışma ilişkisi üzerinden ele alınır. Farklılık, bir grubun doğuştan ahlaki üstünlüğünün kanıtı olarak okunmaz. Metinde değer ölçütünün hangi davranış ve tutumla ilişkilendirildiği belirlenmelidir. Bir ayetten çıkarım yaparken metnin bildirmediği siyasi, biyolojik veya toplumsal ayrıntıları eklemek yorumun sınırını aşar.",
          "Hucurat 13’ün tanışma vurgusu, farklı toplulukların varlığını ilişki kurmanın önünde mutlak engel saymamayı gerektirir. Bir kişinin dili, rengi veya kökeni onun bütün ahlaki davranışlarının bilgisi değildir. Önyargılı genellemede grubun bir üyesine ait özellik bütün üyelere taşınır; ayetin ortak insanlık ve ahlaki ölçüt bağlamı bu indirgemeyi sorgulamaya yardımcı olur. Farklılıkları tanımak bütün geleneklerin her davranışını sorgusuz onaylamakla aynı şey değildir; insan onuruna saygıyla davranışı değerlendirme birlikte mümkündür. Kültürel birikimi öğrenirken de bir toplumun katkısını göstermek başka toplumların katkısını yok saymayı gerektirmez. Ortak medeniyet ve yerel çeşitlilik bu nedenle karşıt değil birlikte düşünülebilen alanlardır."
        ],
        "example": {
          "question": "Bir öğrenci “Dilimiz farklı olduğu için insanlık değerimiz daha yüksektir.” diyorsa hangi sorun var?",
          "steps": [
            "Dil farklılığı gerçek bir kültürel ayrımdır.",
            "Bu ayrımdan doğuştan değer üstünlüğü sonucu çıkmaz.",
            "Tanışma ve ortak insanlık vurgusu ayrımcılığa gerekçe yapılmaz."
          ],
          "answer": "Kültürel farkla ahlaki üstünlük iddiası ayrılır.",
          "check": "Değer, metindeki ahlaki ölçüt ve kişinin tutumuyla ilişkilendirilir."
        },
        "misconceptions": [
          {
            "wrong": "Bir topluluğun adı veya dili kişinin ahlaki değerini tek başına belirler.",
            "correct": "Değer, metindeki ahlaki ölçüt ve kişinin tutumuyla ilişkilendirilir.",
            "why": "Dil farklılığı gerçek bir kültürel ayrımdır. Bu ayrımdan doğuştan değer üstünlüğü sonucu çıkmaz. Tanışma ve ortak insanlık vurgusu ayrımcılığa gerekçe yapılmaz."
          }
        ],
        "reasoningChecks": [
          {
            "question": "Farklılıkların tanışmaya vesile olması neyi gerektirir?",
            "answer": "Saygı, iletişim ve önyargıyı sorgulamayı.",
            "why": "Değer, metindeki ahlaki ölçüt ve kişinin tutumuyla ilişkilendirilir."
          }
        ]
      }
    ],
    "connections": [
      {
        "concept": "Kültür, medeniyet ve çoğul katkı",
        "why": "Farklı toplumların etkileşimi ve üretimi ortak birikimi oluşturmuştur."
      },
      {
        "concept": "Hucurat 13 ve insan ilişkileri",
        "why": "Değer, metindeki ahlaki ölçüt ve kişinin tutumuyla ilişkilendirilir."
      }
    ],
    "authorship": "Özgün öğretmen anlatımı ve özgün çözümleme örnekleri; kaynak sayfaları MEBİ kitabına yöneliktir."
  },
  "din-10": {
    "title": "Allah–insan ilişkisi ve Kur’an’da gençler",
    "prerequisites": [
      {
        "concept": "İnanç, isim-sıfat ve insanın sorumluluğu",
        "why": "Kavramın kime ve hangi kapsamda yüklendiği belirlenmelidir."
      }
    ],
    "goals": [
      "İnanç, isim-sıfat ve insanın sorumluluğu: Kavramın kime ve hangi kapsamda yüklendiği belirlenmelidir.",
      "Dua, tövbe, vahiy ve gençlik örnekleri: İnsanın yapabileceği çabayı göstermesiyle sonuç karşısındaki güven ayrılmalıdır."
    ],
    "chapters": [
      {
        "title": "İnanç, isim-sıfat ve insanın sorumluluğu",
        "source": {
          "book": "TYT-din",
          "pages": [
            37,
            38,
            39,
            40
          ]
        },
        "explanation": [
          "Din kültürü dersinde Allah inancı, insanın anlam, güven ve sorumluluk ilişkisi içinde ele alınır. Zati sıfatlar Allah’a özgü varlık niteliklerini, sübuti sıfatlar ilim, irade, kudret gibi nitelikleri anlatır; insanda aynı sözcüğün sınırlı örneğinin bulunması ilahi nitelikle eşitlik anlamına gelmez. Kur’an’da insanın akıl, irade ve öğrenme imkânıyla birlikte hata ve zaaf taşıması sorumluluk ve gelişim alanını açıklar. Bilgi sahibi olmak ile doğru eylemi seçmek ayrı aşamalardır.",
          "Allah’ın isim ve sıfatlarını öğrenmede tanımın yanında hangi anlam karışıklığını önlediği de belirtilmelidir. İlim bilmekle, irade dilemekle, kudret güç yetirmekle ilgilidir; aynı olayda birbirine bağlı görünmeleri onları eş anlamlı yapmaz. İnsanın bilgi ve iradesi sınırlı olduğu için kendi deneyiminden ilahi niteliğe doğrudan ölçü taşımak kavramsal hata üretebilir. Dua, tövbe ve Kur’an okuma da tek davranış değildir: dua yöneliş ve istemeyi, tövbe yanlıştan dönmeyi, anlayarak okuma mesajı hayata aktarma sorumluluğunu öne çıkarır. Rum suresindeki doğa ve insan çeşitliliği üzerinde düşünme, gözlemi anlam arayışıyla ilişkilendirir. Gençlik örnekleri ise sorgulama, iffet ve kararlılığın farklı durumlarda nasıl ortaya çıktığını gösterir; yalnız isim ve olay eşleştirmesi kavramsal öğrenmenin yerini tutmaz."
        ],
        "example": {
          "question": "“İnsan da bilir; o hâlde insan bilgisiyle ilahi ilim aynıdır.” çıkarımını incele.",
          "steps": [
            "Ortak sözcük kullanılması kapsam eşitliği sağlamaz.",
            "İnsan bilgisi sınırlı, öğrenmeye ve hataya açıktır.",
            "Dinî kavram bağlamında ilahi ilim farklı nitelikte düşünülür."
          ],
          "answer": "Ad ortaklığı nitelik ve sınırsızlık eşitliği kurmaz.",
          "check": "Kavramın kime ve hangi kapsamda yüklendiği belirlenmelidir."
        },
        "misconceptions": [
          {
            "wrong": "Aynı sıfat adı aynı sınırlılıkta anlam taşır.",
            "correct": "Kavramın kime ve hangi kapsamda yüklendiği belirlenmelidir.",
            "why": "Ortak sözcük kullanılması kapsam eşitliği sağlamaz. İnsan bilgisi sınırlı, öğrenmeye ve hataya açıktır. Dinî kavram bağlamında ilahi ilim farklı nitelikte düşünülür."
          }
        ],
        "reasoningChecks": [
          {
            "question": "İrade sorumlulukla neden ilişkilidir?",
            "answer": "Seçim yapabilme imkânı davranışın değerlendirilmesinde rol oynar.",
            "why": "Kavramın kime ve hangi kapsamda yüklendiği belirlenmelidir."
          }
        ]
      },
      {
        "title": "Dua, tövbe, vahiy ve gençlik örnekleri",
        "source": {
          "book": "TYT-din",
          "pages": [
            41,
            42,
            43,
            44,
            45,
            46
          ]
        },
        "explanation": [
          "İnsanın Allah’la irtibatı dua, ibadet, tövbe ve Kur’an’ı anlayarak okuma gibi yollarla ele alınır. Dua çabayı bırakmanın gerekçesi değildir; tövbe yalnız sözlü pişmanlık değil yanlış davranıştan dönmeye yönelmedir. Rum suresinin mesajlarında yaratılış ve doğa olayları üzerinde düşünme vurgusu bulunur. Kur’an’daki gençlik örnekleri İbrahim’in sorgulaması, Yusuf’un ahlaki tutumu ve Ashab-ı Kehf’in inanç kararlılığı gibi farklı yönleriyle incelenir.",
          "Tövbe ile yalnız pişmanlık sözünü birbirinden ayırmak davranışın yönünü gösterir. Kişi yaptığı yanlışı kabul edip onu bırakmaya yöneliyorsa dönüş iradesi vardır; aynı zararı sürdürürken yalnız sözcükleri tekrarlamak bu değişimi tek başına göstermez. Kur’an okuma da kaynakta anlamayı ve öğüdü hayata aktarmayı içeren yönüyle ele alınır. Rum suresinin doğa ve insan hayatına ilişkin örnekleri düşünme ve ibret bağlantısı kurarken gençlik anlatıları farklı erdemleri somutlaştırır. İbrahim’in sorgulamasıyla Yusuf’un ahlaki tutumu aynı olay değildir; ortak gençlik teması farklı problem ve davranışları birleştirir. Bir örneği yeni duruma uygularken hangi değer ve ilişkinin benzer olduğu açıkça açıklanmalıdır."
        ],
        "example": {
          "question": "Sınava hazırlanmayıp yalnız dua eden öğrenciye ders çerçevesinde hangi ayrım açıklanır?",
          "steps": [
            "İstek ve yöneliş dua boyutudur.",
            "Üzerine düşen sorumluluğu yerine getirmek çaba boyutudur.",
            "Tevekkül bu çabayı bütünüyle terk etmek değildir."
          ],
          "answer": "Dua ve sorumlu çaba birlikte düşünülmelidir.",
          "check": "İnsanın yapabileceği çabayı göstermesiyle sonuç karşısındaki güven ayrılmalıdır."
        },
        "misconceptions": [
          {
            "wrong": "Tevekkül hiçbir önlem almadan sonucu beklemektir.",
            "correct": "İnsanın yapabileceği çabayı göstermesiyle sonuç karşısındaki güven ayrılmalıdır.",
            "why": "İstek ve yöneliş dua boyutudur. Üzerine düşen sorumluluğu yerine getirmek çaba boyutudur. Tevekkül bu çabayı bütünüyle terk etmek değildir."
          }
        ],
        "reasoningChecks": [
          {
            "question": "Gençlik örneklerinin ortak olması bütün hikâyelerin aynı mesajı taşıdığı anlamına gelir mi?",
            "answer": "Hayır; sorgulama, iffet, sabır ve kararlılık gibi ayrı boyutlar vardır.",
            "why": "İnsanın yapabileceği çabayı göstermesiyle sonuç karşısındaki güven ayrılmalıdır."
          }
        ]
      }
    ],
    "connections": [
      {
        "concept": "İnanç, isim-sıfat ve insanın sorumluluğu",
        "why": "Kavramın kime ve hangi kapsamda yüklendiği belirlenmelidir."
      },
      {
        "concept": "Dua, tövbe, vahiy ve gençlik örnekleri",
        "why": "İnsanın yapabileceği çabayı göstermesiyle sonuç karşısındaki güven ayrılmalıdır."
      }
    ],
    "authorship": "Özgün öğretmen anlatımı ve özgün çözümleme örnekleri; kaynak sayfaları MEBİ kitabına yöneliktir."
  }
});
