# Verification tracker: `05-geometry-topology/03-algebraic-geometry/01-varieties/02-affine-varieties.html`

<!-- source: 05-geometry-topology/03-algebraic-geometry/01-varieties/02-affine-varieties.html -->
<!-- Managed by scripts/verify.py (GitHub Actions). To dispute an [Open] issue, add a line starting with
     **Opus Rebuttal:** at the end of that issue and push; the next run judges it. Do not edit other lines. -->

- Last verified: 2026-10-28 (commit 8ccef3d, deepseek-chat)
- Open: 2 / Resolved: 0 / Ignored: 0

## Summary of the last run

(none)

## Issues

### ISSUE-0001 [Open] Reducedness alone does not suffice for parts 1 and 2 of the principal-open theorem
- **Category:** Supplement/remark error
- **Location:** hypcheck, bullet on 既約性（整域性）
- **Detail:** The hypcheck claims that parts 1 and 2 of \ref{ag:regular-functions-principal} hold with only reducedness (not integrality). This is false. Part 1 (the map $B_{f}\to\mathcal{O}(D(f))$ being injective) uses that $fg=0$ in $B$ implies $g/f^{N}=0$ in $B_{f}$, which requires $B$ to be a domain (or at least that $f$ be a nonzerodivisor). For a reduced but non-irreducible affine set, e.g. $Y=V(xy)\subset\mathbb{A}^{2}$ with $f=x+y$, the function $0$ on $D(f)$ can be written with a numerator that is a zerodivisor, so injectivity fails. The claim that reducedness suffices is an overstatement.
- **Proposed fix:** Replace with: "既約性（整域性）：一致の原理（\ref{ag:regular-functions-sheaf.3}）と関数体の定義に使った。主開集合の定理の 1・2 は、$B$ が整域であること（より一般には $f$ が非零因子であること）なしには成り立たない。被約性だけでは Step 1 の $fg=0\Rightarrow g/f^{N}=0$ は導けず、$B$ が整域であることを本質的に使う。"
- **Reported:** 2026-10-28 (8ccef3d)

### ISSUE-0002 [Open] Anti-equivalence for reduced finite-type algebras needs a restricted morphism notion
- **Category:** Supplement/remark error
- **Location:** supplement, 前提を変えると
- **Detail:** The supplement states that reduced (not necessarily integral) finitely generated $k$-algebras correspond to possibly reducible affine algebraic sets with a similar anti-equivalence. For the anti-equivalence to hold one must restrict to those $k$-algebra homomorphisms, or note that the correspondence is with reduced affine algebraic sets and all $k$-algebra maps; but the statement as written ("同様の反同値が成り立つ") is imprecise because the category of reduced algebraic sets with morphisms of locally ringed spaces is equivalent to reduced finite-type algebras, yet the naive statement omitting the local/geometric morphism condition can mislead. More importantly, the claim that nilpotents make point-sets insufficient is correct, but the reduced case statement should specify that the anti-equivalence is between reduced affine algebraic sets (as locally ringed spaces) and reduced finite-type $k$-algebras.
- **Proposed fix:** Rewrite: "被約な（整域とは限らない）有限生成 $k$ 代数は、既約とは限らないアフィン代数的集合（局所環付き空間として）に対応し、その圏と被約有限生成 $k$ 代数の圏の間に同様の反同値が成り立つ。冪零元を許すと点の集合では表せなくなり、スキームが必要になる。"
- **Reported:** 2026-10-28 (8ccef3d)
