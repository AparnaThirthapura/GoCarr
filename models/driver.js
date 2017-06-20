var mongoose = require("mongoose");
var Schema = mongoose.Schema;


var AddressSchema = new Schema({
  addrLine1:{
    type:String,
    required:true
  },
  addrLine2:{
    type:String
  },
  city:{
    type:String,
    required:true
  },
  state:{
    type:String,
    required:true,
  },
  zipcode:{
    type:String,
    required:true
  }
});

var DriverSchema = new Schema({
  driverName:{
    type:Schema.Types.ObjectId,
    ref:"User"
  },
  noOfRiders:{
    type:Number
  },
  pickUpRadius:{
    type:Number
  },
  driverFrom:AddressSchema,
  driverTo:AddressSchema,
  days:{
    type:[String]
  },
  time:{
    type:Number
  }
});

var Driver = mongoose.model("Driver", DriverSchema);
module.exports = Driver;
