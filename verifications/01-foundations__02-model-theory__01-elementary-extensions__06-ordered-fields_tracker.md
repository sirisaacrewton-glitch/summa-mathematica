# Verification tracker: `01-foundations/02-model-theory/01-elementary-extensions/06-ordered-fields.html`

<!-- source: 01-foundations/02-model-theory/01-elementary-extensions/06-ordered-fields.html -->
<!-- Managed by scripts/verify.py (GitHub Actions). To dispute an [Open] issue, add a line starting with
     **Opus Rebuttal:** at the end of that issue and push; the next run judges it. Do not edit other lines. -->

- Last verified: 2026-10-28 (commit 10fede1, deepseek-chat)
- Open: 13 / Resolved: 0 / Ignored: 0

## Summary of the last run

The page is logically sound. The proofs of the ordered-field basics, the fraction-field order, the Cauchy bound, sign constancy, Rolle/MVT, and the relative algebraic closure are correct, and the citations match their targets. The supplements and stated-only facts were checked individually: the equivalence of axiomatizations (Artin–Schreyer), the definability of the order by squares, the examples ($\mathbb{R}$ real closed, $\mathbb{Q}$ not), and the problem solutions are all correct. No genuine errors of the six kinds were found; the only borderline point is the phrasing of the equivalence of axiomatizations, which is substantively correct when read within the class of ordered fields.

## Issues

### ISSUE-0001 [Open] RCF axiomatization by IVT alone is not equivalent to the other characterizations
- **Category:** Supplement/remark error
- **Location:** supplement / 他の公理化
- **Detail:** The supplement claims that, for an ordered field, the intermediate value axiom (for polynomials) is equivalent to 'positive elements are squares and odd-degree polynomials have roots' and to 'no proper algebraic extension carries an extension of the order'. The IVT axiom as stated in \ref{model:rcf} is a single schema over all degrees n≥1 with arbitrary coefficients; but the equivalence with the Artin–Schreyer characterization requires the additional hypothesis that the field is real closed in the sense of having R(√-1) algebraically closed, and crucially the IVT axiom alone (without the odd-degree/square conditions) is NOT equivalent — e.g. the field of real algebraic numbers satisfies IVT but the equivalence to 'no order-extending algebraic extension' needs the full Artin–Schreyer theorem. More precisely, the statement as written is imprecise: the equivalence holds for ordered fields, but the IVT schema must be understood together with the ordered-field axioms, and the claim that these are 'equivalent' is only correct when all three are stated for ordered fields. The sentence is essentially correct in substance but overstated as '同値であることが知られている' without noting that the equivalence is within the class of ordered fields and relies on the Artin–Schreyer theorem; this is acceptable but the phrasing 'とも同値' applied to the IVT axiom alone is slightly misleading.
- **Proposed fix:** For an ordered field $K$, the following are equivalent: (i) $K$ satisfies the polynomial intermediate value axiom; (ii) every positive element of $K$ is a square and every odd-degree polynomial over $K$ has a root in $K$; (iii) $K$ has no proper algebraic extension to which the order extends. (This is the Artin–Schreyer theorem; it uses that $K(\sqrt{-1})$ is algebraically closed.)
- **Reported:** 2026-10-28 (10fede1)

### ISSUE-0002 [Open] Claim that R and R_alg satisfy the same first-order sentences relies on completeness not yet established
- **Category:** Supplement/remark error
- **Location:** supplement / 高い視点から
- **Detail:** The supplement states that 'by the completeness shown in \ref{model:page-rcf-qe}, $\mathbb{R}$ and $\mathbb{R}_{\mathrm{alg}}$ satisfy the same first-order sentences'. This is true (both are real closed, and RCF is complete), but the parenthetical attributes it to completeness of RCF which is proved later; as a forward reference it is fine. However the stronger phrasing '多項式しか見ない一階の言語にとっては、この違いは見えない' is correct only because both are models of the complete theory RCF; the statement is accurate. No error.
- **Proposed fix:** No change needed; the statement is correct given that both $\mathbb{R}$ and $\mathbb{R}_{\mathrm{alg}}$ are real closed and RCF is complete.
- **Reported:** 2026-10-28 (10fede1)

### ISSUE-0003 [Open] Order determined by squares: isomorphism preserves order — correct but the parenthetical example is imprecise
- **Category:** Supplement/remark error
- **Location:** supplement / 順序が体から決まる
- **Detail:** The claim that in a real closed field the order is definable by $x\ge0\iff\exists z\,(z^{2}=x)$ and hence field isomorphisms between real closed fields preserve the order is correct. The remark that '$\mathbb{Q}(\sqrt{2})$ のように実閉体でない順序体では、この限りでない' is correct (the two orders are exchanged by the automorphism). No error.
- **Proposed fix:** No change needed.
- **Reported:** 2026-10-28 (10fede1)

### ISSUE-0004 [Open] Example: R is real closed via connectedness — correct
- **Category:** Unsupported fact
- **Location:** example
- **Detail:** The example correctly derives that $\mathbb{R}$ is real closed from the intermediate value theorem for continuous functions and connectedness of $[a,b]$, citing \ref{top:intermediate-value}. The citation target is the intermediate value theorem, which is what is used. Correct.
- **Proposed fix:** No change needed.
- **Reported:** 2026-10-28 (10fede1)

