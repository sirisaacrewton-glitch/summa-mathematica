# Verification tracker: `04-analysis/01-real-analysis/02-calculus/01-continuity.html`

<!-- source: 04-analysis/01-real-analysis/02-calculus/01-continuity.html -->
<!-- Managed by scripts/verify.py (GitHub Actions). To dispute an [Open] issue, add a line starting with
     **Opus Rebuttal:** at the end of that issue and push; the next run judges it. Do not edit other lines. -->

- Last verified: 2026-10-28 (commit 8ccef3d, deepseek-chat)
- Open: 3 / Resolved: 0 / Ignored: 0

## Summary of the last run

The main text (definitions, propositions, theorem on interval functions, monotone/inverse results, semicontinuity) is logically sound and the proofs check out. The genuine problems are concentrated in the supplement: the $G_{\delta}$ remark about continuity points draws a false consequence (it claims no function is continuous exactly on the rationals, which is false, and misidentifies which set is forbidden), the follow-up sentence about the Thomae function 'realizing the opposite situation' is inconsistent with that theorem, and the closing remark on the robustness of the $\varepsilon$-$\delta$ definition is an unsupported meta-claim. No issues were found in the proofs or in the cited theorems' hypotheses.

## Issues

### ISSUE-0001 [Open] Continuity points are G_delta: the example is misstated
- **Category:** Supplement/remark error
- **Location:** supplement (一般化と関連する事実, second bullet)
- **Detail:** The supplement says: 'the set of continuity points of a general function is always $G_{\delta}$; in particular, a function continuous exactly on the rationals and discontinuous on the irrationals does not exist.' The $G_{\delta}$ claim is correct, but the stated consequence is wrong: $\mathbb{Q}$ is itself a countable (hence $F_{\sigma}$) set, and it is a classical fact that there is a function continuous exactly at the rationals (e.g. $f(x)=1/q$ for $x=p/q$ in lowest terms, $f(x)=0$ for irrational $x$, which is continuous exactly on $\mathbb{Q}$). What the $G_{\delta}$ theorem actually forbids is a function continuous exactly on the irrationals, since $\mathbb{R}\setminus\mathbb{Q}$ is not $F_{\sigma}$ (Baire). The sentence also contradicts the immediately following remark that the Thomae function 'realizes the opposite situation' (Thomae is continuous exactly on the irrationals), which is itself impossible by the $G_{\delta}$ theorem.
- **Proposed fix:** Replace with: 'The set of continuity points of a general function is always a $G_{\delta}$ set (a countable intersection of open sets). Consequently a function cannot be continuous exactly on the irrationals, since $\mathbb{R}\setminus\mathbb{Q}$ is not $F_{\sigma}$ (by the Baire category theorem). The Thomae function, by contrast, is continuous exactly on the irrationals and discontinuous on the rationals.'
- **Reported:** 2026-10-28 (8ccef3d)

### ISSUE-0002 [Open] Thomae function described as 'the opposite situation'
- **Category:** Supplement/remark error
- **Location:** supplement (一般化と関連する事実, second bullet, last sentence)
- **Detail:** The sentence 'トマエ関数はその逆の状況を実現する' (the Thomae function realizes the opposite situation) is false as stated: the Thomae function is continuous exactly on the irrationals and discontinuous on the rationals, which is precisely the situation the preceding $G_{\delta}$ argument rules out. So it cannot be an example of 'the opposite' of a non-existent function; the correct contrast is that continuity exactly on $\mathbb{Q}$ is possible while continuity exactly on $\mathbb{R}\setminus\mathbb{Q}$ is not.
- **Proposed fix:** Delete this sentence, or replace with: 'The Thomae function is continuous exactly on the irrationals; by the $G_{\delta}$ theorem no function can be continuous exactly on the irrationals and discontinuous on the rationals in the reverse pattern, so the rationals (not the irrationals) are the set on which a function can be continuous exactly.'
- **Reported:** 2026-10-28 (8ccef3d)

### ISSUE-0003 [Open] Countable choice remark overstates the robustness of epsilon-delta
- **Category:** Supplement/remark error
- **Location:** supplement (前提を変えると, last sentence)
- **Detail:** The supplement claims 'the $\varepsilon$-$\delta$ definition is more robust with respect to the axiom of choice than the sequential definition.' This is imprecise: the two definitions are equivalent in $\ZF$ for the limit at a point (the sequential characterization of limits requires only countable choice for the converse, and the $\varepsilon$-$\delta$ version is the primitive one), but the claim as worded suggests a general superiority that is not established. More importantly, the preceding sentence says all global theorems on the page are proved in $\ZF$, which is correct, but the 'robustness' comparison is a vague meta-claim not supported by the cited material.
- **Proposed fix:** Replace with: 'The $\varepsilon$-$\delta$ definition is the primitive one and does not itself require any choice; only the equivalence with the sequential characterization needs countable choice.'
- **Reported:** 2026-10-28 (8ccef3d)
