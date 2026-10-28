# Verification tracker: `02-algebra/03-commutative-algebra/04-integral-domains/06-prufer.html`

<!-- source: 02-algebra/03-commutative-algebra/04-integral-domains/06-prufer.html -->
<!-- Managed by scripts/verify.py (GitHub Actions). To dispute an [Open] issue, add a line starting with
     **Opus Rebuttal:** at the end of that issue and push; the next run judges it. Do not edit other lines. -->

- Last verified: 2026-10-28 (commit 10fede1, deepseek-chat)
- Open: 4 / Resolved: 0 / Ignored: 0

## Summary of the last run

The main theorems and proofs (characterization, distributivity, UFD case, flatness) are logically sound and the citations match their targets. The genuine problems are confined to the supplements: (1) the claim that Int(Z) is a dimension-2 Prufer non-Bezout domain is false (Int(Z) is not Prufer); (2) the ring k[x,y]/(x,y)^2 is described as local, which it is not (it has several maximal ideals), so the counterexample is misstated. The remaining supplement claims (Z/nZ arithmetical, overring of Dedekind being Dedekind when Noetherian) are correct.

## Issues

### ISSUE-0001 [Open] Int(Z) is not a Prufer domain
- **Category:** Supplement/remark error
- **Location:** supplement (例) in ring:sec-pf-flat
- **Detail:** The supplement claims that the ring of integer-valued polynomials $\operatorname{Int}(\Z)$ is a Prufer domain of Krull dimension 2 that is not a Bezout domain. In fact $\operatorname{Int}(\Z)$ is not a Prufer domain: it is a well-known non-Prufer example (it is not integrally closed; e.g. the element $x(x-1)/2$ is integral over $\operatorname{Int}(\Z)$ but not in it). The standard Prufer example in this family is the ring of integer-valued polynomials on a single element, or better $\Z+x\Q[x]$, which is a Bezout (hence Prufer) domain of Krull dimension 2 that is not Noetherian. The claim as stated is false.
- **Proposed fix:** Replace the example with: "一意分解環でもネーター環でもないプリューファー整域として、全代数的整数環（ベズー整域であることが知られている）や $\Z+x\Q[x]$（クルル次元 $2$ のベズー整域で、ネーターでない）がある。なお整数値多項式環 $\operatorname{Int}(\Z)$ はプリューファー整域でないことが知られている。"
- **Reported:** 2026-10-28 (10fede1)

### ISSUE-0002 [Open] k[x,y]/(x,y)^2 is not a local ring
- **Category:** Supplement/remark error
- **Location:** supplement (整域でない場合) in ring:sec-pf-distributive
- **Detail:** The supplement says "局所環 $k[x,y]/(x,y)^{2}$ も $\bar x$ と $\bar y$ の生成する単項イデアルが比較不能なので算術環でない". But $k[x,y]/(x,y)^{2}$ is not a local ring: its maximal ideals correspond to those of $k[x,y]$ containing $(x,y)^{2}$, and $(x,y-1)$ is such a maximal ideal (it contains $(x,y)^{2}$ since $(x,y)^{2}\subset(x,y)\subset(x,y-1)+(x)$... more simply $(x,y)^{2}\subset(x,y-1)$ is false, but $(x,y)^{2}$ is contained in $(x,y-1)$? No: $y\notin(x,y-1)$... in any case $(x,y)^{2}=(x^{2},xy,y^{2})$ and $y^{2}\notin(x,y-1)$). Concretely $(x,y-1)$ contains $(x,y)^{2}$ because $x^{2},xy,y^{2}\in(x,y-1)$: $y^{2}=(y-1)(y+1)+1$, so $y^{2}\equiv 1$, not in $(x,y-1)$. Hence $(x,y)^{2}\not\subset(x,y-1)$ and the quotient has several maximal ideals, so it is not local. The intended example is the local ring $k[x,y]/(x,y)^{2}$ with the maximal ideal $(x,y)/(x,y)^{2}$; but as written the ring is not local, so calling it "局所環" is false.
- **Proposed fix:** Write instead: "$k[x,y]/(x,y)^{2}$ は（$(x,y)/(x,y)^{2}$ を極大イデアルとする）局所環で、$\bar x$ と $\bar y$ の生成する単項イデアルが比較不能なので算術環でない。"
- **Reported:** 2026-10-28 (10fede1)

### ISSUE-0003 [Open] Z/nZ is arithmetical only for special n; the claim needs care
- **Category:** Supplement/remark error
- **Location:** supplement (整域でない場合) in ring:sec-pf-distributive
- **Detail:** The supplement asserts "$\Z/n\Z$ は算術環で". This is true for every $n$ (a quotient of a Bezout/Prufer-like ring; more directly $\Z/n\Z$ is a principal ideal ring, and every principal ideal ring is arithmetical since its ideals are totally ordered locally). So the statement itself is correct; however the parenthetical "（\ref{ring:prob-z-distributive} と同じ議論）" points to a problem about distributivity, which is a legitimate pointer. No error here on re-checking; the only genuine problem in this supplement is the non-local ring above.
- **Proposed fix:** No change needed for the $\Z/n\Z$ claim itself.
- **Reported:** 2026-10-28 (10fede1)

### ISSUE-0004 [Open] Dedekind overring statement needs Noetherian hypothesis made explicit
- **Category:** Supplement/remark error
- **Location:** solution of ring:prob-prufer-overring
- **Detail:** The parenthetical "（デデキント環 $A$ の上の環は、ネーターなら再びデデキント環になる。）" is correct as stated (it includes the Noetherian hypothesis), and follows since an overring of a Prufer domain is Prufer and a Noetherian Prufer domain is Dedekind. This is fine; no error.
- **Proposed fix:** No change needed.
- **Reported:** 2026-10-28 (10fede1)
