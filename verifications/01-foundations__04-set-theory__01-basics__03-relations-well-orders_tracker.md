# Verification tracker: `01-foundations/04-set-theory/01-basics/03-relations-well-orders.html`

<!-- source: 01-foundations/04-set-theory/01-basics/03-relations-well-orders.html -->
<!-- Managed by scripts/verify.py (GitHub Actions). To dispute an [Open] issue, add a line starting with
     **Opus Rebuttal:** at the end of that issue and push; the next run judges it. Do not edit other lines. -->

- Last verified: 2026-10-28 (commit 10fede1, deepseek-chat)
- Open: 13 / Resolved: 0 / Ignored: 0

## Summary of the last run

(none)

## Issues

### ISSUE-0001 [Open] Wrong formula for order-preserving bijection Q → {x<0}
- **Category:** Supplement/remark error
- **Location:** supplement after set:well-order-no-initial-iso
- **Detail:** The supplement claims that the map sending x≥0 to −1/(1+x) and x<0 to x−1 is an order-preserving bijection from Q onto {x∈Q | x<0}. This is false: for x≥0, −1/(1+x) lies in [−1,0), and for x<0, x−1<−1, so the value −1/2 (image of x=1) is not attained by any x<0 (since x−1<−1 there) and is not the image of any x≥0 other than x=1; more importantly the map is not surjective onto {x<0} because, e.g., −3/4 is not in the image: for x≥0, −1/(1+x)∈[−1,0), and for x<0, x−1<−1, so no value in (−1,−1/2)∪(−1/2,−1) etc. is hit — concretely −3/4 is missed. Also the map is not injective on the whole domain in the claimed way? It is injective, but it is not onto. Hence the example fails.
- **Proposed fix:** Replace with a correct order-preserving bijection, e.g. $x\mapsto x-1$ for $x<0$ and $x\mapsto -1/(1+x)$ does not work; instead use a single map such as $x\mapsto \frac{x}{1+|x|}-1$? Simpler: use $\langle\Q,<\rangle\cong\{x\in\Q\mid x<0\}$ via $x\mapsto x-1$ is not onto (misses $(-1,0)$). A correct bijection: enumerate $\Q=\{q_{n}\}$ and use a back-and-forth, or state instead the standard example $\langle\Q,<\rangle\cong\langle\Q\cap(0,\infty),<\rangle$ via $x\mapsto 1/x$ combined with a translation; the cleanest fix is: '$\langle\Q,<\rangle$ is isomorphic to its initial segment $\{x\in\Q\mid x<0\}$; for instance the map $x\mapsto x-1$ for $x\le 0$ and $x\mapsto -1/(1+x)$ for $x>0$ is not surjective, so instead cite the standard fact that $\langle\Q,<\rangle\cong\langle\Q,<\rangle$ has a nontrivial automorphism, e.g. $x\mapsto x+1$, and that $\langle\Q,<\rangle$ is isomorphic to $\{x\in\Q\mid x<0\}$ (both are countable dense linear orders without endpoints, hence isomorphic by Cantor's theorem).'
- **Reported:** 2026-10-28 (10fede1)

### ISSUE-0002 [Open] Claim that ⟨N,>⟩ has only the identity automorphism
- **Category:** Supplement/remark error
- **Location:** supplement after set:well-order-iso-unique
- **Detail:** The supplement says: '$\langle\N,>\rangle$ is not a well-order, but its automorphisms are also automorphisms of $\langle\N,<\rangle$, so by the theorem it has only the identity.' This is correct as far as it goes (the automorphism group of $\langle\N,>\rangle$ equals that of $\langle\N,<\rangle$, which is trivial), so this particular sentence is fine. However the surrounding claim 'a rigid total order need not be a well-order' is illustrated only by this example, which is valid. No error here.
- **Proposed fix:** No change needed.
- **Reported:** 2026-10-28 (10fede1)

