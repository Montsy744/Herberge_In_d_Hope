import { GoogleMapsImg, GoogleMapsLink } from "../../../constant/constant";
import ContactInfo from "../ContactInfo";

const contactStyles = `

  .contact-container {
    display: flex;
    justify-content: center;
    min-height: 100vh;
    margin-top: 3.75rem !important;
  }

  .contact-wrapper {
    width: 66.666667%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin: 2rem 0;
  }

  .contact-heading {
    font-size: 8rem;
    line-height: 1;
  }

  .contact-wrapper-container {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    margin-top: 3rem;
  }

  .contact-wrapper-container-img {
    position: relative;
    width: 100%;
    height: 25rem; 
    border-radius: 1.5rem;
    cursor: pointer;
  }

  .contact-wrapper-container-img::before {
    content: "";
    position: absolute;
    top: -25px;
    left: 5%;
    right: 5%;
    height: 50px;
    border-radius: 50%;
    background: radial-gradient(
      ellipse at center,
      var(--sun-glow-core) 0%,
      var(--sun-glow-color) 35%,
      var(--sun-transparent) 70%
    );
    opacity: 0;
    filter: blur(12px);
    transition: opacity 0.4s ease, transform 0.4s ease, filter 0.4s ease;
    z-index: 1;
    pointer-events: none;
  }

  .contact-wrapper-container-img::after {
    content: "";
    position: absolute;
    bottom: -25px; 
    left: 5%;
    right: 5%;
    height: 50px;
    border-radius: 50%;
    background: radial-gradient(
      ellipse at center,
      var(--sun-glow-core) 0%,
      var(--sun-glow-color) 35%,
      var(--sun-transparent) 70%
    );
    opacity: 0;
    filter: blur(12px);
    transition: opacity 0.4s ease, transform 0.4s ease, filter 0.4s ease;
    z-index: 1;
    pointer-events: none;
  }

  .contact-wrapper-container-img:hover::before {
    opacity: 1;
    filter: blur(16px);
    transform: translateY(-5px) scaleY(1.3);
  }

  .contact-wrapper-container-img:hover::after {
    opacity: 1;
    filter: blur(16px);
    transform: translateY(5px) scaleY(1.3);
  }

  .contact-wrapper-container-img img {
    position: relative;
    z-index: 2;
    width: 100%;
    height: 100%;
    object-fit: cover; 
    object-position: center; 
    border-radius: 1.5rem;
    transition: transform 0.3s ease;
  }

  .contact-wrapper-container-img:hover img {
    transform: scale(1.005);
  }

  .contact-info-wrapper {
    width: 100%;
    display: flex;
    justify-content: space-evenly;
    gap: 3rem;
    align-items: center;
    margin: 4rem 0;
  }

  @media (max-width: 1440px) {
    .contact-wrapper {
      width: 80%;
    }

    .contact-heading {
      font-size: 6rem;
    }
  }

  @media (max-width: 1024px) {
    .contact-wrapper {
      width: 90%;
      flex-direction: column;
      align-items: center;
    }

    .contact-heading {
      font-size: 4.5rem;
    }

    .contact-wrapper-container-img {
      height: 18rem;
    }
  }
`;

const goToMaps = () => {
    window.open(GoogleMapsLink, "_blank");
};

const Contact = () => {
    return (
        <>
            <style>{contactStyles}</style>

            <div id="Contact" className="contact-container">
                <div className="contact-wrapper">
                    <h2 className="tangerine contact-heading sectionTitle">
                        <span className="title span">Ons kontakteren</span> Nous contacter
                    </h2>
                    <div className="contact-wrapper-container">
                        <div className="contact-wrapper-container-img" onClick={ goToMaps }>
                            <img src={ GoogleMapsImg } alt="Emplacement sur la carte" />
                        </div>
                        <div className="contact-info-wrapper">
                            <ContactInfo 
                              title="Nous trouver :"
                              info="57 rue principale, 59470 Volckerinckhove"
                            />
                            <ContactInfo 
                              title="Nous contacter par e-mail :"
                              info="herbergeindhope@yahoo.fr"
                            />
                            <ContactInfo 
                              title="Nous contacter par téléphone :"
                              info="03 28 68 06 97"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Contact;