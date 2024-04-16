import {FaHome, FaRegHeart} from "react-icons/fa";
import {NavElement} from "@/components/header/navigation/nav-element/NavElement";
import {MdLocalMovies} from "react-icons/md";

const Navigation = () => {
    return (
        <div className="navigation basis-1/3 my-2 flex justify-center">
            <ul className="flex gap-x-7 capitalize">
                <NavElement icon={<FaHome/>} name={"home"} path={"/"}/>
                <NavElement icon={<MdLocalMovies />} name={"movies"} path={"/movies"}/>
                <NavElement icon={<FaRegHeart />} name={"watchlist"} path={"/watchlist"}/>
            </ul>
        </div>
    )
}

export default Navigation