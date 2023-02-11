const express = require("express");
const router = express.Router();
const entreeController = require("../controller/controllerEntree");

//C'est une route par défaut qui renvoie une chaîne de caractères
// definiton de la route recupérer avec la methode get 
// test la route 
// ex: http://localhost:3000 
//C'est une route par défaut qui renvoie une chaîne de caractères

// router.get("/plat", entreeController.getAllData)
//une route qui va permettre d'afficher les données contenu dans le fichier exemple.json en JSON dans la requête
// GET "/plat"
//ex: http://localhost:3000/entree
router.get("/entree" , entreeController.getData)
//une route qui me permet de récupérer une data par son id
//GET "/plat/:id"
//ex: http://localhost:3000/entree/1
router.get("/entree/:id" , entreeController.getDataById)

//une route qui me permet d'insérer de la donnée dans mes fichier exemple.json
//POST "/plat"
//ex: http://localhost:3000/entree
router.post("/entree" , entreeController.createData);

//une route qui me permet de mettre à jour une donnée en se basant sur son id
//PUT: "/plat/:id"
//ex: http://localhost:3000/entree/1
router.put("/entree/:id" , entreeController.createData);

//une route qui me permet de supprimer une donnée en se basant sur son id
//DELETE "/plat/:id"
//ex: http://localhost:3000/entree/1
router.delete("/entree/:id" , entreeController.deleteDataById);



module.exports=router;