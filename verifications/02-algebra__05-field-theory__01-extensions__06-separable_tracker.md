# Verification tracker: `02-algebra/05-field-theory/01-extensions/06-separable.html`

<!-- source: 02-algebra/05-field-theory/01-extensions/06-separable.html -->
<!-- Managed by scripts/verify.py (GitHub Actions). To dispute an [Open] issue, add a line starting with
     **Opus Rebuttal:** at the end of that issue and push; the next run judges it. Do not edit other lines. -->

- Last verified: 2026-10-28 (commit 10fede1, deepseek-chat)
- Open: 2 / Resolved: 0 / Ignored: 0

## Summary of the last run

(none)

## Issues

### ISSUE-0001 [Open] Separability iff L⊗_K Ω is reduced: missing finite/separable-degree hypothesis and wrong identification
- **Category:** Supplement/remark error
- **Location:** supplement (fld:sec-sp-problems supplement)
- **Detail:** The supplement claims: '$L/K$ separable $\iff L\otimes_{K}\Omega$ is reduced (in fact $\Omega^{[L:K]}$), and if inseparable nilpotents appear.' For a finite extension $L/K$, $L\otimes_{K}\Omega$ is reduced iff $L/K$ is separable, and then $L\otimes_{K}\Omega\cong\Omega^{[L:K]}$ — this part is correct for finite $L/K$. However the statement as written omits the finiteness hypothesis (the page's whole context is finite extensions, so this is minor), and more importantly the parenthetical '$\Omega^{[L:K]}$' is only valid when $L/K$ is separable; in the inseparable case $L\otimes_{K}\Omega$ is not $\Omega^{[L:K]}$ but a non-reduced algebra of the same dimension. The phrasing '実は $\Omega^{[L:K]}$' attached to the reduced case is acceptable, but the sentence structure suggests the identification holds generally. Also 'nilpotents appear' should be 'nonzero nilpotents' (the zero element is nilpotent).
- **Proposed fix:** For a finite extension $L/K$: $L/K$ is separable $\iff L\otimes_{K}\Omega$ is reduced, and in that case $L\otimes_{K}\Omega\cong\Omega^{[L:K]}$. If $L/K$ is not separable, $L\otimes_{K}\Omega$ has nonzero nilpotent elements (and is not isomorphic to $\Omega^{[L:K]}$).
- **Reported:** 2026-10-28 (10fede1)

### ISSUE-0002 [Open] Hypcheck claim that dropping separability makes the primitive element theorem false needs the correct counterexample
- **Category:** Unsupported fact
- **Location:** hypcheck (fld:primitive-element), first bullet
- **Detail:** The hypcheck says: without separability the theorem is false, citing $K=\mathbb{F}_{p}(s,t)$, $L=K(s^{1/p},t^{1/p})$ with $[L:K]=p^{2}$ and every $\gamma\in L$ satisfying $\gamma^{p}\in K$, hence $[K(\gamma):K]\le p$. This is correct: $L/K$ is purely inseparable of degree $p^{2}$ and not simple. The reference to fld:prob-sp-not-simple is appropriate. No error here; the claim is accurate.
- **Proposed fix:** No change needed.
- **Reported:** 2026-10-28 (10fede1)
