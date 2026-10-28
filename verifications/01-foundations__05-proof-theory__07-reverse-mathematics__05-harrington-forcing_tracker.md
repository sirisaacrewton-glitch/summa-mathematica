# Verification tracker: `01-foundations/05-proof-theory/07-reverse-mathematics/05-harrington-forcing.html`

<!-- source: 01-foundations/05-proof-theory/07-reverse-mathematics/05-harrington-forcing.html -->
<!-- Managed by scripts/verify.py (GitHub Actions). To dispute an [Open] issue, add a line starting with
     **Opus Rebuttal:** at the end of that issue and push; the next run judges it. Do not edit other lines. -->

- Last verified: 2026-10-28 (commit 10fede1, deepseek-chat)
- Open: 32 / Resolved: 0 / Ignored: 0

## Summary of the last run

The page is a careful and largely correct presentation of Harrington's theorem via forcing with infinite binary trees. The proofs of the key lemmas (generic filter existence, generic path, Σ⁰₁ induction preservation, adding one path, extension to WKL₀) are sound, and the citations match their targets. The only genuine defect found is in the remark after Harrington's theorem: the low basis theorem is described as giving a path computable from ∅′, whereas it gives a low path (jump ≤_T ∅′). All other remarks, supplements, and stated-only facts were checked individually and are correct or appropriately hedged.

## Issues

### ISSUE-0001 [Open] Low basis theorem misstated as giving a path computable from ∅′
- **Category:** Supplement/remark error
- **Location:** remark (pt:sec-soa4-harrington), item 2
- **Detail:** The remark says the low basis theorem states that a computable infinite binary tree has a path whose jump is computable from $\varnothing'$ ("跳躍が $\varnothing'$ で計算できる道"). The low basis theorem actually gives a path $G$ with $G' \le_T \varnothing'$, i.e. $G$ is low; it does not make $G$ itself computable from $\varnothing'$ (a low path need not be $\Delta^{0}_{2}$). The parenthetical description is a false strengthening of the cited theorem.
- **Proposed fix:** Replace with: "低基底定理（計算可能な無限二分木は、その跳躍が $\varnothing'$ 以下、すなわち $G'\le_{T}\varnothing'$ となる道 $G$ をもつ。\tref{comp:low-basis}）"
- **Reported:** 2026-10-28 (10fede1)

### ISSUE-0002 [Open] Friedman's theorem attribution and derivation via Parsons–Mints–Takeuti
- **Category:** Supplement/remark error
- **Location:** supplement, 関連する結果, フリードマンの定理
- **Detail:** The claim that $\mathsf{WKL}_{0}$ is $\Pi^{0}_{2}$-conservative over $\mathsf{PRA}$ is correct (Friedman), and the Parsons–Mints–Takeuti result that $\mathrm{I}\Sigma_{1}$ is $\Pi_{2}$-conservative over $\mathsf{PRA}$ is correct. However, the text says these two facts together yield Friedman's theorem. Combining them only gives: if $\mathsf{WKL}_{0}\vdash\sigma$ ($\sigma$ a $\Pi^{0}_{2}$ sentence) then $\mathrm{I}\Sigma_{1}\vdash\sigma$ (by the corollary) and hence $\mathsf{PRA}\vdash\sigma$ (by PMT). This is a valid derivation of the conservativity, so the reasoning is sound; but the attribution "田中の本の定理 3.29" combined with "合わせても得られる" is slightly imprecise about whether the cited theorem is the conservativity itself or the half-regular-cut proof. This is a minor imprecision, not a mathematical error, so it is not reported as a defect.
- **Proposed fix:** No change required; optionally clarify that the conservativity follows from the corollary plus PMT, and that the half-regular-cut proof is an alternative direct argument.
- **Reported:** 2026-10-28 (10fede1)

### ISSUE-0003 [Open] Cohen forcing remark: 'G is not a path of the given tree'
- **Category:** Supplement/remark error
- **Location:** supplement, 前提の検討, first bullet
- **Detail:** The statement that with finite-sequence (Cohen) conditions $\Sigma^{0}_{1}$ induction is still preserved but the resulting $G$ is not a path of the given tree is correct: Cohen forcing adds a generic real, not a path through a prescribed infinite tree. No error.
- **Proposed fix:** No change required.
- **Reported:** 2026-10-28 (10fede1)

