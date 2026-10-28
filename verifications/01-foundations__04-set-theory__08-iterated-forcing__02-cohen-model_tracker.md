# Verification tracker: `01-foundations/04-set-theory/08-iterated-forcing/02-cohen-model.html`

<!-- source: 01-foundations/04-set-theory/08-iterated-forcing/02-cohen-model.html -->
<!-- Managed by scripts/verify.py (GitHub Actions). To dispute an [Open] issue, add a line starting with
     **Opus Rebuttal:** at the end of that issue and push; the next run judges it. Do not edit other lines. -->

- Last verified: 2026-10-28 (commit 048145a, deepseek-chat)
- Open: 4 / Resolved: 0 / Ignored: 1

## Summary of the last run

The page's main theorems and proofs are largely sound. The serious remaining problems are in the supplement: the Hausdorff-formula computation of ω₂^ω under CH (ISSUE-0001) is mathematically wrong and is used in the problem solution; the 'sufficiently random' description of a Cohen real (ISSUE-0003) is misleading; and the claim that CH is essential in set:cohen-mad-omega-one (ISSUE-0004) is overstated. ISSUE-0002 is correctly rebutted. A new medium-confidence issue concerns the false analogy about measurable functions depending on countably many coordinates.

## Issues

### ISSUE-0001 [Open] Hausdorff formula misapplied: ω₂^ω = ω₂ does not follow from CH
- **Category:** Supplement/remark error
- **Location:** supplement / 前提の検討, third bullet (and problem set:prob-cohen-not-ma solution)
- **Detail:** The supplement claims that under CH, $\omega_{2}^{\omega}=\omega_{2}\cdot 2^{\omega}=\omega_{2}$ via the Hausdorff formula. The Hausdorff formula gives $\omega_{2}^{\omega}=(\omega_{2}^{\omega})^{\omega}$ type identities, but the actual computation is $\omega_{2}^{\omega}=(2^{\omega})^{\omega}=2^{\omega\cdot\omega}=2^{\omega}=\omega_{2}$ only if $2^{\omega}=\omega_{2}$ AND $2^{\omega}$ is computed correctly. Under CH alone, $2^{\aleph_{0}}=\aleph_{1}$, so $\omega_{2}^{\omega}=(\aleph_{1})^{\aleph_{0}}=2^{\aleph_{0}\cdot\aleph_{0}}=2^{\aleph_{0}}=\aleph_{1}$, NOT $\aleph_{2}$. The claim $\omega_{2}^{\omega}=\omega_{2}$ requires $2^{\aleph_{0}}=\aleph_{2}$ (i.e. $2^{\aleph_{0}}\ge\aleph_{2}$), which is not a consequence of CH. The problem solution uses this to conclude $2^{\omega}=\omega_{2}$ in $M[G]$, but $\mathrm{Fn}(\omega_{2},2)$ forces $2^{\aleph_{0}}=\aleph_{2}$ regardless of CH in $M$; the correct justification is that $\mathrm{Fn}(\omega_{2},2)$ adds $\aleph_{2}$ Cohen reals so $2^{\aleph_{0}}\ge\aleph_{2}$ in $M[G]$, and $|\mathrm{Fn}(\omega_{2},2)|=\aleph_{2}$ gives $2^{\aleph_{0}}\le\aleph_{2}$.
- **Proposed fix:** Replace the bullet with: "In the solution of \ref{set:prob-cohen-not-ma} we used $2^{\omega}=\omega_{2}$ in $M[G]$. This does not follow from CH in $M$; rather, $\mathrm{Fn}(\omega_{2},2)$ adds $\aleph_{2}$ Cohen reals, so $2^{\aleph_{0}}\ge\aleph_{2}$ in $M[G]$, while $|\mathrm{Fn}(\omega_{2},2)|^{\aleph_{0}}=\aleph_{2}^{\aleph_{0}}=\aleph_{2}$ (using $\aleph_{2}^{\aleph_{0}}=\aleph_{2}$ which holds since $\aleph_{2}$ is not a limit of $\omega$ smaller cardinals below it in the relevant sense; more precisely $\aleph_{2}^{\aleph_{0}}\le(2^{\aleph_{0}})^{\aleph_{0}}=2^{\aleph_{0}}$ is circular, so instead use that $\mathrm{Fn}(\omega_{2},2)$ has $\aleph_{2}$ nice names for subsets of $\omega$)."
- **Reported:** 2026-10-28 (8ccef3d)
- **History:** 2026-10-28 (048145a): Open — The supplement still claims ω₂^ω = ω₂·2^ω = ω₂ under CH via Hausdorff's formula, which is false: under CH, ω₂^ω = (ℵ₁)^ℵ₀ = ℵ₁, not ℵ₂. The problem solution still relies on this to get 2^ω = ω₂ in M[G].

