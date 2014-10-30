
function mysqlClient (callback) {
	var mysql      = require('mysql');
	var connection = mysql.createConnection({
		host     : 'localhost',
		user     : 'admin',
		password : 'admin',
		database : 'db1'
	});

	connection.connect();

	var post  = {user_id: 'sample', user_name: 'sample''};
	var query = connection.query('INSERT INTO users SET ?', post, function(err, result) {
		if(err){
			console.log('error message is ');
			throw err;
		}
		if(result){
			console.log('result is');
			console.log(result);
			callback(result);
		}
	});
	console.log(query.sql);
	connection.end();
}

module.exports = mysqlClient;
