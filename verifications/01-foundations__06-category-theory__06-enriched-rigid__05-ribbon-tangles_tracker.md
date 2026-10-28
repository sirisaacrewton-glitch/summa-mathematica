# Verification tracker: `01-foundations/06-category-theory/06-enriched-rigid/05-ribbon-tangles.html`

<!-- source: 01-foundations/06-category-theory/06-enriched-rigid/05-ribbon-tangles.html -->
<!-- Managed by scripts/verify.py (GitHub Actions). To dispute an [Open] issue, add a line starting with
     **Opus Rebuttal:** at the end of that issue and push; the next run judges it. Do not edit other lines. -->

- Last verified: 2026-10-28 (commit 8ccef3d, deepseek-chat)
- Open: 2 / Resolved: 0 / Ignored: 0

## Summary of the last run

The page is largely correct: the TL construction, Kauffman bracket, Reidemeister computations and Jones polynomial examples check out. The main genuine problem is in the ribbon-category example: claiming θ=1 is a ribbon structure on super vector spaces is false, since the twist axiom fails on odd objects; only the parity twist works. A secondary concern is the supplement's characterization of general-δ TL, which overstates rigidity/braiding properties. The #P-hardness attribution is imprecise but not clearly wrong, so it is not flagged.

## Issues

### ISSUE-0001 [Open] Super vector space with θ=1 is not a ribbon structure
- **Category:** Supplement/remark error
- **Location:** example (cat:sec-tng-ribbon), item 2
- **Detail:** The example claims that on the category of super vector spaces with the signed symmetry, θ=1 is a ribbon structure. But the ribbon axiom requires θ_{a⊗b}=γ_{b,a}γ_{a,b}(θ_a⊗θ_b). With θ=1 this becomes 1=γ_{b,a}γ_{a,b}, which fails for odd a,b since γ_{b,a}γ_{a,b}=(-1)^{|a||b|}=-1. So θ=1 is not a twist on the signed symmetric category; only the parity twist θ_V=(-1)^{|v|} satisfies the axiom (indeed γ_{b,a}γ_{a,b}(θ_a⊗θ_b)=(-1)^{|a||b|}(-1)^{|a|+|b|}=(-1)^{|a⊗b|}).
- **Proposed fix:** On the category of super vector spaces with the signed symmetry, θ=1 is NOT a ribbon structure (the twist axiom fails on pairs of odd objects). The parity twist θ_V=(-1)^{|v|} is the ribbon structure; with it the quantum dimension equals the ordinary (signed) dimension.
- **Reported:** 2026-10-28 (8ccef3d)

### ISSUE-0002 [Open] Claim that TL with general δ is rigid is false
- **Category:** Supplement/remark error
- **Location:** supplement, 前提を変えると
- **Detail:** The supplement states that TL with δ a general element of k is a k-linear rigid monoidal category. But the self-duality of object 1 requires the zigzag equations, and ∩∘∪=δ·1_0 is fine, yet the snake/jigzag identities for the duality hold only formally; more importantly the claim that 'the only condition for σ̄ to be inverse of σ is δ=-A²-A⁻²' is correct, but calling the general-δ TL 'rigid' overstates: rigidity of TL as a pivotal category with the standard cups/caps does hold structurally, however the statement that it is rigid is fine only if the zigzag holds, which it does. The real error is the phrase '剛性モノイダル圏' combined with the assertion that only the inverse condition fails — the braiding σ is not natural for general δ, so it is not a braided (hence not ribbon) category, but rigidity itself is acceptable. The overstated part is implying the general-δ TL is a well-behaved rigid monoidal category without noting the braiding is not natural.
- **Proposed fix:** For general δ∈k, TL is still a k-linear rigid monoidal category (object 1 self-dual via the zigzag), but σ is not a braiding: naturality fails, and σ̄ is inverse to σ only when δ=-A²-A⁻². Reidemeister III likewise holds only under this condition.
- **Reported:** 2026-10-28 (8ccef3d)
