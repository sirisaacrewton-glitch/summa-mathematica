# Verification tracker: `01-foundations/04-set-theory/08-iterated-forcing/05-iterated-forcing.html`

<!-- source: 01-foundations/04-set-theory/08-iterated-forcing/05-iterated-forcing.html -->
<!-- Managed by scripts/verify.py (GitHub Actions). To dispute an [Open] issue, add a line starting with
     **Opus Rebuttal:** at the end of that issue and push; the next run judges it. Do not edit other lines. -->

- Last verified: 2026-10-28 (commit 8ccef3d, deepseek-chat)
- Open: 4 / Resolved: 0 / Ignored: 0

## Summary of the last run

(none)

## Issues

### ISSUE-0001 [Open] Countable-support iteration with cf(α)=ω₁ and |S|<cf(α) is misapplied
- **Category:** Supplement/remark error
- **Location:** supplement / 前提の検討, last bullet (and cf. set:iteration-small-sets)
- **Detail:** The supplement claims that set:iteration-small-sets applies to countable support iteration when cf(α)=ω₁, because countable subsets in J are bounded. But the lemma requires |S| < cf(α) computed in M[G]. With cf(α)=ω₁, the only sets satisfying |S|<ω₁ are countable, so the lemma gives nothing about sets of size ω₁ (e.g. reals are fine, but the phrasing suggests broader applicability). More importantly, the claim that 'countable subsets of J are bounded' is only true when α has uncountable cofinality; if α=ω (cf(α)=ω), countable subsets of ω are not bounded, so the parenthetical justification is false in that case. The statement as written overstates the applicability.
- **Proposed fix:** Restrict the remark: 'For countable support iteration with cf(α)=ω₁ (so α has uncountable cofinality), every countable subset of α is bounded, hence the hypothesis that J-members are bounded holds; the lemma then applies to sets S with |S|<ω₁ in M[G], i.e. countable S.' Also note that for α=ω the boundedness hypothesis fails.
- **Reported:** 2026-10-28 (8ccef3d)

### ISSUE-0002 [Open] Claim that P*π and P*π' need not be isomorphic but have isomorphic completions
- **Category:** Supplement/remark error
- **Location:** supplement / 有限台反復の「標準性」
- **Detail:** The text states: '𝟙 ⊩ π=π' (including agreement of maximum and order) implies P*π and P*π' are not necessarily isomorphic but have isomorphic completions.' If 𝟙 forces π=π' as partial orders with the same maximum, then the identity map on P × dom(π) is essentially an isomorphism of P*π and P*π' (the underlying sets of names may differ, but the resulting posets are isomorphic via the identity on conditions, since the order relation p ⊩ τ ≤_π σ is determined by the forced equality π=π'). The claim that they 'need not be isomorphic' is therefore false under the stated hypothesis (agreement of maximum and order).
- **Proposed fix:** Correct to: 'If 𝟙 ⊩ π=π' (as partial orders with the same maximum), then P*π and P*π' are isomorphic. The completion remark is relevant only when π and π' are merely forced to name isomorphic posets without being forced equal.'
- **Reported:** 2026-10-28 (8ccef3d)

### ISSUE-0003 [Open] Backwards Easton forcing and Silver's theorem attribution
- **Category:** Supplement/remark error
- **Location:** supplement / 逆イーストン強制
- **Detail:** The text attributes to Kunen the claim that backwards Easton forcing was used by Silver to obtain consistency results about failures of GCH at large cardinals, and that such results cannot be obtained by forwards Easton forcing. This is a strong historical/mathematical attribution stated without proof and without a precise citation. Silver's theorem on GCH failures at large cardinals is usually proved by other methods (e.g. Radin forcing, or Silver's own methods), and the claim that forwards Easton forcing 'cannot' give such results is not a standard established fact in the literature in this generality. As stated it is an unsupported and likely overstated attribution.
- **Proposed fix:** Soften to: 'According to Kunen, backwards Easton forcing is needed for certain consistency results on the failure of GCH at large cardinals (attributed to Silver); the precise statement and its comparison with forwards Easton forcing should be checked against the original source.'
- **Reported:** 2026-10-28 (8ccef3d)

### ISSUE-0004 [Open] Fibre-bundle analogy: 'inverse limit' and 'subspace' link is misleading
- **Category:** Supplement/remark error
- **Location:** supplement / 高い視点から：ファイバー束としての二段階反復
- **Detail:** The supplement says the limit stage selects 'the inverse limit of the tower' by restricting supports, and links '部分空間' (top:subspace) to 'inverse limit'. This is imprecise: the limit of an iteration with restricted supports is not in general an inverse limit of the earlier stages (for finite support it is a direct limit/union; for countable support it is a subset of the inverse limit, not the inverse limit itself). The link to the topological 'subspace' definition is a mechanically inserted pointer that does not correspond to any actual inverse-limit construction. Since the passage disclaims being a strict categorical correspondence, the main issue is the incorrect identification of the limit with an inverse limit and the improper link.
- **Proposed fix:** Replace with: 'At limit stages the support restriction selects a subset of the inverse limit of the tower of earlier stages (for finite supports this subset is the whole direct limit/union; for countable supports it is a proper subset in general).' Remove the \term[部分空間]{top:subspace} link, which does not correspond to the construction.
- **Reported:** 2026-10-28 (8ccef3d)
