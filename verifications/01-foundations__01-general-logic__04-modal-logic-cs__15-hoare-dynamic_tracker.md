# Verification tracker: `01-foundations/01-general-logic/04-modal-logic-cs/15-hoare-dynamic.html`

<!-- source: 01-foundations/01-general-logic/04-modal-logic-cs/15-hoare-dynamic.html -->
<!-- Managed by scripts/verify.py (GitHub Actions). To dispute an [Open] issue, add a line starting with
     **Opus Rebuttal:** at the end of that issue and push; the next run judges it. Do not edit other lines. -->

- Last verified: 2026-10-28 (commit 8ccef3d, deepseek-chat)
- Open: 1 / Resolved: 0 / Ignored: 0

## Summary of the last run

The page is largely correct: the total-correctness while rule, its soundness proof (induction on the counter), the relative completeness proof via wp-expressibility, the DL reduction theorem, and the PDL embedding are all sound. The main genuine problem is in the intuition box: the assertion that wp preserves unions (even qualified by determinism) is false, since wp demands termination and hence fails to distribute over unions; the wp = wlp ∩ termination identity itself is correct for deterministic programs. A minor imprecision in remark 1 about the oracle reduction is noted at medium confidence. No issues in the problems/solutions were found.

## Issues

### ISSUE-0001 [Open] wp = wlp ∩ termination fails for nondeterministic programs
- **Category:** Supplement/remark error
- **Location:** intuition (述語変換子の双対性)
- **Detail:** The claim `wp(P,ψ) = wlp(P,ψ) ∩ wp(P,⊤)` is asserted for deterministic programs, which is fine, but the following sentence says `wp` preserves both union and intersection '(if deterministic)'. For a deterministic program, wp(P,·) does preserve intersection, but it does NOT preserve union in general: wp(P, ψ₁ ∪ ψ₂) requires termination, whereas wp(P,ψ₁) ∪ wp(P,ψ₂) does not (a state where P diverges is in neither wp(P,ψᵢ) but is not in wp(P,ψ₁∪ψ₂)). So 'wp preserves union' is false even for deterministic programs. Also the parenthetical '(if deterministic)' is attached to the wrong clause.
- **Proposed fix:** Replace with: `wlp` preserves intersections (and is monotone); `wp` preserves intersections for deterministic programs, but `wp` does NOT preserve unions in general (it additionally demands termination), so the duality with `[P]`/`⟨P⟩` is: `[P]` preserves intersections, `⟨P⟩` preserves unions, while `wp` is the intersection-preserving map that also encodes termination.
- **Reported:** 2026-10-28 (8ccef3d)
