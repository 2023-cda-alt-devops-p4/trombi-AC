//! récupérer les data json par ville
function fetchDataForVille(ville) {
  fetch("data.json")
    .then((response) => response.json())
    .then(function (result) {
      console.log("result", result);
      const data = result.camarades;
      const PersonsByCity = data.filter((item) => item.ville === ville);
      displayVilleData(PersonsByCity, ville);
    })
    .catch(console.error);
}

// Rechercher par prenom dans l'input de recherche
function searchByName() {
  const searchInput = document.querySelector("#searchInput").value.trim();
  if (searchInput === "") {
    alert("Veuillez entrer un prénom à rechercher.");
    return;
  }

  fetch("data.json")
    .then((response) => response.json())
    .then(function (result) {
      const camarades = result.camarades;
      const foundPersons = camarades.filter((item) => {
        return item.prenom.toLowerCase() === searchInput.toLowerCase();
      });
      // displayVilleData(PersonsByCity, ville);
      // const displayData = document.querySelector(".classDisplayData");
      // const retractButton = document.querySelector("button[onclick='hideDisplayData']");
      // 
      console.log("foundPersons", foundPersons);
      if (foundPersons.length === 0) {
        alert("Aucun camarade trouvé avec ce prénom.");
        // displayData.style.display = "none";
        // retractButton.style.display = "none";
      } else {

        const ville = foundPersons[0].ville;

        // 
        // retractButton.style.display = "block";
        console.log("foundPersons", foundPersons);
        console.log("ville", ville);
        displaySearchData(foundPersons, ville); fetchDataForVille(ville)
        displayData.style.display = "block";
      }
    })
    .catch(console.error);
}

// function hideDisplayData() {
//   const RemoveDataSearch = document.querySelector("#echapS");
//   RemoveDataSearch.addEventListener("click", () => {  
//     console.log("ferme hideDisplayData displayResultSearch");
//     document.querySelector("#displayResultSearch").classList.remove(".displayResultSearch");
//   });

// document.querySelector("#displayResultSearch");
// displayData.style.display = "none";

// document
// const retractButton = document.querySelector("button[onclick='hideDisplayData']");
// retractButton.style.display = "none";}


//! Afficher le Tri par prénom (barre de recherche)
function displaySearchData(foundPersons, ville) {
  const modalContent = document.querySelector(".displayResultSearch");
  if (modalContent) {
    modalContent.textContent = "";// Effacez le contenu précédent de la modal

    const villeTitle = document.createElement("h1");
    villeTitle.textContent = `${ville}`;
    // Afficher 1 seule fois le nom de la ville dans la modal
    modalContent.append(villeTitle);

    if (foundPersons) {
      foundPersons.forEach(function (item) {
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

//! Afficher le Tri par ville
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
