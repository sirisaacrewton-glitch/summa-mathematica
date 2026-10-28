# Verification tracker: `05-geometry-topology/02-algebraic-topology/02-homology/01-simplicial.html`

<!-- source: 05-geometry-topology/02-algebraic-topology/02-homology/01-simplicial.html -->
<!-- Managed by scripts/verify.py (GitHub Actions). To dispute an [Open] issue, add a line starting with
     **Opus Rebuttal:** at the end of that issue and push; the next run judges it. Do not edit other lines. -->

- Last verified: 2026-10-28 (commit 10fede1, deepseek-chat)
- Open: 3 / Resolved: 0 / Ignored: 0

## Summary of the last run

The page is largely correct. The main issues are in the supplements: the Hauptvermutung attribution conflates Milnor's simplicial counterexample with the manifold version (Kirby–Siebenmann), and the claim that homology is computable in polynomial time in the number of simplices is overstated (Smith normal form is not known to be polynomial-time in bit complexity). The proofs and the main theorems appear sound.

## Issues

### ISSUE-0001 [Open] Hauptvermutung attribution and statement imprecise
- **Category:** Supplement/remark error
- **Location:** supplement (一般化と注意)
- **Detail:** The supplement says the Hauptvermutung ('homeomorphic polyhedra have combinatorially equivalent triangulations') 'is known to be false (Milnor, 1961)'. Milnor's 1961 paper 'Two complexes which are homeomorphic but combinatorially distinct' gave a counterexample to the Hauptvermutung for simplicial complexes (two complexes with homeomorphic polyhedra but no common subdivision), but the general statement as phrased (about triangulations of a fixed polyhedron being combinatorially equivalent) is more subtle: the Hauptvermutung is false in general (Milnor's counterexample, and later Kirby–Siebenmann for topological manifolds of dimension ≥ 5), but the attribution 'Milnor 1961' alone and the phrasing '基本予想 ... は一般には偽' conflates the simplicial-complex version with the manifold version. The claim as stated is essentially correct in spirit but the attribution is imprecise: Milnor's 1961 counterexample is for simplicial complexes, while the failure for topological manifolds is due to Kirby–Siebenmann (1969).
- **Proposed fix:** Replace with: 'なお、「同相な多面体は組合せ的に同値な三角形分割をもつか」（ハウプトフェアムトゥング）は一般には偽である：ミルナー（1961）は共通の細分をもたない同相な単体複体の例を与え、多様体の場合の反例はカービー–ジーベンマン（1969）による（本サイト未収録）。'
- **Reported:** 2026-10-28 (10fede1)

### ISSUE-0002 [Open] Polynomial-time homology computation claim overstated
- **Category:** Supplement/remark error
- **Location:** supplement 計算の観点
- **Detail:** The supplement claims '有限複体のホモロジーは単体の数について多項式時間で計算できる' (homology of a finite complex can be computed in polynomial time in the number of simplices). This is not established as stated: computing the Smith normal form of an integer matrix is not known to be polynomial time in the bit-complexity sense (the entries can grow exponentially; the best known algorithms are not polynomial in the input size in general, and the problem is related to integer matrix rank which is in P but SNF with large entries is delicate). The claim that homology is computable in polynomial time in the number of simplices is at best a statement about arithmetic operations, not bit complexity, and is not a standard theorem. This is an overstated claim.
- **Proposed fix:** Replace with: '整数行列のスミス標準形を用いれば原理的に計算できるが、係数の膨張のため効率的なアルゴリズムには工夫が要る（本サイト未収録）。基本群の自明性の決定不能性とは対照的に、ホモロジーは有限複体に対して計算可能である。'
- **Reported:** 2026-10-28 (10fede1)

### ISSUE-0003 [Open] Euler characteristic independence from triangulation requires topological invariance
- **Category:** Supplement/remark error
- **Location:** supplement (一般化と注意)
- **Detail:** The supplement states that the Euler characteristic is independent of the triangulation because the Betti numbers agree with singular homology, citing at:page-simplicial-singular. This is correct, but the sentence 'これは位相不変性を経由しないと証明が難しい（凸多面体の場合だけなら初等的な証明がある）' is a side comment claiming that proving V-E+F=2 for S^2 without topological invariance is difficult. This is a reasonable remark, but the parenthetical '凸多面体の場合だけなら初等的な証明がある' is fine. No error here; the main claim is justified by the cited page. However, the statement that the Euler characteristic is independent of triangulation 'because the Betti numbers agree with singular homology' is correct only for the alternating sum of Betti numbers, which is what is claimed. No issue.
- **Proposed fix:** No change needed.
- **Reported:** 2026-10-28 (10fede1)
