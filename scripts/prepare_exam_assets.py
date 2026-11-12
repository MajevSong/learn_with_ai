"""Build web-friendly original-source assets from user-provided PDFs."""
import json,shutil,collections
from pathlib import Path
import fitz
ROOT=Path(__file__).resolve().parent.parent
CORPUS=ROOT/'.qa/exam-corpus';OUT=ROOT/'assets/exams'
def main():
 for name in ['questions','contexts','pages']:(OUT/name).mkdir(parents=True,exist_ok=True)
 for item in (CORPUS/'crops').glob('*.webp'):shutil.copy2(item,OUT/'questions'/item.name)
 for item in (CORPUS/'contexts').glob('*.webp'):shutil.copy2(item,OUT/'contexts'/item.name)
 for exam,file in [('tyt','CS_TYT_2018_2026.pdf'),('ayt','CS_AYT_SAY_2018_2026.pdf')]:
  doc=fitz.open(ROOT.parent/file)
  for i,page in enumerate(doc):
   target=OUT/'pages'/f'{exam}-{i+1}.webp'
   if not target.exists():page.get_pixmap(matrix=fitz.Matrix(1.7,1.7),alpha=False).pil_save(str(target),format='WEBP',quality=87)
   if i%100==0:print(exam,'source pages',i+1,'/',len(doc),flush=True)
 raw=json.loads((CORPUS/'questions-all.json').read_text(encoding='utf-8'))
 for q in raw:
  q['images']=['./assets/exams/questions/'+q['id']+(f'-part{i+1}' if i else '')+'.webp' for i,_ in enumerate(q['source']['parts'])]
  q['fullPageBook']='CS-'+q['exam']
  if q['subject']=='felsefe':q['alternative']=bool(__import__('re').search(r'\*\s*20\d\d\s*-\s*TYT',q['text']))
  if q['source'].get('contextId') and not q['source'].get('contextIncluded'):q['contextImage']='./assets/exams/contexts/'+q['source']['contextId']+'.webp'
 metadata={'years':list(range(2018,2027)),'questionCount':len(raw),'sourceFiles':['CS_TYT_2018_2026.pdf','CS_AYT_SAY_2018_2026.pdf'],'counts':dict(collections.Counter(q['exam']+'-'+q['subject'] for q in raw)),'notes':['Dosya adındaki 2018–2026 aralığı dokuz sınav yılıdır.','Numaralar konu sırasındaki MEB derleme numarasıdır; özgün ÖSYM kitapçık numarası değildir.','Bu TYT derlemesinde Din Kültürü soruları bulunmaz; 45 standart ve 45 ilave felsefe sorusu yer alır.','Sıklıklar yalnız bu iki derlemede bulunan soruların sayımıdır; gelecekteki sınav için olasılık veya kapsam garantisi değildir.']}
 text='window.EXAM_META = '+json.dumps(metadata,ensure_ascii=False,separators=(',',':'))+';\nwindow.EXAM_QUESTIONS = '+json.dumps(raw,ensure_ascii=False,separators=(',',':'))+';\n'
 (ROOT/'data/exam-questions.js').write_text(text,encoding='utf-8')
 files=list(OUT.rglob('*.webp'));print(json.dumps({'questions':len(raw),'imageFiles':len(files),'imageBytes':sum(f.stat().st_size for f in files)},indent=2),flush=True)
if __name__=='__main__':main()
