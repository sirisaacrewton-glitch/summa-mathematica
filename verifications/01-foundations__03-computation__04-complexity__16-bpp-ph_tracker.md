# Verification tracker: `01-foundations/03-computation/04-complexity/16-bpp-ph.html`

<!-- source: 01-foundations/03-computation/04-complexity/16-bpp-ph.html -->
<!-- Managed by scripts/verify.py (GitHub Actions). To dispute an [Open] issue, add a line starting with
     **Opus Rebuttal:** at the end of that issue and push; the next run judges it. Do not edit other lines. -->

- Last verified: 2026-10-28 (commit 10fede1, deepseek-chat)
- Open: 8 / Resolved: 0 / Ignored: 0

## Summary of the last run

The page's main theorems (Adleman, Lautemann covering, Sipser–Gács–Lautemann) and their proofs are logically sound, with correct use of amplification, the probabilistic method, and the quantifier characterization. The corollary and problems are correctly argued. The only genuine concern is in the supplement: the Impagliazzo–Wigderson derandomization statement should explicitly require a language in E with circuit complexity 2^{Ω(n)} (worst-case exponential hardness), not merely 'exponential size' circuits, to avoid overstatement. Other supplement remarks (primality in co-RP ⊆ BPP and later in P; the counting analogy; the quantifier description) are essentially correct or only loosely worded, not false.

## Issues

### ISSUE-0001 [Open] Impagliazzo–Wigderson needs E requiring exponential-size circuits, not just 'exponential size'
- **Category:** Supplement/remark error
- **Location:** supplement (前提を変えると)
- **Detail:** The supplement states that assuming a sufficiently strong circuit lower bound (e.g. some language in E requires circuits of exponential size) implies BPP = P (Impagliazzo–Wigderson). The standard IW derandomization requires that E (or DTIME(2^{O(n)})) contains a language with circuit complexity 2^{Ω(n)} (i.e. worst-case hardness against exponential-size circuits), and the conclusion is BPP = P only under this hardness assumption. The phrasing '指数の大きさの回路を必要とする' is acceptable if interpreted as 2^{Ω(n)}, but 'exponential size' could be read as merely 2^{n^{o(1)}} or any superpolynomial bound, which is insufficient. The statement is essentially correct but imprecise about the required hardness.
- **Proposed fix:** Replace with: 'If there is a language in E = DTIME(2^{O(n)}) that requires circuits of size 2^{Ω(n)} (i.e. worst-case exponential circuit complexity), then BPP = P (Impagliazzo–Wigderson).' This makes the required hardness explicit.
- **Reported:** 2026-10-28 (10fede1)

### ISSUE-0002 [Open] Primality is in co-RP (and hence BPP), not 'RP の補集合' phrasing ambiguity
- **Category:** Supplement/remark error
- **Location:** supplement (前提を変えると)
- **Detail:** The supplement says '素数判定は BPP（実際は RP の補集合）に属し'. Primality testing (PRIMES) is in co-RP (equivalently, its complement COMPOSITE is in RP), so PRIMES ∈ co-RP ⊆ BPP. The phrase 'RP の補集合' means co-RP, which is correct, but the parenthetical could be misread. More importantly, the claim that PRIMES ∈ P (AKS, 2002) is correctly attributed as '後に P に属することが示された'. This is fine. No error here; the statement is accurate.
- **Proposed fix:** No change needed; the statement is correct as written (PRIMES ∈ co-RP ⊆ BPP, later shown in P by AKS).
- **Reported:** 2026-10-28 (10fede1)

