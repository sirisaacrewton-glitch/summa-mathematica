# Verification tracker: `05-geometry-topology/02-algebraic-topology/02-homology/05-degree.html`

<!-- source: 05-geometry-topology/02-algebraic-topology/02-homology/05-degree.html -->
<!-- Managed by scripts/verify.py (GitHub Actions). To dispute an [Open] issue, add a line starting with
     **Opus Rebuttal:** at the end of that issue and push; the next run judges it. Do not edit other lines. -->

- Last verified: 2026-10-28 (commit 8ccef3d, deepseek-chat)
- Open: 2 / Resolved: 0 / Ignored: 0

## Summary of the last run

The page is mathematically sound overall: the definition, the basic properties, the suspension lemma, the reflection/antipodal degrees, the fixed-point theorem, the hairy-ball theorem, the circle generator proposition, the relative degree lemma and the two-hemisphere formula are all correctly stated and proved, and the citations match their targets. The only issues found are minor imprecisions in the two supplements: the attribution of the degree-classification to π_n(S^n)≅ℤ (Hopf's theorem) conflates two statements, and the Poincaré–Hopf sentence is slightly garbled about which quantity is nonzero. Neither affects the logical correctness of the main results.

## Issues

### ISSUE-0001 [Open] Hopf's theorem misattributed to π_n(S^n)≅ℤ
- **Category:** Supplement/remark error
- **Location:** at:sec-deg-circle / supplement 「高い視点」
- **Detail:** The supplement says the degree map [S^n,S^n]→ℤ is a bijection, citing Hopf's theorem, and that this is treated in the homotopy groups page as π_n(S^n)≅ℤ. The bijectivity of the degree map is correct, but the identification [S^n,S^n]=π_n(S^n)≅ℤ is a different (and much easier) statement than Hopf's theorem. Hopf's theorem is the statement π_n(S^n)≅ℤ together with the fact that the degree classifies homotopy classes; more precisely the nontrivial content usually called "Hopf's theorem" is π_{2n-1}(S^n) has rank one / the Hopf invariant, or the classification of maps S^n→S^n up to homotopy by degree. The phrasing conflates "degree classifies homotopy classes" with "π_n(S^n)≅ℤ" as if they were the same citation, which is imprecise: π_n(S^n)≅ℤ alone does not give that the map [S^n,S^n]→ℤ is injective without the Hopf degree theorem. The attribution is acceptable in spirit but the sentence overstates that the homotopy-groups page's π_n(S^n)≅ℤ is the same result.
- **Proposed fix:** Rewrite: 「写像度はホモトピー類の集合 $[S^{n},S^{n}]$ から $\mathbb{Z}$ への全単射を与える（ホップの定理）。これは $\pi_{n}(S^{n})\cong\mathbb{Z}$ と合わせて、$\pi_{n}(S^{n})$ の生成元が写像度 $1$ の類であることを意味する。」
- **Reported:** 2026-10-28 (8ccef3d)

### ISSUE-0002 [Open] Poincaré–Hopf sign/statement for χ(S^n)
- **Category:** Supplement/remark error
- **Location:** at:hairy-ball / supplement 「一般化」
- **Detail:** The supplement states χ(S^n)=1+(-1)^n and concludes that for n even, 2≠0 so no zero-free vector field exists. This is correct. However the sentence 「$\chi(S^{n})=1+(-1)^{n}$ は $n$ が偶数で $2\ne0$ なので」 is slightly garbled: it should say that for n even χ(S^n)=2≠0. As written it reads as if χ(S^n) itself equals 2≠0 only when n is even, which is fine, but the phrasing 「は $n$ が偶数で $2\ne0$ なので」 is imprecise about which quantity is nonzero. Minor but a genuine imprecision in a side remark.
- **Proposed fix:** 「$n$ が偶数なら $\chi(S^{n})=2\ne0$ なので、ポアンカレ–ホップの定理により零点のない接ベクトル場は存在しない。」
- **Reported:** 2026-10-28 (8ccef3d)
