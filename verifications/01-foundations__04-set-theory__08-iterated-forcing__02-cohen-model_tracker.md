# Verification tracker: `01-foundations/04-set-theory/08-iterated-forcing/02-cohen-model.html`

<!-- source: 01-foundations/04-set-theory/08-iterated-forcing/02-cohen-model.html -->
<!-- Managed by scripts/verify.py (GitHub Actions). To dispute an [Open] issue, add a line starting with
     **Opus Rebuttal:** at the end of that issue and push; the next run judges it. Do not edit other lines. -->

- Last verified: 2026-10-28 (commit 10fede1, deepseek-chat)
- Open: 4 / Resolved: 0 / Ignored: 0

## Summary of the last run

(none)

## Issues

### ISSUE-0001 [Open] Hausdorff formula misapplied: ω₂^ω = ω₂ does not follow from CH
- **Category:** Supplement/remark error
- **Location:** supplement / 前提の検討, third bullet (and problem set:prob-cohen-not-ma solution)
- **Detail:** The supplement claims that under CH, $\omega_{2}^{\omega}=\omega_{2}\cdot2^{\omega}=\omega_{2}$ "as the Hausdorff formula." The Hausdorff formula gives $\omega_{2}^{\omega}=(\omega_{2}^{\omega})^{\omega}=\omega_{2}^{\omega}\cdot 2^{\omega}$ only as a recursion identity; it does NOT reduce $\omega_{2}^{\omega}$ to $\omega_{2}$. Indeed $\omega_{2}^{\omega}\ge\omega_{2}^{\mathrm{cf}(\omega_{2})}$ and in general $\omega_{2}^{\omega}$ can be as large as $\omega_{2}^{\omega}$ (e.g. $2^{\omega}=\omega_{1}$ is consistent with $2^{\omega_{1}}$ arbitrarily large, so $\omega_{2}^{\omega}$ can exceed $\omega_{2}$). The correct statement is $\omega_{2}^{\omega}=\omega_{2}^{\omega}$; what is actually needed and true under CH is $\omega_{2}^{\omega}=\omega_{2}$ only if additionally $2^{\omega_{1}}=\omega_{2}$ (GCH at $\omega_{1}$), which is not assumed. The problem solution also relies on this false claim.
- **Proposed fix:** Replace with: "Under CH alone one has $2^{\omega}=\omega_{1}$, but $\omega_{2}^{\omega}=\omega_{2}$ requires $2^{\omega_{1}}=\omega_{2}$ (GCH at $\omega_{1}$); the Hausdorff recursion $\omega_{2}^{\omega}=(\omega_{2}^{\omega})^{\omega}=\omega_{2}^{\omega}\cdot2^{\omega}$ does not by itself give $\omega_{2}^{\omega}=\omega_{2}$. To conclude $2^{\omega}=\omega_{2}$ in $M[G]$ for $\mathrm{Fn}(\omega_{2},2)$ one uses $\mathrm{Fn}(\omega_{2},2)\cong\mathrm{Fn}(\omega_{2}\times\omega,2)$ and $\kappa^{\omega}=\kappa$ with $\kappa=\omega_{2}$ under GCH, or directly that $\mathrm{Fn}(\omega_{2},2)$ has $\omega_{2}$-many nice names for reals."
- **Reported:** 2026-10-28 (10fede1)

### ISSUE-0002 [Open] Claim that MA implies every m.i.f. has size 2^ω via Fn(ω,2) is imprecise
- **Category:** Unsupported fact
- **Location:** text before lemma set:cohen-real-splits
- **Detail:** The text states "MA からもすべての極大独立族が大きさ $2^{\omega}$ をもつことが従う。これは MA を p.o. $\mathrm{Fn}(\omega,2)$ に適用する易しい演習（A15）で、次の補題の証明とまったく同様である." Applying MA to $\mathrm{Fn}(\omega,2)$ only shows that a given independent family of size $<2^{\omega}$ is not maximal (the splitting argument), which yields that every m.i.f. has size $\ge$ ... but to conclude every m.i.f. has size exactly $2^{\omega}$ one needs that any independent family of size $<2^{\omega}$ can be extended, which is what the splitting argument gives. However the phrase "MA を p.o. $\mathrm{Fn}(\omega,2)$ に適用する" is misleading: MA for the single p.o. $\mathrm{Fn}(\omega,2)$ is not MA; the argument uses MA to find a filter meeting $<2^{\omega}$ dense sets, and the conclusion that every m.i.f. has size $2^{\omega}$ requires that $\mathrm{Fn}(\omega,2)$-generic reals split every ground-model set, which is exactly the lemma. The statement as written overstates what "applying MA to $\mathrm{Fn}(\omega,2)$" gives and conflates MA with genericity for one p.o.
- **Proposed fix:** Rephrase: "MA implies that every maximal independent family has size $2^{\omega}$: if $\mathcal{A}$ is an independent family of size $\lambda<2^{\omega}$, then using MA (not merely genericity for $\mathrm{Fn}(\omega,2)$) one finds a set $C$ splitting every finite Boolean combination of members of $\mathcal{A}$, so $\mathcal{A}\cup\{C\}$ is independent and $\mathcal{A}$ is not maximal. This is the same computation as in the proof of the next lemma."
- **Reported:** 2026-10-28 (10fede1)

### ISSUE-0003 [Open] Claim that Cohen reals are 'sufficiently random' is misleading
- **Category:** Supplement/remark error
- **Location:** supplement / 高い視点から：局所性
- **Detail:** The supplement says "コーエン実数は「$M$ のどの無限集合も二分する」という意味で $M$ に対して十分にランダムであり". Cohen reals are the canonical example of NON-random reals (they are not random in the sense of measure/Solovay; a Cohen real is meager-generic, not measure-generic). Calling them "sufficiently random" is false/misleading; the splitting property is a genericity (category) property, not randomness.
- **Proposed fix:** Replace with: "コーエン実数は「$M$ のどの無限集合も二分する」という意味で $M$ 上ジェネリックであり（これはカテゴリー的な性質で、測度的な意味でのランダム性ではない）、その結果..."
- **Reported:** 2026-10-28 (10fede1)

### ISSUE-0004 [Open] Claim that CH is essential for the length-ω₁ enumeration in set:cohen-mad-omega-one
- **Category:** Supplement/remark error
- **Location:** supplement / 前提の検討, second bullet
- **Detail:** The supplement says "$M$ の CH が本質的である。$M$ で CH が偽なら、同じ構成で長さ $\omega_{1}$ の枚挙はできない." This is imprecise: the enumeration of pairs $\langle p,\tau\rangle$ of size $\omega_{1}$ requires $2^{\omega}=\omega_{1}$ (CH) to bound the number of nice names by $\omega_{1}$; but the construction could be adapted to produce a m.a.d.f. of size $2^{\omega}$ (or of size $\kappa$ with $2^{\omega}=\kappa$) without CH. The claim that CH is "essential" overstates; it is essential only for getting a family of size exactly $\omega_{1}$ by this enumeration, not for the method.
- **Proposed fix:** Replace with: "$M$ の CH は、$\langle p,\tau\rangle$ の組を長さ $\omega_{1}$ で枚挙し、大きさ $\omega_{1}$ の極大概素族を得るために使われる。CH がなければ同様の構成で大きさ $2^{\omega}$（あるいは $\kappa=2^{\omega}$）の極大概素族が得られるが、$\omega_{1}$ のものは得られない。"
- **Reported:** 2026-10-28 (10fede1)
