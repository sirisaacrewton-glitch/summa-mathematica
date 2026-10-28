# Verification tracker: `01-foundations/06-category-theory/01-basics/12-special-aft.html`

<!-- source: 01-foundations/06-category-theory/01-basics/12-special-aft.html -->
<!-- Managed by scripts/verify.py (GitHub Actions). To dispute an [Open] issue, add a line starting with
     **Opus Rebuttal:** at the end of that issue and push; the next run judges it. Do not edit other lines. -->

- Last verified: 2026-10-28 (commit 8ccef3d, deepseek-chat)
- Open: 4 / Resolved: 0 / Ignored: 0

## Summary of the last run

The main theorems and proofs (special initial object theorem, SAFT, CHaus reflective) are logically sound: hypotheses of cited results are verified and the steps check out. The genuine problems are concentrated in the side material: the supplement misstates Watts' theorem (covariant vs contravariant), wrongly calls Q/Z a cogenerator in the separating sense used on this page, and states the dual SAFT without the local-smallness hypothesis on the target; the remark also overstates that the SAFT construction gives no concrete description of βX, which contradicts the supplement's own cube-closure description.

## Issues

### ISSUE-0001 [Open] Watts theorem misstated (additive contravariant functor)
- **Category:** Supplement/remark error
- **Location:** supplement / 前提を変えると
- **Detail:** The supplement says Watts' theorem concerns "an additive contravariant functor from R-Mod to Ab that sends colimits to limits" and that it is of the form Hom_R(-,C). Watts' theorem is about *covariant* additive functors that preserve colimits (direct sums and cokernels), giving the form Hom_R(R,-) tensor - (i.e. - ⊗_R M). The contravariant Hom_R(-,C) form is the dual statement (for contravariant functors sending colimits to limits), which is a different theorem. As stated the attribution is wrong.
- **Proposed fix:** Replace with: "Mac Lane cites as an application of the dual form of this theorem Watts' theorem: an additive *covariant* functor R-Mod → Ab preserving colimits is of the form - ⊗_R M (equivalently, a contravariant additive functor sending colimits to limits is of the form Hom_R(-,C))."
- **Reported:** 2026-10-28 (8ccef3d)

### ISSUE-0002 [Open] Q/Z is not a cogenerator of Ab in the stated sense
- **Category:** Supplement/remark error
- **Location:** supplement / 前提を変えると
- **Detail:** The supplement claims Q/Z is an injective cogenerator of Ab. Q/Z is injective and a cogenerator in the sense that every object embeds into a product of copies of it, but it is NOT a cogenerator in the sense defined on this page (definition cat:generator): for h ≠ h': a → b one needs g: b → Q/Z with gh ≠ gh'. Take a = Z, b = Z, h = id, h' = 0: any g: Z → Q/Z is zero (Q/Z is torsion, Z is torsion-free), so gh = gh'. Hence {Q/Z} fails the separating condition used by SAFT.
- **Proposed fix:** Either state it correctly: "Q/Z is an injective cogenerator in the sense that every abelian group embeds into a product of copies of Q/Z", or use a genuine cogenerator for the separating condition, e.g. "Q/Z ⊕ Q is a cogenerator of Ab in the sense of this page".
- **Reported:** 2026-10-28 (8ccef3d)

### ISSUE-0003 [Open] Dual SAFT statement omits completeness of the target
- **Category:** Supplement/remark error
- **Location:** supplement / 前提を変えると
- **Detail:** The dual form is stated as: a cocomplete, co-well-powered category with a small generating set, and a functor preserving colimits, has a right adjoint. But the dual of theorem cat:saft also requires the *target* category to be locally small (the dual of "X is locally small"), which is needed for the solution-set/cogenerator set to be small. Without it the statement is not justified by the dual argument.
- **Proposed fix:** State: "Dually, if A is cocomplete, locally small, co-well-powered with a small generating set, and X is locally small, then a functor A → X preserving small colimits has a right adjoint."
- **Reported:** 2026-10-28 (8ccef3d)

### ISSUE-0004 [Open] Claim that SAFT construction gives no concrete description of βX
- **Category:** Supplement/remark error
- **Location:** remark
- **Detail:** The remark says the SAFT construction only shows existence and gives no concrete form of βX. But the very construction in the proof does: βX is the initial object R of (X ↓ K), obtained as the intersection of all subobjects of ∏_{q∈Q} q = [0,1]^{C(X,[0,1])} (with Q = {[0,1]}), i.e. a closed subspace of the cube — precisely the classical closure description the supplement itself mentions. So the remark contradicts the supplement and is imprecise.
- **Proposed fix:** Replace with: "The SAFT construction exhibits βX as the initial object of (X ↓ K), namely the intersection of all subobjects of the product [0,1]^{C(X,[0,1])}; this is the abstract counterpart of the classical closure construction, though it does not by itself identify βX with the space of ultrafilters."
- **Reported:** 2026-10-28 (8ccef3d)