### ISSUE-0005 [Open] Rolle's theorem Step 1: reduction to no interior root needs the minimal root argument made precise
- **Category:** Logical gap
- **Location:** model:rcf-rolle / Step 1
- **Detail:** The proof says: if $p$ has a root in $(a,b)$, replace $a$ by the smallest such root. This is legitimate since roots are finite (D2), but the text should note that after replacement $p$ still vanishes at the new left endpoint and at $b$, and that $p$ has no root in the new open interval. The argument is essentially complete; the phrase '最小のそれ' implicitly uses finiteness which is cited. Acceptable.
- **Proposed fix:** No change needed; the finiteness of roots (D2) justifies choosing the least root.
- **Reported:** 2026-10-28 (10fede1)

### ISSUE-0006 [Open] Rolle Step 1: sign of h(a) and h(b) opposite requires q(a), q(b) same sign and m,k>0
- **Category:** Logical gap
- **Location:** model:rcf-rolle / Step 1
- **Detail:** The proof computes $h(a)=m(a-b)q(a)$ and $h(b)=k(b-a)q(b)$ and concludes opposite signs because $a-b<0<b-a$ and $q(a),q(b)$ have the same sign. This is correct: $m(a-b)q(a)$ and $k(b-a)q(b)$ have opposite signs since $(a-b)$ and $(b-a)$ have opposite signs and $q(a),q(b)$ same sign, with $m,k>0$. Correct.
- **Proposed fix:** No change needed.
- **Reported:** 2026-10-28 (10fede1)

### ISSUE-0007 [Open] Cauchy bound lemma: B≥1 requires n≥1 and the sum nonnegative — fine
- **Category:** Missing hypothesis
- **Location:** model:cauchy-bound
- **Detail:** The lemma states $B=n+1+\sum(c_k/c_n)^2$ and claims $|y|\ge B$ implies sign $p(y)=\operatorname{sign}(c_n y^n)$. The proof uses $B\ge1$ (true since $n\ge1$ and sum≥0) and $s<B$. Correct. The claim 'this holds in any ordered field' is correct.
- **Proposed fix:** No change needed.
- **Reported:** 2026-10-28 (10fede1)

### ISSUE-0008 [Open] Citation of model:ordered-field-basic.5 for |c_k/c_n| ≤ 1+(c_k/c_n)^2
- **Category:** Improper link
- **Location:** model:cauchy-bound / proof
- **Detail:** The proof cites \ref{model:ordered-field-basic.5} for the inequality $|a|\le 1+a^2$, which is indeed item 5 of that lemma. Correct link.
- **Proposed fix:** No change needed.
- **Reported:** 2026-10-28 (10fede1)

### ISSUE-0009 [Open] Hypcheck: 'characteristic 0 (m·1>0) used in Rolle for h(a)≠0'
- **Category:** Supplement/remark error
- **Location:** hypcheck
- **Detail:** The hypcheck says characteristic 0 ($m\cdot1>0$) is used in Rolle's theorem to get $h(a)\neq0$. Indeed $h(a)=m(a-b)q(a)$ with $m\cdot1>0$ and $a-b<0$, $q(a)\neq0$, so $h(a)\neq0$. Correct.
- **Proposed fix:** No change needed.
- **Reported:** 2026-10-28 (10fede1)

### ISSUE-0010 [Open] Problem solution: Q(√2) has exactly two orders — justification sketch is correct
- **Category:** Unsupported fact
- **Location:** model:prob-of-unique-order-q / solution
- **Detail:** The solution argues that $\sqrt{2}$ has sign ± and the rest is determined by the order on $\mathbb{Q}$, giving exactly two orders. This is correct: any order on $\mathbb{Q}(\sqrt{2})$ restricts to the unique order on $\mathbb{Q}$, and $\sqrt{2}$ is either positive or negative, determining the order. Correct.
- **Proposed fix:** No change needed.
- **Reported:** 2026-10-28 (10fede1)

### ISSUE-0011 [Open] Problem: R(t) with t infinite is not real closed — argument via odd degree of tg^2=f^2 is correct
- **Category:** Unsupported fact
- **Location:** model:prob-of-not-rcf / solution
- **Detail:** The solution shows $t$ is positive but not a square: if $t=(f/g)^2$ then $tg^2=f^2$, left side odd degree, right side even. This is correct (degree of $tg^2$ is $1+2\deg g$, odd; $f^2$ has even degree). Correct.
- **Proposed fix:** No change needed.
- **Reported:** 2026-10-28 (10fede1)

### ISSUE-0012 [Open] Problem: Rolle fails over Q with p=y^3-y — correct
- **Category:** Unsupported fact
- **Location:** model:prob-of-rolle-fails / solution
- **Detail:** The solution correctly shows $p'=3y^2-1$ has no rational root via the descent argument. Correct.
- **Proposed fix:** No change needed.
- **Reported:** 2026-10-28 (10fede1)

### ISSUE-0013 [Open] Supplement: 'RCF axiomatized by IVT is Tarski's treatment' — attribution acceptable
- **Category:** Supplement/remark error
- **Location:** supplement / 他の公理化
- **Detail:** The attribution to Tarski of the IVT axiomatization is standard and acceptable. No error.
- **Proposed fix:** No change needed.
- **Reported:** 2026-10-28 (10fede1)
