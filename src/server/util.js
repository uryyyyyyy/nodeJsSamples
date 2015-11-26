var http = require('http');

exports.start = function() {
    var server = http.createServer(function (request, response) {
        response.statusCode = 200;
        response.setHeader('Content-type', 'text/plain');
        response.write('Hello, nodeJS!');
        response.end();
    });
    server.listen(8080);
};