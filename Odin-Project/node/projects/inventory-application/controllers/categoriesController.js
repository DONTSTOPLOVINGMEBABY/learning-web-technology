const Guitar = require("../models/guitars")
const Drum = require("../models/drums")
const Category = require("../models/category")
const Tamberine = require("../models/tamberines")
const async = require("async")


exports.index = async (req, res) => {
    try { 
    const guitar_count_count = Guitar.countDocuments({}).exec();
    const drum_count_count = Drum.countDocuments({}).exec();
    const tamberine_count_count = Tamberine.countDocuments({}).exec();
    const categories_names = Category.find({}, {"name" : 1}).exec()
    let [guitar_count, drum_count, tamberine_count, categories] = await Promise.all([guitar_count_count, drum_count_count, tamberine_count_count, categories_names])
    
    res.render( "index", {
        title : "Music Store Home", 
        data : {
            guitar_count : guitar_count, 
            drum_count : drum_count, 
            tamberine_count : tamberine_count, 
            categories: categories, 
        }
    })
    } catch(error) {
        res.render( "index", {
            title : "Music Store Home", 
            err : error, 
        })
    }
}

exports.show_products_in_categories = async (req, res) => {
    try {
        const guitars_with_category_x = Guitar.find({category : req.params.id}).exec()
        const tamberines_with_category_x = Tamberine.find({category : req.params.id}).exec()
        const drums_with_category_x = Drum.find({category : req.params.id}).exec()
        let [guitars, tamberines, drums] = await Promise.all([guitars_with_category_x, tamberines_with_category_x, drums_with_category_x])

        res.render("product-categories", {
            data : {
                guitars : guitars, 
                tamberines : tamberines, 
                drums: drums, 
            }
        })

    } catch (error){
        console.log(error)
    }
}



