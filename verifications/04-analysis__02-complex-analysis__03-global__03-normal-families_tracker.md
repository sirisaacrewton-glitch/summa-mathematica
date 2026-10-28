# Verification tracker: `04-analysis/02-complex-analysis/03-global/03-normal-families.html`

<!-- source: 04-analysis/02-complex-analysis/03-global/03-normal-families.html -->
<!-- Managed by scripts/verify.py (GitHub Actions). To dispute an [Open] issue, add a line starting with
     **Opus Rebuttal:** at the end of that issue and push; the next run judges it. Do not edit other lines. -->

- Last verified: 2026-10-28 (commit 8ccef3d, deepseek-chat)
- Open: 2 / Resolved: 0 / Ignored: 0

## Summary of the last run

The main theorems (Montel, Hurwitz, the injectivity corollary) and their proofs are logically sound; the exhaustion lemma, the diagonal argument, and the applications of Cauchy estimates, Rouché, and the identity theorem are correctly used, and the hypcheck comments are accurate. The only genuine problems are two imprecise statements in the supplement: the phrasing of Vitali's theorem (missing that the accumulation point must lie in the domain) and the description of Montel's big theorem (the 'allowing infinity' parenthetical conflates the two-value and one-value versions).

## Issues

### ISSUE-0001 [Open] Vitali's theorem statement is imprecise (needs a set with accumulation point in the domain)
- **Category:** Supplement/remark error
- **Location:** supplement (類似の定理)
- **Detail:** The supplement states Vitali's theorem as: a locally bounded sequence that converges pointwise on a set with an accumulation point converges locally uniformly. As stated this is false/imprecise: the accumulation point must lie in the domain D (and the set must have an accumulation point in D), and the sequence must be holomorphic on a domain. A set with an accumulation point outside D, or a set accumulating only at the boundary, does not suffice. The phrase '集積点をもつ集合の上で各点収束すれば' omits the requirement that the accumulation point belongs to the (connected) domain where the functions are holomorphic.
- **Proposed fix:** Replace with: ヴィタリの定理（領域 $D$ 上の正則関数の列が局所有界で、$D$ 内に集積点をもつ集合上で各点収束すれば、$D$ 上広義一様収束する）も、モンテルの定理と一致の定理から従う（未収録）。
- **Reported:** 2026-10-28 (8ccef3d)

### ISSUE-0002 [Open] Montel's big theorem phrasing about omitting two values
- **Category:** Supplement/remark error
- **Location:** supplement (類似の定理)
- **Detail:** The supplement says 'a family omitting two values is normal (allowing infinity)'. Montel's big theorem (fundamental normality criterion) states that a family of holomorphic functions on a domain omitting two fixed values is normal (in the ordinary sense, no need to allow infinity). The parenthetical '(無限遠を許して)' is misleading: allowing the value infinity is not needed for the two-omitted-values theorem; it is needed only for the one-omitted-value (Montel/Picard) version. As written the statement conflates the two versions.
- **Proposed fix:** Replace with: 2 点を除く値をとらない族が正規族であるというモンテルの大定理（基本正規性判定法）は、ピカールの定理の証明に使われる（未収録）。1 点のみを除外する場合は無限遠への発散を許す必要がある。
- **Reported:** 2026-10-28 (8ccef3d)
