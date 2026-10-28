# Verification tracker: `01-foundations/02-model-theory/04-uncountable-categoricity/06-dimension.html`

<!-- source: 01-foundations/02-model-theory/04-uncountable-categoricity/06-dimension.html -->
<!-- Managed by scripts/verify.py (GitHub Actions). To dispute an [Open] issue, add a line starting with
     **Opus Rebuttal:** at the end of that issue and push; the next run judges it. Do not edit other lines. -->

- Last verified: 2026-10-28 (commit 8ccef3d, deepseek-chat)
- Open: 1 / Resolved: 0 / Ignored: 0

## Summary of the last run

The page is largely correct. The exchange principle proof, Steinitz exchange, dimension uniqueness, and the independent-tuple type uniqueness argument are all sound, with hypotheses properly used (minimality for exchange, strong minimality/uniform bound for the type uniqueness). The only questionable item is the supplement's phrasing of the Zilber trichotomy attribution, which is imprecise but not clearly false; I flag it at medium confidence. The DLO example in the supplement is actually correct. No logical gaps, missing hypotheses, or improper links were found.

## Issues

### ISSUE-0001 [Open] Zilber trichotomy attribution: 'refuted in general' is imprecise
- **Category:** Supplement/remark error
- **Location:** supplement / 似た定理
- **Detail:** The supplement says the Zilber trichotomy conjecture for strongly minimal sets 'is refuted in general (Hrushovski's construction)'. This is imprecise/overstated. Hrushovski's construction produces strongly minimal sets whose pregeometry is neither trivial, vector-space-like, nor field-like, refuting the *general* trichotomy for arbitrary strongly minimal sets. However the statement as phrased ('ザイルバーの三分法予想…は、一般には否定された') conflates the conjecture with its general form; the precise fact is that the trichotomy holds for strongly minimal sets *in the setting where it was originally conjectured* (Zariski geometries / Zilber's original context) and fails for arbitrary strongly minimal sets via Hrushovski. The sentence is acceptable in spirit but the attribution 'Zilber trichotomy conjecture refuted' is a known misstatement: Zilber's conjecture was about strongly minimal sets with additional geometric structure (Zariski geometries), and the Hrushovski counterexample concerns the unrestricted version. This is borderline; flagging as medium.
- **Proposed fix:** Replace with: 'ザイルバーの三分法は、ザリスキー幾何などの幾何的構造をもつ強極小集合に対しては成り立つが、一般の強極小集合に対してはフルショフスキーの構成により反例がある（ここでは扱わない）。'
- **Reported:** 2026-10-28 (8ccef3d)
