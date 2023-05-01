const mongoose = require("mongoose")
const Schema = mongoose.Schema

const CommentSchema = new Schema({
    userId : { type: String, require: true }, 
    comment : { type: String, require: true }, 
    uploadDate : { type: Date, require: true }, 
    postId : { type : String, require: true }, 
})

module.exports = mongoose.model("Comment", CommentSchema)