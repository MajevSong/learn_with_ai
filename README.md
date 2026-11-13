# Net Atlası · learn_with_ai

**TYT Türkçe ve Sosyal ile TYT/AYT matematik ve fen** kaynaklarını siteden çıkmadan okuyup anlatım içindeki görsellerle çalışmak için hazırlanmış bir öğrenme alanı.

**Site:** https://majevsong.github.io/learn_with_ai/

## Tasarım ve okuma görünümü

Arayüz, kullanıcının sağladığı beş Google Stitch ekranının HTML yapısı ve `academic_editorial_workspace/DESIGN.md` ölçüleri esas alınarak düzenlendi: çalışma masası, konu haritası, kitap üzerinden çalışma, mobil okuyucu ve ÖSYM soru incelemesi. Fildişi zemin, koyu yeşil ayrıntılar, Newsreader başlıklar ve Plus Jakarta Sans okuma yazısı kullanılır. Sol menü 256 px, üst çubuk 64 px; temel okuma metni 16,5 px / 28 px, etiketler 13/11 px olarak uygulanır. Kitap seçimi ve sayfa kontrolleri sol kaynak panelindedir. Ana sayfada Matematik ve Geometri ayrı alanlardır; Felsefe ve Din ortak modülde ayrı bağlantılarla açılır. Bilimsel Şema Kataloğu 14 farklı etkileşimli modele gider. Tasarım dosyalarındaki örnek sayılar, kazanım iddiaları ve eski tarihler aktarılmaz; içerik ve ilerleme gerçek uygulama verilerinden gelir.

Masaüstünde özgün kitap görüntüsü, o sayfanın açıklaması ve ayrıntılı anlatım sürekli iki sütunda okunur. Telefonda **Kitap / Anlatım** düğmeleri aynı bölüm ve sayfa üzerinde geçiş yapar; anlatımdaki kaynak düğmesi ilgili kitap sayfasını açar. Yazı büyütme ve odak görünümü üst çubuktan değiştirilebilir. Ana sayfadaki devam kartı, geçerli kayıtlı kitap konumunu ve varsa en son erişim zamanını kullanır. ÖSYM ekranında soru ve çözüm panelleri yan yana yer alır; telefon görünümünde sırayla gösterilir.

Tema `stitch.css`, ana sayfa `stitch-home.css`, konu haritası `stitch-curriculum.css`, soru ekranları `stitch-exams.css` içindedir. `stitch-ui.js` okuma tercihlerini ve mobil gezinmeyi yönetir. Hazır Tailwind çalıştırıcısı veya Stitch hesabına canlı bağlantı gerekmez.

## 2027 için konu konu çalışma

`#mufredat` ekranı, yüklenen TYT ve AYT konu dağılımı dosyalarındaki **228 başlığı, 15 tabloyu** kitap bölümlerine ve ayrıntılı çalışmalara bağlar. Matematik filtresi geometri tablolarını da içerir. Dosyalarda ayrı satır olmayan 11 tamamlayıcı çalışma ayrıca listelenir. Kaynakların özgün 11 sayfası site içinde açılır.

Bu tablolar **2018–2025** kayıtlarıdır; 2027 için resmî soru dağılımı değildir. AYT fen tablolarında 2018 yer almaz. Toplam 95 boş/eksik hücre `null` olarak korunur; kaynakta çizgi bulunan hücreler açıklanmış hesaplama tercihiyle 0 sayılır. Kaynaktaki toplam ile hücre toplamının uyuşmadığı yedi kayıt silinmez veya sessizce düzeltilmez. Dosya kimliği, kaynak sayfası ve özgün işaretler veride saklanır. Bu tablolar, 2018–2026 soru derlemesinin kendi sayımlarından ayrıdır.

**197 dersin tamamında 505 ayrıntılı anlatım bölümü ve çözümlü durum** bulunur: 59 matematik, 60 fen, 78 Türkçe/sosyal çalışması. Her çalışmada ön bilgiler, öğrenilecek noktalar, kaynak kitap sayfaları, açıklamalar, gerekçeli çözüm, yanılgı ve karşı örnekler, kontrol soruları ve diğer konularla bağlantılar vardır. Bağıntılar kullanım koşullarıyla açıklanır. Her kaynak sayfası düğmesi ilgili özgün görüntüyü açar. Kitap bölümlerinin tamamında sayfaya bağlı öğretmen açıklaması veya çalışma notu bulunur.

`#meb` ekranında **13 Kasım 2026 tarihinde kontrol edilmiş 44 seçilmiş MEB/ÖSYM kaynağı** yer alır. Program, ders kitabı, özet, çıkmış soru, test, deneme ve etkileşimli kataloglar; ders, sınav ve türle süzülür. Kaynağın erişim koşulu ve kontrol sınırı gösterilir; katalogdaki bütün kitapların tek tek incelendiği iddia edilmez. Ders sayfaları da ilgili resmî kaynaklara bağlanır.

