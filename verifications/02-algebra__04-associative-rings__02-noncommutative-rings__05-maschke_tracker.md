# Verification tracker: `02-algebra/04-associative-rings/02-noncommutative-rings/05-maschke.html`

<!-- source: 02-algebra/04-associative-rings/02-noncommutative-rings/05-maschke.html -->
<!-- Managed by scripts/verify.py (GitHub Actions). To dispute an [Open] issue, add a line starting with
     **Opus Rebuttal:** at the end of that issue and push; the next run judges it. Do not edit other lines. -->

- Last verified: 2026-10-28 (commit 10fede1, deepseek-chat)
- Open: 3 / Resolved: 0 / Ignored: 0

## Summary of the last run

The main text (Maschke's theorem, the structure theorem for complex group rings, the center lemma, and the examples) is logically sound: the averaging argument, the semisimplicity equivalences, and the dimension/count arguments are correct, and the cited labels match their uses. The examples (commutative groups, S_3, Q_8) check out. The only genuine problems are in the final supplement: the claim that group cohomology $H^{n}(G,V)$ vanishes for $n\ge 1$ whenever $|G|$ is invertible is false for arbitrary coefficient modules and must be restricted to trivial coefficients (or to the semisimplicity statement). The Haar-measure/Weyl remark is acceptable but should be tied to the trivial-coefficient formulation. No issues in the proofs or in the stated theorem.

## Issues

### ISSUE-0001 [Open] Vanishing of group cohomology requires trivial coefficients
- **Category:** Supplement/remark error
- **Location:** supplement / 高い視点
- **Detail:** The supplement claims that when |G| is invertible, group cohomology H^n(G,V) vanishes for n≥1. This is false for a general k[G]-module V. The correct statement is that H^n(G,V)=0 for n≥1 when V is a trivial module (or more generally when the coefficient module is k with trivial action); for arbitrary coefficients the vanishing is not true. For example, with G=Z/2 and k of characteristic ≠2, H^1(G,k[G]) is nonzero (the augmentation ideal is not a direct summand in the trivial way; indeed H^1(G,k[G])≠0). The identification with Maschke's theorem (semisimplicity ⟺ all higher cohomology of trivial module vanishes) is standard, but the statement as written overreaches.
- **Proposed fix:** In homology-algebra language, if |G| is invertible in k then the group cohomology with trivial coefficients vanishes: $H^{n}(G,k)=0$ for all $n\ge 1$ (equivalently $k[G]$ is semisimple). For general coefficients $V$ one only gets vanishing when $V$ is a trivial module; the statement must not be made for arbitrary $k[G]$-modules.
- **Reported:** 2026-10-28 (10fede1)

### ISSUE-0002 [Open] Haar measure averaging requires compact group; Weyl trick context
- **Category:** Supplement/remark error
- **Location:** supplement / 高い視点
- **Detail:** The sentence says the averaging $\frac{1}{|G|}\sum_{g} g(\cdot)g^{-1}$ is replaced by integration with respect to Haar measure for compact groups (Weyl's unitary trick). This is essentially correct for compact groups, but the phrasing 'コンパクト群ではハール測度による積分に置き換わる' is acceptable. However, the claim that this is 'the same phenomenon' as vanishing of group cohomology is imprecise: the averaging produces an invariant projection (a splitting of the augmentation), which is the n=1 case; the vanishing for all n≥1 is a consequence but the identification should be stated with trivial coefficients. This overlaps with the previous issue; the main correction is the coefficient hypothesis.
- **Proposed fix:** State: the averaging operator is the n=1 instance of the fact that $H^{n}(G,k)=0$ for $n\ge 1$ when $|G|$ is invertible in $k$ (trivial coefficients).
- **Reported:** 2026-10-28 (10fede1)

### ISSUE-0003 [Open] Frobenius divisibility attribution and hypothesis
- **Category:** Supplement/remark error
- **Location:** supplement / 指標理論へ
- **Detail:** The supplement states '「$n_{i}$ は $|G|$ の約数」（フロベニウス）'. This is correct (Frobenius: the degree of an irreducible complex representation divides |G|), and the reference to integrality is appropriate. No error here; but the statement should specify complex (or char 0, splitting field) representations. As written in context (k algebraically closed, char not dividing |G|) it is fine. Not reporting as an error.
- **Proposed fix:** No change needed; optionally specify 'for $k=\mathbb{C}$'.
- **Reported:** 2026-10-28 (10fede1)
