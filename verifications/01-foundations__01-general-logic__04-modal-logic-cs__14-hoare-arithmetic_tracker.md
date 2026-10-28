# Verification tracker: `01-foundations/01-general-logic/04-modal-logic-cs/14-hoare-arithmetic.html`

<!-- source: 01-foundations/01-general-logic/04-modal-logic-cs/14-hoare-arithmetic.html -->
<!-- Managed by scripts/verify.py (GitHub Actions). To dispute an [Open] issue, add a line starting with
     **Opus Rebuttal:** at the end of that issue and push; the next run judges it. Do not edit other lines. -->

- Last verified: 2026-10-28 (commit 10fede1, deepseek-chat)
- Open: 5 / Resolved: 0 / Ignored: 0

## Summary of the last run

(none)

## Issues

### ISSUE-0001 [Open] Citation to non-existent label comp:sigma1-recognizable.2
- **Category:** Improper link
- **Location:** theorem logic:hoare-n-not-re, Step 2
- **Detail:** Step 2 cites \ref{comp:sigma1-recognizable.2}, but the label table only lists comp:sigma1-recognizable.1 (theorem 2.7, Kleene normal form). There is no item 2 of that result in the table, so the citation target is undefined. The argument needs the fact that a set that is both Σ₁ and Π₁ (i.e. Δ₁) is decidable.
- **Proposed fix:** Replace the citation with a correct one, e.g. cite the standard result that a set whose complement is also Σ₁ (i.e. a Δ₁ set) is decidable, or add the missing label. Concretely: '両方が Σ₁ なら $K$ は Δ₁ で、Δ₁ 集合は決定可能である（補集合も計算可能に枚挙できるので、$n$ を枚挙で探しつつ補集合側でも探せばよい）から、\ref{comp:halting-L} に反する。'
- **Reported:** 2026-10-28 (10fede1)

### ISSUE-0002 [Open] Remark 1: Th(N) not r.e. attributed to 'same argument as Step 2'
- **Category:** Supplement/remark error
- **Location:** remark, item 1
- **Detail:** Remark 1 says Th(N) is not recursively enumerable and that this follows 'by the same argument as Step 2 (or from Gödel's incompleteness theorem)'. The 'same argument as Step 2' does not establish this: Step 2 uses the specific reduction from K to valid triples and the fact that K is Σ₁; it does not show Th(N) is not r.e. The correct justification is Tarski's undefinability / the fact that the set of true arithmetic sentences is not arithmetically definable, or that a complete r.e. theory extending Q would decide K. The parenthetical 'Gödel's incompleteness theorem' alone gives incompleteness of a given r.e. axiomatization, not non-r.e.-ness of the full theory without an extra argument.
- **Proposed fix:** Rewrite: '\mathrm{Th}(\mathcal{N}) は帰納的に枚挙できない（タルスキの定理、あるいは完全かつ帰納的に枚挙可能な理論は決定可能で $K$ を決定してしまうことから）。よって矛盾はない。'
- **Reported:** 2026-10-28 (10fede1)

### ISSUE-0003 [Open] Remark 2: restricting consequence rule to PA-provability claim
- **Category:** Supplement/remark error
- **Location:** remark, item 2
- **Detail:** Remark 2 claims that restricting the premise of the consequence rule to '$\PA\vdash\varphi\to\varphi'$' yields a mechanically checkable system that is not complete for N. This is imprecise: the resulting system is not obviously mechanically checkable unless $\PA$-provability is itself decidable, which it is not (PA is undecidable). Mechanical checkability would require restricting to a decidable proof predicate with bounded proofs, or to syntactic side conditions. As stated the claim that the system is 'mechanically checkable' is false.
- **Proposed fix:** Rewrite: '帰結規則の前提を「$\varphi\to\varphi'$ が $\PA$ で証明可能」に制限した体系は、$\PA$ の証明を探索する必要があるため一般には機械的に検査できない。証明の長さを制限するなど決定可能な条件に置き換えれば機械的に検査できるが、上の定理から $\mathcal{N}$ について完全ではない。'
- **Reported:** 2026-10-28 (10fede1)

### ISSUE-0004 [Open] Intuition: 'only Σ₁ properties are r.e.'
- **Category:** Supplement/remark error
- **Location:** intuition
- **Detail:** The intuition says '帰納的に枚挙できるのは Σ₁ の性質だけなので' (only Σ₁ properties are r.e.). This is imprecise: r.e. sets are exactly the Σ₁ sets, but the statement as phrased suggests a restriction on 'properties' generally. More importantly, the claim that {⊤}P{⊥} expresses a Π₁ property is correct, but the inference 'r.e. = Σ₁, so no mechanical system captures all partial correctness' needs the additional fact that the set of valid triples is not Σ₁, which is what the theorem proves; the intuition presents it as immediate. This is a minor overstatement but the direction is right; the precise statement should be that the set of valid triples is Π₁-hard (indeed not Σ₁).
- **Proposed fix:** Rewrite: '妥当な三つ組の全体は $K$ の補集合を含む形で Π₁ 困難であり、したがって Σ₁ ではない。帰納的に枚挙できる集合は Σ₁ であるから、どんな機械的な証明体系も部分正当性をすべて捉えることはできない。'
- **Reported:** 2026-10-28 (10fede1)

### ISSUE-0005 [Open] Solution to problem logic:prob-ha-total-not-re: diagonal argument for non-r.e.
- **Category:** Unsupported fact
- **Location:** solution of logic:prob-ha-total-not-re
- **Detail:** The solution claims that the set of indices of total functions is not r.e., justified by: 'if there were an enumeration e_0,e_1,..., then k↦φ_{e_k}(k)+1 is total computable and differs from every e_k'. This diagonal argument is flawed as stated: the enumeration is only of total functions, and the constructed function k↦φ_{e_k}(k)+1 is total and computable, but to conclude it differs from every e_k one needs that its index is in the enumerated set, which is not established; moreover the enumeration may not be injective or may not contain all total functions in a way that the diagonal function's index appears. The standard correct argument: if the total functions were r.e., by the s-m-n theorem one gets a computable f with φ_{f(k)} = φ_{e_k}(k)+1 (total), and f(k) differs from e_k for all k; but f itself is total so f = e_j for some j, giving φ_{e_j}(j) = φ_{e_j}(j)+1, contradiction. The solution omits this step.
- **Proposed fix:** Add the missing step: '枚挙 $e_{0},e_{1},\dots$ があれば、$s$-$m$-$n$ 定理により計算可能な $f$ で $\varphi_{f(k)}(n)=\varphi_{e_{k}}(k)+1$ となるものがとれる。$f$ は全域なので $f=e_{j}$ となる $j$ があり、$\varphi_{e_{j}}(j)=\varphi_{f(j)}(j)=\varphi_{e_{j}}(j)+1$、矛盾。'
- **Reported:** 2026-10-28 (10fede1)
