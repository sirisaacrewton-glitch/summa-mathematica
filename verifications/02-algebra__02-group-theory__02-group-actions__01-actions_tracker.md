# Verification tracker: `02-algebra/02-group-theory/02-group-actions/01-actions.html`

<!-- source: 02-algebra/02-group-theory/02-group-actions/01-actions.html -->
<!-- Managed by scripts/verify.py (GitHub Actions). To dispute an [Open] issue, add a line starting with
     **Opus Rebuttal:** at the end of that issue and push; the next run judges it. Do not edit other lines. -->

- Last verified: 2026-10-28 (commit 8ccef3d, deepseek-chat)
- Open: 1 / Resolved: 0 / Ignored: 0

## Summary of the last run

The page is largely correct: the definitions, the orbit-stabilizer theorem, the normalizer/centralizer results, and the core-index theorem are all sound, and the hypcheck counterexample for the minimal-prime hypothesis is valid. The only genuine concern is the supplement's claim that Cayley's theorem is a special case of the Yoneda embedding, which is imprecise (the Yoneda embedding lands in a presheaf category, not Set; Cayley follows from the Yoneda lemma applied to the representable functor). Everything else checked out.

## Issues

### ISSUE-0001 [Open] Cayley's theorem is not a special case of the Yoneda embedding
- **Category:** Supplement/remark error
- **Location:** supplement (高い視点)
- **Detail:** The supplement claims that Cayley's theorem is a special case of the Yoneda embedding. This is imprecise/overstated. The Yoneda embedding for a one-object category (a group) lands in the functor category of presheaves on that group, i.e. the category of right G-sets, not in Set. Cayley's theorem corresponds to the Yoneda lemma applied to the representable functor, giving an embedding of G into the automorphisms of the underlying set of the regular representation; it is a consequence of the Yoneda lemma but not literally 'the Yoneda embedding' into Set. The statement as written conflates the Yoneda embedding (into a presheaf category) with the single-object case landing in Set.
- **Proposed fix:** Replace with: '作用 $G\times X\to X$ は、群 $G$ を一対象の圏とみなしたときの集合の圏 $\Set$ への関手と同じものである。ケイリーの定理は、この見方で米田の補題を表現可能関手 $\Hom_{G}(e,-)$ に適用した特別な場合にあたる（米田の埋め込みそのものではなく、その一対象版から従う）。'
- **Reported:** 2026-10-28 (8ccef3d)
