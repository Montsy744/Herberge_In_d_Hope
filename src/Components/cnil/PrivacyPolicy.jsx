import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import SplitText from "gsap/SplitText";
import ButtonHome from "./common/ButtonHome";

const privacyStyles = `
  .privacy-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
    min-height: 100vh;
    padding: 6rem 0;
  }

  .privacy-wrapper {
    width: 66.666667%;
    display: flex;
    flex-direction: column;
    gap: 2.5rem;
  }

  .privacy-header {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin-bottom: 2rem;
    text-align: center;
  }

  .privacy-title {
    font-size: 8rem;
    line-height: 1;
  }

  .privacy-title-fr {
    white-space: nowrap;
    display: inline-block;
  }

  .privacy-intro {
    font-size: 1.2rem;
    line-height: 1.8;
    color: rgba(255, 255, 255, 0.9);
  }

  .privacy-section {
    display: flex;
    flex-direction: column;
    gap: 0.75rem;
  }

  .privacy-section h2 {
    font-size: 2.25rem;
    font-family: var(--font-brico, sans-serif);
    color: var(--primary, oklch(71.608% 0.14025 76.897));
  }

  .privacy-section p {
    font-size: 1.125rem;
    line-height: 1.75;
    color: rgba(255, 255, 255, 0.85);
  }

  .privacy-section a {
    color: var(--primary, oklch(71.608% 0.14025 76.897));
    text-decoration: underline;
    text-underline-offset: 4px;
    transition: opacity 0.2s ease;
  }

  .privacy-section a:hover {
    opacity: 0.8;
  }

  @media (max-width: 1440px) {
    .privacy-wrapper {
      width: 80%;
    }

    .privacy-title {
      font-size: 6rem;
    }

    .privacy-section h2 {
      font-size: 1.875rem;
    }
  }

  @media (max-width: 1024px) {
    .privacy-wrapper {
      width: 90%;
    }

    .privacy-title {
      font-size: 4.5rem;
    }

    .privacy-title-fr {
      white-space: normal;
    }

    .privacy-section h2 {
      font-size: 1.5rem;
    }

    .privacy-section p,
    .privacy-intro {
      font-size: 1rem;
    }
  }
`;

const PrivacyPolicy = () => {
  useGSAP(() => {
    const titleSplit = new SplitText("#titlePrivacy", { type: "chars, words" });

    gsap.from(titleSplit.chars, {
      opacity: 0,
      yPercent: 100,
      duration: 1,
      ease: "expo.out",
      stagger: 0.03,
    });

    gsap.from(".privacy-section, .privacy-intro", {
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
      <style>{privacyStyles}</style>

      <div id="privacy-policy" className="privacy-container">
        <div className="privacy-wrapper">
          <div className="privacy-header">
            <h1 className="tangerine privacy-title sectionTitle" id="titlePrivacy">
              <span className="title span">Vertrouwensbeleid</span>
              <span className="privacy-title-fr">Politique de confidentialité</span>
            </h1>
          </div>

          <p className="privacy-intro">
            Le site de l'<strong>Herberge In D'hope</strong> est un site vitrine purement statique. 
            Nous respectons votre vie privée et veillons à une transparence totale concernant l'absence de collecte de données.
          </p>

          <div className="privacy-section">
            <h2>Absence de collecte de données personnelles</h2>
            <p>
              Ce site ne comporte aucun formulaire de saisie, espace membre ou système de réservation en ligne. 
              Par conséquent, aucune donnée personnelle (nom, adresse, e-mail, téléphone) n'est collectée, enregistrée ou stockée lors de votre navigation.
            </p>
          </div>

          <div className="privacy-section">
            <h2>Liens et services tiers</h2>
            <p>
              Le site propose un lien interactif vers Google Maps pour vous permettre de situer le restaurant. 
              En cliquant sur la carte, vous êtes redirigé vers le service externe de Google Maps, qui est régi par sa propre politique de confidentialité.
            </p>
          </div>

          <div className="privacy-section">
            <h2>Cookies et traqueurs</h2>
            <p>
              Ce site n'utilise aucun cookie publicitaire, cookie de suivi ou traqueur d'analyse d'audience.
            </p>
          </div>

          <div className="privacy-section">
            <h2>Contact</h2>
            <p>
              Pour toute question concernant le restaurant ou l'établissement, vous pouvez nous contacter directement par téléphone au <a href="tel:+33328680697">03 28 68 06 97</a> ou par e-mail à <a href="mailto:herbergeindhope@yahoo.fr">herbergeindhope@yahoo.fr</a>.
            </p>
          </div>

          <ButtonHome text="Accueil" />
        </div>
      </div>
    </>
  );
};

export default PrivacyPolicy;