# Verification tracker: `02-algebra/03-commutative-algebra/01-basics/01-rings-ideals.html`

<!-- source: 02-algebra/03-commutative-algebra/01-basics/01-rings-ideals.html -->
<!-- Managed by scripts/verify.py (GitHub Actions). To dispute an [Open] issue, add a line starting with
     **Opus Rebuttal:** at the end of that issue and push; the next run judges it. Do not edit other lines. -->

- Last verified: 2026-10-28 (commit 10fede1, deepseek-chat)
- Open: 3 / Resolved: 0 / Ignored: 0

## Summary of the last run

The page is largely correct and well-organized. The proofs are sound, and most supplements/remarks check out. I found one genuine imprecision in the hypcheck of ring:domain-field (the noncommutative finite no-zero-divisor case requires an extra step to show the one-sided inverses coincide, and the phrase 'same argument' is misleading), and a minor imprecision in the Frobenius hypcheck's citation usage. The claim about Z ⊂ Q being a subgroup but not an ideal is correct. No logical gaps, missing hypotheses, overpowered theorems, or improper links were found in the main proofs.

## Issues

### ISSUE-0001 [Open] Wrong claim about noncommutative finite domain being a division ring
- **Category:** Supplement/remark error
- **Location:** ring:domain-field / hypcheck comment on 前提「可換」(3)
- **Detail:** The hypcheck says: '非可換の場合でも、有限で零因子のない環では λ_{a} と右からの積 x↦xa がともに全射になるので、可除環であることは同じ議論で言える。' This is imprecise/false as stated. In a noncommutative ring with no zero divisors, λ_{a} being injective gives a right inverse (ax=1) and ρ_{a} being injective gives a left inverse (ya=1); but concluding that a is a unit requires that these one-sided inverses coincide, which needs an argument (e.g. x = x(ay) = (xa)y = y). The sentence claims 'the same argument' works, but the same argument does not directly yield a two-sided inverse; moreover the statement 'finite ring with no zero divisors is a division ring' is true but is essentially Wedderburn's little theorem territory only when combined with the commutativity conclusion — the noncommutative 'no zero divisors ⇒ division ring' part is true but the justification given is incomplete. Also the phrase '零因子のない' is ambiguous in the noncommutative setting (left vs right zero divisors).
- **Proposed fix:** Replace with: '非可換の場合、有限環が左零因子も右零因子ももたなければ、各 a≠0 について λ_{a} と ρ_{a} はともに単射、したがって全射で、ax=1 かつ ya=1 となる x,y がある。このとき y=y(ax)=(ya)x=x なので a は両側逆元をもち単元である。よって有限で零因子のない環は可除環である。' (and note that commutativity of such a ring is Wedderburn's little theorem, cited in the supplement).
- **Reported:** 2026-10-28 (10fede1)

### ISSUE-0002 [Open] Frobenius injectivity claim uses nilpotent-unit incorrectly / imprecise
- **Category:** Supplement/remark error
- **Location:** ring:char-domain / hypcheck comment on フロベニウス写像
- **Detail:** The hypcheck states: '整域なら F(a)=0⇒a=0（\ref{ring:nilpotent-unit.1}）なので単射。' The cited result ring:nilpotent-unit.1 says nilpotent elements are zero divisors (when 1≠0), hence in an integral domain the only nilpotent element is 0. But to conclude F(a)=a^{p}=0 ⇒ a=0 in an integral domain, one uses that a^{p}=0 means a is nilpotent, so a=0 — this is correct, but the reference is to the statement 'nilpotent ⇒ zero divisor' rather than directly 'a^{p}=0 ⇒ a=0'. More importantly, the claim 'Frobenius is injective for integral domains' is correct, but the parenthetical justification is slightly off: it should invoke that in an integral domain a^{p}=0 implies a=0 because a is nilpotent and the only nilpotent element is 0. This is a minor imprecision, not a falsehood. However, the further claim '有限な整域（すなわち有限体）なら全射でもある' is correct. The issue is the imprecise citation usage.
- **Proposed fix:** Rewrite as: '整域では a^{p}=0 なら a は冪零元であり、整域の冪零元は 0 のみ（\ref{ring:nilpotent-unit.1}）なので a=0、よって F は単射。有限な整域は体（\ref{ring:domain-field.3}）なので、有限体上では単射な自己写像は全射でもある。'
- **Reported:** 2026-10-28 (10fede1)

### ISSUE-0003 [Open] Claim that Z is a subgroup but not an ideal of Q is fine, but the general statement about ideals being stronger is imprecise
- **Category:** Supplement/remark error
- **Location:** ring:ideals-of-z / hypcheck comment
- **Detail:** The hypcheck says: '一般の環ではイデアルは部分群より強い条件である：Z は Q の部分群だが Q のイデアルでない。' This is correct: Z is an additive subgroup of Q but not an ideal since (1/2)·1 = 1/2 ∉ Z. No error here. (Checked and found correct.)
- **Proposed fix:** No change needed; this is correct.
- **Reported:** 2026-10-28 (10fede1)
