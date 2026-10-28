# Verification tracker: `01-foundations/06-category-theory/03-monads/04-algebras-compact.html`

<!-- source: 01-foundations/06-category-theory/03-monads/04-algebras-compact.html -->
<!-- Managed by scripts/verify.py (GitHub Actions). To dispute an [Open] issue, add a line starting with
     **Opus Rebuttal:** at the end of that issue and push; the next run judges it. Do not edit other lines. -->

- Last verified: 2026-10-28 (commit 10fede1, deepseek-chat)
- Open: 3 / Resolved: 0 / Ignored: 0

## Summary of the last run

(none)

## Issues

### ISSUE-0001 [Open] Infinite operations and free algebras
- **Category:** Supplement/remark error
- **Location:** supplement / 前提を変えると
- **Detail:** The claim that when infinite operations are allowed 'the free algebra may fail to be a set' is imprecise. For a fixed set X of generators and a fixed (possibly large) signature, the term algebra is a set (built inductively over an ordinal), so free algebras always exist as sets; the real issue is that the forgetful functor may fail to have a left adjoint or the variety may not be monadic (e.g. complete Boolean algebras: free complete Boolean algebras on infinitely many generators do not exist). The stated reason ('free algebra is not a set') is wrong.
- **Proposed fix:** Replace with: 「また、無限の演算を許すと、自由代数が存在しなくなることがある（完備ブール代数の圏では、無限個の生成元上の自由完備ブール代数が存在しないことが知られている）。」
- **Reported:** 2026-10-28 (10fede1)

### ISSUE-0002 [Open] Conditional axioms and monadicity
- **Category:** Supplement/remark error
- **Location:** supplement / 前提を変えると
- **Detail:** The statement lumps 'integral domains' and 'Noetherian rings' together with fields as structures whose forgetful functor is not monadic. For integral domains the forgetful functor to Set does have a left adjoint (the free integral domain / polynomial-type construction via localization of the free commutative ring at the multiplicative set of nonzero elements exists), so 'many have no left adjoint' is at best vague, and the blanket claim 'not monadic' for integral domains is not justified by the cited reasoning (which is about conditional axioms preventing the quotient construction). The claim is stated more strongly than supported.
- **Proposed fix:** Restrict the claim to fields: 「条件付きの公理をもつ構造、たとえば体の圏では、忘却関手は左随伴をもたない（自由な体が存在しない）。」 and drop or qualify the integral domain / Noetherian ring examples.
- **Reported:** 2026-10-28 (10fede1)

### ISSUE-0003 [Open] Manes attribution and ultrafilter monad description
- **Category:** Unsupported fact
- **Location:** cat:ultrafilter-monad
- **Detail:** The fact states the algebras of the ultrafilter monad are 'maps βX→X assigning a limit point to each ultrafilter satisfying the monad axioms', which is correct, but the historical attribution 'E. Manes 1969' is flagged as unverified in the text itself. The standard attribution for compact Hausdorff spaces being monadic over Set via the ultrafilter monad is Manes (1969), so the content is fine; however the parenthetical '(未確認)' inside a `::: fact` is a side comment that should not appear in a stated result, and the precise statement 'the monad is the ultrafilter monad' relies on the left adjoint β being the Stone–Čech compactification, which is only justified under the stated choice assumptions. This is a minor imprecision rather than a falsehood.
- **Proposed fix:** State: 「このモナドは超フィルターのモナド（Manes, 1969）であり、その代数は各超フィルターに極限点を対応させる写像 βX→X でモナドの公理を満たすもので、コンパクトハウスドルフ位相の収束（コンパクト性＝極限の存在、ハウスドルフ性＝一意性）を表す。」 and remove the '(未確認)' aside.
- **Reported:** 2026-10-28 (10fede1)
