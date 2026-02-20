import Snowfall from "react-snowfall";
import { ImgGalleriePlat } from "../../../constant/constant";

const GalleryPhoto = () => {
    return (
        <section id="Galery" className="relative noisyNonAbs w-screen min-h-screen">
            <Snowfall color="#d49623" />
            <div className="flex flex-col justify-center items-center">
                <h1 className="titleGalerie text">NOTRE GALERIE</h1>
                <div id="plat" className="!mt-10 flex flex-col justify-center items-center">
                    <h2 className="tangerine text-8xl sectionTitle">
                        <span className="title span">poteeten</span>Les plats
                    </h2>
                    <div className="grid grid-cols-3 gap-5 !m-10">
                        {ImgGalleriePlat.map((img, key) => (
                            <img key={ key } src={ img } alt="Photo de plat" />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}

export default GalleryPhoto;