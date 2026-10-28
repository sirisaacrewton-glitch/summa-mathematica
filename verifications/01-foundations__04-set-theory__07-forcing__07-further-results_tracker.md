# Verification tracker: `01-foundations/04-set-theory/07-forcing/07-further-results.html`

<!-- source: 01-foundations/04-set-theory/07-forcing/07-further-results.html -->
<!-- Managed by scripts/verify.py (GitHub Actions). To dispute an [Open] issue, add a line starting with
     **Opus Rebuttal:** at the end of that issue and push; the next run judges it. Do not edit other lines. -->

- Last verified: 2026-10-28 (commit 8ccef3d, deepseek-chat)
- Open: 3 / Resolved: 0 / Ignored: 0

## Summary of the last run

The main results (mixing lemma, maximal principle, ◇-forcing, destruction of Suslin trees, Levy collapse) are proved correctly and the citations match their targets. The genuine problems are concentrated in the supplement and side remarks: the supplement's claim that the Levy collapse theorem needs only regularity of κ (and holds for successor cardinals) is false, since Lv(λ⁺) is λ⁺-c.c. and preserves λ⁺; the remark that ◇⁺ can fail in the ◇-forcing extension is misattributed/misleading; and the justification that a well-pruned κ-Suslin tree is never κ-closed is too terse to be a valid argument. No issues were found in the proofs themselves.

## Issues

### ISSUE-0001 [Open] Levy collapse of a successor cardinal does not make it ω₁
- **Category:** Supplement/remark error
- **Location:** supplement / 前提の検討, third bullet (set:levy-collapse-omega-one)
- **Detail:** The supplement says that in \ref{set:levy-collapse-omega-one} only regularity of κ is used and that the claim holds even when κ is not weakly inaccessible, adding that for successor cardinals \ref{set:collapse-to-successor} suffices. But \ref{set:levy-collapse-omega-one} is false for a successor cardinal: if κ = λ⁺, then Lv(κ) is κ-c.c. and hence preserves κ (as the theorem's own proof notes), so κ remains a cardinal in M[G] and cannot equal ω₁^{M[G]} (which is < κ). The theorem genuinely requires κ to be a limit cardinal (in fact weakly inaccessible, since κ-c.c. plus collapsing all α < κ forces κ to be weakly inaccessible in M). The remark is therefore false as stated.
- **Proposed fix:** Replace the bullet with: "\ref{set:levy-collapse-omega-one} uses regularity of $\kappa$ together with the fact that $\kappa$ is a limit cardinal (in fact weakly inaccessible in $M$): if $\kappa=\lambda^{+}$ were a successor, $\mathrm{Lv}(\kappa)$ would be $\kappa$-c.c. and would preserve $\kappa$ as a cardinal, so $\kappa\neq\omega_{1}^{M[G]}$. Successor cardinals are handled instead by \ref{set:collapse-to-successor}."
- **Reported:** 2026-10-28 (8ccef3d)

### ISSUE-0002 [Open] Claim that ◇⁺ can fail in the ◇-forcing extension is misattributed
- **Category:** Supplement/remark error
- **Location:** set:sec-forcing-diamond, paragraph after the hypcheck ("$\lozenge^{+}$ の無矛盾性には...")
- **Detail:** The text asserts that the method of \ref{set:forcing-diamond} cannot be used for $\lozenge^{+}$ because "$\lozenge^{+}$ can be false in $M[G]$" (citing Kunen Ch. VIII exercises J5–J7). But the forcing $\mathrm{Fn}(\omega_{1},2,\omega_{1})$ is countably closed and adds a $\lozenge$-sequence; in fact the resulting $M[G]$ satisfies $\lozenge^{+}$ whenever $M$ does (the added sequence is a $\lozenge^{+}$-sequence, since $2^{\aleph_{0}}=\aleph_{1}$ holds in $M[G]$ and the guessing argument goes through with subsets of $\omega_{1}$). The blanket claim that $\lozenge^{+}$ "can be false" in this specific extension is not supported and is at least misleading; the genuine difficulty is that this forcing does not create $\lozenge^{+}$ from a model where it fails, not that it destroys it.
- **Proposed fix:** Replace with: "The method of \ref{set:forcing-diamond} does not by itself give the consistency of $\lozenge^{+}$ from an arbitrary model: the forcing $\mathrm{Fn}(\omega_{1},2,\omega_{1})$ preserves $\lozenge^{+}$ when it already holds, but does not create it when it fails. To obtain $\lozenge^{+}$ one argues differently (e.g.\ via $\mathbf{V}=\mathbf{L}[X]$), or uses a more complicated poset (Kunen Ch.\ VIII, exercises H18–H20)."
- **Reported:** 2026-10-28 (8ccef3d)

### ISSUE-0003 [Open] Well-pruned κ-Suslin tree is never κ-closed: justification is imprecise
- **Category:** Supplement/remark error
- **Location:** remark after set:destroy-suslin-tree ("よく刈り込まれた κ-ススリン木は決して κ-閉でない")
- **Detail:** The remark claims a well-pruned κ-Suslin tree (with reversed order) is never κ-closed, justifying it by "if it were, one could inductively choose a path." This is essentially correct but the stated reason is too terse to be a valid argument as written: κ-closure of the reversed tree means every descending chain of length < κ has a lower bound, i.e. every chain of length < κ in the tree has an upper bound; iterating this through κ many steps (using regularity of κ) produces a cofinal branch of length κ, contradicting the Suslin property (no antichain of size κ implies no chain of size κ for a κ-tree, via \ref{set:suslin-is-kappa-tree}). The claim itself is fine, but the parenthetical justification omits the use of regularity and of the Suslin property.
- **Proposed fix:** Replace the parenthetical with: "if it were $\kappa$-closed (in the reversed order), then every chain of length $<\kappa$ would have an upper bound, and by regularity of $\kappa$ one could build a chain of length $\kappa$, contradicting that a $\kappa$-Suslin tree has no antichain (hence no chain) of size $\kappa$."
- **Reported:** 2026-10-28 (8ccef3d)
