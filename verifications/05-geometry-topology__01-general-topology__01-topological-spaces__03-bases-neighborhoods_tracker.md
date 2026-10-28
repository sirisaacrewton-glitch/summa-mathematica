# Verification tracker: `05-geometry-topology/01-general-topology/01-topological-spaces/03-bases-neighborhoods.html`

<!-- source: 05-geometry-topology/01-general-topology/01-topological-spaces/03-bases-neighborhoods.html -->
<!-- Managed by scripts/verify.py (GitHub Actions). To dispute an [Open] issue, add a line starting with
     **Opus Rebuttal:** at the end of that issue and push; the next run judges it. Do not edit other lines. -->

- Last verified: 2026-10-28 (commit 10fede1, deepseek-chat)
- Open: 3 / Resolved: 0 / Ignored: 0

## Summary of the last run

The main body (definitions, theorems and proofs on bases, subbases, neighbourhood systems, neighbourhood bases, countability axioms, and the Sorgenfrey line) is logically sound. The problems are concentrated in the supplement: the claim that Lindelöfness is closed-hereditary is false and is contradicted by the Sorgenfrey plane example given in the same sentence, and the attribution of 'normality not preserved by products' to the Sorgenfrey plane is imprecise (the factors are normal; what fails is productivity of normality/perfect normality). These should be corrected.

## Issues

### ISSUE-0001 [Open] Lindelöfness is not inherited by closed subspaces
- **Category:** Supplement/remark error
- **Location:** supplement (前提を変えると)
- **Detail:** The supplement claims that Lindelöfness, unlike separability, is inherited by closed subspaces. This is false: Lindelöfness is not closed-hereditary. A standard counterexample is the Sorgenfrey plane: it is not Lindelöf, but its anti-diagonal is a closed discrete subspace, hence Lindelöf. The very example cited in the same sentence contradicts the claim. (Separability is also not closed-hereditary in general, so the contrast drawn is doubly wrong.)
- **Proposed fix:** Replace with: 「リンデレーフ性は閉部分空間に遺伝しない（ゾルゲンフライ平面はリンデレーフでないが、その反対角線は離散閉部分空間でリンデレーフである）。可分性も一般には閉部分空間に遺伝しない。」
- **Reported:** 2026-10-28 (10fede1)

### ISSUE-0002 [Open] The Sorgenfrey plane does not show failure of normality under products
- **Category:** Supplement/remark error
- **Location:** supplement (前提を変えると)
- **Detail:** The supplement says the Sorgenfrey plane is a standard example showing that neither Lindelöfness nor normality is preserved by products. The Sorgenfrey plane is indeed non-normal (Sorgenfrey 1947), but it is not an example of normality failing to be productive: the Sorgenfrey line is perfectly normal, and the product of two perfectly normal spaces need not be normal, so the example does show that perfect normality is not productive, but the claim as stated (normality not preserved by products) is imprecise/misleading since the factors are normal. More importantly the sentence lumps 'normality' with 'Lindelöfness' as if the same example showed both failures of productivity, which is at best imprecise. The precise correct statement is that the Sorgenfrey plane is not normal, showing that the product of two normal (even perfectly normal, Lindelöf) spaces need not be normal.
- **Proposed fix:** Replace with: 「この例は、リンデレーフ性が積で保たれないことを示す。さらにゾルゲンフライ平面は正規でないことが知られており、正規性（実際には完全正規性）も積で保たれないことを示す標準的な例である。」
- **Reported:** 2026-10-28 (10fede1)

### ISSUE-0003 [Open] Weight/density terminology and cardinal function remark
- **Category:** Supplement/remark error
- **Location:** supplement (類似の概念)
- **Detail:** The supplement defines 重さ (weight) as the minimal cardinality of an open base and 稠密度 (density) as the minimal cardinality of a dense set. These are correct, but the sentence 'the theory of cardinal functions is one of the topics of set-theoretic topology' is fine. No error here; however the claim that the Suslin problem is an example of 'comparing cardinal functions' is loose but acceptable. No issue.
- **Proposed fix:** No change needed.
- **Reported:** 2026-10-28 (10fede1)
