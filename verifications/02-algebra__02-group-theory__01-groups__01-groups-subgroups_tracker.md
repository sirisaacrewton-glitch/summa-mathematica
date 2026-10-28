# Verification tracker: `02-algebra/02-group-theory/01-groups/01-groups-subgroups.html`

<!-- source: 02-algebra/02-group-theory/01-groups/01-groups-subgroups.html -->
<!-- Managed by scripts/verify.py (GitHub Actions). To dispute an [Open] issue, add a line starting with
     **Opus Rebuttal:** at the end of that issue and push; the next run judges it. Do not edit other lines. -->

- Last verified: 2026-10-28 (commit 10fede1, deepseek-chat)
- Open: 21 / Resolved: 0 / Ignored: 0

## Summary of the last run

The page is largely correct. The main genuine issue is the hypcheck in grp:group-basic, which cites grp:prob-one-sided-axioms as an example of non-unique inverses without associativity, but that counterexample is associative and does not support the claim. There are also minor imprecisions in the hypcheck of grp:power-laws and the remark grp:semigroup-monoid regarding the scope of exponent laws in monoids, and the claim that (ab)^n = a^n b^n only when a,b commute is false for n=0,1. All other supplements, remarks, and stated facts checked out as correct.

## Issues

### ISSUE-0001 [Open] Hypcheck claim that inverse uniqueness fails without associativity
- **Category:** Supplement/remark error
- **Location:** grp:group-basic / hypcheck
- **Detail:** The hypcheck says: "結合法則がないと逆元は一意とは限らない（\ref{grp:prob-one-sided-axioms} の反例を参照）". But the cited counterexample (operation xy=y) is a semigroup (associative) and is used to show that left identity + right inverse does not give a group; it is not an example of non-unique inverses without associativity. Moreover, the claim itself is imprecise: without associativity, a two-sided inverse relative to a fixed two-sided identity need not be unique, but the cited reference does not support this, and the pointer is misleading.
- **Proposed fix:** Replace with: "結合法則を仮定しないと、両側単位元に関する逆元は一意とは限らない（例：二元集合 {e,a} に ea=a, ae=e, aa=a, ee=e を入れると a は自分自身の逆元をもつが、別の逆元も構成できる）。なお \ref{grp:prob-one-sided-axioms} の反例は、左単位元と右逆元だけでは群にならない例である。"
- **Reported:** 2026-10-28 (10fede1)

### ISSUE-0002 [Open] Hypcheck overstates that power laws hold in any monoid for N exponents
- **Category:** Supplement/remark error
- **Location:** grp:power-laws / hypcheck
- **Detail:** The hypcheck states that in a monoid, for m,n in N, parts 1 and 3 hold "同じ証明（Step 3 の前半と Step 5）で成り立つ". This is correct for part 1 and for part 3 when the outer exponent n is in N, but part 3 with m in N and n in N is fine; however the phrasing "1 と 3" together with the earlier remark (grp:semigroup-monoid) saying "冪の指数法則は指数を N に限ればモノイドで成り立つ" is slightly too strong: part 2 (inverse) requires inverses, and part 3 requires the base to have nonnegative exponent only, which is fine. The real issue is the remark grp:semigroup-monoid: it says the exponent laws hold in a monoid when exponents are restricted to N, but part 2, (a^m)^{-1}=a^{-m}, is not an N-exponent statement and requires inverses. As stated it is acceptable if read as parts 1 and 3 only, but it is imprecise.
- **Proposed fix:** In grp:semigroup-monoid, change to: "冪の指数法則のうち a^{m+n}=a^{m}a^{n} と (a^{m})^{n}=a^{mn}（m,n\in\N）はモノイドで成り立つ。逆元を用いる (a^{m})^{-1}=a^{-m} や負の指数は群を要する。"
- **Reported:** 2026-10-28 (10fede1)

