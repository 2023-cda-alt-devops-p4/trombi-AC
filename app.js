try {
  //? écouteur de fin de chargement de page DOMContentLoaded
  //? pour avoir la certitude que tous les éléments du DOM sont chargés
  document.addEventListener("DOMContentLoaded", () => {
    console.log("Content Loaded");

    //! ouvrir la modal en cliquant sur un bouton par ville 。。+゜゜。。+゜゜。。+゜゜。。+゜
    const buttons = document.querySelectorAll('.bouton');
    const modal = document.querySelector(".modal")
    const cadreForm = document.querySelector(".cadreForm");
    // const echap = document.querySelector("#echap");

    // Ajoutez un gestionnaire d'événement à chaque bouton
    buttons.forEach((button) => {
      button.addEventListener("click", () => {


        // Obtenez le nom de la ville à partir de l'attribut "data-ville"
        const ville = button.getAttribute('data-ville');
        // Obtenez les données de la ville à partir du fichier JSON
        console.log("data-ville", ville);

        fetchDataForVille(ville);

        modal.classList.add("modalHidden");
        cadreForm.classList.add("cadreFormHidden");

      });
    });
    //! Cacher la modal 。。+゜゜。。+゜゜。。+゜゜。。+゜゜。。+゜゜。。+゜゜。。+゜
    // echap.addEventListener("click", () => {
    //   console.log("ferme modal X");
    //   modal.classList.remove("modalHidden");
    //   cadreForm.classList.remove("cadreFormHidden");
    // });
    //! marche pas
    // echap.addEventListener("click", () => {
    //   console.log("ferme modal X");
    //   // modal.classList.add("modalHidden"); // Cache la modal
    //   modal.classList.remove("modalVisible");
    //   cadreForm.classList.add("cadreFormHidden"); // Cache le contenu de la modal
    // });


    // //! Cacher la modal 。。+゜゜。。+゜゜。。+゜゜。。+゜゜。。+゜゜。。+゜゜。。+゜
    const echap = document.querySelector("#echap");

    echap.addEventListener("click", () => {
      console.log("ferme modal X");
      document.querySelector(".modal").classList.remove("modalHidden");
      document
        .querySelector(".cadreForm")
        .classList.remove("cadreFormHidden");
    });
  });
  // });
} catch (error) {
  res.status(400).json(error.message);
}