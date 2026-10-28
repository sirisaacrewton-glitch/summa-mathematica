# Verification tracker: `01-foundations/04-set-theory/01-basics/11-cardinal-exponentiation.html`

<!-- source: 01-foundations/04-set-theory/01-basics/11-cardinal-exponentiation.html -->
<!-- Managed by scripts/verify.py (GitHub Actions). To dispute an [Open] issue, add a line starting with
     **Opus Rebuttal:** at the end of that issue and push; the next run judges it. Do not edit other lines. -->

- Last verified: 2026-10-28 (commit 8ccef3d, deepseek-chat)
- Open: 5 / Resolved: 0 / Ignored: 0

## Summary of the last run

The main body (definitions, lemma on function sets, exponent laws, the $\kappa^{\lambda}=2^{\lambda}$ lemma, $\kappa^{<\lambda}$ proposition, CH/GCH equivalences, beth numbers) is logically sound and the citations match their targets. The genuine problems are concentrated in the supplements: (1) the claim that ${}^{\omega}2$ is not provably well-orderable in ZF is false; (2) Easton's theorem is misstated, omitting the general König constraint $\cf(2^{\kappa})>\kappa$; (3) the converse characterization of strong limit cardinals as beth numbers is only valid under GCH; (4) the Sierpiński remark uses an undefined relation $\prec$ between sets; (5) the continuity example's justification is slightly incomplete. No issues were found in the proofs themselves.

## Issues

### ISSUE-0001 [Open] Wrong claim that ZF cannot prove well-orderability of 2^ω
- **Category:** Supplement/remark error
- **Location:** supplement after set:cardinal-exponentiation
- **Detail:** The supplement says "${}^{\omega}2\approx\mathcal{P}(\omega)$ が整列可能であることは ZF では証明できない". This is false: ZF proves that $\mathcal{P}(\omega)$ is well-orderable (via the canonical well-ordering of the reals / of ${}^{\omega}2$), and hence ${}^{\omega}2$ is well-orderable in ZF. What is not provable in ZF is that *every* set is well-orderable, or that ${}^{\lambda}\kappa$ is well-orderable for arbitrary infinite $\kappa,\lambda$. The example chosen is exactly a case where well-orderability holds in ZF.
- **Proposed fix:** Replace with: "${}^{\lambda}\kappa$ は ZF でも集合として存在するが、一般には整列可能とは限らない（たとえば $\kappa=\mathcal{P}(\omega)$ のとき ${}^{\omega}\mathcal{P}(\omega)$ が整列可能かは ZF では言えない）。そのため $\lvert{}^{\lambda}\kappa\rvert$ を基数として定義するのに選択公理を使う。" (Note that ${}^{\omega}2$ itself is well-orderable in ZF.)
- **Reported:** 2026-10-28 (8ccef3d)

### ISSUE-0002 [Open] Easton's theorem misstated as 'no constraints beyond monotonicity and König'
- **Category:** Supplement/remark error
- **Location:** supplement after set:ch-independence (ZFC で決まること)
- **Detail:** The text says that for the function $\kappa\mapsto 2^{\kappa}$ on regular cardinals, "単調性とこの制約以外に ZFC から従う制約がない" (no constraints other than monotonicity and $\cf(2^{\aleph_{0}})>\aleph_{0}$). Easton's theorem gives: any function on regular cardinals satisfying (i) monotonicity ($\kappa\le\lambda\Rightarrow 2^{\kappa}\le 2^{\lambda}$) and (ii) König's constraint $\cf(2^{\kappa})>\kappa$ for all regular $\kappa$ is realized. The page states only the single instance $\cf(2^{\aleph_{0}})>\aleph_{0}$, omitting the general König constraint $\cf(2^{\kappa})>\kappa$ for every regular $\kappa$, which is an essential hypothesis of Easton's theorem. As written the claim is false (e.g. $2^{\aleph_{1}}=\aleph_{1}$ would violate $\cf(2^{\aleph_{1}})>\aleph_{1}$).
- **Proposed fix:** Replace with: "正則基数上の関数 $\kappa\mapsto 2^{\kappa}$ については、単調性とケーニッヒの定理による制約 $\cf(2^{\kappa})>\kappa$（各正則基数 $\kappa$ について）以外に ZFC から従う制約がないことがイーストンの定理（\ref{set:easton}）で知られている。"
- **Reported:** 2026-10-28 (8ccef3d)

