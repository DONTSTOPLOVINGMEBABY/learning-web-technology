const mongoose = require('mongoose')
const Schema = mongoose.Schema

const UserSchema = new Schema({
    username : { type: String, require: true, maxLength: 20 }, 
    password : { type: String, require: true, maxLength: 20 }, 
    comments : { type: Array, require: true }, 
    isAdmin :  { type: Boolean, require: true }
})


module.exports = mongoose.model("User", UserSchema)
