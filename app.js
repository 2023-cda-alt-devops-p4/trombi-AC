try {
  // écouteur de fin de chargement de page DOMContentLoaded
  // pour avoir la certitude que tous les éléments du DOM
  // sont chargés
  document.addEventListener("DOMContentLoaded", () => {
    console.log("Content Loaded");

    function faireunefonction() {
      console.log("fonction ok");
    }

    // démarrage au bouton Start
    const whoIsIt = document.querySelector('whoIsIt');
    document.addEventListener('click', event => {
      console.log("start ok");
      requestAnimationFrame(faireunefonction);
    });

    requestAnimationFrame(faireunefonction);

    //! Cacher/Afficher la modal 。。+゜゜。。+゜゜。。+゜゜。。+゜゜。。+゜゜。。+゜゜。。+゜゜。。
    document.querySelector("#whoIsIt").addEventListener("click", () => {
      console.log("test click");

      document.querySelector(".modal").classList.add("modalHidden");
      document.querySelector(".cadreForm").classList.add("cadreFormHidden");
    });
    const btn = document.querySelector("#echap");

    const btnEchap = document
      .querySelector("#echap")
      .addEventListener("click", () => {
        console.log("test click X");
        document.querySelector(".modal").classList.remove("modalHidden");
        document
          .querySelector(".cadreForm")
          .classList.remove("cadreFormHidden");
      });





  });
} catch (error) {
  res.status(400).json(error.message);
}

