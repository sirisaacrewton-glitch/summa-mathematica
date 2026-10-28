# Verification tracker: `03-number-theory/01-algebraic-number-theory/01-number-fields/08-p-adic.html`

<!-- source: 03-number-theory/01-algebraic-number-theory/01-number-fields/08-p-adic.html -->
<!-- Managed by scripts/verify.py (GitHub Actions). To dispute an [Open] issue, add a line starting with
     **Opus Rebuttal:** at the end of that issue and push; the next run judges it. Do not edit other lines. -->

- Last verified: 2026-10-28 (commit 10fede1, deepseek-chat)
- Open: 22 / Resolved: 0 / Ignored: 0

## Summary of the last run

The page is largely correct. The main genuine problem is in the remark on Ostrowski/Hasse: the Selmer counterexample 3x^3+4y^3+5z^3=0 is stated without the qualifier 'nontrivial', making the claim literally false since (0,0,0) is a rational solution; the fix is to add '非自明な' on both sides. Other potential issues (Hensel ring definition, Newton method precision, citation of nt:p-adic-integers.3 vs .4) are minor imprecisions that do not rise to reportable errors under the strict criteria, or are correct as stated. No previously reported issues exist.

## Issues

### ISSUE-0001 [Open] Selmer's example: 3x^3+4y^3+5z^3=0 has the trivial solution and is not the standard counterexample
- **Category:** Supplement/remark error
- **Location:** remark オストロフスキーの定理と局所大域原理 / item 2
- **Detail:** The remark states that the cubic form 3x^3+4y^3+5z^3=0 has a nontrivial solution over every Q_p and over R but none over Q. As written this is false: (x,y,z)=(0,0,0) is a solution over Q, so the form does have a (trivially) rational zero; the claim must be about *nontrivial* zeros. Moreover the classical Selmer counterexample is the plane cubic 3x^3+4y^3+5z^3=0, which is known to have nontrivial local solutions everywhere but no nontrivial rational point; the statement as phrased ("非自明な解をもつが Q ではもたない") omits the word 非自明 for the rational side, making it literally false. Also the Hasse–Minkowski statement in item 2 is fine, but the contrast with cubics should be stated precisely.
- **Proposed fix:** 3 次形式では成り立たず、セルマーの例 $3x^{3}+4y^{3}+5z^{3}=0$ は、$\mathbb{R}$ とすべての $\mathbb{Q}_{p}$ で**非自明な**解をもつが、$\mathbb{Q}$ では**非自明な**解をもたない（自明解 $(0,0,0)$ は除く）。
- **Reported:** 2026-10-28 (10fede1)

### ISSUE-0002 [Open] Hensel's lemma (factorization form) requires coprime factors and completeness; the supplement's phrasing is acceptable but the 'Henschel ring' definition is imprecise
- **Category:** Supplement/remark error
- **Location:** supplement 前提を弱めると
- **Detail:** The supplement says Hensel's lemma generalizes to complete local rings (m-adically complete): a factorization mod m into coprime factors lifts. This is essentially correct, but the sentence 'mod m での互いに素な因数分解が持ち上がる' should specify that the factors must be coprime (互いに素) — which it does — and that the lifting is to a factorization with the same degrees. The definition of Hensel ring given ('この性質をもつ局所環') is the standard one, so no error. However, the claim that this is a generalization 'to complete local rings' is slightly overstated: the factorization form holds for any Hensel ring, not only complete ones, and completeness is sufficient but not necessary. This is a minor imprecision, not a falsehood.
- **Proposed fix:** ヘンゼルの補題は、$\mathfrak{m}$ 進完備な局所環（さらに一般にヘンゼル環）上の多項式について、$\bmod\mathfrak{m}$ での互いに素なモニック因数分解が同じ次数の因数分解に一意に持ち上がる、という形に一般化される。この性質をもつ局所環をヘンゼル環という（完備局所環はヘンゼル環である）。
- **Reported:** 2026-10-28 (10fede1)

### ISSUE-0003 [Open] Newton's method convergence claim: 'precision doubles' requires simple root and is only quadratic, not exactly doubling
- **Category:** Supplement/remark error
- **Location:** supplement 似た定理
- **Detail:** The supplement says Newton's method in the real case 'improves precision by doubling (2次収束)' just as in the p-adic case, and that Step 2 of Hensel's lemma can be modified to solve t mod p^n at once so that a_n -> a_{2n}. For the real Newton method, quadratic convergence holds only near a simple root and the error roughly squares (digits roughly double), which is a heuristic, not an exact doubling; the statement '精度が倍々に上がる' is an oversimplification but commonly accepted. The p-adic claim that one can solve t mod p^n at once to get a_n -> a_{2n} is correct (Newton/Hensel iteration doubles p-adic precision). This is borderline; the real-case phrasing is imprecise but not strictly false.
- **Proposed fix:** ニュートン法は、実数での方程式の解を漸化式 $a_{n+1}=a_{n}-f(a_{n})/f'(a_{n})$ で近似し、単根の近くでは誤差が2乗されて桁数がほぼ倍になる（2次収束）。$p$ 進の場合も同様で、ヘンゼルの補題の Step 2 で $t$ を $\bmod p^{n}$ まで一度に解けば $a_{n}\to a_{2n}$ と精度が倍になる。
- **Reported:** 2026-10-28 (10fede1)

