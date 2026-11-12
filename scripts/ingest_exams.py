"""Extract source-ordinal questions and keyed answers from the supplied MEB compendia.

Requires PyMuPDF. Source question numbers are NOT original exam booklet numbers.
"""
import argparse, collections, json, re, unicodedata
from pathlib import Path
import fitz

ROOT=Path(__file__).resolve().parent.parent
SOURCES={
 'TYT':{'file':'CS_TYT_2018_2026.pdf','sections':[('turkce',11,147),('tarih',148,162),('cografya',163,178),('felsefe',179,219),('matematik',220,336),('fizik',337,366),('kimya',367,385),('biyoloji',386,405)],'keys':[406,407,408,409]},
 'AYT':{'file':'CS_AYT_SAY_2018_2026.pdf','sections':[('matematik',11,111),('fizik',112,161),('kimya',162,193),('biyoloji',194,231)],'keys':[232,233,234]}
}
NAMES={'TURKCE':'turkce','TARIH':'tarih','COGRAFYA':'cografya','FELSEFE':'felsefe','MATEMATIK':'matematik','FIZIK':'fizik','KIMYA':'kimya','BIYOLOJI':'biyoloji'}
YEAR=re.compile(r'(20(?:1[89]|2[0-6]))\s*[-–]?\s*(TYT|AYT)')

def norm(text): return ''.join(c for c in unicodedata.normalize('NFD',text.replace('ı','i').upper()) if unicodedata.category(c)!='Mn')
def lines(page):
 return [{'text':''.join(s['text'] for s in l['spans']),'bbox':l['bbox'],'spans':l['spans']} for b in page.get_text('dict')['blocks'] if 'lines' in b for l in b['lines']]

def answer_keys(doc,pages):
 result={}; issues=[]
 for pn in pages:
  ls=lines(doc[pn-1]); headers=sorted([(l['bbox'][1],NAMES[norm(l['text']).strip()]) for l in ls if norm(l['text']).strip() in NAMES])
  for y,subject in headers:
   upper=min([yy for yy,_ in headers if yy>y]+[doc[pn-1].rect.height-25]); spans=[s for l in ls for s in l['spans'] if y+10<s['bbox'][1]<upper]
   nums=[s for s in spans if re.fullmatch(r'\s*\d{1,3}\.\s*',s['text'])]; answers=[s for s in spans if re.fullmatch(r'\s*[A-E]{1,2}\s*',s['text'])]
   table=result.setdefault(subject,{})
   for s in nums:
    n=int(s['text'].strip().rstrip('.')); x0,y0,x1,y1=s['bbox']; candidates=[a for a in answers if abs(a['bbox'][1]-y0)<4 and -1<=a['bbox'][0]-x1<=14]
    candidates.sort(key=lambda a:abs(a['bbox'][1]-y0)*10+abs(a['bbox'][0]-x1))
    letters=''.join(a['text'].strip() for a in candidates)
    answer=letters if len(letters)==1 else None
    table[n]={'answer':answer,'keyCandidates':letters,'keyPage':pn}
    if answer is None:issues.append({'subject':subject,'number':n,'page':pn,'candidates':letters})
 return result,issues

