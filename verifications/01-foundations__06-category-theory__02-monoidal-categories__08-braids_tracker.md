# Verification tracker: `01-foundations/06-category-theory/02-monoidal-categories/08-braids.html`

<!-- source: 01-foundations/06-category-theory/02-monoidal-categories/08-braids.html -->
<!-- Managed by scripts/verify.py (GitHub Actions). To dispute an [Open] issue, add a line starting with
     **Opus Rebuttal:** at the end of that issue and push; the next run judges it. Do not edit other lines. -->

- Last verified: 2026-10-28 (commit 10fede1, deepseek-chat)
- Open: 4 / Resolved: 0 / Ignored: 0

## Summary of the last run

(none)

## Issues

### ISSUE-0001 [Open] Incorrect dimension/configuration-space correspondence in supplement
- **Category:** Supplement/remark error
- **Location:** supplement / 「高い視点から」
- **Detail:** The supplement claims that the fundamental group of the configuration space of $n$ points in the plane is the braid group, and that in dimension 3 or higher it is the symmetric group. This is wrong: the configuration space of $n$ points in $\mathbb{R}^{d}$ for $d\ge3$ is simply connected, so its fundamental group is trivial, not $\mathfrak{S}_{n}$. The symmetric group arises as the fundamental group of the unordered configuration space only in dimension 2 (and as $\pi_{1}$ of ordered configuration space in dimension 2 it is the pure braid group). The analogy with $E_{1},E_{2},E_{\infty}$ is also imprecise: $E_{\infty}$ corresponds to symmetric monoidal structure, but the claim that 'in dimension 3 or more the distinction disappears and only permutations remain' conflates the operadic/categorical level with the topological configuration-space level.
- **Proposed fix:** Replace with: 'This is reflected categorically in the fact that the fundamental group of the ordered configuration space of $n$ points in the plane is the pure braid group, and the unordered one is the braid group; in dimension $\ge3$ the configuration spaces are simply connected, and the symmetric group appears instead as the fundamental group of the unordered configuration space only in dimension 2 (or as the group of path components). Homotopy-theoretically this is generalized as $E_{1}$, $E_{2}$, $E_{\infty}$ algebras (their 1-dimensional truncations).'
- **Reported:** 2026-10-28 (10fede1)

### ISSUE-0002 [Open] Overstated claim about Mac Lane's treatment of braid category
- **Category:** Supplement/remark error
- **Location:** remark (after cat:braid-category-free) / intro blockquote
- **Detail:** The intro says 'Mac Lane only indicates with diagrams that the braid category is braided monoidal, so we verified it algebraically from the braid relations.' This is a historical/attribution claim that is imprecise: Mac Lane (CWM XI §4–§6) does give the braid category and its braided structure, and the verification is standard; describing it as 'only diagrams' and implying the algebraic verification is novel overstates the contribution. This is a side comment (kind 5).
- **Proposed fix:** Soften to: 'Mac Lane presents the braided structure of the braid category using diagrams; here we spell out the verification directly from the braid relations.'
- **Reported:** 2026-10-28 (10fede1)

### ISSUE-0003 [Open] Imprecise claim that ribbon category coherence involves 'framed braids or tangles'
- **Category:** Supplement/remark error
- **Location:** supplement / 「前提を変えると」
- **Detail:** The supplement says the coherence of ribbon categories involves 'ribbons (framed braids or tangles)' and cites Shum 1994. Shum's theorem concerns tortile (ribbon) categories and framed tangles, which is roughly correct, but the phrasing 'ribbon (framed braids or tangles)' conflates framed braids with framed tangles; the correct object is framed tangles (or ribbon tangles), and the coherence statement is that the free ribbon category on one object is the category of framed tangles. The statement is stated more loosely than the literature supports.
- **Proposed fix:** Replace with: 'Adding a twist $\theta_{a}\colon a\to a$ gives ribbon (tortile) categories; by Shum's theorem the free ribbon category on one object is the category of framed tangles (Shum 1994).'
- **Reported:** 2026-10-28 (10fede1)

### ISSUE-0004 [Open] Claim that $B_{n}$ is the fundamental group of the space of unordered $n$-point sets attributed to Fox–Neuwirth
- **Category:** Unsupported fact
- **Location:** intro blockquote
- **Detail:** The intro states '$B_{n}$ is the fundamental group of the space of unordered $n$-point sets (attributed to Fox–Neuwirth, 1962).' Fox–Neuwirth (1962) is indeed the standard reference for the braid group as the fundamental group of the configuration space of $n$ points in the plane (unordered), so the attribution is essentially correct. However, the precise statement should specify the plane $\mathbb{R}^{2}$ (or the disk); as written ('space of unordered $n$-point sets') it omits the ambient dimension, which is essential. This is a minor imprecision but worth flagging as an unsupported/underspecified fact.
- **Proposed fix:** State: '$B_{n}$ is isomorphic to the fundamental group of the (unordered) configuration space of $n$ points in the plane $\mathbb{R}^{2}$ (Fox–Neuwirth, 1962).'
- **Reported:** 2026-10-28 (10fede1)
