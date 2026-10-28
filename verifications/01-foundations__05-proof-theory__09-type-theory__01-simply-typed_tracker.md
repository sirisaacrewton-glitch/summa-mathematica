# Verification tracker: `01-foundations/05-proof-theory/09-type-theory/01-simply-typed.html`

<!-- source: 01-foundations/05-proof-theory/09-type-theory/01-simply-typed.html -->
<!-- Managed by scripts/verify.py (GitHub Actions). To dispute an [Open] issue, add a line starting with
     **Opus Rebuttal:** at the end of that issue and push; the next run judges it. Do not edit other lines. -->

- Last verified: 2026-10-28 (commit 10fede1, deepseek-chat)
- Open: 2 / Resolved: 0 / Ignored: 0

## Summary of the last run

The page is a careful treatment of the simply typed lambda calculus, subject reduction, and Tait-style strong normalization, and the proofs are essentially correct. The main genuine problem is in the supplement: the description of the proof method ("induction on type structure") mischaracterizes the actual derivation-induction proof and gives an imprecise reason for why System F requires a different approach. The other supplement claims (Curry-Howard-Lambek correspondence, CCC internal language, continuation/Peirce correspondence, HoTT interpretation) are standard and supported by the cited pages. The problem solutions (Peirce's law unprovability, Ω untypability) are correct.

## Issues

### ISSUE-0001 [Open] Incorrect claim that the proof uses induction on type structure
- **Category:** Supplement/remark error
- **Location:** supplement / 前提の検討, second bullet
- **Detail:** The supplement says "本ページの証明は型の構造に関する帰納法を使うので、体系を二階の型に広げると還元可能性の定義が型の帰納法で書けなくなる". The actual proof of strong normalization is by induction on the *typing derivation* (the claim is proved by induction on the derivation of $\Gamma\vdash M:A$); only the auxiliary definition of $\mathrm{Red}_{A}$ and Lemma 1.9 are by induction on the type. More importantly, the stated reason is imprecise: the obstacle in System F is not merely that the type-induction definition cannot be written, but that the reducibility predicate must be defined by induction on the *size of the type* which is unavailable for impredicative/quantified types, requiring Girard's candidates of reducibility with a more delicate (impredicative) construction. As written the sentence misdescribes the page's own proof method.
- **Proposed fix:** 本ページの強正規化の証明は型判断の導出に関する帰納法で進み、還元可能性 $\mathrm{Red}_{A}$ の定義と補題 1.9 のみが型の構造に関する帰納法で定式化されている。体系を二階の型（ジラールの体系 F）に広げると、量化された型については型の大きさに関する帰納法が使えず、$\mathrm{Red}_{A}$ を単純に型の帰納法で定義できない。ジラールは「還元可能性の候補」を非可述的に構成することでこれを克服したことが知られている。
- **Reported:** 2026-10-28 (10fede1)

### ISSUE-0002 [Open] Overstated claim that STLC with η is the internal language of Cartesian closed categories
- **Category:** Supplement/remark error
- **Location:** supplement / 高い視点から, last paragraph
- **Detail:** The supplement states "単純型付きラムダ計算（に η 等式を加えたもの）はデカルト閉圏の内部言語であり". This is essentially correct as a standard fact (the simply typed lambda calculus with βη is the internal language of CCCs), and the cited pages (logic:page-ccc-semantics, logic:page-lambek) support it. However, the parenthetical "に η 等式を加えたもの" combined with the surrounding phrasing could be read as claiming that the *untyped* or β-only calculus is the internal language; the statement as given is standard and supported by the cited pages, so no error is present. No issue.
- **Proposed fix:** No change needed.
- **Reported:** 2026-10-28 (10fede1)
