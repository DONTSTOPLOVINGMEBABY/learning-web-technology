import Express from "express"
const Router = Express.Router()
import { SignUp, Login } from './services.js'
import { AuthMiddleware } from './middlewares.js'


Router.post('/login', Login)

Router.post('/signup', SignUp)

Router.get('/protected-resource', AuthMiddleware, (req, res) => {
    res.send(req.user)
})


export default Router