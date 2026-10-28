# Verification tracker: `01-foundations/04-set-theory/05-definability/01-formalizing-definability.html`

<!-- source: 01-foundations/04-set-theory/05-definability/01-formalizing-definability.html -->
<!-- Managed by scripts/verify.py (GitHub Actions). To dispute an [Open] issue, add a line starting with
     **Opus Rebuttal:** at the end of that issue and push; the next run judges it. Do not edit other lines. -->

- Last verified: 2026-10-28 (commit 8ccef3d, deepseek-chat)
- Open: 3 / Resolved: 0 / Ignored: 0

## Summary of the last run

The main body (definitions of Df/En, the closure and enumeration lemmas, absoluteness, elementary inclusion, downward LST, isomorphism lemma, and the problems) is logically sound; the proofs check out and the cited labels match their use. The genuine problems are confined to the supplement: the identification of Df with a cylindric algebra is inaccurate (only one projection is available), the claim that any injective coding suffices for En is overstated (absoluteness and well-foundedness of the code are also needed), and the remark on where transitivity is used is imprecise. No issues in the previously reported list.

## Issues

### ISSUE-0001 [Open] Cylindric algebra attribution and closure operations
- **Category:** Supplement/remark error
- **Location:** supplement / 高い視点から
- **Detail:** The supplement says Df is a 'cylindric algebra' (円柱代数) closed under complement, intersection and projection. A cylindric algebra in Tarski's sense is a Boolean algebra with diagonal elements and cylindrifications $c_i$ for *each* coordinate $i$, satisfying the cylindric equations; the family $\mathrm{Df}(A,n)$ with only the *last* projection $\mathrm{Proj}(\cdot,n)$ (i.e. only $\exists x_n$) is not a cylindric algebra. It is at best a 'polyadic'-style/Boolean algebra with one projection, and the claim that it is a cylindric algebra is false as stated. Also the attribution 'generally said to have been introduced by Tarski et al.' is loose (Tarski–Thompson 1952; Henkin–Monk–Tarski).
- **Proposed fix:** Replace with: '論理式の構文を作る代わりに、定義可能な関係の集まりを補集合・共通部分・（最後の変数に関する）射影で閉じたものとして直接作っている。これは各座標に関する射影（円柱化）と対角関係を備えた円柱代数（Tarski–Thompson 1952; Henkin–Monk–Tarski）の「射影を一つだけに制限した」類似物と見なせる。'
- **Reported:** 2026-10-28 (8ccef3d)

### ISSUE-0002 [Open] Injectivity alone does not suffice for the encoding
- **Category:** Supplement/remark error
- **Location:** supplement / 前提の検討, third bullet
- **Detail:** The supplement claims that any injective coding (e.g. a bijection $\omega\times\omega\to\omega$) can replace unique factorization. But the En recursion requires more: the decoding must be *absolute* and, crucially, the code of a compound expression must be recoverable from the code in an absolute (and here, $<m$) way so that the recursion is well-founded and absolute. An arbitrary bijection $\omega\times\omega\to\omega$ need not be absolute nor give codes larger than their parts, so the recursion/absoluteness argument (Step 5 of \ref{set:df-absolute}) would break. The claim as stated is overstated.
- **Proposed fix:** Replace with: '素因数分解の一意性は En の定義の場合分けが互いに排反であるために使った。絶対的で、かつ複合的な式のコードがその部分のコードより大きくなるような（$\ZF-\mathrm{P}$ で絶対的な）単射な符号化であれば代用できる。'
- **Reported:** 2026-10-28 (8ccef3d)

### ISSUE-0003 [Open] Transitivity use in Step 1 of Df-absolute
- **Category:** Supplement/remark error
- **Location:** supplement / 前提の検討, second bullet
- **Detail:** The supplement says \ref{set:df-absolute} essentially uses transitivity of $M$ 'in Step 1 where the absoluteness of ${}^{n}A$ uses $A\subseteq M$'. The real use of transitivity is that $A\in M$ implies $A\subseteq M$ (so that ${}^{n}A$ computed in $M$ equals the true ${}^{n}A$); the phrase '$A\subseteq M$' is a consequence of transitivity, not an independent hypothesis, and the absoluteness theorems cited (\ref{set:absolute-finite} etc.) are themselves stated for transitive models. The statement is imprecise about what is being assumed.
- **Proposed fix:** Replace with: '\ref{set:df-absolute} は $M$ が推移的であることを本質的に使う。推移性により $A\in M$ なら $A\subseteq M$ であり、${}^{n}A$ や $\mathrm{Proj}$ などの計算が $M$ の内外で一致する（引用する絶対性の定理も推移的モデルに対して述べられている）。'
- **Reported:** 2026-10-28 (8ccef3d)
