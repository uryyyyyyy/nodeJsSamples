
function request (callback) {
	var request = require('request');
	var _ = require('lodash');

	request('http://example.com', function (error, response, body) {
		if (error || response.statusCode != 200) {
			console.log('error');
			console.log(error);
			console.log('response');
			console.log(response);
		}
		console.log();
		var jsonReq = JSON.parse(body);
		callback(jsonReq)
	});
}

module.exports = request;
