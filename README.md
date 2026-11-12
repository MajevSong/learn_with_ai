# Net Atlası · learn_with_ai

Sayısalda derece hedefleyen adaylar için **TYT Türkçe, Sosyal ve TYT/AYT Fen** görsel öğrenme atlası.

**Site:** https://majevsong.github.io/learn_with_ai/

## Kapsam

- TYT Türkçe, Tarih, Coğrafya, Felsefe ve Din Kültürü.
- TYT/AYT fizik, kimya ve biyolojide kavramsal bilgiler, mekanizmalar ve grafik yorumlama.
- 128 mikro ders: mevcut 68 TYT Türkçe/Sosyal dersine ek olarak 22 biyoloji, 18 kimya, 20 fizik; 256 hafıza kartı ve 128 açıklamalı soru.
- 96 TYT ve 32 AYT dersi; derslerde ve kartlarda sınav düzeyi filtresi.
- Osmoz, enzim, protein sentezi, tanecik modeli, periyodik eğilimler, kimyasal denge ve enerji, dalga, devre, mercek ve sıvı basıncı için 11 etkileşimli model.
- Etkileşimli kavram şemaları, karşılaştırmalar ve zaman çizelgeleri.
- Özgün mikro dersler, açıklamalı kontrol soruları ve hafıza kartları.
- 1–3–7–14–30–60 gün aralıklarıyla tekrar; günlük ders hedefi.
- Cihazda ilerleme kaydı, JSON yedekleme ve geri yükleme.
- Din kültürü görünürlüğünü çalışma tercihlerinden değiştirme.

AYT Edebiyat, Tarih, Coğrafya ve Felsefe Grubu bu sürümün kapsamında değildir. Fen dersleri sayısal hedef için kavram ve yorum odaklıdır; kapsamlı matematiksel problem çözümü içermez. Bu mikro dersler tam konu anlatımı veya soru bankası yerine geçmez.

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

Türkçe, tarih ve coğrafya için yerel TYT kitapları; fizik, kimya ve biyoloji için yerel TYT ve AYT kitapları kullanıldı. Toplam dokuz kitabın konu dizinleri ve ders bazında PDF sayfa referansları `data/sources.js` dosyasındadır. PDF'ler yayımlanmaz ve depoya alınmaz. Sayfa numarası PDF görüntüleyicideki sayfayı ifade eder.

`science-visuals.js` içindeki modeller şematiktir; her biri varsayımlarını ve sınırlarını belirtir. Mevcut ders kimlikleri ve tarayıcı kayıt anahtarı korunduğu için önceki ilerleme kayıtları çalışmaya devam eder.

Yerel dosyası bulunmayan felsefe ve din kültürü konuları için resmî MEB/OGM ve Diyanet kaynaklarına ders bazında bağlantı verilir. Sınav test yapısı için 2026 ÖSYM TYT kitapçığı kaynaklar ekranında bulunur. Her aday kendi sınav yılının güncel kılavuzunu kontrol etmelidir.

Anlatımlar ve örnek sorular yapay zekâ desteğiyle özgün olarak hazırlanmış kısa öğretim içerikleridir. Kaynaklar veya ÖSYM tarafından onaylandığı iddia edilmez. Şemalar kavramları anlatır; süre ve mesafeleri ölçekli göstermez. İçerik düzeltmeleri için GitHub issue açılabilir.

## Gizlilik

Üyelik, sunucu, API anahtarı veya ücretli AI bağlantısı gerektirmez. İlerleme `localStorage` içinde bu tarayıcıya kaydedilir. Tarayıcı verileri silinirse ilerleme kaybolabilir. Cihazlar arasında otomatik eşitleme yoktur; yedek dosyasını indirip diğer cihazda yükleyebilirsin.

Google Fonts yüklenemezse sistem yazı tipleri kullanılır. Dersler ve uygulama haricî JavaScript bağımlılığı içermez. İlk çevrim içi yüklemeden sonra garantili çevrim dışı kullanım sağlayan bir servis çalışanı bu sürümde yoktur.

## GitHub Pages

`main` dalına gönderimden sonra `.github/workflows/pages.yml`, içerik kontrollerini çalıştırır ve yalnız site dosyalarını GitHub Pages'e yayımlar. Depoda **Settings → Pages → Source: GitHub Actions** seçilmelidir.

Yeni dersler ilgili `data/*.js` dosyasına aynı şemayla eklenebilir. Önce `npm test` çalıştırılmalıdır.
