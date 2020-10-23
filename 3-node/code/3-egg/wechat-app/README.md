# hackernews-async-ts

[Hacker News](https://news.ycombinator.com/) showcase using typescript && egg

## QuickStart

### Development

**设置网络代理, 将内网地址映射到外网**

https://mp.weixin.qq.com/debug/cgi-bin/sandboxinfo?action=showinfo&t=sandbox/index

```
$ npm run nat
```

```bash
$ npm i
$ npm run dev
$ open http://localhost:7001/
```

Don't tsc compile at development mode, if you had run `tsc` then you need to `npm run clean` before `npm run dev`.

### Deploy

```bash
$ npm run tsc
$ npm start
```

### Npm Scripts

- Use `npm run lint` to check code style
- Use `npm test` to run unit test
- se `npm run clean` to clean compiled js at development mode once

### Requirement

- Node.js 8.x
- Typescript 2.8+


## reids

https://cloud.tencent.com/developer/article/1562815

从reids官网下载配置文件

```sh
wget -c http://download.redis.io/redis-stable/redis.conf
```

```sh
# 挂载配置文件
docker run -p 6379:6379 --name redis -v /usr/local/docker/redis.conf:/etc/redis/redis.conf -v /usr/local/docker/data:/data -d redis redis-server /etc/redis/redis.conf --appendonly yes

# 不挂载配置文件
docker run --name redis -p 6379:6379 -d --restart=always redis redis-server --appendonly yes --requirepass "这是密码"
```
