# Verification tracker: `02-algebra/02-group-theory/01-groups/06-products.html`

<!-- source: 02-algebra/02-group-theory/01-groups/06-products.html -->
<!-- Managed by scripts/verify.py (GitHub Actions). To dispute an [Open] issue, add a line starting with
     **Opus Rebuttal:** at the end of that issue and push; the next run judges it. Do not edit other lines. -->

- Last verified: 2026-10-28 (commit 10fede1, deepseek-chat)
- Open: 5 / Resolved: 0 / Ignored: 0

## Summary of the last run

The page is largely correct. The main proofs (internal direct product, CRT, semidirect product, internal semidirect product) are sound, and the hypcheck remarks are accurate. The only genuine imprecision is in the supplement's statement about when $\bar H$ is normal: the pointwise equivalence is correct but the conclusion 'normal only when $\theta$ is trivial' requires the quantifier over all $n$ and $h$, which should be made explicit. The dihedral example's remark about defining $D_{n}$ via semidirect product for all $n\ge 1$ is an overstated convention attribution that should be qualified for $n=1,2$. Other checked remarks (Z/4Z not a semidirect product, D_6 ≅ D_3 × Z/2Z, CRT non-coprime case) are correct.

## Issues

### ISSUE-0001 [Open] Normality of H-bar in semidirect product: condition misstated
- **Category:** Supplement/remark error
- **Location:** supplement (直積と半直積の違い)
- **Detail:** The supplement claims that $\bar H$ is normal iff $\theta_{h}(n)=n$ for all $n$, i.e. iff $\theta$ is trivial. The computation $(n,e)(e,h)(n,e)^{-1}=(n\,\theta_{h}(n)^{-1},h)$ shows that this element lies in $\bar H$ iff $n\theta_{h}(n)^{-1}=e$, i.e. $\theta_{h}(n)=n$. But this must hold for ALL $n\in N$ and ALL $h\in H$ simultaneously (since $\bar H$ normal requires $(g,h)(e,h')(g,h)^{-1}\in\bar H$ for every $g\in G$, $h'\in H$). The text's phrasing '$(n,e)(e,h)(n,e)^{-1}\in\bar H \iff \theta_{h}(n)=n$' is correct as a pointwise equivalence, but the surrounding sentence '$ar H$ は $	heta$ が自明なときに限り正規' is correct only because one quantifies over all $n,h$. As written the equivalence is fine, but the claim that $\bar H$ is normal 'only when $\theta$ is trivial' needs the quantifier 'for all $n$ and all $h$'; stated pointwise it would wrongly suggest that a single fixed point of $\theta_{h}$ makes $\bar H$ normal. This is a genuine imprecision in a side remark.
- **Proposed fix:** Replace with: '$\bar H$ is normal in $G$ if and only if $(n,e)(e,h)(n,e)^{-1}=(n\theta_{h}(n)^{-1},h)\in\bar H$ for all $n\in N$ and all $h\in H$, i.e. if and only if $\theta_{h}(n)=n$ for all $n,h$; equivalently $\theta$ is the trivial homomorphism.'
- **Reported:** 2026-10-28 (10fede1)

### ISSUE-0002 [Open] Z/4Z has no complement to 2Z/4Z: correct, but 'semidirect product of Z/2 by Z/2' phrasing
- **Category:** Supplement/remark error
- **Location:** supplement (直積と半直積の違い)
- **Detail:** The supplement says $\Z/4\Z$ is not a semidirect product of $\Z/2\Z$ and $\Z/2\Z$. This is correct: any semidirect product $\Z/2\rtimes\Z/2$ has order 4 and, since $\Aut(\Z/2)$ is trivial, is the direct product $\Z/2\times\Z/2\cong V$, not $\Z/4\Z$. The reasoning given ('the subgroup of order 2 is itself, so no complement') is also correct. No error here; verified as sound.
- **Proposed fix:** No change needed.
- **Reported:** 2026-10-28 (10fede1)

### ISSUE-0003 [Open] D_6 ≅ D_3 × Z/2Z remark in problem solution
- **Category:** Supplement/remark error
- **Location:** grp:prob-center-product / solution
- **Detail:** The parenthetical remark claims $D_{6}\cong D_{3}\times\Z/2\Z$ using $\ang{r^{2},s}$ (order 6, normal) and $Z(D_{6})=\{e,r^{3}\}$. Check: $\ang{r^{2},s}$ has order 6 and is normal (index 2), $Z(D_{6})=\{e,r^{3}\}$ has order 2, intersection trivial, product order 12 = $|D_{6}|$. And $\ang{r^{2},s}\cong D_{3}$ since $(r^{2})^{3}=e$, $s^{2}=e$, $sr^{2}s=r^{-2}$. So the isomorphism holds. This is correct.
- **Proposed fix:** No change needed.
- **Reported:** 2026-10-28 (10fede1)

### ISSUE-0004 [Open] Dihedral group as semidirect product for n=1,2 and 'definition' claim
- **Category:** Unsupported fact
- **Location:** grp:dihedral-semidirect
- **Detail:** The example states that the right-hand side $\Z/n\Z\rtimes_{\theta}\Z/2\Z$ with $\theta_{1}(x)=-x$ makes sense for all $n\ge 1$, and that 'some authors define the dihedral group of order $2n$ this way'. For $n=1$ this gives $\Z/1\rtimes\Z/2\cong\Z/2$, which is not usually called a dihedral group of order 2 (some call it $D_{1}$ or exclude it). For $n=2$ it gives $V$, which is $D_{2}$ in some conventions but $\Z/2\times\Z/2$ is not the usual 'dihedral group of order 4' in the geometric sense (the symmetry group of a 2-gon). The claim that 'this is used as the definition by some authors' is a historical/conventional attribution stated without support and is at least imprecise: the standard algebraic definition $\ang{r,s\mid r^{n}=s^{2}=e, srs=r^{-1}}$ gives $D_{1}\cong\Z/2$ and $D_{2}\cong V$, consistent, but calling $\Z/1\rtimes\Z/2$ a dihedral group is nonstandard. This is a side remark with an overstated attribution.
- **Proposed fix:** Restrict to $n\ge 2$ or add: 'For $n=1$ the group $\Z/1\Z\rtimes\Z/2\Z\cong\Z/2\Z$ is sometimes denoted $D_{1}$; for $n=2$ it is $V\cong D_{2}$. The convention that $D_{n}$ denotes this semidirect product for all $n\ge 1$ is used in some texts, but the geometric definition requires $n\ge 3$.'
- **Reported:** 2026-10-28 (10fede1)

### ISSUE-0005 [Open] CRT Step 1: kernel contains mnZ but factor-through-quotient needs kernel = mnZ
- **Category:** Logical gap
- **Location:** grp:chinese-remainder-group / Step 1
- **Detail:** Step 1 says the kernel of $\Z\to\Z/m\Z\times\Z/n\Z$ is $m\Z\cap n\Z$, which contains $mn\Z$, and then invokes \ref{grp:factor-through-quotient} to get $\Phi:\Z/mn\Z\to\cdots$. The factorization through $\Z/mn\Z$ requires $mn\Z\subseteq\ker$, which holds. But for $\Phi$ to be well-defined as stated this is enough; however the map $\Phi$ is only injective if $\ker=mn\Z$, which is NOT true when $\gcd(m,n)>1$ (then $m\Z\cap n\Z=\lcm(m,n)\Z\supsetneq mn\Z$). The proof later (Step 4) handles the non-coprime case separately by an order argument, so no false conclusion results. But Step 1's phrasing 'その核は $m\Z\cap n\Z$ で、$mn\Z$ を含む' followed by factorization is fine for well-definedness. No actual gap: Step 3 uses surjectivity + equal orders to conclude bijective, which is valid. Verified sound.
- **Proposed fix:** No change needed; the argument is complete.
- **Reported:** 2026-10-28 (10fede1)
