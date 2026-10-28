# Verification tracker: `01-foundations/04-set-theory/04-consistency-proofs/02-absoluteness.html`

<!-- source: 01-foundations/04-set-theory/04-consistency-proofs/02-absoluteness.html -->
<!-- Managed by scripts/verify.py (GitHub Actions). To dispute an [Open] issue, add a line starting with
     **Opus Rebuttal:** at the end of that issue and push; the next run judges it. Do not edit other lines. -->

- Last verified: 2026-10-28 (commit 8ccef3d, deepseek-chat)
- Open: 2 / Resolved: 0 / Ignored: 0

## Summary of the last run

The page is largely correct. The proofs of absoluteness, the R(ω) model theorem, and the corollaries are sound. The only genuine issues are in the supplement: the informal 'finite depth' characterization of Δ₀ formulas is imprecise, and the claim that 'being a cardinal' is non-absolute is overstated without qualification. No issues in the main theorems, lemmas, or proofs were found.

## Issues

### ISSUE-0001 [Open] Δ₀ formulas are not literally 'finite depth only'
- **Category:** Supplement/remark error
- **Location:** supplement / 高い視点から
- **Detail:** The supplement claims that a Δ₀ formula 'only inspects the elements of the parameters, elements of elements, … to finite depth'. This is imprecise: a Δ₀ formula may contain unbounded quantifiers over sets that are themselves elements of parameters (e.g. $\forall z\in x\,\forall w\in z\,\forall u\in w\cdots$), and the depth is bounded by the syntactic nesting, but the formula can also quantify over elements of elements of elements of a parameter to arbitrary finite depth fixed by the formula, not merely 'elements and elements of elements'. More importantly, the statement 'finite depth' is not literally what Δ₀ means; Δ₀ means all quantifiers are bounded, and the bound can be any term, so the inspected sets can be arbitrarily deep within a parameter's transitive closure, though the formula's syntactic complexity is finite. The analogy is informal but the precise claim 'finite depth only' is an overstatement.
- **Proposed fix:** Δ₀ 論理式は、パラメータから出発して有界量化子の範囲内で到達できる集合だけを調べる。有界量化子の入れ子の深さは論理式の構文で決まる有限の範囲に限られるが、その範囲はパラメータの元、元の元、… と論理式に応じた有限の深さまで及びうる。
- **Reported:** 2026-10-28 (8ccef3d)

### ISSUE-0002 [Open] Claim that 'being a cardinal' is not absolute is misleading
- **Category:** Supplement/remark error
- **Location:** supplement / 関連する結果
- **Detail:** The supplement says concepts like the power set and 'being a cardinal' that essentially contain unbounded quantification are not absolute. 'Being a cardinal' is indeed not absolute in general, but the phrasing lumps it with the power set as 'essentially non-absolute', which is imprecise: cardinality is absolute for transitive models of ZF (the property 'x is a cardinal' is Δ₁ and absolute for transitive models of ZF minus power set? Actually 'x is a cardinal' is Π₁ and is absolute downward but not upward in general; for transitive models of ZF it is absolute). The blanket statement is overstated.
- **Proposed fix:** 冪集合のような本質的に非有界な量化を含む概念は絶対的でない。基数であることも一般には絶対的でない（ただし ZF の推移的モデルについては絶対的である）。
- **Reported:** 2026-10-28 (8ccef3d)
