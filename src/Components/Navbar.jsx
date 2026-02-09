import { liensNavbar } from "../../constant/constant";
import ButtonNavbar from "./ContactBtn";

const Navbar = () => {
    return (
        <div className="flex justify-between items-center fixed w-full">
            <div id="header_img" className="w-full">
                <img
                    src="/img/logoHerbergeindhope.png"
                    alt="logo du restaurant"
                    className="w-30"
                />
            </div>
            <div className="flex justify-between items-center w-full">
                {liensNavbar.map((link) => {
                    return <a 
                            href={link.href}
                            className="text-[var(--primary)] font-[Montserrat]"
                            >
                                {link.texte}
                            </a>
                })}
            </div>
            <div className="w-full flex justify-center">
                <ButtonNavbar />
            </div>
        </div>
    )
};

export default Navbar;