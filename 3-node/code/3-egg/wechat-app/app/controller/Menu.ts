import { Controller } from 'egg';

export default class MenuController extends Controller {
  public async index() {
    const { ctx, app } = this;
    const menu = ctx.request.body;
    const data = await app.wechatApi.createMenu(menu)
    ctx.body = data
  }

  public async list() {
    const { ctx, app } = this;
    const data = await app.wechatApi.getMenu();
    ctx.body = data
  }
}