'use strict';

var util = require('../../src/promise/util');
var assert = require('power-assert');

describe('util', function(){
    describe('promiseSucc()', function(){
        it("should support by mocha", function () {
            return util.promiseSucc.then(function (value) {
                assert(value === 'setTimeout completed');
            });
        });
    });

    describe('promiseFail()', function(){
        it("should support by mocha", function () {
            return util.promiseFail.catch(function (value) {
                assert(value === 'setTimeout failed');
            });
        });
    });
});