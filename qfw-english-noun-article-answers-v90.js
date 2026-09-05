/* v90 全方位英语｜名词与冠词完整题组：62题答案补齐 */
(function(){
  const db=globalThis.BUNDLED_QUESTION_BANK;
  if(!db||!Array.isArray(db.questions)) return;
  const setId='qfw-homework-v66-english-noun-article';
  const pdf='answer-documents/qfw-english-noun-article/qfw-noun-article-answer-notes-v90.pdf';
  const src='用户上传的全方位《第一部分 基础语法：名词练习题、冠词练习题》答案版PDF';

  const A={
    1:'专有名词；普通名词',
    2:'个体名词；集体名词；物质名词；抽象名词',
    3:'the Great Wall；China；Monday；the Spring Festival；the United Nations；Europe',
    4:'people；kindness；piano',
    5:'courage；friendship；knowledge；success；dream；confidence；freedom；happiness；peace',
    6:'D', 7:'B', 8:'C', 9:'B', 10:'B',
    11:'可数名词；单数；复数',
    12:'不可数名词',
    13:'students；maps；classes；watches；babies；families；boys；toys；knives；proofs；heroes；tomatoes；feet；teeth；means；mice；children；Chinese；men；women',
    14:'buses；mice；deer；dictionaries；glasses；heroes；butterflies；stamps；oxen；knives',
    15:'B',16:'D',17:'A',18:'C',19:'C',20:'A',21:'B',22:'A',23:'C',24:'B',25:'C',26:'C',
    27:'D',28:'C',29:'B',30:'B',31:'B',32:'B',33:'D',34:'C',35:'A',36:'C',
    37:"Tom's book；the children's toys；one/a week's holiday（= one-week holiday）；two hours' drive（= two-hour drive）；the city's development / the development of the city；the background music of the movie；China's population / the population of China；the importance of learning English / the importance of English learning；the influence/effect/impact of the Internet；the diversity of cultures",
    38:'a/an；可数名词单数；a；an',
    39:'一类人；一类物；不具体的；序数词',
    40:'this；these；that；those',
    41:'whose；any；each；every；some',
    42:'the',
    43:'B',44:'B',45:'B',46:'B',47:'D',48:'A',49:'B',50:'D',51:'C',52:'B',53:'A',54:'C',55:'B',56:'C',57:'B',58:'C',59:'C',60:'C',61:'A',62:'D'
  };

  const pageFor=(n)=>{
    if(n<=6) return 1;
    if(n<=13) return 2;
    if(n<=18) return 3;
    if(n<=21) return 4;
    if(n<=26) return 5;
    if(n<=33) return 6;
    if(n<=37) return 7;
    if(n<=46) return 9;
    if(n<=51) return 10;
    if(n<=59) return 11;
    return 12;
  };

  let count=0;
  for(let n=1;n<=62;n++){
    const id=`${setId}::v75-${n}`;
    const q=db.questions.find(x=>String(x.id)===id);
    if(!q) continue;
    q.answer=A[n]||'';
    q.answerStatus='official_verified';
    q.answerAuthority='official';
    q.answerSource=src;
    q.analysisSource=src;
    const p=pageFor(n);
    q.analysisPdf=`${pdf}#page=${p}`;
    q.analysisPdfLabel=`打开全方位名词/冠词答案版PDF第${p}页`;
    q.officialAnalysis=`答案已按用户上传的全方位名词/冠词答案版PDF逐题对应核对，详见PDF第${p}页。`;
    q.tags=Array.from(new Set([...(q.tags||[]),'官方答案','逐题答案对应','v90']));
    count++;
  }

  // 修正两处此前纯文字转写与本次答案版原资料不一致的问题。
  const q37=db.questions.find(x=>String(x.id)===`${setId}::v75-37`);
  if(q37){
    q37.stem='将下列短语译成英语：汤姆的书；孩子们的玩具；一周的假期；两小时车程；这座城市的发展；这部电影的背景音乐；中国的人口；英语学习的重要性；互联网的影响；文化的多样性。';
    q37.textStem=q37.stem;
    q37.officialAnalysis='答案及题干均按用户上传的全方位答案版PDF第7页重新核对；此前“我父亲的一位朋友”已修正为原资料中的“孩子们的玩具”。';
  }
  const q47=db.questions.find(x=>String(x.id)===`${setId}::v75-47`);
  if(q47){
    q47.stem="There isn't water or air on the moon, and ______ man can't live on it.";
    q47.textStem=q47.stem;
    q47.officialAnalysis='原资料只有 man 前一处冠词空格，答案为 D（不填）。已同步修正此前多出的第一个空格。';
  }
  const q52=db.questions.find(x=>String(x.id)===`${setId}::v75-52`);
  if(q52){
    q52.officialAnalysis='原资料第11页中 B、C 两项印刷内容均为 “The; an”，且均出现蓝色标注；本题按首个正确选项 B 记录，保留原资料选项不擅自改写。';
  }

  const set=(db.completeSetRegistry||[]).find(s=>String(s.id)===setId);
  if(set){
    set.answerStatus='official_complete_set';
    set.answerPageCount=12;
    set.answerDocument=pdf;
    set.answerDocumentLabel='全方位｜名词与冠词答案版PDF（12页）';
    set.answerCoverage='62/62题已逐题绑定答案';
    set.answerSource=src;
    set.archiveNote='v90：本套62题已全部补齐答案，并修正2处此前纯文字题干与本次答案版原资料不一致的位置。';
  }

  db.version='v90-qfw-english-noun-article-answers';
  db.generatedAt='2026-08-15T16:58:00+08:00';
  globalThis.QFW_NOUN_ARTICLE_V90_REPORT={setId,updated:count,total:62};
})();
