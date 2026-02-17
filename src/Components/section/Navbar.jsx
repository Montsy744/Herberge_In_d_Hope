import { liensNavbar } from "../../../constant/constant";
import ButtonNavbar from "./../ContactBtn";

const Navbar = () => {
    return (
        <div className="z-10 flex justify-between items-center fixed w-full h-40 bg-[rgba(0,0,0,0.4)]">
            <div id="header_img" className="w-1/3 flex justify-center items-center">
                <img
                    src="/img/logoHerbergeindhope.png"
                    alt="logo du restaurant"
                    className="w-25"
                />
            </div>
            <div className="flex justify-between items-center w-1/3">
                {liensNavbar.map((link) => {
                    return <a 
                            href={link.href}
                            className="title"
                            >
                                {link.texte}
                            </a>
                })}
            </div>
            <div className="w-1/3 flex justify-center">
                <ButtonNavbar />
            </div>
        </div>
    )
};

export default Navbar;