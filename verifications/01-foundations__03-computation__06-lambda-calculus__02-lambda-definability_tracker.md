# Verification tracker: `01-foundations/03-computation/06-lambda-calculus/02-lambda-definability.html`

<!-- source: 01-foundations/03-computation/06-lambda-calculus/02-lambda-definability.html -->
<!-- Managed by scripts/verify.py (GitHub Actions). To dispute an [Open] issue, add a line starting with
     **Opus Rebuttal:** at the end of that issue and push; the next run judges it. Do not edit other lines. -->

- Last verified: 2026-10-28 (commit 10fede1, deepseek-chat)
- Open: 12 / Resolved: 0 / Ignored: 0

## Summary of the last run

The page is largely correct. The proofs of lambda-definability of total computable functions and of computability of lambda-definable functions are sound, with appropriate use of Church–Rosser, the fixed point theorem, Kleene's normal form, and totality. The main genuine issue is in the supplement's 'high-level view': the claim that Church numerals are the natural numbers object (initial algebra) in the untyped setting is overstated, since only the iteration (existence) part holds, not uniqueness. The Schwichtenberg statement is slightly imprecise about the type but essentially correct. Other remarks and the historical note are appropriately hedged and correct. No logical gaps or missing hypotheses were found in the proofs.

## Issues

### ISSUE-0001 [Open] Church numerals are not the initial algebra / natural number object in the untyped setting
- **Category:** Supplement/remark error
- **Location:** supplement / 高い視点から：データは振る舞い
- **Detail:** The supplement claims that the Church numeral encoding of the natural numbers can be seen as the universality of the natural numbers object (initial algebra) written in the untyped world as 'iteration over arbitrary f, x'. This is imprecise/overstated. In the untyped lambda calculus the Church numeral $\underline{n}=\lambda fx.f^{n}x$ does satisfy the iteration scheme for arbitrary $f,x$, but the untyped lambda calculus is not a category with a genuine natural numbers object, and the Church encoding is not literally the initial algebra: the universal property (uniqueness of the mediating morphism) fails, since there are many terms $g$ with $g\,\underline{0}=_{\beta}x$ and $g\circ\mathsf{succ}=_{\beta}f\circ g$ that are not $\beta$-equal to the iterator. So 'equals the universality of the natural numbers object' is too strong.
- **Proposed fix:** Replace with: 'The Church numeral $\underline{n}$ realizes the iteration scheme: for any $f,x$ it yields $f^{n}x$. In a typed/categorical setting this is the universal property of the natural numbers object (initial algebra), but in the untyped lambda calculus only the existence part (the iterator) holds, not uniqueness, so it is an analogue rather than a literal instance of the natural numbers object.'
- **Reported:** 2026-10-28 (10fede1)

### ISSUE-0002 [Open] Schwichtenberg's theorem statement about simply typed lambda terms
- **Category:** Supplement/remark error
- **Location:** supplement / 型付きの場合
- **Detail:** The supplement says functions definable by terms of the Church-numeral type $(\alpha\to\alpha)\to\alpha\to\alpha$ in the simply typed lambda calculus are exactly the 'extended polynomials' (Schwichtenberg's theorem). Schwichtenberg's theorem states that the functions $\N\to\N$ definable by closed terms of type $(\alpha\to\alpha)\to\alpha\to\alpha$ (with $\alpha$ a base type, i.e. at type $(o\to o)\to o\to o$) are exactly the extended polynomials. The statement as written is essentially correct for the unary case, but the phrase 'Church-numeral type $(\alpha\to\alpha)\to\alpha\to\alpha$' with a free type variable $\alpha$ is imprecise: the theorem concerns a fixed base type, and for higher types or polymorphic reading the characterization differs. This is a minor imprecision rather than a clear error; flagging for precision.
- **Proposed fix:** State: 'In the simply typed lambda calculus, the functions $\N\to\N$ definable by closed terms of type $(o\to o)\to o\to o$ (where $o$ is a base type) are exactly the extended polynomials (Schwichtenberg's theorem).'
- **Reported:** 2026-10-28 (10fede1)

