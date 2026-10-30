import { Link } from "react-router-dom";

const buttonHomeStyles = `
  .btn-home-container {
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 2rem 0;
  }

  .btn-home {
    position: relative;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    padding: 0.8rem 2rem;
    font-family: var(--font-brico, sans-serif);
    font-size: 1.1rem;
    font-weight: 600;
    color: #ffffff;
    background-color: transparent;
    border: 2px solid var(--primary, oklch(71.608% 0.14025 76.897));
    border-radius: 9999px;
    text-decoration: none;
    cursor: pointer;
    overflow: hidden;
    transition: all 0.3s ease;
    z-index: 1;
  }

  .btn-home::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 0%;
    height: 100%;
    background-color: var(--primary, oklch(71.608% 0.14025 76.897));
    transition: width 0.3s ease;
    z-index: -1;
  }

  .btn-home:hover {
    color: var(--secondary, #000000);
    box-shadow: 0 0 15px rgba(212, 150, 35, 0.4);
    transform: translateY(-2px);
  }

  .btn-home:hover::before {
    width: 100%;
  }
`;

const ButtonHome = ({ text = "Retour à l'accueil" }) => {
  return (
    <>
      <style>{buttonHomeStyles}</style>

      <div className="btn-home-container">
        <Link to="/" className="btn-home">
          {text}
        </Link>
      </div>
    </>
  );
};

export default ButtonHome;