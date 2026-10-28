# Verification tracker: `01-foundations/06-category-theory/07-operads/05-eckmann-hilton.html`

<!-- source: 01-foundations/06-category-theory/07-operads/05-eckmann-hilton.html -->
<!-- Managed by scripts/verify.py (GitHub Actions). To dispute an [Open] issue, add a line starting with
     **Opus Rebuttal:** at the end of that issue and push; the next run judges it. Do not edit other lines. -->

- Last verified: 2026-10-28 (commit 10fede1, deepseek-chat)
- Open: 3 / Resolved: 0 / Ignored: 0

## Summary of the last run

(none)

## Issues

### ISSUE-0001 [Open] Hypcheck counterexample uses the same operation for both
- **Category:** Supplement/remark error
- **Location:** hypcheck (cat:sec-ekh-... hypcheck block)
- **Detail:** The hypcheck claims that without units the conclusion fails, giving the example $a\cdot b\defeq a$ and $a\ast b\defeq a$. But these are the *same* operation, so the conclusion 'the two operations coincide and are commutative' is actually satisfied (both equal the left projection, which is associative but not commutative). The example therefore does not show that the conclusion fails; it only shows that commutativity can fail, which is not what the Eckmann–Hilton conclusion asserts about the two operations coinciding. The parenthetical verification $(a\ast b)\cdot(c\ast d)=a=(a\cdot c)\ast(b\cdot d)$ is correct for the interchange law, but the conclusion drawn ('not commutative') is about the single operation, not about the two operations differing.
- **Proposed fix:** Replace with a genuine counterexample where the two operations differ: e.g. on a set $M$ with two distinct elements, let $a\cdot b\defeq a$ (left projection) and $a\ast b\defeq b$ (right projection). Both satisfy the interchange law $(a\ast b)\cdot(c\ast d)=c\ast d=d$ and $(a\cdot c)\ast(b\cdot d)=b\cdot d=b$? — verify: $(a\ast b)\cdot(c\ast d)=b\cdot d=b$ and $(a\cdot c)\ast(b\cdot d)=a\ast b=b$, so the law holds, yet $\cdot\neq\ast$. Hence without units the two operations need not coincide.
- **Reported:** 2026-10-28 (10fede1)

### ISSUE-0002 [Open] Supplement claim about one-sided homomorphism is vague/unsupported
- **Category:** Supplement/remark error
- **Location:** supplement (cat:sec-ekh-... supplement block)
- **Detail:** The supplement states that assuming only one side of '∗ is a homomorphism for ·' (e.g. an equation of the form $(a\ast b)\cdot c$) does not yield the conclusion. As written the claim is imprecise: the displayed form $(a\ast b)\cdot c$ is not a complete equation and does not specify a well-defined hypothesis, so the assertion cannot be checked and is not a precise mathematical statement.
- **Proposed fix:** State the precise weakened hypothesis and a concrete counterexample, e.g.: 'If instead of the full interchange law one assumes only $(a\ast b)\cdot(c\ast d)=(a\cdot c)\ast(b\cdot d)$ for $c=d=1$ (i.e. $a\ast b=a\cdot b$ only when one argument is the unit), the conclusion fails: on $M=\{0,1\}$ with $\cdot$ ordinary multiplication and $\ast$ defined by $a\ast b=0$ for all $a,b$, the restricted law holds but $\ast\neq\cdot$.'
- **Reported:** 2026-10-28 (10fede1)

### ISSUE-0003 [Open] Complexity count for checking interchange law
- **Category:** Supplement/remark error
- **Location:** supplement (cat:sec-ekh-... supplement block)
- **Detail:** The supplement says checking the interchange law on a finite set given by multiplication tables takes $|M|^{4}$ comparisons. The interchange law involves four variables $a,b,c,d$, so there are $|M|^{4}$ tuples, and each comparison is a constant-time table lookup; this count is correct. However the claim 'the search for units is $|M|^{2}$' is imprecise: finding a unit for one operation requires checking, for each candidate $e$ and each $a$, that $e\cdot a=a\cdot e=a$, which is $O(|M|^{2})$ per candidate and $O(|M|^{3})$ overall to search all candidates. As stated it understates the cost.
- **Proposed fix:** Correct to: 'checking the interchange law takes $|M|^{4}$ comparisons; verifying that a given element is a two-sided unit takes $2|M|$ checks, and searching over all candidates takes $O(|M|^{3})$.'
- **Reported:** 2026-10-28 (10fede1)
