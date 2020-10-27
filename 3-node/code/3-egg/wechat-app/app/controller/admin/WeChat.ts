import { Controller } from 'egg';

export default class WeChatController extends Controller {
  public async create() {
    const { ctx } = this;
    const { name, appId, appSecret, token  } = ctx.request.body;
    const res = await ctx.service.weChat.saveOfficalAccount({name, appId, appSecret, token})
    ctx.body = res
  }
}