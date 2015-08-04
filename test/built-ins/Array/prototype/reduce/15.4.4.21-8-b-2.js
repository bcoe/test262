// Copyright (c) 2012 Ecma International.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
es5id: 15.4.4.21-8-b-2
description: >
    Array.prototype.reduce - modifications to length don't change
    number of iterations in step 9
includes: [runTestCase.js]
---*/

function testcase() {

        function callbackfn(prevVal, curVal, idx, obj) {
            return idx;
        }

        var obj = { 3: 12, 4: 9, length: 4 };

        Object.defineProperty(obj, "2", {
            get: function () {
                obj.length = 10;
                return 11;
            },
            configurable: true
        });

        return Array.prototype.reduce.call(obj, callbackfn) === 3;
    }
runTestCase(testcase);