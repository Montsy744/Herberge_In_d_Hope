import { useGSAP } from "@gsap/react";
import SplitText from "gsap/src/SplitText";
import gsap from "gsap";

const Hero = () => {

  useGSAP(() => {
    const titleSplit = new SplitText("#titleHero", { type: "chars" });

    const parallaxTimeline = gsap.timeline({
      scrollTrigger: {
        trigger: "#hero",
        start: "top 30%",
        end: "bottom 80%",
      },
    });

    parallaxTimeline
    .from(titleSplit.chars, {
      opacity: 0,
      yPercent: 100,
      duration: 1,
      ease: "expo.out",
      stagger: 0.03, 
    })
    .from('.paraHero', {
        opacity: 0,
        y: 100,
        duration: 1, 
        ease: 'power1.inOut', 
        stagger: 0.04,
    }, '-=0.5')
  });

  return (
    <div
      id="hero"
      className="w-screen h-screen flex justify-center items-center"
    >
      <div className="Imghero">
        <div id="imgFacade">
          <div className="noisy" />
          <img src="/img/convivialité_Hero_Section.jpg" alt="image de l'intérieure du restaurant" />
        </div>

        <div className="ml-2 absolute bottom-20 left-10 w-5xl">
          <p className="title bricoFont3xl w-0.5 text-right paraHero">
            <span>Velekommen</span>
          </p>
          <p className="tangerineFontxl" id="titleHero">
            <strong>Herberge in d'Hope</strong>
          </p>
        </div>
        <div className="absolute bottom-20 right-10">
          <p className="text paraHero text-3xl drop-shadow-md/50">
            <span>Spécialités régionales</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Hero;
