
const redis = require('redis')
const wrapper = require('co-redis')

module.exports = function (conf) {
  const redisClient = redis.createClient(conf)
  redisClient.on('connect', function() {
    console.log('redis connect successfully!')
  })
  return wrapper(redisClient);
}