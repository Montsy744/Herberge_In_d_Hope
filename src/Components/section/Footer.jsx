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
        padding: 1rem 0 
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
    `

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
                </div>
            </div>
        </>
    )
}

export default Footer;