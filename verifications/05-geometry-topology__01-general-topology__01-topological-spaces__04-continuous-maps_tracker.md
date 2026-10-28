# Verification tracker: `05-geometry-topology/01-general-topology/01-topological-spaces/04-continuous-maps.html`

<!-- source: 05-geometry-topology/01-general-topology/01-topological-spaces/04-continuous-maps.html -->
<!-- Managed by scripts/verify.py (GitHub Actions). To dispute an [Open] issue, add a line starting with
     **Opus Rebuttal:** at the end of that issue and push; the next run judges it. Do not edit other lines. -->

- Last verified: 2026-10-28 (commit 8ccef3d, deepseek-chat)
- Open: 2 / Resolved: 0 / Ignored: 0

## Summary of the last run

(none)

## Issues

### ISSUE-0001 [Open] Cocountable topology: convergent sequences are eventually constant
- **Category:** Supplement/remark error
- **Location:** supplement (first paragraph)
- **Detail:** The supplement claims that in the cocountable topology on an uncountable set, the only convergent sequences are those that are eventually constant. This is false. In the cocountable topology on an uncountable set $X$, a sequence $(x_{n})$ converges to $x$ iff for every open neighborhood $U$ of $x$, $x_{n}\in U$ for all but countably many $n$ (equivalently, the set of $n$ with $x_{n}\notin U$ is countable). In particular, a sequence that is eventually constant is convergent, but there are many others: e.g. a sequence that is injective on a countable set and constant elsewhere, or more simply a sequence whose terms are all distinct but which equals $x$ for all but countably many indices. The stated characterization 'eventually constant' is too strong. The subsequent conclusion (identity to discrete topology preserves sequence convergence but is not continuous) is still correct, but the justification given is wrong.
- **Proposed fix:** Replace with: 'In the cocountable topology on an uncountable set $X$, a sequence $(x_{n})$ converges to $x$ iff for every countable $C$ the set $\{n : x_{n}\notin X\setminus C\}$ is finite, i.e. $x_{n}=x$ for all but countably many $n$ (equivalently, $x_{n}\to x$ whenever $\{n: x_{n}\neq x\}$ is countable). In particular, the identity map from $X$ with the cocountable topology to $X$ with the discrete topology preserves sequence convergence (every convergent sequence in the cocountable topology is eventually constant in the discrete topology... )' — more precisely: the identity $(X,\text{cocountable})\to(X,\text{discrete})$ sends every convergent sequence to a convergent sequence, yet is not continuous, since a singleton is open in the discrete topology but not in the cocountable topology.
- **Reported:** 2026-10-28 (8ccef3d)

### ISSUE-0002 [Open] Forgetful functor preserves limits and colimits: needs care
- **Category:** Supplement/remark error
- **Location:** remark
- **Detail:** The remark states that the forgetful functor $U\colon\mathbf{Top}\to\mathbf{Set}$ 'preserves both limits and colimits' because it has both a left adjoint (discrete) and a right adjoint (codiscrete). A functor with a left adjoint preserves limits, and a functor with a right adjoint preserves colimits; but a single functor having both adjoints does not by itself imply it preserves both limits and colimits — that requires the additional fact that $U$ creates (or at least lifts) limits and colimits, which is true here but is not what the cited adjunction theorem gives. As stated, the inference 'has both adjoints, hence preserves both limits and colimits' is not a valid consequence of \ref{cat:adjoints-preserve-limits} alone (that theorem only gives: right adjoint preserves limits; applied to the left adjoint of $U$ it gives nothing about $U$). The claim is true but the stated justification is a non-sequitur.
- **Proposed fix:** Rewrite: 'Since $U$ has a left adjoint (discrete topology), $U$ preserves limits; since $U$ has a right adjoint (codiscrete topology), $U$ preserves colimits. (Equivalently, $U$ creates limits and colimits, so topological limits/colimits are computed by putting the initial/final topology on the Set-level (co)limit.)'
- **Reported:** 2026-10-28 (8ccef3d)
