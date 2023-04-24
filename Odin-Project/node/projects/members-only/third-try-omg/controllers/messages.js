const User = require("../models/users")

exports.launch = async (req, res) => {
    try {
        res.render("index")
    } catch (error) {
        res.send("error")
        console.log(error)
    }
}

exports.get_welcome = async (req, res) => {
    try {
        res.render("welcome")
    } catch (error) {
        res.render("error")
        console.log(error)
    }
}


