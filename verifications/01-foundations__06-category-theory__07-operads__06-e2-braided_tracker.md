# Verification tracker: `01-foundations/06-category-theory/07-operads/06-e2-braided.html`

<!-- source: 01-foundations/06-category-theory/07-operads/06-e2-braided.html -->
<!-- Managed by scripts/verify.py (GitHub Actions). To dispute an [Open] issue, add a line starting with
     **Opus Rebuttal:** at the end of that issue and push; the next run judges it. Do not edit other lines. -->

- Last verified: 2026-10-28 (commit 8ccef3d, deepseek-chat)
- Open: 3 / Resolved: 0 / Ignored: 0

## Summary of the last run

The page is largely correct: the topological proof of far commutativity (Proposition 6.3) is sound, the braid group action (Proposition 6.5) is properly justified via strictification, Yang–Baxter, and interchange, and the problem/solution correctly uses the $\mathbb{Z}/n$-graded example. The main genuine error is in the comparison table of the remark '二つの世界の対応', which incorrectly lists $\pi_{0}(\mathcal{C}_{2})$ and $\pi_{0}(\mathcal{C}_{n})$ as $\mathrm{Com}$; the π₀-operad is $\mathrm{Ass}$ (the operad is connected), and commutativity/symmetry only appears at the fundamental-groupoid level. A secondary imprecision concerns the supplement's use of '$\pi_{1}\mathcal{C}_{3}(2)=0$' to explain the vanishing of the double swap, which should instead refer to $\pi_{1}(\mathrm{UConf}_{2}(\mathbb{R}^{n}))=\mathbb{Z}/2$ for $n\ge3$.

## Issues

### ISSUE-0001 [Open] π₀ of C₂ is not Com
- **Category:** Supplement/remark error
- **Location:** remark 二つの世界の対応 (table)
- **Detail:** The table lists the π₀ column for $\mathcal{C}_{2}$ ($E_{2}$) as $\mathrm{Com}$ (commutative monoids). This is wrong: $\pi_{0}(\mathcal{C}_{2}(k))$ is a single point for every $k$ (the operad is connected, as the page itself states via \ref{cat:little-cubes-connected}), so the π₀-operad is the trivial/associative operad $\mathrm{Ass}$, and $\mathcal{C}_{2}$-algebras in $\mathbf{Set}$ are ordinary monoids, not commutative monoids. Commutativity only appears at the level of the fundamental groupoid (the braiding), not at π₀. The same error propagates to the $\mathcal{C}_{n}$, $n\ge3$ row, which also has $\pi_{0}=\mathrm{Ass}$ (giving monoids, not commutative monoids, in $\mathbf{Set}$).
- **Proposed fix:** In the table, change the $\pi_{0}$ column for $\mathcal{C}_{2}$ and for $\mathcal{C}_{n}$ ($n\ge3$) from $\mathrm{Com}$ to $\mathrm{Ass}$ (monoids). Only the third column (fundamental-groupoid algebras) distinguishes braided vs. symmetric. If a $\mathrm{Com}$ entry is desired, it should be placed in a column describing $\pi_{1}$-level structure, not $\pi_{0}$.
- **Reported:** 2026-10-28 (8ccef3d)

### ISSUE-0002 [Open] π₁ of C₃(2) is not zero
- **Category:** Supplement/remark error
- **Location:** supplement ループ空間の組紐
- **Detail:** The supplement claims that for $\Omega^{3}Y$ the double swap can be undone, citing '$\pi_{1}\mathcal{C}_{3}(2)=0$'. But $\mathcal{C}_{3}(2)\simeq \mathrm{Conf}_{2}(\mathbb{R}^{3})$, and $\mathrm{Conf}_{2}(\mathbb{R}^{3})\simeq S^{2}$, whose fundamental group is $0$ — that part is fine — but the relevant statement for double loops is about $\pi_{2}$, not $\pi_{1}$. More importantly, the claim that the double swap loop in $\Omega^{2}X$ is 'in general not contractible' and becomes contractible in $\Omega^{3}Y$ is stated as if $\pi_{1}\mathcal{C}_{3}(2)=0$ were the reason; the actual reason is $\pi_{2}(\mathrm{Conf}_{2}(\mathbb{R}^{3}))=\pi_{2}(S^{2})=\mathbb{Z}\neq0$... this is imprecise. The correct statement: the double braiding $\sigma_{1}^{2}$ is trivial in $\pi_{1}$ of $\mathcal{C}_{n}(2)/\Sigma_{2}$ for $n\ge3$ because $\mathrm{UConf}_{2}(\mathbb{R}^{n})\simeq \mathbb{RP}^{n-1}$ has $\pi_{1}=\mathbb{Z}/2$ for $n\ge3$ (so $\sigma_{1}^{2}=1$), whereas for $n=2$ it is $\mathbb{Z}$ (infinite order). The cited '$\pi_{1}\mathcal{C}_{3}(2)=0$' refers to the ordered configuration space and does not by itself explain the vanishing of the double swap in the unordered quotient.
- **Proposed fix:** Replace with: 'For $\Omega^{3}Y$, the double swap is trivial because $\mathrm{UConf}_{2}(\mathbb{R}^{3})\simeq\mathbb{RP}^{2}$ has $\pi_{1}=\mathbb{Z}/2$, so $\sigma_{1}^{2}=1$; more generally $\mathrm{UConf}_{2}(\mathbb{R}^{n})\simeq\mathbb{RP}^{n-1}$ has $\pi_{1}=\mathbb{Z}/2$ for $n\ge3$, while for $n=2$ it is $\mathbb{Z}$ (the double swap has infinite order).'
- **Reported:** 2026-10-28 (8ccef3d)

### ISSUE-0003 [Open] Fiedorowicz attribution and 'strong' braided monoidal
- **Category:** Unsupported fact
- **Location:** remark 知られている事実 item 3
- **Detail:** The claim that '$\Pi_{1}\mathcal{C}_{2}$-algebras in $\mathbf{Cat}$ are the same as (strong) braided monoidal categories' is attributed to Fiedorowicz (1990s). The standard reference for the recognition principle 'braided monoidal categories = $E_{2}$-algebras in Cat' is Fiedorowicz's 'Cellular structures in topology' / work on $E_{n}$-operads, but the precise equivalence for the little 2-cubes operad's fundamental groupoid is more commonly attributed to Fiedorowicz (1990s) and also to the general framework of May–Thomason. The word 'strong' is also potentially misleading: the equivalence is with braided monoidal categories (with the braiding an isomorphism, i.e. strong), which is correct, but the parenthetical '(強)' may suggest strictness. This is a minor attribution/precision issue.
- **Proposed fix:** State: 'Fiedorowicz's theorem (1990s): algebras over $\Pi_{1}\mathcal{C}_{2}$ in $\mathbf{Cat}$ are precisely braided monoidal categories (with invertible braiding); similarly $\Pi_{1}\mathcal{C}_{1}$-algebras are monoidal categories and $\Pi_{1}\mathcal{C}_{n}$-algebras for $n\ge3$ are symmetric monoidal categories.' Remove the potentially confusing '(強)' or clarify it means 'braiding is an isomorphism', not 'strict'.
- **Reported:** 2026-10-28 (8ccef3d)
