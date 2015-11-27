'use strict';

var util = require('../../src/helloWorld/util');
var assert = require('power-assert');

describe('util', function(){
    describe('hello()', function(){
        it('should return hello uryyyyyyy', function(){
            var str = util.hello("uryyyyyyy");
            assert(str === "ss");
        });

        it('should return hello Hi', function(){
            var str = util.hello("Hi");
            assert(str === "hello Hi");
        });
    });
});