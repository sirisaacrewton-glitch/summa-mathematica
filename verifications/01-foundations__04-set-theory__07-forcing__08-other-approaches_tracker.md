# Verification tracker: `01-foundations/04-set-theory/07-forcing/08-other-approaches.html`

<!-- source: 01-foundations/04-set-theory/07-forcing/08-other-approaches.html -->
<!-- Managed by scripts/verify.py (GitHub Actions). To dispute an [Open] issue, add a line starting with
     **Opus Rebuttal:** at the end of that issue and push; the next run judges it. Do not edit other lines. -->

- Last verified: 2026-10-28 (commit 10fede1, deepseek-chat)
- Open: 3 / Resolved: 0 / Ignored: 0

## Summary of the last run

(none)

## Issues

### ISSUE-0001 [Open] Kleene–Post via Fn(2×ω,2) gives recursively incomparable reals, not incomparable Turing degrees
- **Category:** Unsupported fact
- **Location:** set:sec-forcing-history / paragraph on recursion theory
- **Detail:** The text says: take $\PP=\mathrm{Fn}(2\times\omega,2)$ and $G$ generic over $M$, so $G$ codes $f_{0},f_{1}\in{}^{\omega}2$; then $f_{0}$ and $f_{1}$ are recursively incomparable. This is not what the forcing argument gives. Genericity over $M$ (even over the arithmetic-definable dense sets) only ensures that $f_{0}$ and $f_{1}$ are not computable from each other *by a function coded in $M$*; it does not make them Turing-incomparable in the real world. Indeed, if $M$ is a c.t.m. of ZFC and $G$ is Cohen generic, then $f_{0}\oplus f_{1}$ is Cohen generic over $M$, and one can choose $G$ so that $f_{0}$ and $f_{1}$ are actually Turing equivalent (e.g. by taking $f_{1}=f_{0}$ on a comeager/measure-one set of conditions is not generic, but there are generic filters producing $f_{1}=f_{0}$ up to a computable permutation is false; more simply, the correct statement is that $f_{0}$ and $f_{1}$ are mutually $M$-generic and hence neither is in $M(f_{1-i})$, which is a statement about $M$-recursive reductions, not about recursive reductions). The genuine Kleene–Post theorem concerns constructing $f_{0},f_{1}\le_{T}0'$ that are Turing-incomparable, and the forcing version requires meeting only the countably many dense sets that are *arithmetic* (or even just $\Sigma^{0}_{1}$ relative to the pair), and then one argues via a priority/limit argument that the resulting reals are genuinely Turing-incomparable — this extra argument is not supplied and is not a consequence of genericity alone. As stated ('$f_{0}$ and $f_{1}$ are recursively incomparable'), the claim is false for a general generic $G$.
- **Proposed fix:** Replace with: 'Then $f_{0}$ and $f_{1}$ are mutually $M$-generic Cohen reals, so neither is recursive in the other *via a reduction coded in $M$*. To obtain genuine Turing incomparability one meets only the countably many dense sets that are arithmetic in the pair $(f_{0},f_{1})$; a short additional argument (the Kleene–Post priority argument) then shows $f_{0}$ and $f_{1}$ are Turing-incomparable, and since only countably many dense sets need be met, $G$ — hence $f_{0},f_{1}$ — can be taken recursive in $0'$.'
- **Reported:** 2026-10-28 (10fede1)

### ISSUE-0002 [Open] Infinite distributivity sentence is not valid in ordinary two-valued semantics
- **Category:** Supplement/remark error
- **Location:** set:sec-forcing-history / paragraph on model theory (Rasiowa–Sikorski)
- **Detail:** The text claims that the sentence $$\bigwedge_{n\in\omega}\bigvee_{i\in 2}p_{ni}\to\bigvee_{f\in{}^{\omega}2}\bigwedge_{n\in\omega}p_{nf(n)}$$ is 'valid but not derivable from the usual inference rules of infinitary logic', and that it fails in a Boolean-valued interpretation because the disjunction $\bigvee_{f\in{}^{\omega}2}$ ranges only over $f\in\mathbf{V}$. This is imprecise/incorrect as a statement about validity. In the standard (two-valued, set-theoretic) semantics of $L_{\omega_{1},\omega}$ with a *set* of propositional variables $\{p_{ni}\}$, the sentence is in fact valid: any two-valued assignment $v$ with $v(p_{ni})\in\{0,1\}$ and $\bigvee_{i}v(p_{ni})=1$ for all $n$ determines a function $f\in{}^{\omega}2$ by $f(n)=$ the (chosen) $i$ with $v(p_{ni})=1$, and then $\bigwedge_{n}p_{nf(n)}$ holds. So the sentence is a valid sentence of $L_{\omega_{1},\omega}$ (indeed provable in the usual axiomatization of $L_{\omega_{1},\omega}$). The intended point concerns *non-validity in Boolean-valued models* / failure of compactness-style completeness for uncountable languages, not failure of ordinary validity. The claim 'valid but not derivable' is therefore wrong.
- **Proposed fix:** Replace with: 'The sentence $\varphi$ is valid in the ordinary two-valued semantics (any assignment satisfying the antecedent determines an $f\in{}^{\omega}2$ witnessing the consequent). However, $\varphi$ takes truth value $\mathbf{0}$ in a suitable Boolean-valued interpretation: in the regular-open algebra of $2^{\omega}$ (the completion of $\mathrm{Fn}(\omega,2)$), assigning $p_{ni}$ the value $\{f\in{}^{\omega}2:f(n)=i\}$ makes the antecedent $\mathbf{1}$ and the consequent $\mathbf{0}$, since the disjunction $\bigvee_{f\in{}^{\omega}2}$ ranges only over $f$ in the ground model $\mathbf{V}$ and a generic real differs from all of them. This shows that the Boolean-valued semantics does not satisfy the expected completeness/soundness correspondence for uncountable languages.'
- **Reported:** 2026-10-28 (10fede1)

### ISSUE-0003 [Open] Claim that (2a)/(2b) avoid countability is misleading; Boolean-valued models still need genericity for two-valued quotients
- **Category:** Supplement/remark error
- **Location:** supplement / 前提の検討
- **Detail:** The supplement states that '(2a), (2b) do not use c.t.m. nor countability, but instead one must verify all facts about $\Vdash^{*}$ directly in $\mathbf{V}$'. For (2a) this is essentially right. For (2b), however, obtaining an actual two-valued model $\mathbf{V}^{\mathbb{B}}/G$ requires an ultrafilter $G$ on $\mathbb{B}$ meeting all dense sets / the Rasiowa–Sikorski lemma, which for a countable Boolean algebra uses countability, and in general requires an ultrafilter whose existence is not provable in ZFC for arbitrary $\mathbb{B}$ (it needs e.g. a generic ultrafilter or an extension of the universe). So the blanket assertion that (2b) 'does not use countability' is overstated: the Boolean-valued model $\mathbf{V}^{\mathbb{B}}$ itself needs no countability, but passing to a two-valued quotient does.
- **Proposed fix:** Replace with: '(2a) uses neither a c.t.m. nor countability; one verifies the facts about $\Vdash^{*}$ directly in $\mathbf{V}$. (2b) constructs the Boolean-valued model $\mathbf{V}^{\mathbb{B}}$ without countability assumptions, but passing to a two-valued quotient $\mathbf{V}^{\mathbb{B}}/G$ requires an ultrafilter $G$ meeting all dense sets, whose existence in general needs a genericity/countability argument (e.g. the Rasiowa–Sikorski lemma for countable $\mathbb{B}$).'
- **Reported:** 2026-10-28 (10fede1)
