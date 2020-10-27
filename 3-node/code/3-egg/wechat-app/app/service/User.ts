import { Service, IModel } from 'egg';

/**
 * User Service
 */
export default class User extends Service {

  public async list() {
    const { ctx } = this
    return await ctx.model.User.findAll()
  }

  public async create(user:IModel['User']) {
    const { ctx } = this
    return await ctx.model.User.create(user)
  }
}
