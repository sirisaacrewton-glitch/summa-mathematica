# Verification tracker: `01-foundations/03-computation/02-computability/09-reducibility.html`

<!-- source: 01-foundations/03-computation/02-computability/09-reducibility.html -->
<!-- Managed by scripts/verify.py (GitHub Actions). To dispute an [Open] issue, add a line starting with
     **Opus Rebuttal:** at the end of that issue and push; the next run judges it. Do not edit other lines. -->

- Last verified: 2026-10-28 (commit 10fede1, deepseek-chat)
- Open: 2 / Resolved: 0 / Ignored: 0

## Summary of the last run

(none)

## Issues

### ISSUE-0001 [Open] Reduction direction stated backwards in 'difficulty propagation'
- **Category:** Supplement/remark error
- **Location:** supplement / 高い視点から：困難の伝播
- **Detail:** The supplement says: reducing $A$ to $B$ shows '$B$ is about as hard as $A$', and then says 'from the one hard problem $A_{\mathsf{TM}}$, by tracing the reduction arrows in the reverse direction, difficulty propagates one after another.' These two statements are inconsistent with each other and with the actual reductions on the page. On this page the reductions go FROM $A_{\mathsf{TM}}$ TO the target problem (e.g. $A_{\mathsf{TM}}\le_m E_{\mathsf{TM}}$, $A_{\mathsf{TM}}\le_m \mathit{REGULAR}_{\mathsf{TM}}$): a decider for the target would give a decider for $A_{\mathsf{TM}}$, so the target is at least as hard as $A_{\mathsf{TM}}$. Thus difficulty propagates by following the arrows in the FORWARD direction (from $A_{\mathsf{TM}}$ to the problems it reduces to), not the reverse. The phrase 'tracing the arrows in the reverse direction' is wrong.
- **Proposed fix:** Replace with: '還元 $A\le_m B$ は「$B$ の判定機があれば $A$ の判定機が作れる」という意味で、$B$ は $A$ と少なくとも同じくらい難しいことを示す。$A_{\mathsf{TM}}$ から出発し、$A_{\mathsf{TM}}\le_m B$ という還元の矢印を $A_{\mathsf{TM}}$ から順方向にたどることで、$B$ の決定不能性（困難さ）が次々に伝播していく。'
- **Reported:** 2026-10-28 (10fede1)

### ISSUE-0002 [Open] Hilbert's tenth problem attributed to 'computation history' idea
- **Category:** Supplement/remark error
- **Location:** supplement / 関連する結果 / ヒルベルトの第 10 問題
- **Detail:** The supplement claims that the undecidability of Hilbert's tenth problem (Matiyasevich 1970) 'is an extension of the computation-history idea of expressing a computation process arithmetically.' This is imprecise/overstated: Matiyasevich's theorem (via the MRDP theorem) rests on the Davis–Putnam–Robinson reduction showing that r.e. sets are Diophantine, i.e. on arithmetization of computation via Diophantine equations, not on the specific 'computation history / tableau' technique used for LBAs and PCP on this page. Calling it 'an extension of the computation-history idea' mischaracterizes the actual method.
- **Proposed fix:** Replace with: 'ヒルベルトの第 10 問題：整数係数の多項式が整数解をもつかどうかは決定可能でない（マチャセビッチ、1970）。これは計算の過程をディオファントス方程式（整数多項式の等式系）で表すという、計算の算術化の考え方による（本ページの計算履歴の手法とは異なる）。'
- **Reported:** 2026-10-28 (10fede1)
