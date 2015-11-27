'use strict';
require('es6-promise').polyfill();

var util = require('./util');

var onSuccess = function(value) {
    console.log("onSuccess");
    console.log(value);
};

var onFailure = function(value) {
    console.log("onFailure");
    console.log(value);
};

//var promise = util.get("http://date.jsontest.com/");
//promise.then(onSuccess, onFailure);
//
//var promise2 = util.get("http://date.jsonstest.com/");
//promise2.then(onSuccess, onFailure);

var promise = util.post("http://date.jsontest.com/", {aa: "hi", bb: 13});
promise.then(onSuccess, onFailure);

var promise2 = util.post("http://date.jsonstest.com/", {aa: "hi", bb: 13});
promise2.then(onSuccess, onFailure);