# Verification tracker: `02-algebra/03-commutative-algebra/03-homological-methods/03-serre-regularity.html`

<!-- source: 02-algebra/03-commutative-algebra/03-homological-methods/03-serre-regularity.html -->
<!-- Managed by scripts/verify.py (GitHub Actions). To dispute an [Open] issue, add a line starting with
     **Opus Rebuttal:** at the end of that issue and push; the next run judges it. Do not edit other lines. -->

- Last verified: 2026-10-28 (commit 8ccef3d, deepseek-chat)
- Open: 1 / Resolved: 0 / Ignored: 0

## Summary of the last run

The main theorem, its proof, the three lemmas, the corollary and the problems are logically sound: hypotheses of cited results (Auslander–Buchsbaum, pd–Tor, Koszul acyclicity, prime avoidance, Nakayama) are verified, and the induction in Step 3–7 is complete. The genuine problems are confined to the supplement: the claim that Betti numbers 'keep increasing' at a singularity is false (e.g. $k[x]/(x^{2})$ has all Betti numbers equal to 1), and the geometric paraphrase that every coherent sheaf admits a finite locally free resolution is an overstatement of finite global dimension. The historical attribution sentence is acceptable but vague.

## Issues

### ISSUE-0001 [Open] Geometric paraphrase 'any coherent sheaf has a finite locally free resolution' is too strong
- **Category:** Supplement/remark error
- **Location:** supplement (高い視点：滑らかさとホモロジー次元)
- **Detail:** The supplement says Serre's theorem can be rephrased as 'smooth ⇔ every coherent sheaf has a finite resolution by locally free sheaves'. The correct statement is that on a regular (smooth) scheme every coherent sheaf has finite *global dimension* (finite resolutions by locally free sheaves exist locally / the category has finite homological dimension), but a single coherent sheaf need not admit a finite locally free resolution globally; the standard correct formulation is that every coherent sheaf has a finite resolution by locally free sheaves only in the affine/local setting, and globally one gets finite resolutions by locally free sheaves of the structure sheaf's modules via the finite global dimension, not for arbitrary coherent sheaves in general without hypotheses. As stated ('どの連接層も有限長の局所自由層の分解をもつ') it is an overstatement.
- **Proposed fix:** Replace with: 幾何的には、正則局所環は非特異点の局所環で、セールの定理は「特異点がない ⇔ 剰余体（ひいては構造層の連接加群）の射影次元が有限、すなわち連接層の圏のホモロジー次元が有限である」と言い換えられる。
- **Reported:** 2026-10-28 (8ccef3d)
