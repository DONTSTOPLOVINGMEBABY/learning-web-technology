const mongoose = require("mongoose")
const Schema = mongoose.Schema


const TamberineSchema = new Schema({
    name : { type : String, required : true, maxLength : 100 }, 
    description: { type: String, required: true, maxLength : 1000 }, 
    price : { type : Number, required: true }, 
    numberInStock : { type: Number, required: true }, 
    category : [ {type: Schema.Types.ObjectId,  ref : "Category"} ], 
    isPadded : { type: Boolean, required: true }, 
})


TamberineSchema.virtual("url").get( () => {
    return `/tamberines/${this._id}`
})

module.exports = mongoose.model("Tamberine", TamberineSchema)
