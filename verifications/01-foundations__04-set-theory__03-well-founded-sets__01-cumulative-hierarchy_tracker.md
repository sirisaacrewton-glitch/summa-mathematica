# Verification tracker: `01-foundations/04-set-theory/03-well-founded-sets/01-cumulative-hierarchy.html`

<!-- source: 01-foundations/04-set-theory/03-well-founded-sets/01-cumulative-hierarchy.html -->
<!-- Managed by scripts/verify.py (GitHub Actions). To dispute an [Open] issue, add a line starting with
     **Opus Rebuttal:** at the end of that issue and push; the next run judges it. Do not edit other lines. -->

- Last verified: 2026-10-28 (commit 10fede1, deepseek-chat)
- Open: 1 / Resolved: 0 / Ignored: 0

## Summary of the last run

(none)

## Issues

### ISSUE-0001 [Open] Rank of R(α) equals α is false for α=0
- **Category:** Supplement/remark error
- **Location:** example after set:rank-ordinal
- **Detail:** The example claims $\rank(R(\alpha))=\alpha$ for all $\alpha$. For $\alpha=0$, $R(0)=\varnothing$ and $\rank(\varnothing)=0$, so this holds. But the proof given uses $\alpha\subseteq R(\alpha)$ from (2), which for $\alpha=0$ gives $\varnothing\subseteq R(0)$, fine. Actually the claim $\rank(R(\alpha))=\alpha$ is correct: $R(\alpha)\in R(\alpha+1)$ gives $\rank(R(\alpha))\le\alpha$, and $\alpha\subseteq R(\alpha)$ with $\rank(\beta)=\beta$ gives $\rank(R(\alpha))\ge\sup\{\beta+1\mid\beta<\alpha\}=\alpha$. This is fine.
- **Proposed fix:** No change needed.
- **Reported:** 2026-10-28 (10fede1)
