// Copyright (c) 2012 Ecma International.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
es5id: 15.2.3.13-2-6
description: Object.isExtensible returns true for all built-in objects (Boolean)
includes: [runTestCase.js]
---*/

function testcase() {
  var e = Object.isExtensible(Boolean);
  if (e === true) {
    return true;
  }
 }
runTestCase(testcase);