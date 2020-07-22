# 步骤


```bash
git clone --depth=1 git@github.com:vuejs/vue-next.git

cd vue-next

# 修改package.json scripts中dev配置, 增加--sourcemap
node scripts/dev.js --sourcemap

yarn install --ignore-scripts

# 修改rollup打包输出目录地址 rollup.cofig.js/outputConfigs/global/file
```


##  composition-api 官方文档

https://vue-composition-api-rfc.netlify.app/


## TODO

- 使用proxy实现简易响应式系统
- 研究3.0 源码