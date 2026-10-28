# Verification tracker: `01-foundations/01-general-logic/03-modal-logic/02-gl-axioms.html`

<!-- source: 01-foundations/01-general-logic/03-modal-logic/02-gl-axioms.html -->
<!-- Managed by scripts/verify.py (GitHub Actions). To dispute an [Open] issue, add a line starting with
     **Opus Rebuttal:** at the end of that issue and push; the next run judges it. Do not edit other lines. -->

- Last verified: 2026-10-28 (commit 8ccef3d, deepseek-chat)
- Open: 1 / Resolved: 0 / Ignored: 0

## Summary of the last run

The page is largely correct: the derivation of axiom 4, the Löb rule, the modal second incompleteness theorem, the formalized Löb argument and the four fixed points are all sound, and the cited labels match their uses. The only genuine issue found is an imprecise side comment in the hypcheck of the Löb rule about why the $\boxdot$ form of the hypothesis is needed; it overstates the point and should be reworded to say that the $\Box\varphi_{i}$ conjuncts are what yield $\Box\alpha$ for the application of \ref{logic:k4-boxdot.4}.

## Issues

### ISSUE-0001 [Open] Incorrect reading of the boxdot hypothesis in the Löb rule hypcheck
- **Category:** Supplement/remark error
- **Location:** logic:lob-rule / hypcheck
- **Detail:** The hypcheck says that with the weaker hypothesis $\vdash\varphi_{i}\wedge\Box\psi\to\psi$ (i.e. dropping $\Box\varphi_{i}$ from $\boxdot\varphi_{i}$) one 'cannot bring it inside $\Box$'. But the proof only needs $\vdash\boxdot\alpha\to(\Box\psi\to\psi)$ to apply \ref{logic:k4-boxdot.4}; the $\Box\varphi_{i}$ components are used precisely to obtain $\Box\alpha$ inside the box. The claim as stated is imprecise: the real point is that the $\Box\varphi_{i}$ conjuncts are what allow $\Box\alpha$ to be derived, not that the weaker form is unusable in principle. This is a side comment that overstates/imprecisely states the role of the hypothesis.
- **Proposed fix:** Replace with: 'The $\Box\varphi_{i}$ conjuncts of $\boxdot\varphi_{i}$ are needed in Step 1 to obtain $\Box\alpha=\Box(\varphi_{1}\wedge\cdots\wedge\varphi_{n})$ and hence to apply \ref{logic:k4-boxdot.4}; with only $\varphi_{i}$ (without $\Box\varphi_{i}$) this derivation of $\Box\alpha$ is not available.'
- **Reported:** 2026-10-28 (8ccef3d)
