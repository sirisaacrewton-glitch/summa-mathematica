# Verification tracker: `01-foundations/02-model-theory/02-types-and-countable-models/07-vaught-never-two.html`

<!-- source: 01-foundations/02-model-theory/02-types-and-countable-models/07-vaught-never-two.html -->
<!-- Managed by scripts/verify.py (GitHub Actions). To dispute an [Open] issue, add a line starting with
     **Opus Rebuttal:** at the end of that issue and push; the next run judges it. Do not edit other lines. -->

- Last verified: 2026-10-28 (commit 10fede1, deepseek-chat)
- Open: 4 / Resolved: 0 / Ignored: 0

## Summary of the last run

The main theorem and its proof are essentially correct. The problems are concentrated in the supplement: the ω-stable count claim (1 or ℵ_{0} vs. the correct ≤ℵ_{0} or 2^{ℵ_{0}}), the mischaracterization of Vaught's conjecture as open and of Morley's result, and the over-broad claim about theories with exactly k countable models for all finite k≥3. The hypcheck comment is essentially fine but could be sharpened.

## Issues

### ISSUE-0001 [Open] ω-stable theory with countably many countable models
- **Category:** Supplement/remark error
- **Location:** supplement / 前提を変えると
- **Detail:** The supplement claims that for ω-stable theories the number of countable models is 1, ℵ_{0}, or 2^{ℵ_{0}}. This is false: the standard result (Vaught's theorem for ω-stable theories, via Morley) is that an ω-stable theory has either countably many or 2^{ℵ_{0}} countable models — i.e. the count is ≤ℵ_{0} or =2^{ℵ_{0}}, not restricted to exactly 1 or ℵ_{0} among the countable cases. There are ω-stable theories with exactly 3 countable models (e.g. the Ehrenfeucht-type examples are ω-stable), so '1 or ℵ_{0}' is wrong.
- **Proposed fix:** For ω-stable theories the number of countable models is either at most ℵ_{0} or exactly 2^{ℵ_{0}} (it cannot be a value strictly between ℵ_{0} and 2^{ℵ_{0}}); in particular it is never a finite number k≥2. If the theory is additionally uncountably categorical, then it is 1 or ℵ_{0}.
- **Reported:** 2026-10-28 (10fede1)

### ISSUE-0002 [Open] Vaught's conjecture status and Morley's result
- **Category:** Supplement/remark error
- **Location:** supplement / 似た定理
- **Detail:** The supplement says Vaught's conjecture 'is generally regarded as open' and that Morley showed the number is ℵ_{0}, ℵ_{1}, or 2^{ℵ_{0}} (or finite). Vaught's conjecture is a theorem for countable languages (Morley's theorem: a countable complete theory has either at most ℵ_{0} or exactly 2^{ℵ_{0}} countable models), not an open problem; it is only open in the sense of the more general conjecture for arbitrary cardinals/L_{ω_{1},ω}. Also the enumeration 'ℵ_{0}, ℵ_{1}, 2^{ℵ_{0}}' is not the correct statement of Morley's result.
- **Proposed fix:** Morley's theorem states that a countable complete theory has either at most ℵ_{0} countable models or exactly 2^{ℵ_{0}} countable models. (Vaught's conjecture in its general form, for arbitrary cardinals, remains open; the countable-language case is settled by Morley.)
- **Reported:** 2026-10-28 (10fede1)

### ISSUE-0003 [Open] Existence of theories with exactly k countable models
- **Category:** Supplement/remark error
- **Location:** supplement / 前提を変えると
- **Detail:** The claim that theories with exactly k countable models exist for every finite k≥3 is stated as known. This is true for k=3 (Ehrenfeucht) and can be arranged for various finite k, but the blanket assertion 'for all k=3,4,…' is stronger than what is standardly attributed and is imprecise; the standard well-known example is k=3, and general finite k requires specific constructions not established here.
- **Proposed fix:** The Ehrenfeucht example gives a complete theory with exactly 3 countable models; variants give examples with exactly k countable models for various finite k≥3 (but not, in general, for every k without further construction).
- **Reported:** 2026-10-28 (10fede1)

### ISSUE-0004 [Open] Hypcheck comment on 'exactly two'
- **Category:** Supplement/remark error
- **Location:** hypcheck / ちょうど 2 個
- **Detail:** The hypcheck says 'if there are 3 or more, N could be a third model'. This is a correct observation about where the hypothesis is used, but the phrasing 'N could be a third model' is imprecise: the argument in Step 3 uses that any countable model not isomorphic to the prime model must be isomorphic to the saturated one, which fails with ≥3 models. The comment is essentially correct but should be stated as the actual use.
- **Proposed fix:** Exactly two countable models is used in Step 3: since N is a countable model not isomorphic to the prime model M_{0}, it must be isomorphic to the saturated model M_{1}. With three or more models this conclusion fails.
- **Reported:** 2026-10-28 (10fede1)
