import { textChef } from "../../../constant/constant";

const chefWordStyles = `
  .chef-container {
    display: flex;
    justify-content: center;
    margin: 2rem 0;
  }

  .chef-wrapper {
    width: 66.666667%;
  }

  .chef-title-box {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
  }

  .chef-heading {
    font-size: 8rem;
    line-height: 1;
  }

  .chef-grid {
    display: grid;
    grid-template-columns: repeat(2, minmax(0, 1fr));
    gap: 3.75rem;
  }

  .chef-img {
    border-radius: 1.5rem;
    width: 100%;
    height: auto;
    object-fit: cover;
  }

  @media (max-width: 1440px) {
    .chef-wrapper {
      width: 80%;
    }

    .chef-heading {
      font-size: 6rem;
    }

    .chef-grid {
      gap: 2.5rem;
    }
  }

  @media (max-width: 1024px) {
    .chef-wrapper {
      width: 90%;
    }

    .chef-heading {
      font-size: 4.5rem;
    }

    .chef-grid {
      grid-template-columns: repeat(1, minmax(0, 1fr));
      gap: 2rem;
    }
  }
`;

const ChefWord = () => {
    return (
        <>
            <style>{chefWordStyles}</style>

            <div className="chef-container" id="#chef">
                <div className="chef-wrapper">
                    <div className="chef-title-box">
                        <h2 className="tangerine chef-heading sectionTitle" id="titreChef">
                            <span className="title span">'t Woord van den chef</span> Le mot des chefs
                        </h2>
                    </div>

                    <div className="chef-grid">
                        <div>
                            <p className="text textChef">
                                { textChef } 
                            </p>
                        </div>
                        <div>
                            <img className="imgChefs chef-img" src="/img/photo_chefs_mot_des_chefs_section.jpeg" alt="photo des chefs" />
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default ChefWord;