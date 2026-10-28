# Verification tracker: `02-algebra/04-associative-rings/01-module-theory/06-pid-modules.html`

<!-- source: 02-algebra/04-associative-rings/01-module-theory/06-pid-modules.html -->
<!-- Managed by scripts/verify.py (GitHub Actions). To dispute an [Open] issue, add a line starting with
     **Opus Rebuttal:** at the end of that issue and push; the next run judges it. Do not edit other lines. -->

- Last verified: 2026-10-28 (commit 10fede1, deepseek-chat)
- Open: 10 / Resolved: 0 / Ignored: 0

## Summary of the last run

The page is a careful treatment of the structure theorem for finitely generated modules over a PID. The main proofs (submodule freeness, Smith normal form, structure theorem existence and uniqueness, Jordan normal form) are logically sound. The computability section is largely correct. The issues found are minor: (1) the supplement's parenthetical tying submodule freeness to global dimension ≤ 1 via a Z-specific citation is imprecise; (2) the Dedekind domain remark is vague about the Steinitz class; (3) the example mod:smith-not-pr-example asserts a lower bound s(p) >= A(p,p)-p that depends on an undefined instruction set L; (4) Step 3 of the Smith normal form proof omits the observation that x_{i1}=0 so the pivot is unchanged before the Bezout step. None of these are fatal, but they are genuine imprecisions worth fixing.

## Issues

### ISSUE-0001 [Open] Global dimension claim in supplement is imprecise
- **Category:** Supplement/remark error
- **Location:** mod:sec-pm-jordan / supplement (高い視点)
- **Detail:** The supplement says the key point of the proof is that submodules of free modules are free, glossing this as 'PID の大域次元が 1 以下であること、\ref{ha:pd-z} の一般化'. The cited \ref{ha:pd-z} is '整数上の射影次元' (projective dimension over Z), i.e. a statement about Z, not a general statement about global dimension of a PID. More importantly, 'PID has global dimension ≤ 1' is true, but the parenthetical presents the freeness of submodules of free modules as being the same as (or a direct consequence of) global dimension ≤ 1, which is a stronger/looser identification: global dimension ≤ 1 is equivalent to 'submodules of projective modules are projective', and for a domain this yields that submodules of free modules are free only together with the fact that projective = free over a local ring / PID. As stated it is an imprecise side comment tying a specific freeness statement to a global-dimension bound via a citation to a Z-specific result.
- **Proposed fix:** Replace with: '証明の要点は、自由加群の部分加群が自由であること（\ref{mod:pid-submodule-free}。これは PID の大域次元が $1$ 以下であることと同値な事実「射影加群の部分加群は射影的」と、PID 上では射影加群が自由であることから従う。$\Z$ の場合が \ref{ha:pd-z}）と、行列の対角化である。'
- **Reported:** 2026-10-28 (10fede1)

### ISSUE-0002 [Open] Dedekind domain torsion-free statement needs finite generation and is about projectivity only
- **Category:** Supplement/remark error
- **Location:** mod:sec-pm-jordan / supplement (高い視点)
- **Detail:** The supplement states 'デデキント整域上では有限生成ねじれなし加群は射影的（自由とは限らない）で、イデアル類群が障害になる'. This is correct for finitely generated torsion-free modules over a Dedekind domain (they are projective, and free iff the relevant ideal class is trivial). However the sentence is placed as a contrast to the PID case and could be read as claiming the obstruction is the ideal class group for the module itself; more precisely, a finitely generated torsion-free module over a Dedekind domain is projective, and it is free iff its class in the ideal class group (the Steinitz class) is trivial. The statement as written is essentially correct but the phrase 'イデアル類群が障害になる' is vague about which class. This is borderline; flagging as imprecise rather than false.
- **Proposed fix:** Make precise: 'デデキント整域上では有限生成ねじれなし加群は射影的（自由とは限らない）。実際、階数 $r$ の有限生成ねじれなし加群は $A^{r-1}\oplus I$（$I$ は $0$ でないイデアル）の形で書け、これが自由になるのは $I$ のイデアル類が自明なときに限る（\ref{ring:page-dedekind}）。'
- **Reported:** 2026-10-28 (10fede1)

