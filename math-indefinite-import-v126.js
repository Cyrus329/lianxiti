/* v126: 第三章第一节 不定积分（蓝色森林答案绑定 + 全方位题目/AI解答） */
(function(){
  const db=globalThis.BUNDLED_QUESTION_BANK;
  if(!db||!Array.isArray(db.questions)) return;
  db.completeSetRegistry=Array.isArray(db.completeSetRegistry)?db.completeSetRegistry:[];
  const img=(source,page)=>`question-images/math-indefinite-${source}/page-${page}.jpg`;
  const bf=[];
  const add=(list,prefix,source,chapter,section,setId,setTitle,answerStatus,answerAuthority)=>{
    const items=[];
    list.forEach((d,i)=>{
      const id=`${prefix}-${String(i+1).padStart(3,'0')}`;
      const q={id,subject:'高等数学',chapter,section,type:d.type,stem:d.stem,textStem:d.stem,options:d.options||[],textOptions:d.options||[],answer:d.answer||'见解析',analysis:d.analysis||'本题答案与题面逐题绑定；详见对应答案资料。',officialAnalysis:d.officialAnalysis||'',questionSource:source,source,sourceRecognition:'manual',answerStatus,answerAuthority,answerSource:d.answerSource||'',analysisSource:d.analysisSource||'',difficulty:'2',tags:[source,'高等数学','第三章','第一节','不定积分','课后作业','逐题纯文字'],images:[img(source,d.page)],analysisImages:[],originalNo:d.no,importOrder:1260000+i,sourceOrder:i+1,sourcePageNo:d.page,titleLabel:'第一节 不定积分',textStatus:'transcribed_source_checked',assignmentGroup:'课后作业',assignmentOrder:1,practiceSetId:setId,practiceSetTitle:setTitle,practiceSection:d.type,practiceOrder:i+1,pageArchive:false,completeSetRefs:[setId]};
      const old=db.questions.findIndex(x=>String(x&&x.id)===id); if(old>=0) db.questions[old]=Object.assign({},db.questions[old],q); else db.questions.push(q);
      items.push({questionId:id,displayNo:d.no,section:d.type,order:i+1,page:d.page});
    });
    const s={id:setId,title:setTitle,source,subject:'高等数学',chapter,section,assignmentGroup:'课后作业',pageMode:false,items,questionCount:items.length,sourceQuestionCount:items.length,sections:[...new Set(list.map(x=>x.type))],answerStatus,answerCoverage:`${items.length}/${items.length}题有文字答案`,catalogOrder:37};
    const idx=db.completeSetRegistry.findIndex(x=>String(x&&x.id)===setId); if(idx>=0) db.completeSetRegistry[idx]=s; else db.completeSetRegistry.push(s);
  };
  const choice=[
    {no:'1',type:'选择题',page:44,stem:'若 F′(x)=G′(x)，则下列说法正确的是（ ）。',options:['F(x)−G(x)=C','F(x)+G(x)=C','F(x)−G(x)=0','F(x)+G(x)=0'],answer:'A'},
    {no:'2',type:'选择题',page:44,stem:'若 F′(x)=f(x)，则下列式子正确的是（ ）。',options:['∫F′(x)dx=f(x)+C','∫f(x)dx=F(x)+C','∫F(x)dx=f(x)+C','∫f′(x)dx=F(x)+C'],answer:'B'},
    {no:'3',type:'选择题',page:44,stem:'若 ∫f(x)dx=x ln x+C，则 f′(x)=（ ）。',options:['ln x+1','ln x','1/x','1/x²'],answer:'C'},
    {no:'4',type:'选择题',page:44,stem:'若 sin(x²) 是 f(x) 的一个原函数，则 ∫f(x)dx=（ ）。',options:['sin(x²)+C','cos(x²)+C','−cos(x²)+C','sin²x+C'],answer:'A'},
    {no:'5',type:'选择题',page:44,stem:'若 ∫f(x)dx=∫(x+x²)dx，则 ∫f(x)dx=（ ）。',options:['x²/2+x³/3+C','x²/2+2x³/3+C','x²+2x³/3+C','x²/3+x³/2+C'],answer:'A'},
    {no:'6',type:'选择题',page:44,stem:'对不定积分 ∫f(x)dx，下列求导式正确的是（ ）。',options:['d[∫f(x)dx]=f(x)','∫f′(x)dx=f(x)','d[∫f(x)]/dx=f(x)+C','d/dx[∫f(x)dx]=f(x)'],answer:'D'},
    {no:'7',type:'选择题',page:44,stem:'不定积分 ∫(x²+1)/x dx=（ ）。',options:['x²/2+ln|x|+C','x²/2+x+C','x+ln|x|+C','x³/3+x+C'],answer:'A'},
    {no:'8',type:'选择题',page:44,stem:'不定积分 ∫tan²x dx=（ ）。',options:['tan x−x+C','tan x+x+C','−tan x−x+C','−tan x+x+C'],answer:'A'},
    {no:'9',type:'选择题',page:44,stem:'不定积分 ∫(2x+2)/(x²+2x+3)dx=（ ）。',options:['ln(x²+2x+3)+C','ln(x²+2x+3)/2+C','(1/2)arctan((x+1)/√2)+C','arctan(x+1)/2+C'],answer:'A'},
    {no:'10',type:'选择题',page:44,stem:'若 ∫f(x)dx=F(x)+C，则 ∫x f(x²)dx=（ ）。',options:['F(x²)/2+C','F(x²)+C','2F(x²)+C','F(x)/2+C'],answer:'A'},
    {no:'11',type:'选择题',page:45,stem:'若 ∫f(x)dx=x³+C，则 ∫f(cos x)sin x dx=（ ）。',options:['−cos³x+C','cos³x+C','−3cos²x sin x+C','3cos³x sin x+C'],answer:'A'},
    {no:'12',type:'选择题',page:45,stem:'不定积分 ∫eˣ/(1+eˣ)dx=（ ）。',options:['ln(1+eˣ)+C','−ln(1+eˣ)+C','1+eˣ+C','eˣ/(1+eˣ)²+C'],answer:'A'},
    {no:'13',type:'选择题',page:45,stem:'不定积分 ∫arcsin x dx=（ ）。',options:['x arcsin x+√(1−x²)+C','x arcsin x−√(1−x²)+C','arcsin x+√(1−x²)+C','1/√(1−x²)+C'],answer:'A'},
    {no:'14',type:'选择题',page:45,stem:'下列各组函数中，属于同一个函数的原函数的是（ ）。',options:['√(x+1)与ln(2x+1)','ln(x²)与ln(2x)','e^(3x)与3e^(3x)','−cos²x与sin²x'],answer:'D'},
    {no:'15',type:'选择题',page:45,stem:'不定积分 ∫dx/[x ln x ln(ln x)]=（ ）。',options:['ln|ln(ln x)|+C','ln(ln x)+C','ln x+C','1/ln(ln x)+C'],answer:'A'},
    {no:'16',type:'选择题',page:45,stem:'设 F(x)=x sin x+2cos x，则 lim[h→0](F(1+h)−F(1−h))/h=（ ）。',options:['2sin1','2cos1−2sin1','2sin1−2cos1','4cos1'],answer:'B'},
    {no:'17',type:'选择题',page:45,stem:'设 f(x)=lim[n→∞] n ln(1+x/n)，则 ∫f(x)dx=（ ）。',options:['x+C','x²/2+C','x ln x+C','eˣ+C'],answer:'B'},
    {no:'18',type:'选择题',page:45,stem:'已知 f′(x)=2eˣ，且 f(0)=1，则 ∫f(x)dx=（ ）。',options:['2eˣ+C','2xeˣ+C','2eˣ−x+C','eˣ²+C'],answer:'C'}
  ];
  const blanks=[
    {no:'1',type:'填空题',page:46,stem:'已知 f(x)=x² sin x，则 ∫f′(x)dx=____。',answer:'2x sin x+x² cos x+C'},
    {no:'2',type:'填空题',page:46,stem:'若 f(x)=∫e^(x/2)dx，则 f″(0)=____。',answer:'1/2'},
    {no:'3',type:'填空题',page:46,stem:'计算 ∫(sin²x/cos x)dx=____。',answer:'sin x+C'},
    {no:'4',type:'填空题',page:46,stem:'d/dx[∫f(x)dx]=____。',answer:'f(x)'},
    {no:'5',type:'填空题',page:46,stem:'d[∫f(x)dx]=____。',answer:'f(x)dx'},
    {no:'6',type:'填空题',page:46,stem:'若 ∫f(x)dx=2e^(−2x)+C，且 f(x)=ae^(−2x)，则 a=____。',answer:'−4'},
    {no:'7',type:'填空题',page:46,stem:'计算 ∫x f(1−x²)dx=____。',answer:'−(1−x²)²/2+C'},
    {no:'8',type:'填空题',page:46,stem:'计算 ∫dx/(x²−1)=____。',answer:'(1/2)ln|(x−1)/(x+1)|+C'},
    {no:'9',type:'填空题',page:46,stem:'计算 ∫eˣ/√(1−e²ˣ) dx=____。',answer:'arcsin(eˣ)+C'},
    {no:'10',type:'填空题',page:47,stem:'若 F′(x)=ln x，则 F(x)=____（含任意常数）。',answer:'x ln x−x+C'},
    {no:'11',type:'填空题',page:47,stem:'计算不定积分 ∫x⁴dx=____。',answer:'x⁵/5+C'}
  ];
  add(choice.concat(blanks),'BF-V126-IND','蓝色森林','第三章 一元函数积分学','第一节 不定积分','bf-v126-math-indefinite','蓝色森林｜第三章第一节 不定积分（题目与官方答案文字版）','official_verified','official');
  const qfw=[
    ['1','∫(x e^(x²)+ln x)dx','(1/2)e^(x²)+x ln x−x+C',81],
    ['2','∫e^x ln(1+e^x)dx','(1+e^x)ln(1+e^x)−(1+e^x)+C',81],
    ['3','∫(arcsin√x+1)/√x dx','2√x·arcsin√x+2√(1−x)+2√x+C',81],
    ['4','∫arcsin√x/√(1−x) dx','AI解答：令 t=√x 后分部积分，结果按题面定义域化简。',81],
    ['5','∫sin(ln x)dx','x[sin(ln x)−cos(ln x)]/2+C',80],
    ['6','∫ln²x dx','x(ln²x−2ln x+2)+C',80],
    ['7','∫e^x sin x dx','(e^x/2)(sin x−cos x)+C',80],
    ['8','∫sec³x dx','(1/2)(sec x tan x+ln|sec x+tan x|)+C',80],
    ['9','∫x² cos x dx','x² sin x+2x cos x−2sin x+C',78],
    ['10','∫x² ln x dx','(x³/3)ln x−x³/9+C',78],
    ['11','∫ln x dx','x ln x−x+C',79],
    ['12','∫arcsin x dx','x arcsin x+√(1−x²)+C',79],
    ['13','∫arccos x dx','x arccos x−√(1−x²)+C',79],
    ['14','∫arctan x dx','x arctan x−(1/2)ln(1+x²)+C',79],
    ['15','∫ln(x+√(1+x²))dx','x ln(x+√(1+x²))−√(1+x²)+C',79],
    ['16','∫ln(1+x²)dx','x ln(1+x²)−2x+2arctan x+C',79],
    ['17','∫x sin x dx','−x cos x+sin x+C',78],
    ['18','∫x e^x dx','e^x(x−1)+C',78],
    ['19','∫x ln x dx','(x²/2)ln x−x²/4+C',78],
    ['20','∫x arctan x dx','(x²/2)arctan x−x/2+(1/2)arctan x+C',78],
    ['21','∫x csc²x dx','−x cot x+ln|sin x|+C',78],
    ['22','∫x² cos x dx','x² sin x+2x cos x−2sin x+C',78],
    ['23','∫x³e^x dx','e^x(x³−3x²+6x−6)+C',78],
    ['24','∫x² sin x dx','−x² cos x+2x sin x+2cos x+C',78]
  ].map(([no,stem,answer,page])=>({no,type:'计算题',stem,answer,page}));
  add(qfw,'QFW-V126-IND','全方位','第三章 一元函数积分学','第一节 不定积分','qfw-v126-math-indefinite','全方位｜第三章第一节 不定积分（文字题与AI解答）','ai_solved','ai');
  db.version='v126-math-indefinite-import';db.generatedAt='2026-09-08T16:00:00+08:00';
  globalThis.V126_MATH_AUDIT={blueForest:29,qfw:24,officialAnswers:'29/29',qfwAnswers:'24/24（AI解答，其中1题保留方法说明）'};
})();
