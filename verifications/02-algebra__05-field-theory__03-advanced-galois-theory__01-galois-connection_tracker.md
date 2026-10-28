# Verification tracker: `02-algebra/05-field-theory/03-advanced-galois-theory/01-galois-connection.html`

<!-- source: 02-algebra/05-field-theory/03-advanced-galois-theory/01-galois-connection.html -->
<!-- Managed by scripts/verify.py (GitHub Actions). To dispute an [Open] issue, add a line starting with
     **Opus Rebuttal:** at the end of that issue and push; the next run judges it. Do not edit other lines. -->

- Last verified: 2026-10-28 (commit 8ccef3d, deepseek-chat)
- Open: 3 / Resolved: 0 / Ignored: 0

## Summary of the last run

(none)

## Issues

### ISSUE-0001 [Open] 指標群の関係式が誤り（χ(a)=0 ではなく χ(a)=1）
- **Category:** Supplement/remark error
- **Location:** supplement / 他のガロア接続（有限アーベル群と指標群）
- **Detail:** supplement では有限アーベル群と指標群のガロア接続を「関係『$\chi(a)=0$』」と述べているが、指標は群準同型 $G\to\mathbb{C}^{\times}$ であり、$\chi(a)=0$ は決して成り立たない（$\chi(a)\neq 0$）。正しい関係は $\chi(a)=1$（すなわち $a\in\ker\chi$）である。このままでは極 $H^{\perp}$ が常に空集合となり、$H\mapsto H^{\perp}$ が意味をなさず、命題自体が偽になる。
- **Proposed fix:** Replace the relation with $\chi(a)=1$: 「有限アーベル群とその指標群（関係「$\chi(a)=1$」）：$H\mapsto H^{\perp}=\{\chi : \chi|_H=1\}$（\ref{grp:finite-abelian-duality}）。有限群なのですべての部分群が閉。」
- **Reported:** 2026-10-28 (8ccef3d)

### ISSUE-0002 [Open] 零点定理の対応で「根基イデアル」だけでは閉集合を尽くさない
- **Category:** Supplement/remark error
- **Location:** supplement / 他のガロア接続（多項式環のイデアルと k^n の部分集合）
- **Detail:** 関係「$f(x)=0$」による $k[x_{1},\dots,x_{n}]$ のイデアル側の閉集合は根基イデアル全体ではなく、真のイデアル（$1$ を含まない、すなわち $V(I)\neq\emptyset$ となるイデアル）に限られる。$I=k[x]$ は根基イデアルだが $V(I)=\emptyset$ で、これは $k^{n}$ の部分集合 $\emptyset$ の形 $B^{\prime}$ として現れない（$B^{\prime}$ は常に $V(I)$ で $I\subsetneq k[x]$）。したがって「閉集合は代数的集合と根基イデアル」は閉集合の特徴づけとして不正確である。
- **Proposed fix:** 「閉集合は代数的集合と、$1$ を含まない根基イデアル（$V(I)\neq\emptyset$ となる根基イデアル）で、その対応は零点定理（\tref{ring:nullstellensatz}）。」
- **Reported:** 2026-10-28 (8ccef3d)

### ISSUE-0003 [Open] 「すべての部分群が閉」の根拠が不正確
- **Category:** Supplement/remark error
- **Location:** supplement / 他のガロア接続（有限アーベル群と指標群）
- **Detail:** 「有限群なのですべての部分群が閉」という理由づけは、この文脈（関係 $\chi(a)=1$ による極）では正しくない。閉性 $H=H^{\perp\perp}$ は、指標群が $H$ 上の指標を $G$ 上の指標に延長できること（有限アーベル群の双対性・指標の延長）に依拠しており、単に「有限群である」ことから直接出るものではない。少なくとも根拠の記述が誤解を招く。
- **Proposed fix:** 「指標は部分群から全体へ延長できる（\ref{grp:finite-abelian-duality}）ので、すべての部分群が閉。」
- **Reported:** 2026-10-28 (8ccef3d)
