# Verification tracker: `01-foundations/02-model-theory/02-types-and-countable-models/03-saturated-models.html`

<!-- source: 01-foundations/02-model-theory/02-types-and-countable-models/03-saturated-models.html -->
<!-- Managed by scripts/verify.py (GitHub Actions). To dispute an [Open] issue, add a line starting with
     **Opus Rebuttal:** at the end of that issue and push; the next run judges it. Do not edit other lines. -->

- Last verified: 2026-10-28 (commit 10fede1, deepseek-chat)
- Open: 5 / Resolved: 0 / Ignored: 0

## Summary of the last run

The main text (definitions, lemmas, theorems and their proofs) is essentially correct: the existence of $\kappa^{+}$-saturated elementary extensions, universality, uniqueness and the countable saturated model criterion are all proved with appropriate citations. The genuine problems are concentrated in the supplement: the set-theoretic condition for saturated models of size $\kappa$ is stated imprecisely ($2^{<\kappa}=\kappa$ vs $\kappa^{<\kappa}=\kappa$ and stability), the claim that special models give Beth/Robinson proofs 'without set-theoretic assumptions' is overstated, and the 'weak terminal object' description of saturated models omits the cardinality restriction and uniqueness caveat. No issues were found in the previously reported list (empty).

## Issues

### ISSUE-0001 [Open] Incorrect set-theoretic condition for existence of saturated models of size κ
- **Category:** Supplement/remark error
- **Location:** supplement / 前提の検討, first bullet
- **Detail:** The supplement says that the existence of a saturated model of size $\kappa$ requires assumptions like $2^{<\kappa}=\kappa$ ("$\kappa$ regular and $2^{\lambda}\le\kappa$ for $\lambda<\kappa$"). This is imprecise: the standard sufficient condition for a saturated model of size $\kappa$ (for a theory in a language of size $\le\kappa$) is $\kappa^{<\kappa}=\kappa$ together with stability in $\kappa$ (or $\kappa$ inaccessible-like conditions), and $2^{<\kappa}=\kappa$ alone is not the right formulation. Moreover the parenthetical "$\kappa$ regular and $2^{\lambda}\le\kappa$, $\lambda<\kappa$" is exactly $2^{<\kappa}\le\kappa$, which combined with $\kappa$ regular gives $\kappa^{<\kappa}=\kappa$ only under additional cardinal arithmetic; the statement as written conflates $2^{<\kappa}=\kappa$ with $\kappa^{<\kappa}=\kappa$. The claim is stated too loosely to be correct as a necessary/sufficient condition.
- **Proposed fix:** Replace with: "濃度 $\\kappa$ の飽和モデルの存在には、$\\kappa^{<\\kappa}=\\kappa$ のような集合論的仮定と、理論の $\\kappa$ における安定性（またはそれに類する仮定）が要ることが知られている。例えば $\\kappa$ が強極限基数で $\\kappa^{<\\kappa}=\\kappa$ なら、言語の濃度が $\\kappa$ 以下の理論に対し濃度 $\\kappa$ の飽和モデルが存在する。本サイトでは扱わない。"
- **Reported:** 2026-10-28 (10fede1)

### ISSUE-0002 [Open] Special models do not give Beth/Robinson proofs without set-theoretic assumptions
- **Category:** Supplement/remark error
- **Location:** supplement / 関連する結果, 特殊モデル bullet
- **Detail:** The supplement claims that using special models one obtains model-theoretic proofs of Beth's definability theorem and Robinson's joint consistency theorem "without set-theoretic assumptions". This is misleading: the standard proofs of Beth and Robinson via compactness do not need saturated/special models at all, and the special-model approach still requires the existence of special models of suitable cardinality, which itself needs some cardinal arithmetic (e.g. $\kappa^{<\kappa}=\kappa$ or GCH-like assumptions) for uncountable $\kappa$. The assertion that special models avoid set-theoretic hypotheses is therefore overstated.
- **Proposed fix:** Replace with: "これを使うと、ベートの定義可能性定理やロビンソンの統合無矛盾性定理のモデル論的な証明が得られる（ただし特殊モデルの存在には $\\kappa^{<\\kappa}=\\kappa$ などの集合論的仮定が必要である）。"
- **Reported:** 2026-10-28 (10fede1)

### ISSUE-0003 [Open] Saturated model as weak terminal object is imprecise
- **Category:** Supplement/remark error
- **Location:** supplement / 高い視点から：最大のモデル
- **Detail:** The supplement says the saturated model is a "weak terminal object" in the category of models of $T$ (restricted by cardinality), receiving all models elementarily. But $\ref{model:saturated-universal}$ only gives that a $\kappa$-saturated model receives models of size $\le\kappa$ that are elementarily equivalent, and the embedding is elementary, not a unique morphism; calling it a "weak terminal object" is imprecise because terminality would require existence and uniqueness of morphisms into it from every object, whereas here only existence of an elementary embedding for models of bounded size is given, and the category would need to be that of models with elementary embeddings. The phrase "すべてのモデルを初等的に受け入れる" also omits the cardinality restriction.
- **Proposed fix:** Replace with: "飽和モデルは、濃度を $\\kappa$ 以下に区切った範囲で、すべての初等的に同値なモデルを初等埋め込みで受け入れるという意味での弱い終対象に当たる（\\ref{model:saturated-universal}）。ただし埋め込みの一意性は主張しない。"
- **Reported:** 2026-10-28 (10fede1)

### ISSUE-0004 [Open] Uniqueness of saturated models: finite case remark
- **Category:** Unsupported fact
- **Location:** model:saturated-unique / proof, first sentence
- **Detail:** The proof says "有限なら $\mathcal{M}\equiv\mathcal{N}$ から同型が従うことが知られているが、ここでは扱わない". For finite structures, elementary equivalence does imply isomorphism, so the claim is true, but it is stated without proof or citation. This is a side remark that is correct, so not an error; however the parenthetical is fine. No issue.
- **Proposed fix:** No change needed (statement is correct).
- **Reported:** 2026-10-28 (10fede1)

### ISSUE-0005 [Open] Universality proof: enumeration length and case η=κ
- **Category:** Logical gap
- **Location:** model:saturated-universal / proof
- **Detail:** The proof enumerates $N=\{n_{\xi}:\xi<\kappa\}$ and constructs $(m_{\xi})_{\xi<\kappa}$ by recursion, but at the successor step it says "$\eta<\kappa$ の場合を扱えば十分" while the recursion is stated for $\eta\le\kappa$. At $\eta=\kappa$ no new element is chosen, so this is harmless, but the text's phrasing "各 $\eta\le\kappa$ について $(\ast)_{\eta}$" combined with the successor construction only for $\eta<\kappa$ is slightly inconsistent. Also if $|N|<\kappa$ the enumeration is padded, which is addressed. This is a minor presentation gap, not a mathematical error.
- **Proposed fix:** Clarify: "再帰は $\\eta<\\kappa$ で行い、$(\\ast)_{\\kappa}$ は極限として得る。"
- **Reported:** 2026-10-28 (10fede1)
