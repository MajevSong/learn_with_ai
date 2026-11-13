'use strict';
const fs=require('node:fs'),path=require('node:path'),vm=require('node:vm');
const root=path.resolve(__dirname,'..');
function load({modules=true}={}){
 const context={window:{},URL,URLSearchParams};
 const html=fs.readFileSync(path.join(root,'index.html'),'utf8');
 const files=[...html.matchAll(/<script src="\.\/(data\/[^"?]+\.js)(?:\?[^" ]*)?"/g)].map(m=>m[1]);
 for(const file of files)vm.runInNewContext(fs.readFileSync(path.join(root,file),'utf8'),context,{filename:file});
 if(modules)for(const file of ['source-reader.js','book-study.js','reading-room.js','math-exam-links.js','topic-study-links.js','curriculum.js','topic-dossiers.js'])vm.runInNewContext(fs.readFileSync(path.join(root,file),'utf8'),context,{filename:file});
 return context;
}
module.exports={load,root};
