const express = require('express')
const app = express()
const redis = require('redis')
const PORT = 5000
const morgan = require('morgan')

const client = redis.createClient()
const DEFAULT_EXPIRATION = 10 // seconds 
async function connect_redis () {
    await client.connect()    
} connect_redis()


app.use(morgan('dev'))


function thisTakesAWhile () {
    let number = 0 
    for (let i = 0 ; i < 100000000 ; i++){
        number += i 
    }
    return number 
}


app.get("/", async (req, res) => {
    let number = await client.get('cached-number')
    if (number){
        return res.send(`${number}`)    
    }
    else {
        number = thisTakesAWhile()
        await client.setEx("cached-number", 10, JSON.stringify(number))
        return res.send(`${number}`)
    }
})


app.listen(PORT, () => {
    console.log(`[LISTENING] Listening on port ${PORT}`)
})  