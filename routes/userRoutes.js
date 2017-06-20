const User = require("../models/user");
const Driver = require("../models/driver");
const Rider = require("../models/rider");

module.exports = (app) => {
    app.get("/driver", function(req, res){
      res.send("Go to Driver Form");
    });

    app.get("/rider", function(req, res){
      res.send("Go to Rider From");
    });

    app.post("/driverSave", function(req, res){
      var newDriver = new Driver(req.body);
      newDriver.save(function(err, doc){
        if(err){
          console.log(err);
        } else {
          res.send("Saved the Driver Details in the DB");
        }
      });
    });

    app.post("/riderSave", function(req, res){
      var newRider = new Rider(req.body);
      newRider.save(function(err, doc){
        if(err){
          console.log(err);
        } else {
          res.send("Save the Rider Details in the DB and match the requiremnets and render the result");
        }
      });
    });

    app.put("/user/setting", function(req, res){
      res.send("User Settings");
    });

};
