# Verification tracker: `01-foundations/01-general-logic/01-propositional-logic/03-compactness.html`

<!-- source: 01-foundations/01-general-logic/01-propositional-logic/03-compactness.html -->
<!-- Managed by scripts/verify.py (GitHub Actions). To dispute an [Open] issue, add a line starting with
     **Opus Rebuttal:** at the end of that issue and push; the next run judges it. Do not edit other lines. -->

- Last verified: 2026-10-28 (commit 10fede1, deepseek-chat)
- Open: 3 / Resolved: 0 / Ignored: 0

## Summary of the last run

(none)

## Issues

### ISSUE-0001 [Open] Cantor space compactness is not König's lemma
- **Category:** Supplement/remark error
- **Location:** supplement (位相的な見方)
- **Detail:** The supplement claims that when PV is countable, the compactness of {0,1}^ω (Cantor space) 'corresponds to' the König's lemma used in Proof 2. This is imprecise: compactness of Cantor space is equivalent to the statement that every infinite binary tree has an infinite branch (weak König's lemma), but Proof 2 uses König's lemma applied to a specific tree T built from Σ, not the compactness of Cantor space itself. The identification is a category error: the compactness of Cantor space is a topological statement, while Proof 2's use of König's lemma is a combinatorial one. The claim is overstated.
- **Proposed fix:** Replace with: 'When PV is countable, {0,1}^ω is Cantor space, and the compactness of Cantor space is equivalent (over ZF) to the statement that every infinite binary tree has an infinite branch, i.e. the weak König's lemma used in Proof 2. Proof 2 applies this lemma to the specific tree T constructed from Σ.'
- **Reported:** 2026-10-28 (10fede1)

### ISSUE-0002 [Open] Unverified equivalence with prime ideal theorem
- **Category:** Unsupported fact
- **Location:** supplement (選択公理との関係)
- **Detail:** The supplement states that under ZF, the propositional compactness theorem for arbitrary PV is equivalent to the Boolean prime ideal theorem, adding '(本サイトでは未確認)' (unverified on this site). This is a genuine mathematical result (the compactness theorem for propositional logic is indeed equivalent to the Boolean prime ideal theorem over ZF), but the parenthetical admission that it is unverified makes it an unsupported claim in a supplement. Since the site explicitly flags it as unverified, it should either be properly cited or removed.
- **Proposed fix:** Either cite a reference (e.g. Halbeisen, 'Combinatorial Set Theory', or Jech, 'The Axiom of Choice') for the equivalence, or remove the claim. If kept, state: 'Under ZF, the compactness theorem for propositional logic for arbitrary PV is equivalent to the Boolean prime ideal theorem (see [reference]).'
- **Reported:** 2026-10-28 (10fede1)

### ISSUE-0003 [Open] Remark on finite PV truncation is imprecise
- **Category:** Supplement/remark error
- **Location:** logic:prop-compactness-finite-pv
- **Detail:** The remark says that when PV is finite, one can truncate Steps 2–4 at length n, and that the length-n element s ∈ T obtained in Step 3 is itself an assignment satisfying Σ = Σ_n. This is essentially correct but the phrasing 'Step 3 で得た長さ n の元 s ∈ T がそのまま Σ = Σ_n を充足する割り当てである' is slightly off: s is a binary sequence of length n, which corresponds to an assignment on {p_0,...,p_{n-1}}, and it satisfies Σ_n by the definition of T. The remark is not false, but it conflates the sequence s with the assignment. More importantly, the remark claims this handles the finite case, but the finite case is already trivial (finitely many propositional variables means finitely many formulas up to equivalence, and finite satisfiability gives satisfiability directly). The remark is not wrong, just imprecise.
- **Proposed fix:** Clarify: 'When PV = {p_0,...,p_{n-1}} is finite, the tree T has height n; the length-n element s ∈ T obtained in Step 3 corresponds to the assignment v(p_i) = s(i), which satisfies Σ = Σ_n by the definition of T. (In fact the finite case is immediate from finite satisfiability alone.)'
- **Reported:** 2026-10-28 (10fede1)
