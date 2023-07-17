import CreateApp from "./app.js"
import dotenv from 'dotenv'
dotenv.config()
const app = CreateApp(process.env.CONNECTION_STRING)


app.listen(4000, () => {
    console.log('Listening on PORT 4000')
})