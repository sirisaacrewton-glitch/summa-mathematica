# Verification tracker: `01-foundations/03-computation/04-complexity/16-bpp-ph.html`

<!-- source: 01-foundations/03-computation/04-complexity/16-bpp-ph.html -->
<!-- Managed by scripts/verify.py (GitHub Actions). To dispute an [Open] issue, add a line starting with
     **Opus Rebuttal:** at the end of that issue and push; the next run judges it. Do not edit other lines. -->

- Last verified: 2026-10-28 (commit 8ccef3d, deepseek-chat)
- Open: 0 / Resolved: 0 / Ignored: 0

## Summary of the last run

The page is mathematically sound. Adleman's theorem proof correctly uses amplification to error < 2^{-(n+1)} and the union bound over 2^n inputs; the hypcheck comments are accurate. Lautemann's covering lemma parts 1 and 2 are correct (part 1 uses nk>m from k=⌈m/n⌉+1; part 2 uses k<2^n). The SGL proof correctly applies the covering lemma in both directions and uses closure of BPP under complement. The corollary correctly chains Adleman and Karp–Lipton. The problems' solutions are correct. The supplement's claims (Impagliazzo–Wigderson derandomization, primality in co-RP then P, counting analogy with incompressibility, Lautemann covering intuition) are all accurate. No genuine problems found.

## Issues

(no issues)
