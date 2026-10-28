# Verification tracker: `01-foundations/06-category-theory/09-topos-theory/01-presheaf-topos.html`

<!-- source: 01-foundations/06-category-theory/09-topos-theory/01-presheaf-topos.html -->
<!-- Managed by scripts/verify.py (GitHub Actions). To dispute an [Open] issue, add a line starting with
     **Opus Rebuttal:** at the end of that issue and push; the next run judges it. Do not edit other lines. -->

- Last verified: 2026-10-28 (commit 10fede1, deepseek-chat)
- Open: 4 / Resolved: 0 / Ignored: 0

## Summary of the last run

The main body (definitions, the cartesian-closedness theorem, the subobject classifier theorem, and the corollary) is logically sound: hypotheses (C small) are used and cited correctly, the exponential and classifier proofs are complete, and the examples/problems are correct. The genuine problems are concentrated in the supplement: a wrong attribution of forcing/independence to Mac Lane §IV.10, an imprecise characterization of Pare's theorem, an overstated remark about complements/excluded middle, and a vague description of the sheaf topos subobject classifier. No issues in the previously reported list (none open).

## Issues

### ISSUE-0001 [Open] Misattribution of forcing/independence to Mac Lane §IV.10
- **Category:** Supplement/remark error
- **Location:** supplement / 高い視点から
- **Detail:** The supplement says that the internal logic being intuitionistic is one reason, and that forcing-based independence proofs can be organized as topos constructions, "as stated in Mac Lane §IV.10". Mac Lane §IV.10 (Categories for the Working Mathematician) treats presheaf toposes and the subobject classifier; it does not present forcing/independence proofs via toposes. The attribution is wrong (the topos-theoretic treatment of forcing is due to Lawvere–Tierney, and is in Mac Lane–Moerdijk, not Mac Lane §IV.10).
- **Proposed fix:** Replace the attribution: "...強制法による独立性の証明もトポスの構成として整理できることが知られている（この整理は Mac Lane–Moerdijk, *Sheaves in Geometry and Logic* などによる；Mac Lane §IV.10 は前層トポスの構成を扱うのみで強制法には触れていない）。"
- **Reported:** 2026-10-28 (10fede1)

### ISSUE-0002 [Open] Pare's theorem mischaracterized as requiring Omega^X monadic argument
- **Category:** Supplement/remark error
- **Location:** supplement / トポスの余極限
- **Detail:** The text says that deriving finite colimits from the topos axioms requires a monadic argument using the power object $\Omega^{X}$ (Pare's theorem). Pare's theorem (1974) states that an elementary topos is cocomplete (has all finite colimits) and its proof uses the power object / monadicity of a suitable functor, but the phrase "モナド的な議論（パレの定理）" conflates the theorem with its proof technique and is imprecise: Pare's theorem is the result (elementary topos is finitely cocomplete), not the method. Also Mac Lane §IV.10 does not state this; it is a separate result. This is an imprecise/overstated attribution.
- **Proposed fix:** Rewrite: "トポスの公理から有限余極限の存在が従うことはパレの定理として知られている（R. Pare, 1974）。その証明は冪対象 $\Omega^{X}$ を用いる（ここでは扱わない）。Mac Lane §IV.10 はこの結果を述べていない。"
- **Reported:** 2026-10-28 (10fede1)

### ISSUE-0003 [Open] Claim that Omega(c) is a lattice with no complements is stated too strongly / imprecise
- **Category:** Supplement/remark error
- **Location:** problem cat:prob-tps-excluded-middle / solution
- **Detail:** The solution says "ふるいの和集合と共通部分はふるいで、$\Omega(c)$ は包含について束になるが、補元をもたない元がある（排中律が成り立たない）". For a general small category C, the sieves on c form a frame (a complete Heyting algebra), hence a lattice, and complements need not exist; but the parenthetical "(排中律が成り立たない)" is a side comment that overstates: the failure of complements in $\Omega(c)$ for this particular arrow category does not by itself establish that the internal logic fails excluded middle (that requires the internal Heyting-algebra structure, not just the external lattice of sieves). The claim as written is imprecise.
- **Proposed fix:** Replace with: "ふるいの族は包含について完備な枠（frame）をなし、特に束になる。この例では $\{a\}$ に補元が存在しない。これは内部論理における排中律の失敗の一つの現れである（内部論理の非古典性の厳密な定式化には Heyting 代数の内部構造を用いる）。"
- **Reported:** 2026-10-28 (10fede1)

### ISSUE-0004 [Open] Sheaf topos subobject classifier description imprecise
- **Category:** Unsupported fact
- **Location:** supplement / 層
- **Detail:** The supplement says the subobject classifier of the sheaf topos on a topological space is "開集合の上で閉じたふるい" (sieves closed on open sets). The correct description: for a topological space X, the subobject classifier of Sh(X) is the sheaf $\Omega$ with $\Omega(U)$ = the set of open subsets of $U$ (equivalently, the closed sieves / the Grothendieck topology's closed sieves). The phrase "開集合の上で閉じたふるい" is vague and not the standard statement; the standard is that $\Omega(U)$ is the set of open subsets $V\subseteq U$, i.e., the closed sieves for the open-cover topology. As stated it is imprecise.
- **Proposed fix:** Replace with: "層の圏もトポスで、位相空間 $X$ 上の層のトポスの部分対象分類子は $\Omega(U)=\{V: V\text{ は }U\text{ の開部分集合}\}$ で与えられる層（開被覆位相に関する閉じたふるい）である。"
- **Reported:** 2026-10-28 (10fede1)
