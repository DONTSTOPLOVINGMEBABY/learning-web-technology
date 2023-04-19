const express = require("express")
const morgan = require("morgan")
const app = express()

// Customize Morgan format to include IP address
morgan.token('remote-addr', function (req) {
    return req.headers['x-forwarded-for'] || req.socket.remoteAddress;
});
const customMorganFormat = '":method :url HTTP/:http-version" :status :res[content-length] ":referrer" ":user-agent"';  
app.use(morgan(customMorganFormat));




let counter = 0 

app.use(throwError)

app.get("/", (request, response, next) => {
    counter += 1 
    response.send(`Counter: ${counter}`)
})

function throwError (request, response, next) {
    if (counter == 15){
        let error = new Error("You have a big problem here!")   
        next(error)
    }
    next()
}

function errorHandler(error, request, response, next) { 
    counter = 0 
    response.send(`You have a big error here\n${error}`)
}



/*

Try this

app.use(first)
app.use(second)


app.get("/", (req, res) => {
    console.log("This still runs")
})


function first(req, res, next) {
    console.log("Runs everytime")
    res.send("Hello, World!")
    next()
}

function second(req, res, next){
    console.log("second")
    next()
}

*/


app.use(errorHandler)


app.listen(3000, "localhost")