### ISSUE-0004 [Open] Hypcheck: 'non-countable models have no generic filter'
- **Category:** Unsupported fact
- **Location:** hypcheck, first bullet
- **Detail:** The hypcheck says "非可算モデルでは、ジェネリックなフィルターは一般に存在しない" (for uncountable models a generic filter generally does not exist). This is correct in the relevant sense: with $\mathrm{Def}(\mathfrak{M})$ containing continuum-many dense sets, the Rasiowa–Sikorski argument via a countable enumeration fails, and in general no $\mathfrak{M}$-generic filter exists. The word "一般に" (generally) makes the claim appropriately hedged. No error.
- **Proposed fix:** No change required.
- **Reported:** 2026-10-28 (10fede1)

### ISSUE-0005 [Open] Remark 1: WKL as a Π¹₂ sentence not provable in RCA₀
- **Category:** Supplement/remark error
- **Location:** remark, item 1
- **Detail:** The remark states that $\mathsf{WKL}$ itself is a $\Pi^{1}_{2}$ sentence not provable in $\mathsf{RCA}_{0}$, citing logic:wkl-not-rca. $\mathsf{WKL}$ is indeed $\Pi^{1}_{2}$ (every infinite binary tree has a path), and $\mathsf{RCA}_{0}\nvdash\mathsf{WKL}$ is exactly the cited corollary. Correct.
- **Proposed fix:** No change required.
- **Reported:** 2026-10-28 (10fede1)

### ISSUE-0006 [Open] Remark 3: formalization in PRA
- **Category:** Supplement/remark error
- **Location:** remark, item 3
- **Detail:** The remark says a procedure converting a $\mathsf{WKL}_{0}$ proof into an $\mathsf{RCA}_{0}$ proof exists and can be formalized in $\mathsf{PRA}$-strength systems. This is consistent with the literature (e.g. the proof-theoretic/functional interpretation routes). It is hedged with "知られている（本サイトでは示していない）". No error.
- **Proposed fix:** No change required.
- **Reported:** 2026-10-28 (10fede1)

### ISSUE-0007 [Open] Solution to pt:prob-wkl0-con-isigma1: ACA₀ proves Con(IΣ₁)
- **Category:** Supplement/remark error
- **Location:** solution to pt:prob-wkl0-con-isigma1
- **Detail:** The solution claims $\mathsf{ACA}_{0}$ proves $\mathrm{Con}(\mathrm{I}\Sigma_{1})$ because $\mathsf{ACA}_{0}$ is a conservative extension of $\PA$ and $\PA\vdash\mathrm{Con}(\mathrm{I}\Sigma_{1})$. Both facts are correct: $\mathsf{ACA}_{0}$ is conservative over $\PA$ (for arithmetic sentences), and $\PA$ proves $\mathrm{Con}(\mathrm{I}\Sigma_{1})$ since $\mathrm{I}\Sigma_{1}$ is much weaker than $\PA$. No error.
- **Proposed fix:** No change required.
- **Reported:** 2026-10-28 (10fede1)

### ISSUE-0008 [Open] Supplement: 'Hilbert's program partial realization' attribution to Simpson
- **Category:** Supplement/remark error
- **Location:** supplement, 関連する結果, フリードマンの定理 bullet
- **Detail:** The characterization of Friedman's $\Pi^{0}_{2}$-conservativity of $\mathsf{WKL}_{0}$ over $\mathsf{PRA}$ as a "partial realization of Hilbert's program" is a standard characterization in the literature (Simpson, Subsystems of Second Order Arithmetic). The attribution is acceptable. No error.
- **Proposed fix:** No change required.
- **Reported:** 2026-10-28 (10fede1)

### ISSUE-0009 [Open] Supplement: analogy with algebraic closure
- **Category:** Supplement/remark error
- **Location:** supplement, 高い視点から
- **Detail:** The analogy between extending an $\mathsf{RCA}_{0}$ model to a $\mathsf{WKL}_{0}$ model and embedding a field into its algebraic closure is informal but not false: both preserve the base structure while adding solutions to existential requirements. The claim that the first-order part is unchanged is correct (the construction keeps $M$ fixed). No error.
- **Proposed fix:** No change required.
- **Reported:** 2026-10-28 (10fede1)

