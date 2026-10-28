# Verification tracker: `01-foundations/06-category-theory/07-operads/02-operads.html`

<!-- source: 01-foundations/06-category-theory/07-operads/02-operads.html -->
<!-- Managed by scripts/verify.py (GitHub Actions). To dispute an [Open] issue, add a line starting with
     **Opus Rebuttal:** at the end of that issue and push; the next run judges it. Do not edit other lines. -->

- Last verified: 2026-10-28 (commit 048145a, deepseek-chat)
- Open: 2 / Resolved: 0 / Ignored: 1

## Summary of the last run

The page is largely correct. The main genuine problem is the composition-product remark, which describes $Q^{\circledast k}$ as an iterated Day convolution when the composition product actually uses the degree-wise tensor product of symmetric sequences; the formula as written is false. The previously reported supplement issue about EGF composition remains open (no rebuttal, and the blanket claim is imprecise for non-symmetric operads). ISSUE-0001 is resolved by the corrected label table.

## Issues

### ISSUE-0001 [Ignored: Valid Rebuttal] Reference to non-existent label cat:symmetric-operad.2
- **Category:** Improper link
- **Location:** cat:operad-monad / Step 1
- **Detail:** Step 1 cites \ref[2]{cat:symmetric-operad.2}, but the label table only contains cat:symmetric-operad.1 (definition 2.2, 対称オペラッド). There is no item 2 of that definition listed; the equivariance axioms (1 and 2) are items within the single definition cat:symmetric-operad.1, not separate labels. The citation target does not exist as given.
- **Proposed fix:** Replace \ref[2]{cat:symmetric-operad.2} with a reference to the second equivariance axiom of \ref{cat:symmetric-operad.1} (e.g. \ref{cat:symmetric-operad.1}・その公理 2), since both equivariance axioms are items of definition cat:symmetric-operad.1.
- **Reported:** 2026-10-28 (8ccef3d)
- **History:** 2026-10-28 (048145a): Ignored: Valid Rebuttal — The label table now lists cat:symmetric-operad.2 as the second equivariance axiom, which is exactly what Step 1 uses, so the citation is correct.
**Opus Rebuttal:** The cited item exists and says exactly what is used (the earlier label table listed only one item per result; this was a bug in the verifier, now fixed: the table quotes every cited item). cat:symmetric-operad.2 is the second equivariance axiom $\gamma(c;d_{1}\tau_{1},\dots)=\gamma(c;d_{1},\dots)(\tau_{1}\oplus\cdots\oplus\tau_{k})$.

### ISSUE-0002 [Open] Ass generating function and EGF composition claim
- **Category:** Supplement/remark error
- **Location:** supplement (計算の観点)
- **Detail:** The supplement states the size of each degree of T_P and the composition product can be computed by composing exponential generating functions f(g(x)), and gives Ass generating function as sum k! x^k/k! = 1/(1-x). For the symmetric Ass(k)=Sigma_k, |Ass(k)|=k!, so the EGF is sum k! x^k/k! = sum x^k = 1/(1-x), which is correct. However the general claim that composition product corresponds to EGF composition f(g(x)) requires the species to be of the 'connected'/ordinary type with appropriate conventions; more importantly, for the non-symmetric Ass^{ns} the relevant series is the ordinary generating function, not exponential, and the blanket statement 'exponential generating function composition' is imprecise for non-symmetric operads. The claim as stated overgeneralizes.
- **Proposed fix:** Restrict the statement to symmetric operads (species): for symmetric operads the composition product corresponds to composition of exponential generating functions, and for Ass (with |Ass(k)|=k!) the EGF is \sum_{k} k! x^{k}/k! = 1/(1-x); for non-symmetric operads one uses ordinary generating functions instead.
- **Reported:** 2026-10-28 (8ccef3d)
- **History:** 2026-10-28 (048145a): Open — The supplement still states without qualification that sizes of T_P and the composition product are computed by EGF composition f(g(x)); this is only valid for symmetric (species) operads with the appropriate conventions, and the Ass example uses the symmetric Ass(k)=Sigma_k. The blanket claim remains imprecise, and no rebuttal was given.

### ISSUE-0003 [Open] Composition product formula uses Day convolution of Q with itself
- **Category:** Supplement/remark error
- **Location:** remark 合成積のモノイドとしてのオペラッド
- **Detail:** The remark defines $(P\circ Q)(n)=\coprod_{k}P(k)\times_{\Sigma_{k}}(Q^{\circledast k})(n)$ and says $Q^{\circledast k}$ is the $k$-fold Day convolution of $Q$. But the composition product of symmetric sequences uses the $k$-fold *ordinary* (Cauchy) tensor product $Q^{\otimes k}$ of the graded objects, i.e. $(Q^{\otimes k})(n)=\coprod_{n_{1}+\cdots+n_{k}=n}Q(n_{1})\times\cdots\times Q(n_{k})$ with the natural $\Sigma_{k}\ltimes(\Sigma_{n_{1}}\times\cdots)$ action, not the Day convolution (which would combine degrees differently and give the wrong formula). As stated the formula is false.
- **Proposed fix:** Replace "$Q^{\circledast k}$ は $Q$ の $k$ 回のデイ畳み込み" with "$Q^{\otimes k}$ は種の圏の（次数ごとの）$k$ 重テンソル積、すなわち $(Q^{\otimes k})(n)=\coprod_{n_{1}+\cdots+n_{k}=n}Q(n_{1})\times\cdots\times Q(n_{k})$" and keep the rest.
- **Reported:** 2026-10-28 (048145a)
