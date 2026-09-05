/* v118: 四级翻译002-003｜中秋节、冬至｜纯文字题干 + 标准答案转写 + 原图 */
(function(){
  const db=globalThis.BUNDLED_QUESTION_BANK;
  if(!db||!Array.isArray(db.questions)) return;
  db.completeSetRegistry=Array.isArray(db.completeSetRegistry)?db.completeSetRegistry:[];

  const entries=[
    {
      questionId:'CET4-V118-TRANS-002',
      setId:'cet4-v118-translation-mid-autumn-festival',
      order:2,
      originalNo:'翻译002',
      title:'四级翻译 002｜中秋节（The Mid-Autumn Festival）',
      topic:'传统文化 · 中秋节 · 月饼',
      knowledgeBlock:'传统文化 · 中秋节 · 月饼',
      stem:'中秋节（the Mid-Autumn Festival）是中华民族极具代表性的传统节日，日期为农历八月十五。月饼最初作为祭月的供品出现，现已演变为团圆的象征。不同地域的自然禀赋与饮食偏好，造就了月饼的多元风貌。月饼通常呈圆形，象征着家庭和睦——这正是中秋节的核心主题。馅料丰富多彩，兼有鲜明的地域特色。',
      answer:'The Mid-Autumn Festival, as a highly/considerably iconic traditional festival of the Chinese nation, falls on the 15th day of the eighth lunar month. Mooncakes first emerged as offerings of/for moon worship, which have evolved into a symbol of reunion nowadays. Natural endowments and dietary preferences in diverse regions have contributed to the rich variety of mooncakes. The food/snacks is usually round, symbolizing family harmony — which is the core theme of the festival. The fillings are rich and diverse with distinctive regional features.',
      questionImage:'question-images/cet4/translation-002-mid-autumn-question.jpg',
      answerImage:'question-images/cet4/translation-002-mid-autumn-standard-answer.jpg',
      sourceOrder:2,
      importOrder:1180002
    },
    {
      questionId:'CET4-V118-TRANS-003',
      setId:'cet4-v118-translation-winter-solstice',
      order:3,
      originalNo:'翻译003',
      title:'四级翻译 003｜冬至（The Winter Solstice）',
      topic:'传统文化 · 冬至 · 饺子',
      knowledgeBlock:'传统文化 · 冬至 · 饺子',
      stem:'冬至（the Winter Solstice）在中国有着悠久的历史和深厚的文化底蕴，是兼具自然与人文内涵的传统节日。这天，北半球的白昼最短，黑夜最长。全国各地都有不同的饮食习俗，其核心多与“御寒养生”相关。北方地区普遍有吃饺子的习俗，饺子的魅力不仅在于味道，更在于制作中的灵活性与创造性，其形状似古代银元宝，也寓意着“招财进宝”。',
      answer:'The Winter Solstice, as a traditional festival with nature and humanistic connotations, boasts a long history and profound cultural roots in China. On this day, the Northern Hemisphere has/features the shortest daytime and the longest nighttime. There are various food customs across the country whose core is mostly related with “keeping warm and healthy”. Northern regions of China have a widespread custom of eating jiaozi. Its charm lies not merely in its flavor but also in the flexibility and creativity in its making/preparation. Its shape is like ancient silver ingots, symbolizing “attracting wealth” meanwhile.',
      questionImage:'question-images/cet4/translation-003-winter-solstice-question.jpg',
      answerImage:'question-images/cet4/translation-003-winter-solstice-standard-answer.jpg',
      sourceOrder:3,
      importOrder:1180003
    }
  ];

  for(const item of entries){
    const question={
      id:item.questionId,
      subject:'英语',
      chapter:'大学英语四级',
      section:'翻译',
      knowledgeBlock:item.knowledgeBlock,
      type:'汉译英',
      stem:item.stem,
      textStem:item.stem,
      options:[],
      textOptions:[],
      answer:item.answer,
      analysis:'',
      officialAnalysis:'本题标准答案按用户上传的批改图人工转写。图中保留了教师批注、替换词和斜线备选表达；文字版按图转写，不擅自改写。若文字与原图有细微差异，以标准答案原图为准。',
      questionSource:'四级翻译标准答案资料',
      source:'四级',
      sourceRecognition:'manual+user_provided',
      answerSource:'用户上传的四级翻译标准答案图片',
      analysisSource:'用户上传的标准答案原图',
      answerStatus:'standard_verified',
      answerAuthority:'standard',
      auditCategory:'locked_image',
      difficulty:'3',
      tags:['四级','大学英语四级','四级套题','翻译','汉译英','传统文化','用户上传','标准答案','v118'],
      images:[item.questionImage],
      analysisImages:[item.answerImage],
      analysisImageLabel:'四级翻译标准答案原图',
      originalNo:item.originalNo,
      studyDate:'2026-08-28',
      dayLabel:'8.28 四级翻译',
      importOrder:item.importOrder,
      sourceOrder:item.sourceOrder,
      titleLabel:item.title,
      textStatus:'manual_transcription_from_user_image',
      assignmentGroup:'四级套题',
      assignmentOrder:4,
      assignmentAliases:['四级套题'],
      practiceSetId:item.setId,
      practiceSetTitle:item.title,
      practiceSection:'翻译',
      practiceOrder:item.order,
      collection:'cet4',
      cet4Section:'翻译',
      cet4Topic:item.topic,
      pageArchive:false
    };
    const qi=db.questions.findIndex((q)=>String(q&&q.id)===item.questionId);
    if(qi>=0) db.questions[qi]=Object.assign({},db.questions[qi],question); else db.questions.push(question);

    const set={
      id:item.setId,
      title:item.title,
      source:'四级',
      subject:'英语',
      assignmentGroup:'四级套题',
      collection:'cet4',
      cet4Section:'翻译',
      topic:item.topic,
      studyDate:'2026-08-28',
      dayLabel:'8.28',
      pageMode:false,
      items:[{questionId:item.questionId,displayNo:String(item.order),section:'翻译',order:1}],
      questionCount:1,
      sourceQuestionCount:1,
      sourceCountLabel:'翻译 1 题',
      sections:['翻译','传统文化'],
      answerStatus:'standard_verified',
      answerCoverage:'纯文字题干 + 标准答案文字转写 + 标准答案原图',
      catalogOrder:item.order,
      archiveNote:'v118：按用户上传图片新增四级翻译题。题干与答案均提供纯文字；题面使用仅含中文题干的裁图，完整批改图作为标准答案原图，避免做题时提前暴露答案。'
    };
    const si=db.completeSetRegistry.findIndex((setItem)=>String(setItem&&setItem.id)===item.setId);
    if(si>=0) db.completeSetRegistry[si]=set; else db.completeSetRegistry.push(set);
  }

  db.version='v118-cet4-translation-002-003';
  db.generatedAt='2026-08-28T12:20:00+08:00';
  globalThis.V118_CET4_AUDIT={
    importedQuestions:entries.length,
    importedSets:entries.length,
    category:'翻译',
    questionIds:entries.map((x)=>x.questionId),
    setIds:entries.map((x)=>x.setId),
    pureTextCoverage:'2/2',
    answerTextCoverage:'2/2',
    questionImageCoverage:'2/2',
    answerImageCoverage:'2/2'
  };
})();
