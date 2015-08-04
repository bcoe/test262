// Copyright (c) 2012 Ecma International.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
es5id: 15.4.4.17-5-10
description: Array.prototype.some - Array Object can be used as thisArg
includes: [runTestCase.js]
---*/

function testcase() {

        var objArray = [];

        function callbackfn(val, idx, obj) {
            return this === objArray;
        }

        return [11].some(callbackfn, objArray);
    }
runTestCase(testcase);