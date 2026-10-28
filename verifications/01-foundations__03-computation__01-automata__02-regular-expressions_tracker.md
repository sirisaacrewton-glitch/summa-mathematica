# Verification tracker: `01-foundations/03-computation/01-automata/02-regular-expressions.html`

<!-- source: 01-foundations/03-computation/01-automata/02-regular-expressions.html -->
<!-- Managed by scripts/verify.py (GitHub Actions). To dispute an [Open] issue, add a line starting with
     **Opus Rebuttal:** at the end of that issue and push; the next run judges it. Do not edit other lines. -->

- Last verified: 2026-10-28 (commit 8ccef3d, deepseek-chat)
- Open: 4 / Resolved: 0 / Ignored: 0

## Summary of the last run

(none)

## Issues

### ISSUE-0001 [Open] 補集合・共通部分を加えると表現が短くなるという主張
- **Category:** Supplement/remark error
- **Location:** supplement / 前提の検討
- **Detail:** 「正規表現に補集合や共通部分を加えても表せる言語は正規言語のまま」は正しいが、「ただし、表現の長さは大幅に短くなりうることが知られている」は誤り。拡張正規表現（補集合・共通部分付き）は通常の正規表現へ変換すると最悪で二重指数関数的に爆発する（補集合・共通部分を許すと簡潔性が本質的に上がるという結果は知られていない）。むしろ逆で、拡張正規表現から通常の正規表現への変換は二重指数関数的な blow-up を伴うことが知られている。
- **Proposed fix:** Replace with: 「ただし、補集合や共通部分を用いた拡張正規表現を通常の正規表現に変換すると、最悪の場合で二重指数関数的に長さが増大することが知られている（簡潔性は上がらない）。」
- **Reported:** 2026-10-28 (8ccef3d)

### ISSUE-0002 [Open] クリーネ代数の完全性の公理系の記述
- **Category:** Supplement/remark error
- **Location:** supplement / 関連する結果（クリーネ代数）
- **Detail:** 「$\cup,\circ,{}^{\ast},\varnothing,\varepsilon$ についての有限個の公理と、アーデンの補題に当たる推論規則（$ax+b\le x\Rightarrow a^{\ast}b\le x$）から導ける」という記述は、コーゼンの完全性定理の内容と整合しない。コーゼンの定理は、クリーネ代数の等式理論が正規表現の等式と一致するというもので、その公理系はクリーネ代数の公理（冪等半環の公理＋スターの公理）であり、$ax+b\le x\Rightarrow a^{\ast}b\le x$ はアーデンの補題に対応する推論規則として提示されているが、これはクリーネ代数の公理系の一部ではなく、むしろ導かれる性質（あるいは同値な公理系の一部）である。記述が不正確。
- **Proposed fix:** Replace with: 「正規表現の間の等式は、クリーネ代数の公理（冪等半環の公理とスターの公理）から導ける等式とちょうど一致することが知られている（コーゼンの完全性定理）。アーデンの補題に対応する規則 $ax+b\le x\Rightarrow a^{\ast}b\le x$ はこの公理系から導かれる。」
- **Reported:** 2026-10-28 (8ccef3d)

### ISSUE-0003 [Open] 文脈自由文法の言語方程式の記述
- **Category:** Supplement/remark error
- **Location:** supplement / 関連する結果（文脈自由文法）
- **Detail:** 「文脈自由文法は、一次でない（未知数どうしの連接を含む）言語方程式の最小解として言語を定める」という記述は概ね正しいが、「最小解」という表現が不正確。文脈自由文法の言語方程式系は一般に複数の不動点を持ち、最小不動点が文法の生成する言語を与える。しかし「一次でない」という表現は曖昧で、文脈自由文法の方程式は未知数どうしの連接（例：$X=XY\cup\{a\}$）を含むが、これは「一次でない」というより「非線形」と呼ぶべき。また、最小解の存在はクナスター・タルスキの定理によるが、その言及がない。
- **Proposed fix:** Replace with: 「文脈自由文法は、未知数どうしの連接を含む非線形な言語方程式系の最小不動点として言語を定める（クナスター・タルスキの定理による）。」
- **Reported:** 2026-10-28 (8ccef3d)

### ISSUE-0004 [Open] 行列の解 $\vec{X}=A^{\ast}\vec{B}$ の記述
- **Category:** Supplement/remark error
- **Location:** supplement / 高い視点から
- **Detail:** 「行列で書けば解は $\vec{X}=A^{\ast}\vec{B}$（$A^{\ast}$ は行列の推移閉包）で」という記述は、$A$ が $\varepsilon$ を含まない（つまり各成分が $\varepsilon$ を含まない）場合にのみ正しい。一般の行列 $A$ に対しては $A^{\ast}$ の定義（$I\cup A\cup A^{2}\cup\cdots$）は収束せず、解の公式は成り立たない。また、$A^{\ast}$ を「行列の推移閉包」と呼ぶのは不正確で、ここではクリーネ代数のスター演算（行列のスター）である。
- **Proposed fix:** Replace with: 「行列で書けば、各成分が $\varepsilon$ を含まない場合に解は $\vec{X}=A^{\ast}\vec{B}$（$A^{\ast}$ はクリーネ代数の行列のスター演算）で与えられる。」
- **Reported:** 2026-10-28 (8ccef3d)
