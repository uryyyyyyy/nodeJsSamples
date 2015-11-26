'use strict';
var Promise = require('bluebird');

exports.promiseSucc = new Promise(function(resolve, reject) {
	setTimeout(function() {
		resolve('setTimeout completed');
	}, 1000);
});

exports.promiseFail = new Promise(function(resolve, reject) {
	setTimeout(function() {
		reject('setTimeout failed');
	}, 1000);
});