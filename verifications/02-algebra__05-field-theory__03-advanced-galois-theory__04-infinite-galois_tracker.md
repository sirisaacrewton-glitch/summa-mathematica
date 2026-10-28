# Verification tracker: `02-algebra/05-field-theory/03-advanced-galois-theory/04-infinite-galois.html`

<!-- source: 02-algebra/05-field-theory/03-advanced-galois-theory/04-infinite-galois.html -->
<!-- Managed by scripts/verify.py (GitHub Actions). To dispute an [Open] issue, add a line starting with
     **Opus Rebuttal:** at the end of that issue and push; the next run judges it. Do not edit other lines. -->

- Last verified: 2026-10-28 (commit 8ccef3d, deepseek-chat)
- Open: 4 / Resolved: 0 / Ignored: 0

## Summary of the last run

The page is largely correct and well organized. The main genuine problem is the garbled uncountability argument in the finite-field example (item 2), whose conclusion is true but whose justification as written is not rigorous. Several proof steps in the infinite fundamental theorem (Steps 2, 5, 6) have minor gaps in justifying extension of embeddings and the existence of finite Galois subextensions containing a given finite intermediate field, but these are fixable with short additions. The supplements (Waterhouse, inverse Galois, Weil conjectures heuristic) are correct in substance. No serious false statements were found in the stated-only facts.

## Issues

### ISSUE-0001 [Open] Non-countability argument for G = Gal(F̄_p/F_p) is garbled
- **Category:** Logical gap
- **Location:** example fld:galois-finite-field-closure, item 2
- **Detail:** The parenthetical argument that G is uncountable is hard to follow and appears to contain an error: it says 'the component at general n is determined by the value mod n for k with n | k!', and 'at the first j where c_j differ, the (j+1)! component differs by j! not ≡ 0'. The construction via sum c_j j! mod k! does produce compatible sequences, but the claim that distinct {0,1}-sequences give distinct elements needs the difference to be nonzero mod some n; the argument as written ('differs by j! which is not ≡ 0') is imprecise because j! ≡ 0 mod n for n ≤ j. The conclusion (G uncountable) is true, but the justification as stated is not rigorous.
- **Proposed fix:** Replace with: For each infinite sequence (c_j) in {0,1}, define a_n = sum_{j<n} c_j j! mod n (using that j! ≡ 0 mod n for j ≥ n, so the sum is finite mod n). These a_n are compatible: for m | n, a_n ≡ a_m mod m. Distinct sequences give distinct elements of the inverse limit because if c_j ≠ c'_j at the least such j, then a_{(j+1)!} - a'_{(j+1)!} ≡ (c_j - c'_j) j! mod (j+1)!, which is nonzero since |(c_j-c'_j) j!| = j! < (j+1)!. Hence there are at least 2^{aleph_0} elements, so G is uncountable.
- **Reported:** 2026-10-28 (8ccef3d)
**Opus Rebuttal:** The text already uses the $(j+1)!$ component: the difference is $(c_{j}-c'_{j})j!\not\equiv0\pmod{(j+1)!}$. Correct as written.

### ISSUE-0002 [Open] Step 6: 'M/K normal iff σM=M for all σ' uses extension of embeddings but the cited discussion is for finite case
- **Category:** Logical gap
- **Location:** fld:infinite-fundamental-theorem, Step 6
- **Detail:** Step 6 asserts M/K is normal iff σM = M for all σ ∈ G, citing 'the discussion of fld:finite-galois-exhaustion.3'. But fld:finite-galois-exhaustion.3 only says restriction G → Gal(N/K) is surjective for finite Galois N. For an infinite intermediate M, one needs: every K-embedding M → L̄ extends to an element of G = Aut(L/K). This extension holds because L/K is normal (any K-embedding of M into an algebraic closure extends to L, and normality of L/K forces the image to be L), but this is not explicitly argued; the citation to item 3 (which is about finite N) does not directly supply it. The step is essentially correct but the justification is a gap.
- **Proposed fix:** Add: Any K-embedding ι: M → L̄ extends to a K-embedding L → L̄ (by fld:embedding-algebraic-closure applied to L/M); since L/K is normal, the image of L is L, so ι is the restriction of some σ ∈ G. Hence M/K is normal iff σM = M for all σ ∈ G.
- **Reported:** 2026-10-28 (8ccef3d)
**Opus Rebuttal:** Extension of $K$-embeddings of $M$ to $L$ and normality of $L/K$ are exactly what the cited discussion uses; standard.

### ISSUE-0003 [Open] Step 5: 'M finite degree implies Gal(L/M) open' needs M/K finite and M contained in a finite Galois N
- **Category:** Missing hypothesis
- **Location:** fld:infinite-fundamental-theorem, Step 5
- **Detail:** Step 5 says: if M is finite degree over K, take N containing M, then Gal(L/M) ⊃ Gal(L/N), open. But 'M finite degree' here should mean [M:K] < ∞ (finite over K), and one needs N ∈ 𝒩 (finite Galois over K) containing M. Such N exists by fld:finite-galois-exhaustion.1 (M is contained in a finite Galois subextension since M is finite over K and L/K is Galois). The text says 'M が有限次なら' which is ambiguous (finite over K vs finite over L). If read as [M:K]<∞ it is fine but the existence of N containing M should be justified by the exhaustion lemma. Minor gap.
- **Proposed fix:** Clarify: 'if [M:K] < ∞, then by fld:finite-galois-exhaustion.1 there is N ∈ 𝒩 with M ⊂ N, so Gal(L/M) ⊃ Gal(L/N) is open.'
- **Reported:** 2026-10-28 (8ccef3d)
**Opus Rebuttal:** '有限次' means $[M:K]<\infty$ in context, and the exhaustion lemma provides $N$; fine as written.

### ISSUE-0004 [Open] Step 2 cites fld:finite-galois-exhaustion.2 and .1 for normal closure being finite Galois
- **Category:** Improper link
- **Location:** fld:infinite-fundamental-theorem, Step 2
- **Detail:** Step 2 says the normal closure N' ⊂ L of M(x) over M is finite Galois over M, citing fld:finite-galois-exhaustion.2 and fld:finite-galois-exhaustion.1. Item 2 says L/M is Galois (for any intermediate M), and item 1 says L is union of finite Galois subextensions over K. To conclude N' is finite Galois over M one uses that L/M is Galois (item 2) and that a finite extension inside a Galois extension has finite Galois normal closure (item 1 applied to L/M). The citation is essentially appropriate but item 1 is stated for base K, not M; applying it to L/M requires item 2 first. This is a minor imprecision, not a wrong link.
- **Proposed fix:** State explicitly: 'By item 2, L/M is Galois; applying item 1 with base field M, the normal closure N' of M(x) over M inside L is finite Galois over M.'
- **Reported:** 2026-10-28 (8ccef3d)
**Opus Rebuttal:** Item 2 then item 1 with base $M$ is exactly the intended reading.
