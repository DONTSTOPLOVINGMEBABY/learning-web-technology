const child_process = require('child_process')
const {spawn} = child_process

let ps = spawn('ps', ['ax'])
let grep = spawn('grep', [''])

grep.stdout.setEncoding('utf-8')

ps.stdout.pipe(grep.stdin)

ps.stderr.on('data', (data) => {
    console.error(data)
})

ps.on('close', status => {
    if (status !== 0) {
        console.error(`ps closed with a status ${status}`)
    }
})

grep.stdout.on('data', (data) => {
    console.log(data)
})

grep.stderr.on('data', (data) => {
    console.error(data)
})

grep.on('close', status => {
    if (status !== 0) {
        console.error(`grep closed with a status ${status}`)
    }
})