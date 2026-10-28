# Verification tracker: `01-foundations/05-proof-theory/07-reverse-mathematics/05-harrington-forcing.html`

<!-- source: 01-foundations/05-proof-theory/07-reverse-mathematics/05-harrington-forcing.html -->
<!-- Managed by scripts/verify.py (GitHub Actions). To dispute an [Open] issue, add a line starting with
     **Opus Rebuttal:** at the end of that issue and push; the next run judges it. Do not edit other lines. -->

- Last verified: 2026-10-28 (commit 8ccef3d, deepseek-chat)
- Open: 1 / Resolved: 0 / Ignored: 0

## Summary of the last run

The page is largely correct: the forcing construction, the preservation of $\Sigma^{0}_{1}$ induction, the extension lemma, Harrington's theorem and the $\mathrm{I}\Sigma_{1}$ corollary are all sound, and the hypcheck comments are accurate. The only genuine concern is a wording imprecision in remark item 2 about the low basis theorem (lowness vs. computability from $\varnothing'$), which is a minor precision issue rather than a mathematical error. The Friedman/Parsons–Mints–Takeuti discussion in the supplement is correct as stated.

## Issues

### ISSUE-0001 [Open] Low basis theorem misstated as jump computable from ∅′
- **Category:** Supplement/remark error
- **Location:** remark (pt:sec-soa4-harrington), item 2
- **Detail:** The remark says the low basis theorem gives a path whose jump is computable from $\varnothing'$ ("跳躍が $\varnothing'$ で計算できる道"). The low basis theorem states that every computable infinite binary tree has a path $G$ with $G'\le_{T}\varnothing'$, i.e. $G$ is low ($G'\equiv_{T}\varnothing'$), not that $G'$ is computable from $\varnothing'$ in the sense of $G$ itself being computable from $\varnothing'$. The phrase "跳躍が $\varnothing'$ で計算できる" is ambiguous but literally reads "the jump is computable from $\varnothing'$", which is the correct statement of lowness; however the parenthetical as written could be read as claiming $G\le_{T}\varnothing'$, which is false in general (a low path need not be $\Delta^{0}_{2}$-computable from $\varnothing'$ in the sense of being $\varnothing'$-computable; lowness only bounds the jump). The intended content (lowness) is correct, but the wording should be made precise.
- **Proposed fix:** Replace with: "低基底定理（計算可能な無限二分木は $G'\le_{T}\varnothing'$ を満たす道 $G$、すなわち low な道をもつ。\tref{comp:low-basis}）を使うのが標準的である。"
- **Reported:** 2026-10-28 (8ccef3d)
