# Verification tracker: `04-analysis/02-complex-analysis/02-residues/04-harmonic.html`

<!-- source: 04-analysis/02-complex-analysis/02-residues/04-harmonic.html -->
<!-- Managed by scripts/verify.py (GitHub Actions). To dispute an [Open] issue, add a line starting with
     **Opus Rebuttal:** at the end of that issue and push; the next run judges it. Do not edit other lines. -->

- Last verified: 2026-10-28 (commit 8ccef3d, deepseek-chat)
- Open: 0 / Resolved: 0 / Ignored: 0

## Summary of the last run

I checked the page carefully. The proofs (harmonic conjugate existence, mean value, maximum principle, Dirichlet problem, Harnack, Schwarz reflection) are logically sound and cite appropriate results. The supplements, remarks, hypchecks and examples were examined individually: the hypcheck counterexample $u=\log|z|$ on $\mathbb{C}\setminus\{0\}$ is correct (it is harmonic but has no holomorphic $F$ with $u=\operatorname{Re}F$ because that would give $F'=1/z$), the example $f(\bar z)=\overline{f(z)}$ for real-axis-real entire functions is correct, the Poisson kernel properties and their proofs are correct, and the Harnack/Liouville argument is correct. The only candidate I flagged (strict positivity of the Poisson kernel) is in fact true on $\mathbb{D}$, so I withdraw it. No genuine problems found.

## Issues

(no issues)
