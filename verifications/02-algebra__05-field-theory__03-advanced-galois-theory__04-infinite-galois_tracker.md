# Verification tracker: `02-algebra/05-field-theory/03-advanced-galois-theory/04-infinite-galois.html`

<!-- source: 02-algebra/05-field-theory/03-advanced-galois-theory/04-infinite-galois.html -->
<!-- Managed by scripts/verify.py (GitHub Actions). To dispute an [Open] issue, add a line starting with
     **Opus Rebuttal:** at the end of that issue and push; the next run judges it. Do not edit other lines. -->

- Last verified: 2026-10-28 (commit 048145a, deepseek-chat)
- Open: 2 / Resolved: 0 / Ignored: 4

## Summary of the last run

The page is largely correct: the exhaustion lemma, the profinite-group theorem, and the infinite fundamental theorem are proved with appropriate citations, and the previously reported issues are adequately addressed by the rebuttals. The only genuine concerns are in the supplement: the remark connecting finite fields to the circle as the 'starting point' of the Weil conjectures is an overstatement, and the inverse Galois problem sentence should specify that Shafarevich's result concerns finite solvable groups over Q. Both are minor and of medium confidence.

## Issues

### ISSUE-0001 [Ignored: Valid Rebuttal] Non-countability argument for G = Gal(F̄_p/F_p) is garbled
- **Category:** Logical gap
- **Location:** example fld:galois-finite-field-closure, item 2
- **Detail:** The parenthetical argument that G is uncountable is hard to follow and appears to contain an error: it says 'the component at general n is determined by the value mod n for k with n | k!', and 'at the first j where c_j differ, the (j+1)! component differs by j! not ≡ 0'. The construction via sum c_j j! mod k! does produce compatible sequences, but the claim that distinct {0,1}-sequences give distinct elements needs the difference to be nonzero mod some n; the argument as written ('differs by j! which is not ≡ 0') is imprecise because j! ≡ 0 mod n for n ≤ j. The conclusion (G uncountable) is true, but the justification as stated is not rigorous.
- **Proposed fix:** Replace with: For each infinite sequence (c_j) in {0,1}, define a_n = sum_{j<n} c_j j! mod n (using that j! ≡ 0 mod n for j ≥ n, so the sum is finite mod n). These a_n are compatible: for m | n, a_n ≡ a_m mod m. Distinct sequences give distinct elements of the inverse limit because if c_j ≠ c'_j at the least such j, then a_{(j+1)!} - a'_{(j+1)!} ≡ (c_j - c'_j) j! mod (j+1)!, which is nonzero since |(c_j-c'_j) j!| = j! < (j+1)!. Hence there are at least 2^{aleph_0} elements, so G is uncountable.
- **Reported:** 2026-10-28 (8ccef3d)
- **History:** 2026-10-28 (048145a): Ignored: Valid Rebuttal — The text uses the (j+1)! component, where the difference is (c_j - c'_j) j! which is nonzero mod (j+1)!; the rebuttal is correct.
**Opus Rebuttal:** The text already uses the $(j+1)!$ component: the difference is $(c_{j}-c'_{j})j!\not\equiv0\pmod{(j+1)!}$. Correct as written.

### ISSUE-0002 [Ignored: Valid Rebuttal] Step 6: 'M/K normal iff σM=M for all σ' uses extension of embeddings but the cited discussion is for finite case
- **Category:** Logical gap
- **Location:** fld:infinite-fundamental-theorem, Step 6
- **Detail:** Step 6 asserts M/K is normal iff σM = M for all σ ∈ G, citing 'the discussion of fld:finite-galois-exhaustion.3'. But fld:finite-galois-exhaustion.3 only says restriction G → Gal(N/K) is surjective for finite Galois N. For an infinite intermediate M, one needs: every K-embedding M → L̄ extends to an element of G = Aut(L/K). This extension holds because L/K is normal (any K-embedding of M into an algebraic closure extends to L, and normality of L/K forces the image to be L), but this is not explicitly argued; the citation to item 3 (which is about finite N) does not directly supply it. The step is essentially correct but the justification is a gap.
- **Proposed fix:** Add: Any K-embedding ι: M → L̄ extends to a K-embedding L → L̄ (by fld:embedding-algebraic-closure applied to L/M); since L/K is normal, the image of L is L, so ι is the restriction of some σ ∈ G. Hence M/K is normal iff σM = M for all σ ∈ G.
- **Reported:** 2026-10-28 (8ccef3d)
- **History:** 2026-10-28 (048145a): Ignored: Valid Rebuttal — The cited discussion of fld:finite-galois-exhaustion.3 indeed uses extension of K-embeddings and normality of L/K; the argument is standard and correct.
**Opus Rebuttal:** Extension of $K$-embeddings of $M$ to $L$ and normality of $L/K$ are exactly what the cited discussion uses; standard.

### ISSUE-0003 [Ignored: Valid Rebuttal] Step 5: 'M finite degree implies Gal(L/M) open' needs M/K finite and M contained in a finite Galois N
- **Category:** Missing hypothesis
- **Location:** fld:infinite-fundamental-theorem, Step 5
- **Detail:** Step 5 says: if M is finite degree over K, take N containing M, then Gal(L/M) ⊃ Gal(L/N), open. But 'M finite degree' here should mean [M:K] < ∞ (finite over K), and one needs N ∈ 𝒩 (finite Galois over K) containing M. Such N exists by fld:finite-galois-exhaustion.1 (M is contained in a finite Galois subextension since M is finite over K and L/K is Galois). The text says 'M が有限次なら' which is ambiguous (finite over K vs finite over L). If read as [M:K]<∞ it is fine but the existence of N containing M should be justified by the exhaustion lemma. Minor gap.
- **Proposed fix:** Clarify: 'if [M:K] < ∞, then by fld:finite-galois-exhaustion.1 there is N ∈ 𝒩 with M ⊂ N, so Gal(L/M) ⊃ Gal(L/N) is open.'
- **Reported:** 2026-10-28 (8ccef3d)
- **History:** 2026-10-28 (048145a): Ignored: Valid Rebuttal — '有限次' means [M:K]<∞ in context, and the exhaustion lemma supplies N; acceptable.
**Opus Rebuttal:** '有限次' means $[M:K]<\infty$ in context, and the exhaustion lemma provides $N$; fine as written.

### ISSUE-0004 [Ignored: Valid Rebuttal] Step 2 cites fld:finite-galois-exhaustion.2 and .1 for normal closure being finite Galois
- **Category:** Improper link
- **Location:** fld:infinite-fundamental-theorem, Step 2
- **Detail:** Step 2 says the normal closure N' ⊂ L of M(x) over M is finite Galois over M, citing fld:finite-galois-exhaustion.2 and fld:finite-galois-exhaustion.1. Item 2 says L/M is Galois (for any intermediate M), and item 1 says L is union of finite Galois subextensions over K. To conclude N' is finite Galois over M one uses that L/M is Galois (item 2) and that a finite extension inside a Galois extension has finite Galois normal closure (item 1 applied to L/M). The citation is essentially appropriate but item 1 is stated for base K, not M; applying it to L/M requires item 2 first. This is a minor imprecision, not a wrong link.
- **Proposed fix:** State explicitly: 'By item 2, L/M is Galois; applying item 1 with base field M, the normal closure N' of M(x) over M inside L is finite Galois over M.'
- **Reported:** 2026-10-28 (8ccef3d)
- **History:** 2026-10-28 (048145a): Ignored: Valid Rebuttal — Item 2 (L/M Galois) followed by item 1 with base M is the intended and correct reading.
**Opus Rebuttal:** Item 2 then item 1 with base $M$ is exactly the intended reading.

### ISSUE-0005 [Open] Weil conjecture remark about finite fields and the circle is misleading
- **Category:** Supplement/remark error
- **Location:** supplement (高い視点)
- **Detail:** The claim that 'finite fields are in this sense similar to the circle' as 'the starting point of the idea of the Weil conjectures' is an overstatement. The Weil conjectures concern zeta functions of varieties over finite fields and their analogy with the Riemann zeta function / topology of complex varieties; the identification of Gal(F̄_p/F_p) with the profinite completion of the fundamental group of the circle is a motivational analogy (étale homotopy), not the 'starting point' of the Weil conjectures. As stated it is historically and mathematically imprecise.
- **Proposed fix:** Replace with: '$\hat\Z$ is the profinite completion of the fundamental group $\Z$ of the circle; this analogy between finite fields and the circle (via étale homotopy) is one motivation for the Weil conjectures, though the conjectures themselves concern zeta functions of varieties over finite fields.'
- **Reported:** 2026-10-28 (048145a)

### ISSUE-0006 [Open] Inverse Galois problem: 'solvable groups (Shafarevich)' stated without the caveat
- **Category:** Supplement/remark error
- **Location:** supplement (逆ガロア問題)
- **Detail:** Shafarevich's theorem states that every finite solvable group is the Galois group of some extension of Q. This is correct, but the sentence lumps it with '$S_n, A_n$ appear' as if all these were established on the same footing; more importantly, the phrasing 'どの有限群が…現れるか…は未解決' followed by '可解群…や S_n, A_n は現れる' is acceptable. The genuine imprecision is minor; however the claim that the inverse Galois problem is '未解決' is correct. No serious error, but the Shafarevich attribution should specify 'finite solvable groups over Q'.
- **Proposed fix:** State: 'Every finite solvable group occurs as a Galois group over $\Q$ (Shafarevich); $S_{n}$ and $A_{n}$ also occur. Whether every finite group occurs is open.'
- **Reported:** 2026-10-28 (048145a)
