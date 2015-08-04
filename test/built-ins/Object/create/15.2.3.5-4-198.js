// Copyright (c) 2012 Ecma International.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
es5id: 15.2.3.5-4-198
description: >
    Object.create - one property in 'Properties' is a RegExp object
    that uses Object's [[Get]] method to access the 'writable'
    property (8.10.5 step 6.a)
includes: [runTestCase.js]
---*/

function testcase() {

        var regObj = new RegExp();

        regObj.writable = true;

        var newObj = Object.create({}, {
            prop: regObj
        });

        var beforeWrite = (newObj.hasOwnProperty("prop") && typeof (newObj.prop) === "undefined");

        newObj.prop = "isWritable";

        var afterWrite = (newObj.prop === "isWritable");

        return beforeWrite === true && afterWrite === true;
    }
runTestCase(testcase);