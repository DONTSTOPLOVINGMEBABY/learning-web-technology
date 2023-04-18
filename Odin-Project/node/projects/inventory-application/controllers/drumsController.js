const Drums = require("../models/drums")
const Category = require("../models/category")
const {body, validationResult} = require('express-validator')


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

exports.createNew = async (req, res) => {
    try {
        let categories = await Category.find({}, {name : 1})
        res.render("create-new-drum", {
            data : {
                categories : categories, 
            }
        })
    } catch (err) {
        console.log(err)
        res.render("error")
    }
}

exports.update = async (req, res) => {
    try {
        let drum_info = await Drums.findById(req.params.id) 
        let categories = await Category.find({}, {name : 1})

        res.render("update-tamberine", {
            data : { 
                drum_info : drum_info, 
                categories : categories, 
            } 
        })
    } catch (error) {
        console.log(error)
    }
}

exports.postUpdate = [
    body("name", "Name must not be empty")
        .trim()
        .isLength({min : 3})
        .escape(), 
    body("description", "Description must not be empty")
        .trim()
        .isLength({min : 3})
        .escape(), 
    body("price", "Price Must be number")
        .escape(), 
    body("category.*").escape(),
    body("number_in_stock", "Number in stock must be number").escape(),  
    async (req, res, next) => {
        const errors = validationResult(req)
        const newDrum = new Drums({
            name : req.body.name, 
            description: req.body.description,
            numberInStock: req.body.number_in_stock, 
            price : req.body.price, 
            category : req.body.category, 
            type : "Drums"
        })
        if (!errors.isEmpty()){
            let categories = await Category.find({}, {name : 1})
            res.render("update-drum", {
                data : { 
                    drum_info : newDrum, 
                    categories : categories, 
                } 
            })
        }
        else {
            try {
                await newDrum.save()
                if (req.url != "/Drums/createDrum"){
                    await Drums.findByIdAndDelete(req.params.id)
                }
                res.redirect(newDrum.url)
            } catch (error) {
                res.render("error")
            }
        }
    }
]