import { horraireShowroom } from "../../../constant/constant";

const Showroom = () => {
  return (
    <div id="showroom">
      <div className="w-screen">
        <div className="flex justify-center items-center flex-col">
          <div className="w-1/3">
            <div>
                <h2 className="text-(--primary) font-[Montserrat] text-3xl font-bold drop-shadow-md/30 text-center !m-5">Les Horaires d'ouverture du showroom </h2>
            </div>
            {horraireShowroom.map((prop) => (
              <div className="flex justify-between !mb-3">
                <p className="text">{prop.jour}</p>
                <p className="text-(--primary) font-[Montserrat] text-justify text-xl ">{prop.horraire}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Showroom;
