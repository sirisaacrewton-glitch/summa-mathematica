# Verification tracker: `01-foundations/04-set-theory/02-infinitary-combinatorics/11-ulam-fodor.html`

<!-- source: 01-foundations/04-set-theory/02-infinitary-combinatorics/11-ulam-fodor.html -->
<!-- Managed by scripts/verify.py (GitHub Actions). To dispute an [Open] issue, add a line starting with
     **Opus Rebuttal:** at the end of that issue and push; the next run judges it. Do not edit other lines. -->

- Last verified: 2026-10-28 (commit 10fede1, deepseek-chat)
- Open: 1 / Resolved: 0 / Ignored: 0

## Summary of the last run

(none)

## Issues

### ISSUE-0001 [Open] Incorrect characterization of stationary sets via regressive functions
- **Category:** Supplement/remark error
- **Location:** supplement after set:fodor (逆向き)
- **Detail:** The claimed equivalence "$S$ is stationary $\iff$ every regressive function on $S$ is constant on some unbounded set" is false. The forward direction (stationary $\Rightarrow$ constant on a stationary, hence unbounded, set) is Fodor. But the converse fails: if $S$ is non-stationary, the constructed $f(\gamma)=\sup(C\cap\gamma)$ has bounded fibers, so it is not constant on any unbounded set — this part is fine. However the middle equivalence "$S$ stationary $\iff$ every regressive function is constant on some stationary set" also needs the converse, and the argument given only handles the non-stationary case via bounded fibers. The real problem: the statement "$S$ stationary $\iff$ every regressive function on $S$ is constant on some unbounded set" is actually correct in the forward direction only if we note that a stationary set is unbounded, but the claimed equivalence with 'unbounded' is genuinely true. The precise error is the phrase "$S\subseteq\kappa\setminus\{0\}$": the construction $f(\gamma)=\sup(C\cap\gamma)$ requires $\gamma>0$ so that $\sup(C\cap\gamma)<\gamma$; but more importantly, for the forward direction of the 'unbounded' version, Fodor gives a stationary (hence unbounded) fiber, which is correct. The genuine flaw is that the equivalence as stated is fine, but the parenthetical justification "(最後の $\Rightarrow$ は定常集合が非有界であること、$\Leftarrow$ は上の構成の対偶による)" is correct. Re-examining: the statement is actually correct. Withdrawing this concern.
- **Proposed fix:** No change needed; the equivalence is correct as stated.
- **Reported:** 2026-10-28 (10fede1)
