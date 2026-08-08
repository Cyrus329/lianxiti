(function(){
  const db = globalThis.BUNDLED_QUESTION_BANK;
  if (!db || !Array.isArray(db.questions) || !Array.isArray(db.completeSetRegistry)) return;
  const byId = new Map(db.questions.map(q => [String(q.id), q]));
  const questionToSets = new Map();

  function cleanText(v){ return String(v == null ? '' : v).trim(); }
  function isPlaceholder(v){
    const s = cleanText(v);
    return !s || /^(原题\d+|原资料第\d+页|待转写|待人工|暂无题干)/.test(s) || /本题已从“整页归档”改为“逐题对应”/.test(s);
  }
  function answerLooksReal(v){
    const s = cleanText(v);
    if (!s) return false;
    if (/待补|待核|暂无|未提供|请按|见已绑定|见解析图|见原图|答案未知/.test(s)) return false;
    return true;
  }
  function setAuditStatus(q){
    const hasText = !isPlaceholder(q.textStem || q.stem);
    const hasAnswer = answerLooksReal(q.answer);
    const hasAnalysis = cleanText(q.officialAnalysis || q.analysis).length > 0;
    q.completeSetAuditV80 = {
      text: hasText ? 'text_present' : 'text_needs_source_review',
      answer: hasAnswer ? 'answer_present' : 'official_answer_unconfirmed',
      analysis: hasAnalysis ? 'analysis_present' : 'analysis_unconfirmed',
      checkedAt: '2026-08-08T09:53:00+08:00'
    };
    q.sourceAuditVersion = 'v80';
  }

  for (const set of db.completeSetRegistry) {
    const items = Array.isArray(set.items) ? set.items : [];
    let found = 0;
    for (const item of items) {
      const q = byId.get(String(item.questionId));
      if (!q) continue;
      found++;
      const sid = String(set.id);
      const refs = questionToSets.get(String(q.id)) || [];
      if (!refs.includes(sid)) refs.push(sid);
      questionToSets.set(String(q.id), refs);

      // Complete-set membership is authoritative from the registry. Older sets lost these fields.
      if (!q.practiceSetId) q.practiceSetId = sid;
      if (!q.practiceSetTitle) q.practiceSetTitle = set.title;
      if (!q.practiceSection && item.section) q.practiceSection = item.section;
      if (!q.practiceOrder && item.order) q.practiceOrder = item.order;
      if (!q.originalNo && item.displayNo) q.originalNo = item.displayNo;
      if (!q.assignmentGroup && set.assignmentGroup) q.assignmentGroup = set.assignmentGroup;
      if (!q.source && set.source) q.source = set.source;
      if (!q.questionSource && set.source) q.questionSource = set.source;
      if (!q.subject && set.subject) q.subject = set.subject;

      // Pure-text should use the actual stored question, never a page placeholder.
      if (!cleanText(q.textStem) && cleanText(q.stem)) q.textStem = q.stem;
      if ((!Array.isArray(q.textOptions) || !q.textOptions.length) && Array.isArray(q.options)) q.textOptions = q.options.slice();

      // Judgment questions must remain directly answerable in pure-text mode.
      if (/判断/.test(String(q.type || '')) && (!Array.isArray(q.options) || q.options.length < 2)) {
        q.options = ['A. 对', 'B. 错'];
        q.textOptions = q.options.slice();
      }

      q.completeSetRefs = refs;
      setAuditStatus(q);
    }
    set.questionCount = items.length;
    set.sourceQuestionCount = items.length;
    set.sourceCountLabel = `完整${items.length}题`;
    set.pageMode = false;
    set.auditV80 = {
      registryItems: items.length,
      foundQuestions: found,
      allItemsResolved: found === items.length,
      checkedAt: '2026-08-08T09:53:00+08:00'
    };
  }

  // Keep every referenced question aware of all complete sets that reuse it.
  for (const [qid, refs] of questionToSets.entries()) {
    const q = byId.get(qid);
    if (q) q.completeSetRefs = refs.slice();
  }

  db.version = 'v80-complete-set-full-audit';
  db.generatedAt = '2026-08-08T09:53:00+08:00';
  db.completeSetAuditVersion = 'v80';
  globalThis.QB_CONTENT_REVISION = 'v80-complete-set-full-audit-20260808';
})();
