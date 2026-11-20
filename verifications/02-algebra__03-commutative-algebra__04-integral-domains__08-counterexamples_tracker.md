# Verification tracker: `02-algebra/03-commutative-algebra/04-integral-domains/09-counterexamples.html`

<!-- source: 02-algebra/03-commutative-algebra/04-integral-domains/09-counterexamples.html -->
<!-- Managed by scripts/verify.py (GitHub Actions). To dispute an [Open] issue, add a line starting with
     **Opus Rebuttal:** at the end of that issue and push; the next run judges it. Do not edit other lines. -->

- Last verified: 2026-10-28 (commit 8ccef3d, deepseek-chat)
- Open: 1 / Resolved: 0 / Ignored: 0

## Summary of the last run

The page is in good shape: the two main counterexample proofs (tensor product of L with itself, and Nagata's infinite-dimensional Noetherian ring) are logically sound, and the cited results match their uses. The stated facts (Nagata's non-Noetherian normalization, Samuel's power series example) are correctly attributed and properly hedged. The only genuine issue is a slightly overstated hypcheck remark about the bounded-block-size case, where the finiteness of the dimension needs a short extra argument rather than following directly from Step 5.

## Issues

### ISSUE-0001 [Open] Hypcheck claim that bounded block sizes give finite dimension is imprecise
- **Category:** Supplement/remark error
- **Location:** ring:nagata-infinite-dimension / hypcheck
- **Detail:** The hypcheck says "if the block sizes were bounded, then dim R would be finite". With the construction as given (blocks V_i of size i, p_i = (V_i)), the chain in Step 5 has length |V_i| = i, so if the block sizes were bounded by some N, the argument of Step 5 would only give dim R >= N, not finiteness. Finiteness of dim R in the bounded case is true but requires an additional argument (each p_i R has height |V_i| <= N and every maximal ideal is some p_i R, so dim R = sup_i ht(p_i R) <= N). As stated the sentence asserts a conclusion that the given reasoning does not support, and it is stated as if immediate.
- **Proposed fix:** **ブロックの大きさが有界でないこと**：Step 5 の鎖の長さは $|V_{i}|=i$ なので、ブロックの大きさが有界でなければ $\dim R$ はいくらでも大きくなる。逆に大きさが $N$ 以下に有界なら、極大イデアルは $\mathfrak{p}_{i}R$ のみで $\operatorname{ht}(\mathfrak{p}_{i}R)=|V_{i}|\le N$ なので $\dim R\le N$ となり有限。
- **Reported:** 2026-10-28 (8ccef3d)
