const express = require("express");
const router = express.Router();
const menuController = require("../controller/controllerDessert");

// router.get("/plat", entreeController.getAllData)
//une route qui va permettre d'afficher les données contenu dans le fichier exemple.json en JSON dans la requête
// GET "/plat"
//ex: http://localhost:3000/dessert
router.get("/dessert" , menuController.getData)
//une route qui me permet de récupérer une data par son id
//GET "/plat/:id"
//ex: http://localhost:3000/dessert/1
router.get("/dessert/:id" , menuController.getDataById)

//une route qui me permet d'insérer de la donnée dans mes fichier exemple.json
//POST "/plat"
//ex: http://localhost:3000/dessert
router.post("/dessert" , menuController.createData);

//une route qui me permet de mettre à jour une donnée en se basant sur son id
//PUT: "/plat/:id"
//ex: http://localhost:3000/dessert/1
router.put("/dessert/:id" , menuController.createData);

//une route qui me permet de supprimer une donnée en se basant sur son id
//DELETE "/plat/:id"
//ex: http://localhost:3000/dessert/1
router.delete("/dessert/:id" , menuController.deleteDataById);



module.exports=router;