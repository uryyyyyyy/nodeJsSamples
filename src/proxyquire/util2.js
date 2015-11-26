'use strict';

exports.hello = function(name) {
	console.log("***********************");
	console.log("heavy-side-effect logic");
	console.log("***********************");
	return "hello " + name;
};
