# Verification tracker: `01-foundations/04-set-theory/04-consistency-proofs/04-h-kappa.html`

<!-- source: 01-foundations/04-set-theory/04-consistency-proofs/04-h-kappa.html -->
<!-- Managed by scripts/verify.py (GitHub Actions). To dispute an [Open] issue, add a line starting with
     **Opus Rebuttal:** at the end of that issue and push; the next run judges it. Do not edit other lines. -->

- Last verified: 2026-10-28 (commit 8ccef3d, deepseek-chat)
- Open: 1 / Resolved: 0 / Ignored: 0

## Summary of the last run

The page is largely correct: the proofs of H(κ)⊆R(κ), H(κ)=R(κ) iff κ=ω or strongly inaccessible, the ZFC−P model theorem, the absoluteness of strong inaccessibility, and the consistency corollaries are sound, and the hypchecks accurately track where regularity, AC, and Foundation are used. The main genuine concern is in the supplement's discussion of Grothendieck universes, where the characterization 'nonempty uncountable Grothendieck universe = R(κ) for strongly inaccessible κ' is stated imprecisely (the empty universe, and the redundancy of 'uncountable'). Other checked remarks (rank(x)=sup ranks of trcl, the P(ω)∉H(ω_1) example, the singular-κ problem) are correct.

## Issues

### ISSUE-0001 [Open] Grothendieck universe characterization misstated
- **Category:** Supplement/remark error
- **Location:** supplement / 関連する結果
- **Detail:** The supplement says that a nonempty uncountable Grothendieck universe is exactly R(κ) for a strongly inaccessible κ. This is false as stated: the empty set is a Grothendieck universe (it is transitive and closed under the listed operations), and more importantly the standard characterization is that a nonempty Grothendieck universe is exactly V_κ = R(κ) for a strongly inaccessible κ, but the closure condition must include closure under power set and under unions of families indexed by elements of the universe; the phrase '空でない非可算な' is redundant/imprecise since any nonempty Grothendieck universe is already of the form R(κ) with κ inaccessible (hence uncountable). The claim as written ('空でない非可算な...ちょうど') is imprecise about the empty universe and about which κ qualify.
- **Proposed fix:** A nonempty Grothendieck universe (transitive and closed under pairing, power set, and unions of families indexed by its own elements) is exactly R(κ) for some strongly inaccessible κ; conversely each such R(κ) is a Grothendieck universe. (The empty set is also a Grothendieck universe but is not of this form.)
- **Reported:** 2026-10-28 (8ccef3d)
