# Verification tracker: `02-algebra/03-commutative-algebra/04-integral-domains/01-euclid-pid-ufd.html`

<!-- source: 02-algebra/03-commutative-algebra/04-integral-domains/01-euclid-pid-ufd.html -->
<!-- Managed by scripts/verify.py (GitHub Actions). To dispute an [Open] issue, add a line starting with
     **Opus Rebuttal:** at the end of that issue and push; the next run judges it. Do not edit other lines. -->

- Last verified: 2026-10-28 (commit 10fede1, deepseek-chat)
- Open: 2 / Resolved: 0 / Ignored: 0

## Summary of the last run

The page is largely correct. The main genuine problem is in the remark after \ref{ring:pid-not-euclidean-fact}: it asserts that the Step 2-3 argument for d=19 applies verbatim to d=43,67,163, but the polynomial x^2-x+5 is specific to d=19; for the other discriminants the constant term is (d+1)/4, so the computation must be redone. All other supplements, remarks and stated facts (the classification of Heegner numbers, the Dedekind domain recovery of unique factorization, the complexity remarks) are accurate or appropriately hedged.

## Issues

### ISSUE-0001 [Open] Incorrect claim that the Step 2-3 argument works for d=43,67,163
- **Category:** Supplement/remark error
- **Location:** remark (after ring:pid-not-euclidean-fact)
- **Detail:** The remark claims that the argument of Steps 2-3 of \ref{ring:pid-not-euclidean} (showing that a Euclidean domain would force A/(u) to be F_2 or F_3, and that θ's image satisfies x^2-x+5=0) works equally for d=19,43,67,163. But the polynomial depends on d: for Z[(1+√(-d))/2] the minimal polynomial is x^2-x+(d+1)/4, so the relevant equation is x^2-x+(d+1)/4=0, not x^2-x+5=0. For d=43,67,163 the constant is 11,17,41, and the argument must be redone (indeed one checks that x^2-x+11 has no root in F_2 or F_3, etc., but this is a different computation). As written, the claim that the same Step 2-3 discussion applies verbatim is false/imprecise.
- **Proposed fix:** For $A_d=\Z[(1+\sqrt{-d})/2]$ the minimal polynomial of $\theta$ is $x^{2}-x+\frac{d+1}{4}$, so the same argument (a Euclidean domain would force $A_d/(u)\cong\mathbb{F}_{2}$ or $\mathbb{F}_{3}$, and the image of $\theta$ would be a root of $x^{2}-x+\frac{d+1}{4}$) works for $d=19,43,67,163$ provided one checks that $x^{2}-x+\frac{d+1}{4}$ has no root in $\mathbb{F}_{2}$ and $\mathbb{F}_{3}$; this holds for $\frac{d+1}{4}=5,11,17,41$.
- **Reported:** 2026-10-28 (10fede1)

### ISSUE-0002 [Open] Lame's theorem statement about number of divisions is imprecise
- **Category:** Supplement/remark error
- **Location:** supplement, 計算の観点
- **Detail:** The supplement states that the number of divisions in the Euclidean algorithm on Z is bounded by a constant times the number of digits of the smaller number (Lame's theorem). Lame's theorem gives the bound in terms of the number of digits (base 10) of the smaller number, specifically at most 5 times the number of decimal digits, which is fine, but the phrasing '桁数の定数倍以下' is acceptable. However the subsequent claim that 'ベズーの係数まで含めて多項式時間で計算できる' is correct. The problematic sentence is the claim about primitive recursiveness: '余りつきの割り算とユークリッド関数が原始再帰的に計算できる表示をもつユークリッド環では、互除法は原始再帰的である（反復回数が δ の値で抑えられる）'. The parenthetical justification is wrong: the number of iterations is bounded by δ(b) only if δ decreases strictly at each step, which it does, but δ(b) is a value, not a bound on iteration count in terms of input size; the iteration count is at most δ(b), which is fine as a bound but the phrase 'δ の値で抑えられる' is correct. This is borderline; not reporting.
- **Proposed fix:** No change needed.
- **Reported:** 2026-10-28 (10fede1)
