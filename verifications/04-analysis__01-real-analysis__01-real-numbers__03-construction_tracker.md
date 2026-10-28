# Verification tracker: `04-analysis/01-real-analysis/01-real-numbers/03-construction.html`

<!-- source: 04-analysis/01-real-analysis/01-real-numbers/03-construction.html -->
<!-- Managed by scripts/verify.py (GitHub Actions). To dispute an [Open] issue, add a line starting with
     **Opus Rebuttal:** at the end of that issue and push; the next run judges it. Do not edit other lines. -->

- Last verified: 2026-10-28 (commit 8ccef3d, deepseek-chat)
- Open: 4 / Resolved: 0 / Ignored: 0

## Summary of the last run

The main body (Cauchy construction, uniqueness of complete ordered fields, Dedekind cuts, base-b expansion, cardinality) is logically sound: the cited results match their uses, the hypcheck correctly notes that only (C)+(A) is used, and the choice-free 'first element via e' device is legitimate. The problems concentrate in the supplement, where several generalizations are stated slightly too strongly or imprecisely: the Dedekind–MacNeille completion is an order-completion rather than a field construction, the Eudoxus-reals description should say functions ℤ→ℤ modulo bounded difference, the terminal-object claim needs the order-preserving morphism class made explicit, and the AC remark about 2^{aleph_0} being an aleph should be phrased as 'ℝ not provably well-orderable'. None of these affect the proved theorems.

## Issues

### ISSUE-0001 [Open] Dedekind–MacNeille completion is not a generalization of the cut construction to arbitrary linear orders in the stated sense
- **Category:** Supplement/remark error
- **Location:** supplement (一般化と関連する事実)
- **Detail:** The supplement says the Dedekind cut construction 'generalizes to the Dedekind–MacNeille completion of any linearly ordered set'. The Dedekind–MacNeille completion of an arbitrary linear order need not be a complete ordered *field*; it is only the smallest complete lattice (order-completion) containing the order. The cut construction of ℝ relies on the field operations of ℚ, not merely on the order. As stated, the analogy overstates the generalization.
- **Proposed fix:** The Dedekind cut construction generalizes to the Dedekind–MacNeille completion, which assigns to any partially ordered set its smallest complete lattice (order) extension; applied to ℚ (a linear order that is also a field) it yields ℝ. For a general linear order one only obtains an order-completion, not a field.
- **Reported:** 2026-10-28 (8ccef3d)

### ISSUE-0002 [Open] Eudoxus reals: 'almost homomorphisms' bounded-difference condition and attribution
- **Category:** Supplement/remark error
- **Location:** supplement (一般化と関連する事実)
- **Detail:** The supplement describes Eudoxus reals via 'almost homomorphisms' f:ℤ→ℤ with f(m+n)−f(m)−f(n) bounded. This is essentially correct (Schmieden–Laugwitz / Arthan), but the phrase '整数列の「ほとんど準同型」' (integer *sequences*) is imprecise: the objects are functions ℤ→ℤ, not sequences indexed by ℕ, and the equivalence is modulo bounded difference. The claim that 'every construction gives a complete ordered field, hence all isomorphic' is fine, but the description of the Eudoxus construction should specify functions on ℤ modulo bounded difference.
- **Proposed fix:** Eudoxus reals: consider functions f:ℤ→ℤ that are 'almost homomorphisms' (f(m+n)−f(m)−f(n) is bounded), modulo the equivalence relation of bounded difference; the quotient is a complete ordered field.
- **Reported:** 2026-10-28 (8ccef3d)

### ISSUE-0003 [Open] Terminal object claim: ℝ is terminal only among Archimedean ordered fields, and morphisms must be order-preserving
- **Category:** Supplement/remark error
- **Location:** supplement (高い視点)
- **Detail:** The supplement says 'in the category of Archimedean ordered fields over ℚ, ℝ is a terminal object: from any Archimedean ordered field there is exactly one arrow to ℝ'. This is correct only if the morphisms are required to be order-preserving ring homomorphisms fixing ℚ (which is what \ref{calc:archimedean-embedding}(2) gives). If arbitrary field homomorphisms were allowed, uniqueness could fail for non-order-preserving maps. The statement should make the morphism class explicit; as written 'exactly one arrow' is ambiguous.
- **Proposed fix:** In the category whose objects are Archimedean ordered fields containing ℚ and whose morphisms are order-preserving ring homomorphisms fixing ℚ, ℝ is a terminal object: from any Archimedean ordered field K there is exactly one such morphism K→ℝ (\ref{calc:archimedean-embedding}(2)).
- **Reported:** 2026-10-28 (8ccef3d)

### ISSUE-0004 [Open] Claim that '2^{aleph_0} is an aleph' is not provable without AC — needs care
- **Category:** Supplement/remark error
- **Location:** supplement (前提を変えると)
- **Detail:** The supplement states that '2^{aleph_0} being an aleph (well-orderable cardinal) cannot be shown without the axiom of choice'. This is a known open/independent-type statement in a delicate sense: it is consistent with ZF that ℝ is not well-orderable, but the precise claim 'ZF does not prove 2^{aleph_0} is an aleph' is a nontrivial metamathematical assertion. Stated flatly as '知られている' it is at least imprecise; the safe statement is that in ZF one cannot prove ℝ is well-orderable (equivalently 2^{aleph_0} is an aleph), and this is consistent with ZF.
- **Proposed fix:** Without the axiom of choice one cannot prove that ℝ is well-orderable (equivalently, that 2^{aleph_0} is an aleph); it is consistent with ZF that ℝ is not well-orderable.
- **Reported:** 2026-10-28 (8ccef3d)