### ISSUE-0003 [Open] Hypcheck counterexample for dropping commutativity uses (rs)^2=e but r^2 s^2=r^2
- **Category:** Supplement/remark error
- **Location:** grp:power-commuting / hypcheck
- **Detail:** The hypcheck says: "\ref{grp:dihedral-group} の r,s では (rs)^{2}=e だが r^{2}s^{2}=r^{2}\neq e（n\ge 3）". Check: in D_n, s^2=e, so r^2 s^2 = r^2. And (rs)^2 = rsrs = r(srs) = r r^{-1} = e. So indeed (rs)^2=e and r^2 s^2 = r^2 ≠ e for n≥3. This is correct. No issue.
- **Proposed fix:** No change needed.
- **Reported:** 2026-10-28 (10fede1)

### ISSUE-0004 [Open] Hypcheck in grp:general-associativity claims non-commutative example rs≠sr from dihedral group
- **Category:** Supplement/remark error
- **Location:** grp:general-associativity / hypcheck
- **Detail:** The hypcheck says: "非可換群では ab≠ba となる元がある（\ref{grp:dihedral-group} の rs≠sr）". In D_n, rs ≠ sr for n≥3 (since sr = r^{-1}s = r^{n-1}s and rs, distinct as n-1≠1). This is correct. No issue.
- **Proposed fix:** No change needed.
- **Reported:** 2026-10-28 (10fede1)

### ISSUE-0005 [Open] Hypcheck in grp:subgroup-criterion claims empty set satisfies condition 2 vacuously
- **Category:** Supplement/remark error
- **Location:** grp:subgroup-criterion / hypcheck
- **Detail:** The hypcheck says: "\emptyset は 2 の後半を（空虚に）みたすが部分群ではない". Condition 2 is "H≠∅ で、a,b∈H なら ab^{-1}∈H". The empty set fails the first clause H≠∅, so it does not satisfy condition 2 as a whole. The statement "satisfies the second half vacuously" is technically true (the implication is vacuous), and the point is that H≠∅ is needed. This is correct and not misleading. No issue.
- **Proposed fix:** No change needed.
- **Reported:** 2026-10-28 (10fede1)

### ISSUE-0006 [Open] Hypcheck in grp:subgroup-finite-criterion uses N⊆Z as counterexample but N is not a subset closed under the group operation of Z in the required sense
- **Category:** Supplement/remark error
- **Location:** grp:subgroup-finite-criterion / hypcheck
- **Detail:** The hypcheck says: "外すと偽：\N\subseteq\Z は空でなく和で閉じるが、1 の逆元 -1 を含まない". Here Z is the additive group, N is closed under addition and nonempty, but not a subgroup since it lacks inverses. This is a correct counterexample to the statement without finiteness. No issue.
- **Proposed fix:** No change needed.
- **Reported:** 2026-10-28 (10fede1)

### ISSUE-0007 [Open] Hypcheck in grp:dihedral-order about n=2 and Klein four group
- **Category:** Supplement/remark error
- **Location:** grp:dihedral-order / hypcheck
- **Detail:** The hypcheck says: "n=2 では s(i)=r_{n}(-i)=i で s=e となり、\ang{r,s} は位数 2 になる（D_{2} をクラインの四元群と定める流儀もあるが、ここでは n\ge 3 に限る）". For n=2, Z/2Z={0,1}, s(0)=0, s(1)=r_2(-1)=r_2(1)=1, so s=id, and r has order 2, so <r,s> has order 2. Correct. The remark about the Klein four group convention is a standard alternative convention (D_2 ≅ V_4 in some conventions where D_n has order 2n and n=2 gives V_4). Actually with the convention |D_n|=2n, D_2 would have order 4 and be V_4; here the definition uses n≥3 and the geometric definition, so for n=2 the geometric definition degenerates. The statement is accurate. No issue.
- **Proposed fix:** No change needed.
- **Reported:** 2026-10-28 (10fede1)

