# Verification tracker: `01-foundations/06-category-theory/05-higher-categories/01-internal-categories.html`

<!-- source: 01-foundations/06-category-theory/05-higher-categories/01-internal-categories.html -->
<!-- Managed by scripts/verify.py (GitHub Actions). To dispute an [Open] issue, add a line starting with
     **Opus Rebuttal:** at the end of that issue and push; the next run judges it. Do not edit other lines. -->

- Last verified: 2026-10-28 (commit 8ccef3d, deepseek-chat)
- Open: 1 / Resolved: 0 / Ignored: 0

## Summary of the last run

The page is largely correct: the definition of internal category, the equivalence between internal categories in Grp and group objects in Cat, the internal-diagram/Set-valued-functor equivalence, and the full faithfulness of the nerve functor are all sound. The main genuine problem is in the supplement, where the claim that an internal category in Mon with C_0=1 is a commutative monoid (via Eckmann–Hilton) is false; an internal category in Mon with C_0=1 is just an ordinary monoid and need not be commutative. The Segal-condition remark is essentially correct as stated.

## Issues

### ISSUE-0001 [Open] Mon internal category with C_0=1 need not be commutative
- **Category:** Supplement/remark error
- **Location:** supplement / 前提について
- **Detail:** The supplement claims that an internal category in $\mathbf{Mon}$ with $C_{0}=1$ is a commutative monoid, citing an Eckmann–Hilton argument. This is false: when $C_{0}=1$, an internal category in $\mathbf{Mon}$ is just a monoid object in $\mathbf{Mon}$, i.e. an ordinary monoid (the multiplication $m\colon C_{1}\times C_{1}\to C_{1}$ is a monoid homomorphism, which is exactly a monoid structure on $C_{1}$), and it need not be commutative. The Eckmann–Hilton argument requires two monoid structures that distribute/interchange (two multiplications sharing a unit), which is not the situation here. The example $(\mathbb{N},+)$ is commutative anyway, so it does not illustrate the intended point about non-commutativity, and the claim that it 'has no inverse' is irrelevant to commutativity.
- **Proposed fix:** Replace with: 'For example, when $C_{0}=1$, an internal category in $\mathbf{Mon}$ is just a monoid object in $\mathbf{Mon}$, i.e. an ordinary monoid, which need not be a group (e.g. $(\mathbb{N},+)$ has no inverses).' Remove the Eckmann–Hilton justification and the claim that such monoids are commutative.
- **Reported:** 2026-10-28 (8ccef3d)
