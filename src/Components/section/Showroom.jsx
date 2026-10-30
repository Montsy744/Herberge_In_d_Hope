import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { horraireShowroom } from "../../../constant/constant";

gsap.registerPlugin(ScrollTrigger);

const showroomStyles = `
  #showroom h2,
  #showroom p {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  .showroom-w-screen {
    width: 100vw;
  }

  .showroom-flex-center {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
  }

  .showroom-w-1-3 {
    width: 33.333333%;
  }

  .showroom-title-desktop {
    color: var(--primary);
    font-family: "Montserrat", sans-serif;
    font-size: 1.875rem; 
    line-height: 2.25rem;
    font-weight: 700; 
    text-align: center;
    margin: 1.25rem !important; 
    filter: drop-shadow(0 4px 3px rgba(0, 0, 0, 0.3)); 
  }

  .showroom-row-desktop {
    display: flex;
    justify-content: space-between;
    margin-bottom: 0.75rem !important; 
  }

  .showroom-hours-desktop {
    color: var(--primary);
    font-family: "Montserrat", sans-serif;
    text-align: justify;
    font-size: 1.25rem; 
    line-height: 1.75rem;
  }

  @media (max-width: 768px) {
    .showroom-w-screen {
      width: 100%; 
    }

    .showroom-w-1-3 {
      width: 90%;
    }

    .showroom-title-desktop {
      font-size: 1.5rem !important;
      line-height: 2rem !important;
      margin: 1rem 0 !important;
    }

    .showroom-hours-desktop {
      font-size: 1rem !important;
      line-height: 1.5rem !important;
    }
  }

  @media (max-width: 480px) {
    .showroom-w-1-3 {
      width: 100%;
      padding: 0 1rem;
    }

    .showroom-title-desktop {
      font-size: 1.25rem !important;
      line-height: 1.75rem !important;
    }

    .showroom-hours-desktop {
      font-size: 0.9rem !important;
    }
  }
`;

const Showroom = () => {
  useGSAP(() => {
    const mm = gsap.matchMedia();

    mm.add("(min-width: 769px)", () => {
      gsap
        .timeline({
          scrollTrigger: {
            trigger: "#showroom",
            start: "top 30%",
            end: "bottom 100%",
            scrub: 1,
          },
        })
        .from(
          ".horraire",
          {
            yPercent: 100,
            opacity: 0,
            duration: 2,
            ease: "expo.out",
            stagger: 0.7,
          },
          "-=0.5"
        );
    });
  });

  return (
    <>
      <style>{showroomStyles}</style>

      <div id="showroom">
        <div className="showroom-w-screen">
          <div className="showroom-flex-center">
            <div className="showroom-w-1-3">
              <div>
                <h2 className="showroom-title-desktop">
                  Les Horaires d'ouverture du showroom
                </h2>
              </div>
              {horraireShowroom.map((prop, index) => (
                <div key={index} className="showroom-row-desktop horraire">
                  <p className="text">{prop.jour}</p>
                  <p className="showroom-hours-desktop">{prop.horraire}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Showroom;