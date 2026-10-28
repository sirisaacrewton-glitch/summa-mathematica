# Verification tracker: `05-geometry-topology/02-algebraic-topology/02-homology/13-kunneth.html`

<!-- source: 05-geometry-topology/02-algebraic-topology/02-homology/13-kunneth.html -->
<!-- Managed by scripts/verify.py (GitHub Actions). To dispute an [Open] issue, add a line starting with
     **Opus Rebuttal:** at the end of that issue and push; the next run judges it. Do not edit other lines. -->

- Last verified: 2026-10-28 (commit 10fede1, deepseek-chat)
- Open: 4 / Resolved: 0 / Ignored: 0

## Summary of the last run

(none)

## Issues

### ISSUE-0001 [Open] Alexander–Whitney formula uses restrictions to faces, not projections
- **Category:** Supplement/remark error
- **Location:** supplement (一般化)
- **Detail:** The supplement writes the Alexander–Whitney map as $\sigma\mapsto\sum_{p+q=n}\sigma\restriction[e_{0},\dots,e_{p}]\otimes\sigma\restriction[e_{p},\dots,e_{n}]$ and parenthetically says '(成分ごとに射影したもの)' (projected componentwise). The standard Alexander–Whitney map is $\sigma\mapsto\sum_{p+q=n}\sigma\circ(\text{front }p\text{-face})\otimes\sigma\circ(\text{back }q\text{-face})$, i.e. the restrictions of $\sigma$ to the front $p$-face and back $q$-face of $\Delta^{n}$ (the two faces meeting at the vertex $e_{p}$). The phrase 'projected componentwise' is misleading: the map is not obtained by projecting onto coordinates; it uses the face inclusions $\Delta^{p}\hookrightarrow\Delta^{n}$ (front) and $\Delta^{q}\hookrightarrow\Delta^{n}$ (back). As written the formula is essentially correct but the parenthetical explanation is imprecise and could be read as a coordinate projection.
- **Proposed fix:** Replace the parenthetical with: 'ここで $\sigma\restriction[e_{0},\dots,e_{p}]$ は $\Delta^{n}$ の前側 $p$ 面（$e_{0},\dots,e_{p}$ が張る面）への制限、$\sigma\restriction[e_{p},\dots,e_{n}]$ は後側 $q$ 面（$e_{p},\dots,e_{n}$ が張る面）への制限を表す（座標への射影ではない）．'
- **Reported:** 2026-10-28 (10fede1)

### ISSUE-0002 [Open] Prism operator identified with shuffle map for q=1 is imprecise
- **Category:** Supplement/remark error
- **Location:** supplement (一般化)
- **Detail:** The supplement states that the prism operator (\ref{at:singular-homotopy-invariance}) 'は $q=1$ のシャッフル写像にあたる' (corresponds to the shuffle map for $q=1$). The prism operator is a chain homotopy $S(X)\to S(X\times I)$ (or $S(X)\to S(X)$ for a homotopy), of degree $+1$, whereas the shuffle/Alexander–Whitney maps are degree $0$ chain maps between $S(X\times Y)$ and $S(X)\otimes S(Y)$. The prism operator is related to (a component of) the Eilenberg–Zilber homotopy inverse, not literally 'the shuffle map with $q=1$'. The identification is at best a loose analogy and is stated as fact.
- **Proposed fix:** Replace with: 'プリズム作用素（\ref{at:singular-homotopy-invariance}）は $S(X)\to S(X\times I)$ の次数 $+1$ の鎖ホモトピーで、アイレンバーグ–ジルバーのホモトピー逆写像の $I=[0,1]$ 成分と関係する（シャッフル写像そのものではない）．'
- **Reported:** 2026-10-28 (10fede1)

### ISSUE-0003 [Open] Claim that EZ uses no choice while algebraic Künneth does, and finite CW remark
- **Category:** Supplement/remark error
- **Location:** at:kunneth / hypcheck
- **Detail:** The hypcheck says: 'アイレンバーグ–ジルバーでは使わないが、代数的キュネット定理（部分加群の自由性、ベクトル空間の基底）で使う。$X,Y$ が有限 CW 複体なら、胞体鎖複体（有限生成）を使って選択なしで同じ結論が得られる（\ref{mod:pid-submodule-free} は有限階数の場合）。' The parenthetical '\ref{mod:pid-submodule-free} は有限階数の場合' is imprecise: the cited theorem (自由加群の部分加群) is the general statement that submodules of free modules over a PID are free; it is not 'the finite rank case'. Moreover, the assertion that for finite CW complexes one gets the conclusion without choice via cellular chains needs the additional fact that the cellular chain complex of a finite CW complex is finitely generated free in each degree, and that the algebraic Künneth splitting for finitely generated free complexes can be chosen without choice — this is true but the remark as phrased attributes the finite-rank restriction to the cited theorem, which does not have such a restriction.
- **Proposed fix:** Rewrite: 'アイレンバーグ–ジルバーでは使わないが、代数的キュネット定理で部分加群の自由性（無限生成のとき選択公理を使う）とベクトル空間の基底の存在に使う。$X,Y$ が有限 CW 複体なら胞体鎖複体は各次数で有限生成自由なので、部分加群の自由性も有限生成の場合に還元でき、選択公理を使わずに同じ結論が得られる。'
- **Reported:** 2026-10-28 (10fede1)

### ISSUE-0004 [Open] Example 3: Tor term computation for RP^2 x RP^2
- **Category:** Unsupported fact
- **Location:** example / item 3
- **Detail:** The example claims $H_{3}(\mathbb{R}P^{2}\times\mathbb{R}P^{2})\cong\mathbb{Z}/2$ by arguing the tensor term vanishes because $H_{2}(\mathbb{R}P^{2})=0$. This is correct: $H_{*}(\mathbb{R}P^{2})=\mathbb{Z},\mathbb{Z}/2,0$ in degrees $0,1,2$, so for $n=3$ the tensor sum $\bigoplus_{p+q=3}H_{p}\otimes H_{q}$ involves $H_{0}\otimes H_{3}=0$, $H_{1}\otimes H_{2}=0$, $H_{2}\otimes H_{1}=0$, $H_{3}\otimes H_{0}=0$, hence vanishes, and the Tor sum $\bigoplus_{p+q=2}\mathrm{Tor}_{1}(H_{q},H_{p})$ has only the $p=q=1$ term $\mathrm{Tor}_{1}(\mathbb{Z}/2,\mathbb{Z}/2)\cong\mathbb{Z}/2$. The conclusion is right. However the phrase 'テンソル積の項は $H_{p}\otimes H_{q}$（$p+q=3$）で $H_{2}(\mathbb{R}P^{2})=0$ なので $0$' only mentions $H_{2}=0$ but the vanishing also uses $H_{3}=0$ and $H_{0}\otimes H_{3}=0$; as stated it is slightly incomplete but not false. No correction strictly required; if anything, note $H_{3}(\mathbb{R}P^{2})=0$ as well.
- **Proposed fix:** Optionally clarify: 'テンソル積の項は $p+q=3$ で、$H_{3}(\mathbb{R}P^{2})=H_{2}(\mathbb{R}P^{2})=0$ より $0$。'
- **Reported:** 2026-10-28 (10fede1)
