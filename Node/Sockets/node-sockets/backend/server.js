// const {instrument} = require('@socket.io/admin-ui')

const io = require('socket.io')(3000, {
    cors : {
        origin : [ 
            "http://localhost:5173", 
            "http://localhost:5174", 
            "http://localhost:5175",
            "https://admin.socket.io", 
        ]
    }
})

io.on('connection', socket => {
    console.log(socket.id)
    socket.on('send-message', (message) => {
        if (!message.room){
            socket.broadcast.emit('receive-message', message)
        } else {
            socket.to(message.room).emit('receive-message', message)
        }
    })
    socket.on('join-room', (room, cb) => {
        socket.join(room)
        cb(`Joined ${room}`)
    })
}) 

/* User Name Spaces */

const userIo = io.of("/user")
userIo.on('connection', socket => {
    console.log(`connected to user name space with username ${socket.username}`)
})

userIo.use((socket, next) => {
    if (socket.handshake.auth.token) {
        socket.username = 'hank' // get usernamefromToken
        next()
    } else {
        next( new Error("Please provide a token") )
    }
})



// instrument( io, {
//     auth : false, 
//     mode : "development", 
// })