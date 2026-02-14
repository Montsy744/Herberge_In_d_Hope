import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const ChefWord = () => {

    useGSAP(() => {
    const scrollTimelineChef = gsap.timeline({
      scrollTrigger: {
            trigger: '#chef',
            start: 'top 80%',
            end: 'bottom 30%',
            scrub: true,
        }
    });

    scrollTimelineChef
    .from('.imgChefs, .textChef', {
        opacity: 0,
        y: 200,
        duration: 1, 
        ease: 'power1.inOut', 
        stagger: 0.04,
    }, '-=0.5')
  });

    return (
        <div className="flex justify-center" id="#chef">
            <div className="w-2/3">
                <div className="flex justify-center items-center w-full">
                    <h2 className="tangerine text-9xl sectionTitle" id="titreChef">
                        <span className="title span">'t Woord van den chef</span> Le mot des chefs
                    </h2>
                </div>

                <div className="grid grid-cols-2 gap-15">
                    <div>
                        <p className="text textChef">
                            À l'Herberge In d'Hope, chaque plat qui sort de notre cuisine est un hommage à notre belle région et à ses saveurs d’antan. Ici, pas de chichis : juste des produits frais, des recettes qui sentent bon la tradition, et un chef qui cuisine avec le cœur. Ce que j’aime, c’est voir les sourires autour des assiettes, entendre les discussions animées, sentir les parfums qui rappellent les repas en famille. C’est ça, l’esprit de notre auberge : un lieu simple, vrai, où l’on prend le temps de bien manger et de bien vivre. Merci de faire partie de cette aventure culinaire. Prenez place, détendez-vous, et surtout… bon appétit ! 
                        </p>
                    </div>
                    <div>
                        <img className="imgChefs rounded-3xl" src="/img/lesChefs.jpeg" alt="photo des chefs" />
                    </div>
                    
                </div>
            </div>
        </div>
        
    );
}

export default ChefWord;