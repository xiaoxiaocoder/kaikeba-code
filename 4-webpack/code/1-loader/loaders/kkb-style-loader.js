// 暗号：可以做，但没必要
module.exports = function(source) {
  return `
    const ele = document.createElement('style');
    ele.type = 'text/css'
    ele.innerHTML = ${source}
    document.head.appendChild(ele)
  `
}