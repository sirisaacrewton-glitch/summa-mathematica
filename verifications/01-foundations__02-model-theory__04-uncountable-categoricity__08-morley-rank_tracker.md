# Verification tracker: `01-foundations/02-model-theory/04-uncountable-categoricity/08-morley-rank.html`

<!-- source: 01-foundations/02-model-theory/04-uncountable-categoricity/08-morley-rank.html -->
<!-- Managed by scripts/verify.py (GitHub Actions). To dispute an [Open] issue, add a line starting with
     **Opus Rebuttal:** at the end of that issue and push; the next run judges it. Do not edit other lines. -->

- Last verified: 2026-10-28 (commit 10fede1, deepseek-chat)
- Open: 2 / Resolved: 0 / Ignored: 0

## Summary of the last run

The main text (definition, basic properties, low-rank proposition, ω-stability equivalence, Morley degree existence, and the problems/solutions) is logically sound; the proofs correctly invoke the cited results and the hypcheck is accurate. The genuine problems are confined to the supplement: the claim that Cantor–Bendixson rank of the type space 'coincides with Morley rank in some cases' is imprecise/overstated and should be stated precisely for ω-stable theories (CB rank of [φ] equals RM(φ)), and the ACF dimension remark should specify that it concerns definable sets / the formula in n free variables. No previously reported issues are open.

## Issues

### ISSUE-0001 [Open] Cantor–Bendixson rank does not generally coincide with Morley rank
- **Category:** Supplement/remark error
- **Location:** supplement / 「似た定理」
- **Detail:** The supplement claims that the Cantor–Bendixson rank of the type space, applied to type spaces, 'coincides with Morley rank in some cases' (一致する場合があることが知られている). This is imprecise/overstated. The standard correct statement is that for an ω-stable theory the Morley rank of a formula φ equals the Cantor–Bendixson rank of the closed subset [φ] of the type space S_{1}(M) (over a sufficiently saturated model), and more generally CB rank of a type equals its Morley rank. As stated ('in some cases') it is vague and, taken literally, false for arbitrary theories (e.g. DLO has CB rank of the whole space equal to some ordinal while Morley rank is ∞). The claim as written is not a correct general statement.
- **Proposed fix:** For an ω-stable theory, the Morley rank of a formula φ equals the Cantor–Bendixson rank of the closed set [φ] ⊆ S_{1}(M) (and the CB rank of a type equals its Morley rank); in general the two notions diverge (e.g. for DLO the space has ordinal CB rank while Morley rank is ∞).
- **Reported:** 2026-10-28 (10fede1)

### ISSUE-0002 [Open] ACF dimension claim: rank of K^n is n needs the right language/parameters
- **Category:** Supplement/remark error
- **Location:** supplement / 「前提を変えると」
- **Detail:** The supplement states 'in algebraically closed fields the rank of K^{n} is n (the dimension of the algebraic variety)'. This is essentially correct for ACF in the language of rings with parameters from a base field, but as stated it is imprecise: Morley rank of a definable set equals the dimension of its Zariski closure only for definable (constructible) sets, and the rank of the whole space K^{n} (i.e. of x=x in n variables) is n only when computed in the appropriate sort/variable context. The blanket phrase 'the rank of K^{n} is n' without specifying that this is the rank of the formula in n free variables (or of the corresponding definable set) is slightly overstated but not clearly false. Given the instruction to prefer no report over a speculative one, this is borderline; the main genuine issue is the Cantor–Bendixson claim above.
- **Proposed fix:** In ACF, for a definable set D ⊆ K^{n} the Morley rank equals the dimension of its Zariski closure; in particular the formula x_{1}=x_{1}∧…∧x_{n}=x_{n} (the whole space K^{n}) has Morley rank n.
- **Reported:** 2026-10-28 (10fede1)
