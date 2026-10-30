import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import SplitText from "gsap/SplitText";
import ButtonHome from "./common/ButtonHome";

const legalNoticeStyles = `
  .legal-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
    min-height: 100vh;
    padding: 6rem 0;
  }

  .legal-wrapper {
    width: 66.666667%;
    display: flex;
    flex-direction: column;
    gap: 2.5rem;
  }

  .legal-header {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin-bottom: 2rem;
    text-align: center;
  }

  .legal-title {
    font-size: 8rem;
    line-height: 1;
  }

  .legal-title-fr {
    white-space: nowrap;
    display: inline-block;
  }

  .legal-section {
    display: flex;
    flex-direction: column;
    gap: 0.75rem;
  }

  .legal-section h2 {
    font-size: 2.25rem;
    font-family: var(--font-brico, sans-serif);
    color: var(--primary, oklch(71.608% 0.14025 76.897));
  }

  .legal-section p {
    font-size: 1.125rem;
    line-height: 1.75;
    color: rgba(255, 255, 255, 0.85);
  }

  .legal-section a {
    color: var(--primary, oklch(71.608% 0.14025 76.897));
    text-decoration: underline;
    text-underline-offset: 4px;
    transition: opacity 0.2s ease;
  }

  .legal-section a:hover {
    opacity: 0.8;
  }

  @media (max-width: 1440px) {
    .legal-wrapper {
      width: 80%;
    }

    .legal-title {
      font-size: 6rem;
    }

    .legal-section h2 {
      font-size: 1.875rem;
    }
  }

  @media (max-width: 1024px) {
    .legal-wrapper {
      width: 90%;
    }

    .legal-title {
      font-size: 4.5rem;
    }

    .legal-title-fr {
      white-space: normal; 
    }

    .legal-section h2 {
      font-size: 1.5rem;
    }

    .legal-section p {
      font-size: 1rem;
    }
  }
`;

const LegalNotice = () => {
  useGSAP(() => {
    const titleSplit = new SplitText("#titleLegal", { type: "chars, words" });

    gsap.from(titleSplit.chars, {
      opacity: 0,
      yPercent: 100,
      duration: 1,
      ease: "expo.out",
      stagger: 0.03,
    });

    gsap.from(".legal-section", {
      opacity: 0,
      y: 50,
      duration: 1,
      ease: "power1.inOut",
      stagger: 0.1,
      delay: 0.3,
    });
  });

  return (
    <>
      <style>{legalNoticeStyles}</style>

      <div id="legal-notice" className="legal-container">
        <div className="legal-wrapper">
          <div className="legal-header">
            <h1 className="tangerine legal-title sectionTitle" id="titleLegal">
              <span className="title span">Wettelike vermeldingn</span>
              <span className="legal-title-fr">Mentions légales</span>
            </h1>
          </div>

          <div className="legal-section">
            <h2>Éditeur du site</h2>
            <p>
              Ce site est édité par : <br />
              <strong>Herberge In D'hope</strong><br />
              Capital social : 7 500 €<br />
              Numéro fiscal local : 478203979<br />
              Responsable de la publication : Mme CLOET Lucie<br />
              Adresse email :{" "}
              <a href="mailto:herbergeindhope@yahoo.fr">herbergeindhope@yahoo.fr</a><br />
              Téléphone : <a href="tel:+33328680697">03 28 68 06 97</a>
            </p>
          </div>

          <div className="legal-section">
            <h2>Siège social</h2>
            <p>
              Herberge In D'hope<br />
              <em>57 rue principale, 59470 Volckerinckhove</em><br />
              France
            </p>
          </div>

          <div className="legal-section">
            <h2>Création et développement</h2>
            <p>
              Ce site a été conçu et développé par{" "}
              <strong>Hugo Straseele</strong> dans le cadre d’un projet web. <br />
              <em>
                <a href="https://montsy744.github.io/portfolio/" target="_blank" rel="noopener noreferrer">
                  Contact développeur
                </a>
              </em>
            </p>
          </div>

          <div className="legal-section">
            <h2>Propriété intellectuelle</h2>
            <p>
              L’ensemble du contenu de ce site (textes, images, logo, menus, etc.) est la propriété de Herberge In D'hope.<br />
              Toute reproduction ou utilisation sans autorisation est interdite.
            </p>
          </div>

          <div className="legal-section">
            <h2>Données personnelles</h2>
            <p>
              Les données personnelles éventuellement collectées (formulaire de contact, réservation, etc.) ne sont utilisées que dans le cadre des échanges avec le restaurant.<br />
              Conformément à la loi “Informatique et Libertés” et au RGPD, vous pouvez demander à consulter, modifier ou supprimer vos données en contactant :{" "}
              <a href="mailto:herbergeindhope@yahoo.fr">herbergeindhope@yahoo.fr</a>
            </p>
          </div>

          <div className="legal-section">
            <h2>Cookies</h2>
            <p>
              Ce site peut utiliser des cookies pour améliorer l’expérience utilisateur.<br />
              Vous pouvez configurer leur utilisation via votre navigateur ou un bandeau de gestion des cookies.
            </p>
          </div>

          <ButtonHome text="Accueil" />
        </div>
      </div>
    </>
  );
};

export default LegalNotice;