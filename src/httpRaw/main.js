'use strict';
require('es6-promise').polyfill();

// We need this to build our post string
var querystring = require('querystring');
var http = require('http');
var https = require('https');

var onSuccess = function(value) {
    console.log("onSuccess");
    console.log(value);
};

var onFailure = function(value) {
    console.log("onFailure");
    console.log(value);
};

var getJson = function() {
    var url = 'http://qiita.com/api/v2/items?page=1&per_page=5';
    return new Promise(function(resolve, reject) {
        http.get(url, function(res) {

            var body = '';
            res.setEncoding('utf8');

            res.on('data', function(chunk) {
                body += chunk;
            });

            res.on('end', function() {
                var ret = JSON.parse(body);
                resolve(ret);
            });

        }).on('error', function(e) {
            reject(e);
        });
    });
};

var postJson = function(obj) {
    var options = {
        hostname: 'hooks.slack.com',
        port: 443,
        path: '/services/XXX/XXX/XXX',
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        }
    };

    var data = JSON.stringify({
        'text': 'test'
    });
    console.log(data);

    return new Promise(function(resolve, reject) {
        var req = https.request(options, function(res) {

            var body = '';
            res.setEncoding('utf8');

            res.on('data', function(chunk) {
                body += chunk;
            });

            res.on('end', function() {
                resolve(body);
            });

        }).on('error', function(e) {
            reject(e);
        });

        req.write(data);
        req.end();
    });
};

console.log("start");
postJson({}).then(onSuccess).catch(onFailure);