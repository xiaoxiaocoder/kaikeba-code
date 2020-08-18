/**
 * 自己实现 call, apply, bind
 */

Function.prototype.myCall = function(ctx, ...args) {
  const fn = Symbol(Math.random())
  ctx[fn] = this;
  ctx[fn](...args)
  delete ctx[fn]
}

Function.prototype.myApply = function(ctx, ...args) {
  const fn = Symbol(Math.random())
  ctx[fn] = this;
  ctx[fn](args);
  delete ctx[fn];
}

Function.prototype.myBind = function(ctx, ...wrapperArgs){
  const _this = this
  function fn(...innerArgs) {
    // this是否是fToBind的实例 也就是返回的fToBind是否通过new调用
    const isFnInstance = this instanceof fn;
    // new调用就绑定到this上,否则就绑定到传入的objThis上
    const context = isFnInstance ? this : Object(ctx)
    // 用call调用源函数绑定this的指向并传递参数,返回执行结果
    return _this.myCall(context, ...wrapperArgs, ...innerArgs)
  }
  fn.prototype = Object.create(_this.prototype)
  return fn;
}