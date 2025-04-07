// Sélectionnez le header
const header = document.querySelector("header");

// Ajoutez un gestionnaire d'événements pour le défilement
window.addEventListener("scroll", () => {
  const scrolledToBottom =
    window.innerHeight + window.scrollY >= document.body.offsetHeight;
  const scrolledToTop = window.scrollY === 0;

  if (scrolledToBottom) {
    // Changez la couleur de fond du header en noir
    header.style.backgroundColor = "black";
  } else if (scrolledToTop) {
    // Changez la couleur de fond du header en semi-transparent
    header.style.backgroundColor = "rgba(0, 0, 0, 0.4)";
  }
});
