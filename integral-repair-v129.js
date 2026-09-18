(function(){
  const db=globalThis.BUNDLED_QUESTION_BANK;
  if(!db || !Array.isArray(globalThis.BF_REPAIR_V129)) return;
  const setId='bf-v127-math-indefinite-complete';
  const set=db.completeSetRegistry.find(s=>s.id===setId);
  const byId=new Map(db.questions.map(q=>[q.id,q]));
  const items=[];
  for(const [i,d] of BF_REPAIR_V129.entries()) {
    const q=byId.get(d.id);
    if(!q) throw Error('Missing existing question '+d.id);
    const sourcePage=`question-images/math-indefinite-蓝色森林/page-${d.page-1}.jpg`;
    const ansImage=`question-images/bf-integral-answer/page-${String(d.answerPage).padStart(2,'0')}.jpg`;
    Object.assign(q,{
      stem:d.stem,textStem:d.stem,options:d.options,textOptions:d.options,answer:d.answer,
      analysis:d.analysis,officialAnalysis:d.note?'':d.analysis,
      reviewedAnalysis:d.note?d.analysis:'',reviewNote:d.note,
      type:d.type,originalNo:d.no,sourcePageNo:d.page,images:[sourcePage],
      textFirstQuestionView:true,integralRepairVersion:129,
      practiceSetId:setId,practiceSetTitle:set.title,completeSetRefs:[setId],
      practiceSection:d.type,practiceOrder:i+1,sourceOrder:i+1,importOrder:1260000+i,
      studyDate:'2026-09-08',dayLabel:'9.8 不定积分',
      answerAuthority:d.note?'user_upload':'official',answerStatus:d.note?'unverified':'official_verified',
      analysisImages:[ansImage],analysisImageLabel:`蓝色森林不定积分｜${d.type}${d.no}｜答案PDF第${d.answerPage}页`,
      analysisPdf:'bf-integral-answers.pdf#page='+d.answerPage,analysisPdfLabel:'打开本题所在答案页',
      answerSource:'用户上传蓝色森林《第三章 第一节 不定积分》答案PDF',
      analysisSource:'按蓝色森林答案PDF逐题转写；保留原始答案页',
      textStatus:'transcribed_source_checked',assignmentGroup:'课后作业',
      tags:['蓝色森林','高等数学','第三章','第一节','不定积分','课后作业','逐题纯文字','逐题解析']
    });
    if(d.id==='BF-V127-IND-024') q.analysisImages.push('question-images/bf-integral-answer/page-10.jpg');
    if(d.id==='BF-V127-IND-050') q.analysisImages.push('question-images/bf-integral-answer/page-15.jpg');
    items.push({questionId:q.id,displayNo:d.no,section:d.type,order:i+1,page:d.page});
  }
  Object.assign(set,{items,sections:['选择题','填空题','计算题','证明题'],questionCount:79,sourceQuestionCount:79,
    answerStatus:'official_with_review_notes',answerCoverage:'79题含文字答案、逐题步骤和答案原页；有勘误说明的题单独提示',
    archiveNote:'顺序：选择1—18 → 填空1—11 → 计算1（1）—1（46）→ 计算2—4 → 证明1。第4题保留两个小问。'});
  set.title='蓝色森林｜课后练习｜高等数学｜第三章 一元函数积分学｜第一节 不定积分（79题）';
  for(const item of set.items) byId.get(item.questionId).practiceSetTitle=set.title;
  for(const q of db.questions.filter(q=>/^BF-V12[67]-IND-/.test(String(q.id)))) q.titleLabel='第一节 不定积分';
  // Old QFW imports contain unresolved transcriptions and generic placeholders.
  // Preserve IDs and records, but do not present those answers as verified.
  const qs=db.completeSetRegistry.find(s=>s.id==='qfw-v127-math-indefinite-complete');
  if(qs){
    qs.items.sort((a,b)=>(Number(a.page)-Number(b.page))||(Number(a.order)-Number(b.order)));
    qs.items.forEach((it,i)=>{
      it.order=i+1;const q=byId.get(it.questionId);if(!q)return;
      Object.assign(q,{practiceSetId:qs.id,practiceSetTitle:qs.title,completeSetRefs:[qs.id],
        practiceOrder:i+1,sourceOrder:i+1,answerStatus:'unverified',answerAuthority:'unverified',
        reviewNote:'上一版全方位录入尚未完成逐题原式核对，部分题目存在重复、漏录或答案不完整。本题按原资料页码暂排，旧答案仅供核对。',
        answerSource:'上一版AI整理，尚未逐题验算',analysisSource:'待按全方位原题重新核对',analysis:''});
    });
    qs.title='全方位｜课后练习｜高等数学｜第三章 一元函数积分学｜第一节 不定积分（待核对）';
    for(const item of qs.items) byId.get(item.questionId).practiceSetTitle=qs.title;
    qs.answerStatus='unverified';qs.answerCoverage='旧录入97张题卡；不代表完整原题覆盖';
    qs.archiveNote='保留旧ID与进度。原题完整性和逐题答案待核对，当前按资料页码排列。';
  }
  db.version='v131-complete-set-visibility-repair';
})();
