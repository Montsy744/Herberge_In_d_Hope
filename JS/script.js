// Sélectionnez le header et la div #acceuil
const header = document.querySelector("header");
const accueil = document.querySelector("#acceuil");

// Créez un observateur pour suivre les entrées et sorties de la div #acceuil
const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      // Lorsque #acceuil est visible dans l'écran
      header.style.backgroundColor = "rgba(0, 0, 0, 0.4)";
    } else {
      // Lorsque #acceuil sort de l'écran
      header.style.backgroundColor = "black";
    }
  });
});

// Démarrez l'observation de la div #acceuil
observer.observe(accueil);
