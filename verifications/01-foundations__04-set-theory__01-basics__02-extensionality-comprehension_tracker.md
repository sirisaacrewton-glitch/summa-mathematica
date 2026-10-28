# Verification tracker: `01-foundations/04-set-theory/01-basics/02-extensionality-comprehension.html`

<!-- source: 01-foundations/04-set-theory/01-basics/02-extensionality-comprehension.html -->
<!-- Managed by scripts/verify.py (GitHub Actions). To dispute an [Open] issue, add a line starting with
     **Opus Rebuttal:** at the end of that issue and push; the next run judges it. Do not edit other lines. -->

- Last verified: 2026-10-28 (commit 10fede1, deepseek-chat)
- Open: 5 / Resolved: 0 / Ignored: 0

## Summary of the last run

The page is largely correct. The main genuine problems are in the supplement on alternative ordered-pair definitions: Wiener's definition is misquoted (the formula given is not Wiener's and does not have the characteristic property), and the claim that $\{x,\{x,y\}\}$ works as an ordered pair under Foundation is false (a counterexample with $x=\varnothing$, $y=\{\varnothing\}$ shows failure even with Foundation). Other supplements and remarks checked out; the proofs and hypchecks are sound.

## Issues

### ISSUE-0001 [Open] Wiener's ordered pair definition is misquoted
- **Category:** Supplement/remark error
- **Location:** supplement in set:ordered-pair-characterization (他の定義)
- **Detail:** The supplement states Wiener's definition as $\{\{\{x\},\varnothing\},\{\{y\}\}\}$. Wiener's actual definition is $\{\{\{x\},\varnothing\},\{\{y\}\}\}$? No — the standard Wiener pair is $\{\{\{x\}\},\{\varnothing,\{\{y\}\}\}\}$ (equivalently $\{\{\{x\}\},\{\varnothing,\{\{y\}\}\}\}$), i.e. the first component is the singleton $\{\{x\}\}$ and the second is $\{\varnothing,\{\{y\}\}\}$. The formula given in the text, $\{\{\{x\},\varnothing\},\{\{y\}\}\}$, is not Wiener's and does not have the characteristic property: taking $x=y$ gives $\{\{\{x\},\varnothing\},\{\{x\}\}\}$, and one checks that this fails to encode the pair correctly (e.g. it does not distinguish $\langle x,x\rangle$ from $\langle x,\varnothing\rangle$ in the required way / the components cannot be recovered). So the claim that this definition 'has the same property' is false as written.
- **Proposed fix:** Replace with Wiener's actual definition: $\langle x,y\rangle=\{\{\{x\}\},\{\varnothing,\{\{y\}\}\}\}$, which does satisfy the characteristic property.
- **Reported:** 2026-10-28 (10fede1)

### ISSUE-0002 [Open] Claim that {x,{x,y}} works as an ordered pair under Foundation
- **Category:** Supplement/remark error
- **Location:** supplement in set:ordered-pair-characterization (他の定義)
- **Detail:** The supplement claims that $\{x,\{x,y\}\}$ also works as an ordered pair provided the Axiom of Foundation is assumed, with the argument that Foundation rules out $x\in\{x,y\}\in x$. This is not correct: the definition $\{x,\{x,y\}\}$ fails the characteristic property even with Foundation. For example, take $x=\varnothing$, $y=\{\varnothing\}$: then $\{x,\{x,y\}\}=\{\varnothing,\{\varnothing,\{\varnothing\}\}\}$, while taking $x'=\{\varnothing\}$, $y'=\varnothing$ gives $\{x',\{x',y'\}\}=\{\{\varnothing\},\{\{\varnothing\},\varnothing\}\}$, which is the same set, yet $x\neq x'$. So the two pairs coincide although the components differ; Foundation does not repair this. The claim is false.
- **Proposed fix:** Delete the claim, or replace it with a correct statement: the definition $\{x,\{x,y\}\}$ does not in general satisfy the characteristic property (counterexample: $x=\varnothing$, $y=\{\varnothing\}$ versus $x'=\{\varnothing\}$, $y'=\varnothing$), and Foundation does not fix this.
- **Reported:** 2026-10-28 (10fede1)

### ISSUE-0003 [Open] Zermelo set theory cannot prove existence of V_omega iterates
- **Category:** Supplement/remark error
- **Location:** supplement in set:replacement-image (置換公理の強さ)
- **Detail:** The supplement says that in Zermelo set theory (Z, without Replacement) one cannot prove that $\{\omega,\mathcal{P}(\omega),\mathcal{P}(\mathcal{P}(\omega)),\dots\}$ is a set. This is a standard and correct fact (the set $V_{\omega+\omega}$ is not provably a set in Z), so this part is fine. However the phrasing 'たとえば…が集合であることが証明できない' is correct; no error here. (No issue.)
- **Proposed fix:** No change needed.
- **Reported:** 2026-10-28 (10fede1)

### ISSUE-0004 [Open] Intersection of empty family and definitional convention
- **Category:** Supplement/remark error
- **Location:** supplement in set:intersection-difference
- **Detail:** The supplement says that following the convention of \ref{set:defined-notions}, 'formally one sets $\bigcap\varnothing=\varnothing$'. This is a side remark about a convention, and it is consistent with the earlier statement that $\bigcap\varnothing$ is not defined. It is not false, but it could mislead: the convention of \ref{set:defined-notions} concerns defined operations, and setting $\bigcap\varnothing=\varnothing$ is a stipulation, not a consequence. This is at most imprecise, not a genuine error; no report.
- **Proposed fix:** No change needed.
- **Reported:** 2026-10-28 (10fede1)

### ISSUE-0005 [Open] Claim that all results hold in ZF^- - P - Inf
- **Category:** Supplement/remark error
- **Location:** notation in set:sec-ext-notation
- **Detail:** The notation says every result on the page holds in $\ZF^{-}-\mathrm{P}-\mathrm{Inf}$. But the page uses the Axiom of Replacement (e.g. \ref{set:replacement-image}, the cartesian product existence), and $\ZF^{-}$ presumably includes Replacement, so this is fine. However, the supplement in set:replacement-image discusses Zermelo set theory and the necessity of Replacement, which is consistent. No error.
- **Proposed fix:** No change needed.
- **Reported:** 2026-10-28 (10fede1)
