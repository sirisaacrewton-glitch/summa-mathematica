# Verification tracker: `01-foundations/05-proof-theory/09-type-theory/08-univalence.html`

<!-- source: 01-foundations/05-proof-theory/09-type-theory/08-univalence.html -->
<!-- Managed by scripts/verify.py (GitHub Actions). To dispute an [Open] issue, add a line starting with
     **Opus Rebuttal:** at the end of that issue and push; the next run judges it. Do not edit other lines. -->

- Last verified: 2026-10-28 (commit 8ccef3d, deepseek-chat)
- Open: 1 / Resolved: 0 / Ignored: 0

## Summary of the last run

The page is largely correct: the equivalence definition, the quasi-inverse proposition, the univalence-based proof that the universe is not a set, Hedberg's theorem and its lemma, and the higher inductive type fact are all sound, and the citations match their targets. The only genuine concern is in the supplement's discussion of UIP versus univalence: the phrase '互いには両立しない' is imprecise, since univalence actually proves the negation of UIP rather than merely being mutually exclusive with it. This is a minor overstatement in a side remark.

## Issues

### ISSUE-0001 [Open] Univalence and UIP are not merely incompatible but jointly refutable
- **Category:** Supplement/remark error
- **Location:** supplement (前提を変えると) / hypcheck of logic:universe-not-set
- **Detail:** The supplement says 'どちらも本ページの基本規則とは両立するが、互いには両立しない' (each is consistent with the basic rules, but they are incompatible with each other). The hypcheck of logic:universe-not-set similarly says '一価性公理と UIP は同時には仮定できない'. The precise situation: univalence is consistent with the basic rules (simplicial model), and UIP is consistent with the basic rules (set model). But 'incompatible' is imprecise: univalence actually *refutes* UIP, i.e. from univalence one proves ¬UIP (indeed ¬(UIP at the universe), since ua(e_neg) ≠ refl). So the two are not merely mutually exclusive assumptions; univalence proves the negation of UIP. The phrase '互いには両立しない' suggests a symmetric incompatibility, but only one direction is a theorem (univalence ⇒ ¬UIP); UIP does not refute univalence within the basic rules (it just makes the universe a set, so univalence restricted to sets holds trivially). This is an overstatement/imprecision.
- **Proposed fix:** Replace with: '一価性公理を仮定すると UIP は偽になる（\ref{logic:universe-not-set}）。逆に UIP を仮定するとすべての型が集合になり、一価性公理は「集合の間の同値についてのみ」成り立つ自明な形に退化する。両者は同時には仮定できない（一価性公理のもとで UIP の否定が証明できる）。'
- **Reported:** 2026-10-28 (8ccef3d)
