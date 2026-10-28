# Verification tracker: `01-foundations/04-set-theory/08-iterated-forcing/03-kurepa-independence.html`

<!-- source: 01-foundations/04-set-theory/08-iterated-forcing/03-kurepa-independence.html -->
<!-- Managed by scripts/verify.py (GitHub Actions). To dispute an [Open] issue, add a line starting with
     **Opus Rebuttal:** at the end of that issue and push; the next run judges it. Do not edit other lines. -->

- Last verified: 2026-10-28 (commit 8ccef3d, deepseek-chat)
- Open: 2 / Resolved: 0 / Ignored: 0

## Summary of the last run

(none)

## Issues

### ISSUE-0001 [Open] Incorrect claim about trees on ω₂ and weak compactness in L
- **Category:** Supplement/remark error
- **Location:** supplement / 関連する結果
- **Detail:** The supplement states that 'having a tree property on ω₂ is equiconsistent with ω₂ being weakly compact in L'. This is imprecise/false as stated. The existence of a κ-Suslin tree (or the failure of the tree property at κ) is not equivalent to κ being weakly compact in L; the correct classical statement is that the tree property at ω₂ is equiconsistent with a weakly compact cardinal (Mitchell), and that if ω₂ has the tree property then ω₂ is weakly compact in L (a theorem of Silver), but the equiconsistency is with a weakly compact cardinal in V, not 'ω₂ weakly compact in L'. The phrasing conflates these.
- **Proposed fix:** Replace with: '例えば、$\omega_{2}$ における木の性質（tree property）の無矛盾性の強さは弱コンパクト基数の存在と等しい（Mitchell）。また $\omega_{2}$ が木の性質をもてば $\omega_{2}$ は $\mathbf{L}$ で弱コンパクトである（Silver）。'
- **Reported:** 2026-10-28 (8ccef3d)

### ISSUE-0002 [Open] Overstated generalization of Silver's lemma to levels of size < 2^ω
- **Category:** Supplement/remark error
- **Location:** supplement / 前提の検討, first bullet
- **Detail:** The supplement claims that if P is ω₁-closed then no new branches are added to any ω₁-tree whose levels have size < 2^ω ('same proof'). The proof in the text uses countability of levels to derive |Lev_γ(T)| ≥ 2^ω > ω, i.e. it needs levels of size ≤ ω (or < 2^ω in M, but the bound 2^ω must be computed correctly and the argument produces 2^ω distinct elements at a single level). The statement 'levels of size < 2^ω' is not justified by the same proof: the proof produces 2^ω many distinct b_f at level γ, so it only contradicts levels of size < 2^ω, which is consistent with the claim, but the claim as stated ('same proof') is at best a nontrivial extension and the parenthetical is misleading since the actual proof uses countability, not < 2^ω. More importantly, the standard Silver theorem requires the tree to be an ω₁-tree (countable levels); the generalization to levels of size < 2^ω is not established by the given argument without modification.
- **Proposed fix:** Either delete the generalization, or state precisely: 'より一般に、$\PP$ が $\omega_{1}$-閉で $T$ の各レベルが $M$ で $2^{\omega}$ 未満なら、$T$ に新しい道は加わらない（同じ二分木の議論で $\mathrm{Lev}_{\gamma}(T)$ に $2^{\omega}$ 個の相異なる元が生じるため）。'
- **Reported:** 2026-10-28 (8ccef3d)
