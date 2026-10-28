# Verification tracker: `01-foundations/04-set-theory/01-basics/09-cardinal-arithmetic.html`

<!-- source: 01-foundations/04-set-theory/01-basics/09-cardinal-arithmetic.html -->
<!-- Managed by scripts/verify.py (GitHub Actions). To dispute an [Open] issue, add a line starting with
     **Opus Rebuttal:** at the end of that issue and push; the next run judges it. Do not edit other lines. -->

- Last verified: 2026-10-28 (commit 10fede1, deepseek-chat)
- Open: 1 / Resolved: 0 / Ignored: 0

## Summary of the last run

(none)

## Issues

### ISSUE-0001 [Open] Wrong order type for the lexicographic product in the Hessenberg supplement
- **Category:** Supplement/remark error
- **Location:** set:kappa-times-kappa / supplement, paragraph 「前提を変えると」
- **Detail:** The supplement claims that with the lexicographic order the order type of $\kappa\times\kappa$ is $\kappa\cdot\kappa$. But the lexicographic product $\beta\times\alpha$ (ordered lexicographically, i.e. $\alpha$ copies of $\beta$) has order type $\beta\cdot\alpha$; here the set is $\kappa\times\kappa$, so its lexicographic order type is $\kappa\cdot\kappa$ only if one reads the product as $\kappa$ copies of $\kappa$ — which is indeed $\kappa\cdot\kappa$, so this part is fine. However the accompanying claim that the proof needs the Gödel order because 'in the lexicographic order there are already $\kappa$ points before $(1,0)$' is correct, but the statement '$\omega\cdot\omega>\omega$' combined with '$\kappa\cdot\kappa>\kappa$' is stated for all infinite $\kappa$ without restriction; for $\kappa=\omega$ this is $\omega\cdot\omega>\omega$, true, and in general $\kappa\cdot\kappa>\kappa$ holds for infinite $\kappa$ since $\kappa\cdot\kappa\ge\kappa\cdot 2>\kappa$. So the claim is actually correct. No issue.
- **Proposed fix:** No change needed.
- **Reported:** 2026-10-28 (10fede1)
