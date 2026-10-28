# Verification tracker: `01-foundations/06-category-theory/01-basics/10-adjoint-functor-theorem.html`

<!-- source: 01-foundations/06-category-theory/01-basics/10-adjoint-functor-theorem.html -->
<!-- Managed by scripts/verify.py (GitHub Actions). To dispute an [Open] issue, add a line starting with
     **Opus Rebuttal:** at the end of that issue and push; the next run judges it. Do not edit other lines. -->

- Last verified: 2026-10-28 (commit 10fede1, deepseek-chat)
- Open: 3 / Resolved: 0 / Ignored: 0

## Summary of the last run

The main theorem, its proof, the initial-object existence theorem, the comma-category lemma, the representability corollary and the free-group application are logically sound, with hypotheses (completeness, local smallness, smallness of S, limit preservation, solution set) properly used and cited. The genuine problems are confined to side material: a wrong citation label in the AFT hypcheck (should be cat:aft-counterexample.1), a garbled/incorrect justification of injectivity of the free-group generators in the remark, and an overstated claim about non-existence of free fields in the hypcheck. All three are fixable with the proposed replacements.

## Issues

### ISSUE-0001 [Open] Wrong citation for the counterexample in the AFT hypcheck
- **Category:** Improper link
- **Location:** cat:freyd-aft / hypcheck (解集合条件 bullet)
- **Detail:** The hypcheck says "外すと偽：\ref{cat:aft-counterexample}", but the label table lists the counterexample as `cat:aft-counterexample.1` (proposition 10.6, item 1). The bare label `cat:aft-counterexample` is not in the table; the intended target is item 1 of that proposition. This is a mechanically wrong link.
- **Proposed fix:** Replace `\ref{cat:aft-counterexample}` with `\ref{cat:aft-counterexample.1}`.
- **Reported:** 2026-10-28 (10fede1)

### ISSUE-0002 [Open] Free group generation map injectivity argument is garbled
- **Category:** Supplement/remark error
- **Location:** remark (after cat:free-group-via-aft)
- **Detail:** The remark claims injectivity of $X\to UF(X)$ follows because "異なる二元をもつ群 $H$ と、$x\neq y$ を異なる元に移す写像 $X\to UH$ が単位を経由することから分かる". This is imprecise/incorrect: the argument should use the universal property applied to a map $X\to UH$ that separates $x,y$ (e.g. into a group where the two images differ), giving a homomorphism $F(X)\to H$ whose composite with $X\to UF(X)$ equals that separating map, hence the two generators have distinct images. The phrase "単位を経由する" is wrong and does not establish injectivity.
- **Proposed fix:** Replace with: "たとえば生成写像 $X\to UF(X)$ が単射であることは次のように分かる。$x\neq y$ に対し、$x,y$ を異なる元に移す写像 $X\to UH$（例えば $H$ を十分大きい群にとる）を普遍性で $F(X)\to H$ に延長すれば、$x,y$ の像は $F(X)$ 内ですでに異なる。"
- **Reported:** 2026-10-28 (10fede1)

### ISSUE-0003 [Open] Claim that free fields do not exist is imprecise
- **Category:** Supplement/remark error
- **Location:** cat:free-group-via-aft / hypcheck (群の公理が等式であること bullet)
- **Detail:** The hypcheck states "実際、自由な体は存在しない（標数が定まらない）". As stated this is misleading: the forgetful functor from fields to sets has no left adjoint because there is no initial field (no free field on any set, including the empty set), since fields of different characteristics admit no field homomorphisms between them. The parenthetical "標数が定まらない" gestures at this but the blanket assertion "自由な体は存在しない" without specifying the functor/adjunction is overstated.
- **Proposed fix:** Replace with: "体の圏から $\mathbf{Set}$ への忘却関手は左随伴をもたない。実際、標数の異なる体の間には体の射が存在しないため、体の圏は始対象をもたず（空集合上の自由体すら存在しない）、したがって自由体も存在しない。"
- **Reported:** 2026-10-28 (10fede1)
