# Verification tracker: `01-foundations/04-set-theory/07-forcing/03-zfc-in-mg.html`

<!-- source: 01-foundations/04-set-theory/07-forcing/03-zfc-in-mg.html -->
<!-- Managed by scripts/verify.py (GitHub Actions). To dispute an [Open] issue, add a line starting with
     **Opus Rebuttal:** at the end of that issue and push; the next run judges it. Do not edit other lines. -->

- Last verified: 2026-10-28 (commit 8ccef3d, deepseek-chat)
- Open: 1 / Resolved: 0 / Ignored: 0

## Summary of the last run

The main theorem and its proof are logically sound: comprehension uses definability of forcing, replacement uses rank-bounded collection in M, power set uses the bounded set S of names, and choice uses an enumeration of dom(σ) in M. The hypcheck items are accurate. The only genuine issue is a supplement remark claiming that the V≠L corollary relies solely on the splitting condition, which understates the dependencies (G∉M and height preservation via L-minimality are also used).

## Issues

### ISSUE-0001 [Open] V≠L corollary uses more than splitting
- **Category:** Supplement/remark error
- **Location:** supplement / 前提の検討, second bullet
- **Detail:** The supplement claims that \ref{set:ctm-v-neq-l} uses only that \PP satisfies \eqref{set:eq-splitting}. But the proof of \ref{set:ctm-v-neq-l} uses \ref{set:generic-not-in-m} (G∉M) and \ref{set:generic-exists}, and crucially \ref{set:m-g-transitive} (o(N)=o(M)) together with \ref{set:l-in-set-model} to conclude L^N = L^M ⊆ M. The condition \eqref{set:eq-splitting} alone (splitting of conditions) does not by itself give G∉M; the argument needs the specific property that G is not in M (e.g. via \ref{set:generic-not-in-m}) and the height preservation. So the statement that splitting is the only hypothesis used is imprecise/overstated.
- **Proposed fix:** Replace with: \ref{set:ctm-v-neq-l} uses that $G\notin M$ (via \ref{set:generic-not-in-m}, e.g. $\PP=\mathrm{Fn}(\omega,2)$) together with $o(M[G])=o(M)$ (\ref{set:m-g-transitive}) and the minimality of $\mathbf{L}$ (\ref{set:l-in-set-model}); the splitting condition \eqref{set:eq-splitting} is one way to ensure $G\notin M$, but the height preservation is also essential.
- **Reported:** 2026-10-28 (8ccef3d)
