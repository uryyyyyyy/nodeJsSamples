
//app deps
const deviceModule   = require('aws-iot-device-sdk').device;

//begin module

function processTest( args ) {


const device = deviceModule({
  keyPath: "XXX/thing-private-key.pem",
  certPath: "XXX/cert.pem",
  caPath: "XXX/rootCA.pem",
  //clientId: clientId,
  region: "ap-northeast-1"
  //reconnectPeriod: reconnectPeriod
});

var timeout;
var count=0;


device
  .on('connect', function() {
    const minimumDelay=250;
    console.log('connect');
    device.subscribe('topic_2');
    timeout = setInterval( function() {
        count++;
   
            device.publish('topic_1', JSON.stringify({
            mode2Process: count }));
    }, minimumDelay);  // clip to minimum
    });
device 
  .on('close', function() {
    console.log('close');
    clearInterval( timeout );
    count=0;
  });
device 
  .on('reconnect', function() {
    console.log('reconnect');
  });
device 
  .on('offline', function() {
    console.log('offline');
    clearInterval( timeout );
    count=0;
  });
device
  .on('error', function(error) {
    console.log('error', error);
    clearInterval( timeout );
    count=0;
  });
device
  .on('message', function(topic, payload) {
    console.log('message', topic, payload.toString());
  });

}

processTest();
