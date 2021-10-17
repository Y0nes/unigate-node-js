const redis = require("redis");
const {redisConfig} = require('./config');

// authenticate to redis cli & hosting
const client = redis.createClient(
    redisConfig.port,
     redisConfig.host
   );
   client.auth(redisConfig.auth);
 
  // checking the connectivity
 client.on("error", function(error) {
   console.error(error);
 });

 // check the host by setting a value
 // when the server is on redis should be on as well
client.set("key", "redis is on", redis.print);
client.get("key", redis.print);


module.exports = client;