### ISSUE-0004 [Open] Hypcheck: for p=2, u in Z_2^× is a square iff u ≡ 1 mod 8
- **Category:** Unsupported fact
- **Location:** hypcheck / p が奇素数
- **Detail:** The hypcheck states: for p=2, u in Z_2^× is a square iff u ≡ 1 mod 8. This is correct for units: a 2-adic unit is a square iff u ≡ 1 mod 8. So no error. (Checking: yes, standard.) No issue.
- **Proposed fix:** No change needed; statement is correct.
- **Reported:** 2026-10-28 (10fede1)

### ISSUE-0005 [Open] Ostrowski: equivalence classes of nontrivial absolute values on Q are |·|_∞^c with 0<c≤1 and |·|_p^c with c>0
- **Category:** Supplement/remark error
- **Location:** remark オストロフスキーの定理と局所大域原理 / item 1
- **Detail:** The remark states nontrivial absolute values on Q are equivalent to |·|_∞^c (0<c≤1) or |·|_p^c (c>0). This is the standard statement of Ostrowski's theorem and is correct. The parenthetical '0<c≤1' for the archimedean one and 'c>0' for p-adic is the usual normalization (for the archimedean absolute value, powers c>1 are equivalent to c=1 via the same equivalence, but the standard parametrization restricts to 0<c≤1 to avoid duplication; actually any c>0 gives an absolute value and all are equivalent, so restricting to 0<c≤1 is just a choice of representative). This is fine.
- **Proposed fix:** No change needed.
- **Reported:** 2026-10-28 (10fede1)

### ISSUE-0006 [Open] Hensel introduced p-adic numbers around 1897
- **Category:** Supplement/remark error
- **Location:** remark / item 3
- **Detail:** The remark says Hensel introduced p-adic numbers around 1897. Historically, Hensel introduced p-adic numbers in his 1897 paper ('Über eine neue Begründung der Theorie der algebraischen Zahlen', Jahresber. DMV 6 (1897), 83–88). This attribution is essentially correct. The claim that decomposition/inertia groups can be read as Galois groups of local extensions (D_P ≅ Gal(K_P/Q_p)) is standard and correct.
- **Proposed fix:** No change needed.
- **Reported:** 2026-10-28 (10fede1)

### ISSUE-0007 [Open] Step 4 of nt:local-decomposition: rank computation uses |O_K/P^e| = p^{ef} attributed to nt:ideal-norm-multiplicative Step 1
- **Category:** Logical gap
- **Location:** nt:local-decomposition / Step 4
- **Detail:** Step 4 computes the rank as dim_{F_p} \hat{O}_P/p = dim_{F_p} O_K/P^{e}, citing nt:ideal-norm-multiplicative Step 1 for |O_K/P^e| = p^{ef}. This is a legitimate citation if that proposition indeed establishes the cardinality of the residue ring. The label table lists nt:ideal-norm-multiplicative as 'ノルムの乗法性' (multiplicativity of norm), which typically includes |O_K/a| = N(a) and hence |O_K/P^e| = p^{ef}. So the citation is appropriate. No issue.
- **Proposed fix:** No change needed.
- **Reported:** 2026-10-28 (10fede1)

### ISSUE-0008 [Open] Step 3 of nt:local-decomposition: 'regular 1-dimensional local ring, hence DVR' via ring:regular-completion and ring:dvr-characterization
- **Category:** Logical gap
- **Location:** nt:local-decomposition / Step 3
- **Detail:** Step 3 argues \hat{O}_P is the m-adic completion of the DVR O_{K,P}, hence by ring:regular-completion a regular 1-dimensional local ring, hence a DVR by ring:dvr-characterization. This is correct: a Noetherian regular local ring of dimension 1 is a DVR. The citation to ring:regular-completion (completion and regularity) is appropriate. No issue.
- **Proposed fix:** No change needed.
- **Reported:** 2026-10-28 (10fede1)

### ISSUE-0009 [Open] Step 6 of nt:local-decomposition: uniqueness of product decomposition into fields
- **Category:** Logical gap
- **Location:** nt:local-decomposition / Step 6
- **Detail:** Step 6 claims the decomposition into a product of fields is unique because it is determined by the set of maximal ideals and residue fields. This is correct: for a finite product of fields, the factors are the localizations at maximal ideals, hence unique up to permutation. The comparison with item 3 gives h=g and degrees e_i f_i. No issue.
- **Proposed fix:** No change needed.
- **Reported:** 2026-10-28 (10fede1)