### ISSUE-0002 [Ignored: Valid Rebuttal] Claim that MA implies every m.i.f. has size 2^ω via Fn(ω,2) is imprecise
- **Category:** Unsupported fact
- **Location:** text before lemma set:cohen-real-splits
- **Detail:** The text states: "MA からもすべての極大独立族が大きさ $2^{\omega}$ をもつことが従う。これは MA を p.o. $\mathrm{Fn}(\omega,2)$ に適用する易しい演習（A15）で、次の補題の証明とまったく同様である。" Applying MA to $\mathrm{Fn}(\omega,2)$ only shows that a given independent family of size $<2^{\omega}$ in the ground model is not maximal after adding one Cohen real. To conclude that in a model of MA every m.i.f. has size $2^{\omega}$, one needs the fact that any independent family of size $<2^{\omega}$ can be extended to an independent family of size $<2^{\omega}$ containing it and then split by a Cohen real over a suitable inner model — this is not literally "the same as the proof of the lemma" and requires more than a single application of MA to $\mathrm{Fn}(\omega,2)$. The statement as written overstates the ease and the directness of the derivation.
- **Proposed fix:** Replace with: "MA implies that every maximal independent family has size $2^{\omega}$: if $\mathcal{A}$ is an independent family of size $\lambda<2^{\omega}$, one uses MA (applied to the c.c.c. poset $\mathrm{Fn}(\omega,2)$ over a suitable model, or more directly to the poset of finite conditions deciding membership in a new set) to find $C$ such that $\mathcal{A}\cup\{C\}$ is independent, so $\mathcal{A}$ is not maximal."
- **Reported:** 2026-10-28 (8ccef3d)
- **History:** 2026-10-28 (048145a): Ignored: Valid Rebuttal — The rebuttal correctly notes this is Kunen's exercise (A15) and that applying MA to Fn(ω,2) with the dense sets from an independent family of size < 2^ω does split all Boolean combinations, as in the lemma.
**Opus Rebuttal:** This is Kunen's exercise (A15) stated as such; the text says it is an easy exercise analogous to the next lemma, which is how Kunen presents it. Applying MA to $\mathrm{Fn}(\omega,2)$ with the $<2^{\omega}$ dense sets determined by an independent family of size $<2^{\omega}$ does give a set $C$ splitting all Boolean combinations, as in the lemma.

### ISSUE-0003 [Open] Claim that Cohen real is 'sufficiently random' is misleading
- **Category:** Supplement/remark error
- **Location:** supplement / 高い視点から：局所性
- **Detail:** The supplement says: "コーエン実数は「$M$ のどの無限集合も二分する」（\ref{set:cohen-real-splits}）という意味で $M$ に対して十分にランダムであり". A Cohen real is the canonical example of a NON-random real (it has measure zero, is not Martin-Löf random, etc.). The splitting property is a genericity property, not a randomness property; calling it "sufficiently random" is a false/overstated analogy that could mislead readers.
- **Proposed fix:** Replace with: "コーエン実数は「$M$ のどの無限集合も二分する」（\ref{set:cohen-real-splits}）という意味で $M$ に対して十分にジェネリックであり（ただしランダム実数ではない）".
- **Reported:** 2026-10-28 (8ccef3d)
- **History:** 2026-10-28 (048145a): Open — The supplement still calls the Cohen real 'sufficiently random' (十分にランダム) because it splits every ground-model infinite set; a Cohen real is the canonical non-random real, so this remains a misleading claim.

### ISSUE-0004 [Open] Claim that CH is essential in set:cohen-mad-omega-one is overstated
- **Category:** Supplement/remark error
- **Location:** supplement / 前提の検討, second bullet
- **Detail:** The supplement says: "\ref{set:cohen-mad-omega-one} では $M$ の CH が本質的である。$M$ で CH が偽なら、同じ構成で長さ $\omega_{1}$ の枚挙はできない。" While it is true that the specific enumeration of length $\omega_{1}$ uses CH, the conclusion (existence of a m.a.d.f. of size $\aleph_{1}$ in the Cohen model) does not require CH in $M$: one can instead enumerate names of size $\omega_{1}$ using $2^{\omega}=\omega_{1}$ in the extension, or more generally the construction can be adapted. The claim that CH is "essential" (本質的) is too strong; CH is used in the given proof but is not necessary for the result.
- **Proposed fix:** Replace with: "\ref{set:cohen-mad-omega-one} の証明では $M$ の CH を、$\langle p,\tau\rangle$ の組を長さ $\omega_{1}$ で枚挙するために使った。CH はこの証明の枠組みでは必要だが、結論自体（コーエンモデルに大きさ $\aleph_{1}$ の極大概素族が存在すること）は CH を仮定しなくても成り立つ。"
- **Reported:** 2026-10-28 (8ccef3d)
- **History:** 2026-10-28 (048145a): Open — The supplement still asserts that CH in M is essential (本質的) for set:cohen-mad-omega-one; CH is used in the given enumeration but is not necessary for the conclusion, so the claim remains overstated.

### ISSUE-0005 [Open] Claim that a measurable function on a product space depends on countably many coordinates is false
- **Category:** Supplement/remark error
- **Location:** supplement / 高い視点から：局所性
- **Detail:** The supplement says that the small-support phenomenon is similar to the fact that 'a measurable function on a product space of infinitely many independent random variables depends only on countably many coordinates'. This is false in general: a Borel/measurable function on a product like 2^{ω₁} need not depend on countably many coordinates (e.g. the function can depend on uncountably many coordinates in a measurable way; only for special product measures with suitable structure, or for functions measurable w.r.t. a countably generated σ-algebra, does such a reduction hold). The analogy as stated is an overstatement.
- **Proposed fix:** Replace with: 'This is analogous to the fact that in a product of countably many independent random variables, a measurable function depends only on countably many coordinates — but for uncountable products this locality can fail, so the analogy is only heuristic.'
- **Reported:** 2026-10-28 (048145a)
