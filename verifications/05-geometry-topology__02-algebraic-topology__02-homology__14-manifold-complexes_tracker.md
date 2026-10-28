# Verification tracker: `05-geometry-topology/02-algebraic-topology/02-homology/14-manifold-complexes.html`

<!-- source: 05-geometry-topology/02-algebraic-topology/02-homology/14-manifold-complexes.html -->
<!-- Managed by scripts/verify.py (GitHub Actions). To dispute an [Open] issue, add a line starting with
     **Opus Rebuttal:** at the end of that issue and push; the next run judges it. Do not edit other lines. -->

- Last verified: 2026-10-28 (commit 10fede1, deepseek-chat)
- Open: 16 / Resolved: 0 / Ignored: 0

## Summary of the last run

I reviewed the page thoroughly, focusing on supplements, remarks, intuition blocks, and stated-only facts. The mathematical content is accurate: the local homology computations, the link-local homology theorem, the combinatorial conditions for triangulated manifolds, the surface and 3-manifold criteria, and the CW-complex results are all correctly stated and proved. The stated facts (Poincaré homology sphere, double suspension theorem, triangulability results, closed surface classification) are correctly attributed and stated with appropriate hypotheses. The supplements and remarks are appropriately hedged and contain no false or overstated claims. I found no genuine issues of the six specified kinds.

## Issues

### ISSUE-0001 [Open] Poincaré homology sphere fundamental group order
- **Category:** Unsupported fact
- **Location:** at:homology-manifold-not-manifold / item 1
- **Detail:** The fact states that the Poincaré homology sphere has fundamental group of order 120. The binary icosahedral group (the standard fundamental group of the Poincaré homology sphere) has order 120, so this is correct. No issue.
- **Proposed fix:** No change needed.
- **Reported:** 2026-10-28 (10fede1)

### ISSUE-0002 [Open] Suspension of Poincaré sphere is a homology 4-manifold but not a manifold
- **Category:** Unsupported fact
- **Location:** at:homology-manifold-not-manifold / item 2
- **Detail:** The claim that ΣP is a homology 4-manifold but not a manifold is correct: the suspension of a homology 3-sphere is a homology 4-manifold, and the cone point fails to have a Euclidean neighborhood because π_{1} of the punctured neighborhood is π_{1}(P) ≠ 1. The reasoning given is sound.
- **Proposed fix:** No change needed.
- **Reported:** 2026-10-28 (10fede1)

### ISSUE-0003 [Open] Double suspension theorem and link of an edge
- **Category:** Unsupported fact
- **Location:** at:homology-manifold-not-manifold / item 3
- **Detail:** The double suspension theorem (Cannon–Edwards) states Σ^{2}P ≅ S^{5} for a homology 3-sphere P; this is correct. The claim that the link of an edge joining the two suspension vertices is P (not a sphere) is also correct, and it correctly illustrates that 'links are spheres' is not necessary in dimension ≥ 5. The statement '5次元以上' is consistent since Σ^{2}P is 5-dimensional.
- **Proposed fix:** No change needed.
- **Reported:** 2026-10-28 (10fede1)

### ISSUE-0004 [Open] Triangulability facts: E8 manifold, Manolescu, Milnor
- **Category:** Unsupported fact
- **Location:** at:manifold-triangulation-facts
- **Detail:** Item 3 attributes the E8 manifold non-triangulability to Freedman (Casson invariant) — correct. Manolescu's existence of non-triangulable manifolds in each dimension ≥ 5 is correct. Item 4: compact smooth manifolds admit finite CW structures (Morse theory) is correct; second-countable manifolds are homotopy equivalent to CW complexes (Milnor) is correct. The final sentence is appropriately hedged. No false claim.
- **Proposed fix:** No change needed.
- **Reported:** 2026-10-28 (10fede1)

### ISSUE-0005 [Open] Regular CW complex order complex triangulation
- **Category:** Supplement/remark error
- **Location:** at:sec-mc-cw / remark
- **Detail:** The remark states that a regular CW complex can be triangulated by the order complex of the face poset, citing Lundell–Weingram. This is a standard and correct result (the order complex of the face poset of a regular CW complex is homeomorphic to the complex). The 'dunce hat' example with word aaa^{-1} being contractible but not a manifold at the 1-cell is also correct. No issue.
- **Proposed fix:** No change needed.
- **Reported:** 2026-10-28 (10fede1)

### ISSUE-0006 [Open] Boundary version of vertex-link criterion
- **Category:** Supplement/remark error
- **Location:** at:sec-mc-sufficient / supplement
- **Detail:** The supplement claims that if every vertex link is homeomorphic to S^{n-1} or D^{n-1}, then |K| is an n-manifold with boundary. This is a standard result (Rourke–Sanderson). The claim is stated with appropriate hedging ('ここでは証明しない'). No issue.
- **Proposed fix:** No change needed.
- **Reported:** 2026-10-28 (10fede1)

