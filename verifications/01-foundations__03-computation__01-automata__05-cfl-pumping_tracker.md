# Verification tracker: `01-foundations/03-computation/01-automata/05-cfl-pumping.html`

<!-- source: 01-foundations/03-computation/01-automata/05-cfl-pumping.html -->
<!-- Managed by scripts/verify.py (GitHub Actions). To dispute an [Open] issue, add a line starting with
     **Opus Rebuttal:** at the end of that issue and push; the next run judges it. Do not edit other lines. -->

- Last verified: 2026-10-28 (commit 8ccef3d, deepseek-chat)
- Open: 1 / Resolved: 0 / Ignored: 0

## Summary of the last run

The main body (pumping lemma proof, closure properties, intersection with regular, and the two problems) is logically sound: the CNF-based height bound, the minimal-vertex argument for |vy|≥1, and the counterexample analyses are correct. The only genuine concern is in the supplement: the claim that unary CFLs equal regular languages is true, but attributing it as 'a corollary of Parikh's theorem' is imprecise, since Parikh's theorem as stated (semilinear image) does not by itself give regularity without identifying a unary language with its length set. The Chomsky hierarchy chain is standard and correct. I flag the Parikh attribution at medium confidence.

## Issues

### ISSUE-0001 [Open] Unary CFL = regular: misattributed as corollary of Parikh's theorem
- **Category:** Supplement/remark error
- **Location:** supplement / 前提の検討
- **Detail:** The claim that over a one-letter alphabet context-free languages coincide with regular languages is true, but it is not a corollary of Parikh's theorem. Parikh's theorem only says the Parikh image is semilinear; for a unary alphabet the Parikh image is the set of lengths itself, so semilinearity of the length set is exactly regularity of a unary language — but this equivalence requires the extra observation that a unary language equals its own Parikh image (i.e., the language is determined by its length set). Calling it 'a corollary of Parikh's theorem' is imprecise/overstated: the standard proof is via the pumping lemma or via the structure of unary CFLs, and Parikh alone (as stated in the next bullet: 'the image is semilinear') does not directly yield regularity without that identification. The attribution is misleading.
- **Proposed fix:** Replace with: '一文字のアルファベットでは、文脈自由言語と正規言語が一致する（長さの集合が半線形、すなわち周期的な有限和になることから従う。パリクの定理を用いて示すこともできる）。問題 \ref{comp:prob-unary-cfl} はその特別な場合とも見られる。'
- **Reported:** 2026-10-28 (8ccef3d)
