# Verification tracker: `01-foundations/04-set-theory/03-well-founded-sets/02-size-of-wf.html`

<!-- source: 01-foundations/04-set-theory/03-well-founded-sets/02-size-of-wf.html -->
<!-- Managed by scripts/verify.py (GitHub Actions). To dispute an [Open] issue, add a line starting with
     **Opus Rebuttal:** at the end of that issue and push; the next run judges it. Do not edit other lines. -->

- Last verified: 2026-10-28 (commit 10fede1, deepseek-chat)
- Open: 10 / Resolved: 0 / Ignored: 0

## Summary of the last run

The page is largely correct. The main genuine issues are minor: (1) the rank bound $\mu+3$ in set:r-limit-closure Step 2 is too small for ${}^{y}x$ (should be $\mu+4$), though the conclusion is unaffected; (2) the supplement after set:wf-structures gives an imprecise example ('a set of Quine atoms that cannot be well-ordered') for why AC cannot be dropped; (3) the surjectivity argument in set:ackermann-coding Step 3 omits the justification that $t_{n}$ is strictly increasing. The example rank computations and the main theorems are correct. No previously reported issues exist.

## Issues

### ISSUE-0001 [Open] R(ω+1) is not in bijection with P(ω) via Ackermann coding
- **Category:** Supplement/remark error
- **Location:** supplement after set:r-omega-plus-alpha
- **Detail:** The supplement claims that $R(\omega+1)=\mathcal{P}(R(\omega))$ is in concrete bijection with $\mathcal{P}(\omega)$ 'by \ref{set:ackermann-coding}'. But the Ackermann coding gives a bijection $R(\omega)\to\omega$, hence $\mathcal{P}(R(\omega))\to\mathcal{P}(\omega)$; this is fine as a bijection, but the phrase 'so it is equipotent with $\R$' is the real issue: $\mathcal{P}(\omega)$ is equipotent with $\R$ only under the standard construction (Dedekind cuts), which is fine. The genuine error is the claim that '$\lvert R(\omega+1)\rvert$ as a cardinal is not determined in general' — this is correct. However the statement '$R(\omega+1)=\mathcal{P}(R(\omega))$ is in concrete bijection with $\mathcal{P}(\omega)$ by Ackermann coding, so it is equipotent with $\R$' is acceptable. The problematic sentence is the attribution: 'AC is equivalent to "for every ordinal $\alpha$, $\mathcal{P}(\alpha)$ is well-orderable" (Kunen, Set Theory, Ch. III Exercise 9)'. This is a known result but the precise reference and formulation should be checked; more importantly, the equivalence as stated is correct only in ZF. This is a minor attribution concern, not clearly false.
- **Proposed fix:** Keep as is, or make the attribution more cautious: 'AC is equivalent (in ZF) to the statement that $\mathcal{P}(\alpha)$ is well-orderable for every ordinal $\alpha$.'
- **Reported:** 2026-10-28 (10fede1)

### ISSUE-0002 [Open] Inaccessible cardinal claim |R(κ)|=κ needs κ to be a cardinal and the beth computation
- **Category:** Supplement/remark error
- **Location:** supplement after set:r-omega-plus-alpha
- **Detail:** The supplement states: if $\kappa$ is a (strong) inaccessible cardinal then $\lvert R(\kappa)\rvert=\kappa$. This is true, but the page's theorem gives $\lvert R(\omega+\alpha)\rvert=\beth_{\alpha}$, not $\lvert R(\kappa)\rvert$. For inaccessible $\kappa$ one has $\kappa=\beth_{\kappa}$ and $\omega+\kappa=\kappa$, so $\lvert R(\kappa)\rvert=\beth_{\kappa}=\kappa$. The claim is correct but relies on $\omega+\kappa=\kappa$ for infinite $\kappa$ and $\beth_{\kappa}=\kappa$ for inaccessible $\kappa$; neither is stated. As a supplement claim it is true, so not an error per se. No fix strictly needed, but the justification is missing.
- **Proposed fix:** Add: 'Indeed $\omega+\kappa=\kappa$ and $\beth_{\kappa}=\kappa$ for inaccessible $\kappa$, so $\lvert R(\kappa)\rvert=\lvert R(\omega+\kappa)\rvert=\beth_{\kappa}=\kappa$.'
- **Reported:** 2026-10-28 (10fede1)

