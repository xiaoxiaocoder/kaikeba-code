import { Controller } from 'egg';

export default class UserController extends Controller {
  public async index() {
    const { ctx, app } = this;
    const data = await app.wechatApi.getFollowers()
    ctx.body = data
  }

  public async info() {
    const { ctx, app } = this;
    const openid = ctx.query.openid;
    // console.log(openid)
    // const data = await app.wechatApi.getUser(openid)
    const data = await app.wechatApi.getUser({openid, lang: 'zh_CN'})
    ctx.body = data
  }

  public async list() {
    const { ctx } = this;
    // console.log(openid)
    // const data = await app.wechatApi.getUser(openid)
    const data = await ctx.service.user.Users()
    ctx.body = data
  }
}