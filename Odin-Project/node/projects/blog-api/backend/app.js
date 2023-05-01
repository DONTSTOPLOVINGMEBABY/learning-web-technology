const express = require('express') 
const app = express()
const dotenv = require('dotenv')
const path = require('path')
const mongoose = require('mongoose')
dotenv.config()

const PORT = process.env.PORT || 3000 

// express middleware
app.use(express.urlencoded({ extended : true }))
app.use(express.static(path.join(__dirname, 'public'))) 

// connect mongoose
const db_connect = process.env.CONNECTION_STRING
mongoose.set('strictQuery', false)
async function connect_goose () {
    await mongoose.connect(db_connect)
}
connect_goose()


app.get("/", (req, res) => {
    res.send("hello")
})

app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`)
})