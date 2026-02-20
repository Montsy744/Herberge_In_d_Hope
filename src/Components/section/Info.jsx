import Showroom from "./Showroom";

const Info = () => {
  return (
    <div
      id="infoPratique"
      className="flex flex-col justify-center items-center !mb-15"
    >
      <div className="flex justify-center items-center !m-30">
        <h2 className="tangerine text-9xl sectionTitle">
          <span className="title span">Practische weetn</span> Infos Pratiques
        </h2>
      </div>
      <div className="flex flex-col justify-center items-center">
        <Showroom />
      </div>
    </div>
  );
};

export default Info;
