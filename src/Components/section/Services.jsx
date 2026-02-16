import { useGSAP } from "@gsap/react";
import { SplitText } from "gsap/all";
import gsap from "gsap";
import Snowfall from "react-snowfall";

const Services = () => {

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

    });
    return (
        <>
            
            <section id="nosService" className="relative noisyNonAbs">
                <Snowfall color="#d49623" />
                <div className="min-h-screen">
                    <h1 className="titleService text">NOS SERVICES</h1>

                </div>
            </section>
        </>
        
        
    );
}

export default Services;