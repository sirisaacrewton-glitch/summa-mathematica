# Verification tracker: `02-algebra/01-linear-algebra/05-multilinear/01-tensor.html`

<!-- source: 02-algebra/01-linear-algebra/05-multilinear/01-tensor.html -->
<!-- Managed by scripts/verify.py (GitHub Actions). To dispute an [Open] issue, add a line starting with
     **Opus Rebuttal:** at the end of that issue and push; the next run judges it. Do not edit other lines. -->

- Last verified: 2026-10-28 (commit 8ccef3d, deepseek-chat)
- Open: 2 / Resolved: 0 / Ignored: 0

## Summary of the last run

The page is largely correct. The main genuine problem is in the supplement's '計算の観点': the vec identity for the Kronecker product is stated incorrectly (should be $(X\otimes Y)\operatorname{vec}(Z)=\operatorname{vec}(XZ\,{}^{t}Y)$), which also makes the Sylvester-equation illustration misleading. The tensor-rank NP-hardness attribution to Håstad is essentially correct. Proofs and the hypcheck appear sound.

## Issues

### ISSUE-0001 [Open] Incorrect vec identity for Kronecker product
- **Category:** Supplement/remark error
- **Location:** supplement / 計算の観点
- **Detail:** The stated identity $(X\otimes Y)\operatorname{vec}(Z)=\operatorname{vec}(YZ{}^{t}X)$ is wrong. The correct identity is $(X\otimes Y)\operatorname{vec}(Z)=\operatorname{vec}(XZ\,{}^{t}Y)$ (with column-stacking vec). The given formula would require $YZ{}^{t}X$ which is not even dimensionally consistent in general and does not match the Kronecker product action.
- **Proposed fix:** Replace with: $(X\otimes Y)\operatorname{vec}(Z)=\operatorname{vec}(XZ\,{}^{t}Y)$ (column-stacking vec).
- **Reported:** 2026-10-28 (8ccef3d)

### ISSUE-0002 [Open] Sylvester equation form is wrong
- **Category:** Supplement/remark error
- **Location:** supplement / 計算の観点
- **Detail:** The Sylvester equation is written as $XZ+ZY=C$, but the standard Sylvester equation is $XZ+ZY=C$ only if the coefficients are placed correctly; the usual form is $XZ - ZY = C$ or $XZ+ZY=C$ depending on convention, but more importantly the vec identity used to convert it must be consistent. With the corrected identity $(X\otimes Y)\operatorname{vec}(Z)=\operatorname{vec}(XZ\,{}^{t}Y)$, the Sylvester equation $XZ+ZY=C$ becomes $(I\otimes X + Y^{t}\otimes I)\operatorname{vec}(Z)=\operatorname{vec}(C)$, not what the current (wrong) identity would give. The example is stated loosely and the accompanying identity is incorrect, so the illustration is misleading.
- **Proposed fix:** State: the Sylvester equation $XZ+ZY=C$ becomes $(I\otimes X + Y^{t}\otimes I)\operatorname{vec}(Z)=\operatorname{vec}(C)$ using $(X\otimes Y)\operatorname{vec}(Z)=\operatorname{vec}(XZ\,{}^{t}Y)$.
- **Reported:** 2026-10-28 (8ccef3d)
