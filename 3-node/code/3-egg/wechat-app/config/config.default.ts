import { EggAppConfig, EggAppInfo, PowerPartial } from 'egg';

export default (appInfo: EggAppInfo) => {
  const config = {} as PowerPartial<EggAppConfig>;

  // override config from framework / plugin
  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + '_1603336892833_2493';

  // add your egg config in here
  config.middleware = [];

  // add your special config in here
  const bizConfig = {
    xmlBodyParser: {
      // https://www.npmjs.com/package/xml2js#options
      xmlOptions: {
        explicitRoot: false,
        explicitArray: false
      }
    },
    security: {
      csrf: {
        // enable: false
        ignore: '/wechat',
      }
    },
    wechatApi: {
      appId: "wxd0cdd2abc6ca0e53",
      appSecret: "19e2cbfe3dd18503af7038630c220d63",
      token: "woshitokena",
      // adapter: 'redis'  默认使用redis
    },
    redis: {
      client: {
        // host: '172.19.132.241', // Redis host
        host: '127.0.0.1', // Redis host
        port: 47346,  // Redis port
        password: 'ojNKIAnC3FEwXTfI',
        db: 0,
      }
    },
      // Muti Clients
      // clients: {
      //   foo: {                 // instanceName. See below
      //     host: '172.19.132.241', // Redis host
      //     port: 47346,  // Redis port
      //     password: 'ojNKIAnC3FEwXTfI',
      //     db: 0,
      //   }
      // }
      sequelize: {
        // delegate: 'myModel', // load all models to `app[delegate]` and `ctx[delegate]`, default to `model`
        // baseDir: 'my_model', // load all files in `app/${baseDir}` as models, default to `model`
        // exclude: 'index.js', // ignore `app/${baseDir}/index.js` when load models, support glob and array
        // more sequelize options
        host: 'localhost',
        dialect: 'sqlite', // 指定链接数据库类型  'mysql'|'mariadb'|'sqlite'|'postgres'|'mssql',
        // 连接池
        pool: {
          max: 5,
          min: 0,
          acquire: 30000,
          // 连接最大空置时间（毫秒），超时后将释放连接
          idle: 10000 
        },
        // 仅 SQLite 适用
        storage: './wechat.db',
        operatorsAliases: false,
      }
  };

  // the return config will combines to EggAppConfig
  return {
    ...config,
    ...bizConfig,
  };
};
