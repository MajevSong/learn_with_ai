# Net Atlası · learn_with_ai

**TYT Türkçe, Sosyal ve TYT/AYT Fen** kaynaklarını siteden çıkmadan okuyup anlatım içindeki görsellerle çalışmak için hazırlanmış bir öğrenme alanı.

**Site:** https://majevsong.github.io/learn_with_ai/

## Kapsam

- TYT Türkçe, Tarih, Coğrafya, Felsefe ve Din Kültürü.
- TYT/AYT fizik, kimya ve biyolojide kavramsal bilgiler, mekanizmalar ve grafik yorumlama.
- 128 konuda 280 öğretici anlatım bloğu; her açıklamanın içinde ilgili çizim, karşılaştırma, süreç veya zaman çizelgesi.
- Resmî MEBİ kitaplarını sayfa sayfa site içinde açan okuyucu, büyütme ve içindekilerden konuya gitme.
- Her anlatım bloğunda kendi kaynak sayfasına doğrudan erişim. Kitap sayfası ile dosya sayfası farkı bağlantılarda hesaba katılır.
- 256 hafıza kartı ve 128 açıklamalı soru.
- 96 TYT ve 32 AYT dersi; derslerde ve kartlarda sınav düzeyi filtresi.
- Osmoz, enzim, protein sentezi, tanecik modeli, periyodik eğilimler, kimyasal denge ve enerji, dalga, devre, mercek ve sıvı basıncı için 11 etkileşimli model.
- Etkileşimli kavram şemaları, karşılaştırmalar ve zaman çizelgeleri.
- Özgün mikro dersler, açıklamalı kontrol soruları ve hafıza kartları.
- 1–3–7–14–30–60 gün aralıklarıyla tekrar.
- Cihazda ilerleme kaydı, JSON yedekleme ve geri yükleme.
- Din kültürü görünürlüğünü çalışma tercihlerinden değiştirme.

Fen konuları kavramlar, mekanizmalar ve grafik yorumlama üzerinde durur. Matematik, AYT Edebiyat ve AYT Sosyal için ayrı dersler eklenmedi.

## Çalıştırma

Node.js ile, paket kurulumu gerektirmeden:

```sh
npm start
```

Tarayıcıda http://127.0.0.1:4173 adresini aç. Statik sunucu kullanımı önerilir; `file://` üzerinden tarayıcı depolaması davranışı değişebilir.

```sh
npm test
```

Kontrol; kapsam, ders şemaları, benzersiz kimlikler, soru seçenekleri, PDF sayfa aralıkları ve statik dosyaları doğrular. İçerik doğruluğu ayrıca gözden geçirilmelidir.

## Kaynaklar ve içerik

Türkçe, tarih ve coğrafya için yerel TYT kitapları; fizik, kimya ve biyoloji için yerel TYT ve AYT kitapları kullanıldı. Dokuz kitabın konu dizinleri `data/sources.js`, güncel resmî kitap görüntüsü adresleri `data/source-resources.js` içindedir. Felsefe ve din kültürü için resmî MEBİ kitapları da okuyucuya eklendi. Özgün kitap sayfaları MEB'nin içerik sunucusundan görüntülenir; PDF dosyaları depoya alınmaz.

`science-visuals.js` içindeki modeller şematiktir; her biri varsayımlarını ve sınırlarını belirtir. Mevcut ders kimlikleri ve tarayıcı kayıt anahtarı korunduğu için önceki ilerleme kayıtları çalışmaya devam eder.

Anlatımlar `data/biology-reading.js`, `data/core-reading.js` ve `data/applied-reading.js` dosyalarındadır. Her blok kendi kaynak sayfasını belirtir. `reading-room.js` çizimleri paragrafın içinde üretir; `source-reader.js` özgün kitabı aynı ekranda açar.

Görselleştirilmiş anlatımlar ve örnek sorular yapay zekâ desteğiyle özgün olarak hazırlanmıştır. Kaynaklar veya ÖSYM tarafından onaylandığı iddia edilmez. Şemalar kavramları anlatır; süre ve mesafeleri ölçekli göstermez. Özgün kitap görüntüleri MEB'ye aittir ve resmî kaynak bağlantısı okuyucuda korunur. İçerik düzeltmeleri için GitHub issue açılabilir.

## Gizlilik

Üyelik, sunucu, API anahtarı veya ücretli AI bağlantısı gerektirmez. İlerleme `localStorage` içinde bu tarayıcıya kaydedilir. Tarayıcı verileri silinirse ilerleme kaybolabilir. Cihazlar arasında otomatik eşitleme yoktur; yedek dosyasını indirip diğer cihazda yükleyebilirsin.

Google Fonts yüklenemezse sistem yazı tipleri kullanılır. Dersler ve uygulama haricî JavaScript bağımlılığı içermez. İlk çevrim içi yüklemeden sonra garantili çevrim dışı kullanım sağlayan bir servis çalışanı bu sürümde yoktur.

## GitHub Pages

`main` dalına gönderimden sonra `.github/workflows/pages.yml`, içerik kontrollerini çalıştırır ve yalnız site dosyalarını GitHub Pages'e yayımlar. Depoda **Settings → Pages → Source: GitHub Actions** seçilmelidir.

Yeni dersler ilgili `data/*.js` dosyasına aynı şemayla eklenebilir. Önce `npm test` çalıştırılmalıdır.
