//! récup json

fetch("data.json")
  .then(function (response) {
    // Vérifiez si la réponse est OK (statut 200)
    if (!response.ok) {
      throw new Error("Erreur lors de la récupération du fichier JSON");
    }
    // Parsez la réponse JSON
    return response.json();
  })
  .then(function (jsonData) {
    // Vous pouvez maintenant utiliser les données JSON (par exemple, affichage dans la console)
    let jsonCamarades = jsonData.camarades;
    console.log(jsonData.camarades);
    // Vous pouvez maintenant utiliser les données JSON (par exemple, affichage dans la div)
    let jsonDisplay = document.getElementById("jsonDisplay");
    // jsonDisplay.textContent = JSON.stringify(jsonCamarades, null, 2); // Convertit l'objet JSON en une chaîne formatée
    let processedData = jsonCamarades.map(function (item) {
      // Ici, vous pouvez effectuer des opérations sur chaque élément de données (item)
      // Par exemple, renommer une clé ou effectuer un calcul
      let newItem = {
        nom: item.nom, // Renomme la clé "nom" en "name"

      };
      return newItem;
    });

    // Obtenez la div où vous souhaitez afficher les données
    var resultDiv = document.getElementById("result");

    // Créez un élément HTML (par exemple, une liste non ordonnée)
    var ul = document.createElement("ul");

    // Parcourez les données traitées et créez un élément pour chaque donnée
    processedData.forEach(function (item) {
      var li = document.createElement("li");
      li.textContent = "Name: " + item.nom;
      ul.appendChild(li);
    });

    // Ajoutez la liste à la div d'affichage
    resultDiv.appendChild(ul);



  })
  .catch(function (error) {
    // Gérez les erreurs ici, par exemple, affichage dans la console
    console.error(error);
  });


//!