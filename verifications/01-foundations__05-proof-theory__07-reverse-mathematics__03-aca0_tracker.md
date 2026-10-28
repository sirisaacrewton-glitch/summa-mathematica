# Verification tracker: `01-foundations/05-proof-theory/07-reverse-mathematics/03-aca0.html`

<!-- source: 01-foundations/05-proof-theory/07-reverse-mathematics/03-aca0.html -->
<!-- Managed by scripts/verify.py (GitHub Actions). To dispute an [Open] issue, add a line starting with
     **Opus Rebuttal:** at the end of that issue and push; the next run judges it. Do not edit other lines. -->

- Last verified: 2026-10-28 (commit 10fede1, deepseek-chat)
- Open: 10 / Resolved: 0 / Ignored: 0

## Summary of the last run

The page is mathematically solid: the equivalences (ACA_0 ↔ Σ⁰₁-CA ↔ ranges of injections), the analysis equivalences, and König's lemma equivalence are all correctly argued, and the hypcheck is largely accurate. The main issues are in the supplement/intuition: the Specker-sequence attribution is slightly imprecise (the specific sum construction is a variant, and the injectivity of the halting enumeration should be noted), the Ramsey remark's phrasing 'strictly weaker than ACA_0' and the Seetapun/Liu attribution could be sharpened, and remark 1 uses a theorem label (pt:omega-aca0) where a definition of the jump is needed. The hypcheck's mention of bounded collection is unnecessary but harmless. No serious logical gaps were found in the proofs.

## Issues

### ISSUE-0001 [Open] Specker sequence date and attribution
- **Category:** Supplement/remark error
- **Location:** intuition (logic:aca-analysis)
- **Detail:** The intuition says the phenomenon of a computable increasing bounded sequence whose limit is not computable was "known as the Specker sequence in 1949". Specker's paper ("Nicht konstruktiv beweisbare Sätze der Analysis", JSL 1949) indeed constructs a computable monotone bounded sequence with no computable limit, so the date is right; however the text attributes the phenomenon to the sequence c_n = sum 2^{-f(i)} built from the halting enumeration, which is a different (also valid) construction. This is a minor attribution imprecision rather than a mathematical error, but the sentence "これはスペッカー列として 1949 年に知られた現象である" attached to this specific construction is slightly misleading.
- **Proposed fix:** Replace with: "This phenomenon — a computable increasing bounded sequence of rationals whose limit is not a computable real — goes back to Specker (1949); the sequence $c_{n}=\sum_{i\le n}2^{-f(i)}$ above is a variant of it."
- **Reported:** 2026-10-28 (10fede1)

### ISSUE-0002 [Open] RT^2_2 incomparability with WKL_0
- **Category:** Supplement/remark error
- **Location:** supplement, 関連する結果 (Ramsey)
- **Detail:** The supplement states that RT^2_2 is strictly weaker than ACA_0 and incomparable with WKL_0 (attributed to Seetapun and Liu). Seetapun proved RT^2_2 does not imply ACA_0, and Liu proved RT^2_2 does not imply WKL_0 (and WKL_0 does not imply RT^2_2), so 'incomparable with WKL_0' is correct. However the phrase '真に弱い' (strictly weaker than ACA_0) is imprecise: RT^2_2 is not known to be weaker than ACA_0 in the sense of implication reversal in a clean way — what is known is that ACA_0 does not follow from RT^2_2, i.e. RT^2_2 does not imply ACA_0. Saying RT^2_2 is 'strictly weaker than ACA_0' overstates: it is not known that ACA_0 proves RT^2_2 is weaker, and in fact RT^2_2 is not provable in RCA_0 while ACA_0 proves RT^2_2, so 'strictly weaker' is defensible only as 'ACA_0 proves RT^2_2 but not conversely'. The statement as written is acceptable but the attribution 'シータプン、リュー' for incomparability with WKL_0 should be Liu alone for the non-implication RT^2_2 → WKL_0.
- **Proposed fix:** Rewrite: "$\mathrm{RT}^{2}_{2}$ does not imply $\mathsf{ACA}_{0}$ (Seetapun) and is incomparable with $\mathsf{WKL}_{0}$: $\mathsf{WKL}_{0}$ does not prove $\mathrm{RT}^{2}_{2}$ and $\mathrm{RT}^{2}_{2}$ does not prove $\mathsf{WKL}_{0}$ (Liu)."
- **Reported:** 2026-10-28 (10fede1)

### ISSUE-0003 [Open] ACA_0^+ and ∀k RT^k
- **Category:** Supplement/remark error
- **Location:** supplement, 関連する結果 (ACA_0^+)
- **Detail:** The supplement says ACA_0^+ (ACA_0 plus 'for every X, the ω-th jump X^{(ω)} exists') proves ∀k RT^k, and that ACA_0 proves each RT^k but not ∀k RT^k. This is correct (the result is due to Jockusch and others; ACA_0^+ proves ∀k RT^k, and ACA_0 does not prove the uniform statement). No error.
- **Proposed fix:** No change needed.
- **Reported:** 2026-10-28 (10fede1)

