# Verification tracker: `01-foundations/06-category-theory/07-operads/06-e2-braided.html`

<!-- source: 01-foundations/06-category-theory/07-operads/06-e2-braided.html -->
<!-- Managed by scripts/verify.py (GitHub Actions). To dispute an [Open] issue, add a line starting with
     **Opus Rebuttal:** at the end of that issue and push; the next run judges it. Do not edit other lines. -->

- Last verified: 2026-10-28 (commit 048145a, deepseek-chat)
- Open: 5 / Resolved: 0 / Ignored: 1

## Summary of the last run

The page's proofs (far-commutativity and the braid-group action) are essentially correct. The main genuine problems remain in the remarks and supplement: the π₀ column of the correspondence table wrongly assigns Com to C₂ and C_n (n≥3) although these operads are connected, so π₀-level algebras are monoids; the supplement's explanation of the double swap in Ω³Y via π₁C₃(2)=0 is imprecise (the relevant invariant is π₁ of the unordered configuration space, Z/2); and the 'polynomial time' claim for the braid word problem is attributed too directly to Garside's normal form. ISSUE-0003 is correctly rebutted and closed.

## Issues

### ISSUE-0001 [Open] π₀ of C₂ is not Com
- **Category:** Supplement/remark error
- **Location:** remark 二つの世界の対応 (table)
- **Detail:** The table lists the π₀ column for $\mathcal{C}_{2}$ ($E_{2}$) as $\mathrm{Com}$ (commutative monoids). This is wrong: $\pi_{0}(\mathcal{C}_{2}(k))$ is a single point for every $k$ (the operad is connected, as the page itself states via \ref{cat:little-cubes-connected}), so the π₀-operad is the trivial/associative operad $\mathrm{Ass}$, and $\mathcal{C}_{2}$-algebras in $\mathbf{Set}$ are ordinary monoids, not commutative monoids. Commutativity only appears at the level of the fundamental groupoid (the braiding), not at π₀. The same error propagates to the $\mathcal{C}_{n}$, $n\ge3$ row, which also has $\pi_{0}=\mathrm{Ass}$ (giving monoids, not commutative monoids, in $\mathbf{Set}$).
- **Proposed fix:** In the table, change the $\pi_{0}$ column for $\mathcal{C}_{2}$ and for $\mathcal{C}_{n}$ ($n\ge3$) from $\mathrm{Com}$ to $\mathrm{Ass}$ (monoids). Only the third column (fundamental-groupoid algebras) distinguishes braided vs. symmetric. If a $\mathrm{Com}$ entry is desired, it should be placed in a column describing $\pi_{1}$-level structure, not $\pi_{0}$.
- **Reported:** 2026-10-28 (8ccef3d)
- **History:** 2026-10-28 (048145a): Open — The table still lists π₀ of C₂ (and C_n, n≥3) as Com; since C_n(k) is connected for all k, π₀ is the trivial/associative operad Ass, so C_n-algebras in Set are monoids, not commutative monoids. Unchanged.

