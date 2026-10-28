# Verification tracker: `01-foundations/04-set-theory/06-constructible-sets/04-diamond-in-l.html`

<!-- source: 01-foundations/04-set-theory/06-constructible-sets/04-diamond-in-l.html -->
<!-- Managed by scripts/verify.py (GitHub Actions). To dispute an [Open] issue, add a line starting with
     **Opus Rebuttal:** at the end of that issue and push; the next run judges it. Do not edit other lines. -->

- Last verified: 2026-10-28 (commit 10fede1, deepseek-chat)
- Open: 4 / Resolved: 0 / Ignored: 0

## Summary of the last run

(none)

## Issues

### ISSUE-0001 [Open] ◇⁺ fails at regular cardinals above ω₁ — overstated/incorrect claim
- **Category:** Supplement/remark error
- **Location:** supplement / 関連する結果 (sentence after the theorem, before corollary set:con-diamond-plus)
- **Detail:** The text states: '◇⁺ はそのような基数では成り立つとは限らない（Kunen 第 VI 章の演習 13–17 による）', i.e. that ◇⁺ does not necessarily hold at regular cardinals κ ≥ ω₁. This is misleading. In L, ◇⁺ holds at every regular cardinal κ ≥ ω₁ (indeed ◇⁺ at κ follows from V = L for all regular κ ≥ ω₁; Jensen's ◇⁺ is a theorem of L at every regular uncountable cardinal). What fails in general is that ◇⁺ at ω₁ does not automatically lift to larger cardinals without V = L, and the 'direct' proof of ◇ generalizing to all regular κ does not generalize to ◇⁺. The claim as written (that ◇⁺ may fail at such cardinals) is false under V = L, which is the ambient hypothesis of the page.
- **Proposed fix:** Replace with: '◇ だけなら、より弱い主張としてもっと直接の証明があり、それはすべての正則基数 $\kappa\ge\omega_{1}$ に一般化される。一方 $\lozenge^{+}$ についての同様の直接証明はそのままでは一般化しない（$\lozenge^{+}$ が $\mathbf{L}$ で全ての正則基数 $\kappa\ge\omega_{1}$ で成り立つことは別の議論を要する）。'
- **Reported:** 2026-10-28 (10fede1)

### ISSUE-0002 [Open] Mischaracterization of why L_{ω₁}, L_{ω₂} are used
- **Category:** Supplement/remark error
- **Location:** supplement / 前提の検討, second bullet
- **Detail:** The bullet says: '冪集合公理を満たさない L_{ω₁}, L_{ω₂} を使ったのは、≺ が集合についてしか定義されないからである。' This is imprecise: L_{ω₁} and L_{ω₂} are sets regardless, and ≺ is defined for sets in general; the reason for using L_{ω₁} (rather than L itself) is that L is a proper class and one needs a set-sized elementary submodel to apply condensation and the downward Löwenheim–Skolem theorem. The stated reason ('because ≺ is only defined for sets') is not the actual reason L_{ω₁} is used instead of L.
- **Proposed fix:** Replace with: 'L そのものは真のクラスであり ≺ や下降レーヴェンハイム–スコーレムを直接適用できないため、集合サイズの L_{ω₁}, L_{ω₂} を経由した。これらの段階は冪集合公理を満たさないが、議論は ZF − P で十分である。'
- **Reported:** 2026-10-28 (10fede1)

### ISSUE-0003 [Open] Claim that C∩α ∈ L_δ cannot be shown attributed to Kunen exercise 11
- **Category:** Supplement/remark error
- **Location:** supplement / 前提の検討, third bullet
- **Detail:** The bullet asserts 'C∩α ∈ L_δ までは言えない（Kunen 第 VI 章の演習 11）'. This is a strong negative claim about what cannot be proved, and it is not established by the page; moreover the proof itself (Step 5) shows C∩α = C² where C² is defined inside L_δ from parameters in L_δ, which would actually give C∩α ∈ L_δ if the parameters A∩α, α were in L_δ. The real point is that A∩α and α need not both lie in L_δ (only in L_{q(α)}), so the definition of C² is not carried out inside L_δ. Stating flatly that 'C∩α ∈ L_δ cannot be shown' with a citation to an exercise is an unsupported/overstated side claim.
- **Proposed fix:** Replace with: 'Step 5 で $C\cap\alpha\in L_{q(\alpha)}$ を示すが、$C\cap\alpha\in L_{\delta}$ は一般には言えない。$C^{2}$ の定義に現れる $A\cap\alpha$ や $\alpha$ が $L_{\delta}$ に属するとは限らず、$L_{q(\alpha)}$ で初めて定義が完結するからである。そのため $\mathcal{A}_{\alpha}$ を $L_{\delta}$ ではなく $L_{q(\alpha)}$ で定義した。'
- **Reported:** 2026-10-28 (10fede1)

### ISSUE-0004 [Open] Hypcheck comment on absoluteness of <_L overstated
- **Category:** Supplement/remark error
- **Location:** hypcheck, third bullet
- **Detail:** The hypcheck says 'Step 6 で <_L の絶対性が本質的に効く。任意の整列順序から作ったスコーレム関数では、崩壊した側で同じ関数を「内側から」定義できるとは限らない。' The first sentence is fine, but the second is an overstatement presented as fact: it is not shown (and not generally true as stated) that using an arbitrary well-order necessarily breaks the argument; the actual requirement is that the well-order be definable/absolute so that K² can be defined inside L_δ. The phrasing 'とは限らない' is acceptable as a hedge, but the surrounding text presents it as the reason K² is definable, which conflates 'definable in L_δ' with 'absolute'. This is a minor imprecision rather than a hard error; flagging for correction of the causal claim.
- **Proposed fix:** Replace with: 'Step 6 で $<_{L}$ の絶対性が本質的に効く。$<_{L}$ は $L_{\delta}$ の中で絶対的に定義できるため、$K^{2}$ を $L_{\delta}$ の中の概念だけで定義でき、$C^{2}\in L_{q(\alpha)}$ が言える。一般の整列順序ではこの「内側からの定義可能性」が保証されない。'
- **Reported:** 2026-10-28 (10fede1)
