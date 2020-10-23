const coWechatAPI = require('co-wechat-api')
const { wechatConf } = require('../conf')

module.exports = function (redisCo) {
  const { appid, appsecret } = wechatConf
  const redisTokenKey = `${appid}@Token`
  return new coWechatAPI(
    appid, 
    appsecret,
    async function() {
      const token =  await redisCo.get(redisTokenKey)
      console.log('get token :>> ', token);
      return JSON.parse(token)
    },
    async function(token) {
      console.log('set token :>> ', token);
      const { accessToken, expireTime } = token
      await redisCo.setex(redisTokenKey, parseInt((expireTime - Date.now()) / 1000), JSON.stringify(token))
    }
  )
}

// const redisCache = require('../utils/redis')
// const { wetchatConf } = require('../conf')


// const { appid, appsecret } = wetchatConf
// const redisTokenKey = `${appid}@Token`
// const wechatAPI = new coWechatAPI(
//   appid, 
//   appsecret,
//   async function() {
//     const token =  await redisCo.get(redisTokenKey)
//     console.log('get token :>> ', token);
//     return JSON.parse(token)
//   },
//   async function(token) {
//     console.log('set token :>> ', token);
//     const { accessToken, expireTime } = token
//     await redisCo.setex(redisTokenKey, expireTime - Date.now(), JSON.stringify(token))
//   }
// )

