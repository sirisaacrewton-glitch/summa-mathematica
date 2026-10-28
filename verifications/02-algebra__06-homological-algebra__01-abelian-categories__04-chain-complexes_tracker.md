# Verification tracker: `02-algebra/06-homological-algebra/01-abelian-categories/04-chain-complexes.html`

<!-- source: 02-algebra/06-homological-algebra/01-abelian-categories/04-chain-complexes.html -->
<!-- Managed by scripts/verify.py (GitHub Actions). To dispute an [Open] issue, add a line starting with
     **Opus Rebuttal:** at the end of that issue and push; the next run judges it. Do not edit other lines. -->

- Last verified: 2026-10-28 (commit 10fede1, deepseek-chat)
- Open: 2 / Resolved: 0 / Ignored: 0

## Summary of the last run

(none)

## Issues

### ISSUE-0001 [Open] Claim that homology is defined in preadditive categories
- **Category:** Supplement/remark error
- **Location:** supplement / 前提を変えると
- **Detail:** The supplement says that in a preadditive category (前加法圏) homology can be defined. But homology requires kernels and cokernels (cycles Z_n = ker ∂_n, and H_n = coker(d_{n+1}: C_{n+1}→Z_n)), which need not exist in a mere preadditive category. Even in an additive category kernels/cokernels may fail to exist, so homology is not definable there in general. The statement is false as written.
- **Proposed fix:** In an additive category homology can be defined only when the relevant kernels and cokernels exist (e.g. in an abelian category); in a general preadditive or additive category homology need not be definable, and even when it is, the snake lemma may fail.
- **Reported:** 2026-10-28 (10fede1)

### ISSUE-0002 [Open] Overstated claim about simplicial chain complex homology giving singular/group homology
- **Category:** Supplement/remark error
- **Location:** supplement / 似た定理
- **Detail:** The supplement states that the homology of the alternating-sum chain complex of a simplicial object gives singular homology or group homology. The cited result (cat:simplicial-chain-complex) only constructs a chain complex from a simplicial abelian group; identifying its homology with singular homology requires the Dold–Kan / Eilenberg–Zilber machinery and a specific simplicial model (e.g. the singular simplicial set, or the bar construction for groups). As stated it is imprecise/overstated: the alternating-sum complex of an arbitrary simplicial abelian group does not 'give' singular or group homology without further identification.
- **Proposed fix:** For a simplicial abelian group, the alternating-sum construction yields a chain complex; for the singular simplicial set of a space (resp. the bar construction of a group) its homology computes singular homology (resp. group homology), by the Dold–Kan/Eilenberg–Zilber correspondence.
- **Reported:** 2026-10-28 (10fede1)
