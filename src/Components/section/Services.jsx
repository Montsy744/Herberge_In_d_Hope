import { useGSAP } from "@gsap/react";
import { SplitText } from "gsap/all";
import gsap from "gsap";
import { useRef } from "react";
import { useMediaQuery } from "react-responsive";

const Services = () => {
    const videoRef = useRef();
    const isMobile = useMediaQuery({ maxWidth: 768 });

    useGSAP(() => {
        const heroSplit = new SplitText(".titleService", { type: "chars, words" });
        gsap.timeline({
            scrollTrigger: {
            trigger: "#nosService",
            start: "top 30%",
            end: 'bottom 100%',
            scrub: true,
            },
        }).from(heroSplit.chars, {
            yPercent: 100,
            opacity: 0,
            duration: 1.8,
            ease: "expo.out",
            stagger: 0.06,
        });

        const startValue = isMobile ? "top 50%" : "center 60%";
        const endValue = isMobile ? "120% top" : "bottom top";

        let tl = gsap.timeline({
            scrollTrigger: {
                trigger: videoRef.current,
                start: startValue,
                end: endValue,
                scrub: true,
                pin: true,
            },
        });

        videoRef.current.onloadedmetadata = () => {
            tl.to(videoRef.current, {
                currentTime: videoRef.current.duration,
            });
        };
    }, []);
    return (
        <>
            <section id="nosService" className="relative noisyNonAbs">
                <div className="min-h-screen">
                    <h1 className="titleService text">NOS SERVICES</h1>

                </div>
                <div className="video absolute inset-0">
                    <video
                        ref={videoRef}
                        muted
                        playsInline
                        preload="auto"
                        src="/video/output.mp4"
                    />
                </div>
            </section>
        </>
        
        
    );
}

export default Services;