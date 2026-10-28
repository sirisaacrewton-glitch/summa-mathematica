# Verification tracker: `05-geometry-topology/01-general-topology/07-uniform-spaces/01-uniform-spaces.html`

<!-- source: 05-geometry-topology/01-general-topology/07-uniform-spaces/01-uniform-spaces.html -->
<!-- Managed by scripts/verify.py (GitHub Actions). To dispute an [Open] issue, add a line starting with
     **Opus Rebuttal:** at the end of that issue and push; the next run judges it. Do not edit other lines. -->

- Last verified: 2026-10-28 (commit 10fede1, deepseek-chat)
- Open: 3 / Resolved: 0 / Ignored: 0

## Summary of the last run

The main body (definitions, lemma on bases, the topology theorem, closure proposition, separation theorem, initial uniformity, and the worked problems) is logically sound: the proofs correctly use the cited results, the hypcheck accurately tracks axioms 2 and 3, and the arctan example is a valid counterexample. The problems lie in the supplement: the claim that dropping axiom 3 destroys the neighborhood property of U[x] is too strong (the neighborhood-base argument survives without it), the quasi-uniformity/quasi-metric correspondence is overstated (not every quasi-uniformity comes from a single quasi-metric), and the complete-regularity statement omits the existence/non-uniqueness caveat. These are precision issues in side remarks rather than errors in the proved results.

## Issues

### ISSUE-0001 [Open] Removing axiom 3 does not necessarily destroy the neighborhood property
- **Category:** Supplement/remark error
- **Location:** supplement / 前提を変えると
- **Detail:** The supplement claims that if axiom 3 (V∘V⊆U) is dropped, the guarantee that U[x] is a neighborhood (Step 2 of \ref{top:unif-topology}) is lost. This is stated too strongly: dropping an axiom does not by itself produce a counterexample. In fact, if the family is closed under finite intersections and contains all supersets, then the sets U[x] still form a neighborhood base for a topology (the argument in Step 2 only needs that for each U there is some V with V⊆U, which holds trivially with V=U; openness of O={y:∃V, V[y]⊆U[x]} then follows since y∈O gives V[y]⊆U[x] directly). What actually fails without axiom 3 is that the resulting "topology" need not be compatible in the stronger sense (e.g. the intersection of two neighborhoods, or regularity), and the standard theory of uniform spaces breaks down. So the claim that Step 2's conclusion is lost is false as stated.
- **Proposed fix:** Replace with: "定義の 3 を除くと、$U[x]$ が開集合を含むという Step 2 の議論はそのままでは使えず（$W\circ W\subseteq V$ が取れない）、一様構造の標準的な理論（正則性、完備性との整合など）が崩れる。"
- **Reported:** 2026-10-28 (10fede1)

### ISSUE-0002 [Open] Quasi-uniform structures and quasi-metrics: correspondence needs care
- **Category:** Supplement/remark error
- **Location:** supplement / 前提を変えると
- **Detail:** The supplement says that dropping symmetry (axiom 2) gives a 'quasi-uniform structure' corresponding to a non-symmetric 'distance' (quasi-metric). The terminology '準一様構造' (quasi-uniformity) is standard, but the assertion that it 'corresponds to a quasi-metric' is imprecise: not every quasi-uniformity is induced by a single quasi-metric (only those with a countable base, by a quasi-metric analogue of metrization). Stated as a blanket correspondence it is overstated.
- **Proposed fix:** Replace with: "一様構造の公理から対称性（定義の 2）を除いたものは準一様構造と呼ばれ、準距離（非対称な距離）から定まる準一様構造はその代表例である（ただし一般の準一様構造が単一の準距離から来るとは限らない）。"
- **Reported:** 2026-10-28 (10fede1)

### ISSUE-0003 [Open] Completely regular spaces and uniformities: direction of the statement
- **Category:** Supplement/remark error
- **Location:** supplement / 似た定理
- **Detail:** The supplement states '一様構造の定める位相は実は完全正則であり、逆に完全正則空間の位相は一様構造から来る'. The first half is correct. The second half, as worded ('the topology of a completely regular space comes from a uniformity'), is true but needs the caveat that this requires choosing a uniformity (e.g. the finest one, via the Stone–Čech compactification / the initial uniformity from C(X,[0,1])), and it is not unique; also the standard statement is that a topological space admits a compatible uniformity iff it is completely regular (and the uniformity is then not unique in general). As stated without the existence/uniqueness caveat it is slightly overstated, though the cited page \ref{top:page-uniform-pseudometrics} presumably covers it. This is borderline; flagging for precision.
- **Proposed fix:** Replace with: "一様構造の定める位相は完全正則であり、逆に完全正則空間にはそれを定める一様構造が存在する（一意とは限らない）。"
- **Reported:** 2026-10-28 (10fede1)
