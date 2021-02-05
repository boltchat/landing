#!/usr/bin/env sh
set -e

cd dist

echo 'boltchat.keesvv.nl' > CNAME

git init
git config --local user.email "action@github.com"
git config --local user.name "GitHub Action"

git add -A
git commit -m 'Deploy 🚀'
