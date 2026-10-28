# Verification tracker: `01-foundations/02-model-theory/02-types-and-countable-models/04-indiscernibles.html`

<!-- source: 01-foundations/02-model-theory/02-types-and-countable-models/04-indiscernibles.html -->
<!-- Managed by scripts/verify.py (GitHub Actions). To dispute an [Open] issue, add a line starting with
     **Opus Rebuttal:** at the end of that issue and push; the next run judges it. Do not edit other lines. -->

- Last verified: 2026-10-28 (commit 8ccef3d, deepseek-chat)
- Open: 3 / Resolved: 0 / Ignored: 0

## Summary of the last run

The main theorems and proofs (Ramsey, existence of indiscernibles, Skolemization, EM model, many automorphisms) are logically sound; the compactness and Ramsey applications check out, and the automorphism extension argument is correct. The genuine problems are confined to the supplement: the Hanf-number remark is imprecise, the $0^{\sharp}$ description conflates the EM blueprint with the indiscernible class, and the '$2^{\kappa}$ automorphisms' claim is overstated for $\kappa=\aleph_{0}$. All are medium-confidence side-comment issues.

## Issues

### ISSUE-0001 [Open] Hanf number description is imprecise/wrong
- **Category:** Supplement/remark error
- **Location:** supplement / 関連する結果 / ハンフ数
- **Detail:** The supplement says that using an indiscernible sequence of type $\omega_{1}$ one obtains a refinement of 'a theory with an infinite model has arbitrarily large models'. This is not what the Hanf number statement is. The correct statement is: if a theory (in a countable language) has a model of size $\beth_{(2^{\aleph_{0}})^{+}}$ (or some large bound), then it has arbitrarily large models; the Hanf number of $\mathrm{L}_{\omega_{1},\omega}$ is $\beth_{\omega_{1}}$. The phrase 'refinement of the fact that infinite models imply arbitrarily large models' is misleading: the latter is already true by compactness/Löwenheim–Skolem, and the Hanf number concerns when a theory has arbitrarily large models, not a refinement of that trivial fact. Also 'type $\omega_{1}$ indiscernibles' is not the standard formulation.
- **Proposed fix:** Replace with: 'ハンフ数. 無限モデルをもつ理論が任意に大きいモデルをもつことはコンパクト性からすでに従う。ハンフ数は「十分大きいモデルをもてば任意に大きいモデルをもつ」という閾値で、$\omega_{1}$ 型の識別不能列（EM モデル）を用いて、可算言語の理論のハンフ数が $\beth_{\omega_{1}}$ 以下であることが示される。'
- **Reported:** 2026-10-28 (8ccef3d)

### ISSUE-0002 [Open] 0# description as 'class of indiscernibles of L'
- **Category:** Supplement/remark error
- **Location:** supplement / 集合論との接点
- **Detail:** The supplement says $0^{\sharp}$ is 'the class of indiscernible elements of $\mathbf{L}$'. This is imprecise: $0^{\sharp}$ is (coded by) a set of formulas, the Ehrenfeucht–Mostowski set of indiscernibles for $\mathbf{L}$, i.e. a theory/EM blueprint, not literally 'the class of indiscernibles'. The class of indiscernibles $I$ is a proper class of ordinals; $0^{\sharp}$ is the corresponding EM set (a real). Calling it 'the class of indiscernible elements' conflates the EM blueprint with the indiscernible class.
- **Proposed fix:** Replace with: '$0^{\sharp}$ は $\mathbf{L}$ に対する識別不能元の EM 型（EM 集合、実数としてコードされる）であり、$\mathbf{L}$ に識別不能元の真のクラスが存在することと同値である、と一般に言われている。'
- **Reported:** 2026-10-28 (8ccef3d)

### ISSUE-0003 [Open] Claim that 2^κ automorphisms is 'known'
- **Category:** Supplement/remark error
- **Location:** supplement / 前提の検討
- **Detail:** The supplement asserts that 'in fact one can build a model of size $\kappa$ with $2^{\kappa}$ automorphisms'. For a countable theory with an infinite model and uncountable $\kappa$, this is true (EM models with $I=\kappa\times\mathbb{Q}$ give $2^{\kappa}$ automorphisms since there are $2^{\kappa}$ order automorphisms of $\kappa\times\mathbb{Q}$). However for $\kappa=\aleph_{0}$ the statement '$2^{\aleph_{0}}$ automorphisms of a countable model' is not generally true: a countable model has at most $2^{\aleph_{0}}$ automorphisms, and whether $2^{\aleph_{0}}$ is attained depends on the theory (e.g. for a theory with only countably many automorphisms of its countable model this fails). The blanket claim 'for size $\kappa$' without restricting $\kappa$ is overstated.
- **Proposed fix:** Restrict to uncountable $\kappa$: '実際、無限基数 $\kappa$ が非可算なら、濃度 $\kappa$ で $2^{\kappa}$ 個の自己同型をもつモデルも作れる（$I=\kappa\times\mathbb{Q}$ を使う）。'
- **Reported:** 2026-10-28 (8ccef3d)
