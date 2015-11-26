var util = require('./util');
var Promise = require('bluebird');

var onSuccess = function(value) {
    console.log("onSuccess");
    console.log(value);
};

var onFailure = function(value) {
    console.log("onFailure");
    console.log(value);
};


util.promiseSucc.then(onSuccess).catch(onFailure);

util.promiseFail.then(onSuccess).catch(onFailure);

