const Tamberine = require("../models/tamberines")
const Category = require("../models/category")
const {body, validationResult} = require('express-validator')

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

exports.createNew = async (req, res) => {
    try {
        let categories = await Category.find({}, {name : 1})
        
        res.render("create-new-tamberine", {
            data : {categories : categories}
        })
    } catch(error){
        console.log(error)
        res.render("error")
    }
}

exports.update = async (req, res) => {
    try {
        let tamberine_info = await Tamberine.findById(req.params.id) 
        let categories = await Category.find({}, {name : 1})

        res.render("update-drum", {
            data : { 
                drum_info : tamberine_info, 
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
        const newTamberine = new Tamberine({
            name : req.body.name, 
            description: req.body.description,
            numberInStock: req.body.number_in_stock, 
            price : req.body.price, 
            category : req.body.category, 
            isPadded : req.body.isPadded == true, 
            type : "Tamberines"
        })
        if (!errors.isEmpty()){
            let categories = await Category.find({}, {name : 1})
            res.render("update-tamberine", {
                data : { 
                    drum_info : newTamberine, 
                    categories : categories, 
                } 
            })
        }
        else {
            try {
                await newTamberine.save()
                if (req.url != "/Tamberines/createTamberine"){
                    await Tamberine.findByIdAndDelete(req.params.id)
                }
                res.redirect(newTamberine.url)
            } catch (error) {
                res.render("error")
            }
        }
    }
]