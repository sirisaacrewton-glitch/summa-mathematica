# Verification tracker: `01-foundations/02-model-theory/04-uncountable-categoricity/07-morley.html`

<!-- source: 01-foundations/02-model-theory/04-uncountable-categoricity/07-morley.html -->
<!-- Managed by scripts/verify.py (GitHub Actions). To dispute an [Open] issue, add a line starting with
     **Opus Rebuttal:** at the end of that issue and push; the next run judges it. Do not edit other lines. -->

- Last verified: 2026-10-28 (commit 8ccef3d, deepseek-chat)
- Open: 2 / Resolved: 0 / Ignored: 0

## Summary of the last run

The main theorem and its proof (Baldwin–Lachlan, Morley) are logically sound: the use of prime/minimal models over strongly minimal sets, the dimension computation, and the isomorphism argument via Vaughtian-pair absence are correct, and the hypcheck accurately tracks hypotheses. The genuine problems are in the supplement: the claim that an uncountably categorical theory has either 1 or ℵ₀ countable models is false (finite values n ≥ 2 occur, e.g. vector spaces over finite fields), contradicting the page's own corollary; and the example's citation for ACF_p having no Vaughtian pairs overstates what the characteristic-0 problem establishes.

## Issues

### ISSUE-0001 [Open] Countable models of uncountably categorical theories: 1 or ℵ₀
- **Category:** Supplement/remark error
- **Location:** supplement / 前提を変えると
- **Detail:** The supplement claims that the number of countable models of an uncountably categorical theory is either 1 (when ℵ₀-categorical) or ℵ₀, attributed to Baldwin–Lachlan. This is false: an uncountably categorical theory can have exactly n countable models for any finite n ≥ 1 (e.g. the theory of a vector space over a finite field has exactly n countable models for n = 1, 2, 3, …). The correct statement is that the number is at most ℵ₀ (which is what the page's own corollary model:countable-models-of-categorical states), and it is ℵ₀ unless the theory is ℵ₀-categorical (in which case it is 1). The '1 or ℵ₀' dichotomy is not a theorem.
- **Proposed fix:** The number of countable models of an uncountably categorical theory is at most ℵ₀ (\ref{model:countable-models-of-categorical}); it is exactly 1 iff the theory is ℵ₀-categorical, and otherwise it can be any finite number n ≥ 1 or ℵ₀ (e.g. vector spaces over a finite field realize every finite value).
- **Reported:** 2026-10-28 (8ccef3d)

### ISSUE-0002 [Open] ACF_p has no Vaughtian pairs for all p
- **Category:** Supplement/remark error
- **Location:** example / item 1
- **Detail:** The example says ACF_p has no Vaughtian pairs citing \ref{model:prob-vp-acf} 'in the case of characteristic 0; the general p is similar'. But the cited problem model:prob-vp-acf is stated for characteristic 0 only, and the parenthetical 'general p is similar' is an unproved assertion presented as if covered. More importantly, the claim that ACF_p is categorical in every uncountable cardinal is correct, but the justification via 'no Vaughtian pairs' for general p is not established by the cited result. This is a minor overstatement of what the citation supports.
- **Proposed fix:** Either restrict the citation to characteristic 0, or note that for general p the no-Vaughtian-pair property follows from the same argument (or from Steinitz' theorem directly), so the citation to \ref{model:prob-vp-acf} covers only the characteristic 0 case.
- **Reported:** 2026-10-28 (8ccef3d)
