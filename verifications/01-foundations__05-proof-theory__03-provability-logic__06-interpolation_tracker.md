# Verification tracker: `01-foundations/05-proof-theory/03-provability-logic/06-interpolation.html`

<!-- source: 01-foundations/05-proof-theory/03-provability-logic/06-interpolation.html -->
<!-- Managed by scripts/verify.py (GitHub Actions). To dispute an [Open] issue, add a line starting with
     **Opus Rebuttal:** at the end of that issue and push; the next run judges it. Do not edit other lines. -->

- Last verified: 2026-10-28 (commit 8ccef3d, deepseek-chat)
- Open: 3 / Resolved: 0 / Ignored: 0

## Summary of the last run

The main body (interpolation theorem, truth lemma, Beth, Bernardi, third proof) is logically sound and the citations match their targets. The genuine problems are concentrated in the supplement: the claim that Beth's theorem uses no GL-specific property is false (it depends on GL interpolation, which uses the Löb rule), and the list of modal logics with Craig interpolation wrongly includes K4, for which interpolation fails. A minor imprecision concerns the description of de Jongh's problem.

## Issues

### ISSUE-0001 [Open] Incorrect claim that Beth's theorem uses no GL-specific property
- **Category:** Supplement/remark error
- **Location:** supplement / 前提の検討, second bullet
- **Detail:** The supplement says "ベートの定理は補間定理だけから導かれ、GL に固有の性質は使わない". But the proof of Beth's theorem (pt:gl-beth) invokes pt:gl-interpolation, whose proof relies essentially on the Löb rule (逆整礎性), as the page's own hypcheck states. So Beth's theorem for GL does depend on GL-specific properties (via interpolation). The claim is false as stated.
- **Proposed fix:** Beth's theorem is derived purely from the Craig interpolation theorem for GL; it uses no GL-specific property *beyond those already needed to prove interpolation* (in particular, the Löb rule enters only through the proof of interpolation, not in the Beth argument itself).
- **Reported:** 2026-10-28 (8ccef3d)

### ISSUE-0002 [Open] Overstated interpolation claim for K4
- **Category:** Supplement/remark error
- **Location:** supplement / 関連する結果
- **Detail:** The supplement lists K, K4, S4, S5 as systems where interpolation holds. Craig interpolation does hold for K, S4, S5, but it FAILS for K4 (and for GL's relative K4). This is a known result (Maksimova). Listing K4 among systems with interpolation is false.
- **Proposed fix:** Interpolation holds for K, S4, S5 (and many others), but fails for K4; the list should read "$\mathsf{K}$, $\mathsf{S4}$, $\mathsf{S5}$ などでは成り立つ" and note that K4 is a counterexample.
- **Reported:** 2026-10-28 (8ccef3d)

### ISSUE-0003 [Open] Mischaracterization of de Jongh's problem as showing boxdot says nothing about p-free information
- **Category:** Supplement/remark error
- **Location:** supplement / 前提の検討, third bullet
- **Detail:** The de Jongh problem states: if $\vdash\boxdot(p\leftrightarrow A)\to B$ with $B$ not containing $p$, then $\vdash B$. This says that $\boxdot(p\leftrightarrow A)$ implies no $p$-free formula that is not already a theorem, i.e. it imposes no *new* constraint expressible without $p$. The supplement's phrasing "$p$ を含まない情報について何も主張しない" is acceptable in spirit, but calling it a semantic capture of the *existence* side of the fixed point theorem is imprecise: the problem is proved *without* the fixed point theorem and is a conservation/elimination statement, not a construction of the fixed point. This is a mild overstatement rather than a strict error; flagged as medium.
- **Proposed fix:** de Jongh's problem shows that $\boxdot(p\leftrightarrow A)$ yields no new $p$-free consequences (a conservation result), which is proved without the fixed point theorem; it is not itself a semantic construction of the fixed point.
- **Reported:** 2026-10-28 (8ccef3d)
