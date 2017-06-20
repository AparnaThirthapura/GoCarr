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

var RiderSchema = new Schema({
  riderName:{
    type:Schema.Types.ObjectId,
    ref:"User"
  },
  riderFrom:AddressSchema,
  riderTo:AddressSchema,
  days:{
    type:[String]
  },
  time:{
    type:Date
  }
});

var Rider = mongoose.model("Rider", RiderSchema);
module.exports = Rider;
