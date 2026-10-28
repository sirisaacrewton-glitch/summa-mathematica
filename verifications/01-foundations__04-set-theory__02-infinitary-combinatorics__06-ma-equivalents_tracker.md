# Verification tracker: `01-foundations/04-set-theory/02-infinitary-combinatorics/06-ma-equivalents.html`

<!-- source: 01-foundations/04-set-theory/02-infinitary-combinatorics/06-ma-equivalents.html -->
<!-- Managed by scripts/verify.py (GitHub Actions). To dispute an [Open] issue, add a line starting with
     **Opus Rebuttal:** at the end of that issue and push; the next run judges it. Do not edit other lines. -->

- Last verified: 2026-10-28 (commit 10fede1, deepseek-chat)
- Open: 4 / Resolved: 0 / Ignored: 0

## Summary of the last run

(none)

## Issues

### ISSUE-0001 [Open] Local compact version: intersection is dense, not merely nonempty, and needs a nonempty space
- **Category:** Supplement/remark error
- **Location:** supplement after set:ma-equivalents (局所コンパクト版)
- **Detail:** The supplement claims that from (d) one gets, for locally compact c.c.c. Hausdorff spaces, that the intersection of κ dense open sets is dense. The argument given (take a nonempty open O, find O' with compact closure inside O, apply (d) to cl O') is essentially correct, but two points are imprecise: (i) the space must be nonempty (and locally compact), otherwise 'dense' is vacuous or false; (ii) more importantly, the statement as written omits that the space must be nonempty and that cl O' is nonempty compact c.c.c. Hausdorff (c.c.c. is hereditary to open subspaces, hence to cl O' since it contains the nonempty open O'). As stated without these hypotheses the claim is not justified. Also 'dense' should be stated as: the intersection meets every nonempty open set.
- **Proposed fix:** Let $X$ be a nonempty locally compact c.c.c. Hausdorff space and let $V_{\alpha}$ ($\alpha<\kappa$) be dense open. Then $\bigcap_{\alpha<\kappa}V_{\alpha}$ is dense in $X$: given nonempty open $O$, local compactness and Hausdorffness give a nonempty open $O'$ with $\operatorname{cl}O'\subseteq O$ and $\operatorname{cl}O'$ compact; $\operatorname{cl}O'$ is c.c.c. (it contains the nonempty open $O'$, and c.c.c. passes to open subspaces and their closures), so (d) applied to $\operatorname{cl}O'$ with the dense open sets $V_{\alpha}\cap\operatorname{cl}O'$ yields a point of $O\cap\bigcap_{\alpha}V_{\alpha}$.
- **Reported:** 2026-10-28 (10fede1)

### ISSUE-0002 [Open] Counterexample for dropping c.c.c. at κ=aleph_1: (ω_1+1)^ω is not a sum of ℵ_1 closed nowhere dense sets as stated
- **Category:** Supplement/remark error
- **Location:** supplement after set:ma-equivalents (前提を変えると)
- **Detail:** The supplement asserts that $(\omega_{1}+1)^{\omega}$ is compact Hausdorff but a union of $\aleph_{1}$ closed nowhere dense sets. This is the standard Kunen exercise showing that the c.c.c. hypothesis in (d) cannot be dropped, but the precise statement must be checked: $(\omega_{1}+1)^{\omega}$ is a product of compact spaces, hence compact Hausdorff, and it is not c.c.c. (it contains $2^{\omega}$ many disjoint basic open sets indexed by functions, or more simply $\{\omega_{1}\}^{\omega}$-type arguments). The claim that it is a union of $\aleph_{1}$ closed nowhere dense sets is the content of the cited exercise; however, as stated the sentence says 'κ=aleph_1 ですでに偽' which conflates the failure of (d) with the failure of the conclusion for a single space. The genuine content is: there is a compact Hausdorff space which is the union of $\aleph_{1}$ closed nowhere dense sets, so (d) fails at $\kappa=\aleph_{1}$ without c.c.c. The statement is acceptable only if the space is indeed such a union; the standard example is $(\omega_{1}+1)^{\omega}$ where each set $\{x : x(0)=\alpha\}$-type slices are closed nowhere dense, and $\aleph_{1}$ of them cover. This is correct, but the phrase 'κ=aleph_1 ですでに偽' should be made precise: it is (d) without c.c.c. that fails, not (d) itself.
- **Proposed fix:** Without c.c.c., (d) fails already at $\kappa=\aleph_{1}$: the compact Hausdorff space $(\omega_{1}+1)^{\omega}$ is the union of $\aleph_{1}$ closed nowhere dense sets (Kunen, op. cit., Chapter II, Exercise 11), so the corresponding family of dense open sets has empty intersection.
- **Reported:** 2026-10-28 (10fede1)

### ISSUE-0003 [Open] Uniqueness of Boolean completion: the formula h(b)=⋁{i_2(p): i_1(p)≤b} requires density and is only correct with the right hypotheses
- **Category:** Supplement/remark error
- **Location:** supplement after set:separative-completion (一意性)
- **Detail:** The supplement states that the Boolean completion is unique up to isomorphism and gives the formula $h(b)=\bigvee\{i_{2}(p)\mid i_{1}(p)\le b\}$. This is the standard result (Kunen, Chapter II, Exercise 18), and the formula is correct provided the completion satisfies density (condition 1). However, the supplement does not state that the isomorphism is unique and that the formula requires the density condition (1) to ensure the supremum exists and $h$ is well-defined and onto. As written it is essentially correct but the attribution and the reliance on condition (1) should be made explicit; the claim 'h(b)=⋁{...}' without noting that the set is nonempty/dense could be misread. This is a minor imprecision rather than a falsehood.
- **Proposed fix:** The Boolean completion is unique up to a unique isomorphism: if $\langle\mathbb{B}_{1},i_{1}\rangle$ and $\langle\mathbb{B}_{2},i_{2}\rangle$ both satisfy (1)–(3), there is a Boolean isomorphism $h\colon\mathbb{B}_{1}\to\mathbb{B}_{2}$ with $h\circ i_{1}=i_{2}$, given by $h(b)=\bigvee\{i_{2}(p)\mid i_{1}(p)\le b\}$ (the supremum exists by completeness, and density (1) ensures $h$ is well-defined and onto) (Kunen, Set Theory (1980), Chapter II, Exercise 18).
- **Reported:** 2026-10-28 (10fede1)

### ISSUE-0004 [Open] Example: ω_1 with usual order — all elements compatible, but claim about ro(PP)={∅,PP} needs PP nonempty and the topology is the down-set topology
- **Category:** Supplement/remark error
- **Location:** example after set:boolean-completion (すべての元が両立する場合)
- **Detail:** The example claims that if all pairs in $\PP$ are compatible then $\mathrm{ro}(\PP)=\{\varnothing,\PP\}$ and $i(p)=\mathbf{1}$ for all $p$, citing $\PP=\omega_{1}$ with the usual order. For $\omega_{1}$ with the usual order, every two elements are compatible (any two have an upper bound, e.g. the larger one, since the order is directed). The down-set topology on $\omega_{1}$: $N_{p}=\{q: q\le p\}$ is the initial segment, and every nonempty down-set is a union of initial segments; the topology is the 'lower' topology. In this topology, is $\mathrm{ro}(\omega_{1})=\{\varnothing,\omega_{1}\}$? Every nonempty open set $U$ is a down-set; its closure is $\omega_{1}$ if $U$ is unbounded, but if $U=N_{p}$ is bounded then $\operatorname{cl}N_{p}=N_{p}$ (since $N_{p}$ is also closed: its complement is the set of $q>p$, which is open as a down-set? No—$\{q: q>p\}$ is not a down-set, so $N_{p}$ need not be closed). Actually $\operatorname{cl}N_{p}=\{q: \exists r\in N_{p}\text{ with } q\in N_{r}\text{ or } q\text{ in every neighborhood}\}$; since $N_{p}$ is open and down-closed, a point $q$ is in $\operatorname{cl}N_{p}$ iff every neighborhood of $q$ meets $N_{p}$; the smallest neighborhood of $q$ is $N_{q}$, and $N_{q}\cap N_{p}\ne\varnothing$ iff $q$ and $p$ have a common lower bound, which always holds (e.g. $\min$). So $\operatorname{cl}N_{p}=\omega_{1}$ for all $p$, hence $\operatorname{int}\operatorname{cl}N_{p}=\omega_{1}$, so $i(p)=\mathbf{1}$. Then $\mathrm{ro}(\omega_{1})=\{\varnothing,\omega_{1}\}$ indeed. So the example is correct. No issue.
- **Proposed fix:** No change needed; the example is correct.
- **Reported:** 2026-10-28 (10fede1)