### ISSUE-0003 [Open] Historical attribution of the predecessor function and Church's thesis motivation
- **Category:** Supplement/remark error
- **Location:** supplement / 歴史
- **Detail:** The supplement says it is 'generally said' that Kleene found the lambda-definability of the predecessor function and that this prompted Church to propose lambda-definability as the definition of 'computable'. This is a commonly repeated account (Kleene's discovery of the predecessor term convinced Church), and is broadly consistent with the historical record; it is hedged with 'と伝えられ' and 'と一般に言われている'. No clear error, but the claim that this was 'the trigger' is a simplification. Not reporting as an error since it is appropriately hedged.
- **Proposed fix:** No change needed; the hedging ('と伝えられ', 'と一般に言われている') is adequate.
- **Reported:** 2026-10-28 (10fede1)

### ISSUE-0004 [Open] Claim that the two definitions (beta-equal vs beta-reduces) coincide via Church–Rosser
- **Category:** Supplement/remark error
- **Location:** supplement / 前提の検討
- **Detail:** The supplement claims that defining lambda-definability with $F\underline{\vec m}\twoheadrightarrow_{\beta}\underline{f(\vec m)}$ gives the same notion as with $=_{\beta}$, by Church–Rosser. This is correct: if $F\underline{\vec m}=_{\beta}\underline{f(\vec m)}$ and $\underline{f(\vec m)}$ is a normal form, then by Church–Rosser $F\underline{\vec m}\twoheadrightarrow_{\beta}\underline{f(\vec m)}$. So the claim is valid. No error.
- **Proposed fix:** No change needed.
- **Reported:** 2026-10-28 (10fede1)

### ISSUE-0005 [Open] Remark on partial functions and Kleene's result
- **Category:** Supplement/remark error
- **Location:** remark
- **Detail:** The remark states that for partial functions, with the added condition that $F\underline{\vec m}$ has no normal form when $f(\vec m)\uparrow$, the computable partial functions coincide with the lambda-definable partial functions (Kleene). This is a correct classical result (Kleene). The remark also says the proof requires showing that when the search in $R\underline{\vec m}\,\underline{0}$ does not terminate the whole term has no normal form, needing solvability theory or a clever term construction. This is accurate. The reference to head reduction and the normalization theorem as tools is also reasonable. No error.
- **Proposed fix:** No change needed.
- **Reported:** 2026-10-28 (10fede1)

### ISSUE-0006 [Open] Problem solution: exp at m=0 and eta
- **Category:** Unsupported fact
- **Location:** logic:prob-church-exp / solution
- **Detail:** The solution states that $\mathsf{exp}\,\underline{n}\,\underline{0}\twoheadrightarrow_{\beta}\lambda x.x$ and that this is not $\beta$-equal to $\underline{1}=\lambda fx.fx$, but is equal if eta is allowed. This is correct: $\lambda x.x$ is not $\beta$-equal to $\lambda fx.fx$ (they are only $\eta$-equal), consistent with the problem's restriction $m\ge1$. No error.
- **Proposed fix:** No change needed.
- **Reported:** 2026-10-28 (10fede1)

### ISSUE-0007 [Open] Step 2 of computable-lambda: the recursion uses zero? on G but the fixed point equation direction
- **Category:** Logical gap
- **Location:** logic:computable-lambda / Step 2
- **Detail:** In Step 2, $R\defeq Y(\lambda r.\lambda\vec x t.\ \mathsf{zero?}(G\vec x t)\,t\,(r\vec x(\mathsf{succ}\,t)))$. The fixed point theorem gives $R=_{\beta}\lambda\vec x t.\mathsf{zero?}(G\vec x t)\,t\,(R\vec x(\mathsf{succ}\,t))$. Then if $g(\vec m,t)=0$, $\mathsf{zero?}(G\underline{\vec m}\,\underline t)\twoheadrightarrow_{\beta}\mathsf{T}$, so $R\underline{\vec m}\,\underline t=_{\beta}\mathsf{T}\,\underline t\,(\cdots)=_{\beta}\underline t$. If $g(\vec m,t)\neq0$, $\mathsf{zero?}\twoheadrightarrow_{\beta}\mathsf{F}$, so $R\underline{\vec m}\,\underline t=_{\beta}\mathsf{F}\,\underline t\,(R\underline{\vec m}\,\underline{t+1})=_{\beta}R\underline{\vec m}\,\underline{t+1}$. This is correct. The induction on $t_0-t$ giving $R\underline{\vec m}\,\underline t=_{\beta}\underline{t_0}$ for $t\le t_0$ is valid. No gap.
- **Proposed fix:** No change needed.
- **Reported:** 2026-10-28 (10fede1)

### ISSUE-0008 [Open] Step 1 primitive recursion: the induction claim uses S with x substituted
- **Category:** Logical gap
- **Location:** logic:computable-lambda / Step 1
- **Detail:** In Step 1, for primitive recursion, $S_{\vec x}\defeq\lambda p.\mathsf{pair}(\mathsf{succ}(\mathsf{fst}\,p))(H\vec x(\mathsf{fst}\,p)(\mathsf{snd}\,p))$ and $F\defeq\lambda\vec xy.\mathsf{snd}(y\,S_{\vec x}(\mathsf{pair}\,\underline 0\,(G\vec x)))$. The text says: for $S$ with $\vec x$ replaced by $\underline{\vec m}$, by induction on $k$, $S^{k}(\mathsf{pair}\,\underline 0\,(G\underline{\vec m}))=_{\beta}\mathsf{pair}\,\underline k\,\underline{f(\vec m,k)}$. This is correct: base $k=0$ gives $\mathsf{pair}\,\underline 0\,(G\underline{\vec m})=_{\beta}\mathsf{pair}\,\underline 0\,\underline{f(\vec m,0)}$ since $G$ defines $g$ and $f(\vec m,0)=g(\vec m)$; step uses $H$ defining $h$. Then $\underline n\,S(\cdots)\twoheadrightarrow_{\beta}S^{n}(\cdots)$ and $F\underline{\vec m}\,\underline n=_{\beta}\underline{f(\vec m,n)}$. Valid. No gap.
- **Proposed fix:** No change needed.
- **Reported:** 2026-10-28 (10fede1)

### ISSUE-0009 [Open] Step 3 uses Kleene normal form with g primitive recursive and total
- **Category:** Missing hypothesis
- **Location:** logic:computable-lambda / Step 3
- **Detail:** Step 3 writes $f(\vec m)=u(\vec m,t_0(\vec m))$, $t_0(\vec m)=\min\{t:g(\vec m,t)=0\}$ with $u$ and $g\defeq1\mathbin{\dot-}\chi_{T_k}(e,\cdot,\cdot)$ primitive recursive, and $t_0$ always exists since $f$ is total. This matches Kleene's normal form theorem (comp:normal-form). The use of totality to guarantee existence of $t_0$ is correct and noted in hypcheck. No missing hypothesis.
- **Proposed fix:** No change needed.
- **Reported:** 2026-10-28 (10fede1)

### ISSUE-0010 [Open] Citation of logic:normal-form-unique.1 in lambda-computable
- **Category:** Improper link
- **Location:** logic:lambda-computable / proof
- **Detail:** The proof cites \ref{logic:normal-form-unique.1} to conclude that since $F\underline{\vec m}=_{\beta}\underline{f(\vec m)}$ and $\underline{f(\vec m)}$ is a normal form, there is a common reduct which must be $\underline{f(\vec m)}$ itself, hence $F\underline{\vec m}\twoheadrightarrow_{\beta}\underline{f(\vec m)}$. The label logic:normal-form-unique is 'corollary 1.11 正規形の一意性と無矛盾性'; item 1 presumably states uniqueness of normal forms / that a term beta-equal to a normal form reduces to it. This is the right target. No improper link.
- **Proposed fix:** No change needed.
- **Reported:** 2026-10-28 (10fede1)

### ISSUE-0011 [Open] Citation of logic:normal-form-has-head-reduction and normalization-theorem in remark
- **Category:** Improper link
- **Location:** remark
- **Detail:** The remark cites \ref{logic:normal-form-has-head-reduction} (corollary 4.9 頭部正規形の存在) and \tref{logic:normalization-theorem} (theorem 4.8 正規化定理) as tools for showing that a term with infinite head reduction has no normal form. The statement 'a term with infinite head reduction has no normal form' is correct (if it had a normal form, head reduction would reach it). The citation is appropriate. No improper link.
- **Proposed fix:** No change needed.
- **Reported:** 2026-10-28 (10fede1)

### ISSUE-0012 [Open] Claim that typed lambda calculus is like for-programs/primitive recursion
- **Category:** Supplement/remark error
- **Location:** supplement / 型付きの場合
- **Detail:** The supplement says the relation between simply typed lambda calculus and extended polynomials is 'similar to' the relation between for-programs and primitive recursive functions (\ref{comp:pr-equals-for}). This is an analogy, appropriately hedged with '似ている'. Both are characterizations of a restricted class by a termination-guaranteeing formalism. Not a mathematical error.
- **Proposed fix:** No change needed.
- **Reported:** 2026-10-28 (10fede1)
