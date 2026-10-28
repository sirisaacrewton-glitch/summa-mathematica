# Verification tracker: `01-foundations/04-set-theory/05-definability/02-ordinal-definable.html`

<!-- source: 01-foundations/04-set-theory/05-definability/02-ordinal-definable.html -->
<!-- Managed by scripts/verify.py (GitHub Actions). To dispute an [Open] issue, add a line starting with
     **Opus Rebuttal:** at the end of that issue and push; the next run judges it. Do not edit other lines. -->

- Last verified: 2026-10-28 (commit 10fede1, deepseek-chat)
- Open: 5 / Resolved: 0 / Ignored: 0

## Summary of the last run

The main proofs (set:od-from-formula, set:od-enumeration, set:od-closure, set:hod-model-zfc) are logically sound and the cited labels match their uses. The genuine problems concentrate in the side remarks: the supplement's 'high-level view' wrongly infers the axiom of choice in V from the enumeration of OD (it only well-orders subsets of OD / elements of HOD), and several bullets in the 'non-constructive character' section and the problem solution state independence/consistency claims more strongly or more vaguely than the cited Kunen exercises support. The hypcheck comment about where set:od-from-formula is used is also slightly inaccurate. No issues were found in the formal theorem/proof environments themselves.

## Issues

### ISSUE-0001 [Open] Enod enumeration does not by itself give AC in V
- **Category:** Supplement/remark error
- **Location:** supplement / 高い視点から：名前をもつものだけの宇宙
- **Detail:** The supplement claims that because Enod enumerates OD, 'any collection of sets can be ordered by first appearance in the list, so the axiom of choice automatically holds.' This is false: Enod enumerates only OD, not V. In V, a set A that is not a subset of OD has no such enumeration, so no well-ordering of A is obtained. The correct statement is that every A ⊆ OD (indeed every A ∈ HOD) is well-orderable via ρ(x)=min{ξ: Enod(ξ)=x}, which is exactly what the proof of set:hod-model-zfc uses. As written the sentence overstates the consequence and contradicts the page's own point that AC is not available in V.
- **Proposed fix:** Replace with: 'Since $\mathrm{Enod}$ enumerates $\mathbf{OD}$, every set $A\subseteq\mathbf{OD}$ (in particular every $A\in\mathbf{HOD}$) can be well-ordered by the order of first appearance in the list, $\rho(x)=\min\{\xi:\mathrm{Enod}(\xi)=x\}$. This is how the axiom of choice holds inside $\mathbf{HOD}$ without assuming it in $\mathbf{V}$; it gives no well-ordering of sets outside $\mathbf{OD}$.'
- **Reported:** 2026-10-28 (10fede1)

### ISSUE-0002 [Open] Claim that HOD questions are independent of ZFC+GCH is imprecise
- **Category:** Supplement/remark error
- **Location:** OD と HOD の非構成的な性格 / bullet on HOD and CH
- **Detail:** The bullet says 'whether HOD satisfies CH is not decided by ZFC+GCH (Exercise VIII 114)'. Kunen's Exercise VIII 114 concerns whether (V=OD)^{HOD} (equivalently whether HOD ⊨ V=HOD) is decided, and the statement that HOD ⊨ CH is independent is a different, stronger claim. Moreover the later bullet repeats '演習 VIII 114' for (V=OD)^{HOD}, so the same exercise is cited for two different statements. The claim as stated (independence of 'HOD ⊨ CH' from ZFC+GCH) is not what the cited exercise establishes and is stated more strongly than the source supports.
- **Proposed fix:** Restrict the claim to what the exercise gives, e.g.: 'Whether $\mathbf{HOD}\models\mathbf{V}=\mathbf{OD}$ (and related questions about $\mathbf{HOD}$) is not decided by $\ZFC+\mathrm{GCH}$ (Exercise VIII 114).' If a statement about CH in HOD is wanted, cite the specific result rather than Exercise VIII 114.
- **Reported:** 2026-10-28 (10fede1)

### ISSUE-0003 [Open] V=OD independence attributed to Exercise VII E5 without qualification
- **Category:** Supplement/remark error
- **Location:** OD と HOD の非構成的な性格 / bullet on V=OD
- **Detail:** The bullet states 'V=OD is consistent with ZFC+GCH (Chapter VI) and independent (Exercise VII E5)'. Independence of V=OD requires Con(ZFC) (or at least a consistency assumption); stated flatly as 'independent' it is an unqualified metamathematical claim. Also, the consistency direction 'V=OD is consistent with ZFC+GCH' is a relative-consistency statement (Con(ZFC)→Con(ZFC+GCH+V=OD)), not an absolute one. The phrasing overstates the result.
- **Proposed fix:** Write: '$\mathrm{Con}(\ZFC)\to\mathrm{Con}(\ZFC+\mathrm{GCH}+\mathbf{V}=\mathbf{OD})$ (Chapter VI), and $\mathbf{V}=\mathbf{OD}$ is not provable in $\ZFC$ (Exercise VII E5); hence it is independent of $\ZFC$ assuming $\mathrm{Con}(\ZFC)$.'
- **Reported:** 2026-10-28 (10fede1)

### ISSUE-0004 [Open] Problem solution remark on reals not in OD is vague and unsupported
- **Category:** Supplement/remark error
- **Location:** set:prob-od-countable-real / solution
- **Detail:** The solution says 'not all reals belong to OD (according to Kunen, V=OD is independent of ZFC, and it is generally said that there are models where not all reals belong to OD; not shown here)'. The parenthetical conflates two different things: independence of V=OD does not by itself say that some model has a real outside OD in a way that blocks well-ordering P(ω); the relevant point is simply that ρ is only defined on OD∩P(ω), so it cannot well-order all of P(ω) unless P(ω)⊆OD. The appeal to 'generally said' is imprecise and the logical link is muddled.
- **Proposed fix:** Replace the parenthetical with: 'The function $\rho$ is defined only on $\mathbf{OD}\cap\mathcal{P}(\omega)$; it well-orders all of $\mathcal{P}(\omega)$ only if $\mathcal{P}(\omega)\subseteq\mathbf{OD}$, i.e. only if every real is ordinal definable, which is not provable in $\ZFC$ (indeed $\mathbf{V}=\mathbf{OD}$ is independent of $\ZFC$).'
- **Reported:** 2026-10-28 (10fede1)

### ISSUE-0005 [Open] Hypcheck claim that only comprehension and choice use od-from-formula is inaccurate
- **Category:** Supplement/remark error
- **Location:** hypcheck after set:hod-model-zfc
- **Detail:** The hypcheck says the HOD-specific property (set:od-from-formula) was used only in the comprehension and choice verifications. But the pairing and power set verifications use set:hod-basic.3 (R(α)∩HOD ∈ HOD), whose proof in turn invokes set:od-from-formula; likewise the infinity step uses ω∈HOD via set:hod-basic.1. So the claim that od-from-formula is used 'only' in comprehension and choice is imprecise.
- **Proposed fix:** Change to: 'The definition-specific property (\ref{set:od-from-formula}) is used directly in the comprehension and choice verifications, and indirectly (through \ref{set:hod-basic.3} and \ref{set:hod-basic.1}) in the pairing, power set and infinity verifications.'
- **Reported:** 2026-10-28 (10fede1)
