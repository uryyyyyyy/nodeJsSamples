nodeJsSamples
=============

## setup

`npm install`

## run

`node src/<any Dir>/main.js`

## test

### on terminal

`./node_modules/mocha/bin/mocha test/<any Dir>/utilTest.js --require enable-power-assert.js`

### on Webstorm

run -> edit configuration -> "+" -> mocha

options

- `--require intelli-espower-loader`

then, jump to target test, and Ctrl + Shift + F10.