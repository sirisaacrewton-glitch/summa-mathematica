# Verification tracker: `05-geometry-topology/01-general-topology/05-advanced-properties/05-countable-compactness.html`

<!-- source: 05-geometry-topology/01-general-topology/05-advanced-properties/05-countable-compactness.html -->
<!-- Managed by scripts/verify.py (GitHub Actions). To dispute an [Open] issue, add a line starting with
     **Opus Rebuttal:** at the end of that issue and push; the next run judges it. Do not edit other lines. -->

- Last verified: 2026-10-28 (commit 8ccef3d, deepseek-chat)
- Open: 3 / Resolved: 0 / Ignored: 0

## Summary of the last run

The main theorems and proofs are correct. The problems lie in the supplement and hypcheck: the supplement wrongly claims that the product of two countably compact spaces need not be countably compact (countable compactness is finitely productive; the known failure is for countable products), and it imprecisely states that a metric space is second countable/Lindelöf 'if countably compact' (the correct route is via compactness). The hypcheck's construction for non-maximal almost disjoint families is essentially right but omits the key point that the chosen infinite set meets each member finitely, which is what makes the function continuous.

## Issues

### ISSUE-0001 [Open] 誤った「可算コンパクト空間の二つの直積」の主張
- **Category:** Supplement/remark error
- **Location:** supplement「前提を変えると」
- **Detail:** 「可算コンパクト空間の二つの直積は可算コンパクトとは限らない」は誤り。可算コンパクト性は有限直積（したがって二つの直積）で保たれる。実際 $X\times Y$ の可算開被覆に対し、各 $x$ で $\{y:(x,y)\in U_{n}\text{ なる }n\}$ の有限部分被覆を選び、$x$ の近傍で一様にとれることから $X$ の可算被覆を作り、$X$ の可算コンパクト性で有限個の $x_{i}$ に絞り、各ファイバーを $Y$ の可算コンパクト性で有限被覆すればよい。反例として知られているのは「可算コンパクト空間の可算個の直積」であり、二つの直積ではない。
- **Proposed fix:** Replace with: 「また、可算コンパクト空間の可算個の直積は可算コンパクトとは限らないことが知られている（コンパクト空間の任意個の直積、点列コンパクト空間の可算個の直積はそれぞれコンパクト・点列コンパクトである）。なお可算コンパクト性は有限個の直積では保たれる。」
- **Reported:** 2026-10-28 (8ccef3d)

### ISSUE-0002 [Open] 距離空間が「可算コンパクトなら第二可算」という主張
- **Category:** Supplement/remark error
- **Location:** supplement「似た定理」
- **Detail:** 「距離空間が第一可算かつ（可算コンパクトなら）第二可算でリンデレーフである」は誤り。可算コンパクトな距離空間はコンパクト（本ページの問題）であり、コンパクト距離空間は全有界かつ完備で第二可算・リンデレーフになるが、これは「可算コンパクトなら」ではなく「コンパクトなら」によるもので、しかも距離空間が第二可算なのはコンパクト性（全有界性）から出るのであって、単に可算コンパクトだから第二可算という含意は一般の距離空間では成り立たない（例：離散距離空間は第二可算でないが、これは可算コンパクトでないので条件は空虚だが、論理の向きが逆）。より明確に、一般の距離空間は第一可算だが第二可算とは限らず、リンデレーフとも限らない。
- **Proposed fix:** Replace with: 「距離空間は第一可算であり、可算コンパクトな距離空間は実はコンパクト（本ページの問題）で、コンパクト距離空間は全有界ゆえ第二可算・リンデレーフである。このことから本ページの 3, 4 を通して距離空間での同値を見直すこともできる。」
- **Reported:** 2026-10-28 (8ccef3d)

### ISSUE-0003 [Open] hypcheck の「極大でない概素族では擬コンパクトでない」の構成の不備
- **Category:** Supplement/remark error
- **Location:** top:mrowka-psi-properties / hypcheck
- **Detail:** hypcheck は「極大でない概素族 $\mathcal{A}$ では、どの元とも有限にしか交わらない無限集合 $B=\{b_{1}<b_{2}<\cdots\}$ について $f(b_{k})=k$、それ以外で $0$ とした $f$ は連続」と述べるが、$B$ が $\mathcal{A}$ のどの元とも有限にしか交わらないだけでは、$f$ が各 $A\in\mathcal{A}$ で連続であるためには $A\cap B$ が有限でなければならない（$A\cap B$ が無限なら $f$ は $A$ の集積点で不連続になりうる）。極大でないことから存在するのは「$\mathcal{A}$ に属さず、どの元とも有限にしか交わらない無限集合」であり、これは $A\cap B$ が有限という条件を満たすので結論自体は正しいが、hypcheck の記述は「どの元とも有限にしか交わらない」としか書いておらず、$f$ の連続性の根拠（各 $A$ との交わりが有限であること）を明示していない。また $f$ の非有界性は正しい。
- **Proposed fix:** In the hypcheck, replace with: 「極大でない概素族 $\mathcal{A}$ では、$\mathcal{A}$ に属さず各 $A\in\mathcal{A}$ と有限にしか交わらない無限集合 $B=\{b_{1}<b_{2}<\cdots\}$ がとれる。$f(b_{k})\defeq k$、それ以外の点で $0$ と定めると、各 $A$ では $A\cap B$ が有限なので $A$ の近傍 $\{A\}\cup(A\setminus B)$ 上で $f=0$ となり $f$ は $A$ で連続、$\N$ の点では孤立点なので連続。よって $f$ は連続かつ非有界で、$\Psi(\mathcal{A})$ は擬コンパクトでない。」
- **Reported:** 2026-10-28 (8ccef3d)
