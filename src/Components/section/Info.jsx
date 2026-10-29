import Showroom from "./Showroom";

const infoStyles = `
  .info-container {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-bottom: 3.75rem !important;
  }

  .info-title-box {
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 7.5rem !important;
  }

  .info-heading {
    font-size: 8rem;
    line-height: 1;
  }

  .info-content {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
  }

  @media (max-width: 1440px) {
    .info-title-box {
      margin: 5rem !important;
    }

    .info-heading {
      font-size: 6rem;
    }
  }

  @media (max-width: 1024px) {
    .info-title-box {
      margin: 3rem 1rem !important;
    }

    .info-heading {
      font-size: 4.5rem;
    }
  }
`;

const Info = () => {
  return (
    <>
      <style>{infoStyles}</style>

      <div id="infoPratique" className="info-container">
        <div className="info-title-box">
          <h2 className="tangerine info-heading sectionTitle">
            <span className="title span">Practische weetn</span> Infos Pratiques
          </h2>
        </div>
        <div className="info-content">
          <Showroom />
        </div>
      </div>
    </>
  );
};

export default Info;