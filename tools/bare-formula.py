#!/usr/bin/env python3
"""証明・解答の中で、式を除くと地の文が残らない文（式だけの文）を数える。

使い方（サイトのルートで）:
  python3 tools/bare-formula.py                 # 全ページ。多いページ順に上位を表示
  python3 tools/bare-formula.py -v <html>...    # 指定ページの該当文をすべて表示
START.md 第 6 節「証明の文の役割を書く」（2026-11-13）の確認用。
「…である」「ゆえに」「とおく」「の場合」などを足して、文の役割が分かるように直す。
"""
import sys, re, glob

MATH = re.compile(r'\$\$.*?\$\$|\$[^$]*\$', re.S)
BLOCK = re.compile(r'^::: (?:proof|solution).*?^:::\s*$', re.S | re.M)
REFS = re.compile(r'\\(?:ref|tref|see|eqref)\{[^}]*\}|\\term\[[^]]*\]\{[^}]*\}')
LEAD = re.compile(r'【主張：.*?】|\*\*Step[^*]*\*\*|^:::.*$|^\*\*[^*]*\*\*', re.M)
JUNK = re.compile(r'[§\s。、，,：:（）()\-・.]')


def source(path):
    t = open(path, encoding='utf-8').read()
    i = t.find('id="source">')
    if i < 0:
        return None
    i = t.index('\n', i) + 1
    return t[i:t.index('\n</script>', i)]


def bare_sentences(src):
    out = []
    for blk in BLOCK.finditer(src):
        for sent in re.split(r'(?<=。)', blk.group(0)):
            t = MATH.sub('§', LEAD.sub('', sent))
            if '§' in t and len(JUNK.sub('', REFS.sub('', t))) <= 1:
                out.append(' '.join(sent.split()))
    return out


def main(argv):
    verbose = '-v' in argv
    files = [a for a in argv if a != '-v'] or glob.glob('**/[0-9]*.html', recursive=True)
    res = {}
    for f in files:
        s = source(f)
        if s:
            b = bare_sentences(s)
            if b:
                res[f] = b
    for f, b in sorted(res.items(), key=lambda x: -len(x[1]))[: None if verbose else 20]:
        print(len(b), f)
        if verbose:
            for x in b:
                print('    ', x[-200:])
    print('合計', sum(map(len, res.values())), '文 /', len(res), 'ページ')


if __name__ == '__main__':
    main(sys.argv[1:])
