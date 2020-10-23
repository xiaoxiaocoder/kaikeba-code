import { Service } from 'egg';

/**
 * User Service
 */
export default class User extends Service {

  public async Users() {
    const { ctx } = this
    return await ctx.model.User.findAll()
  }
}
