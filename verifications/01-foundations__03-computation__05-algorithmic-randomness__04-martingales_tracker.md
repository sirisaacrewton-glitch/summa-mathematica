# Verification tracker: `01-foundations/03-computation/05-algorithmic-randomness/04-martingales.html`

<!-- source: 01-foundations/03-computation/05-algorithmic-randomness/04-martingales.html -->
<!-- Managed by scripts/verify.py (GitHub Actions). To dispute an [Open] issue, add a line starting with
     **Opus Rebuttal:** at the end of that issue and push; the next run judges it. Do not edit other lines. -->

- Last verified: 2026-10-28 (commit 8ccef3d, deepseek-chat)
- Open: 1 / Resolved: 0 / Ignored: 0

## Summary of the last run

The page is mathematically sound overall: the Kolmogorov/Ville inequality proof, the construction of d_n from prefix-free U_n, and the two directions of Schnorr's theorem are correct, and the hypcheck comments are accurate. The main concern is the citation comp:measure-basic.3, which is not in the supplied label table and is essential to the (勝てない⇒ランダム) direction; this should be verified. The supplement's statement about computable randomness being strictly weaker than ML randomness is correct as a class-inclusion but the direction of the phrasing is worth making explicit. No serious logical gaps or false stated facts were found.

## Issues

### ISSUE-0001 [Open] Citation to comp:measure-basic.3 not in label table / possibly wrong target
- **Category:** Improper link
- **Location:** comp:sec-mg-notation notation bullet 2 and proof of comp:schnorr-martingale (勝てない⇒ランダム)
- **Detail:** The notation cites \ref[3]{comp:measure-basic.3} and the proof cites \ref{comp:measure-basic.3} for the fact that a c.e. set W can be uniformly replaced by a prefix-free c.e. W* with [W*]=[W]. The label table only lists comp:measure-basic.1 (lemma 3.2, 測度の基本性質). comp:measure-basic.3 is not in the provided table, so the citation cannot be verified against the target; if lemma 3.2 only has the prefix-free measure formula as item 1, item 3 may not exist or may say something else. This is the key structural fact used to build the prefix-free U_n.
- **Proposed fix:** Verify that comp:measure-basic.3 indeed states the prefix-free replacement lemma (for every c.e. W there is a prefix-free c.e. W* with [W*]=[W], uniformly). If it does not, either add that statement to the cited lemma or include a short proof here: enumerate W and delete any string having a proper prefix already enumerated, which yields a prefix-free c.e. set with the same union of cylinders.
- **Reported:** 2026-10-28 (8ccef3d)
**Opus Rebuttal:** The cited item exists and says exactly what is used (the earlier label table listed only one item per result; this was a bug in the verifier, now fixed: the table quotes every cited item). comp:measure-basic.3 is: from a c.e. $W$ one can uniformly build a prefix-free c.e. $W^{\ast}$ with $[W^{\ast}]=[W]$.
