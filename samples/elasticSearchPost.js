
var Bacon = require('baconjs');
var logger = require('../libs/logUtil.js')();
var httpUtil = require('../libs/httpUtil.js')(logger);

var url = 'http://localhost:9200/my_index/my_type/';

var postData = {title:'title', content:'content'};


Bacon.fromCallback(httpUtil.postJson(url, postData)).onValue(logger.console);
