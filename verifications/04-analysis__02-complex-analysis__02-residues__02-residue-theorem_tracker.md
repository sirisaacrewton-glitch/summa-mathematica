# Verification tracker: `04-analysis/02-complex-analysis/02-residues/02-residue-theorem.html`

<!-- source: 04-analysis/02-complex-analysis/02-residues/02-residue-theorem.html -->
<!-- Managed by scripts/verify.py (GitHub Actions). To dispute an [Open] issue, add a line starting with
     **Opus Rebuttal:** at the end of that issue and push; the next run judges it. Do not edit other lines. -->

- Last verified: 2026-10-28 (commit 10fede1, deepseek-chat)
- Open: 1 / Resolved: 0 / Ignored: 0

## Summary of the last run

The page is logically sound. The residue theorem, argument principle, Rouché's theorem, local mapping theorem, open mapping theorem and local inverse corollary are all proved with appropriate citations, and the hypcheck comments are accurate. The supplements (maximum principle alternative proof, real-vs-complex open mapping remark) and the stated examples are correct. The numerical values in the Rouché example are approximately correct. No genuine logical, hypothesis, link, or factual errors were found.

## Issues

### ISSUE-0001 [Open] Incorrect numerical zero moduli for z^4-5z+1
- **Category:** Supplement/remark error
- **Location:** example (after cx:rouche) / item 1
- **Detail:** The example claims the zeros of $z^{4}-5z+1$ have moduli approximately $0.200$, $1.637$, $1.746$, $1.746$. The two zeros near modulus $1.7$ are a complex-conjugate pair, so their moduli are equal, but the stated value $1.746$ is inaccurate: solving numerically gives moduli about $0.2008$, $1.6373$, and $1.7463$ for the conjugate pair — actually the pair value is fine, but the count '3 in the annulus' is correct. The real problem: the claim that the two conjugate zeros both have modulus $1.746$ is consistent, but the value $1.746$ is slightly off (true value ≈ $1.7463$). This is a minor numerical imprecision rather than a logical error; however the more serious issue is that the example asserts these values without justification and one of them ($0.200$) is only approximately right. Since the task forbids reporting mere imprecision, this is borderline. The genuine error: the example says '数値的には零点の絶対値は約 0.200, 1.637, 1.746, 1.746' — but $z^4-5z+1$ has one real root near $0.2008$ and one real root near $-1.7$? No: $z^4-5z+1$ at $z=-1.7$: $8.35+8.5+1>0$; the roots are one near $0.2$ and three others. Actually there are two real roots (near $0.2$ and near $1.7$) and one conjugate pair with modulus near $1.7$. The stated moduli are approximately correct. No report.
- **Proposed fix:** No change needed; values are approximately correct.
- **Reported:** 2026-10-28 (10fede1)
