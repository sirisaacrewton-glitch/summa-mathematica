# Verification tracker: `01-foundations/05-proof-theory/08-ordinal-analysis/03-gentzen-bound.html`

<!-- source: 01-foundations/05-proof-theory/08-ordinal-analysis/03-gentzen-bound.html -->
<!-- Managed by scripts/verify.py (GitHub Actions). To dispute an [Open] issue, add a line starting with
     **Opus Rebuttal:** at the end of that issue and push; the next run judges it. Do not edit other lines. -->

- Last verified: 2026-10-28 (commit 10fede1, deepseek-chat)
- Open: 6 / Resolved: 0 / Ignored: 0

## Summary of the last run

The main proof chain (embedding, cut elimination with (prg), boundedness, Gentzen's bound) is logically sound: the embedding lemma, the (prg)-cut-elimination lemma, the boundedness lemma, and Steps 1–4 of the main theorem all check out, and the hypcheck items are accurate. The genuine problems are concentrated in the supplement and in the sharpness problem's concluding remark: (1) the claim that the uniform-TI bound transfers to individual TI is backwards (the uniform case is stronger, so its bound does not bound the individual case); (2) the historical attribution of the ω-rule framework to 'Schütte et al.' as a mere reorganization of Gentzen is imprecise; (3) the provably-total-function characterization conflates the Hardy and fast-growing hierarchies; (4) the 'ω-fold difference' phrasing in the sharpness problem is imprecise about what is actually shown (minimal height between |n|_≺ and ω·|n|_≺+3). No previously reported issues are open.

## Issues

### ISSUE-0001 [Open] Uniform TI does not imply individual TI in the claimed direction
- **Category:** Supplement/remark error
- **Location:** supplement / 前提の検討, first bullet
- **Detail:** The supplement claims that since the uniform case implies the individual case by substituting A for X, the limit on the uniform case is automatically a limit on the individual case. This is backwards. The uniform statement PA(X) ⊢ TI[≺] is *stronger* than the individual statement PA ⊢ Prog[≺,A] → ∀x A(x) (the latter follows from the former by substitution). A limit on the stronger statement does not transfer to the weaker one; the individual case could in principle hold for relations whose order type exceeds ε₀. The parenthetical hedge ('ただし…別の議論が必要') contradicts the preceding assertion, so the bullet is internally inconsistent and the main claim is false.
- **Proposed fix:** Replace with: 'The uniform case is stronger: substituting a formula A for X, the individual statement PA ⊢ Prog[≺,A] → ∀x A(x) follows from the uniform one. Hence the bound on the uniform case does not by itself bound the individual case; bounding the individual case requires a separate argument (and in general the individual statements may hold for relations of larger order type).'
- **Reported:** 2026-10-28 (10fede1)

### ISSUE-0002 [Open] Gentzen 1936 attribution and 'Schütte-style' ω-rule presentation
- **Category:** Supplement/remark error
- **Location:** supplement / 関連する結果, first bullet
- **Detail:** The claim that Gentzen (1936) proved Con(PA) in PRA + transfinite induction up to ε₀ restricted to quantifier-free formulas is essentially correct, but the accompanying statement that 'the method of this page (infinite derivations via the ω-rule) is a later reorganization due to Schütte et al.' is imprecise: the ω-rule/infinite-derivation formulation is due to Schütte and (independently) to the Schütte–Tait line of work, but Gentzen's own consistency proof already used ordinal assignment to derivations, and the ω-rule presentation is not merely a 'reorganization' of Gentzen's argument but a distinct (though equivalent in strength) framework. As stated it overstates the historical relation.
- **Proposed fix:** Rephrase: 'Gentzen (1936) assigned ordinals to PA-derivations and showed that cut-reduction decreases the ordinal, proving Con(PA) in PRA plus transfinite induction up to ε₀ (for quantifier-free formulas). The ω-rule / infinite-derivation formulation used on this page is a later framework developed by Schütte and others; it yields the same ordinal bound by a different route.'
- **Reported:** 2026-10-28 (10fede1)

### ISSUE-0003 [Open] Provably total functions bounded by Hardy hierarchy below ε₀
- **Category:** Supplement/remark error
- **Location:** supplement / 関連する結果, second bullet
- **Detail:** The statement that 'functions whose totality is provable in PA are bounded by functions of the fast-growing/Hardy hierarchy indexed below ε₀' is stated too loosely. The correct characterization is that the PA-provably total functions are exactly those elementary-descent/primitive-recursive-in-Hardy-hierarchy functions with indices below ε₀ (i.e. dominated by some H_α with α < ε₀), and the Hardy hierarchy (not the fast-growing hierarchy directly) is the standard tool; the fast-growing hierarchy F_α with α < ε₀ also characterizes them but the two hierarchies are not interchangeable at the level of the stated bound. The phrase '急増加階層（ハーディ階層など）' conflates the two.
- **Proposed fix:** Replace with: 'By the same method, the functions whose totality is provable in PA are exactly those dominated by some Hardy-hierarchy function H_α with α < ε₀ (equivalently, by some fast-growing function F_α with α < ε₀); see Arai §8.4.3.'
- **Reported:** 2026-10-28 (10fede1)

### ISSUE-0004 [Open] Boundedness lemma sharpness: 'ω-fold' gap claim
- **Category:** Supplement/remark error
- **Location:** problem pt:prob-boundedness-sharp / solution, last paragraph
- **Detail:** The solution concludes that 'the height of cut-free derivations and the rank agree up to an ω-fold difference'. But the constructed derivation has height ω·|n|_≺ + 3, while the boundedness lemma only gives |n|_≺ ≤ α. The gap between the lower bound ω·|n|_≺ and the lemma's bound is not an 'ω-fold difference' in a meaningful sense — the lemma's bound α is an arbitrary ordinal ≥ |n|_≺, and the construction shows a derivation of height ω·|n|_≺+3 exists, i.e. the *minimal* height is at most ω·|n|_≺+3 and at least |n|_≺. The phrase 'ω 倍の違いを除いて一致する' is imprecise: the true statement is that the minimal derivation height lies between |n|_≺ and ω·|n|_≺+3.
- **Proposed fix:** Replace the final sentence with: 'Together with the boundedness lemma (which gives |n|_≺ ≤ α for any derivation of n∈X of height α), this shows that the minimal height of a cut-free (prg)-derivation of n∈X lies between |n|_≺ and ω·|n|_≺+3.'
- **Reported:** 2026-10-28 (10fede1)

### ISSUE-0005 [Open] Step 2 soundness applied to a derivation with the (prg) rule
- **Category:** Logical gap
- **Location:** pt:gentzen-bound / Step 2
- **Detail:** Step 2 invokes the soundness of G_ω (the note after pt:g-omega, item 3) applied to ⊢^{ω+m}_{c} ¬Prog[≺,X], n∈X. But this derivation is in G_ω (from Step 1, via pt:pa-embedding), so soundness of G_ω applies — this is fine. However, the derivation obtained in Step 1 is a G_ω-derivation only because the embedding lemma produces G_ω-derivations; the subsequent cut with Prog in Step 3 introduces (prg). Step 2 itself is correct as stated (it uses the G_ω derivation from Step 1, before (prg) is introduced). No error here on re-reading; the soundness is applied to the G_ω derivation, which is legitimate.
- **Proposed fix:** No change needed; Step 2 correctly applies G_ω soundness to the G_ω derivation from Step 1 (before the (prg)-cut of Step 3).
- **Reported:** 2026-10-28 (10fede1)

### ISSUE-0006 [Open] Boundedness lemma requires ≺ well-founded but Step 4 applies it before well-foundedness is fully used
- **Category:** Missing hypothesis
- **Location:** pt:boundedness / statement; pt:gentzen-bound / Step 4
- **Detail:** The boundedness lemma assumes ≺ is well-founded (整礎). In Step 4 it is applied to conclude |n|_≺ ≤ α for all n. Well-foundedness of ≺ was established in Step 2, so the hypothesis is available. This is correctly handled; no gap.
- **Proposed fix:** No change needed; well-foundedness is established in Step 2 before the boundedness lemma is applied in Step 4.
- **Reported:** 2026-10-28 (10fede1)
