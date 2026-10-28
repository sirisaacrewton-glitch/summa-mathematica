# Verification tracker: `01-foundations/05-proof-theory/09-type-theory/02-system-t.html`

<!-- source: 01-foundations/05-proof-theory/09-type-theory/02-system-t.html -->
<!-- Managed by scripts/verify.py (GitHub Actions). To dispute an [Open] issue, add a line starting with
     **Opus Rebuttal:** at the end of that issue and push; the next run judges it. Do not edit other lines. -->

- Last verified: 2026-10-28 (commit 10fede1, deepseek-chat)
- Open: 6 / Resolved: 0 / Ignored: 0

## Summary of the last run

The page is largely correct in its proofs. The main problems are in the supplement and hypcheck: an incorrect example (ωω) for non-normalization with the recursor, an overstated/imprecise characterization of T-representable functions as PA-provably-total, an imprecise statement about System F and second-order arithmetic, a misleading 'type N→N guarantees totality by itself' claim, an ambiguous claim about the type N recursor yielding only primitive recursive functions, and an imprecise statement about strong normalization and consistency of PA. No issues were found in the core proofs or in the cited theorems' hypotheses.

## Issues

### ISSUE-0001 [Open] Incorrect claim that untyped terms with recursor retain ωω
- **Category:** Supplement/remark error
- **Location:** supplement / 前提の検討, second bullet
- **Detail:** The supplement says that adding the recursor to untyped terms destroys strong normalization, giving the example 'ωω remains as is'. But ωω = (λx.xx)(λx.xx) is a pure lambda term that has nothing to do with the recursor; it is already non-normalizing in the pure untyped lambda calculus. So it is not an example illustrating that adding R breaks strong normalization. A correct example must use R, e.g. a term that unfolds R to itself.
- **Proposed fix:** Replace the example with one that genuinely uses the recursor, e.g. let $W\defeq\lambda x.\,\mathrm{R}\,0\,(\lambda a\,b.\,x\,x)\,0$; then $W\,W\to^{*}\mathrm{R}\,0\,(\lambda a\,b.\,W\,W)\,0\to(\lambda a\,b.\,W\,W)\,(\mathrm{R}\,0\,(\lambda a\,b.\,W\,W)\,0)\,0\to W\,W$, giving an infinite reduction. (The pure term $\omega\omega$ is non-normalizing already in the untyped lambda calculus and does not illustrate the effect of adding $\mathrm{R}$.)
- **Reported:** 2026-10-28 (10fede1)

### ISSUE-0002 [Open] Overstated identification of T-representable functions with PA-provably-total functions
- **Category:** Supplement/remark error
- **Location:** remark after logic:t-not-all (and the intro sentence)
- **Detail:** The remark states that the functions representable in T are exactly the recursive functions whose totality is provable in PA (or in Heyting arithmetic). The correct characterization is: the functions provably total (with a Σ_{1} graph) in HA, equivalently in PA. The phrase 'recursive functions whose totality is provable in PA' is imprecise because it does not restrict to provably-total functions with a fixed recursive definition; more importantly, the parenthetical '(\ref{pt:page-goodstein} の意味)' suggests a specific notion of provable totality that is not defined there. Also, the claim that the other direction follows from showing strong normalization of T by transfinite induction below ε_{0} is only a proof-theoretic strength argument; it does not by itself establish that every PA-provably-total function is representable in T. That requires the Dialectica/functional interpretation plus a definability argument.
- **Proposed fix:** State: 'The functions representable in T are exactly the functions whose totality is provable in Heyting arithmetic HA (equivalently in PA), i.e. the provably total recursive functions of HA. One direction is Gödel's Dialectica interpretation (1958); the other direction uses that the provably total functions of HA are closed under the recursion schemes available in T, together with the fact that strong normalization of T is provable in PA (via induction below ε_{0}).' Remove the vague reference to the Goodstein page's notion of provable totality.
- **Reported:** 2026-10-28 (10fede1)

