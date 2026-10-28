# Verification tracker: `01-foundations/03-computation/06-lambda-calculus/05-partial-definability.html`

<!-- source: 01-foundations/03-computation/06-lambda-calculus/05-partial-definability.html -->
<!-- Managed by scripts/verify.py (GitHub Actions). To dispute an [Open] issue, add a line starting with
     **Opus Rebuttal:** at the end of that issue and push; the next run judges it. Do not edit other lines. -->

- Last verified: 2026-10-28 (commit 10fede1, deepseek-chat)
- Open: 3 / Resolved: 0 / Ignored: 0

## Summary of the last run

The main theorems and proofs are logically sound: the construction via Turing's Θ, the head-reduction analysis, and the equivalence corollary are correct, and the hypcheck items are accurate. The genuine problems are confined to the supplement: (1) the claim that replacing condition 1 by a twoheadrightarrow condition yields the same notion 'by Church–Rosser' is false, since =_beta is symmetric while twoheadrightarrow_beta is not; (2) the denotational-semantics claim that head-normal-form-free terms are always interpreted as ⊥ is overstated and model-dependent. The remark about alternative definitions is appropriately hedged and needs no fix.

## Issues

### ISSUE-0001 [Open] Condition 1 with twoheadrightarrow is not equivalent to =_beta
- **Category:** Supplement/remark error
- **Location:** supplement / 値の表し方
- **Detail:** The supplement claims that replacing condition 1 (`F m =_beta f(m)`) by `F m twoheadrightarrow_beta f(m)` gives the same notion 'by Church–Rosser'. This is false: `=_beta` is symmetric, so `F m =_beta n` does not imply `F m twoheadrightarrow_beta n`. For example, take a term that reduces to a numeral but is not itself reducible to that numeral in the required direction; more concretely, if `F m` beta-equals a numeral but only via an expansion, the twoheadrightarrow requirement fails. Church–Rosser gives uniqueness of normal forms, not that `=_beta` implies `twoheadrightarrow_beta`. The two definitions are genuinely different (the twoheadrightarrow version is strictly stronger).
- **Proposed fix:** Replace with: 「条件 1 を『$F\underline{\vec{m}}\twoheadrightarrow_{\beta}\underline{f(\vec{m})}$』に強めても、本ページの構成（\ref{logic:partial-computable-lambda}）はその強い形を満たす。ただし $=_{\beta}$ 版とは一般には同値でない（$=_{\beta}$ は対称だが $\twoheadrightarrow_{\beta}$ はそうでない）。」
- **Reported:** 2026-10-28 (10fede1)

### ISSUE-0002 [Open] Denotational claim about unsolvable terms and bottom is imprecise
- **Category:** Supplement/remark error
- **Location:** supplement / 高い視点から
- **Detail:** The supplement states that in denotational semantics, terms without head normal form are interpreted as the least element ⊥. This is not a general theorem: in Scott's $D_\infty$ / $P\omega$ models, unsolvable terms are indeed all interpreted as ⊥, but this depends on the model (it holds for models satisfying the 'unsolvability = ⊥' property, e.g. sensible models), and is not true for arbitrary denotational models (e.g. some models distinguish unsolvables). Stated as an unconditional fact it is overstated.
- **Proposed fix:** Replace with: 「表示的意味論の標準的なモデル（例えば $D_{\infty}$ や $P\omega$）では、頭部正規形をもたない項（可解でない項）は最小元 $\bot$ に解釈されることが知られている。」
- **Reported:** 2026-10-28 (10fede1)

### ISSUE-0003 [Open] Remark on 'head normal form / unsolvable' alternative definition is vague but the parenthetical claim about the page's construction is fine; check the '文献によっては' claim
- **Category:** Supplement/remark error
- **Location:** remark (after definition logic:partial-lambda-definable)
- **Detail:** The remark says some literature requires 'no head normal form (not solvable)' instead of condition 2, and that the page's construction satisfies this stronger condition. The latter is correct (theorem logic:partial-computable-lambda gives an infinite head reduction, hence no head normal form). The claim about literature is hedged ('と言われている（ここでは確かめていない）'), so it is not a definite false statement. No error to report here beyond noting it is appropriately hedged.
- **Proposed fix:** No change needed; the hedge makes it acceptable.
- **Reported:** 2026-10-28 (10fede1)
