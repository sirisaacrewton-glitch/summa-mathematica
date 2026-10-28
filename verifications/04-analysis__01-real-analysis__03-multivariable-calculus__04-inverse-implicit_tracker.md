# Verification tracker: `04-analysis/01-real-analysis/03-multivariable-calculus/04-inverse-implicit.html`

<!-- source: 04-analysis/01-real-analysis/03-multivariable-calculus/04-inverse-implicit.html -->
<!-- Managed by scripts/verify.py (GitHub Actions). To dispute an [Open] issue, add a line starting with
     **Opus Rebuttal:** at the end of that issue and push; the next run judges it. Do not edit other lines. -->

- Last verified: 2026-10-28 (commit 8ccef3d, deepseek-chat)
- Open: 2 / Resolved: 0 / Ignored: 0

## Summary of the last run

The main theorems (inverse function theorem, implicit function theorem, constant rank theorem, Lagrange multipliers) and their proofs are logically sound, with hypotheses properly used and cited results matching their labels. The only concerns are in the supplement: the Banach-space generalization understates the analytic prerequisites (mean value inequality and openness/continuity of inversion in the operator space, both relying on completeness), and the stated-only result on local injectivity for merely differentiable maps should have its hypotheses and attribution made explicit. Both are minor imprecisions rather than errors in the core mathematics.

## Issues

### ISSUE-0001 [Open] Inverse function theorem in Banach spaces needs more than completeness, MVT and Neumann series
- **Category:** Supplement/remark error
- **Location:** supplement (一般化)
- **Detail:** The supplement claims the inverse/implicit function theorems carry over to Banach spaces 'with the same proof' using only completeness, the mean value inequality and the Neumann series. But the mean value inequality used in the proof (\ref{calc:mean-value-inequality}) is a finite-dimensional result proved via the mean value theorem along segments and the operator norm on $\mathbb{R}^{n}$; in a general Banach space one needs the corresponding mean value inequality for $C^{1}$ maps between Banach spaces (which requires the chain rule and the convergence of the relevant series, and in particular the completeness of the space of bounded operators). Moreover the proof of differentiability of the inverse in Step 6 uses the Neumann-type estimate $\|(I - A^{-1}T)\| < 1 \Rightarrow$ invertibility, which is fine, but the claim that 'only completeness, MVT and Neumann series' suffice understates the requirements: one also needs that $GL(E)$ is open in the space of bounded operators and that inversion is continuous (which itself uses completeness of $E$). The statement as written is imprecise about the hypotheses.
- **Proposed fix:** Replace with: 'The inverse and implicit function theorems extend verbatim to Banach spaces: replace $\mathbb{R}^{n}$ by a Banach space $E$, invertible matrices by bounded linear operators with bounded inverse, and use (i) the completeness of $E$ (for the contraction principle), (ii) the mean value inequality for $C^{1}$ maps between Banach spaces, and (iii) the Neumann series $\sum (I - A^{-1}T)^{k}$ together with the openness of $GL(E)$ and continuity of inversion (both requiring completeness of $E$).'
- **Reported:** 2026-10-28 (8ccef3d)

### ISSUE-0002 [Open] Local injectivity for everywhere-invertible-derivative differentiable maps: attribution/strength
- **Category:** Supplement/remark error
- **Location:** supplement (前提を変えると)
- **Detail:** The supplement states that if $f$ is merely differentiable (not $C^{1}$) and $Df$ is invertible at every point, then $f$ is locally injective, 'known but harder'. This is a genuine theorem (a differentiable map with everywhere invertible derivative is locally injective / a local homeomorphism onto an open set), but the phrasing 'known' without reference and the claim that the proof is 'more difficult' is acceptable; however the statement as given omits that one needs $Df$ invertible at every point of a neighborhood and that $f$ be defined on an open set — which is present. The real issue: the claim that this is 'not collected on this site' combined with presenting it as a known result without proof is a stated-only fact whose exact hypotheses (differentiable everywhere, $Df(x)$ invertible for all $x$) should be explicit; as written it is essentially correct. No change strictly required, but the strength 'local injectivity' should be attributed.
- **Proposed fix:** State explicitly: 'If $f: U \to \mathbb{R}^{n}$ ($U$ open) is differentiable and $Df(x)$ is invertible for every $x \in U$, then $f$ is a local homeomorphism onto an open set, in particular locally injective (a theorem of the same family; the proof does not require $C^{1}$ but is more delicate).'
- **Reported:** 2026-10-28 (8ccef3d)
