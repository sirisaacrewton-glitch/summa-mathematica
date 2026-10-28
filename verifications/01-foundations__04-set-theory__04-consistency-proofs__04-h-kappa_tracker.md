# Verification tracker: `01-foundations/04-set-theory/04-consistency-proofs/04-h-kappa.html`

<!-- source: 01-foundations/04-set-theory/04-consistency-proofs/04-h-kappa.html -->
<!-- Managed by scripts/verify.py (GitHub Actions). To dispute an [Open] issue, add a line starting with
     **Opus Rebuttal:** at the end of that issue and push; the next run judges it. Do not edit other lines. -->

- Last verified: 2026-10-28 (commit 10fede1, deepseek-chat)
- Open: 4 / Resolved: 0 / Ignored: 0

## Summary of the last run

(none)

## Issues

### ISSUE-0001 [Open] Grothendieck universe characterization misstated
- **Category:** Supplement/remark error
- **Location:** supplement / 関連する結果
- **Detail:** The supplement says that the nonempty uncountable Grothendieck universes are exactly the $R(\kappa)$ for strongly inaccessible $\kappa$. This is false as stated: $R(\omega)$ is a nonempty countable Grothendieck universe (closed under pairing, power set, and unions of families indexed by elements of the universe), and $V_{\omega}$ is the standard example of a Grothendieck universe that is not of the form $R(\kappa)$ with $\kappa$ strongly inaccessible. The correct statement is that the Grothendieck universes are exactly $R(\kappa)$ for $\kappa$ either $\omega$ or strongly inaccessible (equivalently, $\kappa$ regular with $\forall\lambda<\kappa\,2^{\lambda}<\kappa$, allowing $\kappa=\omega$).
- **Proposed fix:** The Grothendieck universes (transitive sets closed under pairing, power set, and unions of families indexed by their own elements) are exactly the $R(\kappa)$ where $\kappa=\omega$ or $\kappa$ is strongly inaccessible; in particular every nonempty uncountable Grothendieck universe is $R(\kappa)$ for a strongly inaccessible $\kappa$, while $R(\omega)$ is the countable one.
- **Reported:** 2026-10-28 (10fede1)

### ISSUE-0002 [Open] Wrong justification for $\mu^{+}<\kappa$ when $\kappa$ is singular
- **Category:** Supplement/remark error
- **Location:** supplement / 前提の検討, second bullet
- **Detail:** The supplement argues: since $\kappa$ is a limit cardinal (successor cardinals are regular), for $x\in H(\kappa)$ with $\mu=|\operatorname{trcl}(x)|$ we have $\mu^{+}<\kappa$. Being a limit cardinal only gives $\mu^{+}\le\kappa$; the strict inequality $\mu^{+}<\kappa$ requires $\mu^{+}\neq\kappa$, i.e. that $\kappa$ is not the successor of $\mu$. The cited fact (successor cardinals are regular) is irrelevant here and does not yield the strict inequality. The correct argument: $\mu<\kappa$ and $\kappa$ is a limit cardinal, so $\mu^{+}\le\kappa$; if $\mu^{+}=\kappa$ then $\kappa$ would be a successor cardinal, hence regular, contradicting singularity of $\kappa$; thus $\mu^{+}<\kappa$.
- **Proposed fix:** For singular $\kappa$ (which is a limit cardinal), if $x\in H(\kappa)$ and $\mu=|\operatorname{trcl}(x)|<\kappa$, then $\mu^{+}\le\kappa$; since $\kappa$ is singular it is not a successor cardinal, so $\mu^{+}\neq\kappa$, hence $\mu^{+}<\kappa$ and $x\in H(\mu^{+})$. Thus $H(\kappa)=\bigcup_{\mu<\kappa}H(\mu^{+})$.
- **Reported:** 2026-10-28 (10fede1)

### ISSUE-0003 [Open] Hypcheck comment on regularity in ($\Rightarrow$) is inaccurate
- **Category:** Supplement/remark error
- **Location:** set:h-kappa-eq-r-kappa / hypcheck
- **Detail:** The hypcheck says regularity is not used in ($\Rightarrow$) and that it was used 'only' to extract $2^{\lambda}\ge\kappa$ from 'regular and not strongly inaccessible'. But the definition of strong inaccessibility already includes regularity, so the extraction of $\lambda<\kappa$ with $2^{\lambda}\ge\kappa$ uses only $\kappa>\omega$ and failure of strong inaccessibility (regularity is part of what fails). The parenthetical is self-contradictory and misleading about where regularity enters.
- **Proposed fix:** In ($\Rightarrow$) regularity is not needed: from $\kappa>\omega$ and the failure of strong inaccessibility (whose definition includes regularity) we directly get a cardinal $\lambda<\kappa$ with $2^{\lambda}\ge\kappa$.
- **Reported:** 2026-10-28 (10fede1)

### ISSUE-0004 [Open] Remark formula for rank is imprecise
- **Category:** Supplement/remark error
- **Location:** remark after set:h-kappa-in-r-kappa
- **Detail:** The remark states $\rank(x)=\{\rank(y):y\in\operatorname{trcl}(x)\}$. This is not literally correct: for $x=\varnothing$ the right side is $\varnothing=0=\rank(\varnothing)$, fine, but in general $\rank(x)=\sup\{\rank(y)+1:y\in x\}$, and the set $\{\rank(y):y\in\operatorname{trcl}(x)\}$ equals $\rank(x)$ only because it is a transitive set of ordinals closed appropriately; more importantly the displayed identity as written omits the $+1$ and is only true because $\rank(x)$ happens to be a limit point. Concretely for $x=\{\varnothing\}$: $\operatorname{trcl}(x)=\{\varnothing,\{\varnothing\}\}$, ranks are $0$ and $1$, so the set is $\{0,1\}=2=\rank(x)$, which is correct; but the stated reason '$\alpha=S\subseteq\rank(x)$' relies on $S$ being an ordinal, which was proved in Step 1, so the identity is fine. However the phrase 'the ranks of elements of $t$ are all $<\rank(x)$' combined with '$\alpha=S$' gives $S\subseteq\rank(x)$ only as sets of ordinals, and the conclusion $\rank(x)=\{\rank(y):y\in\operatorname{trcl}(x)\}$ should be stated as $\rank(x)=\sup\{\rank(y)+1:y\in x\}$ or with the sup; as written it is acceptable but the cleaner correct statement is $\rank(x)=\bigcup\{\rank(y)+1:y\in x\}$.
- **Proposed fix:** Replace with: $\rank(x)=\sup\{\rank(y)+1:y\in x\}$, and since $\rank(y)<\rank(x)$ for $y\in\operatorname{trcl}(x)$, the set $S=\{\rank(y):y\in\operatorname{trcl}(x)\}$ is an ordinal with $S\subseteq\rank(x)$; combined with $\rank(x)\le S$ from Step 3 this gives $\rank(x)=S=\{\rank(y):y\in\operatorname{trcl}(x)\}$.
- **Reported:** 2026-10-28 (10fede1)
