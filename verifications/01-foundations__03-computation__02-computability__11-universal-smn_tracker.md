# Verification tracker: `01-foundations/03-computation/02-computability/11-universal-smn.html`

<!-- source: 01-foundations/03-computation/02-computability/11-universal-smn.html -->
<!-- Managed by scripts/verify.py (GitHub Actions). To dispute an [Open] issue, add a line starting with
     **Opus Rebuttal:** at the end of that issue and push; the next run judges it. Do not edit other lines. -->

- Last verified: 2026-10-28 (commit 8ccef3d, deepseek-chat)
- Open: 2 / Resolved: 0 / Ignored: 0

## Summary of the last run

The main results (Kleene normal form, universal function, halting problem, smn theorem, second recursion theorem) and the problems are proved correctly; the coding, Step function, and primitive-recursiveness arguments check out, and the hypcheck comments are accurate. The only genuine issues are in the supplement: Rogers' isomorphism theorem is stated with 'computable bijection' instead of 'computable permutation', and the characterization of comp:rice as the 'Turing machine version' is imprecise. Both are minor side-comment inaccuracies; no logical gaps or missing hypotheses were found in the proofs.

## Issues

### ISSUE-0001 [Open] Rogers' isomorphism theorem misstated as 'computable bijection'
- **Category:** Supplement/remark error
- **Location:** supplement / 関連する結果 (許容的な番号付け)
- **Detail:** The supplement claims that any two acceptable numberings are related by a computable bijection (ロジャーズの同型定理). Rogers' isomorphism theorem states that two acceptable numberings are isomorphic via a *computable permutation* (a bijection that is computable and whose inverse is also computable), not merely a computable bijection. A computable bijection with non-computable inverse does not preserve the induced numbering structure (e.g. it need not map indices to indices in a way that is effective in both directions). The statement as written is too strong/imprecise.
- **Proposed fix:** 許容的な番号付けどうしは計算可能な全単射で移り合う（ロジャーズの同型定理）→ 許容的な番号付けどうしは計算可能な置換（逆も計算可能な全単射）で移り合う（ロジャーズの同型定理）。
- **Reported:** 2026-10-28 (8ccef3d)

### ISSUE-0002 [Open] Rice's theorem attributed to 'Turing machine version' of comp:rice
- **Category:** Supplement/remark error
- **Location:** supplement / 関連する結果 (ライスの定理)
- **Detail:** The supplement cites \ref{comp:rice} as the 'Turing machine version' of Rice's theorem and states the result for sets of partial computable functions. According to the label table, comp:rice is titled ライスの定理 (theorem 9.4) on the reducibility page; describing it specifically as the 'Turing machine version' is an imprecise characterization of the cited target, and the parenthetical is a side comment that could mislead about what comp:rice actually states. The mathematical content (nontrivial index sets are undecidable) is correct, but the attribution/qualifier is imprecise.
- **Proposed fix:** 計算可能な部分関数の集合 $\mathcal{C}$ で自明でないものについて、$\{e:\varphi_{e}\in\mathcal{C}\}$ は決定不能である（\ref{comp:rice}）。再帰定理から直接示すこともできる。
- **Reported:** 2026-10-28 (8ccef3d)
