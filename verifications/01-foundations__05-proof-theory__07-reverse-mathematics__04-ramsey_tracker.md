# Verification tracker: `01-foundations/05-proof-theory/07-reverse-mathematics/04-ramsey.html`

<!-- source: 01-foundations/05-proof-theory/07-reverse-mathematics/04-ramsey.html -->
<!-- Managed by scripts/verify.py (GitHub Actions). To dispute an [Open] issue, add a line starting with
     **Opus Rebuttal:** at the end of that issue and push; the next run judges it. Do not edit other lines. -->

- Last verified: 2026-10-28 (commit 8ccef3d, deepseek-chat)
- Open: 5 / Resolved: 0 / Ignored: 0

## Summary of the last run

(none)

## Issues

### ISSUE-0001 [Open] RT^1 with variable l is not equivalent to BΣ^0_2
- **Category:** Supplement/remark error
- **Location:** remark (after logic:ramsey-def), item 2
- **Detail:** The remark claims that RT^1 (with l a variable) is not provable in RCA_0 and is equivalent to the bounded collection principle BΣ^0_2 (Hirst). This is a misstatement. The infinite pigeonhole principle for a variable number of colors is equivalent to the infinite pigeonhole principle for 2 colors (i.e. RT^1_2), which is itself equivalent to BΣ^0_2 (Hirst). The statement 'RT^1 is not provable in RCA_0 and is equivalent to BΣ^0_2' conflates RT^1 with RT^1_2; as written, RT^1 = ∀l RT^1_l is a Π^1_2 statement and the equivalence with the arithmetic BΣ^0_2 is not correct as stated (the correct equivalence is for RT^1_2, or equivalently for the 'variable l' version only after noting it reduces to two colors).
- **Proposed fix:** Replace with: 'RT^1_2 (equivalently, the infinite pigeonhole principle for a variable finite number of colors, since any finite coloring can be reduced to two colors) is not provable in RCA_0; it is equivalent to the bounded collection principle BΣ^0_2 (Hirst; not proved on this site).'
- **Reported:** 2026-10-28 (8ccef3d)

### ISSUE-0002 [Open] Jockusch: every infinite homogeneous set computes ∅' for k≥3 — needs computable-instance caveat and is misattributed as 'every'
- **Category:** Supplement/remark error
- **Location:** supplement, '計算可能性の側' bullet
- **Detail:** The bullet states: 'Jockusch (1972) showed that a computable f:[N]^k→l has a Π^0_k infinite homogeneous set, and that for k≥3 there is a computable f such that every infinite homogeneous set computes ∅'.' The second claim is correct in substance (Jockusch's theorem: for each k≥2 there is a computable f:[N]^k→2 all of whose infinite homogeneous sets compute ∅'), but the phrasing 'computes ∅'' should be 'computes 0'' (the Turing degree of the halting set), and the first claim 'has a Π^0_k infinite homogeneous set' is imprecise: Jockusch's result is that every computable f:[N]^k→l has an infinite homogeneous set H with H ≤_T ∅^{(k)}, i.e. a Δ^0_{k+1}/Π^0_k-computable homogeneous set (the homogeneous set is Π^0_k, not merely 'a Π^0_k set exists' in a loose sense). More importantly, the statement as written omits that this is about computable colorings and that the bound is on the homogeneous set's complexity relative to ∅^{(k)}.
- **Proposed fix:** Rewrite: 'Jockusch (1972): every computable f:[N]^k→l has an infinite homogeneous set H with H ≤_T ∅^{(k)} (so H is Π^0_k); and for each k≥2 there is a computable f:[N]^k→2 such that every infinite homogeneous set computes 0'' (the halting set).'
- **Reported:** 2026-10-28 (8ccef3d)

