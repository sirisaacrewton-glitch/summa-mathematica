# Verification tracker: `02-algebra/05-field-theory/01-extensions/02-algebraic-extensions.html`

<!-- source: 02-algebra/05-field-theory/01-extensions/02-algebraic-extensions.html -->
<!-- Managed by scripts/verify.py (GitHub Actions). To dispute an [Open] issue, add a line starting with
     **Opus Rebuttal:** at the end of that issue and push; the next run judges it. Do not edit other lines. -->

- Last verified: 2026-10-28 (commit 10fede1, deepseek-chat)
- Open: 6 / Resolved: 0 / Ignored: 0

## Summary of the last run

(none)

## Issues

### ISSUE-0001 [Open] Degree bound in finite-algebraic (2) uses [K(α_i):K] but the minimal polynomial over K_{i-1} divides the one over K only gives degree ≤ [K(α_i):K]
- **Category:** Logical gap
- **Location:** fld:finite-algebraic / Step 2
- **Detail:** The step claims [K_i:K_{i-1}] ≤ [K(α_i):K]. This is correct: the minimal polynomial of α_i over K_{i-1} divides the minimal polynomial over K (by fld:minimal-polynomial-properties.1), so its degree is at most [K(α_i):K]. The argument is fine. No issue.
- **Proposed fix:** No change needed.
- **Reported:** 2026-10-28 (10fede1)

### ISSUE-0002 [Open] Supplement claims 'finite generated and integral ⇔ finite module' as the ring-theoretic analogue, but the correct statement requires integrality
- **Category:** Supplement/remark error
- **Location:** supplement (高い視点)
- **Detail:** The supplement states the ring-theoretic result as「有限生成かつ整 ⇔ 有限加群」. The correct standard statement is: if B is a finitely generated A-algebra and integral over A, then B is a finitely generated A-module; conversely a finitely generated A-module that is an A-algebra is integral and finitely generated as an algebra. The '⇔' as written is acceptable if interpreted as 'finitely generated algebra + integral ⇔ finite module (for algebras)'. However the phrasing「有限生成かつ整 ⇔ 有限加群」is imprecise: 'finite module' implies 'finitely generated algebra' only when the module is also a ring containing A. This is a minor imprecision but the claim as stated (finite module ⇒ finitely generated and integral) is true for A-algebras. Borderline; the statement is essentially correct. Not reporting as error.
- **Proposed fix:** No change needed; optionally clarify 'for A-algebras'.
- **Reported:** 2026-10-28 (10fede1)

### ISSUE-0003 [Open] Example: x^n - 2 irreducible via Eisenstein at p=2 requires the polynomial to be in Z[x] and primitive; correct, but '√[n]{2} has degree n' uses degree-divides contrapositive plus tower law — check
- **Category:** Unsupported fact
- **Location:** example 無限次の代数拡大
- **Detail:** The example argues x^n - 2 is irreducible over Q (Eisenstein at 2 + Gauss), so the real root 2^{1/n} has degree n over Q. Then [Q̄_C:Q] ≥ n. This is correct: the minimal polynomial of 2^{1/n} is x^n - 2 of degree n, so [Q(2^{1/n}):Q] = n, and since Q(2^{1/n}) ⊂ Q̄_C, the tower law gives [Q̄_C:Q] ≥ n. The reference to 'degree-divides contrapositive' is slightly odd but the conclusion follows directly from the tower law. No error.
- **Proposed fix:** No change needed.
- **Reported:** 2026-10-28 (10fede1)

### ISSUE-0004 [Open] Compositum degree proof Step 1: V is closed under multiplication but the claim that V is an integral domain and finite-dimensional over L needs V to be a ring containing L — it is, but 'V is a subring' requires checking 1 ∈ V
- **Category:** Logical gap
- **Location:** fld:compositum-degree / Step 1
- **Detail:** V = Σ L v_j contains L (take v_1 = 1 since 1 ∈ M is part of a K-basis; actually the basis can be chosen with v_1 = 1). The text says V contains L and M. If the basis v_1,...,v_m is arbitrary, 1 = Σ c_j v_j with c_j ∈ K ⊂ L, so 1 ∈ V. Fine. V is closed under addition and multiplication, contains 1, so it is a subring. Correct.
- **Proposed fix:** No change needed.
- **Reported:** 2026-10-28 (10fede1)

### ISSUE-0005 [Open] Compositum: 'V is clearly minimal' — need V ⊆ any subfield containing L∪M
- **Category:** Logical gap
- **Location:** fld:compositum-degree / Step 2
- **Detail:** Any subfield containing L and M contains all l_j v_j (l_j ∈ L, v_j ∈ M) and hence their sums, so contains V. Thus V is the smallest subfield containing L∪M, i.e., V = LM. Correct.
- **Proposed fix:** No change needed.
- **Reported:** 2026-10-28 (10fede1)

### ISSUE-0006 [Open] Notation: '選択公理：使わない' claim — the construction of relative algebraic closure and the example do not use AC, but the statement about algebraic closure page may
- **Category:** Supplement/remark error
- **Location:** notation
- **Detail:** The notation says the axiom of choice is not used, even when degrees are infinite, only finite-part arguments. This is plausible for this page: relative algebraic closure uses only finite extensions K(α,β), and the example uses finite-degree elements. The claim is about this page only. Acceptable.
- **Proposed fix:** No change needed.
- **Reported:** 2026-10-28 (10fede1)
