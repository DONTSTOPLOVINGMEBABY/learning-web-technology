import Express from "express"
import morgan from "morgan"
import pkg from 'jsonwebtoken'
import cors from 'cors'
const { sign, verify } = pkg
const app = Express()


const user = {
    username : 'user', 
    password : '1234'
}

const protected_data = 'this is totally awesome and totally protected. hands off'

const ACCESS_TOKEN = `hello-darkness-my-old-friend` // not that serious 

app.use(morgan('dev'))
app.use(cors())

app.get('/authorize', async (req, res) => {
    try {
        let token = await signToken(user)
        res.json({ 'your-token-good-sir' : token })
    } catch (error) {
        console.error(error)
    }
})

app.get('/protected', authMiddleware, (req, res) => {
    res.json({ protected_data })
})

app.get('/not-protected', (req, res) => {
    res.json('just some simple data')
})


app.get('/test-loader', (req, res) => {
    setTimeout( () => {
        res.send('hello')
    }, 1000)
})



async function signToken (data) {
    return new Promise( (resolve, reject) => {
        sign({ data }, ACCESS_TOKEN, (err, jwt) => {
            if (err) {
                return reject(err)
            }
            return resolve(jwt)
        })    
    })    
}

async function verifyToken (token) {
    return new Promise( (resolve, reject) => {
        verify(token, ACCESS_TOKEN, (err, data) => {
            if (err) { return reject(err) }
            return resolve(data)
        })
    })
}

async function authMiddleware (req, res, next) {
    try {
        let authHeader = req.headers.authorization
        if (!authHeader) {
            return res.status(401).json({ message : 'did you forget the token?' })
        }
        let token_data = await verifyToken(authHeader)
        req.special_data = token_data
        next()
    } catch (error) {
        res.sendStatus(401)
        console.error(error)
    }
}


app.listen(5000, () => {
    console.log('App listening on port 5000')
})