### ISSUE-0003 [Open] Ramsey property for Σ^0_1/Σ^0_2 partitions characterized as ATR_0 / Π^1_1-CA_0 — imprecise
- **Category:** Supplement/remark error
- **Location:** supplement, 'ラムゼー性と強い体系' bullet
- **Detail:** The bullet says: 'Ramsey property that splits all infinite subsets of N by Σ^0_1 or Σ^0_2 conditions is equivalent to ATR_0, Π^1_1-CA_0 respectively (Tanaka's book §2.5).' This is stated too strongly/imprecisely. The standard results concern the Ramsey-type statements for Σ^0_1 (resp. Σ^0_2) definable partitions of [N]^∞ or of pairs, and the precise equivalences are delicate (e.g. Σ^0_1-Ramsey / the 'Ramsey property for open sets' relates to ATR_0, and Σ^0_2 to Π^1_1-CA_0), but the blanket claim that 'the Ramsey property for Σ^0_1 conditions is equivalent to ATR_0' without specifying the exact formulation (partitions of [N]^∞ vs [N]^2, and whether one uses RT or a Hindman-type statement) is an overstatement. As written it asserts a clean equivalence that does not hold for the naive reading (Σ^0_1-Ramsey for pairs is actually provable in ACA_0).
- **Proposed fix:** Restrict to the precise formulation: 'The Ramsey property for Σ^0_1-definable partitions of [N]^∞ (equivalently, the statement that every open/closed coloring of [N]^∞ has an infinite homogeneous set in the appropriate sense) is equivalent to ATR_0, and the Σ^0_2 version to Π^1_1-CA_0 (Tanaka §2.5).' Or delete the bullet if the exact formulation cannot be pinned down.
- **Reported:** 2026-10-28 (8ccef3d)

### ISSUE-0004 [Open] Paris–Harrington: 'PH follows from infinite Ramsey via compactness and is true' — needs the finite/infinite distinction
- **Category:** Supplement/remark error
- **Location:** supplement, 'パリス–ハーリントンの定理' bullet
- **Detail:** The bullet says PH (finite Ramsey with |H|≥min H) 'can be derived from the infinite Ramsey theorem (using compactness) and is true, but not provable in PA'. The derivation of the finite Paris–Harrington statement from the infinite Ramsey theorem is not a direct compactness consequence: the infinite Ramsey theorem gives an infinite homogeneous set, but the '|H| ≥ min H' largeness condition is a finite combinatorial condition that does not follow from mere infinitude of a homogeneous set via compactness in the naive way. The standard route is: PH is a finite Ramsey-type statement provable from the infinite Ramsey theorem plus the Paris–Harrington largeness argument, but the claim 'derived from infinite Ramsey via compactness' is at best a loose sketch and, as stated, suggests a false implication (infinite RT does not directly yield the min H condition by compactness).
- **Proposed fix:** Replace with: 'PH is a true Π^0_2 statement (a finite Ramsey statement with the largeness condition |H| ≥ min H); it is provable in ACA_0 (hence true) but not in PA (Paris–Harrington 1977). The derivation from infinite Ramsey requires the Paris–Harrington combinatorial argument, not merely compactness.'
- **Reported:** 2026-10-28 (8ccef3d)

### ISSUE-0005 [Open] Hypcheck: 'WKL is not enough because no bound on child values' — the reason given is imprecise
- **Category:** Supplement/remark error
- **Location:** hypcheck, first bullet
- **Detail:** The hypcheck says: 'The tree is finitely branching, but a bound on the child values is not generally available, so WKL is not enough (see problem logic:prob-erdos-rado-branching).' The claim that WKL is not enough for RT^k→RT^{k+1} is correct, but the stated reason ('no bound on child values') is not by itself the reason WKL fails: WKL applies to trees that are finitely branching in the sense of having bounded (or at least finite, with a bound provable in the theory) branching, and the Erdős–Rado tree's branching is bounded in number but the child values are unbounded, so the tree is not a tree in the WKL sense (no bound on the set of children as numbers). This is essentially what the text says, but the phrasing 'a bound on the child values is not generally available' should be sharpened to 'the set of children is not bounded as a set of numbers, so the tree is not finitely branching in the sense required by WKL (which needs a bound on the values, not just on the number of children).'
- **Proposed fix:** Rewrite: 'The Erdős–Rado tree has boundedly many children at each node, but the children's values are not bounded by any function available in the theory, so it is not a finitely branching tree in the sense required by WKL (which needs a bound on the values of the children, not merely on their number); hence WKL does not suffice (problem logic:prob-erdos-rado-branching).'
- **Reported:** 2026-10-28 (8ccef3d)
