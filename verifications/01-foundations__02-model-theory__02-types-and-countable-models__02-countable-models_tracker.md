# Verification tracker: `01-foundations/02-model-theory/02-types-and-countable-models/02-countable-models.html`

<!-- source: 01-foundations/02-model-theory/02-types-and-countable-models/02-countable-models.html -->
<!-- Managed by scripts/verify.py (GitHub Actions). To dispute an [Open] issue, add a line starting with
     **Opus Rebuttal:** at the end of that issue and push; the next run judges it. Do not edit other lines. -->

- Last verified: 2026-10-28 (commit 10fede1, deepseek-chat)
- Open: 5 / Resolved: 0 / Ignored: 0

## Summary of the last run

(none)

## Issues

### ISSUE-0001 [Open] Vaught's theorem statement: 'exactly 2' vs 'not exactly 2'
- **Category:** Supplement/remark error
- **Location:** supplement / 関連する結果 / ヴォートの定理
- **Detail:** The supplement states that the number of isomorphism classes of countable models of a complete theory in a countable language is 'ちょうど 2 にはならない' (never exactly 2). This is Vaught's theorem, and it is correct that the number is never exactly 2. However, the parenthetical example claims that 'DLO に定数の増加列を加えた理論はちょうど 3 個の例になる' (the theory of DLO with an increasing sequence of constants gives exactly 3 isomorphism classes). This is a known example, but the claim as stated is imprecise: adding an increasing sequence of constants to DLO does not by itself pin down the theory; one must specify that the constants form an increasing sequence with no upper bound (or similar), and the resulting theory has exactly 3 countable models only under appropriate conditions. As written, the example is not clearly correct and is stated too strongly. The main theorem statement is fine, but the example needs correction.
- **Proposed fix:** Replace the parenthetical with: 'For example, the theory of DLO together with an increasing sequence of constants $c_{0}<c_{1}<\cdots$ (with no upper bound) has exactly 3 countable models up to isomorphism.'
- **Reported:** 2026-10-28 (10fede1)

### ISSUE-0002 [Open] Vaught conjecture status overstated
- **Category:** Supplement/remark error
- **Location:** supplement / 関連する結果 / ヴォート予想
- **Detail:** The supplement says the Vaught conjecture is '未解決と言われている' (said to be open) and adds '2026 年時点の状況は本サイトでは確かめていない' (the situation as of 2026 is not verified on this site). The Vaught conjecture (that the number of countable models is either at most $\aleph_{0}$ or exactly $2^{\aleph_{0}}$) is indeed a famous open problem, but the phrasing 'said to be open' is vague and the disclaimer about 2026 is unnecessary and potentially misleading. More importantly, the statement as given is essentially correct, but the hedge 'said to be open' weakens a well-known fact. This is a minor imprecision rather than a mathematical error, but it is worth correcting for accuracy.
- **Proposed fix:** State: 'The Vaught conjecture—that the number of isomorphism classes of countable models is either at most $\aleph_{0}$ or exactly $2^{\aleph_{0}}$—remains open.' Remove the 2026 disclaimer.
- **Reported:** 2026-10-28 (10fede1)

### ISSUE-0003 [Open] Claim that countable prime models are atomic
- **Category:** Supplement/remark error
- **Location:** supplement / 前提の検討 / 素モデルの逆
- **Detail:** The supplement claims: '可算な素モデルは原子的であることが知られている（孤立していない型の実現を、それを省略するモデルへの初等埋め込みが許さないため）'. This is a standard result: a countable prime model of a complete theory is atomic. The parenthetical justification is essentially correct: if a prime model realized a non-isolated type, then by omitting types there is a model omitting that type, and the elementary embedding would force realization, a contradiction. However, the justification as written is slightly compressed and could be misread. The statement itself is correct, so this is not a genuine error, but the reasoning should be made precise. Since the instruction says to prefer no report over a speculative one, and the statement is true, I will not report this as an error. (No issue.)
- **Proposed fix:** No change needed; the statement is correct.
- **Reported:** 2026-10-28 (10fede1)

### ISSUE-0004 [Open] Weak initial object claim
- **Category:** Supplement/remark error
- **Location:** supplement / 高い視点から
- **Detail:** The supplement says the atomic model is a 'weak initial object' in the category of models of $T$ with elementary embeddings. This is correct: a prime model is weakly initial (there is an elementary embedding into every model, but not necessarily unique). The parenthetical '(埋め込みは一意とは限らない)' correctly notes non-uniqueness. This is accurate.
- **Proposed fix:** No change needed.
- **Reported:** 2026-10-28 (10fede1)

### ISSUE-0005 [Open] Hypcheck claim about finite models
- **Category:** Unsupported fact
- **Location:** hypcheck / 有限モデルをもたないこと
- **Detail:** The hypcheck says: '有限モデルがあっても原子モデルの存在の議論は通るが、本ページでは可算＝可算無限として扱うためにこの仮定を置いた。' (Even if there is a finite model, the argument for the existence of atomic models goes through, but we impose this assumption to treat 'countable' as 'countably infinite'.) This is a side comment in a hypcheck. The claim that the existence argument goes through even with finite models is questionable: the omitting types theorem and the construction of atomic models typically require the theory to have no finite models (or at least to be infinite) to ensure the model obtained is infinite and that types are consistent. In particular, if $T$ has a finite model, the type space $S_{n}(T)$ may behave differently, and the omitting types theorem requires the theory to be consistent with infinitely many elements. The statement is imprecise and potentially false as stated.
- **Proposed fix:** Replace with: 'The assumption that $T$ has no finite models is used to ensure that the model obtained is infinite and that the omitting types theorem applies in the usual form. Without it, the existence argument would need modification.'
- **Reported:** 2026-10-28 (10fede1)
