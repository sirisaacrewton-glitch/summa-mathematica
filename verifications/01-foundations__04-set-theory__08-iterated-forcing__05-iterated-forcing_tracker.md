# Verification tracker: `01-foundations/04-set-theory/08-iterated-forcing/05-iterated-forcing.html`

<!-- source: 01-foundations/04-set-theory/08-iterated-forcing/05-iterated-forcing.html -->
<!-- Managed by scripts/verify.py (GitHub Actions). To dispute an [Open] issue, add a line starting with
     **Opus Rebuttal:** at the end of that issue and push; the next run judges it. Do not edit other lines. -->

- Last verified: 2026-10-28 (commit 10fede1, deepseek-chat)
- Open: 6 / Resolved: 0 / Ignored: 0

## Summary of the last run

The main theorems and proofs (two-step factorization, κ-c.c. preservation, finite-support iteration, small-sets lemma) are essentially correct and their citations match the label table. The problems concentrate in the side remarks: the supplement's fibre-bundle analogy contains a wrong link (topological subspace for 'inverse limit') and misdescribes finite-support limits as inverse limits; the claim that backwards Easton forcing is what Silver used, with forwards Easton unable to give it, is overstated; the Cohen poset identification with a finite-support iteration is only valid for α ≤ ω; and two hypcheck bullets misstate the countable-support/full-limit counterexamples (no counterexample at ξ=ω for countable support, and the full-limit collapse of ω₁ does not follow from non-ccc factors alone).

## Issues

### ISSUE-0001 [Open] Countable-support iteration with cf(α)=ω₁ and |S|<ω₁
- **Category:** Supplement/remark error
- **Location:** supplement / 前提の検討, last bullet (set:iteration-small-sets)
- **Detail:** The supplement claims that set:iteration-small-sets applies to countable support iteration when cf(α)=ω₁, because countable sets in 𝒥 are bounded. But the lemma requires |S| < cf(α) computed in M[G]. With cf(α)=ω₁ this means |S| ≤ ω, i.e. S countable in M[G]. The parenthetical only verifies the boundedness hypothesis on 𝒥, not the size hypothesis; the statement as written suggests applicability in a generality that the lemma does not give (e.g. S of size ω₁ in M[G] is excluded).
- **Proposed fix:** In countable support iteration with cf(α)=ω₁ the lemma applies only to S with |S| ≤ ω in M[G] (e.g. S=ω, giving that every real appears at some earlier stage); the boundedness of countable sets in 𝒥 supplies the other hypothesis.
- **Reported:** 2026-10-28 (10fede1)

### ISSUE-0002 [Open] Backwards Easton forcing and Silver's theorem
- **Category:** Supplement/remark error
- **Location:** supplement / 逆イーストン強制
- **Detail:** The text says backwards Easton forcing 'often collapses cardinals even if M satisfies GCH', and that Silver used it for consistency results on the failure of GCH at large cardinals (weakly compact and above), results not obtainable by forwards Easton forcing. As stated this is imprecise/overstated: the standard point is that the backwards (and general) Easton iteration is needed because the forwards product/iteration does not reach the required generality, and the attribution of a specific Silver theorem to 'backwards Easton forcing' with the claim that forwards Easton 'cannot' give it is stronger than what the literature supports. Since this is an unproved side remark attributed to Kunen, it should be stated more cautiously.
- **Proposed fix:** Backwards Easton forcing is a genuinely iterated construction (the poset at stage ξ is evaluated in the extension by PP_ξ), and it is used, e.g. in Silver's work, to obtain consistency results about the behaviour of the continuum function at large cardinals that are not accessible to the simple forwards Easton product.
- **Reported:** 2026-10-28 (10fede1)

