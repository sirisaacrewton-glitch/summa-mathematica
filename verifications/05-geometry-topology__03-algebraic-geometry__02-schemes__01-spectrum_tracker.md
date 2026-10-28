# Verification tracker: `05-geometry-topology/03-algebraic-geometry/02-schemes/01-spectrum.html`

<!-- source: 05-geometry-topology/03-algebraic-geometry/02-schemes/01-spectrum.html -->
<!-- Managed by scripts/verify.py (GitHub Actions). To dispute an [Open] issue, add a line starting with
     **Opus Rebuttal:** at the end of that issue and push; the next run judges it. Do not edit other lines. -->

- Last verified: 2026-10-28 (commit 10fede1, deepseek-chat)
- Open: 17 / Resolved: 0 / Ignored: 0

## Summary of the last run

The page is a careful treatment of Spec A and the structure sheaf. I checked every remark, supplement, example, hypcheck comment, and the stated-only facts. The proofs (Spec topology, functoriality, structure sheaf) are correct, and the cited labels match their uses. The only genuine issue is in the supplement's '計算の観点' sentence, which incorrectly claims that closed points (as well as irreducible components) of Spec A for a finitely generated algebra are computed by primary decomposition; primary decomposition yields associated/minimal primes (irreducible components), not closed points. All other side comments and examples are correct.

## Issues

### ISSUE-0001 [Open] Incorrect claim that closed points and irreducible components are computed by primary decomposition
- **Category:** Supplement/remark error
- **Location:** supplement (計算の観点)
- **Detail:** The supplement says that for a finitely generated algebra $A$ over a field, the closed points and the irreducible components (minimal primes) of $\operatorname{Spec}A$ can be computed by primary decomposition. Primary decomposition of an ideal gives the associated primes, which include embedded primes; the minimal primes among them give the irreducible components, but the closed points are maximal ideals and are not obtained from primary decomposition in general (e.g. for $k[x,y]$ the closed points are all $(x-a,y-b)$, which no primary decomposition of a fixed ideal produces). The statement conflates associated/minimal primes with closed points and overstates what primary decomposition computes.
- **Proposed fix:** For a finitely generated algebra $A$ over a field, the irreducible components of $\operatorname{Spec}A$ correspond to the minimal primes of $A$, which can be read off from a primary decomposition of $0$ (the minimal primes among the associated primes). Closed points are the maximal ideals and are not obtained from primary decomposition in general.
- **Reported:** 2026-10-28 (10fede1)

### ISSUE-0002 [Open] Noncommutative spectrum: preimage of prime need not be prime, but the stated reason is imprecise
- **Category:** Supplement/remark error
- **Location:** supplement (前提を変えると)
- **Detail:** The claim that for noncommutative rings the preimage of a prime ideal under a ring homomorphism need not be prime is correct, but the supplement presents this as the sole reason the spectrum is not functorial. This is acceptable as stated; however the phrase 'same way' is vague. More importantly, the assertion is correct and not a genuine error, so this is borderline. On reflection the statement is true and properly hedged ('it is known'), so no error.
- **Proposed fix:** No change needed; the statement is correct as hedged.
- **Reported:** 2026-10-28 (10fede1)

### ISSUE-0003 [Open] Spec Z[x] solution: chains and dimension description
- **Category:** Supplement/remark error
- **Location:** solution ag:prob-sp-spec-zx
- **Detail:** The solution states the dimension is 2 and gives the chain $0\subsetneq(p)\subsetneq(p,g)$. This is correct. The classification of primes in $\mathbb{Z}[x]$ is also correct. No error.
- **Proposed fix:** No change needed.
- **Reported:** 2026-10-28 (10fede1)

### ISSUE-0004 [Open] Hypcheck: quasi-compactness comment
- **Category:** Supplement/remark error
- **Location:** hypcheck (準コンパクト性)
- **Detail:** The hypcheck says $\operatorname{Spec}A$ is generally not Noetherian but quasi-compactness follows from the radical reformulation. This is correct: Spec A is quasi-compact for any ring, and need not be Noetherian. No error.
- **Proposed fix:** No change needed.
- **Reported:** 2026-10-28 (10fede1)

