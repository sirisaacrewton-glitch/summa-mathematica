# Verification tracker: `01-foundations/01-general-logic/04-modal-logic-cs/08-mu-calculus.html`

<!-- source: 01-foundations/01-general-logic/04-modal-logic-cs/08-mu-calculus.html -->
<!-- Managed by scripts/verify.py (GitHub Actions). To dispute an [Open] issue, add a line starting with
     **Opus Rebuttal:** at the end of that issue and push; the next run judges it. Do not edit other lines. -->

- Last verified: 2026-10-28 (commit 10fede1, deepseek-chat)
- Open: 3 / Resolved: 0 / Ignored: 0

## Summary of the last run

(none)

## Issues

### ISSUE-0001 [Open] Incorrect claim that X∈FV(μY.C) implies Y≠X in case (i)
- **Category:** Supplement/remark error
- **Location:** remark after logic:mu-substitution
- **Detail:** The remark states "(i) で $X\in\mathrm{FV}(\mu Y.C)$ なら $Y\ne X$ である". But case (i) is $X\notin\mathrm{FV}(\mu Y.C)$, so the antecedent $X\in\mathrm{FV}(\mu Y.C)$ never holds in case (i); the sentence is vacuous/incorrectly stated. The intended fact (used in Step 2 of the substitution lemma) is that in case (ii), where $X\in\mathrm{FV}(\mu Y.C)$ and $Y\notin\mathrm{FV}(B)$, we have $Y\ne X$ (since $X\in\mathrm{FV}(\mu Y.C)$ implies $X\ne Y$).
- **Proposed fix:** Replace with: "(ii) で $X\in\mathrm{FV}(\mu Y.C)$ なら $Y\ne X$ である（$X\in\mathrm{FV}(\mu Y.C)=\mathrm{FV}(C)\setminus\{Y\}$ より $X\ne Y$）。"
- **Reported:** 2026-10-28 (10fede1)

### ISSUE-0002 [Open] Wrong justification for Z∉FV(C) in hypcheck
- **Category:** Supplement/remark error
- **Location:** logic:mu-substitution-syntax / hypcheck
- **Detail:** The hypcheck says "$Z\notin\mathrm{FV}(C)$ は Step 4 で（$\mu Z$ の作用域にもとの自由な $Z$ が残らないため）" used. But in Step 4, $Z\notin\mathrm{FV}(C)$ is used to conclude $\mathrm{pos}(Z,C)$ (via $Z\notin\mathrm{FV}(C)\Rightarrow\mathrm{pos}(Z,C)$), i.e. to establish positivity of the new binder's variable in its scope, not to prevent a free $Z$ from remaining. The stated reason is imprecise/misleading about where the condition is needed.
- **Proposed fix:** Change to: "$Z\notin\mathrm{FV}(C)$ は Step 4 で（$Z\notin\mathrm{FV}(C)$ より $\mathrm{pos}(Z,C)$ が成り立ち、$\mu Z$ の作用域で $Z$ が正にしか現れないことを示すため）使った。"
- **Reported:** 2026-10-28 (10fede1)

### ISSUE-0003 [Open] Overstated claim that positivity is needed for fixed point existence
- **Category:** Supplement/remark error
- **Location:** remark after logic:mu-formula
- **Detail:** The remark says "これがないと不動点が存在しないことがある". Strictly, the definition of $\lVert\mu X.A\rVert_{V}$ as the intersection of pre-fixed points always yields a set (possibly not a fixed point). What fails without positivity is that this set is a fixed point / satisfies the unfolding law, not that the intersection is undefined. The phrasing "不動点が存在しない" is acceptable for the map $f$ having no fixed point (as in problem 8.17), but the remark should be precise that the semantics still assigns a set while the unfolding/fixed-point property fails.
- **Proposed fix:** Replace with: "これがないと $T\mapsto\lVert A\rVert_{V[X\mapsto T]}$ が単調でなくなり、$\lVert\mu X.A\rVert_{V}$（前不動点の共通部分）が $f$ の不動点にならない（展開則が成り立たない）ことがある（\ref{logic:prob-mu-positivity}）。"
- **Reported:** 2026-10-28 (10fede1)
