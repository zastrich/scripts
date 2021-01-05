const scripts = require('./scripts')

const [,, command, ...args] = process.argv

if (typeof scripts[command] === 'function') {
  scripts[command](args)
} else {
  console.log('')

  if (typeof command !== 'undefined') {
    console.log('\x1b[36m%s\x1b[32m%s\x1b[36m', 'Script ', `"${command}"`, 'not found')
    console.log('')
  }
  
  console.log('\x1b[36m%s', 'Available scripts:')
  console.log('\x1b[31m%s', `${Object.keys(scripts).join('\n')}`)
}
