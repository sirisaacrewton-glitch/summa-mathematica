# Verification tracker: `01-foundations/04-set-theory/08-iterated-forcing/01-products.html`

<!-- source: 01-foundations/04-set-theory/08-iterated-forcing/01-products.html -->
<!-- Managed by scripts/verify.py (GitHub Actions). To dispute an [Open] issue, add a line starting with
     **Opus Rebuttal:** at the end of that issue and push; the next run judges it. Do not edit other lines. -->

- Last verified: 2026-10-28 (commit 10fede1, deepseek-chat)
- Open: 3 / Resolved: 0 / Ignored: 0

## Summary of the last run

(none)

## Issues

### ISSUE-0001 [Open] MA(ω1) does not make products of c.c.c. posets c.c.c.
- **Category:** Supplement/remark error
- **Location:** supplement / 関連する結果
- **Detail:** The supplement claims that under MA(ω1) the product of c.c.c. p.o.s is c.c.c. This is false: MA(ω1) is itself equivalent to the statement that the product of any family of c.c.c. p.o.s of size < 2^{ℵ0} is c.c.c. (in particular the product of two c.c.c. p.o.s is c.c.c. under MA(ω1) only when 2^{ℵ0} > ℵ1, i.e. MA(ω1) alone does not suffice; the correct statement is MA(κ) for the relevant κ, or MA + ¬CH). More precisely, the product of two c.c.c. p.o.s can fail to be c.c.c. even under MA(ω1) if 2^{ℵ0} = ℵ1 (since then MA(ω1) is just CH, and CH does not prevent a Suslin-tree-like failure). The claim as stated is overstated.
- **Proposed fix:** Replace with: 「一般に c.c.c. な p.o. の積は c.c.c. とは限らない。しかし MA(κ) のもとでは、サイズ κ 未満の c.c.c. な p.o. の族の積は c.c.c. である（特に MA + ¬CH のもとでは二つの c.c.c. な p.o. の積は c.c.c.）。」
- **Reported:** 2026-10-28 (10fede1)

### ISSUE-0002 [Open] Claim that PP1 ∈ M is essential for 1⇒2 is imprecise
- **Category:** Supplement/remark error
- **Location:** supplement / 前提の検討
- **Detail:** The supplement says that in 1⇒2 the hypothesis PP1 ∈ M is essential. But the product lemma is stated for PP0, PP1 ∈ M; the relevant point is that the second step is forced over M[G0] with a p.o. that is a check-name of an element of M. Saying 'PP1 ∈ M is essential' is misleading: what is essential is that PP1 is in the ground model M (so that M[G0] sees it as the same p.o.), not merely that it is a set. The statement is not false but is stated imprecisely as an 'essential hypothesis' without explanation.
- **Proposed fix:** Replace with: 「積の補題では PP1 が基礎モデル M に属することが必要である。一般の二段階反復では第二段階は M[G0] に属する名前 Q̇ で与えられ、積の補題は Q̇ = PP̌1 という特別な場合にあたる。」
- **Reported:** 2026-10-28 (10fede1)

### ISSUE-0003 [Open] Tensor-product analogy is vague and potentially misleading
- **Category:** Supplement/remark error
- **Location:** supplement / 高い視点から
- **Detail:** The analogy with tensor products '(A⊗_K K')⊗⋯' is not a precise mathematical statement and the phrase 'まず A を係数に拡大し、その上で B を拡大する' does not correspond to a well-defined algebraic operation matching the forcing product. Since this is a side comment presented as an analogy, it is at best imprecise; the claim that 'PP1 が M に属し、G0 によって変形されない' is a correct intuition but the tensor analogy adds no correct content and could mislead.
- **Proposed fix:** Either remove the tensor-product analogy, or state it precisely: 「積の補題は、二つの独立なジェネリック拡大を同時に行うことが、順序を変えて逐次的に行うことと同じ拡大を与えることを述べている。これは代数でのテンソル積の結合性に類比的であるが、あくまで比喩である。」
- **Reported:** 2026-10-28 (10fede1)
