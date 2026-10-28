# Verification tracker: `01-foundations/04-set-theory/02-infinitary-combinatorics/08-trees.html`

<!-- source: 01-foundations/04-set-theory/02-infinitary-combinatorics/08-trees.html -->
<!-- Managed by scripts/verify.py (GitHub Actions). To dispute an [Open] issue, add a line starting with
     **Opus Rebuttal:** at the end of that issue and push; the next run judges it. Do not edit other lines. -->

- Last verified: 2026-10-28 (commit 8ccef3d, deepseek-chat)
- Open: 6 / Resolved: 0 / Ignored: 0

## Summary of the last run

The main body (definitions, König's lemma, the Aronszajn construction, well-pruned trees) is largely correct. The problems concentrate in the supplements: the Baumgartner special-Aronszajn claim needs MA(ω₁) rather than MA + ¬CH, the Specker and Mitchell/weak-compactness statements are imprecise about hypotheses, the AC remark in König's hypcheck overstates the role of choice, and the Fodor application in the final generalization is not justified as stated.

## Issues

### ISSUE-0001 [Open] Special Aronszajn trees under MA + ¬CH
- **Category:** Supplement/remark error
- **Location:** supplement after set:aronszajn-exists
- **Detail:** The supplement claims that under MA + ¬CH every Aronszajn tree is special (Baumgartner). This is false: MA(ω₁) implies every Aronszajn tree is special, but MA + ¬CH alone (i.e. MA for all κ < 2^ω) does not suffice; the correct hypothesis is MA(ω₁) (equivalently 2^ω > ω₁ with MA(ω₁)). The statement as written is stronger than the literature supports.
- **Proposed fix:** Under MA(ω₁) (in particular under MA + ¬CH) every Aronszajn tree is special (Baumgartner's theorem; Kunen, *Set Theory*, Ch. II Exercise 41).
- **Reported:** 2026-10-28 (8ccef3d)

### ISSUE-0002 [Open] Specker's construction hypotheses
- **Category:** Supplement/remark error
- **Location:** supplement after set:aronszajn-exists
- **Detail:** The claim that for κ = λ⁺ with λ regular and 2^{<λ} = λ one gets a κ-Aronszajn tree by replacing ω with λ and requiring the range to be non-stationary is stated too strongly: the standard Specker construction requires λ^{<λ} = λ (or at least λ^{ω} = λ type hypotheses), and the non-stationary-range condition is the correct device only when λ is uncountable regular; the stated hypothesis 2^{<λ} = λ is insufficient in general.
- **Proposed fix:** If κ = λ⁺ with λ regular and λ^{<λ} = λ, then replacing ω by λ in the construction and requiring each s_{α} to have non-stationary range in λ yields a κ-Aronszajn tree (Specker; Kunen Ch. II Exercise 37).
- **Reported:** 2026-10-28 (8ccef3d)

### ISSUE-0003 [Open] Weak compactness and κ-Aronszajn trees
- **Category:** Supplement/remark error
- **Location:** supplement after set:aronszajn-exists
- **Detail:** The sentence 'the nonexistence of a κ-Aronszajn tree for strongly inaccessible κ is equivalent to κ being weakly compact' is imprecise: the correct equivalence is that κ is weakly compact iff there is no κ-Aronszajn tree, and this requires κ to be uncountable and inaccessible (the equivalence is standard, but the phrasing 'strongly inaccessible' plus the surrounding attribution to Kunen Exercise 49 is loose). More importantly, the preceding sentence about ω₂-Aronszajn trees and Mitchell 1972 is stated without the needed large-cardinal hypothesis being precise.
- **Proposed fix:** For an uncountable inaccessible κ, κ is weakly compact iff there is no κ-Aronszajn tree (Kunen Ch. II Exercise 49). The nonexistence of an ω₂-Aronszajn tree is equiconsistent with a weakly compact cardinal (Mitchell 1972).
- **Reported:** 2026-10-28 (8ccef3d)

### ISSUE-0004 [Open] König's lemma does not need AC here
- **Category:** Supplement/remark error
- **Location:** hypcheck of set:konig-tree-lemma
- **Detail:** The hypcheck says AC is used in Step 3 to choose x_{n+1}, and that it is unnecessary if T has a fixed well-order. But the proof already fixes a well-order of T ('T の整列順序を 1 つ固定し'), so the appeal to AC is redundant; more importantly the statement '（AC）' in the lemma is misleading since König's lemma for ω-trees is provable in ZF. This is an overstatement of the role of AC.
- **Proposed fix:** König's lemma for ω-trees is provable in ZF: fixing a well-order of T (available since T is a set) lets one choose the least suitable z at each stage, so no choice is needed.
- **Reported:** 2026-10-28 (8ccef3d)

### ISSUE-0005 [Open] Well-pruned subtree preserves Suslin/Aronszajn
- **Category:** Supplement/remark error
- **Location:** supplement after set:well-pruned-exists
- **Detail:** The supplement claims chains and antichains of a subtree are chains and antichains of the original tree, hence a κ-subtree of a κ-Suslin (κ-Aronszajn) tree is again κ-Suslin (κ-Aronszajn). For Aronszajn this is fine, but for Suslin it needs that the subtree has size κ (given) AND that all its chains/antichains are < κ — true since they are subsets of the original ones. However the phrase 'κ-部分木' is used loosely: T'' is a κ-tree, not merely a κ-sized subtree, and the argument that T'' is a κ-tree was established in the lemma. The claim is essentially correct but the justification '部分木の鎖・反鎖はもとの木の鎖・反鎖' alone does not give |T''| = κ without the κ-tree property; as written it is slightly imprecise.
- **Proposed fix:** Since T'' is a κ-tree (previous lemma) we have |T''| = κ, and every chain/antichain of T'' is one of T, hence of size < κ; so T'' is again κ-Suslin (κ-Aronszajn).
- **Reported:** 2026-10-28 (8ccef3d)

### ISSUE-0006 [Open] Generalization to λ < κ uses Fodor incorrectly
- **Category:** Supplement/remark error
- **Location:** supplement after set:well-pruned-extend
- **Detail:** The supplement says that assuming only branching below λ one finds for each α with cf(α)=λ a stage q(α) < α below which no branching to α occurs, and then applies Fodor's lemma (set:fodor) to derive a contradiction. Fodor's lemma applies to regressive functions on a stationary subset of a regular cardinal; here the set of α with cf(α)=λ is not stationary in κ in general (it is not stationary when λ < κ and κ is regular, e.g. the set of α<κ with cf(α)=λ can be non-stationary), so the cited application is not justified as stated.
- **Proposed fix:** The correct argument uses that {α < κ : cf(α) = λ} is stationary in κ when λ < κ is regular (a standard fact), and then Fodor's lemma applied to the regressive map α ↦ q(α) yields the contradiction.
- **Reported:** 2026-10-28 (8ccef3d)
