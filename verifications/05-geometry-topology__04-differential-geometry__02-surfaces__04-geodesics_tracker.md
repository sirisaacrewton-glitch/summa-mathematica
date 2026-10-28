# Verification tracker: `05-geometry-topology/04-differential-geometry/02-surfaces/04-geodesics.html`

<!-- source: 05-geometry-topology/04-differential-geometry/02-surfaces/04-geodesics.html -->
<!-- Managed by scripts/verify.py (GitHub Actions). To dispute an [Open] issue, add a line starting with
     **Opus Rebuttal:** at the end of that issue and push; the next run judges it. Do not edit other lines. -->

- Last verified: 2026-10-28 (commit 8ccef3d, deepseek-chat)
- Open: 1 / Resolved: 0 / Ignored: 0

## Summary of the last run

The page is largely correct. The main concern is the supplement's statement relating the holonomy rotation angle to the area of the spherical cap, where the sign and the 'modulo $2\pi$' phrasing are imprecise and potentially misleading; a corrected formulation invoking local Gauss–Bonnet is proposed. The cylinder geodesic description is acceptable. Proofs and cited results appear consistent with the label table.

## Issues

### ISSUE-0001 [Open] Rotation angle vs. area of spherical cap sign/magnitude
- **Category:** Supplement/remark error
- **Location:** supplement / 平行移動と曲率
- **Detail:** The supplement claims the holonomy rotation angle $2\pi\sin a$ equals $-1$ times the area $2\pi(1-\sin a)$ of the northern spherical cap, up to integer multiples of $2\pi$. But $2\pi\sin a = -(2\pi(1-\sin a)) + 2\pi$, i.e. the two differ by $2\pi$, not by an integer multiple of $2\pi$ in the claimed direction. Concretely, $-\text{Area} = -2\pi(1-\sin a) = 2\pi\sin a - 2\pi$, so the rotation angle equals $-\text{Area} + 2\pi$, which is congruent to $-\text{Area}$ modulo $2\pi$ only if we interpret the angle modulo $2\pi$; but the text says 'except for integer multiples of $2\pi$' which is consistent only if the sign is right. Actually $2\pi\sin a \equiv -2\pi(1-\sin a) \pmod{2\pi}$ holds since $2\pi\sin a + 2\pi(1-\sin a) = 2\pi$. So the congruence is correct modulo $2\pi$. However the Gauss–Bonnet statement should be that the holonomy equals $\int K\,dA$ modulo $2\pi$, i.e. $+\text{Area}$, not $-\text{Area}$. The sign is wrong: the standard result is that parallel transport around a loop rotates by the integral of $K$ over the enclosed region (mod $2\pi$), which here is $+2\pi(1-\sin a)$, and $2\pi(1-\sin a) \equiv -2\pi\sin a \pmod{2\pi}$, i.e. the rotation is $-2\pi\sin a$ mod $2\pi$, consistent with the computed $+2\pi\sin a$ only up to sign convention. The claim as stated ('$-1$ times the area') is at best a sign-convention issue and is stated too strongly/imprecisely.
- **Proposed fix:** Replace with: 'The rotation angle $2\pi\sin a$ of parallel transport around the latitude is congruent modulo $2\pi$ to the integral of the Gaussian curvature over the enclosed spherical cap, i.e. $\int K\,dA = 2\pi(1-\sin a)$ (with the appropriate orientation convention), which is the content of the local Gauss–Bonnet theorem.'
- **Reported:** 2026-10-28 (8ccef3d)
