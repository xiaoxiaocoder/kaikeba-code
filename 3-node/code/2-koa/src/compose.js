function compose(...middlewares) {
  return function() {
    return dispatch(0);

    function dispatch(i) {
      let fn = middlewares[i]
      if(!fn) {
        return Promise.resolve()
      }

      return Promise.resolve(
        fn(function next() {
          return dispatch(i+1)
        })
      )
    }
  }
}


async function fn1 (next) {
  console.log('fn1 started')
  await next()
  console.log('fn1 end')
}


async function fn2 (next) {
  console.log('fn2 started')
  await next()
  console.log('fn2 end')
}

const finalFn = compose(fn1, fn2);
finalFn()

module.exports =  compose