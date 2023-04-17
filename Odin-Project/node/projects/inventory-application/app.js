const createError = require("http-errors")
const express = require('express')
const path = require('path') 
const mongoose = require('mongoose') 
const dotenv = require('dotenv')
const morgan = require('morgan')
// ------------------------- // 
const indexRouter = require('./routes/index')

const app = express() 
dotenv.config()

mongoose.set('strictQuery', false)
const mongoDB = process.env.connection_string 

main().catch(err => console.log(err)) 
async function main() {
    await mongoose.connect(mongoDB)
}

app.set('view engine', 'pug')



app.use(morgan('dev'))
app.use(express.json())
app.use(express.urlencoded({ extended: false }))

app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter)

app.use((req, res, next) => {
    next(createError(404))
})

app.use(function(err, req, res, next) {
    res.locals.message = err.message;
    res.locals.error = req.app.get('env') === 'development' ? err : {};

    res.status(err.status || 500);
    res.render('error');
});

module.exports = app 