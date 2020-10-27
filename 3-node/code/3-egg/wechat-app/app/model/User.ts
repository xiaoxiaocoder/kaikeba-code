export default app => {
  const DataTypes = app.Sequelize;
  // const sequelize = app.model;
  const User = app.model.define(
    'user',
    {
      id: {
        type: DataTypes.BIGINT,
        primaryKey: true,
        autoIncrement: true
      },
      offiaccountId: {
        type: DataTypes.STRING(30),
        field: 'offiaccountId'
      },
      openid: DataTypes.STRING(30),
      // openid: {
      //   type: DataTypes.STRING(64),
      //   allowNull: false,
      //   unique: true,
      //   field: 'openid'
      // },
      nickname: DataTypes.STRING(30),
      sex: DataTypes.INTEGER,
      language: DataTypes.STRING(30),
      city: DataTypes.STRING(30),
      province: DataTypes.STRING(30),
      country: DataTypes.STRING(30),
      headimgurl: DataTypes.STRING(30),
      subscribe_time: DataTypes.DATE,
      remark: DataTypes.STRING(30),
      groupId: DataTypes.INTEGER,
      tagid_list: {
        type: DataTypes.STRING(30),
        get () {
          // TODO: 存储是非字符串对象(数组或对象)的处理
          // @ts-ignore
          const raw = this.getDataValue('tagid_list');
          return JSON.parse(raw)
        },
        set (value) {
          const jsonStr = JSON.stringify(value);
          // @ts-ignore
          this.setDataValue('tagid_list', jsonStr);
        }
      },
      subscribe_scene: DataTypes.STRING(30),
      qr_scene: DataTypes.INTEGER,
      qr_scene_str: DataTypes.STRING(30),
    },
    {
      indexes: [
        {
          unique: true,
          fields: ['offiaccountId', 'openid']
        }
      ]
    }
  );
  // 设置关联关系  https://www.npmjs.com/package/egg-sequelize#associate
  User.associate = function() {
    // console.log('================', app.model.WeChat.hasMany, app.model.User)
    // app.model.User.belongsTo(app.model.WeChat, {as: 'wechat'})
    // TODO:  as, foreignKey ???
    app.model.User.belongsTo(app.model.WeChat, { foreignKey: 'offiaccountId' })

  }


  // TODO: 生产环境使用 命令行 迁移工具
  User.sync({alert: true});

  return User;
}