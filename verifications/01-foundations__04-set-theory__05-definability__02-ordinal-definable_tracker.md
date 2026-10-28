# Verification tracker: `01-foundations/04-set-theory/05-definability/02-ordinal-definable.html`

<!-- source: 01-foundations/04-set-theory/05-definability/02-ordinal-definable.html -->
<!-- Managed by scripts/verify.py (GitHub Actions). To dispute an [Open] issue, add a line starting with
     **Opus Rebuttal:** at the end of that issue and push; the next run judges it. Do not edit other lines. -->

- Last verified: 2026-10-28 (commit 8ccef3d, deepseek-chat)
- Open: 5 / Resolved: 0 / Ignored: 0

## Summary of the last run

The main body (OD definition, enumeration, closure, HOD ⊨ ZFC) is logically sound and its citations match the label table. The genuine problems concentrate in the side remarks: the supplement's 'high-level view' wrongly infers the axiom of choice in V from the Enod listing of OD; the independence claims about HOD ⊨ CH, V=OD, and absoluteness of OD to R(κ) for inaccessible κ are misstated or misattributed; and the L ⊆ HOD statement is presented as unverified hearsay although it is a theorem.

## Issues

### ISSUE-0001 [Open] Enod enumeration does not by itself give AC in V
- **Category:** Supplement/remark error
- **Location:** supplement / 高い視点から
- **Detail:** The supplement claims that because Enod gives a listing of OD, 'any collection of sets can be ordered by first appearance in the list, so the axiom of choice automatically holds.' This is wrong: Enod enumerates only OD, not V. A set A ∈ V that is not in OD has no ρ-index, so the argument gives no well-ordering of A. The correct statement is that every set in OD (and hence HOD) is well-orderable, which is exactly what the proof of set:hod-model-zfc uses.
- **Proposed fix:** Replace with: '一覧表があるので、$\mathbf{OD}$ に属する集合（したがって $\mathbf{HOD}$ の元）は「一覧表で最初に現れる順」に整列できる。$\mathbf{V}$ 全体については $\mathrm{Enod}$ は全射でないため、この議論だけでは選択公理は得られない。'
- **Reported:** 2026-10-28 (8ccef3d)

### ISSUE-0002 [Open] Claim that HOD's CH is undecided over ZFC+GCH is misattributed
- **Category:** Supplement/remark error
- **Location:** OD と HOD の非構成的な性格 / bullet 2
- **Detail:** The text says 'whether HOD satisfies CH is not decided by ZFC+GCH (Exercise VIII 114)'. Kunen's Exercise VIII 114 concerns whether (V=OD)^{HOD} holds, not whether HOD ⊨ CH. Moreover, if V ⊨ GCH then HOD ⊨ GCH (since HOD computes cardinals correctly and its power sets are contained in V's), so HOD ⊨ CH does hold under ZFC+GCH; the statement as written is false.
- **Proposed fix:** Replace with: '$\mathbf{HOD}$ が CH を満たすかは $\ZFC$ のみからは決まらない（$\ZFC+\mathrm{GCH}$ のもとでは $\mathbf{HOD}\models\mathrm{GCH}$ なので CH は成り立つ）。$\mathbf{HOD}$ についての独立性命題としては $(\mathbf{V}=\mathbf{OD})^{\mathbf{HOD}}$ が $\ZFC+\mathrm{GCH}$ で決まらないこと（演習 VIII 114）が知られている。'
- **Reported:** 2026-10-28 (8ccef3d)

### ISSUE-0003 [Open] V=OD is not independent of ZFC
- **Category:** Supplement/remark error
- **Location:** OD と HOD の非構成的な性格 / bullet 3
- **Detail:** The text states 'V=OD is consistent with ZFC+GCH (Ch. VI) and independent (Exercise VII E5)'. V=OD is not independent of ZFC: it is a theorem of ZFC that V=OD holds in L (L ⊆ OD and V=L in L), so ZFC does not refute V=OD. What is independent is V=HOD (equivalently, whether every set is ordinal definable in the sense of the ground model), and Kunen's Exercise VII E5 concerns V=HOD, not V=OD.
- **Proposed fix:** Replace with: '$\mathbf{V}=\mathbf{HOD}$ は $\ZFC$ と無矛盾（第 VI 章、$\mathbf{L}$ では $\mathbf{V}=\mathbf{L}=\mathbf{HOD}$）かつ独立（演習 VII E5）。なお $\mathbf{V}=\mathbf{OD}$ は $\mathbf{L}$ で成り立つので $\ZFC$ から反証されない。'
- **Reported:** 2026-10-28 (8ccef3d)

### ISSUE-0004 [Open] OD is not absolute to R(κ) for inaccessible κ
- **Category:** Supplement/remark error
- **Location:** OD と HOD の非構成的な性格 / bullet 1
- **Detail:** The bullet says 'x ∈ OD is not necessarily absolute with respect to R(κ) for strongly inaccessible κ'. But for inaccessible κ, R(κ) is a model of ZF and satisfies the definition of OD (the definition of OD is Δ_{1}-ish over models of ZF containing all ordinals below κ), so (x ∈ OD)^{R(κ)} ↔ x ∈ OD holds for x ∈ R(κ). The intended point is that OD is not absolute to R(β) for arbitrary β (or that being definable from ordinals inside some R(β) is not the same as being in OD), not that it fails at inaccessible levels.
- **Proposed fix:** Replace with: '$x\in\mathbf{OD}$ は任意の $R(\beta)$ に関して絶対的とは限らない（$x$ を定義するには $\mathbf{V}$ の十分大きな階層を見る必要がある）。強到達不能基数 $\kappa$ に対しては $R(\kappa)$ が $\ZF$ のモデルなので $x\in\mathbf{OD}$ は $R(\kappa)$ に相対化しても保たれる。'
- **Reported:** 2026-10-28 (8ccef3d)

### ISSUE-0005 [Open] L ⊆ HOD is a theorem, not merely 'said to hold'
- **Category:** Supplement/remark error
- **Location:** supplement / 関連する結果
- **Detail:** The supplement says 'L ⊆ HOD is known (generally said so; should be verifiable from Ch. VI but not yet shown here)'. This is a standard theorem provable in ZF: every constructible set is definable from ordinals (by induction on the L-hierarchy, using the definability of the L_{α} sequence), and L is transitive, so L ⊆ HOD. Presenting it as an unverified hearsay is an imprecise/overstated hedge rather than a false claim, but it misrepresents the status.
- **Proposed fix:** Replace with: '$\mathbf{L}\subseteq\mathbf{HOD}$ が成り立つ（$\mathbf{L}$ の構成は順序数から定義でき、$\mathbf{L}$ は推移的なので、$\mathbf{L}$ の各元は遺伝的に順序数定義可能である）。'
- **Reported:** 2026-10-28 (8ccef3d)
