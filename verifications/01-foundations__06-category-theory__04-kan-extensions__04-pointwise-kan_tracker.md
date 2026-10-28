# Verification tracker: `01-foundations/06-category-theory/04-kan-extensions/04-pointwise-kan.html`

<!-- source: 01-foundations/06-category-theory/04-kan-extensions/04-pointwise-kan.html -->
<!-- Managed by scripts/verify.py (GitHub Actions). To dispute an [Open] issue, add a line starting with
     **Opus Rebuttal:** at the end of that issue and push; the next run judges it. Do not edit other lines. -->

- Last verified: 2026-10-28 (commit 10fede1, deepseek-chat)
- Open: 2 / Resolved: 0 / Ignored: 0

## Summary of the last run

(none)

## Issues

### ISSUE-0001 [Open] Density characterization of codensity via pointwise right Kan extension is misstated
- **Category:** Supplement/remark error
- **Location:** supplement (一般化) / cat:page-pointwise-kan supplement
- **Detail:** The supplement claims: "$K$ が余稠密であることは $(1_{\mathbf{C}},1_{K})$ が $K$ の $K$ に沿った各点的な右カン拡張であること". This is wrong on two counts. (1) The relevant Kan extension for codensity is $\mathrm{Ran}_{K}K$ (i.e. $T=K$), not $\mathrm{Ran}_{K}1_{\mathbf{C}}$; the pair $(1_{\mathbf{C}},1_{K})$ is a candidate for $\mathrm{Ran}_{K}K$, not for $\mathrm{Ran}_{K}1_{\mathbf{C}}$ (which would require $1_{\mathbf{C}}K = K \Rightarrow 1_{\mathbf{C}}$, i.e. a counit $K\Rightarrow 1$, not $1_{K}$). (2) The problem cat:prob-pk-codense itself states the correct equivalence: codensity of $K$ iff $(1_{\mathbf{C}},1_{K})$ is a pointwise right Kan extension of $K$ along $K$. The supplement's phrasing "$K$ の $K$ に沿った" is ambiguous but the notation $(1_{\mathbf{C}},1_{K})$ only makes sense as a candidate for $\mathrm{Ran}_{K}K$, so the sentence as written conflates $\mathrm{Ran}_{K}1_{\mathbf{C}}$ with $\mathrm{Ran}_{K}K$ and is imprecise/false as stated.
- **Proposed fix:** Replace with: "稠密性（\ref{cat:dense-functor} の双対）：$K$ が余稠密であることは、$(1_{\mathbf{C}},1_{K})$ が $K$ の $K$ に沿った各点的な右カン拡張（すなわち $\mathrm{Ran}_{K}K = 1_{\mathbf{C}}$ が各点的）であることと同値である（\ref{cat:prob-pk-codense}）．"
- **Reported:** 2026-10-28 (10fede1)

### ISSUE-0002 [Open] Remark on right Kan extension formula via powers: Yoneda identification imprecise
- **Category:** Supplement/remark error
- **Location:** remark after cat:lan-coend
- **Detail:** The remark states that for $K=1_{\mathbf{C}}$, $\mathbf{A}=\mathbf{Set}$, $\mathrm{Ran}_{K}T(c)=\int_{m}\mathbf{Set}(\mathbf{C}(c,m),Tm)=\mathrm{Nat}(\mathbf{C}(c,-),T)$ and calls this "米田の補題そのもの". The end formula $\int_{m}Tm^{\mathbf{C}(c,Km)}$ requires powers $Tm^{X}$ to exist; in $\mathbf{Set}$ this is fine. However the identification $\int_{m}\mathbf{Set}(\mathbf{C}(c,m),Tm)=\mathrm{Nat}(\mathbf{C}(c,-),T)$ is the end formula for natural transformations (cat:nat-as-end), not the Yoneda lemma itself. The Yoneda lemma would give $\mathrm{Nat}(\mathbf{C}(c,-),T)\cong Tc$ only when $T$ is representable (or gives $\mathrm{Nat}(\mathbf{C}(c,-),\mathbf{Set}(m,-))\cong\mathbf{C}(c,m)$). Calling the general end formula "the Yoneda lemma itself" overstates the connection: the correct statement is that the end formula for natural transformations (cat:nat-as-end) gives $\mathrm{Nat}(\mathbf{C}(c,-),T)$, and the Yoneda lemma is the special case $T=\mathbf{C}(m,-)$ yielding $\mathbf{C}(c,m)$.
- **Proposed fix:** Replace "となり、米田の補題そのものである" with "となる（自然変換のエンド表示，\ref{cat:nat-as-end}）．とくに $T=\mathbf{C}(m,-)$ とすれば米田の補題 $\mathrm{Nat}(\mathbf{C}(c,-),\mathbf{C}(m,-))\cong\mathbf{C}(c,m)$ が従う．"
- **Reported:** 2026-10-28 (10fede1)
