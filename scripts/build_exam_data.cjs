'use strict';
const fs=require('node:fs'),path=require('node:path'),vm=require('node:vm');
const root=path.resolve(__dirname,'..'),data=path.join(root,'data'),merged={};
const files=fs.readdirSync(data).filter(f=>/^exam-(?:biology|chemistry|physics|math|turkish|social)(?:[-\w]*)\.js$/.test(f)).sort();
for(const file of files){
 const context={window:{}};
 vm.runInNewContext(fs.readFileSync(path.join(data,file),'utf8'),context,{filename:file});
 for(const [id,record]of Object.entries(context.window.EXAM_ANALYSES||{})){if(merged[id])throw Error('Duplicate analysis '+id+' in '+file);merged[id]=record;}
}
// The source image contains two complete octets; retain its printed key separately.
if(merged['q-tyt-kimya-023'])merged['q-tyt-kimya-023'].acceptedAnswers=['C','E'];
fs.writeFileSync(path.join(data,'exam-analyses.js'),'window.EXAM_ANALYSES='+JSON.stringify(merged)+';\n');
console.log(JSON.stringify({analysisFiles:files.length,analyses:Object.keys(merged).length}));
