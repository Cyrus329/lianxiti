const fs=require('fs'),vm=require('vm'),path=require('path');
const root=__dirname;
global.window=global; global.globalThis=global;
global.localStorage={getItem:()=>null,setItem:()=>{},removeItem:()=>{},key:()=>null,length:0};
global.sessionStorage=global.localStorage;
global.document={querySelector:()=>null,querySelectorAll:()=>[],getElementById:()=>null,addEventListener:()=>{},documentElement:{},body:{},createElement:()=>({})};
global.navigator={}; global.location={}; global.addEventListener=()=>{};
const html=fs.readFileSync(path.join(root,'index.html'),'utf8');
const srcs=[...html.matchAll(/<script[^>]+src="([^"]+)"/g)].map(m=>m[1].split('?')[0]);
for(const src of srcs){
  if(['app.js','knowledge-links.js','core-batch2.js','core-batch3.js'].includes(src)) continue;
  const fp=path.join(root,src); if(!fs.existsSync(fp)) {console.error('missing',src);process.exit(2)}
  try{vm.runInThisContext(fs.readFileSync(fp,'utf8'),{filename:src});}
  catch(e){console.error('ERR',src,e.message); process.exit(3)}
}
const db=global.BUNDLED_QUESTION_BANK;
console.log(JSON.stringify({version:db.version,questions:db.questions.length,sets:db.completeSetRegistry.length,v136:db.qfwEnglishNonfiniteV136},null,2));