def extract_exam(exam,config,input_dir):
 doc=fitz.open(input_dir/config['file']); keys,key_issues=answer_keys(doc,config['keys']); records=[]; issues=[]
 for subject,start,end in config['sections']:
  anchors=[]; page_lines={}; topic=None
  for pn in range(start,end+1):
   page=doc[pn-1]; ls=lines(page);page_lines[pn]=ls
   for l in ls:
    text=l['text'].strip();s=l['spans'][0];box=s['bbox'];x=box[0];m=re.match(r'^(\d{1,3})(?:\.(?:\s|$)|\t+)',text)
    group=re.match(r'^\d+\.\s*(?:[-–]\s*\d+\.?|ve\s+\d+\.?)\s*sorular',text,re.I)
    if m and not group and 8.8<=s['size']<=9.2 and 52<box[1]<page.rect.height-23 and (20<=x<=43.6 or 270<=x<=295):
     printed=int(m.group(1));column=0 if x<150 else 1;number=342 if exam=='AYT' and subject=='matematik' and pn==109 and column==0 and printed==344 else printed
     anchors.append({'number':number,'printedNumber':printed,'page':pn,'column':column,'bbox':list(box)})
  anchors.sort(key=lambda a:(a['page'],a['column'],a['bbox'][1])); seen=set()
  for index,a in enumerate(anchors):
   page=doc[a['page']-1];width=page.rect.width;height=page.rect.height;mid=width/2
   x0,x1=(25,mid-5) if a['column']==0 else (mid+5,width-24);top=a['bbox'][1]-3
   next_same=next((b for b in anchors[index+1:] if b['page']==a['page'] and b['column']==a['column']),None)
   bottom=next_same['bbox'][1]-5 if next_same else height-25
   ls=[l for l in page_lines[a['page']] if x0<=l['bbox'][0]<x1 and top-1<=l['bbox'][1]<bottom]
   years=[(l,YEAR.search(l['text'])) for l in ls if YEAR.search(l['text'])]
   parts=[];year=None
   if years:
    yl,match=years[0];year=int(match.group(1));bottom=min(bottom,yl['bbox'][3]+5)
   # Preserve shared passages printed above the first numbered question.
   previous=[l for l in page_lines[a['page']] if x0<=l['bbox'][0]<x1 and 51<=l['bbox'][1]<top]
   prior_years=[l for l in previous if YEAR.search(l['text'])]
   prefix_top=prior_years[-1]['bbox'][3]+6 if prior_years else 52
   prefix=[l for l in previous if l['bbox'][1]>=prefix_top]
   prefix_text='\n'.join(l['text'] for l in prefix)
   shared=bool(len(prefix_text)>150 and ('sorular' in prefix_text.lower() or not any(re.match(r'\s*\d+\.',l['text']) for l in prefix)))
   # Formulae may rise above the number baseline. Include preceding stem spans,
   # excluding white topic banners and the prior question's QR/blank margin.
   banner_end=max([l['bbox'][3] for l in prefix if l['text'].lstrip().startswith('•')]+[prefix_top-1])
   stem_tops=[l['bbox'][1]-3 for l in prefix if l['bbox'][1]>banner_end and any(s['text'].strip() and s['color']!=16777215 for s in l['spans'])]
   top=prefix_top if shared else min([top]+stem_tops)
   clip=[x0,max(50,top),x1,bottom];parts.append({'page':a['page'],'clip':clip})
   text=page.get_text('text',clip=fitz.Rect(clip),sort=True).strip()
   if year is None:
    following=anchors[index+1] if index+1<len(anchors) else None
    cp=a['page'] if a['column']==0 else a['page']+1;cc=1 if a['column']==0 else 0
    if cp<=end:
     more=doc[cp-1];xx0,xx1=(25,more.rect.width/2-5) if cc==0 else (more.rect.width/2+5,more.rect.width-24)
     bb=following['bbox'][1]-5 if following and following['page']==cp and following['column']==cc else more.rect.height-25
     extra=[l for l in page_lines.get(cp,[]) if xx0<=l['bbox'][0]<xx1 and 52<=l['bbox'][1]<bb]
     ending=next(((l,YEAR.search(l['text'])) for l in extra if YEAR.search(l['text'])),None)
     if ending:
      yl,match=ending;year=int(match.group(1));c=[xx0,52,xx1,yl['bbox'][3]+5];parts.append({'page':cp,'clip':c});text+='\n'+more.get_text('text',clip=fitz.Rect(c),sort=True)
   nearby=[l for l in page_lines[a['page']] if x0<=l['bbox'][0]<x1 and 51<=l['bbox'][1]<=a['bbox'][1] and any(s['color']==16777215 for s in l['spans'])]
   if nearby:topic=nearby[-1]['text'].strip()
   qid=f'q-{exam.lower()}-{subject}-{a["number"]:03}'
   if a['number'] in seen:issues.append({'kind':'duplicate','id':qid,'page':a['page']});continue
   seen.add(a['number']);key=keys.get(subject,{}).get(a['number'],{'answer':None,'keyCandidates':'','keyPage':None})
   record={'id':qid,'exam':exam,'subject':subject,'number':a['number'],'year':year,'topic':topic or '',**key,'text':text,'source':{'file':config['file'],'pdfPage':a['page'],'bookPage':a['page']-2,'printedNumber':a['printedNumber'],'questionTop':a['bbox'][1],'parts':parts},'sharedContextDetected':shared,'visualHint':bool(re.search('şekil|grafik|tabl|düzenek|harita|gösteril|çizim|devre',text,re.I))}
   if a['printedNumber']!=a['number']:record['numberingNote']='PDF 109 sol üstte 342 yerine 344 basılmıştır. Ardından 343 ve sağ sütunda gerçek 344 gelir. Silindir sorusunun sonucu C olup anahtarın 342-C kaydıyla eşleşir.'
   records.append(record)
   if not year:issues.append({'kind':'year_missing','id':qid,'page':a['page']})
  key_numbers=set(keys.get(subject,{})); missing=sorted(key_numbers-seen);extra=sorted(seen-key_numbers)
  if missing or extra:issues.append({'kind':'number_coverage','exam':exam,'subject':subject,'missingAnchors':missing,'missingKeys':extra})
 return doc,records,keys,key_issues+issues

