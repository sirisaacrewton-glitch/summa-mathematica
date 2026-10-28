# Verification tracker: `01-foundations/04-set-theory/01-basics/05-natural-numbers.html`

<!-- source: 01-foundations/04-set-theory/01-basics/05-natural-numbers.html -->
<!-- Managed by scripts/verify.py (GitHub Actions). To dispute an [Open] issue, add a line starting with
     **Opus Rebuttal:** at the end of that issue and push; the next run judges it. Do not edit other lines. -->

- Last verified: 2026-10-28 (commit 10fede1, deepseek-chat)
- Open: 2 / Resolved: 0 / Ignored: 0

## Summary of the last run

The page is largely correct: the construction of ω, the Peano axioms, the order-sum/product definitions and the arithmetic laws are proved with the cited results and the hypotheses (limit vs. successor, α>0) are checked. The only genuine problems are in the two supplements: the claim that H(ω_1) is a model of ZFC minus power set is false (replacement fails there), and the Dedekind uniqueness remark glosses over which structure the recursion runs on and which Peano axioms give injectivity/surjectivity. No issues were found in the proofs, hypchecks, or the counterexample environment.

## Issues

### ISSUE-0001 [Open] H(ω_1) does not model ZFC minus power set
- **Category:** Supplement/remark error
- **Location:** supplement (無限の長さの列)
- **Detail:** The supplement claims that in a model of ZFC without the power set axiom such as the hereditarily countable sets $H(\omega_{1})$, every function $\omega\to\omega$ exists as a set but the set ${}^{\omega}\omega$ of all of them does not. $H(\omega_{1})$ does satisfy that every function $\omega\to\omega$ is hereditarily countable, and ${}^{\omega}\omega\notin H(\omega_{1})$ is true. However $H(\omega_{1})$ does NOT satisfy ZFC minus power set: the replacement axiom fails in $H(\omega_{1})$ (e.g. $\omega$ is a set of $H(\omega_{1})$ and the function $n\mapsto\omega+n$ has image $\{\omega+n\mid n<\omega\}\notin H(\omega_{1})$, since its transitive closure is uncountable). So the example is not a model of the stated theory, and the claim that the operation 'cannot be obtained from the replacement axiom' is not supported by this example.
- **Proposed fix:** Replace the example with a correct one, e.g.: 「実際、$H(\aleph_{1})$ は分出・対・和集合の公理を満たし、$\omega\to\omega$ の関数はどれも元として存在するが、それら全体の集合 ${}^{\omega}\omega$ は存在しない（$H(\aleph_{1})$ は置換公理は満たさないことに注意）。」 Or state the claim only for the weaker theory (without replacement), and note that with the full replacement axiom the existence of ${}^{\omega}A$ is equivalent to a suitable power-set-like principle.
- **Reported:** 2026-10-28 (10fede1)

### ISSUE-0002 [Open] Peano structure uniqueness via transfinite recursion needs the recursion clause only on ω
- **Category:** Supplement/remark error
- **Location:** supplement (ペアノ構造の一意性)
- **Detail:** The supplement says: for any structure $(N,0_{N},s)$ satisfying (1)–(5), the function $h$ defined by recursion $h(0)=0_{N}$, $h(S(n))=s(h(n))$ via \ref{set:transfinite-recursion} is an isomorphism $\omega\to N$. As stated this is imprecise: the recursion theorem \ref{set:transfinite-recursion} is applied on the well-ordered set $\omega$, so the recursion clause is only available for arguments of the form $S(n)$ with $n\in\omega$; this is exactly what is needed, but the text should say that the recursion is performed along $\omega$ (not along $N$), and that injectivity/surjectivity of $h$ uses axioms (3),(4),(5) of the Peano structure. Without mentioning that (5) (induction in $N$) is used for surjectivity, the claim 'h is an isomorphism' is not justified by the cited theorem alone.
- **Proposed fix:** 「$\omega$ 上の超限再帰（\ref{set:transfinite-recursion} を整列集合 $(\omega,\in)$ に適用）で $h(0)=0_{N}$, $h(S(n))=s(h(n))$ と定める。$h$ が単射なのは (3)(4) から、全射なのは $N$ における帰納法 (5) から従い、$h$ は同型 $\omega\to N$ になる（デデキント）。」
- **Reported:** 2026-10-28 (10fede1)
