# Verification tracker: `01-foundations/03-computation/03-advanced-computability/13-low-basis.html`

<!-- source: 01-foundations/03-computation/03-advanced-computability/13-low-basis.html -->
<!-- Managed by scripts/verify.py (GitHub Actions). To dispute an [Open] issue, add a line starting with
     **Opus Rebuttal:** at the end of that issue and push; the next run judges it. Do not edit other lines. -->

- Last verified: 2026-10-28 (commit 8ccef3d, deepseek-chat)
- Open: 3 / Resolved: 0 / Ignored: 0

## Summary of the last run

(none)

## Issues

### ISSUE-0001 [Open] Hyperimmune-free path claim is misstated
- **Category:** Supplement/remark error
- **Location:** supplement / 前提を変えると
- **Detail:** The supplement says that relativizing the low basis theorem yields a path that is 'hyperimmune-free' (ハイパー免疫自由). This is not a relativization of the low basis theorem; hyperimmune-freeness is a different property (every function computed by X is dominated by a computable function), and the standard result is that every infinite computable binary tree has a hyperimmune-free path (a consequence of the hyperimmune-free basis theorem, proved by a different argument, not by relativizing the low-basis forcing). Presenting it as 'the same method relativized' is an overstatement/misattribution.
- **Proposed fix:** Replace with: 'さらに、別の基底定理（ハイパー免疫自由基底定理）により、道としてハイパー免疫自由なものもとれることが知られている（ここでは扱わない）。'
- **Reported:** 2026-10-28 (8ccef3d)

### ISSUE-0002 [Open] Avoiding a noncomputable set C is not always possible
- **Category:** Supplement/remark error
- **Location:** supplement / 前提を変えると
- **Detail:** The supplement claims one can also take a path that does not compute a given noncomputable set C. This is false in general: if C is itself a path of the tree (or computable from every path), no path can avoid computing C. The correct statement requires C to be noncomputable and the tree to have a path not computing C, which is not guaranteed for arbitrary C.
- **Proposed fix:** Either delete the clause, or state it correctly: '与えられた集合 C について、C を計算しない道が存在するための十分条件（例えば C が計算可能でないことだけでは不十分）を仮定した上で' — or restrict to the standard result that for any noncomputable C there is a tree all of whose paths avoid C only under additional hypotheses.
- **Reported:** 2026-10-28 (8ccef3d)

### ISSUE-0003 [Open] Low basis does not give an omega-model of WKL_0 all of whose elements are low
- **Category:** Supplement/remark error
- **Location:** supplement / 似た定理
- **Detail:** The supplement states that from the low basis theorem one builds an ω-model of WKL_0 all of whose elements are low. The low basis theorem gives, for each single tree, a low path; but the set of all low sets is not closed under the operations needed to form an ω-model of WKL_0 (in particular it is not closed under relative computation: a set computable from a low set need not be low). The standard consequence is that WKL_0 has an ω-model consisting of low sets only in the weaker sense that the model is built from a single low path together with its computable-in-it closure, which is not 'all elements low'. The claim as stated is stronger than what the theorem yields.
- **Proposed fix:** Replace with: 'WKL_0 の ω モデルで、その第二次要素がすべて低い集合からなるものが作れる、という主張は正しくない。低基底定理から直接得られるのは、各計算可能な木に対し低い道が存在することであり、これを用いて WKL_0 が ACA_0 を証明しないことを示すには別の議論（例えば低い道の存在から WKL_0 の ω モデルを作り、それが ACA_0 を満たさないことを示す）が必要である。'
- **Reported:** 2026-10-28 (8ccef3d)
