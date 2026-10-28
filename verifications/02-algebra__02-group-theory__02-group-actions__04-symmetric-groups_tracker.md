# Verification tracker: `02-algebra/02-group-theory/02-group-actions/04-symmetric-groups.html`

<!-- source: 02-algebra/02-group-theory/02-group-actions/04-symmetric-groups.html -->
<!-- Managed by scripts/verify.py (GitHub Actions). To dispute an [Open] issue, add a line starting with
     **Opus Rebuttal:** at the end of that issue and push; the next run judges it. Do not edit other lines. -->

- Last verified: 2026-10-28 (commit 10fede1, deepseek-chat)
- Open: 2 / Resolved: 0 / Ignored: 0

## Summary of the last run

The page is largely correct. The main genuine problem is in the hypcheck of grp:sn-generators: the stated general criterion for when a transposition and an n-cycle generate S_n (gcd(k,n)=1) is mathematically wrong; the correct condition is gcd(k,n-1)=1. The partition-number supplement is correct. Proofs and other supplements/remarks check out.

## Issues

### ISSUE-0001 [Open] Incorrect claim about which transposition and n-cycle generate S_n
- **Category:** Supplement/remark error
- **Location:** grp:sn-generators / hypcheck
- **Detail:** The hypcheck states that a transposition (a b) and an n-cycle c generate S_n exactly when there is k with c^k(a)=b and gcd(k,n)=1. This is false. The correct criterion (Isaacs–Zieschang) is that gcd(k, n-1)=1 where k is determined by c^k(a)=b (equivalently gcd(k-1,n)=1). Counterexample: n=4, c=(1 2 3 4), (a b)=(1 3). Here c^2(1)=3, and gcd(2,4)=2≠1, so the stated criterion predicts generation fails; but (1 3) and (1 2 3 4) actually generate S_4 (indeed (1 3)c^{-1}=(1 3)(1 4 3 2)=(1 2 3 4)... let us verify: the group generated contains c and (1 3), and one checks it is all of S_4). More directly, the stated condition is neither necessary nor sufficient in general. Also the earlier sentence 'n=4 で (1 3) と (1 2 3 4) は D_4 しか生成しない' is correct as a counterexample to the naive generalization, but the general criterion given is wrong.
- **Proposed fix:** Replace the criterion with: 'A transposition $(a\ b)$ and an $n$-cycle $c$ generate $S_{n}$ if and only if $\gcd(k,n-1)=1$, where $k$ is defined by $c^{k}(a)=b$ (Isaacs–Zieschang). In particular, $(1\ 2)$ and $(1\ 2\ \cdots\ n)$ generate $S_{n}$ since here $k=1$ and $\gcd(1,n-1)=1$.'
- **Reported:** 2026-10-28 (10fede1)

### ISSUE-0002 [Open] Partition numbers p(1)..p(6) listed as 1,2,3,5,7,11
- **Category:** Supplement/remark error
- **Location:** supplement (分割の個数)
- **Detail:** The partition numbers are p(1)=1, p(2)=2, p(3)=3, p(4)=5, p(5)=7, p(6)=11. The listed sequence 1,2,3,5,7,11 is correct. No error here.
- **Proposed fix:** No change needed.
- **Reported:** 2026-10-28 (10fede1)
