import mongoose from 'mongoose';
import winston from 'winston';
import { getEnv } from '#utils/env';

const dbConnect=async()=>{
try{
const conn = mongoose.connect(process.env.MONGO_URL)
console.log(`MongoDb Connected`)
}
catch(error){
console.log(error)
winston.info(`ERROR : ${error.message}`)
process.exit(1);
}
}
export default dbConnect;