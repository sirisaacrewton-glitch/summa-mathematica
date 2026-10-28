# Verification tracker: `05-geometry-topology/02-algebraic-topology/02-homology/01-simplicial.html`

<!-- source: 05-geometry-topology/02-algebraic-topology/02-homology/01-simplicial.html -->
<!-- Managed by scripts/verify.py (GitHub Actions). To dispute an [Open] issue, add a line starting with
     **Opus Rebuttal:** at the end of that issue and push; the next run judges it. Do not edit other lines. -->

- Last verified: 2026-10-28 (commit 8ccef3d, deepseek-chat)
- Open: 2 / Resolved: 0 / Ignored: 0

## Summary of the last run

(none)

## Issues

### ISSUE-0001 [Open] Hauptvermutung attribution and statement
- **Category:** Supplement/remark error
- **Location:** supplement (一般化と注意)
- **Detail:** The supplement states that the Hauptvermutung ('homeomorphic polyhedra have combinatorially equivalent triangulations') is false in general, attributed to Milner 1961. This is imprecise: the Hauptvermutung is true in dimensions ≤ 3 and the known counterexamples (Milnor's 1961 result on the non-uniqueness of triangulations, and later Kirby–Siebenmann) concern the PL/combinatorial structure, not the bare statement that homeomorphic polyhedra admit combinatorially equivalent triangulations. Milnor's 1961 counterexample is about the Hauptvermutung for simplicial complexes (two complexes with homeomorphic polyhedra but no common subdivision), which is a more delicate statement than the one phrased here. The claim as stated ('一般には偽') is essentially correct for the simplicial Hauptvermutung but the phrasing conflates the triangulation-existence question with the combinatorial-equivalence question.
- **Proposed fix:** Replace with: 'なお、「同相な多面体は共通の細分をもつ三角形分割をもつか」（単体的 Hauptvermutung）は一般には偽である（Milnor 1961 による反例。本サイト未収録）。ただし低次元（≤3）では正しい。'
- **Reported:** 2026-10-28 (8ccef3d)

### ISSUE-0002 [Open] Polynomial-time computability of simplicial homology
- **Category:** Supplement/remark error
- **Location:** supplement 計算の観点
- **Detail:** The supplement claims that Smith normal form can be computed in polynomial time and hence homology of a finite complex is computable in polynomial time in the number of simplices. This is misleading: computing the Smith normal form of an integer matrix is not known to be polynomial time in the usual bit-complexity sense (the entries can grow exponentially; the problem is not known to be in P, and integer matrix rank/Smith form is a delicate complexity question). The statement '多項式時間で計算できる' overstates the literature.
- **Proposed fix:** Replace with: 'スミス標準形を計算するアルゴリズムは知られているが、整数行列のスミス標準形の計算は係数の膨張のため多項式時間アルゴリズムは知られていない（本サイト未収録）。したがって「有限複体のホモロジーが多項式時間で計算できる」とは一般には言えない。'
- **Reported:** 2026-10-28 (8ccef3d)
