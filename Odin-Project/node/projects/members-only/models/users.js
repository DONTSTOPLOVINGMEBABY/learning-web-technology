const mongoose = require("mongoose")
const Schema = mongoose.Schema

const UserSchema = new Schema({
    firstName : { type: String, require: true, maxLength: 100 }, 
    lastName : { type: String, require: true, maxLength: 100 }, 
    username : { type: String, require: true, maxLength: 100 }, 
    password : { type: String, require: true }, 
    isMember : { type: Boolean, require: true }, 
})



UserSchema.virtual("url").get( function () {
    return `/Users/${this.username}`
})

module.exports = mongoose.model("User", UserSchema)

