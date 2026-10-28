# Verification tracker: `01-foundations/01-general-logic/04-modal-logic-cs/05-ltl.html`

<!-- source: 01-foundations/01-general-logic/04-modal-logic-cs/05-ltl.html -->
<!-- Managed by scripts/verify.py (GitHub Actions). To dispute an [Open] issue, add a line starting with
     **Opus Rebuttal:** at the end of that issue and push; the next run judges it. Do not edit other lines. -->

- Last verified: 2026-10-28 (commit 048145a, deepseek-chat)
- Open: 6 / Resolved: 0 / Ignored: 1

## Summary of the last run

The page is largely correct. The main remaining problems are in the side remarks and intuition: the claim that G A is the greatest fixed point of Y ↔ A ∧ X Y is literally false (it is only the greatest among formula-definable solutions), and the intuition's description of the Hintikka hypcheck example as a 'greatest fixed point' reading is imprecise. The compactness remark's finite-satisfiability direction is true but under-justified. The previously reported Step 1 gap in the completeness proof is adequately answered by the rebuttal and can be closed.

## Issues

### ISSUE-0001 [Open] G is not literally the greatest fixed point of Y ↔ A ∧ X Y
- **Category:** Supplement/remark error
- **Location:** remark after logic:ltl-valid (the sentence 'G A は双対的に Y↔A∧XY の最大の解である')
- **Detail:** The remark says that $\mathbf{G}A$ is the greatest solution of $Y\leftrightarrow A\wedge\mathbf{X}Y$. This is imprecise: the greatest fixed point of the operator $Y\mapsto A\wedge\mathbf{X}Y$ on the lattice of formulas (or on sets of positions) is the constant-true function, not $\mathbf{G}A$. What is true is that $\mathbf{G}A$ is the greatest solution among the solutions that are *definable by an LTL formula* (or, semantically, the greatest fixed point of the operator restricted to the class of sets definable by formulas, i.e. $\mathbf{G}A$ is the strongest formula $C$ with $\vdash C\to A\wedge\mathbf{X}C$). Stated as written, the claim is false, and it also conflicts with the intuition section, which repeats the same overstatement.
- **Proposed fix:** Replace with: '$\\mathbf{G}A$ is dually the greatest solution *among LTL-definable formulas* of $Y\\leftrightarrow A\\wedge\\mathbf{X}Y$: it is the strongest formula $C$ with $\\vdash C\\to A\\wedge\\mathbf{X}C$ (equivalently, the greatest fixed point of the operator restricted to formula-definable sets of positions).'
- **Reported:** 2026-10-28 (8ccef3d)
- **History:** 2026-10-28 (048145a): Open — The remark still says G A is the greatest solution of Y ↔ A ∧ X Y, which is false on the lattice of all sets/formulas (the greatest fixed point is the constant-true one); no rebuttal is attached.

### ISSUE-0002 [Open] The hypcheck example is not a 'greatest fixed point' reading of U
- **Category:** Supplement/remark error
- **Location:** intuition (last paragraph) and logic:ltl-hintikka-lemma hypcheck
- **Detail:** The intuition section says that the example in the hypcheck of the Hintikka lemma 'corresponds to a sequence that read $p\,\mathbf{U}\,q$ as a greatest fixed point'. This is not accurate. In that example $T_{i}=\{p,\ p\,\mathbf{U}\,q,\ \mathbf{X}(p\,\mathbf{U}\,q)\}$ satisfies H1–H3 but not H4, so it is a sequence where the until is unfolded forever without fulfilment. The greatest fixed point of $Y\mapsto B\vee(A\wedge\mathbf{X}Y)$ would be the constant-true set (or, restricted to definable sets, the weakest solution), which is not what this sequence represents; the sequence represents a *non-well-founded* unfolding, i.e. a solution of the local equation that is not the least one. The description 'read as a greatest fixed point' is therefore misleading/imprecise.
- **Proposed fix:** Replace with: 'The example in the hypcheck of the Hintikka lemma is a sequence that satisfies the local unfolding equation $Y\\leftrightarrow B\\vee(A\\wedge\\mathbf{X}Y)$ at every point but never fulfils the promise, i.e. a non-well-founded (non-least) solution of the unfolding; H4 rules it out.'
- **Reported:** 2026-10-28 (8ccef3d)
- **History:** 2026-10-28 (048145a): Open — The intuition still describes the hypcheck example as reading p U q as a greatest fixed point, which is imprecise; the example is a non-well-founded unfolding, not the greatest fixed point.

