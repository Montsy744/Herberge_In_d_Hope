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
    justify-content: center;
  }

  .contact-heading {
    font-size: 8rem;
    line-height: 1;
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
  }
`;

const Contact = () => {
    return (
        <>
            <style>{contactStyles}</style>

            <div id="Contact" className="contact-container">
                <div className="contact-wrapper">
                    <h2 className="tangerine contact-heading sectionTitle">
                        <span className="title span">Ons kontakteren</span> Nous contacter
                    </h2>

                    <div>
                        <div>
                            
                        </div>
                        <div>

                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Contact;