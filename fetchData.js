//! récup json
function fetchDataForVille(ville) {
  fetch("data.json")
    // .then(response => response.json())
    .then((response) => response.json())
    // .then(function (response) {
    //   return response.json(); })

    .then(function (result) {
      console.log("result", result);
      // const listeCamarades = result.camarades;
      const camarades = result.camarades;
      const PersonsByCity = camarades.filter((item) => item.ville === ville);
      // ou .filter ?
      // Affichez les données de la ville dans la modal
      displayVilleData(PersonsByCity);

      // //! mapper sur l'ensemble
      // const processedData = listeCamarades.map(function (item) {
      //   console.log("item + ... : " + item.nom, item.tech_stack);

      //   const newItem = {
      //     nom: item.nom,
      //     prenom: item.prenom,
      //     ville: item.ville
      //   };
      //   return newItem;
      // });

      // // Obtenir la div où on veut afficher les données
      // const resultDiv = document.querySelector("#jsonDisplayResult");
      // const resultTestLille = document.querySelector("#LilleDisplayBtn");
      // const liste = document.createElement("ul");
      // const testLille = document.createElement("button");
      // // Parcourir les données traitées et créez un élément pour chaque donnée
      // processedData.forEach(function (item) {

      //   if (item.ville == Lille) {

      //     const ville2 = document.createElement("h1");
      //     ville2.innerHTML = '<i class="fa-solid fa-map-pin">qui habite</i>'
      //     testLille.append(ville2);

      //   }

      //   console.log("foreach", item);
      // Créer un élément HTML (par ex, une liste non ordonnée)

      //   const ville = document.createElement("h1");
      //   const noms = document.createElement("h3");
      //   // li.textContent = "Nom: " + item.nom;
      //   // ville.innerHTML = "<h2>" + item.ville + "</h2>";
      //   ville.innerHTML = "<h1>" + item.ville + "</h1>";
      //   noms.innerHTML = "<h3>" + item.prenom + " " + item.nom + "</h3>";
      //   liste.append(ville, noms);
      // });

      // // Ajoutez la liste à la div d'affichage
      // resultDiv.append(liste);
      // // Ajoutez la liste à la div d'affichage
      // resultTestLille.append(testLille);

    })

    .catch(console.error);

}
//! fonctionne
// // Cette fonction affiche les données de la ville dans la modal
// function displayPersonsByCity(PersonsByCity) {
//   const resultDiv = document.querySelector("#displayPersonsByCity");
//   resultDiv.innerHTML = ""; // Effacez le contenu précédent

//   PersonsByCity.forEach(function (item) {
//     const ville = document.createElement("h1");
//     ville.textContent = item.ville;

//     const nom = document.createElement("h3");
//     nom.textContent = item.prenom + " " + item.nom;

//     // Ajoutez d'autres données que vous souhaitez afficher

//     resultDiv.append(ville);
//     resultDiv.append(nom);
//   });

//! à tester

// Ajoutez une fonction pour afficher les données de la ville dans la modal

function displayVilleData(PersonsByCity) {
  const modalContent = document.querySelector(".modal .cadreForm");

  if (modalContent) {
    modalContent.innerHTML = "";// Effacez le contenu précédent de la modal

    if (PersonsByCity) {
      PersonsByCity.forEach(function (item) {
        // Créez des éléments HTML pour afficher les données
        const villeTitle = document.createElement("h1");
        villeTitle.textContent = `${item.ville}`;
        const nomPrenom = document.createElement("h3");
        nomPrenom.textContent = `Nom et Prénom : ${item.prenom} ${item.nom}`;

        // Ajoutez les éléments à la modal
        modalContent.append(villeTitle);
        modalContent.append(nomPrenom);
      })
    }
  }
}
