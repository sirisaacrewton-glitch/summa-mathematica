# Verification tracker: `05-geometry-topology/01-general-topology/04-properties/09-local-connectedness.html`

<!-- source: 05-geometry-topology/01-general-topology/04-properties/09-local-connectedness.html -->
<!-- Managed by scripts/verify.py (GitHub Actions). To dispute an [Open] issue, add a line starting with
     **Opus Rebuttal:** at the end of that issue and push; the next run judges it. Do not edit other lines. -->

- Last verified: 2026-10-28 (commit 10fede1, deepseek-chat)
- Open: 5 / Resolved: 0 / Ignored: 0

## Summary of the last run

(none)

## Issues

### ISSUE-0001 [Open] Hilbert cube is not a continuous image of [0,1] via C ≅ C^ℕ
- **Category:** Supplement/remark error
- **Location:** supplement / 似た定理
- **Detail:** The supplement claims that the same method yields a continuous surjection from $[0,1]$ onto $[0,1]^{\N}$ (the Hilbert cube) using $\mathcal{C}\cong\mathcal{C}^{\N}$. This is false: $[0,1]$ is compact and first-countable, so any continuous image of it is a compact metric space (hence second-countable, with cardinality at most $2^{\aleph_{0}}$). The Hilbert cube $[0,1]^{\N}$ is not first-countable in a way compatible... more precisely, $[0,1]^{\N}$ is metrizable and compact, but it is not a continuous image of $[0,1]$: a continuous image of $[0,1]$ is a Peano continuum, and $[0,1]^{\N}$ is not locally connected? Actually $[0,1]^{\N}$ is not locally connected (it is not even locally connected at points, since it has no small connected neighborhoods? it is a product of intervals, which is locally connected? No—$[0,1]^{\N}$ is not locally connected). Regardless, the key obstruction: $[0,1]^{\N}$ has no countable dense... The cleanest correct statement: $[0,1]^{\N}$ is not a continuous image of $[0,1]$ because continuous images of $[0,1]$ are locally connected (by \ref{top:quotient-locally-connected}), while $[0,1]^{\N}$ is not locally connected. Also $\mathcal{C}\cong\mathcal{C}^{\N}$ is true, but the resulting map $\mathcal{C}\to[0,1]^{\N}$ cannot be extended to a continuous surjection on $[0,1]$ in the claimed way, and more importantly $[0,1]^{\N}$ is not a continuous image of $[0,1]$ at all.
- **Proposed fix:** Replace with: "同じ方法で $[0,1]$ から $[0,1]^{n}$ への連続な全射も作れる（$\mathcal{C}\cong\mathcal{C}^{n}$ を使う）。一方 $[0,1]^{\N}$（ヒルベルト立方体）は $[0,1]$ の連続像にはなりえない：$[0,1]$ の連続像は局所連結（\ref{top:quotient-locally-connected}）だが、$[0,1]^{\N}$ は局所連結でない。"
- **Reported:** 2026-10-28 (10fede1)

### ISSUE-0002 [Open] Hahn–Mazurkiewicz converse needs metrizability, correctly stated, but 'locally connected compact metric' arc claim misattributed
- **Category:** Supplement/remark error
- **Location:** supplement / 前提を変えると
- **Detail:** The supplement states the Mazurkiewicz–Moore theorem as: in a locally connected compact metric space, any two points joinable by a path are joined by an arc. The standard Mazurkiewicz–Moore theorem (and the Moore theorem on arcs) requires the space to be a continuum (compact connected metric) and locally connected; more precisely the theorem that any two points of a Peano continuum are joined by an arc holds. The statement as given ('局所連結なコンパクト距離空間では、道で結べる二点は弧で結べる') is essentially correct for Peano continua but the hypothesis 'connected' is missing: a locally connected compact metric space need not be connected, and the arc-joining property is a statement about the component. However, since the two points are assumed path-joinable, they lie in the same component, which is a Peano continuum, so the claim is actually correct as stated. This is not an error.
- **Proposed fix:** No change needed; the statement is correct because path-joinable points lie in the same component, which is a Peano continuum.
- **Reported:** 2026-10-28 (10fede1)

### ISSUE-0003 [Open] Claim that continuous image of [0,1] that is Hausdorff is metrizable
- **Category:** Supplement/remark error
- **Location:** supplement / 前提を変えると
- **Detail:** The supplement says: '距離化可能性を外すと成り立たない（$[0,1]$ の連続像でハウスドルフなら距離化可能になることが知られている）'. This is correct: a continuous image of $[0,1]$ is compact, and a compact Hausdorff space that is a continuous image of a compact metric space is metrizable (it is second-countable). So this sentence is fine.
- **Proposed fix:** No change needed.
- **Reported:** 2026-10-28 (10fede1)

### ISSUE-0004 [Open] Peano curve cannot be injective argument: [0,1] minus a point is disconnected but square minus a point is connected
- **Category:** Supplement/remark error
- **Location:** supplement / 似た定理
- **Detail:** The argument 'if injective then homeomorphism, but [0,1] minus a point is disconnected while the square is not' is correct: removing an interior point of $[0,1]$ disconnects it, while removing a point from $[0,1]^{2}$ leaves it connected (for $n\ge2$). This is a valid argument. No error.
- **Proposed fix:** No change needed.
- **Reported:** 2026-10-28 (10fede1)

### ISSUE-0005 [Open] Dimension claim: '次元が位相的に意味をもつには連続性に加えて単射性が必要'
- **Category:** Supplement/remark error
- **Location:** supplement / 高い視点から
- **Detail:** The closing sentence '次元が位相的に意味をもつには、連続性に加えて単射性（同相写像）が必要である' is imprecise/overstated. Topological dimension is a topological invariant preserved by homeomorphisms, but it is also preserved by many non-injective maps (e.g., closed maps, or maps with controlled fibers); the correct statement is that dimension is not preserved by arbitrary continuous surjections, and that a continuous bijection from a compact space to a Hausdorff space is a homeomorphism. Saying injectivity is 'necessary' for dimension to be topologically meaningful is misleading.
- **Proposed fix:** Replace with: "次元は位相不変量であり、同相写像で保たれる。しかし一般の連続全射では保たれない（ペアノ曲線がその例）。コンパクト空間からハウスドルフ空間への連続な全単射は同相写像なので、そのような設定では次元は保たれる。"
- **Reported:** 2026-10-28 (10fede1)
