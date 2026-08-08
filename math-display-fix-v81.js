/* v81 - 数学公式显示修复：统一分数指数写法，避免后备渲染出现 1/3-1 一类难读显示 */
(function(){
  const db=globalThis.BUNDLED_QUESTION_BANK;
  if(!db||!Array.isArray(db.questions)) return;
  function fix(s){
    if(typeof s!=='string'||!s) return s;
    return s
      .replace(/\^\{(-?\d+)\/(\d+)\}/g, '^{\\frac{$1}{$2}}')
      .replace(/\^\{\(([^{}]+)\)\/(\d+)\}/g, '^{\\frac{$1}{$2}}')
      .replace(/\^\{1\/\(([^{}]+)\)\}/g, '^{\\frac{1}{$1}}');
  }
  let changed=0;
  for(const q of db.questions){
    for(const k of ['stem','textStem','answer']){
      const before=q[k]; const after=fix(before); if(after!==before){q[k]=after;changed++;}
    }
    if(Array.isArray(q.options)) q.options=q.options.map(v=>{const a=fix(v); if(a!==v) changed++; return a;});
    if(Array.isArray(q.textOptions)) q.textOptions=q.textOptions.map(v=>{const a=fix(v); if(a!==v) changed++; return a;});
  }
  db.mathDisplayFixV81={version:'v81',changedFields:changed,rule:'分数指数改为标准 TeX 分式，并对最终题库重新预渲染全部数学公式'};
  db.version='v81-math-display-repair';
  db.generatedAt='2026-08-08T10:08:00+08:00';
})();
