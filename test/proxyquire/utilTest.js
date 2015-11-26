'use strict';

var assert = require('power-assert');
var proxyquire =  require('proxyquire');

describe('util', function(){
    describe('promiseSucc()', function(){

        it("normal test", function () {
            var util = require("../../src/proxyquire/util");
            var res = util.hello("uryyyyyyy");
            assert(res === "hello Mr. uryyyyyyy");
        });

        it("util2 mock test", function () {
            var mock = {
                hello: function(name){
                    console.log("mocked hello()");
                    return name;
                }
            };
            var util = proxyquire("../../src/proxyquire/util",
                { './util2': mock });

            var res = util.hello("uryyyyyyy");
            assert(res === "Mr. uryyyyyyy");
        });
    });
});