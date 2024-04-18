import DescriptionLayout from "./DescriptionLayout";
import {movieSignal} from "@/signals/movie-signal";

const Description = () => {
    const {description} = movieSignal.value;

    return (
        <DescriptionLayout>
            <span>{description}</span>
        </DescriptionLayout>
    )
}

export default Description;