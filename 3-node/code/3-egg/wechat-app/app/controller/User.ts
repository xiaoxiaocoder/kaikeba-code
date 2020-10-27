import { Controller } from 'egg';

export default class UserController extends Controller {
  public async index() {
    const { ctx, app } = this;
    const data = await app.wechatApi.getFollowers()
    if (data && data.data) {
      const appId = app.config.wechatApi.appId;
      const { openid } = data.data;
      if (openid && openid.length) {
        const { user_info_list }  = await app.wechatApi.batchGetUsers(openid);
        if (user_info_list && user_info_list.length) {
          try {
            user_info_list.forEach(async item => {
              item.offiaccountId = appId;
              console.log(item)
              // item.tagid_list = JSON.stringify(item.tagid_list)
              await ctx.service.user.create(item)
            })
          } catch (error) {
            console.log('error', error)
          }
        }
      }
    }
    ctx.body = await ctx.service.user.list()
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
    const data = await ctx.service.user.list()
    ctx.body = data || []
  }
}