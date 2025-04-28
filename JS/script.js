// Sélectionnez le header et la div #acceuil
const header = document.querySelector("header");
const accueil = document.querySelector("#acceuil");

// Créez un observateur pour suivre les entrées et sorties de la div #acceuil
const observer1 = new IntersectionObserver((entries) => {
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
observer1.observe(accueil);

// Sélectionner tous les éléments qui ont la classe 'reveal'
const elements = document.querySelectorAll(".reveal");

// Options pour l'Intersection Observer
const options = {
  root: null, // Utiliser la fenêtre de visualisation par défaut
  threshold: 0.3, // Un élément est considéré comme visible si 30% de celui-ci est dans la vue
};

// Fonction de callback qui sera exécutée lors de l'intersection
const handleIntersection = (entries, observer1) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      // Ajouter la classe 'visible' lorsque l'élément entre dans la vue
      entry.target.classList.add("visible");
      entry.target.classList.remove("disappear-up", "disappear-down"); // Enlever les classes de disparition
    } else {
      // Vérifier la direction du défilement
      if (entry.boundingClientRect.top < 0) {
        // L'élément sort par le haut
        entry.target.classList.remove("visible");
        entry.target.classList.add("disappear-up");
      } else {
        // L'élément sort par le bas
        entry.target.classList.remove("visible");
        entry.target.classList.add("disappear-down");
      }
    }
  });
};

// Créer une instance d'IntersectionObserver avec la fonction de callback et les options
const observer2 = new IntersectionObserver(handleIntersection, options);

// Observer chaque élément avec la classe 'reveal'
elements.forEach((element) => {
  const delay = element.getAttribute("data-delay");
  element.style.setProperty("--delay", `${delay}s`);
  observer2.observe(element);
});


const modalBouttonGoogle = document.querySelector("#carte");
const modalBouttonQuitte = document.querySelector("#noButton");

modalBouttonGoogle.addEventListener("click", function () {
  const modal = document.querySelector("#modalGoogle");
  modal.style.display = "block";
});

modalBouttonQuitte.addEventListener("click", function () {
  const modal = document.querySelector("#modalGoogle");
  modal.style.display = "none";
});
