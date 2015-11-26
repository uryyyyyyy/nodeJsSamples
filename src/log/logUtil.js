
function logUtil () {
	var Log = require('log')
	var fs = require('fs')
	var stream = fs.createWriteStream(__dirname + '/log/' + new Date() + '.log')
	var log = new Log(Log.DEBUG, stream);
	
	return{
		debug : function(msg){
			log.debug(msg);
		},
		error : function(msg){
			log.error(msg);
		},
		console : function(msg){
			console.log(msg);
		},
	}
}

module.exports = logUtil;

