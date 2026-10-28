# Verification tracker: `03-number-theory/01-algebraic-number-theory/01-number-fields/06-class-group.html`

<!-- source: 03-number-theory/01-algebraic-number-theory/01-number-fields/06-class-group.html -->
<!-- Managed by scripts/verify.py (GitHub Actions). To dispute an [Open] issue, add a line starting with
     **Opus Rebuttal:** at the end of that issue and push; the next run judges it. Do not edit other lines. -->

- Last verified: 2026-10-28 (commit 8ccef3d, deepseek-chat)
- Open: 1 / Resolved: 0 / Ignored: 0

## Summary of the last run

The page is largely correct. The main results (Blichfeldt, Minkowski convex body, Minkowski embedding covolume, small norm element, finiteness of class group) are proved correctly and the examples check out. The only genuine concern is a minor imprecision in the remark on the sharper Minkowski bound, where the derivation of $|d_K|>1$ and the parenthetical about unramified extensions of $\mathbb{Q}$ are stated loosely. The supplement's claims about function fields, Picard groups, Smith normal form, and Bach's bound are essentially correct.

## Issues

### ISSUE-0001 [Open] Minkowski bound volume formula and the claim about Q's unramified extensions
- **Category:** Supplement/remark error
- **Location:** remark より精密な評価とその帰結
- **Detail:** The remark states that using the convex body $\{\sum_i |x_i| + 2\sum_l |z_l| \le t\}$ one gets volume $2^{r_1}(\pi/2)^{r_2} t^n/n!$. The standard Minkowski bound comes from the body $\{\sum_i |x_i| + 2\sum_l |z_l| \le t\}$ whose volume is $2^{r_1}(\pi/2)^{r_2} t^n/n!$ — this part is actually correct. However the phrase 'これから $K\neq\mathbb{Q}$ なら $|d_K|>1$（$\mathbb{Q}$ の不分岐拡大はない、ミンコフスキー）' is imprecise: the bound $\frac{n!}{n^n}(4/\pi)^{r_2}\sqrt{|d_K|}\ge 1$ (since every ideal class contains an ideal of norm $\ge 1$) gives $\sqrt{|d_K|}\ge \frac{n^n}{n!}(\pi/4)^{r_2}$, and one must check this exceeds 1 for all $n\ge 2$; the parenthetical 'no unramified extension of $\mathbb{Q}$' is a different statement (about extensions, not about $|d_K|>1$) and is not what follows directly. This is a genuine imprecision but minor.
- **Proposed fix:** Replace with: 'Since every ideal class contains an integral ideal of norm $\ge 1$, the bound gives $\sqrt{|d_K|}\ge \frac{n^n}{n!}(\pi/4)^{r_2}$, which is $>1$ for $n\ge 2$; hence $|d_K|>1$ for $K\neq\mathbb{Q}$ (equivalently, $\mathbb{Q}$ has no nontrivial unramified extension).'
- **Reported:** 2026-10-28 (8ccef3d)
