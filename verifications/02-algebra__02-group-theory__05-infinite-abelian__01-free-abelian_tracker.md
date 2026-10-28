# Verification tracker: `02-algebra/02-group-theory/05-infinite-abelian/01-free-abelian.html`

<!-- source: 02-algebra/02-group-theory/05-infinite-abelian/01-free-abelian.html -->
<!-- Managed by scripts/verify.py (GitHub Actions). To dispute an [Open] issue, add a line starting with
     **Opus Rebuttal:** at the end of that issue and push; the next run judges it. Do not edit other lines. -->

- Last verified: 2026-10-28 (commit 8ccef3d, deepseek-chat)
- Open: 2 / Resolved: 0 / Ignored: 0

## Summary of the last run

The page is largely correct. The main genuine problem is in the supplement: the sentence about Serre's conjecture and the Quillen–Suslin theorem conflates the general statement 'projective ⇒ free over a commutative ring' (false) with the specific polynomial-ring case, which is what Quillen–Suslin actually proves. A secondary imprecision is the phrase 'dually, the injective objects are the divisible groups', which presents a nontrivial theorem (Baer's criterion) as a formal dual. The proofs, the theorem statements, and the other remarks (torsion decomposition, the example that 2Z is not a direct summand of Z, the hypcheck on finite generation) check out.

## Issues

### ISSUE-0001 [Open] Serre's conjecture attribution conflated with Quillen–Suslin
- **Category:** Supplement/remark error
- **Location:** supplement / 類似の定理
- **Detail:** The supplement says 'whether a projective module over a commutative ring is free (Serre's conjecture, the Quillen–Suslin theorem) is a much harder problem than for a PID'. Serre's conjecture is precisely the statement that finitely generated projective modules over a polynomial ring k[x_1,...,x_n] are free; the Quillen–Suslin theorem is its proof. But the sentence as written suggests that 'projective ⇒ free over a commutative ring' is the content of Quillen–Suslin, which is false: over a general commutative ring projective modules need not be free (e.g. over Z/6, or the tangent bundle example over a non-local ring). The claim is imprecise/overstated.
- **Proposed fix:** Replace with: 'On the other hand, over a general commutative ring a finitely generated projective module need not be free. Serre's conjecture—proved independently by Quillen and Suslin—asserts that every finitely generated projective module over a polynomial ring $k[x_{1},\dots,x_{n}]$ over a field (or a PID) is free; this is far harder than the PID case.'
- **Reported:** 2026-10-28 (8ccef3d)

### ISSUE-0002 [Open] Injective objects in Ab are divisible groups — needs the correct dual statement
- **Category:** Supplement/remark error
- **Location:** supplement / 高い視点
- **Detail:** The supplement states 'dually, the injective objects are the divisible groups (next page)'. This is correct as a statement about Ab, but it is presented as the exact dual of 'projective = free'. The dual of 'free ⇒ projective' is 'injective ⇒ cofree', not 'injective = divisible'. The identification injective = divisible is a genuine theorem (Baer's criterion), not a formal duality, so calling it 'dually' is misleading. This is a minor imprecision but the sentence overstates the duality.
- **Proposed fix:** Replace with: 'The dual notion, injective objects, is characterised in $\mathbf{Ab}$ by Baer's criterion: an abelian group is injective iff it is divisible (see the next page). This is not a formal dual of "projective = free" but a separate theorem.'
- **Reported:** 2026-10-28 (8ccef3d)
