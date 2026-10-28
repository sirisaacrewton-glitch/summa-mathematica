# Verification tracker: `01-foundations/05-proof-theory/08-ordinal-analysis/06-hydra.html`

<!-- source: 01-foundations/05-proof-theory/08-ordinal-analysis/06-hydra.html -->
<!-- Managed by scripts/verify.py (GitHub Actions). To dispute an [Open] issue, add a line starting with
     **Opus Rebuttal:** at the end of that issue and push; the next run judges it. Do not edit other lines. -->

- Last verified: 2026-10-28 (commit 10fede1, deepseek-chat)
- Open: 4 / Resolved: 0 / Ignored: 0

## Summary of the last run

The main proof (pt:hydra-dies) is logically sound: the ordinal assignment via natural sum decreases at each move, and the hypcheck correctly identifies the uses of strict monotonicity, the grandparent placement, and well-ordering. The problems and solutions are correct. The genuine issues are concentrated in the supplement: the claim that arbitrary replication functions still terminate is true but not covered by the cited theorem (which only allows a constant finite number), and the claim about game length exceeding PA-provably recursive functions is overstated. There is also a possibly improper citation of pt:epsilon0-basic for closure of ε₀ under addition, which should be verified against that proposition's actual content.

## Issues

### ISSUE-0001 [Open] Wrong reference for ε₀ closure under addition
- **Category:** Improper link
- **Location:** pt:natural-sum-basic / proof of item 3
- **Detail:** The proof of item 3 cites \ref{pt:epsilon0-basic} (proposition 1.6, ε₀ の基本性質) for the claim that ε₀ is closed under addition. The label table gives no indication that pt:epsilon0-basic states closure under addition; the cited proposition is about basic properties of ε₀ (typically ε₀ = sup of ω-tower, ε₀ = ω^{ε₀}, ε₀ limit). Closure under addition is a separate fact and is not what the cited result is used for here. If pt:epsilon0-basic does not literally contain 'α,β<ε₀ ⇒ α+β<ε₀', the citation is improper.
- **Proposed fix:** Either cite the specific item of pt:epsilon0-basic that states closure under addition (e.g. \ref{pt:epsilon0-basic.k}), or replace the citation with a direct argument: since α,β<ε₀=ω^{ε₀} and ω^{ε₀} is closed under ordinal addition (ω^{ε₀}·2=ω^{ε₀}), we get α+β<ω^{ε₀}=ε₀.
- **Reported:** 2026-10-28 (10fede1)

### ISSUE-0002 [Open] Overstated claim about arbitrary replication functions
- **Category:** Supplement/remark error
- **Location:** pt:supplement / 前提を変えると
- **Detail:** The supplement says that if the number of copies is changed from 'n at move n' to an arbitrary function, the hydra still dies, citing the last sentence of pt:hydra-dies. But pt:hydra-dies only states that replacing n by any fixed finite number works; it does not cover an arbitrary function of the move number. With an arbitrary (possibly non-monotone, e.g. depending on the whole history) replication function, the ordinal-decrease argument still works because each move replaces ω^{o(P')+1} by a finite natural sum of ω^{o(P')}, which is smaller regardless of how many copies are made. So the statement is true, but the citation to pt:hydra-dies is insufficient: the theorem as stated only allows a constant finite number, not an arbitrary function. The claim is stated more strongly than the cited theorem supports.
- **Proposed fix:** Replace the citation with a direct remark: 'The proof of \ref{pt:hydra-dies} (Step 2) only uses that the number of copies is finite; hence the same argument shows that the hydra dies even if the number of copies at move n is given by any function of n (or of the history) with finite values.'
- **Reported:** 2026-10-28 (10fede1)

### ISSUE-0003 [Open] Imprecise claim about hydra length exceeding PA-provably-recursive functions
- **Category:** Supplement/remark error
- **Location:** pt:supplement / 前提を変えると
- **Detail:** The supplement asserts that with the 'n copies' rule, a simple strategy already gives a length exceeding the PA-provably total recursive functions. This is imprecise: the standard result (Kirby–Paris) is that the hydra termination statement is unprovable in PA, and the length of the game for suitable hydras grows faster than any PA-provably total function. But it is not the case that 'a simple strategy' on 'n copies' alone exceeds all PA-provably recursive functions for every hydra; the growth depends on the initial hydra and the strategy. The statement as written overstates and is not supported by the cited results.
- **Proposed fix:** Rephrase: 'With the n-copies rule, there are hydras and strategies for which the number of moves grows faster than any function provably total in PA; this is the content of the unprovability of hydra termination (\ref{pt:kirby-paris-hydra}).'
- **Reported:** 2026-10-28 (10fede1)

### ISSUE-0004 [Open] Buchholz hydra attribution imprecise
- **Category:** Supplement/remark error
- **Location:** pt:supplement / 前提を変えると
- **Detail:** The supplement says Buchholz's hydra (labelled trees) corresponds to the proof-theoretic ordinal of a stronger system and gives an independent statement. This is broadly correct (Buchholz hydras with labels up to n correspond to Π¹₁-CA₀ etc.), but the phrasing 'a stronger system' is vague and the claim that it 'gives an independent statement' needs the specific system. As stated it is imprecise but not false; borderline. Given the instruction to prefer no report over speculative ones, this is reported only as imprecision.
- **Proposed fix:** Specify: 'Buchholz's hydra with labels in {0,...,n} corresponds to the proof-theoretic ordinal of Π¹₁-CA₀ (for suitable labelling), yielding independence from stronger systems such as Π¹₁-CA₀.'
- **Reported:** 2026-10-28 (10fede1)
