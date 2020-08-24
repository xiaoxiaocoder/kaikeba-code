const { promisify } = require('util');
const downladGitRepo = promisify(require('download-git-repo'))
const ora = require('ora')

module.exports.clone = async function(repo, desc) {
  const process = ora(`download ......${repo}`)
  process.start()
  await downladGitRepo(repo, desc)
  process.succeed()
}