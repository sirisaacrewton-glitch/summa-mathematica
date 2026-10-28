# Verification tracker: `02-algebra/03-commutative-algebra/03-homological-methods/02-projective-dimension.html`

<!-- source: 02-algebra/03-commutative-algebra/03-homological-methods/02-projective-dimension.html -->
<!-- Managed by scripts/verify.py (GitHub Actions). To dispute an [Open] issue, add a line starting with
     **Opus Rebuttal:** at the end of that issue and push; the next run judges it. Do not edit other lines. -->

- Last verified: 2026-10-28 (commit 10fede1, deepseek-chat)
- Open: 1 / Resolved: 0 / Ignored: 0

## Summary of the last run

The page is logically sound: the proofs of minimal free resolution existence, Betti numbers, the pd/Tor characterization, the Auslander lemma on global dimension, and the Auslander–Buchsbaum formula (including the n=1 vs n>=2 split and the hypcheck) are correct, and the cited labels match their use. The only genuine problem is in the supplement, where the Hilbert syzygy theorem is described as the graded analogue of 'pd_A k = n' rather than of the global-dimension bound gl.dim = n (equivalently pd M <= pd k for all M); the statement of the theorem itself is correct, only the comparison is imprecise.

## Issues

### ISSUE-0001 [Open] Hilbert syzygy theorem bound and its relation to pd k
- **Category:** Supplement/remark error
- **Location:** supplement (ヒルベルトのシジジー定理)
- **Detail:** The supplement states that a finitely generated graded module over k[x_1,...,x_n] has a graded free resolution of length at most n, and calls this 'the graded version of pd_A k = n (example i=d) together with \ref{ring:pd-tor-k.2}'. The bound itself is correct (Hilbert syzygy theorem). However the comparison is imprecise: pd_A k = n is the statement that the residue field has projective dimension exactly n, whereas the syzygy theorem gives the bound pd M <= n for every finitely generated graded module. The correct analogue of the syzygy theorem is 'gl.dim k[x_1,...,x_n] = n', i.e. pd M <= n for all M, which is exactly what \ref{ring:pd-tor-k.2} (pd M <= pd k) combined with pd k = n yields. As written, 'pd_A k = n' alone does not give the bound for arbitrary M without invoking \ref{ring:pd-tor-k.2}, and the sentence conflates the two statements.
- **Proposed fix:** 体 $k$ 上の多項式環 $k[x_{1},\dots,x_{n}]$ 上の有限生成次数付き加群は、長さ $n$ 以下の次数付き自由分解をもつ（ヒルベルトのシジジー定理）。これは「$\operatorname{pd}_{A}k=n$ かつ $\operatorname{pd}M\le\operatorname{pd}_{A}k$（\ref{ring:pd-tor-k.2}）」の次数付き版、すなわち $\operatorname{gl.dim}k[x_{1},\dots,x_{n}]=n$ に対応し、局所環の極小自由分解と同じ議論が次数付き加群でも使える。
- **Reported:** 2026-10-28 (10fede1)
