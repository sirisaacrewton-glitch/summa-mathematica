# Verification tracker: `05-geometry-topology/02-algebraic-topology/01-homotopy/02-covering-spaces.html`

<!-- source: 05-geometry-topology/02-algebraic-topology/01-homotopy/02-covering-spaces.html -->
<!-- Managed by scripts/verify.py (GitHub Actions). To dispute an [Open] issue, add a line starting with
     **Opus Rebuttal:** at the end of that issue and push; the next run judges it. Do not edit other lines. -->

- Last verified: 2026-10-28 (commit 10fede1, deepseek-chat)
- Open: 2 / Resolved: 0 / Ignored: 0

## Summary of the last run

The page is in good shape: the proofs of unique lifting, path/homotopy lifting, the monodromy action, the lifting criterion, the deck group theorem and the classification theorem are logically sound, and the hypotheses of cited results are verified. The only genuine problems are in the supplements: the Galois-correspondence table asserts $\operatorname{Aut}(K/k)\cong N(H)/H$ in general (true only in the Galois case), and the 'computational viewpoint' supplement overstates that all $n$-sheeted coverings can be enumerated in finite time, which conflicts with the undecidability of the word problem mentioned in the same paragraph.

## Issues

### ISSUE-0001 [Open] Galois correspondence table row: Aut(K/k) ≅ N(H)/H is wrong
- **Category:** Supplement/remark error
- **Location:** supplement (一般化と高い視点), table row 'Aut(K/k)≅N(H)/H'
- **Detail:** In the field-theory column, for an intermediate field $K$ corresponding to a subgroup $H$ of the absolute Galois group, the automorphism group of $K/k$ is $N(H)/H$ only when $K/k$ is Galois (i.e. $H$ is normal). In general $\operatorname{Aut}(K/k)$ is not $N(H)/H$; the correct general statement is that $\operatorname{Aut}(K/k)\cong N(H)/H$ holds precisely in the Galois/normal case, and the covering side $\operatorname{Aut}(p)\cong N(H)/H$ is the analogue of the normalizer quotient, not of $\operatorname{Aut}(K/k)$ in general. Presenting them as identical in a table row asserts a false general equality.
- **Proposed fix:** Replace the row with: `| $\operatorname{Aut}(K/k)\cong N(H)/H$（$K/k$ がガロアのとき。一般には $\operatorname{Aut}(K/k)$ は $N(H)/H$ とは限らない） | $\operatorname{Aut}(p)\cong N(H)/H$（正則被覆のとき $=\pi_{1}/H$） |`, or state explicitly that the identification $\operatorname{Aut}(K/k)\cong N(H)/H$ requires $K/k$ to be Galois.
- **Reported:** 2026-10-28 (10fede1)

### ISSUE-0002 [Open] Claim that all n-sheeted coverings can be enumerated in finite time is overstated
- **Category:** Supplement/remark error
- **Location:** supplement 計算の観点
- **Detail:** The supplement claims that for a finite CW complex, assigning permutations in $S_{n}$ to the generators satisfying the relations enumerates all $n$-sheeted coverings 'in finite time'. This is not a finite procedure: one must decide whether a given assignment satisfies the relations, i.e. whether the corresponding words are trivial in the finitely presented group, which is undecidable in general (as the same supplement itself notes via the word problem). So the enumeration is not effective/finite-time in general; only the correspondence is valid.
- **Proposed fix:** Weaken to: '指数 $n$ の部分群（の共役類）は $n$ 葉の連結な被覆と対応するので、原理的には $\{1,\dots,n\}$ への推移的な作用（生成元に置換を割り当て、関係式を満たすもの）と一対一に対応する。ただし「関係式を満たすか」の判定は一般には決定不能なので、有限時間での列挙は保証されない。'
- **Reported:** 2026-10-28 (10fede1)
