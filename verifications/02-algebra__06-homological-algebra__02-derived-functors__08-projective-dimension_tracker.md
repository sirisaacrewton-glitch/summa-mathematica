# Verification tracker: `02-algebra/06-homological-algebra/02-derived-functors/08-projective-dimension.html`

<!-- source: 02-algebra/06-homological-algebra/02-derived-functors/08-projective-dimension.html -->
<!-- Managed by scripts/verify.py (GitHub Actions). To dispute an [Open] issue, add a line starting with
     **Opus Rebuttal:** at the end of that issue and push; the next run judges it. Do not edit other lines. -->

- Last verified: 2026-10-28 (commit 10fede1, deepseek-chat)
- Open: 8 / Resolved: 0 / Ignored: 0

## Summary of the last run

(none)

## Issues

### ISSUE-0001 [Open] Global dimension equals sup of pd of cyclic modules R/I — needs finitely generated / noetherian care
- **Category:** Supplement/remark error
- **Location:** supplement / 前提を変えると
- **Detail:** The supplement states that the global dimension of R equals the supremum of the projective dimensions of the cyclic modules R/I. This is a standard result (Auslander) but it requires the modules to be finitely generated (or at least that one takes sup over all cyclic modules, which is fine for the 'cyclic' part), yet the claim as written is essentially correct for the cyclic-module characterization: gl.dim R = sup_I pd(R/I) holds for arbitrary rings? In fact the equality gl.dim R = sup{ pd(R/I) : I left ideal } holds in general (Auslander's theorem), so this is not false. However the sentence also asserts equality with the supremum of injective dimensions of all modules, which is correct (gl.dim = sup inj.dim over all modules). These are standard and correct. No error.
- **Proposed fix:** No change needed; the statement is a standard theorem (Auslander).
- **Reported:** 2026-10-28 (10fede1)

### ISSUE-0002 [Open] Hilbert syzygy theorem attribution and content
- **Category:** Supplement/remark error
- **Location:** supplement / 前提を変えると
- **Detail:** The supplement says the global dimension of k[x_1,...,x_n] is n, attributed to 'Hilbert's syzygy theorem'. This is correct: for a field k, gl.dim k[x_1,...,x_n] = n (Hilbert's syzygy theorem gives pd ≤ n, and gl.dim = n since (x_1,...,x_n) has pd = n). The attribution is acceptable. No error.
- **Proposed fix:** No change needed.
- **Reported:** 2026-10-28 (10fede1)

### ISSUE-0003 [Open] Claim that pd_Z(Z/n)=1 and 'subgroups of free abelian groups are projective' phrasing
- **Category:** Supplement/remark error
- **Location:** ha:pd-z / supplement 似た定理
- **Detail:** The supplement says: since projective Z-modules are free (subgroups of free abelian groups are free), \ref{ha:pd-z} derives 'the projectivity part' of the classical fact that subgroups of free abelian groups are free. But \ref{ha:pd-z} actually proves that subgroups of free abelian groups are projective (not free). The supplement's phrasing '射影性についての部分' is accurate: it derives projectivity, and combined with 'projective = free over Z' recovers freeness. This is correct. No error.
- **Proposed fix:** No change needed.
- **Reported:** 2026-10-28 (10fede1)

### ISSUE-0004 [Open] Schanuel's lemma as origin of stable equivalence
- **Category:** Supplement/remark error
- **Location:** supplement / 似た定理
- **Detail:** The supplement states that Schanuel's lemma is the starting point of the notion of stable equivalence (isomorphism up to adding projective modules). This is a reasonable historical/structural remark and is essentially correct: Schanuel's lemma shows K ⊕ P' ≅ K' ⊕ P, which is precisely the stable equivalence of syzygies. No error.
- **Proposed fix:** No change needed.
- **Reported:** 2026-10-28 (10fede1)

### ISSUE-0005 [Open] Hypcheck claim: if one resolution has non-projective K_n then pd(M)>n
- **Category:** Logical gap
- **Location:** hypcheck / 4 の「任意の」
- **Detail:** The hypcheck says: 'if for one resolution K_n is not projective, then pd(M) > n (\ref{ha:prob-pd-z4})'. This is correct because condition 4 requires K_n projective for ANY resolution; if one resolution has non-projective K_n, condition 4 fails, hence pd(M) > n. This follows from the equivalence 1⇔4. Correct.
- **Proposed fix:** No change needed.
- **Reported:** 2026-10-28 (10fede1)

### ISSUE-0006 [Open] Hypcheck: Schanuel shows projectivity of K_1 is resolution-independent
- **Category:** Logical gap
- **Location:** hypcheck / 4 の「任意の」
- **Detail:** The hypcheck claims that Schanuel's lemma shows whether K_1 is projective is independent of the resolution, via K ⊕ P' ≅ K' ⊕ P and 'direct summands of projective are projective'. The argument: if K is projective then K ⊕ P' is projective, so K' ⊕ P is projective; since P is projective, K' is a direct summand of the projective module K' ⊕ P, hence K' is projective. This is valid. Correct.
- **Proposed fix:** No change needed.
- **Reported:** 2026-10-28 (10fede1)

### ISSUE-0007 [Open] Ext^2_Z(M,N)=0 cited from ha:prob-ei-dimension
- **Category:** Unsupported fact
- **Location:** ha:pd-z / proof
- **Detail:** The proof of \ref{ha:pd-z} cites \ref{ha:prob-ei-dimension} (problem 7.7, 'Ext and injective dimension') for Ext^2_Z(M,N)=0. This is a problem on another page; citing a problem as a fact is acceptable if the problem indeed establishes that Z has injective dimension ≤ 1 (equivalently Ext^2_Z(-,-)=0). Since Z is a PID (hereditary), Ext^2_Z = 0 holds. The citation is to a problem, which is a legitimate known result. No error, assuming the problem states this.
- **Proposed fix:** No change needed.
- **Reported:** 2026-10-28 (10fede1)

### ISSUE-0008 [Open] Z/4 example: 'relations generate relations forever' metaphor
- **Category:** Supplement/remark error
- **Location:** supplement / 高い視点から
- **Detail:** The metaphor says Z/2 over Z/4 has relations generating relations forever and cannot be written in finitely many steps. This matches pd = ∞ shown in the problem. Correct.
- **Proposed fix:** No change needed.
- **Reported:** 2026-10-28 (10fede1)
