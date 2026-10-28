# Verification tracker: `01-foundations/05-proof-theory/09-type-theory/06-dependent-types.html`

<!-- source: 01-foundations/05-proof-theory/09-type-theory/06-dependent-types.html -->
<!-- Managed by scripts/verify.py (GitHub Actions). To dispute an [Open] issue, add a line starting with
     **Opus Rebuttal:** at the end of that issue and push; the next run judges it. Do not edit other lines. -->

- Last verified: 2026-10-28 (commit 10fede1, deepseek-chat)
- Open: 4 / Resolved: 0 / Ignored: 0

## Summary of the last run

The main body (definitions of judgments, structural rules, Π and Σ types, projections, inductive types, the type-theoretic choice theorem and its proof) is logically sound: the proof of pr_2 correctly uses dependent elimination and the conversion rule, and the choice theorem correctly uses pr_1, pr_2, β and the conversion rule without invoking set-theoretic AC. The problems concentrate in the supplement: (1) the claim that the truncated choice principle is 'close to set-theoretic AC' and that its relation to EM is 'an analogue of Diaconescu–Goodman–Myhill (the topos form)' conflates the truncated and untruncated principles and misattributes DGM; (2) the 'Π distributes over Σ (∏∑ ≅ ∑∏)' is stated as an isomorphism although only a map is proved, and the set-theoretic 'equation' fails for empty fibers. The Girard-paradox attribution is essentially correct but slightly imprecise. No issues in the proofs themselves.

## Issues

### ISSUE-0001 [Open] Incorrect claim that the truncated choice principle is close to the set-theoretic AC and that Diaconescu–Goodman–Myhill is a 'topos form'
- **Category:** Supplement/remark error
- **Location:** supplement / 前提を変えると
- **Detail:** The supplement says that reading ∃ as propositional truncation makes the choice principle 'close to the set-theoretic axiom of choice' and that the relation between the choice principle and excluded middle is 'known as an analogue of the Diaconescu–Goodman–Myhill theorem (AC implies EM, the topos form)'. This is imprecise/overstated. In HoTT, the truncated choice principle (∏_{x:A}‖∑_{y:B}R(x,y)‖ → ‖∑_{f:A→B}∏_{x:A}R(x,f x)‖) is a form of the *set-theoretic* choice principle, but it is not equivalent to full AC and does not by itself imply EM in general; the Diaconescu–Goodman–Myhill theorem concerns the *untruncated* type-theoretic choice (the very principle proved on this page) together with propositional extensionality/quotients, and shows that this untruncated AC implies EM. Calling the truncated version's relation to EM 'an analogue of DGM (AC implies EM, the topos form)' conflates the two. Also 'the topos form' is a misattribution: DGM is a result in extensional type theory / toposes, but the truncated choice principle is not the hypothesis of DGM.
- **Proposed fix:** Replace with: 'Reading ∃ as the propositional truncation ‖∑_{x:A}P(x)‖ gives the *set-theoretic* choice principle, which is not provable in pure Martin-Löf type theory and is strictly stronger than the untruncated principle proved above. The untruncated type-theoretic choice (the one proved here), combined with propositional extensionality (or quotients), implies the excluded middle — this is the Diaconescu–Goodman–Myhill theorem. The truncated version does not by itself yield excluded middle in general.'
- **Reported:** 2026-10-28 (10fede1)

### ISSUE-0002 [Open] The 'Π distributes over Σ' equation is misstated as an isomorphism ∏∑ ≅ ∑∏
- **Category:** Supplement/remark error
- **Location:** supplement / 高い視点から
- **Detail:** The supplement writes the type-theoretic choice as 'Π が Σ の上に分配する (∏∑ ≅ ∑∏)' and compares it to the set equation ∏_{x∈A}∐_{y∈B}R_{x,y} ≅ ∐_{f:A→B}∏_{x∈A}R_{x,f(x)}. But the theorem on this page only gives a *map* (∏_{x:A}∑_{y:B}R(x,y)) → ∑_{f:A→B}∏_{x:A}R(x,f x), not an isomorphism; the reverse direction exists but the two are not inverse without function extensionality and the identity type (as the hypcheck itself notes). Writing '≅' overstates the result. Moreover the displayed set-theoretic 'equation' is only a bijection when the fibers are nonempty (or under choice); as a bare '≅' of coproducts it fails for empty fibers (e.g. B=∅, A nonempty: LHS is empty, RHS has the empty function as an element).
- **Proposed fix:** State it as a map, not an isomorphism: 'the type-theoretic choice gives a canonical map ∏_{x:A}∑_{y:B}R(x,y) → ∑_{f:A→B}∏_{x:A}R(x,f x), the type-theoretic analogue of the set-theoretic distributivity ∏_{x∈A}∐_{y∈B}R_{x,y} → ∐_{f:A→B}∏_{x∈A}R_{x,f(x)} (a bijection when each fiber is nonempty). The two types are equivalent only after adding function extensionality and the identity type.'
- **Reported:** 2026-10-28 (10fede1)

### ISSUE-0003 [Open] Girard's paradox attributed to a 1972 thesis
- **Category:** Unsupported fact
- **Location:** remark 宇宙 (logic:dt-universe-remark)
- **Detail:** The remark states that admitting 𝒰:𝒰 makes the system inconsistent '(Girard's paradox, from J.-Y. Girard's 1972 doctoral thesis)'. Girard's paradox appears in Girard's 1972 'Interpretation fonctionnelle et élimination des coupures de l'arithmétique d'ordre supérieur' (Thèse d'État, Paris VII), so the attribution is broadly correct, but the paradox is usually dated to Girard's 1971/1972 work and is often cited via Girard (1972) and Coquand; the precise claim '1972 doctoral thesis' is acceptable but the stronger framing 'the paradox is due to the 1972 thesis' can be read as the sole source. This is a minor historical imprecision rather than a mathematical error; flag only if strict.
- **Proposed fix:** Soften to: 'admitting 𝒰:𝒰 makes the system inconsistent (Girard's paradox, discovered by J.-Y. Girard around 1970–1972; see his 1972 thesis).'
- **Reported:** 2026-10-28 (10fede1)

### ISSUE-0004 [Open] Hypcheck claim that the reverse direction 'can be built' with the given term is fine, but the 'mutually inverse' remark needs function extensionality — already noted
- **Category:** Supplement/remark error
- **Location:** logic:type-theoretic-choice / hypcheck
- **Detail:** The hypcheck says the reverse map ∑_f ∏_x R(x,fx) → ∏_x ∑_y R(x,y) is built by λs.λx.(pr_1 s x, pr_2 s x), and that 'both being mutually inverse (equivalent) is stated using the identity type and function extensionality of the next page'. This is correct and appropriately hedged; no error. (Listed only to confirm it was checked.)
- **Proposed fix:** No change needed.
- **Reported:** 2026-10-28 (10fede1)