def repair_topics(records,docs):
 for exam,config in SOURCES.items():
  doc=docs[exam]
  left_min,left_max,right_min,right_max=(50,74,300,320) if exam=='TYT' else (59,63,309,316)
  for subject,start,end in config['sections']:
   events=[]
   for pn in range(start,end+1):
    spans=[s for l in lines(doc[pn-1]) for s in l['spans'] if s['color']==16777215 and 'Bold' in s['font'] and 8.8<=s['size']<=9.2 and 55<=s['bbox'][1]<730 and (left_min<=s['bbox'][0]<=left_max or right_min<=s['bbox'][0]<=right_max)]
    spans.sort(key=lambda s:(0 if s['bbox'][0]<150 else 1,s['bbox'][1]))
    for span in spans:
     col=0 if span['bbox'][0]<150 else 1;y=span['bbox'][1];text=span['text'].strip().lstrip('•').strip()
     if not text:continue
     if events and events[-1]['page']==pn and events[-1]['column']==col and 0<y-events[-1]['lastY']<16:
      events[-1]['text']+=' '+text;events[-1]['lastY']=y
     else:events.append({'page':pn,'column':col,'y':y,'lastY':y,'text':text})
   for q in (r for r in records if r['exam']==exam and r['subject']==subject):
    pos=(q['source']['pdfPage'],0 if q['source']['parts'][0]['clip'][0]<150 else 1,q['source']['questionTop'])
    before=[ev for ev in events if (ev['page'],ev['column'],ev['y'])<=pos]
    if before:q['topic']=before[-1]['text']

