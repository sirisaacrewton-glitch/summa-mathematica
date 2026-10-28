# Verification tracker: `02-algebra/01-linear-algebra/05-multilinear/03-applications.html`

<!-- source: 02-algebra/01-linear-algebra/05-multilinear/03-applications.html -->
<!-- Managed by scripts/verify.py (GitHub Actions). To dispute an [Open] issue, add a line starting with
     **Opus Rebuttal:** at the end of that issue and push; the next run judges it. Do not edit other lines. -->

- Last verified: 2026-10-28 (commit 8ccef3d, deepseek-chat)
- Open: 4 / Resolved: 0 / Ignored: 0

## Summary of the last run

The main results (determinant-volume, exterior inner product, Hodge star, polarization) are correctly proved. The serious problems are concentrated in the remark on tensor rank: the claim that the 2×2 matrix multiplication tensor has rank 7 is an overstatement (only border rank 7 is known), and the field-dependence example in format 2×2×2 is misstated. The hypcheck comment on characteristic p conflates failure of polarization with failure of Sym^d ≅ polynomials. A minor gap exists in the non-invertible case of the volume proof.

## Issues

### ISSUE-0001 [Open] Rank of the 2×2 matrix multiplication tensor is not 7
- **Category:** Supplement/remark error
- **Location:** remark 3 次以上のテンソルの階数, item 3
- **Detail:** The remark states that the tensor of 2×2 matrix multiplication has rank 7, citing Strassen's upper bound and Winograd's lower bound. In fact the rank of the 2×2 matrix multiplication tensor is exactly 7 only as an upper bound from Strassen's algorithm; the known lower bound is 7 for the border rank (Winograd/Landsberg), while the exact tensor rank of the 2×2 matrix multiplication tensor is not known to be 7 (the best known lower bound for the rank is 7 only in the border rank sense; the rank itself is known to be at most 7 and at least 7 is not established — the standard statement is that border rank is 7 and rank is 7 or possibly higher, with rank 7 conjectured). Asserting rank = 7 as a theorem is an overstatement.
- **Proposed fix:** Replace with: "The tensor of $2\times2$ matrix multiplication has border rank $7$ (Winograd), and Strassen's algorithm shows its rank is at most $7$; the exact rank is not known (it is conjectured to be $7$). This gives a matrix multiplication algorithm using $7$ multiplications."
- **Reported:** 2026-10-28 (8ccef3d)

### ISSUE-0002 [Open] Claim that rank-3 tensor over R becomes rank 2 over C is false as stated
- **Category:** Supplement/remark error
- **Location:** remark 3 次以上のテンソルの階数, item 2
- **Detail:** The remark claims there is a tensor in $\mathbb{R}^{2}\otimes\mathbb{R}^{2}\otimes\mathbb{R}^{2}$ with rank 3 over $\mathbb{R}$ but rank 2 over $\mathbb{C}$. For $2\times2\times2$ tensors, the maximal rank over $\mathbb{R}$ is 3, and tensors of real rank 3 can indeed drop to complex rank 2 — but the standard example is the tensor $e_{1}\otimes e_{2}\otimes e_{3}+e_{2}\otimes e_{3}\otimes e_{1}+e_{3}\otimes e_{1}\otimes e_{2}$ in $\mathbb{R}^{3\otimes3}$, not in $\mathbb{R}^{2\otimes3}$. In $\mathbb{R}^{2}\otimes\mathbb{R}^{2}\otimes\mathbb{R}^{2}$ the generic rank is 2 over both $\mathbb{R}$ and $\mathbb{C}$, and the specific claim that a rank-3 real tensor of format $2\times2\times2$ has complex rank 2 is not a standard fact (the well-known field-dependence example is the format $2\times2\times2$ tensor of rank 3 over $\mathbb{R}$ whose complex rank is also 3, or the $3\times3\times3$ example). The statement as written is imprecise/misattributed.
- **Proposed fix:** Replace with a correct example: "Rank depends on the field: the tensor $e_{1}\otimes e_{2}\otimes e_{3}+e_{2}\otimes e_{3}\otimes e_{1}+e_{3}\otimes e_{1}\otimes e_{2}\in\mathbb{R}^{3}\otimes\mathbb{R}^{3}\otimes\mathbb{R}^{3}$ has rank $3$ over $\mathbb{R}$ but rank $2$ over $\mathbb{C}$."
- **Reported:** 2026-10-28 (8ccef3d)

### ISSUE-0003 [Open] Hypcheck claim about char p ≤ d symmetric tensors vs polynomials is imprecise
- **Category:** Supplement/remark error
- **Location:** hypcheck, 標数の条件
- **Detail:** The hypcheck says that in characteristic $p\le d$, symmetric tensors and polynomials (elements of the symmetric algebra) do not coincide, illustrating with $x^{2}$ over $\mathbb{F}_{2}$. But $\operatorname{Sym}^{d}(V^{*})$ is by definition the degree-$d$ part of the symmetric algebra, so it always coincides with the space of homogeneous polynomial functions of degree $d$; what fails in small characteristic is the equivalence between symmetric $d$-linear forms and homogeneous polynomials (polarization), not the identification of symmetric tensors with polynomials. The example about $x^{2}$ over $\mathbb{F}_{2}$ illustrates the failure of polarization, not a failure of $\operatorname{Sym}^{d}\cong$ polynomials.
- **Proposed fix:** Replace with: "In characteristic $p\le d$ the polarization formula fails because $d!$ is not invertible, so symmetric $d$-linear forms are no longer equivalent to homogeneous polynomials of degree $d$ (e.g. over $\mathbb{F}_{2}$ the polynomial $x^{2}$ cannot be recovered from the symmetric bilinear form $\beta(u,v)$ via $\beta(v,v)$, since $\beta(v,v)$ determines only the 'diagonal'). The identification $\operatorname{Sym}^{d}(V^{*})\cong$ homogeneous polynomials of degree $d$ still holds."
- **Reported:** 2026-10-28 (8ccef3d)

### ISSUE-0004 [Open] Step 4 of det-volume: non-invertible case ignores S not contained in image
- **Category:** Logical gap
- **Location:** lin:det-volume / proof Step 4
- **Detail:** Step 4 argues that if $T$ is not invertible then $T(\mathbb{R}^{n})$ lies in a hyperplane of measure $0$, hence both sides are $0$. This is correct for $\operatorname{vol}(T(S))=0$, but the argument as written only shows $\operatorname{vol}(T(\mathbb{R}^{n}))=0$; since $T(S)\subset T(\mathbb{R}^{n})$ this does give $\operatorname{vol}(T(S))=0$, so the conclusion holds. However the step does not explicitly note $T(S)\subseteq T(\mathbb{R}^{n})$; more importantly, the equality $\operatorname{vol}(T(S))=|\det T|\operatorname{vol}(S)$ requires $S$ measurable and $T(S)$ measurable (image of measurable under linear map is measurable, which is true but not stated). This is a minor gap.
- **Proposed fix:** Add: "Since $T(S)\subseteq T(\mathbb{R}^{n})$ and $T(\mathbb{R}^{n})$ is contained in a hyperplane of measure $0$, we get $\operatorname{vol}(T(S))=0=|\det T|\operatorname{vol}(S)$ (using $\det T=0$). Also $T(S)$ is measurable as the image of a measurable set under a linear map."
- **Reported:** 2026-10-28 (8ccef3d)
**Opus Rebuttal:** $T(S)\subseteq T(\mathbb{R}^{n})$ is immediate and is how the step concludes; measurability is part of the hypotheses of the statement.
