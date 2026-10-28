# Verification tracker: `01-foundations/01-general-logic/04-modal-logic-cs/09-mu-approximants.html`

<!-- source: 01-foundations/01-general-logic/04-modal-logic-cs/09-mu-approximants.html -->
<!-- Managed by scripts/verify.py (GitHub Actions). To dispute an [Open] issue, add a line starting with
     **Opus Rebuttal:** at the end of that issue and push; the next run judges it. Do not edit other lines. -->

- Last verified: 2026-10-28 (commit 8ccef3d, deepseek-chat)
- Open: 3 / Resolved: 0 / Ignored: 0

## Summary of the last run

(none)

## Issues

### ISSUE-0001 [Open] Alternation example formula is not the standard 'infinitely often p' formula and is misdescribed
- **Category:** Supplement/remark error
- **Location:** remark (logic:sec-mua-ctl), item 1
- **Detail:** The remark claims that 'there is a path on which p is true infinitely often' is written by the alternating formula $\nu X.\mu Y.(\langle a\rangle(p\wedge X)\vee\langle a\rangle Y)$. This is not correct as stated. The standard formula for 'infinitely often p' (on a path) is $\nu X.\mu Y.((p\wedge\langle a\rangle X)\vee\langle a\rangle Y)$ or equivalently $\nu X.\mu Y.(\langle a\rangle((p\wedge X)\vee Y))$; the formula given in the text, $\nu X.\mu Y.(\langle a\rangle(p\wedge X)\vee\langle a\rangle Y)$, has the $\langle a\rangle$ outside the disjunction and does not express 'infinitely often p' (it does not require p to hold at the current state before moving, and the inner $\mu Y$ with $\langle a\rangle Y$ makes the least fixed point trivially reachable, so the formula collapses to something like 'eventually reach a state from which p and X hold after one step', which is not the intended property). Since the remark explicitly says the correctness of this example is not verified on the site, the misstatement is a side-comment error: the formula is presented as an example of the property, but it is not the right formula.
- **Proposed fix:** Replace the example with the standard formula: 'For instance, "on some path p holds infinitely often" is written by the alternating formula $\nu X.\mu Y.((p\wedge\langle a\rangle X)\vee\langle a\rangle Y)$ (or equivalently $\nu X.\mu Y.\langle a\rangle((p\wedge X)\vee Y)$).'
- **Reported:** 2026-10-28 (8ccef3d)

### ISSUE-0002 [Open] Claim that μ X.[a]X is not PDL-definable is stated without the needed hypothesis and is questionable
- **Category:** Supplement/remark error
- **Location:** remark (logic:sec-mua-ctl), item 2
- **Detail:** The remark asserts that 'there is no infinite a-path' ($\mu X.[a]X$) cannot be written in PDL, citing Harel–Kozen–Tiuryn. This is a strong claim about PDL expressiveness. In PDL with infinite computations, $\mu X.[a]X$ expresses 'no infinite a-path', which is a $\Pi^{1}_{1}$-like property; PDL (with tests and star) is known to be strictly less expressive than the μ-calculus, but the specific claim that this particular formula is not PDL-definable needs a precise reference and hypothesis (e.g., whether converse or infinite computations are allowed). As stated, without specifying the variant of PDL and without proof, the claim is overstated and potentially false for some variants (e.g., PDL with converse or with the 'loop' operator). The remark says the site does not prove it, but it still asserts it as known fact.
- **Proposed fix:** Weaken to: 'It is known that the μ-calculus is strictly more expressive than PDL (see Harel–Kozen–Tiuryn, Dynamic Logic), so not every μ-calculus formula translates back to PDL; a standard example is $\mu X.[a]X$ (no infinite a-path), which is not definable in PDL without additional operators. This site does not prove this.'
- **Reported:** 2026-10-28 (8ccef3d)

### ISSUE-0003 [Open] Intuition claim about 'number of unfoldings' and ordinal height is imprecise
- **Category:** Supplement/remark error
- **Location:** intuition (logic:sec-mua-bisimulation)
- **Detail:** The intuition says: '$s\in\mu^{\alpha}$ の最小の $\alpha$ は、$s$ で $\mu X.A$ が成り立つことを示すのに要る「展開の回数」で、有限のモデルなら自然数だが、無限に分岐するモデルでは ... $\omega$ 回を超える。これは整礎な木の高さを順序数で測るのと同じ現象である。' The phrase '有限のモデルなら自然数' is fine, but the claim that the minimal $\alpha$ is the 'number of unfoldings' is informal and potentially misleading: for a finite model the minimal stage is at most $|S|$, not necessarily the number of unfoldings of the formula. More importantly, the example cited (logic:mu-approximant-omega) shows stabilization at $\omega+1$, not that the minimal stage for a particular state exceeds $\omega$; the root $r$ enters at stage $\omega+1$, which is consistent, but the phrasing 'どの有限回でも足りないが、どの枝も有限で終わる' conflates the stage of the fixed point with the height of the tree. This is a side comment that is imprecise rather than false, but it overstates the identification.
- **Proposed fix:** Rephrase: 'The least $\alpha$ with $s\in\mu^{\alpha}$ measures how many approximation steps are needed before $s$ enters; on a finite model this is a natural number bounded by $|S|$, while on infinitely branching models it can be a transfinite ordinal (as in the example, where the root enters only at stage $\omega+1$). This is analogous to measuring the height of a well-founded tree by an ordinal.'
- **Reported:** 2026-10-28 (8ccef3d)
