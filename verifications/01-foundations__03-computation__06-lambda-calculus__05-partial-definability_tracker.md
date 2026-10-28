# Verification tracker: `01-foundations/03-computation/06-lambda-calculus/05-partial-definability.html`

<!-- source: 01-foundations/03-computation/06-lambda-calculus/05-partial-definability.html -->
<!-- Managed by scripts/verify.py (GitHub Actions). To dispute an [Open] issue, add a line starting with
     **Opus Rebuttal:** at the end of that issue and push; the next run judges it. Do not edit other lines. -->

- Last verified: 2026-10-28 (commit 8ccef3d, deepseek-chat)
- Open: 4 / Resolved: 0 / Ignored: 0

## Summary of the last run

(none)

## Issues

### ISSUE-0001 [Open] Condition 1 with twoheadrightarrow is not equivalent to =_β
- **Category:** Supplement/remark error
- **Location:** supplement / 値の表し方
- **Detail:** The supplement claims that replacing condition 1 by $F\underline{\vec{m}}\twoheadrightarrow_{\beta}\underline{f(\vec{m})}$ gives the same notion by Church–Rosser. This is false: $=_\beta$ allows the numeral to reduce further and come back, whereas $\twoheadrightarrow_\beta$ requires the numeral to be reached by forward reduction only. For example, take $F$ such that $F\underline{m}\to_\beta \underline{0}$ but also $F\underline{m}\to_\beta (\lambda x.\underline{0})(\lambda y.y\,\underline{0})$; then $F\underline{m}=_\beta\underline{0}$ but $F\underline{m}\twoheadrightarrow_\beta\underline{0}$ may fail if the only reduction path to $\underline{0}$ passes through a detour. Church–Rosser gives confluence, not that every $=_\beta$-equal term forward-reduces to the numeral.
- **Proposed fix:** Replace with: 'If condition 1 is strengthened to $F\underline{\vec{m}}\twoheadrightarrow_{\beta}\underline{f(\vec{m})}$, the resulting notion is stronger than $=_\beta$; the two coincide only when $F\underline{\vec{m}}$ has a head reduction to the numeral (as in Theorem 5.6). Church–Rosser alone does not make them equivalent.'
- **Reported:** 2026-10-28 (8ccef3d)

### ISSUE-0002 [Open] Claim that Y F does not reduce to F(Y F) is imprecise
- **Category:** Supplement/remark error
- **Location:** hypcheck / チューリングの Θ
- **Detail:** The hypcheck says '$Y$ では $YF$ が $F(YF)$ に簡約されない'. For the standard $Y=\lambda f.(\lambda x.f(xx))(\lambda x.f(xx))$, $YF\to_\beta F(YF)$ does hold (in fact $YF\twoheadrightarrow_\beta F(YF)$). What fails is that $YF$ does not head-reduce to $F(YF)$ in the specific two-step head pattern used for $\Theta$; the reduction of $YF$ first produces $F((\lambda x.f(xx))(\lambda x.f(xx)))$ only after the inner redex, and the head reduction of $YF$ is not of the form $YF\to_h F(YF)$. The blanket statement 'is not reduced to' is false as written.
- **Proposed fix:** Replace with: 'For $Y$, $YF\to_\beta F(YF)$ holds, but $YF$ does not head-reduce to $F(YF)$ in the two head steps available for $\Theta$; the head reduction of $YF$ does not directly expose $F(YF)$ as the head reduct, so the Step 3 sequence cannot be written in the same form.'
- **Reported:** 2026-10-28 (8ccef3d)

### ISSUE-0003 [Open] Denotational claim about head-normal-form-less terms being ⊥ is overstated
- **Category:** Supplement/remark error
- **Location:** supplement / 高い視点から
- **Detail:** The supplement states '表示的意味論では、頭部正規形をもたない項は最小元 ⊥ に解釈されることが知られており'. This is not true in general: in Scott's $D_\infty$ / graph models, a term without head normal form (unsolvable) is interpreted as ⊥, but this depends on the model. In models where the interpretation is not 'by solvability' (e.g. some models distinguishing unsolvables, or the term model), a term without head normal form need not be ⊥. The statement is stated more strongly than the literature supports.
- **Proposed fix:** Replace with: 'In Scott's continuous/graph models (and models where the interpretation is determined by solvability), a term without head normal form is interpreted as the least element ⊥; this is model-dependent and not true in every denotational model.'
- **Reported:** 2026-10-28 (8ccef3d)

### ISSUE-0004 [Open] c.e. claim about the domain is correct but the 'general' phrasing is imprecise
- **Category:** Supplement/remark error
- **Location:** supplement / 定義域の判定
- **Detail:** The supplement says '{\vec m : F\underline{\vec m} has a normal form} is the domain of a partial computable function (a c.e. set)'. This is fine for a fixed $F$, but the phrasing '一般には決定可能でない' combined with the reference to Problem 5.10 could mislead: Problem 5.10 shows the set of ALL closed terms with a normal form is undecidable, not that every such set $\{\vec m: F\underline{\vec m}\text{ has nf}\}$ is undecidable. For some $F$ (e.g. $F$ always returning a numeral) the set is all of $\N^k$, which is decidable.
- **Proposed fix:** Replace with: 'For a fixed $F$, $\{\vec m:F\underline{\vec m}\text{ has a normal form}\}$ is the domain of a partial computable function, hence c.e.; it need not be decidable (e.g. when $F$ defines a non-total computable function with undecidable domain). Problem 5.10 shows the global set of closed terms with a normal form is undecidable.'
- **Reported:** 2026-10-28 (8ccef3d)
