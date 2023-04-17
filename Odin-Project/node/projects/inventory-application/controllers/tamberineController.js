const Tamberine = require("../models/tamberines")

exports.get_all_tamberines = async (req, res) => {
    try { 
        const all_tamberines = await Tamberine.find({})

        res.render("all_x_items", {
            title : "Tamberines", 
            data : {
                items : all_tamberines, 
            }
        }) 
    } catch (error) {
        res.send(error)
        console.log(error)
    }
}

exports.get_tamberine = async (req, res) => {
    try {    
        const the_tamberine = await Tamberine.find({ _id : req.params.id })

        res.render("tamberine", {data : the_tamberine})

    } catch (error) {
        console.log(error)
    }
}

exports.delete = async (req, res) => {
    try {
        await Tamberine.findByIdAndDelete(req.params.id)
        res.render("success")
    } catch (error) {
        console.log(error)
    }
}