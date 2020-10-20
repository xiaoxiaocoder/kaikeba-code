/**
 * 
 */

 function debounce(fn, delay) {
   let timer = 0;
   return (...args) => {
    if(timer) {
      clearTimeout(timer)
    }

    timer = setTimeout(() => {
      fn.applay(this, args)
    }, delay)
   }
 }