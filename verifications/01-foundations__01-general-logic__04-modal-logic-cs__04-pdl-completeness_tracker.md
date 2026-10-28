# Verification tracker: `01-foundations/01-general-logic/04-modal-logic-cs/04-pdl-completeness.html`

<!-- source: 01-foundations/01-general-logic/04-modal-logic-cs/04-pdl-completeness.html -->
<!-- Managed by scripts/verify.py (GitHub Actions). To dispute an [Open] issue, add a line starting with
     **Opus Rebuttal:** at the end of that issue and push; the next run judges it. Do not edit other lines. -->

- Last verified: 2026-10-28 (commit 10fede1, deepseek-chat)
- Open: 2 / Resolved: 0 / Ignored: 0

## Summary of the last run

The page is a careful presentation of PDL axiomatization, soundness, Kozen–Parikh completeness, and decidability. The proofs (soundness, derived rules, atom properties, Kozen–Parikh lemma, completeness, naive complexity bound) are logically sound and the citations match their targets. The only genuine concern is a side remark on complexity attributions (Pratt vs. Fischer–Ladner and the description of the method), which is imprecise but not central. The intuition section's fixed-point discussion is essentially correct. No logical gaps, missing hypotheses, or improper links were found.

## Issues

### ISSUE-0001 [Open] Incorrect attribution of EXPTIME upper bound to Pratt (1978)
- **Category:** Supplement/remark error
- **Location:** remark after logic:pdl-naive-bound
- **Detail:** The remark states that membership in EXPTIME was shown by Pratt (1978) via an elimination method, and EXPTIME-hardness by Fischer–Ladner (1979). The standard attributions are: EXPTIME-hardness of PDL (and of propositional dynamic logic satisfiability) is due to Fischer and Ladner (1979), which is correct. However, the EXPTIME upper bound (decidability in exponential time) is due to Pratt (1979/1980, 'A near-optimal proof of the exponential time complexity of PDL' / 'Models of program logics'), and the elimination/tableau method is usually credited to Pratt as well, but the specific claim that Pratt used an 'elimination method removing non-satisfying maximal sets' is imprecise. More importantly, the combination 'EXPTIME-complete' is standardly attributed to Fischer–Ladner (lower bound) and Pratt (upper bound), so the attribution is roughly right, but the description of the method as 'elimination of maximal sets that fail conditions' is not the standard description of Pratt's method (which is a tableau/sequente construction). This is a side comment with a possibly imprecise methodological attribution.
- **Proposed fix:** Replace with: 'EXPTIME に属することはプラット（1979）が、EXPTIME 困難であることはフィッシャー–ラドナー（1979）が示した（Harel–Kozen–Tiuryn『Dynamic Logic』第 8 章）。' and drop the specific 'elimination method' description, or state it as 'tableau/sequent method'.
- **Reported:** 2026-10-28 (10fede1)

### ISSUE-0002 [Open] Claim that axiom 6 says [α*]A is a fixed point of X ↦ A∧[α]X
- **Category:** Supplement/remark error
- **Location:** intuition (高い視点)
- **Detail:** The intuition says '公理 6 は [α*]A がその不動点であること'. Axiom 6 is [α*]A ↔ A∧[α][α*]A, which indeed says [α*]A is a fixed point of the map X ↦ A∧[α]X. This is correct as a syntactic identity. However, the surrounding claim that axiom 7 (with necessitation) expresses 'maximality' among X with ⊢ X→A∧[α]X is only a proof-theoretic shadow; semantically [α*]A is the *least* fixed point / least pre-fixed point of X ↦ A∧[α]X (since [α*]A holds at states from which all α-paths lead to A, which is the greatest set satisfying X ⊆ A∩[α]X in the powerset lattice ordered by inclusion — actually it is the greatest fixed point in the powerset lattice). The text says '最大の不動点' (greatest fixed point), which is correct for the powerset lattice with ⊆ ordering: [α*]A is the largest X with X ⊆ A∩[α]X. So this is consistent. But the analogy to 'ℕ is the smallest set containing 0 and closed under successor' being a *universality* and 'swapping min and max' is a loose but not false analogy. No genuine error here; the statement is acceptable.
- **Proposed fix:** No change needed; the claim is correct.
- **Reported:** 2026-10-28 (10fede1)
