
const mongoose = require("mongoose");

const FoodSchema = new mongoose.Schema({
            // foodName : {type : String , required : true},
            
            // daysSinceIAte : {type : Number},

            names  : {type : String , required : true},
            
            price : {type : Number},
            
        
            about : {type : String},
            
        });

        const Food = mongoose.model('Plant',FoodSchema)
        module.exports = Food    