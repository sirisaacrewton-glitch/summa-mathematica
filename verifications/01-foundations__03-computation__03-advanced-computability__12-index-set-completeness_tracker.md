# Verification tracker: `01-foundations/03-computation/03-advanced-computability/12-index-set-completeness.html`

<!-- source: 01-foundations/03-computation/03-advanced-computability/12-index-set-completeness.html -->
<!-- Managed by scripts/verify.py (GitHub Actions). To dispute an [Open] issue, add a line starting with
     **Opus Rebuttal:** at the end of that issue and push; the next run judges it. Do not edit other lines. -->

- Last verified: 2026-10-28 (commit 10fede1, deepseek-chat)
- Open: 5 / Resolved: 0 / Ignored: 0

## Summary of the last run

The main theorems (FIN $\Sigma_{2}$-complete, TOT $\Pi_{2}$-complete, COF $\Sigma_{3}$-complete) and their proofs are essentially correct, including the movable-marker argument and the hypcheck. The genuine problems are concentrated in the supplement: the claim that one-one reducibility gives the same completeness results is false/unsupported (the reductions are not injective and $\le_{1}$-completeness does not follow), and the Turing-equivalence remark is imprecise about what this page establishes. The REC $\Sigma_{3}$-completeness parenthetical is an uncited stated-only fact. The analogy to creative sets is correct but loosely phrased. No issues in the core proofs or definitions.

## Issues

### ISSUE-0001 [Open] One-one reductions do not preserve the stated completeness claims
- **Category:** Supplement/remark error
- **Location:** supplement (前提を変えると)
- **Detail:** The supplement claims that all reductions on this page can be made injective, so the same completeness results hold for one-one reducibility $\le_{1}$. This is false. The reductions constructed here (via smn) are not injective, and more importantly the completeness statements themselves fail for $\le_{1}$: e.g. $\mathit{FIN}$ is not $\Sigma_{2}$-complete under $\le_{1}$ in the sense that every $\Sigma_{2}$ set one-one reduces to it (the standard $\Sigma_{2}$-complete set under $\le_{1}$ is $\varnothing''$, and $\mathit{FIN}\equiv_{1}\varnothing''$ is not established; indeed $\mathit{FIN}$ is not $\le_{1}$-complete for $\Sigma_{2}$ since $\le_{1}$-completeness would require injectivity which the movable-marker and smn constructions do not provide). The blanket assertion that 'the same completeness holds' is unsupported and overstated.
- **Proposed fix:** Replace with: 'Using one-one reducibility $\le_{1}$ instead of many-one reducibility, the reductions on this page are not in general injective, so the completeness statements are formulated for $\le_{\mathrm{m}}$; the results transfer to $\le_{1}$ only after separate verification of injectivity, which is not carried out here.'
- **Reported:** 2026-10-28 (10fede1)

### ISSUE-0002 [Open] Sigma_n-complete sets are Turing equivalent to 0^(n) needs care for the direction
- **Category:** Supplement/remark error
- **Location:** supplement (前提を変えると)
- **Detail:** The supplement states that by the Post theorem, $\Sigma_{n}$-complete sets are Turing equivalent to $\varnothing^{(n)}$. This is correct for $n\ge1$ given $\Sigma_{n}$-completeness under $\le_{\mathrm{m}}$ (since $\varnothing^{(n)}$ is $\Sigma_{n}$-complete and $\le_{\mathrm{m}}$ implies $\equiv_{\mathrm{T}}$), but the parenthetical claim that the 'admitted' parts of problems 7.5 and 7.6 are 'shown on this page' is imprecise: this page shows $\mathit{FIN}$ is $\Sigma_{2}$-complete and $\mathit{TOT}$ is $\Pi_{2}$-complete, which yields $\mathit{FIN}\equiv_{\mathrm{T}}\varnothing''$ and $\mathit{TOT}\equiv_{\mathrm{T}}\varnothing''$, but does not by itself establish the general Turing-equivalence statement for arbitrary $\Sigma_{n}$-complete sets without invoking the Post theorem's converse direction.
- **Proposed fix:** State precisely: 'By the Post theorem, every $\Sigma_{n}$-complete set (under $\le_{\mathrm{m}}$) is Turing equivalent to $\varnothing^{(n)}$; in particular the completeness of $\mathit{FIN}$ and $\mathit{TOT}$ shown here gives $\mathit{FIN}\equiv_{\mathrm{T}}\varnothing''$ and $\mathit{TOT}\equiv_{\mathrm{T}}\varnothing''$.'
- **Reported:** 2026-10-28 (10fede1)

### ISSUE-0003 [Open] Sigma_1-complete sets coincide with creative sets: correct but the analogy is loose
- **Category:** Supplement/remark error
- **Location:** supplement (似た定理)
- **Detail:** The statement that '$\Sigma_{1}$-complete sets coincide with creative sets' is correct (a set is creative iff it is $\Sigma_{1}$-complete under $\le_{\mathrm{m}}$, by Myhill). However, the surrounding sentence calls this 'the analogue at the first level' of the present page's results, which is fine, but the phrasing '$Σ_{1}$ 完全な集合が創造的集合と一致すること' could be read as claiming the present page's $\Sigma_{2},\Pi_{2},\Sigma_{3}$ results have a direct creative-set analogue, which they do not (there is no 'creative' notion at higher levels in the same sense). This is a minor overstatement of analogy rather than a false claim.
- **Proposed fix:** Clarify: 'At the first level, the $\Sigma_{1}$-complete sets are exactly the creative sets (Myhill); this is the level-1 analogue, whereas at higher levels the corresponding completeness results are established directly as on this page.'
- **Reported:** 2026-10-28 (10fede1)

### ISSUE-0004 [Open] REC is Sigma_3-complete stated without proof
- **Category:** Unsupported fact
- **Location:** solution (comp:prob-ic-rec)
- **Detail:** The solution ends with the parenthetical '($\mathit{REC}$ is known to be $\Sigma_{3}$-complete.)'. This is a stated-only fact inside a solution; it is true (REC is $\Sigma_{3}$-complete), but it is asserted without proof or citation. Since it is a genuine known result and correctly stated, this is borderline; however it is stated more strongly than what the problem asks (the problem only asks to show $\mathit{REC}\in\Sigma_{3}$), and the completeness claim is not justified.
- **Proposed fix:** Either remove the parenthetical or add a citation: '($\mathit{REC}$ is in fact $\Sigma_{3}$-complete; see the standard result that $\mathit{REC}\equiv_{\mathrm{m}}\mathit{COF}$.)'
- **Reported:** 2026-10-28 (10fede1)

### ISSUE-0005 [Open] COF membership formula: inner block is Pi_2, not stated correctly
- **Category:** Logical gap
- **Location:** comp:cof-complete / Step 'COF in Sigma_3'
- **Detail:** The proof writes $e\in\mathit{COF}\iff\exists N\,\forall m\,(m>N\to\exists s\ m\in W_{e,s})$ and says 'the part in parentheses is $\Pi_{2}$'. The parenthesized formula $\forall m\,(m>N\to\exists s\,m\in W_{e,s})$ has a leading $\forall m$ followed by $\exists s$ (with a bounded/decidable guard), so it is $\Pi_{2}$, which is correct. No error here; the quantifier count is right. (Checked: $\forall m\exists s$ is $\Pi_{2}$.)
- **Proposed fix:** No change needed; the claim is correct.
- **Reported:** 2026-10-28 (10fede1)
