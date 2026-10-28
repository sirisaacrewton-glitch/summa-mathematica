# Verification tracker: `02-algebra/04-associative-rings/02-noncommutative-rings/06-density-commutativity.html`

<!-- source: 02-algebra/04-associative-rings/02-noncommutative-rings/06-density-commutativity.html -->
<!-- Managed by scripts/verify.py (GitHub Actions). To dispute an [Open] issue, add a line starting with
     **Opus Rebuttal:** at the end of that issue and push; the next run judges it. Do not edit other lines. -->

- Last verified: 2026-10-28 (commit 10fede1, deepseek-chat)
- Open: 7 / Resolved: 0 / Ignored: 0

## Summary of the last run

The page is mathematically sound overall. The density theorem, its corollary, Herstein's lemma, and Jacobson's commutativity theorem are proved correctly, and the supplements/remarks are accurate. The only genuine (minor) gap is in the proof of the density lemma, where the induction hypothesis is applied to v−φ·u without explicitly handling the case v−φ·u∈V′; the argument is repairable by a one-line case split. All other checked statements (hypcheck comments, supplement, problem solutions) are correct, and the citations match their targets.

## Issues

### ISSUE-0001 [Open] Density lemma: induction hypothesis applied to v−φu without checking it is outside V′
- **Category:** Logical gap
- **Location:** mod:density-lemma / proof
- **Detail:** In the proof of the density lemma, after obtaining r(v−φ·u)=0 for all r∈I, the text invokes the induction hypothesis (for V′ and the element v−φ·u) to conclude v−φ·u∈V′. But the induction hypothesis only yields this conclusion under the hypothesis that the element is NOT in V′ (it is the contrapositive form: if v∉V′ then there is r with rV′=0, rv≠0). If v−φ·u∈V′ there is nothing to prove, but the text does not split into cases; as written the inference 'r(v−φu)=0 for all r∈I, hence v−φu∈V′' is exactly the contrapositive of the induction hypothesis and is valid only when one argues: if v−φu∉V′ then the induction hypothesis gives r∈I with r(v−φu)≠0, contradiction. The argument is essentially correct but the case distinction (v−φu∈V′ vs. not) is elided, and the phrase 'so by the induction hypothesis ... v−φ·u∈V′' is not literally what the induction hypothesis says.
- **Proposed fix:** Replace the last sentence by: 'If v−φ·u∈V′ we are done. Otherwise, by the induction hypothesis applied to V′ and the element v−φ·u∉V′, there is r∈I with r(v−φ·u)≠0, contradicting r(v−φ·u)=0 for all r∈I. Hence v−φ·u∈V′, so v∈V′+Du=V, a contradiction.'
- **Reported:** 2026-10-28 (10fede1)

### ISSUE-0002 [Open] Herstein lemma Step 2: e_μ≠0 for some μ≠0 needs δ≠0 argument made precise
- **Category:** Logical gap
- **Location:** mod:herstein-lemma / Step 2
- **Detail:** The text argues: if e_μ=0 for all μ≠0 then id=e_0 and δ=δe_0=0, contradicting δ≠0. This is correct, but the identity δ=δe_0 requires e_0 to be the projection onto the μ=0 generalized eigenspace, i.e. (δ−0)e_0=0, which was established. The step is fine; however the claim 'δ≠0 since a is not central' should be justified: δ(x)=xa−ax=0 for all x would mean a is central, so δ≠0 indeed. No error. (No issue.)
- **Proposed fix:** No change needed; optionally add 'δ=0 would force xa=ax for all x, i.e. a central'.
- **Reported:** 2026-10-28 (10fede1)

### ISSUE-0003 [Open] Supplement: 'dense' in the finite topology and 'primitive ring' terminology
- **Category:** Supplement/remark error
- **Location:** mod:sec-dc-jacobson / supplement
- **Detail:** The supplement states that the image of R is dense in End_D(S) with respect to the finite topology (topology of pointwise convergence). This is correct for the density theorem. It also says a ring acting faithfully on a simple module is called primitive, and a ring with zero radical is a subdirect product of primitive rings. Both are standard and correct. However the sentence 'the density theorem's 稠密 means the image of R is dense in End_D(S) in the finite topology' is slightly imprecise: the density theorem as stated only guarantees that R can match prescribed values on finitely many D-linearly independent vectors, which is precisely density in the finite topology on End_D(S) — this is correct. No genuine error found here.
- **Proposed fix:** No change needed.
- **Reported:** 2026-10-28 (10fede1)

