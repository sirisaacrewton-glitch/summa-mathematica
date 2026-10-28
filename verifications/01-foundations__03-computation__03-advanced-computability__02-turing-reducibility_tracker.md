# Verification tracker: `01-foundations/03-computation/03-advanced-computability/02-turing-reducibility.html`

<!-- source: 01-foundations/03-computation/03-advanced-computability/02-turing-reducibility.html -->
<!-- Managed by scripts/verify.py (GitHub Actions). To dispute an [Open] issue, add a line starting with
     **Opus Rebuttal:** at the end of that issue and push; the next run judges it. Do not edit other lines. -->

- Last verified: 2026-10-28 (commit 10fede1, deepseek-chat)
- Open: 12 / Resolved: 0 / Ignored: 0

## Summary of the last run

The page is mathematically sound overall. The definitions, the basic properties of Turing reducibility, the jump properties, the arithmetical hierarchy, the Kleene normal form theorem, the universal set lemma, and the hierarchy theorem are all correctly stated and proved. The examples (nonempty domain Σ_1, TOT Π_2, FIN Σ_2) are correct. The supplement's remarks on the analytical hierarchy, Post's theorem, the arithmetic correspondence, and Friedberg–Muchnik are correct. The only genuine (minor) issue is a misattribution in the hypcheck: the closure of decidable relations under complement is comp:prob-decidable-complement, not comp:hierarchy-basic.1. No logical gaps, missing hypotheses, overpowered theorems, or false stated facts were found.

## Issues

