const About = () => {
  return (
    <div id="Apropos" className="min-h-screen flex justify-center items-center">
      <div className="w-2/3">
        <div className="grid grid-cols-3 gap-2">
          <div className="ImgNoisy">
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
            <h2 className="text tangerine text-9xl sectionTitle">
              <span className="title span">Oaver ons</span> A propos de nous
            </h2>
            <p className="text">
              Bienvenue à l'Herberge in d'Hope, au cœur du village de
              Volckerinckhove. Dans une ambiance chaleureuse et conviviale,
              découvrez une cuisine française authentique, faite maison avec des
              produits de qualité. Entre amis, en famille ou pour une occasion
              spéciale, profitez d’un moment gourmand où tradition et générosité
              sont à l’honneur.
            </p>
          </div>
        </div>
        <div className="grid grid-cols-3 gap-2 mt-6">
          <div className="col-span-2 flex items-baseline justify-baseline flex-col">
            <h2 className="title">
              <span></span>Une ambiance conviviale pour tous !
            </h2>
            <p className="text">
              Profitez d’un environnement chaleureux et accueillant. En
              choisissant notre établissement pour vos réceptions, vous
              bénéficiez de nombreux avantages : un agréable service en
              terrasse, un parking pratique, une connexion Wifi gratuite et d'un
              personnel à votre service. Vous célébrez un événement ? Profitez
              d’un service soigné, adapté à vos besoins. Notre établissement est
              accessible aux personnes en situation de handicap, dispose d’un
              espace fumeur, et accepte plusieurs moyens de paiement pour plus
              de confort.
            </p>
          </div>
          <div className=" ImgNoisy">
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
  );
};

export default About;
