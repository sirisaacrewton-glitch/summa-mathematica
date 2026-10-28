# Verification tracker: `04-analysis/01-real-analysis/02-calculus/04-riemann-integral.html`

<!-- source: 04-analysis/01-real-analysis/02-calculus/04-riemann-integral.html -->
<!-- Managed by scripts/verify.py (GitHub Actions). To dispute an [Open] issue, add a line starting with
     **Opus Rebuttal:** at the end of that issue and push; the next run judges it. Do not edit other lines. -->

- Last verified: 2026-10-28 (commit 8ccef3d, deepseek-chat)
- Open: 3 / Resolved: 0 / Ignored: 0

## Summary of the last run

The main body (Darboux sums, the Riemann criterion with its four equivalences, integrability of continuous/monotone/finitely-discontinuous functions, basic properties, and Lebesgue's criterion with the choice-free argument) is logically sound; the proofs check out and the cited labels match their use. The genuine problems are confined to the supplement and hypcheck: the Riemann–Stieltjes 'same theory' claim is overstated, the net characterization is misattributed to criterion item 2, and the remark about countable choice and countable unions of null sets is stated more strongly than the literature supports.

## Issues

### ISSUE-0001 [Open] Riemann–Stieltjes claim that the same theory carries over verbatim
- **Category:** Supplement/remark error
- **Location:** supplement (一般化と関連する事実, third bullet)
- **Detail:** The supplement says that for the Riemann–Stieltjes integral $\int f\,d\alpha$ with $\alpha$ increasing, 'the same theory can be developed' by replacing $\Delta x_{i}$ with $\Delta\alpha_{i}$. This is overstated: the Darboux-style theory with $\Delta\alpha_{i}$ works only when $\alpha$ is increasing (so $\Delta\alpha_{i}\ge0$), and even then the resulting integral is the Darboux–Stieltjes integral, which coincides with the Riemann–Stieltjes integral only under additional conditions (e.g. $f$ continuous, or $\alpha$ of bounded variation with compatibility conditions). Key results do not transfer verbatim: for example, the criterion '$U-L\to0$ as the mesh $|P|\to0$' fails, since $\Delta\alpha_{i}$ can be large on intervals of small length (a step function $\alpha$ makes every $f$ 'integrable' with value $f$ at the jump, and the mesh-based criterion breaks down). Also the reference to the fundamental-theorem page for Riemann–Stieltjes is a pointer, not a justification.
- **Proposed fix:** Replace with: 'For an increasing $\alpha$, replacing $\Delta x_{i}$ by $\Delta\alpha_{i}\ge0$ gives the Darboux–Stieltjes sums and a parallel theory; the resulting integral agrees with the Riemann–Stieltjes integral $\int f\,d\alpha$ when $f$ is continuous (or under suitable compatibility conditions on $f$ and $\alpha$). Not all results transfer verbatim: e.g. the mesh-based criterion (item 3 of the Riemann criterion) must be replaced by refinement-based conditions, since $\Delta\alpha_{i}$ need not be small when $\Delta x_{i}$ is small.'
- **Reported:** 2026-10-28 (8ccef3d)

### ISSUE-0002 [Open] Net characterization of the integral is misattributed
- **Category:** Supplement/remark error
- **Location:** supplement (一般化と関連する事実, second bullet)
- **Detail:** The text says the integral can be seen as the limit of a net over refinements, citing '\ref{calc:riemann-criterion.2} と同値'. But item 2 of the Riemann criterion is the $\varepsilon$-criterion $U(f,P)-L(f,P)<\varepsilon$, not a statement about nets or directed sets. The net statement (limit over the directed set of partitions ordered by refinement of $U(f,P)$ and $L(f,P)$, which coincide iff integrable) is true, but it is not 'equivalent to item 2' as cited; the citation is used for something the target does not say.
- **Proposed fix:** Either drop the citation, or rephrase: 'The integral is $\lim_{P}U(f,P)=\lim_{P}L(f,P)$ where the limit is taken over the directed set of partitions ordered by refinement; this is a reformulation of the definition of $\overline{\int}f$ and $\underline{\int}f$ (and hence of integrability), not of criterion item 2.'
- **Reported:** 2026-10-28 (8ccef3d)

### ISSUE-0003 [Open] Claim that the general countable-union theorem fails without choice
- **Category:** Supplement/remark error
- **Location:** hypcheck (選択公理を使わない工夫)
- **Detail:** The hypcheck asserts that 'the countable union of measure-zero sets is measure zero uses countable choice, and there are models where it fails without the axiom of choice'. This is a delicate and, as stated, misleading claim: in $\ZF$ the statement that a countable union of measure-zero sets is measure zero is not known to be outright refutable, and the usual assertion is only that the standard proof uses $\mathsf{AC}_{\omega}$. Stating flatly that it 'fails in some models' is an unsupported strong claim about independence. The safe statement is only that the standard proof invokes countable choice.
- **Proposed fix:** Replace with: 'The usual proof that a countable union of measure-zero sets is measure zero selects one covering for each set and therefore uses the countable axiom of choice; here we avoid that general theorem and construct the coverings explicitly from the minimal equal partition $n(k)$.'
- **Reported:** 2026-10-28 (8ccef3d)
