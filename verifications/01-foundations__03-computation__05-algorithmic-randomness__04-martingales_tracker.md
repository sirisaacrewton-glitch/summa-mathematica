# Verification tracker: `01-foundations/03-computation/05-algorithmic-randomness/04-martingales.html`

<!-- source: 01-foundations/03-computation/05-algorithmic-randomness/04-martingales.html -->
<!-- Managed by scripts/verify.py (GitHub Actions). To dispute an [Open] issue, add a line starting with
     **Opus Rebuttal:** at the end of that issue and push; the next run judges it. Do not edit other lines. -->

- Last verified: 2026-10-28 (commit 10fede1, deepseek-chat)
- Open: 3 / Resolved: 0 / Ignored: 0

## Summary of the last run

The main definitions, Kolmogorov's inequality, and the proof of Schnorr's theorem are logically sound; the martingale construction in the reverse direction correctly uses prefix-freeness and left-c.e. approximability. The problems are concentrated in the supplement and notation: a dangling citation to `comp:measure-basic.3` (not in the label table), a mischaracterization of Ville's theorem (the supplement reverses its content), and an imprecise attribution of the universal left-c.e. supermartingale to `comp:universal-ml-test`. No previously reported issues exist.

## Issues

### ISSUE-0001 [Open] Reference to comp:measure-basic.3 is not in the label table
- **Category:** Improper link
- **Location:** comp:sec-mg-notation / notation bullet 2
- **Detail:** The notation cites `\ref[3]{comp:measure-basic.3}` for the fact that a c.e. set W can be uniformly converted into a prefix-free c.e. W* with [W*]=[W]. The label table only lists `comp:measure-basic.1` (lemma 3.2, 測度の基本性質) on the Martin-Löf page; `comp:measure-basic.3` is not among the cited labels, so the target cannot be verified and the citation is dangling. The same fact is used again in the proof of Schnorr's theorem (勝てない ⇒ ランダム) via `\ref{comp:measure-basic.3}`.
- **Proposed fix:** Cite the correct label that actually states the prefix-free conversion (e.g. the appropriate item of `comp:measure-basic`), or add the statement as a `::: fact` on this page: "For every c.e. W there is a prefix-free c.e. W* with [W*]=[W], uniformly in an index for W." and cite that.
- **Reported:** 2026-10-28 (10fede1)

### ISSUE-0002 [Open] Ville's result mischaracterized
- **Category:** Supplement/remark error
- **Location:** supplement / 似た定理
- **Detail:** The supplement says Ville showed that von Mises' approach (randomness via limiting frequencies alone) cannot capture certain biases such as "the proportion of 0's approaching 1/2 from above", and that martingales can detect them. Ville's theorem is the opposite direction: it shows that for every martingale (betting strategy) there is a sequence on which the strategy does not succeed but which violates the law of large numbers / has a biased limiting frequency. In other words, martingales alone (without additional frequency conditions) do not suffice to exclude such biased sequences; Ville constructed a counterexample showing that the frequency-based and martingale-based notions diverge. The claim as stated reverses the logical content of Ville's result.
- **Proposed fix:** Replace with: "ヴィルは、任意のマルチンゲール（賭け戦略）に対し、その戦略が勝てないにもかかわらず極限の頻度が偏る（例えば 0 の割合が 1/2 に収束しない）列が存在することを示した。したがってマルチンゲールによる特徴づけだけではフォン・ミーゼス流の頻度条件を自動的には含まない。" (Ville showed that for every martingale there is a sequence on which it does not succeed yet whose limiting frequency is biased, so martingale-based randomness does not by itself imply frequency regularity.)
- **Reported:** 2026-10-28 (10fede1)

### ISSUE-0003 [Open] Claim that computable randomness is strictly weaker than Martin-Löf randomness needs attribution/correctness check
- **Category:** Supplement/remark error
- **Location:** supplement / 前提を変えると
- **Detail:** The supplement states that restricting to computable martingales yields computable randomness, which is "known to be strictly weaker" than Martin-Löf randomness. This is correct (computable randomness is strictly weaker than Martin-Löf randomness; the separation is a known result), so this particular sentence is fine. However the surrounding sentence "前半の証明は優マルチンゲールでも成り立ち、左 c.e. 優マルチンゲールの中には『最適な』もの…がある" cites `comp:universal-ml-test` (万能な検定) as "the betting version"; that theorem is about a universal Martin-Löf test, not about a universal left-c.e. supermartingale, so the parenthetical attribution is imprecise.
- **Proposed fix:** Either drop the citation or rephrase: "左 c.e. 優マルチンゲールの族には、任意の左 c.e. 優マルチンゲールを定数倍で下回らない普遍的なものが存在する（これは万能なマルチン＝レーフ検定の存在と同値である）。" making clear the link to `comp:universal-ml-test` is via equivalence, not identity.
- **Reported:** 2026-10-28 (10fede1)
