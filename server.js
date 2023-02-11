// constant app qui provient du fichier app.js
const app = require('./app');
// constant qui definit sur le port ou minipule les requètes
const port = 3000

// On demande à Express d'exposer tout son contenue enregistrer sur le port 3000 du serveur qui acceuil l'application
app.listen(port, () => {
    // On lancera une chaine de caractères en terminal pour avoir un retour pour être sure que tout fonctionne
    console.log("L'application tourne sur le port " + port)
})