(function(){
  const db=globalThis.BUNDLED_QUESTION_BANK;
  if(!db||!Array.isArray(db.questions)) return;
  const idx=globalThis.QB_ASSET_PACK_INDEX||{};
  let judgmentNormalized=0, brokenAssetRefsRemoved=0, fillBlanksFixed=0;
  const fillFixes={
    'D07-EXTRA-133-B2-IMG140':'计算机有多种技术指标 , 其中决定计算机的计算精度的是________。',
    'D07-EXTRA-136-B2-IMG143':'________即时钟频率 , 是指计算机 CPU 在单位时间内发出的脉冲数 , 是计算机主要的时序信号源的频率 , 很大程度上决定了计算机的运算速度。',
    'D07-EXTRA-175-B2-IMG185':'函数 \\(f(x)=\\ln(\\sin e^{-x})\\) 由哪些函数复合而成________。',
    'D07-EXTRA-179-B2-IMG190':'判断函数 \\(f(x)=x+\\sin x\\) 的奇偶性________。',
    'D07-EXTRA-180-B2-IMG191':'设 \\(f(x)=\\frac{e^x-1}{e^x+1}\\)，判断其奇偶性________。'
  };
  for(const q of db.questions){
    if(String(q.type||'').includes('判断')){
      const target=['A. 对','B. 错'];
      if(JSON.stringify(q.options||[])!==JSON.stringify(target)){
        q.options=target.slice(); q.textOptions=target.slice(); judgmentNormalized++;
      }
    }
    if(fillFixes[q.id]){
      q.stem=fillFixes[q.id]; q.textStem=fillFixes[q.id];
      q.tags=Array.from(new Set([...(q.tags||[]),'原图二次核对','填空线修复','v87']));
      fillBlanksFixed++;
    }
    for(const field of ['images','analysisImages','backupAnalysisImages']){
      if(!Array.isArray(q[field])) continue;
      const before=q[field].length;
      q[field]=q[field].filter(p=>!p||idx[p]||false);
      brokenAssetRefsRemoved += before-q[field].length;
    }
    q.secondAuditVersion='v87';
  }
  db.version='v87-full-second-audit';
  db.generatedAt='2026-08-08T22:10:00+08:00';
  globalThis.QB_CONTENT_REVISION='v87-full-second-audit-20260808';
  globalThis.QB_V87_FIX_SUMMARY={judgmentNormalized,brokenAssetRefsRemoved,fillBlanksFixed};
})();
