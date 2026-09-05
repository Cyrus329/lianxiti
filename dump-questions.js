global.window = global;
global.globalThis = global;
global.document = {querySelector(){return null},querySelectorAll(){return []},body:{}};
global.localStorage={getItem(){return null},setItem(){},removeItem(){}};
global.navigator={};
const fs=require('fs'),vm=require('vm'),path=require('path');
const files=['asset-pack-index.js','core.js','question-bank-data.js','summer-complete-v60.js','summer-group-fix-v61.js','summer-continuation-v62.js','assignment-zone-v63.js','homework-continuation-v64.js','homework-answers-v65.js','qfw-complete-v66.js','homework-continuity-puretext-v74.js','math-complete-puretext-v74.js','english-complete-puretext-v75.js','computer-complete-puretext-v76.js','answer-bindings-v78.js','math-limit-source-audit-v79.js','complete-set-full-audit-v80.js','math-display-fix-v81.js','math-limit-source-correction-v82.js','full-source-audit-v83.js','formula-source-fix-v85.js','global-second-audit-v87.js','math-derivative-import-v88.js','qfw-english-noun-article-answers-v90.js','qfw-english-sentence-components-types-v91.js','qfw-english-topic-split-v92.js','qfw-english-puretext-v93.js','qfw-english-individualize-v95.js','english-complete-import-v96.js','qfw-math-full-import-v99.js','math-application-import-v104.js','qfw-computer-ch2-ch3-v105.js','math-render-cache-v99.js','word-data.js'];
for(const f of files){try{vm.runInThisContext(fs.readFileSync(path.join(__dirname,f),'utf8'),{filename:f});}catch(e){console.error('ERR',f,e.message)}}
const candidates=[];
for(const [k,v] of Object.entries(global)){
 if(Array.isArray(v) && v.length && v[0] && typeof v[0]==='object' && ('id' in v[0]||'questionId' in v[0])) candidates.push([k,v.length]);
 if(v&&typeof v==='object'&&Array.isArray(v.questions)) candidates.push([k+'.questions',v.questions.length]);
}
console.log(candidates);
const q=[];
function add(arr){for(const x of arr||[]){if(x&&typeof x==='object'&&(x.id||x.questionId)&&(x.stem||x.question||x.title)){q.push(x)}}}
for(const [k,v] of Object.entries(global)){if(Array.isArray(v))add(v); else if(v&&typeof v==='object'&&Array.isArray(v.questions))add(v.questions)}
const map=new Map(q.map(x=>[String(x.id||x.questionId),x]));
fs.writeFileSync('/mnt/data/qb109/all-questions-dump.json',JSON.stringify([...map.values()]));
console.log('questions',map.size);
