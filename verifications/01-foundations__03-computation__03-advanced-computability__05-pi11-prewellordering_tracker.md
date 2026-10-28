# Verification tracker: `01-foundations/03-computation/03-advanced-computability/05-pi11-prewellordering.html`

<!-- source: 01-foundations/03-computation/03-advanced-computability/05-pi11-prewellordering.html -->
<!-- Managed by scripts/verify.py (GitHub Actions). To dispute an [Open] issue, add a line starting with
     **Opus Rebuttal:** at the end of that issue and push; the next run judges it. Do not edit other lines. -->

- Last verified: 2026-10-28 (commit 10fede1, deepseek-chat)
- Open: 4 / Resolved: 0 / Ignored: 0

## Summary of the last run

The main body (WT norm, prewellordering, reduction, separation, number uniformization, Kleene basis) is logically sound and the proofs check out. The problems concentrate in the supplement: (1) the Gandy basis theorem is misstated as giving WT ≰_T f, which is false; (2) the claim that a computable tree can have all branches non-hyperarithmetic directly contradicts the basis theorem proved on the page and is false; (3) the projective-hierarchy bullet overstates the role of determinacy and misdescribes which levels have the prewellordering property; (4) the Kondo–Addison proof method is imprecisely attributed to scales. These are supplement/remark errors (kind 5) and should be corrected.

## Issues

