import mongoose from "mongoose";

export const userSchema = new mongoose.Schema({
  fisrtName:{
    type:String
  },
  lastName:{
    type:String
  },
  gender:{
    type:String
  },
  age:{
    type: Number
  },
  language:{
    type:String
  },
  email:{
    type:String
  },
  constacts:{
    type:Array
  },
})