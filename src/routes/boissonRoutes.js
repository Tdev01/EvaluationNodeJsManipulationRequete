const express = require("express");
const router = express.Router();
const boissonController = require("../controller/controllerBoisson");

//une route qui va permettre d'afficher les données contenu dans le fichier exemple.json en JSON dans la requête
// GET "/boisson"
//ex: http://localhost:3000/boisson
router.get("/boisson" , boissonController.getData)
//une route qui me permet de récupérer une data par son id
//GET "/boisson/:id"
//ex: http://localhost:3000/boisson/1
router.get("/boisson/:id" , boissonController.getDataById)

//une route qui me permet d'insérer de la donnée dans mes fichier exemple.json
//POST "/boisson"
//ex: http://localhost:3000/boisson
router.post("/boisson" , boissonController.createData);

//une route qui me permet de mettre à jour une donnée en se basant sur son id
//PUT: "/boisson/:id"
//ex: http://localhost:3000/boisson/1
router.put("/boisson/:id" , boissonController.createData);

//une route qui me permet de supprimer une donnée en se basant sur son id
//DELETE "/boisson/:id"
//ex: http://localhost:3000/boisson/1
router.delete("/boisson/:id" , boissonController.deleteDataById);

module.exports=router;