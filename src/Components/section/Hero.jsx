import { useGSAP } from "@gsap/react";
import SplitText from "gsap/src/SplitText";
import gsap from "gsap";

const heroStyles = `
  .hero-container {
    width: 100vw;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .hero-content-left {
    position: absolute;
    bottom: 5rem; 
    left: 2.5rem; 
    max-width: 64rem; 
    margin-left: 0.5rem;
  }

  .hero-subtitle {
    width: min-content;
    text-align: right;
  }

  .hero-content-right {
    position: absolute;
    bottom: 5rem;
    right: 2.5rem;
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
`;

const Hero = () => {
  useGSAP(() => {
    const titleSplit = new SplitText("#titleHero", { type: "chars" });

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
              <strong>Herberge in d'Hope</strong>
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