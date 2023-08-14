import { asyncHandler } from "#middleware/asyncHandler";
import { User } from "#models/user";
import jwt  from "jsonwebtoken";
import bcrpt from 'bcrypt';

const getUser = asyncHandler(async(req,res)=>{
    const user = await User.findOne({});
const token = jwt.sign({saad:"SAAD",id:1},process.env.JWT_SECRET,{expiresIn:'1d'})
  res.send({status:true,user,token})
})

const createUser = asyncHandler(async(req,res)=>{
    let user = new User(req.body);
   let salt = bcrpt.genSalt(10);
   user.name = await bcrpt.hash(req.body.name,parseInt(salt))
   user.save();
    res.send({status:true,user})
})

export {getUser,createUser}