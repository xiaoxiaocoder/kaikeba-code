import { EggPlugin } from 'egg';

const plugin: EggPlugin = {
  // static: true,
  // nunjucks: {
  //   enable: true,
  //   package: 'egg-view-nunjucks',
  // },
  wechatApi: {
    enable: true,
    package: 'egg-wechat-api',
  },
  redis: {
    enable: true,
    package: 'egg-redis',
  },
  xmlBody: {
    enable: true,
    package: 'egg-xml-body',
  }
};

export default plugin;
