# Verification tracker: `05-geometry-topology/01-general-topology/08-counterexamples/01-niemytzki-plane.html`

<!-- source: 05-geometry-topology/01-general-topology/08-counterexamples/01-niemytzki-plane.html -->
<!-- Managed by scripts/verify.py (GitHub Actions). To dispute an [Open] issue, add a line starting with
     **Opus Rebuttal:** at the end of that issue and push; the next run judges it. Do not edit other lines. -->

- Last verified: 2026-10-28 (commit 10fede1, deepseek-chat)
- Open: 4 / Resolved: 0 / Ignored: 0

## Summary of the last run

(none)

## Issues

### ISSUE-0001 [Open] Jones' lemma does not apply to the Sorgenfrey plane as stated (not second countable / not separable via the usual argument)
- **Category:** Supplement/remark error
- **Location:** supplement / 類似の例
- **Detail:** The supplement claims the Sorgenfrey plane is separable and that the anti-diagonal is a closed discrete subset of size $2^{\aleph_{0}}$, so Jones' lemma gives non-normality. The Sorgenfrey plane is indeed not normal, but the stated reason is wrong: the Sorgenfrey line is separable (rationals are dense), but the Sorgenfrey *plane* is NOT separable (the Sorgenfrey plane has a countable dense set only if... in fact the Sorgenfrey plane is not separable; its density is $2^{\aleph_{0}}$). Hence Jones' lemma (which requires a countable dense subset) cannot be applied to the Sorgenfrey plane. The anti-diagonal is closed discrete of size continuum, but there is no countable dense set, so the Jones' lemma argument fails. The non-normality of the Sorgenfrey plane is proved by a direct argument (the anti-diagonal and its 'mirror' cannot be separated), not by Jones' lemma.
- **Proposed fix:** Replace with: 「ゾルゲンフライ平面（ゾルゲンフライ直線の平方）も正規でないが、これはジョーンズの補題では示せない（ゾルゲンフライ平面は可分でない）。反対角線 $\{(x,-x)\}$ とその鏡像が交わらない開集合で分けられないことを直接示す。」
- **Reported:** 2026-10-28 (10fede1)

### ISSUE-0002 [Open] Claim about subspaces with countable boundary and Jones' lemma is imprecise
- **Category:** Supplement/remark error
- **Location:** supplement / 前提を変えると
- **Detail:** The supplement says: keeping only rational points of the x-axis gives a subspace where the boundary is countable and 'Jones' lemma gives no contradiction'. This is misleading: the Niemytzki plane restricted to a countable subset of the boundary is actually normal (it is a countable union... more precisely it is second countable? No). The statement 'Jones' lemma gives no contradiction' is technically true but the phrasing suggests the subspace might still be non-normal; the real point is that with a countable boundary the Jones bound $2^{\aleph_0}\le 2^{\aleph_0}$ is satisfied and no contradiction arises, which is correct. However the claim that removing separability is what matters is imprecise: the subspace with countable boundary is still separable, so it is not 'removing separability' but reducing $|D|$. The sentence conflates two different modifications.
- **Proposed fix:** Clarify: 「境界線を可算部分集合に制限すると $|D|=\aleph_{0}$ となりジョーンズの補題の不等式 $2^{\aleph_{0}}\le2^{\aleph_{0}}$ は矛盾を生まない（この部分空間は実際に正規である）。」
- **Reported:** 2026-10-28 (10fede1)

### ISSUE-0003 [Open] Normal Moore space conjecture remark is imprecise/overstated
- **Category:** Supplement/remark error
- **Location:** supplement / 高い視点から
- **Detail:** The supplement states that whether normality holds for subspaces with $|L|=\aleph_{1}<2^{\aleph_{0}}$ depends on CH or Martin's axiom, citing the 'normal Moore space conjecture'. This is imprecise: the Niemytzki plane is not a Moore space in the usual sense required (it is a Moore space actually — the Niemytzki plane IS a Moore space). But the claim that the relevant question 'depends on CH or MA' is stated too vaguely and the attribution to the normal Moore space conjecture is not accurate as phrased: the normal Moore space conjecture concerns whether every normal Moore space is metrizable, and its independence is a separate matter. The specific statement about subspaces with $|L|=\aleph_1$ is not a standard formulation and is stated without justification.
- **Proposed fix:** Either remove the sentence or replace with a precise statement: 「ニェミツキ平面はムーア空間であり、正規ムーア空間予想（正規ムーア空間は距離化可能か）は集合論的公理に独立であることが知られている（範囲外）。」
- **Reported:** 2026-10-28 (10fede1)

### ISSUE-0004 [Open] Hypcheck comment claims explicit non-separable closed sets via Baire category but the referenced problem uses a different argument
- **Category:** Unsupported fact
- **Location:** top:niemytzki-not-normal / hypcheck
- **Detail:** The hypcheck says that taking $A$ = rational points and $L\setminus A$ = irrational points gives closed sets that cannot be separated, provable via the Baire category theorem (referencing top:prob-np-rationals). This is correct in substance (the problem does prove it via Baire category). However, the phrasing '明示的には、$A$ を有理数の点、$L\setminus A$ を無理数の点とすれば' is fine. No error here — this is actually correct. Not reporting.
- **Proposed fix:** No change needed.
- **Reported:** 2026-10-28 (10fede1)
