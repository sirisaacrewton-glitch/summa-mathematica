# Verification tracker: `02-algebra/05-field-theory/03-advanced-galois-theory/01-galois-connection.html`

<!-- source: 02-algebra/05-field-theory/03-advanced-galois-theory/01-galois-connection.html -->
<!-- Managed by scripts/verify.py (GitHub Actions). To dispute an [Open] issue, add a line starting with
     **Opus Rebuttal:** at the end of that issue and push; the next run judges it. Do not edit other lines. -->

- Last verified: 2026-10-28 (commit 10fede1, deepseek-chat)
- Open: 3 / Resolved: 0 / Ignored: 0

## Summary of the last run

(none)

## Issues

### ISSUE-0001 [Open] Closed sets for the polynomial/zero-set relation are not 'algebraic sets and radical ideals'
- **Category:** Supplement/remark error
- **Location:** supplement (他のガロア接続), first bullet
- **Detail:** The bullet says that for the relation $f(x)=0$ between $k[x_1,\dots,x_n]$ and $k^{n}$, the closed sets are 'algebraic sets and radical ideals' and cites the Nullstellensatz. This is imprecise: the closed subsets on the $k^{n}$ side are exactly the algebraic sets, but on the ideal side the closed sets are the *radical* ideals only when $k$ is algebraically closed (which the text does state for the Nullstellensatz part), and more importantly the closed sets on the ideal side are the ideals $I$ with $I=I(V(I))$, i.e. radical ideals — this is correct over an algebraically closed field. However the phrasing 'closed sets are algebraic sets and radical ideals' conflates the two sides and, as written, is only valid over an algebraically closed $k$; over a general field the closed ideals are not simply the radical ideals (e.g. $(x^2+1)$ is radical in $\mathbb{R}[x]$ but $V(x^2+1)=\varnothing$ so $I(V(x^2+1))=(1)\neq(x^2+1)$). The parenthetical '$k$ が代数閉体のとき' is attached only to the Nullstellensatz citation, not clearly to the closed-set description.
- **Proposed fix:** State explicitly: 'For $k$ algebraically closed, the closed subsets of $k^{n}$ are exactly the algebraic sets, and the closed ideals are exactly the radical ideals; the bijection between them is the Nullstellensatz (\tref{ring:nullstellensatz}). Over a non-algebraically-closed field the closed ideals are the ideals $I$ with $I=I(V(I))$, which need not be all radical ideals.'
- **Reported:** 2026-10-28 (10fede1)

### ISSUE-0002 [Open] Character-group relation 'χ(a)=0' is wrong; should be χ(a)=1
- **Category:** Supplement/remark error
- **Location:** supplement (他のガロア接続), second bullet
- **Detail:** The bullet describes the relation between a finite abelian group and its character group as '$\chi(a)=0$'. Characters are homomorphisms into $\mathbb{C}^{\times}$ (or $S^{1}$), so the identity element of the target is $1$, not $0$; the relation defining the Galois connection (orthogonality) is $\chi(a)=1$. With '$=0$' the relation is never satisfied (since $\chi(a)\neq 0$), so the claimed closed sets and the statement 'all subgroups are closed' would be false.
- **Proposed fix:** Replace '$\chi(a)=0$' by '$\chi(a)=1$': 'Finite abelian groups and their character groups (relation $\chi(a)=1$): $H\mapsto H^{\perp}$ (\ref{grp:finite-abelian-duality}). Since the group is finite, every subgroup is closed.'
- **Reported:** 2026-10-28 (10fede1)

### ISSUE-0003 [Open] Closed sets of the satisfaction relation are not 'theories and elementary classes' as stated
- **Category:** Supplement/remark error
- **Location:** supplement (他のガロア接続), fourth bullet
- **Detail:** The bullet says that for the relation $\mathfrak{A}\models\varphi$ the closed sets are 'theories (sets of sentences closed under deduction) and elementary classes'. This is imprecise: on the sentence side the closed sets are exactly the deductively closed sets of sentences (theories), which is correct; but on the structure side the closed sets are the classes of the form $\mathrm{Mod}(T)$ for a theory $T$, i.e. elementary classes (classes axiomatizable by a set of first-order sentences), not arbitrary classes closed under elementary equivalence. The phrase 'elementary classes' is acceptable only if understood as 'classes of models of a theory'; as written alongside 'theories' it suggests the two sides are theories and elementary classes symmetrically, which is fine, but the parenthetical gloss 'closed under deduction' applies only to the theory side. This is a minor imprecision rather than a falsehood.
- **Proposed fix:** Clarify: 'On the sentence side the closed sets are the deductively closed sets of sentences (theories); on the structure side they are the elementary classes, i.e. classes of the form $\mathrm{Mod}(T)$ for a theory $T$.'
- **Reported:** 2026-10-28 (10fede1)
