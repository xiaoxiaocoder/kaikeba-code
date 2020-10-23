const Koa = require('koa')
const xmlParser = require("koa-xml-body");

const { redisConf } = require('../conf')
const redisCo = require('../utils/redis')(redisConf)

const app = new Koa()

app.use(xmlParser());

const router = require('./router')
const wechatAPI = require('./wechat-api')(redisCo)
app.use(router(wechatAPI))

app.listen(80)