
require('es6-promise').polyfill();
var util = require('./util');
var async = require('asyncawait/async');
var await = require('asyncawait/await');

var onSuccess = function(value) {
    console.log("onSuccess");
    console.log(value);
};

var onFailure = function(value) {
    console.log("onFailure");
    console.log(value);
};

var func = async (function () {
    var res1 = await (util.promiseSucc);
    var res2 = await (util.promiseSucc);
    return res1 + " " + res2;
});


func().then(onSuccess).catch(onFailure);

util.promiseFail.then(onSuccess).catch(onFailure);

