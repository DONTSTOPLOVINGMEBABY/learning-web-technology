const mongoose = require("mongoose")
const Schema = mongoose.Schema


const GuitarSchema = new Schema({
    name : { type : String, required : true, maxLength : 100 }, 
    description: { type: String, required: true, maxLength : 1000 }, 
    price : { type : Number, required: true }, 
    numberInStock : { type: Number, required: true }, 
    category : [ {type: Schema.Types.ObjectId,  ref : "Category"} ], 
    isElectric : { type : Boolean, required: true }, 
    isAcoustic : { type: Boolean, required: true }, 
})

GuitarSchema.virtual("url").get( () => {
    return `/guitars/${this._id}`
})

module.exports = mongoose.model("Guitar", GuitarSchema)