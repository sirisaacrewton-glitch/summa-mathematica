# Verification tracker: `01-foundations/05-proof-theory/03-provability-logic/03-reflection-incompactness.html`

<!-- source: 01-foundations/05-proof-theory/03-provability-logic/03-reflection-incompactness.html -->
<!-- Managed by scripts/verify.py (GitHub Actions). To dispute an [Open] issue, add a line starting with
     **Opus Rebuttal:** at the end of that issue and push; the next run judges it. Do not edit other lines. -->

- Last verified: 2026-10-28 (commit 10fede1, deepseek-chat)
- Open: 3 / Resolved: 0 / Ignored: 0

## Summary of the last run

(none)

## Issues

### ISSUE-0001 [Open] Claim that K4/S4 canonical models are adequate frames and strong completeness holds
- **Category:** Supplement/remark error
- **Location:** supplement / 前提の検討, third bullet
- **Detail:** The supplement states that for systems whose canonical model is an adequate frame (citing \ref{logic:geach-completeness}), every L-consistent set is true at a world of the canonical model, so strong completeness holds, and lists K4 and S4 as examples. This is false for K4: the canonical model of K4 is not necessarily transitive (the transitivity axiom 4 is not canonical in general), so K4 is not strongly complete. Even for S4, the canonical model is an adequate frame and strong completeness does hold, but the blanket claim that 'K4, S4 etc.' have adequate canonical frames is wrong. The cited Geach completeness theorem concerns weak (ordinary) completeness for Geach axioms, not strong completeness via canonical adequacy.
- **Proposed fix:** Replace with: 'Non-compactness is not a feature of every modal logic: for systems such as \mathsf{S4} whose canonical frame is adequate (transitive and reflexive), every L-consistent set is true at a world of the canonical model, so strong completeness holds. For \mathsf{K4} this fails in general, since the canonical frame of \mathsf{K4} need not be transitive. In \mathsf{GL} the failure appears as the non-well-foundedness of the canonical model (\ref{pt:gl-not-strongly-complete}).'
- **Reported:** 2026-10-28 (10fede1)

### ISSUE-0002 [Open] Overstated claim that Solovay hierarchy theorem depends essentially on letterlessness
- **Category:** Supplement/remark error
- **Location:** supplement / 関連する結果
- **Detail:** The supplement says the Solovay hierarchy theorem 'shows that the normal form theorem for letterless formulas essentially depends on being letterless.' The hierarchy theorem (H_n strictly increasing) is a statement about one-variable formulas; it shows that letterless formulas do not exhaust the one-variable ones, but it does not show that the letterless normal form theorem 'essentially depends' on letterlessness in any precise sense. This is an imprecise/overstated interpretive claim.
- **Proposed fix:** Replace with: 'The Solovay hierarchy theorem shows that, unlike the letterless case where every formula reduces to a Boolean combination of \Box^{n}\bot, already formulas in a single variable p fall outside any finite level H_{n}; thus the letterless normal form theorem genuinely requires the absence of propositional variables.'
- **Reported:** 2026-10-28 (10fede1)

### ISSUE-0003 [Open] Vague analogy with ultraproducts creating infinite chains
- **Category:** Supplement/remark error
- **Location:** supplement / 高い視点から
- **Detail:** The final sentence claims that in first-order logic 'constructions like ultraproducts create infinite chains', in contrast with modal incompactness. This is vague and not literally correct: ultraproducts do not in general produce infinite ascending R-chains in the relevant sense, and the analogy is not a precise mathematical statement. As a side comment it risks being a false/overstated claim.
- **Proposed fix:** Replace with: 'Non-compactness reflects the gap between finite and infinite: finite chains can be made arbitrarily long, but well-foundedness forbids an infinite ascending chain. This is the modal counterpart of the fact that compactness in first-order logic permits the existence of non-well-founded models of theories all of whose finite subtheories have well-founded models.'
- **Reported:** 2026-10-28 (10fede1)
