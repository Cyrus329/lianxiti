v77 数学公式乱码全面修复版

修复原因：
v76 中部分 LaTeX 公式没有命中预渲染缓存，回退渲染器又错误处理了 \begin{cases}、\dfrac、\frac、\sqrt 等命令，导致页面直接显示 begincases、dfrac、sindfrac 等源码文字。该问题不是题目 OCR 乱码，而是公式渲染链路错误。

本版修复：
1. 重新扫描当前完整题库全部题干、选项、答案和解析中的数学公式。
2. 使用 MathJax CHTML 重新生成干净的本地公式缓存。
3. 共预渲染 1215 个不同公式，MathJax 错误 0 个。
4. 修复回退渲染器对 cases、frac、dfrac、sqrt、underline、mathbb 等命令的匹配错误。
5. 同时覆盖旧 math-render-cache.js；即使浏览器暂时读取旧入口，也不会继续加载旧的损坏公式缓存。
6. 更新页面资源版本和 Service Worker 缓存名，避免继续读取 v76 旧缓存。
7. 不改题目 ID，不清除已完成、错题、做对做错次数和学习时长。

重点复核：
- 第三节 连续与间断·选择题6 的分段函数已命中预渲染缓存。
- 该题渲染结果不再包含 begincases、dfrac 或原始 LaTeX 命令。