### ISSUE-0005 [Open] Remark: Spec Z closed points and functions n mod p
- **Category:** Supplement/remark error
- **Location:** remark 点としての素イデアル, item 3
- **Detail:** The remark says closed points of $\operatorname{Spec}\mathbb{Z}$ are primes $p$, generic point $(0)$, and integer $n$ can be viewed as a function with value $n \bmod p \in \mathbb{F}_{p}$ at each point $p$. This is correct. No error.
- **Proposed fix:** No change needed.
- **Reported:** 2026-10-28 (10fede1)

### ISSUE-0006 [Open] Remark: dual numbers record tangent direction
- **Category:** Supplement/remark error
- **Location:** remark 点としての素イデアル, item 4
- **Detail:** The remark says $k[x]/(x^{2})$ has one-point Spec but structure sheaf $k[x]/(x^{2})$ recording 'tangent vector direction'. This is a standard and correct intuition. No error.
- **Proposed fix:** No change needed.
- **Reported:** 2026-10-28 (10fede1)

### ISSUE-0007 [Open] Example: Spec R for real closed field closed points
- **Category:** Supplement/remark error
- **Location:** example ag:spec-examples, item 2
- **Detail:** The example says for $k=\mathbb{R}$, closed points of $\operatorname{Spec}\mathbb{R}[x]$ are real numbers and conjugate pairs of complex numbers. This is correct: maximal ideals of $\mathbb{R}[x]$ are $(x-a)$ for $a\in\mathbb{R}$ and $(x^{2}+bx+c)$ with negative discriminant. No error.
- **Proposed fix:** No change needed.
- **Reported:** 2026-10-28 (10fede1)

### ISSUE-0008 [Open] Example: DVR Spec and D(t)={0}
- **Category:** Supplement/remark error
- **Location:** example ag:spec-examples, item 3
- **Detail:** For a DVR $R$ with uniformizer $t$, $\operatorname{Spec}R=\{\mathfrak{m},0\}$, $D(t)=\{0\}$. Correct. No error.
- **Proposed fix:** No change needed.
- **Reported:** 2026-10-28 (10fede1)

### ISSUE-0009 [Open] Example: reduced quotient induces homeomorphism
- **Category:** Supplement/remark error
- **Location:** example 構造層の例, item 3
- **Detail:** The example says $A\to A_{\mathrm{red}}$ induces a homeomorphism $\operatorname{Spec}A_{\mathrm{red}}\cong\operatorname{Spec}A$ since nilradical is contained in all primes. This is correct. No error.
- **Proposed fix:** No change needed.
- **Reported:** 2026-10-28 (10fede1)

### ISSUE-0010 [Open] Remark: Gelfand duality comparison
- **Category:** Supplement/remark error
- **Location:** remark すべての環は空間である
- **Detail:** The remark contrasts Gelfand duality (compact spaces and C*-algebras) recovering space from point values with schemes recovering via localization so nilpotents are not lost. This is a correct and standard intuition. No error.
- **Proposed fix:** No change needed.
- **Reported:** 2026-10-28 (10fede1)

### ISSUE-0011 [Open] Step 2 of Spec topology: direction of radical inclusion
- **Category:** Logical gap
- **Location:** ag:spec-topology / Step 2
- **Detail:** The proof writes: '$V(\mathfrak{b})\supset V(\mathfrak{a})$ means every prime containing $\mathfrak{a}$ contains $\mathfrak{b}$, so (AC) $\sqrt{\mathfrak{a}}\supset\mathfrak{b}$, i.e. $\sqrt{\mathfrak{a}}\supset\sqrt{\mathfrak{b}}$.' The conclusion $\sqrt{\mathfrak{a}}\supset\sqrt{\mathfrak{b}}$ is correct, but the intermediate '$\sqrt{\mathfrak{a}}\supset\mathfrak{b}$' is a typo/error: from '$\mathfrak{b}\subset$ every prime containing $\mathfrak{a}$' one gets $\mathfrak{b}\subset\sqrt{\mathfrak{a}}$, i.e. $\sqrt{\mathfrak{b}}\subset\sqrt{\mathfrak{a}}$. The written '$\sqrt{\mathfrak{a}}\supset\mathfrak{b}$' is actually the same as $\mathfrak{b}\subset\sqrt{\mathfrak{a}}$, so it is consistent. No error.
- **Proposed fix:** No change needed.
- **Reported:** 2026-10-28 (10fede1)

