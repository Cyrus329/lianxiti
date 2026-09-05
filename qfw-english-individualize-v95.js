/* v95 全方位英语：把仍然合并在一张卡里的编号题拆成真正的一题一卡 */
(function(){
  const db=globalThis.BUNDLED_QUESTION_BANK;
  if(!db||!Array.isArray(db.questions)||!Array.isArray(db.completeSetRegistry)) return;
  const byId=new Map(db.questions.map(q=>[String(q.id),q]));

  function cloneQuestion(parent, id, stem, answer, section, originalNo, practiceOrder, analysisPage){
    return {
      ...parent,
      id,
      stem,
      textStem:stem,
      options:[],
      textOptions:[],
      answer,
      type:'填空题',
      chapter:`第一部分 基础语法 · ${section}`,
      titleLabel:section,
      originalNo,
      practiceSection:section,
      practiceOrder,
      analysisPdf:analysisPage ? `answer-documents/qfw-english-sentence-components-types/qfw-sentence-components-types-answers.pdf#page=${analysisPage}` : parent.analysisPdf,
      officialAnalysis:`官方答案：${answer}。答案依据用户上传的全方位对应答案资料逐题核对。`,
      answerStatus:'official_verified',
      answerAuthority:'official',
      textStatus:'transcribed_individual',
      tags:Array.from(new Set([...(parent.tags||[]),'逐题拆分','一题一卡','v95']))
    };
  }

  function replaceItemWithChildren(setId,parentId,entries){
    const set=db.completeSetRegistry.find(s=>String(s.id)===String(setId));
    const parent=byId.get(String(parentId));
    if(!set||!parent) return 0;
    const oldIndex=set.items.findIndex(it=>String(it.questionId)===String(parentId));
    if(oldIndex<0) return 0;
    const children=entries.map((e,i)=>{
      const id=i===0?String(parentId):`${parentId}-V95-${String(i+1).padStart(2,'0')}`;
      const q=cloneQuestion(parent,id,e.stem,e.answer,e.section,e.no,0,e.analysisPage);
      byId.set(id,q);
      return q;
    });
    // Replace/add in global questions.
    const childIds=new Set(children.map(q=>String(q.id)));
    db.questions=db.questions.filter(q=>String(q.id)!==String(parentId)&&!childIds.has(String(q.id))).concat(children);
    const newItems=children.map((q,i)=>({questionId:q.id,displayNo:q.originalNo,section:q.practiceSection,order:oldIndex+i+1}));
    set.items.splice(oldIndex,1,...newItems);
    set.items.forEach((it,i)=>{it.order=i+1; const q=byId.get(String(it.questionId))||db.questions.find(x=>String(x.id)===String(it.questionId)); if(q) q.practiceOrder=i+1;});
    set.questionCount=set.items.length;
    set.sourceQuestionCount=set.items.length;
    set.sourceCountLabel=`完整${set.items.length}题`;
    return children.length;
  }

  const compSet='qfw-homework-v92-english-sentence-components';
  replaceItemWithChildren(compSet,'D01-023-FW-ENG-SUBJECT-1',[
    {section:'主语',no:'主语辨识1',stem:'找出句子中的主语：Lisa is a beautiful dancer.',answer:'Lisa',analysisPage:1},
    {section:'主语',no:'主语辨识2',stem:'找出句子中的主语：He reads books every day.',answer:'He',analysisPage:1},
    {section:'主语',no:'主语辨识3',stem:'找出句子中的主语：Smoking does great harm to our health.',answer:'Smoking',analysisPage:1},
    {section:'主语',no:'主语辨识4',stem:'找出句子中的主语：To get the first prize is the goal of our team.',answer:'To get the first prize',analysisPage:1},
    {section:'主语',no:'主语辨识5',stem:'找出句子中的主语：30 years seems to be a long time in our life.',answer:'30 years',analysisPage:1},
    {section:'谓语',no:'谓语辨识1',stem:'找出句子中的谓语：The students work very hard.',answer:'work',analysisPage:2},
    {section:'谓语',no:'谓语辨识2',stem:'找出句子中的谓语：My grandfather gets up at 6:30 every morning.',answer:'gets up',analysisPage:2},
    {section:'谓语',no:'谓语辨识3',stem:'找出句子中的谓语：The movie is interesting.',answer:'is',analysisPage:2},
    {section:'谓语',no:'谓语辨识4',stem:"找出句子中的谓语：We can't find a solution to this problem in such a short time.",answer:"can't find",analysisPage:2},
    {section:'谓语',no:'谓语辨识5',stem:'找出句子中的谓语：The engineers had completed the high-way project by the end of last month.',answer:'had completed',analysisPage:2}
  ]);
  replaceItemWithChildren(compSet,'D01-028-FW-ENG-OBJECT-1',[
    {section:'宾语',no:'宾语辨识1',stem:'找出句子中的宾语：My sister is doing her homework now.',answer:'her homework',analysisPage:3},
    {section:'宾语',no:'宾语辨识2',stem:'找出句子中的宾语：We reconsider this matter seriously.',answer:'this matter',analysisPage:3},
    {section:'宾语',no:'宾语辨识3',stem:'找出句子中的宾语：Our teacher often encourages us.',answer:'us',analysisPage:3},
    {section:'宾语',no:'宾语辨识4',stem:'找出句子中的宾语：The little boy wants to become a pilot when he grows up.',answer:'to become a pilot',analysisPage:3}
  ]);
  replaceItemWithChildren(compSet,'D01-029-FW-ENG-PREDICATIVE-1',[
    {section:'表语',no:'表语辨识1',stem:'找出句子中的表语：The soup tastes good.',answer:'good',analysisPage:3},
    {section:'表语',no:'表语辨识2',stem:'找出句子中的表语：Her parents are English teachers in our school.',answer:'English teachers',analysisPage:3},
    {section:'表语',no:'表语辨识3',stem:'找出句子中的表语：Boys are on the playground now.',answer:'on the playground',analysisPage:3},
    {section:'表语',no:'表语辨识4',stem:'找出句子中的表语：The good news is that we worked it out finally.',answer:'that we worked it out finally',analysisPage:3},
    {section:'表语',no:'表语辨识5',stem:'找出句子中的表语：The weather is turning colder and colder.',answer:'colder and colder',analysisPage:3}
  ]);
  replaceItemWithChildren(compSet,'D01-030-FW-ENG-ATTRIBUTIVE-1',[
    {section:'定语',no:'定语辨识1',stem:'找出句子中的定语：This is an ancient bridge.',answer:'ancient',analysisPage:3},
    {section:'定语',no:'定语辨识2',stem:'找出句子中的定语：There is an apple tree in the garden.',answer:'apple',analysisPage:3},
    {section:'定语',no:'定语辨识3',stem:'找出句子中的定语：The girl under the tree is my sister.',answer:'under the tree',analysisPage:3},
    {section:'定语',no:'定语辨识4',stem:'找出句子中的定语：The vase which was found under the earth is of great value.',answer:'which was found under the earth',analysisPage:3},
    {section:'定语',no:'定语辨识5',stem:'找出句子中的定语：Have you ever read the book written by Jane Austen?',answer:'written by Jane Austen',analysisPage:4}
  ]);
  replaceItemWithChildren(compSet,'D01-031-FW-ENG-ADVERBIAL-1',[
    {section:'状语',no:'状语辨识1',stem:'找出句子中的状语：We must check our test papers carefully.',answer:'carefully',analysisPage:4},
    {section:'状语',no:'状语辨识2',stem:'找出句子中的状语：The students are reading books in the classroom.',answer:'in the classroom',analysisPage:4},
    {section:'状语',no:'状语辨识3',stem:'找出句子中的状语：I work because I need money.',answer:'because I need money',analysisPage:4},
    {section:'状语',no:'状语辨识4',stem:'找出句子中的状语：We will tell him the truth when he comes back.',answer:'when he comes back',analysisPage:4}
  ]);
  replaceItemWithChildren(compSet,'D01-032-FW-ENG-COMPLEMENT-1',[
    {section:'补语',no:'补语辨识1',stem:'找出句子中的补语：The workers painted the wall green.',answer:'green',analysisPage:4},
    {section:'补语',no:'补语辨识2',stem:'找出句子中的补语：We believe him to be guilty.',answer:'to be guilty',analysisPage:4},
    {section:'补语',no:'补语辨识3',stem:'找出句子中的补语：I name my dog Pit.',answer:'Pit',analysisPage:4},
    {section:'补语',no:'补语辨识4',stem:'找出句子中的补语：I found the classroom empty.',answer:'empty',analysisPage:4},
    {section:'补语',no:'补语辨识5',stem:'找出句子中的补语：I hear him singing a song next to the door.',answer:'singing a song next to the door',analysisPage:4}
  ]);
  replaceItemWithChildren(compSet,'D01-033-FW-ENG-APPOSITIVE-1',[
    {section:'同位语',no:'同位语辨识1',stem:'找出句子中的同位语：Mr. Smith, our new teacher, is very kind to us.',answer:'our new teacher',analysisPage:4},
    {section:'同位语',no:'同位语辨识2',stem:'找出句子中的同位语：He told me that his brother John was a world-famous doctor.',answer:'John',analysisPage:4},
    {section:'同位语',no:'同位语辨识3',stem:'找出句子中的同位语：We Chinese people are brave and hard-working.',answer:'Chinese people',analysisPage:4},
    {section:'同位语',no:'同位语辨识4',stem:'找出句子中的同位语：Where did you get the idea that I am going to leave Shanghai?',answer:'that I am going to leave Shanghai',analysisPage:4},
    {section:'同位语',no:'同位语辨识5',stem:'找出句子中的同位语：Gone with the Wind, a famous American film, has achieved great success in the film industry.',answer:'a famous American film',analysisPage:4}
  ]);
  const comp=db.completeSetRegistry.find(s=>String(s.id)===compSet);
  if(comp){comp.title=`全方位｜句子成分练习题（完整${comp.items.length}题）`;comp.sourceCountLabel=`完整${comp.items.length}题`;comp.sections=['主语','谓语','宾语','表语','定语','状语','补语','同位语'];comp.archiveNote='v95：句子成分已按每个实际编号句逐题拆分，一题一卡，官方答案逐题对应。';}

  const nounSet='qfw-homework-v92-english-noun';
  replaceItemWithChildren(nounSet,'qfw-homework-v66-english-noun-article::v75-14',[
    {section:'名词的数',no:'名词复数填空1',stem:'用所给名词的适当形式填空：There are five ______ (bus) in the parking lot.',answer:'buses'},
    {section:'名词的数',no:'名词复数填空2',stem:'用所给名词的适当形式填空：The ______ (mouse) are eating the cheese.',answer:'mice'},
    {section:'名词的数',no:'名词复数填空3',stem:'用所给名词的适当形式填空：We saw many ______ (deer) in the forest.',answer:'deer'},
    {section:'名词的数',no:'名词复数填空4',stem:'用所给名词的适当形式填空：I have three ______ (dictionary).',answer:'dictionaries'},
    {section:'名词的数',no:'名词复数填空5',stem:'用所给名词的适当形式填空：These ______ (glass) are for drinking water.',answer:'glasses'},
    {section:'名词的数',no:'名词复数填空6',stem:'用所给名词的适当形式填空：The ______ (hero) of the story are very brave.',answer:'heroes'},
    {section:'名词的数',no:'名词复数填空7',stem:'用所给名词的适当形式填空：There are lots of ______ (butterfly) in the garden.',answer:'butterflies'},
    {section:'名词的数',no:'名词复数填空8',stem:'用所给名词的适当形式填空：He collects different kinds of ______ (stamp).',answer:'stamps'},
    {section:'名词的数',no:'名词复数填空9',stem:'用所给名词的适当形式填空：The ______ (ox) are pulling the plow.',answer:'oxen'},
    {section:'名词的数',no:'名词复数填空10',stem:'用所给名词的适当形式填空：She has two ______ (knife).',answer:'knives'}
  ]);
  const noun=db.completeSetRegistry.find(s=>String(s.id)===nounSet);
  if(noun){noun.title=`全方位｜名词练习题（完整${noun.items.length}题）`;noun.sourceCountLabel=`完整${noun.items.length}题`;noun.archiveNote='v95：名词复数10个填空已拆为10道独立题，继续使用原官方答案。';}

  db.version='v95-qfw-english-full-audit';
  db.generatedAt='2026-08-17T16:55:00+08:00';
})();