### ISSUE-0003 [Open] Fibre-bundle analogy: inverse limit and subspace link
- **Category:** Supplement/remark error
- **Location:** supplement / 高い視点から：ファイバー束としての二段階反復
- **Detail:** The analogy says that at limit stages one restricts supports to select the 'inverse limit' of the tower, and links '部分空間' (top:subspace) to 'inverse limit'. The link target top:subspace is the topological subspace definition, which has nothing to do with inverse limits of forcing towers; this is a mechanically inserted link to the wrong notion. Moreover, for finite support the limit is a direct limit (union), not an inverse limit, so calling the limit '逆極限' is misleading even as a metaphor.
- **Proposed fix:** At limit stages the support restriction selects which threads of the tower are kept; for finite support this is a direct limit (the union of the earlier stages), while full/countable limits behave more like an inverse limit. (Remove the link to the topological subspace definition.)
- **Reported:** 2026-10-28 (10fede1)

### ISSUE-0004 [Open] Full limit with non-ccc factors collapses ω₁
- **Category:** Unsupported fact
- **Location:** hypcheck after set:fs-iteration-cc, first bullet
- **Detail:** The hypcheck states that if 1 ⊩ (π_n is not c.c.c.) for each n<ω, then the full-limit PP_ω is not c.c.c. and in fact collapses ω₁, attributed to Kunen as an exercise. The claim that the full limit collapses ω₁ is not justified and is not a standard consequence of the stated hypothesis alone (non-ccc factors need not collapse ω₁; e.g. a Suslin tree is ccc, but a non-ccc factor such as a special Aronszajn tree or a poset adding a function ω→ω₁ need not collapse ω₁). The statement is stronger than what the hypothesis supports.
- **Proposed fix:** If 1 ⊩ (π_n is not κ-c.c.) for each n<ω, the full-limit iteration PP_ω need not be κ-c.c.; in particular the finite-support hypothesis in set:fs-iteration-cc cannot be replaced by full limits. (Whether ω₁ is collapsed depends on the specific π_n and must be checked case by case.)
- **Reported:** 2026-10-28 (10fede1)

### ISSUE-0005 [Open] Countable support with κ=ω₂ and CH: 'counterexample at ξ=ω'
- **Category:** Supplement/remark error
- **Location:** hypcheck after set:fs-iteration-cc, second bullet
- **Detail:** The bullet says that for countable support with κ=ω₂ and M ⊨ CH the same argument fails because the root r may be cofinal in ξ, and that 'there is a counterexample at ξ=ω' according to Kunen. But at ξ=ω a countable support limit coincides with the finite support limit (all supports are finite), so there can be no counterexample at ξ=ω; the failure of the Δ-system argument for countable supports occurs at limits of uncountable cofinality (e.g. ξ=ω₁), not at ω. The stated location of the counterexample is wrong.
- **Proposed fix:** For countable support the Δ-system argument breaks down at limits ξ of uncountable cofinality, where the root r can be cofinal in ξ and no ζ<ξ with r⊆ζ need exist; the case ξ=ω is not a counterexample since countable support and finite support limits coincide there.
- **Reported:** 2026-10-28 (10fede1)

### ISSUE-0006 [Open] Cohen poset as finite-support iteration of Fn(1,2)
- **Category:** Supplement/remark error
- **Location:** supplement / 積の構成の再解釈, first bullet
- **Detail:** The claim that Fn(α,2) is isomorphic to the finite-support iteration of the 3-element poset Fn(1,2) α times is only correct for α ≤ ω (or when α is finite/countable with the right support convention); for uncountable α the finite-support iteration of Fn(1,2) is the poset of finite partial functions from a finite subset of α into 2, which is Fn(α,2,ω) (finite conditions), not Fn(α,2) (which usually means conditions of size <ω with the standard convention, but for α uncountable the identification with a finite-support iteration requires the factors to be Fn(1,2) and the support to be finite, giving finite conditions). As stated without restriction on α it is imprecise.
- **Proposed fix:** For α ≤ ω (in particular α=ω), Fn(α,2) is isomorphic to the finite-support iteration of Fn(1,2) α times; for uncountable α the finite-support iteration of Fn(1,2) gives the poset of finite partial functions, i.e. Fn(α,2,ω), not Fn(α,2) with countable conditions.
- **Reported:** 2026-10-28 (10fede1)
