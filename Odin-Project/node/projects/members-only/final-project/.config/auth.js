module.exports = {
  hasAccount : function (req, res, next) {
    if (!req.isAuthenticated()){
      return res.redirect("/auth/login")
    }
    next()
  },
  checkNotAMember : async function (req, res, next) {
    if (!req.user.isMember){
      return res.redirect("/welcome")
    }
    next()
  }, 
  checkisAMember : async function (req, res, next) {
    if (req.user.isMember){
      return res.redirect("/")
    }
    next()
  }, 
  checkLoggedIn : function (req, res, next){ 
    if (req.isAuthenticated()){
      return res.redirect("/")
    } 
    next()
  }
}




// module.exports = {
//     ensureAuthenticated: function(req, res, next) {
//       if (req.isAuthenticated()) {
//         return next();
//       }
//       res.redirect('/auth/login');
//     },
//     forwardAuthenticated: function(req, res, next) {
//       if (!req.isAuthenticated()) {
//         return next();
//       } 
//     }, 
//     forwardIsUser : async function (req, res, next) {
//       const user = await User.findById(req.user._conditions._id)
//       if (user.isMember){
//         return res.redirect("/")
//       }
//       next()
//     },
// };
  