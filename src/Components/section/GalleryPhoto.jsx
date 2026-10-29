import Snowfall from "react-snowfall";
import ButtonGallery from "../ButtonGallery";
import { ImgGallerieDessert, ImgGallerieEntrees, ImgGalleriePlat } from "../../../constant/constant";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import SplitText from "gsap/SplitText.js";

const galleryPhotoStyles = `
  .gallery-section {
    position: relative;
    width: 100vw;
    min-height: 100vh;
  }

  .gallery-container {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  .gallery-buttons-box {
    display: flex;
    justify-content: space-around;
    width: 66.666667%;
    margin-top: 3.75rem !important;
    margin-bottom: 2rem !important;
  }

  .gallery-category {
    margin-top: 2.5rem !important;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  .gallery-heading {
    font-size: 6rem;
    line-height: 1;
  }

  .gallery-grid {
    display: grid;
    grid-template-columns: repeat(3, minmax(0, 1fr));
    gap: 1.25rem;
    margin: 2.5rem !important;
  }

  .gallery-img {
    z-index: 10;
    width: 100%;
    height: auto;
    object-fit: cover;
  }

  @media (max-width: 1440px) {
    .gallery-buttons-box {
      width: 80%;
      margin-top: 2.5rem !important;
      margin-bottom: 1.5rem !important;
    }

    .gallery-heading {
      font-size: 5rem;
    }

    .gallery-grid {
      gap: 1rem;
      margin: 1.5rem !important;
    }
  }

  @media (max-width: 1024px) {
    .gallery-buttons-box {
      width: 90%;
      flex-direction: column;
      align-items: center;
      gap: 1rem;
    }

    .gallery-heading {
      font-size: 4rem;
    }

    .gallery-grid {
      grid-template-columns: repeat(1, minmax(0, 1fr));
      gap: 1.5rem;
    }
  }
`;

const GalleryPhoto = () => {
    useGSAP(() => {
        const titleGaleriSplit = new SplitText(".titleGalerie", { type: "chars, words" });
        gsap
        .timeline({
            scrollTrigger: {
            trigger: "#Galery",
            start: "top 30%",
            end: "top top",
            scrub: 1,
            },
        })
        .from(titleGaleriSplit.chars, {
            yPercent: 100,
            opacity: 0,
            duration: 2,
            ease: "expo.out",
            stagger: 0.4,
        });
    });

    return (
        <>
            <style>{galleryPhotoStyles}</style>

            <section id="Galery" className="gallery-section noisyNonAbs">
                <Snowfall color="#d49623" />
                <div className="gallery-container">
                    <h1 className="titleGalerie text">NOTRE GALERIE</h1>
                    <div className="gallery-buttons-box">
                        <ButtonGallery 
                        text={"Les entrées"}
                        onClick={() => document.getElementById("Galery-entrees").scrollIntoView({ behavior: "smooth" })}
                        />
                        <ButtonGallery 
                        text={"Les plats"}
                        onClick={() => document.getElementById("Galery-plat").scrollIntoView({ behavior: "smooth" })}
                        />
                        <ButtonGallery 
                        text={"Les desserts"}
                        onClick={() => document.getElementById("Galery-dessert").scrollIntoView({ behavior: "smooth" })}
                        />
                    </div>

                    <div id="Galery-entrees" className="gallery-category">
                        <h2 className="tangerine gallery-heading sectionTitle">
                            <span className="title span">poteeten</span> Les entrées
                        </h2>
                        <div className="gallery-grid">
                            {ImgGallerieEntrees.map((img, key) => (
                                <img key={ key } src={ img } alt="Photo de plat" className="gallery-img"/>
                            ))}
                        </div>
                    </div>
                    <div id="Galery-plat" className="gallery-category">
                        <h2 className="tangerine gallery-heading sectionTitle">
                            <span className="title span">poteeten</span>Les plats
                        </h2>
                        <div className="gallery-grid">
                            {ImgGalleriePlat.map((img, key) => (
                                <img key={ key } src={ img } alt="Photo de plat" className="gallery-img"/>
                            ))}
                        </div>
                    </div>
                    <div id="Galery-dessert" className="gallery-category">
                        <h2 className="tangerine gallery-heading sectionTitle">
                            <span className="title span">poteeten</span>Les desserts
                        </h2>
                        <div className="gallery-grid">
                            {ImgGallerieDessert.map((img, key) => (
                                <img key={ key } src={ img } alt="Photo de plat" className="gallery-img"/>
                            ))}
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default GalleryPhoto;