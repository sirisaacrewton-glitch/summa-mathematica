# Verification tracker: `02-algebra/03-commutative-algebra/02-commutative-algebra/01-local-properties.html`

<!-- source: 02-algebra/03-commutative-algebra/02-commutative-algebra/01-local-properties.html -->
<!-- Managed by scripts/verify.py (GitHub Actions). To dispute an [Open] issue, add a line starting with
     **Opus Rebuttal:** at the end of that issue and push; the next run judges it. Do not edit other lines. -->

- Last verified: 2026-10-28 (commit 8ccef3d, deepseek-chat)
- Open: 2 / Resolved: 0 / Ignored: 0

## Summary of the last run

The main body (fraction modules, exactness of localization, local properties, Nakayama, determinant trick, Vasconcelos, local projective free) is logically sound and the citations match their targets. The genuine problems are concentrated in the supplement: the assertion that the rank function of a finitely generated projective module is locally constant on $\Spec A$ is false without connectedness of $\Spec A$ (counterexample $A=\Z/6\Z$, $P=\Z/2\Z$), and the surrounding discussion of local freeness versus projectivity should explicitly require finite presentation. No issues were found in the proofs or in the stated theorems.

## Issues

### ISSUE-0001 [Open] Incorrect claim that rank is locally constant for arbitrary finitely generated projective modules
- **Category:** Supplement/remark error
- **Location:** supplement (局所的に自由)
- **Detail:** The supplement states that for a general commutative ring $A$ and a finitely generated projective $P$, the function $\mathfrak{p}\mapsto\operatorname{rank}P_{\mathfrak{p}}$ is a locally constant function on $\Spec A$. This is false without a hypothesis such as $\Spec A$ being connected, or more precisely without $P$ being of finite presentation / $A$ being such that the rank is locally constant. A standard counterexample: $A=\Z/6\Z\cong\Z/2\Z\times\Z/3\Z$, $P=\Z/2\Z$ (a direct summand of $A$, hence projective and finitely generated). Then $P_{(2)}\cong\Z/2\Z$ has rank $1$ over $A_{(2)}\cong\Z/2\Z$, while $P_{(3)}=0$ has rank $0$ over $A_{(3)}\cong\Z/3\Z$. The rank jumps between the two connected components, so it is not locally constant on $\Spec A$ (which is disconnected). The claim is only true when the rank is defined as a locally constant function, i.e. when $\Spec A$ is connected or when one restricts to the open-and-closed pieces where the rank is constant.
- **Proposed fix:** Replace with: "$\mathfrak{p}\mapsto\operatorname{rank}P_{\mathfrak{p}}$ is a locally constant function on each connected component of $\Spec A$ (in particular, if $\Spec A$ is connected, it is constant). In general it is only a function that is constant on the open-and-closed subsets on which the rank is defined; without connectedness of $\Spec A$ it need not be locally constant."
- **Reported:** 2026-10-28 (8ccef3d)

### ISSUE-0002 [Open] Overstated claim that finitely presented locally free implies projective without qualification
- **Category:** Supplement/remark error
- **Location:** supplement (局所的に自由)
- **Detail:** The supplement says "逆に、有限表示で局所自由な加群は射影的である" (conversely, a finitely presented locally free module is projective). This is correct as stated for finitely presented modules, but the surrounding sentence pairs it with the previous statement about arbitrary finitely generated projective modules being locally free, suggesting an equivalence for finitely generated modules. The precise statement requires finite presentation (finite generation alone is insufficient: over a non-Noetherian ring a finitely generated locally free module need not be projective). Since the supplement does state 有限表示, this part is acceptable; however the combination with the rank claim above makes the passage misleading. This is a minor imprecision rather than a hard error, so it is reported at medium confidence only in conjunction with the rank issue.
- **Proposed fix:** Clarify: "A finitely presented module that is locally free is projective; finite generation alone does not suffice over a non-Noetherian ring."
- **Reported:** 2026-10-28 (8ccef3d)
