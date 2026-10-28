# Verification tracker: `01-foundations/03-computation/03-advanced-computability/03-analytical-hierarchy.html`

<!-- source: 01-foundations/03-computation/03-advanced-computability/03-analytical-hierarchy.html -->
<!-- Managed by scripts/verify.py (GitHub Actions). To dispute an [Open] issue, add a line starting with
     **Opus Rebuttal:** at the end of that issue and push; the next run judges it. Do not edit other lines. -->

- Last verified: 2026-10-28 (commit 10fede1, deepseek-chat)
- Open: 3 / Resolved: 0 / Ignored: 0

## Summary of the last run

The main theorems and proofs (Π¹₁ normal form, WT Π¹₁-completeness, quantifier absorption, enumeration/hierarchy theorem) are logically sound and the cited labels match their uses. The problems lie in the supplement: the Schoenfield tree representation is stated with the wrong polarity (ill-foundedness instead of well-foundedness), and the boundedness/depth discussion and the Π¹₁-CA₀ remark are imprecise or overstated. These should be corrected as indicated.

## Issues

### ISSUE-0001 [Open] Σ¹₂ tree representation mischaracterized as non-well-foundedness
- **Category:** Supplement/remark error
- **Location:** supplement / 関連する結果 (ショーンフィールドの木表示)
- **Detail:** The supplement states that Σ¹₂ sets are represented by the non-well-foundedness of a tree on ℕ×ω₁. The standard Schoenfield tree representation (Arai Thm 6.5.6) represents a Σ¹₂ set A by a tree on ℕ×ω₁ whose well-foundedness (no infinite branch) is equivalent to membership, i.e. A is Σ¹₂ via 'there exists a tree on ℕ×ω₁ that is well-founded' — the tree is well-founded exactly when the element is in A. Stating it as '非整礎性' (ill-foundedness) is the wrong polarity: ill-foundedness of such a tree is Σ¹₂-complete in the opposite direction and does not characterize Σ¹₂ membership. The claim as written is false.
- **Proposed fix:** A Σ¹₂ set A is represented by a tree T on ℕ×ω₁ (computable in a real parameter) such that x∈A iff T_{x} is well-founded (has no infinite branch); this well-foundedness is what underlies Schoenfield's absoluteness theorem.
- **Reported:** 2026-10-28 (10fede1)

### ISSUE-0002 [Open] Boundedness of Σ¹₁ well-founded trees misstated
- **Category:** Supplement/remark error
- **Location:** supplement / 関連する結果 (整礎木の階数)
- **Detail:** The supplement says 'the set of Σ¹₁ well-founded trees has depth bounded below ω₁^{CK} (Spector's boundedness theorem)'. Spector's boundedness theorem concerns Σ¹₁ well-orderings / Σ¹₁ sets of well-founded trees: the ranks of well-founded trees in a Σ¹₁ set are bounded by a computable ordinal, i.e. bounded below ω₁^{CK}. But the phrasing 'the set of Σ¹₁ well-founded trees' is imprecise: the collection of all Σ¹₁ well-founded trees is itself Σ¹₁ and its ranks are bounded by some δ<ω₁^{CK}, which is correct, but the sentence as written ('その手前で有界') is ambiguous and, combined with the preceding sentence about computable trees having sup ω₁^{CK}, risks asserting a false bound. More importantly, the claim that the sup of depths of computable well-founded trees is ω₁^{CK} is correct, but the supplement should clarify that the boundedness applies to any Σ¹₁-definable class of well-founded trees, not to 'the set of Σ¹₁ trees' as a completed object.
- **Proposed fix:** For any Σ¹₁ set of well-founded trees, the set of their ranks is bounded by some computable ordinal δ<ω₁^{CK} (Spector's boundedness theorem); in particular the ranks of computable well-founded trees are cofinal in (and bounded by) ω₁^{CK}.
- **Reported:** 2026-10-28 (10fede1)

### ISSUE-0003 [Open] Π¹₁-CA₀ and existence of WT
- **Category:** Supplement/remark error
- **Location:** supplement / 関連する結果 (二階算術)
- **Detail:** The supplement says Π¹₁-CA₀ 'admits the existence of Π¹₁-complete sets like WT'. This is imprecise: Π¹₁-CA₀ is a comprehension scheme asserting that every Π¹₁-definable set exists; it does not by itself assert the existence of a specific Π¹₁-complete set WT as an object unless WT is Π¹₁-definable in the language, which it is (via a suitable coding). The statement is essentially correct but overstated: Π¹₁-CA₀ proves the existence of any set definable by a Π¹₁ formula, including WT, so the claim is acceptable; however 'Π¹₁完全な集合の存在を認める' suggests completeness is what is used, which is not the content of the axiom.
- **Proposed fix:** Π¹₁-CA₀ is the subsystem of second-order arithmetic asserting that every set definable by a Π¹₁ formula exists; in particular it proves the existence of Π¹₁-definable sets such as WT.
- **Reported:** 2026-10-28 (10fede1)
