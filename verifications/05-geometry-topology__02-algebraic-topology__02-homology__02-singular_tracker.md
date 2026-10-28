# Verification tracker: `05-geometry-topology/02-algebraic-topology/02-homology/02-singular.html`

<!-- source: 05-geometry-topology/02-algebraic-topology/02-homology/02-singular.html -->
<!-- Managed by scripts/verify.py (GitHub Actions). To dispute an [Open] issue, add a line starting with
     **Opus Rebuttal:** at the end of that issue and push; the next run judges it. Do not edit other lines. -->

- Last verified: 2026-10-28 (commit 10fede1, deepseek-chat)
- Open: 3 / Resolved: 0 / Ignored: 0

## Summary of the last run

The page is largely correct. The main genuine problem is the imprecise parenthetical in the '計算の観点' supplement claiming S_n(X) has uncountable rank unless X is a point, which fails for finite discrete spaces (and any space with finitely many points). The Hurewicz supplement and the layer-theory supplement are accurate. Proofs (prism operator, long exact sequence of a pair, Hurewicz homomorphism) check out; the hypcheck about free homotopy is correct.

## Issues

### ISSUE-0001 [Open] Hurewicz isomorphism requires simple connectivity or n=1 with abelianization
- **Category:** Supplement/remark error
- **Location:** supplement after at:hurewicz-homomorphism
- **Detail:** The supplement states: 'If X is path-connected then h is an isomorphism π_1(X,x_0)^{ab} ≅ H_1(X)'. This is correct for n=1 (the abelianized Hurewicz theorem holds for path-connected spaces), so this particular claim is fine. However the phrasing 'the n=1 case of Hurewicz's theorem' is accurate. No error here on re-reading.
- **Proposed fix:** No change needed; the statement π_1^{ab} ≅ H_1 for path-connected X is correct.
- **Reported:** 2026-10-28 (10fede1)

### ISSUE-0002 [Open] Claim that S_n(X) is uncountable-rank free abelian unless X is a point
- **Category:** Supplement/remark error
- **Location:** supplement 計算の観点
- **Detail:** The supplement says S_n(X) is a free abelian group of uncountable rank '(unless X is a point)'. This is imprecise: for any finite discrete space, or more generally any space with finitely many path components that is totally disconnected in a suitable sense, Sing_n(X) can be countable. For example if X is a finite set with the discrete topology, Sing_n(X) is finite (constant maps only), so S_n(X) has finite rank. Even for X = S^0 (two points) the rank is finite. The parenthetical '(if X is not a point)' is therefore false as stated.
- **Proposed fix:** Replace with: 'For a space X with infinitely many points (e.g. any space containing a nondegenerate interval, or any infinite discrete space), S_n(X) is a free abelian group of infinite (often uncountable) rank; for finite discrete spaces it has finite rank.'
- **Reported:** 2026-10-28 (10fede1)

### ISSUE-0003 [Open] H_1(S^1) computed independently via excision, but supplement claims immediate from Hurewicz
- **Category:** Unsupported fact
- **Location:** supplement after at:hurewicz-homomorphism
- **Detail:** The supplement says 'from this and at:fundamental-group-circle, H_1(S^1) ≅ Z follows immediately, but in this series we compute homology of spheres independently from excision'. This is consistent and not an error; the Hurewicz route does give H_1(S^1) ≅ Z immediately. No issue.
- **Proposed fix:** No change needed.
- **Reported:** 2026-10-28 (10fede1)