### ISSUE-0003 [Open] Compactness failure example: the finite-subset claim needs X^n p to be in the language
- **Category:** Unsupported fact
- **Location:** remark after logic:ltl-examples
- **Detail:** The remark claims that $\{\mathbf{F}p\}\cup\{\neg\mathbf{X}^{n}p:n\ge0\}$ has every finite subset satisfiable but the whole set unsatisfiable. The unsatisfiability direction is correct (if $\mathbf{F}p$ holds then $p$ holds at some $k$, so $\neg\mathbf{X}^{k}p$ fails). The finite satisfiability direction is also correct, but the text does not note that $\mathbf{X}^{n}p$ is a formula of the language (it is, by iterating $\mathbf{X}$), and more importantly it does not verify that a model satisfying $\mathbf{F}p$ and finitely many $\neg\mathbf{X}^{n}p$ exists: take $\sigma$ with $p$ true exactly at time $N$ where $N$ exceeds all $n$ appearing; then $\mathbf{F}p$ holds and all the chosen $\neg\mathbf{X}^{n}p$ hold. This is a genuine gap in the justification, though the claim itself is true.
- **Proposed fix:** Add the witness: 'For a finite subset, let $N$ be larger than every $n$ occurring; take $\\sigma$ with $p$ true exactly at time $N$. Then $\\sigma,0\\models\\mathbf{F}p$ and $\\sigma,0\\models\\neg\\mathbf{X}^{n}p$ for all $n<N$, so the finite subset is satisfiable.'
- **Reported:** 2026-10-28 (8ccef3d)
- **History:** 2026-10-28 (048145a): Open — The remark still asserts finite satisfiability without spelling out the witnessing sequence; the claim is true but the justification is only sketched.

### ISSUE-0004 [Ignored: Valid Rebuttal] Step 1 of the completeness proof: the 'first stage handling E_l' argument needs the promise to persist
- **Category:** Logical gap
- **Location:** logic:ltl-completeness / Step 1
- **Detail:** In Step 1 the text argues: if $E_{l}=C\,\mathbf{U}\,D\in\pi(i)$ and no $k\ge i$ has $D\in\pi(k)$, then by logic:ltl-successor.3 $E_{l}\in\pi(j)$ for all $j\ge i$; then at the first stage starting at position $\ge i$ that handles $E_{l}$, the initial element $x=\pi(j)$ contains $E_{l}$, so the appended fulfilment sequence ends in a set containing $D$, contradiction. This is essentially correct, but the text does not verify that the appended fulfilment sequence is not later truncated by the final 'append a successor' step in a way that removes the $D$-set, nor that the stage handling $E_{l}$ indeed starts at a position $\ge i$ with $\pi(j)$ containing $E_{l}$ (it does, by the persistence just established). The argument is terse but the missing detail is that the appended sequence from logic:ltl-fulfil is placed contiguously and the final successor is appended *after* it, so the $D$-containing set remains in $\pi$. This should be stated.
- **Proposed fix:** Add: 'The fulfilment sequence is appended contiguously and the extra successor is appended only after its last element, so the set containing $D$ remains in $\\pi$; hence $D\\in\\pi(k)$ for some $k\\ge i$, contradicting the assumption.'
- **Reported:** 2026-10-28 (8ccef3d)
- **History:** 2026-10-28 (048145a): Ignored: Valid Rebuttal — The rebuttal is correct: Step 1 appends the fulfilment sequence contiguously and the final successor after it, so the D-containing set remains in π; the persistence argument is already stated.
**Opus Rebuttal:** Step 1 appends the fulfilment sequence contiguously and only then continues; the set containing $D$ stays in $\pi$. The argument as written already says the stage handling $E_{l}$ starts at a position $\ge i$ with $E_{l}$ in it, by the persistence just shown.

