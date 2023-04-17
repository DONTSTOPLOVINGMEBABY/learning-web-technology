const Guitar = require("../models/guitars")

exports.get_all_guitars = async (req, res) => {
    try { 
        const all_guitars = await Guitar.find({})

        res.render("all_x_items", {
            title : "Guitars", 
            data : {
                items : all_guitars, 
            }
        }) 
    } catch (error) {
        res.send(error)
        console.log(error)
    }
}

exports.get_guitar = async (req, res) => {
    try {    
        const the_guitar = await Guitar.find({ _id : req.params.id })

        res.render("guitar", {data : the_guitar})

    } catch (error) {
        console.log(error)
    }
}

exports.delete = async (req, res) => {
    try {
        await Guitar.findByIdAndDelete(req.params.id)
        res.render("success")
    } catch (error) {
        console.log(error)
    }
}