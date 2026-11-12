'use strict';
const http=require('node:http');
const fs=require('node:fs');
const path=require('node:path');
const root=path.resolve(__dirname,'..');
const port=Number(process.env.PORT)||4173;
const types={'.html':'text/html; charset=utf-8','.css':'text/css; charset=utf-8','.js':'text/javascript; charset=utf-8','.json':'application/json; charset=utf-8','.svg':'image/svg+xml','.ico':'image/x-icon','.webp':'image/webp'};
const server=http.createServer((req,res)=>{
  let target;
  try{const pathname=decodeURIComponent(new URL(req.url,'http://localhost').pathname);target=path.resolve(root,'.'+(pathname==='/'?'/index.html':pathname));}catch{res.writeHead(400);return res.end('Bad request');}
  if(!target.startsWith(root+path.sep)||target.split(path.sep).some(p=>p.startsWith('.'))){res.writeHead(403);return res.end('Forbidden');}
  fs.readFile(target,(err,data)=>{if(err){res.writeHead(404);return res.end('Not found');}res.writeHead(200,{'Content-Type':types[path.extname(target)]||'application/octet-stream','Cache-Control':'no-cache','X-Content-Type-Options':'nosniff'});res.end(data);});
});
server.listen(port,'127.0.0.1',()=>console.log(`Net Atlası: http://127.0.0.1:${port}`));
