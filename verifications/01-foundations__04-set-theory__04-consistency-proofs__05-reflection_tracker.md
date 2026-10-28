# Verification tracker: `01-foundations/04-set-theory/04-consistency-proofs/05-reflection.html`

<!-- source: 01-foundations/04-set-theory/04-consistency-proofs/05-reflection.html -->
<!-- Managed by scripts/verify.py (GitHub Actions). To dispute an [Open] issue, add a line starting with
     **Opus Rebuttal:** at the end of that issue and push; the next run judges it. Do not edit other lines. -->

- Last verified: 2026-10-28 (commit 10fede1, deepseek-chat)
- Open: 5 / Resolved: 0 / Ignored: 0

## Summary of the last run

(none)

## Issues

### ISSUE-0001 [Open] Reflection principle is not equivalent to Replacement
- **Category:** Supplement/remark error
- **Location:** supplement / 前提の検討, second bullet
- **Detail:** The supplement claims that the reflection scheme is 'strong enough to replace the Replacement axiom' and that 'under the other axioms of ZF, the reflection scheme is equivalent to the Replacement scheme'. This is false as stated. The reflection scheme (for a single formula, over the cumulative hierarchy) is provable in ZF without Replacement (e.g. in Zermelo set theory Z, or even weaker systems), so it cannot be equivalent to Replacement. What is true is a stronger *global/multi-formula* reflection principle (reflection for all formulas simultaneously, or reflection with parameters over the whole universe) that implies Replacement. The single-formula scheme as stated in this page does not imply Replacement.
- **Proposed fix:** Replace with: 'The single-formula reflection scheme stated here is already provable in Zermelo set theory (without Replacement), so it does not by itself imply Replacement. It is the *global* (simultaneous, parameter-allowing) reflection principle that is equivalent to Replacement over the other axioms of ZF; this site does not prove that equivalence.'
- **Reported:** 2026-10-28 (10fede1)

### ISSUE-0002 [Open] Kunen exercise attribution about beta = omega_beta
- **Category:** Supplement/remark error
- **Location:** supplement / 前提の検討, fourth bullet
- **Detail:** The supplement attributes to Kunen (Chapter IV, Exercise 10) the claim that one can force, via finitely many axioms of ZF, that the reflecting beta satisfies beta = omega_beta. This is a misattribution/imprecise claim. Kunen's exercise concerns showing that for certain finite fragments one can require the reflecting ordinal to be a fixed point of alpha -> omega_alpha, but the precise statement and numbering are not as described; moreover the claim as phrased ('finitely many axioms force beta = omega_beta') is not literally a theorem about the reflection theorem's conclusion but about choosing the fragment. Since the site admits it is unverified, the attribution should be softened or removed.
- **Proposed fix:** Either delete the bullet, or restate as: 'It is a known exercise (cf. Kunen, Set Theory, Ch. IV) that by adding suitable finitely many axioms to the fragment one can ensure the reflecting beta is a fixed point of alpha -> omega_alpha (i.e. beta = omega_beta); this site does not verify it.'
- **Reported:** 2026-10-28 (10fede1)

### ISSUE-0003 [Open] NBG is a conservative extension claim stated too strongly
- **Category:** Supplement/remark error
- **Location:** supplement / 関連する結果
- **Detail:** The supplement says NBG 'is finitely axiomatizable and is known to be a conservative extension of ZF'. NBG is finitely axiomatizable and is a conservative extension of ZF *for statements in the language of ZF* (i.e. it proves the same set-theoretic sentences), which is correct, but the phrasing 'ZF の保存拡大である' without the qualifier 'for formulas not quantifying over classes' can be read as claiming full conservative extension including class variables, which is false (NBG proves Con(ZF), which ZF does not). The statement should specify the restriction to set-variables.
- **Proposed fix:** Restate: 'NBG is finitely axiomatizable and is a conservative extension of ZF with respect to sentences in the language of set theory (i.e. it proves exactly the same set-theoretic sentences as ZF); it is not conservative for formulas involving class quantifiers.'
- **Reported:** 2026-10-28 (10fede1)

### ISSUE-0004 [Open] Skolem paradox characterization: 'countable' not absolute
- **Category:** Supplement/remark error
- **Location:** section after set:ctm-exists, paragraph on Skolem paradox
- **Detail:** The text says the phenomenon that 'countable' is not absolute is called Skolem's paradox. Strictly, Skolem's paradox is the apparent contradiction that a countable transitive model M satisfies 'there exist uncountable sets' (e.g. omega_1^M) while M itself is countable. The non-absoluteness of 'countable' is the underlying mechanism, but calling the non-absoluteness itself 'Skolem's paradox' is imprecise. Also the sentence 'omega_1^M is a countable ordinal that M thinks is uncountable' is correct, but the following 'this is simply that no surjection from omega onto omega_1^M belongs to M' is correct only because M is transitive and omega in M equals the real omega; this should be noted.
- **Proposed fix:** Restate: 'The apparent contradiction — that a countable transitive model M satisfies "omega_1 exists and is uncountable" while M itself is countable — is called Skolem's paradox. The resolution is that the bijection omega -> omega_1^M exists in V but not in M; equivalently "countable" is not absolute.'
- **Reported:** 2026-10-28 (10fede1)

### ISSUE-0005 [Open] Claim that R(beta) is a model of ZF in Step 3 of not-finitely-axiomatizable
- **Category:** Unsupported fact
- **Location:** set:not-finitely-axiomatizable / Step 3
- **Detail:** Step 3 says 'R(beta) is a transitive model of ZF' but only finitely many axioms psi^{R(beta)} were verified in Step 2 (those in the finite fragment). The parenthetical acknowledges this, but then the argument uses R(alpha)^{R(beta)} = R(alpha) via set:power-rank-relativized.2, which requires enough of ZF in R(beta). The hypcheck says this only needs a sufficiently large finite fragment, which is fine, but the main text's phrasing 'R(beta) is a transitive model of ZF' is an overstatement that could mislead. This is a minor imprecision rather than a fatal gap, since the finite-fragment absoluteness lemma covers it.
- **Proposed fix:** Replace 'R(beta) is a transitive model of ZF' with 'R(beta) satisfies the finitely many axioms of ZF needed below (in particular those needed for set:power-rank-relativized and set:absolute-ordinals), which can be included in the fragment by set:finite-fragment-absoluteness.'
- **Reported:** 2026-10-28 (10fede1)
