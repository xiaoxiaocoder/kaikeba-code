const { promisify } = require('util'); 
const figlet = promisify(require('figlet'))
const clear = require('clear')
const chalk = require('chalk')
const { clone } = require('./download')
const open = require('open')

const log = content => console.log(chalk.green.bold(content))
const spawn = async (...args) => {
  const { spawn } = require('child_process')
  const options = args[args.length - 1]
  if(process.platform === 'win32') {
    // 设置shell选项为true, 以隐式调用cmd
    options.shell = true
  } else {
    console.log('Linux/Unix')
  }
  return new Promise(resolve => {
    const proc = spawn(...args)
    proc.stdout.pipe(process.stdout)
    proc.stderr.pipe(process.stderr)
    proc.on('close', () => {
      resolve()
    })

  })
}

module.exports = async name => {
  clear();
  const data = await figlet('ALIEN CLI')
  log(data)

  // 克隆项目
  log(`🛩 创建项目: ${name}`)
  await clone('su37josephxia/vue-template', name)
  
  // 安装依赖
  log('安装依赖...')
  await spawn('cnpm', ['install'], { cwd: `./${name}` })

  log(`安装完成!!
  To get Start:
  =================
    cd ${name}
    npm run serve
  ================
  `)

  // 打开浏览器
  await open("http://localhost:8080")
  await spawn('npm', ['run', 'serve'], {cwd: `./${name}`})
}