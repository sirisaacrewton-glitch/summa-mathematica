# Verification tracker: `01-foundations/05-proof-theory/03-provability-logic/02-letterless-normal-form.html`

<!-- source: 01-foundations/05-proof-theory/03-provability-logic/02-letterless-normal-form.html -->
<!-- Managed by scripts/verify.py (GitHub Actions). To dispute an [Open] issue, add a line starting with
     **Opus Rebuttal:** at the end of that issue and push; the next run judges it. Do not edit other lines. -->

- Last verified: 2026-10-28 (commit 10fede1, deepseek-chat)
- Open: 3 / Resolved: 0 / Ignored: 0

## Summary of the last run

(none)

## Issues

### ISSUE-0001 [Open] Trace map is not an isomorphism onto the finite/cofinite algebra
- **Category:** Supplement/remark error
- **Location:** supplement (高い視点から), pt:page-letterless-normal-form
- **Detail:** The supplement claims that the trace map is an isomorphism from the Lindenbaum algebra of GL-equivalence classes of letterless sentences onto the Boolean algebra of finite/cofinite subsets of N equipped with the operation X↦{n:[0,n)⊂X}. This is false. The Lindenbaum algebra of GL is a countable Boolean algebra, whereas the finite/cofinite algebra is countable too, but the claimed isomorphism fails because the Lindenbaum algebra of GL is atomless (GL proves no letterless sentence is a 'rank-n atom' in the required sense; indeed the algebra of letterless sentences modulo GL is known to be the free Boolean algebra on countably many generators, i.e., the countable atomless Boolean algebra, which is not isomorphic to the finite/cofinite algebra, an atomic algebra). Concretely, the finite/cofinite algebra has atoms {n}, but no GL-equivalence class of a letterless sentence corresponds to a singleton trace: by pt:trace-stable, if [B] is finite then [B]⊂[0,d(B)), and the 'atoms' {n} are realized by Box^{n+1}⊥∧¬Box^{n}⊥, but these are not atoms of the Lindenbaum algebra since GL does not prove them to be minimal (e.g. their conjunction with further sentences can be independent). More directly, the map is not injective onto the algebra in the sense claimed: the supplement says '単射は pt:trace-provability' which only gives injectivity of the map on equivalence classes (that part is fine), but '全射' via pt:normal-form-by-trace only shows every finite/cofinite set is a trace, which is true; the error is the assertion of isomorphism of Boolean algebras with the extra operation, since the Lindenbaum algebra is atomless while the finite/cofinite algebra is atomic, so no Boolean isomorphism exists.
- **Proposed fix:** Replace the isomorphism claim with: 'トレース写像は、閉様相論理式の GL 同値類のなすリンデンバウム代数から有限・補有限部分集合のなすブール代数への単射準同型であり（単射性は \ref{pt:trace-provability}、全射性は \ref{pt:normal-form-by-trace}）、実は全単射である。ただしリンデンバウム代数は原子をもたないのに対し有限・補有限代数は原子的なので、この全単射はブール代数の同型ではない（演算 X↦{n:[0,n)⊂X} を保つ全単射ではあるが、ブール代数構造の同型ではない）。' Or more simply: state only that the trace map is a bijection between GL-equivalence classes of letterless sentences and finite/cofinite subsets of N, preserving the Boolean operations and the box operation, without calling it an isomorphism of Boolean algebras.
- **Reported:** 2026-10-28 (10fede1)

### ISSUE-0002 [Open] Claim that GLB letterless normal forms are 'studied' in Boolos ch.16 is imprecise
- **Category:** Supplement/remark error
- **Location:** supplement (関連する結果), pt:page-letterless-normal-form
- **Detail:** The supplement states that letterless normal forms are studied for the bimodal provability logic GLB (Boolos ch.16). Boolos Chapter 16 treats the bimodal logic of provability and its letterless fragment, but the specific claim that 'closed modal formula normal forms are studied' there is at least imprecise: Boolos ch.16 discusses the bimodal system and its Kripke semantics, and the letterless fragment of GLB is not developed there in the form of a normal-form theorem analogous to the present one. This is a side remark that overstates what is in the cited chapter.
- **Proposed fix:** Soften to: '二つの証明可能性演算子をもつ結合証明可能性論理 \mathsf{GLB} については Boolos 第 16 章で扱われており、閉様相論理式の断片についても対応する標準形の議論が知られている（本サイトでは結合証明可能性論理の系列で扱う予定）。' or remove the specific attribution to a normal-form theorem in ch.16.
- **Reported:** 2026-10-28 (10fede1)

### ISSUE-0003 [Open] Hypcheck claim that only Lob's axiom is essential is slightly overstated
- **Category:** Supplement/remark error
- **Location:** pt:letterless-normal-form proof, hypcheck
- **Detail:** The hypcheck says 'レーブの公理が本質的に使われる場所：Step 3 の m>n の場合だけである。他の段階は K で成り立つ。' This is essentially correct for the normal-form computation, but Step 1 uses logic:normality.2 (necessitation) and propositional logic, and Step 2 uses pt:box-bot-monotone which is a K-theorem; the claim that 'other steps hold in K' is true. However, the statement 'only place Lob is essential' is a claim about essentiality that is not fully justified: the theorem (that every letterless sentence is GL-equivalent to a normal form) genuinely requires Lob (it fails for K), so the claim is correct. No issue.
- **Proposed fix:** No change needed; the claim is correct.
- **Reported:** 2026-10-28 (10fede1)
