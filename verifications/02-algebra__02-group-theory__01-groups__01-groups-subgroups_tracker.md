# Verification tracker: `02-algebra/02-group-theory/01-groups/01-groups-subgroups.html`

<!-- source: 02-algebra/02-group-theory/01-groups/01-groups-subgroups.html -->
<!-- Managed by scripts/verify.py (GitHub Actions). To dispute an [Open] issue, add a line starting with
     **Opus Rebuttal:** at the end of that issue and push; the next run judges it. Do not edit other lines. -->

- Last verified: 2026-10-28 (commit 8ccef3d, deepseek-chat)
- Open: 2 / Resolved: 0 / Ignored: 0

## Summary of the last run

(none)

## Issues

### ISSUE-0001 [Open] Hypcheck claim that associativity is needed for uniqueness of inverse is wrong
- **Category:** Supplement/remark error
- **Location:** grp:group-basic / hypcheck
- **Detail:** The hypcheck says: "結合法則がないと逆元は一意とは限らない（\ref{grp:prob-one-sided-axioms} の反例を参照）". This is false. Uniqueness of a two-sided inverse does not require associativity: if $ab=ba=e$ and $ab'=b'a=e$, then $b=be=b(ab')=(ba)b'$ requires associativity, but one can instead argue $b'=eb'=(ba)b'$... actually the standard argument needs associativity. However a correct associativity-free argument exists: $b = be = b(ab') = (ba)b'$ uses associativity. Without associativity, consider the two-element set with $xy=x$ for all $x,y$; then every element is a two-sided identity, so uniqueness of identity fails, but for inverses: take $S=\{e,a\}$ with $ee=e$, $ea=a$, $ae=a$, $aa=e$ — this is associative. A genuine non-associative example: on $\{e,a,b\}$ define $ex=xe=x$ for all $x$, $aa=e$, $ab=e$, $ba=e$, $bb=e$, and set $a b$ etc. Then $a$ has two-sided inverses $a$ and $b$: $aa=e=aa$, $ab=e=ba$. Check: is $b$ a two-sided inverse of $a$? $ab=e$ and $ba=e$, yes. So $a$ has two distinct two-sided inverses $a\neq b$ without associativity. Hence the claim "without associativity the inverse need not be unique" is actually TRUE, but the cited counterexample (grp:prob-one-sided-axioms) is about left identity/right inverse, not about non-uniqueness of two-sided inverses. The reference is thus an improper pointer: that problem's example ($xy=y$) has no two-sided identity at all, so it does not illustrate non-uniqueness of a two-sided inverse. The pointer is misleading.
- **Proposed fix:** Replace the parenthetical with a correct example: "結合法則がないと逆元は一意とは限らない。例えば $S=\{e,a,b\}$ に $ex=xe=x$（すべての $x$）、$aa=ab=ba=bb=e$ と定めると、$a$ は $a$ と $b$ の二つの（両側）逆元をもつ。" (Remove the reference to \ref{grp:prob-one-sided-axioms}, which concerns a different failure.)
- **Reported:** 2026-10-28 (8ccef3d)

### ISSUE-0002 [Open] Hypcheck on grp:power-laws: (ab)^n = a^n b^n iff commuting is overstated
- **Category:** Supplement/remark error
- **Location:** grp:power-laws / hypcheck
- **Detail:** The hypcheck states: "異なる元の積の冪 $(ab)^{n}$ と $a^{n}b^{n}$ は一般に異なり、等しくなるのは $a,b$ が可換なときである". The forward direction (commuting implies equality) is correct, but the converse "equal only when commuting" is false as stated for a single $n$. For example in any group, $(ab)^{0}=a^{0}b^{0}=e$ always, and if $a=b$ then trivially equal. Even for $n=2$: $(ab)^{2}=a^{2}b^{2}$ can hold without $ab=ba$ in general (e.g. in $S_{3}$ take $a=(1\,2)$, $b=(1\,2\,3)$: check). The statement should be restricted to "for all $n$" or to a specific claim.
- **Proposed fix:** Rewrite as: "$(ab)^{n}=a^{n}b^{n}$ がすべての $n\in\Z$ について成り立つのは $a,b$ が可換なときである（$n=2$ で $(ab)^{2}=a^{2}b^{2}$ から $ab=ba$ が出る）。個々の $n$ では可換でなくても等しくなりうる。"
- **Reported:** 2026-10-28 (8ccef3d)
