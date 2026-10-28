# Verification tracker: `01-foundations/03-computation/03-advanced-computability/01-logical-theories.html`

<!-- source: 01-foundations/03-computation/03-advanced-computability/01-logical-theories.html -->
<!-- Managed by scripts/verify.py (GitHub Actions). To dispute an [Open] issue, add a line starting with
     **Opus Rebuttal:** at the end of that issue and push; the next run judges it. Do not edit other lines. -->

- Last verified: 2026-10-28 (commit 10fede1, deepseek-chat)
- Open: 3 / Resolved: 0 / Ignored: 0

## Summary of the last run

The page is largely correct. The main proof (Presburger via automata) is sound, and the undecidability argument via Tarski is valid. The only genuine issue is in the supplement: the Fischer–Rabin double-exponential claim is misstated as a time lower bound for deciding Th(N,+), whereas it concerns the blow-up in quantifier elimination. The quantifier-elimination remark about congruence predicates is slightly imprecise but not false. No logical gaps or missing hypotheses were found in the proofs.

## Issues

### ISSUE-0001 [Open] Incorrect complexity claim for Th(N,+)
- **Category:** Supplement/remark error
- **Location:** supplement / 前提の検討, first bullet
- **Detail:** The supplement states that deciding Th(N,+) requires double exponential time (Fischer–Rabin). The Fischer–Rabin result is a double exponential lower bound for the length of formulas produced by quantifier elimination / for the decision procedure, not a double exponential time lower bound for deciding the theory. In fact Th(N,+) is decidable in (at most) triple exponential time and the known lower bounds are much smaller; the statement as written overstates the literature.
- **Proposed fix:** The quantifier-elimination procedure for Th(N,+) produces formulas whose size grows doubly exponentially (Fischer–Rabin), so the resulting decision procedure is extremely slow; the theory is nevertheless decidable.
- **Reported:** 2026-10-28 (10fede1)

### ISSUE-0002 [Open] Quantifier elimination for Presburger arithmetic needs congruence predicates
- **Category:** Supplement/remark error
- **Location:** supplement / 関連する結果, プレスブルガー算術 bullet
- **Detail:** The claim that quantifier elimination requires adding predicates 'remainder r modulo k' is essentially correct, but the phrasing 'k で割った余りが r という述語を言語に加える必要がある' is imprecise: one needs the family of predicates x ≡ r (mod k) for all k ≥ 1, 0 ≤ r < k, not a single predicate. As stated it is ambiguous but not false; however combined with the claim that Presburger proved decidability 'by quantifier elimination' in 1929, note Presburger's original proof used a different method (and the congruence-based QE is due to later authors). This is a minor historical imprecision.
- **Proposed fix:** Presburger proved decidability in 1929; a modern quantifier-elimination proof works in the language enriched by the binary predicates x ≡ r (mod k) for all k ≥ 1 and 0 ≤ r < k.
- **Reported:** 2026-10-28 (10fede1)

### ISSUE-0003 [Open] Automatic structures: definable relations are regular, but the claim about (N,+) needs the base to be fixed
- **Category:** Supplement/remark error
- **Location:** supplement / 高い視点から：自動的な構造
- **Detail:** The statement 'definable relations of (N,+) are all regular languages in binary representation' is correct for a fixed base, but the supplement then says 'multiplication does not fit this framework'. This is fine, but the sentence 'the theory of an automatic structure is always decidable' is correct only when the structure is automatic with respect to a regular presentation and the language is finite; this is standard and correct. No error here. However the claim that 'multiplication is not regular' implicitly relies on base-dependence: (N,·) is not automatic in base 2, which is true. No issue.
- **Proposed fix:** No change needed.
- **Reported:** 2026-10-28 (10fede1)