### ISSUE-0008 [Open] Claim that Q is not cyclic via <p/q>=(p/q)Z
- **Category:** Unsupported fact
- **Location:** example after grp:cyclic-subgroup-powers
- **Detail:** The example states: "\Q は巡回群でない：\ang{p/q}=(p/q)\Z は p/(2q) を含まない（p\neq 0 のとき）。また \ang{0}=\{0\}\neq\Q". This is correct: the cyclic subgroup generated by p/q in (Q,+) is (p/q)Z, which does not contain p/(2q) when p≠0. And <0>={0}. So Q is not cyclic. No issue.
- **Proposed fix:** No change needed.
- **Reported:** 2026-10-28 (10fede1)

### ISSUE-0009 [Open] Claim that μ_n elements are e^{2πik/n} from polar form
- **Category:** Unsupported fact
- **Location:** example after grp:cyclic-subgroup-powers
- **Detail:** The example states: "\mu_{n}=\ang{e^{2\pi i/n}} も位数 n の巡回群（\mu_{n} の元は e^{2\pi ik/n}（0\le k<n）の n 個であることは複素数の極形式から従う）". This is correct: the n-th roots of unity are exactly e^{2πik/n}. No issue.
- **Proposed fix:** No change needed.
- **Reported:** 2026-10-28 (10fede1)

### ISSUE-0010 [Open] Claim in grp:semigroup-monoid that (N,+) is a monoid but not a group
- **Category:** Unsupported fact
- **Location:** grp:semigroup-monoid
- **Detail:** The remark says: "(\N,+) はモノイドだが、1 に逆元がないので群ではない". Correct: N={0,1,2,...} under addition has identity 0, is associative, but 1 has no inverse in N. No issue.
- **Proposed fix:** No change needed.
- **Reported:** 2026-10-28 (10fede1)

### ISSUE-0011 [Open] Claim in grp:general-associativity hypcheck that subtraction on Z gives B(1,1,1)={-1,1}
- **Category:** Unsupported fact
- **Location:** grp:general-associativity / hypcheck
- **Detail:** The hypcheck says: "\Z 上の減法 a\ast b\defeq a-b では (1\ast 1)\ast 1=-1, 1\ast(1\ast 1)=1 で、B(1,1,1)=\{-1,1\} は一元集合でない". Check: (1*1)*1 = (1-1)-1 = -1; 1*(1*1) = 1-(1-1) = 1. So B(1,1,1) contains -1 and 1. Are there other bracketings? For three elements there are only two bracketings. So B(1,1,1)={-1,1}. Correct. No issue.
- **Proposed fix:** No change needed.
- **Reported:** 2026-10-28 (10fede1)

### ISSUE-0012 [Open] Claim in grp:power-commuting hypcheck that (rs)^2=e but r^2 s^2=r^2≠e
- **Category:** Unsupported fact
- **Location:** grp:power-commuting / hypcheck
- **Detail:** Already checked above; correct.
- **Proposed fix:** No change needed.
- **Reported:** 2026-10-28 (10fede1)

### ISSUE-0013 [Open] Claim in grp:subgroup-criterion hypcheck that empty set satisfies condition 2 vacuously
- **Category:** Unsupported fact
- **Location:** grp:subgroup-criterion / hypcheck
- **Detail:** Already checked; correct.
- **Proposed fix:** No change needed.
- **Reported:** 2026-10-28 (10fede1)

### ISSUE-0014 [Open] Claim in grp:subgroup-finite-criterion hypcheck that N⊆Z is a counterexample
- **Category:** Unsupported fact
- **Location:** grp:subgroup-finite-criterion / hypcheck
- **Detail:** Already checked; correct.
- **Proposed fix:** No change needed.
- **Reported:** 2026-10-28 (10fede1)

### ISSUE-0015 [Open] Claim in grp:dihedral-order hypcheck about n=2
- **Category:** Unsupported fact
- **Location:** grp:dihedral-order / hypcheck
- **Detail:** Already checked; correct.
- **Proposed fix:** No change needed.
- **Reported:** 2026-10-28 (10fede1)

