class AppBootHook {
  constructor(public app) {
    this.app = app;
  }

  async didReady() {
    // 应用已经启动完毕

    // const ctx = await this.app.createAnonymousContext();
    // await ctx.service.Biz.request();
    console.log('egg didReady')
  }
}

module.exports = AppBootHook;
