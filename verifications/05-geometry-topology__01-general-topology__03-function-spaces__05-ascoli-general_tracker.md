# Verification tracker: `05-geometry-topology/01-general-topology/03-function-spaces/05-ascoli-general.html`

<!-- source: 05-geometry-topology/01-general-topology/03-function-spaces/05-ascoli-general.html -->
<!-- Managed by scripts/verify.py (GitHub Actions). To dispute an [Open] issue, add a line starting with
     **Opus Rebuttal:** at the end of that issue and push; the next run judges it. Do not edit other lines. -->

- Last verified: 2026-10-28 (commit 8ccef3d, deepseek-chat)
- Open: 2 / Resolved: 0 / Ignored: 0

## Summary of the last run

(none)

## Issues

### ISSUE-0001 [Open] k-space claim: gluing continuity is not the issue; the theorem fails for general k-spaces
- **Category:** Supplement/remark error
- **Location:** supplement (前提を変えると)
- **Detail:** The supplement claims that replacing local compactness by k-space (compactly closed = closed) makes the same theorem hold, with the reason that the gluing in \ref{top:restriction-embedding} becomes continuous. This is wrong on two counts. (1) The gluing argument in the lemma only needs that each point has a compact neighborhood, and k-spaces need not have this; more importantly, the map Φ: C_c(X,Y) → ∏_K C_u(K,Y) is not a homeomorphism onto E for a general k-space. (2) The Ascoli theorem in the stated form (relative compactness in the compact-open topology ⇔ equicontinuous + pointwise relatively compact) genuinely requires local compactness (or a suitable replacement such as the domain being a k-space AND the family being closed under the compact-open topology in a stronger sense); for general k-spaces the compact-open topology need not be the topology of uniform convergence on compacta in the required sense, and the implication 2⇒1 can fail. The claim is stated as 'known' but is not a correct standard result in this generality.
- **Proposed fix:** Replace with: 'If X is locally compact, the gluing in \ref{top:restriction-embedding} is continuous because each point has a compact neighborhood. For a general k-space this gluing need not be continuous, and the theorem in the stated form can fail; one needs additional hypotheses (e.g. X compactly generated and the family closed, or working with a suitable modification of the compact-open topology).'
- **Reported:** 2026-10-28 (8ccef3d)

### ISSUE-0002 [Open] Montel: 'uniformly bounded on compact sets' should be 'locally bounded / bounded on each compact set' and needs the family to be a normal family statement
- **Category:** Supplement/remark error
- **Location:** supplement (似た定理)
- **Detail:** The supplement says: a family of holomorphic functions on a domain that is 'uniformly bounded on compact sets' is equicontinuous by Cauchy's integral formula and hence relatively compact by the theorem (Montel). The phrase 'uniformly bounded on compact sets' is ambiguous: what is needed is that the family is bounded on each compact subset (locally bounded), i.e. for each compact K there is M_K with |f| ≤ M_K on K for all f. If read as 'uniformly bounded on the whole domain' that is stronger than needed but not wrong; however as written it can be misread. More seriously, relative compactness in C_c(D,C) requires the limit to be holomorphic, which is fine, but the equicontinuity conclusion from Cauchy's formula requires local boundedness on a neighborhood of each compact set, which follows from local boundedness. The statement is essentially correct but imprecise about the hypothesis (local boundedness, not 'uniform boundedness on compact sets' in a vague sense).
- **Proposed fix:** State precisely: 'If a family of holomorphic functions on a domain D is locally bounded (for every compact K ⊂ D there is M_K with |f| ≤ M_K on K for all f), then by Cauchy's integral formula it is equicontinuous, and by the theorem it is relatively compact in C_c(D,C) (Montel's theorem).'
- **Reported:** 2026-10-28 (8ccef3d)
