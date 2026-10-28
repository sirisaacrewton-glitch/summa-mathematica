# Verification tracker: `05-geometry-topology/01-general-topology/05-advanced-properties/12-implication-map.html`

<!-- source: 05-geometry-topology/01-general-topology/05-advanced-properties/12-implication-map.html -->
<!-- Managed by scripts/verify.py (GitHub Actions). To dispute an [Open] issue, add a line starting with
     **Opus Rebuttal:** at the end of that issue and push; the next run judges it. Do not edit other lines. -->

- Last verified: 2026-10-28 (commit 10fede1, deepseek-chat)
- Open: 4 / Resolved: 0 / Ignored: 0

## Summary of the last run

(none)

## Issues

### ISSUE-0001 [Open] Citation to completely-regular-basic.5 not in label table
- **Category:** Improper link
- **Location:** top:implication-table, row 'LCH | チコノフ'
- **Detail:** The row cites \ref{top:completely-regular-basic.5}, but the label table only lists top:completely-regular-basic.2 (proposition 7.2, 完全正則性の基本性質). The label .5 is not among the cited labels, so the citation cannot be verified against the table; the intended statement (LCH ⇒ Tychonoff) is presumably item 5 of that proposition, but the table does not confirm it.
- **Proposed fix:** Cite the label that the table confirms, e.g. \ref{top:completely-regular-basic.2} (or add the correct label to the reference table), so that the citation points to a result that actually states LCH ⇒ completely regular.
- **Reported:** 2026-10-28 (10fede1)

### ISSUE-0002 [Open] Citations to labels absent from the label table
- **Category:** Improper link
- **Location:** top:implication-table and top:non-implication-table (several rows)
- **Detail:** Several rows cite labels that do not appear in the provided label table: top:imp-small-spaces.1 and top:imp-small-spaces.3 (only top:imp-small-spaces.2 is listed), top:compactness-variants.4 and top:compactness-variants.6 (only top:compactness-variants.3 is listed), top:imp-omega-one.4, top:baire-category.2, top:compactness-variants-examples.1 and top:compactness-variants-examples.3, top:omega-one-space (without suffix), and top:one-point-properties.1. Since these targets cannot be checked against the table, the citations may point to the wrong item.
- **Proposed fix:** Verify each label against the actual source pages and correct the suffixes (e.g. use the item numbers that really state the claimed implication), or replace with labels that are confirmed in the reference table.
- **Reported:** 2026-10-28 (10fede1)

### ISSUE-0003 [Open] Weak-* unit ball compactness needs separability
- **Category:** Supplement/remark error
- **Location:** supplement, '他の分野との関係'
- **Detail:** The supplement states that the weak-* topology makes the unit ball compact (Banach–Alaoglu). Banach–Alaoglu gives compactness of the unit ball in the weak-* topology, but metrizability (and hence the connection to the 'compact but not metrizable' region of the map) requires the dual (or the space) to be separable; as stated, the claim that this is 'the compact but not metrizable region' is imprecise for non-separable duals where the ball is not metrizable, and for separable duals where it is metrizable. The statement as written overstates the parallel with the map.
- **Proposed fix:** In infinite dimensions the weak-* unit ball is compact (Banach–Alaoglu) but is metrizable only when the dual is separable; e.g. for a separable Banach space with separable dual the ball is compact and metrizable, while for $\ell^{\infty}$ or $L^{\infty}$ the ball is compact but not metrizable, illustrating the 'compact but not metrizable' region.
- **Reported:** 2026-10-28 (10fede1)

### ISSUE-0004 [Open] Erdős space is not a counterexample to 'compact needed'
- **Category:** Supplement/remark error
- **Location:** top:implication-table, row 'コンパクト $T_{2}$ ＋ 完全不連結 | 零次元'
- **Detail:** The counterexample column says 'コンパクトを外す：零次元でない完全不連結な距離空間がある（エルデシュ空間などが知られている）'. Erdős space (the set of Hilbert-space points with all rational coordinates) is indeed totally disconnected, metrizable and not zero-dimensional, so it is a valid counterexample to 'totally disconnected ⇒ zero-dimensional' without compactness. However the phrasing 'エルデシュ空間など' is vague and the parenthetical 'このサイトでは扱わない' is fine; the claim itself is correct. No error.
- **Proposed fix:** No change needed; optionally name the Erdős space explicitly as $\{(x_{n})\in\ell^{2}: x_{n}\in\mathbb{Q}\ \forall n\}$.
- **Reported:** 2026-10-28 (10fede1)