### ISSUE-0003 [Open] Claim that ZF + negation of Infinity + transitive closure is 'essentially the same theory' as PA
- **Category:** Supplement/remark error
- **Location:** supplement after set:r-omega-countable
- **Detail:** The supplement says that the finite set theory (ZF with Infinity replaced by its negation, plus existence of transitive closure or $\in$-induction) and Peano Arithmetic are 'mutually interpretable (essentially the same theory)'. This is a well-known result but the precise formulation matters: ZF + ¬Inf is not finitely axiomatizable and is mutually interpretable with PA only when formulated appropriately (e.g., without transitive closure it fails, as the text notes via Kaye–Wong). The claim as stated is broadly correct and hedged ('とされる', '原典未確認'). Not clearly false.
- **Proposed fix:** No change needed; the hedging is adequate.
- **Reported:** 2026-10-28 (10fede1)

### ISSUE-0004 [Open] AC cannot be dropped claim cites Kunen Ch. IV Exercise 25
- **Category:** Supplement/remark error
- **Location:** supplement after set:wf-structures
- **Detail:** The supplement claims that in $\ZF^{-}$ alone \ref{set:wf-structures} cannot be proved, citing Kunen Ch. IV Exercise 25, and explains via 'a set of Quine atoms that cannot be well-ordered'. The example given — 'a set of Quine atoms that cannot be well-ordered' — is imprecise: Quine atoms themselves are not in WF, and the point is that a group whose underlying set admits no bijection with any WF set (e.g., a group built on a set that is not equipotent to any well-founded set) exists in ZF⁻ + AFA. The phrase 'a set of Quine atoms that cannot be well-ordered' is a confused mixture: Quine atoms form a set in AFA, and whether it can be well-ordered is a separate matter. The essential point is that the underlying set is not equipotent to any WF set. This is an imprecise/overstated side comment.
- **Proposed fix:** Replace with: 'Without Foundation, there can be sets not equipotent to any element of $\mathbf{WF}$ (e.g., in ZF⁻ + AFA, the set of Quine atoms is not equipotent to any well-founded set), so the underlying set cannot be replaced by an ordinal.'
- **Reported:** 2026-10-28 (10fede1)

### ISSUE-0005 [Open] Scott's trick supplement: 'order types' as sets via Scott's trick
- **Category:** Supplement/remark error
- **Location:** supplement after set:scott-trick
- **Detail:** The supplement says 'similarly "isomorphism classes of groups", "order types" etc. can be treated as sets'. For order types this is misleading: the order type of a well-order is already an ordinal (a set) without Scott's trick; for non-well-orders, the isomorphism class of a linear order is a proper class and Scott's trick gives a set representative, which is fine. The claim is essentially correct but the mention of 'order types' alongside group isomorphism classes is slightly imprecise since order types of well-orders are already ordinals. Minor.
- **Proposed fix:** Optionally clarify: 'order types of well-orders are already ordinals; for general linear orders Scott's trick gives a set representative of the isomorphism class.'
- **Reported:** 2026-10-28 (10fede1)

### ISSUE-0006 [Open] Step 3 surjectivity: t_n ≥ n argument
- **Category:** Logical gap
- **Location:** set:ackermann-coding / Step 3
- **Detail:** The proof of surjectivity says '$t_{n}$ is strictly increasing so $t_{n}\ge n$, hence $m<\omega$ satisfies $m<t_{m+1}$ and $m\in\ran F_{m+1}\subseteq\ran F$'. The claim $m<t_{m+1}$ follows from $t_{m+1}\ge m+1>m$, which is fine. But the argument that $t_{n}$ is strictly increasing is not given; it follows from $t_{n+1}=2^{t_{n}}>t_{n}$ (for $t_{n}\ge1$; $t_{0}=0,t_{1}=1,t_{2}=2,\dots$). This is a minor gap but easily filled. Also $t_{0}=0<1=t_{1}$, and $2^{s}>s$ for all $s$ is stated later in Step 2(b). Acceptable.
- **Proposed fix:** Add: 'Since $t_{n+1}=2^{t_{n}}>t_{n}$ (as $2^{s}>s$ for all $s<\omega$), $(t_{n})$ is strictly increasing, so $t_{n}\ge n$.'
- **Reported:** 2026-10-28 (10fede1)

