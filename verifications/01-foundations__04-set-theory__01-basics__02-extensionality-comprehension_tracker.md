# Verification tracker: `01-foundations/04-set-theory/01-basics/02-extensionality-comprehension.html`

<!-- source: 01-foundations/04-set-theory/01-basics/02-extensionality-comprehension.html -->
<!-- Managed by scripts/verify.py (GitHub Actions). To dispute an [Open] issue, add a line starting with
     **Opus Rebuttal:** at the end of that issue and push; the next run judges it. Do not edit other lines. -->

- Last verified: 2026-10-28 (commit 8ccef3d, deepseek-chat)
- Open: 2 / Resolved: 0 / Ignored: 0

## Summary of the last run

The page is largely correct: the proofs of the empty set, Russell's argument, the image set proposition, the ordered-pair characterization, and the cartesian product existence are sound, and the hypchecks correctly track the axioms used. The main genuine problem is in the ordered-pair supplement: Wiener's definition is misquoted (the formula given does not have the characteristic property). A secondary, lower-confidence imprecision concerns the justification for using $\{x,\{x,y\}\}$ under Foundation. The remaining supplements (naive comprehension contradiction, $\bigcap\varnothing$, Replacement strength, power-set construction of the product) were checked and found acceptable.

## Issues

### ISSUE-0001 [Open] Wiener's ordered pair definition is misstated
- **Category:** Supplement/remark error
- **Location:** supplement in set:sec-ordered-pair (他の定義)
- **Detail:** The supplement gives Wiener's definition as $\{\{\{x\},\varnothing\},\{\{y\}\}\}$. Wiener's actual definition is $\{\{\{x\}\},\{\varnothing,\{y\}\}\}$ (equivalently $\{\{\{x\}\},\{\varnothing,\{y\}\}\}$). The stated formula does not have the characteristic property: e.g. with $x=y=\varnothing$ it gives $\{\{\{\varnothing\},\varnothing\},\{\{\varnothing\}\}\}$, and one can check it fails to encode the components correctly (the second component is not recoverable in the intended way). The claim that this formula 'has the same property' is false as written.
- **Proposed fix:** Replace with Wiener's actual definition: $\langle x,y\rangle=\{\{\{x\}\},\{\varnothing,\{y\}\}\}$, which does satisfy the characteristic property.
- **Reported:** 2026-10-28 (8ccef3d)

### ISSUE-0002 [Open] Claim that {x,{x,y}} works as ordered pair under Foundation needs the correct argument
- **Category:** Supplement/remark error
- **Location:** supplement in set:sec-ordered-pair (他の定義)
- **Detail:** The supplement says $\{x,\{x,y\}\}$ works as an ordered pair assuming Foundation, and justifies it by excluding '$x\in\{x,y\}\in x$'. This is essentially correct but the stated obstruction is imprecise: the failure case for $\{x,\{x,y\}\}=\{x',\{x',y'\}\}$ is when $x=\{x',y'\}$ and $\{x,y\}=x'$, which yields $x\in x'\in x$ (a 2-cycle), excluded by Foundation. The remark as phrased ('$x\in\{x,y\}\in x$') is not exactly the cycle that arises. This is a minor imprecision rather than a falsehood, so it is borderline; flagging at medium confidence.
- **Proposed fix:** State the argument precisely: if $\{x,\{x,y\}\}=\{x',\{x',y'\}\}$ and $x\neq x'$, then necessarily $x=\{x',y'\}$ and $\{x,y\}=x'$, whence $x\in x'\in x$, contradicting Foundation; hence $x=x'$ and then $\{x,y\}=\{x',y'\}$, giving $y=y'$.
- **Reported:** 2026-10-28 (8ccef3d)
