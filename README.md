# Net Atlası · learn_with_ai

**TYT Türkçe, Sosyal, matematik ve TYT/AYT Fen** kaynaklarını siteden çıkmadan okuyup anlatım içindeki görsellerle çalışmak için hazırlanmış bir öğrenme alanı.

**Site:** https://majevsong.github.io/learn_with_ai/

## Sorularla çalışma

Yüklenen `CS_TYT_2018_2026.pdf` ve `CS_AYT_SAY_2018_2026.pdf` derlemeleri **2018–2026 dahil dokuz yılı** kapsar. Bu iki dosyadaki **1.780 soru** özgün görselleri ve kaynak iziyle sitede bulunur:

| Ders | TYT | AYT |
| --- | ---: | ---: |
| Türkçe | 360 | — |
| Matematik | 359 | 349 |
| Fizik | 63 | 126 |
| Kimya | 61 | 113 |
| Biyoloji | 53 | 116 |
| Tarih | 45 | — |
| Coğrafya | 45 | — |
| Felsefe | 90 | — |

Her soruda gereken bilgiler, gerçek çözüm adımları, çeldirici yanılgısı, kavram bağlantısı ve özgün beş seçenekli bir uygulama bulunur. Soruya bağlı anlatım veya kaynak kitabı site içinde açılır. Anlatım sayfalarında da ilgili ÖSYM sorularına geri bağlantılar vardır. Matematik kaynakları TYT ve AYT MEBİ kitaplarından okunabilir.

`#sorular` ekranı sınav, ders, yıl, konu, metin ve çalışma durumuna göre süzülür. `#baglantilar` tablosundaki her sayı ilgili gerçek sorulara açılır. Dağılımlar yalnız yüklenen derlemelerin sayımıdır; tüm özgün sınav kitapçıklarının eksiksiz dökümü veya gelecek sınav için olasılık değildir. Bu TYT derlemesinde Din Kültürü soruları yoktur; 90 felsefe sorusunun 45’i kaynakta yıldızlı ilave gruptandır ve ayrıca süzülebilir.

Numaralar MEB derlemesinin konu sırasıdır; özgün ÖSYM kitapçık numarası gibi sunulmaz. 646 özgün dosya sayfası ve 27 ortak metin grubu korunur. Cevap anahtarındaki eksik/çakışan kayıtlar ile saptanan baskı tutarsızlıkları ilgili soruda görünür; çözümle yapılan doğrulama, resmî kaynaktan doğrulamadan not içinde ayrılır. İki doğru gösterim bulunan veya verisiyle anahtarı çelişen sorular tek cevaplı doğru/yanlış değerlendirmesine zorlanmaz.

Ayrıca altı fen uygulaması birden fazla geçmiş sorudaki kavramı aynı problemde birleştirir; koşulları ve çıkış soruları açıkça gösterilir. Özgün uygulamalar yapay zekâ desteğiyle hazırlanmıştır; ÖSYM sorusu veya çıkacağı garanti edilen tahmin diye sunulmaz.

## Kapsam

- TYT Türkçe, Tarih, Coğrafya, Felsefe ve Din Kültürü.
- TYT/AYT fizik, kimya ve biyolojide kavramsal bilgiler, mekanizmalar ve grafik yorumlama.
- 128 konuya özgün kitap bölümleri üzerinden giriş; kitap ve ona bağlı açıklama aynı çalışma alanında.
- 60 fen konusu için kaynak başlığına, sayfaya, tabloya ve grafiğe bağlı ayrıntılı açıklamalar ve gerekçeli kontrol soruları.
- Resmî MEBİ kitaplarını sayfa sayfa site içinde açan okuyucu, büyütme ve içindekilerden konuya gitme.
- Bölüm ve sayfa seçimiyle eşleşen açıklama; aynı sayfadaki farklı şekiller için ayrı okuma adımları. Basılı kitap numarası ve dosya numarası ayrı gösterilir.
- 256 hafıza kartı ve 128 açıklamalı soru.
- 96 TYT ve 32 AYT dersi; derslerde ve kartlarda sınav düzeyi filtresi.
- Osmoz, enzim, protein sentezi, tanecik modeli, periyodik eğilimler, kimyasal denge ve enerji, dalga, devre, mercek ve sıvı basıncı için 11 etkileşimli model.
- Etkileşimli kavram şemaları, karşılaştırmalar ve zaman çizelgeleri.
- Kitaptaki anlatımı destekleyen çalışma notları, açıklamalı kontrol soruları ve hafıza kartları.
- 1–3–7–14–30–60 gün aralıklarıyla tekrar.
- Cihazda ilerleme kaydı, JSON yedekleme ve geri yükleme. Sorudan geri dönünce veya sayfayı yenileyince seçilen kitap bölümü ve sayfası korunur.
- Din kültürü görünürlüğünü çalışma tercihlerinden değiştirme.

Fen anlatımları kitabın ilgili bölüm sırasını izler; tanımlar, tablolar, mekanizmalar ve grafikler özgün sayfayla birlikte açıklanır. Türkçe ve sosyalde özgün kitabın bölüm sırası ve sayfaları ana metindir; önceki çalışma notları yalnız kendi kitap bölümüne bağlanır. Başka bir kaynaktan gelen notlar kitap sayfasına aitmiş gibi gösterilmez. Matematikte soru analizleri ve özgün kaynak kitapları bulunur. AYT Edebiyat ve AYT Sosyal dersleri kapsamda değildir.

## Çalıştırma

Node.js ile, paket kurulumu gerektirmeden:

