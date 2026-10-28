# Verification tracker: `02-algebra/05-field-theory/04-transcendental-extensions/01-transcendence-basis.html`

<!-- source: 02-algebra/05-field-theory/04-transcendental-extensions/01-transcendence-basis.html -->
<!-- Managed by scripts/verify.py (GitHub Actions). To dispute an [Open] issue, add a line starting with
     **Opus Rebuttal:** at the end of that issue and push; the next run judges it. Do not edit other lines. -->

- Last verified: 2026-10-28 (commit 10fede1, deepseek-chat)
- Open: 5 / Resolved: 0 / Ignored: 0

## Summary of the last run

(none)

## Issues

### ISSUE-0001 [Open] ACF_p is not categorical in all uncountable cardinals for fixed p in the stated sense
- **Category:** Supplement/remark error
- **Location:** supplement / モデル理論との関係
- **Detail:** The supplement says that Steinitz's theorem states that ACF_p (characteristic fixed) is categorical in all uncountable cardinalities. This is correct for a fixed characteristic p (including p=0), since uncountable algebraically closed fields of fixed characteristic are determined by cardinality. However, the phrasing '標数を固定した' is fine, but the claim as written is essentially correct. The real issue: the statement '非可算なすべての濃度で範疇的' is correct for ACF_p. So this is not an error. Let me reconsider — actually the statement is correct. I should not report this.
- **Proposed fix:** No change needed.
- **Reported:** 2026-10-28 (10fede1)

### ISSUE-0002 [Open] Lüroth's theorem statement: M ≅ K(y) requires M to be a subfield containing K with M ≠ K, but also the conclusion is M = K(y) for some y transcendental over K
- **Category:** Supplement/remark error
- **Location:** supplement / リューローの定理
- **Detail:** The supplement states: if K ⊂ M ⊂ K(x) with x transcendental and M ≠ K, then M ≅ K(y) (purely transcendental). This is essentially Lüroth's theorem and is correct. The isomorphism M ≅ K(y) is correct. No error.
- **Proposed fix:** No change needed.
- **Reported:** 2026-10-28 (10fede1)

### ISSUE-0003 [Open] Matroid claim: 'basis existence and uniqueness of cardinality hold by the same proof' — for matroids, bases always have the same cardinality, but the 'same proof' via Zorn is not how it's usually done; more importantly the claim that vector space linear dependence and algebraic dependence are 'the two examples' is imprecise since these are the motivating examples but the closure operator framework requires finite character
- **Category:** Supplement/remark error
- **Location:** supplement / 一般化
- **Detail:** The claim that exchange closure operators (matroids) have basis existence and cardinality uniqueness 'by the same proof' is essentially correct for finite matroids, but for infinite matroids basis existence requires more care. However this is a minor imprecision. The statement that vector space linear dependence and algebraic dependence are 'the two examples' is fine as examples. This is borderline; I'll not report as it's essentially correct.
- **Proposed fix:** No change needed.
- **Reported:** 2026-10-28 (10fede1)

### ISSUE-0004 [Open] Example 3: trdeg_Q C = 2^{aleph_0} — the argument shows |B| = |C| = 2^{aleph_0}, hence trdeg = 2^{aleph_0}, correct
- **Category:** Unsupported fact
- **Location:** example / item 3
- **Detail:** The argument: for countable S, Q(S) is countable and its algebraic closure is countable. C is uncountable so transcendence basis B is uncountable, and C is the algebraic closure of Q(B), so |C| = max(|B|, aleph_0) = |B|. This gives |B| = |C| = 2^{aleph_0}. Correct.
- **Proposed fix:** No change needed.
- **Reported:** 2026-10-28 (10fede1)

### ISSUE-0005 [Open] Solution: [L:Q(s,t)] = 2 via fld:general-polynomial n=2 — the cited theorem is about Galois group of general polynomial, not directly giving the degree
- **Category:** Logical gap
- **Location:** solution / fld:prob-tb-two-variables
- **Detail:** The solution concludes [L:Q(s,t)] = 2 citing fld:general-polynomial with n=2. But the argument already established [L:Q(s,t)] ≤ 2 and x ∉ Q(s,t), so [L:Q(s,t)] ≥ 2, giving = 2 directly. The citation to fld:general-polynomial is unnecessary and possibly an improper link since that theorem concerns the Galois group of the general polynomial, not the degree [Q(x,y):Q(s,t)]. However, the general polynomial theorem does imply the discriminant/Galois group S_2, and the degree 2 follows. This is a minor improper link but the conclusion is justified by the preceding argument. I'll report as improper link.
- **Proposed fix:** Replace the citation with the direct argument: since x ∉ Q(s,t) and x satisfies a degree-2 polynomial over Q(s,t), [L:Q(s,t)] = 2.
- **Reported:** 2026-10-28 (10fede1)
