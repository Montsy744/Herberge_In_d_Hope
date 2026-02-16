import { useGSAP } from "@gsap/react";
import { SplitText } from "gsap/all";
import gsap from "gsap";
import Snowfall from "react-snowfall";
import { service1, service2, service3 } from "../../../constant/constant";

const Services = () => {
  useGSAP(() => {
    const heroSplit = new SplitText(".titleService", { type: "chars, words" });
    gsap
      .timeline({
        scrollTrigger: {
          trigger: "#nosService",
          start: "top 30%",
          end: "bottom 100%",
          scrub: true,
        },
      })
      .from(heroSplit.chars, {
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
          <div className="flex justify-center">
            <div className="max-w-2/3">
              <div className="grid grid-cols-3 gap-2">
                <div className="col-span-1">
                  <ul>
                    {service1.map((string) => (
                      <div className="!my-12">
                        <span className="listService"></span>
                        <li className="text">{string}</li>
                      </div>
                    ))}
                  </ul>
                </div>
                <div className="col-span-1 col-start-3">
                  <ul>
                    {service2.map((string) => (
                      <div className="!my-12  text-right">
                        <span className="listService"></span>
                        <li className="textRight">{string}</li>
                      </div>
                    ))}
                  </ul>
                </div>
              </div>
              <div className="flex justify-center items-center flex-col w-full !my-12 text-center">
                <span className="listService"></span>
                <h2 className=" text-white font-[Montserrat] font-bold text-justify text-4xl">
                  {service3}
                </h2>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Services;
