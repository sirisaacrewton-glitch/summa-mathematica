#!/usr/bin/env bash
# Commit verifications/ and push to main, rebasing over concurrent bot commits (used by verify.yml).
set -u
git config user.name "verify-bot"
git config user.email "41898282+github-actions[bot]@users.noreply.github.com"
git add verifications 2>/dev/null || true
if git diff --cached --quiet; then
  echo "no tracker changes"
  exit 0
fi
git commit -q -m "$1"
for i in 1 2 3 4 5 6; do
  git pull -q --rebase origin main && git push -q origin HEAD:main && exit 0
  sleep $(( (2 ** i) + RANDOM % 5 ))
done
exit 1
