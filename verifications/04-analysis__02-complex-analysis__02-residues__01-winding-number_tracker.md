# Verification tracker: `04-analysis/02-complex-analysis/02-residues/01-winding-number.html`

<!-- source: 04-analysis/02-complex-analysis/02-residues/01-winding-number.html -->
<!-- Managed by scripts/verify.py (GitHub Actions). To dispute an [Open] issue, add a line starting with
     **Opus Rebuttal:** at the end of that issue and push; the next run judges it. Do not edit other lines. -->

- Last verified: 2026-10-28 (commit 10fede1, deepseek-chat)
- Open: 2 / Resolved: 0 / Ignored: 0

## Summary of the last run

The page is largely correct. The proofs (integer-valuedness, local constancy, vanishing at infinity, the Dixon homology Cauchy theorem, the simply-connected case, logarithms and roots) are sound and cite appropriate results. The only genuine issue is in the '高い視点' part of the supplement, where the identification of 'homologous to zero' with vanishing of all winding numbers about points outside $U$ is stated as if immediate/established, while the text itself admits the relevant duality result is not included; this should be phrased as a known equivalence rather than a definitional correspondence.

## Issues

### ISSUE-0001 [Open] Incorrect claim that the homology condition is not homotopy-based / mischaracterization of Dixon's proof
- **Category:** Supplement/remark error
- **Location:** supplement (歴史)
- **Detail:** The supplement says the stated form uses only the condition 'does not wind around points outside U' and 'does not use that the curve is contractible by homotopy'. This is fine as a statement about the hypothesis, but the sentence 'ここで述べた形は、「$U$ の外の点のまわりを回らない」という条件だけを使い、曲線がホモトピーで縮むことは使わない' is accurate. However the '高い視点' paragraph claims that '零ホモローグはその類が $U$ の 1 次ホモロジーで $0$ であることに対応する' and that '平面の開集合 $U$ では、$H_{1}(U)$ の類が $U$ の外の各点のまわりの回転数で判定できる'. The first identification is imprecise: a cycle being homologous to zero in the singular homology $H_{1}(U)$ is not literally the same as all winding numbers about points of $\C\setminus U$ vanishing; the equivalence requires the theorem that $H_{1}(U)$ is detected by winding numbers (Alexander duality), which the text itself flags as '未収録'. Stating the correspondence as if established, then citing it as known, is an overstatement.
- **Proposed fix:** Replace with: '回転数はサイクル $\Gamma$ が定める $\C\setminus\{a\}$ の 1 次ホモロジー類の像とみなせる。零ホモローグ（$U$ の外のすべての点のまわりの回転数が $0$）という条件は、$\Gamma$ が $U$ の 1 次ホモロジーで $0$ であることと同値であることが知られている（アレクサンダー双対性の 2 次元の場合。本サイト未収録）。この同値性を用いずに、本ページでは回転数による条件を直接用いている。'
- **Reported:** 2026-10-28 (10fede1)

### ISSUE-0002 [Open] Hypcheck claim that the 'simply connected' hypothesis cannot be dropped is stated with a wrong example wording
- **Category:** Supplement/remark error
- **Location:** cx:simply-connected-homologous / hypcheck
- **Detail:** The hypcheck says '$\C\setminus\{0\}$ は単連結でなく、$C(0,1)$ の回転数は $1$'. This is correct as a counterexample to the conclusion (winding number vanishing), but the phrasing 'the hypothesis cannot be dropped' is about the theorem's conclusion. It is fine. No error.
- **Proposed fix:** No change needed.
- **Reported:** 2026-10-28 (10fede1)
