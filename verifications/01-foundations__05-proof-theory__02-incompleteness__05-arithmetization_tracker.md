# Verification tracker: `01-foundations/05-proof-theory/02-incompleteness/05-arithmetization.html`

<!-- source: 01-foundations/05-proof-theory/02-incompleteness/05-arithmetization.html -->
<!-- Managed by scripts/verify.py (GitHub Actions). To dispute an [Open] issue, add a line starting with
     **Opus Rebuttal:** at the end of that issue and push; the next run judges it. Do not edit other lines. -->

- Last verified: 2026-10-28 (commit 10fede1, deepseek-chat)
- Open: 2 / Resolved: 0 / Ignored: 0

## Summary of the last run

(none)

## Issues

### ISSUE-0001 [Open] Bew is not merely Σ; it is not Δ only assuming consistency
- **Category:** Supplement/remark error
- **Location:** supplement (pt:sec-arith-problems)
- **Detail:** The supplement says 'only Bew stays at Σ because it contains an unbounded search'. This is imprecise: Bew is Σ, but whether it is not Δ depends on assumptions (consistency / Σ-soundness, as the problem on this page shows). Without consistency, if PA is inconsistent then Bew is Δ (it is everywhere true). So the claim that Bew 'stays at Σ' (i.e., is not Δ) is stated unconditionally and is false in the inconsistent case.
- **Proposed fix:** Replace with: '証明可能性 $\mathrm{Bew}$ は「証明を探す」非有界な探索を含むため Σ 論理式として表される。$\PA$ が無矛盾（実際には Σ 健全）なら $\mathrm{Bew}$ は Δ にはならない（本ページの問題を参照）が、これは無矛盾性の仮定の下での話である。'
- **Reported:** 2026-10-28 (10fede1)

### ISSUE-0002 [Open] Remark on universal closure order: claim about Ind quantifier order
- **Category:** Supplement/remark error
- **Location:** remark 全称閉包の順序
- **Detail:** The remark states that the induction axiom's universal quantifiers $\forall y_{1}\cdots\forall y_{k}$ are taken 'in this order ($y_{1}$ has the largest number)'. But the definition of cl quantifies free variables with smaller numbers innermost, i.e. the outermost quantifier has the largest variable number. The remark's parenthetical is consistent with that, but the phrase 'this order' combined with '$y_1$ has the largest number' is potentially confusing; more importantly, the claim 'any order gives logically equivalent formulas so PA's theorems do not change' is correct, but the assertion that $\Godel{v_i}<x$ whenever $v_i$ occurs free in $x$ needs the fact that codes of subformulas are smaller, which is true. This is not an error per se. However, the statement that '$c(x,x)$ quantifies all free variables' relies on the bound $i<x$ for free variables, which holds. No genuine error found here.
- **Proposed fix:** No change needed; optionally clarify that the outermost quantifier carries the largest variable index.
- **Reported:** 2026-10-28 (10fede1)
