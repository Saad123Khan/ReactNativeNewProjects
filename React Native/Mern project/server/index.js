const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const app = express();

const FoodModel = require("./models/food");

app.use(express.json());
app.use(cors());

mongoose.connect("mongodb://localhost:27017/Food");

app.post("/insert",async(req,res)=>{

const names = req.body.names
const price = req.body.price 
const about = req.body.about 

const food = new FoodModel({names : names , price : price , about : about});

res.send(food);
try {
await food.save();
}
catch(err)
{
console.log(err)
}
});

//List Data
app.get("/read",async(req,res)=>{

    FoodModel.find({},(err,result)=>{
        if(err)
        {
            res.send(err)
        }
        res.send(result)
    })
    });

    //updateData

    app.put("/update",async(req,res)=>{

        const newfoodName = req.body.NewfoodName;
        const id = req.body.id ;    
  
        try {
         await FoodModel.findById(id , (err,updatedFood)=>{
            updatedFood.foodName = newfoodName;
            updatedFood.save();
            res.send("Updated");
         });
        }
        catch(err)
        {
        console.log(err);
        }
        });

   app.delete("/delete/:id",async(req,res)=>{
        const id = req.params.id;
        await FoodModel.findByIdAndRemove(id).exec();
        res.send("Deleted");
   });

app.listen(3001,()=>{
    console.log("Server running On Port 3001");
});


