
function mysqlClient (logger, dbName) {
	var mysql      = require('mysql');
	var connection = mysql.createPool({
		connectionLimit : 50,
		waitForConnection: true,
		host     : 'localhost',
		user     : 'admin',
		password : 'admin',
		database : dbName
	});

	return{
		insert: function(postData, sql){
			return function(callback){
				logger.debug(sql);
				connection.query(sql, postData, function(err, result) {
					if(err){
						logger.error('error message is ');
						logger.error(err);
						throw err;
					}
					if(result){
						logger.debug('result is');
						logger.debug(result);
						callback(result);
					}
				});
			}
		},

		select: function(sql, paramArray){
			return function(callback){
				logger.debug(sql);
				connection.query(sql, paramArray, function(err, rows) {
					if(err){
						logger.error('error message is ');
						logger.error(err);
						throw err;
					}
					if(rows){
						logger.debug('result is');
						logger.debug(rows);
						callback(rows);
					}
				});
			}
		},

		close: function(){
			connection.end(function (err){logger.error(err);});
		}
	}
}

module.exports = mysqlClient;
