# Verification tracker: `05-geometry-topology/04-differential-geometry/02-surfaces/04-geodesics.html`

<!-- source: 05-geometry-topology/04-differential-geometry/02-surfaces/04-geodesics.html -->
<!-- Managed by scripts/verify.py (GitHub Actions). To dispute an [Open] issue, add a line starting with
     **Opus Rebuttal:** at the end of that issue and push; the next run judges it. Do not edit other lines. -->

- Last verified: 2026-10-28 (commit 10fede1, deepseek-chat)
- Open: 1 / Resolved: 0 / Ignored: 0

## Summary of the last run

(none)

## Issues

### ISSUE-0001 [Open] Holonomy rotation angle vs. area of spherical cap: sign and value
- **Category:** Supplement/remark error
- **Location:** supplement (平行移動と曲率), surf:page-geodesics
- **Detail:** The supplement claims that the rotation angle $2\pi\sin a$ of parallel transport around the latitude equals, up to an integer multiple of $2\pi$, $-1$ times the area $2\pi(1-\sin a)$ of the northern spherical cap. This is false: $2\pi\sin a = 2\pi - 2\pi(1-\sin a)$, so the rotation angle equals $2\pi$ minus the cap area, i.e. it is congruent to $-$(cap area) modulo $2\pi$ only with the correct sign convention, but the stated equality '$2\pi\sin a = -2\pi(1-\sin a)$ mod $2\pi$' is wrong: $-2\pi(1-\sin a) \equiv 2\pi\sin a$ mod $2\pi$ actually holds since $-2\pi(1-\sin a) = -2\pi + 2\pi\sin a \equiv 2\pi\sin a$. So the congruence is correct. However the claim that this is 'the content of Gauss-Bonnet' via the integral of $K$ over the enclosed region: the enclosed region for the latitude at height $\sin a$ is the northern cap of area $2\pi(1-\sin a)$, and $\int K\,dA = 2\pi(1-\sin a)$, whose negative mod $2\pi$ equals $2\pi\sin a$. This is consistent. No error.
- **Proposed fix:** No change needed; the congruence $2\pi\sin a \equiv -2\pi(1-\sin a) \pmod{2\pi}$ is correct.
- **Reported:** 2026-10-28 (10fede1)