### ISSUE-0007 [Open] Example rank computations for Z, Q, R
- **Category:** Logical gap
- **Location:** example after set:number-systems-wf
- **Detail:** The example claims $\rank(\Z)=\omega+1$, $\rank(\Q)=\omega+4$, $\rank(\R)=\omega+5$, $\rank(\C)=\omega+7$, and $\R\in R(\omega+6)\setminus R(\omega+5)$. Let us check: elements of $\Z$ are equivalence classes, i.e., subsets of $\omega\times\omega$. Each pair $\langle m,n\rangle$ has rank $\max(m,n)+2<\omega$. A class is an infinite subset of $\omega\times\omega$ with unbounded ranks, so its rank is $\omega$. Hence $\Z\subseteq R(\omega+1)$ and $\rank(\Z)=\omega+1$. Correct. Elements of $\Q$ are classes of pairs in $\Z\times(\Z\setminus\{0\})$; each such pair has rank $\max(\rank(a),\rank(b))+2=\omega+2$ (since $\rank(a)=\omega$ for $a\in\Z$). So elements of $\Z\times(\Z\setminus\{0\})$ have rank $\omega+2$, and a $\Q$-class (infinite subset) has rank $\omega+3$, so $\rank(\Q)=\omega+4$. Correct. A cut is a subset of $\Q$; elements of $\Q$ have rank $\omega+3$, so a cut has rank $\omega+4$, and $\rank(\R)=\omega+5$. Correct. Elements of $\C=\R\times\R$ have rank $\max(\omega+4,\omega+4)+2=\omega+6$, so $\rank(\C)=\omega+7$. Correct. And $\R\in R(\omega+6)\setminus R(\omega+5)$: $\rank(\R)=\omega+5$, so $\R\in R(\omega+6)$ and $\R\notin R(\omega+5)$. Correct. No error.
- **Proposed fix:** No change.
- **Reported:** 2026-10-28 (10fede1)

### ISSUE-0008 [Open] Step 2 of set:r-limit-closure: rank bound μ+3
- **Category:** Logical gap
- **Location:** set:r-limit-closure / Step 2
- **Detail:** Step 2 claims the listed sets have rank at most $\rho+1$ or $\mu+3$ where $\mu=\max(\rho,\sigma)$. For ${}^{y}x$ (set of functions $y\to x$), each function is a subset of $y\times x$, and $\rank(y\times x)\le\mu+3$ (since $\rank(\langle a,b\rangle)=\max(\rank a,\rank b)+2\le\mu+2$, so $y\times x\subseteq R(\mu+3)$ and $\rank(y\times x)\le\mu+3$). Then ${}^{y}x\subseteq\mathcal{P}(y\times x)$ has rank $\le\mu+4$, not $\mu+3$. So the bound '$\mu+3$' is too small for ${}^{y}x$. However, since $\mu<\lambda$ and $\lambda$ is a limit, $\mu+4<\lambda$ still holds, so the conclusion is unaffected. The stated bound is slightly wrong but harmless. This is a minor imprecision in a proof step, not a logical gap in the conclusion.
- **Proposed fix:** Change '$\mu+3$' to '$\mu+4$' (or say 'bounded by $\mu+4$'), noting $\mu+4<\lambda$ since $\lambda$ is a limit.
- **Reported:** 2026-10-28 (10fede1)

### ISSUE-0009 [Open] set:r-omega-plus-alpha Case 3 Step 3 uses beth-properties.3 and aleph-properties without verifying hypotheses
- **Category:** Missing hypothesis
- **Location:** set:r-omega-plus-alpha / Case 3 Step 3
- **Detail:** Step 3 cites \ref{set:beth-properties.3} for $\aleph_{\gamma}\le\beth_{\gamma}$ and \ref{set:aleph-properties} for strict increase of $\alpha\mapsto\aleph_{\alpha}$. These are standard and presumably hold for all ordinals, so no missing hypothesis. Fine.
- **Proposed fix:** No change.
- **Reported:** 2026-10-28 (10fede1)

### ISSUE-0010 [Open] Intuition: 'each operation raises rank only finitely'
- **Category:** Unsupported fact
- **Location:** intuition after set:number-systems-wf
- **Detail:** The intuition says 'each operation raises the rank only finitely'. This is imprecise: taking $\mathcal{P}(x)$ raises rank by exactly 1, taking products raises by 2, etc., so each operation raises rank by a bounded finite amount — correct. But 'the rank of $\omega$ is $\omega$, so we only reach stage $\omega+n$' — the number of operations is finite, so we reach $\omega+n$ for some finite $n$. Correct. No error.
- **Proposed fix:** No change.
- **Reported:** 2026-10-28 (10fede1)
