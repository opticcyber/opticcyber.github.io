#!/usr/bin/env bash

set -x

TAG=$1

echo "Using tag: $TAG"

git tag $TAG main
git push gitea main
git push gitea $TAG
git push origin main
git push origin $TAG
