/* v125 全方位计算机第四章：分类归位 + 文字题卡优先显示 */
(function () {
  const db = globalThis.BUNDLED_QUESTION_BANK;
  if (!db || !Array.isArray(db.questions)) return;

  const setId = 'qfw-v124-computer-os-ch4-full';
  const ids = new Set();

  function joinPdfLines(value) {
    return String(value || '')
      .replace(/\r?\n/g, '')
      .replace(/\s+([。；，、）)])\s*/g, '$1')
      .replace(/。+/g, '。')
      .replace(/（\s+/g, '（')
      .replace(/\s+（/g, '（')
      .trim();
  }

  function stripPageNoise(value) {
    return joinPdfLines(value)
      .replace(/\s*第\s*\d+\s*页\s*第二章\s*操作系统\s*/g, ' ')
      .replace(/\s*【解析】[\s\S]*$/g, '')
      .replace(/\s{2,}/g, ' ')
      .trim();
  }

  // The v123 answer import kept the PDF's inline A-D text in `stem` while
  // separately storing a sometimes incomplete options array. Re-split it once
  // here so the selectable text card has the same options as the source page.
  function normalizeInlineOptions(question) {
    const raw = stripPageNoise(question.textStem || question.stem || '');
    const markers = [...raw.matchAll(/(?:^|\s)([A-D])[.．、]\s*/g)];
    if (markers.length >= 2) {
      const cleanStem = raw.slice(0, markers[0].index).trim();
      const parsed = markers.map((marker, index) => {
        const start = marker.index + marker[0].length;
        const end = index + 1 < markers.length ? markers[index + 1].index : raw.length;
        const body = raw.slice(start, end).trim().replace(/\s+/g, ' ');
        return `${marker[1]}. ${body}`;
      }).filter((item) => !/第\s*\d+\s*页/.test(item));
      question.stem = cleanStem;
      question.textStem = cleanStem;
      if (parsed.length >= 2) {
        question.options = parsed;
        question.textOptions = parsed.slice();
      }
    } else {
      question.stem = raw;
      question.textStem = raw;
    }
    if (question.answer === '移动设；备') question.answer = '移动设备';
    question.textFirstQuestionView = true;
    question.sourcePageDisplay = 'collapsed_reference';
  }

  db.questions.forEach((question) => {
    if (!question || String(question.practiceSetId || '') !== setId) return;
    question.assignmentGroup = '额外题库';
    question.assignmentOrder = 1;
    question.textFirstQuestionView = true;
    question.sourcePageDisplay = 'collapsed_reference';
    question.sourceAuditVersion = 'v125-qfw-computer-os-layout-category-fix';
    question.completeSetRefs = [setId];
    ids.add(String(question.id));
  });

  const blueForestIds = new Set();
  db.questions.forEach((question) => {
    if (!question || !/^BF-V123-COMP-OS-/.test(String(question.id || ''))) return;
    normalizeInlineOptions(question);
    blueForestIds.add(String(question.id));
  });

  // Question 8 is split across the PDF OCR boundary and only its first option
  // survived in the imported text. The original source page gives the complete
  // four choices, so restore them explicitly.
  const bf8 = db.questions.find((question) => String(question.id || '') === 'BF-V123-COMP-OS-008');
  if (bf8) {
    bf8.stem = '在Windows中，各应用程序之间的信息交换是通过（ ）进行的。';
    bf8.textStem = bf8.stem;
    bf8.options = ['A. 记事本', 'B. 剪贴板', 'C. 画图', 'D. 写字板'];
    bf8.textOptions = bf8.options.slice();
  }

  if (!Array.isArray(db.completeSetRegistry)) db.completeSetRegistry = [];
  const set = db.completeSetRegistry.find((item) => item && String(item.id || '') === setId);
  if (set) {
    set.assignmentGroup = '额外题库';
    set.assignmentOrder = 1;
    set.catalogOrder = 94;
    set.archiveNote = 'v125：全方位第4章属于同步练习完整题组，已从课后练习归回额外题库；做题页优先显示一一对应的文字题卡，原题整页折叠为核对资料，避免题干和选项重复。';
  }

  db.version = 'v125-qfw-computer-os-layout-category-fix';
  globalThis.V125_QFW_COMPUTER_OS_FIX_AUDIT = {
    setId,
    correctedQuestions: ids.size,
    assignmentGroup: set && set.assignmentGroup,
    textFirstQuestions: db.questions.filter((question) => ids.has(String(question.id)) && question.textFirstQuestionView).length,
    blueForestQuestions: blueForestIds.size,
    blueForestChoiceOptionsRecovered: db.questions.filter((question) => blueForestIds.has(String(question.id)) && Array.isArray(question.options) && question.options.length >= 2).length,
    setFound: Boolean(set)
  };
})();
