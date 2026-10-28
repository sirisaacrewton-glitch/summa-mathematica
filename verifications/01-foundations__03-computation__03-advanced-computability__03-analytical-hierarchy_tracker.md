# Verification tracker: `01-foundations/03-computation/03-advanced-computability/03-analytical-hierarchy.html`

<!-- source: 01-foundations/03-computation/03-advanced-computability/03-analytical-hierarchy.html -->
<!-- Managed by scripts/verify.py (GitHub Actions). To dispute an [Open] issue, add a line starting with
     **Opus Rebuttal:** at the end of that issue and push; the next run judges it. Do not edit other lines. -->

- Last verified: 2026-10-28 (commit 8ccef3d, deepseek-chat)
- Open: 3 / Resolved: 0 / Ignored: 0

## Summary of the last run

(none)

## Issues

### ISSUE-0001 [Open] Σ¹₂ tree representation mischaracterized as non-well-foundedness
- **Category:** Supplement/remark error
- **Location:** supplement / 関連する結果 (ショーンフィールドの木表示)
- **Detail:** The supplement says a Σ¹₂ set is represented by the non-well-foundedness of a tree on ℕ×ω₁. The Schoenfield tree representation for Σ¹₂ sets is via the *well-foundedness* of a tree on ℕ×ω₁ (equivalently, a Σ¹₂ set is the projection of a tree on ℕ×ω₁, i.e. x ∈ A iff the tree T_x on ℕ×ω₁ has an infinite branch). The Π¹₁ case is well-foundedness of a tree on ℕ; the Σ¹₂ case is existence of a branch through a tree on ℕ×ω₁, not non-well-foundedness of a tree on ℕ×ω₁ in the same sense. As stated ('非整礎性で表せる') it is imprecise/incorrect about which property of the tree encodes membership.
- **Proposed fix:** A Σ¹₂ set A is represented by a tree T on ℕ×ω₁: x ∈ A iff T_x has an infinite branch (equivalently, x ∉ A iff T_x is well-founded). This is the basis of Schoenfield's absoluteness theorem for Σ¹₂ statements.
- **Reported:** 2026-10-28 (8ccef3d)

### ISSUE-0002 [Open] Spector boundedness phrasing about Σ¹₁ trees
- **Category:** Supplement/remark error
- **Location:** supplement / 関連する結果 (整礎木の階数)
- **Detail:** The text says 'the set of Σ¹₁ well-founded trees has depth bounded below ω₁^{CK}'. The standard Spector boundedness result concerns the set of *computable* well-founded trees (or the Π¹₁ set WT): its ranks are bounded by ω₁^{CK}, and moreover every Σ¹₁ (resp. Π¹₁) well-founded tree has rank < ω₁^{CK}. The phrase 'Σ¹₁ の整礎木の集合の深さはその手前で有界' is imprecise: the relevant bound is that the ranks of well-founded trees in WT (a Π¹₁ set) are bounded by ω₁^{CK}, and this is exactly Spector's theorem. As written it conflates Σ¹₁ with the Π¹₁ set WT and is vague about what is bounded.
- **Proposed fix:** The ranks (depths) of the well-founded trees in WT are bounded by ω₁^{CK}; more generally, every Σ¹₁ (equivalently Π¹₁) well-founded tree has rank < ω₁^{CK}. This is Spector's boundedness theorem.
- **Reported:** 2026-10-28 (8ccef3d)

### ISSUE-0003 [Open] Π¹₁-CA₀ characterized as admitting existence of Π¹₁-complete sets
- **Category:** Supplement/remark error
- **Location:** supplement / 関連する結果 (二階算術)
- **Detail:** The supplement states that Π¹₁-CA₀ 'admits the existence of Π¹₁-complete sets like WT'. This is misleading: Π¹₁-CA₀ is the subsystem asserting that every Π¹₁-definable set exists (Π¹₁ comprehension). The existence of a Π¹₁-complete set such as WT is provable already in much weaker systems (indeed WT is arithmetically definable via a Π¹₁ formula, and its existence as a set follows from arithmetical comprehension ACA₀). What Π¹₁-CA₀ adds is comprehension for arbitrary Π¹₁ formulas, not the existence of a particular complete set. The claim overstates the role of Π¹₁-CA₀.
- **Proposed fix:** Π¹₁-CA₀ is the system with comprehension for all Π¹₁ formulas; it proves the existence of sets defined by Π¹₁ conditions (the existence of a specific Π¹₁-complete set like WT already follows from far weaker systems such as ACA₀).
- **Reported:** 2026-10-28 (8ccef3d)
