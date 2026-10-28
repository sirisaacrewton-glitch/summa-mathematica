# Verification tracker: `01-foundations/01-general-logic/03-modal-logic/04-completeness-decidability.html`

<!-- source: 01-foundations/01-general-logic/03-modal-logic/04-completeness-decidability.html -->
<!-- Managed by scripts/verify.py (GitHub Actions). To dispute an [Open] issue, add a line starting with
     **Opus Rebuttal:** at the end of that issue and push; the next run judges it. Do not edit other lines. -->

- Last verified: 2026-10-28 (commit 048145a, deepseek-chat)
- Open: 2 / Resolved: 0 / Ignored: 1

## Summary of the last run

The page's proofs and the finite-model constructions are essentially correct. ISSUE-0001 is resolved by the stated convention that $\Box B\in w$ presupposes $\Box B\in\mathrm{Sub}(D)$, so the rebuttal stands. ISSUE-0002 remains open: the supplement's claim that finite filtration 'is essential' for GL completeness is overstated. A new medium-confidence supplement issue concerns the attribution of decidability to Solovay's theorem, which conflates the finite-model-property proof of decidability with the arithmetic transfer via Solovay's arithmetical completeness.

## Issues

### ISSUE-0001 [Ignored: Valid Rebuttal] GL completeness: second condition of R not verified for the constructed x
- **Category:** Logical gap
- **Location:** logic:completeness-gl / proof, 後半
- **Detail:** The relation is defined as wRx iff (i) for all □B∈w, B,□B∈x, and (ii) there exists □E∈Sub(D) with □E∈x and □E∉w. In the 後半 the text takes x⊇X and asserts the second condition is satisfied by E:=B because □B∈x and □B∉w. But □B∈x is only guaranteed if □B∈Sub(D); the hypothesis is □B∉w, which presupposes □B∈Sub(D) (as stated at the start of the section), so this is fine only if one notes it. More importantly, the first condition requires that for every □C∈w we have C∈x AND □C∈x; X contains C and □C for each □C∈w, so this holds. However the text never checks that □B∈Sub(D) so that '□B∈x' follows from X⊆x; this is implicit but should be stated. Minor but a genuine gap in the verification of condition (ii).
- **Proposed fix:** Since □B∉w and w⊆Φ, we have □B∈Sub(D), so □B∈X⊆x; together with □B∉w this gives the second condition with E:=B. Also, for each □C∈w, both C and □C belong to X⊆x, giving the first condition.
- **Reported:** 2026-10-28 (8ccef3d)
- **History:** 2026-10-28 (048145a): Ignored: Valid Rebuttal — The section convention explicitly states that writing $\Box B\in w$ also means $\Box B\in\mathrm{Sub}(D)$, so $\Box B\in X\subseteq x$ is justified; the rebuttal is correct.
**Opus Rebuttal:** The section convention stated just before these theorems says that $\Box B$ always denotes an element of $\mathrm{Sub}(D)$ ('$\Box B\in w$ と書けば $\Box B\in\mathrm{Sub}(D)$ も意味する'), so $\Box B\in X\subseteq x$ is covered.

### ISSUE-0002 [Open] Claim that GL's canonical model is not conversely well-founded is imprecise
- **Category:** Supplement/remark error
- **Location:** supplement (高い視点から)
- **Detail:** The supplement says 'GL ではカノニカルモデルそのものは逆整礎でないとされ（Boolos 第 6 章で扱われる）'. The standard fact is that the canonical model of GL is not conversely well-founded (it contains an infinite ascending R-chain, e.g. via worlds containing ◇⊤-type formulas), which is correct in substance, but the phrasing 'とされ' (is said to be) and the attribution are vague. More seriously, the supplement then says 'この有限化が本質的である' implying the finite model property is essential for completeness; but GL's completeness can also be proved via the canonical model together with the fact that GL is characterized by its irreflexive transitive frames (the canonical model is not itself a GL-frame, but completeness w.r.t. GL-frames still holds). The claim that finite filtration 'is essential' overstates the matter.
- **Proposed fix:** The canonical model of GL is transitive but not conversely well-founded (it contains an infinite R-chain), so it is not itself a GL-frame; the finite filtration construction used here yields directly a finite irreflexive transitive frame, which is a convenient route to the finite frame property (and hence decidability), though GL's completeness w.r.t, GL-frames can also be obtained by other means.
- **Reported:** 2026-10-28 (8ccef3d)
- **History:** 2026-10-28 (048145a): Open — The supplement still says the canonical model of GL is not conversely well-founded and that finite filtration 'is essential', which overstates the matter; GL completeness can also be obtained via the canonical model plus irreflexive-transitive frame characterization, so 'essential' is imprecise.

### ISSUE-0003 [Open] Solovay attribution: decidability of GL does not require Solovay's theorem
- **Category:** Supplement/remark error
- **Location:** supplement (高い視点から)
- **Detail:** The supplement claims that 'on the arithmetic side, the decidability of GL means, through Solovay's theorem, that it is decidable which modal formulas' translations are always provable'. This is misleading: the decidability of GL is established purely by the finite model property proved on this page, and the arithmetic statement (decidability of the set of always-provable translations) follows from Solovay's arithmetical completeness theorem combined with the already-proved decidability of GL. Solovay's theorem is not what yields decidability; it transfers it to the arithmetic side. The phrasing 'through Solovay's theorem ... is decidable' overstates Solovay's role.
- **Proposed fix:** Replace with: '算術の側では、ソロヴェイの算術的完全性定理により $\mathsf{GL}$ は算術的解釈（可証性述語の翻訳）に関して完全である。したがって本ページで示した $\mathsf{GL}$ の決定可能性と合わせて、「どの様相論理式の翻訳が常に証明可能か」が決定可能であることが従う（決定可能性自体は有限モデル性から得られ、ソロヴェイの定理はそれを算術の側へ移す役割を果たす）。'
- **Reported:** 2026-10-28 (048145a)
