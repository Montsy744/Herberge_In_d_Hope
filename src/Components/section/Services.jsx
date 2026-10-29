import { useGSAP } from "@gsap/react";
import { SplitText } from "gsap/all";
import gsap from "gsap";
import Snowfall from "react-snowfall";
import { service1, service2, service3 } from "../../../constant/constant";

const servicesStyles = `
  .services-section {
    position: relative;
  }

  .services-container {
    min-height: 100vh;
  }

  .services-wrapper-outer {
    display: flex;
    justify-content: center;
  }

  .services-wrapper {
    max-width: 66.666667%;
    width: 100%;
  }

  .services-grid {
    display: grid;
    grid-template-columns: repeat(3, minmax(0, 1fr));
    gap: 0.5rem;
  }

  .services-col-1 {
    grid-column: span 1 / span 1;
  }

  .services-col-3 {
    grid-column-start: 3;
    grid-column: span 1 / span 1;
  }

  .service-item {
    margin-top: 3rem !important;
    margin-bottom: 3rem !important;
  }

  .service-item-right {
    text-align: right;
  }

  .services-footer {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    width: 100%;
    margin-top: 3rem !important;
    margin-bottom: 3rem !important;
    text-align: center;
  }

  .service-footer-title {
    color: #ffffff;
    font-family: "Montserrat", sans-serif;
    font-weight: 700;
    text-align: justify;
    font-size: 2.25rem;
    line-height: 2.5rem;
  }

  @media (max-width: 1440px) {
    .services-wrapper {
      max-width: 80%;
    }

    .service-item {
      margin-top: 2rem !important;
      margin-bottom: 2rem !important;
    }

    .service-footer-title {
      font-size: 1.875rem;
      line-height: 2.25rem;
    }
  }

  @media (max-width: 1024px) {
    .services-wrapper {
      max-width: 90%;
    }

    .services-grid {
      grid-template-columns: repeat(1, minmax(0, 1fr));
      gap: 1.5rem;
    }

    .services-col-3 {
      grid-column-start: 1;
    }

    .service-item-right {
      text-align: left;
    }
  }
`;

const Services = () => {
  useGSAP(() => {
    const heroSplit = new SplitText(".titleService", { type: "chars, words" });
    gsap
      .timeline({
        scrollTrigger: {
          trigger: "#nosService",
          start: "top 30%",
          end: "bottom 100%",
          scrub: 1,
        },
      })
      .from(heroSplit.chars, {
        yPercent: 100,
        opacity: 0,
        duration: 2,
        ease: "expo.out",
        stagger: 0.4,
      })
      .from(
        ".liService",
        {
          yPercent: 100,
          opacity: 0,
          duration: 1.8,
          ease: "expo.out",
          stagger: 0.2,
        },
        "-=0.5"
      );
  });

  return (
    <>
      <style>{servicesStyles}</style>

      <section id="nosService" className="services-section noisyNonAbs">
        <Snowfall color="#d49623" />
        <div className="services-container">
          <h1 className="titleService text">NOS SERVICES</h1>
          <div className="services-wrapper-outer">
            <div className="services-wrapper">
              <div className="services-grid">
                <div className="services-col-1">
                  <ul>
                    {service1.map((string, index) => (
                      <div key={index} className="service-item liService">
                        <span className="listService"></span>
                        <li className="textLeft">{string}</li>
                      </div>
                    ))}
                  </ul>
                </div>
                <div className="services-col-3">
                  <ul>
                    {service2.map((string, index) => (
                      <div
                        key={index}
                        className="service-item service-item-right liService"
                      >
                        <span className="listService"></span>
                        <li className="textRight">{string}</li>
                      </div>
                    ))}
                  </ul>
                </div>
              </div>
              <div className="services-footer">
                <span className="listService"></span>
                <h2 className="service-footer-title">{service3}</h2>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Services;