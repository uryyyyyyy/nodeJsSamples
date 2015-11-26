
var Bacon = require('baconjs');
var logger = require('../log/util.js')();
var client = require('mysqlClient.js')(logger, 'my_db');

var sql = 'SELECT * from users where user_id = ?';

Bacon.fromCallback(client.select(sql, ['admin'])).onValue(client.close);
