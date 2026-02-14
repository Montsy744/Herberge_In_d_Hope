import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const ImagesGallery = ({ images }) => {

    useGSAP(() => {
        const parallaxTimeline =  gsap.timeline({
            scrollTrigger: {
                trigger: '.ImagesGallery',
                start: 'top 50%',
                end: 'bottom 80%',
                scrub: true,
            }
        })

        parallaxTimeline
        .from('.Img div', {
            opacity: 0,
            y: 100,
            duration: 1, 
            ease: 'power1.inOut', 
            stagger: 0.04,
        }, '-=0.5')
    });

    return (
        <div className="flex justify-center items-center w-screen min-h-[66vh] h-full ImagesGallery">
            <div className="flex flex-row justify-between items-center w-[90vw] Img">
                {images.map((src, index) => (
                    <div className="w-130">
                        <div className="ImgNoisy">
                            <div className="noisyImgContaineur">
                                <div className="noisy" />
                                    <img key={index} src={src} alt={ `img-${src}` } className="w-full h-full" />
                                </div>
                            </div>
                    </div>
                ))}
            </div>
        </div>
        
    )
}

export default ImagesGallery;