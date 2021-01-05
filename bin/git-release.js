const gitRelease = async ([ version = '1.0.0', ...args]) => {
  console.log('Roda gitRelease')
  
  /* const util = require('util')
  const exec = util.promisify(require('child_process').exec)
  
  try {
    const { stdout, stderr } = await exec('git checkout main')
    console.log('stdout:', stdout)
    console.log('stderr:', stderr)
  } catch (err) {
    console.error(err)
  } */
}

module.exports = gitRelease