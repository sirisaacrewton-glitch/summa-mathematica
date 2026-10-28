# Verification tracker: `02-algebra/06-homological-algebra/02-derived-functors/09-delta-functors.html`

<!-- source: 02-algebra/06-homological-algebra/02-derived-functors/09-delta-functors.html -->
<!-- Managed by scripts/verify.py (GitHub Actions). To dispute an [Open] issue, add a line starting with
     **Opus Rebuttal:** at the end of that issue and push; the next run judges it. Do not edit other lines. -->

- Last verified: 2026-10-28 (commit 10fede1, deepseek-chat)
- Open: 2 / Resolved: 0 / Ignored: 0

## Summary of the last run

(none)

## Issues

### ISSUE-0001 [Open] Effaceable delta functor universality needs enough projectives in the proof, but supplement claims only morphism properties of B are used
- **Category:** Supplement/remark error
- **Location:** supplement / 前提を変えると, second bullet
- **Detail:** The supplement says the proof of \ref{ha:effaceable-universal} uses only properties of morphisms in B (kernels, monos), so it holds for a general abelian category B. But the proof crucially uses that A has enough projectives: Step 1 chooses an epimorphism P_a -> a from a projective object, and Step 3/4 use projectivity of P_{a''} to lift. The statement of \ref{ha:effaceable-universal} itself is about a delta functor on A with enough projectives; the claim that 'only morphism properties of B are used' is imprecise because it omits the hypothesis on A (enough projectives) and the requirement that S be effaceable with respect to projective objects of A. The claim about B being general is essentially correct, but the stated reason is wrong/incomplete.
- **Proposed fix:** The proof of \ref{ha:effaceable-universal} uses only that $\mathbf{A}$ has enough projectives (to choose $P_{a}\to a$ and to lift through projective objects) and only the abelian-category structure of $\mathbf{B}$ (kernels, monos, exactness). Hence it holds for any abelian category $\mathbf{B}$; the hypothesis on $\mathbf{A}$ (enough projectives) and the effaceability of $S$ on projective objects of $\mathbf{A}$ remain essential.
- **Reported:** 2026-10-28 (10fede1)

### ISSUE-0002 [Open] Claim that Tor balancing for noncommutative rings follows by 'the same argument' is overstated
- **Category:** Supplement/remark error
- **Location:** supplement / 前提を変えると, third bullet
- **Detail:** The supplement says commutativity was assumed only to switch right/left exactness and flatness of projectives, and that for noncommutative rings 'the same argument' with right and left modules interchanged gives balancing. This is misleading: for a noncommutative ring, $M\otimes_{R}N$ requires $M$ a right module and $N$ a left module, and $\mathrm{Tor}$ balancing between the two variables is not obtained by literally the same argument (the two variables live in different module categories, and one must use that projective right modules are flat and projective left modules are flat separately, plus a comparison of the two delta functors on different categories). The parenthetical '(here we have not verified)' softens it, but the assertion 'the same argument gives balancing' is stated more strongly than justified.
- **Proposed fix:** For a noncommutative ring $R$, with $M$ a right $R$-module and $N$ a left $R$-module, one defines $\mathrm{Tor}^{R}_{n}(M,N)$ via a projective resolution of $M$ (or of $N$); balancing still holds, but the argument must treat the right-module and left-module categories separately (using flatness of projective modules on each side) rather than by a literal interchange of the commutative case.
- **Reported:** 2026-10-28 (10fede1)
