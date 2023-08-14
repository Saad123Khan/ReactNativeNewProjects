import express from 'express';
import dbConnect from '#config/db';
import { envConfig } from '#utils/env';
import cors from 'cors';
import routes from "#routes/index";

envConfig();
dbConnect();

const app = express();

app.use(cors());
app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use('./upload',express.static('upload'))

routes(app);

app.get('*',(req,res)=>{
    res.status(400).send("Page not found")
})
app.listen(5000,()=>console.log("Server is running on PORT 3000"))