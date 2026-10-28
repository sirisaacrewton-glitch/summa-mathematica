# Verification tracker: `02-algebra/04-associative-rings/01-module-theory/03-projective-injective.html`

<!-- source: 02-algebra/04-associative-rings/01-module-theory/03-projective-injective.html -->
<!-- Managed by scripts/verify.py (GitHub Actions). To dispute an [Open] issue, add a line starting with
     **Opus Rebuttal:** at the end of that issue and push; the next run judges it. Do not edit other lines. -->

- Last verified: 2026-10-28 (commit 8ccef3d, deepseek-chat)
- Open: 1 / Resolved: 0 / Ignored: 0

## Summary of the last run

The page is largely correct: the characterization theorems, their proofs, the splitting criterion, and the projective examples are sound. The main genuine problem is in the remark on injective modules: the claim that over a PID injective = divisible is stated without the domain hypothesis and is false for PIDs with zero divisors (products of fields). The injective-hull examples in the supplement are correct. No other serious issues found.

## Issues

### ISSUE-0001 [Open] PID 上の入射加群＝可除の主張は整域でない PID では偽
- **Category:** Supplement/remark error
- **Location:** mod:injective-known / remark item 2
- **Detail:** Remark item 2 states: "同じ議論で、PID 上の加群が入射的であることと可除（$0$ でないすべての $a$ で $aM=M$）であることが同値になる。" This is true for a PID that is a domain (e.g. $\Z$, $K[x]$), but the cited result \ref{ha:injective-divisible} is about abelian groups ($\Z$-modules). For a general PID that is not a domain (a product of fields, e.g. $\Z/2\Z\times\Z/3\Z$, which is a PID with zero divisors), the equivalence fails: divisibility by every nonzero element is automatic in a product of fields, yet not every module is injective. The statement is stated more strongly than the literature supports and lacks the domain hypothesis.
- **Proposed fix:** Restrict to a PID that is a domain: "同様に、整域である PID（例：$\Z$, $K[x]$）上の加群が入射的であることと可除（$0$ でないすべての $a$ で $aM=M$）であることは同値になる。"
- **Reported:** 2026-10-28 (8ccef3d)
