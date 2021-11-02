var redis = require('redis');
var url = require('url');

// const {redisConfig} = require('./config');

// authenticate to redis cli & hosting
// const client = redis.createClient(
//     redisConfig.port,
//      redisConfig.host
//    );
//    client.auth(redisConfig.auth);

//   // checking the connectivity
//  client.on("error", function(error) {
//    console.error(error);
//  });


var redisURL = url.parse(process.env.REDISCLOUD_URL);
var client = redis.createClient(redisURL.port, redisURL.hostname, {no_ready_check: true});
client.auth(redisURL.auth.split(":")[1]);

// check the host by setting a value
// when the server is on redis should be on as well
client.set('key', 'redis is on', redis.print);
client.get('key', redis.print);

module.exports = client;
