
function hashUtil (logger) {
	var crypto = require('crypto')

	return{
		makeHash : function(str){
			logger.debug(str);
			var md5sum = crypto.createHash('sha256');
			md5sum.update(str);
			var hashed = md5sum.digest('hex');
			logger.debug(hashed);
			return hashed;
		},
		createHash : function(){
			var str = String(Math.random());
			var md5sum = crypto.createHash('sha256');
			md5sum.update(str);
			var hashed = md5sum.digest('hex');
			logger.debug(hashed);
			return hashed;
		}
	}
}

module.exports = hashUtil;

