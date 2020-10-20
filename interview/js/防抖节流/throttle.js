/**
 * 一段时间内, 以第一次结果为准
 */

function throttle(fn, delay) {
  let last;
  return (...args) => {
    const now = +Date.now()
    if (now > last + delay) {
      last = now;
      fn.apply(this, args)
    }
  }
}