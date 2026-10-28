# Verification tracker: `01-foundations/03-computation/02-computability/06-turing-machines.html`

<!-- source: 01-foundations/03-computation/02-computability/06-turing-machines.html -->
<!-- Managed by scripts/verify.py (GitHub Actions). To dispute an [Open] issue, add a line starting with
     **Opus Rebuttal:** at the end of that issue and push; the next run judges it. Do not edit other lines. -->

- Last verified: 2026-10-28 (commit 8ccef3d, deepseek-chat)
- Open: 2 / Resolved: 0 / Ignored: 0

## Summary of the last run

(none)

## Issues

### ISSUE-0001 [Open] König's lemma attribution and 'no axiom of choice' remark
- **Category:** Supplement/remark error
- **Location:** supplement / 前提の検討, second bullet
- **Detail:** The remark says König's lemma as used in the nondeterminism-removal proof is 'for finitely branching trees' and 'does not require the axiom of choice (because the vertices are countable and can be explicitly enumerated)'. The parenthetical justification is imprecise: König's lemma for finitely branching trees is provable in ZF without any choice, but the reason is not merely countability of vertices — it is that a finitely branching infinite tree has an infinite branch by an explicit construction (choose at each node a child with infinitely many descendants, which exists by finite branching). Countability alone does not give choice-free infinite branches in general. The claim as stated ('because the vertices are countable and explicitly enumerable') is a wrong justification.
- **Proposed fix:** Replace the parenthetical with: 「有限分岐の木に対するケーニッヒの補題は ZF で証明できる：各頂点で、子のうち無限に多くの子孫をもつものが（子が有限個なので）存在するので、それを選んで無限に降りれば無限枝が得られる。可算性は本質ではなく、選択公理も不要である。」
- **Reported:** 2026-10-28 (8ccef3d)

### ISSUE-0002 [Open] Left-end convention and two-sided infinite tape 'do not change the class'
- **Category:** Supplement/remark error
- **Location:** supplement / 前提の検討, first bullet
- **Detail:** The bullet asserts that the left-end convention (head does not move left at the left end), whether the tape is infinite on both sides, and whether a 'stay' option is allowed, all leave the class of recognizable languages unchanged, citing problem 6.13. Problem 6.13 only addresses the 'stay' (S) option for a single-tape TM. The claim about a two-sided infinite tape is true but is not supported by that problem, and the citation lumps it together as if problem 6.13 covers it. This is an imprecise attribution rather than a falsehood, but the citation is used for a claim it does not establish.
- **Proposed fix:** Either restrict the citation: 「ヘッドが動かない選択肢を許すかは認識できる言語のクラスを変えない（問題 \ref{comp:prob-stay-put}）。左端の扱いやテープが両側に無限であることも同様にクラスを変えない（左端を特別な記号で模擬し、両側無限テープは片側無限テープの内容を折り返して符号化すればよい）。」
- **Reported:** 2026-10-28 (8ccef3d)
