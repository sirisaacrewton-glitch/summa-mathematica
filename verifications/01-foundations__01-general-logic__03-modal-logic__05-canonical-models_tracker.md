# Verification tracker: `01-foundations/01-general-logic/03-modal-logic/05-canonical-models.html`

<!-- source: 01-foundations/01-general-logic/03-modal-logic/05-canonical-models.html -->
<!-- Managed by scripts/verify.py (GitHub Actions). To dispute an [Open] issue, add a line starting with
     **Opus Rebuttal:** at the end of that issue and push; the next run judges it. Do not edit other lines. -->

- Last verified: 2026-10-28 (commit 10fede1, deepseek-chat)
- Open: 4 / Resolved: 0 / Ignored: 0

## Summary of the last run

(none)

## Issues

### ISSUE-0001 [Open] Step 1 of the non-well-foundedness proof: the 'at most one bad point' argument is wrong
- **Category:** Logical gap
- **Location:** logic:gl-canonical-not-cwf / Step 1
- **Detail:** The claim is that for a single formula $A$, the set of points where $\Box A\to A$ fails is at most one. The given argument is: if $k$ is bad ($k\models\Box A$, $k\not\models A$), then for $k'<k$ we have $k'Rk$ and $k\not\models A$, so $k'\not\models\Box A$; and for $k''>k$, from $kRk''$ and $k\models\Box A$ we get $k''\models A$. But this only shows that points *comparable* to $k$ are good. A point $j$ incomparable to $k$ (e.g. $j<k$ is fine, but a sibling $j$ with neither $j<k$ nor $k<j$) is not covered: $j$ could itself be bad. Indeed on a finite transitive irreflexive frame with two incomparable bad points the argument fails. So the pigeonhole count '$m$ formulas give at most $m$ bad points among $m+1$ points' is not justified. (The overall result is true, but this step as written is a genuine gap.)
- **Proposed fix:** Replace the argument by: on a linear order $W=\{0,\dots,m\}$ with $R={<}$, for a single formula $A$ there is at most one bad point. Indeed if $k<k'$ and $k$ is bad, then $k\models\Box A$ and $kRk'$ give $k'\models A$, so $k'$ is good; hence the bad points form an antichain, and in a linear order an antichain has at most one element. Thus $m$ formulas have at most $m$ bad points among the $m+1$ points of $W$, so some point satisfies all $\Box A_{i}\to A_{i}$.
- **Reported:** 2026-10-28 (10fede1)

### ISSUE-0002 [Open] Step 2 uses soundness for finite transitive irreflexive frames, but the cited theorem is soundness of K
- **Category:** Logical gap
- **Location:** logic:gl-canonical-not-cwf / Step 2
- **Detail:** Step 2 concludes that $\Gamma$ is GL-consistent by saying: if $\mathsf{GL}\vdash\neg(\bigwedge(\Box A_{i}\to A_{i}))$ then by \ref{logic:kripke-soundness.3} this formula is valid on every finite transitive irreflexive frame, contradicting Step 1. But \ref{logic:kripke-soundness.3} is '健全性定理' cited in the label table as soundness; the hypcheck explicitly says '有限の鎖で GL が健全であること：Step 2 で使った（\ref{logic:kripke-soundness.3}）'. If \ref{logic:kripke-soundness.3} is only soundness of $\mathsf{K}$ (or of the basic system), it does not give soundness of $\mathsf{GL}$ on finite transitive irreflexive frames, which is what is needed (GL is sound on finite irreflexive transitive frames, but this requires the Löb analysis, not just K-soundness). The citation is therefore either wrong or the needed hypothesis (soundness of GL on finite transitive irreflexive frames) is not verified.
- **Proposed fix:** Either cite the correct result (soundness of $\mathsf{GL}$ with respect to finite transitive irreflexive frames, which follows since such frames are conversely well-founded and GL is sound on conversely well-founded frames), or add the argument: on a finite transitive irreflexive frame $R$ is conversely well-founded, hence $\mathsf{GL}$ is sound there, so $\mathsf{GL}\vdash C$ implies $C$ is valid on every such frame.
- **Reported:** 2026-10-28 (10fede1)

### ISSUE-0003 [Open] Supplement claims the canonical model is 'universal' collecting information of all models
- **Category:** Supplement/remark error
- **Location:** supplement (高い視点から)
- **Detail:** The supplement says the canonical model's worlds are 'all complete descriptions of possible states compatible with $L$' and that it is 'a universal object gathering the information of the worlds of every $L$-model'. This is an overstatement: the canonical model is not universal in the technical sense (it is not the terminal/initial object, and there is no canonical morphism from every $L$-model into it in general; the truth lemma gives only that each $L$-consistent set is realized, not a universal mapping property). The 'possible worlds' of an arbitrary $L$-model need not correspond to maximal consistent sets in any canonical way. The claim is imprecise/overstated.
- **Proposed fix:** Soften to: 'The worlds of the canonical model are the maximal $L$-consistent sets, i.e. the complete $L$-consistent descriptions; every $L$-consistent set is contained in one of them (Lindenbaum), which is what makes the canonical model a single model realizing all $L$-consistent theories. Algebraically it is the ultrafilter frame of the Lindenbaum–Tarski modal algebra (a Stone-type dual), and for canonical (Geach) axioms this single model yields completeness.'
- **Reported:** 2026-10-28 (10fede1)

### ISSUE-0004 [Open] Supplement: Löb's axiom corresponds to a non-first-order condition and is a non-canonical example
- **Category:** Supplement/remark error
- **Location:** supplement (高い視点から)
- **Detail:** The supplement states 'レーブの公理は一階で書けない条件（逆整礎性）に対応し、カノニカルでない例になっている'. The claim that converse well-foundedness is not first-order definable is correct (it is not elementary). However, the phrasing 'corresponds to a condition that cannot be written in first order (converse well-foundedness)' combined with 'is a non-canonical example' is potentially misleading: the standard fact is that GL is not canonical *because* the canonical frame is not conversely well-founded (as the page itself proves), and the frame condition (converse well-foundedness) is not first-order. This part is essentially correct, but the sentence 'corresponds to a condition that cannot be written in first order' should be stated precisely: it is the *frame condition* (converse well-foundedness) that is not first-order definable, not the axiom. As written it could be read as saying the axiom itself is not first-order. Minor imprecision.
- **Proposed fix:** Rephrase: 'Löb's axiom corresponds to converse well-foundedness, which is not a first-order definable frame condition; GL is the standard example of a logic whose canonical frame fails this condition (the canonical frame of GL is not conversely well-founded), so GL is not canonical.'
- **Reported:** 2026-10-28 (10fede1)
