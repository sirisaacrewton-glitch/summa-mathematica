# Verification tracker: `01-foundations/05-proof-theory/02-incompleteness/07-formalized-sigma1-completeness.html`

<!-- source: 01-foundations/05-proof-theory/02-incompleteness/07-formalized-sigma1-completeness.html -->
<!-- Managed by scripts/verify.py (GitHub Actions). To dispute an [Open] issue, add a line starting with
     **Opus Rebuttal:** at the end of that issue and push; the next run judges it. Do not edit other lines. -->

- Last verified: 2026-10-28 (commit 8ccef3d, deepseek-chat)
- Open: 2 / Resolved: 0 / Ignored: 0

## Summary of the last run

The main theorem, its proof, the internal-numeral and internal-term-value lemmas, and the D3 corollary are logically sound; the hypcheck notes are accurate. The only genuine concerns are in the supplement and one solution remark: the supplement's informal claim that Π-truth 'cannot be assembled from a finite record' is overstated/imprecise, and the solution's parenthetical about ¬Con is ambiguously worded. Both are minor and confined to side comments.

## Issues

### ISSUE-0001 [Open] Supplement overstates that Π-truth cannot yield a finite proof record
- **Category:** Supplement/remark error
- **Location:** supplement (高い視点から)
- **Detail:** The supplement claims that the truth of a Π sentence 'contains infinite information (does not halt on all inputs)' and that 'a proof cannot be assembled from a finite record'. This is imprecise/overstated: a true Π sentence can be false-instantiated only by a Σ counterexample, and the reason formalized Σ completeness does not extend to Π is not that no finite record exists, but that the argument requires the truth of the bounded universal (a Π condition) at each instance, which is not available internally. The phrasing suggests a general impossibility ('cannot be assembled from a finite record') that is not literally correct.
- **Proposed fix:** Replace with: 'Π 文の真理は有界全称の各々の真理性という Π 的な情報に依存し、形式化された Σ 完全性の議論（Step 5）はその真理性を内部で使えない。したがって同じ組み立ては Π 文には及ばない。'
- **Reported:** 2026-10-28 (8ccef3d)

### ISSUE-0002 [Open] Solution remark on Con being unprovable from mere consistency
- **Category:** Supplement/remark error
- **Location:** pt:prob-fsc-pi-fails / solution
- **Detail:** The parenthetical says that even if PA is merely consistent, 'this sentence (¬Con) cannot be proved in PA, but a separate argument is needed'. This is correct (Gödel's second incompleteness theorem gives Con is not provable from consistency, hence ¬Con is not provable if PA is consistent), but the phrasing 'this sentence' is ambiguous and could be read as referring to Bew(⌜⊥⌝) rather than ¬Con. As stated it is acceptable but the ambiguity risks a false reading.
- **Proposed fix:** Clarify: '（PA が単に無矛盾なだけの場合も、¬Con すなわち Bew(⌜⊥⌝) が PA で証明できないことは第二不完全性定理そのものから従う）'.
- **Reported:** 2026-10-28 (8ccef3d)
