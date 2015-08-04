// Copyright (c) 2012 Ecma International.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
es5id: 15.4.4.22-9-c-ii-9
description: >
    Array.prototype.reduceRight - callbackfn is called with 0 formal
    parameter
includes: [runTestCase.js]
---*/

function testcase() {

        var called = 0;

        function callbackfn() {
            called++;
            return true;
        }

        return [11, 12].reduceRight(callbackfn, 11) === true && 2 === called;
    }
runTestCase(testcase);