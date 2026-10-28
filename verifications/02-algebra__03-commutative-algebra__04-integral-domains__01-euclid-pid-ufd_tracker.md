# Verification tracker: `02-algebra/03-commutative-algebra/04-integral-domains/01-euclid-pid-ufd.html`

<!-- source: 02-algebra/03-commutative-algebra/04-integral-domains/01-euclid-pid-ufd.html -->
<!-- Managed by scripts/verify.py (GitHub Actions). To dispute an [Open] issue, add a line starting with
     **Opus Rebuttal:** at the end of that issue and push; the next run judges it. Do not edit other lines. -->

- Last verified: 2026-10-28 (commit 8ccef3d, deepseek-chat)
- Open: 2 / Resolved: 0 / Ignored: 0

## Summary of the last run

The main body (definitions, propositions, theorems and their proofs) is logically sound: the Euclidean⇒PID⇒UFD chain, the Dedekind–Hasse criterion and the non-Euclidean PID example are correctly argued, and citations match their targets. The genuine problems are confined to side remarks: the remark after the Dedekind–Hasse proposition falsely claims the d=19 argument extends to d=43,67,163 (the polynomial x^2-x+(d+1)/4 does have the needed non-residues only for d=19), and the computational supplement misattributes/overstates the Fröhlich–Shepherdson undecidability result. These should be corrected; the rest is acceptable.

## Issues

### ISSUE-0001 [Open] Incorrect claim that the Step 2–3 argument works for d=43,67,163
- **Category:** Supplement/remark error
- **Location:** remark (after ring:pid-not-euclidean-fact)
- **Detail:** The remark claims that the argument of Steps 2–3 of \ref{ring:pid-not-euclidean} (showing that a Euclidean domain would force a quotient ring with 2 or 3 elements, hence a root of x^2-x+(d+1)/4 in F_2 or F_3) works equally for d=19,43,67,163. But that argument depends on the specific value d=19: the polynomial is x^2-x+(d+1)/4, and for d=43,67,163 the constant (d+1)/4 equals 11,17,41, which reduce to 2,2,2 mod 3 and 1,1,1 mod 2. For d=43: x^2-x+11 ≡ x^2+x+1 mod 2 (no root) and ≡ x^2-x+2 mod 3 (values 2,2,1, no root); similarly for 67 and 163 the reductions have no root in F_2 or F_3. So the argument gives no contradiction for these d, and the claim that it shows they are not Euclidean is false. (These rings are indeed not Euclidean, but that requires a different argument.)
- **Proposed fix:** Replace the last sentence by: "上の Step 2・3 の議論は $d=19$ に固有のものである（$x^{2}-x+(d+1)/4$ が $\mathbb{F}_{2}$, $\mathbb{F}_{3}$ に根をもたないことを使う）。$d=43,67,163$ についてもこれらの環がユークリッド環でないことは知られているが、別の議論を要する。"
- **Reported:** 2026-10-28 (8ccef3d)

### ISSUE-0002 [Open] Wrong attribution/year for the undecidability of irreducibility over computable fields
- **Category:** Supplement/remark error
- **Location:** supplement, 計算の観点
- **Detail:** The supplement states that over a computable field k, deciding irreducibility in k[x] can be algorithmically unsolvable, attributed to Fröhlich and Shepherdson, 1956. Fröhlich–Shepherdson (1956) is about the existence of computable fields with undecidable factorization/irreducibility problems, but the precise claim as phrased ("既約性の判定すらアルゴリズムで解けない例もある") together with the year is imprecise: their result concerns the undecidability of the factorization problem, and the standard reference for undecidability of irreducibility testing over computable fields is van der Waerden (1930) for the general phenomenon and Fröhlich–Shepherdson for specific fields; the blanket statement as written overstates and misattributes.
- **Proposed fix:** Rewrite as: "計算可能な体 $k$ 上の $k[x]$ では、既約性の判定がアルゴリズム的に決定できないような体 $k$ が存在する（フレーリッヒとシェファードソン、1956 年）。"
- **Reported:** 2026-10-28 (8ccef3d)
