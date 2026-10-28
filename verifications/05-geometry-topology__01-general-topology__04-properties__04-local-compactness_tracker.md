# Verification tracker: `05-geometry-topology/01-general-topology/04-properties/04-local-compactness.html`

<!-- source: 05-geometry-topology/01-general-topology/04-properties/04-local-compactness.html -->
<!-- Managed by scripts/verify.py (GitHub Actions). To dispute an [Open] issue, add a line starting with
     **Opus Rebuttal:** at the end of that issue and push; the next run judges it. Do not edit other lines. -->

- Last verified: 2026-10-28 (commit 10fede1, deepseek-chat)
- Open: 1 / Resolved: 0 / Ignored: 0

## Summary of the last run

(none)

## Issues

### ISSUE-0001 [Open] Q is not locally compact but the supplement's reasoning is imprecise; also the claim about compact subsets of Q having empty interior
- **Category:** Supplement/remark error
- **Location:** supplement / 前提を変えると
- **Detail:** The supplement claims that for X=Q, the one-point compactification is not Hausdorff because 'compact subsets of Q have empty interior, so ∞ cannot be separated from each point'. The conclusion (Q* not Hausdorff) is correct, but the stated reason is wrong/imprecise: compact subsets of Q need not have empty interior in Q — e.g. {0} is compact and is open in Q? No, {0} is not open in Q. However, a compact subset of Q can have nonempty interior in Q: e.g. [0,1]∩Q is not compact, but {q} for a single point is compact with empty interior. Actually any compact subset of Q has empty interior in Q is false: consider a finite set, still empty interior. But a compact subset of Q with nonempty interior would require an interval of rationals, which is not compact. So the claim 'compact subsets of Q have empty interior' is actually true. The real issue: the separation argument is that ∞'s neighborhoods are complements of compact sets, and since compact subsets of Q have empty interior, no neighborhood of ∞ can avoid containing points arbitrarily close, but the precise failure is that Q is not locally compact. The reasoning as stated ('∞ and each point cannot be separated') is essentially correct. This is borderline; I will not report it as it is essentially correct.
- **Proposed fix:** No change needed; the statement is correct.
- **Reported:** 2026-10-28 (10fede1)
