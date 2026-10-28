# Verification tracker: `01-foundations/04-set-theory/02-infinitary-combinatorics/03-martin-axiom.html`

<!-- source: 01-foundations/04-set-theory/02-infinitary-combinatorics/03-martin-axiom.html -->
<!-- Managed by scripts/verify.py (GitHub Actions). To dispute an [Open] issue, add a line starting with
     **Opus Rebuttal:** at the end of that issue and push; the next run judges it. Do not edit other lines. -->

- Last verified: 2026-10-28 (commit 10fede1, deepseek-chat)
- Open: 5 / Resolved: 0 / Ignored: 0

## Summary of the last run

(none)

## Issues

### ISSUE-0001 [Open] MA does not imply 2^{aleph_0} is regular
- **Category:** Supplement/remark error
- **Location:** supplement after set:ma-consistency
- **Detail:** The supplement claims 'MA は $2^{\aleph_{0}}$ が正則であることを導く' citing set:ma-continuum-regular. This is false: MA is consistent with $2^{\aleph_{0}}=\aleph_{\omega_1}$ (or any cardinal of uncountable cofinality), which is singular. What MA actually implies is that $2^{\aleph_{0}}$ has uncountable cofinality (i.e. $\mathrm{cf}(2^{\aleph_{0}})>\omega$), not regularity. The subsequent claim that $\kappa$ must be regular is therefore also overstated; the correct restriction is $\mathrm{cf}(\kappa)>\omega$.
- **Proposed fix:** MA は $2^{\aleph_{0}}$ の共終度が可算でないこと（$\mathrm{cf}(2^{\aleph_{0}})>\omega$）を導く（\ref{set:ma-continuum-regular}）ので、上の事実で $\kappa$ の共終度を非可算に限っているのは本質的である。
- **Reported:** 2026-10-28 (10fede1)

### ISSUE-0002 [Open] PFA attribution and 'proper' class description
- **Category:** Supplement/remark error
- **Location:** supplement after set:ma-ccc-necessary
- **Detail:** The supplement states PFA is obtained by considering 'proper' posets, described as those containing both c.c.c. and countably closed posets, and attributes '$\mathrm{PFA}\Rightarrow 2^{\aleph_{0}}=\aleph_{2}$' to Todorčević, Veličković. The implication PFA $\Rightarrow 2^{\aleph_{0}}=\aleph_{2}$ is due to Foreman–Magidor–Shelah (1988); Todorčević and Veličković proved the stronger PFA $\Rightarrow 2^{\aleph_{0}}=\aleph_{2}$ via their own route but the standard attribution for the consistency-strength result is Foreman–Magidor–Shelah. Also 'proper' is not defined as 'containing c.c.c. and countably closed'; proper posets are a class strictly containing both, defined via preservation of stationarity. The phrasing 'c.c.c. な半順序と可算閉な半順序をともに含む「適正（proper）」な半順序' is imprecise: proper posets properly contain both classes, they are not merely their union.
- **Proposed fix:** c.c.c. な半順序と可算閉な半順序の両方を含む、より広いクラスである「適正（proper）」な半順序について同様の公理を考えたものが適正強制公理（PFA）である。PFA は $2^{\aleph_{0}}=\aleph_{2}$ を導く（Foreman–Magidor–Shelah; 別証明が Todorčević–Veličković）。
- **Reported:** 2026-10-28 (10fede1)

### ISSUE-0003 [Open] Solovay–Tennenbaum statement: 2^{<kappa}=kappa condition
- **Category:** Unsupported fact
- **Location:** fact set:ma-consistency
- **Detail:** The fact states: for regular $\kappa>\aleph_{1}$ with $2^{<\kappa}=\kappa$, a c.c.c. forcing extension gives MA and $2^{\aleph_{0}}=\kappa$. This is correct as stated (the Solovay–Tennenbaum theorem). However the first sentence 'ZFC consistent implies ZFC+MA+$2^{\aleph_{0}}=\aleph_{2}$ consistent' requires $2^{<\aleph_{2}}=\aleph_{2}$, i.e. CH, which is not a theorem of ZFC. The general statement with $\kappa=\aleph_{2}$ needs $2^{\aleph_{1}}=\aleph_{2}$, which is not guaranteed. So the special case $\kappa=\aleph_{2}$ is not covered by the stated hypothesis $2^{<\kappa}=\kappa$ unless CH holds. The unconditional consistency of MA+$2^{\aleph_{0}}=\aleph_{2}$ is true but requires a different argument (iterating over a model where $2^{\aleph_{1}}$ is controlled, or starting from a model of GCH).
- **Proposed fix:** The unconditional consistency of $\mathrm{MA}+2^{\aleph_{0}}=\aleph_{2}$ holds (Solovay–Tennenbaum), but the general statement should read: if $\kappa>\aleph_{1}$ is regular and $2^{<\kappa}=\kappa$ (e.g. $\kappa=\aleph_{2}$ under GCH), then a c.c.c. forcing extension satisfies $\mathrm{MA}+2^{\aleph_{0}}=\kappa$. The case $\kappa=\aleph_{2}$ without GCH requires first arranging $2^{\aleph_{1}}=\aleph_{2}$.
- **Reported:** 2026-10-28 (10fede1)

### ISSUE-0004 [Open] MA models with 2^{aleph_0} = first weakly inaccessible
- **Category:** Supplement/remark error
- **Location:** supplement after set:ma-consistency
- **Detail:** The supplement claims there are MA models with $2^{\aleph_{0}}$ equal to the first weakly inaccessible cardinal (assuming a weakly inaccessible exists). This is problematic: MA requires $\mathrm{cf}(2^{\aleph_{0}})>\omega$, and a weakly inaccessible cardinal has uncountable cofinality, so this is not immediately contradictory. However, the Solovay–Tennenbaum iteration to reach $\kappa$ = first weakly inaccessible requires $2^{<\kappa}=\kappa$, which for a weakly inaccessible $\kappa$ means $2^{\lambda}<\kappa$ for all $\lambda<\kappa$; this is a strong hypothesis not guaranteed by weak inaccessibility alone. The claim as stated (that such models exist merely from Con(ZFC + weakly inaccessible)) is not justified and is at best a delicate consistency result.
- **Proposed fix:** Remove the weakly inaccessible example, or state it with the required hypothesis: 'if $\kappa$ is weakly inaccessible with $2^{<\kappa}=\kappa$, then there is a model of MA with $2^{\aleph_{0}}=\kappa$.'
- **Reported:** 2026-10-28 (10fede1)

### ISSUE-0005 [Open] Step 1 of set:fn-ccc: injection from omega_1 into A
- **Category:** Logical gap
- **Location:** set:fn-ccc / Step 1
- **Detail:** Step 1 asserts that since $A$ is uncountable, $\omega_{1}\le\lvert A\rvert$ and hence there is an injection $\omega_{1}\to A$. This uses that $\omega_{1}$ is the least uncountable cardinal, which is fine, but the hypcheck attributes this to AC via 'cardinal comparison of uncountable sets'. Actually the existence of an injection $\omega_{1}\to A$ for uncountable $A$ requires that $\omega_{1}$ is a cardinal (i.e. $\aleph_{1}$ is initial), which is a ZFC theorem, and the well-ordering of $A$ (AC). This is acceptable. No error.
- **Proposed fix:** No change needed; the step is valid.
- **Reported:** 2026-10-28 (10fede1)
