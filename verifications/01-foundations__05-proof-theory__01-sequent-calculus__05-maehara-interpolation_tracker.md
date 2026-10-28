# Verification tracker: `01-foundations/05-proof-theory/01-sequent-calculus/05-maehara-interpolation.html`

<!-- source: 01-foundations/05-proof-theory/01-sequent-calculus/05-maehara-interpolation.html -->
<!-- Managed by scripts/verify.py (GitHub Actions). To dispute an [Open] issue, add a line starting with
     **Opus Rebuttal:** at the end of that issue and push; the next run judges it. Do not edit other lines. -->

- Last verified: 2026-10-28 (commit 10fede1, deepseek-chat)
- Open: 4 / Resolved: 0 / Ignored: 0

## Summary of the last run

The main theorem, its proof, the corollary and the problems are logically sound: the case analysis over the cut-free rules is complete, the interpolant conditions (i)–(iii) are verified in each case, and the citations match their targets. The genuine problems are concentrated in the supplement and the remark: the equality discussion is misleading (it restates condition (iii) as if it handled equality), the size bound on the interpolant is overstated (binary rules duplicate sub-interpolants, so a linear-in-inferences bound is not established), the Daigneault attribution is unverified and loosely phrased, and the Lyndon interpolation sketch is imprecise about polarities and about what the construction actually yields.

## Issues

### ISSUE-0001 [Open] Incorrect claim about equality appearing in interpolant
- **Category:** Supplement/remark error
- **Location:** supplement / 前提の検討 / 等号
- **Detail:** The supplement says that in this page's LK, `=` is an ordinary relation symbol, so `=` can appear in the interpolant only when `=` occurs on both sides. But the interpolant condition (iii) is `Rel(I) ⊆ Rel(Γ_{1},Δ_{1}) ∩ Rel(Γ_{2},Δ_{2})`, which is exactly the condition that every relation symbol in `I` (including `=`) occurs on both sides. So the sentence is a tautology of the definition, not a substantive claim, and it is also misleading: it suggests that equality is handled, whereas the page explicitly excludes equality (notation: 等号は扱わない). More importantly, the following sentence says that under genuine equality an interpolant consisting only of equality may be needed even when there is no common non-logical symbol, citing 例 2 of logic:craig-interpolation; this is a claim about a different page and cannot be verified here, and it is stated as if it were a counterexample to the present framework, which it is not (the present framework treats `=` as an ordinary relation symbol, so `=` counts as a common symbol and the interpolant `x=y` would satisfy (iii)).
- **Proposed fix:** Replace with: "In this page's LK, `=` is an ordinary binary relation symbol, so it may occur in the interpolant only when it occurs on both sides, i.e. when `=` ∈ Rel(Γ_{1},Δ_{1}) ∩ Rel(Γ_{2},Δ_{2}); this is just condition (iii) and does not treat equality as identity. Under genuine equality (with the equality rules of \ref{pt:lk-equality}), the same construction would require cut elimination for that system, and the interpolant may need to contain `=` even when no other non-logical symbol is common."
- **Reported:** 2026-10-28 (10fede1)

### ISSUE-0002 [Open] Overstated claim about size of interpolant
- **Category:** Supplement/remark error
- **Location:** remark pt:maehara-semantic-remark, third bullet
- **Detail:** The remark claims that the size (number of symbols) of the interpolant is bounded by a constant multiple of the number of inferences in the derivation, because each inference adds only a constant number of symbols. This is not justified by the proof: in cases 6b and 7b the interpolant is replaced by `∀y I` or `∃y I`, which adds a constant number of symbols, but in cases 3 and 4 the interpolant is `I_{1} ∨ I_{2}` or `I_{1} ∧ I_{2}`, which duplicates the two sub-interpolants; since the derivation is a tree, the size of the interpolant can grow linearly in the number of inferences only if one counts the shared sub-derivations, but the naive bound is exponential in the height in the worst case (each binary rule combines two interpolants). The claim as stated (constant multiple of the number of inferences) is therefore not established and is in general false for the construction given.
- **Proposed fix:** Weaken to: "The interpolant is computed from the derivation, and its size is bounded by a constant multiple of the size of the derivation tree (number of nodes), since each inference adds only a constant number of symbols to the interpolants of its premises; in particular it is elementary in the size of the derivation." If a linear-in-inferences bound is intended, add the argument that the construction can be made to share sub-derivations, or state the bound in terms of the number of nodes of the derivation tree.
- **Reported:** 2026-10-28 (10fede1)

### ISSUE-0003 [Open] Unverified attribution to Daigneault
- **Category:** Supplement/remark error
- **Location:** supplement / 高い視点から / 代数的には
- **Detail:** The supplement states that Daigneault treated Craig's and Beth's theorems in the framework of polyadic algebras, adding "と言われている（本サイトでは原論文を確かめていない）". This is a historical attribution stated without verification; per the guidelines, historical attributions in supplements must be correct. Daigneault's work is indeed on polyadic algebras and interpolation/definability, but the phrasing is hedged and unverified, and the surrounding claim that interpolation corresponds to amalgamation of Lindenbaum algebras is stated loosely (for first-order logic the relevant algebras are polyadic/cylindric, and amalgamation corresponds to interpolation only under specific formulations).
- **Proposed fix:** Either remove the Daigneault sentence, or state it precisely: "It is known that Craig interpolation for a logic corresponds to the amalgamation property of the class of its Lindenbaum–Tarski algebras (for propositional logic, Boolean algebras; for first-order logic, polyadic or cylindric algebras); Daigneault studied interpolation and definability in the setting of polyadic algebras." Remove the unverified hedge or verify the reference.
- **Reported:** 2026-10-28 (10fede1)

### ISSUE-0004 [Open] Imprecise claim about Lyndon interpolation
- **Category:** Supplement/remark error
- **Location:** supplement / 関連する結果 / リンドンの補間定理
- **Detail:** The supplement says that by counting positive and negative occurrences, the construction yields that positive (negative) occurrences of relation symbols in the interpolant are restricted to those occurring with the same sign on both sides. This is a correct sketch of Lyndon's theorem, but the statement as written is imprecise: the correct condition is that a relation symbol occurs positively in the interpolant only if it occurs positively in both the antecedent-side formula and the succedent-side formula (and negatively only if negatively in both), and the present construction does not automatically give this without tracking polarities through the derived rules for `¬,∧,∨,∃`, which introduce negations. The claim that "the construction yields" this is therefore not justified by the proof as given.
- **Proposed fix:** Replace with: "Lyndon's interpolation theorem refines Craig's theorem by requiring that each relation symbol occurring positively (negatively) in the interpolant occurs positively (negatively) in both the premise and the conclusion. The present construction does not automatically give this refinement, because the derived rules for the abbreviations introduce negations; a polarity-aware version of the argument is needed. This is not carried out on this site."
- **Reported:** 2026-10-28 (10fede1)
