
function log () {
	var Log = require('log')
	var fs = require('fs')
	var stream = fs.createWriteStream(__dirname + '/test.log')
	var log = new Log(Log.WARNING, stream);//edit log level
	
	return{
		debug : function(msg){
			console.log(msg);
			log.debug(msg);
		},
		error : function(msg){
			log.error(msg);
		}
	}
}

module.exports = log;
