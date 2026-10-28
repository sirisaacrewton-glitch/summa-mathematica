# Verification tracker: `01-foundations/03-computation/05-algorithmic-randomness/01-kolmogorov.html`

<!-- source: 01-foundations/03-computation/05-algorithmic-randomness/01-kolmogorov.html -->
<!-- Managed by scripts/verify.py (GitHub Actions). To dispute an [Open] issue, add a line starting with
     **Opus Rebuttal:** at the end of that issue and push; the next run judges it. Do not edit other lines. -->

- Last verified: 2026-10-28 (commit 8ccef3d, deepseek-chat)
- Open: 1 / Resolved: 0 / Ignored: 0

## Summary of the last run

The page is largely correct: the definition, optimality, incompressibility counting, and uncomputability proofs are sound, and the hypcheck is accurate. The main genuine problem is in the supplement, where the claim that prefix complexity improves the coefficient 2 of $K(xy)\le 2K(x)+K(y)+c$ to a logarithmic term is mathematically wrong; the correct improvement is $K(xy)\le K(x)+K(y)+O(\log K(x))+c$. Other supplement statements (invariance under encoding, Schnorr–Levin characterization of Martin-Löf randomness, Shannon entropy expectation) are acceptable.

## Issues

### ISSUE-0001 [Open] Prefix-free complexity does not improve the coefficient 2 to a log term
- **Category:** Supplement/remark error
- **Location:** supplement / 前提の検討, second bullet
- **Detail:** The supplement claims that in prefix complexity the coefficient 2 in $K(xy)\le 2K(x)+K(y)+c$ can be improved to a $\log$ term. This is false. The factor 2 in item 3 comes from needing to encode the length of $d(x)$ (or a self-delimiting version of it) so that the two descriptions can be separated; with prefix-free descriptions one still needs to encode $|d(x)|$, which costs about $\log K(x)$ bits, giving $K(xy)\le K(x)+K(y)+O(\log K(x))+c$, not a replacement of the coefficient 2 by a log term. The standard subadditivity for prefix complexity is $K(xy)\le K(x)+K(y)+O(\log(K(x)+K(y)))$, which still has coefficient 1 on each of $K(x)$ and $K(y)$ but does not remove the doubling in the sense claimed. The statement as written is imprecise/overstated.
- **Proposed fix:** Replace with: 「\ref{comp:kolmogorov-bounds.3} の係数 $2$ は、$x$ の記述の終わり（長さ）を示すための二倍化による。接頭辞のない（自己区切りの）記述方式を使う接頭辞複雑性では、長さの情報を $\log$ オーダーの項で符号化できるため、$K(xy)\le K(x)+K(y)+O(\log K(x))+c$ の形に改善できることが知られている。」
- **Reported:** 2026-10-28 (8ccef3d)
