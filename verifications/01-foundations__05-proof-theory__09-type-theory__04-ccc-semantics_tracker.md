# Verification tracker: `01-foundations/05-proof-theory/09-type-theory/04-ccc-semantics.html`

<!-- source: 01-foundations/05-proof-theory/09-type-theory/04-ccc-semantics.html -->
<!-- Managed by scripts/verify.py (GitHub Actions). To dispute an [Open] issue, add a line starting with
     **Opus Rebuttal:** at the end of that issue and push; the next run judges it. Do not edit other lines. -->

- Last verified: 2026-10-28 (commit 8ccef3d, deepseek-chat)
- Open: 3 / Resolved: 0 / Ignored: 0

## Summary of the last run

(none)

## Issues

### ISSUE-0001 [Open] Dependent type theory corresponds to locally cartesian closed categories — imprecise
- **Category:** Supplement/remark error
- **Location:** supplement, first paragraph
- **Detail:** The supplement states that dependent type theory corresponds to locally cartesian closed categories. This is only true for extensional dependent type theory (with Σ, Π, and extensional identity types); intensional Martin-Löf type theory (with identity types) is not modeled by an arbitrary LCCC in the strict sense, and the correspondence requires the substitution–pullback coherence conditions mentioned only vaguely. As stated, the claim is overstated/imprecise.
- **Proposed fix:** Dependent type theory with Σ-types, Π-types and extensional identity types corresponds to locally cartesian closed categories (Seely 1984); for intensional identity types the correspondence requires additional coherence data (Curien–Garner–Hofmann–Streicher).
- **Reported:** 2026-10-28 (8ccef3d)

### ISSUE-0002 [Open] Linear types correspond to symmetric monoidal closed categories — needs the 'exactly once' caveat
- **Category:** Supplement/remark error
- **Location:** supplement, first paragraph
- **Detail:** The parenthetical '(variables used exactly once)' is a reasonable gloss, but linear type theory with the '!' modality (exponential) corresponds to symmetric monoidal closed categories only for the multiplicative fragment; the additive/exponential structure requires more (a comonad, Seely/Linear Logic). The sentence as written is acceptable for the multiplicative fragment but the claim 'linear types correspond to symmetric monoidal closed categories' without qualification is slightly overstated.
- **Proposed fix:** The multiplicative fragment of linear type theory (each variable used exactly once) corresponds to symmetric monoidal closed categories; adding the exponential modality '!' requires a comonad structure.
- **Reported:** 2026-10-28 (8ccef3d)

### ISSUE-0003 [Open] Hypcheck claim that without uniqueness of exponentials β holds but η fails
- **Category:** Supplement/remark error
- **Location:** logic:ccc-soundness hypcheck, '冪の存在と転置の一意性' bullet
- **Detail:** The claim 'in a category with only weak exponentials, β holds but η generally fails' is essentially correct, but the phrasing 'weak exponentials' is not defined on the page and the statement that β holds requires that the weak exponential still satisfies ev∘(λf×1)=f, which is part of the definition of weak exponential (existence of a transpose, not necessarily unique). This is fine, but the claim that η 'generally fails' should be justified: in a category with weak exponentials there can be multiple transposes, so λ(ev∘(k×1)) need not equal k. The remark is acceptable but the justification is missing; it is a side comment asserting a fact without proof.
- **Proposed fix:** In a category where transposes exist but are not unique (weak exponentials), β still holds because ev∘(λf×1)=f is required, but η can fail: λ(ev∘(k×1)) is only one of possibly several transposes of ev∘(k×1), so it need not equal k.
- **Reported:** 2026-10-28 (8ccef3d)
