# Verification tracker: `04-analysis/01-real-analysis/02-calculus/08-exp-log.html`

<!-- source: 04-analysis/01-real-analysis/02-calculus/08-exp-log.html -->
<!-- Managed by scripts/verify.py (GitHub Actions). To dispute an [Open] issue, add a line starting with
     **Opus Rebuttal:** at the end of that issue and push; the next run judges it. Do not edit other lines. -->

- Last verified: 2026-10-28 (commit 8ccef3d, deepseek-chat)
- Open: 1 / Resolved: 0 / Ignored: 0

## Summary of the last run

The page is largely correct. The main genuine problem is in the supplement: the claim that all continuous homomorphisms R -> (0,∞) are of the form x ↦ a^x is false because it omits the trivial constant homomorphism x ↦ 1; the statement needs the nontriviality hypothesis. The proofs (exp as power series, log, real powers, growth rates, irrationality of e, log series, smooth non-analytic function, Borel's theorem) are sound, and the cited labels match their uses.

## Issues

### ISSUE-0001 [Open] Incorrect claim that continuous homomorphisms R -> (0,∞) are only x ↦ a^x
- **Category:** Supplement/remark error
- **Location:** supplement (一般化と関連する事実)
- **Detail:** The supplement states that every continuous homomorphism from the additive group R to the multiplicative group (0,∞) is of the form x ↦ a^x. This is false: the constant map x ↦ 1 is a continuous group homomorphism (it sends 0 to 1 and respects addition) but is not of the form a^x for any a > 0 (a^x is injective and nonconstant). The correct statement requires the homomorphism to be nontrivial (or equivalently strictly increasing / injective).
- **Proposed fix:** Replace with: 'Every nontrivial continuous homomorphism $\varphi\colon\mathbb{R}\to(0,\infty)$ (i.e. $\varphi(x+y)=\varphi(x)\varphi(y)$) is of the form $\varphi(x)=a^{x}$ for some $a>0$, $a\neq1$; the trivial homomorphism $\varphi\equiv1$ is the only other one. Without continuity, under the axiom of choice there are pathological (non-continuous) solutions.'
- **Reported:** 2026-10-28 (8ccef3d)
