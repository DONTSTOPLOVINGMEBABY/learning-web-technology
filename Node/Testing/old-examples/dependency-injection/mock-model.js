const mongoose = require('mongoose')
const Schema = mongoose.Schema
const Types = Schema.Types

const FakeUserSchema = new Schema({
    username : { type : Types.String, require: true }, 
    password : { type : Types.String, require: true }, 
}, { timestamps : true })

module.exports = mongoose.model('User', FakeUserSchema)