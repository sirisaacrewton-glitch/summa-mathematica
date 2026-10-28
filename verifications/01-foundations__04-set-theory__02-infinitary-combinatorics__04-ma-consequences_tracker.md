# Verification tracker: `01-foundations/04-set-theory/02-infinitary-combinatorics/04-ma-consequences.html`

<!-- source: 01-foundations/04-set-theory/02-infinitary-combinatorics/04-ma-consequences.html -->
<!-- Managed by scripts/verify.py (GitHub Actions). To dispute an [Open] issue, add a line starting with
     **Opus Rebuttal:** at the end of that issue and push; the next run judges it. Do not edit other lines. -->

- Last verified: 2026-10-28 (commit 8ccef3d, deepseek-chat)
- Open: 3 / Resolved: 0 / Ignored: 0

## Summary of the last run

(none)

## Issues

### ISSUE-0001 [Open] Incorrect claim about strengthened coding lemma
- **Category:** Supplement/remark error
- **Location:** supplement after set:ma-ad-code
- **Detail:** The supplement claims that the strengthening requiring $x\setminus d$ finite for $x\in\mathcal{B}\setminus\mathcal{A}$ holds under $\mathrm{MA}(\kappa)$ when one of $\mathcal{A}$, $\mathcal{B}\setminus\mathcal{A}$ is countable, and fails in ZFC when both have size $\aleph_{1}$. This is wrong. If $\mathcal{B}\setminus\mathcal{A}$ is countable (say $\{y_{k}\}$), requiring $y_{k}\setminus d$ finite for all $k$ together with $\lvert d\cap x\rvert<\omega$ for $x\in\mathcal{A}$ is impossible in general: taking $d'=d$ and $x\in\mathcal{A}$, $d\cap x$ finite, but $y_{k}\setminus d$ finite for infinitely many $y_{k}$ forces $d$ to contain almost all of $\bigcup y_{k}$, which typically meets $x$ infinitely (e.g. $\mathcal{B}$ an almost disjoint family with $x$ intersecting each $y_{k}$ infinitely). The cited 'Luzin gap' counterexample concerns a different statement (existence of a gap, not this coding), and the attribution to Hausdorff/Luzin for this specific dichotomy is imprecise.
- **Proposed fix:** Replace with: 'The strengthening requiring $x\setminus d$ finite for all $x\in\mathcal{B}\setminus\mathcal{A}$ cannot in general be achieved: if $\mathcal{B}\setminus\mathcal{A}$ is infinite and each $x\in\mathcal{A}$ meets infinitely many members of $\mathcal{B}\setminus\mathcal{A}$ in infinitely many points, then $d$ almost containing all of $\mathcal{B}\setminus\mathcal{A}$ forces $d\cap x$ infinite. The relevant gap phenomena (Hausdorff/Luzin gaps, Kunen Ch. II exercises) concern a different, more subtle statement and do not give a counterexample to this coding lemma.'
- **Reported:** 2026-10-28 (8ccef3d)

### ISSUE-0002 [Open] Overstated 'only obstruction' claim in intuition
- **Category:** Supplement/remark error
- **Location:** intuition after set:ma-ad
- **Detail:** The intuition says hypothesis (4.2) is 'clearly necessary' and that the theorem states this 'obvious obstruction is the only obstruction'. The necessity direction is fine, but the phrase 'the only obstruction' is an overstatement: the hypothesis is sufficient for the conclusion, but it is not claimed (and not true in the sense implied) that any failure of the conclusion is captured solely by (4.2) for arbitrary $\mathcal{A},\mathcal{C}$; the theorem is a sufficient condition, not a characterization.
- **Proposed fix:** Rephrase: 'Hypothesis (4.2) is clearly necessary for the conclusion. The theorem shows that, within the size bound $\lvert\mathcal{A}\rvert,\lvert\mathcal{C}\rvert\le\kappa$, this condition is sufficient.'
- **Reported:** 2026-10-28 (8ccef3d)

### ISSUE-0003 [Open] GCH failure statement at aleph_0
- **Category:** Supplement/remark error
- **Location:** supplement after set:ma-two-kappa, first bullet
- **Detail:** The bullet says 'under $\mathrm{MA}+\lnot\mathrm{CH}$, $2^{\aleph_{0}}\ge\aleph_{2}>\aleph_{0}^{+}$ so GCH fails at $\aleph_{0}$'. GCH at $\aleph_{0}$ is the statement $2^{\aleph_{0}}=\aleph_{1}$; its failure is exactly $2^{\aleph_{0}}\ne\aleph_{1}$, which $\lnot\mathrm{CH}$ gives. The inequality $\aleph_{2}>\aleph_{0}^{+}$ is correct but the phrasing 'GCH fails at $\aleph_{0}$' is fine; however the subsequent claim 'if $2^{\aleph_{0}}=\aleph_{2}$ then $2^{\aleph_{1}}=\aleph_{2}=\aleph_{1}^{+}$ and GCH holds at $\aleph_{1}$' is correct. The real issue: the statement '$2^{<2^{\aleph_{0}}}=2^{\aleph_{0}}$' is asserted as if it follows, but $2^{<2^{\aleph_{0}}}=\sup_{\mu<2^{\aleph_{0}}}2^{\mu}$; this equals $2^{\aleph_{0}}$ only because $2^{\mu}=2^{\aleph_{0}}$ for all infinite $\mu<2^{\aleph_{0}}$ under MA, which requires the theorem for all such $\mu$ — true, but the text presents it as immediate. This is a minor imprecision rather than an error.
- **Proposed fix:** Add: 'Indeed $2^{<2^{\aleph_{0}}}=\sup_{\mu<2^{\aleph_{0}}}2^{\mu}=2^{\aleph_{0}}$, since $2^{\mu}=2^{\aleph_{0}}$ for every infinite $\mu<2^{\aleph_{0}}$ by the theorem.'
- **Reported:** 2026-10-28 (8ccef3d)
