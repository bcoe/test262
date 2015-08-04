// Copyright (c) 2012 Ecma International.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
es5id: 15.2.3.4-4-38
description: >
    Object.getOwnPropertyNames - own data properties are pushed into
    the returned array
includes: [runTestCase.js]
---*/

function testcase() {

        var obj = { "a": "a" };

        var result = Object.getOwnPropertyNames(obj);

        return result[0] === "a";
    }
runTestCase(testcase);