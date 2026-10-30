import { Link } from "react-router-dom";

const Footer = () => {
    const footerStyle = `
    
    .footer-container {
        padding: 0 2rem;
    }

    .footer-container-top {
        display: flex;
        justify-content: space-evenly;
        align-items: center;
        gap: 3rem;
        width: 100%;
        padding: 1rem 0;
    }

    .left {
        display: flex;
        justify-content: baseline;
        align-items: center;
    }

    .left-text h1 {
        color: var(--tertiary);
        font-size: 2rem;
    }
    .left-text h2,
    .right p {
        color: var(--tertiary);
        font-size: 1.4rem;
    }

    .center {
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .center-img {
        width: 10rem;
    }

    .footer-logo {
        width: 100%;
        height: auto;
    }

    .footer-container-bottom {
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 1rem;
        width: 100%;
        padding: 2rem 0;
        border-top: 1px solid rgba(255, 255, 255, 0.1);
    }

    .footer-link {
        color: var(--tertiary);
        font-size: 1.1rem;
        text-decoration: none;
        transition: color 0.3s ease;
    }

    .footer-link:hover {
        color: var(--primary);
        text-decoration: underline;
    }

    .footer-separator {
        color: var(--primary);
    }

    /* --- ADAPTATION RESPONSIVE MOBILE --- */
    @media (max-width: 1024px) {
        .footer-container-top {
            gap: 1.5rem;
        }

        .left-text h1 {
            font-size: 1.75rem;
        }

        .left-text h2,
        .right p {
            font-size: 1.1rem;
        }

        .center-img {
            width: 8rem;
        }
    }

    @media (max-width: 768px) {
        .footer-container {
            padding: 0 1rem;
        }

        .footer-container-top {
            flex-direction: column;
            text-align: center;
            gap: 1.5rem;
            padding: 2rem 0 1.5rem 0;
        }

        /* Réordonnancement mobile : Logo en haut, puis Titre/Adresse, puis Copyright */
        .center {
            order: 1;
        }

        .left {
            order: 2;
            justify-content: center;
        }

        .right {
            order: 3;
        }

        .left-text h1 {
            font-size: 2.2rem;
            margin-bottom: 0.25rem;
        }

        .left-text h2,
        .right p {
            font-size: 1rem;
        }

        .center-img {
            width: 7rem;
        }

        .footer-container-bottom {
            flex-direction: column;
            gap: 0.75rem;
            padding: 1.5rem 0;
        }

        /* Masquage des barre séparatrices horizontales en mode colonne */
        .footer-separator {
            display: none;
        }

        .footer-link {
            font-size: 1rem;
        }
    }

    @media (max-width: 480px) {
        .left-text h1 {
            font-size: 1.8rem;
        }

        .left-text h2,
        .right p {
            font-size: 0.9rem;
        }

        .center-img {
            width: 6rem;
        }
    }
    `;

    return (
        <>
            <style>{ footerStyle }</style>
            <div className="footer-container noisyNonAbs">
                <div className="footer-container-top">
                    <div className="left">
                        <div className="left-text">
                            <h1 className="tangerine">Herberge In d'Hope</h1>
                            <h2 className="bricoFont">57 rue principale, 59470 Volckerinckhove</h2>
                        </div>
                    </div>
                    <div className="center">
                        <div className="center-img">
                            <img
                                src="/img/logoHerbergeindhope.png"
                                alt="logo du restaurant"
                                className="footer-logo"
                            />
                        </div>
                    </div>
                    <div className="right">
                        <p>© 2025 Herberge In d'Hope. Tous droits réservés.</p>
                    </div>
                </div>
                <div className="footer-container-bottom">
                    <Link to="/mentions-legales" className="footer-link bricoFont">
                        Mentions Légales
                    </Link>
                    <span className="footer-separator">|</span>
                    <Link to="/confidentialite" className="footer-link bricoFont">
                        Politique de Confidentialité
                    </Link>
                    <span className="footer-separator">|</span>
                    <Link to="/cgu" className="footer-link bricoFont">
                        CGU
                    </Link>
                </div>
            </div>
        </>
    );
};

export default Footer;