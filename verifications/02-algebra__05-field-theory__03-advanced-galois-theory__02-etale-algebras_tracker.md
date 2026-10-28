# Verification tracker: `02-algebra/05-field-theory/03-advanced-galois-theory/02-etale-algebras.html`

<!-- source: 02-algebra/05-field-theory/03-advanced-galois-theory/02-etale-algebras.html -->
<!-- Managed by scripts/verify.py (GitHub Actions). To dispute an [Open] issue, add a line starting with
     **Opus Rebuttal:** at the end of that issue and push; the next run judges it. Do not edit other lines. -->

- Last verified: 2026-10-28 (commit 10fede1, deepseek-chat)
- Open: 3 / Resolved: 0 / Ignored: 0

## Summary of the last run

(none)

## Issues

### ISSUE-0001 [Open] Trace form criterion needs A to be a field (or at least reduced); fails for non-reduced A
- **Category:** Supplement/remark error
- **Location:** supplement (トレース形式による判定)
- **Detail:** The supplement claims that a finite-dimensional K-algebra A is étale iff the trace form (a,b)↦Tr_{A/K}(ab) is non-degenerate. As stated this is false. For A=K[x]/(x^{2}) (char K≠2), the trace of multiplication by any element is 0 (the regular representation is unipotent), so the trace form is identically zero, hence degenerate; that part is fine. But the equivalence fails in the other direction for non-reduced algebras: e.g. A=K[x]/(x^{2}) is not étale and the form is degenerate, consistent; however consider A=K[ε]/(ε^{2}) again—fine. The genuine problem: the criterion 'non-degenerate trace form ⇒ étale' requires A to be a field (or at least reduced). For a non-reduced A the trace form can be non-degenerate while A is not étale? In fact for A=K[x]/(x^{2}) it is degenerate, so the stated equivalence happens to hold there. The real gap is that the cited result \ref{ring:trace-conjugates.3} is about the trace form of a finite separable field extension, and the supplement asserts the general algebra statement 'is known' without the necessary hypothesis that A be a field/reduced; the standard theorem is: A is étale iff A is a product of separable fields iff the trace form is non-degenerate, but the latter equivalence requires care and is not what the cited proposition states. The sentence overstates the cited reference's scope.
- **Proposed fix:** Restrict the claim to fields: '有限次拡大 L/K が分離的であることは、トレース形式 (a,b)↦Tr_{L/K}(ab) が非退化であることと同値である（\ref{ring:trace-conjugates.3}）。一般の有限次元 K 代数 A については、A がエタール（分離的な体の直積）であることとトレース形式が非退化であることは同値であることが知られている（本サイト未収録）。' — i.e. keep the field case as the cited statement and present the general-algebra version as a separate, uncited known result.
- **Reported:** 2026-10-28 (10fede1)

### ISSUE-0002 [Open] Étale over algebraically closed field: 'K̄^n only' is imprecise about the base field
- **Category:** Supplement/remark error
- **Location:** supplement (名前の由来)
- **Detail:** The sentence '代数閉体上のエタール代数は K̄^{n} だけで' is correct only when the base field is algebraically closed (here K̄). Read literally with base K̄ it is fine, but the phrasing '代数閉体上' following the discussion of Spec A→Spec K could be misread as saying that over any field whose algebraic closure is used, étale algebras are just powers of the field, which is false (e.g. C/R is étale over R but not R^{n}). The intended meaning (base = algebraically closed field) should be made explicit.
- **Proposed fix:** 代数的閉体 k 上の有限次元エタール代数は k^{n}（n=dim）の形のものに限る。一般の体 K 上では、エタール代数は分離拡大の直積であり、K̄ 上に係数拡大すると K̄^{n} になる。
- **Reported:** 2026-10-28 (10fede1)

### ISSUE-0003 [Open] Step 3 (2⇒1): 'K(α)⊗K̄ → L_j⊗K̄ is injective' needs K(α)⊂L_j to be a field extension and separability argument
- **Category:** Logical gap
- **Location:** fld:etale-equivalent / Step 3
- **Detail:** The step argues: if L_j is not separable, pick a non-separable element α, whose minimal polynomial f has a multiple root over K̄; then K(α)⊗K̄≅K̄[x]/(f) has a nonzero nilpotent, and the map K(α)⊗K̄→L_j⊗K̄⊂Ā is injective, contradicting reducedness. The injectivity claim 'K(α)⊗K̄→L_j⊗K̄ is injective (coefficient extension of a linear map over a field)' is correct since K(α)→L_j is injective and K̄ is K-flat. However the assertion that a non-separable L_j contains a non-separable element α whose minimal polynomial has a multiple root over K̄ uses \ref{fld:separable-degree.1}, which is cited; this is fine. The genuine gap: the text writes 'L_j⊗K̄⊂Ā' but Ā=∏_i(L_i⊗K̄), so L_j⊗K̄ is a direct factor, and the composite K(α)⊗K̄→L_j⊗K̄→Ā is injective only because each map is injective; this is correct but the containment notation '⊂' for a direct factor is imprecise. Minor, not a logical error.
- **Proposed fix:** Replace 'L_j⊗K̄⊂Ā' by 'L_j⊗K̄ は Ā=∏_i(L_i⊗K̄) の直積因子であり、K(α)⊗K̄→L_j⊗K̄→Ā は単射'.
- **Reported:** 2026-10-28 (10fede1)
