(function(){
  const db = globalThis.BUNDLED_QUESTION_BANK;
  if (!db || !Array.isArray(db.questions)) return;
  const fixes = {
    'D17-HW-CONT-FILL-07': String.raw`\(x=0\) 是函数 \(f(x)=\begin{cases}\dfrac{\sin x^2}{2\sin x},&x>0\\0,&x=0\\\dfrac{\sin(x-2)}{2x},&x<0\end{cases}\) 的________间断点。`,
    'D17-HW-CONT-CALC-01': String.raw`设 \(f(x)=\begin{cases}\dfrac{\sin 2x}{\tan x},&x>0\\2,&x=0\\\dfrac{\arctan x}{x},&x<0\end{cases}\)，则 \(x=0\) 是 \(f(x)\) 的什么间断点？`
  };
  let fixed = 0;
  for (const q of db.questions) {
    const next = fixes[String(q.id)];
    if (!next) continue;
    q.stem = next;
    q.textStem = next;
    q.textStatus = 'source_verified_formula_v85';
    q.tags = Array.from(new Set([...(q.tags || []), '公式源码修复', 'v85']));
    fixed++;
  }
  globalThis.QB_V85_FORMULA_SOURCE_FIX = {fixed, ids:Object.keys(fixes), checkedAt:'2026-08-08'};
  globalThis.QB_CONTENT_REVISION='v85-formula-code-fix-20260808';
})();
