// Copyright (c) 2012 Ecma International.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
es5id: 15.4.4.21-3-1
description: Array.prototype.reduce - value of 'length' is undefined
includes: [runTestCase.js]
---*/

function testcase() {

        var accessed = false;

        function callbackfn(prevVal, curVal, idx, obj) {
            accessed = true;
            return 2;
        }

        var obj = { 0: 0, 1: 1, length: undefined };

        return Array.prototype.reduce.call(obj, callbackfn, 1) === 1 && !accessed;
    }
runTestCase(testcase);