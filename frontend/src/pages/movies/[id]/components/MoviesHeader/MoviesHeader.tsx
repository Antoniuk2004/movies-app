import MoviesHeaderLayout from "./MoviesHeaderLayout";
import {FaArrowLeft} from "react-icons/fa6";
import IconLayout from "@/pages/catalog/components/IconLayout";

const MoviesHeader = () => {
    return (
        <MoviesHeaderLayout>
            <IconLayout>
                <FaArrowLeft/>
            </IconLayout>
        </MoviesHeaderLayout>
    )
}

export default MoviesHeader;