export default app => {
  const DataTypes = app.Sequelize;

  const WeChat = app.model.define(
    // 微信账号
    'wechat',
    // 表结构
    {
      // id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
      appId: { type: DataTypes.STRING(30), primaryKey: true},
      name: DataTypes.STRING(30),
      appSecret: DataTypes.STRING(30),
      token: DataTypes.STRING(30)
    }, 
    // 配置项
    {
      // 强制表名称等于模型名称
      // freezeTableName: true
      tableName: 'wechat', // 直接提供表名
      // // 索引 https://demopark.github.io/sequelize-docs-Zh-CN/other-topics/indexes.html
      // indexes: [
      //   {
      //     // name: 'public_by_author',
      //     fields: ['app_id'],
      //     // where: {
      //     //   // TODO: ????
      //     //   status: 'public'
      //     // }
      //   }
      // ]
    }
  );

  /**
   * 模型同步
   * User.sync()  如果表不存在,则创建该表(如果存在, 则不执行任何操作)
   * User.sync({force: true}) 创建表, 如果存在, 先删除,再创建
   * User.sync({alter: true}) 检查数据库中标的状态(具有哪些列, 数据类型等), 然后再表中进行必要的更改以使其余模型匹配
   * 
   * 删除表
   * await User.drop()
   * 
   * 删除所有表
   * await sequelize.drop()
   * 
   * 数据库安全检查
   * sync和drop操作是破坏性的, Sequelize使用match参数作为附加的安全检查, 该检查将接受RegExp
   * sequelize.sync({force: true, match: /_test$/}); // 仅当数据库名称以_test结尾时, 它才会运行.sync()
   * 
   * TODO:生产环境同步 https://github.com/demopark/sequelize-docs-Zh-CN/blob/master/other-topics/migrations.md
   * sync({force: true})和sycn({alter:true}) 可能是破坏性操作, 不建议用于生产级软件中.
   * 应该在Sequelize CLI的帮助下使用高级概念Migrations(迁移)进行同步 
   */
  // 表不存在的时候会新建表
  WeChat.sync({alter: true});
  return WeChat;
}