'use strict';

var axios = require('axios');

exports.get = function(url, params) {
	return axios.get(url, params);
};

exports.post = function(url, params) {
	return axios.post(url, params);
};