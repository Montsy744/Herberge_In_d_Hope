# Herberge In d'Hope

Site vitrine de l'Herberge In d'Hope, un établissement de restauration et de réception situé à Volckerinckhove, dans le Nord. Le site présente l'auberge, ses espaces, ses prestations et son univers culinaire, et permet aux visiteurs de prendre contact pour préparer une réception ou une réservation.

**Site en ligne :** [herberge-in-d-hope.vercel.app](https://herberge-in-d-hope.vercel.app)

## Présentation

Développé de A à Z dans le cadre de mon activité d'employé étudiant au sein de l'établissement, ce projet a pour objectif de proposer une vitrine digitale moderne, fluide et attractive. Il valorise les espaces de réception et l'offre traiteur, tout en rendant les informations pratiques et les moyens de contact facilement accessibles.

## Fonctionnalités

- Page d'accueil avec présentation de l'établissement et de son identité.
- Présentation des services : traiteur, séminaires, mariages et événements privés.
- Galerie de photos des espaces, des plats, des entrées et des desserts.
- Informations pratiques et horaires du showroom.
- Coordonnées, accès à l'établissement et lien vers Google Maps.
- Pages dédiées aux mentions légales, à la politique de confidentialité et aux conditions générales d'utilisation.
- Interface responsive et animations au défilement.
- Métadonnées pour le référencement et l'aperçu lors du partage sur les réseaux sociaux.

## Technologies

- React 19
- Vite 7
- React Router
- GSAP et ScrollTrigger pour les animations
- Tailwind CSS 4
- ESLint

## Prérequis

- Node.js 20.19 ou plus récent (ou 22.12 ou plus récent)
- npm

## Installation et lancement

```bash
git clone https://github.com/Montsy744/Herberge_In_d_Hope.git
cd Herberge_In_d_Hope
npm install
npm run dev
```

Le serveur de développement affiche l'adresse locale à ouvrir dans le navigateur.

## Scripts disponibles

| Commande | Description |
| --- | --- |
| `npm run dev` | Lance le serveur de développement Vite. |
| `npm run build` | Génère la version de production dans `dist/`. |
| `npm run preview` | Sert localement la version de production générée. |
| `npm run lint` | Vérifie le code avec ESLint. |

## Structure du projet

```text
.
├── constant/                 # Textes, horaires, services et chemins des images
├── public/
│   ├── Fonts/                # Polices locales
│   ├── img/                  # Photographies et ressources visuelles
│   ├── robots.txt
│   └── sitemap.xml
├── src/
│   ├── Components/
│   │   ├── cnil/             # Pages légales et composants associés
│   │   └── section/          # Sections de la page d'accueil
│   ├── App.jsx               # Routes et composition des pages
│   ├── index.css
│   └── main.jsx              # Point d'entrée React
├── index.html                # Métadonnées et point de montage de l'application
├── package.json
└── vite.config.js
```

## Informations de contact de l'établissement

- **Adresse :** 57 rue principale, 59470 Volckerinckhove
- **Téléphone :** 03 28 68 06 97
- **E-mail :** [herbergeindhope@yahoo.fr](mailto:herbergeindhope@yahoo.fr)

## Auteur

Projet réalisé par **Hugo Straseele**.
