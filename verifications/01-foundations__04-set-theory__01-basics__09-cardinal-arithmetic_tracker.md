# Verification tracker: `01-foundations/04-set-theory/01-basics/09-cardinal-arithmetic.html`

<!-- source: 01-foundations/04-set-theory/01-basics/09-cardinal-arithmetic.html -->
<!-- Managed by scripts/verify.py (GitHub Actions). To dispute an [Open] issue, add a line starting with
     **Opus Rebuttal:** at the end of that issue and push; the next run judges it. Do not edit other lines. -->

- Last verified: 2026-10-28 (commit 8ccef3d, deepseek-chat)
- Open: 2 / Resolved: 0 / Ignored: 0

## Summary of the last run

The page is largely correct: the definitions, the Hessenberg theorem proof, the Hartogs theorem, and the aleph construction are sound, and the hypchecks are accurate. Two side-comment issues remain: (1) the claim that a $\omega_{1}\to\mathcal{P}(\omega)$ injection requires an inaccessible cardinal is a misattribution (the relevant statement is a strong failure of CH, equiconsistent with ZF without inaccessibles); (2) the Kunen-style table row's justification of $\sup S=|\alpha|^{+}$ does not make explicit why the infinite hypothesis on $\alpha$ is needed. Both are in supplements and are of medium confidence.

## Issues

### ISSUE-0001 [Open] ω₁ → P(ω) injection claim misattributed to an inaccessible
- **Category:** Supplement/remark error
- **Location:** supplement after set:aleph-properties (連続体との関係)
- **Detail:** The supplement says that an injection $\omega_{1}\to\mathcal{P}(\omega)$ cannot be produced in $\ZF$ alone, citing "assuming the consistency of an inaccessible cardinal" via \ref{set:surjection-cardinality}. This is wrong: the non-existence of such an injection is exactly $\neg(\aleph_{1}\le 2^{\aleph_{0}})$, i.e. a strong failure of CH, and its consistency relative to ZF does not require an inaccessible. In fact $\ZF+\neg\CH$ (even $\aleph_{1}\not\le 2^{\aleph_{0}}$) is equiconsistent with ZF; the inaccessible hypothesis is irrelevant here. The parenthetical attribution is a false/misattributed claim.
- **Proposed fix:** Replace the parenthetical with: "（$\omega_{1}$ から $\mathcal{P}(\omega)$ への単射が $\ZF$ で存在しないことは $\neg(\aleph_{1}\le 2^{\aleph_{0}})$ であり、$\ZF$ と無矛盾である；これは到達不能基数の存在を仮定せずに示せる。）" i.e. drop the reference to inaccessible cardinals and to \ref{set:surjection-cardinality} for this point.
- **Reported:** 2026-10-28 (8ccef3d)

### ISSUE-0002 [Open] Kunen-style sup S equals |α|⁺ only for infinite α
- **Category:** Supplement/remark error
- **Location:** supplement after set:hartogs (table row 'Kunen 流')
- **Detail:** The table states that for the Kunen-style construction $S=\{\mathrm{type}(\alpha,R)\}$ and $\kappa=\sup S$, "実は $\kappa=|\alpha|^{+}$" for "無限の $\alpha$". The qualifier is present, but the accompanying argument ("$\kappa=\sup S$ が $\beta<\kappa$ と対等なら…") is presented as if it always yields $\kappa\approx\alpha$, which fails for finite $\alpha$ (e.g. $\alpha=1$: $S=\{1\}$, $\sup S=1=|1|^{+}$ happens to hold, but $\alpha=2$: $S=\{2\}$, $\sup S=2\ne 3=|2|^{+}$). The claim as stated (restricted to infinite $\alpha$) is correct, but the justification given does not restrict to infinite $\alpha$ and the finite case is silently excluded without explanation, making the remark imprecise about where the hypothesis is needed.
- **Proposed fix:** Add: "（$\alpha$ が有限のときは $S=\{\alpha\}$ で $\sup S=\alpha\neq\alpha^{+}$ となるため、この一致には $\alpha$ が無限であることが必要である。）"
- **Reported:** 2026-10-28 (8ccef3d)
