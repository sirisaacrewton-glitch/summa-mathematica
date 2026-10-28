# Verification tracker: `02-algebra/02-group-theory/01-groups/06-products.html`

<!-- source: 02-algebra/02-group-theory/01-groups/06-products.html -->
<!-- Managed by scripts/verify.py (GitHub Actions). To dispute an [Open] issue, add a line starting with
     **Opus Rebuttal:** at the end of that issue and push; the next run judges it. Do not edit other lines. -->

- Last verified: 2026-10-28 (commit 8ccef3d, deepseek-chat)
- Open: 2 / Resolved: 0 / Ignored: 0

## Summary of the last run

The page is largely correct: the direct product, internal direct product, CRT, semidirect product and internal semidirect product theorems are proved correctly, and the hypcheck remarks (e.g. D_3 with N=⟨r⟩ and H={e,s}) are accurate. The main genuine problem is in the supplement: the criterion for normality of H-bar in a semidirect product is stated with a single element n instead of requiring θ_h=id on all of N. A secondary imprecision concerns the phrasing of the Z/4Z non-decomposability example.

## Issues

### ISSUE-0001 [Open] Normality of H-bar requires θ_h to fix all of N, not just one element
- **Category:** Supplement/remark error
- **Location:** supplement (直積と半直積の違い)
- **Detail:** The supplement computes (n,e)(e,h)(n,e)^{-1}=(n θ_h(n)^{-1}, h) and concludes that this lies in H-bar iff θ_h(n)=n. But this only shows that a single conjugate lies in H-bar for that particular n. For H-bar to be normal one needs (n,e)(e,h)(n,e)^{-1}∈H-bar for ALL n∈N, i.e. θ_h(n)=n for all n, i.e. θ_h=id. The stated criterion 'iff θ_h(n)=n' (for one n) is too weak; the correct condition is θ_h=id_N for all h (θ trivial).
- **Proposed fix:** Replace with: $(n,e)(e,h)(n,e)^{-1}=(n\,\theta_{h}(n)^{-1},h)$ lies in $\bar H$ for all $n\in N$ iff $\theta_{h}(n)=n$ for all $n\in N$, i.e. $\theta_{h}=\id_{N}$. Hence $\bar H$ is normal in $N\rtimes_{\theta}H$ iff $\theta$ is the trivial homomorphism (iff the semidirect product is the direct product).
- **Reported:** 2026-10-28 (8ccef3d)

### ISSUE-0002 [Open] Z/4Z is not a semidirect product of Z/2 by Z/2 — but the reason given is imprecise
- **Category:** Supplement/remark error
- **Location:** supplement (直積と半直積の違い)
- **Detail:** The claim that 2Z/4Z has no complement (the only subgroup of order 2 is itself) is correct, and hence Z/4Z is not an internal semidirect product Z/2⋊Z/2. However the supplement states 'Z/4Z は Z/2Z と Z/2Z の半直積にならない' as if this were a general fact about the external semidirect product; it should be phrased as: there is no internal semidirect decomposition with N=2Z/4Z and complement of order 2. As written it is acceptable but the reasoning '位数2の部分群はそれ自身だけ' refers to the subgroup 2Z/4Z itself being the unique order-2 subgroup, which is correct. No change strictly needed, but the statement should clarify it is about internal decomposition.
- **Proposed fix:** Clarify: '$\Z/4\Z$ の部分群 $2\Z/4\Z$（位数 $2$）は $\Z/4\Z$ の唯一の位数 $2$ の部分群であるから，$2\Z/4\Z$ の補群は存在せず，$\Z/4\Z$ は $2\Z/4\Z$ と位数 $2$ の群の内部半直積にはならない。'
- **Reported:** 2026-10-28 (8ccef3d)
