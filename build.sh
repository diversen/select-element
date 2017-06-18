#!/bin/sh

rm -rf dist
mkdir dist

( printf "/*! ${NPM_PACKAGE} ${NPM_VERSION} ${GITHUB_PROJ} @license MIT */" ; \
        browserify ./ -s selectElement \
        ) > dist/selectElement.js
