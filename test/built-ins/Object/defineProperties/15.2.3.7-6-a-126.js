// Copyright (c) 2012 Ecma International.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
es5id: 15.2.3.7-6-a-126
description: >
    Object.defineProperties - 'O' is an Array, 'name' is the length
    property of 'O', test the [[Value]] field of 'desc' is +0
    (15.4.5.1 step 3.c)
includes: [runTestCase.js]
---*/

function testcase() {

        var arr = [0, 1];

        Object.defineProperties(arr, {
            length: { value: +0 }
        });
        return arr.length === 0;

    }
runTestCase(testcase);