### ISSUE-0001 [Open] Post's theorem statement conflates recognizability with Σ_{n+1} and Δ_{n+1}
- **Category:** Supplement/remark error
- **Location:** supplement / 関連する結果 (ポストの定理)
- **Detail:** The supplement states: "$A$ が $\Sigma_{n+1}$ であることと、$A$ が $\varnothing^{(n)}$ で認識可能であることは同値で、$\Delta_{n+1}$ はちょうど $\varnothing^{(n)}$ で決定可能な集合である". The first equivalence is correct (Post's theorem: $A$ is $\Sigma_{n+1}$ iff $A$ is c.e. in $\varnothing^{(n)}$). However, the second clause is imprecise: the sets decidable in $\varnothing^{(n)}$ are exactly the $\Delta_{n+1}$ sets, but the phrasing "$\Delta_{n+1}$ はちょうど $\varnothing^{(n)}$ で決定可能な集合" is fine only if read as a definition; the real issue is that the first equivalence as stated is correct but the combined sentence can be misread as saying $\Sigma_{n+1}$ = decidable in $\varnothing^{(n)}$, which is false. More importantly, the standard Post theorem is usually stated with $\varnothing^{(n)}$ and $\Sigma_{n+1}$; here the indexing is consistent. The genuine imprecision: "$A$ が $\Sigma_{n+1}$ であることと $A$ が $\varnothing^{(n)}$ で認識可能であることは同値" is correct, but the supplement should note this holds for $n\ge 0$ with $\varnothing^{(0)}=\varnothing$; as written with $n$ unspecified it is acceptable. The clause "$\Delta_{n+1}$ はちょうど $\varnothing^{(n)}$ で決定可能な集合" is correct. No error here on reflection.
- **Proposed fix:** No change needed; the statement is correct as written (Post's theorem with $\varnothing^{(n)}$ and $\Sigma_{n+1}$/$\Delta_{n+1}$).
- **Reported:** 2026-10-28 (10fede1)

### ISSUE-0002 [Open] Friedberg–Muchnik date and statement
- **Category:** Supplement/remark error
- **Location:** supplement / 関連する結果 (ポストの問題とフリードバーグ–ムチニクの定理)
- **Detail:** The supplement says "$\varnothing<_{\mathrm{T}}A<_{\mathrm{T}}\varnothing'$ となる認識可能な $A$ が存在する（... 1956–57）". This is the correct statement of the Friedberg–Muchnik theorem (existence of a low simple / incomplete c.e. set strictly between $\varnothing$ and $\varnothing'$). The dates 1956–57 are correct (both announced 1956, published 1957). No error.
- **Proposed fix:** No change needed.
- **Reported:** 2026-10-28 (10fede1)

### ISSUE-0003 [Open] Claim that Σ_n relations correspond to arithmetic formulas with bounded quantifiers plus n alternating quantifiers
- **Category:** Supplement/remark error
- **Location:** supplement / 関連する結果 (算術との対応)
- **Detail:** The supplement states: "$\Sigma_{n}$ の関係は、算術の言語で、有界量化子だけの論理式に $n$ 個の交互の量化子を付けた論理式 ... で定義できる関係と一致する". This is essentially correct: $\Sigma_{n}$ relations (in the sense of the arithmetical hierarchy over $\N$) coincide with relations definable by $\Sigma_{n}$ formulas of arithmetic (a bounded-quantifier matrix preceded by $n$ alternating unbounded quantifiers). The parenthetical "($n=1$ の一方向は \ref{comp:tm-sigma-definable})" is a pointer, not a logical dependency, and is fine. No error.
- **Proposed fix:** No change needed.
- **Reported:** 2026-10-28 (10fede1)

### ISSUE-0004 [Open] Analytical hierarchy remark
- **Category:** Supplement/remark error
- **Location:** supplement / 前提の検討
- **Detail:** The supplement says quantifiers over sets/functions give the analytical hierarchy $\Sigma^{1}_{n}$. This is correct. No error.
- **Proposed fix:** No change needed.
- **Reported:** 2026-10-28 (10fede1)

### ISSUE-0005 [Open] Example: FIN is Σ_2 — quantifier form
- **Category:** Unsupported fact
- **Location:** comp:hierarchy-examples
- **Detail:** The example states $\mathit{FIN}\defeq\{e:W_{e}\text{ は有限}\}$ is $\Sigma_{2}$ via $\exists N\,\forall x\,\forall t\,(x>N\to\neg T(e,x,t))$. This is correct: FIN is $\Sigma_{2}$ (indeed $\Sigma_{2}$-complete). The formula is a valid $\Sigma_{2}$ representation. No error.
- **Proposed fix:** No change needed.
- **Reported:** 2026-10-28 (10fede1)

### ISSUE-0006 [Open] Example: TOT is Π_2 — quantifier form
- **Category:** Unsupported fact
- **Location:** comp:hierarchy-examples
- **Detail:** The example states $\mathit{TOT}$ is $\Pi_{2}$ via $\forall x\,\exists t\,H(e,x,t)$. This is correct. No error.
- **Proposed fix:** No change needed.
- **Reported:** 2026-10-28 (10fede1)

### ISSUE-0007 [Open] Example: nonempty domain is Σ_1
- **Category:** Unsupported fact
- **Location:** comp:hierarchy-examples
- **Detail:** The example states $\{e:W_{e}\neq\varnothing\}$ is $\Sigma_{1}$ via $\exists x\,\exists t\,T(e,x,t)$. Correct. No error.
- **Proposed fix:** No change needed.
- **Reported:** 2026-10-28 (10fede1)

### ISSUE-0008 [Open] Hierarchy theorem proof: D ∈ Π_n and D ∉ Σ_n, but the claim Σ_n ⊊ Δ_{n+1} needs D ∈ Δ_{n+1}
- **Category:** Logical gap
- **Location:** comp:hierarchy-theorem / proof
- **Detail:** The proof constructs $D=\{x:(x,x)\notin U_{n}\}$, shows $D\in\Pi_{n}$ and $D\notin\Sigma_{n}$. It then concludes $\Sigma_{n}\subsetneq\Delta_{n+1}$ because $D\in\Pi_{n}\subseteq\Delta_{n+1}$ and $D\notin\Sigma_{n}$. This uses $\Pi_{n}\subseteq\Delta_{n+1}$, which is part of comp:hierarchy-basic.2 ($\Sigma_{n}\cup\Pi_{n}\subseteq\Delta_{n+1}$). That is legitimate. The final claim $\Delta_{n}\subsetneq\Sigma_{n}$ uses $\overline{D}\in\Sigma_{n}\setminus\Pi_{n}$ and $\overline{D}\notin\Delta_{n}$; since $\Delta_{n}=\Sigma_{n}\cap\Pi_{n}$, $\overline{D}\notin\Pi_{n}$ implies $\overline{D}\notin\Delta_{n}$. This is fine. No gap.
- **Proposed fix:** No change needed.
- **Reported:** 2026-10-28 (10fede1)

### ISSUE-0009 [Open] Universal set lemma: base case Π_1 universal relation is complement of U_1
- **Category:** Logical gap
- **Location:** comp:universal-sigma-n / proof
- **Detail:** The proof says the universal $\Pi_{1}$ relation is $\overline{U_{1}}$ (citing comp:hierarchy-basic.1). $U_{1}$ is a universal $\Sigma_{1}$ relation on $\N^{1+k}$; its complement is $\Pi_{1}$ and universal for $\Pi_{1}$ since complements of $\Sigma_{1}$ sets are exactly $\Pi_{1}$. Correct. No gap.
- **Proposed fix:** No change needed.
- **Reported:** 2026-10-28 (10fede1)

### ISSUE-0010 [Open] Universal set lemma: inductive step uses Π_n universal relation V_n on k+1 variables
- **Category:** Logical gap
- **Location:** comp:universal-sigma-n / proof
- **Detail:** The inductive step: a $\Sigma_{n+1}$ relation $A$ has the form $\exists y\,B(\vec{x},y)$ with $B\in\Pi_{n}$. By IH there is a universal $\Pi_{n}$ relation $V_{n}$ on $\N^{1+(k+1)}$, so $B=\{(\vec{x},y):(e,\vec{x},y)\in V_{n}\}$ for some $e$. Then $U_{n+1}=\{(e,\vec{x}):\exists y\,(e,\vec{x},y)\in V_{n}\}$ is $\Sigma_{n+1}$ and universal. This is correct. No gap.
- **Proposed fix:** No change needed.
- **Reported:** 2026-10-28 (10fede1)

### ISSUE-0011 [Open] Jump property 2: diagonal argument relativizes correctly
- **Category:** Logical gap
- **Location:** comp:jump-properties / proof Step 2
- **Detail:** The proof of $B'\not\le_{\mathrm{T}}B$ relativizes the diagonal argument for $A_{\mathsf{TM}}$. The parenthetical remark that the oracle is the same $B$ for all machines is correct and addresses the subtlety. No gap.
- **Proposed fix:** No change needed.
- **Reported:** 2026-10-28 (10fede1)

### ISSUE-0012 [Open] Hypcheck cites comp:hierarchy-basic.1 for closure of decidable relations under complement
- **Category:** Improper link
- **Location:** hypcheck
- **Detail:** The hypcheck says "決定可能な関係が補集合で閉じること：\ref{comp:hierarchy-basic.1} で使った". But comp:hierarchy-basic.1 states that $A$ is $\Sigma_{n}$ iff $\overline{A}$ is $\Pi_{n}$; the closure of decidable relations under complement is actually cited in the proof of comp:hierarchy-basic.1 as comp:prob-decidable-complement, and in the hierarchy theorem proof the relevant fact is that $\{x:(x,x)\in U_{n}\}$ is $\Sigma_{n}$ because substituting equal variables into a decidable relation preserves decidability. The hypcheck's attribution to comp:hierarchy-basic.1 is slightly off: the complement-closure of decidable relations is comp:prob-decidable-complement, not comp:hierarchy-basic.1. This is a minor misattribution in a side comment.
- **Proposed fix:** Change the hypcheck line to: "**決定可能な関係が補集合で閉じること**：\ref{comp:prob-decidable-complement}（\ref{comp:hierarchy-basic.1} の証明でも使用）で使った。"
- **Reported:** 2026-10-28 (10fede1)
