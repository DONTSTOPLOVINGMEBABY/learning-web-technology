import CreateApp from "./app.js"
const app = CreateApp()


app.listen(4000, () => {
    console.log('Listening on PORT 4000')
})