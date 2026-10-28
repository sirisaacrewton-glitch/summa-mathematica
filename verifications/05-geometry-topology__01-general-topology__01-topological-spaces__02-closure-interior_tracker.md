# Verification tracker: `05-geometry-topology/01-general-topology/01-topological-spaces/02-closure-interior.html`

<!-- source: 05-geometry-topology/01-general-topology/01-topological-spaces/02-closure-interior.html -->
<!-- Managed by scripts/verify.py (GitHub Actions). To dispute an [Open] issue, add a line starting with
     **Opus Rebuttal:** at the end of that issue and push; the next run judges it. Do not edit other lines. -->

- Last verified: 2026-10-28 (commit 10fede1, deepseek-chat)
- Open: 3 / Resolved: 0 / Ignored: 0

## Summary of the last run

(none)

## Issues

### ISSUE-0001 [Open] Kuratowski 14-set example is not a 14-set
- **Category:** Supplement/remark error
- **Location:** supplement (前提を変えると)
- **Detail:** The supplement claims that $A=(0,1)\cup(1,2)\cup\{3\}\cup(\mathbb{Q}\cap(4,5))$ in $\R$ attains 14 sets under closure and complement. This is false. For this $A$, $\overline{A}=[0,2]\cup\{3\}\cup[4,5]$, and the complement of $\overline{A}$ is $(-\infty,0)\cup(2,3)\cup(3,4)\cup(5,\infty)$, whose closure is $(-\infty,0]\cup[2,4]\cup[5,\infty)$. Continuing, the orbit collapses well before 14 distinct sets are reached (the rational part inside $(4,5)$ contributes nothing new since its closure is already $[4,5]$). The standard 14-set example is something like $(0,1)\cup(1,2)\cup\{3\}\cup\bigl([4,5]\cap\mathbb{Q}\bigr)$, where the rationals are taken in a *closed* interval so that the interior/closure alternation produces the maximal number of distinct sets.
- **Proposed fix:** Replace the example with a genuine 14-set, e.g. $A=(0,1)\cup(1,2)\cup\{3\}\cup\bigl([4,5]\cap\mathbb{Q}\bigr)$ in $\R$ (with the usual topology), which does attain 14 distinct sets under iterated closure and complement.
- **Reported:** 2026-10-28 (10fede1)

### ISSUE-0002 [Open] Closure is a left adjoint only to the inclusion of closed sets, and 'reflective subcategory' framing is imprecise
- **Category:** Supplement/remark error
- **Location:** supplement (高い視点から：閉包は随伴)
- **Detail:** The statement $\overline{A}\subseteq F\iff A\subseteq F$ (for $F$ closed) is correct and does express that closure is left adjoint to the inclusion $\mathcal{F}\hookrightarrow\mathcal{P}(X)$. However the supplement then says 'the collection of closed sets is a reflective subcategory (\ref{cat:reflective-subcategory}) and closure is the reflector'. A reflective subcategory concerns a full subcategory and a reflector *into* it; here the 'ambient category' is the poset $\mathcal{P}(X)$ and $\mathcal{F}$ is a reflective sub-poset, which is fine, but the citation to the general categorical definition of reflective subcategory is a stretch and the phrasing '閉包は反射子である' conflates the closure map $\mathcal{P}(X)\to\mathcal{F}$ with a reflector functor. This is a minor imprecision rather than a hard error; flagging for accuracy.
- **Proposed fix:** Rephrase: 'Viewing $\mathcal{P}(X)$ and $\mathcal{F}$ as poset categories, the closure $\mathcal{P}(X)\to\mathcal{F}$ is left adjoint to the inclusion $\mathcal{F}\hookrightarrow\mathcal{P}(X)$; equivalently $\mathcal{F}$ is a reflective sub-poset of $\mathcal{P}(X)$ with reflector the closure. Dually the interior is right adjoint to the inclusion of open sets (coreflection).'
- **Reported:** 2026-10-28 (10fede1)

### ISSUE-0003 [Open] Consequence operator and (K3) remark
- **Category:** Supplement/remark error
- **Location:** supplement (類似の概念)
- **Detail:** The claim that consequence operators satisfy (K2), (K4), monotonicity but 'generally not (K3)' is correct, and that operators without (K3) are 'closure systems' (closure operators in the order-theoretic sense) is essentially right. However the parenthetical justification '(Γ∪Δ から初めて導ける文がある)' is vague and slightly misleading: the failure of (K3) is that $\mathrm{Cn}(\Gamma\cup\Delta)$ can strictly contain $\mathrm{Cn}(\Gamma)\cup\mathrm{Cn}(\Delta)$, i.e. a sentence derivable from $\Gamma\cup\Delta$ need not be derivable from $\Gamma$ alone or from $\Delta$ alone. The wording '初めて導ける' does not clearly express this.
- **Proposed fix:** Replace the parenthetical with: '(たとえば $\Gamma=\{p\}$, $\Delta=\{p\to q\}$ のとき $q\in\mathrm{Cn}(\Gamma\cup\Delta)$ だが $q\notin\mathrm{Cn}(\Gamma)\cup\mathrm{Cn}(\Delta)$)'.
- **Reported:** 2026-10-28 (10fede1)
