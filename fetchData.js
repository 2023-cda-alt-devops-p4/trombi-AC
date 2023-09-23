//! récup json
function fetchDataForVille(ville) {
  fetch("data.json")
    // .then(response => response.json())
    .then((response) => response.json())
    // .then(function (response) {
    //   return response.json(); })

    .then(function (result) {
      console.log("result", result);
      const camarades = result.camarades;
      const PersonsByCity = camarades.filter((item) => item.ville === ville);
      // ou .filter ? 
      displayVilleData(PersonsByCity, ville);
    })
    .catch(console.error);
}

function displayVilleData(PersonsByCity, ville) {
  const modalContent = document.querySelector(".classDisplayData");
  if (modalContent) {
    modalContent.textContent = "";// Effacez le contenu précédent de la modal

    const villeTitle = document.createElement("h1");
    villeTitle.textContent = `${ville}`;
    // Afficher 1 seule fois le nom de la ville dans la modal
    modalContent.append(villeTitle);

    if (PersonsByCity) {
      PersonsByCity.forEach(function (item) {
        // Créer des éléments HTML pour afficher les données
        const nomPrenom = document.createElement("h3");
        nomPrenom.textContent = `> ${item.prenom} ${item.nom}`;

        const tech_stack = document.createElement("li");
        tech_stack.innerHTML = `<h4>Stack : </h4> ${item.tech_stack}`;

        const business_stack = document.createElement("li");
        business_stack.innerHTML = `<h4>Stack en entreprise : </h4> ${item.business_stack}`;

        const linkedIn = document.createElement("li");
        linkedIn.innerHTML = `<h4>LinkedIn : </h4> <a href="${item.linkedIn}" target="_blank">${item.linkedIn}</a>`;

        const gitHub = document.createElement("li");
        gitHub.innerHTML = `<h4>LinkedIn : </h4> <a href="${item.gitHub}" target="_blank">${item.gitHub}</a>`;

        // Ajouter les éléments créés ds le html
        modalContent.append(nomPrenom, tech_stack, business_stack, linkedIn, gitHub);
      })
    }
  }
}
