const User = require('../models/users')

module.exports = {
    ensureAuthenticated: function(req, res, next) {
      if (req.isAuthenticated()) {
        return next();
      }
      res.redirect('/auth/login');
    },
    forwardAuthenticated: function(req, res, next) {
      if (!req.isAuthenticated()) {
        return next();
      }
      res.redirect('/');      
    }, 
    forwardIsUser : async function (req, res, next) {
      const user = await User.findById(req.user._conditions._id)
      if (user.isMember){
        return res.redirect("/")
      }
      next()
    }
};
  