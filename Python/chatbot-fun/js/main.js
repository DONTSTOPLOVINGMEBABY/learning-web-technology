const express = require('express')
const app = express()
const dotenv = require('dotenv').config()
const PORT = process.env.PORT || 3000




async function main () {

    let request = await fetch('http://localhost:5000/receive-message', {
        method : 'POST', 
        headers : {
            'Content-Type' : 'application/json'
        }, 
        body : JSON.stringify({
            'message' : 'hello there, master wellington'
        })
    }) 

    if (!request.ok) { console.log("failed") ; return }

    let response = await request.json()
    console.log(response)
    return
}

main()







// app.listen(PORT, () => {
//     console.log(`[LISTENING] on port ${PORT}`)
// })