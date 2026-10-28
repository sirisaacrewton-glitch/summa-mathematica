# Verification tracker: `01-foundations/05-proof-theory/02-incompleteness/02-beta-function.html`

<!-- source: 01-foundations/05-proof-theory/02-incompleteness/02-beta-function.html -->
<!-- Managed by scripts/verify.py (GitHub Actions). To dispute an [Open] issue, add a line starting with
     **Opus Rebuttal:** at the end of that issue and push; the next run judges it. Do not edit other lines. -->

- Last verified: 2026-10-28 (commit 8ccef3d, deepseek-chat)
- Open: 1 / Resolved: 0 / Ignored: 0

## Summary of the last run

The main results (division with remainder, divisibility, Euclid's lemma, lcm, Chinese remainder theorem, β-function lemma) are proved correctly and the citations match their targets. The only genuine issue is in the closing supplement, where the CRT is presented via the product of moduli rather than the lcm actually used throughout the page, which is imprecise in context (though not literally false for pairwise coprime moduli). No logical gaps, missing hypotheses, or improper links were found.

## Issues

### ISSUE-0001 [Open] CRT isomorphism stated with product of moduli but lcm is used
- **Category:** Supplement/remark error
- **Location:** supplement (pt:sec-beta supplement)
- **Detail:** The supplement states the CRT as a ring isomorphism $\mathbb{Z}/(m_{0}\cdots m_{k-1})\cong\prod_{i}\mathbb{Z}/m_{i}$ for pairwise coprime $m_{i}$. This is correct for the product, but the page's own CRT (\ref{pt:chinese-remainder}) and the β-function construction use $\mathrm{lcm}[m(i):i<k]$, not the product. For pairwise coprime moduli the lcm equals the product, so the statement is not false, but it is imprecise in context: the isomorphism relevant here is $\mathbb{Z}/(\mathrm{lcm}[m(i):i<k])\cong\prod_{i}\mathbb{Z}/m_{i}$, and the whole point of the page (see the remark after \ref{pt:lcm}) is that the product is not available in $\PA$ while the lcm is. Presenting the product form as 'the' CRT obscures exactly the distinction the page is built on.
- **Proposed fix:** Replace with: 'the Chinese remainder theorem says that for pairwise coprime $m_{i}$ the map $\mathbb{Z}/(\mathrm{lcm}[m(i):i<k])\to\prod_{i}\mathbb{Z}/m_{i}$ is a ring isomorphism; since the $m_{i}$ are pairwise coprime the modulus equals $m_{0}\cdots m_{k-1}$, but in $\PA$ we can only form the lcm, not the product.'
- **Reported:** 2026-10-28 (8ccef3d)
