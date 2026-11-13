/* Selected official sources, verified on 2026-11-13 (Europe/Istanbul).
   Catalog links are deliberately kept distinct from direct books and exam scope.
   Descriptions are original catalog notes; no source book/question text is copied. */
'use strict';
window.OFFICIAL_STUDY_SOURCES = (() => {
  const checkedAt = '2026-11-13';
  const all = ['turkce','tarih','cografya','felsefe','din','matematik','fizik','kimya','biyoloji'];
  const quantitative = ['matematik','fizik','kimya','biyoloji'];
  const core = ['turkce','tarih','cografya','felsefe','matematik','fizik','kimya','biyoloji'];
  const source = (id,title,url,kind,subjects,description,extra={}) => {
    const entry = {
      id,title,url,provider:'MEB · OGM Materyal',kind,exams:['TYT','AYT'],subjects,
      description,checkedAt,access:'catalog',notes:[],...extra
    };
    entry.examSubjects = Object.fromEntries(entry.exams.map(exam => [exam,
      exam==='AYT' ? entry.subjects.filter(subject => quantitative.includes(subject)) : [...entry.subjects]
    ]));
    entry.exams = entry.exams.filter(exam => entry.examSubjects[exam].length);
    return entry;
  };
  const ogm = (id,title,path,kind,subjects,description,extra={}) => source(id,title,'https://ogmmateryal.eba.gov.tr/'+path,kind,subjects,description,{
    verification:'Resmî katalog bağlantısı ve herkese açık sayfa erişimi kontrol edildi; katalogdaki her kitabın içeriği tek tek incelenmedi.',...extra
  });
  const programs = [
    ['matematik','Matematik',343,['TYT','AYT']],
    ['fizik','Fizik',351,['TYT','AYT']],
    ['kimya','Kimya',350,['TYT','AYT']],
    ['biyoloji','Biyoloji',361,['TYT','AYT']],
    ['turkce','Türk dili ve edebiyatı · Türkçe becerileri',353,['TYT']],
    ['cografya','Coğrafya',336,['TYT']],
    ['felsefe','Felsefe',338,['TYT']],
    ['din','Din kültürü ve ahlak bilgisi',319,['TYT']],
    ['tarih','Tarih · 2023 programı',1265,['TYT']]
  ].map(([subject,title,pid,exams]) => source('program-'+subject,title+' öğretim programı','https://mufredat.meb.gov.tr/ProgramDetay.aspx?PID='+pid,'program',[subject],
    'TTKB program kataloğunun önceki ortaöğretim programları bölümündeki ders sayfası. Kazanımları ve açıklama sınırlarını kaynak belgeden kontrol etmek için kullanılır.',{
      provider:'MEB · Talim ve Terbiye Kurulu',exams,access:'public',applicability:'previous-program-reference',
      notes:[subject==='turkce'?'Bu sitede yalnız TYT Türkçe becerileriyle ilişkilidir; AYT edebiyat çalışması kapsam dışındadır.':'2027 sınavına özel kesin kapsam belgesi olarak etiketlenmez.'],
      verification:'TTKB ana sayfasından öğretim programları listesi ve ilgili dersin ayrıntı sayfası açılarak doğrulandı.'
    }));
  return {
    checkedAt,timezone:'Europe/Istanbul',targetYear:2027,
    scopeNote:'TYT: Türkçe, tarih, coğrafya, felsefe, din kültürü, matematik, fizik, kimya ve biyoloji. AYT: yalnız matematik, fizik, kimya ve biyoloji. Resmî kataloglarda bulunan diğer AYT dersleri bu çalışma alanına dahil değildir.',
    scanNote:'Seçilmiş resmî MEB/ÖSYM program, ders kitabı, özet, test, deneme ve etkileşimli içerik kataloglarının taramasıdır. Bir bağlantının doğrulanması, katalogdaki bütün içeriklerin tek tek tarandığı veya 2027 sınav kapsamı ilan edildiği anlamına gelmez.',
    examStatus:{
      targetYear:2027,checkedAt,
      title:'2027 YKS · doğrulanan durum',
      dates:{TYT:'2027-06-19',AYT:'2027-06-20',applicationStart:'2027-02-04',applicationEnd:'2027-03-02',results:'2027-07-21'},
      datesStatus:'officially-announced',
      datesUrl:'https://www.osym.gov.tr/yks-19-20-haziran-2027de-yapilacak',
      guideStatus:'not-verified-in-this-check',
      guideNote:'13 Kasım 2026 taramasında 2027-YKS kılavuzu ve 2027 yılına özel sınava esas konu/kazanım duyurusu doğrulanamadı. Kesin kapsam için yeni ÖSYM ve TTKB duyuruları yeniden kontrol edilmelidir.',
      latestVerifiedScopeYear:2026,
      scopeReferenceUrl:'https://ttkb.meb.gov.tr/www/osym-tarafindan-2026-yilinda-gerceklestirilecek-quotyuksekogretim-kurumlari-sinavi-yksquotna-esas-derslere-ait-konu-ve-kazanimlar/icerik/831/tr',
      scopeReferenceNote:'26 Kasım 2025 tarihli TTKB duyurusu 2026-YKS içindir; 2027 için yayımlanmış kesin konu listesi yerine kullanılamaz.',
      cohortNote:'OGM’nin 1 Eylül 2026 duyurusuna göre 2026–2027 yılında hazırlık, 9, 10 ve 11. sınıflarda TYMM; 12. sınıfta önceki öğretim programları uygulanır.',
      cohortUrl:'https://ogm.meb.gov.tr/www/2026-2027-egitim-ogretim-yili-turkiye-yuzyili-maarif-modeli-taslak-cerceve-planlar-yayimlandi/icerik/2633',
      transitionYear:2028,
      transitionNote:'MEB’in 16 Ocak 2026 açıklaması, yeni programla öğrenim gören ilk grubun 2028’de YKS’ye gireceğini ve soru havuzunun yeni kitap/programlara uyarlanacağını belirtir. Bu açıklama 2027’ye yeni program kapsamı atamak için kullanılmaz.',
      transitionUrl:'https://meb.gov.tr/bakan-tekin-trt-habere-egitim-gundemini-degerlendirdi/haber/39552/tr',
      writtenExamNote:'2026–2027 konu-soru dağılım tabloları okul ortak yazılı sınavlarına aittir. TYT/AYT’de konu başına çıkacak soru sayısını açıklamaz.',
      writtenExamUrl:'https://odsgm.meb.gov.tr/www/1donem-konu-soru-dagilim-tablolari-2026-2027/icerik/1724',
      historicalDistributionNote:'Yerel 2018–2025 soru dağılım dosyaları geçmiş sınavlara dayalı çalışma önceliği kaynaklarıdır. Gelecek sınavın resmî soru dağılımı ya da soru garantisi değildir.',
      verifiedUrls:[
        'https://www.osym.gov.tr/yks-19-20-haziran-2027de-yapilacak',
        'https://osym.gov.tr/SinavGrubu/Index/2',
        'https://ttkb.meb.gov.tr/',
        'https://mufredat.meb.gov.tr/Programlar.aspx',
        'https://ogm.meb.gov.tr/www/2026-2027-egitim-ogretim-yili-turkiye-yuzyili-maarif-modeli-taslak-cerceve-planlar-yayimlandi/icerik/2633',
        'https://meb.gov.tr/bakan-tekin-trt-habere-egitim-gundemini-degerlendirdi/haber/39552/tr'
      ]
    },
    sources:[
      ogm('ogm-yks','OGM YKS hazırlık merkezi','YKSHazirlik','summary',all,'Özet, soru, deneme ve video bölümlerine açılan resmî başlangıç sayfası.'),
      source('mebi','MEBİ bireysel öğrenme platformu','https://mebi.eba.gov.tr/','interactive',all,'Konu anlatımı, özet, video çözüm ve bireysel çalışma araçları sunar.',{provider:'MEB · MEBİ',access:'login',notes:['İçeriklere erişim için EBA, e-Devlet veya MEBBİS girişi gerekir.','YKS Hazırlık bölümünde sınavı ve dersi seç.'],verification:'MEBİ ana sayfasındaki içerik ve giriş açıklamaları açılarak doğrulandı.'}),
      ogm('mebi-summaries','MEBİ konu özeti kitapları','mebi-konu-ozeti-kitaplari','summary',core,'Ders ve sınav seçerek kısa tekrar kitaplarına ulaş. Ayrıntılı öğrenmede ders kitabı ve uygulamalarla birlikte kullan.'),
      ogm('mebi-screening','MEBİ tarama testi kitapları','mebi-tarama-testi-kitaplari','questions',core,'Konu bilgisini yoklamak ve eksik kalan alt beceriyi belirlemek için test kataloğu.'),
      ogm('mebi-mocks','MEBİ YKS denemeleri','mebi-yks-denemeleri','practice',all,'TYT ve AYT deneme kaynaklarını seç; sonuçtan sonra yanlışları konuya geri bağlayarak çalış.'),
      ogm('past-question-books','YKS çıkmış soru kitapları','yks-cikmis-soru-kitaplari','questions',core,'Geçmiş YKS sorularının resmî çalışma kitaplarına açılan katalog. Yıl aralığını seçtiğin kitabın kapağından kontrol et.'),
      ogm('past-video-solutions','YKS çıkmış soru çözümleri','yks-cikmis-soru-cozumleri','questions',core,'Geçmiş soru çözümünü inceleyerek kullanılan bilgiyi ve çözüm basamaklarını değerlendir.'),
      ogm('three-step-bank','3 Adım soru bankası','3-adim-soru-bankasi','questions',core,'Konu çalışmasının ardından aşamalı soru uygulaması için resmî soru bankası kataloğu.'),
      ogm('three-step-mocks','3 Adım deneme sınavları','3-adim-deneme-sinavlari','practice',core,'Süreli deneme ve ardından ders/konu analizi için kullanılabilecek deneme kataloğu.'),
      ogm('four-four','Dört Dörtlük konu pekiştirme testleri','dort-dortluk-konu-pekistirme-testleri','questions',core,'Öğrenilen konuyu farklı soru uygulamalarıyla pekiştirmek için sınav ve ders seç.'),
      ogm('yks-videos','YKS konu anlatımları · video','konu-anlatimlari-video','summary',core,'Konu anlatım videosunu seç; izledikten sonra ana ilişkiyi kendin açıklayıp örnek soru çöz.'),
      ogm('yks-camp','YKS kampı','yks-kampi','practice',core,'Tekrar çalışmalarını konu anlatımı ve soru uygulamasıyla yürütmek için kamp kataloğu.'),
      ogm('textbooks','OGM ders kitapları','ders-kitaplari','textbook',all,'Sınıf, ders ve kitap seçerek konu açıklamalarına ve etkileşimli kitaplara ulaş.',{notes:['Katalogda önceki program ile TYMM kitapları bir arada bulunabilir. 2027 çalışması için kitap sürümünü ve programını kontrol et.']}),
      ogm('course-summaries','Sınıf düzeyinde konu özetleri','konu-ozetleri','summary',core,'Ders kitabındaki konuya dönmeden önce ana kavramları gözden geçirmek için özet kataloğu.'),
      ogm('course-slides','Ders anlatım sunuları','ders-anlatim-sunulari','summary',core,'Ders ve sınıf seçerek görsel anlatım sunularıyla konunun ilişkilerini tekrar et.'),
      ogm('skill-books','Beceri temelli etkileşimli kitaplar','beceri-temelli-etkilesimli-kitaplar','interactive',core,'Bilgiyi yorumlama ve uygulama çalışmaları için ders/sınıf bazlı etkinlik kitapları.',{notes:['Eski program ve TYMM sürümleri aynı katalogda bulunabilir; seçilen kitabın program etiketini kontrol et.']}),
      ogm('skill-outcomes','Kazanım bazlı beceri etkinlikleri','beceri-temelli-kazanim','questions',core,'Ders, ünite ve kazanıma göre etkinlik bularak belirli bir eksiği çalış.',{notes:['Katalogdaki 2017–23 müfredatı etiketlerini TYMM sürümlerinden ayır.']}),
      ogm('concept-books','Kavram öğretimi etkileşimli kitapları','kavram-ogretimi-etkilesimli-kitaplari','interactive',core,'Birbirine karışan kavramları örnek, bağlam ve uygulama ile ayırt etmek için kullan.'),
      ogm('dynamic-apps','Dinamik uygulamalar','dinamik-uygulamalar','interactive',['matematik','fizik','biyoloji'],'Değişkenleri değiştirip sonuçları gözleyerek matematiksel ve bilimsel ilişkileri araştır.'),
      ogm('interactive-apps','Etkileşimli uygulamalar','etkilesimli-uygulamalar','interactive',core,'Kavramları ve ders içi uygulamaları etkileşimli içeriklerle incele.'),
      ogm('experiments','Fen deneyleri','deneyler','interactive',['fizik','kimya','biyoloji'],'Deney düzeneklerini ve gözlemleri incele; değişken, ölçüm ve sonuç arasındaki bağı açıkla.'),
      ogm('models-3d','3B modeller','3b-modeller','interactive',['fizik','kimya','biyoloji'],'Yapı ve sistemleri üç boyutlu modeller üzerinde incelemek için resmî içerik kataloğu.'),
      source('four-four-tyt-math','Dört Dörtlük · TYT matematik kitabı','https://ogmmateryal.eba.gov.tr/panel/upload/etkilesimli/kitap/konu-pekistirme/tyt/matematik/index.html','questions',['matematik'],'Doğrudan açılan etkileşimli TYT matematik pekiştirme kitabı.',{exams:['TYT'],access:'public',verification:'Resmî kitap sayfası açıldı; sayfa başlığı ve kitap erişimi doğrulandı.'}),
      source('skill-biology-11','Biyoloji 11 · beceri temelli etkinlik kitabı','https://ogmmateryal.eba.gov.tr/panel/upload/etkilesimli/kitap/beceri_temelli/11/biyoloji/index.html','interactive',['biyoloji'],'Önceki programın 11. sınıf biyoloji etkinliklerine doğrudan erişim.',{exams:['AYT'],access:'public',applicability:'previous-program-reference',verification:'Resmî kitap sayfası açıldı; sayfa başlığı ve kitap erişimi doğrulandı.'}),
      ...programs,
      source('ttkb-programs','TTKB öğretim programları kataloğu','https://mufredat.meb.gov.tr/Programlar.aspx','program',all,'Önceki ortaöğretim programları ve TYMM programları ayrı başlıklarla listelenir.',{provider:'MEB · Talim ve Terbiye Kurulu',verification:'TTKB ana sayfasının öğretim programları bağlantısından katalog açıldı; TYMM ve önceki ortaöğretim başlıkları ile bu çalışmadaki dokuz dersin ayrıntı bağlantıları doğrulandı. Katalogdaki bütün programların tam metni incelenmedi.',notes:['Programın güncel olması, her sınıfın aynı yıl o programa geçtiği anlamına gelmez. Kademeli uygulama duyurusuyla birlikte değerlendir.']}),
      source('ttkb-yks-2026','2026-YKS için resmî konu ve kazanım duyurusu','https://ttkb.meb.gov.tr/www/osym-tarafindan-2026-yilinda-gerceklestirilecek-quotyuksekogretim-kurumlari-sinavi-yksquotna-esas-derslere-ait-konu-ve-kazanimlar/icerik/831/tr','program',all,'Doğrulanan sınava özel TTKB referansı 2026 yılına aittir.',{provider:'MEB · Talim ve Terbiye Kurulu',access:'public',publishedAt:'2025-11-26',referenceYear:2026,verification:'26 Kasım 2025 tarihli duyuru metni açıldı; kapsam yılının 2026 olduğu ve resmî PDF bağlantısı doğrulandı. Yaklaşık 22 MB PDF metin tarayıcısının boyut sınırını aştı; tamamının bu taramada okunduğu iddia edilmez.',notes:['2027 için kesin kapsam ilanı olarak sunulmaz.','Duyurudaki bağlantı yaklaşık 22 MB boyutunda resmî PDF açar.']}),
      source('osym-dates-2027','ÖSYM · 2027 YKS tarihleri','https://www.osym.gov.tr/yks-19-20-haziran-2027de-yapilacak','exam-info',all,'TYT 19 Haziran, AYT 20 Haziran 2027. Başvuru aralığı 4 Şubat–2 Mart olarak duyuruldu.',{provider:'ÖSYM',access:'public',referenceYear:2027,verification:'ÖSYM haber metni açıldı; 2027 TYT ve AYT tarihleri, başvuru aralığı ve sonuç tarihi metinden kontrol edildi. Haber, 2027 sınav kapsamı veya kılavuzunun yayımlandığı kanıtı olarak kullanılmaz.'}),
      source('osym-yks','ÖSYM YKS duyuruları','https://osym.gov.tr/SinavGrubu/Index/2','exam-info',all,'Yeni yılın kılavuz, kapsam ve uygulama duyurularını resmî kaynaktan izlemek için başvuru noktası.',{provider:'ÖSYM',access:'catalog',verification:'YKS sınav grubu kataloğu açıldı; yıl seçimi ve listelenen duyuru, kılavuz ve soru kitapçığı bağlantıları kontrol edildi. Bütün arşiv bağlantıları tek tek açılmadı; 2027 kılavuzu bu kontrolde doğrulanamadı.'}),
      source('osym-papers-2026','ÖSYM · 2026 TYT ve AYT kitapçıkları','https://www.osym.gov.tr/2026yks-tyt-ayt-ve-ydt-temel-soru-kitapciklari-ve-cevap-anahtarlari','questions',all,'2026 sınavının resmî kitapçıklarına ve cevap anahtarlarına bağlantı sağlar.',{provider:'ÖSYM',access:'public',referenceYear:2026,verification:'Resmî 2026 kitapçık liste sayfası ve 21 Haziran 2026 yayım duyurusu açıldı; TYT/AYT PDF bağlantıları, sınav tarihleri ve telif açıklaması kontrol edildi. Bağlantılı kitapçıkların bütün soruları bu kaynak taramasında yeniden incelenmedi.',notes:['AYT’de bu sitede yalnız matematik ve fen testleri çalışılır.','Soruların telifi ÖSYM’ye aittir; burada yeniden yayımlanmaz.']}),
      source('mebi-calendar-2027','MEBİ · 2026–2027 deneme programı','https://ogm.meb.gov.tr/www/mebi-2026-2027-yks-deneme-takvimi-belli-oldu/icerik/2641','practice',all,'12. sınıf ve mezunlar için yıl boyunca 12 Türkiye geneli YKS denemesi duyuruldu; katılım ve video çözümler MEBİ üzerinden sunulur.',{provider:'MEB · Ortaöğretim Genel Müdürlüğü',access:'public',publishedAt:'2026-09-17',verification:'17 Eylül 2026 tarihli OGM duyurusu açıldı; 12 deneme, hedef öğrenci grubu, ilk deneme aralığı ve MEBİ erişim açıklaması kontrol edildi. Hesap gerektiren denemelere girilmedi; bütün deneme içerikleri ve ayrı takvim görselinin her tarihi incelenmedi.',notes:['Duyuru sayfası herkese açıktır; denemelere katılım MEBİ hesabı gerektirir.']}),
      source('cohort-2027','2026–2027 sınıflarına göre program uygulaması','https://ogm.meb.gov.tr/www/2026-2027-egitim-ogretim-yili-turkiye-yuzyili-maarif-modeli-taslak-cerceve-planlar-yayimlandi/icerik/2633','exam-info',all,'OGM, 12. sınıfta önceki programların sürdüğünü; TYMM’nin hazırlık, 9, 10 ve 11. sınıflarda uygulandığını açıklar.',{provider:'MEB · Ortaöğretim Genel Müdürlüğü',access:'public',publishedAt:'2026-09-01',verification:'1 Eylül 2026 tarihli OGM duyuru metni açıldı; hazırlık/9/10/11 için TYMM ve 12. sınıfta önceki programın sürmesi açık ifadeden doğrulandı. Bağlantılı bütün taslak yıllık plan arşivleri incelenmedi.'}),
      source('transition-2028','MEB · 2028 yeni program geçiş açıklaması','https://meb.gov.tr/bakan-tekin-trt-habere-egitim-gundemini-degerlendirdi/haber/39552/tr','exam-info',all,'Yeni programla öğrenim gören ilk grubun 2028 geçiş sınavlarıyla ilgili açıklamayı içerir.',{provider:'Millî Eğitim Bakanlığı',access:'public',publishedAt:'2026-01-16',contextOnly:true,verification:'16 Ocak 2026 tarihli Bakanlık haberinin ilgili bölümü açılarak okundu; ilk yeni program grubunun 2028 geçiş sınavı ve soru havuzunun kitap/programlara uyarlanması açıklaması doğrulandı. Bu açıklama ayrıntılı 2027 veya 2028 sınav kapsam belgesi değildir.',notes:['2027 YKS’ye yeni program atamak için kullanılmaz.']}),
      source('tymm-programs','TYMM güncel öğretim programları','https://tymm.meb.gov.tr/ogretim-programlari','program',all,'Yeni modelin ders ve öğrenme çıktısı kataloğu; program geçişini incelemek için bağlam kaynağı.',{provider:'MEB · Türkiye Yüzyılı Maarif Modeli',contextOnly:true,verification:'TYMM ana sayfasından öğretim programları kataloğu açıldı; kademe, sınıf, ders ve ünite filtreleri ile listelenen program bağlantıları kontrol edildi. Tüm programların tam metni taranmadı; katalog 2027 YKS kapsam kanıtı sayılmaz.',notes:['2027 hazırlığında önceki programların yerine otomatik olarak geçirilmez.']}),
      source('tymm-textbooks','TYMM ders kitapları kataloğu','https://tymm.meb.gov.tr/ders-kitaplari','textbook',all,'Yeni modele ait PDF ve etkileşimli kitapların sınıf/ders kataloğu.',{provider:'MEB · Türkiye Yüzyılı Maarif Modeli',contextOnly:true,verification:'TYMM ders kitapları kataloğu açıldı; sınıf/ders/kitap filtreleri ve listelenen PDF/etkileşimli kitap bağlantıları doğrulandı. Katalogdaki bütün kitaplar tek tek açılıp okunmadı; yeni model kitapları otomatik 2027 kapsamı olarak sunulmaz.',notes:['Katalogdaki her kitap 2027 YKS kapsamını temsil etmez.']}),
      source('school-written-2026','2026–2027 okul yazılısı konu-soru tabloları','https://odsgm.meb.gov.tr/www/1donem-konu-soru-dagilim-tablolari-2026-2027/icerik/1724','exam-info',all,'Okullardaki ortak yazılı sınavların ders/sınıf tabloları; YKS konu soru dağılım belgesi değildir.',{provider:'MEB · ÖDSGM',access:'public',publishedAt:'2026-09-07',contextOnly:true,verification:'ÖDSGM liste sayfası açıldı; 7 Eylül 2026 yayım tarihi ve ders bağlantıları kontrol edildi. Samsun Ölçme Değerlendirme Merkezinin resmî açıklaması da açılarak tabloların okul ortak yazılılarına ait olduğu doğrulandı. Bütün ders tabloları tek tek taranmadı; YKS dağılımı değildir.',notes:['TYT/AYT’de konu başına soru sayısı çıkarmak için kullanılmaz.']})
    ]
  };
})();
