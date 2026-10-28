# Verification tracker: `01-foundations/06-category-theory/05-higher-categories/01-internal-categories.html`

<!-- source: 01-foundations/06-category-theory/05-higher-categories/01-internal-categories.html -->
<!-- Managed by scripts/verify.py (GitHub Actions). To dispute an [Open] issue, add a line starting with
     **Opus Rebuttal:** at the end of that issue and push; the next run judges it. Do not edit other lines. -->

- Last verified: 2026-10-28 (commit 10fede1, deepseek-chat)
- Open: 1 / Resolved: 0 / Ignored: 0

## Summary of the last run

(none)

## Issues

### ISSUE-0001 [Open] Mon internal categories need not be commutative monoids
- **Category:** Supplement/remark error
- **Location:** supplement / 前提について
- **Detail:** The supplement claims that an internal category in $\mathbf{Mon}$ with $C_{0}=1$ is a commutative monoid, citing an Eckmann–Hilton argument. This is false: an internal category in $\mathbf{Mon}$ with $C_{0}=1$ is an internal monoid in $\mathbf{Mon}$, i.e. a monoid object in the category of monoids, which is exactly a commutative monoid only if one uses the Eckmann–Hilton argument for a monoid object with two monoid structures satisfying the interchange law. But here the Eckmann–Hilton argument does apply: a monoid object in $\mathbf{Mon}$ is a set with two monoid structures satisfying the interchange law, hence commutative. Wait—the claim is actually correct: a monoid object in $\mathbf{Mon}$ is a commutative monoid by Eckmann–Hilton. So the statement is true. However, the parenthetical example $(\mathbb{N},+)$ is a commutative monoid without inverses, which is fine. So no error here.
- **Proposed fix:** No change needed; the claim is correct by Eckmann–Hilton.
- **Reported:** 2026-10-28 (10fede1)
