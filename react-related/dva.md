# dva

## 安装 dva-cli

```sh
npm i -g dva-cli
yarn global add dva-cli -g

dva -v
```

## 创建新应用

```sh
dva new dva-quickstart
```

##  使用andt

```
npm install antd babel-plugin-import -S
```

.webpackrc
```json
{
  "extraBabelPlugins": [
    ["import", { "libraryName": "antd", "libraryDirectory": "es", "style": "css" }]
  ]
}
```