# Net Atlası · learn_with_ai

TYT Türkçe ve Sosyal ile TYT/AYT matematik, geometri ve fen kaynaklarını kitap sayfasıyla birlikte çalışmak için hazırlanmış bir öğrenme alanı.

**Site:** https://majevsong.github.io/learn_with_ai/

## Kitap sayfasıyla çalışma

Konu ekranında özgün kitap sayfası ve **o sayfaya ait kısa özet** gösterilir. Toplam 14 kitapta 1.959 içerik sayfasının ayrı kaydı vardır. Her özet bir ila üç kısa paragraftır; ilgili sayfadaki kavramlar gerektiğinde kısa tanımlarla açıklanır. Kapaklar ve boş sayfalar konu listesine alınmaz. Sayfa seçimi, önceki/sonraki düğmeleri ve özgün okuyucudaki sayfa değişimi özeti birlikte değiştirir. Telefonda **Kitap / Sayfa özeti** düğmeleriyle geçiş yapılır.

Özetler kaynak sayfalarından seçilip kısaltılan bilgiler ve sayfaya göre yeniden yazılan kısa açıklamalardan oluşur. Kitaptaki yanlış-doğru cümleler, sorular ve tartışılan görüşler doğrudan doğru bilgi gibi aktarılmamalıdır. Kaynakta fark edilen baskı hataları özgün okuyucuda belirtilir. Bu metinler yapay zekâ desteğiyle hazırlanmış çalışma özetleridir; bütün sayfaların uzman denetiminden geçtiği veya MEB/ÖSYM tarafından onaylandığı iddia edilmez.

Önceki uzun anlatımlar, bölüm dosyaları, kontrol soruları ve çözümlü örnekler konu okuma ekranında yüklenmez. Özgün kitabın şekilleri, tabloları ve örnekleri kitap görüntüsünde korunur. İlgili sayfaya bağlanan ÖSYM soruları kapalı bir listeyle açılır. Etkileşimli modeller ayrıca model kataloğundan kullanılabilir.

## Kapsam ve kaynaklar

- TYT Türkçe, Tarih, Coğrafya, Felsefe ve Din Kültürü.
- TYT/AYT matematik, geometri, fizik, kimya ve biyoloji.
- 197 çalışma başlığı; kaynak sayfalarına bağlı özetler ve kavramlar.
- Yüklenen konu dağılımı dosyalarındaki 228 başlık ve 15 tablo; kitap bölümlerine bağlantılar.
- 14 ayrı etkileşimli matematik ve fen modeli.
- Cihazda ilerleme, kitap konumu ve okuma tercihi kaydı; ilerleme için JSON yedeği.

AYT Edebiyat ve AYT Sosyal kapsamda değildir. TYT tarih için kullanılan bazı eski uygarlık sayfaları AYT tarih kitabından kaynak gösterilir; ayrı AYT sosyal çalışması oluşturulmaz.

Konu dağılımı tabloları 2018–2025 kayıtlarıdır; 2027 için resmî soru dağılımı veya tahmin değildir. AYT fen tablolarında 2018 bulunmaz. 95 eksik hücre `null` olarak, kaynak toplamıyla hücre toplamının uyuşmadığı yedi kayıt açıklamasıyla korunur.

`#meb` ekranındaki 44 seçilmiş MEB/ÖSYM kaynağının son kontrol tarihi **13 Kasım 2026**'dır. Kataloglar, programlar, kitaplar, testler ve sınav kaynakları erişim koşullarıyla listelenir. Bu tarih otomatik güncelleme anlamına gelmez; 2027 sınavının kesin kapsamının onaylandığı iddia edilmez.

Yerel kitaplar ve resmî MEBİ kitapları kaynak alınır. Özgün kitap görüntüleri MEB içerik sunucusundan yüklenir; kaynak bağlantısı okuyucuda bulunur. PDF dosyaları depoya alınmaz. Matematikte TYT kitabının basılı 9–156, AYT kitabının 9–137. sayfaları çalışılır. Felsefede eski konu dizininin mantıksal sayfa numaraları korunur; basılı ve fiziksel sayfaya dönüşüm +2 olarak ayrı hesaplanır.

## ÖSYM soruları

Yüklenen `CS_TYT_2018_2026.pdf` ve `CS_AYT_SAY_2018_2026.pdf` derlemeleri 2018–2026 dahil dokuz yılı kapsar. Sitede özgün görselleri ve kaynak iziyle 1.780 soru bulunur:

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

