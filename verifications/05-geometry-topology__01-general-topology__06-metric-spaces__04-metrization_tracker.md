# Verification tracker: `05-geometry-topology/01-general-topology/06-metric-spaces/04-metrization.html`

<!-- source: 05-geometry-topology/01-general-topology/06-metric-spaces/04-metrization.html -->
<!-- Managed by scripts/verify.py (GitHub Actions). To dispute an [Open] issue, add a line starting with
     **Opus Rebuttal:** at the end of that issue and push; the next run judges it. Do not edit other lines. -->

- Last verified: 2026-10-28 (commit 10fede1, deepseek-chat)
- Open: 14 / Resolved: 0 / Ignored: 0

## Summary of the last run

The page is largely correct. The proofs of the countable product metrization, the regular second-countable normal lemma, Urysohn metrization, Stone's theorem, and the problems are sound. The supplements and intuition are accurate. The only potential issue is the citation \ref[4]{top:perfect-preserves.4} in the perfect image metrizability proof, which cannot be verified from the provided label table (only item 2 is listed); if item 4 does not state the needed preservation of second countability and T₃, this is an improper link. All other checked statements (Bing, Nagata–Smirnov, Smirnov, ω₁ examples, universality of the Hilbert cube) are correct.

## Issues

### ISSUE-0001 [Open] ω₁+1 is not paracompact but the supplement's parenthetical is imprecise
- **Category:** Supplement/remark error
- **Location:** supplement (距離化定理の一般形 / 前提を変えると)
- **Detail:** The supplement says 'ω₁ (order topology) and its one-point compactification ω₁+1 are T₄ but not metrizable (some are not paracompact, see the example after \ref{top:paracompact})'. This is essentially correct: ω₁ is not paracompact (it is countably compact but not compact, hence not paracompact), while ω₁+1 is compact Hausdorff hence paracompact. The phrasing 'パラコンパクトでないものもある' is vague but not false. However, the claim that ω₁ is T₄ is correct (it is order topology, regular and normal). No genuine error here; the statement is acceptable.
- **Proposed fix:** No change needed; optionally clarify that ω₁ is not paracompact while ω₁+1 is compact hence paracompact.
- **Reported:** 2026-10-28 (10fede1)

### ISSUE-0002 [Open] Bing metrization theorem statement: σ-discrete base requires regular T₁ (or T₃) and the base condition
- **Category:** Supplement/remark error
- **Location:** supplement (長田–スミルノフ / ビング)
- **Detail:** The supplement states Bing's theorem as: 'T₃ and has a σ-discrete open base'. Bing's theorem is usually stated for regular T₁ (i.e. T₃) spaces with a σ-discrete base; the base need not be 'open base' in the sense of consisting of open sets — a σ-discrete base (of open sets) is standard. The statement as given is correct. No error.
- **Proposed fix:** No change needed.
- **Reported:** 2026-10-28 (10fede1)

### ISSUE-0003 [Open] Smirnov's theorem: paracompact Hausdorff locally metrizable implies metrizable
- **Category:** Supplement/remark error
- **Location:** supplement (スミルノフの定理)
- **Detail:** The supplement states: 'a paracompact Hausdorff space that is locally metrizable is metrizable (Smirnov's theorem)'. This is a correct classical theorem (Smirnov metrization theorem: a paracompact locally metrizable space is metrizable; Hausdorff is implied by local metrizability plus paracompactness, but stating Hausdorff is harmless). No error.
- **Proposed fix:** No change needed.
- **Reported:** 2026-10-28 (10fede1)

### ISSUE-0004 [Open] Hypcheck claim that T₁ is needed for injectivity and that non-T₁ regular spaces are not metrizable
- **Category:** Unsupported fact
- **Location:** top:urysohn-metrization / hypcheck
- **Detail:** The hypcheck says: 'T₁: used for injectivity. A non-T₁ regular space (e.g. the indiscrete space) is not metrizable.' This is correct: the indiscrete space on ≥2 points is regular (in the sense of the separation axiom page, regularity without T₁) but not metrizable since metric spaces are T₁. No error.
- **Proposed fix:** No change needed.
- **Reported:** 2026-10-28 (10fede1)

### ISSUE-0005 [Open] Perfect image metrizability: citation of top:perfect-preserves.4 not in label table
- **Category:** Logical gap
- **Location:** top:perfect-image-metrizable / proof
- **Detail:** The proof cites \ref[4]{top:perfect-preserves.4}, but the label table only lists top:perfect-preserves.2 (theorem 3.5, '完全写像が保つ性質'). The reference to item 4 of that theorem is not verifiable from the given table; if item 4 does not state that perfect images of second-countable spaces are second-countable (or that perfect images of T₃ are T₃), the citation is improper. Since the table only confirms item 2, the use of item 4 is an unverified citation.
- **Proposed fix:** Verify that top:perfect-preserves.4 indeed states that a perfect image of a second-countable (resp. T₃) space is second-countable (resp. T₃); otherwise replace with the correct item or add the argument: a perfect map is closed with compact fibers, so the image of a countable base is a countable network, and a regular space with a countable network is second countable.
- **Reported:** 2026-10-28 (10fede1)

