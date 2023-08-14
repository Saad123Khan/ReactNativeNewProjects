import mongoose from "mongoose";
import { getEnv } from "#utils/env";
import jwt from 'jsonwebtoken';
const userSchema=new mongoose.Schema({
   name :{type:String},
   phone :{type:Number},
})

userSchema.methods.generateAuthToken = function () {
    const payload = {name:this.name}
    const secret = getEnv("Sectret_JWT")
    const option= {expiresIn:'1d'}
 return jwt.sign(payload,secret,option)   
}
 
const User = mongoose.model("User", userSchema)

export { User}