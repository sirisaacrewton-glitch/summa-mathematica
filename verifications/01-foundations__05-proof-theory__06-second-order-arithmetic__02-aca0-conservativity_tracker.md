# Verification tracker: `01-foundations/05-proof-theory/06-second-order-arithmetic/02-aca0-conservativity.html`

<!-- source: 01-foundations/05-proof-theory/06-second-order-arithmetic/02-aca0-conservativity.html -->
<!-- Managed by scripts/verify.py (GitHub Actions). To dispute an [Open] issue, add a line starting with
     **Opus Rebuttal:** at the end of that issue and push; the next run judges it. Do not edit other lines. -->

- Last verified: 2026-10-28 (commit 10fede1, deepseek-chat)
- Open: 3 / Resolved: 0 / Ignored: 0

## Summary of the last run

The page is mathematically sound overall: the conservativity proof, the translation lemma, the definable-expansion lemma, and the corollaries are correct, and the hypcheck comments are accurate. The only genuine issues are in the supplement/remark: the claim that Def(M) is the minimal arithmetically closed family is false (smaller arithmetically closed families exist), and two remarks (WKL₀ conservativity and ACA proving Con(PA)) are correct in substance but imprecisely justified. No logical gaps, missing hypotheses, or improper links were found in the proofs.

## Issues

### ISSUE-0001 [Open] Def(M) is not the minimal arithmetically closed family
- **Category:** Supplement/remark error
- **Location:** supplement / 前提の検討, first bullet
- **Detail:** The supplement says that any family closed under arithmetical comprehension and satisfying induction gives a model of ACA₀, and that Def(M) is "the smallest candidate". The first part is fine, but the minimality claim is false: for a model M of PA, the family of sets definable *without parameters* (or with only definable parameters, or any subfamily closed under arithmetical comprehension with parameters from M) is in general a proper subfamily of Def(M) that is still arithmetically closed and satisfies induction, hence also yields a model of ACA₀. So Def(M) is not minimal among such families.
- **Proposed fix:** Replace "$\mathrm{Def}(M)$ はその最小の候補である" with: "$\mathrm{Def}(M)$ is the canonical (largest) such family, namely the family of all subsets of $M$ definable with parameters; smaller arithmetically closed families (e.g. those definable without parameters) also work, so $\mathrm{Def}(M)$ is not minimal."
- **Reported:** 2026-10-28 (10fede1)

### ISSUE-0002 [Open] WKL₀ is not conservative over IΣ₁ for L₁ sentences via Harrington alone
- **Category:** Supplement/remark error
- **Location:** supplement / 関連する結果, WKL₀ bullet
- **Detail:** The supplement states that WKL₀ is Π¹₁-conservative over RCA₀ (Harrington) and "therefore" conservative over IΣ₁ for L₁ sentences, combining with problem 2.8. This is correct in substance (WKL₀ is Π¹₁-conservative over RCA₀, and RCA₀ is conservative over IΣ₁ for L₁ sentences), but the phrasing "したがって" suggests the L₁-conservativity follows from Harrington's theorem alone, which it does not; it requires also the RCA₀/IΣ₁ conservativity (problem 2.8). This is a minor imprecision rather than a falsehood, but the logical dependency should be stated explicitly.
- **Proposed fix:** Rewrite as: "$\mathsf{WKL}_{0}$ is $\Pi^{1}_{1}$-conservative over $\mathsf{RCA}_{0}$ (Harrington); combining this with the conservativity of $\mathsf{RCA}_{0}$ over $\mathrm{I}\Sigma_{1}$ for $\mathcal{L}_{1}$ sentences (problem 2.8) yields that $\mathsf{WKL}_{0}$ is conservative over $\mathrm{I}\Sigma_{1}$ for $\mathcal{L}_{1}$ sentences."
- **Reported:** 2026-10-28 (10fede1)

### ISSUE-0003 [Open] ACA proves Con(PA) but the remark's justification is imprecise
- **Category:** Supplement/remark error
- **Location:** remark / item 3
- **Detail:** The remark claims ACA (ACA₀ plus induction for all L₂ formulas) proves Con(PA) by building a truth/satisfaction predicate as a set and using induction on it. This is true (ACA proves the existence of the satisfaction predicate for arithmetic and hence Con(PA)), but the phrase "算術の真理述語（充足関係）を集合として作り" is slightly misleading: ACA's comprehension only gives arithmetical comprehension, so the satisfaction predicate for arithmetic is obtained via the arithmetical definability of satisfaction (a single arithmetical formula), not by a comprehension axiom for arbitrary formulas. The essential point is that full L₂-induction applied to this arithmetical satisfaction formula yields Con(PA). The statement is essentially correct, so this is a precision issue, not a falsehood.
- **Proposed fix:** Clarify: "$\mathsf{ACA}$ proves $\mathrm{Con}(\PA)$ because the satisfaction relation for $\mathcal{L}_{1}$-formulas is arithmetically definable (hence available as a set by arithmetical comprehension), and full $\mathcal{L}_{2}$-induction applied to this arithmetical formula yields the consistency statement."
- **Reported:** 2026-10-28 (10fede1)
