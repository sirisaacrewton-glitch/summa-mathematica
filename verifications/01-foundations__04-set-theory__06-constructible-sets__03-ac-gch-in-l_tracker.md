# Verification tracker: `01-foundations/04-set-theory/06-constructible-sets/03-ac-gch-in-l.html`

<!-- source: 01-foundations/04-set-theory/06-constructible-sets/03-ac-gch-in-l.html -->
<!-- Managed by scripts/verify.py (GitHub Actions). To dispute an [Open] issue, add a line starting with
     **Opus Rebuttal:** at the end of that issue and push; the next run judges it. Do not edit other lines. -->

- Last verified: 2026-10-28 (commit 8ccef3d, deepseek-chat)
- Open: 3 / Resolved: 0 / Ignored: 0

## Summary of the last run

(none)

## Issues

### ISSUE-0001 [Open] Mischaracterization of the condensation argument as taking an elementary substructure
- **Category:** Supplement/remark error
- **Location:** supplement / 高い視点から：自己相似性と凝縮
- **Detail:** The supplement says the proof of \ref{set:l-subsets-early} is based on taking a small elementary substructure containing $A\subseteq L_{\alpha}$ and collapsing it. But the actual proof (Step 2) uses \ref{set:reflection-transitive}, which produces a transitive set $M$ with $Y\subseteq M$ directly (via Löwenheim–Skolem plus Mostowski collapse), not an elementary substructure of $\mathbf{V}$ that is then collapsed. More importantly, the claim that the collapse yields $L_{\delta}$ with $\delta<\alpha^{+}$ 'by size constraints' is imprecise: the argument gives $|M|\le|\alpha|$ and $M=L_{o(M)}$, hence $o(M)<\alpha^{+}$; the identification $M=L_{o(M)}$ comes from $X^{M}$ (uniqueness of transitive models of $\mathbf{V}=\mathbf{L}$), not merely from condensation. The description conflates the reflection step with the condensation identification and is not an accurate account of the proof.
- **Proposed fix:** Replace with: 'The proof of \ref{set:l-subsets-early} reflects the finitely many axioms $X$ of $\ZF-\mathrm{P}+\mathbf{V}=\mathbf{L}$ to a transitive set $M\supseteq L_{\alpha}\cup\{A\}$ with $|M|\le|\alpha|$ (Löwenheim–Skolem plus Mostowski collapse, \ref{set:reflection-transitive}). Since $X^{M}$ holds, the uniqueness \ref{set:v-eq-l-models-unique} forces $M=L_{o(M)}$, and the size bound gives $o(M)<\alpha^{+}$. Thus $A\in L_{\alpha^{+}}$.'
- **Reported:** 2026-10-28 (8ccef3d)

### ISSUE-0002 [Open] Claim that L(κ)=H(κ) holds for singular κ attributed to Kunen exercise
- **Category:** Supplement/remark error
- **Location:** text after \ref{set:l-kappa-eq-h-kappa} proof
- **Detail:** The remark states that according to Kunen the lemma $L_{\kappa}=H(\kappa)$ also holds when $\kappa$ is singular. This is stated without proof and is a strong claim. In fact $L_{\kappa}=H(\kappa)$ requires $\kappa$ to be a cardinal (and the argument uses regularity to get $\sup\{\rho(a)+1\}<\kappa$). For singular $\kappa$ the equality can fail: e.g. if $\kappa=\aleph_{\omega}$, an element of $H(\kappa)$ built from a cofinal sequence may have rank $\ge\kappa$. The parenthetical '(not verified on this site)' does not excuse an unverified and likely false generalization.
- **Proposed fix:** Either delete the sentence, or replace with: 'The equality $L_{\kappa}=H(\kappa)$ uses regularity of $\kappa$ in the ($\supseteq$) direction to find $\alpha<\kappa$ with $A\subseteq L_{\alpha}$; for singular $\kappa$ the statement can fail.'
- **Reported:** 2026-10-28 (8ccef3d)

### ISSUE-0003 [Open] Gödel's eight functions: F_3 mislabeled
- **Category:** Supplement/remark error
- **Location:** supplement / paragraph on Gödel (1940)
- **Detail:** The text lists '$F_{3}(x,y)=x\setminus y$' among Gödel's eight basic functions. In Gödel's monograph the eight functions are $F_{1}(x,y)=\{x,y\}$, $F_{2}(x,y)=x\setminus y$, $F_{3}(x,y)=x\times\{y\}$ (or similar), etc.; the specific numbering '$F_{3}(x,y)=x\setminus y$' is inaccurate. This is a factual misattribution of the indexing.
- **Proposed fix:** Correct the indexing to match Gödel's actual list, e.g. '$F_{1}(x,y)=\{x,y\}$, $F_{2}(x,y)=x\setminus y$, ...' (eight functions), or state the functions without asserting a specific numbering.
- **Reported:** 2026-10-28 (8ccef3d)