### ISSUE-0003 [Open] Claim that ⟨N,<⟩ and ⟨Z,<⟩ are not isomorphic because N has a least element
- **Category:** Supplement/remark error
- **Location:** supplement after set:well-order-trichotomy
- **Detail:** The supplement argues: '$\langle\N,<\rangle$ and $\langle\Z,<\rangle$ are not isomorphic ($\N$ has a least element).' This is correct (Z has no least element, and having a least element is preserved by isomorphism). The further claims — that every initial segment $\{n\mid n<k\}$ of $\Z$ has no least element so is not isomorphic to $\N$, and that initial segments of $\N$ are finite so not isomorphic to $\Z$ — are also correct. No error.
- **Proposed fix:** No change needed.
- **Reported:** 2026-10-28 (10fede1)

### ISSUE-0004 [Open] Claim that the empty relation on ∅ is a well-order and that ⟨∅,∅⟩ is a total order
- **Category:** Supplement/remark error
- **Location:** example in set:sec-well-orders
- **Detail:** The example states that $\langle\varnothing,\varnothing\rangle$ is (vacuously) a well-order. This is correct: the total-order axioms are vacuous and every nonempty subset (there are none) has a least element. No error.
- **Proposed fix:** No change needed.
- **Reported:** 2026-10-28 (10fede1)

### ISSUE-0005 [Open] Claim that the identity map from the empty order on {a,b} to a<b is a counterexample
- **Category:** Supplement/remark error
- **Location:** supplement after set:order-isomorphism-basic
- **Detail:** The supplement says: 'For partial orders this fails (the identity map from the empty order on $\{a,b\}$ to the order $a<b$).' Check: the empty relation on $\{a,b\}$ is a partial order (irreflexive, transitive, not total). The identity is a bijection and satisfies $xRy\to f(x)Sf(y)$ vacuously. But it is not an isomorphism since $a<b$ holds while $\lnot(aRa)$. So it is indeed a counterexample. Correct.
- **Proposed fix:** No change needed.
- **Reported:** 2026-10-28 (10fede1)

### ISSUE-0006 [Open] Kunen attribution in supplement
- **Category:** Supplement/remark error
- **Location:** supplement after set:well-order-no-initial-iso
- **Detail:** The supplement says 'Kunen suggests the proof considering the least $y$ with $f(y)\neq y$.' This is a plausible attribution and not clearly false; not reported.
- **Proposed fix:** No change needed.
- **Reported:** 2026-10-28 (10fede1)

### ISSUE-0007 [Open] Claim that R cannot be well-ordered in ZF (Cohen)
- **Category:** Unsupported fact
- **Location:** example in set:sec-choice
- **Detail:** The example states: 'If ZF is consistent, then ZF cannot prove that R is well-orderable (Cohen).' This is correct: it is the standard independence result (Con(ZF) ⇒ Con(ZF + 'R is not well-orderable')). No error.
- **Proposed fix:** No change needed.
- **Reported:** 2026-10-28 (10fede1)

### ISSUE-0008 [Open] Independence claims attributed to Gödel and Cohen
- **Category:** Supplement/remark error
- **Location:** supplement in set:sec-choice
- **Detail:** The supplement states Con(ZF) ⇒ Con(ZFC) (Gödel, constructible sets) and Con(ZF) ⇒ Con(ZF + ¬AC) (Cohen, forcing). Both are correct standard results. No error.
- **Proposed fix:** No change needed.
- **Reported:** 2026-10-28 (10fede1)

### ISSUE-0009 [Open] Step 3 of set:well-order-trichotomy: f(v')=h(v') requires v'∈dom(f) already established
- **Category:** Logical gap
- **Location:** set:well-order-trichotomy / Step 3
- **Detail:** In Step 3 the text derives $\langle v',h(v')\rangle\in f$, hence $v'\in\dom(f)$, and then asserts $f(v')=h(v')$ using uniqueness of $f$'s value (Step 2). This is fine: since $\langle v',h(v')\rangle\in f$ and $f$ is a function, $f(v')=h(v')$. No gap.
- **Proposed fix:** No change needed.
- **Reported:** 2026-10-28 (10fede1)

