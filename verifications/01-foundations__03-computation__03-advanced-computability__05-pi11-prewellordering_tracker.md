# Verification tracker: `01-foundations/03-computation/03-advanced-computability/05-pi11-prewellordering.html`

<!-- source: 01-foundations/03-computation/03-advanced-computability/05-pi11-prewellordering.html -->
<!-- Managed by scripts/verify.py (GitHub Actions). To dispute an [Open] issue, add a line starting with
     **Opus Rebuttal:** at the end of that issue and push; the next run judges it. Do not edit other lines. -->

- Last verified: 2026-10-28 (commit 8ccef3d, deepseek-chat)
- Open: 5 / Resolved: 0 / Ignored: 0

## Summary of the last run

The core theorems (prewellordering, reduction, separation, number uniformization, Kleene basis) and their proofs are essentially correct and well-supported by the cited results. The serious problems are concentrated in the supplement: the Gandy basis theorem is misattributed and misstated (the claim about WT ≰_T f is not Gandy's theorem), and the Kleene claim that a computable tree can have no hyperarithmetic branch directly contradicts the page's own Kleene basis theorem. The Σ¹₂/Π¹₂ prewellordering remark is overstated, and the countable-choice remark is imprecise. These supplement errors should be corrected.

## Issues

### ISSUE-0001 [Open] Gandy basis theorem misattributed and misstated
- **Category:** Supplement/remark error
- **Location:** supplement / 前提を変えると (基底をもっと低くできるか)
- **Detail:** The supplement claims that every nonempty Σ¹₁ set has a member f with WT ≰_T f, attributing this to Gandy's basis theorem (citing Sacks). Gandy's basis theorem states that every nonempty Σ¹₁ set of reals has a member hyperarithmetic in Kleene's O (i.e., hyperarithmetic), not one that fails to compute WT. The claim that a member with WT ≰_T f exists is not Gandy's theorem and is not generally true as stated (e.g., a Σ¹₁ set all of whose members compute WT would be a counterexample; the assertion needs a genuine argument and is not what the cited theorem says). The attribution and the statement are both wrong.
- **Proposed fix:** Replace with the correct statement: "空でない $\Sigma^{1}_{1}$ 集合はクリーネの $\mathcal{O}$（すなわち $\mathrm{WT}$）で計算可能な元をもつ（ガンディの基底定理、G. E. Sacks, *Higher Recursion Theory*）。したがってその元は超算術的である。" Remove the claim about $\mathrm{WT}\not\le_{\mathrm{T}}f$.
- **Reported:** 2026-10-28 (8ccef3d)

### ISSUE-0002 [Open] Kleene claim: computable tree with no hyperarithmetic branch
- **Category:** Supplement/remark error
- **Location:** supplement / 前提を変えると (超算術的な元をもつとは限らない)
- **Detail:** The supplement states that there is a computable tree with a branch such that no branch is hyperarithmetic, attributed to Kleene. This is false: by the Kleene basis theorem (part 1 of this very page), a computable tree with a branch has a branch computable in WT, hence hyperarithmetic. So every computable ill-founded tree has a hyperarithmetic branch. The intended true statement is that there is a computable (or Σ¹₁) tree all of whose branches are non-hyperarithmetic is impossible; what is true is that there are computable trees with branches but no computable branch (Kleene), or Σ¹₁ sets with no hyperarithmetic member is also false. The claim as written contradicts the page's own theorem.
- **Proposed fix:** Replace with the correct statement: "一方、計算可能な木で枝をもつが計算可能な枝をもたないものがある（クリーネ）。ただし基底定理により、そのような木も $\mathrm{WT}$ で計算可能な（したがって超算術的な）枝をもつ。"
- **Reported:** 2026-10-28 (8ccef3d)

### ISSUE-0003 [Open] Σ¹₂ prewellordering and Π¹₂ failure claim
- **Category:** Supplement/remark error
- **Location:** supplement / 類似の定理 (第 2 段)
- **Detail:** The supplement asserts that Σ¹₂ has the prewellordering property (from the Schoenfield tree representation) and Π¹₂ does not, and that Π¹₁ and Σ¹₂ are the 'good side'. This is imprecise/incorrect: the prewellordering property holds for Σ¹₂ (and Π¹₁), but the standard statement is that Σ¹₂ has the prewellordering property while Π¹₂ does not; however the claim that 'Σ¹₂ has it from Schoenfield tree representation' conflates the scale property with prewellordering, and the assertion that 'Π¹₂ does not have it' is not a theorem of ZFC alone in the way stated—the prewellordering property for Π¹₂ is independent. The blanket statement 'Π¹₂ はもたない' is overstated.
- **Proposed fix:** Restate: "$\Sigma^{1}_{2}$ は前整列性（実際スケール性）をもつ（ショーンフィールド）。$\Pi^{1}_{2}$ が前整列性をもつかは $\ZFC$ では決まらない。"
- **Reported:** 2026-10-28 (8ccef3d)

### ISSUE-0004 [Open] Boldface correspondence: 'Kuratowski' reduction and 'Lusin' separation attributions
- **Category:** Supplement/remark error
- **Location:** supplement / 類似の定理 (ボールド体の対応物)
- **Detail:** The supplement says that relativizing gives: coanalytic prewellordering, coanalytic reduction (Kuratowski), and analytic separation (Lusin). The coanalytic (boldface Π¹₁) reduction property is due to Kuratowski, and analytic separation (boldface Σ¹₁ separation) is due to Lusin—these attributions are essentially correct. However the claim that '前整列性・縮小性・分離定理はそれぞれ…になる' pairs them as if the boldface prewellordering for coanalytic sets is a separate named result; the coanalytic prewellordering property is standard but the parallel is stated loosely. This is borderline; the main issue is that the boldface Σ¹₁ separation theorem (Lusin) requires the sets to be disjoint analytic, which is fine. I flag only the loose parallel, low severity.
- **Proposed fix:** Clarify: "相対化すると、余解析集合の前整列性、余解析集合の縮小性（クラトフスキー）、交わらない解析集合の分離定理（ルジン）が得られる。"
- **Reported:** 2026-10-28 (8ccef3d)

### ISSUE-0005 [Open] Hypcheck claim that countable choice is used only for number-quantifier closure
- **Category:** Supplement/remark error
- **Location:** notation / hypcheck of comp:pi11-number-uniformization
- **Detail:** The notation says countable choice is used 'only for closure under number quantifiers', and the hypcheck of the uniformization theorem says closure under ∀m uses countable choice (citing quantifier-absorption.3 dual). But the closure of Π¹₁ under number quantifiers does not require countable choice—it is provable in ZF (the analytical hierarchy closure under number quantifiers is elementary). The claim that countable choice is needed here is an overstatement.
- **Proposed fix:** Remove the claim that countable choice is needed for number-quantifier closure, or state that the metatheory is ZF (countable choice is not actually needed for these closure properties).
- **Reported:** 2026-10-28 (8ccef3d)
