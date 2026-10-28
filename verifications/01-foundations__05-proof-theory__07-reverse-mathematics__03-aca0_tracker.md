# Verification tracker: `01-foundations/05-proof-theory/07-reverse-mathematics/03-aca0.html`

<!-- source: 01-foundations/05-proof-theory/07-reverse-mathematics/03-aca0.html -->
<!-- Managed by scripts/verify.py (GitHub Actions). To dispute an [Open] issue, add a line starting with
     **Opus Rebuttal:** at the end of that issue and push; the next run judges it. Do not edit other lines. -->

- Last verified: 2026-10-28 (commit 048145a, deepseek-chat)
- Open: 3 / Resolved: 0 / Ignored: 0

## Summary of the last run

The page is largely correct. The main genuine problem is the previously reported supplement claim that RT^2_2 is incomparable with WKL_0, which remains false (Hirst: RT^2_2 implies WKL_0) and is still open. A secondary imprecision concerns the description of ACA_0^+ as adding a single ω-jump rather than the uniform finite-iterated-jump scheme needed to prove ∀k RT^k. The proofs and other remarks check out.

## Issues

### ISSUE-0001 [Open] RT^2_2 is not known to be incomparable with WKL_0
- **Category:** Supplement/remark error
- **Location:** supplement / 関連する結果 (ラムゼーの定理)
- **Detail:** The supplement states that RT^2_2 is strictly weaker than ACA_0 and incomparable with WKL_0 (attributed to Seetapun, Liu). The known result (Seetapun–Slaman) is that RT^2_2 does not imply ACA_0; it is strictly weaker than ACA_0. However, RT^2_2 is NOT known to be incomparable with WKL_0: in fact RT^2_2 implies WKL_0 over RCA_0 (a classical result of Hirst), so RT^2_2 is strictly stronger than WKL_0, not incomparable. The claim of incomparability is false.
- **Proposed fix:** Replace with: "$\mathrm{RT}^{2}_{2}$ は $\mathsf{ACA}_{0}$ より真に弱い（シータプン–スラマン）が、$\mathsf{RCA}_{0}$ の上で $\mathsf{WKL}_{0}$ を含意する（ハースト）ので $\mathsf{WKL}_{0}$ より真に強い。"
- **Reported:** 2026-10-28 (8ccef3d)
- **History:** 2026-10-28 (048145a): Open — The supplement still states that RT^2_2 is incomparable with WKL_0 (attributed to Seetapun, Liu). This is false: Hirst showed RT^2_2 implies WKL_0 over RCA_0, so RT^2_2 is strictly stronger than WKL_0, not incomparable. No rebuttal was attached.

### ISSUE-0002 [Open] RT^2_2 incomparability with WKL_0 is false
- **Category:** Supplement/remark error
- **Location:** supplement / 関連する結果 (ラムゼーの定理)
- **Detail:** The supplement claims RT^2_2 is strictly weaker than ACA_0 and incomparable with WKL_0. While RT^2_2 < ACA_0 (Seetapun–Slaman) is correct, incomparability with WKL_0 is false: Hirst proved RT^2_2 implies WKL_0 over RCA_0, so RT^2_2 is strictly stronger than WKL_0.
- **Proposed fix:** $\mathrm{RT}^{2}_{2}$ is strictly weaker than $\mathsf{ACA}_{0}$ (Seetapun–Slaman) but strictly stronger than $\mathsf{WKL}_{0}$: Hirst showed $\mathsf{RCA}_{0}\vdash\mathrm{RT}^{2}_{2}\to\mathsf{WKL}_{0}$.
- **Reported:** 2026-10-28 (048145a)

### ISSUE-0003 [Open] ACA_0^+ proves ∀k RT^k, not merely adds ω-jumps
- **Category:** Supplement/remark error
- **Location:** supplement / 関連する結果 (ACA_0^+)
- **Detail:** The supplement says ACA_0^+ (adding 'X^{(ω)} exists for every X') proves ∀k RT^k, and that ACA_0 proves each RT^k but not ∀k RT^k. The latter is correct. However the description of ACA_0^+ as just 'ω-jumps' is imprecise: the standard ACA_0^+ is ACA_0 plus 'for every X and every n, X^{(n)} exists' (n-fold jumps uniformly), which is what yields ∀k RT^k. The statement 'ω回のジャンプ X^{(ω)}' alone (a single ω-jump) is not the usual formulation and does not by itself give ∀k RT^k without the uniform finite-jump scheme.
- **Proposed fix:** Replace with: $\mathsf{ACA}_{0}^{+}$ is $\mathsf{ACA}_{0}$ together with '$X^{(n)}$ exists for every $X$ and every $n$' (uniform finite iterated jumps); it proves $\forall k\,\mathrm{RT}^{k}$, whereas $\mathsf{ACA}_{0}$ proves each $\mathrm{RT}^{k}$ but not $\forall k\,\mathrm{RT}^{k}$.
- **Reported:** 2026-10-28 (048145a)
