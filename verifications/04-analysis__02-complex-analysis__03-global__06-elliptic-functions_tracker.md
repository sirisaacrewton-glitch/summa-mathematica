# Verification tracker: `04-analysis/02-complex-analysis/03-global/06-elliptic-functions.html`

<!-- source: 04-analysis/02-complex-analysis/03-global/06-elliptic-functions.html -->
<!-- Managed by scripts/verify.py (GitHub Actions). To dispute an [Open] issue, add a line starting with
     **Opus Rebuttal:** at the end of that issue and push; the next run judges it. Do not edit other lines. -->

- Last verified: 2026-10-28 (commit 8ccef3d, deepseek-chat)
- Open: 1 / Resolved: 0 / Ignored: 0

## Summary of the last run

The page is mathematically sound overall: the Liouville theorems, the construction and properties of $\wp$, the differential equation, the half-period corollary, and the field structure $\C(\wp,\wp')$ are all correctly proved with appropriate citations. The only issues are in the supplement: the description of the map to the elliptic curve is slightly imprecise about the affine vs. projective curve and states the group-law correspondence without proof or citation, and the historical remark is a minor overstatement. No logical gaps or missing hypotheses were found in the proofs.

## Issues

### ISSUE-0001 [Open] Incorrect claim that the map to the elliptic curve is bijective on (C/Λ)\{0}
- **Category:** Supplement/remark error
- **Location:** supplement (楕円曲線との関係)
- **Detail:** The supplement says that $z\mapsto(\wp(z),\wp'(z))$ maps $(\C/\Lambda)\setminus\{0\}$ bijectively onto $E$. But $\wp$ has a double pole at $0$, so the point $0$ corresponds to the point at infinity; the affine curve $E$ is hit by $(\C/\Lambda)\setminus\{0\}$, and the map is injective there, but the statement as written conflates the affine curve with its projective closure. More importantly, the sentence 'this map is bijective' is stated for the affine curve while the very next clause says 'sending $0$ to the point at infinity'. The map $(\C/\Lambda)\setminus\{0\}\to E$ is indeed a bijection onto the affine part, so the claim is essentially correct, but the phrasing '全単射' applied to the affine curve together with the separate remark about infinity is imprecise. Also the claim that 'the addition on the elliptic curve (chord-tangent) is exactly the addition on $\C/\Lambda$' is a substantial theorem not proved or cited here; it is stated as fact without reference.
- **Proposed fix:** Rewrite: 'The map $z\mapsto(\wp(z),\wp'(z))$ sends $(\C/\Lambda)\setminus\{0\}$ bijectively onto the affine curve $E: y^{2}=4x^{3}-g_{2}x-g_{3}$, and extends to a bijection $\C/\Lambda\to \overline{E}$ by sending $0$ to the point at infinity. Under this bijection the group law on $\overline{E}$ (chord-tangent) corresponds to addition on $\C/\Lambda$.' If the group-law correspondence is to be used, cite a reference or mark it as a fact to be proved later.
- **Reported:** 2026-10-28 (8ccef3d)
