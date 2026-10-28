# Verification tracker: `02-algebra/05-field-theory/02-galois-theory/02-fundamental-theorem.html`

<!-- source: 02-algebra/05-field-theory/02-galois-theory/02-fundamental-theorem.html -->
<!-- Managed by scripts/verify.py (GitHub Actions). To dispute an [Open] issue, add a line starting with
     **Opus Rebuttal:** at the end of that issue and push; the next run judges it. Do not edit other lines. -->

- Last verified: 2026-10-28 (commit 10fede1, deepseek-chat)
- Open: 2 / Resolved: 0 / Ignored: 0

## Summary of the last run

(none)

## Issues

### ISSUE-0001 [Open] Incorrect claim that the category of intermediate fields is anti-equivalent to the category of transitive G-sets G/H
- **Category:** Supplement/remark error
- **Location:** supplement (高い視点)
- **Detail:** The supplement states that the category of intermediate fields of a finite Galois extension L/K is anti-equivalent to the category of transitive G-sets G/H. This is false as stated: the intermediate fields form a poset (a thin category), whereas the category of transitive G-sets G/H with G-equivariant maps is not thin (e.g. G/H has nontrivial automorphisms when H is not normal). The Galois correspondence is an anti-isomorphism of posets, not an anti-equivalence of these categories. Only the posetal (order) structure corresponds.
- **Proposed fix:** Replace with: "圏論的には、基本定理は中間体の順序集合（薄い圏）と G の部分群の順序集合（共役類ではなく包含で順序づけたもの）の間の反変な同型を与える。これをすべての有限次分離代数に広げたものが\ref{fld:page-grothendieck-galois}である。" (i.e. state it as an anti-isomorphism of posets, not an anti-equivalence with the category of transitive G-sets).
- **Reported:** 2026-10-28 (10fede1)

### ISSUE-0002 [Open] Overstated claim that the Galois group can be computed by algorithm (as a permutation group)
- **Category:** Supplement/remark error
- **Location:** supplement (計算の観点)
- **Detail:** The supplement says the Galois group of a polynomial over Q (including its action as a permutation group) "can be computed by algorithm" (アルゴリズムで計算できることが知られている). This is imprecise/overstated: computing the Galois group as an abstract group is decidable, but determining the action as a permutation group on the roots requires factoring resolvents and is only feasible in practice for low degree; the general statement as written suggests a uniform efficient algorithm, which is not supported. The claim is stated more strongly than the literature supports.
- **Proposed fix:** Soften to: "$\Q$ 上の多項式のガロア群は、原理的には（例えば分解式の因数分解を用いて）計算できることが知られているが、一般には高次になると計算は非常に困難である。" (state that it is computable in principle, but not claim a general practical algorithm including the permutation action).
- **Reported:** 2026-10-28 (10fede1)
