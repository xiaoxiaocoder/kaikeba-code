export default app => {
  const DataTypes = app.Sequelize;
  // const sequelize = app.model;
  const User = app.model.define(
    'user',
    {
      id: {
        type: DataTypes.BIGINT,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
        field: 'id'
      },
      openId: {
        type: DataTypes.STRING(64),
        allowNull: false,
        unique: true,
        field: 'openId'
      }
    },
    {
      tableName: 'user'
    }
  );

  // User.sync({force: true}).then(() => {
  //   return User.create({
  //     id: 1,
  //     openId: 'test'
  //   })
  // })
  return User;
}