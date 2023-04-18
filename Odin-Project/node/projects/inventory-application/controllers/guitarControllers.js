const Guitar = require("../models/guitars")
const Category = require("../models/category")
const {body, validationResult} = require('express-validator')

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

exports.createNew = async (req, res) => {
    try {
        let categories = await Category.find({}, {name : 1})
        
        res.render("create-new-guitar", {
            data : {categories : categories}
        })
    } catch(error){
        console.log(error)
        res.render("error")
    }
}

exports.update = async (req, res) => {
    try {
        let guitar_info = await Guitar.findById(req.params.id) 
        let categories = await Category.find({}, {name : 1})

        res.render("update-guitar", {
            data : { 
                guitar_info : guitar_info, 
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
        const newGuitar = new Guitar({
            name : req.body.name, 
            description: req.body.description,
            numberInStock: req.body.number_in_stock, 
            price : req.body.price, 
            category : req.body.category, 
            isAcoustic : req.body.isAcoustic == true,
            isElectric : req.body.isElectric == true,  
            type : "Guitars"
        })
        if (!errors.isEmpty()){
            let categories = await Category.find({}, {name : 1})
            res.render("update-guitar", {
                data : { 
                    guitar_info : newGuitar, 
                    categories : categories, 
                } 
            })
        }
        else {
            try {
                await newGuitar.save()
                if (req.url != "/Guitars/createGuitar"){
                    await Guitar.findByIdAndDelete(req.params.id)
                }
                res.redirect(newGuitar.url)
            } catch (error) {
                console.log(error)
            }
        }
    }
]