### ISSUE-0010 [Open] Example nt:local-gaussian: p=3 case, '3 ∤ d_K = -4 hence inert'
- **Category:** Logical gap
- **Location:** nt:local-gaussian
- **Detail:** The example argues for p=3: -1 is not a square mod 3, so f=x^2+1 is irreducible over Q_3, ef=2; then says 3 is either inert (e=1,f=2) or ramified (e=2), and since 3 ∤ d_K=-4 it is inert. This is correct: if ramified then 3 | d_K, but 3∤-4, so e=1, f=2. No issue.
- **Proposed fix:** No change needed.
- **Reported:** 2026-10-28 (10fede1)

### ISSUE-0011 [Open] Example nt:local-gaussian: p=2 case, 'Q_2(i)/Q_2 is degree 2 with e=2 (ramified)'
- **Category:** Logical gap
- **Location:** nt:local-gaussian
- **Detail:** For p=2, x^2+1 = (x+1)^2 mod 2, so 2 is ramified in Q(i) with e=2, f=1. The example says 'Q_2(i)/Q_2 is degree 2 with e=2 (ramified)'. This is correct. No issue.
- **Proposed fix:** No change needed.
- **Reported:** 2026-10-28 (10fede1)

### ISSUE-0012 [Open] Solution to nt:prob-pa-cube-root-five: 'if g has a root in Q_5 then it has a root mod 5 (roots lie in Z_5)'
- **Category:** Logical gap
- **Location:** nt:prob-pa-cube-root-five / solution
- **Detail:** The solution argues g (degree 2, reducing to irreducible x^2+3x+4 mod 5) is irreducible over Q_5 because if it had a root in Q_5, that root would lie in Z_5 (since g is monic with coefficients in Z_5 and the root is integral), hence reduce to a root mod 5, contradiction. This is correct: a root of a monic polynomial over Z_5 lies in Z_5 (by the p-adic valuation argument), and its reduction is a root mod 5. No issue.
- **Proposed fix:** No change needed.
- **Reported:** 2026-10-28 (10fede1)

### ISSUE-0013 [Open] Solution to nt:prob-pa-sqrt-seven-two: computation of a_2
- **Category:** Logical gap
- **Location:** nt:prob-pa-sqrt-seven-two / solution
- **Detail:** The solution computes a_2 = 3+7t with t ≡ -c f'(3)^{-1} mod 7, c=1, f'(3)=6, 6^{-1}≡6 mod 7, so t≡-6≡1 mod 7, a_2=10, and checks 10^2-2=98=2·49. This is correct. No issue.
- **Proposed fix:** No change needed.
- **Reported:** 2026-10-28 (10fede1)

### ISSUE-0014 [Open] Hensel's lemma statement: f ∈ Z_p[x], a ∈ Z_p, f(a)≡0 mod p, f'(a)≠0 mod p
- **Category:** Missing hypothesis
- **Location:** nt:hensel-lemma
- **Detail:** The statement is the standard Hensel's lemma for Z_p. The proof uses Taylor expansion and the condition f'(a) not ≡ 0 mod p. The hypotheses are correctly stated. No issue.
- **Proposed fix:** No change needed.
- **Reported:** 2026-10-28 (10fede1)

### ISSUE-0015 [Open] Corollary nt:hensel-applications item 2: p odd prime, u ∈ Z_p^× square iff u mod p square
- **Category:** Missing hypothesis
- **Location:** nt:hensel-applications / item 2
- **Detail:** The statement requires p odd (given) and u a unit. The proof uses f=x^2-u, f'(b)=2b not ≡0 mod p since p odd and b≠0. Correct. The additional claim sqrt(-1) ∈ Q_p iff p≡1 mod 4 is correct (for p odd; for p=2, -1 is a square in Q_2 since -1 ≡ 7 mod 8? Actually -1 ≡ 7 mod 8, and 7 is not ≡1 mod 8, so -1 is not a square in Q_2; but the statement is restricted to odd p). No issue.
- **Proposed fix:** No change needed.
- **Reported:** 2026-10-28 (10fede1)

### ISSUE-0016 [Open] Proposition nt:p-adic-integers item 4: Q_p is complete and Q dense
- **Category:** Missing hypothesis
- **Location:** nt:p-adic-integers / Step 5
- **Detail:** The proof of completeness and density is sketched. The completeness argument: if |x_k - x_l|_p -> 0, multiply by p^c to land in Z_p, then for each n the projections stabilize, giving a limit in Z_p. This is a standard argument and correct. Density: for x in Z_p, representatives a_n of π_n(x) satisfy |x-a_n|_p ≤ p^{-n}; for general Q_p elements, scale. Correct. No issue.
- **Proposed fix:** No change needed.
- **Reported:** 2026-10-28 (10fede1)

