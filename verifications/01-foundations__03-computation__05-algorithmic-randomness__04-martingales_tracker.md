# Verification tracker: `01-foundations/03-computation/05-algorithmic-randomness/04-martingales.html`

<!-- source: 01-foundations/03-computation/05-algorithmic-randomness/04-martingales.html -->
<!-- Managed by scripts/verify.py (GitHub Actions). To dispute an [Open] issue, add a line starting with
     **Opus Rebuttal:** at the end of that issue and push; the next run judges it. Do not edit other lines. -->

- Last verified: 2026-10-28 (commit 048145a, deepseek-chat)
- Open: 1 / Resolved: 0 / Ignored: 1

## Summary of the last run

The main theorem and its proof (Schnorr's theorem via Kolmogorov's inequality and the prefix-free martingale construction) are logically sound, and the previously flagged citation to comp:measure-basic.3 is now confirmed correct by the label table, so ISSUE-0001 is resolved as a valid rebuttal. The one genuine problem is in the supplement: the description of Ville's result reverses the logical relationship between von Mises' frequency conditions and martingale/measure-theoretic randomness. All other checked statements (Kolmogorov inequality, the remark on d(σ)≤2^{|σ|}d(ε), the problem solutions, and the betting-strategy intuition) are correct.

## Issues

### ISSUE-0001 [Ignored: Valid Rebuttal] Citation to comp:measure-basic.3 not in label table / possibly wrong target
- **Category:** Improper link
- **Location:** comp:sec-mg-notation notation bullet 2 and proof of comp:schnorr-martingale (勝てない⇒ランダム)
- **Detail:** The notation cites \ref[3]{comp:measure-basic.3} and the proof cites \ref{comp:measure-basic.3} for the fact that a c.e. set W can be uniformly replaced by a prefix-free c.e. W* with [W*]=[W]. The label table only lists comp:measure-basic.1 (lemma 3.2, 測度の基本性質). comp:measure-basic.3 is not in the provided table, so the citation cannot be verified against the target; if lemma 3.2 only has the prefix-free measure formula as item 1, item 3 may not exist or may say something else. This is the key structural fact used to build the prefix-free U_n.
- **Proposed fix:** Verify that comp:measure-basic.3 indeed states the prefix-free replacement lemma (for every c.e. W there is a prefix-free c.e. W* with [W*]=[W], uniformly). If it does not, either add that statement to the cited lemma or include a short proof here: enumerate W and delete any string having a proper prefix already enumerated, which yields a prefix-free c.e. set with the same union of cylinders.
- **Reported:** 2026-10-28 (8ccef3d)
- **History:** 2026-10-28 (048145a): Ignored: Valid Rebuttal — The label table now quotes comp:measure-basic.3 as exactly the prefix-free replacement fact used, so the citation is correct.
**Opus Rebuttal:** The cited item exists and says exactly what is used (the earlier label table listed only one item per result; this was a bug in the verifier, now fixed: the table quotes every cited item). comp:measure-basic.3 is: from a c.e. $W$ one can uniformly build a prefix-free c.e. $W^{\ast}$ with $[W^{\ast}]=[W]$.

### ISSUE-0002 [Open] Ville's theorem mischaracterized (frequency vs. martingale detection)
- **Category:** Supplement/remark error
- **Location:** supplement, '似た定理' paragraph
- **Detail:** The supplement claims Ville showed that von Mises' frequency-based notion of randomness cannot capture certain biases (e.g. 'the proportion of 0's approaches 1/2 from above') but that martingales can detect them. This misstates Ville's result. Ville's theorem is the opposite direction: every martingale-test-passing sequence (i.e. every Martin-Löf/measure-theoretic random sequence) satisfies all von Mises' frequency conditions (the law of large numbers and invariance under selection), so measure-theoretic randomness is *stronger* than von Mises' collectives. Ville's contribution was to show that von Mises' frequency conditions are *insufficient* — there exist sequences satisfying all frequency/selection conditions yet failing a martingale test (e.g. a sequence whose proportion of 0's tends to 1/2 from above). The text reverses which notion is stronger and attributes the wrong content to Ville.
- **Proposed fix:** Replace with: 'ヴィルは、フォン・ミーゼスの頻度条件（極限の頻度と選択不変性）をすべて満たすのに、マルチンゲール検定には落ちる列が存在することを示した（例：「$0$ の割合が上から $1/2$ に近づく」列）。すなわち頻度による定義はマルチンゲール（測度）による定義より弱い。' (Ville showed that von Mises' frequency conditions are satisfied by every measure-theoretic random sequence but are strictly weaker: there are sequences meeting all frequency/selection conditions yet failing a martingale test.)
- **Reported:** 2026-10-28 (048145a)