### ISSUE-0002 [Open] π₁ of C₃(2) is not zero
- **Category:** Supplement/remark error
- **Location:** supplement ループ空間の組紐
- **Detail:** The supplement claims that for $\Omega^{3}Y$ the double swap can be undone, citing '$\pi_{1}\mathcal{C}_{3}(2)=0$'. But $\mathcal{C}_{3}(2)\simeq \mathrm{Conf}_{2}(\mathbb{R}^{3})$, and $\mathrm{Conf}_{2}(\mathbb{R}^{3})\simeq S^{2}$, whose fundamental group is $0$ — that part is fine — but the relevant statement for double loops is about $\pi_{2}$, not $\pi_{1}$. More importantly, the claim that the double swap loop in $\Omega^{2}X$ is 'in general not contractible' and becomes contractible in $\Omega^{3}Y$ is stated as if $\pi_{1}\mathcal{C}_{3}(2)=0$ were the reason; the actual reason is $\pi_{2}(\mathrm{Conf}_{2}(\mathbb{R}^{3}))=\pi_{2}(S^{2})=\mathbb{Z}\neq0$... this is imprecise. The correct statement: the double braiding $\sigma_{1}^{2}$ is trivial in $\pi_{1}$ of $\mathcal{C}_{n}(2)/\Sigma_{2}$ for $n\ge3$ because $\mathrm{UConf}_{2}(\mathbb{R}^{n})\simeq \mathbb{RP}^{n-1}$ has $\pi_{1}=\mathbb{Z}/2$ for $n\ge3$ (so $\sigma_{1}^{2}=1$), whereas for $n=2$ it is $\mathbb{Z}$ (infinite order). The cited '$\pi_{1}\mathcal{C}_{3}(2)=0$' refers to the ordered configuration space and does not by itself explain the vanishing of the double swap in the unordered quotient.
- **Proposed fix:** Replace with: 'For $\Omega^{3}Y$, the double swap is trivial because $\mathrm{UConf}_{2}(\mathbb{R}^{3})\simeq\mathbb{RP}^{2}$ has $\pi_{1}=\mathbb{Z}/2$, so $\sigma_{1}^{2}=1$; more generally $\mathrm{UConf}_{2}(\mathbb{R}^{n})\simeq\mathbb{RP}^{n-1}$ has $\pi_{1}=\mathbb{Z}/2$ for $n\ge3$, while for $n=2$ it is $\mathbb{Z}$ (the double swap has infinite order).'
- **Reported:** 2026-10-28 (8ccef3d)
- **History:** 2026-10-28 (048145a): Open — The supplement still cites 'π₁C₃(2)=0' as the reason the double swap can be undone in Ω³Y; the ordered configuration space has trivial π₁ but the relevant vanishing of the double braid in the unordered quotient is governed by π₁(UConf₂(Rⁿ))=Z/2, so the explanation remains imprecise. Unchanged.

### ISSUE-0003 [Ignored: Valid Rebuttal] Fiedorowicz attribution and 'strong' braided monoidal
- **Category:** Unsupported fact
- **Location:** remark 知られている事実 item 3
- **Detail:** The claim that '$\Pi_{1}\mathcal{C}_{2}$-algebras in $\mathbf{Cat}$ are the same as (strong) braided monoidal categories' is attributed to Fiedorowicz (1990s). The standard reference for the recognition principle 'braided monoidal categories = $E_{2}$-algebras in Cat' is Fiedorowicz's 'Cellular structures in topology' / work on $E_{n}$-operads, but the precise equivalence for the little 2-cubes operad's fundamental groupoid is more commonly attributed to Fiedorowicz (1990s) and also to the general framework of May–Thomason. The word 'strong' is also potentially misleading: the equivalence is with braided monoidal categories (with the braiding an isomorphism, i.e. strong), which is correct, but the parenthetical '(強)' may suggest strictness. This is a minor attribution/precision issue.
- **Proposed fix:** State: 'Fiedorowicz's theorem (1990s): algebras over $\Pi_{1}\mathcal{C}_{2}$ in $\mathbf{Cat}$ are precisely braided monoidal categories (with invertible braiding); similarly $\Pi_{1}\mathcal{C}_{1}$-algebras are monoidal categories and $\Pi_{1}\mathcal{C}_{n}$-algebras for $n\ge3$ are symmetric monoidal categories.' Remove the potentially confusing '(強)' or clarify it means 'braiding is an isomorphism', not 'strict'.
- **Reported:** 2026-10-28 (8ccef3d)
- **History:** 2026-10-28 (048145a): Ignored: Valid Rebuttal — The rebuttal is correct: '強' here means the monoidal structure is not assumed strict (standard usage), and the Fiedorowicz attribution is standard. No error.
**Opus Rebuttal:** The page says '(強) 組紐モノイダル圏' where 強 means the monoidal structure is not assumed strict, which is the standard meaning; the attribution to Fiedorowicz is standard. No error.

