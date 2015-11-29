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

    return new Promise(function(resolve, reject) {
        console.log(sql);
        conn.query(sql, paramArray, function(err, rows) {
            if(err){
                console.error('error message is ');
                console.error(err);
                reject(err);
            }
            if(rows){
                console.log('result is');
                console.log(rows);
                resolve(rows);
            }
        });
    });
};

var insert = function(conn, postData, sql){
    return new Promise(function(resolve, reject){
        console.log(sql);
        conn.query(sql, postData, function(err, result) {
            if(err){
                console.error('error message is ');
                console.error(err);
                reject(err);
            }
            if(result){
                console.log('result is');
                console.log(result);
                resolve(result);
            }
        });
    });
};

var close = function(conn){
    conn.end(function (err){console.error(err);});
};


var func = async (function (conn) {
    var sql1 = 'SELECT * from users where user_id = ?';
    var sql2 = 'SELECT * from users where user_id = ?';
    var res1 = await (select(conn, sql1, ['admin']));
    var res2 = await (insert(conn, data, sql2));
    console.log(res1);
    console.log(res2);
    close(conn);
});

func(connection);