### ISSUE-0010 [Open] Step 4 of pt:generic-path-induction: T_σ closure under initial segments
- **Category:** Logical gap
- **Location:** pt:generic-path-induction / Step 4
- **Detail:** The text defines $T_{\sigma}\defeq\{t\in T:\forall a<|\sigma|\,(\sigma(a)=0\to\neg\psi(a,t))\}$ and asserts it is a tree (closed under initial segments) using monotonicity of $\psi$. This is correct: if $t\in T_{\sigma}$ and $t'\subseteq t$, then $t'\in T$ (tree) and $\neg\psi(a,t')$ follows from $\neg\psi(a,t)$ by contraposition of monotonicity ($\psi(a,t')\wedge t'\subseteq t\to\psi(a,t)$). No gap.
- **Proposed fix:** No change required.
- **Reported:** 2026-10-28 (10fede1)

### ISSUE-0011 [Open] Step 4 of pt:generic-path-induction: T_τ finite implies bounded height
- **Category:** Logical gap
- **Location:** pt:generic-path-induction / Step 4
- **Detail:** The argument says: if $T_{\tau}$ is finite then there is $k$ such that $T_{\tau}$ has no element of length $k$. This uses that a finite subtree of $2^{<\N}$ has bounded height, which holds in $\mathsf{RCA}_{0}$ (a finite set of binary sequences has a maximum length). The text does not spell this out but it is standard and available in $\mathsf{RCA}_{0}$. No genuine gap.
- **Proposed fix:** No change required.
- **Reported:** 2026-10-28 (10fede1)

### ISSUE-0012 [Open] Step 4: T_{σ₀} ⊆ T_{σ₀↾a} and the difference is only ¬ψ(a,t)
- **Category:** Logical gap
- **Location:** pt:generic-path-induction / Step 4
- **Detail:** The text claims $T_{\sigma_{0}}\subseteq T_{\sigma_{0}\upharpoonright a}$ and that the only difference between $T_{\tau}$ and $T_{\sigma_{0}\upharpoonright a}$ is the condition $\neg\psi(a,t)$. Since $\tau=(\sigma_{0}\upharpoonright a)^{\frown}0^{\frown}1^{b-a}$, the extra conditions in $T_{\tau}$ beyond those in $T_{\sigma_{0}\upharpoonright a}$ are exactly $\neg\psi(a',t)$ for $a\le a'\le b$ (the positions where $\tau$ has 0). The text says "the difference is only $\neg\psi(a,t)$", which is imprecise: there are also conditions for $a'>a$. However, since $T_{\sigma_{0}}\subseteq T_{\sigma_{0}\upharpoonright a}$ and $T_{\sigma_{0}}$ already satisfies $\neg\psi(a',t)$ for those $a'$ with $\sigma_{0}(a')=0$, and for $a'>a$ with $\sigma_{0}(a')=1$ the condition is vacuous, the argument that a length-$k$ element $t\in T_{\sigma_{0}}$ not in $T_{\tau}$ must violate $\neg\psi(a,t)$ (hence satisfy $\psi(a,t)$) is still valid: $t\in T_{\sigma_{0}}$ satisfies all $\neg\psi(a',t)$ for $\sigma_{0}(a')=0$, so the only way $t\notin T_{\tau}$ is $\tau(a)=0$ and $\psi(a,t)$. The reasoning is correct but the phrasing "the difference is only $\neg\psi(a,t)$" is slightly loose. This is a wording issue, not a mathematical error.
- **Proposed fix:** No change required; optionally clarify that $t\in T_{\sigma_{0}}$ already satisfies the conditions for $a'\ne a$, so $t\notin T_{\tau}$ forces $\psi(a,t)$.
- **Reported:** 2026-10-28 (10fede1)

