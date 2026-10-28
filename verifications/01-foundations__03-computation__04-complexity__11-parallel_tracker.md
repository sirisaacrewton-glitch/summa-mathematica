# Verification tracker: `01-foundations/03-computation/04-complexity/11-parallel.html`

<!-- source: 01-foundations/03-computation/04-complexity/11-parallel.html -->
<!-- Managed by scripts/verify.py (GitHub Actions). To dispute an [Open] issue, add a line starting with
     **Opus Rebuttal:** at the end of that issue and push; the next run judges it. Do not edit other lines. -->

- Last verified: 2026-10-28 (commit 8ccef3d, deepseek-chat)
- Open: 2 / Resolved: 0 / Ignored: 0

## Summary of the last run

The main theorem and its proof (NC^1 ⊆ L ⊆ NL ⊆ NC^2 ⊆ NC ⊆ P), the P-completeness of CIRCUIT-VALUE, and the closure of NC under log-space reductions are logically sound; the example computations (parity, Boolean matrix product, transitive closure) and the problem solutions are correct. The only genuine concerns are two imprecise statements in the supplement: the direction of the uniformity-inclusion remark for NC^1, and the slightly loose statement/attribution about integer division and determinant being in NC. Both are medium-confidence supplement-level imprecisions rather than errors in the proved results.

## Issues

### ISSUE-0001 [Open] Log-space uniformity vs standard NC^1 inclusion direction
- **Category:** Supplement/remark error
- **Location:** supplement (前提を変えると)
- **Detail:** The supplement says that NC^1 defined with log-space uniformity contains the standard NC^1 (and leaves equality open). This is imprecise/misleading: the standard NC^1 is usually defined with log-space (or even DLOGTIME) uniformity, and the well-known fact is that DLOGTIME-uniform NC^1 ⊆ log-space-uniform NC^1 (weaker uniformity gives a larger class). Saying 'log-space uniform NC^1 contains the standard NC^1' without specifying which uniformity 'standard' means is an overstated/imprecise claim about a delicate uniformity issue.
- **Proposed fix:** Replace with: 'If uniformity is weakened (e.g. to DLOGTIME uniformity), the resulting class can only become larger: every DLOGTIME-uniform circuit family is also log-space uniform, so DLOGTIME-uniform $\mathrm{NC}^{1}\subseteq$ log-space-uniform $\mathrm{NC}^{1}$. Whether these classes coincide is not addressed here.'
- **Reported:** 2026-10-28 (8ccef3d)

### ISSUE-0002 [Open] Determinant in NC attribution
- **Category:** Supplement/remark error
- **Location:** supplement (似た定理)
- **Detail:** The supplement states that computing the determinant is in NC, attributing it to 'Chistov, Berkowitz et al.' The determinant being in NC is correct (Csanky showed it is in NC^2; Berkowitz gave a depth O(log^2 n) construction; Chistov also gave NC algorithms). However, the phrasing '整数の割り算や行列式の計算は NC に属する' is slightly imprecise: integer division (of n-bit integers) is in NC^1 (via Beame-Cook-Hoover), and determinant over integers is in NC but the standard results are for determinant over a ring/field with the caveat about bit complexity. The attribution is acceptable but the claim '整数の割り算…NC に属する' should specify NC^1 and the determinant result should note it is over a field/ring.
- **Proposed fix:** Rewrite: '整数の割り算（$n$ ビットの整数の除算）は $\mathrm{NC}^{1}$ に属し、体上の行列式の計算は NC に属する（Csanky による $\mathrm{NC}^{2}$、Berkowitz・Chistov による深さ $O(\log^{2}n)$ の構成）。'
- **Reported:** 2026-10-28 (8ccef3d)
