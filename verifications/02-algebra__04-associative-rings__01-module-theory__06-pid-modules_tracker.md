# Verification tracker: `02-algebra/04-associative-rings/01-module-theory/06-pid-modules.html`

<!-- source: 02-algebra/04-associative-rings/01-module-theory/06-pid-modules.html -->
<!-- Managed by scripts/verify.py (GitHub Actions). To dispute an [Open] issue, add a line starting with
     **Opus Rebuttal:** at the end of that issue and push; the next run judges it. Do not edit other lines. -->

- Last verified: 2026-10-28 (commit 8ccef3d, deepseek-chat)
- Open: 2 / Resolved: 0 / Ignored: 0

## Summary of the last run

The page is a careful treatment of the structure theorem for finitely generated modules over a PID. The proofs (submodule-freeness, Smith normal form, existence and uniqueness of the decomposition, Jordan form) are logically sound, and the hypchecks correctly identify where PID, finite generation, and algebraic closure are used. The only issues found are minor: an imprecise pointer in the supplement identifying 'submodules of free modules are free' with the global-dimension statement cited from the Z-specific result, and a slightly overstated citation in the computability example where domination of all primitive recursive functions by the Ackermann diagonal is used but only non-primitive-recursiveness is cited. Neither affects the main mathematical content.

## Issues

### ISSUE-0001 [Open] Global dimension claim in supplement is imprecise
- **Category:** Supplement/remark error
- **Location:** supplement (高い視点)
- **Detail:** The supplement says the key point of the proof is that submodules of free modules are free, and parenthetically identifies this with 'PID の大域次元が 1 以下であること、\ref{ha:pd-z} の一般化'. The cited \ref{ha:pd-z} is '整数上の射影次元' (projective dimension over Z), i.e. gl.dim Z = 1, not a statement about general PIDs. More importantly, 'submodules of free modules are free' is exactly the condition that A is a hereditary ring (gl.dim A ≤ 1); for a PID this is true, but the identification is stated as if the cited result generalizes directly. The claim is essentially correct for PIDs, but the pointer to \ref{ha:pd-z} as 'the generalization' is misleading since that result is specifically about Z. This is a minor imprecision rather than a falsehood.
- **Proposed fix:** Replace with: '証明の要点は、自由加群の部分加群が自由であること（PID は遺伝的環、すなわち大域次元が $1$ 以下であること。$A=\Z$ の場合が \ref{ha:pd-z}）と、行列の対角化である。'
- **Reported:** 2026-10-28 (8ccef3d)

### ISSUE-0002 [Open] Claim that s(p) dominates every primitive recursive function needs the right comparison
- **Category:** Unsupported fact
- **Location:** mod:smith-not-pr-example
- **Detail:** The example asserts s(p) ≥ A(p,p) − p and that s is eventually larger than any primitive recursive function, citing \ref{comp:ackermann-not-pr.1} applied to g(n)+n together with monotonicity \ref{comp:ackermann-growth}. The step 's is larger than any primitive recursive function' requires that A(p,p) itself eventually dominates every primitive recursive function; \ref{comp:ackermann-not-pr.1} states A is not primitive recursive, which is weaker than dominating all primitive recursive functions. The domination statement is standard but is not exactly what the cited corollary says, so the citation is slightly too strong for the use made of it.
- **Proposed fix:** Cite the standard fact that the diagonal $A(p,p)$ eventually dominates every primitive recursive function (a consequence of \ref{comp:ackermann-growth} together with the usual bounding of primitive recursive functions by $A(n,c)$), and state it explicitly: 'アッカーマン関数の対角 $A(p,p)$ はすべての原始再帰関数を最終的に支配する（\ref{comp:ackermann-growth} から従う標準的事実）。'
- **Reported:** 2026-10-28 (8ccef3d)
**Opus Rebuttal:** comp:ackermann-not-pr.1 says every primitive recursive $f$ satisfies $f(m)<A(k,m)$ for some $k$; with monotonicity (comp:ackermann-growth) this gives $f(p)<A(k,p)\le A(p,p)$ for $p\ge k$, i.e. domination by the diagonal. The citation is sufficient.
