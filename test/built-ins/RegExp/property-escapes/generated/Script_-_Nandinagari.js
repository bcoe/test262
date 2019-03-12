// Copyright 2019 Mathias Bynens. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
author: Mathias Bynens
description: >
  Unicode property escapes for `Script=Nandinagari`
info: |
  Generated by https://github.com/mathiasbynens/unicode-property-escapes-tests
  Unicode v12.0.0
esid: sec-static-semantics-unicodematchproperty-p
features: [regexp-unicode-property-escapes]
includes: [regExpUtils.js]
---*/

const matchSymbols = buildString({
  loneCodePoints: [],
  ranges: [
    [0x0119A0, 0x0119A7],
    [0x0119AA, 0x0119D7],
    [0x0119DA, 0x0119E4]
  ]
});
testPropertyEscapes(
  /^\p{Script=Nandinagari}+$/u,
  matchSymbols,
  "\\p{Script=Nandinagari}"
);
testPropertyEscapes(
  /^\p{Script=Nand}+$/u,
  matchSymbols,
  "\\p{Script=Nand}"
);
testPropertyEscapes(
  /^\p{sc=Nandinagari}+$/u,
  matchSymbols,
  "\\p{sc=Nandinagari}"
);
testPropertyEscapes(
  /^\p{sc=Nand}+$/u,
  matchSymbols,
  "\\p{sc=Nand}"
);

const nonMatchSymbols = buildString({
  loneCodePoints: [],
  ranges: [
    [0x00DC00, 0x00DFFF],
    [0x000000, 0x00DBFF],
    [0x00E000, 0x01199F],
    [0x0119A8, 0x0119A9],
    [0x0119D8, 0x0119D9],
    [0x0119E5, 0x10FFFF]
  ]
});
testPropertyEscapes(
  /^\P{Script=Nandinagari}+$/u,
  nonMatchSymbols,
  "\\P{Script=Nandinagari}"
);
testPropertyEscapes(
  /^\P{Script=Nand}+$/u,
  nonMatchSymbols,
  "\\P{Script=Nand}"
);
testPropertyEscapes(
  /^\P{sc=Nandinagari}+$/u,
  nonMatchSymbols,
  "\\P{sc=Nandinagari}"
);
testPropertyEscapes(
  /^\P{sc=Nand}+$/u,
  nonMatchSymbols,
  "\\P{sc=Nand}"
);