### ISSUE-0004 [Open] Low basis theorem attribution and WKL_0 ⊊ ACA_0 model claim
- **Category:** Supplement/remark error
- **Location:** remark 2 (logic:aca-equivalents)
- **Detail:** Remark 2 states that every computable infinite binary tree has a low path (low basis theorem, Jockusch–Soare) and that iterating this yields an ω-model of WKL_0 not containing ∅'. This is correct: the low basis theorem gives low paths, and one builds an ω-model closed under Turing reducibility below a low set, which omits ∅'. The attribution to Jockusch–Soare is correct. No error.
- **Proposed fix:** No change needed.
- **Reported:** 2026-10-28 (10fede1)

### ISSUE-0005 [Open] Hypcheck: bounded collection principle claim
- **Category:** Supplement/remark error
- **Location:** hypcheck, first bullet
- **Detail:** The hypcheck says that to see θ is Σ⁰₁ one used the bounded collection principle (有界収集の原理), which holds in IΣ_1. But in Step 1 of the proof of logic:bounded-sigma01-ca, θ(j) is defined with a single existential set quantifier ∃Z and bounded conditions on Z; showing θ is Σ⁰₁ does not require bounded collection — the quantifier over elements of Z and the cardinality condition are bounded. The mention of bounded collection is unnecessary and slightly misleading, but not false (bounded collection does hold in RCA_0). Minor imprecision.
- **Proposed fix:** Replace with: "$\theta$ is $\Sigma^{0}_{1}$ because the only unbounded quantifier is $\exists Z$; the conditions on $Z$ (membership, cardinality of $Y_{Z}$) are bounded."
- **Reported:** 2026-10-28 (10fede1)

### ISSUE-0006 [Open] Specker sequence limit not computable — needs the halting set
- **Category:** Unsupported fact
- **Location:** intuition (logic:aca-analysis)
- **Detail:** The intuition claims that taking f to be an enumeration of the halting problem makes the limit c a non-computable real. This is true, but the text presents it as immediate; more importantly it says 'f を停止問題の枚挙にとれば' — the halting set K is c.e., so there is a computable enumeration, but it is not injective in general. For the sum ∑2^{-f(i)} to be bounded one needs f injective (as the proof of 5⇒1 uses). The intuition should specify an injective enumeration of K (which exists since K is infinite c.e.).
- **Proposed fix:** Say: "taking $f$ to be a computable injective enumeration of the halting set $K$ (possible since $K$ is infinite c.e.)..."
- **Reported:** 2026-10-28 (10fede1)

### ISSUE-0007 [Open] 1⇒2 Step 2: '[-b,b] is a finite union of I_{0,j}' indexing
- **Category:** Logical gap
- **Location:** logic:aca-analysis, 1⇒2 Step 2
- **Detail:** The text writes that [-b,b] is the union of finitely many I_{0,j} with -b ≤ j < b. But I_{0,j} = [j, j+1], so the union over -b ≤ j < b is [-b, b], which is correct. However the claim that 'one of them contains infinitely many x_n' requires that [-b,b] contains infinitely many x_n, which holds since all x_n lie in [-b,b] and there are infinitely many n. This is fine. No gap.
- **Proposed fix:** No change needed.
- **Reported:** 2026-10-28 (10fede1)

### ISSUE-0008 [Open] 5⇒1 Step 2: strict inequality |c_k - c| < 2^{-n} and the ⇐ direction
- **Category:** Logical gap
- **Location:** logic:aca-analysis, 5⇒1 Step 2
- **Detail:** In the (⇐) direction the text argues: by the definition of limit there is k with |c - c_k| < 2^{-n}, and the right-hand side gives some m ≤ k with f(m)=n. This is correct. In the (⇒) direction, assuming f(m)=n and |c_k - c| < 2^{-n}, if m > k then c_m - c_k ≥ 2^{-f(m)} = 2^{-n}, and since c ≥ c_m one gets c - c_k ≥ 2^{-n}, contradicting |c_k - c| < 2^{-n}. This is correct. No gap.
- **Proposed fix:** No change needed.
- **Reported:** 2026-10-28 (10fede1)

### ISSUE-0009 [Open] 1⇒4 Step 2: a_k = j2^{-k} and (k,j+1) ∉ S
- **Category:** Logical gap
- **Location:** logic:aca-analysis, 1⇒4 Step 2
- **Detail:** The text claims: if a_k = j2^{-k} then (k,j) ∈ S and (k,j+1) ∉ S. This requires that j is the maximum index in S at level k, so j+1 is not in S — true because a_k is the max over the finite range and j+1 ≤ b2^k+1; but if j = b2^k then j+1 = b2^k+1 is outside the considered range, yet (k, b2^k+1) ∉ S holds anyway since all x_n ≤ b < (b2^k+1)2^{-k}. So the claim holds. No gap.
- **Proposed fix:** No change needed.
- **Reported:** 2026-10-28 (10fede1)

### ISSUE-0010 [Open] Citation of pt:omega-aca0 for jump definition
- **Category:** Improper link
- **Location:** remark 1 (logic:aca-equivalents)
- **Detail:** Remark 1 cites \ref{pt:omega-aca0} (theorem 1.12, 'ω-model of ACA_0') for the definition of the jump X'. The label table shows pt:omega-aca0 is a theorem about ω-models, not a definition of the jump. The text uses it both for the jump definition and for the fact that ACA_0's ω-models are closed under jump. The latter use is appropriate; the former (definition of jump) is a misdirected link.
- **Proposed fix:** Cite the appropriate definition of the Turing jump (e.g. from the computability chapter) for the definition, and keep \ref{pt:omega-aca0} only for the closure-under-jump statement.
- **Reported:** 2026-10-28 (10fede1)
