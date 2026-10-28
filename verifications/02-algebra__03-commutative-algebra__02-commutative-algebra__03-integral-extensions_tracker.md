# Verification tracker: `02-algebra/03-commutative-algebra/02-commutative-algebra/03-integral-extensions.html`

<!-- source: 02-algebra/03-commutative-algebra/02-commutative-algebra/03-integral-extensions.html -->
<!-- Managed by scripts/verify.py (GitHub Actions). To dispute an [Open] issue, add a line starting with
     **Opus Rebuttal:** at the end of that issue and push; the next run judges it. Do not edit other lines. -->

- Last verified: 2026-10-28 (commit 8ccef3d, deepseek-chat)
- Open: 3 / Resolved: 0 / Ignored: 0

## Summary of the last run

The page is largely correct: the proofs of the integrality criterion, transitivity, lying-over, going-up, incomparability, going-down, and the transfer proposition are sound, and the hypcheck counterexamples (Z⊂Q, Z_{(2)}⊂Q, the eventually-constant sequences) are genuine. The main genuine problem is in the closing remark, where the height inequality for q and q∩A is stated in the wrong direction (the truth is equality, obtained via going-up plus incomparability, not the stated ≤). Two supplements/examples contain imprecise statements: the Grauert–Remmert criterion omits the height ≥ 2 hypothesis, and the normality of k[t^2] is justified loosely. No issues in the previously reported list.

## Issues

### ISSUE-0001 [Open] Incorrect claim that ht q ≤ ht(q∩A) follows from incomparability
- **Category:** Supplement/remark error
- **Location:** remark 素イデアルの対応のまとめ
- **Detail:** The remark claims that 'the same argument (contracting a chain ending at q via the incomparability theorem)' yields $\operatorname{ht}\mathfrak{q}\le\operatorname{ht}(\mathfrak{q}\cap A)$. This is wrong: for an integral extension the correct inequality is the reverse, $\operatorname{ht}\mathfrak{q}\ge\operatorname{ht}(\mathfrak{q}\cap A)$ (going-up lifts a chain below $\mathfrak{p}=\mathfrak{q}\cap A$ to a chain below $\mathfrak{q}$), and in fact equality $\operatorname{ht}\mathfrak{q}=\operatorname{ht}(\mathfrak{q}\cap A)$ holds. Incomparability alone gives only that a chain below $\mathfrak{q}$ maps to a strictly decreasing chain below $\mathfrak{p}$, i.e. $\operatorname{ht}(\mathfrak{q}\cap A)\ge\operatorname{ht}\mathfrak{q}$ is what contraction gives, but the actual truth is equality, so the stated inequality $\operatorname{ht}\mathfrak{q}\le\operatorname{ht}(\mathfrak{q}\cap A)$ is not the correct general statement and the justification given is insufficient (it would need going-up to get the reverse).
- **Proposed fix:** Replace with: 'and $\dim A=\dim B$ (\ref{ring:integral-dimension}); more precisely, for $\mathfrak{q}\in\Spec B$ with $\mathfrak{p}=\mathfrak{q}\cap A$ one has $\operatorname{ht}\mathfrak{q}=\operatorname{ht}\mathfrak{p}$: going-up lifts a chain below $\mathfrak{p}$ to one below $\mathfrak{q}$ (giving $\operatorname{ht}\mathfrak{q}\ge\operatorname{ht}\mathfrak{p}$), and incomparability shows a chain below $\mathfrak{q}$ contracts to a strictly decreasing chain below $\mathfrak{p}$ (giving $\operatorname{ht}\mathfrak{p}\ge\operatorname{ht}\mathfrak{q}$).'
- **Reported:** 2026-10-28 (8ccef3d)

### ISSUE-0002 [Open] Grauert–Remmert criterion misstated
- **Category:** Supplement/remark error
- **Location:** supplement 正規化の計算
- **Detail:** The supplement states the Grauert–Remmert criterion as: '$A$ is normal iff $\End_{A}(J)=A$' for $J$ a radical ideal whose zero set contains the non-normal locus. As stated this is not correct: the criterion requires $J$ to be an ideal of height $\ge 2$ (or, more precisely, $J$ must contain a non-zero-divisor and the relevant condition is that $J$ is not contained in any height-one prime / the non-normal locus has codimension $\ge 2$). Simply taking $J$ to be a radical ideal containing the non-normal locus does not make '$\End_{A}(J)=A$' equivalent to normality; e.g. for a normal $A$ any such $J$ works, but the equivalence direction needs the height condition. The statement as written is imprecise/overstated.
- **Proposed fix:** State: 'Grauert–Remmert criterion: for a Noetherian domain $A$ and an ideal $J\subset A$ of height $\ge 2$ (in particular $J$ not contained in any height-one prime), $A$ is normal iff $\End_{A}(J)=A$; taking $J$ to be a radical ideal of height $\ge 2$ whose zero set contains the non-normal locus gives a test for normality.'
- **Reported:** 2026-10-28 (8ccef3d)

### ISSUE-0003 [Open] Claim that k[t^2] is normal via 'polynomial ring' is imprecise
- **Category:** Supplement/remark error
- **Location:** example 逆向きは伝わらない, item 5
- **Detail:** Item 5 says '$k[t^{2}]\subset k[t]$ で $k[t^{2}]$ は正規（多項式環）'. $k[t^{2}]$ is isomorphic to a polynomial ring $k[u]$ (via $u\mapsto t^{2}$), so it is normal, but the parenthetical '多項式環' is only correct up to isomorphism; as a subring of $k[t]$ it is not literally a polynomial ring in the ambient variable. This is a minor imprecision but the justification as written ('polynomial ring') does not directly apply to $k[t^{2}]$ as given.
- **Proposed fix:** Say '$k[t^{2}]\cong k[u]$ is a polynomial ring, hence a UFD and normal (\ref{ring:ufd-normal})'.
- **Reported:** 2026-10-28 (8ccef3d)