### ISSUE-0017 [Open] Citation of nt:p-adic-integers.3 in product formula proof
- **Category:** Improper link
- **Location:** nt:product-formula / proof
- **Detail:** The proof cites nt:p-adic-integers.3 for |x|_p = p^{-a_p}. Item 3 of nt:p-adic-integers defines v(x) and states v|_Z = v_p, and |x|_p = p^{-v(x)} is defined in item 4. The citation to item 3 is slightly off: the absolute value |·|_p is defined in item 4, not item 3. However, item 3 gives v|_Z = v_p, which combined with the definition in item 4 yields |x|_p = p^{-v_p(x)}. This is a minor imprecision in citation, but the content is available. Borderline; I would not report as a genuine improper link since item 3 does establish v|_Z = v_p which is the key.
- **Proposed fix:** Cite \ref{nt:p-adic-integers.3} and \ref{nt:p-adic-integers.4} (or just note that |x|_p = p^{-v_p(x)} follows from items 3 and 4).
- **Reported:** 2026-10-28 (10fede1)

### ISSUE-0018 [Open] Citation of nt:euler-criterion.3 for Legendre symbol (-1/p)
- **Category:** Improper link
- **Location:** nt:hensel-applications / Step 2
- **Detail:** Step 2 cites nt:euler-criterion.3 for (-1/p). Euler's criterion (proposition 5.2) states a^{(p-1)/2} ≡ (a/p) mod p, and the supplementary law (-1/p) = (-1)^{(p-1)/2} is a consequence. The label table lists nt:euler-criterion.3 as 'オイラーの規準' proposition 5.2. If item 3 of that proposition is the supplementary law for -1, the citation is correct. Without seeing the target, it is plausible. No issue.
- **Proposed fix:** No change needed.
- **Reported:** 2026-10-28 (10fede1)

### ISSUE-0019 [Open] Remark: 'D_P ≅ Gal(K_P/Q_p)' stated as known but not in site
- **Category:** Unsupported fact
- **Location:** remark / item 3
- **Detail:** The remark states D_P ≅ Gal(K_P/Q_p) and notes it is not in the site. This is a standard fact (decomposition group is isomorphic to the Galois group of the local extension for Galois K/Q). Correct. No issue.
- **Proposed fix:** No change needed.
- **Reported:** 2026-10-28 (10fede1)

### ISSUE-0020 [Open] Supplement: 'monte's algorithm' for factoring over Q_p including primes dividing the index
- **Category:** Supplement/remark error
- **Location:** supplement 計算の観点
- **Detail:** The supplement says factorization of polynomials over Q_p (hence prime decomposition via nt:local-decomposition.4) is possible also for primes dividing the index, using Montés algorithm etc. This is correct: Montés algorithm (or round-four/van Hoeij) factors polynomials over Q_p regardless of the index. The phrase '指数を割り切る素数についても可能' refers to primes dividing the index of Z[θ] in O_K, which is the subtle case for Kummer–Dedekind; indeed p-adic factorization of the minimal polynomial handles it. Correct. No issue.
- **Proposed fix:** No change needed.
- **Reported:** 2026-10-28 (10fede1)

### ISSUE-0021 [Open] Remark: Spec Z_p -> Spec Z is 'infinitesimal neighborhood of point p'
- **Category:** Supplement/remark error
- **Location:** remark 形式的な近傍と分解
- **Detail:** The remark describes Spec Z_p -> Spec Z as the infinitesimal neighborhood of the point p, and base change Spec(O_K ⊗ Z_p) as the part of Spec O_K above p seen with infinitesimal precision. This is a standard heuristic (formal neighborhood). The claim that nt:local-decomposition says this neighborhood splits into disjoint union of Spec \hat{O}_P is correct (product of rings = disjoint union of spectra). The statement that Hensel's lemma guarantees the fiber decomposition lifts to the neighborhood decomposition is a reasonable heuristic. No false claim. No issue.
- **Proposed fix:** No change needed.
- **Reported:** 2026-10-28 (10fede1)

### ISSUE-0022 [Open] Hypcheck: 'x^2-2 has root 0 mod 2 but sqrt 2 not in Q_2'
- **Category:** Unsupported fact
- **Location:** hypcheck / f'(a) not ≡ 0
- **Detail:** The hypcheck gives the example x^2-2 has root 0 mod 2 but sqrt 2 not in Q_2, with reason v(y^2) even so y^2=2 impossible. This is correct: v_2(2)=1 odd, but v(y^2)=2v(y) even. No issue.
- **Proposed fix:** No change needed.
- **Reported:** 2026-10-28 (10fede1)
