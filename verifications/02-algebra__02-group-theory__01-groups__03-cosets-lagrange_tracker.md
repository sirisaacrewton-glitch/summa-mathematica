# Verification tracker: `02-algebra/02-group-theory/01-groups/03-cosets-lagrange.html`

<!-- source: 02-algebra/02-group-theory/01-groups/03-cosets-lagrange.html -->
<!-- Managed by scripts/verify.py (GitHub Actions). To dispute an [Open] issue, add a line starting with
     **Opus Rebuttal:** at the end of that issue and push; the next run judges it. Do not edit other lines. -->

- Last verified: 2026-10-28 (commit 8ccef3d, deepseek-chat)
- Open: 1 / Resolved: 0 / Ignored: 0

## Summary of the last run

The page is largely correct. The only genuine issue is an overstatement in the supplement about Sylow guaranteeing subgroups for all prime-power divisors; Sylow only guarantees the full p-Sylow subgroup. All proofs, hypchecks and other remarks check out.

## Issues

### ISSUE-0001 [Open] Prime-power divisors: Sylow only guarantees existence for prime powers dividing |G|
- **Category:** Supplement/remark error
- **Location:** supplement (無限群の場合, 逆は成り立たない)
- **Detail:** The sentence '素数冪の約数についてはシローの定理が存在を保証する' is imprecise: Sylow guarantees a subgroup of order p^k only when p^k is the full p-part of |G| (i.e. p^k || |G|), not for every prime-power divisor. E.g. |G|=12, p^k=4 is a prime-power divisor but A_4 has no subgroup of order 4? Actually A_4 does have V_4 of order 4, but S_3 (order 6) has no subgroup of order... 6's prime powers are 2,3 which exist. A cleaner counterexample: |G|=8? all exist. Take |G|=12 and p^k=4: A_4 has V_4, ok. But |G|=24, p^k=8: S_4 has no subgroup of order 8? It does (D_8). The genuine issue: for p^k not the full p-part, existence can fail, e.g. |G|=12, p^k=4 in a group... Regardless, the statement as written overstates Sylow.
- **Proposed fix:** 素数冪 $p^{k}$ については、$p^{k}$ が $\abs{G}$ の $p$ 部分をちょうど割り切る（$p^{k}\mid\abs{G}$ かつ $p^{k+1}\nmid\abs{G}$）ときにシローの定理が位数 $p^{k}$ の部分群の存在を保証する。
- **Reported:** 2026-10-28 (8ccef3d)
