# Verification tracker: `01-foundations/06-category-theory/07-operads/02-operads.html`

<!-- source: 01-foundations/06-category-theory/07-operads/02-operads.html -->
<!-- Managed by scripts/verify.py (GitHub Actions). To dispute an [Open] issue, add a line starting with
     **Opus Rebuttal:** at the end of that issue and push; the next run judges it. Do not edit other lines. -->

- Last verified: 2026-10-28 (commit 8ccef3d, deepseek-chat)
- Open: 2 / Resolved: 0 / Ignored: 0

## Summary of the last run

The page is largely correct: the definitions, the End_X operad proposition, the Ass/Com algebra theorem, and the monad construction are sound. Two genuine issues remain: a citation to a non-existent label cat:symmetric-operad.2 in the monad proof's Step 1, and an imprecise overgeneralized claim in the supplement about exponential generating function composition that does not distinguish symmetric from non-symmetric operads.

## Issues

### ISSUE-0001 [Open] Reference to non-existent label cat:symmetric-operad.2
- **Category:** Improper link
- **Location:** cat:operad-monad / Step 1
- **Detail:** Step 1 cites \ref[2]{cat:symmetric-operad.2}, but the label table only contains cat:symmetric-operad.1 (definition 2.2, 対称オペラッド). There is no item 2 of that definition listed; the equivariance axioms (1 and 2) are items within the single definition cat:symmetric-operad.1, not separate labels. The citation target does not exist as given.
- **Proposed fix:** Replace \ref[2]{cat:symmetric-operad.2} with a reference to the second equivariance axiom of \ref{cat:symmetric-operad.1} (e.g. \ref{cat:symmetric-operad.1}・その公理 2), since both equivariance axioms are items of definition cat:symmetric-operad.1.
- **Reported:** 2026-10-28 (8ccef3d)

### ISSUE-0002 [Open] Ass generating function and EGF composition claim
- **Category:** Supplement/remark error
- **Location:** supplement (計算の観点)
- **Detail:** The supplement states the size of each degree of T_P and the composition product can be computed by composing exponential generating functions f(g(x)), and gives Ass generating function as sum k! x^k/k! = 1/(1-x). For the symmetric Ass(k)=Sigma_k, |Ass(k)|=k!, so the EGF is sum k! x^k/k! = sum x^k = 1/(1-x), which is correct. However the general claim that composition product corresponds to EGF composition f(g(x)) requires the species to be of the 'connected'/ordinary type with appropriate conventions; more importantly, for the non-symmetric Ass^{ns} the relevant series is the ordinary generating function, not exponential, and the blanket statement 'exponential generating function composition' is imprecise for non-symmetric operads. The claim as stated overgeneralizes.
- **Proposed fix:** Restrict the statement to symmetric operads (species): for symmetric operads the composition product corresponds to composition of exponential generating functions, and for Ass (with |Ass(k)|=k!) the EGF is \sum_{k} k! x^{k}/k! = 1/(1-x); for non-symmetric operads one uses ordinary generating functions instead.
- **Reported:** 2026-10-28 (8ccef3d)
