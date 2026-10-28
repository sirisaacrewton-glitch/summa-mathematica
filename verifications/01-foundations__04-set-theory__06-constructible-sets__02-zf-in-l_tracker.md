# Verification tracker: `01-foundations/04-set-theory/06-constructible-sets/02-zf-in-l.html`

<!-- source: 01-foundations/04-set-theory/06-constructible-sets/02-zf-in-l.html -->
<!-- Managed by scripts/verify.py (GitHub Actions). To dispute an [Open] issue, add a line starting with
     **Opus Rebuttal:** at the end of that issue and push; the next run judges it. Do not edit other lines. -->

- Last verified: 2026-10-28 (commit 10fede1, deepseek-chat)
- Open: 3 / Resolved: 0 / Ignored: 0

## Summary of the last run

The main theorem and its proof are essentially correct: the use of the general reflection theorem for Separation, the absoluteness of $L_{\alpha}$ for transitive models of $\ZF-\mathrm{P}$, and the minimality arguments are all sound. The problems are confined to the supplement: the claim that $H(\kappa)$ can be used as a model of $\ZF-\mathrm{P}$ is false (it fails Replacement), and the 'initial object' analogy overstates the categorical content. The Scott's theorem remark is mathematically correct.

## Issues

### ISSUE-0001 [Open] H(κ) does not satisfy ZF−P
- **Category:** Supplement/remark error
- **Location:** supplement / 前提の検討, second bullet
- **Detail:** The supplement claims that since the power set axiom is not needed, \ref{set:l-absolute} applies to models like $H(\kappa)$ that fail the power set axiom. But $H(\kappa)$ for regular uncountable $\kappa$ does not satisfy all of $\ZF-\mathrm{P}$: it fails the power set axiom (intended) but also fails Replacement in general (the image of a set under a function need not be of size $<\kappa$). So $H(\kappa)$ is not a model of $\ZF-\mathrm{P}$ and the cited lemma does not apply to it as stated.
- **Proposed fix:** Replace with: "\ref{set:l-absolute} requires $M$ to be a transitive model of $\ZF-\mathrm{P}$ (in fact a suitable finite fragment). The power set axiom is not needed, so models of $\ZF-\mathrm{P}$ that fail the power set axiom (e.g. $H(\kappa)$ for regular uncountable $\kappa$, which satisfies $\ZF-\mathrm{P}$) are covered."
- **Reported:** 2026-10-28 (10fede1)

### ISSUE-0002 [Open] L is not literally an initial object
- **Category:** Supplement/remark error
- **Location:** supplement / 高い視点から：L は「始対象」
- **Detail:** The analogy calls $\mathbf{L}$ an "initial object" among transitive models containing $\mathbf{ON}$. But the relevant category (transitive proper-class models of a finite fragment of $\ZF$, with inclusions as morphisms) has no initial object in the categorical sense: $\mathbf{L}$ is the minimum under inclusion, but there is no unique morphism from $\mathbf{L}$ to an arbitrary such model in a categorical sense, and the analogy with prime fields is only informal. Calling it an initial object overstates the analogy.
- **Proposed fix:** Soften to: "$\mathbf{L}$ is the $\subseteq$-least transitive proper-class model containing $\mathbf{ON}$ (a minimum, not a categorical initial object); the analogy with prime fields is only heuristic."
- **Reported:** 2026-10-28 (10fede1)

### ISSUE-0003 [Open] Scott's theorem attribution and statement
- **Category:** Unsupported fact
- **Location:** supplement / 関連する結果
- **Detail:** The supplement states that the existence of a measurable cardinal implies $\mathbf{V}\neq\mathbf{L}$ and attributes this to Scott's theorem. This is correct (Scott 1961: if a measurable cardinal exists then $\mathbf{V}\neq\mathbf{L}$), so the statement itself is fine. However, it is stated without proof and without a citation to a source in the site; since it is a genuine theorem this is acceptable as a 'known result', but the phrasing 'as is generally known' without any reference is borderline. No mathematical error.
- **Proposed fix:** Optionally add a reference: "(Scott's theorem; see e.g. Jech, Set Theory, Theorem 21.4)."
- **Reported:** 2026-10-28 (10fede1)
