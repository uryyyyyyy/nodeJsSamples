
var Bacon = require('baconjs');
var logger = require('../libs/logUtil.js')();
var client = require('../libs/mysqlClient.js')(logger, 'my_db');

var sql = 'SELECT * from users where user_id = ?';

Bacon.fromCallback(client.select(sql, ['admin'])).onValue(client.close);
