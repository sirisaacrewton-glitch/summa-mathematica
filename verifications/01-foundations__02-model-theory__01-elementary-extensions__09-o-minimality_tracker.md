# Verification tracker: `01-foundations/02-model-theory/01-elementary-extensions/09-o-minimality.html`

<!-- source: 01-foundations/02-model-theory/01-elementary-extensions/09-o-minimality.html -->
<!-- Managed by scripts/verify.py (GitHub Actions). To dispute an [Open] issue, add a line starting with
     **Opus Rebuttal:** at the end of that issue and push; the next run judges it. Do not edit other lines. -->

- Last verified: 2026-10-28 (commit 10fede1, deepseek-chat)
- Open: 3 / Resolved: 0 / Ignored: 0

## Summary of the last run

(none)

## Issues

### ISSUE-0001 [Open] Wilkie's theorem misattributed to 1996 and stated as adding exp to RCF
- **Category:** Supplement/remark error
- **Location:** supplement / 似た定理
- **Detail:** The supplement says that $(\mathbb{R},+,\cdot,<,\exp)$ (Wilkie 1996) is a known o-minimal structure. Wilkie's 1996 paper ("Model completeness results for expansions of the ordered field of real numbers by restricted Pfaffian functions and the exponential function", JAMS 9 (1996)) proves *model completeness* of $\mathbb{R}_{\exp}$, not o-minimality. O-minimality of $\mathbb{R}_{\exp}$ was proved by Wilkie (1996) only via the combined result with Macintyre–Wilkie (1996) on o-minimality of $\mathbb{R}_{\exp}$; more precisely, o-minimality of $\mathbb{R}_{\exp}$ is due to Wilkie (1996) building on Macintyre–Wilkie (1996) "On the decidability of the real exponential field". The attribution as stated ("Wilkie 1996" for o-minimality) is at best imprecise and conflates model completeness with o-minimality.
- **Proposed fix:** Replace with: "指数関数を加えた $(\mathbb{R},+,\cdot,<,\exp)$ は o 極小である（Wilkie 1996 のモデル完全性と Macintyre–Wilkie 1996 の結果を合わせて得られる；o 極小性自体は Wilkie による）。"
- **Reported:** 2026-10-28 (10fede1)

### ISSUE-0002 [Open] Strong minimality described as 'finite or cofinite' without order — imprecise
- **Category:** Supplement/remark error
- **Location:** supplement / 似た定理
- **Detail:** The supplement says strong minimality is "the analogue in the order-free case of 'definable sets are finite or cofinite'." Strong minimality is: every definable subset of $M^{n}$ (all $n$) is finite or cofinite — i.e. it is a condition on all powers, not just on $M$, and it is not merely 'finite or cofinite subsets of $M$'. The phrase as written suggests a one-dimensional condition, which is the definition of *minimality*, not strong minimality. This is an imprecise/overstated identification.
- **Proposed fix:** Replace with: "強極小性とは、すべての $n$ について $M^{n}$ の定義可能部分集合が有限または補有限であることで、順序のない場合の o 極小性の類似である（o 極小性が $M$ の定義可能部分集合についての条件であるのに対し、強極小性はすべての冪についての条件である）。"
- **Reported:** 2026-10-28 (10fede1)

### ISSUE-0003 [Open] Claim that 'pathological functions cannot live in o-minimal world' overstated for nowhere-differentiable functions
- **Category:** Supplement/remark error
- **Location:** supplement / 高い視点から
- **Detail:** The supplement asserts that pathological functions such as a nowhere-differentiable continuous function cannot live in an o-minimal world. But o-minimal structures can contain continuous definable functions that are nowhere differentiable on some interval? In fact, in an o-minimal expansion of a real closed field, every definable function is piecewise monotone and continuous, hence differentiable almost everywhere in the sense that the set of differentiability points is definable and cofinite? More carefully: monotonicity theorem gives piecewise monotone continuous; a monotone function can still fail to be differentiable on a dense set, but a *definable* function in an o-minimal structure is piecewise $C^{1}$ (by the $C^{1}$-version of the monotonicity theorem / cell decomposition), so a definable function cannot be nowhere differentiable on an interval. However, the statement as written lumps 'nowhere differentiable' together with '$\sin$'s infinite oscillation' as things that 'cannot live' in o-minimality, which is correct for definable functions but the phrasing 'pathological functions ... cannot live in o-minimal world' is too strong: o-minimal structures can define functions that are continuous but not differentiable at infinitely many points (e.g. $|x|$), and the claim should be restricted to *nowhere differentiable on an interval*. As stated it is an overstatement.
- **Proposed fix:** Replace with: "至るところ微分不可能な関数や $\sin$ のような無限振動は、o 極小構造では（区間上）定義可能関数として現れない：定義可能関数は単調性定理（およびその $C^{1}$ 版）により有限個の区間で単調・連続、実閉体上では区分的に $C^{1}$ になるからである。"
- **Reported:** 2026-10-28 (10fede1)
