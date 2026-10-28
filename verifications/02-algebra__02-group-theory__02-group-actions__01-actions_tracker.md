# Verification tracker: `02-algebra/02-group-theory/02-group-actions/01-actions.html`

<!-- source: 02-algebra/02-group-theory/02-group-actions/01-actions.html -->
<!-- Managed by scripts/verify.py (GitHub Actions). To dispute an [Open] issue, add a line starting with
     **Opus Rebuttal:** at the end of that issue and push; the next run judges it. Do not edit other lines. -->

- Last verified: 2026-10-28 (commit 10fede1, deepseek-chat)
- Open: 2 / Resolved: 0 / Ignored: 0

## Summary of the last run

The main definitions, propositions and proofs (orbit-stabilizer, core-index, normalizer) are logically sound and the citations match their targets. The only genuine problems are in side remarks: the hypcheck example about $D_{n}$ embedding into $S_{n}$ is numerically wrong (Cayley embeds $D_{n}$ into $S_{2n}$), and the supplement's claim that Cayley's theorem is a special case of the Yoneda embedding is stated too strongly without the categorical qualifications needed to make it precise.

## Issues

### ISSUE-0001 [Open] Dihedral group order/embedding claim in hypcheck
- **Category:** Supplement/remark error
- **Location:** grp:cayley / hypcheck
- **Detail:** The hypcheck says the embedding is inefficient, giving the example "$D_{n}$ is $2n$ elements but embeds in $S_{n}$". This is wrong: the regular representation embeds $D_{n}$ (order $2n$) into $S_{2n}$, not $S_{n}$. The natural action of $D_{n}$ on $n$ vertices gives a map into $S_{n}$, but that map is not injective in general (e.g. for $n$ even the reflection through opposite vertices acts trivially on... actually it is injective for $n\ge 3$, but the point is the Cayley embedding is into $S_{2n}$). As stated, the claim that Cayley embeds $D_{n}$ into $S_{n}$ is false for the regular representation and misrepresents the example.
- **Proposed fix:** Replace with: "$S_{n}$ is large: the regular representation embeds a group of order $n$ into $S_{n}$, i.e. into a group of order $n!$. For example $D_{n}$ (order $2n$) is embedded by Cayley into $S_{2n}$, not into $S_{n}$."
- **Reported:** 2026-10-28 (10fede1)

### ISSUE-0002 [Open] Yoneda/Cayley analogy overstated
- **Category:** Supplement/remark error
- **Location:** supplement (高い視点)
- **Detail:** The supplement claims Cayley's theorem is "a special case of the Yoneda embedding" in this categorical view. This is a common but imprecise statement: Cayley corresponds to the Yoneda embedding only after restricting to the full subcategory on one object and passing to the underlying-set functor; the precise statement requires care (the Yoneda lemma gives the embedding $G\to\mathrm{Aut}(\text{underlying set of the regular representation})$). As written ("同じものである" and "特別な場合にあたる") it is an overstatement without the necessary hypotheses about the functor category and the forgetful functor.
- **Proposed fix:** Soften to: "Viewing $G$ as a one-object category, an action on $X$ is a functor to $\Set$; the regular action corresponds to the representable functor, and Cayley's theorem is the injectivity of the Yoneda embedding $G\to\Set^{G^{\mathrm{op}}}$ restricted to this representable functor (the Yoneda lemma identifies the endomorphisms of the representable functor with $G$)."
- **Reported:** 2026-10-28 (10fede1)
