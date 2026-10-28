# Verification tracker: `05-geometry-topology/03-algebraic-geometry/01-varieties/07-curves.html`

<!-- source: 05-geometry-topology/03-algebraic-geometry/01-varieties/07-curves.html -->
<!-- Managed by scripts/verify.py (GitHub Actions). To dispute an [Open] issue, add a line starting with
     **Opus Rebuttal:** at the end of that issue and push; the next run judges it. Do not edit other lines. -->

- Last verified: 2026-10-28 (commit 10fede1, deepseek-chat)
- Open: 5 / Resolved: 0 / Ignored: 0

## Summary of the last run

(none)

## Issues

### ISSUE-0001 [Open] Incorrect example of a non-projective complete variety attributed to Nagata
- **Category:** Supplement/remark error
- **Location:** remark 抽象曲線と永田の完備化 / item 2
- **Detail:** The remark states that Nagata Masayoshi constructed a complete but non-projective variety in the late 1950s, and lists Hironaka's example alongside it. Nagata's famous example (1958, 'Existence theorems for nonprojective complete algebraic varieties') is a complete non-projective *surface* (a normal surface), not a higher-dimensional variety; the phrase '高次元では埋め込めない... 多様体があり' (there are varieties that cannot be embedded in higher dimensions) is therefore misleading. Hironaka's example is a complete non-projective *threefold* (a smooth threefold), so grouping it with Nagata under 'higher-dimensional' is imprecise. The attribution and the dimension claim are both inaccurate.
- **Proposed fix:** Replace with: 'Complete but non-projective varieties exist: Nagata (1958) constructed a complete non-projective normal surface, and Hironaka gave a smooth complete non-projective threefold. Thus projective varieties alone do not close the theory.'
- **Reported:** 2026-10-28 (10fede1)

### ISSUE-0002 [Open] Nagata compactification stated for 'finite type separated schemes' without quasi-compactness/noetherian hypothesis
- **Category:** Supplement/remark error
- **Location:** remark 抽象曲線と永田の完備化 / item 3
- **Detail:** The remark states Nagata's compactification theorem (1962) as: every finite-type separated scheme (e.g. a variety) embeds as an open subscheme of a complete (proper) scheme. The standard statement requires the scheme to be quasi-compact and quasi-separated (or noetherian); for arbitrary finite-type separated schemes over a field this is fine, but the parenthetical 'たとえば多様体' suggests full generality. More importantly, the theorem as stated ('有限型の分離スキーム') omits the quasi-compact/quasi-separated hypothesis needed in the general scheme-theoretic version (Nagata's original and the modern Deligne/Conrad form). For varieties over a field the hypothesis is automatic, so the claim is true for varieties but the stated generality is slightly overstated.
- **Proposed fix:** State: 'Nagata's compactification theorem (1962): every separated scheme of finite type over a field (more generally, every quasi-compact quasi-separated separated scheme) embeds as an open subscheme of a proper scheme.'
- **Reported:** 2026-10-28 (10fede1)

### ISSUE-0003 [Open] Indeterminacy locus claim: 'codimension ≥ 2 for normal varieties' needs the target to be projective and the map to be to a projective variety
- **Category:** Supplement/remark error
- **Location:** supplement 前提を変えると
- **Detail:** The supplement says: 'In higher dimensions, the indeterminacy locus of a rational map to a projective variety is contained in a closed subset of codimension ≥ 2 (for normal varieties).' This is correct only when the source is normal AND the map is to a projective (or at least proper) target; the statement as written does include '射影多様体への' (to a projective variety), so the target hypothesis is present. However, the claim also requires the source to be normal — which is stated — but the parenthetical '(正規多様体なら)' is placed so that it could be read as an optional strengthening rather than a necessary hypothesis. For non-normal sources the indeterminacy locus can have codimension 1. The statement is essentially correct but the necessity of normality is understated.
- **Proposed fix:** Rewrite: 'For a rational map from a normal variety to a projective variety, the indeterminacy locus has codimension ≥ 2; without normality it can be a divisor. For curves (dimension 1) it is empty, which is \ref{ag:curve-morphism-extension}.'
- **Reported:** 2026-10-28 (10fede1)

### ISSUE-0004 [Open] Grauert–Remmert normalization algorithm claim is vague/overstated
- **Category:** Supplement/remark error
- **Location:** supplement 計算の観点
- **Detail:** The supplement says the normalization of a curve 'can be computed by an algorithm for computing the integral closure (such as the Grauert–Remmert criterion)'. The Grauert–Remmert theorem is a criterion for a ring to be normal (via the conductor / Jacobian ideal), and it underlies algorithms for computing integral closure, but calling it 'the Grauert–Remmert decision method' as an algorithm for normalization is imprecise: the actual algorithms (e.g. de Jong's, or the Grauert–Remmert-based normalization algorithm of Greuel–Pfister–Schönemann) are distinct from the criterion itself. The claim is not false but is stated loosely enough to be misleading about what the named result provides.
- **Proposed fix:** Rewrite: 'The normalization of a curve can be computed by algorithms for integral closure (for example, algorithms based on the Grauert–Remmert normality criterion, or on the conductor ideal).'
- **Reported:** 2026-10-28 (10fede1)

### ISSUE-0005 [Open] Hypcheck claim that the cusp map (x,y)↦y/x does not extend at the origin
- **Category:** Unsupported fact
- **Location:** hypcheck / 非特異性（DVR）
- **Detail:** The hypcheck says: 'the cusp V(y^2−x^3) → A^1, (x,y) ↦ y/x does not extend at the origin (it does extend on the normalization A^1).' This is correct as a statement about the map on the cusp minus the origin, but the notation '(x,y) ↦ y/x' is not a regular function on the cusp minus the origin in the naive sense — y/x is regular on the cusp away from the origin (since x ≠ 0 there), and it equals t on the normalization. The claim that it 'does not extend at the origin' is true (the value would have to be 0 on one branch and undefined, and indeed y/x = t blows up relative to the cusp parametrization), but the parenthetical '正規化 A^1 では延びる' is confusing: on the normalization the map t ↦ t does extend, but this is a different map (the composite with ν). The statement is essentially correct but the phrasing conflates the map on Y with its lift to the normalization.
- **Proposed fix:** Rewrite: 'The rational function y/x on the cusp Y = V(y^2−x^3) is regular on Y∖{0} but does not extend to a regular function at the origin (it corresponds to t on the normalization, which is not in A(Y)). Hence the morphism Y∖{0} → A^1, (x,y) ↦ y/x does not extend to Y, while on the normalization A^1 it becomes t ↦ t, which does extend.'
- **Reported:** 2026-10-28 (10fede1)
