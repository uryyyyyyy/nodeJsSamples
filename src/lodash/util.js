'use strict';

var _ = require('lodash');

exports.add1 = function(arr) {
	return _.map(arr, function(i){return i + 1});
};
