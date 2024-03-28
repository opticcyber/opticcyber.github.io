#!/usr/bin/env bash

set -x

TAG=$1

echo "Using tag: $TAG"

git tag -a $TAG main -m "tagging version $TAG"
git push gitea main
git push gitea $TAG
git push origin main
git push origin $TAG