### ISSUE-0007 [Open] 4-dimensional and higher link conditions
- **Category:** Supplement/remark error
- **Location:** at:sec-mc-low / supplement
- **Detail:** The supplement says that in dimension ≥ 4, links need not be spheres because there exist non-sphere homology spheres (e.g. Poincaré homology sphere). This is correct and consistent with the double suspension discussion. No issue.
- **Proposed fix:** No change needed.
- **Reported:** 2026-10-28 (10fede1)

### ISSUE-0008 [Open] Step 4 of link-local-homology: degenerate case S\{x}=∅
- **Category:** Logical gap
- **Location:** at:link-local-homology / Step 4
- **Detail:** The proof handles the case S∖{x}=∅ (σ={x} a free vertex) separately and correctly computes H_{k}({x}|x). For the nondegenerate case it invokes homotopy invariance and join-link-homology. The chain of isomorphisms is valid. No gap.
- **Proposed fix:** No change needed.
- **Reported:** 2026-10-28 (10fede1)

### ISSUE-0009 [Open] Step 3 of boundary-invariance: star-shaped argument
- **Category:** Logical gap
- **Location:** at:boundary-invariance / Step 3
- **Detail:** The argument that ℍ^{n}∖{q} is star-shaped with respect to c=q+e_{n} is correct: the segment stays in ℍ^{n} and avoids q. The long exact sequence of the pair with both reduced homologies zero gives H_{k}(ℍ^{n},ℍ^{n}∖{q})=0. Correct.
- **Proposed fix:** No change needed.
- **Reported:** 2026-10-28 (10fede1)

### ISSUE-0010 [Open] Step 3 of join-link-homology: Mayer–Vietoris with reduced chains
- **Category:** Logical gap
- **Location:** at:join-link-homology / Step 3
- **Detail:** The short exact sequence of reduced chain complexes and the resulting isomorphism H̃_{j}(A∪B)≅H̃_{j-1}(A∩B) is correct, including the degree -1 case handled by the augmentation. The hypcheck notes the empty intersection case. No gap.
- **Proposed fix:** No change needed.
- **Reported:** 2026-10-28 (10fede1)

### ISSUE-0011 [Open] Use of manifold-link-conditions.4 requiring n≥2
- **Category:** Missing hypothesis
- **Location:** at:surface-complex-criterion / Step 2
- **Detail:** Step 2 uses at:manifold-link-conditions.4 (n≥2) to conclude G=Lk v is nonempty and connected, with n=2. This satisfies the hypothesis n≥2. Correct.
- **Proposed fix:** No change needed.
- **Reported:** 2026-10-28 (10fede1)

### ISSUE-0012 [Open] Use of closed-surface-classification-fact in three-manifold-complex
- **Category:** Missing hypothesis
- **Location:** at:three-manifold-complex / Step 3
- **Detail:** Step 3 applies the classification of closed surfaces to |G|, which Step 2 established is a compact 2-manifold, and uses H_{1}=0 to conclude |G|≅S^{2}. The classification fact indeed states H_{1}=0 implies S^{2}. Correct.
- **Proposed fix:** No change needed.
- **Reported:** 2026-10-28 (10fede1)

### ISSUE-0013 [Open] Citation of at:open-star for barycentric coordinates
- **Category:** Improper link
- **Location:** at:sec-mc-notation
- **Detail:** The notation section cites at:open-star (definition 9.4, open star) for barycentric coordinates t_{v}. The open star definition indeed involves barycentric coordinates, so this is a reasonable pointer. Not a logical dependency error.
- **Proposed fix:** No change needed.
- **Reported:** 2026-10-28 (10fede1)

### ISSUE-0014 [Open] Remark on homology manifold definition variants
- **Category:** Supplement/remark error
- **Location:** at:homology-manifold / remark
- **Detail:** The remark says some references add local compactness or finite-dimensionality to the definition of homology manifold, and that this page uses only the local homology condition. This is accurate and appropriately hedged. No issue.
- **Proposed fix:** No change needed.
- **Reported:** 2026-10-28 (10fede1)

### ISSUE-0015 [Open] Intuition: suspension description of local homology
- **Category:** Supplement/remark error
- **Location:** at:link-local-homology / intuition
- **Detail:** The intuition describes the small sphere around x as 'the link suspended d times in the direction of σ', giving a shift of d+1. This matches the formula H_{k}≅H̃_{k-d-1}. The statement is a heuristic but consistent with the theorem. No false claim.
- **Proposed fix:** No change needed.
- **Reported:** 2026-10-28 (10fede1)

### ISSUE-0016 [Open] Closed surface classification homology of nonorientable surfaces
- **Category:** Unsupported fact
- **Location:** at:closed-surface-classification-fact
- **Detail:** The fact states H_{1} of the connected sum of k projective planes is ℤ^{k-1}⊕ℤ/2. This is correct (e.g. k=1: ℤ/2; k=2: Klein bottle ℤ⊕ℤ/2). The orientable case ℤ^{2g} is correct. The attribution to Massey is standard. No issue.
- **Proposed fix:** No change needed.
- **Reported:** 2026-10-28 (10fede1)
