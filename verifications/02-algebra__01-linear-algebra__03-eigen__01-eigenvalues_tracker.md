# Verification tracker: `02-algebra/01-linear-algebra/03-eigen/01-eigenvalues.html`

<!-- source: 02-algebra/01-linear-algebra/03-eigen/01-eigenvalues.html -->
<!-- Managed by scripts/verify.py (GitHub Actions). To dispute an [Open] issue, add a line starting with
     **Opus Rebuttal:** at the end of that issue and push; the next run judges it. Do not edit other lines. -->

- Last verified: 2026-10-28 (commit 10fede1, deepseek-chat)
- Open: 4 / Resolved: 0 / Ignored: 0

## Summary of the last run

The main body (Cayley–Hamilton over commutative rings, minimal polynomial, kernel decomposition, diagonalizability criteria, triangularization, nilpotent trace) is logically sound and the cited results match their uses. The genuine problems are concentrated in the side material: the supplement's claim that eigenvalues are 'algebraically impossible' to compute for degree ≥5 is false/imprecise (it should say 'not expressible by radicals in general'), and the 'high viewpoint' remark identifying roots of χ_X with the support in Spec k[t] is imprecise over non-algebraically-closed fields. The semisimplicity remark is essentially correct but would benefit from the finite-dimensional/torsion qualifier. The hypcheck's rotation example is correct.

## Issues

### ISSUE-0001 [Open] Incorrect claim that eigenvalues cannot be computed algebraically for degree ≥5
- **Category:** Supplement/remark error
- **Location:** supplement (前提を弱めると / 計算の観点)
- **Detail:** The supplement says finding roots of the characteristic polynomial is '一般に（5 次以上では）代数的には不可能' (algebraically impossible in general for degree ≥5). This conflates two distinct facts: (a) there is no general formula expressing roots by radicals for degree ≥5 (Abel–Ruffini), and (b) roots can always be computed algebraically (e.g. by exact real-algebraic-number arithmetic / Sturm sequences / isolating intervals). The statement as written is false: eigenvalues of an integer matrix are algebraic numbers and are computable exactly. Also '代数的には不可能' is imprecise even for the radical-solvability claim, which is about solvability by radicals, not 'algebraic computability'.
- **Proposed fix:** **計算の観点.** 固有多項式の根を一般には冪根だけを用いて書き表すことはできない（5 次以上、アーベル–ルフィニ）。数値的には固有値を直接反復法（QR 法など）で計算し、固有多項式を経由しないことが多い（\ref{lin:page-matrix-functions}）。
- **Reported:** 2026-10-28 (10fede1)

### ISSUE-0002 [Open] Support of the k[t]-module is the set of eigenvalues, but 'roots of chi_X' vs 'support' needs the algebraic-closure/base-field caveat
- **Category:** Supplement/remark error
- **Location:** remark 行列は k[t] 加群
- **Detail:** The remark states 'χ_X の根（固有値）は Spec k[t] 上の加群 V の台'. Over a non-algebraically-closed field k, the support of V as a k[t]-module is the set of primes (t−λ) with λ ∈ k that are eigenvalues; roots of χ_X lying outside k are not points of Spec k[t] (they correspond to points of Spec over the algebraic closure, or to primes of k[t] only after base change). As stated, identifying 'roots of χ_X' with 'support in Spec k[t]' is imprecise when χ_X has non-rational roots.
- **Proposed fix:** 幾何的には、$k$ 上の加群 $V$ の台は $\operatorname{Spec}k[t]$ の点 $(t-\lambda)$（$\lambda\in k$ が固有値）からなり、$\chi_{X}$ の $k$ に属さない根は $\bar{k}$ への係数拡大後の台の点に対応する。重複度は各点での長さにあたる。
- **Reported:** 2026-10-28 (10fede1)

### ISSUE-0003 [Open] Diagonalizability iff the k[t]-module is semisimple — needs the module to be finite-dimensional/torsion, and 'semisimple' meaning
- **Category:** Supplement/remark error
- **Location:** supplement (似た定理)
- **Detail:** The supplement claims diagonalizability of X over a field is equivalent to the k[t]-module k^n being semisimple. This is correct for finite-dimensional modules over k[t] (a PID), where semisimple = direct sum of simples = direct sum of copies of k[t]/(t−λ). However the statement as written omits that k^n is finite-dimensional (torsion) and that 'semisimple' is in the category of k[t]-modules; without the torsion/finite-generation hypothesis the equivalence can fail (e.g. the free module k[t] is not a direct sum of simples but corresponds to no finite matrix). Since the context is k^n this is essentially fine, but the claim '一般の X の構造は…構造定理で記述される' is acceptable. This is borderline; the main imprecision is the missing 'finite-dimensional/torsion' qualifier.
- **Proposed fix:** 体上の対角化可能性は、有限次元 $k[t]$ 加群 $k^{n}$（$t$ が $X$ として作用）が半単純（単純加群の直和）であることと同値で、一般の $X$ の構造は PID $k[t]$ 上の有限生成 torsion 加群の構造定理でジョルダン標準形・有理標準形として記述される（\tref{lin:page-jordan}）。
- **Reported:** 2026-10-28 (10fede1)

### ISSUE-0004 [Open] Hypcheck claim that the rotation matrix is diagonalizable over C
- **Category:** Unsupported fact
- **Location:** hypcheck (体であること・分解すること)
- **Detail:** The hypcheck says the real rotation matrix [[0,-1],[1,0]] 'は χ=t^2+1 で固有値がなく、三角化も対角化もできない（C 上では対角化可能）'. Over C the matrix has distinct eigenvalues ±i, so it is indeed diagonalizable — this is correct. No issue.
- **Proposed fix:** No change needed.
- **Reported:** 2026-10-28 (10fede1)
