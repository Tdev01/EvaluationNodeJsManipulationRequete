// On declare une contant qui contiendra l'export du module express
const express = require("express");
// on declara une contant qui continedra l'export du modules fs
const fs = require("fs");
// on declare une contant app qui permet de lancer l'appli
const app = express();
// on declare une constante bodyParset qui prend le module bodyParset 
const bodyParser = require("body-parser");
//Permet de lire mon bodyParset en format Json 
app.use(bodyParser.json());

// l'export getData permet d'afficher les données contenu dans le fichier  entree.json en json dan sla requete 
// ex : http://localhost:3000/plat
exports.getData = (request, response) => {
    // utiliser la methode readFile du module fs pour lire le fichier
    fs.readFile("./src/model/menu.json", (err, data) => {
      // condition du erreur de parcour (callBack)
      if (err) {
        //renvoi de l'erreur statu 500 (signifie erreur de lecture ) et du message
        response.status(500).json({
          message: "ceci est une erreur de lecture",
          error: err,
        });
        // si non status 200 renvoi en format json
      } else {
        response.status(200).json(JSON.parse(data).plat);
      }
    });
  };

// permet d'afficher mon entre selection avec l'id 

exports.getDataById = (request , response) => {
    // on utiliser la methode ReadFiles du modules fs pour lire le fichier 
    fs.readFile("./src/model/menu.json" , (err, data) =>{
        // la condition d'erreur 
        if(err) {
            // si erreur de lecture alors il renvoie l'erreur 500 et un message
            response.status(500).json({
                message:"il y a une erreur de lecture",
            })
            // si non 
        }else{
            // on transforme les data en json manipulable en declarant une const 
            const manipData = JSON.parse(data);
            // on va chercher dans le fichier si l'id passer en paramettre existe dans le contenue 
            const dataById = manipData.plat.find(
                (obj) => obj.id === parseInt(request.params.id)
            );
            // si le fichier existe on renvoie la reponse 200 et l'id
            if(dataById){
                response.status(200).json(dataById);
            } else {
            // si il n'existe pas  il renvoie uen erreur 404 pour avec message d'erreur non trouvé
                response.status(400).json({
                    messsage: "je n'ai pas trouver l'object avec cette id"
                });
            }
        }
    });
};

// export  de la methode creatData permettant d'inserer de la données dans mes fichier 

exports.createData = (request, response) => {
    // lecture du fichier avec readfile
    fs.readFile("./src/model/menu.json" ,  (err, data) => {
        // condition 
        if (err) {
            // si erreur 500+ le message 
            response.status(500).json({
                message: "erreur lors de la lecture",
            });
        }else {
            // sinon 
            // on ajoute dans une variable la data transforme en json manipulable avec .json .parse
            const existingData = JSON.parse(data);
            // on ajoute  la nouvelle donnée 
            existingData.entree.push(request.body);
            // reecret dans le fichier 
            fs.writeFile("./src/model/menu.json",
            JSON.stringify(existingData),
            (writeErr) => {
                // si y a une erreur 
                if (writeErr) {
                    response.status(500).json ({
                        // envoie de l'erreur status 500 + message 
                        message : "erreur lors de l'ecriture",
                    })
                }else {
                    // si non d'erreur 
                    // envoie le status 200 avec le mesage (donnée ajoutéé)
                    response.status(200).json({
                        message: "les données ont bien été ajoutées", 
                
                    })
                }
            }
            )
        }
    })
}

// expot la methode upData qui permet de mettre à jour une donnée en se basant sur son id 
exports.updateData = (request, response) => {
  // lecture du fichier avec realfile
  fs.readFile("./src/model/menu", (err, data) => {
    // condition si il ne lis pas le fichier
    if (err) {
      //  on renvoie l'erreur 500 avec le message
      response.status(500).json({
        message: "erreur lors de la lecture",
        error: err,
      });
      // si non
    } else {
      // on stocke les données existance dans une constante avec la methode JSON.parse
      const existingData = JSON.parse(data);
      // je cherche dans le fichier si l'id correspondant au paramètre est dans le contenu
      const dataById = existingData.entree.find(
        (obj) => obj.id === parseInt(request.params.id)
      );
      // si on trouve pas d'object avec cet id
      if (!dataById) {
        // on renvoie une reponse (404) avec le message
        response.status(404).json({
          message: "object non trouvé",
          error: err,
        });
        // si non
      } else {
        // on remplace les données par celle de la requete
        dataById.name = request.body.name;
        // on réecrire les nouvelles donnée avec writeFiles
        fs.writeFile(
          "./src/model/menu.json",
          JSON.stringify(existingData),
          (writeErr) => {
            if (writeErr) {
              response.status(500).json({
                message: "erreur de la reecriture",
                error: err,
              });
            } else {
              response.status(200).json({
                message: "données mise a jour avec succès",
              });
            }
          }
        );
      }
    }
  });
};
