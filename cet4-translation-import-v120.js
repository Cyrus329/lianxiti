/* v120: 四级翻译004｜铁观音｜纯文字题干 + 答案文字转写 + 题面/批改原图 */
(function(){
  const db=globalThis.BUNDLED_QUESTION_BANK;
  if(!db||!Array.isArray(db.questions)) return;
  db.completeSetRegistry=Array.isArray(db.completeSetRegistry)?db.completeSetRegistry:[];

  const questionId='CET4-V120-TRANS-004';
  const setId='cet4-v120-translation-tieguanyin';
  const title='四级翻译 004｜铁观音（Tieguanyin）';
  const topic='传统文化 · 茶文化 · 铁观音';
  const stem='铁观音（Tieguanyin）是中国乌龙茶（oolong tea）的杰出代表，凭借独特的香气与口感享誉海内外。冲泡铁观音十分讲究水温与器具，恰当的冲泡方式能最大限度释放茶香。它产自福建安溪，那里气候湿润、土地肥沃。（传统制茶工艺代代相传，保留了茶叶天然的营养成分。）这一古老茶品通过创新改良，推出如茶包、茶味甜品等新式产品。';
  const answer='Tieguanyin, as a remarkable representative of Chinese oolong tea, is famed at home and abroad for its unique fragrance and taste. Brewing Tieguanyin places great emphasis on water temperature and tea sets; proper brewing methods can release tea aroma to the fullest. It is produced in Anxi of Fujian, where the climate is humid and the soil is fertile. Traditional tea-making techniques have been passed down from generation to generation, preserving the natural nutrients of tea. This ancient tea has given rise to new products such as tea bags and tea-flavored desserts through innovation and improvement.';

  const question={
    id:questionId,
    subject:'英语',
    chapter:'大学英语四级',
    section:'翻译',
    knowledgeBlock:topic,
    type:'汉译英',
    stem,
    textStem:stem,
    options:[],
    textOptions:[],
    answer,
    analysis:'',
    officialAnalysis:'本题答案按用户上传的四级翻译批改图人工转写，文字版采用图中教师红笔修正后的表达。若文字转写与原图存在细微差异，以答案原图为准。',
    questionSource:'四级翻译课堂资料',
    source:'四级',
    sourceRecognition:'manual+user_provided',
    answerSource:'用户上传的四级翻译批改图',
    analysisSource:'用户上传的答案/批改原图',
    answerStatus:'standard_verified',
    answerAuthority:'standard',
    auditCategory:'locked_image',
    difficulty:'3',
    tags:['四级','大学英语四级','四级套题','翻译','汉译英','茶文化','铁观音','传统文化','用户上传','答案原图','v120'],
    images:['question-images/cet4/translation-004-tieguanyin-question.jpg'],
    analysisImages:['question-images/cet4/translation-004-tieguanyin-standard-answer.jpg'],
    analysisImageLabel:'四级翻译答案原图（含教师批改）',
    originalNo:'翻译004',
    studyDate:'2026-08-29',
    dayLabel:'8.29 四级翻译',
    importOrder:1200004,
    sourceOrder:4,
    titleLabel:title,
    textStatus:'manual_transcription_from_user_image',
    assignmentGroup:'四级套题',
    assignmentOrder:4,
    assignmentAliases:['四级套题'],
    practiceSetId:setId,
    practiceSetTitle:title,
    practiceSection:'翻译',
    practiceOrder:4,
    collection:'cet4',
    cet4Section:'翻译',
    cet4Topic:topic,
    pageArchive:false
  };

  const qi=db.questions.findIndex((q)=>String(q&&q.id)===questionId);
  if(qi>=0) db.questions[qi]=Object.assign({},db.questions[qi],question);
  else db.questions.push(question);

  const set={
    id:setId,
    title,
    source:'四级',
    subject:'英语',
    assignmentGroup:'四级套题',
    collection:'cet4',
    cet4Section:'翻译',
    topic,
    studyDate:'2026-08-29',
    dayLabel:'8.29',
    pageMode:false,
    items:[{questionId,displayNo:'4',section:'翻译',order:1}],
    questionCount:1,
    sourceQuestionCount:1,
    sourceCountLabel:'翻译 1 题',
    sections:['翻译','茶文化','铁观音','传统文化'],
    answerStatus:'standard_verified',
    answerCoverage:'纯文字中文题干 + 英文答案文字转写 + 仅题干裁图 + 完整答案/批改原图',
    catalogOrder:4,
    archiveNote:'v120：新增四级翻译004铁观音。严格一题一卡；题面图只显示中文题干，完整批改图仅在答案/解析区域显示。题干和答案均有独立纯文字版本。'
  };
  const si=db.completeSetRegistry.findIndex((item)=>String(item&&item.id)===setId);
  if(si>=0) db.completeSetRegistry[si]=set;
  else db.completeSetRegistry.push(set);

  db.version='v120-cet4-translation-004';
  db.generatedAt='2026-08-29T19:55:00+08:00';
  globalThis.V120_CET4_AUDIT={
    importedQuestions:1,
    importedSets:1,
    category:'翻译',
    questionId,
    setId,
    pureTextCoverage:'1/1',
    answerTextCoverage:'1/1',
    questionImageCoverage:'1/1',
    answerImageCoverage:'1/1'
  };
})();
