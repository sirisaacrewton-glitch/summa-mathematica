# Verification tracker: `01-foundations/04-set-theory/06-constructible-sets/02-zf-in-l.html`

<!-- source: 01-foundations/04-set-theory/06-constructible-sets/02-zf-in-l.html -->
<!-- Managed by scripts/verify.py (GitHub Actions). To dispute an [Open] issue, add a line starting with
     **Opus Rebuttal:** at the end of that issue and push; the next run judges it. Do not edit other lines. -->

- Last verified: 2026-10-28 (commit 8ccef3d, deepseek-chat)
- Open: 3 / Resolved: 0 / Ignored: 0

## Summary of the last run

The main theorem and its proof are essentially correct: the model-of-ZF argument, the absoluteness of $L_{\alpha}$, $\mathbf{V}=\mathbf{L}$ in $\mathbf{L}$, minimality, and the $\mathbf{V}=\mathbf{L}\to\mathbf{V}=\mathbf{HOD}\to\mathrm{AC}$ chain are all sound. The genuine problems are concentrated in the supplement: (1) the claim that $H(\kappa)$ is a model to which the absoluteness lemma applies is false because $H(\kappa)$ fails Replacement; (2) the attribution of 'large cardinal implies $\mathbf{V}\neq\mathbf{L}$' to Scott's theorem is overstated since only measurability-level and above cardinals are incompatible with $\mathbf{V}=\mathbf{L}$; (3) the rephrasing of minimality drops the essential model hypothesis. These should be corrected.

## Issues

### ISSUE-0001 [Open] H(κ) does not satisfy ZF−P in general
- **Category:** Supplement/remark error
- **Location:** supplement, second bullet (set:l-absolute)
- **Detail:** The supplement claims that since the power set axiom is not needed, \ref{set:l-absolute} applies to models like $H(\kappa)$ that do not satisfy the power set axiom. But $H(\kappa)$ for regular uncountable $\kappa$ does not satisfy all of $\ZF-\mathrm{P}$: it fails Replacement (and also fails the full Separation scheme for arbitrary formulas in general). $H(\kappa)$ satisfies only a bounded fragment (e.g. ZF$^{-}$ minus power set, or KP-style collection). Since \ref{set:l-absolute} requires $M$ to be a model of $\ZF-\mathrm{P}$ (or a sufficiently large finite fragment including Replacement), the claim that $H(\kappa)$ is a legitimate example is false.
- **Proposed fix:** Replace with: "\ref{set:l-absolute} requires $M$ to satisfy (a sufficiently large finite fragment of) $\ZF-\mathrm{P}$, in particular Replacement. The power set axiom is not needed, but models such as $H(\kappa)$ that fail Replacement are not covered; one needs a transitive model of $\ZF-\mathrm{P}$ (e.g. $L_{\kappa}$ for regular $\kappa>\omega$, or $H(\kappa)$ only if it happens to satisfy the required fragment)."
- **Reported:** 2026-10-28 (8ccef3d)

### ISSUE-0002 [Open] Measurable cardinal implies V≠L is not 'Scott's theorem' as stated
- **Category:** Supplement/remark error
- **Location:** supplement, 関連する結果 (Scott's theorem)
- **Detail:** The supplement says that the existence of a large cardinal (e.g. a measurable cardinal) implies $\mathbf{V}\neq\mathbf{L}$, attributed to Scott's theorem. Scott's theorem is specifically: if there is a measurable cardinal then $\mathbf{V}\neq\mathbf{L}$. The general phrasing 'ある大きな基数の存在（たとえば可測基数）は V≠L を導く' is imprecise: not every large cardinal notion does (e.g. weakly compact cardinals are consistent with $\mathbf{V}=\mathbf{L}$; in fact $0^{\#}$-free large cardinals below $0^{\#}$ can exist in $L$). Only large cardinals incompatible with $\mathbf{V}=\mathbf{L}$ (measurable and above) do.
- **Proposed fix:** State precisely: "Scott's theorem: if a measurable cardinal exists, then $\mathbf{V}\neq\mathbf{L}$. More generally, large cardinal notions at the level of measurability or higher are incompatible with $\mathbf{V}=\mathbf{L}$, whereas smaller large cardinals (e.g. weakly compact, inaccessible) are consistent with $\mathbf{V}=\mathbf{L}$."
- **Reported:** 2026-10-28 (8ccef3d)

### ISSUE-0003 [Open] L-minimality restated as 'smallest among transitive models containing ON'
- **Category:** Supplement/remark error
- **Location:** supplement, 関連する結果, first sentence
- **Detail:** The supplement says \ref{set:l-minimal-class} can be rephrased as 'L is the smallest among transitive models of ZF containing ON (if ON⊆M then M is a proper class)'. But \ref{set:l-minimal-class} requires $M$ to be a model of $\ZF-\mathrm{P}$; merely containing $\mathbf{ON}$ and being a transitive proper class does not make $M$ contain $\mathbf{L}$ (e.g. $\mathbf{HOD}$ contains ON but the inclusion $\mathbf{L}\subseteq\mathbf{HOD}$ needs the theorem, and arbitrary transitive proper classes containing ON need not model enough ZF). The parenthetical '($\mathbf{ON}\subseteq M$ then M is a proper class)' is fine, but the rephrasing drops the essential hypothesis that $M$ models $\ZF-\mathrm{P}$.
- **Proposed fix:** Rephrase: "\ref{set:l-minimal-class} says: among transitive proper classes $M$ that are models of $\ZF-\mathrm{P}$ (more precisely, satisfy the finite fragment $\Phi$), $\mathbf{L}$ is the smallest, i.e. $\mathbf{L}\subseteq M$. Note that containing $\mathbf{ON}$ alone is not enough; the model hypothesis is essential."
- **Reported:** 2026-10-28 (8ccef3d)
