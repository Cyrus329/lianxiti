/* v91 全方位英语｜句子成分及句子类型：复用原有作答题目加入完整题组 */
(function(){
  const db=globalThis.BUNDLED_QUESTION_BANK;
  if(!db||!Array.isArray(db.questions)) return;

  const setId='qfw-homework-v91-english-sentence-components-types';
  const pdf='answer-documents/qfw-english-sentence-components-types/qfw-sentence-components-types-answers.pdf';
  const sourceDoc='source-documents/qfw-english-sentence-components-types/qfw-sentence-components-types-source.docx';
  const answerSrc='用户上传的全方位《大学英语》基础课程《句子成分及句子类型练习题答案》PDF（7页）';
  const sourceSrc='用户上传的全方位句子成分及句子类型原题资料';

  const items=[
    ['D01-023-FW-ENG-SUBJECT-1','句子成分辨识1','主语与谓语',1],
    ['D01-024-FW-ENG-SUBJECT-2','主语选择题2','主语',1],
    ['D01-025-FW-ENG-SUBJECT-3','主语选择题3','主语',1],
    ['D01-026-FW-ENG-SUBJECT-4','主语选择题4','主语',1],
    ['D01-027-FW-ENG-SUBJECT-5','主语选择题5','主语',2],
    ['D01-028-FW-ENG-OBJECT-1','宾语辨识1','宾语',3],
    ['D01-029-FW-ENG-PREDICATIVE-1','表语辨识1','表语',3],
    ['D01-030-FW-ENG-ATTRIBUTIVE-1','定语辨识1','定语',3],
    ['D01-031-FW-ENG-ADVERBIAL-1','状语辨识1','状语',4],
    ['D01-032-FW-ENG-COMPLEMENT-1','补语辨识1','补语',4],
    ['D01-033-FW-ENG-APPOSITIVE-1','同位语辨识1','同位语',4],
    ['D01-034-FW-ENG-TYPE-1','句子类型1','句子类型',5],
    ['D01-035-FW-ENG-TYPE-2','句子类型2','句子类型',5],
    ['D01-036-FW-ENG-TYPE-3','句子类型3','句子类型',5],
    ['D01-037-FW-ENG-TYPE-4','句子类型4','句子类型',5],
    ['D01-038-FW-ENG-TYPE-5','句子类型5','句子类型',5],
    ['D01-039-FW-ENG-TYPE-6','句子类型6','句子类型',5],
    ['D01-040-FW-ENG-TYPE-7','句子类型7','句子类型',5],
    ['D01-041-FW-ENG-TYPE-8','句子类型8','句子类型',5],
    ['D01-042-FW-ENG-TYPE-9','句子类型9','句子类型',5],
    ['D01-043-FW-ENG-TYPE-10','句子类型10','句子类型',5],
    ['D01-044-FW-ENG-TYPE-11','句子类型11','句子类型',5]
  ];

  const existing=[];
  for(let i=0;i<items.length;i++){
    const [id,displayNo,section,page]=items[i];
    const q=db.questions.find(x=>String(x.id)===id);
    if(!q) continue;
    q.practiceSetId=setId;
    q.practiceSetTitle='全方位｜句子成分及句子类型（原作答记录）';
    q.practiceSection=section;
    q.practiceOrder=i+1;
    q.assignmentGroup='课后作业';
    q.assignmentOrder=1;
    q.source='全方位';
    q.questionSource='全方位';
    q.answerStatus='official_verified';
    q.answerAuthority='official';
    q.answerSource=answerSrc;
    q.analysisSource=answerSrc;
    q.analysisPdf=`${pdf}#page=${page}`;
    q.analysisPdfLabel=`打开全方位句子成分/句子类型答案PDF第${page}页`;
    q.tags=Array.from(new Set([...(q.tags||[]),'全方位完整题组','句子成分及句子类型','官方答案','保留原作答记录','v91']));
    existing.push({questionId:id,displayNo,section,order:i+1,page});
  }

  const set={
    id:setId,
    title:`全方位｜第一部分 基础语法：句子成分及句子类型（完整${existing.length}题卡）`,
    source:'全方位',
    subject:'英语',
    assignmentGroup:'课后作业',
    studyDate:'2026-07-16',
    dayLabel:'第1天 · 7.16',
    pageCount:7,
    sourceCountLabel:`完整${existing.length}题卡`,
    sourceQuestionCount:existing.length,
    pageMode:false,
    items:existing,
    catalogOrder:93,
    questionCount:existing.length,
    sections:['主语与谓语','主语','宾语','表语','定语','状语','补语','同位语','句子类型'],
    answerStatus:'official_complete_set',
    answerPageCount:7,
    answerDocument:pdf,
    answerDocumentLabel:'全方位｜句子成分及句子类型练习题答案（7页）',
    answerCoverage:`${existing.length}/${existing.length}题卡已绑定官方答案`,
    answerSource:answerSrc,
    sourceDocument:sourceDoc,
    sourceDocumentLabel:'全方位｜句子成分及句子类型原题资料',
    archiveNote:'v91：复用题库中用户此前已经做过的22个原题ID加入全方位完整题组，不复制题目、不重建作答记录；答案按用户本次上传的7页答案PDF重新挂接。'
  };
  db.completeSetRegistry=Array.isArray(db.completeSetRegistry)?db.completeSetRegistry:[];
  const idx=db.completeSetRegistry.findIndex(s=>String(s.id)===setId);
  if(idx>=0) db.completeSetRegistry[idx]=set; else db.completeSetRegistry.push(set);

  db.version='v91-qfw-sentence-components-types-complete-set';
  db.generatedAt='2026-08-17T14:51:00+08:00';
  globalThis.QFW_SENTENCE_V91_REPORT={setId,questions:existing.length,source:'全方位',reusedExistingIds:true};
})();
