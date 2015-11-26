var AWS = require('aws-sdk');

exports.initialize = function(region) {
    AWS.config.region = region;
    return new AWS.S3();
};

exports.createBucket = function(s3bucket, bucketName) {
    var params1 = {
        Bucket: bucketName
    };
    s3bucket.createBucket(params1, function () {
        var params = {Bucket: bucketName, Key: 'myKey', Body: 'Hello!!!!!!!!!!!!!!!!' };
        s3bucket.upload(params, function (err, data) {
            if (err) {
                console.log("Error uploading data: ", err);
            }
            else {
                console.log("Successfully uploaded data to myBucket/myKey");
            }
        });
    });
};
