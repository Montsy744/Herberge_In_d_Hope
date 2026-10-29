import { liensNavbar } from "../../../constant/constant";
import ButtonNavbar from "./../ContactBtn";

const navbarStyles = `
  .navbar-container {
    z-index: 15;
    display: flex;
    justify-content: space-between;
    align-items: center;
    position: fixed;
    width: 100%;
    height: 10rem; /* 160px pour grand écran fixe */
    background-color: rgba(0, 0, 0, 0.4);
    padding: 0 2rem;
    transition: all 0.3s ease;
  }

  .navbar-section {
    width: 33.333333%;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .navbar-logo {
    width: 6.25rem; /* 100px */
    height: auto;
  }

  .navbar-links {
    width: 40%; /* Un peu plus large pour laisser respirer le texte */
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 1rem;
  }

  @media (max-width: 1440px) {
    .navbar-container {
      height: 6.5rem; /* On réduit la hauteur sur portable (104px) */
      padding: 0 1.5rem;
    }

    .navbar-logo {
      width: 5rem; /* Logo plus petit */
    }

    .navbar-links {
      width: 45%; /* On donne plus de place aux liens */
    }

    .navbar-links a {
      font-size: 1.25rem; /* Taille du texte légèrement réduite */
    }
  }

  @media (max-width: 1024px) {
    .navbar-container {
      height: 5.5rem;
      padding: 0 1rem;
    }

    .navbar-logo {
      width: 4rem;
    }

    .navbar-links {
      width: 50%;
    }

    .navbar-links a {
      font-size: 1.1rem;
    }
  }
`;

const Navbar = () => {
    return (
        <>
            <style>{navbarStyles}</style>

            <div className="navbar-container">
                <div id="header_img" className="navbar-section">
                    <img
                        src="/img/logoHerbergeindhope.png"
                        alt="logo du restaurant"
                        className="navbar-logo"
                    />
                </div>
                <div className="navbar-links">
                    {liensNavbar.map((link, index) => {
                        return (
                            <a 
                                key={index}
                                href={link.href}
                                className="title"
                            >
                                {link.texte}
                            </a>
                        );
                    })}
                </div>
                <div className="navbar-section">
                    <ButtonNavbar />
                </div>
            </div>
        </>
    );
};

export default Navbar;