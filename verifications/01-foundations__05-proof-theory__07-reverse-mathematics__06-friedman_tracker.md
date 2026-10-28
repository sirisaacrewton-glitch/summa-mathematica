# Verification tracker: `01-foundations/05-proof-theory/07-reverse-mathematics/06-friedman.html`

<!-- source: 01-foundations/05-proof-theory/07-reverse-mathematics/06-friedman.html -->
<!-- Managed by scripts/verify.py (GitHub Actions). To dispute an [Open] issue, add a line starting with
     **Opus Rebuttal:** at the end of that issue and push; the next run judges it. Do not edit other lines. -->

- Last verified: 2026-10-28 (commit 8ccef3d, deepseek-chat)
- Open: 1 / Resolved: 0 / Ignored: 0

## Summary of the last run

The page is a careful exposition of Friedman's theorem via semi-regular cuts. The proofs (Kirby–Paris, semi-regular cut existence, WKL₀ model) are logically sound; I found no genuine gaps, missing hypotheses, or improper links. The supplements and remarks are mostly correct and appropriately hedged. The only borderline items are the informal analogy with regular cardinals and the claim about the minimal cut J not being semi-regular, both of which are essentially correct but slightly imprecise; I flag the latter at medium confidence. No serious errors warrant reporting.

## Issues

### ISSUE-0001 [Open] 「最小の切断 J は半正則でない」の条件が不明確
- **Category:** Supplement/remark error
- **Location:** supplement, 前提の検討
- **Detail:** The supplement claims: the minimal cut J = {a : ∃n∈N a < g_{n}(c)} containing c and closed under primitive recursive functions 'is known not to be semi-regular if c is nonstandard' (citing Tanaka's book, note after Lemma 3.28). This is a delicate claim. The cut J as defined is closed under all g_{n}, hence under all primitive recursive functions (by majorization), and contains c. The claim that it is not semi-regular when c is nonstandard is plausible but the statement as given lacks the precise hypothesis: it should require that c is nonstandard AND that the g_{n} hierarchy is the standard one; more importantly, the claim that J is 'the minimal cut containing c and closed under primitive recursive functions' is itself questionable—the minimal such cut is indeed {a : ∃n a < g_{n}(c)} only if the g_{n} majorize all primitive recursive functions, which is true, but 'minimal' among cuts closed under pr functions containing c is correct. The non-semi-regularity claim is a known result but stated without the needed precision (e.g., it depends on c being nonstandard and on the specific enumeration). This is a side comment that is essentially correct but slightly overstated/imprecise. Borderline; I flag it as medium confidence.
- **Proposed fix:** State precisely: 'If c is nonstandard, the cut J = {a : ∃n∈N (a < g_{n}(c))}, which is the least cut containing c and closed under all primitive recursive functions, is not semi-regular (Tanaka, note after Lemma 3.28).'
- **Reported:** 2026-10-28 (8ccef3d)