```sh
npm start
```

Tarayıcıda http://127.0.0.1:4173 adresini aç. Statik sunucu kullanımı önerilir; `file://` üzerinden tarayıcı depolaması davranışı değişebilir.

```sh
npm test
```

Kontrol; 128 dersin yapısını, kitapla çalışma bölümlerinin sırasını, sayfa eşlemesini, kaynakla açıklamanın birlikte gösterimini, 1.780 sorunun bire bir analiz kapsamını, benzersiz kimlikleri, seçenekleri, alıştırmaları, kaynak sayfalarını, görsel dosyalarını ve bağlantıları doğrular. İçerik doğruluğu ayrıca gözden geçirilmelidir.

## Kaynaklar ve içerik

Türkçe, tarih ve coğrafya için yerel TYT kitapları; fizik, kimya ve biyoloji için yerel TYT ve AYT kitapları kullanıldı. Dokuz kitabın konu dizinleri `data/sources.js`, güncel resmî kitap görüntüsü adresleri `data/source-resources.js` içindedir. Felsefe ve din kültürü için resmî MEBİ kitapları da okuyucuya eklendi. Özgün konu kitabı sayfaları MEB'nin içerik sunucusundan görüntülenir. Matematik kitapları ve soru derlemelerinin kaynak tanımları `data/exam-sources.js` içindedir. Kullanıcının yüklediği soru derlemelerinden alınan WebP sayfa ve soru görselleri `assets/exams/` altında tutulur; PDF dosyaları depoya alınmaz.

`science-visuals.js` içindeki modeller şematiktir; her biri varsayımlarını ve sınırlarını belirtir. Mevcut ders kimlikleri ve tarayıcı kayıt anahtarı korunduğu için önceki ilerleme kayıtları çalışmaya devam eder.

Kitapla çalışma akışı `book-study.js` ve `book-study.css` içindedir. Fen açıklamaları `data/book-physics.js`, `data/book-biology.js`, `data/book-chemistry.js` dosyalarında başlık, basılı sayfa, bakılacak şekil/tablo, açıklama ve kontrol sorusu olarak tutulur. `data/book-verbal.js`, gerçek kitap içindekilerinden ve tanımlanmış bölüm aralıklarından `node scripts/build_book_guides.cjs` ile üretilir. Eski çalışma notları `data/biology-reading.js`, `data/core-reading.js`, `data/applied-reading.js` içinde korunur; fen konularında bunların yerine yeni kitap açıklamaları gösterilir. `source-reader.js` özgün sayfayı büyütür ve sayfa değişimini açıklamayla eşler. Kitabın tamamı ve tüm içindekiler ayrıca okuyucudan erişilebilir.

Görselleştirilmiş anlatımlar ve örnek sorular yapay zekâ desteğiyle özgün olarak hazırlanmıştır. Kaynaklar veya ÖSYM tarafından onaylandığı iddia edilmez. Şemalar kavramları anlatır; süre ve mesafeleri ölçekli göstermez. Özgün kitap görüntüleri MEB'ye aittir ve resmî kaynak bağlantısı okuyucuda korunur. İçerik düzeltmeleri için GitHub issue açılabilir.

## Soru verisini yeniden üretme

PDF’ler proje klasörünün bir üstündeyken Python ve PyMuPDF ile:

```sh
python scripts/ingest_exams.py --render
python scripts/prepare_exam_assets.py
node scripts/build_exam_data.cjs
npm test
```

İlk iki adım kullanıcı PDF’lerinden soru metni, yıl, konu, kaynak konumu, ortak pasaj ve görsel çıkarır. `.qa/exam-corpus/` yerel inceleme çıktılarıdır ve yayımlanmaz. `data/exam-*.js` derslere ayrılmış analiz dosyalarıdır; `build_exam_data.cjs` bunları tek `data/exam-analyses.js` dosyasında birleştirir ve yinelenen kimlikleri reddeder. Çıkarım betiği içerik çözümü üretmez; soru analizleri ayrıca okunup yazılmıştır.

## Gizlilik

Üyelik, sunucu, API anahtarı veya ücretli AI bağlantısı gerektirmez. Ders ilerlemesi `net-atlasi-v1`, çıkmış soru çalışması `net-atlasi-exams-v1` anahtarıyla `localStorage` içinde bu tarayıcıya kaydedilir. JSON yedeği iki kayıt grubunu da içerir; eski ders yedekleri de yüklenebilir. Kitapla çalışma konumu ayrıca `net-atlasi-book-study-v1` anahtarında saklanır; bu okuma konumu ilerleme yedeğinin parçası değildir. Tarayıcı verileri silinirse ilerleme kaybolabilir. Cihazlar arasında otomatik eşitleme yoktur; yedek dosyasını indirip diğer cihazda yükleyebilirsin.

Google Fonts yüklenemezse sistem yazı tipleri kullanılır. Dersler ve uygulama haricî JavaScript bağımlılığı içermez. İlk çevrim içi yüklemeden sonra garantili çevrim dışı kullanım sağlayan bir servis çalışanı bu sürümde yoktur.

## GitHub Pages

`main` dalına gönderimden sonra `.github/workflows/pages.yml`, içerik kontrollerini çalıştırır ve yalnız site dosyalarını GitHub Pages'e yayımlar. Depoda **Settings → Pages → Source: GitHub Actions** seçilmelidir.

Yeni dersler ilgili `data/*.js` dosyasına aynı şemayla eklenebilir. Önce `npm test` çalıştırılmalıdır.
