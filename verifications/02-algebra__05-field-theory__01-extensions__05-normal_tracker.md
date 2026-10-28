# Verification tracker: `02-algebra/05-field-theory/01-extensions/05-normal.html`

<!-- source: 02-algebra/05-field-theory/01-extensions/05-normal.html -->
<!-- Managed by scripts/verify.py (GitHub Actions). To dispute an [Open] issue, add a line starting with
     **Opus Rebuttal:** at the end of that issue and push; the next run judges it. Do not edit other lines. -->

- Last verified: 2026-10-28 (commit 10fede1, deepseek-chat)
- Open: 2 / Resolved: 0 / Ignored: 0

## Summary of the last run

The definitions, theorem, corollary, proposition, normal-closure theorem and the worked problems are logically sound; citations match their targets (fld:normal-equivalent, fld:extension-simple, fld:embedding-algebraic-closure, fld:quadratic-normal, fld:degree-divides, fld:splitting-field-existence all say what is used). The only genuine problems are in the closing supplement: the description of condition 3 as stability under 'K-automorphisms' is imprecise (the maps are K-embeddings into Ω), and the informal description of the normal closure as 'the smallest symmetric field' overstates the minimality, which holds only among normal extensions inside the fixed Ω.

## Issues

### ISSUE-0001 [Open] Condition 3 concerns K-embeddings, not K-automorphisms acting on Ω
- **Category:** Supplement/remark error
- **Location:** supplement (fld:sec-nm-closure area) / "高い視点"
- **Detail:** The supplement says condition 3 means "L is stable under the action of K-automorphisms inside Ω". But condition 3 quantifies over K-embeddings σ: L → Ω, which are not automorphisms of Ω (no automorphism of Ω is fixed). The phrase "K 自己同型の作用について安定" is imprecise/misleading: the relevant maps are K-embeddings of L into Ω, and stability means σ(L)=L for each such embedding. Also "Aut(L/K) が埋め込み全体を表す" is only true when L/K is normal (which is the point), so as stated it reads as a general assertion.
- **Proposed fix:** Condition 3 says: for every $K$-embedding $\sigma\colon L\to\Omega$, one has $\sigma(L)=L$; i.e. $L$ is carried onto itself by every $K$-embedding into $\Omega$ (not by automorphisms of $\Omega$). When $L/K$ is normal, each such $\sigma$ restricts to a $K$-automorphism of $L$, so $\operatorname{Aut}(L/K)$ coincides with the set of all $K$-embeddings $L\to\Omega$.
- **Reported:** 2026-10-28 (10fede1)

### ISSUE-0002 [Open] Normal closure is not 'the smallest symmetric field' in a literal sense
- **Category:** Supplement/remark error
- **Location:** supplement / "高い視点" last sentence
- **Detail:** The claim that the normal closure is "the smallest 'symmetric' field containing them all" is vague but, read literally, overstates: minimality is only among normal extensions of K inside the fixed Ω containing L (as theorem fld:normal-closure correctly states). Calling it 'symmetric' is informal and could be read as claiming uniqueness independent of Ω or minimality among all extensions, which is false.
- **Proposed fix:** The normal closure $N$ is the smallest subfield of $\Omega$ that contains $L$ and is normal over $K$ (minimal among normal extensions of $K$ inside $\Omega$ containing $L$); it is the composite of all conjugates $\sigma(L)$ of $L$.
- **Reported:** 2026-10-28 (10fede1)
