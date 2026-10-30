import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import SplitText from "gsap/SplitText";
import ButtonHome from "./common/ButtonHome";

const cguStyles = `
  .cgu-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
    min-height: 100vh;
    padding: 6rem 0;
  }

  .cgu-wrapper {
    width: 66.666667%;
    display: flex;
    flex-direction: column;
    gap: 2.5rem;
  }

  .cgu-header {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin-bottom: 2rem;
    text-align: center;
  }

  .cgu-title {
    font-size: 8rem;
    line-height: 1;
  }

  .cgu-title-fr {
    white-space: nowrap;
    display: inline-block;
  }

  .cgu-intro {
    font-size: 1.2rem;
    line-height: 1.8;
    color: rgba(255, 255, 255, 0.9);
  }

  .cgu-section {
    display: flex;
    flex-direction: column;
    gap: 0.75rem;
  }

  .cgu-section h2 {
    font-size: 2.25rem;
    font-family: var(--font-brico, sans-serif);
    color: var(--primary, oklch(71.608% 0.14025 76.897));
  }

  .cgu-section p {
    font-size: 1.125rem;
    line-height: 1.75;
    color: rgba(255, 255, 255, 0.85);
  }

  .cgu-section a {
    color: var(--primary, oklch(71.608% 0.14025 76.897));
    text-decoration: underline;
    text-underline-offset: 4px;
    transition: opacity 0.2s ease;
  }

  .cgu-section a:hover {
    opacity: 0.8;
  }

  @media (max-width: 1440px) {
    .cgu-wrapper {
      width: 80%;
    }

    .cgu-title {
      font-size: 6rem;
    }

    .cgu-section h2 {
      font-size: 1.875rem;
    }
  }

  @media (max-width: 1024px) {
    .cgu-wrapper {
      width: 90%;
    }

    .cgu-title {
      font-size: 4.5rem;
    }

    .cgu-title-fr {
      white-space: normal;
    }

    .cgu-section h2 {
      font-size: 1.5rem;
    }

    .cgu-section p,
    .cgu-intro {
      font-size: 1rem;
    }
  }
`;

const CGU = () => {
  useGSAP(() => {
    const titleSplit = new SplitText("#titleCGU", { type: "chars, words" });

    gsap.from(titleSplit.chars, {
      opacity: 0,
      yPercent: 100,
      duration: 1,
      ease: "expo.out",
      stagger: 0.03,
    });

    gsap.from(".cgu-section, .cgu-intro", {
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
      <style>{cguStyles}</style>

      <div id="cgu-page" className="cgu-container">
        <div className="cgu-wrapper">
          <div className="cgu-header">
            <h1 className="tangerine cgu-title sectionTitle" id="titleCGU">
              <span className="title span">Algemene voorwaarden</span>
              <span className="cgu-title-fr">Conditions générales d’utilisation</span>
            </h1>
          </div>

          <p className="cgu-intro">
            En accédant au site de l'<strong>Herberge In D'hope</strong>, vous acceptez les présentes conditions générales d’utilisation dans leur intégralité[cite: 1].
          </p>

          <div className="cgu-section">
            <h2>Objet du site</h2>
            <p>
              Le site a pour but de fournir des informations sur l'établissement et son histoire, de présenter les prestations proposées (traiteur, événements, espaces) ainsi que les informations pratiques du restaurant[cite: 1].
            </p>
          </div>

          <div className="cgu-section">
            <h2>Accès au site</h2>
            <p>
              Le site est accessible gratuitement 24h/24 et 7j/7[cite: 1]. L’éditeur se réserve toutefois le droit d’interrompre momentanément l’accès pour des raisons de maintenance technique ou de mise à jour[cite: 1].
            </p>
          </div>

          <div className="cgu-section">
            <h2>Responsabilité</h2>
            <p>
              L’éditeur met tout en œuvre pour diffuser des informations exactes et à jour[cite: 1]. Néanmoins, il ne saurait être tenu responsable en cas d’erreurs typographiques, d’interruptions de service ou d’anomalies indépendantes de sa volonté[cite: 1].
            </p>
          </div>

          <div className="cgu-section">
            <h2>Propriété intellectuelle</h2>
            <p>
              L’ensemble du contenu présent sur ce site (textes, visuels, photographies, logo) est la propriété exclusive de l'Herberge In D'hope[cite: 1]. Toute reproduction ou réutilisation sans autorisation préalable est interdite[cite: 1].
            </p>
          </div>

          <div className="cgu-section">
            <h2>Modifications</h2>
            <p>
              L’éditeur se réserve le droit de modifier les présentes CGU à tout moment afin de les adapter aux évolutions du site[cite: 1].
            </p>
          </div>

          <ButtonHome text="Accueil" />
        </div>
      </div>
    </>
  );
};

export default CGU;