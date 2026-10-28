# Verification tracker: `02-algebra/06-homological-algebra/02-derived-functors/03-tor-ext.html`

<!-- source: 02-algebra/06-homological-algebra/02-derived-functors/03-tor-ext.html -->
<!-- Managed by scripts/verify.py (GitHub Actions). To dispute an [Open] issue, add a line starting with
     **Opus Rebuttal:** at the end of that issue and push; the next run judges it. Do not edit other lines. -->

- Last verified: 2026-10-28 (commit 8ccef3d, deepseek-chat)
- Open: 1 / Resolved: 0 / Ignored: 0

## Summary of the last run

The page is largely correct. The main genuine problem is an improper citation in the proof of ha:ext-projective: it invokes the long exact sequence in the second variable (ha:ext-long-exact.1) where the first-variable sequence (ha:ext-long-exact.2) is required. The supplement's Tor computation is actually consistent with the standard resolution, so no error there. All other proofs, statements and side remarks check out.

## Issues

### ISSUE-0001 [Open] Wrong direction cited for the long exact sequence in the first variable
- **Category:** Improper link
- **Location:** ha:ext-projective / proof (⇐)
- **Detail:** The proof applies \ref{ha:ext-long-exact.1} to the short exact sequence 0→K→P→a→0. But \ref{ha:ext-long-exact.1} is the long exact sequence in the *second* variable (short exact 0→b'→b→b''→0 with fixed a). The sequence needed here, with the short exact sequence in the first variable and fixed b, is \ref{ha:ext-long-exact.2}. The displayed exact sequence Hom(a,P)→Hom(a,a)→Ext¹(a,K) is indeed the one from part 2, not part 1.
- **Proposed fix:** Replace \ref{ha:ext-long-exact.1} with \ref{ha:ext-long-exact.2}: apply the long exact sequence in the first variable (part 2) to 0→K→P→a→0 with the fixed module b = K.
- **Reported:** 2026-10-28 (8ccef3d)
