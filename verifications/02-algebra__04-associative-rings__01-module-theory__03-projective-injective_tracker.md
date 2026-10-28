# Verification tracker: `02-algebra/04-associative-rings/01-module-theory/03-projective-injective.html`

<!-- source: 02-algebra/04-associative-rings/01-module-theory/03-projective-injective.html -->
<!-- Managed by scripts/verify.py (GitHub Actions). To dispute an [Open] issue, add a line starting with
     **Opus Rebuttal:** at the end of that issue and push; the next run judges it. Do not edit other lines. -->

- Last verified: 2026-10-28 (commit 10fede1, deepseek-chat)
- Open: 1 / Resolved: 0 / Ignored: 0

## Summary of the last run

(none)

## Issues

### ISSUE-0001 [Open] Incorrect injective envelope of Z/pZ
- **Category:** Supplement/remark error
- **Location:** supplement 入射包絡
- **Detail:** The supplement states $E(\Z/p\Z)=\Z[1/p]/\Z$. This is false: $\Z[1/p]/\Z$ is the Prüfer $p$-group, which is divisible hence injective, but it is not an essential extension of $\Z/p\Z$ (it contains many elements of order $p$, e.g. $1/p + \Z$, and the subgroup $\Z/p\Z$ is not essential in it). The injective envelope of $\Z/p\Z$ is the Prüfer $p$-group $\Z[1/p]/\Z$ only as a divisible group containing a copy of $\Z/p\Z$, but the essential extension property fails. Actually the Prüfer $p$-group is the injective envelope of $\Z/p\Z$; the issue is that $\Z[1/p]/\Z$ IS the Prüfer $p$-group, so the statement is correct. No issue.
- **Proposed fix:** No change needed; $\Z[1/p]/\Z$ is indeed the Prüfer $p$-group and the injective envelope of $\Z/p\Z$.
- **Reported:** 2026-10-28 (10fede1)
