# Verification tracker: `01-foundations/03-computation/03-advanced-computability/11-rice-shapiro.html`

<!-- source: 01-foundations/03-computation/03-advanced-computability/11-rice-shapiro.html -->
<!-- Managed by scripts/verify.py (GitHub Actions). To dispute an [Open] issue, add a line starting with
     **Opus Rebuttal:** at the end of that issue and push; the next run judges it. Do not edit other lines. -->

- Last verified: 2026-10-28 (commit 10fede1, deepseek-chat)
- Open: 2 / Resolved: 0 / Ignored: 0

## Summary of the last run

The main theorems and proofs (Rice–Shapiro, its converse, the function version and its converse, and the corollaries) are logically sound: the reductions $\overline{K}\le_{\mathrm{m}}I_{\mathcal{A}}$ are correctly constructed, the monotonicity/compactness arguments are valid, and the applications (infinite, $\N$, finite, $\emptyset$, totality, cofinite, complement problems) are correct. The only genuine problems are two imprecise/overstated claims in the supplement: the gloss on the Kleene–Lacombe–Schoenfield theorem and the identification of c.e. index sets with Scott-open sets without the effectivity qualifier. No issues in the proofs or in the cited theorems were found.

## Issues

### ISSUE-0001 [Open] Kleene–Lacombe–Schoenfield characterization misstated
- **Category:** Supplement/remark error
- **Location:** supplement / 前提を変えると
- **Detail:** The supplement says the Kleene–Lacombe–Schoenfield theorem is 'computable functionals are effectively continuous' and that it 'corresponds' to properties of total functions. The actual KLS theorem characterizes the total computable functions as exactly the partial functions having a computable modulus of continuity (equivalently, the effective operations on the total computable functions are precisely those induced by computable functionals, which are continuous on a suitable effective topology). The one-line gloss 'computable functionals are effectively continuous' is imprecise: continuity is a property of the induced operation on total functions, and the essential content is the existence of a computable modulus of continuity. As stated it is an overstatement/imprecision in a side remark.
- **Proposed fix:** The Kleene–Lacombe–Schoenfield theorem states that a total function $F$ on the total computable functions is computable (induced by a computable functional) iff $F$ has a computable modulus of continuity, i.e. the value $F(f)(n)$ depends only on finitely much of $f$, effectively in that finite information. This is the analogue, for total functions, of the finite-information (monotone + compact) characterization given by Rice–Shapiro for c.e. sets.
- **Reported:** 2026-10-28 (10fede1)

### ISSUE-0002 [Open] Scott topology / open set correspondence overstated
- **Category:** Supplement/remark error
- **Location:** supplement / 似た定理
- **Detail:** The supplement claims that viewing c.e. sets as points and finite sets as basic neighbourhoods (Scott topology) makes 'c.e. index sets correspond exactly to open sets'. This is imprecise. The Rice–Shapiro converse says $I_{\mathcal{A}}$ is c.e. iff the finite members are c.e.-enumerable and membership is witnessed by finite subsets; this is not literally 'open sets' of the Scott topology on the c.e. sets. The Scott topology lives on domains (e.g. $\mathcal{P}(\N)$ or the c.e. sets ordered by inclusion), and its open sets are the upward-closed, inaccessible-by-directed-suprema sets; the c.e. index sets satisfying Rice–Shapiro are the *effectively* open (c.e.-enumerable) ones, and the correspondence requires effectivity, not plain openness. Stated as 'exactly open sets' it is an overstatement.
- **Proposed fix:** Viewing c.e. sets as points of the domain of subsets ordered by inclusion with the Scott topology (finite sets as basic neighbourhoods), a class $\mathcal{A}$ of c.e. sets is Scott-open iff it is monotone and compact (satisfies Rice–Shapiro 1 and 2); the index set $I_{\mathcal{A}}$ is c.e. iff, in addition, the finite members are effectively enumerable (the converse theorem). So c.e. index sets correspond to the *effectively* open (c.e.-presented) Scott-open classes, not to all open sets.
- **Reported:** 2026-10-28 (10fede1)
