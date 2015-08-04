// Copyright (c) 2012 Ecma International.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
es5id: 11.4.1-5-a-16-s
description: >
    Strict Mode - SyntaxError is thrown when deleting a variable of
    type Error
flags: [onlyStrict]
includes: [runTestCase.js]
---*/

function testcase() {
        var errObj = new Error();

        try {
            eval("delete errObj;");
            return false;
        } catch (e) {
            return e instanceof SyntaxError;
        }
    }
runTestCase(testcase);