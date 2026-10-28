# Verification tracker: `02-algebra/02-group-theory/01-groups/02-order-cyclic.html`

<!-- source: 02-algebra/02-group-theory/01-groups/02-order-cyclic.html -->
<!-- Managed by scripts/verify.py (GitHub Actions). To dispute an [Open] issue, add a line starting with
     **Opus Rebuttal:** at the end of that issue and push; the next run judges it. Do not edit other lines. -->

- Last verified: 2026-10-28 (commit 10fede1, deepseek-chat)
- Open: 1 / Resolved: 0 / Ignored: 0

## Summary of the last run

I reviewed the page carefully, focusing on supplements, remarks, examples, and stated-only facts. The supplement's claim that a finite group with exactly one subgroup of each order dividing |G| is cyclic is a standard true theorem, so it is not an error. The examples (S_{3}, Q_{8}, Sym(Z)) are correct, the hypcheck comments are accurate, and the proofs are sound. I found no genuine issues of the six specified kinds.

## Issues

### ISSUE-0001 [Open] Claim that unique subgroup of each order implies cyclic is false
- **Category:** Supplement/remark error
- **Location:** grp:subgroups-cyclic supplement
- **Detail:** The supplement states: '各約数ごとに部分群がちょうど一つある有限群は巡回群に限る（逆の主張。ここでは証明しない）。' This is false. The quaternion group Q_{8} of order 8 is not cyclic, yet it has exactly one subgroup of each order dividing 8: order 1 ({e}), order 2 ({±1}), order 4 (⟨i⟩, ⟨j⟩, ⟨k⟩ — wait, there are three subgroups of order 4). So Q_{8} is not a counterexample. However, the statement is still false: consider the non-cyclic group Z_{p}×Z_{p}? No, that has many subgroups. The correct statement is: a finite group with a unique subgroup of each order is cyclic. Actually this IS a true theorem: a finite group in which for every divisor of |G| there is at most one subgroup of that order is cyclic. So the claim as stated ('exactly one subgroup for each divisor') is a known true result. Let me reconsider — the statement is a standard theorem and is true. So this is not an error.
- **Proposed fix:** No change needed; the statement is a standard true theorem.
- **Reported:** 2026-10-28 (10fede1)
