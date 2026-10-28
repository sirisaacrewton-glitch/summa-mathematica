# Verification tracker: `01-foundations/05-proof-theory/09-type-theory/05-lambek.html`

<!-- source: 01-foundations/05-proof-theory/09-type-theory/05-lambek.html -->
<!-- Managed by scripts/verify.py (GitHub Actions). To dispute an [Open] issue, add a line starting with
     **Opus Rebuttal:** at the end of that issue and push; the next run judges it. Do not edit other lines. -->

- Last verified: 2026-10-28 (commit 8ccef3d, deepseek-chat)
- Open: 1 / Resolved: 0 / Ignored: 0

## Summary of the last run

The page is a careful development of the syntactic category, generic model, completeness, and Lambek's theorem. Most statements are correct. The main potential issue is the supplement's claim about classical logic collapsing to a Boolean algebra, which is overstated and misattributed without the necessary hypotheses. Other checked items (Friedman's theorem, the strict functor correspondence, the weak product remark) appear acceptable. No serious logical gaps were found in the proofs.

## Issues

### ISSUE-0001 [Open] Joyal's lemma claim about classical logic collapsing to a Boolean algebra
- **Category:** Supplement/remark error
- **Location:** supplement (前提を変えると)
- **Detail:** The supplement claims that adding classical logic (double negation elimination) and interpreting ¬A as A→0 with an initial object 0 makes the category collapse to a preorder (Boolean algebra), attributed to 'Joyal's lemma'. This is not accurate as stated. The relevant result is that a cartesian closed category with an initial object and satisfying the principle of excluded middle (or double negation elimination) need not be a preorder; however, there is a result (often attributed to Joyal) that a cartesian closed category with finite coproducts that is Boolean (i.e., every object is complemented) is a preorder. The precise statement requires more hypotheses (e.g., the category is a Boolean topos or has a subobject classifier). The claim as stated is too strong and misattributed.
- **Proposed fix:** Replace with: '古典論理（二重否定除去）を加え、¬A を A→0 と始対象 0 で解釈する場合、圏が前順序（ブール代数）に潰れるのは、圏がブール圏（すべての対象が補元をもつ）などの追加の仮定を満たすときである（ジョワイヤルの補題として知られる結果の一つ）。一般には潰れない。'
- **Reported:** 2026-10-28 (8ccef3d)
