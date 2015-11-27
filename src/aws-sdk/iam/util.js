var AWS = require('aws-sdk');

exports.initialize = function(region) {
    AWS.config.region = region;
    return new AWS.IAM();
};

exports.createGroup = function(iam, groupName) {
    var params = {
        GroupName: groupName,
        Path: '/aaa/'
    };
    return new Promise(function (resolve, reject) {
        var func = function (err, data) {
            if (err)
                reject(err);
            else
                resolve(data);
        };
        iam.createGroup(params, func);
    });
};

exports.createUser = function(iam, userName) {
    var params = {
        UserName: userName
    };
    return new Promise(function (resolve, reject) {
        var func = function (err, data) {
            if (err)
                reject(err);
            else
                resolve(data);
        };
        iam.createUser(params, func);
    });
};

exports.createPolicy = function(iam, policyName) {
    var params = {
        PolicyDocument: '{"Version": "2012-10-17", "Statement": [{"Effect": "Allow","Action": "*","Resource": "*"}]}',
        PolicyName: policyName,
        Description: 'allow all actions'
    };
    return new Promise(function (resolve, reject) {
        var func = function (err, data) {
            if (err)
                reject(err);
            else
                resolve(data);
        };
        iam.createPolicy(params, func);
    });
};

exports.attachGroupPolicy = function(iam, policyName, groupName) {
    var params = {
        GroupName: groupName,
        PolicyArn: policyName
    };
    return new Promise(function (resolve, reject) {
        var func = function (err, data) {
            if (err)
                reject(err);
            else
                resolve(data);
        };
        iam.attachGroupPolicy(params, func);
    });
};

exports.addUserToGroup = function(iam, userName, groupName) {
    var params = {
        GroupName: groupName,
        UserName: userName
    };
    return new Promise(function (resolve, reject) {
        var func = function (err, data) {
            if (err)
                reject(err);
            else
                resolve(data);
        };
        iam.addUserToGroup(params, func);
    });
};
