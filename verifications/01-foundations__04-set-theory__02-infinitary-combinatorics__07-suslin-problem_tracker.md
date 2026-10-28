# Verification tracker: `01-foundations/04-set-theory/02-infinitary-combinatorics/07-suslin-problem.html`

<!-- source: 01-foundations/04-set-theory/02-infinitary-combinatorics/07-suslin-problem.html -->
<!-- Managed by scripts/verify.py (GitHub Actions). To dispute an [Open] issue, add a line starting with
     **Opus Rebuttal:** at the end of that issue and push; the next run judges it. Do not edit other lines. -->

- Last verified: 2026-10-28 (commit 8ccef3d, deepseek-chat)
- Open: 3 / Resolved: 0 / Ignored: 0

## Summary of the last run

The page is largely correct. The main genuine problems are in the proof of set:ma-sh and its hypcheck: (1) the derivation of MA(ℵ₁) from MA+¬CH misattributes the role of ¬CH versus MA, and (2) the hypcheck falsely claims MA(ℵ₁) implies 2^{ℵ₀}>ℵ₁, citing set:ma-continuum-false (which is about MA(2^{ℵ₀})). The supplement on CH and MA is imprecise in its justification. The remaining supplements and facts (Suslin independence, reals characterization, Kunen comparison, Dedekind completion) check out.

## Issues

### ISSUE-0001 [Open] MA+¬CH implies MA(ℵ₁) is not from ¬CH alone
- **Category:** Supplement/remark error
- **Location:** set:ma-sh / proof, second paragraph
- **Detail:** The proof says: 'MA+¬CH のとき、¬CH より ℵ₁<2^{ℵ₀} なので MA の定義から MA(ℵ₁) が成り立つ'. This is wrong: MA(κ) for all κ<2^{ℵ₀} is exactly the content of MA, and ¬CH alone (ℵ₁<2^{ℵ₀}) does not give MA(ℵ₁). The correct derivation is: MA says MA(κ) holds for every κ<2^{ℵ₀}; since ¬CH gives ℵ₁<2^{ℵ₀}, we get MA(ℵ₁). The phrase '¬CH より…MA の定義から' misattributes the role: it is MA (the hypothesis), not ¬CH, that yields MA(ℵ₁).
- **Proposed fix:** Replace with: 'MA+¬CH のとき、MA はすべての κ<2^{ℵ₀} に対して MA(κ) を主張し、¬CH より ℵ₁<2^{ℵ₀} なので MA(ℵ₁) が成り立つ。'
- **Reported:** 2026-10-28 (8ccef3d)

### ISSUE-0002 [Open] Hypcheck claim that MA(ℵ₁) implies ¬CH is false
- **Category:** Supplement/remark error
- **Location:** set:ma-sh / hypcheck
- **Detail:** The hypcheck states 'MA(ℵ₁) は \ref{set:ma-continuum-false} により 2^{ℵ₀}>ℵ₁ を含意する'. But set:ma-continuum-false is 'MA(2^{ℵ₀}) は偽', which concerns MA(2^{ℵ₀}), not MA(ℵ₁). MA(ℵ₁) is consistent with CH (indeed CH implies MA(ℵ₁)), so MA(ℵ₁) does not imply 2^{ℵ₀}>ℵ₁. This is a false claim and a mis-citation.
- **Proposed fix:** Delete the sentence, or replace with: 'MA(ℵ₁) は CH と両立する（CH は MA(ℵ₁) を含意する）ので、この定理の仮定は ¬CH を含まない。¬CH を含むのは MA+¬CH のほうである。'
- **Reported:** 2026-10-28 (8ccef3d)

### ISSUE-0003 [Open] CH makes MA trivial claim is imprecise
- **Category:** Supplement/remark error
- **Location:** set:ma-sh / supplement 'CH と MA'
- **Detail:** The supplement says 'CH のもとでは MA は自明に成り立つ…それは MA(κ) を κ<2^{ℵ₀}=ℵ₁、つまり MA(ℵ₀) としか言っていないからで、SH は導かない'. Under CH, MA holds and reduces to MA(ℵ₀) (since the only κ<ℵ₁ are countable), and MA(ℵ₀) is a theorem of ZFC, so MA adds nothing. But the phrasing 'MA(κ) を κ<2^{ℵ₀}=ℵ₁、つまり MA(ℵ₀) としか言っていない' is slightly off: MA(κ) for all κ<ℵ₁ includes all countable κ, i.e. is equivalent to MA(ℵ₀) only because MA(ℵ₀) is automatic. More importantly, the claim 'SH は導かない' is correct but the reason given ('trivial') should be that CH is compatible with ¬SH (◇ holds under V=L which implies CH, giving Suslin lines). The statement as written is acceptable in substance but the justification is imprecise; the real point is that CH does not decide SH.
- **Proposed fix:** Rewrite: 'CH のもとでは MA は MA(ℵ₀) と同値になり、これは ZFC でつねに成り立つので MA は新たな情報をもたらさない。実際 CH は ¬SH と両立する（V=L で ◇ が成り立ち、CH も成り立つ）ので、CH は SH を導かない。'
- **Reported:** 2026-10-28 (8ccef3d)
