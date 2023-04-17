const fs = require('fs') 

// const content = "Append more content!"

// fs.appendFile('./test.txt', content, err => {
//     if (err){
//         console.log(err)
//     }
// })

async function promiseAppendFile() {
    try {
        const content = "Append more content!" 
        await fs.appendFile("./test.txt", content) 
    } catch (error) {
        console.log(error)
    }
}

promiseAppendFile() 