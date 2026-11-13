/* Apply source-verified labels after the title-matched explanation patches. */
(() => {
  const corrections = [
    {lesson: 'cog-09', book: 'TYT-cog', page: 73, title: 'Türkiye’de Ana Yer Şekilleri, İç ve Dış Kuvvetler'},
    {lesson: 'fel-03', book: 'TYT-fel', page: 25, title: 'Evrende Amaçlılık ve Düzenlilik – Varlık Türlerinin Sınıflandırılması'}
  ];
  for (const item of corrections) {
    const section = window.BOOK_GUIDES[item.lesson].sections.find(s => s.pages[0] === item.page);
    if (!section) throw new Error('Source label target missing: ' + item.lesson);
    section.title = item.title;
    for (const toc of [window.SOURCE_BOOKS?.find(b => b.id === item.book)?.toc, window.SOURCE_RESOURCES?.[item.book]?.toc]) {
      for (const row of toc || []) if (row[2] === item.page) row[1] = item.title;
    }
  }
  // The source's karst/coast chapter starts at printed70, not73.
  const geography = window.BOOK_GUIDES['cog-09'];
  const river = geography.sections.find(s => s.pages[0] === 67);
  const inheritedNotes = river.notes || [];
  river.pages = [67, 68, 69];
  river.notes = inheritedNotes.filter(n => n.page < 70);
  river.explanation = [
    'Akarsu, yatağında eğim doğrultusunda akan sudur; aşındırma, taşıma ve biriktirme aynı sistemin farklı kesimlerinde birlikte görülebilir. Kaynaktaki debi ile rejimi ayır: debi belirli bir kesitten birim zamanda geçen su hacmidir, rejim ise bu akımın yıl içindeki değişimidir. Yağışın yıl boyunca düzenli dağılması düzenli rejimi destekler; kar erimesi veya mevsimlik yağış belirli dönemlerde yükseliş yaratabilir. Yalnız akarsuyun uzunluğuna bakarak rejimini çıkaramazsın.',
    '68. sayfadaki vadi türlerini eğim ve kayaç yapısıyla,69. sayfadaki birikim şekillerini akış hızının azalmasıyla ilişkilendir. Çentik vadide derine aşındırma belirgindir; menderesli kesimde yanal aşındırma ve birikim birlikte işler. Dağ eteğinde eğimin azalması birikinti konisi veya yelpazesini geliştirebilir. Delta için yalnız alüvyon taşınması yetmez; kıyıdaki dalga ve akıntıların malzemeyi uzaklaştırma gücü de değerlendirilmelidir. Şeklin adını ezberledikten sonra enerji ve malzeme dengesini açıklayabiliyor olmalısın.'
  ];
  river.look = '67’de debi-rejim ayrımını,68’de vadileri,69’da akarsu biriktirme şekillerini karşılaştır.';
  river.check = {question: 'Aynı akarsuda aşındırma ve biriktirme birlikte görülebilir mi?', answer: 'Evet. Eğim, akış hızı ve taşınan yük yerden yere değişir; farklı kesimlerde, hatta bir menderesin karşı kıyılarında farklı süreçler baskın olabilir.'};
  const coastalTitle = 'Dış Kuvvetler (Karstik Şekiller, Dalgalar, Akıntılar)';
  geography.sections.splice(2, 0, {
    title: coastalTitle, pages: [70, 71, 72],
    explanation: [
      '70. sayfanın karst şemasında kalker gibi çözünebilen kayaç, su ve yer altı boşluklarını birlikte izle. Lapya yüzeydeki küçük olukları, dolin kapalı çanakları, mağara ise yer altında gelişen boşluğu anlatır. Bunlar çözünme ve kimi örneklerde çökme süreçleriyle ilişkilidir.71. sayfadaki sarkıt, dikit, sütun ve traverten ise çözünmüş minerallerin çökelmesiyle oluşan birikim şekilleridir. Mağaranın boşluğu ile içindeki sarkıtın oluşumu aynı yönde işleyen süreç değildir.',
      'Dalga aşındırmasında falez, kıyı biriktirmesinde kıyı oku veya tombolo örneklerini kullan. Kıyı tipini belirlerken yalnız kıyı çizgisinin girintili görünmesine bakma; dağların denize uzanışı, eski vadiler, buzullaşma ve deniz seviyesinin değişmesi gibi oluşum kanıtlarını ara.72. sayfadaki enine-boyuna kıyı karşılaştırması dağların kıyıya yönelimiyle ilgilidir. Fiyort ile ria benzer biçimde su altında kalmış girintiler gösterebilse de ilkinde buzul vadisi, ikincisinde akarsu vadisi temeli vardır.'
    ],
    notes: inheritedNotes.filter(n => n.page >= 70),
    look: '70’te karst şemasını,71’de karst birikim ve kıyı şekillerini,72’de kıyı tiplerinin oluşumunu izle.',
    check: {question: 'Mağara ile mağaradaki sarkıt neden farklı oluşum gruplarındadır?', answer: 'Mağara boşluğu çözünmeyle gelişir; sarkıt çözünmüş minerallerin çökelerek birikmesiyle oluşur.'}
  });
  const toc = window.SOURCE_BOOKS.find(b => b.id === 'TYT-cog').toc;
  const karst = toc.find(row => row[0] === 24);
  karst[1] = coastalTitle;
  karst[2] = 70;
  for (const table of window.TOPIC_DISTRIBUTIONS.tables) {
    for (const row of table.rows) {
      row.bookSections = row.bookSections.flatMap(ref => ref.lessonId !== 'cog-09' ? [ref] :
        geography.sections.flatMap((s, sectionIndex) => s.pages.some(p => ref.pages.includes(p)) ?
          [{...ref, sectionIndex, title: s.title, pages: s.pages.filter(p => ref.pages.includes(p))}] : []));
    }
  }
})();
