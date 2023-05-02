const mongoose = require("mongoose")
const Schema = mongoose.Schema

const ArticleSchema = new Schema({
    title : { type : String, require: true }, 
    subtitle : { type : String, require : true }, 
    author : { type : String, require : true }, 
    content : { type: String, require: true }, 
    uploadDate : { type: Date, require: true }, 
    lastModified : { type: Date, require : false }, 
    categories : { type: Array, require: true }, 
    published: { type: Boolean, require: true }, 
})


ArticleSchema.virtual("url").get( function () {
    return `/articles/${this._id}`
})


module.exports = mongoose.model("Article", ArticleSchema)