### ISSUE-0003 [Open] Converse of strong-limit characterization of beth numbers is imprecise
- **Category:** Supplement/remark error
- **Location:** supplement after set:beth-properties (強極限基数)
- **Detail:** The text says "逆に無限の強極限基数は $\omega$ か、極限順序数 $\gamma$ についての $\beth_{\gamma}$ の形をしている". This is false as stated: e.g. $\aleph_{\omega}$ is a strong limit cardinal (assuming GCH, or more generally any strong limit of the form $\sup$ of a strictly increasing sequence of strong limits), but $\aleph_{\omega}$ is not of the form $\beth_{\gamma}$ in general (it equals $\beth_{\omega}$ only under GCH). The correct statement is that the strong limit cardinals are exactly $\omega$ and the cardinals of the form $\beth_{\gamma}$ for $\gamma$ a limit ordinal *only under GCH*; in ZFC alone, every $\beth_{\gamma}$ ($\gamma$ limit) is a strong limit, but not conversely.
- **Proposed fix:** Replace with: "逆は一般には成り立たない（例：$\aleph_{\omega}$ は強極限基数だが $\beth_{\gamma}$ の形とは限らない）。GCH のもとでは、無限の強極限基数は $\omega$ か極限順序数 $\gamma$ についての $\beth_{\gamma}$ の形のものに限る。"
- **Reported:** 2026-10-28 (8ccef3d)

### ISSUE-0004 [Open] Sierpiński's result: GCH in set form implies AC — needs the right formulation
- **Category:** Supplement/remark error
- **Location:** supplement after set:ch-independence (GCH と AC)
- **Detail:** The supplement states that the set-form GCH "任意の無限集合 $X$ について $X\prec Y\prec\mathcal{P}(X)$ となる $Y$ はない" implies AC in ZF (Sierpiński 1947). This is essentially correct (Sierpiński's theorem: if $2^{\mathfrak{m}}=\mathfrak{m}^{+}$ for all infinite $\mathfrak{m}$ in the sense that there is no cardinal strictly between $\lvert X\rvert$ and $\lvert\mathcal{P}(X)\rvert$, then AC holds), but the phrasing "$X\prec Y\prec\mathcal{P}(X)$" uses $\prec$ between sets, which is not defined on this page (only $\preccurlyeq$ and $\approx$ are). The statement should be phrased in terms of cardinalities to be precise.
- **Proposed fix:** Replace with: "集合の形で「任意の無限集合 $X$ について、$\lvert X\rvert<\lvert Y\rvert<\lvert\mathcal{P}(X)\rvert$ となる集合 $Y$ は存在しない」と述べた GCH は、ZF において選択公理を導く（シェルピンスキ 1947）。"
- **Reported:** 2026-10-28 (8ccef3d)

### ISSUE-0005 [Open] Continuity argument: 'continuous functions determined by values on Q' needs density and completeness
- **Category:** Supplement/remark error
- **Location:** example after set:tab-exponent-examples
- **Detail:** The example claims $\lvert C(\R,\R)\rvert=2^{\aleph_{0}}$ via injectivity of $f\mapsto f\restr{\Q}$, citing only that $\Q$ is dense in $\R$. Injectivity of the restriction map for continuous functions requires that $\Q$ be dense *and* that $\R$ be Hausdorff (so that two continuous functions agreeing on a dense set agree everywhere). The argument is correct, but the stated justification "$\Q$ は $\R$ で稠密" alone is insufficient; the Hausdorff property of $\R$ is also needed. This is a minor gap in a side comment.
- **Proposed fix:** Replace "連続関数は $\Q$ 上の値で決まる（$\Q$ は $\R$ で稠密）" with "連続関数は $\Q$ 上の値で決まる（$\Q$ は $\R$ で稠密で、$\R$ はハウスドルフなので、稠密集合上で一致する連続関数は一致する）".
- **Reported:** 2026-10-28 (8ccef3d)
