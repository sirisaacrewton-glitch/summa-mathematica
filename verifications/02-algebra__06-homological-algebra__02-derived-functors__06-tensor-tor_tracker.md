# Verification tracker: `02-algebra/06-homological-algebra/02-derived-functors/06-tensor-tor.html`

<!-- source: 02-algebra/06-homological-algebra/02-derived-functors/06-tensor-tor.html -->
<!-- Managed by scripts/verify.py (GitHub Actions). To dispute an [Open] issue, add a line starting with
     **Opus Rebuttal:** at the end of that issue and push; the next run judges it. Do not edit other lines. -->

- Last verified: 2026-10-28 (commit 10fede1, deepseek-chat)
- Open: 2 / Resolved: 0 / Ignored: 0

## Summary of the last run

The page is largely correct: the tensor product, Hom-tensor adjunction, right exactness, Tor, Tor over Z, flatness, and projective⇒flat are all proved correctly with appropriate citations. The only genuine issue is in the supplement's 'higher viewpoint' paragraph, where the connecting map Tor_1(M,N'')→M⊗N' is loosely described as mapping onto the kernel of M⊗N'→M⊗N; this holds only when the preceding Tor_1(M,N)→Tor_1(M,N'') vanishes (e.g. N flat), so the statement should be corrected to the exact-sequence identity ker = im(Tor_1(M,N'')→M⊗N'). All other supplement claims (balancedness, commutativity over commutative rings, Q flat non-projective, Ext vs Tor, adjunction/colimit preservation, universal coefficient theorem) are accurate.

## Issues

### ISSUE-0001 [Open] Tor_1(M,N'') maps to the kernel of M⊗N'→M⊗N, not 'the lost kernel'
- **Category:** Supplement/remark error
- **Location:** supplement / 高い視点から
- **Detail:** The supplement says the long exact sequence's left end `Tor_1(M,N'')→M⊗N'` 'maps exactly onto that kernel' (the kernel of M⊗N'→M⊗N). This is imprecise/false: the connecting map Tor_1(M,N'')→M⊗N' has image equal to ker(M⊗N'→M⊗N) only when the preceding map Tor_1(M,N)→Tor_1(M,N'') is zero (e.g. when N is flat or in special cases). In general the image of Tor_1(M,N'')→M⊗N' is only a subquotient; the exact sequence gives ker(M⊗N'→M⊗N) = im(Tor_1(M,N'')→M⊗N'), but that map's domain is Tor_1(M,N'') modulo the image of Tor_1(M,N). So the identification of 'the lost kernel' with Tor_1(M,N'') itself is not correct in general.
- **Proposed fix:** Replace with: 'その「失われた核」を測るのが $\mathrm{Tor}_{1}$ で、長完全列により $\ker(M\otimes N'\to M\otimes N)=\mathrm{im}(\mathrm{Tor}_{1}(M,N'')\to M\otimes N')$ が成り立つ（$N$ が平坦なら $\mathrm{Tor}_{1}(M,N)=0$ なので $\mathrm{Tor}_{1}(M,N'')\cong\ker(M\otimes N'\to M\otimes N)$）。'
- **Reported:** 2026-10-28 (10fede1)

### ISSUE-0002 [Open] Q is a flat but not projective Z-module — attribution to 'known' is fine, but the claim 'projective ⇒ flat' plus Q example is consistent; check the 'not verified' hedge
- **Category:** Supplement/remark error
- **Location:** supplement / 前提を変えると
- **Detail:** The statement 'Q is a flat but not projective Z-module' is true (Q is torsion-free hence flat over Z, and not projective since it is not free and Z is a PID). The hedge 'ここでは確かめていない' is acceptable. No error here; flagged only to confirm it was checked. No fix needed.
- **Proposed fix:** No change needed; the claim is correct.
- **Reported:** 2026-10-28 (10fede1)
