import { Controller } from 'egg';
import * as url from 'url';
import * as crypto from 'crypto';


export default class AuthApplication extends Controller {
  /**
   * 微信认证接口
   */
  public async index() {
    const { ctx, app } = this;
    app.logger.info("微信认证...", ctx.url);
    const { query } = url.parse(ctx.url, true);
    const {
      signature, // 微信加密签名，signature结合了开发者填写的token参数和请求中的timestamp参数、nonce参数。
      timestamp, // 时间戳
      nonce, // 随机数
      echostr, // 随机字符串
    } = query;
    app.logger.info("wechat", query);
    // 将 token timestamp nonce 三个参数进行字典序排序并用sha1加密
    let str = [app.config.wechatApi.token, timestamp, nonce].sort().join("");
    app.logger.info("str", str);
    let strSha1 = crypto.createHash("sha1").update(str).digest("hex");
    app.logger.info(`自己加密后的字符串为：${strSha1}`);
    app.logger.info(`微信传入的加密字符串为：${signature}`);
    app.logger.info(`两者比较结果为：${signature == strSha1}`);
    // 签名对比，相同则按照微信要求返回echostr参数值
    if (signature == strSha1) {
      ctx.body = echostr;
    } else {
      ctx.status = 401;
    }
  }
}
