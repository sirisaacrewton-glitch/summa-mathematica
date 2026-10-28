# Verification tracker: `01-foundations/01-general-logic/03-modal-logic/04-completeness-decidability.html`

<!-- source: 01-foundations/01-general-logic/03-modal-logic/04-completeness-decidability.html -->
<!-- Managed by scripts/verify.py (GitHub Actions). To dispute an [Open] issue, add a line starting with
     **Opus Rebuttal:** at the end of that issue and push; the next run judges it. Do not edit other lines. -->

- Last verified: 2026-10-28 (commit 8ccef3d, deepseek-chat)
- Open: 2 / Resolved: 0 / Ignored: 0

## Summary of the last run

The page is largely correct: the finite canonical model constructions for K, T, K4, S4, B, S5, GL and the truth lemma are sound, the tree-unravelling argument for GL is valid, and the two problems have correct countermodels. Two minor issues were found: an implicit step in the GL completeness proof (that □B∈Sub(D) so that □B∈x) and an overstated/imprecise remark in the supplement about GL's canonical model and the necessity of finite filtration.

## Issues

### ISSUE-0001 [Open] GL completeness: second condition of R not verified for the constructed x
- **Category:** Logical gap
- **Location:** logic:completeness-gl / proof, 後半
- **Detail:** The relation is defined as wRx iff (i) for all □B∈w, B,□B∈x, and (ii) there exists □E∈Sub(D) with □E∈x and □E∉w. In the 後半 the text takes x⊇X and asserts the second condition is satisfied by E:=B because □B∈x and □B∉w. But □B∈x is only guaranteed if □B∈Sub(D); the hypothesis is □B∉w, which presupposes □B∈Sub(D) (as stated at the start of the section), so this is fine only if one notes it. More importantly, the first condition requires that for every □C∈w we have C∈x AND □C∈x; X contains C and □C for each □C∈w, so this holds. However the text never checks that □B∈Sub(D) so that '□B∈x' follows from X⊆x; this is implicit but should be stated. Minor but a genuine gap in the verification of condition (ii).
- **Proposed fix:** Since □B∉w and w⊆Φ, we have □B∈Sub(D), so □B∈X⊆x; together with □B∉w this gives the second condition with E:=B. Also, for each □C∈w, both C and □C belong to X⊆x, giving the first condition.
- **Reported:** 2026-10-28 (8ccef3d)

### ISSUE-0002 [Open] Claim that GL's canonical model is not conversely well-founded is imprecise
- **Category:** Supplement/remark error
- **Location:** supplement (高い視点から)
- **Detail:** The supplement says 'GL ではカノニカルモデルそのものは逆整礎でないとされ（Boolos 第 6 章で扱われる）'. The standard fact is that the canonical model of GL is not conversely well-founded (it contains an infinite ascending R-chain, e.g. via worlds containing ◇⊤-type formulas), which is correct in substance, but the phrasing 'とされ' (is said to be) and the attribution are vague. More seriously, the supplement then says 'この有限化が本質的である' implying the finite model property is essential for completeness; but GL's completeness can also be proved via the canonical model together with the fact that GL is characterized by its irreflexive transitive frames (the canonical model is not itself a GL-frame, but completeness w.r.t. GL-frames still holds). The claim that finite filtration 'is essential' overstates the matter.
- **Proposed fix:** The canonical model of GL is transitive but not conversely well-founded (it contains an infinite R-chain), so it is not itself a GL-frame; the finite filtration construction used here yields directly a finite irreflexive transitive frame, which is a convenient route to the finite frame property (and hence decidability), though GL's completeness w.r.t, GL-frames can also be obtained by other means.
- **Reported:** 2026-10-28 (8ccef3d)
