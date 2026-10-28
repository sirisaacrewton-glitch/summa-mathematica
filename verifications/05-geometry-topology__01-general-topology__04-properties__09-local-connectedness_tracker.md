# Verification tracker: `05-geometry-topology/01-general-topology/04-properties/09-local-connectedness.html`

<!-- source: 05-geometry-topology/01-general-topology/04-properties/09-local-connectedness.html -->
<!-- Managed by scripts/verify.py (GitHub Actions). To dispute an [Open] issue, add a line starting with
     **Opus Rebuttal:** at the end of that issue and push; the next run judges it. Do not edit other lines. -->

- Last verified: 2026-10-28 (commit 8ccef3d, deepseek-chat)
- Open: 2 / Resolved: 0 / Ignored: 0

## Summary of the last run

(none)

## Issues

### ISSUE-0001 [Open] Hilbert cube is not a continuous image of [0,1] via C ≅ C^ℕ
- **Category:** Supplement/remark error
- **Location:** supplement / 似た定理
- **Detail:** The supplement claims that the same method yields a continuous surjection from $[0,1]$ onto $[0,1]^{\N}$ (the Hilbert cube) using $\mathcal{C}\cong\mathcal{C}^{\N}$. This is false: $[0,1]$ is compact and first-countable, and any continuous image of a compact metric space is compact and metrizable (hence first-countable). The Hilbert cube $[0,1]^{\N}$ is not first-countable, so it cannot be a continuous image of $[0,1]$. The Cantor set is indeed homeomorphic to $\mathcal{C}^{\N}$, but the Cantor function $\varphi$ is only defined onto $[0,1]$, not onto $[0,1]^{\N}$; there is no continuous surjection $\mathcal{C}\to[0,1]^{\N}$ that could be linearly extended. The claim about $[0,1]^{n}$ is correct, but the Hilbert cube part is wrong.
- **Proposed fix:** Replace with: "同じ方法で $[0,1]$ から $[0,1]^{n}$ への連続な全射も作れる（$\mathcal{C}\cong\mathcal{C}^{n}$ を使う）。一方、$[0,1]^{\N}$（ヒルベルト立方体）は $[0,1]$ の連続像にはなりえない：$[0,1]$ はコンパクト距離空間で、その連続像は距離化可能（特に第一可算）だが、$[0,1]^{\N}$ は第一可算でない。"
- **Reported:** 2026-10-28 (8ccef3d)

### ISSUE-0002 [Open] Dimension-preservation remark is imprecise/overstated
- **Category:** Supplement/remark error
- **Location:** supplement / 高い視点から
- **Detail:** The closing sentence "次元が位相的に意味をもつには、連続性に加えて単射性（同相写像）が必要である" is overstated. Topological dimension (covering dimension, small inductive dimension) is a topological invariant preserved by homeomorphisms, but it is also preserved by many non-injective maps (e.g. closed maps, or maps that are monotone with respect to fibers), and it is not the case that injectivity is 'necessary' for dimension to be meaningful. The statement conflates 'invariance under homeomorphism' with 'needs injectivity'. Also the phrase '連続写像は近さを保つ' is loose but acceptable; the main issue is the necessity claim.
- **Proposed fix:** Replace the last sentence with: "次元は同相写像で保たれる位相不変量であり、連続写像では一般に保たれない（ペアノ曲線がその例）。ただし次元を保つ写像は同相写像に限らず、閉写像やファイバーが連結な写像などでも保たれる場合がある。"
- **Reported:** 2026-10-28 (8ccef3d)
