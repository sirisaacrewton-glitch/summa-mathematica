# Verification tracker: `02-algebra/01-linear-algebra/05-multilinear/01-tensor.html`

<!-- source: 02-algebra/01-linear-algebra/05-multilinear/01-tensor.html -->
<!-- Managed by scripts/verify.py (GitHub Actions). To dispute an [Open] issue, add a line starting with
     **Opus Rebuttal:** at the end of that issue and push; the next run judges it. Do not edit other lines. -->

- Last verified: 2026-10-28 (commit 10fede1, deepseek-chat)
- Open: 3 / Resolved: 0 / Ignored: 0

## Summary of the last run

(none)

## Issues

### ISSUE-0001 [Open] Incorrect vec identity for Kronecker product
- **Category:** Supplement/remark error
- **Location:** supplement (計算の観点)
- **Detail:** The stated identity $(X\otimes Y)\operatorname{vec}(Z)=\operatorname{vec}(YZ{}^{t}X)$ is wrong. The standard identity is $(X\otimes Y)\,\operatorname{vec}(Z)=\operatorname{vec}(Y Z X^{t})$ (with column-stacking vec). As written, the right-hand side $YZ{}^tX$ has the wrong order and the wrong transpose placement; e.g. taking $X=Y=I$ gives $\operatorname{vec}(Z)$ on the left but $\operatorname{vec}(Z^{t})$ on the right, which differ for non-symmetric $Z$.
- **Proposed fix:** Replace with: $(X\otimes Y)\,\operatorname{vec}(Z)=\operatorname{vec}(YZX^{t})$ (column-stacking vec), which is the identity used to convert matrix equations such as the Sylvester equation $XZ+ZY=C$ into a large linear system.
- **Reported:** 2026-10-28 (10fede1)

### ISSUE-0002 [Open] Sylvester equation form does not match the vec identity
- **Category:** Supplement/remark error
- **Location:** supplement (計算の観点)
- **Detail:** The Sylvester equation is cited as $XZ+ZY=C$, but the standard Sylvester equation is $XZ+ZB=C$ (or $AZ+ZB=C$); with the vec identity $(X\otimes I + I\otimes B^{t})\operatorname{vec}(Z)=\operatorname{vec}(C)$ one solves $XZ+ZB=C$. The form $XZ+ZY=C$ with the same $Y$ appearing both as a coefficient and as the Kronecker factor is inconsistent with the stated reduction and is not the standard Sylvester equation.
- **Proposed fix:** State the Sylvester equation as $XZ+ZB=C$, which via $(X\otimes I+I\otimes B^{t})\operatorname{vec}(Z)=\operatorname{vec}(C)$ becomes a linear system in $\operatorname{vec}(Z)$.
- **Reported:** 2026-10-28 (10fede1)

### ISSUE-0003 [Open] Tensor rank NP-hardness attribution and scope
- **Category:** Supplement/remark error
- **Location:** supplement (似た定理)
- **Detail:** The claim that computing tensor rank is 'NP-hard (Håstad)' is imprecise. Håstad's 1990 result is that tensor rank is NP-hard (indeed NP-complete for the decision problem over the rationals); the statement should specify that this concerns the decision/computation problem for tensor rank of 3-tensors over a field such as $\mathbb{Q}$, and that it is the exact rank that is hard. As written ('計算が NP 困難') it is acceptable in spirit but the attribution and the precise object (exact tensor rank of order-3 tensors) should be made explicit to avoid overstatement.
- **Proposed fix:** Computing the exact tensor rank of order-3 tensors (the minimal number of pure tensors summing to a given tensor) is NP-hard (Håstad); unlike matrix rank it has no clean characterization and is hard to compute.
- **Reported:** 2026-10-28 (10fede1)
