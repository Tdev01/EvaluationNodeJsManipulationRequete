const express = require("express");
const router = express.Router();
const platController = require("../controller/controllerplat");

//C'est une route par défaut qui renvoie une chaîne de caractères
// definiton de la route recupérer avec la methode get 
//une route qui va permettre d'afficher les données contenu dans le fichier exemple.json en JSON dans la requête
// GET "/plat"
//ex : http://localhost:3000/
router.get("/plat" , platController.getData)

// //une route qui me permet de récupérer une data par son id
// //GET "/plat/:id"
// //ex: http://localhost:3000/plat
router.get("/plat/:id" , platController.getDataById)

// //une route qui me permet d'insérer de la donnée dans mes fichier exemple.json
// //POST "/palt"
// //ex: http://localhost:3000/plat
router.post("/plat" , platController.createData);

//une route qui me permet de mettre à jour une donnée en se basant sur son id
//PUT: "/plat/:id"
//ex: http://localhost:3000/plat
router.put("/plat/:id" , platController.createData);

//une route qui me permet de supprimer une donnée en se basant sur son id
//DELETE "/plat/:id"
//ex: http://localhost:3000/plat
router.delete("/plat/:id" , platController.deleteDataById);



module.exports=router;