def main():
 ap=argparse.ArgumentParser();ap.add_argument('--input',type=Path,default=ROOT.parent);ap.add_argument('--render',action='store_true');args=ap.parse_args()
 out=ROOT/'.qa/exam-corpus';out.mkdir(parents=True,exist_ok=True);all_records=[];all_issues=[];docs={}
 for exam,config in SOURCES.items():
  doc,records,keys,issues=extract_exam(exam,config,args.input);docs[exam]=doc;all_records+=records;all_issues+=issues
  (out/(exam.lower()+'-keys.json')).write_text(json.dumps(keys,ensure_ascii=False,indent=2),encoding='utf-8')
 contexts=[];by_id={r['id']:r for r in all_records}
 for q in all_records:
  header=q['text'][:500]
  # Preserve the printed typo, but recover the intended shared-passage range.
  if q['id']=='q-tyt-turkce-214':header=header.replace('214 - 2015.','214 - 215.')
  group=re.search(r'(\d{1,3})\.?\s*[-–]\s*(\d{1,3})\.\s*sorular',header,re.I)
  if not group:continue
  first,last=map(int,group.groups());start_of_question=re.search(r'(?m)^\s*'+str(q['number'])+r'\.\s',q['text'])
  if first!=q['number'] or not first<last<=first+5 or not start_of_question:continue
  shared_text=q['text'][:start_of_question.start()].strip();part=q['source']['parts'][0];clip=list(part['clip']);clip[3]=q['source']['questionTop']-4
  cid=f'ctx-{q["exam"].lower()}-{q["subject"]}-{first}-{last}';context={'id':cid,'exam':q['exam'],'subject':q['subject'],'text':shared_text,'page':part['page'],'clip':clip};contexts.append(context)
  for number in range(first,last+1):
   other=by_id.get(f'q-{q["exam"].lower()}-{q["subject"]}-{number:03}')
   if not other:continue
   other['source']['contextId']=cid;other['source']['contextIncluded']=number==first;other['sharedContextDetected']=True
   if q['id']=='q-tyt-turkce-214':other['sourceNote']='Kaynakta ortak metin başlığı “214 - 2015” basılmıştır. Aynı sayfadaki 214 ve 215 numaralı sorular Puslu Kıtalar Atlası paragrafını ortak kullanır; başlık aralığı 214–215 olarak eşleştirilmiştir.'
   if number!=first:other['text']=shared_text+'\n\n'+other['text']
 repair_topics(all_records,docs)
 (out/'shared-contexts.json').write_text(json.dumps(contexts,ensure_ascii=False,indent=2),encoding='utf-8')
 for subject in sorted(set(r['subject'] for r in all_records)):
  subset=[r for r in all_records if r['subject']==subject];(out/('questions-'+subject+'.json')).write_text(json.dumps(subset,ensure_ascii=False,indent=2),encoding='utf-8')
 (out/'questions-all.json').write_text(json.dumps(all_records,ensure_ascii=False,indent=2),encoding='utf-8');(out/'extraction-issues.json').write_text(json.dumps(all_issues,ensure_ascii=False,indent=2),encoding='utf-8')
 summary={'questions':len(all_records),'sharedContexts':len(contexts),'counts':dict(collections.Counter(r['exam']+'-'+r['subject'] for r in all_records)),'years':dict(collections.Counter(r['year'] for r in all_records)),'issues':all_issues}
 (out/'extraction-summary.json').write_text(json.dumps(summary,ensure_ascii=False,indent=2),encoding='utf-8');print(json.dumps(summary,ensure_ascii=False,indent=2),flush=True)
 if args.render:
  images=out/'crops';images.mkdir(exist_ok=True);context_images=out/'contexts';context_images.mkdir(exist_ok=True)
  for context in contexts:
   pix=docs[context['exam']][context['page']-1].get_pixmap(matrix=fitz.Matrix(2,2),clip=fitz.Rect(context['clip']),alpha=False);pix.pil_save(str(context_images/(context['id']+'.webp')),format='WEBP',quality=90)
  for i,q in enumerate(all_records):
   for j,part in enumerate(q['source']['parts']):
    target=images/(q['id']+(f'-part{j+1}' if j else '')+'.webp');pix=docs[q['exam']][part['page']-1].get_pixmap(matrix=fitz.Matrix(2,2),clip=fitz.Rect(part['clip']),alpha=False);pix.pil_save(str(target),format='WEBP',quality=90)
   if i%100==0:print('Rendered',i,'/',len(all_records),flush=True)
 print('Done',flush=True)

if __name__=='__main__':main()
