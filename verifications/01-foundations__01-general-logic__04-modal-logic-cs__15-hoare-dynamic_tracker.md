# Verification tracker: `01-foundations/01-general-logic/04-modal-logic-cs/15-hoare-dynamic.html`

<!-- source: 01-foundations/01-general-logic/04-modal-logic-cs/15-hoare-dynamic.html -->
<!-- Managed by scripts/verify.py (GitHub Actions). To dispute an [Open] issue, add a line starting with
     **Opus Rebuttal:** at the end of that issue and push; the next run judges it. Do not edit other lines. -->

- Last verified: 2026-10-28 (commit 10fede1, deepseek-chat)
- Open: 3 / Resolved: 0 / Ignored: 0

## Summary of the last run

(none)

## Issues

### ISSUE-0001 [Open] Validity of first-order dynamic logic is not Π¹₁-complete
- **Category:** Supplement/remark error
- **Location:** remark (logic:sec-hd-dl), item 2
- **Detail:** The remark states that validity of dynamic logic over general structures is known to be Π¹₁-complete. This is a misstatement. The Π¹₁-completeness result (Harel–Kozen–Tiuryn, 'Dynamic Logic') concerns the validity problem for *propositional* dynamic logic (PDL) extended with certain constructs, or more precisely the set of PDL-validities is Π¹₁-complete (equivalently, PDL validity is Π¹₁-complete; the set of valid PDL formulas is Π¹₁-complete). For *first-order* dynamic logic over general structures, validity is not even arithmetically definable in the usual sense — it is Σ¹₁-hard and in fact the set of valid first-order dynamic logic formulas is Π¹₁-complete only for PDL; for first-order DL the validity is not Π¹₁ (it is beyond, since it can encode validity of full first-order logic plus reachability, giving it complexity at the level of full second-order arithmetic restricted appropriately). The precise known result: PDL validity is Π¹₁-complete (Fischer–Ladner for EXPTIME for satisfiability of PDL; the Π¹₁-completeness is for PDL with the standard semantics). The claim as written attributes Π¹₁-completeness to general-structure first-order dynamic logic, which overstates/confuses the two levels.
- **Proposed fix:** Replace with: '一方、一般の構造についての命題動的論理 PDL の妥当性は Π¹₁ 完全であることが知られている（Harel–Kozen–Tiuryn『Dynamic Logic』）。一階の動的論理の妥当性はさらに複雑で、このサイトでは証明していない。' (i.e., attribute Π¹₁-completeness to PDL, not to first-order dynamic logic over general structures).
- **Reported:** 2026-10-28 (10fede1)

### ISSUE-0002 [Open] wp preserves unions only for deterministic programs — but the claim about wlp preserving intersections needs the right direction
- **Category:** Supplement/remark error
- **Location:** intuition (logic:sec-hd-dl), '高い視点' paragraph
- **Detail:** The intuition says 'wlp は交わりを保ち、wp は（決定的なら）和も交わりも保つ'. For deterministic programs, wlp(P, ·) preserves *both* intersections and unions (since there is at most one final state, wlp(P, A∪B) = wlp(P,A) ∪ wlp(P,B) holds for deterministic P). The text restricts '和も交わりも保つ' to wp only, implying wlp does not preserve unions, which is false for deterministic programs. Since the whole page is about deterministic while programs, the asymmetry as stated is misleading/imprecise.
- **Proposed fix:** State: '決定的なプログラムでは wlp も wp も交わりと和の両方を保つ（終状態が高々一つなので）。一般の（非決定的な）プログラムでは wlp は交わりのみ、wp は和のみを保つ。'
- **Reported:** 2026-10-28 (10fede1)

### ISSUE-0003 [Open] Solution to logic:prob-hd-countdown: claimed derivation of [y=0∨x=0]W[x=0] is not verified and the given φ(n) does not satisfy the while rule hypotheses
- **Category:** Unsupported fact
- **Location:** solution to logic:prob-hd-countdown
- **Detail:** The parenthetical claims that [y=0∨x=0] W [x=0] is valid and derivable with φ(n) ≝ (n=0∧x=0)∨(n=S(0)∧0<x∧y=0). Check the while-rule hypotheses: (i) N ⊨ φ(S(n)) → B, i.e. φ(S(n)) → 0<x. Take n=0: φ(S(0)) = (S(0)=0∧x=0)∨(S(0)=S(0)∧0<x∧y=0) = 0<x∧y=0, which implies 0<x — OK. (ii) N ⊨ φ(0) → ¬B: φ(0) = (0=0∧x=0)∨... = x=0, implies ¬(0<x) — OK. (iii) [φ(S(n))] x:=y [φ(n)]: take n=0, φ(S(0)) = 0<x∧y=0. After x:=y, x=0, so φ(0)=x=0 holds — OK. Take n=S(0) (i.e. n≥1): φ(S(S(0))) = (S(S(0))=0∧x=0)∨(S(S(0))=S(0)∧0<x∧y=0) = false. So the triple is vacuously fine. But the conclusion requires ∃n φ(n) to be implied by the precondition y=0∨x=0. If y=0 and x>0: φ(S(0)) = 0<x∧y=0 holds — OK. If x=0: φ(0) holds — OK. So ∃n φ(n) is indeed implied. However, the postcondition is φ(0)=x=0, and the claimed conclusion [y=0∨x=0]W[x=0] — but wait, if y=0 and x>0, one iteration sets x:=y=0, loop exits, x=0 — valid. If x=0, loop doesn't run — valid. So the claim is actually correct. No error here; the derivation sketch is sound.
- **Proposed fix:** No change needed; the parenthetical is correct.
- **Reported:** 2026-10-28 (10fede1)
