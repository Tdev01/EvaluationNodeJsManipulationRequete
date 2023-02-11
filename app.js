// constante express 
const express = require ("express");
// constant qui va contenir la fonction express qui créé l'apli
const app = express ();
// constant pour le module fs qui crée l'appli
const fs = require('fs')
// constant qui contient l'expor du module body-parser
const bodyParser = require('body-parser');
// pour faire l'appli express nous devont utiliser body-parser
app.use(bodyParser.json());

const entreeRoute = require('./src/routes/entreeRoutes');

const platRoute = require('./src/routes/platRoutes');

app.use(platRoute);
app.use(entreeRoute);

module.exports=app;




