'use strict';

var util = require('./util');

var s3bucket = util.initialize('ap-northeast-1');

util.createBucket(s3bucket, "uryyyyyyy-sandbox");