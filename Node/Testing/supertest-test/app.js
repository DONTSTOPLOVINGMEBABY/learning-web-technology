import Express from "express"



import mongoose from "mongoose"
import dotenv from "dotenv"
import cors from "cors"
import Router from "./router.js"
import morgan from "morgan"
import cookieParser from "cookie-parser"
dotenv.config()

function CreateApp() {
    const app = Express()

    // constants 
    const DB = process.env.CONNECTION_STRING
    const PORT = process.env.PORT 

    // Connect DB
    async function connect_mongo () {
        let connection = await mongoose.connect(DB)
        console.log(`[CONNECTED] Mongo`)
    }
    connect_mongo()


    // Middlewares 

    app.use(Express.json())
    app.use(Express.urlencoded({ extended : true }))
    app.use(cors())
    app.use(morgan('dev'))
    app.use(cookieParser())

    // Routes
    app.use('/', Router)


    // Error 
    app.use((err, req, res, next) => {
        console.error(err.stack)
        res.status(500)
    })

    return app    
}

export default CreateApp 