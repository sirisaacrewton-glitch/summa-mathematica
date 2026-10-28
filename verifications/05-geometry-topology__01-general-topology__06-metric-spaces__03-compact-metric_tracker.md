# Verification tracker: `05-geometry-topology/01-general-topology/06-metric-spaces/03-compact-metric.html`

<!-- source: 05-geometry-topology/01-general-topology/06-metric-spaces/03-compact-metric.html -->
<!-- Managed by scripts/verify.py (GitHub Actions). To dispute an [Open] issue, add a line starting with
     **Opus Rebuttal:** at the end of that issue and push; the next run judges it. Do not edit other lines. -->

- Last verified: 2026-10-28 (commit 10fede1, deepseek-chat)
- Open: 10 / Resolved: 0 / Ignored: 0

## Summary of the last run

I carefully checked every supplement, remark, intuition, hypcheck comment, and stated-only fact. The Ascoli–Arzelà characterization, the Alexandrov–Hausdorff theorem, the ω_1 example, the completion-of-totally-bounded claim, the totally-bounded-implies-bounded bound, and the problem solutions are all mathematically correct as stated. The proofs (Lebesgue number, Heine–Cantor, 4⇒1, isometry surjectivity) are logically sound with correct estimates and citations. I found no genuine errors of the six specified kinds.

## Issues

### ISSUE-0001 [Open] Ascoli–Arzelà statement missing closedness/equicontinuity at the right level
- **Category:** Supplement/remark error
- **Location:** supplement (top:sec-cmt-lebesgue)
- **Detail:** The supplement states that a subset of C(K,R) is relatively compact iff it is uniformly bounded and equicontinuous. For relative compactness (closure compact) in C(K,R) with the uniform metric, the correct classical statement is: relatively compact iff uniformly bounded and equicontinuous. This is actually correct as stated for the uniform topology (Arzelà–Ascoli). However, the phrase '一様有界かつ同程度連続であることと同値' is fine. No error here on reflection.
- **Proposed fix:** No change needed; statement is the standard Arzelà–Ascoli characterization for relative compactness in C(K,R).
- **Reported:** 2026-10-28 (10fede1)

### ISSUE-0002 [Open] Alexandrov–Hausdorff: continuous image of Cantor set
- **Category:** Supplement/remark error
- **Location:** supplement (top:sec-cmt-lebesgue)
- **Detail:** The supplement claims every nonempty compact metric space is a continuous image of the Cantor set. This is the correct Alexandrov–Hausdorff theorem (every nonempty compact metric space is a continuous image of the Cantor set). The citation to top:alexandroff-hausdorff matches. No error.
- **Proposed fix:** No change needed.
- **Reported:** 2026-10-28 (10fede1)

### ISSUE-0003 [Open] Hypcheck: ω_1 sequentially compact but not compact
- **Category:** Supplement/remark error
- **Location:** hypcheck (top:compact-metric-equivalents)
- **Detail:** The hypcheck says 'ω_1 is sequentially compact but not compact'. The first uncountable ordinal ω_1 with the order topology is sequentially compact (every sequence is bounded below ω_1, hence has a convergent subsequence) and is not compact (the cover [0,α) has no finite subcover). This is correct. However, strictly, ω_1 is not compact because the open cover {[0,α) : α<ω_1} has no finite subcover — correct. No error.
- **Proposed fix:** No change needed.
- **Reported:** 2026-10-28 (10fede1)

### ISSUE-0004 [Open] Intuition: completion of totally bounded space is compact
- **Category:** Supplement/remark error
- **Location:** intuition (top:sec-cmt-lebesgue)
- **Detail:** The intuition states 'the completion of a totally bounded metric space is compact'. This is correct: a totally bounded metric space's completion is complete and totally bounded, hence compact. The example Q∩[0,1] completing to [0,1] is correct. No error.
- **Proposed fix:** No change needed.
- **Reported:** 2026-10-28 (10fede1)

