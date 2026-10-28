# Verification tracker: `01-foundations/05-proof-theory/03-provability-logic/05-fixed-point-second-proof.html`

<!-- source: 01-foundations/05-proof-theory/03-provability-logic/05-fixed-point-second-proof.html -->
<!-- Managed by scripts/verify.py (GitHub Actions). To dispute an [Open] issue, add a line starting with
     **Opus Rebuttal:** at the end of that issue and push; the next run judges it. Do not edit other lines. -->

- Last verified: 2026-10-28 (commit 8ccef3d, deepseek-chat)
- Open: 2 / Resolved: 0 / Ignored: 0

## Summary of the last run

(none)

## Issues

### ISSUE-0001 [Open] Character agreement lemma misdescribed as depending only on non-p variables and reachability
- **Category:** Supplement/remark error
- **Location:** supplement / 高い視点から
- **Detail:** The supplement claims that the character agreement lemma says the value of $p$ is determined by the 'landscape up to $n$ steps (the arrangement of variables other than $p$ and the accessibility relation)'. But $U(n,w_{0})=U(n,x_{0})$ is equality of the $n$-character, which is a syntactic object; it encodes the truth values of the $\Diamond$-combinations of $(n-1)$-characters, i.e. the whole modal type up to depth $n$, not merely the non-$p$ valuation and the bare accessibility relation. Two worlds with the same non-$p$ valuation and isomorphic $n$-neighbourhoods but different $p$-independent structure would still need the same character; the description 'the arrangement of variables other than $p$ and the accessibility relation' is imprecise/overstated because the character also fixes which modal formulas of depth $\le n$ hold, and the lemma's hypothesis is equality of characters, not of the raw frame.
- **Proposed fix:** Replace with: 'キャラクターの一致の補題は、$p\leftrightarrow A$ が成り立つ世界では、$p$ の値は $n$-キャラクター（すなわち深さ $n$ までの様相型、$p$ 以外の変数の配置と $\Box$ で始まる部分論理式の真理値の組み合わせ）が一致すれば決まる、と言っている。'
- **Reported:** 2026-10-28 (8ccef3d)

### ISSUE-0002 [Open] Claim that the upper bound cannot be the modal degree of A is misattributed to pt:fixed-point-degree
- **Category:** Supplement/remark error
- **Location:** supplement / 前提の検討, second bullet
- **Detail:** The supplement says '\ref{pt:fixed-point-degree} shows that the upper bound cannot be taken to be the modal degree of $A$.' But pt:fixed-point-degree (proposition 4.13) states that the modal degree of a fixed point can exceed the degree of $A$; that is a statement about the degree of the fixed point, not about whether the bound $n$ (number of $\Box$-subformulas) could be replaced by $d(A)$. The number of $\Box$-subformulas is always $\ge$ ... actually can be larger than $d(A)$ or smaller; the cited result does not establish the claimed impossibility. This is an improper use of the citation as support for a different claim.
- **Proposed fix:** Either drop the sentence, or restate correctly: '上限 $n$ は $A$ の様相次数ではなく $\Box$ 部分論理式の個数で与えられる。\ref{pt:fixed-point-degree} は不動点の次数が $A$ の次数を超えうることを示しており、次数による上限が一般には成り立たないことの根拠となる。'
- **Reported:** 2026-10-28 (8ccef3d)