### ISSUE-0003 [Open] Kannan–Bachem attribution and complexity claim
- **Category:** Supplement/remark error
- **Location:** mod:sec-pm-computability / remark 具体的な環での計算量
- **Detail:** The remark attributes a polynomial-time Smith normal form algorithm over Z to 'カナンとバッケム、1979 年'. The standard references are Kannan–Bachem (1979) 'Polynomial algorithms for computing the Smith and Hermite normal forms of an integer matrix' (SIAM J. Comput.), which is indeed a polynomial-time algorithm for Smith normal form over Z. The attribution appears correct. However the remark also says '上の素朴な手順では途中の成分の桁数が指数的に増えることがあるが、それでも原始再帰的である' — this is fine. No error here; not reporting.
- **Proposed fix:** No change needed.
- **Reported:** 2026-10-28 (10fede1)

### ISSUE-0004 [Open] Claim that s(p) >= A(p,p) - p for a specific language L
- **Category:** Unsupported fact
- **Location:** mod:smith-not-pr-example
- **Detail:** The example defines s(p) as the number of steps for a program computing A(p,p) to halt, and asserts '言語 L の基本命令は変数の値の最大値を 1 ステップに高々 1 しか増やさないので s(p) >= A(p,p) - p'. This lower bound depends on the specific instruction set of 'language L', which is never defined on this page. Without a precise definition of L (its instructions and their effect on variable values), the inequality s(p) >= A(p,p) - p is not justified. The argument that s grows faster than any primitive recursive function is plausible but rests on this unstated lower bound.
- **Proposed fix:** Either define L precisely (e.g. 'L は各ステップで一つの変数の値を高々 1 増やす命令のみをもつ') or replace the bound with a clear statement: 'L として、各基本命令が変数の最大値を高々 1 しか増やさないものをとれば、A(p,p) を出力するには少なくとも A(p,p)-p ステップ必要なので s(p) >= A(p,p)-p。'
- **Reported:** 2026-10-28 (10fede1)

### ISSUE-0005 [Open] Claim that 1/p code forces m >= s(p) and inverse not primitive recursive
- **Category:** Supplement/remark error
- **Location:** mod:smith-not-pr-example
- **Detail:** The example claims 'この表示で 1/p を表すコード (a,b,m) は p|b をみたすので m >= s(p)。したがって逆元 p -> 1/p は原始再帰的でない'. The step 'm >= s(p)' follows from the code-validity condition (for every prime q dividing b, s(q) <= m), so for q=p we get s(p) <= m. This is correct. The conclusion that p -> 1/p is not primitive recursive: a primitive recursive function would have its output code bounded by a primitive recursive function of the input, but the minimal valid code for 1/p has m >= s(p), which grows faster than any primitive recursive function. This reasoning is sound provided the code for 1/p must have p | b (true, since 1/p in lowest terms has denominator p). No error.
- **Proposed fix:** No change needed.
- **Reported:** 2026-10-28 (10fede1)

### ISSUE-0006 [Open] Claim that over a field the Smith form can be computed primitive recursively without normalization
- **Category:** Supplement/remark error
- **Location:** mod:smith-not-pr-example
- **Detail:** The example ends: '一方、単元倍の正規化を要求しなければ、(p) 自身がスミス標準形であり、体上では分数を使わない掃き出し（行に 0 でない元を掛けて引く）で対角化できるので、原始再帰的に計算できる'. Over a field, any nonzero matrix can be diagonalized to diag(1,...,1,0,...,0) using row/column operations that only multiply by nonzero elements and add multiples — no division needed. So the Smith form (without unit normalization) is computable primitive recursively given the field operations are primitive recursive. This is correct. However, the phrase '単元倍の正規化を要求しなければ' is slightly misleading: even with normalization to diag(1,...,1), over a field one can achieve it without division (just scale pivots to 1 by multiplying by the inverse, which requires the inverse map to be primitive recursive — which it is in a field presentation where inversion is primitive recursive). The claim is essentially correct; not reporting as an error.
- **Proposed fix:** No change needed.
- **Reported:** 2026-10-28 (10fede1)