### ISSUE-0016 [Open] Claim in grp:power-laws hypcheck that (ab)^n and a^n b^n differ unless a,b commute
- **Category:** Unsupported fact
- **Location:** grp:power-laws / hypcheck
- **Detail:** The hypcheck says: "異なる元の積の冪 (ab)^{n} と a^{n}b^{n} は一般に異なり、等しくなるのは a,b が可換なときである（\ref{grp:power-commuting}）". This is slightly overstated: (ab)^n = a^n b^n for all n does not imply a and b commute in general (e.g., in a group of exponent 2, all elements commute anyway; but there are groups where (ab)^n = a^n b^n for a specific n without commutativity). The statement "等しくなるのは a,b が可換なときである" is too strong as a general claim. For example, in any group, (ab)^0 = a^0 b^0 = e always, even if a,b don't commute. Also for n=1, (ab)^1 = a^1 b^1 always. So the claim is false for n=0,1. The intended meaning is likely "for all n" or "for general n", but as stated it is imprecise.
- **Proposed fix:** Change to: "異なる元の積の冪 (ab)^{n} と a^{n}b^{n} は一般に異なる（n=0,1 を除く）。a,b が可換ならすべての n で等しい（\ref{grp:power-commuting}）。"
- **Reported:** 2026-10-28 (10fede1)

### ISSUE-0017 [Open] Claim in grp:power-commuting hypcheck that (rs)^2=e but r^2 s^2=r^2≠e
- **Category:** Unsupported fact
- **Location:** grp:power-commuting / hypcheck
- **Detail:** Already checked; correct.
- **Proposed fix:** No change needed.
- **Reported:** 2026-10-28 (10fede1)

### ISSUE-0018 [Open] Claim in grp:general-associativity hypcheck that non-commutative group has ab≠ba
- **Category:** Unsupported fact
- **Location:** grp:general-associativity / hypcheck
- **Detail:** Already checked; correct.
- **Proposed fix:** No change needed.
- **Reported:** 2026-10-28 (10fede1)

### ISSUE-0019 [Open] Claim in grp:group-basic hypcheck that without associativity inverse uniqueness fails
- **Category:** Unsupported fact
- **Location:** grp:group-basic / hypcheck
- **Detail:** The hypcheck says: "結合法則がないと逆元は一意とは限らない（\ref{grp:prob-one-sided-axioms} の反例を参照）". As noted above, the cited counterexample is associative and does not illustrate non-uniqueness of inverses. This is a genuine improper link / misleading reference.
- **Proposed fix:** Replace with a correct example or remove the reference. For instance: "結合法則を仮定しないと、両側単位元に関する逆元は一意とは限らない（例：集合 {e,a,b} に ee=e, ea=a, eb=b, ae=e, aa=a, ab=b, be=e, ba=b, bb=a を入れると、a は b と a の両方を逆元にもつ）。"
- **Reported:** 2026-10-28 (10fede1)

### ISSUE-0020 [Open] Claim in grp:semigroup-monoid that exponent laws hold in monoid for N exponents
- **Category:** Unsupported fact
- **Location:** grp:semigroup-monoid
- **Detail:** The remark says: "冪の指数法則は指数を \N に限ればモノイドで成り立つ". This is true for parts 1 and 3 (with nonnegative exponents), but part 2 involves inverses and is not an N-exponent statement. The phrasing is acceptable if interpreted as parts 1 and 3 only, but it is imprecise because the proposition grp:power-laws includes part 2 which requires inverses. This is a minor imprecision.
- **Proposed fix:** Change to: "冪の指数法則のうち a^{m+n}=a^{m}a^{n} と (a^{m})^{n}=a^{mn}（m,n\in\N）はモノイドで成り立つ。"
- **Reported:** 2026-10-28 (10fede1)

### ISSUE-0021 [Open] Claim in grp:power-laws hypcheck that (ab)^n and a^n b^n differ unless a,b commute
- **Category:** Unsupported fact
- **Location:** grp:power-laws / hypcheck
- **Detail:** As noted above, the statement is imprecise for n=0,1. This is a minor issue.
- **Proposed fix:** Change to: "異なる元の積の冪 (ab)^{n} と a^{n}b^{n} は一般に異なる（n=0,1 を除く）。a,b が可換ならすべての n で等しい（\ref{grp:power-commuting}）。"
- **Reported:** 2026-10-28 (10fede1)
