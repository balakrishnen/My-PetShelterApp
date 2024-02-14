const mongoose = require('mongoose');
var uniqueValidator = require('mongoose-unique-validator');
// model - is the shape of the json data that we want to put in the collection
const PetSchema = new mongoose.Schema(
    
    {
        name:{
            type: String,
            required:[true, "You must enter a name for Bala's pet"],
            minlength:[3, "Pet name must be at least 3 chars long"],
            unique:[true, "Pet name has to be unique"]
             },
        type:{
                type: String,
                required:[true, "You must enter a type for pet"],
                minlength:[3, "Pet type must be at least 3 chars long"]
             },

        description:{
                type: String,
                required:[true, "You must enter a description for pet"],
                minlength:[3, "Pet description must be at least 3 chars long"]
             },

        skill1:{ 
            type: String
        },
        skill2: { 
            type: String
         },
        skill3: { 
            type: String
         },
        likes: {
            type: Number, 
            default: 0
        }

       },
     {
        timestamps:true,
    }
);
const modelName = "Pet";
PetSchema.plugin(uniqueValidator);
const  Pet = mongoose.model(modelName,PetSchema);
module.exports= Pet;
