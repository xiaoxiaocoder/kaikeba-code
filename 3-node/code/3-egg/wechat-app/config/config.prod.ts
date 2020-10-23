import { EggAppConfig, PowerPartial } from 'egg';

export default () => {
  const config: PowerPartial<EggAppConfig> = {
    wechatApi: {
      appid: "wxb9d6a8ee161cf34a",
      appsecret: "26fcacf9b7ef731c8350d5d20b7c0fd6",
      token: "woshitokena",
    }
  };
  return config;
};
