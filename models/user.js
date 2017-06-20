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
var UserSchema = new Schema({
  name:{
    type:String,
    required:true
  },
  email:{
    type:String,
    required:true,
    unique:true
  },
  password:
  {
    type:String,
    required:true
  },
  address: AddressSchema,
  phNo:{
    type:String,
    required:true
  },
  dlNo:{
    type:String
  }
});

var User = mongoose.model("User", UserSchema);
module.exports = User;
