const PetShelter = require('../models/pet.model');

module.exports={
    helloworld:(req,res)=>{
        return res.json("Hello world Devi!");
    },
    getAll:(req,res) =>{
        PetShelter.find({})
        .sort({type:"ascending"})
        .then((allPet) => {
            console.log(allPet)
            res.json(allPet)
        })
        .catch((err) => res.json(err));
    },
    
    details:(req,res) =>{
        PetShelter.findById({_id:req.params.id})
        .then((details) => {
            console.log(details)
            res.json(details)
        })
        .catch((err) => res.json(err));
    },
  
    create: (req, res) => {
        console.log(req.body);
        PetShelter.create(req.body)
          .then((newObj) => {
            console.log(newObj);
            // res.json is the equivalent of a return from the function
            res.json(newObj);
          })
          .catch((err) => {
            console.log("in author create");
            console.log(err);
            res.json(err);
        });
    },
    update: (req, res) => {
      console.log(req.body);
      PetShelter.findByIdAndUpdate(req.params.id,req.body,
         { new:true,
          runValidators:true,
          context: 'query'
      })
        .then((updated) => {
          console.log(updated);
          // res.json is the equivalent of a return from the function
          res.json(updated);
        })
        .catch((err) => {
          console.log("in  update");
          console.log(err);
          // res.json is the equivalent of a return from the function
         res.json(err);
      });
  },
  delete: (req, res) => {
    console.log(req.body);
    PetShelter.findByIdAndDelete(req.params.id)
      .then((deleted) => {
        console.log(deleted);
        // res.json is the equivalent of a return from the function
        res.json(deleted);
      })
      .catch((err) => {
        console.log("in Product delete");
        console.log(err);
        // res.json is the equivalent of a return from the function
        res.json(err);
    });
},
}