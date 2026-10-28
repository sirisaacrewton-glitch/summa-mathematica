# Verification tracker: `05-geometry-topology/02-algebraic-topology/01-homotopy/04-homotopy-groups.html`

<!-- source: 05-geometry-topology/02-algebraic-topology/01-homotopy/04-homotopy-groups.html -->
<!-- Managed by scripts/verify.py (GitHub Actions). To dispute an [Open] issue, add a line starting with
     **Opus Rebuttal:** at the end of that issue and push; the next run judges it. Do not edit other lines. -->

- Last verified: 2026-10-28 (commit 10fede1, deepseek-chat)
- Open: 4 / Resolved: 0 / Ignored: 0

## Summary of the last run

(none)

## Issues

### ISSUE-0001 [Open] π_4(S^2) ≅ Z/2 is false
- **Category:** Supplement/remark error
- **Location:** supplement (高い視点) after at:cw-pair-connectivity
- **Detail:** The supplement claims $\pi_{3}(S^{2})\cong\mathbb{Z}$ and $\pi_{4}(S^{2})\cong\mathbb{Z}/2$. The first is correct, but $\pi_{4}(S^{2})\cong\mathbb{Z}/2$ is false: the suspension of the Hopf map gives $\pi_{4}(S^{3})\cong\mathbb{Z}/2$, and the Hopf fibration $S^{3}\to S^{2}$ yields $\pi_{4}(S^{2})\cong\pi_{4}(S^{3})\oplus\pi_{3}(S^{3})\cong\mathbb{Z}/2\oplus\mathbb{Z}\cong\mathbb{Z}/2\oplus\mathbb{Z}$, i.e. $\pi_{4}(S^{2})\cong\mathbb{Z}\oplus\mathbb{Z}/2$, not $\mathbb{Z}/2$.
- **Proposed fix:** Replace with: $\pi_{3}(S^{2})\cong\mathbb{Z}$（ホップ写像）、$\pi_{4}(S^{2})\cong\mathbb{Z}\oplus\mathbb{Z}/2$ など、$\pi_{n}(S^{2})$ は $n\ge2$ で無限に続く（知られている）。
- **Reported:** 2026-10-28 (10fede1)

### ISSUE-0002 [Open] Brown's theorem misstated as finite generation/computability of π_n
- **Category:** Supplement/remark error
- **Location:** supplement 計算の観点
- **Detail:** The text says: for a simply connected finite simplicial complex the higher homotopy groups $\pi_{n}$ are finitely generated abelian and computable (attributed to Brown, 1957). Brown's theorem (1957) is about the computability of the homotopy type / the fact that the homotopy groups of a simply connected finite complex are effectively computable in principle; but the statement as phrased ("finite generated abelian and computable") is imprecise: finite generation of $\pi_{n}$ for a simply connected finite complex is a theorem (Serre), not Brown's, and the computability statement needs care. Also the claim "$\pi_{1}$ の自明性すら決定不能" is a well-known undecidability result (Novikov/Adian, Boone), but the attribution to the van Kampen page is a pointer, not a proof; the sentence is acceptable as a known fact but the Brown attribution is wrong.
- **Proposed fix:** Rewrite: 単連結な有限単体複体の高次ホモトピー群 $\pi_{n}$ は有限生成アーベル群である（Serre）。さらにブラウン（1957）により、単連結な有限複体のホモトピー群は原理的に計算可能である。基本群が自明でないと、$\pi_{1}$ の自明性の判定は決定不能（Novikov–Adian, Boone）である。
- **Reported:** 2026-10-28 (10fede1)

### ISSUE-0003 [Open] π_3(S^2) ≅ Z stated in the introduction without proof or citation
- **Category:** Unsupported fact
- **Location:** introductory paragraph (before at:sec-hg-notation)
- **Detail:** The opening paragraph asserts "$\pi_{3}(S^{2})\cong\mathbb{Z}$ のように、次元より高い球面の写像が自明でない" as an illustration. This is a true fact (Hopf), but it is stated without proof and without citation on this page; it is used only as motivation, so it is not a logical gap, but as an unsupported stated fact it should be flagged or cited.
- **Proposed fix:** Add a citation, e.g. "（ホップ写像、\tref{at:page-sphere-maps} 参照）", or mark it as a known example.
- **Reported:** 2026-10-28 (10fede1)

### ISSUE-0004 [Open] Hypcheck comment on k=n is imprecise about degree
- **Category:** Supplement/remark error
- **Location:** hypcheck of at:low-homotopy-spheres
- **Detail:** The hypcheck says: "$k=n$ では偽（恒等写像は写像度 $1$ で、定値写像とホモトープでない）". This is correct as a statement that the theorem fails for $k=n$, but the parenthetical justification uses degree, which is only defined for maps $S^{n}\to S^{n}$; the theorem's statement is about $\pi_{k}(S^{n})=0$ for $k<n$, and for $k=n$ the correct statement is $\pi_{n}(S^{n})\cong\mathbb{Z}$ (proved later as at:pin-sn-hopf). The comment is not false, but it is slightly imprecise: it should say the conclusion fails because $\pi_{n}(S^{n})\cong\mathbb{Z}\neq0$, not merely that the identity is not null-homotopic.
- **Proposed fix:** Replace with: $k=n$ では偽：$\pi_{n}(S^{n})\cong\mathbb{Z}$（\ref{at:pin-sn-hopf}）で、恒等写像の類は $0$ でない。
- **Reported:** 2026-10-28 (10fede1)
