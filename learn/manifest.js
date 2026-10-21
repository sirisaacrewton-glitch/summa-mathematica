/* 学習機能の差し込み設定（ページのパス → 直感イメージと演習の位置）。
 * 同期で読み込むので、本文の描画と同時に枠ができ、画面がずれない（CLS 対策）。
 * 演習の中身（パズルの手順など）は api/pro-content/<ページのラベル>.json に置き、開いたときに読む。
 * access: 'free' は無料お試し（各分野の最初の 1 つ）、'pro' は Pro プランで全体が開く。 */
window.SM_LEARN_MANIFEST = {
  '54-general-topology/54D-general-properties/01-separation-compactness/02-compactness.html': {
    intuition: {
      question: 'なぜこの概念が必要か？',
      text: '有限集合の上の関数は必ず最大値をとり、有限個の条件は同時に満たせる。**コンパクト性**は、無限集合にもこの「有限のように振る舞う」性質を持たせるための条件である。\n\n' +
        '比喩でいえば、どんな「見張りの配置」（開被覆）を渡されても、そのうち**有限人だけ残せば全域を見張れる**空間がコンパクトである。$(0,1]$ では、$0$ に近づくほど小さくなる見張りを並べると有限人では足りない（下の 🎮 で試せる）。$[0,1]$ では点 $0$ 自身を見張る人がその周りをまとめて受け持つので、有限人で足りる。',
      videoTitle: '1 分イメージ：開被覆と有限部分被覆'
    },
    interactive: [
      { id: 'mg-cover', type: 'minigame', target: 'top:compact', access: 'free', label: '開被覆で遊ぶ：$(0,1]$ と $[0,1]$', summary: '有限個で覆えるかを試す' },
      { id: 'pz-interval', type: 'puzzle', target: 'top:interval-compact', access: 'free', summary: '6 手順' },
      { id: 'pz-heine-borel', type: 'puzzle', target: 'top:heine-borel', access: 'pro', summary: '「⇐」の 5 手順' }
    ]
  }
};
