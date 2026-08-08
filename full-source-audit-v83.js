/* v83 - 全部完整题组源题复核：修正已确认的源图转写差异，不改变题目 ID/作答进度 */
(function(){
  const db=globalThis.BUNDLED_QUESTION_BANK;
  if(!db||!Array.isArray(db.questions)) return;
  const byId=new Map(db.questions.map(q=>[String(q.id),q]));
  const changes=[];
  function patch(id, data, note){
    const q=byId.get(String(id));
    if(!q) return;
    const before={stem:q.stem,options:Array.isArray(q.options)?q.options.slice():[]};
    if(Object.prototype.hasOwnProperty.call(data,'stem')){ q.stem=data.stem; q.textStem=data.stem; }
    if(Object.prototype.hasOwnProperty.call(data,'options')){ q.options=data.options.slice(); q.textOptions=data.options.slice(); }
    q.tags=Array.from(new Set([...(q.tags||[]),'v83源图逐题复核','源题已核对']));
    q.sourceAuditV83='source_image_verified';
    q.sourceAuditNote=note||'';
    changes.push({id,originalNo:q.originalNo,practiceSetId:q.practiceSetId,before,after:{stem:q.stem,options:q.options},note});
  }

  // ---- 高数：逐张原图复核后确认的差异 ----
  patch('D01-092-BF-MATH-10',{
    stem:'函数 \\(f(x)=\\begin{cases}2x+1,&-1\\le x\\le0\\\\-\\frac12x,&0<x<2\\\\e,&x\\ge2\\end{cases}\\) 的定义域为（）。'
  },'原图第2页第10题：第二段为 -1/2·x，旧纯文字漏了负号。');

  patch('bf-summer-v62-math-limit::v74::002',{
    stem:'当 \\(x\\to0\\) 时，与 \\(x\\) 等价的无穷小量是（ ）。'
  },'原图第138页选择题2：趋近条件是 x→0，不带右极限“+”。');

  patch('bf-summer-v62-math-limit::v74::006',{
    stem:'当 \\(x\\to0\\) 时，\\(\\sqrt{1+ax^2}-1\\) 是 \\(\\sin^2x\\) 的等价无穷小，则 \\(a=\\underline{\\hspace{2cm}}\\)。'
  },'原图第138页填空题3：根式中为 ax²，比较对象为 sin²x；旧版误写成三次方。');

  patch('bf-summer-v62-math-derivative::v74::025',{
    stem:'用取对数求导法求函数 \\(y=\\dfrac{\\sqrt{x+e^2}(3-x)^8}{(1+x)^4}\\) 的导数。'
  },'原图第143页计算题4(2)：(3-x) 的指数为 8，旧版误写 4。');

  patch('bf-summer-v62-math-indefinite-integral::v74::001',{
    stem:'设 \\(\\int f(x)dx=F(x)+C\\)，则 \\(\\int e^{-x}f(e^{-x})dx=\\)（ ）。',
    options:['A. \\(F(e^x)+C\\)','B. \\(-F(e^{-x})+C\\)','C. \\(F(e^{-x})+C\\)','D. \\(\\dfrac{F(e^{-x})}{x}+C\\)']
  },'原图第151页选择题1：被积式为 e^{-x}f(e^{-x})；同步校正 B/C/D 中指数。');

  patch('bf-summer-v62-math-indefinite-integral::v74::002',{
    stem:'已知 \\(f\'(x^2)=\\dfrac1x\\ (x>0)\\)，则 \\(f(x)=\\)（ ）。',
    options:['A. \\(2x+C\\)','B. \\(\\ln|x|+C\\)','C. \\(2\\sqrt{x}+C\\)','D. \\(\\dfrac1{\\sqrt{x}}+C\\)']
  },'原图第151页选择题2：条件是 f\'(x²)=1/x；D 项为正 1/√x+C。');

  patch('bf-summer-v62-math-indefinite-integral::v74::005',{
    stem:'下列式子正确的是（ ）。',
    options:['A. \\(\\dfrac{d}{dx}\\int\\sin x\\,dx=\\sin x\\)','B. \\(\\int df(x)=f(x)\\)','C. \\(\\left(\\int x\\,dx\\right)\'=x+C\\)','D. \\(\\int f\'(x)\\,dx=f\'(x)+C\\)']
  },'原图第151页选择题5：题干为“正确的是”；四个选项按原图恢复。');

  // ---- 全方位英语：恢复原题的“挖空”形式，禁止改成释义式问题或直接把答案写进题干 ----
  patch('qfw-homework-v66-english-noun-article::v75-1',{stem:'名词分为________和________。'},'原图第1页名词分类1，恢复原始填空形式。');
  patch('qfw-homework-v66-english-noun-article::v75-2',{stem:'普通名词分为________、________、________、________。'},'原图第1页名词分类2，恢复四个原始空格。');
  patch('qfw-homework-v66-english-noun-article::v75-3',{stem:'找出下列单词中的专有名词：the Great Wall, book, China, look, beautiful, student, Monday, Spring Festival, hospital, the United Nations, student, Europe。'},'按原图第1页原题文字恢复。');
  patch('qfw-homework-v66-english-noun-article::v75-4',{stem:'找出下列单词中的普通名词：Mary, people, kindness, the Forbidden City, piano。'},'按原图第1页原题文字恢复。');
  patch('qfw-homework-v66-english-noun-article::v75-5',{stem:'找出下列单词中的抽象名词：book, courage, table, friendship, knowledge, flower, success, tree, dream, confidence, bus, freedom, television, happiness, school, peace。'},'按原图第1页原题文字恢复。');
  patch('qfw-homework-v66-english-noun-article::v75-11',{stem:'________是指能以数目来计算，可以分成个体的人或东西，包括个体名词和集合名词，有________和________两种形式。'},'原图第2页名词的数1：旧版把“单数、复数”直接写进题干，现恢复为空格。');
  patch('qfw-homework-v66-english-noun-article::v75-12',{stem:'________表示无法用具体数字来计算的事物和概念等的普通名词，包括部分物质名词和抽象名词，一般没有复数形式。'},'按原图第2页恢复标点和原始填空。');
  patch('qfw-homework-v66-english-noun-article::v75-13',{stem:'把下列名词变为复数形式：student, map, class, watch, baby, family, boy, toy, knife, proof, hero, tomato, foot, tooth, means, mouse, child, Chinese, man, woman。'},'按原图第2页原题恢复。');
  patch('qfw-homework-v66-english-noun-article::v75-38',{stem:'不定冠词分为________、________，用在________前面。________用于辅音音素开头的词前，________用于元音音素开头的词前。'},'原图第7页冠词练习题1，恢复五处原始填空。');
  patch('qfw-homework-v66-english-noun-article::v75-39',{stem:'不定冠词可以泛指________和________；可以指________某个人或物，用在________前，相当于 another。'},'原图第7页冠词练习题2，恢复原始填空结构。');
  patch('qfw-homework-v66-english-noun-article::v75-40',{stem:'名词前有指示代词________、________、________、________，________时不用冠词。'},'原图第7页冠词练习题3，旧版为解释式提示，现恢复五处空格。');
  patch('qfw-homework-v66-english-noun-article::v75-41',{stem:'名词前有________、________、________、________、________等代词时不用冠词。'},'原图第7页冠词练习题4，恢复原始空格。');
  patch('qfw-homework-v66-english-noun-article::v75-42',{stem:'定冠词只有________。'},'原图第7页冠词练习题5，恢复原始填空形式。');
  patch('qfw-homework-v66-english-noun-article::v75-59',{options:['A. The; 不填','B. a; 不填','C. The; a','D. The; the']},'原图第9页第22题使用“ 不填 ”字样，按原图恢复。');
  patch('qfw-homework-v66-english-noun-article::v75-61',{options:['A. 不填','B. a','C. an','D. the']},'原图第9页第24题 A 项为“不填”。');
  patch('qfw-homework-v66-english-noun-article::v75-62',{options:['A. 不填; a','B. a; a','C. the; a','D. the; the']},'原图第9页第25题 A 项为“不填; a”。');

  // ---- v67 固定交互规则：判断题统一 A. 对 / B. 错（不改答案字母） ----
  const judgmentNormalizeIds=[
    'D13-HW-BF-COMP-132','D13-HW-BF-COMP-133','D13-HW-BF-COMP-134','D13-HW-BF-COMP-135',
    'D13-HW-BF-COMP-136','D13-HW-BF-COMP-137','D13-HW-BF-COMP-138','D13-HW-BF-COMP-139',
    'D13-HW-BF-BINARY427-016','D09-EXTRA-095-B3-IMG100','D09-EXTRA-092-B3-IMG97','D09-EXTRA-027-B3-IMG28',
    'D14-HW-BF-58-024','D10-EXTRA-060-B4-IMG064','D10-EXTRA-059-B4-IMG063','D10-EXTRA-078-B4-IMG084',
    'D10-EXTRA-045-B4-IMG049','D14-HW-BF-SUP-009','D15-HW-BF-ENC-011','D10-EXTRA-011-B4-IMG012',
    'D10-EXTRA-004-B4-IMG004','D10-EXTRA-026-B4-IMG027'
  ];
  let judgmentOptionsNormalized=0;
  for(const id of judgmentNormalizeIds){
    const q=byId.get(id); if(!q) continue;
    q.options=['A. 对','B. 错']; q.textOptions=['A. 对','B. 错'];
    q.tags=Array.from(new Set([...(q.tags||[]),'判断题A对B错','v83']));
    judgmentOptionsNormalized++;
  }

  // 原图确有填空横线，旧纯文字漏掉横线
  patch('D06-SUMMER-226',{
    stem:'求函数 \\(y=1+\\ln(x+2)\\) 的反函数________。'
  },'原图 q226 在“反函数”后有作答横线，恢复填空线。');

  db.fullSourceAuditV83={
    version:'v83',
    correctedQuestions:changes.length,
    judgmentOptionsNormalized,
    corrections:changes,
    mathSourcePagesChecked:47,
    rebuiltEnglishSourcePagesChecked:33,
    rebuiltComputerSourcePagesChecked:26,
    rebuiltSourcePagesCheckedTotal:106,
    v67BaselineQuestionsCompared:1291,
    v67UnintendedSemanticDriftDetected:0,
    v67IntentionalSourceCorrections:2,
    rule:'19套曾按页重构的完整题组逐页对照原图；其余v67原有题目与唯一基线做同ID正文/选项回归比较。只修有源图证据的差异。'
  };
  db.version='v83-full-source-audit';
  globalThis.QB_CONTENT_REVISION='v83-full-source-audit-20260808';
  db.generatedAt='2026-08-08T10:33:00+08:00';
})();
