var mysqlClient = require('./mysqlClient.js');
var request = require('./request.js');
var log = require('./log.js');

var logger = function(result){
	console.log(result);
};

log(logger);