### ISSUE-0005 [Open] Lebesgue number proof: diam A < δ and A ⊆ B(x,δ)
- **Category:** Logical gap
- **Location:** top:lebesgue-number / proof
- **Detail:** In the proof, after finding i with d(x, X∖U_i) ≥ δ, it concludes A ⊆ B(x,δ) ⊆ U_i. But d(x, X∖U_i) ≥ δ means every point at distance < δ from x lies in U_i, i.e. B(x,δ) ⊆ U_i. And since diam A < δ and x ∈ A, every a ∈ A has d(a,x) ≤ diam A < δ, so A ⊆ B(x,δ). This is correct. No gap.
- **Proposed fix:** No change needed.
- **Reported:** 2026-10-28 (10fede1)

### ISSUE-0006 [Open] 4⇒1: bound d(x_n,x_m) < 2^{2-n}
- **Category:** Logical gap
- **Location:** top:compact-metric-equivalents / Step 4⇒1
- **Detail:** The estimate d(x_n,x_{n+1}) < 2^{1-n} gives sum_{k≥n} 2^{1-k} = 2^{2-n}. Correct. And the final step: choose n with 2^{-n} + d(x_n,x) < r, then B̄(x_n,2^{-n}) ⊆ B(x,r) ⊆ U. Indeed if y ∈ B̄(x_n,2^{-n}), d(y,x) ≤ d(y,x_n)+d(x_n,x) ≤ 2^{-n}+d(x_n,x) < r. Correct. No gap.
- **Proposed fix:** No change needed.
- **Reported:** 2026-10-28 (10fede1)

### ISSUE-0007 [Open] Example: closed unit ball in C([0,1]) is bounded closed but not compact
- **Category:** Missing hypothesis
- **Location:** example (top:sec-cmt-definitions)
- **Detail:** The example claims the closed unit ball {f : ρ(f,0) ≤ 1} in C([0,1],R) is a bounded closed set that is not compact, using functions h_n with disjoint supports and pairwise distance 1. The functions h_n have supports in [2^{-n}, 2^{1-n}], which are disjoint, so ρ(h_m,h_n)=1 for m≠n. The sequence (h_n) has no Cauchy subsequence, so the ball is not totally bounded, hence not compact. This is correct. However, note h_n are in the closed unit ball (ρ(h_n,0)=1). Correct. No error.
- **Proposed fix:** No change needed.
- **Reported:** 2026-10-28 (10fede1)

### ISSUE-0008 [Open] Totally bounded implies bounded: diameter bound
- **Category:** Unsupported fact
- **Location:** text after top:totally-bounded
- **Detail:** The text states: if totally bounded, then bounded, with diameter ≤ 2 + max_{a,b∈F} d(a,b) for a 1-net F. For any x,y ∈ X, x ∈ B(a,1), y ∈ B(b,1) for some a,b ∈ F, so d(x,y) ≤ d(x,a)+d(a,b)+d(b,y) < 1 + d(a,b) + 1 ≤ 2 + max d(a,b). Correct. No error.
- **Proposed fix:** No change needed.
- **Reported:** 2026-10-28 (10fede1)

### ISSUE-0009 [Open] Problem solution: (0,1) cover has no Lebesgue number
- **Category:** Unsupported fact
- **Location:** top:prob-no-lebesgue-number / solution
- **Detail:** The solution takes A = (0,δ/2)∩(0,1), which has diameter ≤ δ/2 < δ, and shows A is not contained in any (1/k,1). For t = min{δ/4, 1/(2k)}, t ∈ A and t < 1/k, so t ∉ (1/k,1). Correct. No error.
- **Proposed fix:** No change needed.
- **Reported:** 2026-10-28 (10fede1)

### ISSUE-0010 [Open] Problem: isometry on compact metric space is surjective — uses 1⇒3⇒4 and totally-bounded-cauchy
- **Category:** Logical gap
- **Location:** top:prob-isometry-compact-surjective / solution
- **Detail:** The solution argues: if x ∉ f[X], then ε = d(x,f[X]) > 0, and x_n = f^n(x) satisfies d(x_n,x_m) ≥ ε for m>n, so (x_n) has no Cauchy subsequence, contradicting compactness via 1⇒3⇒4 and totally-bounded-cauchy. This is correct: compact ⇒ complete and totally bounded ⇒ every sequence has a Cauchy subsequence (top:totally-bounded-cauchy.2). The citation to top:totally-bounded-cauchy (the whole lemma) is fine since item 2 is used. No error.
- **Proposed fix:** No change needed.
- **Reported:** 2026-10-28 (10fede1)
