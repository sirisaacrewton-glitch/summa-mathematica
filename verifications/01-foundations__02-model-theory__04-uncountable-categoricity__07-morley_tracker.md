# Verification tracker: `01-foundations/02-model-theory/04-uncountable-categoricity/07-morley.html`

<!-- source: 01-foundations/02-model-theory/04-uncountable-categoricity/07-morley.html -->
<!-- Managed by scripts/verify.py (GitHub Actions). To dispute an [Open] issue, add a line starting with
     **Opus Rebuttal:** at the end of that issue and push; the next run judges it. Do not edit other lines. -->

- Last verified: 2026-10-28 (commit 10fede1, deepseek-chat)
- Open: 2 / Resolved: 0 / Ignored: 0

## Summary of the last run

The main theorems (Baldwin–Lachlan, Morley) and their proofs are logically sound: the steps correctly invoke the cited results, the hypotheses (ω-stability, no Vaughtian pairs, uncountability of κ) are used and tracked in the hypcheck, and the dimension argument is valid. The genuine problems lie in the side material: the supplement's claim that an uncountably categorical theory has either 1 or ℵ₀ countable models is false (it can have any finite number, as the page's own corollary shows), and the example's parenthetical extending the characteristic-0 Vaughtian-pair result to all p is an unsupported overstatement of the citation. Both are correctable with the proposed fixes.

## Issues

### ISSUE-0001 [Open] Countable models of uncountably categorical theories: 1 or ℵ₀
- **Category:** Supplement/remark error
- **Location:** supplement / 前提を変えると
- **Detail:** The supplement claims that an uncountably categorical theory has either 1 (when ℵ₀-categorical) or ℵ₀ countable models, attributed to Baldwin–Lachlan. This is false: an uncountably categorical theory can have exactly n countable models for any finite n ≥ 1. Indeed, the page's own corollary (model:countable-models-of-categorical) and its proof show that countable models are classified by dimension 0,1,2,…,ℵ₀, so a theory whose countable models have dimensions {0,…,n−1} has exactly n countable models. The correct Baldwin–Lachlan result is that the number of countable models is at most ℵ₀ (either finite or ℵ₀), not '1 or ℵ₀'.
- **Proposed fix:** 非可算範疇的な理論の可算モデルの個数は有限個か $\aleph_{0}$ 個のいずれかであり、特に可算個以下であることが、ボールドウィン–ラクランによって示されている（\ref{model:countable-models-of-categorical} の精密化。ここでは証明しない）。
- **Reported:** 2026-10-28 (10fede1)

### ISSUE-0002 [Open] ACF_p has no Vaughtian pairs for all p
- **Category:** Supplement/remark error
- **Location:** example / item 1
- **Detail:** The example states that ACF_p has no Vaughtian pairs citing model:prob-vp-acf 'in the case of characteristic 0; the same holds for general p'. The parenthetical is imprecise/overstated as a citation: the cited problem is stated for characteristic 0, and the claim that 'the same holds for general p' is asserted without justification. While ACF_p is indeed uncountably categorical for every p (so has no Vaughtian pairs), the text presents this as following from the cited problem, which only covers characteristic 0. This is a minor overstatement of what the citation supports.
- **Proposed fix:** $"\mathrm{ACF}_{p}$ は $\omega$ 安定（\ref{model:stable} の例）で、標数 $0$ の場合はヴォート対をもたない（\ref{model:prob-vp-acf}）。一般の $p$ でも $\mathrm{ACF}_{p}$ はすべての非可算濃度で範疇的である（シュタイニッツの定理から直接分かる）ので、ヴォート対をもたない。"
- **Reported:** 2026-10-28 (10fede1)
