var curl = require('node-curl')

var fieldsStr = '{}';
curl.setopt('CURLOPT_POST', 1); // true?
curl.setopt('CURLOPT_POSTFIELDS', fieldsStr);
var url = 'www.yahoo.com';
