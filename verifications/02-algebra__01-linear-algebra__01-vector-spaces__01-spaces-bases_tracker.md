# Verification tracker: `02-algebra/01-linear-algebra/01-vector-spaces/01-spaces-bases.html`

<!-- source: 02-algebra/01-linear-algebra/01-vector-spaces/01-spaces-bases.html -->
<!-- Managed by scripts/verify.py (GitHub Actions). To dispute an [Open] issue, add a line starting with
     **Opus Rebuttal:** at the end of that issue and push; the next run judges it. Do not edit other lines. -->

- Last verified: 2026-10-28 (commit 10fede1, deepseek-chat)
- Open: 6 / Resolved: 0 / Ignored: 0

## Summary of the last run

The page is largely correct: the proofs of the basis characterization, basis existence/extension, and dimension properties are sound, and the citations match the label table. The main problems are in the side remarks and examples: the Erdős–Kaplansky attribution for the dimension of $k^{\mathbb{N}}$ is misapplied (the theorem concerns dual spaces), the Blass/AC remark overstates 'cannot be proved' where consistency is meant, and the supplement's claims about skew fields, matroids/transcendence degree, and complements over rings are stated more strongly than the arguments support. These are all fixable by tightening the statements.

## Issues

### ISSUE-0001 [Open] Erdős–Kaplansky attribution and dimension formula for k^N
- **Category:** Supplement/remark error
- **Location:** lin:dimension-examples / item 3
- **Detail:** The claim `\dim k^{\mathbb{N}}=|k|^{\aleph_{0}}` is attributed to the Erdős–Kaplansky theorem. The Erdős–Kaplansky theorem states that the dimension of the dual space (the space of all linear functionals) of a vector space of dimension $\kappa$ is $|k|^{\kappa}$; it does not directly give the dimension of $k^{\mathbb{N}}$ (the space of all sequences). The dimension of $k^{\mathbb{N}}$ is not $|k|^{\aleph_{0}}$ in general: for $k=\mathbb{Q}$, $\dim_{\mathbb{Q}}\mathbb{Q}^{\mathbb{N}}$ is a cardinal that is not determined by the stated formula, and the value $|k|^{\aleph_{0}}$ is not established by the cited theorem. The statement is misattributed and stated more strongly than the literature supports.
- **Proposed fix:** Replace with: `$k^{\mathbb{N}}$ (all sequences) is strictly larger than $k^{(\mathbb{N})}$; its dimension is not $\aleph_{0}$ (indeed $\dim k^{\mathbb{N}}\ge|k|^{\aleph_{0}}$ by a cardinality argument, and the exact value is not given by the Erdős–Kaplansky theorem, which concerns the dual space). In particular $k^{\mathbb{N}}$ has no countable basis.`
- **Reported:** 2026-10-28 (10fede1)

### ISSUE-0002 [Open] Blass 1984 attribution for 'every vector space has a basis' iff AC
- **Category:** Supplement/remark error
- **Location:** remark 選択公理との関係
- **Detail:** The statement that 'every vector space has a basis' is equivalent to the axiom of choice over ZF is correct, but the attribution to Blass (1984) is imprecise. The equivalence is due to Blass (1984) for the statement that every vector space has a basis, but the remark also asserts that 'in ZF the existence of a $\mathbb{Q}$-basis of $\mathbb{R}$ cannot be proved' and that 'a Hamel basis yields a non-Lebesgue-measurable set' — the latter is a known result (Solovay / the standard construction), but the phrasing 'cannot be proved' is an overstatement: it is consistent with ZF that $\mathbb{R}$ has no $\mathbb{Q}$-basis, but this requires the failure of choice; the remark should state consistency, not unprovability.
- **Proposed fix:** Rewrite: `It is consistent with ZF that $\mathbb{R}$ has no basis over $\mathbb{Q}$ (i.e., the existence of a Hamel basis is not provable in ZF); moreover, a Hamel basis yields a non-Lebesgue-measurable set (a standard construction). The equivalence 'every vector space has a basis' $\Leftrightarrow$ AC is due to Blass (1984).`
- **Reported:** 2026-10-28 (10fede1)