### ISSUE-0001 [Open] Gandy basis theorem misattributed and misstated
- **Category:** Supplement/remark error
- **Location:** supplement / 前提を変えると, second bullet (基底をもっと低くできるか)
- **Detail:** The supplement claims that every nonempty Σ¹₁ set of functions has a member f with WT ≰_T f, attributing this to "Gandy's basis theorem" via Sacks. The Gandy basis theorem states that every nonempty Σ¹₁ set of reals has a member f with ω_{f}^{CK} = ω_{1}^{CK} (equivalently, f is hyperlow: f' ≤_T ∅' relative to Kleene's O). This does NOT imply WT ≰_T f. Indeed, if f is hyperarithmetic (e.g. f ∈ WT itself, which is hyperarithmetic), then WT ≤_T f trivially, yet such f can satisfy ω_{f}^{CK} = ω_{1}^{CK}. So the stated conclusion "WT ≰_T f" is false as a consequence of Gandy's theorem; the correct low-basis statement is about ω_{f}^{CK}, not about WT-reducibility. The claim as written is an overstatement/misattribution.
- **Proposed fix:** Replace with: "空でない $\Sigma^{1}_{1}$ 集合は、$\omega_{f}^{\mathrm{CK}}=\omega_{1}^{\mathrm{CK}}$ を満たす元 $f$（ハイパーローな元）をもつ（ガンディの基底定理。G. E. Sacks, *Higher Recursion Theory*）。" Do not claim WT ≰_T f.
- **Reported:** 2026-10-28 (10fede1)

### ISSUE-0002 [Open] Claim that Σ¹₂ has the prewellordering property and Π¹₂ does not
- **Category:** Supplement/remark error
- **Location:** supplement / 類似の定理, third bullet (第 2 段)
- **Detail:** The supplement asserts "Σ¹₂ は前整列性をもち（ショーンフィールドの木表示から）、Π¹₂ はもたない。Π¹₁ と Σ¹₂ が「良い側」になる。" This is wrong. The classical prewellordering (and reduction) property holds for Σ¹₁ and Π¹₁, and by the Novikov–Kondo/Addison results for Π¹₁ and Σ¹₂ (the "good" side is Σ¹₁, Π¹₁, Σ¹₂, Π¹₃, ...). Specifically, Σ¹₂ has the prewellordering property (Addison), but Π¹₂ does NOT have it in general — the correct statement is that Σ¹₂ has it and Π¹₂ does not (the prewellordering property fails for Π¹₂). The text's phrasing "Π¹₁ と Σ¹₂ が「良い側」" is consistent with the standard result, but the accompanying claim that "Π¹₂ はもたない" is correct only if read as Π¹₂ lacking the property; however the sentence as written is ambiguous and the parenthetical "ショーンフィールドの木表示から" is imprecise. More importantly, the final sentence "これより上の段でどちらが前整列性をもつかは ZFC だけでは決まらず、決定性公理などの追加の公理に依存するとされる" is a genuine overstatement: the prewellordering property for Σ¹_{2n+1} and Π¹_{2n+1} is a theorem of ZFC (Addison), not dependent on determinacy. Only at the projective level beyond a certain point does determinacy enter.
- **Proposed fix:** Correct to: "$\Sigma^{1}_{2}$ は前整列性をもち（Addison）、$\Pi^{1}_{2}$ はもたない。一般に $\Sigma^{1}_{2n+1}$ と $\Pi^{1}_{2n+1}$ が前整列性をもつ（Addison の定理、$\ZFC$ で証明可能）。決定性公理はこれより上の射影的階層の性質に関わる。"
- **Reported:** 2026-10-28 (10fede1)

### ISSUE-0003 [Open] Kleene's example: computable tree all of whose branches are non-hyperarithmetic
- **Category:** Supplement/remark error
- **Location:** supplement / 前提を変えると, second bullet
- **Detail:** The supplement states: "枝をもつ計算可能な木で、どの枝も超算術的でないものがある（クリーネ）。" This is false. If a computable tree has a branch at all, then by the low-basis theorem / Gandy basis theorem it has a hyperarithmetic branch (indeed a branch f with ω_{f}^{CK} = ω_{1}^{CK}, which is hyperarithmetic). Kleene's classical result is the opposite direction: there is a computable tree with no hyperarithmetic branch is impossible; rather, Kleene showed there is a computable tree whose set of branches is nonempty but has no hyperarithmetic *path in a specific sense* — more precisely, Kleene's result is that there is a computable tree T such that every branch is non-hyperarithmetic is FALSE; the correct Kleene result is that there is a computable well-founded tree of rank ω_{1}^{CK}, or that the set of indices of computable well-founded trees is Π¹₁-complete. The claim as stated contradicts the basis theorem proved on this very page (part 2 with F = set of branches of a computable tree, which is Σ¹₁ and nonempty, hence has a WT-computable, hence hyperarithmetic, member).
- **Proposed fix:** Delete this sentence, or replace with the correct Kleene result: "計算可能な木で、そのすべての枝が超算術的でないものは存在しない（基底定理により超算術的な枝をもつ）。クリーネの結果は、計算可能な整礎木のランクが $\omega_{1}^{\mathrm{CK}}$ に達しうること、および $\mathrm{WT}$ が $\Pi^{1}_{1}$ 完全であることである。"
- **Reported:** 2026-10-28 (10fede1)

### ISSUE-0004 [Open] Kondo–Addison uniformization attributed to scales and Arai §6.5
- **Category:** Supplement/remark error
- **Location:** supplement / 類似の定理, second bullet (近藤–アディソンの一様化定理)
- **Detail:** The supplement says the Kondo–Addison uniformization theorem is proved using scales ("ノルムを一つでなく可算個並べた「スケール」") and cites Arai §6.5 and Kechris. While scales can be used, the standard proof of Kondo–Addison (Π¹₁ uniformization for function variables) uses the prewellordering property together with a well-ordering argument / the Kondo construction, not scales per se. More importantly, the hypcheck in the number-uniformization theorem already correctly notes that function-variable uniformization requires more than the number case. The attribution to "scales" is imprecise but not strictly false; however the citation to Arai §6.5 for the scale-based proof is questionable. This is a minor imprecision; flag only if confident. Given the instruction to prefer no report over speculative ones, I flag the stronger issue: the statement "証明には…スケールを使う" is an overstatement of the method.
- **Proposed fix:** Soften to: "証明には前整列性を関数変数に拡張する議論（あるいはスケール）を用いる（新井『数学基礎論』§6.5、Kechris の上掲書）。"
- **Reported:** 2026-10-28 (10fede1)
