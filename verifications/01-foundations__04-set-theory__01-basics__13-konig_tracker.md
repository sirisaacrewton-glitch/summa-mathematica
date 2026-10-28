# Verification tracker: `01-foundations/04-set-theory/01-basics/13-konig.html`

<!-- source: 01-foundations/04-set-theory/01-basics/13-konig.html -->
<!-- Managed by scripts/verify.py (GitHub Actions). To dispute an [Open] issue, add a line starting with
     **Opus Rebuttal:** at the end of that issue and push; the next run judges it. Do not edit other lines. -->

- Last verified: 2026-10-28 (commit 8ccef3d, deepseek-chat)
- Open: 2 / Resolved: 0 / Ignored: 0

## Summary of the last run

The main theorem, diagonal lemma, and corollaries are correct and well-supported. The problems concentrate in the supplements: the Easton's theorem fact is stated for a countable transitive model with an arbitrary function, which is not literally Easton's theorem (it is a class forcing result over the universe), and the Silver/pcf remarks are slightly imprecise about the stationary-set hypothesis and the strong-limit requirement. No issues found in the proofs themselves.

## Issues

### ISSUE-0001 [Open] Easton's theorem stated for a countable transitive model with a class function
- **Category:** Supplement/remark error
- **Location:** set:easton (fact)
- **Detail:** The fact says: given a model M (a countable transitive model built from L) and a function F on the regular cardinals of M satisfying monotonicity and cf(F(κ))>κ, there is a forcing extension of M preserving cofinalities with 2^κ=F(κ) for all regular κ. This is imprecise: Easton's theorem is a schema/theorem about the universe (or about class forcing over a model of ZFC+GCH), and the extension is a class forcing extension, not a set forcing extension of a countable transitive model. Also F must be a class function on all regular cardinals (definable), and the extension preserves cofinalities and cardinals. As stated for a set-sized ctm with an arbitrary function F on its regular cardinals, the claim is not literally Easton's theorem.
- **Proposed fix:** State: (ZFC) Let F be a definable class function on the regular cardinals such that κ≤λ implies F(κ)≤F(λ) and cf(F(κ))>κ for every regular κ. Then there is a cofinality-preserving (hence cardinal-preserving) class forcing extension in which 2^κ=F(κ) for every regular κ (Easton 1970; Kunen, Set Theory, Ch. VIII).
- **Reported:** 2026-10-28 (8ccef3d)

### ISSUE-0002 [Open] Silver's theorem hypothesis weakened to a stationary set is stated too loosely
- **Category:** Supplement/remark error
- **Location:** set:silver supplement
- **Detail:** The supplement says the hypothesis can be weakened to '2^λ=λ^+ holds for sufficiently many (a stationary set of) λ<κ'. Silver's theorem indeed requires 2^λ=λ^+ on a stationary set of λ<κ (with cf(κ)>ω), but the text omits that the stationary set must consist of cardinals (or that the condition is on a stationary subset of κ consisting of cardinals) and that κ is a limit cardinal of uncountable cofinality. As written it is imprecise.
- **Proposed fix:** If κ is singular with cf(κ)>ω and 2^λ=λ^+ holds for all λ in a stationary subset of κ consisting of cardinals (in particular if it holds for all λ<κ), then 2^κ=κ^+.
- **Reported:** 2026-10-28 (8ccef3d)
