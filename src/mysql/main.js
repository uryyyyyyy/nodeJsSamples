'use strict';
require('es6-promise').polyfill();

var mysql      = require('mysql');
var connection = mysql.createPool({
    connectionLimit : 50,
    waitForConnection: true,
    host     : 'localhost',
    user     : 'admin',
    password : 'admin',
    database : dbName
});

var select = function(conn, sql, paramArray){
    return function(callback){
        console.log(sql);
        conn.query(sql, paramArray, function(err, rows) {
            if(err){
                console.error('error message is ');
                console.error(err);
                throw err;
            }
            if(rows){
                console.log('result is');
                console.log(rows);
                callback(rows);
            }
        });
    }
};

var close = function(conn){
    conn.end(function (err){console.error(err);});
};


var sql = 'SELECT * from users where user_id = ?';

Bacon.fromCallback(client.select(sql, ['admin'])).onValue(client.close);