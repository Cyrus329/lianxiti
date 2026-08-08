(function(){
  const db=globalThis.BUNDLED_QUESTION_BANK;
  if(!db||!Array.isArray(db.questions)) return;
  const target=db.questions.find(q=>String(q.id)==='bf-homework-v64-math-limit-pages-7-15::v74::058') ||
    db.questions.find(q=>q.subject==='高等数学'&&q.chapter==='第二节 极限'&&q.type==='计算题'&&String(q.originalNo).replace(/\s/g,'')==='计算题5');
  if(!target) return;
  const corrected='计算极限 \\(\\lim_{x\\to\\infty}x^2\\sin\\dfrac{2}{x^3}\\)。';
  target.stem=corrected;
  target.textStem=corrected;
  target.answer='0';
  target.answerStatus='official_verified';
  target.answerAuthority='official';
  target.officialAnalysis='原题核对：\\(\\lim_{x\\to\\infty}x^2\\sin\\dfrac{2}{x^3}\\)。因 \\(\\sin\\dfrac{2}{x^3}\\sim\\dfrac{2}{x^3}\\)，故原式 \\(\\sim\\dfrac{2}{x}\\to0\\)。';
  target.sourceAuditV82={status:'source_image_verified',sourcePage:12,answerPage:9,note:'修正 v81 将 x^2 与 x^3 指数位置写反的问题'};
  const seg='\\(\\lim_{x\\to\\infty}x^2\\sin\\dfrac{2}{x^3}\\)';
  globalThis.PRE_RENDERED_MATH=globalThis.PRE_RENDERED_MATH||{};
  globalThis.PRE_RENDERED_MATH[seg]='<span class="math-render-fallback"><span class="math-op">lim</span><sub>x→∞</sub> x<sup>2</sup> sin&nbsp;<span class="math-frac"><span class="math-num">2</span>/<span class="math-den">x<sup>3</sup></span></span></span>';
  db.version='v82-math-limit-source-correction';
  db.generatedAt='2026-08-08T10:36:00+08:00';
})();