Soru arşivindeki çözüm adımları, çeldirici açıklamaları, kavram bağlantıları ve özgün uygulamalar korunur. Kitap özetiyle soru analizi ayrı ekranlardır. 708 matematik sorusunun kaynak referansları ilgili kitap çalışmalarına bağlanır.

Arşiv sınav, ders, yıl, konu, metin ve çalışma durumuyla süzülebilir. Numaralar MEB derlemesinin konu sırasıdır; özgün ÖSYM kitapçık numarası değildir. 646 özgün dosya sayfası ve 27 ortak metin grubu korunur. TYT derlemesinde Din Kültürü soruları yoktur; 90 felsefe sorusunun 45'i yıldızlı ilave gruptandır. Eksik veya çelişen anahtarlar ve baskı tutarsızlıkları ilgili soruda açıklanır; çelişkili kayıtlar tek cevapla puanlanmaya zorlanmaz. Özgün uygulamalar ÖSYM sorusu veya çıkacağı kesin tahmin olarak sunulmaz.

## Arayüz ve kod

Arayüz, kullanıcının sağladığı Google Stitch ekranları ve `academic_editorial_workspace/DESIGN.md` temel alınarak uygulanmıştır. Fildişi zemin, koyu yeşil ayrıntılar, Newsreader başlıklar ve Plus Jakarta Sans yazı tipi kullanılır. Tasarım dosyalarındaki örnek istatistikler yerine gerçek uygulama verileri gösterilir. Stitch API bağlantısı gerekmez.

Aktif içerik:

- `data/book-page-index.js`: kitap başlıkları, bölüm ve sayfa aralıkları; uzun anlatım içermez.
- `data/page-notes-{verbal,physics,biology,math-chemistry}.js`: her sayfanın kısa özeti ve kavramları.
- `book-study.js`, `reading-room.js`, `page-notes.css`: sayfa seçimi ve özet görünümü.
- `source-reader.js`: özgün sayfa, büyütme, numara dönüşümü ve baskı düzeltmeleri.
- `data/topic-distributions.js`, `curriculum.js`: konu dağılımı ve kaynak bağlantıları.
- `data/official-sources.js`: tarihli resmî kaynak kataloğu.
- `data/exam-*.js`, `exam-study.js`: soru verisi, kaynak izi ve analiz ekranları.
- `science-visuals.js`, `math-visuals.js`: koşulları belirtilen şematik modeller.

Eski `book-*`, `*-reading` ve `topic-dossiers-*` anlatım verileri depoda arşiv olarak durur; `index.html` bunları yüklemez. Eski üretim betikleri yeni sayfa notlarını üretmek için kullanılmamalıdır. Kullanıcı PDF'lerinden çıkarılmış yerel `.qa/` inceleme dosyaları yayımlanmaz.

## Çalıştırma ve kontrol

Node.js ile, ek paket kurulumu gerektirmeden:

```sh
npm start
npm test
```

Yerel adres: http://127.0.0.1:4173

Kontroller; ders ve kaynak bağlantılarını, 1.959 sayfanın özet kapsamını, uzunluk ve yinelenme sınırlarını, konu dağılımı eşleşmelerini ve soru verisinin bütünlüğünü denetler. İçeriğin anlamsal doğruluğu yalnız otomatik kontrollerle garanti edilemez.

Soru görsellerini kaynak PDF'lerden yeniden çıkarmak için:

```sh
python scripts/ingest_exams.py --render
python scripts/prepare_exam_assets.py
node scripts/build_exam_data.cjs
```

PDF'ler proje klasörünün üst dizininde olmalıdır. Bu betikler çözüm yazmaz; analiz metinleri ayrı veridir.

## Kayıt ve yayın

Üyelik, sunucu veya API anahtarı gerekmez. Ders ilerlemesi `net-atlasi-v1`, soru ilerlemesi `net-atlasi-exams-v1`, kitap konumu `net-atlasi-book-study-v1`, okuma tercihi `net-atlasi-ui-v1` anahtarında cihazdaki `localStorage` içine kaydedilir. İlerleme yedeği kitap konumu ve görünüm tercihlerini kapsamaz. Cihazlar arasında otomatik eşitleme yoktur.

Kitap görüntüleri ve Google Fonts internet bağlantısı kullanır; font yüklenemezse sistem fontu kullanılır. Garantili çevrim dışı kullanım sağlayan bir servis çalışanı yoktur.

`main` dalına gönderimde `.github/workflows/pages.yml` kontrolleri çalıştırır ve site dosyalarını GitHub Pages'e yayımlar. Pages kaynağı GitHub Actions olmalıdır.
