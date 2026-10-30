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
        border-left: solid 1px var(--primary)    
        border-rigth: solid 1px var(--primary)
    }

    .center-img {
        width: 10rem;
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
            </div>
        </>
    )
}

export default Footer;