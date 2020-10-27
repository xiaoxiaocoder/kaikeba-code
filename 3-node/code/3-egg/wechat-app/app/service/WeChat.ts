import { Service, IModel } from 'egg';

export default class WeChat extends Service {

  public async saveOfficalAccount(wechat:IModel['Wechat']) {
    const { ctx } = this
    return await ctx.model.WeChat.create(wechat);
  }
}