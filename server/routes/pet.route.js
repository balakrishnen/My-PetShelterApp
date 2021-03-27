const petShelterController = require('../controllers/pet.controller')

module.exports = (app) => {
    app.get("/",petShelterController.helloworld);
    app.get("/api/pets", petShelterController.getAll);
    app.get("/api/pet/:id", petShelterController.details);
    app.post("/api/pet", petShelterController.create);
    app.put("/api/pet/:id", petShelterController.update);
    app.delete("/api/pet/:id", petShelterController.delete);
}