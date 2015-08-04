// Copyright (c) 2012 Ecma International.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
es5id: 15.2.3.7-5-b-257
description: >
    Object.defineProperties - value of 'set' property of 'descObj' is
    an interesting object other than a function (8.10.5 step 8.b)
includes: [runTestCase.js]
---*/

function testcase() {

        var obj = {};

        try {
            Object.defineProperties(obj, {
                prop: {
                    set: []
                }
            });
            return false;
        } catch (e) {
            return (e instanceof TypeError);
        }
    }
runTestCase(testcase);