### ISSUE-0003 [Open] Claim that System F representable functions equal those provably total in second-order arithmetic
- **Category:** Supplement/remark error
- **Location:** supplement / 関連する結果, System F bullet
- **Detail:** The supplement says that the functions representable in System F are exactly those whose totality is provable in second-order arithmetic (attributed to Girard). The standard result is that the functions representable in System F are exactly the functions provably total in second-order Peano arithmetic PA2 (equivalently, the provably recursive functions of second-order arithmetic), but the statement as written is imprecise: 'second-order arithmetic' without specifying the comprehension scheme, and 'provably total' without specifying the class of formulas, is ambiguous. Moreover, the precise theorem (Girard) is that the representable functions are those provably total in PA2 with Σ^{1}_{1} (or suitable) comprehension; the bare phrase is stronger than the literature supports.
- **Proposed fix:** State: 'The functions representable in System F are exactly the functions provably total in second-order Peano arithmetic (Girard's theorem); more precisely, they coincide with the provably total recursive functions of PA2.'
- **Reported:** 2026-10-28 (10fede1)

### ISSUE-0004 [Open] Claim that type N→N alone guarantees representing a total function
- **Category:** Supplement/remark error
- **Location:** supplement / 高い視点から, first sentence
- **Detail:** The supplement says 'having type N→N guarantees, by itself, that it represents a total function'. This is imprecise: a closed term of type N→N is strongly normalizing and hence, applied to a numeral, reduces to a numeral, so it does represent a total function. However, the phrase 'by itself' is misleading because it relies on the strong normalization theorem, which is a nontrivial metatheorem, not merely on the type. Also, the term must be closed; an open term of type N→N with free variables does not represent a function. The statement should mention closedness and the reliance on strong normalization.
- **Proposed fix:** State: 'A closed term of type N→N represents a total function; this follows from strong normalization and the fact that closed normal forms of type N are numerals.'
- **Reported:** 2026-10-28 (10fede1)

### ISSUE-0005 [Open] Claim that type N recursor alone yields only primitive recursive functions
- **Category:** Unsupported fact
- **Location:** hypcheck / 高い型の再帰子 bullet
- **Detail:** The hypcheck says 'it is known that with only the type N recursor one can represent only primitive recursive functions'. This is true for the system T restricted to recursors at type N (i.e. Gödel's T without higher types), but the statement as written is ambiguous: it could be read as saying that in full T, using only the recursor at type N (but still having higher types available for other purposes) one gets only primitive recursive functions, which is false because higher types can be used to encode higher-type recursion. The intended meaning is that the subsystem with only type N recursors (and no higher-type recursors) represents exactly the primitive recursive functions.
- **Proposed fix:** State: 'In the subsystem of T having only the recursor at type N (no higher-type recursors), exactly the primitive recursive functions are representable.'
- **Reported:** 2026-10-28 (10fede1)

### ISSUE-0006 [Open] Claim that strong normalization of T implies consistency of PA
- **Category:** Supplement/remark error
- **Location:** supplement / 前提の検討, first bullet
- **Detail:** The supplement says 'it is known that showing strong normalization for all terms at once cannot be done in PA (because strong normalization of T implies consistency of PA)'. The direction is correct in spirit, but the parenthetical is imprecise: strong normalization of T is provable in PA (indeed in PA via ε_{0}-induction), so it does not imply consistency of PA within PA. What is true is that the statement 'all terms of T are strongly normalizing' is not provable in a weak system without ε_{0}-induction, and that strong normalization of T is equivalent in strength to the well-foundedness of ε_{0}, which implies consistency of PA. The phrase 'strong normalization of T implies consistency of PA' is true metatheoretically (since SN of T implies Con(PA)), but the surrounding sentence suggests it cannot be shown in PA, which is false: SN of T is provable in PA.
- **Proposed fix:** State: 'Strong normalization of T is provable in PA using induction up to ε_{0}; it is not provable in a system without such induction, and it implies the consistency of PA (so it cannot be proved in a very weak base theory).'
- **Reported:** 2026-10-28 (10fede1)
