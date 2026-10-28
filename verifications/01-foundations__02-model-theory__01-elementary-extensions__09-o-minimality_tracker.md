# Verification tracker: `01-foundations/02-model-theory/01-elementary-extensions/09-o-minimality.html`

<!-- source: 01-foundations/02-model-theory/01-elementary-extensions/09-o-minimality.html -->
<!-- Managed by scripts/verify.py (GitHub Actions). To dispute an [Open] issue, add a line starting with
     **Opus Rebuttal:** at the end of that issue and push; the next run judges it. Do not edit other lines. -->

- Last verified: 2026-10-28 (commit 8ccef3d, deepseek-chat)
- Open: 3 / Resolved: 0 / Ignored: 0

## Summary of the last run

The main text (definitions, lemmas, monotonicity theorem and its proof, corollary, problems) is logically sound; the cited labels match their use. The genuine problems are confined to the supplement: the attribution of o-minimality of $\mathbb{R}_{\exp}$ and of restricted analytic expansions is imprecise/conflated, the claim that elementary equivalence preserves o-minimality is misattributed to Knight–Pillay–Steinhorn (it is elementary), and the 'strongly minimal as order-free analogue' remark is loose. No issues in the proofs or hypcheck were found.

## Issues

### ISSUE-0001 [Open] Wilkie's theorem misattributed to 'exponential function added to RCF' as an o-minimal structure
- **Category:** Supplement/remark error
- **Location:** supplement / 似た定理
- **Detail:** The supplement states that $(\mathbb{R},+,\cdot,<,\exp)$ (Wilkie 1996) is a known o-minimal structure. Wilkie's 1996 theorem is that the expansion of the real field by the exponential function is *model complete* (o-minimality of $\mathbb{R}_{\exp}$ was proved later, by Wilkie himself in 1996 'On the definability...' / van den Dries–Miller–Wilkie; the standard attribution is Wilkie's o-minimality theorem, but the 1996 paper usually cited for model completeness is a different result). More importantly, the sentence lumps 'restricted analytic functions added to RCF' and '$\mathbb{R}_{\exp}$' together as if both are established by the same 1996 result, which is imprecise: restricted analytic expansions are o-minimal by Denef–van den Dries, while $\mathbb{R}_{\exp}$ o-minimality is Wilkie's theorem (often dated 1996 but the o-minimality statement is the content of a separate, later argument). The attribution as written is at best imprecise and conflates two distinct theorems.
- **Proposed fix:** Replace with: '実閉体に制限された解析関数を加えた構造は o 極小である（Denef–van den Dries）。また $(\mathbb{R},+,\cdot,<,\exp)$ が o 極小であることは Wilkie の定理として知られている（Wilkie 1996 のモデル完全性と、その後の o 極小性の議論による）。'
- **Reported:** 2026-10-28 (8ccef3d)

### ISSUE-0002 [Open] Claim that 'structures elementarily equivalent to an o-minimal structure are o-minimal' attributed to the same paper without qualification
- **Category:** Supplement/remark error
- **Location:** supplement / 強い o 極小性
- **Detail:** The supplement says 'o 極小構造に初等同値な構造はすべて o 極小であることが知られている（同論文...）'. This is true, but it is elementary (o-minimality is expressible by a first-order scheme), not a result of Knight–Pillay–Steinhorn 1986. Attributing it to '同論文' (the same paper) is a misattribution. Also the heading '強い o 極小性' is misleading: strong o-minimality is a different notion (used for the 'strongly minimal' analogy), and elementary equivalence preserving o-minimality is not 'strong o-minimality'.
- **Proposed fix:** Replace with: '**初等同値.** o 極小性は一階の論理式のスキームで書けるので、o 極小構造に初等同値な構造も o 極小である（定義から直ちに従う）。' and remove the '同論文' attribution and the heading '強い o 極小性'.
- **Reported:** 2026-10-28 (8ccef3d)

### ISSUE-0003 [Open] Strongly minimal described as 'the order-free analogue' of o-minimality — imprecise
- **Category:** Supplement/remark error
- **Location:** supplement / 似た定理
- **Detail:** The supplement says '強極小は「定義可能集合が有限か補有限」という、順序のない場合の類似である'. Strong minimality is: every definable subset of $M^{n}$ (for the pure structure, in one variable it suffices) is finite or cofinite — but the correct one-variable characterization is 'every definable subset of $M$ is finite or cofinite', which is exactly what is written. However, calling it 'the order-free analogue' is imprecise: strong minimality is a property of the whole structure (all $n$), and the one-variable condition 'finite or cofinite' is *equivalent* to strong minimality only via the Baldwin–Lachlan / Marsh characterization; the analogy 'order-free' is loose but the substantive claim (finite or cofinite) is correct. This is borderline; the real issue is that o-minimality's one-variable condition is *not* equivalent to the higher-dimensional cell decomposition without proof, whereas strong minimality's one-variable condition *is* equivalent to strong minimality. The parallel drawn is thus slightly misleading but not false.
- **Proposed fix:** Optionally clarify: '強極小性は「$M$ の定義可能部分集合が有限か補有限」と同値な性質で（Baldwin–Lachlan）、順序を考えない場合の類似とみなせる。'
- **Reported:** 2026-10-28 (8ccef3d)
