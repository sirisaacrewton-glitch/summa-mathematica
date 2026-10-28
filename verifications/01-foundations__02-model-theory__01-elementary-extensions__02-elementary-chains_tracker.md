# Verification tracker: `01-foundations/02-model-theory/01-elementary-extensions/02-elementary-chains.html`

<!-- source: 01-foundations/02-model-theory/01-elementary-extensions/02-elementary-chains.html -->
<!-- Managed by scripts/verify.py (GitHub Actions). To dispute an [Open] issue, add a line starting with
     **Opus Rebuttal:** at the end of that issue and push; the next run judges it. Do not edit other lines. -->

- Last verified: 2026-10-28 (commit 10fede1, deepseek-chat)
- Open: 8 / Resolved: 0 / Ignored: 0

## Summary of the last run

(none)

## Issues

### ISSUE-0001 [Open] Łoś–Tarski fails for finite structures: attribution and truth
- **Category:** Supplement/remark error
- **Location:** supplement / 前提の検討, first bullet
- **Detail:** The supplement claims that in a logic without compactness (e.g. restricting to finite structures) the Łoś–Tarski theorem is known to fail, attributing this to 'Tait's example' (タイトの例). This is imprecise and misattributed. The standard failure of Łoś–Tarski on finite structures is elementary: the theory of finite linear orders (or the class of finite sets) is closed under substructures but is not axiomatized by universal sentences, since any universal sentence true in all finite linear orders is true in all linear orders. There is no standard 'Tait example' for this; the attribution is unsupported. Also the parenthetical 'finite structures only' is not a logic in the usual sense, so the phrasing 'compactness fails' is loose.
- **Proposed fix:** Replace with: 'For example, the class of finite linear orders is closed under substructures, but no set of universal sentences axiomatizes it (any universal sentence true in all finite linear orders holds in all linear orders), so Łoś–Tarski fails when only finite structures are admitted.'
- **Reported:** 2026-10-28 (10fede1)

### ISSUE-0002 [Open] ω-chains suffice for Chang–Łoś–Suszko
- **Category:** Supplement/remark error
- **Location:** supplement / 前提の検討, second bullet
- **Detail:** The claim 'the proof uses only ω-type chains, hence closure under unions of ω-chains alone yields 1' is correct in substance (the Step 2 construction builds an ω-chain), but as stated it is slightly overstated: the hypothesis 2 in the theorem is closure under unions of arbitrary chains, and the proof indeed only needs the ω-chain case, so the remark is essentially right. However the remark as written ('したがって「ω 型の鎖の和で閉じる」だけで 1 が従う') is a genuine strengthening that is true; no error. (No issue.)
- **Proposed fix:** No change needed; optionally clarify that the ω-chain closure suffices because Step 2 builds an ω-chain.
- **Reported:** 2026-10-28 (10fede1)

### ISSUE-0003 [Open] Birkhoff HSP and Łoś–Tarski 'S' analogy
- **Category:** Supplement/remark error
- **Location:** supplement / 関連する結果, 普遍代数 bullet
- **Detail:** The statement that Łoś–Tarski is 'the first-order logic version of the S part of HSP' is loose but not false: substructure closure corresponds to 'S'. However, the HSP theorem concerns classes closed under homomorphic images, subalgebras and products, and the analogy 'Łoś–Tarski = S part' is only heuristic. This is acceptable as intuition, not a factual error.
- **Proposed fix:** No change needed.
- **Reported:** 2026-10-28 (10fede1)

### ISSUE-0004 [Open] Lyndon's homomorphism preservation theorem statement
- **Category:** Supplement/remark error
- **Location:** supplement / 関連する結果, 準同型と正の文 bullet
- **Detail:** The supplement states: 'A theory preserved under surjective homomorphisms is axiomatizable by positive sentences (built with ∧,∨,∀,∃ without ¬,→).' Lyndon's homomorphism preservation theorem is usually stated for homomorphisms (not necessarily surjective) and positive formulas; the surjective version is also correct. The parenthetical description of positive formulas as using ∧,∨,∀,∃ without ¬,→ is fine. No error.
- **Proposed fix:** No change needed.
- **Reported:** 2026-10-28 (10fede1)

### ISSUE-0005 [Open] Galois connection Mod ⊣ Th
- **Category:** Supplement/remark error
- **Location:** supplement / 高い視点から
- **Detail:** The claim that Mod and Th form a Galois connection reversing inclusions is correct (antitone Galois connection between theories and classes of structures). The pairing 'equality ↔ HSP' is heuristic. No error.
- **Proposed fix:** No change needed.
- **Reported:** 2026-10-28 (10fede1)

### ISSUE-0006 [Open] Hypcheck: 'Step 1 holds for any T'
- **Category:** Supplement/remark error
- **Location:** hypcheck after los-tarski / second bullet
- **Detail:** The hypcheck says '2 の閉包性：Step 2 の最後の一行だけで使った。Step 1 は T が何であっても成り立つ。' Step 1 indeed only uses compactness and the constants-to-variables lemma, independent of closure. This is correct.
- **Proposed fix:** No change needed.
- **Reported:** 2026-10-28 (10fede1)

### ISSUE-0007 [Open] Hypcheck: 'directed suffices' for elementary chain
- **Category:** Supplement/remark error
- **Location:** hypcheck after elementary-chain / third bullet
- **Detail:** The hypcheck claims the proof works for any upward-directed poset, not just a total order. This is correct: max(i,j) can be replaced by an upper bound of i and j in a directed set. No error.
- **Proposed fix:** No change needed.
- **Reported:** 2026-10-28 (10fede1)

### ISSUE-0008 [Open] Diag(M) ⊆ Diag_∀(M) via n=0 universal sentences
- **Category:** Unsupported fact
- **Location:** definition model:atomic-diagram
- **Detail:** The definition says atomic sentences and their negations are quantifier-free, hence in Diag_∀(M) as n=0 universal sentences. A quantifier-free sentence is ∀x₁...∀x_n ψ with n=0, i.e. ψ itself, so this is correct. No error.
- **Proposed fix:** No change needed.
- **Reported:** 2026-10-28 (10fede1)
