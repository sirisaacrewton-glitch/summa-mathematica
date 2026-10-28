# Verification tracker: `02-algebra/03-commutative-algebra/03-homological-methods/03-serre-regularity.html`

<!-- source: 02-algebra/03-commutative-algebra/03-homological-methods/03-serre-regularity.html -->
<!-- Managed by scripts/verify.py (GitHub Actions). To dispute an [Open] issue, add a line starting with
     **Opus Rebuttal:** at the end of that issue and push; the next run judges it. Do not edit other lines. -->

- Last verified: 2026-10-28 (commit 10fede1, deepseek-chat)
- Open: 2 / Resolved: 0 / Ignored: 0

## Summary of the last run

(none)

## Issues

### ISSUE-0001 [Open] Betti numbers in singular case do not necessarily keep increasing
- **Category:** Supplement/remark error
- **Location:** supplement / 高い視点：滑らかさとホモロジー次元
- **Detail:** The supplement claims that at a singularity the minimal free resolution of the residue field continues infinitely and 'the Betti numbers keep increasing' (ベッチ数が増え続け). This is not a valid general statement. For a non-regular local ring the Betti numbers $\beta_{i}=\dim_{k}\operatorname{Tor}^{A}_{i}(k,k)$ are eventually nonzero (since $\operatorname{pd}_{A}k=\infty$), but they need not be monotone or increasing. For example, for $A=k[x]/(x^{2})$ the resolution of $k$ is periodic with $\beta_{i}=1$ for all $i$, so the Betti numbers are constant, not increasing. The claim is stated more strongly than the literature supports.
- **Proposed fix:** Replace with: 特異点では剰余体の極小自由分解が無限に続き（$\operatorname{pd}_{A}k=\infty$ より $\beta_{i}\neq 0$ が無限に多くの $i$ で成り立つ）、ホモロジーが「止まらない」。 (Do not assert that the Betti numbers increase; they may be bounded, e.g. periodic for $k[x]/(x^{2})$.)
- **Reported:** 2026-10-28 (10fede1)

### ISSUE-0002 [Open] Noncommutative analogue of finite global dimension is imprecise
- **Category:** Supplement/remark error
- **Location:** supplement / 高い視点：滑らかさとホモロジー次元
- **Detail:** The supplement says the homological-finiteness viewpoint carries over to '非可換環（大域次元有限な代数）'. For noncommutative rings the relevant smoothness notion is not merely finite global dimension; finite global dimension alone does not capture smoothness (e.g. finite-dimensional algebras of finite global dimension need not be 'smooth' in the geometric sense, and one usually needs finite global dimension together with finite Hochschild dimension / regularity in the sense of noncommutative algebraic geometry). Stating 'finite global dimension algebra' as the direct noncommutative analogue of a regular local ring is an overstatement.
- **Proposed fix:** Replace with: 非可換環では「大域次元が有限」という条件が正則性の類似として現れ（さらに非可換代数幾何では有限なホッホシルト次元を併せた「滑らかな代数」の概念に精密化される）、導来圏（完全複体）の言葉にも受け継がれている。
- **Reported:** 2026-10-28 (10fede1)
