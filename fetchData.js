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
      displayVilleData(PersonsByCity, ville);   
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

function displayVilleData(PersonsByCity, ville) {
  const modalContent = document.querySelector(".classDisplayData");
  // document.querySelector(".modal .cadreForm 
  if (modalContent) {
    modalContent.textContent = "";// Effacez le contenu précédent de la modal

    const villeTitle = document.createElement("h1");
    villeTitle.textContent = `${ville}`;
    // Affichez les données de la ville dans la modal
    modalContent.append(villeTitle);

    if (PersonsByCity) {

      PersonsByCity.forEach(function (item) {
        // Créez des éléments HTML pour afficher les données

        const nomPrenom = document.createElement("h3");
        nomPrenom.textContent = `Nom et Prénom : ${item.prenom} ${item.nom}`;

        // Ajoutez les éléments à la modal

        modalContent.append(nomPrenom);
      })
    }
  }
}
