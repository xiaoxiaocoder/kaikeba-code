const KoaRouter = require('koa-router')
const xml2js = require("xml2js");
const url = require("url");

const crypto = require("crypto");
const { wechatConf } = require('../conf')

const router = new KoaRouter();

module.exports = function(wechatAPI) {

  router.get("/getFollowers", async (ctx) => {
    const data = await wechatAPI.getFollowers()
    ctx.body = data
  });

  router.get("/wechat", (ctx) => {
    console.log("微信认证...", ctx.url);
    const { query } = url.parse(ctx.url, true);
    const {
      signature, // 微信加密签名，signature结合了开发者填写的token参数和请求中的timestamp参数、nonce参数。
      timestamp, // 时间戳
      nonce, // 随机数
      echostr, // 随机字符串
    } = query;
    console.log("wechat", query);
    // 将 token timestamp nonce 三个参数进行字典序排序并用sha1加密
    let str = [wechatConf.token, timestamp, nonce].sort().join("");
    console.log("str", str);
    let strSha1 = crypto.createHash("sha1").update(str).digest("hex");
    console.log(`自己加密后的字符串为：${strSha1}`);
    console.log(`微信传入的加密字符串为：${signature}`);
    console.log(`两者比较结果为：${signature == strSha1}`);
    // 签名对比，相同则按照微信要求返回echostr参数值
    if (signature == strSha1) {
      ctx.body = echostr;
    } else {
      ctx.status = 401;
    }
  });

  // 接受信息
router.post("/wechat", (ctx) => {
  // console.log('---------------wechat----------')
  const { xml: msg } = ctx.request.body;
  console.log("Receive:", msg);
  const builder = new xml2js.Builder();
  const result = builder.buildObject({
    xml: {
      ToUserName: msg.FromUserName,
      FromUserName: msg.ToUserName,
      CreateTime: Date.now(),
      MsgType: msg.MsgType,
      Content: "Hello " + msg.Content,
    },
  });
  ctx.body = result;
  // wechatAPI.sendText(msg.FromUserName[0], result);

});

  return router.routes()
}