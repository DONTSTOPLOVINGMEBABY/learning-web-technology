const express = require('express')
const app = express() 
const fs = require('fs')
const cors = require('cors')
const {parse} = require('json2csv')
const dotenv = require('dotenv')
dotenv.config()
const api_key = process.env.ALPHA_VANTAGE_API_KEY
const PORT = 3001

function get_daily_URL (stock, size='compact') {
    return `https://www.alphavantage.co/query?function=TIME_SERIES_DAILY&symbol=${stock}&outputsize=${size}&apikey=${api_key}`
}

function get_company_info (stock, size='compact'){
    return `https://www.alphavantage.co/query?function=OVERVIEW&symbol=${stock}&apikey=${api_key}`
}

app.use(cors())

app.use(express.urlencoded({ extended : true }))


app.get("/", (req, res) => {
    // fs.readFile('./data/S&P500_daily.csv', (err, data) => {
    //     if (err) { res.sendStatus(500) }
    //     res.setHeader('Content-Type', 'text/csv')   
    //     res.send(data)
    // })
    res.send("hi there")
})

app.get("/download", async (req, res) => {
    let stock = "AA"
    let data = await fetch(get_daily_URL(stock))
    const dates = []
    const prices = []
    let hello = await data.text() 
    hello = JSON.parse(hello)
    for (let nicety in hello["Time Series (Daily)"]){
        let the_date = new Date(nicety.split(":")[0])
        let dateString = `${(the_date.getMonth() + 1).toString()}/${the_date.getDate()}`    
        dates.push(dateString)
        prices.push(hello["Time Series (Daily)"][nicety]['1. open'])
    }
    let package = dates.map( (date, index) => {
        return {date : date , price: prices[index]}
    })
    console.log(Object.keys(hello))
    console.log(hello["Meta Data"])
    // {  }
    console.log(package)
    console.log(api_key)
    res.json({name : stock, data : package})
})

app.post("/form-guy/:stock", async (req, res) => {
    console.log(req.body.stock)
    let stock = req.body.stock
    let data = await fetch(get_daily_URL(req.params.stock))
    const dates = []
    const prices = []
    let hello = await data.text() 
    hello = JSON.parse(hello)
    for (let nicety in hello["Time Series (Daily)"]){
        let the_date = new Date(nicety.split(":")[0])
        let dateString = `${(the_date.getMonth() + 1).toString()}/${the_date.getDate()}`    
        dates.push(dateString)
        prices.push(hello["Time Series (Daily)"][nicety]['1. open'])
    }
    console.log(hello)
    let package = dates.map( (date, index) => {
        return {date : date , price: prices[index]}
    })
    console.log(Object.keys(hello))
    console.log(hello["Meta Data"])
    console.log(package)
    // {  }
    res.json({name : req.params.stock, data : package.reverse()})
})


app.listen(PORT, () => {
    console.log(`Listening on ${PORT}`)
})