# Verification tracker: `01-foundations/05-proof-theory/04-provability-logic-extensions/02-set-theory.html`

<!-- source: 01-foundations/05-proof-theory/04-provability-logic-extensions/02-set-theory.html -->
<!-- Managed by scripts/verify.py (GitHub Actions). To dispute an [Open] issue, add a line starting with
     **Opus Rebuttal:** at the end of that issue and push; the next run judges it. Do not edit other lines. -->

- Last verified: 2026-10-28 (commit 8ccef3d, deepseek-chat)
- Open: 2 / Resolved: 0 / Ignored: 0

## Summary of the last run

The page is largely correct: the two Solovay theorems, the (A)⇒(B) and (B)⇒(C) proofs, the problem solutions, and the hypchecks are consistent, and the cited labels match their uses. The only genuine problems found are in the closing supplement, where the informal 'high-level view' misdescribes the Jensen–Karp theorem (direction and content of what a higher model 'sees') and slightly overstates the assumption-freeness of (B)⇒(C). Both are medium-confidence side-comment issues; no logical gaps or missing hypotheses were found in the proofs.

## Issues

### ISSUE-0001 [Open] Jensen–Karp mischaracterized as 'higher model sees lower model's theory'
- **Category:** Supplement/remark error
- **Location:** supplement / 高い視点から
- **Detail:** The supplement claims that Jensen–Karp guarantees 'a higher model always sees the theory of a lower model (as another model)', and that this is exactly the prewellordering structure where 'points of the same rank see the same points'. But the stated Jensen–Karp fact (#pt:jensen-karp) says: if $o(M)<o(N)$ and $M\models\chi$, then $N\models$ 'there is a transitive model of $\chi$'. That is, the *higher* model $N$ sees that $\chi$ holds in *some* transitive model, not that it sees the lower model $M$ itself or its full theory. Moreover, the direction is that the higher model sees the lower one's theory, whereas in the frame the accessibility goes from higher rank to lower rank ($wRx$ iff $\rho(w)>\rho(x)$), so the analogy as stated is reversed/imprecise. The claim that 'what is seen is determined by height alone' is also stronger than what Jensen–Karp gives (it only gives existence of some model, not that all models of the same height see the same set of theories).
- **Proposed fix:** Replace with: 'Jensen–Karp's theorem guarantees that if $o(M)<o(N)$ and $M\models\chi$, then $N$ satisfies "$\chi$ holds in some transitive model". Thus a model of greater height always "sees" (as a $\Box$-truth) the theories realized by models of smaller height, which is why the frame is determined by height and becomes a prewellordering (points of equal height need not see each other, since neither is an element of the other).'
- **Reported:** 2026-10-28 (8ccef3d)

### ISSUE-0002 [Open] Claim that (B)⇒(C) uses no set-theoretic assumptions is misleading
- **Category:** Supplement/remark error
- **Location:** supplement / 前提の検討, third bullet
- **Detail:** The bullet says '(B) ⇒ (C) is a purely modal-logical argument and uses no set-theoretic assumptions.' While the proof of (B)⇒(C) itself is syntactic, the equivalence (B)⇔(C) as stated in the theorems is only asserted under the hypotheses of the theorems (existence of infinitely many $\alpha$ with $L_{\alpha}\models\ZF$, resp. infinitely many inaccessibles). More importantly, the statement '(B)⇒(C) uses no set-theoretic assumptions' is at least imprecise: the very formulation of (B) ('valid in all finite prewellorderings') is purely modal, so the remark is acceptable as far as it goes, but combined with the surrounding text it suggests the whole theorem is assumption-free. This is a minor overstatement.
- **Proposed fix:** Reword: '(B) ⇒ (C) is proved by a purely modal-logical (canonical-model) argument and does not use the set-theoretic existence hypotheses; those hypotheses enter only through (A) ⇒ (B).'
- **Reported:** 2026-10-28 (8ccef3d)
