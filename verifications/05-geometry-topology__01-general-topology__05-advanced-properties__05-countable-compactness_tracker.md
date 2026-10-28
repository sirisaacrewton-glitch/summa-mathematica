# Verification tracker: `05-geometry-topology/01-general-topology/05-advanced-properties/05-countable-compactness.html`

<!-- source: 05-geometry-topology/01-general-topology/05-advanced-properties/05-countable-compactness.html -->
<!-- Managed by scripts/verify.py (GitHub Actions). To dispute an [Open] issue, add a line starting with
     **Opus Rebuttal:** at the end of that issue and push; the next run judges it. Do not edit other lines. -->

- Last verified: 2026-10-28 (commit 10fede1, deepseek-chat)
- Open: 2 / Resolved: 0 / Ignored: 0

## Summary of the last run

The page is largely correct. The proofs of the equivalence theorem, the implications among compactness variants, the Ψ-space theorem, and the problems are sound, and the hypcheck comments are accurate (the T₁ counterexample for 4⇒3 and the non-maximal almost disjoint family counterexample for pseudocompactness are both valid). The only genuine issue is in the supplement: the parenthetical contrasting 'two-fold products' with 'countable products' of compact/sequentially compact spaces is imprecise and could mislead, since countable compactness already fails to be preserved by finite (two-fold) products. No previously reported issues are open.

## Issues

### ISSUE-0001 [Open] Countably compact product claim: countable products vs finite products
- **Category:** Supplement/remark error
- **Location:** supplement / 前提を変えると
- **Detail:** The supplement says '可算コンパクト空間の二つの直積は可算コンパクトとは限らない' (the product of two countably compact spaces need not be countably compact) and then parenthetically 'コンパクト空間・点列コンパクト空間の可算個の直積はそれぞれコンパクト・点列コンパクトである' (countable products of compact / sequentially compact spaces are compact / sequentially compact). The first claim is correct (the standard example is the Σ-product / ω₁-related examples, and the product of two countably compact spaces need not be countably compact). However the parenthetical is imprecise and misleading: the contrast drawn is between 'two factors' and 'countable products', but the relevant contrast for countable compactness is that even a *finite* (two-fold) product of countably compact spaces can fail to be countably compact, whereas arbitrary products of compact spaces are compact (Tychonoff) and countable products of sequentially compact spaces are sequentially compact. As written, a reader may infer that the failure for countably compact spaces only occurs for infinite products, which is false.
- **Proposed fix:** Replace with: 'また、可算コンパクト空間の二つの直積は可算コンパクトとは限らない（可算コンパクト性は有限積でさえ保存されない）。これに対し、コンパクト空間の任意個の直積はコンパクト（チコノフの定理）であり、点列コンパクト空間の可算個の直積は点列コンパクトである。'
- **Reported:** 2026-10-28 (10fede1)

### ISSUE-0002 [Open] βℕ and {0,1}^{P(ℕ)} 'typical' claim and the sequence (n)
- **Category:** Supplement/remark error
- **Location:** supplement / 似た定理
- **Detail:** The supplement states that {0,1}^{P(ℕ)} is '「コンパクトだが点列で捉えられない」空間の典型' just like βℕ, and that 'βℕ でも点列 (n) は収束部分列をもたない'. The claim that the sequence (n) in βℕ has no convergent subsequence is correct (cited to top:beta-n-no-sequences). However, the assertion that {0,1}^{P(ℕ)} is 'typical' in the same sense as βℕ is loose but not strictly false; the more substantive issue is that the text implies the analogy is that both are compact non-sequentially-compact, which is fine. This is borderline; the main genuine problem is the previous one. I will not report this as it is essentially correct and supported by the cited proposition.
- **Proposed fix:** No change needed; the statement is supported by \ref{top:beta-n-no-sequences}.
- **Reported:** 2026-10-28 (10fede1)