### ISSUE-0005 [Open] G A is not literally the greatest fixed point of Y ↔ A ∧ X Y
- **Category:** Supplement/remark error
- **Location:** remark after logic:ltl-valid (the sentence 'G A は双対的に Y↔A∧XY の最大の解である')
- **Detail:** The remark says that $\mathbf{G}A$ is the greatest solution of $Y\leftrightarrow A\wedge\mathbf{X}Y$. This is imprecise: the greatest fixed point of the operator $Y\mapsto A\wedge\mathbf{X}Y$ on the lattice of formulas (or on sets of positions) is the constant-true function, not $\mathbf{G}A$. What is true is that $\mathbf{G}A$ is the greatest solution among the solutions that are *definable by an LTL formula* (or, semantically, the greatest fixed point of the operator restricted to the class of sets definable by formulas, i.e. $\mathbf{G}A$ is the strongest formula $C$ with $\vdash C\to A\wedge\mathbf{X}C$). Stated as written, the claim is false, and it also conflicts with the intuition section, which repeats the same overstatement.
- **Proposed fix:** Replace with: '$\mathbf{G}A$ is the greatest solution of $Y\leftrightarrow A\wedge\mathbf{X}Y$ among the solutions definable by an LTL formula (equivalently, the strongest formula $C$ with $\vdash C\to A\wedge\mathbf{X}C$); on the lattice of all sets of positions the greatest fixed point would be the constant-true set.'
- **Reported:** 2026-10-28 (048145a)

### ISSUE-0006 [Open] The hypcheck example is not a 'greatest fixed point' reading of U
- **Category:** Supplement/remark error
- **Location:** intuition (last paragraph) and logic:ltl-hintikka-lemma hypcheck
- **Detail:** The intuition section says that the example in the hypcheck of the Hintikka lemma 'corresponds to a sequence that read $p\,\mathbf{U}\,q$ as a greatest fixed point'. This is not accurate. In that example $T_{i}=\{p,\ p\,\mathbf{U}\,q,\ \mathbf{X}(p\,\mathbf{U}\,q)\}$ satisfies H1–H3 but not H4, so it is a sequence where the until is unfolded forever without fulfilment. The greatest fixed point of $Y\mapsto B\vee(A\wedge\mathbf{X}Y)$ would be the constant-true set (or, restricted to definable sets, the weakest solution), which is not what this sequence represents; the sequence represents a *non-well-founded* unfolding, i.e. a solution of the local equation that is not the least one. The description 'read as a greatest fixed point' is therefore misleading/imprecise.
- **Proposed fix:** Replace with: 'The example in the hypcheck of \ref{logic:ltl-hintikka-lemma} is a sequence that satisfies the local unfolding equation for $p\,\mathbf{U}\,q$ forever without ever fulfilling it, i.e. a non-well-founded (non-least) solution of the local equation; H4 is exactly what excludes it.'
- **Reported:** 2026-10-28 (048145a)

### ISSUE-0007 [Open] Compactness failure example: the finite-subset claim needs X^n p to be in the language
- **Category:** Unsupported fact
- **Location:** remark after logic:ltl-examples
- **Detail:** The remark claims that $\{\mathbf{F}p\}\cup\{\neg\mathbf{X}^{n}p:n\ge0\}$ has every finite subset satisfiable but the whole set unsatisfiable. The unsatisfiability direction is correct (if $\mathbf{F}p$ holds then $p$ holds at some $k$, so $\neg\mathbf{X}^{k}p$ fails). The finite satisfiability direction is also correct, but the text does not note that $\mathbf{X}^{n}p$ is a formula of the language (it is, by iterating $\mathbf{X}$), and more importantly it does not verify that a model satisfying $\mathbf{F}p$ and finitely many $\neg\mathbf{X}^{n}p$ exists: take $\sigma$ with $p$ true exactly at time $N$ where $N$ exceeds all $n$ appearing; then $\mathbf{F}p$ holds and all the chosen $\neg\mathbf{X}^{n}p$ hold. This is a genuine gap in the justification, though the claim itself is true.
- **Proposed fix:** Add: 'Indeed, $\mathbf{X}^{n}p$ is a formula (iterate $\mathbf{X}$); given a finite subset, let $N$ exceed every $n$ occurring in it and take $\sigma$ with $p$ true exactly at time $N$; then $\mathbf{F}p$ and all the chosen $\neg\mathbf{X}^{n}p$ hold.'
- **Reported:** 2026-10-28 (048145a)
