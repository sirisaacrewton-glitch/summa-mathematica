# Verification tracker: `01-foundations/06-category-theory/07-operads/03-little-intervals.html`

<!-- source: 01-foundations/06-category-theory/07-operads/03-little-intervals.html -->
<!-- Managed by scripts/verify.py (GitHub Actions). To dispute an [Open] issue, add a line starting with
     **Opus Rebuttal:** at the end of that issue and push; the next run judges it. Do not edit other lines. -->

- Last verified: 2026-10-28 (commit 8ccef3d, deepseek-chat)
- Open: 3 / Resolved: 0 / Ignored: 0

## Summary of the last run

(none)

## Issues

### ISSUE-0001 [Open] Recognition theorem statement is imprecise (group completion / loop space of a grouplike C_1-algebra)
- **Category:** Supplement/remark error
- **Location:** remark cat:sec-lin-loops (A_∞ 構造とモーア・ループ), item 3
- **Detail:** The recognition theorem as stated says: if Y is path-connected, carries a C_1-algebra structure, and π_0 Y is a group, then Y is homotopy equivalent to a loop space. The standard May/Stasheff recognition principle requires the C_1-algebra to be grouplike (π_0 Y a group) AND concludes that Y is homotopy equivalent to a loop space — but the precise statement is that a grouplike C_1-algebra is equivalent to Ω of its classifying space / that the group completion is a loop space. As written, the claim that Y itself (not its group completion) is homotopy equivalent to a loop space is stronger than the standard theorem: the recognition principle gives Y ≃ Ω BY only when Y is already grouplike and the structure maps are appropriately compatible; the usual statement is that the group completion Y → Ω BY is a homotopy equivalence. The phrase 'π_0 Y が群なら' is the grouplike condition, but the conclusion 'ある空間のループ空間とホモトピー同値' should be 'its group completion is a loop space' or 'Y ≃ Ω BY'.
- **Proposed fix:** State: 'If Y is a grouplike C_1-algebra (i.e. π_0 Y is a group), then the group completion Y → Ω BY is a homotopy equivalence; in particular Y is homotopy equivalent to the loop space Ω BY of its classifying space.'
- **Reported:** 2026-10-28 (8ccef3d)

### ISSUE-0002 [Open] Claim that allowing all continuous embeddings makes contractibility 'harder' is misleading
- **Category:** Supplement/remark error
- **Location:** hypcheck, bullet on affine little intervals
- **Detail:** The hypcheck says: '連続な埋め込みすべてを許すと、合成は閉じるが成分の可縮性の証明は難しくなる.' This is imprecise: if one allows all continuous embeddings with disjoint interiors, the resulting operad is not the little intervals operad and its components are NOT contractible in general (the space of all embeddings is much larger and not convex). The statement that the proof merely becomes 'harder' understates that the property actually fails; the affine (or at least the standard linear-embedding) restriction is essential for contractibility, not just convenient.
- **Proposed fix:** Replace with: 'If one allows all continuous embeddings with disjoint interiors, the components are no longer convex and in fact not contractible in general; the affine (linear) restriction is essential for the contractibility of the components.'
- **Reported:** 2026-10-28 (8ccef3d)

### ISSUE-0003 [Open] Novikov–Boone attribution and 'all finitely presented groups appear as fundamental groups of 4-manifolds'
- **Category:** Supplement/remark error
- **Location:** supplement cat:sec-lin-pi1
- **Detail:** The supplement states that every finitely presented group appears as the fundamental group of a 4-manifold and cites Novikov–Boone for undecidability of the word problem. The undecidability of the word problem for finitely presented groups is due to Novikov (1955) and Boone (1958) — correct. However, the claim that every finitely presented group is the fundamental group of a closed 4-manifold is a separate result (a consequence of the fact that every finitely presented group is the fundamental group of a closed n-manifold for n ≥ 4, due to Markov/Boone–Haken type constructions); attributing it together with Novikov–Boone in one breath is imprecise. Also '4次元多様体の基本群として現れ' should specify closed (or at least compact) 4-manifold, since otherwise the statement is trivially true for any group via a 2-complex thickened.
- **Proposed fix:** State separately: 'Every finitely presented group is the fundamental group of a closed 4-manifold (Markov; Boone–Haken type constructions), and the word problem for finitely presented groups is undecidable (Novikov 1955, Boone 1958).'
- **Reported:** 2026-10-28 (8ccef3d)
