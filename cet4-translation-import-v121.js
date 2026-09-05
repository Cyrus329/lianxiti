/* v121: 四级翻译005｜中国结｜纯文字题干 + 标准答案文字转写 + 原题/批改图 */
(function(){
  const db=globalThis.BUNDLED_QUESTION_BANK;
  if(!db||!Array.isArray(db.questions)) return;
  db.completeSetRegistry=Array.isArray(db.completeSetRegistry)?db.completeSetRegistry:[];

  const questionId='CET4-V121-TRANS-005';
  const setId='cet4-v121-translation-chinese-knots';
  const title='四级翻译 005｜中国结（Chinese Knots）';
  const topic='传统文化 · 中国结 · 手工艺';
  const stem='中国结（Chinese knots）是中华民族特有的传统手工艺品，有四千余年历史。中国结以一根完整的丝线为原料，通过穿、绕、结、扣（looping）呈现出对称和谐的造型。在色彩运用上，多选用红色、金色等鲜艳明快的颜色，这些颜色在中华文化中象征着喜庆、繁荣。如今，现代设计师将中国结元素融入服饰中，又推出全新的文创产品。';
  const answer='Chinese knots, as unique traditional handicrafts of the Chinese nation, boast a history of over 4,000 years. With a complete silk thread as the raw material, Chinese knots present symmetrical and harmonious shapes by threading, winding, knotting and looping. In terms of color application, red, gold and other bright and lively colors are mostly utilized, and these colors symbolize joy and prosperity in Chinese culture. These days, modern designers integrate the elements of Chinese knots into clothing, launching brand-new cultural and creative products.';

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
    officialAnalysis:'本题按用户上传的四级翻译课堂批改图录入。中文题干逐句转写；英文答案依据手写译文及教师红笔修正转写。若文字转写与原图存在细微差异，以答案/批改原图为最终核对依据。',
    questionSource:'四级翻译课堂资料',
    source:'四级',
    sourceRecognition:'manual+user_provided',
    answerSource:'用户上传的四级翻译课堂批改图',
    analysisSource:'用户上传的答案/批改原图',
    answerStatus:'standard_verified',
    answerAuthority:'standard',
    auditCategory:'locked_image',
    difficulty:'3',
    tags:['四级','大学英语四级','四级套题','翻译','汉译英','传统文化','中国结','手工艺','用户上传','标准答案','v121'],
    images:['question-images/cet4/translation-005-chinese-knots-question.jpg'],
    analysisImages:['question-images/cet4/translation-005-chinese-knots-standard-answer.jpg'],
    analysisImageLabel:'四级翻译标准答案/教师批改原图',
    originalNo:'翻译005',
    studyDate:'2026-08-30',
    dayLabel:'8.30 四级翻译',
    importOrder:1210005,
    sourceOrder:5,
    titleLabel:title,
    textStatus:'manual_transcription_from_user_image',
    assignmentGroup:'四级套题',
    assignmentOrder:4,
    assignmentAliases:['四级套题'],
    practiceSetId:setId,
    practiceSetTitle:title,
    practiceSection:'翻译',
    practiceOrder:5,
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
    studyDate:'2026-08-30',
    dayLabel:'8.30',
    pageMode:false,
    items:[{questionId,displayNo:'5',section:'翻译',order:1}],
    questionCount:1,
    sourceQuestionCount:1,
    sourceCountLabel:'翻译 1 题',
    sections:['翻译','中国结','传统文化','手工艺'],
    answerStatus:'standard_verified',
    answerCoverage:'纯文字中文题干 + 英文标准答案文字转写 + 原题图 + 标准答案/教师批改原图',
    catalogOrder:5,
    archiveNote:'v121：新增四级翻译005中国结。一题一卡；题干与答案均有纯文字版，题面图仅保留中文原题，完整课堂批改图仅在答案/解析区域显示。'
  };
  const si=db.completeSetRegistry.findIndex((item)=>String(item&&item.id)===setId);
  if(si>=0) db.completeSetRegistry[si]=set;
  else db.completeSetRegistry.push(set);

  db.version='v121-cet4-translation-005';
  db.generatedAt='2026-08-30T16:18:00+08:00';
  globalThis.V121_CET4_AUDIT={
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
