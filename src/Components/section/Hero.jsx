const Hero = () => {
  return (
    <div
      id="Hero"
      className="w-screen h-screen flex justify-center items-center"
    >
      <div className="Imghero">
        <div className="md:col-span-3" id="imgFacade">
          <div className="noisy" />
          <img src="/img/herbergeFacade.jpg" alt="Facade du restaurant" />
        </div>

        <div className="ml-2 absolute bottom-20 left-10 w-4xl">
          <p className="title bricoFont3xl w-0.5 text-right">
            <span>Velekommen</span>
          </p>
          <p className="text-white tangerineFontxl">
            <strong>Herberge in d'Hope</strong>
          </p>
        </div>
        <div className="absolute bottom-20 right-10">
          <p className="text">
            <span>Spécialités régionales</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Hero;
