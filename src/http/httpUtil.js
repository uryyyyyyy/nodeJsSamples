
function httpUtil (logger) {
	var request = require('request');

	return{
		get : function(url){
			return function(callback){
				console.log('request.getJson');
				request(url, function (error, response, body) {
					if (error) {
						logger.error(error);
						throw error;
					}
					logger.debug('url : ' + url);
					logger.debug(response);
					logger.debug(body);
					callback(body);
				});
			};
		},
		postJson : function(url, postData){
			return function(callback){
				request.post({uri:url, json: postData}, function(error, response, body){
					if (error) {
						logger.error(error);
						throw error;
					}
					logger.debug('url : ' + url);
					logger.debug(response);
					logger.debug(body);
					callback(body);
				});
			};
		}
	}
}

module.exports = httpUtil;
