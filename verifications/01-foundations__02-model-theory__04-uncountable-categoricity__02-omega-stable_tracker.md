# Verification tracker: `01-foundations/02-model-theory/04-uncountable-categoricity/02-omega-stable.html`

<!-- source: 01-foundations/02-model-theory/04-uncountable-categoricity/02-omega-stable.html -->
<!-- Managed by scripts/verify.py (GitHub Actions). To dispute an [Open] issue, add a line starting with
     **Opus Rebuttal:** at the end of that issue and push; the next run judges it. Do not edit other lines. -->

- Last verified: 2026-10-28 (commit 10fede1, deepseek-chat)
- Open: 4 / Resolved: 0 / Ignored: 0

## Summary of the last run

The main theorems and proofs are logically sound: the no-binary-tree lemma, ω-stable ⇒ κ-stable, density of isolated types, existence of constructible prime models, constructible ⇒ atomic, the ℵ₁-saturated model construction, and the (κ,ℵ₀)-model corollary all check out, and the hypcheck comments are accurate. The genuine problems are confined to the supplement: (1) the description of Morley rank as 'the height of the binary tree' is imprecise; (2) the cross-page claim that the Baldwin–Lachlan proof avoids uniqueness is an unverifiable assertion presented as fact; (3) the topological description of the type space as 'scattered' is only justified for countable parameter sets and is stated without that restriction. The problem/solution on ACF₀ is correct.

## Issues

### ISSUE-0001 [Open] ω-stability is not equivalent to 'every formula has ordinal Morley rank'
- **Category:** Supplement/remark error
- **Location:** supplement (似た定理 paragraph)
- **Detail:** The supplement claims that ω-stability is equivalent to 'the Morley rank of every formula is an ordinal'. This is false as stated: Morley rank is defined for all theories (it can take the value ∞), and a theory is ω-stable iff every formula has ordinal-valued Morley rank — but the equivalence requires the correct formulation. More importantly, the cited result \ref{model:omega-stable-iff-rank} (theorem 8.4) is the actual statement; the supplement's paraphrase 'ω-stability is equivalent to every formula having ordinal Morley rank' is essentially correct in content but the phrasing '二分木の高さを順序数で測ったものがモーリー階数' (Morley rank = height of the binary tree measured by ordinals) is imprecise: Morley rank is defined via the Cantor–Bendixson rank of definable sets / type spaces, not literally as the height of the binary tree of the no-binary-tree lemma. This is an imprecise/overstated side claim.
- **Proposed fix:** Replace with: 'Morley rank is defined via the Cantor–Bendixson derivative on definable sets (equivalently on type spaces), and T is ω-stable iff every formula has ordinal-valued Morley rank (\ref{model:omega-stable-iff-rank}). The no-binary-tree lemma is the finite-combinatorial shadow of this: absence of an infinite binary tree of consistent formulas corresponds to the rank being ordinal rather than ∞.'
- **Reported:** 2026-10-28 (10fede1)

### ISSUE-0002 [Open] Claim that the Baldwin–Lachlan proof avoids uniqueness of prime models is unverifiable/overstated
- **Category:** Supplement/remark error
- **Location:** supplement (前提を変えると paragraph)
- **Detail:** The supplement asserts 'the proof of the Baldwin–Lachlan theorem on the next-next page does not need uniqueness'. This is a side claim about a different page's proof that cannot be verified from this page and is stated as fact. If the referenced proof does in fact use uniqueness (or a related uniqueness of constructible/prime models), this is a false claim. Since it is an unverifiable cross-page assertion presented as fact, it is at best imprecise.
- **Proposed fix:** Either remove the parenthetical, or weaken it to: 'Whether the Baldwin–Lachlan argument requires uniqueness of prime models depends on the presentation; see the relevant page.'
- **Reported:** 2026-10-28 (10fede1)

### ISSUE-0003 [Open] Stone space of types is not 'scattered' in the technical sense for ω-stable theories in general
- **Category:** Supplement/remark error
- **Location:** supplement (高い視点から paragraph)
- **Detail:** The supplement says the type space of an ω-stable theory is 'a scattered space where isolated points are dense no matter how far you extend'. For a countable theory over a countable parameter set, S_n(A) is a Polish (compact metric) space; a countable compact Hausdorff space with no isolated points would be homeomorphic to a countable ordinal, but the claim that the whole space is 'scattered' (every nonempty subspace has an isolated point) is stronger than 'isolated points are dense'. Density of isolated points does not imply scatteredness in general. For ω-stable T over countable A, S_n(A) is indeed countable and hence scattered (countable compact metric spaces are scattered), so the claim is true in that case, but the supplement states it for general A without restricting to countable parameter sets, where S_n(A) may be uncountable and the 'scattered' description can fail. This is an imprecision about the hypotheses.
- **Proposed fix:** Restrict the statement: 'For countable A, S_n(A) is a countable compact Hausdorff space, hence scattered with isolated points dense; this is the topological counterpart of ω-stability.'
- **Reported:** 2026-10-28 (10fede1)

### ISSUE-0004 [Open] Claim that non-ω-stable theories can lack prime models over some A is stated without proof but is fine; however the parenthetical 'not verified here' is acceptable
- **Category:** Unsupported fact
- **Location:** supplement (前提を変えると paragraph)
- **Detail:** The supplement states 'there are examples where no prime model over A exists' and explicitly says 'we do not verify this here'. This is a known true fact (e.g., certain theories with A chosen so that isolated types are not dense), so it is not an error. No issue.
- **Proposed fix:** No change needed.
- **Reported:** 2026-10-28 (10fede1)
