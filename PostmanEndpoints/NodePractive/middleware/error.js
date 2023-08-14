import winston from 'winston';
import { getEnv } from '#utils/env';

const error=((err,req,res,next)=>{
winston.error(err.message.err);
if(getEnv("NODE_ENV")==="Development")res.status(500).send(err);
else res.status(500).send("Something Failed")
})


export default error