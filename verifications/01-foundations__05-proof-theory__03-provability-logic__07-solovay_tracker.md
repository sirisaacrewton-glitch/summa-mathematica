# Verification tracker: `01-foundations/05-proof-theory/03-provability-logic/07-solovay.html`

<!-- source: 01-foundations/05-proof-theory/03-provability-logic/07-solovay.html -->
<!-- Managed by scripts/verify.py (GitHub Actions). To dispute an [Open] issue, add a line starting with
     **Opus Rebuttal:** at the end of that issue and push; the next run judges it. Do not edit other lines. -->

- Last verified: 2026-10-28 (commit 8ccef3d, deepseek-chat)
- Open: 2 / Resolved: 0 / Ignored: 0

## Summary of the last run

The main theorem, the Solovay function lemma, the properties lemma, the embedding lemma and the final proof are logically sound and the citations match their targets. The genuine problems are confined to the closing supplement/remark: the remark on weakening hypotheses states the soundness condition imprecisely (the standard hypothesis is Σ-soundness, and the '$\neg S_{i}$-soundness' phrasing is circular), and the 'high-level view' supplement overstates what properties 5 and 6 say about $h$ moving further. Both are medium-confidence side-comment issues; no proof-level gaps were found.

## Issues

### ISSUE-0001 [Open] Σ-soundness is not the right hypothesis for the remark on weakening assumptions
- **Category:** Supplement/remark error
- **Location:** remark 仮定の弱め方
- **Detail:** The remark claims that Step 2 only needs PA to be sound for sentences of the form $\neg S_{i}$, and that replacing PA by a recursively axiomatized Σ-sound extension preserves the provability logic GL. This is imprecise: the standard hypothesis for Solovay's theorem over an extension $T$ of PA is that $T$ is Σ-sound (or at least sound for Π₁ sentences / Σ₁-sound), and the argument in Step 2 uses soundness of $T$ for the sentences $\neg S_{i}$, which are Π₁ (since $S_{i}$ is Σ). But the remark's phrasing 'sound for sentences of the form $\neg S_{i}$' is circular/ill-defined because the $S_{i}$ depend on the construction, and it does not state the actual hypothesis (Σ-soundness) precisely. Also the parenthetical '一般にはこう言われており' is vague. The claim that Σ-soundness suffices is correct, but the stated condition is not the standard one and is stated imprecisely.
- **Proposed fix:** State: 'Step 2 only uses that $T$ is sound for the Π₁ sentences $\neg S_{i}$; this is ensured if $T$ is Σ-sound (every Σ sentence provable in $T$ is true). Solovay's theorem extends to any recursively axiomatized Σ-sound extension $T$ of PA: its provability logic is GL.'
- **Reported:** 2026-10-28 (8ccef3d)

### ISSUE-0002 [Open] Claim that PA 'knows' h moves further (properties 5,6) is overstated
- **Category:** Supplement/remark error
- **Location:** supplement 高い視点から
- **Detail:** The supplement says: 'if $h$ is at $i$ then PA knows that $h$ moves further (properties 5, 6)'. Property 5 gives $S_{i}\to\Box\neg S_{i}$ and property 6 gives $S_{i}\to\Box\bigvee_{j:iRj}S_{j}$; these express that PA proves $\neg S_{i}$ is consistent and that some successor is possible, not that '$h$ moves further'. In fact $h$ may stay at $i$ forever (if no proof of $\neg S_{j}$ is ever found), so PA does not prove that $h$ actually moves. The statement conflates 'possible successor' with 'actually moves'.
- **Proposed fix:** Replace with: 'if $h$ is at $i$, then PA cannot rule out any $R$-successor (property 4) and proves that some $R$-successor is possible (property 6); it does not prove that $h$ actually moves.'
- **Reported:** 2026-10-28 (8ccef3d)
