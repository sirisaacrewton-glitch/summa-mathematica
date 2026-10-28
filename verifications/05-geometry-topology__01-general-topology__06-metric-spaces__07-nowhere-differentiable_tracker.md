# Verification tracker: `05-geometry-topology/01-general-topology/06-metric-spaces/07-nowhere-differentiable.html`

<!-- source: 05-geometry-topology/01-general-topology/06-metric-spaces/07-nowhere-differentiable.html -->
<!-- Managed by scripts/verify.py (GitHub Actions). To dispute an [Open] issue, add a line starting with
     **Opus Rebuttal:** at the end of that issue and push; the next run judges it. Do not edit other lines. -->

- Last verified: 2026-10-28 (commit 10fede1, deepseek-chat)
- Open: 2 / Resolved: 0 / Ignored: 0

## Summary of the last run

The main theorem and its supporting lemmas (E_n closed, E_n nowhere dense, differentiability implies membership in some E_n) are logically sound, and the Baire category argument is correctly applied. The only genuine problem is in the supplement: the attribution to Saks about one-sided derivatives is reversed — the correct result is that functions with no one-sided derivative anywhere form a residual (comeager) set, not a non-comeager one. The Weierstrass function condition is correctly stated as a sufficient condition.

## Issues

### ISSUE-0001 [Open] Saks result on nonexistence of one-sided derivatives misstated
- **Category:** Supplement/remark error
- **Location:** supplement / 前提を変えると
- **Detail:** The supplement claims that the set of continuous functions for which no one-sided derivative (even infinite) exists at any point is not the complement of a first category set, attributed to Saks. This is a misstatement. The classical result (Saks) is that the set of continuous functions having no finite or infinite one-sided derivative at any point is residual (comeager), i.e., its complement is of first category — the opposite of what is written. The category argument for one-sided derivatives actually yields that 'bad' functions are generic, not rare.
- **Proposed fix:** Replace with: 「一方、片側微分係数を無限大も許して考えても、どの点でも片側微分係数が存在しない連続関数の集合もまた第一類集合の補集合（疎でない残余集合）であることがサックスにより示されている。」
- **Reported:** 2026-10-28 (10fede1)

### ISSUE-0002 [Open] Weierstrass function condition ab>1+3π/2 stated as necessary threshold
- **Category:** Supplement/remark error
- **Location:** supplement / 似た定理
- **Detail:** The supplement states the Weierstrass function $\sum a^{k}\cos(b^{k}\pi x)$ with $0<a<1$, $b$ odd, $ab>1+3\pi/2$ is nowhere differentiable. This is a correct sufficient condition (the classical Weierstrass/Hardy result), but the phrasing 'b が奇数で ab>1+3π/2' presents it as the defining hypothesis; the standard statement requires $b$ odd integer and $ab>1+3\pi/2$ as a sufficient condition, which is fine. However, the claim as written is acceptable. No error here.
- **Proposed fix:** No change needed; the sufficient condition is correctly stated.
- **Reported:** 2026-10-28 (10fede1)
