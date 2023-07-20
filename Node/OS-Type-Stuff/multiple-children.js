const child_process = require('child_process')
const {spawn} = child_process

let find = spawn('find', ['.', '-ls'])
let grep = spawn('grep', ['test'])

grep.stdout.setEncoding('utf-8')

// pipe findoutput to grep stdin
find.stdout.pipe(grep.stdin)

// run grep and output results
grep.stdout.on('data', (data) => {
    console.log(data)
})

// error handling
find.stderr.on('error', (error) => {
    console.error(error)
})
grep.stderr.on('error', (error) => {
    console.error(error)
})

// exit handling for both
find.on('close', (status) => {
    if (status !== 0) {
        console.log(`Find exited with status code ${status}`)
    }
})
grep.on('close', (status) => {
    if (status !== 0) {
        console.log(`Grep exited with status code ${status}`)
    }
})