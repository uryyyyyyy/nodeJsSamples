
function log (callback) {
	var Log = require('log')
	var fs = require('fs')
	var stream = fs.createWriteStream(__dirname + '/test.log')
	var log = new Log(Log.WARNING, stream);

	log.debug('a debug message');
	log.info('a info message');
	log.warning('a warning message');
	log.error('a error message');
	log.emergency('a emergency message');
}

module.exports = log;
