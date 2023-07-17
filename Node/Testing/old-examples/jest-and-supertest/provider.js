const mongoose = require('mongoose')

async function connect_mongoose (connection_string) {
    let connection = await mongoose.connect(connection_string)
    console.log(`Connected Mongo`)
}

module.exports = connect_mongoose