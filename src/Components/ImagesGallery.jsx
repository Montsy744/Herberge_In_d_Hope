import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const imagesGalleryStyles = `
  .gallery-container {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100vw;
    min-height: 66vh;
    height: 100%;
  }

  .gallery-wrapper {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    width: 90vw;
  }

  .gallery-item {
    width: 32.5rem;
  }

  .gallery-img {
    width: 100%;
    height: 100%;
  }

  @media (max-width: 1440px) {
    .gallery-wrapper {
      gap: 1.5rem;
    }

    .gallery-item {
      width: 100%;
    }
  }

  @media (max-width: 1024px) {
    .gallery-container {
      padding: 2rem 0;
    }

    .gallery-wrapper {
      flex-direction: column;
      gap: 2rem;
    }
  }
`;

const ImagesGallery = ({ images }) => {

    useGSAP(() => {
        const parallaxTimeline = gsap.timeline({
            scrollTrigger: {
                trigger: '.ImagesGallery',
                start: 'top 50%',
                end: 'bottom 80%',
                scrub: true,
            }
        });

        parallaxTimeline
        .from('.Img div', {
            opacity: 0,
            y: 100,
            duration: 1, 
            ease: 'power1.inOut', 
            stagger: 0.04,
        }, '-=0.5');
    });

    return (
        <>
            <style>{imagesGalleryStyles}</style>

            <div className="gallery-container ImagesGallery">
                <div className="gallery-wrapper Img">
                    {images.map((src, index) => (
                        <div key={index} className="gallery-item">
                            <div className="ImgNoisy">
                                <div className="noisyImgContaineur">
                                    <div className="noisy" />
                                    <img src={src} alt={`img-${src}`} className="gallery-img" />
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
};

export default ImagesGallery;