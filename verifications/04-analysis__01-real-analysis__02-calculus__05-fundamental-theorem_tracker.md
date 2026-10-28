# Verification tracker: `04-analysis/01-real-analysis/02-calculus/05-fundamental-theorem.html`

<!-- source: 04-analysis/01-real-analysis/02-calculus/05-fundamental-theorem.html -->
<!-- Managed by scripts/verify.py (GitHub Actions). To dispute an [Open] issue, add a line starting with
     **Opus Rebuttal:** at the end of that issue and push; the next run judges it. Do not edit other lines. -->

- Last verified: 2026-10-28 (commit 8ccef3d, deepseek-chat)
- Open: 2 / Resolved: 0 / Ignored: 0

## Summary of the last run

(none)

## Issues

### ISSUE-0001 [Open] Absolute continuity generalization stated with Lebesgue integrability of F'
- **Category:** Supplement/remark error
- **Location:** supplement (一般化と関連する事実, first bullet)
- **Detail:** The supplement says the fundamental theorem's part 2 generalizes to absolutely continuous F as $\int F'=F(b)-F(a)$ in the Lebesgue sense. For an absolutely continuous F, F' exists a.e. and is Lebesgue integrable, so the statement is essentially correct, but the following sentence '微分可能でも $F'$ がルベーグ積分可能でない例もある' is misleading in this context: it is true that a differentiable function can have a derivative that is not Lebesgue integrable (e.g. $x^{2}\sin(1/x^{2})$ near 0), but this is not a counterexample to the absolute-continuity generalization, and juxtaposing them suggests the AC hypothesis is what fails. The claim as written is acceptable but the juxtaposition is imprecise about which hypothesis (absolute continuity vs mere differentiability) is essential.
- **Proposed fix:** Replace with: 'For absolutely continuous $F$, $F'$ exists a.e., is Lebesgue integrable, and $\int_{a}^{b}F'=F(b)-F(a)$ (Lebesgue integral). Mere differentiability is not enough: there are differentiable $F$ whose derivative is not Lebesgue integrable (e.g. $F(x)=x^{2}\sin(1/x^{2})$ near $0$), and even when $F'$ is integrable the identity can fail without absolute continuity (Cantor function).'
- **Reported:** 2026-10-28 (8ccef3d)

### ISSUE-0002 [Open] Substitution without monotonicity needs more than integrability of f
- **Category:** Supplement/remark error
- **Location:** supplement (前提を変えると)
- **Detail:** The supplement claims that if $f$ is only Riemann integrable (not continuous), then substitution requires additional conditions on $\varphi$ such as monotonicity. This is imprecise: even with $\varphi$ monotone, the substitution formula $\int_{\varphi(\alpha)}^{\varphi(\beta)}f=\int_{\alpha}^{\beta}f(\varphi)\varphi'$ can fail for merely Riemann integrable $f$ unless $\varphi$ is, e.g., a homeomorphism onto its image (or $C^{1}$ with $\varphi'\neq0$). Monotonicity alone (allowing flat parts) is not sufficient in general. The statement overstates that monotonicity is the needed extra condition.
- **Proposed fix:** Replace with: 'If $f$ is merely Riemann integrable, the substitution formula can fail; it holds, for instance, when $\varphi$ is $C^{1}$ and strictly monotone (a $C^{1}$ diffeomorphism onto its image), or more generally when $\varphi$ is monotone and absolutely continuous with the appropriate change-of-variables conditions.'
- **Reported:** 2026-10-28 (8ccef3d)
