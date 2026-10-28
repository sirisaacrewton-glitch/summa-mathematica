# Verification tracker: `02-algebra/03-commutative-algebra/05-regular-cm/04-gorenstein.html`

<!-- source: 02-algebra/03-commutative-algebra/05-regular-cm/04-gorenstein.html -->
<!-- Managed by scripts/verify.py (GitHub Actions). To dispute an [Open] issue, add a line starting with
     **Opus Rebuttal:** at the end of that issue and push; the next run judges it. Do not edit other lines. -->

- Last verified: 2026-10-28 (commit 10fede1, deepseek-chat)
- Open: 2 / Resolved: 0 / Ignored: 0

## Summary of the last run

(none)

## Issues

### ISSUE-0001 [Open] Bass's conjecture attribution and statement
- **Category:** Supplement/remark error
- **Location:** supplement / バスの予想
- **Detail:** The supplement says that Bass's theorem shows 'if there is a finitely generated nonzero M with finite injective dimension then injdim M = depth A', and that the conclusion that A is then CM (Bass's conjecture) was proved by Peskine–Szpiro and Roberts via the new intersection theorem. This misstates the history and the logic. Bass's theorem itself (the one proved on this page, part 1) already yields that if such an M exists then injdim M = depth A, and part 2 applied to A gives that A is CM; the CM-ness is a direct consequence of Bass's theorem, not a separate 'conjecture' requiring Peskine–Szpiro/Roberts. The Peskine–Szpiro and Roberts results concern the New Intersection Theorem / the conjecture on the existence of a finitely generated module of finite injective dimension (Bass's question), not the equality injdim M = depth A. The sentence conflates Bass's question with the (already proved) equality.
- **Proposed fix:** Bass's theorem shows that if a nonzero finitely generated module $M$ of finite injective dimension exists, then $\operatorname{injdim}M=\operatorname{depth}A$; applying this to $M=A$ (part 2) already shows that such an $A$ is Cohen–Macaulay. Bass's *question*—whether the existence of a nonzero finitely generated module of finite injective dimension forces $A$ to be Cohen–Macaulay—was answered affirmatively; the general existence result is due to Peskine–Szpiro and Roberts (via the New Intersection Theorem).
- **Reported:** 2026-10-28 (10fede1)

### ISSUE-0002 [Open] Standard module / canonical module existence and Gorenstein criterion
- **Category:** Supplement/remark error
- **Location:** supplement / 双対性
- **Detail:** The supplement states that a CM local ring A has a canonical module ω_A 'for example if A is a quotient of a regular local ring', and that A is Gorenstein iff ω_A ≅ A. The existence statement is imprecise: a canonical module exists for A iff A is a quotient of a Gorenstein ring (e.g. a complete CM local ring, or a CM ring that is a homomorphic image of a regular local ring / Gorenstein ring). Being a quotient of a regular local ring is sufficient but the phrasing 'for example' suggests it always exists, which is false in general (a CM local ring need not admit a canonical module). Also the criterion 'A Gorenstein iff ω_A ≅ A' requires ω_A to exist; as stated without that proviso it is not a valid equivalence.
- **Proposed fix:** If $A$ is a Cohen–Macaulay local ring that admits a canonical (dualizing) module $\omega_{A}$—which is the case, e.g., when $A$ is a quotient of a Gorenstein ring, in particular of a regular local ring, or when $A$ is complete—then $A$ is Gorenstein $\iff \omega_{A}\cong A$.
- **Reported:** 2026-10-28 (10fede1)
