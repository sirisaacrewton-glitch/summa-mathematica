# Verification tracker: `01-foundations/05-proof-theory/07-reverse-mathematics/03-aca0.html`

<!-- source: 01-foundations/05-proof-theory/07-reverse-mathematics/03-aca0.html -->
<!-- Managed by scripts/verify.py (GitHub Actions). To dispute an [Open] issue, add a line starting with
     **Opus Rebuttal:** at the end of that issue and push; the next run judges it. Do not edit other lines. -->

- Last verified: 2026-10-28 (commit 8ccef3d, deepseek-chat)
- Open: 1 / Resolved: 0 / Ignored: 0

## Summary of the last run

The page is largely correct. The main genuine problem is in the supplement's Ramsey-theorem bullet: it claims RT^2_2 is incomparable with WKL_0, but RT^2_2 actually implies WKL_0 over RCA_0 (Hirst), so it is strictly stronger than WKL_0, not incomparable. All other supplements, remarks, intuitions and hypcheck comments were checked individually (Specker sequence, jump characterization, low basis theorem, conservativity, bounded König's lemma, supremum representation) and found correct or acceptably hedged. The proofs (bounded Σ^0_1 comprehension, range-of-injection, the equivalences, the analysis equivalences, and König's lemma) are logically sound with hypotheses properly used.

## Issues

### ISSUE-0001 [Open] RT^2_2 is not known to be incomparable with WKL_0
- **Category:** Supplement/remark error
- **Location:** supplement / 関連する結果 (ラムゼーの定理)
- **Detail:** The supplement states that RT^2_2 is strictly weaker than ACA_0 and incomparable with WKL_0 (attributed to Seetapun, Liu). The known result (Seetapun–Slaman) is that RT^2_2 does not imply ACA_0; it is strictly weaker than ACA_0. However, RT^2_2 is NOT known to be incomparable with WKL_0: in fact RT^2_2 implies WKL_0 over RCA_0 (a classical result of Hirst), so RT^2_2 is strictly stronger than WKL_0, not incomparable. The claim of incomparability is false.
- **Proposed fix:** Replace with: "$\mathrm{RT}^{2}_{2}$ は $\mathsf{ACA}_{0}$ より真に弱い（シータプン–スラマン）が、$\mathsf{RCA}_{0}$ の上で $\mathsf{WKL}_{0}$ を含意する（ハースト）ので $\mathsf{WKL}_{0}$ より真に強い。"
- **Reported:** 2026-10-28 (8ccef3d)
