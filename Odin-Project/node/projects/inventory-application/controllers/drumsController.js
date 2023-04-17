const Drums = require("../models/drums")

exports.get_all_drums = async (req, res) => {
    try { 
        const all_drums = await Drums.find({})

        res.render("all_x_items", {
            title : "Drums", 
            data : {
                items : all_drums, 
            }
        }) 
    } catch (error) {
        console.log(error)
    }

}

exports.get_drum = async (req, res) => {
    try {    
        const the_drum = await Drums.find({ _id : req.params.id })

        res.render("drum", {data : the_drum})

    } catch (error) {
        console.log(error)
    }
}

exports.delete = async (req, res) => {
    try {
        await Drums.findByIdAndDelete(req.params.id)
        res.render("success")
    } catch (error) {
        console.log(error)
    }
}