# Verification tracker: `01-foundations/03-computation/01-automata/02-regular-expressions.html`

<!-- source: 01-foundations/03-computation/01-automata/02-regular-expressions.html -->
<!-- Managed by scripts/verify.py (GitHub Actions). To dispute an [Open] issue, add a line starting with
     **Opus Rebuttal:** at the end of that issue and push; the next run judges it. Do not edit other lines. -->

- Last verified: 2026-10-28 (commit 10fede1, deepseek-chat)
- Open: 4 / Resolved: 0 / Ignored: 0

## Summary of the last run

The page is logically sound overall: Arden's lemma, the elimination theorem, the DFA state equations, and Kleene's theorem are correctly proved, and the hypcheck comments are accurate. The problems and their solutions are correct. The main issues are in the supplement: the claim about extended regular expressions with complement/intersection being shorter is imprecise and its citation does not support the length claim; the Kleene algebra completeness rule is stated with only one of the two required Arden-type rules; the description of context-free grammar equations as containing concatenation of unknowns is wrong; and the matrix closure is called a transitive closure and the McNaughton–Yamada method is described as computing all entries at once, which is imprecise. These are all supplement-level inaccuracies that should be corrected.

## Issues

### ISSUE-0001 [Open] 補集合・共通部分を加えると表現が短くなるという記述の曖昧さ
- **Category:** Supplement/remark error
- **Location:** supplement / 前提の検討 第2項目
- **Detail:** 「正規表現に補集合や共通部分を加えても、表せる言語は正規言語のままである（\ref{comp:dfa-boolean}）。ただし、表現の長さは大幅に短くなりうることが知られている。」という記述は、補集合・共通部分を加えた拡張正規表現が通常の正規表現より簡潔になりうるという事実自体は正しいが、引用先 \ref{comp:dfa-boolean} は補集合・和・共通部分についての閉包性（DFA の構成）を示す命題であり、「表現の長さが短くなりうる」ことの根拠にはならない。また「大幅に短くなりうる」は無条件に読むと過大な主張で、実際には補集合・共通部分を加えた拡張正規表現は通常の正規表現に対して二重指数的な簡潔性の優位をもつことが知られている（Gelade–Pighizzini ら）。引用と主張の対応が不正確。
- **Proposed fix:** 「正規表現に補集合や共通部分を加えても、表せる言語は正規言語のままである（\ref{comp:dfa-boolean}）。この拡張正規表現は通常の正規表現より簡潔で、同じ言語を表すのに必要な長さが二重指数的に小さくなりうることが知られている（Gelade–Pighizzini）。」のように、簡潔性の主張を拡張正規表現の簡潔性として述べ、引用を分ける。
- **Reported:** 2026-10-28 (10fede1)

### ISSUE-0002 [Open] クリーネ代数の完全性とアーデンの補題の推論規則の記述
- **Category:** Supplement/remark error
- **Location:** supplement / 関連する結果 第2項目
- **Detail:** 「正規表現の間の等式は、$\cup,\circ,{}^{\ast},\varnothing,\varepsilon$ についての有限個の公理と、アーデンの補題に当たる推論規則（$ax+b\le x\Rightarrow a^{\ast}b\le x$）から導けることが知られている（コーゼンによるクリーネ代数の完全性）。」という記述は、コーゼンの完全性定理の内容と整合しているが、推論規則の形が不正確である。クリーネ代数の完全性（Kozen 1994）では、アーデンの補題に相当する規則は通常 $ax+b\le x\Rightarrow a^{\ast}b\le x$ ではなく、$x=ax+b\Rightarrow x=a^{\ast}b$ あるいは左クリーネ代数の公理系における $ax+b\le x\Rightarrow a^{\ast}b\le x$ と $xa+b\le x\Rightarrow ba^{\ast}\le x$ の両方（左右両方）が必要である。片方だけでは完全性は成り立たない。
- **Proposed fix:** 「正規表現の間の等式は、$\cup,\circ,{}^{\ast},\varnothing,\varepsilon$ についての有限個の公理と、アーデンの補題に当たる推論規則（$ax+b\le x\Rightarrow a^{\ast}b\le x$ および $xa+b\le x\Rightarrow ba^{\ast}\le x$）から導けることが知られている（コーゼンによるクリーネ代数の完全性）。」のように左右両方の規則を明記する。
- **Reported:** 2026-10-28 (10fede1)

### ISSUE-0003 [Open] 文脈自由文法の言語方程式の最小解としての記述
- **Category:** Supplement/remark error
- **Location:** supplement / 関連する結果 第3項目
- **Detail:** 「文脈自由文法は、一次でない（未知数どうしの連接を含む）言語方程式の最小解として言語を定める。」という記述は、文脈自由文法が言語方程式系の最小解として定まるという事実自体は正しいが、「一次でない」という表現が不正確である。文脈自由文法に対応する方程式系は、各方程式の右辺が未知数と終端記号の連接（および和）で書ける形であり、未知数どうしの連接（例：$X=XY\cup\dots$）を含む一般の非線形方程式系ではない。むしろ文脈自由文法の方程式は「右辺が未知数と終端記号の積の和」という形で、未知数どうしの積は現れない。したがって「未知数どうしの連接を含む」という説明は誤りである。
- **Proposed fix:** 「文脈自由文法は、右辺が未知数と終端記号の連接の和として書ける言語方程式系の最小解として言語を定める（未知数どうしの連接は現れないが、右辺に複数の未知数が現れうるため連立方程式は非線形になる）。不動点としての見方は \ref{comp:page-fixed-points} で扱う。」のように修正する。
- **Reported:** 2026-10-28 (10fede1)

### ISSUE-0004 [Open] 行列の推移閉包としての $A^{\ast}$ の記述
- **Category:** Supplement/remark error
- **Location:** supplement / 高い視点から 最終段落
- **Detail:** 「行列で書けば解は $\vec{X}=A^{\ast}\vec{B}$（$A^{\ast}$ は行列の推移閉包）で、マクノートン–ヤマダの方法はこの行列 $A^{\ast}$ の全成分を一度に計算する方法である。」という記述は、$A$ が $\varepsilon$ を含まない場合には $A^{\ast}=\bigcup_{n\ge0}A^{n}$（行列の積に関する和）として解 $\vec{X}=A^{\ast}\vec{B}$ が成り立つという点は正しいが、「推移閉包」という用語は通常、関係（ブール行列）の推移閉包を指し、言語の半環上の行列に対しては「クリーネ閉包（スター）」と呼ぶのが正確である。またマクノートン–ヤマダの方法が「$A^{\ast}$ の全成分を一度に計算する」という説明は、$R^{(k)}_{ij}$ の再帰が $A^{\ast}$ の成分を計算しているという意味では概ね正しいが、$A^{\ast}$ の全成分を「一度に」計算するのではなく $k$ について逐次的に更新する点で表現が不正確である。
- **Proposed fix:** 「行列で書けば解は $\vec{X}=A^{\ast}\vec{B}$（$A^{\ast}$ は言語の半環上の行列のクリーネ閉包 $\bigcup_{n\ge0}A^{n}$）で、マクノートン–ヤマダの方法はこの行列 $A^{\ast}$ の全成分を $k$ について逐次的に更新しながら計算する方法である。」のように修正する。
- **Reported:** 2026-10-28 (10fede1)