### ISSUE-0006 [Open] Perfect image metrizability: 'separable metric space has a countable base' argument uses choice implicitly
- **Category:** Logical gap
- **Location:** top:perfect-image-metrizable / proof
- **Detail:** The proof says 'a separable metric space has a countable base (balls of rational radius centered at a countable dense set)'. This is correct and standard. No gap.
- **Proposed fix:** No change needed.
- **Reported:** 2026-10-28 (10fede1)

### ISSUE-0007 [Open] Intuition: Hilbert cube is universal for separable metric spaces
- **Category:** Supplement/remark error
- **Location:** intuition (高い視点から)
- **Detail:** The intuition says the Hilbert cube is a 'universal' space containing all separable metric spaces (citing top:separable-metrizable). This is correct: every separable metric space embeds in the Hilbert cube (Urysohn). No error.
- **Proposed fix:** No change needed.
- **Reported:** 2026-10-28 (10fede1)

### ISSUE-0008 [Open] Corollary: 'separable metric spaces embed in the Hilbert cube' — correct
- **Category:** Unsupported fact
- **Location:** top:separable-metrizable
- **Detail:** The corollary states that 'second countable T₃' is equivalent to 'separable metrizable', and in particular separable metric spaces embed in the Hilbert cube. This is correct (Urysohn metrization + second-countability of separable metric spaces). No error.
- **Proposed fix:** No change needed.
- **Reported:** 2026-10-28 (10fede1)

### ISSUE-0009 [Open] Stone's theorem proof: local finiteness argument (b) uses s(z)=u>t but z may not be in U_t only if s(z)>t
- **Category:** Logical gap
- **Location:** top:stone-paracompact / Step (b)
- **Detail:** In (b), the proof argues: B(y,3·2^{-i}) ⊆ U_t and s(z)=u>t so z∉U_t, hence d(y,z)≥3·2^{-i}. This is correct: if z∈U_t then s(z)≤t, contradiction. The inequality d(y,z)≥3·2^{-i} follows since the ball of radius 3·2^{-i} around y is contained in U_t and z∉U_t. No gap.
- **Proposed fix:** No change needed.
- **Reported:** 2026-10-28 (10fede1)

### ISSUE-0010 [Open] Stone's theorem proof: (a) uses y∉E_i ⊇ D_{s,n} and n<i, but E_i is union over j<i, so D_{s,n}⊆E_i requires n<i
- **Category:** Logical gap
- **Location:** top:stone-paracompact / Step (a)
- **Detail:** In (a), the proof says y∉E_i ⊇ D_{s,n} since n<i. Indeed E_i = ⋃_{t, j<i} D_{t,j}, so D_{s,n}⊆E_i when n<i. Since i≥n+j≥n+1>n, this holds. Correct.
- **Proposed fix:** No change needed.
- **Reported:** 2026-10-28 (10fede1)

### ISSUE-0011 [Open] Stone's theorem proof: 'X is Hausdorff so X is paracompact' — missing that the refinement is locally finite and open
- **Category:** Logical gap
- **Location:** top:stone-paracompact / end of proof
- **Detail:** The proof concludes 'X is Hausdorff (\ref{top:metric-hausdorff}) so X is paracompact'. The definition of paracompactness requires every open cover to have a locally finite open refinement; the proof has constructed such a refinement D. The Hausdorff condition is part of the definition of paracompact (some authors require Hausdorff). The argument is complete: D is an open refinement, locally finite, so X is paracompact. No gap.
- **Proposed fix:** No change needed.
- **Reported:** 2026-10-28 (10fede1)

### ISSUE-0012 [Open] Hypcheck: 'the well-ordering (AC) is needed for s(x) and for (b)'
- **Category:** Supplement/remark error
- **Location:** top:stone-paracompact / hypcheck
- **Detail:** The hypcheck says AC is needed to well-order U and to define s(x), and that (b) uses 'the center z is not in U_t'. This is accurate. No error.
- **Proposed fix:** No change needed.
- **Reported:** 2026-10-28 (10fede1)

### ISSUE-0013 [Open] Problem 1 solution: [0,1]^R is not first countable — correct
- **Category:** Unsupported fact
- **Location:** top:prob-uncountable-product-not-metrizable
- **Detail:** The solution correctly shows that a countable base at 0 would be defeated by a coordinate not in the countable union J. Correct.
- **Proposed fix:** No change needed.
- **Reported:** 2026-10-28 (10fede1)

### ISSUE-0014 [Open] Problem 2 solution: one-point compactification of uncountable discrete space is not metrizable — correct
- **Category:** Unsupported fact
- **Location:** top:prob-one-point-uncountable-discrete
- **Detail:** The solution correctly argues that metrizability would imply second countability, hence D second countable, contradiction. Correct.
- **Proposed fix:** No change needed.
- **Reported:** 2026-10-28 (10fede1)
