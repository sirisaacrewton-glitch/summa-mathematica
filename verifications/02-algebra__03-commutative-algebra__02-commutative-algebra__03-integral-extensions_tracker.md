# Verification tracker: `02-algebra/03-commutative-algebra/02-commutative-algebra/03-integral-extensions.html`

<!-- source: 02-algebra/03-commutative-algebra/02-commutative-algebra/03-integral-extensions.html -->
<!-- Managed by scripts/verify.py (GitHub Actions). To dispute an [Open] issue, add a line starting with
     **Opus Rebuttal:** at the end of that issue and push; the next run judges it. Do not edit other lines. -->

- Last verified: 2026-10-28 (commit 10fede1, deepseek-chat)
- Open: 1 / Resolved: 0 / Ignored: 0

## Summary of the last run

The page is largely correct: the proofs of the integrality criterion, transitivity, Cohen–Seidenberg theorems, the going-down theorem and the transfer proposition are sound, and the hypcheck counterexamples (Z⊂Q, Z_{(2)}⊂Q, the eventually-finite sequences) are genuine. The only genuine problem found is in the closing remark, where the height inequality for primes in an integral extension is stated in the wrong direction and attributed to incomparability alone; the correct statement is equality of heights, obtained from going-up together with incomparability.

## Issues

### ISSUE-0001 [Open] Incorrect claim that ht q ≤ ht(q∩A) follows from incomparability
- **Category:** Supplement/remark error
- **Location:** remark 素イデアルの対応のまとめ
- **Detail:** The remark claims that 'the same argument (contracting a chain ending at q by the incomparability theorem)' gives $\operatorname{ht}\mathfrak{q}\le\operatorname{ht}(\mathfrak{q}\cap A)$. This is wrong: for an integral extension the correct inequality is the reverse, $\operatorname{ht}\mathfrak{q}\ge\operatorname{ht}(\mathfrak{q}\cap A)$ (going-up lifts a chain below $\mathfrak{q}\cap A$ to a chain below $\mathfrak{q}$), and in fact $\operatorname{ht}\mathfrak{q}=\operatorname{ht}(\mathfrak{q}\cap A)$ holds for integral extensions. Incomparability alone gives only that a chain in $B$ below $\mathfrak{q}$ maps to a strictly decreasing chain in $A$ below $\mathfrak{q}\cap A$, i.e. $\operatorname{ht}\mathfrak{q}\le\operatorname{ht}(\mathfrak{q}\cap A)$ only if one could also lift chains, which is the opposite direction. Concretely, $\Z\subset\Z[i]$ and $\mathfrak{q}=(1+i)$: $\operatorname{ht}\mathfrak{q}=1=\operatorname{ht}(2)$, consistent with equality, but the stated inequality direction as a general claim about contraction is not what incomparability yields; the correct general statement is $\operatorname{ht}\mathfrak{q}=\operatorname{ht}(\mathfrak{q}\cap A)$ for integral extensions (via going-up plus incomparability).
- **Proposed fix:** Replace the last sentence by: 'Moreover $\operatorname{ht}\mathfrak{q}=\operatorname{ht}(\mathfrak{q}\cap A)$: a chain below $\mathfrak{q}\cap A$ lifts by going-up to a chain below $\mathfrak{q}$ (so $\operatorname{ht}\mathfrak{q}\ge\operatorname{ht}(\mathfrak{q}\cap A)$), and a chain below $\mathfrak{q}$ contracts by incomparability to a strictly decreasing chain below $\mathfrak{q}\cap A$ (so $\operatorname{ht}\mathfrak{q}\le\operatorname{ht}(\mathfrak{q}\cap A)$).'
- **Reported:** 2026-10-28 (10fede1)
