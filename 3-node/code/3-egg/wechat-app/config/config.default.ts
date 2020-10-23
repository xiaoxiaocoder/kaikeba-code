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
        host: '172.19.132.241', // Redis host
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
  };

  // the return config will combines to EggAppConfig
  return {
    ...config,
    ...bizConfig,
  };
};
