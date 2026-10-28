# Verification tracker: `01-foundations/05-proof-theory/08-ordinal-analysis/06-hydra.html`

<!-- source: 01-foundations/05-proof-theory/08-ordinal-analysis/06-hydra.html -->
<!-- Managed by scripts/verify.py (GitHub Actions). To dispute an [Open] issue, add a line starting with
     **Opus Rebuttal:** at the end of that issue and push; the next run judges it. Do not edit other lines. -->

- Last verified: 2026-10-28 (commit 8ccef3d, deepseek-chat)
- Open: 2 / Resolved: 0 / Ignored: 0

## Summary of the last run

(none)

## Issues

### ISSUE-0001 [Open] 「任意の関数」への一般化は偽（増加関数に限る必要）
- **Category:** Supplement/remark error
- **Location:** supplement「前提を変えると」
- **Detail:** supplement は「複製の個数を『第 n 手で n 個』から任意の関数に変えても、ヒドラは死ぬ（\ref{pt:hydra-dies} の最後）」と述べるが、これは偽である。\ref{pt:hydra-dies} が保証するのは各手で複製の個数が任意の有限個である場合、すなわち複製関数が各点で有限の値をとる場合に限られる。複製関数が非有界（例えば第 n 手で n 個ではなく、手数に依らない非常に大きな有限個、あるいは手ごとに急速に増える関数）であっても各手で有限なら停止するが、「任意の関数」を無条件に許すと、例えば複製の個数を手数に依らず固定の巨大数にしても有限なので止まるが、問題は「任意の関数」という表現が、有限値をとる任意の関数を指すなら正しいが、そう読むと \ref{pt:hydra-dies} の「複製の個数 n を任意の有限個に変えても同じ」と同義で冗長。しかし「任意の関数」を素直に読むと、各手で有限個という条件を外した無限個の複製を許す関数まで含み得て、その場合は1手で無限に増えて停止しない。より重要なのは、標準的なカービー–パリス型の一般化では複製関数は増加関数（各手で前より多い複製）に限る必要があり、減少関数を許すと木が縮んで停止は自明になるが、非単調な関数では順序数割り当てによる減少が保たれない場合がある。いずれにせよ「任意の関数」は \ref{pt:hydra-dies} が実際に述べている「各手で任意の有限個」を超えた主張であり、過剰一般化である。
- **Proposed fix:** Replace with: 「複製の個数を『第 $n$ 手で $n$ 個』から、各手で任意の有限個（手ごとに好きなだけ、ただし有限個）に変えても、ヒドラは死ぬ（\ref{pt:hydra-dies} の最後）。」 Do not claim arbitrary functions; restrict to functions taking finite values at each move.
- **Reported:** 2026-10-28 (8ccef3d)

### ISSUE-0002 [Open] 「単純な戦略で PA の証明可能な関数を超える長さ」の主張が不正確
- **Category:** Supplement/remark error
- **Location:** supplement「前提を変えると」
- **Detail:** supplement は「『n 個』の規則でも、単純な戦略で $\PA$ の証明可能な関数を超える長さになることが知られている」と述べる。しかしカービー–パリス型の独立性は、最悪の場合（すべての戦略）の停止手数が $\PA$ で全域性を証明できない関数を支配するという形で述べられるのが標準的であり、「単純な戦略で」超えるという主張は、特定の単純戦略（例えば常に左端の首を切る）が既に $\PA$ を超える長さを与えるかは一般に自明でなく、文献でそのように述べられているか疑わしい。少なくとも「単純な戦略で」という限定は根拠が薄弱で、過剰な主張になっている。
- **Proposed fix:** Replace with: 「『$n$ 個』の規則でも、最悪の場合（すべての戦略を考慮した停止手数）は $\PA$ で全域性が証明できる関数を超える長さになることが知られている。」
- **Reported:** 2026-10-28 (8ccef3d)
