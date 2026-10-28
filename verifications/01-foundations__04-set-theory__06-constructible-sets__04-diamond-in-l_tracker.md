# Verification tracker: `01-foundations/04-set-theory/06-constructible-sets/04-diamond-in-l.html`

<!-- source: 01-foundations/04-set-theory/06-constructible-sets/04-diamond-in-l.html -->
<!-- Managed by scripts/verify.py (GitHub Actions). To dispute an [Open] issue, add a line starting with
     **Opus Rebuttal:** at the end of that issue and push; the next run judges it. Do not edit other lines. -->

- Last verified: 2026-10-28 (commit 8ccef3d, deepseek-chat)
- Open: 4 / Resolved: 0 / Ignored: 0

## Summary of the last run

The main theorem and its proof are essentially correct and follow Kunen's argument. The genuine problems are concentrated in the supplement: the claim that ◇⁺ fails at regular cardinals κ > ω₁ under V = L is false (Jensen proved ◇⁺_κ holds at every regular κ ≥ ω₁ under V = L), and the accompanying remarks about 'L_{ω₂} suffices instead of L' and the hypcheck comment on <_L absoluteness are imprecise. No issues in the theorem, proof steps, or citations were found.

## Issues

### ISSUE-0001 [Open] ◇⁺ does not hold at all regular κ ≥ ω₁
- **Category:** Supplement/remark error
- **Location:** supplement / 高い視点から (and the sentence after hypcheck)
- **Detail:** The supplement's final paragraph and the sentence after the hypcheck claim that ◇⁺ 'is not necessarily true' at regular cardinals κ ≥ ω₁, citing Kunen Ch. VI exercises 13–17. In fact ◇⁺ holds at every regular uncountable κ under V = L (Jensen's theorem: ◇⁺_κ for every regular κ ≥ ω₁). What fails at κ > ω₁ is the analogue of the specific ◇⁺-sequence construction via L_{ω₁}-Skolem hulls, not ◇⁺ itself. The statement '◇⁺ はそのような基数では成り立つとは限らない' is false under V = L.
- **Proposed fix:** Replace with: 'Under V = L, ◇⁺_κ actually holds at every regular κ ≥ ω₁ (Jensen). What the present argument gives directly is only the case κ = ω₁; the general case requires a more delicate argument (Kunen Ch. VI exercises 13–17).'
- **Reported:** 2026-10-28 (8ccef3d)

### ISSUE-0002 [Open] ◇⁺ is not a weakening of ◇; the 'weaker claim' phrasing is misleading
- **Category:** Supplement/remark error
- **Location:** supplement / 前提の検討, and sentence after hypcheck
- **Detail:** The text says '◇ だけなら、より弱い主張としてもっと直接の証明があり' and treats ◇ as weaker than ◇⁺. This is correct logically (◇⁺ → ◇), but the supplement's claim that the direct proof of ◇ 'generalizes to all regular κ ≥ ω₁' while ◇⁺ does not is the problematic part (see previous issue). The phrasing 'より弱い主張' is fine; the error is the accompanying claim about ◇⁺ failing at larger κ.
- **Proposed fix:** Keep '◇ is weaker than ◇⁺' but delete the claim that ◇⁺ fails at larger regular cardinals; state instead that the direct ◇-proof generalizes to all regular κ ≥ ω₁, and that ◇⁺_κ also holds under V = L but needs a different argument.
- **Reported:** 2026-10-28 (8ccef3d)

### ISSUE-0003 [Open] Claim that L_{ω₂} suffices 'instead of L' is imprecise
- **Category:** Supplement/remark error
- **Location:** supplement / 前提の検討, second bullet
- **Detail:** The bullet says 'ZF−P の公理で十分な議論なので、L の代わりに L_{ω₂} で済む'. But the proof genuinely uses V = L globally: e.g. L_{ω₁} = H(ω₁) and L_{ω₂} = H(ω₂) (via set:l-kappa-eq-h-kappa) and the uniqueness M = L_δ (set:v-eq-l-models-unique) both require V = L, not merely working inside L_{ω₂}. So 'L_{ω₂} で済む' overstates; the argument is carried out inside L (i.e. assuming V = L), using L_{ω₁}, L_{ω₂} as the relevant initial segments.
- **Proposed fix:** Rephrase: 'The argument is carried out under V = L, using the initial segments L_{ω₁} and L_{ω₂}; the use of these P-less models is because ≺ is only defined for sets. The hypothesis V = L itself is essential (via L_κ = H(κ) and the uniqueness of transitive models of ZF−P + V = L).'
- **Reported:** 2026-10-28 (8ccef3d)

### ISSUE-0004 [Open] Hypcheck comment on absoluteness of <_L is overstated
- **Category:** Supplement/remark error
- **Location:** hypcheck, third bullet
- **Detail:** The hypcheck says 'Step 6 で <_L の絶対性が本質的に効く。任意の整列順序から作ったスコーレム関数では、崩壊した側で同じ関数を「内側から」定義できるとは限らない'. This is a reasonable heuristic, but the precise point is that <_L is absolute between L_{ω₂}, Y, and L_δ because it is defined by a Δ₁ formula over these models of ZF−P; an arbitrary well-order need not be definable inside L_δ, so K² could not be defined from it. The statement as written ('絶対性が本質的に効く') is acceptable but the reason given ('内側から定義できるとは限らない') conflates absoluteness with definability. Minor imprecision, not a false claim.
- **Proposed fix:** Clarify: '<_L is absolute between L_{ω₂}, Y and L_δ because it is Δ₁-definable over models of ZF−P; this is what lets K² be defined inside L_δ using only L_δ-internal notions. For an arbitrary well-order this definability fails.'
- **Reported:** 2026-10-28 (8ccef3d)