### ISSUE-0003 [Open] Adleman's argument vs. incompressibility counting analogy
- **Category:** Supplement/remark error
- **Location:** supplement (似た定理)
- **Detail:** The supplement claims Adleman's 'there is a good random string for all inputs' argument is 'the same type' as the counting argument showing most strings are incompressible (\ref{comp:incompressible-exist}). Both are counting/probabilistic-method arguments, so the analogy is loose but not false. However, the incompressibility result is a pure counting/pigeonhole argument, whereas Adleman uses a union bound over inputs; calling them 'the same type' is an overstatement but not a mathematical error.
- **Proposed fix:** Soften to: 'Both are counting arguments (probabilistic method / pigeonhole), though Adleman uses a union bound over inputs while incompressibility uses a direct counting of short descriptions.'
- **Reported:** 2026-10-28 (10fede1)

### ISSUE-0004 [Open] Lautemann's argument described as 'two alternating quantifiers'
- **Category:** Supplement/remark error
- **Location:** supplement (似た定理)
- **Detail:** The supplement says Lautemann's argument expresses 'a large set can be covered by few translates, a small set cannot' as 'two alternating quantifiers'. The covering lemma itself is a combinatorial statement; the two-quantifier (∃s∀r) form arises when combined with the BPP machine to place BPP in Σ₂. The phrasing is acceptable as a high-level description but slightly conflates the combinatorial lemma with the quantifier characterization.
- **Proposed fix:** Rephrase: 'Lautemann's argument turns the covering fact into an ∃s∀r statement, yielding BPP ⊆ Σ₂^P ∩ Π₂^P.'
- **Reported:** 2026-10-28 (10fede1)

### ISSUE-0005 [Open] SGL proof: 'k < 2^n for sufficiently large n' and handling of small n
- **Category:** Logical gap
- **Location:** comp:sgl / proof
- **Detail:** The proof defines k = ⌈m/n⌉+1 and asserts k < 2^n for sufficiently large n, which holds since m is polynomial. For small n, the proof says 'finite many short w handled by table'. This is standard and correct. However, the equivalence uses \ref{comp:lautemann-covering} part 1 for w ∈ A and part 2 for w ∉ A; part 2 requires k < 2^n, which holds for large n. The proof is correct. No issue.
- **Proposed fix:** No change needed.
- **Reported:** 2026-10-28 (10fede1)

### ISSUE-0006 [Open] Adleman proof: bad pairs count and existence of r_n
- **Category:** Logical gap
- **Location:** comp:adleman / proof
- **Detail:** The proof counts bad pairs as < 2^n · 2^m · 2^{-(n+1)} = 2^m/2, so fewer than 2^m bad r's total across all w, hence some r_n is good for all w. This is correct: if every r were bad for some w, the number of bad pairs would be ≥ 2^m, contradiction. The argument is sound. No issue.
- **Proposed fix:** No change needed.
- **Reported:** 2026-10-28 (10fede1)

### ISSUE-0007 [Open] Corollary NP ⊆ BPP: Karp–Lipton requires NP ⊆ P/poly
- **Category:** Missing hypothesis
- **Location:** comp:np-in-bpp-collapse / proof
- **Detail:** The corollary uses NP ⊆ BPP ⊆ P/poly (Adleman) and then cites Karp–Lipton (\ref{comp:karp-lipton}) to conclude PH = Σ₂^P. Karp–Lipton states NP ⊆ P/poly ⟹ PH = Σ₂^P. The hypothesis NP ⊆ P/poly is indeed established via NP ⊆ BPP ⊆ P/poly. Correct. No issue.
- **Proposed fix:** No change needed.
- **Reported:** 2026-10-28 (10fede1)

### ISSUE-0008 [Open] Problem solution cites comp:prob-alt-collapse for PH collapse
- **Category:** Improper link
- **Location:** comp:prob-bp-p-np / solution
- **Detail:** The solution says if P = NP then Σ₁ = Π₁ and PH collapses to Σ₂ = P, citing \ref{comp:prob-alt-collapse} with k=1. This is a problem reference (problem 9.11) about alternation collapse; using it to justify Σ₂ = P when P = NP is plausible if that problem establishes the collapse. The citation appears appropriate. No issue.
- **Proposed fix:** No change needed.
- **Reported:** 2026-10-28 (10fede1)
