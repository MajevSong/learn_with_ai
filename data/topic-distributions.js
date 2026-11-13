/* User-provided historical tables, visually verified. Not an official 2027 blueprint. */
window.TOPIC_DISTRIBUTIONS = {
  "version": 1,
  "targetExamYear": 2027,
  "years": [
    2018,
    2019,
    2020,
    2021,
    2022,
    2023,
    2024,
    2025
  ],
  "sources": {
    "tyt": {
      "id": "tyt",
      "fileName": "TYT_konu_dagilimi.pdf",
      "title": "TYT Yıllara Göre Soru Dağılımı (2018–2025)",
      "author": "Psikolojik Danışman N. Gizem TOKER",
      "pageCount": 6,
      "sha256": "e9052f22805996c1f6ccc2ffc6b845a75a4fbf1d8bc31663595c4832eb1e09a9",
      "kind": "user-provided-historical-table",
      "officialExamBlueprint": false,
      "note": "Kullanıcının sağladığı geçmiş yıllara ait derleme; resmî ÖSYM/MEB 2027 konu listesi veya soru tahmini değildir."
    },
    "ayt": {
      "id": "ayt",
      "fileName": "AYT_konu_dagilimi.pdf",
      "title": "AYT Yıllara Göre Soru Dağılımı (2018–2025)",
      "author": "Psikolojik Danışman N. Gizem TOKER",
      "pageCount": 5,
      "sha256": "726ad500ef6d6b0a0d19b847a326a5827db79a31d6bada89d6ee16274bc0f1a9",
      "kind": "user-provided-historical-table",
      "officialExamBlueprint": false,
      "note": "Kullanıcının sağladığı geçmiş yıllara ait derleme; resmî ÖSYM/MEB 2027 konu listesi veya soru tahmini değildir."
    }
  },
  "source": {
    "title": "Kullanıcının sağladığı TYT ve AYT tarihsel dağılım PDF’leri",
    "author": "Psikolojik Danışman N. Gizem TOKER",
    "officialExamBlueprint": false,
    "purpose": "Geçmiş soru yoğunluğu ve çalışma kapsamı denetimi",
    "interpretation": "2018–2025 gözlemleri 2027’de soru çıkacağına, çıkmayacağına veya belirli sayıda çıkacağına ilişkin tahmin değildir. Bütün gerekli konular çalışılır.",
    "dashPolicy": "PDF’lerde basılı açıklama anahtarı bulunmuyor. Sayısal toplamlarla uyumlu yaygın kullanım nedeniyle tire, görüntüleme için gözlenen soru yok (0) olarak işlendi; orijinal işaret her hücrenin rawCounts alanında korundu. Bu yorum boş hücrelere uygulanmadı.",
    "blankPolicy": "Kaynakta boş olan hücre, bulunmayan yıl sütunu ve boş/tireli toplam null olarak korundu; toplamdan eksik değer üretilmedi.",
    "rawHistoryPolicy": "Kaynağın satır/yıl toplamları değiştirilmedi. Yeniden hesaplanan uyuşmazlıklar issues içinde listelenmiştir.",
    "scope": "Sayısal öğrenci: TYT Türkçe, sosyal, matematik, geometri ve fen; AYT matematik, geometri ve fen. AYT edebiyat/sosyal çalışma kapsamı dışıdır; sağlanan AYT PDF’sinde bu derslere ait tablo yoktur."
  },
  "tables": [
    {
      "id": "tyt-turkce",
      "exam": "TYT",
      "subject": "turkce",
      "label": "TYT Türkçe",
      "sourceId": "tyt",
      "inScope": true,
      "page": 1,
      "pages": [
        1
      ],
      "reportedYearTotals": [
        40,
        40,
        40,
        40,
        40,
        40,
        40,
        40
      ],
      "rows": [
        {
          "id": "tyt-turkce-01",
          "title": "Ses Bilgisi",
          "counts": [
            3,
            1,
            0,
            1,
            0,
            1,
            0,
            0
          ],
          "rawCounts": [
            "3",
            "1",
            "-",
            "1",
            "-",
            "1",
            "-",
            "-"
          ],
          "reportedTotal": 6,
          "rawTotal": "6",
          "lessonIds": [
            "tur-07"
          ],
          "bookSections": [
            {
              "lessonId": "tur-07",
              "sectionIndex": 0,
              "title": "Ses Bilgisi 1",
              "book": "TYT-tur",
              "pages": [
                36,
                37
              ]
            },
            {
              "lessonId": "tur-07",
              "sectionIndex": 1,
              "title": "Ses Bilgisi 2",
              "book": "TYT-tur",
              "pages": [
                38
              ]
            }
          ],
          "coverage": "covered",
          "page": 1
        },
        {
          "id": "tyt-turkce-02",
          "title": "Dil Bilgisi",
          "counts": [
            1,
            8,
            3,
            2,
            3,
            2,
            3,
            3
          ],
          "rawCounts": [
            "1",
            "8",
            "3",
            "2",
            "3",
            "2",
            "3",
            "3"
          ],
          "reportedTotal": 25,
          "rawTotal": "25",
          "lessonIds": [
            "tur-10",
            "tur-11",
            "tur-12",
            "tur-13",
            "tur-14",
            "tur-15",
            "tur-16",
            "tur-17",
            "tur-18",
            "tur-19"
          ],
          "bookSections": [
            {
              "lessonId": "tur-10",
              "sectionIndex": 0,
              "title": "Biçim Bilgisi 1",
              "book": "TYT-tur",
              "pages": [
                67,
                68,
                69,
                70,
                71,
                72
              ]
            },
            {
              "lessonId": "tur-10",
              "sectionIndex": 1,
              "title": "Biçim Bilgisi 2",
              "book": "TYT-tur",
              "pages": [
                73,
                74,
                75
              ]
            },
            {
              "lessonId": "tur-11",
              "sectionIndex": 0,
              "title": "İsim",
              "book": "TYT-tur",
              "pages": [
                76,
                77,
                78
              ]
            },
            {
              "lessonId": "tur-11",
              "sectionIndex": 1,
              "title": "Sıfat",
              "book": "TYT-tur",
              "pages": [
                79,
                80,
                81,
                82
              ]
            },
            {
              "lessonId": "tur-12",
              "sectionIndex": 0,
              "title": "Zamir",
              "book": "TYT-tur",
              "pages": [
                83,
                84,
                85,
                86,
                87
              ]
            },
            {
              "lessonId": "tur-12",
              "sectionIndex": 1,
              "title": "Zarf",
              "book": "TYT-tur",
              "pages": [
                91,
                92,
                93,
                94
              ]
            },
            {
              "lessonId": "tur-13",
              "sectionIndex": 0,
              "title": "Edat, Bağlaç, Ünlem",
              "book": "TYT-tur",
              "pages": [
                95,
                96,
                97,
                98
              ]
            },
            {
              "lessonId": "tur-14",
              "sectionIndex": 0,
              "title": "Fiilde Kip",
              "book": "TYT-tur",
              "pages": [
                99,
                100
              ]
            },
            {
              "lessonId": "tur-14",
              "sectionIndex": 1,
              "title": "Ek-Fiil",
              "book": "TYT-tur",
              "pages": [
                101,
                102
              ]
            },
            {
              "lessonId": "tur-15",
              "sectionIndex": 0,
              "title": "Fiilde Yapı",
              "book": "TYT-tur",
              "pages": [
                103,
                104
              ]
            },
            {
              "lessonId": "tur-15",
              "sectionIndex": 1,
              "title": "Fiilimsiler",
              "book": "TYT-tur",
              "pages": [
                105,
                106,
                107
              ]
            },
            {
              "lessonId": "tur-16",
              "sectionIndex": 0,
              "title": "Fiilde Çatı",
              "book": "TYT-tur",
              "pages": [
                108,
                109,
                110,
                111
              ]
            },
            {
              "lessonId": "tur-17",
              "sectionIndex": 0,
              "title": "Cümlenin Ögeleri",
              "book": "TYT-tur",
              "pages": [
                112,
                113,
                114,
                115
              ]
            },
            {
              "lessonId": "tur-18",
              "sectionIndex": 0,
              "title": "İsim ve Sıfat Tamlamaları",
              "book": "TYT-tur",
              "pages": [
                88,
                89,
                90
              ]
            },
            {
              "lessonId": "tur-19",
              "sectionIndex": 0,
              "title": "Cümle Türleri",
              "book": "TYT-tur",
              "pages": [
                116,
                117,
                118
              ]
            }
          ],
          "coverage": "grouped",
          "page": 1
        },
        {
          "id": "tyt-turkce-03",
          "title": "Noktalama İşaretleri",
          "counts": [
            1,
            1,
            2,
            2,
            2,
            2,
            2,
            2
          ],
          "rawCounts": [
            "1",
            "1",
            "2",
            "2",
            "2",
            "2",
            "2",
            "2"
          ],
          "reportedTotal": 14,
          "rawTotal": "14",
          "lessonIds": [
            "tur-09"
          ],
          "bookSections": [
            {
              "lessonId": "tur-09",
              "sectionIndex": 0,
              "title": "Noktalama İşaretleri 1",
              "book": "TYT-tur",
              "pages": [
                55,
                56,
                57,
                58
              ]
            },
            {
              "lessonId": "tur-09",
              "sectionIndex": 1,
              "title": "Noktalama İşaretleri 2",
              "book": "TYT-tur",
              "pages": [
                59,
                60,
                61,
                62
              ]
            },
            {
              "lessonId": "tur-09",
              "sectionIndex": 2,
              "title": "Noktalama İşaretleri 3",
              "book": "TYT-tur",
              "pages": [
                63,
                64,
                65,
                66
              ]
            }
          ],
          "coverage": "covered",
          "page": 1
        },
        {
          "id": "tyt-turkce-04",
          "title": "Yazım Kuralları",
          "counts": [
            2,
            2,
            2,
            2,
            2,
            2,
            2,
            2
          ],
          "rawCounts": [
            "2",
            "2",
            "2",
            "2",
            "2",
            "2",
            "2",
            "2"
          ],
          "reportedTotal": 16,
          "rawTotal": "16",
          "lessonIds": [
            "tur-08"
          ],
          "bookSections": [
            {
              "lessonId": "tur-08",
              "sectionIndex": 0,
              "title": "Yazım Kuralları 1",
              "book": "TYT-tur",
              "pages": [
                39,
                40,
                41,
                42,
                43,
                44,
                45
              ]
            },
            {
              "lessonId": "tur-08",
              "sectionIndex": 1,
              "title": "Yazım Kuralları 2",
              "book": "TYT-tur",
              "pages": [
                46,
                47,
                48,
                49
              ]
            },
            {
              "lessonId": "tur-08",
              "sectionIndex": 2,
              "title": "Yazım Kuralları 3",
              "book": "TYT-tur",
              "pages": [
                50,
                51,
                52,
                53,
                54
              ]
            }
          ],
          "coverage": "covered",
          "page": 1
        },
        {
          "id": "tyt-turkce-05",
          "title": "Anlatım Bozukluğu",
          "counts": [
            1,
            0,
            0,
            0,
            0,
            0,
            0,
            0
          ],
          "rawCounts": [
            "1",
            "-",
            "-",
            "-",
            "-",
            "-",
            "-",
            "-"
          ],
          "reportedTotal": 1,
          "rawTotal": "1",
          "lessonIds": [
            "tur-20"
          ],
          "bookSections": [
            {
              "lessonId": "tur-20",
              "sectionIndex": 0,
              "title": "Anlatım Bozuklukları 1",
              "book": "TYT-tur",
              "pages": [
                119,
                120,
                121
              ]
            },
            {
              "lessonId": "tur-20",
              "sectionIndex": 1,
              "title": "Anlatım Bozuklukları 2",
              "book": "TYT-tur",
              "pages": [
                122,
                123,
                124,
                125,
                126
              ]
            }
          ],
          "coverage": "covered",
          "page": 1
        },
        {
          "id": "tyt-turkce-06",
          "title": "Paragraf",
          "counts": [
            22,
            22,
            26,
            25,
            26,
            26,
            26,
            26
          ],
          "rawCounts": [
            "22",
            "22",
            "26",
            "25",
            "26",
            "26",
            "26",
            "26"
          ],
          "reportedTotal": 199,
          "rawTotal": "199",
          "lessonIds": [
            "tur-04",
            "tur-05",
            "tur-06"
          ],
          "bookSections": [
            {
              "lessonId": "tur-04",
              "sectionIndex": 0,
              "title": "Paragrafta Anlam 1",
              "book": "TYT-tur",
              "pages": [
                22,
                23,
                24,
                25
              ]
            },
            {
              "lessonId": "tur-04",
              "sectionIndex": 1,
              "title": "Paragrafta Anlam 2",
              "book": "TYT-tur",
              "pages": [
                26,
                27,
                28,
                29,
                30
              ]
            },
            {
              "lessonId": "tur-04",
              "sectionIndex": 2,
              "title": "Paragrafta Anlam 3",
              "book": "TYT-tur",
              "pages": [
                31,
                32
              ]
            },
            {
              "lessonId": "tur-05",
              "sectionIndex": 0,
              "title": "Paragrafın Yapısı",
              "book": "TYT-tur",
              "pages": [
                33,
                34,
                35
              ]
            },
            {
              "lessonId": "tur-06",
              "sectionIndex": 0,
              "title": "Paragrafta Anlam 1",
              "book": "TYT-tur",
              "pages": [
                22,
                23,
                24,
                25
              ]
            },
            {
              "lessonId": "tur-06",
              "sectionIndex": 1,
              "title": "Paragrafta Anlam 2",
              "book": "TYT-tur",
              "pages": [
                26,
                27,
                28,
                29,
                30
              ]
            }
          ],
          "coverage": "grouped",
          "page": 1
        },
        {
          "id": "tyt-turkce-07",
          "title": "Cümlede Anlam",
          "counts": [
            7,
            3,
            6,
            3,
            3,
            4,
            3,
            3
          ],
          "rawCounts": [
            "7",
            "3",
            "6",
            "3",
            "3",
            "4",
            "3",
            "3"
          ],
          "reportedTotal": 32,
          "rawTotal": "32",
          "lessonIds": [
            "tur-03"
          ],
          "bookSections": [
            {
              "lessonId": "tur-03",
              "sectionIndex": 0,
              "title": "Cümlede Anlam 1",
              "book": "TYT-tur",
              "pages": [
                15,
                16
              ]
            },
            {
              "lessonId": "tur-03",
              "sectionIndex": 1,
              "title": "Cümlede Anlam 2",
              "book": "TYT-tur",
              "pages": [
                17,
                18
              ]
            },
            {
              "lessonId": "tur-03",
              "sectionIndex": 2,
              "title": "Cümlede Anlam 3",
              "book": "TYT-tur",
              "pages": [
                19,
                20,
                21
              ]
            }
          ],
          "coverage": "covered",
          "page": 1
        },
        {
          "id": "tyt-turkce-08",
          "title": "Sözcükte Anlam",
          "counts": [
            3,
            3,
            1,
            5,
            4,
            3,
            4,
            4
          ],
          "rawCounts": [
            "3",
            "3",
            "1",
            "5",
            "4",
            "3",
            "4",
            "4"
          ],
          "reportedTotal": 27,
          "rawTotal": "27",
          "lessonIds": [
            "tur-01",
            "tur-02"
          ],
          "bookSections": [
            {
              "lessonId": "tur-01",
              "sectionIndex": 0,
              "title": "Sözcükte Anlam 1",
              "book": "TYT-tur",
              "pages": [
                9
              ]
            },
            {
              "lessonId": "tur-02",
              "sectionIndex": 0,
              "title": "Sözcükte Anlam 2",
              "book": "TYT-tur",
              "pages": [
                10,
                11
              ]
            },
            {
              "lessonId": "tur-02",
              "sectionIndex": 1,
              "title": "Sözcükte Anlam 3",
              "book": "TYT-tur",
              "pages": [
                12,
                13
              ]
            },
            {
              "lessonId": "tur-02",
              "sectionIndex": 2,
              "title": "Sözcükte Anlam 4",
              "book": "TYT-tur",
              "pages": [
                14
              ]
            }
          ],
          "coverage": "grouped",
          "page": 1
        }
      ],
      "notes": [],
      "issues": []
    },
    {
      "id": "tyt-geometri",
      "exam": "TYT",
      "subject": "matematik",
      "topicArea": "geometri",
      "label": "TYT Geometri",
      "sourceId": "tyt",
      "inScope": true,
      "page": 1,
      "pages": [
        1
      ],
      "reportedYearTotals": [
        11,
        10,
        10,
        10,
        10,
        10,
        10,
        10
      ],
      "rows": [
        {
          "id": "tyt-geometri-01",
          "title": "Grafik Okuma",
          "counts": [
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0
          ],
          "rawCounts": [
            "-",
            "-",
            "-",
            "-",
            "-",
            "-",
            "-",
            "-"
          ],
          "reportedTotal": null,
          "rawTotal": "",
          "lessonIds": [
            "mat-tyt-23"
          ],
          "bookSections": [
            {
              "lessonId": "mat-tyt-23",
              "sectionIndex": 0,
              "title": "Veri ve Merkezi Eğilim/Yayılım Ölçüleri",
              "book": "TYT-mat",
              "pages": [
                107,
                108
              ]
            },
            {
              "lessonId": "mat-tyt-23",
              "sectionIndex": 1,
              "title": "Histogram ve Grafik Çeşitleri",
              "book": "TYT-mat",
              "pages": [
                109,
                110
              ]
            }
          ],
          "coverage": "covered",
          "note": "Kaynakta tamamı tireli satır; konu, veri ve grafik okuma dersiyle eşlendi. Tarihsel sıfır, 2027 kapsamından çıkarma gerekçesi değildir.",
          "page": 1
        },
        {
          "id": "tyt-geometri-02",
          "title": "Analitik Geometri",
          "counts": [
            1,
            1,
            0,
            1,
            1,
            0,
            0,
            0
          ],
          "rawCounts": [
            "1",
            "1",
            "-",
            "1",
            "1",
            "-",
            "-",
            "-"
          ],
          "reportedTotal": 4,
          "rawTotal": "4",
          "lessonIds": [
            "mat-ayt-geo-01"
          ],
          "bookSections": [
            {
              "lessonId": "mat-ayt-geo-01",
              "sectionIndex": 0,
              "title": "Analitik düzlem; iki nokta arası uzaklık",
              "book": "AYT-mat",
              "pages": [
                99,
                100
              ]
            },
            {
              "lessonId": "mat-ayt-geo-01",
              "sectionIndex": 1,
              "title": "İçten ve dıştan bölme; orta nokta ve ağırlık merkezi",
              "book": "AYT-mat",
              "pages": [
                101,
                102
              ]
            },
            {
              "lessonId": "mat-ayt-geo-01",
              "sectionIndex": 2,
              "title": "Doğrunun eğimi; özel doğru denklemleri",
              "book": "AYT-mat",
              "pages": [
                103,
                104,
                105
              ]
            },
            {
              "lessonId": "mat-ayt-geo-01",
              "sectionIndex": 3,
              "title": "Doğrunun grafiği, doğruların durumları ve uzaklık",
              "book": "AYT-mat",
              "pages": [
                106,
                107,
                108
              ]
            }
          ],
          "coverage": "cross-exam",
          "note": "Ortak geometri bilgisi mevcut AYT etiketli derste bulunuyor; TYT çalışma yolu bu derse de erişmelidir.",
          "page": 1
        },
        {
          "id": "tyt-geometri-03",
          "title": "Çember-Daire",
          "counts": [
            1,
            2,
            0,
            0,
            0,
            0,
            0,
            0
          ],
          "rawCounts": [
            "1",
            "2",
            "-",
            "-",
            "-",
            "-",
            "-",
            "-"
          ],
          "reportedTotal": 3,
          "rawTotal": "3",
          "lessonIds": [
            "mat-ayt-geo-03",
            "mat-ayt-geo-04"
          ],
          "bookSections": [
            {
              "lessonId": "mat-ayt-geo-03",
              "sectionIndex": 0,
              "title": "Çember ve daire; çemberin temel elemanları",
              "book": "AYT-mat",
              "pages": [
                115,
                116,
                117
              ]
            },
            {
              "lessonId": "mat-ayt-geo-03",
              "sectionIndex": 1,
              "title": "Çemberde kiriş özellikleri; merkez açı ve çevre açı",
              "book": "AYT-mat",
              "pages": [
                118,
                119
              ]
            },
            {
              "lessonId": "mat-ayt-geo-03",
              "sectionIndex": 2,
              "title": "Çemberde teğet-kiriş açı ve iç-dış açı",
              "book": "AYT-mat",
              "pages": [
                120,
                121
              ]
            },
            {
              "lessonId": "mat-ayt-geo-04",
              "sectionIndex": 0,
              "title": "Çemberde teğet; çevrel, iç teğet ve dış teğet çember",
              "book": "AYT-mat",
              "pages": [
                122,
                123
              ]
            },
            {
              "lessonId": "mat-ayt-geo-04",
              "sectionIndex": 1,
              "title": "Dairenin ve daire diliminin çevresi ve alanı",
              "book": "AYT-mat",
              "pages": [
                124,
                125
              ]
            }
          ],
          "coverage": "cross-exam",
          "note": "Ortak geometri bilgisi mevcut AYT etiketli derslerde bulunuyor; TYT çalışma yolu bu derslere de erişmelidir.",
          "page": 1
        },
        {
          "id": "tyt-geometri-04",
          "title": "Katı Cisimler",
          "counts": [
            1,
            2,
            2,
            2,
            2,
            2,
            2,
            2
          ],
          "rawCounts": [
            "1",
            "2",
            "2",
            "2",
            "2",
            "2",
            "2",
            "2"
          ],
          "reportedTotal": 15,
          "rawTotal": "15",
          "lessonIds": [
            "mat-tyt-geo-11",
            "mat-ayt-geo-06"
          ],
          "bookSections": [
            {
              "lessonId": "mat-tyt-geo-11",
              "sectionIndex": 0,
              "title": "Dik prizmalar; ayrıt ve yüzey sayıları",
              "book": "TYT-mat",
              "pages": [
                152,
                153
              ]
            },
            {
              "lessonId": "mat-tyt-geo-11",
              "sectionIndex": 1,
              "title": "Küp ve küpün açınımları",
              "book": "TYT-mat",
              "pages": [
                154
              ]
            },
            {
              "lessonId": "mat-tyt-geo-11",
              "sectionIndex": 2,
              "title": "Dik piramit; düzgün dört yüzlü ve hacim",
              "book": "TYT-mat",
              "pages": [
                155,
                156
              ]
            },
            {
              "lessonId": "mat-ayt-geo-06",
              "sectionIndex": 0,
              "title": "Dik dairesel silindirde uzunluk ve alan",
              "book": "AYT-mat",
              "pages": [
                131,
                132,
                133
              ]
            },
            {
              "lessonId": "mat-ayt-geo-06",
              "sectionIndex": 1,
              "title": "Silindirin hacmi; dik dairesel konide uzunluk ve alan",
              "book": "AYT-mat",
              "pages": [
                134,
                135
              ]
            },
            {
              "lessonId": "mat-ayt-geo-06",
              "sectionIndex": 2,
              "title": "Dik dairesel konide hacim; kürede uzunluk, alan ve hacim",
              "book": "AYT-mat",
              "pages": [
                136,
                137
              ]
            }
          ],
          "coverage": "cross-exam",
          "note": "Prizma ve piramit TYT, dönel cisimler mevcut AYT etiketli derste; gerekli şekil türü kaynak kitaptan seçilir.",
          "page": 1
        },
        {
          "id": "tyt-geometri-05",
          "title": "Yamuk",
          "counts": [
            1,
            0,
            2,
            0,
            0,
            1,
            1,
            1
          ],
          "rawCounts": [
            "1",
            "-",
            "2",
            "-",
            "-",
            "1",
            "1",
            "1"
          ],
          "reportedTotal": 6,
          "rawTotal": "6",
          "lessonIds": [
            "mat-tyt-geo-08"
          ],
          "bookSections": [
            {
              "lessonId": "mat-tyt-geo-08",
              "sectionIndex": 1,
              "title": "Özel dörtgenler; yamuk ve özellikleri",
              "book": "TYT-mat",
              "pages": [
                141
              ]
            },
            {
              "lessonId": "mat-tyt-geo-08",
              "sectionIndex": 2,
              "title": "Yamuğun alanı; ikizkenar ve dik yamuk",
              "book": "TYT-mat",
              "pages": [
                142,
                143
              ]
            }
          ],
          "coverage": "grouped",
          "page": 1
        },
        {
          "id": "tyt-geometri-06",
          "title": "Çokgenler",
          "counts": [
            1,
            1,
            1,
            1,
            1,
            1,
            1,
            1
          ],
          "rawCounts": [
            "1",
            "1",
            "1",
            "1",
            "1",
            "1",
            "1",
            "1"
          ],
          "reportedTotal": 8,
          "rawTotal": "8",
          "lessonIds": [
            "mat-tyt-geo-08"
          ],
          "bookSections": [
            {
              "lessonId": "mat-tyt-geo-08",
              "sectionIndex": 0,
              "title": "Çokgenler; dörtgenler ve özellikleri",
              "book": "TYT-mat",
              "pages": [
                139,
                140
              ]
            }
          ],
          "coverage": "grouped",
          "page": 1
        },
        {
          "id": "tyt-geometri-07",
          "title": "Açılar ve Üçgenler",
          "counts": [
            3,
            1,
            2,
            4,
            4,
            5,
            5,
            4
          ],
          "rawCounts": [
            "3",
            "1",
            "2",
            "4",
            "4",
            "5",
            "5",
            "4"
          ],
          "reportedTotal": 28,
          "rawTotal": "28",
          "lessonIds": [
            "mat-tyt-geo-01",
            "mat-tyt-geo-02",
            "mat-tyt-geo-03",
            "mat-tyt-geo-04",
            "mat-tyt-geo-05",
            "mat-tyt-geo-06",
            "mat-tyt-geo-07"
          ],
          "bookSections": [
            {
              "lessonId": "mat-tyt-geo-01",
              "sectionIndex": 0,
              "title": "Açı kavramı ve çeşitleri",
              "book": "TYT-mat",
              "pages": [
                111,
                112
              ]
            },
            {
              "lessonId": "mat-tyt-geo-01",
              "sectionIndex": 1,
              "title": "Paralel iki doğrunun bir kesenle yaptığı açılar",
              "book": "TYT-mat",
              "pages": [
                113
              ]
            },
            {
              "lessonId": "mat-tyt-geo-02",
              "sectionIndex": 0,
              "title": "Üçgende açılar; ikizkenar ve eşkenar üçgende açı özellikleri",
              "book": "TYT-mat",
              "pages": [
                114,
                115
              ]
            },
            {
              "lessonId": "mat-tyt-geo-02",
              "sectionIndex": 1,
              "title": "Üçgende açı-kenar bağıntıları; üçgen eşitsizliği",
              "book": "TYT-mat",
              "pages": [
                116,
                117
              ]
            },
            {
              "lessonId": "mat-tyt-geo-03",
              "sectionIndex": 0,
              "title": "Üçgenlerde eşlik",
              "book": "TYT-mat",
              "pages": [
                118,
                119
              ]
            },
            {
              "lessonId": "mat-tyt-geo-03",
              "sectionIndex": 1,
              "title": "Üçgenlerde benzerlik",
              "book": "TYT-mat",
              "pages": [
                120,
                121
              ]
            },
            {
              "lessonId": "mat-tyt-geo-03",
              "sectionIndex": 2,
              "title": "Üçgenlerde temel benzerlik ve benzerlik uygulamaları",
              "book": "TYT-mat",
              "pages": [
                122,
                123
              ]
            },
            {
              "lessonId": "mat-tyt-geo-04",
              "sectionIndex": 0,
              "title": "Açıortay ve özellikleri; üçgende dış açıortay",
              "book": "TYT-mat",
              "pages": [
                124,
                125
              ]
            },
            {
              "lessonId": "mat-tyt-geo-04",
              "sectionIndex": 1,
              "title": "İç ve dış açıortay teoremi; katlama uygulaması",
              "book": "TYT-mat",
              "pages": [
                126,
                127
              ]
            },
            {
              "lessonId": "mat-tyt-geo-05",
              "sectionIndex": 0,
              "title": "Üçgende kenarortay",
              "book": "TYT-mat",
              "pages": [
                128
              ]
            },
            {
              "lessonId": "mat-tyt-geo-05",
              "sectionIndex": 1,
              "title": "Üçgende yükseklik; ikizkenar ve eşkenar üçgende yükseklik",
              "book": "TYT-mat",
              "pages": [
                129,
                130
              ]
            },
            {
              "lessonId": "mat-tyt-geo-05",
              "sectionIndex": 2,
              "title": "Üçgende kenar orta dikme",
              "book": "TYT-mat",
              "pages": [
                131
              ]
            },
            {
              "lessonId": "mat-tyt-geo-06",
              "sectionIndex": 0,
              "title": "Dik üçgende Pisagor teoremi",
              "book": "TYT-mat",
              "pages": [
                132
              ]
            },
            {
              "lessonId": "mat-tyt-geo-06",
              "sectionIndex": 1,
              "title": "Öklidin çalışmaları; üçgende Öklid teoremi",
              "book": "TYT-mat",
              "pages": [
                133
              ]
            },
            {
              "lessonId": "mat-tyt-geo-06",
              "sectionIndex": 2,
              "title": "Trigonometrik oranlar; 30°, 45°, 60°nin oranları",
              "book": "TYT-mat",
              "pages": [
                134,
                135
              ]
            },
            {
              "lessonId": "mat-tyt-geo-06",
              "sectionIndex": 3,
              "title": "Birim çember",
              "book": "TYT-mat",
              "pages": [
                136
              ]
            },
            {
              "lessonId": "mat-tyt-geo-07",
              "sectionIndex": 0,
              "title": "Üçgende alan",
              "book": "TYT-mat",
              "pages": [
                137
              ]
            },
            {
              "lessonId": "mat-tyt-geo-07",
              "sectionIndex": 1,
              "title": "Üçgende alan uygulamaları",
              "book": "TYT-mat",
              "pages": [
                138
              ]
            }
          ],
          "coverage": "grouped",
          "page": 1
        },
        {
          "id": "tyt-geometri-08",
          "title": "Eşkenar Dörtgen",
          "counts": [
            0,
            0,
            0,
            1,
            1,
            0,
            0,
            0
          ],
          "rawCounts": [
            "-",
            "-",
            "-",
            "1",
            "1",
            "-",
            "-",
            "0"
          ],
          "reportedTotal": 2,
          "rawTotal": "2",
          "lessonIds": [
            "mat-tyt-geo-09"
          ],
          "bookSections": [
            {
              "lessonId": "mat-tyt-geo-09",
              "sectionIndex": 2,
              "title": "Eşkenar dörtgen",
              "book": "TYT-mat",
              "pages": [
                147
              ]
            }
          ],
          "coverage": "grouped",
          "note": "2025 hücresi kaynakta açıkça 0; tire ile karıştırılmadı.",
          "page": 1
        },
        {
          "id": "tyt-geometri-09",
          "title": "Kare",
          "counts": [
            1,
            1,
            1,
            0,
            0,
            0,
            0,
            1
          ],
          "rawCounts": [
            "1",
            "1",
            "1",
            "-",
            "-",
            "-",
            "-",
            "1"
          ],
          "reportedTotal": 4,
          "rawTotal": "4",
          "lessonIds": [
            "mat-tyt-geo-10"
          ],
          "bookSections": [
            {
              "lessonId": "mat-tyt-geo-10",
              "sectionIndex": 1,
              "title": "Kare",
              "book": "TYT-mat",
              "pages": [
                150
              ]
            }
          ],
          "coverage": "grouped",
          "page": 1
        },
        {
          "id": "tyt-geometri-10",
          "title": "Dikdörtgen",
          "counts": [
            2,
            2,
            2,
            1,
            1,
            1,
            1,
            1
          ],
          "rawCounts": [
            "2",
            "2",
            "2",
            "1",
            "1",
            "1",
            "1",
            "1"
          ],
          "reportedTotal": 11,
          "rawTotal": "11",
          "lessonIds": [
            "mat-tyt-geo-10"
          ],
          "bookSections": [
            {
              "lessonId": "mat-tyt-geo-10",
              "sectionIndex": 0,
              "title": "Dikdörtgende açı, uzunluk ve alan",
              "book": "TYT-mat",
              "pages": [
                148,
                149
              ]
            }
          ],
          "coverage": "grouped",
          "page": 1
        }
      ],
      "notes": [
        "Bazı ortak ön koşullar farklı sınav etiketi taşıyan mevcut derslere bağlıdır. Eşleşme içerik erişimi içindir; 2027 resmî sınav kapsamı ilanı değildir."
      ],
      "issues": []
    },
    {
      "id": "tyt-matematik",
      "exam": "TYT",
      "subject": "matematik",
      "label": "TYT Matematik",
      "sourceId": "tyt",
      "inScope": true,
      "page": 2,
      "pages": [
        2
      ],
      "reportedYearTotals": [
        29,
        29,
        30,
        30,
        30,
        30,
        30,
        30
      ],
      "rows": [
        {
          "id": "tyt-matematik-01",
          "title": "Olasılık",
          "counts": [
            2,
            1,
            1,
            1,
            1,
            1,
            1,
            1
          ],
          "rawCounts": [
            "2",
            "1",
            "1",
            "1",
            "1",
            "1",
            "1",
            "1"
          ],
          "reportedTotal": 9,
          "rawTotal": "9",
          "lessonIds": [
            "mat-tyt-18"
          ],
          "bookSections": [
            {
              "lessonId": "mat-tyt-18",
              "sectionIndex": 0,
              "title": "Olasılıkta Temel Kavramlar ve Basit Olaylar",
              "book": "TYT-mat",
              "pages": [
                79,
                80
              ]
            }
          ],
          "coverage": "covered",
          "page": 2
        },
        {
          "id": "tyt-matematik-02",
          "title": "Permütasyon-Kombinasyon",
          "counts": [
            1,
            1,
            2,
            0,
            0,
            1,
            3,
            1
          ],
          "rawCounts": [
            "1",
            "1",
            "2",
            "-",
            "-",
            "1",
            "3",
            "1"
          ],
          "reportedTotal": 9,
          "rawTotal": "9",
          "lessonIds": [
            "mat-tyt-16",
            "mat-tyt-17"
          ],
          "bookSections": [
            {
              "lessonId": "mat-tyt-16",
              "sectionIndex": 0,
              "title": "Saymanın Temel İlkesi ve Faktöriyel",
              "book": "TYT-mat",
              "pages": [
                70,
                71
              ]
            },
            {
              "lessonId": "mat-tyt-16",
              "sectionIndex": 1,
              "title": "Permütasyon ve Tekrarlı Permütasyon",
              "book": "TYT-mat",
              "pages": [
                72,
                73
              ]
            },
            {
              "lessonId": "mat-tyt-17",
              "sectionIndex": 0,
              "title": "Kombinasyon Kavramı ve Problemleri",
              "book": "TYT-mat",
              "pages": [
                74,
                75
              ]
            },
            {
              "lessonId": "mat-tyt-17",
              "sectionIndex": 1,
              "title": "Kombinasyon ve Geometri",
              "book": "TYT-mat",
              "pages": [
                76
              ]
            }
          ],
          "coverage": "grouped",
          "page": 2
        },
        {
          "id": "tyt-matematik-03",
          "title": "Oran-Orantı",
          "counts": [
            0,
            0,
            1,
            1,
            1,
            1,
            null,
            1
          ],
          "rawCounts": [
            "-",
            "-",
            "1",
            "1",
            "1",
            "1",
            "",
            "1"
          ],
          "reportedTotal": 5,
          "rawTotal": "5",
          "lessonIds": [
            "mat-tyt-10"
          ],
          "bookSections": [
            {
              "lessonId": "mat-tyt-10",
              "sectionIndex": 0,
              "title": "Oran-Orantı Kavramı ve Özellikleri",
              "book": "TYT-mat",
              "pages": [
                45
              ]
            },
            {
              "lessonId": "mat-tyt-10",
              "sectionIndex": 1,
              "title": "Oran-Orantı Problemleri",
              "book": "TYT-mat",
              "pages": [
                46
              ]
            }
          ],
          "coverage": "covered",
          "note": "2024 hücresi boş; kaynakta yazılmayan değer toplamdan türetilmedi.",
          "page": 2
        },
        {
          "id": "tyt-matematik-04",
          "title": "Mutlak Değer",
          "counts": [
            1,
            1,
            1,
            1,
            1,
            1,
            2,
            1
          ],
          "rawCounts": [
            "1",
            "1",
            "1",
            "1",
            "1",
            "1",
            "2",
            "1"
          ],
          "reportedTotal": 9,
          "rawTotal": "9",
          "lessonIds": [
            "mat-tyt-07"
          ],
          "bookSections": [
            {
              "lessonId": "mat-tyt-07",
              "sectionIndex": 0,
              "title": "Mutlak Değer Kavramı ve Özellikleri",
              "book": "TYT-mat",
              "pages": [
                36,
                37
              ]
            },
            {
              "lessonId": "mat-tyt-07",
              "sectionIndex": 1,
              "title": "Mutlak Değerli Denklemler ve Eşitsizlikler",
              "book": "TYT-mat",
              "pages": [
                38
              ]
            }
          ],
          "coverage": "covered",
          "page": 2
        },
        {
          "id": "tyt-matematik-05",
          "title": "Modüler Aritmetik",
          "counts": [
            0,
            0,
            0,
            0,
            0,
            0,
            null,
            null
          ],
          "rawCounts": [
            "-",
            "-",
            "-",
            "-",
            "-",
            "-",
            "",
            ""
          ],
          "reportedTotal": 0,
          "rawTotal": "0",
          "lessonIds": [
            "mat-tyt-25"
          ],
          "bookSections": [
            {
              "lessonId": "mat-tyt-25",
              "sectionIndex": 0,
              "title": "Öğretmen eki: aynı kalan sınıfı",
              "book": "TYT-mat",
              "pages": [
                18
              ]
            },
            {
              "lessonId": "mat-tyt-25",
              "sectionIndex": 1,
              "title": "Öğretmen eki: tekrarın başlangıcı ve süresi",
              "book": "TYT-mat",
              "pages": [
                25
              ]
            }
          ],
          "coverage": "covered",
          "note": "Kalan döngüleri ve modüler aritmetik için yeni ek ders bağlandı. 2024–2025 boş hücreleri null; kaynak toplamı 0 korundu. Tarihsel sıfır, 2027 kapsamı çıkarımı değildir.",
          "page": 2
        },
        {
          "id": "tyt-matematik-06",
          "title": "Problemler",
          "counts": [
            11,
            12,
            13,
            13,
            13,
            10,
            11,
            12
          ],
          "rawCounts": [
            "11",
            "12",
            "13",
            "13",
            "13",
            "10",
            "11",
            "12"
          ],
          "reportedTotal": 95,
          "rawTotal": "95",
          "lessonIds": [
            "mat-tyt-11",
            "mat-tyt-12",
            "mat-tyt-13"
          ],
          "bookSections": [
            {
              "lessonId": "mat-tyt-11",
              "sectionIndex": 0,
              "title": "Sayı ve Kesir Problemleri",
              "book": "TYT-mat",
              "pages": [
                47,
                48
              ]
            },
            {
              "lessonId": "mat-tyt-11",
              "sectionIndex": 1,
              "title": "Yaş Problemleri",
              "book": "TYT-mat",
              "pages": [
                49
              ]
            },
            {
              "lessonId": "mat-tyt-12",
              "sectionIndex": 0,
              "title": "İşçi Problemleri",
              "book": "TYT-mat",
              "pages": [
                50
              ]
            },
            {
              "lessonId": "mat-tyt-12",
              "sectionIndex": 1,
              "title": "Yüzde ve Kâr-Zarar Problemleri",
              "book": "TYT-mat",
              "pages": [
                51,
                52
              ]
            },
            {
              "lessonId": "mat-tyt-13",
              "sectionIndex": 0,
              "title": "Karışım ve Hareket Problemleri",
              "book": "TYT-mat",
              "pages": [
                53,
                54
              ]
            },
            {
              "lessonId": "mat-tyt-13",
              "sectionIndex": 1,
              "title": "Rutin Olmayan Problemler",
              "book": "TYT-mat",
              "pages": [
                55
              ]
            }
          ],
          "coverage": "grouped",
          "page": 2
        },
        {
          "id": "tyt-matematik-07",
          "title": "Temel Kavramlar",
          "counts": [
            4,
            1,
            1,
            3,
            3,
            2,
            1,
            3
          ],
          "rawCounts": [
            "4",
            "1",
            "1",
            "3",
            "3",
            "2",
            "1",
            "3"
          ],
          "reportedTotal": 18,
          "rawTotal": "18",
          "lessonIds": [
            "mat-tyt-01"
          ],
          "bookSections": [
            {
              "lessonId": "mat-tyt-01",
              "sectionIndex": 0,
              "title": "Sayı Kümeleri ve Sayı Doğrusu",
              "book": "TYT-mat",
              "pages": [
                9
              ]
            },
            {
              "lessonId": "mat-tyt-01",
              "sectionIndex": 1,
              "title": "Temel İşlemler",
              "book": "TYT-mat",
              "pages": [
                10,
                11
              ]
            },
            {
              "lessonId": "mat-tyt-01",
              "sectionIndex": 2,
              "title": "Tek, Çift, Pozitif ve Negatif Sayılar",
              "book": "TYT-mat",
              "pages": [
                12,
                13,
                14
              ]
            },
            {
              "lessonId": "mat-tyt-01",
              "sectionIndex": 3,
              "title": "Ardışık Sayılar",
              "book": "TYT-mat",
              "pages": [
                15
              ]
            }
          ],
          "coverage": "covered",
          "page": 2
        },
        {
          "id": "tyt-matematik-08",
          "title": "Sayı Basamakları",
          "counts": [
            1,
            2,
            1,
            2,
            1,
            1,
            2,
            1
          ],
          "rawCounts": [
            "1",
            "2",
            "1",
            "2",
            "1",
            "1",
            "2",
            "1"
          ],
          "reportedTotal": 11,
          "rawTotal": "11",
          "lessonIds": [
            "mat-tyt-02"
          ],
          "bookSections": [
            {
              "lessonId": "mat-tyt-02",
              "sectionIndex": 0,
              "title": "Sayı Basamakları",
              "book": "TYT-mat",
              "pages": [
                16
              ]
            }
          ],
          "coverage": "grouped",
          "page": 2
        },
        {
          "id": "tyt-matematik-09",
          "title": "İşlem",
          "counts": [
            0,
            1,
            0,
            0,
            0,
            0,
            null,
            null
          ],
          "rawCounts": [
            "-",
            "1",
            "-",
            "-",
            "-",
            "-",
            "",
            ""
          ],
          "reportedTotal": 1,
          "rawTotal": "1",
          "lessonIds": [
            "mat-tyt-24"
          ],
          "bookSections": [
            {
              "lessonId": "mat-tyt-24",
              "sectionIndex": 0,
              "title": "Öğretmen eki: yeni sembol, verilen tanım",
              "book": "TYT-mat",
              "pages": [
                10,
                11
              ]
            }
          ],
          "coverage": "covered",
          "note": "Özel tanımlı işlem, işlem özellikleri, etkisiz ve ters eleman için yeni ek ders bağlandı. 2024–2025 kaynak hücreleri boş kalır.",
          "page": 2
        },
        {
          "id": "tyt-matematik-10",
          "title": "Kümeler- Kartezyen Çarpım",
          "counts": [
            2,
            2,
            1,
            1,
            1,
            1,
            1,
            1
          ],
          "rawCounts": [
            "2",
            "2",
            "1",
            "1",
            "1",
            "1",
            "1",
            "1"
          ],
          "reportedTotal": 10,
          "rawTotal": "10",
          "lessonIds": [
            "mat-tyt-15"
          ],
          "bookSections": [
            {
              "lessonId": "mat-tyt-15",
              "sectionIndex": 0,
              "title": "Kümelerde Temel Kavramlar ve Alt Küme",
              "book": "TYT-mat",
              "pages": [
                64,
                65
              ]
            },
            {
              "lessonId": "mat-tyt-15",
              "sectionIndex": 1,
              "title": "Kesişim, Birleşim, Fark ve Tümleme",
              "book": "TYT-mat",
              "pages": [
                66,
                67
              ]
            },
            {
              "lessonId": "mat-tyt-15",
              "sectionIndex": 2,
              "title": "Küme Problemleri ve Sıralı İkililer",
              "book": "TYT-mat",
              "pages": [
                68,
                69
              ]
            }
          ],
          "coverage": "covered",
          "page": 2
        },
        {
          "id": "tyt-matematik-11",
          "title": "Mantık",
          "counts": [
            0,
            0,
            0,
            0,
            1,
            1,
            1,
            1
          ],
          "rawCounts": [
            "-",
            "-",
            "-",
            "-",
            "1",
            "1",
            "1",
            "1"
          ],
          "reportedTotal": 4,
          "rawTotal": "4",
          "lessonIds": [
            "mat-tyt-14"
          ],
          "bookSections": [
            {
              "lessonId": "mat-tyt-14",
              "sectionIndex": 0,
              "title": "Önermeler ve Doğruluk Tablosu",
              "book": "TYT-mat",
              "pages": [
                56,
                57
              ]
            },
            {
              "lessonId": "mat-tyt-14",
              "sectionIndex": 1,
              "title": "Bileşik Önermeler ve De Morgan Kuralları",
              "book": "TYT-mat",
              "pages": [
                58,
                59
              ]
            },
            {
              "lessonId": "mat-tyt-14",
              "sectionIndex": 2,
              "title": "Koşullu ve İki Yönlü Koşullu Önerme",
              "book": "TYT-mat",
              "pages": [
                60,
                61
              ]
            },
            {
              "lessonId": "mat-tyt-14",
              "sectionIndex": 3,
              "title": "Niceleyiciler; Tanım, Aksiyom, Teorem ve İspat",
              "book": "TYT-mat",
              "pages": [
                62,
                63
              ]
            }
          ],
          "coverage": "covered",
          "page": 2
        },
        {
          "id": "tyt-matematik-12",
          "title": "Fonksiyonlar",
          "counts": [
            1,
            2,
            2,
            1,
            1,
            1,
            1,
            1
          ],
          "rawCounts": [
            "1",
            "2",
            "2",
            "1",
            "1",
            "1",
            "1",
            "1"
          ],
          "reportedTotal": 10,
          "rawTotal": "10",
          "lessonIds": [
            "mat-tyt-19",
            "mat-tyt-20"
          ],
          "bookSections": [
            {
              "lessonId": "mat-tyt-19",
              "sectionIndex": 0,
              "title": "Fonksiyon Kavramı ve Gösterimi",
              "book": "TYT-mat",
              "pages": [
                81,
                82
              ]
            },
            {
              "lessonId": "mat-tyt-19",
              "sectionIndex": 1,
              "title": "İçine, Örten, Birebir, Birim ve Sabit Fonksiyonlar",
              "book": "TYT-mat",
              "pages": [
                83,
                84
              ]
            },
            {
              "lessonId": "mat-tyt-19",
              "sectionIndex": 2,
              "title": "Doğrusal, Parçalı, Çift ve Tek Fonksiyonlar",
              "book": "TYT-mat",
              "pages": [
                85,
                86
              ]
            },
            {
              "lessonId": "mat-tyt-19",
              "sectionIndex": 3,
              "title": "Fonksiyonlarda Dört İşlem ve Grafik Çizimi",
              "book": "TYT-mat",
              "pages": [
                87,
                88
              ]
            },
            {
              "lessonId": "mat-tyt-20",
              "sectionIndex": 0,
              "title": "Grafik Testleri ve İki Fonksiyonun Bileşkesi",
              "book": "TYT-mat",
              "pages": [
                89,
                90
              ]
            },
            {
              "lessonId": "mat-tyt-20",
              "sectionIndex": 1,
              "title": "Bir Fonksiyonun Tersi ve Grafik Uygulamaları",
              "book": "TYT-mat",
              "pages": [
                91,
                92
              ]
            }
          ],
          "coverage": "grouped",
          "page": 2
        },
        {
          "id": "tyt-matematik-13",
          "title": "Bölünebilme Kuralları",
          "counts": [
            0,
            0,
            0,
            1,
            1,
            1,
            1,
            1
          ],
          "rawCounts": [
            "-",
            "-",
            "-",
            "1",
            "1",
            "1",
            "1",
            "1"
          ],
          "reportedTotal": 5,
          "rawTotal": "5",
          "lessonIds": [
            "mat-tyt-03"
          ],
          "bookSections": [
            {
              "lessonId": "mat-tyt-03",
              "sectionIndex": 0,
              "title": "Tam Sayılarda Kalanlı Bölme İşlemi",
              "book": "TYT-mat",
              "pages": [
                18
              ]
            },
            {
              "lessonId": "mat-tyt-03",
              "sectionIndex": 1,
              "title": "Bölünebilme Kuralları 1",
              "book": "TYT-mat",
              "pages": [
                19,
                20
              ]
            },
            {
              "lessonId": "mat-tyt-03",
              "sectionIndex": 2,
              "title": "Bölünebilme Kuralları 2 ve Asal Çarpanlar",
              "book": "TYT-mat",
              "pages": [
                21,
                22
              ]
            }
          ],
          "coverage": "covered",
          "page": 2
        },
        {
          "id": "tyt-matematik-14",
          "title": "Basit Eşitsizlikler",
          "counts": [
            1,
            1,
            1,
            1,
            1,
            3,
            null,
            1
          ],
          "rawCounts": [
            "1",
            "1",
            "1",
            "1",
            "1",
            "3",
            "",
            "1"
          ],
          "reportedTotal": 9,
          "rawTotal": "9",
          "lessonIds": [
            "mat-tyt-06"
          ],
          "bookSections": [
            {
              "lessonId": "mat-tyt-06",
              "sectionIndex": 0,
              "title": "Gerçek Sayılar Kümesinde Aralık Kavramı",
              "book": "TYT-mat",
              "pages": [
                29,
                30
              ]
            },
            {
              "lessonId": "mat-tyt-06",
              "sectionIndex": 1,
              "title": "Bir Bilinmeyenli Denklem ve Basit Eşitsizlikler",
              "book": "TYT-mat",
              "pages": [
                31,
                32
              ]
            },
            {
              "lessonId": "mat-tyt-06",
              "sectionIndex": 2,
              "title": "İki Bilinmeyenli Denklem ve Eşitsizlik Sistemleri",
              "book": "TYT-mat",
              "pages": [
                33,
                34,
                35
              ]
            }
          ],
          "coverage": "covered",
          "note": "2024 hücresi boş; kaynak toplamı ham veridir.",
          "page": 2
        },
        {
          "id": "tyt-matematik-15",
          "title": "Denklem Çözme",
          "counts": [
            0,
            2,
            0,
            0,
            1,
            1,
            null,
            1
          ],
          "rawCounts": [
            "-",
            "2",
            "-",
            "-",
            "1",
            "1",
            "",
            "1"
          ],
          "reportedTotal": 5,
          "rawTotal": "5",
          "lessonIds": [
            "mat-tyt-06"
          ],
          "bookSections": [
            {
              "lessonId": "mat-tyt-06",
              "sectionIndex": 1,
              "title": "Bir Bilinmeyenli Denklem ve Basit Eşitsizlikler",
              "book": "TYT-mat",
              "pages": [
                31,
                32
              ]
            }
          ],
          "coverage": "grouped",
          "note": "2024 hücresi boş; kaynak toplamı ham veridir.",
          "page": 2
        },
        {
          "id": "tyt-matematik-16",
          "title": "Üslü İfadeler",
          "counts": [
            2,
            0,
            0,
            1,
            1,
            1,
            1,
            1
          ],
          "rawCounts": [
            "2",
            "-",
            "-",
            "1",
            "1",
            "1",
            "1",
            "1"
          ],
          "reportedTotal": 7,
          "rawTotal": "7",
          "lessonIds": [
            "mat-tyt-08"
          ],
          "bookSections": [
            {
              "lessonId": "mat-tyt-08",
              "sectionIndex": 0,
              "title": "Üslü İfadeler ve Özellikleri",
              "book": "TYT-mat",
              "pages": [
                39,
                40
              ]
            },
            {
              "lessonId": "mat-tyt-08",
              "sectionIndex": 1,
              "title": "Üslü İfade İçeren Denklemler ve Eşitsizlikler",
              "book": "TYT-mat",
              "pages": [
                41
              ]
            }
          ],
          "coverage": "covered",
          "page": 2
        },
        {
          "id": "tyt-matematik-17",
          "title": "Çarpanlara Ayırma",
          "counts": [
            0,
            1,
            0,
            0,
            0,
            0,
            null,
            0
          ],
          "rawCounts": [
            "-",
            "1",
            "-",
            "-",
            "-",
            "-",
            "",
            "-"
          ],
          "reportedTotal": 1,
          "rawTotal": "1",
          "lessonIds": [
            "mat-tyt-21"
          ],
          "bookSections": [
            {
              "lessonId": "mat-tyt-21",
              "sectionIndex": 2,
              "title": "Ortak Çarpan, Gruplandırma ve Kare Özdeşlikleri",
              "book": "TYT-mat",
              "pages": [
                97,
                98
              ]
            },
            {
              "lessonId": "mat-tyt-21",
              "sectionIndex": 3,
              "title": "Küp Özdeşlikleri ve Üç Terimli İfadeler",
              "book": "TYT-mat",
              "pages": [
                99,
                100
              ]
            },
            {
              "lessonId": "mat-tyt-21",
              "sectionIndex": 4,
              "title": "Rasyonel İfadelerin Sadeleştirilmesi",
              "book": "TYT-mat",
              "pages": [
                101
              ]
            }
          ],
          "coverage": "grouped",
          "note": "2024 hücresi boş; kaynak toplamı ham veridir.",
          "page": 2
        },
        {
          "id": "tyt-matematik-18",
          "title": "Köklü İfadeler",
          "counts": [
            2,
            1,
            0,
            1,
            1,
            1,
            1,
            1
          ],
          "rawCounts": [
            "2",
            "1",
            "-",
            "1",
            "1",
            "1",
            "1",
            "1"
          ],
          "reportedTotal": 8,
          "rawTotal": "8",
          "lessonIds": [
            "mat-tyt-09"
          ],
          "bookSections": [
            {
              "lessonId": "mat-tyt-09",
              "sectionIndex": 0,
              "title": "Köklü İfadeler ve Eşlenik",
              "book": "TYT-mat",
              "pages": [
                42,
                43
              ]
            },
            {
              "lessonId": "mat-tyt-09",
              "sectionIndex": 1,
              "title": "Köklü İfadeleri İçeren Denklemler ve Eşitsizlikler",
              "book": "TYT-mat",
              "pages": [
                44
              ]
            }
          ],
          "coverage": "covered",
          "page": 2
        },
        {
          "id": "tyt-matematik-19",
          "title": "OBEB-OKEK",
          "counts": [
            0,
            0,
            2,
            0,
            0,
            0,
            1,
            0
          ],
          "rawCounts": [
            "-",
            "-",
            "2",
            "-",
            "-",
            "-",
            "1",
            "-"
          ],
          "reportedTotal": 3,
          "rawTotal": "3",
          "lessonIds": [
            "mat-tyt-04"
          ],
          "bookSections": [
            {
              "lessonId": "mat-tyt-04",
              "sectionIndex": 0,
              "title": "EBOB-EKOK Kavramları ve Problemleri",
              "book": "TYT-mat",
              "pages": [
                23,
                24
              ]
            },
            {
              "lessonId": "mat-tyt-04",
              "sectionIndex": 1,
              "title": "Periyodik Problemler",
              "book": "TYT-mat",
              "pages": [
                25
              ]
            }
          ],
          "coverage": "covered",
          "page": 2
        },
        {
          "id": "tyt-matematik-20",
          "title": "Rasyonel Sayılar",
          "counts": [
            1,
            0,
            3,
            3,
            1,
            2,
            2,
            1
          ],
          "rawCounts": [
            "1",
            "-",
            "3",
            "3",
            "1",
            "2",
            "2",
            "1"
          ],
          "reportedTotal": 13,
          "rawTotal": "13",
          "lessonIds": [
            "mat-tyt-05"
          ],
          "bookSections": [
            {
              "lessonId": "mat-tyt-05",
              "sectionIndex": 0,
              "title": "Rasyonel Sayılarda İşlemler",
              "book": "TYT-mat",
              "pages": [
                26
              ]
            },
            {
              "lessonId": "mat-tyt-05",
              "sectionIndex": 1,
              "title": "Ondalıklı ve Devirli Ondalıklı Sayılar",
              "book": "TYT-mat",
              "pages": [
                27,
                28
              ]
            }
          ],
          "coverage": "covered",
          "page": 2
        },
        {
          "id": "tyt-matematik-21",
          "title": "Polinomlar",
          "counts": [
            1,
            1,
            0,
            0,
            0,
            0,
            null,
            0
          ],
          "rawCounts": [
            "1",
            "1",
            "-",
            "-",
            "-",
            "-",
            "",
            "-"
          ],
          "reportedTotal": 2,
          "rawTotal": "2",
          "lessonIds": [
            "mat-tyt-21"
          ],
          "bookSections": [
            {
              "lessonId": "mat-tyt-21",
              "sectionIndex": 0,
              "title": "Polinom Kavramı ve Polinomlarda İşlemler",
              "book": "TYT-mat",
              "pages": [
                93,
                94
              ]
            },
            {
              "lessonId": "mat-tyt-21",
              "sectionIndex": 1,
              "title": "Polinomlarda Bölme ve Bölmeden Kalan Bulma",
              "book": "TYT-mat",
              "pages": [
                95,
                96
              ]
            }
          ],
          "coverage": "grouped",
          "note": "2024 hücresi boş; kaynak toplamı ham veridir.",
          "page": 2
        },
        {
          "id": "tyt-matematik-22",
          "title": "İstatistik",
          "counts": [
            0,
            0,
            1,
            0,
            1,
            1,
            1,
            1
          ],
          "rawCounts": [
            "-",
            "-",
            "1",
            "-",
            "1",
            "1",
            "1",
            "1"
          ],
          "reportedTotal": 5,
          "rawTotal": "5",
          "lessonIds": [
            "mat-tyt-23"
          ],
          "bookSections": [
            {
              "lessonId": "mat-tyt-23",
              "sectionIndex": 0,
              "title": "Veri ve Merkezi Eğilim/Yayılım Ölçüleri",
              "book": "TYT-mat",
              "pages": [
                107,
                108
              ]
            },
            {
              "lessonId": "mat-tyt-23",
              "sectionIndex": 1,
              "title": "Histogram ve Grafik Çeşitleri",
              "book": "TYT-mat",
              "pages": [
                109,
                110
              ]
            }
          ],
          "coverage": "covered",
          "page": 2
        }
      ],
      "notes": [
        "Kaynak tablosunda boş hücre veya toplam tutarsızlığı var; ayrıntılar issues alanında ham değerlerle kaydedilmiştir."
      ],
      "issues": [
        {
          "type": "blankSourceCells",
          "rowId": "tyt-matematik-03",
          "years": [
            2024
          ],
          "message": "Kaynakta boş hücreler var; toplamdan değer üretilmedi."
        },
        {
          "type": "blankSourceCells",
          "rowId": "tyt-matematik-05",
          "years": [
            2024,
            2025
          ],
          "message": "Kaynakta boş hücreler var; toplamdan değer üretilmedi."
        },
        {
          "type": "blankSourceCells",
          "rowId": "tyt-matematik-09",
          "years": [
            2024,
            2025
          ],
          "message": "Kaynakta boş hücreler var; toplamdan değer üretilmedi."
        },
        {
          "type": "blankSourceCells",
          "rowId": "tyt-matematik-14",
          "years": [
            2024
          ],
          "message": "Kaynakta boş hücreler var; toplamdan değer üretilmedi."
        },
        {
          "type": "blankSourceCells",
          "rowId": "tyt-matematik-15",
          "years": [
            2024
          ],
          "message": "Kaynakta boş hücreler var; toplamdan değer üretilmedi."
        },
        {
          "type": "blankSourceCells",
          "rowId": "tyt-matematik-17",
          "years": [
            2024
          ],
          "message": "Kaynakta boş hücreler var; toplamdan değer üretilmedi."
        },
        {
          "type": "blankSourceCells",
          "rowId": "tyt-matematik-21",
          "years": [
            2024
          ],
          "message": "Kaynakta boş hücreler var; toplamdan değer üretilmedi."
        },
        {
          "type": "yearTotalMismatch",
          "year": 2018,
          "computedKnownSum": 30,
          "reported": 29,
          "blankRows": [],
          "message": "Görünen konu hücrelerinin toplamı kaynakta yazılı yıl toplamıyla uyuşmuyor; yıl toplamı düzeltilmedi."
        }
      ]
    },
    {
      "id": "tyt-fizik",
      "exam": "TYT",
      "subject": "fizik",
      "label": "TYT Fizik",
      "sourceId": "tyt",
      "inScope": true,
      "page": 3,
      "pages": [
        3
      ],
      "reportedYearTotals": [
        7,
        7,
        7,
        7,
        7,
        7,
        7,
        7
      ],
      "rows": [
        {
          "id": "tyt-fizik-01",
          "title": "Fizik Bilimine Giriş",
          "counts": [
            1,
            0,
            1,
            0,
            0,
            0,
            0,
            0
          ],
          "rawCounts": [
            "1",
            "-",
            "1",
            "-",
            "-",
            "-",
            "-",
            "-"
          ],
          "reportedTotal": 2,
          "rawTotal": "2",
          "lessonIds": [
            "fiz-tyt-01"
          ],
          "bookSections": [
            {
              "lessonId": "fiz-tyt-01",
              "sectionIndex": 0,
              "title": "FİZİK NEDİR?",
              "book": "TYT-fiz",
              "pages": [
                9
              ]
            },
            {
              "lessonId": "fiz-tyt-01",
              "sectionIndex": 1,
              "title": "FİZİĞİN ALT DALLARI şeması",
              "book": "TYT-fiz",
              "pages": [
                10
              ]
            },
            {
              "lessonId": "fiz-tyt-01",
              "sectionIndex": 2,
              "title": "1. MEKANİK / 2. TERMODİNAMİK",
              "book": "TYT-fiz",
              "pages": [
                10
              ]
            },
            {
              "lessonId": "fiz-tyt-01",
              "sectionIndex": 3,
              "title": "3. ELEKTROMANYETİZMA / 4. OPTİK / 5. NÜKLEER FİZİK / 6. KATIHÂL FİZİĞİ",
              "book": "TYT-fiz",
              "pages": [
                11
              ]
            },
            {
              "lessonId": "fiz-tyt-01",
              "sectionIndex": 4,
              "title": "7. ATOM FİZİĞİ / 8. YÜKSEK ENERJİ VE PLÂZMA FİZİĞİ",
              "book": "TYT-fiz",
              "pages": [
                12
              ]
            },
            {
              "lessonId": "fiz-tyt-01",
              "sectionIndex": 5,
              "title": "FİZİĞİN DİĞER DİSİPLİNLERLE İLİŞKİSİ",
              "book": "TYT-fiz",
              "pages": [
                12
              ]
            },
            {
              "lessonId": "fiz-tyt-01",
              "sectionIndex": 6,
              "title": "FİZİKSEL NİCELİKLERİN SINIFLANDIRILMASI / TEMEL BÜYÜKLÜKLER tablosu",
              "book": "TYT-fiz",
              "pages": [
                12
              ]
            },
            {
              "lessonId": "fiz-tyt-01",
              "sectionIndex": 7,
              "title": "TÜRETİLMİŞ BÜYÜKLÜKLER tablosu",
              "book": "TYT-fiz",
              "pages": [
                13
              ]
            },
            {
              "lessonId": "fiz-tyt-01",
              "sectionIndex": 8,
              "title": "SKALER VE VEKTÖREL BÜYÜKLÜKLER / DİKKAT kutusu",
              "book": "TYT-fiz",
              "pages": [
                13
              ]
            },
            {
              "lessonId": "fiz-tyt-01",
              "sectionIndex": 9,
              "title": "a, b, c, d ve e vektörlerinin kareli çizimi",
              "book": "TYT-fiz",
              "pages": [
                13
              ]
            },
            {
              "lessonId": "fiz-tyt-01",
              "sectionIndex": 10,
              "title": "Bileşke Vektör: 3 br ve 5 br kuvvet çizimleri",
              "book": "TYT-fiz",
              "pages": [
                13
              ]
            },
            {
              "lessonId": "fiz-tyt-01",
              "sectionIndex": 11,
              "title": "BİLİM ARAŞTIRMA MERKEZLERİ",
              "book": "TYT-fiz",
              "pages": [
                14
              ]
            }
          ],
          "coverage": "covered",
          "page": 3
        },
        {
          "id": "tyt-fizik-02",
          "title": "Madde ve Özellikleri",
          "counts": [
            0,
            1,
            0,
            1,
            1,
            1,
            1,
            1
          ],
          "rawCounts": [
            "-",
            "1",
            "-",
            "1",
            "1",
            "1",
            "1",
            "1"
          ],
          "reportedTotal": 6,
          "rawTotal": "6",
          "lessonIds": [
            "fiz-tyt-02"
          ],
          "bookSections": [
            {
              "lessonId": "fiz-tyt-02",
              "sectionIndex": 0,
              "title": "MADDE / KÜTLE",
              "book": "TYT-fiz",
              "pages": [
                15
              ]
            },
            {
              "lessonId": "fiz-tyt-02",
              "sectionIndex": 1,
              "title": "HACİM / Hacim birimleri ve çevrim tablosu",
              "book": "TYT-fiz",
              "pages": [
                16
              ]
            },
            {
              "lessonId": "fiz-tyt-02",
              "sectionIndex": 2,
              "title": "ÖZKÜTLE / KARIŞIMLARIN ÖZKÜTLESİ / GÜNLÜK HAYATTA ÖZKÜTLE",
              "book": "TYT-fiz",
              "pages": [
                17,
                18,
                19
              ]
            },
            {
              "lessonId": "fiz-tyt-02",
              "sectionIndex": 3,
              "title": "DAYANIKLILIK / Kendi Ağırlığına Karşı Dayanıklılık",
              "book": "TYT-fiz",
              "pages": [
                20,
                21
              ]
            },
            {
              "lessonId": "fiz-tyt-02",
              "sectionIndex": 4,
              "title": "ADEZYON KUVVETİ / KOHEZYON KUVVETİ",
              "book": "TYT-fiz",
              "pages": [
                22,
                23
              ]
            },
            {
              "lessonId": "fiz-tyt-02",
              "sectionIndex": 5,
              "title": "YÜZEY GERİLİMİ / KILCALLIK",
              "book": "TYT-fiz",
              "pages": [
                24,
                25
              ]
            }
          ],
          "coverage": "covered",
          "page": 3
        },
        {
          "id": "tyt-fizik-03",
          "title": "Hareket ve Kuvvet",
          "counts": [
            1,
            1,
            1,
            1,
            1,
            1,
            0,
            1
          ],
          "rawCounts": [
            "1",
            "1",
            "1",
            "1",
            "1",
            "1",
            "-",
            "1"
          ],
          "reportedTotal": 7,
          "rawTotal": "7",
          "lessonIds": [
            "fiz-tyt-04"
          ],
          "bookSections": [
            {
              "lessonId": "fiz-tyt-04",
              "sectionIndex": 0,
              "title": "HAREKET / Yörünge / Alınan Yol / Konum / Yer Değiştirme",
              "book": "TYT-fiz",
              "pages": [
                26,
                27
              ]
            },
            {
              "lessonId": "fiz-tyt-04",
              "sectionIndex": 1,
              "title": "Sürat / Ortalama Hız / Ortalama Sürat / Anlık Hız",
              "book": "TYT-fiz",
              "pages": [
                28,
                29
              ]
            },
            {
              "lessonId": "fiz-tyt-04",
              "sectionIndex": 2,
              "title": "DÜZGÜN DOĞRUSAL HAREKET GRAFİKLERİ",
              "book": "TYT-fiz",
              "pages": [
                30,
                31
              ]
            },
            {
              "lessonId": "fiz-tyt-04",
              "sectionIndex": 3,
              "title": "İVME KAVRAMI / DÜZGÜN HIZLANAN HAREKET",
              "book": "TYT-fiz",
              "pages": [
                32,
                33
              ]
            },
            {
              "lessonId": "fiz-tyt-04",
              "sectionIndex": 4,
              "title": "DÜZGÜN YAVAŞLAYAN HAREKET / HAREKETİN GÖRELİLİĞİ",
              "book": "TYT-fiz",
              "pages": [
                34,
                35
              ]
            },
            {
              "lessonId": "fiz-tyt-04",
              "sectionIndex": 5,
              "title": "KUVVET / DOĞADAKİ TEMEL KUVVETLER / BİLEŞKE",
              "book": "TYT-fiz",
              "pages": [
                36,
                37,
                38
              ]
            },
            {
              "lessonId": "fiz-tyt-04",
              "sectionIndex": 6,
              "title": "NEWTON’IN HAREKET YASALARI / AĞIRLIK / ETKİ–TEPKİ",
              "book": "TYT-fiz",
              "pages": [
                39,
                40,
                41,
                42
              ]
            },
            {
              "lessonId": "fiz-tyt-04",
              "sectionIndex": 7,
              "title": "SÜRTÜNME KUVVETİ / STATİK VE KİNETİK SÜRTÜNME",
              "book": "TYT-fiz",
              "pages": [
                43,
                44
              ]
            }
          ],
          "coverage": "covered",
          "page": 3
        },
        {
          "id": "tyt-fizik-04",
          "title": "İş, Güç, Enerji 1",
          "counts": [
            0,
            1,
            0,
            0,
            0,
            0,
            0,
            0
          ],
          "rawCounts": [
            "-",
            "1",
            "-",
            "-",
            "-",
            "-",
            "-",
            "-"
          ],
          "reportedTotal": 1,
          "rawTotal": "1",
          "lessonIds": [
            "fiz-tyt-05"
          ],
          "bookSections": [
            {
              "lessonId": "fiz-tyt-05",
              "sectionIndex": 0,
              "title": "İŞ / Sürtünme Kuvvetinin Yaptığı İş / GÜÇ",
              "book": "TYT-fiz",
              "pages": [
                45,
                46
              ]
            },
            {
              "lessonId": "fiz-tyt-05",
              "sectionIndex": 1,
              "title": "MEKANİK ENERJİ / KİNETİK ENERJİ",
              "book": "TYT-fiz",
              "pages": [
                47
              ]
            },
            {
              "lessonId": "fiz-tyt-05",
              "sectionIndex": 2,
              "title": "YER ÇEKİMİ POTANSİYEL ENERJİSİ / ESNEKLİK POTANSİYEL ENERJİSİ",
              "book": "TYT-fiz",
              "pages": [
                48,
                49
              ]
            },
            {
              "lessonId": "fiz-tyt-05",
              "sectionIndex": 3,
              "title": "ENERJİ KORUNUMU / ENERJİ DÖNÜŞÜMLERİ",
              "book": "TYT-fiz",
              "pages": [
                50,
                51,
                52,
                53
              ]
            },
            {
              "lessonId": "fiz-tyt-05",
              "sectionIndex": 4,
              "title": "VERİM / ENERJİ TASARRUFU",
              "book": "TYT-fiz",
              "pages": [
                54,
                55
              ]
            },
            {
              "lessonId": "fiz-tyt-05",
              "sectionIndex": 5,
              "title": "YENİLENEMEZ VE YENİLENEBİLİR ENERJİ KAYNAKLARI",
              "book": "TYT-fiz",
              "pages": [
                56,
                57,
                58
              ]
            }
          ],
          "coverage": "covered",
          "note": "Kaynak başlığındaki sondaki 1 aynen korunmuştur.",
          "page": 3
        },
        {
          "id": "tyt-fizik-05",
          "title": "Isı, Sıcaklık ve Genleşme",
          "counts": [
            1,
            1,
            0,
            1,
            1,
            1,
            1,
            1
          ],
          "rawCounts": [
            "1",
            "1",
            "-",
            "1",
            "1",
            "1",
            "1",
            "1"
          ],
          "reportedTotal": 7,
          "rawTotal": "7",
          "lessonIds": [
            "fiz-tyt-03"
          ],
          "bookSections": [
            {
              "lessonId": "fiz-tyt-03",
              "sectionIndex": 0,
              "title": "SICAKLIK / ISI / İÇ ENERJİ",
              "book": "TYT-fiz",
              "pages": [
                59,
                60
              ]
            },
            {
              "lessonId": "fiz-tyt-03",
              "sectionIndex": 1,
              "title": "TERMOMETRELER / TERMOMETRELERİN ÖLÇEKLENDİRİLMESİ",
              "book": "TYT-fiz",
              "pages": [
                61,
                62
              ]
            },
            {
              "lessonId": "fiz-tyt-03",
              "sectionIndex": 2,
              "title": "ÖZ ISI / ISI SIĞASI / Q = m·c·ΔT",
              "book": "TYT-fiz",
              "pages": [
                63,
                64,
                65,
                66
              ]
            },
            {
              "lessonId": "fiz-tyt-03",
              "sectionIndex": 3,
              "title": "HÂL DEĞİŞİMİ VE ÇEŞİTLERİ / Hâl değiştirme ısısı",
              "book": "TYT-fiz",
              "pages": [
                67,
                68,
                69
              ]
            },
            {
              "lessonId": "fiz-tyt-03",
              "sectionIndex": 4,
              "title": "ISIL DENGE / Isıl dengenin sıcaklık farkı ve ısı ile ilişkisi",
              "book": "TYT-fiz",
              "pages": [
                70,
                71
              ]
            },
            {
              "lessonId": "fiz-tyt-03",
              "sectionIndex": 5,
              "title": "ENERJİ YAYILMA YOLLARI: İLETİM, KONVEKSİYON, IŞIMA",
              "book": "TYT-fiz",
              "pages": [
                72,
                73,
                74
              ]
            },
            {
              "lessonId": "fiz-tyt-03",
              "sectionIndex": 6,
              "title": "KATI MADDEDEKİ ENERJİ İLETİM HIZINI ETKİLEYEN DEĞİŞKENLER / ISI YALITIMI",
              "book": "TYT-fiz",
              "pages": [
                75,
                76,
                77
              ]
            },
            {
              "lessonId": "fiz-tyt-03",
              "sectionIndex": 7,
              "title": "HİSSEDİLEN VE GERÇEK SICAKLIK / KÜRESEL ISINMA / SERA ETKİSİ",
              "book": "TYT-fiz",
              "pages": [
                78,
                79
              ]
            },
            {
              "lessonId": "fiz-tyt-03",
              "sectionIndex": 8,
              "title": "GENLEŞME / GENLEŞMENİN BAĞLI OLDUĞU DEĞİŞKENLER / BOYCA GENLEŞME",
              "book": "TYT-fiz",
              "pages": [
                80,
                81,
                82,
                83
              ]
            },
            {
              "lessonId": "fiz-tyt-03",
              "sectionIndex": 9,
              "title": "YÜZEYCE VE HACİMCE GENLEŞME / SIVILARDA GENLEŞME",
              "book": "TYT-fiz",
              "pages": [
                84,
                85,
                86
              ]
            }
          ],
          "coverage": "covered",
          "page": 3
        },
        {
          "id": "tyt-fizik-06",
          "title": "Elektrostatik",
          "counts": [
            1,
            0,
            0,
            0,
            1,
            0,
            0,
            1
          ],
          "rawCounts": [
            "1",
            "-",
            "-",
            "-",
            "1",
            "-",
            "-",
            "1"
          ],
          "reportedTotal": 3,
          "rawTotal": "3",
          "lessonIds": [
            "fiz-tyt-07"
          ],
          "bookSections": [
            {
              "lessonId": "fiz-tyt-07",
              "sectionIndex": 0,
              "title": "ELEKTRİK YÜKLERİ / ELEKTRİKLE YÜKLENME ÇEŞİTLERİ",
              "book": "TYT-fiz",
              "pages": [
                87,
                88
              ]
            },
            {
              "lessonId": "fiz-tyt-07",
              "sectionIndex": 1,
              "title": "DOKUNMA İLE ELEKTRİKLENME / ETKİ İLE ELEKTRİKLENME",
              "book": "TYT-fiz",
              "pages": [
                89,
                90
              ]
            },
            {
              "lessonId": "fiz-tyt-07",
              "sectionIndex": 2,
              "title": "YALITKANIN ETKİ İLE ELEKTRİKLENMESİ / ELEKTROSKOP",
              "book": "TYT-fiz",
              "pages": [
                91,
                92,
                93,
                94
              ]
            },
            {
              "lessonId": "fiz-tyt-07",
              "sectionIndex": 3,
              "title": "İLETKEN VE YALITKANLARDA YÜK DAĞILIMI / FARADAY KAFESİ",
              "book": "TYT-fiz",
              "pages": [
                95,
                96
              ]
            },
            {
              "lessonId": "fiz-tyt-07",
              "sectionIndex": 4,
              "title": "FARADAY KAFESİ UYGULAMALARI / TOPRAKLAMA",
              "book": "TYT-fiz",
              "pages": [
                97,
                98
              ]
            },
            {
              "lessonId": "fiz-tyt-07",
              "sectionIndex": 5,
              "title": "COULOMB KANUNU / ELEKTRİK ALAN / ALAN ÇİZGİ MODELLERİ",
              "book": "TYT-fiz",
              "pages": [
                99,
                100,
                101,
                102
              ]
            }
          ],
          "coverage": "covered",
          "page": 3
        },
        {
          "id": "tyt-fizik-07",
          "title": "Elektrik ve Manyetizma",
          "counts": [
            0,
            1,
            1,
            1,
            0,
            2,
            2,
            0
          ],
          "rawCounts": [
            "-",
            "1",
            "1",
            "1",
            "-",
            "2",
            "2",
            "-"
          ],
          "reportedTotal": 7,
          "rawTotal": "7",
          "lessonIds": [
            "fiz-tyt-08",
            "fiz-tyt-09"
          ],
          "bookSections": [
            {
              "lessonId": "fiz-tyt-08",
              "sectionIndex": 0,
              "title": "ELEKTRİK AKIMI / POTANSİYEL FARKI",
              "book": "TYT-fiz",
              "pages": [
                103,
                104,
                105,
                106
              ]
            },
            {
              "lessonId": "fiz-tyt-08",
              "sectionIndex": 1,
              "title": "BİR KATI İLETKENİN DİRENCİ NELERE BAĞLIDIR?",
              "book": "TYT-fiz",
              "pages": [
                107
              ]
            },
            {
              "lessonId": "fiz-tyt-08",
              "sectionIndex": 2,
              "title": "ELEKTRİK DEVRELERİ / ÖLÇÜ ALETLERİ / OHM KANUNU",
              "book": "TYT-fiz",
              "pages": [
                108,
                109,
                110
              ]
            },
            {
              "lessonId": "fiz-tyt-08",
              "sectionIndex": 3,
              "title": "DİRENÇLERİN SERİ VE PARALEL BAĞLANMASI",
              "book": "TYT-fiz",
              "pages": [
                111,
                112,
                113
              ]
            },
            {
              "lessonId": "fiz-tyt-08",
              "sectionIndex": 4,
              "title": "ÜRETEÇLER / İÇ DİRENÇ / SERİ VE PARALEL ÜRETEÇLER",
              "book": "TYT-fiz",
              "pages": [
                114,
                115,
                116,
                117
              ]
            },
            {
              "lessonId": "fiz-tyt-08",
              "sectionIndex": 5,
              "title": "ELEKTRİKSEL ENERJİ / ELEKTRİKSEL GÜÇ",
              "book": "TYT-fiz",
              "pages": [
                118,
                119
              ]
            },
            {
              "lessonId": "fiz-tyt-08",
              "sectionIndex": 6,
              "title": "LAMBA PARLAKLIKLARI / ELEKTRİK AKIMININ TEHLİKELERİ VE ÖNLEME YÖNTEMLERİ",
              "book": "TYT-fiz",
              "pages": [
                120,
                121
              ]
            },
            {
              "lessonId": "fiz-tyt-09",
              "sectionIndex": 0,
              "title": "MIKNATIS / BİR MIKNATISIN MANYETİK ALANI VE MANYETİK ALAN YÖNÜ",
              "book": "TYT-fiz",
              "pages": [
                122
              ]
            },
            {
              "lessonId": "fiz-tyt-09",
              "sectionIndex": 1,
              "title": "MANYETİK ALAN ÇİZGİLERİ",
              "book": "TYT-fiz",
              "pages": [
                123
              ]
            },
            {
              "lessonId": "fiz-tyt-09",
              "sectionIndex": 2,
              "title": "İKİ MIKNATISIN ALAN MODELİ",
              "book": "TYT-fiz",
              "pages": [
                124
              ]
            },
            {
              "lessonId": "fiz-tyt-09",
              "sectionIndex": 3,
              "title": "İKİ MIKNATIS ARASINDAKİ MANYETİK KUVVET",
              "book": "TYT-fiz",
              "pages": [
                125
              ]
            },
            {
              "lessonId": "fiz-tyt-09",
              "sectionIndex": 4,
              "title": "AKIM VE MANYETİK ALAN / SAĞ EL KURALI",
              "book": "TYT-fiz",
              "pages": [
                126,
                127
              ]
            },
            {
              "lessonId": "fiz-tyt-09",
              "sectionIndex": 5,
              "title": "ELEKTROMIKNATIS UYGULAMALARI / DÜNYA’NIN MANYETİK ALANI",
              "book": "TYT-fiz",
              "pages": [
                128,
                129
              ]
            }
          ],
          "coverage": "grouped",
          "page": 3
        },
        {
          "id": "tyt-fizik-08",
          "title": "Basınç",
          "counts": [
            0,
            0,
            1,
            1,
            1,
            null,
            0,
            0
          ],
          "rawCounts": [
            "-",
            "-",
            "1",
            "1",
            "1",
            "",
            "-",
            "-"
          ],
          "reportedTotal": 3,
          "rawTotal": "3",
          "lessonIds": [
            "fiz-tyt-06"
          ],
          "bookSections": [
            {
              "lessonId": "fiz-tyt-06",
              "sectionIndex": 0,
              "title": "BASINÇ / KATILARDA BASINÇ",
              "book": "TYT-fiz",
              "pages": [
                130,
                131,
                132
              ]
            },
            {
              "lessonId": "fiz-tyt-06",
              "sectionIndex": 1,
              "title": "DURGUN SIVILARDA BASINÇ / PASCAL PRENSİBİ",
              "book": "TYT-fiz",
              "pages": [
                133,
                134
              ]
            },
            {
              "lessonId": "fiz-tyt-06",
              "sectionIndex": 2,
              "title": "SU CENDERESİ / BİLEŞİK KAPLAR / BASINÇ KUVVETİ",
              "book": "TYT-fiz",
              "pages": [
                135,
                136
              ]
            },
            {
              "lessonId": "fiz-tyt-06",
              "sectionIndex": 3,
              "title": "GAZ BASINCI / ATMOSFER BASINCI / BAROMETRE",
              "book": "TYT-fiz",
              "pages": [
                137,
                138,
                139
              ]
            },
            {
              "lessonId": "fiz-tyt-06",
              "sectionIndex": 4,
              "title": "MANOMETRE / BASINCIN HÂL DEĞİŞİMİNE ETKİSİ",
              "book": "TYT-fiz",
              "pages": [
                140,
                141
              ]
            },
            {
              "lessonId": "fiz-tyt-06",
              "sectionIndex": 5,
              "title": "AKIŞKAN BASINCI / BERNOULLİ İLKESİ",
              "book": "TYT-fiz",
              "pages": [
                142,
                143
              ]
            }
          ],
          "coverage": "grouped",
          "note": "2023 hücresi kaynakta boş.",
          "page": 3
        },
        {
          "id": "tyt-fizik-09",
          "title": "Kaldırma Kuvveti",
          "counts": [
            1,
            0,
            1,
            0,
            0,
            0,
            1,
            1
          ],
          "rawCounts": [
            "1",
            "-",
            "1",
            "-",
            "-",
            "-",
            "1",
            "1"
          ],
          "reportedTotal": 4,
          "rawTotal": "4",
          "lessonIds": [
            "fiz-tyt-06"
          ],
          "bookSections": [
            {
              "lessonId": "fiz-tyt-06",
              "sectionIndex": 6,
              "title": "KALDIRMA KUVVETİ / CİSİMLERİN SIVI İÇİNDEKİ DENGE DURUMLARI",
              "book": "TYT-fiz",
              "pages": [
                144,
                145,
                146
              ]
            }
          ],
          "coverage": "grouped",
          "page": 3
        },
        {
          "id": "tyt-fizik-10",
          "title": "Dalgalar",
          "counts": [
            0,
            0,
            1,
            1,
            1,
            0,
            1,
            1
          ],
          "rawCounts": [
            "-",
            "-",
            "1",
            "1",
            "1",
            "-",
            "1",
            "1"
          ],
          "reportedTotal": 5,
          "rawTotal": "5",
          "lessonIds": [
            "fiz-tyt-10"
          ],
          "bookSections": [
            {
              "lessonId": "fiz-tyt-10",
              "sectionIndex": 0,
              "title": "DALGALARDA TEMEL KAVRAMLAR VE ÖZELLİKLERİ",
              "book": "TYT-fiz",
              "pages": [
                147,
                148,
                149,
                150
              ]
            },
            {
              "lessonId": "fiz-tyt-10",
              "sectionIndex": 1,
              "title": "YAY DALGALARI: ATMA, HIZ VE YANSIMA",
              "book": "TYT-fiz",
              "pages": [
                151,
                152,
                153
              ]
            },
            {
              "lessonId": "fiz-tyt-10",
              "sectionIndex": 2,
              "title": "YAYLARDA YANSIMA VE İLETİM / ATMALARIN BİRBİRİ İÇİNDEN GEÇİŞİ",
              "book": "TYT-fiz",
              "pages": [
                154,
                155
              ]
            },
            {
              "lessonId": "fiz-tyt-10",
              "sectionIndex": 3,
              "title": "SU DALGALARI / YANSIMA",
              "book": "TYT-fiz",
              "pages": [
                156,
                157,
                158
              ]
            },
            {
              "lessonId": "fiz-tyt-10",
              "sectionIndex": 4,
              "title": "SU DALGALARININ HIZI VE KIRILMASI / STROBOSKOP",
              "book": "TYT-fiz",
              "pages": [
                159,
                160
              ]
            },
            {
              "lessonId": "fiz-tyt-10",
              "sectionIndex": 5,
              "title": "SES DALGALARI / YÜKSEKLİK, ŞİDDET, TINI VE REZONANS",
              "book": "TYT-fiz",
              "pages": [
                161,
                162,
                163,
                164
              ]
            },
            {
              "lessonId": "fiz-tyt-10",
              "sectionIndex": 6,
              "title": "DEPREM DALGALARI",
              "book": "TYT-fiz",
              "pages": [
                165,
                166
              ]
            }
          ],
          "coverage": "grouped",
          "page": 3
        },
        {
          "id": "tyt-fizik-11",
          "title": "Optik",
          "counts": [
            2,
            2,
            1,
            1,
            1,
            2,
            1,
            1
          ],
          "rawCounts": [
            "2",
            "2",
            "1",
            "1",
            "1",
            "2",
            "1",
            "1"
          ],
          "reportedTotal": 11,
          "rawTotal": "11",
          "lessonIds": [
            "fiz-tyt-10"
          ],
          "bookSections": [
            {
              "lessonId": "fiz-tyt-10",
              "sectionIndex": 7,
              "title": "IŞIĞIN DAVRANIŞ MODELLERİ / IŞIK ŞİDDETİ, AKISI VE AYDINLANMA",
              "book": "TYT-fiz",
              "pages": [
                167,
                168,
                169
              ]
            },
            {
              "lessonId": "fiz-tyt-10",
              "sectionIndex": 8,
              "title": "GÖLGE OLUŞUMU / TAM GÖLGE VE YARI GÖLGE",
              "book": "TYT-fiz",
              "pages": [
                170,
                171,
                172,
                173
              ]
            },
            {
              "lessonId": "fiz-tyt-10",
              "sectionIndex": 9,
              "title": "IŞIĞIN YANSIMASI / DÜZLEM AYNADA GÖRÜNTÜ VE GÖRÜŞ ALANI",
              "book": "TYT-fiz",
              "pages": [
                174,
                175,
                176,
                177
              ]
            },
            {
              "lessonId": "fiz-tyt-10",
              "sectionIndex": 10,
              "title": "KÜRESEL AYNALARIN ÖZELLİKLERİ VE ÖZEL IŞINLAR",
              "book": "TYT-fiz",
              "pages": [
                178,
                179,
                180,
                181
              ]
            },
            {
              "lessonId": "fiz-tyt-10",
              "sectionIndex": 11,
              "title": "KÜRESEL AYNALARDA GÖRÜNTÜ OLUŞUMU",
              "book": "TYT-fiz",
              "pages": [
                182,
                183,
                184
              ]
            },
            {
              "lessonId": "fiz-tyt-10",
              "sectionIndex": 12,
              "title": "IŞIĞIN KIRILMASI / TAM YANSIMA / GÖRÜNÜR UZAKLIK",
              "book": "TYT-fiz",
              "pages": [
                185,
                186,
                187,
                188
              ]
            },
            {
              "lessonId": "fiz-tyt-10",
              "sectionIndex": 13,
              "title": "MERCEKLERİN ÖZELLİKLERİ / ÖZEL IŞINLAR",
              "book": "TYT-fiz",
              "pages": [
                189,
                190,
                191,
                192
              ]
            },
            {
              "lessonId": "fiz-tyt-10",
              "sectionIndex": 14,
              "title": "MERCEKLERDE GÖRÜNTÜ OLUŞUMU",
              "book": "TYT-fiz",
              "pages": [
                193,
                194
              ]
            },
            {
              "lessonId": "fiz-tyt-10",
              "sectionIndex": 15,
              "title": "IŞIK PRİZMALARI / RENK / IŞIK FİLTRELERİ",
              "book": "TYT-fiz",
              "pages": [
                195,
                196,
                197,
                198,
                199
              ]
            }
          ],
          "coverage": "grouped",
          "page": 3
        }
      ],
      "notes": [
        "Kaynak tablosunda boş hücre veya toplam tutarsızlığı var; ayrıntılar issues alanında ham değerlerle kaydedilmiştir."
      ],
      "issues": [
        {
          "type": "blankSourceCells",
          "rowId": "tyt-fizik-08",
          "years": [
            2023
          ],
          "message": "Kaynakta boş hücreler var; toplamdan değer üretilmedi."
        }
      ]
    },
    {
      "id": "tyt-kimya",
      "exam": "TYT",
      "subject": "kimya",
      "label": "TYT Kimya",
      "sourceId": "tyt",
      "inScope": true,
      "page": 3,
      "pages": [
        3
      ],
      "reportedYearTotals": [
        7,
        7,
        7,
        7,
        7,
        7,
        7,
        7
      ],
      "rows": [
        {
          "id": "tyt-kimya-01",
          "title": "Kimya Bilimi",
          "counts": [
            2,
            0,
            1,
            1,
            1,
            1,
            1,
            1
          ],
          "rawCounts": [
            "2",
            "-",
            "1",
            "1",
            "1",
            "1",
            "1",
            "1"
          ],
          "reportedTotal": 8,
          "rawTotal": "8",
          "lessonIds": [
            "kim-tyt-01"
          ],
          "bookSections": [
            {
              "lessonId": "kim-tyt-01",
              "sectionIndex": 0,
              "title": "Simyadan kimyaya geçiş",
              "book": "TYT-kim",
              "pages": [
                9,
                10,
                11
              ]
            },
            {
              "lessonId": "kim-tyt-01",
              "sectionIndex": 1,
              "title": "Kimya disiplinleri ve çalışma alanları",
              "book": "TYT-kim",
              "pages": [
                12,
                13
              ]
            },
            {
              "lessonId": "kim-tyt-01",
              "sectionIndex": 2,
              "title": "Kimyanın sembolik dili",
              "book": "TYT-kim",
              "pages": [
                14,
                15
              ]
            },
            {
              "lessonId": "kim-tyt-01",
              "sectionIndex": 3,
              "title": "Laboratuvar güvenliği ve uyarı işaretleri",
              "book": "TYT-kim",
              "pages": [
                16,
                17,
                18
              ]
            },
            {
              "lessonId": "kim-tyt-01",
              "sectionIndex": 4,
              "title": "Element ve bileşiklerin insan ve çevreyle ilişkisi",
              "book": "TYT-kim",
              "pages": [
                19,
                20
              ]
            },
            {
              "lessonId": "kim-tyt-01",
              "sectionIndex": 5,
              "title": "Laboratuvar malzemelerini işlevleriyle tanıma",
              "book": "TYT-kim",
              "pages": [
                21,
                22
              ]
            }
          ],
          "coverage": "grouped",
          "page": 3
        },
        {
          "id": "tyt-kimya-02",
          "title": "Atomun Yapısı",
          "counts": [
            0,
            1,
            1,
            0,
            0,
            0,
            1,
            1
          ],
          "rawCounts": [
            "-",
            "1",
            "1",
            "-",
            "-",
            "-",
            "1",
            "1"
          ],
          "reportedTotal": 4,
          "rawTotal": "4",
          "lessonIds": [
            "kim-tyt-01"
          ],
          "bookSections": [
            {
              "lessonId": "kim-tyt-01",
              "sectionIndex": 6,
              "title": "Dalton, Thomson, Rutherford ve Bohr atom modelleri",
              "book": "TYT-kim",
              "pages": [
                23,
                24
              ]
            },
            {
              "lessonId": "kim-tyt-01",
              "sectionIndex": 7,
              "title": "Proton, nötron, elektron ve atom gösterimi",
              "book": "TYT-kim",
              "pages": [
                25
              ]
            },
            {
              "lessonId": "kim-tyt-01",
              "sectionIndex": 8,
              "title": "İzotop, izoton, izobar ve izoelektronik tanecikler",
              "book": "TYT-kim",
              "pages": [
                26,
                27
              ]
            }
          ],
          "coverage": "grouped",
          "page": 3
        },
        {
          "id": "tyt-kimya-03",
          "title": "Periyodik Tablo",
          "counts": [
            1,
            1,
            0,
            1,
            1,
            1,
            0,
            0
          ],
          "rawCounts": [
            "1",
            "1",
            "-",
            "1",
            "1",
            "1",
            "-",
            "-"
          ],
          "reportedTotal": 5,
          "rawTotal": "5",
          "lessonIds": [
            "kim-tyt-01"
          ],
          "bookSections": [
            {
              "lessonId": "kim-tyt-01",
              "sectionIndex": 9,
              "title": "Periyodik cetvel ve katman elektron dizilişi",
              "book": "TYT-kim",
              "pages": [
                28,
                29
              ]
            },
            {
              "lessonId": "kim-tyt-01",
              "sectionIndex": 10,
              "title": "Elementlerin sınıflandırılması",
              "book": "TYT-kim",
              "pages": [
                30,
                31
              ]
            },
            {
              "lessonId": "kim-tyt-01",
              "sectionIndex": 11,
              "title": "Periyodik özelliklerin değişme eğilimleri",
              "book": "TYT-kim",
              "pages": [
                32,
                33,
                34
              ]
            }
          ],
          "coverage": "grouped",
          "page": 3
        },
        {
          "id": "tyt-kimya-04",
          "title": "Maddenin Halleri",
          "counts": [
            1,
            1,
            1,
            1,
            1,
            1,
            1,
            1
          ],
          "rawCounts": [
            "1",
            "1",
            "1",
            "1",
            "1",
            "1",
            "1",
            "1"
          ],
          "reportedTotal": 8,
          "rawTotal": "8",
          "lessonIds": [
            "kim-tyt-04"
          ],
          "bookSections": [
            {
              "lessonId": "kim-tyt-04",
              "sectionIndex": 0,
              "title": "Maddenin fiziksel hâlleri ve geçişleri",
              "book": "TYT-kim",
              "pages": [
                43,
                44,
                45
              ]
            },
            {
              "lessonId": "kim-tyt-04",
              "sectionIndex": 1,
              "title": "Kristal katılar, amorf katılar ve viskozite",
              "book": "TYT-kim",
              "pages": [
                46,
                47
              ]
            },
            {
              "lessonId": "kim-tyt-04",
              "sectionIndex": 2,
              "title": "Buhar basıncı, kaynama ve buharlaşma",
              "book": "TYT-kim",
              "pages": [
                48,
                49
              ]
            },
            {
              "lessonId": "kim-tyt-04",
              "sectionIndex": 3,
              "title": "Gazlar, plazma ve hâl değişim grafikleri",
              "book": "TYT-kim",
              "pages": [
                50,
                51,
                52,
                53
              ]
            }
          ],
          "coverage": "grouped",
          "page": 3
        },
        {
          "id": "tyt-kimya-05",
          "title": "Kimyasal Türler Arası Etkileşimler",
          "counts": [
            1,
            1,
            1,
            1,
            1,
            1,
            1,
            1
          ],
          "rawCounts": [
            "1",
            "1",
            "1",
            "1",
            "1",
            "1",
            "1",
            "1"
          ],
          "reportedTotal": 8,
          "rawTotal": "8",
          "lessonIds": [
            "kim-tyt-02",
            "kim-tyt-03"
          ],
          "bookSections": [
            {
              "lessonId": "kim-tyt-02",
              "sectionIndex": 0,
              "title": "Kimyasal türlerin sınıflandırılması",
              "book": "TYT-kim",
              "pages": [
                35
              ]
            },
            {
              "lessonId": "kim-tyt-02",
              "sectionIndex": 1,
              "title": "Lewis gösterimi ve iyonik bağın oluşumu",
              "book": "TYT-kim",
              "pages": [
                36
              ]
            },
            {
              "lessonId": "kim-tyt-02",
              "sectionIndex": 2,
              "title": "İyonik bileşiklerin adlandırılması ve formülü",
              "book": "TYT-kim",
              "pages": [
                37,
                38
              ]
            },
            {
              "lessonId": "kim-tyt-02",
              "sectionIndex": 3,
              "title": "Kovalent bağların oluşumu",
              "book": "TYT-kim",
              "pages": [
                38
              ]
            },
            {
              "lessonId": "kim-tyt-02",
              "sectionIndex": 4,
              "title": "Moleküllerde polarlık",
              "book": "TYT-kim",
              "pages": [
                38
              ]
            },
            {
              "lessonId": "kim-tyt-02",
              "sectionIndex": 5,
              "title": "Kovalent adlandırma ve metalik bağ",
              "book": "TYT-kim",
              "pages": [
                39
              ]
            },
            {
              "lessonId": "kim-tyt-03",
              "sectionIndex": 0,
              "title": "Bağ enerjisi ve etkileşimlerin karşılaştırılması",
              "book": "TYT-kim",
              "pages": [
                40
              ]
            },
            {
              "lessonId": "kim-tyt-03",
              "sectionIndex": 1,
              "title": "Dipol–dipol ve iyon–dipol etkileşimleri",
              "book": "TYT-kim",
              "pages": [
                40
              ]
            },
            {
              "lessonId": "kim-tyt-03",
              "sectionIndex": 2,
              "title": "İndüklenmiş dipol ve London kuvvetleri",
              "book": "TYT-kim",
              "pages": [
                40
              ]
            },
            {
              "lessonId": "kim-tyt-03",
              "sectionIndex": 3,
              "title": "Hidrojen bağı için yapı koşulu",
              "book": "TYT-kim",
              "pages": [
                41
              ]
            },
            {
              "lessonId": "kim-tyt-03",
              "sectionIndex": 4,
              "title": "Hidrojen bağının kaynama noktasına etkisi",
              "book": "TYT-kim",
              "pages": [
                41
              ]
            },
            {
              "lessonId": "kim-tyt-03",
              "sectionIndex": 5,
              "title": "Fiziksel ve kimyasal değişimlerin ayrımı",
              "book": "TYT-kim",
              "pages": [
                42
              ]
            }
          ],
          "coverage": "grouped",
          "page": 3
        },
        {
          "id": "tyt-kimya-06",
          "title": "Kimyasal Hesaplamalar",
          "counts": [
            0,
            0,
            1,
            1,
            0,
            0,
            1,
            0
          ],
          "rawCounts": [
            "-",
            "-",
            "1",
            "1",
            "-",
            "-",
            "1",
            "-"
          ],
          "reportedTotal": 3,
          "rawTotal": "3",
          "lessonIds": [
            "kim-tyt-05"
          ],
          "bookSections": [
            {
              "lessonId": "kim-tyt-05",
              "sectionIndex": 1,
              "title": "Mol, mol kütlesi ve tanecik türü",
              "book": "TYT-kim",
              "pages": [
                61
              ]
            },
            {
              "lessonId": "kim-tyt-05",
              "sectionIndex": 2,
              "title": "Atom kütlesi, izotop ortalaması ve mol dönüşümleri",
              "book": "TYT-kim",
              "pages": [
                62,
                63
              ]
            },
            {
              "lessonId": "kim-tyt-05",
              "sectionIndex": 3,
              "title": "Kimyasal denklemler ve denkleştirme",
              "book": "TYT-kim",
              "pages": [
                64,
                65
              ]
            },
            {
              "lessonId": "kim-tyt-05",
              "sectionIndex": 4,
              "title": "Tepkime türleri ve net iyon denklemi",
              "book": "TYT-kim",
              "pages": [
                66,
                67
              ]
            },
            {
              "lessonId": "kim-tyt-05",
              "sectionIndex": 5,
              "title": "Sınırlayıcı bileşen ve yüzde verim",
              "book": "TYT-kim",
              "pages": [
                68,
                69,
                70
              ]
            }
          ],
          "coverage": "grouped",
          "page": 3
        },
        {
          "id": "tyt-kimya-07",
          "title": "Kimyanın Temel Kanunları",
          "counts": [
            1,
            0,
            0,
            0,
            1,
            1,
            0,
            0
          ],
          "rawCounts": [
            "1",
            "-",
            "-",
            "-",
            "1",
            "1",
            "-",
            "-"
          ],
          "reportedTotal": 3,
          "rawTotal": "3",
          "lessonIds": [
            "kim-tyt-05"
          ],
          "bookSections": [
            {
              "lessonId": "kim-tyt-05",
              "sectionIndex": 0,
              "title": "Kütlenin korunumu, sabit ve katlı oranlar",
              "book": "TYT-kim",
              "pages": [
                59,
                60
              ]
            }
          ],
          "coverage": "grouped",
          "page": 3
        },
        {
          "id": "tyt-kimya-08",
          "title": "Asit, Baz ve Tuzlar",
          "counts": [
            0,
            1,
            1,
            1,
            1,
            1,
            1,
            1
          ],
          "rawCounts": [
            "-",
            "1",
            "1",
            "1",
            "1",
            "1",
            "1",
            "1"
          ],
          "reportedTotal": 7,
          "rawTotal": "7",
          "lessonIds": [
            "kim-tyt-08"
          ],
          "bookSections": [
            {
              "lessonId": "kim-tyt-08",
              "sectionIndex": 0,
              "title": "Asitlerin ve bazların özellikleri",
              "book": "TYT-kim",
              "pages": [
                80
              ]
            },
            {
              "lessonId": "kim-tyt-08",
              "sectionIndex": 1,
              "title": "Nötralleşme, metaller ve tuzlar",
              "book": "TYT-kim",
              "pages": [
                81,
                82,
                83,
                84
              ]
            }
          ],
          "coverage": "grouped",
          "page": 3
        },
        {
          "id": "tyt-kimya-09",
          "title": "Karışımlar",
          "counts": [
            0,
            1,
            1,
            1,
            1,
            1,
            1,
            1
          ],
          "rawCounts": [
            "-",
            "1",
            "1",
            "1",
            "1",
            "1",
            "1",
            "1"
          ],
          "reportedTotal": 7,
          "rawTotal": "7",
          "lessonIds": [
            "kim-tyt-06",
            "kim-tyt-07"
          ],
          "bookSections": [
            {
              "lessonId": "kim-tyt-06",
              "sectionIndex": 0,
              "title": "Saf madde, bileşik ve karışım",
              "book": "TYT-kim",
              "pages": [
                71
              ]
            },
            {
              "lessonId": "kim-tyt-06",
              "sectionIndex": 1,
              "title": "Tanecik boyutu, süspansiyon, emülsiyon ve kolloid",
              "book": "TYT-kim",
              "pages": [
                72
              ]
            },
            {
              "lessonId": "kim-tyt-06",
              "sectionIndex": 2,
              "title": "Çözünme süreci ve elektrik iletkenliği",
              "book": "TYT-kim",
              "pages": [
                73
              ]
            },
            {
              "lessonId": "kim-tyt-06",
              "sectionIndex": 3,
              "title": "Derişim, yüzde ve çözelti hazırlama",
              "book": "TYT-kim",
              "pages": [
                74
              ]
            },
            {
              "lessonId": "kim-tyt-06",
              "sectionIndex": 4,
              "title": "Koligatif özellikler ve tanecik sayısı",
              "book": "TYT-kim",
              "pages": [
                75
              ]
            },
            {
              "lessonId": "kim-tyt-06",
              "sectionIndex": 5,
              "title": "Saf maddenin ısınma tablosunu çözeltiden ayırma",
              "book": "TYT-kim",
              "pages": [
                76
              ]
            },
            {
              "lessonId": "kim-tyt-07",
              "sectionIndex": 0,
              "title": "Tanecik boyutu: ayıklama, eleme, süzme ve diyaliz",
              "book": "TYT-kim",
              "pages": [
                77
              ]
            },
            {
              "lessonId": "kim-tyt-07",
              "sectionIndex": 1,
              "title": "Yoğunluk farkı ve manyetik özellik",
              "book": "TYT-kim",
              "pages": [
                77
              ]
            },
            {
              "lessonId": "kim-tyt-07",
              "sectionIndex": 2,
              "title": "Ayırma hunisi ve birbirinde çözünmeyen sıvılar",
              "book": "TYT-kim",
              "pages": [
                78
              ]
            },
            {
              "lessonId": "kim-tyt-07",
              "sectionIndex": 3,
              "title": "Buharlaştırma, basit damıtma ve ayrımsal damıtma",
              "book": "TYT-kim",
              "pages": [
                78
              ]
            },
            {
              "lessonId": "kim-tyt-07",
              "sectionIndex": 4,
              "title": "Özütleme ve kristallendirme",
              "book": "TYT-kim",
              "pages": [
                78
              ]
            },
            {
              "lessonId": "kim-tyt-07",
              "sectionIndex": 5,
              "title": "Yöntem seçimi ve hâl değişimiyle bağlantı",
              "book": "TYT-kim",
              "pages": [
                79
              ]
            }
          ],
          "coverage": "grouped",
          "page": 3
        },
        {
          "id": "tyt-kimya-10",
          "title": "Kimya Her Yerde",
          "counts": [
            1,
            1,
            0,
            0,
            0,
            0,
            0,
            0
          ],
          "rawCounts": [
            "1",
            "1",
            "-",
            "-",
            "-",
            "-",
            "-",
            "-"
          ],
          "reportedTotal": 2,
          "rawTotal": "2",
          "lessonIds": [
            "kim-tyt-08",
            "kim-tyt-04"
          ],
          "bookSections": [
            {
              "lessonId": "kim-tyt-08",
              "sectionIndex": 2,
              "title": "Sabun, deterjan ve temizlik mekanizması",
              "book": "TYT-kim",
              "pages": [
                85,
                86
              ]
            },
            {
              "lessonId": "kim-tyt-08",
              "sectionIndex": 3,
              "title": "Monomer, polimer ve geri dönüşüm",
              "book": "TYT-kim",
              "pages": [
                87,
                88,
                89
              ]
            },
            {
              "lessonId": "kim-tyt-08",
              "sectionIndex": 4,
              "title": "Kozmetik maddeler ve ilaç formları",
              "book": "TYT-kim",
              "pages": [
                90
              ]
            },
            {
              "lessonId": "kim-tyt-08",
              "sectionIndex": 5,
              "title": "Gıda katkıları, işleme yöntemleri ve yağlar",
              "book": "TYT-kim",
              "pages": [
                91,
                92
              ]
            },
            {
              "lessonId": "kim-tyt-04",
              "sectionIndex": 4,
              "title": "Su kaynakları ve suyun sertliği",
              "book": "TYT-kim",
              "pages": [
                54,
                55
              ]
            },
            {
              "lessonId": "kim-tyt-04",
              "sectionIndex": 5,
              "title": "Çevre kirleticileri ve etkilerini azaltma",
              "book": "TYT-kim",
              "pages": [
                56,
                57,
                58
              ]
            }
          ],
          "coverage": "grouped",
          "page": 3
        }
      ],
      "notes": [
        "Kaynak tablosunda boş hücre veya toplam tutarsızlığı var; ayrıntılar issues alanında ham değerlerle kaydedilmiştir."
      ],
      "issues": [
        {
          "type": "yearTotalMismatch",
          "year": 2025,
          "computedKnownSum": 6,
          "reported": 7,
          "blankRows": [],
          "message": "Görünen konu hücrelerinin toplamı kaynakta yazılı yıl toplamıyla uyuşmuyor; yıl toplamı düzeltilmedi."
        }
      ]
    },
    {
      "id": "tyt-biyoloji",
      "exam": "TYT",
      "subject": "biyoloji",
      "label": "TYT Biyoloji",
      "sourceId": "tyt",
      "inScope": true,
      "page": 4,
      "pages": [
        4
      ],
      "reportedYearTotals": [
        6,
        6,
        6,
        6,
        6,
        6,
        6,
        6
      ],
      "rows": [
        {
          "id": "tyt-biyoloji-01",
          "title": "Canlıların Ortak Özellikleri",
          "counts": [
            0,
            1,
            0,
            0,
            1,
            0,
            0,
            1
          ],
          "rawCounts": [
            "-",
            "1",
            "-",
            "-",
            "1",
            "-",
            "-",
            "1"
          ],
          "reportedTotal": 3,
          "rawTotal": "3",
          "lessonIds": [
            "bio-tyt-01"
          ],
          "bookSections": [
            {
              "lessonId": "bio-tyt-01",
              "sectionIndex": 0,
              "title": "Hücresel Yapı",
              "book": "TYT-bio",
              "pages": [
                9
              ]
            },
            {
              "lessonId": "bio-tyt-01",
              "sectionIndex": 1,
              "title": "Beslenme",
              "book": "TYT-bio",
              "pages": [
                10
              ]
            },
            {
              "lessonId": "bio-tyt-01",
              "sectionIndex": 2,
              "title": "Besinlerden Enerji Elde Etme ve Boşaltım",
              "book": "TYT-bio",
              "pages": [
                11
              ]
            },
            {
              "lessonId": "bio-tyt-01",
              "sectionIndex": 3,
              "title": "Hareket ve Uyarılara Tepki",
              "book": "TYT-bio",
              "pages": [
                12
              ]
            },
            {
              "lessonId": "bio-tyt-01",
              "sectionIndex": 4,
              "title": "Metabolizma, Homeostazi ve Uyum",
              "book": "TYT-bio",
              "pages": [
                13
              ]
            },
            {
              "lessonId": "bio-tyt-01",
              "sectionIndex": 5,
              "title": "Organizasyon, Üreme, Büyüme ve Gelişme",
              "book": "TYT-bio",
              "pages": [
                14,
                15
              ]
            }
          ],
          "coverage": "covered",
          "page": 4
        },
        {
          "id": "tyt-biyoloji-02",
          "title": "Canlıların Temel Bileşenleri",
          "counts": [
            1,
            1,
            1,
            1,
            0,
            1,
            1,
            0
          ],
          "rawCounts": [
            "1",
            "1",
            "1",
            "1",
            "-",
            "1",
            "1",
            "-"
          ],
          "reportedTotal": 6,
          "rawTotal": "6",
          "lessonIds": [
            "bio-tyt-02",
            "bio-tyt-03"
          ],
          "bookSections": [
            {
              "lessonId": "bio-tyt-02",
              "sectionIndex": 0,
              "title": "İnorganik Bileşiklerin Genel Özellikleri ve Suyun Görevleri",
              "book": "TYT-bio",
              "pages": [
                16,
                17
              ]
            },
            {
              "lessonId": "bio-tyt-02",
              "sectionIndex": 1,
              "title": "Tuzlar ve Mineraller",
              "book": "TYT-bio",
              "pages": [
                18,
                19
              ]
            },
            {
              "lessonId": "bio-tyt-02",
              "sectionIndex": 2,
              "title": "Organik Bileşikler, Dehidrasyon, Hidroliz ve Karbonhidratlar",
              "book": "TYT-bio",
              "pages": [
                20,
                21,
                22,
                23,
                24
              ]
            },
            {
              "lessonId": "bio-tyt-02",
              "sectionIndex": 3,
              "title": "Lipitler",
              "book": "TYT-bio",
              "pages": [
                25,
                26,
                27
              ]
            },
            {
              "lessonId": "bio-tyt-02",
              "sectionIndex": 4,
              "title": "Proteinler",
              "book": "TYT-bio",
              "pages": [
                28,
                29,
                30
              ]
            },
            {
              "lessonId": "bio-tyt-02",
              "sectionIndex": 5,
              "title": "Vitaminler ve Hormonlar",
              "book": "TYT-bio",
              "pages": [
                36,
                37
              ]
            },
            {
              "lessonId": "bio-tyt-02",
              "sectionIndex": 6,
              "title": "Nükleik Asitler",
              "book": "TYT-bio",
              "pages": [
                38,
                39,
                40,
                41
              ]
            },
            {
              "lessonId": "bio-tyt-02",
              "sectionIndex": 7,
              "title": "ATP (Adenozin trifosfat)",
              "book": "TYT-bio",
              "pages": [
                42,
                43
              ]
            },
            {
              "lessonId": "bio-tyt-02",
              "sectionIndex": 8,
              "title": "Sağlıklı Beslenme",
              "book": "TYT-bio",
              "pages": [
                44,
                45
              ]
            },
            {
              "lessonId": "bio-tyt-03",
              "sectionIndex": 0,
              "title": "Yapısı — aktivasyon enerjisi grafiği",
              "book": "TYT-bio",
              "pages": [
                31
              ]
            },
            {
              "lessonId": "bio-tyt-03",
              "sectionIndex": 1,
              "title": "Enzimin Yapısı — Basit Enzim ve Bileşik Enzim (Holoenzim)",
              "book": "TYT-bio",
              "pages": [
                31
              ]
            },
            {
              "lessonId": "bio-tyt-03",
              "sectionIndex": 2,
              "title": "Substrat, ürün ve anahtar-kilit ilişkisi",
              "book": "TYT-bio",
              "pages": [
                31,
                32
              ]
            },
            {
              "lessonId": "bio-tyt-03",
              "sectionIndex": 3,
              "title": "Enzimatik bir tepkimenin gerçekleşmesi",
              "book": "TYT-bio",
              "pages": [
                32
              ]
            },
            {
              "lessonId": "bio-tyt-03",
              "sectionIndex": 4,
              "title": "Karbonik anhidrazın tersinir çalışması ve katalaz",
              "book": "TYT-bio",
              "pages": [
                32
              ]
            },
            {
              "lessonId": "bio-tyt-03",
              "sectionIndex": 5,
              "title": "Üretim yeri, çalışma yeri ve enzimlerin adlandırılması",
              "book": "TYT-bio",
              "pages": [
                32
              ]
            },
            {
              "lessonId": "bio-tyt-03",
              "sectionIndex": 6,
              "title": "Amilaz ve maltazın takım hâlinde çalışması; geri besleme",
              "book": "TYT-bio",
              "pages": [
                32
              ]
            },
            {
              "lessonId": "bio-tyt-03",
              "sectionIndex": 7,
              "title": "Enzimlerin Çalışmasına Etki Eden Faktörler — Sıcaklık",
              "book": "TYT-bio",
              "pages": [
                33
              ]
            },
            {
              "lessonId": "bio-tyt-03",
              "sectionIndex": 8,
              "title": "pH Derecesi — pepsin ve tripsin grafiği",
              "book": "TYT-bio",
              "pages": [
                33
              ]
            },
            {
              "lessonId": "bio-tyt-03",
              "sectionIndex": 9,
              "title": "Enzim ve Substrat Miktarı — substrat yeterliyken",
              "book": "TYT-bio",
              "pages": [
                33
              ]
            },
            {
              "lessonId": "bio-tyt-03",
              "sectionIndex": 10,
              "title": "Sınırlı enzim miktarının reaksiyon hızına etkisi",
              "book": "TYT-bio",
              "pages": [
                34
              ]
            },
            {
              "lessonId": "bio-tyt-03",
              "sectionIndex": 11,
              "title": "Sınırlı substrat miktarının reaksiyon hızına etkisi",
              "book": "TYT-bio",
              "pages": [
                34
              ]
            },
            {
              "lessonId": "bio-tyt-03",
              "sectionIndex": 12,
              "title": "Su Miktarı",
              "book": "TYT-bio",
              "pages": [
                34
              ]
            },
            {
              "lessonId": "bio-tyt-03",
              "sectionIndex": 13,
              "title": "Substrat Yüzeyi",
              "book": "TYT-bio",
              "pages": [
                34
              ]
            },
            {
              "lessonId": "bio-tyt-03",
              "sectionIndex": 14,
              "title": "Aktivatör ve İnhibitör Etkisi, Görevi ve Canlılar İçin Önemi",
              "book": "TYT-bio",
              "pages": [
                35
              ]
            }
          ],
          "coverage": "grouped",
          "page": 4
        },
        {
          "id": "tyt-biyoloji-03",
          "title": "Hücre ve Organelleri",
          "counts": [
            0,
            0,
            1,
            1,
            1,
            1,
            1,
            0
          ],
          "rawCounts": [
            "-",
            "-",
            "1",
            "1",
            "1",
            "1",
            "1",
            "-"
          ],
          "reportedTotal": 5,
          "rawTotal": "5",
          "lessonIds": [
            "bio-tyt-04"
          ],
          "bookSections": [
            {
              "lessonId": "bio-tyt-04",
              "sectionIndex": 0,
              "title": "Hücre Teorisi, Prokaryot ve Ökaryot Hücre Yapısı",
              "book": "TYT-bio",
              "pages": [
                46,
                47,
                48,
                49
              ]
            },
            {
              "lessonId": "bio-tyt-04",
              "sectionIndex": 1,
              "title": "Hücre Zarı, Hücre Duvarı, Sitoplazma, Çekirdek",
              "book": "TYT-bio",
              "pages": [
                50,
                51,
                52,
                53
              ]
            },
            {
              "lessonId": "bio-tyt-04",
              "sectionIndex": 2,
              "title": "Ribozom ve Endoplazmik Retikulum",
              "book": "TYT-bio",
              "pages": [
                54,
                55
              ]
            },
            {
              "lessonId": "bio-tyt-04",
              "sectionIndex": 3,
              "title": "Golgi Aygıtı, Lizozom ve Koful",
              "book": "TYT-bio",
              "pages": [
                56,
                57,
                58
              ]
            },
            {
              "lessonId": "bio-tyt-04",
              "sectionIndex": 4,
              "title": "Peroksizom, Sentrozom ve Hücre İskeleti",
              "book": "TYT-bio",
              "pages": [
                59,
                60
              ]
            },
            {
              "lessonId": "bio-tyt-04",
              "sectionIndex": 5,
              "title": "Mitokondri ve Plastitler",
              "book": "TYT-bio",
              "pages": [
                61,
                62,
                63
              ]
            }
          ],
          "coverage": "covered",
          "page": 4
        },
        {
          "id": "tyt-biyoloji-04",
          "title": "Madde Geçişleri",
          "counts": [
            1,
            0,
            0,
            0,
            null,
            0,
            0,
            1
          ],
          "rawCounts": [
            "1",
            "-",
            "-",
            "-",
            "",
            "-",
            "-",
            "1"
          ],
          "reportedTotal": 2,
          "rawTotal": "2",
          "lessonIds": [
            "bio-tyt-05"
          ],
          "bookSections": [
            {
              "lessonId": "bio-tyt-05",
              "sectionIndex": 0,
              "title": "Hücre Zarından Madde Geçişleri ve Pasif Taşıma",
              "book": "TYT-bio",
              "pages": [
                64
              ]
            },
            {
              "lessonId": "bio-tyt-05",
              "sectionIndex": 1,
              "title": "Basit Difüzyon, Kolaylaştırılmış Difüzyon ve Diyaliz",
              "book": "TYT-bio",
              "pages": [
                65,
                66
              ]
            },
            {
              "lessonId": "bio-tyt-05",
              "sectionIndex": 2,
              "title": "Osmoz",
              "book": "TYT-bio",
              "pages": [
                67
              ]
            },
            {
              "lessonId": "bio-tyt-05",
              "sectionIndex": 3,
              "title": "Çözelti Çeşitleri ve Osmoza Bağlı Gerçekleşen Olaylar",
              "book": "TYT-bio",
              "pages": [
                68
              ]
            },
            {
              "lessonId": "bio-tyt-05",
              "sectionIndex": 4,
              "title": "Aktif Taşıma",
              "book": "TYT-bio",
              "pages": [
                69
              ]
            },
            {
              "lessonId": "bio-tyt-05",
              "sectionIndex": 5,
              "title": "Endositoz ve Ekzositoz",
              "book": "TYT-bio",
              "pages": [
                70,
                71
              ]
            },
            {
              "lessonId": "bio-tyt-05",
              "sectionIndex": 6,
              "title": "Bilimsel Yöntem ve Basamakları",
              "book": "TYT-bio",
              "pages": [
                72
              ]
            }
          ],
          "coverage": "covered",
          "note": "2022 hücresi kaynakta boş.",
          "page": 4
        },
        {
          "id": "tyt-biyoloji-05",
          "title": "Canlıların Sınıflandırılması",
          "counts": [
            1,
            1,
            1,
            1,
            1,
            1,
            1,
            1
          ],
          "rawCounts": [
            "1",
            "1",
            "1",
            "1",
            "1",
            "1",
            "1",
            "1"
          ],
          "reportedTotal": 8,
          "rawTotal": "8",
          "lessonIds": [
            "bio-tyt-09"
          ],
          "bookSections": [
            {
              "lessonId": "bio-tyt-09",
              "sectionIndex": 0,
              "title": "Sınıflandırmanın Amacı; Yapay ve Doğal Sınıflandırma",
              "book": "TYT-bio",
              "pages": [
                73,
                74
              ]
            },
            {
              "lessonId": "bio-tyt-09",
              "sectionIndex": 1,
              "title": "Kategoriler Arasındaki Hiyerarşi ve İkili Adlandırma",
              "book": "TYT-bio",
              "pages": [
                75,
                76
              ]
            },
            {
              "lessonId": "bio-tyt-09",
              "sectionIndex": 2,
              "title": "Bakteriler Âlemi ve Arkeler Âlemi",
              "book": "TYT-bio",
              "pages": [
                77,
                78,
                79,
                80,
                81
              ]
            },
            {
              "lessonId": "bio-tyt-09",
              "sectionIndex": 3,
              "title": "Protista, Bitkiler ve Mantarlar Âlemleri",
              "book": "TYT-bio",
              "pages": [
                82,
                83,
                84,
                85,
                86,
                87,
                88,
                89
              ]
            },
            {
              "lessonId": "bio-tyt-09",
              "sectionIndex": 4,
              "title": "Hayvanlar Âlemi: Omurgasızlar ve Omurgalılar",
              "book": "TYT-bio",
              "pages": [
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
            {
              "lessonId": "bio-tyt-09",
              "sectionIndex": 5,
              "title": "Virüslerin Genel Özellikleri ve Çoğalması",
              "book": "TYT-bio",
              "pages": [
                98,
                99,
                100
              ]
            }
          ],
          "coverage": "covered",
          "page": 4
        },
        {
          "id": "tyt-biyoloji-06",
          "title": "Hücre Bölünmeleri ve Üreme",
          "counts": [
            1,
            1,
            1,
            1,
            1,
            1,
            1,
            1
          ],
          "rawCounts": [
            "1",
            "1",
            "1",
            "1",
            "1",
            "1",
            "1",
            "1"
          ],
          "reportedTotal": 8,
          "rawTotal": "8",
          "lessonIds": [
            "bio-tyt-06",
            "bio-tyt-07"
          ],
          "bookSections": [
            {
              "lessonId": "bio-tyt-06",
              "sectionIndex": 0,
              "title": "Hücre Neden Bölünür? ve kromozomun yapısı",
              "book": "TYT-bio",
              "pages": [
                101
              ]
            },
            {
              "lessonId": "bio-tyt-06",
              "sectionIndex": 1,
              "title": "Hücre Döngüsü ve İnterfaz",
              "book": "TYT-bio",
              "pages": [
                102,
                103
              ]
            },
            {
              "lessonId": "bio-tyt-06",
              "sectionIndex": 2,
              "title": "Mitozun Genel Özellikleri ve Mitotik Evre",
              "book": "TYT-bio",
              "pages": [
                104
              ]
            },
            {
              "lessonId": "bio-tyt-06",
              "sectionIndex": 3,
              "title": "Mitoz (Karyokinez): Profaz, Metafaz, Anafaz, Telofaz",
              "book": "TYT-bio",
              "pages": [
                105
              ]
            },
            {
              "lessonId": "bio-tyt-06",
              "sectionIndex": 4,
              "title": "Sitokinez ve Kromozom Sayısı–DNA Miktarı Değişimi",
              "book": "TYT-bio",
              "pages": [
                106
              ]
            },
            {
              "lessonId": "bio-tyt-06",
              "sectionIndex": 5,
              "title": "Hücre Döngüsünün Kontrolü",
              "book": "TYT-bio",
              "pages": [
                107,
                108
              ]
            },
            {
              "lessonId": "bio-tyt-06",
              "sectionIndex": 6,
              "title": "Eşeysiz Üreme: Bölünme, Tomurcuklanma ve Rejenerasyon",
              "book": "TYT-bio",
              "pages": [
                109,
                110
              ]
            },
            {
              "lessonId": "bio-tyt-06",
              "sectionIndex": 7,
              "title": "Sporla Üreme, Partenogenez ve Vejetatif Üreme",
              "book": "TYT-bio",
              "pages": [
                111,
                112,
                113
              ]
            },
            {
              "lessonId": "bio-tyt-07",
              "sectionIndex": 0,
              "title": "Mayozun Genel Özellikleri ve İnterfaz",
              "book": "TYT-bio",
              "pages": [
                114
              ]
            },
            {
              "lessonId": "bio-tyt-07",
              "sectionIndex": 1,
              "title": "Mayoz I ve Profaz I",
              "book": "TYT-bio",
              "pages": [
                115
              ]
            },
            {
              "lessonId": "bio-tyt-07",
              "sectionIndex": 2,
              "title": "Metafaz I, Anafaz I ve Telofaz I",
              "book": "TYT-bio",
              "pages": [
                116
              ]
            },
            {
              "lessonId": "bio-tyt-07",
              "sectionIndex": 3,
              "title": "Sitokinez I ve Mayoz II Evreleri",
              "book": "TYT-bio",
              "pages": [
                117,
                118
              ]
            },
            {
              "lessonId": "bio-tyt-07",
              "sectionIndex": 4,
              "title": "Sitokinez II, Kromozom Sayısı ve DNA Miktarı",
              "book": "TYT-bio",
              "pages": [
                119
              ]
            },
            {
              "lessonId": "bio-tyt-07",
              "sectionIndex": 5,
              "title": "Mitoz ve Mayozun Karşılaştırılması",
              "book": "TYT-bio",
              "pages": [
                120
              ]
            },
            {
              "lessonId": "bio-tyt-07",
              "sectionIndex": 6,
              "title": "Eşeyli Üremenin Genel Özellikleri ve Örnekleri",
              "book": "TYT-bio",
              "pages": [
                121,
                122
              ]
            }
          ],
          "coverage": "grouped",
          "page": 4
        },
        {
          "id": "tyt-biyoloji-07",
          "title": "Ekosistem Ekoloji",
          "counts": [
            1,
            1,
            0,
            1,
            0,
            1,
            1,
            0
          ],
          "rawCounts": [
            "1",
            "1",
            "-",
            "1",
            "-",
            "1",
            "1",
            "-"
          ],
          "reportedTotal": 5,
          "rawTotal": "5",
          "lessonIds": [
            "bio-tyt-10"
          ],
          "bookSections": [
            {
              "lessonId": "bio-tyt-10",
              "sectionIndex": 0,
              "title": "Ekolojik Kavramlar",
              "book": "TYT-bio",
              "pages": [
                145,
                146
              ]
            },
            {
              "lessonId": "bio-tyt-10",
              "sectionIndex": 1,
              "title": "Ekosistemin Canlı ve Cansız Bileşenleri",
              "book": "TYT-bio",
              "pages": [
                147,
                148
              ]
            },
            {
              "lessonId": "bio-tyt-10",
              "sectionIndex": 2,
              "title": "Canlılardaki Beslenme Şekilleri",
              "book": "TYT-bio",
              "pages": [
                149,
                150,
                151
              ]
            },
            {
              "lessonId": "bio-tyt-10",
              "sectionIndex": 3,
              "title": "Besin Zinciri, Besin Ağı ve Besin Piramidi",
              "book": "TYT-bio",
              "pages": [
                152,
                153
              ]
            },
            {
              "lessonId": "bio-tyt-10",
              "sectionIndex": 4,
              "title": "Madde ve Enerji Akışı; Biyolojik Birikim",
              "book": "TYT-bio",
              "pages": [
                154,
                155
              ]
            },
            {
              "lessonId": "bio-tyt-10",
              "sectionIndex": 5,
              "title": "Madde Döngüleri: Su, Karbon ve Azot",
              "book": "TYT-bio",
              "pages": [
                156,
                157,
                158
              ]
            }
          ],
          "coverage": "grouped",
          "page": 4
        },
        {
          "id": "tyt-biyoloji-08",
          "title": "Güncel Çevre Sorunları",
          "counts": [
            1,
            0,
            1,
            0,
            1,
            0,
            0,
            1
          ],
          "rawCounts": [
            "1",
            "-",
            "1",
            "-",
            "1",
            "-",
            "-",
            "1"
          ],
          "reportedTotal": 4,
          "rawTotal": "4",
          "lessonIds": [
            "bio-tyt-10"
          ],
          "bookSections": [
            {
              "lessonId": "bio-tyt-10",
              "sectionIndex": 6,
              "title": "Hava Kirliliği, Asit Yağmurları ve Küresel İklim Değişikliği",
              "book": "TYT-bio",
              "pages": [
                159,
                160
              ]
            },
            {
              "lessonId": "bio-tyt-10",
              "sectionIndex": 7,
              "title": "Su, Toprak, Radyoaktif ve Ses Kirliliği",
              "book": "TYT-bio",
              "pages": [
                161,
                162,
                163
              ]
            },
            {
              "lessonId": "bio-tyt-10",
              "sectionIndex": 8,
              "title": "Erozyon, Habitat Tahribi ve Biyoçeşitliliğin Azalması",
              "book": "TYT-bio",
              "pages": [
                164,
                165
              ]
            },
            {
              "lessonId": "bio-tyt-10",
              "sectionIndex": 9,
              "title": "Ekolojik, Karbon ve Su Ayak İzi; Çözüm Önerileri",
              "book": "TYT-bio",
              "pages": [
                166,
                167
              ]
            },
            {
              "lessonId": "bio-tyt-10",
              "sectionIndex": 10,
              "title": "Doğal Kaynakların Sürdürülebilirliği ve Biyolojik Çeşitliliğin Korunması",
              "book": "TYT-bio",
              "pages": [
                168,
                169,
                170,
                171
              ]
            }
          ],
          "coverage": "grouped",
          "page": 4
        },
        {
          "id": "tyt-biyoloji-09",
          "title": "Kalıtım",
          "counts": [
            0,
            1,
            1,
            1,
            1,
            1,
            1,
            1
          ],
          "rawCounts": [
            "-",
            "1",
            "1",
            "1",
            "1",
            "1",
            "1",
            "1"
          ],
          "reportedTotal": 8,
          "rawTotal": "8",
          "lessonIds": [
            "bio-tyt-08"
          ],
          "bookSections": [
            {
              "lessonId": "bio-tyt-08",
              "sectionIndex": 0,
              "title": "Kalıtımla İlgili Kavramlar",
              "book": "TYT-bio",
              "pages": [
                123
              ]
            },
            {
              "lessonId": "bio-tyt-08",
              "sectionIndex": 1,
              "title": "Olasılık İlkeleri ve Gamet Çeşitlerinin Bulunması",
              "book": "TYT-bio",
              "pages": [
                124,
                125,
                126
              ]
            },
            {
              "lessonId": "bio-tyt-08",
              "sectionIndex": 2,
              "title": "Mendel’in Çalışmaları ve Monohibrit Çaprazlama",
              "book": "TYT-bio",
              "pages": [
                127
              ]
            },
            {
              "lessonId": "bio-tyt-08",
              "sectionIndex": 3,
              "title": "Monohibrit F2: Genotip Oranı 1:2:1, Fenotip Oranı 3:1",
              "book": "TYT-bio",
              "pages": [
                128
              ]
            },
            {
              "lessonId": "bio-tyt-08",
              "sectionIndex": 4,
              "title": "Dihibrit Çaprazlama ve Mendel İlkeleri",
              "book": "TYT-bio",
              "pages": [
                129,
                130
              ]
            },
            {
              "lessonId": "bio-tyt-08",
              "sectionIndex": 5,
              "title": "Kontrol Çaprazlaması (Test Çaprazlaması)",
              "book": "TYT-bio",
              "pages": [
                131
              ]
            },
            {
              "lessonId": "bio-tyt-08",
              "sectionIndex": 6,
              "title": "Eş Baskınlık, Çok Alellilik ve Kan Gruplarının Kalıtımı",
              "book": "TYT-bio",
              "pages": [
                132,
                133,
                134
              ]
            },
            {
              "lessonId": "bio-tyt-08",
              "sectionIndex": 7,
              "title": "Eşeye Bağlı Kalıtım ve Akraba Evliliği",
              "book": "TYT-bio",
              "pages": [
                135,
                136,
                137,
                138,
                139
              ]
            },
            {
              "lessonId": "bio-tyt-08",
              "sectionIndex": 8,
              "title": "Soyağacı Analizi ve Örnekleri",
              "book": "TYT-bio",
              "pages": [
                140,
                141,
                142
              ]
            },
            {
              "lessonId": "bio-tyt-08",
              "sectionIndex": 9,
              "title": "Genetik Varyasyonların Kaynakları ve Biyolojik Çeşitlilik",
              "book": "TYT-bio",
              "pages": [
                143,
                144
              ]
            }
          ],
          "coverage": "covered",
          "note": "Kaynakta toplam 8 yazıyor; yıllık hücrelerin toplamı 7. Ham toplam değiştirilmedi.",
          "page": 4
        }
      ],
      "notes": [
        "Kaynak tablosunda boş hücre veya toplam tutarsızlığı var; ayrıntılar issues alanında ham değerlerle kaydedilmiştir."
      ],
      "issues": [
        {
          "type": "blankSourceCells",
          "rowId": "tyt-biyoloji-04",
          "years": [
            2022
          ],
          "message": "Kaynakta boş hücreler var; toplamdan değer üretilmedi."
        },
        {
          "type": "rowTotalMismatch",
          "rowId": "tyt-biyoloji-09",
          "computedKnownSum": 7,
          "reported": 8,
          "message": "Görünen yıllık hücreler kaynakta yazılı satır toplamıyla uyuşmuyor; ham veri korundu."
        }
      ]
    },
    {
      "id": "tyt-tarih",
      "exam": "TYT",
      "subject": "tarih",
      "label": "TYT Tarih",
      "sourceId": "tyt",
      "inScope": true,
      "page": 4,
      "pages": [
        4
      ],
      "reportedYearTotals": [
        5,
        5,
        5,
        5,
        5,
        5,
        5,
        5
      ],
      "rows": [
        {
          "id": "tyt-tarih-01",
          "title": "Tarih ve Zaman",
          "counts": [
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0
          ],
          "rawCounts": [
            "-",
            "-",
            "-",
            "-",
            "-",
            "-",
            "-",
            "-"
          ],
          "reportedTotal": null,
          "rawTotal": "",
          "lessonIds": [
            "tar-01",
            "tar-02"
          ],
          "bookSections": [
            {
              "lessonId": "tar-01",
              "sectionIndex": 0,
              "title": "İnsanlığın Hafızası Tarih",
              "book": "TYT-tar",
              "pages": [
                9,
                10,
                11
              ]
            },
            {
              "lessonId": "tar-02",
              "sectionIndex": 0,
              "title": "Zamanın Taksimi",
              "book": "TYT-tar",
              "pages": [
                12,
                13
              ]
            }
          ],
          "coverage": "grouped",
          "page": 4
        },
        {
          "id": "tyt-tarih-02",
          "title": "İlk ve Orta Çağlarda Türk Dünyası",
          "counts": [
            1,
            1,
            1,
            1,
            1,
            1,
            1,
            1
          ],
          "rawCounts": [
            "1",
            "1",
            "1",
            "1",
            "1",
            "1",
            "1",
            "1"
          ],
          "reportedTotal": 8,
          "rawTotal": "8",
          "lessonIds": [
            "tar-03"
          ],
          "bookSections": [
            {
              "lessonId": "tar-03",
              "sectionIndex": 0,
              "title": "Avrasya’da İlk Türk İzleri - Coğrafya ile Oluşan Yaşam Tarzı",
              "book": "TYT-tar",
              "pages": [
                14,
                15,
                16,
                17
              ]
            },
            {
              "lessonId": "tar-03",
              "sectionIndex": 1,
              "title": "Boylardan Devlete-I",
              "book": "TYT-tar",
              "pages": [
                18,
                19,
                20
              ]
            },
            {
              "lessonId": "tar-03",
              "sectionIndex": 2,
              "title": "Boylardan Devlete-II",
              "book": "TYT-tar",
              "pages": [
                21,
                22
              ]
            },
            {
              "lessonId": "tar-03",
              "sectionIndex": 3,
              "title": "Kavimler Göçü",
              "book": "TYT-tar",
              "pages": [
                23,
                24,
                25,
                26,
                27
              ]
            }
          ],
          "coverage": "covered",
          "page": 4
        },
        {
          "id": "tyt-tarih-03",
          "title": "İslam Medeniyetinin Doğuşu",
          "counts": [
            1,
            0,
            0,
            0,
            0,
            0,
            0,
            0
          ],
          "rawCounts": [
            "1",
            "-",
            "-",
            "-",
            "-",
            "-",
            "-",
            "-"
          ],
          "reportedTotal": 1,
          "rawTotal": "1",
          "lessonIds": [
            "tar-04"
          ],
          "bookSections": [
            {
              "lessonId": "tar-04",
              "sectionIndex": 0,
              "title": "İslamiyet’in Doğduğu Dönemde Dünya - İslamiyet Yayılıyor",
              "book": "TYT-tar",
              "pages": [
                28,
                29,
                30,
                31
              ]
            },
            {
              "lessonId": "tar-04",
              "sectionIndex": 1,
              "title": "Emeviler (661-750)",
              "book": "TYT-tar",
              "pages": [
                32,
                33
              ]
            },
            {
              "lessonId": "tar-04",
              "sectionIndex": 2,
              "title": "Abbasi Devleti ve Türkler - Bilim Medeniyeti",
              "book": "TYT-tar",
              "pages": [
                34,
                35,
                36,
                37
              ]
            }
          ],
          "coverage": "covered",
          "page": 4
        },
        {
          "id": "tyt-tarih-04",
          "title": "Türklerin İslamiyet’i Kabulü ve İlk Türk İslam Devletleri",
          "counts": [
            1,
            1,
            1,
            1,
            1,
            1,
            1,
            1
          ],
          "rawCounts": [
            "1",
            "1",
            "1",
            "1",
            "1",
            "1",
            "1",
            "1"
          ],
          "reportedTotal": 8,
          "rawTotal": "8",
          "lessonIds": [
            "tar-05",
            "tar-06"
          ],
          "bookSections": [
            {
              "lessonId": "tar-05",
              "sectionIndex": 0,
              "title": "Türklerin İslamiyet’i Kabulü",
              "book": "TYT-tar",
              "pages": [
                38,
                39
              ]
            },
            {
              "lessonId": "tar-05",
              "sectionIndex": 1,
              "title": "İslamiyet’in Türk Devlet ve Toplum Yapısına Etkisi",
              "book": "TYT-tar",
              "pages": [
                40,
                41,
                42,
                43
              ]
            },
            {
              "lessonId": "tar-05",
              "sectionIndex": 2,
              "title": "Büyük Selçuklu Devleti",
              "book": "TYT-tar",
              "pages": [
                44,
                45,
                46
              ]
            },
            {
              "lessonId": "tar-06",
              "sectionIndex": 0,
              "title": "Türklerin Anadolu’ya Yerleşme Süreci - Anadolu’ya Türk Göçleri ve Bu Göçlerin Sosyokültürel Etkileri",
              "book": "TYT-tar",
              "pages": [
                47,
                48
              ]
            },
            {
              "lessonId": "tar-06",
              "sectionIndex": 1,
              "title": "Anadolu’nun İlk Siyasi Teşekkülleri",
              "book": "TYT-tar",
              "pages": [
                49,
                50,
                51,
                52
              ]
            },
            {
              "lessonId": "tar-06",
              "sectionIndex": 2,
              "title": "Hilal ve Haç Mücadelesi",
              "book": "TYT-tar",
              "pages": [
                53,
                54
              ]
            },
            {
              "lessonId": "tar-06",
              "sectionIndex": 3,
              "title": "Moğol İstilası ve Anadolu",
              "book": "TYT-tar",
              "pages": [
                55,
                56,
                57
              ]
            }
          ],
          "coverage": "grouped",
          "page": 4
        },
        {
          "id": "tyt-tarih-05",
          "title": "Beylikten Devlete Osmanlı",
          "counts": [
            1,
            1,
            0,
            0,
            1,
            0,
            0,
            1
          ],
          "rawCounts": [
            "1",
            "1",
            "-",
            "-",
            "1",
            "-",
            "-",
            "1"
          ],
          "reportedTotal": 4,
          "rawTotal": "4",
          "lessonIds": [
            "tar-07"
          ],
          "bookSections": [
            {
              "lessonId": "tar-07",
              "sectionIndex": 0,
              "title": "Osmanlı Beyliği’nin Kuruluşu ve İlk Fetihleri",
              "book": "TYT-tar",
              "pages": [
                58,
                59
              ]
            },
            {
              "lessonId": "tar-07",
              "sectionIndex": 1,
              "title": "Osmanlı Devleti’nin Rumeli’deki İskân ve İstimâlet Politikası",
              "book": "TYT-tar",
              "pages": [
                60,
                61
              ]
            },
            {
              "lessonId": "tar-07",
              "sectionIndex": 2,
              "title": "Anadolu’da Türk Siyasi Birliğini Sağlama Çabaları",
              "book": "TYT-tar",
              "pages": [
                62,
                63,
                64
              ]
            },
            {
              "lessonId": "tar-07",
              "sectionIndex": 3,
              "title": "Devletleşme Sürecinde Savaşçılar ve Askerler",
              "book": "TYT-tar",
              "pages": [
                65,
                66,
                67
              ]
            },
            {
              "lessonId": "tar-07",
              "sectionIndex": 4,
              "title": "Anadolu’nun Mutasavvıfları - Yönetici Sınıf - Sosyal ve Kültürel Faaliyetler",
              "book": "TYT-tar",
              "pages": [
                68,
                69,
                70,
                71,
                72
              ]
            }
          ],
          "coverage": "covered",
          "page": 4
        },
        {
          "id": "tyt-tarih-06",
          "title": "Dünya Gücü Osmanlı",
          "counts": [
            0,
            0,
            0,
            0,
            0,
            0,
            1,
            0
          ],
          "rawCounts": [
            "-",
            "-",
            "-",
            "-",
            "-",
            "-",
            "1",
            "-"
          ],
          "reportedTotal": 1,
          "rawTotal": "1",
          "lessonIds": [
            "tar-08",
            "tar-09"
          ],
          "bookSections": [
            {
              "lessonId": "tar-08",
              "sectionIndex": 0,
              "title": "İstanbul’un Fethi ve Fethin Sonuçları",
              "book": "TYT-tar",
              "pages": [
                73,
                74,
                75
              ]
            },
            {
              "lessonId": "tar-08",
              "sectionIndex": 1,
              "title": "Türk İslam Dünyasında Birliği Sağlama Çabaları",
              "book": "TYT-tar",
              "pages": [
                76,
                77
              ]
            },
            {
              "lessonId": "tar-08",
              "sectionIndex": 2,
              "title": "Dünyanın Muhteşem Gücü Osmanlı",
              "book": "TYT-tar",
              "pages": [
                78,
                79,
                80
              ]
            },
            {
              "lessonId": "tar-08",
              "sectionIndex": 3,
              "title": "Stratejik Siyaset ve Dünya Gücü Olan Osmanlı Devleti",
              "book": "TYT-tar",
              "pages": [
                81,
                82,
                83,
                84
              ]
            },
            {
              "lessonId": "tar-08",
              "sectionIndex": 4,
              "title": "Saray ve Şehir Kültürü - Gelenekler Işığında Devlet İdaresi",
              "book": "TYT-tar",
              "pages": [
                85,
                86,
                87
              ]
            },
            {
              "lessonId": "tar-09",
              "sectionIndex": 0,
              "title": "Osmanlı Devleti’nde Millet Sistemi - Fethettiği Yerlerdeki Kültürel Değişim",
              "book": "TYT-tar",
              "pages": [
                88,
                89,
                90
              ]
            },
            {
              "lessonId": "tar-09",
              "sectionIndex": 1,
              "title": "Osmanlı Toprak Sistemi - Lonca Teşkilatı-Vakıflar",
              "book": "TYT-tar",
              "pages": [
                91,
                92,
                93
              ]
            },
            {
              "lessonId": "tar-09",
              "sectionIndex": 2,
              "title": "Uzun Savaşlardan Diplomasiye",
              "book": "TYT-tar",
              "pages": [
                94,
                95,
                96,
                97
              ]
            }
          ],
          "coverage": "grouped",
          "page": 4
        },
        {
          "id": "tyt-tarih-07",
          "title": "Değişim Çağında Avrupa ve Osmanlı",
          "counts": [
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0
          ],
          "rawCounts": [
            "-",
            "-",
            "-",
            "-",
            "-",
            "-",
            "-",
            "-"
          ],
          "reportedTotal": null,
          "rawTotal": "",
          "lessonIds": [
            "tar-10"
          ],
          "bookSections": [
            {
              "lessonId": "tar-10",
              "sectionIndex": 0,
              "title": "Okyanusların Önem Kazanması",
              "book": "TYT-tar",
              "pages": [
                98,
                99
              ]
            },
            {
              "lessonId": "tar-10",
              "sectionIndex": 1,
              "title": "Fetihlerden Savunmaya",
              "book": "TYT-tar",
              "pages": [
                100,
                101,
                102
              ]
            },
            {
              "lessonId": "tar-10",
              "sectionIndex": 2,
              "title": "Avrupa’da Değişim Çağı",
              "book": "TYT-tar",
              "pages": [
                103,
                104,
                105,
                106
              ]
            },
            {
              "lessonId": "tar-10",
              "sectionIndex": 3,
              "title": "Osmanlı Devleti’nde Değişim",
              "book": "TYT-tar",
              "pages": [
                107,
                108
              ]
            },
            {
              "lessonId": "tar-10",
              "sectionIndex": 4,
              "title": "Osmanlı Devleti’nde İsyanlar ve Düzeni Koruma Çalışmaları",
              "book": "TYT-tar",
              "pages": [
                109,
                110,
                111,
                112,
                113
              ]
            }
          ],
          "coverage": "grouped",
          "page": 4
        },
        {
          "id": "tyt-tarih-08",
          "title": "Uluslararası İlişkilerde Denge Stratejisi (1774-1914)",
          "counts": [
            1,
            0,
            1,
            1,
            0,
            1,
            0,
            0
          ],
          "rawCounts": [
            "1",
            "-",
            "1",
            "1",
            "-",
            "1",
            "-",
            "-"
          ],
          "reportedTotal": 4,
          "rawTotal": "4",
          "lessonIds": [
            "tar-10",
            "tar-11"
          ],
          "bookSections": [
            {
              "lessonId": "tar-10",
              "sectionIndex": 5,
              "title": "İhtilaller Çağı-Sömürgeciliğin Küresel Etkileri",
              "book": "TYT-tar",
              "pages": [
                114,
                115
              ]
            },
            {
              "lessonId": "tar-10",
              "sectionIndex": 6,
              "title": "Osmanlı Devleti’nde Modern Orduya Geçiş",
              "book": "TYT-tar",
              "pages": [
                116,
                117
              ]
            },
            {
              "lessonId": "tar-10",
              "sectionIndex": 7,
              "title": "XIX. Yüzyılda Sosyal Hayattaki Değişimler",
              "book": "TYT-tar",
              "pages": [
                118,
                119,
                120,
                121
              ]
            },
            {
              "lessonId": "tar-10",
              "sectionIndex": 8,
              "title": "Osmanlı Devleti’ne Yönelik Tehditler-I",
              "book": "TYT-tar",
              "pages": [
                122,
                123,
                124,
                125
              ]
            },
            {
              "lessonId": "tar-11",
              "sectionIndex": 0,
              "title": "Osmanlı Devleti’nde Demokratikleşme Hareketleri",
              "book": "TYT-tar",
              "pages": [
                126,
                127,
                128,
                129
              ]
            },
            {
              "lessonId": "tar-11",
              "sectionIndex": 1,
              "title": "Osmanlı Devleti’nde Darbeler",
              "book": "TYT-tar",
              "pages": [
                130,
                131
              ]
            },
            {
              "lessonId": "tar-11",
              "sectionIndex": 2,
              "title": "Osmanlı Devleti’ne Yönelik Tehditler-II",
              "book": "TYT-tar",
              "pages": [
                132,
                133
              ]
            },
            {
              "lessonId": "tar-11",
              "sectionIndex": 3,
              "title": "Osmanlıda Sanayileşme Çabaları",
              "book": "TYT-tar",
              "pages": [
                134,
                135,
                136,
                137
              ]
            },
            {
              "lessonId": "tar-11",
              "sectionIndex": 4,
              "title": "XIX ve XX. Yüzyılda Osmanlı Nüfusu-Metropoller Salgınlar ve Kamuoyu",
              "book": "TYT-tar",
              "pages": [
                138,
                139,
                140,
                141
              ]
            }
          ],
          "coverage": "grouped",
          "page": 4
        },
        {
          "id": "tyt-tarih-09",
          "title": "XX. Yüzyıl Başlarında Osmanlı Devleti ve Dünya",
          "counts": [
            1,
            0,
            1,
            0,
            0,
            0,
            0,
            0
          ],
          "rawCounts": [
            "1",
            "-",
            "1",
            "-",
            "-",
            "-",
            "-",
            "-"
          ],
          "reportedTotal": 2,
          "rawTotal": "2",
          "lessonIds": [
            "tar-11",
            "tar-12"
          ],
          "bookSections": [
            {
              "lessonId": "tar-11",
              "sectionIndex": 5,
              "title": "Mustafa Kemal’in Lider Olarak Yetişmesinde Etkili Koşullar",
              "book": "TYT-tar",
              "pages": [
                142,
                143
              ]
            },
            {
              "lessonId": "tar-11",
              "sectionIndex": 6,
              "title": "20. Yüzyıl Başlarında Osmanlı Devleti",
              "book": "TYT-tar",
              "pages": [
                144,
                145,
                146,
                147,
                148
              ]
            },
            {
              "lessonId": "tar-12",
              "sectionIndex": 0,
              "title": "I. Dünya Savaşı Sürecinde Osmanlı Devleti",
              "book": "TYT-tar",
              "pages": [
                149,
                150,
                151,
                152,
                153
              ]
            },
            {
              "lessonId": "tar-12",
              "sectionIndex": 1,
              "title": "I. Dünya Savaşı’nın Sonuçları",
              "book": "TYT-tar",
              "pages": [
                154,
                155,
                156
              ]
            }
          ],
          "coverage": "grouped",
          "page": 4
        },
        {
          "id": "tyt-tarih-10",
          "title": "Milli Mücadele",
          "counts": [
            0,
            1,
            1,
            1,
            1,
            2,
            1,
            1
          ],
          "rawCounts": [
            "-",
            "1",
            "1",
            "1",
            "1",
            "2",
            "1",
            "1"
          ],
          "reportedTotal": 8,
          "rawTotal": "8",
          "lessonIds": [
            "tar-13"
          ],
          "bookSections": [
            {
              "lessonId": "tar-13",
              "sectionIndex": 0,
              "title": "Millî Mücadele’ye Hazırlık Dönemi-I",
              "book": "TYT-tar",
              "pages": [
                157,
                158,
                159
              ]
            },
            {
              "lessonId": "tar-13",
              "sectionIndex": 1,
              "title": "Millî Mücadele’ye Hazırlık Dönemi-II",
              "book": "TYT-tar",
              "pages": [
                160,
                161,
                162,
                163
              ]
            },
            {
              "lessonId": "tar-13",
              "sectionIndex": 2,
              "title": "Büyük Millet Meclisi’nin Açılması - Sevr Antlaşması",
              "book": "TYT-tar",
              "pages": [
                164,
                165,
                166
              ]
            },
            {
              "lessonId": "tar-13",
              "sectionIndex": 3,
              "title": "Doğu, Güney ve Batı Cepheleri",
              "book": "TYT-tar",
              "pages": [
                167,
                168,
                169,
                170,
                171,
                172,
                173
              ]
            },
            {
              "lessonId": "tar-13",
              "sectionIndex": 4,
              "title": "Millî Mücadele’nin Sona Ermesi ve Lozan Barış Antlaşması",
              "book": "TYT-tar",
              "pages": [
                174,
                175,
                176
              ]
            }
          ],
          "coverage": "covered",
          "page": 4
        },
        {
          "id": "tyt-tarih-11",
          "title": "Atatürkçülük ve Türk İnkılabı",
          "counts": [
            0,
            1,
            0,
            1,
            1,
            0,
            1,
            1
          ],
          "rawCounts": [
            "-",
            "1",
            "-",
            "1",
            "1",
            "-",
            "1",
            "1"
          ],
          "reportedTotal": 5,
          "rawTotal": "5",
          "lessonIds": [
            "tar-14"
          ],
          "bookSections": [
            {
              "lessonId": "tar-14",
              "sectionIndex": 0,
              "title": "Atatürk İlkeleri-Siyasi ve Hukuk Alanındaki Gelişmeler",
              "book": "TYT-tar",
              "pages": [
                177,
                178,
                179,
                180
              ]
            },
            {
              "lessonId": "tar-14",
              "sectionIndex": 1,
              "title": "Atatürk Dönemi’nde Yapılan İnkılaplar",
              "book": "TYT-tar",
              "pages": [
                181,
                182,
                183,
                184,
                185,
                186
              ]
            }
          ],
          "coverage": "covered",
          "page": 4
        }
      ],
      "notes": [
        "Kaynak tablosunda boş hücre veya toplam tutarsızlığı var; ayrıntılar issues alanında ham değerlerle kaydedilmiştir."
      ],
      "issues": [
        {
          "type": "yearTotalMismatch",
          "year": 2018,
          "computedKnownSum": 6,
          "reported": 5,
          "blankRows": [],
          "message": "Görünen konu hücrelerinin toplamı kaynakta yazılı yıl toplamıyla uyuşmuyor; yıl toplamı düzeltilmedi."
        }
      ]
    },
    {
      "id": "tyt-cografya",
      "exam": "TYT",
      "subject": "cografya",
      "label": "TYT Coğrafya",
      "sourceId": "tyt",
      "inScope": true,
      "page": 5,
      "pages": [
        5
      ],
      "reportedYearTotals": [
        5,
        5,
        5,
        5,
        5,
        5,
        5,
        5
      ],
      "rows": [
        {
          "id": "tyt-cografya-01",
          "title": "Doğa ve İnsan",
          "counts": [
            1,
            1,
            0,
            0,
            0,
            0,
            0,
            0
          ],
          "rawCounts": [
            "1",
            "1",
            "-",
            "-",
            "-",
            "-",
            "-",
            "-"
          ],
          "reportedTotal": 2,
          "rawTotal": "2",
          "lessonIds": [
            "cog-01"
          ],
          "bookSections": [
            {
              "lessonId": "cog-01",
              "sectionIndex": 0,
              "title": "Doğa ve İnsan Etkileşimi",
              "book": "TYT-cog",
              "pages": [
                9,
                10
              ]
            },
            {
              "lessonId": "cog-01",
              "sectionIndex": 1,
              "title": "Coğrafyanın Konusu ve Bölümleri",
              "book": "TYT-cog",
              "pages": [
                11,
                12,
                13
              ]
            }
          ],
          "coverage": "covered",
          "page": 5
        },
        {
          "id": "tyt-cografya-02",
          "title": "Dünyanın Şekli ve Hareketleri",
          "counts": [
            0,
            0,
            0,
            1,
            0,
            0,
            0,
            0
          ],
          "rawCounts": [
            "-",
            "-",
            "-",
            "1",
            "-",
            "-",
            "-",
            "-"
          ],
          "reportedTotal": 1,
          "rawTotal": "1",
          "lessonIds": [
            "cog-02"
          ],
          "bookSections": [
            {
              "lessonId": "cog-02",
              "sectionIndex": 0,
              "title": "Dünya’nın Şekli ve Günlük Hareketi",
              "book": "TYT-cog",
              "pages": [
                14,
                15
              ]
            },
            {
              "lessonId": "cog-02",
              "sectionIndex": 1,
              "title": "Dünya’nın Yıllık Hareketi ve Eksen Eğikliği",
              "book": "TYT-cog",
              "pages": [
                16,
                17,
                18
              ]
            }
          ],
          "coverage": "covered",
          "page": 5
        },
        {
          "id": "tyt-cografya-03",
          "title": "Coğrafi Konum",
          "counts": [
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0
          ],
          "rawCounts": [
            "-",
            "-",
            "-",
            "-",
            "-",
            "-",
            "-",
            "-"
          ],
          "reportedTotal": null,
          "rawTotal": "",
          "lessonIds": [
            "cog-03"
          ],
          "bookSections": [
            {
              "lessonId": "cog-03",
              "sectionIndex": 0,
              "title": "Koordinat Sistemi",
              "book": "TYT-cog",
              "pages": [
                19,
                20
              ]
            },
            {
              "lessonId": "cog-03",
              "sectionIndex": 1,
              "title": "Yerel Saat ve Ulusal Saat",
              "book": "TYT-cog",
              "pages": [
                21,
                22
              ]
            },
            {
              "lessonId": "cog-03",
              "sectionIndex": 2,
              "title": "Türkiye’nin Konumu",
              "book": "TYT-cog",
              "pages": [
                23
              ]
            }
          ],
          "coverage": "covered",
          "page": 5
        },
        {
          "id": "tyt-cografya-04",
          "title": "Harita Bilgisi",
          "counts": [
            1,
            0,
            1,
            0,
            1,
            0,
            1,
            1
          ],
          "rawCounts": [
            "1",
            "-",
            "1",
            "-",
            "1",
            "-",
            "1",
            "1"
          ],
          "reportedTotal": 5,
          "rawTotal": "5",
          "lessonIds": [
            "cog-04",
            "cog-17"
          ],
          "bookSections": [
            {
              "lessonId": "cog-04",
              "sectionIndex": 0,
              "title": "Harita Unsurları ve Harita Çeşitleri",
              "book": "TYT-cog",
              "pages": [
                24,
                25
              ]
            },
            {
              "lessonId": "cog-04",
              "sectionIndex": 1,
              "title": "Haritalarda Hesaplamalar",
              "book": "TYT-cog",
              "pages": [
                26,
                27,
                28
              ]
            },
            {
              "lessonId": "cog-17",
              "sectionIndex": 0,
              "title": "Haritalarda Hesaplamalar",
              "book": "TYT-cog",
              "pages": [
                26,
                27,
                28
              ]
            },
            {
              "lessonId": "cog-17",
              "sectionIndex": 1,
              "title": "Yeryüzü Şekillerinin Haritalara Aktarılması",
              "book": "TYT-cog",
              "pages": [
                29,
                30,
                31
              ]
            }
          ],
          "coverage": "grouped",
          "page": 5
        },
        {
          "id": "tyt-cografya-05",
          "title": "İklim Bilgisi",
          "counts": [
            1,
            1,
            1,
            1,
            1,
            1,
            1,
            1
          ],
          "rawCounts": [
            "1",
            "1",
            "1",
            "1",
            "1",
            "1",
            "1",
            "1"
          ],
          "reportedTotal": 8,
          "rawTotal": "8",
          "lessonIds": [
            "cog-05",
            "cog-06",
            "cog-07",
            "cog-15"
          ],
          "bookSections": [
            {
              "lessonId": "cog-05",
              "sectionIndex": 0,
              "title": "Atmosfer, Hava Durumu ve İklim",
              "book": "TYT-cog",
              "pages": [
                32,
                33
              ]
            },
            {
              "lessonId": "cog-05",
              "sectionIndex": 1,
              "title": "Sıcaklık",
              "book": "TYT-cog",
              "pages": [
                34,
                35
              ]
            },
            {
              "lessonId": "cog-06",
              "sectionIndex": 0,
              "title": "Basınç ve Rüzgârlar",
              "book": "TYT-cog",
              "pages": [
                36,
                37,
                38
              ]
            },
            {
              "lessonId": "cog-06",
              "sectionIndex": 1,
              "title": "Nem ve Yağış",
              "book": "TYT-cog",
              "pages": [
                39,
                40,
                41
              ]
            },
            {
              "lessonId": "cog-07",
              "sectionIndex": 0,
              "title": "İklim Tipleri",
              "book": "TYT-cog",
              "pages": [
                42,
                43,
                44
              ]
            },
            {
              "lessonId": "cog-07",
              "sectionIndex": 1,
              "title": "Türkiye İklimi",
              "book": "TYT-cog",
              "pages": [
                45,
                46,
                47,
                48
              ]
            },
            {
              "lessonId": "cog-15",
              "sectionIndex": 0,
              "title": "Basınç ve Rüzgârlar",
              "book": "TYT-cog",
              "pages": [
                36,
                37,
                38
              ]
            }
          ],
          "coverage": "grouped",
          "page": 5
        },
        {
          "id": "tyt-cografya-06",
          "title": "İç ve Dış Kuvvetler",
          "counts": [
            0,
            0,
            1,
            1,
            1,
            1,
            0,
            0
          ],
          "rawCounts": [
            "-",
            "-",
            "1",
            "1",
            "1",
            "1",
            "-",
            "-"
          ],
          "reportedTotal": 4,
          "rawTotal": "4",
          "lessonIds": [
            "cog-08",
            "cog-09"
          ],
          "bookSections": [
            {
              "lessonId": "cog-08",
              "sectionIndex": 0,
              "title": "Dünya’nın Tektonik Oluşumu ve Jeolojik Zamanlar",
              "book": "TYT-cog",
              "pages": [
                60,
                61
              ]
            },
            {
              "lessonId": "cog-08",
              "sectionIndex": 1,
              "title": "İç Kuvvetler ve Kayaçlar",
              "book": "TYT-cog",
              "pages": [
                62,
                63,
                64
              ]
            },
            {
              "lessonId": "cog-09",
              "sectionIndex": 0,
              "title": "Dış Kuvvetler (Çözülme, Kütle Hareketleri, Rüzgârlar, Buzullar)",
              "book": "TYT-cog",
              "pages": [
                65,
                66
              ]
            },
            {
              "lessonId": "cog-09",
              "sectionIndex": 1,
              "title": "Dış Kuvvetler (Akarsular)",
              "book": "TYT-cog",
              "pages": [
                67,
                68,
                69,
                70,
                71,
                72
              ]
            },
            {
              "lessonId": "cog-09",
              "sectionIndex": 2,
              "title": "Dış Kuvvetler (Karstik Şekiller, Dalgalar, Akıntılar)",
              "book": "TYT-cog",
              "pages": [
                73,
                74,
                75,
                76
              ]
            }
          ],
          "coverage": "grouped",
          "page": 5
        },
        {
          "id": "tyt-cografya-07",
          "title": "Nüfus ve Yerleşme",
          "counts": [
            1,
            2,
            1,
            1,
            0,
            1,
            1,
            1
          ],
          "rawCounts": [
            "1",
            "2",
            "1",
            "1",
            "-",
            "1",
            "1",
            "1"
          ],
          "reportedTotal": 8,
          "rawTotal": "8",
          "lessonIds": [
            "cog-11",
            "cog-12",
            "cog-16"
          ],
          "bookSections": [
            {
              "lessonId": "cog-11",
              "sectionIndex": 0,
              "title": "Nüfusun Özellikleri ve Gelişimi",
              "book": "TYT-cog",
              "pages": [
                92,
                93,
                94,
                95
              ]
            },
            {
              "lessonId": "cog-11",
              "sectionIndex": 1,
              "title": "Nüfusun Dağılışı ve Nüfus Piramitleri",
              "book": "TYT-cog",
              "pages": [
                96,
                97,
                98
              ]
            },
            {
              "lessonId": "cog-11",
              "sectionIndex": 2,
              "title": "Türkiye Nüfusu",
              "book": "TYT-cog",
              "pages": [
                99,
                100,
                101
              ]
            },
            {
              "lessonId": "cog-12",
              "sectionIndex": 0,
              "title": "Göçler",
              "book": "TYT-cog",
              "pages": [
                102,
                103,
                104,
                105
              ]
            },
            {
              "lessonId": "cog-16",
              "sectionIndex": 0,
              "title": "Yerleşme ve Türkiye’de Yerleşmeler",
              "book": "TYT-cog",
              "pages": [
                49,
                50,
                51,
                52,
                53,
                54
              ]
            }
          ],
          "coverage": "grouped",
          "page": 5
        },
        {
          "id": "tyt-cografya-08",
          "title": "Türkiye’nin Yer Şekilleri",
          "counts": [
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0
          ],
          "rawCounts": [
            "-",
            "-",
            "-",
            "-",
            "-",
            "-",
            "-",
            "-"
          ],
          "reportedTotal": null,
          "rawTotal": "",
          "lessonIds": [
            "cog-08",
            "cog-09"
          ],
          "bookSections": [
            {
              "lessonId": "cog-08",
              "sectionIndex": 0,
              "title": "Dünya’nın Tektonik Oluşumu ve Jeolojik Zamanlar",
              "book": "TYT-cog",
              "pages": [
                60,
                61
              ]
            },
            {
              "lessonId": "cog-08",
              "sectionIndex": 1,
              "title": "İç Kuvvetler ve Kayaçlar",
              "book": "TYT-cog",
              "pages": [
                62,
                63,
                64
              ]
            },
            {
              "lessonId": "cog-09",
              "sectionIndex": 0,
              "title": "Dış Kuvvetler (Çözülme, Kütle Hareketleri, Rüzgârlar, Buzullar)",
              "book": "TYT-cog",
              "pages": [
                65,
                66
              ]
            },
            {
              "lessonId": "cog-09",
              "sectionIndex": 1,
              "title": "Dış Kuvvetler (Akarsular)",
              "book": "TYT-cog",
              "pages": [
                67,
                68,
                69,
                70,
                71,
                72
              ]
            },
            {
              "lessonId": "cog-09",
              "sectionIndex": 2,
              "title": "Dış Kuvvetler (Karstik Şekiller, Dalgalar, Akıntılar)",
              "book": "TYT-cog",
              "pages": [
                73,
                74,
                75,
                76
              ]
            }
          ],
          "coverage": "grouped",
          "note": "Genel iç/dış kuvvetler içinde Türkiye örnekleri var; kaynak satırındaki tarihsel sıfır konu atlama ölçütü değildir.",
          "page": 5
        },
        {
          "id": "tyt-cografya-09",
          "title": "Ekonomik Faaliyetler",
          "counts": [
            0,
            0,
            0,
            0,
            1,
            0,
            0,
            0
          ],
          "rawCounts": [
            "-",
            "-",
            "-",
            "-",
            "1",
            "-",
            "-",
            "-"
          ],
          "reportedTotal": 1,
          "rawTotal": "1",
          "lessonIds": [
            "cog-13"
          ],
          "bookSections": [
            {
              "lessonId": "cog-13",
              "sectionIndex": 0,
              "title": "Ekonomik Faaliyetler",
              "book": "TYT-cog",
              "pages": [
                106,
                107
              ]
            }
          ],
          "coverage": "grouped",
          "page": 5
        },
        {
          "id": "tyt-cografya-10",
          "title": "Bölgeler",
          "counts": [
            0,
            0,
            1,
            1,
            0,
            1,
            1,
            1
          ],
          "rawCounts": [
            "-",
            "-",
            "1",
            "1",
            "-",
            "1",
            "1",
            "1"
          ],
          "reportedTotal": 5,
          "rawTotal": "5",
          "lessonIds": [
            "cog-16"
          ],
          "bookSections": [
            {
              "lessonId": "cog-16",
              "sectionIndex": 1,
              "title": "Bölge Sınıflandırılması ve Türleri",
              "book": "TYT-cog",
              "pages": [
                55,
                56,
                57
              ]
            }
          ],
          "coverage": "grouped",
          "page": 5
        },
        {
          "id": "tyt-cografya-11",
          "title": "Uluslar Arası Ulaşım Hatları",
          "counts": [
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0
          ],
          "rawCounts": [
            "-",
            "-",
            "-",
            "-",
            "-",
            "-",
            "-",
            "-"
          ],
          "reportedTotal": null,
          "rawTotal": "",
          "lessonIds": [
            "cog-13"
          ],
          "bookSections": [
            {
              "lessonId": "cog-13",
              "sectionIndex": 1,
              "title": "Uluslararası Ulaşım Hatları",
              "book": "TYT-cog",
              "pages": [
                108,
                109,
                110
              ]
            }
          ],
          "coverage": "grouped",
          "page": 5
        },
        {
          "id": "tyt-cografya-12",
          "title": "Doğal Afetler",
          "counts": [
            1,
            1,
            0,
            0,
            1,
            1,
            1,
            1
          ],
          "rawCounts": [
            "1",
            "1",
            "-",
            "-",
            "1",
            "1",
            "1",
            "1"
          ],
          "reportedTotal": 6,
          "rawTotal": "6",
          "lessonIds": [
            "cog-14"
          ],
          "bookSections": [
            {
              "lessonId": "cog-14",
              "sectionIndex": 0,
              "title": "Afetlerin Genel Özellikleri ve Sınıflandırılması",
              "book": "TYT-cog",
              "pages": [
                111,
                112,
                113
              ]
            },
            {
              "lessonId": "cog-14",
              "sectionIndex": 1,
              "title": "Deprem, Tsunami ve Volkanik Faaliyetler, Kütle Hareketleri, Erozyon",
              "book": "TYT-cog",
              "pages": [
                114,
                115,
                116
              ]
            },
            {
              "lessonId": "cog-14",
              "sectionIndex": 2,
              "title": "Şiddetli Rüzgârlar, Sel ve Taşkın, Çığ, Orman Yangınları, Salgın Hastalıklar",
              "book": "TYT-cog",
              "pages": [
                117,
                118,
                119,
                120
              ]
            }
          ],
          "coverage": "covered",
          "page": 5
        }
      ],
      "notes": [],
      "issues": []
    },
    {
      "id": "tyt-felsefe",
      "exam": "TYT",
      "subject": "felsefe",
      "label": "TYT Felsefe",
      "sourceId": "tyt",
      "inScope": true,
      "page": 5,
      "pages": [
        5
      ],
      "reportedYearTotals": [
        5,
        5,
        5,
        5,
        5,
        5,
        5,
        5
      ],
      "rows": [
        {
          "id": "tyt-felsefe-01",
          "title": "Felsefe Alanı",
          "counts": [
            0,
            1,
            0,
            2,
            1,
            2,
            1,
            0
          ],
          "rawCounts": [
            "-",
            "1",
            "-",
            "2",
            "1",
            "2",
            "1",
            "-"
          ],
          "reportedTotal": 7,
          "rawTotal": "7",
          "lessonIds": [
            "fel-01"
          ],
          "bookSections": [
            {
              "lessonId": "fel-01",
              "sectionIndex": 0,
              "title": "Felsefenin anlamı: soru, gerekçe ve temellendirme",
              "book": "TYT-fel",
              "pages": [
                9,
                10
              ]
            },
            {
              "lessonId": "fel-01",
              "sectionIndex": 1,
              "title": "Felsefi Düşüncenin Ortaya Çıkışı ve Özellikleri - Felsefe Sorusu Nedir?",
              "book": "TYT-fel",
              "pages": [
                11,
                12,
                13
              ]
            },
            {
              "lessonId": "fel-01",
              "sectionIndex": 2,
              "title": "Felsefenin İnsan ve Toplum Hayatı Üzerindeki Rolü",
              "book": "TYT-fel",
              "pages": [
                14
              ]
            },
            {
              "lessonId": "fel-01",
              "sectionIndex": 3,
              "title": "Düşünme ve Akıl Yürütmeye İlişkin Kavramlar",
              "book": "TYT-fel",
              "pages": [
                15,
                16,
                17
              ]
            },
            {
              "lessonId": "fel-01",
              "sectionIndex": 4,
              "title": "Düşünme ve Dil İlişkisi - Felsefi Bir Görüşü veya Argümanı Sorgulama",
              "book": "TYT-fel",
              "pages": [
                18
              ]
            }
          ],
          "coverage": "covered",
          "page": 5,
          "note": "Felsefenin anlamı için ilk içerik sayfaları da eklenmiştir; kaynak okuyucudaki basılı sayfa numarası dönüşümü uygulanır."
        },
        {
          "id": "tyt-felsefe-02",
          "title": "Bilgi Felsefesi",
          "counts": [
            2,
            1,
            1,
            0,
            2,
            2,
            1,
            3
          ],
          "rawCounts": [
            "2",
            "1",
            "1",
            "-",
            "2",
            "2",
            "1",
            "3"
          ],
          "reportedTotal": 12,
          "rawTotal": "12",
          "lessonIds": [
            "fel-02"
          ],
          "bookSections": [
            {
              "lessonId": "fel-02",
              "sectionIndex": 0,
              "title": "Bilgi Felsefesinin Konusu ve Bilginin İmkânı Problemi",
              "book": "TYT-fel",
              "pages": [
                27,
                28
              ]
            },
            {
              "lessonId": "fel-02",
              "sectionIndex": 1,
              "title": "Bilginin Kaynağı ile İlgili Görüşler",
              "book": "TYT-fel",
              "pages": [
                29,
                30
              ]
            },
            {
              "lessonId": "fel-02",
              "sectionIndex": 2,
              "title": "Bilginin Sınırları - Doğru Bilginin Ölçütü - Doğruluk ve Gerçeklik - Bilginin Değeri ve Güvenirliği",
              "book": "TYT-fel",
              "pages": [
                31,
                32
              ]
            }
          ],
          "coverage": "covered",
          "page": 5,
          "note": "Bilgi felsefesi rehberi yalnız ilgili epistemoloji bölümlerini içerir; yanlış bağlı ontoloji sayfaları Varlık Felsefesi’ne taşındı."
        },
        {
          "id": "tyt-felsefe-03",
          "title": "Bilim Felsefesi",
          "counts": [
            0,
            1,
            0,
            0,
            0,
            0,
            0,
            1
          ],
          "rawCounts": [
            "-",
            "1",
            "-",
            "-",
            "-",
            "-",
            "-",
            "1"
          ],
          "reportedTotal": 2,
          "rawTotal": "2",
          "lessonIds": [
            "fel-05"
          ],
          "bookSections": [
            {
              "lessonId": "fel-05",
              "sectionIndex": 0,
              "title": "Bilim Felsefesinin Konusu ve Problemleri",
              "book": "TYT-fel",
              "pages": [
                33,
                34
              ]
            },
            {
              "lessonId": "fel-05",
              "sectionIndex": 1,
              "title": "Bilimin Değeri - Bilim Felsefe İlişkisi - Bilim ve Hayat İlişkisi",
              "book": "TYT-fel",
              "pages": [
                35,
                36
              ]
            }
          ],
          "coverage": "covered",
          "page": 5
        },
        {
          "id": "tyt-felsefe-04",
          "title": "Varlık Felsefesi",
          "counts": [
            1,
            0,
            1,
            1,
            0,
            0,
            1,
            0
          ],
          "rawCounts": [
            "1",
            "-",
            "1",
            "1",
            "-",
            "-",
            "1",
            "-"
          ],
          "reportedTotal": 4,
          "rawTotal": "4",
          "lessonIds": [
            "fel-03"
          ],
          "bookSections": [
            {
              "lessonId": "fel-03",
              "sectionIndex": 0,
              "title": "Varlık Felsefesinin Konusu ve Problemleri",
              "book": "TYT-fel",
              "pages": [
                19,
                20,
                21,
                22
              ]
            },
            {
              "lessonId": "fel-03",
              "sectionIndex": 1,
              "title": "Varlık Felsefesi Alanındaki Çağdaş Yaklaşımlar",
              "book": "TYT-fel",
              "pages": [
                23,
                24
              ]
            },
            {
              "lessonId": "fel-03",
              "sectionIndex": 2,
              "title": "Değerlendirilmesi",
              "book": "TYT-fel",
              "pages": [
                25,
                26
              ]
            }
          ],
          "coverage": "covered",
          "page": 5,
          "note": "Klasik varlık sorularıyla çağdaş ontoloji ve değerlendirme bölümleri aynı derste doğru sırayla birleştirildi."
        },
        {
          "id": "tyt-felsefe-05",
          "title": "Ahlak Felsefesi",
          "counts": [
            1,
            1,
            2,
            0,
            1,
            1,
            1,
            1
          ],
          "rawCounts": [
            "1",
            "1",
            "2",
            "-",
            "1",
            "1",
            "1",
            "1"
          ],
          "reportedTotal": 8,
          "rawTotal": "8",
          "lessonIds": [
            "fel-04"
          ],
          "bookSections": [
            {
              "lessonId": "fel-04",
              "sectionIndex": 0,
              "title": "Ahlak Felsefesinin Konusu ve Problemleri - İyi ve Kötünün Ölçütü",
              "book": "TYT-fel",
              "pages": [
                37,
                38,
                39
              ]
            },
            {
              "lessonId": "fel-04",
              "sectionIndex": 1,
              "title": "Özgürlük ve Sorumluluk",
              "book": "TYT-fel",
              "pages": [
                40,
                41
              ]
            },
            {
              "lessonId": "fel-04",
              "sectionIndex": 2,
              "title": "Evrensel Bir Ahlak Yasasını Kabul Eden Görüşler ve Filozoflar",
              "book": "TYT-fel",
              "pages": [
                42,
                43
              ]
            },
            {
              "lessonId": "fel-04",
              "sectionIndex": 3,
              "title": "Evrensel Bir Ahlak Yasasını Reddeden Görüşler ve Filozoflar",
              "book": "TYT-fel",
              "pages": [
                44,
                45
              ]
            },
            {
              "lessonId": "fel-04",
              "sectionIndex": 4,
              "title": "İyilik ve Mutluluk İlişkisi - Özgürlük, Sorumluluk ve Kural İlişkisi",
              "book": "TYT-fel",
              "pages": [
                46,
                47,
                48
              ]
            }
          ],
          "coverage": "covered",
          "page": 5
        },
        {
          "id": "tyt-felsefe-06",
          "title": "Siyaset Felsefesi",
          "counts": [
            0,
            1,
            0,
            1,
            1,
            0,
            0,
            0
          ],
          "rawCounts": [
            "-",
            "1",
            "-",
            "1",
            "1",
            "-",
            "-",
            "-"
          ],
          "reportedTotal": 3,
          "rawTotal": "3",
          "lessonIds": [
            "fel-07"
          ],
          "bookSections": [
            {
              "lessonId": "fel-07",
              "sectionIndex": 0,
              "title": "Siyaset Felsefesinin Konusu ve Problemleri - Hak, Adalet, Özgürlük - İktidarın Kaynağı",
              "book": "TYT-fel",
              "pages": [
                54,
                55,
                56
              ]
            },
            {
              "lessonId": "fel-07",
              "sectionIndex": 1,
              "title": "İdeal Devlet Düzenine Yönelik Görüşler - Ütopya",
              "book": "TYT-fel",
              "pages": [
                57,
                58
              ]
            },
            {
              "lessonId": "fel-07",
              "sectionIndex": 2,
              "title": "Egemenlik Sorunu - Toplumsal Sorunlara Felsefi Bakış",
              "book": "TYT-fel",
              "pages": [
                59,
                60
              ]
            }
          ],
          "coverage": "covered",
          "page": 5
        },
        {
          "id": "tyt-felsefe-07",
          "title": "Din Felsefesi",
          "counts": [
            1,
            0,
            1,
            0,
            0,
            0,
            1,
            0
          ],
          "rawCounts": [
            "1",
            "-",
            "1",
            "-",
            "-",
            "-",
            "1",
            "-"
          ],
          "reportedTotal": 3,
          "rawTotal": "3",
          "lessonIds": [
            "fel-08"
          ],
          "bookSections": [
            {
              "lessonId": "fel-08",
              "sectionIndex": 0,
              "title": "Din Felsefesinin Konusu ve Soruları - Tanrı’nın Varlığı ile İlgili Görüşler",
              "book": "TYT-fel",
              "pages": [
                49,
                50,
                51
              ]
            },
            {
              "lessonId": "fel-08",
              "sectionIndex": 1,
              "title": "Din Felsefesinin Soruları - Teoloji ve Din Felsefesi - Felsefe, Bilim ve Din Açısından Ben Kimim?",
              "book": "TYT-fel",
              "pages": [
                52,
                53
              ]
            }
          ],
          "coverage": "covered",
          "page": 5
        },
        {
          "id": "tyt-felsefe-08",
          "title": "Sanat Felsefesi",
          "counts": [
            0,
            0,
            0,
            1,
            0,
            0,
            0,
            0
          ],
          "rawCounts": [
            "-",
            "-",
            "-",
            "1",
            "-",
            "-",
            "-",
            "-"
          ],
          "reportedTotal": 1,
          "rawTotal": "1",
          "lessonIds": [
            "fel-06"
          ],
          "bookSections": [
            {
              "lessonId": "fel-06",
              "sectionIndex": 0,
              "title": "Sanat Felsefesinin Konusu ve Problemleri - Güzellik - Sanat Nedir?",
              "book": "TYT-fel",
              "pages": [
                61,
                62
              ]
            },
            {
              "lessonId": "fel-06",
              "sectionIndex": 1,
              "title": "Sanat Kuramları - Sanat Eserinin Özellikleri - Sanat ve Duyarlılık - Şehir, İnsan ve Sanat",
              "book": "TYT-fel",
              "pages": [
                63,
                64,
                65
              ]
            }
          ],
          "coverage": "covered",
          "page": 5
        }
      ],
      "notes": [],
      "issues": []
    },
    {
      "id": "tyt-din",
      "exam": "TYT",
      "subject": "din",
      "label": "TYT Din Kültürü ve Ahlak Bilgisi",
      "sourceId": "tyt",
      "inScope": true,
      "page": 6,
      "pages": [
        6
      ],
      "reportedYearTotals": [
        5,
        5,
        5,
        5,
        5,
        5,
        5,
        5
      ],
      "rows": [
        {
          "id": "tyt-din-01",
          "title": "Bilgi ve İnanç",
          "counts": [
            1,
            2,
            1,
            1,
            1,
            1,
            1,
            1
          ],
          "rawCounts": [
            "1",
            "2",
            "1",
            "1",
            "1",
            "1",
            "1",
            "1"
          ],
          "reportedTotal": 9,
          "rawTotal": "9",
          "lessonIds": [
            "din-01",
            "din-02"
          ],
          "bookSections": [
            {
              "lessonId": "din-01",
              "sectionIndex": 0,
              "title": "İslam’da Bilgi Kaynakları",
              "book": "TYT-din",
              "pages": [
                10,
                11
              ]
            },
            {
              "lessonId": "din-01",
              "sectionIndex": 1,
              "title": "İslam İnancında İmanın Mahiyeti",
              "book": "TYT-din",
              "pages": [
                12
              ]
            },
            {
              "lessonId": "din-01",
              "sectionIndex": 2,
              "title": "Kur’an’dan Mesajlar: İsra Suresi 36. Ayet ve Mülk Suresi 23. Ayet",
              "book": "TYT-din",
              "pages": [
                13
              ]
            },
            {
              "lessonId": "din-02",
              "sectionIndex": 0,
              "title": "İslam İnanç Esaslarının Özellikleri",
              "book": "TYT-din",
              "pages": [
                17
              ]
            },
            {
              "lessonId": "din-02",
              "sectionIndex": 1,
              "title": "Kur’an’dan Mesajlar: Nisa Suresi 136. Ayet",
              "book": "TYT-din",
              "pages": [
                18
              ]
            }
          ],
          "coverage": "grouped",
          "page": 6
        },
        {
          "id": "tyt-din-02",
          "title": "Din ve İslam",
          "counts": [
            0,
            0,
            0,
            0,
            1,
            1,
            1,
            1
          ],
          "rawCounts": [
            "-",
            "-",
            "-",
            "-",
            "1",
            "1",
            "1",
            "1"
          ],
          "reportedTotal": 4,
          "rawTotal": "4",
          "lessonIds": [
            "din-01",
            "din-02"
          ],
          "bookSections": [
            {
              "lessonId": "din-01",
              "sectionIndex": 3,
              "title": "Dinin Tanımı ve Kaynağı",
              "book": "TYT-din",
              "pages": [
                14
              ]
            },
            {
              "lessonId": "din-01",
              "sectionIndex": 4,
              "title": "İnsanın Doğası ve Din",
              "book": "TYT-din",
              "pages": [
                15
              ]
            },
            {
              "lessonId": "din-01",
              "sectionIndex": 5,
              "title": "İman ve İslam İlişkisi",
              "book": "TYT-din",
              "pages": [
                16
              ]
            },
            {
              "lessonId": "din-02",
              "sectionIndex": 0,
              "title": "İslam İnanç Esaslarının Özellikleri",
              "book": "TYT-din",
              "pages": [
                17
              ]
            },
            {
              "lessonId": "din-02",
              "sectionIndex": 1,
              "title": "Kur’an’dan Mesajlar: Nisa Suresi 136. Ayet",
              "book": "TYT-din",
              "pages": [
                18
              ]
            }
          ],
          "coverage": "grouped",
          "page": 6
        },
        {
          "id": "tyt-din-03",
          "title": "İslam ve İbadet",
          "counts": [
            1,
            1,
            0,
            1,
            1,
            0,
            0,
            0
          ],
          "rawCounts": [
            "1",
            "1",
            "-",
            "1",
            "1",
            "-",
            "-",
            "-"
          ],
          "reportedTotal": 4,
          "rawTotal": "4",
          "lessonIds": [
            "din-03"
          ],
          "bookSections": [
            {
              "lessonId": "din-03",
              "sectionIndex": 0,
              "title": "İslam’da İbadet ve Kapsamı",
              "book": "TYT-din",
              "pages": [
                19
              ]
            },
            {
              "lessonId": "din-03",
              "sectionIndex": 1,
              "title": "İslam’da İbadetin Amacı ve Önemi",
              "book": "TYT-din",
              "pages": [
                20
              ]
            },
            {
              "lessonId": "din-03",
              "sectionIndex": 2,
              "title": "İslam’da İbadet Yükümlülüğü",
              "book": "TYT-din",
              "pages": [
                21,
                22
              ]
            },
            {
              "lessonId": "din-03",
              "sectionIndex": 3,
              "title": "İslam’da İbadetlerde Temel İlkeler",
              "book": "TYT-din",
              "pages": [
                23
              ]
            },
            {
              "lessonId": "din-03",
              "sectionIndex": 4,
              "title": "İslam’da İbadet Ahlak İlişkisi",
              "book": "TYT-din",
              "pages": [
                24
              ]
            },
            {
              "lessonId": "din-03",
              "sectionIndex": 5,
              "title": "Kur’an’dan Mesajlar: Bakara Suresi 177. Ayet",
              "book": "TYT-din",
              "pages": [
                25
              ]
            }
          ],
          "coverage": "grouped",
          "page": 6
        },
        {
          "id": "tyt-din-04",
          "title": "Gençlik ve Değerler",
          "counts": [
            1,
            1,
            1,
            1,
            0,
            0,
            0,
            0
          ],
          "rawCounts": [
            "1",
            "1",
            "1",
            "1",
            "-",
            "-",
            "-",
            "-"
          ],
          "reportedTotal": 4,
          "rawTotal": "4",
          "lessonIds": [
            "din-03",
            "din-08"
          ],
          "bookSections": [
            {
              "lessonId": "din-03",
              "sectionIndex": 6,
              "title": "Değerler Ve Değerlerin Kaynağı",
              "book": "TYT-din",
              "pages": [
                26
              ]
            },
            {
              "lessonId": "din-08",
              "sectionIndex": 0,
              "title": "Değer, karakter ve temel erdem",
              "book": "TYT-din",
              "pages": [
                27,
                28,
                29,
                30
              ]
            },
            {
              "lessonId": "din-08",
              "sectionIndex": 1,
              "title": "İsra mesajlarını davranış ilişkisiyle okumak",
              "book": "TYT-din",
              "pages": [
                31
              ]
            }
          ],
          "coverage": "grouped",
          "note": "Gençlik, değer, karakter ve temel erdem anlatımı kaynak kitabın 26–31. sayfalarına bağlandı.",
          "page": 6
        },
        {
          "id": "tyt-din-05",
          "title": "Allah İnsan İlişkisi",
          "counts": [
            0,
            0,
            0,
            0,
            1,
            0,
            1,
            1
          ],
          "rawCounts": [
            "-",
            "-",
            "-",
            "-",
            "1",
            "-",
            "1",
            "1"
          ],
          "reportedTotal": 3,
          "rawTotal": "3",
          "lessonIds": [
            "din-10"
          ],
          "bookSections": [
            {
              "lessonId": "din-10",
              "sectionIndex": 0,
              "title": "İnanç, isim-sıfat ve insanın sorumluluğu",
              "book": "TYT-din",
              "pages": [
                37,
                38,
                39,
                40
              ]
            },
            {
              "lessonId": "din-10",
              "sectionIndex": 1,
              "title": "Dua, tövbe, vahiy ve gençlik örnekleri",
              "book": "TYT-din",
              "pages": [
                41,
                42,
                43,
                44,
                45,
                46
              ]
            }
          ],
          "coverage": "covered",
          "note": "Allah inancı, isim-sıfatlar, insanın özellikleri ve Allah ile irtibat için yeni ayrıntılı ders bağlandı.",
          "page": 6
        },
        {
          "id": "tyt-din-06",
          "title": "Hz. Muhammed (S.A.V)",
          "counts": [
            1,
            1,
            1,
            0,
            0,
            1,
            1,
            1
          ],
          "rawCounts": [
            "1",
            "1",
            "1",
            "-",
            "-",
            "1",
            "1",
            "1"
          ],
          "reportedTotal": 6,
          "rawTotal": "6",
          "lessonIds": [
            "din-05"
          ],
          "bookSections": [
            {
              "lessonId": "din-05",
              "sectionIndex": 0,
              "title": "Bir Genç Olarak Hz. Muhammed",
              "book": "TYT-din",
              "pages": [
                47
              ]
            },
            {
              "lessonId": "din-05",
              "sectionIndex": 1,
              "title": "Hz. Muhammed ve Gençler",
              "book": "TYT-din",
              "pages": [
                48
              ]
            },
            {
              "lessonId": "din-05",
              "sectionIndex": 2,
              "title": "Bazı Genç Sahabiler",
              "book": "TYT-din",
              "pages": [
                49,
                50
              ]
            },
            {
              "lessonId": "din-05",
              "sectionIndex": 3,
              "title": "Kur’an’dan Mesajlar: Al-i İmran Suresi 159. Ayet",
              "book": "TYT-din",
              "pages": [
                51
              ]
            }
          ],
          "coverage": "covered",
          "page": 6
        },
        {
          "id": "tyt-din-07",
          "title": "Vahiy ve Akıl",
          "counts": [
            1,
            0,
            2,
            1,
            0,
            0,
            0,
            0
          ],
          "rawCounts": [
            "1",
            "-",
            "2",
            "1",
            "-",
            "-",
            "-",
            "-"
          ],
          "reportedTotal": 4,
          "rawTotal": "4",
          "lessonIds": [
            "din-01",
            "din-07",
            "din-10"
          ],
          "bookSections": [
            {
              "lessonId": "din-01",
              "sectionIndex": 0,
              "title": "İslam’da Bilgi Kaynakları",
              "book": "TYT-din",
              "pages": [
                10,
                11
              ]
            },
            {
              "lessonId": "din-01",
              "sectionIndex": 1,
              "title": "İslam İnancında İmanın Mahiyeti",
              "book": "TYT-din",
              "pages": [
                12
              ]
            },
            {
              "lessonId": "din-01",
              "sectionIndex": 2,
              "title": "Kur’an’dan Mesajlar: İsra Suresi 36. Ayet ve Mülk Suresi 23. Ayet",
              "book": "TYT-din",
              "pages": [
                13
              ]
            },
            {
              "lessonId": "din-07",
              "sectionIndex": 0,
              "title": "Dinî Yorum Farklılıklarının Sebepleri",
              "book": "TYT-din",
              "pages": [
                67,
                68
              ]
            },
            {
              "lessonId": "din-07",
              "sectionIndex": 1,
              "title": "Dinî Yorumlarla İlgili Bazı Kavramlar",
              "book": "TYT-din",
              "pages": [
                69
              ]
            },
            {
              "lessonId": "din-07",
              "sectionIndex": 2,
              "title": "İslam Düşüncesinde İtikadi Ve Siyasi Yorumlar",
              "book": "TYT-din",
              "pages": [
                70,
                71
              ]
            },
            {
              "lessonId": "din-07",
              "sectionIndex": 3,
              "title": "İslam Düşüncesınde Fıkhi Yorumlar",
              "book": "TYT-din",
              "pages": [
                72
              ]
            },
            {
              "lessonId": "din-07",
              "sectionIndex": 4,
              "title": "Kur’an’dan Mesajlar: Nisa Suresi 59. Ayet",
              "book": "TYT-din",
              "pages": [
                73,
                74
              ]
            },
            {
              "lessonId": "din-10",
              "sectionIndex": 1,
              "title": "Dua, tövbe, vahiy ve gençlik örnekleri",
              "book": "TYT-din",
              "pages": [
                41,
                42,
                43,
                44,
                45,
                46
              ]
            }
          ],
          "coverage": "grouped",
          "note": "Tarihsel Vahiy ve Akıl sınıflaması; güncel kaynakta bilgi-vahiy ilişkisi, dinî yorum, Kur’an’ı anlama ve davranışla irtibat alt başlıklarıyla eşlenmiştir. Bire bir aynı adlı güncel ünite olduğu iddia edilmez.",
          "page": 6
        },
        {
          "id": "tyt-din-08",
          "title": "İslam Düşüncesinde Yorumlar, Mezhepler",
          "counts": [
            0,
            0,
            0,
            0,
            0,
            1,
            1,
            0
          ],
          "rawCounts": [
            "-",
            "-",
            "-",
            "-",
            "-",
            "1",
            "1",
            "-"
          ],
          "reportedTotal": 2,
          "rawTotal": "2",
          "lessonIds": [
            "din-07"
          ],
          "bookSections": [
            {
              "lessonId": "din-07",
              "sectionIndex": 0,
              "title": "Dinî Yorum Farklılıklarının Sebepleri",
              "book": "TYT-din",
              "pages": [
                67,
                68
              ]
            },
            {
              "lessonId": "din-07",
              "sectionIndex": 1,
              "title": "Dinî Yorumlarla İlgili Bazı Kavramlar",
              "book": "TYT-din",
              "pages": [
                69
              ]
            },
            {
              "lessonId": "din-07",
              "sectionIndex": 2,
              "title": "İslam Düşüncesinde İtikadi Ve Siyasi Yorumlar",
              "book": "TYT-din",
              "pages": [
                70,
                71
              ]
            },
            {
              "lessonId": "din-07",
              "sectionIndex": 3,
              "title": "İslam Düşüncesınde Fıkhi Yorumlar",
              "book": "TYT-din",
              "pages": [
                72
              ]
            },
            {
              "lessonId": "din-07",
              "sectionIndex": 4,
              "title": "Kur’an’dan Mesajlar: Nisa Suresi 59. Ayet",
              "book": "TYT-din",
              "pages": [
                73,
                74
              ]
            }
          ],
          "coverage": "covered",
          "page": 6
        },
        {
          "id": "tyt-din-09",
          "title": "Din, Kültür ve Medeniyet",
          "counts": [
            0,
            0,
            0,
            1,
            1,
            1,
            0,
            1
          ],
          "rawCounts": [
            "-",
            "-",
            "-",
            "1",
            "1",
            "1",
            "-",
            "1"
          ],
          "reportedTotal": 4,
          "rawTotal": "4",
          "lessonIds": [
            "din-06",
            "din-09"
          ],
          "bookSections": [
            {
              "lessonId": "din-06",
              "sectionIndex": 0,
              "title": "Din ve Aile",
              "book": "TYT-din",
              "pages": [
                52
              ]
            },
            {
              "lessonId": "din-06",
              "sectionIndex": 1,
              "title": "Din, Kültür ve Sanat",
              "book": "TYT-din",
              "pages": [
                53,
                54
              ]
            },
            {
              "lessonId": "din-06",
              "sectionIndex": 2,
              "title": "Din ve Çevre",
              "book": "TYT-din",
              "pages": [
                55
              ]
            },
            {
              "lessonId": "din-06",
              "sectionIndex": 3,
              "title": "Din ve Sosyal Değişim",
              "book": "TYT-din",
              "pages": [
                56
              ]
            },
            {
              "lessonId": "din-06",
              "sectionIndex": 4,
              "title": "Din ve Ekonomi",
              "book": "TYT-din",
              "pages": [
                57
              ]
            },
            {
              "lessonId": "din-06",
              "sectionIndex": 5,
              "title": "Din ve Sosyal Adalet",
              "book": "TYT-din",
              "pages": [
                58
              ]
            },
            {
              "lessonId": "din-06",
              "sectionIndex": 6,
              "title": "Kur’an’dan Mesajlar Al-i İmran Suresi 103-105. Ayetler",
              "book": "TYT-din",
              "pages": [
                59,
                60
              ]
            },
            {
              "lessonId": "din-09",
              "sectionIndex": 0,
              "title": "Kültür, medeniyet ve çoğul katkı",
              "book": "TYT-din",
              "pages": [
                32,
                33,
                34,
                35
              ]
            },
            {
              "lessonId": "din-09",
              "sectionIndex": 1,
              "title": "Hucurat 13 ve insan ilişkileri",
              "book": "TYT-din",
              "pages": [
                36
              ]
            }
          ],
          "coverage": "grouped",
          "page": 6,
          "note": "Din-hayat bağlantılarıyla birlikte eksik İslam medeniyeti ve coğrafi katkılar ünitesi yeni derse bağlandı."
        }
      ],
      "notes": [],
      "issues": []
    },
    {
      "id": "ayt-matematik",
      "exam": "AYT",
      "subject": "matematik",
      "label": "AYT Matematik",
      "sourceId": "ayt",
      "inScope": true,
      "page": 1,
      "pages": [
        1
      ],
      "reportedYearTotals": [
        29,
        32,
        30,
        31,
        31,
        30,
        31,
        31
      ],
      "rows": [
        {
          "id": "ayt-matematik-01",
          "title": "Temel Kavramlar",
          "counts": [
            4,
            2,
            2,
            3,
            2,
            4,
            2,
            1
          ],
          "rawCounts": [
            "4",
            "2",
            "2",
            "3",
            "2",
            "4",
            "2",
            "1"
          ],
          "reportedTotal": 20,
          "rawTotal": "20",
          "lessonIds": [
            "mat-tyt-01"
          ],
          "bookSections": [
            {
              "lessonId": "mat-tyt-01",
              "sectionIndex": 0,
              "title": "Sayı Kümeleri ve Sayı Doğrusu",
              "book": "TYT-mat",
              "pages": [
                9
              ]
            },
            {
              "lessonId": "mat-tyt-01",
              "sectionIndex": 1,
              "title": "Temel İşlemler",
              "book": "TYT-mat",
              "pages": [
                10,
                11
              ]
            },
            {
              "lessonId": "mat-tyt-01",
              "sectionIndex": 2,
              "title": "Tek, Çift, Pozitif ve Negatif Sayılar",
              "book": "TYT-mat",
              "pages": [
                12,
                13,
                14
              ]
            },
            {
              "lessonId": "mat-tyt-01",
              "sectionIndex": 3,
              "title": "Ardışık Sayılar",
              "book": "TYT-mat",
              "pages": [
                15
              ]
            }
          ],
          "coverage": "cross-exam",
          "page": 1
        },
        {
          "id": "ayt-matematik-02",
          "title": "Sayı Basamakları",
          "counts": [
            0,
            0,
            3,
            0,
            0,
            0,
            1,
            1
          ],
          "rawCounts": [
            "-",
            "-",
            "3",
            "-",
            "-",
            "-",
            "1",
            "1"
          ],
          "reportedTotal": 5,
          "rawTotal": "5",
          "lessonIds": [
            "mat-tyt-02"
          ],
          "bookSections": [
            {
              "lessonId": "mat-tyt-02",
              "sectionIndex": 0,
              "title": "Sayı Basamakları",
              "book": "TYT-mat",
              "pages": [
                16
              ]
            }
          ],
          "coverage": "cross-exam",
          "page": 1
        },
        {
          "id": "ayt-matematik-03",
          "title": "Üslü Sayılar",
          "counts": [
            0,
            0,
            1,
            1,
            0,
            1,
            0,
            1
          ],
          "rawCounts": [
            "-",
            "-",
            "1",
            "1",
            "-",
            "1",
            "-",
            "1"
          ],
          "reportedTotal": 4,
          "rawTotal": "4",
          "lessonIds": [
            "mat-tyt-08"
          ],
          "bookSections": [
            {
              "lessonId": "mat-tyt-08",
              "sectionIndex": 0,
              "title": "Üslü İfadeler ve Özellikleri",
              "book": "TYT-mat",
              "pages": [
                39,
                40
              ]
            },
            {
              "lessonId": "mat-tyt-08",
              "sectionIndex": 1,
              "title": "Üslü İfade İçeren Denklemler ve Eşitsizlikler",
              "book": "TYT-mat",
              "pages": [
                41
              ]
            }
          ],
          "coverage": "cross-exam",
          "page": 1
        },
        {
          "id": "ayt-matematik-04",
          "title": "Bölme ve Bölünebilme",
          "counts": [
            0,
            1,
            0,
            0,
            0,
            1,
            0,
            0
          ],
          "rawCounts": [
            "-",
            "1",
            "-",
            "-",
            "-",
            "1",
            "-",
            "-"
          ],
          "reportedTotal": 2,
          "rawTotal": "2",
          "lessonIds": [
            "mat-tyt-03"
          ],
          "bookSections": [
            {
              "lessonId": "mat-tyt-03",
              "sectionIndex": 0,
              "title": "Tam Sayılarda Kalanlı Bölme İşlemi",
              "book": "TYT-mat",
              "pages": [
                18
              ]
            },
            {
              "lessonId": "mat-tyt-03",
              "sectionIndex": 1,
              "title": "Bölünebilme Kuralları 1",
              "book": "TYT-mat",
              "pages": [
                19,
                20
              ]
            },
            {
              "lessonId": "mat-tyt-03",
              "sectionIndex": 2,
              "title": "Bölünebilme Kuralları 2 ve Asal Çarpanlar",
              "book": "TYT-mat",
              "pages": [
                21,
                22
              ]
            }
          ],
          "coverage": "cross-exam",
          "page": 1
        },
        {
          "id": "ayt-matematik-05",
          "title": "Fonksiyonlar",
          "counts": [
            3,
            2,
            2,
            2,
            2,
            2,
            2,
            2
          ],
          "rawCounts": [
            "3",
            "2",
            "2",
            "2",
            "2",
            "2",
            "2",
            "2"
          ],
          "reportedTotal": 17,
          "rawTotal": "17",
          "lessonIds": [
            "mat-tyt-19",
            "mat-tyt-20",
            "mat-ayt-01",
            "mat-ayt-03"
          ],
          "bookSections": [
            {
              "lessonId": "mat-tyt-19",
              "sectionIndex": 0,
              "title": "Fonksiyon Kavramı ve Gösterimi",
              "book": "TYT-mat",
              "pages": [
                81,
                82
              ]
            },
            {
              "lessonId": "mat-tyt-19",
              "sectionIndex": 1,
              "title": "İçine, Örten, Birebir, Birim ve Sabit Fonksiyonlar",
              "book": "TYT-mat",
              "pages": [
                83,
                84
              ]
            },
            {
              "lessonId": "mat-tyt-19",
              "sectionIndex": 2,
              "title": "Doğrusal, Parçalı, Çift ve Tek Fonksiyonlar",
              "book": "TYT-mat",
              "pages": [
                85,
                86
              ]
            },
            {
              "lessonId": "mat-tyt-19",
              "sectionIndex": 3,
              "title": "Fonksiyonlarda Dört İşlem ve Grafik Çizimi",
              "book": "TYT-mat",
              "pages": [
                87,
                88
              ]
            },
            {
              "lessonId": "mat-tyt-20",
              "sectionIndex": 0,
              "title": "Grafik Testleri ve İki Fonksiyonun Bileşkesi",
              "book": "TYT-mat",
              "pages": [
                89,
                90
              ]
            },
            {
              "lessonId": "mat-tyt-20",
              "sectionIndex": 1,
              "title": "Bir Fonksiyonun Tersi ve Grafik Uygulamaları",
              "book": "TYT-mat",
              "pages": [
                91,
                92
              ]
            },
            {
              "lessonId": "mat-ayt-01",
              "sectionIndex": 0,
              "title": "Fonksiyonun grafikleri ile ilgili uygulamalar ve eksen kesişimleri",
              "book": "AYT-mat",
              "pages": [
                9,
                10
              ]
            },
            {
              "lessonId": "mat-ayt-01",
              "sectionIndex": 1,
              "title": "Artan-azalan aralıklar, ekstremum ve ortalama değişim hızı",
              "book": "AYT-mat",
              "pages": [
                11,
                12
              ]
            },
            {
              "lessonId": "mat-ayt-03",
              "sectionIndex": 0,
              "title": "Çift-tek fonksiyonlar, eksen simetrileri ve düşey öteleme",
              "book": "AYT-mat",
              "pages": [
                19,
                20
              ]
            },
            {
              "lessonId": "mat-ayt-03",
              "sectionIndex": 1,
              "title": "Yatay öteleme, dikey ve yatay ölçekleme",
              "book": "AYT-mat",
              "pages": [
                21
              ]
            }
          ],
          "coverage": "cross-exam",
          "page": 1
        },
        {
          "id": "ayt-matematik-06",
          "title": "2. Dereceden Denklemler",
          "counts": [
            null,
            0,
            1,
            1,
            2,
            2,
            1,
            1
          ],
          "rawCounts": [
            "",
            "-",
            "1",
            "1",
            "2",
            "2",
            "1",
            "1"
          ],
          "reportedTotal": 8,
          "rawTotal": "8",
          "lessonIds": [
            "mat-tyt-22",
            "mat-ayt-04"
          ],
          "bookSections": [
            {
              "lessonId": "mat-tyt-22",
              "sectionIndex": 0,
              "title": "İkinci Dereceden Denklem Kavramı ve Çarpanlarla Çözüm",
              "book": "TYT-mat",
              "pages": [
                102,
                103
              ]
            },
            {
              "lessonId": "mat-tyt-22",
              "sectionIndex": 1,
              "title": "Diskriminant ve Karmaşık Sayılar",
              "book": "TYT-mat",
              "pages": [
                104,
                105
              ]
            },
            {
              "lessonId": "mat-tyt-22",
              "sectionIndex": 2,
              "title": "Kök-Katsayı İlişkisi ve Köklerden Denklem",
              "book": "TYT-mat",
              "pages": [
                106
              ]
            },
            {
              "lessonId": "mat-ayt-04",
              "sectionIndex": 0,
              "title": "İki bilinmeyenli sistem ve ikinci dereceden işaret tablosu",
              "book": "AYT-mat",
              "pages": [
                22,
                23
              ]
            },
            {
              "lessonId": "mat-ayt-04",
              "sectionIndex": 1,
              "title": "Çarpım-bölüm eşitsizlikleri ve eşitsizlik sistemleri",
              "book": "AYT-mat",
              "pages": [
                24,
                25
              ]
            }
          ],
          "coverage": "cross-exam",
          "note": "2018 hücresi kaynakta boş; 0 olarak doldurulmadı.",
          "page": 1
        },
        {
          "id": "ayt-matematik-07",
          "title": "Mantık",
          "counts": [
            2,
            1,
            0,
            1,
            1,
            1,
            1,
            1
          ],
          "rawCounts": [
            "2",
            "1",
            "-",
            "1",
            "1",
            "1",
            "1",
            "1"
          ],
          "reportedTotal": 8,
          "rawTotal": "8",
          "lessonIds": [
            "mat-tyt-14"
          ],
          "bookSections": [
            {
              "lessonId": "mat-tyt-14",
              "sectionIndex": 0,
              "title": "Önermeler ve Doğruluk Tablosu",
              "book": "TYT-mat",
              "pages": [
                56,
                57
              ]
            },
            {
              "lessonId": "mat-tyt-14",
              "sectionIndex": 1,
              "title": "Bileşik Önermeler ve De Morgan Kuralları",
              "book": "TYT-mat",
              "pages": [
                58,
                59
              ]
            },
            {
              "lessonId": "mat-tyt-14",
              "sectionIndex": 2,
              "title": "Koşullu ve İki Yönlü Koşullu Önerme",
              "book": "TYT-mat",
              "pages": [
                60,
                61
              ]
            },
            {
              "lessonId": "mat-tyt-14",
              "sectionIndex": 3,
              "title": "Niceleyiciler; Tanım, Aksiyom, Teorem ve İspat",
              "book": "TYT-mat",
              "pages": [
                62,
                63
              ]
            }
          ],
          "coverage": "cross-exam",
          "page": 1
        },
        {
          "id": "ayt-matematik-08",
          "title": "Parabol",
          "counts": [
            null,
            1,
            1,
            1,
            0,
            1,
            1,
            0
          ],
          "rawCounts": [
            "",
            "1",
            "1",
            "1",
            "-",
            "1",
            "1",
            "-"
          ],
          "reportedTotal": 5,
          "rawTotal": "5",
          "lessonIds": [
            "mat-ayt-02"
          ],
          "bookSections": [
            {
              "lessonId": "mat-ayt-02",
              "sectionIndex": 0,
              "title": "İkinci dereceden fonksiyonun grafiği; tepe noktası ve görüntü kümesi",
              "book": "AYT-mat",
              "pages": [
                13,
                14
              ]
            },
            {
              "lessonId": "mat-ayt-02",
              "sectionIndex": 1,
              "title": "Parabolün grafik çizimi ve bazı elemanları verilen denklemi yazma",
              "book": "AYT-mat",
              "pages": [
                15,
                16
              ]
            },
            {
              "lessonId": "mat-ayt-02",
              "sectionIndex": 2,
              "title": "Parabol-doğru durumları ve ikinci dereceden modelleme",
              "book": "AYT-mat",
              "pages": [
                17,
                18
              ]
            }
          ],
          "coverage": "covered",
          "note": "2018 hücresi kaynakta boş; 0 olarak doldurulmadı.",
          "page": 1
        },
        {
          "id": "ayt-matematik-09",
          "title": "Trigonometri",
          "counts": [
            3,
            3,
            4,
            5,
            4,
            5,
            5,
            5
          ],
          "rawCounts": [
            "3",
            "3",
            "4",
            "5",
            "4",
            "5",
            "5",
            "5"
          ],
          "reportedTotal": 34,
          "rawTotal": "34",
          "lessonIds": [
            "mat-ayt-06",
            "mat-ayt-07",
            "mat-ayt-08",
            "mat-ayt-09",
            "mat-ayt-10"
          ],
          "bookSections": [
            {
              "lessonId": "mat-ayt-06",
              "sectionIndex": 0,
              "title": "Yönlü açılar, derece-radyan ve esas ölçü",
              "book": "AYT-mat",
              "pages": [
                30,
                31
              ]
            },
            {
              "lessonId": "mat-ayt-06",
              "sectionIndex": 1,
              "title": "Birim çember; sinüs ve kosinüs koordinatları",
              "book": "AYT-mat",
              "pages": [
                32,
                33
              ]
            },
            {
              "lessonId": "mat-ayt-06",
              "sectionIndex": 2,
              "title": "Tanjant-kotanjant ve sekant-kosekant",
              "book": "AYT-mat",
              "pages": [
                34,
                35
              ]
            },
            {
              "lessonId": "mat-ayt-07",
              "sectionIndex": 0,
              "title": "Bir açının trigonometrik değerlerini dar açı cinsinden yazma",
              "book": "AYT-mat",
              "pages": [
                36,
                37
              ]
            },
            {
              "lessonId": "mat-ayt-07",
              "sectionIndex": 1,
              "title": "Trigonometrik fonksiyonların işaretleri ve sıralama",
              "book": "AYT-mat",
              "pages": [
                38
              ]
            },
            {
              "lessonId": "mat-ayt-07",
              "sectionIndex": 2,
              "title": "Kosinüs ve sinüs teoremleri",
              "book": "AYT-mat",
              "pages": [
                39,
                40
              ]
            },
            {
              "lessonId": "mat-ayt-08",
              "sectionIndex": 0,
              "title": "Periyot ve periyodik fonksiyonlar",
              "book": "AYT-mat",
              "pages": [
                41
              ]
            },
            {
              "lessonId": "mat-ayt-08",
              "sectionIndex": 1,
              "title": "Sinüs-kosinüs ve tanjant-kotanjant grafikleri",
              "book": "AYT-mat",
              "pages": [
                42,
                43
              ]
            },
            {
              "lessonId": "mat-ayt-08",
              "sectionIndex": 2,
              "title": "Ters trigonometrik fonksiyonlar ve esas değer",
              "book": "AYT-mat",
              "pages": [
                44
              ]
            },
            {
              "lessonId": "mat-ayt-09",
              "sectionIndex": 0,
              "title": "Sinüs-kosinüs ve tanjant-kotanjant toplam-fark formülleri",
              "book": "AYT-mat",
              "pages": [
                45,
                46
              ]
            },
            {
              "lessonId": "mat-ayt-09",
              "sectionIndex": 1,
              "title": "Sinüs-kosinüs ve tanjant-kotanjant iki kat açı formülleri",
              "book": "AYT-mat",
              "pages": [
                47,
                48
              ]
            },
            {
              "lessonId": "mat-ayt-10",
              "sectionIndex": 0,
              "title": "sinx, cosx, tanx ve cotx denklemleri",
              "book": "AYT-mat",
              "pages": [
                49
              ]
            },
            {
              "lessonId": "mat-ayt-10",
              "sectionIndex": 1,
              "title": "Sinx ve cosx’e göre lineer ve homojen denklemler",
              "book": "AYT-mat",
              "pages": [
                50
              ]
            }
          ],
          "coverage": "grouped",
          "page": 1
        },
        {
          "id": "ayt-matematik-10",
          "title": "Karmaşık Sayılar",
          "counts": [
            1,
            1,
            2,
            0,
            0,
            0,
            0,
            0
          ],
          "rawCounts": [
            "1",
            "1",
            "2",
            "-",
            "-",
            "-",
            "-",
            "-"
          ],
          "reportedTotal": 4,
          "rawTotal": "4",
          "lessonIds": [
            "mat-tyt-22"
          ],
          "bookSections": [
            {
              "lessonId": "mat-tyt-22",
              "sectionIndex": 1,
              "title": "Diskriminant ve Karmaşık Sayılar",
              "book": "TYT-mat",
              "pages": [
                104,
                105
              ]
            }
          ],
          "coverage": "cross-exam",
          "page": 1
        },
        {
          "id": "ayt-matematik-11",
          "title": "Polinomlar",
          "counts": [
            2,
            2,
            2,
            1,
            1,
            2,
            0,
            1
          ],
          "rawCounts": [
            "2",
            "2",
            "2",
            "1",
            "1",
            "2",
            "-",
            "1"
          ],
          "reportedTotal": 11,
          "rawTotal": "11",
          "lessonIds": [
            "mat-tyt-21"
          ],
          "bookSections": [
            {
              "lessonId": "mat-tyt-21",
              "sectionIndex": 0,
              "title": "Polinom Kavramı ve Polinomlarda İşlemler",
              "book": "TYT-mat",
              "pages": [
                93,
                94
              ]
            },
            {
              "lessonId": "mat-tyt-21",
              "sectionIndex": 1,
              "title": "Polinomlarda Bölme ve Bölmeden Kalan Bulma",
              "book": "TYT-mat",
              "pages": [
                95,
                96
              ]
            }
          ],
          "coverage": "cross-exam",
          "page": 1
        },
        {
          "id": "ayt-matematik-12",
          "title": "Logaritma",
          "counts": [
            2,
            3,
            3,
            1,
            2,
            3,
            1,
            2
          ],
          "rawCounts": [
            "2",
            "3",
            "3",
            "1",
            "2",
            "3",
            "1",
            "2"
          ],
          "reportedTotal": 17,
          "rawTotal": "17",
          "lessonIds": [
            "mat-ayt-11"
          ],
          "bookSections": [
            {
              "lessonId": "mat-ayt-11",
              "sectionIndex": 0,
              "title": "Üstel fonksiyonun tanımı ve grafiği",
              "book": "AYT-mat",
              "pages": [
                51,
                52
              ]
            },
            {
              "lessonId": "mat-ayt-11",
              "sectionIndex": 1,
              "title": "Logaritmanın tanımı, terslik, grafik ve öteleme",
              "book": "AYT-mat",
              "pages": [
                53,
                54,
                55
              ]
            },
            {
              "lessonId": "mat-ayt-11",
              "sectionIndex": 2,
              "title": "Onluk-doğal logaritma ve logaritmanın özellikleri",
              "book": "AYT-mat",
              "pages": [
                56,
                57,
                58
              ]
            },
            {
              "lessonId": "mat-ayt-11",
              "sectionIndex": 3,
              "title": "Üstel-logaritmik denklemler, eşitsizlikler ve gerçek hayat modelleri",
              "book": "AYT-mat",
              "pages": [
                59,
                60,
                61
              ]
            }
          ],
          "coverage": "covered",
          "page": 1
        },
        {
          "id": "ayt-matematik-13",
          "title": "Diziler",
          "counts": [
            1,
            1,
            2,
            1,
            1,
            2,
            1,
            1
          ],
          "rawCounts": [
            "1",
            "1",
            "2",
            "1",
            "1",
            "2",
            "1",
            "1"
          ],
          "reportedTotal": 10,
          "rawTotal": "10",
          "lessonIds": [
            "mat-ayt-12"
          ],
          "bookSections": [
            {
              "lessonId": "mat-ayt-12",
              "sectionIndex": 0,
              "title": "Dizi kavramı, dizi çeşitleri ve indirgeme bağıntısı",
              "book": "AYT-mat",
              "pages": [
                62,
                63
              ]
            },
            {
              "lessonId": "mat-ayt-12",
              "sectionIndex": 1,
              "title": "Aritmetik ve geometrik dizinin özellikleri",
              "book": "AYT-mat",
              "pages": [
                64,
                65
              ]
            },
            {
              "lessonId": "mat-ayt-12",
              "sectionIndex": 2,
              "title": "İlk n terim toplamları ve Fibonacci modeli",
              "book": "AYT-mat",
              "pages": [
                66,
                67
              ]
            }
          ],
          "coverage": "covered",
          "page": 1
        },
        {
          "id": "ayt-matematik-14",
          "title": "Permütasyon- Kombinasyon- Olasılık- Binom",
          "counts": [
            2,
            2,
            3,
            2,
            3,
            3,
            3,
            3
          ],
          "rawCounts": [
            "2",
            "2",
            "3",
            "2",
            "3",
            "3",
            "3",
            "3"
          ],
          "reportedTotal": 21,
          "rawTotal": "21",
          "lessonIds": [
            "mat-tyt-16",
            "mat-tyt-17",
            "mat-tyt-18",
            "mat-ayt-05"
          ],
          "bookSections": [
            {
              "lessonId": "mat-tyt-16",
              "sectionIndex": 0,
              "title": "Saymanın Temel İlkesi ve Faktöriyel",
              "book": "TYT-mat",
              "pages": [
                70,
                71
              ]
            },
            {
              "lessonId": "mat-tyt-16",
              "sectionIndex": 1,
              "title": "Permütasyon ve Tekrarlı Permütasyon",
              "book": "TYT-mat",
              "pages": [
                72,
                73
              ]
            },
            {
              "lessonId": "mat-tyt-17",
              "sectionIndex": 0,
              "title": "Kombinasyon Kavramı ve Problemleri",
              "book": "TYT-mat",
              "pages": [
                74,
                75
              ]
            },
            {
              "lessonId": "mat-tyt-17",
              "sectionIndex": 1,
              "title": "Kombinasyon ve Geometri",
              "book": "TYT-mat",
              "pages": [
                76
              ]
            },
            {
              "lessonId": "mat-tyt-17",
              "sectionIndex": 2,
              "title": "Binom Açılımı ve Pascal Üçgeni",
              "book": "TYT-mat",
              "pages": [
                77,
                78
              ]
            },
            {
              "lessonId": "mat-tyt-18",
              "sectionIndex": 0,
              "title": "Olasılıkta Temel Kavramlar ve Basit Olaylar",
              "book": "TYT-mat",
              "pages": [
                79,
                80
              ]
            },
            {
              "lessonId": "mat-ayt-05",
              "sectionIndex": 0,
              "title": "Koşullu olasılık ve kulüp tablosu",
              "book": "AYT-mat",
              "pages": [
                26
              ]
            },
            {
              "lessonId": "mat-ayt-05",
              "sectionIndex": 1,
              "title": "Bağımsız olaylar, bağımlılık ve bileşik olay ağacı",
              "book": "AYT-mat",
              "pages": [
                27,
                28
              ]
            },
            {
              "lessonId": "mat-ayt-05",
              "sectionIndex": 2,
              "title": "Deneysel olasılık: 100 atış, 37 kez üç",
              "book": "AYT-mat",
              "pages": [
                29
              ]
            }
          ],
          "coverage": "cross-exam",
          "page": 1
        },
        {
          "id": "ayt-matematik-15",
          "title": "Limit",
          "counts": [
            1,
            2,
            0,
            2,
            2,
            0,
            2,
            2
          ],
          "rawCounts": [
            "1",
            "2",
            "-",
            "2",
            "2",
            "-",
            "2",
            "2"
          ],
          "reportedTotal": 11,
          "rawTotal": "11",
          "lessonIds": [
            "mat-ayt-13"
          ],
          "bookSections": [
            {
              "lessonId": "mat-ayt-13",
              "sectionIndex": 0,
              "title": "Yaklaşım, sağ-sol limit ve kritik noktalar",
              "book": "AYT-mat",
              "pages": [
                68,
                69
              ]
            },
            {
              "lessonId": "mat-ayt-13",
              "sectionIndex": 1,
              "title": "Limit özellikleri ve parçalı tanımlı fonksiyonlar",
              "book": "AYT-mat",
              "pages": [
                70,
                71
              ]
            },
            {
              "lessonId": "mat-ayt-13",
              "sectionIndex": 2,
              "title": "0/0 belirsizliği, sadeleştirme ve kaynakta L’Hospital notu",
              "book": "AYT-mat",
              "pages": [
                72,
                73
              ]
            },
            {
              "lessonId": "mat-ayt-13",
              "sectionIndex": 3,
              "title": "Süreklilik ve kapalı aralık uçları",
              "book": "AYT-mat",
              "pages": [
                74,
                75
              ]
            }
          ],
          "coverage": "covered",
          "page": 1
        },
        {
          "id": "ayt-matematik-16",
          "title": "Türev",
          "counts": [
            1,
            4,
            0,
            3,
            4,
            0,
            3,
            3
          ],
          "rawCounts": [
            "1",
            "4",
            "-",
            "3",
            "4",
            "-",
            "3",
            "3"
          ],
          "reportedTotal": 18,
          "rawTotal": "18",
          "lessonIds": [
            "mat-ayt-14",
            "mat-ayt-15"
          ],
          "bookSections": [
            {
              "lessonId": "mat-ayt-14",
              "sectionIndex": 0,
              "title": "Anlık değişim oranı ve türev tanımı",
              "book": "AYT-mat",
              "pages": [
                76,
                77
              ]
            },
            {
              "lessonId": "mat-ayt-14",
              "sectionIndex": 1,
              "title": "Kuvvet kuralı, ikinci türev ve süreklilik ilişkisi",
              "book": "AYT-mat",
              "pages": [
                78
              ]
            },
            {
              "lessonId": "mat-ayt-14",
              "sectionIndex": 2,
              "title": "Toplam, çarpım, bölüm ve bileşke türevi",
              "book": "AYT-mat",
              "pages": [
                79,
                80
              ]
            },
            {
              "lessonId": "mat-ayt-15",
              "sectionIndex": 0,
              "title": "Bir fonksiyonun artan ve azalan olduğu aralıklar",
              "book": "AYT-mat",
              "pages": [
                81,
                82
              ]
            },
            {
              "lessonId": "mat-ayt-15",
              "sectionIndex": 1,
              "title": "Yerel-mutlak ekstremum ve türevin sıfır olması",
              "book": "AYT-mat",
              "pages": [
                83,
                84,
                85
              ]
            },
            {
              "lessonId": "mat-ayt-15",
              "sectionIndex": 2,
              "title": "Türev yardımıyla grafik çizimi ve teğet",
              "book": "AYT-mat",
              "pages": [
                86
              ]
            },
            {
              "lessonId": "mat-ayt-15",
              "sectionIndex": 3,
              "title": "Maksimum-minimum problemleri ve günlük hayat",
              "book": "AYT-mat",
              "pages": [
                87,
                88
              ]
            }
          ],
          "coverage": "grouped",
          "page": 1
        },
        {
          "id": "ayt-matematik-17",
          "title": "İntegral",
          "counts": [
            3,
            4,
            0,
            4,
            4,
            0,
            5,
            3
          ],
          "rawCounts": [
            "3",
            "4",
            "-",
            "4",
            "4",
            "-",
            "5",
            "3"
          ],
          "reportedTotal": 23,
          "rawTotal": "23",
          "lessonIds": [
            "mat-ayt-16",
            "mat-ayt-17"
          ],
          "bookSections": [
            {
              "lessonId": "mat-ayt-16",
              "sectionIndex": 0,
              "title": "Belirsiz integral, integral sabiti ve kuvvet kuralı",
              "book": "AYT-mat",
              "pages": [
                89
              ]
            },
            {
              "lessonId": "mat-ayt-16",
              "sectionIndex": 1,
              "title": "Diferansiyel kavramı ve değişken değiştirme yöntemi",
              "book": "AYT-mat",
              "pages": [
                90,
                91
              ]
            },
            {
              "lessonId": "mat-ayt-17",
              "sectionIndex": 0,
              "title": "Riemann toplamı, alt-üst toplam ve limit",
              "book": "AYT-mat",
              "pages": [
                92,
                93,
                94
              ]
            },
            {
              "lessonId": "mat-ayt-17",
              "sectionIndex": 1,
              "title": "Belirli integral ve temel özellikleri",
              "book": "AYT-mat",
              "pages": [
                95,
                96
              ]
            },
            {
              "lessonId": "mat-ayt-17",
              "sectionIndex": 2,
              "title": "Belirli integral ile alan: eksenin üstü ve altı",
              "book": "AYT-mat",
              "pages": [
                97
              ]
            },
            {
              "lessonId": "mat-ayt-17",
              "sectionIndex": 3,
              "title": "İki fonksiyon grafiği arasında kalan sınırlı alan",
              "book": "AYT-mat",
              "pages": [
                98
              ]
            }
          ],
          "coverage": "grouped",
          "page": 1
        },
        {
          "id": "ayt-matematik-18",
          "title": "Köklü Sayılar",
          "counts": [
            1,
            0,
            0,
            0,
            0,
            0,
            0,
            0
          ],
          "rawCounts": [
            "1",
            "-",
            "-",
            "-",
            "-",
            "-",
            "-",
            "-"
          ],
          "reportedTotal": 1,
          "rawTotal": "1",
          "lessonIds": [
            "mat-tyt-09"
          ],
          "bookSections": [
            {
              "lessonId": "mat-tyt-09",
              "sectionIndex": 0,
              "title": "Köklü İfadeler ve Eşlenik",
              "book": "TYT-mat",
              "pages": [
                42,
                43
              ]
            },
            {
              "lessonId": "mat-tyt-09",
              "sectionIndex": 1,
              "title": "Köklü İfadeleri İçeren Denklemler ve Eşitsizlikler",
              "book": "TYT-mat",
              "pages": [
                44
              ]
            }
          ],
          "coverage": "cross-exam",
          "page": 1
        },
        {
          "id": "ayt-matematik-19",
          "title": "Kümeler ve Kartezyen Çarpım",
          "counts": [
            0,
            1,
            2,
            1,
            1,
            1,
            1,
            1
          ],
          "rawCounts": [
            "-",
            "1",
            "2",
            "1",
            "1",
            "1",
            "1",
            "1"
          ],
          "reportedTotal": 8,
          "rawTotal": "8",
          "lessonIds": [
            "mat-tyt-15"
          ],
          "bookSections": [
            {
              "lessonId": "mat-tyt-15",
              "sectionIndex": 0,
              "title": "Kümelerde Temel Kavramlar ve Alt Küme",
              "book": "TYT-mat",
              "pages": [
                64,
                65
              ]
            },
            {
              "lessonId": "mat-tyt-15",
              "sectionIndex": 1,
              "title": "Kesişim, Birleşim, Fark ve Tümleme",
              "book": "TYT-mat",
              "pages": [
                66,
                67
              ]
            },
            {
              "lessonId": "mat-tyt-15",
              "sectionIndex": 2,
              "title": "Küme Problemleri ve Sıralı İkililer",
              "book": "TYT-mat",
              "pages": [
                68,
                69
              ]
            }
          ],
          "coverage": "cross-exam",
          "page": 1
        },
        {
          "id": "ayt-matematik-20",
          "title": "Basit Eşitsizlikler",
          "counts": [
            0,
            1,
            1,
            1,
            0,
            1,
            1,
            1
          ],
          "rawCounts": [
            "-",
            "1",
            "1",
            "1",
            "-",
            "1",
            "1",
            "1"
          ],
          "reportedTotal": 6,
          "rawTotal": "6",
          "lessonIds": [
            "mat-tyt-06",
            "mat-ayt-04"
          ],
          "bookSections": [
            {
              "lessonId": "mat-tyt-06",
              "sectionIndex": 0,
              "title": "Gerçek Sayılar Kümesinde Aralık Kavramı",
              "book": "TYT-mat",
              "pages": [
                29,
                30
              ]
            },
            {
              "lessonId": "mat-tyt-06",
              "sectionIndex": 1,
              "title": "Bir Bilinmeyenli Denklem ve Basit Eşitsizlikler",
              "book": "TYT-mat",
              "pages": [
                31,
                32
              ]
            },
            {
              "lessonId": "mat-tyt-06",
              "sectionIndex": 2,
              "title": "İki Bilinmeyenli Denklem ve Eşitsizlik Sistemleri",
              "book": "TYT-mat",
              "pages": [
                33,
                34,
                35
              ]
            },
            {
              "lessonId": "mat-ayt-04",
              "sectionIndex": 0,
              "title": "İki bilinmeyenli sistem ve ikinci dereceden işaret tablosu",
              "book": "AYT-mat",
              "pages": [
                22,
                23
              ]
            },
            {
              "lessonId": "mat-ayt-04",
              "sectionIndex": 1,
              "title": "Çarpım-bölüm eşitsizlikleri ve eşitsizlik sistemleri",
              "book": "AYT-mat",
              "pages": [
                24,
                25
              ]
            }
          ],
          "coverage": "cross-exam",
          "page": 1
        },
        {
          "id": "ayt-matematik-21",
          "title": "Mutlak Değer",
          "counts": [
            0,
            1,
            1,
            0,
            0,
            1,
            0,
            1
          ],
          "rawCounts": [
            "-",
            "1",
            "1",
            "-",
            "-",
            "1",
            "-",
            "1"
          ],
          "reportedTotal": 4,
          "rawTotal": "4",
          "lessonIds": [
            "mat-tyt-07"
          ],
          "bookSections": [
            {
              "lessonId": "mat-tyt-07",
              "sectionIndex": 0,
              "title": "Mutlak Değer Kavramı ve Özellikleri",
              "book": "TYT-mat",
              "pages": [
                36,
                37
              ]
            },
            {
              "lessonId": "mat-tyt-07",
              "sectionIndex": 1,
              "title": "Mutlak Değerli Denklemler ve Eşitsizlikler",
              "book": "TYT-mat",
              "pages": [
                38
              ]
            }
          ],
          "coverage": "cross-exam",
          "page": 1
        },
        {
          "id": "ayt-matematik-22",
          "title": "EBOB-EKOK",
          "counts": [
            0,
            0,
            0,
            1,
            1,
            0,
            0,
            1
          ],
          "rawCounts": [
            "-",
            "-",
            "-",
            "1",
            "1",
            "-",
            "-",
            "1"
          ],
          "reportedTotal": 3,
          "rawTotal": "3",
          "lessonIds": [
            "mat-tyt-04"
          ],
          "bookSections": [
            {
              "lessonId": "mat-tyt-04",
              "sectionIndex": 0,
              "title": "EBOB-EKOK Kavramları ve Problemleri",
              "book": "TYT-mat",
              "pages": [
                23,
                24
              ]
            },
            {
              "lessonId": "mat-tyt-04",
              "sectionIndex": 1,
              "title": "Periyodik Problemler",
              "book": "TYT-mat",
              "pages": [
                25
              ]
            }
          ],
          "coverage": "cross-exam",
          "page": 1
        },
        {
          "id": "ayt-matematik-23",
          "title": "Çarpanlara Ayırma",
          "counts": [
            0,
            0,
            0,
            0,
            1,
            0,
            1,
            0
          ],
          "rawCounts": [
            "-",
            "-",
            "-",
            "-",
            "1",
            "-",
            "1",
            "-"
          ],
          "reportedTotal": 2,
          "rawTotal": "2",
          "lessonIds": [
            "mat-tyt-21"
          ],
          "bookSections": [
            {
              "lessonId": "mat-tyt-21",
              "sectionIndex": 2,
              "title": "Ortak Çarpan, Gruplandırma ve Kare Özdeşlikleri",
              "book": "TYT-mat",
              "pages": [
                97,
                98
              ]
            },
            {
              "lessonId": "mat-tyt-21",
              "sectionIndex": 3,
              "title": "Küp Özdeşlikleri ve Üç Terimli İfadeler",
              "book": "TYT-mat",
              "pages": [
                99,
                100
              ]
            },
            {
              "lessonId": "mat-tyt-21",
              "sectionIndex": 4,
              "title": "Rasyonel İfadelerin Sadeleştirilmesi",
              "book": "TYT-mat",
              "pages": [
                101
              ]
            }
          ],
          "coverage": "cross-exam",
          "page": 1
        }
      ],
      "notes": [
        "Kaynak tablosunda boş hücre veya toplam tutarsızlığı var; ayrıntılar issues alanında ham değerlerle kaydedilmiştir.",
        "Bazı ortak ön koşullar farklı sınav etiketi taşıyan mevcut derslere bağlıdır. Eşleşme içerik erişimi içindir; 2027 resmî sınav kapsamı ilanı değildir."
      ],
      "issues": [
        {
          "type": "blankSourceCells",
          "rowId": "ayt-matematik-06",
          "years": [
            2018
          ],
          "message": "Kaynakta boş hücreler var; toplamdan değer üretilmedi."
        },
        {
          "type": "blankSourceCells",
          "rowId": "ayt-matematik-08",
          "years": [
            2018
          ],
          "message": "Kaynakta boş hücreler var; toplamdan değer üretilmedi."
        }
      ]
    },
    {
      "id": "ayt-geometri",
      "exam": "AYT",
      "subject": "matematik",
      "topicArea": "geometri",
      "label": "AYT Geometri",
      "sourceId": "ayt",
      "inScope": true,
      "page": 2,
      "pages": [
        2
      ],
      "reportedYearTotals": [
        11,
        8,
        10,
        9,
        9,
        10,
        9,
        9
      ],
      "rows": [
        {
          "id": "ayt-geometri-01",
          "title": "Doğruda ve Üçgende Açı",
          "counts": [
            1,
            0,
            1,
            0,
            1,
            2,
            1,
            0
          ],
          "rawCounts": [
            "1",
            "-",
            "1",
            "-",
            "1",
            "2",
            "1",
            "-"
          ],
          "reportedTotal": 6,
          "rawTotal": "6",
          "lessonIds": [
            "mat-tyt-geo-01",
            "mat-tyt-geo-02"
          ],
          "bookSections": [
            {
              "lessonId": "mat-tyt-geo-01",
              "sectionIndex": 0,
              "title": "Açı kavramı ve çeşitleri",
              "book": "TYT-mat",
              "pages": [
                111,
                112
              ]
            },
            {
              "lessonId": "mat-tyt-geo-01",
              "sectionIndex": 1,
              "title": "Paralel iki doğrunun bir kesenle yaptığı açılar",
              "book": "TYT-mat",
              "pages": [
                113
              ]
            },
            {
              "lessonId": "mat-tyt-geo-02",
              "sectionIndex": 0,
              "title": "Üçgende açılar; ikizkenar ve eşkenar üçgende açı özellikleri",
              "book": "TYT-mat",
              "pages": [
                114,
                115
              ]
            }
          ],
          "coverage": "cross-exam",
          "page": 2
        },
        {
          "id": "ayt-geometri-02",
          "title": "Özel Üçgenler",
          "counts": [
            2,
            0,
            2,
            0,
            0,
            0,
            0,
            0
          ],
          "rawCounts": [
            "2",
            "-",
            "2",
            "-",
            "-",
            "-",
            "-",
            "-"
          ],
          "reportedTotal": 4,
          "rawTotal": "4",
          "lessonIds": [
            "mat-tyt-geo-06"
          ],
          "bookSections": [
            {
              "lessonId": "mat-tyt-geo-06",
              "sectionIndex": 0,
              "title": "Dik üçgende Pisagor teoremi",
              "book": "TYT-mat",
              "pages": [
                132
              ]
            },
            {
              "lessonId": "mat-tyt-geo-06",
              "sectionIndex": 1,
              "title": "Öklidin çalışmaları; üçgende Öklid teoremi",
              "book": "TYT-mat",
              "pages": [
                133
              ]
            },
            {
              "lessonId": "mat-tyt-geo-06",
              "sectionIndex": 2,
              "title": "Trigonometrik oranlar; 30°, 45°, 60°nin oranları",
              "book": "TYT-mat",
              "pages": [
                134,
                135
              ]
            },
            {
              "lessonId": "mat-tyt-geo-06",
              "sectionIndex": 3,
              "title": "Birim çember",
              "book": "TYT-mat",
              "pages": [
                136
              ]
            }
          ],
          "coverage": "cross-exam",
          "page": 2
        },
        {
          "id": "ayt-geometri-03",
          "title": "Açıortay ve Kenarortay",
          "counts": [
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0
          ],
          "rawCounts": [
            "-",
            "-",
            "-",
            "-",
            "-",
            "-",
            "-",
            "-"
          ],
          "reportedTotal": null,
          "rawTotal": "-",
          "lessonIds": [
            "mat-tyt-geo-04",
            "mat-tyt-geo-05"
          ],
          "bookSections": [
            {
              "lessonId": "mat-tyt-geo-04",
              "sectionIndex": 0,
              "title": "Açıortay ve özellikleri; üçgende dış açıortay",
              "book": "TYT-mat",
              "pages": [
                124,
                125
              ]
            },
            {
              "lessonId": "mat-tyt-geo-04",
              "sectionIndex": 1,
              "title": "İç ve dış açıortay teoremi; katlama uygulaması",
              "book": "TYT-mat",
              "pages": [
                126,
                127
              ]
            },
            {
              "lessonId": "mat-tyt-geo-05",
              "sectionIndex": 0,
              "title": "Üçgende kenarortay",
              "book": "TYT-mat",
              "pages": [
                128
              ]
            },
            {
              "lessonId": "mat-tyt-geo-05",
              "sectionIndex": 1,
              "title": "Üçgende yükseklik; ikizkenar ve eşkenar üçgende yükseklik",
              "book": "TYT-mat",
              "pages": [
                129,
                130
              ]
            },
            {
              "lessonId": "mat-tyt-geo-05",
              "sectionIndex": 2,
              "title": "Üçgende kenar orta dikme",
              "book": "TYT-mat",
              "pages": [
                131
              ]
            }
          ],
          "coverage": "cross-exam",
          "page": 2
        },
        {
          "id": "ayt-geometri-04",
          "title": "Açı Kenar Bağıntıları",
          "counts": [
            0,
            1,
            0,
            0,
            0,
            0,
            0,
            0
          ],
          "rawCounts": [
            "-",
            "1",
            "-",
            "-",
            "-",
            "-",
            "-",
            "-"
          ],
          "reportedTotal": 1,
          "rawTotal": "1",
          "lessonIds": [
            "mat-tyt-geo-02"
          ],
          "bookSections": [
            {
              "lessonId": "mat-tyt-geo-02",
              "sectionIndex": 1,
              "title": "Üçgende açı-kenar bağıntıları; üçgen eşitsizliği",
              "book": "TYT-mat",
              "pages": [
                116,
                117
              ]
            }
          ],
          "coverage": "cross-exam",
          "page": 2
        },
        {
          "id": "ayt-geometri-05",
          "title": "Üçgende Alan ve Benzerlik",
          "counts": [
            0,
            0,
            0,
            0,
            0,
            1,
            0,
            1
          ],
          "rawCounts": [
            "-",
            "-",
            "-",
            "-",
            "-",
            "1",
            "-",
            "1"
          ],
          "reportedTotal": 2,
          "rawTotal": "2",
          "lessonIds": [
            "mat-tyt-geo-03",
            "mat-tyt-geo-07"
          ],
          "bookSections": [
            {
              "lessonId": "mat-tyt-geo-03",
              "sectionIndex": 0,
              "title": "Üçgenlerde eşlik",
              "book": "TYT-mat",
              "pages": [
                118,
                119
              ]
            },
            {
              "lessonId": "mat-tyt-geo-03",
              "sectionIndex": 1,
              "title": "Üçgenlerde benzerlik",
              "book": "TYT-mat",
              "pages": [
                120,
                121
              ]
            },
            {
              "lessonId": "mat-tyt-geo-03",
              "sectionIndex": 2,
              "title": "Üçgenlerde temel benzerlik ve benzerlik uygulamaları",
              "book": "TYT-mat",
              "pages": [
                122,
                123
              ]
            },
            {
              "lessonId": "mat-tyt-geo-07",
              "sectionIndex": 0,
              "title": "Üçgende alan",
              "book": "TYT-mat",
              "pages": [
                137
              ]
            },
            {
              "lessonId": "mat-tyt-geo-07",
              "sectionIndex": 1,
              "title": "Üçgende alan uygulamaları",
              "book": "TYT-mat",
              "pages": [
                138
              ]
            }
          ],
          "coverage": "cross-exam",
          "page": 2
        },
        {
          "id": "ayt-geometri-06",
          "title": "Çokgenler",
          "counts": [
            1,
            2,
            1,
            0,
            0,
            0,
            0,
            0
          ],
          "rawCounts": [
            "1",
            "2",
            "1",
            "-",
            "-",
            "-",
            "-",
            "-"
          ],
          "reportedTotal": 4,
          "rawTotal": "4",
          "lessonIds": [
            "mat-tyt-geo-08"
          ],
          "bookSections": [
            {
              "lessonId": "mat-tyt-geo-08",
              "sectionIndex": 0,
              "title": "Çokgenler; dörtgenler ve özellikleri",
              "book": "TYT-mat",
              "pages": [
                139,
                140
              ]
            }
          ],
          "coverage": "cross-exam",
          "page": 2
        },
        {
          "id": "ayt-geometri-07",
          "title": "Noktanın Analitiği",
          "counts": [
            0,
            0,
            1,
            2,
            1,
            1,
            1,
            1
          ],
          "rawCounts": [
            "-",
            "-",
            "1",
            "2",
            "1",
            "1",
            "1",
            "1"
          ],
          "reportedTotal": 7,
          "rawTotal": "7",
          "lessonIds": [
            "mat-ayt-geo-01"
          ],
          "bookSections": [
            {
              "lessonId": "mat-ayt-geo-01",
              "sectionIndex": 0,
              "title": "Analitik düzlem; iki nokta arası uzaklık",
              "book": "AYT-mat",
              "pages": [
                99,
                100
              ]
            },
            {
              "lessonId": "mat-ayt-geo-01",
              "sectionIndex": 1,
              "title": "İçten ve dıştan bölme; orta nokta ve ağırlık merkezi",
              "book": "AYT-mat",
              "pages": [
                101,
                102
              ]
            }
          ],
          "coverage": "grouped",
          "page": 2
        },
        {
          "id": "ayt-geometri-08",
          "title": "Doğrunun Analitiği",
          "counts": [
            2,
            1,
            1,
            2,
            1,
            0,
            3,
            2
          ],
          "rawCounts": [
            "2",
            "1",
            "1",
            "2",
            "1",
            "-",
            "3",
            "2"
          ],
          "reportedTotal": 12,
          "rawTotal": "12",
          "lessonIds": [
            "mat-ayt-geo-01"
          ],
          "bookSections": [
            {
              "lessonId": "mat-ayt-geo-01",
              "sectionIndex": 2,
              "title": "Doğrunun eğimi; özel doğru denklemleri",
              "book": "AYT-mat",
              "pages": [
                103,
                104,
                105
              ]
            },
            {
              "lessonId": "mat-ayt-geo-01",
              "sectionIndex": 3,
              "title": "Doğrunun grafiği, doğruların durumları ve uzaklık",
              "book": "AYT-mat",
              "pages": [
                106,
                107,
                108
              ]
            }
          ],
          "coverage": "grouped",
          "page": 2
        },
        {
          "id": "ayt-geometri-09",
          "title": "Dönüşüm Geometrisi",
          "counts": [
            1,
            1,
            1,
            0,
            1,
            1,
            0,
            1
          ],
          "rawCounts": [
            "1",
            "1",
            "1",
            "-",
            "1",
            "1",
            "-",
            "1"
          ],
          "reportedTotal": 6,
          "rawTotal": "6",
          "lessonIds": [
            "mat-ayt-geo-02"
          ],
          "bookSections": [
            {
              "lessonId": "mat-ayt-geo-02",
              "sectionIndex": 0,
              "title": "Öteleme dönüşümü",
              "book": "AYT-mat",
              "pages": [
                109,
                110
              ]
            },
            {
              "lessonId": "mat-ayt-geo-02",
              "sectionIndex": 1,
              "title": "Dönme dönüşümü",
              "book": "AYT-mat",
              "pages": [
                111
              ]
            },
            {
              "lessonId": "mat-ayt-geo-02",
              "sectionIndex": 2,
              "title": "Simetri dönüşümü",
              "book": "AYT-mat",
              "pages": [
                112,
                113
              ]
            },
            {
              "lessonId": "mat-ayt-geo-02",
              "sectionIndex": 3,
              "title": "Temel dönüşümlerin bileşkesi; doğada ve mimaride dönüşümler",
              "book": "AYT-mat",
              "pages": [
                114
              ]
            }
          ],
          "coverage": "covered",
          "page": 2
        },
        {
          "id": "ayt-geometri-10",
          "title": "Çember ve Daire",
          "counts": [
            1,
            2,
            2,
            3,
            2,
            2,
            2,
            2
          ],
          "rawCounts": [
            "1",
            "2",
            "2",
            "3",
            "2",
            "2",
            "2",
            "2"
          ],
          "reportedTotal": 16,
          "rawTotal": "16",
          "lessonIds": [
            "mat-ayt-geo-03",
            "mat-ayt-geo-04"
          ],
          "bookSections": [
            {
              "lessonId": "mat-ayt-geo-03",
              "sectionIndex": 0,
              "title": "Çember ve daire; çemberin temel elemanları",
              "book": "AYT-mat",
              "pages": [
                115,
                116,
                117
              ]
            },
            {
              "lessonId": "mat-ayt-geo-03",
              "sectionIndex": 1,
              "title": "Çemberde kiriş özellikleri; merkez açı ve çevre açı",
              "book": "AYT-mat",
              "pages": [
                118,
                119
              ]
            },
            {
              "lessonId": "mat-ayt-geo-03",
              "sectionIndex": 2,
              "title": "Çemberde teğet-kiriş açı ve iç-dış açı",
              "book": "AYT-mat",
              "pages": [
                120,
                121
              ]
            },
            {
              "lessonId": "mat-ayt-geo-04",
              "sectionIndex": 0,
              "title": "Çemberde teğet; çevrel, iç teğet ve dış teğet çember",
              "book": "AYT-mat",
              "pages": [
                122,
                123
              ]
            },
            {
              "lessonId": "mat-ayt-geo-04",
              "sectionIndex": 1,
              "title": "Dairenin ve daire diliminin çevresi ve alanı",
              "book": "AYT-mat",
              "pages": [
                124,
                125
              ]
            }
          ],
          "coverage": "grouped",
          "page": 2
        },
        {
          "id": "ayt-geometri-11",
          "title": "Özel Dörtgenler",
          "counts": [
            1,
            0,
            0,
            0,
            0,
            1,
            0,
            0
          ],
          "rawCounts": [
            "1",
            "-",
            "-",
            "-",
            "-",
            "1",
            "-",
            "-"
          ],
          "reportedTotal": 2,
          "rawTotal": "2",
          "lessonIds": [
            "mat-tyt-geo-08",
            "mat-tyt-geo-09",
            "mat-tyt-geo-10"
          ],
          "bookSections": [
            {
              "lessonId": "mat-tyt-geo-08",
              "sectionIndex": 2,
              "title": "Yamuğun alanı; ikizkenar ve dik yamuk",
              "book": "TYT-mat",
              "pages": [
                142,
                143
              ]
            },
            {
              "lessonId": "mat-tyt-geo-09",
              "sectionIndex": 0,
              "title": "Paralelkenarda açı ve uzunluk",
              "book": "TYT-mat",
              "pages": [
                144
              ]
            },
            {
              "lessonId": "mat-tyt-geo-09",
              "sectionIndex": 1,
              "title": "Paralelkenarda alan",
              "book": "TYT-mat",
              "pages": [
                145,
                146
              ]
            },
            {
              "lessonId": "mat-tyt-geo-09",
              "sectionIndex": 2,
              "title": "Eşkenar dörtgen",
              "book": "TYT-mat",
              "pages": [
                147
              ]
            },
            {
              "lessonId": "mat-tyt-geo-10",
              "sectionIndex": 0,
              "title": "Dikdörtgende açı, uzunluk ve alan",
              "book": "TYT-mat",
              "pages": [
                148,
                149
              ]
            },
            {
              "lessonId": "mat-tyt-geo-10",
              "sectionIndex": 1,
              "title": "Kare",
              "book": "TYT-mat",
              "pages": [
                150
              ]
            },
            {
              "lessonId": "mat-tyt-geo-10",
              "sectionIndex": 2,
              "title": "Deltoid",
              "book": "TYT-mat",
              "pages": [
                151
              ]
            }
          ],
          "coverage": "cross-exam",
          "page": 2
        },
        {
          "id": "ayt-geometri-12",
          "title": "Katı Cisimler",
          "counts": [
            1,
            1,
            1,
            1,
            2,
            1,
            1,
            1
          ],
          "rawCounts": [
            "1",
            "1",
            "1",
            "1",
            "2",
            "1",
            "1",
            "1"
          ],
          "reportedTotal": 9,
          "rawTotal": "9",
          "lessonIds": [
            "mat-tyt-geo-11",
            "mat-ayt-geo-06"
          ],
          "bookSections": [
            {
              "lessonId": "mat-tyt-geo-11",
              "sectionIndex": 0,
              "title": "Dik prizmalar; ayrıt ve yüzey sayıları",
              "book": "TYT-mat",
              "pages": [
                152,
                153
              ]
            },
            {
              "lessonId": "mat-tyt-geo-11",
              "sectionIndex": 1,
              "title": "Küp ve küpün açınımları",
              "book": "TYT-mat",
              "pages": [
                154
              ]
            },
            {
              "lessonId": "mat-tyt-geo-11",
              "sectionIndex": 2,
              "title": "Dik piramit; düzgün dört yüzlü ve hacim",
              "book": "TYT-mat",
              "pages": [
                155,
                156
              ]
            },
            {
              "lessonId": "mat-ayt-geo-06",
              "sectionIndex": 0,
              "title": "Dik dairesel silindirde uzunluk ve alan",
              "book": "AYT-mat",
              "pages": [
                131,
                132,
                133
              ]
            },
            {
              "lessonId": "mat-ayt-geo-06",
              "sectionIndex": 1,
              "title": "Silindirin hacmi; dik dairesel konide uzunluk ve alan",
              "book": "AYT-mat",
              "pages": [
                134,
                135
              ]
            },
            {
              "lessonId": "mat-ayt-geo-06",
              "sectionIndex": 2,
              "title": "Dik dairesel konide hacim; kürede uzunluk, alan ve hacim",
              "book": "AYT-mat",
              "pages": [
                136,
                137
              ]
            }
          ],
          "coverage": "cross-exam",
          "page": 2
        },
        {
          "id": "ayt-geometri-13",
          "title": "Çemberin Analitiği",
          "counts": [
            1,
            0,
            0,
            1,
            1,
            1,
            1,
            1
          ],
          "rawCounts": [
            "1",
            "-",
            "-",
            "1",
            "1",
            "1",
            "1",
            "1"
          ],
          "reportedTotal": 6,
          "rawTotal": "6",
          "lessonIds": [
            "mat-ayt-geo-05"
          ],
          "bookSections": [
            {
              "lessonId": "mat-ayt-geo-05",
              "sectionIndex": 0,
              "title": "Çemberin standart denklemi; özel çember denklemleri",
              "book": "AYT-mat",
              "pages": [
                126,
                127,
                128
              ]
            },
            {
              "lessonId": "mat-ayt-geo-05",
              "sectionIndex": 1,
              "title": "Çemberin genel denklemi; çember ile doğrunun durumları",
              "book": "AYT-mat",
              "pages": [
                129,
                130
              ]
            }
          ],
          "coverage": "covered",
          "page": 2
        }
      ],
      "notes": [
        "Bazı ortak ön koşullar farklı sınav etiketi taşıyan mevcut derslere bağlıdır. Eşleşme içerik erişimi içindir; 2027 resmî sınav kapsamı ilanı değildir."
      ],
      "issues": []
    },
    {
      "id": "ayt-fizik",
      "exam": "AYT",
      "subject": "fizik",
      "label": "AYT Fizik",
      "sourceId": "ayt",
      "inScope": true,
      "page": 2,
      "pages": [
        2,
        3
      ],
      "reportedYearTotals": [
        null,
        14,
        14,
        14,
        14,
        14,
        14,
        14
      ],
      "rows": [
        {
          "id": "ayt-fizik-01",
          "title": "Vektörler",
          "counts": [
            null,
            0,
            0,
            0,
            0,
            1,
            0,
            0
          ],
          "rawCounts": [
            "",
            "-",
            "-",
            "-",
            "-",
            "1",
            "-",
            "-"
          ],
          "reportedTotal": 1,
          "rawTotal": "1",
          "lessonIds": [
            "fiz-ayt-01"
          ],
          "bookSections": [
            {
              "lessonId": "fiz-ayt-01",
              "sectionIndex": 0,
              "title": "VEKTÖRLER / EŞİT VE TERS VEKTÖRLER",
              "book": "AYT-fiz",
              "pages": [
                9,
                10
              ]
            },
            {
              "lessonId": "fiz-ayt-01",
              "sectionIndex": 1,
              "title": "VEKTÖRLERİN TOPLANMASI, ÇIKARILMASI VE BİLEŞENLERİ",
              "book": "AYT-fiz",
              "pages": [
                11,
                12,
                13,
                14,
                15
              ]
            }
          ],
          "coverage": "grouped",
          "page": 2
        },
        {
          "id": "ayt-fizik-02",
          "title": "Bağıl Hareket",
          "counts": [
            null,
            1,
            1,
            0,
            0,
            0,
            1,
            0
          ],
          "rawCounts": [
            "",
            "1",
            "1",
            "-",
            "-",
            "-",
            "1",
            "-"
          ],
          "reportedTotal": 3,
          "rawTotal": "3",
          "lessonIds": [
            "fiz-ayt-01"
          ],
          "bookSections": [
            {
              "lessonId": "fiz-ayt-01",
              "sectionIndex": 2,
              "title": "BAĞIL HAREKET / YERE GÖRE HIZ",
              "book": "AYT-fiz",
              "pages": [
                16,
                17
              ]
            },
            {
              "lessonId": "fiz-ayt-01",
              "sectionIndex": 3,
              "title": "NEHİRDE HAREKET / AKINTI HIZI / GRAFİKTEN BAĞIL HIZ",
              "book": "AYT-fiz",
              "pages": [
                18,
                19,
                20
              ]
            }
          ],
          "coverage": "grouped",
          "page": 2
        },
        {
          "id": "ayt-fizik-03",
          "title": "Newton’un Hareket Yasaları",
          "counts": [
            null,
            0,
            2,
            0,
            2,
            1,
            0,
            1
          ],
          "rawCounts": [
            "",
            "-",
            "2",
            "-",
            "2",
            "1",
            "-",
            "1"
          ],
          "reportedTotal": 6,
          "rawTotal": "6",
          "lessonIds": [
            "fiz-ayt-01"
          ],
          "bookSections": [
            {
              "lessonId": "fiz-ayt-01",
              "sectionIndex": 4,
              "title": "NET KUVVETİN HESAPLANMASI / SERBEST CİSİM DİYAGRAMI",
              "book": "AYT-fiz",
              "pages": [
                21,
                22,
                23
              ]
            },
            {
              "lessonId": "fiz-ayt-01",
              "sectionIndex": 5,
              "title": "EĞİK, DÜŞEY VE MAKARALI DÜZENEKLERDE NET KUVVET",
              "book": "AYT-fiz",
              "pages": [
                24,
                25,
                26,
                27,
                28
              ]
            },
            {
              "lessonId": "fiz-ayt-01",
              "sectionIndex": 6,
              "title": "NET KUVVET ETKİSİNDEKİ CİSMİN HAREKETİ: YATAY DÜZLEM",
              "book": "AYT-fiz",
              "pages": [
                29,
                30,
                31
              ]
            },
            {
              "lessonId": "fiz-ayt-01",
              "sectionIndex": 7,
              "title": "EĞİK DÜZLEM, SİSTEMLER VE İVMELİ VAGON",
              "book": "AYT-fiz",
              "pages": [
                32,
                33,
                34,
                35,
                36
              ]
            }
          ],
          "coverage": "grouped",
          "page": 2
        },
        {
          "id": "ayt-fizik-04",
          "title": "Bir Boyutta Sabit İvmeli Hareket",
          "counts": [
            null,
            0,
            0,
            0,
            0,
            1,
            1,
            1
          ],
          "rawCounts": [
            "",
            "-",
            "-",
            "-",
            "-",
            "1",
            "1",
            "1"
          ],
          "reportedTotal": 3,
          "rawTotal": "3",
          "lessonIds": [
            "fiz-ayt-03"
          ],
          "bookSections": [
            {
              "lessonId": "fiz-ayt-03",
              "sectionIndex": 0,
              "title": "BİR BOYUTTA SABİT İVMELİ HAREKET",
              "book": "AYT-fiz",
              "pages": [
                37,
                38,
                39,
                40,
                41
              ]
            },
            {
              "lessonId": "fiz-ayt-03",
              "sectionIndex": 1,
              "title": "KONUM, HIZ VE İVME GRAFİKLERİNİN BİRLİKTE İNCELENMESİ",
              "book": "AYT-fiz",
              "pages": [
                42,
                43,
                44
              ]
            },
            {
              "lessonId": "fiz-ayt-03",
              "sectionIndex": 2,
              "title": "SERBEST DÜŞME / HAVA DİRENÇ KUVVETİ / LİMİT HIZ",
              "book": "AYT-fiz",
              "pages": [
                45,
                46,
                47
              ]
            },
            {
              "lessonId": "fiz-ayt-03",
              "sectionIndex": 3,
              "title": "DÜŞEY DOĞRULTUDA ATIŞ HAREKETİ",
              "book": "AYT-fiz",
              "pages": [
                48,
                49,
                50
              ]
            }
          ],
          "coverage": "grouped",
          "page": 2
        },
        {
          "id": "ayt-fizik-05",
          "title": "İki Boyutta Hareket",
          "counts": [
            null,
            1,
            1,
            2,
            0,
            0,
            0,
            1
          ],
          "rawCounts": [
            "",
            "1",
            "1",
            "2",
            "-",
            "-",
            "-",
            "1"
          ],
          "reportedTotal": 5,
          "rawTotal": "5",
          "lessonIds": [
            "fiz-ayt-03"
          ],
          "bookSections": [
            {
              "lessonId": "fiz-ayt-03",
              "sectionIndex": 4,
              "title": "YATAY ATIŞ HAREKETİ",
              "book": "AYT-fiz",
              "pages": [
                51,
                52,
                53
              ]
            },
            {
              "lessonId": "fiz-ayt-03",
              "sectionIndex": 5,
              "title": "YUKARI VE AŞAĞI YÖNDE EĞİK ATIŞ",
              "book": "AYT-fiz",
              "pages": [
                54,
                55,
                56
              ]
            }
          ],
          "coverage": "grouped",
          "page": 2
        },
        {
          "id": "ayt-fizik-06",
          "title": "Enerji ve Hareket",
          "counts": [
            null,
            0,
            1,
            0,
            0,
            0,
            0,
            1
          ],
          "rawCounts": [
            "",
            "-",
            "1",
            "-",
            "-",
            "-",
            "-",
            "1"
          ],
          "reportedTotal": 2,
          "rawTotal": "2",
          "lessonIds": [
            "fiz-ayt-02"
          ],
          "bookSections": [
            {
              "lessonId": "fiz-ayt-02",
              "sectionIndex": 0,
              "title": "İŞ VE ENERJİ / HANGİ KUVVETLER İŞ YAPMAZ?",
              "book": "AYT-fiz",
              "pages": [
                57,
                58,
                59
              ]
            },
            {
              "lessonId": "fiz-ayt-02",
              "sectionIndex": 1,
              "title": "DEĞİŞKEN KUVVET / KUVVET–KONUM GRAFİĞİ / HOOKE YASASI",
              "book": "AYT-fiz",
              "pages": [
                60,
                61,
                62,
                63,
                64
              ]
            },
            {
              "lessonId": "fiz-ayt-02",
              "sectionIndex": 2,
              "title": "MEKANİK ENERJİ VE KORUNUMU / YAYLARDA ENERJİ",
              "book": "AYT-fiz",
              "pages": [
                65,
                66,
                67,
                68,
                69
              ]
            }
          ],
          "coverage": "grouped",
          "page": 2
        },
        {
          "id": "ayt-fizik-07",
          "title": "İtme ve Çizgisel Momentum",
          "counts": [
            null,
            1,
            1,
            0,
            1,
            1,
            1,
            0
          ],
          "rawCounts": [
            "",
            "1",
            "1",
            "-",
            "1",
            "1",
            "1",
            "-"
          ],
          "reportedTotal": 5,
          "rawTotal": "5",
          "lessonIds": [
            "fiz-ayt-02"
          ],
          "bookSections": [
            {
              "lessonId": "fiz-ayt-02",
              "sectionIndex": 3,
              "title": "İTME VE ÇİZGİSEL MOMENTUM / KUVVET–ZAMAN GRAFİĞİ",
              "book": "AYT-fiz",
              "pages": [
                70,
                71,
                72
              ]
            },
            {
              "lessonId": "fiz-ayt-02",
              "sectionIndex": 4,
              "title": "BİR BOYUTTA ÇARPIŞMALAR / İÇ PATLAMA",
              "book": "AYT-fiz",
              "pages": [
                73,
                74,
                75
              ]
            },
            {
              "lessonId": "fiz-ayt-02",
              "sectionIndex": 5,
              "title": "İKİ BOYUTTA ÇARPIŞMALAR VE PATLAMALAR",
              "book": "AYT-fiz",
              "pages": [
                76,
                77,
                78,
                79
              ]
            }
          ],
          "coverage": "grouped",
          "page": 2
        },
        {
          "id": "ayt-fizik-08",
          "title": "Tork",
          "counts": [
            null,
            0,
            0,
            0,
            0,
            1,
            0,
            0
          ],
          "rawCounts": [
            "",
            "-",
            "-",
            "-",
            "-",
            "1",
            "-",
            "-"
          ],
          "reportedTotal": 1,
          "rawTotal": "1",
          "lessonIds": [
            "fiz-ayt-01"
          ],
          "bookSections": [
            {
              "lessonId": "fiz-ayt-01",
              "sectionIndex": 8,
              "title": "TORK / KUVVET KOLU / BİLEŞENLERLE TORK",
              "book": "AYT-fiz",
              "pages": [
                80,
                81,
                82
              ]
            },
            {
              "lessonId": "fiz-ayt-01",
              "sectionIndex": 9,
              "title": "TOPLAM TORK / LEVHANIN DENGELENMESİ",
              "book": "AYT-fiz",
              "pages": [
                83,
                84
              ]
            }
          ],
          "coverage": "grouped",
          "page": 2
        },
        {
          "id": "ayt-fizik-09",
          "title": "Denge ve Denge Şartları",
          "counts": [
            null,
            1,
            0,
            1,
            0,
            0,
            0,
            0
          ],
          "rawCounts": [
            "",
            "1",
            "-",
            "1",
            "-",
            "-",
            "-",
            "-"
          ],
          "reportedTotal": 2,
          "rawTotal": "2",
          "lessonIds": [
            "fiz-ayt-01"
          ],
          "bookSections": [
            {
              "lessonId": "fiz-ayt-01",
              "sectionIndex": 10,
              "title": "DENGE VE DENGE ŞARTLARI",
              "book": "AYT-fiz",
              "pages": [
                85,
                86,
                87,
                88,
                89
              ]
            },
            {
              "lessonId": "fiz-ayt-01",
              "sectionIndex": 11,
              "title": "KÜTLE VE AĞIRLIK MERKEZİ",
              "book": "AYT-fiz",
              "pages": [
                90,
                91,
                92,
                93,
                94
              ]
            }
          ],
          "coverage": "grouped",
          "page": 2
        },
        {
          "id": "ayt-fizik-10",
          "title": "Basit Makineler",
          "counts": [
            null,
            0,
            0,
            0,
            1,
            0,
            1,
            0
          ],
          "rawCounts": [
            "",
            "-",
            "-",
            "-",
            "1",
            "-",
            "1",
            "-"
          ],
          "reportedTotal": 2,
          "rawTotal": "2",
          "lessonIds": [
            "fiz-ayt-01"
          ],
          "bookSections": [
            {
              "lessonId": "fiz-ayt-01",
              "sectionIndex": 12,
              "title": "BASİT MAKİNELER / KALDIRAÇLAR / MAKARALAR",
              "book": "AYT-fiz",
              "pages": [
                95,
                96,
                97
              ]
            },
            {
              "lessonId": "fiz-ayt-01",
              "sectionIndex": 13,
              "title": "PALANGA / EĞİK DÜZLEM / DİŞLİ VE KASNAK / VİDA / ÇIKRIK / VERİM",
              "book": "AYT-fiz",
              "pages": [
                98,
                99,
                100
              ]
            }
          ],
          "coverage": "grouped",
          "page": 2
        },
        {
          "id": "ayt-fizik-11",
          "title": "Elektriksel Kuvvet ve Elektrik Alan",
          "counts": [
            null,
            0,
            0,
            1,
            0,
            0,
            0,
            0
          ],
          "rawCounts": [
            "",
            "-",
            "-",
            "1",
            "-",
            "-",
            "-",
            "-"
          ],
          "reportedTotal": 1,
          "rawTotal": "1",
          "lessonIds": [
            "fiz-ayt-06"
          ],
          "bookSections": [
            {
              "lessonId": "fiz-ayt-06",
              "sectionIndex": 0,
              "title": "ELEKTRİKSEL KUVVET / COULOMB KUVVETİNİN ETKİLERİ",
              "book": "AYT-fiz",
              "pages": [
                101,
                102
              ]
            },
            {
              "lessonId": "fiz-ayt-06",
              "sectionIndex": 1,
              "title": "ELEKTRİK ALAN / BİLEŞKE ALAN / ALAN ÇİZGİLERİ",
              "book": "AYT-fiz",
              "pages": [
                103,
                104
              ]
            }
          ],
          "coverage": "grouped",
          "page": 2
        },
        {
          "id": "ayt-fizik-12",
          "title": "Elektriksel Potansiyel",
          "counts": [
            null,
            1,
            0,
            1,
            0,
            0,
            1,
            1
          ],
          "rawCounts": [
            "",
            "1",
            "-",
            "1",
            "-",
            "-",
            "1",
            "1"
          ],
          "reportedTotal": 4,
          "rawTotal": "4",
          "lessonIds": [
            "fiz-ayt-06"
          ],
          "bookSections": [
            {
              "lessonId": "fiz-ayt-06",
              "sectionIndex": 2,
              "title": "NOKTASAL YÜKLERDE ELEKTRİKSEL POTANSİYEL ENERJİ",
              "book": "AYT-fiz",
              "pages": [
                105
              ]
            },
            {
              "lessonId": "fiz-ayt-06",
              "sectionIndex": 3,
              "title": "TOPLAM POTANSİYEL ENERJİ / BİR NOKTANIN ELEKTRİK POTANSİYELİ",
              "book": "AYT-fiz",
              "pages": [
                106
              ]
            },
            {
              "lessonId": "fiz-ayt-06",
              "sectionIndex": 4,
              "title": "EŞ POTANSİYEL YÜZEYLER / POTANSİYEL FARK VE ELEKTRİKSEL İŞ",
              "book": "AYT-fiz",
              "pages": [
                107,
                108,
                109
              ]
            }
          ],
          "coverage": "grouped",
          "page": 3
        },
        {
          "id": "ayt-fizik-13",
          "title": "Düzgün Elektrik Alan ve Sığa",
          "counts": [
            null,
            0,
            1,
            0,
            0,
            1,
            0,
            0
          ],
          "rawCounts": [
            "",
            "-",
            "1",
            "-",
            "-",
            "1",
            "-",
            "-"
          ],
          "reportedTotal": 2,
          "rawTotal": "2",
          "lessonIds": [
            "fiz-ayt-06",
            "fiz-ayt-07"
          ],
          "bookSections": [
            {
              "lessonId": "fiz-ayt-06",
              "sectionIndex": 5,
              "title": "DÜZGÜN ELEKTRİK ALAN / YÜKLÜ PARÇACIĞIN HAREKETİ VE DENGESİ",
              "book": "AYT-fiz",
              "pages": [
                110,
                111,
                112
              ]
            },
            {
              "lessonId": "fiz-ayt-07",
              "sectionIndex": 0,
              "title": "SIĞA KAVRAMI VE SIĞAÇLAR",
              "book": "AYT-fiz",
              "pages": [
                113,
                114
              ]
            },
            {
              "lessonId": "fiz-ayt-07",
              "sectionIndex": 1,
              "title": "SIĞAÇTA YÜK DEĞİŞİMİ / SIĞACIN ÜRETEÇ GİBİ DAVRANMASI",
              "book": "AYT-fiz",
              "pages": [
                115
              ]
            }
          ],
          "coverage": "grouped",
          "page": 3
        },
        {
          "id": "ayt-fizik-14",
          "title": "Manyetizma ve Elektromanyetik İndüklenme",
          "counts": [
            null,
            1,
            1,
            1,
            1,
            1,
            1,
            1
          ],
          "rawCounts": [
            "",
            "1",
            "1",
            "1",
            "1",
            "1",
            "1",
            "1"
          ],
          "reportedTotal": 7,
          "rawTotal": "7",
          "lessonIds": [
            "fiz-ayt-07"
          ],
          "bookSections": [
            {
              "lessonId": "fiz-ayt-07",
              "sectionIndex": 2,
              "title": "MANYETİK ALAN: DÜZ TEL, ÇEMBER TEL VE BOBİN",
              "book": "AYT-fiz",
              "pages": [
                116,
                117,
                118,
                119
              ]
            },
            {
              "lessonId": "fiz-ayt-07",
              "sectionIndex": 3,
              "title": "AKIM GEÇEN TELE MANYETİK KUVVET / PARALEL TELLER / DÖNDÜRÜCÜ ETKİ",
              "book": "AYT-fiz",
              "pages": [
                120,
                121
              ]
            },
            {
              "lessonId": "fiz-ayt-07",
              "sectionIndex": 4,
              "title": "MANYETİK ALAN İÇİNDEKİ YÜKLÜ TANECİĞİN HAREKETİ",
              "book": "AYT-fiz",
              "pages": [
                122,
                123
              ]
            },
            {
              "lessonId": "fiz-ayt-07",
              "sectionIndex": 5,
              "title": "MANYETİK AKI / FARADAY VE LENZ KANUNLARI",
              "book": "AYT-fiz",
              "pages": [
                124,
                125
              ]
            },
            {
              "lessonId": "fiz-ayt-07",
              "sectionIndex": 6,
              "title": "ÖZ İNDÜKSİYON / HAREKETLİ VE DÖNEN TELDE EMK",
              "book": "AYT-fiz",
              "pages": [
                126,
                127
              ]
            },
            {
              "lessonId": "fiz-ayt-07",
              "sectionIndex": 7,
              "title": "İNDÜKSİYON AKIMI OLUŞTURMA / İNDÜKSİYON AKIMININ YÖNÜ",
              "book": "AYT-fiz",
              "pages": [
                128,
                129
              ]
            }
          ],
          "coverage": "grouped",
          "page": 3
        },
        {
          "id": "ayt-fizik-15",
          "title": "Alternatif Akım",
          "counts": [
            null,
            1,
            1,
            0,
            0,
            1,
            1,
            1
          ],
          "rawCounts": [
            "",
            "1",
            "1",
            "-",
            "-",
            "1",
            "1",
            "1"
          ],
          "reportedTotal": 5,
          "rawTotal": "5",
          "lessonIds": [
            "fiz-ayt-08"
          ],
          "bookSections": [
            {
              "lessonId": "fiz-ayt-08",
              "sectionIndex": 0,
              "title": "Alternatif akımın oluşumu",
              "book": "AYT-fiz",
              "pages": [
                130
              ]
            },
            {
              "lessonId": "fiz-ayt-08",
              "sectionIndex": 1,
              "title": "Etkin değer ve ohmik direnç",
              "book": "AYT-fiz",
              "pages": [
                131
              ]
            },
            {
              "lessonId": "fiz-ayt-08",
              "sectionIndex": 2,
              "title": "Bobin, indüktans ve indüktif reaktans",
              "book": "AYT-fiz",
              "pages": [
                132
              ]
            },
            {
              "lessonId": "fiz-ayt-08",
              "sectionIndex": 3,
              "title": "Sığaç, kapasitans ve kapasitif reaktans",
              "book": "AYT-fiz",
              "pages": [
                133
              ]
            },
            {
              "lessonId": "fiz-ayt-08",
              "sectionIndex": 4,
              "title": "Empedans ve rezonans",
              "book": "AYT-fiz",
              "pages": [
                134
              ]
            }
          ],
          "coverage": "grouped",
          "page": 3
        },
        {
          "id": "ayt-fizik-16",
          "title": "Transformatörler",
          "counts": [
            null,
            0,
            0,
            1,
            1,
            1,
            0,
            0
          ],
          "rawCounts": [
            "",
            "-",
            "-",
            "1",
            "1",
            "1",
            "-",
            "-"
          ],
          "reportedTotal": 3,
          "rawTotal": "3",
          "lessonIds": [
            "fiz-ayt-08"
          ],
          "bookSections": [
            {
              "lessonId": "fiz-ayt-08",
              "sectionIndex": 5,
              "title": "Transformatörler, güç ve verim",
              "book": "AYT-fiz",
              "pages": [
                135,
                136
              ]
            }
          ],
          "coverage": "grouped",
          "page": 3
        },
        {
          "id": "ayt-fizik-17",
          "title": "Düzgün Çembersel Hareket",
          "counts": [
            null,
            1,
            2,
            1,
            1,
            1,
            1,
            1
          ],
          "rawCounts": [
            "",
            "1",
            "2",
            "1",
            "1",
            "1",
            "1",
            "1"
          ],
          "reportedTotal": 8,
          "rawTotal": "8",
          "lessonIds": [
            "fiz-ayt-03"
          ],
          "bookSections": [
            {
              "lessonId": "fiz-ayt-03",
              "sectionIndex": 6,
              "title": "DÜZGÜN ÇEMBERSEL HAREKET: PERİYOT, FREKANS VE HIZ",
              "book": "AYT-fiz",
              "pages": [
                137,
                138,
                139,
                140,
                141
              ]
            },
            {
              "lessonId": "fiz-ayt-03",
              "sectionIndex": 7,
              "title": "AÇISAL HIZIN YÖNÜ / MERKEZCİL İVME",
              "book": "AYT-fiz",
              "pages": [
                142,
                143
              ]
            },
            {
              "lessonId": "fiz-ayt-03",
              "sectionIndex": 8,
              "title": "MERKEZCİL KUVVET / YATAY DÜZLEMDE HAREKET",
              "book": "AYT-fiz",
              "pages": [
                144,
                145,
                146,
                147,
                148
              ]
            },
            {
              "lessonId": "fiz-ayt-03",
              "sectionIndex": 9,
              "title": "DÜŞEY DÜZLEMDE ÇEMBERSEL HAREKET",
              "book": "AYT-fiz",
              "pages": [
                149,
                150
              ]
            },
            {
              "lessonId": "fiz-ayt-03",
              "sectionIndex": 10,
              "title": "VİRAJLARDA DÖNÜŞ / EĞİMLİ VİRAJ",
              "book": "AYT-fiz",
              "pages": [
                151,
                152,
                153
              ]
            }
          ],
          "coverage": "grouped",
          "page": 3
        },
        {
          "id": "ayt-fizik-18",
          "title": "Dönerek Öteleme Hareketi",
          "counts": [
            null,
            0,
            1,
            0,
            0,
            1,
            0,
            0
          ],
          "rawCounts": [
            "",
            "-",
            "1",
            "-",
            "-",
            "1",
            "-",
            "-"
          ],
          "reportedTotal": 2,
          "rawTotal": "2",
          "lessonIds": [
            "fiz-ayt-03"
          ],
          "bookSections": [
            {
              "lessonId": "fiz-ayt-03",
              "sectionIndex": 11,
              "title": "ÖTELEME, DÖNME VE KAYMADAN YUVARLANMA",
              "book": "AYT-fiz",
              "pages": [
                154,
                155,
                156
              ]
            },
            {
              "lessonId": "fiz-ayt-03",
              "sectionIndex": 12,
              "title": "EYLEMSİZLİK MOMENTİ / DÖNME KİNETİK ENERJİSİ",
              "book": "AYT-fiz",
              "pages": [
                157,
                158,
                159,
                160
              ]
            }
          ],
          "coverage": "grouped",
          "page": 3
        },
        {
          "id": "ayt-fizik-19",
          "title": "Açısal Momentum",
          "counts": [
            null,
            1,
            0,
            0,
            0,
            0,
            0,
            0
          ],
          "rawCounts": [
            "",
            "1",
            "-",
            "-",
            "-",
            "-",
            "-",
            "-"
          ],
          "reportedTotal": 1,
          "rawTotal": "1",
          "lessonIds": [
            "fiz-ayt-03"
          ],
          "bookSections": [
            {
              "lessonId": "fiz-ayt-03",
              "sectionIndex": 13,
              "title": "AÇISAL MOMENTUM / TEĞETSEL İVME / KORUNUM VE PRESESYON",
              "book": "AYT-fiz",
              "pages": [
                161,
                162,
                163,
                164,
                165
              ]
            }
          ],
          "coverage": "grouped",
          "page": 3
        },
        {
          "id": "ayt-fizik-20",
          "title": "Kütle Çekim Kuvveti",
          "counts": [
            null,
            0,
            0,
            1,
            0,
            0,
            1,
            0
          ],
          "rawCounts": [
            "",
            "-",
            "-",
            "1",
            "-",
            "-",
            "1",
            "-"
          ],
          "reportedTotal": 2,
          "rawTotal": "2",
          "lessonIds": [
            "fiz-ayt-05"
          ],
          "bookSections": [
            {
              "lessonId": "fiz-ayt-05",
              "sectionIndex": 0,
              "title": "KÜTLE ÇEKİM KUVVETİ NELERE BAĞLIDIR?",
              "book": "AYT-fiz",
              "pages": [
                166,
                167
              ]
            },
            {
              "lessonId": "fiz-ayt-05",
              "sectionIndex": 1,
              "title": "UYDUNUN DOLANMA SÜRATİ VE PERİYODU",
              "book": "AYT-fiz",
              "pages": [
                168
              ]
            },
            {
              "lessonId": "fiz-ayt-05",
              "sectionIndex": 2,
              "title": "KÜTLE ÇEKİM İVMESİNİN UZAKLIĞA BAĞLI DEĞİŞİMİ",
              "book": "AYT-fiz",
              "pages": [
                169
              ]
            },
            {
              "lessonId": "fiz-ayt-05",
              "sectionIndex": 3,
              "title": "KÜTLE ÇEKİM POTANSİYEL ENERJİSİ / BAĞLI YÖRÜNGE",
              "book": "AYT-fiz",
              "pages": [
                170
              ]
            },
            {
              "lessonId": "fiz-ayt-05",
              "sectionIndex": 4,
              "title": "KURTULMA ENERJİSİ / GÖK CİSİMLERİ ÜZERİNE ÇALIŞMALAR",
              "book": "AYT-fiz",
              "pages": [
                171,
                172
              ]
            }
          ],
          "coverage": "grouped",
          "page": 3
        },
        {
          "id": "ayt-fizik-21",
          "title": "Kepler Kanunları",
          "counts": [
            null,
            0,
            0,
            0,
            1,
            1,
            0,
            1
          ],
          "rawCounts": [
            "",
            "-",
            "-",
            "-",
            "1",
            "1",
            "-",
            "1"
          ],
          "reportedTotal": 3,
          "rawTotal": "3",
          "lessonIds": [
            "fiz-ayt-05"
          ],
          "bookSections": [
            {
              "lessonId": "fiz-ayt-05",
              "sectionIndex": 5,
              "title": "KEPLER’İN YÖRÜNGELER, ALANLAR VE PERİYOTLAR KANUNLARI",
              "book": "AYT-fiz",
              "pages": [
                173,
                174
              ]
            }
          ],
          "coverage": "grouped",
          "page": 3
        },
        {
          "id": "ayt-fizik-22",
          "title": "Basit Harmonik Hareket",
          "counts": [
            null,
            1,
            1,
            1,
            1,
            1,
            1,
            1
          ],
          "rawCounts": [
            "",
            "1",
            "1",
            "1",
            "1",
            "1",
            "1",
            "1"
          ],
          "reportedTotal": 7,
          "rawTotal": "7",
          "lessonIds": [
            "fiz-ayt-04"
          ],
          "bookSections": [
            {
              "lessonId": "fiz-ayt-04",
              "sectionIndex": 0,
              "title": "BASİT HARMONİK HAREKET / GERİ ÇAĞIRICI KUVVET",
              "book": "AYT-fiz",
              "pages": [
                175,
                176
              ]
            },
            {
              "lessonId": "fiz-ayt-04",
              "sectionIndex": 1,
              "title": "UZANIM, PERİYOT, FREKANS, GENLİK VE ZAMAN PARÇALARI",
              "book": "AYT-fiz",
              "pages": [
                177,
                178
              ]
            },
            {
              "lessonId": "fiz-ayt-04",
              "sectionIndex": 2,
              "title": "KONUMUN ZAMANA GÖRE DEĞİŞİMİ / HIZ DENKLEMİ",
              "book": "AYT-fiz",
              "pages": [
                179,
                180
              ]
            },
            {
              "lessonId": "fiz-ayt-04",
              "sectionIndex": 3,
              "title": "KUVVET VE İVMENİN UZANIMA BAĞLI DEĞİŞİMİ",
              "book": "AYT-fiz",
              "pages": [
                181
              ]
            },
            {
              "lessonId": "fiz-ayt-04",
              "sectionIndex": 4,
              "title": "YAY SARKACINDA PERİYOT / YAYLARIN BAĞLANMASI",
              "book": "AYT-fiz",
              "pages": [
                182,
                183
              ]
            },
            {
              "lessonId": "fiz-ayt-04",
              "sectionIndex": 5,
              "title": "PARALEL YAYLAR / BASİT SARKAÇ",
              "book": "AYT-fiz",
              "pages": [
                184
              ]
            }
          ],
          "coverage": "covered",
          "page": 3
        },
        {
          "id": "ayt-fizik-23",
          "title": "Dalgalarda Kırınım, Girişim ve Doppler",
          "counts": [
            null,
            0,
            1,
            1,
            1,
            1,
            1,
            1
          ],
          "rawCounts": [
            "",
            "-",
            "1",
            "1",
            "1",
            "1",
            "1",
            "1"
          ],
          "reportedTotal": 6,
          "rawTotal": "6",
          "lessonIds": [
            "fiz-ayt-09"
          ],
          "bookSections": [
            {
              "lessonId": "fiz-ayt-09",
              "sectionIndex": 0,
              "title": "Su dalgalarında kırınım",
              "book": "AYT-fiz",
              "pages": [
                185,
                186
              ]
            },
            {
              "lessonId": "fiz-ayt-09",
              "sectionIndex": 1,
              "title": "Su dalgalarında katar ve düğüm çizgileri",
              "book": "AYT-fiz",
              "pages": [
                187,
                188,
                189
              ]
            },
            {
              "lessonId": "fiz-ayt-09",
              "sectionIndex": 2,
              "title": "Young deneyi ve çift yarıkta saçak oluşumu",
              "book": "AYT-fiz",
              "pages": [
                190,
                191
              ]
            },
            {
              "lessonId": "fiz-ayt-09",
              "sectionIndex": 3,
              "title": "Çift yarıkta renk, kaynak ve saydam levha etkisi",
              "book": "AYT-fiz",
              "pages": [
                192,
                193
              ]
            },
            {
              "lessonId": "fiz-ayt-09",
              "sectionIndex": 4,
              "title": "Tek yarıkta kırınım ve merkezî aydınlık",
              "book": "AYT-fiz",
              "pages": [
                194,
                195,
                196
              ]
            },
            {
              "lessonId": "fiz-ayt-09",
              "sectionIndex": 5,
              "title": "Işığın dalga doğası ve Doppler olayı",
              "book": "AYT-fiz",
              "pages": [
                197,
                198,
                199
              ]
            }
          ],
          "coverage": "grouped",
          "page": 3
        },
        {
          "id": "ayt-fizik-24",
          "title": "Elektromanyetik Dalgalar",
          "counts": [
            null,
            1,
            0,
            0,
            0,
            0,
            0,
            1
          ],
          "rawCounts": [
            "",
            "1",
            "-",
            "-",
            "-",
            "-",
            "-",
            "1"
          ],
          "reportedTotal": 2,
          "rawTotal": "2",
          "lessonIds": [
            "fiz-ayt-09"
          ],
          "bookSections": [
            {
              "lessonId": "fiz-ayt-09",
              "sectionIndex": 6,
              "title": "Elektromanyetik dalgaların oluşumu ve ortak özellikleri",
              "book": "AYT-fiz",
              "pages": [
                200,
                201,
                202,
                203
              ]
            },
            {
              "lessonId": "fiz-ayt-09",
              "sectionIndex": 7,
              "title": "Ortam, kutuplanma ve elektromanyetik spektrum",
              "book": "AYT-fiz",
              "pages": [
                204,
                205,
                206,
                207
              ]
            }
          ],
          "coverage": "grouped",
          "page": 3
        },
        {
          "id": "ayt-fizik-25",
          "title": "Atom Kavramının Tarihsel Gelişimi",
          "counts": [
            null,
            0,
            0,
            0,
            0,
            0,
            0,
            0
          ],
          "rawCounts": [
            "",
            "-",
            "-",
            "-",
            "-",
            "-",
            "-",
            "-"
          ],
          "reportedTotal": null,
          "rawTotal": "-",
          "lessonIds": [
            "fiz-ayt-10"
          ],
          "bookSections": [
            {
              "lessonId": "fiz-ayt-10",
              "sectionIndex": 0,
              "title": "Atom kavramı ve deneylerle değişen modeller",
              "book": "AYT-fiz",
              "pages": [
                208,
                209,
                210,
                211
              ]
            },
            {
              "lessonId": "fiz-ayt-10",
              "sectionIndex": 1,
              "title": "Bohr düzeyleri, yarıçap ve iyonlaşma enerjisi",
              "book": "AYT-fiz",
              "pages": [
                212,
                213,
                214,
                215
              ]
            },
            {
              "lessonId": "fiz-ayt-10",
              "sectionIndex": 2,
              "title": "Atomların ısı, çarpışma ve fotonla uyarılması",
              "book": "AYT-fiz",
              "pages": [
                216,
                217,
                218,
                219
              ]
            },
            {
              "lessonId": "fiz-ayt-10",
              "sectionIndex": 3,
              "title": "Işıma serileri ve modern atom teorisi",
              "book": "AYT-fiz",
              "pages": [
                220,
                221,
                222,
                223
              ]
            }
          ],
          "coverage": "grouped",
          "page": 3
        },
        {
          "id": "ayt-fizik-26",
          "title": "Büyük Patlama ve Evrenin Oluşumu",
          "counts": [
            null,
            0,
            0,
            0,
            1,
            0,
            0,
            1
          ],
          "rawCounts": [
            "",
            "-",
            "-",
            "-",
            "1",
            "-",
            "-",
            "1"
          ],
          "reportedTotal": 2,
          "rawTotal": "2",
          "lessonIds": [
            "fiz-ayt-10"
          ],
          "bookSections": [
            {
              "lessonId": "fiz-ayt-10",
              "sectionIndex": 4,
              "title": "Büyük Patlama, genişleme ve kozmik art alan",
              "book": "AYT-fiz",
              "pages": [
                224,
                225,
                226,
                227
              ]
            },
            {
              "lessonId": "fiz-ayt-10",
              "sectionIndex": 5,
              "title": "Dört temel etkileşim, bozonlar, leptonlar ve kuarklar",
              "book": "AYT-fiz",
              "pages": [
                228,
                229,
                230,
                231
              ]
            },
            {
              "lessonId": "fiz-ayt-10",
              "sectionIndex": 6,
              "title": "Hadronlar, Higgs ve madde–antimadde",
              "book": "AYT-fiz",
              "pages": [
                232,
                233,
                234
              ]
            }
          ],
          "coverage": "grouped",
          "page": 3
        },
        {
          "id": "ayt-fizik-27",
          "title": "Radyoaktivite",
          "counts": [
            null,
            1,
            0,
            1,
            0,
            0,
            1,
            0
          ],
          "rawCounts": [
            "",
            "1",
            "-",
            "1",
            "-",
            "-",
            "1",
            "-"
          ],
          "reportedTotal": 3,
          "rawTotal": "3",
          "lessonIds": [
            "fiz-ayt-10"
          ],
          "bookSections": [
            {
              "lessonId": "fiz-ayt-10",
              "sectionIndex": 7,
              "title": "Kararlı çekirdekler, alfa ve beta bozunmaları",
              "book": "AYT-fiz",
              "pages": [
                235,
                236,
                237
              ]
            },
            {
              "lessonId": "fiz-ayt-10",
              "sectionIndex": 8,
              "title": "Fisyon, füzyon, enerji sistemleri ve radyasyon",
              "book": "AYT-fiz",
              "pages": [
                238,
                239,
                240,
                241
              ]
            }
          ],
          "coverage": "grouped",
          "page": 3
        },
        {
          "id": "ayt-fizik-28",
          "title": "Özel Görelilik",
          "counts": [
            null,
            0,
            0,
            0,
            1,
            0,
            0,
            0
          ],
          "rawCounts": [
            "",
            "-",
            "-",
            "-",
            "1",
            "-",
            "-",
            "-"
          ],
          "reportedTotal": 1,
          "rawTotal": "1",
          "lessonIds": [
            "fiz-ayt-10"
          ],
          "bookSections": [
            {
              "lessonId": "fiz-ayt-10",
              "sectionIndex": 9,
              "title": "Özel görelilik, zaman ve uzunluk",
              "book": "AYT-fiz",
              "pages": [
                242,
                243,
                244,
                245
              ]
            }
          ],
          "coverage": "grouped",
          "page": 3
        },
        {
          "id": "ayt-fizik-29",
          "title": "Kuantum Fiziğine Giriş",
          "counts": [
            null,
            0,
            0,
            0,
            0,
            0,
            0,
            0
          ],
          "rawCounts": [
            "",
            "-",
            "-",
            "-",
            "-",
            "-",
            "-",
            "-"
          ],
          "reportedTotal": null,
          "rawTotal": "-",
          "lessonIds": [
            "fiz-ayt-10"
          ],
          "bookSections": [
            {
              "lessonId": "fiz-ayt-10",
              "sectionIndex": 10,
              "title": "Siyah cisim ışıması ve Planck hipotezi",
              "book": "AYT-fiz",
              "pages": [
                246,
                247,
                248
              ]
            }
          ],
          "coverage": "grouped",
          "page": 3
        },
        {
          "id": "ayt-fizik-30",
          "title": "Fotoelektrik Olayı",
          "counts": [
            null,
            1,
            0,
            1,
            0,
            0,
            1,
            0
          ],
          "rawCounts": [
            "",
            "1",
            "-",
            "1",
            "-",
            "-",
            "1",
            "-"
          ],
          "reportedTotal": 3,
          "rawTotal": "3",
          "lessonIds": [
            "fiz-ayt-10"
          ],
          "bookSections": [
            {
              "lessonId": "fiz-ayt-10",
              "sectionIndex": 11,
              "title": "Foton, eşik enerji ve fotoelektrik denklemi",
              "book": "AYT-fiz",
              "pages": [
                249,
                250,
                251
              ]
            },
            {
              "lessonId": "fiz-ayt-10",
              "sectionIndex": 12,
              "title": "Fotoelektrik grafikleri ve fotoselde akım",
              "book": "AYT-fiz",
              "pages": [
                252,
                253,
                254
              ]
            },
            {
              "lessonId": "fiz-ayt-10",
              "sectionIndex": 13,
              "title": "Kesme gerilimi ve akım–gerilim yorumları",
              "book": "AYT-fiz",
              "pages": [
                255,
                256,
                257
              ]
            }
          ],
          "coverage": "grouped",
          "page": 3
        },
        {
          "id": "ayt-fizik-31",
          "title": "Compton Saçılması ve De Broglie",
          "counts": [
            null,
            0,
            0,
            0,
            1,
            0,
            0,
            0
          ],
          "rawCounts": [
            "",
            "-",
            "-",
            "-",
            "1",
            "-",
            "-",
            "-"
          ],
          "reportedTotal": 1,
          "rawTotal": "1",
          "lessonIds": [
            "fiz-ayt-10"
          ],
          "bookSections": [
            {
              "lessonId": "fiz-ayt-10",
              "sectionIndex": 14,
              "title": "Compton saçılması ve de Broglie dalga boyu",
              "book": "AYT-fiz",
              "pages": [
                258,
                259,
                260
              ]
            }
          ],
          "coverage": "grouped",
          "page": 3
        },
        {
          "id": "ayt-fizik-32",
          "title": "Görüntüleme Teknolojileri",
          "counts": [
            null,
            1,
            0,
            0,
            1,
            0,
            0,
            1
          ],
          "rawCounts": [
            "",
            "1",
            "-",
            "-",
            "1",
            "-",
            "-",
            "1"
          ],
          "reportedTotal": 3,
          "rawTotal": "3",
          "lessonIds": [
            "fiz-ayt-10"
          ],
          "bookSections": [
            {
              "lessonId": "fiz-ayt-10",
              "sectionIndex": 15,
              "title": "Görüntüleme cihazları, LCD ve plazma",
              "book": "AYT-fiz",
              "pages": [
                261,
                262,
                263,
                264
              ]
            }
          ],
          "coverage": "grouped",
          "page": 3
        },
        {
          "id": "ayt-fizik-33",
          "title": "Yarı İletken Teknolojisi",
          "counts": [
            null,
            0,
            0,
            0,
            0,
            0,
            0,
            0
          ],
          "rawCounts": [
            "",
            "-",
            "-",
            "-",
            "-",
            "-",
            "-",
            "-"
          ],
          "reportedTotal": null,
          "rawTotal": "-",
          "lessonIds": [
            "fiz-ayt-10"
          ],
          "bookSections": [
            {
              "lessonId": "fiz-ayt-10",
              "sectionIndex": 16,
              "title": "Yarı iletkenler, diyot, transistör, LED ve güneş pili",
              "book": "AYT-fiz",
              "pages": [
                265,
                266,
                267,
                268
              ]
            }
          ],
          "coverage": "grouped",
          "page": 3
        },
        {
          "id": "ayt-fizik-34",
          "title": "Süper İletkenler",
          "counts": [
            null,
            0,
            0,
            0,
            0,
            0,
            1,
            0
          ],
          "rawCounts": [
            "",
            "-",
            "-",
            "-",
            "-",
            "-",
            "1",
            "-"
          ],
          "reportedTotal": 1,
          "rawTotal": "1",
          "lessonIds": [
            "fiz-ayt-10"
          ],
          "bookSections": [
            {
              "lessonId": "fiz-ayt-10",
              "sectionIndex": 17,
              "title": "Süper iletkenlik ve teknolojik kullanım",
              "book": "AYT-fiz",
              "pages": [
                269,
                270
              ]
            }
          ],
          "coverage": "grouped",
          "page": 3
        },
        {
          "id": "ayt-fizik-35",
          "title": "Nanoteknoloji",
          "counts": [
            null,
            0,
            0,
            0,
            0,
            0,
            0,
            0
          ],
          "rawCounts": [
            "",
            "-",
            "-",
            "-",
            "-",
            "-",
            "-",
            "-"
          ],
          "reportedTotal": null,
          "rawTotal": "-",
          "lessonIds": [
            "fiz-ayt-10"
          ],
          "bookSections": [
            {
              "lessonId": "fiz-ayt-10",
              "sectionIndex": 18,
              "title": "Nanobilim, kuantum noktaları ve karbon yapıları",
              "book": "AYT-fiz",
              "pages": [
                271,
                272,
                273,
                274
              ]
            }
          ],
          "coverage": "grouped",
          "page": 3
        },
        {
          "id": "ayt-fizik-36",
          "title": "Lazer Işınları",
          "counts": [
            null,
            0,
            0,
            1,
            0,
            0,
            0,
            0
          ],
          "rawCounts": [
            "",
            "-",
            "-",
            "1",
            "-",
            "-",
            "-",
            "-"
          ],
          "reportedTotal": 1,
          "rawTotal": "1",
          "lessonIds": [
            "fiz-ayt-10"
          ],
          "bookSections": [
            {
              "lessonId": "fiz-ayt-10",
              "sectionIndex": 19,
              "title": "LASER oluşumu ve kullanım alanları",
              "book": "AYT-fiz",
              "pages": [
                275,
                276,
                277,
                278
              ]
            }
          ],
          "coverage": "grouped",
          "page": 3
        }
      ],
      "notes": [
        "Kaynak bu ders için 2019–2025 sütunlarını içerir; 2018 verisi yoktur ve null olarak korunmuştur."
      ],
      "issues": []
    },
    {
      "id": "ayt-kimya",
      "exam": "AYT",
      "subject": "kimya",
      "label": "AYT Kimya",
      "sourceId": "ayt",
      "inScope": true,
      "page": 4,
      "pages": [
        4,
        5
      ],
      "reportedYearTotals": [
        null,
        13,
        13,
        13,
        13,
        13,
        13,
        13
      ],
      "rows": [
        {
          "id": "ayt-kimya-01",
          "title": "Atomun Kuantum Modeli",
          "counts": [
            null,
            1,
            2,
            0,
            1,
            1,
            1,
            1
          ],
          "rawCounts": [
            "",
            "1",
            "2",
            "-",
            "1",
            "1",
            "1",
            "1"
          ],
          "reportedTotal": 7,
          "rawTotal": "7",
          "lessonIds": [
            "kim-ayt-01"
          ],
          "bookSections": [
            {
              "lessonId": "kim-ayt-01",
              "sectionIndex": 0,
              "title": "Atomun kuantum modeli: yörünge ve orbital",
              "book": "AYT-kim",
              "pages": [
                9,
                10
              ]
            },
            {
              "lessonId": "kim-ayt-01",
              "sectionIndex": 1,
              "title": "Kuantum sayıları, orbital şekilleri ve enerji sırası",
              "book": "AYT-kim",
              "pages": [
                11,
                12,
                13
              ]
            },
            {
              "lessonId": "kim-ayt-01",
              "sectionIndex": 2,
              "title": "Elektron yerleşimi ve periyodik sistemde yer bulma",
              "book": "AYT-kim",
              "pages": [
                14,
                15,
                16
              ]
            }
          ],
          "coverage": "grouped",
          "page": 4
        },
        {
          "id": "ayt-kimya-02",
          "title": "Periyodik Özellikler",
          "counts": [
            null,
            0,
            0,
            0,
            0,
            0,
            0,
            0
          ],
          "rawCounts": [
            "",
            "-",
            "-",
            "-",
            "-",
            "-",
            "-",
            "-"
          ],
          "reportedTotal": null,
          "rawTotal": "-",
          "lessonIds": [
            "kim-ayt-01"
          ],
          "bookSections": [
            {
              "lessonId": "kim-ayt-01",
              "sectionIndex": 3,
              "title": "Periyodik özellikler ve istisnaları",
              "book": "AYT-kim",
              "pages": [
                17,
                18,
                19,
                20,
                21
              ]
            },
            {
              "lessonId": "kim-ayt-01",
              "sectionIndex": 4,
              "title": "s, p, d ve f blok elementlerini tanıma",
              "book": "AYT-kim",
              "pages": [
                22,
                23,
                24,
                25,
                26
              ]
            }
          ],
          "coverage": "grouped",
          "page": 4
        },
        {
          "id": "ayt-kimya-03",
          "title": "Yükseltgenme Basamakları",
          "counts": [
            null,
            0,
            0,
            1,
            0,
            0,
            0,
            0
          ],
          "rawCounts": [
            "",
            "-",
            "-",
            "1",
            "-",
            "-",
            "-",
            "-"
          ],
          "reportedTotal": 1,
          "rawTotal": "1",
          "lessonIds": [
            "kim-ayt-01"
          ],
          "bookSections": [
            {
              "lessonId": "kim-ayt-01",
              "sectionIndex": 5,
              "title": "Yükseltgenme basamakları",
              "book": "AYT-kim",
              "pages": [
                27,
                28
              ]
            }
          ],
          "coverage": "grouped",
          "page": 4
        },
        {
          "id": "ayt-kimya-04",
          "title": "Gazların Özellikleri ve Gaz Yasaları",
          "counts": [
            null,
            0,
            0,
            0,
            1,
            0,
            0,
            1
          ],
          "rawCounts": [
            "",
            "-",
            "-",
            "-",
            "1",
            "-",
            "-",
            "1"
          ],
          "reportedTotal": 2,
          "rawTotal": "2",
          "lessonIds": [
            "kim-ayt-02"
          ],
          "bookSections": [
            {
              "lessonId": "kim-ayt-02",
              "sectionIndex": 0,
              "title": "Gaz değişkenleri ve Boyle–Charles ilişkileri",
              "book": "AYT-kim",
              "pages": [
                29,
                30,
                31
              ]
            }
          ],
          "coverage": "grouped",
          "page": 4
        },
        {
          "id": "ayt-kimya-05",
          "title": "İdeal Gaz Yasası",
          "counts": [
            null,
            0,
            0,
            0,
            1,
            1,
            0,
            0
          ],
          "rawCounts": [
            "",
            "-",
            "-",
            "-",
            "1",
            "1",
            "-",
            "-"
          ],
          "reportedTotal": 2,
          "rawTotal": "2",
          "lessonIds": [
            "kim-ayt-02"
          ],
          "bookSections": [
            {
              "lessonId": "kim-ayt-02",
              "sectionIndex": 1,
              "title": "Avogadro, Dalton ve ideal gaz denklemi",
              "book": "AYT-kim",
              "pages": [
                32,
                33,
                34,
                35
              ]
            }
          ],
          "coverage": "grouped",
          "page": 4
        },
        {
          "id": "ayt-kimya-06",
          "title": "Gazlarda Kinetik Teori",
          "counts": [
            null,
            1,
            1,
            0,
            0,
            1,
            1,
            0
          ],
          "rawCounts": [
            "",
            "1",
            "1",
            "-",
            "-",
            "1",
            "1",
            "-"
          ],
          "reportedTotal": 4,
          "rawTotal": "4",
          "lessonIds": [
            "kim-ayt-02"
          ],
          "bookSections": [
            {
              "lessonId": "kim-ayt-02",
              "sectionIndex": 2,
              "title": "Kinetik teori ve Graham difüzyon yasası",
              "book": "AYT-kim",
              "pages": [
                36
              ]
            }
          ],
          "coverage": "grouped",
          "page": 4
        },
        {
          "id": "ayt-kimya-07",
          "title": "Gaz Karışımları",
          "counts": [
            null,
            1,
            1,
            0,
            0,
            0,
            0,
            0
          ],
          "rawCounts": [
            "",
            "1",
            "1",
            "-",
            "-",
            "-",
            "-",
            "-"
          ],
          "reportedTotal": 2,
          "rawTotal": "2",
          "lessonIds": [
            "kim-ayt-02"
          ],
          "bookSections": [
            {
              "lessonId": "kim-ayt-02",
              "sectionIndex": 3,
              "title": "Kısmi basınç ve su üstünde toplanan gazlar",
              "book": "AYT-kim",
              "pages": [
                37,
                38,
                39
              ]
            }
          ],
          "coverage": "grouped",
          "page": 4
        },
        {
          "id": "ayt-kimya-08",
          "title": "Derişim Birimleri",
          "counts": [
            null,
            0,
            1,
            1,
            1,
            2,
            1,
            1
          ],
          "rawCounts": [
            "",
            "-",
            "1",
            "1",
            "1",
            "2",
            "1",
            "1"
          ],
          "reportedTotal": 7,
          "rawTotal": "7",
          "lessonIds": [
            "kim-ayt-03"
          ],
          "bookSections": [
            {
              "lessonId": "kim-ayt-03",
              "sectionIndex": 1,
              "title": "Yüzde derişim ve mol kesri",
              "book": "AYT-kim",
              "pages": [
                46
              ]
            },
            {
              "lessonId": "kim-ayt-03",
              "sectionIndex": 2,
              "title": "Molarite, molalite ve seyreltme",
              "book": "AYT-kim",
              "pages": [
                47,
                48
              ]
            }
          ],
          "coverage": "grouped",
          "page": 4
        },
        {
          "id": "ayt-kimya-09",
          "title": "Koligatif Özellikler",
          "counts": [
            null,
            1,
            1,
            0,
            1,
            0,
            1,
            0
          ],
          "rawCounts": [
            "",
            "1",
            "1",
            "-",
            "1",
            "-",
            "1",
            "-"
          ],
          "reportedTotal": 4,
          "rawTotal": "4",
          "lessonIds": [
            "kim-ayt-03"
          ],
          "bookSections": [
            {
              "lessonId": "kim-ayt-03",
              "sectionIndex": 3,
              "title": "Buhar basıncı alçalması ve Raoult yasası",
              "book": "AYT-kim",
              "pages": [
                49
              ]
            },
            {
              "lessonId": "kim-ayt-03",
              "sectionIndex": 4,
              "title": "Kaynama, donma ve ozmotik basınç",
              "book": "AYT-kim",
              "pages": [
                50,
                51
              ]
            }
          ],
          "coverage": "grouped",
          "page": 4
        },
        {
          "id": "ayt-kimya-10",
          "title": "Çözünürlük",
          "counts": [
            null,
            0,
            0,
            1,
            0,
            0,
            0,
            0
          ],
          "rawCounts": [
            "",
            "-",
            "-",
            "1",
            "-",
            "-",
            "-",
            "-"
          ],
          "reportedTotal": 1,
          "rawTotal": "1",
          "lessonIds": [
            "kim-ayt-03"
          ],
          "bookSections": [
            {
              "lessonId": "kim-ayt-03",
              "sectionIndex": 0,
              "title": "Çözücü–çözünen etkileşimleri",
              "book": "AYT-kim",
              "pages": [
                44,
                45
              ]
            },
            {
              "lessonId": "kim-ayt-03",
              "sectionIndex": 5,
              "title": "Çözünürlük, doygunluk ve sıcaklık grafikleri",
              "book": "AYT-kim",
              "pages": [
                52,
                53,
                54
              ]
            }
          ],
          "coverage": "grouped",
          "page": 4
        },
        {
          "id": "ayt-kimya-11",
          "title": "Tepkimelerde Isı Değişimi",
          "counts": [
            null,
            0,
            0,
            0,
            0,
            1,
            0,
            0
          ],
          "rawCounts": [
            "",
            "-",
            "-",
            "-",
            "-",
            "1",
            "-",
            "-"
          ],
          "reportedTotal": 1,
          "rawTotal": "1",
          "lessonIds": [
            "kim-ayt-04"
          ],
          "bookSections": [
            {
              "lessonId": "kim-ayt-04",
              "sectionIndex": 0,
              "title": "İç enerji ve entalpi değişimi",
              "book": "AYT-kim",
              "pages": [
                55
              ]
            },
            {
              "lessonId": "kim-ayt-04",
              "sectionIndex": 1,
              "title": "Endotermik ve ekzotermik olaylar",
              "book": "AYT-kim",
              "pages": [
                56
              ]
            },
            {
              "lessonId": "kim-ayt-04",
              "sectionIndex": 3,
              "title": "Potansiyel enerji–tepkime koordinatı grafikleri",
              "book": "AYT-kim",
              "pages": [
                58
              ]
            },
            {
              "lessonId": "kim-ayt-04",
              "sectionIndex": 4,
              "title": "Bağ enerjileriyle tepkime entalpisi",
              "book": "AYT-kim",
              "pages": [
                59
              ]
            }
          ],
          "coverage": "grouped",
          "page": 4
        },
        {
          "id": "ayt-kimya-12",
          "title": "Oluşum Entalpisi",
          "counts": [
            null,
            1,
            0,
            0,
            0,
            0,
            0,
            1
          ],
          "rawCounts": [
            "",
            "1",
            "-",
            "-",
            "-",
            "-",
            "-",
            "1"
          ],
          "reportedTotal": 2,
          "rawTotal": "2",
          "lessonIds": [
            "kim-ayt-04"
          ],
          "bookSections": [
            {
              "lessonId": "kim-ayt-04",
              "sectionIndex": 2,
              "title": "Standart oluşum entalpisi",
              "book": "AYT-kim",
              "pages": [
                57
              ]
            }
          ],
          "coverage": "grouped",
          "page": 4
        },
        {
          "id": "ayt-kimya-13",
          "title": "Tepkime Isılarının Toplanabilirliği",
          "counts": [
            null,
            0,
            1,
            1,
            1,
            0,
            1,
            0
          ],
          "rawCounts": [
            "",
            "-",
            "1",
            "1",
            "1",
            "-",
            "1",
            "-"
          ],
          "reportedTotal": 4,
          "rawTotal": "4",
          "lessonIds": [
            "kim-ayt-04"
          ],
          "bookSections": [
            {
              "lessonId": "kim-ayt-04",
              "sectionIndex": 5,
              "title": "Hess yasası ve tepkime denklemlerinin toplanması",
              "book": "AYT-kim",
              "pages": [
                60
              ]
            }
          ],
          "coverage": "grouped",
          "page": 4
        },
        {
          "id": "ayt-kimya-14",
          "title": "Tepkime Hızları",
          "counts": [
            null,
            1,
            1,
            0,
            1,
            0,
            1,
            0
          ],
          "rawCounts": [
            "",
            "1",
            "1",
            "-",
            "1",
            "-",
            "1",
            "-"
          ],
          "reportedTotal": 4,
          "rawTotal": "4",
          "lessonIds": [
            "kim-ayt-05"
          ],
          "bookSections": [
            {
              "lessonId": "kim-ayt-05",
              "sectionIndex": 0,
              "title": "Ortalama ve anlık tepkime hızı",
              "book": "AYT-kim",
              "pages": [
                61
              ]
            },
            {
              "lessonId": "kim-ayt-05",
              "sectionIndex": 1,
              "title": "Hız ölçümü ve etkili çarpışma",
              "book": "AYT-kim",
              "pages": [
                62,
                63
              ]
            },
            {
              "lessonId": "kim-ayt-05",
              "sectionIndex": 2,
              "title": "Hız denklemi ve deneysel derece",
              "book": "AYT-kim",
              "pages": [
                64
              ]
            }
          ],
          "coverage": "grouped",
          "page": 4
        },
        {
          "id": "ayt-kimya-15",
          "title": "Tepkime Hızını Etkileyen Faktörler",
          "counts": [
            null,
            1,
            0,
            1,
            0,
            0,
            0,
            1
          ],
          "rawCounts": [
            "",
            "1",
            "-",
            "1",
            "-",
            "-",
            "-",
            "1"
          ],
          "reportedTotal": 3,
          "rawTotal": "3",
          "lessonIds": [
            "kim-ayt-05"
          ],
          "bookSections": [
            {
              "lessonId": "kim-ayt-05",
              "sectionIndex": 3,
              "title": "Madde türü, derişim ve gaz basıncı",
              "book": "AYT-kim",
              "pages": [
                65
              ]
            },
            {
              "lessonId": "kim-ayt-05",
              "sectionIndex": 4,
              "title": "Sıcaklık ve katalizörün enerji dağılımına etkisi",
              "book": "AYT-kim",
              "pages": [
                66
              ]
            },
            {
              "lessonId": "kim-ayt-05",
              "sectionIndex": 5,
              "title": "Yüzey alanı ve hız faktörlerini birlikte değerlendirme",
              "book": "AYT-kim",
              "pages": [
                67
              ]
            }
          ],
          "coverage": "grouped",
          "page": 4
        },
        {
          "id": "ayt-kimya-16",
          "title": "Kimyasal Denge",
          "counts": [
            null,
            0,
            0,
            0,
            1,
            0,
            1,
            0
          ],
          "rawCounts": [
            "",
            "-",
            "-",
            "-",
            "1",
            "-",
            "1",
            "-"
          ],
          "reportedTotal": 2,
          "rawTotal": "2",
          "lessonIds": [
            "kim-ayt-06"
          ],
          "bookSections": [
            {
              "lessonId": "kim-ayt-06",
              "sectionIndex": 0,
              "title": "Fiziksel ve kimyasal değişimlerde dinamik denge",
              "book": "AYT-kim",
              "pages": [
                68
              ]
            },
            {
              "lessonId": "kim-ayt-06",
              "sectionIndex": 1,
              "title": "Denge bağıntısı ve heterojen dengeler",
              "book": "AYT-kim",
              "pages": [
                69
              ]
            },
            {
              "lessonId": "kim-ayt-06",
              "sectionIndex": 2,
              "title": "Denklem değişince K ve sıcaklığın rolü",
              "book": "AYT-kim",
              "pages": [
                70
              ]
            }
          ],
          "coverage": "grouped",
          "page": 4
        },
        {
          "id": "ayt-kimya-17",
          "title": "Dengeyi Etkileyen Faktörler",
          "counts": [
            null,
            0,
            0,
            1,
            0,
            1,
            0,
            1
          ],
          "rawCounts": [
            "",
            "-",
            "-",
            "1",
            "-",
            "1",
            "-",
            "1"
          ],
          "reportedTotal": 3,
          "rawTotal": "3",
          "lessonIds": [
            "kim-ayt-06"
          ],
          "bookSections": [
            {
              "lessonId": "kim-ayt-06",
              "sectionIndex": 3,
              "title": "Derişim etkisi ve Q–K karşılaştırması",
              "book": "AYT-kim",
              "pages": [
                71
              ]
            },
            {
              "lessonId": "kim-ayt-06",
              "sectionIndex": 4,
              "title": "Sıcaklık ve hacim–basınç değişimi",
              "book": "AYT-kim",
              "pages": [
                72
              ]
            },
            {
              "lessonId": "kim-ayt-06",
              "sectionIndex": 5,
              "title": "İnert gaz, katalizör ve koşullu yorum",
              "book": "AYT-kim",
              "pages": [
                73
              ]
            }
          ],
          "coverage": "grouped",
          "page": 4
        },
        {
          "id": "ayt-kimya-18",
          "title": "Sulu Çözelti Dengeleri",
          "counts": [
            null,
            2,
            1,
            1,
            1,
            1,
            1,
            1
          ],
          "rawCounts": [
            "",
            "2",
            "1",
            "1",
            "1",
            "1",
            "1",
            "1"
          ],
          "reportedTotal": 8,
          "rawTotal": "8",
          "lessonIds": [
            "kim-ayt-07"
          ],
          "bookSections": [
            {
              "lessonId": "kim-ayt-07",
              "sectionIndex": 0,
              "title": "Suyun otoiyonizasyonu ve pH",
              "book": "AYT-kim",
              "pages": [
                74
              ]
            },
            {
              "lessonId": "kim-ayt-07",
              "sectionIndex": 1,
              "title": "Brønsted–Lowry asit–bazları ve Ka–Kb",
              "book": "AYT-kim",
              "pages": [
                75,
                76,
                77,
                78
              ]
            },
            {
              "lessonId": "kim-ayt-07",
              "sectionIndex": 2,
              "title": "Tampon çözeltiler ve tuzların hidrolizi",
              "book": "AYT-kim",
              "pages": [
                79
              ]
            },
            {
              "lessonId": "kim-ayt-07",
              "sectionIndex": 3,
              "title": "Kuvvetli asit–baz titrasyonu",
              "book": "AYT-kim",
              "pages": [
                80,
                81
              ]
            },
            {
              "lessonId": "kim-ayt-07",
              "sectionIndex": 4,
              "title": "Çözünme–çökelme dengesi ve Kçç",
              "book": "AYT-kim",
              "pages": [
                82
              ]
            },
            {
              "lessonId": "kim-ayt-07",
              "sectionIndex": 5,
              "title": "Ortak iyon ve çökelme koşulu",
              "book": "AYT-kim",
              "pages": [
                83
              ]
            }
          ],
          "coverage": "covered",
          "page": 4
        },
        {
          "id": "ayt-kimya-19",
          "title": "İndirgenme - Yükseltgenme Tepkimelerinde Elektrik Akımı",
          "counts": [
            null,
            0,
            0,
            1,
            0,
            0,
            0,
            0
          ],
          "rawCounts": [
            "",
            "-",
            "-",
            "1",
            "-",
            "-",
            "-",
            "-"
          ],
          "reportedTotal": 1,
          "rawTotal": "1",
          "lessonIds": [
            "kim-ayt-08"
          ],
          "bookSections": [
            {
              "lessonId": "kim-ayt-08",
              "sectionIndex": 0,
              "title": "Redoks ve elektron sayısının korunumu",
              "book": "AYT-kim",
              "pages": [
                84,
                85,
                86
              ]
            }
          ],
          "coverage": "grouped",
          "page": 4
        },
        {
          "id": "ayt-kimya-20",
          "title": "Elektrotlar ve Elektrokimyasal Hücreler",
          "counts": [
            null,
            0,
            1,
            1,
            1,
            0,
            0,
            0
          ],
          "rawCounts": [
            "",
            "-",
            "1",
            "1",
            "1",
            "-",
            "-",
            "-"
          ],
          "reportedTotal": 3,
          "rawTotal": "3",
          "lessonIds": [
            "kim-ayt-08"
          ],
          "bookSections": [
            {
              "lessonId": "kim-ayt-08",
              "sectionIndex": 1,
              "title": "Elektrotlar, elektrolit ve yarı hücreler",
              "book": "AYT-kim",
              "pages": [
                87,
                88
              ]
            }
          ],
          "coverage": "grouped",
          "page": 4
        },
        {
          "id": "ayt-kimya-21",
          "title": "Elektrot Potansiyelleri",
          "counts": [
            null,
            1,
            1,
            0,
            1,
            2,
            1,
            1
          ],
          "rawCounts": [
            "",
            "1",
            "1",
            "-",
            "1",
            "2",
            "1",
            "1"
          ],
          "reportedTotal": 7,
          "rawTotal": "7",
          "lessonIds": [
            "kim-ayt-08"
          ],
          "bookSections": [
            {
              "lessonId": "kim-ayt-08",
              "sectionIndex": 2,
              "title": "Standart hidrojen elektrodu ve elektrot potansiyelleri",
              "book": "AYT-kim",
              "pages": [
                89,
                90
              ]
            },
            {
              "lessonId": "kim-ayt-08",
              "sectionIndex": 3,
              "title": "Derişim etkisi ve derişim pilleri",
              "book": "AYT-kim",
              "pages": [
                91,
                92
              ]
            },
            {
              "lessonId": "kim-ayt-08",
              "sectionIndex": 4,
              "title": "Pil geriliminin hesaplanması ve devre yönü",
              "book": "AYT-kim",
              "pages": [
                93,
                94,
                95
              ]
            },
            {
              "lessonId": "kim-ayt-08",
              "sectionIndex": 5,
              "title": "Pillerin ömrü ve lityum–iyon pilleri",
              "book": "AYT-kim",
              "pages": [
                96
              ]
            }
          ],
          "coverage": "grouped",
          "page": 4
        },
        {
          "id": "ayt-kimya-22",
          "title": "Elektroliz",
          "counts": [
            null,
            1,
            0,
            1,
            0,
            1,
            1,
            1
          ],
          "rawCounts": [
            "",
            "1",
            "-",
            "1",
            "-",
            "1",
            "1",
            "1"
          ],
          "reportedTotal": 5,
          "rawTotal": "5",
          "lessonIds": [
            "kim-ayt-08"
          ],
          "bookSections": [
            {
              "lessonId": "kim-ayt-08",
              "sectionIndex": 6,
              "title": "Elektroliz, Faraday hesabı ve metal kaplama",
              "book": "AYT-kim",
              "pages": [
                97,
                98,
                99
              ]
            }
          ],
          "coverage": "grouped",
          "page": 4
        },
        {
          "id": "ayt-kimya-23",
          "title": "Korozyon",
          "counts": [
            null,
            0,
            1,
            0,
            0,
            0,
            0,
            0
          ],
          "rawCounts": [
            "",
            "-",
            "1",
            "-",
            "-",
            "-",
            "-",
            "-"
          ],
          "reportedTotal": 1,
          "rawTotal": "1",
          "lessonIds": [
            "kim-ayt-08"
          ],
          "bookSections": [
            {
              "lessonId": "kim-ayt-08",
              "sectionIndex": 7,
              "title": "Korozyon ve korunma yöntemleri",
              "book": "AYT-kim",
              "pages": [
                100
              ]
            }
          ],
          "coverage": "grouped",
          "page": 4
        },
        {
          "id": "ayt-kimya-24",
          "title": "Basit Formül ve Molekül Formülü",
          "counts": [
            null,
            0,
            0,
            0,
            1,
            0,
            0,
            0
          ],
          "rawCounts": [
            "",
            "-",
            "-",
            "-",
            "1",
            "-",
            "-",
            "-"
          ],
          "reportedTotal": 1,
          "rawTotal": "1",
          "lessonIds": [
            "kim-ayt-09"
          ],
          "bookSections": [
            {
              "lessonId": "kim-ayt-09",
              "sectionIndex": 0,
              "title": "Organik–anorganik ayrımı, basit ve molekül formülü",
              "book": "AYT-kim",
              "pages": [
                101,
                102
              ]
            }
          ],
          "coverage": "grouped",
          "page": 4
        },
        {
          "id": "ayt-kimya-25",
          "title": "Doğada Karbon",
          "counts": [
            null,
            1,
            0,
            0,
            0,
            1,
            0,
            0
          ],
          "rawCounts": [
            "",
            "1",
            "-",
            "-",
            "-",
            "1",
            "-",
            "-"
          ],
          "reportedTotal": 2,
          "rawTotal": "2",
          "lessonIds": [
            "kim-ayt-09"
          ],
          "bookSections": [
            {
              "lessonId": "kim-ayt-09",
              "sectionIndex": 1,
              "title": "Karbonun allotropları",
              "book": "AYT-kim",
              "pages": [
                103,
                104
              ]
            }
          ],
          "coverage": "grouped",
          "page": 4
        },
        {
          "id": "ayt-kimya-26",
          "title": "Hibritleşme - Molekül Geometrisi",
          "counts": [
            null,
            0,
            1,
            1,
            0,
            0,
            1,
            2
          ],
          "rawCounts": [
            "",
            "-",
            "1",
            "1",
            "-",
            "-",
            "1",
            "2"
          ],
          "reportedTotal": 5,
          "rawTotal": "5",
          "lessonIds": [
            "kim-ayt-09"
          ],
          "bookSections": [
            {
              "lessonId": "kim-ayt-09",
              "sectionIndex": 2,
              "title": "Lewis, hibritleşme ve molekül geometrisi",
              "book": "AYT-kim",
              "pages": [
                105,
                106,
                107,
                108
              ]
            }
          ],
          "coverage": "grouped",
          "page": 4
        },
        {
          "id": "ayt-kimya-27",
          "title": "Hidrokarbonlar",
          "counts": [
            null,
            1,
            2,
            1,
            0,
            0,
            1,
            1
          ],
          "rawCounts": [
            "",
            "1",
            "2",
            "1",
            "-",
            "-",
            "1",
            "1"
          ],
          "reportedTotal": 6,
          "rawTotal": "6",
          "lessonIds": [
            "kim-ayt-09"
          ],
          "bookSections": [
            {
              "lessonId": "kim-ayt-09",
              "sectionIndex": 3,
              "title": "Hidrokarbonların ve fonksiyonel grupların sınıflandırılması",
              "book": "AYT-kim",
              "pages": [
                109,
                110
              ]
            },
            {
              "lessonId": "kim-ayt-09",
              "sectionIndex": 4,
              "title": "Alkanlar: formül, adlandırma ve yapısal izomerlik",
              "book": "AYT-kim",
              "pages": [
                111,
                112,
                113,
                114
              ]
            },
            {
              "lessonId": "kim-ayt-09",
              "sectionIndex": 5,
              "title": "Alkanların tepkimeleri ve adlandırma örnekleri",
              "book": "AYT-kim",
              "pages": [
                115,
                116,
                117
              ]
            },
            {
              "lessonId": "kim-ayt-09",
              "sectionIndex": 6,
              "title": "Alkenler: katılma, cis–trans ve polimerleşme",
              "book": "AYT-kim",
              "pages": [
                118,
                119
              ]
            },
            {
              "lessonId": "kim-ayt-09",
              "sectionIndex": 7,
              "title": "Alkinler ve aromatik hidrokarbonlar",
              "book": "AYT-kim",
              "pages": [
                120,
                121,
                122,
                123
              ]
            }
          ],
          "coverage": "grouped",
          "page": 4
        },
        {
          "id": "ayt-kimya-28",
          "title": "Fonksiyonel Gruplar",
          "counts": [
            null,
            1,
            0,
            0,
            0,
            0,
            0,
            0
          ],
          "rawCounts": [
            "",
            "1",
            "-",
            "-",
            "-",
            "-",
            "-",
            "-"
          ],
          "reportedTotal": 1,
          "rawTotal": "1",
          "lessonIds": [
            "kim-ayt-10"
          ],
          "bookSections": [
            {
              "lessonId": "kim-ayt-10",
              "sectionIndex": 0,
              "title": "Fonksiyonel grubu bağlantı düzeninden tanıma",
              "book": "AYT-kim",
              "pages": [
                109,
                110
              ]
            }
          ],
          "coverage": "grouped",
          "page": 5
        },
        {
          "id": "ayt-kimya-29",
          "title": "Alkoller - Eterler",
          "counts": [
            null,
            0,
            0,
            1,
            0,
            0,
            0,
            1
          ],
          "rawCounts": [
            "",
            "-",
            "-",
            "1",
            "-",
            "-",
            "-",
            "1"
          ],
          "reportedTotal": 2,
          "rawTotal": "2",
          "lessonIds": [
            "kim-ayt-10"
          ],
          "bookSections": [
            {
              "lessonId": "kim-ayt-10",
              "sectionIndex": 1,
              "title": "Alkoller: sınıflandırma, adlandırma ve özellikler",
              "book": "AYT-kim",
              "pages": [
                124,
                125,
                126,
                127
              ]
            },
            {
              "lessonId": "kim-ayt-10",
              "sectionIndex": 2,
              "title": "Eterler ve alkol–eter izomerliği",
              "book": "AYT-kim",
              "pages": [
                128,
                129
              ]
            }
          ],
          "coverage": "grouped",
          "page": 5
        },
        {
          "id": "ayt-kimya-30",
          "title": "Karbonil Bileşikleri",
          "counts": [
            null,
            0,
            0,
            0,
            0,
            1,
            0,
            0
          ],
          "rawCounts": [
            "",
            "-",
            "-",
            "-",
            "-",
            "1",
            "-",
            "-"
          ],
          "reportedTotal": 1,
          "rawTotal": "1",
          "lessonIds": [
            "kim-ayt-10"
          ],
          "bookSections": [
            {
              "lessonId": "kim-ayt-10",
              "sectionIndex": 3,
              "title": "Aldehitler: karbonilin uç konumu",
              "book": "AYT-kim",
              "pages": [
                130,
                131,
                132
              ]
            },
            {
              "lessonId": "kim-ayt-10",
              "sectionIndex": 4,
              "title": "Ketonlar: karbonilin iki karbon grubu arasında bulunması",
              "book": "AYT-kim",
              "pages": [
                133,
                134
              ]
            }
          ],
          "coverage": "grouped",
          "page": 5
        },
        {
          "id": "ayt-kimya-31",
          "title": "Karboksilik Asitler",
          "counts": [
            null,
            0,
            0,
            0,
            0,
            0,
            4,
            0
          ],
          "rawCounts": [
            "",
            "-",
            "-",
            "-",
            "-",
            "-",
            "4",
            "-"
          ],
          "reportedTotal": 4,
          "rawTotal": "4",
          "lessonIds": [
            "kim-ayt-10"
          ],
          "bookSections": [
            {
              "lessonId": "kim-ayt-10",
              "sectionIndex": 5,
              "title": "Karboksilik asitler ve asitlik dengesi",
              "book": "AYT-kim",
              "pages": [
                135,
                136,
                137
              ]
            }
          ],
          "coverage": "grouped",
          "page": 5
        },
        {
          "id": "ayt-kimya-32",
          "title": "Esterler",
          "counts": [
            null,
            0,
            0,
            0,
            1,
            0,
            0,
            0
          ],
          "rawCounts": [
            "",
            "-",
            "-",
            "-",
            "1",
            "-",
            "-",
            "-"
          ],
          "reportedTotal": 1,
          "rawTotal": "1",
          "lessonIds": [
            "kim-ayt-10"
          ],
          "bookSections": [
            {
              "lessonId": "kim-ayt-10",
              "sectionIndex": 6,
              "title": "Esterler ve esterleşme dengesi",
              "book": "AYT-kim",
              "pages": [
                138,
                139
              ]
            }
          ],
          "coverage": "grouped",
          "page": 5
        }
      ],
      "notes": [
        "Kaynak bu ders için 2019–2025 sütunlarını içerir; 2018 verisi yoktur ve null olarak korunmuştur.",
        "Kaynak tablosunda boş hücre veya toplam tutarsızlığı var; ayrıntılar issues alanında ham değerlerle kaydedilmiştir."
      ],
      "issues": [
        {
          "type": "yearTotalMismatch",
          "year": 2019,
          "computedKnownSum": 14,
          "reported": 13,
          "blankRows": [],
          "message": "Görünen konu hücrelerinin toplamı kaynakta yazılı yıl toplamıyla uyuşmuyor; yıl toplamı düzeltilmedi."
        },
        {
          "type": "yearTotalMismatch",
          "year": 2020,
          "computedKnownSum": 15,
          "reported": 13,
          "blankRows": [],
          "message": "Görünen konu hücrelerinin toplamı kaynakta yazılı yıl toplamıyla uyuşmuyor; yıl toplamı düzeltilmedi."
        },
        {
          "type": "yearTotalMismatch",
          "year": 2024,
          "computedKnownSum": 16,
          "reported": 13,
          "blankRows": [],
          "message": "Görünen konu hücrelerinin toplamı kaynakta yazılı yıl toplamıyla uyuşmuyor; yıl toplamı düzeltilmedi."
        }
      ]
    },
    {
      "id": "ayt-biyoloji",
      "exam": "AYT",
      "subject": "biyoloji",
      "label": "AYT Biyoloji",
      "sourceId": "ayt",
      "inScope": true,
      "page": 5,
      "pages": [
        5
      ],
      "reportedYearTotals": [
        null,
        13,
        13,
        13,
        13,
        13,
        13,
        13
      ],
      "rows": [
        {
          "id": "ayt-biyoloji-01",
          "title": "Denetleyici ve Düzenleyici Sistem, Duyu Organları",
          "counts": [
            null,
            1,
            2,
            1,
            1,
            3,
            1,
            1
          ],
          "rawCounts": [
            "",
            "1",
            "2",
            "1",
            "1",
            "3",
            "1",
            "1"
          ],
          "reportedTotal": 10,
          "rawTotal": "10",
          "lessonIds": [
            "bio-ayt-01",
            "bio-ayt-02",
            "bio-ayt-03"
          ],
          "bookSections": [
            {
              "lessonId": "bio-ayt-01",
              "sectionIndex": 0,
              "title": "Sinir Doku — Nöronlar ve yardımcı hücreler",
              "book": "AYT-bio",
              "pages": [
                9,
                10
              ]
            },
            {
              "lessonId": "bio-ayt-01",
              "sectionIndex": 1,
              "title": "Sodyum-Potasyum Pompasının Çalışma Mekanizması",
              "book": "AYT-bio",
              "pages": [
                11
              ]
            },
            {
              "lessonId": "bio-ayt-01",
              "sectionIndex": 2,
              "title": "Nöronlarda İmpuls Oluşumu ve İletimi",
              "book": "AYT-bio",
              "pages": [
                12
              ]
            },
            {
              "lessonId": "bio-ayt-01",
              "sectionIndex": 3,
              "title": "Sinapslarda İmpuls Oluşumu ve İletimi; Atlamalı İletim",
              "book": "AYT-bio",
              "pages": [
                13
              ]
            },
            {
              "lessonId": "bio-ayt-01",
              "sectionIndex": 4,
              "title": "Sinir Sisteminin Bölümleri ve Ön Beyin",
              "book": "AYT-bio",
              "pages": [
                14,
                15,
                16
              ]
            },
            {
              "lessonId": "bio-ayt-01",
              "sectionIndex": 5,
              "title": "Orta Beyin, Arka Beyin ve Omurilik",
              "book": "AYT-bio",
              "pages": [
                17,
                18
              ]
            },
            {
              "lessonId": "bio-ayt-01",
              "sectionIndex": 6,
              "title": "Çevresel Sinir Sistemi ve Sinir Sistemi Rahatsızlıkları",
              "book": "AYT-bio",
              "pages": [
                19,
                20,
                21,
                22
              ]
            },
            {
              "lessonId": "bio-ayt-02",
              "sectionIndex": 0,
              "title": "Salgı Bezleri ve Hormonların Genel Özellikleri",
              "book": "AYT-bio",
              "pages": [
                23
              ]
            },
            {
              "lessonId": "bio-ayt-02",
              "sectionIndex": 1,
              "title": "Epifiz Bezi, Hipofiz Bezi ve Hormonları",
              "book": "AYT-bio",
              "pages": [
                24,
                25
              ]
            },
            {
              "lessonId": "bio-ayt-02",
              "sectionIndex": 2,
              "title": "Tiroit Bezi, Tiroksin ve Geri Bildirim",
              "book": "AYT-bio",
              "pages": [
                26,
                27
              ]
            },
            {
              "lessonId": "bio-ayt-02",
              "sectionIndex": 3,
              "title": "Paratiroit Bezi ve Timüs Bezi",
              "book": "AYT-bio",
              "pages": [
                28
              ]
            },
            {
              "lessonId": "bio-ayt-02",
              "sectionIndex": 4,
              "title": "Böbrek Üstü Bezleri",
              "book": "AYT-bio",
              "pages": [
                29,
                30
              ]
            },
            {
              "lessonId": "bio-ayt-02",
              "sectionIndex": 5,
              "title": "Pankreas ve Eşeysel Bezler",
              "book": "AYT-bio",
              "pages": [
                30,
                31
              ]
            },
            {
              "lessonId": "bio-ayt-03",
              "sectionIndex": 0,
              "title": "Duyu Reseptörleri, Deri ve Derinin Tabakaları",
              "book": "AYT-bio",
              "pages": [
                32,
                33,
                34
              ]
            },
            {
              "lessonId": "bio-ayt-03",
              "sectionIndex": 1,
              "title": "Burun ve Dil",
              "book": "AYT-bio",
              "pages": [
                35
              ]
            },
            {
              "lessonId": "bio-ayt-03",
              "sectionIndex": 2,
              "title": "Kulağın Genel Yapısı, Dış Kulak, Orta Kulak ve İç Kulak",
              "book": "AYT-bio",
              "pages": [
                36,
                37
              ]
            },
            {
              "lessonId": "bio-ayt-03",
              "sectionIndex": 3,
              "title": "İşitme Olayı ve Denge",
              "book": "AYT-bio",
              "pages": [
                38,
                39
              ]
            },
            {
              "lessonId": "bio-ayt-03",
              "sectionIndex": 4,
              "title": "Gözün Genel Yapısı, Retina ve Görme Olayı",
              "book": "AYT-bio",
              "pages": [
                40,
                41,
                42
              ]
            },
            {
              "lessonId": "bio-ayt-03",
              "sectionIndex": 5,
              "title": "Duyu Organları Rahatsızlıkları ve Sağlıklı Yapının Korunması",
              "book": "AYT-bio",
              "pages": [
                43,
                44
              ]
            }
          ],
          "coverage": "grouped",
          "page": 5
        },
        {
          "id": "ayt-biyoloji-02",
          "title": "Destek ve Hareket Sistemi",
          "counts": [
            null,
            0,
            0,
            1,
            1,
            0,
            0,
            0
          ],
          "rawCounts": [
            "",
            "-",
            "-",
            "1",
            "1",
            "-",
            "-",
            "-"
          ],
          "reportedTotal": 2,
          "rawTotal": "2",
          "lessonIds": [
            "bio-ayt-04"
          ],
          "bookSections": [
            {
              "lessonId": "bio-ayt-04",
              "sectionIndex": 0,
              "title": "Kemik Doku, Kemik Çeşitleri ve İskeletin Bölümleri",
              "book": "AYT-bio",
              "pages": [
                45,
                46,
                47,
                48,
                49
              ]
            },
            {
              "lessonId": "bio-ayt-04",
              "sectionIndex": 1,
              "title": "Kıkırdak Doku ve Eklemler",
              "book": "AYT-bio",
              "pages": [
                50,
                51
              ]
            },
            {
              "lessonId": "bio-ayt-04",
              "sectionIndex": 2,
              "title": "Kas Doku ve Kas Çeşitleri",
              "book": "AYT-bio",
              "pages": [
                52,
                53,
                54
              ]
            },
            {
              "lessonId": "bio-ayt-04",
              "sectionIndex": 3,
              "title": "Sarkomerdeki Bantlaşma ve Kasılma Mekanizması",
              "book": "AYT-bio",
              "pages": [
                55
              ]
            },
            {
              "lessonId": "bio-ayt-04",
              "sectionIndex": 4,
              "title": "Kasılma ve Gevşeme Mekanizması",
              "book": "AYT-bio",
              "pages": [
                56
              ]
            },
            {
              "lessonId": "bio-ayt-04",
              "sectionIndex": 5,
              "title": "Enerji Metabolizması, Kasılmanın Kontrolü ve Kas-İskelet İlişkisi",
              "book": "AYT-bio",
              "pages": [
                57,
                58,
                59,
                60,
                61
              ]
            }
          ],
          "coverage": "covered",
          "page": 5
        },
        {
          "id": "ayt-biyoloji-03",
          "title": "Sindirim Sistemi",
          "counts": [
            null,
            1,
            1,
            0,
            0,
            1,
            1,
            1
          ],
          "rawCounts": [
            "",
            "1",
            "1",
            "-",
            "-",
            "1",
            "1",
            "1"
          ],
          "reportedTotal": 5,
          "rawTotal": "5",
          "lessonIds": [
            "bio-ayt-05"
          ],
          "bookSections": [
            {
              "lessonId": "bio-ayt-05",
              "sectionIndex": 0,
              "title": "Sindirimin Amacı ve Çeşitleri; Sindirim Sisteminin Genel Yapısı",
              "book": "AYT-bio",
              "pages": [
                62,
                63
              ]
            },
            {
              "lessonId": "bio-ayt-05",
              "sectionIndex": 1,
              "title": "Ağız, Yutak ve Yemek Borusu",
              "book": "AYT-bio",
              "pages": [
                64,
                65,
                66
              ]
            },
            {
              "lessonId": "bio-ayt-05",
              "sectionIndex": 2,
              "title": "Mide, İnce Bağırsak ve Kalın Bağırsak",
              "book": "AYT-bio",
              "pages": [
                67,
                68,
                69
              ]
            },
            {
              "lessonId": "bio-ayt-05",
              "sectionIndex": 3,
              "title": "Tükürük Bezleri, Pankreas, Karaciğer ve Safra Kesesi",
              "book": "AYT-bio",
              "pages": [
                70,
                71
              ]
            },
            {
              "lessonId": "bio-ayt-05",
              "sectionIndex": 4,
              "title": "Besinlerin Kimyasal Sindirimi",
              "book": "AYT-bio",
              "pages": [
                72,
                73
              ]
            },
            {
              "lessonId": "bio-ayt-05",
              "sectionIndex": 5,
              "title": "Nükleik Asitlerin Sindirimi ve Besinlerin Emilimi",
              "book": "AYT-bio",
              "pages": [
                74
              ]
            },
            {
              "lessonId": "bio-ayt-05",
              "sectionIndex": 6,
              "title": "Sindirim Sistemi Rahatsızlıkları ve Sağlıklı Yapının Korunması",
              "book": "AYT-bio",
              "pages": [
                75,
                76
              ]
            }
          ],
          "coverage": "covered",
          "page": 5
        },
        {
          "id": "ayt-biyoloji-04",
          "title": "Dolaşım Sistemi",
          "counts": [
            null,
            1,
            1,
            1,
            1,
            1,
            1,
            1
          ],
          "rawCounts": [
            "",
            "1",
            "1",
            "1",
            "1",
            "1",
            "1",
            "1"
          ],
          "reportedTotal": 7,
          "rawTotal": "7",
          "lessonIds": [
            "bio-ayt-06"
          ],
          "bookSections": [
            {
              "lessonId": "bio-ayt-06",
              "sectionIndex": 0,
              "title": "Dolaşım Sisteminin Genel Yapısı ve Kalbin Yapısı",
              "book": "AYT-bio",
              "pages": [
                77,
                78
              ]
            },
            {
              "lessonId": "bio-ayt-06",
              "sectionIndex": 1,
              "title": "Kanın Kalpteki Hareketi ve Kalp Ritminin Kontrolü",
              "book": "AYT-bio",
              "pages": [
                79,
                80
              ]
            },
            {
              "lessonId": "bio-ayt-06",
              "sectionIndex": 2,
              "title": "Küçük ve Büyük Kan Dolaşımı",
              "book": "AYT-bio",
              "pages": [
                81,
                82
              ]
            },
            {
              "lessonId": "bio-ayt-06",
              "sectionIndex": 3,
              "title": "Kan Damarları ve Kılcal–Doku Sıvısı Alışverişi",
              "book": "AYT-bio",
              "pages": [
                83,
                84,
                85
              ]
            },
            {
              "lessonId": "bio-ayt-06",
              "sectionIndex": 4,
              "title": "Kan Doku: Plazma, Hücresel Elemanlar ve Pıhtılaşma",
              "book": "AYT-bio",
              "pages": [
                86,
                87,
                88
              ]
            },
            {
              "lessonId": "bio-ayt-06",
              "sectionIndex": 5,
              "title": "Lenf Dolaşımı ve Dolaşım Sistemi Rahatsızlıkları",
              "book": "AYT-bio",
              "pages": [
                89,
                90,
                91,
                92,
                93
              ]
            },
            {
              "lessonId": "bio-ayt-06",
              "sectionIndex": 6,
              "title": "Doğal Bağışıklık ve Savunma Hatları",
              "book": "AYT-bio",
              "pages": [
                94,
                95
              ]
            },
            {
              "lessonId": "bio-ayt-06",
              "sectionIndex": 7,
              "title": "Kazanılmış Bağışıklık ve Bağışıklık Hafızası",
              "book": "AYT-bio",
              "pages": [
                96,
                97
              ]
            }
          ],
          "coverage": "covered",
          "page": 5
        },
        {
          "id": "ayt-biyoloji-05",
          "title": "Solunum Sistemi",
          "counts": [
            null,
            1,
            1,
            1,
            1,
            1,
            1,
            0
          ],
          "rawCounts": [
            "",
            "1",
            "1",
            "1",
            "1",
            "1",
            "1",
            "-"
          ],
          "reportedTotal": 6,
          "rawTotal": "6",
          "lessonIds": [
            "bio-ayt-07"
          ],
          "bookSections": [
            {
              "lessonId": "bio-ayt-07",
              "sectionIndex": 0,
              "title": "Solunum Sisteminin Genel Yapısı ve Organları",
              "book": "AYT-bio",
              "pages": [
                98,
                99,
                100
              ]
            },
            {
              "lessonId": "bio-ayt-07",
              "sectionIndex": 1,
              "title": "Alveoller, Soluk Alıp Verme Mekanizması ve Kontrolü",
              "book": "AYT-bio",
              "pages": [
                101,
                102,
                103
              ]
            },
            {
              "lessonId": "bio-ayt-07",
              "sectionIndex": 2,
              "title": "Solunum Gazlarının Taşınması ve Hemoglobin",
              "book": "AYT-bio",
              "pages": [
                104,
                105,
                106
              ]
            },
            {
              "lessonId": "bio-ayt-07",
              "sectionIndex": 3,
              "title": "Solunum Sistemi Hastalıkları ve Sağlıklı Yapının Korunması",
              "book": "AYT-bio",
              "pages": [
                107,
                108
              ]
            }
          ],
          "coverage": "grouped",
          "page": 5
        },
        {
          "id": "ayt-biyoloji-06",
          "title": "Üriner Sistem",
          "counts": [
            null,
            1,
            1,
            0,
            0,
            1,
            1,
            1
          ],
          "rawCounts": [
            "",
            "1",
            "1",
            "-",
            "-",
            "1",
            "1",
            "1"
          ],
          "reportedTotal": 5,
          "rawTotal": "5",
          "lessonIds": [
            "bio-ayt-07"
          ],
          "bookSections": [
            {
              "lessonId": "bio-ayt-07",
              "sectionIndex": 4,
              "title": "Üriner Sistemin Görevleri, Organları ve Nefronun Yapısı",
              "book": "AYT-bio",
              "pages": [
                109,
                110,
                111,
                112
              ]
            },
            {
              "lessonId": "bio-ayt-07",
              "sectionIndex": 5,
              "title": "İdrar Oluşumu: Süzülme, Geri Emilim ve Salgılama",
              "book": "AYT-bio",
              "pages": [
                113,
                114,
                115,
                116
              ]
            },
            {
              "lessonId": "bio-ayt-07",
              "sectionIndex": 6,
              "title": "Homeostazide Böbreklerin Rolü ve Üriner Sistem Rahatsızlıkları",
              "book": "AYT-bio",
              "pages": [
                117,
                118,
                119
              ]
            }
          ],
          "coverage": "grouped",
          "page": 5
        },
        {
          "id": "ayt-biyoloji-07",
          "title": "Üreme Sistemi ve Embriyonik Gelişim",
          "counts": [
            null,
            0,
            0,
            0,
            1,
            0,
            0,
            1
          ],
          "rawCounts": [
            "",
            "-",
            "-",
            "-",
            "1",
            "-",
            "-",
            "1"
          ],
          "reportedTotal": 2,
          "rawTotal": "2",
          "lessonIds": [
            "bio-ayt-08"
          ],
          "bookSections": [
            {
              "lessonId": "bio-ayt-08",
              "sectionIndex": 0,
              "title": "Erkek Üreme Sistemi, Spermatogenez ve Hormonal Kontrol",
              "book": "AYT-bio",
              "pages": [
                120,
                121,
                122
              ]
            },
            {
              "lessonId": "bio-ayt-08",
              "sectionIndex": 1,
              "title": "Dişi Üreme Sistemi ve Oogenez",
              "book": "AYT-bio",
              "pages": [
                123,
                124
              ]
            },
            {
              "lessonId": "bio-ayt-08",
              "sectionIndex": 2,
              "title": "Menstrual Döngü ve Dişi Üreme Sisteminin Hormonal Kontrolü",
              "book": "AYT-bio",
              "pages": [
                125,
                126,
                127
              ]
            },
            {
              "lessonId": "bio-ayt-08",
              "sectionIndex": 3,
              "title": "Döllenme ve Üreme Sisteminin Sağlıklı Yapısının Korunması",
              "book": "AYT-bio",
              "pages": [
                128,
                129
              ]
            },
            {
              "lessonId": "bio-ayt-08",
              "sectionIndex": 4,
              "title": "Segmentasyon, Gastrulasyon, Organogenez ve Plasenta",
              "book": "AYT-bio",
              "pages": [
                130,
                131,
                132
              ]
            },
            {
              "lessonId": "bio-ayt-08",
              "sectionIndex": 5,
              "title": "Embriyonik ve Fetal Dönem; Gelişimi Etkileyen Faktörler",
              "book": "AYT-bio",
              "pages": [
                133,
                134
              ]
            }
          ],
          "coverage": "covered",
          "page": 5
        },
        {
          "id": "ayt-biyoloji-08",
          "title": "Komünite ve Popülasyon Ekolojisi",
          "counts": [
            null,
            0,
            2,
            2,
            2,
            2,
            2,
            1
          ],
          "rawCounts": [
            "",
            "-",
            "2",
            "2",
            "2",
            "2",
            "2",
            "1"
          ],
          "reportedTotal": 11,
          "rawTotal": "11",
          "lessonIds": [
            "bio-ayt-09"
          ],
          "bookSections": [
            {
              "lessonId": "bio-ayt-09",
              "sectionIndex": 0,
              "title": "Komünitenin Yapısına Etki Eden Faktörler ve Ekolojik Niş",
              "book": "AYT-bio",
              "pages": [
                135,
                136
              ]
            },
            {
              "lessonId": "bio-ayt-09",
              "sectionIndex": 1,
              "title": "Komünitede Rekabet",
              "book": "AYT-bio",
              "pages": [
                137,
                138
              ]
            },
            {
              "lessonId": "bio-ayt-09",
              "sectionIndex": 2,
              "title": "Av-Avcı İlişkisi",
              "book": "AYT-bio",
              "pages": [
                139
              ]
            },
            {
              "lessonId": "bio-ayt-09",
              "sectionIndex": 3,
              "title": "Simbiyotik İlişkiler ve Süksesyon",
              "book": "AYT-bio",
              "pages": [
                140,
                141,
                142,
                143
              ]
            },
            {
              "lessonId": "bio-ayt-09",
              "sectionIndex": 4,
              "title": "Popülasyon Yoğunluğu, Dağılımı ve Büyüklüğü",
              "book": "AYT-bio",
              "pages": [
                144,
                145
              ]
            },
            {
              "lessonId": "bio-ayt-09",
              "sectionIndex": 5,
              "title": "Hayatta Kalma Eğrileri, Taşıma Kapasitesi ve Yaş Dağılımı",
              "book": "AYT-bio",
              "pages": [
                146,
                147,
                148
              ]
            }
          ],
          "coverage": "covered",
          "page": 5
        },
        {
          "id": "ayt-biyoloji-09",
          "title": "Genden Proteine",
          "counts": [
            null,
            2,
            3,
            2,
            2,
            1,
            2,
            2
          ],
          "rawCounts": [
            "",
            "2",
            "3",
            "2",
            "2",
            "1",
            "2",
            "2"
          ],
          "reportedTotal": 14,
          "rawTotal": "14",
          "lessonIds": [
            "bio-ayt-10"
          ],
          "bookSections": [
            {
              "lessonId": "bio-ayt-10",
              "sectionIndex": 0,
              "title": "Nükleik Asitlerin Keşif Süreci ve Nükleotitlerin Yapısı",
              "book": "AYT-bio",
              "pages": [
                149,
                150,
                151,
                152,
                153
              ]
            },
            {
              "lessonId": "bio-ayt-10",
              "sectionIndex": 1,
              "title": "DNA, RNA Çeşitleri ve Genetik Materyalin Organizasyonu",
              "book": "AYT-bio",
              "pages": [
                154,
                155,
                156,
                157
              ]
            },
            {
              "lessonId": "bio-ayt-10",
              "sectionIndex": 2,
              "title": "DNA’nın Kendini Eşlemesi ve Enzim–Görev Tablosu",
              "book": "AYT-bio",
              "pages": [
                158,
                159,
                160
              ]
            },
            {
              "lessonId": "bio-ayt-10",
              "sectionIndex": 3,
              "title": "Genetik Şifre ve Protein Sentezinde Genetik Bilgi Akışı",
              "book": "AYT-bio",
              "pages": [
                161
              ]
            },
            {
              "lessonId": "bio-ayt-10",
              "sectionIndex": 4,
              "title": "Protein Sentezinin Mekanizması ve Poliribozom",
              "book": "AYT-bio",
              "pages": [
                162,
                163,
                164
              ]
            },
            {
              "lessonId": "bio-ayt-10",
              "sectionIndex": 5,
              "title": "Genetik Mühendisliği, Model Organizmalar, DNA Parmak İzi ve Gen Klonlama",
              "book": "AYT-bio",
              "pages": [
                165,
                166,
                167,
                168
              ]
            },
            {
              "lessonId": "bio-ayt-10",
              "sectionIndex": 6,
              "title": "Biyoteknolojinin İnsan Hayatına Etkisi; Biyogüvenlik ve Biyoetik",
              "book": "AYT-bio",
              "pages": [
                169,
                170,
                171
              ]
            }
          ],
          "coverage": "covered",
          "page": 5
        },
        {
          "id": "ayt-biyoloji-10",
          "title": "Canlılık ve Enerji",
          "counts": [
            null,
            0,
            0,
            0,
            1,
            1,
            1,
            0
          ],
          "rawCounts": [
            "",
            "-",
            "-",
            "-",
            "1",
            "1",
            "1",
            "-"
          ],
          "reportedTotal": 3,
          "rawTotal": "3",
          "lessonIds": [
            "bio-ayt-11"
          ],
          "bookSections": [
            {
              "lessonId": "bio-ayt-11",
              "sectionIndex": 0,
              "title": "ATP Molekülü, ATP Döngüsü ve Fosforilasyon Çeşitleri",
              "book": "AYT-bio",
              "pages": [
                172,
                173,
                174
              ]
            }
          ],
          "coverage": "grouped",
          "page": 5
        },
        {
          "id": "ayt-biyoloji-11",
          "title": "Fotosentez ve Kemosentez",
          "counts": [
            null,
            1,
            1,
            1,
            1,
            0,
            1,
            1
          ],
          "rawCounts": [
            "",
            "1",
            "1",
            "1",
            "1",
            "-",
            "1",
            "1"
          ],
          "reportedTotal": 6,
          "rawTotal": "6",
          "lessonIds": [
            "bio-ayt-11"
          ],
          "bookSections": [
            {
              "lessonId": "bio-ayt-11",
              "sectionIndex": 1,
              "title": "Fotosentezin Önemi, Genel Denklemleri, Kloroplast ve Pigmentler",
              "book": "AYT-bio",
              "pages": [
                175,
                176,
                177,
                178
              ]
            },
            {
              "lessonId": "bio-ayt-11",
              "sectionIndex": 2,
              "title": "Fotosentez Sürecinin Şeması ve Işığa Bağımlı Reaksiyonlar",
              "book": "AYT-bio",
              "pages": [
                179,
                180
              ]
            },
            {
              "lessonId": "bio-ayt-11",
              "sectionIndex": 3,
              "title": "Işıktan Bağımsız Reaksiyonlar ve Reaksiyonların Karşılaştırılması",
              "book": "AYT-bio",
              "pages": [
                180,
                181
              ]
            },
            {
              "lessonId": "bio-ayt-11",
              "sectionIndex": 4,
              "title": "Fotosentez Hızını Etkileyen Faktörler",
              "book": "AYT-bio",
              "pages": [
                182,
                183
              ]
            },
            {
              "lessonId": "bio-ayt-11",
              "sectionIndex": 5,
              "title": "Kemosentez ve Fotosentezle Karşılaştırılması",
              "book": "AYT-bio",
              "pages": [
                184,
                185
              ]
            }
          ],
          "coverage": "grouped",
          "page": 5
        },
        {
          "id": "ayt-biyoloji-12",
          "title": "Hücresel Solunum",
          "counts": [
            null,
            1,
            1,
            1,
            0,
            1,
            0,
            1
          ],
          "rawCounts": [
            "",
            "1",
            "1",
            "1",
            "-",
            "1",
            "-",
            "1"
          ],
          "reportedTotal": 5,
          "rawTotal": "5",
          "lessonIds": [
            "bio-ayt-11"
          ],
          "bookSections": [
            {
              "lessonId": "bio-ayt-11",
              "sectionIndex": 6,
              "title": "Oksijenli Solunumun Önemi, Mitokondri ve Evreleri",
              "book": "AYT-bio",
              "pages": [
                186,
                187,
                188,
                189,
                190
              ]
            },
            {
              "lessonId": "bio-ayt-11",
              "sectionIndex": 7,
              "title": "Oksijensiz Solunum, Fotosentez–Solunum İlişkisi ve Kemiosmotik Görüş",
              "book": "AYT-bio",
              "pages": [
                191,
                192,
                193
              ]
            },
            {
              "lessonId": "bio-ayt-11",
              "sectionIndex": 8,
              "title": "Etil Alkol ve Laktik Asit Fermantasyonu",
              "book": "AYT-bio",
              "pages": [
                194,
                195,
                196
              ]
            }
          ],
          "coverage": "grouped",
          "page": 5
        },
        {
          "id": "ayt-biyoloji-13",
          "title": "Bitki Biyolojisi",
          "counts": [
            null,
            3,
            0,
            2,
            2,
            0,
            2,
            2
          ],
          "rawCounts": [
            "",
            "3",
            "-",
            "2",
            "2",
            "-",
            "2",
            "2"
          ],
          "reportedTotal": 11,
          "rawTotal": "11",
          "lessonIds": [
            "bio-ayt-12"
          ],
          "bookSections": [
            {
              "lessonId": "bio-ayt-12",
              "sectionIndex": 0,
              "title": "Meristem Doku",
              "book": "AYT-bio",
              "pages": [
                197,
                198,
                199,
                200
              ]
            },
            {
              "lessonId": "bio-ayt-12",
              "sectionIndex": 1,
              "title": "Temel Doku: Parankima, Kollenkima ve Sklerenkima",
              "book": "AYT-bio",
              "pages": [
                201,
                202,
                203
              ]
            },
            {
              "lessonId": "bio-ayt-12",
              "sectionIndex": 2,
              "title": "İletim Doku: Ksilem ve Floem",
              "book": "AYT-bio",
              "pages": [
                204,
                205
              ]
            },
            {
              "lessonId": "bio-ayt-12",
              "sectionIndex": 3,
              "title": "Örtü Doku; Stoma, Hidatot ve Lentisel",
              "book": "AYT-bio",
              "pages": [
                206,
                207,
                208
              ]
            },
            {
              "lessonId": "bio-ayt-12",
              "sectionIndex": 4,
              "title": "Kök ve Gövde",
              "book": "AYT-bio",
              "pages": [
                209,
                210,
                211,
                212
              ]
            },
            {
              "lessonId": "bio-ayt-12",
              "sectionIndex": 5,
              "title": "Yaprak; Nemli ve Kurak Bölge Bitkileri",
              "book": "AYT-bio",
              "pages": [
                213,
                214
              ]
            },
            {
              "lessonId": "bio-ayt-12",
              "sectionIndex": 6,
              "title": "Bitki Gelişiminde Hormonların Etkisi",
              "book": "AYT-bio",
              "pages": [
                215,
                216,
                217
              ]
            },
            {
              "lessonId": "bio-ayt-12",
              "sectionIndex": 7,
              "title": "Tropizma, Nasti ve Fotoperiyodizm",
              "book": "AYT-bio",
              "pages": [
                218,
                219,
                220,
                221,
                222
              ]
            },
            {
              "lessonId": "bio-ayt-12",
              "sectionIndex": 8,
              "title": "Köklerde Emilim ve Ksilemde Su–Mineral Taşınması",
              "book": "AYT-bio",
              "pages": [
                223,
                224,
                225,
                226
              ]
            },
            {
              "lessonId": "bio-ayt-12",
              "sectionIndex": 9,
              "title": "Stomalar, Çevresel Faktörler ve Floemde Basınç Akış",
              "book": "AYT-bio",
              "pages": [
                227,
                228,
                229,
                230,
                231
              ]
            },
            {
              "lessonId": "bio-ayt-12",
              "sectionIndex": 10,
              "title": "Çiçek, Gametlerin Oluşumu ve Bitkilerde Eşeyli Üreme",
              "book": "AYT-bio",
              "pages": [
                232,
                233,
                234
              ]
            },
            {
              "lessonId": "bio-ayt-12",
              "sectionIndex": 11,
              "title": "Tozlaşma, Çift Döllenme, Tohum, Meyve ve Çimlenme",
              "book": "AYT-bio",
              "pages": [
                235,
                236,
                237,
                238
              ]
            }
          ],
          "coverage": "grouped",
          "page": 5
        },
        {
          "id": "ayt-biyoloji-14",
          "title": "Canlılar ve Çevre",
          "counts": [
            null,
            1,
            0,
            1,
            0,
            1,
            0,
            1
          ],
          "rawCounts": [
            "",
            "1",
            "-",
            "1",
            "-",
            "1",
            "-",
            "1"
          ],
          "reportedTotal": 4,
          "rawTotal": "4",
          "lessonIds": [
            "bio-ayt-12"
          ],
          "bookSections": [
            {
              "lessonId": "bio-ayt-12",
              "sectionIndex": 12,
              "title": "Canlılar ve Çevre: Varyasyon, Seçilim ve Adaptasyon",
              "book": "AYT-bio",
              "pages": [
                239,
                240,
                241
              ]
            }
          ],
          "coverage": "grouped",
          "page": 5
        }
      ],
      "notes": [
        "Kaynak bu ders için 2019–2025 sütunlarını içerir; 2018 verisi yoktur ve null olarak korunmuştur."
      ],
      "issues": []
    }
  ],
  "gaps": [
    {
      "id": "modular-specific",
      "topicIds": [
        "tyt-matematik-05"
      ],
      "kind": "missing-specific-guide",
      "priority": "supplementary",
      "note": "Modüler aritmetik adıyla açık ayrıntılı rehber yok. Tarihsel sıfır tek başına sınav kapsamı kanıtı değildir; 2027 resmî kapsamı doğrulanarak ek çalışma sağlanmalı.",
      "status": "resolved",
      "resolution": "mat-tyt-25 eklendi."
    },
    {
      "id": "operation-specific",
      "topicIds": [
        "tyt-matematik-09"
      ],
      "kind": "missing-specific-guide",
      "priority": "supplementary",
      "note": "Özel tanımlı işlem konusu temel aritmetikle aynı değildir; değişme-birleşme, etkisiz ve ters eleman için açık ek çalışma gerekli.",
      "status": "resolved",
      "resolution": "mat-tyt-24 eklendi."
    },
    {
      "id": "religion-source-gap",
      "topicIds": [
        "tyt-din-04",
        "tyt-din-05",
        "tyt-din-07"
      ],
      "kind": "missing-source-pages",
      "priority": "required-coverage-review",
      "sourceBook": "TYT-din",
      "sourcePages": [
        27,
        28,
        29,
        30,
        31,
        32,
        33,
        34,
        35,
        36,
        37,
        38,
        39,
        40,
        41,
        42,
        43,
        44,
        45,
        46
      ],
      "note": "Mevcut din rehberinde 27–46 sayfaları için bölüm yok. Gençlik ve Değerler, Allah–İnsan İlişkisi ve Vahiy ve Akıl konuları için gerçek kaynak başlıkları incelenip ayrı alt bölümler eklenmeli.",
      "status": "resolved",
      "resolution": "din-08, din-09 ve din-10 ile kaynak kitabın eksik 27–46. sayfaları ve ilgili alt başlıklar eklendi."
    },
    {
      "id": "shared-geometry-access",
      "topicIds": [
        "tyt-geometri-02",
        "tyt-geometri-03",
        "tyt-geometri-04"
      ],
      "kind": "cross-exam-navigation",
      "priority": "required-access",
      "note": "TYT geometri için gerekli analitik/çember/dönel cisim bilgisi mevcut AYT etiketli derslerde; konu yolundan erişim verilmesi gerekli.",
      "status": "navigation-integrated",
      "resolution": "Müfredat konu bağlantıları farklı sınav etiketli ortak geometri derslerini açar."
    }
  ],
  "coverageDefinitions": {
    "covered": "Konu mevcut ders/kitap rehberinde doğrudan ele alınır.",
    "grouped": "Konu bir veya birkaç mevcut dersin belirli rehber bölümlerine bağlıdır; ders adı geniş olabilir.",
    "cross-exam": "İlgili bilgi farklı sınav etiketi taşıyan ortak/ön koşul dersindedir; resmî kapsam beyanı değildir.",
    "partial": "Ön koşul veya kısmi anlatım vardır; konuya özgü ayrıntılı rehber eksikliği saptanmıştır."
  },
  "validation": {
    "tableCount": 15,
    "topicCount": 228,
    "mappedTopicCount": 228,
    "uniqueMappedLessonCount": 186,
    "historicalBlankCellCount": 95,
    "absentYearCellCount": 82,
    "trueBlankCellCount": 13,
    "sourceIssueCount": 18,
    "arithmeticMismatchCount": 7,
    "validatedAgainstLessonCount": 197,
    "mappingRevision": "Verbal units, corrected philosophy routing, and math supplements integrated"
  }
};
