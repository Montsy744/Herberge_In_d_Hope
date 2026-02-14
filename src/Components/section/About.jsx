import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import { textAmnbianceConv, textApropos } from "../../../constant/constant";

gsap.registerPlugin(ScrollTrigger);

const About = () => {
useGSAP(() => {
  const scrollTimeline = gsap.timeline({
    scrollTrigger: {
      trigger: "#apropos",
      start: 'top 30%',
      end: 'bottom 90%',
      scrub: true,
    },
  });

  scrollTimeline.from(
    ".imgHautGaucheAPropos, .textHautDroiteAporpos",
    {
      opacity: 0,
      y: 100,
      duration: 1,
      ease: "power1.inOut",
      stagger: 0.04,
    },
    '-=0.5'
  )
  .from (
    ".imgDroiteBasApropos, .textBasGaucheAPropos", {
      opacity: 0,
      y: 100,
      duration: 1,
      ease: "power1.inOut",
      stagger: 0.04,
    },
    '-=0.5'
  )
});
  return (
    <div id="apropos">
      <div className="min-h-screen flex justify-center items-center">
        <div className="w-2/3">
          <div className="grid grid-cols-3 gap-2 m-6">
            <div className="ImgNoisy imgHautGaucheAPropos">
              <div className="noisyImgContaineur">
                <div className="noisy" />
                <img
                  className=""
                  src="/img/photNosServices2.jpg"
                  alt="image de la our extérieure"
                />
              </div>
            </div>

            <div className="col-span-2 flex items-baseline justify-end flex-col">
              <h2 className="tangerine text-9xl sectionTitle">
                <span className="title span">Oaver ons</span> A propos de nous
              </h2>
              <p className="text textHautDroiteAporpos">
                { textApropos }
              </p>
            </div>
          </div>
          <div className="grid grid-cols-3 gap-2 mt-6">
            <div className="col-span-2 flex items-baseline justify-baseline flex-col textBasGaucheAPropos">
              <h2 className="title">
                <span></span>Une ambiance conviviale pour tous !
              </h2>
              <p className="text">
                { textAmnbianceConv }
              </p>
            </div>
            <div className=" ImgNoisy imgDroiteBasApropos">
              <div className="noisyImgContaineur h-full">
                <div className="noisy" />
                <img
                  className="h-full"
                  src="/img/herbergeFacade.jpg"
                  alt="image de la our extérieure"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
