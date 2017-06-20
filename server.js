const express = require("express");
const app = express();

const bodyParser = require("body-parser");
const methodOverride = require("method-override");
const passport = require("passport");
const session = require("express-session");
const mongoose = require("mongoose");
mongoose.Promise = global.Promise;

const User = require("./models/user.js");
const Driver = require("./models/driver.js");
const Rider = require("./models/rider.js");

const port = process.env.PORT || 3000;

app.use(express.static(process.cwd() + "/public"));
app.use(bodyParser.urlencoded({ extended: false}));
app.use(methodOverride("_method"));

app.use(session({
	secret:"keyboard cat",
	resave:true,
	saveUninitialized:true
}));
app.use(passport.initialize());
app.use(passport.session());

require("./routes/signInRoutes")(app, passport);
require("./routes/userRoutes")(app);

const dbURI = "mongodb://localhost/GoCarrDB";
if(process.env.MONGODB_URI){
  mongoose.connect(process.env.MONGODB_URI);
} else {
  mongoose.connect(dbURI);
	console.log("DB Created");
}
const db = mongoose.connection;
db.on("error", function(error){
  console.log("Mongoose Error:", error);
});
db.once("open", function(){
  app.listen(port, function(){
    console.log("Server running on port:" + port);
  });
  console.log("Mongoose connection successful");
});
