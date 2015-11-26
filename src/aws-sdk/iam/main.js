'use strict';

var util = require('./util');
var Promise = require("bluebird");

var iam = util.initialize('ap-northeast-1');

var promise = util.createGroup(iam, "myGroup1");
var promise2 = util.createPolicy(iam, "mypolicy1");
var promise3 = util.createUser(iam, "myUser1");

Promise.all([promise, promise2, promise3]).then(function (arr) {
    console.log(arr);
    util.attachGroupPolicy(iam, arr[1].Policy.Arn, arr[0].Group.GroupName);
    util.addUserToGroup(iam, arr[2].User.UserName, arr[0].Group.GroupName);
});
