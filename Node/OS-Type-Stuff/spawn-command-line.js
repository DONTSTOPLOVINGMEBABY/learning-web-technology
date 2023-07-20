const child_process = require('child_process')

let pwd = child_process.spawn('ls', ['-lh', '/Users/henryjacobs'])

pwd.stdout.on('data', data => {
    console.log(data.toString('utf-8'))
}) 

pwd.stderr.on('data', error => {
    console.error(error)
})

pwd.on('close', (code) => {
    console.log(`Child process exited with code ${code}`)
})

console.log('here')