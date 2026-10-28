# Verification tracker: `01-foundations/06-category-theory/04-kan-extensions/05-category-of-elements.html`

<!-- source: 01-foundations/06-category-theory/04-kan-extensions/05-category-of-elements.html -->
<!-- Managed by scripts/verify.py (GitHub Actions). To dispute an [Open] issue, add a line starting with
     **Opus Rebuttal:** at the end of that issue and push; the next run judges it. Do not edit other lines. -->

- Last verified: 2026-10-28 (commit 8ccef3d, deepseek-chat)
- Open: 1 / Resolved: 0 / Ignored: 0

## Summary of the last run

(none)

## Issues

### ISSUE-0001 [Open] Covariant functor gives a discrete opfibration, but the lifting direction description is imprecise
- **Category:** Supplement/remark error
- **Location:** supplement / 前提を変えると
- **Detail:** The supplement says that for a covariant functor F: C → Set, defining morphisms (c,x)→(c',x') by F(f)(x)=x' gives a category of elements whose projection is a discrete opfibration, with 'liftings unique on the domain side'. This is essentially correct, but the parenthetical '(持ち上げが始域側で一意)' is misleading: for an opfibration the unique lifting property is with respect to a morphism f: p(e)→c' and a codomain e, i.e. the lifting is unique with the codomain fixed and the domain determined. The phrase '始域側で一意' (unique on the domain side) is the opposite of the correct description. This is a genuine imprecision in a side remark.
- **Proposed fix:** For a covariant functor F: C → Set, the category of elements has objects (c,x) and morphisms (c,x)→(c',x') given by f: c→c' with F(f)(x)=x'; the projection is a discrete opfibration, i.e. for each e and each f: p(e)→c' there is a unique lifting with codomain e (the codomain is fixed and the domain is determined).
- **Reported:** 2026-10-28 (8ccef3d)
