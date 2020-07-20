/**
 * 1.写一个 mySetInterVal(fn, a, b),每次间隔 a,a+b,a+2b 的时间，然后写一个 myClear，停止上面的 mySetInterVal
 */

 function mySetInterVal(fn, a, b) {
   // 执行次数
  let times = 0;
  // 计时器
  let timerId
  function _interval()  {
      let duration = a + times * b;
      // 清除前一次的timeout
      timerId && clearTimeout(timerId)
      timerId = setTimeout(function() {
        fn.call(null)
        times++;
        _interval()
    }, duration)
  }
  _interval();
  return function clear(){
    timerId && clearTimeout(timerId)
  }
 }

const myClear = mySetInterVal(() => console.log('hello world'), 100, 200)

setTimeout(myClear, 2000)