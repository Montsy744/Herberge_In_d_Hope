import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import SplitText from "gsap/SplitText";

const heroStyles = `
  .hero-container {
    width: 100%;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    overflow: hidden;
  }

  .Imghero {
    width: 100%;
    height: 100%;
    position: relative;
    margin: calc(var(--spacing) * 5);
  }

  #imgFacade {
    width: 100%;
    height: 100%;
    position: relative;
  }

  #imgFacade img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: center;
  }

  .hero-content-left {
    position: absolute;
    bottom: 5rem;
    left: 2.5rem;
    max-width: 64rem;
    z-index: 2;
  }

  .hero-subtitle {
    width: fit-content;
    text-align: left;
  }

  /* Style appliqué directement sans balise <strong> */
  #titleHero {
    font-weight: 700;
  }

  .hero-content-right {
    position: absolute;
    bottom: 5rem;
    right: 2.5rem;
    z-index: 2;
  }

  .hero-tagline {
    font-size: 1.875rem;
    line-height: 2.25rem;
    filter: drop-shadow(0 4px 3px rgba(0, 0, 0, 0.5));
  }

  @media (max-width: 1440px) {
    .hero-content-left {
      bottom: 3.5rem;
      left: 2rem;
      max-width: 48rem;
    }

    .hero-content-left .tangerineFontxl {
      font-size: 110px;
    }

    .hero-content-right {
      bottom: 3.5rem;
      right: 2rem;
    }

    .hero-tagline {
      font-size: 1.5rem;
    }
  }

  @media (max-width: 1024px) {
    .hero-content-left {
      bottom: 2.5rem;
      left: 1.5rem;
    }

    .hero-content-left .tangerineFontxl {
      font-size: 80px;
    }

    .hero-content-right {
      bottom: 2.5rem;
      right: 1.5rem;
    }

    .hero-tagline {
      font-size: 1.25rem;
    }
  }

  @media (max-width: 768px) {
    .Imghero {
      margin: 0;
      width: 100%;
      height: 100%;
    }

    .hero-content-left {
      top: 50%;
      bottom: auto;
      left: 0;
      right: 0;
      transform: translateY(-50%);
      width: 100%;
      max-width: 100%;
      text-align: center;
      padding: 0.5rem 1rem;
      background-color: var(--secondary);
    }

    .hero-subtitle {
      width: 100%;
      text-align: center;
    }

    .hero-content-left .tangerineFontxl {
      font-size: 56px;
      line-height: 1.1;
    }

    .hero-content-right {
      bottom: 2.5rem;
      left: 0;
      right: 0;
      width: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
      text-align: center;
    }

    .hero-tagline {
      font-size: 1.1rem;
      text-align: center;
    }
  }

  @media (max-width: 480px) {
    .hero-content-left .tangerineFontxl {
      font-size: 44px;
    }

    .hero-content-right {
      bottom: 2rem;
    }

    .hero-tagline {
      font-size: 1rem;
    }
  }
`;

const Hero = () => {
  useGSAP(() => {
    const titleSplit = new SplitText("#titleHero", { type: "chars, words" });

    const parallaxTimeline = gsap.timeline({
      scrollTrigger: {
        trigger: "#hero",
        start: "top 30%",
        end: "bottom 80%",
      },
    });

    parallaxTimeline
      .from(titleSplit.chars, {
        opacity: 0,
        yPercent: 100,
        duration: 1,
        ease: "expo.out",
        stagger: 0.03,
      })
      .from(
        ".paraHero",
        {
          opacity: 0,
          y: 100,
          duration: 1,
          ease: "power1.inOut",
          stagger: 0.04,
        },
        "-=0.5"
      );
  });

  return (
    <>
      <style>{heroStyles}</style>

      <div id="hero" className="hero-container">
        <div className="Imghero">
          <div id="imgFacade">
            <div className="noisy" />
            <img
              src="/img/convivialité_Hero_Section.jpg"
              alt="image de l'intérieure du restaurant"
            />
          </div>

          <div className="hero-content-left">
            <p className="title bricoFont3xl hero-subtitle paraHero">
              <span>Velekommen</span>
            </p>
            <p className="tangerineFontxl" id="titleHero">
              Herberge in d'Hope
            </p>
          </div>

          <div className="hero-content-right">
            <p className="text paraHero hero-tagline">
              <span>Spécialités régionales</span>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;