### ISSUE-0003 [Open] Skew-field (division ring) claim in supplement
- **Category:** Supplement/remark error
- **Location:** supplement / 前提を変えると
- **Detail:** The supplement claims that over a skew field (non-commutative division ring) the same proofs go through by reading coefficients as multiplied from the left, so that existence, extension, and uniqueness of dimension all hold. This is essentially correct for division rings (a left module over a division ring is free, and any two bases have the same cardinality), but the phrase 'read coefficients as multiplied from the left' is imprecise: one must consistently use left scalar multiplication and left linear combinations, and the uniqueness of dimension over division rings requires a separate argument (the exchange lemma still works, but the proof as written uses commutativity implicitly in places such as writing $c^{-1}\sum c_{s}s$). The claim is not false, but it is stated more strongly than the given proof supports without modification.
- **Proposed fix:** Add: `Over a division ring $D$, one fixes left scalar multiplication and left linear combinations; the exchange lemma and the basis extension theorem then go through verbatim, and the cardinality of a basis is still well defined (the standard proof of dimension uniqueness for division rings applies).`
- **Reported:** 2026-10-28 (10fede1)

### ISSUE-0004 [Open] Matroid abstraction claim
- **Category:** Supplement/remark error
- **Location:** supplement / 似た定理
- **Detail:** The supplement says that 'abstracting only the basis extension and exchange properties gives a matroid, and transcendental bases of field extensions have the same structure, so the uniqueness of transcendence degree follows by the same argument.' This is essentially correct (matroids abstract linear independence and the exchange property; transcendence bases form a matroid), but the statement 'the uniqueness of transcendence degree follows by the same argument' is imprecise: the matroid argument gives that any two maximal independent sets have the same cardinality only under additional hypotheses (e.g., finite rank or the matroid being finitary); for infinite transcendence degree the uniqueness requires a separate cardinal argument. The claim as stated is overstated.
- **Proposed fix:** Replace with: `Transcendence bases of a field extension form a matroid (the finitary matroid of algebraic independence); for finite transcendence degree the usual exchange argument gives uniqueness of transcendence degree, while the infinite case requires a separate cardinality argument.`
- **Reported:** 2026-10-28 (10fede1)

### ISSUE-0005 [Open] Complement existence over rings remark
- **Category:** Supplement/remark error
- **Location:** remark 環上では何が残るか
- **Detail:** The remark says 'complement existence is the strong condition that a submodule is a direct summand, and over rings other than fields it rarely holds ($2\mathbb{Z}\subset\mathbb{Z}$ is not a direct summand).' The example is correct, but the blanket statement 'rarely holds' is imprecise: over a PID, every submodule of a free module is free but not necessarily a direct summand (e.g., $2\mathbb{Z}\subset\mathbb{Z}$), while over a semisimple ring (e.g., a product of matrix rings over division rings) every submodule is a direct summand. The remark should not suggest that complements essentially never exist over rings.
- **Proposed fix:** Replace with: `Complement existence is the condition that every submodule is a direct summand; this holds over semisimple rings (e.g., products of matrix rings over division rings) but fails over $\mathbb{Z}$ ($2\mathbb{Z}\subset\mathbb{Z}$ is not a direct summand).`
- **Reported:** 2026-10-28 (10fede1)

### ISSUE-0006 [Open] Dimension of k[x] and k^{(N)} isomorphism
- **Category:** Unsupported fact
- **Location:** lin:dimension-examples / item 1
- **Detail:** The example states `\dim k[x]=\aleph_{0}` with basis `1,x,x^{2},\dots` and `k^{(\mathbb{N})}\cong k[x]`. This is correct for $k$ a field (the monomials form a basis and the dimension is countable). No issue.
- **Proposed fix:** No change needed.
- **Reported:** 2026-10-28 (10fede1)
