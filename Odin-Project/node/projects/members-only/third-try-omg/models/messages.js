const mongoose = require("mongoose")
const Schema = mongoose.Schema


const MessageSchema = new Schema({
    title : { type: String, require: true, maxLength: 100 }, 
    content: { type: String, require: true, maxLength: 5000 }, 
    uploadDate : { type: Date, require: true }, 
    author : {type : String, require : true }, 
})


MessageSchema.virtual("url").get( function () {
    return `/Messages/${this._id}`
})

module.exports = mongoose.model("Message", MessageSchema)