# Verification tracker: `01-foundations/05-proof-theory/03-provability-logic/07-solovay.html`

<!-- source: 01-foundations/05-proof-theory/03-provability-logic/07-solovay.html -->
<!-- Managed by scripts/verify.py (GitHub Actions). To dispute an [Open] issue, add a line starting with
     **Opus Rebuttal:** at the end of that issue and push; the next run judges it. Do not edit other lines. -->

- Last verified: 2026-10-28 (commit 10fede1, deepseek-chat)
- Open: 1 / Resolved: 0 / Ignored: 0

## Summary of the last run

The main proof (Solovay function, embedding lemma, Step 1/Step 2) is logically sound and the cited labels match their uses. The only genuine problem is in the closing remark: it asserts that Σ-soundness of an extension of PA suffices for the Step 2 argument and that the provability logic is then GL, but Step 2 actually requires soundness for the Π_{1} sentences ¬S_{i} (Σ_{1}-soundness/1-consistency), and the stated hypothesis is too weak. All other supplements, the hypcheck, and the worked problems are correct.

## Issues

### ISSUE-0001 [Open] Σ-soundness is not sufficient for the remark's claim
- **Category:** Supplement/remark error
- **Location:** remark 仮定の弱め方
- **Detail:** The remark claims that replacing PA by any recursively axiomatized Σ-sound extension T yields provability logic GL, and that the proof only needs soundness of T for sentences of the form ¬S_{i}. This is wrong on two counts. (1) Σ-soundness does not give soundness for ¬S_{i}: S_{i} is Σ, so ¬S_{i} is Π, and a Σ-sound theory may prove a false Π sentence (e.g. a Σ-sound T may prove ¬Con(T), which is false if T is consistent). The Step 2 argument needs: if T ⊢ ¬S_{i} then ¬S_{i} is true, i.e. soundness at Π_{1} sentences (equivalently Σ_{1}-soundness of T plus consistency, i.e. 1-consistency / Σ_{1}-soundness in the sense that every provable Σ sentence is true — but applied to the specific Π sentence ¬S_{i}, which requires more than Σ-soundness alone unless one uses that S_{i} is Σ and T is consistent, which is not what is stated). (2) The general claim that the provability logic of every recursively axiomatized Σ-sound extension of PA is GL is not the standard theorem; Solovay's theorem is usually stated for Σ_{1}-sound r.e. extensions, and the remark's parenthetical hedge ('一般にはこう言われており') does not repair the imprecision. The precise hypothesis needed is Σ_{1}-soundness (1-consistency) of T, not merely Σ-soundness in the weak sense, and even then the argument requires care.
- **Proposed fix:** Replace by: 'Step 2 only needs that T is sound for the particular Π_{1} sentences ¬S_{i}, i.e. that T is Σ_{1}-sound (1-consistent): if T ⊢ ¬S_{i} then ¬S_{i} is true. Under this hypothesis (Σ_{1}-soundness of a recursively axiomatized extension T of PA) the same construction, with the S_{i} adjusted, shows that the provability logic of T is GL (Solovay). Mere Σ-soundness in the weak sense (every provable Σ sentence is true) does not suffice, since a Σ-sound theory may prove a false Π_{1} sentence such as ¬Con(T).'
- **Reported:** 2026-10-28 (10fede1)