### ISSUE-0007 [Open] Step 2 of Smith normal form: termination argument for ell decrease
- **Category:** Logical gap
- **Location:** mod:smith-normal-form / Step 2
- **Detail:** Step 2 argues that if x_{11} does not divide some x_{1j}, applying the Bezout column transform replaces x_{11} by gcd(x_{11},x_{1j}) and 'ell は真に減る（gcd | x_{11} で、x_{11} は gcd を割り切らない。そうでないと x_{11} | x_{1j}）'. The parenthetical justification is correct: if x_{11} | gcd then x_{11} | x_{1j}, contradiction. And gcd | x_{11} with x_{11} not dividing gcd implies ell(gcd) < ell(x_{11}). This is fine. The termination is then justified by ell being a nonnegative integer. No gap.
- **Proposed fix:** No change needed.
- **Reported:** 2026-10-28 (10fede1)

### ISSUE-0008 [Open] Step 3 of Smith normal form: adding row i to row 1 and returning to Step 2
- **Category:** Logical gap
- **Location:** mod:smith-normal-form / Step 3
- **Detail:** Step 3 says: if x_{11} does not divide some x_{ij} in the remaining block, add row i to row 1, so x_{ij} appears in row 1, then return to Step 2 and ell(x_{11}) strictly decreases. The claim that ell(x_{11}) strictly decreases upon returning to Step 2 is not immediate: after adding row i to row 1, the (1,1) entry becomes x_{11} + x_{i1}. Since Step 2 already made column 1 zero below the pivot, x_{i1} = 0, so the (1,1) entry is unchanged (= x_{11}), and the new entry x_{ij} appears in position (1,j). Then Step 2's Bezout transform on (x_{11}, x_{ij}) reduces ell(x_{11}) to ell(gcd(x_{11},x_{ij})) < ell(x_{11}) because x_{11} does not divide x_{ij}. This is correct, but the text does not explicitly note that x_{i1} = 0 (so the pivot is unchanged before the Bezout step). Minor gap in exposition, but the argument is recoverable. Borderline; the reasoning is essentially complete.
- **Proposed fix:** Add: '第 1 列はすでに掃き出されているので x_{i1}=0 であり、第 i 行を第 1 行に足しても (1,1) 成分は x_{11} のままで、(1,j) 成分に x_{ij} が現れる。'
- **Reported:** 2026-10-28 (10fede1)

### ISSUE-0009 [Open] Corollary mod:pid-torsion-free-free: T(M) finitely generated torsion
- **Category:** Missing hypothesis
- **Location:** mod:pid-torsion-free-free / statement
- **Detail:** The corollary states 'M が有限生成なら M ≅ A^r ⊕ T(M) で、T(M) は有限生成なねじれ加群'. The claim that T(M) is finitely generated follows because T(M) is a direct summand of the finitely generated module M (via the structure theorem), hence finitely generated. This is correct given the structure theorem. No missing hypothesis.
- **Proposed fix:** No change needed.
- **Reported:** 2026-10-28 (10fede1)

### ISSUE-0010 [Open] Citation of ring:pid-basic.2 in uniqueness proof
- **Category:** Improper link
- **Location:** mod:pid-structure-unique / Step 2
- **Detail:** Step 2 cites '\ref{ring:pid-basic.2}' for 'A/(p)（体）'. The label table lists ring:pid-basic.1 as '単項イデアル整域の基本性質' (proposition 1.7). The suffix .2 would be item 2 of that proposition. Whether item 2 states that A/(p) is a field for p irreducible is not verifiable from the table, but it is a standard basic property of PIDs and plausibly item 2. Not reporting as an error without evidence.
- **Proposed fix:** No change needed.
- **Reported:** 2026-10-28 (10fede1)
