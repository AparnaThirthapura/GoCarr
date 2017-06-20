const User = require("../models/user");
const Driver = require("../models/driver");
const Rider = require("../models/rider");


module.exports = function(app, passport){
  app.get("/", function(res, req){
    res.send("Welcome to GoCarr! app Root Page");
  });

  app.get("/login", function(req, res){
    res.send("Welcome to login Page!!!");
  });

  app.post("/login", passport.authenticate("local-login", {
		successRedirect: "/main",
		failureRedirect: "/login"
	}));

  app.get("/signup", function(req, res) {
		res.send("Welcome to signup page!!!");
	});

	app.post("/signup", passport.authenticate("local-signup", {
	  successRedirect:"/main",
		failureRedirect:"/signup"
	}));

  // app.get("/main", isLoggedIn, function(req, res){
	// 	db.User.findAll({
	// 		where:{name:req.user.userName}
	// 	}).then(function(dbUser){
	// 		res.send("Welcome to GoCarr. Are you Driving or Riding Today");
	// 	});
	// });
  app.get("/main", function(req, res){
    res.send("This will be the main page");
  });

  app.get("/logout", function(req, res) {
	    req.session.destroy(function(err) {
        res.send("logged Out");
	        // res.redirect('/');
	    });
	});

  // function isLoggedIn(req, res, next) {
  //   if (req.isAuthenticated())
  //     return next();
  //   // res.redirect("/signin");
  //     res.send("Authentication Failed");
  // }
};
