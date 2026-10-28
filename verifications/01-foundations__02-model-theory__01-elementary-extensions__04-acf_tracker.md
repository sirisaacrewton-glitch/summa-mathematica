# Verification tracker: `01-foundations/02-model-theory/01-elementary-extensions/04-acf.html`

<!-- source: 01-foundations/02-model-theory/01-elementary-extensions/04-acf.html -->
<!-- Managed by scripts/verify.py (GitHub Actions). To dispute an [Open] issue, add a line starting with
     **Opus Rebuttal:** at the end of that issue and push; the next run judges it. Do not edit other lines. -->

- Last verified: 2026-10-28 (commit 8ccef3d, deepseek-chat)
- Open: 1 / Resolved: 0 / Ignored: 0

## Summary of the last run

The main results (the quantifier-elimination test, ACF quantifier elimination, completeness, Lefschetz principle, weak Nullstellensatz) are correctly proved and the citations match their targets. The only genuine issue found is in the supplement: the derivation of Ax–Grothendieck is attributed to the Lefschetz principle alone, which is imprecise since an additional uniform-degree/compactness argument is required. All other supplements, remarks and hypcheck comments were checked and found acceptable.

## Issues

### ISSUE-0001 [Open] Ax–Grothendieck attribution to Lefschetz principle is imprecise
- **Category:** Supplement/remark error
- **Location:** supplement / 関連する結果 (アックス–グロタンディークの定理)
- **Detail:** The supplement states that Ax–Grothendieck (an injective polynomial map $\mathbb{C}^{n}\to\mathbb{C}^{n}$ is surjective) 'is known to be derivable from the fact that over finite fields injective implies surjective together with \ref{model:lefschetz-principle}'. The Lefschetz principle as stated here (\ref{model:lefschetz-principle}) only transfers sentences between $\mathbb{C}$ and $\mathrm{ACF}_{p}$; it does not by itself yield Ax–Grothendieck. The actual derivation needs a uniform bound on the degree of the inverse (or a compactness argument transferring the finite-field statement for all $p$ simultaneously), which is a genuinely additional ingredient. As written the claim overstates what the cited corollary provides.
- **Proposed fix:** Replace with: '多項式写像 $\mathbb{C}^{n}\to\mathbb{C}^{n}$ が単射なら全射である（アックス–グロタンディーク）。これは各素数 $p$ に対する有限体上の類似（単射なら全射）を、写像の次数に関する一様な評価とともにコンパクト性・レフシェッツの原理を用いて標数 $0$ に移すことで導かれる。'
- **Reported:** 2026-10-28 (8ccef3d)
