(function(){
  const db = globalThis.BUNDLED_QUESTION_BANK;
  if (!db || !Array.isArray(db.questions)) return;

  const baseTags = ['蓝色森林','2026-08-01','8.1','第17天','课后作业','课后练习','完整题组','纯文字版','纯文字修复','v74'];
  const sourceImg = page => `question-images/day-17-0801-homework-continuation/math-page-${String(page).padStart(2,'0')}.jpg`;
  const answerImg = page => `answer-images/day-17-0801-homework-answers/math-continuity/page-${page}.jpg`;
  const setId = 'bf-homework-v64-math-continuity-pages-16-21';
  const setTitle = '课后练习｜第三节 连续与间断（完整39题）';

  function makeQuestion({id, type, displayNo, stem, options=[], answer='', officialAnalysis='', page, answerPage, order, difficulty='2'}){
    return {
      id,
      subject:'高等数学',
      chapter:'第三节 连续与间断',
      type,
      stem,
      textStem: stem,
      options,
      textOptions: options,
      answer,
      analysis:'',
      officialAnalysis,
      questionSource:'蓝色森林',
      source:'蓝色森林',
      sourceRecognition:'manual',
      answerStatus: answer ? 'official_verified' : 'source_page_pending',
      answerAuthority: answer ? 'official' : 'source_page',
      difficulty,
      tags: baseTags.slice(),
      images:[sourceImg(page)],
      analysisImages: answerPage ? [answerImg(answerPage)] : [],
      originalNo: displayNo,
      studyDate:'2026-08-01',
      studyDay:17,
      dayLabel:'第17天 · 8.1',
      importOrder:2300 + order,
      sourceOrder:2,
      titleLabel:'第三节 连续与间断',
      textStatus:'manual_transcribed_v74',
      assignmentGroup:'课后作业',
      assignmentOrder:1,
      practiceSetId:setId,
      practiceSetTitle:setTitle,
      practiceSection:'第三节 连续与间断',
      practiceOrder:order,
      pageArchive:false
    };
  }

  const Q = [
    makeQuestion({id:'D17-HW-CONT-SEL-01',type:'选择题',displayNo:'一、选择题1',page:16,answerPage:1,order:1,stem:'函数 \\(f(x)\\) 在 \\(x\\to x_0\\) 时极限存在是 \\(f(x)\\) 在 \\(x=x_0\\) 点连续的（ ）。',options:['A. 必要条件','B. 充分条件','C. 充要条件','D. 既不充分也不必要条件'],answer:'A',officialAnalysis:'极限存在是连续的必要条件，但不是充分条件。'}),
    makeQuestion({id:'D17-HW-CONT-SEL-02',type:'选择题',displayNo:'一、选择题2',page:16,answerPage:1,order:2,stem:'函数 \\(f(x)\\) 在点 \\(x_0\\) 处连续是 \\(f(x)\\) 在点 \\(x_0\\) 有定义的（ ）。',options:['A. 充分条件','B. 必要条件','C. 充要条件','D. 既不充分又非必要条件'],answer:'A',officialAnalysis:'连续必有定义，因此“连续”是“有定义”的充分条件。'}),
    makeQuestion({id:'D17-HW-CONT-SEL-03',type:'选择题',displayNo:'一、选择题3',page:16,answerPage:1,order:3,stem:'已知 \\(f(x)=\\begin{cases}\\dfrac{\\sin 2x}{x},&x<0\\\\3x^2-2x+k,&x\\ge 0\\end{cases}\\)，若 \\(f(x)\\) 在 \\(x=0\\) 处连续，则 \\(k\\) 的值为（ ）。',options:['A. -2','B. -1','C. 2','D. 3'],answer:'C',officialAnalysis:'由左右极限相等且等于函数值，可得 \\(k=2\\)。'}),
    makeQuestion({id:'D17-HW-CONT-SEL-04',type:'选择题',displayNo:'一、选择题4',page:16,answerPage:1,order:4,stem:'在函数 \\(f(x)\\) 的可去间断点 \\(x_0\\) 处，下列说法正确的是（ ）。',options:['A. 函数 \\(f(x)\\) 在 \\(x_0\\) 左、右极限至少有一个不存在','B. 函数 \\(f(x)\\) 在 \\(x_0\\) 左、右极限都存在，但不相等','C. 函数 \\(f(x)\\) 在 \\(x_0\\) 左、右极限存在且相等','D. 函数 \\(f(x)\\) 在 \\(x_0\\) 左、右极限都不存在'],answer:'C',officialAnalysis:'可去间断点的判别：左右极限存在且相等。'}),
    makeQuestion({id:'D17-HW-CONT-SEL-05',type:'选择题',displayNo:'一、选择题5',page:16,answerPage:1,order:5,stem:'函数 \\(f(x)=\\dfrac{1}{x(x+2)}\\) 的间断点是（ ）。',options:['A. \\(x=2\\) 和 \\(x=0\\)','B. \\(x=2\\) 和 \\(x=-1\\)','C. \\(x=1\\) 和 \\(x=-2\\)','D. \\(x=0\\) 和 \\(x=-2\\)'],answer:'D',officialAnalysis:'分母为 0 时无定义，故间断点为 \\(x=0,-2\\)。'}),
    makeQuestion({id:'D17-HW-CONT-SEL-06',type:'选择题',displayNo:'一、选择题6',page:16,answerPage:1,order:6,stem:'若 \\(f(x)=\\begin{cases}\\dfrac{\\sin x}{x},&x<0\\\\k,&x=0\\\\x\\sin\\dfrac{1}{x}+1,&x>0\\end{cases}\\) 在 \\(x=0\\) 处连续，则 \\(k\\) 的值为（ ）。',options:['A. 0','B. 2','C. 1','D. -1'],answer:'C',officialAnalysis:'左右极限都等于 1，连续需 \\(k=1\\)。'}),
    makeQuestion({id:'D17-HW-CONT-SEL-07',type:'选择题',displayNo:'一、选择题7',page:16,answerPage:1,order:7,stem:'若 \\(x=0\\) 是函数 \\(f(x)=\\dfrac{\\ln(1+2x)}{x}\\) 的（ ）。',options:['A. 连续点','B. 可去间断点','C. 跳跃间断点','D. 无穷间断点'],answer:'B',officialAnalysis:'该点极限存在但函数无定义，故为可去间断点。'}),

    makeQuestion({id:'D17-HW-CONT-SEL-08',type:'选择题',displayNo:'一、选择题8',page:17,answerPage:2,order:8,stem:'函数 \\(f(x)=\\dfrac{\\cos \\pi x}{x(x-2)}\\) 有____个间断点（ ）。',options:['A. 0','B. 1','C. 2','D. 3'],answer:'C',officialAnalysis:'分母为 0 时在 \\(x=0,2\\) 无定义，共 2 个间断点。'}),
    makeQuestion({id:'D17-HW-CONT-SEL-09',type:'选择题',displayNo:'一、选择题9',page:17,answerPage:2,order:9,stem:'函数 \\(f(x)=\\dfrac{e^x-1}{x(e^x+1)}\\) 的间断点及类型为（ ）。',options:['A. \\(x=0\\) 为可去间断点','B. \\(x=0\\) 为无穷间断点','C. \\(x=0\\) 为跳跃间断点','D. 无间断点'],answer:'A',officialAnalysis:'当 \\(x=0\\) 时无定义，但极限存在，故为可去间断点。'}),
    makeQuestion({id:'D17-HW-CONT-SEL-10',type:'选择题',displayNo:'一、选择题10',page:17,answerPage:2,order:10,stem:'设函数 \\(f(x)=\\dfrac{2x+1}{\\cos x}\\) 的间断点个数为（ ）。',options:['A. 0','B. 1','C. 2','D. 无穷多个'],answer:'D',officialAnalysis:'\\(\\cos x=0\\) 有无穷多个解，故间断点无穷多个。'}),
    makeQuestion({id:'D17-HW-CONT-SEL-11',type:'选择题',displayNo:'一、选择题11',page:17,answerPage:2,order:11,stem:'设函数 \\(f(x)=\\begin{cases}(1-x)^{\\frac{1}{x}},&x\\ne 0\\\\e,&x=0\\end{cases}\\)，则 \\(x=0\\) 是 \\(f(x)\\) 的（ ）。',options:['A. 可去间断点','B. 跳跃间断点','C. 无穷间断点','D. 振荡间断点'],answer:'A',officialAnalysis:'极限存在但不等于函数值，故为可去间断点。'}),
    makeQuestion({id:'D17-HW-CONT-SEL-12',type:'选择题',displayNo:'一、选择题12',page:17,answerPage:2,order:12,stem:'若函数 \\(f(x)\\) 为连续函数，且 \\(f(0)=1,\\ f(1)=0\\)，则 \\(\\lim_{x\\to \\infty} f\\!\\left(x\\sin\\dfrac{1}{x}\\right)\\) 的值为（ ）。',options:['A. 0','B. -1','C. 1','D. 不存在'],answer:'A',officialAnalysis:'\\(x\\sin(1/x)\\to1\\)，由连续性得极限为 \\(f(1)=0\\)。'}),
    makeQuestion({id:'D17-HW-CONT-SEL-13',type:'选择题',displayNo:'一、选择题13',page:17,answerPage:2,order:13,stem:'方程 \\(x\\cdot 2^x=1\\) 在下列哪个区间内必有实根（ ）。',options:['A. \\((-1,0)\\)','B. \\((0,1)\\)','C. \\((1,2)\\)','D. \\((2,3)\\)'],answer:'B',officialAnalysis:'设 \\(g(x)=x2^x-1\\)，有 \\(g(0)=-1<0,g(1)=1>0\\)，故在 \\((0,1)\\) 内有根。'}),
    makeQuestion({id:'D17-HW-CONT-SEL-14',type:'选择题',displayNo:'一、选择题14',page:17,answerPage:2,order:14,stem:'下列函数在给定区间上满足零点定理的是（ ）。',options:['A. \\(f(x)=\\dfrac{1}{x}\\) 在 \\([-1,1]\\)','B. \\(f(x)=x^2-1\\) 在 \\([0,2]\\)','C. \\(f(x)=\\tan x\\) 在 \\([0,\\pi]\\)','D. \\(f(x)=e^x\\) 在 \\([-1,0]\\)'],answer:'B',officialAnalysis:'只有 B 在闭区间上连续且端点函数值异号。'}),

    makeQuestion({id:'D17-HW-CONT-FILL-01',type:'填空题',displayNo:'二、填空题1',page:17,answerPage:3,order:15,stem:'函数 \\(y=\\sin\\dfrac{1}{x}\\) 在 \\(x=0\\) 处是第________类间断点。',answer:'二',officialAnalysis:'在该点附近振荡，极限不存在，属于第二类（振荡）间断点。'}),
    makeQuestion({id:'D17-HW-CONT-FILL-02',type:'填空题',displayNo:'二、填空题2',page:17,answerPage:3,order:16,stem:'若 \\(x=0\\) 是函数 \\(f(x)=x\\cos\\dfrac{1}{x}\\) 的________间断点。',answer:'可去',officialAnalysis:'极限存在且等于 0，但该点可视作可去间断点。'}),
    makeQuestion({id:'D17-HW-CONT-FILL-03',type:'填空题',displayNo:'二、填空题3',page:17,answerPage:3,order:17,stem:'若 \\(x=2\\) 是函数 \\(f(x)=\\begin{cases}\\dfrac{x^2-4}{x-2},&x\\ne 2\\\\0,&x=2\\end{cases}\\) 的________间断点。',answer:'可去',officialAnalysis:'极限存在且不等于函数值，故为可去间断点。'}),
    makeQuestion({id:'D17-HW-CONT-FILL-04',type:'填空题',displayNo:'二、填空题4',page:18,answerPage:3,order:18,stem:'函数 \\(y=\\dfrac{\\sin x}{x^2(x-1)}-e^x\\) 的连续区间是________________。',answer:'(-∞,0)∪(0,1)∪(1,+∞)',officialAnalysis:'除 \\(x=0,1\\) 外，初等函数在其定义域内连续。'}),
    makeQuestion({id:'D17-HW-CONT-FILL-05',type:'填空题',displayNo:'二、填空题5',page:18,answerPage:3,order:19,stem:'\\(f(x)=\\begin{cases}\\dfrac{\\ln(1-2x)}{\\sin x},&x\\le 0\\\\ae^{3x},&x>0\\end{cases}\\) 在 \\(x=0\\) 处连续，则 \\(a=\\)________。',answer:'-2',officialAnalysis:'令左右极限相等，可得 \\(a=-2\\)。'}),
    makeQuestion({id:'D17-HW-CONT-FILL-06',type:'填空题',displayNo:'二、填空题6',page:18,answerPage:4,order:20,stem:'已知 \\(f(x)=\\begin{cases}(1+2x)^{\\frac{1}{x}},&x\\ne 0\\\\a,&x=0\\end{cases}\\) 在 \\(x=0\\) 处连续，则 \\(a=\\)________。',answer:'e^2',officialAnalysis:'\\(\\lim_{x\\to0}(1+2x)^{1/x}=e^2\\)。'}),
    makeQuestion({id:'D17-HW-CONT-FILL-07',type:'填空题',displayNo:'二、填空题7',page:18,answerPage:4,order:21,stem:'\\(x=0\\) 是函数 \\(f(x)=\\begin{cases}\\dfrac{\\sin x^2}{2\\sin x},&x>0\\\\0,&x=0\\\\dfrac{\\sin(x-2)}{2x},&x<0\\end{cases}\\) 的________间断点。',answer:'无穷',officialAnalysis:'右极限为 0，左极限趋于无穷，故为无穷间断点。'}),
    makeQuestion({id:'D17-HW-CONT-FILL-08',type:'填空题',displayNo:'二、填空题8',page:18,answerPage:4,order:22,stem:'函数 \\(f(x)=\\dfrac{\\ln|x|}{x^2-3x+2}\\) 的间断点个数为________，其中无穷间断点为________________。',answer:'3个；x=0和x=2',officialAnalysis:'间断点为 \\(0,1,2\\)，其中 \\(x=0,2\\) 为无穷间断点，\\(x=1\\) 为可去间断点。'}),
    makeQuestion({id:'D17-HW-CONT-FILL-09',type:'填空题',displayNo:'二、填空题9',page:18,answerPage:5,order:23,stem:'\\(x=0\\) 是函数 \\(f(x)=\\begin{cases}2\\cos x-1,&x\\le 0\\\\x\\sin\\dfrac{1}{x}+\\dfrac{1}{x}\\sin x,&x>0\\end{cases}\\) 的________（连续/间断）点。',answer:'连续',officialAnalysis:'左右极限都为 1，且等于函数值。'}),
    makeQuestion({id:'D17-HW-CONT-FILL-10',type:'填空题',displayNo:'二、填空题10',page:18,answerPage:5,order:24,stem:'若函数 \\(f(x)=\\begin{cases}\\dfrac{\\sin 2x+e^{2ax}-1}{x},&x\\ne 0\\\\a,&x=0\\end{cases}\\) 在 \\(( -\\infty,+\\infty)\\) 上连续，则 \\(a=\\)________。',answer:'-2',officialAnalysis:'由 \\(\\lim_{x\\to0}f(x)=f(0)\\) 求得 \\(a=-2\\)。'}),

    makeQuestion({id:'D17-HW-CONT-CALC-01',type:'计算题',displayNo:'三、计算题1',page:18,answerPage:5,order:25,stem:'设 \\(f(x)=\\begin{cases}\\dfrac{\\sin 2x}{\\tan x},&x>0\\\\2,&x=0\\\\dfrac{\\arctan x}{x},&x<0\\end{cases}\\)，则 \\(x=0\\) 是 \\(f(x)\\) 的什么间断点？',answer:'跳跃间断点',officialAnalysis:'左极限为 1，右极限为 2，左右极限存在但不相等，故为跳跃间断点。'}),
    makeQuestion({id:'D17-HW-CONT-CALC-02',type:'计算题',displayNo:'三、计算题2',page:19,answerPage:5,order:26,stem:'已知函数 \\(f(x)=\\begin{cases}\\dfrac{ax}{\\sqrt{1+x}-1},&x>0\\\\2b+1,&x=0\\\\b+2\\cos x,&x<0\\end{cases}\\) 在 \\(x=0\\) 处连续，求 \\(a,b\\)。',answer:'b=1，a=3/2',officialAnalysis:'由左右极限及函数值相等，解得 \\(b=1,\\ a=3/2\\)。'}),
    makeQuestion({id:'D17-HW-CONT-CALC-03',type:'计算题',displayNo:'三、计算题3',page:19,answerPage:6,order:27,stem:'已知函数 \\(f(x)=\\begin{cases}\\dfrac{1-e^{\\tan x}}{x},&0<x\\le1\\\\\\arcsin\\dfrac{x}{2},&x>1\\\\ae^{x^2},&x\\le0\\end{cases}\\) 在 \\(x=0\\) 处连续，求 \\(a\\)。',answer:'a=-1',officialAnalysis:'由 \\(x=0\\) 处连续，令左右极限相等，得 \\(a=-1\\)。'}),
    makeQuestion({id:'D17-HW-CONT-CALC-04',type:'计算题',displayNo:'三、计算题4',page:19,answerPage:6,order:28,stem:'讨论函数 \\(y=\\begin{cases}\\dfrac{\\sqrt{x^2+1}-1}{x^2},&x\\ne0\\\\1,&x=0\\end{cases}\\) 的间断点，并指出间断点的类型。',answer:'x=0 是可去间断点',officialAnalysis:'\\(x=0\\) 处极限存在且等于 1/2，但函数值为 1，故为可去间断点。'}),
    makeQuestion({id:'D17-HW-CONT-CALC-05',type:'计算题',displayNo:'三、计算题5',page:19,answerPage:6,order:29,stem:'设 \\(f(x)=\\begin{cases}e^{\\frac{1}{x-1}},&x>1\\\\0,&x=1\\\\\\arctan\\dfrac{1}{x-1},&x<1\\end{cases}\\)，求 \\(f(x)\\) 的间断点，并说明间断点所属类型。',answer:'x=1，为无穷间断点',officialAnalysis:'右极限趋于 \\(+\\infty\\)，左极限为有限值，故 \\(x=1\\) 为无穷间断点。'}),
    makeQuestion({id:'D17-HW-CONT-CALC-06',type:'计算题',displayNo:'三、计算题6',page:20,answerPage:6,order:30,stem:'判断函数 \\(f(x)=\\dfrac{1}{x^2+x-2}\\) 的间断点及其类型。',answer:'间断点为x=1和x=-2，均为无穷间断点',officialAnalysis:'分母分解为 \\((x-1)(x+2)\\)，在 \\(x=1,-2\\) 处无定义且极限无穷。'}),

    makeQuestion({id:'D17-HW-CONT-PROOF-01',type:'证明题',displayNo:'四、证明题1',page:20,answerPage:7,order:31,stem:'证明：存在唯一的 \\(\\xi\\in(-1,1)\\)，使得 \\(e^{\\xi}+\\xi-1=0\\)。',answer:'见解析',officialAnalysis:'令 \\(f(x)=e^x+x-1\\)，由零点定理及单调性可证存在且唯一。',difficulty:'3'}),
    makeQuestion({id:'D17-HW-CONT-PROOF-02',type:'证明题',displayNo:'四、证明题2',page:20,answerPage:7,order:32,stem:'证明：方程 \\(x^3+x^2-x-1=0\\) 在 \\((0,2)\\) 上至少有一个正根。',answer:'见解析',officialAnalysis:'构造连续函数并利用零点定理。',difficulty:'3'}),
    makeQuestion({id:'D17-HW-CONT-PROOF-03',type:'证明题',displayNo:'四、证明题3',page:20,answerPage:7,order:33,stem:'设函数 \\(f(x)\\) 在 \\([a,b]\\) 上连续，且 \\(f(a)>a,\\ f(b)<b\\)。证明：至少存在一点 \\(\\xi\\in(a,b)\\)，使得 \\(f(\\xi)=\\xi\\)。',answer:'见解析',officialAnalysis:'令 \\(g(x)=f(x)-x\\)，用零点定理即可。',difficulty:'3'}),
    makeQuestion({id:'D17-HW-CONT-PROOF-04',type:'证明题',displayNo:'四、证明题4',page:20,answerPage:7,order:34,stem:'设 \\(f(x)\\) 在 \\([0,1]\\) 上连续，且 \\(f(0)\\ne0,\\ 0<f(1)<1\\)。证明：存在 \\(x_0\\in(0,1)\\)，使得 \\(f^2(x_0)=x_0\\)。',answer:'见解析',officialAnalysis:'令 \\(g(x)=f^2(x)-x\\)，由零点定理得证。',difficulty:'3'}),
    makeQuestion({id:'D17-HW-CONT-PROOF-05',type:'证明题',displayNo:'四、证明题5',page:20,answerPage:8,order:35,stem:'设函数 \\(f(x)\\) 在 \\([1,4]\\) 上连续，证明：在 \\([1,4]\\) 内至少存在一点 \\(\\xi\\)，使得 \\(f(\\xi)=\\dfrac{f(1)+f(2)+f(3)+f(4)}{4}\\)。',answer:'见解析',officialAnalysis:'由最值定理和介值定理可证。',difficulty:'3'}),
    makeQuestion({id:'D17-HW-CONT-PROOF-06',type:'证明题',displayNo:'四、证明题6',page:21,answerPage:8,order:36,stem:'设函数 \\(f(x)\\) 在 \\([a,b]\\) 上连续，证明：对任意的正数 \\(p,q\\)，在 \\([a,b]\\) 内至少存在一点 \\(\\xi\\)，使得 \\(pf(a)+qf(b)=(p+q)f(\\xi)\\)。',answer:'见解析',officialAnalysis:'利用最值定理与介值定理证明加权平均值仍能取到。',difficulty:'3'}),
    makeQuestion({id:'D17-HW-CONT-PROOF-07',type:'证明题',displayNo:'四、证明题7',page:21,answerPage:8,order:37,stem:'证明：极限 \\(\\lim_{n\\to\\infty}\\left(\\dfrac{1}{\\sqrt{n^2+1}}+\\dfrac{1}{\\sqrt{n^2+2}}+\\cdots+\\dfrac{1}{\\sqrt{n^2+n}}\\right)=1\\)。',answer:'见解析',officialAnalysis:'夹逼在 \\(\\dfrac{n}{\\sqrt{n^2+n}}\\) 与 \\(\\dfrac{n}{\\sqrt{n^2+1}}\\) 之间。',difficulty:'3'}),
    makeQuestion({id:'D17-HW-CONT-PROOF-08',type:'证明题',displayNo:'四、证明题8',page:21,answerPage:9,order:38,stem:'设函数 \\(f(x)\\) 在 \\([0,4]\\) 上连续，且 \\(f(0)=f(4),\\ f(2)\\ne f(4)\\)。证明：至少存在一点 \\(\\xi\\in(0,2)\\)，使得 \\(f(\\xi)=f(\\xi+2)\\)。',answer:'见解析',officialAnalysis:'令 \\(g(x)=f(x)-f(x+2)\\)，再用零点存在定理。',difficulty:'3'}),
    makeQuestion({id:'D17-HW-CONT-PROOF-09',type:'证明题',displayNo:'四、证明题9',page:21,answerPage:9,order:39,stem:'设数列 \\(\\{x_n\\}\\) 为 \\(\\sqrt2-\\sqrt1,\\sqrt3-\\sqrt2,\\ldots,\\sqrt{n+1}-\\sqrt n,\\ldots\\)，证明数列 \\(\\{x_n\\}\\) 单调有界。',answer:'见解析',officialAnalysis:'化简为 \\(x_n=1/(\\sqrt{n+1}+\\sqrt n)\\)，可证单调递减且下有界。',difficulty:'3'})
  ];

  const oldPageIds = new Set([
    'D17-HOMEWORK-PAGE-MATH-016','D17-HOMEWORK-PAGE-MATH-017','D17-HOMEWORK-PAGE-MATH-018',
    'D17-HOMEWORK-PAGE-MATH-019','D17-HOMEWORK-PAGE-MATH-020','D17-HOMEWORK-PAGE-MATH-021'
  ]);
  const newIds = new Set(Q.map(q => String(q.id)));
  db.questions = db.questions.filter(q => !oldPageIds.has(String(q.id)) && !newIds.has(String(q.id))).concat(Q);

  const set = {
    id: setId,
    title: setTitle,
    source:'蓝色森林',
    subject:'高等数学',
    assignmentGroup:'课后作业',
    studyDate:'2026-08-01',
    dayLabel:'第17天 · 8.1',
    pageCount:6,
    sourceCountLabel:'完整39题',
    pageMode:false,
    items: Q.map((q, idx) => ({questionId:q.id, displayNo:q.originalNo, section:'第三节 连续与间断', order:idx+1})),
    catalogOrder:11,
    questionCount: Q.length,
    sections:['第三节 连续与间断'],
    archiveNote:'已将原资料第16—21页逐题转成纯文字版，并保留原图与答案解析图作辅助。'
  };

  const oldSets = Array.isArray(db.completeSetRegistry) ? db.completeSetRegistry : [];
  db.completeSetRegistry = oldSets.filter(s => String(s.id) !== setId).concat([set]);
  db.version = 'v72-continuity-puretext-fix';
  db.builtAt = '2026-08-04T14:25:00+08:00';
  db.generatedAt = '2026-08-04T14:25:00+08:00';
})();