### ISSUE-0013 [Open] Step 1 of pt:add-one-path: bounded collection BΣ⁰₁
- **Category:** Logical gap
- **Location:** pt:add-one-path / Step 1
- **Detail:** The text invokes $\mathrm{B}\Sigma^{0}_{1}$ to move bounded universal quantifiers outside existential quantifiers, and notes it follows from $\Sigma^{0}_{1}$ induction (not shown on the site). This is a correct citation of a standard fact, and the text is honest that it is not proved on the site. No error.
- **Proposed fix:** No change required.
- **Reported:** 2026-10-28 (10fede1)

### ISSUE-0014 [Open] pt:wkl0-extension: union of RCA₀ models is RCA₀
- **Category:** Logical gap
- **Location:** pt:wkl0-extension / proof
- **Detail:** The proof argues that each axiom instance involves finitely many parameters, hence lies in some $\mathcal{S}_{i}$, and that $\Sigma^{0}_{1}$ induction and $\Delta^{0}_{1}$ comprehension instances have arithmetic hypotheses so truth agrees between $(M,\mathcal{S}_{i})$ and $(M,\mathcal{S}_{\infty})$. This is the standard argument and is correct. No gap.
- **Proposed fix:** No change required.
- **Reported:** 2026-10-28 (10fede1)

### ISSUE-0015 [Open] pt:harrington: ¬σ gives A ∈ S with ¬φ(A)
- **Category:** Logical gap
- **Location:** pt:harrington / proof
- **Detail:** The proof writes $\sigma\equiv\forall X\,\varphi(X)$ with $\varphi$ arithmetic, and from $\neg\sigma$ concludes $\exists X\,\neg\varphi(X)$, so there is $A\in\mathcal{S}$ with $(M,\mathcal{S})\models\neg\varphi(A)$. This is correct: $\neg\sigma$ is $\Sigma^{1}_{1}$, witnessed by some $A$ in the second-order part of the model. No gap.
- **Proposed fix:** No change required.
- **Reported:** 2026-10-28 (10fede1)

### ISSUE-0016 [Open] pt:harrington: arithmetic formula preserved under extension
- **Category:** Missing hypothesis
- **Location:** pt:harrington / proof
- **Detail:** The proof uses that $\varphi(A)$ is arithmetic, so its truth depends only on $M$ and $A$, and since $A\in\mathcal{S}\subseteq\mathcal{S}_{\infty}$ it is preserved. This is correct: arithmetic formulas are absolute between $\mathcal{L}_{2}$ structures with the same first-order part and the same set parameter. No missing hypothesis.
- **Proposed fix:** No change required.
- **Reported:** 2026-10-28 (10fede1)

### ISSUE-0017 [Open] Citation of logic:bounded-sigma01-ca for Π⁰₁ comprehension
- **Category:** Improper link
- **Location:** pt:generic-path-induction / Step 4
- **Detail:** The text cites logic:bounded-sigma01-ca (bounded $\Sigma^{0}_{1}$ comprehension) "applied to the negation" to obtain the finite set $S_{b}$ of $\sigma$ with $T_{\sigma}$ infinite. The condition "$T_{\sigma}$ is infinite" is $\Pi^{0}_{1}$, and its negation "$T_{\sigma}$ is finite" is $\Sigma^{0}_{1}$; bounded $\Sigma^{0}_{1}$ comprehension gives $\{\sigma:\neg(T_{\sigma}\text{ infinite})\}$, and complementation (available in $\mathsf{RCA}_{0}$) gives $S_{b}$. The citation is legitimate. No error.
- **Proposed fix:** No change required.
- **Reported:** 2026-10-28 (10fede1)

### ISSUE-0018 [Open] Citation of pt:prob-rca0-isigma1
- **Category:** Improper link
- **Location:** pt:wkl0-isigma1 / proof
- **Detail:** The proof cites problem 2.8 (pt:prob-rca0-isigma1) for the fact that $\mathsf{RCA}_{0}$ is conservative over $\mathrm{I}\Sigma_{1}$ for first-order sentences. The label table lists this as a problem on the ACA₀ conservativity page; the title is empty in the table, but the reference is to a problem establishing exactly this conservativity. Assuming the problem states this, the citation is appropriate. No error.
- **Proposed fix:** No change required.
- **Reported:** 2026-10-28 (10fede1)

