# Verification tracker: `01-foundations/05-proof-theory/07-reverse-mathematics/04-ramsey.html`

<!-- source: 01-foundations/05-proof-theory/07-reverse-mathematics/04-ramsey.html -->
<!-- Managed by scripts/verify.py (GitHub Actions). To dispute an [Open] issue, add a line starting with
     **Opus Rebuttal:** at the end of that issue and push; the next run judges it. Do not edit other lines. -->

- Last verified: 2026-10-28 (commit 10fede1, deepseek-chat)
- Open: 3 / Resolved: 0 / Ignored: 0

## Summary of the last run

(none)

## Issues

### ISSUE-0001 [Open] RT^1 with variable l is not equivalent to BΣ^0_2
- **Category:** Supplement/remark error
- **Location:** remark (after logic:ramsey-def), item 2
- **Detail:** The remark claims that RT^1 (∀l RT^1_l) is not provable in RCA_0 and is equivalent to the bounded collection principle BΣ^0_2 (Hirst). This is wrong. RT^1 is the infinite pigeonhole principle: for every l and every f: N→l there is an infinite homogeneous set. This is provable already in RCA_0 (indeed in much weaker systems): given f: N→l, some color class is infinite, and one can find it by bounded search over the finite set {0,…,l−1} using Σ^0_1-induction/comprehension available in RCA_0. The equivalence with BΣ^0_2 concerns a different statement (e.g. the infinite pigeonhole principle in a form where the number of colors is not bounded, or Hirst's result on RT^1 for unbounded colorings / the statement that every finite coloring of N has an infinite homogeneous set in the sense of 'stable' partitions), not RT^1 as defined here. As stated, the claim is false.
- **Proposed fix:** Replace with: 'RT^1_l for each standard l is provable in RCA_0 (the infinite pigeonhole principle). The statement RT^1 = ∀l RT^1_l is also provable in RCA_0, since for a fixed coloring f: N→l one of the finitely many color classes f^{-1}(i) (i<l) is infinite, and this can be found by bounded search. (Hirst's equivalence with BΣ^0_2 concerns a different, stronger formulation, e.g. versions of the infinite pigeonhole principle for colorings whose range is not bounded in advance; this is not treated here.)'
- **Reported:** 2026-10-28 (10fede1)

### ISSUE-0002 [Open] RT^2_2 does not imply WKL_0 — attribution to Liu 2012 is imprecise
- **Category:** Supplement/remark error
- **Location:** remark ACA₀ と同値な定理のまとめ (logic:aca-equivalents-summary)
- **Detail:** The remark states that RT^2_2 does not imply WKL_0 (Liu, 2012) and that RT^2_2 is therefore not equivalent to any of the Big Five. The non-implication RT^2_2 ⇏ WKL_0 is correct (Liu, 2012, 'RT^2_2 does not imply WKL_0', J. Symbolic Logic). However the phrasing 'RT^2_2 は「五つの体系」のどれとも同値にならない' is stated as if established by these two results alone; more importantly, the claim that RT^2_2 is not equivalent to any of the Big Five requires also that RT^2_2 does not imply ACA_0 (Seetapun) and that none of the weaker systems (RCA_0, WKL_0) implies RT^2_2 — the latter is standard but not mentioned. The sentence is essentially correct but the attribution 'リュー、2012' for the WKL_0 result is right; the issue is the overstatement that this single result shows RT^2_2 is not equivalent to any of the Big Five. This is a minor imprecision rather than a falsehood; flagging for correction of the logical dependency.
- **Proposed fix:** Rewrite: 'Furthermore, RT^2_2 does not imply WKL_0 (Liu, 2012). Combined with Seetapun's result that RT^2_2 does not imply ACA_0, and the fact that RCA_0 and WKL_0 do not prove RT^2_2, this shows that RT^2_2 is not equivalent to any of the Big Five systems.'
- **Reported:** 2026-10-28 (10fede1)

### ISSUE-0003 [Open] PH is not literally a consequence of the infinite Ramsey theorem by compactness in the stated form
- **Category:** Supplement/remark error
- **Location:** supplement, 関連する結果, パリス–ハーリントンの定理
- **Detail:** The supplement says PH (finite Ramsey with |H| ≥ min H) 'is derivable from the infinite Ramsey theorem (using compactness) and is true, but not provable in PA'. The derivability of PH from the infinite Ramsey theorem via compactness is not correct as stated: the infinite Ramsey theorem gives an infinite homogeneous set, but the Paris–Harrington condition |H| ≥ min H is a finite combinatorial condition whose derivation from the infinite version requires a non-trivial compactness argument that does not literally yield PH (the infinite Ramsey theorem is provable in ACA_0, while PH is unprovable in PA; since ACA_0 is conservative over PA, PH cannot be a consequence of the infinite Ramsey theorem in any straightforward compactness sense within PA). The claim conflates the finite Paris–Harrington statement with a compactness corollary. This is a genuine overstatement.
- **Proposed fix:** Replace with: 'The Paris–Harrington theorem PH is a finite Ramsey statement (with the extra condition |H| ≥ min H) that is true but not provable in PA (Paris–Harrington, 1977). It is a finite combinatorial strengthening of Ramsey's theorem; it is not a direct compactness corollary of the infinite Ramsey theorem. Since ACA_0 is conservative over PA, ACA_0 does not prove PH either.'
- **Reported:** 2026-10-28 (10fede1)
