const { Sequelize, DataTypes, Model } = require('sequelize');
module.exports.initModel = async sequelize => {
  // 暗号: 哈希算法
  try {
    // 测试连接
    await sequelize.authenticate();

    // 定义表结构
    const User = sequelize.define('User', { name: DataTypes.STRING });
    const Product = sequelize.define('Product', { title: DataTypes.STRING });
  
    // 设置一对多关系  
    // https://www.sequelize.com.cn/core-concepts/assocs#%E4%B8%80%E5%AF%B9%E5%A4%9A%E5%85%B3%E7%B3%BB
    User.hasMany(Product)
    Product.belongsTo(User)
  
    // 同步所有表到数据库 https://www.sequelize.com.cn/core-concepts/model-basics#%E4%B8%80%E6%AC%A1%E5%90%8C%E6%AD%A5%E6%89%80%E6%9C%89%E6%A8%A1%E5%9E%8B
    await sequelize.sync(); // { force: true, match: /_test$/ }

    return { User, Product }
  } catch (error) {
    console.error('database error:', error);
  }
  // ##END##
} 
