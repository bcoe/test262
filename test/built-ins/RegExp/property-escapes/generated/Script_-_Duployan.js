// Copyright 2019 Mathias Bynens. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
author: Mathias Bynens
description: >
  Unicode property escapes for `Script=Duployan`
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
    [0x01BC00, 0x01BC6A],
    [0x01BC70, 0x01BC7C],
    [0x01BC80, 0x01BC88],
    [0x01BC90, 0x01BC99],
    [0x01BC9C, 0x01BC9F]
  ]
});
testPropertyEscapes(
  /^\p{Script=Duployan}+$/u,
  matchSymbols,
  "\\p{Script=Duployan}"
);
testPropertyEscapes(
  /^\p{Script=Dupl}+$/u,
  matchSymbols,
  "\\p{Script=Dupl}"
);
testPropertyEscapes(
  /^\p{sc=Duployan}+$/u,
  matchSymbols,
  "\\p{sc=Duployan}"
);
testPropertyEscapes(
  /^\p{sc=Dupl}+$/u,
  matchSymbols,
  "\\p{sc=Dupl}"
);

const nonMatchSymbols = buildString({
  loneCodePoints: [],
  ranges: [
    [0x00DC00, 0x00DFFF],
    [0x000000, 0x00DBFF],
    [0x00E000, 0x01BBFF],
    [0x01BC6B, 0x01BC6F],
    [0x01BC7D, 0x01BC7F],
    [0x01BC89, 0x01BC8F],
    [0x01BC9A, 0x01BC9B],
    [0x01BCA0, 0x10FFFF]
  ]
});
testPropertyEscapes(
  /^\P{Script=Duployan}+$/u,
  nonMatchSymbols,
  "\\P{Script=Duployan}"
);
testPropertyEscapes(
  /^\P{Script=Dupl}+$/u,
  nonMatchSymbols,
  "\\P{Script=Dupl}"
);
testPropertyEscapes(
  /^\P{sc=Duployan}+$/u,
  nonMatchSymbols,
  "\\P{sc=Duployan}"
);
testPropertyEscapes(
  /^\P{sc=Dupl}+$/u,
  nonMatchSymbols,
  "\\P{sc=Dupl}"
);
