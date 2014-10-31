
var Bacon = require('baconjs');

var func = function(time) {
	return function(callback){
		setTimeout(function() {
			callback("Bacon!")
		}, time)
	};
};

var callbackFunc = function (str) {
	console.log(str);
};

Bacon.fromCallback(func(100))onValue(callbackFunc);

