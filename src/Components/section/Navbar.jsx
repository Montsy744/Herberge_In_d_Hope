import { useState } from "react";
import { liensNavbar } from "../../../constant/constant";
import ButtonNavbar from "./../ContactBtn";

const navbarStyles = `
  .navbar-container {
    z-index: 50;
    display: flex;
    justify-content: space-between;
    align-items: center;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    max-width: 100vw;
    box-sizing: border-box;
    height: 10rem;
    background-color: rgba(0, 0, 0, 0.4);
    padding: 0 2rem;
    transition: all 0.3s ease;
  }

  .nav-logo-wrapper {
    flex: 1;
    display: flex;
    justify-content: flex-start;
    align-items: center;
  }

  .navbar-logo {
    width: 6.25rem;
    height: auto;
    z-index: 60;
    position: relative;
  }

  .nav-links-desktop {
    flex: 2;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 2rem;
  }

  .nav-links-desktop a {
    text-decoration: none;
    transition: color 0.3s ease;
  }

  .nav-btn-desktop {
    flex: 1;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    z-index: 60;
  }

  .burger-menu-btn {
    display: none;
    z-index: 60;
    cursor: pointer;
  }

  .burger-icon {
    width: 30px;
    height: 20px;
    position: relative;
  }

  .burger-icon span {
    display: block;
    position: absolute;
    height: 2px;
    width: 100%;
    background: var(--primary, oklch(71.608% 0.14025 76.897));
    border-radius: 2px;
    opacity: 1;
    left: 0;
    transform: rotate(0deg);
    transition: 0.3s ease-in-out;
  }

  .burger-icon span:nth-child(1) { top: 0px; }
  .burger-icon span:nth-child(2) { top: 9px; }
  .burger-icon span:nth-child(3) { top: 18px; }

  .burger-menu-btn.open .burger-icon span:nth-child(1) {
    top: 9px;
    transform: rotate(135deg);
  }
  .burger-menu-btn.open .burger-icon span:nth-child(2) {
    opacity: 0;
    left: -40px;
  }
  .burger-menu-btn.open .burger-icon span:nth-child(3) {
    top: 9px;
    transform: rotate(-135deg);
  }

  .mobile-nav-overlay {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100vh;
    background-color: rgba(0, 0, 0, 0.95);
    backdrop-filter: blur(10px);
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 2.5rem;
    z-index: 45;
    opacity: 0;
    pointer-events: none;
    transition: opacity 0.4s ease;
  }

  .mobile-nav-overlay.open {
    opacity: 1;
    pointer-events: auto;
  }

  .mobile-nav-overlay a {
    font-size: 2rem;
    color: white;
    text-decoration: none;
    font-family: var(--font-brico, sans-serif);
    transition: color 0.3s ease;
  }

  .mobile-nav-overlay a:hover {
    color: var(--primary, oklch(71.608% 0.14025 76.897));
  }

  @media (max-width: 1440px) {
    .navbar-container {
      height: 6.5rem;
      padding: 0 1.5rem;
    }
    .navbar-logo {
      width: 5rem;
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
  }

  @media (max-width: 768px) {
    .nav-links-desktop,
    .nav-btn-desktop {
      display: none;
    }

    .burger-menu-btn {
      display: flex;
    }
  }
`;

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const closeMenu = () => {
        setIsMenuOpen(false);
    };

    return (
        <>
            <style>{navbarStyles}</style>

            <div className="navbar-container">
                <div id="header_img" className="nav-logo-wrapper">
                    <img
                        src="/img/logoHerbergeindhope.png"
                        alt="logo du restaurant"
                        className="navbar-logo"
                    />
                </div>

                <div className="nav-links-desktop">
                    {liensNavbar.map((link, index) => (
                        <a 
                            key={index}
                            href={link.href}
                            className="title"
                        >
                            {link.texte}
                        </a>
                    ))}
                </div>

                <div className="nav-btn-desktop">
                    <ButtonNavbar />
                </div>

                <div 
                    className={`burger-menu-btn ${isMenuOpen ? "open" : ""}`} 
                    onClick={toggleMenu}
                >
                    <div className="burger-icon">
                        <span></span>
                        <span></span>
                        <span></span>
                    </div>
                </div>
            </div>

            <div className={`mobile-nav-overlay ${isMenuOpen ? "open" : ""}`}>
                {liensNavbar.map((link, index) => (
                    <a 
                        key={index}
                        href={link.href}
                        onClick={closeMenu}
                    >
                        {link.texte}
                    </a>
                ))}
                
                <div onClick={closeMenu}>
                    <ButtonNavbar />
                </div>
            </div>
        </>
    );
};

export default Navbar;