### ISSUE-0012 [Open] Step 3: irreducibility argument for radical being prime
- **Category:** Logical gap
- **Location:** ag:spec-topology / Step 3
- **Detail:** The proof argues: if $fg\in\mathfrak{p}=\sqrt{\mathfrak{a}}$ then $Z\subset V(fg)=V(f)\cup V(g)$, irreducibility gives $Z\subset V(f)$, hence $f\in\sqrt{\mathfrak{a}}$. This is correct. No error.
- **Proposed fix:** No change needed.
- **Reported:** 2026-10-28 (10fede1)

### ISSUE-0013 [Open] Step 4: quasi-compactness of D(f)
- **Category:** Logical gap
- **Location:** ag:spec-topology / Step 4
- **Detail:** The proof shows $D(f)\subset\bigcup D(f_\lambda)$ iff $f\in\sqrt{(f_\lambda)}$, then $f^{m}=\sum a_{i}f_{\lambda_{i}}$ finite sum, so finitely many cover. Correct. No error.
- **Proposed fix:** No change needed.
- **Reported:** 2026-10-28 (10fede1)

### ISSUE-0014 [Open] Step 5 of structure sheaf: adjusting denominators
- **Category:** Logical gap
- **Location:** ag:structure-sheaf-properties / Step 5
- **Detail:** The proof replaces $a_{i}$ by $a_{i}h_{i}^{n}$ and $h_{i}$ by $h_{i}^{n+1}$ to get $h_{j}a_{i}=h_{i}a_{j}$. This is a standard argument and correct. No error.
- **Proposed fix:** No change needed.
- **Reported:** 2026-10-28 (10fede1)

### ISSUE-0015 [Open] Step 6: gluing with f^m = sum b_i h_i
- **Category:** Logical gap
- **Location:** ag:structure-sheaf-properties / Step 6
- **Detail:** The proof uses $D(f)=\bigcup D(h_{i})$ to get $f^{m}=\sum b_{i}h_{i}$ and defines $a=\sum b_{i}a_{i}$, showing $h_{j}a=f^{m}a_{j}$. Correct. No error.
- **Proposed fix:** No change needed.
- **Reported:** 2026-10-28 (10fede1)

### ISSUE-0016 [Open] Step 3 injectivity: Ann(a) not subset p
- **Category:** Missing hypothesis
- **Location:** ag:structure-sheaf-properties / Step 3
- **Detail:** The proof says $a/f^{n}$ is $0$ in $A_{\mathfrak{p}}$ iff $\operatorname{Ann}(a)\not\subset\mathfrak{p}$. This is correct: $a/f^{n}=0$ in $A_{\mathfrak{p}}$ iff there is $h\notin\mathfrak{p}$ with $ha=0$, i.e. $\operatorname{Ann}(a)\not\subset\mathfrak{p}$. No error.
- **Proposed fix:** No change needed.
- **Reported:** 2026-10-28 (10fede1)

### ISSUE-0017 [Open] Hypcheck references ag:spec-topology.2 and .4
- **Category:** Improper link
- **Location:** hypcheck
- **Detail:** The hypcheck cites \ref{ag:spec-topology.2} and \ref[4]{ag:spec-topology.4} for the radical being intersection of primes and for closed points = maximal. Item 2 of ag:spec-topology is about $D(f)$ basis and radical inclusion; item 4 is about quasi-compactness. The radical-as-intersection-of-primes is used in Step 2 (item 2) and Step 3 (item 3). The citation to item 2 for 'radical is intersection of primes' is slightly off since that fact is ring:nilradical, but item 2 does use it. This is a minor imprecision, not a genuine improper link. No error.
- **Proposed fix:** No change needed.
- **Reported:** 2026-10-28 (10fede1)
