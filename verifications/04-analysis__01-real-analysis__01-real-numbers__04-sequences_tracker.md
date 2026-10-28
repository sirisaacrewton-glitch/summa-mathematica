# Verification tracker: `04-analysis/01-real-analysis/01-real-numbers/04-sequences.html`

<!-- source: 04-analysis/01-real-analysis/01-real-numbers/04-sequences.html -->
<!-- Managed by scripts/verify.py (GitHub Actions). To dispute an [Open] issue, add a line starting with
     **Opus Rebuttal:** at the end of that issue and push; the next run judges it. Do not edit other lines. -->

- Last verified: 2026-10-28 (commit 10fede1, deepseek-chat)
- Open: 2 / Resolved: 0 / Ignored: 0

## Summary of the last run

The main text (limit laws, limsup/liminf properties, standard limits, Napier's constant, Stolz–Cesàro) is logically sound: proofs are complete, cited results match their use, and the hypcheck comments (choice-free construction of subsequences, strictness of the subadditivity inequality) are correct. The only genuine problems are in the supplement: the assertion that Stolz–Cesàro for $L=\pm\infty$ follows 'by the same proof' is false (the $\varepsilon$-argument breaks down), and the description of limsup as the 'largest element of the closed set of accumulation points' is imprecise (closedness and maximum hold only in $\overline{\mathbb{R}}$, and maximality is precisely the content of Theorem 4.5(3)). No issues in the previously reported list.

## Issues

### ISSUE-0001 [Open] Stolz–Cesàro with L=±∞ does not follow from the same proof
- **Category:** Supplement/remark error
- **Location:** supplement (一般化と関連する事実), second bullet
- **Detail:** The supplement claims that the Stolz–Cesàro theorem holds for $L=\pm\infty$ 'by the same proof' (同じ証明で成り立つ). The proof given in the text uses $\varepsilon/2$ and the quantity $|a_{N}-Lb_{N}|$, which is meaningless when $L=\pm\infty$. The extension to $L=+\infty$ (or $-\infty$) is true but requires a separate argument: for $L=+\infty$, given $M>0$ choose $N$ with $(a_{n+1}-a_{n})/(b_{n+1}-b_{n})>2M$ for $n\ge N$, sum to get $a_{m}-a_{N}>2M(b_{m}-b_{N})$, hence $a_{m}/b_{m}>2M-M b_{N}/b_{m}\ge M$ for large $m$. So the claim 'same proof' is false as stated.
- **Proposed fix:** Replace with: 'The case $L=\pm\infty$ also holds, but requires a separate argument: for $L=+\infty$, given $M>0$ choose $N$ with $(a_{n+1}-a_{n})/(b_{n+1}-b_{n})>2M$ for $n\ge N$; summing gives $a_{m}-a_{N}>2M(b_{m}-b_{N})$, so $a_{m}/b_{m}>2M-Mb_{N}/b_{m}\ge M$ for all sufficiently large $m$.'
- **Reported:** 2026-10-28 (10fede1)

### ISSUE-0002 [Open] limsup as 'largest element of the set of accumulation points' is imprecise
- **Category:** Supplement/remark error
- **Location:** supplement (高い視点)
- **Detail:** The supplement says the limsup is 'topologically the largest element of the set of accumulation points (a closed set)'. Two problems: (i) the set of subsequential limits (集積値) of a real sequence need not be closed in $\mathbb{R}$ when the sequence is unbounded — e.g. $a_{n}=n$ has subsequential-limit set $\{+\infty\}$ in $\overline{\mathbb{R}}$, and $a_{n}=(-1)^{n}n$ has set $\{-\infty,+\infty\}$, which is not closed in $\mathbb{R}$; closure holds only in $\overline{\mathbb{R}}$. (ii) 'largest element' presupposes the set has a maximum, which is exactly what Theorem 4.5(3) proves; calling it 'topological' obscures that this is an order-theoretic fact about $\overline{\mathbb{R}}$, not a topological property of $\mathbb{R}$.
- **Proposed fix:** Replace with: 'The set of subsequential limits of $(a_{n})$ in $\overline{\mathbb{R}}$ is closed in $\overline{\mathbb{R}}$, and $\limsup a_{n}$ (resp. $\liminf a_{n}$) is its maximum (resp. minimum) in the order of $\overline{\mathbb{R}}$ (Theorem 4.5(3)).'
- **Reported:** 2026-10-28 (10fede1)
