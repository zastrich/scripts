const util = require('util')
const exec = util.promisify(require('child_process').exec)

async function lsWithGrep () {
  try {
    const { stdout, stderr } = await exec('git checkout master')
    console.log('stdout:', stdout)
    console.log('stderr:', stderr)
  } catch (err) {
    console.error(err)
  }
}

lsWithGrep()