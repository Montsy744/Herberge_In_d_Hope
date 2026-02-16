import { textChef } from "../../../constant/constant";

const ChefWord = () => {

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
                            { textChef } 
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