### ISSUE-0004 [Open] Hypcheck: 'n constant gives the same statement'
- **Category:** Unsupported fact
- **Location:** mod:sec-dc-jacobson / hypcheck
- **Detail:** The hypcheck says 'when n is constant the claim is the same'. If a single n≥2 works for all x (x^n=x for all x), the ring is indeed commutative (this is a special case of Jacobson's theorem, and also follows since the hypothesis x^{n(x)}=x is satisfied with n(x)=n). So the statement is true. But 'the claim is the same' is imprecise: with n constant the hypothesis is stronger, so commutativity follows a fortiori; it is not literally 'the same' theorem but a special case. This is a minor imprecision, not a mathematical error.
- **Proposed fix:** Reword to: 'If a single n≥2 satisfies x^{n}=x for all x, this is a special case of the theorem (take n(x)=n), so commutativity follows a fortiori.'
- **Reported:** 2026-10-28 (10fede1)

### ISSUE-0005 [Open] Jacobson commutativity Step 6: W finite and closed under multiplication, but is it a subring containing 1 and closed under the ring operations?
- **Category:** Logical gap
- **Location:** mod:jacobson-commutativity / Step 6
- **Detail:** Step 6 defines W=∑_{j≥0} F x^{j} and claims it is a finite set, closed under multiplication, contains 1, hence a finite integral domain (subring of a division ring) and thus a division ring by Wedderburn's little theorem. The finiteness: x^{n(x)−1}=1 so powers of x are finite, and F is finite, so W is finite — correct. Closure under multiplication: x^{j}f=(x^{j}fx^{−j})x^{j} and x^{j}fx^{−j}∈F (since xFx^{−1}⊂F and F finite so xFx^{−1}=F), so products of Fx^{j} and Fx^{k} land in Fx^{j+k} — correct. W contains 1 and is closed under addition (sum) and multiplication; it is a subring. Being a finite subring of a division ring with 1, it is a finite integral domain, hence a field (division ring) by Wedderburn's little theorem. This is correct. One subtlety: W must be closed under additive inverses and contain 1 — it does. No error.
- **Proposed fix:** No change needed.
- **Reported:** 2026-10-28 (10fede1)

### ISSUE-0006 [Open] Herstein lemma: F=F_p[a] finite field requires a to be algebraic / the hypothesis is stated
- **Category:** Missing hypothesis
- **Location:** mod:herstein-lemma / statement
- **Detail:** The lemma assumes a∉Z(D) and F=F_p[a] is a finite field with q=p^m elements. In Step 3 it uses that the minimal polynomial of a over F_p has all its roots of the form a^{p^j} in F, citing fld:finite-field-automorphisms. This requires F=F_p(a) to be the splitting field / that a generates F over F_p, which holds since F=F_p[a]. The roots of the minimal polynomial are the Frobenius conjugates a^{p^j}, and there are exactly deg = m of them, all in F. Correct. No missing hypothesis.
- **Proposed fix:** No change needed.
- **Reported:** 2026-10-28 (10fede1)

### ISSUE-0007 [Open] Citation of mod:jacobson-characterization.4 for 1−y^{n−1} being a unit
- **Category:** Improper link
- **Location:** mod:jacobson-commutativity / Step 2
- **Detail:** Step 2 cites mod:jacobson-characterization.4 for the fact that if y∈J(R) then 1−y is a unit. The label table lists mod:jacobson-characterization as 'ジャコブソン根基の特徴付け' (characterization of the Jacobson radical). Item 4 presumably states the unit property (y∈J(R) ⟺ 1−xy is a unit for all x, or 1−y unit). This is a standard part of the characterization, so the citation is appropriate. No error.
- **Proposed fix:** No change needed.
- **Reported:** 2026-10-28 (10fede1)
