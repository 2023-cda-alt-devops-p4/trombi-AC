//! récup json

fetch("data.json")
  .then(response => response.json())
  // .then(function (response) {
  //   return response.json(); })

  .then(function (result) {
    const listeCamarades = result.camarades;
    //! mapper sur l'ensemble
    const processedData = listeCamarades.map(function (item) {
      console.log("item + ... : " + item.nom, item.tech_stack);

      const newItem = {
        nom: item.nom,
        prenom: item.prenom,
        ville: item.ville
      };
      return newItem;
    });
    
    // Obtenir la div où on veut afficher les données
    const resultDiv = document.querySelector("#jsonDisplayResult");

    // Créer un élément HTML (par ex, une liste non ordonnée)
    const liste = document.createElement("ul");

    // Parcourir les données traitées et créez un élément pour chaque donnée
    processedData.forEach(function (item) {
      console.log("foreach", item);
      const ville = document.createElement("h1");
      const noms = document.createElement("h3");
      // li.textContent = "Nom: " + item.nom;
      // ville.innerHTML = "<h2>" + item.ville + "</h2>";
      ville.innerHTML = "<h1>" + item.ville + "</h1>";
      noms.innerHTML = "<h3>" + item.prenom + " " + item.nom + "</h3>";
      liste.append(ville, noms);
    });

    // Ajoutez la liste à la div d'affichage
    resultDiv.append(liste);

  })
  .catch(console.error);

//!
// const jsonVille = listeCamarades.ville
// console.log(jsonVille);
// let jsonDisplay = document.getElementById("jsonDisplay");
// jsonDisplay.textContent = JSON.stringify(jsonCamarades, null, 2); // Convertit l'objet JSON en une chaîne formatée
// const mapperVille = jsonVille.map((item_ville) => {
//   console.log(item_ville);