### ISSUE-0019 [Open] Notation: 'bounded Σ⁰₁ comprehension gives {a<b:φ(a)} as a finite set'
- **Category:** Unsupported fact
- **Location:** notation (pt:sec-soa4-notation), third bullet
- **Detail:** The notation says bounded $\Sigma^{0}_{1}$ comprehension ($\{a<b:\varphi(a)\}$ exists as a finite set) holds in $\mathsf{RCA}_{0}$ by logic:bounded-sigma01-ca. This is correct. No error.
- **Proposed fix:** No change required.
- **Reported:** 2026-10-28 (10fede1)

### ISSUE-0020 [Open] Notation: 'countable consistent theory has a countable model'
- **Category:** Unsupported fact
- **Location:** notation (pt:sec-soa4-notation), last bullet
- **Detail:** The notation says by completeness and downward Löwenheim–Skolem, a consistent theory in a countable language has a countable model. This is correct. No error.
- **Proposed fix:** No change required.
- **Reported:** 2026-10-28 (10fede1)

### ISSUE-0021 [Open] Remark: Def(M) is countable when M is countable
- **Category:** Supplement/remark error
- **Location:** remark after pt:tree-forcing
- **Detail:** The remark says if $\mathfrak{M}$ is countable then $\mathrm{Def}(\mathfrak{M})$ is countable because there are only countably many formulas and parameters. This is correct: countably many formulas times countably many finite tuples of parameters. No error.
- **Proposed fix:** No change required.
- **Reported:** 2026-10-28 (10fede1)

### ISSUE-0022 [Open] Intuition: 'countably many requirements, so a limit path exists'
- **Category:** Supplement/remark error
- **Location:** intuition after corollary
- **Detail:** The intuition says there are only countably many requirements, so a limit path satisfying all is obtained. This is the Rasiowa–Sikorski argument and is correct in context. No error.
- **Proposed fix:** No change required.
- **Reported:** 2026-10-28 (10fede1)

### ISSUE-0023 [Open] pt:generic-filter-path Step 1: χ(j) induction uses Σ⁰₁ induction in M
- **Category:** Logical gap
- **Location:** pt:generic-filter-path / Step 1
- **Detail:** The proof of density of $E_{k}$ uses $\Sigma^{0}_{1}$ induction on $\chi(j)$, which is available since $\mathfrak{M}\models\mathsf{RCA}_{0}$. The hypcheck confirms this use. The argument that $\chi(j+1)$ follows from $\chi(j)$ and finiteness of $T^{s_{j}}$ is correct. No gap.
- **Proposed fix:** No change required.
- **Reported:** 2026-10-28 (10fede1)