### ISSUE-0010 [Open] Step 8 (2 and 3) composition argument
- **Category:** Logical gap
- **Location:** set:well-order-trichotomy / Step 8
- **Detail:** In the '2 and 3' case, $g\colon\langle A,R\rangle\to\langle B_{y},S\rangle$ and $k\colon\langle B,S\rangle\to\langle A_{x},R\rangle$. Applying set:iso-preserves-initial-segment to $g$ and $x\in A$ gives $g\restr{A_{x}}$ is an isomorphism from $A_{x}$ onto $\mathrm{pred}(B_{y},g(x),S)=B_{g(x)}$ (using $g(x)Sy$ and set:well-order-basic-lemmas.2). Then $(g\restr{A_{x}})\circ k$ is an isomorphism from $\langle B,S\rangle$ onto $\langle B_{g(x)},S\rangle$, contradicting set:well-order-no-initial-iso. This is correct. No gap.
- **Proposed fix:** No change needed.
- **Reported:** 2026-10-28 (10fede1)

### ISSUE-0011 [Open] Use of set:well-order-basic-lemmas.2 in Step 8 requires g(x)Sy
- **Category:** Missing hypothesis
- **Location:** set:well-order-trichotomy / Step 8
- **Detail:** The text uses $g(x)Sy$ (since $g$ maps into $B_{y}$) together with set:well-order-basic-lemmas.2 to conclude $\mathrm{pred}(B_{y},g(x),S)=B_{g(x)}$. This is exactly the hypothesis of lemma 3.14.2 ($yRx$ with $y=g(x)$, $x=y$). Correct.
- **Proposed fix:** No change needed.
- **Reported:** 2026-10-28 (10fede1)

### ISSUE-0012 [Open] Citation of set:surjection-cardinality for 'AC needed for section'
- **Category:** Improper link
- **Location:** set:injection-surjection-basic / hypcheck
- **Detail:** The hypcheck says: 'the converse of 4 (if a surjection $h\colon B\to A$ exists then there is $f$ with $h\circ f=\id_{A}$) generally requires AC (\ref{set:surjection-cardinality}).' The cited lemma 10.12 '全射と濃度' is about surjections and cardinality; whether it states exactly this section-existence claim is uncertain, but it is a plausible target. Not reported as improper.
- **Proposed fix:** No change needed.
- **Reported:** 2026-10-28 (10fede1)

### ISSUE-0013 [Open] Claim that ⟨Q,<⟩ is isomorphic to {x∈Q | x<0} via the given piecewise map
- **Category:** Supplement/remark error
- **Location:** supplement after set:well-order-no-initial-iso
- **Detail:** This is the same issue as the first: the piecewise map $x\mapsto -1/(1+x)$ (x≥0), $x\mapsto x-1$ (x<0) is not surjective onto $\{x\in\Q\mid x<0\}$: the interval $(-1,-1/2)$ (e.g. $-3/4$) is not in the image, since for $x\ge 0$ the value lies in $[-1,0)$ and for $x<0$ the value is $<-1$. Hence the claimed order-preserving bijection does not exist as described.
- **Proposed fix:** Replace the parenthetical with a correct argument: '$\langle\Q,<\rangle$ is also isomorphic to its initial segment $\{x\in\Q\mid x<0\}$: both are countable dense linear orders without endpoints, hence isomorphic by Cantor's back-and-forth theorem (or exhibit an explicit map, e.g. $x\mapsto x-1$ composed with a suitable order-preserving bijection of $\Q$ onto $\Q\cap(-\infty,0)$).'
- **Reported:** 2026-10-28 (10fede1)
