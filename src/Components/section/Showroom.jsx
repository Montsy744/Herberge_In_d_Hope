import { useGSAP } from "@gsap/react";
import { horraireShowroom } from "../../../constant/constant";
import gsap from "gsap";

const Showroom = () => {
  useGSAP(() => {
    gsap
      .timeline({
        scrollTrigger: {
          trigger: "#showroom",
          start: "top 30%",
          end: "bottom 100%",
          scrub: 1,
        },
      })
      .from(
        ".horraire",
        {
          yPercent: 100,
          opacity: 0,
          duration: 2,
          ease: "expo.out",
          stagger: 0.7,
        },
        "-=0.5",
      );
  });
  return (
    <div id="showroom">
      <div className="w-screen">
        <div className="flex justify-center items-center flex-col">
          <div className="w-1/3">
            <div>
              <h2 className="text-(--primary) font-[Montserrat] text-3xl font-bold drop-shadow-md/30 text-center !m-5">
                Les Horaires d'ouverture du showroom
              </h2>
            </div>
            {horraireShowroom.map((prop) => (
              <div className="flex justify-between !mb-3 horraire">
                <p className="text">{prop.jour}</p>
                <p className="text-(--primary) font-[Montserrat] text-justify text-xl ">
                  {prop.horraire}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Showroom;
