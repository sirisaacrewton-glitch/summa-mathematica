# Verification tracker: `04-analysis/01-real-analysis/01-real-numbers/02-continuity-axioms.html`

<!-- source: 04-analysis/01-real-analysis/01-real-numbers/02-continuity-axioms.html -->
<!-- Managed by scripts/verify.py (GitHub Actions). To dispute an [Open] issue, add a line starting with
     **Opus Rebuttal:** at the end of that issue and push; the next run judges it. Do not edit other lines. -->

- Last verified: 2026-10-28 (commit 8ccef3d, deepseek-chat)
- Open: 2 / Resolved: 0 / Ignored: 0

## Summary of the last run

The main theorem and its proof are careful and correct; the counterexamples (Laurent series field and the ultrapower) are correctly argued. The only genuine problems are in the supplement: the 'high-level viewpoint' overstates that (W),(D),(HB),(Conn) are all 'Dedekind completeness of the order alone' (the equivalences need density/no endpoints, which the page itself notes elsewhere), and the reverse-mathematics remark lumps (B-W) and (M) together as requiring ACA_0, which is imprecise. Both are medium-confidence supplement issues; no logical gaps or missing hypotheses were found in the proofs.

## Issues

### ISSUE-0001 [Open] Claim that (W),(D),(HB),(Conn) are 'Dedekind completeness' of the order alone
- **Category:** Supplement/remark error
- **Location:** supplement / 高い視点
- **Detail:** The supplement says (W),(D),(HB),(Conn) 'are stated only in terms of order and do not use addition and multiplication. These are completeness as a totally ordered set (Dedekind completeness)'. But (HB) and (Conn) are topological statements about the order topology, and (W) is the least-upper-bound property. For a general total order, (W) (lub property) and Dedekind completeness (every cut has a boundary, i.e. (D)) are NOT equivalent: e.g. the ordered set $\omega_{1}$ (or $[0,\omega_{1})$) satisfies (W) (every bounded nonempty subset has a sup) but is not Dedekind complete as a total order in the sense that the cut below $\omega_{1}$ has no boundary — more precisely, the equivalence (W)⇔(D) requires the order to be dense (no jumps), which the hypcheck itself acknowledges. So calling all four 'Dedekind completeness of the total order' conflates distinct notions and is imprecise/overstated.
- **Proposed fix:** Replace with: '(W)・(D)・(HB)・(Conn) は順序体の演算を本質的に使わず、順序（および順序位相）だけで述べられる。ただし (W)⇔(D) や (W)⇔(HB)⇔(Conn) が順序体で成り立つのは、順序体が稠密（隣接する元がない）で端点をもたないという性質による。(M)・(B-W)・(C) は列（可算な近似）による完備性である。'
- **Reported:** 2026-10-28 (8ccef3d)

### ISSUE-0002 [Open] Reverse-math claim about (B-W)/(M) needing ACA_0 stated too strongly
- **Category:** Supplement/remark error
- **Location:** supplement / 逆数学
- **Detail:** The supplement states that proving (B-W) or (M) over RCA_0 requires ACA_0, and that (HB) is equivalent to WKL_0. The (HB)↔WKL_0 part is standard. But the phrasing 'proving (B-W) or (M) ... requires ACA_0' is imprecise: over RCA_0, Bolzano–Weierstrass for arbitrary bounded sequences of reals is indeed equivalent to ACA_0, but monotone convergence (M) is provable in ACA_0 and its exact strength is more delicate; stating both uniformly 'require ACA_0' overstates and conflates the two. Also the cited target logic:heine-borel-wkl is titled 'Heine–Borel and weak König's lemma', which supports the (HB)↔WKL_0 claim but not the (B-W)/(M) claim.
- **Proposed fix:** Restrict the claim to what is standard: '逆数学では、(HB)（有界閉区間のコンパクト性）は弱ケーニッヒの補題 $\mathsf{WKL}_{0}$ と同値であり、(B-W)（有界列が収束部分列をもつこと）は $\mathsf{RCA}_{0}$ 上で算術的内包公理 $\mathsf{ACA}_{0}$ と同値である（\ref{logic:heine-borel-wkl}）。'
- **Reported:** 2026-10-28 (8ccef3d)
