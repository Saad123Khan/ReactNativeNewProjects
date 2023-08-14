import dotenv from 'dotenv';
import * as path from 'path';
import { fileURLToPath } from 'url';
const __dirname = fileURLToPath(new URL('.',import.meta.url));

const envConfig=()=>{
    if(process.env.NODE_ENV !== "production")
    {
    dotenv.config({path:path.resolve(__dirname,"../config/dev.env")})
    }else{
        dotenv.config({path:path.resolve(__dirname,"../config/prod.env")})
    }
}

const isBolean=(value)=>{
['true','false'].includes(value) ? json.parse(value) : value
}

const getEnv=(name)=>isBolean(process.env[name])

export {getEnv,envConfig};