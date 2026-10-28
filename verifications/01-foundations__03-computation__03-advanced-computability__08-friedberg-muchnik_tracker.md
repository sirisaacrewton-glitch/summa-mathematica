# Verification tracker: `01-foundations/03-computation/03-advanced-computability/08-friedberg-muchnik.html`

<!-- source: 01-foundations/03-computation/03-advanced-computability/08-friedberg-muchnik.html -->
<!-- Managed by scripts/verify.py (GitHub Actions). To dispute an [Open] issue, add a line starting with
     **Opus Rebuttal:** at the end of that issue and push; the next run judges it. Do not edit other lines. -->

- Last verified: 2026-10-28 (commit 10fede1, deepseek-chat)
- Open: 2 / Resolved: 0 / Ignored: 0

## Summary of the last run

The main proofs (Kleene–Post and Friedberg–Muchnik) are logically sound: the finite extension argument, the priority construction with restraints and witnesses, and the finite injury induction are correct, and the cited labels match their uses. The only genuine problem is in the supplement's '似た定理' paragraph, where the historical claim about Post's simple set and $m$- vs $T$-equivalence is imprecise and conflates $m$-completeness with $T$-completeness. The remaining supplement statements (infinite injury / Sacks density, the 'yielding' metaphor) are acceptable.

## Issues

### ISSUE-0001 [Open] Post's simple set result misstated
- **Category:** Supplement/remark error
- **Location:** supplement / 似た定理
- **Detail:** The supplement says Post showed a simple set is not $m$-equivalent to $\varnothing'$ but could not show it is not $T$-equivalent. In fact Post's simple set construction yields a simple set $S$ with $S\le_{T}\varnothing'$ and $\overline{S}$ immune; the standard statement is that a simple set is not $m$-complete (not $m$-equivalent to $\varnothing'$), and Post's problem was precisely whether one can get a c.e. set that is not $T$-complete (i.e. $<_{T}\varnothing'$). The claim that Post 'showed not $m$-equivalent but not $T$-inequivalent' conflates $m$-completeness with $T$-completeness and is imprecise: non-$m$-completeness of simple sets does not by itself say anything about $T$-completeness, and the historical framing is inaccurate.
- **Proposed fix:** Post's simple set construction gives a simple (hence noncomputable c.e.) set that is not $m$-complete, i.e. not $m$-equivalent to $\varnothing'$; this does not settle whether it is $T$-complete, and Post's problem (whether a c.e. set strictly below $\varnothing'$ exists) remained open until Friedberg and Muchnik.
- **Reported:** 2026-10-28 (10fede1)

### ISSUE-0002 [Open] Sacks density theorem attribution to infinite injury
- **Category:** Supplement/remark error
- **Location:** supplement / 前提を変えると
- **Detail:** The supplement states that the infinite injury method is used for Sacks' density theorem (c.e. degrees are dense). Sacks' density theorem is indeed proved by an infinite injury (priority) argument, so this attribution is acceptable; however the sentence '損傷が無限回起こりうるが各要求の結果はなお極限で定まる「無限損傷法」もあり、サックスの稠密性定理…に使われることが知られている' is correct. No issue.
- **Proposed fix:** No change needed.
- **Reported:** 2026-10-28 (10fede1)
