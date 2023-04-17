const fs = require('fs') 

const content = 'Some Content!'


// async 

fs.writeFile('./test.txt', content, err => {
    if (err){
        console.log(err)
    }
})

console.log("hi first")

fs.writeFileSync( './second.txt', content, err => {
    if (err){
        console.log(err)
    }
})

console.log("hi second")

