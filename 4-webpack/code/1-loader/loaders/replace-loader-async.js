// 函数 声明式函数， 不能时箭头函数
// 函数必须有返回值
module.exports = function(source) {
  console.log('this.query :>> ', this.query);
  // 返回字符串
  // return source.replace('Hello', 'Hi');

  // 返回一个对象
  // this.callback(null, source.replace('Hello', 'Hi～'));

  // 异步返回
  const callback = this.async()
  setTimeout(() => {
    callback(null, source.replace(/Webpack/, this.query.name));
  }, 2000);
}