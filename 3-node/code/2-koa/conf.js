const config = {
  dev: {
    appid: "wxd0cdd2abc6ca0e53",
    appsecret: "19e2cbfe3dd18503af7038630c220d63",
    token: "woshitokena",
  },
  prod: {
    appid: "wxb9d6a8ee161cf34a",
    appsecret: "26fcacf9b7ef731c8350d5d20b7c0fd6",
    token: "woshitokena",
  }
}

const redisConfig = {
  dev: {
    host: '172.19.132.241',
    port: 47346,
    password: 'ojNKIAnC3FEwXTfI',
  },
  prod: {

  }
}
const env = process.env.NODE_ENV === 'production' ? 'prod' : 'dev'

module.exports.wechatConf = config[env]
module.exports.redisConf = redisConfig[env]