### ISSUE-0004 [Open] π₀ of C₁ is not Ass in the sense of monoids vs. the table's own convention
- **Category:** Supplement/remark error
- **Location:** remark 二つの世界の対応 (table)
- **Detail:** The table's π₀ column is meant to record the operad whose algebras are the π₀-level structures. For C₁ the entry 'Ass：モノイド' is consistent, but the C₂ and C_n rows claim 'Com：可換モノイド'. Since C_n(k) is connected for every k (as the page itself asserts via \ref{cat:little-cubes-connected}), π₀C_n is the trivial operad Ass for all n≥1, so the π₀-level algebras are monoids, not commutative monoids. The commutativity/symmetry only appears at the level of the fundamental groupoid (braided/symmetric monoidal), not at π₀. This is the same error as ISSUE-0001 but stated here as a distinct table row claim; it is a genuine false statement in a remark.
- **Proposed fix:** Replace the π₀ column entries for C₂ and C_n (n≥3) with 'Ass：モノイド' (the π₀-operad is trivial/associative since each C_n(k) is connected); keep 'Com' only if the column is explicitly relabeled as the fundamental-groupoid-level structure. E.g. row C₂: π₀ = Ass (monoids), 基本亜群の代数 = 組紐モノイダル圏; row C_n, n≥3: π₀ = Ass (monoids), 基本亜群の代数 = 対称モノイダル圏.
- **Reported:** 2026-10-28 (048145a)

### ISSUE-0005 [Open] Double swap loop in Ω²X and the role of π₁C₃(2)
- **Category:** Supplement/remark error
- **Location:** supplement ループ空間の組紐
- **Detail:** The supplement states that the double-swap loop in Ω²X is 'in general not contractible' and that in Ω³Y one can undo the two swaps 'by the same idea as \ref{cat:little-cubes-connected}, corresponding to π₁C₃(2)=0'. The vanishing of the double braid in the unordered quotient is governed by π₁(UConf₂(Rⁿ)) = Z/2 for n≥3 (so σ₁²=1), not by π₁ of the ordered configuration space C₃(2)≃S², which is already 0. Citing π₁C₃(2)=0 as the reason is misleading: the ordered space's π₁ being trivial does not by itself explain why the double swap becomes contractible after passing to the unordered quotient / loop space.
- **Proposed fix:** Rewrite: 'For Ω³Y the double swap is undone because the unordered configuration space UConf₂(R³)≃RP² has π₁=Z/2, so σ₁²=1 in π₁ of the unordered quotient (equivalently the relevant symmetry becomes trivial for n≥3), in contrast with n=2 where π₁(UConf₂(R²))=Z and σ₁² has infinite order.'
- **Reported:** 2026-10-28 (048145a)

### ISSUE-0006 [Open] Garside normal form solves the word problem, but 'polynomial time' needs care
- **Category:** Supplement/remark error
- **Location:** supplement 計算の観点
- **Detail:** The supplement says the braid group word problem is solvable in polynomial time via Garside normal forms. Garside's solution gives a solution to the word problem, and the Dehornoy/Epstein-style algorithms are polynomial-time in the input length for the word problem, but the statement as written ('多項式時間で解ける') is a nontrivial complexity claim usually attributed to Dehornoy–Paris or Birman–Ko–Lee rather than to Garside's original normal form, which is not itself a polynomial-time algorithm without further work. Stating it flatly as 'Garside's normal form gives polynomial time' overstates the classical result.
- **Proposed fix:** Say: 'The word problem for braid groups is decidable, and there are polynomial-time solutions (e.g. via Garside's normal form / the Dehornoy–Paris or Birman–Ko–Lee algorithms).'
- **Reported:** 2026-10-28 (048145a)
