# Verification tracker: `01-foundations/01-general-logic/02-first-order-logic/09-craig-robinson.html`

<!-- source: 01-foundations/01-general-logic/02-first-order-logic/09-craig-robinson.html -->
<!-- Managed by scripts/verify.py (GitHub Actions). To dispute an [Open] issue, add a line starting with
     **Opus Rebuttal:** at the end of that issue and push; the next run judges it. Do not edit other lines. -->

- Last verified: 2026-10-28 (commit 8ccef3d, deepseek-chat)
- Open: 2 / Resolved: 0 / Ignored: 0

## Summary of the last run

The page is largely correct and well structured. The main genuine problem is in the proof of Robinson's theorem (general-language case, Step 3), where the text infers semantic consequence $T_{2}\models\theta$ from $T\subset T_{2}$ and soundness, which is a non-sequitur (it should be $T_{2}\vdash\theta$ then soundness). The final supplement's claim that the separation lemma follows from interpolation plus compactness is sketched too loosely and is imprecise. The hypcheck counterexample for dropping $T\subset T_{2}$ was re-examined and is actually a valid counterexample, so no issue is reported there.

## Issues

### ISSUE-0001 [Open] Robinson from compactness+interpolation: T⊢θ does not give T₂⊨θ
- **Category:** Supplement/remark error
- **Location:** logic:robinson-joint-consistency / Step 3
- **Detail:** In Step 3 the text argues: if $T\vdash\theta$ then by $T\subset T_{2}$ and soundness $T_{2}\models\theta$. But $T\subset T_{2}$ only gives $T_{2}\vdash\theta$ (syntactic derivability), not $T_{2}\models\theta$; soundness goes the other way ($T_{2}\vdash\theta\Rightarrow T_{2}\models\theta$), so one needs $T_{2}\vdash\theta$ and then soundness. As written the inference '$T\subset T_{2}$ and soundness give $T_{2}\models\theta$' is a non-sequitur (it conflates provability with truth in a model). The same flaw appears in the second bullet: '$T_{1}\models\neg\theta$' from $T\vdash\neg\theta$ and $T\subset T_{1}$.
- **Proposed fix:** Replace with: 'If $T\vdash\theta$, then since $T\subset T_{2}$ we have $T_{2}\vdash\theta$, hence by soundness $T_{2}\models\theta$, so $T_{2}\models\neg\bigwedge F_{2}$; but $F_{2}\subset T_{2}$ gives $T_{2}\models\bigwedge F_{2}$, so $T_{2}$ has no model and by completeness is inconsistent, contradicting the hypothesis.' Similarly for the case $T\vdash\neg\theta$: '$T\subset T_{1}$ gives $T_{1}\vdash\neg\theta$, hence $T_{1}\models\neg\theta$ by soundness, while $T_{1}\models\bigwedge F_{1}\models\theta$, so $T_{1}$ is inconsistent.'
- **Reported:** 2026-10-28 (8ccef3d)

### ISSUE-0002 [Open] Claim that inseparability-theorem follows from interpolation plus compactness
- **Category:** Supplement/remark error
- **Location:** final supplement (まとめ), second paragraph
- **Detail:** The supplement asserts that \ref{logic:inseparability-theorem} itself can be derived from the interpolation theorem by showing 'if inseparable then every finite subset of $T_{1}\cup T_{2}$ is satisfiable' and applying compactness. This is essentially correct in outline, but the sketch omits the key step: one must show that inseparability of $(T_{1},T_{2})$ implies each finite $F_{1}\cup F_{2}$ is satisfiable, which requires producing an interpolant from $\bigwedge F_{1}\models\neg\bigwedge F_{2}$ and then using inseparability to rule out the two cases $T_{1}\vdash\theta$ / $T_{2}\vdash\neg\theta$ — but inseparability alone does not give $T_{1}\vdash\theta$ or $T_{2}\vdash\neg\theta$; one needs the completeness of the common theory or a separate argument. As stated the claim is at least imprecise: inseparability does not by itself yield the finite satisfiability without an additional argument (e.g. that $T_{1}\cup T_{2}$ has the joint consistency property). The assertion 'three are different expressions of the same phenomenon' is an overstatement given the proof structure.
- **Proposed fix:** Either supply the missing argument (from $\bigwedge F_{1}\models\neg\bigwedge F_{2}$ obtain an interpolant $\theta$; if $T_{1}\vdash\theta$ then $T_{2}\vdash\neg\theta$ would separate, so $T_{1}\not\vdash\theta$; but this only shows consistency of $F_{1}\cup F_{2}$ if one also knows $T_{1}$ is complete on $\mathcal{L}_{0}$ or argues semantically), or weaken the claim to: 'Under completeness and compactness, interpolation and joint consistency are interderivable; the separation lemma is the common semantic core, though deriving it from interpolation requires an additional argument.'
- **Reported:** 2026-10-28 (8ccef3d)