[OGM’nin 2026–2027 uygulama açıklamasına](https://ogm.meb.gov.tr/www/2026-2027-egitim-ogretim-yili-turkiye-yuzyili-maarif-modeli-taslak-cerceve-planlar-yayimlandi/icerik/2633) göre 12. sınıfta önceki program sürer. 2027’ye özel kesin konu/kazanım belgesi bu taramada doğrulanamadı; doğrulanan sınava özel TTKB referansı 2026 yılına aittir. Yeni model ve okul yazılısı belgeleri bağlam kaynağı olarak ayrıca işaretlenir. Kaynak kontrol tarihi bir otomatik güncelleme hizmeti değildir.

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

## Matematik konu anlatımı

TYT ve AYT matematik ile geometri de kitap üzerinden çalışılır. Kaynaklar, yüklenen TYT Matematik kitabının basılı 9–156 ve AYT Matematik kitabının 9–137. sayfalarıdır. Özgün sayfalar; tanım, işlem koşulu, çözümlü örnek, grafik/şekil açıklaması ve gerekçeli kontrol sorusuyla birlikte gösterilir. Kitaptaki gerekli konu anlatımı sayfaları seçilebilir; mevcut fen ve sözel dersler korunur.

708 matematik sorusunun kaynak sayfası referansları, aynı sayfayı işleyen yeni derslere `math-exam-links.js` ile bağlanır. Öteleme/yansıma ve açıortay için analizi doğrudan bu kavramları kullanan beş soruya ayrıca kavram bağlantısı kurulur. Soru analizlerinin özgün metni yeniden yazılmaz. Matematik anlatımından ilgili soru arşivine ve sorudan konu anlatımına gidilebilir. Fonksiyon/parabol, birim çember ve kesen–teğet için üç etkileşimli model bulunur; modelin örnek fonksiyonu ve koşulları açıkça belirtilir.

## Kapsam

- TYT Türkçe, Tarih, Coğrafya, Felsefe ve Din Kültürü.
- TYT/AYT matematik ve geometri; temel işlemler, problemler, fonksiyonlar, cebir, trigonometri, limit, türev, integral, analitik ve katı cisimler.
- TYT/AYT fizik, kimya ve biyolojide kavramsal bilgiler, mekanizmalar ve grafik yorumlama.
- Tüm konulara özgün kitap bölümleri üzerinden giriş; kitap ve ona bağlı açıklama aynı çalışma alanında.
- 60 fen konusu için kaynak başlığına, sayfaya, tabloya ve grafiğe bağlı ayrıntılı açıklamalar ve gerekçeli kontrol soruları.
- Resmî MEBİ kitaplarını sayfa sayfa site içinde açan okuyucu, büyütme ve içindekilerden konuya gitme.
- Bölüm ve sayfa seçimiyle eşleşen açıklama; aynı sayfadaki farklı şekiller için ayrı okuma adımları. Basılı kitap numarası ve dosya numarası ayrı gösterilir.
- Her konu için hafıza kartları ve açıklamalı kontrol sorusu.
- Derslerde ve kartlarda TYT/AYT düzeyi ile matematik dahil ders filtresi.
- Osmoz, enzim, protein sentezi, tanecik modeli, periyodik eğilimler, kimyasal denge ve enerji, dalga, devre, mercek ve sıvı basıncı için 11 etkileşimli model.
- Etkileşimli kavram şemaları, karşılaştırmalar ve zaman çizelgeleri.
- Kitaptaki anlatımı destekleyen çalışma notları, açıklamalı kontrol soruları ve hafıza kartları.
- 1–3–7–14–30–60 gün aralıklarıyla tekrar.
- Cihazda ilerleme kaydı, JSON yedekleme ve geri yükleme. Sorudan geri dönünce veya sayfayı yenileyince seçilen kitap bölümü ve sayfası korunur.
- Din kültürü görünürlüğünü çalışma tercihlerinden değiştirme.

Fen anlatımları kitabın ilgili bölüm sırasını izler; tanımlar, tablolar, mekanizmalar ve grafikler özgün sayfayla birlikte açıklanır. Türkçe ve sosyalde özgün kitabın bölüm sırası ve sayfaları ana metindir; önceki çalışma notları yalnız kendi kitap bölümüne bağlanır. Başka bir kaynaktan gelen notlar kitap sayfasına aitmiş gibi gösterilmez. Matematikte de özgün kitap sayfasına bağlı konu anlatımları, çözümlü örnekler ve soru analizleri bulunur. AYT Edebiyat ve AYT Sosyal dersleri kapsamda değildir.

## Çalıştırma

Node.js ile, paket kurulumu gerektirmeden:

```sh
npm start
```

Tarayıcıda http://127.0.0.1:4173 adresini aç. Statik sunucu kullanımı önerilir; `file://` üzerinden tarayıcı depolaması davranışı değişebilir.

```sh
npm test
```

Kontrol; derslerin yapısını, kitapla çalışma bölümlerinin sırasını, sayfa eşlemesini, kaynakla açıklamanın birlikte gösterimini, 1.780 sorunun bire bir analiz kapsamını, benzersiz kimlikleri, seçenekleri, alıştırmaları, kaynak sayfalarını, görsel dosyalarını ve bağlantıları doğrular. İçerik doğruluğu ayrıca gözden geçirilmelidir.

`scripts/check-curriculum.cjs` ayrıca 197 ayrıntılı çalışmanın açıklama/örnek/koşul yapısını, kitap sayfası sınırlarını, 228 dağılım bağlantısını, boş hücrelerin korunmasını, özgün tablo görsellerini ve resmî kaynakların kapsam ayrımını denetler. Bu yapısal kontrol bilimsel doğruluk incelemesinin yerine geçmez.

## Kaynaklar ve içerik

Türkçe, tarih ve coğrafya için yerel TYT kitapları; fizik, kimya ve biyoloji için yerel TYT ve AYT kitapları kullanıldı. Dokuz kitabın konu dizinleri `data/sources.js`, güncel resmî kitap görüntüsü adresleri `data/source-resources.js` içindedir. Felsefe ve din kültürü için resmî MEBİ kitapları da okuyucuya eklendi. Özgün konu kitabı sayfaları MEB'nin içerik sunucusundan görüntülenir. Matematik kitapları ve soru derlemelerinin kaynak tanımları `data/exam-sources.js` içindedir. Kullanıcının yüklediği soru derlemelerinden alınan WebP sayfa ve soru görselleri `assets/exams/` altında tutulur; PDF dosyaları depoya alınmaz.

`science-visuals.js` içindeki modeller şematiktir; her biri varsayımlarını ve sınırlarını belirtir. Mevcut ders kimlikleri ve tarayıcı kayıt anahtarı korunduğu için önceki ilerleme kayıtları çalışmaya devam eder.

Yeni çalışmalar `data/topic-dossiers-{math,science,verbal}.js`, dağılımlar `data/topic-distributions.js`, resmî kaynaklar `data/official-sources.js` içindedir. `curriculum.js` konu/kaynak ekranlarını, `topic-dossiers.js` ayrıntılı anlatımı oluşturur. Yeni dersler ve boş kitap bölümleri ayrı ek dosyalarla tamamlanır; eski notlar korunur. Kaynakta doğrulanan bölüm adı ve coğrafya sırası düzeltmeleri, başlıkla eşleşen açıklama ekleri yüklendikten sonra `data/book-section-labels.js` ile uygulanır. Bu yükleme sırası korunmalıdır.

Felsefede eski konu dizininin mantıksal numaraları ve kayıtları korunur; özgün görüntüye ve ekranda basılı numaraya dönüşüm +2'dir. Diğer derslerde görüntü ofsetiyle basılı numara ayrı hesaplanır. Felsefe tarihi derslerinden gerçek sorulara ek bağlantıları `topic-study-links.js` kurar; soru analizlerinin özgün metni değişmez.

Kitapla çalışma akışı `book-study.js` ve `book-study.css` içindedir. Fen açıklamaları `data/book-physics.js`, `data/book-biology.js`, `data/book-chemistry.js` dosyalarında başlık, basılı sayfa, bakılacak şekil/tablo, açıklama ve kontrol sorusu olarak tutulur. `data/book-verbal.js`, gerçek kitap içindekilerinden ve tanımlanmış bölüm aralıklarından `node scripts/build_book_guides.cjs` ile üretilir. Eski çalışma notları `data/biology-reading.js`, `data/core-reading.js`, `data/applied-reading.js` içinde korunur; fen konularında bunların yerine yeni kitap açıklamaları gösterilir. Matematik dersleri `data/math-tyt.js`, `data/math-ayt.js`, `data/math-geometry.js`; kitap açıklamaları karşılık gelen `data/book-math-*.js` dosyalarındadır. `math-visuals.js` üç matematik modelini oluşturur. `source-reader.js` özgün sayfayı büyütür ve sayfa değişimini açıklamayla eşler. Kitabın tamamı ve tüm içindekiler ayrıca okuyucudan erişilebilir.

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

Yazı büyüklüğü ve odak tercihi `net-atlasi-ui-v1` anahtarında saklanır. Kitap konumuna eklenen `updatedAt` yalnız cihazdaki devam kartını sıralamak içindir. Bu görünüm tercihleri ilerleme yedeğine dahil değildir.

## GitHub Pages

`main` dalına gönderimden sonra `.github/workflows/pages.yml`, içerik kontrollerini çalıştırır ve yalnız site dosyalarını GitHub Pages'e yayımlar. Depoda **Settings → Pages → Source: GitHub Actions** seçilmelidir.

Yeni dersler ilgili `data/*.js` dosyasına aynı şemayla eklenebilir. Önce `npm test` çalıştırılmalıdır.
