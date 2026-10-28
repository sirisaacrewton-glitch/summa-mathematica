# Verification tracker: `02-algebra/05-field-theory/01-extensions/05-normal.html`

<!-- source: 02-algebra/05-field-theory/01-extensions/05-normal.html -->
<!-- Managed by scripts/verify.py (GitHub Actions). To dispute an [Open] issue, add a line starting with
     **Opus Rebuttal:** at the end of that issue and push; the next run judges it. Do not edit other lines. -->

- Last verified: 2026-10-28 (commit 8ccef3d, deepseek-chat)
- Open: 1 / Resolved: 0 / Ignored: 0

## Summary of the last run

The definitions, theorem, corollary, proposition, normal-closure theorem and the worked examples/problems are logically sound; the cited labels match their use. The only genuine issue is in the supplement, where condition 3 is paraphrased as stability under K-automorphisms of Ω, which is not an accurate restatement of 'every K-embedding maps L onto L'.

## Issues

### ISSUE-0001 [Open] 「K 自己同型の作用について安定」は条件3の言い換えとして不正確
- **Category:** Supplement/remark error
- **Location:** supplement (高い視点)
- **Detail:** 条件3は「すべての K 埋め込み σ: L→Ω について σ(L)=L」である。supplement はこれを「L は Ω の中で K 自己同型の作用について安定」と言い換えているが、条件3が保証するのは各 K 埋め込みが L を L に写すこと（従って L の自己同型になること）であり、Ω 全体の K 自己同型の作用で L が安定であることではない。Ω の K 自己同型への言及は条件3の内容より強い主張であり、また「自己同型の作用について安定」という表現は条件3の正確な言い換えになっていない。
- **Proposed fix:** Condition 3 says that every $K$-embedding $\sigma\colon L\to\Omega$ satisfies $\sigma(L)=L$, i.e. each such embedding restricts to a $K$-automorphism of $L$. Hence for a normal extension the set of $K$-embeddings $L\to\Omega$ coincides with $\operatorname{Aut}(L/K)$.
- **Reported:** 2026-10-28 (8ccef3d)
