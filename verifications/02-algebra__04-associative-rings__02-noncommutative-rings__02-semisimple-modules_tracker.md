# Verification tracker: `02-algebra/04-associative-rings/02-noncommutative-rings/02-semisimple-modules.html`

<!-- source: 02-algebra/04-associative-rings/02-noncommutative-rings/02-semisimple-modules.html -->
<!-- Managed by scripts/verify.py (GitHub Actions). To dispute an [Open] issue, add a line starting with
     **Opus Rebuttal:** at the end of that issue and push; the next run judges it. Do not edit other lines. -->

- Last verified: 2026-10-28 (commit 10fede1, deepseek-chat)
- Open: 3 / Resolved: 0 / Ignored: 0

## Summary of the last run

(none)

## Issues

### ISSUE-0001 [Open] Semisimple ring is a finite direct sum of simple left ideals
- **Category:** Supplement/remark error
- **Location:** supplement / 次のページへ
- **Detail:** The supplement claims that a semisimple ring $R$ is a direct sum of finitely many simple left ideals, justifying it by '$1$ が有限個の成分にしか分かれないので'. This is imprecise: the argument only shows that $1$ lies in a finite sub-sum, and one needs additionally that $R$ is the sum of all simple left ideals (i.e. $R$ is semisimple as a left module) together with the finite generation of $R$ as a left $R$-module to conclude that finitely many simple left ideals already sum to $R$ and form a direct sum. As stated, the sentence asserts the conclusion without the needed reasoning, and the parenthetical justification is not sufficient.
- **Proposed fix:** Since $R$ is semisimple as a left $R$-module, $R=\sum_{i\in I}S_{i}$ with $S_{i}$ simple left ideals. As $1\in R$, there is a finite subset $F\subset I$ with $1\in\sum_{i\in F}S_{i}$, hence $R=R\cdot 1\subset\sum_{i\in F}S_{i}$, so $R=\sum_{i\in F}S_{i}$. By \ref{mod:semisimple-complement} (or condition 2 of \ref{mod:semisimple-equivalent}) this finite sum can be refined to a direct sum of finitely many simple left ideals.
- **Reported:** 2026-10-28 (10fede1)

### ISSUE-0002 [Open] Schur's lemma as 'no interaction between distinct elementary particles'
- **Category:** Supplement/remark error
- **Location:** supplement / 高い視点
- **Detail:** The supplement says Schur's lemma expresses that 'there is no interaction (nonzero morphism) between distinct elementary particles'. This is imprecise: Schur's lemma says every morphism between simple modules is either $0$ or an isomorphism, so nonzero morphisms do exist between isomorphic simple modules (indeed $\End_{R}(S)$ is a division ring, generally larger than the scalars). The claim that there is no nonzero morphism between distinct simple modules is only the special case of non-isomorphic simples, and even then it is a consequence, not the full content.
- **Proposed fix:** 単純加群はこの圏の「素粒子」で、シューアの補題は「異なる素粒子の間の射は $0$ のみであり、同じ素粒子の間の $0$ でない射はすべて同型（自己同型）である」ことを言う。
- **Reported:** 2026-10-28 (10fede1)

### ISSUE-0003 [Open] Dimension uniqueness attributed to multiplicity theorem with R=D
- **Category:** Supplement/remark error
- **Location:** supplement / 高い視点
- **Detail:** The supplement says the existence of a basis and the uniqueness of dimension are respectively the simplest cases of \ref{mod:semisimple-equivalent} and \ref{mod:semisimple-multiplicity} with $R=D$ and the only simple module $D$. For $R=D$ a division ring, $D$ as a left $D$-module is simple, and $\End_{D}(D)\cong D^{\mathrm{op}}$, so the multiplicity theorem gives $\Hom_{D}(D,D^{n})\cong (D^{\mathrm{op}})^{n}$, which does yield $n$ as the dimension. This part is acceptable, but the statement that the 'uniqueness of dimension' is the simplest case of the multiplicity theorem is slightly overstated because the multiplicity theorem counts occurrences of each isomorphism class, whereas dimension uniqueness for a single simple module is really the statement that $D^{n}\cong D^{m}$ implies $n=m$ (\ref{mod:division-ring-dependence}), which is used inside the proof of the multiplicity theorem rather than being an instance of it. The claim is thus circular in spirit.
- **Proposed fix:** 線形代数の「基底の存在」は \ref{mod:semisimple-equivalent} の最も簡単な場合（$R=D$）であり、「次元の一意性」は \ref{mod:division-ring-dependence}（重複度の定理の証明で使う）の最も簡単な場合である。
- **Reported:** 2026-10-28 (10fede1)