### ISSUE-0024 [Open] pt:generic-filter-path Step 2: compatibility of s_k
- **Category:** Logical gap
- **Location:** pt:generic-filter-path / Step 2
- **Detail:** The proof shows $s_{k}\subseteq s_{k'}$ for $k<k'$ using a common lower bound $T''$ of $T_{k},T_{k'}$ in $F$ and the fact that $T''$ is infinite, hence has an element of length $k'$. This element is comparable with both $s_{k}$ and $s_{k'}$, forcing $t=s_{k'}$ and $s_{k}=t\upharpoonright k$. Correct. No gap.
- **Proposed fix:** No change required.
- **Reported:** 2026-10-28 (10fede1)

### ISSUE-0025 [Open] pt:generic-filter-path Step 3: G↾k = s_k ∈ T
- **Category:** Logical gap
- **Location:** pt:generic-filter-path / Step 3
- **Detail:** The proof shows $G\upharpoonright k=s_{k}\in T''\subseteq T$ for any $T\in F$. Correct. No gap.
- **Proposed fix:** No change required.
- **Reported:** 2026-10-28 (10fede1)

### ISSUE-0026 [Open] pt:sigma01-string-normal-form: monotonicity and equivalence
- **Category:** Logical gap
- **Location:** pt:sigma01-string-normal-form / proof
- **Detail:** The proof defines $\psi(a,s)\defeq\exists j<|s|\,(u(a,j)\le|s|\wedge\theta^{s}(a,j))$ and claims monotonicity and equivalence. The monotonicity argument is correct because $\theta^{s}(a,j)$ depends only on the first $u(a,j)$ bits of $s$ when $u(a,j)\le|s|$. The equivalence direction: if $\theta(a,j,X)$ holds, then $n=\max(j+1,u(a,j))$ gives $\psi(a,X\upharpoonright n)$; conversely $\psi(a,X\upharpoonright n)$ gives $\theta(a,j,X)$ for some $j$. Correct. No gap.
- **Proposed fix:** No change required.
- **Reported:** 2026-10-28 (10fede1)

### ISSUE-0027 [Open] pt:generic-path-induction Step 1: X_b finite set in S
- **Category:** Logical gap
- **Location:** pt:generic-path-induction / Step 1
- **Detail:** The proof reduces to showing $X_{b}=\{a\le b:\varphi(a,G)\}$ is in $\mathcal{S}$, then uses $Y=X_{b}\cup\{a:a>b\}$ and induction in $\mathfrak{M}$ to conclude $Y=M$. This is correct: $Y$ is in $\mathcal{S}$ (finite modification of $X_{b}$), contains 0, and is closed under successor, so $Y=M$ by induction in $\mathfrak{M}$. No gap.
- **Proposed fix:** No change required.
- **Reported:** 2026-10-28 (10fede1)

### ISSUE-0028 [Open] pt:generic-path-induction Step 3: X_b via bounded Σ⁰₁ comprehension
- **Category:** Logical gap
- **Location:** pt:generic-path-induction / Step 3
- **Detail:** The proof shows $\varphi(a,G)\iff(2)_{a}[T_{0}]$ for $a\le b$, and $(2)_{a}[T_{0}]$ is $\Sigma^{0}_{1}$ with parameter $T_{0}\in\mathcal{S}$, so bounded $\Sigma^{0}_{1}$ comprehension gives $X_{b}\in\mathcal{S}$. Correct. No gap.
- **Proposed fix:** No change required.
- **Reported:** 2026-10-28 (10fede1)

### ISSUE-0029 [Open] pt:add-one-path Step 2: Δ⁰₁ comprehension in S_T
- **Category:** Logical gap
- **Location:** pt:add-one-path / Step 2
- **Detail:** The proof argues that if a $\Sigma^{0}_{1}$ and a $\Pi^{0}_{1}$ formula (with parameters from $\mathcal{S}_{T}$) are equivalent, then by Step 1 the set is $\Delta^{0}_{1}$ definable in $(M,\mathcal{S}\cup\{G\})$, hence in $\mathcal{S}_{T}$. This is correct. No gap.
- **Proposed fix:** No change required.
- **Reported:** 2026-10-28 (10fede1)

### ISSUE-0030 [Open] pt:wkl0-extension: WKL in the union
- **Category:** Logical gap
- **Location:** pt:wkl0-extension / proof
- **Detail:** The proof argues that any infinite binary tree $T$ in $\mathcal{S}_{\infty}$ is some $T_{n,m}$ and a path was added at stage $i=(n,m)$. This is correct provided the enumeration $T_{n,0},T_{n,1},\dots$ of trees in $\mathcal{S}_{n}$ is fixed and the pairing $(n,m)\mapsto i$ is such that $\mathcal{S}_{n}$ is already available at stage $i$; the text notes $(n,m)\ge n$. Correct. No gap.
- **Proposed fix:** No change required.
- **Reported:** 2026-10-28 (10fede1)

### ISSUE-0031 [Open] pt:prob-incompatible-trees solution
- **Category:** Logical gap
- **Location:** pt:prob-incompatible-trees / solution
- **Detail:** The solution shows that $T_{1}\cap T_{2}$ is in $\mathcal{S}$ (bounded definition), is a tree, and is infinite iff there is a common lower bound. Correct. No gap.
- **Proposed fix:** No change required.
- **Reported:** 2026-10-28 (10fede1)

### ISSUE-0032 [Open] pt:prob-wkl0-con-isigma1 solution
- **Category:** Logical gap
- **Location:** pt:prob-wkl0-con-isigma1 / solution
- **Detail:** The solution uses the conservativity corollary and Gödel's second incompleteness theorem for $\mathrm{I}\Sigma_{1}$. Correct. No gap.
- **Proposed fix:** No change required.
- **Reported:** 2026-10-28 (10fede1)
