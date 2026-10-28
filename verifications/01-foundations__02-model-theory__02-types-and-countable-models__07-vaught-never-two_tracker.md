# Verification tracker: `01-foundations/02-model-theory/02-types-and-countable-models/07-vaught-never-two.html`

<!-- source: 01-foundations/02-model-theory/02-types-and-countable-models/07-vaught-never-two.html -->
<!-- Managed by scripts/verify.py (GitHub Actions). To dispute an [Open] issue, add a line starting with
     **Opus Rebuttal:** at the end of that issue and push; the next run judges it. Do not edit other lines. -->

- Last verified: 2026-10-28 (commit 8ccef3d, deepseek-chat)
- Open: 4 / Resolved: 0 / Ignored: 0

## Summary of the last run

The main theorem and its proof are essentially correct (the Vaught never-two argument via adding constants to a non-isolated type is standard and the cited lemmas are used appropriately). The genuine problems are concentrated in the supplement: the ω-stable classification of countable models is misstated (Baldwin–Lachlan gives 1 or ℵ_{0}, never 2^{ℵ_{0}}), Vaught's conjecture is described as open when Morley's theorem settles the countable-model dichotomy, and the claim that every finite k ≥ 3 is realized is overstated.

## Issues

### ISSUE-0001 [Open] ω-stable theory with countably many countable models
- **Category:** Supplement/remark error
- **Location:** supplement / 前提を変えると
- **Detail:** The supplement claims that for ω-stable theories the number of countable models is 1, ℵ_{0}, or 2^{ℵ_{0}}. This is false: by the Baldwin–Lachlan theorem, a countable ω-stable theory that is not ω-categorical has exactly ℵ_{0} countable models (it cannot have 2^{ℵ_{0}}). The claim as stated (allowing 2^{ℵ_{0}}) is wrong.
- **Proposed fix:** For a countable ω-stable theory, the number of countable models is either 1 (ω-categorical) or exactly ℵ_{0} (Baldwin–Lachlan); in particular it is never 2^{ℵ_{0}} when uncountable.
- **Reported:** 2026-10-28 (8ccef3d)

### ISSUE-0002 [Open] Vaught's conjecture status and Morley's result
- **Category:** Supplement/remark error
- **Location:** supplement / 似た定理
- **Detail:** The supplement says Vaught's conjecture is 'generally open' and that Morley showed the number is ℵ_{0}, ℵ_{1}, or 2^{ℵ_{0}} (or finite). Vaught's conjecture for countable complete theories is a theorem (Morley proved the number of countable models is either ≤ℵ_{0} or exactly 2^{ℵ_{0}}), not open. Also the intermediate value ℵ_{1} is not part of Morley's dichotomy for countable models; the correct statement is: the number of countable models is either at most ℵ_{0} or exactly 2^{ℵ_{0}}.
- **Proposed fix:** Vaught's conjecture (that the number of countable models is either ≤ℵ_{0} or 2^{ℵ_{0}}) is a theorem of Morley for countable complete theories: the number of countable models is either at most ℵ_{0} or exactly 2^{ℵ_{0}}.
- **Reported:** 2026-10-28 (8ccef3d)

### ISSUE-0003 [Open] Existence of theories with exactly k countable models
- **Category:** Supplement/remark error
- **Location:** supplement / 前提を変えると
- **Detail:** The supplement asserts that for every finite k ≥ 3 there is a theory with exactly k countable models. This is not known to be true in general; only specific values (e.g. 3 via Ehrenfeucht, and some others) are known, and it is a well-known open problem whether every finite number is realized. The blanket claim 'for all k=3,4,…' overstates the literature.
- **Proposed fix:** The Ehrenfeucht example gives exactly 3 countable models; whether every finite k ≥ 3 is realized by some countable complete theory is not settled in general, though several values are known.
- **Reported:** 2026-10-28 (8ccef3d)

### ISSUE-0004 [Open] Non-countably-categorical ω-stable case
- **Category:** Supplement/remark error
- **Location:** supplement / 前提を変えると
- **Detail:** The phrase '非可算範疇的なら 1 か ℵ_{0}' attached to ω-stable theories is imprecise/incorrect as stated: an uncountably categorical (and not ω-categorical) theory has exactly ℵ_{0} countable models, but the sentence as written suggests a dichotomy 1 or ℵ_{0} for uncountably categorical theories generally, which is only correct because uncountably categorical + not ω-categorical forces ℵ_{0}. Combined with the earlier false 2^{ℵ_{0}} alternative this is misleading.
- **Proposed fix:** If an ω-stable theory is uncountably categorical but not ω-categorical, it has exactly ℵ_{0} countable models; if it is ω-categorical it has exactly 1.
- **Reported:** 2026-10-28 (8ccef3d)
