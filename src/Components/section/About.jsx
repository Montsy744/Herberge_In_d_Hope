import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import { textAmnbianceConv, textApropos } from "../../../constant/constant";

gsap.registerPlugin(ScrollTrigger);

const aboutStyles = `
  .about-screen {
    min-height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 2.5rem 0;
  }

  .about-wrapper {
    width: 66.666667%;
  }

  .about-grid {
    display: grid;
    grid-template-columns: repeat(3, minmax(0, 1fr));
    gap: 0.5rem;
  }

  .about-grid-top {
    margin-top: 2.5rem !important;
    margin-bottom: 2.5rem !important;
  }

  .about-col-2 {
    grid-column: span 2 / span 2;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
  }

  .about-top-right {
    justify-content: flex-end;
    padding-left: 2.5rem !important;
  }

  .about-bottom-left {
    justify-content: flex-start;
    padding-right: 2.5rem !important;
  }

  .about-heading-tangerine {
    font-size: 8rem;
    line-height: 1;
  }

  .about-img-full-height {
    height: 100%;
  }

  @media (max-width: 1440px) {
    .about-wrapper {
      width: 80%;
    }

    .about-heading-tangerine {
      font-size: 6rem; 
    }

    .about-top-right {
      padding-left: 1.5rem !important;
    }

    .about-bottom-left {
      padding-right: 1.5rem !important;
    }
  }

  @media (max-width: 1024px) {
    .about-wrapper {
      width: 90%;
    }

    .about-heading-tangerine {
      font-size: 4.5rem;
    }

    .about-grid {
      gap: 1rem;
    }
  }

  @media (max-width: 768px) {
    .about-screen {
      padding: 4rem 0;
    }

    .about-wrapper {
      width: 90%;
      display: flex;
      flex-direction: column;
      gap: 1.5rem;
    }

    .about-grid {
      display: flex;
      flex-direction: column;
      margin: 0 !important;
      gap: 1.5rem;
    }

    .about-col-2 {
      display: contents;
    }

    .about-heading-tangerine {
      font-size: 3.5rem;
      text-align: center;
      width: 100%;
      order: 1;
    }

    .imgHautGaucheAPropos {
      order: 2;
    }

  
    .textHautDroiteAporpos {
      order: 3;
    }

    .imgDroiteBasApropos {
      order: 4;
    }

    .about-bottom-left {
      order: 5;
    }

    .noisyImgContaineur img,
    .about-img-full-height {
      width: 100%;
      max-height: 350px;
      object-fit: cover;
    }
  }

  @media (max-width: 480px) {
    .about-heading-tangerine {
      font-size: 2.8rem;
    }
  }
`;

const About = () => {
  useGSAP(() => {
    const mm = gsap.matchMedia();

    mm.add("(min-width: 769px)", () => {
      const scrollTimeline = gsap.timeline({
        scrollTrigger: {
          trigger: "#apropos",
          start: 'top 30%',
          end: 'bottom 90%',
          scrub: true,
        },
      });

      scrollTimeline.from(
        ".imgHautGaucheAPropos, .textHautDroiteAporpos",
        {
          opacity: 0,
          y: 100,
          duration: 1,
          ease: "power1.inOut",
          stagger: 0.04,
        },
        '-=0.5'
      )
      .from(
        ".imgDroiteBasApropos, .textBasGaucheAPropos", {
          opacity: 0,
          y: 100,
          duration: 1,
          ease: "power1.inOut",
          stagger: 0.04,
        },
        '-=0.5'
      );
    });
  });

  return (
    <>
      <style>{aboutStyles}</style>

      <div id="apropos">
        <div className="about-screen">
          <div className="about-wrapper">
            <div className="about-grid about-grid-top">
              <div className="ImgNoisy imgHautGaucheAPropos">
                <div className="noisyImgContaineur">
                  <div className="noisy" />
                  <img
                    src="/img/photo_terasse_about_section.jpg"
                    alt="image de la cour extérieure"
                  />
                </div>
              </div>

              <div className="about-col-2 about-top-right">
                <h2 className="tangerine about-heading-tangerine sectionTitle">
                  <span className="title span">Oaver ons</span> A propos de nous
                </h2>
                <p className="text textHautDroiteAporpos">
                  { textApropos }
                </p>
              </div>
            </div>

            <div className="about-grid">
              <div className="about-col-2 about-bottom-left textBasGaucheAPropos">
                <h2 className="title">
                  <span></span>Une ambiance conviviale pour tous !
                </h2>
                <p className="text">
                  { textAmnbianceConv }
                </p>
              </div>

              <div className="ImgNoisy imgDroiteBasApropos">
                <div className="noisyImgContaineur about-img-full-height">
                  <div className="noisy" />
                  <img
                    className="about-img-full-height"
                    src="/img/photo_facade_about_section.jpg"
                    alt="image de la cour extérieure"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;