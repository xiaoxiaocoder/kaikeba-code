import './style/index.less'
import imgSrc from './assets/imgs/test.png'

console.log(1);
console.log(imgSrc)

const app = document.querySelector('#app')
const img = new Image()
img.src = imgSrc
app.appendChild(img)
