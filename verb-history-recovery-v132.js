/* Pure, conservative backup matching. Never infer completion from question content. */
(function (root) {
  const verbId = /^(?:QFW-V117-VERB-\d{3}|QFW-V117-MODAL-TRUE-\d{2}|BF-V117-VERB-\d{3})$/;
  function hasHistory(p) {
    return !!p && (Number(p.attempts) > 0 || Number(p.correct) > 0 || Number(p.wrong) > 0 ||
      !!p.lastResult || !!p.lastAt || !!p.lastSelectedOption || !!p.addedToWrongBookAt);
  }
  function plan(payload, questions, current) {
    if (!payload || !Array.isArray(payload.progress) ||
      (payload.schema && !String(payload.schema).startsWith('question-bank-local-backup-')) ||
      (payload.app && payload.app !== 'question-bank')) {
      throw new Error('请选择本题库导出的 JSON 备份，不是单词记忆或其他软件的备份。');
    }
    const validIds = new Set(questions.map(q => q.id).filter(id => verbId.test(id)));
    const result = { matched: 0, skippedExisting: 0, invalid: 0, empty: 0, records: [] };
    const seen = new Set();
    for (const p of payload.progress) {
      if (!p || !validIds.has(p.questionId)) continue;
      if (seen.has(p.questionId)) throw new Error('备份中存在重复的动词记录 ID，请先核对备份；未修改当前记录。');
      seen.add(p.questionId); result.matched++;
      if (['attempts','correct','wrong'].some(k => p[k] != null && (!Number.isSafeInteger(Number(p[k])) || Number(p[k]) < 0))) {
        result.invalid++; continue;
      }
      if (!hasHistory(p)) { result.empty++; continue; }
      if (hasHistory(current.get(p.questionId))) { result.skippedExisting++; continue; }
      result.records.push({ ...p });
    }
    return result;
  }
  root.VerbHistoryRecovery = { plan, hasHistory };
})(globalThis);
